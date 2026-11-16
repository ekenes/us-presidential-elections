import{cV as st,Au as Bt,Aw as Ut,zx as Rt,eI as he,eH as M,ng as X,g8 as ie,da as Ht,eF as J,ai as j,jn as nt,j9 as He,fy as ze,l8 as It,gu as kt,j7 as qt,fx as Ie,eU as Gt,cy as Lt,cz as Wt,hN as ke,dU as Nt,U as Kt,r_ as Qt,$ as k,ak as Yt,a0 as le,a2 as $e,eW as Jt,d3 as Xt,iW as lt,j0 as Zt,bf as ei,kq as ti,ju as ct,AH as ii,kQ as ye,yV as oi,hc as Te,cg as ri,_ as ut,e9 as ai,zb as qe,lI as si,pe as ni,r4 as li,kV as ci,fg as Ge,br as ui,bq as T,eG as H,bn as ht,bo as N,eD as L}from"./index-DvjtuTaf.js";import{m as hi}from"./mathUtils-Ps-cVnWe.js";import{j as di}from"./sphere-DzQ0cdPg.js";import{aP as fi,aQ as pi,d as R,t as U,aM as gi,i as dt,s as mi,e as vi,w as ft,j as Le,aR as bi,ak as xi,k as pt,au as gt,aK as wi,aC as mt,B as vt,C as bt,aH as yi,aI as fe,as as _i,u as $i,aj as Si,x as Ci,y as Ai,q as Pe,l as je,b as Oi,z as zi,h as Pi,aL as We,aF as ji,r as Vi,al as Di,J as Fi,av as Mi,aS as Ne}from"./OutputColorHighlightOLID.glsl-DsS1HXgD.js";import{a as xt,K as wt,n as Ke}from"./InterleavedLayout-CbvJ1j4x.js";import{e as Ti,i as yt}from"./doublePrecisionUtils-BcQHQHvx.js";import{p as Ei}from"./Octree-BQ5gLWY7.js";import{t as Qe,n as V,e as I}from"./vec3f32-CQbcKdo7.js";import{g as Ee,d as Bi}from"./Indices-ChaUJnI7.js";import{v as Ui,C as Ri,N as Hi}from"./plane-BhcRpazt.js";import{b as Ii}from"./ray-De-DJtwD.js";import{t as w}from"./orientedBoundingBox-B1TCj3F8.js";import{A as ki,i as _t,e as C,g as ce,h as ue,d as B,u as Ye,s as qi}from"./getEmissions.glsl-SBFf_fPr.js";import{T as $t,o as Gi,g as St,h as Li}from"./RenderingContext-BrMx68Vl.js";import{t as Wi}from"./NoParameters-Bo6yVN0t.js";function Ni(i){return Ki.has(i)}const Ki=new Set("position.normal.normalCompressed.uv0.size.rotation.offset.perspectiveDivide.centerOffset.groundDistance.previousDelta.lineParameters.sizeFeatureAttribute.profileRight.profileUp.pathVertexInfo.profileRotation.pathRotationUp.pathMaxStretchDistance.featureAttribute.position.size.sizeFeatureAttribute.profileRight.profileUp.profileRotation.pathRotationUp.pathMaxStretchDistance".split("."));let Je=class{constructor(){this.box=st(),this.sphere=new di}};function Qi(i,e,t){let o=Bt(e,Ji),r=Ut(e,Xi);if(Rt(t)){let a=he(Yi,t[12],t[13],t[14]);M(q,o,a),M(G,r,a),X(i,q),X(i,G);return}if(ie(q,o,t),X(i,q),!Ht(o,r)){ie(G,r,t),X(i,G);for(let a=0;a<3;++a)J(q,o),J(G,r),q[a]=r[a],G[a]=o[a],ie(q,q,t),ie(G,G,t),X(i,q),X(i,G)}}const Yi=j(),q=j(),G=j(),Ji=j(),Xi=j();function Zi(i,e){return i??(i=[]),i.push(e),i}function eo(i,e){if(i==null)return null;let t=i.filter(o=>o!==e);return t.length===0?null:t}function gr(i,e,t,o,r){pe[0]=i.get(e,0),pe[1]=i.get(e,1),pe[2]=i.get(e,2),Ti(pe,Q,3),t.set(r,0,Q[0]),o.set(r,0,Q[1]),t.set(r,1,Q[2]),o.set(r,1,Q[3]),t.set(r,2,Q[4]),o.set(r,2,Q[5])}const pe=j(),Q=new Float32Array(6);let mr=class{constructor(e={}){this.id=nt(),this.type=0,this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerViewUid=e.layerViewUid,e.isElevationSource&&(this.lastValidElevationBB=st()),this._geometries=e.geometries?Array.from(e.geometries):[]}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(e){xt(this._layer==null||e==null,"Object3D can only be added to a single Layer"),this._layer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e);for(let t of this._highlightIds)e.addHighlight(t);this._emit("geometriesChanged",{object:this,removed:[],added:[e]}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}removeGeometry(e){let t=this._geometries.splice(e,1)[0];if(t){for(let o of this._highlightIds)t.removeHighlight(o);this._emit("geometriesChanged",{object:this,removed:[t],added:[]}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}replaceGeometries(e){let t=this._geometries,o=Array.from(e);for(let r of t)for(let a of this._highlightIds)r.removeHighlight(a);for(let r of o){r.visible=this._visible;for(let a of this._highlightIds)r.addHighlight(a)}this._geometries=o,this._invalidateBoundingVolume(),this._emit("geometriesChanged",{object:this,removed:t,added:o}),this._highlightIds.size&&this._emit("highlightChanged",this)}geometryVertexAttributeUpdated(e,t,o=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:t,sync:o}),Ni(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(let t of this._geometries)t.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){let e=new fi;for(let t of this._geometries)t.occludees=Zi(t.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(let t of this._geometries)t.occludees=eo(t.occludees,e);this._emit("occlusionChanged",this)}highlight(e){let t=new pi(e);for(let o of this._geometries)o.addHighlight(t);return this._emit("highlightChanged",this),this._highlightIds.add(t),t}removeHighlight(e){this._highlightIds.delete(e);for(let t of this._geometries)t.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===0?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return He(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e,t=ze()){return He(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=new Je,this._validateBoundingVolume(this._bvWorldSpace,0)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=new Je,this._validateBoundingVolume(this._bvObjectSpace,1)),this._bvObjectSpace}_validateBoundingVolume(e,t){let o=t===1;for(let r of this._geometries){let a=r.boundingInfo;a&&Qi(e.box,a.box,o?r.transformation:this.getCombinedShaderTransformation(r))}It(e.box,e.sphere.center);for(let r of this._geometries){let a=r.boundingInfo;if(a==null)continue;let s=o?r.transformation:this.getCombinedShaderTransformation(r),p=hi(s);ie(Xe,a.sphere.center,s);let h=kt(Xe,e.sphere.center),n=a.sphere.radius*p;e.sphere.radius=Math.max(e.sphere.radius,h+n)}}_invalidateBoundingVolume(){var t;let e=(t=this._bvWorldSpace)==null?void 0:t.sphere;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&e&&this.layer.notifyObjectBBChanged(this,e)}_emit(e,t){var o;(o=this.layer)==null||o.events.emit(e,t)}get geometries(){return this._geometries}get transformation(){return this._transformation??qt}set transformation(e){this._transformation=Ie(this._transformation??ze(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Ie(this._shaderTransformation??ze(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}};const Xe=j(),to=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometriesChanged","attributesChanged"];let br=class{constructor(e,t,o=""){this.stage=e,this.apiLayerViewUid=o,this.id=nt(),this.events=new Gt,this.visible=!0,this.sliceable=!1,this._objectsAdded=[],this._handles=new Lt,this._objects=new Map,this._pickable=!0,this.visible=(t==null?void 0:t.visible)??!0,this._pickable=(t==null?void 0:t.pickable)??!0,this.updatePolicy=(t==null?void 0:t.updatePolicy)??0,e.addLayer(this);for(let r of to)this._handles.add(this.events.on(r,a=>e.handleEvent(r,a)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(e){return Wt(this._objects.get(e))}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.set(e.id,e),e.layer=this,this.events.emit("layerObjectAdded",e),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.delete(e.id)&&(this.events.emit("layerObjectRemoved",e),e.layer=null,this._octree!=null&&(ke(this._objectsAdded,e)||this._octree.remove([e])))}addMany(e){for(let t of e)this._objects.set(t.id,t),t.layer=this;this.events.emit("layerObjectsAdded",e),this._octree!=null&&this._objectsAdded.push(...e)}removeMany(e){let t=[];for(let o of e)this._objects.delete(o.id)&&t.push(o);if(t.length!==0&&(this.events.emit("layerObjectsRemoved",t),t.forEach(o=>o.layer=null),this._octree!=null)){for(let o=0;o<t.length;)ke(this._objectsAdded,t[o])?(t[o]=t[t.length-1],--t.length):++o;this._octree.remove(t)}}commit(){this.stage.commitLayer(this)}sync(){this.updatePolicy!==1&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){this._octree!=null&&!this._objectsAdded.includes(e)&&this._octree.update(e,t)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.size>50?(this._octree=new Ei(e=>e.boundingVolumeWorldSpace.sphere),this._octree.add(this._objects.values())):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=Nt(this._octree),this._objectsAdded.length=0}get test(){}};var ne,K;let ge=(K=class extends Kt{constructor(e){super(e),this.type="foggy",this.fogStrength=.5}clone(){return new ne({fogStrength:this.fogStrength})}get scattering(){return Qt(ne.minScattering,ne.maxScattering,this.fogStrength**3)}},ne=K,K.minScattering=3e-5,K.maxScattering=.005,K);k([Yt({foggy:"foggy"}),le({json:{write:{isRequired:!0}}})],ge.prototype,"type",void 0),k([le({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],ge.prototype,"fogStrength",void 0),ge=ne=k([$e("esri.views.3d.environment.FoggyWeather")],ge);let Ct=class extends ki{constructor(){super(...arguments),this.hasFog=!1}};k([_t()],Ct.prototype,"hasFog",void 0);let At=class extends Ct{constructor(){super(...arguments),this.hasEmissive=!1}};k([_t()],At.prototype,"hasEmissive",void 0);function Ot(i,e,t){i.push(["olidColor",new w(e,t,4,!0)])}function io(i,e=!1){return i<=Jt?e?Array(i).fill(0):Array(i):new Float16Array(i)}function oo(i,e,t){let o=i.isGeographic&&e,{metersPerUnit:r}=i,a=0;return o?(r=1,a=Xt(t)):i.isGeographic?r=lt(i).metersPerDegree:i.isWebMercator&&(a=Zt(t)),r*Math.max(.2,Math.cos(a))}const F={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},ro={dash:F.dash,"dash-dot":[...F.dash,...F.dot],dot:F.dot,"long-dash":F["long-dash"],"long-dash-dot":[...F["long-dash"],...F.dot],"long-dash-dot-dot":[...F["long-dash"],...F.dot,...F.dot],none:null,"short-dash":F["short-dash"],"short-dash-dot":[...F["short-dash"],...F["short-dot"]],"short-dash-dot-dot":[...F["short-dash"],...F["short-dot"],...F["short-dot"]],"short-dot":F["short-dot"],solid:null};let ao=class{constructor(e,t,o){this.image=e,this.width=t,this.length=o,this.uuid=ei()}};function so(i){return i!=null&&"image"in i}function zt(i,e){return i==null?i:{pattern:i.slice(),pixelRatio:e}}function $r(i){return{pattern:[i,i],pixelRatio:2}}function Sr(i){switch(i==null?void 0:i.type){case"style":return no(i.style);case"template":return lo(i.normalizedDashTemplate);case"image":return new ao(i.image,i.width,i.length);case void 0:case null:return null}return null}function no(i){return i==null?null:zt(ro[i],8)}function lo({dashTemplate:i,hidesLine:e}){return zt(e||i.length===0?null:i,8)}function Cr(i){switch(i==null?void 0:i.type){case"style":return i.style==="none";case"template":return i.normalizedDashTemplate.hidesLine;case"image":case void 0:case null:return!1}return!1}function Ar(i,e,t=null){let o=[],r=e.mapPositions,a=co(e,o),s=a.data,p=a.indices.length,h=Ee(p);return uo(e,o,h),po(e,o,h),ho(e,o,h),fo(e,o,a.indices,h),go(e,o,a.indices,h),mo(e,o),vo(e,o,a.indices,h),bo(i,e,o,s),t!=null&&Ot(o,t,h),new R(i,o,r)}function co(i,e){let{attributeData:{position:t},removeDuplicateStartEnd:o}=i,r=t.length/3,a=r>2&&xo(t)&&o,s=r-+!!a,p=Array(2*(s-1)),h=a?t.slice(0,-3):t,n=0;for(let v=0;v<s-1;v++)p[n++]=v,p[n++]=v+1;let l=new w(h,p,3,a);return e.push(["position",l]),l}function uo(i,e,t){if(i.attributeData.colorFeature!=null)return;let o=i.attributeData.color;e.push(["color",new w(o??ti,t,4)])}function ho(i,e,t){i.attributeData.normal&&e.push(["normal",new w(i.attributeData.normal,t,3)])}function fo(i,e,t,o){let r=i.attributeData.colorFeature;r!=null&&(typeof r=="number"?e.push(["colorFeatureAttribute",new w([r],o,1,!0)]):e.push(["colorFeatureAttribute",new w(r,t,1,!0)]))}function po(i,e,t){i.attributeData.sizeFeature??e.push(["size",new w([i.attributeData.size??1],t,1,!0)])}function go(i,e,t,o){let r=i.attributeData.sizeFeature;r!=null&&(typeof r=="number"?e.push(["sizeFeatureAttribute",new w([r],o,1,!0)]):e.push(["sizeFeatureAttribute",new w(r,t,1,!0)]))}function mo(i,e){let{attributeData:{position:t,timeStamps:o}}=i;if(!o)return;let r=t.length/3,a=Array(2*(r-1)),s=0;for(let p=0;p<r-1;p++)a[s++]=p,a[s++]=p+1;e.push(["timeStamps",new w(o,a,Pt,!0)])}function vo(i,e,t,o){let r=i.attributeData.opacityFeature;r!=null&&(typeof r=="number"?e.push(["opacityFeatureAttribute",new w([r],o,1,!0)]):e.push(["opacityFeatureAttribute",new w(r,t,1,!0)]))}function bo(i,{overlayInfo:e},t,o){let r=i.parameters;if(e==null||!wo(r)||r.stipplePattern==null)return;let{renderCoordsHelper:a,spatialReference:s}=e,p=s.isGeographic&&a.viewingMode===1,h=r.worldSized||so(r.stipplePattern);if(!h&&!p)return;let n=o;if(p){let f=ct(o.length),c=lt(s);for(let A=0;A<f.length;A+=3)ii(o,A,f,A,c);n=f}let l=o.length/3,v=U(l+1),S=a.viewingMode===1,x=yo,b=_o,g=0,d=0,m=0;ye(x,n[d++],n[d++]),d++,v[0]=0;for(let f=1;f<l+1;++f){f===l&&(d=0);let c=d;ye(b,n[d++],n[d++]),d++;let A=(o[m+1]+o[c+1])/2,u=h?oo(s,S,A):1;g+=oi(x,b)*u,v[f]=g,[x,b]=[b,x],m=c}t.push(["distanceToStart",new w(v,t[0][1].indices,1,!0)])}function xo(i){let e=i.length;return i[0]===i[e-3]&&i[1]===i[e-2]&&i[2]===i[e-1]}function wo(i){return"stipplePattern"in i}const yo=Te(),_o=Te(),Pt=4;function $o(i,e){let t=io(i.length*4),o=i[0],r=i[i.length-1];for(let a=0;a<i.length;a++)t[a*4]=i[a],t[a*4+1]=o,t[a*4+2]=r,t[a*4+3]=e+.5;return t}function Ze(i,e){let t=i[e],o=i[e+1],r=i[e+2];return Math.sqrt(t*t+o*o+r*r)}function So(i,e){let t=i[e],o=i[e+1],r=i[e+2],a=1/Math.sqrt(t*t+o*o+r*r);i[e]*=a,i[e+1]*=a,i[e+2]*=a}function et(i,e,t){i[e]*=t,i[e+1]*=t,i[e+2]*=t}function Co(i,e,t,o,r,a=e){r||(r=i),r[a]=i[e]+t[o],r[a+1]=i[e+1]+t[o+1],r[a+2]=i[e+2]+t[o+2]}function Ao(i){i.uniforms.add(new gi("alignPixelEnabled",e=>e.alignPixelEnabled)),i.code.add(C`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),i.code.add(C`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}const Oo=.5;function zo(i,e){let t=i.vertex;i.include(dt),i.attributes.add("position","vec3"),i.vertex.inputs.add("position",()=>"position"),i.attributes.add("normal","vec3"),e.hasVertexCenterOffset?i.attributes.add("centerOffset","vec3"):t.constants.add("centerOffset","vec3",[0,0,0]),i.attributes.add("groundDistance","float"),mi(t,e),vi(t,e),t.uniforms.add(ft,new ce("polygonOffset",o=>o.shaderPolygonOffset),new Le("aboveGround",o=>o.camera.aboveGround?1:-1)),e.hasVerticalOffset&&bi(t),t.code.add(C`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),t.code.add(C`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = aboveGround;
}
float groundRelative = aboveGround * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),(!e.draped||e.hasVerticalOffset)&&t.uniforms.add(xi),e.draped||(t.uniforms.add(new Le("hudPixelSizePerDistance",o=>Math.tan(o.camera.fovY/2)/(o.camera.fullViewport[2]/2))),t.code.add(C`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * hudPixelSizePerDistance * ${C.float(Oo)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),e.screenCenterOffsetUnitsEnabled&&pt(t),e.hasScreenSizePerspective&&gt(t),t.code.add(C`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      float pointGroundDistance = groundDistance;
      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?C`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":C`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}const Po=C`vec4(0.0, 0.0, 2.0, 1.0)`;let Be=class extends Wi{constructor(){super(...arguments),this.effect=0,this.fadeFactor=ri(1)}};function jt(i){let e=new yt;return e.include(wi),e.outputs.add("fragColor","vec4",0),e.fragment.uniforms.add(new ue("colorTexture",t=>t.color),new ue("emissionTexture",t=>t.emission),new ue("focusArea",t=>t.focusArea),new mt("focusAreaEffectMode",t=>t.effect),new ce("fadeFactor",t=>t.fadeFactor.value)).constants.add("EffectBright","int",0).code.add("float getLuminance(in vec4 color) { return color.r * 0.25 + color.g * 0.5 + color.b * 0.25; }").main.add(`
      float mask = texture(focusArea, uv).r;
      
      if (focusAreaEffectMode == EffectBright) {
        vec4 color = texture(colorTexture, uv);
        float luminance = getLuminance(color);
        fragColor = mask > 0.0 ? color : mix(color, vec4(0.55 * luminance + 0.45), fadeFactor);
      } else {
        if(mask > 0.0) discard;
        fragColor = vec4(vec3(0.0), fadeFactor * 0.67);
      }
  `),i.hasEmissive&&(e.outputs.add("fragEmission","vec4",1),e.fragment.main.add(C`if (focusAreaEffectMode == EffectBright) {
vec4 color = texture(emissionTexture, uv);
float luminance = getLuminance(color);
fragEmission = mask > 0.0 ? color : mix(color, vec4(0.67 * luminance), fadeFactor);
} else
fragEmission = vec4(vec3(0.0), fadeFactor * 0.9);`)),e}const jo=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaPassParameters:Be,build:jt},Symbol.toStringTag,{value:"Module"}));let _e=class extends vt{constructor(){super(...arguments),this.shader=new bt(jo,()=>ut(()=>Promise.resolve().then(()=>Jo),void 0)),this.ignoreUnused=!0}initializePipeline(){return $t({colorWrite:St,blending:Gi})}};_e=k([$e("esri.views.3d.webgl-engine.effects.focusArea.FocusAreaTechnique")],_e);let se=class extends yi{constructor(i){super({...i,view:i.focusAreasView.view}),this.consumes={required:[fe.FOCUSAREA,fe.FOCUSAREA_MASK]},this.produces=fe.FOCUSAREA,this._fadeDirection=0,this._configuration=new At,this._passParameters=new Be}fadeOut(i){this.removeAllHandles(),this._startTime=null,this._fadeDirection=1,this.addHandles(ai(()=>this._passParameters.fadeFactor.value,e=>{e===0&&(this.removeAllHandles(),i())})),this.requestRender(2)}precompile(){this._configuration.hasEmissive=this.bindParameters.emissions!==0,this.techniques.precompile(_e,this._configuration)}render(i){var x,b,g;let e=this.bindParameters;this._startTime??(this._startTime=(x=this.view.stage)==null?void 0:x.renderer.renderContext.time);let t=this.view.qualitySettings.fadeDuration,o=t>0?Math.min(t,((b=this.view.stage)==null?void 0:b.renderer.renderContext.time)-this._startTime)/t:1,r=this.renderingContext,a=this.techniques.get(_e,this._configuration),s=this.input,p=i.find(({name:d})=>d===fe.FOCUSAREA_MASK),h=this.focusAreasView.style==="bright";this._passParameters.color=this._passParameters.emission=r.emptyTexture,this._passParameters.focusArea=p.getTexture(),this._passParameters.effect=Vt[this.focusAreasView.style],this._passParameters.fadeFactor.value=this._fadeDirection===0?o:1-o;let n=e.camera,l=n.fullViewport[2],v=n.fullViewport[3],S=h?this.fboCache.acquire(l,v,this.produces):s;if(h){if(this._passParameters.color=s.getTexture(),this._configuration.hasEmissive){this._passParameters.emission=s.getTexture(qe);let d=((g=this._passParameters.emission)==null?void 0:g.descriptor.internalFormat)===si.RGBA16F?8:5;S.acquireColor(qe,d,"emissive")}S.moveAttachments(s),r.bindFramebuffer(S.fbo),r.setClearColor(0,0,0,0),r.clear(16384)}else r.bindFramebuffer(S.fbo);return r.bindTechnique(a,e,this._passParameters),r.screen.draw(),o<1&&this.requestRender(2),S}};k([le()],se.prototype,"consumes",void 0),k([le()],se.prototype,"produces",void 0),k([le({constructOnly:!0})],se.prototype,"focusAreasView",void 0),se=k([$e("esri.views.3d.webgl-engine.effects.focusArea.FocusArea")],se);const Vt={bright:0,dark:1},Vo=i=>i?Vt[i]:0;function Dt(i){let e=new yt;e.include(zo,i),e.vertex.include(_i,i);let{output:t,hasOcclusionTexture:o,signedDistanceFieldEnabled:r,pixelSnappingEnabled:a,hasEmission:s,hasScreenSizePerspective:p,debugDrawLabelBorder:h,hasVVSize:n,hasVVColor:l,hasRotation:v,occludedFragmentFade:S,sampleSignedDistanceFieldTexelCenter:x,hasVertexColor:b,hasVertexSize:g,hasVertexRotation:d,hasVertexUVi:m}=i;e.include(dt),e.include($i,i),e.include(Si,i),e.include(Ci,i);let{vertex:f,fragment:c}=e;c.include(Ai),c.code.add(C`
    vec4 applyFocusAreaStyle(vec4 color, int style) {
      const float factor = 0.46;
      const float factorBright = 0.32;

      if (style == ${C.int(0)}) {
        float luma = (color.r + color.g + color.b) / 3.0;
        float bright = luma * (1.0 - 0.6 * factorBright) + 0.6 * factorBright * color.a;
        float brightScaled = bright * factorBright;
        return vec4(brightScaled, brightScaled, brightScaled, color.a * factorBright);
      }

      float darkScaled = factor * factor;
      return vec4(color.rgb * darkScaled, color.a * factor);
    }
  `),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");let A=t===10;f.uniforms.add(ft,new Pe("screenOffset",(y,D)=>ye(me,y.screenOffset[0]*2*D.camera.pixelRatio,y.screenOffset[1]*2*D.camera.pixelRatio)),new Pe("anchorPosition",y=>Ue(y)),new je("materialColor",({color:y})=>y),new ce("materialRotation",y=>y.rotation),new Pe("materialSize",y=>y.size),new ue("tex",y=>y.texture)),pt(f),r&&(f.uniforms.add(new je("outlineColor",y=>y.outlineColor)),c.uniforms.add(new je("outlineColor",y=>tt(y)?y.outlineColor:li),new ce("outlineSize",y=>tt(y)?y.outlineSize:0))),a&&f.include(Ao),p&&(Oi(f),gt(f)),h&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add("uv0","vec2"),m&&e.attributes.add("uvi","vec4"),b&&e.attributes.add("color","vec4"),g&&e.attributes.add("size","vec2"),d&&e.attributes.add("rotation","float"),(n||l)&&e.attributes.add("featureAttribute","vec4"),f.main.add(C`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${Po};
      return;
    }

    vec2 vertexSize = materialSize${B(g," * size")};
    vec2 inputSize;
    ${B(p,C`
        inputSize = screenSizePerspectiveScaleVec2(vertexSize, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,C`
        inputSize = vertexSize;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${B(n,C`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);
  `);let u=C`
  ${B(m,C`
    vec2 texSize = vec2(textureSize(tex, 0));
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0)) / texSize;
    `,C`
    vec2 uv = mix(vec2(0.), vec2(1.), bvec2(uv0));
    `)}

    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${B(v,C`
        float angle = radians(materialRotation${B(d," + rotation")});
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,O=a?r?C`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:C`posProj += quadOffset;
if (inputSize.x == vertexSize.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:C`posProj += quadOffset;`;f.include(zi),f.main.add(C`
    ${u}
    ${l?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":b?"vcolor = color * materialColor;":"vcolor = materialColor;"}

    ${B(t===11,C`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < alphaCutoff;
    ${B(r,"alphaDiscard = alphaDiscard && outlineColor.a < alphaCutoff;")}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${O}
      gl_Position = posProj;
    }

    vtc = uv;

    ${B(h,C`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `);let z=Ye(t)&&i.hasFocusAreaStyle&&!i.draped;switch(c.uniforms.add(new ue("tex",y=>y.texture)),z&&c.uniforms.add(new mt("focusAreaStyle",y=>Vo(y.focusAreaStyle))),S&&!A&&(c.include(Pi),c.uniforms.add(new We("depthMap",y=>y.mainDepth),new ce("occludedOpacity",y=>{var D;return((D=y.occludedFragmentOpacity)==null?void 0:D.value)??1}))),o&&c.uniforms.add(new We("texOcclusion",y=>{var D;return(D=y.hudOcclusion)==null?void 0:D.attachment})),h?c.main.add(`
        float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));
        // don't discard fragments on debug border
        float textureAlphaCutoff = isBorder > 0.0 ? 0.0 : alphaCutoff;
      `):c.main.add("float textureAlphaCutoff = alphaCutoff;"),c.main.add("vec2 samplePos = vtc;"),x&&c.main.add(C`float txSize = float(textureSize(tex, 0).x);
float texelSize = 1.0 / txSize;
vec2 scaleFactor = (vsize - txSize) * texelSize;
samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`),r?c.main.add(C`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < textureAlphaCutoff ||
          fillPixelColor.a + outlinePixelColor.a < alphaCutoff
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${B(!A,C`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < textureAlphaCutoff) {
          discard;
        }

        ${B(!A,C`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `):c.main.add(C`
        vec4 texColor = texture(tex, samplePos, -0.5);
        if (texColor.a < textureAlphaCutoff) {
          discard;
        }
        ${B(!A,C`fragColor = texColor * premultiplyAlpha(vcolor);`)}
      `),S&&!A&&c.main.add(C`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${C.float(1-Fo)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `),o&&c.main.add("fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;"),!A&&h&&c.main.add("fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);"),t===2&&c.main.add(C`if (fragColor.a < alphaCutoff) {
discard;
}`),z&&c.main.add(C`fragColor = applyFocusAreaStyle(fragColor, focusAreaStyle);`),Ye(t)&&s&&c.main.add("fragEmission = vec4(0.0);"),t){case 1:c.main.add(`
        fragColor = vec4(fragColor.rgb * floatBlendOutputScale, fragColor.a);
        fragAlpha = fragColor.a * floatBlendOutputScale;
      `);break;case 2:c.main.add("fragColor.rgb /= fragColor.a;");break;case 11:c.main.add("outputObjectAndLayerIdColor();");break;case 10:e.include(ji,i),c.main.add("outputHighlight(false);")}return e}function tt(i){return i.outlineColor[3]>0&&i.outlineSize>0}function Ue(i){return i.textureIsSignedDistanceField?Do(i.anchorPosition,i.distanceFieldBoundingBox,me):ni(me,i.anchorPosition),me}const me=Te();function Do(i,e,t){ye(t,i[0]*(e[2]-e[0])+e[0],i[1]*(e[3]-e[1])+e[1])}const Fo=.08,Mo=Object.freeze(Object.defineProperty({__proto__:null,anchorPosition:Ue,build:Dt},Symbol.toStringTag,{value:"Module"}));let it=class extends vt{constructor(i,e){super(i,e,Ke(To).concat(Ke(Eo(e)))),this.shader=new bt(Mo,()=>ut(()=>Promise.resolve().then(()=>Xo),void 0)),this.ignoreUnused=!0,this.primitiveType=ci.TRIANGLE_STRIP}initializePipeline(i){let{draped:e,output:t,depthTestEnabled:o}=i,r=qi(t),a=o&&!e&&!r&&t!==10;return $t({blending:Fi(t,!0),depthTest:o&&!e?{func:515}:null,depthWrite:a?Li:null,colorWrite:St,polygonOffset:Di(i)})}};it=k([$e("esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique")],it);const To=wt().vec2u8("uv0",{glNormalized:!0});function Eo(i){let e=wt().vec3f("position").vec3f("normal").f32("groundDistance");return i.hasVertexCenterOffset&&(e=e.vec3f("centerOffset")),i.hasVertexColor&&(e=e.vec4u8("color",{glNormalized:!0})),i.hasVertexSize&&(e=e.vec2f("size")),i.hasVertexRotation&&(e=e.f32("rotation")),(i.hasVVColor||i.hasVVSize)&&(e=e.vec4f("featureAttribute")),i.hasVertexUVi&&(e=e.vec4i16("uvi")),Vi()?e.vec4u8("olidColor"):e}function Bo(){return ot??(ot=Uo()),ot}function Uo(){let i=new w([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0);return new Mi([["uv0",i]])}let ot=null;const Ve=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Ro=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Ho=[0,0,1,0,1,1,0,1],Io=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ft=Array(36);for(let i=0;i<6;i++)for(let e=0;e<6;e++)Ft[i*6+e]=i;const Y=Array(36);for(let i=0;i<6;i++)Y[i*6]=0,Y[i*6+1]=1,Y[i*6+2]=2,Y[i*6+3]=2,Y[i*6+4]=3,Y[i*6+5]=0;function zr(i,e){Array.isArray(e)||(e=[e,e,e]);let t=Array(24);for(let o=0;o<8;o++)t[o*3]=Ve[o][0]*e[0],t[o*3+1]=Ve[o][1]*e[1],t[o*3+2]=Ve[o][2]*e[2];return new R(i,[["position",new w(t,Io,3,!0)],["normal",new w(Ro,Ft,3)],["uv0",new w(Ho,Y,2)]])}const De=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],ko=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],qo=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Go=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function Pr(i,e){Array.isArray(e)||(e=[e,e,e]);let t=Array(18);for(let o=0;o<6;o++)t[o*3]=De[o][0]*e[0],t[o*3+1]=De[o][1]*e[1],t[o*3+2]=De[o][2]*e[2];return new R(i,[["position",new w(t,qo,3,!0)],["normal",new w(ko,Go,3)]])}const ve=V(-.5,0,-.5),be=V(.5,0,-.5),xe=V(0,0,.5),we=V(0,.5,0),Z=I(),ee=I(),oe=I(),re=I(),ae=I();L(Z,ve,we),L(ee,ve,be),N(oe,Z,ee),T(oe,oe),L(Z,be,we),L(ee,be,xe),N(re,Z,ee),T(re,re),L(Z,xe,we),L(ee,xe,ve),N(ae,Z,ee),T(ae,ae);const Fe=[ve,be,xe,we],Lo=[0,-1,0,oe[0],oe[1],oe[2],re[0],re[1],re[2],ae[0],ae[1],ae[2]],Wo=[0,1,2,3,1,0,3,2,1,3,0,2],No=[0,0,0,1,1,1,2,2,2,3,3,3];function jr(i,e){Array.isArray(e)||(e=[e,e,e]);let t=Array(12);for(let o=0;o<4;o++)t[o*3]=Fe[o][0]*e[0],t[o*3+1]=Fe[o][1]*e[1],t[o*3+2]=Fe[o][2]*e[2];return new R(i,[["position",new w(t,Wo,3,!0)],["normal",new w(Lo,No,3)]])}function Vr(i,e,t,o,r={uv:!0}){let a=-Math.PI,s=Math.PI*2,p=-Math.PI/2,h=Math.PI,n=Math.max(3,Math.floor(t)),l=Math.max(2,Math.floor(o)),v=(n+1)*(l+1),S=U(v*3),x=U(v*3),b=U(v*2),g=[],d=0;for(let c=0;c<=l;c++){let A=[],u=c/l,O=p+u*h,z=Math.cos(O);for(let y=0;y<=n;y++){let D=y/n,_=a+D*s,E=Math.cos(_)*z,P=Math.sin(O),de=-Math.sin(_)*z;S[3*d]=E*e,S[3*d+1]=P*e,S[3*d+2]=de*e,x[3*d]=E,x[3*d+1]=P,x[3*d+2]=de,b[2*d]=D,b[2*d+1]=u,A.push(d),++d}g.push(A)}let m=[];for(let c=0;c<l;c++)for(let A=0;A<n;A++){let u=g[c][A],O=g[c][A+1],z=g[c+1][A+1],y=g[c+1][A];c===0?(m.push(u),m.push(z),m.push(y)):c===l-1?(m.push(u),m.push(O),m.push(z)):(m.push(u),m.push(O),m.push(z),m.push(z),m.push(y),m.push(u))}let f=[["position",new w(S,m,3,!0)],["normal",new w(x,m,3,!0)]];return r.uv&&f.push(["uv0",new w(b,m,2,!0)]),r.offset&&(f[0][0]="offset",f.push(["position",new w(Float64Array.from(r.offset),Ee(m.length),3,!0)])),new R(i,f)}function Dr(i,e,t,o){let r=Ko(e,t);return new R(i,r)}function Ko(i,e,t){let o,r;o=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],r=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let h=0;h<o.length;h+=3)et(o,h,i/Ze(o,h));let a={};function s(h,n){h>n&&([h,n]=[n,h]);let l=h.toString()+"."+n.toString();if(a[l])return a[l];let v=o.length;return o.length+=3,Co(o,h*3,o,n*3,o,v),et(o,v,i/Ze(o,v)),v/=3,a[l]=v,v}for(let h=0;h<e;h++){let n=r.length,l=Array(n*4);for(let v=0;v<n;v+=3){let S=r[v],x=r[v+1],b=r[v+2],g=s(S,x),d=s(x,b),m=s(b,S),f=v*4;l[f]=S,l[f+1]=g,l[f+2]=m,l[f+3]=x,l[f+4]=d,l[f+5]=g,l[f+6]=b,l[f+7]=m,l[f+8]=d,l[f+9]=g,l[f+10]=d,l[f+11]=m}r=l,a={}}let p=Ne(o);for(let h=0;h<p.length;h+=3)So(p,h);return[["position",new w(Ne(o),r,3,!0)],["normal",new w(p,r,3,!0)]]}function Fr(i,{normal:e,position:t,color:o,rotation:r,size:a,centerOffset:s,groundDistance:p,uvi:h,featureAttribute:n,olidColor:l=null}={}){let v=t?Ge(t):j(),S=e?Ge(e):ui(0,0,1),x=p==null?[1]:[p],b=Ee(1),g=[["position",new w(v,b,3,!0)],["normal",new w(S,b,3,!0)]],d=a!=null&&a.length===2?a:null;if(d&&g.push(["size",new w(d,b,2)]),r!=null&&g.push(["rotation",new w([r],b,1,!0)]),o){let m=[o[0],o[1],o[2],o.length>3?o[3]:255];g.push(["color",new w(m,b,4,!0)])}if(h&&g.push(["uvi",new w(h,b,h.length)]),s&&g.push(["centerOffset",new w(s,b,3)]),g.push(["groundDistance",new w(x,b,1)]),n){let m=[n[0],n[1],n[2],n[3]];g.push(["featureAttribute",new w(m,b,4)])}return l!=null&&Ot(g,l,b),new R(i,g,null,void 0,Bo())}function Qo(i,e,t,o,r=!0,a=!0){let s=0,p=e,h=i,n=V(0,s,0),l=V(0,s+h,0),v=V(0,-1,0),S=V(0,1,0);o&&(s=h,l=V(0,0,0),n=V(0,s,0),v=V(0,1,0),S=V(0,-1,0));let x=[l,n],b=[v,S],g=t+2,d=Math.sqrt(h*h+p*p);if(o)for(let u=t-1;u>=0;u--){let O=2*Math.PI/t*u,z=V(Math.cos(O)*p,s,Math.sin(O)*p);x.push(z);let y=V(h*Math.cos(O)/d,-p/d,h*Math.sin(O)/d);b.push(y)}else for(let u=0;u<t;u++){let O=2*Math.PI/t*u,z=V(Math.cos(O)*p,s,Math.sin(O)*p);x.push(z);let y=V(h*Math.cos(O)/d,p/d,h*Math.sin(O)/d);b.push(y)}let m=[],f=[];if(r){for(let u=3;u<x.length;u++)m.push(1),m.push(u-1),m.push(u),f.push(0),f.push(0),f.push(0);m.push(x.length-1),m.push(2),m.push(1),f.push(0),f.push(0),f.push(0)}if(a){for(let u=3;u<x.length;u++)m.push(u),m.push(u-1),m.push(0),f.push(u),f.push(u-1),f.push(1);m.push(0),m.push(2),m.push(x.length-1),f.push(1),f.push(2),f.push(b.length-1)}let c=U(g*3);for(let u=0;u<g;u++)c[u*3]=x[u][0],c[u*3+1]=x[u][1],c[u*3+2]=x[u][2];let A=U(g*3);for(let u=0;u<g;u++)A[u*3]=b[u][0],A[u*3+1]=b[u][1],A[u*3+2]=b[u][2];return[["position",new w(c,m,3,!0)],["normal",new w(A,f,3,!0)]]}function Mr(i,e,t,o,r,a=!0,s=!0){return new R(i,Qo(e,t,o,r,a,s))}function Tr(i,e,t,o,r,a,s){let p=r?Qe(r):V(1,0,0),h=a?Qe(a):V(0,0,0);s??(s=!0);let n=I();T(n,p);let l=I();H(l,n,Math.abs(e));let v=I();H(v,l,-.5),M(v,v,h);let S=V(0,1,0);Math.abs(1-ht(n,S))<.2&&he(S,0,0,1);let x=I();N(x,n,S),T(x,x),N(S,x,n);let b=o*2+(s?2:0),g=o+(s?2:0),d=U(b*3),m=U(g*3),f=U(b*2),c=Array(o*3*(s?4:2)),A=Array(o*3*(s?4:2));s&&(d[(b-2)*3]=v[0],d[(b-2)*3+1]=v[1],d[(b-2)*3+2]=v[2],f[(b-2)*2]=0,f[(b-2)*2+1]=0,d[(b-1)*3]=d[(b-2)*3]+l[0],d[(b-1)*3+1]=d[(b-2)*3+1]+l[1],d[(b-1)*3+2]=d[(b-2)*3+2]+l[2],f[(b-1)*2]=1,f[(b-1)*2+1]=1,m[(g-2)*3]=-n[0],m[(g-2)*3+1]=-n[1],m[(g-2)*3+2]=-n[2],m[(g-1)*3]=n[0],m[(g-1)*3+1]=n[1],m[(g-1)*3+2]=n[2]);let u=(_,E,P)=>{c[_]=E,A[_]=P},O=0,z=I(),y=I();for(let _=0;_<o;_++){let E=2*Math.PI/o*_;H(z,S,Math.sin(E)),H(y,x,Math.cos(E)),M(z,z,y),m[_*3]=z[0],m[_*3+1]=z[1],m[_*3+2]=z[2],H(z,z,t),M(z,z,v),d[_*3]=z[0],d[_*3+1]=z[1],d[_*3+2]=z[2],f[_*2]=_/o,f[_*2+1]=0,d[(_+o)*3]=d[_*3]+l[0],d[(_+o)*3+1]=d[_*3+1]+l[1],d[(_+o)*3+2]=d[_*3+2]+l[2],f[(_+o)*2]=_/o,f[_*2+1]=1;let P=(_+1)%o;u(O++,_,_),u(O++,_+o,_),u(O++,P,P),u(O++,P,P),u(O++,_+o,_),u(O++,P+o,P)}if(s){for(let _=0;_<o;_++){let E=(_+1)%o;u(O++,b-2,g-2),u(O++,_,g-2),u(O++,E,g-2)}for(let _=0;_<o;_++){let E=(_+1)%o;u(O++,_+o,g-1),u(O++,b-1,g-1),u(O++,E+o,g-1)}}let D=[["position",new w(d,c,3,!0)],["normal",new w(m,A,3,!0)],["uv0",new w(f,c,2,!0)]];return new R(i,D)}function Er(i,e,t,o,r,a){o||(o=10),r??(r=!0),xt(e.length>1);let s=[[0,0,0]],p=[],h=[];for(let n=0;n<o;n++){p.push([0,-n-1,-((n+1)%o)-1]);let l=n/o*2*Math.PI;h.push([Math.cos(l)*t,Math.sin(l)*t])}return Yo(i,h,e,s,p,r,a)}function Yo(i,e,t,o,r,a,s=V(0,0,0)){let p=e.length,h=U(t.length*p*3+(o.length*6||0)),n=U(t.length*p*3+(o?6:0)),l=[],v=[],S=0,x=0,b=j(),g=j(),d=j(),m=j(),f=j(),c=j(),A=j(),u=j(),O=j(),z=j(),y=j(),D=j(),_=j(),E=Ui();he(O,0,1,0),L(g,t[1],t[0]),T(g,g),a?(M(u,t[0],s),T(d,u)):he(d,0,0,1),rt(g,d,O,O,f,d,at),J(m,d),J(D,f);for(let $=0;$<o.length;$++)H(c,f,o[$][0]),H(u,d,o[$][2]),M(c,c,u),M(c,c,t[0]),h[S++]=c[0],h[S++]=c[1],h[S++]=c[2];n[x++]=-g[0],n[x++]=-g[1],n[x++]=-g[2];for(let $=0;$<r.length;$++)l.push(r[$][0]>0?r[$][0]:-r[$][0]-1+o.length),l.push(r[$][1]>0?r[$][1]:-r[$][1]-1+o.length),l.push(r[$][2]>0?r[$][2]:-r[$][2]-1+o.length),v.push(0),v.push(0),v.push(0);let P=o.length,de=o.length-1;for(let $=0;$<t.length;$++){let Re=!1;$>0&&(J(b,g),$<t.length-1?(L(g,t[$+1],t[$]),T(g,g)):Re=!0,M(z,b,g),T(z,z),M(y,t[$-1],m),Ri(t[$],z,E),Hi(E,Ii(y,b),u)?(L(u,u,t[$]),T(d,u),N(f,z,d),T(f,f)):rt(z,m,D,O,f,d,at),J(m,d),J(D,f)),a&&(M(u,t[$],s),T(_,u));for(let W=0;W<p;W++)if(H(c,f,e[W][0]),H(u,d,e[W][1]),M(c,c,u),T(A,c),n[x++]=A[0],n[x++]=A[1],n[x++]=A[2],M(c,c,t[$]),h[S++]=c[0],h[S++]=c[1],h[S++]=c[2],!Re){let Ae=(W+1)%p;l.push(P+W),l.push(P+p+W),l.push(P+Ae),l.push(P+Ae),l.push(P+p+W),l.push(P+p+Ae);for(let Oe=0;Oe<6;Oe++){let Et=l.length-6;v.push(l[Et+Oe]-de)}}P+=p}let Mt=t[t.length-1];for(let $=0;$<o.length;$++)H(c,f,o[$][0]),H(u,d,o[$][1]),M(c,c,u),M(c,c,Mt),h[S++]=c[0],h[S++]=c[1],h[S++]=c[2];let Se=x/3;n[x++]=g[0],n[x++]=g[1],n[x++]=g[2];let Ce=P-p;for(let $=0;$<r.length;$++)l.push(r[$][0]>=0?P+r[$][0]:-r[$][0]-1+Ce),l.push(r[$][2]>=0?P+r[$][2]:-r[$][2]-1+Ce),l.push(r[$][1]>=0?P+r[$][1]:-r[$][1]-1+Ce),v.push(Se),v.push(Se),v.push(Se);let Tt=[["position",new w(h,l,3,!0)],["normal",new w(n,v,3,!0)]];return new R(i,Tt)}function Br(i,e,t,o,r){let a=ct(e.length*3),s=Array(2*(e.length-1)),p=0,h=0;for(let l=0;l<e.length;l++){for(let v=0;v<3;v++)a[p++]=e[l][v];l>0&&(s[h++]=l-1,s[h++]=l)}let n=[["position",new w(a,s,3,!0)]];if((t==null?void 0:t.length)===e.length&&t[0].length===3){let l=U(t.length*3),v=0;for(let S=0;S<e.length;S++)for(let x=0;x<3;x++)l[v++]=t[S][x];n.push(["normal",new w(l,s,3,!0)])}if(o&&n.push(["color",new w(o,Bi(o.length/4),4)]),(r==null?void 0:r.length)===e.length){let l=$o(r,1);n.push(["timeStamps",new w(l,s,Pt,!0)])}return new R(i,n,null)}function Ur(i,e,t,o,r,a=0){let s=Array(18),p=[[-t,a,r/2],[o,a,r/2],[0,e+a,r/2],[-t,a,-r/2],[o,a,-r/2],[0,e+a,-r/2]],h=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let n=0;n<6;n++)s[n*3]=p[n][0],s[n*3+1]=p[n][1],s[n*3+2]=p[n][2];return new R(i,[["position",new w(s,h,3,!0)]])}function Rr(i,e){let t=i.getMutableAttribute("position").data;for(let o=0;o<t.length;o+=3){let r=t[o],a=t[o+1],s=t[o+2];he(te,r,a,s),ie(te,te,e),t[o]=te[0],t[o+1]=te[1],t[o+2]=te[2]}}function Hr(i,e=i){let t=i.attributes,o=t.get("position").data,r=t.get("normal").data;if(r){let a=e.getMutableAttribute("normal").data;for(let s=0;s<r.length;s+=3){let p=r[s+1];a[s+1]=-r[s+2],a[s+2]=p}}if(o){let a=e.getMutableAttribute("position").data;for(let s=0;s<o.length;s+=3){let p=o[s+1];a[s+1]=-o[s+2],a[s+2]=p}}}function Me(i,e,t,o,r){return Math.abs(ht(e,i))>r?!1:(N(t,i,e),T(t,t),N(o,t,i),T(o,o),!0)}function rt(i,e,t,o,r,a,s){return Me(i,e,r,a,s)||Me(i,t,r,a,s)||Me(i,o,r,a,s)}const at=.99619469809,te=j(),Jo=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaPassParameters:Be,build:jt},Symbol.toStringTag,{value:"Module"})),Xo=Object.freeze(Object.defineProperty({__proto__:null,anchorPosition:Ue,build:Dt},Symbol.toStringTag,{value:"Module"}));export{Sr as A,Cr as B,gr as C,rt as D,io as E,Ue as N,Hr as S,zr as V,Eo as _,br as a,Tr as b,Vr as c,Oo as d,Mr as e,Ao as f,To as g,it as h,so as i,zo as j,Ot as k,Dr as l,Ni as m,Pr as n,$r as o,Ar as p,Ur as q,Er as r,jr as s,Po as t,Br as u,Yo as v,At as w,Rr as x,mr as y,Fr as z};
//# sourceMappingURL=HUDMaterial.glsl-DqdZRhkr.js.map
