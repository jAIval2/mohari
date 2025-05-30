function OT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function y_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var v_={exports:{}},Mc={},__={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),jT=Symbol.for("react.portal"),LT=Symbol.for("react.fragment"),VT=Symbol.for("react.strict_mode"),MT=Symbol.for("react.profiler"),FT=Symbol.for("react.provider"),UT=Symbol.for("react.context"),BT=Symbol.for("react.forward_ref"),zT=Symbol.for("react.suspense"),$T=Symbol.for("react.memo"),qT=Symbol.for("react.lazy"),_g=Symbol.iterator;function WT(t){return t===null||typeof t!="object"?null:(t=_g&&t[_g]||t["@@iterator"],typeof t=="function"?t:null)}var w_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E_=Object.assign,x_={};function xs(t,e,n){this.props=t,this.context=e,this.refs=x_,this.updater=n||w_}xs.prototype.isReactComponent={};xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function I_(){}I_.prototype=xs.prototype;function gf(t,e,n){this.props=t,this.context=e,this.refs=x_,this.updater=n||w_}var yf=gf.prototype=new I_;yf.constructor=gf;E_(yf,xs.prototype);yf.isPureReactComponent=!0;var wg=Array.isArray,T_=Object.prototype.hasOwnProperty,vf={current:null},S_={key:!0,ref:!0,__self:!0,__source:!0};function A_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)T_.call(e,r)&&!S_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ua,type:t,key:s,ref:o,props:i,_owner:vf.current}}function HT(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _f(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function GT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Eg=/\/+/g;function id(t,e){return typeof t=="object"&&t!==null&&t.key!=null?GT(""+t.key):e.toString(36)}function El(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case jT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+id(o,0):r,wg(i)?(n="",t!=null&&(n=t.replace(Eg,"$&/")+"/"),El(i,e,n,"",function(u){return u})):i!=null&&(_f(i)&&(i=HT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Eg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",wg(t))for(var l=0;l<t.length;l++){s=t[l];var c=r+id(s,l);o+=El(s,e,n,c,i)}else if(c=WT(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=r+id(s,l++),o+=El(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(t,e,n){if(t==null)return t;var r=[],i=0;return El(t,r,"","",function(s){return e.call(n,s,i++)}),r}function KT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},xl={transition:null},QT={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:xl,ReactCurrentOwner:vf};function R_(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!_f(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=xs;re.Fragment=LT;re.Profiler=MT;re.PureComponent=gf;re.StrictMode=VT;re.Suspense=zT;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QT;re.act=R_;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=E_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)T_.call(e,c)&&!S_.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ua,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:UT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:FT,_context:t},t.Consumer=t};re.createElement=A_;re.createFactory=function(t){var e=A_.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:BT,render:t}};re.isValidElement=_f;re.lazy=function(t){return{$$typeof:qT,_payload:{_status:-1,_result:t},_init:KT}};re.memo=function(t,e){return{$$typeof:$T,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=xl.transition;xl.transition={};try{t()}finally{xl.transition=e}};re.unstable_act=R_;re.useCallback=function(t,e){return It.current.useCallback(t,e)};re.useContext=function(t){return It.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return It.current.useDeferredValue(t)};re.useEffect=function(t,e){return It.current.useEffect(t,e)};re.useId=function(){return It.current.useId()};re.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return It.current.useMemo(t,e)};re.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};re.useRef=function(t){return It.current.useRef(t)};re.useState=function(t){return It.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return It.current.useTransition()};re.version="18.3.1";__.exports=re;var D=__.exports;const C_=y_(D),YT=OT({__proto__:null,default:C_},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XT=D,JT=Symbol.for("react.element"),ZT=Symbol.for("react.fragment"),e1=Object.prototype.hasOwnProperty,t1=XT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n1={key:!0,ref:!0,__self:!0,__source:!0};function P_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)e1.call(e,r)&&!n1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:JT,type:t,key:s,ref:o,props:i,_owner:t1.current}}Mc.Fragment=ZT;Mc.jsx=P_;Mc.jsxs=P_;v_.exports=Mc;var d=v_.exports,k_={exports:{}},$t={},N_={exports:{}},b_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,B){var q=$.length;$.push(B);e:for(;0<q;){var Y=q-1>>>1,Z=$[Y];if(0<i(Z,B))$[Y]=B,$[q]=Z,q=Y;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var B=$[0],q=$.pop();if(q!==B){$[0]=q;e:for(var Y=0,Z=$.length,oe=Z>>>1;Y<oe;){var ye=2*(Y+1)-1,Me=$[ye],en=ye+1,Oe=$[en];if(0>i(Me,q))en<Z&&0>i(Oe,Me)?($[Y]=Oe,$[en]=q,Y=en):($[Y]=Me,$[ye]=q,Y=ye);else if(en<Z&&0>i(Oe,q))$[Y]=Oe,$[en]=q,Y=en;else break e}}return B}function i($,B){var q=$.sortIndex-B.sortIndex;return q!==0?q:$.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],f=1,p=null,g=3,v=!1,C=!1,N=!1,k=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R($){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=$)r(u),B.sortIndex=B.expirationTime,e(c,B);else break;B=n(u)}}function O($){if(N=!1,R($),!C)if(n(c)!==null)C=!0,le(F);else{var B=n(u);B!==null&&St(O,B.startTime-$)}}function F($,B){C=!1,N&&(N=!1,T(w),w=-1),v=!0;var q=g;try{for(R(B),p=n(c);p!==null&&(!(p.expirationTime>B)||$&&!P());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,g=p.priorityLevel;var Z=Y(p.expirationTime<=B);B=t.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(c)&&r(c),R(B)}else r(c);p=n(c)}if(p!==null)var oe=!0;else{var ye=n(u);ye!==null&&St(O,ye.startTime-B),oe=!1}return oe}finally{p=null,g=q,v=!1}}var V=!1,I=null,w=-1,_=5,x=-1;function P(){return!(t.unstable_now()-x<_)}function A(){if(I!==null){var $=t.unstable_now();x=$;var B=!0;try{B=I(!0,$)}finally{B?S():(V=!1,I=null)}}else V=!1}var S;if(typeof E=="function")S=function(){E(A)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=A,S=function(){ne.postMessage(null)}}else S=function(){k(A,0)};function le($){I=$,V||(V=!0,S())}function St($,B){w=k(function(){$(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){C||v||(C=!0,le(F))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var q=g;g=B;try{return $()}finally{g=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,B){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var q=g;g=$;try{return B()}finally{g=q}},t.unstable_scheduleCallback=function($,B,q){var Y=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Y+q:Y):q=Y,$){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=q+Z,$={id:f++,callback:B,priorityLevel:$,startTime:q,expirationTime:Z,sortIndex:-1},q>Y?($.sortIndex=q,e(u,$),n(c)===null&&$===n(u)&&(N?(T(w),w=-1):N=!0,St(O,q-Y))):($.sortIndex=Z,e(c,$),C||v||(C=!0,le(F))),$},t.unstable_shouldYield=P,t.unstable_wrapCallback=function($){var B=g;return function(){var q=g;g=B;try{return $.apply(this,arguments)}finally{g=q}}}})(b_);N_.exports=b_;var r1=N_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i1=D,zt=r1;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var D_=new Set,bo={};function vi(t,e){cs(t,e),cs(t+"Capture",e)}function cs(t,e){for(bo[t]=e,t=0;t<e.length;t++)D_.add(e[t])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hd=Object.prototype.hasOwnProperty,s1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xg={},Ig={};function o1(t){return Hd.call(Ig,t)?!0:Hd.call(xg,t)?!1:s1.test(t)?Ig[t]=!0:(xg[t]=!0,!1)}function a1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function l1(t,e,n,r){if(e===null||typeof e>"u"||a1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var wf=/[\-:]([a-z])/g;function Ef(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wf,Ef);nt[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wf,Ef);nt[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wf,Ef);nt[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function xf(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l1(e,n,i,r)&&(n=null),r||i===null?o1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hn=i1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),Mi=Symbol.for("react.portal"),Fi=Symbol.for("react.fragment"),If=Symbol.for("react.strict_mode"),Gd=Symbol.for("react.profiler"),O_=Symbol.for("react.provider"),j_=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),Kd=Symbol.for("react.suspense"),Qd=Symbol.for("react.suspense_list"),Sf=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),L_=Symbol.for("react.offscreen"),Tg=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=Tg&&t[Tg]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,sd;function io(t){if(sd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sd=e&&e[1]||""}return`
`+sd+t}var od=!1;function ad(t,e){if(!t||od)return"";od=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{od=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?io(t):""}function c1(t){switch(t.tag){case 5:return io(t.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return t=ad(t.type,!1),t;case 11:return t=ad(t.type.render,!1),t;case 1:return t=ad(t.type,!0),t;default:return""}}function Yd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fi:return"Fragment";case Mi:return"Portal";case Gd:return"Profiler";case If:return"StrictMode";case Kd:return"Suspense";case Qd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case j_:return(t.displayName||"Context")+".Consumer";case O_:return(t._context.displayName||"Context")+".Provider";case Tf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sf:return e=t.displayName||null,e!==null?e:Yd(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return Yd(t(e))}catch{}}return null}function u1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yd(e);case 8:return e===If?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function V_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function d1(t){var e=V_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ya(t){t._valueTracker||(t._valueTracker=d1(t))}function M_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=V_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xd(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function F_(t,e){e=e.checked,e!=null&&xf(t,"checked",e,!1)}function Jd(t,e){F_(t,e);var n=Rr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zd(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ag(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zd(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var so=Array.isArray;function Ji(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Rr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function eh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(so(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rr(n)}}function U_(t,e){var n=Rr(e.value),r=Rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Cg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function B_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function th(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?B_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,z_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Do(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h1=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(t){h1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),po[e]=po[t]})});function $_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||po.hasOwnProperty(t)&&po[t]?(""+e).trim():e+"px"}function q_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var f1=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nh(t,e){if(e){if(f1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function rh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ih=null;function Af(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sh=null,Zi=null,es=null;function Pg(t){if(t=fa(t)){if(typeof sh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=$c(e),sh(t.stateNode,t.type,e))}}function W_(t){Zi?es?es.push(t):es=[t]:Zi=t}function H_(){if(Zi){var t=Zi,e=es;if(es=Zi=null,Pg(t),e)for(t=0;t<e.length;t++)Pg(e[t])}}function G_(t,e){return t(e)}function K_(){}var ld=!1;function Q_(t,e,n){if(ld)return t(e,n);ld=!0;try{return G_(t,e,n)}finally{ld=!1,(Zi!==null||es!==null)&&(K_(),H_())}}function Oo(t,e){var n=t.stateNode;if(n===null)return null;var r=$c(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var oh=!1;if(Vn)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){oh=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{oh=!1}function p1(t,e,n,r,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var mo=!1,Wl=null,Hl=!1,ah=null,m1={onError:function(t){mo=!0,Wl=t}};function g1(t,e,n,r,i,s,o,l,c){mo=!1,Wl=null,p1.apply(m1,arguments)}function y1(t,e,n,r,i,s,o,l,c){if(g1.apply(this,arguments),mo){if(mo){var u=Wl;mo=!1,Wl=null}else throw Error(U(198));Hl||(Hl=!0,ah=u)}}function _i(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Y_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kg(t){if(_i(t)!==t)throw Error(U(188))}function v1(t){var e=t.alternate;if(!e){if(e=_i(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return kg(i),t;if(s===r)return kg(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function X_(t){return t=v1(t),t!==null?J_(t):null}function J_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=J_(t);if(e!==null)return e;t=t.sibling}return null}var Z_=zt.unstable_scheduleCallback,Ng=zt.unstable_cancelCallback,_1=zt.unstable_shouldYield,w1=zt.unstable_requestPaint,De=zt.unstable_now,E1=zt.unstable_getCurrentPriorityLevel,Rf=zt.unstable_ImmediatePriority,e0=zt.unstable_UserBlockingPriority,Gl=zt.unstable_NormalPriority,x1=zt.unstable_LowPriority,t0=zt.unstable_IdlePriority,Fc=null,vn=null;function I1(t){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(Fc,t,void 0,(t.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:A1,T1=Math.log,S1=Math.LN2;function A1(t){return t>>>=0,t===0?32:31-(T1(t)/S1|0)|0}var Ja=64,Za=4194304;function oo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=oo(l):(s&=o,s!==0&&(r=oo(s)))}else o=n&~i,o!==0?r=oo(o):s!==0&&(r=oo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ln(e),i=1<<n,r|=t[n],e&=~i;return r}function R1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ln(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=R1(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function lh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function n0(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function cd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ln(e),t[e]=n}function P1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ln(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ln(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function r0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var i0,Pf,s0,o0,a0,ch=!1,el=[],gr=null,yr=null,vr=null,jo=new Map,Lo=new Map,rr=[],k1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bg(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(e.pointerId)}}function Ks(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fa(e),e!==null&&Pf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function N1(t,e,n,r,i){switch(e){case"focusin":return gr=Ks(gr,t,e,n,r,i),!0;case"dragenter":return yr=Ks(yr,t,e,n,r,i),!0;case"mouseover":return vr=Ks(vr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return jo.set(s,Ks(jo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Lo.set(s,Ks(Lo.get(s)||null,t,e,n,r,i)),!0}return!1}function l0(t){var e=Xr(t.target);if(e!==null){var n=_i(e);if(n!==null){if(e=n.tag,e===13){if(e=Y_(n),e!==null){t.blockedOn=e,a0(t.priority,function(){s0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ih=r,n.target.dispatchEvent(r),ih=null}else return e=fa(n),e!==null&&Pf(e),t.blockedOn=n,!1;e.shift()}return!0}function Dg(t,e,n){Il(t)&&n.delete(e)}function b1(){ch=!1,gr!==null&&Il(gr)&&(gr=null),yr!==null&&Il(yr)&&(yr=null),vr!==null&&Il(vr)&&(vr=null),jo.forEach(Dg),Lo.forEach(Dg)}function Qs(t,e){t.blockedOn===e&&(t.blockedOn=null,ch||(ch=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,b1)))}function Vo(t){function e(i){return Qs(i,t)}if(0<el.length){Qs(el[0],t);for(var n=1;n<el.length;n++){var r=el[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gr!==null&&Qs(gr,t),yr!==null&&Qs(yr,t),vr!==null&&Qs(vr,t),jo.forEach(e),Lo.forEach(e),n=0;n<rr.length;n++)r=rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)l0(n),n.blockedOn===null&&rr.shift()}var ts=Hn.ReactCurrentBatchConfig,Ql=!0;function D1(t,e,n,r){var i=fe,s=ts.transition;ts.transition=null;try{fe=1,kf(t,e,n,r)}finally{fe=i,ts.transition=s}}function O1(t,e,n,r){var i=fe,s=ts.transition;ts.transition=null;try{fe=4,kf(t,e,n,r)}finally{fe=i,ts.transition=s}}function kf(t,e,n,r){if(Ql){var i=uh(t,e,n,r);if(i===null)_d(t,e,r,Yl,n),bg(t,r);else if(N1(i,t,e,n,r))r.stopPropagation();else if(bg(t,r),e&4&&-1<k1.indexOf(t)){for(;i!==null;){var s=fa(i);if(s!==null&&i0(s),s=uh(t,e,n,r),s===null&&_d(t,e,r,Yl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _d(t,e,r,null,n)}}var Yl=null;function uh(t,e,n,r){if(Yl=null,t=Af(r),t=Xr(t),t!==null)if(e=_i(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Y_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yl=t,null}function c0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E1()){case Rf:return 1;case e0:return 4;case Gl:case x1:return 16;case t0:return 536870912;default:return 16}default:return 16}}var ur=null,Nf=null,Tl=null;function u0(){if(Tl)return Tl;var t,e=Nf,n=e.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Tl=i.slice(t,1<r?1-r:void 0)}function Sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function Og(){return!1}function qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:Og,this.isPropagationStopped=Og,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bf=qt(Is),ha=Ae({},Is,{view:0,detail:0}),j1=qt(ha),ud,dd,Ys,Uc=Ae({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(ud=t.screenX-Ys.screenX,dd=t.screenY-Ys.screenY):dd=ud=0,Ys=t),ud)},movementY:function(t){return"movementY"in t?t.movementY:dd}}),jg=qt(Uc),L1=Ae({},Uc,{dataTransfer:0}),V1=qt(L1),M1=Ae({},ha,{relatedTarget:0}),hd=qt(M1),F1=Ae({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),U1=qt(F1),B1=Ae({},Is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z1=qt(B1),$1=Ae({},Is,{data:0}),Lg=qt($1),q1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=H1[t])?!!e[t]:!1}function Df(){return G1}var K1=Ae({},ha,{key:function(t){if(t.key){var e=q1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?W1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Df,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Q1=qt(K1),Y1=Ae({},Uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vg=qt(Y1),X1=Ae({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Df}),J1=qt(X1),Z1=Ae({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),eS=qt(Z1),tS=Ae({},Uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nS=qt(tS),rS=[9,13,27,32],Of=Vn&&"CompositionEvent"in window,go=null;Vn&&"documentMode"in document&&(go=document.documentMode);var iS=Vn&&"TextEvent"in window&&!go,d0=Vn&&(!Of||go&&8<go&&11>=go),Mg=String.fromCharCode(32),Fg=!1;function h0(t,e){switch(t){case"keyup":return rS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ui=!1;function sS(t,e){switch(t){case"compositionend":return f0(e);case"keypress":return e.which!==32?null:(Fg=!0,Mg);case"textInput":return t=e.data,t===Mg&&Fg?null:t;default:return null}}function oS(t,e){if(Ui)return t==="compositionend"||!Of&&h0(t,e)?(t=u0(),Tl=Nf=ur=null,Ui=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return d0&&e.locale!=="ko"?null:e.data;default:return null}}var aS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ug(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aS[t.type]:e==="textarea"}function p0(t,e,n,r){W_(r),e=Xl(e,"onChange"),0<e.length&&(n=new bf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var yo=null,Mo=null;function lS(t){S0(t,0)}function Bc(t){var e=$i(t);if(M_(e))return t}function cS(t,e){if(t==="change")return e}var m0=!1;if(Vn){var fd;if(Vn){var pd="oninput"in document;if(!pd){var Bg=document.createElement("div");Bg.setAttribute("oninput","return;"),pd=typeof Bg.oninput=="function"}fd=pd}else fd=!1;m0=fd&&(!document.documentMode||9<document.documentMode)}function zg(){yo&&(yo.detachEvent("onpropertychange",g0),Mo=yo=null)}function g0(t){if(t.propertyName==="value"&&Bc(Mo)){var e=[];p0(e,Mo,t,Af(t)),Q_(lS,e)}}function uS(t,e,n){t==="focusin"?(zg(),yo=e,Mo=n,yo.attachEvent("onpropertychange",g0)):t==="focusout"&&zg()}function dS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bc(Mo)}function hS(t,e){if(t==="click")return Bc(e)}function fS(t,e){if(t==="input"||t==="change")return Bc(e)}function pS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:pS;function Fo(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hd.call(e,i)||!un(t[i],e[i]))return!1}return!0}function $g(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qg(t,e){var n=$g(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$g(n)}}function y0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?y0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function v0(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mS(t){var e=v0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&y0(n.ownerDocument.documentElement,n)){if(r!==null&&jf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qg(n,s);var o=qg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gS=Vn&&"documentMode"in document&&11>=document.documentMode,Bi=null,dh=null,vo=null,hh=!1;function Wg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hh||Bi==null||Bi!==ql(r)||(r=Bi,"selectionStart"in r&&jf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vo&&Fo(vo,r)||(vo=r,r=Xl(dh,"onSelect"),0<r.length&&(e=new bf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Bi)))}function nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zi={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},md={},_0={};Vn&&(_0=document.createElement("div").style,"AnimationEvent"in window||(delete zi.animationend.animation,delete zi.animationiteration.animation,delete zi.animationstart.animation),"TransitionEvent"in window||delete zi.transitionend.transition);function zc(t){if(md[t])return md[t];if(!zi[t])return t;var e=zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _0)return md[t]=e[n];return t}var w0=zc("animationend"),E0=zc("animationiteration"),x0=zc("animationstart"),I0=zc("transitionend"),T0=new Map,Hg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){T0.set(t,e),vi(e,[t])}for(var gd=0;gd<Hg.length;gd++){var yd=Hg[gd],yS=yd.toLowerCase(),vS=yd[0].toUpperCase()+yd.slice(1);Or(yS,"on"+vS)}Or(w0,"onAnimationEnd");Or(E0,"onAnimationIteration");Or(x0,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(I0,"onTransitionEnd");cs("onMouseEnter",["mouseout","mouseover"]);cs("onMouseLeave",["mouseout","mouseover"]);cs("onPointerEnter",["pointerout","pointerover"]);cs("onPointerLeave",["pointerout","pointerover"]);vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_S=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function Gg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,y1(r,e,void 0,t),t.currentTarget=null}function S0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Gg(i,l,u),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Gg(i,l,u),s=c}}}if(Hl)throw t=ah,Hl=!1,ah=null,t}function we(t,e){var n=e[yh];n===void 0&&(n=e[yh]=new Set);var r=t+"__bubble";n.has(r)||(A0(e,t,2,!1),n.add(r))}function vd(t,e,n){var r=0;e&&(r|=4),A0(n,t,r,e)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Uo(t){if(!t[rl]){t[rl]=!0,D_.forEach(function(n){n!=="selectionchange"&&(_S.has(n)||vd(n,!1,t),vd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rl]||(e[rl]=!0,vd("selectionchange",!1,e))}}function A0(t,e,n,r){switch(c0(e)){case 1:var i=D1;break;case 4:i=O1;break;default:i=kf}n=i.bind(null,e,n,t),i=void 0,!oh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _d(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Xr(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Q_(function(){var u=s,f=Af(n),p=[];e:{var g=T0.get(t);if(g!==void 0){var v=bf,C=t;switch(t){case"keypress":if(Sl(n)===0)break e;case"keydown":case"keyup":v=Q1;break;case"focusin":C="focus",v=hd;break;case"focusout":C="blur",v=hd;break;case"beforeblur":case"afterblur":v=hd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=jg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=V1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=J1;break;case w0:case E0:case x0:v=U1;break;case I0:v=eS;break;case"scroll":v=j1;break;case"wheel":v=nS;break;case"copy":case"cut":case"paste":v=z1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Vg}var N=(e&4)!==0,k=!N&&t==="scroll",T=N?g!==null?g+"Capture":null:g;N=[];for(var E=u,R;E!==null;){R=E;var O=R.stateNode;if(R.tag===5&&O!==null&&(R=O,T!==null&&(O=Oo(E,T),O!=null&&N.push(Bo(E,O,R)))),k)break;E=E.return}0<N.length&&(g=new v(g,C,null,n,f),p.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&n!==ih&&(C=n.relatedTarget||n.fromElement)&&(Xr(C)||C[Mn]))break e;if((v||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,v?(C=n.relatedTarget||n.toElement,v=u,C=C?Xr(C):null,C!==null&&(k=_i(C),C!==k||C.tag!==5&&C.tag!==6)&&(C=null)):(v=null,C=u),v!==C)){if(N=jg,O="onMouseLeave",T="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(N=Vg,O="onPointerLeave",T="onPointerEnter",E="pointer"),k=v==null?g:$i(v),R=C==null?g:$i(C),g=new N(O,E+"leave",v,n,f),g.target=k,g.relatedTarget=R,O=null,Xr(f)===u&&(N=new N(T,E+"enter",C,n,f),N.target=R,N.relatedTarget=k,O=N),k=O,v&&C)t:{for(N=v,T=C,E=0,R=N;R;R=bi(R))E++;for(R=0,O=T;O;O=bi(O))R++;for(;0<E-R;)N=bi(N),E--;for(;0<R-E;)T=bi(T),R--;for(;E--;){if(N===T||T!==null&&N===T.alternate)break t;N=bi(N),T=bi(T)}N=null}else N=null;v!==null&&Kg(p,g,v,N,!1),C!==null&&k!==null&&Kg(p,k,C,N,!0)}}e:{if(g=u?$i(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var F=cS;else if(Ug(g))if(m0)F=fS;else{F=dS;var V=uS}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=hS);if(F&&(F=F(t,u))){p0(p,F,n,f);break e}V&&V(t,g,u),t==="focusout"&&(V=g._wrapperState)&&V.controlled&&g.type==="number"&&Zd(g,"number",g.value)}switch(V=u?$i(u):window,t){case"focusin":(Ug(V)||V.contentEditable==="true")&&(Bi=V,dh=u,vo=null);break;case"focusout":vo=dh=Bi=null;break;case"mousedown":hh=!0;break;case"contextmenu":case"mouseup":case"dragend":hh=!1,Wg(p,n,f);break;case"selectionchange":if(gS)break;case"keydown":case"keyup":Wg(p,n,f)}var I;if(Of)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Ui?h0(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(d0&&n.locale!=="ko"&&(Ui||w!=="onCompositionStart"?w==="onCompositionEnd"&&Ui&&(I=u0()):(ur=f,Nf="value"in ur?ur.value:ur.textContent,Ui=!0)),V=Xl(u,w),0<V.length&&(w=new Lg(w,t,null,n,f),p.push({event:w,listeners:V}),I?w.data=I:(I=f0(n),I!==null&&(w.data=I)))),(I=iS?sS(t,n):oS(t,n))&&(u=Xl(u,"onBeforeInput"),0<u.length&&(f=new Lg("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=I))}S0(p,e)})}function Bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Oo(t,n),s!=null&&r.unshift(Bo(t,s,i)),s=Oo(t,e),s!=null&&r.push(Bo(t,s,i))),t=t.return}return r}function bi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Oo(n,s),c!=null&&o.unshift(Bo(n,c,l))):i||(c=Oo(n,s),c!=null&&o.push(Bo(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var wS=/\r\n?/g,ES=/\u0000|\uFFFD/g;function Qg(t){return(typeof t=="string"?t:""+t).replace(wS,`
`).replace(ES,"")}function il(t,e,n){if(e=Qg(e),Qg(t)!==e&&n)throw Error(U(425))}function Jl(){}var fh=null,ph=null;function mh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gh=typeof setTimeout=="function"?setTimeout:void 0,xS=typeof clearTimeout=="function"?clearTimeout:void 0,Yg=typeof Promise=="function"?Promise:void 0,IS=typeof queueMicrotask=="function"?queueMicrotask:typeof Yg<"u"?function(t){return Yg.resolve(null).then(t).catch(TS)}:gh;function TS(t){setTimeout(function(){throw t})}function wd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vo(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),gn="__reactFiber$"+Ts,zo="__reactProps$"+Ts,Mn="__reactContainer$"+Ts,yh="__reactEvents$"+Ts,SS="__reactListeners$"+Ts,AS="__reactHandles$"+Ts;function Xr(t){var e=t[gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mn]||n[gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xg(t);t!==null;){if(n=t[gn])return n;t=Xg(t)}return e}t=n,n=t.parentNode}return null}function fa(t){return t=t[gn]||t[Mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $i(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function $c(t){return t[zo]||null}var vh=[],qi=-1;function jr(t){return{current:t}}function Ee(t){0>qi||(t.current=vh[qi],vh[qi]=null,qi--)}function ve(t,e){qi++,vh[qi]=t.current,t.current=e}var Cr={},ft=jr(Cr),Pt=jr(!1),ai=Cr;function us(t,e){var n=t.type.contextTypes;if(!n)return Cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function Zl(){Ee(Pt),Ee(ft)}function Jg(t,e,n){if(ft.current!==Cr)throw Error(U(168));ve(ft,e),ve(Pt,n)}function R0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,u1(t)||"Unknown",i));return Ae({},n,r)}function ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,ai=ft.current,ve(ft,t),ve(Pt,Pt.current),!0}function Zg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=R0(t,e,ai),r.__reactInternalMemoizedMergedChildContext=t,Ee(Pt),Ee(ft),ve(ft,t)):Ee(Pt),ve(Pt,n)}var kn=null,qc=!1,Ed=!1;function C0(t){kn===null?kn=[t]:kn.push(t)}function RS(t){qc=!0,C0(t)}function Lr(){if(!Ed&&kn!==null){Ed=!0;var t=0,e=fe;try{var n=kn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,qc=!1}catch(i){throw kn!==null&&(kn=kn.slice(t+1)),Z_(Rf,Lr),i}finally{fe=e,Ed=!1}}return null}var Wi=[],Hi=0,tc=null,nc=0,Ht=[],Gt=0,li=null,Nn=1,bn="";function Kr(t,e){Wi[Hi++]=nc,Wi[Hi++]=tc,tc=t,nc=e}function P0(t,e,n){Ht[Gt++]=Nn,Ht[Gt++]=bn,Ht[Gt++]=li,li=t;var r=Nn;t=bn;var i=32-ln(r)-1;r&=~(1<<i),n+=1;var s=32-ln(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nn=1<<32-ln(e)+i|n<<i|r,bn=s+t}else Nn=1<<s|n<<i|r,bn=t}function Lf(t){t.return!==null&&(Kr(t,1),P0(t,1,0))}function Vf(t){for(;t===tc;)tc=Wi[--Hi],Wi[Hi]=null,nc=Wi[--Hi],Wi[Hi]=null;for(;t===li;)li=Ht[--Gt],Ht[Gt]=null,bn=Ht[--Gt],Ht[Gt]=null,Nn=Ht[--Gt],Ht[Gt]=null}var Ft=null,Lt=null,Ie=!1,on=null;function k0(t,e){var n=Kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ey(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ft=t,Lt=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ft=t,Lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=li!==null?{id:Nn,overflow:bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ft=t,Lt=null,!0):!1;default:return!1}}function _h(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wh(t){if(Ie){var e=Lt;if(e){var n=e;if(!ey(t,e)){if(_h(t))throw Error(U(418));e=_r(n.nextSibling);var r=Ft;e&&ey(t,e)?k0(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Ft=t)}}else{if(_h(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ie=!1,Ft=t}}}function ty(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ft=t}function sl(t){if(t!==Ft)return!1;if(!Ie)return ty(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mh(t.type,t.memoizedProps)),e&&(e=Lt)){if(_h(t))throw N0(),Error(U(418));for(;e;)k0(t,e),e=_r(e.nextSibling)}if(ty(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Lt=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Lt=null}}else Lt=Ft?_r(t.stateNode.nextSibling):null;return!0}function N0(){for(var t=Lt;t;)t=_r(t.nextSibling)}function ds(){Lt=Ft=null,Ie=!1}function Mf(t){on===null?on=[t]:on.push(t)}var CS=Hn.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ny(t){var e=t._init;return e(t._payload)}function b0(t){function e(T,E){if(t){var R=T.deletions;R===null?(T.deletions=[E],T.flags|=16):R.push(E)}}function n(T,E){if(!t)return null;for(;E!==null;)e(T,E),E=E.sibling;return null}function r(T,E){for(T=new Map;E!==null;)E.key!==null?T.set(E.key,E):T.set(E.index,E),E=E.sibling;return T}function i(T,E){return T=Ir(T,E),T.index=0,T.sibling=null,T}function s(T,E,R){return T.index=R,t?(R=T.alternate,R!==null?(R=R.index,R<E?(T.flags|=2,E):R):(T.flags|=2,E)):(T.flags|=1048576,E)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,E,R,O){return E===null||E.tag!==6?(E=Cd(R,T.mode,O),E.return=T,E):(E=i(E,R),E.return=T,E)}function c(T,E,R,O){var F=R.type;return F===Fi?f(T,E,R.props.children,O,R.key):E!==null&&(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===tr&&ny(F)===E.type)?(O=i(E,R.props),O.ref=Xs(T,E,R),O.return=T,O):(O=bl(R.type,R.key,R.props,null,T.mode,O),O.ref=Xs(T,E,R),O.return=T,O)}function u(T,E,R,O){return E===null||E.tag!==4||E.stateNode.containerInfo!==R.containerInfo||E.stateNode.implementation!==R.implementation?(E=Pd(R,T.mode,O),E.return=T,E):(E=i(E,R.children||[]),E.return=T,E)}function f(T,E,R,O,F){return E===null||E.tag!==7?(E=ri(R,T.mode,O,F),E.return=T,E):(E=i(E,R),E.return=T,E)}function p(T,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Cd(""+E,T.mode,R),E.return=T,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Qa:return R=bl(E.type,E.key,E.props,null,T.mode,R),R.ref=Xs(T,null,E),R.return=T,R;case Mi:return E=Pd(E,T.mode,R),E.return=T,E;case tr:var O=E._init;return p(T,O(E._payload),R)}if(so(E)||Hs(E))return E=ri(E,T.mode,R,null),E.return=T,E;ol(T,E)}return null}function g(T,E,R,O){var F=E!==null?E.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return F!==null?null:l(T,E,""+R,O);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Qa:return R.key===F?c(T,E,R,O):null;case Mi:return R.key===F?u(T,E,R,O):null;case tr:return F=R._init,g(T,E,F(R._payload),O)}if(so(R)||Hs(R))return F!==null?null:f(T,E,R,O,null);ol(T,R)}return null}function v(T,E,R,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(R)||null,l(E,T,""+O,F);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Qa:return T=T.get(O.key===null?R:O.key)||null,c(E,T,O,F);case Mi:return T=T.get(O.key===null?R:O.key)||null,u(E,T,O,F);case tr:var V=O._init;return v(T,E,R,V(O._payload),F)}if(so(O)||Hs(O))return T=T.get(R)||null,f(E,T,O,F,null);ol(E,O)}return null}function C(T,E,R,O){for(var F=null,V=null,I=E,w=E=0,_=null;I!==null&&w<R.length;w++){I.index>w?(_=I,I=null):_=I.sibling;var x=g(T,I,R[w],O);if(x===null){I===null&&(I=_);break}t&&I&&x.alternate===null&&e(T,I),E=s(x,E,w),V===null?F=x:V.sibling=x,V=x,I=_}if(w===R.length)return n(T,I),Ie&&Kr(T,w),F;if(I===null){for(;w<R.length;w++)I=p(T,R[w],O),I!==null&&(E=s(I,E,w),V===null?F=I:V.sibling=I,V=I);return Ie&&Kr(T,w),F}for(I=r(T,I);w<R.length;w++)_=v(I,T,w,R[w],O),_!==null&&(t&&_.alternate!==null&&I.delete(_.key===null?w:_.key),E=s(_,E,w),V===null?F=_:V.sibling=_,V=_);return t&&I.forEach(function(P){return e(T,P)}),Ie&&Kr(T,w),F}function N(T,E,R,O){var F=Hs(R);if(typeof F!="function")throw Error(U(150));if(R=F.call(R),R==null)throw Error(U(151));for(var V=F=null,I=E,w=E=0,_=null,x=R.next();I!==null&&!x.done;w++,x=R.next()){I.index>w?(_=I,I=null):_=I.sibling;var P=g(T,I,x.value,O);if(P===null){I===null&&(I=_);break}t&&I&&P.alternate===null&&e(T,I),E=s(P,E,w),V===null?F=P:V.sibling=P,V=P,I=_}if(x.done)return n(T,I),Ie&&Kr(T,w),F;if(I===null){for(;!x.done;w++,x=R.next())x=p(T,x.value,O),x!==null&&(E=s(x,E,w),V===null?F=x:V.sibling=x,V=x);return Ie&&Kr(T,w),F}for(I=r(T,I);!x.done;w++,x=R.next())x=v(I,T,w,x.value,O),x!==null&&(t&&x.alternate!==null&&I.delete(x.key===null?w:x.key),E=s(x,E,w),V===null?F=x:V.sibling=x,V=x);return t&&I.forEach(function(A){return e(T,A)}),Ie&&Kr(T,w),F}function k(T,E,R,O){if(typeof R=="object"&&R!==null&&R.type===Fi&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Qa:e:{for(var F=R.key,V=E;V!==null;){if(V.key===F){if(F=R.type,F===Fi){if(V.tag===7){n(T,V.sibling),E=i(V,R.props.children),E.return=T,T=E;break e}}else if(V.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===tr&&ny(F)===V.type){n(T,V.sibling),E=i(V,R.props),E.ref=Xs(T,V,R),E.return=T,T=E;break e}n(T,V);break}else e(T,V);V=V.sibling}R.type===Fi?(E=ri(R.props.children,T.mode,O,R.key),E.return=T,T=E):(O=bl(R.type,R.key,R.props,null,T.mode,O),O.ref=Xs(T,E,R),O.return=T,T=O)}return o(T);case Mi:e:{for(V=R.key;E!==null;){if(E.key===V)if(E.tag===4&&E.stateNode.containerInfo===R.containerInfo&&E.stateNode.implementation===R.implementation){n(T,E.sibling),E=i(E,R.children||[]),E.return=T,T=E;break e}else{n(T,E);break}else e(T,E);E=E.sibling}E=Pd(R,T.mode,O),E.return=T,T=E}return o(T);case tr:return V=R._init,k(T,E,V(R._payload),O)}if(so(R))return C(T,E,R,O);if(Hs(R))return N(T,E,R,O);ol(T,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,E!==null&&E.tag===6?(n(T,E.sibling),E=i(E,R),E.return=T,T=E):(n(T,E),E=Cd(R,T.mode,O),E.return=T,T=E),o(T)):n(T,E)}return k}var hs=b0(!0),D0=b0(!1),rc=jr(null),ic=null,Gi=null,Ff=null;function Uf(){Ff=Gi=ic=null}function Bf(t){var e=rc.current;Ee(rc),t._currentValue=e}function Eh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ns(t,e){ic=t,Ff=Gi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ct=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(Ff!==t)if(t={context:t,memoizedValue:e,next:null},Gi===null){if(ic===null)throw Error(U(308));Gi=t,ic.dependencies={lanes:0,firstContext:t}}else Gi=Gi.next=t;return e}var Jr=null;function zf(t){Jr===null?Jr=[t]:Jr.push(t)}function O0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,zf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Fn(t,r)}function Fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function $f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Fn(t,n)}return i=r.interleaved,i===null?(e.next=e,zf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Fn(t,n)}function Al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cf(t,n)}}function ry(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sc(t,e,n,r){var i=t.updateQueue;nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;o=0,f=u=c=null,l=s;do{var g=l.lane,v=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,N=l;switch(g=e,v=n,N.tag){case 1:if(C=N.payload,typeof C=="function"){p=C.call(v,p,g);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,g=typeof C=="function"?C.call(v,p,g):C,g==null)break e;p=Ae({},p,g);break e;case 2:nr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=v,c=p):f=f.next=v,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ui|=o,t.lanes=o,t.memoizedState=p}}function iy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var pa={},_n=jr(pa),$o=jr(pa),qo=jr(pa);function Zr(t){if(t===pa)throw Error(U(174));return t}function qf(t,e){switch(ve(qo,e),ve($o,t),ve(_n,pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:th(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=th(e,t)}Ee(_n),ve(_n,e)}function fs(){Ee(_n),Ee($o),Ee(qo)}function L0(t){Zr(qo.current);var e=Zr(_n.current),n=th(e,t.type);e!==n&&(ve($o,t),ve(_n,n))}function Wf(t){$o.current===t&&(Ee(_n),Ee($o))}var Te=jr(0);function oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xd=[];function Hf(){for(var t=0;t<xd.length;t++)xd[t]._workInProgressVersionPrimary=null;xd.length=0}var Rl=Hn.ReactCurrentDispatcher,Id=Hn.ReactCurrentBatchConfig,ci=0,Se=null,Fe=null,qe=null,ac=!1,_o=!1,Wo=0,PS=0;function at(){throw Error(U(321))}function Gf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function Kf(t,e,n,r,i,s){if(ci=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rl.current=t===null||t.memoizedState===null?DS:OS,t=n(r,i),_o){s=0;do{if(_o=!1,Wo=0,25<=s)throw Error(U(301));s+=1,qe=Fe=null,e.updateQueue=null,Rl.current=jS,t=n(r,i)}while(_o)}if(Rl.current=lc,e=Fe!==null&&Fe.next!==null,ci=0,qe=Fe=Se=null,ac=!1,e)throw Error(U(300));return t}function Qf(){var t=Wo!==0;return Wo=0,t}function mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Se.memoizedState=qe=t:qe=qe.next=t,qe}function Xt(){if(Fe===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=qe===null?Se.memoizedState:qe.next;if(e!==null)qe=e,Fe=t;else{if(t===null)throw Error(U(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},qe===null?Se.memoizedState=qe=t:qe=qe.next=t}return qe}function Ho(t,e){return typeof e=="function"?e(t):e}function Td(t){var e=Xt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,u=s;do{var f=u.lane;if((ci&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,o=r):c=c.next=p,Se.lanes|=f,ui|=f}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=l,un(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,ui|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sd(t){var e=Xt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);un(s,e.memoizedState)||(Ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function V0(){}function M0(t,e){var n=Se,r=Xt(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,Ct=!0),r=r.queue,Yf(B0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Go(9,U0.bind(null,n,r,i,e),void 0,null),He===null)throw Error(U(349));ci&30||F0(n,e,i)}return i}function F0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function U0(t,e,n,r){e.value=n,e.getSnapshot=r,z0(e)&&$0(t)}function B0(t,e,n){return n(function(){z0(e)&&$0(t)})}function z0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function $0(t){var e=Fn(t,1);e!==null&&cn(e,t,1,-1)}function sy(t){var e=mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:t},e.queue=t,t=t.dispatch=bS.bind(null,Se,t),[e.memoizedState,t]}function Go(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function q0(){return Xt().memoizedState}function Cl(t,e,n,r){var i=mn();Se.flags|=t,i.memoizedState=Go(1|e,n,void 0,r===void 0?null:r)}function Wc(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&Gf(r,o.deps)){i.memoizedState=Go(e,n,s,r);return}}Se.flags|=t,i.memoizedState=Go(1|e,n,s,r)}function oy(t,e){return Cl(8390656,8,t,e)}function Yf(t,e){return Wc(2048,8,t,e)}function W0(t,e){return Wc(4,2,t,e)}function H0(t,e){return Wc(4,4,t,e)}function G0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function K0(t,e,n){return n=n!=null?n.concat([t]):null,Wc(4,4,G0.bind(null,e,t),n)}function Xf(){}function Q0(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Y0(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function X0(t,e,n){return ci&21?(un(n,e)||(n=n0(),Se.lanes|=n,ui|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n)}function kS(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Id.transition;Id.transition={};try{t(!1),e()}finally{fe=n,Id.transition=r}}function J0(){return Xt().memoizedState}function NS(t,e,n){var r=xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Z0(t))ew(e,n);else if(n=O0(t,e,n,r),n!==null){var i=wt();cn(n,t,r,i),tw(n,e,r)}}function bS(t,e,n){var r=xr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Z0(t))ew(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,un(l,o)){var c=e.interleaved;c===null?(i.next=i,zf(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=O0(t,e,i,r),n!==null&&(i=wt(),cn(n,t,r,i),tw(n,e,r))}}function Z0(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function ew(t,e){_o=ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cf(t,n)}}var lc={readContext:Yt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},DS={readContext:Yt,useCallback:function(t,e){return mn().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:oy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4194308,4,G0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cl(4,2,t,e)},useMemo:function(t,e){var n=mn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=mn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=NS.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=mn();return t={current:t},e.memoizedState=t},useState:sy,useDebugValue:Xf,useDeferredValue:function(t){return mn().memoizedState=t},useTransition:function(){var t=sy(!1),e=t[0];return t=kS.bind(null,t[1]),mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=mn();if(Ie){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),He===null)throw Error(U(349));ci&30||F0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,oy(B0.bind(null,r,s,t),[t]),r.flags|=2048,Go(9,U0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=mn(),e=He.identifierPrefix;if(Ie){var n=bn,r=Nn;n=(r&~(1<<32-ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=PS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OS={readContext:Yt,useCallback:Q0,useContext:Yt,useEffect:Yf,useImperativeHandle:K0,useInsertionEffect:W0,useLayoutEffect:H0,useMemo:Y0,useReducer:Td,useRef:q0,useState:function(){return Td(Ho)},useDebugValue:Xf,useDeferredValue:function(t){var e=Xt();return X0(e,Fe.memoizedState,t)},useTransition:function(){var t=Td(Ho)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:V0,useSyncExternalStore:M0,useId:J0,unstable_isNewReconciler:!1},jS={readContext:Yt,useCallback:Q0,useContext:Yt,useEffect:Yf,useImperativeHandle:K0,useInsertionEffect:W0,useLayoutEffect:H0,useMemo:Y0,useReducer:Sd,useRef:q0,useState:function(){return Sd(Ho)},useDebugValue:Xf,useDeferredValue:function(t){var e=Xt();return Fe===null?e.memoizedState=t:X0(e,Fe.memoizedState,t)},useTransition:function(){var t=Sd(Ho)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:V0,useSyncExternalStore:M0,useId:J0,unstable_isNewReconciler:!1};function rn(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hc={isMounted:function(t){return(t=t._reactInternals)?_i(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=xr(t),s=Ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,i),e!==null&&(cn(e,t,i,r),Al(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=xr(t),s=Ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,i),e!==null&&(cn(e,t,i,r),Al(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=xr(t),i=Ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=wr(t,i,r),e!==null&&(cn(e,t,r,n),Al(e,t,r))}};function ay(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fo(n,r)||!Fo(i,s):!0}function nw(t,e,n){var r=!1,i=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=kt(e)?ai:ft.current,r=e.contextTypes,s=(r=r!=null)?us(t,i):Cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ly(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hc.enqueueReplaceState(e,e.state,null)}function Ih(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},$f(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=kt(e)?ai:ft.current,i.context=us(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hc.enqueueReplaceState(i,i.state,null),sc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,e){try{var n="",r=e;do n+=c1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ad(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Th(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var LS=typeof WeakMap=="function"?WeakMap:Map;function rw(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){uc||(uc=!0,Oh=r),Th(t,e)},n}function iw(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Th(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Th(t,e),typeof r!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new LS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=YS.bind(null,t,e,n),e.then(t,t))}function uy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var VS=Hn.ReactCurrentOwner,Ct=!1;function vt(t,e,n,r){e.child=t===null?D0(e,null,n,r):hs(e,t.child,n,r)}function hy(t,e,n,r,i){n=n.render;var s=e.ref;return ns(e,i),r=Kf(t,e,n,r,s,i),n=Qf(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(Ie&&n&&Lf(e),e.flags|=1,vt(t,e,r,i),e.child)}function fy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sw(t,e,s,r,i)):(t=bl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fo,n(o,r)&&t.ref===e.ref)return Un(t,e,i)}return e.flags|=1,t=Ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function sw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fo(s,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ct=!0);else return e.lanes=t.lanes,Un(t,e,i)}return Sh(t,e,n,r,i)}function ow(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Qi,jt),jt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(Qi,jt),jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(Qi,jt),jt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(Qi,jt),jt|=r;return vt(t,e,i,n),e.child}function aw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sh(t,e,n,r,i){var s=kt(n)?ai:ft.current;return s=us(e,s),ns(e,i),n=Kf(t,e,n,r,s,i),r=Qf(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(Ie&&r&&Lf(e),e.flags|=1,vt(t,e,n,i),e.child)}function py(t,e,n,r,i){if(kt(n)){var s=!0;ec(e)}else s=!1;if(ns(e,i),e.stateNode===null)Pl(t,e),nw(e,n,r),Ih(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yt(u):(u=kt(n)?ai:ft.current,u=us(e,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&ly(e,o,r,u),nr=!1;var g=e.memoizedState;o.state=g,sc(e,r,o,i),c=e.memoizedState,l!==r||g!==c||Pt.current||nr?(typeof f=="function"&&(xh(e,n,f,r),c=e.memoizedState),(l=nr||ay(e,n,l,r,g,c,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,j0(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:rn(e.type,l),o.props=u,p=e.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Yt(c):(c=kt(n)?ai:ft.current,c=us(e,c));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==c)&&ly(e,o,r,c),nr=!1,g=e.memoizedState,o.state=g,sc(e,r,o,i);var C=e.memoizedState;l!==p||g!==C||Pt.current||nr?(typeof v=="function"&&(xh(e,n,v,r),C=e.memoizedState),(u=nr||ay(e,n,u,r,g,C,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Ah(t,e,n,r,s,i)}function Ah(t,e,n,r,i,s){aw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Zg(e,n,!1),Un(t,e,s);r=e.stateNode,VS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=hs(e,t.child,null,s),e.child=hs(e,null,l,s)):vt(t,e,l,s),e.memoizedState=r.state,i&&Zg(e,n,!0),e.child}function lw(t){var e=t.stateNode;e.pendingContext?Jg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jg(t,e.context,!1),qf(t,e.containerInfo)}function my(t,e,n,r,i){return ds(),Mf(i),e.flags|=256,vt(t,e,n,r),e.child}var Rh={dehydrated:null,treeContext:null,retryLane:0};function Ch(t){return{baseLanes:t,cachePool:null,transitions:null}}function cw(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(Te,i&1),t===null)return wh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qc(o,r,0,null),t=ri(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ch(n),e.memoizedState=Rh,t):Jf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return MS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Ir(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ir(l,s):(s=ri(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ch(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Rh,r}return s=t.child,t=s.sibling,r=Ir(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jf(t,e){return e=Qc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function al(t,e,n,r){return r!==null&&Mf(r),hs(e,t.child,null,n),t=Jf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function MS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ad(Error(U(422))),al(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Qc({mode:"visible",children:r.children},i,0,null),s=ri(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&hs(e,t.child,null,o),e.child.memoizedState=Ch(o),e.memoizedState=Rh,s);if(!(e.mode&1))return al(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Ad(s,r,void 0),al(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ct||l){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Fn(t,i),cn(r,t,i,-1))}return ip(),r=Ad(Error(U(421))),al(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=XS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Lt=_r(i.nextSibling),Ft=e,Ie=!0,on=null,t!==null&&(Ht[Gt++]=Nn,Ht[Gt++]=bn,Ht[Gt++]=li,Nn=t.id,bn=t.overflow,li=e),e=Jf(e,r.children),e.flags|=4096,e)}function gy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Eh(t.return,e,n)}function Rd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function uw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gy(t,n,e);else if(t.tag===19)gy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&oc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Rd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&oc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Rd(e,!0,n,null,s);break;case"together":Rd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ui|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function FS(t,e,n){switch(e.tag){case 3:lw(e),ds();break;case 5:L0(e);break;case 1:kt(e.type)&&ec(e);break;case 4:qf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(rc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?cw(t,e,n):(ve(Te,Te.current&1),t=Un(t,e,n),t!==null?t.sibling:null);ve(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return uw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,ow(t,e,n)}return Un(t,e,n)}var dw,Ph,hw,fw;dw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ph=function(){};hw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zr(_n.current);var s=null;switch(n){case"input":i=Xd(t,i),r=Xd(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=eh(t,i),r=eh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Jl)}nh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&we("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};fw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Js(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function US(t,e,n){var r=e.pendingProps;switch(Vf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(e),null;case 1:return kt(e.type)&&Zl(),lt(e),null;case 3:return r=e.stateNode,fs(),Ee(Pt),Ee(ft),Hf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,on!==null&&(Vh(on),on=null))),Ph(t,e),lt(e),null;case 5:Wf(e);var i=Zr(qo.current);if(n=e.type,t!==null&&e.stateNode!=null)hw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return lt(e),null}if(t=Zr(_n.current),sl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gn]=e,r[zo]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<ao.length;i++)we(ao[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Sg(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":Rg(r,s),we("invalid",r)}nh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&il(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&il(r.textContent,l,t),i=["children",""+l]):bo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":Ya(r),Ag(r,s,!0);break;case"textarea":Ya(r),Cg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Jl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=B_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gn]=e,t[zo]=r,dw(t,e,!1,!1),e.stateNode=t;e:{switch(o=rh(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<ao.length;i++)we(ao[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Sg(t,r),i=Xd(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),we("invalid",t);break;case"textarea":Rg(t,r),i=eh(t,r),we("invalid",t);break;default:i=r}nh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?q_(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&z_(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Do(t,c):typeof c=="number"&&Do(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bo.hasOwnProperty(s)?c!=null&&s==="onScroll"&&we("scroll",t):c!=null&&xf(t,s,c,o))}switch(n){case"input":Ya(t),Ag(t,r,!1);break;case"textarea":Ya(t),Cg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Rr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ji(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ji(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return lt(e),null;case 6:if(t&&e.stateNode!=null)fw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Zr(qo.current),Zr(_n.current),sl(e)){if(r=e.stateNode,n=e.memoizedProps,r[gn]=e,(s=r.nodeValue!==n)&&(t=Ft,t!==null))switch(t.tag){case 3:il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=e,e.stateNode=r}return lt(e),null;case 13:if(Ee(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Lt!==null&&e.mode&1&&!(e.flags&128))N0(),ds(),e.flags|=98560,s=!1;else if(s=sl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[gn]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;lt(e),s=!1}else on!==null&&(Vh(on),on=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?Ue===0&&(Ue=3):ip())),e.updateQueue!==null&&(e.flags|=4),lt(e),null);case 4:return fs(),Ph(t,e),t===null&&Uo(e.stateNode.containerInfo),lt(e),null;case 10:return Bf(e.type._context),lt(e),null;case 17:return kt(e.type)&&Zl(),lt(e),null;case 19:if(Ee(Te),s=e.memoizedState,s===null)return lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Js(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=oc(t),o!==null){for(e.flags|=128,Js(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>ms&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304)}else{if(!r)if(t=oc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return lt(e),null}else 2*De()-s.renderingStartTime>ms&&n!==1073741824&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Te.current,ve(Te,r?n&1|2:n&1),e):(lt(e),null);case 22:case 23:return rp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?jt&1073741824&&(lt(e),e.subtreeFlags&6&&(e.flags|=8192)):lt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function BS(t,e){switch(Vf(e),e.tag){case 1:return kt(e.type)&&Zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fs(),Ee(Pt),Ee(ft),Hf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wf(e),null;case 13:if(Ee(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Te),null;case 4:return fs(),null;case 10:return Bf(e.type._context),null;case 22:case 23:return rp(),null;case 24:return null;default:return null}}var ll=!1,dt=!1,zS=typeof WeakSet=="function"?WeakSet:Set,G=null;function Ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function kh(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var yy=!1;function $S(t,e){if(fh=Ql,t=v0(),jf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,f=0,p=t,g=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(c=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===t)break t;if(g===n&&++u===i&&(l=o),g===s&&++f===r&&(c=o),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ph={focusedElem:t,selectionRange:n},Ql=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,k=C.memoizedState,T=e.stateNode,E=T.getSnapshotBeforeUpdate(e.elementType===e.type?N:rn(e.type,N),k);T.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){Pe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return C=yy,yy=!1,C}function wo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&kh(e,n,s)}i=i.next}while(i!==r)}}function Gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Nh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pw(t){var e=t.alternate;e!==null&&(t.alternate=null,pw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gn],delete e[zo],delete e[yh],delete e[SS],delete e[AS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mw(t){return t.tag===5||t.tag===3||t.tag===4}function vy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jl));else if(r!==4&&(t=t.child,t!==null))for(bh(t,e,n),t=t.sibling;t!==null;)bh(t,e,n),t=t.sibling}function Dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dh(t,e,n),t=t.sibling;t!==null;)Dh(t,e,n),t=t.sibling}var Qe=null,sn=!1;function Jn(t,e,n){for(n=n.child;n!==null;)gw(t,e,n),n=n.sibling}function gw(t,e,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(Fc,n)}catch{}switch(n.tag){case 5:dt||Ki(n,e);case 6:var r=Qe,i=sn;Qe=null,Jn(t,e,n),Qe=r,sn=i,Qe!==null&&(sn?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(sn?(t=Qe,n=n.stateNode,t.nodeType===8?wd(t.parentNode,n):t.nodeType===1&&wd(t,n),Vo(t)):wd(Qe,n.stateNode));break;case 4:r=Qe,i=sn,Qe=n.stateNode.containerInfo,sn=!0,Jn(t,e,n),Qe=r,sn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kh(n,e,o),i=i.next}while(i!==r)}Jn(t,e,n);break;case 1:if(!dt&&(Ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}Jn(t,e,n);break;case 21:Jn(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,Jn(t,e,n),dt=r):Jn(t,e,n);break;default:Jn(t,e,n)}}function _y(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zS),e.forEach(function(r){var i=JS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Qe=l.stateNode,sn=!1;break e;case 3:Qe=l.stateNode.containerInfo,sn=!0;break e;case 4:Qe=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(Qe===null)throw Error(U(160));gw(s,o,i),Qe=null,sn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Pe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yw(e,t),e=e.sibling}function yw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nn(e,t),pn(t),r&4){try{wo(3,t,t.return),Gc(3,t)}catch(N){Pe(t,t.return,N)}try{wo(5,t,t.return)}catch(N){Pe(t,t.return,N)}}break;case 1:nn(e,t),pn(t),r&512&&n!==null&&Ki(n,n.return);break;case 5:if(nn(e,t),pn(t),r&512&&n!==null&&Ki(n,n.return),t.flags&32){var i=t.stateNode;try{Do(i,"")}catch(N){Pe(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&F_(i,s),rh(l,o);var u=rh(l,s);for(o=0;o<c.length;o+=2){var f=c[o],p=c[o+1];f==="style"?q_(i,p):f==="dangerouslySetInnerHTML"?z_(i,p):f==="children"?Do(i,p):xf(i,f,p,u)}switch(l){case"input":Jd(i,s);break;case"textarea":U_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Ji(i,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?Ji(i,!!s.multiple,s.defaultValue,!0):Ji(i,!!s.multiple,s.multiple?[]:"",!1))}i[zo]=s}catch(N){Pe(t,t.return,N)}}break;case 6:if(nn(e,t),pn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Pe(t,t.return,N)}}break;case 3:if(nn(e,t),pn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(e.containerInfo)}catch(N){Pe(t,t.return,N)}break;case 4:nn(e,t),pn(t);break;case 13:nn(e,t),pn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tp=De())),r&4&&_y(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(u=dt)||f,nn(e,t),dt=u):nn(e,t),pn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(G=t,f=t.child;f!==null;){for(p=G=f;G!==null;){switch(g=G,v=g.child,g.tag){case 0:case 11:case 14:case 15:wo(4,g,g.return);break;case 1:Ki(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(N){Pe(r,n,N)}}break;case 5:Ki(g,g.return);break;case 22:if(g.memoizedState!==null){Ey(p);continue}}v!==null?(v.return=g,G=v):Ey(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=$_("display",o))}catch(N){Pe(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(N){Pe(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nn(e,t),pn(t),r&4&&_y(t);break;case 21:break;default:nn(e,t),pn(t)}}function pn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mw(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Do(i,""),r.flags&=-33);var s=vy(t);Dh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=vy(t);bh(t,l,o);break;default:throw Error(U(161))}}catch(c){Pe(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qS(t,e,n){G=t,vw(t)}function vw(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ll;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||dt;l=ll;var u=dt;if(ll=o,(dt=c)&&!u)for(G=i;G!==null;)o=G,c=o.child,o.tag===22&&o.memoizedState!==null?xy(i):c!==null?(c.return=o,G=c):xy(i);for(;s!==null;)G=s,vw(s),s=s.sibling;G=i,ll=l,dt=u}wy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):wy(t)}}function wy(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||Gc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&iy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}iy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Vo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}dt||e.flags&512&&Nh(e)}catch(g){Pe(e,e.return,g)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function Ey(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function xy(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gc(4,e)}catch(c){Pe(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){Pe(e,i,c)}}var s=e.return;try{Nh(e)}catch(c){Pe(e,s,c)}break;case 5:var o=e.return;try{Nh(e)}catch(c){Pe(e,o,c)}}}catch(c){Pe(e,e.return,c)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var WS=Math.ceil,cc=Hn.ReactCurrentDispatcher,Zf=Hn.ReactCurrentOwner,Qt=Hn.ReactCurrentBatchConfig,de=0,He=null,Le=null,Ze=0,jt=0,Qi=jr(0),Ue=0,Ko=null,ui=0,Kc=0,ep=0,Eo=null,Rt=null,tp=0,ms=1/0,Pn=null,uc=!1,Oh=null,Er=null,cl=!1,dr=null,dc=0,xo=0,jh=null,kl=-1,Nl=0;function wt(){return de&6?De():kl!==-1?kl:kl=De()}function xr(t){return t.mode&1?de&2&&Ze!==0?Ze&-Ze:CS.transition!==null?(Nl===0&&(Nl=n0()),Nl):(t=fe,t!==0||(t=window.event,t=t===void 0?16:c0(t.type)),t):1}function cn(t,e,n,r){if(50<xo)throw xo=0,jh=null,Error(U(185));da(t,n,r),(!(de&2)||t!==He)&&(t===He&&(!(de&2)&&(Kc|=n),Ue===4&&ir(t,Ze)),Nt(t,r),n===1&&de===0&&!(e.mode&1)&&(ms=De()+500,qc&&Lr()))}function Nt(t,e){var n=t.callbackNode;C1(t,e);var r=Kl(t,t===He?Ze:0);if(r===0)n!==null&&Ng(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ng(n),e===1)t.tag===0?RS(Iy.bind(null,t)):C0(Iy.bind(null,t)),IS(function(){!(de&6)&&Lr()}),n=null;else{switch(r0(r)){case 1:n=Rf;break;case 4:n=e0;break;case 16:n=Gl;break;case 536870912:n=t0;break;default:n=Gl}n=Aw(n,_w.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _w(t,e){if(kl=-1,Nl=0,de&6)throw Error(U(327));var n=t.callbackNode;if(rs()&&t.callbackNode!==n)return null;var r=Kl(t,t===He?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=hc(t,r);else{e=r;var i=de;de|=2;var s=Ew();(He!==t||Ze!==e)&&(Pn=null,ms=De()+500,ni(t,e));do try{KS();break}catch(l){ww(t,l)}while(1);Uf(),cc.current=s,de=i,Le!==null?e=0:(He=null,Ze=0,e=Ue)}if(e!==0){if(e===2&&(i=lh(t),i!==0&&(r=i,e=Lh(t,i))),e===1)throw n=Ko,ni(t,0),ir(t,r),Nt(t,De()),n;if(e===6)ir(t,r);else{if(i=t.current.alternate,!(r&30)&&!HS(i)&&(e=hc(t,r),e===2&&(s=lh(t),s!==0&&(r=s,e=Lh(t,s))),e===1))throw n=Ko,ni(t,0),ir(t,r),Nt(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Qr(t,Rt,Pn);break;case 3:if(ir(t,r),(r&130023424)===r&&(e=tp+500-De(),10<e)){if(Kl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=gh(Qr.bind(null,t,Rt,Pn),e);break}Qr(t,Rt,Pn);break;case 4:if(ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ln(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*WS(r/1960))-r,10<r){t.timeoutHandle=gh(Qr.bind(null,t,Rt,Pn),r);break}Qr(t,Rt,Pn);break;case 5:Qr(t,Rt,Pn);break;default:throw Error(U(329))}}}return Nt(t,De()),t.callbackNode===n?_w.bind(null,t):null}function Lh(t,e){var n=Eo;return t.current.memoizedState.isDehydrated&&(ni(t,e).flags|=256),t=hc(t,e),t!==2&&(e=Rt,Rt=n,e!==null&&Vh(e)),t}function Vh(t){Rt===null?Rt=t:Rt.push.apply(Rt,t)}function HS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~ep,e&=~Kc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ln(e),r=1<<n;t[n]=-1,e&=~r}}function Iy(t){if(de&6)throw Error(U(327));rs();var e=Kl(t,0);if(!(e&1))return Nt(t,De()),null;var n=hc(t,e);if(t.tag!==0&&n===2){var r=lh(t);r!==0&&(e=r,n=Lh(t,r))}if(n===1)throw n=Ko,ni(t,0),ir(t,e),Nt(t,De()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qr(t,Rt,Pn),Nt(t,De()),null}function np(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(ms=De()+500,qc&&Lr())}}function di(t){dr!==null&&dr.tag===0&&!(de&6)&&rs();var e=de;de|=1;var n=Qt.transition,r=fe;try{if(Qt.transition=null,fe=1,t)return t()}finally{fe=r,Qt.transition=n,de=e,!(de&6)&&Lr()}}function rp(){jt=Qi.current,Ee(Qi)}function ni(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xS(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Vf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zl();break;case 3:fs(),Ee(Pt),Ee(ft),Hf();break;case 5:Wf(r);break;case 4:fs();break;case 13:Ee(Te);break;case 19:Ee(Te);break;case 10:Bf(r.type._context);break;case 22:case 23:rp()}n=n.return}if(He=t,Le=t=Ir(t.current,null),Ze=jt=e,Ue=0,Ko=null,ep=Kc=ui=0,Rt=Eo=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jr=null}return t}function ww(t,e){do{var n=Le;try{if(Uf(),Rl.current=lc,ac){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ac=!1}if(ci=0,qe=Fe=Se=null,_o=!1,Wo=0,Zf.current=null,n===null||n.return===null){Ue=1,Ko=e,Le=null;break}e:{var s=t,o=n.return,l=n,c=e;if(e=Ze,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=uy(o);if(v!==null){v.flags&=-257,dy(v,o,l,s,e),v.mode&1&&cy(s,u,e),e=v,c=u;var C=e.updateQueue;if(C===null){var N=new Set;N.add(c),e.updateQueue=N}else C.add(c);break e}else{if(!(e&1)){cy(s,u,e),ip();break e}c=Error(U(426))}}else if(Ie&&l.mode&1){var k=uy(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),dy(k,o,l,s,e),Mf(ps(c,l));break e}}s=c=ps(c,l),Ue!==4&&(Ue=2),Eo===null?Eo=[s]:Eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=rw(s,c,e);ry(s,T);break e;case 1:l=c;var E=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(Er===null||!Er.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=iw(s,l,e);ry(s,O);break e}}s=s.return}while(s!==null)}Iw(n)}catch(F){e=F,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(1)}function Ew(){var t=cc.current;return cc.current=lc,t===null?lc:t}function ip(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),He===null||!(ui&268435455)&&!(Kc&268435455)||ir(He,Ze)}function hc(t,e){var n=de;de|=2;var r=Ew();(He!==t||Ze!==e)&&(Pn=null,ni(t,e));do try{GS();break}catch(i){ww(t,i)}while(1);if(Uf(),de=n,cc.current=r,Le!==null)throw Error(U(261));return He=null,Ze=0,Ue}function GS(){for(;Le!==null;)xw(Le)}function KS(){for(;Le!==null&&!_1();)xw(Le)}function xw(t){var e=Sw(t.alternate,t,jt);t.memoizedProps=t.pendingProps,e===null?Iw(t):Le=e,Zf.current=null}function Iw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=BS(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Le=null;return}}else if(n=US(n,e,jt),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);Ue===0&&(Ue=5)}function Qr(t,e,n){var r=fe,i=Qt.transition;try{Qt.transition=null,fe=1,QS(t,e,n,r)}finally{Qt.transition=i,fe=r}return null}function QS(t,e,n,r){do rs();while(dr!==null);if(de&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(P1(t,s),t===He&&(Le=He=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,Aw(Gl,function(){return rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qt.transition,Qt.transition=null;var o=fe;fe=1;var l=de;de|=4,Zf.current=null,$S(t,n),yw(n,t),mS(ph),Ql=!!fh,ph=fh=null,t.current=n,qS(n),w1(),de=l,fe=o,Qt.transition=s}else t.current=n;if(cl&&(cl=!1,dr=t,dc=i),s=t.pendingLanes,s===0&&(Er=null),I1(n.stateNode),Nt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uc)throw uc=!1,t=Oh,Oh=null,t;return dc&1&&t.tag!==0&&rs(),s=t.pendingLanes,s&1?t===jh?xo++:(xo=0,jh=t):xo=0,Lr(),null}function rs(){if(dr!==null){var t=r0(dc),e=Qt.transition,n=fe;try{if(Qt.transition=null,fe=16>t?16:t,dr===null)var r=!1;else{if(t=dr,dr=null,dc=0,de&6)throw Error(U(331));var i=de;for(de|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(G=u;G!==null;){var f=G;switch(f.tag){case 0:case 11:case 15:wo(8,f,s)}var p=f.child;if(p!==null)p.return=f,G=p;else for(;G!==null;){f=G;var g=f.sibling,v=f.return;if(pw(f),f===u){G=null;break}if(g!==null){g.return=v,G=g;break}G=v}}}var C=s.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var k=N.sibling;N.sibling=null,N=k}while(N!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wo(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,G=T;break e}G=s.return}}var E=t.current;for(G=E;G!==null;){o=G;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,G=R;else e:for(o=E;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Gc(9,l)}}catch(F){Pe(l,l.return,F)}if(l===o){G=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,G=O;break e}G=l.return}}if(de=i,Lr(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(Fc,t)}catch{}r=!0}return r}finally{fe=n,Qt.transition=e}}return!1}function Ty(t,e,n){e=ps(n,e),e=rw(t,e,1),t=wr(t,e,1),e=wt(),t!==null&&(da(t,1,e),Nt(t,e))}function Pe(t,e,n){if(t.tag===3)Ty(t,t,n);else for(;e!==null;){if(e.tag===3){Ty(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Er===null||!Er.has(r))){t=ps(n,t),t=iw(e,t,1),e=wr(e,t,1),t=wt(),e!==null&&(da(e,1,t),Nt(e,t));break}}e=e.return}}function YS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Ze&n)===n&&(Ue===4||Ue===3&&(Ze&130023424)===Ze&&500>De()-tp?ni(t,0):ep|=n),Nt(t,e)}function Tw(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=wt();t=Fn(t,e),t!==null&&(da(t,e,n),Nt(t,n))}function XS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Tw(t,n)}function JS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),Tw(t,n)}var Sw;Sw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)Ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ct=!1,FS(t,e,n);Ct=!!(t.flags&131072)}else Ct=!1,Ie&&e.flags&1048576&&P0(e,nc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pl(t,e),t=e.pendingProps;var i=us(e,ft.current);ns(e,n),i=Kf(null,e,r,t,i,n);var s=Qf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,ec(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$f(e),i.updater=Hc,e.stateNode=i,i._reactInternals=e,Ih(e,r,t,n),e=Ah(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&Lf(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=eA(r),t=rn(r,t),i){case 0:e=Sh(null,e,r,t,n);break e;case 1:e=py(null,e,r,t,n);break e;case 11:e=hy(null,e,r,t,n);break e;case 14:e=fy(null,e,r,rn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Sh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),py(t,e,r,i,n);case 3:e:{if(lw(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,j0(t,e),sc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ps(Error(U(423)),e),e=my(t,e,r,n,i);break e}else if(r!==i){i=ps(Error(U(424)),e),e=my(t,e,r,n,i);break e}else for(Lt=_r(e.stateNode.containerInfo.firstChild),Ft=e,Ie=!0,on=null,n=D0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ds(),r===i){e=Un(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return L0(e),t===null&&wh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,mh(r,i)?o=null:s!==null&&mh(r,s)&&(e.flags|=32),aw(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&wh(e),null;case 13:return cw(t,e,n);case 4:return qf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=hs(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),hy(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(rc,r._currentValue),r._currentValue=o,s!==null)if(un(s.value,o)){if(s.children===i.children&&!Pt.current){e=Un(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Ln(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Eh(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Eh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ns(e,n),i=Yt(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=rn(r,e.pendingProps),i=rn(r.type,i),fy(t,e,r,i,n);case 15:return sw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Pl(t,e),e.tag=1,kt(r)?(t=!0,ec(e)):t=!1,ns(e,n),nw(e,r,i),Ih(e,r,i,n),Ah(null,e,r,!0,t,n);case 19:return uw(t,e,n);case 22:return ow(t,e,n)}throw Error(U(156,e.tag))};function Aw(t,e){return Z_(t,e)}function ZS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,e,n,r){return new ZS(t,e,n,r)}function sp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eA(t){if(typeof t=="function")return sp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tf)return 11;if(t===Sf)return 14}return 2}function Ir(t,e){var n=t.alternate;return n===null?(n=Kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fi:return ri(n.children,i,s,e);case If:o=8,i|=8;break;case Gd:return t=Kt(12,n,e,i|2),t.elementType=Gd,t.lanes=s,t;case Kd:return t=Kt(13,n,e,i),t.elementType=Kd,t.lanes=s,t;case Qd:return t=Kt(19,n,e,i),t.elementType=Qd,t.lanes=s,t;case L_:return Qc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O_:o=10;break e;case j_:o=9;break e;case Tf:o=11;break e;case Sf:o=14;break e;case tr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ri(t,e,n,r){return t=Kt(7,t,r,e),t.lanes=n,t}function Qc(t,e,n,r){return t=Kt(22,t,r,e),t.elementType=L_,t.lanes=n,t.stateNode={isHidden:!1},t}function Cd(t,e,n){return t=Kt(6,t,null,e),t.lanes=n,t}function Pd(t,e,n){return e=Kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cd(0),this.expirationTimes=cd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function op(t,e,n,r,i,s,o,l,c){return t=new tA(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$f(s),t}function nA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Rw(t){if(!t)return Cr;t=t._reactInternals;e:{if(_i(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(kt(n))return R0(t,n,e)}return e}function Cw(t,e,n,r,i,s,o,l,c){return t=op(n,r,!0,t,i,s,o,l,c),t.context=Rw(null),n=t.current,r=wt(),i=xr(n),s=Ln(r,i),s.callback=e??null,wr(n,s,i),t.current.lanes=i,da(t,i,r),Nt(t,r),t}function Yc(t,e,n,r){var i=e.current,s=wt(),o=xr(i);return n=Rw(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wr(i,e,o),t!==null&&(cn(t,i,o,s),Al(t,i,o)),o}function fc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ap(t,e){Sy(t,e),(t=t.alternate)&&Sy(t,e)}function rA(){return null}var Pw=typeof reportError=="function"?reportError:function(t){console.error(t)};function lp(t){this._internalRoot=t}Xc.prototype.render=lp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Yc(t,e,null,null)};Xc.prototype.unmount=lp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;di(function(){Yc(null,t,null,null)}),e[Mn]=null}};function Xc(t){this._internalRoot=t}Xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=o0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&l0(t)}};function cp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ay(){}function iA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=fc(o);s.call(u)}}var o=Cw(e,r,t,0,null,!1,!1,"",Ay);return t._reactRootContainer=o,t[Mn]=o.current,Uo(t.nodeType===8?t.parentNode:t),di(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=fc(c);l.call(u)}}var c=op(t,0,!1,null,null,!1,!1,"",Ay);return t._reactRootContainer=c,t[Mn]=c.current,Uo(t.nodeType===8?t.parentNode:t),di(function(){Yc(e,c,n,r)}),c}function Zc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=fc(o);l.call(c)}}Yc(e,o,t,i)}else o=iA(n,e,t,i,r);return fc(o)}i0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oo(e.pendingLanes);n!==0&&(Cf(e,n|1),Nt(e,De()),!(de&6)&&(ms=De()+500,Lr()))}break;case 13:di(function(){var r=Fn(t,1);if(r!==null){var i=wt();cn(r,t,1,i)}}),ap(t,1)}};Pf=function(t){if(t.tag===13){var e=Fn(t,134217728);if(e!==null){var n=wt();cn(e,t,134217728,n)}ap(t,134217728)}};s0=function(t){if(t.tag===13){var e=xr(t),n=Fn(t,e);if(n!==null){var r=wt();cn(n,t,e,r)}ap(t,e)}};o0=function(){return fe};a0=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};sh=function(t,e,n){switch(e){case"input":if(Jd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=$c(r);if(!i)throw Error(U(90));M_(r),Jd(r,i)}}}break;case"textarea":U_(t,n);break;case"select":e=n.value,e!=null&&Ji(t,!!n.multiple,e,!1)}};G_=np;K_=di;var sA={usingClientEntryPoint:!1,Events:[fa,$i,$c,W_,H_,np]},Zs={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oA={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=X_(t),t===null?null:t.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||rA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{Fc=ul.inject(oA),vn=ul}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sA;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cp(e))throw Error(U(200));return nA(t,e,null,n)};$t.createRoot=function(t,e){if(!cp(t))throw Error(U(299));var n=!1,r="",i=Pw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=op(t,1,!1,null,null,n,!1,r,i),t[Mn]=e.current,Uo(t.nodeType===8?t.parentNode:t),new lp(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=X_(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return di(t)};$t.hydrate=function(t,e,n){if(!Jc(e))throw Error(U(200));return Zc(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!cp(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Pw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Cw(e,null,t,1,n??null,i,!1,s,o),t[Mn]=e.current,Uo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xc(e)};$t.render=function(t,e,n){if(!Jc(e))throw Error(U(200));return Zc(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!Jc(t))throw Error(U(40));return t._reactRootContainer?(di(function(){Zc(null,null,t,!1,function(){t._reactRootContainer=null,t[Mn]=null})}),!0):!1};$t.unstable_batchedUpdates=np;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Jc(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Zc(t,e,n,!1,r)};$t.version="18.3.1-next-f1338f8080-20240426";function kw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kw)}catch(t){console.error(t)}}kw(),k_.exports=$t;var aA=k_.exports,Nw,Ry=aA;Nw=Ry.createRoot,Ry.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qo.apply(this,arguments)}var hr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(hr||(hr={}));const Cy="popstate";function lA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Mh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Dw(i)}return uA(e,n,null,t)}function Be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function bw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cA(){return Math.random().toString(36).substr(2,8)}function Py(t,e){return{usr:t.state,key:t.key,idx:e}}function Mh(t,e,n,r){return n===void 0&&(n=null),Qo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ss(e):e,{state:n,key:e&&e.key||r||cA()})}function Dw(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ss(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function uA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=hr.Pop,c=null,u=f();u==null&&(u=0,o.replaceState(Qo({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=hr.Pop;let k=f(),T=k==null?null:k-u;u=k,c&&c({action:l,location:N.location,delta:T})}function g(k,T){l=hr.Push;let E=Mh(N.location,k,T);n&&n(E,k),u=f()+1;let R=Py(E,u),O=N.createHref(E);try{o.pushState(R,"",O)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(O)}s&&c&&c({action:l,location:N.location,delta:1})}function v(k,T){l=hr.Replace;let E=Mh(N.location,k,T);n&&n(E,k),u=f();let R=Py(E,u),O=N.createHref(E);o.replaceState(R,"",O),s&&c&&c({action:l,location:N.location,delta:0})}function C(k){let T=i.location.origin!=="null"?i.location.origin:i.location.href,E=typeof k=="string"?k:Dw(k);return E=E.replace(/ $/,"%20"),Be(T,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,T)}let N={get action(){return l},get location(){return t(i,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Cy,p),c=k,()=>{i.removeEventListener(Cy,p),c=null}},createHref(k){return e(i,k)},createURL:C,encodeLocation(k){let T=C(k);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:g,replace:v,go(k){return o.go(k)}};return N}var ky;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ky||(ky={}));function dA(t,e,n){return n===void 0&&(n="/"),hA(t,e,n,!1)}function hA(t,e,n,r){let i=typeof e=="string"?Ss(e):e,s=Lw(i.pathname||"/",n);if(s==null)return null;let o=Ow(t);fA(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=TA(s);l=xA(o[c],u,r)}return l}function Ow(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(Be(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=ii([r,c.relativePath]),f=n.concat(c);s.children&&s.children.length>0&&(Be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ow(s.children,e,f,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:wA(u,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of jw(s.path))i(s,o,c)}),e}function jw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=jw(r.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function fA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:EA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pA=/^:[\w-]+$/,mA=3,gA=2,yA=1,vA=10,_A=-2,Ny=t=>t==="*";function wA(t,e){let n=t.split("/"),r=n.length;return n.some(Ny)&&(r+=_A),e&&(r+=gA),n.filter(i=>!Ny(i)).reduce((i,s)=>i+(pA.test(s)?mA:s===""?yA:vA),r)}function EA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function xA(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=by({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),g=c.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=by({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:ii([s,p.pathname]),pathnameBase:kA(ii([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=ii([s,p.pathnameBase]))}return o}function by(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=IA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,f,p)=>{let{paramName:g,isOptional:v}=f;if(g==="*"){let N=l[p]||"";o=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const C=l[p];return v&&!C?u[g]=void 0:u[g]=(C||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function IA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),bw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function TA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Lw(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function SA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ss(t):t;return{pathname:n?n.startsWith("/")?n:AA(n,e):e,search:NA(r),hash:bA(i)}}function AA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function kd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function RA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function CA(t,e){let n=RA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function PA(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ss(t):(i=Qo({},t),Be(!i.pathname||!i.pathname.includes("?"),kd("?","pathname","search",i)),Be(!i.pathname||!i.pathname.includes("#"),kd("#","pathname","hash",i)),Be(!i.search||!i.search.includes("#"),kd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let c=SA(i,l),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const ii=t=>t.join("/").replace(/\/\/+/g,"/"),kA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),NA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,bA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function DA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Vw=["post","put","patch","delete"];new Set(Vw);const OA=["get",...Vw];new Set(OA);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yo(){return Yo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yo.apply(this,arguments)}const up=D.createContext(null),jA=D.createContext(null),eu=D.createContext(null),tu=D.createContext(null),wi=D.createContext({outlet:null,matches:[],isDataRoute:!1}),Mw=D.createContext(null);function nu(){return D.useContext(tu)!=null}function ru(){return nu()||Be(!1),D.useContext(tu).location}function Fw(t){D.useContext(eu).static||D.useLayoutEffect(t)}function Gn(){let{isDataRoute:t}=D.useContext(wi);return t?KA():LA()}function LA(){nu()||Be(!1);let t=D.useContext(up),{basename:e,future:n,navigator:r}=D.useContext(eu),{matches:i}=D.useContext(wi),{pathname:s}=ru(),o=JSON.stringify(CA(i,n.v7_relativeSplatPath)),l=D.useRef(!1);return Fw(()=>{l.current=!0}),D.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=PA(u,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ii([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function Uw(){let{matches:t}=D.useContext(wi),e=t[t.length-1];return e?e.params:{}}function VA(t,e){return MA(t,e)}function MA(t,e,n,r){nu()||Be(!1);let{navigator:i}=D.useContext(eu),{matches:s}=D.useContext(wi),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=ru(),f;if(e){var p;let k=typeof e=="string"?Ss(e):e;c==="/"||(p=k.pathname)!=null&&p.startsWith(c)||Be(!1),f=k}else f=u;let g=f.pathname||"/",v=g;if(c!=="/"){let k=c.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let C=dA(t,{pathname:v}),N=$A(C&&C.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:ii([c,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:ii([c,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return e&&N?D.createElement(tu.Provider,{value:{location:Yo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:hr.Pop}},N):N}function FA(){let t=GA(),e=DA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,s)}const UA=D.createElement(FA,null);class BA extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(wi.Provider,{value:this.props.routeContext},D.createElement(Mw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zA(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(up);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(wi.Provider,{value:e},r)}function $A(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||Be(!1),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=f),p.route.id){let{loaderData:g,errors:v}=n,C=p.route.loader&&g[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||C){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,p,g)=>{let v,C=!1,N=null,k=null;n&&(v=l&&p.route.id?l[p.route.id]:void 0,N=p.route.errorElement||UA,c&&(u<0&&g===0?(QA("route-fallback",!1),C=!0,k=null):u===g&&(C=!0,k=p.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,g+1)),E=()=>{let R;return v?R=N:C?R=k:p.route.Component?R=D.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=f,D.createElement(zA,{match:p,routeContext:{outlet:f,matches:T,isDataRoute:n!=null},children:R})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?D.createElement(BA,{location:n.location,revalidation:n.revalidation,component:N,error:v,children:E(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):E()},null)}var Bw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Bw||{}),pc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(pc||{});function qA(t){let e=D.useContext(up);return e||Be(!1),e}function WA(t){let e=D.useContext(jA);return e||Be(!1),e}function HA(t){let e=D.useContext(wi);return e||Be(!1),e}function zw(t){let e=HA(),n=e.matches[e.matches.length-1];return n.route.id||Be(!1),n.route.id}function GA(){var t;let e=D.useContext(Mw),n=WA(pc.UseRouteError),r=zw(pc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function KA(){let{router:t}=qA(Bw.UseNavigateStable),e=zw(pc.UseNavigateStable),n=D.useRef(!1);return Fw(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Yo({fromRouteId:e},s)))},[t,e])}const Dy={};function QA(t,e,n){!e&&!Dy[t]&&(Dy[t]=!0)}const Oy={};function YA(t,e){Oy[e]||(Oy[e]=!0,console.warn(e))}const Di=(t,e,n)=>YA(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function XA(t,e){t!=null&&t.v7_startTransition||Di("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&(!e||!e.v7_relativeSplatPath)&&Di("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),e&&(e.v7_fetcherPersist||Di("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),e.v7_normalizeFormMethod||Di("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),e.v7_partialHydration||Di("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),e.v7_skipActionErrorRevalidation||Di("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}function Wt(t){Be(!1)}function JA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=hr.Pop,navigator:s,static:o=!1,future:l}=t;nu()&&Be(!1);let c=e.replace(/^\/*/,"/"),u=D.useMemo(()=>({basename:c,navigator:s,static:o,future:Yo({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof r=="string"&&(r=Ss(r));let{pathname:f="/",search:p="",hash:g="",state:v=null,key:C="default"}=r,N=D.useMemo(()=>{let k=Lw(f,c);return k==null?null:{location:{pathname:k,search:p,hash:g,state:v,key:C},navigationType:i}},[c,f,p,g,v,C,i]);return N==null?null:D.createElement(eu.Provider,{value:u},D.createElement(tu.Provider,{children:n,value:N}))}function ZA(t){let{children:e,location:n}=t;return VA(Fh(e),n)}new Promise(()=>{});function Fh(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,Fh(r.props.children,s));return}r.type!==Wt&&Be(!1),!r.props.index||!r.props.children||Be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Fh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const eR="6";try{window.__reactRouterVersion=eR}catch{}const tR="startTransition",jy=YT[tR];function nR(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=lA({window:i,v5Compat:!0}));let o=s.current,[l,c]=D.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=D.useCallback(p=>{u&&jy?jy(()=>c(p)):c(p)},[c,u]);return D.useLayoutEffect(()=>o.listen(f),[o,f]),D.useEffect(()=>XA(r),[r]),D.createElement(JA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var Ly;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ly||(Ly={}));var Vy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Vy||(Vy={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(g=64)),r.push(n[f],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($w(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||p==null)throw new iR;const g=s<<2|l>>4;if(r.push(g),u!==64){const v=l<<4&240|u>>2;if(r.push(v),p!==64){const C=u<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sR=function(t){const e=$w(t);return qw.encodeByteArray(e,!0)},mc=function(t){return sR(t).replace(/\./g,"")},Ww=function(t){try{return qw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=()=>oR().__FIREBASE_DEFAULTS__,lR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ww(t[1]);return e&&JSON.parse(e)},iu=()=>{try{return aR()||lR()||cR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hw=t=>{var e,n;return(n=(e=iu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gw=t=>{const e=Hw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kw=()=>{var t;return(t=iu())===null||t===void 0?void 0:t.config},Qw=t=>{var e;return(e=iu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[mc(JSON.stringify(n)),mc(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function hR(){var t;const e=(t=iu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mR(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gR(){return!hR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jw(){try{return typeof indexedDB=="object"}catch{return!1}}function Zw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function yR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR="FirebaseError";class Zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vR,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_R(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Zt(i,l,r)}}function _R(t,e){return t.replace(wR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wR=/\{\$([^}]+)}/g;function ER(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(My(s)&&My(o)){if(!Xo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function My(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function co(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xR(t,e){const n=new IR(t,e);return n.subscribe.bind(n)}class IR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Nd),i.error===void 0&&(i.error=Nd),i.complete===void 0&&(i.complete=Nd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=1e3,AR=2,RR=4*60*60*1e3,CR=.5;function Fy(t,e=SR,n=AR){const r=e*Math.pow(n,t),i=Math.round(CR*r*(Math.random()-.5)*2);return Math.min(RR,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t){return t&&t._delegate?t._delegate:t}class Jt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NR(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kR(t){return t===Yr?void 0:t}function NR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const DR={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},OR=ie.INFO,jR={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},LR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=jR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class su{constructor(e){this.name=e,this._logLevel=OR,this._logHandler=LR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const VR=(t,e)=>e.some(n=>t instanceof n);let Uy,By;function MR(){return Uy||(Uy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FR(){return By||(By=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eE=new WeakMap,Uh=new WeakMap,tE=new WeakMap,bd=new WeakMap,dp=new WeakMap;function UR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&eE.set(n,t)}).catch(()=>{}),dp.set(e,t),e}function BR(t){if(Uh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Uh.set(t,e)}let Bh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zR(t){Bh=t(Bh)}function $R(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dd(this),e,...n);return tE.set(r,e.sort?e.sort():[e]),Tr(r)}:FR().includes(t)?function(...e){return t.apply(Dd(this),e),Tr(eE.get(this))}:function(...e){return Tr(t.apply(Dd(this),e))}}function qR(t){return typeof t=="function"?$R(t):(t instanceof IDBTransaction&&BR(t),VR(t,MR())?new Proxy(t,Bh):t)}function Tr(t){if(t instanceof IDBRequest)return UR(t);if(bd.has(t))return bd.get(t);const e=qR(t);return e!==t&&(bd.set(t,e),dp.set(e,t)),e}const Dd=t=>dp.get(t);function nE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Tr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Tr(o.result),c.oldVersion,c.newVersion,Tr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const WR=["get","getKey","getAll","getAllKeys","count"],HR=["put","add","delete","clear"],Od=new Map;function zy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Od.get(e))return Od.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=HR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||WR.includes(n)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return Od.set(e,s),s}zR(t=>({...t,get:(e,n,r)=>zy(e,n)||t.get(e,n,r),has:(e,n)=>!!zy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zh="@firebase/app",$y="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new su("@firebase/app"),QR="@firebase/app-compat",YR="@firebase/analytics-compat",XR="@firebase/analytics",JR="@firebase/app-check-compat",ZR="@firebase/app-check",eC="@firebase/auth",tC="@firebase/auth-compat",nC="@firebase/database",rC="@firebase/data-connect",iC="@firebase/database-compat",sC="@firebase/functions",oC="@firebase/functions-compat",aC="@firebase/installations",lC="@firebase/installations-compat",cC="@firebase/messaging",uC="@firebase/messaging-compat",dC="@firebase/performance",hC="@firebase/performance-compat",fC="@firebase/remote-config",pC="@firebase/remote-config-compat",mC="@firebase/storage",gC="@firebase/storage-compat",yC="@firebase/firestore",vC="@firebase/vertexai",_C="@firebase/firestore-compat",wC="firebase",EC="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="[DEFAULT]",xC={[zh]:"fire-core",[QR]:"fire-core-compat",[XR]:"fire-analytics",[YR]:"fire-analytics-compat",[ZR]:"fire-app-check",[JR]:"fire-app-check-compat",[eC]:"fire-auth",[tC]:"fire-auth-compat",[nC]:"fire-rtdb",[rC]:"fire-data-connect",[iC]:"fire-rtdb-compat",[sC]:"fire-fn",[oC]:"fire-fn-compat",[aC]:"fire-iid",[lC]:"fire-iid-compat",[cC]:"fire-fcm",[uC]:"fire-fcm-compat",[dC]:"fire-perf",[hC]:"fire-perf-compat",[fC]:"fire-rc",[pC]:"fire-rc-compat",[mC]:"fire-gcs",[gC]:"fire-gcs-compat",[yC]:"fire-fst",[_C]:"fire-fst-compat",[vC]:"fire-vertex","fire-js":"fire-js",[wC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Map,IC=new Map,qh=new Map;function qy(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dn(t){const e=t.name;if(qh.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;qh.set(e,t);for(const n of Jo.values())qy(n,t);for(const n of IC.values())qy(n,t);return!0}function Vr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function an(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new Ei("app","Firebase",TC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=EC;function rE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$h,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Sr.create("bad-app-name",{appName:String(i)});if(n||(n=Kw()),!n)throw Sr.create("no-options");const s=Jo.get(i);if(s){if(Xo(n,s.options)&&Xo(r,s.config))return s;throw Sr.create("duplicate-app",{appName:i})}const o=new bR(i);for(const c of qh.values())o.addComponent(c);const l=new SC(n,r,o);return Jo.set(i,l),l}function ga(t=$h){const e=Jo.get(t);if(!e&&t===$h&&Kw())return rE();if(!e)throw Sr.create("no-app",{appName:t});return e}function AC(){return Array.from(Jo.values())}function bt(t,e,n){var r;let i=(r=xC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(l.join(" "));return}dn(new Jt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="firebase-heartbeat-database",CC=1,Zo="firebase-heartbeat-store";let jd=null;function iE(){return jd||(jd=nE(RC,CC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),jd}async function PC(t){try{const n=(await iE()).transaction(Zo),r=await n.objectStore(Zo).get(sE(t));return await n.done,r}catch(e){if(e instanceof Zt)Bn.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function Wy(t,e){try{const r=(await iE()).transaction(Zo,"readwrite");await r.objectStore(Zo).put(e,sE(t)),await r.done}catch(n){if(n instanceof Zt)Bn.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function sE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=1024,NC=30*24*60*60*1e3;class bC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=NC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hy(),{heartbeatsToSend:r,unsentEntries:i}=DC(this._heartbeatsCache.heartbeats),s=mc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Bn.warn(n),""}}}function Hy(){return new Date().toISOString().substring(0,10)}function DC(t,e=kC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class OC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jw()?Zw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gy(t){return mc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t){dn(new Jt("platform-logger",e=>new GR(e),"PRIVATE")),dn(new Jt("heartbeat",e=>new bC(e),"PRIVATE")),bt(zh,$y,t),bt(zh,$y,"esm2017"),bt("fire-js","")}jC("");var LC="firebase",VC="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(LC,VC,"app");var Ky=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var si,oE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,w){function _(){}_.prototype=w.prototype,I.D=w.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(x,P,A){for(var S=Array(arguments.length-2),te=2;te<arguments.length;te++)S[te-2]=arguments[te];return w.prototype[P].apply(x,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,w,_){_||(_=0);var x=Array(16);if(typeof w=="string")for(var P=0;16>P;++P)x[P]=w.charCodeAt(_++)|w.charCodeAt(_++)<<8|w.charCodeAt(_++)<<16|w.charCodeAt(_++)<<24;else for(P=0;16>P;++P)x[P]=w[_++]|w[_++]<<8|w[_++]<<16|w[_++]<<24;w=I.g[0],_=I.g[1],P=I.g[2];var A=I.g[3],S=w+(A^_&(P^A))+x[0]+3614090360&4294967295;w=_+(S<<7&4294967295|S>>>25),S=A+(P^w&(_^P))+x[1]+3905402710&4294967295,A=w+(S<<12&4294967295|S>>>20),S=P+(_^A&(w^_))+x[2]+606105819&4294967295,P=A+(S<<17&4294967295|S>>>15),S=_+(w^P&(A^w))+x[3]+3250441966&4294967295,_=P+(S<<22&4294967295|S>>>10),S=w+(A^_&(P^A))+x[4]+4118548399&4294967295,w=_+(S<<7&4294967295|S>>>25),S=A+(P^w&(_^P))+x[5]+1200080426&4294967295,A=w+(S<<12&4294967295|S>>>20),S=P+(_^A&(w^_))+x[6]+2821735955&4294967295,P=A+(S<<17&4294967295|S>>>15),S=_+(w^P&(A^w))+x[7]+4249261313&4294967295,_=P+(S<<22&4294967295|S>>>10),S=w+(A^_&(P^A))+x[8]+1770035416&4294967295,w=_+(S<<7&4294967295|S>>>25),S=A+(P^w&(_^P))+x[9]+2336552879&4294967295,A=w+(S<<12&4294967295|S>>>20),S=P+(_^A&(w^_))+x[10]+4294925233&4294967295,P=A+(S<<17&4294967295|S>>>15),S=_+(w^P&(A^w))+x[11]+2304563134&4294967295,_=P+(S<<22&4294967295|S>>>10),S=w+(A^_&(P^A))+x[12]+1804603682&4294967295,w=_+(S<<7&4294967295|S>>>25),S=A+(P^w&(_^P))+x[13]+4254626195&4294967295,A=w+(S<<12&4294967295|S>>>20),S=P+(_^A&(w^_))+x[14]+2792965006&4294967295,P=A+(S<<17&4294967295|S>>>15),S=_+(w^P&(A^w))+x[15]+1236535329&4294967295,_=P+(S<<22&4294967295|S>>>10),S=w+(P^A&(_^P))+x[1]+4129170786&4294967295,w=_+(S<<5&4294967295|S>>>27),S=A+(_^P&(w^_))+x[6]+3225465664&4294967295,A=w+(S<<9&4294967295|S>>>23),S=P+(w^_&(A^w))+x[11]+643717713&4294967295,P=A+(S<<14&4294967295|S>>>18),S=_+(A^w&(P^A))+x[0]+3921069994&4294967295,_=P+(S<<20&4294967295|S>>>12),S=w+(P^A&(_^P))+x[5]+3593408605&4294967295,w=_+(S<<5&4294967295|S>>>27),S=A+(_^P&(w^_))+x[10]+38016083&4294967295,A=w+(S<<9&4294967295|S>>>23),S=P+(w^_&(A^w))+x[15]+3634488961&4294967295,P=A+(S<<14&4294967295|S>>>18),S=_+(A^w&(P^A))+x[4]+3889429448&4294967295,_=P+(S<<20&4294967295|S>>>12),S=w+(P^A&(_^P))+x[9]+568446438&4294967295,w=_+(S<<5&4294967295|S>>>27),S=A+(_^P&(w^_))+x[14]+3275163606&4294967295,A=w+(S<<9&4294967295|S>>>23),S=P+(w^_&(A^w))+x[3]+4107603335&4294967295,P=A+(S<<14&4294967295|S>>>18),S=_+(A^w&(P^A))+x[8]+1163531501&4294967295,_=P+(S<<20&4294967295|S>>>12),S=w+(P^A&(_^P))+x[13]+2850285829&4294967295,w=_+(S<<5&4294967295|S>>>27),S=A+(_^P&(w^_))+x[2]+4243563512&4294967295,A=w+(S<<9&4294967295|S>>>23),S=P+(w^_&(A^w))+x[7]+1735328473&4294967295,P=A+(S<<14&4294967295|S>>>18),S=_+(A^w&(P^A))+x[12]+2368359562&4294967295,_=P+(S<<20&4294967295|S>>>12),S=w+(_^P^A)+x[5]+4294588738&4294967295,w=_+(S<<4&4294967295|S>>>28),S=A+(w^_^P)+x[8]+2272392833&4294967295,A=w+(S<<11&4294967295|S>>>21),S=P+(A^w^_)+x[11]+1839030562&4294967295,P=A+(S<<16&4294967295|S>>>16),S=_+(P^A^w)+x[14]+4259657740&4294967295,_=P+(S<<23&4294967295|S>>>9),S=w+(_^P^A)+x[1]+2763975236&4294967295,w=_+(S<<4&4294967295|S>>>28),S=A+(w^_^P)+x[4]+1272893353&4294967295,A=w+(S<<11&4294967295|S>>>21),S=P+(A^w^_)+x[7]+4139469664&4294967295,P=A+(S<<16&4294967295|S>>>16),S=_+(P^A^w)+x[10]+3200236656&4294967295,_=P+(S<<23&4294967295|S>>>9),S=w+(_^P^A)+x[13]+681279174&4294967295,w=_+(S<<4&4294967295|S>>>28),S=A+(w^_^P)+x[0]+3936430074&4294967295,A=w+(S<<11&4294967295|S>>>21),S=P+(A^w^_)+x[3]+3572445317&4294967295,P=A+(S<<16&4294967295|S>>>16),S=_+(P^A^w)+x[6]+76029189&4294967295,_=P+(S<<23&4294967295|S>>>9),S=w+(_^P^A)+x[9]+3654602809&4294967295,w=_+(S<<4&4294967295|S>>>28),S=A+(w^_^P)+x[12]+3873151461&4294967295,A=w+(S<<11&4294967295|S>>>21),S=P+(A^w^_)+x[15]+530742520&4294967295,P=A+(S<<16&4294967295|S>>>16),S=_+(P^A^w)+x[2]+3299628645&4294967295,_=P+(S<<23&4294967295|S>>>9),S=w+(P^(_|~A))+x[0]+4096336452&4294967295,w=_+(S<<6&4294967295|S>>>26),S=A+(_^(w|~P))+x[7]+1126891415&4294967295,A=w+(S<<10&4294967295|S>>>22),S=P+(w^(A|~_))+x[14]+2878612391&4294967295,P=A+(S<<15&4294967295|S>>>17),S=_+(A^(P|~w))+x[5]+4237533241&4294967295,_=P+(S<<21&4294967295|S>>>11),S=w+(P^(_|~A))+x[12]+1700485571&4294967295,w=_+(S<<6&4294967295|S>>>26),S=A+(_^(w|~P))+x[3]+2399980690&4294967295,A=w+(S<<10&4294967295|S>>>22),S=P+(w^(A|~_))+x[10]+4293915773&4294967295,P=A+(S<<15&4294967295|S>>>17),S=_+(A^(P|~w))+x[1]+2240044497&4294967295,_=P+(S<<21&4294967295|S>>>11),S=w+(P^(_|~A))+x[8]+1873313359&4294967295,w=_+(S<<6&4294967295|S>>>26),S=A+(_^(w|~P))+x[15]+4264355552&4294967295,A=w+(S<<10&4294967295|S>>>22),S=P+(w^(A|~_))+x[6]+2734768916&4294967295,P=A+(S<<15&4294967295|S>>>17),S=_+(A^(P|~w))+x[13]+1309151649&4294967295,_=P+(S<<21&4294967295|S>>>11),S=w+(P^(_|~A))+x[4]+4149444226&4294967295,w=_+(S<<6&4294967295|S>>>26),S=A+(_^(w|~P))+x[11]+3174756917&4294967295,A=w+(S<<10&4294967295|S>>>22),S=P+(w^(A|~_))+x[2]+718787259&4294967295,P=A+(S<<15&4294967295|S>>>17),S=_+(A^(P|~w))+x[9]+3951481745&4294967295,I.g[0]=I.g[0]+w&4294967295,I.g[1]=I.g[1]+(P+(S<<21&4294967295|S>>>11))&4294967295,I.g[2]=I.g[2]+P&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.u=function(I,w){w===void 0&&(w=I.length);for(var _=w-this.blockSize,x=this.B,P=this.h,A=0;A<w;){if(P==0)for(;A<=_;)i(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<w;)if(x[P++]=I.charCodeAt(A++),P==this.blockSize){i(this,x),P=0;break}}else for(;A<w;)if(x[P++]=I[A++],P==this.blockSize){i(this,x),P=0;break}}this.h=P,this.o+=w},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var w=1;w<I.length-8;++w)I[w]=0;var _=8*this.o;for(w=I.length-8;w<I.length;++w)I[w]=_&255,_/=256;for(this.u(I),I=Array(16),w=_=0;4>w;++w)for(var x=0;32>x;x+=8)I[_++]=this.g[w]>>>x&255;return I};function s(I,w){var _=l;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=w(I)}function o(I,w){this.h=w;for(var _=[],x=!0,P=I.length-1;0<=P;P--){var A=I[P]|0;x&&A==w||(_[P]=A,x=!1)}this.g=_}var l={};function c(I){return-128<=I&&128>I?s(I,function(w){return new o([w|0],0>w?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return k(u(-I));for(var w=[],_=1,x=0;I>=_;x++)w[x]=I/_|0,_*=4294967296;return new o(w,0)}function f(I,w){if(I.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(I.charAt(0)=="-")return k(f(I.substring(1),w));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(w,8)),x=p,P=0;P<I.length;P+=8){var A=Math.min(8,I.length-P),S=parseInt(I.substring(P,P+A),w);8>A?(A=u(Math.pow(w,A)),x=x.j(A).add(u(S))):(x=x.j(_),x=x.add(u(S)))}return x}var p=c(0),g=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(N(this))return-k(this).m();for(var I=0,w=1,_=0;_<this.g.length;_++){var x=this.i(_);I+=(0<=x?x:4294967296+x)*w,w*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(N(this))return"-"+k(this).toString(I);for(var w=u(Math.pow(I,6)),_=this,x="";;){var P=O(_,w).g;_=T(_,P.j(w));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=P,C(_))return A+x;for(;6>A.length;)A="0"+A;x=A+x}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var w=0;w<I.g.length;w++)if(I.g[w]!=0)return!1;return!0}function N(I){return I.h==-1}t.l=function(I){return I=T(this,I),N(I)?-1:C(I)?0:1};function k(I){for(var w=I.g.length,_=[],x=0;x<w;x++)_[x]=~I.g[x];return new o(_,~I.h).add(g)}t.abs=function(){return N(this)?k(this):this},t.add=function(I){for(var w=Math.max(this.g.length,I.g.length),_=[],x=0,P=0;P<=w;P++){var A=x+(this.i(P)&65535)+(I.i(P)&65535),S=(A>>>16)+(this.i(P)>>>16)+(I.i(P)>>>16);x=S>>>16,A&=65535,S&=65535,_[P]=S<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function T(I,w){return I.add(k(w))}t.j=function(I){if(C(this)||C(I))return p;if(N(this))return N(I)?k(this).j(k(I)):k(k(this).j(I));if(N(I))return k(this.j(k(I)));if(0>this.l(v)&&0>I.l(v))return u(this.m()*I.m());for(var w=this.g.length+I.g.length,_=[],x=0;x<2*w;x++)_[x]=0;for(x=0;x<this.g.length;x++)for(var P=0;P<I.g.length;P++){var A=this.i(x)>>>16,S=this.i(x)&65535,te=I.i(P)>>>16,ne=I.i(P)&65535;_[2*x+2*P]+=S*ne,E(_,2*x+2*P),_[2*x+2*P+1]+=A*ne,E(_,2*x+2*P+1),_[2*x+2*P+1]+=S*te,E(_,2*x+2*P+1),_[2*x+2*P+2]+=A*te,E(_,2*x+2*P+2)}for(x=0;x<w;x++)_[x]=_[2*x+1]<<16|_[2*x];for(x=w;x<2*w;x++)_[x]=0;return new o(_,0)};function E(I,w){for(;(I[w]&65535)!=I[w];)I[w+1]+=I[w]>>>16,I[w]&=65535,w++}function R(I,w){this.g=I,this.h=w}function O(I,w){if(C(w))throw Error("division by zero");if(C(I))return new R(p,p);if(N(I))return w=O(k(I),w),new R(k(w.g),k(w.h));if(N(w))return w=O(I,k(w)),new R(k(w.g),w.h);if(30<I.g.length){if(N(I)||N(w))throw Error("slowDivide_ only works with positive integers.");for(var _=g,x=w;0>=x.l(I);)_=F(_),x=F(x);var P=V(_,1),A=V(x,1);for(x=V(x,2),_=V(_,2);!C(x);){var S=A.add(x);0>=S.l(I)&&(P=P.add(_),A=S),x=V(x,1),_=V(_,1)}return w=T(I,P.j(w)),new R(P,w)}for(P=p;0<=I.l(w);){for(_=Math.max(1,Math.floor(I.m()/w.m())),x=Math.ceil(Math.log(_)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),A=u(_),S=A.j(w);N(S)||0<S.l(I);)_-=x,A=u(_),S=A.j(w);C(A)&&(A=g),P=P.add(A),I=T(I,S)}return new R(P,I)}t.A=function(I){return O(this,I).h},t.and=function(I){for(var w=Math.max(this.g.length,I.g.length),_=[],x=0;x<w;x++)_[x]=this.i(x)&I.i(x);return new o(_,this.h&I.h)},t.or=function(I){for(var w=Math.max(this.g.length,I.g.length),_=[],x=0;x<w;x++)_[x]=this.i(x)|I.i(x);return new o(_,this.h|I.h)},t.xor=function(I){for(var w=Math.max(this.g.length,I.g.length),_=[],x=0;x<w;x++)_[x]=this.i(x)^I.i(x);return new o(_,this.h^I.h)};function F(I){for(var w=I.g.length+1,_=[],x=0;x<w;x++)_[x]=I.i(x)<<1|I.i(x-1)>>>31;return new o(_,I.h)}function V(I,w){var _=w>>5;w%=32;for(var x=I.g.length-_,P=[],A=0;A<x;A++)P[A]=0<w?I.i(A+_)>>>w|I.i(A+_+1)<<32-w:I.i(A+_);return new o(P,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,oE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,si=o}).apply(typeof Ky<"u"?Ky:typeof self<"u"?self:typeof window<"u"?window:{});var dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aE,uo,lE,Dl,Wh,cE,uE,dE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,m){return a==Array.prototype||a==Object.prototype||(a[h]=m.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof dl=="object"&&dl];for(var h=0;h<a.length;++h){var m=a[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var m=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var b=a[y];if(!(b in m))break e;m=m[b]}a=a[a.length-1],y=m[a],h=h(y),h!=y&&h!=null&&e(m,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var m=0,y=!1,b={next:function(){if(!y&&m<a.length){var j=m++;return{value:h(j,a[j]),done:!1}}return y=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,m){return a.call.apply(a.bind,arguments)}function p(a,h,m){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,y),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function g(a,h,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function v(a,h){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function C(a,h){function m(){}m.prototype=h.prototype,a.aa=h.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(y,b,j){for(var z=Array(arguments.length-2),me=2;me<arguments.length;me++)z[me-2]=arguments[me];return h.prototype[b].apply(y,z)}}function N(a){const h=a.length;if(0<h){const m=Array(h);for(let y=0;y<h;y++)m[y]=a[y];return m}return[]}function k(a,h){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(c(y)){const b=a.length||0,j=y.length||0;a.length=b+j;for(let z=0;z<j;z++)a[b+z]=y[z]}else a.push(y)}}class T{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function E(a){return/^[\s\xa0]*$/.test(a)}function R(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var F=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function V(a,h,m){for(const y in a)h.call(m,a[y],y,a)}function I(a,h){for(const m in a)h.call(void 0,a[m],m,a)}function w(a){const h={};for(const m in a)h[m]=a[m];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(a,h){let m,y;for(let b=1;b<arguments.length;b++){y=arguments[b];for(m in y)a[m]=y[m];for(let j=0;j<_.length;j++)m=_[j],Object.prototype.hasOwnProperty.call(y,m)&&(a[m]=y[m])}}function P(a){var h=1;a=a.split(":");const m=[];for(;0<h&&a.length;)m.push(a.shift()),h--;return a.length&&m.push(a.join(":")),m}function A(a){l.setTimeout(()=>{throw a},0)}function S(){var a=B;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class te{constructor(){this.h=this.g=null}add(h,m){const y=ne.get();y.set(h,m),this.h?this.h.next=y:this.g=y,this.h=y}}var ne=new T(()=>new le,a=>a.reset());class le{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let St,$=!1,B=new te,q=()=>{const a=l.Promise.resolve(void 0);St=()=>{a.then(Y)}};var Y=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(m){A(m)}var h=ne;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function Z(){this.s=this.s,this.C=this.C}Z.prototype.s=!1,Z.prototype.ma=function(){this.s||(this.s=!0,this.N())},Z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var ye=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,h),l.removeEventListener("test",m,h)}catch{}return a}();function Me(a,h){if(oe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(F){e:{try{O(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else m=="mouseover"?h=a.fromElement:m=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:en[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Me.aa.h.call(this)}}C(Me,oe);var en={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),Kn=0;function bs(a,h,m,y,b){this.listener=a,this.proxy=null,this.src=h,this.type=m,this.capture=!!y,this.ha=b,this.key=++Kn,this.da=this.fa=!1}function ka(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Na(a){this.src=a,this.g={},this.h=0}Na.prototype.add=function(a,h,m,y,b){var j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);var z=ju(a,h,y,b);return-1<z?(h=a[z],m||(h.fa=!1)):(h=new bs(h,this.src,j,!!y,b),h.fa=m,a.push(h)),h};function Ou(a,h){var m=h.type;if(m in a.g){var y=a.g[m],b=Array.prototype.indexOf.call(y,h,void 0),j;(j=0<=b)&&Array.prototype.splice.call(y,b,1),j&&(ka(h),a.g[m].length==0&&(delete a.g[m],a.h--))}}function ju(a,h,m,y){for(var b=0;b<a.length;++b){var j=a[b];if(!j.da&&j.listener==h&&j.capture==!!m&&j.ha==y)return b}return-1}var Lu="closure_lm_"+(1e6*Math.random()|0),Vu={};function _m(a,h,m,y,b){if(y&&y.once)return Em(a,h,m,y,b);if(Array.isArray(h)){for(var j=0;j<h.length;j++)_m(a,h[j],m,y,b);return null}return m=Bu(m),a&&a[Oe]?a.K(h,m,u(y)?!!y.capture:!!y,b):wm(a,h,m,!1,y,b)}function wm(a,h,m,y,b,j){if(!h)throw Error("Invalid event type");var z=u(b)?!!b.capture:!!b,me=Fu(a);if(me||(a[Lu]=me=new Na(a)),m=me.add(h,m,y,z,j),m.proxy)return m;if(y=oT(),m.proxy=y,y.src=a,y.listener=m,a.addEventListener)ye||(b=z),b===void 0&&(b=!1),a.addEventListener(h.toString(),y,b);else if(a.attachEvent)a.attachEvent(Im(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function oT(){function a(m){return h.call(a.src,a.listener,m)}const h=aT;return a}function Em(a,h,m,y,b){if(Array.isArray(h)){for(var j=0;j<h.length;j++)Em(a,h[j],m,y,b);return null}return m=Bu(m),a&&a[Oe]?a.L(h,m,u(y)?!!y.capture:!!y,b):wm(a,h,m,!0,y,b)}function xm(a,h,m,y,b){if(Array.isArray(h))for(var j=0;j<h.length;j++)xm(a,h[j],m,y,b);else y=u(y)?!!y.capture:!!y,m=Bu(m),a&&a[Oe]?(a=a.i,h=String(h).toString(),h in a.g&&(j=a.g[h],m=ju(j,m,y,b),-1<m&&(ka(j[m]),Array.prototype.splice.call(j,m,1),j.length==0&&(delete a.g[h],a.h--)))):a&&(a=Fu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ju(h,m,y,b)),(m=-1<a?h[a]:null)&&Mu(m))}function Mu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Oe])Ou(h.i,a);else{var m=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(m,y,a.capture):h.detachEvent?h.detachEvent(Im(m),y):h.addListener&&h.removeListener&&h.removeListener(y),(m=Fu(h))?(Ou(m,a),m.h==0&&(m.src=null,h[Lu]=null)):ka(a)}}}function Im(a){return a in Vu?Vu[a]:Vu[a]="on"+a}function aT(a,h){if(a.da)a=!0;else{h=new Me(h,this);var m=a.listener,y=a.ha||a.src;a.fa&&Mu(a),a=m.call(y,h)}return a}function Fu(a){return a=a[Lu],a instanceof Na?a:null}var Uu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bu(a){return typeof a=="function"?a:(a[Uu]||(a[Uu]=function(h){return a.handleEvent(h)}),a[Uu])}function it(){Z.call(this),this.i=new Na(this),this.M=this,this.F=null}C(it,Z),it.prototype[Oe]=!0,it.prototype.removeEventListener=function(a,h,m,y){xm(this,a,h,m,y)};function mt(a,h){var m,y=a.F;if(y)for(m=[];y;y=y.F)m.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new oe(h,a);else if(h instanceof oe)h.target=h.target||a;else{var b=h;h=new oe(y,a),x(h,b)}if(b=!0,m)for(var j=m.length-1;0<=j;j--){var z=h.g=m[j];b=ba(z,y,!0,h)&&b}if(z=h.g=a,b=ba(z,y,!0,h)&&b,b=ba(z,y,!1,h)&&b,m)for(j=0;j<m.length;j++)z=h.g=m[j],b=ba(z,y,!1,h)&&b}it.prototype.N=function(){if(it.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var m=a.g[h],y=0;y<m.length;y++)ka(m[y]);delete a.g[h],a.h--}}this.F=null},it.prototype.K=function(a,h,m,y){return this.i.add(String(a),h,!1,m,y)},it.prototype.L=function(a,h,m,y){return this.i.add(String(a),h,!0,m,y)};function ba(a,h,m,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,j=0;j<h.length;++j){var z=h[j];if(z&&!z.da&&z.capture==m){var me=z.listener,Ge=z.ha||z.src;z.fa&&Ou(a.i,z),b=me.call(Ge,y)!==!1&&b}}return b&&!y.defaultPrevented}function Tm(a,h,m){if(typeof a=="function")m&&(a=g(a,m));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Sm(a){a.g=Tm(()=>{a.g=null,a.i&&(a.i=!1,Sm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class lT extends Z{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Sm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ds(a){Z.call(this),this.h=a,this.g={}}C(Ds,Z);var Am=[];function Rm(a){V(a.g,function(h,m){this.g.hasOwnProperty(m)&&Mu(h)},a),a.g={}}Ds.prototype.N=function(){Ds.aa.N.call(this),Rm(this)},Ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zu=l.JSON.stringify,cT=l.JSON.parse,uT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function $u(){}$u.prototype.h=null;function Cm(a){return a.h||(a.h=a.i())}function Pm(){}var Os={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qu(){oe.call(this,"d")}C(qu,oe);function Wu(){oe.call(this,"c")}C(Wu,oe);var qr={},km=null;function Da(){return km=km||new it}qr.La="serverreachability";function Nm(a){oe.call(this,qr.La,a)}C(Nm,oe);function js(a){const h=Da();mt(h,new Nm(h))}qr.STAT_EVENT="statevent";function bm(a,h){oe.call(this,qr.STAT_EVENT,a),this.stat=h}C(bm,oe);function gt(a){const h=Da();mt(h,new bm(h,a))}qr.Ma="timingevent";function Dm(a,h){oe.call(this,qr.Ma,a),this.size=h}C(Dm,oe);function Ls(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Vs(){this.g=!0}Vs.prototype.xa=function(){this.g=!1};function dT(a,h,m,y,b,j){a.info(function(){if(a.g)if(j)for(var z="",me=j.split("&"),Ge=0;Ge<me.length;Ge++){var he=me[Ge].split("=");if(1<he.length){var st=he[0];he=he[1];var ot=st.split("_");z=2<=ot.length&&ot[1]=="type"?z+(st+"="+he+"&"):z+(st+"=redacted&")}}else z=null;else z=j;return"XMLHTTP REQ ("+y+") [attempt "+b+"]: "+h+`
`+m+`
`+z})}function hT(a,h,m,y,b,j,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+b+"]: "+h+`
`+m+`
`+j+" "+z})}function Ci(a,h,m,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+pT(a,m)+(y?" "+y:"")})}function fT(a,h){a.info(function(){return"TIMEOUT: "+h})}Vs.prototype.info=function(){};function pT(a,h){if(!a.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var y=m[a];if(!(2>y.length)){var b=y[1];if(Array.isArray(b)&&!(1>b.length)){var j=b[0];if(j!="noop"&&j!="stop"&&j!="close")for(var z=1;z<b.length;z++)b[z]=""}}}}return zu(m)}catch{return h}}var Oa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Om={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hu;function ja(){}C(ja,$u),ja.prototype.g=function(){return new XMLHttpRequest},ja.prototype.i=function(){return{}},Hu=new ja;function Qn(a,h,m,y){this.j=a,this.i=h,this.l=m,this.R=y||1,this.U=new Ds(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jm}function jm(){this.i=null,this.g="",this.h=!1}var Lm={},Gu={};function Ku(a,h,m){a.L=1,a.v=Fa(Rn(h)),a.m=m,a.P=!0,Vm(a,null)}function Vm(a,h){a.F=Date.now(),La(a),a.A=Rn(a.v);var m=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Xm(m.i,"t",y),a.C=0,m=a.j.J,a.h=new jm,a.g=mg(a.j,m?h:null,!a.m),0<a.O&&(a.M=new lT(g(a.Y,a,a.g),a.O)),h=a.U,m=a.g,y=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(Am[0]=b.toString()),b=Am);for(var j=0;j<b.length;j++){var z=_m(m,b[j],y||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),js(),dT(a.i,a.u,a.A,a.l,a.R,a.m)}Qn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Cn(a)==3?h.j():this.Y(a)},Qn.prototype.Y=function(a){try{if(a==this.g)e:{const ot=Cn(this.g);var h=this.g.Ba();const Ni=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||ig(this.g)))){this.J||ot!=4||h==7||(h==8||0>=Ni?js(3):js(2)),Qu(this);var m=this.g.Z();this.X=m;t:if(Mm(this)){var y=ig(this.g);a="";var b=y.length,j=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wr(this),Ms(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(j&&h==b-1)});y.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=m==200,hT(this.i,this.u,this.A,this.l,this.R,ot,m),this.o){if(this.T&&!this.K){t:{if(this.g){var me,Ge=this.g;if((me=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(me)){var he=me;break t}}he=null}if(m=he)Ci(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yu(this,m);else{this.o=!1,this.s=3,gt(12),Wr(this),Ms(this);break e}}if(this.P){m=!0;let tn;for(;!this.J&&this.C<z.length;)if(tn=mT(this,z),tn==Gu){ot==4&&(this.s=4,gt(14),m=!1),Ci(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Lm){this.s=4,gt(15),Ci(this.i,this.l,z,"[Invalid Chunk]"),m=!1;break}else Ci(this.i,this.l,tn,null),Yu(this,tn);if(Mm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||z.length!=0||this.h.h||(this.s=1,gt(16),m=!1),this.o=this.o&&m,!m)Ci(this.i,this.l,z,"[Invalid Chunked Response]"),Wr(this),Ms(this);else if(0<z.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),nd(st),st.M=!0,gt(11))}}else Ci(this.i,this.l,z,null),Yu(this,z);ot==4&&Wr(this),this.o&&!this.J&&(ot==4?dg(this.j,this):(this.o=!1,La(this)))}else bT(this.g),m==400&&0<z.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),Wr(this),Ms(this)}}}catch{}finally{}};function Mm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function mT(a,h){var m=a.C,y=h.indexOf(`
`,m);return y==-1?Gu:(m=Number(h.substring(m,y)),isNaN(m)?Lm:(y+=1,y+m>h.length?Gu:(h=h.slice(y,y+m),a.C=y+m,h)))}Qn.prototype.cancel=function(){this.J=!0,Wr(this)};function La(a){a.S=Date.now()+a.I,Fm(a,a.I)}function Fm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ls(g(a.ba,a),h)}function Qu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(fT(this.i,this.A),this.L!=2&&(js(),gt(17)),Wr(this),this.s=2,Ms(this)):Fm(this,this.S-a)};function Ms(a){a.j.G==0||a.J||dg(a.j,a)}function Wr(a){Qu(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Rm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Yu(a,h){try{var m=a.j;if(m.G!=0&&(m.g==a||Xu(m.h,a))){if(!a.K&&Xu(m.h,a)&&m.G==3){try{var y=m.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var b=y;if(b[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)Wa(m),$a(m);else break e;td(m),gt(18)}}else m.za=b[1],0<m.za-m.T&&37500>b[2]&&m.F&&m.v==0&&!m.C&&(m.C=Ls(g(m.Za,m),6e3));if(1>=zm(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Gr(m,11)}else if((a.K||m.g==a)&&Wa(m),!E(h))for(b=m.Da.g.parse(h),h=0;h<b.length;h++){let he=b[h];if(m.T=he[0],he=he[1],m.G==2)if(he[0]=="c"){m.K=he[1],m.ia=he[2];const st=he[3];st!=null&&(m.la=st,m.j.info("VER="+m.la));const ot=he[4];ot!=null&&(m.Aa=ot,m.j.info("SVER="+m.Aa));const Ni=he[5];Ni!=null&&typeof Ni=="number"&&0<Ni&&(y=1.5*Ni,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const tn=a.g;if(tn){const Ga=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ga){var j=y.h;j.g||Ga.indexOf("spdy")==-1&&Ga.indexOf("quic")==-1&&Ga.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Ju(j,j.h),j.h=null))}if(y.D){const rd=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;rd&&(y.ya=rd,_e(y.I,y.D,rd))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var z=a;if(y.qa=pg(y,y.J?y.ia:null,y.W),z.K){$m(y.h,z);var me=z,Ge=y.L;Ge&&(me.I=Ge),me.B&&(Qu(me),La(me)),y.g=z}else cg(y);0<m.i.length&&qa(m)}else he[0]!="stop"&&he[0]!="close"||Gr(m,7);else m.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?Gr(m,7):ed(m):he[0]!="noop"&&m.l&&m.l.ta(he),m.v=0)}}js(4)}catch{}}var gT=class{constructor(a,h){this.g=a,this.map=h}};function Um(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function zm(a){return a.h?1:a.g?a.g.size:0}function Xu(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ju(a,h){a.g?a.g.add(h):a.h=h}function $m(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Um.prototype.cancel=function(){if(this.i=qm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const m of a.g.values())h=h.concat(m.D);return h}return N(a.i)}function yT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],m=a.length,y=0;y<m;y++)h.push(a[y]);return h}h=[],m=0;for(y in a)h[m++]=a[y];return h}function vT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var m=0;m<a;m++)h.push(m);return h}h=[],m=0;for(const y in a)h[m++]=y;return h}}}function Wm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var m=vT(a),y=yT(a),b=y.length,j=0;j<b;j++)h.call(void 0,y[j],m&&m[j],a)}var Hm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _T(a,h){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var y=a[m].indexOf("="),b=null;if(0<=y){var j=a[m].substring(0,y);b=a[m].substring(y+1)}else j=a[m];h(j,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Hr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Hr){this.h=a.h,Va(this,a.j),this.o=a.o,this.g=a.g,Ma(this,a.s),this.l=a.l;var h=a.i,m=new Bs;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),Gm(this,m),this.m=a.m}else a&&(h=String(a).match(Hm))?(this.h=!1,Va(this,h[1]||"",!0),this.o=Fs(h[2]||""),this.g=Fs(h[3]||"",!0),Ma(this,h[4]),this.l=Fs(h[5]||"",!0),Gm(this,h[6]||"",!0),this.m=Fs(h[7]||"")):(this.h=!1,this.i=new Bs(null,this.h))}Hr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Us(h,Km,!0),":");var m=this.g;return(m||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Us(h,Km,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(Us(m,m.charAt(0)=="/"?xT:ET,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",Us(m,TT)),a.join("")};function Rn(a){return new Hr(a)}function Va(a,h,m){a.j=m?Fs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ma(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Gm(a,h,m){h instanceof Bs?(a.i=h,ST(a.i,a.h)):(m||(h=Us(h,IT)),a.i=new Bs(h,a.h))}function _e(a,h,m){a.i.set(h,m)}function Fa(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Fs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Us(a,h,m){return typeof a=="string"?(a=encodeURI(a).replace(h,wT),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function wT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Km=/[#\/\?@]/g,ET=/[#\?:]/g,xT=/[#\?]/g,IT=/[#\?@]/g,TT=/#/g;function Bs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Yn(a){a.g||(a.g=new Map,a.h=0,a.i&&_T(a.i,function(h,m){a.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=Bs.prototype,t.add=function(a,h){Yn(this),this.i=null,a=Pi(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(h),this.h+=1,this};function Qm(a,h){Yn(a),h=Pi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ym(a,h){return Yn(a),h=Pi(a,h),a.g.has(h)}t.forEach=function(a,h){Yn(this),this.g.forEach(function(m,y){m.forEach(function(b){a.call(h,b,y,this)},this)},this)},t.na=function(){Yn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let y=0;y<h.length;y++){const b=a[y];for(let j=0;j<b.length;j++)m.push(h[y])}return m},t.V=function(a){Yn(this);let h=[];if(typeof a=="string")Ym(this,a)&&(h=h.concat(this.g.get(Pi(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)h=h.concat(a[m])}return h},t.set=function(a,h){return Yn(this),this.i=null,a=Pi(this,a),Ym(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Xm(a,h,m){Qm(a,h),0<m.length&&(a.i=null,a.g.set(Pi(a,h),N(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var y=h[m];const j=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var b=j;z[y]!==""&&(b+="="+encodeURIComponent(String(z[y]))),a.push(b)}}return this.i=a.join("&")};function Pi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function ST(a,h){h&&!a.j&&(Yn(a),a.i=null,a.g.forEach(function(m,y){var b=y.toLowerCase();y!=b&&(Qm(this,y),Xm(this,b,m))},a)),a.j=h}function AT(a,h){const m=new Vs;if(l.Image){const y=new Image;y.onload=v(Xn,m,"TestLoadImage: loaded",!0,h,y),y.onerror=v(Xn,m,"TestLoadImage: error",!1,h,y),y.onabort=v(Xn,m,"TestLoadImage: abort",!1,h,y),y.ontimeout=v(Xn,m,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function RT(a,h){const m=new Vs,y=new AbortController,b=setTimeout(()=>{y.abort(),Xn(m,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(j=>{clearTimeout(b),j.ok?Xn(m,"TestPingServer: ok",!0,h):Xn(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Xn(m,"TestPingServer: error",!1,h)})}function Xn(a,h,m,y,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),y(m)}catch{}}function CT(){this.g=new uT}function PT(a,h,m){const y=m||"";try{Wm(a,function(b,j){let z=b;u(b)&&(z=zu(b)),h.push(y+j+"="+encodeURIComponent(z))})}catch(b){throw h.push(y+"type="+encodeURIComponent("_badmap")),b}}function Ua(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Ua,$u),Ua.prototype.g=function(){return new Ba(this.l,this.j)},Ua.prototype.i=function(a){return function(){return a}}({});function Ba(a,h){it.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ba,it),t=Ba.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,$s(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,$s(this)),this.g&&(this.readyState=3,$s(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?zs(this):$s(this),this.readyState==3&&Jm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,zs(this))},t.Qa=function(a){this.g&&(this.response=a,zs(this))},t.ga=function(){this.g&&zs(this)};function zs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,$s(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=h.next();return a.join(`\r
`)};function $s(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Zm(a){let h="";return V(a,function(m,y){h+=y,h+=":",h+=m,h+=`\r
`}),h}function Zu(a,h,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Zm(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):_e(a,h,m))}function Ce(a){it.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ce,it);var kT=/^https?$/i,NT=["POST","PUT"];t=Ce.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hu.g(),this.v=this.o?Cm(this.o):Cm(Hu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(j){eg(this,j);return}if(a=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var b in y)m.set(b,y[b]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const j of y.keys())m.set(j,y.get(j));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(j=>j.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(NT,h,void 0))||y||b||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,z]of m)this.g.setRequestHeader(j,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{rg(this),this.u=!0,this.g.send(a),this.u=!1}catch(j){eg(this,j)}};function eg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,tg(a),za(a)}function tg(a){a.A||(a.A=!0,mt(a,"complete"),mt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,mt(this,"complete"),mt(this,"abort"),za(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),za(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ng(this):this.bb())},t.bb=function(){ng(this)};function ng(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Cn(a)!=4||a.Z()!=2)){if(a.u&&Cn(a)==4)Tm(a.Ea,0,a);else if(mt(a,"readystatechange"),Cn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var y;if(y=z===0){var b=String(a.D).match(Hm)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),y=!kT.test(b?b.toLowerCase():"")}m=y}if(m)mt(a,"complete"),mt(a,"success");else{a.m=6;try{var j=2<Cn(a)?a.g.statusText:""}catch{j=""}a.l=j+" ["+a.Z()+"]",tg(a)}}finally{za(a)}}}}function za(a,h){if(a.g){rg(a);const m=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||mt(a,"ready");try{m.onreadystatechange=y}catch{}}}function rg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Cn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),cT(h)}};function ig(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function bT(a){const h={};a=(a.g&&2<=Cn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(E(a[y]))continue;var m=P(a[y]);const b=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const j=h[b]||[];h[b]=j,j.push(m)}I(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qs(a,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||h}function sg(a){this.Aa=0,this.i=[],this.j=new Vs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qs("baseRetryDelayMs",5e3,a),this.cb=qs("retryDelaySeedMs",1e4,a),this.Wa=qs("forwardChannelMaxRetries",2,a),this.wa=qs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Um(a&&a.concurrentRequestLimit),this.Da=new CT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=sg.prototype,t.la=8,t.G=1,t.connect=function(a,h,m,y){gt(0),this.W=a,this.H=h||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=pg(this,null,this.W),qa(this)};function ed(a){if(og(a),a.G==3){var h=a.U++,m=Rn(a.I);if(_e(m,"SID",a.K),_e(m,"RID",h),_e(m,"TYPE","terminate"),Ws(a,m),h=new Qn(a,a.j,h),h.L=2,h.v=Fa(Rn(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=h.v,m=!0),m||(h.g=mg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),La(h)}fg(a)}function $a(a){a.g&&(nd(a),a.g.cancel(),a.g=null)}function og(a){$a(a),a.u&&(l.clearTimeout(a.u),a.u=null),Wa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function qa(a){if(!Bm(a.h)&&!a.s){a.s=!0;var h=a.Ga;St||q(),$||(St(),$=!0),B.add(h,a),a.B=0}}function DT(a,h){return zm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ls(g(a.Ga,a,h),hg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Qn(this,this.j,a);let j=this.o;if(this.S&&(j?(j=w(j),x(j,this.S)):j=this.S),this.m!==null||this.O||(b.H=j,j=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=lg(this,b,h),m=Rn(this.I),_e(m,"RID",a),_e(m,"CVER",22),this.D&&_e(m,"X-HTTP-Session-Id",this.D),Ws(this,m),j&&(this.O?h="headers="+encodeURIComponent(String(Zm(j)))+"&"+h:this.m&&Zu(m,this.m,j)),Ju(this.h,b),this.Ua&&_e(m,"TYPE","init"),this.P?(_e(m,"$req",h),_e(m,"SID","null"),b.T=!0,Ku(b,m,null)):Ku(b,m,h),this.G=2}}else this.G==3&&(a?ag(this,a):this.i.length==0||Bm(this.h)||ag(this))};function ag(a,h){var m;h?m=h.l:m=a.U++;const y=Rn(a.I);_e(y,"SID",a.K),_e(y,"RID",m),_e(y,"AID",a.T),Ws(a,y),a.m&&a.o&&Zu(y,a.m,a.o),m=new Qn(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),h&&(a.i=h.D.concat(a.i)),h=lg(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ju(a.h,m),Ku(m,y,h)}function Ws(a,h){a.H&&V(a.H,function(m,y){_e(h,y,m)}),a.l&&Wm({},function(m,y){_e(h,y,m)})}function lg(a,h,m){m=Math.min(a.i.length,m);var y=a.l?g(a.l.Na,a.l,a):null;e:{var b=a.i;let j=-1;for(;;){const z=["count="+m];j==-1?0<m?(j=b[0].g,z.push("ofs="+j)):j=0:z.push("ofs="+j);let me=!0;for(let Ge=0;Ge<m;Ge++){let he=b[Ge].g;const st=b[Ge].map;if(he-=j,0>he)j=Math.max(0,b[Ge].g-100),me=!1;else try{PT(st,z,"req"+he+"_")}catch{y&&y(st)}}if(me){y=z.join("&");break e}}}return a=a.i.splice(0,m),h.D=a,y}function cg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;St||q(),$||(St(),$=!0),B.add(h,a),a.v=0}}function td(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ls(g(a.Fa,a),hg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ug(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ls(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),$a(this),ug(this))};function nd(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ug(a){a.g=new Qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Rn(a.qa);_e(h,"RID","rpc"),_e(h,"SID",a.K),_e(h,"AID",a.T),_e(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(h,"TO",a.ja),_e(h,"TYPE","xmlhttp"),Ws(a,h),a.m&&a.o&&Zu(h,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=Fa(Rn(h)),m.m=null,m.P=!0,Vm(m,a)}t.Za=function(){this.C!=null&&(this.C=null,$a(this),td(this),gt(19))};function Wa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function dg(a,h){var m=null;if(a.g==h){Wa(a),nd(a),a.g=null;var y=2}else if(Xu(a.h,h))m=h.D,$m(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;y=Da(),mt(y,new Dm(y,m)),qa(a)}else cg(a);else if(b=h.s,b==3||b==0&&0<h.X||!(y==1&&DT(a,h)||y==2&&td(a)))switch(m&&0<m.length&&(h=a.h,h.i=h.i.concat(m)),b){case 1:Gr(a,5);break;case 4:Gr(a,10);break;case 3:Gr(a,6);break;default:Gr(a,2)}}}function hg(a,h){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*h}function Gr(a,h){if(a.j.info("Error code "+h),h==2){var m=g(a.fb,a),y=a.Xa;const b=!y;y=new Hr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Va(y,"https"),Fa(y),b?AT(y.toString(),m):RT(y.toString(),m)}else gt(2);a.G=0,a.l&&a.l.sa(h),fg(a),og(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function fg(a){if(a.G=0,a.ka=[],a.l){const h=qm(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ka,h),k(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function pg(a,h,m){var y=m instanceof Hr?Rn(m):new Hr(m);if(y.g!="")h&&(y.g=h+"."+y.g),Ma(y,y.s);else{var b=l.location;y=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var j=new Hr(null);y&&Va(j,y),h&&(j.g=h),b&&Ma(j,b),m&&(j.l=m),y=j}return m=a.D,h=a.ya,m&&h&&_e(y,m,h),_e(y,"VER",a.la),Ws(a,y),y}function mg(a,h,m){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ce(new Ua({eb:m})):new Ce(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function gg(){}t=gg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ha(){}Ha.prototype.g=function(a,h){return new Ot(a,h)};function Ot(a,h){it.call(this),this.g=new sg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!E(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ki(this)}C(Ot,it),Ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){ed(this.g)},Ot.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=zu(a),a=m);h.i.push(new gT(h.Ya++,a)),h.G==3&&qa(h)},Ot.prototype.N=function(){this.g.l=null,delete this.j,ed(this.g),delete this.g,Ot.aa.N.call(this)};function yg(a){qu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const m in h){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(yg,qu);function vg(){Wu.call(this),this.status=1}C(vg,Wu);function ki(a){this.g=a}C(ki,gg),ki.prototype.ua=function(){mt(this.g,"a")},ki.prototype.ta=function(a){mt(this.g,new yg(a))},ki.prototype.sa=function(a){mt(this.g,new vg)},ki.prototype.ra=function(){mt(this.g,"b")},Ha.prototype.createWebChannel=Ha.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,dE=function(){return new Ha},uE=function(){return Da()},cE=qr,Wh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oa.NO_ERROR=0,Oa.TIMEOUT=8,Oa.HTTP_ERROR=6,Dl=Oa,Om.COMPLETE="complete",lE=Om,Pm.EventType=Os,Os.OPEN="a",Os.CLOSE="b",Os.ERROR="c",Os.MESSAGE="d",it.prototype.listen=it.prototype.K,uo=Pm,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,aE=Ce}).apply(typeof dl<"u"?dl:typeof self<"u"?self:typeof window<"u"?window:{});const Qy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new su("@firebase/firestore");function Oi(){return hi.logLevel}function H(t,...e){if(hi.logLevel<=ie.DEBUG){const n=e.map(hp);hi.debug(`Firestore (${As}): ${t}`,...n)}}function zn(t,...e){if(hi.logLevel<=ie.ERROR){const n=e.map(hp);hi.error(`Firestore (${As}): ${t}`,...n)}}function gs(t,...e){if(hi.logLevel<=ie.WARN){const n=e.map(hp);hi.warn(`Firestore (${As}): ${t}`,...n)}}function hp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: `+t;throw zn(e),new Error(e)}function ue(t,e){t||Q()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class FC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class UC{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new wn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new hE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new ut(e)}}class BC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class zC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new BC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $C{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ue(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.R=n.token,new $C(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=WC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function ys(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new xe(0,0))}static max(){return new X(new xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ea.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ea?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends ea{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const HC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends ea{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return HC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ge.fromString(e))}static fromName(e){return new K(ge.fromString(e).popFirst(5))}static empty(){return new K(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ge(e.slice()))}}function GC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new Pr(i,K.empty(),e)}function KC(t){return new Pr(t.readTime,t.key,-1)}class Pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pr(X.min(),K.empty(),-1)}static max(){return new Pr(X.max(),K.empty(),-1)}}function QC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==YC)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function JC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Cs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ou.oe=-1;function ya(t){return t==null}function gc(t){return t===0&&1/t==-1/0}function ZC(t){return typeof t=="number"&&Number.isInteger(t)&&!gc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Yy(e)),e=tP(t.get(n),e);return Yy(e)}function tP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Yy(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hl(this.root,e,this.comparator,!1)}getReverseIterator(){return new hl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hl(this.root,e,this.comparator,!0)}}class hl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=i??Ye.EMPTY,this.right=s??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jy(this.data.getIterator())}getIteratorFrom(e){return new Jy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class Jy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new ze(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ys(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new mE("Invalid base64 string: "+s):s}}(e);return new rt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const nP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(ue(!!t),typeof t=="string"){let e=0;const n=nP.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nr(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function au(t){const e=t.mapValue.fields.__previous_value__;return fp(e)?au(e):e}function ta(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,n,r,i,s,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class na{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new na("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof na&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fp(t)?4:sP(t)?9007199254740991:iP(t)?10:11:Q()}function Sn(t,e){if(t===e)return!0;const n=br(t);if(n!==br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ta(t).isEqual(ta(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=kr(i.timestampValue),l=kr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Nr(i.bytesValue).isEqual(Nr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),l=be(s.doubleValue);return o===l?gc(o)===gc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ys(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Xy(o)!==Xy(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Sn(o[c],l[c])))return!1;return!0}(t,e);default:return Q()}}function ra(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function vs(t,e){if(t===e)return 0;const n=br(t),r=br(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=be(s.integerValue||s.doubleValue),c=be(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Zy(t.timestampValue,e.timestampValue);case 4:return Zy(ta(t),ta(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Nr(s),c=Nr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=ae(l[u],c[u]);if(f!==0)return f}return ae(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(be(s.latitude),be(o.latitude));return l!==0?l:ae(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ev(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,c,u,f;const p=s.fields||{},g=o.fields||{},v=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(c=g.value)===null||c===void 0?void 0:c.arrayValue,N=ae(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:ev(v,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===fl.mapValue&&o===fl.mapValue)return 0;if(s===fl.mapValue)return 1;if(o===fl.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=ae(c[p],f[p]);if(g!==0)return g;const v=vs(l[c[p]],u[f[p]]);if(v!==0)return v}return ae(c.length,f.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Zy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=kr(t),r=kr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function ev(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=vs(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function _s(t){return Hh(t)}function Hh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Nr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Hh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Hh(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function Ol(t){switch(br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=au(t);return e?16+Ol(e):16;case 5:return 2*t.stringValue.length;case 6:return Nr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ol(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Mr(r.fields,(s,o)=>{i+=s.length+Ol(o)}),i}(t.mapValue);default:throw Q()}}function tv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gh(t){return!!t&&"integerValue"in t}function pp(t){return!!t&&"arrayValue"in t}function nv(t){return!!t&&"nullValue"in t}function rv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jl(t){return!!t&&"mapValue"in t}function iP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Mr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Io(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!jl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Io(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Io(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());jl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];jl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Mr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _t(Io(this.value))}}function gE(t){const e=[];return Mr(t.fields,(n,r)=>{const i=new Xe([n]);if(jl(r)){const s=gE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new We(e,0,X.min(),X.min(),X.min(),_t.empty(),0)}static newFoundDocument(e,n,r,i){return new We(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new We(e,2,n,X.min(),X.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new We(e,3,n,X.min(),X.min(),_t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof We&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n){this.position=e,this.inclusive=n}}function iv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=vs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function sv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n="asc"){this.field=e,this.dir=n}}function oP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{}class Ve extends yE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new lP(e,n,r):n==="array-contains"?new dP(e,r):n==="in"?new hP(e,r):n==="not-in"?new fP(e,r):n==="array-contains-any"?new pP(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cP(e,r):new uP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vs(n,this.value)):n!==null&&br(this.value)===br(n)&&this.matchesComparison(vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends yE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new hn(e,n)}matches(e){return vE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vE(t){return t.op==="and"}function _E(t){return aP(t)&&vE(t)}function aP(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function Kh(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+_s(t.value);if(_E(t))return t.filters.map(e=>Kh(e)).join(",");{const e=t.filters.map(n=>Kh(n)).join(",");return`${t.op}(${e})`}}function wE(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&Sn(r.value,i.value)}(t,e):t instanceof hn?function(r,i){return i instanceof hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&wE(o,i.filters[l]),!0):!1}(t,e):void Q()}function EE(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${_s(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(EE).join(" ,")+"}"}(t):"Filter"}class lP extends Ve{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class cP extends Ve{constructor(e,n){super(e,"in",n),this.keys=xE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class uP extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=xE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class dP extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pp(n)&&ra(n.arrayValue,this.value)}}class hP extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ra(this.value.arrayValue,n)}}class fP extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ra(this.value.arrayValue,n)}}class pP extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ra(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function ov(t,e=null,n=[],r=[],i=null,s=null,o=null){return new mP(t,e,n,r,i,s,o)}function mp(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ya(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_s(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_s(r)).join(",")),e.ue=n}return e.ue}function gp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!oP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sv(t.startAt,e.startAt)&&sv(t.endAt,e.endAt)}function Qh(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function gP(t,e,n,r,i,s,o,l){return new Ps(t,e,n,r,i,s,o,l)}function lu(t){return new Ps(t)}function av(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function IE(t){return t.collectionGroup!==null}function To(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ze(Xe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ia(s,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new ia(Xe.keyField(),r))}return e.ce}function En(t){const e=ee(t);return e.le||(e.le=yP(e,To(t))),e.le}function yP(t,e){if(t.limitType==="F")return ov(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ia(i.field,s)});const n=t.endAt?new yc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new yc(t.startAt.position,t.startAt.inclusive):null;return ov(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yh(t,e){const n=t.filters.concat([e]);return new Ps(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xh(t,e,n){return new Ps(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cu(t,e){return gp(En(t),En(e))&&t.limitType===e.limitType}function TE(t){return`${mp(En(t))}|lt:${t.limitType}`}function ji(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>EE(i)).join(", ")}]`),ya(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>_s(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>_s(i)).join(",")),`Target(${r})`}(En(t))}; limitType=${t.limitType})`}function uu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of To(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,c){const u=iv(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,To(r),i)||r.endAt&&!function(o,l,c){const u=iv(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,To(r),i))}(t,e)}function vP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function SE(t){return(e,n)=>{let r=!1;for(const i of To(t)){const s=_P(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function _P(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const c=o.data.field(s),u=l.data.field(s);return c!==null&&u!==null?vs(c,u):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Mr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return pE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=new Re(K.comparator);function $n(){return wP}const AE=new Re(K.comparator);function ho(...t){let e=AE;for(const n of t)e=e.insert(n.key,n);return e}function RE(t){let e=AE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ei(){return So()}function CE(){return So()}function So(){return new Ii(t=>t.toString(),(t,e)=>t.isEqual(e))}const EP=new Re(K.comparator),xP=new ze(K.comparator);function se(...t){let e=xP;for(const n of t)e=e.add(n);return e}const IP=new ze(ae);function TP(){return IP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gc(e)?"-0":e}}function PE(t){return{integerValue:""+t}}function SP(t,e){return ZC(e)?PE(e):yp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this._=void 0}}function AP(t,e,n){return t instanceof vc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&fp(s)&&(s=au(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof sa?NE(t,e):t instanceof oa?bE(t,e):function(i,s){const o=kE(i,s),l=lv(o)+lv(i.Pe);return Gh(o)&&Gh(i.Pe)?PE(l):yp(i.serializer,l)}(t,e)}function RP(t,e,n){return t instanceof sa?NE(t,e):t instanceof oa?bE(t,e):n}function kE(t,e){return t instanceof _c?function(r){return Gh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class vc extends du{}class sa extends du{constructor(e){super(),this.elements=e}}function NE(t,e){const n=DE(e);for(const r of t.elements)n.some(i=>Sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class oa extends du{constructor(e){super(),this.elements=e}}function bE(t,e){let n=DE(e);for(const r of t.elements)n=n.filter(i=>!Sn(i,r));return{arrayValue:{values:n}}}class _c extends du{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function lv(t){return be(t.integerValue||t.doubleValue)}function DE(t){return pp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function CP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof sa&&i instanceof sa||r instanceof oa&&i instanceof oa?ys(r.elements,i.elements,Sn):r instanceof _c&&i instanceof _c?Sn(r.Pe,i.Pe):r instanceof vc&&i instanceof vc}(t.transform,e.transform)}class PP{constructor(e,n){this.version=e,this.transformResults=n}}class Je{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Je}static exists(e){return new Je(void 0,e)}static updateTime(e){return new Je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ll(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hu{}function OE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fu(t.key,Je.none()):new va(t.key,t.data,Je.none());{const n=t.data,r=_t.empty();let i=new ze(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Fr(t.key,r,new Vt(i.toArray()),Je.none())}}function kP(t,e,n){t instanceof va?function(i,s,o){const l=i.value.clone(),c=uv(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Fr?function(i,s,o){if(!Ll(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=uv(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(jE(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ao(t,e,n,r){return t instanceof va?function(s,o,l,c){if(!Ll(s.precondition,o))return l;const u=s.value.clone(),f=dv(s.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fr?function(s,o,l,c){if(!Ll(s.precondition,o))return l;const u=dv(s.fieldTransforms,c,o),f=o.data;return f.setAll(jE(s)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ll(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function NP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=kE(r.transform,i||null);s!=null&&(n===null&&(n=_t.empty()),n.set(r.field,s))}return n||null}function cv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ys(r,i,(s,o)=>CP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class va extends hu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fr extends hu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function jE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function uv(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,RP(o,l,n[i]))}return r}function dv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,AP(s,o,e))}return r}class fu extends hu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LE extends hu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&kP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=CE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const c=OE(o,l);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&ys(this.mutations,e.mutations,(n,r)=>cv(n,r))&&ys(this.baseMutations,e.baseMutations,(n,r)=>cv(n,r))}}class vp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=function(){return EP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new vp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,ce;function VE(t){switch(t){default:return Q();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function ME(t){if(t===void 0)return zn("GRPC error has no .code"),L.UNKNOWN;switch(t){case je.OK:return L.OK;case je.CANCELLED:return L.CANCELLED;case je.UNKNOWN:return L.UNKNOWN;case je.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case je.INTERNAL:return L.INTERNAL;case je.UNAVAILABLE:return L.UNAVAILABLE;case je.UNAUTHENTICATED:return L.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case je.NOT_FOUND:return L.NOT_FOUND;case je.ALREADY_EXISTS:return L.ALREADY_EXISTS;case je.PERMISSION_DENIED:return L.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case je.ABORTED:return L.ABORTED;case je.OUT_OF_RANGE:return L.OUT_OF_RANGE;case je.UNIMPLEMENTED:return L.UNIMPLEMENTED;case je.DATA_LOSS:return L.DATA_LOSS;default:return Q()}}(ce=je||(je={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=new si([4294967295,4294967295],0);function hv(t){const e=jP().encode(t),n=new oE;return n.update(e),new Uint8Array(n.digest())}function fv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new si([n,r],0),new si([i,s],0)]}class _p{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fo(`Invalid padding: ${n}`);if(r<0)throw new fo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fo(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=si.fromNumber(this.Te)}Ee(e,n,r){let i=e.add(n.multiply(si.fromNumber(r)));return i.compare(LP)===1&&(i=new si([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=hv(e),[r,i]=fv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new _p(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=hv(e),[r,i]=fv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,_a.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new pu(X.min(),i,new Re(ae),$n(),se())}}class _a{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _a(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class FE{constructor(e,n){this.targetId=e,this.me=n}}class UE{constructor(e,n,r=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class pv{constructor(){this.fe=0,this.ge=mv(),this.pe=rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new _a(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=mv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class VP{constructor(e){this.Le=e,this.Be=new Map,this.ke=$n(),this.qe=pl(),this.Qe=pl(),this.Ke=new Re(ae)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.me.count,i=this.Ye(n);if(i){const s=i.target;if(Qh(s))if(r===0){const o=new K(s.path);this.We(n,o,We.newNoDocument(o,X.min()))}else ue(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Nr(r).toUint8Array()}catch(c){if(c instanceof mE)return gs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new _p(o,i,s)}catch(c){return gs(c instanceof fo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Ye(o);if(l){if(s.current&&Qh(l.target)){const c=new K(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,We.newNoDocument(c,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=se();this.Qe.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new pu(e,n,this.Ke,this.ke,r);return this.ke=$n(),this.qe=pl(),this.Qe=pl(),this.Ke=new Re(ae),i}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,n)?i.Fe(n,1):i.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new pv,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new ze(ae),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ze(ae),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new pv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function pl(){return new Re(K.comparator)}function mv(){return new Re(K.comparator)}const MP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),FP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),UP=(()=>({and:"AND",or:"OR"}))();class BP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jh(t,e){return t.useProto3Json||ya(e)?e:{value:e}}function wc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function zP(t,e){return wc(t,e.toTimestamp())}function Ut(t){return ue(!!t),X.fromTimestamp(function(n){const r=kr(n);return new xe(r.seconds,r.nanos)}(t))}function wp(t,e){return Zh(t,e).canonicalString()}function Zh(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function zE(t){const e=ge.fromString(t);return ue(KE(e)),e}function Ec(t,e){return wp(t.databaseId,e.path)}function Ro(t,e){const n=zE(e);if(n.get(1)!==t.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(qE(n))}function $E(t,e){return wp(t.databaseId,e)}function $P(t){const e=zE(t);return e.length===4?ge.emptyPath():qE(e)}function ef(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qE(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function gv(t,e,n){return{name:Ec(t,e),fields:n.value.mapValue.fields}}function qP(t,e){return"found"in e?function(r,i){ue(!!i.found),i.found.name,i.found.updateTime;const s=Ro(r,i.found.name),o=Ut(i.found.updateTime),l=i.found.createTime?Ut(i.found.createTime):X.min(),c=new _t({mapValue:{fields:i.found.fields}});return We.newFoundDocument(s,o,l,c)}(t,e):"missing"in e?function(r,i){ue(!!i.missing),ue(!!i.readTime);const s=Ro(r,i.missing),o=Ut(i.readTime);return We.newNoDocument(s,o)}(t,e):Q()}function WP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,f){return u.useProto3Json?(ue(f===void 0||typeof f=="string"),rt.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array),rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?L.UNKNOWN:ME(u.code);return new W(f,u.message||"")}(o);n=new UE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ro(t,r.document.name),s=Ut(r.document.updateTime),o=r.document.createTime?Ut(r.document.createTime):X.min(),l=new _t({mapValue:{fields:r.document.fields}}),c=We.newFoundDocument(i,s,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Vl(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ro(t,r.document),s=r.readTime?Ut(r.readTime):X.min(),o=We.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Vl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ro(t,r.document),s=r.removedTargetIds||[];n=new Vl([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new OP(i,s),l=r.targetId;n=new FE(l,o)}}return n}function WE(t,e){let n;if(e instanceof va)n={update:gv(t,e.key,e.value)};else if(e instanceof fu)n={delete:Ec(t,e.key)};else if(e instanceof Fr)n={update:gv(t,e.key,e.data),updateMask:ek(e.fieldMask)};else{if(!(e instanceof LE))return Q();n={verify:Ec(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof vc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof sa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof oa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _c)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:zP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function HP(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ut(i.updateTime):Ut(s);return o.isEqual(X.min())&&(o=Ut(s)),new PP(o,i.transformResults||[])}(n,e))):[]}function GP(t,e){return{documents:[$E(t,e.path)]}}function KP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$E(t,i);const s=function(u){if(u.length!==0)return GE(hn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:Li(g.field),direction:XP(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Jh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:i}}function QP(t){let e=$P(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=HE(p);return g instanceof hn&&_E(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new ia(Vi(C.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,ya(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,v=p.values||[];return new yc(v,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,v=p.values||[];return new yc(v,g)}(n.endAt)),gP(e,i,o,s,l,"F",c,u)}function YP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function HE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Vi(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Vi(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Vi(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Vi(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Vi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>HE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function XP(t){return MP[t]}function JP(t){return FP[t]}function ZP(t){return UP[t]}function Li(t){return{fieldPath:t.canonicalString()}}function Vi(t){return Xe.fromServerFormat(t.fieldPath)}function GE(t){return t instanceof Ve?function(n){if(n.op==="=="){if(rv(n.value))return{unaryFilter:{field:Li(n.field),op:"IS_NAN"}};if(nv(n.value))return{unaryFilter:{field:Li(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rv(n.value))return{unaryFilter:{field:Li(n.field),op:"IS_NOT_NAN"}};if(nv(n.value))return{unaryFilter:{field:Li(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Li(n.field),op:JP(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(i=>GE(i));return r.length===1?r[0]:{compositeFilter:{op:ZP(n.op),filters:r}}}(t):Q()}function ek(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,r,i,s=X.min(),o=X.min(),l=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.ht=e}}function nk(t){const e=QP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this.ln=new ik}addToCollectionParentIndex(e,n){return this.ln.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Pr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class ik{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ze(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ze(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(41943040,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ws(0)}static Qn(){return new ws(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv([t,e],[n,r]){const i=ae(t,n);return i===0?ae(e,r):i}class sk{constructor(e){this.Gn=e,this.buffer=new ze(vv),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();vv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ok{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){H("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Cs(n)?H("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Rs(n)}await this.Yn(3e5)})}}class ak{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(ou.oe);const r=new sk(n);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(yv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yv):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,i,s,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Oi()<=ie.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function lk(t,e){return new ak(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(){this.changes=new Ii(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,We.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ao(r.mutation,i,Vt.empty(),xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=ei();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ho();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ei();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=$n();const o=So(),l=function(){return So()}();return n.forEach((c,u)=>{const f=r.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof Fr)?s=s.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ao(f.mutation,u,f.mutation.getFieldMask(),xe.now())):o.set(u.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return l.set(u,new uk(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=So();let i=new Re((o,l)=>o-l),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Vt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(i.get(l.batchId)||se()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=CE();f.forEach(g=>{if(!s.has(g)){const v=OE(n.get(g),r.get(g));v!==null&&p.set(g,v),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):IE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(ei());let l=-1,c=s;return o.next(u=>M.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,se())).next(f=>({batchId:l,changes:RE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=ho();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ho();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,c=>{const u=function(p,g){return new Ps(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,We.newInvalidDocument(f)))});let l=ho();return o.forEach((c,u)=>{const f=s.get(c);f!==void 0&&Ao(f.mutation,u,Vt.empty(),xe.now()),uu(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return M.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ut(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(i){return{name:i.name,query:nk(i.bundledQuery),readTime:Ut(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(){this.overlays=new Re(K.comparator),this.Er=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ei();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Tt(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=ei(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Re((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=s.get(u.largestBatchId);f===null&&(f=ei(),s=s.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=ei(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=i)););return M.resolve(l)}Tt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new DP(n,r));let s=this.Er.get(n);s===void 0&&(s=se(),this.Er.set(n,s)),this.Er.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(){this.dr=new ze($e.Ar),this.Rr=new ze($e.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new $e(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new K(new ge([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.Rr.forEachInRange([r,i],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new K(new ge([])),r=new $e(n,e),i=new $e(n,e+1);let s=se();return this.Rr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return K.comparator(e.key,n.key)||ae(e.br,n.br)}static Vr(e,n){return ae(e.br,n.br)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new ze($e.Ar)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.vr=this.vr.add(new $e(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Fr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],o=>{const l=this.Cr(o.br);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(ae);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],l=>{r=r.add(l.br)})}),M.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new $e(new K(s),0);let l=new ze(ae);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.br)),!0)},o),M.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return M.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new $e(n,0),i=this.vr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e){this.Nr=e,this.docs=function(){return new Re(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():We.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():We.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=$n();const o=n.path,l=new K(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||QC(KC(f),r)<=0||(i.has(f.key)||uu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Lr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new yk(this)}getSize(e){return M.resolve(this.size)}}class yk extends ck{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.persistence=e,this.Br=new Ii(n=>mp(n),gp),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.kr=0,this.qr=new Ep,this.targetCount=0,this.Qr=ws.qn()}forEachTarget(e,n){return this.Br.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),M.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new ws(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Un(n),M.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n){this.Kr={},this.overlays={},this.$r=new ou(0),this.Ur=!1,this.Ur=!0,this.Wr=new pk,this.referenceDelegate=e(this),this.Gr=new vk(this),this.indexManager=new rk,this.remoteDocumentCache=function(i){return new gk(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new tk(n),this.jr=new hk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new mk(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new _k(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,n){return M.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class _k extends XC{constructor(e){super(),this.currentSequenceNumber=e}}class xp{constructor(e){this.persistence=e,this.Zr=new Ep,this.Xr=null}static ei(e){return new xp(e)}get ti(){if(this.Xr)return this.Xr;throw Q()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),M.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.ti,r=>{const i=K.fromPath(r);return this.ni(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return M.or([()=>M.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class xc{constructor(e,n){this.persistence=e,this.ri=new Ii(r=>eP(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=lk(this,n)}static ei(e,n){return new xc(e,n)}Hr(){}Jr(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return M.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,s.removeEntry(o,X.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ol(e.data.value)),n}ir(e,n,r){return M.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ri.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=i}static zi(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ip(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return gR()?8:JC(pt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Xi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new wk;return this.ts(e,n,o).next(l=>{if(s.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>s.result)}ns(e,n,r,i){return r.documentReadCount<this.Ji?(Oi()<=ie.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),M.resolve()):(Oi()<=ie.DEBUG&&H("QueryEngine","Query:",ji(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(Oi()<=ie.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,En(n))):M.resolve())}Xi(e,n){if(av(n))return M.resolve(null);let r=En(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xh(n,null,"F"),r=En(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(n,l);return this.ss(n,u,o,c.readTime)?this.Xi(e,Xh(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,r,i){return av(n)||i.isEqual(X.min())?M.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const o=this.rs(n,s);return this.ss(n,o,r,i)?M.resolve(null):(Oi()<=ie.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ji(n)),this.os(e,o,n,GC(i,-1)).next(l=>l))})}rs(e,n){let r=new ze(SE(e));return n.forEach((i,s)=>{uu(e,s)&&(r=r.add(s))}),r}ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,n,r){return Oi()<=ie.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ji(n)),this.Zi.getDocumentsMatchingQuery(e,n,Pr.min(),r)}os(e,n,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n,r,i){this.persistence=e,this._s=n,this.serializer=i,this.us=new Re(ae),this.cs=new Ii(s=>mp(s),gp),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dk(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function Ik(t,e,n,r){return new xk(t,e,n,r)}async function YE(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let c=se();for(const u of i){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of s){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function Tk(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,g=p.keys();let v=M.resolve();return g.forEach(C=>{v=v.next(()=>f.getEntry(c,C)).next(N=>{const k=u.docVersions.get(C);ue(k!==null),N.version.compareTo(k)<0&&(p.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),f.addEntry(N)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=se();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function XE(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function Sk(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});i=n.us;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.Gr.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(s,f.addedDocuments,p)));let v=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(rt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),i=i.insert(p,v),function(N,k,T){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(g,v,f)&&l.push(n.Gr.updateTargetData(s,v))});let c=$n(),u=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Ak(s,o,e.documentUpdates).next(f=>{c=f.Is,u=f.Es})),!r.isEqual(X.min())){const f=n.Gr.getLastRemoteSnapshotVersion(s).next(p=>n.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.us=i,s))}function Ak(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=$n();return n.forEach((l,c)=>{const u=s.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:i}})}function Rk(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ck(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Gr.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Gr.allocateTargetId(r).next(o=>(i=new fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function tf(t,e,n){const r=ee(t),i=r.us.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Cs(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function _v(t,e,n){const r=ee(t);let i=X.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const p=ee(c),g=p.cs.get(f);return g!==void 0?M.resolve(p.us.get(g)):p.Gr.getTargetData(u,f)}(r,o,En(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:se())).next(l=>(Pk(r,vP(e),l),{documents:l,ds:s})))}function Pk(t,e,n){let r=t.ls.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ls.set(e,r)}class wv{constructor(){this.activeTargetIds=TP()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kk{constructor(){this._o=new wv,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new wv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml=null;function Ld(){return ml===null?ml=function(){return 268435456+Math.round(2147483648*Math.random())}():ml++,"0x"+ml.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection";class Ok extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(n,r,i,s,o){const l=Ld(),c=this.No(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,c,i);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,s,o),this.Bo(n,c,u,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw gs("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}ko(n,r,i,s,o,l){return this.Oo(n,r,i,s,o)}Lo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+As}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}No(n,r){const i=bk[n];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,i){const s=Ld();return new Promise((o,l)=>{const c=new aE;c.setWithCredentials(!0),c.listenOnce(lE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Dl.NO_ERROR:const f=c.getResponseJson();H(ct,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Dl.TIMEOUT:H(ct,`RPC '${e}' ${s} timed out`),l(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case Dl.HTTP_ERROR:const p=c.getStatus();if(H(ct,`RPC '${e}' ${s} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const C=function(k){const T=k.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(T)>=0?T:L.UNKNOWN}(v.status);l(new W(C,v.message))}else l(new W(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new W(L.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{H(ct,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);H(ct,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}qo(e,n,r){const i=Ld(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=dE(),l=uE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=s.join("");H(ct,`Creating RPC '${e}' stream ${i}: ${f}`,c);const p=o.createWebChannel(f,c);let g=!1,v=!1;const C=new Dk({Eo:k=>{v?H(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(g||(H(ct,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),H(ct,`RPC '${e}' stream ${i} sending:`,k),p.send(k))},Ao:()=>p.close()}),N=(k,T,E)=>{k.listen(T,R=>{try{E(R)}catch(O){setTimeout(()=>{throw O},0)}})};return N(p,uo.EventType.OPEN,()=>{v||(H(ct,`RPC '${e}' stream ${i} transport opened.`),C.So())}),N(p,uo.EventType.CLOSE,()=>{v||(v=!0,H(ct,`RPC '${e}' stream ${i} transport closed`),C.Do())}),N(p,uo.EventType.ERROR,k=>{v||(v=!0,gs(ct,`RPC '${e}' stream ${i} transport errored:`,k),C.Do(new W(L.UNAVAILABLE,"The operation could not be completed")))}),N(p,uo.EventType.MESSAGE,k=>{var T;if(!v){const E=k.data[0];ue(!!E);const R=E,O=(R==null?void 0:R.error)||((T=R[0])===null||T===void 0?void 0:T.error);if(O){H(ct,`RPC '${e}' stream ${i} received error:`,O);const F=O.status;let V=function(_){const x=je[_];if(x!==void 0)return ME(x)}(F),I=O.message;V===void 0&&(V=L.INTERNAL,I="Unknown error status: "+F+" with message "+O.message),v=!0,C.Do(new W(V,I)),p.close()}else H(ct,`RPC '${e}' stream ${i} received:`,E),C.vo(E)}}),N(l,cE.STAT_EVENT,k=>{k.stat===Wh.PROXY?H(ct,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Wh.NOPROXY&&H(ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.bo()},0),C}}function Vd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t){return new BP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,n,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n,r,i,s,o,l,c){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Tp(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===n&&this.I_(r,i)},r=>{e(()=>{const i=new W(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jk extends JE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=WP(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Ut(o.readTime):X.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=ef(this.serializer),n.addTarget=function(s,o){let l;const c=o.target;if(l=Qh(c)?{documents:GP(s,c)}:{query:KP(s,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=BE(s,o.resumeToken);const u=Jh(s,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=wc(s,o.snapshotVersion.toTimestamp());const u=Jh(s,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=YP(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=ef(this.serializer),n.removeTarget=e,this.c_(n)}}class Lk extends JE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=HP(e.writeResults,e.commitTime),r=Ut(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=ef(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>WE(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(e,Zh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(L.UNKNOWN,s.toString())})}ko(e,n,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,Zh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(L.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Mk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(zn(n),this.C_=!1):H("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Ti(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ee(c);u.k_.add(4),await wa(u),u.K_.set("Unknown"),u.k_.delete(4),await gu(u)}(this))})}),this.K_=new Mk(r,i)}}async function gu(t){if(Ti(t))for(const e of t.q_)await e(!0)}async function wa(t){for(const e of t.q_)await e(!1)}function ZE(t,e){const n=ee(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Cp(n)?Rp(n):ks(n).s_()&&Ap(n,e))}function Sp(t,e){const n=ee(t),r=ks(n);n.B_.delete(e),r.s_()&&ex(n,e),n.B_.size===0&&(r.s_()?r.a_():Ti(n)&&n.K_.set("Unknown"))}function Ap(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ks(t).V_(e)}function ex(t,e){t.U_.xe(e),ks(t).m_(e)}function Rp(t){t.U_=new VP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ks(t).start(),t.K_.F_()}function Cp(t){return Ti(t)&&!ks(t).i_()&&t.B_.size>0}function Ti(t){return ee(t).k_.size===0}function tx(t){t.U_=void 0}async function Uk(t){t.K_.set("Online")}async function Bk(t){t.B_.forEach((e,n)=>{Ap(t,e)})}async function zk(t,e){tx(t),Cp(t)?(t.K_.O_(e),Rp(t)):t.K_.set("Unknown")}async function $k(t,e,n){if(t.K_.set("Online"),e instanceof UE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.B_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.B_.delete(l),i.U_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ic(t,r)}else if(e instanceof Vl?t.U_.$e(e):e instanceof FE?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(X.min()))try{const r=await XE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.B_.get(u);f&&s.B_.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=s.B_.get(c);if(!f)return;s.B_.set(c,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),ex(s,c);const p=new fr(f.target,c,u,f.sequenceNumber);Ap(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Ic(t,r)}}async function Ic(t,e,n){if(!Cs(e))throw e;t.k_.add(1),await wa(t),t.K_.set("Offline"),n||(n=()=>XE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await gu(t)})}function nx(t,e){return e().catch(n=>Ic(t,n,e))}async function yu(t){const e=ee(t),n=Dr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;qk(e);)try{const i=await Rk(e.localStore,r);if(i===null){e.L_.length===0&&n.a_();break}r=i.batchId,Wk(e,i)}catch(i){await Ic(e,i)}rx(e)&&ix(e)}function qk(t){return Ti(t)&&t.L_.length<10}function Wk(t,e){t.L_.push(e);const n=Dr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function rx(t){return Ti(t)&&!Dr(t).i_()&&t.L_.length>0}function ix(t){Dr(t).start()}async function Hk(t){Dr(t).w_()}async function Gk(t){const e=Dr(t);for(const n of t.L_)e.g_(n.mutations)}async function Kk(t,e,n){const r=t.L_.shift(),i=vp.from(r,e,n);await nx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await yu(t)}async function Qk(t,e){e&&Dr(t).f_&&await async function(r,i){if(function(o){return VE(o)&&o!==L.ABORTED}(i.code)){const s=r.L_.shift();Dr(r).__(),await nx(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await yu(r)}}(t,e),rx(t)&&ix(t)}async function xv(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Ti(n);n.k_.add(3),await wa(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await gu(n)}async function Yk(t,e){const n=ee(t);e?(n.k_.delete(2),await gu(n)):e||(n.k_.add(2),await wa(n),n.K_.set("Unknown"))}function ks(t){return t.W_||(t.W_=function(n,r,i){const s=ee(n);return s.b_(),new jk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:Uk.bind(null,t),mo:Bk.bind(null,t),po:zk.bind(null,t),R_:$k.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Cp(t)?Rp(t):t.K_.set("Unknown")):(await t.W_.stop(),tx(t))})),t.W_}function Dr(t){return t.G_||(t.G_=function(n,r,i){const s=ee(n);return s.b_(),new Lk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:Hk.bind(null,t),po:Qk.bind(null,t),p_:Gk.bind(null,t),y_:Kk.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await yu(t)):(await t.G_.stop(),t.L_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Pp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kp(t,e){if(zn("AsyncQueue",`${e}: ${t}`),Cs(t))return new W(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{static emptySet(e){return new is(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=ho(),this.sortedSet=new Re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(){this.z_=new Re(K.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):Q():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Es{constructor(e,n,r,i,s,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Es(e,n,is.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Jk{constructor(){this.queries=Tv(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=Tv(),s.forEach((o,l)=>{for(const c of l.J_)c.onError(r)})})(this,new W(L.ABORTED,"Firestore shutting down"))}}function Tv(){return new Ii(t=>TE(t),cu)}async function Np(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new Xk,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await n.onListen(i,!0);break;case 1:s.H_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=kp(o,`Initialization of query '${ji(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.J_.push(e),e.ea(n.onlineState),s.H_&&e.ta(s.H_)&&Dp(n)}async function bp(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.J_.indexOf(e);o>=0&&(s.J_.splice(o,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Zk(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.J_)l.ta(i)&&(r=!0);o.H_=i}}r&&Dp(n)}function eN(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(n);r.queries.delete(e)}function Dp(t){t.X_.forEach(e=>{e.next()})}var nf,Sv;(Sv=nf||(nf={})).na="default",Sv.Cache="cache";class Op{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==nf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this.key=e}}class ox{constructor(e){this.key=e}}class tN{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=se(),this.mutatedKeys=se(),this.Va=SE(e),this.ma=new is(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new Iv,i=n?n.ma:this.ma;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),v=uu(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),N=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let k=!1;g&&v?g.data.isEqual(v.data)?C!==N&&(r.track({type:3,doc:v}),k=!0):this.ya(g,v)||(r.track({type:2,doc:v}),k=!0,(c&&this.Va(v,c)>0||u&&this.Va(v,u)<0)&&(l=!0)):!g&&v?(r.track({type:0,doc:v}),k=!0):g&&!v&&(r.track({type:1,doc:g}),k=!0,(c||u)&&(l=!0)),k&&(v?(o=o.add(v),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{ma:o,pa:r,ss:l,mutatedKeys:s}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((f,p)=>function(v,C){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return N(v)-N(C)}(f.type,p.type)||this.Va(f.doc,p.doc)),this.wa(r),i=i!=null&&i;const l=n&&!i?this.Sa():[],c=this.Ra.size===0&&this.current&&!i?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new Es(this.query,e.ma,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Iv,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=se(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new ox(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new sx(r))}),n}va(e){this.da=e.ds,this.Ra=se();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Es.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class nN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rN{constructor(e){this.key=e,this.Fa=!1}}class iN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Ii(l=>TE(l),cu),this.Oa=new Map,this.Na=new Set,this.La=new Re(K.comparator),this.Ba=new Map,this.ka=new Ep,this.qa={},this.Qa=new Map,this.Ka=ws.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function sN(t,e,n=!0){const r=hx(t);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await ax(r,e,n,!0),i}async function oN(t,e){const n=hx(t);await ax(n,e,!0,!1)}async function ax(t,e,n,r){const i=await Ck(t.localStore,En(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await aN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&ZE(t.remoteStore,i),l}async function aN(t,e,n,r,i){t.Ua=(p,g,v)=>async function(N,k,T,E){let R=k.view.ga(T);R.ss&&(R=await _v(N.localStore,k.query,!1).then(({documents:I})=>k.view.ga(I,R)));const O=E&&E.targetChanges.get(k.targetId),F=E&&E.targetMismatches.get(k.targetId)!=null,V=k.view.applyChanges(R,N.isPrimaryClient,O,F);return Rv(N,k.targetId,V.ba),V.snapshot}(t,p,g,v);const s=await _v(t.localStore,e,!0),o=new tN(e,s.ds),l=o.ga(s.documents),c=_a.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);Rv(t,n,u.ba);const f=new nN(e,n,o);return t.xa.set(e,f),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function lN(t,e,n){const r=ee(t),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(o=>!cu(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await tf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Sp(r.remoteStore,i.targetId),rf(r,i.targetId)}).catch(Rs)):(rf(r,i.targetId),await tf(r.localStore,i.targetId,!0))}async function cN(t,e){const n=ee(t),r=n.xa.get(e),i=n.Oa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sp(n.remoteStore,r.targetId))}async function uN(t,e,n){const r=yN(t);try{const i=await function(o,l){const c=ee(o),u=xe.now(),f=l.reduce((v,C)=>v.add(C.key),se());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let C=$n(),N=se();return c.hs.getEntries(v,f).next(k=>{C=k,C.forEach((T,E)=>{E.isValidDocument()||(N=N.add(T))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,C)).next(k=>{p=k;const T=[];for(const E of l){const R=NP(E,p.get(E.key).overlayedDocument);R!=null&&T.push(new Fr(E.key,R,gE(R.value.mapValue),Je.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,T,l)}).next(k=>{g=k;const T=k.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(v,k.batchId,T)})}).then(()=>({batchId:g.batchId,changes:RE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Re(ae)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Ea(r,i.changes),await yu(r.remoteStore)}catch(i){const s=kp(i,"Failed to persist write");n.reject(s)}}async function lx(t,e){const n=ee(t);try{const r=await Sk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ba.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Fa=!0:i.modifiedDocuments.size>0?ue(o.Fa):i.removedDocuments.size>0&&(ue(o.Fa),o.Fa=!1))}),await Ea(n,r,e)}catch(r){await Rs(r)}}function Av(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xa.forEach((s,o)=>{const l=o.view.ea(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=ee(o);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const g of p.J_)g.ea(l)&&(u=!0)}),u&&Dp(c)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dN(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ba.get(e),s=i&&i.key;if(s){let o=new Re(K.comparator);o=o.insert(s,We.newNoDocument(s,X.min()));const l=se().add(s),c=new pu(X.min(),new Map,new Re(ae),o,l);await lx(r,c),r.La=r.La.remove(s),r.Ba.delete(e),jp(r)}else await tf(r.localStore,e,!1).then(()=>rf(r,e,n)).catch(Rs)}async function hN(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await Tk(n.localStore,e);ux(n,r,null),cx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ea(n,i)}catch(i){await Rs(i)}}async function fN(t,e,n){const r=ee(t);try{const i=await function(o,l){const c=ee(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(ue(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);ux(r,e,n),cx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ea(r,i)}catch(i){await Rs(i)}}function cx(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function ux(t,e,n){const r=ee(t);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function rf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||dx(t,r)})}function dx(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Sp(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),jp(t))}function Rv(t,e,n){for(const r of n)r instanceof sx?(t.ka.addReference(r.key,e),pN(t,r)):r instanceof ox?(H("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||dx(t,r.key)):Q()}function pN(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Na.add(r),jp(t))}function jp(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new K(ge.fromString(e)),r=t.Ka.next();t.Ba.set(r,new rN(n)),t.La=t.La.insert(n,r),ZE(t.remoteStore,new fr(En(lu(n.path)),r,"TargetPurposeLimboResolution",ou.oe))}}async function Ea(t,e,n){const r=ee(t),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{o.push(r.Ua(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){i.push(u);const p=Ip.zi(c.targetId,u);s.push(p)}}))}),await Promise.all(o),r.Ma.R_(i),await async function(c,u){const f=ee(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(u,g=>M.forEach(g.Wi,v=>f.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>M.forEach(g.Gi,v=>f.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!Cs(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const v=f.us.get(g),C=v.snapshotVersion,N=v.withLastLimboFreeSnapshotVersion(C);f.us=f.us.insert(g,N)}}}(r.localStore,s))}async function mN(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await YE(n.localStore,e);n.currentUser=e,function(s,o){s.Qa.forEach(l=>{l.forEach(c=>{c.reject(new W(L.CANCELLED,o))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ea(n,r.Ts)}}function gN(t,e){const n=ee(t),r=n.Ba.get(e);if(r&&r.Fa)return se().add(r.key);{let i=se();const s=n.Oa.get(e);if(!s)return i;for(const o of s){const l=n.xa.get(o);i=i.unionWith(l.view.fa)}return i}}function hx(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dN.bind(null,e),e.Ma.R_=Zk.bind(null,e.eventManager),e.Ma.Wa=eN.bind(null,e.eventManager),e}function yN(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fN.bind(null,e),e}class Tc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=mu(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return Ik(this.persistence,new Ek,e.initialUser,this.serializer)}ja(e){return new QE(xp.ei,this.serializer)}za(e){return new kk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tc.provider={build:()=>new Tc};class vN extends Tc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){ue(this.persistence.referenceDelegate instanceof xc);const r=this.persistence.referenceDelegate.garbageCollector;return new ok(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new QE(r=>xc.ei(r,n),this.serializer)}}class sf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Av(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mN.bind(null,this.syncEngine),await Yk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Jk}()}createDatastore(e){const n=mu(e.databaseInfo.databaseId),r=function(s){return new Ok(s)}(e.databaseInfo);return function(s,o,l,c){return new Vk(s,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Fk(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Av(this.syncEngine,n,0),function(){return Ev.p()?new Ev:new Nk}())}createSyncEngine(e,n){return function(i,s,o,l,c,u,f){const p=new iN(i,s,o,l,c,u);return f&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);H("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await wa(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}sf.provider={build:()=>new sf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new W(L.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=ee(i),l={documents:s.map(p=>Ec(o.serializer,p))},c=await o.ko("BatchGetDocuments",o.serializer.databaseId,ge.emptyPath(),l,s.length),u=new Map;c.forEach(p=>{const g=qP(o.serializer,p);u.set(g.key.toString(),g)});const f=[];return s.forEach(p=>{const g=u.get(p.toString());ue(!!g),f.push(g)}),f}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new fu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=K.fromPath(r);this.mutations.push(new LE(i,this.precondition(i)))}),await async function(r,i){const s=ee(r),o={writes:i.map(l=>WE(s.serializer,l))};await s.Oo("Commit",s.serializer.databaseId,ge.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Q();n=X.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new W(L.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(X.min())?Je.exists(!1):Je.updateTime(n):Je.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(X.min()))throw new W(L.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Je.updateTime(n)}return Je.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.uu=r.maxAttempts,this.r_=new Tp(this.asyncQueue,"transaction_retry")}cu(){this.uu-=1,this.lu()}lu(){this.r_.jo(async()=>{const e=new _N(this.datastore),n=this.hu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Pu(i)}))}).catch(r=>{this.Pu(r)})})}hu(e){try{const n=this.updateFunction(e);return!ya(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Pu(e){this.uu>0&&this.Tu(e)?(this.uu-=1,this.asyncQueue.enqueueAndForget(()=>(this.lu(),Promise.resolve()))):this.deferred.reject(e)}Tu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!VE(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=fE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Md(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await YE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xN(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>xv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>xv(e.remoteStore,i)),t._onlineComponents=e}async function xN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Md(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;gs("Error using user provided cache. Falling back to memory cache: "+n),await Md(t,new Tc)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Md(t,new vN(void 0));return t._offlineComponents}async function Vp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Cv(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Cv(t,new sf))),t._onlineComponents}function IN(t){return Vp(t).then(e=>e.syncEngine)}function TN(t){return Vp(t).then(e=>e.datastore)}async function Sc(t){const e=await Vp(t),n=e.eventManager;return n.onListen=sN.bind(null,e.syncEngine),n.onUnlisten=lN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=cN.bind(null,e.syncEngine),n}function SN(t,e,n={}){const r=new wn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const f=new Lp({next:g=>{f.eu(),o.enqueueAndForget(()=>bp(s,p));const v=g.docs.has(l);!v&&g.fromCache?u.reject(new W(L.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&c&&c.source==="server"?u.reject(new W(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Op(lu(l.path),f,{includeMetadataChanges:!0,ua:!0});return Np(s,p)}(await Sc(t),t.asyncQueue,e,n,r)),r.promise}function AN(t,e,n={}){const r=new wn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const f=new Lp({next:g=>{f.eu(),o.enqueueAndForget(()=>bp(s,p)),g.fromCache&&c.source==="server"?u.reject(new W(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Op(l,f,{includeMetadataChanges:!0,ua:!0});return Np(s,p)}(await Sc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(t,e,n){if(!n)throw new W(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function RN(t,e,n,r){if(e===!0&&r===!0)throw new W(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kv(t){if(!K.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nv(t){if(K.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Et(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vu(t);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _u{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new MC;switch(r.type){case"firstParty":return new zC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Pv.get(n);r&&(H("ComponentProvider","Removing Datastore"),Pv.delete(n),r.terminate())}(this),Promise.resolve()}}function CN(t,e,n,r={}){var i;const s=(t=Et(t,_u))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ut.MOCK_USER;else{l=Yw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ut(u)}t._authCredentials=new FC(new hE(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ur(this.firestore,e,this._query)}}class et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}}class Ar extends Ur{constructor(e,n,r){super(e,n,lu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new K(e))}withConverter(e){return new Ar(this.firestore,e,this._path)}}function Si(t,e,...n){if(t=pe(t),px("collection","path",e),t instanceof _u){const r=ge.fromString(e,...n);return Nv(r),new Ar(t,null,r)}{if(!(t instanceof et||t instanceof Ar))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Nv(r),new Ar(t.firestore,null,r)}}function ht(t,e,...n){if(t=pe(t),arguments.length===1&&(e=fE.newId()),px("doc","path",e),t instanceof _u){const r=ge.fromString(e,...n);return kv(r),new et(t,null,new K(r))}{if(!(t instanceof et||t instanceof Ar))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return kv(r),new et(t.firestore,t instanceof Ar?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Tp(this,"async_queue_retry"),this.fu=()=>{const r=Vd();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Vd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Vd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new wn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Cs(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw zn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=Pp.createAndSchedule(this,e,n,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&Q()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function Ov(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class An extends _u{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Dv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dv(e),this._firestoreClient=void 0,await e}}}function wu(t,e){const n=typeof t=="object"?t:ga(),r=typeof t=="string"?t:e||"(default)",i=Vr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Gw("firestore");s&&CN(i,...s)}return i}function xa(t){if(t._terminated)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||PN(t),t._firestoreClient}function PN(t){var e,n,r;const i=t._freezeSettings(),s=function(l,c,u,f){return new rP(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,fx(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new EN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fi(rt.fromBase64String(e))}catch(n){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fi(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=/^__.*__$/;class NN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new va(e,this.data,n,this.fieldTransforms)}}class mx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Bp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Bp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ac(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(gx(this.Mu)&&kN.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class bN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||mu(e)}$u(e,n,r,i=!1){return new Bp({Mu:e,methodName:n,Ku:r,path:Xe.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ta(t){const e=t._freezeSettings(),n=mu(t._databaseId);return new bN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zp(t,e,n,r,i,s={}){const o=t.$u(s.merge||s.mergeFields?2:0,e,n,i);$p("Data must be an object, but it was:",o,r);const l=_x(r,o);let c,u;if(s.merge)c=new Vt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=of(e,p,n);if(!o.contains(g))throw new W(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Ex(f,g)||f.push(g)}c=new Vt(f),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new NN(new _t(l),c,u)}class Eu extends Mp{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Eu}}function yx(t,e,n,r){const i=t.$u(1,e,n);$p("Data must be an object, but it was:",i,r);const s=[],o=_t.empty();Mr(r,(c,u)=>{const f=qp(e,c,n);u=pe(u);const p=i.Bu(f);if(u instanceof Eu)s.push(f);else{const g=Sa(u,p);g!=null&&(s.push(f),o.set(f,g))}});const l=new Vt(s);return new mx(o,l,i.fieldTransforms)}function vx(t,e,n,r,i,s){const o=t.$u(1,e,n),l=[of(e,r,n)],c=[i];if(s.length%2!=0)throw new W(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(of(e,s[g])),c.push(s[g+1]);const u=[],f=_t.empty();for(let g=l.length-1;g>=0;--g)if(!Ex(u,l[g])){const v=l[g];let C=c[g];C=pe(C);const N=o.Bu(v);if(C instanceof Eu)u.push(v);else{const k=Sa(C,N);k!=null&&(u.push(v),f.set(v,k))}}const p=new Vt(u);return new mx(f,p,o.fieldTransforms)}function DN(t,e,n,r=!1){return Sa(n,t.$u(r?4:3,e))}function Sa(t,e){if(wx(t=pe(t)))return $p("Unsupported field value:",e,t),_x(t,e);if(t instanceof Mp)return function(r,i){if(!gx(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let c=Sa(l,i.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return SP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=xe.fromDate(r);return{timestampValue:wc(i.serializer,s)}}if(r instanceof xe){const s=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wc(i.serializer,s)}}if(r instanceof Fp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fi)return{bytesValue:BE(i.serializer,r._byteString)};if(r instanceof et){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Up)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return yp(l.serializer,c)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${vu(r)}`)}(t,e)}function _x(t,e){const n={};return pE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mr(t,(r,i)=>{const s=Sa(i,e.Ou(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function wx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof Fp||t instanceof fi||t instanceof et||t instanceof Mp||t instanceof Up)}function $p(t,e,n){if(!wx(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=vu(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function of(t,e,n){if((e=pe(e))instanceof Ia)return e._internalPath;if(typeof e=="string")return qp(t,e);throw Ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const ON=new RegExp("[~\\*/\\[\\]]");function qp(t,e,n){if(e.search(ON)>=0)throw Ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ia(...e.split("."))._internalPath}catch{throw Ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ac(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new W(L.INVALID_ARGUMENT,l+t+c)}function Ex(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(xu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jN extends Rc{data(){return super.data()}}function xu(t,e){return typeof e=="string"?qp(t,e):e instanceof Ia?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wp{}class Ix extends Wp{}function Hp(t,e,...n){let r=[];e instanceof Wp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof Gp).length,l=s.filter(c=>c instanceof Iu).length;if(o>1||o>0&&l>0)throw new W(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Iu extends Ix{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Iu(e,n,r)}_apply(e){const n=this._parse(e);return Tx(e._query,n),new Ur(e.firestore,e.converter,Yh(e._query,n))}_parse(e){const n=Ta(e.firestore);return function(s,o,l,c,u,f,p){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Lv(p,f);const v=[];for(const C of p)v.push(jv(c,s,C));g={arrayValue:{values:v}}}else g=jv(c,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Lv(p,f),g=DN(l,o,p,f==="in"||f==="not-in");return Ve.create(u,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function LN(t,e,n){const r=e,i=xu("where",t);return Iu._create(i,r,n)}class Gp extends Wp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const c of l)Tx(o,c),o=Yh(o,c)}(e._query,n),new Ur(e.firestore,e.converter,Yh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Kp extends Ix{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Kp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ia(s,o)}(e._query,this._field,this._direction);return new Ur(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ps(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Qp(t,e="asc"){const n=e,r=xu("orderBy",t);return Kp._create(r,n)}function jv(t,e,n){if(typeof(n=pe(n))=="string"){if(n==="")throw new W(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!IE(e)&&n.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!K.isDocumentKey(r))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return tv(t,new K(r))}if(n instanceof et)return tv(t,n._key);throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vu(n)}.`)}function Lv(t,e){if(!Array.isArray(t)||t.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Tx(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Sx{convertValue(e,n="none"){switch(br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Mr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>be(o.doubleValue));return new Up(s)}convertGeoPoint(e){return new Fp(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=au(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ta(e));default:return null}}convertTimestamp(e){const n=kr(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);ue(KE(r));const i=new na(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||zn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class VN extends Sx{constructor(e){super(),this.firestore=e}convertBytes(e){return new fi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xp extends Rc{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ml(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(xu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ml extends Xp{data(e={}){return super.data(e)}}class Ax{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Yi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ml(this._firestore,this._userDataWriter,r.key,r,new Yi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new Ml(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Yi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new Ml(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Yi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:MN(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function MN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){t=Et(t,et);const e=Et(t.firestore,An);return SN(xa(e),t._key).then(n=>Px(e,t,n))}class Tu extends Sx{constructor(e){super(),this.firestore=e}convertBytes(e){return new fi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,n)}}function Su(t){t=Et(t,Ur);const e=Et(t.firestore,An),n=xa(e),r=new Tu(e);return xx(t._query),AN(n,t._query).then(i=>new Ax(e,r,t,i))}function af(t,e,n){t=Et(t,et);const r=Et(t.firestore,An),i=Yp(t.converter,e,n);return Au(r,[zp(Ta(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Je.none())])}function Rx(t,e,n,...r){t=Et(t,et);const i=Et(t.firestore,An),s=Ta(i);let o;return o=typeof(e=pe(e))=="string"||e instanceof Ia?vx(s,"updateDoc",t._key,e,n,r):yx(s,"updateDoc",t._key,e),Au(i,[o.toMutation(t._key,Je.exists(!0))])}function FN(t){return Au(Et(t.firestore,An),[new fu(t._key,Je.none())])}function Cx(t,e){const n=Et(t.firestore,An),r=ht(t),i=Yp(t.converter,e);return Au(n,[zp(Ta(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Je.exists(!1))]).then(()=>r)}function UN(t,...e){var n,r,i;t=pe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ov(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Ov(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,u,f;if(t instanceof et)u=Et(t.firestore,An),f=lu(t._key.path),c={next:p=>{e[o]&&e[o](Px(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Et(t,Ur);u=Et(p.firestore,An),f=p._query;const g=new Tu(u);c={next:v=>{e[o]&&e[o](new Ax(u,g,p,v))},error:e[o+1],complete:e[o+2]},xx(t._query)}return function(g,v,C,N){const k=new Lp(N),T=new Op(v,k,C);return g.asyncQueue.enqueueAndForget(async()=>Np(await Sc(g),T)),()=>{k.eu(),g.asyncQueue.enqueueAndForget(async()=>bp(await Sc(g),T))}}(xa(u),f,l,c)}function Au(t,e){return function(r,i){const s=new wn;return r.asyncQueue.enqueueAndForget(async()=>uN(await IN(r),i,s)),s.promise}(xa(t),e)}function Px(t,e,n){const r=n.docs.get(e._key),i=new Tu(t);return new Xp(t,i,e._key,r,new Yi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN={maxAttempts:5};function eo(t,e){if((t=pe(t)).firestore!==e)throw new W(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Ta(n)}get(n){const r=eo(n,this._firestore),i=new VN(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return Q();const o=s[0];if(o.isFoundDocument())return new Rc(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Rc(this._firestore,i,r._key,null,r.converter);throw Q()})}set(n,r,i){const s=eo(n,this._firestore),o=Yp(s.converter,r,i),l=zp(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,l),this}update(n,r,i,...s){const o=eo(n,this._firestore);let l;return l=typeof(r=pe(r))=="string"||r instanceof Ia?vx(this._dataReader,"Transaction.update",o._key,r,i,s):yx(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,l),this}delete(n){const r=eo(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=eo(e,this._firestore),r=new Tu(this._firestore);return super.get(e).then(i=>new Xp(this._firestore,r,n._key,i._document,new Yi(!1,!1),n.converter))}}function kx(t,e,n){t=Et(t,An);const r=Object.assign(Object.assign({},BN),n);return function(s){if(s.maxAttempts<1)throw new W(L.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,l){const c=new wn;return s.asyncQueue.enqueueAndForget(async()=>{const u=await TN(s);new wN(s.asyncQueue,u,l,o,c).cu()}),c.promise}(xa(t),i=>e(new zN(t,i)),r)}(function(e,n=!0){(function(i){As=i})(xi),dn(new Jt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new An(new UC(r.getProvider("auth-internal")),new qC(r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new na(u.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),bt(Qy,"4.7.5",e),bt(Qy,"4.7.5","esm2017")})();function Jp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Nx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $N=Nx,bx=new Ei("auth","Firebase",Nx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=new su("@firebase/auth");function qN(t,...e){Cc.logLevel<=ie.WARN&&Cc.warn(`Auth (${xi}): ${t}`,...e)}function Fl(t,...e){Cc.logLevel<=ie.ERROR&&Cc.error(`Auth (${xi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw Zp(t,...e)}function xn(t,...e){return Zp(t,...e)}function Dx(t,e,n){const r=Object.assign(Object.assign({},$N()),{[e]:n});return new Ei("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return Dx(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bx.create(t,...e)}function J(t,e,...n){if(!t)throw Zp(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fl(e),new Error(e)}function qn(t,e){t||Dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WN(){return Vv()==="http:"||Vv()==="https:"}function Vv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WN()||Xw()||"connection"in navigator)?navigator.onLine:!0}function GN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=dR()||pR()}get(){return HN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=new Aa(3e4,6e4);function Br(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zr(t,e,n,r,i={}){return jx(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ma(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},s);return fR()||(u.referrerPolicy="no-referrer"),Ox.fetch()(Lx(t,t.config.apiHost,n,l),u)})}async function jx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},KN),e);try{const i=new XN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw gl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw gl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw gl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw gl(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Dx(t,f,u);fn(t,f)}}catch(i){if(i instanceof Zt)throw i;fn(t,"network-request-failed",{message:String(i)})}}async function Ra(t,e,n,r,i={}){const s=await zr(t,e,n,r,i);return"mfaPendingCredential"in s&&fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Lx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?em(t.config,i):`${t.config.apiScheme}://${i}`}function YN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xn(this.auth,"network-request-failed")),QN.get())})}}function gl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xn(t,e,r);return i.customData._tokenResponse=n,i}function Mv(t){return t!==void 0&&t.enterprise!==void 0}class JN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return YN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ZN(t,e){return zr(t,"GET","/v2/recaptchaConfig",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(t,e){return zr(t,"POST","/v1/accounts:delete",e)}async function Vx(t,e){return zr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tb(t,e=!1){const n=pe(t),r=await n.getIdToken(e),i=tm(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Co(Fd(i.auth_time)),issuedAtTime:Co(Fd(i.iat)),expirationTime:Co(Fd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fd(t){return Number(t)*1e3}function tm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ww(n);return i?JSON.parse(i):(Fl("Failed to decode base64 JWT payload"),null)}catch(i){return Fl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fv(t){const e=tm(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zt&&nb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Co(this.lastLoginAt),this.creationTime=Co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await aa(t,Vx(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Mx(s.providerUserInfo):[],l=sb(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new cf(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function ib(t){const e=pe(t);await Pc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Mx(t){return t.map(e=>{var{providerId:n}=e,r=Jp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ob(t,e){const n=await jx(t,{},async()=>{const r=ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Lx(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ox.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ab(t,e){return zr(t,"POST","/v2/accounts:revokeToken",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=Fv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ob(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ss;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class On{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Jp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await aa(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tb(this,e)}reload(){return ib(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new On(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await aa(this,eb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(u=n.createdAt)!==null&&u!==void 0?u:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:R,emailVerified:O,isAnonymous:F,providerData:V,stsTokenManager:I}=n;J(R&&I,e,"internal-error");const w=ss.fromJSON(this.name,I);J(typeof R=="string",e,"internal-error"),Zn(p,e.name),Zn(g,e.name),J(typeof O=="boolean",e,"internal-error"),J(typeof F=="boolean",e,"internal-error"),Zn(v,e.name),Zn(C,e.name),Zn(N,e.name),Zn(k,e.name),Zn(T,e.name),Zn(E,e.name);const _=new On({uid:R,auth:e,email:g,emailVerified:O,displayName:p,isAnonymous:F,photoURL:C,phoneNumber:v,tenantId:N,stsTokenManager:w,createdAt:T,lastLoginAt:E});return V&&Array.isArray(V)&&(_.providerData=V.map(x=>Object.assign({},x))),k&&(_._redirectEventId=k),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new ss;i.updateFromServerResponse(n);const s=new On({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Pc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Mx(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ss;l.updateFromIdToken(r);const c=new On({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new cf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=new Map;function jn(t){qn(t instanceof Function,"Expected a class definition");let e=Uv.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Uv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fx.type="NONE";const Bv=Fx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ul(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ul("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?On._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(jn(Bv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||jn(Bv);const o=Ul(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){const p=On._fromJSON(e,f);u!==s&&(l=p),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new os(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new os(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($x(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ux(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wx(e))return"Blackberry";if(Hx(e))return"Webos";if(Bx(e))return"Safari";if((e.includes("chrome/")||zx(e))&&!e.includes("edge/"))return"Chrome";if(qx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ux(t=pt()){return/firefox\//i.test(t)}function Bx(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zx(t=pt()){return/crios\//i.test(t)}function $x(t=pt()){return/iemobile/i.test(t)}function qx(t=pt()){return/android/i.test(t)}function Wx(t=pt()){return/blackberry/i.test(t)}function Hx(t=pt()){return/webos/i.test(t)}function nm(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lb(t=pt()){var e;return nm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cb(){return mR()&&document.documentMode===10}function Gx(t=pt()){return nm(t)||qx(t)||Hx(t)||Wx(t)||/windows phone/i.test(t)||$x(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t,e=[]){let n;switch(t){case"Browser":n=zv(pt());break;case"Worker":n=`${zv(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function db(t,e={}){return zr(t,"GET","/v2/passwordPolicy",Br(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=6;class fb{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:hb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $v(this),this.idTokenSubscription=new $v(this),this.beforeStateQueue=new ub(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vx(this,{idToken:e}),r=await On._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(an(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(In(this));const n=e?pe(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await db(this),n=new fb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ab(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $r(t){return pe(t)}class $v{constructor(e){this.auth=e,this.observer=null,this.addObserver=xR(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mb(t){Ru=t}function Qx(t){return Ru.loadJS(t)}function gb(){return Ru.recaptchaEnterpriseScript}function yb(){return Ru.gapiScript}function vb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class _b{constructor(){this.enterprise=new wb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class wb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Eb="recaptcha-enterprise",Yx="NO_RECAPTCHA";class xb{constructor(e){this.type=Eb,this.auth=$r(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{ZN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new JN(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function i(s,o,l){const c=window.grecaptcha;Mv(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Yx)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _b().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Mv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=gb();c.length!==0&&(c+=l),Qx(c).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function to(t,e,n,r=!1,i=!1){const s=new xb(t);let o;if(i)o=Yx;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function uf(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await to(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await to(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(l)});else if(i==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await to(t,e,n);return r(t,l).catch(async c=>{var u;if(((u=t._getRecaptchaConfig())===null||u===void 0?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const f=await to(t,e,n,!1,!0);return r(t,f)}return Promise.reject(c)})}else{const l=await to(t,e,n,!1,!0);return r(t,l)}else return Promise.reject(i+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(t,e){const n=Vr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xo(s,e??{}))return i;fn(i,"already-initialized")}return n.initialize({options:e})}function Tb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Sb(t,e,n){const r=$r(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Xx(e),{host:o,port:l}=Ab(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Rb()}function Xx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ab(t){const e=Xx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qv(o)}}}function qv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Rb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}async function Cb(t,e){return zr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pb(t,e){return Ra(t,"POST","/v1/accounts:signInWithPassword",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb(t,e){return Ra(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}async function Nb(t,e){return Ra(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends rm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new la(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new la(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uf(e,n,"signInWithPassword",Pb,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return kb(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uf(e,r,"signUpPassword",Cb,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Nb(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e){return Ra(t,"POST","/v1/accounts:signInWithIdp",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="http://localhost";class pi extends rm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Jp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new pi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:bb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ma(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ob(t){const e=lo(co(t)).link,n=e?lo(co(e)).deep_link_id:null,r=lo(co(t)).deep_link_id;return(r?lo(co(r)).link:null)||r||n||e||t}class im{constructor(e){var n,r,i,s,o,l;const c=lo(co(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=Db((i=c.mode)!==null&&i!==void 0?i:null);J(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Ob(e);try{return new im(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.providerId=Ns.PROVIDER_ID}static credential(e,n){return la._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=im.parseLink(n);return J(r,"argument-error"),la._fromEmailAndCode(e,r.code,r.tenantId)}}Ns.PROVIDER_ID="password";Ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends Jx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Ca{constructor(){super("facebook.com")}static credential(e){return pi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Ca{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return or.credential(n,r)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Ca{constructor(){super("github.com")}static credential(e){return pi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Ca{constructor(){super("twitter.com")}static credential(e,n){return pi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zx(t,e){return Ra(t,"POST","/v1/accounts:signUp",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await On._fromIdTokenResponse(e,r,i),o=Wv(r);return new Wn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Wv(r);return new Wn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Wv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(t){var e;if(an(t.app))return Promise.reject(In(t));const n=$r(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Wn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Zx(n,{returnSecureToken:!0}),i=await Wn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc extends Zt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,kc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new kc(e,n,r,i)}}function eI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?kc._fromErrorAndOperation(t,s,e,r):s})}async function Lb(t,e,n=!1){const r=await aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb(t,e,n=!1){const{auth:r}=t;if(an(r.app))return Promise.reject(In(r));const i="reauthenticate";try{const s=await aa(t,eI(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=tm(s.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),Wn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(t,e,n=!1){if(an(t.app))return Promise.reject(In(t));const r="signIn",i=await eI(t,r,e),s=await Wn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Mb(t,e){return tI($r(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(t){const e=$r(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Fb(t,e,n){if(an(t.app))return Promise.reject(In(t));const r=$r(t),o=await uf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Zx,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&nI(t),c}),l=await Wn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Ub(t,e,n){return an(t.app)?Promise.reject(In(t)):Mb(pe(t),Ns.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&nI(t),r})}function Bb(t,e,n,r){return pe(t).onIdTokenChanged(e,n,r)}function zb(t,e,n){return pe(t).beforeAuthStateChanged(e,n)}function $b(t,e,n,r){return pe(t).onAuthStateChanged(e,n,r)}function qb(t){return pe(t).signOut()}const Nc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nc,"1"),this.storage.removeItem(Nc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=1e3,Hb=10;class iI extends rI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);cb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Hb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iI.type="LOCAL";const Gb=iI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI extends rI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sI.type="SESSION";const oI=sI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Cu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),c=await Kb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const u=sm("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function Yb(t){Tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function Xb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Zb(){return aI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="firebaseLocalStorageDb",e2=1,bc="firebaseLocalStorage",cI="fbase_key";class Pa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pu(t,e){return t.transaction([bc],e?"readwrite":"readonly").objectStore(bc)}function t2(){const t=indexedDB.deleteDatabase(lI);return new Pa(t).toPromise()}function df(){const t=indexedDB.open(lI,e2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bc,{keyPath:cI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bc)?e(r):(r.close(),await t2(),e(await df()))})})}async function Hv(t,e,n){const r=Pu(t,!0).put({[cI]:e,value:n});return new Pa(r).toPromise()}async function n2(t,e){const n=Pu(t,!1).get(e),r=await new Pa(n).toPromise();return r===void 0?null:r.value}function Gv(t,e){const n=Pu(t,!0).delete(e);return new Pa(n).toPromise()}const r2=800,i2=3;class uI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await df(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>i2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return aI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cu._getInstance(Zb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Xb(),!this.activeServiceWorker)return;this.sender=new Qb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await df();return await Hv(e,Nc,"1"),await Gv(e,Nc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>n2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Pu(i,!1).getAll();return new Pa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),r2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uI.type="LOCAL";const s2=uI;new Aa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(t,e){return e?jn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om extends rm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function a2(t){return tI(t.auth,new om(t),t.bypassAuthState)}function l2(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),Vb(n,new om(t),t.bypassAuthState)}async function c2(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),Lb(n,new om(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return a2;case"linkViaPopup":case"linkViaRedirect":return c2;case"reauthViaPopup":case"reauthViaRedirect":return l2;default:fn(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2=new Aa(2e3,1e4);class Xi extends dI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xi.currentPopupAction&&Xi.currentPopupAction.cancel(),Xi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=sm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,u2.get())};e()}}Xi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2="pendingRedirect",Bl=new Map;class h2 extends dI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bl.get(this.auth._key());if(!e){try{const r=await f2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bl.set(this.auth._key(),e)}return this.bypassAuthState||Bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function f2(t,e){const n=g2(e),r=m2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function p2(t,e){Bl.set(t._key(),e)}function m2(t){return jn(t._redirectPersistence)}function g2(t){return Ul(d2,t.config.apiKey,t.name)}async function y2(t,e,n=!1){if(an(t.app))return Promise.reject(In(t));const r=$r(t),i=o2(r,e),o=await new h2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=10*60*1e3;class _2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!w2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=v2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kv(e))}saveEventToCache(e){this.cachedEventUids.add(Kv(e)),this.lastProcessedEventTime=Date.now()}}function Kv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function w2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E2(t,e={}){return zr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,I2=/^https?/;async function T2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await E2(t);for(const n of e)try{if(S2(n))return}catch{}fn(t,"unauthorized-domain")}function S2(t){const e=lf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!I2.test(n))return!1;if(x2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2=new Aa(3e4,6e4);function Qv(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function R2(t){return new Promise((e,n)=>{var r,i,s;function o(){Qv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qv(),n(xn(t,"network-request-failed"))},timeout:A2.get()})}if(!((i=(r=Tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Tn().gapi)===null||s===void 0)&&s.load)o();else{const l=vb("iframefcb");return Tn()[l]=()=>{gapi.load?o():n(xn(t,"network-request-failed"))},Qx(`${yb()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw zl=null,e})}let zl=null;function C2(t){return zl=zl||R2(t),zl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=new Aa(5e3,15e3),k2="__/auth/iframe",N2="emulator/auth/iframe",b2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},D2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function O2(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?em(e,N2):`https://${t.config.authDomain}/${k2}`,r={apiKey:e.apiKey,appName:t.name,v:xi},i=D2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ma(r).slice(1)}`}async function j2(t){const e=await C2(t),n=Tn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:O2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=xn(t,"network-request-failed"),l=Tn().setTimeout(()=>{s(o)},P2.get());function c(){Tn().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},V2=500,M2=600,F2="_blank",U2="http://localhost";class Yv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function B2(t,e,n,r=V2,i=M2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},L2),{width:r.toString(),height:i.toString(),top:s,left:o}),u=pt().toLowerCase();n&&(l=zx(u)?F2:n),Ux(u)&&(e=e||U2,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[v,C])=>`${g}${v}=${C},`,"");if(lb(u)&&l!=="_self")return z2(e||"",l),new Yv(null);const p=window.open(e||"",l,f);J(p,t,"popup-blocked");try{p.focus()}catch{}return new Yv(p)}function z2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2="__/auth/handler",q2="emulator/auth/handler",W2=encodeURIComponent("fac");async function Xv(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xi,eventId:i};if(e instanceof Jx){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ER(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(s||{}))o[f]=p}if(e instanceof Ca){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${W2}=${encodeURIComponent(c)}`:"";return`${H2(t)}?${ma(l).slice(1)}${u}`}function H2({config:t}){return t.emulator?em(t,q2):`https://${t.authDomain}/${$2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="webStorageSupport";class G2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oI,this._completeRedirectFn=y2,this._overrideRedirectResult=p2}async _openPopup(e,n,r,i){var s;qn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Xv(e,n,r,lf(),i);return B2(e,o,sm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Xv(e,n,r,lf(),i);return Yb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await j2(e),r=new _2(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ud,{type:Ud},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ud];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=T2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gx()||Bx()||nm()}}const K2=G2;var Jv="@firebase/auth",Zv="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function X2(t){dn(new Jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kx(t)},u=new pb(r,i,s,c);return Tb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),dn(new Jt("auth-internal",e=>{const n=$r(e.getProvider("auth").getImmediate());return(r=>new Q2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(Jv,Zv,Y2(t)),bt(Jv,Zv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=5*60,Z2=Qw("authIdTokenMaxAge")||J2;let e_=null;const eD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Z2)return;const i=n==null?void 0:n.token;e_!==i&&(e_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tD(t=ga()){const e=Vr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ib(t,{popupRedirectResolver:K2,persistence:[s2,Gb,oI]}),r=Qw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=eD(s.toString());zb(n,o,()=>o(n.currentUser)),Bb(n,l=>o(l))}}const i=Hw("auth");return i&&Sb(n,`http://${i}`),n}function nD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=xn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});X2("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="firebasestorage.googleapis.com",pI="storageBucket",rD=2*60*1e3,iD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends Zt{constructor(e,n,r=0){super(Bd(e),`Firebase Storage: ${n} (${Bd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ne.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Bd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function Bd(t){return"storage/"+t}function am(){const t="An unknown error occurred, please check the error payload for server response.";return new Ne(ke.UNKNOWN,t)}function sD(t){return new Ne(ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function oD(t){return new Ne(ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function aD(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ne(ke.UNAUTHENTICATED,t)}function lD(){return new Ne(ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function cD(t){return new Ne(ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function uD(){return new Ne(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function dD(){return new Ne(ke.CANCELED,"User canceled the upload/download.")}function hD(t){return new Ne(ke.INVALID_URL,"Invalid URL '"+t+"'.")}function fD(t){return new Ne(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function pD(){return new Ne(ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+pI+"' property when initializing the app?")}function mD(){return new Ne(ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function gD(){return new Ne(ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function yD(t){return new Ne(ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function hf(t){return new Ne(ke.INVALID_ARGUMENT,t)}function mI(){return new Ne(ke.APP_DELETED,"The Firebase app was deleted.")}function vD(t){return new Ne(ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Po(t,e){return new Ne(ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function no(t){throw new Ne(ke.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Mt.makeFromUrl(e,n)}catch{return new Mt(e,"")}if(r.path==="")return r;throw fD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(O){O.path_=decodeURIComponent(O.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${f}/b/${i}/o${g}`,"i"),C={bucket:1,path:3},N=n===fI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",T=new RegExp(`^https?://${N}/${i}/${k}`,"i"),R=[{regex:l,indices:c,postModify:s},{regex:v,indices:C,postModify:u},{regex:T,indices:{bucket:1,path:2},postModify:u}];for(let O=0;O<R.length;O++){const F=R[O],V=F.regex.exec(e);if(V){const I=V[F.indices.bucket];let w=V[F.indices.path];w||(w=""),r=new Mt(I,w),F.postModify(r);break}}if(r==null)throw hD(e);return r}}class _D{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...k){u||(u=!0,e.apply(null,k))}function p(k){i=setTimeout(()=>{i=null,t(v,c())},k)}function g(){s&&clearTimeout(s)}function v(k,...T){if(u){g();return}if(k){g(),f.call(null,k,...T);return}if(c()||o){g(),f.call(null,k,...T);return}r<64&&(r*=2);let R;l===1?(l=2,R=0):R=(r+Math.random())*1e3,p(R)}let C=!1;function N(k){C||(C=!0,g(),!u&&(i!==null?(k||(l=2),clearTimeout(i),p(0)):k||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,N(!0)},n),N}function ED(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xD(t){return t!==void 0}function ID(t){return typeof t=="object"&&!Array.isArray(t)}function lm(t){return typeof t=="string"||t instanceof String}function t_(t){return cm()&&t instanceof Blob}function cm(){return typeof Blob<"u"}function n_(t,e,n,r){if(r<e)throw hf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw hf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function gI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var oi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(oi||(oi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e,n,r,i,s,o,l,c,u,f,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,C)=>{this.resolve_=v,this.reject_=C,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new yl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===oi.NO_ERROR,c=s.getStatus();if(!l||TD(c,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===oi.ABORT;r(!1,new yl(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new yl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());xD(c)?s(c):s()}catch(c){o(c)}else if(l!==null){const c=am();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(i.canceled){const c=this.appDelete_?mI():dD();o(c)}else{const c=uD();o(c)}};this.canceled_?n(!1,new yl(!1,null,!0)):this.backoffId_=wD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ED(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function AD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function RD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function CD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function PD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function kD(t,e,n,r,i,s,o=!0){const l=gI(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return CD(u,e),AD(u,n),RD(u,s),PD(u,r),new SD(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function bD(...t){const e=ND();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(cm())return new Blob(t);throw new Ne(ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function DD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(t){if(typeof atob>"u")throw yD("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class zd{constructor(e,n){this.data=e,this.contentType=n||null}}function jD(t,e){switch(t){case yn.RAW:return new zd(yI(e));case yn.BASE64:case yn.BASE64URL:return new zd(vI(t,e));case yn.DATA_URL:return new zd(VD(e),MD(e))}throw am()}function yI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function LD(t){let e;try{e=decodeURIComponent(t)}catch{throw Po(yn.DATA_URL,"Malformed data URL.")}return yI(e)}function vI(t,e){switch(t){case yn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Po(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case yn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Po(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=OD(e)}catch(i){throw i.message.includes("polyfill")?i:Po(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class _I{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Po(yn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=FD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function VD(t){const e=new _I(t);return e.base64?vI(yn.BASE64,e.rest):LD(e.rest)}function MD(t){return new _I(t).contentType}function FD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n){let r=0,i="";t_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(t_(this.data_)){const r=this.data_,i=DD(r,e,n);return i===null?null:new cr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new cr(r,!0)}}static getBlob(...e){if(cm()){const n=e.map(r=>r instanceof cr?r.data_:r);return new cr(bD.apply(null,n))}else{const n=e.map(o=>lm(o)?jD(yn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new cr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(t){let e;try{e=JSON.parse(t)}catch{return null}return ID(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function BD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function EI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(t,e){return e}class yt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||zD}}let vl=null;function $D(t){return!lm(t)||t.length<2?t:EI(t)}function xI(){if(vl)return vl;const t=[];t.push(new yt("bucket")),t.push(new yt("generation")),t.push(new yt("metageneration")),t.push(new yt("name","fullPath",!0));function e(s,o){return $D(o)}const n=new yt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new yt("size");return i.xform=r,t.push(i),t.push(new yt("timeCreated")),t.push(new yt("updated")),t.push(new yt("md5Hash",null,!0)),t.push(new yt("cacheControl",null,!0)),t.push(new yt("contentDisposition",null,!0)),t.push(new yt("contentEncoding",null,!0)),t.push(new yt("contentLanguage",null,!0)),t.push(new yt("contentType",null,!0)),t.push(new yt("metadata","customMetadata",!0)),vl=t,vl}function qD(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Mt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function WD(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return qD(r,t),r}function II(t,e,n){const r=wI(e);return r===null?null:WD(t,r,n)}function HD(t,e,n,r){const i=wI(e);if(i===null||!lm(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const f=t.bucket,p=t.fullPath,g="/b/"+o(f)+"/o/"+o(p),v=ku(g,n,r),C=gI({alt:"media",token:u});return v+C})[0]}function GD(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class um{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(t){if(!t)throw am()}function KD(t,e){function n(r,i){const s=II(t,i,e);return TI(s!==null),s}return n}function QD(t,e){function n(r,i){const s=II(t,i,e);return TI(s!==null),HD(s,i,t.host,t._protocol)}return n}function SI(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=lD():i=aD():n.getStatus()===402?i=oD(t.bucket):n.getStatus()===403?i=cD(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function AI(t){const e=SI(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=sD(t.path)),s.serverResponse=i.serverResponse,s}return n}function YD(t,e,n){const r=e.fullServerUrl(),i=ku(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new um(i,s,QD(t,n),o);return l.errorHandler=AI(e),l}function XD(t,e){const n=e.fullServerUrl(),r=ku(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(c,u){}const l=new um(r,i,o,s);return l.successCodes=[200,204],l.errorHandler=AI(e),l}function JD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function ZD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=JD(null,e)),r}function eO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let R="";for(let O=0;O<2;O++)R=R+Math.random().toString().slice(2);return R}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=ZD(e,r,i),f=GD(u,n),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+c+"--",v=cr.getBlob(p,r,g);if(v===null)throw mD();const C={name:u.fullPath},N=ku(s,t.host,t._protocol),k="POST",T=t.maxUploadRetryTime,E=new um(N,k,KD(t,n),T);return E.urlParams=C,E.headers=o,E.body=v.uploadData(),E.errorHandler=SI(e),E}class tO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=oi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=oi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=oi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw no("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw no("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw no("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw no("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw no("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class nO extends tO{initXhr(){this.xhr_.responseType="text"}}function dm(){return new nO}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n){this._service=e,n instanceof Mt?this._location=n:this._location=Mt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new mi(e,n)}get root(){const e=new Mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return EI(this._location.path)}get storage(){return this._service}get parent(){const e=UD(this._location.path);if(e===null)return null;const n=new Mt(this._location.bucket,e);return new mi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw vD(e)}}function rO(t,e,n){t._throwIfRoot("uploadBytes");const r=eO(t.storage,t._location,xI(),new cr(e,!0),n);return t.storage.makeRequestWithTokens(r,dm).then(i=>({metadata:i,ref:t}))}function iO(t){t._throwIfRoot("getDownloadURL");const e=YD(t.storage,t._location,xI());return t.storage.makeRequestWithTokens(e,dm).then(n=>{if(n===null)throw gD();return n})}function sO(t){t._throwIfRoot("deleteObject");const e=XD(t.storage,t._location);return t.storage.makeRequestWithTokens(e,dm)}function oO(t,e){const n=BD(t._location.path,e),r=new Mt(t._location.bucket,n);return new mi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aO(t){return/^[A-Za-z]+:\/\//.test(t)}function lO(t,e){return new mi(t,e)}function RI(t,e){if(t instanceof hm){const n=t;if(n._bucket==null)throw pD();const r=new mi(n,n._bucket);return e!=null?RI(r,e):r}else return e!==void 0?oO(t,e):t}function cO(t,e){if(e&&aO(e)){if(t instanceof hm)return lO(t,e);throw hf("To use ref(service, url), the first argument must be a Storage instance.")}else return RI(t,e)}function r_(t,e){const n=e==null?void 0:e[pI];return n==null?null:Mt.makeFromBucketSpec(n,t)}function uO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Yw(i,t.app.options.projectId))}class hm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=fI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rD,this._maxUploadRetryTime=iD,this._requests=new Set,i!=null?this._bucket=Mt.makeFromBucketSpec(i,this._host):this._bucket=r_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Mt.makeFromBucketSpec(this._url,e):this._bucket=r_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){n_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){n_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new mi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new _D(mI());{const o=kD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const i_="@firebase/storage",s_="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI="storage";function Dc(t,e,n){return t=pe(t),rO(t,e,n)}function Oc(t){return t=pe(t),iO(t)}function jc(t){return t=pe(t),sO(t)}function pr(t,e){return t=pe(t),cO(t,e)}function dO(t=ga(),e){t=pe(t);const r=Vr(t,CI).getImmediate({identifier:e}),i=Gw("storage");return i&&hO(r,...i),r}function hO(t,e,n,r={}){uO(t,e,n,r)}function fO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new hm(n,r,i,e,xi)}function pO(){dn(new Jt(CI,fO,"PUBLIC").setMultipleInstances(!0)),bt(i_,s_,""),bt(i_,s_,"esm2017")}pO();const PI="@firebase/installations",fm="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=1e4,NI=`w:${fm}`,bI="FIS_v2",mO="https://firebaseinstallations.googleapis.com/v1",gO=60*60*1e3,yO="installations",vO="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},gi=new Ei(yO,vO,_O);function DI(t){return t instanceof Zt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI({projectId:t}){return`${mO}/projects/${t}/installations`}function jI(t){return{token:t.token,requestStatus:2,expiresIn:EO(t.expiresIn),creationTime:Date.now()}}async function LI(t,e){const r=(await e.json()).error;return gi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function VI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function wO(t,{refreshToken:e}){const n=VI(t);return n.append("Authorization",xO(e)),n}async function MI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function EO(t){return Number(t.replace("s","000"))}function xO(t){return`${bI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=OI(t),i=VI(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:bI,appId:t.appId,sdkVersion:NI},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await MI(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:jI(u.authToken)}}else throw await LI("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO=/^[cdef][\w-]{21}$/,ff="";function AO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=RO(t);return SO.test(n)?n:ff}catch{return ff}}function RO(t){return TO(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=new Map;function BI(t,e){const n=Nu(t);zI(n,e),CO(n,e)}function zI(t,e){const n=UI.get(t);if(n)for(const r of n)r(e)}function CO(t,e){const n=PO();n&&n.postMessage({key:t,fid:e}),kO()}let ti=null;function PO(){return!ti&&"BroadcastChannel"in self&&(ti=new BroadcastChannel("[Firebase] FID Change"),ti.onmessage=t=>{zI(t.data.key,t.data.fid)}),ti}function kO(){UI.size===0&&ti&&(ti.close(),ti=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO="firebase-installations-database",bO=1,yi="firebase-installations-store";let $d=null;function pm(){return $d||($d=nE(NO,bO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yi)}}})),$d}async function Lc(t,e){const n=Nu(t),i=(await pm()).transaction(yi,"readwrite"),s=i.objectStore(yi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&BI(t,e.fid),e}async function $I(t){const e=Nu(t),r=(await pm()).transaction(yi,"readwrite");await r.objectStore(yi).delete(e),await r.done}async function bu(t,e){const n=Nu(t),i=(await pm()).transaction(yi,"readwrite"),s=i.objectStore(yi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&BI(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mm(t){let e;const n=await bu(t.appConfig,r=>{const i=DO(r),s=OO(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===ff?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function DO(t){const e=t||{fid:AO(),registrationStatus:0};return qI(e)}function OO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(gi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=jO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:LO(t)}:{installationEntry:e}}async function jO(t,e){try{const n=await IO(t,e);return Lc(t.appConfig,n)}catch(n){throw DI(n)&&n.customData.serverCode===409?await $I(t.appConfig):await Lc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function LO(t){let e=await o_(t.appConfig);for(;e.registrationStatus===1;)await FI(100),e=await o_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await mm(t);return r||n}return e}function o_(t){return bu(t,e=>{if(!e)throw gi.create("installation-not-found");return qI(e)})}function qI(t){return VO(t)?{fid:t.fid,registrationStatus:0}:t}function VO(t){return t.registrationStatus===1&&t.registrationTime+kI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MO({appConfig:t,heartbeatServiceProvider:e},n){const r=FO(t,n),i=wO(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:NI,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await MI(()=>fetch(r,l));if(c.ok){const u=await c.json();return jI(u)}else throw await LI("Generate Auth Token",c)}function FO(t,{fid:e}){return`${OI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gm(t,e=!1){let n;const r=await bu(t.appConfig,s=>{if(!WI(s))throw gi.create("not-registered");const o=s.authToken;if(!e&&zO(o))return s;if(o.requestStatus===1)return n=UO(t,e),s;{if(!navigator.onLine)throw gi.create("app-offline");const l=qO(s);return n=BO(t,l),l}});return n?await n:r.authToken}async function UO(t,e){let n=await a_(t.appConfig);for(;n.authToken.requestStatus===1;)await FI(100),n=await a_(t.appConfig);const r=n.authToken;return r.requestStatus===0?gm(t,e):r}function a_(t){return bu(t,e=>{if(!WI(e))throw gi.create("not-registered");const n=e.authToken;return WO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function BO(t,e){try{const n=await MO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Lc(t.appConfig,r),n}catch(n){if(DI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await $I(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Lc(t.appConfig,r)}throw n}}function WI(t){return t!==void 0&&t.registrationStatus===2}function zO(t){return t.requestStatus===2&&!$O(t)}function $O(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+gO}function qO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function WO(t){return t.requestStatus===1&&t.requestTime+kI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HO(t){const e=t,{installationEntry:n,registrationPromise:r}=await mm(e);return r?r.catch(console.error):gm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GO(t,e=!1){const n=t;return await KO(n),(await gm(n,e)).token}async function KO(t){const{registrationPromise:e}=await mm(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t){if(!t||!t.options)throw qd("App Configuration");if(!t.name)throw qd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw qd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function qd(t){return gi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="installations",YO="installations-internal",XO=t=>{const e=t.getProvider("app").getImmediate(),n=QO(e),r=Vr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},JO=t=>{const e=t.getProvider("app").getImmediate(),n=Vr(e,HI).getImmediate();return{getId:()=>HO(n),getToken:i=>GO(n,i)}};function ZO(){dn(new Jt(HI,XO,"PUBLIC")),dn(new Jt(YO,JO,"PRIVATE"))}ZO();bt(PI,fm);bt(PI,fm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="analytics",ej="firebase_id",tj="origin",nj=60*1e3,rj="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ym="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new su("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ij={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Bt=new Ei("analytics","Analytics",ij);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sj(t){if(!t.startsWith(ym)){const e=Bt.create("invalid-gtag-resource",{gtagURL:t});return Dt.warn(e.message),""}return t}function GI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function oj(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function aj(t,e){const n=oj("firebase-js-sdk-policy",{createScriptURL:sj}),r=document.createElement("script"),i=`${ym}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function lj(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function cj(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await GI(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(l){Dt.error(l)}t("config",i,s)}async function uj(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await GI(n);for(const c of o){const u=l.find(p=>p.measurementId===c),f=u&&e[u.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Dt.error(s)}}function dj(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,c]=o;await uj(t,e,n,l,c)}else if(s==="config"){const[l,c]=o;await cj(t,e,n,r,l,c)}else if(s==="consent"){const[l,c]=o;t("consent",l,c)}else if(s==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Dt.error(l)}}return i}function hj(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=dj(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function fj(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ym)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pj=30,mj=1e3;class gj{constructor(e={},n=mj){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const KI=new gj;function yj(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function vj(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:yj(r)},s=rj.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw Bt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function _j(t,e=KI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Bt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Bt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new xj;return setTimeout(async()=>{l.abort()},n!==void 0?n:nj),QI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function QI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=KI){var s;const{appId:o,measurementId:l}=t;try{await wj(r,e)}catch(c){if(l)return Dt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw c}try{const c=await vj(t);return i.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!Ej(u)){if(i.deleteThrottleMetadata(o),l)return Dt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw c}const f=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Fy(n,i.intervalMillis,pj):Fy(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,p),Dt.debug(`Calling attemptFetch again in ${f} millis`),QI(t,p,r,i)}}function wj(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ej(t){if(!(t instanceof Zt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class xj{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Ij(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tj(){if(Jw())try{await Zw()}catch(t){return Dt.warn(Bt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Dt.warn(Bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Sj(t,e,n,r,i,s,o){var l;const c=_j(t);c.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&Dt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>Dt.error(v)),e.push(c);const u=Tj().then(v=>{if(v)return r.getId()}),[f,p]=await Promise.all([c,u]);fj(s)||aj(s,f.measurementId),i("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[tj]="firebase",g.update=!0,p!=null&&(g[ej]=p),i("config",f.measurementId,g),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
`;Me.forEach(Kn=>{Oe+=`• ${Kn.name} - ${Kn.reason}
`}),te(Oe);return}const en=await Vj(ye,Y);i&&await Bj(i.uid,u),r(),o("/confirmation",{state:{orderId:en}})}catch(ye){console.error("Error placing order:",ye),te("Failed to place order. Please try again.")}finally{A(!1)}};return D.useEffect(()=>{l===1&&(async()=>{(await Promise.all(t.map(async Y=>{var oe;const Z=await ca(Y.productId);return{...Y,latestStock:Z&&((oe=Z.variants.find(ye=>ye.id===Y.variantId))==null?void 0:oe.stock)||0}}))).forEach(Y=>{Y.latestStock<Y.quantity&&(alert(`The product "${Y.name}" has only ${Y.latestStock} items left in stock.`),n(Y.variantId,Math.max(1,Y.latestStock)))})})()},[l]),d.jsx("div",{className:"flex flex-col min-h-screen",children:d.jsxs("div",{className:"container mx-auto px-4 py-8 pt-[100px]",children:[d.jsxs("main",{className:"flex-grow bg-white p-8",children:[d.jsxs("div",{className:"mb-8 flex justify-center space-x-4",children:[d.jsxs("div",{className:`flex items-center ${l===1?"text-[#6F3A19]":"text-gray-400"}`,children:[d.jsx("div",{className:`w-8 h-8 flex items-center justify-center rounded-full border-2 ${l===1?"bg-[#6F3A19] text-white border-[#6F3A19]":"border-gray-300"}`,children:"1"}),d.jsx("span",{className:"ml-2",children:"Cart"})]}),d.jsxs("div",{className:`flex items-center ${l===2?"text-[#6F3A19]":"text-gray-400"}`,children:[d.jsx("div",{className:`w-8 h-8 flex items-center justify-center rounded-full border-2 ${l===2?"bg-[#6F3A19] text-white border-[#6F3A19]":"border-gray-300"}`,children:"2"}),d.jsx("span",{className:"ml-2",children:"Address"})]}),d.jsxs("div",{className:`flex items-center ${l===3?"text-[#6F3A19]":"text-gray-400"}`,children:[d.jsx("div",{className:`w-8 h-8 flex items-center justify-center rounded-full border-2 ${l===3?"bg-[#6F3A19] text-white border-[#6F3A19]":"border-gray-300"}`,children:"3"}),d.jsx("span",{className:"ml-2",children:"Payment"})]})]}),l===1&&d.jsxs("section",{className:"mb-16",children:[d.jsx("h2",{className:"text-3xl font-kalam text-[#6F3A19] mb-6",children:"Your Cart"}),d.jsxs("div",{className:"flex flex-col md:flex-row",children:[d.jsx("div",{className:"md:w-3/4",children:t.length===0?d.jsx("p",{children:"Your cart is empty."}):t.map(B=>d.jsxs("div",{className:"flex items-center mb-6 border-b pb-4",children:[d.jsx("img",{src:B.image||"https://via.placeholder.com/96",alt:B.name,className:"w-24 h-24 object-cover rounded-lg mr-4"}),d.jsxs("div",{className:"flex-grow",children:[d.jsx("h3",{className:"text-xl font-kalam",children:B.name}),B.size&&d.jsxs("p",{className:"text-gray-700",children:["Size: ",B.size]}),B.color&&d.jsxs("p",{className:"text-gray-700",children:["Color: ",B.color]}),d.jsxs("p",{className:"text-gray-700",children:["Price: ₹",B.price.toFixed(2)]}),d.jsxs("div",{className:"flex items-center mt-2",children:[d.jsx("label",{htmlFor:`quantity-${B.variantId}`,className:"mr-2",children:"Qty:"}),d.jsx("input",{type:"number",id:`quantity-${B.variantId}`,name:`quantity-${B.variantId}`,min:"1",value:B.quantity,onChange:q=>n(B.variantId,Math.max(1,parseInt(q.target.value)||1)),className:"w-16 px-2 py-1 border rounded"})]}),B.latestStock!==void 0&&B.latestStock<B.quantity&&d.jsxs("p",{className:"text-red-500 text-sm mt-1",children:["Only ",B.latestStock," left in stock."]})]}),d.jsxs("button",{className:"flex items-center text-red-600 hover:text-red-800",onClick:()=>e(B.variantId),"aria-label":`Remove ${B.name} from cart`,children:[d.jsx("img",{src:$l,alt:"Remove",className:"w-5 h-5 mr-1"}),"Remove"]})]},B.variantId))}),d.jsxs("div",{className:"md:w-1/4 md:ml-8",children:[d.jsx("h3",{className:"text-2xl font-hedvig text-[#6F3A19] mb-4",children:"Summary"}),d.jsxs("div",{className:"bg-gray-100 p-4 rounded-lg",children:[d.jsxs("div",{className:"flex justify-between mb-2",children:[d.jsx("span",{children:"Subtotal:"}),d.jsxs("span",{children:["₹",t.reduce((B,q)=>B+q.price*q.quantity,0).toFixed(2)]})]}),d.jsxs("div",{className:"flex justify-between mb-2",children:[d.jsx("span",{children:"Shipping:"}),d.jsx("span",{children:"₹599.00"})]}),d.jsxs("div",{className:"flex justify-between font-semibold text-lg",children:[d.jsx("span",{children:"Total:"}),d.jsxs("span",{children:["₹",(t.reduce((B,q)=>B+q.price*q.quantity,0)+599).toFixed(2)]})]}),d.jsx("button",{className:"w-full mt-4 flex items-center justify-center px-4 py-2 bg-[#6F3A19] text-white rounded hover:bg-[#5a3216] transition-colors duration-200",onClick:()=>c(2),disabled:t.length===0,children:"Proceed to Checkout"})]})]})]})]}),l===2&&d.jsxs("section",{className:"mb-16",children:[d.jsx("div",{className:"flex items-center justify-between mb-6",children:d.jsxs("button",{className:"text-gray-600 hover:text-gray-800 flex items-center",onClick:()=>c(1),children:[d.jsx("img",{src:$l,alt:"Back",className:"w-5 h-5 mr-1"}),"Back to Cart"]})}),d.jsx("h2",{className:"text-3xl font-kalam text-[#6F3A19]",children:"Address Information"}),i&&I&&d.jsxs("div",{className:"bg-green-100 p-4 rounded-lg mb-6",children:[d.jsx("h3",{className:"text-xl font-semibold text-[#6F3A19] mb-2",children:"Saved Address"}),d.jsxs("p",{children:[d.jsx("strong",{children:"Name:"})," ",I.fullName]}),d.jsxs("p",{children:[d.jsx("strong",{children:"Email:"})," ",I.email]}),d.jsxs("p",{children:[d.jsx("strong",{children:"Address:"})," ",I.street,", ",I.district,", ",I.city,", ",I.state,", ",I.country,", ",I.pincode]}),d.jsxs("div",{className:"mt-4 flex space-x-4",children:[d.jsx("button",{className:"px-4 py-2 bg-[#6F3A19] text-white rounded hover:bg-[#5a3216] transition-colors duration-200",onClick:()=>{f({...I}),c(3)},children:"Use Saved Address"}),d.jsx("button",{className:"px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors duration-200",onClick:()=>w(null),children:"Enter New Address"})]})]}),d.jsx("div",{className:"flex flex-col md:flex-row mt-6",children:d.jsx("div",{className:"md:w-2/3 md:pr-8",children:d.jsxs("form",{className:"space-y-4",onSubmit:St,children:[d.jsxs("div",{children:[d.jsx("label",{htmlFor:"fullName",className:"block text-gray-700",children:"Full Name"}),d.jsx("input",{type:"text",id:"fullName",name:"fullName",value:u.fullName,onChange:ne,className:`w-full px-3 py-2 border rounded ${v.fullName?"border-red-500":""}`,placeholder:"John Doe",required:!0}),v.fullName&&d.jsx("p",{className:"text-red-500 text-sm",children:v.fullName})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"email",className:"block text-gray-700",children:"Email Address"}),d.jsx("input",{type:"email",id:"email",name:"email",value:u.email,onChange:ne,className:`w-full px-3 py-2 border rounded ${v.email?"border-red-500":""}`,placeholder:"john.doe@example.com",required:!0}),v.email&&d.jsx("p",{className:"text-red-500 text-sm",children:v.email})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"pincode",className:"block text-gray-700",children:"Pincode"}),d.jsx("input",{type:"text",id:"pincode",name:"pincode",value:u.pincode,onChange:ne,className:`w-full px-3 py-2 border rounded ${v.pincode||F?"border-red-500":""}`,placeholder:"Enter 6-digit pincode",required:!0}),v.pincode&&d.jsx("p",{className:"text-red-500 text-sm",children:v.pincode}),F&&d.jsx("p",{className:"text-red-500 text-sm",children:F}),R&&d.jsx("p",{className:"text-gray-500 text-sm",children:"Fetching location details..."})]}),N.length>1&&d.jsxs("div",{children:[d.jsx("label",{htmlFor:"postOffice",className:"block text-gray-700",children:"Select Post Office"}),d.jsxs("select",{id:"postOffice",name:"postOffice",onChange:le,className:`w-full px-3 py-2 border rounded ${v.postOffice?"border-red-500":""}`,required:!0,children:[d.jsx("option",{value:"",children:"-- Select Post Office --"}),N.map(B=>d.jsx("option",{value:B.Name,children:B.Name},B.Name))]}),v.postOffice&&d.jsx("p",{className:"text-red-500 text-sm",children:v.postOffice})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"city",className:"block text-gray-700",children:"City"}),d.jsx("input",{type:"text",id:"city",name:"city",value:u.city,onChange:ne,className:`w-full px-3 py-2 border rounded ${v.city?"border-red-500":""}`,placeholder:"City",required:!0,readOnly:!0}),v.city&&d.jsx("p",{className:"text-red-500 text-sm",children:v.city})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"state",className:"block text-gray-700",children:"State"}),d.jsx("input",{type:"text",id:"state",name:"state",value:u.state,onChange:ne,className:`w-full px-3 py-2 border rounded ${v.state?"border-red-500":""}`,placeholder:"State",required:!0,readOnly:!0}),v.state&&d.jsx("p",{className:"text-red-500 text-sm",children:v.state})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"district",className:"block text-gray-700",children:"District"}),d.jsx("input",{type:"text",id:"district",name:"district",value:u.district,onChange:ne,className:`w-full px-3 py-2 border rounded ${v.district?"border-red-500":""}`,placeholder:"District",required:!0,readOnly:!0}),v.district&&d.jsx("p",{className:"text-red-500 text-sm",children:v.district})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"street",className:"block text-gray-700",children:"Street Address"}),d.jsx("input",{type:"text",id:"street",name:"street",value:u.street,onChange:ne,className:`w-full px-3 py-2 border rounded ${v.street?"border-red-500":""}`,placeholder:"123 Main St",required:!0}),v.street&&d.jsx("p",{className:"text-red-500 text-sm",children:v.street})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"country",className:"block text-gray-700",children:"Country"}),d.jsx("input",{type:"text",id:"country",name:"country",value:u.country,onChange:ne,className:`w-full px-3 py-2 border rounded ${v.country?"border-red-500":""}`,placeholder:"India",required:!0,readOnly:!0}),v.country&&d.jsx("p",{className:"text-red-500 text-sm",children:v.country})]}),d.jsx("button",{type:"submit",className:"w-full flex items-center justify-center px-4 py-2 bg-[#6F3A19] text-white rounded hover:bg-[#5a3216] transition-colors duration-200",children:"Continue to Payment"})]})})})]}),l===3&&d.jsxs("section",{children:[d.jsx("div",{className:"flex items-center justify-between mb-6",children:d.jsxs("button",{className:"text-gray-600 hover:text-gray-800 flex items-center",onClick:()=>c(2),children:[d.jsx("img",{src:$l,alt:"Back",className:"w-5 h-5 mr-1"}),"Back to Address"]})}),d.jsx("h2",{className:"text-3xl font-kalam text-[#6F3A19]",children:"Payment Method"}),S&&d.jsx("div",{className:"bg-red-100 text-red-700 p-4 rounded-lg mb-6",children:d.jsx("p",{children:S})}),P&&d.jsx("div",{className:"mb-6",children:d.jsx("p",{className:"text-gray-500",children:"Placing your order, please wait..."})}),d.jsxs("div",{className:"mt-6 flex flex-col space-y-4",children:[d.jsx("button",{onClick:()=>$("Prepayment"),className:`w-full px-4 py-3 bg-[#6F3A19] text-white rounded-lg hover:bg-[#5a3216] flex items-center justify-center transition-colors duration-200 ${P?"opacity-50 cursor-not-allowed":""}`,disabled:P,children:"Prepayment"}),d.jsx("button",{onClick:()=>$("Cash on Delivery"),className:`w-full px-4 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 flex items-center justify-center transition-colors duration-200 ${P?"opacity-50 cursor-not-allowed":""}`,disabled:P,children:"Cash on Delivery"})]})]})]}),d.jsx(xt,{})]})})},xL=[{value:"",label:"Select Category"},{value:"duvets",label:"Duvets"},{value:"bedding",label:"Bedding"},{value:"pillow",label:"Pillow"},{value:"mattress",label:"Mattress"},{value:"sheets",label:"Sheets"}],IL={duvets:["Single","Double","Queen","King"],bedding:["Twin","Full","Queen","King"],pillow:["Standard","Queen","King"],mattress:["Twin","Full","Queen","King","California King"],sheets:["Twin","Full","Queen","King","California King"]},TL=["Red","Blue","Green","Yellow","Gray","Black","White"],SL=()=>{const[t,e]=D.useState({name:"",price:"",category:"",description:"",details:{material:"",dimensions:"",careInstructions:"",warranty:""},variants:[]}),[n,r]=D.useState({primaryImage:null,additionalImages:[]}),[i,s]=D.useState(!1),[o,l]=D.useState(null),[c,u]=D.useState(null),[f,p]=D.useState([]),[g,v]=D.useState(null);D.useEffect(()=>{(async()=>{try{const x=await No();p(x)}catch(x){console.error("Error fetching products:",x)}})()},[]);const C=_=>{const{name:x,value:P}=_.target;if(x.startsWith("details.")){const A=x.split(".")[1];e(S=>({...S,details:{...S.details,[A]:P}}))}else e(A=>({...A,[x]:P}));x==="category"&&e(A=>({...A,variants:[]}))},N=()=>{if(!t.category){alert("Please select a category before adding variants.");return}e(_=>({..._,variants:[..._.variants,{id:mf(),size:"",color:"",stock:0}]}))},k=_=>{e(x=>({...x,variants:x.variants.filter(P=>P.id!==_)}))},T=(_,x,P)=>{e(A=>({...A,variants:A.variants.map(S=>S.id===_?{...S,[x]:P}:S)}))},E=_=>{_.target.files[0]&&r(x=>({...x,primaryImage:_.target.files[0]}))},R=_=>{_.target.files&&r(x=>({...x,additionalImages:Array.from(_.target.files)}))},O=async _=>{if(_.preventDefault(),s(!0),l(null),u(null),t.variants.length===0){l("Please add at least one variant."),s(!1);return}for(const te of t.variants){if(!te.size||!te.color){l("All variants must have a size and a color."),s(!1);return}if(te.stock<0){l("Stock for each variant cannot be negative."),s(!1);return}}const{material:x,dimensions:P,careInstructions:A,warranty:S}=t.details;if(!x||!P||!A||!S){l("All detail fields must be filled out."),s(!1);return}try{if(g){const ne={...t};if(n.primaryImage){const le=await F(n.primaryImage);ne.primaryImage=le}if(n.additionalImages.length>0){const le=await V(n.additionalImages);ne.additionalImages=le}await zj(g.id,ne),u("Product updated successfully!"),v(null)}else{const ne=await Lj(t,n.primaryImage,n.additionalImages);u("Product added successfully!")}e({name:"",price:"",category:"",description:"",details:{material:"",dimensions:"",careInstructions:"",warranty:""},variants:[]}),r({primaryImage:null,additionalImages:[]});const te=await No();p(te)}catch(te){console.error("Error submitting form:",te),l("Failed to submit form. Please try again.")}finally{s(!1)}},F=async _=>{try{const x=ref(storage,`products/${Date.now()}_${_.name}`),P=await uploadBytes(x,_);return await getDownloadURL(P.ref)}catch(x){throw console.error("Error uploading image:",x),x}},V=async _=>{try{const x=_.map(async A=>F(A));return await Promise.all(x)}catch(x){throw console.error("Error uploading multiple images:",x),x}},I=_=>{v(_),e({name:_.name,price:_.price,category:_.category,description:_.description,details:{..._.details},variants:_.variants.map(x=>({...x,id:mf()}))}),r({primaryImage:null,additionalImages:[]}),window.scrollTo({top:0,behavior:"smooth"})},w=async _=>{if(window.confirm("Are you sure you want to delete this product?"))try{await $j(_),u("Product deleted successfully!");const P=await No();p(P)}catch(P){console.error("Error deleting product:",P),l("Failed to delete product. Please try again.")}};return d.jsxs("div",{className:"flex flex-col min-h-screen",children:[d.jsx("div",{className:"container mx-auto px-4 py-8 pt-[100px]",children:d.jsxs("div",{className:"container mx-auto px-4 py-8",children:[d.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Inventory Management"}),c&&d.jsx("p",{className:"text-green-500 mb-4",children:c}),o&&d.jsx("p",{className:"text-red-500 mb-4",children:o}),d.jsxs("form",{onSubmit:O,className:"mb-12",children:[d.jsx("h2",{className:"text-2xl font-semibold mb-4",children:g?"Edit Product":"Add New Product"}),d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{htmlFor:"name",className:"block text-gray-700",children:"Product Name"}),d.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:C,required:!0,className:"w-full px-3 py-2 border rounded",placeholder:"Enter product name"})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{htmlFor:"price",className:"block text-gray-700",children:"Price (₹)"}),d.jsx("input",{type:"number",id:"price",name:"price",value:t.price,onChange:C,required:!0,min:"0",step:"0.01",className:"w-full px-3 py-2 border rounded",placeholder:"Enter product price"})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{htmlFor:"category",className:"block text-gray-700",children:"Category"}),d.jsx("select",{id:"category",name:"category",value:t.category,onChange:C,required:!0,className:"w-full px-3 py-2 border rounded",children:xL.map(_=>d.jsx("option",{value:_.value,children:_.label},_.value))})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{htmlFor:"description",className:"block text-gray-700",children:"Description"}),d.jsx("textarea",{id:"description",name:"description",value:t.description,onChange:C,required:!0,className:"w-full px-3 py-2 border rounded",placeholder:"Enter product description"})]}),d.jsxs("div",{className:"mb-6",children:[d.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Product Details"}),d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{htmlFor:"details.material",className:"block text-gray-700",children:"Material"}),d.jsx("input",{type:"text",id:"details.material",name:"details.material",value:t.details.material,onChange:C,required:!0,className:"w-full px-3 py-2 border rounded",placeholder:"Enter material"})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{htmlFor:"details.dimensions",className:"block text-gray-700",children:"Dimensions"}),d.jsx("input",{type:"text",id:"details.dimensions",name:"details.dimensions",value:t.details.dimensions,onChange:C,required:!0,className:"w-full px-3 py-2 border rounded",placeholder:"Enter dimensions"})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{htmlFor:"details.careInstructions",className:"block text-gray-700",children:"Care Instructions"}),d.jsx("textarea",{id:"details.careInstructions",name:"details.careInstructions",value:t.details.careInstructions,onChange:C,required:!0,className:"w-full px-3 py-2 border rounded",placeholder:"Enter care instructions"})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{htmlFor:"details.warranty",className:"block text-gray-700",children:"Warranty"}),d.jsx("input",{type:"text",id:"details.warranty",name:"details.warranty",value:t.details.warranty,onChange:C,required:!0,className:"w-full px-3 py-2 border rounded",placeholder:"Enter warranty information"})]})]}),d.jsxs("div",{className:"mb-6",children:[d.jsx("label",{className:"block text-gray-700",children:"Variants"}),t.variants.map((_,x)=>d.jsxs("div",{className:"flex items-center space-x-4 mt-2",children:[d.jsxs("select",{value:_.size,onChange:P=>T(_.id,"size",P.target.value),required:!0,className:"px-3 py-2 border rounded",children:[d.jsx("option",{value:"",children:"Select Size"}),t.category&&IL[t.category].map(P=>d.jsx("option",{value:P,children:P},P))]}),d.jsxs("select",{value:_.color,onChange:P=>T(_.id,"color",P.target.value),required:!0,className:"px-3 py-2 border rounded",children:[d.jsx("option",{value:"",children:"Select Color"}),TL.map(P=>d.jsx("option",{value:P,children:P},P))]}),d.jsx("input",{type:"number",min:"0",value:_.stock,onChange:P=>T(_.id,"stock",parseInt(P.target.value)||0),required:!0,className:"w-24 px-3 py-2 border rounded",placeholder:"Stock"}),d.jsx("button",{type:"button",onClick:()=>k(_.id),className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200",children:"Remove"})]},_.id)),d.jsx("button",{type:"button",onClick:N,className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200",children:"Add Variant"})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{className:"block text-gray-700",children:"Primary Image"}),d.jsx("input",{type:"file",accept:"image/*",onChange:E,className:"mt-1 block w-full",...g?{}:{required:!0}}),g&&!n.primaryImage&&d.jsx("p",{className:"text-gray-600 text-sm",children:"Leave blank to keep existing image."})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("label",{className:"block text-gray-700",children:"Additional Images"}),d.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:R,className:"mt-1 block w-full"}),g&&n.additionalImages.length===0&&d.jsx("p",{className:"text-gray-600 text-sm",children:"Leave blank to keep existing additional images."})]}),d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsx("button",{type:"submit",disabled:i,className:`px-6 py-2 bg-[#6F3A19] text-white rounded hover:bg-[#5a3216] transition-colors duration-300 ${i?"opacity-50 cursor-not-allowed":""}`,children:g?i?"Updating...":"Update Product":i?"Adding...":"Add Product"}),g&&d.jsx("button",{type:"button",onClick:()=>{v(null),e({name:"",price:"",category:"",description:"",details:{material:"",dimensions:"",careInstructions:"",warranty:""},variants:[]}),r({primaryImage:null,additionalImages:[]})},className:"px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors duration-300",children:"Cancel"})]})]}),d.jsxs("div",{children:[d.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Existing Products"}),f.length===0?d.jsx("p",{children:"No products available."}):d.jsx("div",{className:"overflow-x-auto",children:d.jsxs("table",{className:"min-w-full bg-white",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{className:"py-2 px-4 border-b",children:"Image"}),d.jsx("th",{className:"py-2 px-4 border-b",children:"Name"}),d.jsx("th",{className:"py-2 px-4 border-b",children:"Price (₹)"}),d.jsx("th",{className:"py-2 px-4 border-b",children:"Category"}),d.jsx("th",{className:"py-2 px-4 border-b",children:"Variants"}),d.jsx("th",{className:"py-2 px-4 border-b",children:"Actions"})]})}),d.jsx("tbody",{children:f.map(_=>d.jsxs("tr",{className:"text-center",children:[d.jsx("td",{className:"py-2 px-4 border-b",children:d.jsx("img",{src:_.primaryImage||"https://via.placeholder.com/64",alt:_.name,className:"w-16 h-16 object-cover rounded"})}),d.jsx("td",{className:"py-2 px-4 border-b",children:_.name}),d.jsx("td",{className:"py-2 px-4 border-b",children:_.price.toFixed(2)}),d.jsx("td",{className:"py-2 px-4 border-b capitalize",children:_.category}),d.jsx("td",{className:"py-2 px-4 border-b",children:_.variants&&_.variants.length>0?d.jsx("ul",{className:"text-left",children:_.variants.map(x=>d.jsxs("li",{children:["Size: ",x.size,", Color: ",x.color,", Stock: ",x.stock]},x.id))}):"N/A"}),d.jsxs("td",{className:"py-2 px-4 border-b space-x-2",children:[d.jsx("button",{onClick:()=>I(_),className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200",children:"Edit"}),d.jsx("button",{onClick:()=>w(_.id),className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200",children:"Delete"})]})]},_.id))})]})})]})]})}),d.jsx(xt,{})]})},AL=()=>{const{currentUser:t}=Ri(),[e,n]=D.useState([]),[r,i]=D.useState(!0),[s,o]=D.useState(""),l=Gn(),c=async()=>{if(!t){o("You need to be logged in to view orders."),i(!1);return}try{const u=await Mj(t.uid);n(u)}catch(u){console.error("Error fetching orders:",u),o("Failed to load orders.")}finally{i(!1)}};return D.useEffect(()=>{c()},[t]),d.jsxs("div",{className:"flex flex-col min-h-screen",children:[d.jsx(ls,{}),d.jsxs("main",{className:"flex-grow bg-gray-100 p-8",children:[d.jsx("h2",{className:"text-3xl font-kalam text-[#6F3A19] mb-6",children:"My Orders"}),r?d.jsx("p",{children:"Loading orders..."}):s?d.jsx("p",{className:"text-red-500",children:s}):e.length===0?d.jsx("p",{children:"You have no orders yet."}):d.jsx("div",{className:"overflow-x-auto",children:d.jsxs("table",{className:"min-w-full bg-white rounded shadow",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{className:"py-2 px-4 border-b",children:"Order ID"}),d.jsx("th",{className:"py-2 px-4 border-b",children:"Date"}),d.jsx("th",{className:"py-2 px-4 border-b",children:"Total"}),d.jsx("th",{className:"py-2 px-4 border-b",children:"Payment Method"}),d.jsx("th",{className:"py-2 px-4 border-b",children:"Status"}),d.jsx("th",{className:"py-2 px-4 border-b",children:"Actions"})]})}),d.jsx("tbody",{children:e.map(u=>{var f;return d.jsxs("tr",{className:"text-center",children:[d.jsx("td",{className:"py-2 px-4 border-b",children:u.id}),d.jsx("td",{className:"py-2 px-4 border-b",children:((f=u.createdAt)==null?void 0:f.toDate().toLocaleDateString())||"N/A"}),d.jsxs("td",{className:"py-2 px-4 border-b",children:["₹",u.totalAmount.toFixed(2)]}),d.jsx("td",{className:"py-2 px-4 border-b",children:u.paymentMethod}),d.jsx("td",{className:"py-2 px-4 border-b",children:u.status}),d.jsx("td",{className:"py-2 px-4 border-b",children:d.jsx("button",{onClick:()=>l(`/orders/${u.id}`),className:"text-blue-500 hover:underline",children:"View"})})]},u.id)})})]})})]}),d.jsx(xt,{})]})},RL=()=>{const{currentUser:t}=Ri(),[e,n]=D.useState([]),[r,i]=D.useState(!0),[s,o]=D.useState(!1),l=Gn(),c=async()=>{if(!t){o("You need to be logged in to view favourites."),i(!1);return}try{const u=Si(tt,"users",t.uid,"favourites"),f=Hp(u,Qp("addedAt","desc")),p=await Su(f),g=[];for(let v of p.docs){const C=v.data(),N=ht(tt,"products",C.productId),k=await Ai(N);k.exists()&&g.push({id:v.id,productId:C.productId,addedAt:C.addedAt,product:k.data()})}n(g)}catch(u){console.error("Error fetching favourites:",u),o("Failed to load favourites.")}finally{i(!1)}};return D.useEffect(()=>{c()},[t]),d.jsxs("div",{className:"flex flex-col min-h-screen",children:[d.jsx("div",{className:"container mx-auto px-4 py-8 pt-[25px]"}),d.jsxs("main",{className:"flex-grow bg-gray-100 p-8",children:[d.jsx("h2",{className:"text-3xl font-kalam text-[#6F3A19] mb-6",children:"My Favourites"}),r?d.jsx("p",{children:"Loading favourites..."}):s?d.jsx("p",{className:"text-red-500",children:s}):e.length===0?d.jsx("p",{children:"You have no favourite products yet."}):d.jsx("div",{className:"overflow-x-auto",children:d.jsxs("table",{className:"min-w-full bg-white rounded shadow",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{className:"py-2 px-4 border-b",children:"Product Image"}),d.jsx("th",{className:"py-2 px-4 border-b",children:"Product Name"}),d.jsx("th",{className:"py-2 px-4 border-b",children:"Category"}),d.jsx("th",{className:"py-2 px-4 border-b",children:"Price"}),d.jsx("th",{className:"py-2 px-4 border-b",children:"Added On"}),d.jsx("th",{className:"py-2 px-4 border-b",children:"Actions"})]})}),d.jsx("tbody",{children:e.map(u=>{var f;return d.jsxs("tr",{className:"text-center",children:[d.jsx("td",{className:"py-2 px-4 border-b",children:d.jsx("img",{src:u.product.primaryImage,alt:u.product.name,className:"w-16 h-16 object-cover mx-auto"})}),d.jsx("td",{className:"py-2 px-4 border-b",children:u.product.name}),d.jsx("td",{className:"py-2 px-4 border-b capitalize",children:u.product.category}),d.jsxs("td",{className:"py-2 px-4 border-b",children:["$",u.product.price.toFixed(2)]}),d.jsx("td",{className:"py-2 px-4 border-b",children:((f=u.addedAt)==null?void 0:f.toDate().toLocaleDateString())||"N/A"}),d.jsxs("td",{className:"py-2 px-4 border-b",children:[d.jsx("button",{onClick:()=>l(`/products/${u.productId}`),className:"text-blue-500 hover:underline mr-2",children:"View"}),d.jsx("button",{onClick:()=>alert("Remove from favourites functionality coming soon!"),className:"text-red-500 hover:underline",children:"Remove"})]})]},u.id)})})]})})]}),d.jsx(xt,{})]})},CL=()=>{var c;const t=ru(),e=Gn(),[n,r]=D.useState(null),[i,s]=D.useState(!0),[o,l]=D.useState("");return D.useEffect(()=>{(async()=>{var f;try{const p=((f=t.state)==null?void 0:f.orderId)||new URLSearchParams(t.search).get("orderId");if(!p){l("No order ID found"),s(!1);return}const g=await JI(p);g?r(g):l("Order not found"),s(!1)}catch(p){console.error("Error fetching order details:",p),l("Failed to load order details."),s(!1)}})()},[t]),i?d.jsxs("div",{className:"flex flex-col min-h-screen",children:[d.jsx("div",{className:"container mx-auto px-4 py-8 pt-[100px]",children:d.jsx("div",{className:"flex justify-center items-center",children:d.jsx("p",{className:"text-lg",children:"Loading order details..."})})}),d.jsx(xt,{})]}):o?d.jsxs("div",{className:"flex flex-col min-h-screen",children:[d.jsx("div",{className:"container mx-auto px-4 py-8 pt-[100px]",children:d.jsxs("div",{className:"text-center",children:[d.jsx("p",{className:"text-red-500 text-lg mb-4",children:o}),d.jsx("button",{onClick:()=>e("/"),className:"px-6 py-3 bg-[#6F3A19] text-white rounded-lg hover:bg-[#5a3216] transition-colors duration-200",children:"Return to Home"})]})}),d.jsx(xt,{})]}):d.jsxs("div",{className:"flex flex-col min-h-screen",children:[d.jsx("div",{className:"container mx-auto px-4 py-8 pt-[100px]",children:d.jsx("main",{className:"flex-grow bg-white p-8",children:d.jsxs("section",{className:"text-center",children:[d.jsx("h2",{className:"text-4xl font-bold text-[#6F3A19] mb-4",children:"Thank You for Your Order!"}),d.jsx("p",{className:"text-lg text-gray-700 mb-8",children:"Your order has been successfully placed."}),n&&d.jsxs("div",{className:"bg-gray-100 p-6 rounded-lg mb-6",children:[d.jsx("h3",{className:"text-2xl font-semibold text-[#6F3A19] mb-4",children:"Order Details"}),d.jsxs("p",{children:[d.jsx("strong",{children:"Order ID:"})," ",n.id]}),d.jsxs("p",{children:[d.jsx("strong",{children:"Order Date:"})," ",(c=n.createdAt)==null?void 0:c.toDate().toLocaleString()]}),d.jsxs("p",{children:[d.jsx("strong",{children:"Total Amount:"})," ₹",n.totalAmount.toFixed(2)]}),d.jsxs("p",{children:[d.jsx("strong",{children:"Payment Method:"})," ",n.paymentMethod]}),d.jsxs("div",{className:"mt-4",children:[d.jsx("h4",{className:"text-xl font-semibold text-[#6F3A19] mb-2",children:"Shipping Address"}),d.jsx("p",{children:n.address.fullName}),d.jsx("p",{children:n.address.street}),d.jsxs("p",{children:[n.address.city,", ",n.address.district]}),d.jsxs("p",{children:[n.address.state," - ",n.address.pincode]}),d.jsx("p",{children:n.address.country})]}),d.jsxs("div",{className:"mt-4",children:[d.jsx("h4",{className:"text-xl font-semibold text-[#6F3A19] mb-2",children:"Order Items"}),n.cartItems.map((u,f)=>d.jsxs("div",{className:"flex justify-between items-center border-b py-2",children:[d.jsxs("div",{className:"text-left",children:[d.jsx("p",{className:"font-medium",children:u.name}),d.jsxs("p",{className:"text-sm text-gray-600",children:["Quantity: ",u.quantity,u.size&&` | Size: ${u.size}`,u.color&&` | Color: ${u.color}`]})]}),d.jsxs("p",{className:"font-medium",children:["₹",(u.price*u.quantity).toFixed(2)]})]},f))]})]}),d.jsx("button",{onClick:()=>e("/"),className:"px-6 py-3 bg-[#6F3A19] text-white rounded-lg hover:bg-[#5a3216] transition-colors duration-200",children:"Continue Shopping"})]})})}),d.jsx(xt,{})]})},PL=()=>{var c,u;const{orderId:t}=Uw(),e=Gn(),[n,r]=D.useState(null),[i,s]=D.useState(!0),[o,l]=D.useState("");return D.useEffect(()=>{(async()=>{try{const p=await JI(t);p?r(p):l("Order not found.")}catch(p){console.error("Error fetching order:",p),l("Failed to load order details.")}finally{s(!1)}})()},[t]),i?d.jsxs("div",{className:"flex flex-col min-h-screen",children:[d.jsx(ls,{}),d.jsx("main",{className:"flex-grow bg-gray-100 p-8 pt-[100px]",children:d.jsx("div",{className:"flex justify-center items-center",children:d.jsx("p",{className:"text-lg",children:"Loading order details..."})})}),d.jsx(xt,{})]}):o?d.jsxs("div",{className:"flex flex-col min-h-screen",children:[d.jsx(ls,{}),d.jsx("main",{className:"flex-grow bg-gray-100 p-8 pt-[100px]",children:d.jsxs("div",{className:"text-center",children:[d.jsx("p",{className:"text-red-500 text-lg mb-4",children:o}),d.jsx("button",{onClick:()=>e("/orders"),className:"px-6 py-3 bg-[#6F3A19] text-white rounded-lg hover:bg-[#5a3216] transition-colors duration-200",children:"Back to Orders"})]})}),d.jsx(xt,{})]}):d.jsxs("div",{className:"flex flex-col min-h-screen",children:[d.jsx(ls,{}),d.jsxs("main",{className:"flex-grow bg-gray-100 p-8 pt-[100px]",children:[d.jsx("h2",{className:"text-3xl font-kalam text-[#6F3A19] mb-6",children:"Order Details"}),d.jsxs("div",{className:"bg-white p-6 rounded shadow",children:[d.jsxs("div",{className:"mb-4",children:[d.jsxs("p",{children:[d.jsx("strong",{children:"Order ID:"})," ",n.id]}),d.jsxs("p",{children:[d.jsx("strong",{children:"Order Date:"})," ",(c=n.createdAt)==null?void 0:c.toDate().toLocaleString()]}),d.jsxs("p",{children:[d.jsx("strong",{children:"Total Amount:"})," ₹",n.totalAmount.toFixed(2)]}),d.jsxs("p",{children:[d.jsx("strong",{children:"Payment Method:"})," ",n.paymentMethod]}),d.jsxs("p",{children:[d.jsx("strong",{children:"Status:"})," ",n.status]})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("h3",{className:"text-2xl font-semibold text-[#6F3A19] mb-2",children:"Shipping Address"}),d.jsx("p",{children:n.address.fullName}),d.jsx("p",{children:n.address.street}),d.jsxs("p",{children:[n.address.city,", ",n.address.district]}),d.jsxs("p",{children:[n.address.state," - ",n.address.pincode]}),d.jsx("p",{children:n.address.country})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("h3",{className:"text-2xl font-semibold text-[#6F3A19] mb-2",children:"Order Items"}),d.jsx("ul",{className:"list-disc list-inside",children:n.cartItems.map((f,p)=>d.jsx("li",{className:"mb-2",children:d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsxs("div",{children:[d.jsx("p",{className:"font-medium",children:f.name}),d.jsxs("p",{className:"text-sm text-gray-600",children:["Quantity: ",f.quantity,f.size&&` | Size: ${f.size}`,f.color&&` | Color: ${f.color}`]})]}),d.jsxs("p",{className:"font-medium",children:["₹",(f.price*f.quantity).toFixed(2)]})]})},p))})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("h3",{className:"text-2xl font-semibold text-[#6F3A19] mb-2",children:"Shipping Details"}),d.jsxs("p",{children:[d.jsx("strong",{children:"Shipping Method:"})," Standard Shipping"]}),d.jsxs("p",{children:[d.jsx("strong",{children:"Estimated Delivery:"})," ",new Date(((u=n.createdAt)==null?void 0:u.toDate().getTime())+7*24*60*60*1e3).toLocaleDateString()]})]}),d.jsx("div",{className:"flex justify-end",children:d.jsxs("p",{className:"text-xl font-semibold",children:["Total: ₹",n.totalAmount.toFixed(2)]})})]}),d.jsx("button",{onClick:()=>e("/orders"),className:"mt-6 px-6 py-3 bg-[#6F3A19] text-white rounded-lg hover:bg-[#5a3216] transition-colors duration-200",children:"Back to Orders"})]}),d.jsx(xt,{})]})};function kL(){return d.jsx(jj,{children:d.jsx(rT,{children:d.jsxs(nR,{children:[d.jsx(ls,{}),d.jsxs(ZA,{children:[d.jsx(Wt,{path:"/",element:d.jsx(iL,{})}),d.jsx(Wt,{path:"/products",element:d.jsx(hL,{})}),d.jsx(Wt,{path:"/product/:id",element:d.jsx(fL,{products:mL})}),d.jsx(Wt,{path:"/about",element:d.jsx(pL,{})}),d.jsx(Wt,{path:"/profile",element:d.jsx(gL,{})}),d.jsx(Wt,{path:"/cart",element:d.jsx(EL,{})}),d.jsx(Wt,{path:"/add-product",element:d.jsx(SL,{})}),d.jsx(Wt,{path:"/orders",element:d.jsx(AL,{})}),d.jsx(Wt,{path:"/favorites",element:d.jsx(RL,{})}),d.jsx(Wt,{path:"/confirmation",element:d.jsx(CL,{})}),d.jsx(Wt,{path:"/order-details/:orderId",element:d.jsx(PL,{})})]})]})})})}const NL=Nw(document.getElementById("root"));NL.render(d.jsx(C_.StrictMode,{children:d.jsx(kL,{})}));
