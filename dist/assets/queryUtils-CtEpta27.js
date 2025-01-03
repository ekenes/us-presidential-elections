const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/geometryEngineJSON-BwrklJA_.js","assets/geometryEngineBase-yFIvKOkM.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/json-Wa8cmqdu.js"])))=>i.map(i=>d[i]);
import{e0 as v,e1 as O,ag as u,a6 as Z,e2 as y,ai as m,e3 as R,F as A,ck as B,b_ as h,bg as N,e4 as P,ab as T,aK as E,e5 as _,aw as J,ax as L,bB as k,e6 as q,af as I,bL as p,_ as K}from"./index-GOO0DjDp.js";import{t as S}from"./json-Wa8cmqdu.js";const c=[0,0];function d(e,n){if(!n)return null;if("x"in n){const i={x:0,y:0};return[i.x,i.y]=e(n.x,n.y,c),n.z!=null&&(i.z=n.z),n.m!=null&&(i.m=n.m),i}if("xmin"in n){const i={xmin:0,ymin:0,xmax:0,ymax:0};return[i.xmin,i.ymin]=e(n.xmin,n.ymin,c),[i.xmax,i.ymax]=e(n.xmax,n.ymax,c),n.hasZ&&(i.zmin=n.zmin,i.zmax=n.zmax,i.hasZ=!0),n.hasM&&(i.mmin=n.mmin,i.mmax=n.mmax,i.hasM=!0),i}return"rings"in n?{rings:x(n.rings,e),hasM:n.hasM,hasZ:n.hasZ}:"paths"in n?{paths:x(n.paths,e),hasM:n.hasM,hasZ:n.hasZ}:"points"in n?{points:w(n.points,e),hasM:n.hasM,hasZ:n.hasZ}:null}function x(e,n){const i=[];for(const t of e)i.push(w(t,n));return i}function w(e,n){const i=[];for(const t of e){const a=n(t[0],t[1],[0,0]);i.push(a),t.length>2&&a.push(t[2]),t.length>3&&a.push(t[3])}return i}async function b(e,n){if(!e||!n)return;const i=Array.isArray(e)?e.map(t=>t.geometry!=null?t.geometry.spatialReference:null).filter(A):[e];await B(i.map(t=>({source:t,dest:n})))}const M=d.bind(null,v),z=d.bind(null,O);function F(e,n,i,t){if(!e||(i||(i=n,n=e.spatialReference),!h(n)||!h(i)||u(n,i)))return e;if(y(n,i)){const a=m(i)?M(e):z(e);return a.spatialReference=i,a}return R(S,[e],n,i,null,t)[0]}class D{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(n,i,t,a){if(!(n!=null&&n.length)||!i||!t||u(i,t))return n;const r={geometries:n,inSpatialReference:i,outSpatialReference:t,geographicTransformation:a,resolve:Z()};return this._jobs.push(r),this._timer??(this._timer=setTimeout(this._process,10)),r.resolve.promise}_process(){this._timer=null;const n=this._jobs.shift();if(!n)return;const{geometries:i,inSpatialReference:t,outSpatialReference:a,resolve:r,geographicTransformation:o}=n;y(t,a)?m(a)?r(i.map(M)):r(i.map(z)):r(R(S,i,t,a,o,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const V=new D;function $(e,n,i,t){return V.push(e,n,i,t)}const C=new N({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),g=Object.freeze({});async function ee(e,n,i){const{outFields:t,orderByFields:a,groupByFieldsForStatistics:r,outStatistics:o}=e;if(t)for(let s=0;s<t.length;s++)t[s]=t[s].trim();if(a)for(let s=0;s<a.length;s++)a[s]=a[s].trim();if(r)for(let s=0;s<r.length;s++)r[s]=r[s].trim();if(o)for(let s=0;s<o.length;s++)o[s].onStatisticField&&(o[s].onStatisticField=o[s].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),G(e,n,i)}async function G(e,n,i){var r;if(!e)return null;let{where:t}=e;if(e.where=t=t==null?void 0:t.trim(),(!t||/^1 *= *1$/.test(t)||n&&n===t)&&(e.where=null),!e.geometry)return e;let a=await Q(e);if(e.distance=0,e.units=null,e.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:o}=e.geometry;a=P(a),a.spatialReference=o}if(a){await b(a.spatialReference,i),a=H(a,i);const o=(await T(E(a)))[0];if(o==null)throw g;const s="quantizationParameters"in e&&((r=e.quantizationParameters)==null?void 0:r.tolerance)||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,j=s&&U(a,i)?{densificationStep:8*s}:void 0,f=o.toJSON(),l=F(f,f.spatialReference,i,j);if(!l)throw g;l.spatialReference=i,e.geometry=l}return e}function U(e,n){if(!e)return!1;const i=e.spatialReference;return(_(e)||J(e)||L(e))&&!u(i,n)&&!k(i,n)}function H(e,n){const i=e.spatialReference;return U(e,n)&&_(e)?{spatialReference:i,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}async function Q(e){const{distance:n,units:i}=e,t=e.geometry;if(n==null||"vertexAttributes"in t)return t;const a=t.spatialReference,r=i?C.fromJSON(i):q(a),o=a&&(I(a)||m(a))?t:await b(a,p).then(()=>F(t,p));return(await W())(o.spatialReference,o,n,r)}async function W(){return(await K(async()=>{const{geodesicBuffer:e}=await import("./geometryEngineJSON-BwrklJA_.js").then(n=>n.g);return{geodesicBuffer:e}},__vite__mapDeps([0,1,2,3]))).geodesicBuffer}export{C as R,ee as S,G as a,$ as b,g,F as j,b as x};