(function(e){function t(t){for(var r,o,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({home:"home"}[e]||e)+"."+{home:"b993db1d"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={home:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({home:"home"}[e]||e)+"."+{home:"b50afd10"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"097e":function(e,t){(function(e,t){var n=e.documentElement,r="orientationchange"in window?"orientationchange":"resize",o=function(){var e=n.clientWidth;e&&(n.style.fontSize=e/375*20+"px")};e.addEventListener&&(t.addEventListener(r,o,!1),e.addEventListener("DOMContentLoaded",o,!1))})(document,window)},"557b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("6e6d"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header-nav",{attrs:{curStep:e.curStep,curTitle:e.curTitle}}),n("keep-alive",[n("router-view",{staticClass:"curStep"})],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("van-icon",{directives:[{name:"show",rawName:"v-show",value:e.curStep>1,expression:"curStep>1"}],staticClass:"back p-a",attrs:{name:"arrow-left"},on:{click:e.goBack}}),n("span",{staticClass:"title"},[e._v(e._s(e.curTitle))])],1)},u=[],c={name:"headerNav",props:["curStep","curTitle"],methods:{goBack:function(){this.$router.back()}}},s=c,l=(n("7705"),n("2877")),p=Object(l["a"])(s,i,u,!1,null,"39cd39d0",null),d=p.exports,f={name:"app",components:{HeaderNav:d},data:function(){return{curStep:1,curTitle:"分享"}},methods:{},created:function(){var e=this;this.$router.afterEach(function(t,n,r){e.curStep=t.meta.curStep,e.curTitle=1==e.curStep||4==e.curStep?"分享":"注册",document.title=e.curTitle})},mounted:function(){localStorage.clear()}},h=f,m=(n("034f"),Object(l["a"])(h,o,a,!1,null,null,null)),v=m.exports,g=n("8b48");r["a"].use(g["a"]);var b=new g["a"]({mode:"hash",base:"",routes:[{path:"*",redirect:"/register1"},{path:"/register1",name:"register1",meta:{curStep:1,title:"分享"},component:function(){return n.e("home").then(n.bind(null,"b62c"))}},{path:"/register2",name:"register2",meta:{curStep:2,title:"注册"},component:function(){return n.e("home").then(n.bind(null,"375d"))}},{path:"/register3",name:"register3",meta:{curStep:3,title:"注册"},component:function(){return n.e("home").then(n.bind(null,"a07d"))}},{path:"/register4",name:"register4",meta:{curStep:4,title:"分享"},component:function(){return n.e("home").then(n.bind(null,"a3cc"))}},{path:"/indexBar",name:"indexBar",meta:{curStep:3,title:"选择国家"},component:function(){return n.e("home").then(n.bind(null,"32d7"))}}]}),y=n("4e98");n("097e"),n("0145"),n("557b");r["a"].use(y["a"]),r["a"].config.productionTip=!1,new r["a"]({router:b,render:function(e){return e(v)}}).$mount("#app")},"64a9":function(e,t,n){},7705:function(e,t,n){"use strict";var r=n("b94f"),o=n.n(r);o.a},b94f:function(e,t,n){}});