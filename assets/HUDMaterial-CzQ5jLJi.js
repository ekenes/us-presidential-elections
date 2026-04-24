const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HUDMaterial.glsl-h3pIO9WD.js","assets/index-CM3qOuWq.js","assets/index-BrfcoBoQ.css","assets/meshVertexSpaceUtils-DIiBdDuw.js","assets/MeshLocalVertexSpace-DWkzI7jD.js","assets/projectVectorToVector-BlVfqXvR.js","assets/projectPointToVector-CaCwv7l7.js","assets/hydratedFeatures-CgL7w6um.js","assets/OutputColorHighlightOLID.glsl-C4KoFhCq.js","assets/Indices-Blp5VBCJ.js","assets/BufferView-BTXeN4-o.js","assets/triangle-BGnafhtq.js","assets/ray-CzujorZx.js","assets/vectorStacks-DZWimYPU.js","assets/quatf64-aQ5IuZRd.js","assets/sphere-DVeIXe68.js","assets/plane-DOoQfr7n.js","assets/mathUtils-mtfG3WvA.js","assets/glsl-CX8y9w8U.js","assets/VertexAttributeLocations-DNGQA5Cq.js","assets/VertexElementDescriptor-CVzmm3VW.js","assets/renderState-DQURvsEg.js","assets/frustum-BBG-PGVO.js","assets/orientedBoundingBox-COlbx43V.js","assets/quat-BWUTzBjU.js","assets/computeTranslationToOriginAndRotation-Bdtgu4XS.js","assets/ShaderBuilder-Bydnw-kQ.js"])))=>i.map(i=>d[i]);
import{W as V,iZ as ei,iQ as ui,df as Ue,fn as Ha,gG as oe,hr as at,iL as Ga,iO as Nt,db as et,uS as qa,fk as K,fm as Y,d4 as Xa,dA as B,fI as Ja,io as Ya,c4 as Qa,h$ as pi,ej as Ka,bi as Za,de as ia,pO as es,q1 as aa,dj as gt,iu as st,eG as Ze,kB as Ge,hm as Xe,_ as sa,kd as _t,v as A,x as na,e4 as St,$ as oa,tb as ra,fg as se,dk as tt,fl as q,fh as it,tn as ts,p$ as la,uT as We,fi as Ht,gx as is,fL as as,j9 as ca,ix as ss,uU as ns,uV as os,dc as fi,dn as Q,dl as ze,X as rs,bk as ls,fd as cs,uW as ds,gw as hi,iF as mi,iE as vi,kR as Tt,gK as us,cz as ps,uX as gi,qH as da,dy as fs,ey as hs,dB as ms}from"./index-CM3qOuWq.js";import{t as T}from"./orientedBoundingBox-COlbx43V.js";import{z as vs,A as gs,B as Ss,r as re,C as ti,D as ua,E as ii,F as bs,e as Je,G as Si,H as pa,h as qe,I as nt,d as Gt,f as ke,J as xs,i as qt,K as ys,L as fa,M as ha,N as ma,v as ws,k as $s,O as At,P as Ps,Q as _s,R as va,S as ne,U as ai,l as ga,t as Sa,V as Os,W as bi,X as zs,Y as xi,Z as ut,p as ba,_ as Cs,$ as As,a0 as Fe,a1 as xa,a2 as Ts,a3 as yi,a4 as Ds,a5 as Vs,a6 as wi,a7 as ya,s as D,a8 as wa,a9 as Rs,aa as Es,ab as $i,ac as Fs,ad as Ls,ae as Ms,af as Pi,m as me,n as be,ag as js,ah as _i,ai as Ws,aj as Is,ak as $a,al as Us,b as Xt,am as ks,a as Bs,an as Ns,ao as pt,ap as Hs,aq as Gs,ar as qs,as as Xs,at as Js,au as Ys,av as Qs,aw as Ks,ax as Oi,ay as Zs,az as zi,aA as Ci,aB as en,aC as tn}from"./OutputColorHighlightOLID.glsl-C4KoFhCq.js";import{w as an,l as sn,h as Dt,d as nn,v as Pa}from"./sphere-DVeIXe68.js";import{m as on}from"./mathUtils-mtfG3WvA.js";import{i as si,m as rn,h as _a,z as ln}from"./BufferView-BTXeN4-o.js";import{l as cn}from"./Octree-Dxs-JUN5.js";import{k as ft,X as $e,y as Ai,v as ot,U as dn,K as un}from"./plane-DOoQfr7n.js";import{t as u,n as E}from"./glsl-CX8y9w8U.js";import{s as Oa}from"./ShaderBuilder-Bydnw-kQ.js";import{Q as ni,t as Jt}from"./InterleavedLayout-ckIjO2tk.js";import{w as Ke,u as bt,a as Ti,d as pn}from"./renderState-DQURvsEg.js";import{t as Di,r as U,n as ye}from"./vec3f32-WCVSSNPR.js";import{c as oi,l as fn}from"./Indices-Blp5VBCJ.js";import{v as hn}from"./ray-CzujorZx.js";import{f as mn}from"./computeTranslationToOriginAndRotation-Bdtgu4XS.js";import{u as vn}from"./hydratedFeatures-CgL7w6um.js";function gn(a){return a==="position"}function Sn(a,e){return a==null&&(a=[]),a.push(e),a}function bn(a,e){if(a==null)return null;const t=a.filter(i=>i!==e);return t.length===0?null:t}function Fr(a,e,t,i,s){ht[0]=a.get(e,0),ht[1]=a.get(e,1),ht[2]=a.get(e,2),vs(ht,Te,3),t.set(s,0,Te[0]),i.set(s,0,Te[1]),t.set(s,1,Te[2]),i.set(s,1,Te[3]),t.set(s,2,Te[4]),i.set(s,2,Te[5])}const ht=V(),Te=new Float32Array(6);let xn=class{constructor(e={}){this.id=ei(),this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerViewUid=e.layerViewUid,e.isElevationSource&&(this.lastValidElevationBB=new za),this._geometries=e.geometries?Array.from(e.geometries):[]}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(e){si(this._layer==null||e==null,"Object3D can only be added to a single Layer"),this._layer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e);for(const t of this._highlightIds)e.addHighlight(t);this._emit("geometryAdded",{object:this,geometry:e}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}removeGeometry(e){const t=this._geometries.splice(e,1)[0];if(t){for(const i of this._highlightIds)t.removeHighlight(i);this._emit("geometryRemoved",{object:this,geometry:t}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t,i=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:t,sync:i}),gn(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const t of this._geometries)t.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new gs;for(const t of this._geometries)t.occludees=Sn(t.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const t of this._geometries)t.occludees=bn(t.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const t=new Ss(e);for(const i of this._geometries)i.addHighlight(t);return this._emit("highlightChanged",this),this._highlightIds.add(t),t}removeHighlight(e){this._highlightIds.delete(e);for(const t of this._geometries)t.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===0?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return ui(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e,t=Ue()){return ui(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=new Vi,this._validateBoundingVolume(this._bvWorldSpace,0)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=new Vi,this._validateBoundingVolume(this._bvObjectSpace,1)),this._bvObjectSpace}_validateBoundingVolume(e,t){const i=t===1;for(const s of this._geometries){const n=s.boundingInfo;n&&yn(n,e,i?s.transformation:this.getCombinedShaderTransformation(s))}Ha(e.bounds.center,e.min,e.max,.5);for(const s of this._geometries){const n=s.boundingInfo;if(n==null)continue;const o=i?s.transformation:this.getCombinedShaderTransformation(s),l=on(o);oe(Ri,n.center,o);const r=at(Ri,e.bounds.center),d=n.radius*l;e.bounds.radius=Math.max(e.bounds.radius,r+d)}}_invalidateBoundingVolume(){var t;const e=(t=this._bvWorldSpace)==null?void 0:t.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&e&&this.layer.notifyObjectBBChanged(this,e)}_emit(e,t){var i;(i=this.layer)==null||i.events.emit(e,t)}get geometries(){return this._geometries}get transformation(){return this._transformation??Ga}set transformation(e){this._transformation=Nt(this._transformation??Ue(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Nt(this._shaderTransformation??Ue(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}},za=class{constructor(){this._data=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE]}get min(){return et(this._data[0],this._data[1],this._data[2])}get max(){return et(this._data[3],this._data[4],this._data[5])}minWith(e){const{_data:t}=this;t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2])}maxWith(e){const{_data:t}=this;t[3]=Math.max(t[3],e[0]),t[4]=Math.max(t[4],e[1]),t[5]=Math.max(t[5],e[2])}assignMinMax(e,t){for(let i=0;i<3;++i)this._data[0+i]=e[i],this._data[3+i]=t[i]}isEmpty(){return this._data[3]<this._data[0]&&this._data[4]<this._data[1]&&this._data[5]<this._data[2]}},Vi=class extends za{constructor(){super(...arguments),this.bounds=new an}};function yn(a,e,t){const i=a.bbMin,s=a.bbMax;if(qa(t)){const n=K(wn,t[12],t[13],t[14]);return Y(fe,i,n),Y(xe,s,n),e.minWith(fe),void e.maxWith(xe)}if(oe(fe,i,t),Xa(i,s))return e.minWith(fe),void e.maxWith(fe);oe(xe,s,t),e.minWith(fe),e.minWith(xe),e.maxWith(fe),e.maxWith(xe);for(let n=0;n<3;++n)B(fe,i),B(xe,s),fe[n]=s[n],xe[n]=i[n],oe(fe,fe,t),oe(xe,xe,t),e.minWith(fe),e.minWith(xe),e.maxWith(fe),e.maxWith(xe)}const wn=V(),fe=V(),xe=V(),Ri=V(),$n=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let Pn=class{constructor(e,t,i=""){this.stage=e,this.apiLayerViewUid=i,this.id=ei(),this.events=new Ja,this.visible=!0,this.sliceable=!1,this._objectsAdded=new Array,this._handles=new Ya,this._objects=new Map,this._pickable=!0,this.visible=(t==null?void 0:t.visible)??!0,this._pickable=(t==null?void 0:t.pickable)??!0,this.updatePolicy=(t==null?void 0:t.updatePolicy)??0,e.addLayer(this);for(const s of $n)this._handles.add(this.events.on(s,n=>e.handleEvent(s,n)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(e){return Qa(this._objects.get(e))}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.set(e.id,e),e.layer=this,this.events.emit("layerObjectAdded",e),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.delete(e.id)&&(this.events.emit("layerObjectRemoved",e),e.layer=null,this._octree!=null&&(pi(this._objectsAdded,e)||this._octree.remove([e])))}addMany(e){for(const t of e)this._objects.set(t.id,t),t.layer=this;this.events.emit("layerObjectsAdded",e),this._octree!=null&&this._objectsAdded.push(...e)}removeMany(e){const t=new Array;for(const i of e)this._objects.delete(i.id)&&t.push(i);if(t.length!==0&&(this.events.emit("layerObjectsRemoved",t),t.forEach(i=>i.layer=null),this._octree!=null)){for(let i=0;i<t.length;)pi(this._objectsAdded,t[i])?(t[i]=t[t.length-1],t.length-=1):++i;this._octree.remove(t)}}commit(){this.stage.commitLayer(this)}sync(){this.updatePolicy!==1&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.size>50?(this._octree=new cn(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.values())):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=Ka(this._octree),this._objectsAdded.length=0}get test(){}},_n=class{constructor(e,t){this.vec3=e,this.id=t}};function Ei(a,e,t,i){return new _n(et(a,e,t),i)}const J={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},On={dash:J.dash,"dash-dot":[...J.dash,...J.dot],dot:J.dot,"long-dash":J["long-dash"],"long-dash-dot":[...J["long-dash"],...J.dot],"long-dash-dot-dot":[...J["long-dash"],...J.dot,...J.dot],none:null,"short-dash":J["short-dash"],"short-dash-dot":[...J["short-dash"],...J["short-dot"]],"short-dash-dot-dot":[...J["short-dash"],...J["short-dot"],...J["short-dot"]],"short-dot":J["short-dot"],solid:null},zn=8;let Cn=class{constructor(e,t,i){this.image=e,this.width=t,this.length=i,this.uuid=Za()}};function Ca(a){return a!=null&&"image"in a}function An(a,e){return a==null?a:{pattern:a.slice(),pixelRatio:e}}function kr(a){return{pattern:[a,a],pixelRatio:2}}function Br(a){switch(a==null?void 0:a.type){case"style":return Tn(a.style);case"image":return new Cn(a.image,a.width,a.length);case void 0:case null:return null}return null}function Tn(a){return a!=null?An(On[a],zn):null}const Fi=8;function Dn(a,e){const{vertex:t,attributes:i}=a;t.uniforms.add(new re("intrinsicWidth",o=>o.width));const{hasScreenSizePerspective:s,spherical:n}=e;s?(a.include(ti,e),ua(t),ii(t,e),t.uniforms.add(new bs("inverseViewMatrix",(o,l)=>ia(Li,es(Li,l.camera.viewMatrix,o.origin)))),t.code.add(u`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${n?u`normalize(worldPos + localOrigin)`:u`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):t.code.add(u`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),e.hasVVSize?(i.add("sizeFeatureAttribute","float"),t.uniforms.add(new Je("vvSizeMinSize",o=>o.vvSize.minSize),new Je("vvSizeMaxSize",o=>o.vvSize.maxSize),new Je("vvSizeOffset",o=>o.vvSize.offset),new Je("vvSizeFactor",o=>o.vvSize.factor),new Je("vvSizeFallback",o=>o.vvSize.fallback)),t.code.add(u`
    float getSize(${E(s,"vec3 pos")}) {
      float size = isnan(sizeFeatureAttribute)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${E(s,"applyLineSizeScreenSizePerspective(size, pos)","size")};
    }
    `)):(i.add("size","float"),t.code.add(u`
    float getSize(${E(s,"vec3 pos")}) {
      float fullSize = intrinsicWidth * size;
      return ${E(s,"applyLineSizeScreenSizePerspective(fullSize, pos)","fullSize")};
    }
    `)),e.hasVVOpacity?(i.add("opacityFeatureAttribute","float"),t.constants.add("vvOpacityNumber","int",8),t.uniforms.add(new Si("vvOpacityValues",Fi,o=>o.vvOpacity.values),new Si("vvOpacityOpacities",Fi,o=>o.vvOpacity.opacityValues),new re("vvOpacityFallback",o=>o.vvOpacity.fallback,{supportsNaN:!0})),t.code.add(u`
    float interpolateOpacity(float value) {
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[vvOpacityNumber - 1];
    }

    vec4 applyOpacity(vec4 color) {
      if (isnan(opacityFeatureAttribute)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${E(e.hasVVColor,"color","vec4(color.rgb, vvOpacityFallback)")};
      }

      return vec4(color.rgb, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):t.code.add(u`vec4 applyOpacity(vec4 color) {
return color;
}`),e.hasVVColor?(a.include(pa,e),i.add("colorFeatureAttribute","float"),t.code.add(u`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(i.add("color","vec4"),t.code.add(u`vec4 getColor() {
return applyOpacity(color);
}`))}const Li=Ue();function Vn(a){a.vertex.code.add("#define noPerspectiveWrite(x, w) (x * w)")}function Yt(a){a.fragment.code.add("#define noPerspectiveRead(x) (x * gl_FragCoord.w)")}function Rn(a){return a.pattern.map(e=>Math.round(e*a.pixelRatio))}function En(a){if(a==null)return 1;const e=Rn(a);return Math.floor(e.reduce((t,i)=>t+i))}function Fn(a){return a==null?aa:a.length===4?a:gt(Ln,a[0],a[1],a[2],1)}const Ln=st();function Mn(a,e){if(!e.stippleEnabled)return void a.fragment.code.add(u`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const t=!(e.draped&&e.stipplePreferContinuous),{vertex:i,fragment:s}=a;e.draped||(ii(i,e),i.uniforms.add(new qe("worldToScreenPerDistanceRatio",({camera:n})=>1/n.perScreenPixelRatio)).code.add(u`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),a.varyings.add("vStippleDistance","float"),a.varyings.add("vStippleDistanceLimits","vec2"),a.varyings.add("vStipplePatternStretch","float"),i.code.add(u`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${u.float(jn)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),nt(i),i.code.add(u`
    vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {

      // First check if the segment is long enough to support fully screen space patterns.
      // Force sparse mode for segments that are very large in screen space even if it is not allowed,
      // to avoid imprecision from calculating with large floats.
      if (segmentLengthPseudoScreen >= ${t?"patternLength":"1e4"}) {
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        float stretch = repetitions / flooredRepetitions;

        // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
        // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
        vStipplePatternStretch = max(0.75, stretch);

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),s.uniforms.add(new Gt("stipplePatternTexture",n=>n.stippleTexture),new re("stipplePatternPixelSizeInv",n=>1/Aa(n))),e.stippleOffColorEnabled&&s.uniforms.add(new ke("stippleOffColor",n=>Fn(n.stippleOffColor))),a.include(Yt),e.worldSizedImagePattern?(a.varyings.add("vStippleV","float"),a.fragment.include(xs),s.code.add(u`vec4 getStippleColor(out bool isClamped) {
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = vStippleDistance * stipplePatternPixelSizeInv;
float v = vStippleV == -1.0 ? 0.5 : vStippleV;
return texture(stipplePatternTexture, vec2(u, v));
}
vec4 getStippleColor() {
bool ignored;
return getStippleColor(ignored);
}
float getStippleSDF() {
vec4 color = getStippleColor();
return color.a == 0.0 ? -0.5 : 0.5;
}
float getStippleAlpha(float lineWidth) {
return getStippleColor().a;
}
vec4 blendStipple(vec4 color, float stippleAlpha) {
vec4 stippleColor = getStippleColor();
int mixMode  = 1;
vec3 col = mixExternalColor(color.rgb, vec3(1.0), stippleColor.rgb, mixMode);
float opacity = mixExternalOpacity(color.a, 1.0, stippleColor.a, mixMode);
return vec4(col, opacity);
}`)):s.code.add(u`
    float getStippleSDF(out bool isClamped) {
      float stippleDistanceClamped = noPerspectiveRead(clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y));
      float lineSizeInv = noPerspectiveRead(vLineSizeInv);

      vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
      isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;

      float u = stippleDistanceClamped * stipplePatternPixelSizeInv * lineSizeInv;
      u = fract(u);

      float sdf = texture(stipplePatternTexture, vec2(u, 0.5)).r;

      return (sdf - 0.5) * vStipplePatternStretch + 0.5;
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha(float lineWidth) {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);
      float antiAliasedResult = clamp(stippleSDF * lineWidth + 0.5, 0.0, 1.0);
      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${e.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `),s.code.add(u`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${E(!e.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }
  `)}function Aa(a){const e=a.stipplePattern;return Ca(e)?e.length:e?En(e)/e.pixelRatio:1}const jn=.4,Ta=64,Wn=Ta/2,In=Wn/5,Un=Ta/In,Nr=.25;function kn(a,e){const t=a.vertex,i=e.hasScreenSizePerspective;nt(t),t.uniforms.get("markerScale")==null&&t.constants.add("markerScale","float",1),t.constants.add("markerSizePerLineWidth","float",Un).code.add(u`
  float getLineWidth(${E(i,"vec3 pos")}) {
     return max(getSize(${E(i,"pos")}), 1.0) * pixelRatio;
  }

  float getScreenMarkerSize(float lineWidth) {
    return markerScale * markerSizePerLineWidth * lineWidth;
  }
  `),e.space===2&&(t.constants.add("maxSegmentLengthFraction","float",.45),t.uniforms.add(new qe("perRenderPixelRatio",s=>s.camera.perRenderPixelRatio)),t.code.add(u`
  bool areWorldMarkersHidden(vec3 pos, vec3 other) {
    vec3 midPoint = mix(pos, other, 0.5);
    float distanceToCamera = length(midPoint);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    float worldMarkerSize = getScreenMarkerSize(getLineWidth(${E(i,"pos")})) * screenToWorldRatio;
    float segmentLen = length(pos - other);
    return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
  }

  float getWorldMarkerSize(vec3 pos) {
    float distanceToCamera = length(pos);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    return getScreenMarkerSize(getLineWidth(${E(i,"pos")})) * screenToWorldRatio;
  }
  `))}const Da=u`vec4(0.0, 0.0, 2.0, 1.0)`,Bn=Ze(1),Nn=Ze(1);function Hn(a,e){const{hasAnimation:t,animation:i}=e;if(!t)return;const{attributes:s,varyings:n,vertex:o,fragment:l}=a;s.add("timeStamps","vec4"),n.add("vTimeStamp","float"),n.add("vFirstTime","float"),n.add("vLastTime","float"),n.add("vTransitionType","float"),o.main.add(u`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;
vTransitionType = timeStamps.w;`),i===3&&l.constants.add("decayRate","float",2.3),l.code.add(u`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${Gn(i)}
    }`),l.uniforms.add(new re("timeElapsed",r=>r.timeElapsed),new re("trailLength",r=>r.trailLength),new re("speed",r=>r.animationSpeed),new qt("startEndTime",r=>Ge(qn,r.startTime,r.endTime))),l.constants.add("fadeInTime","float",Nn),l.constants.add("fadeOutTime","float",Bn),l.constants.add("incomingTransition","int",0),l.constants.add("outgoingTransition","int",2),l.code.add(u`float fadeIn(float x) {
return smoothstep(0.0, fadeInTime, x);
}
float fadeOut(float x) {
return isinf(fadeOutTime) ? 1.0 : smoothstep(fadeOutTime, 0.0, x);
}
void updateAlphaIf(inout float alpha, bool condition, float newAlpha) {
alpha = condition ? min(alpha, newAlpha) : alpha;
}
vec4 animate(vec4 color) {
float startTime = startEndTime[0];
float endTime = startEndTime[1];
float totalTime = vLastTime - vFirstTime;
float actualFadeOutTime = min(fadeOutTime * speed, trailLength);
float longStreamlineThreshold = (fadeInTime + 1.0) * speed + actualFadeOutTime;
bool longStreamline = totalTime > longStreamlineThreshold;
float totalTimeWithFadeOut = longStreamline && actualFadeOutTime != trailLength ? totalTime : totalTime + actualFadeOutTime;
float fadeOutStartTime = longStreamline ? totalTime - actualFadeOutTime : totalTime;
float originTime =  -vFirstTime;
float actualEndTime = int(vTransitionType) == outgoingTransition ? min(endTime, startTime + vLastTime / speed) : endTime;
vec4 animatedColor = color;
if (speed == 0.0) {
float alpha = getTrailOpacity((totalTimeWithFadeOut - (vTimeStamp - vFirstTime)) / trailLength);
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
animatedColor.a *= alpha;
return animatedColor;
}
float relativeStartTime = mod(startTime, totalTimeWithFadeOut);
float shiftedTimeElapsed = timeElapsed - relativeStartTime + originTime;
float headRelativeToFirst = mod(shiftedTimeElapsed * speed, totalTimeWithFadeOut);
float vRelativeToHead = headRelativeToFirst - originTime - vTimeStamp;
float vAbsoluteTime = timeElapsed - vRelativeToHead / speed;
if (startTime > timeElapsed) {
return vec4(0.0);
}
float alpha = getTrailOpacity(vRelativeToHead / trailLength);
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, int(vTransitionType) != incomingTransition, step(startTime, vAbsoluteTime));
updateAlphaIf(alpha, headRelativeToFirst > fadeOutStartTime, fadeOut((headRelativeToFirst - fadeOutStartTime) / speed));
alpha *= fadeIn(vTimeStamp - vFirstTime);
animatedColor.a *= alpha;
return animatedColor;
}`)}function Gn(a){switch(a){case 2:return"return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;";case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return"return 1.0;"}}const qn=Xe(),Ot=1;function Xn(a){const e=new Oa,{attributes:t,varyings:i,vertex:s,fragment:n}=e,{applyMarkerOffset:o,draped:l,output:r,capType:d,stippleEnabled:c,falloffEnabled:p,roundJoins:x,wireframe:g,innerColorEnabled:y,hasAnimation:S,hasScreenSizePerspective:f,worldSizedImagePattern:b}=a;n.include(ys),e.include(Dn,a),e.include(Mn,a),e.include(fa,a),e.include(ha,a),e.include(Hn,a);const w=o&&!l;w&&(s.uniforms.add(new re("markerScale",m=>m.markerScale)),e.include(kn,{space:2,hasScreenSizePerspective:f})),ma(s,a),s.uniforms.add(new ws("inverseProjectionMatrix",m=>m.camera.inverseProjectionMatrix),new $s("nearFar",m=>m.camera.nearFar),new re("miterLimit",m=>m.join!=="miter"?0:m.miterLimit),new At("viewport",m=>m.camera.fullViewport)),s.constants.add("LARGE_HALF_FLOAT","float",65500),t.add("position","vec3"),t.add("previousDelta","vec4"),t.add("nextDelta","vec4"),t.add("lineParameters","vec2"),t.add("u0","float"),i.add("vColor","vec4"),i.add("vpos","vec3",{invariant:!0}),i.add("vLineDistance","float"),i.add("vLineWidth","float");const v=c;v&&i.add("vLineSizeInv","float");const O=d===2,h=c&&O,P=p||h;P&&i.add("vLineDistanceNorm","float"),O&&(i.add("vSegmentSDF","float"),i.add("vReverseSegmentSDF","float")),s.code.add(u`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),s.code.add(u`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),s.code.add(u`void clip(
inout vec4 pos,
inout vec4 prev,
inout vec4 next,
bool isStartVertex
) {
float vnp = nearFar[0] * 0.99;
if (pos.z > -nearFar[0]) {
if (!isStartVertex) {
if (prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if (next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
}`),nt(s),s.constants.add("aaWidth","float",c?0:1).main.add(u`
    // unpack values from vertex type
    bool isStartVertex = abs(abs(lineParameters.y) - 3.0) == 1.0;
    vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
    vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${Da};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);

      bool isJoin = abs(lineParameters.y) < 3.0;
  `),w&&s.main.add(u`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),e.include(Vn),s.main.add(u`
      clip(pos, prev, next, isStartVertex);

      vec3 clippedPos = pos.xyz;
      vec3 clippedCenter = mix(pos.xyz, isStartVertex ? next.xyz : prev.xyz, 0.5);

      forwardViewPosDepth(pos.xyz);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);

      vec2 left = (pos.xy - prev.xy);
      vec2 right = (next.xy - pos.xy);

      float leftLen = length(left);
      float rightLen = length(right);

      float lineSize = getSize(${E(f,"clippedPos")});
      ${E(c&&f,"float patternLineSize = getSize(clippedCenter);")}
      ${E(c&&!f,"float patternLineSize = lineSize;")}

      ${E(b,u`
          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio * worldToScreenRatio;
          if (lineWidth < 1.0) {
            coverage = lineWidth;
            lineWidth = 1.0;
          }
        `,u`
          if (lineSize < 1.0) {
            coverage = lineSize; // convert sub-pixel coverage to alpha
            lineSize = 1.0;
          }

          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio;
        `)}

      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${v?u`vLineSizeInv = noPerspectiveWrite(1.0 / lineSize, pos.w);`:""}
  `),(c||O)&&s.main.add(u`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${O?u`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),s.main.add(u`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * lineParameters.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
float subdivisionFactor = lineParameters.x;
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),x?s.main.add(u`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${c?u`min(1.0, subdivisionFactor * ${u.float((Ot+2)/(Ot+1))})`:u`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):s.main.add(u`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);const _=d!==0;return s.main.add(u`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${_?u`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),s.main.add(u`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(lineParameters.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = noPerspectiveWrite(sign(lineParameters.y), pos.w);

    vLineDistance = lineWidth * lineDistNorm;
    ${P?u`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),O&&s.main.add(u`vec2 segmentDir = normalize(segment);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir)), pos.w);`),c&&(l?s.uniforms.add(new qe("worldToScreenRatio",m=>1/m.screenToPCSRatio)):s.main.add(u`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),s.main.add(u`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),l?s.main.add(u`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):s.main.add(u`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),s.uniforms.add(new re("stipplePatternPixelSize",m=>Aa(m))),s.main.add(u`
      float patternLength = patternLineSize * stipplePatternPixelSize;

      ${E(b,u`
          float uu = mix(u0, u0 - segmentLengthRender, isEndVertex);
          vStippleDistanceLimits = vec2(uu, uu + segmentLengthRender);
          vStipplePatternStretch = 1.0;

          // The v-coordinate used in case of an image pattern.
          bool isLeft = sign(lineParameters.y) < 0.0;
          vStippleV = isLeft ? 0.0 : 1.0;
        `,u`
          // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the
          // fragment shader
          vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
        `)}

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of
      // joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1]
        // at the original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen
      // distance
      vStippleDistanceLimits = noPerspectiveWrite(vStippleDistanceLimits, pos.w);
      vStippleDistance = noPerspectiveWrite(vStippleDistance, pos.w);

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e34, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e34);
    `)),s.main.add(u`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a * coverage, pos.w);

      ${g&&!l?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),e.fragment.include(Ps,a),e.include(_s,a),n.include(va),n.main.add(u`discardBySlice(vpos);
discardByTerrainDepth();`),e.include(Yt),n.main.add(u`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${E(P,u`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),g?n.main.add(u`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(O&&n.main.add(u`
        float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
        vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${u.float(ne)}) {
          discard;
        }
      `),h?n.main.add(u`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        lineDistanceNorm
      );
      float stippleRadius = length(stipplePosition * lineWidth);
      float stippleCapSDF = (stippleRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${u.float(ne)}, stippleCoverage);
      `):n.main.add(u`float stippleAlpha = getStippleAlpha(lineWidth);`),r!==9&&n.main.add(u`discardByStippleAlpha(stippleAlpha, ${u.float(ne)});`),e.include(Yt),n.uniforms.add(new ke("intrinsicColor",m=>m.color)).main.add(u`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),y&&n.uniforms.add(new ke("innerColor",m=>m.innerColor??m.color),new re("innerWidth",(m,R)=>m.innerWidth*R.camera.pixelRatio)).main.add(u`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),n.main.add(u`vec4 finalColor = blendStipple(color, stippleAlpha);`),p&&(n.uniforms.add(new re("falloff",m=>m.falloff)),n.main.add(u`finalColor.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),c||n.main.add(u`float featherStartDistance = max(lineWidth - 2.0, 0.0);
float value = abs(lineDistance);
float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`),S&&n.main.add(u`
        finalColor = animate(finalColor);

        ${E(r!==9,u`
            if (finalColor.a <= ${u.float(ne)}) {
              discard;
            }`)}
      `)),n.main.add(u`outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),e}const Jn=Object.freeze(Object.defineProperty({__proto__:null,build:Xn,ribbonlineNumRoundJoinSubdivisions:Ot},Symbol.toStringTag,{value:"Module"}));let Qt=class extends ga{constructor(e,t){super(e,t,Jt(Va(t))),this.shader=new Sa(Jn,()=>sa(()=>import("./HUDMaterial.glsl-h3pIO9WD.js").then(i=>i.R),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]))),this.primitiveType=t.wireframe?_t.LINES:_t.TRIANGLE_STRIP}_makePipelineState(e,t){const{oitPass:i,output:s,hasEmission:n,hasOccludees:o,hasPolygonOffset:l}=e,r=i===0,d=i===2;return Ke({blending:Fe(s)?xa(i):null,depthTest:As(i),depthWrite:Cs(e),drawBuffers:ut(s,ba(i,n)),colorWrite:bt,stencilWrite:o?xi:null,stencilTest:o?t?bi:zs:null,polygonOffset:r||d?l?Mi:null:Os})}initializePipeline(e){if(e.occluder){const t=e.hasPolygonOffset?Mi:null,{output:i,hasOccludees:s}=e;this._occluderPipelineTransparent=Ke({blending:Ti,polygonOffset:t,depthTest:yi,depthWrite:null,colorWrite:bt,stencilWrite:null,stencilTest:s?Ts:null,drawBuffers:ut(i)}),this._occluderPipelineOpaque=Ke({blending:Ti,polygonOffset:t,depthTest:s?yi:wi,depthWrite:null,colorWrite:bt,stencilWrite:s?Vs:null,stencilTest:s?Ds:null,drawBuffers:ut(i)}),this._occluderPipelineMaskWrite=Ke({blending:null,polygonOffset:t,depthTest:wi,depthWrite:null,colorWrite:null,stencilWrite:s?xi:null,stencilTest:s?bi:null,drawBuffers:ut(i)})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){if(t)return this._occludeePipeline;switch(e.occluder){case 12:return this._occluderPipelineTransparent??super.getPipeline(e);case 11:return this._occluderPipelineOpaque??super.getPipeline(e);default:e.occluder;case void 0:case null:return this._occluderPipelineMaskWrite??super.getPipeline(e)}}};Qt=A([na("esri.views.3d.webgl-engine.shaders.RibbonLineTechnique")],Qt);const Mi={factor:0,units:-4};function Va(a){const e=ni().vec3f("position").vec4f16("previousDelta").vec4f16("nextDelta").f32("u0").vec2f16("lineParameters");return a.hasVVColor?e.f32("colorFeatureAttribute"):e.vec4u8("color",{glNormalized:!0}),a.hasVVSize?e.f32("sizeFeatureAttribute"):e.f32("size"),a.hasVVOpacity&&e.f32("opacityFeatureAttribute"),ai()&&e.vec4u8("olidColor"),a.hasAnimation&&e.vec4f16("timeStamps"),e}let j=class extends ya{constructor(e){super(),this.spherical=e,this.capType=0,this.emissionSource=0,this.animation=2,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.hasScreenSizePerspective=!1,this.worldSizedImagePattern=!1,this.textureCoordinateType=0,this.occlusionPass=!1,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1}get hasAnimation(){return this.animation!==0}};A([D({count:3})],j.prototype,"capType",void 0),A([D({count:8})],j.prototype,"emissionSource",void 0),A([D({count:4})],j.prototype,"animation",void 0),A([D()],j.prototype,"hasPolygonOffset",void 0),A([D()],j.prototype,"writeDepth",void 0),A([D()],j.prototype,"draped",void 0),A([D()],j.prototype,"stippleEnabled",void 0),A([D()],j.prototype,"stippleOffColorEnabled",void 0),A([D()],j.prototype,"stipplePreferContinuous",void 0),A([D()],j.prototype,"roundJoins",void 0),A([D()],j.prototype,"applyMarkerOffset",void 0),A([D()],j.prototype,"hasVVSize",void 0),A([D()],j.prototype,"hasVVColor",void 0),A([D()],j.prototype,"hasVVOpacity",void 0),A([D()],j.prototype,"falloffEnabled",void 0),A([D()],j.prototype,"innerColorEnabled",void 0),A([D()],j.prototype,"hasOccludees",void 0),A([D()],j.prototype,"occluder",void 0),A([D()],j.prototype,"terrainDepthTest",void 0),A([D()],j.prototype,"cullAboveTerrain",void 0),A([D()],j.prototype,"wireframe",void 0),A([D()],j.prototype,"discardInvisibleFragments",void 0),A([D()],j.prototype,"hasScreenSizePerspective",void 0),A([D()],j.prototype,"worldSizedImagePattern",void 0);let Yn=class extends wa{constructor(e,t){super(e,Kn),this.produces=new Map([[2,i=>Rs(i)||Fe(i)&&this.parameters.renderOccluded===8],[3,i=>Es(i)],[11,i=>$i(i)&&this.parameters.renderOccluded===8],[12,i=>$i(i)&&this.parameters.renderOccluded===8],[4,i=>Fe(i)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[9,i=>Fe(i)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[20,i=>Fs(i)]]),this._configuration=new j(t)}getConfiguration(e,t){super.getConfiguration(e,t,this._configuration);const i=t.slot===20,s=this.parameters.stipplePattern!=null&&this.parameters.stippleTexture!=null&&e!==8,n=s&&i&&this.parameters.isImagePattern();return this._configuration.draped=i,this._configuration.stippleEnabled=s,this._configuration.stippleOffColorEnabled=s&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=s&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&eo(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=t.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===8,this._configuration.terrainDepthTest=t.terrainDepthTest&&Fe(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=this.hasEmissions?1:0,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective&&!n,this._configuration.worldSizedImagePattern=n,this._configuration}get visible(){var e;return this.parameters.color[3]>=ne||this.parameters.stipplePattern!=null&&(((e=this.parameters.stippleOffColor)==null?void 0:e[3])??0)>ne}setParameters(e,t){e.animation=this.parameters.animation,super.setParameters(e,t)}intersectDraped({attributes:e,screenToWorldRatio:t},i,s,n,o){if(!i.options.selectionMode)return;const l=e.get("size");let r=this.parameters.width;if(this.parameters.vvSize){const f=e.get("sizeFeatureAttribute").data[0];Number.isNaN(f)?r*=this.parameters.vvSize.fallback[0]:r*=St(this.parameters.vvSize.offset[0]+f*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else l&&(r*=l.data[0]);const d=s[0],c=s[1],p=(r/2+4)*t;let x=Number.MAX_VALUE,g=0;const y=e.get("position").data,S=Kt(this.parameters,e)?y.length-2:y.length-5;for(let f=0;f<S;f+=3){const b=y[f],w=y[f+1],v=(f+3)%y.length,O=d-b,h=c-w,P=y[v]-b,_=y[v+1]-w,m=St((P*O+_*h)/(P*P+_*_),0,1),R=P*m-O,$=_*m-h,L=R*R+$*$;L<x&&(x=L,g=f/3)}x<p*p&&n(o.distance,o.normal,g)}intersect(e,t,i,s,n,o){const{options:l,camera:r,rayBegin:d,rayEnd:c}=i;if(!l.selectionMode||!e.visible||!r)return;if(!rn(t))return void oa.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const p=e.attributes,x=p.get("position").data;let g=this.parameters.width;if(this.parameters.vvSize){const v=p.get("sizeFeatureAttribute").data[0];Number.isNaN(v)||(g*=St(this.parameters.vvSize.offset[0]+v*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0]))}else p.has("size")&&(g*=p.get("size").data[0]);const y=to;ra(y,i.point);const S=g*r.pixelRatio/2+4*r.pixelRatio;K(Ye[0],y[0]-S,y[1]+S,0),K(Ye[1],y[0]+S,y[1]+S,0),K(Ye[2],y[0]+S,y[1]-S,0),K(Ye[3],y[0]-S,y[1]-S,0);for(let v=0;v<4;v++)if(!r.unprojectFromRenderScreen(Ye[v],Oe[v]))return;ft(r.eye,Oe[0],Oe[1],Rt),ft(r.eye,Oe[1],Oe[2],Et),ft(r.eye,Oe[2],Oe[3],Ft),ft(r.eye,Oe[3],Oe[0],Lt);let f=Number.MAX_VALUE,b=0;const w=Kt(this.parameters,p)?x.length-2:x.length-5;for(let v=0;v<w;v+=3){te[0]=x[v]+t[12],te[1]=x[v+1]+t[13],te[2]=x[v+2]+t[14];const O=(v+3)%x.length;if(ie[0]=x[O]+t[12],ie[1]=x[O+1]+t[13],ie[2]=x[O+2]+t[14],$e(Rt,te)<0&&$e(Rt,ie)<0||$e(Et,te)<0&&$e(Et,ie)<0||$e(Ft,te)<0&&$e(Ft,ie)<0||$e(Lt,te)<0&&$e(Lt,ie)<0)continue;const h=r.projectToRenderScreen(te,io),P=r.projectToRenderScreen(ie,ao);if(h==null||P==null)continue;if(h[2]<0&&P[2]>0){se(Pe,te,ie);const m=r.frustum,R=-$e(m[4],te)/tt(Pe,Ai(m[4]));if(q(Pe,Pe,R),Y(te,te,Pe),!r.projectToRenderScreen(te,h))continue}else if(h[2]>0&&P[2]<0){se(Pe,ie,te);const m=r.frustum,R=-$e(m[4],ie)/tt(Pe,Ai(m[4]));if(q(Pe,Pe,R),Y(ie,ie,Pe),!r.projectToRenderScreen(ie,P))continue}else if(h[2]<0&&P[2]<0)continue;h[2]=0,P[2]=0;const _=sn(Dt(h,P,Ii),y);_<f&&(f=_,B(ji,te),B(Wi,ie),b=v/3)}if(f<S*S){let v=Number.MAX_VALUE;if(nn(Dt(ji,Wi,Ii),Dt(d,c,so),De)){se(De,De,d);const O=it(De);q(De,De,1/O),v=O/at(d,c)}o(v,De,b)}}get hasEmissions(){return this.parameters.emissiveStrength>0}createBufferWriter(){return new Zn(Va(this.parameters),this.parameters)}createGLMaterial(e){return new Qn(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}update(e){return!!this.parameters.hasAnimation&&(this.setParameters({timeElapsed:ts(e.time)},!1),e.dt!==0)}};class Qn extends Ms{constructor(){super(...arguments),this._stipplePattern=null}dispose(){var e;super.dispose(),(e=this._stippleTextures)==null||e.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const{stipplePattern:t}=this._material.parameters;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(Qt,e)}}let Kn=class extends Ls{constructor(){super(...arguments),this._width=0,this.color=la,this.join="miter",this.cap=0,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=Ze(0),this.animation=0,this.animationSpeed=1,this.trailLength=1,this.startTime=Ze(0),this.endTime=Ze(1/0),this.emissiveStrength=0}get width(){return this.isImagePattern()?this.stipplePattern.width:this._width}set width(e){this._width=e}get transparent(){var e;return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(((e=this.stippleOffColor)==null?void 0:e[3])??0)<1}get hasAnimation(){return this.animation!==0}isImagePattern(){return Ca(this.stipplePattern)&&this.stippleTexture!=null}},Zn=class{constructor(e,t){this.layout=e,this._parameters=t;const i=t.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=i;break;case"round":this.numJoinSubdivisions=Ot+i}}_isClosed(e){return Kt(this._parameters,e)}allocate(e){return this.layout.createBuffer(e)}elementCount(e){const i=e.get("position").indices.length/2+1,s=this._isClosed(e);let n=s?2:4;return n+=((s?i:i-1)-(s?0:1))*(2*this.numJoinSubdivisions+4),n+=2,this._parameters.wireframe&&(n=2+4*(n-2)),n}write(e,t,i,s,n,o){var rt,li,ci,di;const l=this.layout,r=i.get("position"),d=r.indices,c=r.data.length/3,p=(rt=i.get("distanceToStart"))==null?void 0:rt.data;d&&d.length!==2*(c-1)&&console.warn("RibbonLineMaterial does not support indices");const x=l.fields.has("sizeFeatureAttribute");let g=1,y=null;if(x){const F=i.get("sizeFeatureAttribute");F.data.length===1?g=F.data[0]:y=F.data}else g=((li=i.get("size"))==null?void 0:li.data[0])??1;let S=[1,1,1,1],f=0,b=null;const w=l.fields.has("colorFeatureAttribute");if(w){const F=i.get("colorFeatureAttribute");F.data.length===1?f=F.data[0]:b=F.data}else S=((ci=i.get("color"))==null?void 0:ci.data)??S;const v=(di=i.get("timeStamps"))==null?void 0:di.data,O=v&&l.fields.has("timeStamps"),h=l.fields.has("opacityFeatureAttribute");let P=0,_=null;if(h){const F=i.get("opacityFeatureAttribute");F.data.length===1?P=F.data[0]:_=F.data}const m=new Float32Array(n.buffer),R=_a(n.buffer),$=new Uint8Array(n.buffer),L=l.stride/4;let z=o*L;const we=z;let N=0;const ve=p?(F,Se,Ae)=>N=p[Ae]:(F,Se,Ae)=>N+=at(F,Se),de=m.BYTES_PER_ELEMENT/R.BYTES_PER_ELEMENT,Ce=4/de,C=ai(),X=(F,Se,Ae,pe,lt,Ba,ct,Na)=>{m[z++]=Se[0],m[z++]=Se[1],m[z++]=Se[2],Pi(F,Se,R,z*de),z+=Ce,Pi(Ae,Se,R,z*de),z+=Ce,m[z++]=Na;let _e=z*de;if(R[_e++]=lt,R[_e++]=Ba,z=Math.ceil(_e/de),w)m[z]=(b==null?void 0:b[ct])??f;else{const le=Math.min(4*ct,S.length-4),dt=4*z;$[dt]=255*S[le],$[dt+1]=255*S[le+1],$[dt+2]=255*S[le+2],$[dt+3]=255*S[le+3]}if(z++,m[z++]=(y==null?void 0:y[ct])??g,h&&(m[z++]=(_==null?void 0:_[ct])??P),C){let le=4*z;s?($[le++]=s[0],$[le++]=s[1],$[le++]=s[2],$[le++]=s[3]):($[le++]=0,$[le++]=0,$[le++]=0,$[le++]=0),z=Math.ceil(.25*le)}O&&(_e=z*de,R[_e++]=pe[0],R[_e++]=pe[1],R[_e++]=pe[2],R[_e++]=pe[3],z=Math.ceil(_e/de))};z+=L,K(M,r.data[0],r.data[1],r.data[2]),O&&gt(ae,v[0],v[1],v[2],v[3]),e&&oe(M,M,e);const Z=this._isClosed(i);if(Z){const F=r.data.length-3;K(H,r.data[F],r.data[F+1],r.data[F+2]),e&&oe(H,H,e)}else K(I,r.data[3],r.data[4],r.data[5]),e&&oe(I,I,e),X(M,M,I,ae,1,-4,0,0),X(M,M,I,ae,1,4,0,0),B(H,M),B(M,I),O&&gt(ae,v[4],v[5],v[6],v[7]);const ue=Z?0:1,ge=Z?c:c-1;for(let F=ue;F<ge;F++){const Se=(F+1)%c*3;K(I,r.data[Se],r.data[Se+1],r.data[Se+2]),e&&oe(I,I,e),ve(H,M,F),X(H,M,I,ae,0,-1,F,N),X(H,M,I,ae,0,1,F,N);const Ae=this.numJoinSubdivisions;for(let pe=0;pe<Ae;++pe){const lt=(pe+1)/(Ae+1);X(H,M,I,ae,lt,-1,F,N),X(H,M,I,ae,lt,1,F,N)}if(X(H,M,I,ae,1,-2,F,N),X(H,M,I,ae,1,2,F,N),B(H,M),B(M,I),O){const pe=(F+1)%c*4;gt(ae,v[pe],v[pe+1],v[pe+2],v[pe+3])}}return Z?(K(I,r.data[3],r.data[4],r.data[5]),e&&oe(I,I,e),N=ve(H,M,ge),X(H,M,I,ae,0,-1,ue,N),X(H,M,I,ae,0,1,ue,N)):(N=ve(H,M,ge),X(H,M,M,ae,0,-5,ge,N),X(H,M,M,ae,0,5,ge,N)),Vt(m,we+L,m,we,L),z=Vt(m,z-L,m,z,L),this._parameters.wireframe&&this._addWireframeVertices(n,we,z,L),null}_addWireframeVertices(e,t,i,s){const n=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),o=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,i-t);let l=0;const r=d=>l=Vt(o,d,n,l,s);for(let d=0;d<o.length-1;d+=2*s)r(d),r(d+2*s),r(d+1*s),r(d+2*s),r(d+1*s),r(d+3*s)}};function Vt(a,e,t,i,s){for(let n=0;n<s;n++)t[i++]=a[e++];return i}function Kt(a,e){return a.isClosed?e.get("position").indices.length>2:!1}function eo(a){return a.anchor===1&&a.hideOnShortSegments&&a.placement==="begin-end"&&a.worldSpace}const te=V(),ie=V(),Pe=V(),De=V(),to=V(),io=We(),ao=We(),ji=V(),Wi=V(),Ii=Pa(),so=Pa(),H=V(),M=V(),I=V(),ae=st(),Ye=[We(),We(),We(),We()],Oe=[V(),V(),V(),V()],Rt=ot(),Et=ot(),Ft=ot(),Lt=ot();let Yr=class{constructor(e){this._originSR=e,this._rootOriginId="root/"+ei(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5,this._baselineDistance=.5*this._gridSize;const t=this._baselineDistance*no;this._baselineObjectSize=t/oo}getOrigin(e){const t=this._origins.get(this._rootOriginId);if(t==null){const c=Ei(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,c),c}const i=this._gridSize,s=Math.round(e[0]/i),n=Math.round(e[1]/i),o=Math.round(e[2]/i),l=`${s}/${n}/${o}`;let r=this._origins.get(l);const d=.5*i;if(se(k,e,t.vec3),k[0]=Math.abs(k[0]),k[1]=Math.abs(k[1]),k[2]=Math.abs(k[2]),k[0]<d&&k[1]<d&&k[2]<d){if(r){const c=Math.max(...k);if(se(k,e,r.vec3),k[0]=Math.abs(k[0]),k[1]=Math.abs(k[1]),k[2]=Math.abs(k[2]),Math.max(...k)<c)return r}return t}return r||(r=Ei(s*i,n*i,o*i,l),this._origins.set(l,r)),r}needsOriginUpdate(e,t,i){const s=at(e.vec3,t),n=Math.max(1,i/this._baselineObjectSize);return s>this._baselineDistance*n}_drawOriginBox(e,t=is(1,1,0,1)){const i=window.view,s=i.stage,n=t.toString();if(!this._objects.has(n)){this._material=new Yn({width:2,color:t},!1);const g=new Pn(s,{pickable:!1}),y=new xn({castShadow:!1});g.add(y),this._objects.set(n,y)}const o=this._objects.get(n),l=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],r=l.length,d=new Array(3*r),c=new Array,p=.5*this._gridSize;for(let g=0;g<r;g++)d[3*g]=e[0]+(1&l[g]?p:-p),d[3*g+1]=e[1]+(2&l[g]?p:-p),d[3*g+2]=e[2]+(4&l[g]?p:-p),g>0&&c.push(g-1,g);Ht(d,this._originSR,0,d,i.renderSpatialReference,0,r);const x=new me(this._material,[["position",new T(d,c,3,!0)]],null,2);o.addGeometry(x)}get test(){}};const k=V(),no=2**-23,oo=.05;function ro(a,e=!1){return a<=as?e?new Array(a).fill(0):new Array(a):_a(a)}function Kr(a,e,t=null){const i=[],s=e.mapPositions,n=lo(e,i),o=n.data,l=n.indices.length,r=oi(l);return co(e,i,r),fo(e,i,r),uo(e,i,r),po(e,i,n.indices,r),ho(e,i,n.indices,r),mo(e,i),vo(e,i,n.indices,r),go(e,i,o),new me(a,i,s,2,t)}function lo(a,e){const{attributeData:{position:t},removeDuplicateStartEnd:i}=a,s=So(t)&&i,n=t.length/3-(s?1:0),o=new Array(2*(n-1)),l=s?t.slice(0,-3):t;let r=0;for(let c=0;c<n-1;c++)o[r++]=c,o[r++]=c+1;const d=new T(l,o,3,s);return e.push(["position",d]),d}function co(a,e,t){if(a.attributeData.colorFeature!=null)return;const i=a.attributeData.color;e.push(["color",new T(i??la,t,4)])}function uo(a,e,t){a.attributeData.normal&&e.push(["normal",new T(a.attributeData.normal,t,3)])}function po(a,e,t,i){const s=a.attributeData.colorFeature;s!=null&&(typeof s=="number"?e.push(["colorFeatureAttribute",new T([s],i,1,!0)]):e.push(["colorFeatureAttribute",new T(s,t,1,!0)]))}function fo(a,e,t){a.attributeData.sizeFeature==null&&e.push(["size",new T([a.attributeData.size??1],t,1,!0)])}function ho(a,e,t,i){const s=a.attributeData.sizeFeature;s!=null&&(typeof s=="number"?e.push(["sizeFeatureAttribute",new T([s],i,1,!0)]):e.push(["sizeFeatureAttribute",new T(s,t,1,!0)]))}function mo(a,e){const{attributeData:{position:t,timeStamps:i}}=a;if(!i)return;const s=t.length/3,n=new Array(2*(s-1));let o=0;for(let l=0;l<s-1;l++)n[o++]=l,n[o++]=l+1;e.push(["timeStamps",new T(i,n,Ee,!0)])}function vo(a,e,t,i){const s=a.attributeData.opacityFeature;s!=null&&(typeof s=="number"?e.push(["opacityFeatureAttribute",new T([s],i,1,!0)]):e.push(["opacityFeatureAttribute",new T(s,t,1,!0)]))}function go(a,e,t){if(a.overlayInfo==null||a.overlayInfo.renderCoordsHelper.viewingMode!==1||!a.overlayInfo.spatialReference.isGeographic)return;const i=ca(t.length),s=ss(a.overlayInfo.spatialReference);for(let p=0;p<i.length;p+=3)ns(t,p,i,p,s);const n=t.length/3,o=be(n+1);let l=bo,r=xo,d=0,c=0;Ge(l,i[c++],i[c++]),c++,o[0]=0;for(let p=1;p<n+1;++p)p===n&&(c=0),Ge(r,i[c++],i[c++]),c++,d+=os(l,r),o[p]=d,[l,r]=[r,l];e.push(["distanceToStart",new T(o,e[0][1].indices,1,!0)])}function So(a){const e=a.length;return a[0]===a[e-3]&&a[1]===a[e-2]&&a[2]===a[e-1]}const bo=Xe(),xo=Xe(),Ee=4;function yo(a,e){const t=ro(a.length*Ee),i=a[0],s=a[a.length-1];for(let n=0;n<a.length;n++)t[n*Ee]=a[n],t[n*Ee+1]=i,t[n*Ee+2]=s,t[n*Ee+3]=e+.5;return t}function Ui(a,e){const t=a[e],i=a[e+1],s=a[e+2];return Math.sqrt(t*t+i*i+s*s)}function wo(a,e){const t=a[e],i=a[e+1],s=a[e+2],n=1/Math.sqrt(t*t+i*i+s*s);a[e]*=n,a[e+1]*=n,a[e+2]*=n}function ki(a,e,t){a[e]*=t,a[e+1]*=t,a[e+2]*=t}function $o(a,e,t,i,s,n=e){(s=s||a)[n]=a[e]+t[i],s[n+1]=a[e+1]+t[i+1],s[n+2]=a[e+2]+t[i+2]}function Po(){return Bi??(Bi=_o()),Bi}function _o(){const t=new T([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0);return new js([["uv0",t]])}let Bi=null;const Mt=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Oo=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],zo=[0,0,1,0,1,1,0,1],Co=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ra=new Array(36);for(let a=0;a<6;a++)for(let e=0;e<6;e++)Ra[6*a+e]=a;const Re=new Array(36);for(let a=0;a<6;a++)Re[6*a]=0,Re[6*a+1]=1,Re[6*a+2]=2,Re[6*a+3]=2,Re[6*a+4]=3,Re[6*a+5]=0;function Zr(a,e){Array.isArray(e)||(e=[e,e,e]);const t=new Array(24);for(let i=0;i<8;i++)t[3*i]=Mt[i][0]*e[0],t[3*i+1]=Mt[i][1]*e[1],t[3*i+2]=Mt[i][2]*e[2];return new me(a,[["position",new T(t,Co,3,!0)],["normal",new T(Oo,Ra,3)],["uv0",new T(zo,Re,2)]])}const jt=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],Ao=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],To=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Do=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function el(a,e){Array.isArray(e)||(e=[e,e,e]);const t=new Array(18);for(let i=0;i<6;i++)t[3*i]=jt[i][0]*e[0],t[3*i+1]=jt[i][1]*e[1],t[3*i+2]=jt[i][2]*e[2];return new me(a,[["position",new T(t,To,3,!0)],["normal",new T(Ao,Do,3)]])}const xt=U(-.5,0,-.5),yt=U(.5,0,-.5),wt=U(0,0,.5),$t=U(0,.5,0),Le=ye(),Me=ye(),Be=ye(),Ne=ye(),He=ye();se(Le,xt,$t),se(Me,xt,yt),ze(Be,Le,Me),Q(Be,Be),se(Le,yt,$t),se(Me,yt,wt),ze(Ne,Le,Me),Q(Ne,Ne),se(Le,wt,$t),se(Me,wt,xt),ze(He,Le,Me),Q(He,He);const Wt=[xt,yt,wt,$t],Vo=[0,-1,0,Be[0],Be[1],Be[2],Ne[0],Ne[1],Ne[2],He[0],He[1],He[2]],Ro=[0,1,2,3,1,0,3,2,1,3,0,2],Eo=[0,0,0,1,1,1,2,2,2,3,3,3];function tl(a,e){Array.isArray(e)||(e=[e,e,e]);const t=new Array(12);for(let i=0;i<4;i++)t[3*i]=Wt[i][0]*e[0],t[3*i+1]=Wt[i][1]*e[1],t[3*i+2]=Wt[i][2]*e[2];return new me(a,[["position",new T(t,Ro,3,!0)],["normal",new T(Vo,Eo,3)]])}function il(a,e,t,i,s={uv:!0}){const n=-Math.PI,o=2*Math.PI,l=-Math.PI/2,r=Math.PI,d=Math.max(3,Math.floor(t)),c=Math.max(2,Math.floor(i)),p=(d+1)*(c+1),x=be(3*p),g=be(3*p),y=be(2*p),S=[];let f=0;for(let v=0;v<=c;v++){const O=[],h=v/c,P=l+h*r,_=Math.cos(P);for(let m=0;m<=d;m++){const R=m/d,$=n+R*o,L=Math.cos($)*_,z=Math.sin(P),we=-Math.sin($)*_;x[3*f]=L*e,x[3*f+1]=z*e,x[3*f+2]=we*e,g[3*f]=L,g[3*f+1]=z,g[3*f+2]=we,y[2*f]=R,y[2*f+1]=h,O.push(f),++f}S.push(O)}const b=new Array;for(let v=0;v<c;v++)for(let O=0;O<d;O++){const h=S[v][O],P=S[v][O+1],_=S[v+1][O+1],m=S[v+1][O];v===0?(b.push(h),b.push(_),b.push(m)):v===c-1?(b.push(h),b.push(P),b.push(_)):(b.push(h),b.push(P),b.push(_),b.push(_),b.push(m),b.push(h))}const w=[["position",new T(x,b,3,!0)],["normal",new T(g,b,3,!0)]];return s.uv&&w.push(["uv0",new T(y,b,2,!0)]),s.offset&&(w[0][0]="offset",w.push(["position",new T(Float64Array.from(s.offset),oi(b.length),3,!0)])),new me(a,w)}function al(a,e,t,i){const s=Fo(e,t);return new me(a,s)}function Fo(a,e,t){let i,s;i=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],s=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let r=0;r<i.length;r+=3)ki(i,r,a/Ui(i,r));let n={};function o(r,d){r>d&&([r,d]=[d,r]);const c=r.toString()+"."+d.toString();if(n[c])return n[c];let p=i.length;return i.length+=3,$o(i,3*r,i,3*d,i,p),ki(i,p,a/Ui(i,p)),p/=3,n[c]=p,p}for(let r=0;r<e;r++){const d=s.length,c=new Array(4*d);for(let p=0;p<d;p+=3){const x=s[p],g=s[p+1],y=s[p+2],S=o(x,g),f=o(g,y),b=o(y,x),w=4*p;c[w]=x,c[w+1]=S,c[w+2]=b,c[w+3]=g,c[w+4]=f,c[w+5]=S,c[w+6]=y,c[w+7]=b,c[w+8]=f,c[w+9]=S,c[w+10]=f,c[w+11]=b}s=c,n={}}const l=_i(i);for(let r=0;r<l.length;r+=3)wo(l,r);return[["position",new T(_i(i),s,3,!0)],["normal",new T(l,s,3,!0)]]}function sl(a,{normal:e,position:t,color:i,rotation:s,size:n,centerOffsetAndDistance:o,uvi:l,featureAttribute:r,olidColor:d=null}={}){const c=t?fi(t):V(),p=e?fi(e):et(0,0,1),x=i?[i[0],i[1],i[2],i.length>3?i[3]:255]:[255,255,255,255],g=n!=null&&n.length===2?n:[1,1],y=s!=null?[s]:[0],S=oi(1),f=[["position",new T(c,S,3,!0)],["normal",new T(p,S,3,!0)],["color",new T(x,S,4,!0)],["size",new T(g,S,2)],["rotation",new T(y,S,1,!0)]];if(l&&f.push(["uvi",new T(l,S,l.length)]),o!=null){const b=[o[0],o[1],o[2],o[3]];f.push(["centerOffsetAndDistance",new T(b,S,4)])}if(r){const b=[r[0],r[1],r[2],r[3]];f.push(["featureAttribute",new T(b,S,4)])}return new me(a,f,null,1,d,void 0,Po())}function Lo(a,e,t,i,s=!0,n=!0){let o=0;const l=e,r=a;let d=U(0,o,0),c=U(0,o+r,0),p=U(0,-1,0),x=U(0,1,0);i&&(o=r,c=U(0,0,0),d=U(0,o,0),p=U(0,1,0),x=U(0,-1,0));const g=[c,d],y=[p,x],S=t+2,f=Math.sqrt(r*r+l*l);if(i)for(let h=t-1;h>=0;h--){const P=h*(2*Math.PI/t),_=U(Math.cos(P)*l,o,Math.sin(P)*l);g.push(_);const m=U(r*Math.cos(P)/f,-l/f,r*Math.sin(P)/f);y.push(m)}else for(let h=0;h<t;h++){const P=h*(2*Math.PI/t),_=U(Math.cos(P)*l,o,Math.sin(P)*l);g.push(_);const m=U(r*Math.cos(P)/f,l/f,r*Math.sin(P)/f);y.push(m)}const b=new Array,w=new Array;if(s){for(let h=3;h<g.length;h++)b.push(1),b.push(h-1),b.push(h),w.push(0),w.push(0),w.push(0);b.push(g.length-1),b.push(2),b.push(1),w.push(0),w.push(0),w.push(0)}if(n){for(let h=3;h<g.length;h++)b.push(h),b.push(h-1),b.push(0),w.push(h),w.push(h-1),w.push(1);b.push(0),b.push(2),b.push(g.length-1),w.push(1),w.push(2),w.push(y.length-1)}const v=be(3*S);for(let h=0;h<S;h++)v[3*h]=g[h][0],v[3*h+1]=g[h][1],v[3*h+2]=g[h][2];const O=be(3*S);for(let h=0;h<S;h++)O[3*h]=y[h][0],O[3*h+1]=y[h][1],O[3*h+2]=y[h][2];return[["position",new T(v,b,3,!0)],["normal",new T(O,w,3,!0)]]}function nl(a,e,t,i,s,n=!0,o=!0){return new me(a,Lo(e,t,i,s,n,o))}function ol(a,e,t,i,s,n,o){const l=s?Di(s):U(1,0,0),r=n?Di(n):U(0,0,0);o??(o=!0);const d=ye();Q(d,l);const c=ye();q(c,d,Math.abs(e));const p=ye();q(p,c,-.5),Y(p,p,r);const x=U(0,1,0);Math.abs(1-tt(d,x))<.2&&K(x,0,0,1);const g=ye();ze(g,d,x),Q(g,g),ze(x,g,d);const y=2*i+(o?2:0),S=i+(o?2:0),f=be(3*y),b=be(3*S),w=be(2*y),v=new Array(3*i*(o?4:2)),O=new Array(3*i*(o?4:2));o&&(f[3*(y-2)]=p[0],f[3*(y-2)+1]=p[1],f[3*(y-2)+2]=p[2],w[2*(y-2)]=0,w[2*(y-2)+1]=0,f[3*(y-1)]=f[3*(y-2)]+c[0],f[3*(y-1)+1]=f[3*(y-2)+1]+c[1],f[3*(y-1)+2]=f[3*(y-2)+2]+c[2],w[2*(y-1)]=1,w[2*(y-1)+1]=1,b[3*(S-2)]=-d[0],b[3*(S-2)+1]=-d[1],b[3*(S-2)+2]=-d[2],b[3*(S-1)]=d[0],b[3*(S-1)+1]=d[1],b[3*(S-1)+2]=d[2]);const h=($,L,z)=>{v[$]=L,O[$]=z};let P=0;const _=ye(),m=ye();for(let $=0;$<i;$++){const L=$*(2*Math.PI/i);q(_,x,Math.sin(L)),q(m,g,Math.cos(L)),Y(_,_,m),b[3*$]=_[0],b[3*$+1]=_[1],b[3*$+2]=_[2],q(_,_,t),Y(_,_,p),f[3*$]=_[0],f[3*$+1]=_[1],f[3*$+2]=_[2],w[2*$]=$/i,w[2*$+1]=0,f[3*($+i)]=f[3*$]+c[0],f[3*($+i)+1]=f[3*$+1]+c[1],f[3*($+i)+2]=f[3*$+2]+c[2],w[2*($+i)]=$/i,w[2*$+1]=1;const z=($+1)%i;h(P++,$,$),h(P++,$+i,$),h(P++,z,z),h(P++,z,z),h(P++,$+i,$),h(P++,z+i,z)}if(o){for(let $=0;$<i;$++){const L=($+1)%i;h(P++,y-2,S-2),h(P++,$,S-2),h(P++,L,S-2)}for(let $=0;$<i;$++){const L=($+1)%i;h(P++,$+i,S-1),h(P++,y-1,S-1),h(P++,L+i,S-1)}}const R=[["position",new T(f,v,3,!0)],["normal",new T(b,O,3,!0)],["uv0",new T(w,v,2,!0)]];return new me(a,R)}function rl(a,e,t,i,s,n){i=i||10,s=s==null||s,si(e.length>1);const o=[[0,0,0]],l=[],r=[];for(let d=0;d<i;d++){l.push([0,-d-1,-(d+1)%i-1]);const c=d/i*2*Math.PI;r.push([Math.cos(c)*t,Math.sin(c)*t])}return Mo(a,r,e,o,l,s,n)}function Mo(a,e,t,i,s,n,o=U(0,0,0)){const l=e.length,r=be(t.length*l*3+(6*i.length||0)),d=be(t.length*l*3+(i?6:0)),c=new Array,p=new Array;let x=0,g=0;const y=V(),S=V(),f=V(),b=V(),w=V(),v=V(),O=V(),h=V(),P=V(),_=V(),m=V(),R=V(),$=V(),L=ot();K(P,0,1,0),se(S,t[1],t[0]),Q(S,S),n?(Y(h,t[0],o),Q(f,h)):K(f,0,0,1),Ni(S,f,P,P,w,f,Hi),B(b,f),B(R,w);for(let C=0;C<i.length;C++)q(v,w,i[C][0]),q(h,f,i[C][2]),Y(v,v,h),Y(v,v,t[0]),r[x++]=v[0],r[x++]=v[1],r[x++]=v[2];d[g++]=-S[0],d[g++]=-S[1],d[g++]=-S[2];for(let C=0;C<s.length;C++)c.push(s[C][0]>0?s[C][0]:-s[C][0]-1+i.length),c.push(s[C][1]>0?s[C][1]:-s[C][1]-1+i.length),c.push(s[C][2]>0?s[C][2]:-s[C][2]-1+i.length),p.push(0),p.push(0),p.push(0);let z=i.length;const we=i.length-1;for(let C=0;C<t.length;C++){let X=!1;C>0&&(B(y,S),C<t.length-1?(se(S,t[C+1],t[C]),Q(S,S)):X=!0,Y(_,y,S),Q(_,_),Y(m,t[C-1],b),dn(t[C],_,L),un(L,hn(m,y),h)?(se(h,h,t[C]),Q(f,h),ze(w,_,f),Q(w,w)):Ni(_,b,R,P,w,f,Hi),B(b,f),B(R,w)),n&&(Y(h,t[C],o),Q($,h));for(let Z=0;Z<l;Z++)if(q(v,w,e[Z][0]),q(h,f,e[Z][1]),Y(v,v,h),Q(O,v),d[g++]=O[0],d[g++]=O[1],d[g++]=O[2],Y(v,v,t[C]),r[x++]=v[0],r[x++]=v[1],r[x++]=v[2],!X){const ue=(Z+1)%l;c.push(z+Z),c.push(z+l+Z),c.push(z+ue),c.push(z+ue),c.push(z+l+Z),c.push(z+l+ue);for(let ge=0;ge<6;ge++){const rt=c.length-6;p.push(c[rt+ge]-we)}}z+=l}const N=t[t.length-1];for(let C=0;C<i.length;C++)q(v,w,i[C][0]),q(h,f,i[C][1]),Y(v,v,h),Y(v,v,N),r[x++]=v[0],r[x++]=v[1],r[x++]=v[2];const ve=g/3;d[g++]=S[0],d[g++]=S[1],d[g++]=S[2];const de=z-l;for(let C=0;C<s.length;C++)c.push(s[C][0]>=0?z+s[C][0]:-s[C][0]-1+de),c.push(s[C][2]>=0?z+s[C][2]:-s[C][2]-1+de),c.push(s[C][1]>=0?z+s[C][1]:-s[C][1]-1+de),p.push(ve),p.push(ve),p.push(ve);const Ce=[["position",new T(r,c,3,!0)],["normal",new T(d,p,3,!0)]];return new me(a,Ce)}function ll(a,e,t,i,s){const n=ca(3*e.length),o=new Array(2*(e.length-1));let l=0,r=0;for(let c=0;c<e.length;c++){for(let p=0;p<3;p++)n[l++]=e[c][p];c>0&&(o[r++]=c-1,o[r++]=c)}const d=[["position",new T(n,o,3,!0)]];if((t==null?void 0:t.length)===e.length&&t[0].length===3){const c=be(3*t.length);let p=0;for(let x=0;x<e.length;x++)for(let g=0;g<3;g++)c[p++]=t[x][g];d.push(["normal",new T(c,o,3,!0)])}if(i&&d.push(["color",new T(i,fn(i.length/4),4)]),(s==null?void 0:s.length)===e.length){const c=yo(s,1);d.push(["timeStamps",new T(c,o,Ee,!0)])}return new me(a,d,null,2)}function cl(a,e,t,i,s,n=0){const o=new Array(18),l=[[-t,n,s/2],[i,n,s/2],[0,e+n,s/2],[-t,n,-s/2],[i,n,-s/2],[0,e+n,-s/2]],r=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let d=0;d<6;d++)o[3*d]=l[d][0],o[3*d+1]=l[d][1],o[3*d+2]=l[d][2];return new me(a,[["position",new T(o,r,3,!0)]])}function dl(a,e){const t=a.getMutableAttribute("position").data;for(let i=0;i<t.length;i+=3){const s=t[i],n=t[i+1],o=t[i+2];K(je,s,n,o),oe(je,je,e),t[i]=je[0],t[i+1]=je[1],t[i+2]=je[2]}}function ul(a,e=a){const t=a.attributes,i=t.get("position").data,s=t.get("normal").data;if(s){const n=e.getMutableAttribute("normal").data;for(let o=0;o<s.length;o+=3){const l=s[o+1];n[o+1]=-s[o+2],n[o+2]=l}}if(i){const n=e.getMutableAttribute("position").data;for(let o=0;o<i.length;o+=3){const l=i[o+1];n[o+1]=-i[o+2],n[o+2]=l}}}function It(a,e,t,i,s){return!(Math.abs(tt(e,a))>s)&&(ze(t,a,e),Q(t,t),ze(i,t,a),Q(i,i),!0)}function Ni(a,e,t,i,s,n,o){return It(a,e,s,n,o)||It(a,t,s,n,o)||It(a,i,s,n,o)}const Hi=.99619469809,je=V();function Ea(a){return a.type==="point"}class pl{constructor(e,t=null,i=0){this.array=e,this.spatialReference=t,this.offset=i}}function Fa(a){return"array"in a}function mt(a,e,t="ground"){if(Ea(e))return a.getElevation(e.x,e.y,e.z||0,e.spatialReference,t);if(Fa(e)){let i=e.offset;return a.getElevation(e.array[i++],e.array[i++],e.array[i]||0,e.spatialReference??a.spatialReference,t)}return a.getElevation(e[0],e[1],e[2]||0,a.spatialReference,t)}function fl(a,e,t,i,s,n,o,l,r,d,c){const p=Ho[c.mode];let x,g,y=0;if(Ht(a,e,t,i,r.spatialReference,s,l))return p!=null&&p.requiresAlignment(c)?(y=p.applyElevationAlignmentBuffer(i,s,n,o,l,r,d,c),x=n,g=o):(x=i,g=s),Ht(x,r.spatialReference,g,n,d.spatialReference,o,l)?y:void 0}function La(a,e,t,i,s){const n=(Ea(a)?a.z:Fa(a)?a.array[a.offset+2]:a[2])||0;switch(t.mode){case"on-the-ground":{const o=mt(e,a,"ground")??0;return s.verticalDistanceToGround=0,s.sampledElevation=o,void(s.z=o)}case"relative-to-ground":{const o=mt(e,a,"ground")??0,l=t.geometryZWithOffset(n,i);return s.verticalDistanceToGround=l,s.sampledElevation=o,void(s.z=l+o)}case"relative-to-scene":{const o=mt(e,a,"scene")??0,l=t.geometryZWithOffset(n,i);return s.verticalDistanceToGround=l,s.sampledElevation=o,void(s.z=l+o)}case"absolute-height":{const o=t.geometryZWithOffset(n,i),l=mt(e,a,"ground")??0;return s.verticalDistanceToGround=o-l,s.sampledElevation=l,void(s.z=o)}default:return void(s.z=0)}}function hl(a,e,t,i){return La(a,e,t,i,Ie),Ie.z}function ml(a,e,t){return e==="on-the-ground"&&t==="on-the-ground"?a.staysOnTheGround:e===t||e!=="on-the-ground"&&t!=="on-the-ground"?e==null||t==null?a.definedChanged:1:a.onTheGroundChanged}function vl(a){return a==="relative-to-ground"||a==="relative-to-scene"}function gl(a){return a!=="absolute-height"}function Sl(a,e,t,i,s){La(e,t,s,i,Ie),jo(a,Ie.verticalDistanceToGround);const n=Ie.sampledElevation,o=Nt(Go,a.transformation);return vt[0]=e.x,vt[1]=e.y,vt[2]=Ie.z,mn(e.spatialReference,vt,o,i.spatialReference)?a.transformation=o:console.warn("Could not locate symbol object properly, it might be misplaced"),n}function jo(a,e){for(let t=0;t<a.geometries.length;++t){const i=a.geometries[t].getMutableAttribute("centerOffsetAndDistance");i&&i.data[3]!==e&&(i.data[3]=e,a.geometryVertexAttributeUpdated(a.geometries[t],"centerOffsetAndDistance"))}}function Wo(a,e,t,i,s,n){let o=0;const l=n.spatialReference;e*=3,i*=3;for(let r=0;r<s;++r){const d=a[e],c=a[e+1],p=a[e+2],x=n.getElevation(d,c,p,l,"ground")??0;o+=x,t[i]=d,t[i+1]=c,t[i+2]=x,e+=3,i+=3}return o/s}function Io(a,e,t,i,s,n,o,l){let r=0;const d=l.calculateOffsetRenderUnits(o),c=l.featureExpressionInfoContext,p=n.spatialReference;e*=3,i*=3;for(let x=0;x<s;++x){const g=a[e],y=a[e+1],S=a[e+2],f=n.getElevation(g,y,S,p,"ground")??0;r+=f,t[i]=g,t[i+1]=y,t[i+2]=c==null?S+f+d:f+d,e+=3,i+=3}return r/s}function Uo(a,e,t,i,s,n,o,l){let r=0;const d=l.calculateOffsetRenderUnits(o),c=l.featureExpressionInfoContext,p=n.spatialReference;e*=3,i*=3;for(let x=0;x<s;++x){const g=a[e],y=a[e+1],S=a[e+2],f=n.getElevation(g,y,S,p,"scene")??0;r+=f,t[i]=g,t[i+1]=y,t[i+2]=c==null?S+f+d:f+d,e+=3,i+=3}return r/s}function ko(a){const e=a.meterUnitOffset,t=a.featureExpressionInfoContext;return e!==0||t!=null}function Bo(a,e,t,i,s,n,o,l){const r=l.calculateOffsetRenderUnits(o),d=l.featureExpressionInfoContext;e*=3,i*=3;for(let c=0;c<s;++c){const p=a[e],x=a[e+1],g=a[e+2];t[i]=p,t[i+1]=x,t[i+2]=d==null?g+r:r,e+=3,i+=3}return 0}class No{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}const Ho={"absolute-height":{applyElevationAlignmentBuffer:Bo,requiresAlignment:ko},"on-the-ground":{applyElevationAlignmentBuffer:Wo,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:Io,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:Uo,requiresAlignment:()=>!0}},Go=Ue(),Ie=new No,vt=V(),qo=()=>oa.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function Xo(a){return{cachedResult:a.cachedResult,arcade:a.arcade?{func:a.arcade.func,context:a.arcade.modules.arcadeUtils.createExecContext(null,{sr:a.arcade.context.spatialReference}),modules:a.arcade.modules}:null}}async function bl(a,e,t,i){const s=a==null?void 0:a.expression;if(typeof s!="string")return null;const n=Ko(s);if(n!=null)return{cachedResult:n};const o=await rs();ls(t);const l=o.arcadeUtils,r=l.createSyntaxTree(s);return l.dependsOnView(r)?(i!=null&&i.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:l.createFunction(r),context:l.createExecContext(null,{sr:e}),modules:o}}}function Jo(a,e,t){return a.arcadeUtils.createFeature(e.attributes,e.geometry,t)}function Yo(a,e){if(a!=null&&!Ma(a)){if(!e||!a.arcade)return void qo().errorOncePerTick("Arcade support required but not provided");const t=e;t._geometry&&(t._geometry=vn(t._geometry)),a.arcade.modules.arcadeUtils.updateExecContext(a.arcade.context,e)}}function Qo(a){if(a!=null){if(Ma(a))return a.cachedResult;const e=a.arcade;let t=e==null?void 0:e.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof t!="number"&&(a.cachedResult=0,t=0),t}return 0}function xl(a,e=!1){let t=a==null?void 0:a.featureExpressionInfo;const i=t==null?void 0:t.expression;return e||i==="0"||(t=null),t??null}const yl={cachedResult:0};function Ma(a){return a.cachedResult!=null}function Ko(a){return a==="0"?0:null}let wl=class ja{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=cs(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){const i=this.calculateOffsetRenderUnits(t);return this.featureExpressionInfoContext!=null?i:e+i}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset;const i=this.featureExpressionInfoContext;return i!=null&&(t+=Qo(i)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=ds(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e}updateFeatureExpressionInfoContextForGraphic(e,t,i){e.arcade?(this._featureExpressionInfoContext=Xo(e),this.updateFeatureExpressionFeature(t,i)):this._featureExpressionInfoContext=e}updateFeatureExpressionFeature(e,t){const i=this.featureExpressionInfoContext;i!=null&&i.arcade&&(i.cachedResult=void 0,Yo(this._featureExpressionInfoContext,e.geometry?Jo(i.arcade.modules,e,t):null))}static fromElevationInfo(e){const t=new ja;return e!=null&&t.setFromElevationInfo(e),t}};const Wa=.5;function Zo(a,e){a.include(ti),a.attributes.add("position","vec3"),a.attributes.add("normal","vec3"),a.attributes.add("centerOffsetAndDistance","vec4");const t=a.vertex;ma(t,e),ii(t,e),t.uniforms.add(new At("viewport",i=>i.camera.fullViewport),new re("polygonOffset",i=>i.shaderPolygonOffset),new qe("aboveGround",i=>i.camera.aboveGround?1:-1)),e.hasVerticalOffset&&Ws(t),t.code.add(u`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),t.code.add(u`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.terrainDepthTest?u.float(0):u`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = aboveGround;
      }

      // aboveGround is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = aboveGround * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||Is(t),e.draped||(t.uniforms.add(new qe("perDistancePixelRatio",i=>Math.tan(i.camera.fovY/2)/(i.camera.fullViewport[2]/2))),t.code.add(u`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * perDistancePixelRatio * ${u.float(Wa)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),e.screenCenterOffsetUnitsEnabled&&nt(t),e.hasScreenSizePerspective&&$a(t),t.code.add(u`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

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

      ${e.hasVerticalOffset?u`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":u`
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
  `)}function ri(a){a.uniforms.add(new Us("alignPixelEnabled",e=>e.alignPixelEnabled)),a.code.add(u`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),a.code.add(u`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function er(a,e){const{vertex:t,fragment:i}=a;a.include(ha,e),t.include(ri),t.main.add(u`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),i.main.add(u`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function tr(a){a.vertex.uniforms.add(new qe("renderTransparentlyOccludedHUD",e=>e.hudRenderStyle===0?1:e.hudRenderStyle===1?0:.75),new At("viewport",e=>e.camera.fullViewport),new Xt("hudVisibilityTexture",e=>{var t;return(t=e.hudVisibility)==null?void 0:t.getTexture()})),a.vertex.include(ri),a.vertex.code.add(u`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function ir(a){const e=new Oa;if(e.include(Zo,a),e.vertex.include(ks,a),a.occlusionPass)return e.include(er,a),e;const{output:t,oitPass:i,hasOcclusionTexture:s,signedDistanceFieldEnabled:n,useVisibilityPixel:o,pixelSnappingEnabled:l,hasEmission:r,hasScreenSizePerspective:d,debugDrawLabelBorder:c,hasVVSize:p,hasVVColor:x,hasRotation:g,occludedFragmentFade:y,sampleSignedDistanceFieldTexelCenter:S}=a;e.include(ti),e.include(pa,a),e.include(fa,a),o&&e.include(tr);const{vertex:f,fragment:b}=e;b.include(va),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");const w=t===8,v=w&&o;v&&e.varyings.add("voccluded","float"),f.uniforms.add(new At("viewport",m=>m.camera.fullViewport),new qt("screenOffset",(m,R)=>Ge(Pt,2*m.screenOffset[0]*R.camera.pixelRatio,2*m.screenOffset[1]*R.camera.pixelRatio)),new qt("anchorPosition",m=>zt(m)),new ke("materialColor",({color:m})=>m),new re("materialRotation",m=>m.rotation),new Gt("tex",m=>m.texture)),nt(f),n&&(f.uniforms.add(new ke("outlineColor",m=>m.outlineColor)),b.uniforms.add(new ke("outlineColor",m=>Gi(m)?m.outlineColor:aa),new re("outlineSize",m=>Gi(m)?m.outlineSize:0))),l&&f.include(ri),d&&(ua(f),$a(f)),c&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add("uv0","vec2"),e.attributes.add("uvi","vec4"),e.attributes.add("color","vec4"),e.attributes.add("size","vec2"),e.attributes.add("rotation","float"),(p||x)&&e.attributes.add("featureAttribute","vec4"),f.main.add(u`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${Da};
      return;
    }

    vec2 inputSize;
    ${E(d,u`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,u`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${E(p,u`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${E(o,u`
        bool visible = testHUDVisibility(posProj);
        if (!visible) {
          vtc = vec2(0.0);
          ${E(c,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
          return;
        }
      `)}
    ${E(v,u`voccluded = visible ? 0.0 : 1.0;`)}
  `);const O=u`
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
    vec2 texSize = vec2(textureSize(tex, 0));
    uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${nr})));
    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${E(g,u`
        float angle = radians(materialRotation + rotation);
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,h=l?n?u`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:u`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:u`posProj += quadOffset;`;f.main.add(u`
    ${O}
    ${x?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color * materialColor;"}

    ${E(t===9,u`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${u.float(ne)};
    ${E(n,`alphaDiscard = alphaDiscard && outlineColor.a < ${u.float(ne)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${h}
      gl_Position = posProj;
    }

    vtc = uv;

    ${E(c,u`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),b.uniforms.add(new Gt("tex",m=>m.texture)),y&&!w&&(b.include(Bs),b.uniforms.add(new Xt("depthMap",m=>m.mainDepth),new re("occludedOpacity",m=>{var R;return((R=m.occludedFragmentOpacity)==null?void 0:R.value)??1}))),s&&b.uniforms.add(new Xt("texOcclusion",m=>{var R;return(R=m.hudOcclusion)==null?void 0:R.attachment}));const P=c?u`(isBorder > 0.0 ? 0.0 : ${u.float(ne)})`:u.float(ne),_=u`
    ${E(c,u`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${E(S,u`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${n?u`
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
          outlineAlphaFactor + fillAlphaFactor < ${P} ||
          fillPixelColor.a + outlinePixelColor.a < ${u.float(ne)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${E(!w,u`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${P}) {
          discard;
        }

        ${E(!w,u`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:u`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${P}) {
            discard;
          }
          ${E(!w,u`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${E(y&&!w,u`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${u.float(1-sr)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `)}
    ${E(s,u`fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;`)}

    ${E(!w&&c,u`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}

    ${E(i===2,u`
    if (fragColor.a < ${u.float(ne)}) {
      discard;
    }`)}
  `;switch(t){case 0:e.outputs.add("fragColor","vec4",0),r&&e.outputs.add("fragEmission","vec4",1),i===1&&e.outputs.add("fragAlpha","float",r?2:1),b.main.add(u`
        ${_}
        // Unlike other materials, the fragment shader outputs premultiplied colors.
        // Disable this for front face rendering for correct OIT compositing.
        ${E(i===2,u`fragColor.rgb /= fragColor.a;`)}
        ${E(r,u`fragEmission = vec4(0.0);`)}
        ${E(i===1,u`fragAlpha = fragColor.a;`)}`);break;case 9:b.main.add(u`
        ${_}
        outputObjectAndLayerIdColor();`);break;case 8:e.include(Ns,a),b.main.add(u`
        ${_}
        outputHighlight(${E(v,u`voccluded == 1.0`,u`false`)});`)}return e}function Gi(a){return a.outlineColor[3]>0&&a.outlineSize>0}function zt(a){return a.textureIsSignedDistanceField?ar(a.anchorPosition,a.distanceFieldBoundingBox,Pt):ra(Pt,a.anchorPosition),Pt}const Pt=Xe();function ar(a,e,t){Ge(t,a[0]*(e[2]-e[0])+e[0],a[1]*(e[3]-e[1])+e[1])}const sr=.08,Ct=32e3,nr=u.float(Ct),or=Object.freeze(Object.defineProperty({__proto__:null,build:ir,calculateAnchorPosition:zt,fullUV:Ct},Symbol.toStringTag,{value:"Module"}));let Zt=class extends ga{constructor(a,e){super(a,e,Jt(Ia).concat(Jt(ka()))),this.shader=new Sa(or,()=>sa(()=>import("./HUDMaterial.glsl-h3pIO9WD.js").then(t=>t.H),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]))),this.primitiveType=e.occlusionPass?_t.POINTS:_t.TRIANGLE_STRIP}initializePipeline(a){const{oitPass:e,hasEmission:t,hasPolygonOffset:i,draped:s,output:n,depthTestEnabled:o,occlusionPass:l}=a,r=o&&!s&&e!==1&&!l&&n!==8;return Ke({blending:Fe(n)?xa(e,!0):null,depthTest:o&&!s?{func:515}:null,depthWrite:r?pn:null,drawBuffers:ba(e,t),colorWrite:bt,polygonOffset:i?rr:null})}};Zt=A([na("esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique")],Zt);const rr={factor:0,units:-4},Ia=ni().vec2u8("uv0",{glNormalized:!0}),Ua=ni().vec3f("position").vec3f("normal").vec4i16("uvi").vec4u8("color",{glNormalized:!0}).vec2f("size").f32("rotation").vec4f("centerOffsetAndDistance").vec4f("featureAttribute"),lr=Ua.clone().vec4u8("olidColor");function ka(){return ai()?lr:Ua}class W extends ya{constructor(e,t){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.useVisibilityPixel=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.hasOcclusionTexture=!1,this.isFocused=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1,this.transparentOccluded=t}}A([D()],W.prototype,"transparentOccluded",void 0),A([D()],W.prototype,"screenCenterOffsetUnitsEnabled",void 0),A([D()],W.prototype,"useVisibilityPixel",void 0),A([D()],W.prototype,"signedDistanceFieldEnabled",void 0),A([D()],W.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),A([D()],W.prototype,"hasVVSize",void 0),A([D()],W.prototype,"hasVVColor",void 0),A([D()],W.prototype,"hasVerticalOffset",void 0),A([D()],W.prototype,"hasScreenSizePerspective",void 0),A([D()],W.prototype,"hasRotation",void 0),A([D()],W.prototype,"debugDrawLabelBorder",void 0),A([D()],W.prototype,"hasPolygonOffset",void 0),A([D()],W.prototype,"depthTestEnabled",void 0),A([D()],W.prototype,"pixelSnappingEnabled",void 0),A([D()],W.prototype,"draped",void 0),A([D()],W.prototype,"terrainDepthTest",void 0),A([D()],W.prototype,"cullAboveTerrain",void 0),A([D()],W.prototype,"occlusionPass",void 0),A([D()],W.prototype,"occludedFragmentFade",void 0),A([D()],W.prototype,"hasOcclusionTexture",void 0),A([D()],W.prototype,"isFocused",void 0);class $l extends wa{constructor(e,t,i=!1){super(e,mr),this.produces=new Map([[14,s=>pt(s)&&!this.parameters.drawAsLabel&&!this._configuration.transparentOccluded],[15,s=>pt(s)&&!this.parameters.drawAsLabel&&this._configuration.transparentOccluded],[16,s=>pt(s)&&this.parameters.drawAsLabel],[13,()=>this.parameters.useVisibilityPixel],[20,s=>this.parameters.draped&&pt(s)]]),this._visible=!0,this._configuration=new W(t,i)}getConfiguration(e,t){const i=this.parameters.draped;return super.getConfiguration(e,t,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=i,this._configuration.useVisibilityPixel=this.parameters.useVisibilityPixel,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.hasVVSize=!!this.parameters.vvSize,this._configuration.hasVVColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===13,this._configuration.occludedFragmentFade=!i&&!!this.parameters.occludedFragmentOpacity,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||t.slot===13,Fe(e)&&(this._configuration.debugDrawLabelBorder=!!Hs.LABELS_SHOW_BORDER),this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasOcclusionTexture=this._configuration.transparentOccluded&&t.oitPass!==0,this._configuration}intersect(e,t,i,s,n,o){const{options:{selectionMode:l,hud:r,excludeLabels:d},point:c,camera:p}=i,{parameters:x}=this;if(!l||!r||d&&x.isLabel||!e.visible||!c||!p)return;const g=e.attributes.get("featureAttribute"),y=g==null?null:hi(g.data,Ki),{scaleX:S,scaleY:f}=ea(y,x,p.pixelRatio),b=e.attributes.get("position"),w=e.attributes.get("size"),v=e.attributes.get("normal"),O=e.attributes.get("rotation"),h=e.attributes.get("centerOffsetAndDistance");si(b.size>=3);const P=zt(x),_=this.parameters.centerOffsetUnits==="screen";for(let m=0;m<b.data.length/b.size;m++){const R=m*b.size;K(G,b.data[R],b.data[R+1],b.data[R+2]),oe(G,G,t),oe(G,G,p.viewMatrix);const $=m*h.size;if(K(he,h.data[$],h.data[$+1],h.data[$+2]),!_&&(G[0]+=he[0],G[1]+=he[1],he[2]!==0)){const ve=he[2];Q(he,G),se(G,G,q(he,he,ve))}const L=m*v.size;K(Ve,v.data[L],v.data[L+1],v.data[L+2]),mi(Ve,Ve,vi(Qi,t));const{normal:z,cosAngle:we}=qi(Ve,p,Zi),N=ta(this.parameters,G,we,p,Ut);if(Tt(G,G,z,N),p.applyProjection(G,ee),ee[0]>-1){_&&(he[0]||he[1])&&(ee[0]+=he[0]*p.pixelRatio,he[1]!==0&&(ee[1]+=Ut.alignmentEvaluator.apply(he[1])*p.pixelRatio),p.unapplyProjection(ee,G)),ee[0]+=this.parameters.screenOffset[0]*p.pixelRatio,ee[1]+=this.parameters.screenOffset[1]*p.pixelRatio,ee[0]=Math.floor(ee[0]),ee[1]=Math.floor(ee[1]);const ve=m*w.size;ce[0]=w.data[ve],ce[1]=w.data[ve+1],Ut.evaluator.applyVec2(ce,ce);const de=pr*p.pixelRatio;let Ce=0;x.textureIsSignedDistanceField&&(Ce=Math.min(x.outlineSize,.5*ce[0])*p.pixelRatio/2),ce[0]*=S,ce[1]*=f;const C=m*O.size,X=x.rotation+O.data[C];if(Xi(c,ee[0],ee[1],ce,de,Ce,X,x,P)){const Z=i.ray;if(oe(Ji,G,ia(ur,p.viewMatrix)),ee[0]=c[0],ee[1]=c[1],p.unprojectFromRenderScreen(ee,G)){const ue=V();B(ue,Z.direction);const ge=1/it(ue);q(ue,ue,ge),o(at(Z.origin,G)*ge,ue,-1,Ji)}}}}}intersectDraped(e,t,i,s,n){const o=e.attributes.get("position"),l=e.attributes.get("size"),r=e.attributes.get("rotation"),d=this.parameters,c=zt(d),p=e.attributes.get("featureAttribute"),x=p==null?null:hi(p.data,Ki),{scaleX:g,scaleY:y}=ea(x,d,e.screenToWorldRatio),S=fr*e.screenToWorldRatio;for(let f=0;f<o.data.length/o.size;f++){const b=f*o.size,w=o.data[b],v=o.data[b+1],O=f*l.size;ce[0]=l.data[O],ce[1]=l.data[O+1];let h=0;d.textureIsSignedDistanceField&&(h=Math.min(d.outlineSize,.5*ce[0])*e.screenToWorldRatio/2),ce[0]*=g,ce[1]*=y;const P=f*r.size,_=d.rotation+r.data[P];Xi(i,w,v,ce,S,h,_,d,c)&&s(n.distance,n.normal,-1)}}createBufferWriter(){return new vr}applyShaderOffsets(e,t,i,s,n,o,l){mi(kt,i,vi(Qi,s));const r=qi(kt,o,Zi),d=gr(it(t),o),c=ta(this.parameters,t,r.cosAngle,o,l);Tt(t,t,r.normal,c+d),Tt(e,e,kt,c+d);const p=n[3]+c;this._applyPolygonOffsetView(t,r,p,o,t),this._applyCenterOffsetView(t,n,t)}applyShaderOffsetsNDC(e,t,i,s,n){return this._applyCenterOffsetNDC(e,t,i,s),n!=null&&B(n,s),this._applyPolygonOffsetNDC(s,t,i,s),s}_applyPolygonOffsetView(e,t,i,s,n){const o=s.aboveGround?1:-1;let l=Math.sign(i);l===0&&(l=o);const r=o*l;if(this.parameters.shaderPolygonOffset<=0)return B(n,e);const d=St(Math.abs(t.cosAngle),.01,1),c=1-Math.sqrt(1-d*d)/d/s.viewport[2];return q(n,e,r>0?c:1/c),n}_applyCenterOffsetView(e,t,i){const s=this.parameters.centerOffsetUnits!=="screen";return i!==e&&B(i,e),s&&(i[0]+=t[0],i[1]+=t[1],t[2]&&(Q(Ve,i),us(i,i,q(Ve,Ve,t[2])))),i}_applyCenterOffsetNDC(e,t,i,s){const n=this.parameters.centerOffsetUnits!=="screen";return s!==e&&B(s,e),n||(s[0]+=t[0]/i.fullWidth*2,s[1]+=t[1]/i.fullHeight*2),s}_applyPolygonOffsetNDC(e,t,i,s){const n=this.parameters.shaderPolygonOffset;if(e!==s&&B(s,e),n){const o=i.aboveGround?1:-1,l=o*Math.sign(t[3]);s[2]-=(l||o)*n}return s}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:i}=this.parameters,s=e[3]>=ne||t>=ne&&i[3]>=ne;return this._visible&&s}createGLMaterial(e){return new cr(e)}calculateRelativeScreenBounds(e,t,i=ps()){return dr(this.parameters,e,t,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}}class cr extends tn{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(Zt,e)}}function dr(a,e,t,i){i[0]=a.anchorPosition[0]*-e[0]+a.screenOffset[0]*t,i[1]=a.anchorPosition[1]*-e[1]+a.screenOffset[1]*t}function qi(a,e,t){return oe(t.normal,a,e.viewInverseTransposeMatrix),t.cosAngle=tt(t.normal,hr),t}function Xi(a,e,t,i,s,n,o,l,r){let d=e-s-i[0]*r[0],c=d+i[0]+2*s,p=t-s-i[1]*r[1],x=p+i[1]+2*s;const g=l.distanceFieldBoundingBox;return l.textureIsSignedDistanceField&&g!=null&&(d+=i[0]*g[0],p+=i[1]*g[1],c-=i[0]*(1-g[2]),x-=i[1]*(1-g[3]),d-=n,c+=n,p-=n,x+=n),Ge(Yi,e,t),hs(Qe,a,Yi,ms(o)),Qe[0]>d&&Qe[0]<c&&Qe[1]>p&&Qe[1]<x}const Ut=new Gs,G=V(),Ve=V(),ee=st(),kt=V(),Ji=V(),Qe=Xe(),Yi=Xe(),Qi=fs(),ur=Ue(),he=V(),Bt=V(),Ki=st(),Zi={normal:V(),cosAngle:0},pr=1,fr=2,ce=da(0,0),hr=et(0,0,1);class mr extends qs{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1,this.color=gi(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=da(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=gi(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=st(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.useVisibilityPixel=!0,this.occludedVisibilityMode="hidden",this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class vr{constructor(){this.layout=ka(),this.baseInstanceLayout=Ia}elementCount(e){return e.get("position").indices.length}elementCountBaseInstance(e){return e.get("uv0").indices.length}write(e,t,i,s,n,o){var h,P;const{position:l,normal:r,color:d,size:c,rotation:p,centerOffsetAndDistance:x,featureAttribute:g,uvi:y}=n;Ys(i.get("position"),e,l,o),Qs(i.get("normal"),t,r,o);const S=i.get("position").indices.length;let f=0,b=0,w=Ct,v=Ct;const O=(h=i.get("uvi"))==null?void 0:h.data;O&&O.length>=4&&(f=O[0],b=O[1],w=O[2],v=O[3]);for(let _=0;_<S;++_){const m=o+_;y.setValues(m,f,b,w,v)}if(Ks(i.get("color"),4,d,o),Oi(i.get("size"),c,o),Zs(i.get("rotation"),p,o),i.get("centerOffsetAndDistance")?zi(i.get("centerOffsetAndDistance"),x,o):Ci(x,o,S),i.get("featureAttribute")?zi(i.get("featureAttribute"),g,o):Ci(g,o,S),s!=null){const _=(P=i.get("position"))==null?void 0:P.indices;if(_){const m=_.length,R=n.getField("olidColor",ln);en(s,R,m,o)}}return{numVerticesPerItem:1,numItems:S}}writeBaseInstance(e,t){const{uv0:i}=t;Oi(e.get("uv0"),i,0)}}function ea(a,e,t){return a==null||e.vvSize==null?{scaleX:t,scaleY:t}:(Xs(Bt,e,a),{scaleX:Bt[0]*t,scaleY:Bt[1]*t})}function gr(a,e){const t=e.computeRenderPixelSizeAtDist(a)*Wa;return(e.aboveGround?1:-1)*t}function ta(a,e,t,i,s){var r;if(!((r=a.verticalOffset)!=null&&r.screenLength)){const d=it(e);return s.update(t,d,a.screenSizePerspective,a.screenSizePerspectiveMinPixelReferenceSize,a.screenSizePerspectiveAlignment,null),0}const n=it(e),o=a.screenSizePerspectiveAlignment??a.screenSizePerspective,l=Js(i,n,a.verticalOffset,t,o,a.screenSizePerspectiveMinPixelReferenceSize);return s.update(t,n,a.screenSizePerspective,a.screenSizePerspectiveMinPixelReferenceSize,a.screenSizePerspectiveAlignment,null),l}export{mt as $,gn as A,Xn as B,Ot as C,gl as D,Zr as E,zt as F,Dn as G,kn as H,Vn as I,Da as J,Ta as K,Yt as L,ll as M,Wn as N,ir as O,Nr as P,el as Q,Br as R,Kr as S,Fr as T,Ct as U,ro as V,Ni as W,kr as X,Yn as Y,il as Z,Yr as _,sl as a,cl as a0,dl as a1,rl as a2,Mo as a3,Ei as b,xl as c,Pn as d,bl as e,La as f,No as g,ul as h,nl as i,al as j,pl as k,fl as l,yl as m,Sl as n,wl as o,jo as p,ri as q,tl as r,Zo as s,$l as t,hl as u,tr as v,ol as w,xn as x,ml as y,vl as z};
//# sourceMappingURL=HUDMaterial-CzQ5jLJi.js.map
