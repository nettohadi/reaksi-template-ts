(()=>{var e={87:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".box {\r\n    background-color: aquamarine;\r\n    border: 2px solid purple;\r\n}",""]);const i=o},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(o[u]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);r&&o[a[0]]||(t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),n.push(a))}},n}},966:e=>{var n;self,n=function(){return(()=>{"use strict";var e={d:(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length,r=new Array(t>2?t-2:0),i=2;i<t;i++)r[i-2]=arguments[i];var u=c(r);return{type:e,children:u,props:o(o({},n),{},{children:u})}}function c(e){var n;return(n=[]).concat.apply(n,function(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e)).reduce((function(e,n){return n instanceof Object?e.push(n):"boolean"==typeof n?e.push(u("boolean",{textContent:n})):e.push(u("text",{textContent:n})),e}),[])}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}e.r(n),e.d(n,{ReduxProvider:()=>Oe,Route:()=>me,Router:()=>se,componentHooks:()=>ge,createContext:()=>W,default:()=>we,render:()=>_,useContext:()=>X,useDispatch:()=>oe,useEffect:()=>D,useRef:()=>ae,useRouter:()=>he,useSelector:()=>re,useState:()=>N});var f="Fragment",p=[],d={get:function(){return p},getIdByKey:function(e){var n=x();if(!n)return 0;var t=d.get().find((function(e){return e.componentName===(null==n?void 0:n.name)}));if(t&&t.hookLastId.hasOwnProperty(e))return++t.hookLastId[e];if(!t){var r=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({},e,1);return d.add({componentName:n.name||"",hookLastId:r}),1}return t.hookLastId.hasOwnProperty(e)||(t.hookLastId[e]=1),1},reset:function(){p=[]},add:function(e){p.push(e)}};function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){y(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h,b=[],g=0,O=[],w=[];function j(e){e.length&&(w=w.concat(e))}function E(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;g++;var i=S(t);r.key&&(t=t+"_"+r.key);var u="Provider";return i&&!r.key&&t!==u&&"Fragment"!==t&&"Route"!==t?(console.warn('You need to specify a key for "'.concat(t,'" \n                         if you want to use it more than once')),t=t+"_"+(o||"")):i&&(t=t+"_"+r.key),O.push(t),h={factory:e,id:g,container:n,name:t,props:r},t}function S(e){return O.includes(e)}function x(){return h}function P(e,n){var t=b.find((function(e){var t;return(null===(t=e.component)||void 0===t?void 0:t.name)==n}));t&&t.component&&(t.component.node=e)}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!h)throw new Error("Hook can not be called outside function component, inside condition, loop, or nested function");return C(e)}function A(e,n){var t=b.find((function(n){var t;return(null===(t=n.component)||void 0===t?void 0:t.name)===e}));t&&t.component&&(t.component.node=n)}function C(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=d.getIdByKey("STATE")||1,r=b.find((function(e){var n,r;return e.id===t&&(null===(n=e.component)||void 0===n?void 0:n.name)===(null===(r=h)||void 0===r?void 0:r.name)}));if(r)return r.component&&(r.component.props=null===(e=h)||void 0===e?void 0:e.props),[r.value,r.set];var o=h||{name:""},i=o.name,u={id:t,value:n,set:function(e){k(e,t,i||"")},component:h};return b.push(u),[u.value,u.set]}function k(e,n,t){var r=b.find((function(e){var r;return e.id==n&&(null===(r=e.component)||void 0===r?void 0:r.name)===t}));if(r){var o=e;if("function"==typeof e&&(o=e(r.value)),r&&r.value!==o){var i,u,c,a,l,p,v;r.value=o,g=r.component?r.component.id:0,h=r.component?m({},r.component):null,d.reset(),O.push((null===(i=r.component)||void 0===i?void 0:i.name)||"");var y=null===(u=r.component)||void 0===u?void 0:u.factory(null===(c=r.component)||void 0===c?void 0:c.props);(y=function(e,n){var t,r,o=null===(t=n.component)||void 0===t||null===(r=t.node)||void 0===r?void 0:r._vNode;if((e.type===f||e.type.name===f)&&o){var i=function(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(o.children);null==i||i.forEach((function(t,r){var o,u,c;t.type.name!==(null===(o=n.component)||void 0===o?void 0:o.name)&&t.componentName!==(null===(u=n.component)||void 0===u?void 0:u.name)||(i[r]=m(m({},e),{},{componentName:null===(c=n.component)||void 0===c?void 0:c.name}))})),o.children=i,e=o}return e}(y,r)).componentName=(null===(a=r.component)||void 0===a?void 0:a.name)||"",null!==(l=r.component)&&void 0!==l&&l.container&&function(e,n,t){e&&n&&(B(e,n,t=t||n.firstChild),M(),z())}(y,null===(p=r.component)||void 0===p?void 0:p.container,null===(v=r.component)||void 0===v?void 0:v.node)}}}var I=[],R=[],T=[];function D(e){var n,t,r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=d.getIdByKey("EFFECT")||1,u=I.find((function(e){var n;return e.id==i&&e.componentName==(null===(n=x())||void 0===n?void 0:n.name)}));u?L(u.deps,o)&&(u.deps=o,R.push({effect:e,componentName:(null===(n=x())||void 0===n?void 0:n.name)||""})):(I.push({id:i,deps:o,componentName:(null===(t=x())||void 0===t?void 0:t.name)||""}),R.push({effect:e,componentName:(null===(r=x())||void 0===r?void 0:r.name)||""}))}function L(e,n){return!e||e.length!==(null==n?void 0:n.length)||(null==n?void 0:n.some((function(n,t){return n!==e[t]})))}function M(){!function(){var e=w;T.filter((function(n){return e.includes(n.componentName)})).forEach((function(e){e.effect()})),T=T.filter((function(n){return!e.includes(n.componentName)})),I=I.filter((function(n){return!e.includes(n.componentName)})),w=[]}(),R.forEach((function(e,n){R=R.slice(n,n);var t=e.effect();"function"==typeof t&&T.push({effect:t,componentName:e.componentName})}))}function _(e,n){if(e&&n){var t=n.firstChild;t?B(e,n,t):U(e,n),M(),z()}}function B(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e=K(e,n,r);var o=t&&t._vNode;if(o)if(e.type!==f){if(e.type!==o.type||e.componentName&&e.componentName!==o.componentName){var i=Z(e);i=H(i,e,null),A(e.componentName||"",i),n.replaceChild(i,t),t.replacedBy=i,o.componentName&&j([o.componentName]),e.children.forEach((function(e,n){U(e,i,n)}))}else t=H(t,e,o),e.children.forEach((function(e,n){"boolean"!==e.type&&B(e,t,t.childNodes[n],n)}));F(e.children,o.children);var u=t.childNodes;if(u.length>e.children.length)for(var c=u.length-1;c>=e.children.length;c-=1)u[c].remove();else u.length===e.children.length&&e.children.forEach((function(e,n){"boolean"===e.type&&(u[n]._vNode.componentName,u[n].remove())}))}else{var a=t;e.children.forEach((function(e,r){var o,i;r>0&&(a=(null===(o=t)||void 0===o?void 0:o.nextSibling)||(null===(i=t.replacedBy)||void 0===i?void 0:i.nextSibling)),B(e,n,a,r)}))}else U(e,n)}function F(e,n){var t=$(n),r=$(e),o=t.filter((function(e){return!r.includes(e)}));o.length&&j(o)}function $(e){var n=[],t=[];return e.forEach((function(e,r){if("function"==typeof e.type){var o=e.type.name;n.includes(e.type.name)?o+=e.props.key?"_"+e.props.key:"_"+r:n.push(o),t.push(o)}})),t}function H(e,n,t){return(e="text"==n.type?function(e,n,t){var r;return t?(n.props.textContent!==(null===(r=t.props)||void 0===r?void 0:r.textContent)&&(e.textContent=n.props.textContent),e):e}(e,n,t):t?function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=n.props||{},o=(null==t?void 0:t.props)||{};return Object.keys(r).forEach((function(n){var t=r[n],i=o[n];t!==i&&J(e,n,t,i)})),Object.keys(o).forEach((function(n){var t=r[n],i=o[n];t||("on"===n.slice(0,2)?e.removeEventListener(n,i,!1):"children"!==n&&e.removeAttribute(n))})),e}(e,n,t):function(e,n){var t=n.props||{};return Object.keys(t).forEach((function(n){J(e,n,t[n],null)})),e}(e,n))._vNode=n,e}function U(e,n){var t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=(e=K(e,n,r)).type===f?n:q(e,n);e.componentName&&P(o,e.componentName),null===(t=e.children)||void 0===t||t.forEach((function(e,n){U(e,o,n)}))}function K(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e&&"function"==typeof e.type){var r=e.type,o=e.type.name,i=e,u=i.props,c=E(r,n,o,u,t);(e=r(e.props))&&"function"==typeof e.type&&(e=K(e,n)),e.componentName=c}return e}function Z(e){var n;return n="text"===e.type?document.createTextNode(e.props.textContent):document.createElement(e.type),e.props.hasOwnProperty("ref")&&e.props.ref.hasOwnProperty("current")&&(e.props.ref.current=n),n}function q(e,n){var t=Z(e);return t=H(t,e,null),n.appendChild(t),t}function J(e,n,t,r){if("on"===(n=n.toLowerCase()).slice(0,2)){var o=n.toLowerCase().slice(2);e.addEventListener(o,t,!1),r&&e.removeEventListener(o,r,!1)}else"value"===n||"checked"===n?e[n]=t:"children"!==n&&("className"===n?e.setAttribute("class",t):"style"===n&&function(e){return"object"===a(e)&&!!e}(t)?e.setAttribute(n,function(e){var n="";for(var t in e)n+="".concat(l(t),":").concat(Y(e[t]),";");return n}(t)):e.setAttribute(n,t))}function Y(e){return"number"==typeof e?"".concat(e,"px"):e}function z(){d.reset(),g=0,O=[],h=null}var G=[],Q=0;function V(e,n){var t=G.find((function(n){return n.id==e}));return t&&(t.value=n.value),{type:"div",children:n.children,props:n}}function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=++Q,t={Provider:function(e){return V(n,e)},id:Q,value:e};return G.push(t),t}function X(e){var n;return(null===(n=G.find((function(n){return n.id==e.id})))||void 0===n?void 0:n.value)||null}function ee(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var ne={},te=[];function re(e){var n=e(ne.getState()),t=function(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var r,o,i=[],u=!0,c=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(e){c=!0,o=e}finally{try{u||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return ee(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ee(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(N(n),2)[1],r=d.getIdByKey("SELECTOR")||1,o=x();return te.find((function(e){return e.id===r&&e.componentName===(null==o?void 0:o.name)}))||(te.push({id:r,componentName:(null==o?void 0:o.name)||""}),ne.subscribe((function(){t(e(ne.getState()))}))),n}function oe(){return ne.dispatch}var ie,ue,ce=[];function ae(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=d.getIdByKey("REF"),r=null===(e=x())||void 0===e?void 0:e.name,o=ce.find((function(e){return e.id===t&&e.componentName===r}));if(!r)throw new Error("useRef cannot be used outside Component");if(!o){var i={id:t,componentName:r,value:{current:n}};return ce.push(i),i.value}return o.value}function le(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function fe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?le(Object(t),!0).forEach((function(n){pe(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):le(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function pe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function de(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function se(e){var n=function(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var r,o,i=[],u=!0,c=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(e){c=!0,o=e}finally{try{u||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return de(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?de(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(N(window.location.pathname+window.location.search),2),t=n[0],r=n[1];ue=t,ye.path=t,ie=r;var o=e.children,i=[];o.forEach((function(e){if("function"==typeof e.type&&"Route"===e.type.name){var n=e.type(e.props);"empty"!==n.type&&i.push(n)}else i.push(e)}));var u=fe(fe({},e),{},{children:i});return{type:f,children:u.children,props:u}}W(null);var ve={};function me(e){var n=ue,t=e.exact||!1,r=be(e.path||"",t).value.exec(n);return ve=fe(fe({},ve),function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=be(n||"",t),o=r.value.exec(e),i=r.pattern.exec(n),u={};return o&&i&&o.length&&i.length&&o.forEach((function(e,n){var t=i[n].replace(/\[|\]/gi,"");0!==n&&(u[t]=e)})),u}(n,e.path,t)),function(e){e.forEach((function(e){if("function"==typeof e.type&&"Route"===e.type.name)throw new Error("Route can not be nested inside Route")}))}(e.children),{type:r?f:"empty",children:e.children,props:{}}}var ye={push:function(e){window.history.pushState({},"",e),ie(e)},path:"",getParam:function(e){return ve[e]}};function he(){return ye}function be(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=e.replace(/\//gi,"\\/"),r=(t=(t=t.replace(/\?/gi,"\\?")).replace(/\[\w+\]/gi,"(\\[\\w+\\])")).replace(/\\\[|\\\]/gi,"");return{pattern:new RegExp(t+(n?"$":""),"gi"),value:new RegExp(r+(n?"$":""),"gi")}}var ge=new Map,Oe=function(e){ne=e.store||{};var n=e.children;return{type:f,children:n,props:{children:n}}};const we={render:_,createElement:u,useState:N,useEffect:D,useContext:X,createContext:W,useSelector:re,useDispatch:oe,ReduxProvider:Oe,useRef:ae,Router:se,Route:me,useRouter:he,Fragment:function(e){return{type:f,children:e.children,props:e}}};return n})()},e.exports=n()},379:(e,n,t)=>{"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),u=[];function c(e){for(var n=-1,t=0;t<u.length;t++)if(u[t].identifier===e){n=t;break}return n}function a(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],l=t[a]||0,f="".concat(a," ").concat(l);t[a]=l+1;var p=c(f),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(u[p].references++,u[p].updater(d)):u.push({identifier:f,updater:y(d,n),references:1}),r.push(f)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var u=i(e.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(n)}return n}var f,p=(f=[],function(e,n){return f[e]=n,f.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(n,o);else{var i=document.createTextNode(o),u=e.childNodes;u[n]&&e.removeChild(u[n]),u.length?e.insertBefore(i,u[n]):e.appendChild(i)}}function s(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,m=0;function y(e,n){var t,r,o;if(n.singleton){var i=m++;t=v||(v=l(n)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=l(n),r=s.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);u[o].references--}for(var i=a(e,n),l=0;l<t.length;l++){var f=c(t[l]);0===u[f].references&&(u[f].updater(),u.splice(f,1))}t=i}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";var e=t(966),n=t.n(e);function r(){return n().createElement("div",null,n().createElement("h1",null,"Home"))}function o(){return n().createElement("div",null,n().createElement("h1",null,"About"))}var i=t(379),u=t.n(i),c=t(87),a={insert:"head",singleton:!1};u()(c.Z,a);c.Z.locals;n().render(n().createElement((function(){var t=(0,e.useRouter)();return n().createElement(e.Router,null,n().createElement("div",null,n().createElement("button",{onclick:function(){return t.push("/")}},"Home"),n().createElement("button",{onclick:function(){return t.push("/about")}},"About")),n().createElement(e.Route,{path:"/",exact:!0},n().createElement(r,null)),n().createElement(e.Route,{path:"/about",exact:!0},n().createElement(o,null)))}),null),document.getElementById("root"))})()})();