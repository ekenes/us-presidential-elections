const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editingSupport-r7-urApN.js","assets/index-GOO0DjDp.js","assets/index-D7_X1F0b.css","assets/infoFor3D-CxdEiWhp.js"])))=>i.map(i=>d[i]);
import{M as i,N as a,O as b,gk as V,dT as G,hQ as re,P as q,eD as Q,cA as ie,ac as N,aV as P,bB as se,ce as k,fK as ae,aO as v,bH as oe,bI as ne,w as le,U as X,a0 as pe,s as u,aS as de,_ as Y,fD as ue,cT as ce,cF as ye,cG as he,cH as fe,cI as me,cU as ge,cV as ve,cB as we,hR as be,bM as Ie,g7 as Le,eC as K,W as m,aI as Fe,t as Se,dW as Te,hS as _e,ad as $e,eE as Oe,dt as J,hT as Ee,T as xe,gL as M,d9 as R,aR as je,fP as Ae,hU as Pe,hV as Re,gO as De,cX as Ue,eH as qe,eI as Ne,eJ as z,cL as Ce,hW as Ve,eO as Ge,eL as Qe,eM as ke,eP as Ke,hX as Je,eR as Me,cS as ze}from"./index-GOO0DjDp.js";import{$ as He}from"./Mesh-DJNnEQdL.js";import{i as We,m as Be,t as Ze}from"./meshSpatialReferenceScaleUtils-DXsXeuuD.js";import{R as Xe,V as H}from"./SceneService-CERhNdns.js";import{s as Ye}from"./associatedFeatureServiceUtils-Bn5qNr4o.js";import{t as et}from"./capabilities-Y9lFlGVh.js";import{p as ee,a as tt,y as rt,m as it}from"./I3SLayerDefinitions-DgqmACTc.js";import{r as st,n as at}from"./infoFor3D-CxdEiWhp.js";import{a as ot}from"./lazyLayerLoader-CrwIAOU9.js";import{j as nt}from"./persistable-9iR7CDQH.js";import{$ as W,P as lt,w as pt}from"./elevationInfoUtils-CogsQDzu.js";import{V as dt}from"./I3SUtil-C5zKiBxY.js";import{n as ut,p as ct}from"./popupUtils-DCbGKCbo.js";import"./MeshTransform-CcFz4jiv.js";import"./mat4f64-CSKppSlJ.js";import"./quat-DWfuhTov.js";import"./mat3f64-q3fE-ZOt.js";import"./quatf64-aQ5IuZRd.js";import"./vec32-Bq8LfEfc.js";import"./imageUtils-B0pXyw1G.js";import"./MeshVertexAttributes-Dyudu4ee.js";import"./MeshLocalVertexSpace-BqXq6JV3.js";import"./meshVertexSpaceUtils-Dy_SZOm6.js";import"./earcut-Lltz9D9k.js";import"./Indices-DN196Ob9.js";import"./plane-m241_QIk.js";import"./vec2f64-DA6GkJuH.js";import"./deduplicate-C_q3JlNw.js";import"./projectPointToVector-DcIbqPS4.js";import"./vertexSpaceConversion-cFBTnkaa.js";import"./mat3-C-OMcVdC.js";import"./spatialReferenceEllipsoidUtils-CLmzFMqA.js";import"./computeTranslationToOriginAndRotation-C8WdtVmx.js";import"./vec3-BSXX4O64.js";import"./BufferView-Bc_fuGNr.js";import"./vec2-c1cMo5Hj.js";import"./vec4-CkfdGPaO.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./jsonContext-CbvIEB6E.js";import"./resourceUtils-DW9YqCr8.js";import"./resourceUtils-CVHf2dlv.js";import"./saveUtils-CGbtHkHp.js";import"./resourceExtension-D9QCxwZq.js";import"./floatRGBA-DzlWjl5d.js";import"./sphere-Bhl1G8Gh.js";import"./I3SBinaryReader-C4fNUnAO.js";import"./VertexAttribute-BdZWZuT1.js";import"./NormalAttribute.glsl-BXHrFRZd.js";import"./BindType-BmZEZMMh.js";import"./orientedBoundingBox-DhJ8Hffd.js";function te({associatedLayer:e,serviceUpdateTimeStamp:t}){var d;const r=(d=e==null?void 0:e.editingInfo)==null?void 0:d.lastEditDate,s=e==null?void 0:e.serverGens,o=r!=null,l=t!=null,p=o&&l&&t.lastUpdate!==r.getTime();return o&&(p||!l&&(s==null?void 0:s.minServerGen)!==(s==null?void 0:s.serverGen))}const yt=e=>{let t=class extends e{constructor(){super(...arguments),this.serviceTimeInfo=null}get timeInfo(){var o;const r=(o=this.associatedLayer)==null?void 0:o.timeInfo;if(r==null)return null;const s=r.clone();return Q(s,this.fieldsIndex),s}set timeInfo(r){Q(r,this.fieldsIndex),this._override("timeInfo",r)}get timeExtent(){var r;return(r=this.associatedLayer)==null?void 0:r.timeExtent}set timeExtent(r){this._override("timeExtent",r)}get timeOffset(){var r;return(r=this.associatedLayer)==null?void 0:r.timeOffset}set timeOffset(r){this._override("timeOffset",r)}get datesInUnknownTimezone(){var r;return((r=this.associatedLayer)==null?void 0:r.datesInUnknownTimezone)??!1}set datesInUnknownTimezone(r){this._override("datesInUnknownTimezone",r)}async loadTimeInfoFromService(r){const{serviceTimeInfo:s}=this;if(s==null)return;const{startTimeField:o,endTimeField:l}=s;if(o==null&&l==null||te({associatedLayer:this.associatedLayer,serviceUpdateTimeStamp:this.serviceUpdateTimeStamp}))return;const p=async c=>{var T;let f=null;try{const L=await((T=this.fetchStatistics)==null?void 0:T.call(this,c,r));f=L==null?void 0:L.stats}catch{}if(f==null)return null;const{minTimeStr:I,min:E,maxTimeStr:x,max:j}=f,S=c===o?I??E:x??j;return S!=null?new Date(S):null},[d,y]=await Promise.all([p(o),p(l)]);if(o!=null&&d==null||l!=null&&y==null)return;const h=new G({start:d,end:y});this.setAtOrigin("timeInfo",new V({endField:l,startField:o,fullTimeExtent:h}),"service")}};return i([a({type:V,json:{read:!1,write:!1}})],t.prototype,"timeInfo",null),i([a({type:G,json:{read:!1,write:!1}})],t.prototype,"timeExtent",null),i([a({type:re,json:{read:!1,write:!1}})],t.prototype,"timeOffset",null),i([a({type:Boolean,nonNullable:!0,json:{read:!1,write:!1}})],t.prototype,"datesInUnknownTimezone",null),i([a({type:F,readOnly:!0,json:{read:{source:"timeInfo"}}})],t.prototype,"serviceTimeInfo",void 0),t=i([b("esri.layers.mixins.TemporalSceneLayer")],t),t};let F=class extends q{constructor(){super(...arguments),this.endTimeField=null,this.startTimeField=null}};i([a({type:String})],F.prototype,"endTimeField",void 0),i([a({type:String})],F.prototype,"startTimeField",void 0),F=i([b("esri.layers.mixins.TemporalSceneLayer.SceneServiceTimeInfo")],F);let g=class extends q{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};i([a({type:String,json:{read:!0,write:!0}})],g.prototype,"name",void 0),i([a({type:String,json:{read:!0,write:!0}})],g.prototype,"field",void 0),i([a({type:[Number],json:{read:!0,write:!0}})],g.prototype,"currentRangeExtent",void 0),i([a({type:[Number],json:{read:!0,write:!0}})],g.prototype,"fullRangeExtent",void 0),i([a({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],g.prototype,"type",void 0),g=i([b("esri.layers.support.RangeInfo")],g);var $;let D=$=class extends ie(N.ofType(P)){constructor(e){super(e)}clone(){return new $(this.items.map(e=>e.clone()))}write(e,t){return this.toJSON(t)}toJSON(e){var r,s;const t=(r=e==null?void 0:e.layer)==null?void 0:r.spatialReference;return t?this.toArray().map(o=>{var p;if(!t.equals(o.spatialReference)){if(!se(o.spatialReference,t))return(p=e==null?void 0:e.messages)==null||p.push(new k("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const d=new P;ae(o,d,t),o=d}const l=o.toJSON(e);return delete l.spatialReference,l}).filter(o=>o!=null):((s=e==null?void 0:e.messages)==null||s.push(new k("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(o=>o.toJSON(e)))}static fromJSON(e,t){const r=new $;return e.forEach(s=>r.add(P.fromJSON(s,t))),r}};D=$=i([b("esri.layers.support.PolygonCollection")],D);const O=D;var U;let w=U=class extends q{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new O,this._geometriesSource=null}initialize(){this.addHandles(oe(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,ne))}readGeometries(e,t,r){Array.isArray(e)?this.geometries=O.fromJSON(e,r):this._geometriesSource={url:le(e,r),context:r}}async loadGeometries(e,t){if(this._geometriesSource==null)return;const{url:r,context:s}=this._geometriesSource,o=await X(r,{responseType:"json",signal:t==null?void 0:t.signal}),l=e.toJSON(),p=o.data.map(d=>({...d,spatialReference:l}));this.geometries=O.fromJSON(p,s),this._geometriesSource=null}clone(){const e=new U({geometries:pe(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};i([a({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],w.prototype,"spatialRelationship",void 0),i([a({type:O,nonNullable:!0,json:{write:!0}}),nt({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],w.prototype,"geometries",void 0),i([v(["web-scene","portal-item"],"geometries")],w.prototype,"readGeometries",null),w=U=i([b("esri.layers.support.SceneFilter")],w);const ht=w;async function ft({fieldName:e,statisticsInfo:t,errorContext:r,fieldsIndex:s,path:o,customParameters:l,apiKey:p,signal:d}){if(t==null)throw new u(`${r}:no-cached-statistics`,"Cached statistics are not available for this layer");const y=s.get(e);if(y==null)throw new u(`${r}:field-unexisting`,`Field '${e}' does not exist on the layer`);const h=t.find(I=>I.name===y.name);if(h==null)throw new u(`${r}:no-cached-statistics`,"Cached statistics for this attribute are not available");const c=de(o,h.href),{data:f}=await X(c,{query:{f:"json",...l,token:p},responseType:"json",signal:d});return f}async function mt(e){const t=[];for(const r of e)r.name.toLowerCase().endsWith(".zip")?t.push(gt(r)):t.push(Promise.resolve(r));return(await Promise.all(t)).flat()}async function gt(e){const{BlobReader:t,ZipReader:r,BlobWriter:s}=await Y(()=>import("./zipjs-wrapper-D7Z9U10V.js"),[]),o=[];return(await new r(new t(e)).getEntries()).forEach(p=>{var h;if(p.directory||/^__MACOS/i.test(p.filename))return;const d=new s,y=(h=p.getData)==null?void 0:h.call(p,d).then(c=>new File([c],p.filename));y&&o.push(y)}),Promise.all(o)}const vt=new Set(["3DObject","Point"]),B=Me();let n=class extends yt(ue(Xe(ce(ye(he(fe(me(ge(ve(we(ze))))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new N,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this._set("renderer",null),this.associatedLayer=be(this.associatedLayer)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var s,o,l;const r=(o=(s=this.getFeatureType(t==null?void 0:t.feature))==null?void 0:s.domains)==null?void 0:o[e];return r&&r.type!=="inherited"?r:((l=this.getField(e))==null?void 0:l.domain)??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){var e;return((e=this.associatedLayer)==null?void 0:e.types)??[]}get typeIdField(){var e;return((e=this.associatedLayer)==null?void 0:e.typeIdField)??null}get templates(){var e;return((e=this.associatedLayer)==null?void 0:e.templates)??null}get formTemplate(){var e;return((e=this.associatedLayer)==null?void 0:e.formTemplate)??null}get attributeTableTemplate(){var e;return((e=this.associatedLayer)==null?void 0:e.attributeTableTemplate)??null}get fieldsIndex(){return new Ie(this.fields)}readNodePages(e,t,r){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:ee.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){var e;return this._capabilitiesFromAssociatedFeatureLayer((e=this.associatedLayer)==null?void 0:e.effectiveCapabilities)}get effectiveEditingEnabled(){return this.associatedLayer!=null&&Le(this.associatedLayer)}get geometryType(){return wt[this.profile]||"mesh"}set renderer(e){K(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){var e;return this._capabilitiesFromAssociatedFeatureLayer((e=this.associatedLayer)==null?void 0:e.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){var C;e=e??et;const{query:t,queryRelated:r,editing:{supportsGlobalId:s,supportsRollbackOnFailure:o,supportsUploadWithItemId:l,supportsGeometryUpdate:p,supportsReturnServiceEditsInSourceSpatialReference:d},data:{supportsZ:y,supportsM:h,isVersioned:c,supportsAttachment:f},operations:{supportsEditing:I,supportsAdd:E,supportsUpdate:x,supportsDelete:j,supportsQuery:S,supportsQueryAttachments:T,supportsAsyncConvert3D:L}}=e,_=e.operations.supportsChangeTracking,A=!!((C=this.associatedLayer)!=null&&C.infoFor3D);return{query:t,queryRelated:r,editing:{supportsGlobalId:s,supportsReturnServiceEditsInSourceSpatialReference:d,supportsRollbackOnFailure:o,supportsGeometryUpdate:A&&p,supportsUploadWithItemId:l},data:{supportsAttachment:f,supportsZ:y,supportsM:h,isVersioned:c},operations:{supportsQuery:S,supportsQueryAttachments:T,supportsEditing:I&&_,supportsAdd:A&&E&&_,supportsDelete:A&&j&&_,supportsUpdate:x&&_,supportsAsyncConvert3D:L}}}get editingEnabled(){var e;return this._isOverridden("editingEnabled")?this._get("editingEnabled"):((e=this.associatedLayer)==null?void 0:e.editingEnabled)??!1}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){var e;return((e=this.associatedLayer)==null?void 0:e.infoFor3D)??null}get relationships(){var e;return(e=this.associatedLayer)==null?void 0:e.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeOID"&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeGlobalID"&&(e=r.name),!!e)),e||void 0}get displayField(){var e;return((e=this.associatedLayer)==null?void 0:e.displayField)??null}readProfile(e,t){const r=t.store.profile;return r!=null&&Z[r]?Z[r]:(m.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}get useViewTime(){var e;return((e=this.associatedLayer)==null?void 0:e.useViewTime)??!0}set useViewTime(e){this._override("useViewTime",e)}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=e!=null?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Fe),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await this.loadTimeInfoFromService(e),await Se(this,{origin:"service"},t),K(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e)}async beforeSave(){this.filter!=null&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){m.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){var t;const e=new Te;return this.geometryType==="mesh"?(t=this.associatedLayer)!=null&&t.infoFor3D&&(e.returnGeometry=!0):(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(r=>{if(r!=null&&r.features)for(const s of r.features)s.layer=this,s.sourceLayer=this;return r})}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new u("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new u("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){var s;const r=_e(this.fieldsIndex,await ut(this,ct(this)));return dt(((s=this.parsedUrl)==null?void 0:s.path)??"",this.attributeStorageInfo??[],e,t,r,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||r.length===0)throw new u("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const s=new $e;return s.attributes=r[0],s.layer=this,s.sourceLayer=this,s}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(m.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return Oe(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new u("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new u("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){return await this.load(t),await this.fetchStatistics(e,t)}async saveAs(e,t){return this._debouncedSaveOperations(H.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(H.SAVE,e)}async applyEdits(e,t){const{applyEdits:r}=await Y(()=>import("./editingSupport-r7-urApN.js"),__vite__mapDeps([0,1,2,3]));let s=t;await this.load();const o=this.associatedLayer;if(!o)throw new u(`${this.type}-layer:not-editable`,"Service is not editable");await o.load();const{globalIdField:l}=o,p=!!o.infoFor3D,d=(s==null?void 0:s.globalIdUsed)??!0;if(p&&l==null)throw new u(`${this.type}-layer:not-editable`,"Valid globalIdField expected on editable SceneLayer");if(p&&!d)throw new u(`${this.type}-layer:globalid-required`,"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return J(o.url)&&p&&e.deleteFeatures!=null&&l!=null&&(s={...s,globalIdToObjectId:await Ee(o,e.deleteFeatures,l)}),r(this,o.source,e,s)}async uploadAssets(e,t){if(await this.load(),this.associatedLayer==null)throw new u(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}async convertMesh(e,t){t??(t={});const r=c=>{throw m.getLogger(this).error(".convertMesh()",c.message),c};await this.load(),this.infoFor3D||r(new u("invalid:layer","SceneLayer has no capability for mesh conversion"));const s=await this.extractAndFilterFiles(e),o=s.reduce((c,f)=>st(this.infoFor3D,f)?c+1:c,0);o===0&&r(new We),o>1&&r(new Be);const l=this.spatialReference,p=t.location??new xe({x:0,y:0,z:0,spatialReference:l}),d=p.spatialReference.isGeographic?"local":"georeferenced",y=He.createWithExternalSource(p,s,{vertexSpace:d,transform:Ze(p.spatialReference),unitConversionDisabled:!0}),[h]=await this.uploadAssets([y],{...t,useAssetOrigin:!t.location});return h}async extractAndFilterFiles(e){await this.load();const t=this.infoFor3D;return t?(await mt(e)).filter(r=>at(t,r)):e}validateLayer(e){if(e.layerType&&!vt.has(e.layerType))throw new u("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new u("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new u("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(r,s){let o=!1,l=!1;if(r==null)o=!0,l=!0;else{const p=s&&s.isGeographic;switch(r){case"east-north-up":case"earth-centered":o=!0,l=p;break;case"vertex-reference-frame":o=!0,l=!p;break;default:o=!1}}if(!o)throw new u("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new u("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new u("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){var e,t,r;if(this._fieldUsageInfo={},this.fields)for(const s of this.fields){const o=!!((e=this.attributeStorageInfo)!=null&&e.some(d=>d.name===s.name)),l=!!((r=(t=this.associatedLayer)==null?void 0:t.fields)!=null&&r.some(d=>d&&s.name===d.name)),p={supportsLabelingInfo:o,supportsRenderer:o,supportsPopupTemplate:o||l,supportsLayerQuery:l};this._fieldUsageInfo[s.name]=p}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){var t;if(!((t=this.associatedLayer)!=null&&t.fields))return;let e=null;for(const r of this.associatedLayer.fields){const s=this.getField(r.name);s?(!s.domain&&r.domain&&(s.domain=r.domain.clone()),s.editable=r.editable,s.nullable=r.nullable,s.length=r.length):(e||(e=this.fields?this.fields.slice():[]),e.push(r.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=M(this);for(let r=0;r<e.length;r++){const s=e[r],o=this.originIdOf(s),l=this.associatedLayer.originIdOf(s);o<l&&(l===R.SERVICE||l===R.PORTAL_ITEM)&&t.setAtOrigin(s,this.associatedLayer[s],l)}}_applyAssociatedLayerExtentOverride(){var t,r,s;const e=(t=this.associatedLayer)==null?void 0:t.getAtOrigin("fullExtent","service");((r=this.associatedLayer)==null?void 0:r.infoFor3D)==null||!e||!J((s=this.associatedLayer)==null?void 0:s.url)||!te(this)||M(this).setAtOrigin("fullExtent",e.clone(),R.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:r,portalItem:s}=await Ye(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e}),o=await ot.FeatureLayer();this.associatedLayer=new o({url:t,customParameters:this.customParameters,layerId:r,portalItem:s}),await this.associatedLayer.load()}catch(t){je(t)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await Ae(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?m.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):m.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;this.profile==="mesh-pyramids"&&W(m.getLogger(this),lt("Mesh scene layers","relative-to-scene",e)),W(m.getLogger(this),pt("Scene layers",e))}async fetchStatistics(e,t){var r;return await ft({fieldName:e,statisticsInfo:this.statisticsInfo,errorContext:"scenelayer",fieldsIndex:this.fieldsIndex,path:((r=this.parsedUrl)==null?void 0:r.path)??"",customParameters:this.customParameters,apiKey:this.apiKey,signal:t==null?void 0:t.signal})}};i([a({types:{key:"type",base:Pe,typeMap:{selection:Re}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],n.prototype,"featureReduction",void 0),i([a({type:[g],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],n.prototype,"rangeInfos",void 0),i([a({json:{read:!1}})],n.prototype,"associatedLayer",void 0),i([a({type:["show","hide"]})],n.prototype,"listMode",void 0),i([a({type:["ArcGISSceneServiceLayer"]})],n.prototype,"operationalLayerType",void 0),i([a({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),i([a({...B.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],n.prototype,"fields",void 0),i([a()],n.prototype,"types",null),i([a()],n.prototype,"typeIdField",null),i([a()],n.prototype,"templates",null),i([a()],n.prototype,"formTemplate",null),i([a()],n.prototype,"attributeTableTemplate",null),i([a({readOnly:!0,clonable:!1})],n.prototype,"fieldsIndex",null),i([a({type:De,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],n.prototype,"floorInfo",void 0),i([a(B.outFields)],n.prototype,"outFields",void 0),i([a({type:ee,readOnly:!0,json:{read:!1}})],n.prototype,"nodePages",void 0),i([v("service","nodePages",["nodePages","pointNodePages"])],n.prototype,"readNodePages",null),i([a({type:[tt],readOnly:!0})],n.prototype,"materialDefinitions",void 0),i([a({type:[rt],readOnly:!0})],n.prototype,"textureSetDefinitions",void 0),i([a({type:[it],readOnly:!0})],n.prototype,"geometryDefinitions",void 0),i([a({readOnly:!0})],n.prototype,"serviceUpdateTimeStamp",void 0),i([a({readOnly:!0})],n.prototype,"attributeStorageInfo",void 0),i([a({readOnly:!0})],n.prototype,"statisticsInfo",void 0),i([a({type:N.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],n.prototype,"excludeObjectIds",void 0),i([a({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],n.prototype,"definitionExpression",void 0),i([a({type:ht,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],n.prototype,"filter",void 0),i([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],n.prototype,"path",void 0),i([a(Ue)],n.prototype,"elevationInfo",null),i([a({readOnly:!0,json:{read:!1}})],n.prototype,"effectiveCapabilities",null),i([a({readOnly:!0})],n.prototype,"effectiveEditingEnabled",null),i([a({type:String})],n.prototype,"geometryType",null),i([a(qe)],n.prototype,"labelsVisible",void 0),i([a({type:[Ne],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:z},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:z},write:!0}})],n.prototype,"labelingInfo",void 0),i([a(Ce)],n.prototype,"legendEnabled",void 0),i([a({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var s,o;if(typeof e=="number"&&e>=0&&e<=1)return e;const r=(o=(s=t.layerDefinition)==null?void 0:s.drawingInfo)==null?void 0:o.transparency;return r!==void 0?Ve(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],n.prototype,"opacity",void 0),i([a({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],n.prototype,"priority",void 0),i([a({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],n.prototype,"semantic",void 0),i([a({types:Ge,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],n.prototype,"renderer",null),i([a({json:{read:!1}})],n.prototype,"cachedDrawingInfo",void 0),i([v("service","cachedDrawingInfo")],n.prototype,"readCachedDrawingInfo",null),i([a({readOnly:!0,json:{read:!1}})],n.prototype,"capabilities",null),i([a({type:Boolean,json:{read:!1}})],n.prototype,"editingEnabled",null),i([a({readOnly:!0,json:{write:!1,read:!1}})],n.prototype,"infoFor3D",null),i([a({readOnly:!0,json:{write:!1,read:!1}})],n.prototype,"relationships",null),i([a(Qe)],n.prototype,"popupEnabled",void 0),i([a({type:ke,json:{name:"popupInfo",write:!0}})],n.prototype,"popupTemplate",void 0),i([a({readOnly:!0,json:{read:!1}})],n.prototype,"defaultPopupTemplate",null),i([a({type:String,json:{read:!1}})],n.prototype,"objectIdField",void 0),i([v("service","objectIdField",["objectIdField","fields"])],n.prototype,"readObjectIdField",null),i([a({type:String,json:{read:!1}})],n.prototype,"globalIdField",void 0),i([v("service","globalIdField",["globalIdField","fields"])],n.prototype,"readGlobalIdField",null),i([a({readOnly:!0,type:String,json:{read:!1}})],n.prototype,"displayField",null),i([a({type:String,json:{read:!1}})],n.prototype,"profile",void 0),i([v("service","profile",["store.profile"])],n.prototype,"readProfile",null),i([a({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],n.prototype,"normalReferenceFrame",void 0),i([a(Ke)],n.prototype,"screenSizePerspectiveEnabled",void 0),i([a({json:{read:!1,origins:{service:{read:!0}}}})],n.prototype,"serviceItemId",void 0),i([a(Je)],n.prototype,"useViewTime",null),n=i([b("esri.layers.SceneLayer")],n);const Z={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},wt={"mesh-pyramids":"mesh",points:"point"},vr=n;export{vr as default};