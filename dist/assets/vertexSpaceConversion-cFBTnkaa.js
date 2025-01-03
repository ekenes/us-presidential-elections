import{bC as K,e7 as Q,e8 as sn,e9 as cn,ea as fn,eb as pn,a1 as b,cq as S,ec as mn,ed as An,ee as U,ef as X,eg as gn,dJ as Tn,eh as yn,W as En,ei as Rn}from"./index-GOO0DjDp.js";import{j as L,n as Z}from"./mat3-C-OMcVdC.js";import{e as nn}from"./mat3f64-q3fE-ZOt.js";import{e as v,o as rn}from"./mat4f64-CSKppSlJ.js";import{N as q,A as Fn,y as tn,c as dn,E as Nn}from"./vec32-Bq8LfEfc.js";import{a as en,w as $n}from"./spatialReferenceEllipsoidUtils-CLmzFMqA.js";import{C as O}from"./computeTranslationToOriginAndRotation-C8WdtVmx.js";import{c as I}from"./projectPointToVector-DcIbqPS4.js";import{a as On,m as _n}from"./meshVertexSpaceUtils-Dy_SZOm6.js";import{f as V,l as on,i as C,e as B}from"./vec3-BSXX4O64.js";import{i as d,T as N}from"./BufferView-Bc_fuGNr.js";import{n as wn}from"./vec4-CkfdGPaO.js";const or="Projection may be possible after calling projection.load().";function y(n,r,t,e){n.error(`Failed to project from (wkid:${r.wkid}) to (wkid:${t.wkid}).${e?" ":""}${e}`)}function Cn(n,r,t,e,o,l){return M(F.TO_PCPF,d.fromTypedArray(n),R.NORMAL,N.fromTypedArray(r),t,N.fromTypedArray(e),o,d.fromTypedArray(l))?l:null}function Pn(n,r,t,e,o,l){return M(F.FROM_PCPF,d.fromTypedArray(n),R.NORMAL,N.fromTypedArray(r),t,N.fromTypedArray(e),o,d.fromTypedArray(l))?l:null}function hn(n,r,t,e){return K(n,r,0,t,e,0)?t:null}function xn(n,r,t,e){return K(n,r,0,t,e,0)?t:null}function an(n,r,t){return L(p,t),V(r,n,p),Q(p)&&on(r,r),r}function ln(n,r,t){return Z(p,t),wn(r,n,p),Q(p)&&on(r,r,4),r}function Sn(n,r,t,e,o,l){if(!M(F.TO_PCPF,d.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),R.TANGENT,N.fromTypedArray(r),t,N.fromTypedArray(e),o,d.fromTypedArray(l,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}function vn(n,r,t,e,o,l){if(!M(F.FROM_PCPF,d.fromTypedArray(n,16),R.TANGENT,N.fromTypedArray(r),t,N.fromTypedArray(e),o,d.fromTypedArray(l,16)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}var R,F;function J(n,r,t,e,o){switch(O(e,t,_,e),n===F.FROM_PCPF&&S(_,_),r){case R.NORMAL:return L(o,_);case R.TANGENT:return Z(o,_)}}function M(n,r,t,e,o,l,a,i){if(!r)return;const c=e.count;if(Mn(o))for(let u=0;u<c;u++)l.getVec(u,x),r.getVec(u,T),q(T,T,J(n,t,x,a,p)),i.setVec(u,T);else for(let u=0;u<c;u++){l.getVec(u,x),r.getVec(u,T);const f=sn(e.get(u,1));let s=Math.cos(f);t===R.TANGENT!=(n===F.TO_PCPF)&&(s=1/s),J(n,t,x,a,p),n===F.TO_PCPF?(p[0]*=s,p[1]*=s,p[2]*=s,p[3]*=s,p[4]*=s,p[5]*=s):(p[0]*=s,p[3]*=s,p[6]*=s,p[1]*=s,p[4]*=s,p[7]*=s),q(T,T,p),Fn(T,T),i.setVec(u,T)}return i}function Mn(n){return n.isWGS84||cn(n)||fn(n)||pn(n)}(function(n){n[n.NORMAL=0]="NORMAL",n[n.TANGENT=1]="TANGENT"})(R||(R={})),function(n){n[n.TO_PCPF=0]="TO_PCPF",n[n.FROM_PCPF=1]="FROM_PCPF"}(F||(F={}));const x=b(),T=b(),_=v(),p=nn(),A=()=>En.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function ar(n,r,{vertexSpace:t,spatialReference:e}){if(t.type==="georeferenced"){const u=n;if(!I(r,u,e))return!1;const{origin:f}=t;return dn(n,u,f),!0}const o=en(e),l=n;if(!I(r,l,o))return!1;const{origin:a}=t,i=H;if(!O(e,a,i,o))return!1;const c=S(H,i);return c!=null&&(Nn(n,l,c),!0)}function lr(n,r,t){const{vertexSpace:e,transform:o,vertexAttributes:l}=n,a=On(e)?o:null,i=G(n.spatialReference,t,E.SOURCE_AND_TARGET);if(_n(e,r)&&(!a||mn(a.localMatrix,rn))&&P(i)){const{position:c,normal:u,tangent:f}=l,s=t==null?void 0:t.allowBufferReuse;return{position:s?c:c.slice(),normal:s?u:u==null?void 0:u.slice(),tangent:s?f:f==null?void 0:f.slice()}}switch(n.vertexSpace.type){case"local":return r.type==="local"?Vn(n,n.vertexSpace,r.origin,t):Un(n,n.vertexSpace,r.origin,t);case"georeferenced":return r.type==="local"?bn(n,n.vertexSpace,r.origin,t):Gn(n,n.vertexSpace,r.origin,t)}}function Gn({vertexAttributes:n,transform:r,spatialReference:t},{origin:e},o,l){const a=G(t,l,E.SOURCE_AND_TARGET),i=e||!P(a)?An(m,(r==null?void 0:r.localMatrix)??rn):null;i&&j(i,t,l,E.SOURCE_AND_TARGET);const{position:c,normal:u,tangent:f}=i?k(n,i):n,s=l==null?void 0:l.allowBufferReuse,$=s?c:new Float64Array(c.length);let g=c;if(e&&(g=C($,g,e)),o){const h=tn(un,o);g=C($,g,h)}return{position:g!==n.position||s?g:g.slice(),normal:u!==n.normal||s?u:u==null?void 0:u.slice(),tangent:f!==n.tangent||s?f:f==null?void 0:f.slice()}}function D(n,r){return r!=null&&r.useEllipsoid&&Rn(n)?$n:en(n)}function Un({spatialReference:n,vertexAttributes:r,transform:t},{origin:e},o,l){const a=D(n,l);if(!O(n,e,m,a))return y(A(),n,a),null;t&&U(m,m,t.localMatrix),j(m,n,l,E.SOURCE);const i=new Float64Array(r.position.length),c=Bn(r.position,m,n,i,a);if(!c)return null;const u=Dn(c,n,i,a,r.normal,m);if(r.normal&&!u)return null;const f=kn(c,n,i,a,r.tangent,m);if(r.tangent&&!f)return null;if(o){const s=tn(un,o);C(c,c,s)}return{position:c,normal:u,tangent:f}}function bn({vertexAttributes:n,spatialReference:r,transform:t},{origin:e},o,l){const a=D(r,l);if(!O(r,o,m,a))return y(A(),r,a),null;const i=1/G(r,l,E.TARGET);X(m,m,[i,i,i]);const c=S(w,m),{position:u,normal:f,tangent:s}=Ln(n,e,t),$=new Float64Array(u.length),g=jn(u,r,c,$,a);if(!g)return null;const h=L(qn,c),W=Wn(f,u,r,$,a,h,f!==n.normal?f:void 0);if(!W&&f)return null;const Y=Yn(s,u,r,$,a,h,s!==n.tangent?s:void 0);return!Y&&s?null:{position:g,normal:W,tangent:Y}}function Ln(n,r,t){if(!r)return n;if(!t){const{position:o,normal:l,tangent:a}=n;return{position:C(new Float64Array(o.length),o,r),tangent:a,normal:l}}const e=k(n,t.localMatrix);return C(e.position,e.position,r),e}function Vn({vertexAttributes:n,spatialReference:r,transform:t},{origin:e},o,l){const a=D(r,l);if(!O(r,e,m,a))return y(A(),r,a),null;if(t&&U(m,m,t.localMatrix),!O(r,o,w,a))return y(A(),a,r),null;S(w,w);const i=U(m,w,m);return j(i,r,l,E.SOURCE_AND_TARGET),k(n,i)}function k(n,r){const t=new Float64Array(n.position.length);B(t,n.position,r);const e=n.normal?new Float32Array(n.normal.length):null,o=n.tangent?new Float32Array(n.tangent.length):null;return e&&n.normal&&an(n.normal,e,r),o&&n.tangent&&ln(n.tangent,o,r),{position:t,normal:e,tangent:o}}function Bn(n,r,t,e,o){B(e,n,r);const l=new Float64Array(n.length);return xn(e,o,l,t)?l:(y(A(),o,t),null)}function Dn(n,r,t,e,o,l){if(o==null)return null;const a=new Float32Array(o.length);return an(o,a,l),Pn(a,n,r,t,e,a)?a:(y(A(),e,r),null)}function kn(n,r,t,e,o,l){if(o==null)return null;const a=new Float32Array(o.length);return ln(o,a,l),vn(a,n,r,t,e,a)?a:(y(A(),e,r),null)}function j(n,r,t,e){const o=G(r,t,e);P(o)||X(n,n,[o,o,o])}function G(n,r,t){const e=!!(t&E.SOURCE),o=!!(t&E.TARGET),l=r==null?void 0:r.sourceUnit,a=r==null?void 0:r.targetUnit;if(!l&&!a)return 1;let i=z(l,n);e||!l||P(i)||(A().warn("source unit conversion not supported"),i=1);let c=1/z(a,n);return o||!a||P(c)||(A().warn("target unit conversion not supported"),c=1),i*c}function P(n){return gn(n,1)}function jn(n,r,t,e,o){const l=hn(n,r,e,o);if(!l)return y(A(),r,o),null;const a=new Float64Array(l.length);return B(a,l,t),a}function Wn(n,r,t,e,o,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return Cn(n,r,t,e,o,i)?(V(i,i,l),i):(y(A(),t,o),null)}function Yn(n,r,t,e,o,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return Sn(n,r,t,e,o,i)?(V(i,i,l,4),i):(y(A(),t,o),null)}function z(n,r){if(n==null)return 1;const t=Tn(r);return 1/yn(t,"meters",n)}const m=v(),w=v(),qn=nn(),un=b(),H=v();var E;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET",n[n.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"})(E||(E={}));export{lr as B,Cn as E,y as F,vn as G,or as O,Pn as R,hn as g,xn as h,ar as k,z as n,Sn as w};
