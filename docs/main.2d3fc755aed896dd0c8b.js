(()=>{"use strict";var e={994:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([e.id,"h1 {\n    color: indigo;\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);n&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var u=e[c],s=n.base?u[0]+n.base:u[0],l=a[s]||0,d="".concat(s," ").concat(l);a[s]=l+1;var f=r(d),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var v=o(p,n);n.byIndex=c,t.splice(c,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function o(e,t){var r=t.domAPI(t);r.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var u=n(e,o),s=0;s<a.length;s++){var l=r(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=u}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),a=r(569),i=r.n(a),c=r(565),u=r.n(c),s=r(216),l=r.n(s),d=r(589),f=r.n(d),p=r(994),v={};v.styleTagTransform=f(),v.setAttributes=u(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l();t()(p.Z,v);p.Z&&p.Z.locals&&p.Z.locals;function m(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=[],b=["C","D","H","S"],g=["A","J","Q","K"],S=0,w=0,T=document.querySelector("#btnNewGame"),x=document.querySelector("#btnGetCard"),C=document.querySelector("#btnStop"),M=document.querySelector("#scorePlayer"),A=document.querySelector("#scoreComputer"),L=document.querySelector("#player-cards"),E=document.querySelector("#computer-cards"),H=function(){h=I(),S=0,w=0,M.innerText=0,A.innerText=0,L.innerHTML="",E.innerHTML="";for(var e=0;e<3;e++)j("red_back",E)},I=function(){h=[];for(var e=2;e<=10;e++){var t,r=m(b);try{for(r.s();!(t=r.n()).done;){var n=t.value;h.push(e+n)}}catch(e){r.e(e)}finally{r.f()}}var o,a=m(b);try{for(a.s();!(o=a.n()).done;){var i,c=o.value,u=m(g);try{for(u.s();!(i=u.n()).done;){var s=i.value;h.push(s+c)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){a.e(e)}finally{a.f()}return _.shuffle(h)},q=function(){if(0===h.length)throw"No cards in the deck.";return h.pop()},N=function(e){var t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},j=function(e,t){var r=document.createElement("img");r.src="assets/cartas/".concat(e,".png"),r.classList.add("img-card"),t.append(r)},k=function(){setTimeout((function(){21===S?alert("21, Congratulations! Player wins!"):S===w?alert("Game tied, nobody wins!"):S>21?alert("Computer wins!"):w>21?alert("Congratulations! Player wins!"):w>S&&alert("Computer wins!")}),1e3)},P=function(e){do{var t=q();if(j(t,E),w+=N(t),A.innerHTML=w,e>21)break}while(w<e&&w<=21)};x.addEventListener("click",(function(){var e=q();j(e,L),S+=N(e),M.innerHTML=S,S>=21&&(x.disabled=!0,C.disabled=!0,E.innerHTML="",P(S),k())})),C.addEventListener("click",(function(){S>0?(x.disabled=!0,C.disabled=!0,E.innerHTML="",P(S),k()):alert("0 points, get at least one card!")})),T.addEventListener("click",(function(){H(),x.disabled=!1,C.disabled=!1})),H()})()})();