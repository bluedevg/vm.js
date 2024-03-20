import{P as PaperRippleBehavior,b as assert,y as I18nMixin,j as hexColorToSkColor,c as skColorToRgba,N as NewTabPageProxy,F as FocusOutlineManager,a as assertNotReached,E as EventTracker,w as createScrollBorders,k as CustomizeDialogPage,B as BrowserCommandProxy,l as CrAutoImgElement,W as WindowProxy,C as Command,z as assertInstanceof,h as hasKeyModifiers,D as isRTL,G as isIOS,J as getDeepActiveElement,K as isWindows,L as isMac,i as recordLoadDuration,r as recordDuration,n as recordOccurence,M as listenOnce,g as getFaviconForPageURL,S as SUPPORTED_FILE_TYPES,p as processFile,o as recordPerdecage,H as HelpBubbleMixin}from"./shared.rollup.js";export{V as VoiceSearchOverlayElement}from"./shared.rollup.js";import{html,mixinBehaviors,PolymerElement,Polymer,dom,dedupingMixin,templatize,afterNextRender,microTask}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import{CustomizeThemesHandlerRemote,CustomizeThemesClientCallbackRouter,CustomizeThemesHandlerFactory,ThemeType}from"chrome://resources/cr_components/customize_themes/customize_themes.mojom-webui.js";import"./strings.m.js";import{loadTimeData}from"chrome://resources/js/load_time_data.js";import{CustomizeDialogAction,OptInStatus as OptInStatus$1,IphFeature}from"./new_tab_page.mojom-webui.js";import{CartHandler,ConsentStatus}from"./chrome_cart.mojom-webui.js";import{DriveHandler}from"./drive.mojom-webui.js";import{FeedHandler}from"./feed.mojom-webui.js";import{PageHandler}from"./history_clusters.mojom-webui.js";import"./discount.mojom-webui.js";import{LayoutType}from"./history_clusters_layout_type.mojom-webui.js";import{PhotosHandler}from"./photos.mojom-webui.js";import{RecipesHandler}from"./recipes.mojom-webui.js";import{InteractionState,Annotation}from"./history_cluster_types.mojom-webui.js";import{PageHandler as PageHandler$1}from"./history_clusters_v2.mojom-webui.js";import{PageHandler as PageHandler$2}from"./tab_resumption.mojom-webui.js";import{TextDirection}from"chrome://resources/mojo/mojo/public/mojom/base/text_direction.mojom-webui.js";import{MostVisitedPageCallbackRouter,MostVisitedPageHandlerRemote,MostVisitedPageHandlerFactory}from"chrome://resources/cr_components/most_visited/most_visited.mojom-webui.js";import{PageImageServiceHandler,ClientId}from"chrome://resources/cr_components/page_image_service/page_image_service.mojom-webui.js";import"chrome://resources/mojo/mojo/public/js/bindings.js";import"chrome://resources/mojo/mojo/public/mojom/base/time.mojom-webui.js";function getTemplate$I(){return html`<!--_html_template_start_-->    <style>:host{--cr-toggle-checked-bar-color:var(--google-blue-600);--cr-toggle-checked-button-color:var(--google-blue-600);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-600-rgb), .2);--cr-toggle-ripple-diameter:40px;--cr-toggle-unchecked-bar-color:var(--google-grey-400);--cr-toggle-unchecked-button-color:white;--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-600-rgb), .15);-webkit-tap-highlight-color:transparent;cursor:pointer;display:block;min-width:34px;outline:0;position:relative;width:34px}:host-context([chrome-refresh-2023]):host{--cr-toggle-checked-bar-color:var(--color-toggle-button-track-on,
                var(--cr-fallback-color-primary));--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on,
                var(--cr-fallback-color-on-primary));--cr-toggle-unchecked-bar-color:var(--color-toggle-button-track-off,
                var(--cr-fallback-color-surface-variant));--cr-toggle-unchecked-button-color:var(--color-toggle-button-thumb-off,
                var(--cr-fallback-color-outline));--cr-toggle-disabled-opacity:1;--cr-toggle-checked-ripple-color:var(--cr-active-background-color);--cr-toggle-unchecked-ripple-color:var(--cr-active-background-color);--cr-toggle-ripple-diameter:20px;--cr-toggle-bar-border-color:var(--cr-toggle-unchecked-button-color);--cr-toggle-bar-border:1px solid var(--cr-toggle-bar-border-color);--cr-toggle-bar-width:26px;--cr-toggle-knob-diameter:8px;height:fit-content;isolation:isolate;min-width:initial;width:fit-content}@media (forced-colors:active){:host{forced-color-adjust:none}}@media (prefers-color-scheme:dark){:host{--cr-toggle-checked-bar-color:var(--google-blue-300);--cr-toggle-checked-button-color:var(--google-blue-300);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-300-rgb), .4);--cr-toggle-unchecked-bar-color:var(--google-grey-500);--cr-toggle-unchecked-button-color:var(--google-grey-300);--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-300-rgb), .4)}}:host([dark]){--cr-toggle-checked-bar-color:var(--google-blue-300);--cr-toggle-checked-button-color:var(--google-blue-300);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-300-rgb), .4);--cr-toggle-unchecked-bar-color:var(--google-grey-500);--cr-toggle-unchecked-button-color:var(--google-grey-300);--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-300-rgb), .4)}:host-context([chrome-refresh-2023]):host(:active){--cr-toggle-knob-diameter:10px}:host-context([chrome-refresh-2023]):host([checked]){--cr-toggle-bar-border-color:var(--cr-toggle-checked-bar-color);--cr-toggle-knob-diameter:12px}:host-context([chrome-refresh-2023]):host([checked]:active){--cr-toggle-knob-diameter:14px}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]){--cr-toggle-checked-bar-color:var(--color-toggle-button-track-on-disabled,
                var(--cr-fallback-color-disabled-background));--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on-disabled, var(--cr-fallback-color-surface));--cr-toggle-unchecked-bar-color:transparent;--cr-toggle-unchecked-button-color:var(--color-toggle-button-thumb-off-disabled,
                var(--cr-fallback-color-disabled-foreground));--cr-toggle-bar-border-color:var(--cr-toggle-unchecked-button-color);opacity:var(--cr-toggle-disabled-opacity)}:host-context([chrome-refresh-2023]):host([checked][disabled]){--cr-toggle-bar-border:none}#bar{background-color:var(--cr-toggle-unchecked-bar-color);border-radius:8px;height:12px;left:3px;position:absolute;top:2px;transition:background-color linear 80ms;width:28px;z-index:0}:host([checked]) #bar{background-color:var(--cr-toggle-checked-bar-color);opacity:var(--cr-toggle-checked-bar-opacity,.5)}:host-context([chrome-refresh-2023]) #bar{border:var(--cr-toggle-bar-border);border-radius:50px;box-sizing:border-box;display:block;height:16px;opacity:1;position:initial;width:var(--cr-toggle-bar-width)}:host-context([chrome-refresh-2023]):host(:focus-visible) #bar{outline:2px solid var(--cr-toggle-checked-bar-color);outline-offset:2px}#knob{background-color:var(--cr-toggle-unchecked-button-color);border-radius:50%;box-shadow:var(--cr-toggle-box-shadow,0 1px 3px 0 rgba(0,0,0,.4));display:block;height:16px;position:relative;transition:transform linear 80ms,background-color linear 80ms;width:16px;z-index:1}:host([checked]) #knob{background-color:var(--cr-toggle-checked-button-color);transform:translate3d(18px,0,0)}:host-context([dir=rtl]):host([checked]) #knob{transform:translate3d(-18px,0,0)}:host-context([chrome-refresh-2023]) #knob{--cr-toggle-knob-center-edge-distance_:8px;--cr-toggle-knob-direction_:1;--cr-toggle-knob-travel-distance_:calc(
            0.5 * var(--cr-toggle-bar-width) -
            var(--cr-toggle-knob-center-edge-distance_));--cr-toggle-knob-position-center_:calc(
            0.5 * var(--cr-toggle-bar-width) + -50%);--cr-toggle-knob-position-start_:calc(
            var(--cr-toggle-knob-position-center_) -
            var(--cr-toggle-knob-direction_) *
            var(--cr-toggle-knob-travel-distance_));--cr-toggle-knob-position-end_:calc(
            var(--cr-toggle-knob-position-center_) +
            var(--cr-toggle-knob-direction_) *
            var(--cr-toggle-knob-travel-distance_));box-shadow:none;height:var(--cr-toggle-knob-diameter);position:absolute;top:50%;transform:translate(var(--cr-toggle-knob-position-start_),-50%);transition:transform linear 80ms,background-color linear 80ms,width linear 80ms,height linear 80ms;width:var(--cr-toggle-knob-diameter)}:host-context([dir=rtl][chrome-refresh-2023]) #knob{left:0;--cr-toggle-knob-direction_:-1}:host-context([chrome-refresh-2023]):host([checked]) #knob{transform:translate(var(--cr-toggle-knob-position-end_),-50%)}:host-context([chrome-refresh-2023]):host([checked]:active) #knob,:host-context([chrome-refresh-2023]):host([checked]:hover) #knob{--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on-hover,
                var(--cr-fallback-color-primary-container))}:host-context([chrome-refresh-2023]):host(:hover) #knob::before{background-color:var(--cr-hover-background-color);border-radius:50%;content:'';height:var(--cr-toggle-ripple-diameter);left:calc(var(--cr-toggle-knob-diameter)/ 2);position:absolute;top:calc(var(--cr-toggle-knob-diameter)/ 2);transform:translate(-50%,-50%);width:var(--cr-toggle-ripple-diameter)}paper-ripple{--paper-ripple-opacity:1;color:var(--cr-toggle-unchecked-ripple-color);height:var(--cr-toggle-ripple-diameter);left:50%;outline:var(--cr-toggle-ripple-ring,none);pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);transition:color linear 80ms;width:var(--cr-toggle-ripple-diameter)}:host([checked]) paper-ripple{color:var(--cr-toggle-checked-ripple-color)}:host-context([dir=rtl]) paper-ripple{left:auto;right:50%;transform:translate(50%,-50%)}</style>
    <span id="bar"></span>
    <span id="knob"></span>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MOVE_THRESHOLD_PX=5;const CrToggleElementBase=mixinBehaviors([PaperRippleBehavior],PolymerElement);class CrToggleElement extends CrToggleElementBase{constructor(){super(...arguments);this.boundPointerMove_=null;this.handledInPointerMove_=false;this.pointerDownX_=0}static get is(){return"cr-toggle"}static get template(){return getTemplate$I()}static get properties(){return{checked:{type:Boolean,value:false,reflectToAttribute:true,observer:"checkedChanged_",notify:true},dark:{type:Boolean,value:false,reflectToAttribute:true},disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"}}}ready(){super.ready();if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}this.setAttribute("aria-pressed",this.checked?"true":"false");this.setAttribute("aria-disabled",this.disabled?"true":"false");if(!document.documentElement.hasAttribute("chrome-refresh-2023")){this.addEventListener("blur",this.hideRipple_.bind(this));this.addEventListener("focus",this.onFocus_.bind(this))}this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));this.addEventListener("pointerdown",this.onPointerDown_.bind(this));this.addEventListener("pointerup",this.onPointerUp_.bind(this))}connectedCallback(){super.connectedCallback();const direction=this.matches(":host-context([dir=rtl]) cr-toggle")?-1:1;this.boundPointerMove_=e=>{e.preventDefault();const diff=e.clientX-this.pointerDownX_;if(Math.abs(diff)<MOVE_THRESHOLD_PX){return}this.handledInPointerMove_=true;const shouldToggle=diff*direction<0&&this.checked||diff*direction>0&&!this.checked;if(shouldToggle){this.toggleState_(false)}}}checkedChanged_(){this.setAttribute("aria-pressed",this.checked?"true":"false")}disabledChanged_(){this.setAttribute("tabindex",this.disabled?"-1":"0");this.setAttribute("aria-disabled",this.disabled?"true":"false")}onFocus_(){this.getRipple().showAndHoldDown()}hideRipple_(){this.getRipple().clear()}onPointerUp_(){assert(this.boundPointerMove_);this.removeEventListener("pointermove",this.boundPointerMove_);this.hideRipple_()}onPointerDown_(e){if(e.button!==0){return}this.setPointerCapture(e.pointerId);this.pointerDownX_=e.clientX;this.handledInPointerMove_=false;assert(this.boundPointerMove_);this.addEventListener("pointermove",this.boundPointerMove_)}onClick_(e){e.stopPropagation();e.preventDefault();if(this.handledInPointerMove_){return}this.toggleState_(false)}toggleState_(fromKeyboard){if(this.disabled){return}if(!fromKeyboard){this.hideRipple_()}this.checked=!this.checked;this.dispatchEvent(new CustomEvent("change",{bubbles:true,composed:true,detail:this.checked}))}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.toggleState_(true)}}onKeyUp_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.key===" "){this.toggleState_(true)}}_createRipple(){this._rippleContainer=this.$.knob;const ripple=super._createRipple();ripple.id="ink";ripple.setAttribute("recenters","");ripple.classList.add("circle","toggle-ink");return ripple}}customElements.define(CrToggleElement.is,CrToggleElement);function getTemplate$H(){return html`<!--_html_template_start_--><style>iron-icon{--iron-icon-height:var(--cr-icon-size);--iron-icon-width:var(--cr-icon-size);padding-inline-end:10px}cr-dialog::part(body-container){padding-inline-start:35px}</style>

<cr-dialog id="dialog" close-text="[[i18n('close')]]" show-on-attach>
  <div slot="title">
    <iron-icon icon="cr:domain" role="img" aria-label="[[i18n('controlledSettingPolicy')]]">
    </iron-icon>
    [[title]]
  </div>
  <div slot="body">[[body]]</div>
  <div slot="button-container">
    <cr-button class="action-button" on-click="onOkClick_">
      [[i18n('ok')]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ManagedDialogElementBase=I18nMixin(PolymerElement);class ManagedDialogElement extends ManagedDialogElementBase{static get is(){return"managed-dialog"}static get template(){return getTemplate$H()}static get properties(){return{title:String,body:String}}onOkClick_(){this.$.dialog.close()}}customElements.define(ManagedDialogElement.is,ManagedDialogElement);function getTemplate$G(){return html`<!--_html_template_start_--><style>:host{--cr-grid-gap:0px;--cr-column-width:auto;--cr-grid-width:fit-content}#grid{display:grid;grid-gap:var(--cr-grid-gap);grid-template-columns:repeat(var(--cr-grid-columns),var(--cr-column-width));width:var(--cr-grid-width)}::slotted(*){align-self:center;justify-self:center}</style>
<div id="grid" on-keydown="onKeyDown_">
  <slot id="items"></slot>
</div>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrGridElement extends PolymerElement{constructor(){super(...arguments);this.disableArrowNavigation=false;this.columns=1}static get is(){return"cr-grid"}static get template(){return getTemplate$G()}static get properties(){return{columns:{type:Number,observer:"onColumnsChange_"},disableArrowNavigation:Boolean}}onColumnsChange_(){this.updateStyles({"--cr-grid-columns":this.columns})}onKeyDown_(e){if(!this.disableArrowNavigation&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.key)){e.preventDefault();const items=this.$.items.assignedElements().filter((el=>!!(el.offsetWidth||el.offsetHeight||el.getClientRects().length)));const currentIndex=items.indexOf(e.target);const isRtl=window.getComputedStyle(this)["direction"]==="rtl";const bottomRowColumns=items.length%this.columns;const direction=["ArrowRight","ArrowDown"].includes(e.key)?1:-1;const inEdgeRow=direction===1?currentIndex>=items.length-bottomRowColumns:currentIndex<this.columns;let delta=0;switch(e.key){case"ArrowLeft":case"ArrowRight":delta=direction*(isRtl?-1:1);break;case"ArrowUp":case"ArrowDown":delta=direction*(inEdgeRow?bottomRowColumns:this.columns);break}if(e.key==="ArrowUp"&&inEdgeRow&&currentIndex>=bottomRowColumns){delta-=this.columns}else if(e.key==="ArrowDown"&&!inEdgeRow&&currentIndex+delta>=items.length){delta+=bottomRowColumns}const newIndex=(items.length+currentIndex+delta)%items.length;items[newIndex].focus()}if(["Enter"," "].includes(e.key)){e.preventDefault();e.stopPropagation();e.target.click()}}}customElements.define(CrGridElement.is,CrGridElement);function getTemplate$F(){return html`<!--_html_template_start_--><style>:host{--cr-theme-icon-size:72px;cursor:pointer;display:block}:host,svg{display:block;height:var(--cr-theme-icon-size);width:var(--cr-theme-icon-size)}#ring{fill:rgba(var(--google-blue-600-rgb),.4);visibility:hidden}#checkMark{visibility:hidden}:host([selected]) #checkMark,:host([selected]) #ring{visibility:visible}#circle{fill:url(#gradient);stroke:var(--cr-theme-icon-stroke-color,var(--cr-theme-icon-frame-color));stroke-width:1}#leftColor{stop-color:var(--cr-theme-icon-active-tab-color)}#rightColor{stop-color:var(--cr-theme-icon-frame-color)}#checkMark circle{fill:var(--google-blue-600)}#checkMark path{fill:#fff}@media (prefers-color-scheme:dark){#checkMark circle{fill:var(--google-blue-300)}#checkMark path{fill:var(--google-grey-900)}}:host-context([dir=rtl]) #checkMark{transform:translateX(3.5px)}</style>
<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="gradient" gradientUnits="objectBoundingBox" x1="50%" y1="0" x2="50.01%" y2="0">
      <stop id="leftColor" offset="0%"></stop>
      <stop id="rightColor" offset="100%"></stop>
    </linearGradient>
  </defs>
  <circle id="ring" cx="36" cy="36" r="36"></circle>
  <circle id="circle" cx="36" cy="36" r="32"></circle>
  <g id="checkMark" transform="translate(48.5, 3.5)">
    <circle cx="10" cy="10" r="10"></circle>
    <path d="m 2.9885708,9.99721 5.0109458,4.98792 0.00275,-0.003
        0.024151,0.0227 8.9741604,-9.01557 -1.431323,-1.42476 -7.5742214,7.6092
        -3.6031671,-3.58665 z">
    </path>
  </g>
</svg>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ThemeIconElement extends PolymerElement{static get is(){return"cr-theme-icon"}static get template(){return getTemplate$F()}}customElements.define(ThemeIconElement.is,ThemeIconElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({_template:html`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        user-select: none;
        cursor: default;
      }

      #tooltip {
        display: block;
        outline: none;
        font-size: 10px;
        line-height: 1;
        background-color: var(--paper-tooltip-background, #616161);
        color: var(--paper-tooltip-text-color, white);
        padding: 8px;
        border-radius: 2px;
      }

      @keyframes keyFrameScaleUp {
        0% {
          transform: scale(0.0);
        }
        100% {
          transform: scale(1.0);
        }
      }

      @keyframes keyFrameScaleDown {
        0% {
          transform: scale(1.0);
        }
        100% {
          transform: scale(0.0);
        }
      }

      @keyframes keyFrameFadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameFadeOutOpacity {
        0% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes keyFrameSlideDownIn {
        0% {
          transform: translateY(-2000px);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameSlideDownOut {
        0% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-2000px);
          opacity: 0;
        }
      }

      .fade-in-animation {
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameFadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
      }

      .fade-out-animation {
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 0ms);
        animation-name: keyFrameFadeOutOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
      }

      .scale-up-animation {
        transform: scale(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameScaleUp;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
      }

      .scale-down-animation {
        transform: scale(1);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameScaleDown;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
      }

      .slide-down-animation {
        transform: translateY(-2000px);
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownIn;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
      }

      .slide-down-animation-out {
        transform: translateY(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownOut;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
      }

      .cancel-animation {
        animation-delay: -30s !important;
      }

      /* Thanks IE 10. */

      .hidden {
        display: none !important;
      }
    </style>

    <div id="tooltip" class="hidden" part="tooltip">
      <slot></slot>
    </div>
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:false,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:false},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:false}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){if(this._manualTarget)return this._manualTarget;var parentNode=dom(this).parentNode;var ownerRoot=dom(this).getOwnerRoot();var target;if(this.for){target=dom(ownerRoot).querySelector("#"+this.for)}else{target=parentNode.nodeType==Node.DOCUMENT_FRAGMENT_NODE?ownerRoot.host:parentNode}return target},set target(target){this._manualTarget=target;this._findTarget()},attached:function(){this._findTarget()},detached:function(){if(!this.manualMode)this._removeListeners()},playAnimation:function(type){if(type==="entry"){this.show()}else if(type==="exit"){this.hide()}},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(this._showing)return;if(dom(this).textContent.trim()===""){var allChildrenEmpty=true;var effectiveChildren=dom(this).getEffectiveChildNodes();for(var i=0;i<effectiveChildren.length;i++){if(effectiveChildren[i].textContent.trim()!==""){allChildrenEmpty=false;break}}if(allChildrenEmpty){return}}this._showing=true;this.$.tooltip.classList.remove("hidden");this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.updatePosition();this._animationPlaying=true;this.$.tooltip.classList.add(this._getAnimationType("entry"))},hide:function(){if(!this._showing){return}if(this._animationPlaying){this._showing=false;this._cancelAnimation();return}else{this._onAnimationFinish()}this._showing=false;this._animationPlaying=true},updatePosition:function(){if(!this._target)return;var offsetParent=this._composedOffsetParent();if(!offsetParent)return;var offset=this.offset;if(this.marginTop!=14&&this.offset==14)offset=this.marginTop;var parentRect=offsetParent.getBoundingClientRect();var targetRect=this._target.getBoundingClientRect();var thisRect=this.getBoundingClientRect();var horizontalCenterOffset=(targetRect.width-thisRect.width)/2;var verticalCenterOffset=(targetRect.height-thisRect.height)/2;var targetLeft=targetRect.left-parentRect.left;var targetTop=targetRect.top-parentRect.top;var tooltipLeft,tooltipTop;switch(this.position){case"top":tooltipLeft=targetLeft+horizontalCenterOffset;tooltipTop=targetTop-thisRect.height-offset;break;case"bottom":tooltipLeft=targetLeft+horizontalCenterOffset;tooltipTop=targetTop+targetRect.height+offset;break;case"left":tooltipLeft=targetLeft-thisRect.width-offset;tooltipTop=targetTop+verticalCenterOffset;break;case"right":tooltipLeft=targetLeft+targetRect.width+offset;tooltipTop=targetTop+verticalCenterOffset;break}if(this.fitToVisibleBounds){if(parentRect.left+tooltipLeft+thisRect.width>window.innerWidth){this.style.right="0px";this.style.left="auto"}else{this.style.left=Math.max(0,tooltipLeft)+"px";this.style.right="auto"}if(parentRect.top+tooltipTop+thisRect.height>window.innerHeight){this.style.bottom=parentRect.height-targetTop+offset+"px";this.style.top="auto"}else{this.style.top=Math.max(-parentRect.top,tooltipTop)+"px";this.style.bottom="auto"}}else{this.style.left=tooltipLeft+"px";this.style.top=tooltipTop+"px"}},_addListeners:function(){if(this._target){this.listen(this._target,"mouseenter","show");this.listen(this._target,"focus","show");this.listen(this._target,"mouseleave","hide");this.listen(this._target,"blur","hide");this.listen(this._target,"tap","hide")}this.listen(this.$.tooltip,"animationend","_onAnimationEnd");this.listen(this,"mouseenter","hide")},_findTarget:function(){if(!this.manualMode)this._removeListeners();this._target=this.target;if(!this.manualMode)this._addListeners()},_delayChange:function(newValue){if(newValue!==500){this.updateStyles({"--paper-tooltip-delay-in":newValue+"ms"})}},_manualModeChanged:function(){if(this.manualMode)this._removeListeners();else this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry"));this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){if(this._showing){this.$.tooltip.classList.remove(this._getAnimationType("entry"));this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.add(this._getAnimationType("exit"))}},_onAnimationEnd:function(){this._animationPlaying=false;if(!this._showing){this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.$.tooltip.classList.add("hidden")}},_getAnimationType:function(type){if(type==="entry"&&this.animationEntry!==""){return this.animationEntry}if(type==="exit"&&this.animationExit!==""){return this.animationExit}if(this.animationConfig[type]&&typeof this.animationConfig[type][0].name==="string"){if(this.animationConfig[type][0].timing&&this.animationConfig[type][0].timing.delay&&this.animationConfig[type][0].timing.delay!==0){var timingDelay=this.animationConfig[type][0].timing.delay;if(type==="entry"){this.updateStyles({"--paper-tooltip-delay-in":timingDelay+"ms"})}else if(type==="exit"){this.updateStyles({"--paper-tooltip-delay-out":timingDelay+"ms"})}}return this.animationConfig[type][0].name}},_removeListeners:function(){if(this._target){this.unlisten(this._target,"mouseenter","show");this.unlisten(this._target,"focus","show");this.unlisten(this._target,"mouseleave","hide");this.unlisten(this._target,"blur","hide");this.unlisten(this._target,"tap","hide")}this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd");this.unlisten(this,"mouseenter","hide")},_composedOffsetParent:function(){for(let ancestor=this;ancestor;ancestor=flatTreeParent(ancestor)){if(!(ancestor instanceof Element))continue;if(getComputedStyle(ancestor).display==="none")return null}for(let ancestor=flatTreeParent(this);ancestor;ancestor=flatTreeParent(ancestor)){if(!(ancestor instanceof Element))continue;const style=getComputedStyle(ancestor);if(style.display==="contents"){continue}if(style.position!=="static"){return ancestor}if(ancestor.tagName==="BODY")return ancestor}return null;function flatTreeParent(element){if(element.assignedSlot){return element.assignedSlot}if(element.parentNode instanceof ShadowRoot){return element.parentNode.host}return element.parentNode}}});
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CustomizeThemesBrowserProxyImpl{constructor(){this.handler_=new CustomizeThemesHandlerRemote;this.callbackRouter_=new CustomizeThemesClientCallbackRouter;const factory=CustomizeThemesHandlerFactory.getRemote();factory.createCustomizeThemesHandler(this.callbackRouter_.$.bindNewPipeAndPassRemote(),this.handler_.$.bindNewPipeAndPassReceiver())}handler(){return this.handler_}callbackRouter(){return this.callbackRouter_}open(url){window.open(url,"_blank")}static getInstance(){return instance$7||(instance$7=new CustomizeThemesBrowserProxyImpl)}static setInstance(obj){instance$7=obj}}let instance$7=null;function getTemplate$E(){return html`<!--_html_template_start_--><style include="cr-hidden-style cr-icons cr-shared-style">:host{--cr-customize-themes-grid-gap:20px;--cr-customize-themes-icon-size:72px;display:inline-block}#thirdPartyThemeContainer{max-width:544px;width:100%}#thirdPartyTheme{align-items:center;border:1px solid var(--google-grey-300);border-radius:5px;color:var(--cr-primary-text-color);display:flex;flex-direction:row;margin-bottom:24px;padding:0 16px}@media (prefers-color-scheme:dark){#thirdPartyTheme{border-color:var(--google-grey-700)}}#thirdPartyBrushIcon{-webkit-mask-image:url(chrome://resources/cr_components/customize_themes/brush.svg);-webkit-mask-repeat:no-repeat;-webkit-mask-size:100%;background-color:var(--cr-primary-text-color);margin-inline-end:20px;min-height:24px;min-width:24px}#thirdPartyThemeNameContainer{flex-grow:1;margin-inline-end:24px}#thirdPartyThemeName{font-weight:700}#thirdPartyLink{--cr-icon-button-fill-color:var(--cr-primary-text-color);margin-inline-end:24px}#uninstallThirdPartyButton{margin:16px 0}#themesContainer{--cr-grid-gap:var(--cr-customize-themes-grid-gap)}#themesContainer>*{outline-width:0}:host-context(.focus-outline-visible) #themesContainer>:focus{box-shadow:0 0 0 2px rgba(var(--google-blue-600-rgb),.4)}#autogeneratedThemeContainer{cursor:pointer;position:relative}#colorPicker{border:0;height:var(--cr-customize-themes-icon-size);left:0;margin:0;opacity:0;padding:0;position:absolute;top:0;width:var(--cr-customize-themes-icon-size)}#colorPickerIcon{-webkit-mask-image:url(chrome://resources/cr_components/customize_themes/colorize.svg);-webkit-mask-repeat:no-repeat;-webkit-mask-size:100%;background-color:var(--google-grey-700);height:20px;left:calc(50% - 10px);position:absolute;top:calc(50% - 10px);width:20px}cr-theme-icon{--cr-theme-icon-size:var(--cr-customize-themes-icon-size)}#autogeneratedTheme{--cr-theme-icon-frame-color:var(--google-grey-100);--cr-theme-icon-active-tab-color:white;--cr-theme-icon-stroke-color:var(--google-grey-300)}#defaultTheme{--cr-theme-icon-frame-color:rgb(222, 225, 230);--cr-theme-icon-active-tab-color:white}@media (prefers-color-scheme:dark){#defaultTheme{--cr-theme-icon-frame-color:rgb(var(--google-grey-900-rgb));--cr-theme-icon-active-tab-color:rgb(50, 54, 57)}}paper-tooltip{--paper-tooltip-delay-in:100ms;--paper-tooltip-duration-in:100ms;--paper-tooltip-duration-out:100ms;--paper-tooltip-min-width:none;--paper-tooltip-padding:5px 4px}</style>
<div id="thirdPartyThemeContainer" hidden="[[!isThirdPartyTheme_(selectedTheme)]]">
  <div id="thirdPartyTheme">
    <div id="thirdPartyBrushIcon"></div>
    <div id="thirdPartyThemeNameContainer">
      <div id="thirdPartyThemeName">
        [[selectedTheme.info.thirdPartyThemeInfo.name]]
      </div>
      <div>[[i18n('thirdPartyThemeDescription')]]</div>
    </div>
    <cr-icon-button id="thirdPartyLink" class="icon-external" role="link" on-click="onThirdPartyLinkButtonClick_">
    </cr-icon-button>
    <cr-button id="uninstallThirdPartyButton" on-click="onUninstallThirdPartyThemeClick_">
      [[i18n('uninstallThirdPartyThemeButton')]]
    </cr-button>
  </div>
</div>
<cr-grid id="themesContainer" aria-label="[[i18n('themesContainerLabel')]]" columns="6" role="radiogroup">
  <div aria-label="[[i18n('colorPickerLabel')]]" tabindex$="[[getTabIndex_('autogenerated', selectedTheme)]]" on-click="onAutogeneratedThemeClick_" role="radio" aria-checked$="[[getThemeIconCheckedStatus_('autogenerated', selectedTheme)]]">
    <div id="autogeneratedThemeContainer">
      <cr-theme-icon id="autogeneratedTheme" selected$="[[isThemeIconSelected_('autogenerated', selectedTheme)]]">
      </cr-theme-icon>
      <div id="colorPickerIcon" hidden="[[isForcedTheme_(selectedTheme)]]"></div>
      <input id="colorPicker" type="color" tabindex="-1" aria-hidden="true" on-change="onCustomFrameColorChange_">
    </div>
    <paper-tooltip offset="0" fit-to-visible-bounds>
      [[i18n('colorPickerLabel')]]
    </paper-tooltip>
  </div>
  <div aria-label="[[i18n('defaultThemeLabel')]]" tabindex$="[[getTabIndex_('default', selectedTheme)]]" on-click="onDefaultThemeClick_" role="radio" aria-checked$="[[getThemeIconCheckedStatus_('default', selectedTheme)]]">
    <cr-theme-icon id="defaultTheme" selected$="[[isThemeIconSelected_('default', selectedTheme)]]">
    </cr-theme-icon>
    <paper-tooltip offset="0" fit-to-visible-bounds>
      [[i18n('defaultThemeLabel')]]
    </paper-tooltip>
  </div>
  <template is="dom-repeat" id="themes" items="[[chromeThemes_]]">
    <div aria-label="[[item.label]]" tabindex$="[[getTabIndex_(item.id, selectedTheme)]]" on-click="onChromeThemeClick_" class="chrome-theme-wrapper" role="radio" aria-checked$="[[getThemeIconCheckedStatus_(item.id, selectedTheme)]]">
      <cr-theme-icon style="--cr-theme-icon-frame-color:[[skColorToRgba_(item.colors.frame) ]];--cr-theme-icon-active-tab-color:[[skColorToRgba_(item.colors.activeTab) ]]" selected$="[[isThemeIconSelected_(item.id, selectedTheme)]]">
      </cr-theme-icon>
      <paper-tooltip offset="0" fit-to-visible-bounds>
        [[item.label]]
      </paper-tooltip>
    </div>
  </template>
</cr-grid>
<template is="dom-if" if="[[showManagedThemeDialog_]]" restamp>
  <managed-dialog on-close="onManagedDialogClosed_" title="[[i18n('themeManagedDialogTitle')]]" body="[[i18n('themeManagedDialogBody')]]">
  </managed-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CustomizeThemesElementBase=I18nMixin(PolymerElement);class CustomizeThemesElement extends CustomizeThemesElementBase{constructor(){super(...arguments);this.handler_=CustomizeThemesBrowserProxyImpl.getInstance().handler();this.callbackRouter_=CustomizeThemesBrowserProxyImpl.getInstance().callbackRouter();this.setThemeListenerId_=null}static get is(){return"cr-customize-themes"}static get template(){return getTemplate$E()}static get properties(){return{selectedTheme:{type:Object,value:null,observer:"onThemeChange_",notify:true},autoConfirmThemeChanges:{type:Boolean,value:false},chromeThemes_:Array,showManagedThemeDialog_:{type:Boolean,value:false}}}connectedCallback(){super.connectedCallback();this.handler_.initializeTheme();this.handler_.getChromeThemes().then((({chromeThemes:chromeThemes})=>{this.chromeThemes_=chromeThemes}));this.setThemeListenerId_=this.callbackRouter_.setTheme.addListener((theme=>{this.selectedTheme=theme}))}disconnectedCallback(){this.revertThemeChanges();assert(this.setThemeListenerId_);this.callbackRouter_.removeListener(this.setThemeListenerId_);super.disconnectedCallback()}confirmThemeChanges(){this.handler_.confirmThemeChanges()}revertThemeChanges(){this.handler_.revertThemeChanges()}onCustomFrameColorChange_(e){this.handler_.applyAutogeneratedTheme(hexColorToSkColor(e.target.value));if(this.autoConfirmThemeChanges){this.handler_.confirmThemeChanges()}}onAutogeneratedThemeClick_(){if(this.isForcedTheme_()){this.showManagedThemeDialog_=true;return}this.$.colorPicker.focus();this.$.colorPicker.click()}onDefaultThemeClick_(){if(this.isForcedTheme_()){this.showManagedThemeDialog_=true;return}this.handler_.applyDefaultTheme();if(this.autoConfirmThemeChanges){this.handler_.confirmThemeChanges()}}onChromeThemeClick_(e){if(this.isForcedTheme_()){this.showManagedThemeDialog_=true;return}this.handler_.applyChromeTheme(this.$.themes.itemForElement(e.target).id);if(this.autoConfirmThemeChanges){this.handler_.confirmThemeChanges()}}onThemeChange_(){if(!this.selectedTheme||this.selectedTheme.type!==ThemeType.kAutogenerated){return}const rgbaFrameColor=skColorToRgba(this.selectedTheme.info.autogeneratedThemeColors.frame);const rgbaActiveTabColor=skColorToRgba(this.selectedTheme.info.autogeneratedThemeColors.activeTab);this.$.autogeneratedTheme.style.setProperty("--cr-theme-icon-frame-color",rgbaFrameColor);this.$.autogeneratedTheme.style.setProperty("--cr-theme-icon-stroke-color",rgbaFrameColor);this.$.autogeneratedTheme.style.setProperty("--cr-theme-icon-active-tab-color",rgbaActiveTabColor);this.$.colorPickerIcon.style.setProperty("background-color",skColorToRgba(this.selectedTheme.info.autogeneratedThemeColors.activeTabText))}onUninstallThirdPartyThemeClick_(){this.handler_.applyDefaultTheme();this.handler_.confirmThemeChanges()}onThirdPartyLinkButtonClick_(){CustomizeThemesBrowserProxyImpl.getInstance().open(`https://chrome.google.com/webstore/detail/${this.selectedTheme.info.thirdPartyThemeInfo.id}`)}isThemeIconSelected_(id){if(!this.selectedTheme){return false}if(id==="autogenerated"){return this.selectedTheme.type===ThemeType.kAutogenerated}else if(id==="default"){return this.selectedTheme.type===ThemeType.kDefault}else{return this.selectedTheme.type===ThemeType.kChrome&&id===this.selectedTheme.info.chromeThemeId}}getTabIndex_(id){if(!this.selectedTheme||this.selectedTheme.type===ThemeType.kThirdParty){return id==="autogenerated"?"0":"-1"}return this.isThemeIconSelected_(id)?"0":"-1"}getThemeIconCheckedStatus_(id){return this.isThemeIconSelected_(id)?"true":"false"}isThirdPartyTheme_(){return!!this.selectedTheme&&this.selectedTheme.type===ThemeType.kThirdParty}isForcedTheme_(){return!!this.selectedTheme&&this.selectedTheme.isForced}skColorToRgba_(skColor){return skColorToRgba(skColor)}onManagedDialogClosed_(){this.showManagedThemeDialog_=false}}customElements.define(CustomizeThemesElement.is,CustomizeThemesElement);function getTemplate$D(){return html`<!--_html_template_start_--><style>:host{--ntp-mini-page-shortcut-color:var(--google-grey-300)}.mini-page{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;width:100%}.mini-header{height:28%;width:92%}:host(:not([single-colored-logo])) .mini-header{background-image:url(icons/colored_header.svg);background-repeat:no-repeat;background-size:100%}:host([single-colored-logo]) .mini-header{-webkit-mask-image:url(icons/colored_header.svg);-webkit-mask-repeat:no-repeat;-webkit-mask-size:100%;background-color:var(--google-grey-300)}.mini-shortcuts{-webkit-mask-image:url(icons/shortcut_circles.svg);-webkit-mask-repeat:no-repeat;-webkit-mask-size:100%;background-color:var(--ntp-mini-page-shortcut-color);height:29%;margin-top:8%;width:82%}@media (prefers-color-scheme:dark){.mini-header,:host(:not([single-colored-logo])) .mini-header{-webkit-mask-image:url(icons/colored_header.svg);-webkit-mask-repeat:no-repeat;-webkit-mask-size:100%;background:#fff}}@media (forced-colors:active){.mini-shortcuts,:host([single-colored-logo]) .mini-header{background-color:ButtonText}}</style>
<div class="mini-page">
  <div class="mini-header"></div>
  <div class="mini-shortcuts"></div>
</div>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class MiniPageElement extends PolymerElement{static get is(){return"ntp-mini-page"}static get template(){return getTemplate$D()}}customElements.define(MiniPageElement.is,MiniPageElement);function getTemplate$C(){return html`<!--_html_template_start_--><style include="cr-hidden-style">:host{display:flex}#container{padding:4px}cr-grid{--cr-grid-gap:8px}.tile{cursor:pointer;outline-width:0}ntp-iframe{pointer-events:none}:host-context(.focus-outline-visible) .tile:focus{box-shadow:var(--ntp-focus-shadow)}.image{border-radius:4px;display:block;height:176px;width:176px}.label{color:var(--color-new-tab-page-dialog-foreground);margin-bottom:4px;margin-top:12px;min-height:30px}.selected{background-color:var(--color-new-tab-page-selected-background);border-radius:4px;position:relative}.selected #uploadFromDevice,.selected .image{box-shadow:0 1px 3px 0 rgba(var(--google-grey-800-rgb),.3),0 4px 8px 3px rgba(var(--google-grey-800-rgb),.15)}.selected .image{transform:scale(.8)}.selected-circle{background-color:var(--color-new-tab-page-dialog-background);border-radius:50%;box-shadow:0 3px 6px 1px rgba(0,0,0,.16),0 1px 2px 1px rgba(0,0,0,.23);display:none;height:22px;left:initial;position:absolute;right:10px;top:8px;width:22px}:host-context([dir=rtl]) .selected-circle{left:10px;right:initial}.selected-check{-webkit-mask-image:url(icons/check_circle.svg);-webkit-mask-repeat:no-repeat;-webkit-mask-size:28px;background-color:var(--color-new-tab-page-dialog-border-selected);display:none;height:28px;left:initial;position:absolute;right:7px;top:5px;width:28px}:host-context([dir=rtl]) .selected-check{left:7px;right:initial}.selected :-webkit-any(.selected-circle,.selected-check){display:block}#noBackground .image,#uploadFromDevice .image{background:var(--color-new-tab-page-dialog-background);border:1px solid var(--color-new-tab-page-dialog-border)}#uploadFromDevice{position:relative}#uploadFromDeviceImage{position:absolute;top:0;width:100%}#uploadFromDeviceImage .label{text-align:center}#uploadIcon{-webkit-mask-image:url(icons/upload.svg);-webkit-mask-repeat:no-repeat;-webkit-mask-size:100%;background-color:var(--google-grey-700);height:32px;margin:61px auto 8px;width:32px}#backgroundsDisabled{align-items:center;align-self:center;display:flex;flex-direction:column;width:100%}#backgroundsDisabledIcon{-webkit-mask-image:url(chrome://resources/images/business.svg);-webkit-mask-repeat:no-repeat;-webkit-mask-size:100%;background-color:var(--color-new-tab-page-dialog-foreground);height:48px;margin:auto;width:48px}#backgroundsDisabledTitle{margin-top:10px;text-align:center;width:50%}@media (prefers-color-scheme:dark){.selected #uploadFromDevice,.selected .image{box-shadow:0 1px 3px 0 rgba(0,0,0,.3),0 4px 8px 3px rgba(0,0,0,.15)}#uploadIcon{background-color:var(--google-grey-500)}}@media (forced-colors:active){:host-context(.focus-outline-visible) .tile:focus{outline:var(--cr-focus-outline-hcm)}#backgroundsDisabledIcon,#uploadIcon,.selected-check{background-color:ButtonText}.selected{background-color:SelectedItem}}</style>
<div id="backgroundsDisabled" hidden$="[[!customBackgroundDisabledByPolicy_]]">
  <div id="backgroundsDisabledIcon"></div>
  <div id="backgroundsDisabledTitle">Votre administrateur a désactivé les arrière-plans personnalisés</div>
</div>
<cr-grid id="collections" columns="3" hidden="[[!showBackgroundSelection_]]">
  <div id="uploadFromDevice" class="tile" role="button" on-click="onUploadFromDeviceClick_" tabindex="0">
    <div class$="[[getCustomBackgroundClass_(theme, backgroundSelection)]]">
      <div class="image">
      </div>
      <div id="uploadFromDeviceImage">
        <div id="uploadIcon"></div>
        <div class="label">Importer depuis l&#39;appareil</div>
      </div>
      <div class="selected-circle"></div>
      <div class="selected-check"></div>
    </div>
    <div class="label"></div>
  </div>
  <div id="noBackground" class="tile" role="button" on-click="onDefaultClick_" tabindex="0">
    <div class$="[[getNoBackgroundClass_(theme, backgroundSelection)]]">
      <div class="image">
        <ntp-mini-page></ntp-mini-page>
      </div>
      <div class="selected-circle"></div>
      <div class="selected-check"></div>
    </div>
    <div class="label">Chrome par défaut</div>
  </div>
  <dom-repeat id="collectionsRepeat" items="[[collections_]]">
    <template>
      <div class="tile" tabindex="0" title="[[item.label]]" role="button" on-click="onCollectionClick_">
        <ntp-iframe class="image" src="chrome-untrusted://new-tab-page/background_image?[[item.previewImageUrl.url]]">
        </ntp-iframe>
        <div class="label">[[item.label]]</div>
      </div>
    </template>
  </dom-repeat>
</cr-grid>
<cr-grid id="images" columns="3" hidden="[[!selectedCollection]]">
  <dom-repeat id="imagesRepeat" items="[[images_]]">
    <template>
      <div class$="tile
              [[getImageSelectedClass_(index, theme, backgroundSelection)]]" tabindex="0" title="[[item.attribution1]]" role="button" on-click="onImageClick_">
        <ntp-iframe class="image" src="chrome-untrusted://new-tab-page/background_image?[[item.previewImageUrl.url]]">
        </ntp-iframe>
        <div class="selected-circle"></div>
        <div class="selected-check"></div>
      </div>
    </template>
  </dom-repeat>
</cr-grid>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CustomizeBackgroundsElement extends PolymerElement{static get is(){return"ntp-customize-backgrounds"}static get template(){return getTemplate$C()}static get properties(){return{customBackgroundDisabledByPolicy_:{type:Boolean,value:()=>loadTimeData.getBoolean("customBackgroundDisabledByPolicy")},showBackgroundSelection_:{type:Boolean,computed:"computeShowBackgroundSelection_(selectedCollection)"},selectedCollection:{notify:true,observer:"onSelectedCollectionChange_",type:Object,value:null},theme:Object,collections_:Array,images_:Array}}constructor(){super();if(this.customBackgroundDisabledByPolicy_){return}this.pageHandler_=NewTabPageProxy.getInstance().handler;this.pageHandler_.getBackgroundCollections().then((({collections:collections})=>{this.collections_=collections}))}computeShowBackgroundSelection_(){return!this.customBackgroundDisabledByPolicy_&&!this.selectedCollection}getCustomBackgroundClass_(){return this.theme&&this.theme.backgroundImage&&this.theme.backgroundImage.url.url.startsWith("chrome-untrusted://new-tab-page/background.jpg")?"selected":""}getNoBackgroundClass_(){return this.theme&&(this.theme.backgroundImage&&!this.theme.isCustomBackground||!this.theme.backgroundImage&&!this.theme.dailyRefreshEnabled)?"selected":""}getImageSelectedClass_(index){const{url:url}=this.images_[index].imageUrl;return this.theme&&this.theme.backgroundImage&&this.theme.backgroundImage.url.url===url&&!this.theme.dailyRefreshEnabled?"selected":""}onCollectionClick_(e){this.selectedCollection=e.model.item;this.pageHandler_.onCustomizeDialogAction(CustomizeDialogAction.kBackgroundsCollectionOpened)}async onUploadFromDeviceClick_(){this.pageHandler_.onCustomizeDialogAction(CustomizeDialogAction.kBackgroundsUploadFromDeviceClicked);const{success:success}=await this.pageHandler_.chooseLocalCustomBackground();if(success){this.dispatchEvent(new Event("close",{bubbles:true,composed:true}))}}onDefaultClick_(){if(!this.theme.isCustomBackground){this.pageHandler_.onCustomizeDialogAction(CustomizeDialogAction.kBackgroundsNoBackgroundSelected)}this.pageHandler_.setNoBackgroundImage()}onImageClick_(e){const image=e.model.item;if(this.theme.isCustomBackground&&this.theme.backgroundImage.url.url!==image.imageUrl.url){this.pageHandler_.onCustomizeDialogAction(CustomizeDialogAction.kBackgroundsImageSelected)}const{attribution1:attribution1,attribution2:attribution2,attributionUrl:attributionUrl,imageUrl:imageUrl,previewImageUrl:previewImageUrl,collectionId:collectionId}=image;this.pageHandler_.setBackgroundImage(attribution1,attribution2,attributionUrl,imageUrl,previewImageUrl,collectionId)}async onSelectedCollectionChange_(){this.images_=[];if(!this.selectedCollection){return}const collectionId=this.selectedCollection.id;const{images:images}=await this.pageHandler_.getBackgroundImages(collectionId);if(!this.selectedCollection||this.selectedCollection.id!==collectionId){return}this.images_=images}revertBackgroundChanges(){if(!this.customBackgroundDisabledByPolicy_){this.pageHandler_.revertBackgroundChanges()}}confirmBackgroundChanges(){if(!this.customBackgroundDisabledByPolicy_){this.pageHandler_.confirmBackgroundChanges()}}}customElements.define(CustomizeBackgroundsElement.is,CustomizeBackgroundsElement);function getTemplate$B(){return html`<!--_html_template_start_--><style include="cr-icons">:host{line-height:20px}#options{display:flex}.option{margin-inline-end:9px;width:268px}.option-image{border:1px solid var(--color-new-tab-page-dialog-border);border-radius:4px;box-sizing:border-box;cursor:pointer;height:176px;position:relative;width:268px}:host-context(.focus-outline-visible) .option-image:focus{box-shadow:var(--ntp-focus-shadow)}.selected .option-image{background-color:var(--color-new-tab-page-selected-background);border-color:var(--color-new-tab-page-dialog-border-selected)}.option-mini{background-color:var(--color-new-tab-page-dialog-background);border:1px solid var(--color-new-tab-page-dialog-border);border-radius:4px;box-sizing:border-box;height:144px;position:absolute;right:40px;top:16px;width:144px}:host-context([dir=rtl]) .option-mini{left:40px;right:unset}.selected .option-mini{border-color:transparent;box-shadow:0 1px 3px 0 rgba(var(--google-grey-800-rgb),.3),0 4px 8px 3px rgba(var(--google-grey-800-rgb),.15)}@media (prefers-color-scheme:dark){.selected .option-mini{box-shadow:0 1px 3px 0 rgba(0,0,0,.3),0 4px 8px 3px rgba(0,0,0,.15)}}ntp-mini-page{--ntp-mini-page-shortcut-color:var(--google-grey-500)}.selected ntp-mini-page{--ntp-mini-page-shortcut-color:var(--color-new-tab-page-dialog-border-selected)}.option-icon{-webkit-mask-repeat:no-repeat;-webkit-mask-size:100%;background:96px 96px var(--color-new-tab-page-dialog-border);height:96px;left:16px;position:absolute;top:48px;width:96px}#optionCustomLinks .option-icon{-webkit-mask-image:url(icons/account_circle.svg)}#optionMostVisited .option-icon{-webkit-mask-image:url(icons/generic_globe.svg)}:host-context([dir=rtl]) .option-icon{right:16px}.selected .option-icon{background-color:var(--color-new-tab-page-control-background-selected)}@media (prefers-color-scheme:dark){.selected .option-icon{background-color:var(--color-new-tab-page-dialog-border-selected)}}.option-image .selected-circle{box-shadow:0 3px 6px 1px rgba(0,0,0,.16),0 1px 2px 1px rgba(0,0,0,.23);height:22px;left:209px;top:9px;width:22px}:host-context([dir=rtl]) .option-image .selected-circle{left:0;right:209px}.option-image .selected-check{left:initial;right:32px;top:6px}:host-context([dir=rtl]) .option-image .selected-check{left:32px;right:initial}.option-title{font-weight:700;margin-bottom:4px;margin-top:12px}.option-description{color:var(--color-new-tab-page-dialog-secondary-foreground)}.selected #hideDescription{color:var(--color-new-tab-page-dialog-border-selected)}#hide{align-items:center;border:1px solid var(--color-new-tab-page-dialog-border);border-radius:4px;box-sizing:border-box;display:flex;height:64px;margin-top:24px;max-width:544px;width:100%}#hide.selected{background-color:var(--color-new-tab-page-selected-background);border-color:var(--color-new-tab-page-dialog-border-selected);color:var(--color-new-tab-page-dialog-border-selected)}#hideIcon{margin-inline-end:20px;margin-inline-start:24px}.selected #hideIcon{background-color:var(--color-new-tab-page-dialog-border-selected)}#hideTitleContainer{flex-grow:1}#hideTitle{font-weight:700}cr-toggle{margin-inline-end:20px}.selected-circle{background:var(--color-new-tab-page--dialog-background) no-repeat center;border-radius:50%;display:none;height:22px;left:66px;position:absolute;top:46px;width:22px}:host-context([dir=rtl]) .selected-circle{left:auto;right:66px}.selected-check{background:url(icons/check_circle.svg) no-repeat center;background-size:28px 28px;display:none;height:28px;left:63px;position:absolute;top:43px;width:28px}.selected :-webkit-any(.selected-circle,.selected-check){display:block}:host-context([dir=rtl]) .selected-check{left:auto;right:63px}@media (prefers-color-scheme:dark){.selected-check{background:0 0}}@media (prefers-color-scheme:dark){.selected-check::after{-webkit-mask-image:url(icons/check_circle.svg);-webkit-mask-repeat:no-repeat;-webkit-mask-size:28px;background-color:var(--google-blue-300);content:'';display:block;height:28px;left:0;position:absolute;top:0;width:28px}}@media (forced-colors:active){.option-icon{background-color:ButtonText}.selected .option-icon{background-color:SelectedItem}}</style>
<div id="options">
  <div id="optionCustomLinks" class$="option [[getCustomLinksSelected_(customLinksEnabled_, hide_)]]">
    <cr-button id="optionCustomLinksButton" class="option-image" tabindex="0" aria-pressed$="[[getCustomLinksAriaPressed_(customLinksEnabled_,
            hide_)]]" title="Mes raccourcis" on-click="onCustomLinksClick_" noink>
      <div class="option-icon"></div>
      <div class="option-mini">
        <ntp-mini-page single-colored-logo></ntp-mini-page>
      </div>
      <div class="selected-circle"></div>
      <div class="selected-check"></div>
    </cr-button>
    <div class="option-title">Mes raccourcis</div>
    <div class="option-description">Les raccourcis affichés sont ceux que vous avez vous-même définis</div>
  </div>
  <div id="optionMostVisited" class$="option [[getMostVisitedSelected_(customLinksEnabled_, hide_)]]">
    <cr-button id="optionMostVisitedButton" class="option-image" tabindex="0" aria-pressed$="[[getMostVisitedAriaPressed_(customLinksEnabled_,
            hide_)]]" title="Sites les plus consultés" on-click="onMostVisitedClick_" on-keydown="onMostVistedKey" noink>
      <div class="option-icon"></div>
      <div class="option-mini">
        <ntp-mini-page single-colored-logo></ntp-mini-page>
      </div>
      <div class="selected-circle"></div>
      <div class="selected-check"></div>
    </cr-button>
    <div class="option-title">Sites les plus consultés</div>
    <div class="option-description">Les raccourcis affichés sont des suggestions fondées sur les sites Web que vous consultez souvent</div>
  </div>
</div>
<div id="hide" class$="[[getHideClass_(hide_)]]">
  <div id="hideIcon" class="cr-icon icon-visibility-off"></div>
  <div id="hideTitleContainer">
    <div id="hideTitle">Masquer les raccourcis</div>
    <div id="hideDescription" class="option-description">
      Ne pas afficher de raccourcis sur cette page
    </div>
  </div>
  <cr-toggle id="hideToggle" title="Masquer les raccourcis" checked="[[hide_]]" on-change="onHideChange_"></cr-toggle>
</div>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CustomizeShortcutsElement extends PolymerElement{static get is(){return"ntp-customize-shortcuts"}static get template(){return getTemplate$B()}static get properties(){return{customLinksEnabled_:Boolean,hide_:Boolean}}constructor(){super();const{handler:handler}=NewTabPageProxy.getInstance();this.pageHandler_=handler;this.pageHandler_.getMostVisitedSettings().then((({customLinksEnabled:customLinksEnabled,shortcutsVisible:shortcutsVisible})=>{this.customLinksEnabled_=customLinksEnabled;this.hide_=!shortcutsVisible}))}connectedCallback(){super.connectedCallback();FocusOutlineManager.forDocument(document)}apply(){this.pageHandler_.setMostVisitedSettings(this.customLinksEnabled_,!this.hide_)}getCustomLinksAriaPressed_(){return!this.hide_&&this.customLinksEnabled_?"true":"false"}getCustomLinksSelected_(){return!this.hide_&&this.customLinksEnabled_?"selected":""}getHideClass_(){return this.hide_?"selected":""}getMostVisitedAriaPressed_(){return!this.hide_&&!this.customLinksEnabled_?"true":"false"}getMostVisitedSelected_(){return!this.hide_&&!this.customLinksEnabled_?"selected":""}onCustomLinksClick_(){if(!this.customLinksEnabled_){this.pageHandler_.onCustomizeDialogAction(CustomizeDialogAction.kShortcutsCustomLinksClicked)}this.customLinksEnabled_=true;this.hide_=false}onHideChange_(e){this.pageHandler_.onCustomizeDialogAction(CustomizeDialogAction.kShortcutsVisibilityToggleClicked);this.hide_=e.detail}onMostVisitedClick_(){if(this.customLinksEnabled_){this.pageHandler_.onCustomizeDialogAction(CustomizeDialogAction.kShortcutsMostVisitedClicked)}this.customLinksEnabled_=false;this.hide_=false}}customElements.define(CustomizeShortcutsElement.is,CustomizeShortcutsElement);const styleMod$1=document.createElement("dom-module");styleMod$1.appendChild(html`
  <template>
    <style>
:host{--cr-radio-button-checked-color:var(--google-blue-600);--cr-radio-button-checked-ripple-color:rgba(var(--google-blue-600-rgb), .2);--cr-radio-button-ink-size:40px;--cr-radio-button-size:16px;--cr-radio-button-unchecked-color:var(--google-grey-700);--cr-radio-button-unchecked-ripple-color:rgba(var(--google-grey-600-rgb), .15);--ink-to-circle:calc((var(--cr-radio-button-ink-size) -
                               var(--cr-radio-button-size)) / 2);align-items:center;display:flex;flex-shrink:0;gap:var(--cr-radio-button-label-spacing,20px);outline:0}@media (prefers-color-scheme:dark){:host{--cr-radio-button-checked-color:var(--google-blue-300);--cr-radio-button-checked-ripple-color:rgba(var(--google-blue-300-rgb), .4);--cr-radio-button-unchecked-color:var(--google-grey-500);--cr-radio-button-unchecked-ripple-color:rgba(var(--google-grey-300-rgb), .4)}}:host-context([chrome-refresh-2023]):host{--cr-radio-button-ink-size:32px;--cr-radio-button-checked-color:var(--color-radio-button-foreground-checked,
                var(--cr-fallback-color-primary));--cr-radio-button-checked-ripple-color:var(--cr-active-background-color);--cr-radio-button-unchecked-color:var(--color-radio-button-foreground-unchecked,
                var(--cr-fallback-color-outline));--cr-radio-button-unchecked-ripple-color:var(--cr-active-background-color)}@media (forced-colors:active){:host{--cr-radio-button-checked-color:SelectedItem}}:host([disabled]){opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]){opacity:1;--cr-radio-button-checked-color:var(--color-radio-foreground-disabled,
            var(--cr-fallback-color-disabled-background));--cr-radio-button-unchecked-color:var(--color-radio-foreground-disabled,
                var(--cr-fallback-color-disabled-background))}:host(:not([disabled])){cursor:pointer}:host(.label-first){flex-direction:row-reverse}#labelWrapper{flex:1}:host-context([chrome-refresh-2023]):host([disabled]) #labelWrapper{opacity:var(--cr-disabled-opacity)}#label{color:inherit}:host([hide-label-text]) #label{clip:rect(0,0,0,0);display:block;position:fixed}.disc,.disc-border,.disc-wrapper,paper-ripple{border-radius:50%}.disc-wrapper{height:var(--cr-radio-button-size);margin-block-start:var(--cr-radio-button-disc-margin-block-start,0);position:relative;width:var(--cr-radio-button-size)}.disc,.disc-border{box-sizing:border-box;height:var(--cr-radio-button-size);width:var(--cr-radio-button-size)}.disc-border{border:2px solid var(--cr-radio-button-unchecked-color)}:host([checked]) .disc-border{border-color:var(--cr-radio-button-checked-color)}#button:focus{outline:0}.disc{background-color:transparent;position:absolute;top:0;transform:scale(0);transition:border-color .2s,transform .2s}:host([checked]) .disc{background-color:var(--cr-radio-button-checked-color);transform:scale(.5)}:host-context([chrome-refresh-2023]) #overlay{border-radius:50%;box-sizing:border-box;display:none;height:var(--cr-radio-button-ink-size);left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:var(--cr-radio-button-ink-size)}:host-context([chrome-refresh-2023]) #button:hover #overlay{background-color:var(--cr-hover-background-color);display:block}:host-context([chrome-refresh-2023]) #button:focus-visible #overlay{border:2px solid var(--cr-focus-outline-color);display:block}paper-ripple{--paper-ripple-opacity:1;color:var(--cr-radio-button-unchecked-ripple-color);height:var(--cr-radio-button-ink-size);left:calc(-1 * var(--ink-to-circle));pointer-events:none;position:absolute;top:calc(-1 * var(--ink-to-circle));transition:color linear 80ms;width:var(--cr-radio-button-ink-size)}:host-context([dir=rtl]) paper-ripple{left:auto;right:calc(-1 * var(--ink-to-circle))}:host([checked]) paper-ripple{color:var(--cr-radio-button-checked-ripple-color)}
    </style>
  </template>
`.content);styleMod$1.register("cr-radio-button-style");function getTemplate$A(){return html`<!--_html_template_start_-->    <style include="cr-radio-button-style cr-hidden-style"></style>

    <div aria-checked$="[[getAriaChecked_(checked)]]" aria-describedby="slotted-content" aria-disabled$="[[getAriaDisabled_(disabled)]]" aria-labelledby="label" class="disc-wrapper" id="button" role="radio" tabindex$="[[buttonTabIndex_]]" on-keydown="onInputKeydown_">
      <div class="disc-border"></div>
      <div class="disc"></div>
      <div id="overlay"></div>
    </div>

    <div id="labelWrapper">
      <span id="label" hidden$="[[!label]]" aria-hidden="true">[[label]]</span>
      <span id="slotted-content">
        <slot></slot>
      </span>
    </div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrRadioButtonMixin=dedupingMixin((superClass=>{class CrRadioButtonMixin extends superClass{static get properties(){return{checked:{type:Boolean,value:false,reflectToAttribute:true},disabled:{type:Boolean,value:false,reflectToAttribute:true,notify:true},focusable:{type:Boolean,value:false,observer:"onFocusableChanged_"},hideLabelText:{type:Boolean,value:false,reflectToAttribute:true},label:{type:String,value:""},name:{type:String,notify:true,reflectToAttribute:true},buttonTabIndex_:{type:Number,computed:"getTabIndex_(focusable)"}}}connectedCallback(){super.connectedCallback();this.addEventListener("blur",this.hideRipple_.bind(this));if(!document.documentElement.hasAttribute("chrome-refresh-2023")){this.addEventListener("focus",this.onFocus_.bind(this))}this.addEventListener("up",this.hideRipple_.bind(this))}focus(){const button=this.shadowRoot.querySelector("#button");assert(button);button.focus()}getPaperRipple(){assertNotReached()}onFocus_(){this.getPaperRipple().showAndHoldDown()}hideRipple_(){this.getPaperRipple().clear()}onFocusableChanged_(){const links=this.querySelectorAll("a");links.forEach((link=>{link.tabIndex=this.checked?0:-1}))}getAriaChecked_(){return this.checked?"true":"false"}getAriaDisabled_(){return this.disabled?"true":"false"}getTabIndex_(){return this.focusable?0:-1}onInputKeydown_(e){if(e.shiftKey&&e.key==="Tab"){this.focus()}}}return CrRadioButtonMixin}));
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrRadioButtonElementBase=mixinBehaviors([PaperRippleBehavior],CrRadioButtonMixin(PolymerElement));class CrRadioButtonElement extends CrRadioButtonElementBase{static get is(){return"cr-radio-button"}static get template(){return getTemplate$A()}getPaperRipple(){return this.getRipple()}_createRipple(){this._rippleContainer=this.shadowRoot.querySelector(".disc-wrapper");const ripple=super._createRipple();ripple.id="ink";ripple.setAttribute("recenters","");ripple.classList.add("circle","toggle-ink");return ripple}}customElements.define(CrRadioButtonElement.is,CrRadioButtonElement);function getTemplate$z(){return html`<!--_html_template_start_-->    <style>:host{display:inline-block}:host ::slotted(*){padding:var(--cr-radio-group-item-padding,12px)}:host([disabled]){cursor:initial;pointer-events:none;user-select:none}:host([disabled]) ::slotted(*){opacity:var(--cr-disabled-opacity)}</style>
    <slot></slot>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isEnabled(radio){return radio.matches(":not([disabled]):not([hidden])")&&radio.style.display!=="none"&&radio.style.visibility!=="hidden"}class CrRadioGroupElement extends PolymerElement{constructor(){super(...arguments);this.buttons_=null;this.buttonEventTracker_=new EventTracker;this.deltaKeyMap_=null;this.isRtl_=false;this.populateBound_=null}static get is(){return"cr-radio-group"}static get template(){return getTemplate$z()}static get properties(){return{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"update_"},selected:{type:String,notify:true,observer:"update_"},selectableElements:{type:String,value:"cr-radio-button, cr-card-radio-button, controlled-radio-button"},nestedSelectable:{type:Boolean,value:false,observer:"populate_"},selectableRegExp_:{value:Object,computed:"computeSelectableRegExp_(selectableElements)"}}}ready(){super.ready();this.addEventListener("keydown",(e=>this.onKeyDown_(e)));this.addEventListener("click",this.onClick_.bind(this));if(!this.hasAttribute("role")){this.setAttribute("role","radiogroup")}this.setAttribute("aria-disabled","false")}connectedCallback(){super.connectedCallback();this.isRtl_=this.matches(":host-context([dir=rtl]) cr-radio-group");this.deltaKeyMap_=new Map([["ArrowDown",1],["ArrowLeft",this.isRtl_?1:-1],["ArrowRight",this.isRtl_?-1:1],["ArrowUp",-1],["PageDown",1],["PageUp",-1]]);this.populateBound_=()=>this.populate_();assert(this.populateBound_);this.shadowRoot.querySelector("slot").addEventListener("slotchange",this.populateBound_);this.populate_()}disconnectedCallback(){super.disconnectedCallback();assert(this.populateBound_);this.shadowRoot.querySelector("slot").removeEventListener("slotchange",this.populateBound_);this.buttonEventTracker_.removeAll()}focus(){if(this.disabled||!this.buttons_){return}const radio=this.buttons_.find((radio=>this.isButtonEnabledAndSelected_(radio)));if(radio){radio.focus()}}onKeyDown_(event){if(this.disabled){return}if(event.ctrlKey||event.shiftKey||event.metaKey||event.altKey){return}const targetElement=event.target;if(!this.buttons_||!this.buttons_.includes(targetElement)){return}if(event.key===" "||event.key==="Enter"){event.preventDefault();this.select_(targetElement);return}const enabledRadios=this.buttons_.filter(isEnabled);if(enabledRadios.length===0){return}assert(this.deltaKeyMap_);let selectedIndex;const max=enabledRadios.length-1;if(event.key==="Home"){selectedIndex=0}else if(event.key==="End"){selectedIndex=max}else if(this.deltaKeyMap_.has(event.key)){const delta=this.deltaKeyMap_.get(event.key);const lastSelection=enabledRadios.findIndex((radio=>radio.checked));selectedIndex=Math.max(0,lastSelection)+delta;if(selectedIndex>max){selectedIndex=0}else if(selectedIndex<0){selectedIndex=max}}else{return}const radio=enabledRadios[selectedIndex];const name=`${radio.name}`;if(this.selected!==name){event.preventDefault();event.stopPropagation();this.selected=name;radio.focus()}}computeSelectableRegExp_(){const tags=this.selectableElements.split(", ").join("|");return new RegExp(`^(${tags})$`,"i")}onClick_(event){const path=event.composedPath();if(path.some((target=>/^a$/i.test(target.tagName)))){return}const target=path.find((n=>this.selectableRegExp_.test(n.tagName)));if(target&&this.buttons_&&this.buttons_.includes(target)){this.select_(target)}}populate_(){const nodes=this.shadowRoot.querySelector("slot").assignedNodes({flatten:true});this.buttons_=Array.from(nodes).flatMap((node=>{if(node.nodeType!==Node.ELEMENT_NODE){return[]}const el=node;let result=[];if(el.matches(this.selectableElements)){result.push(el)}if(this.nestedSelectable){result=result.concat(Array.from(el.querySelectorAll(this.selectableElements)))}return result}));this.buttonEventTracker_.removeAll();this.buttons_.forEach((el=>{this.buttonEventTracker_.add(el,"disabled-changed",(()=>this.populate_()));this.buttonEventTracker_.add(el,"name-changed",(()=>this.populate_()))}));this.update_()}select_(button){if(!isEnabled(button)){return}const name=`${button.name}`;if(this.selected!==name){this.selected=name}}isButtonEnabledAndSelected_(button){return!this.disabled&&button.checked&&isEnabled(button)}update_(){if(!this.buttons_){return}let noneMadeFocusable=true;this.buttons_.forEach((radio=>{radio.checked=this.selected!==undefined&&`${radio.name}`===`${this.selected}`;const disabled=this.disabled||!isEnabled(radio);const canBeFocused=radio.checked&&!disabled;if(canBeFocused){radio.focusable=true;noneMadeFocusable=false}else{radio.focusable=false}radio.setAttribute("aria-disabled",`${disabled}`)}));this.setAttribute("aria-disabled",`${this.disabled}`);if(noneMadeFocusable&&!this.disabled){const radio=this.buttons_.find(isEnabled);if(radio){radio.focusable=true}}}}customElements.define(CrRadioGroupElement.is,CrRadioGroupElement);function getTemplate$y(){return html`<!--_html_template_start_-->    <style include="cr-shared-style">:host{display:flex}iron-icon{--iron-icon-width:var(--cr-icon-size);--iron-icon-height:var(--cr-icon-size);--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color, var(--google-grey-700))}@media (prefers-color-scheme:dark){iron-icon{--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color, var(--google-grey-500))}}</style>
    <iron-icon id="indicator" tabindex="0" aria-label$="[[iconAriaLabel]]" aria-describedby="tooltip" icon="[[iconClass]]" role="img"></iron-icon>
    <paper-tooltip id="tooltip" for="indicator" position="[[tooltipPosition]]" fit-to-visible-bounds part="tooltip">
      <slot name="tooltip-text">[[tooltipText]]</slot>
    </paper-tooltip>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrTooltipIconElement extends PolymerElement{static get is(){return"cr-tooltip-icon"}static get template(){return getTemplate$y()}static get properties(){return{iconAriaLabel:String,iconClass:String,tooltipText:String,tooltipPosition:{type:String,value:"top"}}}getFocusableElement(){return this.$.indicator}}customElements.define(CrTooltipIconElement.is,CrTooltipIconElement);function getTemplate$x(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style"></style>
    <cr-tooltip-icon hidden$="[[!indicatorVisible]]" tooltip-text="[[indicatorTooltip_]]" icon-class="[[indicatorIcon]]" icon-aria-label="[[iconAriaLabel]]">
    </cr-tooltip-icon>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CrPolicyIndicatorType;(function(CrPolicyIndicatorType){CrPolicyIndicatorType["DEVICE_POLICY"]="devicePolicy";CrPolicyIndicatorType["EXTENSION"]="extension";CrPolicyIndicatorType["NONE"]="none";CrPolicyIndicatorType["OWNER"]="owner";CrPolicyIndicatorType["PRIMARY_USER"]="primary_user";CrPolicyIndicatorType["RECOMMENDED"]="recommended";CrPolicyIndicatorType["USER_POLICY"]="userPolicy";CrPolicyIndicatorType["PARENT"]="parent";CrPolicyIndicatorType["CHILD_RESTRICTION"]="childRestriction"})(CrPolicyIndicatorType||(CrPolicyIndicatorType={}));const CrPolicyIndicatorMixin=dedupingMixin((superClass=>{class CrPolicyIndicatorMixin extends superClass{static get properties(){return{indicatorType:{type:String,value:CrPolicyIndicatorType.NONE},indicatorSourceName:{type:String,value:""},indicatorVisible:{type:Boolean,computed:"getIndicatorVisible_(indicatorType)"},indicatorIcon:{type:String,computed:"getIndicatorIcon_(indicatorType)"}}}getIndicatorVisible_(type){return type!==CrPolicyIndicatorType.NONE}getIndicatorIcon_(type){switch(type){case CrPolicyIndicatorType.EXTENSION:return"cr:extension";case CrPolicyIndicatorType.NONE:return"";case CrPolicyIndicatorType.PRIMARY_USER:return"cr:group";case CrPolicyIndicatorType.OWNER:return"cr:person";case CrPolicyIndicatorType.USER_POLICY:case CrPolicyIndicatorType.DEVICE_POLICY:case CrPolicyIndicatorType.RECOMMENDED:return"cr20:domain";case CrPolicyIndicatorType.PARENT:case CrPolicyIndicatorType.CHILD_RESTRICTION:return"cr20:kite";default:assertNotReached()}}getIndicatorTooltip(type,name,matches){if(!window.CrPolicyStrings){return""}const CrPolicyStrings=window.CrPolicyStrings;switch(type){case CrPolicyIndicatorType.EXTENSION:return name.length>0?CrPolicyStrings.controlledSettingExtension.replace("$1",name):CrPolicyStrings.controlledSettingExtensionWithoutName;case CrPolicyIndicatorType.PRIMARY_USER:return CrPolicyStrings.controlledSettingShared.replace("$1",name);case CrPolicyIndicatorType.OWNER:return name.length>0?CrPolicyStrings.controlledSettingWithOwner.replace("$1",name):CrPolicyStrings.controlledSettingNoOwner;case CrPolicyIndicatorType.USER_POLICY:case CrPolicyIndicatorType.DEVICE_POLICY:return CrPolicyStrings.controlledSettingPolicy;case CrPolicyIndicatorType.RECOMMENDED:return matches?CrPolicyStrings.controlledSettingRecommendedMatches:CrPolicyStrings.controlledSettingRecommendedDiffers;case CrPolicyIndicatorType.PARENT:return CrPolicyStrings.controlledSettingParent;case CrPolicyIndicatorType.CHILD_RESTRICTION:return CrPolicyStrings.controlledSettingChildRestriction}return""}}return CrPolicyIndicatorMixin}));
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrPolicyIndicatorElementBase=CrPolicyIndicatorMixin(PolymerElement);class CrPolicyIndicatorElement extends CrPolicyIndicatorElementBase{static get is(){return"cr-policy-indicator"}static get template(){return getTemplate$x()}static get properties(){return{iconAriaLabel:String,indicatorTooltip_:{type:String,computed:"getIndicatorTooltip_(indicatorType, indicatorSourceName)"}}}getIndicatorTooltip_(indicatorType,indicatorSourceName){return this.getIndicatorTooltip(indicatorType,indicatorSourceName)}}customElements.define(CrPolicyIndicatorElement.is,CrPolicyIndicatorElement);function getTemplate$w(){return html`<!--_html_template_start_--><style>:host{line-height:20px}#show{align-items:center;display:flex;margin-bottom:24px;margin-top:14px}cr-radio-button{height:20px;padding:0}cr-radio-button+cr-radio-button{margin-top:31px}#show cr-policy-indicator{--cr-icon-size:48px;margin-inline-start:48px}#toggles{border:1px solid var(--color-new-tab-page-dialog-border);border-radius:4px;box-sizing:border-box;margin-inline-end:51px;margin-inline-start:36px;max-width:544px}.toggle-option-row,.toggle-row{align-items:center;display:flex;height:52px}.toggle-option-row{margin-inline-start:16px}.toggle-section+.toggle-section{border-top:1px solid var(--color-new-tab-page-dialog-border)}.toggle-name{flex-grow:1;margin-inline-start:24px}.toggle-row cr-policy-indicator{margin-inline-end:24px}cr-toggle{margin-inline-end:20px}</style>
<div id="container" hidden>
  <div id="show">
    <cr-radio-group selected="[[radioSelection_(show_)]]" disabled="[[showManagedByPolicy_]]" on-selected-changed="onShowRadioSelectionChanged_">
      <cr-radio-button id="hideButton" name="hide" label="Masquer toutes les fiches">
      </cr-radio-button>
      <cr-radio-button id="customizeButton" name="customize" label="Personnaliser les fiches">
      </cr-radio-button>
    </cr-radio-group>
    <cr-policy-indicator indicator-type="devicePolicy" hidden="[[!showManagedByPolicy_]]">
    </cr-policy-indicator>
  </div>
  <div id="toggles">
    <template id="toggleRepeat" is="dom-repeat" items="[[modules_]]">
      <div class="toggle-section">
        <div class="toggle-row">
          <div class="toggle-name">[[item.name]]</div>
          <cr-policy-indicator indicator-type="devicePolicy" hidden="[[!showManagedByPolicy_]]">
          </cr-policy-indicator>
          <cr-toggle checked="{{item.checked}}" disabled="[[moduleToggleDisabled_(show_, showManagedByPolicy_)]]" title="[[item.name]]">
          </cr-toggle>
        </div>
        
        <template is="dom-if" if="[[showCartOptionToggle_(item.id, item.checked)]]">
          <div id="cartOption" class="toggle-option-row">
            <div class="toggle-name">
              Vos paniers
            </div>
            <cr-toggle checked="{{cartOptionToggle_.enabled}}" title="Vos paniers"></cr-toggle>
          </div>
        </template>
        <template is="dom-if" if="[[showDiscountOptionToggle_(item.id, item.checked,
            discountOptionToggleEligible_, cartOptionToggle_.enabled)]]">
          <div id="discountOption" class="toggle-option-row">
            <div class="toggle-name">
              Obtenir des remises
            </div>
            <cr-toggle checked="{{discountOptionToggle_.enabled}}" title="Obtenir des remises"></cr-toggle>
          </div>
        </template>
      </div>
    </template>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let handler$4=null;class ChromeCartProxy{static getHandler(){return handler$4||(handler$4=CartHandler.getRemote())}static setHandler(newHandler){handler$4=newHandler}constructor(){}}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CustomizeModulesElement extends(I18nMixin(PolymerElement)){constructor(){super(...arguments);this.setDisabledModulesListenerId_=null}static get is(){return"ntp-customize-modules"}static get template(){return getTemplate$w()}static get properties(){return{show_:{type:Boolean,observer:"onShowChange_"},showManagedByPolicy_:{type:Boolean,value:()=>loadTimeData.getBoolean("modulesVisibleManagedByPolicy")},modules_:Array,cartOptionToggle_:{type:Object,value:{enabled:false,initiallyEnabled:false}},discountOptionToggle_:{type:Object,value:{enabled:false,initiallyEnabled:false}},discountOptionToggleEligible_:{type:Boolean,value:false}}}connectedCallback(){super.connectedCallback();this.setDisabledModulesListenerId_=NewTabPageProxy.getInstance().callbackRouter.setDisabledModules.addListener(((all,ids)=>{this.$.container.hidden=false;this.show_=!all;this.modules_.forEach((({id:id},i)=>{const checked=!all&&!ids.includes(id);this.set(`modules_.${i}.checked`,checked);this.set(`modules_.${i}.initiallyChecked`,checked);this.set(`modules_.${i}.disabled`,ids.includes(id))}))}));NewTabPageProxy.getInstance().handler.getModulesIdNames().then((({data:data})=>{this.modules_=data.map((d=>({name:d.name,id:d.id,checked:true})));NewTabPageProxy.getInstance().handler.updateDisabledModules();if(this.modules_.some((module=>module.id==="chrome_cart"))){ChromeCartProxy.getHandler().getDiscountToggleVisible().then((({toggleVisible:toggleVisible})=>{this.set("discountOptionToggleEligible_",toggleVisible)}));ChromeCartProxy.getHandler().getDiscountEnabled().then((({enabled:enabled})=>{this.set("discountOptionToggle_.enabled",enabled);this.discountOptionToggle_.initiallyEnabled=enabled}))}else if(this.modules_.some((module=>module.id==="history_clusters"))&&loadTimeData.getBoolean("showCartInQuestModuleSetting")){ChromeCartProxy.getHandler().getDiscountToggleVisible().then((({toggleVisible:toggleVisible})=>{this.set("discountOptionToggleEligible_",toggleVisible)}));ChromeCartProxy.getHandler().getDiscountEnabled().then((({enabled:enabled})=>{this.set("discountOptionToggle_.enabled",enabled);this.discountOptionToggle_.initiallyEnabled=enabled}));ChromeCartProxy.getHandler().getCartFeatureEnabled().then((({enabled:enabled})=>{this.set("cartOptionToggle_.enabled",enabled);this.cartOptionToggle_.initiallyEnabled=enabled}))}}))}disconnectedCallback(){super.disconnectedCallback();NewTabPageProxy.getInstance().callbackRouter.removeListener(this.setDisabledModulesListenerId_)}ready(){window.CrPolicyStrings={controlledSettingPolicy:loadTimeData.getString("controlledSettingPolicy")};super.ready()}apply(){const handler=NewTabPageProxy.getInstance().handler;handler.setModulesVisible(this.show_);this.modules_.filter((({checked:checked,initiallyChecked:initiallyChecked})=>checked!==initiallyChecked)).forEach((({id:id,checked:checked})=>{if(this.show_){handler.setModuleDisabled(id,!checked)}const base=`NewTabPage.Modules.${checked?"Enabled":"Disabled"}`;chrome.metricsPrivate.recordSparseValueWithPersistentHash(base,id);chrome.metricsPrivate.recordSparseValueWithPersistentHash(`${base}.Customize`,id)}));if(this.discountOptionToggleEligible_&&this.discountOptionToggle_.enabled!==this.discountOptionToggle_.initiallyEnabled){ChromeCartProxy.getHandler().setDiscountEnabled(this.discountOptionToggle_.enabled);chrome.metricsPrivate.recordUserAction(`NewTabPage.Carts.${this.discountOptionToggle_.enabled?"EnableDiscount":"DisableDiscount"}`)}if(this.cartOptionToggle_.enabled!==this.cartOptionToggle_.initiallyEnabled){handler.setModuleDisabled("chrome_cart",!this.cartOptionToggle_.enabled)}}onShowRadioSelectionChanged_(e){this.show_=e.detail.value==="customize"}onShowChange_(){this.modules_.forEach(((m,i)=>this.set(`modules_.${i}.checked`,this.show_&&!m.disabled)))}radioSelection_(){return this.show_?"customize":"hide"}moduleToggleDisabled_(){return this.showManagedByPolicy_||!this.show_}showCartOptionToggle_(id,checked){return id==="history_clusters"&&checked&&loadTimeData.getBoolean("showCartInQuestModuleSetting")}showDiscountOptionToggle_(id,checked,eligible,cartOptionChecked){if(id==="chrome_cart"){return checked&&eligible}else if(id==="history_clusters"){return checked&&eligible&&cartOptionChecked}return false}}customElements.define(CustomizeModulesElement.is,CustomizeModulesElement);function getTemplate$v(){return html`<!--_html_template_start_--><style include="cr-hidden-style cr-icons">cr-button{--border-color:var(--color-new-tab-page-action-button-border);--hover-border-color:var(--color-new-tab-page-action-button-border-hovered);--text-color-action:var(--color-new-tab-page-dialog-background)}cr-dialog{--cr-dialog-background-color:var(--color-new-tab-page-dialog-background)}cr-dialog::part(dialog){height:100%;max-height:520px;min-width:800px}cr-dialog::part(wrapper){height:100%}cr-dialog::part(body-container){flex-grow:1}div[slot=title]{align-items:center;color:var(--color-new-tab-page-dialog-foreground);display:flex;flex-direction:row;height:64px;margin-top:16px;padding:0}div[slot=body]{color:var(--color-new-tab-page-dialog-foreground);display:flex;flex-direction:column;overflow:hidden;padding:0}#bodyContainer{display:flex;flex-direction:row;overflow:hidden}div[slot=button-container]{padding-top:16px}#leftTitleSpacer,#menu{width:218px}#title{line-height:1.5;margin-bottom:-2px;padding-inline-end:24px;user-select:none}#pages,#title{flex-grow:1;padding-inline-start:14px}#menu,#pages{height:100%;overflow:auto}#pages>iron-pages{margin:2px}div[scroll-border]{border-bottom:1px solid transparent}div[scroll-border][show-1],div[scroll-border][show-2]{border-bottom-color:var(--color-new-tab-page-dialog-border)}#menu{display:flex;flex-direction:column}#menuSelector{margin-bottom:2px;margin-top:2px}.menu-item{align-items:center;border-radius:0 16px 16px 0;color:var(--color-new-tab-page-dialog-foreground);cursor:pointer;display:flex;flex-direction:row;flex-shrink:0;font-size:14px;height:32px;outline:0;width:192px}.menu-item+.menu-item{margin-top:16px}:host-context([dir=rtl]) .menu-item{border-radius:16px 0 0 16px}.menu-item:hover{background-color:var(--color-new-tab-page-dialog-control-background-hovered)}:host-context(.focus-outline-visible) .menu-item:focus{box-shadow:var(--ntp-focus-shadow)}.menu-item:active{background-color:var(--color-new-tab-page-dialog-background-active)}.menu-item[selected]{background-color:var(--color-new-tab-page-selected-background);color:var(--color-new-tab-page-selected-foreground)}.menu-item-icon{-webkit-mask-repeat:no-repeat;-webkit-mask-size:100%;background-color:var(--color-new-tab-page-dialog-foreground);height:20px;margin-inline-end:16px;margin-inline-start:24px;width:20px}.menu-item[selected] .menu-item-icon{background-color:var(--color-new-tab-page-selected-foreground)}@media (forced-colors:active){:host-context(.focus-outline-visible) .menu-item:focus{outline:var(--cr-focus-outline-hcm)}.menu-item-icon,.menu-item-icon[selected]{background-color:ButtonText}.menu-item[selected]{background-color:SelectedItem}}#backgroundsIcon{-webkit-mask-image:url(icons/backgrounds.svg)}#shortcutsIcon{-webkit-mask-image:url(icons/link.svg)}#modulesIcon{-webkit-mask-image:url(icons/cards.svg)}#themesIcon{-webkit-mask-image:url(icons/colors.svg)}#backButton{--cr-icon-button-fill-color:var(--color-new-tab-page-dialog-foreground);margin-inline-end:4px;margin-inline-start:-12px}#titleNavigation{align-items:center;display:flex;flex-direction:row}cr-toggle{margin-inline-end:12px}#collectionTitle{flex-grow:1}</style>
<cr-dialog id="dialog" on-cancel="onCancel_" show-on-attach>
  <div slot="title">
    <div id="leftTitleSpacer"></div>
    <div id="title">
      <div id="titleText" hidden="[[showTitleNavigation_]]">
        Personnaliser cette page
      </div>
      <div id="titleNavigation" hidden="[[!showTitleNavigation_]]">
        <cr-icon-button id="backButton" class="icon-arrow-back" on-click="onBackClick_" title="Retour">
        </cr-icon-button>
        <div id="collectionTitle">[[selectedCollection_.label]]</div>
        <cr-toggle id="refreshToggle" checked="[[isRefreshToggleChecked_]]" on-change="onBackgroundDailyRefreshToggleChange_">
        </cr-toggle>
        Actualiser quotidiennement
      </div>
    </div>
  </div>
  <div slot="body">
    <div id="topPageScrollBorder" scroll-border></div>
    <div id="bodyContainer">
      <div id="menu">
        <iron-selector id="menuSelector" selected-attribute="selected" attr-for-selected="page-name" selected="{{selectedPage}}" on-keydown="onMenuItemKeyDown_" fallback-selection="backgrounds">
          <div class="menu-item" page-name="backgrounds" role="menuitem" tabindex="0">
            <div id="backgroundsIcon" class="menu-item-icon"></div>
            Arrière-plan
          </div>
          <div class="menu-item" page-name="shortcuts" role="menuitem" tabindex="0" hidden$="[[!shortcutsEnabled_]]">
            <div id="shortcutsIcon" class="menu-item-icon"></div>
            Raccourcis
          </div>
          <div class="menu-item" page-name="modules" role="menuitem" tabindex="0" hidden$="[[!modulesEnabled_]]">
            <div id="modulesIcon" class="menu-item-icon"></div>
            Fiches
          </div>
          <div class="menu-item" page-name="themes" role="menuitem" tabindex="0">
            <div id="themesIcon" class="menu-item-icon"></div>
            Couleur et thème
          </div>
        </iron-selector>
      </div>
      <div id="pages">
        <iron-pages selected="[[selectedPage]]" attr-for-selected="page-name">
          <ntp-customize-backgrounds id="backgrounds" page-name="backgrounds" selected-collection="{{selectedCollection_}}" theme="[[theme]]" background-selection="{{backgroundSelection}}">
          </ntp-customize-backgrounds>
          <ntp-customize-shortcuts page-name="shortcuts">
          </ntp-customize-shortcuts>
          <ntp-customize-modules page-name="modules" hidden$="[[!modulesEnabled_]]">
          </ntp-customize-modules>
          <cr-customize-themes id="customizeThemes" page-name="themes">
          </cr-customize-themes>
        </iron-pages>
      </div>
    </div>
    <div id="bottomPageScrollBorder" scroll-border></div>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_">
      Annuler
    </cr-button>
    <cr-button class="action-button" on-click="onDoneClick_">
      OK
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CustomizeDialogElement extends PolymerElement{static get is(){return"ntp-customize-dialog"}static get template(){return getTemplate$v()}static get properties(){return{theme:Object,selectedPage:{type:String,observer:"onSelectedPageChange_"},selectedCollection_:Object,showTitleNavigation_:{type:Boolean,computed:"computeShowTitleNavigation_(selectedPage, selectedCollection_)",value:false},isRefreshToggleChecked_:{type:Boolean,computed:`computeIsRefreshToggleChecked_(theme, selectedCollection_)`},shortcutsEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("shortcutsEnabled")},modulesEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("modulesEnabled")}}}constructor(){super();this.intersectionObservers_=[];this.pageHandler_=NewTabPageProxy.getInstance().handler}disconnectedCallback(){super.disconnectedCallback();this.intersectionObservers_.forEach((observer=>{observer.disconnect()}));this.intersectionObservers_=[]}ready(){super.ready();this.intersectionObservers_=[createScrollBorders(this.$.menu,this.$.topPageScrollBorder,this.$.bottomPageScrollBorder,"show-1"),createScrollBorders(this.$.pages,this.$.topPageScrollBorder,this.$.bottomPageScrollBorder,"show-2")];this.pageHandler_.onCustomizeDialogAction(CustomizeDialogAction.kOpenClicked)}onCancel_(){this.$.backgrounds.revertBackgroundChanges();this.$.customizeThemes.revertThemeChanges()}onCancelClick_(){this.pageHandler_.onCustomizeDialogAction(CustomizeDialogAction.kCancelClicked);this.$.dialog.cancel()}onDoneClick_(){this.$.backgrounds.confirmBackgroundChanges();this.$.customizeThemes.confirmThemeChanges();this.shadowRoot.querySelector("ntp-customize-shortcuts").apply();if(this.modulesEnabled_){this.shadowRoot.querySelector("ntp-customize-modules").apply()}this.pageHandler_.onCustomizeDialogAction(CustomizeDialogAction.kDoneClicked);this.$.dialog.close()}onMenuItemKeyDown_(e){if(!["Enter"," "].includes(e.key)){return}e.preventDefault();e.stopPropagation();this.selectedPage=e.target.getAttribute("page-name")}onSelectedPageChange_(){this.$.pages.scrollTop=0}computeIsRefreshToggleChecked_(){if(!this.selectedCollection_){return false}return!!this.theme&&this.theme.dailyRefreshEnabled&&this.selectedCollection_.id===this.theme.backgroundImageCollectionId}computeShowTitleNavigation_(){return this.selectedPage===CustomizeDialogPage.BACKGROUNDS&&!!this.selectedCollection_}onBackClick_(){this.selectedCollection_=null;this.pageHandler_.onCustomizeDialogAction(CustomizeDialogAction.kBackgroundsBackClicked);this.$.pages.scrollTop=0}onBackgroundDailyRefreshToggleChange_(){if(this.$.refreshToggle.checked){this.pageHandler_.setDailyRefreshCollectionId(this.selectedCollection_.id)}else{this.pageHandler_.setDailyRefreshCollectionId("")}this.pageHandler_.onCustomizeDialogAction(CustomizeDialogAction.kBackgroundsRefreshToggleClicked)}}customElements.define(CustomizeDialogElement.is,CustomizeDialogElement);function getTemplate$u(){return html`<!--_html_template_start_--><style include="cr-hidden-style cr-icons">:host{font-size:12px;max-width:537px;white-space:pre}#promoAndDismissContainer{align-items:center;background-color:var(--color-new-tab-page-promo-background);border:solid var(--color-new-tab-page-border) 1px;border-radius:24px;box-sizing:border-box;color:var(--color-new-tab-page-primary-foreground);display:flex;flex-direction:row;height:30px;justify-content:center}#promoContainer{align-items:center;display:flex;overflow-x:clip;padding-inline-end:8px}:host([shown-middle-slot-promo-id_]) #promoContainer{padding-inline-end:2px}#promoContainer>:first-child{margin-inline-start:8px}a{color:var(--color-new-tab-page-link);cursor:pointer;text-decoration:underline}a:focus{border-radius:2px;box-shadow:var(--ntp-focus-shadow);outline:0}img{background-color:var(--color-new-tab-page-promo-image-background);border-radius:50%;height:20px;margin-inline-end:4px;pointer-events:none;width:20px}#dismissPromoButton{--cr-icon-button-icon-size:14px;--cr-icon-button-size:20px;--cr-icon-button-fill-color:var(--color-new-tab-page-primary-foreground);color:var(--color-new-tab-page-primary-foreground);margin-inline-end:4px;margin-inline-start:8px}#promoContainer>:last-child{overflow:hidden;text-overflow:ellipsis}</style>

<div id="promoAndDismissContainer" hidden>
  
  <template is="dom-if" if="[[shownMiddleSlotPromoId_]]">
    <cr-icon-button id="dismissPromoButton" class="icon-clear" aria-label="Fermer" title="Fermer" on-click="onDismissPromoButtonClick_">
    </cr-icon-button>
  </template>
</div>
<cr-toast id="dismissPromoButtonToast" duration="10000">
  <div id="dismissPromoButtonToastMessage">
    Vous ne verrez plus ce message
  </div>
  <cr-button id="undoDismissPromoButton" aria-label="Appuyez sur Ctrl+Z pour annuler" on-click="onUndoDismissPromoButtonClick_">
    Annuler
  </cr-button>
</cr-toast>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var PromoDismissAction;(function(PromoDismissAction){PromoDismissAction[PromoDismissAction["DISMISS"]=0]="DISMISS";PromoDismissAction[PromoDismissAction["RESTORE"]=1]="RESTORE"})(PromoDismissAction||(PromoDismissAction={}));function recordPromoDismissAction(action){chrome.metricsPrivate.recordEnumerationValue("NewTabPage.Promos.DismissAction",action,Object.keys(PromoDismissAction).length)}async function renderPromo(promo){const browserHandler=NewTabPageProxy.getInstance().handler;const promoBrowserCommandHandler=BrowserCommandProxy.getInstance().handler;if(!promo){return null}const commandIds=[];function createAnchor(target){const commandIdMatch=/^command:(\d+)$/.exec(target.url);if(!commandIdMatch&&!target.url.startsWith("https://")){return null}const el=document.createElement("a");let commandId=null;if(!commandIdMatch){el.href=target.url}else{commandId=+commandIdMatch[1];if(!Object.values(Command).includes(commandId)){commandId=Command.kUnknownCommand}commandIds.push(commandId)}function onClick(event){if(commandId!==null){promoBrowserCommandHandler.executeCommand(commandId,{middleButton:event.button===1,altKey:event.altKey,ctrlKey:event.ctrlKey,metaKey:event.metaKey,shiftKey:event.shiftKey})}browserHandler.onPromoLinkClicked()}el.addEventListener("auxclick",onClick);el.addEventListener("click",onClick);return el}let hasContent=false;const promoContainer=document.createElement("div");promoContainer.id="promoContainer";promo.middleSlotParts.forEach((({image:image,link:link,text:text})=>{let el;if(image){el=new CrAutoImgElement;el.autoSrc=image.imageUrl.url;el.staticEncode=true;if(image.target){const anchor=createAnchor(image.target);if(anchor){anchor.appendChild(el);el=anchor}}el.classList.add("image")}else if(link){el=createAnchor(link.url)}else if(text){el=document.createElement("span")}const linkOrText=link||text;if(el&&linkOrText){el.innerText=linkOrText.text}if(el){hasContent=true;promoContainer.appendChild(el)}}));const canShow=(await Promise.all(commandIds.map((commandId=>promoBrowserCommandHandler.canExecuteCommand(commandId))))).every((({canExecute:canExecute})=>canExecute));if(hasContent&&canShow){browserHandler.onPromoRendered(WindowProxy.getInstance().now(),promo.logUrl||null);return{container:promoContainer,id:promo.id}}return null}class MiddleSlotPromoElement extends PolymerElement{constructor(){super(...arguments);this.eventTracker_=new EventTracker;this.setPromoListenerId_=null}static get is(){return"ntp-middle-slot-promo"}static get template(){return getTemplate$u()}static get properties(){return{shownMiddleSlotPromoId_:{type:String,reflectToAttribute:true},promo_:{type:Object,observer:"onPromoChange_"}}}connectedCallback(){super.connectedCallback();this.setPromoListenerId_=NewTabPageProxy.getInstance().callbackRouter.setPromo.addListener((promo=>{this.promo_=promo}));this.eventTracker_.add(window,"keydown",this.onWindowKeydown_.bind(this));NewTabPageProxy.getInstance().handler.updatePromoData()}disconnectedCallback(){super.disconnectedCallback();this.eventTracker_.removeAll();NewTabPageProxy.getInstance().callbackRouter.removeListener(this.setPromoListenerId_)}onPromoChange_(){renderPromo(this.promo_).then((promo=>{if(!promo){this.$.promoAndDismissContainer.hidden=true}else{const promoContainer=this.shadowRoot.getElementById("promoContainer");if(promoContainer){promoContainer.remove()}if(loadTimeData.getBoolean("middleSlotPromoDismissalEnabled")){this.shownMiddleSlotPromoId_=promo.id??""}const renderedPromoContainer=promo.container;assert(renderedPromoContainer);this.$.promoAndDismissContainer.prepend(renderedPromoContainer);this.$.promoAndDismissContainer.hidden=false}this.dispatchEvent(new Event("ntp-middle-slot-promo-loaded",{bubbles:true,composed:true}))}))}onWindowKeydown_(e){let ctrlKeyPressed=e.ctrlKey;if(ctrlKeyPressed&&e.key==="z"){this.onUndoDismissPromoButtonClick_()}}onDismissPromoButtonClick_(){assert(this.$.promoAndDismissContainer);this.$.promoAndDismissContainer.hidden=true;NewTabPageProxy.getInstance().handler.blocklistPromo(this.shownMiddleSlotPromoId_);this.blocklistedMiddleSlotPromoId_=this.shownMiddleSlotPromoId_;this.$.dismissPromoButtonToast.show();recordPromoDismissAction(PromoDismissAction.DISMISS)}onUndoDismissPromoButtonClick_(){assert(this.$.promoAndDismissContainer);NewTabPageProxy.getInstance().handler.undoBlocklistPromo(this.blocklistedMiddleSlotPromoId_);this.$.promoAndDismissContainer.hidden=false;this.$.dismissPromoButtonToast.hide();recordPromoDismissAction(PromoDismissAction.RESTORE)}}customElements.define(MiddleSlotPromoElement.is,MiddleSlotPromoElement);
// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ACTIVE_CLASS="focus-row-active";class FocusRow{root;delegate;eventTracker=new EventTracker;boundary_;constructor(root,boundary,delegate){this.root=root;this.boundary_=boundary||document.documentElement;this.delegate=delegate}static isFocusable(element){if(!element||element.disabled){return false}let current=element;while(true){assertInstanceof(current,Element);const style=window.getComputedStyle(current);if(style.visibility==="hidden"||style.display==="none"){return false}const parent=current.parentNode;if(!parent){return false}if(parent===current.ownerDocument||parent instanceof DocumentFragment){return true}current=parent}}static getFocusableElement(element){const withFocusable=element;if(withFocusable.getFocusableElement){return withFocusable.getFocusableElement()}return element}addItem(type,selectorOrElement){assert(type);let element;if(typeof selectorOrElement==="string"){element=this.root.querySelector(selectorOrElement)}else{element=selectorOrElement}if(!element){return false}element.setAttribute("focus-type",type);element.tabIndex=this.isActive()?0:-1;this.eventTracker.add(element,"blur",this.onBlur_.bind(this));this.eventTracker.add(element,"focus",this.onFocus_.bind(this));this.eventTracker.add(element,"keydown",this.onKeydown_.bind(this));this.eventTracker.add(element,"mousedown",this.onMousedown_.bind(this));return true}destroy(){this.eventTracker.removeAll()}getCustomEquivalent(_sampleElement){const focusable=this.getFirstFocusable();assert(focusable);return focusable}getElements(){return Array.from(this.root.querySelectorAll("[focus-type]")).map(FocusRow.getFocusableElement)}getEquivalentElement(sampleElement){if(this.getFocusableElements().indexOf(sampleElement)>=0){return sampleElement}const sampleFocusType=this.getTypeForElement(sampleElement);if(sampleFocusType){const sameType=this.getFirstFocusable(sampleFocusType);if(sameType){return sameType}}return this.getCustomEquivalent(sampleElement)}getFirstFocusable(type){const element=this.getFocusableElements().find((el=>!type||el.getAttribute("focus-type")===type));return element||null}getFocusableElements(){return this.getElements().filter(FocusRow.isFocusable)}getTypeForElement(element){return element.getAttribute("focus-type")||""}isActive(){return this.root.classList.contains(ACTIVE_CLASS)}makeActive(active){if(active===this.isActive()){return}this.getElements().forEach((function(element){element.tabIndex=active?0:-1}));this.root.classList.toggle(ACTIVE_CLASS,active)}onBlur_(e){if(!this.boundary_.contains(e.relatedTarget)){return}const currentTarget=e.currentTarget;if(this.getFocusableElements().indexOf(currentTarget)>=0){this.makeActive(false)}}onFocus_(e){if(this.delegate){this.delegate.onFocus(this,e)}}onMousedown_(e){if(e.button){return}const target=e.currentTarget;if(!target.disabled){target.tabIndex=0}}onKeydown_(e){const elements=this.getFocusableElements();const currentElement=FocusRow.getFocusableElement(e.currentTarget);const elementIndex=elements.indexOf(currentElement);assert(elementIndex>=0);if(this.delegate&&this.delegate.onKeydown(this,e)){return}const isShiftTab=!e.altKey&&!e.ctrlKey&&!e.metaKey&&e.shiftKey&&e.key==="Tab";if(hasKeyModifiers(e)&&!isShiftTab){return}let index=-1;let shouldStopPropagation=true;if(isShiftTab){index=elementIndex-1;if(index<0){return}}else if(e.key==="ArrowLeft"){index=elementIndex+(isRTL()?1:-1)}else if(e.key==="ArrowRight"){index=elementIndex+(isRTL()?-1:1)}else if(e.key==="Home"){index=0}else if(e.key==="End"){index=elements.length-1}else{shouldStopPropagation=false}const elementToFocus=elements[index];if(elementToFocus){this.getEquivalentElement(elementToFocus).focus();e.preventDefault()}if(shouldStopPropagation){e.stopPropagation()}}}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let hideInk=false;assert(!isIOS,"pointerdown doesn't work on iOS");document.addEventListener("pointerdown",(function(){hideInk=true}),true);document.addEventListener("keydown",(function(){hideInk=false}),true);function focusWithoutInk(toFocus){if(!("noink"in toFocus)||!hideInk){toFocus.focus();return}const toFocusWithNoInk=toFocus;assert(document===toFocusWithNoInk.ownerDocument);const{noink:noink}=toFocusWithNoInk;toFocusWithNoInk.noink=true;toFocusWithNoInk.focus();toFocusWithNoInk.noink=noink}function getTemplate$t(){return html`<!--_html_template_start_-->    <style>:host dialog{background-color:var(--cr-menu-background-color);border:none;border-radius:var(--cr-menu-border-radius,4px);box-shadow:var(--cr-menu-shadow);margin:0;min-width:128px;outline:0;padding:0;position:absolute}@media (forced-colors:active){:host dialog{border:var(--cr-border-hcm)}}:host-context([chrome-refresh-2023]){--cr-hairline:1px solid var(--color-menu-separator,
            var(--cr-fallback-color-divider));--cr-action-menu-disabled-item-color:var(--color-menu-item-foreground-disabled,
                var(--cr-fallback-color-disabled-foreground));--cr-action-menu-disabled-item-opacity:1;--cr-menu-background-color:var(--color-menu-background,
            var(--cr-fallback-color-surface));--cr-menu-background-focus-color:var(--cr-hover-background-color);--cr-menu-shadow:var(--cr-elevation-2);--cr-primary-text-color:var(--color-menu-item-foreground,
            var(--cr-fallback-color-on-surface))}:host dialog::backdrop{background-color:transparent}:host ::slotted(.dropdown-item){-webkit-tap-highlight-color:transparent;background:0 0;border:none;border-radius:0;box-sizing:border-box;color:var(--cr-primary-text-color);font:inherit;min-height:32px;padding:8px 24px;text-align:start;user-select:none;width:100%}:host ::slotted(.dropdown-item:not([hidden])){align-items:center;display:flex}:host ::slotted(.dropdown-item[disabled]){color:var(--cr-action-menu-disabled-item-color,var(--cr-primary-text-color));opacity:var(--cr-action-menu-disabled-item-opacity,.65)}:host ::slotted(.dropdown-item:not([disabled])){cursor:pointer}:host ::slotted(.dropdown-item:focus){background-color:var(--cr-menu-background-focus-color);outline:0}@media (forced-colors:active){:host ::slotted(.dropdown-item:focus){outline:var(--cr-focus-outline-hcm)}}.item-wrapper{background:var(--cr-menu-background-sheen);outline:0;padding:8px 0}:host-context([chrome-refresh-2023]) .item-wrapper{background:0 0}</style>
    <dialog id="dialog" part="dialog" on-close="onNativeDialogClose_" role="application" aria-roledescription$="[[roleDescription]]">
      <div id="wrapper" class="item-wrapper" role="menu" tabindex="-1" aria-label$="[[accessibilityLabel]]">
        <slot id="contentNode" on-slotchange="onSlotchange_"></slot>
      </div>
    </dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var AnchorAlignment;(function(AnchorAlignment){AnchorAlignment[AnchorAlignment["BEFORE_START"]=-2]="BEFORE_START";AnchorAlignment[AnchorAlignment["AFTER_START"]=-1]="AFTER_START";AnchorAlignment[AnchorAlignment["CENTER"]=0]="CENTER";AnchorAlignment[AnchorAlignment["BEFORE_END"]=1]="BEFORE_END";AnchorAlignment[AnchorAlignment["AFTER_END"]=2]="AFTER_END"})(AnchorAlignment||(AnchorAlignment={}));const DROPDOWN_ITEM_CLASS="dropdown-item";const SELECTABLE_DROPDOWN_ITEM_QUERY=`.${DROPDOWN_ITEM_CLASS}:not([hidden]):not([disabled])`;const AFTER_END_OFFSET=10;function getStartPointWithAnchor(start,end,menuLength,anchorAlignment,min,max){let startPoint=0;switch(anchorAlignment){case AnchorAlignment.BEFORE_START:startPoint=start-menuLength;break;case AnchorAlignment.AFTER_START:startPoint=start;break;case AnchorAlignment.CENTER:startPoint=(start+end-menuLength)/2;break;case AnchorAlignment.BEFORE_END:startPoint=end-menuLength;break;case AnchorAlignment.AFTER_END:startPoint=end;break}if(startPoint+menuLength>max){startPoint=end-menuLength}if(startPoint<min){startPoint=start}startPoint=Math.max(min,Math.min(startPoint,max-menuLength));return startPoint}function getDefaultShowConfig(){return{top:0,left:0,height:0,width:0,anchorAlignmentX:AnchorAlignment.AFTER_START,anchorAlignmentY:AnchorAlignment.AFTER_START,minX:0,minY:0,maxX:0,maxY:0}}class CrActionMenuElement extends PolymerElement{constructor(){super(...arguments);this.boundClose_=null;this.resizeObserver_=null;this.hasMousemoveListener_=false;this.anchorElement_=null;this.lastConfig_=null}static get is(){return"cr-action-menu"}static get template(){return getTemplate$t()}static get properties(){return{accessibilityLabel:String,autoReposition:{type:Boolean,value:false},open:{type:Boolean,notify:true,value:false},roleDescription:String}}ready(){super.ready();this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("mouseover",this.onMouseover_);this.addEventListener("click",this.onClick_)}disconnectedCallback(){super.disconnectedCallback();this.removeListeners_()}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}getDialog(){return this.$.dialog}removeListeners_(){window.removeEventListener("resize",this.boundClose_);window.removeEventListener("popstate",this.boundClose_);if(this.resizeObserver_){this.resizeObserver_.disconnect();this.resizeObserver_=null}}onNativeDialogClose_(e){if(e.target!==this.$.dialog){return}this.fire_("close")}onClick_(e){if(e.target===this){this.close();e.stopPropagation()}}onKeyDown_(e){e.stopPropagation();if(e.key==="Tab"||e.key==="Escape"){this.close();if(e.key==="Tab"){this.fire_("tabkeyclose",{shiftKey:e.shiftKey})}e.preventDefault();return}if(e.key!=="Enter"&&e.key!=="ArrowUp"&&e.key!=="ArrowDown"){return}const options=Array.from(this.querySelectorAll(SELECTABLE_DROPDOWN_ITEM_QUERY));if(options.length===0){return}const focused=getDeepActiveElement();const index=options.findIndex((option=>FocusRow.getFocusableElement(option)===focused));if(e.key==="Enter"){if(index!==-1){return}if(isWindows||isMac){this.close();e.preventDefault();return}}e.preventDefault();this.updateFocus_(options,index,e.key!=="ArrowUp");if(!this.hasMousemoveListener_){this.hasMousemoveListener_=true;this.addEventListener("mousemove",(e=>{this.onMouseover_(e);this.hasMousemoveListener_=false}),{once:true})}}onMouseover_(e){const item=e.composedPath().find((el=>el.matches&&el.matches(SELECTABLE_DROPDOWN_ITEM_QUERY)));(item||this.$.wrapper).focus()}updateFocus_(options,focusedIndex,next){const numOptions=options.length;assert(numOptions>0);let index;if(focusedIndex===-1){index=next?0:numOptions-1}else{const delta=next?1:-1;index=(numOptions+focusedIndex+delta)%numOptions}options[index].focus()}close(){this.removeListeners_();this.$.dialog.close();this.open=false;if(this.anchorElement_){assert(this.anchorElement_);focusWithoutInk(this.anchorElement_);this.anchorElement_=null}if(this.lastConfig_){this.lastConfig_=null}}showAt(anchorElement,config){this.anchorElement_=anchorElement;this.anchorElement_.scrollIntoViewIfNeeded();const rect=this.anchorElement_.getBoundingClientRect();let height=rect.height;if(config&&!config.noOffset&&config.anchorAlignmentY===AnchorAlignment.AFTER_END){height-=AFTER_END_OFFSET}this.showAtPosition(Object.assign({top:rect.top,left:rect.left,height:height,width:rect.width,anchorAlignmentX:AnchorAlignment.BEFORE_END},config));this.$.wrapper.focus()}showAtPosition(config){const doc=document.scrollingElement;const scrollLeft=doc.scrollLeft;const scrollTop=doc.scrollTop;this.resetStyle_();this.$.dialog.showModal();this.open=true;config.top+=scrollTop;config.left+=scrollLeft;this.positionDialog_(Object.assign({minX:scrollLeft,minY:scrollTop,maxX:scrollLeft+doc.clientWidth,maxY:scrollTop+doc.clientHeight},config));doc.scrollTop=scrollTop;doc.scrollLeft=scrollLeft;this.addListeners_();const openedByKey=FocusOutlineManager.forDocument(document).visible;if(openedByKey){const firstSelectableItem=this.querySelector(SELECTABLE_DROPDOWN_ITEM_QUERY);if(firstSelectableItem){requestAnimationFrame((()=>{firstSelectableItem.focus()}))}}}resetStyle_(){this.$.dialog.style.left="";this.$.dialog.style.right="";this.$.dialog.style.top="0"}positionDialog_(config){this.lastConfig_=config;const c=Object.assign(getDefaultShowConfig(),config);const top=c.top;const left=c.left;const bottom=top+c.height;const right=left+c.width;const rtl=getComputedStyle(this).direction==="rtl";if(rtl){c.anchorAlignmentX*=-1}const offsetWidth=this.$.dialog.offsetWidth;const menuLeft=getStartPointWithAnchor(left,right,offsetWidth,c.anchorAlignmentX,c.minX,c.maxX);if(rtl){const menuRight=document.scrollingElement.clientWidth-menuLeft-offsetWidth;this.$.dialog.style.right=menuRight+"px"}else{this.$.dialog.style.left=menuLeft+"px"}const menuTop=getStartPointWithAnchor(top,bottom,this.$.dialog.offsetHeight,c.anchorAlignmentY,c.minY,c.maxY);this.$.dialog.style.top=menuTop+"px"}onSlotchange_(){for(const node of this.$.contentNode.assignedElements({flatten:true})){if(node.classList.contains(DROPDOWN_ITEM_CLASS)&&!node.getAttribute("role")){node.setAttribute("role","menuitem")}}}addListeners_(){this.boundClose_=this.boundClose_||(()=>{if(this.$.dialog.open){this.close()}});window.addEventListener("resize",this.boundClose_);window.addEventListener("popstate",this.boundClose_);if(this.autoReposition){this.resizeObserver_=new ResizeObserver((()=>{if(this.lastConfig_){this.positionDialog_(this.lastConfig_);this.fire_("cr-action-menu-repositioned")}}));this.resizeObserver_.observe(this.$.dialog)}}}customElements.define(CrActionMenuElement.is,CrActionMenuElement);function getTemplate$s(){return html`<!--_html_template_start_--><style include="cr-icons">:host{display:flex;flex-direction:column;margin:16px}#titleContainer{align-items:center;display:flex;height:22px}.icon-background{align-items:center;border-radius:50%;display:flex;height:18px;justify-content:center;margin-inline-end:8px;width:18px}.module-icon{-webkit-mask-size:20px 20px;background-color:var(--color-new-tab-page-primary-foreground);height:var(--cr-icon-size);width:var(--cr-icon-size)}#title{color:var(--color-new-tab-page-primary-foreground);font-size:15px;font-weight:400}#chip{background-color:var(--color-new-tab-page-chip-background);border-radius:4px;color:var(--color-new-tab-page-chip-foreground);font-size:10px;height:12px;margin-inline-start:10px;padding:2px 6px}#headerSpacer{flex-grow:1}cr-action-menu{--cr-menu-shadow:var(--ntp-menu-shadow)}cr-icon-button{--cr-icon-button-icon-size:16px;--cr-icon-button-fill-color:var(--color-new-tab-page-primary-foreground);--cr-icon-button-hover-background-color:var(--color-new-tab-page-control-background-hovered);margin-inline-end:-4px;margin-inline-start:0}#infoButton{--cr-icon-image:url(icons/info.svg)}#menuButton{margin-inline-end:-10px}:host([modules-redesigned-enabled_]) #menuButton{background-color:var(--color-new-tab-page-module-scroll-button);height:18px;margin:0;width:18px}:host([modules-redesigned-enabled_]) #menuButton:hover{background-color:var(--color-new-tab-page-module-scroll-button-hover)}#description{color:var(--color-new-tab-page-secondary-foreground);font-size:12px;height:12px;margin-top:3px}</style>
<div id="titleContainer">
  <template is="dom-if" if="[[showIcon_]]">
    <div class="icon-background">
      <div class="module-icon" style$="[[iconStyle_]]">
      </div>
    </div>
  </template>
  <h2 id="title"><slot></slot></h2>
  <template is="dom-if" if="[[chipText]]">
    <div id="chip">[[chipText]]</div>
  </template>
  <div id="headerSpacer"></div>
  <slot name="title-actions"></slot>
  <template is="dom-if" if="[[showInfoButton]]">
    <cr-icon-button id="infoButton" title="À propos de cette fiche" on-click="onInfoButtonClick_">
    </cr-icon-button>
  </template>
  <template is="dom-if" if="[[!hideMenuButton]]" restamp>
    <cr-icon-button id="menuButton" title="[[moreActionsText]]" class="icon-more-vert" on-click="onMenuButtonClick_">
    </cr-icon-button>
  </template>
</div>
<template is="dom-if" if="[[descriptionText]]">
  <span id="description">[[descriptionText]]</span>
</template>
<cr-action-menu id="actionMenu">
  <slot name="action-menu-items"></slot>
  <template is="dom-if" if="[[showDismissButton]]">
    <button id="dismissButton" class="dropdown-item" on-click="onDismissButtonClick_">
      [[dismissText]]
    </button>
  </template>
  <button id="disableButton" class="dropdown-item" on-click="onDisableButtonClick_">
    [[disableText]]
  </button>
  <button id="customizeButton" class="dropdown-item" on-click="onCustomizeButtonClick_">
    Personnaliser les fiches
  </button>
  <template is="dom-if" if="[[showInfoButtonDropdown]]">
    <button id="infoButton" class="dropdown-item" on-click="onInfoButtonClick_">
      À propos de cette fiche
    </button>
  </template>
</cr-action-menu>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ModuleHeaderElement extends PolymerElement{static get is(){return"ntp-module-header"}static get template(){return getTemplate$s()}static get properties(){return{iconSrc:String,chipText:String,descriptionText:String,showInfoButton:{type:Boolean,value:false},showInfoButtonDropdown:{type:Boolean,value:false},showDismissButton:{type:Boolean,value:false},hideMenuButton:{type:Boolean,value:false},dismissText:String,disableText:String,moreActionsText:String,modulesRedesignedEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("modulesRedesignedEnabled"),reflectToAttribute:true},showIcon_:{type:Boolean,value:()=>loadTimeData.getBoolean("modulesHeaderIconEnabled")},iconStyle_:{type:String,computed:`computeIconStyle_(iconSrc)`}}}computeIconStyle_(){return`-webkit-mask-image: url(${this.iconSrc});`}onInfoButtonClick_(){this.$.actionMenu.close();this.dispatchEvent(new Event("info-button-click",{bubbles:true,composed:true}))}onMenuButtonClick_(e){this.$.actionMenu.showAt(e.target)}onDismissButtonClick_(){this.$.actionMenu.close();this.dispatchEvent(new Event("dismiss-button-click",{bubbles:true}))}onDisableButtonClick_(){this.$.actionMenu.close();this.dispatchEvent(new Event("disable-button-click",{bubbles:true}))}onCustomizeButtonClick_(){this.$.actionMenu.close();this.dispatchEvent(new Event("customize-module",{bubbles:true,composed:true}))}}customElements.define(ModuleHeaderElement.is,ModuleHeaderElement);function getTemplate$r(){return html`<!--_html_template_start_-->    <style>:host{--cr-toast-background:#323232;--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:#fff}@media (prefers-color-scheme:dark){:host{--cr-toast-background:var(--google-grey-900) linear-gradient(rgba(255, 255, 255, .06), rgba(255, 255, 255, .06));--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:var(--google-grey-200)}}:host{align-items:center;background:var(--cr-toast-background);border-radius:4px;bottom:0;box-shadow:0 2px 4px 0 rgba(0,0,0,.28);box-sizing:border-box;display:flex;margin:24px;max-width:var(--cr-toast-max-width,568px);min-height:52px;min-width:288px;opacity:0;padding:0 24px;position:fixed;transform:translateY(100px);transition:opacity .3s,transform .3s;visibility:hidden;z-index:1}:host-context([chrome-refresh-2023]):host{--cr-toast-background:var(--color-toast-background,
            var(--cr-fallback-color-inverse-surface));--cr-toast-button-color:var(--color-toast-button,
            var(--cr-fallback-color-inverse-primary));--cr-toast-text-color:var(--color-toast-foreground,
            var(--cr-fallback-color-inverse-on-surface));border-radius:8px;line-height:20px;padding:0 16px}:host-context([dir=ltr]){left:0}:host-context([dir=rtl]){right:0}:host([open]){opacity:1;transform:translateY(0);visibility:visible}:host ::slotted(*){color:var(--cr-toast-text-color)}:host ::slotted(cr-button){background-color:transparent!important;border:none!important;color:var(--cr-toast-button-color)!important;margin-inline-start:32px!important;min-width:52px!important;padding:8px!important}:host ::slotted(cr-button:hover){background-color:transparent!important}:host-context([chrome-refresh-2023]) ::slotted(cr-button:last-of-type){margin-inline-end:-8px}</style>
    <slot></slot>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrToastElement extends PolymerElement{constructor(){super(...arguments);this.hideTimeoutId_=null}static get is(){return"cr-toast"}static get template(){return getTemplate$r()}static get properties(){return{duration:{type:Number,value:0},open:{readOnly:true,type:Boolean,value:false,reflectToAttribute:true}}}static get observers(){return["resetAutoHide_(duration, open)"]}resetAutoHide_(){if(this.hideTimeoutId_!==null){window.clearTimeout(this.hideTimeoutId_);this.hideTimeoutId_=null}if(this.open&&this.duration!==0){this.hideTimeoutId_=window.setTimeout((()=>{this.hide()}),this.duration)}}show(){const shouldResetAutohide=this.open;this.removeAttribute("role");this.removeAttribute("aria-hidden");this._setOpen(true);this.setAttribute("role","alert");if(shouldResetAutohide){this.resetAutoHide_()}}hide(){this.setAttribute("aria-hidden","true");this._setOpen(false)}}customElements.define(CrToastElement.is,CrToastElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ModuleDescriptor{constructor(id,initializeCallback){this.id_=id;this.initializeCallback_=initializeCallback}get id(){return this.id_}async initialize(timeout){const loadStartTime=WindowProxy.getInstance().now();const element=await Promise.race([this.initializeCallback_(),new Promise((resolve=>{WindowProxy.getInstance().setTimeout((()=>{resolve(null)}),timeout)}))]);if(!element){return null}const loadEndTime=WindowProxy.getInstance().now();const duration=loadEndTime-loadStartTime;recordLoadDuration("NewTabPage.Modules.Loaded",loadEndTime);recordLoadDuration(`NewTabPage.Modules.Loaded.${this.id_}`,loadEndTime);recordDuration("NewTabPage.Modules.LoadDuration",duration);recordDuration(`NewTabPage.Modules.LoadDuration.${this.id_}`,duration);return element}}function getTemplate$q(){return html`<!--_html_template_start_--><style include="cr-hidden-style cr-icons">:host{display:inline-flex;margin:0 4px;vertical-align:top}#consentCardContainer{background-color:var(--color-new-tab-page-module-item-background);border:1px solid var(--color-new-tab-page-border);border-radius:var(--ntp-module-item-border-radius);display:inline-flex;flex-direction:column;height:140px;position:relative;width:244px}:host-context([chrome-refresh-2023]) #consentCardContainer{background-color:var(--color-sys-base-container-elevated)}:host([color-consent-container_]) #consentCardContainer{background-color:var(--google-blue-100)}#faviconContainer{text-align:center;width:auto}#faviconContainer ul{list-style-type:none;margin-block-end:0;margin-block-start:0;margin-inline-end:6px;padding:0}#faviconContainer li{display:inline;margin:2px}.favicon-image{border-radius:50%;height:24px;margin-inline-end:auto;margin-inline-start:auto;margin-top:16px;width:24px}.action-button{--text-color-action:var(--color-new-tab-page-action-button-foreground);background-color:var(--color-new-tab-page-action-button-background)}.content-container{color:var(--color-new-tab-page-primary-foreground);font-size:13px;font-weight:400;height:40px;line-height:20px;margin-inline-end:auto;margin-inline-start:auto;text-align:center;white-space:normal;width:220px}.truncate{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.button-container{display:inline-block;margin-block-end:16px;margin-inline-end:16px;margin-inline-start:16px;margin-top:8px}.wide-button{width:212px}#close{--cr-icon-button-fill-color:var(--color-new-tab-page-secondary-foreground);--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px;margin:4px 4px;position:absolute;right:0;top:2px}.action-button:focus-visible{outline:var(--color-new-tab-page-focus-ring) 1px auto}</style>

<div id="consentCardContainer">
  <div id="faviconContainer">
    <ul class="favicon-list">
      <template id="favionRepeat" is="dom-repeat" items="[[merchants]]" as="merchant">
        <li class="favicon">
          <img class="favicon-image" is="cr-auto-img" auto-src="[[getFaviconUrl_(merchant.cartUrl.url)]]" alt="">
        </li>
      </template>
    </ul>
  </div>
  <div id="contentSteps">
    <iron-pages selected="[[currentStep]]">
      <template id="consentStepRepeat" is="dom-repeat" items="[[steps_]]" as="step">
        <div class="step-container" id="[[step.id]]">
          <div class="content-container truncate">
            <span class="content">
              [[step.content]]
            </span>
          </div>
          <div class="button-container">
            <template id="oneButtonElement" is="dom-if" if="[[step.hasOneButton]]" restamp>
              <cr-button class="action-button wide-button" onclick="[[step.actionButton.onClickHandler]]">
                [[step.actionButton.text]]
              </cr-button>
            </template>
            <template id="TwoButtonElement" is="dom-if" if="[[step.hasTwoButtons]]" restamp>
              <cr-button id="cancelButton" class="cancel-button" onclick="[[step.cancelButton.onClickHandler]]">
                [[step.cancelButton.text]]
               </cr-button>
              <cr-button id="actionButton" class="action-button" onclick="[[step.actionButton.onClickHandler]]">
                [[step.actionButton.text]]
              </cr-button>
            </template>
          </div>
        </div>
      </template>
    </iron-pages>
  </div>
  <template is="dom-if" if="[[showCloseButton_]]" restamp>
    <cr-icon-button id="close" class="icon-clear" aria-label="Fermer" on-click="onCloseClick_"></cr-icon-button>
  </template>
</div>
<template is="dom-if" if="[[showDiscountConsentDialog_]]" restamp>
  <discount-consent-dialog id="discountConsentDialog" on-close="onDiscountConsentDialogClose_" ]></discount-consent-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var DiscountConsentVariation;(function(DiscountConsentVariation){DiscountConsentVariation[DiscountConsentVariation["DEFAULT"]=0]="DEFAULT";DiscountConsentVariation[DiscountConsentVariation["STRING_CHANGE"]=1]="STRING_CHANGE";DiscountConsentVariation[DiscountConsentVariation["INLINE"]=2]="INLINE";DiscountConsentVariation[DiscountConsentVariation["DIALOG"]=3]="DIALOG";DiscountConsentVariation[DiscountConsentVariation["NATIVE_DIALOG"]=4]="NATIVE_DIALOG"})(DiscountConsentVariation||(DiscountConsentVariation={}));class DiscountConsentCard extends(I18nMixin(PolymerElement)){static get is(){return"discount-consent-card"}static get template(){return getTemplate$q()}static get properties(){return{merchants:Array,currentStep:{type:Number,value:0},steps_:{type:Array,computed:"computeSteps_(showCloseButton_, stepOneContent_)"},colorConsentContainer_:{type:Boolean,computed:"computeColorConsentContainer_(currentStep)",reflectToAttribute:true},showCloseButton_:{type:Boolean,value:()=>loadTimeData.getBoolean("modulesCartDiscountInlineCardShowCloseButton")},stepOneContent_:{type:String,computed:"computeStepOneContent_(merchants)"},showDiscountConsentDialog_:{type:Boolean,value:false}}}getTotalStep_(){if(loadTimeData.getInteger("modulesCartDiscountConsentVariation")===DiscountConsentVariation.INLINE){return 2}return 1}getStepTwoContent_(){return loadTimeData.getString("modulesCartConsentStepTwoContent")}computeColorConsentContainer_(currentStep){return loadTimeData.getBoolean("modulesCartConsentStepTwoDifferentColor")&&currentStep===1}computeSteps_(showCloseButton,stepOneContent){const steps=[];steps.push({id:"step1",content:stepOneContent,hasOneButton:true,actionButton:{text:loadTimeData.getString("modulesCartConsentStepOneButton"),onClickHandler:()=>{chrome.metricsPrivate.recordUserAction("NewTabPage.Carts.ShowInterestInDiscountConsent");this.dispatchEvent(new CustomEvent("discount-consent-continued",{composed:true}));if(loadTimeData.getInteger("modulesCartDiscountConsentVariation")===DiscountConsentVariation.NATIVE_DIALOG){return}if(this.currentStep+1<this.getTotalStep_()){this.currentStep++}else{this.showDiscountConsentDialog_=true}}}});if(this.getTotalStep_()===1){return steps}const step2={id:"step2",content:this.getStepTwoContent_(),actionButton:{text:loadTimeData.getString("modulesCartDiscountConsentAccept"),onClickHandler:()=>{this.dispatchEvent(new CustomEvent("discount-consent-accepted",{composed:true}))}}};if(showCloseButton){step2.hasOneButton=true}else{step2.hasTwoButtons=true;step2.cancelButton={text:loadTimeData.getString("modulesCartDiscountConsentReject"),onClickHandler:()=>{this.dispatchEvent(new CustomEvent("discount-consent-rejected",{composed:true}))}}}steps.push(step2);return steps}computeStepOneContent_(merchants){const stepOneUseStaticContent=loadTimeData.getBoolean("modulesCartStepOneUseStaticContent");if(!stepOneUseStaticContent){if(merchants.length===1){return loadTimeData.getStringF("modulesCartConsentStepOneOneMerchantContent",merchants[0].merchant)}else if(merchants.length===2){return loadTimeData.getStringF("modulesCartConsentStepOneTwoMerchantsContent",merchants[0].merchant,merchants[1].merchant)}else if(merchants.length>=3){return loadTimeData.getStringF("modulesCartConsentStepOneThreeMerchantsContent",merchants[0].merchant,merchants[1].merchant)}}return loadTimeData.getString("modulesCartStepOneStaticContent")}getFaviconUrl_(url){const faviconUrl=new URL("chrome://favicon2/");faviconUrl.searchParams.set("size","20");faviconUrl.searchParams.set("scaleFactor","1x");faviconUrl.searchParams.set("showFallbackMonogram","");faviconUrl.searchParams.set("pageUrl",url);return faviconUrl.href}onCloseClick_(){if(this.currentStep===0){this.dispatchEvent(new CustomEvent("discount-consent-dismissed",{composed:true}))}else{this.dispatchEvent(new CustomEvent("discount-consent-rejected",{composed:true}))}}onDiscountConsentDialogClose_(){this.showDiscountConsentDialog_=false}}customElements.define(DiscountConsentCard.is,DiscountConsentCard);function getTemplate$p(){return html`<!--_html_template_start_--><style include="cr-hidden-style cr-icons">:host{display:flex;flex-direction:column;height:100%;width:100%;--discount-chip-background:var(--color-new-tab-page-cart-module-discount-chip-background);--discount-chip-text-color:var(--color-new-tab-page-cart-module-discount-chip-foreground)}@media (prefers-color-scheme:dark){:host{--discount-chip-background:linear-gradient(0deg,
          rgba(129, 201, 149, 0.12), rgba(129, 201, 149, 0.12)),#202124;--discount-chip-text-color:var(--google-green-300)}}a:focus-visible{outline:var(--color-new-tab-page-focus-ring)}#module:hover .side-scroll-button{visibility:visible}ntp-module-header{margin-bottom:0}#moduleContent{display:flex;height:166px;padding-bottom:16px;position:relative}:host([header-description-text]) #moduleContent{height:158px}#cartCarousel{display:inline-block;overflow:hidden;padding-top:24px;white-space:nowrap;z-index:0}.scroll-button{align-items:center;display:flex}:host([header-description-text]) #cartCarousel{padding-top:16px}#consentCard,.cart-container{background-color:var(--color-new-tab-page-module-item-background);border:1px solid var(--color-new-tab-page-border);border-radius:var(--ntp-module-item-border-radius);display:inline-flex;flex-direction:column;height:140px;margin:0 4px}:host-context([chrome-refresh-2023]) #consentCard,:host-context([chrome-refresh-2023]) .cart-container{background-color:var(--color-sys-base-container-elevated)}.cart-container{outline:0;position:relative;width:118px}.cart-item{cursor:pointer;display:inline-flex;flex-direction:column;text-decoration:none}#consentContainer{display:inline-block;opacity:0;overflow:hidden;transition:all 250ms cubic-bezier(.4,0,.2,1);vertical-align:top;width:0}:host([discount-consent-visible]) #consentContainer{opacity:1;width:254px}#consentCard{width:244px}#consentIconContainer{background:var(--discount-chip-background);border-radius:var(--ntp-module-item-border-radius);height:24px;margin-inline-end:auto;margin-inline-start:auto;margin-top:16px;width:24px}#consentIcon{-webkit-mask-image:url(modules/cart/icons/consent_label.svg);-webkit-mask-repeat:no-repeat;-webkit-mask-size:100%;background-color:var(--discount-chip-text-color);height:15px;margin-inline-end:auto;margin-inline-start:auto;margin-top:4.5px;width:15px}#consentContent{color:var(--color-new-tab-page-primary-foreground);font-size:13px;font-weight:400;height:40px;line-height:20px;margin-inline-end:auto;margin-inline-start:auto;margin-top:4px;text-align:center;white-space:normal;width:220px}#consentButtonContainer{display:inline-block;margin-inline-start:16px;margin-top:8px}.discount-chip{background:var(--discount-chip-background);border-radius:4px;color:var(--discount-chip-text-color);font-size:12px;height:24px;left:50%;line-height:24px;position:absolute;text-align:center;top:-18px;transform:translateX(-50%);width:102px;z-index:1}:host-context(.focus-outline-visible) .cart-item:focus{box-shadow:var(--ntp-focus-shadow)}.action-button{--text-color-action:var(--color-new-tab-page-action-button-foreground);background-color:var(--color-new-tab-page-action-button-background)}.cart-title{color:var(--color-new-tab-page-primary-foreground);display:flex;flex-direction:row;font-size:13px;height:20px;justify-content:center;margin:4px 8px 0 8px;text-align:center}.cart-title .merchant{font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cart-title .item-count{color:var(--color-new-tab-page-secondary-foreground)}.favicon-image{border-radius:50%;display:block;height:24px;margin-inline-end:auto;margin-inline-start:auto;margin-top:16px;width:24px}.thumbnail-container{margin-top:4px;text-align:center;width:auto}.thumbnail-container ul{list-style-type:none;margin-inline-end:24px;padding:0}.thumbnail-container li{display:inline;margin-inline-end:-24px}.thumbnail-img{border:2px solid var(--color-new-tab-page-module-item-background);border-radius:50%;height:44px;object-fit:cover;width:44px}.thumbnail-fallback{background:#fff;border:2px solid var(--color-new-tab-page-module-item-background);border-radius:50%;display:inline-block;height:44px;margin-top:10px;position:relative;width:44px}.thumbnail-fallback-img{height:28px;margin-top:inherit;width:28px}.cart-container cr-icon-button{--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px;margin:4px 4px;position:absolute;right:0;top:2px}:host-context([dir=rtl]) cr-icon-button{left:0;right:unset}:host-context([dir=rtl]) #rightScrollShadow{left:0;right:unset}#scrollButtons{align-items:center;display:flex;height:100%;justify-content:space-between;position:absolute;width:100%}.side-scroll-shadow{background-color:var(--color-new-tab-page-module-background);display:flex;height:160px;opacity:.38;pointer-events:none;position:absolute;width:24px;z-index:1}.side-scroll-button{--cr-icon-button-fill-color:var(--color-new-tab-page-icon-button-background);--cr-icon-button-icon-size:16px;--cr-icon-button-margin-start:0;--cr-icon-button-margin-end:0;--cr-icon-image:url(icons/chevron.svg);background-color:var(--color-new-tab-page-module-scroll-button-background);border-radius:50%;top:50%;visibility:hidden;z-index:2}.side-scroll-button:hover{--cr-icon-button-fill-color:var(--color-new-tab-page-icon-button-background-active);background-color:var(--color-new-tab-page-module-scroll-button-background-hovered)}#leftScrollButton{--cr-icon-image-transform:rotate(90deg);margin-inline-start:4px}#rightScrollButton{--cr-icon-image-transform:rotate(270deg);margin-inline-end:4px}#rightScrollShadow{right:0}.probe{display:inline-flex;width:12px}.icon-more-vert{--cr-icon-button-fill-color:var(--color-new-tab-page-secondary-foreground)}</style>
<div id="module">
  <ntp-module-header chip-text="[[headerChipText]]" description-text="[[headerDescriptionText]]" dismiss-text="[[i18nRecursive('',
                                    'modulesDismissButtonText',
                                    'modulesCartLowerThese')]]" disable-text="[[i18nRecursive('',
                                    'modulesDisableButtonText',
                                    'modulesCartLower')]]" more-actions-text="[[i18nRecursive('',
                                         'modulesMoreActions',
                                         'modulesCartLowerYour')]]" show-info-button on-info-button-click="onInfoButtonClick_" show-dismiss-button on-dismiss-button-click="onDismissButtonClick_" on-disable-button-click="onDisableButtonClick_" icon-src="modules/cart/icons/shopping_cart.svg">
    Vos paniers
  </ntp-module-header>
  <div id="moduleContent">
    <div id="scrollButtons">
      <div class="scroll-button">
        <template is="dom-if" if="[[showLeftScrollButton_]]">
          <div id="leftScrollShadow" class="side-scroll-shadow"></div>
          <cr-icon-button id="leftScrollButton" class="side-scroll-button" on-click="onLeftScrollClick_">
          </cr-icon-button>
        </template>
      </div>
      <div class="scroll-button">
        <template is="dom-if" if="[[showRightScrollButton_]]">
          <div id="rightScrollShadow" class="side-scroll-shadow"> </div>
          <cr-icon-button id="rightScrollButton" class="side-scroll-button" on-click="onRightScrollClick_">
          </cr-icon-button>
        </template>
      </div>
    </div>
    <div id="cartCarousel">
      <div id="leftProbe" class="probe"></div>
      <div id="consentContainer">
        <template id="consentCardElement" is="dom-if" if="[[showDiscountConsent]]">
          
          <template is="dom-if" if="[[!discountConsentHasTwoSteps_]]" restamp>
            <div id="consentCard">
              <div id="consentIconContainer">
                <div id="consentIcon"></div>
              </div>
              <span id="consentContent">
                Autoriser Chrome à vous proposer des remises personnalisées sur vos paniers ?
              </span>
              <div id="consentButtonContainer">
                <cr-button id="cancelButton" class="cancel-button" on-click="onDiscountConsentRejected_" on-auxclick="onDisallowDiscount_">
                  Non, merci
                </cr-button>
                <cr-button id="actionButton" class="action-button" on-click="onDiscountConsentAccepted_" on-auxclick="onAllowDiscount_">
                  Obtenir des remises
                </cr-button>
              </div>
            </div>
          </template>
          <template is="dom-if" if="[[discountConsentHasTwoSteps_]]" restamp>
            <discount-consent-card id="consentCardV2" merchants="[[firstThreeCartItems_]]"></discount-consent-card>
          </template>
        </template>
      </div>
      <template id="cartItemRepeat" is="dom-repeat" items="[[cartItems]]">
        <div class="cart-container">
          <a class="cart-item" title="[[item.merchant]]" href="[[item.cartUrl.url]]" on-click="onCartItemClick_" on-auxclick="onCartItemClick_" on-contextmenu="onCartItemContextMenuClick_">
            <template is="dom-if" if="[[item.discountText]]">
              <div class="discount-chip">[[item.discountText]]</div>
            </template>
            <img class="favicon-image" is="cr-auto-img" auto-src="[[getFaviconUrl_(item.cartUrl.url)]]">
            <div class="cart-title">
              <span class="merchant">[[item.merchant]]</span>
              <template is="dom-if" if="[[item.productImageUrls.length]]">
                <span class="item-count">
                  &nbsp•&nbsp[[item.productImageUrls.length]]
                </span>
              </template>
            </div>
            <div class="thumbnail-container">
              <template is="dom-if" if="[[item.productImageUrls.length]]">
                <ul class="thumbnail-list">
                  <template is="dom-repeat" items="[[getImagesToShow_(item.productImageUrls)]]">
                    <li>
                      <img class="thumbnail-img" is="cr-auto-img" auto-src="[[item.url]]" on-error="onProductImageLoadError_">
                      
                    </li>
                  </template>
                </ul>
              </template>
              <template id="thumbnailFallback" is="dom-if" if="[[!item.productImageUrls.length]]">
                <div class="thumbnail-fallback">
                  <img class="thumbnail-fallback-img" src="modules/cart/icons/cart_fallback.svg">
                </div>
              </template>
            </div>
          </a>
          <cr-icon-button class="icon-more-vert" title="[[i18n('modulesMoreActions', item.merchant)]]" on-click="onCartMenuButtonClick_">
          </cr-icon-button>
        </div>
      </template>
      <div id="rightProbe" class="probe"></div>
    </div>
    <cr-action-menu id="cartActionMenu">
      <button id="hideCartButton" class="dropdown-item" on-click="onCartHide_">
        [[cartMenuHideItem_]]
      </button>
      <button id="removeCartButton" class="dropdown-item" on-click="onCartRemove_">
        [[cartMenuRemoveItem_]]
      </button>
    </cr-action-menu>
  </div>
</div>
<cr-lazy-render id="infoDialogRender">
  <template>
    <ntp-info-dialog inner-h-t-m-l="[[i18nAdvanced('modulesCartInfo')]]">
    </ntp-info-dialog>
  </template>
</cr-lazy-render>
<cr-toast id="dismissCartToast" duration="10000" tabindex="0">
  <div id="dismissCartToastMessage">
    [[dismissedCartData_.message]]
  </div>
  <cr-button id="undoDismissCartButton" on-click="onUndoDismissCartButtonClick_">
    Annuler
  </cr-button>
</cr-toast>
<cr-toast id="confirmDiscountConsentToast" duration="10000" tabindex="0">
  <div id="confirmDiscountConsentMessage">
    [[confirmDiscountConsentString_]]
  </div>
  <cr-button id="confirmDiscountConsentButton" on-click="onConfirmDiscountConsentClick_">
    OK
  </cr-button>
</cr-toast>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ChromeCartModuleElement extends(I18nMixin(PolymerElement)){constructor(){super(...arguments);this.scrollBehavior="smooth";this.intersectionObserver_=null;this.currentMenuIndex_=0;this.eventTracker_=new EventTracker}static get is(){return"ntp-chrome-cart-module"}static get template(){return getTemplate$p()}static get properties(){return{cartItems:Array,headerChipText:String,headerDescriptionText:{type:String,reflectToAttribute:true},showDiscountConsent:Boolean,showLeftScrollButton_:Boolean,showRightScrollButton_:Boolean,cartMenuHideItem_:String,cartMenuRemoveItem_:String,dismissedCartData_:{type:Object,value:null},confirmDiscountConsentString_:String,discountConsentHasTwoSteps_:{type:Boolean,value:()=>loadTimeData.getInteger("modulesCartDiscountConsentVariation")>DiscountConsentVariation.STRING_CHANGE},firstThreeCartItems_:{type:Array,computed:"computeFirstThreeCartItems_(cartItems)"},discountConsentVisible:{type:Boolean,reflectToAttribute:true}}}connectedCallback(){super.connectedCallback();const leftProbe=this.$.cartCarousel.querySelector("#leftProbe");const rightProbe=this.$.cartCarousel.querySelector("#rightProbe");this.intersectionObserver_=new IntersectionObserver((entries=>{entries.forEach((({target:target,intersectionRatio:intersectionRatio})=>{const show=intersectionRatio===0;if(target===leftProbe){this.showLeftScrollButton_=show;if(show){this.dispatchEvent(new Event("left-scroll-show"))}else{this.dispatchEvent(new Event("left-scroll-hide"))}}else if(target===rightProbe){this.showRightScrollButton_=show;if(show){this.dispatchEvent(new Event("right-scroll-show"))}else{this.dispatchEvent(new Event("right-scroll-hide"))}}}))}),{root:this.$.cartCarousel});this.shadowRoot.querySelectorAll(".probe").forEach((el=>this.intersectionObserver_.observe(el)));this.eventTracker_.add(this,"discount-consent-accepted",(()=>this.onDiscountConsentAccepted_()));this.eventTracker_.add(this,"discount-consent-rejected",(()=>this.onDiscountConsentRejected_()));this.eventTracker_.add(this,"discount-consent-dismissed",(()=>this.onDiscountConsentDismissed_()));this.eventTracker_.add(this,"discount-consent-continued",(()=>this.onDiscountConsentContinued_()));this.eventTracker_.add(this.$.consentContainer,"transitionend",(()=>this.onDiscountConsentHidden_()))}disconnectedCallback(){super.disconnectedCallback();this.intersectionObserver_.disconnect();this.eventTracker_.removeAll()}computeFirstThreeCartItems_(cartItems){return cartItems.slice(0,3)}getFaviconUrl_(url){const faviconUrl=new URL("chrome://favicon2/");faviconUrl.searchParams.set("size","24");faviconUrl.searchParams.set("scaleFactor","1x");faviconUrl.searchParams.set("showFallbackMonogram","");faviconUrl.searchParams.set("pageUrl",url);return faviconUrl.href}getImagesToShow_(imageUrls){return imageUrls.slice(0,3)}onCartMenuButtonClick_(e){e.preventDefault();e.stopPropagation();this.currentMenuIndex_=e.model.index;const merchant=this.cartItems[this.currentMenuIndex_].merchant;this.cartMenuHideItem_=loadTimeData.getStringF("modulesCartCartMenuHideMerchant",merchant);this.cartMenuRemoveItem_=loadTimeData.getStringF("modulesCartCartMenuRemoveMerchant",merchant);this.$.cartActionMenu.showAt(e.target)}async onCartHide_(){this.$.cartActionMenu.close();const merchant=this.cartItems[this.currentMenuIndex_].merchant;const cartUrl=this.cartItems[this.currentMenuIndex_].cartUrl;await ChromeCartProxy.getHandler().hideCart(cartUrl);this.dismissedCartData_={message:loadTimeData.getStringF("modulesCartCartMenuHideMerchantToastMessage",merchant),restoreCallback:async()=>{await ChromeCartProxy.getHandler().restoreHiddenCart(cartUrl)}};const isModuleVisible=await this.resetCartData_();if(isModuleVisible){this.$.dismissCartToast.show()}}async onCartRemove_(){this.$.cartActionMenu.close();const merchant=this.cartItems[this.currentMenuIndex_].merchant;const cartUrl=this.cartItems[this.currentMenuIndex_].cartUrl;await ChromeCartProxy.getHandler().removeCart(cartUrl);this.dismissedCartData_={message:loadTimeData.getStringF("modulesCartCartMenuRemoveMerchantToastMessage",merchant),restoreCallback:async()=>{await ChromeCartProxy.getHandler().restoreRemovedCart(cartUrl)}};const isModuleVisible=await this.resetCartData_();if(isModuleVisible){this.$.dismissCartToast.show()}}async onUndoDismissCartButtonClick_(){await this.dismissedCartData_.restoreCallback();this.dismissedCartData_=null;this.resetCartData_();this.$.dismissCartToast.hide()}async resetCartData_(){const{carts:carts}=await ChromeCartProxy.getHandler().getMerchantCarts();this.cartItems=carts;const isModuleVisible=this.cartItems.length!==0;if(!isModuleVisible&&this.dismissedCartData_!==null){this.dispatchEvent(new CustomEvent("dismiss-module",{bubbles:true,composed:true,detail:{message:this.dismissedCartData_.message,restoreCallback:async()=>{chrome.metricsPrivate.recordUserAction("NewTabPage.Carts.RestoreLastCartRestoresModule");await this.dismissedCartData_.restoreCallback();this.dismissedCartData_=null;const{carts:carts}=await ChromeCartProxy.getHandler().getMerchantCarts();this.cartItems=carts}}}));chrome.metricsPrivate.recordUserAction("NewTabPage.Carts.DismissLastCartHidesModule")}return isModuleVisible}onInfoButtonClick_(){this.$.infoDialogRender.get().showModal()}onDismissButtonClick_(){ChromeCartProxy.getHandler().hideCartModule();this.dispatchEvent(new CustomEvent("dismiss-module",{bubbles:true,composed:true,detail:{message:loadTimeData.getString("modulesCartModuleMenuHideToastMessage"),restoreCallback:()=>{ChromeCartProxy.getHandler().restoreHiddenCartModule();chrome.metricsPrivate.recordUserAction("NewTabPage.Carts.UndoHideModule")}}}));chrome.metricsPrivate.recordUserAction("NewTabPage.Carts.HideModule")}onDisableButtonClick_(){this.dispatchEvent(new CustomEvent("disable-module",{bubbles:true,composed:true,detail:{message:loadTimeData.getStringF("disableModuleToastMessage",loadTimeData.getString("modulesCartLowerYour")),restoreCallback:()=>{chrome.metricsPrivate.recordUserAction("NewTabPage.Carts.UndoRemoveModule")}}}));chrome.metricsPrivate.recordUserAction("NewTabPage.Carts.RemoveModule")}onRightScrollClick_(){const carts=this.$.cartCarousel.querySelectorAll(".cart-container");let lastVisibleIndex=0;for(let i=0;i<carts.length;i++){if(this.getVisibilityForIndex_(i)){lastVisibleIndex=i}}this.scrollToIndex_(lastVisibleIndex+1);chrome.metricsPrivate.recordUserAction("NewTabPage.Carts.RightScrollClick")}onLeftScrollClick_(){const carts=this.$.cartCarousel.querySelectorAll(".cart-container");let visibleRange=0;let firstVisibleIndex=0;for(let i=carts.length-1;i>=0;i--){if(this.getVisibilityForIndex_(i)){visibleRange+=1;firstVisibleIndex=i}}this.scrollToIndex_(Math.max(0,firstVisibleIndex-visibleRange));chrome.metricsPrivate.recordUserAction("NewTabPage.Carts.LeftScrollClick")}scrollToIndex_(index){const carts=this.$.cartCarousel.querySelectorAll(".cart-container");const leftScrollShadow=this.shadowRoot.getElementById("leftScrollShadow");const rightScrollShadow=this.shadowRoot.getElementById("rightScrollShadow");const scrollOffset=Math.max(leftScrollShadow?leftScrollShadow.offsetWidth:0,rightScrollShadow?rightScrollShadow.offsetWidth:0);let leftPosition=carts[index].offsetLeft-scrollOffset;if(index===0){const consentCard=this.shadowRoot.getElementById(this.discountConsentHasTwoSteps_?"consentCardV2":"consentCard");if(consentCard){leftPosition-=consentCard.offsetWidth}}this.$.cartCarousel.scrollTo({top:0,left:leftPosition,behavior:this.scrollBehavior})}getVisibilityForIndex_(index){const cartCarousel=this.$.cartCarousel;const cart=cartCarousel.querySelectorAll(".cart-container")[index];return cart&&cart.offsetLeft>cartCarousel.scrollLeft&&cartCarousel.scrollLeft+cartCarousel.clientWidth>cart.offsetLeft+cart.offsetWidth}async onCartItemClick_(e){const index=this.$.cartItemRepeat.indexForElement(e.target);if(loadTimeData.getBoolean("ruleBasedDiscountEnabled")&&(e.shouldNavigate===undefined||e.shouldNavigate===false)){e.preventDefault();const{discountUrl:discountUrl}=await ChromeCartProxy.getHandler().getDiscountURL(this.cartItems[index].cartUrl);this.set(`cartItems.${index}.cartUrl`,discountUrl);const cloneEvent=new PointerEvent(e.type,e);cloneEvent.shouldNavigate=true;this.$.cartCarousel.querySelectorAll(".cart-item")[index].dispatchEvent(cloneEvent);return}ChromeCartProxy.getHandler().prepareForNavigation(this.cartItems[index].cartUrl,true);this.dispatchEvent(new Event("usage",{bubbles:true,composed:true}));chrome.metricsPrivate.recordSmallCount("NewTabPage.Carts.ClickCart",index)}onDiscountConsentHidden_(){if(this.showDiscountConsent&&!this.discountConsentVisible&&this.consentStatus_!==undefined){this.showDiscountConsent=false;switch(this.consentStatus_){case ConsentStatus.DISMISSED:const firstCartLink=this.$.cartCarousel.querySelector(".cart-item");if(firstCartLink!==null&&!this.$.confirmDiscountConsentToast.open){firstCartLink.focus()}return;case ConsentStatus.ACCEPTED:this.confirmDiscountConsentString_=loadTimeData.getString("modulesCartDiscountConsentAcceptConfirmation");break;case ConsentStatus.REJECTED:this.confirmDiscountConsentString_=loadTimeData.getString("modulesCartDiscountConsentRejectConfirmation");break;default:assertNotReached()}this.$.confirmDiscountConsentToast.show();this.$.confirmDiscountConsentToast.focus()}}onDiscountConsentRejected_(){this.consentStatus_=ConsentStatus.REJECTED;this.discountConsentVisible=false;ChromeCartProxy.getHandler().onDiscountConsentAcknowledged(false);chrome.metricsPrivate.recordUserAction("NewTabPage.Carts.RejectDiscountConsent")}onDiscountConsentAccepted_(){this.consentStatus_=ConsentStatus.ACCEPTED;this.discountConsentVisible=false;ChromeCartProxy.getHandler().onDiscountConsentAcknowledged(true);chrome.metricsPrivate.recordUserAction("NewTabPage.Carts.AcceptDiscountConsent")}onDiscountConsentDismissed_(){this.consentStatus_=ConsentStatus.DISMISSED;this.discountConsentVisible=false;ChromeCartProxy.getHandler().onDiscountConsentDismissed();chrome.metricsPrivate.recordUserAction("NewTabPage.Carts.DismissDiscountConsent")}async onDiscountConsentContinued_(){if(loadTimeData.getInteger("modulesCartDiscountConsentVariation")===DiscountConsentVariation.NATIVE_DIALOG){const{consentStatus:consentStatus}=await ChromeCartProxy.getHandler().showNativeConsentDialog();switch(consentStatus){case ConsentStatus.ACCEPTED:this.onDiscountConsentAccepted_();break;case ConsentStatus.DISMISSED:break;case ConsentStatus.REJECTED:this.onDiscountConsentRejected_();break;default:assertNotReached()}}else{ChromeCartProxy.getHandler().onDiscountConsentContinued()}}onConfirmDiscountConsentClick_(){this.$.confirmDiscountConsentToast.hide()}onCartItemContextMenuClick_(e){const index=e.model.index;ChromeCartProxy.getHandler().prepareForNavigation(this.cartItems[index].cartUrl,false)}onProductImageLoadError_(e){const index=this.$.cartItemRepeat.indexForElement(e.target);this.set("cartItems."+index+".productImageUrls",[])}}customElements.define(ChromeCartModuleElement.is,ChromeCartModuleElement);async function createCartElement(){const{consentVisible:consentVisible}=await ChromeCartProxy.getHandler().getDiscountConsentCardVisible();const{welcomeVisible:welcomeVisible}=await ChromeCartProxy.getHandler().getWarmWelcomeVisible();const{carts:carts}=await ChromeCartProxy.getHandler().getMerchantCarts();chrome.metricsPrivate.recordSmallCount("NewTabPage.Carts.CartCount",carts.length);if(carts.length===0){return null}let discountedCartCount=0;if(loadTimeData.getBoolean("ruleBasedDiscountEnabled")){if(consentVisible){recordOccurence("NewTabPage.Carts.DiscountConsentShow")}for(let i=0;i<carts.length;i++){const cart=carts[i];if(cart.discountText){discountedCartCount++;chrome.metricsPrivate.recordSmallCount("NewTabPage.Carts.DiscountAt",i)}}}chrome.metricsPrivate.recordSmallCount("NewTabPage.Carts.DiscountCountAtLoad",discountedCartCount);chrome.metricsPrivate.recordSmallCount("NewTabPage.Carts.NonDiscountCountAtLoad",carts.length-discountedCartCount);const element=new ChromeCartModuleElement;if(welcomeVisible){element.headerChipText=loadTimeData.getString("modulesNewTagLabel");element.headerDescriptionText=loadTimeData.getString("modulesCartWarmWelcome")}else{for(let i=0;i<carts.length;i++){const images=carts[i].productImageUrls;chrome.metricsPrivate.recordSmallCount("NewTabPage.Carts.CartImageCount",images===undefined?0:images.length)}}element.cartItems=carts;element.showDiscountConsent=consentVisible;element.discountConsentVisible=consentVisible;return element}const chromeCartDescriptor=new ModuleDescriptor("chrome_cart",createCartElement);
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrLazyRenderElement extends PolymerElement{constructor(){super(...arguments);this.child_=null;this.instance_=null}static get is(){return"cr-lazy-render"}static get template(){return html`<slot></slot>`}get(){if(!this.child_){this.render_()}assert(this.child_);return this.child_}getIfExists(){return this.child_}render_(){const template=this.shadowRoot.querySelector("slot").assignedNodes({flatten:true}).filter((n=>n.nodeType===Node.ELEMENT_NODE))[0];const TemplateClass=templatize(template,this,{mutableData:false,forwardHostProp:this._forwardHostPropV2});const parentNode=this.parentNode;if(parentNode&&!this.child_){this.instance_=new TemplateClass;this.child_=this.instance_.root.firstElementChild;parentNode.insertBefore(this.instance_.root,this)}}_forwardHostPropV2(prop,value){if(this.instance_){this.instance_.forwardHostProp(prop,value)}}}customElements.define(CrLazyRenderElement.is,CrLazyRenderElement);
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let handler$3=null;class DriveProxy{static getHandler(){return handler$3||(handler$3=DriveHandler.getRemote())}static setHandler(newHandler){handler$3=newHandler}constructor(){}}function getTemplate$o(){return html`<!--_html_template_start_--><style>:host{display:block;height:100%;width:100%}ntp-module-header{margin-bottom:8px}#files{display:flex;flex-direction:column;margin-bottom:7px}.file{box-sizing:border-box;color:var(--color-new-tab-page-primary-foreground);display:flex;flex-shrink:0;height:56px;outline:0;padding:8px 18px;text-decoration:none}.file:hover{background-color:var(--color-new-tab-page-control-background-hovered)}.file:active,:host-context(.focus-outline-visible) .file:focus{background-color:var(--color-new-tab-page-active-background)}.file-icon{height:19px;margin-inline-end:19px;margin-top:3px;object-fit:contain;width:19px}.file-info{display:flex;flex-direction:column;flex-grow:1;min-width:0}.file-description,.file-title{line-height:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.file-title{font-size:13px}.file-description{color:var(--color-new-tab-page-secondary-foreground);font-size:12px}</style>
<ntp-module-header dismiss-text="[[i18n('modulesDriveDismissButtonText')]]" disable-text="[[i18n('modulesDriveDisableButtonText')]]" more-actions-text="[[i18n('modulesDriveMoreActionsButtonText')]]" show-info-button on-info-button-click="onInfoButtonClick_" show-dismiss-button on-dismiss-button-click="onDismissButtonClick_" on-disable-button-click="onDisableButtonClick_" icon-src="icons/drive_logo.svg">
  De votre Google Drive
</ntp-module-header>
<div id="files">
  <template id="fileRepeat" is="dom-repeat" items="[[files]]">
    <a class="file" href="[[item.itemUrl.url]]" on-click="onFileClick_" on-auxclick="onFileClick_">
      <img is="cr-auto-img" class="file-icon" draggable="false" auto-src="[[getImageSrc_(item)]]">
      
      <div class="file-info">
        <div class="file-title">[[item.title]]</div>
        <div class="file-description">[[item.justificationText]]</div>
      </div>
    </a>
  </template>
</div>
<cr-lazy-render id="infoDialogRender">
  <template>
    <ntp-info-dialog inner-h-t-m-l="[[i18nAdvanced('modulesDriveInfo')]]">
    </ntp-info-dialog>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let DriveModuleElement$1=class DriveModuleElement extends(I18nMixin(PolymerElement)){static get is(){return"ntp-drive-module"}static get template(){return getTemplate$o()}static get properties(){return{files:Array}}onInfoButtonClick_(){this.$.infoDialogRender.get().showModal()}onDismissButtonClick_(){DriveProxy.getHandler().dismissModule();this.dispatchEvent(new CustomEvent("dismiss-module",{bubbles:true,composed:true,detail:{message:loadTimeData.getStringF("dismissModuleToastMessage",loadTimeData.getString("modulesDriveFilesSentence")),restoreCallback:()=>DriveProxy.getHandler().restoreModule()}}))}onDisableButtonClick_(){this.dispatchEvent(new CustomEvent("disable-module",{bubbles:true,composed:true,detail:{message:loadTimeData.getStringF("disableModuleToastMessage",loadTimeData.getString("modulesDriveSentence2"))}}))}getImageSrc_(file){return"https://drive-thirdparty.googleusercontent.com/32/type/"+file.mimeType}onFileClick_(e){this.dispatchEvent(new Event("usage",{bubbles:true,composed:true}));const index=e.model.index;chrome.metricsPrivate.recordSmallCount("NewTabPage.Drive.FileClick",index)}};customElements.define(DriveModuleElement$1.is,DriveModuleElement$1);async function createDriveElement$1(){const{files:files}=await DriveProxy.getHandler().getFiles();if(files.length===0){return null}const element=new DriveModuleElement$1;element.files=files;return element}const driveDescriptor$1=new ModuleDescriptor("drive",createDriveElement$1);
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let handler$2=null;class FeedProxy{static getHandler(){return handler$2||(handler$2=FeedHandler.getRemote())}static setHandler(newHandler){handler$2=newHandler}constructor(){}}function getTemplate$n(){return html`<!--_html_template_start_--><style>:host{display:flex;flex-direction:column;height:100%;width:100%}#articles{display:block;margin:16px}a{text-decoration:none}.card{display:flex;flex-direction:row}.left-text{display:flex;flex-direction:column;flex-grow:3}.title{color:var(--color-new-tab-page-primary-foreground);font-size:14px;margin-bottom:14px}.info{color:var(--color-new-tab-page-secondary-foreground);display:inline}.favicon{display:inline;float:left;margin-inline-end:1em;max-height:14px}.info-text{font-size:12px}.thumbnail{aspect-ratio:1.33;border-radius:12px;margin-inline-start:1em;object-fit:cover;width:25%}.card-divider{margin:16px 0 16px 0}.card-divider:last-of-type{display:none}</style>
<ntp-module-header icon-src="modules/feed/icons/plus.svg">
  Suivi
</ntp-module-header>
<div id="articles">
  <template id="articleRepeat" is="dom-repeat" items="[[articles]]">
    <a class="card" href="[[item.url.url]]" on-click="onArticleClick_" on-auxclick="onArticleClick_">
      <div class="left-text">
        <div class="title" dir="auto">[[item.title]]</div>
        <div class="info">
          <img is="cr-auto-img" class="favicon" auto-src="[[item.faviconUrl.url]]" draggable="false">
          <div class="info-text">[[item.publisher]]</div>
        </div>
      </div>
      <img is="cr-auto-img" class="thumbnail" auto-src="[[item.thumbnailUrl.url]]" draggable="false">
    </a>
    <hr class="card-divider">
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class FeedModuleElement extends(I18nMixin(PolymerElement)){static get is(){return"feed-ntp-module"}static get properties(){return{articles:Array}}onArticleClick_(_){FeedProxy.getHandler().articleOpened()}static get template(){return getTemplate$n()}}customElements.define(FeedModuleElement.is,FeedModuleElement);async function createFeedElement(){const{articles:articles}=await FeedProxy.getHandler().getFollowingFeedArticles();const element=new FeedModuleElement;element.articles=articles;return element}const feedDescriptor=new ModuleDescriptor("feed",createFeedElement);
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let HistoryClustersProxyImpl$1=class HistoryClustersProxyImpl{constructor(handler){this.handler=handler}static getInstance(){if(instance$6){return instance$6}const handler=PageHandler.getRemote();return instance$6=new HistoryClustersProxyImpl(handler)}static setInstance(obj){instance$6=obj}};let instance$6=null;const template$3=html`
<style>
html{--annotation-background-color:var(--google-green-50);--annotation-text-color:var(--google-green-600);--border-color:var(--google-grey-300);--entity-image-background-color:var(--google-grey-50);--icon-color:var(--google-grey-600);--url-color:var(--google-blue-600);--side-panel-url-color:var(--google-grey-700)}@media (prefers-color-scheme:dark){html{--annotation-background-color:var(--google-green-300);--annotation-text-color:var(--google-grey-900);--border-color:var(--google-grey-700);--entity-image-background-color:var(--google-grey-800);--icon-color:white;--url-color:var(--google-blue-300);--side-panel-url-color:var(--google-grey-500)}}html{--card-max-width:960px;--card-min-width:550px;--card-padding-between:16px;--card-padding-side:24px;--first-card-padding-top:24px;--cluster-max-width:var(--card-max-width);--cluster-min-width:var(--card-min-width);--cluster-padding-horizontal:var(--card-padding-side);--cluster-padding-vertical:var(--card-padding-between);--favicon-margin:16px;--favicon-size:16px;--first-cluster-padding-top:var(--first-card-padding-top);--pill-height:34px;--pill-padding-icon:12px;--pill-padding-text:16px;--top-visit-favicon-size:24px}
</style>
`;document.head.appendChild(template$3.content);const styleMod=document.createElement("dom-module");styleMod.appendChild(html`
  <template>
    <style include="cr-shared-style cr-hidden-style">
.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pill{border:1px solid var(--border-color);border-radius:calc(var(--pill-height)/ 2);box-sizing:border-box;font-size:.875rem;height:var(--pill-height);line-height:1.5}:host-context([chrome-refresh-2023]) .pill{font-size:.75rem}.pill-icon-start{padding-inline-end:var(--pill-padding-text);padding-inline-start:var(--pill-padding-icon)}.pill-icon-start .icon{margin-inline-end:8px}:host-context([chrome-refresh-2023]) .pill-icon-start .icon{margin-inline-end:4px}.pill-icon-end{padding-inline-end:var(--pill-padding-icon);padding-inline-start:var(--pill-padding-text)}.pill-icon-end .icon{margin-inline-start:8px}.search-highlight-hit{--search-highlight-hit-background-color:none;--search-highlight-hit-color:none;font-weight:700}.timestamp-and-menu{align-items:center;display:flex;flex-shrink:0}.timestamp{color:var(--cr-secondary-text-color);flex-shrink:0}
    </style>
  </template>
`.content);styleMod.register("history-clusters-shared-style");function getTemplate$m(){return html`<!--_html_template_start_--><style include="history-clusters-shared-style">#content{display:flex;flex-direction:column;height:100%;width:100%}a:active,a:hover,a:link,a:visited{text-decoration:none}:focus-visible,:host-context(.focus-outline-visible) :focus{box-shadow:var(--ntp-focus-shadow);outline:0}.related-search{background:var(--color-new-tab-page-history-clusters-module-item-background);display:flex;flex-direction:row;height:100%;margin-bottom:4px;width:100%}.related-search:first-child{border-radius:var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius) 0 0}.related-search:last-of-type{border-radius:0 0 var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius);margin-bottom:0}.icon{-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:20px;background-color:var(--color-new-tab-page-secondary-foreground);background-position:center center;background-repeat:no-repeat;background-size:20px;height:20px;margin:auto 16px;width:20px}.title{color:var(--color-new-tab-page-primary-foreground);font-size:var(--ntp-module-text-size);margin:auto 0;max-width:284px}@media (forced-colors:active){:host-context(.focus-outline-visible) a:focus{outline:var(--cr-focus-outline-hcm)}a{outline:var(--cr-border-hcm)}.icon{background-color:LinkText}}</style>
<div id="content">
  <template is="dom-repeat" items="[[relatedSearches]]" filter="[[filterRelatedSearches_]]">
    <a class="related-search" href="[[computeSearchUrl_(item.query)]]" aria-label$="[[i18n('modulesJourneysSearchSuggAcc', item.query)]]">
      <div class="icon" style="-webkit-mask-image:url(//resources/images/icon_search.svg)"></div>
      <div class="title truncate">[[item.query]]</div>
    </a>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let SuggestTileModuleElement$1=class SuggestTileModuleElement extends(I18nMixin(PolymerElement)){static get is(){return"ntp-history-clusters-suggest-tile"}static get template(){return getTemplate$m()}static get properties(){return{relatedSearches:{type:Object},searchUrl_:{type:Object,computed:`computeSearchUrl_(query)`}}}computeSearchUrl_(query){return`https://www.google.com/search?q=${encodeURIComponent(query)}`}filterRelatedSearches_(item,index){return item&&index<3}};customElements.define(SuggestTileModuleElement$1.is,SuggestTileModuleElement$1);function getTemplate$l(){return html`<!--_html_template_start_--><style>:host{width:100%;--gap-size:12px}#showAllButton:focus-visible,:host-context(.focus-outline-visible) #showAllButton:focus{box-shadow:var(--ntp-focus-shadow);outline:0}:host([overflow-scroll_]) #content{overflow-x:auto}:host([overflow-scroll_]) .layout{padding-top:2px;width:734px}#showAllButton{background-color:var(--color-new-tab-page-module-background);border:none;color:var(--color-new-tab-page-link);cursor:pointer;font-size:var(--ntp-module-text-size)}.small-tiles{display:flex;flex-direction:row;gap:var(--gap-size);grid-column:2/3;grid-row:1/2}.layout{display:grid;grid-gap:var(--gap-size) var(--gap-size);grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr));padding:0 16px 16px}.main-tile{grid-column:1/2;grid-row:1/3}.secondary-tile{grid-column:2/3;grid-row:1/2}.related-searches-tile{grid-column:2/3;grid-row:2/3}@media (forced-colors:active){#showAllButton:focus-visible,:host-context(.focus-outline-visible) #showAllButton:focus{outline:var(--cr-focus-outline-hcm)}}@media (max-width:803px){:host(:not([overflow-scroll_])) .related-searches-tile,:host(:not([overflow-scroll_])) .secondary-tile,:host(:not([overflow-scroll_])) .small-tiles{display:none}:host(:not([overflow-scroll_])) .layout{display:block}:host(:not([overflow-scroll_])) .main-tile{min-height:100%}}#layout3 .main-tile{display:flex;flex-direction:column;gap:var(--gap-size)}</style>
<ntp-module-header disable-text="[[i18nRecursive('',
                                'modulesDisableButtonText',
                                'modulesJourneyDisable')]]" dismiss-text="[[i18n('modulesDismissButtonText', cluster.label)]]" more-actions-text="[[i18n('modulesMoreActions', cluster.label)]]" show-info-button show-dismiss-button on-disable-button-click="onDisableButtonClick_" on-dismiss-button-click="onDismissButtonClick_" on-info-button-click="onInfoButtonClick_" icon-src="chrome://resources/images/icon_journeys.svg">
  [[i18n('modulesHistoryResumeBrowsingForTitle', cluster.label)]]
  <button id="showAllButton" type="button" on-click="onShowAllClick_" slot="title-actions" aria-label$="[[i18n('modulesJourneysShowAllAcc', cluster.label)]]">
    [[i18n('modulesJourneysShowAll')]]
  </button>
  <button id="openAllInTabGroupButton" class="dropdown-item" on-click="onOpenAllInTabGroupClick_" slot="action-menu-items" type="button">
    [[i18n('modulesJourneysOpenAllInNewTabGroupButtonText')]]
  </button>
</ntp-module-header>
<div id="content">
  <template is="dom-if" if="[[isLayout_(1, layoutType)]]" restamp>
    <div id="layout1" class="layout">
      <ntp-history-clusters-tile class="main-tile" large-format visit="[[cluster.visits.0]]" discount="[[discounts.0]]" on-click="onVisitTileClick_" on-aux-click="onVisitTileClick_">
      </ntp-history-clusters-tile>
      <template is="dom-if" if="[[shouldShowCartTile_(cart)]]" restamp>
        <ntp-history-clusters-cart-tile id="cartTile" cart="[[cart]]" class="secondary-tile" on-click="onCartTileClick_" on-aux-click="onCartTileClick_">
        </ntp-history-clusters-cart-tile>
      </template>
      <template is="dom-if" if="[[!shouldShowCartTile_(cart)]]" restamp>
        <ntp-history-clusters-tile class="secondary-tile" medium-format visit="[[cluster.visits.1]]" discount="[[discounts.1]]" on-click="onVisitTileClick_" on-aux-click="onVisitTileClick_">
        </ntp-history-clusters-tile>
      </template>
      <ntp-history-clusters-suggest-tile class="related-searches-tile" related-searches="[[cluster.relatedSearches]]" on-click="onSuggestTileClick_" on-aux-click="onSuggestTileClick_">
      </ntp-history-clusters-suggest-tile>
    </div>
  </template>
  <template is="dom-if" if="[[isLayout_(2, layoutType)]]" restamp>
    <div id="layout2" class="layout">
      <ntp-history-clusters-tile class="main-tile" large-format visit="[[cluster.visits.0]]" discount="[[discounts.0]]" on-click="onVisitTileClick_" on-aux-click="onVisitTileClick_">
      </ntp-history-clusters-tile>
      <template is="dom-if" if="[[shouldShowCartTile_(cart)]]" restamp>
        <ntp-history-clusters-cart-tile id="cartTile" cart="[[cart]]" class="secondary-tile" on-click="onCartTileClick_" on-aux-click="onCartTileClick_">
        </ntp-history-clusters-cart-tile>
      </template>
      <template is="dom-if" if="[[!shouldShowCartTile_(cart)]]" restamp>
        <div class="small-tiles">
          <ntp-history-clusters-tile small-format visit="[[cluster.visits.1]]" discount="[[discounts.1]]" on-click="onVisitTileClick_" on-aux-click="onVisitTileClick_">
          </ntp-history-clusters-tile>
          <ntp-history-clusters-tile small-format visit="[[cluster.visits.2]]" discount="[[discounts.2]]" on-click="onVisitTileClick_" on-aux-click="onVisitTileClick_">
          </ntp-history-clusters-tile>
        </div>
      </template>
      <ntp-history-clusters-suggest-tile class="related-searches-tile" related-searches="[[cluster.relatedSearches]]" on-click="onSuggestTileClick_" on-aux-click="onSuggestTileClick_">
      </ntp-history-clusters-suggest-tile>
    </div>
  </template>
  <template is="dom-if" if="[[isLayout_(3, layoutType)]]" restamp>
    <div id="layout3" class="layout">
      <div class="main-tile">
        <ntp-history-clusters-tile medium-format visit="[[cluster.visits.0]]" discount="[[discounts.0]]" on-click="onVisitTileClick_" on-aux-click="onVisitTileClick_">
        </ntp-history-clusters-tile>
        <ntp-history-clusters-tile medium-format visit="[[cluster.visits.1]]" discount="[[discounts.1]]" on-click="onVisitTileClick_" on-aux-click="onVisitTileClick_">
        </ntp-history-clusters-tile>
      </div>
      <template is="dom-if" if="[[shouldShowCartTile_(cart)]]" restamp>
        <ntp-history-clusters-cart-tile id="cartTile" cart="[[cart]]" class="secondary-tile" on-click="onCartTileClick_" on-aux-click="onCartTileClick_">
        </ntp-history-clusters-cart-tile>
      </template>
      <template is="dom-if" if="[[!shouldShowCartTile_(cart)]]" restamp>
        <div class="small-tiles">
          <ntp-history-clusters-tile small-format visit="[[cluster.visits.2]]" discount="[[discounts.2]]" on-click="onVisitTileClick_" on-aux-click="onVisitTileClick_">
          </ntp-history-clusters-tile>
          <ntp-history-clusters-tile small-format visit="[[cluster.visits.3]]" discount="[[discounts.3]]" on-click="onVisitTileClick_" on-aux-click="onVisitTileClick_">
          </ntp-history-clusters-tile>
        </div>
      </template>
      <ntp-history-clusters-suggest-tile class="related-searches-tile" related-searches="[[cluster.relatedSearches]]" on-click="onSuggestTileClick_" on-aux-click="onSuggestTileClick_">
      </ntp-history-clusters-suggest-tile>
    </div>
  </template>
</div>
<cr-lazy-render id="infoDialogRender">
  <template>
    <ntp-info-dialog inner-h-t-m-l="[[getInfo_(discounts)]]">
    </ntp-info-dialog>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const LAYOUT_1_MIN_IMAGE_VISITS=2;const LAYOUT_1_MIN_VISITS=2;const LAYOUT_2_MIN_IMAGE_VISITS=1;const LAYOUT_2_MIN_VISITS=3;const LAYOUT_3_MIN_IMAGE_VISITS=2;const LAYOUT_3_MIN_VISITS=4;var HistoryClusterElementType;(function(HistoryClusterElementType){HistoryClusterElementType[HistoryClusterElementType["VISIT"]=0]="VISIT";HistoryClusterElementType[HistoryClusterElementType["SUGGEST"]=1]="SUGGEST";HistoryClusterElementType[HistoryClusterElementType["SHOW_ALL"]=2]="SHOW_ALL";HistoryClusterElementType[HistoryClusterElementType["CART"]=3]="CART";HistoryClusterElementType[HistoryClusterElementType["OPEN_ALL"]=4]="OPEN_ALL"})(HistoryClusterElementType||(HistoryClusterElementType={}));var HistoryClusterImageDisplayState$1;(function(HistoryClusterImageDisplayState){HistoryClusterImageDisplayState[HistoryClusterImageDisplayState["NONE"]=0]="NONE";HistoryClusterImageDisplayState[HistoryClusterImageDisplayState["SOME"]=1]="SOME";HistoryClusterImageDisplayState[HistoryClusterImageDisplayState["ALL"]=2]="ALL"})(HistoryClusterImageDisplayState$1||(HistoryClusterImageDisplayState$1={}));let HistoryClustersModuleElement$1=class HistoryClustersModuleElement extends(I18nMixin(PolymerElement)){constructor(){super(...arguments);this.setDisabledModulesListenerId_=null}static get is(){return"ntp-history-clusters"}static get template(){return getTemplate$l()}static get properties(){return{layoutType:Number,cluster:Object,cart:{type:Object,value:null},discounts:{type:Array,value:[]},searchResultPage:Object,overflowScroll_:{type:Boolean,value:()=>loadTimeData.getBoolean("modulesOverflowScrollbarEnabled"),reflectToAttribute:true}}}ready(){super.ready();HistoryClustersProxyImpl$1.getInstance().handler.recordLayoutTypeShown(this.layoutType,this.cluster.id);listenOnce(window,"pagehide",(()=>{const visitTiles=Array.from(this.shadowRoot.querySelectorAll("ntp-history-clusters-tile"));const count=visitTiles.reduce(((acc,tile)=>acc+(tile.hasImageUrl()?1:0)),0);const state=visitTiles.length===count?HistoryClusterImageDisplayState$1.ALL:count===0?HistoryClusterImageDisplayState$1.NONE:HistoryClusterImageDisplayState$1.SOME;chrome.metricsPrivate.recordEnumerationValue(`NewTabPage.HistoryClusters.Layout${this.layoutType}.ImageDisplayState`,state,Object.keys(HistoryClusterImageDisplayState$1).length)}))}connectedCallback(){super.connectedCallback();if(loadTimeData.getBoolean("modulesChromeCartInHistoryClustersModuleEnabled")){this.setDisabledModulesListenerId_=NewTabPageProxy.getInstance().callbackRouter.setDisabledModules.addListener((async(_,ids)=>{if(ids.includes("chrome_cart")){this.cart=null}else if(!this.cart){const{cart:cart}=await HistoryClustersProxyImpl$1.getInstance().handler.getCartForCluster(this.cluster);this.cart=cart}}))}}disconnectedCallback(){super.disconnectedCallback();if(this.setDisabledModulesListenerId_){NewTabPageProxy.getInstance().callbackRouter.removeListener(this.setDisabledModulesListenerId_)}}isLayout_(type){return type===this.layoutType}onVisitTileClick_(e){this.recordTileClickIndex_(e.target,"Visit");this.recordClick_(HistoryClusterElementType.VISIT);this.maybeRecordDiscountClick_(e.target)}onSuggestTileClick_(e){this.recordTileClickIndex_(e.target,"Suggest");this.recordClick_(HistoryClusterElementType.SUGGEST)}onCartTileClick_(){this.recordClick_(HistoryClusterElementType.CART)}recordClick_(type){chrome.metricsPrivate.recordEnumerationValue(`NewTabPage.HistoryClusters.Layout${this.layoutType}.Click`,type,Object.keys(HistoryClusterElementType).length);HistoryClustersProxyImpl$1.getInstance().handler.recordClick(this.cluster.id);this.dispatchEvent(new Event("usage",{bubbles:true,composed:true}))}recordTileClickIndex_(tile,tileType){assert(this.layoutType!==LayoutType.kNone);const index=Array.from(tile.parentNode.children).indexOf(tile);chrome.metricsPrivate.recordValue({metricName:`NewTabPage.HistoryClusters.Layout${this.layoutType}.${tileType}Tile.ClickIndex`,type:chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,min:0,max:10,buckets:10},index)}maybeRecordDiscountClick_(tile){if(tile.hasDiscount){chrome.metricsPrivate.recordUserAction(`NewTabPage.HistoryClusters.DiscountClicked`)}}onDisableButtonClick_(){HistoryClustersProxyImpl$1.getInstance().handler.recordDisabled(this.cluster.id);const disableEvent=new CustomEvent("disable-module",{composed:true,detail:{message:loadTimeData.getStringF("modulesDisableToastMessage",loadTimeData.getString("modulesThisTypeOfCardText"))}});this.dispatchEvent(disableEvent)}onDismissButtonClick_(){HistoryClustersProxyImpl$1.getInstance().handler.dismissCluster([this.searchResultPage,...this.cluster.visits],this.cluster.id);this.dispatchEvent(new CustomEvent("dismiss-module",{bubbles:true,composed:true,detail:{message:loadTimeData.getStringF("dismissModuleToastMessage",this.cluster.label)}}))}onInfoButtonClick_(){this.$.infoDialogRender.get().showModal()}onShowAllClick_(){assert(this.cluster.label.length>=2);HistoryClustersProxyImpl$1.getInstance().handler.showJourneysSidePanel(this.cluster.label.substring(1,this.cluster.label.length-1));this.recordClick_(HistoryClusterElementType.SHOW_ALL)}onOpenAllInTabGroupClick_(){const urls=[this.searchResultPage,...this.cluster.visits].map((visit=>visit.normalizedUrl));HistoryClustersProxyImpl$1.getInstance().handler.openUrlsInTabGroup(urls,this.cluster.tabGroupName??null);this.recordClick_(HistoryClusterElementType.OPEN_ALL)}shouldShowCartTile_(cart){return loadTimeData.getBoolean("modulesChromeCartInHistoryClustersModuleEnabled")&&!!cart}getInfo_(discounts){const hasDiscount=discounts.some((discount=>!!discount));return this.i18nAdvanced(hasDiscount?"modulesHistoryWithDiscountInfo":"modulesJourneysInfo")}};customElements.define(HistoryClustersModuleElement$1.is,HistoryClustersModuleElement$1);function recordSelectedLayout(option){chrome.metricsPrivate.recordEnumerationValue("NewTabPage.HistoryClusters.DisplayLayout",option,Object.keys(LayoutType).length)}function processLayoutVisits(visits,numVisits,numImageVisits){const nVisitsWithImagesIndices=visits.reduce(((acc,visit,index)=>{if(acc.length<numImageVisits&&visit.hasUrlKeyedImage){acc.unshift(index)}return acc}),[]);const nVisitsWithImages=[];nVisitsWithImagesIndices.forEach((visitWithImageIndex=>{nVisitsWithImages.unshift(visits.splice(visitWithImageIndex,1)[0])}));visits.unshift(...nVisitsWithImages);visits.splice(numVisits,visits.length-numVisits)}async function createElement$2(){const{clusters:clusters}=await HistoryClustersProxyImpl$1.getInstance().handler.getClusters();if(clusters.length===0){recordSelectedLayout(LayoutType.kNone);return null}const element=new HistoryClustersModuleElement$1;element.cluster=clusters[0];if(loadTimeData.getBoolean("modulesChromeCartInHistoryClustersModuleEnabled")){const{cart:cart}=await HistoryClustersProxyImpl$1.getInstance().handler.getCartForCluster(clusters[0]);element.cart=cart}element.searchResultPage=clusters[0].visits.shift();const imageCount=element.cluster.visits.filter((visit=>visit.hasUrlKeyedImage&&visit.isKnownToSync)).length;const visitCount=element.cluster.visits.length;element.discounts=[];const{discounts:discounts}=await HistoryClustersProxyImpl$1.getInstance().handler.getDiscountsForCluster(clusters[0]);for(const visit of clusters[0].visits){let discountInValue="";for(const[url,urlDiscounts]of discounts){if(url.url===visit.normalizedUrl.url&&urlDiscounts.length>0){discountInValue=urlDiscounts[0].valueInText;visit.normalizedUrl.url=urlDiscounts[0].annotatedVisitUrl.url}}element.discounts.push(discountInValue)}const hasDiscount=element.discounts.some((discount=>discount.length>0));chrome.metricsPrivate.recordBoolean(`NewTabPage.HistoryClusters.HasDiscount`,hasDiscount);if(imageCount>=LAYOUT_3_MIN_IMAGE_VISITS){if(visitCount>=LAYOUT_3_MIN_VISITS){element.layoutType=LayoutType.kLayout3;processLayoutVisits(element.cluster.visits,LAYOUT_3_MIN_VISITS,LAYOUT_3_MIN_IMAGE_VISITS)}else{element.layoutType=LayoutType.kLayout1;processLayoutVisits(element.cluster.visits,LAYOUT_1_MIN_VISITS,LAYOUT_1_MIN_IMAGE_VISITS)}}else if(imageCount===LAYOUT_2_MIN_IMAGE_VISITS&&visitCount>=LAYOUT_2_MIN_VISITS){element.layoutType=LayoutType.kLayout2;processLayoutVisits(element.cluster.visits,LAYOUT_2_MIN_VISITS,LAYOUT_2_MIN_IMAGE_VISITS)}else{recordSelectedLayout(LayoutType.kNone);return null}recordSelectedLayout(element.layoutType);return element}const historyClustersDescriptor$1=new ModuleDescriptor("history_clusters",createElement$2);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance$5=null;class ModuleRegistry{static getInstance(){return instance$5||(instance$5=new ModuleRegistry(descriptors))}static setInstance(newInstance){instance$5=newInstance}constructor(descriptors){this.descriptors_=descriptors}async initializeModules(timeout){const modulesIdNames=(await NewTabPageProxy.getInstance().handler.getModulesIdNames()).data;return this.initializeModulesHavingIds(modulesIdNames.map((m=>m.id)),timeout)}async initializeModulesHavingIds(modulesIds,timeout){const disabledIds=await new Promise(((resolve,_)=>{const callbackRouter=NewTabPageProxy.getInstance().callbackRouter;const listenerId=callbackRouter.setDisabledModules.addListener(((all,ids)=>{callbackRouter.removeListener(listenerId);resolve(all?this.descriptors_.map((({id:id})=>id)):ids)}));NewTabPageProxy.getInstance().handler.updateDisabledModules()}));const descriptorsMap=new Map(this.descriptors_.map((d=>[d.id,d])));const descriptors=modulesIds.filter((id=>!disabledIds.includes(id))).map((id=>descriptorsMap.get(id)));const orderedIds=(await NewTabPageProxy.getInstance().handler.getModulesOrder()).moduleIds;if(orderedIds.length>0){descriptors.sort(((a,b)=>{const aHasOrder=orderedIds.includes(a.id);const bHasOrder=orderedIds.includes(b.id);if(aHasOrder&&bHasOrder){return orderedIds.indexOf(a.id)-orderedIds.indexOf(b.id)}if(!aHasOrder&&bHasOrder){return 1}if(aHasOrder&&!bHasOrder){return-1}return 0}))}const elements=await Promise.all(descriptors.map((d=>d.initialize(timeout))));return elements.map(((e,i)=>({elements:e,descriptor:descriptors[i]}))).filter((m=>!!m.elements)).map((m=>({elements:Array.isArray(m.elements)?m.elements:[m.elements],descriptor:m.descriptor}))).filter((m=>m.elements.length!==0))}}function getTemplate$k(){return html`<!--_html_template_start_--><style>:host{--memory-background-color:var(--google-grey-200);--memory-title-color:rgb(255, 255, 255);--shape-blue-color:var(--google-blue-500);--shape-green-color:var(--google-green-500);--shape-yellow-color:var(--google-yellow-500);--memory-shadow:0 1px 2px rgba(60, 64, 67, 0.3),0 2px 6px 2px rgba(60, 64, 67, 0.15)}@media (prefers-color-scheme:dark){:host{--memory-background-color:var(--google-grey-800);--shape-blue-color:var(--google-blue-400);--shape-green-color:var(--google-green-400);--shape-yellow-color:var(--google-yellow-400);--memory-shadow:0px 2px 6px 2px rgba(0, 0, 0, 0.15),0px 1px 2px rgba(0, 0, 0, 0.3)}}:host{display:block;height:100%;width:100%;z-index:0}ntp-module-header{margin-bottom:8px}#memories{display:flex;flex:1;flex-direction:row;flex-wrap:wrap;height:164px;overflow:hidden;padding:16px;padding-inline-end:4px}:host([show-opt-in-screen]) #memories{height:190px;overflow:initial;padding:0}.card{border-radius:8px;height:164px;overflow:hidden;position:relative}#memories>.card{border-radius:8px;display:flex;flex-basis:0;flex-grow:1;flex-shrink:1;margin-bottom:16px;margin-inline-end:12px;max-width:258px;min-width:123px}.memory{background:var(--memory-background-color);box-shadow:var(--memory-shadow)}.memory:not(.no-title)::before{background:linear-gradient(180deg,rgba(0,0,0,0) 47.92%,#000 100%);bottom:0;content:' ';left:0;opacity:.54;position:absolute;right:0;top:0;z-index:1}.memory-title{align-items:flex-end;bottom:0;color:var(--memory-title-color);display:flex;font-size:16px;left:0;letter-spacing:.1px;line-height:24px;margin:5px 12px;position:absolute;right:0;top:0;z-index:2}.memory-img{min-height:100%;min-width:100%;object-fit:cover;pointer-events:none;position:relative}#exploreCard{align-items:center;border:1px solid var(--color-new-tab-page-border);box-sizing:border-box;flex-direction:column;justify-content:center;text-decoration:none}#exploreIconContainer{align-content:center;background:var(--color-new-tab-page-module-icon-container-background);border-radius:4px;display:grid;height:24px;justify-content:center;width:24px}#exploreIcon{-webkit-mask-image:url(modules/photos/icons/explore_icon.svg);-webkit-mask-repeat:no-repeat;-webkit-mask-size:100%;background:var(--color-new-tab-page-selected-border);height:16px;width:16px}#exploreText{color:var(--color-new-tab-page-primary-foreground);font-size:14px;font-weight:500;line-height:20px;margin:8px 32px;text-align:center}#optInCard{display:flex;flex:1;flex-direction:row;flex-wrap:nowrap}#optInContent{display:flex;flex-direction:column;justify-content:space-between;margin:16px;max-width:288px}#optInTitleText{color:var(--color-new-tab-page-primary-foreground);font-size:22px;font-weight:400;line-height:26px;margin:8px 0}#optInTitleDesc{color:var(--color-new-tab-page-secondary-foreground);font-size:12px;line-height:20px}#optInButton{margin-inline-end:8px}#girlIllustration{background-position:center;background-repeat:no-repeat;background-size:cover;height:152px;left:12px;position:absolute;top:42px;width:114px}#girlTitle{bottom:3.29%;color:#fff;font-size:14px;font-style:normal;font-weight:700;left:8.77%;letter-spacing:.1px;line-height:20px;position:absolute;right:3.51%;top:83.55%}#baloonTitle{bottom:3.29%;color:#fff;font-size:14px;font-style:normal;font-weight:700;left:8.77%;letter-spacing:.1px;line-height:20px;position:absolute;right:3.51%;top:83.55%}#baloonIllustration{background-position:center;background-repeat:no-repeat;background-size:cover;height:152px;left:138px;position:absolute;top:42px;width:114px}#birthdayBoy,#lake{height:160px;position:absolute;right:96px;top:24px;width:120px}#birthdayBoyTitle,#lakeTitle{color:#fff;font-size:14px;font-style:normal;font-weight:700;height:20px;letter-spacing:.1px;line-height:20px;position:absolute;right:29px;top:133px;width:79px}#dog,#smallBirthdayBoy{height:120px;position:absolute;right:-10px;top:100px;width:90px}#photosLogo{height:64px;left:160px;position:absolute;top:16px;width:64px}#yellowSemiCircle{height:40px;left:8px;position:absolute;top:200px;width:40px}#blueQuarterCircle{height:88px;left:100px;position:absolute;top:200px;width:88px}#yellowShape{-webkit-mask-image:url(modules/photos/icons/shape_1.svg);-webkit-mask-repeat:no-repeat;-webkit-mask-size:100%;background:var(--shape-yellow-color);height:40px;left:0;position:absolute;top:16px;width:20px}:host-context([dir=rtl]) #yellowShape{left:auto;right:0;transform:scaleX(-1)}#blueShape{-webkit-mask-image:url(modules/photos/icons/shape_2.svg);-webkit-mask-repeat:no-repeat;-webkit-mask-size:100%;background:var(--shape-blue-color);height:29px;left:110px;position:absolute;top:0;width:80px}:host-context([dir=rtl]) #blueShape{left:auto;right:104px}#greenShape{-webkit-mask-image:url(modules/photos/icons/shape_3.svg);-webkit-mask-repeat:no-repeat;-webkit-mask-size:100%;background:var(--shape-green-color);bottom:0;height:26px;left:108px;position:absolute;width:40px}:host-context([dir=rtl]) #greenShape{left:auto;right:108px;transform:scaleX(-1)}#memoryMain{background:url(modules/photos/images/main_example_2x.webp);background-position:center;background-repeat:no-repeat;background-size:cover;height:160px;left:40px;position:absolute;top:38px;width:120px}:host-context([dir=rtl]) #memoryMain{left:auto;right:40px}#memorySecond{background:url(modules/photos/images/second_example_2x.webp);background-position:center;background-repeat:no-repeat;background-size:cover;height:132px;left:176px;position:absolute;top:126px;width:99px}:host-context([dir=rtl]) #memorySecond{left:auto;right:176px}#memoryThird{background:url(modules/photos/images/third_example_2x.webp);background-position:center;background-repeat:no-repeat;background-size:cover;height:100px;left:192px;position:absolute;top:10px;width:75px}:host-context([dir=rtl]) #memoryThird{left:auto;right:192px}.opt-in-artwork{display:flex;flex-grow:1;flex-shrink:1;height:236px;margin-top:-46px;max-width:240px;overflow:hidden;position:relative;right:0;z-index:-1}ntp-info-dialog a{color:var(--cr-link-color);cursor:pointer}ntp-info-dialog a:focus{border-radius:2px;box-shadow:var(--ntp-focus-shadow);outline:0}</style>
<ntp-module-header chip-text="[[headerChipText_]]" hide-menu-button="[[hideMenuButton]]" show-info-button="[[!showOptInScreen]]" on-info-button-click="onInfoButtonClick_" show-dismiss-button="[[!showSoftOptOutButton]]" on-dismiss-button-click="onDismissButtonClick_" dismiss-text="[[i18nRecursive('',
                                  'modulesDismissButtonText',
                                  'modulesPhotosMemoriesHideToday')]]" on-disable-button-click="onDisableButtonClick_" disable-text="[[i18nRecursive('',
                                  'modulesDisableButtonText',
                                  'modulesPhotosMemoriesDisable')]]" more-actions-text="[[i18nRecursive('',
                                       'modulesMoreActions',
                                       'modulesPhotosTitle')]]">
  Photos de Google Photos
</ntp-module-header>
<div id="memories">
  <template id="welcomeCardElement" is="dom-if" if="[[showOptInScreen]]">
    <div id="optInCard">
      <div id="optInContent">
        <div>
          <h1 id="optInTitleText">
            [[optInTitleText]]
          </h1>
          <span id="optInTitleDesc">
            Commencez à regarder vos souvenirs Google Photos dès que vous êtes connecté.
          </span>
        </div>
        <div>
          <cr-button id="optInButton" class="action-button" on-click="onOptInClick_">
            Voir vos souvenirs
          </cr-button>
          <cr-button id="optOutButton" on-click="onOptOutClick_" hidden="[[showSoftOptOutButton]]">
            Non, merci
          </cr-button>
          <cr-button id="softOptOutButton" on-click="onSoftOptOutClick_" hidden="[[!showSoftOptOutButton]]">
              Me demander plus tard
          </cr-button>
        </div>
      </div>

      <template is="dom-if" if="[[showDefaultOptInscreen()]]">
        <div id="defaultOpInArtWork" , class="opt-in-artwork">
          <div id="yellowShape"></div>
          <div id="blueShape"></div>
          <div id="greenShape"></div>
          <div id="memoryMain" class="memory card">
            <div class="memory-title" dir="auto">
              Il y a 2 ans
            </div>
          </div>
          <div id="memorySecond" class="memory card no-title"></div>
          <div id="memoryThird" class="memory card no-title"></div>
        </div>
      </template>
      <template is="dom-if" if="[[showCustomArtWork_]]">
        <div id="customArtWork" class="opt-in-artwork">
          <img src="[[customArtworkUrl_]]">
        </div>
      </template>
      <template is="dom-if" if="[[showSplitSvgCustomArtWork_]]">
        <template is="dom-if" if="[[isEqual(customArtworkIndex_, '1')]]">
        <div id="boyDogcustomArtWork" class="opt-in-artwork">
          <div id="birthdayBoy">
            <img src="modules/photos/images/birthday_boy.png">
            <div id="birthdayBoyTitle">
              Il y a 2 ans
            </div>
          </div>
          <div id="dog">
            <img src="modules/photos/images/dog.png">
          </div>
          <div id="photosLogo">
            <img src="modules/photos/images/photos_logo.png">
          </div>
          <div id="yellowSemiCircle">
            <img src="modules/photos/images/yellow_semi_circle.png">
          </div>
          <div id="blueQuarterCircle">
            <img src="modules/photos/images/blue_quarter_circle.png">
          </div>
        </div>
        </template>
        <template is="dom-if" if="[[isEqual(customArtworkIndex_, '2')]]">
        <div id="lakeBoycustomArtWork" class="opt-in-artwork">
          <div id="lake">
            <img src="modules/photos/images/lake.png">
            <div id="lakeTitle">
              Il y a 2 ans
            </div>
          </div>
          <div id="smallBirthdayBoy">
            <img src="modules/photos/images/small_birthday_boy.png">
          </div>
          <div id="photosLogo">
            <img src="modules/photos/images/photos_logo.png">
          </div>
          <div id="yellowSemiCircle">
            <img src="modules/photos/images/yellow_semi_circle.png">
          </div>
          <div id="blueQuarterCircle">
            <img src="modules/photos/images/blue_quarter_circle.png">
          </div>
        </div>
        </template>
        <template is="dom-if" if="[[isEqual(customArtworkIndex_, '3')]]">
          <div id="illustrationsCustomArtWork" class="opt-in-artwork">
            <div id="girlIllustration">
              <img src="modules/photos/images/girl_illustration.png">
              <div id="girlTitle">
                Il y a 2 ans
              </div>
            </div>
            <div id="baloonIllustration">
              <img src="modules/photos/images/baloon_illustration.png">
              <div id="baloonTitle">
                Votre voyage
              </div>
            </div>
          </div>
        </template>
      </template>
    </div>
  </template>
  <template id="memoriesElement" is="dom-if" if="[[!showOptInScreen]]">
    <template id="memoryRepeat" is="dom-repeat" items="[[memories]]">
      <a class="memory card" href="[[item.itemUrl.url]]" on-click="onMemoryClick_">
        <img class="memory-img" is="cr-auto-img" on-load="onImageLoadSuccess_" on-error="onImageLoadError_" auto-src="[[resizeImageUrl_(item.coverUrl.url, memories.length)]]" draggable="false">
        <div class="memory-title" dir="auto">[[item.title]]</div>
      </a>
    </template>
    <template id="exploreCardElement" is="dom-if" if="[[showExploreMore_]]">
      <a href="https://photos.google.com?referrer=CHROME_NTP" class="card" on-click="onMemoryClick_" target="_blank" id="exploreCard">
        <div id="exploreIconContainer">
          <div id="exploreIcon"></div>
        </div>
        <div id="exploreText">
          Découvrez plus de souvenirs dans Google Photos
        </div>
      </a>
    </template>
  </template>
</div>
<cr-lazy-render id="infoDialogRender">
  <template>
    <ntp-info-dialog inner-h-t-m-l="[[i18nAdvanced('modulesPhotosInfo')]]">
    </ntp-info-dialog>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let handler$1=null;class PhotosProxy{static getHandler(){return handler$1||(handler$1=PhotosHandler.getRemote())}static setHandler(newHandler){handler$1=newHandler}constructor(){}}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var OptInStatus;(function(OptInStatus){OptInStatus[OptInStatus["HARD_OPT_OUT"]=0]="HARD_OPT_OUT";OptInStatus[OptInStatus["OPT_IN"]=1]="OPT_IN";OptInStatus[OptInStatus["SOFT_OPT_OUT"]=2]="SOFT_OPT_OUT"})(OptInStatus||(OptInStatus={}));function recordOptInStatus(optInStatus){chrome.metricsPrivate.recordEnumerationValue("NewTabPage.Photos.UserOptIn",optInStatus,Object.keys(OptInStatus).length)}class PhotosModuleElement extends(I18nMixin(PolymerElement)){static get is(){return"ntp-photos-module"}static get template(){return getTemplate$k()}static get properties(){return{memories:Array,showOptInScreen:{type:Boolean,reflectToAttribute:true},customArtworkUrl_:{type:String,value:()=>`chrome://new-tab-page/modules/photos/images/img0${loadTimeData.getString("photosModuleCustomArtWork")}_240x236.svg`},customArtworkIndex_:{type:String,value:()=>loadTimeData.getString("photosModuleCustomArtWork")},showCustomArtWork_:{type:Boolean,value:()=>loadTimeData.getString("photosModuleCustomArtWork")!==""&&!loadTimeData.getBoolean("photosModuleSplitSvgCustomArtWork")},showSplitSvgCustomArtWork_:{type:Boolean,value:()=>loadTimeData.getBoolean("photosModuleSplitSvgCustomArtWork")&&(loadTimeData.getString("photosModuleCustomArtWork")==="1"||loadTimeData.getString("photosModuleCustomArtWork")==="2"||loadTimeData.getString("photosModuleCustomArtWork")==="3")},showSoftOptOutButton:Boolean,optInTitleText:String,hideMenuButton:Boolean,showExploreMore_:{type:Boolean,computed:"computeShowExploreMore_(memories)"},headerChipText_:{type:String,computed:"computeHeaderChipText_(showOptInScreen)"}}}ready(){super.ready();this.addEventListener("detect-impression",(()=>{chrome.metricsPrivate.recordBoolean("NewTabPage.Photos.ModuleShown",this.showOptInScreen)}))}computeShowExploreMore_(){return this.memories.length===1}computeHeaderChipText_(){return this.showOptInScreen?loadTimeData.getString("modulesPhotosNew"):""}onInfoButtonClick_(){this.$.infoDialogRender.get().showModal()}onDismissButtonClick_(){PhotosProxy.getHandler().dismissModule();this.dispatchEvent(new CustomEvent("dismiss-module",{bubbles:true,composed:true,detail:{message:loadTimeData.getString("modulesPhotosMemoriesHiddenToday"),restoreCallback:()=>PhotosProxy.getHandler().restoreModule()}}))}onSoftOptOutClick_(){recordOptInStatus(OptInStatus.SOFT_OPT_OUT);PhotosProxy.getHandler().softOptOut();this.dispatchEvent(new CustomEvent("dismiss-module",{bubbles:true,composed:true,detail:{message:loadTimeData.getString("modulesPhotosMemoriesSoftOptOut"),restoreCallback:()=>PhotosProxy.getHandler().restoreModule()}}))}onDisableButtonClick_(){this.dispatchEvent(new CustomEvent("disable-module",{bubbles:true,composed:true,detail:{message:loadTimeData.getStringF("disableModuleToastMessage",loadTimeData.getString("modulesPhotosMemoriesDisabled"))}}))}onImageLoadError_(){chrome.metricsPrivate.recordBoolean("NewTabPage.Photos.ImageLoad",false)}onImageLoadSuccess_(){chrome.metricsPrivate.recordBoolean("NewTabPage.Photos.ImageLoad",true)}onOptInClick_(){recordOptInStatus(OptInStatus.OPT_IN);PhotosProxy.getHandler().onUserOptIn(true);this.showOptInScreen=false;this.hideMenuButton=false;this.showSoftOptOutButton=false}onOptOutClick_(){recordOptInStatus(OptInStatus.HARD_OPT_OUT);PhotosProxy.getHandler().onUserOptIn(false);this.onDisableButtonClick_()}onMemoryClick_(){this.dispatchEvent(new Event("usage",{bubbles:true,composed:true}));PhotosProxy.getHandler().onMemoryOpen()}resizeImageUrl_(url,numMemories){let imgSize="=w168-h164-p-k-rw-no";if(numMemories<3){imgSize="=w255-h164-p-k-rw-no"}return url.replace("?",imgSize+"?")}isEqual(lhs,rhs){return lhs===rhs}showDefaultOptInscreen(){return!this.showCustomArtWork_&&!this.showSplitSvgCustomArtWork_}}customElements.define(PhotosModuleElement.is,PhotosModuleElement);async function createPhotosElement(){const numMemories=3;const{memories:memories}=await PhotosProxy.getHandler().getMemories();const{showOptInScreen:showOptInScreen}=await PhotosProxy.getHandler().shouldShowOptInScreen();const{showSoftOptOutButton:showSoftOptOutButton}=await PhotosProxy.getHandler().shouldShowSoftOptOutButton();const{optInTitleText:optInTitleText}=await PhotosProxy.getHandler().getOptInTitleText(memories.slice(0,numMemories));if(memories.length===0){return null}const element=new PhotosModuleElement;element.showOptInScreen=showOptInScreen;element.showSoftOptOutButton=showSoftOptOutButton;element.optInTitleText=optInTitleText;element.hideMenuButton=showOptInScreen&&!showSoftOptOutButton;element.memories=memories.slice(0,numMemories);return element}const photosDescriptor=new ModuleDescriptor("photos",createPhotosElement);function getTemplate$j(){return html`<!--_html_template_start_--><style include="cr-hidden-style">:host{display:flex;flex-direction:column;height:100%;width:100%}:host([overflow-scroll_]) #container{overflow-x:auto}:host([overflow-scroll_]) #content{padding-top:2px;width:559px}:host([overflow-scroll_][wide-modules-enabled_]) #content{width:766px}#content{box-sizing:border-box;display:block;flex-grow:1;padding-bottom:16px;padding-inline-end:16px;padding-inline-start:16px}#recipes{display:flex;flex-direction:row;justify-content:space-between}.recipe{border-radius:4px;display:flex;flex-direction:column;outline:0;position:relative;text-decoration:none;width:165px}:host-context(.focus-outline-visible) .recipe:focus{box-shadow:var(--ntp-focus-shadow)}.recipe:not([hidden])+.recipe{margin-inline-start:16px}.image-background{background-color:#163758;border-radius:4px;height:120px;margin-bottom:8px;width:inherit}.image-container{background-color:#fff;border-radius:4px;box-shadow:0 0 0 .2px #fff;box-sizing:border-box;height:100%;opacity:97%;padding:10px}.recipe img{border-radius:4px;height:136px;margin-bottom:8px;object-fit:cover;width:inherit}.tag{background:var(--color-new-tab-page-tag-background);border-radius:4px;box-sizing:border-box;color:var(--color-new-tab-page-primary-foreground);font-size:11px;margin:8px;max-width:149px;overflow:hidden;padding:8px;position:absolute;text-overflow:ellipsis;white-space:nowrap}:host-context([dir=rtl]) .tag{right:0}.price{color:var(--color-new-tab-page-primary-foreground);font-size:13px;font-weight:700;height:14px;line-height:15px;margin-bottom:8px}.name{color:var(--color-new-tab-page-primary-foreground);font-size:12px;line-height:20px;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.secondary{color:var(--color-new-tab-page-secondary-foreground);font-size:11px;height:13px;text-overflow:ellipsis}#relatedSearches{display:flex;flex-direction:row;margin-top:16px}.pill{align-items:center;border:solid var(--color-new-tab-page-module-control-border) 1px;border-radius:16px;box-sizing:border-box;display:flex;flex-direction:row;flex-shrink:0;height:32px;outline:0;text-decoration:none}.pill:hover{background-color:var(--color-new-tab-page-control-background-hovered)}.pill:active{background-color:var(--color-new-tab-page-active-background)}:host-context(.focus-outline-visible) .pill:focus{box-shadow:var(--ntp-focus-shadow)}.pill+.pill{margin-inline-start:8px}.clock{-webkit-mask-image:url(chrome://resources/images/icon_clock.svg);-webkit-mask-repeat:no-repeat;-webkit-mask-size:100%;background-color:var(--color-new-tab-page-secondary-foreground);height:16px;margin-inline-start:12px;width:16px}.search-text{color:var(--color-new-tab-page-primary-foreground);font-size:13px;margin-inline-end:12px;margin-inline-start:8px}</style>
<ntp-module-header dismiss-text="[[i18n('modulesDismissButtonText', dismissName_)]]" disable-text="[[i18n('modulesDisableButtonText', disableName_)]]" more-actions-text="[[i18n('modulesMoreActions', disableName_)]]" show-info-button on-info-button-click="onInfoButtonClick_" show-dismiss-button on-dismiss-button-click="onDismissButtonClick_" on-disable-button-click="onDisableButtonClick_" icon-src="modules/recipes/icons/recipes_logo.svg">
  [[title_]]
</ntp-module-header>
<div id="container">
  <div id="content">
    <div id="recipes">
      <template is="dom-repeat" id="recipesRepeat" on-dom-change="onDomChange_" items="[[getRecipes_(task, wideModulesLoaded_)]]">
        <a class="recipe" href="[[item.targetUrl.url]]" on-click="onRecipeClick_" on-auxclick="onRecipeClick_">
          <img is="cr-auto-img" auto-src="[[item.imageUrl.url]]" draggable="false">
          
          <div class="tag" title="[[item.info]]">[[item.info]]</div>
          <div class="name" title="[[item.name]]">[[item.name]]</div>
          <div class="secondary">[[item.siteName]]</div>
        </a>
      </template>
    </div>
    <div hidden$="{{!showRelatedSearches_}}" id="relatedSearches">
      <template is="dom-repeat" id="relatedSearchesRepeat" items="[[task.relatedSearches]]" on-dom-change="onDomChange_">
        <a class="pill" href="[[item.targetUrl.url]]" on-click="onPillClick_" on-auxclick="onPillClick_">
          <div class="clock"></div>
          <div class="search-text">[[item.text]]</div>
        </a>
      </template>
    </div>
  </div>
</div>
<cr-lazy-render id="infoDialogRender">
  <template>
    <ntp-info-dialog inner-h-t-m-l="[[info_]]">
    </ntp-info-dialog>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let handler=null;class RecipesHandlerProxy{static getHandler(){return handler||(handler=RecipesHandler.getRemote())}static setHandler(newHandler){handler=newHandler}constructor(){}}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class RecipesModuleElement extends(I18nMixin(PolymerElement)){constructor(){super(...arguments);this.intersectionObserver_=null}static get is(){return"ntp-recipe-module"}static get template(){return getTemplate$j()}static get properties(){return{task:Object,showRelatedSearches_:{type:Boolean,computed:"computeShowRelatedSearches_(task)"},title_:{type:String,computed:"computeTitle_()"},dismissName_:{type:String,computed:"computeDismissName_()"},disableName_:{type:String,computed:"computeDisableName_()"},info_:{type:String,computed:"computeInfo_()"},overflowScroll_:{type:Boolean,value:()=>loadTimeData.getBoolean("modulesOverflowScrollbarEnabled"),reflectToAttribute:true},wideModulesEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("wideModulesEnabled"),reflectToAttribute:true}}}computeTitle_(){return loadTimeData.getBoolean("modulesRecipeHistoricalExperimentEnabled")?loadTimeData.getString("modulesRecipeViewedTasksSentence"):loadTimeData.getString("modulesRecipeTasksSentence")}computeDismissName_(){return loadTimeData.getBoolean("modulesRecipeHistoricalExperimentEnabled")?loadTimeData.getString("modulesRecipeViewedTasksLowerThese"):loadTimeData.getString("modulesRecipeTasksLowerThese")}computeDisableName_(){return loadTimeData.getBoolean("modulesRecipeHistoricalExperimentEnabled")?loadTimeData.getString("modulesRecipeViewedTasksLower"):loadTimeData.getString("modulesRecipeTasksLower")}computeInfo_(){return loadTimeData.getBoolean("moduleRecipeExtendedExperimentEnabled")?this.i18nAdvanced("modulesRecipeExtendedInfo"):this.i18nAdvanced("modulesRecipeInfo")}getRecipes_(){return this.task.recipes.slice(0,this.wideModulesEnabled_?4:3)}computeShowRelatedSearches_(){return this.task.relatedSearches&&this.task.relatedSearches.length>0}onRecipeClick_(e){const index=e.model.index;RecipesHandlerProxy.getHandler().onRecipeClicked(index);this.dispatchEvent(new Event("usage",{bubbles:true,composed:true}))}onPillClick_(e){const index=e.model.index;RecipesHandlerProxy.getHandler().onRelatedSearchClicked(index);this.dispatchEvent(new Event("usage",{bubbles:true,composed:true}))}onInfoButtonClick_(){this.$.infoDialogRender.get().showModal()}onDismissButtonClick_(){RecipesHandlerProxy.getHandler().dismissTask(this.task.name);this.dispatchEvent(new CustomEvent("dismiss-module",{bubbles:true,composed:true,detail:{message:loadTimeData.getStringF("dismissModuleToastMessage",this.title_),restoreCallback:this.onRestore_.bind(this)}}))}onDisableButtonClick_(){this.dispatchEvent(new CustomEvent("disable-module",{bubbles:true,composed:true,detail:{message:loadTimeData.getStringF("disableModuleToastMessage",this.disableName_)}}))}onRestore_(){RecipesHandlerProxy.getHandler().restoreTask(this.task.name)}onDomChange_(){if(!this.intersectionObserver_){this.intersectionObserver_=new IntersectionObserver((entries=>{entries.forEach((({intersectionRatio:intersectionRatio,target:target})=>{if(this.overflowScroll_){target.style.display=intersectionRatio<1?"none":"flex"}else{target.style.visibility=intersectionRatio<1?"hidden":"visible"}}));if(this.overflowScroll_){this.intersectionObserver_.disconnect()}this.dispatchEvent(new Event("visibility-update"))}),{root:this,threshold:1})}else{this.intersectionObserver_.disconnect()}const observeClasses=[".pill"];if(!this.overflowScroll_){observeClasses.push(".recipe")}this.shadowRoot.querySelectorAll(observeClasses.join(",")).forEach((el=>this.intersectionObserver_.observe(el)))}}customElements.define(RecipesModuleElement.is,RecipesModuleElement);async function createModule(){const{task:task}=await RecipesHandlerProxy.getHandler().getPrimaryTask();if(!task){return null}const element=new RecipesModuleElement;element.task=task;return element}const recipeTasksDescriptor=new ModuleDescriptor("recipe_tasks",createModule);function getTemplate$i(){return html`<!--_html_template_start_--><style>:host{background-color:var(--color-new-tab-page-module-background);border-radius:var(--ntp-module-border-radius)}@media (forced-colors:active){a,ntp-module-header-v2{border-radius:var(--ntp-module-item-border-radius);outline:var(--cr-border-hcm)}.file{overflow:visible}}ntp-module-header-v2{background-color:var(--color-new-tab-page-module-background);margin:8px}:host-context(.focus-outline-visible) a:focus,a:focus-visible{box-shadow:var(--ntp-focus-shadow);outline:0}#files{background-color:var(--color-new-tab-page-module-item-background);border-radius:var(--ntp-module-item-border-radius);margin:8px}.file{align-items:center;display:flex;height:52px;padding-bottom:2px;padding-top:2px;position:relative;text-decoration:none;overflow:hidden}.file:hover #hover-layer{background:var(--color-new-tab-page-module-item-background-hovered);display:block;inset:0;pointer-events:none;position:absolute}#hover-layer{display:none}.file:first-of-type{border-radius:var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius) 0 0}.file:last-of-type{border-radius:0 0 var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius)}.file-icon{height:18px;margin-inline-end:17px;margin-inline-start:17px;width:18px}.file-info{min-width:0;padding-inline-end:16px}.file-description,.file-title{color:var(--color-new-tab-page-primary-foreground);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.file-title{font-size:13px;line-height:20px}.file-description{font-size:11px;line-height:13px}</style>
<ntp-module-header-v2 id="moduleHeaderElementV2" header-text="[[i18n('modulesDriveTitleV2')]]" menu-item-groups="[[getMenuItemGroups_()]]" more-actions-text="[[i18nRecursive('',
                                  'modulesMoreActions',
                                  'modulesDriveSentence')]]" on-disable-button-click="onDisableButtonClick_" on-dismiss-button-click="onDismissButtonClick_" on-info-button-click="onInfoButtonClick_" on-menu-button-click="onMenuButtonClick_">
</ntp-module-header-v2>
<div id="files">
  <template id="fileRepeat" is="dom-repeat" items="[[files]]">
    <a class="file" href="[[item.itemUrl.url]]" on-click="onFileClick_">
      <div id="hover-layer"></div>
      <img is="cr-auto-img" class="file-icon" draggable="false" auto-src="[[getImageSrc_(item)]]">
      
      <div class="file-info">
        <div class="file-title">[[item.title]]</div>
        <div class="file-description">[[item.justificationText]]</div>
      </div>
    </a>
  </template>
</div>
<cr-lazy-render id="infoDialogRender">
  <template>
    <ntp-info-dialog inner-h-t-m-l="[[i18nAdvanced('modulesDriveInfo')]]">
    </ntp-info-dialog>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class DriveModuleElement extends(I18nMixin(PolymerElement)){static get is(){return"ntp-drive-module-redesigned"}static get template(){return getTemplate$i()}static get properties(){return{files:Array}}getImageSrc_(file){return"https://drive-thirdparty.googleusercontent.com/32/type/"+file.mimeType}getMenuItemGroups_(){return[[{action:"dismiss",icon:"modules:visibility_off",text:this.i18n("modulesDriveDismissButtonText")},{action:"disable",icon:"modules:block",text:this.i18n("modulesDriveDisableButtonTextV2")},{action:"info",icon:"modules:info",text:this.i18n("moduleInfoButtonTitle")}],[{action:"customize-module",icon:"modules:tune",text:this.i18n("modulesCustomizeButtonText")}]]}onDisableButtonClick_(){const disableEvent=new CustomEvent("disable-module",{composed:true,detail:{message:loadTimeData.getStringF("disableModuleToastMessage",loadTimeData.getString("modulesDriveSentence2"))}});this.dispatchEvent(disableEvent)}onDismissButtonClick_(){DriveProxy.getHandler().dismissModule();this.dispatchEvent(new CustomEvent("dismiss-module-instance",{bubbles:true,composed:true,detail:{message:loadTimeData.getStringF("dismissModuleToastMessage",loadTimeData.getString("modulesDriveFilesSentence")),restoreCallback:()=>DriveProxy.getHandler().restoreModule()}}))}onFileClick_(e){const clickFileEvent=new Event("usage",{composed:true});this.dispatchEvent(clickFileEvent);chrome.metricsPrivate.recordSmallCount("NewTabPage.Drive.FileClick",e.model.index)}onInfoButtonClick_(){this.$.infoDialogRender.get().showModal()}onMenuButtonClick_(e){this.$.moduleHeaderElementV2.showAt(e)}}customElements.define(DriveModuleElement.is,DriveModuleElement);async function createDriveElement(){const{files:files}=await DriveProxy.getHandler().getFiles();if(files.length===0){return null}const element=new DriveModuleElement;element.files=files;return element}const driveDescriptor=new ModuleDescriptor("drive",createDriveElement);function getTemplate$h(){return html`<!--_html_template_start_--><style>:host{align-items:center;background-position:center;background-repeat:no-repeat;border-radius:5px;display:flex;flex-shrink:0;height:36px;justify-content:center;margin-inline:0 12px;width:36px}@media (forced-colors:active){:host{forced-color-adjust:none}}</style>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PageFavicon extends PolymerElement{static get is(){return"page-favicon"}static get template(){return getTemplate$h()}static get properties(){return{style:{type:String,computed:`computeStyle_(url, imageUrl)`,reflectToAttribute:true},url:Object,isKnownToSync:Boolean,size:{type:Number,value:16}}}computeStyle_(){if(!this.url){return""}return`background-image:${getFaviconForPageURL(this.url.url,this.isKnownToSync,"",this.size)}`}}customElements.define(PageFavicon.is,PageFavicon);function getTemplate$g(){return html`<!--_html_template_start_--><style include="history-clusters-shared-style">:host{background:var(--color-new-tab-page-module-item-background);border-radius:var(--ntp-module-item-border-radius);display:inline-flex;height:100%;min-width:0;width:100%}a:active,a:hover,a:link,a:visited{text-decoration:none}a:hover{background-color:var(--color-new-tab-page-module-item-background-hovered);border-radius:var(--ntp-module-item-border-radius)}a:active{background-color:var(--color-new-tab-page-active-background);border-radius:var(--ntp-module-item-border-radius)}:host-context(.focus-outline-visible) a:focus,a:focus-visible{border-radius:var(--ntp-module-item-border-radius);box-shadow:var(--ntp-focus-shadow);outline:0}#content{flex:1;overflow:hidden;position:relative}#label-container{background:linear-gradient(0,rgba(0,0,0,0) 0,rgba(0,0,0,.4) 69.79%);border-radius:var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius) 0 0;color:var(--color-new-tab-page-primary-foreground);display:flex;font-size:11px;position:absolute;height:40px;margin:4px;width:calc(100% - 8px);z-index:1}#icon{margin:12px 0 0 12px}#label{color:#fff;margin-top:12px}#images{border-radius:var(--ntp-module-item-border-radius);margin:4px;overflow:hidden;position:relative;height:122px;display:flex;flex-wrap:wrap;gap:4px}:host(:not([format=wide]):not([images-enabled])) #images{height:60px}:host([format=wide]:not([show-related-searches])) #images{height:68px}#images img{object-fit:cover}.large-image{background-color:var(--color-new-tab-page-module-background);height:100%;width:100%}.small-image,:host([show-related-searches][format=wide]:not([image-count_='2']):not([image-count_='3'])) .small-image{background:var(--color-new-tab-page-module-background);border-radius:var(--ntp-module-item-border-radius);height:calc(100%/2 - 2px);width:calc(100%/2 - 2px)}:host(:not([images-enabled]):not([image-count_='2']):not([image-count_='3'])) .small-image,:host([format=wide]:not([show-related-searches])) .small-image,:host([image-count_='2']) .small-image,:host([image-count_='3']) .small-image{height:100%;width:calc(100%/2 - 2px)}#extraImageCard{align-items:center;display:inline-flex;color:var(--color-new-tab-page-icon-button-background-active);font-size:14px;justify-content:center;vertical-align:top}#images page-favicon{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}#icon{background-color:#fff;background-size:10px;height:16px;margin-inline-end:8px;width:16px}#title{-webkit-box-orient:vertical;-webkit-line-clamp:2;color:var(--color-new-tab-page-primary-foreground);display:-webkit-box;font-size:var(--ntp-module-text-size);line-height:20px;margin:16px 16px 4px 16px;white-space:initial}:host(:not([format=wide]):not([images-enabled])) #title{margin-top:8px}:host([format=narrow][show-discount-chip_]) #title{-webkit-line-clamp:1}:host([format=wide]) #title{-webkit-line-clamp:1;margin:12px 16px 8px}#titleAnnotation{background:var(--color-sys-tonal-container);color:var(--color-sys-on-tonal-container);min-width:60px}#annotationContainer{align-items:start;display:flex;flex-wrap:wrap;gap:4px;margin-inline:16px}#discountChip{background:var(--color-sys-tertiary-container);color:var(--color-sys-on-tertiary-container);min-width:40px}.annotation{align-items:center;border-radius:4px;display:flex;font-size:11px;font-weight:500;height:17px;justify-content:center;line-height:16px;padding-inline-end:4px;padding-inline-start:4px;text-align:center}#date{color:var(--color-new-tab-page-secondary-foreground);min-width:max-content;bottom:16px;font-size:11px;left:16px;line-height:12px;position:absolute}@media (forced-colors:active){:host-context(.focus-outline-visible) a:focus{outline:var(--cr-focus-outline-hcm)}a{border-radius:12px;outline:var(--cr-border-hcm)}}</style>
<a id="content" href="[[cart.cartUrl.url]]" aria-label$="[[tileLabel_]]">
  <div id="label-container">
    <page-favicon id="icon" url="[[cart.cartUrl]]" is-known-to-sync="[[visit.isKnownToSync]]" size="10">
    </page-favicon>
    <div id="label" class="truncate">[[cart.domain]]</div>
  </div>
  <div id="images">
    <template is="dom-if" if="[[!hasMultipleImages_()]]" restamp>
      <template is="dom-if" if="[[cart.productImageUrls.length]]" restamp>
        <img class="large-image" is="cr-auto-img" auto-src="[[getSingleImageToShow_()]]" draggable="false" alt="">
        
      </template>
      <template is="dom-if" if="[[!cart.productImageUrls.length]]" restamp>
        <page-favicon class="large-image" id="fallbackImage" url="[[cart.cartUrl]]" is-known-to-sync="true" size="24">
        </page-favicon>
      </template>
    </template>
    <template is="dom-if" if="[[hasMultipleImages_()]]" restamp>
      <template id="imagesRepeat" is="dom-repeat" items="[[getImagesToShow_()]]">
        <img class="small-image" is="cr-auto-img" auto-src="[[item.url]]" draggable="false" alt="">
        
      </template>
      <template is="dom-if" if="[[shouldShowExtraImagesCard_()]]" restamp>
        <div id="extraImageCard" class="small-image">
          +[[getExtraImagesCount_()]]
        </div>
      </template>
    </template>
  </div>
  <div id="title" class="truncate">[[cart.merchant]]</div>
  <div id="annotationContainer">
    <div id="titleAnnotation" class="annotation">
      Dans votre panier
    </div>
    <template is="dom-if" if="[[cart.discountText]]" restamp>
      <div id="discountChip" class="annotation">[[cart.discountText]]</div>
    </template>
  </div>
  <div id="date">[[cart.relativeDate]]</div>
</a>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CartTileModuleElementV2 extends(I18nMixin(PolymerElement)){static get is(){return"ntp-history-clusters-cart-tile-v2"}static get template(){return getTemplate$g()}static get properties(){return{cart:Object,format:{type:String,reflectToAttribute:true},imagesEnabled:{type:Boolean,reflectToAttribute:true},showRelatedSearches:Boolean,tileLabel_:{type:String,computed:`computeTileLabel_(cart)`},imageCount_:{type:Number,computed:`computeImageCount_()`,reflectToAttribute:true}}}ready(){super.ready()}hasMultipleImages_(){return this.cart.productImageUrls.length>1}getSingleImageToShow_(){return this.cart.productImageUrls[0].url}getImagesToShow_(){const images=this.cart.productImageUrls;if(!this.showRelatedSearches&&this.format==="wide"){return images.slice(0,1)}else{if(images.length>=4){if(this.imagesEnabled||this.showRelatedSearches&&this.format==="wide"){return images.slice(0,images.length>4?3:4)}else{return images.slice(0,1)}}else if(images.length===3){return images.slice(0,1)}else{return images}}}shouldShowExtraImagesCard_(){return this.showRelatedSearches?this.cart.productImageUrls.length>2:true}getExtraImagesCount_(){const images=this.cart.productImageUrls;if(!this.showRelatedSearches&&this.format==="wide"){return images.length-1}else{if(images.length>=4){if(this.imagesEnabled||this.showRelatedSearches&&this.format==="wide"){return images.length-3}else{return images.length-1}}else if(images.length===3){return 2}else{return 1}}}computeImageCount_(){return this.cart.productImageUrls.length}computeTileLabel_(){const productCount=this.cart.productImageUrls.length;const discountText=this.cart.discountText;const merchantName=this.cart.merchant;const merchantDomain=this.cart.domain;const relativeDate=this.cart.relativeDate;if(productCount===0){return loadTimeData.getStringF("modulesJourneysCartTileLabelDefault",discountText,merchantName,merchantDomain,relativeDate)}else if(productCount===1){return loadTimeData.getStringF("modulesJourneysCartTileLabelSingular",discountText,merchantName,merchantDomain,relativeDate)}else{return loadTimeData.getStringF("modulesJourneysCartTileLabelPlural",productCount,discountText,merchantName,merchantDomain,relativeDate)}}}customElements.define(CartTileModuleElementV2.is,CartTileModuleElementV2);const template$2=html`<iron-iconset-svg name="modules" size="20">
  <svg>
    <defs>
      <g id="block" viewBox="0 -960 960 960">
        <path d="M480-87.87q-80.674 0-152.109-30.717T202.761-203q-53.696-53.696-84.294-125.25T87.869-480.478q0-81.674 30.598-152.489 30.598-70.816 84.294-124.392 53.695-53.576 125.13-84.174Q399.326-872.131 480-872.131q81.674 0 152.609 30.598t124.63 84.174q53.696 53.576 84.294 124.392 30.598 70.815 30.598 152.489 0 80.674-30.598 152.228T757.239-203q-53.695 53.696-124.63 84.413Q561.674-87.869 480-87.869Zm0-83q53.087 0 100.652-16.804t86.13-47.609L234.804-667.022q-30.326 39.044-47.13 86.37-16.804 47.326-16.804 100.174 0 128.804 90.282 219.206Q351.435-170.87 480-170.87Zm245.435-123.065q30.087-39.043 46.891-86.369t16.804-100.174q0-128.565-90.282-218.609Q608.565-789.13 480-789.13q-52.848 0-100.054 16.565-47.207 16.565-86.25 46.652l431.739 431.978Z">
        </path>
      </g>
      <g id="dock_to_left" viewBox="0 -960 960 960">
        <path d="M213.87-135.869q-32.421 0-55.211-22.79t-22.79-55.211v-532.26q0-32.421 22.79-55.211t55.211-22.79h532.26q32.421 0 55.211 22.79t22.79 55.211v532.26q0 32.421-22.79 55.211t-55.211 22.79H213.87Zm329.043-83.001v-522.26H218.87v522.26h324.043Z">
        </path>
      </g>
      <g id="done" viewBox="0 -960 960 960">
        <path d="M395-277.348 218.348-455l57.891-57.891L395-395.131l288.761-287.76L741.652-624 395-277.348Z">
        </path>
      </g>
      <g id="info" viewBox="0 -960 960 960">
        <path d="M440.413-284.413h79.174V-528h-79.174v243.587Zm39.376-310.804q17.244 0 29.119-11.665 11.875-11.664 11.875-28.907 0-17.244-11.665-29.119-11.664-11.875-28.907-11.875-17.244 0-29.119 11.665-11.875 11.664-11.875 28.907 0 17.244 11.665 29.119 11.664 11.875 28.907 11.875Zm.487 507.348q-81.189 0-152.621-30.618-71.432-30.618-124.991-84.177-53.559-53.559-84.177-124.949-30.618-71.391-30.618-152.845 0-81.455 30.618-152.387t84.177-124.491q53.559-53.559 124.949-84.177 71.391-30.618 152.845-30.618 81.455 0 152.387 30.618t124.491 84.177q53.559 53.559 84.177 124.716 30.618 71.156 30.618 152.344 0 81.189-30.618 152.621-30.618 71.432-84.177 124.991-53.559 53.559-124.716 84.177-71.156 30.618-152.344 30.618ZM480-170.87q129.043 0 219.087-90.043Q789.13-350.957 789.13-480t-90.043-219.087Q609.043-789.13 480-789.13t-219.087 90.043Q170.87-609.043 170.87-480t90.043 219.087Q350.957-170.87 480-170.87ZM480-480Z">
        </path>
      </g>
      <g id="thumb_down" viewBox="0 -960 960 960">
        <path d="M240.957-807.63h457.434v489.087L413.978-34.13l-38.293-25.776q-17.881-12.529-27.479-32.224-9.597-19.696-5.597-41.131l1-2.369 37.282-182.913H120q-34.065 0-58.533-24.468Q37-367.478 37-401.543v-42.413q0-8.582 1.5-15.748 1.5-7.165 4.978-14.404l120.435-283.066q9.196-22.869 30.685-36.663 21.489-13.793 46.359-13.793Zm378.021 83H240.957L120.478-443.956v42.413h358.218l-46.131 231.282 186.413-186.413V-724.63Zm0 367.956V-724.63v367.956Zm79.413 38.131v-83h136.587V-724.63H698.391v-83h219.587v489.087H698.391Z">
        </path>
      </g>
      <g id="tune" viewBox="0 -960 960 960">
        <path d="M454.087-136.587V-384H533.5v84h288v79.413h-288v84h-79.413Zm-315.587-84V-300h247.413v79.413H138.5Zm144-135.826v-84h-144v-79.174h144v-84h79.413v247.174H282.5Zm147.587-84v-79.174H821.5v79.174H430.087Zm144-135.587v-247.413H653.5v84h168V-660h-168v84h-79.413ZM138.5-660v-79.413h391.413V-660H138.5Z">
        </path>
      </g>
      <g id="visibility_off" viewBox="0 -960 960 960">
        <path d="m638.435-429.065-72.283-72.283q2.326-29.391-18.337-49.717t-48.38-18l-70.37-70.37q12.283-4.282 25.446-6.424Q467.674-648 480-648q70 0 119 49t49 119q0 11.848-2.141 25.489-2.142 13.641-7.424 25.446ZM777.652-289.37l-56.782-57.26q34.326-27.522 62.75-60.185 28.423-32.663 48.902-73.185-49.479-100.761-144.5-158.38Q593-696 480-696q-26 0-49.685 2.761-23.685 2.761-46.011 9.043l-64.217-64.217q38-15 78.456-21 40.457-6 81.457-6 144.435 0 264.967 78.695Q865.5-618.022 919.413-480q-22 57.478-58.978 104.935-36.978 47.456-82.783 85.695ZM765.13-87.13 639.435-213.065q-37.522 14.239-77.5 21.359-39.978 7.119-81.935 7.119-144.674 0-265.207-78.935Q94.261-342.456 40.587-480q21.76-56.522 58-104.359 36.239-47.837 83.761-86.793l-99.044-98.565 53.631-53.631 681.587 682.826L765.13-87.13ZM238.848-614.37q-34.522 28.479-63.207 60.544-28.684 32.065-47.924 73.826 49 101 144.142 158.5Q367-264 480-264q23.848 0 47.772-3.141 23.924-3.142 48.924-9.142l-45-45q-12.805 4.761-25.848 7.022Q492.804-312 480-312q-70 0-119-49t-49-119q0-12.565 3.141-25.728 3.142-13.163 5.663-25.968l-81.956-82.674Zm292.739 84.457Zm-102.935 99.587Z">
        </path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template$2.content);function getTemplate$f(){return html`<!--_html_template_start_--><style include="cr-icons">:host{--menu-item-margin:12px;background-color:var(--color-new-tab-page-module-item-background);border-radius:var(--ntp-module-item-border-radius);display:flex;flex-direction:column}#titleContainer{align-items:center;display:flex;height:20px;padding:16px 16px 8px 16px}#title{color:var(--color-new-tab-page-primary-foreground);font-size:13px;font-weight:400;line-height:20px;margin-block-start:0;margin-block-end:0}#headerSpacer{flex-grow:1}#menuButton{--cr-icon-button-icon-size:20px;--cr-icon-button-fill-color:var(--color-new-tab-page-primary-foreground);--cr-icon-button-hover-background-color:var(--color-new-tab-page-control-background-hovered);margin-inline:0 -6px}#actionMenu{--cr-menu-shadow:var(--ntp-menu-shadow)}.action-menu-icon{--cr-icon-ripple-size:16px;background-color:transparent;margin-inline-start:calc(-1 * var(--menu-item-margin));margin-inline-end:var(--menu-item-margin)}#actionMenuDivider{background-color:var(--color-new-tab-page-module-context-menu-divider);border:none;height:1px;margin:8px 0}</style>
<div id="titleContainer">
  <h2 id="title">[[headerText]]</h2>
  <div id="headerSpacer"></div>
  <slot name="title-actions"></slot>
  <cr-icon-button id="menuButton" title="[[moreActionsText]]" class="icon-more-vert" on-click="onMenuButtonClick_">
  </cr-icon-button>
</div>

<cr-action-menu id="actionMenu">
  <template is="dom-repeat" items="[[menuItemGroups]]" as="group">
    <template is="dom-repeat" items="[[group]]">
      <button id="[[item.action]]" class="dropdown-item" on-click="onButtonClick_" data-action$="[[item.action]]">
        <iron-icon class="action-menu-icon cr-icon" icon="[[item.icon]]">
        </iron-icon>
        [[item.text]]
      </button>
    </template>
    <hr id="actionMenuDivider" hidden$="[[!showDivider_(index)]]">
  </template>
</cr-action-menu>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ModuleHeaderElementV2 extends(I18nMixin(PolymerElement)){static get is(){return"ntp-module-header-v2"}static get template(){return getTemplate$f()}static get properties(){return{headerText:String,moreActionsText:String,menuItemGroups:Array}}showAt(e){this.$.actionMenu.showAt(e.target)}onButtonClick_(e){const{action:action}=e.model.item;assert(action);e.stopPropagation();this.$.actionMenu.close();if(action==="customize-module"){this.dispatchEvent(new Event("customize-module",{bubbles:true,composed:true}))}else{this.dispatchEvent(new Event(`${action}-button-click`,{bubbles:true,composed:true}))}}onMenuButtonClick_(e){e.stopPropagation();this.dispatchEvent(new Event("menu-button-click",{bubbles:true,composed:true}))}showDivider_(index){return index===0}}customElements.define(ModuleHeaderElementV2.is,ModuleHeaderElementV2);function getTemplate$e(){return html`<!--_html_template_start_--><style include="cr-icons cr-shared-style">:host{background-color:var(--color-new-tab-page-module-background);border-radius:var(--ntp-module-item-border-radius);display:flex;flex-direction:column;position:relative}:host([suggestion-chip-header-enabled_]),:host([suggestion-chip-header-enabled_]) ntp-module-header-v2{background-color:inherit;border:none}@media (forced-colors:active){:host{border-radius:var(--ntp-module-item-border-radius);outline:var(--cr-border-hcm)}}#container{background-color:var(--color-new-tab-page-module-item-background);border:none;border-radius:var(--ntp-module-item-border-radius);cursor:pointer;display:flex;flex-direction:column;height:100%;padding:0}button{font-family:inherit}ntp-module-header-v2{padding-bottom:8px;width:100%}ntp-module-header-v2 cr-icon-button{--cr-icon-button-fill-color:var(--color-new-tab-page-primary-foreground);--cr-icon-button-hover-background-color:var(--color-new-tab-page-control-background-hovered)}ntp-module-header-v2>cr-icon-button{margin:0}h2{text-align:start}.label-container{color:var(--color-new-tab-page-primary-foreground);font-size:20px;height:48px;line-height:24px;padding:0 16px}:host(:not([suggestion-chip-header-enabled_]):hover){cursor:pointer}#suggestion-chip:hover .hover-layer,:host(:not([suggestion-chip-header-enabled_]):hover) .hover-layer{background:var(--color-new-tab-page-module-item-background-hovered);display:block;inset:0;position:absolute}.hover-layer{border-radius:var(--ntp-module-item-border-radius);display:none;pointer-events:none}:host([suggestion-chip-header-enabled_]) .label-container{background:var(--color-new-tab-page-module-item-background);border-radius:var(--ntp-module-item-border-radius)}:host([suggestion-chip-header-enabled_][format=wide]:not([show-related-searches])) .label-container{align-items:start}h2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;font-weight:inherit;font-size:inherit;margin:0;overflow:hidden;text-overflow:ellipsis}:host([suggestion-chip-header-enabled_]) h2{-webkit-line-clamp:1}#suggestion-chip{display:flex;font-size:var(--ntp-module-text-size);height:100%;position:relative;text-decoration:none}#container:focus-visible,#suggestion-chip:focus-visible{box-shadow:var(--ntp-focus-shadow);outline:0}#suggestion-chip-icon{--cr-icon-ripple-size:16px;--cr-icon-image:url(chrome://resources/images/icon_history.svg);align-self:center;background-color:var(--color-new-tab-page-primary-foreground);margin:16px 0}#suggestion-chip-label{align-self:center;margin-inline-start:12px;line-height:20px}</style>

<template is="dom-if" if="[[!suggestionChipHeaderEnabled_]]">
  <div class="hover-layer"></div>
  <button id="container" on-click="onClick_">
    <ntp-module-header-v2 header-text="[[i18n('modulesHistoryResumeBrowsingTitle')]]" on-menu-button-click="onMenuButtonClick_" menu-item-groups="[[getMenuItemGroups_()]]" more-actions-text="[[i18n('modulesMoreActions', clusterLabel)]]">
        <cr-icon-button iron-icon="modules:done" on-click="onDoneClick_" slot="title-actions" title="Marquer comme terminée et masquer">
        </cr-icon-button>
    </ntp-module-header-v2>
    <h2 id="label" class="label-container">
    [[clusterLabel]]
    </h2>
  </button>
</template>
<template is="dom-if" if="[[suggestionChipHeaderEnabled_]]">
  <ntp-module-header-v2 header-text="[[i18n('modulesHistoryResumeBrowsingTitle')]]" on-menu-button-click="onMenuButtonClick_" menu-item-groups="[[getMenuItemGroups_()]]" more-actions-text="[[i18n('modulesMoreActions', clusterLabel)]]">
      <cr-icon-button iron-icon="modules:done" on-click="onDoneClick_" slot="title-actions" title="Marquer comme terminée et masquer">
      </cr-icon-button>
  </ntp-module-header-v2>
  <a id="suggestion-chip" class="label-container" href="[[normalizedUrl.url]]" on-click="onSuggestClick_">
    <div class="hover-layer"></div>
    <div id="suggestion-chip-icon" class="cr-icon"></div>
    <h2 id="suggestion-chip-label">[[clusterLabel]]</h2>
  </a>
</template>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ElementBase=I18nMixin(PolymerElement);class HistoryClustersHeaderElementV2 extends ElementBase{static get is(){return"history-clusters-header-v2"}static get template(){return getTemplate$e()}static get properties(){return{clusterLabel:String,suggestionChipHeaderEnabled_:{type:Boolean,reflectToAttribute:true,value:()=>loadTimeData.getBoolean("historyClustersSuggestionChipHeaderEnabled")}}}onClick_(e){e.stopPropagation();this.dispatchEvent(new CustomEvent("show-all-button-click",{bubbles:true,composed:true}))}onDoneClick_(e){e.stopPropagation();this.dispatchEvent(new CustomEvent("done-button-click",{bubbles:true,composed:true}))}onSuggestClick_(e){e.stopPropagation();this.dispatchEvent(new CustomEvent("suggest-click",{bubbles:true,composed:true}))}onMenuButtonClick_(e){const moduleHeader=this.shadowRoot.querySelector("ntp-module-header-v2");moduleHeader.showAt(e)}getMenuItemGroups_(){return[[{action:"done",icon:"modules:done",text:this.i18n("modulesHistoryDoneButton")},{action:"dismiss",icon:"modules:thumb_down",text:this.i18n("modulesJourneysDismissButton")},{action:"disable",icon:"modules:block",text:this.i18nRecursive("","modulesDisableButtonTextV2","modulesThisTypeOfCardText")},{action:"show-all",icon:"modules:dock_to_left",text:this.i18n("modulesJourneysShowAllButton")},{action:"info",icon:"modules:info",text:this.i18n("moduleInfoButtonTitle")}],[{action:"customize-module",icon:"modules:tune",text:this.i18n("modulesCustomizeButtonText")}]]}}customElements.define(HistoryClustersHeaderElementV2.is,HistoryClustersHeaderElementV2);function getTemplate$d(){return html`<!--_html_template_start_--><style include="history-clusters-shared-style">.related-search{display:flex;flex-direction:row;height:100%;position:relative;width:100%}a:active,a:hover,a:link,a:visited{text-decoration:none}:host-context(.focus-outline-visible) a:focus,a:focus-visible{box-shadow:var(--ntp-focus-shadow);outline:0}.hover-layer{display:none;background:var(--color-new-tab-page-module-item-background-hovered);inset:0;pointer-events:none;position:absolute}.hover-layer,a{border-radius:0 0 var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius)}:host([is-first]) .hover-layer,:host([is-first]) a{border-radius:var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius) 0 0}a:hover .hover-layer{display:block}a:active .hover-layer{background:var(--color-new-tab-page-active-background)}.title{color:var(--color-new-tab-page-primary-foreground);font-size:var(--ntp-module-text-size);margin:auto 8px auto 0}.icon{-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:20px;background-color:var(--color-new-tab-page-primary-foreground);background-position:center center;background-repeat:no-repeat;background-size:20px;flex-shrink:0;height:20px;margin:auto 16px;width:20px}@media (forced-colors:active){:host-context(.focus-outline-visible) a:focus{outline:var(--cr-focus-outline-hcm)}a{outline:var(--cr-border-hcm)}.icon{background-color:LinkText}}</style>
<a class="related-search" part="related-search" href="[[computeSearchUrl_(relatedSearch.query)]]" aria-label$="[[i18n('modulesJourneysSearchSuggAcc',
        relatedSearch.query)]]">
  <div class="hover-layer"></div>
  <div class="icon" style="-webkit-mask-image:url(//resources/images/icon_search.svg)">
  </div>
  <div class="title truncate">[[relatedSearch.query]]</div>
</a>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SuggestTileModuleElement extends(I18nMixin(PolymerElement)){static get is(){return"ntp-history-clusters-suggest-tile-v2"}static get template(){return getTemplate$d()}static get properties(){return{relatedSearch:{type:Object},searchUrl_:{type:Object,computed:`computeSearchUrl_(query)`}}}computeSearchUrl_(query){return`https://www.google.com/search?q=${encodeURIComponent(query)}`}}customElements.define(SuggestTileModuleElement.is,SuggestTileModuleElement);
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class HistoryClustersProxyImpl{constructor(handler){this.handler=handler}static getInstance(){if(instance$4){return instance$4}const handler=PageHandler$1.getRemote();return instance$4=new HistoryClustersProxyImpl(handler)}static setInstance(obj){instance$4=obj}}let instance$4=null;function getTemplate$c(){return html`<!--_html_template_start_--><style include="cr-icons cr-shared-style">:host{--grid-gap:8px;height:432px}:host([images-enabled_]){height:496px}:host([images-enabled_]:not([show-related-searches])){align-self:flex-start;height:370px}:host([format=wide]){height:244px}:host([format=wide]:not([show-related-searches])){height:192px}cr-icon-button{--cr-icon-button-icon-size:20px;--cr-icon-button-fill-color:var(--color-new-tab-page-primary-foreground);--cr-icon-button-hover-background-color:var(--color-new-tab-page-control-background-hovered);margin-inline-end:-4px;margin-inline-start:0}#layout{display:grid;grid-gap:var(--grid-gap);grid-template:repeat(7,1fr)/repeat(2,1fr);height:calc(100% - 16px);padding:8px}:host([images-enabled_]:not([show-related-searches])) #layout{grid-template:repeat(6,1fr)/repeat(2,1fr)}:host([images-enabled_]) #layout{grid-template:repeat(8,1fr)/repeat(2,1fr)}:host([format=wide]) #layout{grid-template:repeat(4,1fr)/repeat(4,1fr)}:host([format=wide]:not([show-related-searches])) #layout{grid-template:repeat(1,1fr)/repeat(4,1fr)}history-clusters-header-v2{grid-column:1/3;grid-row:1/3}:host([format=wide]:not([show-related-searches])) history-clusters-header-v2{grid-column:1/3;grid-row:1}#first-tile{grid-column:1/2;grid-row:3/6}:host([images-enabled_]) #first-tile{grid-row:3/7}:host([format=wide]) #first-tile{grid-column:3/4;grid-row:1/5}:host([format=wide]:not([show-related-searches])) #first-tile{grid-column:3/4;grid-row:1}#last-tile{grid-column:2/3;grid-row:3/6}:host([images-enabled_]) #last-tile{grid-row:3/7}:host([format=wide]) #last-tile{grid-column:4/5;grid-row:1/5}:host([format=wide]:not([show-related-searches])) #last-tile{grid-column:4/5;grid-row:1}#related-searches{background:var(--color-new-tab-page-module-item-background);border-radius:var(--ntp-module-item-border-radius);display:flex;flex-direction:column;grid-column:1/3;grid-row:6/8;width:100%}:host([images-enabled_]:not([format=wide])) #related-searches{grid-row:7/9}:host([format=wide]) #related-searches{grid-column:1/3;grid-row:3/5;width:100%}.related-search{flex-grow:1}#related-searches-divider{background-color:var(--color-new-tab-page-module-element-divider);border:none;height:1px;margin:0 16px}</style>
<div id="layout">
  <history-clusters-header-v2 on-disable-button-click="onDisableButtonClick_" on-dismiss-button-click="onDismissButtonClick_" on-done-button-click="onDoneButtonClick_" on-info-button-click="onInfoButtonClick_" on-show-all-button-click="onShowAllButtonClick_" on-suggest-click="recordClick_" cluster-label="[[computeUnquotedClusterLabel_(cluster)]]" normalized-url="[[cluster.visits.0.normalizedUrl]]" format$="[[format]]" show-related-searches$="[[showRelatedSearches]]">
  </history-clusters-header-v2>
  <ntp-history-clusters-visit-tile id="first-tile" visit="[[cluster.visits.1]]" discount="[[discounts.1]]" on-click="onVisitTileClick_" on-aux-click="onVisitTileClick_" format="[[format]]" show-related-searches$="[[showRelatedSearches]]" images-enabled="[[imagesEnabled_]]">
  </ntp-history-clusters-visit-tile>
  <template is="dom-if" if="[[shouldShowCartTile_(cart)]]" restamp>
    <ntp-history-clusters-cart-tile-v2 id="last-tile" cart="[[cart]]" on-click="recordClick_" on-aux-click="recordClick_" format="[[format]]" show-related-searches$="[[showRelatedSearches]]" images-enabled="[[imagesEnabled_]]">
    </ntp-history-clusters-cart-tile-v2>
  </template>
  <template is="dom-if" if="[[!shouldShowCartTile_(cart)]]" restamp>
    <ntp-history-clusters-visit-tile id="last-tile" visit="[[cluster.visits.2]]" discount="[[discounts.2]]" on-click="onVisitTileClick_" on-aux-click="onVisitTileClick_" format="[[format]]" show-related-searches$="[[showRelatedSearches]]" images-enabled="[[imagesEnabled_]]">
    </ntp-history-clusters-visit-tile>
  </template>
  <div id="related-searches" hidden="[[!showRelatedSearches]]">
    <ntp-history-clusters-suggest-tile-v2 id="first-related-search" class="related-search" related-search="[[cluster.relatedSearches.0]]" on-click="onSuggestTileClick_" on-aux-click="onSuggestTileClick_" is-first="true">
    </ntp-history-clusters-suggest-tile-v2>
    <div id="related-searches-divider"></div>
    <ntp-history-clusters-suggest-tile-v2 id="last-related-search" class="related-search" related-search="[[cluster.relatedSearches.1]]" on-click="onSuggestTileClick_" on-aux-click="onSuggestTileClick_">
    </ntp-history-clusters-suggest-tile-v2>
  </div>
</div>
<cr-lazy-render id="infoDialogRender">
  <template>
    <ntp-info-dialog inner-h-t-m-l="[[getInfo_(discounts)]]">
    </ntp-info-dialog>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_MODULE_ELEMENT_INSTANCES=3;const CLUSTER_MIN_REQUIRED_URL_VISITS=3;var HistoryClusterImageDisplayState;(function(HistoryClusterImageDisplayState){HistoryClusterImageDisplayState[HistoryClusterImageDisplayState["NONE"]=0]="NONE";HistoryClusterImageDisplayState[HistoryClusterImageDisplayState["SOME"]=1]="SOME";HistoryClusterImageDisplayState[HistoryClusterImageDisplayState["ALL"]=2]="ALL"})(HistoryClusterImageDisplayState||(HistoryClusterImageDisplayState={}));class HistoryClustersModuleElement extends(I18nMixin(PolymerElement)){constructor(){super(...arguments);this.setDisabledModulesListenerId_=null}static get is(){return"ntp-history-clusters-redesigned"}static get template(){return getTemplate$c()}static get properties(){return{layoutType:Number,cart:{type:Object,value:null},discounts:{type:Array,value:[]},cluster:{type:Object},format:{type:String,reflectToAttribute:true},imagesEnabled_:{type:Boolean,reflectToAttribute:true,value:()=>loadTimeData.getBoolean("historyClustersImagesEnabled")},showRelatedSearches:{type:Boolean,computed:`computeShowRelatedSearches(cluster)`,reflectToAttribute:true}}}connectedCallback(){super.connectedCallback();if(loadTimeData.getBoolean("modulesChromeCartInHistoryClustersModuleEnabled")){this.setDisabledModulesListenerId_=NewTabPageProxy.getInstance().callbackRouter.setDisabledModules.addListener((async(_,ids)=>{if(ids.includes("chrome_cart")){this.cart=null}else if(!this.cart){const{cart:cart}=await HistoryClustersProxyImpl.getInstance().handler.getCartForCluster(this.cluster);this.cart=cart}}))}}disconnectedCallback(){super.disconnectedCallback();if(this.setDisabledModulesListenerId_){NewTabPageProxy.getInstance().callbackRouter.removeListener(this.setDisabledModulesListenerId_)}}ready(){super.ready();HistoryClustersProxyImpl.getInstance().handler.recordLayoutTypeShown(this.imagesEnabled_?LayoutType.kImages:LayoutType.kTextOnly,this.cluster.id);listenOnce(window,"pagehide",(()=>{const visitTiles=Array.from(this.shadowRoot.querySelectorAll("ntp-history-clusters-visit-tile"));const count=visitTiles.reduce(((acc,tile)=>acc+(tile.hasImageUrl()?1:0)),0);const state=visitTiles.length===count?HistoryClusterImageDisplayState.ALL:count===0?HistoryClusterImageDisplayState.NONE:HistoryClusterImageDisplayState.SOME;chrome.metricsPrivate.recordEnumerationValue(`NewTabPage.HistoryClusters.ImageDisplayState`,state,Object.keys(HistoryClusterImageDisplayState).length)}))}computeShowRelatedSearches(){return this.cluster.relatedSearches.length>1}computeUnquotedClusterLabel_(){return this.cluster.label.substring(1,this.cluster.label.length-1)}shouldShowCartTile_(cart){return loadTimeData.getBoolean("modulesChromeCartInHistoryClustersModuleEnabled")&&!!cart}onDisableButtonClick_(){HistoryClustersProxyImpl.getInstance().handler.recordDisabled(this.cluster.id);const disableEvent=new CustomEvent("disable-module",{composed:true,detail:{message:loadTimeData.getStringF("modulesDisableToastMessage",loadTimeData.getString("modulesThisTypeOfCardText"))}});this.dispatchEvent(disableEvent)}onDismissButtonClick_(){HistoryClustersProxyImpl.getInstance().handler.updateClusterVisitsInteractionState(this.cluster.id,this.cluster.visits,InteractionState.kHidden);this.dispatchEvent(new CustomEvent("dismiss-module-instance",{bubbles:true,composed:true,detail:{message:loadTimeData.getStringF("dismissModuleToastMessage",this.cluster.label),restoreCallback:()=>{HistoryClustersProxyImpl.getInstance().handler.updateClusterVisitsInteractionState(this.cluster.id,this.cluster.visits,InteractionState.kDefault)}}}))}onDoneButtonClick_(){HistoryClustersProxyImpl.getInstance().handler.updateClusterVisitsInteractionState(this.cluster.id,this.cluster.visits,InteractionState.kDone);this.dispatchEvent(new CustomEvent("dismiss-module-instance",{bubbles:true,composed:true,detail:{message:loadTimeData.getStringF("dismissModuleToastMessage",this.cluster.label),restoreCallback:()=>{HistoryClustersProxyImpl.getInstance().handler.updateClusterVisitsInteractionState(this.cluster.id,this.cluster.visits,InteractionState.kDefault)}}}))}onInfoButtonClick_(){this.$.infoDialogRender.get().showModal()}onShowAllButtonClick_(){assert(this.cluster.label.length>=2,"Unexpected cluster label length");HistoryClustersProxyImpl.getInstance().handler.showJourneysSidePanel(this.computeUnquotedClusterLabel_());this.dispatchEvent(new Event("usage",{bubbles:true,composed:true}))}onSuggestTileClick_(e){this.recordTileClickIndex_(e.target,"Suggest");this.recordClick_()}onVisitTileClick_(e){this.recordTileClickIndex_(e.target,"Visit");this.recordClick_();this.maybeRecordDiscountClick_(e.target)}recordTileClickIndex_(tile,tileType){const layoutType=this.imagesEnabled_?LayoutType.kImages:LayoutType.kTextOnly;const index=Array.from(tile.parentNode.children).indexOf(tile);chrome.metricsPrivate.recordValue({metricName:`NewTabPage.HistoryClusters.Layout${layoutType}.${tileType}Tile.ClickIndex`,type:chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,min:0,max:10,buckets:10},index)}recordClick_(){HistoryClustersProxyImpl.getInstance().handler.recordClick(this.cluster.id);this.dispatchEvent(new Event("usage",{bubbles:true,composed:true}))}maybeRecordDiscountClick_(tile){if(tile.hasDiscount){chrome.metricsPrivate.recordUserAction(`NewTabPage.HistoryClusters.DiscountClicked`)}}getInfo_(discounts){const hasDiscount=discounts.some((discount=>!!discount));return this.i18nAdvanced(hasDiscount?"modulesHistoryWithDiscountInfo":"modulesJourneysInfo")}}customElements.define(HistoryClustersModuleElement.is,HistoryClustersModuleElement);async function createElement$1(cluster){const element=new HistoryClustersModuleElement;element.cluster=cluster;if(loadTimeData.getBoolean("modulesChromeCartInHistoryClustersModuleEnabled")){const{cart:cart}=await HistoryClustersProxyImpl.getInstance().handler.getCartForCluster(cluster);element.cart=cart}element.discounts=[];const{discounts:discounts}=await HistoryClustersProxyImpl.getInstance().handler.getDiscountsForCluster(cluster);for(const visit of cluster.visits){let discountInValue="";for(const[url,urlDiscounts]of discounts){if(url.url===visit.normalizedUrl.url&&urlDiscounts.length>0){discountInValue=urlDiscounts[0].valueInText;visit.normalizedUrl.url=urlDiscounts[0].annotatedVisitUrl.url}}element.discounts.push(discountInValue)}const hasDiscount=element.discounts.slice(0,CLUSTER_MIN_REQUIRED_URL_VISITS).some((discount=>discount.length>0));chrome.metricsPrivate.recordBoolean(`NewTabPage.HistoryClusters.HasDiscount`,hasDiscount);return element}async function createElements(){const{clusters:clusters}=await HistoryClustersProxyImpl.getInstance().handler.getClusters();if(!clusters||clusters.length===0){return null}const elements=[];for(let i=0;i<clusters.length;i++){if(elements.length===MAX_MODULE_ELEMENT_INSTANCES){break}if(clusters[i].visits.length>=CLUSTER_MIN_REQUIRED_URL_VISITS){elements.push(await createElement$1(clusters[i]))}}return elements}const historyClustersDescriptor=new ModuleDescriptor("history_clusters",createElements);function getTemplate$b(){return html`<!--_html_template_start_--><style>:host{background-color:var(--color-new-tab-page-module-background);border-radius:var(--ntp-module-border-radius)}@media (forced-colors:active){a,ntp-module-header-v2{border-radius:var(--ntp-module-item-border-radius);outline:var(--cr-border-hcm)}.tab{overflow:visible}}ntp-module-header-v2{background-color:var(--color-new-tab-page-module-background);margin:8px}:host-context(.focus-outline-visible) a:focus,a:focus-visible{box-shadow:var(--ntp-focus-shadow);outline:0}#tabs{background-color:var(--color-new-tab-page-module-item-background);border-radius:var(--ntp-module-item-border-radius);margin:8px}.tab{align-items:center;display:flex;height:52px;padding-bottom:2px;padding-top:2px;position:relative;text-decoration:none;overflow:hidden}.tab:hover #hover-layer{background:var(--color-new-tab-page-module-item-background-hovered);display:block;inset:0;pointer-events:none;position:absolute}#hover-layer{display:none}.tab:first-of-type{border-radius:var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius) 0 0}.tab:last-of-type{border-radius:0 0 var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius)}.tab-icon{height:18px;margin-inline-end:17px;margin-inline-start:17px;width:18px}.tab-info{min-width:0;padding-inline-end:16px}.date,.dot,.tab-device,.tab-domain,.tab-title{color:var(--color-new-tab-page-secondary-foreground)}.tab-device,.tab-domain,.tab-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tab-device{font-size:11px;line-height:13px}.tab-title{color:var(--color-new-tab-page-primary-foreground);font-size:13px;line-height:20px}.tab-description{display:flex;flex-direction:row;font-size:11px;line-height:13px}.date{white-space:nowrap}</style>
<ntp-module-header-v2 id="moduleHeaderElementV2" header-text="[[i18n('modulesTabResumptionTitle')]]" menu-item-groups="[[getMenuItemGroups_()]]" more-actions-text="[[i18nRecursive('',
                                  'modulesMoreActions',
                                  'modulesDriveSentence')]]" on-disable-button-click="onDisableButtonClick_" on-info-button-click="onInfoButtonClick_" on-menu-button-click="onMenuButtonClick_">
</ntp-module-header-v2>
<div id="tabs">
  <template id="tabRepeat" is="dom-repeat" items="[[tabs]]">
    <a class="tab" href="[[item.url.url]]" on-click="onTabClick_">
      <div id="hover-layer"></div>
      <page-favicon id="icon" url="[[item.url]]" size="16">
      </page-favicon>
      <div class="tab-info">
        <div class="tab-device">[[item.sessionName]]</div>
        <div class="tab-title">[[item.title]]</div>
        <div class="tab-description">
          <div class="tab-domain">[[item.url.url]]</div>
          <span class="dot">&nbsp&#8226&nbsp</span>
          <div class="date">[[item.relativeTime]]</div>
        </div>
      </div>
    </a>
  </template>
</div>
<cr-lazy-render id="infoDialogRender">
  <template>
    <ntp-info-dialog inner-h-t-m-l="[[i18nAdvanced('modulesTabResumptionInfo')]]">
    </ntp-info-dialog>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class TabResumptionProxyImpl{constructor(handler){this.handler=handler}static getInstance(){if(instance$3){return instance$3}const handler=PageHandler$2.getRemote();return instance$3=new TabResumptionProxyImpl(handler)}static setInstance(obj){instance$3=obj}}let instance$3=null;
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_TABS=10;class TabResumptionModuleElement extends(I18nMixin(PolymerElement)){static get is(){return"ntp-tab-resumption"}static get template(){return getTemplate$b()}static get properties(){return{tabs:{type:Object}}}getMenuItemGroups_(){return[[{action:"disable",icon:"modules:block",text:this.i18nRecursive("","modulesDisableButtonTextV2","modulesThisTypeOfCardText")},{action:"info",icon:"modules:info",text:this.i18n("moduleInfoButtonTitle")}],[{action:"customize-module",icon:"modules:tune",text:this.i18n("modulesCustomizeButtonText")}]]}onDisableButtonClick_(){const disableEvent=new CustomEvent("disable-module",{composed:true,detail:{message:loadTimeData.getStringF("modulesDisableToastMessage",loadTimeData.getString("modulesThisTypeOfCardText"))}});this.dispatchEvent(disableEvent)}onInfoButtonClick_(){this.$.infoDialogRender.get().showModal()}onMenuButtonClick_(e){this.$.moduleHeaderElementV2.showAt(e)}}customElements.define(TabResumptionModuleElement.is,TabResumptionModuleElement);async function createElement(){const{tabs:tabs}=await TabResumptionProxyImpl.getInstance().handler.getTabs();if(!tabs||tabs.length===0){return null}const element=new TabResumptionModuleElement;element.tabs=tabs.slice(0,MAX_TABS);return element}const tabResumptionDescriptor=new ModuleDescriptor("tab_resumption",createElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const modulesRedesignedEnabled=loadTimeData.getBoolean("modulesRedesignedEnabled");const descriptors=[];descriptors.push(recipeTasksDescriptor);descriptors.push(chromeCartDescriptor);descriptors.push(modulesRedesignedEnabled?driveDescriptor:driveDescriptor$1);descriptors.push(photosDescriptor);descriptors.push(feedDescriptor);descriptors.push(modulesRedesignedEnabled?historyClustersDescriptor:historyClustersDescriptor$1);descriptors.push(tabResumptionDescriptor);async function counterfactualLoad(){if(!loadTimeData.getBoolean("modulesEnabled")&&loadTimeData.getBoolean("modulesLoadEnabled")){const modules=await ModuleRegistry.getInstance().initializeModules(loadTimeData.getInteger("modulesLoadTimeout"));if(modules){NewTabPageProxy.getInstance().handler.onModulesLoadedWithData(modules.map((module=>module.descriptor.id)))}}if(!loadTimeData.getBoolean("historyClustersModuleEnabled")&&loadTimeData.getBoolean("historyClustersModuleLoadEnabled")){HistoryClustersProxyImpl$1.getInstance().handler.getClusters()}}counterfactualLoad();
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class MostVisitedBrowserProxy{constructor(handler,callbackRouter){this.handler=handler;this.callbackRouter=callbackRouter}static getInstance(){if(instance$2){return instance$2}const callbackRouter=new MostVisitedPageCallbackRouter;const handler=new MostVisitedPageHandlerRemote;const factory=MostVisitedPageHandlerFactory.getRemote();factory.createPageHandler(callbackRouter.$.bindNewPipeAndPassRemote(),handler.$.bindNewPipeAndPassReceiver());instance$2=new MostVisitedBrowserProxy(handler,callbackRouter);return instance$2}static setInstance(obj){instance$2=obj}}let instance$2=null;function getTemplate$a(){return html`<!--_html_template_start_--><style include="cr-hidden-style cr-icons">:host{--icon-button-color-active:var(--google-grey-700);--icon-button-color:var(--google-grey-600);--icon-size:48px;--tile-background-color:rgb(229, 231, 232);--tile-hover-color:rgba(var(--google-grey-900-rgb), .1);--tile-size:112px;--title-height:32px}@media (prefers-color-scheme:dark){:host{--tile-background-color:var(--google-grey-100)}}:host([is-dark_]){--icon-button-color-active:var(--google-grey-300);--icon-button-color:white;--tile-hover-color:rgba(255, 255, 255, .1)}#container{--content-width:calc(var(--column-count) * var(--tile-size)
      
      + 1px);display:flex;flex-wrap:wrap;height:calc(var(--row-count) * var(--tile-size));justify-content:center;margin-bottom:8px;opacity:0;overflow:hidden;padding:2px;transition:opacity .3s ease-in-out;width:calc(var(--content-width) + 12px)}:host([visible_]) #container{opacity:1}#addShortcutIcon,.query-tile-icon{-webkit-mask-repeat:no-repeat;-webkit-mask-size:100%;height:24px;width:24px}#addShortcutIconContainer{background-color:var(--add-shortcut-background-color,var(--tile-background-color))}:host-context([chrome-refresh-2023]) #addShortcutIconContainer{margin-inline-start:auto;margin-inline-end:auto}#addShortcutIcon{-webkit-mask-image:url(chrome://resources/images/add.svg);background-color:var(--add-shortcut-foreground-color,var(--google-grey-900))}.query-tile-icon{-webkit-mask-image:url(chrome://resources/images/icon_search.svg);background-color:var(--google-grey-700)}@media (forced-colors:active){#addShortcutIcon,.query-tile-icon{background-color:ButtonText}}:host([use-white-tile-icon_]) #addShortcutIcon{background-color:#fff}:host([use-white-tile-icon_]) .query-tile-icon{background-color:var(--google-grey-400)}#addShortcut,.tile{-webkit-tap-highlight-color:transparent;align-items:center;border-radius:4px;box-sizing:border-box;cursor:pointer;display:flex;flex-direction:column;height:var(--tile-size);opacity:1;outline:0;position:relative;text-decoration:none;transition-duration:.3s;transition-property:left,top;transition-timing-function:ease-in-out;user-select:none;width:var(--tile-size)}.tile a{border-radius:4px;display:inline-block;height:100%;outline:0;position:absolute;touch-action:none;width:100%}:host-context(.focus-outline-visible) #addShortcut:focus,:host-context(.focus-outline-visible) .tile a:focus{box-shadow:var(--most-visited-focus-shadow)}@media (forced-colors:active){:host-context(.focus-outline-visible) #addShortcut:focus,:host-context(.focus-outline-visible) .tile a:focus{outline:var(--cr-focus-outline-hcm)}}#addShortcut{background-color:transparent;border:none;box-shadow:none;justify-content:unset;padding:0}.force-hover,:host(:not([reordering_])) #addShortcut:hover,:host(:not([reordering_])) .tile:hover{background-color:var(--tile-hover-color)}.tile-icon{align-items:center;background-color:var(--tile-background-color);border-radius:50%;display:flex;flex-shrink:0;height:var(--icon-size);justify-content:center;margin-top:16px;width:var(--icon-size)}.tile-icon img{height:24px;width:24px}.tile-title{align-items:center;border-radius:calc(var(--title-height)/ 2 + 2px);color:var(--most-visited-text-color);display:flex;height:var(--title-height);line-height:calc(var(--title-height)/ 2);margin-top:6px;padding:2px 8px;width:88px}.tile-title span{font-weight:400;overflow:hidden;text-align:center;text-overflow:ellipsis;text-shadow:var(--most-visited-text-shadow);white-space:nowrap;width:100%}.tile[query-tile] .tile-title span{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;white-space:initial}.title-rtl{direction:rtl}.title-ltr{direction:ltr}.tile.dragging{background-color:var(--tile-hover-color);transition-property:none;z-index:2}cr-icon-button{--cr-icon-button-fill-color:var(--icon-button-color);--cr-icon-button-size:28px;--cr-icon-button-transition:none;margin:4px 2px;opacity:0;position:absolute;right:0;top:0;transition:opacity .1s ease-in-out}:host-context([dir=rtl]) cr-icon-button{left:0;right:unset}.force-hover cr-icon-button,:host(:not([reordering_])) .tile:hover cr-icon-button{opacity:1;transition-delay:.4s}:host(:not([reordering_])) cr-icon-button:active,:host(:not([reordering_])) cr-icon-button:hover,:host-context(.focus-outline-visible):host(:not([reordering_])) cr-icon-button:focus{--cr-icon-button-fill-color:var(--icon-button-color-active);opacity:1;transition-delay:0s}:host-context([chrome-refresh-2023]) #dialogContent{height:160px}</style>
<div id="container" hidden$="[[!visible_]]" style="--tile-background-color:[[rgbaOrInherit_(theme.backgroundColor) ]];--column-count:[[columnCount_]];--row-count:[[rowCount_]]">
  <dom-repeat id="tiles" items="[[tiles_]]" on-dom-change="onTilesRendered_">
    <template>
      <div class="tile" query-tile$="[[item.isQueryTile]]" hidden$="[[isHidden_(index, maxVisibleTiles_)]]" title$="[[item.title]]" on-dragstart="onDragStart_" on-touchstart="onTouchStart_" on-click="onTileClick_" on-mouseenter="onTileHover_" on-mouseleave="onTileExit_" on-mousedown="onTileMouseDown_" on-keydown="onTileKeyDown_" draggable="true">
        <a href$="[[item.url.url]]" aria-label="[[item.title]]" draggable="false">
        </a>
        <cr-icon-button id="actionMenuButton" class="icon-more-vert" title="[[getMoreActionText_(item.title)]]" on-click="onTileActionButtonClick_" tabindex="0" hidden$="[[!customLinksEnabled_]]"></cr-icon-button>
        <cr-icon-button id="removeButton" class="icon-clear" title="[[i18n('linkRemove')]]" on-click="onTileRemoveButtonClick_" tabindex="0" hidden$="[[customLinksEnabled_]]"></cr-icon-button>
        <div class="tile-icon">
          <img src$="[[getFaviconUrl_(item.url)]]" draggable="false" hidden$="[[item.isQueryTile]]" alt="">
          <div class="query-tile-icon" draggable="false" hidden$="[[!item.isQueryTile]]"></div>
        </div>
        <div class$="tile-title [[getTileTitleDirectionClass_(item)]]">
          <span>[[item.title]]</span>
        </div>
      </div>
    </template>
  </dom-repeat>
  <cr-button id="addShortcut" tabindex="0" on-click="onAdd_" hidden$="[[!showAdd_]]" on-keydown="onAddShortcutKeyDown_" aria-label="[[i18n('addLinkTitle')]]" title="[[i18n('addLinkTitle')]]" noink>
    <div id="addShortcutIconContainer" class="tile-icon">
      <div id="addShortcutIcon" draggable="false"></div>
    </div>
    <div class="tile-title">
      <span>[[i18n('addLinkTitle')]]</span>
    </div>
  </cr-button>
  <cr-dialog id="dialog" on-close="onDialogClose_">
    <div slot="title">[[dialogTitle_]]</div>
    <div slot="body" id="dialogContent">
      <cr-input id="dialogInputName" label="[[i18n('nameField')]]" value="{{dialogTileTitle_}}" spellcheck="false" autofocus></cr-input>
      <cr-input id="dialogInputUrl" label="[[i18n('urlField')]]" value="{{dialogTileUrl_}}" invalid="[[dialogTileUrlInvalid_]]" error-message="[[dialogTileUrlError_]]" spellcheck="false" type="url" on-blur="onDialogTileUrlBlur_">
      </cr-input>
    </div>
    <div slot="button-container">
      <cr-button class="cancel-button" on-click="onDialogCancel_">
        [[i18n('linkCancel')]]
      </cr-button>
      <cr-button class="action-button" on-click="onSave_" disabled$="[[dialogSaveDisabled_]]">
        [[i18n('linkDone')]]
      </cr-button>
    </div>
  </cr-dialog>
  <cr-action-menu id="actionMenu">
    <button id="actionMenuEdit" class="dropdown-item" on-click="onEdit_">
      [[i18n('editLinkTitle')]]
    </button>
    <button id="actionMenuRemove" class="dropdown-item" on-click="onRemove_">
      [[i18n('linkRemove')]]
    </button>
  </cr-action-menu>
</div>
<cr-toast id="toast" duration="10000">
  <div>[[toastContent_]]</div>
  <dom-if if="[[showToastButtons_]]">
    <template>
      <cr-button id="undo" aria-label="[[i18n('undoDescription')]]" on-click="onUndoClick_">
        [[i18n('undo')]]
      </cr-button>
      <cr-button id="restore" aria-label$="[[getRestoreButtonText_(customLinksEnabled_)]]" on-click="onRestoreDefaultsClick_">
        [[getRestoreButtonText_(customLinksEnabled_)]]
      </cr-button>
    </template>
  </dom-if>
</cr-toast>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class MostVisitedWindowProxy{matchMedia(query){return window.matchMedia(query)}now(){return Date.now()}static getInstance(){return instance$1||(instance$1=new MostVisitedWindowProxy)}static setInstance(obj){instance$1=obj}}let instance$1=null;
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function resetTilePosition(tile){tile.style.position="";tile.style.left="";tile.style.top=""}function setTilePosition(tile,{x:x,y:y}){tile.style.position="fixed";tile.style.left=`${x}px`;tile.style.top=`${y}px`}function getHitIndex(rects,x,y){return rects.findIndex((r=>x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom))}function normalizeUrl(urlString){try{const url=new URL(urlString.includes("://")?urlString:`https://${urlString}/`);if(["http:","https:"].includes(url.protocol)){return url}}catch(e){}return null}const MostVisitedElementBase=I18nMixin(PolymerElement);class MostVisitedElement extends MostVisitedElementBase{static get is(){return"cr-most-visited"}static get template(){return getTemplate$a()}static get properties(){return{theme:Object,singleRow:{type:Boolean,value:false,observer:"onSingleRowChange_"},reflowOnOverflow:{type:Boolean,value:false},useWhiteTileIcon_:{type:Boolean,reflectToAttribute:true,computed:`computeUseWhiteTileIcon_(theme)`},columnCount_:{type:Number,computed:`computeColumnCount_(singleRow, tiles_, maxVisibleColumnCount_, maxTiles_)`},rowCount_:{type:Number,computed:"computeRowCount_(singleRow, columnCount_, tiles_, showAdd_)"},customLinksEnabled_:{type:Boolean,reflectToAttribute:true},dialogTileTitle_:String,dialogTileUrl_:{type:String,observer:"onDialogTileUrlChange_"},dialogTileUrlInvalid_:{type:Boolean,value:false},dialogTitle_:String,dialogSaveDisabled_:{type:Boolean,computed:`computeDialogSaveDisabled_(dialogTitle_, dialogTileUrl_,\n            dialogShortcutAlreadyExists_)`},dialogShortcutAlreadyExists_:{type:Boolean,computed:"computeDialogShortcutAlreadyExists_(tiles_, dialogTileUrl_)"},dialogTileUrlError_:{type:String,computed:`computeDialogTileUrlError_(dialogTileUrl_,\n            dialogShortcutAlreadyExists_)`},isDark_:{type:Boolean,reflectToAttribute:true,computed:`computeIsDark_(theme)`},reordering_:{type:Boolean,value:false,reflectToAttribute:true},maxTiles_:{type:Number,computed:"computeMaxTiles_(customLinksEnabled_)"},maxVisibleTiles_:{type:Number,computed:"computeMaxVisibleTiles_(columnCount_, rowCount_)"},showAdd_:{type:Boolean,value:false,computed:"computeShowAdd_(tiles_, maxVisibleTiles_, customLinksEnabled_)"},showToastButtons_:Boolean,maxVisibleColumnCount_:Number,tiles_:Array,toastContent_:String,visible_:{type:Boolean,reflectToAttribute:true}}}get tileElements_(){return Array.from(this.shadowRoot.querySelectorAll(".tile:not([hidden])"))}constructor(){performance.mark("most-visited-creation-start");super();this.adding_=false;this.setMostVisitedInfoListenerId_=null;this.actionMenuTargetIndex_=-1;this.tileRects_=[];this.callbackRouter_=MostVisitedBrowserProxy.getInstance().callbackRouter;this.pageHandler_=MostVisitedBrowserProxy.getInstance().handler;this.windowProxy_=MostVisitedWindowProxy.getInstance();this.dragOffset_=null;this.mediaEventTracker_=new EventTracker;this.eventTracker_=new EventTracker}connectedCallback(){super.connectedCallback();this.isRtl_=window.getComputedStyle(this)["direction"]==="rtl";this.onSingleRowChange_();this.setMostVisitedInfoListenerId_=this.callbackRouter_.setMostVisitedInfo.addListener((info=>{performance.measure("most-visited-mojo","most-visited-mojo-start");this.visible_=info.visible;this.customLinksEnabled_=info.customLinksEnabled;assert(this.maxTiles_);this.tiles_=info.tiles.slice(0,this.maxTiles_)}));performance.mark("most-visited-mojo-start");this.eventTracker_.add(document,"visibilitychange",(()=>{if(document.visibilityState==="visible"){this.pageHandler_.updateMostVisitedInfo()}}));this.pageHandler_.updateMostVisitedInfo();FocusOutlineManager.forDocument(document)}disconnectedCallback(){super.disconnectedCallback();this.mediaEventTracker_.removeAll();this.eventTracker_.removeAll();this.ownerDocument.removeEventListener("keydown",this.boundOnDocumentKeyDown_)}ready(){super.ready();this.boundOnDocumentKeyDown_=e=>this.onDocumentKeyDown_(e);this.ownerDocument.addEventListener("keydown",this.boundOnDocumentKeyDown_);performance.measure("most-visited-creation","most-visited-creation-start")}rgbaOrInherit_(skColor){return skColor?skColorToRgba(skColor):"inherit"}enableForceHover_(index){this.tileElements_[index].classList.add("force-hover")}clearForceHover_(){const forceHover=this.shadowRoot.querySelector(".force-hover");if(forceHover){forceHover.classList.remove("force-hover")}}computeColumnCount_(){const shortcutCount=this.tiles_?this.tiles_.length:0;const canShowAdd=this.maxTiles_>shortcutCount;const tileCount=Math.min(this.maxTiles_,shortcutCount+(canShowAdd?1:0));const columnCount=tileCount<=this.maxVisibleColumnCount_?tileCount:Math.min(this.maxVisibleColumnCount_,Math.ceil(tileCount/(this.singleRow?1:2)));return columnCount||3}computeRowCount_(){if(this.columnCount_===0){return 0}if(this.reflowOnOverflow&&this.tiles_){return Math.ceil((this.tiles_.length+(this.showAdd_?1:0))/this.columnCount_)}if(this.singleRow){return 1}const shortcutCount=this.tiles_?this.tiles_.length:0;return this.columnCount_<=shortcutCount?2:1}computeMaxTiles_(){return this.customLinksEnabled_?10:8}computeMaxVisibleTiles_(){if(this.reflowOnOverflow){return this.computeMaxTiles_()}return this.columnCount_*this.rowCount_}computeShowAdd_(){return this.customLinksEnabled_&&this.tiles_&&this.tiles_.length<this.maxVisibleTiles_}computeDialogSaveDisabled_(){return!this.dialogTileUrl_.trim()||normalizeUrl(this.dialogTileUrl_)===null||this.dialogShortcutAlreadyExists_}computeDialogShortcutAlreadyExists_(){const dialogTileHref=(normalizeUrl(this.dialogTileUrl_)||{}).href;if(!dialogTileHref){return false}return(this.tiles_||[]).some((({url:{url:url}},index)=>{if(index===this.actionMenuTargetIndex_){return false}const otherUrl=normalizeUrl(url);return otherUrl&&otherUrl.href===dialogTileHref}))}computeDialogTileUrlError_(){return loadTimeData.getString(this.dialogShortcutAlreadyExists_?"shortcutAlreadyExists":"invalidUrl")}computeIsDark_(){return this.theme?this.theme.isDark:false}computeUseWhiteTileIcon_(){return this.theme?this.theme.useWhiteTileIcon:false}dragEnd_(){if(!this.customLinksEnabled_){this.reordering_=false;return}this.dragOffset_=null;const dragElement=this.shadowRoot.querySelector(".tile.dragging");const droppedElement=this.shadowRoot.querySelector(".tile.dropped");if(!dragElement&&!droppedElement){this.reordering_=false;return}if(dragElement){dragElement.classList.remove("dragging");this.tileElements_.forEach((el=>resetTilePosition(el)));resetTilePosition(this.$.addShortcut)}else if(droppedElement){droppedElement.classList.remove("dropped")}}drop_(x,y){if(!this.customLinksEnabled_){return}const dragElement=this.shadowRoot.querySelector(".tile.dragging");if(!dragElement){return}const dragIndex=this.$.tiles.modelForElement(dragElement).index;const dropIndex=getHitIndex(this.tileRects_,x,y);if(dragIndex!==dropIndex&&dropIndex>-1){const[draggingTile]=this.tiles_.splice(dragIndex,1);this.tiles_.splice(dropIndex,0,draggingTile);this.notifySplices("tiles_",[{index:dragIndex,removed:[draggingTile],addedCount:0,object:this.tiles_,type:"splice"},{index:dropIndex,removed:[],addedCount:1,object:this.tiles_,type:"splice"}]);this.pageHandler_.reorderMostVisitedTile(draggingTile.url,dropIndex);dragElement.classList.remove("dragging");dragElement.classList.add("dropped");this.tileElements_.forEach((el=>resetTilePosition(el)));resetTilePosition(this.$.addShortcut)}}dragOver_(x,y){const dragElement=this.shadowRoot.querySelector(".tile.dragging");if(!dragElement){this.reordering_=false;return}const dragIndex=this.$.tiles.modelForElement(dragElement).index;setTilePosition(dragElement,{x:x-this.dragOffset_.x,y:y-this.dragOffset_.y});const dropIndex=getHitIndex(this.tileRects_,x,y);this.tileElements_.forEach(((element,i)=>{let positionIndex;if(i===dragIndex){return}else if(dropIndex===-1){positionIndex=i}else if(dragIndex<dropIndex&&dragIndex<=i&&i<=dropIndex){positionIndex=i-1}else if(dragIndex>dropIndex&&dragIndex>=i&&i>=dropIndex){positionIndex=i+1}else{positionIndex=i}setTilePosition(element,this.tileRects_[positionIndex])}))}dragStart_(dragElement,x,y){this.clearForceHover_();dragElement.classList.add("dragging");const dragElementRect=dragElement.getBoundingClientRect();this.dragOffset_={x:x-dragElementRect.x,y:y-dragElementRect.y};const tileElements=this.tileElements_;this.tileRects_=tileElements.map((t=>t.getBoundingClientRect()));if(this.showAdd_){const element=this.$.addShortcut;setTilePosition(element,element.getBoundingClientRect())}tileElements.forEach(((tile,i)=>{setTilePosition(tile,this.tileRects_[i])}));this.reordering_=true}getFaviconUrl_(url){const faviconUrl=new URL("chrome://favicon2/");faviconUrl.searchParams.set("size","24");faviconUrl.searchParams.set("scaleFactor","1x");faviconUrl.searchParams.set("showFallbackMonogram","");faviconUrl.searchParams.set("pageUrl",url.url);return faviconUrl.href}getRestoreButtonText_(){return loadTimeData.getString(this.customLinksEnabled_?"restoreDefaultLinks":"restoreThumbnailsShort")}getTileTitleDirectionClass_(tile){return tile.titleDirection===TextDirection.RIGHT_TO_LEFT?"title-rtl":"title-ltr"}isHidden_(index){if(this.reflowOnOverflow){return false}return index>=this.maxVisibleTiles_}onSingleRowChange_(){if(!this.isConnected){return}this.mediaEventTracker_.removeAll();const queryLists=[];const updateCount=()=>{const index=queryLists.findIndex((listener=>listener.matches));this.maxVisibleColumnCount_=3+(index>-1?queryLists.length-index:0)};const maxColumnCount=this.singleRow?10:5;for(let i=maxColumnCount;i>=4;i--){const query=`(min-width: ${112*(i+1)}px)`;const queryList=this.windowProxy_.matchMedia(query);this.mediaEventTracker_.add(queryList,"change",updateCount);queryLists.push(queryList)}updateCount()}onAdd_(){this.dialogTitle_=loadTimeData.getString("addLinkTitle");this.dialogTileTitle_="";this.dialogTileUrl_="";this.dialogTileUrlInvalid_=false;this.adding_=true;this.$.dialog.showModal()}onAddShortcutKeyDown_(e){if(hasKeyModifiers(e)){return}if(!this.tiles_||this.tiles_.length===0){return}const backKey=this.isRtl_?"ArrowRight":"ArrowLeft";if(e.key===backKey||e.key==="ArrowUp"){this.tileFocus_(this.tiles_.length-1)}}onDialogCancel_(){this.actionMenuTargetIndex_=-1;this.$.dialog.cancel()}onDialogClose_(){this.dialogTileUrl_="";if(this.adding_){this.$.addShortcut.focus()}this.adding_=false}onDialogTileUrlBlur_(){if(this.dialogTileUrl_.length>0&&(normalizeUrl(this.dialogTileUrl_)===null||this.dialogShortcutAlreadyExists_)){this.dialogTileUrlInvalid_=true}}onDialogTileUrlChange_(){this.dialogTileUrlInvalid_=false}onDocumentKeyDown_(e){if(e.altKey||e.shiftKey){return}const modifier=isMac?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey;if(modifier&&e.key==="z"){e.preventDefault();this.onUndoClick_()}}onDragStart_(e){if(!this.customLinksEnabled_){return}if(e.dataTransfer){e.dataTransfer.setDragImage(new Image,0,0)}this.dragStart_(e.target,e.x,e.y);const dragOver=e=>{e.preventDefault();e.dataTransfer.dropEffect="move";this.dragOver_(e.x,e.y)};const drop=e=>{this.drop_(e.x,e.y);const dropIndex=getHitIndex(this.tileRects_,e.x,e.y);if(dropIndex!==-1){this.enableForceHover_(dropIndex)}this.addEventListener("pointermove",(()=>{this.clearForceHover_();this.reordering_=false}),{once:true})};this.ownerDocument.addEventListener("dragover",dragOver);this.ownerDocument.addEventListener("drop",drop);this.ownerDocument.addEventListener("dragend",(_=>{this.ownerDocument.removeEventListener("dragover",dragOver);this.ownerDocument.removeEventListener("drop",drop);this.dragEnd_()}),{once:true})}onEdit_(){this.$.actionMenu.close();this.dialogTitle_=loadTimeData.getString("editLinkTitle");const tile=this.tiles_[this.actionMenuTargetIndex_];this.dialogTileTitle_=tile.title;this.dialogTileUrl_=tile.url.url;this.dialogTileUrlInvalid_=false;this.$.dialog.showModal()}onRestoreDefaultsClick_(){if(!this.$.toast.open||!this.showToastButtons_){return}this.$.toast.hide();this.pageHandler_.restoreMostVisitedDefaults()}async onRemove_(){this.$.actionMenu.close();await this.tileRemove_(this.actionMenuTargetIndex_);this.actionMenuTargetIndex_=-1}async onSave_(){const newUrl={url:normalizeUrl(this.dialogTileUrl_).href};this.$.dialog.close();let newTitle=this.dialogTileTitle_.trim();if(newTitle.length===0){newTitle=this.dialogTileUrl_}if(this.adding_){const{success:success}=await this.pageHandler_.addMostVisitedTile(newUrl,newTitle);this.toast_(success?"linkAddedMsg":"linkCantCreate",success)}else{const{url:url,title:title}=this.tiles_[this.actionMenuTargetIndex_];if(url.url!==newUrl.url||title!==newTitle){const{success:success}=await this.pageHandler_.updateMostVisitedTile(url,newUrl,newTitle);this.toast_(success?"linkEditedMsg":"linkCantEdit",success)}this.actionMenuTargetIndex_=-1}}onTileActionButtonClick_(e){e.preventDefault();this.actionMenuTargetIndex_=e.model.index;this.$.actionMenu.showAt(e.target)}onTileRemoveButtonClick_(e){e.preventDefault();this.tileRemove_(e.model.index)}onTileClick_(e){if(e.defaultPrevented){return}if(loadTimeData.getBoolean("handleMostVisitedNavigationExplicitly")){e.preventDefault()}this.pageHandler_.onMostVisitedTileNavigation(e.model.item,e.model.index,e.button||0,e.altKey,e.ctrlKey,e.metaKey,e.shiftKey)}onTileKeyDown_(e){if(hasKeyModifiers(e)){return}if(e.key!=="ArrowLeft"&&e.key!=="ArrowRight"&&e.key!=="ArrowUp"&&e.key!=="ArrowDown"&&e.key!=="Delete"){return}const index=e.model.index;if(e.key==="Delete"){this.tileRemove_(index);return}const advanceKey=this.isRtl_?"ArrowLeft":"ArrowRight";const delta=e.key===advanceKey||e.key==="ArrowDown"?1:-1;this.tileFocus_(Math.max(0,index+delta))}onTileHover_(e){if(e.defaultPrevented){return}if(loadTimeData.getBoolean("prerenderEnabled")&&loadTimeData.getInteger("prerenderStartTimeThreshold")>=0){this.preloadingTimer_=setTimeout((()=>{this.pageHandler_.prerenderMostVisitedTile(e.model.item,true)}),loadTimeData.getInteger("prerenderStartTimeThreshold"))}}onTileMouseDown_(e){if(e.defaultPrevented){return}if(loadTimeData.getBoolean("prerenderEnabled")){this.pageHandler_.prerenderMostVisitedTile(e.model.item,false)}}onTileExit_(e){if(e.defaultPrevented){return}if(this.preloadingTimer_){clearTimeout(this.preloadingTimer_)}this.pageHandler_.cancelPrerender()}onUndoClick_(){if(!this.$.toast.open||!this.showToastButtons_){return}this.$.toast.hide();this.pageHandler_.undoMostVisitedTileAction()}onTouchStart_(e){if(this.reordering_||!this.customLinksEnabled_){return}const tileElement=e.composedPath().find((el=>el.classList&&el.classList.contains("tile")));if(!tileElement){return}const{clientX:clientX,clientY:clientY}=e.changedTouches[0];this.dragStart_(tileElement,clientX,clientY);const touchMove=e=>{const{clientX:clientX,clientY:clientY}=e.changedTouches[0];this.dragOver_(clientX,clientY)};const touchEnd=e=>{this.ownerDocument.removeEventListener("touchmove",touchMove);tileElement.removeEventListener("touchend",touchEnd);tileElement.removeEventListener("touchcancel",touchEnd);const{clientX:clientX,clientY:clientY}=e.changedTouches[0];this.drop_(clientX,clientY);this.dragEnd_();this.reordering_=false};this.ownerDocument.addEventListener("touchmove",touchMove);tileElement.addEventListener("touchend",touchEnd,{once:true});tileElement.addEventListener("touchcancel",touchEnd,{once:true})}tileFocus_(index){if(index<0){return}const tileElements=this.tileElements_;if(index<tileElements.length){tileElements[index].querySelector("a").focus()}else if(this.showAdd_&&index===tileElements.length){this.$.addShortcut.focus()}}toast_(msgId,showButtons){this.toastContent_=loadTimeData.getString(msgId);this.showToastButtons_=showButtons;this.$.toast.show()}tileRemove_(index){const{url:url,isQueryTile:isQueryTile}=this.tiles_[index];this.pageHandler_.deleteMostVisitedTile(url);this.toast_("linkRemovedMsg",this.customLinksEnabled_||!isQueryTile);afterNextRender(this,(()=>this.tileFocus_(index)))}onTilesRendered_(){performance.measure("most-visited-rendered");assert(this.maxVisibleTiles_);this.pageHandler_.onMostVisitedTilesRendered(this.tiles_.slice(0,this.maxVisibleTiles_),this.windowProxy_.now())}getMoreActionText_(title){return loadTimeData.getString("shortcutMoreActions")?loadTimeData.getStringF("shortcutMoreActions",title):""}}customElements.define(MostVisitedElement.is,MostVisitedElement);
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PageImageServiceBrowserProxy{handler;constructor(handler){this.handler=handler}static getInstance(){return instance||(instance=new PageImageServiceBrowserProxy(PageImageServiceHandler.getRemote()))}static setInstance(obj){instance=obj}}let instance=null;function getTemplate$9(){return html`<!--_html_template_start_--><style>#lensForm{display:none}</style>

<div id="lensForm">
  <form id="fileForm" action="[[uploadFileAction_]]" enctype="multipart/form-data" method="POST">
    <input id="fileInput" name="encoded_image" type="file" accept="[[supportedFileTypes_]]" on-change="handleFileInputChange_">
  </form>
  <form id="urlForm" action="[[uploadUrlAction_]]" method="GET">
    <input name="url" value="[[uploadUrl_]]">
    <input name="ep" value="[[uploadUrlEntrypoint_]]">
    <input name="hl" value="[[language_]]">
    <input name="st" value="[[startTime_]]"><input>
    <input name="cd" value="[[clientData_]]"><input>
    <input name="re" value="[[renderingEnvironment_]]">
    <input name="s" value="[[chromiumSurface_]]">
  </form>
  
  <iframe src="https://lens.google.com/gen204" style="display:none" alt="">
  </iframe>
</div>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SCOTTY_UPLOAD_FILE_ACTION="https://lens.google.com/upload";const DIRECT_UPLOAD_FILE_ACTION="https://lens.google.com/v3/upload";const UPLOAD_FILE_ENTRYPOINT="cntpubb";const UPLOAD_BY_URL_ACTION="https://lens.google.com/uploadbyurl";const UPLOAD_URL_ENTRYPOINT="cntpubu";const RENDERING_ENVIRONMENT="df";const CHROMIUM_SURFACE="4";const MAX_URL_LENGTH=2e3;const MAX_FILE_SIZE_BYTES=20*1024*1024;var LensErrorType;(function(LensErrorType){LensErrorType[LensErrorType["MULTIPLE_FILES"]=0]="MULTIPLE_FILES";LensErrorType[LensErrorType["NO_FILE"]=1]="NO_FILE";LensErrorType[LensErrorType["FILE_TYPE"]=2]="FILE_TYPE";LensErrorType[LensErrorType["FILE_SIZE"]=3]="FILE_SIZE";LensErrorType[LensErrorType["INVALID_SCHEME"]=4]="INVALID_SCHEME";LensErrorType[LensErrorType["INVALID_URL"]=5]="INVALID_URL";LensErrorType[LensErrorType["LENGTH_TOO_GREAT"]=6]="LENGTH_TOO_GREAT"})(LensErrorType||(LensErrorType={}));var LensSubmitType;(function(LensSubmitType){LensSubmitType[LensSubmitType["FILE"]=0]="FILE";LensSubmitType[LensSubmitType["URL"]=1]="URL"})(LensSubmitType||(LensSubmitType={}));class LensFormElement extends PolymerElement{constructor(){super(...arguments);this.uploadFileAction_=SCOTTY_UPLOAD_FILE_ACTION;this.uploadUrl_="";this.startTime_=null}static get is(){return"ntp-lens-form"}static get template(){return getTemplate$9()}static get properties(){return{supportedFileTypes_:{type:String,readOnly:true,value:SUPPORTED_FILE_TYPES.join(",")},renderingEnvironment_:{type:String,readOnly:true,value:RENDERING_ENVIRONMENT},chromiumSurface_:{type:String,readOnly:true,value:CHROMIUM_SURFACE},useDirectUpload_:{type:Boolean,readOnly:true,value:loadTimeData.getBoolean("realboxLensDirectUpload")},uploadFileAction_:String,uploadUrlAction_:{type:String,readOnly:true,value:UPLOAD_BY_URL_ACTION},uploadUrl_:String,uploadUrlEntrypoint_:{type:String,readOnly:true,value:UPLOAD_URL_ENTRYPOINT},language_:{type:String,readOnly:true,value:window.navigator.language},clientData_:{type:String,readOnly:true,value:loadTimeData.getString("realboxLensVariations")}}}openSystemFilePicker(){this.$.fileInput.click()}handleFileInputChange_(){const fileList=this.$.fileInput.files;if(fileList){this.submitFileList(fileList)}}submitFileList(files){if(files.length>1){this.dispatchError_(LensErrorType.MULTIPLE_FILES);return}const file=files[0];if(!file){this.dispatchError_(LensErrorType.NO_FILE);return}return this.submitFile_(file)}async submitFile_(file){if(!SUPPORTED_FILE_TYPES.includes(file.type)){this.dispatchError_(LensErrorType.FILE_TYPE);return}if(file.size>MAX_FILE_SIZE_BYTES){this.dispatchError_(LensErrorType.FILE_SIZE);return}if(this.useDirectUpload_){this.uploadFileAction_=DIRECT_UPLOAD_FILE_ACTION}this.startTime_=Date.now().toString();let processedFile={processedFile:file};if(this.useDirectUpload_){processedFile=await processFile(file)}const dataTransfer=new DataTransfer;dataTransfer.items.add(processedFile.processedFile);this.$.fileInput.files=dataTransfer.files;const action=new URL(this.uploadFileAction_);action.searchParams.set("ep",UPLOAD_FILE_ENTRYPOINT);action.searchParams.set("hl",this.language_);action.searchParams.set("st",this.startTime_.toString());action.searchParams.set("cd",this.clientData_);action.searchParams.set("re",RENDERING_ENVIRONMENT);action.searchParams.set("s",CHROMIUM_SURFACE);action.searchParams.set("vph",processedFile.imageHeight?processedFile.imageHeight.toString():"");action.searchParams.set("vpw",processedFile.imageWidth?processedFile.imageWidth.toString():"");this.uploadFileAction_=action.toString();this.dispatchLoading_(LensSubmitType.FILE);this.$.fileForm.submit()}submitUrl(urlString){if(!urlString.startsWith("http://")&&!urlString.startsWith("https://")){this.dispatchError_(LensErrorType.INVALID_SCHEME);return}let encodedUri;try{encodedUri=encodeURI(urlString);new URL(urlString)}catch(e){this.dispatchError_(LensErrorType.INVALID_URL);return}if(encodedUri.length>MAX_URL_LENGTH){this.dispatchError_(LensErrorType.LENGTH_TOO_GREAT);return}this.uploadUrl_=encodedUri;this.startTime_=Date.now().toString();this.dispatchLoading_(LensSubmitType.URL);this.$.urlForm.submit()}dispatchLoading_(submitType){this.dispatchEvent(new CustomEvent("loading",{bubbles:false,composed:false,detail:submitType}))}dispatchError_(errorType){this.dispatchEvent(new CustomEvent("error",{bubbles:false,composed:false,detail:errorType}))}}customElements.define(LensFormElement.is,LensFormElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$1=html`<dom-module id="paper-spinner-styles">
  <template>
    <style>
      /*
      /**************************/
      /* STYLES FOR THE SPINNER */
      /**************************/

      /*
       * Constants:
       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)
       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)
       *      ARCSTARTROT = 216 degrees (how much the start location of the arc
       *                                should rotate each time, 216 gives us a
       *                                5 pointed star shape (it's 360/5 * 3).
       *                                For a 7 pointed star, we might do
       *                                360/7 * 3 = 154.286)
       *      SHRINK_TIME = 400ms
       */

      :host {
        display: inline-block;
        position: relative;
        width: 28px;
        height: 28px;

        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */
        --paper-spinner-container-rotation-duration: 1568ms;

        /* ARCTIME */
        --paper-spinner-expand-contract-duration: 1333ms;

        /* 4 * ARCTIME */
        --paper-spinner-full-cycle-duration: 5332ms;

        /* SHRINK_TIME */
        --paper-spinner-cooldown-duration: 400ms;
      }

      #spinnerContainer {
        width: 100%;
        height: 100%;

        /* The spinner does not have any contents that would have to be
         * flipped if the direction changes. Always use ltr so that the
         * style works out correctly in both cases. */
        direction: ltr;
      }

      #spinnerContainer.active {
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
      }

      @-webkit-keyframes container-rotate {
        to { -webkit-transform: rotate(360deg) }
      }

      @keyframes container-rotate {
        to { transform: rotate(360deg) }
      }

      .spinner-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        white-space: nowrap;
        color: var(--paper-spinner-color, var(--google-blue-500));
      }

      .layer-1 {
        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));
      }

      .layer-2 {
        color: var(--paper-spinner-layer-2-color, var(--google-red-500));
      }

      .layer-3 {
        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));
      }

      .layer-4 {
        color: var(--paper-spinner-layer-4-color, var(--google-green-500));
      }

      /**
       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
       *
       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
       * guarantee that the animation will start _exactly_ after that value. So we avoid using
       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it
       * seems).
       */
      .active .spinner-layer {
        animation-name: fill-unfill-rotate;
        animation-duration: var(--paper-spinner-full-cycle-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
        opacity: 1;
      }

      .active .spinner-layer.layer-1 {
        animation-name: fill-unfill-rotate, layer-1-fade-in-out;
      }

      .active .spinner-layer.layer-2 {
        animation-name: fill-unfill-rotate, layer-2-fade-in-out;
      }

      .active .spinner-layer.layer-3 {
        animation-name: fill-unfill-rotate, layer-3-fade-in-out;
      }

      .active .spinner-layer.layer-4 {
        animation-name: fill-unfill-rotate, layer-4-fade-in-out;
      }

      @-webkit-keyframes fill-unfill-rotate {
        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @keyframes fill-unfill-rotate {
        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @-webkit-keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @-webkit-keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      .circle-clipper {
        display: inline-block;
        position: relative;
        width: 50%;
        height: 100%;
        overflow: hidden;
      }

      /**
       * Patch the gap that appear between the two adjacent div.circle-clipper while the
       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).
       */
      .spinner-layer::after {
        content: '';
        left: 45%;
        width: 10%;
        border-top-style: solid;
      }

      .spinner-layer::after,
      .circle-clipper .circle {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        border-width: var(--paper-spinner-stroke-width, 3px);
        border-radius: 50%;
      }

      .circle-clipper .circle {
        bottom: 0;
        width: 200%;
        border-style: solid;
        border-bottom-color: transparent !important;
      }

      .circle-clipper.left .circle {
        left: 0;
        border-right-color: transparent !important;
        transform: rotate(129deg);
      }

      .circle-clipper.right .circle {
        left: -100%;
        border-left-color: transparent !important;
        transform: rotate(-129deg);
      }

      .active .gap-patch::after,
      .active .circle-clipper .circle {
        animation-duration: var(--paper-spinner-expand-contract-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
      }

      .active .circle-clipper.left .circle {
        animation-name: left-spin;
      }

      .active .circle-clipper.right .circle {
        animation-name: right-spin;
      }

      @-webkit-keyframes left-spin {
        0% { -webkit-transform: rotate(130deg) }
        50% { -webkit-transform: rotate(-5deg) }
        to { -webkit-transform: rotate(130deg) }
      }

      @keyframes left-spin {
        0% { transform: rotate(130deg) }
        50% { transform: rotate(-5deg) }
        to { transform: rotate(130deg) }
      }

      @-webkit-keyframes right-spin {
        0% { -webkit-transform: rotate(-130deg) }
        50% { -webkit-transform: rotate(5deg) }
        to { -webkit-transform: rotate(-130deg) }
      }

      @keyframes right-spin {
        0% { transform: rotate(-130deg) }
        50% { transform: rotate(5deg) }
        to { transform: rotate(-130deg) }
      }

      #spinnerContainer.cooldown {
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
      }

      @-webkit-keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(template$1.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const PaperSpinnerBehavior={properties:{active:{type:Boolean,value:false,reflectToAttribute:true,observer:"__activeChanged"},alt:{type:String,value:"loading",observer:"__altChanged"},__coolingDown:{type:Boolean,value:false}},__computeContainerClasses:function(active,coolingDown){return[active||coolingDown?"active":"",coolingDown?"cooldown":""].join(" ")},__activeChanged:function(active,old){this.__setAriaHidden(!active);this.__coolingDown=!active&&old},__altChanged:function(alt){if(alt==="loading"){this.alt=this.getAttribute("aria-label")||alt}else{this.__setAriaHidden(alt==="");this.setAttribute("aria-label",alt)}},__setAriaHidden:function(hidden){var attr="aria-hidden";if(hidden){this.setAttribute(attr,"true")}else{this.removeAttribute(attr)}},__reset:function(){this.active=false;this.__coolingDown=false}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template=html`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;template.setAttribute("strip-whitespace","");Polymer({_template:template,is:"paper-spinner-lite",behaviors:[PaperSpinnerBehavior]});function getTemplate$8(){return html`<!--_html_template_start_--><style include="cr-icons">:host{--upload-dialog-background:var(--color-new-tab-page-background-override);--upload-dialog-divider-line-border-top:1px solid var(--google-grey-200);--upload-dialog-divider-line-or-label-color:var(--color-new-tab-page-secondary-foreground);--upload-dialog-drag-drop-background:var(--google-grey-50);--upload-dialog-drag-drop-border:1px dashed var(--google-grey-400);--upload-dialog-drag-drop-error-background-color:var(--google-red-50);--upload-dialog-drag-drop-title-color:var(--color-new-tab-page-secondary-foreground);--upload-dialog-drag-drop-upload-text-color:var(--google-blue-700);--upload-dialog-error-message-color:var(--google-red-800);--upload-dialog-input-box-background:var(--color-new-tab-page-background-override);--upload-dialog-input-box-border-color:var(--google-grey-300);--upload-dialog-input-box-color:var(--google-grey-800);--upload-dialog-input-box-placeholder-color:var(--google-grey-700);--upload-dialog-input-submit-background:var(--color-new-tab-page-background-override);--upload-dialog-input-submit-border-color:var(--google-grey-300);--upload-dialog-input-submit-color:var(--google-blue-600);--upload-dialog-shadow:var(--cr-elevation-3);--upload-dialog-title-color:var(--google-grey-800);font-family:inherit;width:100%}:host([is-dragging_]),:host([is-loading_]){--upload-dialog-drag-drop-background:var(--google-blue-50)}@media (prefers-color-scheme:dark){:host{--paper-spinner-color:var(--google-blue-300);--upload-dialog-background:var(--google-grey-850);--upload-dialog-divider-line-border-top:1px solid var(--google-grey-800);--upload-dialog-drag-drop-background:rgba(var(--google-grey-900-rgb), .68);--upload-dialog-drag-drop-border:1px dashed var(--google-grey-800);--upload-dialog-drag-drop-error-background-color:var(--google-red-300);--upload-dialog-drag-drop-upload-text-color:var(--google-blue-300);--upload-dialog-error-message-color:var(--google-grey-900);--upload-dialog-input-box-background:transparent;--upload-dialog-input-box-border-color:var(--google-grey-800);--upload-dialog-input-box-color:var(--google-grey-100);--upload-dialog-input-box-placeholder-color:var(--google-grey-300);--upload-dialog-input-submit-background:transparent;--upload-dialog-input-submit-border-color:var(--google-grey-800);--upload-dialog-input-submit-color:var(--google-blue-300);--upload-dialog-title-color:var(--google-grey-100)}:host([is-dragging_]),:host([is-loading_]){--upload-dialog-drag-drop-background:rgba(var(--google-blue-300-rgb), .24);--upload-dialog-drag-drop-border:1px dashed var(--google-blue-300);--upload-dialog-drag-drop-title-color:var(--google-blue-300)}}#dialog{background:var(--upload-dialog-background);border-radius:22px;box-shadow:var(--upload-dialog-shadow);box-sizing:border-box;left:unset;padding:20px;position:relative;right:unset}:host-context([dir=rtl]) #closeButton{left:20px;right:initial}#closeButton{--cr-icon-button-fill-color:var(--color-new-tab-page-overlay-secondary-foreground);align-self:flex-end;cursor:pointer;display:flex;position:absolute;right:20px;top:15px}#title{color:var(--upload-dialog-title-color);font-size:16px;letter-spacing:.1px;line-height:28px;margin-bottom:14px;text-align:center}#dragDropArea{background:var(--upload-dialog-drag-drop-background);border:var(--upload-dialog-drag-drop-border);border-radius:8px;box-sizing:border-box;display:flex;flex-direction:column;flex-grow:1;height:280px;padding:20px;position:relative;width:100%}#dragDropError{align-items:center;background-color:var(--upload-dialog-drag-drop-error-background-color);border-top-left-radius:8px;border-top-right-radius:8px;justify-content:space-between;left:0;position:absolute;right:0;top:0}#dragDropErrorMessage{color:var(--upload-dialog-error-message-color);flex:1;font-size:12px;padding:5px;text-align:center}.drag-drop-title-container{align-items:center;display:inline-flex;flex-direction:row;flex-grow:1;justify-content:center}#dragDropIllustration{background:url(icons/drag_drop_illustration.svg) no-repeat center;display:inline-flex;height:45px;margin-inline-end:18px;vertical-align:middle;width:59px}.drag-drop-title{color:var(--upload-dialog-drag-drop-title-color);font-size:16px;line-height:25px;max-width:300px}#dragText{display:inline-block;margin-inline-end:4px}#uploadText{color:var(--upload-dialog-drag-drop-upload-text-color);cursor:pointer;display:inline-block;white-space:nowrap}#uploadText:focus,#uploadText:hover{text-decoration:underline}@media (forced-colors:active){#uploadText{color:LinkText}}#urlUploadContainer{box-sizing:border-box;display:flex;flex-direction:column;width:100%}#sectionDivider{align-items:center;display:flex}.divider-line{border-top:var(--upload-dialog-divider-line-border-top);flex-grow:1;height:0}#orLabel{color:var(--upload-dialog-divider-line-or-label-color);cursor:default;flex-shrink:0;font-size:14px;margin-inline-end:20px;margin-inline-start:20px}#inputContainer{display:flex;margin-top:14px}#inputBox{background:var(--upload-dialog-input-box-background);border:1px solid var(--upload-dialog-input-box-border-color);border-radius:36px;color:var(--upload-dialog-input-box-color);display:inline-flex;flex-grow:1;font-size:14px;height:40px;outline:0;padding:0 24px;width:100%}#inputBox::placeholder{color:var(--upload-dialog-input-box-placeholder-color)}#inputBox:hover{--upload-dialog-input-box-border-color:var(--google-grey-800)}#inputBox:focus{--upload-dialog-input-box-border-color:var(--google-blue-700)}#inputBox:active{--upload-dialog-input-box-border-color:var(--google-blue-700)}@media (prefers-color-scheme:dark){#inputBox:hover{--upload-dialog-input-box-border-color:var(--google-grey-700)}#inputBox:focus{--upload-dialog-input-box-border-color:var(--google-blue-300)}#inputBox:active{--upload-dialog-input-box-border-color:var(--google-blue-300)}}#inputSubmit{align-items:center;background:var(--upload-dialog-input-submit-background);border:1px solid var(--upload-dialog-input-submit-border-color);border-radius:32px;color:var(--upload-dialog-input-submit-color);cursor:pointer;display:inline-flex;flex-shrink:0;font-size:14px;justify-content:center;letter-spacing:.25px;margin-inline-start:8px;outline:0;padding:8px 24px}#inputSubmit:hover{--upload-dialog-input-submit-background:rgba(var(--google-blue-700-rgb), 0.08);--upload-dialog-input-submit-border-color:var(--google-grey-300);--upload-dialog-input-submit-color:var(--google-blue-600)}#inputSubmit:focus{--upload-dialog-input-submit-background:rgba(var(--google-blue-700-rgb), 0.08);--upload-dialog-input-submit-border-color:var(--google-blue-700);--upload-dialog-input-submit-color:var(--google-blue-600)}#inputSubmit:active{--upload-dialog-input-submit-background:rgba(var(--google-blue-700-rgb), 0.14);--upload-dialog-input-submit-border-color:var(--google-grey-300);--upload-dialog-input-submit-color:var(--google-blue-600)}@media (prefers-color-scheme:dark){#inputSubmit:hover{--upload-dialog-input-submit-background:rgba(var(--google-blue-300-rgb), 0.04);--upload-dialog-input-submit-border-color:var(--google-grey-800);--upload-dialog-input-submit-color:var(--google-blue-100)}#inputSubmit:focus{--upload-dialog-input-submit-background:rgba(var(--google-blue-300-rgb), 0.12);--upload-dialog-input-submit-border-color:var(--google-blue-100);--upload-dialog-input-submit-color:var(--google-blue-100)}#inputSubmit:active{--upload-dialog-input-submit-background:rgba(var(--google-blue-300-rgb), 0.10);--upload-dialog-input-submit-border-color:var(--google-grey-800);--upload-dialog-input-submit-color:var(--google-blue-100)}}#loadingContainer,#offlineContainer{align-items:center;display:flex;flex-direction:column;flex-grow:1;justify-content:center}#loadingSpinner{display:block;margin-bottom:12px}#offlineTitle{color:var(--upload-dialog-title-color);text-align:center}#offlineImage{background:url(icons/offline_dialog.svg) no-repeat center;height:51px;margin-bottom:24px;width:55px}#offlineSubtitle{color:var(--upload-dialog-drag-drop-title-color);font-size:16px;margin-top:6px}#offlineRetryButton{margin-top:21px}</style>

<div id="dialog" hidden$="{{isHidden_}}" tabindex="-1" lang="fr" role="dialog" aria-modal="true" on-focusout="onFocusOut_">
  <ntp-lens-form id="lensForm" on-loading="handleFormLoading_" on-error="handleFormError_">
  </ntp-lens-form>
  <div id="container">
    <cr-icon-button id="closeButton" class="icon-clear" title="Fermer" on-click="onCloseButtonClick_" on-keydown="onCloseButtonKeydown_">
    </cr-icon-button>
    <div id="title">
      Rechercher une image avec Google Lens
    </div>
    <div id="dragDropArea" on-dragenter="onDragEnter_" on-dragover="onDragOver_" on-dragleave="onDragLeave_" on-drop="onDrop_">
      
      <template is="dom-if" if="{{isError_}}">
        <div id="dragDropError">
          <div id="dragDropErrorMessage">
            [[getErrorString_(lensErrorMessage_)]]
          </div>
        </div>
      </template>
      
      <template is="dom-if" if="{{isNormalOrError_}}">
        <div class="drag-drop-title-container">
          <div id="dragDropIllustration"></div>
          <div class="drag-drop-title">
            <span id="dragText">Faites glisser une image ici ou</span>
            <span tabindex="0" role="button" id="uploadText" on-click="onUploadFileClick_" on-keydown="onUploadFileKeyDown_">
              importez un fichier
            </span>
          </div>
        </div>
        <div id="urlUploadContainer">
          <div id="sectionDivider">
            <div class="divider-line"></div>
            <div id="orLabel">OU</div>
            <div class="divider-line"></div>
          </div>
          <div id="inputContainer">
            <input id="inputBox" autocomplete="false" autocorrect="false" placeholder="Collez le lien de l&#39;image" text="text" value="{{uploadUrl_::input}}" on-keydown="onUrlKeyDown_">
            <div id="inputSubmit" tabindex="0" role="button" on-click="onSubmitUrl_" on-keydown="onInputSubmitKeyDown_">
              Rechercher
            </div>
          </div>
        </div>
      </template>
      
      <template is="dom-if" if="{{isDragging_}}">
        <div class="drag-drop-title-container">
          <div class="drag-drop-title">
            Déposez une image ici
          </div>
        </div>
      </template>
      
      <template is="dom-if" if="{{isLoading_}}">
        <div id="loadingContainer">
          <paper-spinner-lite id="loadingSpinner" active>
          </paper-spinner-lite>
          <div class="drag-drop-title">
            Importation…
          </div>
        </div>
      </template>
      
      <template is="dom-if" if="{{isOffline_}}">
        <div id="offlineContainer">
          <div id="offlineImage"></div>
          <div id="offlineTitle" class="drag-drop-title">
            Aucune connexion réseau
          </div>
          <div id="offlineSubtitle">
            Vérifiez votre connexion Internet, puis réessayez
          </div>
          <cr-button id="offlineRetryButton" class="action-button" on-click="onOfflineRetryButtonClick_" on-keydown="onOfflineRetryButtonKeydown_">
            Réessayer
          </cr-button>
        </div>
      </template>
    </div>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var DialogState;(function(DialogState){DialogState[DialogState["HIDDEN"]=0]="HIDDEN";DialogState[DialogState["NORMAL"]=1]="NORMAL";DialogState[DialogState["DRAGGING"]=2]="DRAGGING";DialogState[DialogState["LOADING"]=3]="LOADING";DialogState[DialogState["ERROR"]=4]="ERROR";DialogState[DialogState["OFFLINE"]=5]="OFFLINE"})(DialogState||(DialogState={}));var LensErrorMessage;(function(LensErrorMessage){LensErrorMessage[LensErrorMessage["NONE"]=0]="NONE";LensErrorMessage[LensErrorMessage["FILE_TYPE"]=1]="FILE_TYPE";LensErrorMessage[LensErrorMessage["FILE_SIZE"]=2]="FILE_SIZE";LensErrorMessage[LensErrorMessage["MULTIPLE_FILES"]=3]="MULTIPLE_FILES";LensErrorMessage[LensErrorMessage["SCHEME"]=4]="SCHEME";LensErrorMessage[LensErrorMessage["CONFORMANCE"]=5]="CONFORMANCE";LensErrorMessage[LensErrorMessage["MULTIPLE_URLS"]=6]="MULTIPLE_URLS"})(LensErrorMessage||(LensErrorMessage={}));const EventKeys={ENTER:"Enter",ESCAPE:"Escape",SPACE:" ",TAB:"Tab"};var LensUploadDialogAction;(function(LensUploadDialogAction){LensUploadDialogAction[LensUploadDialogAction["URL_SUBMITTED"]=0]="URL_SUBMITTED";LensUploadDialogAction[LensUploadDialogAction["FILE_SUBMITTED"]=1]="FILE_SUBMITTED";LensUploadDialogAction[LensUploadDialogAction["IMAGE_DROPPED"]=2]="IMAGE_DROPPED";LensUploadDialogAction[LensUploadDialogAction["DIALOG_OPENED"]=3]="DIALOG_OPENED";LensUploadDialogAction[LensUploadDialogAction["DIALOG_CLOSED"]=4]="DIALOG_CLOSED";LensUploadDialogAction[LensUploadDialogAction["ERROR_SHOWN"]=5]="ERROR_SHOWN"})(LensUploadDialogAction||(LensUploadDialogAction={}));var LensUploadDialogError;(function(LensUploadDialogError){LensUploadDialogError[LensUploadDialogError["FILE_SIZE"]=0]="FILE_SIZE";LensUploadDialogError[LensUploadDialogError["FILE_TYPE"]=1]="FILE_TYPE";LensUploadDialogError[LensUploadDialogError["MULTIPLE_FILES"]=2]="MULTIPLE_FILES";LensUploadDialogError[LensUploadDialogError["MULTIPLE_URLS"]=3]="MULTIPLE_URLS";LensUploadDialogError[LensUploadDialogError["LENGTH_TOO_GREAT"]=4]="LENGTH_TOO_GREAT";LensUploadDialogError[LensUploadDialogError["INVALID_SCHEME"]=5]="INVALID_SCHEME";LensUploadDialogError[LensUploadDialogError["INVALID_URL"]=6]="INVALID_URL";LensUploadDialogError[LensUploadDialogError["NETWORK_ERROR"]=7]="NETWORK_ERROR"})(LensUploadDialogError||(LensUploadDialogError={}));function recordLensUploadDialogAction(action){chrome.metricsPrivate.recordEnumerationValue("NewTabPage.Lens.UploadDialog.DialogAction",action,Object.keys(LensUploadDialogAction).length)}function recordLensUploadDialogError(action){chrome.metricsPrivate.recordEnumerationValue("NewTabPage.Lens.UploadDialog.DialogError",action,Object.keys(LensUploadDialogError).length)}const LensUploadDialogElementBase=I18nMixin(PolymerElement);class LensUploadDialogElement extends LensUploadDialogElementBase{constructor(){super(...arguments);this.dialogState_=DialogState.HIDDEN;this.lensErrorMessage_=LensErrorMessage.NONE;this.outsideHandlerAttached_=false;this.uploadUrl_="";this.dragCount=0;this.outsideKeyHandler_=event=>{if(event.key===EventKeys.ESCAPE){this.closeDialog()}};this.onCloseButtonKeydown_=event=>{if(event.key===EventKeys.TAB&&(this.computeIsDragging_(this.dialogState_)||this.computeIsLoading_(this.dialogState_))){event.preventDefault()}else if(event.key===EventKeys.TAB&&event.shiftKey){event.preventDefault();if(this.computeIsNormalOrError_(this.dialogState_)){this.shadowRoot.getElementById("inputSubmit")?.focus()}else if(this.computeIsOffline_(this.dialogState_)){this.shadowRoot.getElementById("offlineRetryButton")?.focus()}}};this.onOfflineRetryButtonKeydown_=event=>{if(event.key===EventKeys.TAB&&!event.shiftKey){event.preventDefault();this.$.closeButton.focus()}}}static get is(){return"ntp-lens-upload-dialog"}static get template(){return getTemplate$8()}static get properties(){return{dialogState_:{type:DialogState},lensErrorMessage_:{type:LensErrorMessage},isHidden_:{type:Boolean,computed:`computeIsHidden_(dialogState_)`},isNormalOrError_:{type:Boolean,computed:`computeIsNormalOrError_(dialogState_)`,reflectToAttribute:true},isDragging_:{type:Boolean,computed:`computeIsDragging_(dialogState_)`,reflectToAttribute:true},isLoading_:{type:Boolean,computed:`computeIsLoading_(dialogState_)`,reflectToAttribute:true},isError_:{type:Boolean,computed:`computeIsError_(dialogState_)`,reflectToAttribute:true},isOffline_:{type:Boolean,computed:`computeIsOffline_(dialogState_)`,reflectToAttribute:true},uploadUrl_:{type:String}}}computeIsHidden_(dialogState){return dialogState===DialogState.HIDDEN}computeIsNormalOrError_(dialogState){return dialogState===DialogState.NORMAL||dialogState===DialogState.ERROR}computeIsDragging_(dialogState){return dialogState===DialogState.DRAGGING}computeIsLoading_(dialogState){return dialogState===DialogState.LOADING}computeIsError_(dialogState){return dialogState===DialogState.ERROR}computeIsOffline_(dialogState){return dialogState===DialogState.OFFLINE}connectedCallback(){super.connectedCallback();this.openDialog()}disconnectedCallback(){super.disconnectedCallback();this.detachOutsideHandler_()}openDialog(){this.setOnlineState_();afterNextRender(this,(()=>{this.attachOutsideHandler_();if(this.computeIsOffline_(this.dialogState_)){this.shadowRoot.getElementById("offlineRetryButton")?.focus()}else{this.shadowRoot.getElementById("uploadText")?.focus()}}));recordLensUploadDialogAction(LensUploadDialogAction.DIALOG_OPENED)}closeDialog(){this.dialogState_=DialogState.HIDDEN;this.detachOutsideHandler_();this.dispatchEvent(new Event("close-lens-search"));recordLensUploadDialogAction(LensUploadDialogAction.DIALOG_CLOSED)}getErrorString_(lensErrorMessage){switch(lensErrorMessage){case LensErrorMessage.FILE_TYPE:return this.i18n("lensSearchUploadDialogErrorFileType");case LensErrorMessage.FILE_SIZE:return this.i18n("lensSearchUploadDialogErrorFileSize");case LensErrorMessage.MULTIPLE_FILES:return this.i18n("lensSearchUploadDialogErrorMultipleFiles");case LensErrorMessage.SCHEME:return this.i18n("lensSearchUploadDialogValidationErrorScheme");case LensErrorMessage.CONFORMANCE:return this.i18n("lensSearchUploadDialogValidationErrorConformance");case LensErrorMessage.MULTIPLE_URLS:return this.i18n("lensSearchUploadDialogErrorMultipleUrls");default:return""}}setOnlineState_(){this.dialogState_=WindowProxy.getInstance().onLine?DialogState.NORMAL:DialogState.OFFLINE}attachOutsideHandler_(){if(!this.outsideHandlerAttached_){document.addEventListener("keydown",this.outsideKeyHandler_);this.outsideHandlerAttached_=true}}detachOutsideHandler_(){if(this.outsideHandlerAttached_){document.removeEventListener("keydown",this.outsideKeyHandler_);this.outsideHandlerAttached_=false}}onCloseButtonClick_(){this.closeDialog()}onOfflineRetryButtonClick_(){this.setOnlineState_()}onUploadFileKeyDown_(event){if(event.key===EventKeys.ENTER||event.key===EventKeys.SPACE){this.$.lensForm.openSystemFilePicker()}}onUploadFileClick_(){this.$.lensForm.openSystemFilePicker()}handleFormLoading_(event){this.dialogState_=DialogState.LOADING;switch(event.detail){case LensSubmitType.FILE:recordLensUploadDialogAction(LensUploadDialogAction.FILE_SUBMITTED);break;case LensSubmitType.URL:recordLensUploadDialogAction(LensUploadDialogAction.URL_SUBMITTED);break}}handleFormError_(event){switch(event.detail){case LensErrorType.MULTIPLE_FILES:this.dialogState_=DialogState.ERROR;this.lensErrorMessage_=LensErrorMessage.MULTIPLE_FILES;recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);recordLensUploadDialogError(LensUploadDialogError.MULTIPLE_FILES);break;case LensErrorType.NO_FILE:this.dialogState_=DialogState.NORMAL;this.lensErrorMessage_=LensErrorMessage.NONE;break;case LensErrorType.FILE_TYPE:this.dialogState_=DialogState.ERROR;this.lensErrorMessage_=LensErrorMessage.FILE_TYPE;recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);recordLensUploadDialogError(LensUploadDialogError.FILE_TYPE);break;case LensErrorType.FILE_SIZE:this.dialogState_=DialogState.ERROR;this.lensErrorMessage_=LensErrorMessage.FILE_SIZE;recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);recordLensUploadDialogError(LensUploadDialogError.FILE_SIZE);break;case LensErrorType.INVALID_SCHEME:this.dialogState_=DialogState.ERROR;this.lensErrorMessage_=LensErrorMessage.SCHEME;recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);recordLensUploadDialogError(LensUploadDialogError.INVALID_SCHEME);break;case LensErrorType.INVALID_URL:this.dialogState_=DialogState.ERROR;this.lensErrorMessage_=LensErrorMessage.CONFORMANCE;recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);recordLensUploadDialogError(LensUploadDialogError.INVALID_URL);break;case LensErrorType.LENGTH_TOO_GREAT:this.dialogState_=DialogState.ERROR;this.lensErrorMessage_=LensErrorMessage.CONFORMANCE;recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);recordLensUploadDialogError(LensUploadDialogError.LENGTH_TOO_GREAT);break;default:this.dialogState_=DialogState.NORMAL;this.lensErrorMessage_=LensErrorMessage.NONE}}onUrlKeyDown_(event){if(event.key===EventKeys.ENTER){event.preventDefault();this.onSubmitUrl_()}}onInputSubmitKeyDown_(event){if(event.key===EventKeys.ENTER||event.key===EventKeys.SPACE){this.onSubmitUrl_()}else if(event.key===EventKeys.TAB&&!event.shiftKey){event.preventDefault();this.$.closeButton.focus()}}onSubmitUrl_(){const url=this.uploadUrl_.trim();if(url.length>0){this.$.lensForm.submitUrl(url)}}onDragEnter_(e){e.preventDefault();this.dragCount+=1;if(this.dragCount===1){this.dialogState_=DialogState.DRAGGING}}onDragOver_(e){e.preventDefault()}onDragLeave_(e){e.preventDefault();this.dragCount-=1;if(this.dragCount===0){this.dialogState_=DialogState.NORMAL}}onDrop_(e){e.preventDefault();this.dragCount=0;if(e.dataTransfer){this.$.lensForm.submitFileList(e.dataTransfer.files);recordLensUploadDialogAction(LensUploadDialogAction.IMAGE_DROPPED)}}onFocusOut_(event){if(this.dragCount===1){return}const outsideDialog=document.hasFocus()&&(!event.relatedTarget||!this.$.dialog.contains(event.relatedTarget));if(outsideDialog){this.closeDialog()}}}customElements.define(LensUploadDialogElement.is,LensUploadDialogElement);function getTemplate$7(){return html`<!--_html_template_start_--><style>::part(dialog){height:250px;min-width:560px}::part(wrapper){height:100%;justify-content:space-between}div[slot=body]{display:flex;justify-content:space-between}div[slot=button-container]{justify-content:flex-start}#content-container{display:flex;flex-direction:column;justify-content:center}#content-title{color:var(--color-new-tab-page-primary-foreground);font-family:'Google Sans';font-size:22px;line-height:28px;margin-inline-end:auto;white-space:normal}#content{color:var(--color-new-tab-page-secondary-foreground);font-size:13px;line-height:20px;margin-inline-end:auto;margin-top:4px;white-space:normal}#icon-container{margin-inline-end:20px}</style>

<cr-dialog id="dialog" show-close-button on-cancel="onDismissClick_" show-on-attach close-text="Fermer">
  <div slot="title">Vos paniers</div>
  <div slot="body">
    <div id="content-container" tabindex="0">
      <div id="content-title">Obtenir des remises ?</div>
      <div id="content">Autoriser Google à utiliser votre panier pour vous proposer les remises disponibles ?</div>
    </div>
    <div id="icon-container">
      <img id="icon" src="modules/cart/icons/consent_icon.svg" alt="">
    </div>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" id="cancelButton" on-click="onRejectClick_">
      Non, merci
    </cr-button>
    <cr-button class="action-button" id="confirmButton" on-click="onAcceptClick_">
      Obtenir des remises
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class DiscountConsentDialog extends PolymerElement{static get is(){return"discount-consent-dialog"}static get template(){return getTemplate$7()}onRejectClick_(){this.$.dialog.close();this.dispatchEvent(new CustomEvent("discount-consent-rejected",{composed:true}))}onAcceptClick_(){this.$.dialog.close();this.dispatchEvent(new CustomEvent("discount-consent-accepted",{composed:true}))}onDismissClick_(){this.dispatchEvent(new CustomEvent("discount-consent-dismissed",{composed:true}))}}customElements.define(DiscountConsentDialog.is,DiscountConsentDialog);function getTemplate$6(){return html`<!--_html_template_start_--><style include="history-clusters-shared-style">:host{background:var(--color-new-tab-page-history-clusters-module-item-background);border-radius:var(--ntp-module-item-border-radius);color:var(--color-new-tab-page-primary-foreground);display:inline-block;height:max-content;width:100%}a:active,a:hover,a:link,a:visited{text-decoration:none}:focus-visible,:host-context(.focus-outline-visible) :focus{border-radius:var(--ntp-module-item-border-radius);box-shadow:var(--ntp-focus-shadow);outline:0}#content{display:inline-block;height:100%;width:100%}:host([one-image]) #content{display:flex;flex-direction:row}#imageContainer{overflow:hidden;position:relative}:host([one-image]) #imageContainer{background:var(--color-new-tab-page-module-background);border-radius:var(--ntp-module-item-border-radius);height:128px;margin:9px 8px;width:128px}:host([multiple-images]) #imageContainer{display:flex;height:82px;margin-inline-start:11px}.large-image{height:100%;object-fit:cover;width:100%}.small-image{background:var(--color-new-tab-page-module-background);border-radius:var(--ntp-module-item-border-radius);height:60px;margin:12px 5px 10px 5px;object-fit:cover;width:60px}#extraImageCard{background:var(--color-new-tab-page-dialog-border);border-radius:var(--ntp-module-item-border-radius);color:var(--color-new-tab-page-icon-button-background-active);font-size:14px;height:60px;line-height:60px;margin:12px 5px;text-align:center;width:60px}#imageContainer page-favicon{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}#icon{height:16px;margin-inline-end:8px;width:16px}#title{-webkit-box-orient:vertical;color:var(--color-new-tab-page-primary-foreground);display:-webkit-box;font-size:var(--ntp-module-text-size);height:20px;line-height:20px;margin-inline-start:16px;max-width:calc(100% - 138px);white-space:initial}:host([one-image]) #title{-webkit-line-clamp:4;line-height:20px;margin:8px;max-width:184px}:host([multiple-images]) #titleContainer{align-items:center;display:flex;flex-direction:row}#titleAnnotation{background:var(--color-sys-tonal-container);color:var(--color-sys-on-tonal-container);min-width:60px}:host([one-image]) #titleAnnotation{margin-inline-start:8px}:host([multiple-images]) #titleAnnotation{margin-inline-start:10px}#infoContainer{color:var(--color-new-tab-page-secondary-foreground);display:flex;flex-direction:row;font-size:11px;height:20px;margin-bottom:8px}:host([one-image]) #infoContainer{margin-inline-start:8px;margin-top:62px}:host([multiple-images]) #infoContainer{margin-inline-start:16px;margin-top:14px}#date,#domain{bottom:-2px;position:relative}#dot{line-height:16px}#textContainer{flex-direction:column}#annotationContainer{align-items:center;display:flex;flex-direction:row}#discountChip{background:var(--color-sys-tertiary-container);color:var(--color-sys-on-tertiary-container);margin-inline-start:10px;min-width:40px}.annotation{align-items:center;border-radius:4px;display:flex;font-size:11px;font-weight:500;height:17px;justify-content:center;line-height:16px;padding-inline-end:4px;padding-inline-start:4px;text-align:center}</style>

<a id="content" href="[[cart.cartUrl.url]]" aria-label$="[[tileLabel_]]">
  <div id="imageContainer">
    <template is="dom-if" if="[[!hasMultipleImages_()]]" restamp>
      <template is="dom-if" if="[[cart.productImageUrls.length]]" restamp>
        <img class="large-image" is="cr-auto-img" auto-src="[[getSingleImageToShow_()]]" draggable="false" alt="">
        
      </template>
      <template is="dom-if" if="[[!cart.productImageUrls.length]]" restamp>
        <page-favicon id="fallbackImage" url="[[cart.cartUrl]]" is-known-to-sync="true" size="24">
        </page-favicon>
      </template>
    </template>
    <template is="dom-if" if="[[hasMultipleImages_()]]" restamp>
      <template id="imagesRepeat" is="dom-repeat" items="[[getImagesToShow_()]]">
        <img class="small-image" is="cr-auto-img" auto-src="[[item.url]]" draggable="false" alt="">
        
      </template>
      <template is="dom-if" if="[[shouldShowExtraImagesCard_()]]" restamp>
        <div id="extraImageCard">[[getExtraImagesCountString_()]]</div>
      </template>
    </template>
  </div>
  <div id="textContainer">
    <div id="titleContainer">
      <div id="title" class="truncate">[[cart.merchant]]</div>
      <div id="annotationContainer">
        <div class="annotation" id="titleAnnotation">
          Dans votre panier
        </div>
        <template is="dom-if" if="[[cart.discountText]]" restamp>
          <div class="annotation" id="discountChip">[[cart.discountText]]</div>
        </template>
      </div>
    </div>
    <div id="infoContainer">
      <page-favicon id="icon" url="[[cart.cartUrl]]" is-known-to-sync="true">
      </page-favicon>
      <div id="domain" class="truncate">[[cart.domain]]</div>
      <span id="dot">&nbsp&#8226&nbsp</span>
      <div id="date">[[cart.relativeDate]]</div>
    </div>
  </div>
</a>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CartTileModuleElement extends(I18nMixin(PolymerElement)){static get is(){return"ntp-history-clusters-cart-tile"}static get template(){return getTemplate$6()}static get properties(){return{cart:Object,tileLabel_:{type:String,computed:`computeTileLabel_(cart)`}}}ready(){super.ready();if(this.cart.productImageUrls.length>1){this.setAttribute("multiple-images","true")}else{this.setAttribute("one-image","true")}}hasMultipleImages_(){if(this.cart.productImageUrls.length>1){return true}else{return false}}getSingleImageToShow_(){return this.cart.productImageUrls[0].url}getImagesToShow_(){const images=this.cart.productImageUrls;return images.slice(0,images.length>4?3:4)}shouldShowExtraImagesCard_(){return this.cart.productImageUrls.length>4}getExtraImagesCountString_(){return"+"+(this.cart.productImageUrls.length-3).toString()}computeTileLabel_(){const productCount=this.cart.productImageUrls.length;const discountText=this.cart.discountText;const merchantName=this.cart.merchant;const merchantDomain=this.cart.domain;const relativeDate=this.cart.relativeDate;if(productCount===0){return loadTimeData.getStringF("modulesJourneysCartTileLabelDefault",discountText,merchantName,merchantDomain,relativeDate)}else if(productCount===1){return loadTimeData.getStringF("modulesJourneysCartTileLabelSingular",discountText,merchantName,merchantDomain,relativeDate)}else{return loadTimeData.getStringF("modulesJourneysCartTileLabelPlural",productCount,discountText,merchantName,merchantDomain,relativeDate)}}}customElements.define(CartTileModuleElement.is,CartTileModuleElement);function getTemplate$5(){return html`<!--_html_template_start_--><style include="history-clusters-shared-style">:host{background:var(--color-new-tab-page-history-clusters-module-item-background);border-radius:var(--ntp-module-item-border-radius);color:var(--color-new-tab-page-primary-foreground);display:inline-block;min-width:0;width:100%}a:active,a:hover,a:link,a:visited{text-decoration:none}:focus-visible,:host-context(.focus-outline-visible) :focus{border-radius:var(--ntp-module-item-border-radius);box-shadow:var(--ntp-focus-shadow);outline:0}#content{display:inline-block;height:100%;width:100%}:host([medium-format]) #content{display:flex;flex-direction:row}#image{background:var(--color-new-tab-page-module-background);overflow:hidden;position:relative}:host([large-format]) #image{border-radius:var(--ntp-module-item-border-radius);height:152px;margin:16px;width:calc(100% - 32px)}:host([medium-format]) #image{border-radius:var(--ntp-module-item-border-radius);height:128px;margin:8px;width:128px}:host([small-format]) #image{display:none}#image img{height:100%;object-fit:cover;width:100%}#image page-favicon{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}#icon{background:#fff;height:16px;margin-inline-end:8px;width:16px}#title{-webkit-box-orient:vertical;color:var(--color-new-tab-page-primary-foreground);display:-webkit-box;font-size:var(--ntp-module-text-size);margin:16px;max-width:calc(100% - 32px);white-space:initial}:host([large-format]) #title{-webkit-line-clamp:2;height:48px;line-height:24px;margin-bottom:28px}:host([medium-format]) #title{-webkit-line-clamp:4;height:80px;line-height:20px;margin-inline-start:8px;max-width:184px}:host([small-format]) #title{-webkit-line-clamp:4;height:80px;line-height:20px}#info-container{color:var(--color-new-tab-page-secondary-foreground);display:flex;flex-direction:row;font-size:11px;height:20px;margin-inline:16px}:host([large-format]) #info-container{margin-bottom:24px}:host([medium-format]) #info-container{margin-bottom:12px;margin-inline-start:8px}#annotation,#date,#label{bottom:-2px;position:relative}#date{min-width:max-content}#annotation{display:none}#info-container-spacer{display:none;flex:1 1 auto;min-width:8px}:host([large-format]) #annotation,:host([large-format]) #info-container-spacer{display:block}:host([large-format]) #label{max-width:220px}:host([medium-format]) #label{max-width:90px}:host([small-format]) #date,:host([small-format]) #dot{display:none}#dot{line-height:16px}#discountChip{background:var(--color-sys-tertiary-container);border-radius:var(--ntp-module-item-border-radius);color:var(--color-sys-on-tertiary-container);display:inline-block;font-weight:500;font-size:11px;height:18px;line-height:18px;margin-top:8px;padding-inline-end:4px;padding-inline-start:4px;text-align:center}:host([large-format]) #discountChip{margin-bottom:26px;margin-inline-start:16px}:host([medium-format]) #discountChip{margin-bottom:32px;margin-inline-start:8px}:host([small-format]) #discountChip{margin-bottom:30px;margin-inline-start:16px}:host([has-discount]) #title{margin-bottom:0}:host([has-discount][large-format]) #title{-webkit-line-clamp:1;height:24px}:host([has-discount][medium-format]) #title,:host([has-discount][small-format]) #title{-webkit-line-clamp:2;height:40px}@media (forced-colors:active){:host-context(.focus-outline-visible) a:focus{outline:var(--cr-focus-outline-hcm)}a{border-radius:12px;outline:var(--cr-border-hcm)}}</style>
<a id="content" href="[[visit.normalizedUrl.url]]" aria-label$="[[tileLabel_]]">
  <div id="image">
    <template is="dom-if" if="[[imageUrl_]]" restamp>
      <img is="cr-auto-img" auto-src="[[imageUrl_.url]]" draggable="false" alt="">
      
    </template>
    <template is="dom-if" if="[[!imageUrl_]]" restamp>
      <page-favicon url="[[visit.normalizedUrl]]" is-known-to-sync="[[visit.isKnownToSync]]" size="24">
      </page-favicon>
    </template>
  </div>
  <div id="text-container">
    <div id="title" class="truncate">[[visit.pageTitle]]</div>
    <template is="dom-if" if="[[hasDiscount]]" restamp>
      <div id="discountChip">[[discount]]</div>
    </template>
    <div id="info-container">
      <page-favicon id="icon" url="[[visit.normalizedUrl]]" is-known-to-sync="[[visit.isKnownToSync]]">
      </page-favicon>
      <div id="label" class="truncate">[[label_]]</div>
      <span id="dot">&nbsp&#8226&nbsp</span>
      <div id="date">[[visit.relativeDate]]</div>
      <template is="dom-if" if="[[annotation_]]">
        <div id="info-container-spacer"></div>
        <div id="annotation">[[annotation_]]</div>
      </template>
    </div>
  </div>
</a>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class TileModuleElement extends(I18nMixin(PolymerElement)){static get is(){return"ntp-history-clusters-tile"}static get template(){return getTemplate$5()}static get properties(){return{visit:{type:Object,observer:"onVisitUpdated_"},annotation_:{type:String,computed:"computeAnnotation_(visit)"},label_:{type:String,computed:`computeLabel_(visit.urlForDisplay)`},imageUrl_:{type:Object,value:null},smallFormat:{type:Boolean,value:false,reflectToAttribute:true},discount:{type:String},hasDiscount:{type:Boolean,computed:`computeHasDiscount_(discount)`,reflectToAttribute:true},tileLabel_:{type:String,computed:`computeTileLabel_(discount, label_)`}}}hasImageUrl(){return!!this.imageUrl_}computeAnnotation_(_visit){if(Annotation.kBookmarked in this.visit.annotations){return loadTimeData.getString("modulesJourneysBookmarked")}return""}computeLabel_(){let domain=new URL(this.visit.normalizedUrl.url).hostname;domain=domain.replace("www.","");return domain}computeHasDiscount_(){return!!this.discount&&this.discount.length!==0}async onVisitUpdated_(){const visitUrl=this.visit.normalizedUrl;if(visitUrl&&this.visit.hasUrlKeyedImage&&!this.smallFormat&&this.visit.isKnownToSync){const result=await PageImageServiceBrowserProxy.getInstance().handler.getPageImageUrl(ClientId.NtpQuests,visitUrl,{suggestImages:false,optimizationGuideImages:true});const success=!!(result&&result.result);chrome.metricsPrivate.recordBoolean("NewTabPage.HistoryClusters.ImageLoadSuccess",success);if(success){this.imageUrl_=result.result.imageUrl;return}}this.imageUrl_=null}computeTileLabel_(){const labelTexts=[this.visit.pageTitle,this.label_,this.visit.relativeDate];if(!!this.discount&&this.discount.length!==0){labelTexts.push(this.discount)}return labelTexts.join(", ")}}customElements.define(TileModuleElement.is,TileModuleElement);function getTemplate$4(){return html`<!--_html_template_start_--><style>cr-dialog::part(dialog){max-width:100%;position:fixed}cr-dialog [slot=body]{line-height:20px}</style>
<cr-dialog id="dialog" consume-keydown-event>
  <div slot="title">À propos de cette fiche</div>
  <div slot="body">
    <slot></slot>
  </div>
  <div slot="button-container">
    <cr-button id="closeButton" class="action-button" on-click="onCloseClick_">
      Fermer
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class InfoDialogElement extends PolymerElement{static get is(){return"ntp-info-dialog"}static get template(){return getTemplate$4()}showModal(){this.$.dialog.showModal()}onCloseClick_(){this.$.dialog.close()}}customElements.define(InfoDialogElement.is,InfoDialogElement);function getTemplate$3(){return html`<!--_html_template_start_--><style>:host{background-color:var(--color-new-tab-page-background-override);border:solid var(--color-new-tab-page-border) 1px;border-radius:var(--ntp-module-border-radius);box-sizing:border-box;display:block;overflow:hidden;position:relative}#impressionProbe{height:27px;pointer-events:none;position:absolute;width:100%}#moduleElement{align-items:center;background:var(--color-new-tab-page-module-background);display:flex;height:100%;justify-content:center}:host([modules-redesigned-enabled_]){background-color:var(--color-new-tab-page-module-background);border:none;height:fit-content;overflow:visible}:host([modules-redesigned-enabled_]) #moduleElement{border-radius:var(--ntp-module-border-radius)}</style>
<div id="impressionProbe"></div>
<div id="moduleElement"></div>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ModuleWrapperElement extends PolymerElement{static get is(){return"ntp-module-wrapper"}static get template(){return getTemplate$3()}static get properties(){return{module:{observer:"onModuleChange_",type:Object},modulesRedesignedEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("modulesRedesignedEnabled"),reflectToAttribute:true}}}onModuleChange_(_newValue,oldValue){assert(!oldValue);this.$.moduleElement.appendChild(this.module.element);this.$.moduleElement.addEventListener("usage",(e=>{e.stopPropagation();if(this.modulesRedesignedEnabled_){NewTabPageProxy.getInstance().handler.onModuleUsed(this.module.descriptor.id)}recordOccurence("NewTabPage.Modules.Usage");recordOccurence(`NewTabPage.Modules.Usage.${this.module.descriptor.id}`)}),{once:true});this.$.moduleElement.addEventListener("menu-button-click",(e=>{e.stopPropagation();if(this.modulesRedesignedEnabled_){NewTabPageProxy.getInstance().handler.onModuleUsed(this.module.descriptor.id)}}),{once:true});this.module.element.addEventListener("info-button-click",(()=>{chrome.metricsPrivate.recordSparseValueWithPersistentHash("NewTabPage.Modules.InfoButtonClicked",this.module.descriptor.id)}),{once:true});const headerObserver=new IntersectionObserver((([{intersectionRatio:intersectionRatio}])=>{if(intersectionRatio>=1){headerObserver.disconnect();const time=WindowProxy.getInstance().now();recordLoadDuration("NewTabPage.Modules.Impression",time);recordLoadDuration(`NewTabPage.Modules.Impression.${this.module.descriptor.id}`,time);this.dispatchEvent(new Event("detect-impression"));this.module.element.dispatchEvent(new Event("detect-impression"))}}),{threshold:1});let intersectionPerdecage=0;const moduleObserver=new IntersectionObserver((([{intersectionRatio:intersectionRatio}])=>{intersectionPerdecage=Math.floor(Math.max(intersectionPerdecage,intersectionRatio*10))}),{threshold:[.1,.2,.3,.4,.5,.6,.7,.8,.9,1]});window.addEventListener("pageload",(()=>{recordPerdecage("NewTabPage.Modules.ImpressionRatio",intersectionPerdecage);recordPerdecage(`NewTabPage.Modules.ImpressionRatio.${this.module.descriptor.id}`,intersectionPerdecage)}));microTask.run((()=>{headerObserver.observe(this.$.impressionProbe);moduleObserver.observe(this)}));this.addEventListener("mouseover",(()=>{chrome.metricsPrivate.recordSparseValueWithPersistentHash("NewTabPage.Modules.Hover",this.module.descriptor.id)}),{capture:true,once:true})}}customElements.define(ModuleWrapperElement.is,ModuleWrapperElement);function getTemplate$2(){return html`<!--_html_template_start_--><style include="cr-hidden-style">:host{display:flex;justify-content:center;--ntp-module-container-padding-top:16px}@media (min-width:672px){#firstRunExperience{background-image:url(modules/chromefetti.svg);background-position:top center;background-repeat:no-repeat}}:host([modules-fre-shown]) #freAndModulesContainer{background-color:var(--color-new-tab-page-first-run-background);border:1px solid var(--color-new-tab-page-border);border-radius:4px;padding:20px}#firstRunExperience{box-sizing:border-box;padding-bottom:24px;padding-top:32px;text-align:center}#firstRunExperienceTitle{color:var(--color-new-tab-page-primary-foreground);display:inline-block;font-size:22px;line-height:22px;padding-bottom:16px;padding-inline-end:9px}#newTag{background:var(--color-new-tab-page-chip-background);border-radius:4px;color:var(--color-new-tab-page-chip-foreground);display:inline-block;font-size:10px;height:12px;padding:2px 6px;vertical-align:4px}.first-run-experience-body{color:var(--color-new-tab-page-primary-foreground);font-size:13px;line-height:20px}#customizeChromeLink{color:var(--color-new-tab-page-button-foreground);cursor:pointer;font-weight:700}.action-button{--text-color-action:var(--color-new-tab-page-action-button-foreground);background-color:var(--color-new-tab-page-action-button-background);margin-inline-end:8px;margin-top:18px}.cancel-button{--text-color:var(--color-new-tab-page-button-foreground)}ntp-module-wrapper{width:var(--ntp-module-width)}.module-container+.module-container{padding-top:var(--ntp-module-container-padding-top)}#modules{max-width:100%;width:fit-content}#removeModuleToastMessage{flex-grow:1}#removeModuleFreToastMessage{flex-grow:1}:host([drag-enabled_]) ntp-module-wrapper{cursor:grab}[dragging]{pointer-events:none;position:fixed;z-index:2}</style>
<div id="freAndModulesContainer">
  <template is="dom-if" if="[[modulesFreShown]]">
    <div id="firstRunExperience">
      <header id="firstRunExperienceTitle">
        Votre page personnalisée
      </header>
      <div id="newTag">Nouveau</div>
      <div class="first-run-experience-body">
        Choisissez les fiches qui vous tiendront informé sur les sujets qui vous intéressent
      </div>
      <div class="first-run-experience-body">
        Consultez toutes les options des fiches dans <a is="action-link" id="customizeChromeLink" tabIndex=0 on-click="onCustomizeModuleFre_">Personnaliser Chrome</a>
      </div>
      <cr-button class="action-button" on-click="onModulesFreOptIn_">
        OK
      </cr-button>
      <cr-button class="cancel-button" on-click="onModulesFreOptOut_">
        Ne pas afficher
      </cr-button>
    </div>
  </template>
  <div id="modules"></div>
</div>
<cr-toast id="removeModuleToast" duration="10000">
  <div id="removeModuleToastMessage">[[removedModuleData_.message]]</div>
  <template is="dom-if" if="[[removedModuleData_.undo]]">
    <cr-button id="undoRemoveModuleButton" aria-label="Appuyez sur Ctrl+Z pour annuler" on-click="onUndoRemoveModuleButtonClick_">
      Annuler
    </cr-button>
  </template>
</cr-toast>
<cr-toast id="removeModuleFreToast" duration="10000">
  <div id="removeModuleFreToastMessage">
    Vous ne verrez plus de fiches sur cette page.
  </div>
  <cr-button id="undoRemoveModuleFreButton" aria-label="Appuyez sur Ctrl+Z pour annuler" on-click="onUndoRemoveModuleFreButtonClick_">
    Annuler
  </cr-button>
</cr-toast>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ModulesElement extends PolymerElement{constructor(){super(...arguments);this.setDisabledModulesListenerId_=null;this.setModulesFreVisibilityListenerId_=null;this.eventTracker_=new EventTracker}static get is(){return"ntp-modules"}static get template(){return getTemplate$2()}static get properties(){return{disabledModules_:{type:Object,value:()=>({all:true,ids:[]})},dismissedModules_:{type:Array,value:()=>[]},dragEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("modulesDragAndDropEnabled"),reflectToAttribute:true},moduleImpressionDetected_:Boolean,modulesFreRemoved_:{type:Boolean,value:false},modulesFreShown:{type:Boolean,computed:`computeModulesFreShown_(modulesLoaded_, modulesFreVisible_, modulesShownToUser)`,observer:"onModulesFreShownChange_",notify:true,reflectToAttribute:true},modulesFreVisible_:{type:Boolean,value:false},modulesLoaded_:Boolean,modulesLoadedAndVisibilityDetermined_:{type:Boolean,computed:`computeModulesLoadedAndVisibilityDetermined_(\n          modulesLoaded_,\n          modulesVisibilityDetermined_)`,observer:"onModulesLoadedAndVisibilityDeterminedChange_"},modulesShownToUser:{type:Boolean,notify:true},modulesVisibilityDetermined_:Boolean,removedModuleData_:{type:Object,value:null}}}static get observers(){return["onRemovedModulesChange_(dismissedModules_.*, disabledModules_)"]}connectedCallback(){super.connectedCallback();this.setDisabledModulesListenerId_=NewTabPageProxy.getInstance().callbackRouter.setDisabledModules.addListener(((all,ids)=>{this.disabledModules_={all:all,ids:ids};this.modulesVisibilityDetermined_=true}));this.setModulesFreVisibilityListenerId_=NewTabPageProxy.getInstance().callbackRouter.setModulesFreVisibility.addListener((visible=>{this.modulesFreVisible_=visible}));NewTabPageProxy.getInstance().handler.updateDisabledModules();NewTabPageProxy.getInstance().handler.updateModulesFreVisibility();this.eventTracker_.add(window,"keydown",this.onWindowKeydown_.bind(this))}disconnectedCallback(){super.disconnectedCallback();assert(this.setDisabledModulesListenerId_);NewTabPageProxy.getInstance().callbackRouter.removeListener(this.setDisabledModulesListenerId_);assert(this.setModulesFreVisibilityListenerId_);NewTabPageProxy.getInstance().callbackRouter.removeListener(this.setModulesFreVisibilityListenerId_);this.eventTracker_.removeAll()}ready(){super.ready();this.renderModules_()}appendModuleContainers_(moduleContainers){this.$.modules.innerHTML=window.trustedTypes.emptyHTML;this.modulesShownToUser=false;moduleContainers.forEach((moduleContainer=>{if(!moduleContainer.hidden){this.modulesShownToUser=!moduleContainer.hidden}this.$.modules.appendChild(moduleContainer)}))}async renderModules_(){this.moduleImpressionDetected_=false;this.modulesIdNames_=(await NewTabPageProxy.getInstance().handler.getModulesIdNames()).data;const modules=await ModuleRegistry.getInstance().initializeModulesHavingIds(this.modulesIdNames_.map((m=>m.id)),loadTimeData.getInteger("modulesLoadTimeout"));if(modules){NewTabPageProxy.getInstance().handler.onModulesLoadedWithData(modules.map((module=>module.descriptor.id)));const moduleContainers=modules.map((module=>module.elements.map((element=>{const moduleWrapper=new ModuleWrapperElement;moduleWrapper.module={element:element,descriptor:module.descriptor};if(this.dragEnabled_){moduleWrapper.addEventListener("mousedown",(e=>this.onDragStart_(e)))}moduleWrapper.addEventListener("dismiss-module",(e=>this.onDismissModule_(e)));moduleWrapper.addEventListener("disable-module",(e=>this.onDisableModule_(e)));moduleWrapper.addEventListener("detect-impression",(()=>{if(!this.moduleImpressionDetected_){NewTabPageProxy.getInstance().handler.incrementModulesShownCount();if(this.modulesFreShown){chrome.metricsPrivate.recordBoolean(`NewTabPage.Modules.FreImpression`,this.modulesFreShown)}}this.moduleImpressionDetected_=true}));const moduleContainer=this.ownerDocument.createElement("div");moduleContainer.classList.add("module-container");moduleContainer.hidden=this.moduleDisabled_(module.descriptor.id);moduleContainer.appendChild(moduleWrapper);return moduleContainer})))).flat();chrome.metricsPrivate.recordSmallCount("NewTabPage.Modules.LoadedModulesCount",modules.length);this.logModuleLoadedWithModules_(modules);this.appendModuleContainers_(moduleContainers);this.onModulesLoaded_()}}logModuleLoadedWithModules_(modules){const moduleDescriptorIds=modules.map((m=>m.descriptor.id));for(const moduleDescriptorId of moduleDescriptorIds){moduleDescriptorIds.forEach((id=>{if(id!==moduleDescriptorId){chrome.metricsPrivate.recordSparseValueWithPersistentHash(`NewTabPage.Modules.LoadedWith.${moduleDescriptorId}`,id)}}))}}onWindowKeydown_(e){let ctrlKeyPressed=e.ctrlKey;if(ctrlKeyPressed&&e.key==="z"){this.onUndoRemoveModuleButtonClick_();this.onUndoRemoveModuleFreButtonClick_()}}onModulesLoaded_(){this.modulesLoaded_=true}computeModulesLoadedAndVisibilityDetermined_(){return this.modulesLoaded_&&this.modulesVisibilityDetermined_}onModulesLoadedAndVisibilityDeterminedChange_(){if(this.modulesLoadedAndVisibilityDetermined_){this.modulesIdNames_.forEach((({id:id})=>{chrome.metricsPrivate.recordBoolean(`NewTabPage.Modules.EnabledOnNTPLoad.${id}`,!this.disabledModules_.all&&!this.disabledModules_.ids.includes(id))}));chrome.metricsPrivate.recordBoolean("NewTabPage.Modules.VisibleOnNTPLoad",!this.disabledModules_.all);this.dispatchEvent(new Event("modules-loaded"))}}onDismissModule_(e){const id=e.target.module.descriptor.id;const restoreCallback=e.detail.restoreCallback;this.removedModuleData_={message:e.detail.message,undo:restoreCallback?()=>{this.splice("dismissedModules_",this.dismissedModules_.indexOf(id),1);restoreCallback();NewTabPageProxy.getInstance().handler.onRestoreModule(id)}:undefined};if(!this.dismissedModules_.includes(id)){this.push("dismissedModules_",id)}this.$.removeModuleToast.show();NewTabPageProxy.getInstance().handler.onDismissModule(id)}onDisableModule_(e){const id=e.target.module.descriptor.id;const restoreCallback=e.detail.restoreCallback;this.removedModuleData_={message:e.detail.message,undo:()=>{if(restoreCallback){restoreCallback()}NewTabPageProxy.getInstance().handler.setModuleDisabled(id,false);chrome.metricsPrivate.recordSparseValueWithPersistentHash("NewTabPage.Modules.Enabled",id);chrome.metricsPrivate.recordSparseValueWithPersistentHash("NewTabPage.Modules.Enabled.Toast",id)}};NewTabPageProxy.getInstance().handler.setModuleDisabled(id,true);this.$.removeModuleToast.show();chrome.metricsPrivate.recordSparseValueWithPersistentHash("NewTabPage.Modules.Disabled",id);chrome.metricsPrivate.recordSparseValueWithPersistentHash("NewTabPage.Modules.Disabled.ModuleRequest",id)}moduleDisabled_(id){return this.disabledModules_.all||this.dismissedModules_.includes(id)||this.disabledModules_.ids.includes(id)}onUndoRemoveModuleButtonClick_(){if(!this.removedModuleData_){return}this.removedModuleData_.undo();this.$.removeModuleToast.hide();this.removedModuleData_=null;this.modulesFreRemoved_=false}onRemovedModulesChange_(){this.shadowRoot.querySelectorAll("ntp-module-wrapper").forEach((moduleWrapper=>{moduleWrapper.parentElement.hidden=this.moduleDisabled_(moduleWrapper.module.descriptor.id)}));const moduleContainers=[...this.shadowRoot.querySelectorAll(".module-container")];this.appendModuleContainers_(moduleContainers)}computeModulesFreShown_(){return loadTimeData.getBoolean("modulesFirstRunExperienceEnabled")&&this.modulesLoaded_&&this.modulesFreVisible_&&this.modulesShownToUser}onModulesFreShownChange_(){chrome.metricsPrivate.recordBoolean(`NewTabPage.Modules.FreLoaded`,this.modulesFreShown)}onCustomizeModuleFre_(){this.dispatchEvent(new Event("customize-module",{bubbles:true,composed:true}))}hideFre_(){NewTabPageProxy.getInstance().handler.setModulesFreVisible(false)}onModulesFreOptIn_(){this.hideFre_();NewTabPageProxy.getInstance().handler.logModulesFreOptInStatus(OptInStatus$1.kExplicitOptIn)}onModulesFreOptOut_(){this.hideFre_();NewTabPageProxy.getInstance().handler.setModulesVisible(false);this.$.removeModuleToast.hide();this.removedModuleData_=null;this.modulesFreRemoved_=true;this.$.removeModuleFreToast.show();NewTabPageProxy.getInstance().handler.logModulesFreOptInStatus(OptInStatus$1.kOptOut)}onUndoRemoveModuleFreButtonClick_(){if(!this.modulesFreRemoved_){return}NewTabPageProxy.getInstance().handler.setModulesFreVisible(true);NewTabPageProxy.getInstance().handler.setModulesVisible(true);this.$.removeModuleFreToast.hide();this.modulesFreRemoved_=false}onDragStart_(e){assert(loadTimeData.getBoolean("modulesDragAndDropEnabled"));const dragElement=e.target;const dragElementRect=dragElement.getBoundingClientRect();const dragOffset={x:e.x-dragElementRect.x,y:e.y-dragElementRect.y};dragElement.parentElement.style.width=`${dragElementRect.width}px`;dragElement.parentElement.style.height=`${dragElementRect.height}px`;const undraggedModuleWrappers=[...this.shadowRoot.querySelectorAll("ntp-module-wrapper")].filter((moduleWrapper=>moduleWrapper!==dragElement));const dragOver=e=>{e.preventDefault();dragElement.setAttribute("dragging","");dragElement.style.left=`${e.x-dragOffset.x}px`;dragElement.style.top=`${e.y-dragOffset.y}px`};const dragEnter=e=>{const moduleContainers=[...this.shadowRoot.querySelectorAll(".module-container:not([hidden])"),...this.shadowRoot.querySelectorAll(".module-container[hidden]")];const dragIndex=moduleContainers.indexOf(dragElement.parentElement);const dropIndex=moduleContainers.indexOf(e.target.parentElement);const dragContainer=moduleContainers[dragIndex];const firstRects=undraggedModuleWrappers.map((moduleWrapper=>moduleWrapper.getBoundingClientRect()));moduleContainers.splice(dragIndex,1);moduleContainers.splice(dropIndex,0,dragContainer);this.appendModuleContainers_(moduleContainers);undraggedModuleWrappers.forEach(((moduleWrapper,i)=>{const lastRect=moduleWrapper.getBoundingClientRect();const invertX=firstRects[i].left-lastRect.left;const invertY=firstRects[i].top-lastRect.top;moduleWrapper.animate([{transform:`translate(${invertX}px, ${invertY}px)`,zIndex:0},{transform:"translate(0)",zIndex:0}],{duration:800,easing:"ease"})}))};undraggedModuleWrappers.forEach((moduleWrapper=>{moduleWrapper.addEventListener("mouseover",dragEnter)}));this.ownerDocument.addEventListener("mousemove",dragOver);this.ownerDocument.addEventListener("mouseup",(()=>{this.ownerDocument.removeEventListener("mousemove",dragOver);undraggedModuleWrappers.forEach((moduleWrapper=>{moduleWrapper.removeEventListener("mouseover",dragEnter)}));const firstRect=dragElement.getBoundingClientRect();dragElement.removeAttribute("dragging");dragElement.style.removeProperty("left");dragElement.style.removeProperty("top");const lastRect=dragElement.getBoundingClientRect();const invertX=firstRect.left-lastRect.left;const invertY=firstRect.top-lastRect.top;dragElement.animate([{transform:`translate(${invertX}px, ${invertY}px)`,zIndex:2},{transform:"translate(0)",zIndex:2}],{duration:800,easing:"ease"});const moduleIds=[...this.shadowRoot.querySelectorAll("ntp-module-wrapper")].map((moduleWrapper=>moduleWrapper.module.descriptor.id));NewTabPageProxy.getInstance().handler.setModulesOrder(moduleIds)}),{once:true})}}customElements.define(ModulesElement.is,ModulesElement);function getTemplate$1(){return html`<!--_html_template_start_--><style include="history-clusters-shared-style">:host{background:var(--color-new-tab-page-module-item-background);border-radius:var(--ntp-module-item-border-radius);display:inline-flex;height:100%;min-width:0;width:100%}.hover-layer{display:none;background:var(--color-new-tab-page-module-item-background-hovered);border-radius:var(--ntp-module-item-border-radius);inset:0;pointer-events:none;position:absolute}a:active,a:hover,a:link,a:visited{text-decoration:none}a:hover .hover-layer{display:block}a:active .hover-layer{background:var(--color-new-tab-page-active-background)}:host-context(.focus-outline-visible) a:focus,a:focus-visible{border-radius:var(--ntp-module-item-border-radius);box-shadow:var(--ntp-focus-shadow);outline:0}#content{flex:1;min-width:0;position:relative}#label-container{color:var(--color-new-tab-page-secondary-foreground);display:flex;flex-direction:row;font-size:11px;height:20px;margin:16px}:host([images-enabled]) #label-container{background:linear-gradient(0,rgba(0,0,0,0) 0,rgba(0,0,0,.4) 69.79%);border-radius:var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius) 0 0;color:var(--color-new-tab-page-primary-foreground);display:flex;font-size:11px;position:absolute;height:40px;margin:4px;width:calc(100% - 8px);z-index:1}#label{color:var(--color-new-tab-page-secondary-foreground)}:host([images-enabled]) #label{color:#fff;margin-top:12px}:host([images-enabled]) #icon{margin:12px 8px 0 12px}#image{background:var(--color-new-tab-page-module-background);border-radius:var(--ntp-module-item-border-radius);margin:4px;overflow:hidden;position:relative;height:122px}:host([format=wide]:not([show-related-searches])) #image{height:68px}#image img{height:100%;object-fit:cover;width:100%}#image-icon{height:24px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:24px}#icon{background-color:#fff;background-size:10px;height:16px;margin-inline-end:8px;width:16px}#title{-webkit-box-orient:vertical;-webkit-line-clamp:3;color:var(--color-new-tab-page-primary-foreground);display:-webkit-box;font-size:var(--ntp-module-text-size);height:60px;line-height:20px;margin:16px;white-space:initial}:host([format=wide]) #title{margin:12px 16px}#date{color:var(--color-new-tab-page-secondary-foreground);min-width:max-content;bottom:16px;font-size:11px;left:16px;line-height:12px;position:absolute}#annotation{display:none}@media (forced-colors:active){:host-context(.focus-outline-visible) a:focus{outline:var(--cr-focus-outline-hcm)}a{border-radius:var(--ntp-module-item-border-radius);outline:var(--cr-border-hcm)}}#discountChip{background:var(--color-sys-tertiary-container);border-radius:4px;color:var(--color-sys-on-tertiary-container);display:inline-block;font-weight:500;font-size:11px;height:18px;line-height:18px;margin-inline-start:16px;margin-top:8px;padding-inline-end:4px;padding-inline-start:4px;text-align:center}:host([has-discount]) #title{-webkit-line-clamp:1;height:20px;margin-bottom:0}</style>
<a id="content" href="[[visit.normalizedUrl.url]]" aria-label$="[[tileLabel_]]">
  <div class="hover-layer"></div>
  <div id="label-container">
    <page-favicon id="icon" url="[[visit.normalizedUrl]]" is-known-to-sync="[[visit.isKnownToSync]]" size="10">
    </page-favicon>
    <div id="label" class="truncate">[[label_]]</div>
  </div>
  <div id="image" hidden="[[!imagesEnabled]]">
    <template is="dom-if" if="[[imageUrl_]]" restamp>
      <img is="cr-auto-img" auto-src="[[imageUrl_.url]]" draggable="false" alt="">
      
    </template>
    <template is="dom-if" if="[[!imageUrl_]]" restamp>
      <page-favicon id="image-icon" url="[[visit.normalizedUrl]]" is-known-to-sync="[[visit.isKnownToSync]]" size="24">
      </page-favicon>
    </template>
  </div>
  <div id="title" class="truncate">[[visit.pageTitle]]</div>
  <template is="dom-if" if="[[hasDiscount]]" restamp>
    <div id="discountChip">[[discount]]</div>
  </template>
  <template is="dom-if" if="[[annotation_]]">
        <div id="annotation">[[annotation_]]</div>
  </template>
  <div id="date">[[visit.relativeDate]]</div>
</a>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class VisitTileModuleElement extends(I18nMixin(PolymerElement)){static get is(){return"ntp-history-clusters-visit-tile"}static get template(){return getTemplate$1()}static get properties(){return{visit:{type:Object,observer:"onVisitUpdated_"},annotation_:{type:String,computed:"computeAnnotation_(visit)"},label_:{type:String,computed:`computeLabel_(visit.urlForDisplay)`},imagesEnabled:{type:Boolean,reflectToAttribute:true},imageUrl_:{type:Object,value:null,reflectToAttribute:true},format:{type:String,reflectToAttribute:true},discount:{type:String},hasDiscount:{type:Boolean,computed:`computeHasDiscount_(discount)`,reflectToAttribute:true},tileLabel_:{type:String,computed:`computeTileLabel_(discount, label_)`}}}hasImageUrl(){return!!this.imageUrl_}computeAnnotation_(_visit){if(Annotation.kBookmarked in this.visit.annotations){return loadTimeData.getString("modulesJourneysBookmarked")}return""}computeLabel_(){let domain=new URL(this.visit.normalizedUrl.url).hostname;domain=domain.replace("www.","");return domain}computeHasDiscount_(){return!!this.discount&&this.discount.length!==0}async onVisitUpdated_(){const visitUrl=this.visit.normalizedUrl;if(visitUrl&&this.visit.hasUrlKeyedImage&&this.visit.isKnownToSync){const result=await PageImageServiceBrowserProxy.getInstance().handler.getPageImageUrl(ClientId.NtpQuests,visitUrl,{suggestImages:false,optimizationGuideImages:true});const success=!!(result&&result.result);chrome.metricsPrivate.recordBoolean("NewTabPage.HistoryClusters.ImageLoadSuccess",success);if(success){this.imageUrl_=result.result.imageUrl;return}}this.imageUrl_=null}computeTileLabel_(){const labelTexts=[this.visit.pageTitle,this.label_,this.visit.relativeDate];if(!!this.discount&&this.discount.length!==0){labelTexts.push(this.discount)}return labelTexts.join(", ")}}customElements.define(VisitTileModuleElement.is,VisitTileModuleElement);function getTemplate(){return html`<!--_html_template_start_--><style include="cr-hidden-style">#container{display:flex;flex-flow:row wrap;gap:var(--container-gap);justify-content:center;margin-top:8px;max-width:var(--container-max-width,inherit)}#undoToastMessage{flex-grow:1}</style>
<div id="container">
</div>
<template>
  <ntp-module-wrapper module="[[item]]" hidden="[[moduleDisabled_(disabledModules_, item)]]" on-disable-module="onDisableModule_" on-dismiss-module-instance="onDismissModuleInstance_">
  </ntp-module-wrapper>
</template>
<cr-toast id="undoToast" duration="10000">
  <div id="undoToastMessage">[[undoData_.message]]</div>
  <template is="dom-if" if="[[undoData_.undo]]">
    <cr-button id="undoButton" aria-label="Appuyez sur Ctrl+Z pour annuler" on-click="onUndoButtonClick_">
      Annuler
    </cr-button>
  </template>
</cr-toast>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SUPPORTED_MODULE_WIDTHS=[{name:"narrow",value:312},{name:"medium",value:360},{name:"wide",value:728}];const CONTAINER_GAP_WIDTH=8;const MARGIN_WIDTH=48;const METRIC_NAME_MODULE_DISABLED="NewTabPage.Modules.Disabled";const MODULE_CUSTOMIZE_ELEMENT_ID="NewTabPageUI::kModulesCustomizeIPHAnchorElement";const AppElementBase=HelpBubbleMixin(PolymerElement);class ModulesV2Element extends AppElementBase{constructor(){super(...arguments);this.eventTracker_=new EventTracker;this.setDisabledModulesListenerId_=null;this.containerObserver_=null;this.templateInstances_=[]}static get is(){return"ntp-modules-v2"}static get template(){return getTemplate()}static get properties(){return{disabledModules_:{type:Object,observer:"onDisabledModulesChange_",value:()=>({all:true,ids:[]})},modulesShownToUser:{type:Boolean,notify:true},undoData_:{type:Object,value:null}}}connectedCallback(){super.connectedCallback();this.setDisabledModulesListenerId_=NewTabPageProxy.getInstance().callbackRouter.setDisabledModules.addListener(((all,ids)=>{this.disabledModules_={all:all,ids:ids}}));NewTabPageProxy.getInstance().handler.updateDisabledModules();const widths=new Set;for(let i=0;i<SUPPORTED_MODULE_WIDTHS.length;i++){const namedWidth=SUPPORTED_MODULE_WIDTHS[i];for(let u=1;u<=this.maxColumnCount_-i;u++){const width=namedWidth.value*u+CONTAINER_GAP_WIDTH*(u-1);if(width<=this.containerMaxWidth_){widths.add(width)}}}const thresholds=[...widths];thresholds.sort(((i,j)=>i-j));const queries=[];for(let i=1;i<thresholds.length-1;i++){queries.push({maxWidth:thresholds[i+1]-1,query:`(min-width: ${thresholds[i]+2*MARGIN_WIDTH}px) and (max-width: ${thresholds[i+1]-1+2*MARGIN_WIDTH}px)`})}queries.splice(0,0,{maxWidth:thresholds[0],query:`(max-width: ${thresholds[0]-1+2*MARGIN_WIDTH}px)`});queries.push({maxWidth:thresholds[thresholds.length-1],query:`(min-width: ${thresholds[thresholds.length-1]+2*MARGIN_WIDTH}px)`});queries.forEach((details=>{const query=WindowProxy.getInstance().matchMedia(details.query);this.eventTracker_.add(query,"change",(e=>{if(e.matches){this.updateContainerAndChildrenStyles_(details.maxWidth)}}))}));this.eventTracker_.add(window,"keydown",this.onWindowKeydown_.bind(this));this.containerObserver_=new MutationObserver((()=>{this.updateContainerAndChildrenStyles_()}));this.containerObserver_.observe(this.$.container,{childList:true})}disconnectedCallback(){super.disconnectedCallback();assert(this.setDisabledModulesListenerId_);NewTabPageProxy.getInstance().callbackRouter.removeListener(this.setDisabledModulesListenerId_);this.eventTracker_.removeAll();this.containerObserver_.disconnect()}ready(){super.ready();this.updateStyles({"--container-gap":`${CONTAINER_GAP_WIDTH}px`});this.maxColumnCount_=loadTimeData.getInteger("modulesMaxColumnCount");this.containerMaxWidth_=this.maxColumnCount_*SUPPORTED_MODULE_WIDTHS[0].value+(this.maxColumnCount_-1)*CONTAINER_GAP_WIDTH;this.loadModules_()}moduleDisabled_(disabledModules,instance){return disabledModules.all||disabledModules.ids.includes(instance.descriptor.id)}async loadModules_(){const modulesIdNames=(await NewTabPageProxy.getInstance().handler.getModulesIdNames()).data;const modules=await ModuleRegistry.getInstance().initializeModulesHavingIds(modulesIdNames.map((m=>m.id)),loadTimeData.getInteger("modulesLoadTimeout"));if(modules){NewTabPageProxy.getInstance().handler.onModulesLoadedWithData(modules.map((module=>module.descriptor.id)));const template=this.shadowRoot.querySelector("template");const moduleWrapperConstructor=templatize(template,this,{parentModel:true,forwardHostProp:this.forwardHostProp_,instanceProps:{item:true}});if(modules.length>1){const maxModuleInstanceCount=loadTimeData.getInteger("multipleLoadedModulesMaxModuleInstanceCount");if(maxModuleInstanceCount>0){modules.forEach((module=>{module.elements.splice(maxModuleInstanceCount,module.elements.length-maxModuleInstanceCount)}))}}this.templateInstances_=modules.map((module=>module.elements.map((element=>({element:element,descriptor:module.descriptor}))))).flat().map((instance=>new moduleWrapperConstructor({item:instance})));this.templateInstances_.map((t=>t.children[0])).forEach((wrapperElement=>{this.$.container.appendChild(wrapperElement)}));chrome.metricsPrivate.recordSmallCount("NewTabPage.Modules.LoadedModulesCount",modules.length);modulesIdNames.forEach((({id:id})=>{chrome.metricsPrivate.recordBoolean(`NewTabPage.Modules.EnabledOnNTPLoad.${id}`,!this.disabledModules_.all&&!this.disabledModules_.ids.includes(id))}));chrome.metricsPrivate.recordSmallCount("NewTabPage.Modules.InstanceCount",this.templateInstances_.length);chrome.metricsPrivate.recordBoolean("NewTabPage.Modules.VisibleOnNTPLoad",!this.disabledModules_.all);this.recordModuleLoadedWithModules_(modules);this.dispatchEvent(new Event("modules-loaded"));if(this.templateInstances_.length>0){this.registerHelpBubble(MODULE_CUSTOMIZE_ELEMENT_ID,["#container","ntp-module-wrapper","#moduleElement"],{fixed:true});setTimeout((()=>{NewTabPageProxy.getInstance().handler.maybeShowFeaturePromo(IphFeature.kCustomizeModules)}),1e3)}}}recordModuleLoadedWithModules_(modules){const moduleDescriptorIds=modules.map((m=>m.descriptor.id));for(const moduleDescriptorId of moduleDescriptorIds){moduleDescriptorIds.forEach((id=>{if(id!==moduleDescriptorId){chrome.metricsPrivate.recordSparseValueWithPersistentHash(`NewTabPage.Modules.LoadedWith.${moduleDescriptorId}`,id)}}))}}forwardHostProp_(property,value){this.templateInstances_.forEach((instance=>{instance.forwardHostProp(property,value)}))}updateContainerAndChildrenStyles_(availableWidth){if(typeof availableWidth==="undefined"){availableWidth=Math.min(document.body.clientWidth-2*MARGIN_WIDTH,this.containerMaxWidth_)}const moduleWrappers=Array.from(this.shadowRoot.querySelectorAll("ntp-module-wrapper:not([hidden])"));this.modulesShownToUser=moduleWrappers.length!==0;if(moduleWrappers.length===0){return}this.updateStyles({"--container-max-width":`${availableWidth}px`});const clamp=(min,val,max)=>Math.max(min,Math.min(val,max));const rowMaxInstanceCount=clamp(1,Math.floor((availableWidth+CONTAINER_GAP_WIDTH)/(CONTAINER_GAP_WIDTH+SUPPORTED_MODULE_WIDTHS[0].value)),this.maxColumnCount_);let index=0;while(index<moduleWrappers.length){const instances=moduleWrappers.slice(index,index+rowMaxInstanceCount).map((w=>w.module));let namedWidth=SUPPORTED_MODULE_WIDTHS[0];for(let i=1;i<SUPPORTED_MODULE_WIDTHS.length;i++){if(Math.floor((availableWidth-CONTAINER_GAP_WIDTH*(instances.length-1))/SUPPORTED_MODULE_WIDTHS[i].value)<instances.length){break}namedWidth=SUPPORTED_MODULE_WIDTHS[i]}instances.slice(0,instances.length).forEach((instance=>{instance.element.setAttribute("format",namedWidth.name);instance.element.style.width=`${namedWidth.value}px`}));index+=instances.length}}onDisableModule_(e){const id=e.target.module.descriptor.id;const restoreCallback=e.detail.restoreCallback;this.undoData_={message:e.detail.message,undo:()=>{if(restoreCallback){restoreCallback()}NewTabPageProxy.getInstance().handler.setModuleDisabled(id,false);chrome.metricsPrivate.recordSparseValueWithPersistentHash("NewTabPage.Modules.Enabled",id);chrome.metricsPrivate.recordSparseValueWithPersistentHash("NewTabPage.Modules.Enabled.Toast",id)}};NewTabPageProxy.getInstance().handler.setModuleDisabled(id,true);this.$.undoToast.show();chrome.metricsPrivate.recordSparseValueWithPersistentHash(METRIC_NAME_MODULE_DISABLED,id);chrome.metricsPrivate.recordSparseValueWithPersistentHash(`${METRIC_NAME_MODULE_DISABLED}.ModuleRequest`,id)}onDisabledModulesChange_(){this.updateContainerAndChildrenStyles_()}onDismissModuleInstance_(e){const wrapper=e.target;const index=Array.from(wrapper.parentNode.children).indexOf(wrapper);wrapper.remove();const restoreCallback=e.detail.restoreCallback;this.undoData_={message:e.detail.message,undo:restoreCallback?()=>{this.$.container.insertBefore(wrapper,this.$.container.childNodes[index]);restoreCallback();recordOccurence("NewTabPage.Modules.Restored");recordOccurence(`NewTabPage.Modules.Restored.${wrapper.module.descriptor.id}`)}:undefined};this.$.undoToast.show();NewTabPageProxy.getInstance().handler.onDismissModule(wrapper.module.descriptor.id)}onUndoButtonClick_(){if(!this.undoData_){return}this.undoData_.undo();this.$.undoToast.hide();this.undoData_=null}onWindowKeydown_(e){let ctrlKeyPressed=e.ctrlKey;if(ctrlKeyPressed&&e.key==="z"){this.onUndoButtonClick_()}}}customElements.define(ModulesV2Element.is,ModulesV2Element);export{CartTileModuleElement,CartTileModuleElementV2,ChromeCartModuleElement,ChromeCartProxy,CustomizeBackgroundsElement,CustomizeDialogElement,CustomizeModulesElement,CustomizeShortcutsElement,DiscountConsentCard,DiscountConsentDialog,DiscountConsentVariation,DriveModuleElement$1 as DriveModuleElement,DriveProxy,DriveModuleElement as DriveV2ModuleElement,FeedModuleElement,FeedProxy,HistoryClusterElementType,HistoryClusterImageDisplayState$1 as HistoryClusterImageDisplayState,HistoryClusterImageDisplayState as HistoryClusterV2ImageDisplayState,HistoryClustersModuleElement$1 as HistoryClustersModuleElement,HistoryClustersProxyImpl$1 as HistoryClustersProxyImpl,HistoryClustersProxyImpl as HistoryClustersProxyImplV2,HistoryClustersModuleElement as HistoryClustersV2ModuleElement,InfoDialogElement,LAYOUT_1_MIN_IMAGE_VISITS,LAYOUT_1_MIN_VISITS,LAYOUT_2_MIN_IMAGE_VISITS,LAYOUT_2_MIN_VISITS,LAYOUT_3_MIN_IMAGE_VISITS,LAYOUT_3_MIN_VISITS,LensErrorType,LensFormElement,LensSubmitType,LensUploadDialogAction,LensUploadDialogElement,LensUploadDialogError,MODULE_CUSTOMIZE_ELEMENT_ID,MiddleSlotPromoElement,ModuleDescriptor,ModuleHeaderElement,ModuleHeaderElementV2,ModuleRegistry,ModuleWrapperElement,ModulesElement,ModulesV2Element,PageImageServiceBrowserProxy,PhotosModuleElement,PhotosProxy,PromoDismissAction,RecipesHandlerProxy,RecipesModuleElement,SUPPORTED_MODULE_WIDTHS,SuggestTileModuleElement$1 as SuggestTileModuleElement,TabResumptionModuleElement,TabResumptionProxyImpl,TileModuleElement,VisitTileModuleElement,chromeCartDescriptor,counterfactualLoad,driveDescriptor$1 as driveDescriptor,driveDescriptor as driveV2Descriptor,feedDescriptor,historyClustersDescriptor$1 as historyClustersDescriptor,historyClustersDescriptor as historyClustersV2Descriptor,photosDescriptor,recipeTasksDescriptor,tabResumptionDescriptor};