{PropertiesIterator} = require './engine/util'

OpcodeClassFactory = (->
  # opcode id, correspond to the index in the opcodes array and is used
  # to represent serialized opcodes
  id = 0

  classFactory = (name, argc, fn, opc) ->
    # generate opcode class
    OpcodeClass = (->
      # this is ugly but its the only way I found to get nice opcode
      # names when debugging with web inspector
      constructor = eval("(function #{name}(args) { this.args = args; })")
      constructor::id = id++
      constructor::name = name
      constructor::opc = opc
      if typeof argc == 'function'
        constructor::execImpl = argc
        constructor::argc = 0
      else
        constructor::execImpl = fn
        constructor::argc = argc
      if constructor::argc && opc
        constructor::exec = (f) ->
          @execImpl.apply(this, [f].concat(@args, f.popn(@opc)))
      else if constructor::argc
        constructor::exec = (f) ->
          @execImpl.apply(this, [f].concat(@args))
      else if opc
        constructor::exec = (f) ->
          @execImpl.apply(this, [f].concat(f.popn(@opc)))
      else
        constructor::exec = (f) ->
          @execImpl(f)
      return constructor
    )()
    return OpcodeClass
  return classFactory
)()

Op = (name, argc, fn) -> OpcodeClassFactory(name, argc, fn, 0)
UOp = (name, argc, fn) -> OpcodeClassFactory(name, argc, fn, 1)
BOp = (name, argc, fn) -> OpcodeClassFactory(name, argc, fn, 2)
TOp = (name, argc, fn) -> OpcodeClassFactory(name, argc, fn, 3)

opcodes = [
  # 0-arg opcodes
  Op 'POP', (f) -> f.pop()                         # remove top
  Op 'DUP', (f) -> f.push(f.top())                 # duplicate top
  Op 'SCOPE', (f) -> f.push(f.scope)               # push local scope reference
  Op 'RET', (f) -> f.ret()                         # return from function
  Op 'RETV', (f) -> f.retv(f.pop())                # return value from function
  Op 'THRW', (f) -> f.thrw(f.pop())                # throw something
  Op 'CHECK', (f) -> f.check()                     # throw something
  Op 'DEBUG', (f) -> f.debug()                     # pause execution
  Op 'ITER_PROPS', (f) ->                          # iterator that yields
    f.push(new PropertiesIterator(f.pop()))        # enumerable properties

  # 0-arg unary opcodes
  UOp 'INV', (f, o) -> f.push(-o)                  # invert signal
  UOp 'LNOT', (f, o) -> f.push(!o)                 # logical NOT
  UOp 'NOT', (f, o) -> f.push(~o)                  # bitwise NOT

  # 0-args binary opcodes
  BOp 'GET', (f, n, o) -> f.push(f.get(o, n))      # get name from object
                                                   # by the one below
  BOp 'ADD', (f, r, l) -> f.push(l + r)            # sum
  BOp 'SUB', (f, r, l) -> f.push(l - r)            # difference
  BOp 'MUL', (f, r, l) -> f.push(l * r)            # product
  BOp 'DIV', (f, r, l) -> f.push(l / r)            # division
  BOp 'MOD', (f, r, l) -> f.push(l % r)            # modulo
  BOp 'SHL', (f, r, l) ->  f.push(l << r)          # left shift
  BOp 'SAR', (f, r, l) -> f.push(l >> r)           # right shift
  BOp 'SHR', (f, r, l) -> f.push(l >>> r)          # unsigned right shift
  BOp 'OR', (f, r, l) -> f.push(l | r)             # bitwise OR
  BOp 'AND', (f, r, l) -> f.push(l & r)            # bitwise AND
  BOp 'XOR', (f, r, l) -> f.push(l ^ r)            # bitwise XOR
  # tests
  BOp 'CEQ', (f, r, l) -> f.push(`l == r`)         # equals
  BOp 'CNEQ', (f, r, l) -> f.push(`l != r`)        # not equals
  BOp 'CID', (f, r, l) -> f.push(l == r)           # same
  BOp 'CNID', (f, r, l) -> f.push(l != r)          # not same
  BOp 'LT', (f, r, l) -> f.push(l < r)             # less than
  BOp 'LTE', (f, r, l) -> f.push(l <= r)           # less or equal than
  BOp 'GT', (f, r, l) -> f.push(l > r)             # greater than
  BOp 'GTE', (f, r, l) -> f.push(l >= r)           # greater or equal than
  BOp 'IN', (f, r, l) -> f.push(l of r)            # contains property
  BOp 'INSTANCE_OF', (f, r, l) ->                  # instance of
    f.push(l instanceof r)

  # 0-arg ternary opcodes
  TOp 'SET', (f, v, n, o) -> f.set(o, n, v)        # set name = val on object

  # 1-args opcodes
  Op 'JMP', 1, (f, ip) -> f.jump(ip)               # unconditional jump
  Op 'JMPT', 1, (f, ip) -> f.jump(ip) if f.pop()   # jump if true
  Op 'JMPF', 1, (f, ip) -> f.jump(ip) if !f.pop()  # jump if false
  Op 'LITERAL', 1, (f, value) -> f.push(value)     # push literal value
  Op 'OBJECT_LITERAL', 1, (f, length) ->           # object literal
    rv = {}
    while length--
      value = f.pop()
      rv[f.pop()] = value
    f.push(rv)
  Op 'ARRAY_LITERAL', 1, (f, length) ->            # array literal
    rv = new Array(length)
    while length--
      rv[length] = f.pop()
    f.push(rv)
  Op 'FUNCTION', 1, (f, i) -> f.fn(i)              # push function reference
  Op 'SAVE', 1, (f, n) -> f.save(n)                # save temporary value
  Op 'LOAD', 1, (f, n) -> f.load(n)                # load temporary value
  Op 'PULL', 1, (f, n) -> f.pull(n)                # load/del temporary value

  # 2-args opcodes
  Op 'REST_INIT', 2, (f, i, n) -> f.restInit(i, n) # initialize 'rest' param
  Op 'CALL', 2, (f, l, m) -> f.call(l, m)          # call function

]

module.exports = opcodes
