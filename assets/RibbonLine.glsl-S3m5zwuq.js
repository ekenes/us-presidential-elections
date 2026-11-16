import{eD as ge,bn as X,l5 as se,eI as Z,eo as ji,eJ as be,eG as de,g8 as ue,i$ as Ot,fd as at,kP as wr,bo as Bt,fh as Cr,bq as ke,ai as T,nf as Or,eF as K,bB as ki,af as Lr,gr as _r,rS as Bi,fy as Ji,zC as Fr,r4 as Er,bk as Ar,iT as ot,d1 as Ne,kQ as pe,hc as G,zP as Jt,$ as S,jn as Vr,_ as Rr,kV as Ht,a2 as Ir,an as Lt,pe as nt,eH as Gt,gu as xe,eE as Yt,yG as Wr,dD as _t,kq as Ft,pf as ve,h8 as Hi,bI as Mr,bh as Nr,eA as Ur,zQ as jr,gc as kr,cQ as Gi,on as Br,sx as Yi,e5 as Me,d3 as qi,b5 as Jr,z0 as Je,br as Hr}from"./index-DvjtuTaf.js";import{g as $e,_ as Gr,C as Yr,v as qt,y as qr,f as Xi}from"./lineSegment-DvrnoZ-G.js";import{B as Xt,w as He,q as re,b as Kt,v as lt}from"./plane-BhcRpazt.js";import{h as Ki,d as Ce,X as Zt,g as Xr,N as Kr}from"./BufferView-Dl33kWCX.js";import{u as Ue,g as ie,e as s,b as Oe,d as b,h as Zr,j as Qr,i as x,a as ea,k as ta,l as ia,m as Qt,o as ra,p as Ge,n as aa}from"./getEmissions.glsl-SBFf_fPr.js";import{a as Zi,c as na,K as sa,S as Et,i as oa,b as la,e as Mt,f as Qi,g as ei,u as ca,h as da,j as ct,k as Nt,l as At,m as er,n as tr,o as ir,p as pa,q as ua,r as rr,s as fa,v as ha,w as ma,x as ga,y as va,z as Sa,A as xa,B as ba,C as ya,D as ti,E as $a,F as ii,G as Ye,H as Da,I as Pa,J as Ta,L as za,M as ri,O as wa,P as Ca,Q as ai,R as ar,T as Oa,U as ni,_ as Vt,V as nr,W as La,X as _a,Y as Rt,Z as Fa,$ as Ea,a0 as Aa,a1 as Va,a2 as Ra,a3 as Ia,a4 as Wa,a5 as si,a6 as Ma,a7 as Na,a8 as oi,a9 as li,aa as Ua,ab as qe,ac as ja}from"./OutputColorHighlightOLID.glsl-DsS1HXgD.js";import{i as ka,s as Ba,g as Ja,v as Ha,r as Ga,a as Ya,b as qa,_ as Xa,n as Ka,e as Za,t as Qa,o as en,c as tn}from"./SSAO.glsl-CSTiDAkk.js";import{a as ce,K as rn,n as an,f as ci}from"./InterleavedLayout-CbvJ1j4x.js";import{i as sr,t as nn,N as di,g as sn,_ as on,d as ln,h as cn}from"./HUDMaterial.glsl-DqdZRhkr.js";import{u as dn,g as ut,N as or,s as pn,p as un}from"./frustumPlanes-r45eQxRX.js";import{b as fn}from"./ray-De-DJtwD.js";import{j as hn}from"./sphere-DzQ0cdPg.js";import{T as Xe,g as ft,c as pi}from"./RenderingContext-BrMx68Vl.js";import{e as je}from"./AlphaCutoff-rVilFylB.js";import"./DDSUtil-C4l-0cnu.js";import{c as ui,i as mn}from"./doublePrecisionUtils-BcQHQHvx.js";import{i as gn}from"./TextureBackedBufferLayout-CeH6Whri.js";let Xs=class extends sa{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.shadingEnabled=!1,this.isDecoration=!1,this.worldSized=!1}},vn=class extends Zi{constructor(){super(...arguments),this.primitiveVertexCount=1}updateConfiguration(e){super.updateConfiguration(e),this._configuration.pbrMode=this.parameters.shadingEnabled?2:0,this._configuration.draped=e.slot===18,this._configuration.shadingEnabled=this.parameters.shadingEnabled,this._configuration.worldSized=this.parameters.worldSized,this._configuration.emissionSource=+!!this.emissions,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.hasOccludees=e.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===8,Ue(e.output)&&this.parameters.shadingEnabled?(this._configuration.receiveShadows=e.shadowMap.enabled,this._configuration.hasShadowHighlights=ka(this._configuration,e),this._configuration.receiveAmbientOcclusion=e.ssao!=null,this._configuration.receiveGlobalIllumination=e.globalIlluminationEnabled):this._configuration.receiveShadows=this._configuration.hasShadowHighlights=this._configuration.receiveAmbientOcclusion=this._configuration.receiveGlobalIllumination=!1}computeAttachmentOrigin(e,t,i){return na(e,t,i,this._isClosed(i))}_isClosed(e){return(this.parameters.isClosed??!1)&&e>2}};function Sn(r,e,t,i,a,n){dn(a,0,1/0,ee);for(let m of[0,1,2])if(!ut(m,Math.min(r[m],e[m])-t,Math.max(r[m],e[m])+t,ee))return null;if(!Xt(i.frustum[4],ee)||!Xt(i.frustum[5],ee))return null;let o=lr(r,e,i,te,j,n);if(o===0)return null;ge(ne,a.origin,r);let l=X(ne,n),c=X(a.direction,n),d=hi(a.direction,n);if(Math.abs(c)>d){let m=-l/c;return m<ee.c0||m>ee.c1?null:(se(ne,ne,a.direction,m),dr(X(ne,te),X(ne,j),o,t*t)?m:null)}if(Math.abs(l)>hi(ne,n))return null;let p=X(ne,te),u=X(ne,j),h=X(a.direction,te),v=X(a.direction,j);return Z(ee.ray.origin,p,u,0),Z(ee.ray.direction,h,v,0),!ut(0,-t,o+t,ee)||!ut(1,-t,t,ee)?null:xn(ee,o,t)}function xn(r,e,t){let i=un(r,ne);if(dr(i[0],i[1],e,t*t))return r.c0;Z(ht.center,i[0]<0?0:e,0,0),ht.radius=t;let a=r.ray.direction;if(!ht.intersectRay(fn(i,a),mi))return null;let n=Math.abs(a[0])>Math.abs(a[1])?0:1,o=r.c0+(mi[n]-i[n])/a[n];return o<=r.c1?o:null}function bn(r,e,t,i,a){let n=cr(r,e,t,pr);if(!or(a.broadPhaseFrustum,n,null)||lr(r,e,i,te,j,yn)===0)return!1;let[o,l,c,d]=mt;return ze(o,r,te,j,-t,-t),ze(l,e,te,j,t,-t),ze(c,e,te,j,t,t),ze(d,r,te,j,-t,t),Et(a,mt,i,It)?(se(o,r,j,-t),se(l,e,j,-t),se(c,e,j,t),se(d,r,j,t),Et(a,mt,i,It)?!0:fi(r,-t,te,j,i,a)||fi(e,t,te,j,i,a)):!1}function fi(r,e,t,i,a,n){let o=Math.abs(e);if(!or(n.broadPhaseFrustum,cr(r,r,o,pr),null))return!1;_e.length=0,K(_e.pushNew(),r),ze(_e.pushNew(),r,t,i,0,o);for(let[l,c]of $n)ze(_e.pushNew(),r,t,i,l*e,c*o);return Et(n,_e,a,It)}function lr(r,e,t,i,a,n){ge(i,e,r);let o=be(i);if(o===0)return 0;de(i,i,1/o);let l=t.viewMatrix;ue(Ke,r,l),Ot(Le,l),at(Ze,i,Le);let c=t.projectionMatrix,d=c[11]*Ke[2]+c[15],p=c[11]*Ze[2],u=c[0]*(Ze[0]*d-Ke[0]*p),h=c[5]*(Ze[1]*d-Ke[1]*p),v=t.fullViewport,m=h*v[3]/(c[0]*v[2]),g=-u*v[2]/(c[5]*v[3]),y=Math.hypot(m,g);if(y===0)return 0;let f=m/y,$=g/y;return Z(a,f,$,0),wr(Le,Le),at(a,a,Le),Bt(n,i,a),Cr(n)===0?0:(ke(n,n),Bt(a,n,i),o)}function cr(r,e,t,i){return Or(Math.min(r[0],e[0])-t,Math.min(r[1],e[1])-t,Math.min(r[2],e[2])-t,Math.max(r[0],e[0])+t,Math.max(r[1],e[1])+t,Math.max(r[2],e[2])+t,i)}function hi(r,e){return 16*2**-52*(Math.abs(r[0]*e[0])+Math.abs(r[1]*e[1])+Math.abs(r[2]*e[2]))}function ze(r,e,t,i,a,n){se(r,e,t,a),se(r,r,i,n)}function dr(r,e,t,i){let a=r<0?r:r>t?r-t:0;return a*a+e*e<=i}const te=T(),j=T(),yn=T(),ne=T(),Ke=T(),Le=ki(),Ze=T(),ee=pn(),ht=new hn,mi=T(),pr=Lr(),$n=Array.from({length:3},(r,e)=>{let t=(e+1)*Math.PI/3;return e===2?[0,-1]:[Math.sin(t),Math.cos(t)]}),mt=[T(),T(),T(),T()],_e=new ji({allocator:r=>r??T()}),It=new ji({allocator:r=>r??T()});function Dn(r,e){let{vertex:t}=r;t.uniforms.add(new ie("intrinsicWidth",n=>n.width));let{hasScreenSizePerspective:i,spherical:a}=e;i?(r.include(oa,e),la(t),Mt(t,e),t.uniforms.add(new Qi("inverseViewMatrix",(n,o)=>_r(gi,Bi(gi,o.camera.viewMatrix,n.origin)))),t.code.add(s`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${a?s`normalize(worldPos + localOrigin)`:s`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):t.code.add(s`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),e.hasVVSize?(t.uniforms.add(new Oe("vvSizeMinSize",n=>n.vvSize.minSize),new Oe("vvSizeMaxSize",n=>n.vvSize.maxSize),new Oe("vvSizeOffset",n=>n.vvSize.offset),new Oe("vvSizeFactor",n=>n.vvSize.factor),new Oe("vvSizeFallback",n=>n.vvSize.fallback)),t.code.add(s`
    float getSize(${b(i,"vec3 pos")}) {
      float value = ${t.inputs.get("sizeFeatureAttribute")};
      float size = isnan(value)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + value * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${b(i,"applyLineSizeScreenSizePerspective(size, pos)","size")};
    }
    `)):t.code.add(s`
    float getSize(${b(i,"vec3 pos")}) {
      float fullSize = intrinsicWidth * ${t.inputs.get("size")};
      return ${b(i,"applyLineSizeScreenSizePerspective(fullSize, pos)","fullSize")};
    }
    `),e.hasVVOpacity?(t.constants.add("vvOpacityNumber","int",8),t.uniforms.add(new ei("vvOpacityValues",8,n=>n.vvOpacity.values),new ei("vvOpacityOpacities",8,n=>n.vvOpacity.opacityValues),new ie("vvOpacityFallback",n=>n.vvOpacity.fallback,{supportsNaN:!0})),t.code.add(s`
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
      float value = ${t.inputs.get("opacityFeatureAttribute")};
      if (isnan(value)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${b(e.hasVVColor,"color","vec4(color.rgb, vvOpacityFallback)")};
      }

      return vec4(color.rgb, interpolateOpacity(value));
    }
    `)):t.code.add(s`vec4 applyOpacity(vec4 color) {
return color;
}`),e.hasVVColor?(r.include(ca,e),t.code.add(s`
    vec4 getColor() {
      vec4 color = interpolateVVColor(${t.inputs.get("colorFeatureAttribute")});

      // if we encounter NaN in the color it means the color is in the fallback case where the symbol color
      // is not defined and there is no valid color visual variable override. In this case just return a fully
      // transparent color
      if (isnan(color.r)) {
        return vec4(0);
      }

      return applyOpacity(color);
    }
    `)):t.code.add(s`
    vec4 getColor() {
      return applyOpacity(${t.inputs.get("color")});
    }
    `)}const gi=Ji();function Pn(r){r.include(Ba),r.fragment.uniforms.add(new Qi("inverseViewMatrix",(e,t)=>{let i=Bi(Tn,t.camera.viewMatrix,e.localOrigin);return Fr(i,i)})).code.add(s`vec4 reconstructLocalPosition(vec2 coord, float linearDepth) {
vec4 cameraSpace = vec4(reconstructPosition(coord, linearDepth), 1.0);
return inverseViewMatrix * cameraSpace;
}`)}const Tn=Ji();function zn(r,e){r.include(Ja,e),r.include(Pn),r.fragment.include(da),r.fragment.code.add(s`float readFragmentShadow(float additionalAmbientScale) {
vec3 pos = reconstructLocalPosition(gl_FragCoord.xy, linearizeDepth(gl_FragCoord.z)).xyz;
return readShadow(additionalAmbientScale, pos);
}`)}function wn(r,e){let{vertex:t,fragment:i}=r;r.include(zn,e),i.include(Ha,e),i.include(Ga,e),Ya(i),Mt(i,e),t.main.add("forwardLinearDepthToReadShadow();"),i.uniforms.add(qa,Xa,t.uniforms.get("localOrigin")).code.add(s`vec4 evaluateSceneLightingFragment(vec3 vpos, vec3 normal, vec4 albedo) {
vec3 posWorld = vpos + localOrigin;
float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
float shadow = readFragmentShadow(additionalAmbientScale);
float ssao = evaluateAmbientOcclusionInverse();
vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
vec3 viewDirection = normalize(vpos - cameraPosition);
return vec4(
evaluateSceneLighting(normal, albedo.rgb, shadow, 1.0 - ssao, additionalLight, viewDirection, normal),
albedo.a);
}`)}function Cn(r){r.vertex.code.add("#define noPerspectiveWrite(x, w) (x * w)")}function ur(r){r.fragment.code.add("#define noPerspectiveRead(x) (x * gl_FragCoord.w)")}function On(r){return r.pattern.map(e=>Math.round(e*r.pixelRatio))}function Ln(r){if(r==null)return 1;let e=On(r);return Math.floor(e.reduce((t,i)=>t+i,0))}function _n(r){return r==null?Er:r.length===4?r:Ar(Fn,r[0],r[1],r[2],1)}const Fn=ot();function En(r,e){if(!e.stippleEnabled){r.fragment.code.add(s`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);return}let t=!(e.draped&&e.stipplePreferContinuous),{vertex:i,fragment:a}=r;e.draped||(Mt(i,e),i.uniforms.add(new ct("worldToScreenPerDistanceRatio",({camera:l})=>1/l.screenPixelSizePerDistance)).code.add(s`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),r.varyings.add("vStippleDistance","float"),r.varyings.add("vStippleLimitsAndCaps","vec4"),r.varyings.add("vStipplePatternStretch","float"),i.code.add(s`
    float discretizeStippleDistanceToScreenRatio(float stippleDistanceToScreenRatio) {
      float step = ${s.float(An)};

      float discreteStippleDistanceToScreenRatio = log(stippleDistanceToScreenRatio);
      discreteStippleDistanceToScreenRatio = ceil(discreteStippleDistanceToScreenRatio / step) * step;
      discreteStippleDistanceToScreenRatio = exp(discreteStippleDistanceToScreenRatio);
      return discreteStippleDistanceToScreenRatio;
    }
  `),Nt(i),i.code.add(s`
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
  `),a.uniforms.add(new Zr("stipplePatternTexture",l=>l.stippleTexture),new ie("stipplePatternPixelSizeInv",l=>1/fr(l))),e.stippleOffColorEnabled&&a.uniforms.add(new At("stippleOffColor",l=>_n(l.stippleOffColor))),r.include(ur);let n=e.worldSized&&e.imagePattern,{usePerspectiveCorrectStipple:o}=e;o&&r.varyings.add("vStipplePerspective","vec4"),n?(r.varyings.add("vStippleV","float"),r.fragment.include(Ka),a.code.add(s`vec4 getStippleColor(out bool isClamped) {
vec2 aaCorrectedLimits = vStippleLimitsAndCaps.xy + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = (vStippleLimitsAndCaps.z <= 0.0 && vStippleDistance < aaCorrectedLimits.x) ||
(vStippleLimitsAndCaps.w <= 0.0 && vStippleDistance > aaCorrectedLimits.y);
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
}`)):a.code.add(s`
    float getStippleSDF(out bool isClamped) {
      ${b(e.worldSized,s`
          float unclampedStippleDistance = noPerspectiveRead(vStippleDistance);
          float stippleDistancePerPixel = length(vec2(dFdx(unclampedStippleDistance), dFdy(unclampedStippleDistance)));
        `,s`float stippleDistancePerPixel = 1.0;`)}

      bool clampStart = vStippleLimitsAndCaps.z <= 0.0;
      bool clampEnd = vStippleLimitsAndCaps.w <= 0.0;
      float stippleDistance = vStippleDistance;
      if (clampStart) {
        stippleDistance = max(stippleDistance, vStippleLimitsAndCaps.x);
      }
      if (clampEnd) {
        stippleDistance = min(stippleDistance, vStippleLimitsAndCaps.y);
      }
      stippleDistance = noPerspectiveRead(stippleDistance);
      float lineSizeInv = noPerspectiveRead(vLineSizeInv);

      ${b(o,s`
          // Convert screen-space progress to progress along the 3D segment using the endpoints' inverse clip-W values.
          // This keeps dash lengths constant in world units, so farther dashes appear shorter on screen.
          vec4 stipplePerspective = noPerspectiveRead(vStipplePerspective);
          float segmentLength = stipplePerspective.y - stipplePerspective.x;
          float segmentFactor = segmentLength > 0.0 ? (stippleDistance - stipplePerspective.x) / segmentLength : 0.0;
          float interpolatedInverseW = mix(stipplePerspective.z, stipplePerspective.w, segmentFactor);
          float perspectiveFactor = segmentFactor * stipplePerspective.w / interpolatedInverseW;
          stippleDistance = mix(stipplePerspective.x, stipplePerspective.y, perspectiveFactor);
        `)}

        vec2 aaCorrectedLimits = vStippleLimitsAndCaps.xy + vec2(1.0, -1.0) * stippleDistancePerPixel / gl_FragCoord.w;
      isClamped = (clampStart && vStippleDistance < aaCorrectedLimits.x) ||
          (clampEnd && vStippleDistance > aaCorrectedLimits.y);

      float u = stippleDistance * stipplePatternPixelSizeInv * lineSizeInv;
      u = fract(u);

      float sdf = texture(stipplePatternTexture, vec2(u, 0.5)).r;

      return sdf;
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
  `),a.code.add(s`
    float getStippleCapDistance() {
      return (getStippleSDF() * 2.0 - 1.0) * vStipplePatternStretch;
    }

    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${b(!e.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }
  `)}function fr(r){let e=r.stipplePattern;return sr(e)?e.length:e?Ln(e)/e.pixelRatio:1}const An=.4,Qs=64,eo=32,Vn=32/5,Rn=64/Vn,to=.25;function In(r,e){let t=r.vertex,i=e.hasScreenSizePerspective,a=e.worldSized,n=a&&!e.draped;Nt(t),t.constants.add("markerSizePerLineWidth","float",Rn),t.uniforms.add(new ie("markerScale",({markerScale:o})=>o)),a&&t.uniforms.add(new ct("groundMetersToScreenRatio",o=>1/(o.screenToPlanarDistanceRatio*o.planarDistanceToGroundRatio))),t.code.add(s`float getScreenMarkerSize(float lineWidth) {
return markerScale * markerSizePerLineWidth * lineWidth;
}`),t.code.add(b(n,s`
        float getLineWidth(vec3 pos) {
          float size = getSize(${b(i,"pos")});
          float metersPerScreenPixel = max(-pos.z, nearFar[0]) * metersPerRenderUnit * screenPixelSizePerDistance;
          return max(size / metersPerScreenPixel, 1.0) * pixelRatio;
        }
    `,s`
        float getLineWidth(${b(e.lineWidthRequiresPosition,"vec3 pos")}) {
          float size = max(getSize(${b(i,"pos")}), 1.0);
          return ${b(a,"size * pixelRatio * groundMetersToScreenRatio","size * pixelRatio")};
        }
    `)),n?t.uniforms.add(er,tr,ir):t.uniforms.add(pa),t.code.add(b(n,s`
        float getWorldMarkerSize(vec3 pos) {
          return markerScale * markerSizePerLineWidth * getSize(${b(i,"pos")}) * 0.5 / metersPerRenderUnit;
        }
      `,s`
        float getWorldMarkerSize(vec3 pos) {
          float distanceToCamera = length(pos);
          float screenToWorldRatio = renderPixelSizePerDistance * distanceToCamera * 0.5;
          return getScreenMarkerSize(getLineWidth(${b(i,"pos")})) * screenToWorldRatio;
        }
      `)),t.constants.add("maxSegmentLengthFraction","float",.45),t.code.add(b(n,s`bool areWorldMarkersHidden(vec3 pos, vec3 other) {
return getWorldMarkerSize(pos) > maxSegmentLengthFraction * length(pos - other);
}`,s`
        bool areWorldMarkersHidden(vec3 pos, vec3 other) {
          vec3 midPoint = mix(pos, other, 0.5);
          float distanceToCamera = length(midPoint);
          float screenToWorldRatio = renderPixelSizePerDistance * distanceToCamera * 0.5;
          float worldMarkerSize = getScreenMarkerSize(getLineWidth(${b(i,"pos")})) * screenToWorldRatio;
          float segmentLen = length(pos - other);
          return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
        }
      `))}const Wn=Ne(1),Mn=Ne(1);function Nn(r,e){let{animation:t}=e,{varyings:i,vertex:a,fragment:n}=r;i.add("vTimeStamp","float"),i.add("vFirstTime","float"),i.add("vLastTime","float"),i.add("vTransitionType","float"),a.main.add(s`vTimeStamp = animatedAlphaTimeStamps.x;
vFirstTime = animatedAlphaTimeStamps.y;
vLastTime = animatedAlphaTimeStamps.z;
vTransitionType = animatedAlphaTimeStamps.w;`),t===3&&n.constants.add("decayRate","float",2.3),n.code.add(s`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${Un(t)}
    }`),n.uniforms.add(new ie("timeElapsed",o=>o.timeElapsed),new ie("trailLength",o=>o.trailLength),new ie("speed",o=>o.animationSpeed),new ua("startEndTime",o=>pe(jn,o.startTime,o.endTime))),n.constants.add("fadeInTime","float",Mn),n.constants.add("fadeOutTime","float",Wn),n.constants.add("incomingTransition","int",0),n.constants.add("outgoingTransition","int",2),n.code.add(s`float fadeIn(float x) {
return smoothstep(0.0, fadeInTime, x);
}
float fadeOut(float x) {
return isinf(fadeOutTime) ? 1.0 : smoothstep(fadeOutTime, 0.0, x);
}
void updateAlphaIf(inout float alpha, bool condition, float newAlpha) {
alpha = condition ? min(alpha, newAlpha) : alpha;
}
float animatedAlpha() {
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
if (speed == 0.0) {
float alpha = getTrailOpacity((totalTimeWithFadeOut - (vTimeStamp - vFirstTime)) / trailLength);
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
return alpha;
}
float relativeStartTime = mod(startTime, totalTimeWithFadeOut);
float shiftedTimeElapsed = timeElapsed - relativeStartTime + originTime;
float headRelativeToFirst = mod(shiftedTimeElapsed * speed, totalTimeWithFadeOut);
float vRelativeToHead = headRelativeToFirst - originTime - vTimeStamp;
float vAbsoluteTime = timeElapsed - vRelativeToHead / speed;
if (startTime > timeElapsed) {
return 0.0;
}
float alpha = getTrailOpacity(vRelativeToHead / trailLength);
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, int(vTransitionType) != incomingTransition, step(startTime, vAbsoluteTime));
updateAlphaIf(alpha, headRelativeToFirst > fadeOutStartTime, fadeOut((headRelativeToFirst - fadeOutStartTime) / speed));
alpha *= fadeIn(vTimeStamp - vFirstTime);
return alpha;
}`)}function Un(r){switch(r){case 2:return"return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;";case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return"return 1.0;"}}const jn=G();function kn(r){switch(r.elementType){case"float":switch(r.elementCount){case 1:return s`float`;case 2:return s`vec2`;case 3:return s`vec3`;case 4:return s`vec4`;case 9:return s`mat3`;default:r.elementCount}break;case"int":switch(r.elementCount){case 1:return s`int`;case 2:return s`ivec2`;case 3:return s`ivec3`;case 4:return s`ivec4`;case 9:throw Error("Invalid element count 9 for type int");default:r.elementCount}break;case"uint":switch(r.elementCount){case 1:return s`uint`;case 2:return s`uvec2`;case 3:return s`uvec3`;case 4:return s`uvec4`;case 9:throw Error("Invalid element count 9 for type uint");default:r.elementCount}break;default:r.elementType}throw Error("unsupported field")}const hr=new ct("constNaN",()=>NaN,{supportsNaN:!0});let Ut=class extends Qr{constructor(e){super(),this.supportNaN=e}};S([x()],Ut.prototype,"supportNaN",void 0);function Bn(r,e){let t=e==null?void 0:e.supportNaN;t&&(r.uniforms.add(hr),r.code.add(s`bool bitsEncodeFloat16NaN(highp uint bits) {
const highp uint nanExponent = 0x00007c00u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x000003ffu;
return exponent == nanExponent && mantissa != 0u;
}`)),r.code.add(s`
    mediump float unpackHalf1x16(highp uint bits) {
      ${b(t,s`
        if (bitsEncodeFloat16NaN(bits)) {
          return constNaN;
        }`)}
      return unpackHalf2x16(bits).x;
    }`),r.code.add(s`
    mediump vec2 unpackHalf2x16NaNSupport(highp uint bits) {
      vec2 result = unpackHalf2x16(bits);
      ${b(t,s`
        if (bitsEncodeFloat16NaN(bits)) {
          result.x = constNaN;
        }
        if (bitsEncodeFloat16NaN(bits >> ${s.uint(Se[2])})) {
          result.y = constNaN;
        }
        `)}
      return result;
    }`)}function Jn(r,e){let t=e==null?void 0:e.supportNaN;t&&(r.uniforms.add(hr),r.code.add(s`bool bitsEncodeFloat32NaN(highp uint bits) {
const highp uint nanExponent = 0x7f800000u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x007fffffu;
return exponent == nanExponent && mantissa != 0u;
}`)),r.code.add(s`
    highp float unpackFloat1x32(highp uint bits) {
      ${b(t,s`
        if (bitsEncodeFloat32NaN(bits)) {
          return constNaN;
        }`)}
      return uintBitsToFloat(bits);
    }`)}function Hn(r){r.code.add(s`mediump int unpackInt1x16(highp uint bits) {
highp uint signExtendedBits = (bits & 0x8000u) != 0u ? (bits | 0xffff0000u) : bits;
return int(signExtendedBits);
}`)}function Gn(r,e){let{fieldType:t}=r,i=Xn[t];return`${i(Kn(r,e))}`}function Qe(r,e){let t=[];for(let i of r){let a=s`unpackFloat1x32(${i})`;t.push(a)}return t.join(e)}const Yn=r=>s`${r[0]}`,qn=r=>s`uvec4(${r.join(", ")})`,vi=r=>s`${r[0]}`,Si=r=>{let e=r[0],t=s`uvec4(${s.uint(Se[0])}, ${s.uint(Se[1])}, ${s.uint(Se[2])}, ${s.uint(Se[3])})`,i=s`uvec4(${s.hexuint(mr[1])})`;return s`((uvec4(${e}) >> ${t}) & ${i})`},Xn={u8:vi,u32:Yn,vec4u32:qn,unorm8:r=>s`(float(${vi(r)})/${s.float(Jt)})`,vec4unorm8:r=>s`(vec4(${Si(r)})/${s.float(Jt)})`,snorm16:r=>s`unpackSnorm2x16(${r[0]}).x`,vec2snorm16:r=>s`unpackSnorm2x16(${r[0]})`,f16:r=>s`unpackHalf1x16(${r[0]})`,vec4f16:r=>s`vec4(unpackHalf2x16NaNSupport(${r[0]}), unpackHalf2x16NaNSupport(${r[1]}))`,f32:r=>s`unpackFloat1x32(${r[0]})`,vec4u8:Si,vec2f32:r=>s`vec2(${Qe(r,", ")})`,vec3f32:r=>s`vec3(${Qe(r,", ")})`,vec4f32:r=>s`vec4(${Qe(r,", ")})`,mat3f32:r=>s`mat3(${Qe(r,`,
`)})`};function Kn(r,e){let{byteOffset:t,byteSize:i}=r,a=e.channelByteStride,n=e.byteStride,o=Math.ceil(i/gt),l=Zn[e.channels],c=[];for(let d=0;d<o;++d){let p=d*gt,u=t+p,h=i-p,v=Math.min(h,gt),m=0,g=[];for(;m<v;){let y=u+m,f=Math.floor(y/n),$=y%n,D=Math.floor($/a),P=$%a,w=a-P,z=v-m,_=Math.min(w,z),C=s`texel${s.int(f)}${l[D]}`,F=_===4?"":s` & ${s.hexuint(mr[_])}`,O=P===0?"":s` >> ${s.uint(Se[P])}`,Y=s`((${C}${O})${F})`,L=m===0?"":s` << ${s.uint(Se[m])}`,k=s`(${Y})${L}`;g.push(k),m+=_}c.push(s`(${g.join(" | ")})`)}return c}const gt=4,Se=[0,8,16,24],mr=[0,255,65535,16777215,4294967295],Zn={1:[s``],2:[s`.x`,s`.y`],4:[s`.x`,s`.y`,s`.z`,s`.w`]},Qn=new Ut(!0),es=new Ut(!1);let ts=class{constructor(e,t){this._shader=e,this._namespace=t,this._used=new Map}getItemSuffix(e){return e===0?"":`${e<0?"Minus":"Plus"}${Math.abs(e)}`}getItemDataName(e=0){return`${this._namespace}ItemData${this.getItemSuffix(e)}`}getStructName(e=0){return`${this._namespace}TextureBackedBufferItemData${this.getItemSuffix(e)}`}getFetchName(e=0){return`${this._namespace}fetchTextureBackedBufferItemData${this.getItemSuffix(e)}`}getStrideName(){return`${this._namespace}tbbStride`}getTextureAttribute(e,t=0){let i=this._used,a=this.getItemDataName(t),n=i.get(t);return n??(n=new Set,i.set(t,n)),n.add(e),s`${a}.${e}`}generateVertexCode(e){let{_shader:t,_used:i}=this,a=new ui(t.vertex);for(let n of i.keys())this._generateFetchFunction(n,a,e);return a.generateSource()}generateVertexMainCode(e){let{_shader:t,_used:i}=this,a=new ui(t.vertex);for(let n of i.keys())this._generateFetchFunctionCall(n,a,e);return a.generateSource()}_generateFetchFunctionCall(e,t,i){let{itemIndexExpression:a}=i,n=this._used.get(e);if(n==null||n.size===0)return;let o=this.getItemDataName(e),l=this.getFetchName(e);t.add(s`${o} = ${l}(${a});`)}_getIndexOffset(e=0){return e===0?s``:s`${e<0?"-":"+"}${s.uint(Math.abs(e))}`}_generateFetchFunction(e,t,i){let{bufferUniform:a,layout:n}=i,{texelFormatInfo:o}=n,l=this._used.get(e);if(l==null||l.size===0)return;let c=this.getStrideName(),d=this.getStructName(e),p=this.getItemDataName(e),u=this.getFetchName(e),h=this._getIndexOffset(e),v=[];for(let f of n.fields.values())l.has(f.name)&&v.push(f);if(v.length===0)return;let m=[];for(let f=0;f<n.texelStride;++f)m.push(!1);for(let f of v)for(let $=0;$<f.numTexels;++$)m[f.startTexel+$]=!0;t.add(s`
  struct ${d} {`);for(let f of v)t.add(s`\t${kn(f)} ${f.name};`);t.add(s`};`),t.add(s`\n${d} ${u}( highp uint baseIndex ) {
    ${d} itemData;
    highp uint index = (baseIndex${h}) * ${c};
    highp uint rowWidth = uint(textureSize(${a.name}, 0).x);
    int coordX = int(index % rowWidth);
    int coordY = int(index / rowWidth);\n`);let g=rs[o.channels],y=as[o.channels];for(let f=0;f<m.length;++f)m[f]!==!1&&t.add(s`highp ${g} texel${s.int(f)} = texelFetch(${a.name}, ivec2(coordX + ${s.int(f)}, coordY), 0)${y};`);for(let f of v)t.add(s`itemData.${f.name} = ${Gn(f,o)};`);t.add(s`return itemData;\n}`),t.add(s`${d} ${p};`)}},is=class{constructor(e){this._parameters=e,this.moduleId=Vr(),this.namespace=`_tbb_${this.moduleId}_`}createBuilder(e,t){let i=null,a=n=>{i=this._buildTextureBackedBufferShaderCode(n)};return t?e.include(a,t):e.include(a),ce(i!=null,"Valid builder expected."),i}_buildTextureBackedBufferShaderCode(e){let{namespace:t,_parameters:i}=this,{bufferUniform:a,layout:n}=i,o=i.enableNaNSupport?Qn:es,{vertex:l}=e,c=new ts(e,t);l.include(Jn,o),l.include(Bn,o),l.include(Hn);let d=c.getStrideName(),p=c.getStructName(),u=c.getFetchName(),h=c.getItemDataName();for(let v of[d,p,u,h])ce(v.length<1024,"Identifiers do not have a valid length");return l.constants.add(d,"uint",n.texelStride),l.uniforms.add(a),l.code.add(()=>c.generateVertexCode(i)),l.main.add(()=>c.generateVertexMainCode(i)),c}};const rs={1:s`uint`,2:s`uvec2`,4:s`uvec4`},as={1:s`.x`,2:s`.xy`,4:""};let ns=class extends ea{constructor(e,t){super(e,"usampler2D",2,(i,a,n)=>i.bindTexture(e,t(a,n)))}};function gr(r){return rn().u32("textureElementIndex",{integer:!0}).vec2f16("lineParameters")}const ss=[{type:"vec3f32",name:"position"},{type:"f32",name:"u0"}];function vr(r){let e=[...ss];return r.hasVVColor?e.push({type:"f32",name:"colorFeatureAttribute"}):e.push({type:"vec4unorm8",name:"color"}),r.hasVVSize?e.push({type:"f32",name:"sizeFeatureAttribute"}):e.push({type:"f32",name:"size"}),r.hasVVOpacity&&e.push({type:"f32",name:"opacityFeatureAttribute"}),rr()&&e.push({type:"vec4unorm8",name:"olidColor"}),r.hasAnimation&&e.push({type:"vec4f16",name:"timeStamps"}),new gn(e)}const os=new ns("componentTextureBuffer",r=>r.textureBuffer);function ls(r){return new is({layout:vr(r),itemIndexExpression:"textureElementIndex",bufferUniform:os})}const Sr=1;function xr(r){let e=new mn,{attributes:t,varyings:i,vertex:a,fragment:n}=e,{applyMarkerOffset:o,draped:l,shadingEnabled:c,output:d,capType:p,stippleEnabled:u,falloffEnabled:h,wireframe:v,innerColorEnabled:m,hasAnimation:g,hasScreenSizePerspective:y,worldSized:f,imagePattern:$,useFlatJoinVarying:D}=r,P=p===2,w=u&&P,z=h||w,_=u||P,C=f&&!l,F=r.usePerspectiveCorrectStipple,O=ls(r).createBuilder(e,r);a.inputs.add("position",()=>O.getTextureAttribute("position")),r.hasVVSize?a.inputs.add("sizeFeatureAttribute",()=>O.getTextureAttribute("sizeFeatureAttribute")):a.inputs.add("size",()=>O.getTextureAttribute("size")),r.hasVVOpacity&&a.inputs.add("opacityFeatureAttribute",()=>O.getTextureAttribute("opacityFeatureAttribute")),r.hasVVColor?a.inputs.add("colorFeatureAttribute",()=>O.getTextureAttribute("colorFeatureAttribute")):a.inputs.add("color",()=>O.getTextureAttribute("color")),n.include(Za),e.include(Dn,r),e.include(En,r),d===11?(e.varyings.add("objectAndLayerIdColorVarying","vec4"),a.code.add(s`
      vec4 getOlidColor() {
        return ${O.getTextureAttribute("olidColor")};
      }

      void forwardObjectAndLayerIdColor() {
        objectAndLayerIdColorVarying = getOlidColor();
      }
    `),n.code.add(s`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)):(a.code.add(s`void forwardObjectAndLayerIdColor() {}`),n.code.add(s`void outputObjectAndLayerIdColor() {}`));let Y=o&&!l;if(Y&&e.include(In,r),fa(a,r),l&&(f||u)){let L=f?"groundMetersToScreenRatio":"planarDistanceToScreenRatio";a.uniforms.add(new ct(L,k=>1/(k.screenToPlanarDistanceRatio*(f?k.planarDistanceToGroundRatio:1))))}return C&&a.uniforms.add(tr,ir),a.uniforms.add(ha,er,ma,new ie("miterLimit",L=>L.join==="miter"?L.miterLimit:0)),a.constants.add("LARGE_HALF_FLOAT","float",65500),a.constants.add("EPS","float",.001),a.constants.add("NUM_JOIN_SUBDIVISIONS","float",r.numJoinSubdivisions),t.add("textureElementIndex","uint"),t.add("lineParameters","vec2"),i.add("vColor","vec4"),i.add("vpos","vec3",{invariant:!0}),i.add("vLineDistance","float"),i.add("vLineWidth","float"),D?i.add("vIsInsideJoin","int",{flat:!0}):i.add("vIsInsideJoin","float"),i.add("vStretchFactor","float"),i.add("vJoinCenterLineSDFs","vec2"),C&&i.add("vJoinLineWidths","vec2"),i.add("vSubdivisionFactor","float"),u&&i.add("vLineSizeInv","float"),z&&i.add("vLineDistanceNorm","float"),P&&(i.add("vSegmentSDF","float"),i.add("vReverseSegmentSDF","float")),a.code.add(s`vec3 perpendicular(vec3 v) {
return vec3(v.y, -v.x, 0.0);
}
float nearPlaneInterpolationFactor(float nearPlaneDistance, vec4 start, vec4 end) {
return (-nearPlaneDistance - start.z) / (end.z - start.z);
}
vec3 rotateZ(vec3 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return vec3(m * v.xy, v.z);
}`),a.code.add(s`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
posNdc.z /= posNdc.w;
return posNdc;
}`),a.code.add(s`
    void clip(
      inout vec4 pos,
      inout vec4 prev,
      inout vec4 next,
      ${b(F,s`inout float u0, inout float prevU0, inout float nextU0,`)}
      bool isStartVertex
    ) {
      float adjustedNearPlaneDistance = nearFar[0] * 0.99;

      if (pos.z > -nearFar[0]) {
        // Current position behind near plane, so we need to clip
        if (!isStartVertex) {
          if (prev.z < -nearFar[0]) {
            // Previous position in front of near plane
            float clipFactor = nearPlaneInterpolationFactor(adjustedNearPlaneDistance, prev, pos);
            ${b(F,s`u0 = mix(prevU0, u0, clipFactor); nextU0 = u0;`)}
            pos = mix(prev, pos, clipFactor);
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if (next.z < -nearFar[0]) {
            // Next position in front of near plane
            float clipFactor = nearPlaneInterpolationFactor(adjustedNearPlaneDistance, pos, next);
            ${b(F,s`u0 = mix(u0, nextU0, clipFactor); prevU0 = u0;`)}
            pos = mix(pos, next, clipFactor);
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        // Current position visible
        if (prev.z > -nearFar[0]) {
          // Previous position behind near plane
          float clipFactor = nearPlaneInterpolationFactor(adjustedNearPlaneDistance, pos, prev);
          ${b(F,s`prevU0 = mix(u0, prevU0, clipFactor);`)}
          prev = mix(pos, prev, clipFactor);
        }

        if (next.z > -nearFar[0]) {
          // Next position behind near plane
          float clipFactor = nearPlaneInterpolationFactor(adjustedNearPlaneDistance, next, pos);
          ${b(F,s`nextU0 = mix(nextU0, u0, clipFactor);`)}
          next = mix(next, pos, clipFactor);
        }
      }
    }
  `),Nt(a),a.constants.add("aaWidth","float",1),n.constants.add("aaWidth","float",1),a.main.add(s`
    vec3 position = ${O.getTextureAttribute("position")};
    float u0 = ${O.getTextureAttribute("u0")};
    ${b(f,s`
        float prevU0 = ${O.getTextureAttribute("u0",-1)};
        float nextU0 = ${O.getTextureAttribute("u0",1)};
        ${b(!l,s`
            u0 *= metersPerRenderUnit;
            prevU0 *= metersPerRenderUnit;
            nextU0 *= metersPerRenderUnit;
          `)}
      `)}

    // unpack values from vertex type
    float vertexType = abs(lineParameters.y);
    ${b(!D,s`
      bool isInsideJoin = vertexType > 8.0;
      vertexType -= isInsideJoin ? 8.0 : 0.0;
    `)}
    float lineSide = sign(lineParameters.y);
    bool isStartVertex = vertexType == 2.0 || vertexType == 4.0;
    vec3 prevPosition = ${O.getTextureAttribute("position",-1)};
    vec3 nextPosition = ${O.getTextureAttribute("position",1)};

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${nn};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);

      bool isJoin = vertexType < 3.0;
  `),Y&&a.main.add(s`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),e.include(Cn),C&&a.code.add(s`vec2 computePerspectiveInnerJoin(
vec2 leftDirection,
vec2 rightDirection,
float leftLength,
float rightLength,
float previousWidth,
float currentWidth,
float nextWidth,
float lineSide,
bool isStartVertex
) {
vec2 leftNormal = vec2(leftDirection.y, -leftDirection.x) * lineSide;
vec2 rightNormal = vec2(rightDirection.y, -rightDirection.x) * lineSide;
vec2 segmentOffset = (isStartVertex ? rightNormal : leftNormal) * currentWidth;
if (min(leftLength, rightLength) <= EPS) {
return segmentOffset;
}
vec2 leftEdge = leftDirection + leftNormal * ((currentWidth - previousWidth) / leftLength);
vec2 rightEdge = rightDirection + rightNormal * ((nextWidth - currentWidth) / rightLength);
vec2 offset = (rightNormal - leftNormal) * currentWidth;
float determinant = leftEdge.x * rightEdge.y - leftEdge.y * rightEdge.x;
float determinantScale = length(leftEdge) * length(rightEdge);
const float parallelTolerance = EPS * EPS;
if (!(abs(determinant) > parallelTolerance * determinantScale)) {
return segmentOffset;
}
float leftDistance = (offset.x * rightEdge.y - offset.y * rightEdge.x) / determinant;
float rightDistance = (offset.x * leftEdge.y - offset.y * leftEdge.x) / determinant;
if (!(leftDistance >= -leftLength && leftDistance <= 0.0 &&
rightDistance >= 0.0 && rightDistance <= rightLength)) {
return segmentOffset;
}
return leftNormal * currentWidth + leftDistance * leftEdge;
}`),C&&a.code.add(s`float perspectiveWidthAtOffset(vec2 offset, vec2 segment, float widthAtOrigin, float widthChange) {
float segmentFraction = dot(offset, segment) / max(dot(segment, segment), EPS * EPS);
return widthAtOrigin + segmentFraction * widthChange;
}`),a.code.add(s`
    vec2 computeJoinAndCapDisplacement(
      bool isJoin,
      bool isStartVertex,
      inout vec3 left,
      inout vec3 right,
      float lineSide,
      float lineWidth,
      ${b(C,"vec2 neighborWidths,")}
      float subdivisionFactor,
      float perspectiveDivisor
    ) {
      float leftLen = length(${b(C,s`left.xy`,s`left`)});
      float rightLen = length(${b(C,s`right.xy`,s`right`)});
      left = leftLen > EPS ? left / leftLen : vec3(0.0);
      right = rightLen > EPS ? right / rightLen : vec3(0.0);

      vec3 capDisplacementDir = vec3(0.0);
      vec3 joinDisplacementDir = vec3(0.0);
      float displacementLen = lineWidth;
      float miterDisplacementLen = lineWidth;
      float innerDisplacementLen = lineWidth;
      bool isOutside = false;
      ${b(C,"vec2 innerDisplacement = vec2(0.0);")}

      if (isJoin) {
        // Determine if the vertex is on the outside or inside of the join.
        isOutside = (left.x * right.y - left.y * right.x) * lineSide > 0.0;

        // Compute the miter join position first.
        ${b(C,s`
            vec2 bisector = left.xy + right.xy;
            vec2 segmentDirection = isStartVertex ? right.xy : left.xy;
            vec3 joinDirection = vec3(length(bisector) > EPS ? normalize(bisector) : segmentDirection, 0.0);
            joinDisplacementDir = perpendicular(joinDirection);

            if (leftLen > EPS && rightLen > EPS) {
              float nDotSeg = dot(joinDisplacementDir, left);
              displacementLen /= length(nDotSeg * left.xy - joinDisplacementDir.xy);
              miterDisplacementLen = displacementLen;
            }

            innerDisplacement = computePerspectiveInnerJoin(
              left.xy, right.xy, leftLen, rightLen,
              neighborWidths.x, lineWidth, neighborWidths.y,
              isOutside ? -lineSide : lineSide, isStartVertex
            );
            innerDisplacementLen = length(innerDisplacement);
          `,s`
            vec3 joinDirection = normalize(left + right);
            joinDisplacementDir = perpendicular(joinDirection);

            if (leftLen > EPS && rightLen > EPS) {
              float nDotSeg = dot(joinDisplacementDir, left);
              displacementLen /= length(nDotSeg * left - joinDisplacementDir);
              miterDisplacementLen = displacementLen;
              innerDisplacementLen = min(displacementLen, min(leftLen, rightLen) / abs(nDotSeg));

              // Limit displacement of inner vertices.
              if (!isOutside) {
                displacementLen = innerDisplacementLen;
              }
            }
          `)}

        // Compute stretch compensation for feathering.
        ${b(D,s`
          if (subdivisionFactor > 0.0) {
            vIsInsideJoin = 1;
          }
        `)}
        vSubdivisionFactor = isOutside ? subdivisionFactor : 0.5;

        if (miterDisplacementLen > miterLimit * lineWidth) {
          vec2 leftScreenDir = left.xy;
          vec2 rightScreenDir = right.xy;
          float leftScreenLen = length(leftScreenDir);
          float rightScreenLen = length(rightScreenDir);

          if (leftScreenLen > EPS && rightScreenLen > EPS) {
            leftScreenDir /= leftScreenLen;
            rightScreenDir /= rightScreenLen;

            /**
             * Feathering AA needs special considerations on join triangles because these can get stretched a lot at acute angles.
             * We use the triangle height to determine by how much they get stretched.
             */
            float theta = acos(clamp(dot(leftScreenDir, rightScreenDir), -1.0, 1.0));
            /**
             * The argument of cos here is half the angle of a join triangle.
             * We start with one triangle, and every subdivision adds another triangle.
             */
            float subdividedTriangleHeight = (innerDisplacementLen + lineWidth) * cos(theta / (2.0 + 2.0 * NUM_JOIN_SUBDIVISIONS));
            float bevelTriangleHeight = innerDisplacementLen + lineWidth * cos(theta * 0.5);
            float triangleHeight = NUM_JOIN_SUBDIVISIONS > 0.0 ? subdividedTriangleHeight : bevelTriangleHeight;
            vStretchFactor = noPerspectiveWrite(max(triangleHeight / (2.0 * lineWidth), 1.0), perspectiveDivisor);
          }
        }

        if (isOutside && displacementLen > miterLimit * lineWidth) {
          ${b(r.roundJoins,s`
              vec3 startDir = perpendicular(leftLen < EPS ? right : left);
              vec3 endDir = perpendicular(rightLen < EPS ? left : right);
              float factor = ${u?s`min(1.0, subdivisionFactor * ((NUM_JOIN_SUBDIVISIONS + 1.0) / NUM_JOIN_SUBDIVISIONS))`:s`subdivisionFactor`};

              float rotationAngle = acos(clamp(dot(startDir.xy, endDir.xy), -1.0, 1.0));
              joinDisplacementDir = rotateZ(startDir, -lineSide * factor * rotationAngle);
            `,s`
              /**
               * Convert to bevel join if miterLimit is exceeded.
               * Here vertices with a subdivisionFactor > 0 are either START vertices or
               * an additional END vertex to fix line pattern interpolation.
               * The additional vertex is considered to be the END of the previous segment.
               * However, it is pushed to the position of the START of the next segment,
               * so that the entire bevel join will be part of the first segment, pattern-wise.
               */
              vec3 startDir = perpendicular(leftLen < EPS ? right : left);
              vec3 endDir = perpendicular(rightLen < EPS ? left : right);

              ${b(u,s`joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? endDir : startDir;`,s`joinDisplacementDir = mix(startDir, endDir, subdivisionFactor);`)}
            `)}
          displacementLen = lineWidth;
        }
      } else {
        joinDisplacementDir = perpendicular(isStartVertex ? right : left);
        ${p===0?"":s`capDisplacementDir = vec3((isStartVertex ? -right : left).xy, 0.0);`}
      }

      ${b(C,s`
        if (isJoin && !isOutside) {
          return innerDisplacement;
        }
      `)}
      return (joinDisplacementDir.xy * lineSide + capDisplacementDir.xy) * displacementLen;
    }
  `),a.main.add(s`
      clip(pos, prev, next, ${b(F,s`u0, prevU0, nextU0,`)} isStartVertex);

      vec3 clippedPos = pos.xyz;
      vec3 clippedCenter = mix(pos.xyz, isStartVertex ? next.xyz : prev.xyz, 0.5);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);

      vec3 left = (pos.xyz - prev.xyz);
      vec3 right = (next.xyz - pos.xyz);

      float lineSize = getSize(${b(y,"clippedPos")});
      ${b(u&&y,"float patternLineSize = getSize(clippedCenter);")}
      ${b(u&&!y,"float patternLineSize = lineSize;")}

      ${b(f,s`
          ${b(l,s`float lineSizeScreen = lineSize * groundMetersToScreenRatio;`,s`
              float widthPerInverseDepth = lineSize / (metersPerRenderUnit * screenPixelSizePerDistance);
              float lineSizeScreen = widthPerInverseDepth / max(-clippedPos.z, nearFar[0]);
            `)}
          float lineWidth = lineSizeScreen * pixelRatio + aaWidth;
        `,s`
          float lineWidth = lineSize * pixelRatio + aaWidth;
        `)}

      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${u?s`vLineSizeInv = noPerspectiveWrite(1.0 / ${f?"lineSize":"max(lineSize, 1.0)"}, pos.w);`:""}
  `),_&&a.main.add(s`
      float isEndVertex = float(!isStartVertex);
      vec3 segmentOrigin = mix(pos.xyz, prev.xyz, isEndVertex);
      vec3 segment = mix(right, left, isEndVertex);
      ${P?s`vec3 segmentEnd = mix(next.xyz, pos.xyz, isEndVertex);`:""}
    `),a.main.add(s`
    vIsInsideJoin = ${D?s`0`:s`float(isInsideJoin)`};
    vStretchFactor = 1.0;
    vSubdivisionFactor = 0.0;
    vJoinCenterLineSDFs = vec2(LARGE_HALF_FLOAT);

    ${b(C,s`
        vec2 neighborWidths = widthPerInverseDepth / max(vec2(prev.w, next.w), vec2(nearFar[0])) * pixelRatio + aaWidth;
      `)}

    vec2 displacementXY = computeJoinAndCapDisplacement(
      isJoin,
      isStartVertex,
      left,
      right,
      lineSide,
      lineWidth,
      ${b(C,"neighborWidths,")}
      lineParameters.x,
      pos.w
    );
    ${b(C,s`
        // Feathering must use each strip's width at the displaced vertex, not at the original join.
        float leftWidth = perspectiveWidthAtOffset(displacementXY, pos.xy - prev.xy, lineWidth, lineWidth - neighborWidths.x);
        float rightWidth = perspectiveWidthAtOffset(displacementXY, next.xy - pos.xy, lineWidth, neighborWidths.y - lineWidth);
        // Match vJoinCenterLineSDFs: right first, selected when vSubdivisionFactor > 0.5.
        vJoinLineWidths = noPerspectiveWrite(vec2(rightWidth, leftWidth), pos.w);
      `)}
    vec3 segmentDirection = isStartVertex ? right : left;

    /**
     * To prevent z-fighting between layers, we also adjust the z value.
     * We want to ensure that the orientation of the final triangles is the same, regardless of the line width.
     * To do so, the below formula projects the xy displacement onto the original segment direction
     * to find the z-offset necessary so the triangle orientation is independent of the width.
     */
    float displacementZ = dot(displacementXY, segmentDirection.xy) / dot(segmentDirection.xy, segmentDirection.xy) * segmentDirection.z;
    vec3 displacement = vec3(displacementXY, displacementZ);

    float lineDistNorm = noPerspectiveWrite(lineSide, pos.w);

    vLineDistance = lineWidth * lineDistNorm;
    ${z?s`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xyz += displacement;
  `),a.main.add(s`if (isJoin) {
vec2 joinCenterToVertex = displacementXY;
vec2 leftCenterlineDir = left.xy;
vec2 rightCenterlineDir = right.xy;
float leftCenterlineLen = length(leftCenterlineDir);
float rightCenterlineLen = length(rightCenterlineDir);
leftCenterlineDir = leftCenterlineLen > EPS ? leftCenterlineDir / leftCenterlineLen : vec2(1.0, 0.0);
rightCenterlineDir = rightCenterlineLen > EPS ? rightCenterlineDir / rightCenterlineLen : leftCenterlineDir;
vJoinCenterLineSDFs = noPerspectiveWrite(
vec2(
dot(vec2(rightCenterlineDir.y, -rightCenterlineDir.x), joinCenterToVertex),
dot(vec2(leftCenterlineDir.y, -leftCenterlineDir.x), joinCenterToVertex)
),
pos.w
);
}`),P&&a.main.add(s`vec2 segmentDir = normalize(segment.xy);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin.xy, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd.xy, -segmentDir)), pos.w);`),u&&(l?a.main.add(s`float stippleDistanceToScreenRatio = ${f?"groundMetersToScreenRatio":"planarDistanceToScreenRatio"};`):a.main.add(s`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float stippleDistanceToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),a.main.add(s`
      float segmentLengthScreenDouble = length(segment.xy);
      float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
      float discreteStippleDistanceToScreenRatio = discretizeStippleDistanceToScreenRatio(stippleDistanceToScreenRatio);
      float segmentLengthRender = ${b(f,s`abs(mix(nextU0 - u0, u0 - prevU0, isEndVertex))`,s`length(mix(nextPosition - position, position - prevPosition, isEndVertex))`)};

      ${b(!l||f,s`
          float segmentStartRender = ${b(f,s`mix(u0, prevU0, isEndVertex)`,s`mix(u0, u0 - segmentLengthRender, isEndVertex)`)};
        `)}

      vStipplePatternStretch = stippleDistanceToScreenRatio / discreteStippleDistanceToScreenRatio;
    `),l?a.main.add(s`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteStippleDistanceToScreenRatio / stippleDistanceToScreenRatio;
float startPseudoScreen = u0 * discreteStippleDistanceToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):a.main.add(s`float startPseudoScreen = segmentStartRender * discreteStippleDistanceToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteStippleDistanceToScreenRatio;`),a.uniforms.add(new ie("stipplePatternPixelSize",L=>fr(L))),a.main.add(s`
      float patternLength = patternLineSize * stipplePatternPixelSize;
      vec2 stippleDistanceLimits;

      ${b(f,s`
          stippleDistanceLimits = vec2(segmentStartRender, segmentStartRender + segmentLengthRender);
          vStipplePatternStretch = 1.0;

          ${b($,s`
              // The v-coordinate used in case of an image pattern.
              bool isLeft = lineSide < 0.0;
              vStippleV = isLeft ? 0.0 : 1.0;
            `)}
        `,s`
          // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the
          // fragment shader
          stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
        `)}

      vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of
      // joins)
      if (segmentLengthScreenDouble >= EPS) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1]
        // at the original vertex positions, and slightly outside of that range at the displaced positions
        vec3 stippleDisplacement = pos.xyz - segmentOrigin;
        float stippleDisplacementFactor = dot(segment.xy, stippleDisplacement.xy) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (stippleDistanceLimits.y - stippleDistanceLimits.x);
      }

      ${b(F,s`
          float segmentStartInverseW = 1.0 / mix(pos.w, prev.w, isEndVertex);
          float segmentEndInverseW = 1.0 / mix(next.w, pos.w, isEndVertex);
          vStipplePerspective = noPerspectiveWrite(
            vec4(stippleDistanceLimits, segmentStartInverseW, segmentEndInverseW),
            pos.w
          );
        `)}

      // Cancel out perspective-correct interpolation for screen-space stipple distances.
      vStippleLimitsAndCaps.xy = noPerspectiveWrite(stippleDistanceLimits, pos.w);
      vStippleDistance = noPerspectiveWrite(vStippleDistance, pos.w);

      // Disable stipple distance limits on caps
      vStippleLimitsAndCaps.zw = isJoin ? vec2(0.0) :
               isStartVertex ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    `)),a.main.add(s`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;
      pos.z = pos.z * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a, pos.w);

      ${v&&!l?"pos.z -= EPS * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),e.include(ga,r),e.include(ur),n.include(va),n.include(Sa),n.include(xa,r),n.main.add("discardBySlice(vpos);"),n.code.add(s`
    float lineFeatheringFactor(float lineWidth, float lineDistance) {
      /**
       * Determine whether we are inside the feathering region or not, under
       * consideration of triangle stretch and the distance to the centerline.
       */
      float stretchFactor = float(vIsInsideJoin) > 0.5 ? noPerspectiveRead(vStretchFactor) : 1.0;
      float featherWidth = 2.0;
      // Keep the filter in render-target pixels, including when its two sides overlap on a subpixel stroke.
      float featherStartDistance = lineWidth - featherWidth / stretchFactor;
      float straightLineWidth = ${C?s`noPerspectiveRead(vSubdivisionFactor > 0.5 ? vJoinLineWidths.x : vJoinLineWidths.y)`:"lineWidth"};
      float straightFeatherStartDistance = straightLineWidth - featherWidth;
      float value = abs(lineDistance);
      float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
      vec2 joinCenterSDFs = noPerspectiveRead(vJoinCenterLineSDFs);
      float joinCenterDistance = abs(vSubdivisionFactor > 0.5 ? joinCenterSDFs.x : joinCenterSDFs.y);
      float straightFeather = (joinCenterDistance - straightFeatherStartDistance) / featherWidth;
      feather = float(vIsInsideJoin) > 0.5 ? max(feather, straightFeather) : feather;
      float coverage = min(lineWidth - aaWidth, 1.0);
      return clamp(1.0 - feather, 0.0, coverage);
    }
  `),n.main.add(s`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${b(z,s`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),w&&n.main.add(s`float nominalLineWidth = lineWidth - aaWidth;`),v?n.main.add(s`vec4 albedo = vec4(1.0, 0.0, 1.0, 1.0);
vec4 finalColor = albedo;`):(P&&n.main.add(s`
        float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
        vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - ${w?"nominalLineWidth":"lineWidth"}) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < alphaCutoff) {
          discard;
        }
      `),w?n.main.add(s`vec2 stipplePosition = vec2(
min(getStippleCapDistance(), 0.0) * nominalLineWidth,
lineDistance
);
float stippleRadius = length(stipplePosition);
float stippleCapSDF = (stippleRadius - nominalLineWidth) * 0.5;
float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
float lineCoverage = min(lineFeatheringFactor(lineWidth, lineDistance), capCoverage);
float stippleAlpha = lineCoverage > 0.0 ? min(stippleCoverage, lineCoverage) / lineCoverage : 0.0;`):n.main.add(s`float stippleAlpha = getStippleAlpha(lineWidth);`),d!==11&&n.main.add(s`discardByStippleAlpha(stippleAlpha, alphaCutoff);`),n.uniforms.add(new At("intrinsicColor",L=>L.color)).main.add(s`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),m&&n.uniforms.add(new At("innerColor",L=>L.innerColor??L.color),new ie("innerWidth",(L,k)=>L.innerWidth*k.camera.pixelRatio)).main.add(s`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),n.main.add("vec4 albedo = blendStipple(color, stippleAlpha);"),h&&(n.uniforms.add(new ie("falloff",L=>L.falloff)),n.main.add(s`albedo.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),n.main.add(s`albedo.a *= ${w?"lineCoverage":"lineFeatheringFactor(lineWidth, lineDistance)"};`),g&&(a.main.add(`vec4 animatedAlphaTimeStamps = ${O.getTextureAttribute("timeStamps")};`),e.include(Nn,r),n.main.add("albedo.a *= animatedAlpha();")),c?(i.add("vnormal","vec3"),a.include(Qa,r),a.main.add("vnormal = getLocalUp(vpos, localOrigin);"),e.include(wn,r),n.main.add("vec4 finalColor = evaluateSceneLightingFragment(vpos, vnormal, albedo);")):n.main.add("vec4 finalColor = albedo;")),n.main.add(s`outputColorHighlightOLID(applySlice(finalColor, vpos), albedo.rgb);`),e}const cs=Object.freeze(Object.defineProperty({__proto__:null,build:xr,numRoundJoinSubdivisions:1},Symbol.toStringTag,{value:"Module"}));let Wt=class extends ba{constructor(r,e){super(r,e,an(gr())),this.shader=new ya(cs,()=>Rr(()=>Promise.resolve().then(()=>Fs),void 0)),this.ignoreUnused=!0,this.primitiveType=e.wireframe?Ht.LINES:Ht.TRIANGLE_STRIP}_makePipelineState(r,e){let{output:t,hasOccludees:i}=r;return Xe({blending:Ta(t,!1,r.emissionDimmingPass),depthTest:Pa(t),depthWrite:Da(r),colorWrite:ft,stencilWrite:i?ii:null,stencilTest:i?e?ti:$a:null,polygonOffset:Ye(r)})}initializePipeline(r){if(r.occluder){let{hasOccludees:e}=r;this._occluderPipelineTransparent=Xe({blending:pi,polygonOffset:Ye(r),depthTest:ri,depthWrite:null,colorWrite:ft,stencilWrite:null,stencilTest:e?za:null}),this._occluderPipelineOpaque=Xe({blending:pi,polygonOffset:Ye(r),depthTest:e?ri:ai,depthWrite:null,colorWrite:ft,stencilWrite:e?Ca:null,stencilTest:e?wa:null}),this._occluderPipelineMaskWrite=Xe({blending:null,polygonOffset:Ye(r),depthTest:ai,depthWrite:null,colorWrite:null,stencilWrite:e?ii:null,stencilTest:e?ti:null})}return this._occludeePipeline=this._makePipelineState(r,!0),this._makePipelineState(r,!1)}getPipeline(r,e,t){if(t)return this._occludeePipeline;switch(r.occluder){case 11:return this._occluderPipelineTransparent??super.getPipeline(r,e,t);case 10:return this._occluderPipelineOpaque??super.getPipeline(r,e,t);default:r.occluder;case void 0:case null:return this._occluderPipelineMaskWrite??super.getPipeline(r,e,t)}}};Wt=S([Ir("esri.views.3d.webgl-engine.shaders.RibbonLineTechnique")],Wt);let U=class extends ar{constructor(e){super(),this.spherical=e,this.emissionSource=0,this.pbrMode=0,this.draped=!1,this.shadingEnabled=!1,this.worldSized=!1,this.hasScreenSizePerspective=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.hasOccludees=!1,this.occluder=!1,this.receiveShadows=!0,this.hasShadowHighlights=!1,this.receiveAmbientOcclusion=!0,this.receiveGlobalIllumination=!0,this.textureCoordinateType=0,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1,this.renderOccluded=!1,this.useCustomDTRExponentForWater=!1,this.hasColorTexture=!1,this.useFillLights=!1}get lineWidthRequiresPosition(){return this.hasScreenSizePerspective||this.worldSized&&!this.draped}};S([x({count:8})],U.prototype,"emissionSource",void 0),S([x({count:8})],U.prototype,"pbrMode",void 0),S([x()],U.prototype,"draped",void 0),S([x()],U.prototype,"shadingEnabled",void 0),S([x()],U.prototype,"worldSized",void 0),S([x()],U.prototype,"hasScreenSizePerspective",void 0),S([x()],U.prototype,"hasVVSize",void 0),S([x()],U.prototype,"hasVVColor",void 0),S([x()],U.prototype,"hasVVOpacity",void 0),S([x()],U.prototype,"hasOccludees",void 0),S([x()],U.prototype,"occluder",void 0),S([x()],U.prototype,"receiveShadows",void 0),S([x()],U.prototype,"hasShadowHighlights",void 0),S([x()],U.prototype,"receiveAmbientOcclusion",void 0),S([x()],U.prototype,"receiveGlobalIllumination",void 0);const oo=16;let W=class extends U{constructor(){super(...arguments),this.capType=0,this.animation=2,this.polygonOffsetIndex=0,this.numJoinSubdivisions=1,this.polygonOffset=0,this.writeDepth=!1,this.transparent=!1,this.enableOITOffset=!0,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.wireframe=!1,this.imagePattern=!1,this.useFlatJoinVarying=!1}get hasAnimation(){return this.animation!==0}get usePerspectiveCorrectStipple(){return this.worldSized&&!this.draped}};S([x({count:3})],W.prototype,"capType",void 0),S([x({count:4})],W.prototype,"animation",void 0),S([x({count:16})],W.prototype,"polygonOffsetIndex",void 0),S([x({count:8})],W.prototype,"numJoinSubdivisions",void 0),S([x({count:5})],W.prototype,"polygonOffset",void 0),S([x()],W.prototype,"writeDepth",void 0),S([x()],W.prototype,"transparent",void 0),S([x()],W.prototype,"enableOITOffset",void 0),S([x()],W.prototype,"stippleEnabled",void 0),S([x()],W.prototype,"stippleOffColorEnabled",void 0),S([x()],W.prototype,"stipplePreferContinuous",void 0),S([x()],W.prototype,"roundJoins",void 0),S([x()],W.prototype,"applyMarkerOffset",void 0),S([x()],W.prototype,"falloffEnabled",void 0),S([x()],W.prototype,"innerColorEnabled",void 0),S([x()],W.prototype,"wireframe",void 0),S([x()],W.prototype,"imagePattern",void 0),S([x()],W.prototype,"useFlatJoinVarying",void 0);class co extends vn{constructor(e,t){super(e,ps),this.produces=new Map([[2,i=>ta(i)||Ue(i)&&this.parameters.renderOccluded===8],[3,i=>ia(i)],[10,i=>Qt(i)&&this.parameters.renderOccluded===8],[11,i=>Qt(i)&&this.parameters.renderOccluded===8],[4,i=>Ue(i)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[8,i=>Ue(i)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[18,i=>ra(i)]]),this._configuration=new W(t.state.isGlobal),this._isAssumedMetalDriver=t.stage.renderer.renderContext.rctx.isAssumedMetalDriver}updateConfiguration(e){super.updateConfiguration(e),this._configuration.useFlatJoinVarying=!this._isAssumedMetalDriver;let t=this.parameters.stipplePattern!=null&&this.parameters.stippleTexture!=null&&e.output!==10,i=t&&this.parameters.isImagePattern()&&this._configuration.draped,a=this.parameters.usesWorldSizedWidth(i);this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.stippleEnabled=t,this._configuration.stippleOffColorEnabled=t&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=t&&this.parameters.stipplePreferContinuous,this._configuration.numJoinSubdivisions=br(this.parameters.join,t),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&fs(this.parameters.markerParameters),this._configuration.polygonOffsetIndex=this.parameters.polygonOffsetIndex,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=+!!this.emissions,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective&&!a,this._configuration.worldSized=a,this._configuration.imagePattern=i}get visible(){var e;return this.parameters.color[3]>=je||this.parameters.stipplePattern!=null&&(((e=this.parameters.stippleOffColor)==null?void 0:e[3])??0)>je}get emissions(){return this.parameters.emissiveStrength>0?this.parameters.renderOccluded===8?1:2:0}setParameters(e,t){e.animation=this.parameters.animation,super.setParameters(e,t)}intersectRayDraped({attributes:e},t,i,a,n,o,l){if(!t.options.selectionMode)return;let c=this._getLineSize(e,!0),d=i[0],p=i[1],u=xi(c,o,l,this.parameters.usesWorldSizedWidth()),h=Number.MAX_VALUE,v=0;for(let m of bi(fe,Fe,this.parameters,e)){let g=d-fe[0],y=p-fe[1],f=Fe[0]-fe[0],$=Fe[1]-fe[1],D=f*g+$*y,P=f*f+$*$,w=_t(D/P,0,1),z=f*w-g,_=$*w-y,C=z*z+_*_;C<h&&(h=C,v=m)}h<u*u&&a(n.distance,n.renderDistance,n.normal,v)}intersectRay(e,t,i,a,n,o){let{options:l,camera:c}=i;if(!l.selectionMode||!e.visible||!c)return;if(!ci(t)){Lt.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");return}let d=this._getLineSize(e.attributes);this.parameters.worldSized?this._intersectRayWithWorldSizedLine(e,t,i,d,o):this._intersectRayWithScreenSizedLine(e,t,i,d,o)}_intersectRayWithScreenSizedLine(e,t,i,a,n){let{camera:o}=i,l=e.attributes,c=l.get("position").data,d=St;nt(d,i.point);let p=a*o.pixelRatio,u=st*o.pixelRatio,h=p/2+u;Z(Ve[0],d[0]-h,d[1]+h,0),Z(Ve[1],d[0]+h,d[1]+h,0),Z(Ve[2],d[0]+h,d[1]-h,0),Z(Ve[3],d[0]-h,d[1]-h,0);for(let g=0;g<4;g++)if(!o.unprojectFromRenderScreen(Ve[g],le[g]))return;He(o.eye,le[0],le[1],yt),He(o.eye,le[1],le[2],$t),He(o.eye,le[2],le[3],Dt),He(o.eye,le[3],le[0],Pt);let v=Number.MAX_VALUE,m=0;for(let g of this._forEachTransformedLineSegment(V,R,c,t,we(this.parameters,l))){if(re(yt,V)<0&&re(yt,R)<0||re($t,V)<0&&re($t,R)<0||re(Dt,V)<0&&re(Dt,R)<0||re(Pt,V)<0&&re(Pt,R)<0)continue;let y=o.projectToRenderScreen(V,Ee),f=o.projectToRenderScreen(R,Ae);if(y==null||f==null)continue;if(y[2]<0&&f[2]>0){ge(ae,V,R);let P=o.frustum,w=-re(P[4],V)/X(ae,Kt(P[4]));if(de(ae,ae,w),Gt(V,V,ae),!o.projectToRenderScreen(V,y))continue}else if(y[2]>0&&f[2]<0){ge(ae,R,V);let P=o.frustum,w=-re(P[4],R)/X(ae,Kt(P[4]));if(de(ae,ae,w),Gt(R,R,ae),!o.projectToRenderScreen(R,f))continue}else if(y[2]<0&&f[2]<0)continue;y[2]=0,f[2]=0;let $=$e(y,f,xt),D=Gr($,d);if(!(D>=v)){if(this.parameters.screenSizePerspective){let P=this.computeScreenSizePerspectiveWidth($,V,R,d,o,a,u);if(D>=P*P)continue}v=D,K(Ti,V),K(zi,R),m=g}}if(v<h*h){let{rayBegin:g,rayEnd:y}=i,f=Number.MAX_VALUE;if(Yr($e(Ti,zi,xt),$e(g,y,bt),q)){ge(q,q,g);let $=be(q);de(q,q,1/$),f=$/xe(g,y)}n(f,f,q,m)}}_intersectRayWithWorldSizedLine(e,t,i,a,n){let{camera:o,ray:l,metersPerRenderUnit:c}=i,d=e.attributes,p=d.get("position").data,u=a/(2*c),h=1/0,v=0;for(let m of this._forEachTransformedLineSegment(V,R,p,t,we(this.parameters,d))){let g=Sn(V,R,u,o,l,wi);if(g!=null&&g<h&&(h=g,v=m,K(q,wi),g===0))break}h<1/0&&n(h,h,q,v)}intersectScreenPolygon(e,t,i,a){let{options:n}=i;if(!n.selectionMode||!e.visible)return null;if(!ci(t))return Lt.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix"),null;let o=this._getLineSize(e.attributes);return this.parameters.worldSized?this._intersectWorldSizedPolygon(e,t,i,a,o):this._intersectScreenSizedPolygon(e,t,i,a,o)}_intersectScreenSizedPolygon(e,t,i,a,n){let{camera:o,screenPolygonPrimitiveProcessor:l}=i,c=e.attributes,d=c.get("position").data,p=st,u=p*o.pixelRatio,h=new Vt(4);for(let v of this._forEachTransformedLineSegment(V,R,d,t,we(this.parameters,c)))for(let[m,g]of l.processLineSegment(Ci,V,R)){if(!Oa(o,m,g,Ee,Ae))continue;let y=$e(Ee,Ae,xt),f=n/2+p;this.parameters.screenSizePerspective&&(Yt(St,Ee,Ae,.5),f=Math.max(f,this.computeScreenSizePerspectiveWidth(y,m,g,St,o,n,u)/o.pixelRatio)),o.renderToScreen(Ee,Di),o.renderToScreen(Ae,Pi),ni(a,Di,Pi,f)&&(qt($e(m,g,bt),o.eye,oe),h.updateIfCloserFromValues(xe(o.eye,oe),v,oe,null))}return h}_intersectWorldSizedPolygon(e,t,i,a,n){let{camera:o,screenPolygonPrimitiveProcessor:l,metersPerRenderUnit:c}=i,{attributes:d}=e,p=d.get("position").data,u=n/(2*c),h=new Vt(4);for(let v of this._forEachTransformedLineSegment(V,R,p,t,we(this.parameters,d)))for(let[m,g]of l.processLineSegment(Ci,V,R)){qt($e(m,g,bt),o.eye,oe);let y=xe(o.eye,oe);h.valid&&y>=h.distance||bn(m,g,u,o,a)&&h.updateIfCloserFromValues(y,v,oe,null)}return h}intersectScreenPolygonDraped({attributes:e},t,i,a,n,o){if(!i.options.selectionMode)return null;let l=xi(this._getLineSize(e,!0),n,o,this.parameters.usesWorldSizedWidth());for(let c of bi(fe,Fe,this.parameters,e,t))if(ni(a,fe,Fe,l))return new nr(c);return null}createBufferWriter(){return new us(gr(this.parameters),vr(this.parameters),this.parameters,this._isAssumedMetalDriver)}createGLMaterial(e){return new ds(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}update(e){return this.parameters.hasAnimation?(this.setParameters({timeElapsed:Wr(e.time)},!1),e.dt!==0):!1}computeScreenSizePerspectiveWidth(e,t,i,a,n,o,l){let c=qr(e,a);Yt(oe,t,i,c),ue($i,oe,n.viewMatrix);let d=be($i),p=this.computeCameraAbsCosAngle(oe,n,this._configuration.spherical);return yi.update(p,d,this.parameters.screenSizePerspective,this.parameters.screenSizePerspectiveMinPixelReferenceSize),yi.apply(o)*n.pixelRatio/2+l}computeCameraAbsCosAngle(e,t,i){return i?ke(q,e):Z(q,0,0,1),ge(et,e,t.eye),ke(et,et),Math.abs(X(q,et))}_getLineSize(e,t=!1){let i=this.parameters.width;if(this.parameters.vvSize){let a=e.get("sizeFeatureAttribute").data[0];Number.isNaN(a)?t&&(i*=this.parameters.vvSize.fallback[0]):i*=_t(this.parameters.vvSize.offset[0]+a*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else e.has("size")&&(i*=e.get("size").data[0]);return i}*_forEachTransformedLineSegment(e,t,i,a,n){let o=n?i.length-2:i.length-5;for(let l=0;l<o;l+=3){e[0]=i[l]+a[12],e[1]=i[l+1]+a[13],e[2]=i[l+2]+a[14];let c=(l+3)%i.length;t[0]=i[c]+a[12],t[1]=i[c+1]+a[13],t[2]=i[c+2]+a[14],yield l/3}}}let ds=class extends Fa{constructor(){super(...arguments),this._stipplePattern=null}dispose(){var e;super.dispose(),(e=this._stippleTextures)==null||e.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){let{stipplePattern:t}=this._material.parameters;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(Wt,e)}},ps=class extends _a{constructor(){super(...arguments),this._width=0,this.color=Ft,this.join="miter",this.cap=0,this.miterLimit=5,this.shadingEnabled=!1,this.writeDepth=!0,this.polygonOffset=0,this.polygonOffsetIndex=0,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=Ne(0),this.animation=0,this.animationSpeed=1,this.trailLength=1,this.startTime=Ne(0),this.endTime=Ne(1/0),this.worldSized=!1}get width(){return this.isImagePattern()?this.stipplePattern.width:this._width}set width(e){this._width=e}get transparent(){var e;return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(((e=this.stippleOffColor)==null?void 0:e[3])??0)<1}get hasAnimation(){return this.animation!==0}usesWorldSizedWidth(e=this.isImagePattern()){return this.worldSized||e}isImagePattern(){return sr(this.stipplePattern)&&this.stippleTexture!=null}},us=class{constructor(e,t,i,a){this.layout=e,this.textureBufferLayout=t,this._parameters=i,this._isAssumedMetalDriver=a,this.numJoinSubdivisions=br(this._parameters.join,this._parameters.stipplePattern!=null)}_isClosed(e){return we(this._parameters,e)}allocate(e){return this.layout.createBuffer(e)}elementCountTextureBuffer(e){return e.get("position").data.length/3+(this._isClosed(e)?3:2)}elementCount(e){let t=e.get("position").indices.length/2+1,i=this._isClosed(e),a=i?2:4,n=+!i,o=i?t:t-1,l=this.numJoinSubdivisions*2+(this._isAssumedMetalDriver?8:4);return a+=(o-n)*l,a+=2,this._parameters.wireframe&&(a=2+(a-2)*4),a}write(e,t,i,a,n,o){o!=null&&this._writeTextureBuffer(e,i,o),a!=null&&this._writeVertexBuffer(e,i,a,n)}_writeTextureBuffer(e,t,i){var Y,L,k,Be,ye,jt;let a=t.get("position"),n=a.data.length/3,o=this._isClosed(t),{buffer:l,offset:c}=i,d=l.getField("position",Ki),p=l.getField("u0",Ce),u=l.getField("sizeFeatureAttribute",Ce),h=l.getField("size",Ce),v=l.getField("colorFeatureAttribute",Ce),m=l.getField("color",Zt),g=l.getField("olidColor",Zt),y=l.getField("timeStamps",Xr),f=l.getField("opacityFeatureAttribute",Ce),$=(Y=t.get("sizeFeatureAttribute"))==null?void 0:Y.data,D=(L=t.get("size"))==null?void 0:L.data,P=(k=t.get("colorFeatureAttribute"))==null?void 0:k.data,w=(Be=t.get("color"))==null?void 0:Be.data,z=(ye=t.get("opacityFeatureAttribute"))==null?void 0:ye.data,_=(jt=t.get("distanceToStart"))==null?void 0:jt.data,C=t.get("timeStamps");ce(d!==null,"Expected valid position field in texture buffer"),ce(p!==null,"Expected valid u0 field in texture buffer");let F=0;for(let A=0;A<n;++A){this._getTransformedPosition(De,a.data,A,e),A>0&&(_==null?F+=xe(tt,De):F=_[A]??F);let M=c+A+1;if(d.setVec(M,De),p.set(M,F),K(tt,De),u&&u.set(M,($==null?void 0:$.length)===1?$[0]:($==null?void 0:$[A])??0),h&&h.set(M,(D==null?void 0:D.length)===1?D[0]:(D==null?void 0:D[A])??1),v&&v.set(M,(P==null?void 0:P.length)===1?P[0]:(P==null?void 0:P[A])??0),m)if(w!=null){let B=Math.min(A*4,w.length-4);m.setValues(M,w[B],w[B+1],w[B+2],w[B+3])}else m.setValues(M,1,1,1,1);f&&f.set(M,(z==null?void 0:z.length)===1?z[0]:(z==null?void 0:z[A])??0)}if(y!=null&&C!=null){ce(C.size===4);let A=C.data;for(let M=0;M<n;++M){let B=M*4,Q=c+M+1;y.set(Q,0,A[B]),y.set(Q,1,A[B+1]),y.set(Q,2,A[B+2]),y.set(Q,3,A[B+3])}}if(o){let A=c,M=c+1,B=c+2,Q=c+n,kt=Q+1,Tr=Q+2;l.copyItem(Q,A),l.copyItem(M,kt),l.copyItem(B,Tr),d.getVec(Q,tt),d.getVec(M,De);let zr=(_==null?void 0:_[n])??F+xe(tt,De);p.set(kt,zr)}else{let A=c,M=c+1,B=c+n,Q=B+1;l.copyItem(M,A),l.copyItem(B,Q)}let O=t.get("olidColor");rr()&&O!=null&&g!=null&&Rt(O,4,g,c)}_writeVertexBuffer(e,t,i,a){let{buffer:n,offset:o}=i,{layout:l}=this,c=t.get("position"),d=c.indices,p=c.data.length/3,u=this._isClosed(t),h=p+(u?3:2);d&&d.length!==2*(p-1)&&console.warn("RibbonLineMaterial does not support indices");let v=n.getField("textureElementIndex",Kr);ce(v!=null,"Missing texture buffer index field"),ce(a!=null,"Using a texture layout, but the texture range for this instance was not provided");let m=a.from;ce(a.numElements===h,"Expected number of elements in TextureBuffer to equal number of points");let g=new Float32Array(n.buffer),y=new Float16Array(n.buffer),f=new Uint32Array(n.buffer),$=l.stride/4,D=o*$,P=D,w=g.BYTES_PER_ELEMENT/y.BYTES_PER_ELEMENT,z=(O,Y,L,k=!1)=>{let Be=L+1;f[D]=m+Be,D++;let ye=D*w;y[ye++]=O,y[ye++]=Y+(k?Math.sign(Y)*8:0),D=Math.ceil(ye/w)};D+=$;let _=0,C=0;u?(_=0,C=p):(z(1,-4,0),z(1,4,0),_=1,C=p-1);let F=this._isAssumedMetalDriver;for(let O=_;O<C;O++){z(0,-1,O),z(0,1,O),F&&(z(0,-1,O,!0),z(0,1,O,!0));let Y=this.numJoinSubdivisions;for(let L=0;L<Y;++L){let k=(L+1)/(Y+1);z(k,-1,O,F),z(k,1,O,F)}z(1,-2,O,F),z(1,2,O,F),F&&(z(1,-2,O),z(1,2,O))}u?(z(0,-1,C),z(0,1,C)):(z(0,-5,C),z(0,5,C)),vt(g,P+$,g,P,$),D=vt(g,D-$,g,D,$),this._parameters.wireframe&&this._addWireframeVertices(n,P,D,$)}_getTransformedPosition(e,t,i,a){let n=i*3;Z(e,t[n+0],t[n+1],t[n+2]),a&&ue(e,e,a)}_addWireframeVertices(e,t,i,a){let n=new Uint8Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),o=new Uint8Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,(i-t)*Float32Array.BYTES_PER_ELEMENT),l=a*Float32Array.BYTES_PER_ELEMENT,c=0,d=p=>c=vt(o,p,n,c,l);for(let p=0;p<=o.length-4*l;p+=l*2)d(p),d(p+2*l),d(p+1*l),d(p+2*l),d(p+1*l),d(p+3*l)}};function vt(r,e,t,i,a){for(let n=0;n<a;n++)t[i++]=r[e++];return i}function we(r,e){return r.isClosed?e.get("position").indices.length>2:!1}function xi(r,e,t,i){return i?r/(2*t)+st*e:(r/2+st)*e}function*bi(r,e,t,i,a){let n=i.get("position").data,o=we(t,i)?n.length-2:n.length-5,l=(a==null?void 0:a[0])??0,c=(a==null?void 0:a[1])??0;pe(r,n[0]+l,n[1]+c);for(let d=3;d<o+3;d+=3){let p=d%n.length;pe(e,n[p]+l,n[p+1]+c),yield d/3,nt(r,e)}}function fs(r){return r.anchor===1&&r.hideOnShortSegments&&r.placement==="begin-end"&&r.worldSpace}function br(r,e){let t=+!!e;switch(r){case"miter":case"bevel":return t;case"round":return Sr+t}}const yi=new La,V=T(),R=T(),fe=G(),Fe=G(),oe=T(),$i=T(),et=T(),ae=T(),q=T(),St=T(),Ee=ve(),Ae=ve(),Di=Hi(),Pi=Hi(),Ti=T(),zi=T(),wi=T(),xt=Xi(),bt=Xi(),tt=T(),De=T(),Ve=[ve(),ve(),ve(),ve()],le=[T(),T(),T(),T()],yt=lt(),$t=lt(),Dt=lt(),Pt=lt(),st=4,Ci=[T(),T()],hs=()=>Lt.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function ms(r){return{cachedResult:r.cachedResult,arcade:r.arcade?{func:r.arcade.func,context:r.arcade.modules.arcadeUtils.createExecContext(null,{sr:r.arcade.context.spatialReference}),modules:r.arcade.modules}:null}}async function ho(r,e,t,i){let a=r==null?void 0:r.expression;if(typeof a!="string")return null;let n=xs(a);if(n!=null)return{cachedResult:n};let o=await Mr();Nr(t);let l=o.arcadeUtils,c=l.createSyntaxTree(a);if(!c)return null;if(l.dependsOnView(c))return i==null||i.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0};let d=l.createFunction(c);return d?{arcade:{modules:o,func:d,context:l.createExecContext(null,{sr:e})}}:null}function gs(r,e,t){return r.arcadeUtils.arcadeFeature.createFromGraphicLikeObject(r.arcadeUtils.createArcadeGeometryFromDehydratedGeometry(e.geometry),e.attributes,t,null)}function vs(r,e){if(r!=null&&!yr(r)){if(!e||!r.arcade){hs().errorOncePerTick("Arcade support required but not provided");return}r.arcade.modules.arcadeUtils.updateExecContext(r.arcade.context,e)}}function Ss(r){if(r!=null){if(yr(r))return r.cachedResult;let e=r.arcade,t=e==null?void 0:e.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof t!="number"&&(r.cachedResult=0,t=0),t}return 0}function mo(r,e=!1){let t=r==null?void 0:r.featureExpressionInfo,i=t==null?void 0:t.expression;return!e&&i!=="0"&&(t=null),t??null}const go={cachedResult:0};function yr(r){return r.cachedResult!=null}function xs(r){return r==="0"?0:null}class $r{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=Ur(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){let i=this.calculateOffsetRenderUnits(t);return this.featureExpressionInfoContext==null?e+i:i}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset,i=this.featureExpressionInfoContext;return i!=null&&(t+=Ss(i)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=jr(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e}updateFeatureExpressionInfoContextForGraphic(e,t,i){e.arcade?(this._featureExpressionInfoContext=ms(e),this.updateFeatureExpressionFeature(t,i)):this._featureExpressionInfoContext=e}updateFeatureExpressionFeature(e,t){let i=this.featureExpressionInfoContext;i!=null&&i.arcade&&(i.cachedResult=void 0,vs(this._featureExpressionInfoContext,e.geometry?gs(i.arcade.modules,e,t):null))}static fromElevationInfo(e){let t=new $r;return e!=null&&t.setFromElevationInfo(e),t}}function dt(r,e){return r.size===e?new bs(r):null}let bs=class{constructor(e){this._attribute=e}get count(){return this._attribute.indices.length}get(e,t=0){let{data:i,indices:a,stride:n}=this._attribute;return i[a[e]*n+t]}getVec(e,t){let{data:i,indices:a,size:n,stride:o}=this._attribute,l=a[e]*o;for(let c=0;c<n;c++)t[c]=i[l+c];return t}};function Oi(r,e){return pt(r,e,1,dt)}function Li(r,e){return pt(r,e,2,dt)}function it(r,e){return pt(r,e,3,dt)}function _i(r,e){return pt(r,e,4,dt)}function pt(r,e,t,i){if(r.type===1){let{vertex:n}=r.buffers,o=n.layout.fields.get(e);return o==null||o.constructor.ElementCount!==t?null:n.getField(e,o.constructor)}let a=r.attributes.get(e);return a==null?null:i(a,t)}class ys extends Zi{constructor(){super(...arguments),this.primitiveVertexCount=1}computeAttachmentOrigin(e,t,i){return Ea(e,t,i)}}class E extends ar{constructor(e,t){super(),this.spherical=e,this.polygonOffset=0,this.enableOITOffset=!1,this.screenCenterOffsetUnitsEnabled=!1,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.occludedFragmentFade=!1,this.hasOcclusionTexture=!1,this.hasFocusAreaStyle=!1,this.hasVertexColor=!0,this.hasVertexSize=!0,this.hasVertexRotation=!0,this.hasVertexUVi=!0,this.hasVertexCenterOffset=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.hasVVInstancing=!1,this.snowCover=!1,this.renderOccluded=!1,this.transparentOccluded=t}}S([x()],E.prototype,"transparentOccluded",void 0),S([x({count:5})],E.prototype,"polygonOffset",void 0),S([x()],E.prototype,"enableOITOffset",void 0),S([x()],E.prototype,"screenCenterOffsetUnitsEnabled",void 0),S([x()],E.prototype,"signedDistanceFieldEnabled",void 0),S([x()],E.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),S([x()],E.prototype,"hasVVSize",void 0),S([x()],E.prototype,"hasVVColor",void 0),S([x()],E.prototype,"hasVerticalOffset",void 0),S([x()],E.prototype,"hasScreenSizePerspective",void 0),S([x()],E.prototype,"hasRotation",void 0),S([x()],E.prototype,"debugDrawLabelBorder",void 0),S([x()],E.prototype,"depthTestEnabled",void 0),S([x()],E.prototype,"pixelSnappingEnabled",void 0),S([x()],E.prototype,"draped",void 0),S([x()],E.prototype,"occludedFragmentFade",void 0),S([x()],E.prototype,"hasOcclusionTexture",void 0),S([x()],E.prototype,"hasFocusAreaStyle",void 0),S([x()],E.prototype,"hasVertexColor",void 0),S([x()],E.prototype,"hasVertexSize",void 0),S([x()],E.prototype,"hasVertexRotation",void 0),S([x()],E.prototype,"hasVertexUVi",void 0),S([x()],E.prototype,"hasVertexCenterOffset",void 0);class So extends ys{constructor(e,t,i=!1){super(e,Os),this.produces=new Map([[12,a=>Ge(a)&&!this.parameters.drawAsLabel&&!this._configuration.transparentOccluded],[13,a=>Ge(a)&&!this.parameters.drawAsLabel&&this._configuration.transparentOccluded],[14,a=>Ge(a)&&this.parameters.drawAsLabel],[18,a=>this.parameters.draped&&Ge(a)]]),this._visible=!0,this._configuration=new E(t,i)}updateConfiguration(e){super.updateConfiguration(e);let{parameters:t,_configuration:i}=this,a=t.draped;i.enableOITOffset=e.enableOITOffset,i.hasSlicePlane=this.parameters.hasSlicePlane,i.hasVerticalOffset=!!this.parameters.verticalOffset,i.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,i.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",i.polygonOffset=this.parameters.polygonOffset,i.draped=a,i.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,i.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,i.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,i.hasRotation=this.parameters.hasRotation,i.hasVVSize=!!this.parameters.vvSize,i.hasVVColor=!!this.parameters.vvColor,i.occludedFragmentFade=!a&&!!this.parameters.occludedFragmentOpacity,i.hasFocusAreaStyle=this.parameters.focusAreaStyle!=null,i.depthTestEnabled=this.parameters.depthEnabled,i.hasVertexColor=this.parameters.hasVertexColor,i.hasVertexSize=this.parameters.hasVertexSize,i.hasVertexRotation=this.parameters.hasVertexRotation,i.hasVertexUVi=this.parameters.hasVertexUVi,i.hasVertexCenterOffset=this.parameters.hasVertexCenterOffset,Ue(e.output)&&(i.debugDrawLabelBorder=!!Aa.LABELS_SHOW_BORDER),i.hasOcclusionTexture=!t.drawAsLabel&&i.transparentOccluded&&aa(e.output)}intersectRay(e,t,i,a,n,o){let{options:{selectionMode:l,hud:c,excludeLabels:d},point:p,camera:u}=i,{parameters:h}=this;if(l&&c&&(!d||!h.isLabel)&&e.visible&&p&&u){for(let{renderScreenPosition:v,screenSize:m,pixelRatioTolerance:g,halfOutlineSize:y,rotationAngle:f,anchor:$,centerView:D}of this._forEachScreenSpaceHUDInstance(Ii,e,t,u))if(Ei(p,v[0],v[1],m,g,y,f,h,$)){let P=i.ray;if(rt[0]=p[0],rt[1]=p[1],rt[2]=v[2],u.unprojectFromRenderScreen(rt,I)){let w=T();K(w,P.direction);let z=1/be(w);de(w,w,z);let _=xe(P.origin,I)*z,C=T();ue(C,D,u.inverseViewMatrix),o(_,_,w,-1,C)}}}}*_forEachScreenSpaceHUDInstance(e,t,i,a){let{parameters:n}=this,o=it(t,"position"),l=Li(t,"size"),c=it(t,"normal"),d=Oi(t,"rotation"),p=it(t,"centerOffset"),u=_i(t,"featureAttribute"),h=n.size,v=Ot(Vi,i),m=n.centerOffsetUnits==="screen";for(let g=0;g<o.count;g++){let{scaleX:y,scaleY:f}=Ni((u==null?void 0:u.getVec(g,Ri))??null,n,a.pixelRatio);if(o.getVec(g,I),ue(I,I,i),ue(I,I,a.viewMatrix),p?p.getVec(g,H):Z(H,0,0,0),!m&&(I[0]+=H[0],I[1]+=H[1],H[2]!==0)){let w=H[2];ke(H,I),ge(I,I,de(H,H,w))}c.getVec(g,he),at(he,he,v);let{normal:$,cosAngle:D}=Fi(he,a,Mi),P=Ui(n,I,D,a,Tt);if(se(I,I,$,P),a.applyProjection(I,J),J[0]>-1){m&&(H[0]||H[1])&&(J[0]+=H[0]*a.pixelRatio,H[1]!==0&&(J[1]+=Tt.alignmentEvaluator.apply(H[1])*a.pixelRatio),a.unapplyProjection(J,I)),J[0]+=n.screenOffset[0]*a.pixelRatio,J[1]+=n.screenOffset[1]*a.pixelRatio,J[0]=Math.floor(J[0]),J[1]=Math.floor(J[1]),N[0]=h[0],N[1]=h[1],l!=null&&(N[0]*=l.get(g,0),N[1]*=l.get(g,1)),Tt.evaluator.applyVec2(N,N);let w=0;n.textureIsSignedDistanceField&&(w=Math.min(n.outlineSize,.5*N[0])*a.pixelRatio/2),N[0]*=y,N[1]*=f,K(e.centerView,I),Z(e.renderScreenPosition,J[0],J[1],J[2]),nt(e.screenSize,N),e.pixelRatioTolerance=zs*a.pixelRatio,e.halfOutlineSize=w,e.rotationAngle=n.rotation+((d==null?void 0:d.get(g))??0),e.anchor=di(n),yield e}}}*_forEachDrapedHUDInstance(e,t,i){let a=it(t,"position"),n=Li(t,"size"),o=Oi(t,"rotation"),l=_i(t,"featureAttribute"),c=this.parameters,d=c.size;e.pixelRatioTolerance=ws*i,e.anchor=di(c);for(let p=0;p<a.count;p++){let{scaleX:u,scaleY:h}=Ni((l==null?void 0:l.getVec(p,Ri))??null,c,i);e.x=a.get(p,0),e.y=a.get(p,1),N[0]=d[0],N[1]=d[1],n!=null&&(N[0]*=n.get(p,0),N[1]*=n.get(p,1)),e.halfOutlineSize=0,c.textureIsSignedDistanceField&&(e.halfOutlineSize=Math.min(c.outlineSize,.5*N[0])*i/2),N[0]*=u,N[1]*=h,nt(e.screenSize,N),e.rotationAngle=c.rotation+((o==null?void 0:o.get(p))??0),yield e}}intersectRayDraped(e,t,i,a,n,o){let l=this.parameters;for(let{x:c,y:d,screenSize:p,pixelRatioTolerance:u,halfOutlineSize:h,rotationAngle:v,anchor:m}of this._forEachDrapedHUDInstance(Wi,e,o))Ei(i,c,d,p,u,h,v,l,m)&&a(n.distance,n.renderDistance,n.normal,-1)}intersectScreenPolygonDraped(e,t,i,a,n){if(!i.options.selectionMode||i.options.excludeLabels&&this.parameters.isLabel)return null;let o=this.parameters;for(let{x:l,y:c,screenSize:d,pixelRatioTolerance:p,halfOutlineSize:u,rotationAngle:h,anchor:v}of this._forEachDrapedHUDInstance(Wi,e,n))if(Ai(a,l+t[0],c+t[1],d,p,u,h,o,v,!1))return new nr(-1);return null}intersectScreenPolygon(e,t,i,a){var h;let{options:{selectionMode:n,hud:o,excludeLabels:l},camera:c}=i,{parameters:d}=this;if(!n||!o||l&&d.isLabel||!e.visible||t==null)return null;let p=new Vt(1),u=1/c.pixelRatio;for(let{renderScreenPosition:v,screenSize:m,pixelRatioTolerance:g,halfOutlineSize:y,rotationAngle:f,anchor:$,centerView:D}of this._forEachScreenSpaceHUDInstance(Ii,e,t,c)){let P=ue(I,D,c.inverseViewMatrix);if(!((h=i.screenPolygonPrimitiveProcessor)!=null&&h.validatePoint(P)))continue;let w=v[0]*u,z=(c.fullHeight-v[1])*u;if(Ct[0]=m[0]*u,Ct[1]=m[1]*u,Ai(a,w,z,Ct,g*u,y*u,f,d,$,!0)){let _=xe(c.eye,P);p.updateIfCloserFromValues(_,-1,P,null)}}return p.valid?p:null}createBufferWriter(){return new Ls(this.parameters)}createPrimitivePositionReader(e,t){ce(t!=null,"HUD geometry requires instancing");let i=e.vertex.getField("position",Ki);return a=>i.getVec(0,a)}applyShaderOffsets(e,t,i,a,n,o,l,c){at(zt,i,Ot(Vi,a));let d=Fi(zt,l,Mi),p=_s(be(t),l),u=Ui(this.parameters,t,d.cosAngle,l,c);se(t,t,d.normal,u+p),se(e,e,zt,u+p);let h=o+u;this._applyPolygonOffsetView(t,d,h,l,t),this._applyCenterOffsetView(t,n,t)}applyShaderOffsetsNDC(e,t,i,a,n,o){return this._applyCenterOffsetNDC(e,t,a,n),o!=null&&K(o,n),this._applyPolygonOffsetNDC(n,i,a,n),n}_applyPolygonOffsetView(e,t,i,a,n){let o=a.aboveGround?1:-1,l=Math.sign(i);l===0&&(l=o);let c=o*l;if(this.parameters.shaderPolygonOffset<=0)return K(n,e);let d=_t(Math.abs(t.cosAngle),.01,1),p=1-Math.sqrt(1-d*d)/d/a.viewport[2];return c>0?de(n,e,p):de(n,e,1/p),n}_applyCenterOffsetView(e,t,i){let a=this.parameters.centerOffsetUnits!=="screen";return i!==e&&K(i,e),a&&(i[0]+=t[0],i[1]+=t[1],t[2]&&(ke(he,i),kr(i,i,de(he,he,t[2])))),i}_applyCenterOffsetNDC(e,t,i,a){let n=this.parameters.centerOffsetUnits!=="screen";return a!==e&&K(a,e),n||(a[0]+=t[0]/i.fullWidth*2,a[1]+=t[1]/i.fullHeight*2),a}_applyPolygonOffsetNDC(e,t,i,a){let n=this.parameters.shaderPolygonOffset;if(e!==a&&K(a,e),n){let o=i.aboveGround?1:-1,l=o*Math.sign(t);a[2]-=(l||o)*n}return a}set visible(e){this._visible=e}get visible(){let{color:e,outlineSize:t,outlineColor:i}=this.parameters,a=e[3]>=je||t>=je&&i[3]>=je;return this._visible&&a}createGLMaterial(e){return new $s(e)}calculateRelativeScreenBounds(e,t,i=Gi()){return Ds(this.parameters,e,t,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}}class $s extends tn{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(cn,e)}}function Ds(r,e,t,i){i[0]=r.anchorPosition[0]*-e[0]+r.screenOffset[0]*t,i[1]=r.anchorPosition[1]*-e[1]+r.screenOffset[1]*t}function Fi(r,e,t){return ue(t.normal,r,e.viewInverseTransposeMatrix),t.cosAngle=X(t.normal,Cs),t}function Ei(r,e,t,i,a,n,o,l,c){let d=Dr(e,t,i,a,n,l,c,Pr);return pe(me,e,t),Me(Re,r,me,qi(o)),Re[0]>d[0]&&Re[0]<d[2]&&Re[1]>d[1]&&Re[1]<d[3]}function Ai(r,e,t,i,a,n,o,l,c,d){let p=Dr(e,t,i,a,n,l,c,Pr,d);if(pe(Pe,p[0],p[1]),pe(Ie,p[2],p[1]),pe(Te,p[2],p[3]),pe(We,p[0],p[3]),o!==0){let u=qi(o);pe(me,e,t),Me(Pe,Pe,me,u),Me(Ie,Ie,me,u),Me(Te,Te,me,u),Me(We,We,me,u),Jr(p),Je(p,Pe),Je(p,Ie),Je(p,Te),Je(p,We)}return Wa(r,p)?si(r,Pe,Ie,Te)||si(r,Pe,Te,We):!1}function Dr(r,e,t,i,a,n,o,l,c=!1){let d=r-i-t[0]*o[0],p=d+t[0]+2*i,u=c?1-o[1]:o[1],h=e-i-t[1]*u,v=h+t[1]+2*i,m=n.distanceFieldBoundingBox;return n.textureIsSignedDistanceField&&m!=null&&(d+=t[0]*m[0],h+=t[1]*(c?1-m[3]:m[1]),p-=t[0]*(1-m[2]),v-=t[1]*(c?m[1]:1-m[3]),d-=a,p+=a,h-=a,v+=a),l[0]=d,l[1]=h,l[2]=p,l[3]=v,l}const Tt=new Va,I=T(),he=T(),J=ot(),rt=ve(),zt=T(),Re=G(),me=G(),Vi=ki(),H=T(),wt=T(),Ri=ot(),Pr=Gi(),Pe=G(),Ie=G(),Te=G(),We=G(),Ct=G();class Ps{constructor(){this.renderScreenPosition=T(),this.screenSize=G(),this.centerView=T(),this.pixelRatioTolerance=0,this.halfOutlineSize=0,this.rotationAngle=0,this.anchor=G()}}class Ts{constructor(){this.x=0,this.y=0,this.screenSize=G(),this.pixelRatioTolerance=0,this.halfOutlineSize=0,this.rotationAngle=0,this.anchor=G()}}const Ii=new Ps,Wi=new Ts,Mi={normal:T(),cosAngle:0},zs=1,ws=2,N=Yi(0,0),Cs=Hr(0,0,1);class Os extends en{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1,this.color=Ft,this.size=Br,this.polygonOffset=0,this.anchorPosition=Yi(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=Ft,this.outlineSize=0,this.distanceFieldBoundingBox=ot(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.hasVertexColor=!1,this.hasVertexSize=!1,this.hasVertexRotation=!1,this.hasVertexUVi=!1,this.hasVertexCenterOffset=!1,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.focusAreaStyle=null,this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class Ls{constructor(e){this.baseInstanceLayout=sn,this.layout=on(e)}elementCount(e){return e.get("position").indices.length}elementCountBaseInstance(e){return e.get("uv0").indices.length}write(e,t,i,a){var $;if(a==null)return;let{buffer:n,offset:o}=a,{position:l,normal:c,color:d,size:p,rotation:u,centerOffset:h,groundDistance:v,featureAttribute:m,uvi:g,olidColor:y}=n;Ma(i.get("position"),e,l,o),Na(i.get("normal"),t,c,o);let f=i.get("position").indices.length;if(g){let D=($=i.get("uvi"))==null?void 0:$.data;if(D&&D.length>=4){let[P,w,z,_]=D;for(let C=0;C<f;++C){let F=o+C;g.setValues(F,P,w,z,_)}}}if(d&&Rt(i.get("color"),4,d,o),p&&oi(i.get("size"),p,o),u&&li(i.get("rotation"),u,o),h&&(i.get("centerOffset")?Ua(i.get("centerOffset"),h,o):qe(h,o,f)),i.get("groundDistance")?li(i.get("groundDistance"),v,o):qe(v,o,f),m&&(i.get("featureAttribute")?ja(i.get("featureAttribute"),m,o):qe(m,o,f)),y!=null){let D=i.get("olidColor");D==null?qe(y,o,f):Rt(D,4,y,o)}}writeBaseInstance(e,t){let{uv0:i}=t;oi(e.get("uv0"),i,0)}rebaseBuffers(e,t){if(t==null)return;let{buffer:i,offset:a}=t;i.copyFrom(e.vertex,0,a)}}function Ni(r,e,t){return r==null||e.vvSize==null?{scaleX:t,scaleY:t}:(Ra(wt,e,r),{scaleX:wt[0]*t,scaleY:wt[1]*t})}function _s(r,e){let t=e.computeRenderPixelSizeAtDistance(r)*ln;return(e.aboveGround?1:-1)*t}function Ui(r,e,t,i,a){var c;if(!((c=r.verticalOffset)!=null&&c.screenLength)){let d=be(e);return a.update(t,d,r.screenSizePerspective,r.screenSizePerspectiveMinPixelReferenceSize,r.screenSizePerspectiveAlignment,null),0}let n=be(e),o=r.screenSizePerspectiveAlignment??r.screenSizePerspective,l=Ia(i,n,r.verticalOffset,t,o,r.screenSizePerspectiveMinPixelReferenceSize);return a.update(t,n,r.screenSizePerspective,r.screenSizePerspectiveMinPixelReferenceSize,r.screenSizePerspectiveAlignment,null),l}const Fs=Object.freeze(Object.defineProperty({__proto__:null,build:xr,numRoundJoinSubdivisions:Sr},Symbol.toStringTag,{value:"Module"}));export{So as A,$r as a,vn as b,Xs as c,go as d,oo as e,In as f,Cn as g,Qs as h,eo as i,wn as j,co as k,to as l,ns as m,is as n,ho as o,Dn as p,U as r,ur as t,mo as u};
//# sourceMappingURL=RibbonLine.glsl-S3m5zwuq.js.map
