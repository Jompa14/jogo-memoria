"use strict";(self["webpackChunkjogo_memoria"]=self["webpackChunkjogo_memoria"]||[]).push([[242],{228:function(e,t,s){s.r(t),s.d(t,{default:function(){return de}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"nickname"},[s("div",[s("label",{attrs:{for:"nick"}},[e._v("Nickname:")]),s("v-text-field",{attrs:{autofocus:"",dark:"",color:"var(--cor-texto)"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.alteraNick.apply(null,arguments)}},model:{value:e.novoNick,callback:function(t){e.novoNick=t},expression:"novoNick"}})],1),e.$vuetify.breakpoint.xs?s("v-btn",{attrs:{outlined:"",color:"var(--cor-texto)"},on:{click:e.alteraNick}},[e._v(" Jogar ")]):e._e()],1)},n=[],r=s(629),a={data:()=>({novoNick:null}),computed:{...(0,r.Se)({nick:"getNick"})},methods:{alteraNick(){this.$store.commit("alteraNick",this.novoNick),this.$router.push("/")}}},l=a,o=s(736),h=s(453),u=s.n(h),d=s(146),c=s(456),p=c.Z,g=s(836),f=s(66),v=s(530),m=s(131),y=(0,v.Z)(f.Z).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(e,t){const{children:s,listeners:i,props:n}=t,r={staticClass:"v-label",class:{"v-label--active":n.value,"v-label--is-disabled":n.disabled,...(0,f.X)(t)},attrs:{for:n.for,"aria-hidden":!n.for},on:i,style:{left:(0,m.kb)(n.left),right:(0,m.kb)(n.right),position:n.absolute?"absolute":"relative"},ref:"label"};return e("label",g.Z.options.methods.setTextColor(n.focused&&n.color,r),s)}}),b=y,$=(0,v.Z)(g.Z,f.Z).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(e,t){return this.$createElement("div",{staticClass:"v-messages__message",key:t},(0,m.z9)(this,"default",{message:e,key:t})||[e])}},render(e){return e("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),S=$,x=s(141),k=s(950),_=s(219);const V=(0,v.Z)(g.Z,(0,k.f)("form"),f.Z);var C=V.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("input",e)}},isDisabled(){return this.disabled||!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(e,t){(0,m.vZ)(e,t)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(e){e||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout((()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()}),0)},hasError(e){this.shouldValidate&&this.$emit("update:error",e)},value(e){this.lazyValue=e}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(e){return e?Array.isArray(e)?e:[e]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation(){this.isResetting=!0},validate(e=!1,t){const s=[];t=t||this.internalValue,e&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const e=this.rules[i],n="function"===typeof e?e(t):e;!1===n||"string"===typeof n?s.push(n||""):"boolean"!==typeof n&&(0,_.N6)(`Rules should return a string or boolean, received '${typeof n}' instead`,this)}return this.errorBucket=s,this.valid=0===s.length,this.valid}}});const B={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function I(e){const t={};for(const s of e.split(B.styleList)){let[e,i]=s.split(B.styleProp);e=e.trim(),e&&("string"===typeof i&&(i=i.trim()),t[(0,m._A)(e)]=i)}return t}function w(){const e={};let t,s=arguments.length;while(s--)for(t of Object.keys(arguments[s]))switch(t){case"class":case"directives":arguments[s][t]&&(e[t]=D(e[t],arguments[s][t]));break;case"style":arguments[s][t]&&(e[t]=z(e[t],arguments[s][t]));break;case"staticClass":if(!arguments[s][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[s][t].trim();break;case"on":case"nativeOn":arguments[s][t]&&(e[t]=E(e[t],arguments[s][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[s][t])break;e[t]||(e[t]={}),e[t]={...arguments[s][t],...e[t]};break;default:e[t]||(e[t]=arguments[s][t])}return e}function z(e,t){return e?t?(e=(0,m.TI)("string"===typeof e?I(e):e),e.concat("string"===typeof t?I(t):t)):e:t}function D(e,t){return t?e&&e?(0,m.TI)(e).concat(t):t:e}function E(...e){if(!e[0])return e[1];if(!e[1])return e[0];const t={};for(let s=2;s--;){const i=e[s];for(const e in i)i[e]&&(t[e]?t[e]=[].concat(i[e],t[e]):t[e]=i[e])}return t}const L=(0,v.Z)(x.Z,C);var M=L.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,"v-input--hide-spin-buttons":this.hideSpinButtons,...this.themeClasses}},computedId(){return this.id||`input-${this._uid}`},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit(this.$_modelEvent,e)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((e=>{if("string"===typeof e)return e;const t=e(this.internalValue);return"string"===typeof t?t:""})).filter((e=>""!==e)):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(e){this.lazyValue=e}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(e,t,s={}){const i=this[`${e}Icon`],n=`click:${(0,m.GL)(e)}`,r=!(!this.listeners$[n]&&!t),a=w({attrs:{"aria-label":r?(0,m.GL)(e).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:r?{click:e=>{e.preventDefault(),e.stopPropagation(),this.$emit(n,e),t&&t(e)},mouseup:e=>{e.preventDefault(),e.stopPropagation()}}:void 0},s);return this.$createElement("div",{staticClass:"v-input__icon",class:e?`v-input__icon--${(0,m.GL)(e)}`:void 0},[this.$createElement(p,a,i)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:(0,m.kb)(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(b,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(S,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:e=>(0,m.z9)(this,"message",e)}}):null},genSlot(e,t,s){if(!s.length)return null;const i=`${e}-${t}`;return this.$createElement("div",{staticClass:`v-input__${i}`,ref:i},s)},genPrependSlot(){const e=[];return this.$slots.prepend?e.push(this.$slots.prepend):this.prependIcon&&e.push(this.genIcon("prepend")),this.genSlot("prepend","outer",e)},genAppendSlot(){const e=[];return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","outer",e)},onClick(e){this.$emit("click",e)},onMouseDown(e){this.hasMouseDown=!0,this.$emit("mousedown",e)},onMouseUp(e){this.hasMouseDown=!1,this.$emit("mouseup",e)}},render(e){return e("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),F=M,A=(0,v.Z)(f.Z).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(e,t){const{props:s}=t,i=parseInt(s.max,10),n=parseInt(s.value,10),r=i?`${n} / ${i}`:String(s.value),a=i&&n>i;return e("div",{staticClass:"v-counter",class:{"error--text":a,...(0,f.X)(t)}},r)}}),P=A,N=s(6),T=s(144);function O(e){return T.Z.extend({name:"intersectable",data:()=>({isIntersecting:!1}),mounted(){N.Z.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed(){N.Z.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve(t,s,i){if(this.isIntersecting=i,i)for(let n=0,r=e.onVisible.length;n<r;n++){const t=this[e.onVisible[n]];"function"!==typeof t?(0,_.Kd)(e.onVisible[n]+" method is not available on the instance but referenced in intersectable mixin options"):t()}}}})}function R(e=[],...t){return Array().concat(e,...t)}function W(e,t="top center 0",s){return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:s},origin:{type:String,default:t}},render(t,s){const i="transition"+(s.props.group?"-group":""),n={props:{name:e,mode:s.props.mode},on:{beforeEnter(e){e.style.transformOrigin=s.props.origin,e.style.webkitTransformOrigin=s.props.origin}}};return s.props.leaveAbsolute&&(n.on.leave=R(n.on.leave,(e=>{const{offsetTop:t,offsetLeft:s,offsetWidth:i,offsetHeight:n}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=t+"px",e.style.left=s+"px",e.style.width=i+"px",e.style.height=n+"px"})),n.on.afterLeave=R(n.on.afterLeave,(e=>{if(e&&e._transitionInitialStyles){const{position:t,top:s,left:i,width:n,height:r}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=s||"",e.style.left=i||"",e.style.width=n||"",e.style.height=r||""}}))),s.props.hideOnLeave&&(n.on.leave=R(n.on.leave,(e=>{e.style.setProperty("display","none","important")}))),t(i,w(s.data,n),s.children)}}}function Z(e,t,s="in-out"){return{name:e,functional:!0,props:{mode:{type:String,default:s}},render(s,i){return s("transition",w(i.data,{props:{name:e},on:t}),i.children)}}}function q(e="",t=!1){const s=t?"width":"height",i=`offset${(0,m.jC)(s)}`;return{beforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[s]:e.style[s]}},enter(t){const n=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const r=`${t[i]}px`;t.style[s]="0",t.offsetHeight,t.style.transition=n.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[s]=r}))},afterEnter:r,enterCancelled:r,leave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[s]:e.style[s]},e.style.overflow="hidden",e.style[s]=`${e[i]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[s]="0"))},afterLeave:n,leaveCancelled:n};function n(t){e&&t._parent&&t._parent.classList.remove(e),r(t)}function r(e){const t=e._initialStyle[s];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[s]=t),delete e._initialStyle}}W("carousel-transition"),W("carousel-reverse-transition"),W("tab-transition"),W("tab-reverse-transition"),W("menu-transition"),W("fab-transition","center center","out-in"),W("dialog-transition"),W("dialog-bottom-transition"),W("dialog-top-transition");const H=W("fade-transition"),j=(W("scale-transition"),W("scroll-x-transition"),W("scroll-x-reverse-transition"),W("scroll-y-transition"),W("scroll-y-reverse-transition"),W("slide-x-transition"));W("slide-x-reverse-transition"),W("slide-y-transition"),W("slide-y-reverse-transition"),Z("expand-transition",q()),Z("expand-x-transition",q("",!0));var K=s(747);function U(e="value",t="change"){return T.Z.extend({name:"proxyable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{internalLazyValue:this[e]}},computed:{internalValue:{get(){return this.internalLazyValue},set(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:{[e](e){this.internalLazyValue=e}}})}const G=U();var X=G;const J=(0,v.Z)(g.Z,(0,K.d)(["absolute","fixed","top","bottom"]),X,f.Z);var Q=J.extend({name:"v-progress-linear",directives:{intersect:N.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,m.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,m.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.isReversed?"right":"left"]:(0,m.kb)(this.normalizedValue,"%"),width:(0,m.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?H:j},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=(0,m.kb)(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=(0,m.z9)(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},onObserve(e,t,s){this.isVisible=s},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,m.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),Y=Q,ee=T.Z.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(Y,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}});function te(e,t,s){const i=t.value,n=t.options||{passive:!0};window.addEventListener("resize",i,n),e._onResize=Object(e._onResize),e._onResize[s.context._uid]={callback:i,options:n},t.modifiers&&t.modifiers.quiet||i()}function se(e,t,s){var i;if(null==(i=e._onResize)||!i[s.context._uid])return;const{callback:n,options:r}=e._onResize[s.context._uid];window.removeEventListener("resize",n,r),delete e._onResize[s.context._uid]}const ie={inserted:te,unbind:se};var ne=ie,re=s(749);function ae(e){if("function"!==typeof e.getRootNode){while(e.parentNode)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const le=(0,v.Z)(F,O({onVisible:["onResize","tryAutofocus"]}),ee),oe=["color","file","time","date","datetime-local","week","month"];var he=le.extend().extend({name:"v-text-field",directives:{resize:ne,ripple:re.Z},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{...F.options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},computedColor(){const e=C.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":e},computedCounterValue(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):[...(this.internalValue||"").toString()].length},hasCounter(){return!1!==this.counter&&null!=this.counter},hasDetails(){return F.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("input",this.lazyValue)}},isDirty(){var e;return(null==(e=this.lazyValue)?void 0:e.toString().length)>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined},isLabelActive(){return this.isDirty||oe.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo(){return this.solo||this.soloInverted},labelPosition(){let e=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(e-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:e,right:"auto"}:{left:"auto",right:e}},showLabel(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value(e){this.lazyValue=e}},created(){this.$attrs.hasOwnProperty("box")&&(0,_.fK)("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&(0,_.fK)("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&(0,_.Kd)("shaped should be used with either filled or outlined",this)},mounted(){this.$watch((()=>this.labelValue),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((()=>{this.isBooted=!0,requestAnimationFrame((()=>{this.isIntersecting||this.onResize()}))}))},methods:{focus(){this.onFocus()},blur(e){window.requestAnimationFrame((()=>{this.$refs.input&&this.$refs.input.blur()}))},clearableCallback(){this.$refs.input&&this.$refs.input.focus(),this.$nextTick((()=>this.internalValue=null))},genAppendSlot(){const e=[];return this.$slots["append-outer"]?e.push(this.$slots["append-outer"]):this.appendOuterIcon&&e.push(this.genIcon("appendOuter")),this.genSlot("append","outer",e)},genPrependInnerSlot(){const e=[];return this.$slots["prepend-inner"]?e.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&e.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",e)},genIconSlot(){const e=[];return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","inner",e)},genInputSlot(){const e=F.options.methods.genInputSlot.call(this),t=this.genPrependInnerSlot();return t&&(e.children=e.children||[],e.children.unshift(t)),e},genClearIcon(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter(){var e,t,s;if(!this.hasCounter)return null;const i=!0===this.counter?this.attrs$.maxlength:this.counter,n={dark:this.dark,light:this.light,max:i,value:this.computedCounterValue};return null!=(e=null==(t=(s=this.$scopedSlots).counter)?void 0:t.call(s,{props:n}))?e:this.$createElement(P,{props:n})},genControl(){return F.options.methods.genControl.call(this)},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const e={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(b,e,this.$slots.label||this.label)},genLegend(){const e=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,t=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:(0,m.kb)(e)}},[t])},genInput(){const e=Object.assign({},this.listeners$);delete e.change;const{title:t,...s}=this.attrs$;return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:{...s,autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type},on:Object.assign(e,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages(){if(!this.showDetails)return null;const e=F.options.methods.genMessages.call(this),t=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[e,t])},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(e){return this.$createElement("div",{class:`v-text-field__${e}`,ref:e},this[e])},onBlur(e){this.isFocused=!1,e&&this.$nextTick((()=>this.$emit("blur",e)))},onClick(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus(e){if(!this.$refs.input)return;const t=ae(this.$el);return t?t.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,e&&this.$emit("focus",e))):void 0},onInput(e){const t=e.target;this.internalValue=t.value,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){e.keyCode===m.Do.enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",e)},onMouseDown(e){e.target!==this.$refs.input&&(e.preventDefault(),e.stopPropagation()),F.options.methods.onMouseDown.call(this,e)},onMouseUp(e){this.hasMouseDown&&this.focus(),F.options.methods.onMouseUp.call(this,e)},setLabelWidth(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;const e=ae(this.$el);return!(!e||e.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue(e){this.hasColor=e,e?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}}),ue=(0,o.Z)(l,i,n,!1,null,"1409b466",null),de=ue.exports;u()(ue,{VBtn:d.Z,VTextField:he})}}]);
//# sourceMappingURL=242.49f698df.js.map