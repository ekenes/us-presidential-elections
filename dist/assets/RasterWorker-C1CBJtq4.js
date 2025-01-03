import{M as f,bh as u,O as p,aY as a,T as S,fv as d}from"./index-GOO0DjDp.js";import{g as i,f as y,m as x,j as h,_ as O,h as J,W as N,E as B,U as P,D as g,R as v,u as w,s as b}from"./dataUtils-CH8hAHuY.js";import{a as k,c as z,y as T,T as D,w as $,v as F,i as I}from"./PolynomialTransform-Dq_EdQhT.js";import"./_commonjsHelpers-DCkdB7M8.js";var c;let l=c=class extends k{constructor(){super(...arguments),this.type="identity"}clone(){return new c}};f([u({IdentityXform:"identity"})],l.prototype,"type",void 0),l=c=f([p("esri.layers.support.rasterTransforms.IdentityTransform")],l);const j=l,E={GCSShiftXform:z,IdentityXform:j,PolynomialXform:T};function G(n){if(!(n==null?void 0:n.type))return null;const e=E[n==null?void 0:n.type];if(e){const s=new e;return s.read(n),s}return null}class U{convertVectorFieldData(t){const e=i.fromJSON(t.pixelBlock),s=y(e,t.type);return Promise.resolve(s!=null?s.toJSON():null)}computeStatisticsHistograms(t){const e=i.fromJSON(t.pixelBlock),s=x(e);return Promise.resolve(s)}async decode(t){const e=await h(t.data,t.options);return e&&e.toJSON()}symbolize(t){t.pixelBlock=i.fromJSON(t.pixelBlock),t.extent=t.extent?a.fromJSON(t.extent):null;const e=this.symbolizer.symbolize(t);return Promise.resolve(e!=null?e.toJSON():null)}async updateSymbolizer(t){var e;this.symbolizer=O.fromJSON(t.symbolizerJSON),t.histograms&&((e=this.symbolizer)==null?void 0:e.rendererJSON.type)==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=t.histograms)}async updateRasterFunction(t){this.rasterFunction=D(t.rasterFunctionJSON)}async process(t){var s;const e=this.rasterFunction.process({extent:a.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map(o=>o!=null?i.fromJSON(o):null),primaryPixelSizes:(s=t.primaryPixelSizes)==null?void 0:s.map(o=>o!=null?S.fromJSON(o):null),primaryRasterIds:t.primaryRasterIds});return e!=null?e.toJSON():null}stretch(t){const e=this.symbolizer.simpleStretch(i.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(e==null?void 0:e.toJSON())}estimateStatisticsHistograms(t){const e=J(i.fromJSON(t.srcPixelBlock));return Promise.resolve(e)}split(t){const e=N(i.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel??0,t.useBilinear===!1);return e&&e.forEach((s,o)=>{e.set(o,s==null?void 0:s.toJSON())}),Promise.resolve(e)}clipTile(t){const e=i.fromJSON(t.pixelBlock),s=B({...t,pixelBlock:e});return Promise.resolve(s==null?void 0:s.toJSON())}async mosaicAndTransform(t){const e=t.srcPixelBlocks.map(m=>m?new i(m):null),s=P(e,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let o,r=s;return t.coefs&&(r=g(s,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(o=v(t.destDimension,t.gcsGrid),r=w(r,t.isUV?"vector-uv":"vector-magdir",o)),{pixelBlock:r==null?void 0:r.toJSON(),localNorthDirections:o}}async createFlowMesh(t,e){const s={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:o,indexData:r}=await b(t.meshType,t.simulationSettings,s,e.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:r.buffer},transferList:[o.buffer,r.buffer]}}async getProjectionOffsetGrid(t){const e=a.fromJSON(t.projectedExtent),s=a.fromJSON(t.srcBufferExtent);let o=null;t.datumTransformationSteps&&(o=new d({steps:t.datumTransformationSteps})),(t.includeGCSGrid||$(e.spatialReference,s.spatialReference,o))&&await F();const r=t.rasterTransform?G(t.rasterTransform):null;return I({...t,projectedExtent:e,srcBufferExtent:s,datumTransformation:o,rasterTransform:r})}}export{U as default};
