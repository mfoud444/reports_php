import{d as A,f as K,y as L,m as u,j as S,t as o,q as D,k as j,c as M,b as d,a as t,u as e,e as _,w as r,o as U,z as x,A as b,B as $,_ as m,l as P,C as T,D as G}from"./index-abec4112.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang-35d21e1a.js";import{N as y}from"./FormItem-8daefc5e.js";import{N as J}from"./AutoComplete-acda7aec.js";import{N as O}from"./Form-94767fab.js";import"./Avatar-0b9bedef.js";const Q={class:"grid grid-row-6 min-h-full dark:text-white"},W={class:"self-center row-span-2 place-self-center"},X={class:"flex flex-col relative overflow-hidden place-self-center gap-6 w-80 pt-2 px-4 glass bg-blue-50 dark:bg-gray-800 dark:text-white rounded-lg"},Y={class:"post-heading"},Z={class:"text1 text-3xl font-bold text-center gtext p-1"},ee={style:{display:"flex","justify-content":"flex-end"}},ae=d("div",null,null,-1),se=d("div",{class:"row-span-2 place-self-center"},null,-1),ue=A({__name:"Login",setup(te){const k=K(),I=L(),c=u(null),f=u(null),p=S(),i=u(!1),v=u({email:"",password:""}),a=v,N={email:[{required:!0,message:o("auth.emailRequired"),trigger:["input","blur"]}],password:[{required:!0,message:o("auth.passwordRequired"),trigger:["input","blur"]}]};function B(){var l;v.value.password&&((l=f.value)==null||l.validate({trigger:"password-input"}))}async function F(){try{await I.Login(a.value.email,a.value.password),i.value=!1,R(),await k.push({name:"dashboard"}),z()}catch(l){console.error(l.message),i.value=!1,p.error(o("auth.signInFailed"))}}const g=D(),h=u(!0);function R(){g.start(),h.value=!1}function z(){g.finish(),h.value=!0}function w(l){var s;l.preventDefault(),(s=c.value)==null||s.validate(n=>{if(n)p.error(o("auth.fillAllField")),i.value=!1;else if(G(a.value.email))if(a.value.password&&a.value.password.length<8){p.error(o("auth.passwordLengthError")),i.value=!1;return}else i.value=!0,F();else{p.error(o("auth.invalidEmailFormat")),i.value=!1;return}})}const C=j(()=>["@gmail.com"].map(l=>{const s=a.value.email.split("@")[0];return{label:s+l,value:s+l}}));return(l,s)=>(U(),M("div",Q,[d("div",W,[t(e(H),{size:60})]),d("div",X,[d("div",Y,[d("div",Z,_(e(o)("auth.loginIn")),1)]),t(e(O),{ref_key:"formRef",ref:c,model:e(a),rules:N,size:"large"},{default:r(()=>[t(e(y),{path:"email",label:e(o)("auth.email")},{default:r(()=>[t(e(J),{value:e(a).email,"onUpdate:value":s[1]||(s[1]=n=>e(a).email=n),"input-props":{autocomplete:"disabled"},options:C.value,size:"large",placeholder:"Email",clearable:""},{default:r(({handleInput:n,handleBlur:q,handleFocus:E,value:V})=>[t(e(x),{placeholder:"example@gmail.com",onKeydown:s[0]||(s[0]=b($(()=>{},["prevent"]),["enter"])),value:V,onInput:n,onFocus:E,onBlur:q,size:"large"},{prefix:r(()=>[t(e(m),{icon:"ic:baseline-email",class:"text-md text-primary"})]),_:2},1032,["value","onInput","onFocus","onBlur"])]),_:1},8,["value","options"])]),_:1},8,["label"]),t(e(y),{ref_key:"passwordFormItemRef",ref:f,first:"",path:"password",label:e(o)("auth.password")},{default:r(()=>[t(e(x),{value:e(a).password,"onUpdate:value":s[2]||(s[2]=n=>e(a).password=n),"show-password-on":"click",onInput:B,type:"password",maxlength:20,onKeyup:b(w,["enter"])},{prefix:r(()=>[t(e(m),{icon:"mdi:password",class:"text-md text-primary"})]),"password-visible-icon":r(()=>[t(e(m),{icon:"mdi:show",class:"text-md text-primary"})]),"password-invisible-icon":r(()=>[t(e(m),{icon:"gridicons:not-visible",class:"text-md text-primary"})]),_:1},8,["value","onKeyup"])]),_:1},8,["label"]),d("div",ee,[t(e(P),{type:"primary",style:{width:"100%"},size:"large",loading:i.value,disabled:e(a).email===null||e(a).password===null,onClick:w},{default:r(()=>[T(_(e(o)("auth.login")),1)]),_:1},8,["loading","disabled"])])]),_:1},8,["model"]),ae]),se]))}});export{ue as default};
