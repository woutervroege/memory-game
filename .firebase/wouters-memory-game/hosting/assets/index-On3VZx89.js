var K=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var u=(r,t,e)=>(K(r,t,"read from private field"),e?e.call(r):t.get(r)),m=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},st=(r,t,e,s)=>(K(r,t,"write to private field"),s?s.call(r,e):t.set(r,e),e);var z=(r,t,e)=>(K(r,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,tt=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),it=new WeakMap;let $t=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(tt&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=it.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&it.set(e,t))}return t}toString(){return this.cssText}};const xt=r=>new $t(typeof r=="string"?r:r+"",void 0,et),ft=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new $t(e,r,et)},Pt=(r,t)=>{if(tt)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=I.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},rt=tt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return xt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ct,defineProperty:Ut,getOwnPropertyDescriptor:Tt,getOwnPropertyNames:Nt,getOwnPropertySymbols:Ot,getPrototypeOf:Ht}=Object,g=globalThis,ot=g.trustedTypes,Mt=ot?ot.emptyScript:"",F=g.reactiveElementPolyfillSupport,T=(r,t)=>r,Z={toAttribute(r,t){switch(t){case Boolean:r=r?Mt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},mt=(r,t)=>!Ct(r,t),nt={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:mt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=nt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ut(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=Tt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const l=i==null?void 0:i.call(this);o.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??nt}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const t=Ht(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const e=this.properties,s=[...Nt(e),...Ot(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(rt(i))}else t!==void 0&&e.push(rt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:Z).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:Z;this._$Em=i,this[i]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??mt)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[T("elementProperties")]=new Map,E[T("finalized")]=new Map,F==null||F({ReactiveElement:E}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,j=N.trustedTypes,ht=j?j.createPolicy("lit-html",{createHTML:r=>r}):void 0,yt="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,_t="?"+y,kt=`<${_t}>`,S=document,O=()=>S.createComment(""),H=r=>r===null||typeof r!="object"&&typeof r!="function",gt=Array.isArray,Rt=r=>gt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",J=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,lt=/>/g,A=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,dt=/"/g,At=/^(?:script|style|textarea|title)$/i,Lt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),Q=Lt(1),P=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),pt=new WeakMap,v=S.createTreeWalker(S,129);function vt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ht!==void 0?ht.createHTML(t):t}const zt=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":"",n=U;for(let l=0;l<e;l++){const h=r[l];let c,p,a=-1,$=0;for(;$<h.length&&(n.lastIndex=$,p=n.exec(h),p!==null);)$=n.lastIndex,n===U?p[1]==="!--"?n=at:p[1]!==void 0?n=lt:p[2]!==void 0?(At.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=A):p[3]!==void 0&&(n=A):n===A?p[0]===">"?(n=i??U,a=-1):p[1]===void 0?a=-2:(a=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?A:p[3]==='"'?dt:ct):n===dt||n===ct?n=A:n===at||n===lt?n=U:(n=A,i=void 0);const f=n===A&&r[l+1].startsWith("/>")?" ":"";o+=n===U?h+kt:a>=0?(s.push(c),h.slice(0,a)+yt+h.slice(a)+y+f):h+y+(a===-2?l:f)}return[vt(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),s]};class M{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const l=t.length-1,h=this.parts,[c,p]=zt(t,e);if(this.el=M.createElement(c,s),v.currentNode=this.el.content,e===2){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=v.nextNode())!==null&&h.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const a of i.getAttributeNames())if(a.endsWith(yt)){const $=p[n++],f=i.getAttribute(a).split(y),L=/([.?@])?(.*)/.exec($);h.push({type:1,index:o,name:L[2],strings:f,ctor:L[1]==="."?jt:L[1]==="?"?Dt:L[1]==="@"?Bt:V}),i.removeAttribute(a)}else a.startsWith(y)&&(h.push({type:6,index:o}),i.removeAttribute(a));if(At.test(i.tagName)){const a=i.textContent.split(y),$=a.length-1;if($>0){i.textContent=j?j.emptyScript:"";for(let f=0;f<$;f++)i.append(a[f],O()),v.nextNode(),h.push({type:2,index:++o});i.append(a[$],O())}}}else if(i.nodeType===8)if(i.data===_t)h.push({type:2,index:o});else{let a=-1;for(;(a=i.data.indexOf(y,a+1))!==-1;)h.push({type:7,index:o}),a+=y.length-1}o++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function C(r,t,e=r,s){var n,l;if(t===P)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=H(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=C(r,i._$AS(r,t.values),i,s)),t}class It{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??S).importNode(e,!0);v.currentNode=i;let o=v.nextNode(),n=0,l=0,h=s[0];for(;h!==void 0;){if(n===h.index){let c;h.type===2?c=new R(o,o.nextSibling,this,t):h.type===1?c=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(c=new qt(o,this,t)),this._$AV.push(c),h=s[++l]}n!==(h==null?void 0:h.index)&&(o=v.nextNode(),n++)}return v.currentNode=S,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class R{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),H(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==P&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Rt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==d&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=M.createElement(vt(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const n=new It(i,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=pt.get(t.strings);return e===void 0&&pt.set(t.strings,e=new M(t)),e}k(t){gt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new R(this.S(O()),this.S(O()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=C(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==P,n&&(this._$AH=t);else{const l=t;let h,c;for(t=o[0],h=0;h<o.length-1;h++)c=C(this,l[s+h],e,h),c===P&&(c=this._$AH[h]),n||(n=!H(c)||c!==this._$AH[h]),c===d?t=d:t!==d&&(t+=(c??"")+o[h+1]),this._$AH[h]=c}n&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class jt extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Dt extends V{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Bt extends V{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??d)===P)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class qt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const Y=N.litHtmlPolyfillSupport;Y==null||Y(M,R),(N.litHtmlVersions??(N.litHtmlVersions=[])).push("3.1.3");const Wt=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new R(t.insertBefore(O(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class x extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Wt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return P}}var ut;x._$litElement$=!0,x.finalized=!0,(ut=globalThis.litElementHydrateSupport)==null||ut.call(globalThis,{LitElement:x});const G=globalThis.litElementPolyfillSupport;G==null||G({LitElement:x});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");var b,D,bt;class Vt extends x{constructor(){super();m(this,D);m(this,b,void 0);st(this,b,this.attachInternals())}static get properties(){return{icon:{type:String}}}static get styles(){return ft`
                :host {
                    display: block;
                    transition: 500ms ease all;
                }

                :host([inert]) {
                    opacity: 0.5;
                    transform: scale(0) rotate(180deg);
                    transition-delay: 1200ms;
                }

            * {
                box-sizing: border-box;
            }

            [hidden] {
                display: none!important;
            }

            section {
                aspect-ratio: 1/1;
                perspective: 1000px;
                user-select: none;
            }

            .inner {
                position: relative;
                width: 100%;
                height: 100%;
                text-align: center;
                transition: transform 500ms;
                transform-style: preserve-3d;
                border: 12px solid white;
                box-shadow: 0 0 5px #ccc;
                border-radius: 12px;
              }
              
              /* Do an horizontal flip when you move the mouse over the flip box container */
              :host(:state(selected)) section .inner,
              :host(:state(matched)) section .inner {
                    transform: rotateY(180deg);
              }

              section:hover .inner {
                transform: scale(1.02);
              }
              
              /* Position the front and back side */
              .front, .back {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden; /* Safari */
                backface-visibility: hidden;
                border-radius: 8px;
              }
              
              /* Style the front side (fallback if image is missing) */
              .front {
                background-color: #bbb;
              }
              
              /* Style the back side */
              .back {
                background-color: dodgerblue;
                transform: rotateY(180deg);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 8vmax;
              }
        `}render(){return Q`
            <section @click="${z(this,D,bt)}">
                <div class="inner">
                    <div class="front"></div>
                    <div class="back">${this.icon}</div>
                </div>
            </section>
        `}get selected(){return u(this,b).states.has("selected")}unselect(){u(this,b).states.delete("selected")}}b=new WeakMap,D=new WeakSet,bt=function(){u(this,b).states.add("selected"),this.dispatchEvent(new CustomEvent("memory-tile-click",{composed:!0}))};customElements.define("memory-tile",Vt);var _,w,k,X,B,St,q,Et,W,wt;class Kt extends x{constructor(){super();m(this,_);m(this,k);m(this,B);m(this,q);m(this,W);this.addEventListener("memory-tile-click",z(this,W,wt).bind(this))}static get properties(){return{pictures:{type:String},_order:{type:Array,state:!0}}}static get styles(){return ft`

            * {
                box-sizing: border-box;
            }

            :host {
                display: block;
                width: calc(100vw - 78px);
                max-width: 100%;
                max-height: 100%;
                aspect-ratio: 3/2;
                // border: 1px solid red;
                // overflow: hidden;
                // container-type: inline-size;
                // container-name: game;
            }

            div {
                display: grid;
                grid-template-columns: repeat(var(--cols), 1fr);
                gap: 12px;
            }

            memory-tile {
                // hei: calc(100 / var(--rows) * 1cqmax);
            }

            [hidden] {
                display: none!important;
            }
        `}render(){return Q`
            <div>
                ${this.icons.map((e,s)=>{var i;return Q`
                <memory-tile .icon="${e}" style="order:${(i=this._order)==null?void 0:i[s]}"></memory-tile>
            `})}
            </div>

            <audio id="yes" src="/yes.m4a" preload="auto"></audio>
            <audio id="no" src="/no.m4a" preload="auto"></audio>
        `}updated(e){e.has("pictures")&&(this.reset(),this.style.setProperty("--items",this.icons.length),this.style.setProperty("--cols",Math.ceil(Math.sqrt(this.icons.length))),this.style.setProperty("--rows",Math.floor(Math.sqrt(this.icons.length))))}get icons(){return this.pictures.split(",").map(s=>Array(2).fill(s)).flat()||[]}reset(){z(this,q,Et).call(this),u(this,_,w).forEach(e=>{e.inert=!1,e.unselect()})}}_=new WeakSet,w=function(){var e,s;return(s=(e=this.shadowRoot)==null?void 0:e.querySelectorAll)==null?void 0:s.call(e,"memory-tile")},k=new WeakSet,X=function(){return[...u(this,_,w)].filter(e=>e.selected===!0&&e.inert!==!0)},B=new WeakSet,St=function(){return[...u(this,_,w)].filter(e=>e.inert===!0)},q=new WeakSet,Et=function(){var i;let s=Array.from(Array(((i=u(this,_,w))==null?void 0:i.length)||0).keys()).map(o=>({value:o,sort:Math.random()})).sort((o,n)=>o.sort-n.sort).map(({value:o})=>o);this._order=s},W=new WeakSet,wt=function(e){if(u(this,k,X).length<2)return;this.inert=!0;const[s,i]=u(this,k,X);s.icon===i.icon?(this.shadowRoot.querySelector("#yes").play(),s.inert=!0,i.inert=!0,this.inert=!1,u(this,_,w).length===u(this,B,St).length&&window.setTimeout(()=>this.reset(),2e3)):(this.shadowRoot.querySelector("#no").play(),window.setTimeout(()=>{s.unselect(),i.unselect(),this.inert=!1},1e3))};customElements.define("memory-game",Kt);
