!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("PayKeyboard",[],e):"object"==typeof exports?exports.PayKeyboard=e():t.PayKeyboard=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,n){function o(t){n(7)}var i=n(5)(n(1),n(6),o,"data-v-7c990886",null);t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=null;e.default={name:"vue-pay-keyboard",props:{payTitle:{type:String,default:"请输入支付密码"},highlightColor:{type:String,default:"#ccc"},pasDigits:{type:Number,default:6},isPay:{type:Boolean,default:!1}},data:function(){return{keyShow:!0,lodingShow:!1,paySuc:!1,val:[],keyList:[[1,2,3],[4,5,6],[7,8,9]]}},methods:{inputEnd:function(t,e){this.unhighLight(t.currentTarget,e)},unhighLight:function(t,e){t.style.backgroundColor=e?"#e8e8e8":"#fff"},highlight:function(t){t.style.backgroundColor=this.highlightColor},inputStart:function(t,e){var n=this;this.val.length<this.pasDigits?(this.val.push(t),this.val.length===this.pasDigits&&(this.$emit("pasEnd",this.val.join("")),this.keyShow=!1,this.lodingShow=!0,this.val=[],o=setTimeout(function(){clearTimeout(o),n.lodingShow=!1,n.paySuc=!0,setTimeout(function(){n.$emit("close"),n.keyShow=!0,n.paySuc=!1},800)},2e3))):this.$emit("pasEnd",this.val.join("")),this.highlight(e.currentTarget)},del:function(){this.val.length>0&&this.val.pop()},close:function(){this.$emit("close")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=n.n(o),a={install:function(t,e){t.component(i.a.name,i.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(a),e.default=a},function(t,e,n){e=t.exports=n(4)(),e.push([t.i,'div[data-v-7c990886],input[data-v-7c990886],span[data-v-7c990886]{-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}input[data-v-7c990886]{background:none;outline:none;border:none;background-color:transparent;border-color:transparent;-webkit-appearance:none}@keyframes loadingRotate-data-v-7c990886{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.title[data-v-7c990886]{text-align:center;height:50px;line-height:50px;margin-bottom:25px;position:relative}.pa[data-v-7c990886]{position:absolute;right:15px;top:50%;transform:translateY(-50%);display:flex;align-content:center;justify-content:center}.loading[data-v-7c990886]{display:flex;align-items:center;justify-content:center;animation:loadingRotate-data-v-7c990886 .8s infinite}.pay-box[data-v-7c990886]{z-index:111;position:fixed;left:0;top:0;width:100%;height:100%;overflow-x:hidden;overflow-y:hidden;background-color:rgba(0,0,0,.5);z-index:999}.pay-box>div[data-v-7c990886]{position:absolute;width:100%;height:68%;left:0;bottom:0;background-color:#fff}.v-1px-b[data-v-7c990886],.v-1px-l[data-v-7c990886],.v-1px-t[data-v-7c990886],.v-1px[data-v-7c990886]{position:relative}.v-1px-b[data-v-7c990886]:after{content:" ";bottom:0;border-bottom:1px solid #c7c7c7;transform-origin:0 100%}.v-1px-b[data-v-7c990886]:after,.v-1px-t[data-v-7c990886]:before{position:absolute;left:0;right:0;height:1px;color:#c7c7c7;transform:scaleY(.5)}.v-1px-t[data-v-7c990886]:before{z-index:112;top:0;content:"";border-top:1px solid #c7c7c7;transform-origin:0 0}.v-1px-l[data-v-7c990886]:before{position:absolute;left:0;top:0;bottom:0;width:1px;content:"";border-left:1px solid #c7c7c7;transform:scaleX(.5);color:#c7c7c7;transform-origin:0 0}.v-1px[data-v-7c990886]:before{position:absolute;left:0;top:0;width:200%;height:200%;content:"";border:1px solid #c7c7c7;transform:scale(.5);color:#c7c7c7;transform-origin:left top;z-index:1000}.key-box[data-v-7c990886]{position:absolute;left:0;bottom:0;width:100%;font-size:16px;color:#363636}.key-box .item[data-v-7c990886]{display:flex;text-align:center;line-height:50px;height:50px}.key-box .key[data-v-7c990886]{cursor:pointer;width:100%;height:100%;flex:1}.pas-box[data-v-7c990886]{width:80%;height:45px;display:flex;margin:0 auto;line-height:45px;text-align:center}.pas-box>div[data-v-7c990886]{flex:1;display:flex;align-items:center;justify-content:center}.pas-box>div>input[data-v-7c990886]{width:100%;font-size:18px;text-align:center;height:100%;display:block}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(o[a]=!0)}for(i=0;i<e.length;i++){var r=e[i];"number"==typeof r[0]&&o[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},function(t,e){t.exports=function(t,e,n,o,i){var a,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(a=t,r=t.default);var c="function"==typeof r?r.options:r;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),o&&(c._scopeId=o);var l;if(i?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):n&&(l=n),l){var d=c.functional,p=d?c.render:c.beforeCreate;d?c.render=function(t,e){return l.call(e),p(t,e)}:c.beforeCreate=p?[].concat(p,l):[l]}return{esModule:a,exports:r,options:c}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isPay?n("div",{staticClass:"pay-box"},[n("div",[n("div",{staticClass:"title v-1px-b pr"},[n("span",[t._v(t._s(t.payTitle))]),t._v(" "),n("span",{staticClass:"pa",on:{click:t.close}},[n("svg",{staticClass:"icon",attrs:{t:"1501505446265",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1904","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"18",height:"18"}},[n("path",{attrs:{d:"M550.659 490.565l324.395-324.386c10.945-10.945 10.945-28.699 0-39.644-10.948-10.95-28.704-10.95-39.648-0.004L511.01 450.916 186.625 126.53c-10.946-10.947-28.703-10.947-39.648 0-10.946 10.95-10.946 28.703 0 39.648l324.385 324.386-324.385 324.401c-10.946 10.944-10.946 28.703 0 39.65 10.945 10.943 28.702 10.943 39.648 0L511.01 530.213l324.396 324.401c10.944 10.944 28.7 10.944 39.648 0 10.945-10.946 10.945-28.705 0-39.649L550.66 490.565z","p-id":"1905"}})])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.keyShow,expression:"keyShow"}],staticClass:"pas-box v-1px"},t._l(t.pasDigits,function(e,o){return n("div",{key:o,class:{"v-1px-l":o>0}},[n("input",{attrs:{type:"password",disabled:""},domProps:{value:t.val[o]}})])})),t._v(" "),n("transition",{attrs:{name:"slide"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.keyShow,expression:"keyShow"}],staticClass:"key-box"},[t._l(t.keyList,function(e,o){return n("div",{key:o,staticClass:"item v-1px-t"},t._l(e,function(e,o){return n("div",{key:o,staticClass:"key",class:{"v-1px-l":0!=o},on:{touchstart:function(n){t.inputStart(e,n)},touchend:function(e){t.inputEnd(e)}}},[t._v("\n                        "+t._s(e)+"\n                    ")])}))}),t._v(" "),n("div",{staticClass:"item v-1px-t"},[n("div",{staticClass:"key  ",staticStyle:{background:"#e8e8e8"}}),t._v(" "),n("div",{staticClass:"key v-1px-l",on:{touchstart:function(e){t.inputStart(0,e)},touchend:function(e){t.inputEnd(e)}}},[t._v("0\n                    ")]),t._v(" "),n("div",{staticClass:"key v-1px-l",staticStyle:{background:"#e8e8e8"},on:{touchstart:function(e){t.del(e)},touchend:function(e){t.inputEnd(e,"del")}}},[t._v("-\n                    ")])])],2)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.paySuc,expression:"paySuc"}],staticStyle:{"text-align":"center"}},[t._v("支付成功!")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.lodingShow,expression:"lodingShow"}],staticClass:"loading"},[n("svg",{staticClass:"icon",attrs:{t:"1501508156392",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1936","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"100",height:"100"}},[n("path",{attrs:{d:"M914.9 682.1c-22 52.1-53.5 98.8-93.7 139s-86.9 71.7-139 93.7c-53.9 22.8-111.1 34.3-170.2 34.3s-116.3-11.5-170.1-34.3c-52.1-22-98.8-53.5-139-93.7s-71.7-86.9-93.7-139C86.4 628.3 74.8 571.1 74.8 512s11.5-116.3 34.3-170.2c22-52.1 53.5-98.8 93.7-139s86.9-71.7 139-93.7c43.3-18.3 88.8-29.4 135.7-33C497 74.6 512 58.4 512 38.9l0 0c0-21.8-18.6-39-40.3-37.3C207.8 22.1 0 242.8 0 512c0 282.8 229.2 512 512 512 269.2 0 489.9-207.8 510.4-471.7 1.7-21.7-15.5-40.3-37.3-40.3l0 0c-19.5 0-35.8 15-37.3 34.4C944.2 593.3 933.2 638.8 914.9 682.1z","p-id":"1937",fill:"#6A8FE5"}})])])],1)]):t._e()},staticRenderFns:[]}},function(t,e,n){var o=n(3);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(8)("29a1103e",o,!0)},function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=d[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(a(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var r=[],i=0;i<n.parts.length;i++)r.push(a(n.parts[i]));d[n.id]={id:n.id,refs:1,parts:r}}}}function i(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function a(t){var e,n,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(h)return v;o.parentNode.removeChild(o)}if(g){var a=f++;o=u||(u=i()),e=r.bind(null,o,a,!1),n=r.bind(null,o,a,!0)}else o=i(),e=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function r(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var a=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}function s(t,e){var n=e.css,o=e.media,i=e.sourceMap;if(o&&t.setAttribute("media",o),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(9),d={},p=c&&(document.head||document.getElementsByTagName("head")[0]),u=null,f=0,h=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var i=l(t,e);return o(i),function(e){for(var n=[],a=0;a<i.length;a++){var r=i[a],s=d[r.id];s.refs--,n.push(s)}e?(i=l(t,e),o(i)):i=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],o={},i=0;i<e.length;i++){var a=e[i],r=a[0],s=a[1],c=a[2],l=a[3],d={id:t+":"+i,css:s,media:c,sourceMap:l};o[r]?o[r].parts.push(d):n.push(o[r]={id:r,parts:[d]})}return n}}])});
//# sourceMappingURL=vue-pay-keyboard.js.map