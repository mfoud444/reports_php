import{a,g as m,b as i}from"./Grid-4ac813f4.js";import{N as n,f as p,a as f}from"./FormItem-8daefc5e.js";import{d as I,m as d,S as s,bh as o}from"./index-abec4112.js";const l=Object.assign(Object.assign({},m),p),P=I({__GRID_ITEM__:!0,name:"FormItemGridItem",alias:["FormItemGi"],props:l,setup(){const t=d(null);return{formItemInstRef:t,validate:(...e)=>{const{value:r}=t;if(r)return r.validate(...e)},restoreValidation:()=>{const{value:e}=t;e&&e.restoreValidation()}}},render(){return s(a,o(this.$.vnode.props||{},i),{default:()=>{const t=o(this.$props,f);return s(n,Object.assign({ref:"formItemInstRef"},t),this.$slots)}})}});export{P as N};
