import{d as $,f as C,g as D,h as B,i as L,j as U,k as w,o as m,c as b,b as e,e as i,u as s,t,a as l,w as x,_ as k,N as F,F as N,r as I,l as M,m as S,n as R,p as A,q as O,s as T,v as V,x as W}from"./index-abec4112.js";import{_ as z}from"./index.vue_vue_type_script_setup_true_lang-35d21e1a.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const P={class:"py-0 pt-2 mb-4 lg:pt-4"},Z={class:"navbar glass py-1 md:py-3 rounded-lg dark:bg-violet-800"},j={class:"navbar-start"},q=e("div",{class:"navbar-center"},null,-1),H={class:"navbar-end gap-4"},G={class:"flex flex-wrap items-center gap-4"},ce=$({__name:"index",setup(r){const h=C();function f(){h.push("/")}const a=D();B(),L(),U();const d=w(()=>a.theme),p=w({get(){return a.language},set(v){a.setLanguage(v)}}),u=[{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],g=[{label:"العربية",key:"ar-DZ",value:"ar-DZ"},{label:"English",key:"en-US",value:"en-US"}];return(v,_)=>(m(),b("div",P,[e("div",Z,[e("div",j,[e("button",{onClick:f,class:"btn btn-ghost normal-case text-xl gtext"},i(s(t)("common.nameApp")),1)]),q,e("div",H,[l(s(F),{value:p.value,options:g,onUpdateValue:_[0]||(_[0]=o=>s(a).setLanguage(o))},{default:x(()=>[l(s(k),{icon:"material-symbols:language",class:"h-8 w-8 gtext cursor-pointer hover:border-none"})]),_:1},8,["value"]),e("div",G,[(m(),b(N,null,I(u,o=>l(s(M),{key:o.key,size:"small",type:o.key===d.value?"primary":void 0,onClick:y=>s(a).setTheme(o.key)},{icon:x(()=>[l(s(k),{icon:o.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])])])]))}}),J=r=>(V("data-v-82db8636"),r=r(),W(),r),K={class:"glass bg-blue-200 dark:bg-gray-950 dark:text-white rounded-lg mt-8 mb-2 shadow-lg relative overflow-hidden"},Q=J(()=>e("div",{class:"w-24 h-24 bg-purple-600 rounded-full absolute -bottom-8 -left-14"},null,-1)),X={class:"footer p-6"},Y={class:"gtext text-2xl font-bold"},ee={class:"gtext text-2xl font-bold"},se={class:"gtext text-2xl font-bold"},te={class:"grid grid-flow-col gap-4"},oe={class:"footer footer-center p-4"},ae=$({__name:"index",setup(r){const h=C(),f=D(),a=S([]),d=()=>{a.value=[{id:1,title:t("services.homeWork"),description:t("services.homeWorkDesc")},{id:2,title:t("services.graduationResearch"),description:t("services.graduationResearchDesc")},{id:3,title:t("services.webDesign"),description:t("services.webDesignDesc")},{id:4,title:t("services.study"),description:t("services.studyDesc")}]};R(()=>[f.language],()=>{d()}),A(()=>{d()});async function p(n){v(),await h.push(n),_()}const u=O(),g=S(!0);function v(){u.start(),g.value=!1}function _(){u.finish(),g.value=!0}function o(n){console.log(`Clicked on ${n} icon`),window.open(y(n),"_blank")}function y(n){switch(n){case"youtube":return"https://www.youtube.com/";case"facebook":return"https://www.facebook.com/";case"whatsapp":return"https://api.whatsapp.com/send?phone=967714589027";default:return"#"}}return(n,c)=>(m(),b("footer",K,[Q,e("div",X,[e("nav",null,[e("div",Y,i(s(t)("common.nameApp")),1),l(s(z),{size:70})]),e("nav",null,[e("div",ee,i(s(t)("app.company")),1),e("div",{onClick:c[0]||(c[0]=()=>p("/policies/terms-of-use")),class:"link link-hover text-lg underline underline-offset-4"},i(s(t)("app.termsOfUse")),1),e("div",{onClick:c[1]||(c[1]=()=>p("/policies/privacy-policy")),class:"link link-hover text-lg underline underline-offset-4"},i(s(t)("app.privacyPolicy")),1)]),e("nav",null,[e("div",se,i(s(t)("app.followUs")),1),e("div",te,[e("div",{onClick:c[2]||(c[2]=()=>o("whatsapp")),class:"icon-wrapper"},[l(s(k),{icon:"logos:whatsapp-icon"})])])]),e("div",null,[l(s(T))])]),e("div",oe,[e("aside",null,[e("p",null,i(s(t)("app.copyWrite")),1)])])]))}}),re=E(ae,[["__scopeId","data-v-82db8636"]]);export{re as F,ce as _};
