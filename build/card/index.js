(()=>{"use strict";var t,e,o,r={247:(t,e,o)=>{const r=window.wp.blocks,s=window.wp.data,n=window.React;var i=o.t(n,2);const a=window.wp.blockEditor,l=window.wp.components,c=window.wp.i18n,d=window.wp.element,u=globalThis,h=u.ShadowRoot&&(void 0===u.ShadyCSS||u.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,p=Symbol(),b=new WeakMap;class m{constructor(t,e,o){if(this._$cssResult$=!0,o!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(h&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=b.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&b.set(e,t))}return t}toString(){return this.cssText}}const g=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new m(o,t,p)},v=(t,e)=>{if(h)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const o of e){const e=document.createElement("style"),r=u.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=o.cssText,t.appendChild(e)}},f=h?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new m("string"==typeof t?t:t+"",void 0,p))(e)})(t):t,{is:y,defineProperty:_,getOwnPropertyDescriptor:w,getOwnPropertyNames:$,getOwnPropertySymbols:k,getPrototypeOf:x}=Object,C=globalThis,A=C.trustedTypes,E=A?A.emptyScript:"",S=C.reactiveElementPolyfillSupport,M=(t,e)=>t,O={toAttribute(t,e){switch(e){case Boolean:t=t?E:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},T=(t,e)=>!y(t,e),P={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:T};Symbol.metadata??=Symbol("metadata"),C.litPropertyMetadata??=new WeakMap;class N extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=P){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,e);void 0!==r&&_(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){const{get:r,set:s}=w(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){const n=r?.call(this);s.call(this,e),this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??P}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const t=x(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const t=this.properties,e=[...$(t),...k(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(f(t))}else void 0!==t&&e.push(f(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return v(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e){const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(void 0!==r&&!0===o.reflect){const s=(void 0!==o.converter?.toAttribute?o.converter:O).toAttribute(e,o.type);this._$Em=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){const o=this.constructor,r=o._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=o.getPropertyOptions(r),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:O;this._$Em=r,this[r]=s.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,o,r=!1,s){if(void 0!==t){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??T)(r?s:this[t],e))return;this.C(t,e,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t)!0!==o.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[M("elementProperties")]=new Map,N[M("finalized")]=new Map,S?.({ReactiveElement:N}),(C.reactiveElementVersions??=[]).push("2.0.2");const U=globalThis,z=U.trustedTypes,L=z?z.createPolicy("lit-html",{createHTML:t=>t}):void 0,B="$lit$",V=`lit$${(Math.random()+"").slice(9)}$`,I="?"+V,R=`<${I}>`,j=document,H=()=>j.createComment(""),F=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,W=t=>D(t)||"function"==typeof t?.[Symbol.iterator],q="[ \t\n\f\r]",Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,G=/>/g,K=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),X=/'/g,Q=/"/g,Y=/^(?:script|style|textarea|title)$/i,tt=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),et=tt(1),ot=tt(2),rt=Symbol.for("lit-noChange"),st=Symbol.for("lit-nothing"),nt=new WeakMap,it=j.createTreeWalker(j,129);function at(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==L?L.createHTML(e):e}const lt=(t,e)=>{const o=t.length-1,r=[];let s,n=2===e?"<svg>":"",i=Z;for(let e=0;e<o;e++){const o=t[e];let a,l,c=-1,d=0;for(;d<o.length&&(i.lastIndex=d,l=i.exec(o),null!==l);)d=i.lastIndex,i===Z?"!--"===l[1]?i=J:void 0!==l[1]?i=G:void 0!==l[2]?(Y.test(l[2])&&(s=RegExp("</"+l[2],"g")),i=K):void 0!==l[3]&&(i=K):i===K?">"===l[0]?(i=s??Z,c=-1):void 0===l[1]?c=-2:(c=i.lastIndex-l[2].length,a=l[1],i=void 0===l[3]?K:'"'===l[3]?Q:X):i===Q||i===X?i=K:i===J||i===G?i=Z:(i=K,s=void 0);const u=i===K&&t[e+1].startsWith("/>")?" ":"";n+=i===Z?o+R:c>=0?(r.push(a),o.slice(0,c)+B+o.slice(c)+V+u):o+V+(-2===c?e:u)}return[at(t,n+(t[o]||"<?>")+(2===e?"</svg>":"")),r]};class ct{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let s=0,n=0;const i=t.length-1,a=this.parts,[l,c]=lt(t,e);if(this.el=ct.createElement(l,o),it.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=it.nextNode())&&a.length<i;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(B)){const e=c[n++],o=r.getAttribute(t).split(V),i=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:i[2],strings:o,ctor:"."===i[1]?bt:"?"===i[1]?mt:"@"===i[1]?gt:pt}),r.removeAttribute(t)}else t.startsWith(V)&&(a.push({type:6,index:s}),r.removeAttribute(t));if(Y.test(r.tagName)){const t=r.textContent.split(V),e=t.length-1;if(e>0){r.textContent=z?z.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],H()),it.nextNode(),a.push({type:2,index:++s});r.append(t[e],H())}}}else if(8===r.nodeType)if(r.data===I)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(V,t+1));)a.push({type:7,index:s}),t+=V.length-1}s++}}static createElement(t,e){const o=j.createElement("template");return o.innerHTML=t,o}}function dt(t,e,o=t,r){if(e===rt)return e;let s=void 0!==r?o._$Co?.[r]:o._$Cl;const n=F(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,o,r)),void 0!==r?(o._$Co??=[])[r]=s:o._$Cl=s),void 0!==s&&(e=dt(t,s._$AS(t,e.values),s,r)),e}class ut{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,r=(t?.creationScope??j).importNode(e,!0);it.currentNode=r;let s=it.nextNode(),n=0,i=0,a=o[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new ht(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new vt(s,this,t)),this._$AV.push(e),a=o[++i]}n!==a?.index&&(s=it.nextNode(),n++)}return it.currentNode=j,r}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class ht{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=st,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=dt(this,t,e),F(t)?t===st||null==t||""===t?(this._$AH!==st&&this._$AR(),this._$AH=st):t!==this._$AH&&t!==rt&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):W(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==st&&F(this._$AH)?this._$AA.nextSibling.data=t:this.$(j.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:o}=t,r="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=ct.createElement(at(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new ut(r,this),o=t.u(this.options);t.p(e),this.$(o),this._$AH=t}}_$AC(t){let e=nt.get(t.strings);return void 0===e&&nt.set(t.strings,e=new ct(t)),e}T(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const s of t)r===e.length?e.push(o=new ht(this.k(H()),this.k(H()),this,this.options)):o=e[r],o._$AI(s),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class pt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,s){this.type=1,this._$AH=st,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=st}_$AI(t,e=this,o,r){const s=this.strings;let n=!1;if(void 0===s)t=dt(this,t,e,0),n=!F(t)||t!==this._$AH&&t!==rt,n&&(this._$AH=t);else{const r=t;let i,a;for(t=s[0],i=0;i<s.length-1;i++)a=dt(this,r[o+i],e,i),a===rt&&(a=this._$AH[i]),n||=!F(a)||a!==this._$AH[i],a===st?t=st:t!==st&&(t+=(a??"")+s[i+1]),this._$AH[i]=a}n&&!r&&this.O(t)}O(t){t===st?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class bt extends pt{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===st?void 0:t}}class mt extends pt{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==st)}}class gt extends pt{constructor(t,e,o,r,s){super(t,e,o,r,s),this.type=5}_$AI(t,e=this){if((t=dt(this,t,e,0)??st)===rt)return;const o=this._$AH,r=t===st&&o!==st||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==st&&(o===st||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class vt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){dt(this,t)}}const ft={j:B,P:V,A:I,C:1,M:lt,L:ut,R:W,V:dt,D:ht,I:pt,H:mt,N:gt,U:bt,B:vt},yt=U.litHtmlPolyfillSupport;yt?.(ct,ht),(U.litHtmlVersions??=[]).push("3.1.0");class _t extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const r=o?.renderBefore??e;let s=r._$litPart$;if(void 0===s){const t=o?.renderBefore??null;r._$litPart$=s=new ht(e.insertBefore(H(),t),t,void 0,o??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return rt}}_t._$litElement$=!0,_t.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:_t});const wt=globalThis.litElementPolyfillSupport;wt?.({LitElement:_t}),(globalThis.litElementVersions??=[]).push("4.0.2");var $t=g`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,kt=g`
  ${$t}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;const xt=new Set,Ct=new MutationObserver(Tt),At=new Map;let Et,St=document.documentElement.dir||"ltr",Mt=document.documentElement.lang||navigator.language;function Ot(...t){t.map((t=>{const e=t.$code.toLowerCase();At.has(e)?At.set(e,Object.assign(Object.assign({},At.get(e)),t)):At.set(e,t),Et||(Et=t)})),Tt()}function Tt(){St=document.documentElement.dir||"ltr",Mt=document.documentElement.lang||navigator.language,[...xt.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}Ct.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class Pt{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){xt.add(this.host)}hostDisconnected(){xt.delete(this.host)}dir(){return`${this.host.dir||St}`.toLowerCase()}lang(){return`${this.host.lang||Mt}`.toLowerCase()}getTranslationData(t){var e,o;const r=new Intl.Locale(t.replace(/_/g,"-")),s=null==r?void 0:r.language.toLowerCase(),n=null!==(o=null===(e=null==r?void 0:r.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==o?o:"";return{locale:r,language:s,region:n,primary:At.get(`${s}-${n}`),secondary:At.get(s)}}exists(t,e){var o;const{primary:r,secondary:s}=this.getTranslationData(null!==(o=e.lang)&&void 0!==o?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(r&&r[t]||s&&s[t]||e.includeFallback&&Et&&Et[t])}term(t,...e){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let s;if(o&&o[t])s=o[t];else if(r&&r[t])s=r[t];else{if(!Et||!Et[t])return console.error(`No translation found for: ${String(t)}`),String(t);s=Et[t]}return"function"==typeof s?s(...e):s}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}}var Nt={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Ot(Nt);var Ut=Nt,zt=class extends Pt{};Ot(Ut);var Lt=Object.defineProperty,Bt=Object.defineProperties,Vt=Object.getOwnPropertyDescriptor,It=Object.getOwnPropertyDescriptors,Rt=Object.getOwnPropertySymbols,jt=Object.prototype.hasOwnProperty,Ht=Object.prototype.propertyIsEnumerable,Ft=(t,e,o)=>e in t?Lt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,Dt=(t,e)=>{for(var o in e||(e={}))jt.call(e,o)&&Ft(t,o,e[o]);if(Rt)for(var o of Rt(e))Ht.call(e,o)&&Ft(t,o,e[o]);return t},Wt=(t,e)=>Bt(t,It(e)),qt=(t,e,o,r)=>{for(var s,n=r>1?void 0:r?Vt(e,o):e,i=t.length-1;i>=0;i--)(s=t[i])&&(n=(r?s(e,o,n):s(n))||n);return r&&n&&Lt(e,o,n),n};const Zt={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:T},Jt=(t=Zt,e,o)=>{const{kind:r,metadata:s}=o;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(o.name,t),"accessor"===r){const{name:r}=o;return{set(o){const s=e.get.call(this);e.set.call(this,o),this.requestUpdate(r,s,t)},init(e){return void 0!==e&&this.C(r,void 0,t),e}}}if("setter"===r){const{name:r}=o;return function(o){const s=this[r];e.call(this,o),this.requestUpdate(r,s,t)}}throw Error("Unsupported decorator location: "+r)};function Gt(t){return(e,o)=>"object"==typeof o?Jt(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}function Kt(t){return Gt({...t,state:!0,attribute:!1})}const Xt=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,o),o);var Qt=class extends _t{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((([t,e])=>{this.constructor.define(t,e)}))}emit(t,e){const o=new CustomEvent(t,Dt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const r=customElements.get(t);if(!r)return void customElements.define(t,class extends e{},o);let s=" (unknown version)",n=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in r&&r.version&&(n=" v"+r.version),s&&n&&s===n||console.warn(`Attempted to register <${t}>${s}, but <${t}>${n} has already been registered.`)}};Qt.version="2.12.0",Qt.dependencies={},qt([Gt()],Qt.prototype,"dir",2),qt([Gt()],Qt.prototype,"lang",2);var Yt=class extends Qt{constructor(){super(...arguments),this.localize=new zt(this)}render(){return et`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Yt.styles=kt;var te=new WeakMap,ee=new WeakMap,oe=new WeakMap,re=new WeakSet,se=new WeakMap,ne=class{constructor(t,e){this.handleFormData=t=>{const e=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host),s="sl-button"===this.host.tagName.toLowerCase();!e&&!s&&"string"==typeof o&&o.length>0&&void 0!==r&&(Array.isArray(r)?r.forEach((e=>{t.formData.append(o,e.toString())})):t.formData.append(o,r.toString()))},this.handleFormSubmit=t=>{var e;const o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=te.get(this.form))||e.forEach((t=>{this.setUserInteracted(t,!0)}))),!this.form||this.form.noValidate||o||r(this.host)||(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),se.set(this.host,[])},this.handleInteraction=t=>{const e=se.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Dt({form:t=>{const e=t.form;if(e){const o=t.getRootNode().getElementById(e);if(o)return o}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),se.set(this.host,[]),this.options.assumeInteractionOn.forEach((t=>{this.host.addEventListener(t,this.handleInteraction)}))}hostDisconnected(){this.detachForm(),se.delete(this.host),this.options.assumeInteractionOn.forEach((t=>{this.host.removeEventListener(t,this.handleInteraction)}))}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,te.has(this.form)?te.get(this.form).add(this.host):te.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ee.has(this.form)||(ee.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),oe.has(this.form)||(oe.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=te.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ee.has(this.form)&&(this.form.reportValidity=ee.get(this.form),ee.delete(this.form)),oe.has(this.form)&&(this.form.checkValidity=oe.get(this.form),oe.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?re.add(t):re.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&o.setAttribute(t,e.getAttribute(t))}))),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=Boolean(re.has(e)),r=Boolean(e.required);e.toggleAttribute("data-required",r),e.toggleAttribute("data-optional",!r),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}},ie=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),ae=(Object.freeze(Wt(Dt({},ie),{valid:!1,valueMissing:!0})),Object.freeze(Wt(Dt({},ie),{valid:!1,customError:!0})),g`
  ${$t}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`),le=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},ce=g`
  ${$t}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,de="";function ue(t){de=t}var he={name:"default",resolver:t=>function(t=""){if(!de){const t=[...document.getElementsByTagName("script")],e=t.find((t=>t.hasAttribute("data-shoelace")));if(e)ue(e.getAttribute("data-shoelace"));else{const e=t.find((t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src)));let o="";e&&(o=e.getAttribute("src")),ue(o.split("/").slice(0,-1).join("/"))}}return de.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}(`assets/icons/${t}.svg`)},pe={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},be=[he,{name:"system",resolver:t=>t in pe?`data:image/svg+xml,${encodeURIComponent(pe[t])}`:""}],me=[];function ge(t){return be.find((e=>e.name===t))}function ve(t,e){const o=Dt({waitUntilFirstUpdate:!1},e);return(e,r)=>{const{update:s}=e,n=Array.isArray(t)?t:[t];e.update=function(t){n.forEach((e=>{const s=e;if(t.has(s)){const e=t.get(s),n=this[s];e!==n&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[r](e,n))}})),s.call(this,t)}}}const{D:fe}=ft;var ye,_e=Symbol(),we=Symbol(),$e=new Map,ke=class extends Qt{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let r;if(null==e?void 0:e.spriteSheet)return et`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(r=await fetch(t,{mode:"cors"}),!r.ok)return 410===r.status?_e:we}catch(t){return we}try{const t=document.createElement("div");t.innerHTML=await r.text();const e=t.firstElementChild;if("svg"!==(null==(o=null==e?void 0:e.tagName)?void 0:o.toLowerCase()))return _e;ye||(ye=new DOMParser);const s=ye.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):_e}catch(t){return _e}}connectedCallback(){super.connectedCallback(),me.push(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,me=me.filter((e=>e!==t))}getIconSource(){const t=ge(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),r=o?ge(this.library):void 0;if(!e)return void(this.svg=null);let s=$e.get(e);if(s||(s=this.resolveIcon(e,r),$e.set(e,s)),!this.initialRender)return;const n=await s;if(n===we&&$e.delete(e),e===this.getIconSource().url)if(((t,e)=>void 0!==t?._$litType$)(n))this.svg=n;else switch(n){case we:case _e:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),null==(t=null==r?void 0:r.mutator)||t.call(r,this.svg),this.emit("sl-load")}}render(){return this.svg}};ke.styles=ce,qt([Kt()],ke.prototype,"svg",2),qt([Gt({reflect:!0})],ke.prototype,"name",2),qt([Gt()],ke.prototype,"src",2),qt([Gt()],ke.prototype,"label",2),qt([Gt({reflect:!0})],ke.prototype,"library",2),qt([ve("label")],ke.prototype,"handleLabelChange",1),qt([ve(["name","src","library"])],ke.prototype,"setIcon",1);class xe{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const Ce=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends xe{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const o=t.element.classList;for(const t of this.it)t in e||(o.remove(t),this.it.delete(t));for(const t in e){const r=!!e[t];r===this.it.has(t)||this.st?.has(t)||(r?(o.add(t),this.it.add(t)):(o.remove(t),this.it.delete(t)))}return rt}}),Ae=Symbol.for(""),Ee=t=>{if(t?.r===Ae)return t?._$litStatic$},Se=(t,...e)=>({_$litStatic$:e.reduce(((e,o,r)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[r+1]),t[0]),r:Ae}),Me=new Map,Oe=t=>(e,...o)=>{const r=o.length;let s,n;const i=[],a=[];let l,c=0,d=!1;for(;c<r;){for(l=e[c];c<r&&void 0!==(n=o[c],s=Ee(n));)l+=s+e[++c],d=!0;c!==r&&a.push(n),i.push(l),c++}if(c===r&&i.push(e[r]),d){const t=i.join("$$lit$$");void 0===(e=Me.get(t))&&(i.raw=i,Me.set(t,e=i)),o=a}return t(e,...o)},Te=Oe(et),Pe=(Oe(ot),t=>t??st);var Ne=class extends Qt{constructor(){super(...arguments),this.formControlController=new ne(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new le(this,"[default]","prefix","suffix"),this.localize=new zt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ie}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Se`a`:Se`button`;return Te`
      <${e}
        part="base"
        class=${Ce({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Pe(t?void 0:this.disabled)}
        type=${Pe(t?void 0:this.type)}
        title=${this.title}
        name=${Pe(t?void 0:this.name)}
        value=${Pe(t?void 0:this.value)}
        href=${Pe(t?this.href:void 0)}
        target=${Pe(t?this.target:void 0)}
        download=${Pe(t?this.download:void 0)}
        rel=${Pe(t?this.rel:void 0)}
        role=${Pe(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Te` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Te`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};Ne.styles=ae,Ne.dependencies={"sl-icon":ke,"sl-spinner":Yt},qt([(t,e,o)=>{const r=t=>t.renderRoot?.querySelector(".button")??null;return Xt(t,e,{get(){return r(this)}})}],Ne.prototype,"button",2),qt([Kt()],Ne.prototype,"hasFocus",2),qt([Kt()],Ne.prototype,"invalid",2),qt([Gt()],Ne.prototype,"title",2),qt([Gt({reflect:!0})],Ne.prototype,"variant",2),qt([Gt({reflect:!0})],Ne.prototype,"size",2),qt([Gt({type:Boolean,reflect:!0})],Ne.prototype,"caret",2),qt([Gt({type:Boolean,reflect:!0})],Ne.prototype,"disabled",2),qt([Gt({type:Boolean,reflect:!0})],Ne.prototype,"loading",2),qt([Gt({type:Boolean,reflect:!0})],Ne.prototype,"outline",2),qt([Gt({type:Boolean,reflect:!0})],Ne.prototype,"pill",2),qt([Gt({type:Boolean,reflect:!0})],Ne.prototype,"circle",2),qt([Gt()],Ne.prototype,"type",2),qt([Gt()],Ne.prototype,"name",2),qt([Gt()],Ne.prototype,"value",2),qt([Gt()],Ne.prototype,"href",2),qt([Gt()],Ne.prototype,"target",2),qt([Gt()],Ne.prototype,"rel",2),qt([Gt()],Ne.prototype,"download",2),qt([Gt()],Ne.prototype,"form",2),qt([Gt({attribute:"formaction"})],Ne.prototype,"formAction",2),qt([Gt({attribute:"formenctype"})],Ne.prototype,"formEnctype",2),qt([Gt({attribute:"formmethod"})],Ne.prototype,"formMethod",2),qt([Gt({attribute:"formnovalidate",type:Boolean})],Ne.prototype,"formNoValidate",2),qt([Gt({attribute:"formtarget"})],Ne.prototype,"formTarget",2),qt([ve("disabled",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleDisabledChange",1);const Ue=new Set(["children","localName","ref","style","className"]),ze=new WeakMap,Le=(t,e,o,r,s)=>{const n=s?.[e];void 0===n||o===r?(t[e]=o,null==o&&e in HTMLElement.prototype&&t.removeAttribute(e)):((t,e,o)=>{let r=ze.get(t);void 0===r&&ze.set(t,r=new Map);let s=r.get(e);void 0!==o?void 0===s?(r.set(e,s={handleEvent:o}),t.addEventListener(e,s)):s.handleEvent=o:void 0!==s&&(r.delete(e),t.removeEventListener(e,s))})(t,n,o)},Be=({react:t,tagName:e,elementClass:o,events:r,displayName:s})=>{const n=new Set(Object.keys(r??{})),i=t.forwardRef(((s,i)=>{const a=t.useRef(null),l=t.useRef(null),c={},d={};for(const[t,e]of Object.entries(s))Ue.has(t)?c["className"===t?"class":t]=e:n.has(t)||t in o.prototype?d[t]=e:c[t]=e;return t.useLayoutEffect((()=>{if(null!==l.current){for(const t in d)Le(l.current,t,s[t],a.current?a.current[t]:void 0,r);a.current=s}})),t.useLayoutEffect((()=>{l.current?.removeAttribute("defer-hydration")}),[]),c.suppressHydrationWarning=!0,t.createElement(e,{...c,ref:t.useCallback((t=>{l.current=t,"function"==typeof i?i(t):null!==i&&(i.current=t)}),[i])})}));return i.displayName=s??o.name,i};Ne.define("sl-button");var Ve=Be({tagName:"sl-button",elementClass:Ne,react:i,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),Ie=g`
  ${$t}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Re=class extends Qt{constructor(){super(...arguments),this.hasSlotController=new le(this,"footer","header","image")}render(){return et`
      <div
        part="base"
        class=${Ce({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Re.styles=Ie,Re.define("sl-card");var je=Be({tagName:"sl-card",elementClass:Re,react:i,events:{},displayName:"SlCard"});const He=(0,n.createElement)(l.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(l.Path,{d:"m18 4h-12c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5h-12c-.3 0-.5-.2-.5-.5v-12c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5zm-11.5-1.5h6v-1.5h-6zm4-4h6v-1.5h-6zm-2-1.5h-2v1.5h2zm6 5.5h2v-1.5h-2z"})),Fe=JSON.parse('{"u2":"create-block/kyg-card-block"}');(0,r.registerBlockType)(Fe.u2,{icon:He,edit:(0,s.withSelect)(((t,e)=>({media:e.attributes.mediaId?t("core").getMedia(e.attributes.mediaId):void 0})))((function(t){const{attributes:e,setAttributes:o}=t,r=(0,a.useBlockProps)(),s=e=>{t.setAttributes({mediaId:e.id,mediaUrl:e.url})};return(0,n.createElement)(d.Fragment,null,(0,n.createElement)(a.InspectorControls,{key:"setting"},(0,n.createElement)(l.PanelBody,{title:(0,c.__)("Block Settings","kyg-gutenberg-blocks"),initialOpen:!0},(0,n.createElement)("div",{className:"editor-card-image"},(0,n.createElement)("h4",{style:{margin:"0",padding:"0"}},(0,c.__)("Header Visibility","kyg-gutenberg-blocks")),(0,n.createElement)("small",{style:{marginBottom:"5px",display:"block"}},(0,c.__)("Switch for showing card header","kyg-gutenberg-blocks")),(0,n.createElement)(l.ToggleControl,{label:"Toggle Field",checked:e.headerVisibility,onChange:t=>{o({headerVisibility:t})}}),(0,n.createElement)("h4",{style:{margin:"0",padding:"0",marginTop:"10px"}},(0,c.__)("Card Image","kyg-gutenberg-blocks")),(0,n.createElement)("small",{style:{marginBottom:"5px",display:"block"}},(0,c.__)("Add image to show in card","kyg-gutenberg-blocks")),(0,n.createElement)(a.MediaUploadCheck,null,(0,n.createElement)(a.MediaUpload,{onSelect:s,value:e.mediaId,allowedTypes:["image"],render:({open:o})=>(0,n.createElement)(l.Button,{className:0==e.mediaId?"editor-post-featured-image__toggle":"editor-post-featured-image__preview",onClick:o},0==e.mediaId&&(0,c.__)("Choose an image","kyg-card-block"),null!=t.media&&(0,n.createElement)(l.ResponsiveWrapper,{naturalWidth:t.media.media_details.width,naturalHeight:t.media.media_details.height},(0,n.createElement)("img",{src:t.media.source_url})))})),(0,n.createElement)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}},0!=e.mediaId&&(0,n.createElement)(a.MediaUploadCheck,null,(0,n.createElement)(a.MediaUpload,{title:(0,c.__)("Replace image","kyg-card-block"),value:e.mediaId,onSelect:s,allowedTypes:["image"],render:({open:t})=>(0,n.createElement)(l.Button,{onClick:t,isDefault:!0,isLarge:!0},(0,c.__)("Replace image","kyg-card-block"))})),0!=e.mediaId&&(0,n.createElement)(a.MediaUploadCheck,null,(0,n.createElement)(l.Button,{onClick:()=>{t.setAttributes({mediaId:0,mediaUrl:""})},isLink:!0,isDestructive:!0},(0,c.__)("Remove image","kyg-card-block")))),(0,n.createElement)("h4",{style:{margin:"0",padding:"0",marginTop:"15px"}},(0,c.__)("Button Settings","kyg-gutenberg-blocks")),(0,n.createElement)("small",{style:{marginBottom:"5px",display:"block"}},(0,c.__)("Set up footer button url, text, position and new tab setting","kyg-gutenberg-blocks")),(0,n.createElement)(l.TextControl,{label:"Button Text",value:e.buttonText,onChange:t=>{o({buttonText:t})}}),(0,n.createElement)(l.TextControl,{label:"Button Url",help:"Please fill with full url (http://...)",value:e.buttonUrl,onChange:t=>{o({buttonUrl:t})}}),(0,n.createElement)(l.CheckboxControl,{label:"Open New Tab",checked:e.newTabField,onChange:t=>{o({newTabField:t})}}),(0,n.createElement)(l.SelectControl,{label:"Button Position",value:e.buttonPosition,onChange:t=>{o({buttonPosition:t})},options:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}]})))),(0,n.createElement)("div",{...r},(0,n.createElement)(je,{className:"card-overview"},!1!==e.headerVisibility?(0,n.createElement)(a.RichText,{placeholder:"Header text here...",tagName:"div",slot:"header",className:"card-header",onChange:t=>{o({headerContent:t})},value:e.headerContent}):null,null!=t.media&&(0,n.createElement)("img",{src:t.media.source_url}),(0,n.createElement)(a.RichText,{placeholder:"Content text here...",tagName:"p",className:"card-content",onChange:t=>{o({content:t})},value:e.content}),(0,n.createElement)("div",{slot:"footer",style:{justifyContent:e.buttonPosition}},(0,n.createElement)(Ve,{variant:"primary",href:e.buttonUrl,target:e.newTabField?"_blank":"_self"},e.buttonText)))))})),save:function(t){const{attributes:e}=t,o=a.useBlockProps.save();return(0,n.createElement)("div",{...o},(0,n.createElement)("sl-card",{className:"card-overview"},!1!==e.headerVisibility?(0,n.createElement)(a.RichText.Content,{tagName:"div",slot:"header",className:"card-header",value:e.headerContent}):null,e.mediaId>0&&(0,n.createElement)("img",{src:e.mediaUrl}),(0,n.createElement)(a.RichText.Content,{tagName:"p",className:"card-content",value:e.content}),(0,n.createElement)("div",{slot:"footer",style:{justifyContent:e.buttonPosition}},(0,n.createElement)("sl-button",{variant:"primary",href:e.buttonUrl,target:e.newTabField?"_blank":"_self"},e.buttonText))))}})}},s={};function n(t){var e=s[t];if(void 0!==e)return e.exports;var o=s[t]={exports:{}};return r[t](o,o.exports,n),o.exports}n.m=r,t=[],n.O=(e,o,r,s)=>{if(!o){var i=1/0;for(d=0;d<t.length;d++){for(var[o,r,s]=t[d],a=!0,l=0;l<o.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((t=>n.O[t](o[l])))?o.splice(l--,1):(a=!1,s<i&&(i=s));if(a){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[o,r,s]},o=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,n.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var s=Object.create(null);n.r(s);var i={};e=e||[null,o({}),o([]),o(o)];for(var a=2&r&&t;"object"==typeof a&&!~e.indexOf(a);a=o(a))Object.getOwnPropertyNames(a).forEach((e=>i[e]=()=>t[e]));return i.default=()=>t,n.d(s,i),s},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={274:0,248:0};n.O.j=e=>0===t[e];var e=(e,o)=>{var r,s,[i,a,l]=o,c=0;if(i.some((e=>0!==t[e]))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var d=l(n)}for(e&&e(o);c<i.length;c++)s=i[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(d)},o=globalThis.webpackChunkkyg_gutenberg_blocks=globalThis.webpackChunkkyg_gutenberg_blocks||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var i=n.O(void 0,[248],(()=>n(247)));i=n.O(i)})();