const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/loader-yj0DqF7F.js","assets/index-GOO0DjDp.js","assets/index-D7_X1F0b.css","assets/mat4f64-CSKppSlJ.js","assets/enums-V7VQdXj3.js","assets/quat-DWfuhTov.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-aQ5IuZRd.js","assets/vec32-Bq8LfEfc.js","assets/BufferView-Bc_fuGNr.js","assets/vec2-c1cMo5Hj.js","assets/resourceUtils-agCuQDh3.js","assets/basicInterfaces-CZwQPxTp.js"])))=>i.map(i=>d[i]);
import{a1 as G,fn as Me,hy as Oe,gZ as pe,U as Re,aI as ge,s as Be,gG as xe,fe as ie,hz as be,gE as K,W as Ee,_ as Ce,e7 as oe,cq as Pe}from"./index-GOO0DjDp.js";import{a as Se}from"./devEnvironmentUtils-CnNDiFMM.js";import{i as ae,j as Le,n as Ne}from"./mat3-C-OMcVdC.js";import{t as ee,e as ye}from"./mat3f64-q3fE-ZOt.js";import{o as ue,r as Fe,e as Ge}from"./mat4f64-CSKppSlJ.js";import{l as Ue}from"./vec2f64-DA6GkJuH.js";import{o as S,u as E,g as L,W as ke,E as re,c as je,i as le,r as qe,A as De,I as He}from"./vec32-Bq8LfEfc.js";import{S as Ve,r as ze,e as V,o as We,a as Ke,C as $e,B as Q,t as Qe,b as Ze,s as Je,c as Xe,n as Ye,d as et,f as z}from"./RealisticTree.glsl-Bw-C5CvV.js";import{c as tt,x as we,L as rt,i as ve,O as st,E as nt}from"./BufferView-Bc_fuGNr.js";import{e as it,f as ot,l as ce,o as he}from"./vec3-BSXX4O64.js";import{n as at,s as me}from"./vec4-CkfdGPaO.js";import{n as ut,d as U,o as lt,g as ct,t as ht,h as mt}from"./DefaultMaterial_COLOR_GAMMA-DkotH3zJ.js";import{r as te}from"./resourceUtils-agCuQDh3.js";import{i as dt,f as ft}from"./vec2f32-BbH2jxlN.js";import{t as pt,l as Te}from"./Indices-DN196Ob9.js";import{t as j}from"./orientedBoundingBox-DhJ8Hffd.js";import{t as gt,e as se,i as M,n as xt}from"./basicInterfaces-CZwQPxTp.js";import{s as bt}from"./Util-DNwDveAw.js";import{e as I}from"./VertexAttribute-BdZWZuT1.js";import{D as de}from"./enums-V7VQdXj3.js";import{a as fe}from"./NormalAttribute.glsl-BXHrFRZd.js";import"./Texture-BSCxK7YP.js";import"./InterleavedLayout-L8Xfk5Gl.js";import"./types-D0PSWh4d.js";import"./sphere-Bhl1G8Gh.js";import"./plane-m241_QIk.js";import"./quatf64-aQ5IuZRd.js";import"./BindType-BmZEZMMh.js";import"./lineSegment-BdDnshna.js";import"./vec2-c1cMo5Hj.js";import"./boundedPlane-D77R_pSx.js";import"./quat-DWfuhTov.js";import"./spatialReferenceEllipsoidUtils-CLmzFMqA.js";import"./computeTranslationToOriginAndRotation-C8WdtVmx.js";function yt(n,e){if(!n)return!1;const{size:t,data:r,indices:l}=n;S(e,0,0,0),S(T,0,0,0);let u=0,i=0;for(let o=0;o<l.length-2;o+=3){const c=l[o]*t,s=l[o+1]*t,a=l[o+2]*t;S(g,r[c],r[c+1],r[c+2]),S(C,r[s],r[s+1],r[s+2]),S(W,r[a],r[a+1],r[a+2]);const h=Ve(g,C,W);h?(E(g,g,C),E(g,g,W),L(g,g,1/3*h),E(e,e,g),u+=h):(E(T,T,g),E(T,T,C),E(T,T,W),i+=3)}return(i!==0||u!==0)&&(u!==0?(L(e,e,1/u),!0):i!==0&&(L(e,T,1/i),!0))}function $t(n,e){if(!n)return!1;const{size:t,data:r,indices:l}=n;S(e,0,0,0);let u=-1,i=0;for(let o=0;o<l.length;o++){const c=l[o]*t;u!==c&&(e[0]+=r[c],e[1]+=r[c+1],e[2]+=r[c+2],i++),u=c}return i>1&&L(e,e,1/i),i>0}function wt(n,e,t){if(!n)return!1;S(t,0,0,0),S(T,0,0,0);let r=0,l=0;const{size:u,data:i,indices:o}=n,c=o.length-1,s=c+(e?2:0);for(let a=0;a<s;a+=2){const h=a<c?a+1:0,m=o[a<c?a:c]*u,d=o[h]*u;g[0]=i[m],g[1]=i[m+1],g[2]=i[m+2],C[0]=i[d],C[1]=i[d+1],C[2]=i[d+2],L(g,E(g,g,C),.5);const f=ke(g,C);f>0?(E(t,t,L(g,g,f)),r+=f):r===0&&(E(T,T,g),l++)}return r!==0?(L(t,t,1/r),!0):l!==0&&(L(t,T,1/l),!0)}const g=G(),C=G(),W=G(),T=G();class vt{constructor(){this.uid=Me()}}class Tt extends vt{constructor(e){super(),this.highlightGroupName=e,this.channel=gt.Highlight}}class Z extends ze{constructor(e,t,r=null,l=V.Mesh,u=null,i=-1){super(),this.material=e,this.mapPositions=r,this.type=l,this.objectAndLayerIdColor=u,this.edgeIndicesLength=i,this.highlights=new Set,this._highlightGroupCounts=new Map,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[o,c]of t)this._attributes.set(o,{...c,indices:pt(c.indices)}),o===I.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(o).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new Z(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((r,l)=>{r.exclusive=!1,t._attributes.set(l,r)}),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:We(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value.indices;return(e==null?void 0:e.length)??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===V.Mesh?this._computeAttachmentOriginTriangles(e):this.type===V.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(this._transformation!=null&&re(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const t=this.attributes.get(I.POSITION);return yt(t,e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(I.POSITION);return wt(t,It(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){const t=this.attributes.get(I.POSITION);return $t(t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(I.POSITION);if(!e||e.indices.length===0)return null;const t=this.type===V.Mesh?3:1;bt(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=Te(e.indices.length/t);return new Ke(r,t,e)}get transformation(){return this._transformation??ue}set transformation(e){this._transformation=e&&e!==ue?Fe(e):null}get highlightGroups(){return this._highlightGroupCounts}get hasHighlights(){return this._highlightGroupCounts.size>0}foreachHighlightGroup(e){this._highlightGroupCounts.forEach((t,r)=>e(r))}allocateIdAndHighlight(e){const t=new Tt(e);return this.addHighlight(t)}addHighlight(e){this.highlights.add(e);const{highlightGroupName:t}=e,r=(this._highlightGroupCounts.get(t)??0)+1;return this._highlightGroupCounts.set(t,r),e}removeHighlight(e){if(this.highlights.delete(e)){const{highlightGroupName:t}=e,r=this._highlightGroupCounts.get(t)??0;r<=1?this._highlightGroupCounts.delete(t):this._highlightGroupCounts.set(t,r-1)}}}function It(n,e){return!(!("isClosed"in n)||!n.isClosed)&&e.indices.length>2}function D(n){if(n==null)return null;const e=n.offset!=null?n.offset:dt,t=n.rotation!=null?n.rotation:0,r=n.scale!=null?n.scale:ft,l=ee(1,0,0,0,1,0,e[0],e[1],1),u=ee(Math.cos(t),-Math.sin(t),0,Math.sin(t),Math.cos(t),0,0,0,1),i=ee(r[0],0,0,0,r[1],0,0,0,1),o=ye();return ae(o,u,i),ae(o,l,o),o}class At{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class _t{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new At,this.numberOfVertices=0}}const B=()=>Ee.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Mt(n,e){const t=await Ot(n,e),r=await Pt(t.textureDefinitions??{},e);let l=0;for(const u in r)if(r.hasOwnProperty(u)){const i=r[u];l+=i!=null&&i.image?i.image.width*i.image.height*4:0}return{resource:t,textures:r,size:l+Oe(t)}}async function Ot(n,e){const t=e==null?void 0:e.streamDataRequester;if(t)return Rt(n,t,e);const r=await pe(Re(n,e));if(r.ok===!0)return r.value.data;ge(r.error),Ie(r.error)}async function Rt(n,e,t){const r=await pe(e.request(n,"json",t));if(r.ok===!0)return r.value;ge(r.error),Ie(r.error.details.url)}function Ie(n){throw new Be("",`Request for object resource failed: ${n}`)}function Bt(n){const e=n.params,t=e.topology;let r=!0;switch(e.vertexAttributes||(B().warn("Geometry must specify vertex attributes"),r=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const u=e.faces;if(u){if(e.vertexAttributes)for(const i in e.vertexAttributes){const o=u[i];o!=null&&o.values?(o.valueType!=null&&o.valueType!=="UInt32"&&(B().warn(`Unsupported indexed geometry indices type '${o.valueType}', only UInt32 is currently supported`),r=!1),o.valuesPerElement!=null&&o.valuesPerElement!==1&&(B().warn(`Unsupported indexed geometry values per element '${o.valuesPerElement}', only 1 is currently supported`),r=!1)):(B().warn(`Indexed geometry does not specify face indices for '${i}' attribute`),r=!1)}}else B().warn("Indexed geometries must specify faces"),r=!1;break}default:B().warn(`Unsupported topology '${t}'`),r=!1}n.params.material||(B().warn("Geometry requires material"),r=!1);const l=n.params.vertexAttributes;for(const u in l)l[u].values||(B().warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function Et(n,e){var f,$;const t=new Array,r=new Array,l=new Array,u=new Ze,i=n.resource,o=xe.parse(i.version||"1.0","wosr");Lt.validate(o);const c=i.model.name,s=i.model.geometries,a=i.materialDefinitions??{},h=n.textures;let m=0;const d=new Map;for(let p=0;p<s.length;p++){const x=s[p];if(!Bt(x))continue;const A=St(x),w=x.params.vertexAttributes,q=[],J=b=>{if(x.params.topology==="PerAttributeArray")return null;const _=x.params.faces;for(const R in _)if(R===b)return _[R].values;return null},N=w[I.POSITION],H=N.values.length/N.valuesPerElement;for(const b in w){const _=w[b],R=_.values,Y=J(b)??Te(H);q.push([b,new j(R,Y,_.valuesPerElement,!0)])}const O=A.texture,y=h&&h[O];if(y&&!d.has(O)){const{image:b,parameters:_}=y,R=new $e(b,_);r.push(R),d.set(O,R)}const F=d.get(O),X=F?F.id:void 0,P=A.material;let v=u.get(P,O);if(v==null){const b=a[P.slice(P.lastIndexOf("/")+1)].params;b.transparency===1&&(b.transparency=0);const _=y&&y.alphaChannelUsage,R=b.transparency>0||_==="transparency"||_==="maskAndTransparency",Y=y?Ae(y.alphaChannelUsage):void 0,ne={ambient:ie(b.diffuse),diffuse:ie(b.diffuse),opacity:1-(b.transparency||0),transparent:R,textureAlphaMode:Y,textureAlphaCutoff:.33,textureId:X,initTextureTransparent:!0,doubleSided:!0,cullFace:se.None,colorMixMode:b.externalColorMixMode||"tint",textureAlphaPremultiplied:(y==null?void 0:y.parameters.preMultiplyAlpha)??!1};e!=null&&e.materialParameters&&Object.assign(ne,e.materialParameters),v=new Q(ne,e),u.set(P,O,v)}l.push(v);const _e=new Z(v,q);m+=(($=(f=q.find(b=>b[0]===I.POSITION))==null?void 0:f[1])==null?void 0:$.indices.length)??0,t.push(_e)}return{engineResources:[{name:c,stageResources:{textures:r,materials:l,geometries:t},pivotOffset:i.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:Ct(t)}}function Ct(n){const e=be();return n.forEach(t=>{const r=t.boundingInfo;r!=null&&(K(e,r.bbMin),K(e,r.bbMax))}),e}async function Pt(n,e){const t=new Array;for(const u in n){const i=n[u],o=i.images[0].data;if(!o){B().warn("Externally referenced texture data is not yet supported");continue}const c=i.encoding+";base64,"+o,s="/textureDefinitions/"+u,a=i.channels==="rgba"?i.alphaChannelUsage||"transparency":"none",h={noUnpackFlip:!0,wrap:{s:de.REPEAT,t:de.REPEAT},preMultiplyAlpha:Ae(a)!==M.Opaque},m=e!=null&&e.disableTextures?Promise.resolve(null):Qe(c,e);t.push(m.then(d=>({refId:s,image:d,parameters:h,alphaChannelUsage:a})))}const r=await Promise.all(t),l={};for(const u of r)l[u.refId]=u;return l}function Ae(n){switch(n){case"mask":return M.Mask;case"maskAndTransparency":return M.MaskBlend;case"none":return M.Opaque;default:return M.Blend}}function St(n){const e=n.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Lt=new xe(1,2,"wosr");async function vr(n,e){var h;const t=Nt(Se(n));if(t.fileType==="wosr"){const m=await(e.cache?e.cache.loadWOSR(t.url,e):Mt(t.url,e)),{engineResources:d,referenceBoundingBox:f}=Et(m,e);return{lods:d,referenceBoundingBox:f,isEsriSymbolResource:!1,isWosr:!0}}let r;if(e.cache)r=await e.cache.loadGLTF(t.url,e,!!e.usePBR);else{const{loadGLTF:m}=await Ce(()=>import("./loader-yj0DqF7F.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]));r=await m(new ut(e.streamDataRequester),t.url,e,e.usePBR)}const l=(h=r.model.meta)==null?void 0:h.ESRI_proxyEllipsoid,u=r.meta.isEsriSymbolResource&&l!=null&&r.meta.ESRI_webstyle==="EsriRealisticTreesStyle";u&&!r.customMeta.esriTreeRendering&&(r.customMeta.esriTreeRendering=!0,jt(r,l));const i=!!e.usePBR,o=r.meta.isEsriSymbolResource?{usePBR:i,isSchematic:!1,treeRendering:u,mrrFactors:Je}:{usePBR:i,isSchematic:!1,treeRendering:!1,mrrFactors:Xe},c={...e.materialParameters,treeRendering:u},{engineResources:s,referenceBoundingBox:a}=Ft(r,o,c,e,t.specifiedLodIndex);return{lods:s,referenceBoundingBox:a,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1}}function Nt(n){const e=n.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:n.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:n,specifiedLodIndex:null}:{fileType:"unknown",url:n,specifiedLodIndex:null}}function Ft(n,e,t,r,l){const u=n.model,i=new Array,o=new Map,c=new Map,s=u.lods.length,a=be();return u.lods.forEach((h,m)=>{const d=r.skipHighLods===!0&&(s>1&&m===0||s>3&&m===1)||r.skipHighLods===!1&&l!=null&&m!==l;if(d&&m!==0)return;const f=new _t(h.name,h.lodThreshold,[0,0,0]);h.parts.forEach($=>{const p=d?new Q({},r):Gt(u,$,f,e,t,o,c,r),{geometry:x,vertexCount:A}=Ut($,p??new Q({},r)),w=x.boundingInfo;w!=null&&m===0&&(K(a,w.bbMin),K(a,w.bbMax)),p!=null&&(f.stageResources.geometries.push(x),f.numberOfVertices+=A)}),d||i.push(f)}),{engineResources:i,referenceBoundingBox:a}}function Gt(n,e,t,r,l,u,i,o){var f,$;const c=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=n.materials.get(e.material),a=e.attributes.texCoord0!=null,h=e.attributes.normal!=null;if(s==null)return null;const m=kt(s.alphaMode);if(!u.has(c)){if(a){const y=(F,X=!1)=>{if(F!=null&&!i.has(F)){const P=n.textures.get(F);if(P!=null){const v=P.data;i.set(F,new $e(te(v)?v.data:v,{...P.parameters,preMultiplyAlpha:!te(v)&&X,encoding:te(v)&&v.encoding!=null?v.encoding:void 0}))}}};y(s.textureColor,m!==M.Opaque),y(s.textureNormal),y(s.textureOcclusion),y(s.textureEmissive),y(s.textureMetallicRoughness)}const p=s.color[0]**(1/U),x=s.color[1]**(1/U),A=s.color[2]**(1/U),w=s.emissiveFactor[0]**(1/U),q=s.emissiveFactor[1]**(1/U),J=s.emissiveFactor[2]**(1/U),N=s.textureColor!=null&&a?i.get(s.textureColor):null,H=Ye({normalTexture:s.textureNormal,metallicRoughnessTexture:s.textureMetallicRoughness,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,emissiveTexture:s.textureEmissive,emissiveFactor:s.emissiveFactor,occlusionTexture:s.textureOcclusion}),O=((f=s.normalTextureTransform)==null?void 0:f.scale)!=null?($=s.normalTextureTransform)==null?void 0:$.scale:Ue;u.set(c,new Q({...r,transparent:m===M.Blend,customDepthTest:xt.Lequal,textureAlphaMode:m,textureAlphaCutoff:s.alphaCutoff,diffuse:[p,x,A],ambient:[p,x,A],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?se.None:se.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:h?fe.Attribute:fe.ScreenDerivative,castShadows:!0,receiveShadows:s.receiveShadows,receiveAmbientOcclusion:s.receiveAmbientOcclustion,textureId:N!=null?N.id:void 0,colorMixMode:s.colorMixMode,normalTextureId:s.textureNormal!=null&&a?i.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:N!=null&&!!N.parameters.preMultiplyAlpha,occlusionTextureId:s.textureOcclusion!=null&&a?i.get(s.textureOcclusion).id:void 0,emissiveTextureId:s.textureEmissive!=null&&a?i.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:s.textureMetallicRoughness!=null&&a?i.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[w,q,J],mrrFactors:H?et:[s.metallicFactor,s.roughnessFactor,r.mrrFactors[2]],isSchematic:H,colorTextureTransformMatrix:D(s.colorTextureTransform),normalTextureTransformMatrix:D(s.normalTextureTransform),scale:[O[0],O[1]],occlusionTextureTransformMatrix:D(s.occlusionTextureTransform),emissiveTextureTransformMatrix:D(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:D(s.metallicRoughnessTextureTransform),...l},o))}const d=u.get(c);if(t.stageResources.materials.push(d),a){const p=x=>{x!=null&&t.stageResources.textures.push(i.get(x))};p(s.textureColor),p(s.textureNormal),p(s.textureOcclusion),p(s.textureEmissive),p(s.textureMetallicRoughness)}return d}function Ut(n,e){const t=n.attributes.position.count,r=lt(n.indices||t,n.primitiveType),l=z(3*t),{typedBuffer:u,typedBufferStride:i}=n.attributes.position;it(l,u,n.transform,3,i);const o=[[I.POSITION,new j(l,r,3,!0)]];if(n.attributes.normal!=null){const s=z(3*t),{typedBuffer:a,typedBufferStride:h}=n.attributes.normal;Le(k,n.transform),ot(s,a,k,3,h),oe(k)&&ce(s,s),o.push([I.NORMAL,new j(s,r,3,!0)])}if(n.attributes.tangent!=null){const s=z(4*t),{typedBuffer:a,typedBufferStride:h}=n.attributes.tangent;Ne(k,n.transform),at(s,a,k,4,h),oe(k)&&ce(s,s,4),o.push([I.TANGENT,new j(s,r,4,!0)])}if(n.attributes.texCoord0!=null){const s=z(2*t),{typedBuffer:a,typedBufferStride:h}=n.attributes.texCoord0;ct(s,a,2,h),o.push([I.UV0,new j(s,r,2,!0)])}const c=n.attributes.color;if(c!=null){const s=new Uint8Array(4*t);c.elementCount===4?c instanceof tt?me(s,c,255):c instanceof we?ht(s,c):c instanceof rt&&me(s,c,1/256):(s.fill(255),c instanceof ve?he(s,c.typedBuffer,255,4,c.typedBufferStride):n.attributes.color instanceof st?mt(s,c.typedBuffer,4,n.attributes.color.typedBufferStride):n.attributes.color instanceof nt&&he(s,c.typedBuffer,1/256,4,c.typedBufferStride)),o.push([I.COLOR,new j(s,r,4,!0)])}return{geometry:new Z(e,o),vertexCount:t}}const k=ye();function kt(n){switch(n){case"BLEND":return M.Blend;case"MASK":return M.Mask;case"OPAQUE":case null:case void 0:return M.Opaque}}function jt(n,e){for(let t=0;t<n.model.lods.length;++t){const r=n.model.lods[t];for(const l of r.parts){const u=l.attributes.normal;if(u==null)return;const i=l.attributes.position,o=i.count,c=G(),s=G(),a=G(),h=new Uint8Array(4*o),m=new Float64Array(3*o),d=Pe(Ge(),l.transform);let f=0,$=0;for(let p=0;p<o;p++){i.getVec(p,s),u.getVec(p,c),re(s,s,l.transform),je(a,s,e.center),le(a,a,e.radius);const x=a[2],A=qe(a),w=Math.min(.45+.55*A*A,1);le(a,a,e.radius),d!==null&&re(a,a,d),De(a,a),t+1!==n.model.lods.length&&n.model.lods.length>1&&He(a,a,c,x>-1?.2:Math.min(-4*x-3.8,1)),m[f]=a[0],m[f+1]=a[1],m[f+2]=a[2],f+=3,h[$]=255*w,h[$+1]=255*w,h[$+2]=255*w,h[$+3]=255,$+=4}l.attributes.normal=new ve(m),l.attributes.color=new we(h)}}}export{vr as fetch,Nt as parseUrl};