(self["webpackChunkjogo_memoria"]=self["webpackChunkjogo_memoria"]||[]).push([[65],{8457:function(r,t,n){"use strict";var e=n(7854),o=n(9974),i=n(6916),u=n(7908),c=n(3411),a=n(7659),s=n(4411),f=n(6244),l=n(6135),v=n(8554),d=n(1246),p=e.Array;r.exports=function(r){var t=u(r),n=s(this),e=arguments.length,h=e>1?arguments[1]:void 0,y=void 0!==h;y&&(h=o(h,e>2?arguments[2]:void 0));var g,m,b,E,x,S,k=d(t),w=0;if(!k||this==p&&a(k))for(g=f(t),m=n?new this(g):p(g);g>w;w++)S=y?h(t[w],w):t[w],l(m,w,S);else for(E=v(t,k),x=E.next,m=n?new this:[];!(b=i(x,E)).done;w++)S=y?c(E,h,[b.value,w],!0):b.value,l(m,w,S);return m.length=w,m}},3411:function(r,t,n){var e=n(9670),o=n(9212);r.exports=function(r,t,n,i){try{return i?t(e(n)[0],n[1]):t(n)}catch(u){o(r,"throw",u)}}},7741:function(r,t,n){var e=n(1702),o=e("".replace),i=function(r){return String(Error(r).stack)}("zxcasd"),u=/\n\s*at [^:]*:[^\n]*/,c=u.test(i);r.exports=function(r,t){if(c&&"string"==typeof r)while(t--)r=o(r,u,"");return r}},2914:function(r,t,n){var e=n(7293),o=n(9114);r.exports=!e((function(){var r=Error("a");return!("stack"in r)||(Object.defineProperty(r,"stack",o(1,7)),7!==r.stack)}))},9587:function(r,t,n){var e=n(614),o=n(111),i=n(7674);r.exports=function(r,t,n){var u,c;return i&&e(u=t.constructor)&&u!==n&&o(c=u.prototype)&&c!==n.prototype&&i(r,c),r}},8340:function(r,t,n){var e=n(111),o=n(8880);r.exports=function(r,t){e(t)&&"cause"in t&&o(r,"cause",t.cause)}},6277:function(r,t,n){var e=n(1340);r.exports=function(r,t){return void 0===r?arguments.length<2?"":t:e(r)}},9191:function(r,t,n){"use strict";var e=n(5005),o=n(2597),i=n(8880),u=n(7976),c=n(7674),a=n(9920),s=n(9587),f=n(6277),l=n(8340),v=n(7741),d=n(2914),p=n(1913);r.exports=function(r,t,n,h){var y=h?2:1,g=r.split("."),m=g[g.length-1],b=e.apply(null,g);if(b){var E=b.prototype;if(!p&&o(E,"cause")&&delete E.cause,!n)return b;var x=e("Error"),S=t((function(r,t){var n=f(h?t:r,void 0),e=h?new b(r):new b;return void 0!==n&&i(e,"message",n),d&&i(e,"stack",v(e.stack,2)),this&&u(E,this)&&s(e,this,S),arguments.length>y&&l(e,arguments[y]),e}));if(S.prototype=E,"Error"!==m&&(c?c(S,x):a(S,x,{name:!0})),a(S,b),!p)try{E.name!==m&&i(E,"name",m),E.constructor=S}catch(k){}return S}}},1038:function(r,t,n){var e=n(2109),o=n(8457),i=n(7072),u=!i((function(r){Array.from(r)}));e({target:"Array",stat:!0,forced:u},{from:o})},7042:function(r,t,n){"use strict";var e=n(2109),o=n(7854),i=n(3157),u=n(4411),c=n(111),a=n(1400),s=n(6244),f=n(5656),l=n(6135),v=n(5112),d=n(1194),p=n(206),h=d("slice"),y=v("species"),g=o.Array,m=Math.max;e({target:"Array",proto:!0,forced:!h},{slice:function(r,t){var n,e,o,v=f(this),d=s(v),h=a(r,d),b=a(void 0===t?d:t,d);if(i(v)&&(n=v.constructor,u(n)&&(n===g||i(n.prototype))?n=void 0:c(n)&&(n=n[y],null===n&&(n=void 0)),n===g||void 0===n))return p(v,h,b);for(e=new(void 0===n?g:n)(m(b-h,0)),o=0;h<b;h++,o++)h in v&&l(e,o,v[h]);return e.length=o,e}})},1703:function(r,t,n){var e=n(2109),o=n(7854),i=n(2104),u=n(9191),c="WebAssembly",a=o[c],s=7!==Error("e",{cause:7}).cause,f=function(r,t){var n={};n[r]=u(r,t,s),e({global:!0,forced:s},n)},l=function(r,t){if(a&&a[r]){var n={};n[r]=u(c+"."+r,t,s),e({target:c,stat:!0,forced:s},n)}};f("Error",(function(r){return function(t){return i(r,this,arguments)}})),f("EvalError",(function(r){return function(t){return i(r,this,arguments)}})),f("RangeError",(function(r){return function(t){return i(r,this,arguments)}})),f("ReferenceError",(function(r){return function(t){return i(r,this,arguments)}})),f("SyntaxError",(function(r){return function(t){return i(r,this,arguments)}})),f("TypeError",(function(r){return function(t){return i(r,this,arguments)}})),f("URIError",(function(r){return function(t){return i(r,this,arguments)}})),l("CompileError",(function(r){return function(t){return i(r,this,arguments)}})),l("LinkError",(function(r){return function(t){return i(r,this,arguments)}})),l("RuntimeError",(function(r){return function(t){return i(r,this,arguments)}}))},8309:function(r,t,n){var e=n(9781),o=n(6530).EXISTS,i=n(1702),u=n(3070).f,c=Function.prototype,a=i(c.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,f=i(s.exec),l="name";e&&!o&&u(c,l,{configurable:!0,get:function(){try{return f(s,a(this))[1]}catch(r){return""}}})},7601:function(r,t,n){"use strict";n(4916);var e=n(2109),o=n(7854),i=n(6916),u=n(1702),c=n(614),a=n(111),s=function(){var r=!1,t=/[ac]/;return t.exec=function(){return r=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&r}(),f=o.Error,l=u(/./.test);e({target:"RegExp",proto:!0,forced:!s},{test:function(r){var t=this.exec;if(!c(t))return l(this,r);var n=i(t,this,r);if(null!==n&&!a(n))throw new f("RegExp exec method returned something other than an Object or null");return!!n}})},1817:function(r,t,n){"use strict";var e=n(2109),o=n(9781),i=n(7854),u=n(1702),c=n(2597),a=n(614),s=n(7976),f=n(1340),l=n(3070).f,v=n(9920),d=i.Symbol,p=d&&d.prototype;if(o&&a(d)&&(!("description"in p)||void 0!==d().description)){var h={},y=function(){var r=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),t=s(p,this)?new d(r):void 0===r?d():d(r);return""===r&&(h[t]=!0),t};v(y,d),y.prototype=p,p.constructor=y;var g="Symbol(test)"==String(d("test")),m=u(p.toString),b=u(p.valueOf),E=/^Symbol\((.*)\)[^)]+$/,x=u("".replace),S=u("".slice);l(p,"description",{configurable:!0,get:function(){var r=b(this),t=m(r);if(c(h,r))return"";var n=g?S(t,7,-1):x(t,E,"$1");return""===n?void 0:n}}),e({global:!0,forced:!0},{Symbol:y})}},2165:function(r,t,n){var e=n(7235);e("iterator")},2178:function(r,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var e=function(){var r=this,t=r.$createElement,n=r._self._c||t;return n("div",{staticClass:"podium"},[n("h2",[r._v("Parabéns!")]),n("p",[r._v(r._s(r.nick)+", você venceu o jogo em "+r._s(r.rodadas)+" rodadas.")]),n("h3",[r._v("Podium:")]),r._l(r.podium,(function(t,e){return n("div",{key:e},[n("p",[r._v(r._s(e+1)+"° - "+r._s(t.nick)+": "+r._s(t.rodadas)+" rodadas")])])})),n("v-btn",{attrs:{outlined:"",color:"var(--col-texto)"},on:{click:r.reiniciarJogo}},[r._v(" Jogar novamente ")])],2)},o=[];function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function u(r){if(Array.isArray(r))return i(r)}n(2526),n(1817),n(1539),n(2165),n(8783),n(3948),n(1038);function c(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}n(7042),n(8309),n(4916),n(7601);function a(r,t){if(r){if("string"===typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(r,t):void 0}}n(1703);function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(r){return u(r)||c(r)||a(r)||s()}var l=n(3019),v=(n(2707),n(629)),d={computed:(0,l.Z)((0,l.Z)({},(0,v.Se)({nick:"getNick",rodadas:"getRodadas",vencedores:"getVencedores"})),{},{podium:function(){return f(this.vencedores).sort((function(r,t){return r.rodadas-t.rodadas})).slice(0,3)}}),methods:(0,l.Z)((0,l.Z)({},(0,v.OI)({resetRodadas:"resetRodadas"})),{},{reiniciarJogo:function(){this.resetRodadas(),this.$router.push("/")}})},p=d,h=n(3736),y=n(3453),g=n.n(y),m=n(6146),b=(0,h.Z)(p,e,o,!1,null,"e97e58a2",null),E=b.exports;g()(b,{VBtn:m.Z})}}]);
//# sourceMappingURL=65-legacy.40c1c7c0.js.map