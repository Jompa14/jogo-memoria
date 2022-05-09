(function(){"use strict";var t={72:function(t,e,a){var r=a(144),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("router-view")],1)])},o=[],i={name:"App"},s=i,c=a(736),u=(0,c.Z)(s,n,o,!1,null,null,null),d=u.exports,l=a(629);const f=()=>({rodadas:0}),m={getRodadas:t=>t.rodadas},v={addRodada:t=>t.rodadas++,resetRodadas:t=>t.rodadas=0};var p={namespaced:!1,state:f,getters:m,mutations:v};const h=()=>({nick:null}),g={getNick:t=>t.nick},b={alteraNick(t,e){t.nick=e,localStorage.setItem("store",JSON.stringify(t.nick))},iniciaStore(t){localStorage.getItem("store")&&(t.nick=JSON.parse(localStorage.getItem("store")))}};var C={namespaced:!1,state:h,getters:g,mutations:b};const k=()=>({vencedores:[]}),_={getVencedores:t=>t.vencedores},y={addVencedor:(t,e)=>t.vencedores.push(e)};var O={namespaced:!1,state:k,getters:_,mutations:y};r.Z.use(l.ZP);var j=new l.ZP.Store({modules:{rodadas:p,jogador:C,vencedores:O}}),S=a(482);r.Z.use(S.Z);var N=new S.Z({}),w=a(345),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"div-pai"},[a("div",{staticClass:"jogo"},[a("div",{staticClass:"painel"},[a("div",{staticClass:"nickMaisBotao"},[a("p",{staticClass:"mb-0"},[t._v("Gamer: "+t._s(t.nick))]),t.$vuetify.breakpoint.xs?t._e():a("div",{staticClass:"btnTrocaNick",on:{click:function(e){return t.$router.push("/NickName")}}},[t._v(" Trocar nick ")])]),a("p",[t._v("Rodadas: "+t._s(t.rodadas))])]),a("div",{attrs:{id:"tabuleiro"}},t._l(t.cartas,(function(e,r){return a("CadaCarta",{key:r,attrs:{valorCarta:e},on:{fuiClicado:t.viraAsCartinhas}})})),1)]),t._m(0)])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"github"},[a("p",[t._v(" Visite o projeto no "),a("a",{attrs:{href:"https://github.com/Jompa14/jogo-memoria",target:"_blank"}},[t._v(" GitHub ")]),t._v(". ")])])}],Z=a(317),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flip-card",class:{viraCarta:this.valorCarta.praCima||this.valorCarta.match},on:{click:function(e){return t.doAFlip()}}},[a("div",{staticClass:"flip-card-inner"},[a("div",{staticClass:"flip-card-back"},[a("v-icon",{attrs:{color:"rgb(193, 72, 203)",size:"40"}},[t._v(" "+t._s(t.mdiHelp)+" ")])],1),a("div",{staticClass:"flip-card-front"},[a("v-icon",{attrs:{color:"var(--cor-texto)",size:"40"}},[t._v(" "+t._s(t.valorCarta.conteudo)+" ")])],1)])])},x=[],$={props:{valorCarta:{type:Object,default:null}},data:()=>({mdiHelp:Z.HET}),methods:{doAFlip(){this.valorCarta.praCima||this.valorCarta.match||this.$emit("fuiClicado",this.valorCarta)}}},P=$,q=a(453),H=a.n(q),I=a(456),R=(0,c.Z)(P,A,x,!1,null,"546523a3",null),V=R.exports;H()(R,{VIcon:I.Z});const F=[Z.nd_,Z.mvq,Z.dHB,Z.j0g,Z._53,Z.z8z,Z.g7x,Z._56,Z._F3,Z.fcg];var z={components:{CadaCarta:V},beforeCreate(){localStorage.getItem("store")||this.$router.push("/NickName")},created(){this.$store.commit("iniciaStore"),this.$vuetify.breakpoint.xs&&F.pop(),F.forEach((t=>{this.cartas.push({conteudo:t,praCima:!1,match:!1}),this.cartas.push({conteudo:t,praCima:!1,match:!1})})),this.cartas.sort((()=>.5-Math.random()))},computed:{...(0,l.Se)({rodadas:"getRodadas",nick:"getNick",iniciaStore:"iniciaStore"})},data:()=>({mdiAlienOutline:Z.nd_,mdiSpaceInvaders:Z.fcg,mdiZodiacSagittarius:Z.dHB,mdiWeatherNight:Z.j0g,mdiYinYang:Z.z8z,mdiYoutubeGaming:Z.McV,mdiWizardHat:Z.g7x,mdiVirusOutline:Z._56,mdiSkullCrossbonesOutline:Z._F3,mdiRadioactive:Z.mvq,cartas:[],vencedores:[]}),methods:{...(0,l.OI)({addRodada:"addRodada",addVencedor:"addVencedor",alteraNick:"alteraNick"}),viraAsCartinhas(t){t.praCima=!t.praCima;let e=this.cartas.filter((t=>t.praCima));2===e.length&&(this.addRodada(),e[0].conteudo===e[1].conteudo?(this.bloqueiaTabuleiro("none"),e[0].match=!0,e[1].match=!0,e[0].praCima=!1,e[1].praCima=!1,setTimeout((()=>{this.isGameOver(),this.bloqueiaTabuleiro("auto")}),500)):(this.bloqueiaTabuleiro("none"),setTimeout((()=>{e[0].praCima=!1,e[1].praCima=!1,this.bloqueiaTabuleiro("auto")}),1e3)))},isGameOver(){let t=this.cartas.filter((t=>t.match));if(20===t.length)return this.addVencedor({nick:this.nick,rodadas:this.rodadas}),void this.$router.push("/gameover")},bloqueiaTabuleiro(t){document.getElementById("tabuleiro").style.pointerEvents=t}}},B=z,G=(0,c.Z)(B,T,E,!1,null,"97cf9cec",null),M=G.exports;r.Z.use(w.Z);const L=[{path:"/",name:"Home",component:M},{path:"/gameover",name:"GameOver",component:()=>Promise.all([a.e(146),a.e(360)]).then(a.bind(a,337))},{path:"/nickname",name:"NickName",component:()=>Promise.all([a.e(146),a.e(242)]).then(a.bind(a,228))}],J=new w.Z({mode:"history",base:"/jogo-memoria/",routes:L});var Y=J;r.Z.config.productionTip=!1,new r.Z({store:j,vuetify:N,router:Y,render:t=>t(d)}).$mount("#app")}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,r,n,o){if(!r){var i=1/0;for(d=0;d<t.length;d++){r=t[d][0],n=t[d][1],o=t[d][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](r[c])}))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){t.splice(d--,1);var u=n();void 0!==u&&(e=u)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[r,n,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,r){return a.f[r](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{146:"96f03527",242:"49f698df",360:"f23a89ed"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/"+t+"."+{242:"4762bbb5",360:"5815bd1a"}[t]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="jogo-memoria:";a.l=function(r,n,o,i){if(t[r])t[r].push(n);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+o){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",e+o),s.src=r),t[r]=[n];var f=function(e,a){s.onerror=s.onload=null,clearTimeout(m);var n=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(t){return t(a)})),e)return e(a)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/jogo-memoria/"}(),function(){var t=function(t,e,a,r){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=function(o){if(n.onerror=n.onload=null,"load"===o.type)a();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,n.parentNode.removeChild(n),r(c)}};return n.onerror=n.onload=o,n.href=e,document.head.appendChild(n),n},e=function(t,e){for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=a[r],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===t||o===e))return n}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){n=i[r],o=n.getAttribute("data-href");if(o===t||o===e)return n}},r=function(r){return new Promise((function(n,o){var i=a.miniCssF(r),s=a.p+i;if(e(i,s))return n();t(r,s,n,o)}))},n={143:0};a.f.miniCss=function(t,e){var a={242:1,360:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=r(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var t={143:0};a.f.j=function(e,r){var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(a,r){n=t[e]=[a,r]}));r.push(n[2]=o);var i=a.p+a.u(e),s=new Error,c=function(r){if(a.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}};a.l(i,c,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,o,i=r[0],s=r[1],c=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(c)var d=c(a)}for(e&&e(r);u<i.length;u++)o=i[u],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},r=self["webpackChunkjogo_memoria"]=self["webpackChunkjogo_memoria"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(72)}));r=a.O(r)})();
//# sourceMappingURL=app.005000d4.js.map