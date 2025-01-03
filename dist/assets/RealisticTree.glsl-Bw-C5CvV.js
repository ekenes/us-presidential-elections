import{bu as vi,$ as Ho,M as m,N as z,O as xr,bE as gi,a1 as A,fm as Gt,fu as Vt,fn as Uo,jH as Wo,cc as Tr,c as _i,bm as xi,l9 as Lt,au as Pt,gy as ot,gC as vt,hZ as nr,ak as ae,lr as Ee,bF as Ti,fi as jo,s as Se,W as bi,_ as At,dF as Mt,gt as Ie,c7 as qo,fx as ko,U as Yo,fq as Xo,bi as Zo,d4 as Br,hu as Ko,hw as lt,er as ct,cd as Gr,ly as Jo,c4 as Qo,c6 as ea,c3 as ta,b5 as ra,lz as ia,lA as oa,lB as Ei,lC as Si,cb as $t,bt as aa,l5 as na}from"./index-GOO0DjDp.js";import{e as ze,s as Ae,i as Te,a as sr,O as lr,n as Ht,u as je}from"./basicInterfaces-CZwQPxTp.js";import{R as Q,N as Ai,S as Ci,T as cr,E as sa,O as ue,X as $e,I as ne,D as gt,G as Le,t as la,_ as ca,f as da,c as _e,L as rt}from"./enums-V7VQdXj3.js";import{a as ua,p as wi,m as Qe,b as ha}from"./Texture-BSCxK7YP.js";import{s as U}from"./Util-DNwDveAw.js";import{r as xe,o as X,q as qe,E as _t,H as Mi,u as ma,c as Fe,R as et,s as Nt,_ as br,A as Er,g as Vr,P as fa,N as pa,I as Hr,v as va}from"./vec32-Bq8LfEfc.js";import{I as ga,L as _a,l as dr}from"./orientedBoundingBox-DhJ8Hffd.js";import{H as xa}from"./InterleavedLayout-L8Xfk5Gl.js";import{o as s,c as ge,t as at,a as ee,d as Ut,S as yi,n as D,r as I,u as xt,e as Ur,f as Qt,g as Ta}from"./NormalAttribute.glsl-BXHrFRZd.js";import{e as f}from"./VertexAttribute-BdZWZuT1.js";import{j as ba}from"./mat3-C-OMcVdC.js";import{e as Ct,o as nt}from"./mat3f64-q3fE-ZOt.js";import{e as Sr,o as Wr}from"./mat4f64-CSKppSlJ.js";import{E as Oi,U as be,s as Ri}from"./sphere-Bhl1G8Gh.js";import{x as Ii,c as jr,y as Ea,u as Sa,q as Aa,i as qr}from"./BufferView-Bc_fuGNr.js";import{a as $}from"./BindType-BmZEZMMh.js";import{v as Ca}from"./lineSegment-BdDnshna.js";import"./plane-m241_QIk.js";import{o as Be}from"./vec2-c1cMo5Hj.js";import{l as wa,n as Wt}from"./vec2f64-DA6GkJuH.js";import"./boundedPlane-D77R_pSx.js";function wc(e,t=!1){return e<=vi?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}function Ma(e){e.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(ge.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(ge.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(ge.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(ge.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}let K=class{constructor(t,r,i,o,a=null){if(this.name=t,this.type=r,this.arraySize=a,this.bind={[$.Pass]:null,[$.Draw]:null},o)switch(i){case $.Pass:this.bind[$.Pass]=o;break;case $.Draw:this.bind[$.Draw]=o}}equals(t){return this.type===t.type&&this.name===t.name&&this.arraySize===t.arraySize}},Tt=class extends K{constructor(t,r){super(t,"sampler2D",$.Draw,(i,o,a)=>i.bindTexture(t,r(o,a)))}};function ya(){return!!Ho("enable-feature:objectAndLayerId-rendering")}function $i({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let ce=class extends K{constructor(t,r){super(t,"vec3",$.Draw,(i,o,a,n)=>i.setUniform3fv(t,r(o,a,n)))}},k=class extends K{constructor(t,r){super(t,"vec3",$.Pass,(i,o,a)=>i.setUniform3fv(t,r(o,a)))}},oe=class extends K{constructor(t,r){super(t,"float",$.Pass,(i,o,a)=>i.setUniform1f(t,r(o,a)))}},Ni=class extends K{constructor(t,r){super(t,"mat3",$.Draw,(i,o,a)=>i.setUniformMatrix3fv(t,r(o,a)))}},he=class extends K{constructor(t,r){super(t,"mat3",$.Pass,(i,o,a)=>i.setUniformMatrix3fv(t,r(o,a)))}},tt=class extends K{constructor(t,r){super(t,"mat4",$.Pass,(i,o,a)=>i.setUniformMatrix4fv(t,r(o,a)))}},H=class extends gi{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};m([z()],H.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),m([z()],H.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),m([z()],H.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),m([z()],H.prototype,"DECONFLICTOR_SHOW_GRID",void 0),m([z()],H.prototype,"LABELS_SHOW_BORDER",void 0),m([z()],H.prototype,"TEXT_SHOW_BASELINE",void 0),m([z()],H.prototype,"TEXT_SHOW_BORDER",void 0),m([z()],H.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),m([z()],H.prototype,"OVERLAY_SHOW_CENTER",void 0),m([z()],H.prototype,"SHOW_POI",void 0),m([z()],H.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),m([z()],H.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),m([z()],H.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),m([z()],H.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),m([z()],H.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),m([z()],H.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),m([z()],H.prototype,"I3S_TREE_SHOW_TILES",void 0),m([z()],H.prototype,"I3S_SHOW_MODIFICATIONS",void 0),m([z()],H.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),m([z()],H.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),m([z()],H.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),m([z()],H.prototype,"LINE_WIREFRAMES",void 0),H=m([xr("esri.views.3d.support.debugFlags")],H);const Dc=new H;var ht;(function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_MATERIAL_WITHOUT_NORMALS=3]="OPAQUE_MATERIAL_WITHOUT_NORMALS",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_MATERIAL_WITHOUT_NORMALS=5]="TRANSPARENT_MATERIAL_WITHOUT_NORMALS",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_MATERIAL_WITHOUT_DEPTH=7]="TRANSPARENT_MATERIAL_WITHOUT_DEPTH",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.HUD_MATERIAL=12]="HUD_MATERIAL",e[e.LABEL_MATERIAL=13]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=14]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=15]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=16]="DRAPED_MATERIAL",e[e.DRAPED_WATER=17]="DRAPED_WATER",e[e.VOXEL=18]="VOXEL",e[e.MAX_SLOTS=19]="MAX_SLOTS"})(ht||(ht={}));function Ar(e){e.attributes.add(f.POSITION,"vec3"),e.vertex.code.add(s`vec3 positionModel() { return position; }`)}function Oa(e,t){e.include(Ar);const r=e.vertex;r.include($i,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new k("transformWorldFromViewTH",i=>i.transformWorldFromViewTH),new k("transformWorldFromViewTL",i=>i.transformWorldFromViewTL),new he("transformViewFromCameraRelativeRS",i=>i.transformViewFromCameraRelativeRS),new tt("transformProjFromView",i=>i.transformProjFromView),new Ni("transformWorldFromModelRS",i=>i.transformWorldFromModelRS),new ce("transformWorldFromModelTH",i=>i.transformWorldFromModelTH),new ce("transformWorldFromModelTL",i=>i.transformWorldFromModelTL)),r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new k("transformWorldFromViewTL",i=>i.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let Ra=class extends at{constructor(){super(...arguments),this.transformWorldFromViewTH=A(),this.transformWorldFromViewTL=A(),this.transformViewFromCameraRelativeRS=Ct(),this.transformProjFromView=Sr()}},Ia=class extends at{constructor(){super(...arguments),this.transformWorldFromModelRS=Ct(),this.transformWorldFromModelTH=A(),this.transformWorldFromModelTL=A()}};function Li(e,t){switch(t.normalType){case ee.Attribute:case ee.Compressed:e.include(Ut,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new Ni("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new he("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),e.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case ee.ScreenDerivative:e.vertex.code.add(s`void forwardNormal() {}`);break;default:Gt(t.normalType);case ee.COUNT:}}let $a=class extends Ra{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Ct()}},Na=class extends Ia{constructor(){super(...arguments),this.transformNormalGlobalFromModel=Ct(),this.toMapSpace=Vt()}},Vc=class{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return this._outer.size===0}get(t,r){var i;return(i=this._outer.get(t))==null?void 0:i.get(r)}getInner(t){return this._outer.get(t)}set(t,r,i){const o=this._outer.get(t);o?o.set(r,i):this._outer.set(t,new Map([[r,i]]))}delete(t,r){const i=this._outer.get(t);i&&(i.delete(r),i.size===0&&this._outer.delete(t))}forEach(t){this._outer.forEach((r,i)=>t(r,i))}forAll(t){for(const r of this._outer.values())for(const i of r.values())t(i)}};const Pi=new Map([[f.POSITION,0],[f.NORMAL,1],[f.NORMALCOMPRESSED,1],[f.UV0,2],[f.COLOR,3],[f.COLORFEATUREATTRIBUTE,3],[f.SIZE,4],[f.TANGENT,4],[f.CENTEROFFSETANDDISTANCE,5],[f.SYMBOLCOLOR,5],[f.FEATUREATTRIBUTE,6],[f.INSTANCEFEATUREATTRIBUTE,6],[f.INSTANCECOLOR,7],[f.OBJECTANDLAYERIDCOLOR,7],[f.INSTANCEOBJECTANDLAYERIDCOLOR,7],[f.ROTATION,8],[f.INSTANCEMODEL,8],[f.INSTANCEMODELNORMAL,12],[f.INSTANCEMODELORIGINHI,11],[f.INSTANCEMODELORIGINLO,15]]);let Di=class{constructor(){this.id=Uo()}},La=class{constructor(t=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=A(),this._tmpMbs=Oi(),this._tmpObb=new ga,this._resetOffset(t)}_resetOffset(t){this._offset=t,this._totalOffset=t}set offset(t){this._resetOffset(t)}get offset(){return this._offset}set componentOffset(t){this._totalOffset=this._offset+t}set localOrigin(t){this.componentLocalOriginLength=xe(t)}applyToVertex(t,r,i){const o=X(Fi,t,r,i),a=X(Fa,t,r,i+this.componentLocalOriginLength),n=this._totalOffset/xe(a);return qe(this._tmpVertex,o,a,n),this._tmpVertex}applyToAabb(t){const r=this.componentLocalOriginLength,i=t[0],o=t[1],a=t[2]+r,n=t[3],l=t[4],c=t[5]+r,u=Math.abs(i),d=Math.abs(o),h=Math.abs(a),v=Math.abs(n),g=Math.abs(l),p=Math.abs(c),_=.5*(1+Math.sign(i*n))*Math.min(u,v),x=.5*(1+Math.sign(o*l))*Math.min(d,g),G=.5*(1+Math.sign(a*c))*Math.min(h,p),L=Math.max(u,v),B=Math.max(d,g),P=Math.max(h,p),F=Math.sqrt(_*_+x*x+G*G),M=Math.sign(u+i),E=Math.sign(d+o),S=Math.sign(h+a),O=Math.sign(v+n),R=Math.sign(g+l),T=Math.sign(p+c),C=this._totalOffset;if(F<C)return t[0]-=(1-M)*C,t[1]-=(1-E)*C,t[2]-=(1-S)*C,t[3]+=O*C,t[4]+=R*C,t[5]+=T*C,t;const y=C/Math.sqrt(L*L+B*B+P*P),V=C/F,W=V-y,q=-W;return t[0]+=i*(M*q+V),t[1]+=o*(E*q+V),t[2]+=a*(S*q+V),t[3]+=n*(O*W+y),t[4]+=l*(R*W+y),t[5]+=c*(T*W+y),t}applyToMbs(t){const r=xe(be(t)),i=this._totalOffset/r;return qe(be(this._tmpMbs),be(t),be(t),i),this._tmpMbs[3]=t[3]+t[3]*this._totalOffset/r,this._tmpMbs}applyToObb(t){return _a(t,this._totalOffset,this._totalOffset,dr.Global,this._tmpObb),this._tmpObb}},Pa=class{constructor(t=0){this.offset=t,this.sphere=Oi(),this.tmpVertex=A()}applyToVertex(t,r,i){const o=this.objectTransform.transform,a=X(Fi,t,r,i),n=_t(a,a,o),l=this.offset/xe(n);qe(n,n,n,l);const c=this.objectTransform.inverse;return _t(this.tmpVertex,n,c),this.tmpVertex}applyToMinMax(t,r){const i=this.offset/xe(t);qe(t,t,t,i);const o=this.offset/xe(r);qe(r,r,r,o)}applyToAabb(t){const r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*r,t[1]+=t[1]*r,t[2]+=t[2]*r;const i=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*i,t[4]+=t[4]*i,t[5]+=t[5]*i,t}applyToBoundingSphere(t){const r=xe(be(t)),i=this.offset/r;return qe(be(this.sphere),be(t),be(t),i),this.sphere[3]=t[3]+t[3]*this.offset/r,this.sphere}};const kr=new Pa;function Da(e){return e!=null?(kr.offset=e,kr):null}new La;const Fi=A(),Fa=A();function za(e){return Math.abs(e*e*e)}function zi(e,t,r){const i=r.parameters;return er.scale=Math.min(i.divisor/(t-i.offset),1),er.factor=za(e),er}function Bi(e,t){return Wo(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function Ba(e,t,r){const i=zi(e,t,r);return i.minScaleFactor=0,Bi(1,i)}function qc(e,t,r,i){i.scale=Ba(e,t,r),i.factor=0,i.minScaleFactor=r.minScaleFactor}function kc(e,t,r=[0,0]){const i=Math.min(Math.max(t.scale,t.minScaleFactor),1);return r[0]=e[0]*i,r[1]=e[1]*i,r}function Ga(e,t,r,i){return Bi(e,zi(t,r,i))}const er={scale:0,factor:0,minScaleFactor:0};function Va(e,t,r,i,o){let a=(r.screenLength||0)*e.pixelRatio;o!=null&&(a=Ga(a,i,t,o));const n=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return Tr(n*t,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function Yr(e,t){let r=!1;for(const i in t){const o=t[i];o!==void 0&&(Array.isArray(o)?Array.isArray(e[i])&&_i(o,e[i])||(e[i]=o.slice(),r=!0):e[i]!==o&&(r=!0,e[i]=o))}return r}const Ha={multiply:1,ignore:2,replace:3,tint:4};function Yc(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function Ua(e,t){const r=e.length;for(let i=0;i<r;++i)ke[0]=e[i],t[i]=ke[0];return t}function Wa(e,t){const r=e.length;for(let i=0;i<r;++i)ke[0]=e[i],ke[1]=e[i]-ke[0],t[i]=ke[1];return t}const ke=new Float32Array(2);let jt=class{constructor(t,r){this._module=t,this._load=r}get(){return this._module}async reload(){return this._module=await this._load(),this._module}},Xr=class{constructor(t,r,i){this._context=t,this._locations=i,this._textures=new Map,this._freeTextureUnits=new xi({deallocator:null}),this._glProgram=t.programCache.acquire(r.generate("vertex"),r.generate("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=ua()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(t,r){this._glProgram.setUniform1i(t,r?1:0)}setUniform1i(t,r){this._glProgram.setUniform1i(t,r)}setUniform1f(t,r){this._glProgram.setUniform1f(t,r)}setUniform2fv(t,r){this._glProgram.setUniform2fv(t,r)}setUniform3fv(t,r){this._glProgram.setUniform3fv(t,r)}setUniform4fv(t,r){this._glProgram.setUniform4fv(t,r)}setUniformMatrix3fv(t,r){this._glProgram.setUniformMatrix3fv(t,r)}setUniformMatrix4fv(t,r){this._glProgram.setUniformMatrix4fv(t,r)}setUniform1fv(t,r){this._glProgram.setUniform1fv(t,r)}setUniform1iv(t,r){this._glProgram.setUniform1iv(t,r)}setUniform2iv(t,r){this._glProgram.setUniform2iv(t,r)}setUniform3iv(t,r){this._glProgram.setUniform3iv(t,r)}setUniform4iv(t,r){this._glProgram.setUniform4iv(t,r)}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(t,r){if((r==null?void 0:r.glName)==null){const o=this._textures.get(t);return o&&(this._context.bindTexture(null,o.unit),this._freeTextureUnit(o),this._textures.delete(t)),null}let i=this._textures.get(t);return i==null?(i=this._allocTextureUnit(r),this._textures.set(t,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(t,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){var t;this._context.useProgram(this),this._textures.forEach((r,i)=>{this._context.bindTexture(r.texture,r.unit),this.setUniform1i(i,r.unit)}),(t=this._fragmentUniforms)==null||t.forEach(r=>{r.type!=="sampler2D"&&r.type!=="samplerCube"||this._textures.has(r.name)||console.error(`Texture sampler ${r.name} has no bound texture`)})}_allocTextureUnit(t){return{texture:t,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit)}};function qt(e,t,r=cr.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function Gi(e,t,r,i,o=cr.ADD,a=cr.ADD,n=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:o,opAlpha:a,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}qt(Q.ZERO,Q.ONE_MINUS_SRC_ALPHA);qt(Q.ONE,Q.ZERO);qt(Q.ONE,Q.ONE);const ja=qt(Q.ONE,Q.ONE_MINUS_SRC_ALPHA),qa=Gi(Q.SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA),ka={face:Ai.BACK,mode:Ci.CCW},Ya={face:Ai.FRONT,mode:Ci.CCW},Xa=e=>e===ze.Back?ka:e===ze.Front?Ya:null,Za={zNear:0,zFar:1},kt={r:!0,g:!0,b:!0,a:!0};function Ka(e){return sn.intern(e)}function Ja(e){return ln.intern(e)}function Qa(e){return cn.intern(e)}function en(e){return dn.intern(e)}function tn(e){return un.intern(e)}function rn(e){return hn.intern(e)}function on(e){return mn.intern(e)}function an(e){return fn.intern(e)}function nn(e){return pn.intern(e)}function Yt(e){return vn.intern(e)}let me=class{constructor(t,r){this._makeKey=t,this._makeRef=r,this._interns=new Map}intern(t){if(!t)return null;const r=this._makeKey(t),i=this._interns;return i.has(r)||i.set(r,this._makeRef(t)),i.get(r)??null}};function fe(e){return"["+e.join(",")+"]"}const sn=new me(Vi,e=>({__tag:"Blending",...e}));function Vi(e){return e?fe([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const ln=new me(Hi,e=>({__tag:"Culling",...e}));function Hi(e){return e?fe([e.face,e.mode]):null}const cn=new me(Ui,e=>({__tag:"PolygonOffset",...e}));function Ui(e){return e?fe([e.factor,e.units]):null}const dn=new me(Wi,e=>({__tag:"DepthTest",...e}));function Wi(e){return e?fe([e.func]):null}const un=new me(ji,e=>({__tag:"StencilTest",...e}));function ji(e){return e?fe([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const hn=new me(qi,e=>({__tag:"DepthWrite",...e}));function qi(e){return e?fe([e.zNear,e.zFar]):null}const mn=new me(ki,e=>({__tag:"ColorWrite",...e}));function ki(e){return e?fe([e.r,e.g,e.b,e.a]):null}const fn=new me(Yi,e=>({__tag:"StencilWrite",...e}));function Yi(e){return e?fe([e.mask]):null}const pn=new me(Xi,e=>({__tag:"DrawBuffers",...e}));function Xi(e){return e?fe(e.buffers):null}const vn=new me(gn,e=>({blending:Ka(e.blending),culling:Ja(e.culling),polygonOffset:Qa(e.polygonOffset),depthTest:en(e.depthTest),stencilTest:tn(e.stencilTest),depthWrite:rn(e.depthWrite),colorWrite:on(e.colorWrite),stencilWrite:an(e.stencilWrite),drawBuffers:nn(e.drawBuffers)}));function gn(e){return e?fe([Vi(e.blending),Hi(e.culling),Ui(e.polygonOffset),Wi(e.depthTest),ji(e.stencilTest),qi(e.depthWrite),ki(e.colorWrite),Yi(e.stencilWrite),Xi(e.drawBuffers)]):null}let Cr=class{constructor(t,r,i,o,a=Pi){this.release=o,this.locations=a,this.primitiveType=sa.TRIANGLES,this.key=r.key,this._program=new Xr(t.rctx,i.get().build(r),a),this._pipeline=this.initializePipeline(r),this.reload=async n=>{if(n&&await i.reload(),!this.key.equals(r.key))throw new Error("Configuration was changed after construction, cannot reload shader");Lt(this._program),this._program=new Xr(t.rctx,i.get().build(r),a),this._pipeline=this.initializePipeline(r)}}destroy(){this._program=Lt(this._program),this._pipeline=null}get program(){return this._program}get compiled(){return this.program.compiled}ensureAttributeLocations(t){this.program.assertCompatibleVertexAttributeLocations(t)}getPipeline(t,r){return this._pipeline}initializePipeline(t){return Yt({blending:ja,colorWrite:kt})}};var bt;(function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"})(bt||(bt={}));let _n=class extends Di{constructor(t,r){super(),this.type=bt.Material,this.supportsEdges=!1,this._renderPriority=0,this.vertexAttributeLocations=Pi,this._pp0=Pt(0,0,1),this._pp1=Pt(0,0,0),this._parameters=new r,Yr(this._parameters,t),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(t){return!1}setParameters(t,r=!0){Yr(this._parameters,t)&&(this.validateParameters(this._parameters),r&&this._parametersChanged())}validateParameters(t){}shouldRender(t){return this.visible&&this.isVisibleForOutput(t.output)&&(!this.parameters.isDecoration||t.bind.decorations)&&!!(this.parameters.renderOccluded&t.renderOccludedMask)}isVisibleForOutput(t){return!0}get renderPriority(){return this._renderPriority}set renderPriority(t){t!==this._renderPriority&&(this._renderPriority=t,this._parametersChanged())}_parametersChanged(){var t;(t=this.repository)==null||t.materialChanged(this)}queryRenderOccludedState(t){return this.visible&&this.parameters.renderOccluded===t}get hasEmissions(){return!1}intersectDraped(t,r,i,o,a,n){return this._pp0[0]=this._pp1[0]=o[0],this._pp0[1]=this._pp1[1]=o[1],this.intersect(t,r,i,this._pp0,this._pp1,a)}};var ur;(function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"})(ur||(ur={}));var Y;(function(e){e[e.NONE=0]="NONE",e[e.ColorAlpha=1]="ColorAlpha",e[e.FrontFace=2]="FrontFace",e[e.COUNT=3]="COUNT"})(Y||(Y={}));const Zi=Gi(Q.ONE,Q.ZERO,Q.ONE,Q.ONE_MINUS_SRC_ALPHA);function ed(e){return e===Y.FrontFace?null:Zi}function xn(e){switch(e){case Y.NONE:return qa;case Y.ColorAlpha:return Zi;case Y.FrontFace:case Y.COUNT:return null}}function Tn(e){if(e.draped)return null;switch(e.oitPass){case Y.NONE:case Y.FrontFace:return e.writeDepth?Za:null;case Y.ColorAlpha:case Y.COUNT:return null}}const bn=5e5,En={factor:-1,units:-2};function Sn(e){return e?En:null}function An(e,t=ue.LESS){return e===Y.NONE||e===Y.FrontFace?t:ue.LEQUAL}function Cn(e,t){const r=yi(t);return e===Y.ColorAlpha?r?{buffers:[$e.COLOR_ATTACHMENT0,$e.COLOR_ATTACHMENT1,$e.COLOR_ATTACHMENT2]}:{buffers:[$e.COLOR_ATTACHMENT0,$e.COLOR_ATTACHMENT1]}:r?{buffers:[$e.COLOR_ATTACHMENT0,$e.COLOR_ATTACHMENT1]}:null}ue.LESS;ue.ALWAYS;const wn={mask:255},Mn={function:{func:ue.ALWAYS,ref:Ae.OutlineVisualElementMask,mask:Ae.OutlineVisualElementMask},operation:{fail:ne.KEEP,zFail:ne.KEEP,zPass:ne.ZERO}},yn={function:{func:ue.ALWAYS,ref:Ae.OutlineVisualElementMask,mask:Ae.OutlineVisualElementMask},operation:{fail:ne.KEEP,zFail:ne.KEEP,zPass:ne.REPLACE}};ue.EQUAL,Ae.OutlineVisualElementMask,Ae.OutlineVisualElementMask,ne.KEEP,ne.KEEP,ne.KEEP;ue.NOTEQUAL,Ae.OutlineVisualElementMask,Ae.OutlineVisualElementMask,ne.KEEP,ne.KEEP,ne.KEEP;function td({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:i,emissiveTexture:o,emissiveFactor:a,occlusionTexture:n}){return e==null&&t==null&&o==null&&(a==null||Mi(a,ot))&&n==null&&(i==null||i===1)&&(r==null||r===1)}const On=vt(1,1,.5),rd=vt(0,.6,.2),id=vt(0,1,.2);let it=class extends K{constructor(t,r){super(t,"vec2",$.Pass,(i,o,a)=>i.setUniform2fv(t,r(o,a)))}};function Zr(e){e.varyings.add("linearDepth","float")}function Ki(e){e.vertex.uniforms.add(new it("nearFar",(t,r)=>r.camera.nearFar))}function Ji(e){e.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Qi(e,t){const{vertex:r}=e;switch(t.output){case D.Color:case D.ColorEmission:if(t.receiveShadows)return Zr(e),void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case D.Shadow:case D.ShadowHighlight:case D.ShadowExcludeHighlight:case D.ViewshedShadow:return e.include(Oa,t),Zr(e),Ki(e),Ji(e),void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s`void forwardLinearDepth() {}`)}function eo(e){e.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Ye(e,t){Rn(e,t,new ce("slicePlaneOrigin",(r,i)=>In(t,r,i)),new ce("slicePlaneBasis1",(r,i)=>{var o;return Kr(t,r,i,(o=i.slicePlane)==null?void 0:o.basis1)}),new ce("slicePlaneBasis2",(r,i)=>{var o;return Kr(t,r,i,(o=i.slicePlane)==null?void 0:o.basis2)}))}function Rn(e,t,...r){if(!t.hasSlicePlane){const n=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(n),void e.fragment.code.add(n)}const i=s`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=t.hasSliceHighlight?s`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r).code.add(i),e.fragment.uniforms.add(...r).code.add(i),e.fragment.code.add(a)}function to(e,t,r){return e.instancedDoublePrecision?X($n,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function ro(e,t){return e!=null?Fe(Dt,t.origin,e):t.origin}function io(e,t,r){return e.hasSliceTranslatedView?t!=null?nr(Nn,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function In(e,t,r){if(r.slicePlane==null)return ot;const i=to(e,t,r),o=ro(i,r.slicePlane),a=io(e,i,r);return a!=null?_t(Dt,o,a):o}function Kr(e,t,r,i){if(i==null||r.slicePlane==null)return ot;const o=to(e,t,r),a=ro(o,r.slicePlane),n=io(e,o,r);return n!=null?(ma(st,i,a),_t(Dt,a,n),_t(st,st,n),Fe(st,st,Dt)):i}const $n=A(),Dt=A(),st=A(),Nn=Sr();function Xe(e){Ji(e),e.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}let Ln=class extends K{constructor(t,r){super(t,"mat4",$.Draw,(i,o,a)=>i.setUniformMatrix4fv(t,r(o,a)))}};function Et(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",ot):e.uniforms.add(new ce("cameraPosition",(r,i)=>X(oo,i.camera.viewInverseTransposeMatrix[3]-r.origin[0],i.camera.viewInverseTransposeMatrix[7]-r.origin[1],i.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function Ze(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new tt("proj",(i,o)=>o.camera.projectionMatrix),new Ln("view",(i,o)=>nr(Jr,o.camera.viewMatrix,i.origin)),new ce("localOrigin",i=>i.origin));const r=i=>X(oo,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new tt("proj",(i,o)=>o.camera.projectionMatrix),new tt("view",(i,o)=>nr(Jr,o.camera.viewMatrix,r(o))),new k("localOrigin",(i,o)=>r(o)))}const Jr=Sr(),oo=A();function Pn(e){e.uniforms.add(new tt("viewNormal",(t,r)=>r.camera.viewInverseTransposeMatrix))}function nd(e){e.uniforms.add(new oe("pixelRatio",(t,r)=>r.camera.pixelRatio/r.overlayStretch))}const Qr=Ct();function ao(e,t){const r=t.hasModelTransformation,i=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new tt("model",a=>a.modelTransformation??Wr)),e.vertex.uniforms.add(new he("normalLocalOriginFromModel",a=>(ba(Qr,a.modelTransformation??Wr),Qr)))),t.instanced&&i&&(e.attributes.add(f.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(f.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(f.INSTANCEMODEL,"mat3"),e.attributes.add(f.INSTANCEMODELNORMAL,"mat3"));const o=e.vertex;i&&(o.include($i,t),o.uniforms.add(new ce("viewOriginHi",(a,n)=>Ua(X(yt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),yt)),new ce("viewOriginLo",(a,n)=>Wa(X(yt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),yt)))),o.code.add(s`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?s`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===D.Normal&&(Pn(o),o.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&o.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const yt=A();let wr=class extends K{constructor(t,r){super(t,"int",$.Pass,(i,o,a)=>i.setUniform1i(t,r(o,a)))}};function no(e,t){t.hasSymbolColors?(e.include(Ma),e.attributes.add(f.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new wr("colorMixMode",r=>Ha[r.colorMixMode])),e.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}var J;function De(e,t){switch(t.textureCoordinateType){case J.Default:return e.attributes.add(f.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case J.Compressed:return e.attributes.add(f.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case J.Atlas:return e.attributes.add(f.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(f.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:Gt(t.textureCoordinateType);case J.None:return void e.vertex.code.add(s`void forwardTextureCoordinates() {}`);case J.COUNT:return}}(function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"})(J||(J={}));function so(e,t){t.hasVertexColors?(e.attributes.add(f.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Dn(e){e.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(s`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function ld(e){e.uniforms.add(new k("screenSizePerspective",t=>lo(t.screenSizePerspective)))}function Fn(e){e.uniforms.add(new k("screenSizePerspectiveAlignment",t=>lo(t.screenSizePerspectiveAlignment||t.screenSizePerspective)))}function lo(e){return X(zn,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const zn=A();let re=class extends K{constructor(t,r){super(t,"vec4",$.Pass,(i,o,a)=>i.setUniform4fv(t,r(o,a)))}};function co(e,t){const r=e.vertex;t.hasVerticalOffset?(Gn(r),t.hasScreenSizePerspective&&(e.include(Dn),Fn(r),Et(e.vertex,t)),r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Bn=Vt();function Gn(e){e.uniforms.add(new re("verticalOffset",(t,r)=>{const{minWorldLength:i,maxWorldLength:o,screenLength:a}=t.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),l=r.camera.pixelRatio||1;return ae(Bn,a*l,n,i,o)}))}function Vn(e,t){if(t.output!==D.ObjectAndLayerIdColor)return e.vertex.code.add(s`void forwardObjectAndLayerIdColor() {}`),void e.fragment.code.add(s`void outputObjectAndLayerIdColor() {}`);const r=t.objectAndLayerIdColorInstanced;e.varyings.add("objectAndLayerIdColorVarying","vec4"),e.attributes.add(r?f.INSTANCEOBJECTANDLAYERIDCOLOR:f.OBJECTANDLAYERIDCOLOR,"vec4"),e.vertex.code.add(s`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${r?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),e.fragment.code.add(s`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}function uo(e){e.code.add(s`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function Hn(e,t){switch(t.output){case D.Shadow:case D.ShadowHighlight:case D.ShadowExcludeHighlight:case D.ViewshedShadow:e.fragment.include(uo),e.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}let Un=class extends K{constructor(t,r){super(t,"ivec2",$.Pass,(i,o,a)=>i.setUniform2iv(t,r(o,a)))}},Z=class extends K{constructor(t,r){super(t,"sampler2D",$.Pass,(i,o,a)=>i.bindTexture(t,r(o,a)))}};function ho(e,t){const{fragment:r}=e;t.output===D.Highlight?(r.uniforms.add(new Z("depthTexture",(i,o)=>o.mainDepth),new Z("highlightTexture",(i,o)=>o.highlightMixTexture),new wr("highlightLevel",(i,o)=>o.highlightLevel),new Un("highlightMixOrigin",(i,o)=>o.highlightMixOrigin)),e.outputs.add("fragHighlight","vec2",0),r.code.add(s`vec2 getAccumulatedHighlight() {
return texelFetch(highlightTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = vec2(float(bits) / 255.0, 0.0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
vec2 combinedHighlight = getAccumulatedHighlight();
uint accumulatedI = uint(combinedHighlight[li] * 255.0);
combinedHighlight[li] = float(bits | accumulatedI) / 255.0;
fragHighlight = combinedHighlight;
}
}
bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}
void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`),t.canHaveOverlay&&(r.constants.add("occlusionAndMask","int",85),r.code.add(s`void outputAllHighlights(vec2 highlightToAdd) {
if (highlightToAdd == vec2(0.0)) { discard; }
int occludedOrMask = isHighlightOccluded() ? 0xaa : 0;
ivec2 added = ivec2(highlightToAdd * 255.0);
ivec2 masked = (added & ivec2(occlusionAndMask)) | (ivec2(occludedOrMask) & (added<<1));
fragHighlight = vec2(masked) / 255.0;
}`))):r.code.add(s`void calculateOcclusionAndOutputHighlight() {}`)}let Wn=class extends K{constructor(t,r,i){super(t,"vec4",$.Pass,(o,a,n)=>o.setUniform4fv(t,r(a,n)),i)}},jn=class extends K{constructor(t,r,i){super(t,"float",$.Pass,(o,a,n)=>o.setUniform1fv(t,r(a,n)),i)}};var ei,ti;(function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"})(ei||(ei={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(ti||(ti={}));function fd(e,t,r){if(!t.vvSize)return X(e,1,1,1),e;for(let i=0;i<3;++i){const o=t.vvSize.offset[i]+r[0]*t.vvSize.factor[i];e[i]=Tr(o,t.vvSize.minSize[i],t.vvSize.maxSize[i])}return e}const tr=8;function mt(e,t){const{vertex:r,attributes:i}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&i.add(f.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new k("vvSizeMinSize",o=>o.vvSize.minSize)),r.uniforms.add(new k("vvSizeMaxSize",o=>o.vvSize.maxSize)),r.uniforms.add(new k("vvSizeOffset",o=>o.vvSize.offset)),r.uniforms.add(new k("vvSizeFactor",o=>o.vvSize.factor)),r.uniforms.add(new he("vvSymbolRotationMatrix",o=>o.vvSymbolRotationMatrix)),r.uniforms.add(new k("vvSymbolAnchor",o=>o.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",tr),r.uniforms.add(new jn("vvColorValues",o=>o.vvColor.values,tr),new Wn("vvColorColors",o=>o.vvColor.colors,tr)),r.code.add(s`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?s`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function Ke(e,t){qn(e,t,new oe("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function qn(e,t,r){const i=e.fragment;switch(t.alphaDiscardMode){case Te.Blend:e.fragment.code.add(s`
        #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(Ee)}) { discard; } }
      `);break;case Te.Opaque:i.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case Te.Mask:i.uniforms.add(r).code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case Te.MaskBlend:i.uniforms.add(r).code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function mo(e,t){const{vertex:r,fragment:i}=e,o=t.hasColorTexture&&t.alphaDiscardMode!==Te.Opaque,{output:a,normalType:n,hasColorTextureTransform:l}=t;switch(a){case D.Depth:Ze(r,t),e.include(Xe,t),e.include(Ye,t),e.include(De,t),o&&i.uniforms.add(new Z("tex",c=>c.texture)),r.main.add(s`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(Ke,t),i.main.add(s`
          discardBySlice(vpos);
          ${I(o,s`vec4 texColor = texture(tex, ${l?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case D.Shadow:case D.ShadowHighlight:case D.ShadowExcludeHighlight:case D.ViewshedShadow:case D.ObjectAndLayerIdColor:Ze(r,t),e.include(Xe,t),e.include(De,t),e.include(mt,t),e.include(Hn,t),e.include(Ye,t),e.include(Vn,t),Ki(e),e.varyings.add("depth","float"),o&&i.uniforms.add(new Z("tex",c=>c.texture)),r.main.add(s`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(Ke,t),i.main.add(s`
          discardBySlice(vpos);
          ${I(o,s`vec4 texColor = texture(tex, ${l?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${a===D.ObjectAndLayerIdColor?s`outputObjectAndLayerIdColor();`:s`outputDepth(depth);`}`);break;case D.Normal:{Ze(r,t),e.include(Xe,t),e.include(Ut,t),e.include(Li,t),e.include(De,t),e.include(mt,t),o&&i.uniforms.add(new Z("tex",u=>u.texture)),n===ee.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const c=n===ee.Attribute||n===ee.Compressed;r.main.add(s`
          vpos = getVertexInLocalOriginSpace();
          ${c?s`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:s`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),e.include(Ye,t),e.include(Ke,t),i.main.add(s`
          discardBySlice(vpos);
          ${I(o,s`vec4 texColor = texture(tex, ${l?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${n===ee.ScreenDerivative?s`vec3 normal = screenDerivativeNormal(vPositionView);`:s`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case D.Highlight:Ze(r,t),e.include(Xe,t),e.include(De,t),e.include(mt,t),o&&i.uniforms.add(new Z("tex",c=>c.texture)),r.main.add(s`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(Ye,t),e.include(Ke,t),e.include(ho,t),i.main.add(s`
          discardBySlice(vpos);
          ${I(o,s`vec4 texColor = texture(tex, ${l?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          calculateOcclusionAndOutputHighlight();`)}}function kn(e){e.fragment.code.add(s`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function Mr(e,t){const{textureCoordinateType:r}=t;if(r===J.None||r===J.COUNT)return;e.include(De,t);const i=r===J.Atlas;i&&e.include(kn),e.fragment.code.add(s`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}function Yn(e,t){const r=e.fragment;switch(r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case ie.None:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case ie.View:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case ie.WindingOrder:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Gt(t.doubleSidedMode);case ie.COUNT:}}var ie;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(ie||(ie={}));function Xn(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(f.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===ie.WindingOrder?r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==J.None&&(e.include(Mr,t),r.uniforms.add(t.bindType===$.Pass?new Z("normalTexture",i=>i.textureNormal):new Tt("normalTexture",i=>i.textureNormal)),t.hasNormalTextureTransform&&(r.uniforms.add(new it("scale",i=>i.scale??wa)),r.uniforms.add(new he("normalTextureTransformMatrix",i=>i.normalTextureTransformMatrix??nt))),r.code.add(s`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add(s`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(s`return tangentSpace * rawNormal;
}`))}var hr,ft;(function(e){e.OPAQUE="opaque-color",e.TRANSPARENT="transparent-color",e.COMPOSITE="composite-color",e.FINAL="final-color"})(hr||(hr={})),function(e){e.SSAO="ssao",e.LASERLINES="laserline-color",e.ANTIALIASING="aa-color",e.HIGHLIGHTS="highlight-color",e.MAGNIFIER="magnifier-color",e.OCCLUDED="occluded-color",e.VIEWSHED="viewshed-color",e.OPAQUE_ENVIRONMENT="opaque-environment-color",e.TRANSPARENT_ENVIRONMENT="transparent-environment-color"}(ft||(ft={}));var Je,ri;(function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"})(Je||(Je={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(ri||(ri={}));let We=class extends gi{constructor(t){super(t),this.view=null,this.consumes={required:[]},this.produces=hr.COMPOSITE,this.requireGeometryDepth=!1,this._dirty=!0}initialize(){this.addHandles([Ti(()=>this.view.ready,t=>{var r;t&&((r=this.view._stage)==null||r.renderer.addRenderNode(this))},jo)])}destroy(){var t,r;(r=(t=this.view._stage)==null?void 0:t.renderer)==null||r.removeRenderNode(this)}precompile(){}render(){throw new Se("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){var i,o,a;const t=(o=(i=this._frameBuffer)==null?void 0:i.getTexture())==null?void 0:o.descriptor,r=this.view._stage.renderer.fboCache.acquire((t==null?void 0:t.width)??640,(t==null?void 0:t.height)??480,this.produces);return(a=r.fbo)==null||a.initializeAndBind(),r}bindRenderTarget(){var t,r;return(r=(t=this._frameBuffer)==null?void 0:t.fbo)==null||r.initializeAndBind(),this._frameBuffer}requestRender(t){var r;t===sr.UPDATE&&((r=this.view._stage)==null||r.renderView.requestRender(t)),this._dirty=!0}resetWebGLState(){var t;this.renderingContext.resetState(),this.renderingContext.bindFramebuffer((t=this._frameBuffer)==null?void 0:t.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this.renderContext.bind}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){var t;return(t=this.view._stage)==null?void 0:t.renderer.renderContext}updateAnimation(t){return!!this._dirty&&(this._dirty=!1,!0)}doRender(t){this._frameBuffer=t.find(({name:r})=>r===this.produces);try{return this.render(t)}finally{this._frameBuffer=null}}};m([z({constructOnly:!0})],We.prototype,"view",void 0),m([z({constructOnly:!0})],We.prototype,"consumes",void 0),m([z()],We.prototype,"produces",void 0),We=m([xr("esri.views.3d.webgl.RenderNode")],We);const Zn=We,Kn=3e5,ii=5e5;function fo(e,t=!0){e.attributes.add(f.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.main.add(s`
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?s`uv = position * 0.5 + vec2(0.5);`:""}
  `)}function yr(e){e.uniforms.add(new it("zProjectionMap",(t,r)=>Jn(r.camera))),e.code.add(s`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add(s`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add(s`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function Jn(e){const t=e.projectionMatrix;return Be(Qn,t[14],t[10])}const Qn=Wt();let es=class extends K{constructor(t,r){super(t,"vec2",$.Draw,(i,o,a,n)=>i.setUniform2fv(t,r(o,a,n)))}};const ts=()=>bi.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let po=class{constructor(){this._includedModules=new Map}include(t,r){this._includedModules.has(t)?this._includedModules.get(t):(this._includedModules.set(t,r),t(this.builder,r))}},Xt=class extends po{constructor(){super(...arguments),this.vertex=new oi,this.fragment=new oi,this.attributes=new as,this.varyings=new ns,this.extensions=new mr,this.outputs=new pr}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(t){const r=this.extensions.generateSource(t),i=this.attributes.generateSource(t),o=this.varyings.generateSource(t),a=t==="vertex"?this.vertex:this.fragment,n=a.uniforms.generateSource(),l=a.code.generateSource(),c=a.main.generateSource(),u=t==="vertex"?cs:ls,d=a.constants.generateSource(),h=this.outputs.generateSource(t);return`#version 300 es
${r.join(`
`)}

${u}

${d.join(`
`)}

${n.join(`
`)}

${i.join(`
`)}

${o.join(`
`)}

${h.join(`
`)}

${l.join(`
`)}

${c.join(`
`)}`}generateBindPass(t){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const n=a.bind[$.Pass];n&&r.set(a.name,n)}),this.fragment.uniforms.entries.forEach(a=>{const n=a.bind[$.Pass];n&&r.set(a.name,n)});const i=Array.from(r.values()),o=i.length;return(a,n)=>{for(let l=0;l<o;++l)i[l](t,a,n)}}generateBindDraw(t){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const n=a.bind[$.Draw];n&&r.set(a.name,n)}),this.fragment.uniforms.entries.forEach(a=>{const n=a.bind[$.Draw];n&&r.set(a.name,n)});const i=Array.from(r.values()),o=i.length;return(a,n,l)=>{for(let c=0;c<o;++c)i[c](t,l,a,n)}}},rs=class{constructor(t){this._stage=t,this._entries=new Map}add(...t){for(const r of t)this._add(r);return this._stage}get(t){return this._entries.get(t)}_add(t){if(t!=null){if(this._entries.has(t.name)&&!this._entries.get(t.name).equals(t))throw new Se(`Duplicate uniform name ${t.name} for different uniform type`);this._entries.set(t.name,t)}else ts().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(t=>t.arraySize!=null?`uniform ${t.type} ${t.name}[${t.arraySize}];`:`uniform ${t.type} ${t.name};`)}get entries(){return Array.from(this._entries.values())}},is=class{constructor(t){this._stage=t,this._bodies=new Array}add(t){return this._bodies.push(t),this._stage}generateSource(){if(this._bodies.length>0)return[`void main() {
 ${this._bodies.join(`
`)||""} 
}`];throw new Se("Shader does not contain main function body.")}},os=class{constructor(t){this._stage=t,this._entries=new Array}add(t){return this._entries.push(t),this._stage}generateSource(){return this._entries}},oi=class extends po{constructor(){super(...arguments),this.uniforms=new rs(this),this.main=new is(this),this.code=new os(this),this.constants=new ss(this)}get builder(){return this}},as=class{constructor(){this._entries=new Array}add(t,r){this._entries.push([t,r])}generateSource(t){return t==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}},ns=class{constructor(){this._entries=new Map}add(t,r){this._entries.has(t)&&U(this._entries.get(t)===r),this._entries.set(t,r)}generateSource(t){const r=new Array;return this._entries.forEach((i,o)=>r.push(t==="vertex"?`out ${i} ${o};`:`in ${i} ${o};`)),r}},mr=class fr{constructor(){this._entries=new Set}add(t){this._entries.add(t)}generateSource(t){const r=t==="vertex"?fr.ALLOWLIST_VERTEX:fr.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}};mr.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],mr.ALLOWLIST_VERTEX=[];let pr=class vr{constructor(){this._entries=new Map}add(t,r,i=0){const o=this._entries.get(i);o?U(o.name===t&&o.type===r,`Fragment shader output location ${i} occupied`):this._entries.set(i,{name:t,type:r})}generateSource(t){if(t==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:vr.DEFAULT_NAME,type:vr.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((i,o)=>r.push(`layout(location = ${o}) out ${i.type} ${i.name};`)),r}};pr.DEFAULT_TYPE="vec4",pr.DEFAULT_NAME="fragColor";let ss=class j{constructor(t){this._stage=t,this._entries=new Set}add(t,r,i){let o="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":o=j._numberToFloatStr(i);break;case"int":o=j._numberToIntStr(i);break;case"bool":o=i.toString();break;case"vec2":o=`vec2(${j._numberToFloatStr(i[0])},                            ${j._numberToFloatStr(i[1])})`;break;case"vec3":o=`vec3(${j._numberToFloatStr(i[0])},                            ${j._numberToFloatStr(i[1])},                            ${j._numberToFloatStr(i[2])})`;break;case"vec4":o=`vec4(${j._numberToFloatStr(i[0])},                            ${j._numberToFloatStr(i[1])},                            ${j._numberToFloatStr(i[2])},                            ${j._numberToFloatStr(i[3])})`;break;case"ivec2":o=`ivec2(${j._numberToIntStr(i[0])},                             ${j._numberToIntStr(i[1])})`;break;case"ivec3":o=`ivec3(${j._numberToIntStr(i[0])},                             ${j._numberToIntStr(i[1])},                             ${j._numberToIntStr(i[2])})`;break;case"ivec4":o=`ivec4(${j._numberToIntStr(i[0])},                             ${j._numberToIntStr(i[1])},                             ${j._numberToIntStr(i[2])},                             ${j._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":o=`${r}(${Array.prototype.map.call(i,a=>j._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${t} = ${o};`),this._stage}static _numberToIntStr(t){return t.toFixed(0)}static _numberToFloatStr(t){return Number.isInteger(t)?t.toFixed(1):t.toString()}generateSource(){return Array.from(this._entries)}};const ls=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,cs=`precision highp float;
precision highp sampler2D;`,rr=4;function vo(){const e=new Xt,t=e.fragment;e.include(fo);const r=(rr+1)/2,i=1/(2*r*r);return t.include(yr),t.uniforms.add(new Z("depthMap",o=>o.depthTexture),new Tt("tex",o=>o.colorTexture),new es("blurSize",o=>o.blurSize),new oe("projScale",(o,a)=>{const n=a.camera.distance;return n>5e4?Math.max(0,o.projScale-(n-5e4)):o.projScale})),t.code.add(s`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.float(i)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(s`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${s.int(rr)}; r <= ${s.int(rr)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const ds=Object.freeze(Object.defineProperty({__proto__:null,build:vo},Symbol.toStringTag,{value:"Module"}));let ai=class extends Cr{constructor(t,r,i){super(t,r,new jt(ds,()=>At(()=>Promise.resolve().then(()=>tc),void 0)),i)}initializePipeline(){return Yt({colorWrite:kt})}};const us="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let hs=class extends at{constructor(){super(...arguments),this.projScale=1}},ms=class extends hs{constructor(){super(...arguments),this.intensity=1}},fs=class extends at{},ps=class extends fs{constructor(){super(...arguments),this.blurSize=Wt()}};function vs(e){e.fragment.uniforms.add(new re("projInfo",(t,r)=>gs(r.camera))),e.fragment.uniforms.add(new it("zScale",(t,r)=>_s(r.camera))),e.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function gs(e){const t=e.projectionMatrix;return t[11]===0?ae(ni,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):ae(ni,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}const ni=Vt();function _s(e){return e.projectionMatrix[11]===0?Be(si,0,1):Be(si,1,0)}const si=Wt(),li=16;function go(){const e=new Xt,t=e.fragment;return e.include(fo),e.include(vs),t.include(yr),t.uniforms.add(new oe("radius",(r,i)=>Zt(i.camera))).code.add(s`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(s`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new Z("normalMap",r=>r.normalTexture),new Z("depthMap",r=>r.depthTexture),new oe("projScale",r=>r.projScale),new Z("rnm",r=>r.noiseTexture),new it("rnmScale",(r,i)=>Be(ci,i.camera.fullWidth/r.noiseTexture.descriptor.width,i.camera.fullHeight/r.noiseTexture.descriptor.height)),new oe("intensity",r=>r.intensity),new it("screenSize",(r,i)=>Be(ci,i.camera.fullWidth,i.camera.fullHeight))),e.outputs.add("fragOcclusion","float"),t.main.add(s`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${s.int(li)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${s.int(li)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),e}function Zt(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const ci=Wt(),xs=Object.freeze(Object.defineProperty({__proto__:null,build:go,getRadius:Zt},Symbol.toStringTag,{value:"Module"}));let di=class extends Cr{constructor(t,r,i){super(t,r,new jt(xs,()=>At(()=>Promise.resolve().then(()=>rc),void 0)),i)}initializePipeline(){return Yt({colorWrite:kt})}};const dt=2;let Ue=class extends Zn{constructor(t){super(t),this.consumes={required:["normals"]},this.produces=ft.SSAO,this.isEnabled=()=>!1,this._enableTime=Mt(0),this._passParameters=new ms,this._drawParameters=new ps}initialize(){const t=Uint8Array.from(atob(us),i=>i.charCodeAt(0)),r=new wi;r.wrapMode=gt.CLAMP_TO_EDGE,r.pixelFormat=Le.RGB,r.wrapMode=gt.REPEAT,r.hasMipmap=!0,r.width=32,r.height=32,this._passParameters.noiseTexture=new Qe(this.renderingContext,r,t),this.techniques.precompile(di),this.techniques.precompile(ai),this.addHandles(Ti(()=>this.isEnabled(),()=>this._enableTime=Mt(0)))}destroy(){this._passParameters.noiseTexture=Lt(this._passParameters.noiseTexture)}render(t){const r=this.bindParameters,i=t.find(({name:E})=>E==="normals"),o=i==null?void 0:i.getTexture(),a=i==null?void 0:i.getTexture(la),n=this.fboCache,l=r.camera,c=l.fullViewport[2],u=l.fullViewport[3],d=Math.round(c/dt),h=Math.round(u/dt),v=this.techniques.acquire(di),g=this.techniques.acquire(ai);if(!v.compiled||!g.compiled)return this._enableTime=Mt(performance.now()),this.requestRender(sr.UPDATE),v.release(),g.release(),n.acquire(d,h,ft.SSAO,Je.RED);this._enableTime===0&&(this._enableTime=Mt(performance.now()));const p=this.renderingContext,_=this.view.qualitySettings.fadeDuration,x=l.relativeElevation,G=Tr((ii-x)/(ii-Kn),0,1),L=_>0?Math.min(_,performance.now()-this._enableTime)/_:1,B=L*G;this._passParameters.normalTexture=o,this._passParameters.depthTexture=a,this._passParameters.projScale=1/l.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Ts/Zt(l)**6*B;const P=n.acquire(c,u,"ssao input",Je.RG);p.bindFramebuffer(P.fbo),p.setViewport(0,0,c,u),p.bindTechnique(v,r,this._passParameters,this._drawParameters),p.screen.draw(),v.release();const F=n.acquire(d,h,"ssao blur",Je.RED);p.bindFramebuffer(F.fbo),this._drawParameters.colorTexture=P.getTexture(),Be(this._drawParameters.blurSize,0,dt/u),p.bindTechnique(g,r,this._passParameters,this._drawParameters),p.setViewport(0,0,d,h),p.screen.draw(),P.release();const M=n.acquire(d,h,ft.SSAO,Je.RED);return p.bindFramebuffer(M.fbo),p.setViewport(0,0,c,u),p.setClearColor(1,1,1,0),p.clear(ca.COLOR),this._drawParameters.colorTexture=F.getTexture(),Be(this._drawParameters.blurSize,dt/c,0),p.bindTechnique(g,r,this._passParameters,this._drawParameters),p.setViewport(0,0,d,h),p.screen.draw(),g.release(),p.setViewport4fv(l.fullViewport),F.release(),L<1&&this.requestRender(sr.UPDATE),M}};m([z()],Ue.prototype,"consumes",void 0),m([z()],Ue.prototype,"produces",void 0),m([z({constructOnly:!0})],Ue.prototype,"techniques",void 0),m([z({constructOnly:!0})],Ue.prototype,"isEnabled",void 0),Ue=m([xr("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Ue);const Ts=.5;function Or(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new Z("ssaoTex",(i,o)=>{var a;return(a=o.ssao)==null?void 0:a.getTexture()})),r.constants.add("blurSizePixelsInverse","float",1/dt),r.code.add(s`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(s`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}let bs=class{constructor(t){this._material=t.material,this._techniques=t.techniques,this._output=t.output}dispose(){}get _stippleTextures(){return this._techniques.context.stippleTextures}get _markerTextures(){return this._techniques.context.markerTextures}acquireTechnique(t,r){return this._techniques.acquire(t,this._material.getConfiguration(this._output,r))}ensureResources(t){return lr.LOADED}},Es=class extends bs{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textures=t.textures,this._textureId=t.textureId,this._acquire(t.textureId,r=>this._texture=r),this._acquire(t.normalTextureId,r=>this._textureNormal=r),this._acquire(t.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(t.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(t.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){super.dispose(),this._texture=Ie(this._texture),this._textureNormal=Ie(this._textureNormal),this._textureEmissive=Ie(this._textureEmissive),this._textureOcclusion=Ie(this._textureOcclusion),this._textureMetallicRoughness=Ie(this._textureMetallicRoughness),this._disposed=!0}ensureResources(t){return this._numLoading===0?lr.LOADED:lr.LOADING}get textureBindParameters(){return new As(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(t){this._texture!=null&&t===this._texture.id||(this._texture=Ie(this._texture),this._textureId=t,this._acquire(this._textureId,r=>this._texture=r))}_acquire(t,r){if(t==null)return void r(null);const i=this._textures.acquire(t);if(qo(i))return++this._numLoading,void i.then(o=>{if(this._disposed)return Ie(o),void r(null);r(o)}).finally(()=>--this._numLoading);r(i)}},Ss=class extends at{constructor(t=null){super(),this.textureEmissive=t}},As=class extends Ss{constructor(t=null,r=null,i=null,o=null,a=null,n,l){super(i),this.texture=t,this.textureNormal=r,this.textureOcclusion=o,this.textureMetallicRoughness=a,this.scale=n,this.normalTextureTransformMatrix=l}};var N;(function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"})(N||(N={}));function _o(e,t){const r=t.pbrMode,i=e.fragment;if(r!==N.Schematic&&r!==N.Disabled&&r!==N.Normal)return void i.code.add(s`void applyPBRFactors() {}`);if(r===N.Disabled)return void i.code.add(s`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(r===N.Schematic)return void i.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:o,hasMetallicRoughnessTextureTransform:a,hasOcclusionTexture:n,hasOcclusionTextureTransform:l,bindType:c}=t;(o||n)&&e.include(Mr,t),i.code.add(s`vec3 mrr;
float occlusion;`),o&&i.uniforms.add(c===$.Pass?new Z("texMetallicRoughness",u=>u.textureMetallicRoughness):new Tt("texMetallicRoughness",u=>u.textureMetallicRoughness)),n&&i.uniforms.add(c===$.Pass?new Z("texOcclusion",u=>u.textureOcclusion):new Tt("texOcclusion",u=>u.textureOcclusion)),i.uniforms.add(c===$.Pass?new k("mrrFactors",u=>u.mrrFactors):new ce("mrrFactors",u=>u.mrrFactors)),i.code.add(s`
    ${I(o,s`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${I(n,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${n?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${I(o,`applyMetallicRoughness(${a?"metallicRoughnessUV":"vuv0"});`)}
      ${I(n,`applyOcclusion(${l?"occlusionUV":"vuv0"});`)}
    }
  `)}function Cs(e,t){const r=e.fragment,i=t.lightingSphericalHarmonicsOrder!==void 0?t.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add(new k("lightingAmbientSH0",(o,a)=>X(ui,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add(new re("lightingAmbientSH_R",(o,a)=>ae(ve,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new re("lightingAmbientSH_G",(o,a)=>ae(ve,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new re("lightingAmbientSH_B",(o,a)=>ae(ve,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===2&&(r.uniforms.add(new k("lightingAmbientSH0",(o,a)=>X(ui,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new re("lightingAmbientSH_R1",(o,a)=>ae(ve,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new re("lightingAmbientSH_G1",(o,a)=>ae(ve,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new re("lightingAmbientSH_B1",(o,a)=>ae(ve,a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new re("lightingAmbientSH_R2",(o,a)=>ae(ve,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new re("lightingAmbientSH_G2",(o,a)=>ae(ve,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new re("lightingAmbientSH_B2",(o,a)=>ae(ve,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==N.Normal&&t.pbrMode!==N.Schematic||r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const ui=A(),ve=Vt();function Ft(e){e.uniforms.add(new k("mainLightDirection",(t,r)=>r.lighting.mainLight.direction))}function St(e){e.uniforms.add(new k("mainLightIntensity",(t,r)=>r.lighting.mainLight.intensity))}function ws(e){Ft(e.fragment),St(e.fragment),e.fragment.code.add(s`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function Ms(e){const t=e.fragment.code;t.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function xo(e){const t=3.141592653589793,r=.3183098861837907;e.vertex.constants.add("PI","float",t),e.fragment.constants.add("PI","float",t),e.fragment.constants.add("LIGHT_NORMALIZATION","float",r),e.fragment.constants.add("INV_PI","float",r),e.fragment.constants.add("HALF_PI","float",1.570796326794897),e.fragment.constants.add("TWO_PI","float",6.28318530717958)}function Rr(e,t){const r=e.fragment.code;e.include(xo),t.pbrMode!==N.Normal&&t.pbrMode!==N.Schematic&&t.pbrMode!==N.Simplified&&t.pbrMode!==N.TerrainWithWater||(r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==N.Normal&&t.pbrMode!==N.Schematic||(e.include(Ms),r.add(s`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}let ys=class extends K{constructor(t,r){super(t,"bool",$.Pass,(i,o,a)=>i.setUniform1b(t,r(o,a)))}};const Os=.4;function Ir(e){e.constants.add("ambientBoostFactor","float",Os)}function $r(e){e.uniforms.add(new oe("lightingGlobalFactor",(t,r)=>r.lighting.globalFactor))}function To(e,t){const r=e.fragment;switch(e.include(Or,t),t.pbrMode!==N.Disabled&&e.include(Rr,t),e.include(Cs,t),e.include(xo),r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===N.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Ir(r),$r(r),Ft(r),r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?s`normalize(vPosWorld)`:s`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),St(r),r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case N.Disabled:case N.WaterOnIntegratedMesh:case N.Water:e.include(ws),r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case N.Normal:case N.Schematic:r.code.add(s`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(s`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new ys("hasFillLights",(i,o)=>o.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new oe("lightingSpecularStrength",(i,o)=>o.lighting.mainLight.specularStrength),new oe("lightingEnvironmentStrength",(i,o)=>o.lighting.mainLight.environmentStrength)).code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==N.Schematic||t.hasColorTexture?s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case N.Simplified:case N.TerrainWithWater:Ft(r),St(r),r.code.add(s`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:Gt(t.pbrMode);case N.COUNT:}}let Rs=class extends K{constructor(t,r,i){super(t,"mat4",$.Draw,(o,a,n,l)=>o.setUniformMatrix4fv(t,r(a,n,l)),i)}},Is=class extends K{constructor(t,r,i){super(t,"mat4",$.Pass,(o,a,n)=>o.setUniformMatrix4fv(t,r(a,n)),i)}};function bo(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new Is("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),So(e))}function Eo(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new Rs("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),So(e))}function So(e){const t=e.fragment;t.include(uo),t.uniforms.add(new Z("shadowMap",(r,i)=>i.shadowMap.depthTexture),new wr("numCascades",(r,i)=>i.shadowMap.numCascades),new re("cascadeDistances",(r,i)=>i.shadowMap.cascadeDistances)).code.add(s`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function Ao(e,{occlusionPass:t,terrainDepthTest:r,cullAboveTerrain:i}){r?(e.fragment.include(yr),e.fragment.uniforms.add(new Z("terrainDepthTexture",(o,a)=>{var n;return(n=a.terrainDepth)==null?void 0:n.attachment})).code.add(s`
   ${t?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${t?s`return fragmentDepth < linearDepth && depth < 1.0;`:s`if(fragmentDepth ${i?">":"<="} linearDepth) discard;`}
    }`)):t?e.fragment.code.add(s`#define terrainDepthTest(fragmentDepth) false`):e.fragment.code.add(s`#define terrainDepthTest(fragmentDepth) {}`)}function $s(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new he("colorTextureTransformMatrix",r=>r.colorTextureTransformMatrix??nt)).code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(s`void forwardColorUV(){}`)}function Ns(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==J.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new he("normalTextureTransformMatrix",r=>r.normalTextureTransformMatrix??nt)).code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(s`void forwardNormalUV(){}`)}function Ls(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==J.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new he("emissiveTextureTransformMatrix",r=>r.emissiveTextureTransformMatrix??nt)).code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(s`void forwardEmissiveUV(){}`)}function Ps(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==J.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new he("occlusionTextureTransformMatrix",r=>r.occlusionTextureTransformMatrix??nt)).code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(s`void forwardOcclusionUV(){}`)}function Ds(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==J.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new he("metallicRoughnessTextureTransformMatrix",r=>r.metallicRoughnessTextureTransformMatrix??nt)).code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(s`void forwardMetallicRoughnessUV(){}`)}function Co(e){e.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function wo(e){e.include(Co),e.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(ge.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(ge.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(ge.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${s.int(ge.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(ge.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}var le;(function(e){e[e.None=0]="None",e[e.Value=1]="Value",e[e.Texture=2]="Texture",e[e.COUNT=3]="COUNT"})(le||(le={}));function Fs(e,t){if(!xt(t.output))return;const{emissionSource:r,hasEmissiveTextureTransform:i,bindType:o}=t,a=r===le.Texture;a&&(e.include(Mr,t),e.fragment.uniforms.add(o===$.Pass?new Z("texEmission",l=>l.textureEmissive):new Tt("texEmission",l=>l.textureEmissive)));const n=r===le.Value||a;n&&e.fragment.uniforms.add(o===$.Pass?new k("emissionFactor",l=>l.emissiveFactor):new ce("emissionFactor",l=>l.emissiveFactor)),e.fragment.code.add(s`
    vec4 getEmissions() {
      vec4 emissions = ${n?"vec4(emissionFactor, 1.0)":"vec4(0.0)"};
      ${I(a,`emissions *= textureLookup(texEmission, ${i?"emissiveUV":"vuv0"});
         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)};
      return emissions;
    }
  `)}function Mo(e,t){e.include(ho,t),e.include(Fs,t),e.fragment.include(Co);const r=t.output===D.ObjectAndLayerIdColor,i=yi(t.output),o=xt(t.output)&&t.oitPass===Y.ColorAlpha,a=xt(t.output)&&t.oitPass!==Y.ColorAlpha,n=t.discardInvisibleFragments;let l=0;(a||i||o)&&e.outputs.add("fragColor","vec4",l++),i&&e.outputs.add("fragEmission","vec4",l++),o&&e.outputs.add("fragAlpha","float",l++),e.fragment.code.add(s`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${I(r,s`finalColor.a = 1.0;`)}

      ${I(n,s`if (finalColor.a < ${s.float(Ee)}){
              discard;
              return;
            }`)}

      finalColor = highlightSlice(finalColor, vWorldPosition);
      ${I(o,s`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${I(a,"fragColor = finalColor;")}
      ${I(i,"fragEmission = getEmissions();")}
      calculateOcclusionAndOutputHighlight();
      ${I(r,"outputObjectAndLayerIdColor();")}
    }
  `)}function yo(e){const t=new Xt,{vertex:r,fragment:i,varyings:o}=t,{output:a,normalType:n,offsetBackfaces:l,instancedColor:c,spherical:u,receiveShadows:d,snowCover:h,pbrMode:v,textureAlphaPremultiplied:g,instancedDoublePrecision:p,hasVertexColors:_,hasVertexTangents:x,hasColorTexture:G,hasNormalTexture:L,hasNormalTextureTransform:B,hasColorTextureTransform:P}=e;if(Ze(r,e),t.include(Ar),o.add("vpos","vec3"),t.include(mt,e),t.include(ao,e),t.include(co,e),t.include($s,e),!xt(a))return t.include(mo,e),t;t.include(Ns,e),t.include(Ls,e),t.include(Ps,e),t.include(Ds,e),Et(r,e),t.include(Ut,e),t.include(Xe,e);const F=n===ee.Attribute||n===ee.Compressed;return F&&l&&t.include(eo),t.include(Xn,e),t.include(Li,e),c&&t.attributes.add(f.INSTANCECOLOR,"vec4"),o.add("vPositionLocal","vec3"),t.include(De,e),t.include(Qi,e),t.include(no,e),t.include(so,e),r.uniforms.add(new re("externalColor",M=>M.externalColor)),o.add("vcolorExt","vec4"),e.terrainDepthTest&&o.add("depth","float"),r.main.add(s`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${I(c,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${s.float(Ee)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${I(F,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${I(x,"vTangent = dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${I(F&&l,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }

    ${I(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `),t.include(To,e),t.include(Or,e),t.include(Ke,e),t.include(p?bo:Eo,e),t.include(Ao,e),t.include(Ye,e),t.include(Mo,e),Et(i,e),i.uniforms.add(r.uniforms.get("localOrigin"),new k("ambient",M=>M.ambient),new k("diffuse",M=>M.diffuse),new oe("opacity",M=>M.opacity),new oe("layerOpacity",M=>M.layerOpacity)),G&&i.uniforms.add(new Z("tex",M=>M.texture)),t.include(_o,e),t.include(Rr,e),i.include(wo),t.include(Yn,e),Ir(i),$r(i),St(i),i.main.add(s`
      discardBySlice(vpos);
      ${I(e.terrainDepthTest,"terrainDepthTest(depth);")}
      ${G?s`
              vec4 texColor = texture(tex, ${P?"colorUV":"vuv0"});
              ${I(g,"texColor.rgb /= texColor.a;")}
              discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${n===ee.ScreenDerivative?s`vec3 normal = screenDerivativeNormal(vPositionLocal);`:s`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${d?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":I(u,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${I(_,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${I(_,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${L?`mat3 tangentSpace = computeTangentSpace(${x?"normal":"normal, vpos, vuv0"});
             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${B?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${u?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${I(h,s`
            float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
            albedo = mix(albedo, vec3(1), snow);
            shadingNormal = mix(shadingNormal, normal, snow);
            ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${v===N.Normal||v===N.Schematic?s`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${I(h,s`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${h?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),t}const zs=Object.freeze(Object.defineProperty({__proto__:null,build:yo},Symbol.toStringTag,{value:"Module"}));let Bs=class extends $a{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=On,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=ze.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=ot,this.instancedDoublePrecision=!1,this.normalType=ee.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=vt(.2,.2,.2),this.diffuse=vt(.8,.8,.8),this.externalColor=ko(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=A(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=Ht.Less,this.textureAlphaMode=Te.Blend,this.textureAlphaCutoff=Ee,this.textureAlphaPremultiplied=!1,this.renderOccluded=ur.Occlude,this.isDecoration=!1}},Gd=class extends Na{constructor(){super(...arguments),this.origin=A(),this.slicePlaneLocalOrigin=this.origin}},Oo=class extends Cr{constructor(t,r,i,o=new jt(zs,()=>At(()=>Promise.resolve().then(()=>ic),void 0))){super(t,r,o,i),this.type="DefaultMaterialTechnique"}_makePipeline(t,r){const{oitPass:i,output:o,transparent:a,cullFace:n,customDepthTest:l,hasOccludees:c,enableOffset:u}=t,d=i===Y.NONE,h=i===Y.FrontFace;return Yt({blending:xt(o)&&a?xn(i):null,culling:Vs(t)?Xa(n):null,depthTest:{func:An(i,Gs(l))},depthWrite:Tn(t),drawBuffers:o===D.Depth?{buffers:[da.NONE]}:Cn(i,o),colorWrite:kt,stencilWrite:c?wn:null,stencilTest:c?r?yn:Mn:null,polygonOffset:d||h?null:Sn(u)})}initializePipeline(t){return this._occludeePipelineState=this._makePipeline(t,!0),this._makePipeline(t,!1)}getPipeline(t){return t?this._occludeePipelineState:super.getPipeline()}};function Gs(e){return e===Ht.Lequal?ue.LEQUAL:ue.LESS}function Vs(e){return e.cullFace!==ze.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}async function Hs(e,t){const{data:r}=await Yo(e,{responseType:"image",...t});return r}function Us(){return hi??(hi=(async()=>{const e=await At(()=>import("./basis_transcoder-B40h2JNH.js"),[]),t=await e.default({locateFile:r=>Xo(`esri/libs/basisu/${r}`)});return t.initializeBasis(),t})()),hi}let hi;var Pe;(function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"})(Pe||(Pe={}));let de=null,Ot=null;async function Ro(){return Ot==null&&(Ot=Us(),de=await Ot),Ot}function Ws(e,t){if(de==null)return e.byteLength;const r=new de.BasisFile(new Uint8Array(e)),i=$o(r)?Io(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}function js(e,t){if(de==null)return e.byteLength;const r=new de.KTX2File(new Uint8Array(e)),i=No(r)?Io(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}function Io(e,t,r,i,o){const a=ha(t?_e.COMPRESSED_RGBA8_ETC2_EAC:_e.COMPRESSED_RGB8_ETC2),n=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*a*n)}function $o(e){return e.getNumImages()>=1&&!e.isUASTC()}function No(e){return e.getFaces()>=1&&e.isETC1S()}async function qs(e,t,r){de==null&&(de=await Ro());const i=new de.BasisFile(new Uint8Array(r));if(!$o(i))return null;i.startTranscoding();const o=Lo(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(a,n)=>i.getImageTranscodedSizeInBytes(0,a,n),(a,n,l)=>i.transcodeImage(l,0,a,n,0,0));return i.close(),i.delete(),o}async function ks(e,t,r){de==null&&(de=await Ro());const i=new de.KTX2File(new Uint8Array(r));if(!No(i))return null;i.startTranscoding();const o=Lo(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(a,n)=>i.getImageTranscodedSizeInBytes(a,0,0,n),(a,n,l)=>i.transcodeImage(l,a,0,0,n,0,-1,-1));return i.close(),i.delete(),o}function Lo(e,t,r,i,o,a,n,l){const{compressedTextureETC:c,compressedTextureS3TC:u}=e.capabilities,[d,h]=c?i?[Pe.ETC2_RGBA,_e.COMPRESSED_RGBA8_ETC2_EAC]:[Pe.ETC1_RGB,_e.COMPRESSED_RGB8_ETC2]:u?i?[Pe.BC3_RGBA,_e.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Pe.BC1_RGB,_e.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Pe.RGBA32,Le.RGBA],v=t.hasMipmap?r:Math.min(1,r),g=[];for(let p=0;p<v;p++)g.push(new Uint8Array(n(p,d))),l(p,d,g[p]);return t.internalFormat=h,t.hasMipmap=g.length>1,t.samplingMode=t.hasMipmap?rt.LINEAR_MIPMAP_LINEAR:rt.LINEAR,t.width=o,t.height=a,new Qe(e,t,{type:"compressed",levels:g})}const Rt=()=>bi.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Ys=542327876,Xs=131072,Zs=4;function Nr(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function Ks(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const Js=Nr("DXT1"),Qs=Nr("DXT3"),el=Nr("DXT5"),tl=31,rl=0,il=1,ol=2,al=3,nl=4,sl=7,ll=20,cl=21;function dl(e,t,r){const i=ul(r,t.hasMipmap??!1);if(i==null)throw new Error("DDS texture data is null");const{textureData:o,internalFormat:a,width:n,height:l}=i;return t.samplingMode=o.levels.length>1?rt.LINEAR_MIPMAP_LINEAR:rt.LINEAR,t.hasMipmap=o.levels.length>1,t.internalFormat=a,t.width=n,t.height=l,new Qe(e,t,o)}function ul(e,t){const r=new Int32Array(e.buffer,e.byteOffset,tl);if(r[rl]!==Ys)return Rt().error("Invalid magic number in DDS header"),null;if(!(r[ll]&Zs))return Rt().error("Unsupported format, must contain a FourCC code"),null;const i=r[cl];let o,a;switch(i){case Js:o=8,a=_e.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Qs:o=16,a=_e.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case el:o=16,a=_e.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Rt().error("Unsupported FourCC code:",Ks(i)),null}let n=1,l=r[nl],c=r[al];(3&l||3&c)&&(Rt().warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,c=c+3&-4);const u=l,d=c;let h,v;r[ol]&Xs&&t!==!1&&(n=Math.max(1,r[sl]));let g=e.byteOffset+r[il]+4;const p=[];for(let _=0;_<n;++_)v=(l+3>>2)*(c+3>>2)*o,h=new Uint8Array(e.buffer,g,v),p.push(h),g+=v,l=Math.max(1,l>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:p},internalFormat:a,width:u,height:d}}function hl(e,t){let a=e.width*e.height;if(a<4096)return e instanceof ImageData?Po(e):e;let n=e.width,l=e.height;do n=Math.ceil(n/2),l=Math.ceil(l/2),a=n*l;while(a>1048576||t!=null&&(n>t||l>t));return Lr(e,n,l)}function ml(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const i=t/r;return Lr(e,Math.round(e.width*i),Math.round(e.height*i))}function Lr(e,t,r){if(e instanceof ImageData)return Lr(Po(e),t,r);const i=document.createElement("canvas");return i.width=t,i.height=r,i.getContext("2d").drawImage(e,0,0,i.width,i.height),i}function Po(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(r==null)throw new Se("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}let Ud=class extends Di{get parameters(){return this._parameters}constructor(t,r){super(),this._data=t,this.type=bt.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new Zo,this._parameters={...pl,...r},this._startPreload(t)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(t){t!=null&&(t instanceof HTMLVideoElement?(this.frameUpdate=r=>this._frameUpdate(t,r),this._startPreloadVideoElement(t)):t instanceof HTMLImageElement&&this._startPreloadImageElement(t))}_startPreloadVideoElement(t){if(!(Br(t.src)||t.preload==="auto"&&t.crossOrigin)){t.preload="auto",t.crossOrigin="anonymous";const r=!t.paused;if(t.src=t.src,r&&t.autoplay){const i=()=>{t.removeEventListener("canplay",i),t.play()};t.addEventListener("canplay",i)}}}_startPreloadImageElement(t){Ko(t.src)||Br(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src)}_createDescriptor(t){const r=new wi;return r.wrapMode=this._parameters.wrap??gt.REPEAT,r.flipped=!this._parameters.noUnpackFlip,r.samplingMode=this._parameters.mipmap?rt.LINEAR_MIPMAP_LINEAR:rt.LINEAR,r.hasMipmap=!!this._parameters.mipmap,r.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,r.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?t.parameters.maxMaxAnisotropy:1),r}get glTexture(){return this._glTexture}get memoryEstimate(){var t;return((t=this._glTexture)==null?void 0:t.usedMemory)||fl(this._data,this._parameters)}load(t){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new Qe(t,this._createDescriptor(t),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),typeof r=="string"?this._loadFromURL(t,r):r instanceof Image?this._loadFromImageElement(t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(t,r):lt(r)&&this._parameters.encoding===je.DDS_ENCODING?this._loadFromDDSData(t,r):ct(r)&&this._parameters.encoding===je.DDS_ENCODING?this._loadFromDDSData(t,new Uint8Array(r)):(ct(r)||lt(r))&&this._parameters.encoding===je.KTX2_ENCODING?this._loadFromKTX2(t,r):(ct(r)||lt(r))&&this._parameters.encoding===je.BASIS_ENCODING?this._loadFromBasis(t,r):lt(r)?this._loadFromPixelData(t,r):ct(r)?this._loadFromPixelData(t,new Uint8Array(r)):null)}_frameUpdate(t,r){return this._glTexture==null||t.readyState<pt.HAVE_CURRENT_DATA||r===t.currentTime?r:(this._glTexture.setData(t),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),t.currentTime)}_loadFromDDSData(t,r){return this._glTexture=dl(t,this._createDescriptor(t),r),this._glTexture}_loadFromKTX2(t,r){return this._loadAsync(()=>ks(t,this._createDescriptor(t),r).then(i=>(this._glTexture=i,i)))}_loadFromBasis(t,r){return this._loadAsync(()=>qs(t,this._createDescriptor(t),r).then(i=>(this._glTexture=i,i)))}_loadFromPixelData(t,r){U(this._parameters.width>0&&this._parameters.height>0);const i=this._createDescriptor(t);return i.pixelFormat=this._parameters.components===1?Le.LUMINANCE:this._parameters.components===3?Le.RGB:Le.RGBA,i.width=this._parameters.width??0,i.height=this._parameters.height??0,this._glTexture=new Qe(t,i,r),this._glTexture}_loadFromURL(t,r){return this._loadAsync(async i=>{const o=await Hs(r,{signal:i});return Gr(i),this._loadFromImage(t,o)})}_loadFromImageElement(t,r){return r.complete?this._loadFromImage(t,r):this._loadAsync(async i=>{const o=await Jo(r,r.src,!1,i);return Gr(i),this._loadFromImage(t,o)})}_loadFromVideoElement(t,r){return r.readyState>=pt.HAVE_CURRENT_DATA?this._loadFromImage(t,r):this._loadFromVideoElementAsync(t,r)}_loadFromVideoElementAsync(t,r){return this._loadAsync(i=>new Promise((o,a)=>{const n=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",c),ta(u)},l=()=>{r.readyState>=pt.HAVE_CURRENT_DATA&&(n(),o(this._loadFromImage(t,r)))},c=d=>{n(),a(d||new Se("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",c);const u=Qo(i,()=>c(ea()))}))}_loadFromImage(t,r){let i=r;if(!(i instanceof HTMLVideoElement)){const{maxTextureSize:n}=t.parameters;i=this._parameters.downsampleUncompressed?hl(i,n):ml(i,n)}const o=Do(i);this._parameters.width=o.width,this._parameters.height=o.height;const a=this._createDescriptor(t);return a.pixelFormat=this._parameters.components===3?Le.RGB:Le.RGBA,a.width=o.width,a.height=o.height,this._glTexture=new Qe(t,a,i),this._glTexture}_loadAsync(t){const r=new AbortController;this._loadingController=r;const i=t(r.signal);this._loadingPromise=i;const o=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(o,o),i}unload(){if(this._glTexture=Lt(this._glTexture),this._loadingController!=null){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort()}this.events.emit("unloaded")}};function fl(e,t){if(e==null)return 0;if(ct(e)||lt(e))return t.encoding===je.KTX2_ENCODING?js(e,!!t.mipmap):t.encoding===je.BASIS_ENCODING?Ws(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Do(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}function Do(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var pt;(function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(pt||(pt={}));const pl={wrap:{s:gt.REPEAT,t:gt.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};class vl{constructor(t=!1,r=!0){this.isVerticalRay=t,this.normalRequired=r}}const It=ra();function gl(e,t,r,i,o,a){if(!e.visible)return;const n=et(Il,i,r),l=(u,d,h)=>{a(u,h,d,!1)},c=new vl(!1,t.options.normalRequired);if(e.boundingInfo){U(e.type===bt.Mesh);const u=t.tolerance;Fo(e.boundingInfo,r,n,u,o,c,l)}else{const u=e.attributes.get(f.POSITION),d=u.indices;Tl(r,n,0,d.length/3,d,u.data,u.stride,o,c,l)}}const _l=A();function Fo(e,t,r,i,o,a,n){if(e==null)return;const l=wl(r,_l);if(ia(It,e.bbMin),oa(It,e.bbMax),o!=null&&o.applyToAabb(It),Ml(It,t,l,i)){const{primitiveIndices:c,position:u}=e,d=c?c.length:u.indices.length/3;if(d>Ol){const h=e.getChildren();if(h!==void 0){for(const v of h)Fo(v,t,r,i,o,a,n);return}}xl(t,r,0,d,u.indices,u.data,u.stride,c,o,a,n)}}const ut=A();function xl(e,t,r,i,o,a,n,l,c,u,d){const h=e[0],v=e[1],g=e[2],p=t[0],_=t[1],x=t[2],{normalRequired:G}=u;for(let L=r;L<i;++L){const B=l[L],P=3*B,F=n*o[P];let M=a[F],E=a[F+1],S=a[F+2];const O=n*o[P+1];let R=a[O],T=a[O+1],C=a[O+2];const y=n*o[P+2];let V=a[y],W=a[y+1],q=a[y+2];c!=null&&([M,E,S]=c.applyToVertex(M,E,S,L),[R,T,C]=c.applyToVertex(R,T,C,L),[V,W,q]=c.applyToVertex(V,W,q,L));const te=R-M,Ce=T-E,we=C-S,Me=V-M,ye=W-E,pe=q-S,Oe=_*pe-ye*x,Re=x*Me-pe*p,Ge=p*ye-Me*_,se=te*Oe+Ce*Re+we*Ge;if(Math.abs(se)<=Rl)continue;const Ve=h-M,Kt=v-E,Jt=g-S,He=Ve*Oe+Kt*Re+Jt*Ge;if(se>0){if(He<0||He>se)continue}else if(He>0||He<se)continue;const Pr=Kt*we-Ce*Jt,Dr=Jt*te-we*Ve,Fr=Ve*Ce-te*Kt,wt=p*Pr+_*Dr+x*Fr;if(se>0){if(wt<0||He+wt>se)continue}else if(wt>0||He+wt<se)continue;const zr=(Me*Pr+ye*Dr+pe*Fr)/se;zr>=0&&d(zr,B,G?Al(te,Ce,we,Me,ye,pe,ut):null)}}function Tl(e,t,r,i,o,a,n,l,c,u){const d=t,h=$l,v=Math.abs(d[0]),g=Math.abs(d[1]),p=Math.abs(d[2]),_=v>=g?v>=p?0:2:g>=p?1:2,x=_,G=d[x]<0?2:1,L=(_+G)%3,B=(_+(3-G))%3,P=d[L]/d[x],F=d[B]/d[x],M=1/d[x],E=bl,S=El,O=Sl,{normalRequired:R}=c;for(let T=r;T<i;++T){const C=3*T,y=n*o[C];X(h[0],a[y+0],a[y+1],a[y+2]);const V=n*o[C+1];X(h[1],a[V+0],a[V+1],a[V+2]);const W=n*o[C+2];X(h[2],a[W+0],a[W+1],a[W+2]),l&&(Nt(h[0],l.applyToVertex(h[0][0],h[0][1],h[0][2],T)),Nt(h[1],l.applyToVertex(h[1][0],h[1][1],h[1][2],T)),Nt(h[2],l.applyToVertex(h[2][0],h[2][1],h[2][2],T))),et(E,h[0],e),et(S,h[1],e),et(O,h[2],e);const q=E[L]-P*E[x],te=E[B]-F*E[x],Ce=S[L]-P*S[x],we=S[B]-F*S[x],Me=O[L]-P*O[x],ye=O[B]-F*O[x],pe=Me*we-ye*Ce,Oe=q*ye-te*Me,Re=Ce*te-we*q;if((pe<0||Oe<0||Re<0)&&(pe>0||Oe>0||Re>0))continue;const Ge=pe+Oe+Re;if(Ge===0)continue;const se=pe*(M*E[x])+Oe*(M*S[x])+Re*(M*O[x]);if(se*Math.sign(Ge)<0)continue;const Ve=se/Ge;Ve>=0&&u(Ve,T,R?Cl(h):null)}}const bl=A(),El=A(),Sl=A();function Al(e,t,r,i,o,a,n){return X(zt,e,t,r),X(Bt,i,o,a),br(n,zt,Bt),Er(n,n),n}function Cl(e){return et(zt,e[1],e[0]),et(Bt,e[2],e[0]),br(ut,zt,Bt),Er(ut,ut),ut}const zt=A(),Bt=A();function wl(e,t){return X(t,1/e[0],1/e[1],1/e[2])}function Ml(e,t,r,i){return yl(e,t,r,i,1/0)}function yl(e,t,r,i,o){const a=(e[0]-i-t[0])*r[0],n=(e[3]+i-t[0])*r[0];let l=Math.min(a,n),c=Math.max(a,n);const u=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(c=Math.min(c,Math.max(u,d)),c<0||(l=Math.max(l,Math.min(u,d)),l>c))return!1;const h=(e[2]-i-t[2])*r[2],v=(e[5]+i-t[2])*r[2];return c=Math.min(c,Math.max(h,v)),!(c<0)&&(l=Math.max(l,Math.min(h,v)),!(l>c)&&l<o)}const Ol=1e3,Rl=1e-7,Il=A(),$l=[A(),A(),A()];function jd(e,t,r,i=1){const{data:o,indices:a}=e,n=t.typedBuffer,l=t.typedBufferStride,c=a.length;if(r*=l,i===1)for(let u=0;u<c;++u)n[r]=o[a[u]],r+=l;else for(let u=0;u<c;++u){const d=o[a[u]];for(let h=0;h<i;h++)n[r]=d,r+=l}}function mi(e,t,r){const{data:i,indices:o}=e,a=t.typedBuffer,n=t.typedBufferStride,l=o.length;r*=n;for(let c=0;c<l;++c){const u=2*o[c];a[r]=i[u],a[r+1]=i[u+1],r+=n}}function zo(e,t,r,i){const{data:o,indices:a}=e,n=t.typedBuffer,l=t.typedBufferStride,c=a.length;if(r*=l,i==null||i===1)for(let u=0;u<c;++u){const d=3*a[u];n[r]=o[d],n[r+1]=o[d+1],n[r+2]=o[d+2],r+=l}else for(let u=0;u<c;++u){const d=3*a[u];for(let h=0;h<i;++h)n[r]=o[d],n[r+1]=o[d+1],n[r+2]=o[d+2],r+=l}}function Bo(e,t,r,i=1){const{data:o,indices:a}=e,n=t.typedBuffer,l=t.typedBufferStride,c=a.length;if(r*=l,i===1)for(let u=0;u<c;++u){const d=4*a[u];n[r]=o[d],n[r+1]=o[d+1],n[r+2]=o[d+2],n[r+3]=o[d+3],r+=l}else for(let u=0;u<c;++u){const d=4*a[u];for(let h=0;h<i;++h)n[r]=o[d],n[r+1]=o[d+1],n[r+2]=o[d+2],n[r+3]=o[d+3],r+=l}}function qd(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride;t*=o;for(let a=0;a<r;++a)i[t]=0,i[t+1]=0,i[t+2]=0,i[t+3]=0,t+=o}function Nl(e,t,r,i,o=1){if(!t)return void zo(e,r,i,o);const{data:a,indices:n}=e,l=r.typedBuffer,c=r.typedBufferStride,u=n.length,d=t[0],h=t[1],v=t[2],g=t[4],p=t[5],_=t[6],x=t[8],G=t[9],L=t[10],B=t[12],P=t[13],F=t[14];i*=c;let M=0,E=0,S=0;const O=Ei(t)?R=>{M=a[R]+B,E=a[R+1]+P,S=a[R+2]+F}:R=>{const T=a[R],C=a[R+1],y=a[R+2];M=d*T+g*C+x*y+B,E=h*T+p*C+G*y+P,S=v*T+_*C+L*y+F};if(o===1)for(let R=0;R<u;++R)O(3*n[R]),l[i]=M,l[i+1]=E,l[i+2]=S,i+=c;else for(let R=0;R<u;++R){O(3*n[R]);for(let T=0;T<o;++T)l[i]=M,l[i+1]=E,l[i+2]=S,i+=c}}function Ll(e,t,r,i,o=1){if(!t)return void zo(e,r,i,o);const{data:a,indices:n}=e,l=t,c=r.typedBuffer,u=r.typedBufferStride,d=n.length,h=l[0],v=l[1],g=l[2],p=l[4],_=l[5],x=l[6],G=l[8],L=l[9],B=l[10],P=!Si(l),F=1e-6,M=1-F;i*=u;let E=0,S=0,O=0;const R=Ei(l)?T=>{E=a[T],S=a[T+1],O=a[T+2]}:T=>{const C=a[T],y=a[T+1],V=a[T+2];E=h*C+p*y+G*V,S=v*C+_*y+L*V,O=g*C+x*y+B*V};if(o===1)if(P)for(let T=0;T<d;++T){R(3*n[T]);const C=E*E+S*S+O*O;if(C<M&&C>F){const y=1/Math.sqrt(C);c[i]=E*y,c[i+1]=S*y,c[i+2]=O*y}else c[i]=E,c[i+1]=S,c[i+2]=O;i+=u}else for(let T=0;T<d;++T)R(3*n[T]),c[i]=E,c[i+1]=S,c[i+2]=O,i+=u;else for(let T=0;T<d;++T){if(R(3*n[T]),P){const C=E*E+S*S+O*O;if(C<M&&C>F){const y=1/Math.sqrt(C);E*=y,S*=y,O*=y}}for(let C=0;C<o;++C)c[i]=E,c[i+1]=S,c[i+2]=O,i+=u}}function Pl(e,t,r,i,o=1){if(!t)return void Bo(e,r,i,o);const{data:a,indices:n}=e,l=t,c=r.typedBuffer,u=r.typedBufferStride,d=n.length,h=l[0],v=l[1],g=l[2],p=l[4],_=l[5],x=l[6],G=l[8],L=l[9],B=l[10],P=!Si(l),F=1e-6,M=1-F;if(i*=u,o===1)for(let E=0;E<d;++E){const S=4*n[E],O=a[S],R=a[S+1],T=a[S+2],C=a[S+3];let y=h*O+p*R+G*T,V=v*O+_*R+L*T,W=g*O+x*R+B*T;if(P){const q=y*y+V*V+W*W;if(q<M&&q>F){const te=1/Math.sqrt(q);y*=te,V*=te,W*=te}}c[i]=y,c[i+1]=V,c[i+2]=W,c[i+3]=C,i+=u}else for(let E=0;E<d;++E){const S=4*n[E],O=a[S],R=a[S+1],T=a[S+2],C=a[S+3];let y=h*O+p*R+G*T,V=v*O+_*R+L*T,W=g*O+x*R+B*T;if(P){const q=y*y+V*V+W*W;if(q<M&&q>F){const te=1/Math.sqrt(q);y*=te,V*=te,W*=te}}for(let q=0;q<o;++q)c[i]=y,c[i+1]=V,c[i+2]=W,c[i+3]=C,i+=u}}function Dl(e,t,r,i,o=1){const{data:a,indices:n}=e,l=r.typedBuffer,c=r.typedBufferStride,u=n.length;if(i*=c,t!==a.length||t!==4)if(o!==1)if(t!==4)for(let d=0;d<u;++d){const h=3*n[d];for(let v=0;v<o;++v)l[i]=a[h],l[i+1]=a[h+1],l[i+2]=a[h+2],l[i+3]=255,i+=c}else for(let d=0;d<u;++d){const h=4*n[d];for(let v=0;v<o;++v)l[i]=a[h],l[i+1]=a[h+1],l[i+2]=a[h+2],l[i+3]=a[h+3],i+=c}else{if(t===4){for(let d=0;d<u;++d){const h=4*n[d];l[i]=a[h],l[i+1]=a[h+1],l[i+2]=a[h+2],l[i+3]=a[h+3],i+=c}return}for(let d=0;d<u;++d){const h=3*n[d];l[i]=a[h],l[i+1]=a[h+1],l[i+2]=a[h+2],l[i+3]=255,i+=c}}else{l[i]=a[0],l[i+1]=a[1],l[i+2]=a[2],l[i+3]=a[3];const d=new Uint32Array(r.typedBuffer.buffer,r.start),h=c/4,v=d[i/=4];i+=h;const g=u*o;for(let p=1;p<g;++p)d[i]=v,i+=h}}function Fl(e,t,r){const{data:i,indices:o}=e,a=t.typedBuffer,n=t.typedBufferStride,l=o.length,c=i[0];r*=n;for(let u=0;u<l;++u)a[r]=c,r+=n}function zl(e,t,r,i,o=1){const a=t.typedBuffer,n=t.typedBufferStride;if(i*=n,o===1)for(let l=0;l<r;++l)a[i]=e[0],a[i+1]=e[1],a[i+2]=e[2],a[i+3]=e[3],i+=n;else for(let l=0;l<r;++l)for(let c=0;c<o;++c)a[i]=e[0],a[i+1]=e[1],a[i+2]=e[2],a[i+3]=e[3],i+=n}function Bl(e,t,r,i,o,a,n){var l;for(const c of r.fields.keys()){const u=e.get(c),d=u==null?void 0:u.indices;if(u&&d)Gl(c,u,i,o,a,n);else if(c===f.OBJECTANDLAYERIDCOLOR&&t!=null){const h=(l=e.get(f.POSITION))==null?void 0:l.indices;if(h){const v=h.length;zl(t,a.getField(c,Ii),v,n)}}}}function Gl(e,t,r,i,o,a){switch(e){case f.POSITION:{U(t.size===3);const n=o.getField(e,qr);U(!!n,`No buffer view for ${e}`),n&&Nl(t,r,n,a);break}case f.NORMAL:{U(t.size===3);const n=o.getField(e,qr);U(!!n,`No buffer view for ${e}`),n&&Ll(t,i,n,a);break}case f.NORMALCOMPRESSED:{U(t.size===2);const n=o.getField(e,Aa);U(!!n,`No buffer view for ${e}`),n&&mi(t,n,a);break}case f.UV0:{U(t.size===2);const n=o.getField(e,Sa);U(!!n,`No buffer view for ${e}`),n&&mi(t,n,a);break}case f.COLOR:case f.SYMBOLCOLOR:{const n=o.getField(e,Ii);U(!!n,`No buffer view for ${e}`),U(t.size===3||t.size===4),!n||t.size!==3&&t.size!==4||Dl(t,t.size,n,a);break}case f.COLORFEATUREATTRIBUTE:{const n=o.getField(e,Ea);U(!!n,`No buffer view for ${e}`),U(t.size===1),n&&t.size===1&&Fl(t,n,a);break}case f.TANGENT:{U(t.size===4);const n=o.getField(e,jr);U(!!n,`No buffer view for ${e}`),n&&Pl(t,r,n,a);break}case f.PROFILERIGHT:case f.PROFILEUP:case f.PROFILEVERTEXANDNORMAL:case f.FEATUREVALUE:{U(t.size===4);const n=o.getField(e,jr);U(!!n,`No buffer view for ${e}`),n&&Bo(t,n,a)}}}class Vl{constructor(t){this.vertexBufferLayout=t}elementCount(t){return t.get(f.POSITION).indices.length}write(t,r,i,o,a,n){Bl(i,o,this.vertexBufferLayout,t,r,a,n)}}class Hl{constructor(t){this._bits=[...t]}equals(t){return _i(this._bits,t.bits)}get code(){return this._code??(this._code=String.fromCharCode(...this._bits)),this._code}get bits(){return this._bits}}let Ul=class extends at{constructor(){var t;super(),this._parameterBits=((t=this._parameterBits)==null?void 0:t.map(()=>0))??[],this._parameterNames??(this._parameterNames=[])}get key(){return this._key??(this._key=new Hl(this._parameterBits)),this._key}decode(t=this.key){const r=this._parameterBits;this._parameterBits=[...t.bits];const i=this._parameterNames.map(o=>`    ${o}: ${this[o]}`).join(`
`);return this._parameterBits=r,i}};function b(e={}){return(t,r)=>{var u,d;t.hasOwnProperty("_parameterNames")||Object.defineProperty(t,"_parameterNames",{value:((u=t._parameterNames)==null?void 0:u.slice())??[],configurable:!0,writable:!0}),t.hasOwnProperty("_parameterBits")||Object.defineProperty(t,"_parameterBits",{value:((d=t._parameterBits)==null?void 0:d.slice())??[0],configurable:!0,writable:!0}),t._parameterNames.push(r);const i=e.count||2,o=Math.ceil(Math.log2(i)),a=t._parameterBits;let n=0;for(;a[n]+o>16;)n++,n>=a.length&&a.push(0);const l=a[n],c=(1<<o)-1<<l;a[n]+=o,e.count?Object.defineProperty(t,r,{get(){return(this._parameterBits[n]&c)>>l},set(h){if(this[r]!==h){if(this._key=null,this._parameterBits[n]=this._parameterBits[n]&~c|+h<<l&c,typeof h!="number")throw new Se(`Configuration value for ${r} must be a number, got ${typeof h}`);if(e.count==null)throw new Se(`Configuration value for ${r} must provide a count option`)}}}):Object.defineProperty(t,r,{get(){return!!((this._parameterBits[n]&c)>>l)},set(h){if(this[r]!==h&&(this._key=null,this._parameterBits[n]=this._parameterBits[n]&~c|+h<<l&c,typeof h!="boolean"))throw new Se(`Configuration value for ${r} must be boolean, got ${typeof h}`)}})}}let gr=class extends Ul{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};m([b()],gr.prototype,"instancedDoublePrecision",void 0),m([b()],gr.prototype,"hasModelTransformation",void 0);let _r=class extends gr{constructor(){super(...arguments),this.output=D.Color,this.oitPass=Y.NONE,this.hasSliceHighlight=!0,this.hasSliceInVertexProgram=!1,this.bindType=$.Pass,this.writeDepth=!0}};m([b({count:D.COUNT})],_r.prototype,"output",void 0),m([b({count:Y.COUNT})],_r.prototype,"oitPass",void 0);class w extends _r{constructor(t,r){super(),this.spherical=t,this.doublePrecisionRequiresObfuscation=r,this.alphaDiscardMode=Te.Opaque,this.doubleSidedMode=ie.None,this.pbrMode=N.Disabled,this.cullFace=ze.None,this.normalType=ee.Attribute,this.customDepthTest=Ht.Less,this.emissionSource=le.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===le.Texture||this.hasOcclusionTexture||this.hasNormalTexture?J.Default:J.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}m([b({count:Te.COUNT})],w.prototype,"alphaDiscardMode",void 0),m([b({count:ie.COUNT})],w.prototype,"doubleSidedMode",void 0),m([b({count:N.COUNT})],w.prototype,"pbrMode",void 0),m([b({count:ze.COUNT})],w.prototype,"cullFace",void 0),m([b({count:ee.COUNT})],w.prototype,"normalType",void 0),m([b({count:Ht.COUNT})],w.prototype,"customDepthTest",void 0),m([b({count:le.COUNT})],w.prototype,"emissionSource",void 0),m([b()],w.prototype,"hasVertexColors",void 0),m([b()],w.prototype,"hasSymbolColors",void 0),m([b()],w.prototype,"hasVerticalOffset",void 0),m([b()],w.prototype,"hasSlicePlane",void 0),m([b()],w.prototype,"hasSliceHighlight",void 0),m([b()],w.prototype,"hasColorTexture",void 0),m([b()],w.prototype,"hasMetallicRoughnessTexture",void 0),m([b()],w.prototype,"hasOcclusionTexture",void 0),m([b()],w.prototype,"hasNormalTexture",void 0),m([b()],w.prototype,"hasScreenSizePerspective",void 0),m([b()],w.prototype,"hasVertexTangents",void 0),m([b()],w.prototype,"hasOccludees",void 0),m([b()],w.prototype,"hasModelTransformation",void 0),m([b()],w.prototype,"offsetBackfaces",void 0),m([b()],w.prototype,"vvSize",void 0),m([b()],w.prototype,"vvColor",void 0),m([b()],w.prototype,"receiveShadows",void 0),m([b()],w.prototype,"receiveAmbientOcclusion",void 0),m([b()],w.prototype,"textureAlphaPremultiplied",void 0),m([b()],w.prototype,"instanced",void 0),m([b()],w.prototype,"instancedColor",void 0),m([b()],w.prototype,"writeDepth",void 0),m([b()],w.prototype,"transparent",void 0),m([b()],w.prototype,"enableOffset",void 0),m([b()],w.prototype,"terrainDepthTest",void 0),m([b()],w.prototype,"cullAboveTerrain",void 0),m([b()],w.prototype,"snowCover",void 0),m([b()],w.prototype,"hasColorTextureTransform",void 0),m([b()],w.prototype,"hasEmissionTextureTransform",void 0),m([b()],w.prototype,"hasNormalTextureTransform",void 0),m([b()],w.prototype,"hasOcclusionTextureTransform",void 0),m([b()],w.prototype,"hasMetallicRoughnessTextureTransform",void 0);function Go(e){const t=new Xt,{vertex:r,fragment:i,varyings:o}=t,{output:a,offsetBackfaces:n,instancedColor:l,pbrMode:c,snowCover:u,spherical:d}=e,h=c===N.Normal||c===N.Schematic;if(Ze(r,e),t.include(Ar),o.add("vpos","vec3"),t.include(mt,e),t.include(ao,e),t.include(co,e),a===D.Color&&(Et(t.vertex,e),t.include(Ut,e),t.include(Xe,e),n&&t.include(eo),l&&t.attributes.add(f.INSTANCECOLOR,"vec4"),o.add("vNormalWorld","vec3"),o.add("localvpos","vec3"),e.terrainDepthTest&&o.add("depth","float"),t.include(De,e),t.include(Qi,e),t.include(no,e),t.include(so,e),r.uniforms.add(new re("externalColor",v=>v.externalColor)),o.add("vcolorExt","vec4"),r.main.add(s`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${I(l,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${s.float(Ee)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${I(n,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${I(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),a===D.Color){const{hasColorTexture:v,hasColorTextureTransform:g,receiveShadows:p}=e;t.include(To,e),t.include(Or,e),t.include(Ke,e),t.include(e.instancedDoublePrecision?bo:Eo,e),t.include(Ao,e),t.include(Ye,e),t.include(Mo,e),Et(t.fragment,e),Ft(i),Ir(i),$r(i),i.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new k("ambient",_=>_.ambient),new k("diffuse",_=>_.diffuse),new oe("opacity",_=>_.opacity),new oe("layerOpacity",_=>_.layerOpacity)),v&&i.uniforms.add(new Z("tex",_=>_.texture)),t.include(_o,e),t.include(Rr,e),i.include(wo),St(i),i.main.add(s`
      discardBySlice(vpos);
      ${I(e.terrainDepthTest,"terrainDepthTest(depth);")}
      vec4 texColor = ${v?`texture(tex, ${g?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${I(v,`${I(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${p?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":d?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?s`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${I(u,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${s`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${I(h,`vec3 normalGround = ${d?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${h?s`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${I(u,s`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${u?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return t.include(mo,e),t}const Wl=Object.freeze(Object.defineProperty({__proto__:null,build:Go},Symbol.toStringTag,{value:"Module"}));class jl extends Oo{constructor(t,r,i){super(t,r,i,new jt(Wl,()=>At(()=>Promise.resolve().then(()=>oc),void 0))),this.type="RealisticTreeTechnique"}}class Zd extends _n{constructor(t,r){super(t,kl),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[ht.OPAQUE_MATERIAL,i=>(Ur(i)||Qt(i))&&!this.parameters.transparent],[ht.TRANSPARENT_MATERIAL,i=>(Ur(i)||Qt(i))&&this.parameters.transparent&&this.parameters.writeDepth],[ht.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,i=>(Ta(i)||Qt(i))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=Xl(this.parameters),this._configuration=new w(r.spherical,r.doublePrecisionRequiresObfuscation)}isVisibleForOutput(t){return t!==D.Shadow&&t!==D.ShadowExcludeHighlight&&t!==D.ShadowHighlight||this.parameters.castShadows}get visible(){const t=this.parameters;if(t.layerOpacity<Ee)return!1;const{hasInstancedColor:r,hasVertexColors:i,hasSymbolColors:o,vvColor:a}=t,n=r||a||o,l=t.colorMixMode==="replace",c=t.opacity>=Ee;if(i&&n)return l||c;const u=t.externalColor&&t.externalColor[3]>=Ee;return i?l?u:c:n?l||c:l?u:c}get hasEmissions(){return!!this.parameters.emissiveTextureId||!Mi(this.parameters.emissiveFactor,ot)}getConfiguration(t,r){const i=this.parameters,{treeRendering:o,doubleSided:a,doubleSidedType:n}=i;return this._configuration.output=t,this._configuration.hasNormalTexture=!o&&!!i.normalTextureId,this._configuration.hasColorTexture=!!i.textureId,this._configuration.hasVertexTangents=!o&&i.hasVertexTangents,this._configuration.instanced=i.isInstanced,this._configuration.instancedDoublePrecision=i.instancedDoublePrecision,this._configuration.vvSize=!!i.vvSize,this._configuration.hasVerticalOffset=i.verticalOffset!=null,this._configuration.hasScreenSizePerspective=i.screenSizePerspective!=null,this._configuration.hasSlicePlane=i.hasSlicePlane,this._configuration.hasSliceHighlight=i.hasSliceHighlight,this._configuration.alphaDiscardMode=i.textureAlphaMode,this._configuration.normalType=o?ee.Attribute:i.normalType,this._configuration.transparent=i.transparent,this._configuration.writeDepth=i.writeDepth,i.customDepthTest!=null&&(this._configuration.customDepthTest=i.customDepthTest),this._configuration.hasOccludees=r.hasOccludees,this._configuration.cullFace=i.hasSlicePlane?ze.None:i.cullFace,this._configuration.terrainDepthTest=r.terrainDepthTest,this._configuration.cullAboveTerrain=r.cullAboveTerrain,this._configuration.hasModelTransformation=!o&&i.modelTransformation!=null,this._configuration.hasVertexColors=i.hasVertexColors,this._configuration.hasSymbolColors=i.hasSymbolColors,this._configuration.doubleSidedMode=o?ie.WindingOrder:a&&n==="normal"?ie.View:a&&n==="winding-order"?ie.WindingOrder:ie.None,this._configuration.instancedColor=i.hasInstancedColor,this._configuration.receiveShadows=i.receiveShadows&&i.receiveShadows,this._configuration.receiveAmbientOcclusion=i.receiveAmbientOcclusion&&r.ssao!=null,this._configuration.vvColor=!!i.vvColor,this._configuration.textureAlphaPremultiplied=!!i.textureAlphaPremultiplied,this._configuration.pbrMode=i.usePBR?i.isSchematic?N.Schematic:N.Normal:N.Disabled,this._configuration.hasMetallicRoughnessTexture=!o&&!!i.metallicRoughnessTextureId,this._configuration.emissionSource=o?le.None:i.emissiveTextureId!=null?le.Texture:i.usePBR?le.Value:le.None,this._configuration.hasOcclusionTexture=!o&&!!i.occlusionTextureId,this._configuration.offsetBackfaces=!(!i.transparent||!i.offsetTransparentBackfaces),this._configuration.oitPass=r.oitPass,this._configuration.enableOffset=r.camera.relativeElevation<bn,this._configuration.snowCover=Yl(r),this._configuration.hasColorTextureTransform=!!i.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!i.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!i.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!i.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!i.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(t,r,i,o,a,n){if(this.parameters.verticalOffset!=null){const l=i.camera;X(or,r[12],r[13],r[14]);let c=null;switch(i.viewingMode){case dr.Global:c=Er(fi,or);break;case dr.Local:c=Nt(fi,Jl)}let u=0;const d=Fe(Ql,or,l.eye),h=xe(d),v=Vr(d,d,1/h);let g=null;this.parameters.screenSizePerspective&&(g=fa(c,v)),u+=Va(l,h,this.parameters.verticalOffset,g??0,this.parameters.screenSizePerspective),Vr(c,c,u),pa(ir,c,i.transform.inverseRotation),o=Fe(Zl,o,ir),a=Fe(Kl,a,ir)}gl(t,i,o,a,Da(i.verticalOffset),n)}createGLMaterial(t){return new ql(t)}createBufferWriter(){return new Vl(this._vertexBufferLayout)}}class ql extends Es{constructor(t){super({...t,...t.material.parameters})}beginSlot(t){this._material.setParameters({receiveShadows:t.shadowMap.enabled});const r=this._material.parameters;this.updateTexture(r.textureId);const i=t.camera.viewInverseTransposeMatrix;return X(r.origin,i[3],i[7],i[11]),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(r.treeRendering?jl:Oo,t)}}class kl extends Bs{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}function Yl(e){return e.weather!=null&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}function Xl(e){const t=xa().vec3f(f.POSITION);return e.normalType===ee.Compressed?t.vec2i16(f.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(f.NORMAL),e.hasVertexTangents&&t.vec4f(f.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(f.UV0),e.hasVertexColors&&t.vec4u8(f.COLOR),e.hasSymbolColors&&t.vec4u8(f.SYMBOLCOLOR),ya()&&t.vec4u8(f.OBJECTANDLAYERIDCOLOR),t}const Zl=A(),Kl=A(),Jl=Pt(0,0,1),fi=A(),ir=A(),or=A(),Ql=A();let Kd=class Vo{constructor(t,r,i){this.primitiveIndices=t,this._numIndexPerPrimitive=r,this.position=i,this._children=void 0,U(t.length>=1),U(i.size===3||i.size===4);const{data:o,size:a,indices:n}=i;U(n.length%this._numIndexPerPrimitive==0),U(n.length>=t.length*this._numIndexPerPrimitive);const l=t.length;let c=a*n[this._numIndexPerPrimitive*t[0]];Ne.clear(),Ne.push(c);const u=Pt(o[c],o[c+1],o[c+2]),d=$t(u);for(let g=0;g<l;++g){const p=this._numIndexPerPrimitive*t[g];for(let _=0;_<this._numIndexPerPrimitive;++_){c=a*n[p+_],Ne.push(c);let x=o[c];u[0]=Math.min(x,u[0]),d[0]=Math.max(x,d[0]),x=o[c+1],u[1]=Math.min(x,u[1]),d[1]=Math.max(x,d[1]),x=o[c+2],u[2]=Math.min(x,u[2]),d[2]=Math.max(x,d[2])}}this.bbMin=u,this.bbMax=d;const h=Hr(A(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(d[0]-u[0],d[1]-u[1]),d[2]-u[2]);let v=this.radius*this.radius;for(let g=0;g<Ne.length;++g){c=Ne.at(g);const p=o[c]-h[0],_=o[c+1]-h[1],x=o[c+2]-h[2],G=p*p+_*_+x*x;if(G<=v)continue;const L=Math.sqrt(G),B=.5*(L-this.radius);this.radius=this.radius+B,v=this.radius*this.radius;const P=B/L;h[0]+=p*P,h[1]+=_*P,h[2]+=x*P}this.center=h,Ne.clear()}getChildren(){if(this._children||va(this.bbMin,this.bbMax)<=1)return this._children;const t=Hr(A(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),o=new Array(8);for(let d=0;d<8;++d)o[d]=0;const{data:a,size:n,indices:l}=this.position;for(let d=0;d<r;++d){let h=0;const v=this._numIndexPerPrimitive*this.primitiveIndices[d];let g=n*l[v],p=a[g],_=a[g+1],x=a[g+2];for(let G=1;G<this._numIndexPerPrimitive;++G){g=n*l[v+G];const L=a[g],B=a[g+1],P=a[g+2];L<p&&(p=L),B<_&&(_=B),P<x&&(x=P)}p<t[0]&&(h|=1),_<t[1]&&(h|=2),x<t[2]&&(h|=4),i[d]=h,++o[h]}let c=0;for(let d=0;d<8;++d)o[d]>0&&++c;if(c<2)return;const u=new Array(8);for(let d=0;d<8;++d)u[d]=o[d]>0?new Uint32Array(o[d]):void 0;for(let d=0;d<8;++d)o[d]=0;for(let d=0;d<r;++d){const h=i[d];u[h][o[h]++]=this.primitiveIndices[d]}this._children=new Array;for(let d=0;d<8;++d)u[d]!==void 0&&this._children.push(new Vo(u[d],this._numIndexPerPrimitive,this.position));return this._children}static prune(){Ne.prune()}};const Ne=new xi({deallocator:null});function Jd(e){if(e.length<vi)return Array.from(e);if(aa(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return na(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}function ec(e){return e?{p0:$t(e.p0),p1:$t(e.p1),p2:$t(e.p2)}:{p0:A(),p1:A(),p2:A()}}function Qd(e,t,r){return Fe(ar,t,e),Fe(pi,r,e),.5*xe(br(ar,ar,pi))}new Ri(Ca);new Ri(()=>ec());const ar=A(),pi=A(),tc=Object.freeze(Object.defineProperty({__proto__:null,build:vo},Symbol.toStringTag,{value:"Module"})),rc=Object.freeze(Object.defineProperty({__proto__:null,build:go,getRadius:Zt},Symbol.toStringTag,{value:"Module"})),ic=Object.freeze(Object.defineProperty({__proto__:null,build:yo},Symbol.toStringTag,{value:"Module"})),oc=Object.freeze(Object.defineProperty({__proto__:null,build:Go},Symbol.toStringTag,{value:"Module"}));export{J as $,ht as A,Zd as B,Ud as C,Ao as D,Z as E,Xt as F,mt as G,Vn as H,Co as I,it as J,ld as K,ho as L,Y as M,Gd as N,Pi as O,Ye as P,Cr as Q,jt as R,Qd as S,Za as T,Yt as U,ja as V,ed as W,Cn as X,kt as Y,b as Z,_r as _,Kd as a,le as a0,_n as a1,Bi as a2,kc as a3,qc as a4,Va as a5,fd as a6,Es as a7,As as a8,ur as a9,ya as aa,Nl as ab,Ll as ac,Dl as ad,jd as ae,Bo as af,qd as ag,zl as ah,Vc as b,On as c,rd as d,bt as e,wc as f,K as g,Na as h,Yc as i,Dc as j,Ha as k,Dn as l,Ze as m,td as n,Jd as o,Et as p,re as q,Di as r,id as s,Hs as t,oe as u,Gn as v,Pn as w,nd as x,Fn as y,ys as z};
