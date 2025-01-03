import{c as z,h as B,d,F as j,l as S,a as I,u as f,f as u,L as V,s as y,i as k}from"./index-GOO0DjDp.js";import{i as L}from"./originUtils-D69mHv66.js";import{P as q,y as N,w as x,$ as C,d as H,v as Q,p as O,f as W,I as R,m as T}from"./utils-CYM9l9Oc.js";import{t as X,a as Z,i as aa}from"./lazyLayerLoader-CrwIAOU9.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./jsonContext-CbvIEB6E.js";import"./saveUtils-CGbtHkHp.js";const w="Feature Service",v="feature-layer-utils",ea=`${v}-save`,ta=`${v}-save-as`,p=`${v}-saveall`,m=`${v}-saveall-as`;function $(a){return{isValid:V(a)&&(!("dynamicDataSource"in a)||!a.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function g(a){const e=[],t=[];for(const{layer:r,layerJSON:s}of a)r.isTable?t.push(s):e.push(s);return{layers:e,tables:t}}function M(a){return g([a])}async function D(a,e){return/\/\d+\/?$/.test(a.url)?M(e[0]):F(e,a)}async function F(a,e){if(a.reverse(),!e)return g(a);const t=await ra(e,a);for(const r of a)J(r.layer,r.layerJSON,t);return sa(t,a),t}async function ra(a,e){let t=await a.fetchData("json");if(na(t))return t;t||(t={}),oa(t);const{layer:{url:r,customParameters:s,apiKey:o}}=e[0];return await ia(t,{url:r??"",customParameters:s,apiKey:o},e.map(n=>n.layer.layerId)),t}function na(a){return!!(a&&Array.isArray(a.layers)&&Array.isArray(a.tables))}function oa(a){a.layers||(a.layers=[]),a.tables||(a.tables=[])}function sa(a,e){const t=[],r=[];for(const{layer:s}of e){const{isTable:o,layerId:n}=s;o?r.push(n):t.push(n)}A(a.layers,t),A(a.tables,r)}function A(a,e){if(a.length<2)return;const t=[];for(const{id:r}of a)t.push(r);z(t.sort(E),e.slice().sort(E))&&a.sort((r,s)=>{const o=e.indexOf(r.id),n=e.indexOf(s.id);return o<n?-1:o>n?1:0})}function E(a,e){return a<e?-1:a>e?1:0}async function ia(a,e,t){const{url:r,customParameters:s,apiKey:o}=e,{serviceJSON:n,layersJSON:i}=await X(r,{customParameters:s,apiKey:o}),l=b(a.layers,n.layers,t),c=b(a.tables,n.tables,t);a.layers=l.itemResources,a.tables=c.itemResources;const h=[...l.added,...c.added],K=i?[...i.layers,...i.tables]:[];await la(a,h,r,K)}function b(a,e,t){const r=B(a,e,(o,n)=>o.id===n.id);a=a.filter(o=>!r.removed.some(n=>n.id===o.id));const s=r.added;return s.forEach(({id:o})=>{a.push({id:o})}),{itemResources:a,added:s.filter(({id:o})=>!t.includes(o))}}async function la(a,e,t,r){const s=await ca(e),o=e.map(({id:n,type:i})=>new(s.get(i))({url:t,layerId:n,sourceJSON:r.find(({id:l})=>l===n)}));await Promise.allSettled(o.map(n=>n.load())),o.forEach(n=>{const{layerId:i,loaded:l,defaultPopupTemplate:c}=n;if(!l||c==null)return;const h={id:i,popupInfo:c.toJSON()};n.operationalLayerType!=="ArcGISFeatureLayer"&&(h.layerType=n.operationalLayerType),J(n,h,a)})}async function ca(a){const e=[];a.forEach(({type:s})=>{const o=aa(s),n=Z[o];e.push(n())});const t=await Promise.all(e),r=new Map;return a.forEach(({type:s},o)=>{r.set(s,t[o])}),r}function J(a,e,t){a.isTable?P(t.tables,e):P(t.layers,e)}function P(a,e){const t=a.findIndex(({id:r})=>r===e.id);t===-1?a.push(e):a[t]=e}function Y(a,e){if(!a.length)throw new y(`${e}:missing-parameters`,"'layers' array should contain at least one feature layer")}function ua(a,e){const t=a.map(r=>r.portalItem.id);if(new Set(t).size>1)throw new y(`${e}:invalid-parameters`,"All layers in the 'layers' array should be loaded from the same portal item")}function _(a,e){const t=a.map(r=>r.layerId);if(new Set(t).size!==t.length)throw new y(`${e}:invalid-parameters`,"'layers' array should contain only one instance each of layer or table in a feature service")}async function ya(a){Y(a,p),await Promise.all(a.map(e=>e.load()));for(const e of a)O(e,p,$),W({layer:e,itemType:w,errorNamePrefix:p});ua(a,p),_(a,p)}function U(a,e){const t=a.layers.some(r=>r.layerType==="OrientedImageryLayer");f(e,u.ORIENTED_IMAGERY_LAYER,t)}function G(a,e){const t=a.some(r=>r.type==="oriented-imagery");f(e,u.ORIENTED_IMAGERY_LAYER,t)}async function fa(a,e,t){U(t,e)}async function pa(a,e){const{url:t,layerId:r,title:s,fullExtent:o,isTable:n}=a,i=d(t);e.url=((i==null?void 0:i.serverType)==="FeatureServer"?t:`${t}/${r}`)??null,e.title||(e.title=s),e.extent=null,n||o==null||(e.extent=await S(o)),I(e,u.METADATA),I(e,u.MULTI_LAYER),k(e,u.SINGLE_LAYER),f(e,u.TABLE,n),G([a],e)}function ma(a,e){for(const o of a){const n=o.parsedUrl.path,i=d(n);if(!(i==null?void 0:i.url.path))throw new y(`${e}:invalid-parameters`,T(o,`has unsupported url pattern: ${n}`),{layer:o});const c=i==null?void 0:i.serverType;if(c!=="FeatureServer"&&c!=="MapServer")throw new y(`${e}:invalid-parameters`,T(o,`has unsupported server type: ${c}`),{layer:o});if(c==="MapServer"&&a.length>1)throw new y(`${e}:invalid-parameters`,"Only one layer or table in a map service can be saved")}const t=d(a[0].parsedUrl.path),r=t==null?void 0:t.url.path;if(!a.every(o=>{const n=d(o.parsedUrl.path);return(n==null?void 0:n.url.path)===r}))throw new y(`${e}:invalid-parameters`,"'layers' array should only contain layers or tables that belong to the same feature service")}async function da(a){Y(a,m),await Promise.all(a.map(e=>e.load()));for(const e of a)O(e,m,$);ma(a,m),_(a,m)}function ha(a,e){U(e,a),R(a)}async function wa(a,e){let t=0,r=0;for(const{isTable:n}of e)n?r++:t++;const s=e[0].parsedUrl.path,o=d(s);if(a.url=(o==null?void 0:o.serverType)==="FeatureServer"?o.url.path:s,a.title||(a.title=o.title),a.extent=null,t>0){const n=e.map(i=>i.fullExtent).filter(j).reduce((i,l)=>i.clone().union(l));n&&(a.extent=await S(n))}I(a,u.METADATA),f(a,u.MULTI_LAYER,e.length>1),f(a,u.SINGLE_LAYER,e.length===1),f(a,u.TABLE,r>0&&t===0),G(e,a),R(a)}async function Pa(a,e){return q({layer:a,itemType:w,validateLayer:$,createItemData:(t,r)=>D(r,[t]),errorNamePrefix:ea,setItemProperties:fa},e)}async function Sa(a,e){await ya(a);const t=a[0].portalItem,r=N(t),s=await Promise.all(a.map(n=>x(n,r,e))),o=await D(t,a.map((n,i)=>({layer:n,layerJSON:s[i]})));return ha(t,o),await t.update({data:o}),await Promise.all(a.slice(1).map(n=>n.portalItem.reload())),L(r),t.clone()}async function La(a,e,t){return C({layer:a,itemType:w,validateLayer:$,createItemData:(r,s)=>Promise.resolve(M(r)),errorNamePrefix:ta,newItem:e,setItemProperties:pa},t)}async function Na(a,e,t){await da(a);const r=H({itemType:w,errorNamePrefix:m,newItem:e}),s=N(r),o=await Promise.all(a.map(i=>x(i,s,t))),n=await F(a.map((i,l)=>({layer:i,layerJSON:o[l]})));await wa(r,a),await Q(r,n,t);for(const i of a)i.portalItem=r.clone();return L(s),r}export{Pa as save,Sa as saveAll,Na as saveAllAs,La as saveAs};
