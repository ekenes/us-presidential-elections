import{P as c,$ as f}from"./utils-CYM9l9Oc.js";import{o as y}from"./jsonContext-CbvIEB6E.js";import{l as d,a as v,f as x}from"./index-GOO0DjDp.js";import{p as s}from"./resourceUtils-DW9YqCr8.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveUtils-CGbtHkHp.js";import"./resourceUtils-CVHf2dlv.js";const o="Media Layer",P="media-layer-save",E="media-layer-save-as",i=["media-layer:unsupported-source"];function n(e){return{isValid:e.type==="media",errorMessage:"Layer.type should be 'media'"}}function m(e){return y(e,"portal-item",!0)}function p(e){return Promise.resolve(e.layerJSON)}async function u(e,r){r.extent=e.fullExtent?await d(e.fullExtent):null}async function I(e,r){r.title||(r.title=e.title),await u(e,r),v(r,x.METADATA)}async function J(e,r){return c({layer:e,itemType:o,validateLayer:n,createJSONContext:t=>m(t),createItemData:p,errorNamePrefix:P,supplementalUnsupportedErrors:i,setItemProperties:u,saveResources:(t,a)=>s(e.resourceReferences,a)},r)}async function M(e,r,t){return f({layer:e,itemType:o,validateLayer:n,createJSONContext:a=>m(a),createItemData:p,errorNamePrefix:E,supplementalUnsupportedErrors:i,newItem:r,setItemProperties:I,saveResources:(a,l)=>s(e.resourceReferences,l)},t)}export{J as save,M as saveAs};
