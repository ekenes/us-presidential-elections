import{cv as h,cw as m}from"./index-GOO0DjDp.js";async function T(e,d=e.popupTemplate){var n,o;if(d==null)return[];const s=await d.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:c}=d,{objectIdField:u,typeIdField:i,globalIdField:p,relationships:a}=e;if(s.includes("*"))return["*"];const r=c?h(e):[],l=m(e.fieldsIndex,[...s,...r]);return i&&l.push(i),l&&u&&((n=e.fieldsIndex)!=null&&n.has(u))&&!l.includes(u)&&l.push(u),l&&p&&((o=e.fieldsIndex)!=null&&o.has(p))&&!l.includes(p)&&l.push(p),a&&a.forEach(I=>{var f;const{keyField:t}=I;l&&t&&((f=e.fieldsIndex)!=null&&f.has(t))&&!l.includes(t)&&l.push(t)}),l}function F(e,d){return e.popupTemplate?e.popupTemplate:d!=null&&d.defaultPopupTemplateEnabled&&e.defaultPopupTemplate!=null?e.defaultPopupTemplate:null}export{T as n,F as p};
