import{d as _,f as O,bg as v,m as n,bt as N,c as g,b,e as u,u as e,a as s,w as r,o as T,t as o,z as x,l as y,C}from"./index-abec4112.js";import{N as h}from"./Form-94767fab.js";const S=_({__name:"EditTermsOfUse",setup(k){const l=O(),f=v(),c=n(null),t=n({termsOfUse:""}),d={termsOfUse:[{required:!0,message:"Terms of use is required",trigger:"blur"}]};async function i(){try{await f.updateTermsOfUse(t.value.termsOfUse),l.push({name:"settingsapp"})}catch(a){console.error("Failed to update terms of use",a)}}return(a,m)=>{const p=N("NFormItem");return T(),g("div",null,[b("h1",null,u(e(o)("common.editTermsOfUse")),1),s(e(h),{model:t.value,rules:d,ref_key:"formRef",ref:c},{default:r(()=>[s(p,{path:"termsOfUse",label:e(o)("common.termsOfUse")},{default:r(()=>[s(e(x),{value:t.value.termsOfUse,"onUpdate:value":m[0]||(m[0]=U=>t.value.termsOfUse=U),type:"textarea"},null,8,["value"])]),_:1},8,["label"]),s(e(y),{onClick:i},{default:r(()=>[C(u(e(o)("common.save")),1)]),_:1})]),_:1},8,["model"])])}}});export{S as default};
