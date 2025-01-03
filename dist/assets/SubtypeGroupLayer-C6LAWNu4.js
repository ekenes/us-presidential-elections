const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/featureLayerUtils-BrcEjFXU.js","assets/index-GOO0DjDp.js","assets/index-D7_X1F0b.css","assets/originUtils-D69mHv66.js","assets/multiOriginJSONSupportUtils-C0wm8_Yw.js","assets/utils-CYM9l9Oc.js","assets/jsonContext-CbvIEB6E.js","assets/saveUtils-CGbtHkHp.js","assets/lazyLayerLoader-CrwIAOU9.js","assets/FeatureLayerSource-DhBJYN8V.js","assets/MeshLocalVertexSpace-BqXq6JV3.js","assets/meshVertexSpaceUtils-Dy_SZOm6.js","assets/vec32-Bq8LfEfc.js","assets/MeshTransform-CcFz4jiv.js","assets/infoFor3D-CxdEiWhp.js","assets/mat4f64-CSKppSlJ.js","assets/quat-DWfuhTov.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-aQ5IuZRd.js","assets/editingSupport-r7-urApN.js","assets/clientSideDefaults-BmMJD_BW.js","assets/QueryEngineCapabilities-DjYb9CEb.js","assets/capabilities-Y9lFlGVh.js","assets/QueryTask-CT2eqm7b.js","assets/executeForIds-DRS4q9Ca.js","assets/featureConversionUtils-DVuAsAiD.js"])))=>i.map(i=>d[i]);
import{fV as K,fW as X,fB as C,fX as Y,fY as ee,fZ as te,f_ as re,f$ as se,g0 as ie,cI as G,cB as N,cC as ne,eC as P,a0 as F,dl as ae,W as oe,aP as le,s as g,eE as ue,g1 as k,fU as x,g2 as M,M as i,N as n,g3 as pe,dc as de,fA as ye,eH as ce,eI as he,eJ as fe,cL as be,f4 as ge,f3 as me,eL as ve,eM as we,aO as $,eQ as U,O as H,dW as Q,eR as B,g4 as Fe,g5 as Se,g6 as Ie,dL as $e,fC as Oe,fD as Ee,cD as je,eB as Te,cH as Ce,cE as _e,cT as Ae,cF as Le,cG as qe,cU as xe,cV as Pe,ac as L,dM as De,bF as Re,bI as Ve,aI as Ge,dN as Ne,g7 as ke,I as Me,aS as Ue,et as He,g8 as Qe,g9 as Be,fE as Je,ga as We,_ as D,gb as ze,gc as Ze,gd as Ke,ds as Xe,ge as Ye,gf as et,gg as tt,gh as rt,gi as st,gj as it,f0 as j,fH as nt,eD as at,fG as ot,cK as lt,gk as ut,cS as pt}from"./index-GOO0DjDp.js";const J={key:"type",base:X,errorContext:"renderer",typeMap:{simple:C,"unique-value":Y,"class-breaks":ee}},q=K({types:J});function dt(e,t){var a;const r=(a=e.drawingInfo)==null?void 0:a.renderer,s=r?q(r,e,t):null;if((s==null?void 0:s.type)==="simple")return te(s.symbol,null)?s.symbol.clone():null}const yt=["#ed5151","#149ece","#a7c636","#9e559c","#fc921f","#ffde3e","#f789d8","#b7814a","#3caf99","#6b6bd6","#b54779","#7f7f7f"];function ct(e,t){return re(yt,e,{offset:!0,shuffle:!0}).reverse().map(r=>{const s=t.clone();return s.type==="cim"?se(s,r):ie(s,r),new C({symbol:s})})}const R=B();let ht=0;function I(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function ft(e){return new C({symbol:bt(e)})}function bt(e){switch(e){case"point":case"multipoint":return Ie.clone();case"polyline":return Se.clone();case"polygon":case"multipatch":return Fe.clone();default:return null}}function gt(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&e.field!=null&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function W(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(s=>s.code===e)}function mt(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const s={},a=W(e,t);if(a!=null){const{defaultValues:l}=a;for(const u in l)s[u]=l[u]}return s[t.subtypeField]=e,new U({name:"New Feature",drawingTool:r,prototype:{attributes:s}})}let o=class extends G(N(ne($e))){constructor(e){super(e),this.attributeTableTemplate=null,this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${ht++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}load(e){return P(this.renderer,this.fieldsIndex),Promise.resolve(this)}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){const{fields:s,parent:a}=this;let l;if(s){l=[];let u=0;s.forEach(({name:d,alias:c,editable:m,visible:v})=>{var O;if(!v)return;const y=(O=a==null?void 0:a.fields)==null?void 0:O.find(S=>S.name===d);if(!y)return;const b={name:d};let w=!1;c!==y.alias&&(b.alias=c,w=!0),m!==y.editable&&(b.editable=m,w=!0),l.push(b),w&&u++}),u===0&&l.length===s.length&&(l=null)}else l=F(e);l!=null&&l.length&&ae(r,l,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,s=e==null?void 0:e.fields;if(!e||!(s!=null&&s.length))return null;const{subtypes:a,subtypeField:l}=e,u=a==null?void 0:a.find(v=>v.code===r),d=u==null?void 0:u.defaultValues,c=u==null?void 0:u.domains,m=[];for(const v of s){const y=v.clone(),{name:b}=y,w=t==null?void 0:t.find(E=>E.name===b);if(y.visible=!t||!!w,w){const{alias:E,editable:Z}=w;E&&(y.alias=E),Z===!1&&(y.editable=!1)}const O=(d==null?void 0:d[b])??null;y.defaultValue=b===l?r:O;const S=(c==null?void 0:c[b])??null;y.domain=b===l?null:S?S.type==="inherited"?y.domain:S.clone():null,m.push(y)}return m}get floorInfo(){var e;return(e=this.parent)==null?void 0:e.floorInfo}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||oe.getLogger(this).error(h("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}get relationships(){var e;return(e=this.parent)==null?void 0:e.relationships}set renderer(e){P(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?ft(e.geometryType):null}readRendererFromService(e,t,r){var d,c,m;if(t.type==="Table")return null;const s=(d=t.drawingInfo)==null?void 0:d.renderer,a=q(s,t,r);let l;const{subtypeCode:u}=this;if(u!=null&&gt(a,t.subtypeField)){const v=(c=a.uniqueValueInfos)==null?void 0:c.find(({value:y})=>(y=typeof y=="number"?String(y):y)===String(u));v&&(l=new C({symbol:v.symbol}))}else(a==null?void 0:a.type)!=="simple"||(m=a.visualVariables)!=null&&m.length||(l=a);return l}readRenderer(e,t,r){var l,u,d;const s=(u=(l=t==null?void 0:t.layerDefinition)==null?void 0:l.drawingInfo)==null?void 0:u.renderer;return s?((d=s.visualVariables)==null?void 0:d.some(c=>c.type!=="rotationInfo"))?void 0:q(s,t,r)||void 0:void 0}get spatialReference(){var e;return((e=this.parent)==null?void 0:e.spatialReference)??le.WGS84}get subtypeField(){var e;return(e=this.parent)==null?void 0:e.subtypeField}readTemplatesFromService(e,t){return[mt(this.subtypeCode,t)]}readTitleFromService(e,t){const r=W(this.subtypeCode,t);return r!=null?r.name:null}get url(){var e;return(e=this.parent)==null?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw h("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new g("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:s}=this;if(!s)throw h("updateAttachment");if(e.getAttribute(s.subtypeField)!==this.subtypeCode)throw new g("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return s.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw h("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new g("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw h("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:s,title:a}=this;if(r){const{displayField:l,editFieldsInfo:u,objectIdField:d}=r;t={displayField:l,editFieldsInfo:u,fields:s,objectIdField:d,title:a}}return ue(t,e)}createQuery(){if(!this.parent)throw h("createQuery");const e=k(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=x(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){if(!(t!=null&&t.excludeImpliedDomains)&&this.parent){const r=M(this.parent,e);if(r)return r}return this._getLayerDomain(e)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw h("queryAttachments");const s=e.clone();return s.where=z(s.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatureCount(e,t){const r=await this.load();if(!r.parent)throw h("queryFeatureCount");return r.parent.queryFeatureCount(_(r.parent,r,e),t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw h("queryFeatures");return r.parent.queryFeatures(_(r.parent,r,e),t)}async queryObjectIds(e,t){const r=await this.load();if(!r.parent)throw h("queryObjectIds");return r.parent.queryObjectIds(_(r.parent,r,e),t)}async queryRelatedFeatures(e,t){const r=await this.load();if(!r.parent)throw h("queryRelatedFeatures");return r.parent.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){const r=await this.load();if(!r.parent)throw h("queryRelatedFeaturesCount");return r.parent.queryRelatedFeaturesCount(e,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([n({type:pe,json:{name:"attributeTableInfo",write:{ignoreOrigin:!0}}})],o.prototype,"attributeTableTemplate",void 0),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"effectiveCapabilities",null),i([n({json:{write:{ignoreOrigin:!0}}})],o.prototype,"charts",void 0),i([n({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],o.prototype,"editingEnabled",void 0),i([n({type:Boolean,readOnly:!0})],o.prototype,"effectiveEditingEnabled",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"elevationInfo",null),i([n({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],o.prototype,"fieldOverrides",void 0),i([de("fieldOverrides")],o.prototype,"writeFieldOverrides",null),i([n({...R.fields,readOnly:!0,json:{read:!1}})],o.prototype,"fields",null),i([n(R.fieldsIndex)],o.prototype,"fieldsIndex",void 0),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"floorInfo",null),i([n({type:ye,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],o.prototype,"formTemplate",void 0),i([n({type:String,clonable:!1,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],o.prototype,"id",void 0),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"geometryType",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),i([n(I(F(ce)))],o.prototype,"labelsVisible",void 0),i([n({type:[he],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:fe},write:{ignoreOrigin:!0}}})],o.prototype,"labelingInfo",void 0),i([n({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],o.prototype,"layerType",void 0),i([n(I(F(be)))],o.prototype,"legendEnabled",void 0),i([n({type:["show","hide"]})],o.prototype,"listMode",void 0),i([n((()=>{const e=F(ge);return e.json.origins.service.read=!1,I(e)})())],o.prototype,"minScale",void 0),i([n((()=>{const e=F(me);return e.json.origins.service.read=!1,I(e)})())],o.prototype,"maxScale",void 0),i([n({readOnly:!0})],o.prototype,"effectiveScaleRange",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"objectIdField",null),i([n({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],o.prototype,"opacity",void 0),i([n({clonable:!1})],o.prototype,"parent",void 0),i([n(I(F(ve)))],o.prototype,"popupEnabled",void 0),i([n({type:we,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],o.prototype,"popupTemplate",void 0),i([n({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"relationships",null),i([n({types:J,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],o.prototype,"renderer",null),i([$("service","renderer",["drawingInfo.renderer","subtypeField","type"])],o.prototype,"readRendererFromService",null),i([$("renderer",["layerDefinition.drawingInfo.renderer"])],o.prototype,"readRenderer",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"spatialReference",null),i([n({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],o.prototype,"subtypeCode",void 0),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"subtypeField",null),i([n({type:[U],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],o.prototype,"templates",void 0),i([$("service","templates",["geometryType","subtypeField","subtypes","type"])],o.prototype,"readTemplatesFromService",null),i([n({type:String,json:{write:{ignoreOrigin:!0}}})],o.prototype,"title",void 0),i([$("service","title",["subtypes"])],o.prototype,"readTitleFromService",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"url",null),i([n({readOnly:!0})],o.prototype,"userHasUpdateItemPrivileges",null),i([n({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],o.prototype,"visible",void 0),o=i([H("esri.layers.support.SubtypeSublayer")],o);const _=(e,t,r)=>{if(!r)return t.createQuery();const s=Q.from(r);return s.where=z(s.where,e.subtypeField,t.subtypeCode),s},z=(e,t,r)=>{const s=new RegExp(`${t}\\s*=\\s*\\d+`),a=`${t}=${r}`,l=e??"";return s.test(l)?l.replace(s,a):x(a,l)},h=e=>new g(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),T=o,f="SubtypeGroupLayer",vt="esri.layers.SubtypeGroupLayer";function V(e,t){return new g("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const A=B();let p=class extends Oe(Ee(je(Te(Ce(_e(Ae(Le(qe(G(xe(Pe(N(pt))))))))))))){constructor(...e){super(...e),this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(L.ofType(T)),this.useUniqueColorsForSublayers=!0,this.supportedSourceTypes=new Set(["Feature Layer"]),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=De(async(t,r,s)=>{const{save:a,saveAs:l}=await D(()=>import("./featureLayerUtils-BrcEjFXU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));switch(t){case j.SAVE:return a(this,r);case j.SAVE_AS:return l(this,s,r)}}),this.addHandles(Re(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),Ve))}destroy(){var e;(e=this.source)==null||e.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(Ge).then(async()=>{if(!this.url)throw new g("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new g("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>Ne(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return ke(this)}get parsedUrl(){const e=Me(this.url);return e!=null&&this.layerId!=null&&(e.path=Ue(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?He(this.url,t):t}async addAttachment(e,t){const r=await Qe(this,e,t,f);return this.lastEditsEventDate=new Date,r}async updateAttachment(e,t,r){const s=await Be(this,e,t,r,f);return this.lastEditsEventDate=new Date,s}async applyEdits(e,t){return Je(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await We(D(()=>import("./FeatureLayerSource-DhBJYN8V.js"),__vite__mapDeps([9,1,2,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])),e);return new t({layer:this,supportedSourceTypes:this.supportedSourceTypes}).load({signal:e})}createQuery(){const e=k(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=x(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){const r=await ze(this,e,t,f);return this.lastEditsEventDate=new Date,r}async fetchRecomputedExtents(e){return Ze(this,e,f)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){var s;if(!(t!=null&&t.excludeImpliedDomains)){const a=M(this,e);if(a)return a}const r=Ke(this,t==null?void 0:t.feature);if(r){const a=(s=r.domains)==null?void 0:s[e];return(a==null?void 0:a.type)==="inherited"?this._getLayerDomain(e):a}return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return Xe(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return Ye(this,e,t,f)}async queryFeatures(e,t){const r=await this.load(),s=Q.from(e)??r.createQuery(),a=s.outFields??[];a.includes(this.subtypeField)||(a.push(this.subtypeField),s.outFields=a);const l=await r.source.queryFeatures(s,t);if(l!=null&&l.features)for(const u of l.features)u.layer=u.sourceLayer=this.findSublayerForFeature(u);return l}async queryObjectIds(e,t){return et(this,e,t,f)}async queryFeatureCount(e,t){return tt(this,e,t,f)}async queryExtent(e,t){return rt(this,e,t,f)}async queryRelatedFeatures(e,t){return st(this,e,t,f)}async queryRelatedFeaturesCount(e,t){return it(this,e,t,f)}async save(e){return this._debouncedSaveOperations(j.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(j.SAVE_AS,t,e)}write(e,t){var l;const{origin:r,layerContainerType:s,messages:a}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&s!=="tables")return a==null||a.push(V(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&s==="tables")return a==null||a.push(V(this,"using a non-table source cannot be written to tables in web maps")),null;return(l=this.sublayers)!=null&&l.length?super.write(e,t):(a==null||a.push(new g("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&nt(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),!((r=this.subtypes)!=null&&r.length))throw new g("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),at(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return ot(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(s=>s.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)})],"sublayers-owner"))}};i([n({readOnly:!0})],p.prototype,"createQueryVersion",null),i([n({readOnly:!0})],p.prototype,"editingEnabled",null),i([n({readOnly:!0})],p.prototype,"effectiveEditingEnabled",null),i([n({...A.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],p.prototype,"fields",void 0),i([n(A.fieldsIndex)],p.prototype,"fieldsIndex",void 0),i([n(lt)],p.prototype,"id",void 0),i([n({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],p.prototype,"listMode",void 0),i([n({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],p.prototype,"operationalLayerType",void 0),i([n(A.outFields)],p.prototype,"outFields",void 0),i([n({readOnly:!0})],p.prototype,"parsedUrl",null),i([n({clonable:!1})],p.prototype,"source",null),i([n({type:L.ofType(T),json:{origins:{service:{read:{source:"subtypes",reader(e,t,r){let s=null;if(this.useUniqueColorsForSublayers){const l=dt(t,r);s=l?ct(e.length,l):null}const a=e.map(({code:l},u)=>{const d=new T({subtypeCode:l});d.read(t,r);const c=s==null?void 0:s[u];return c&&d.read({drawingInfo:{renderer:c.toJSON()}},r),d});return new(L.ofType(T))(a)}}}},name:"layers",write:{ignoreOrigin:!0}}})],p.prototype,"sublayers",void 0),i([n()],p.prototype,"useUniqueColorsForSublayers",void 0),i([n({type:ut})],p.prototype,"timeInfo",void 0),i([n({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],p.prototype,"title",void 0),i([$("service","title",["name"])],p.prototype,"readTitleFromService",null),i([n({json:{read:!1}})],p.prototype,"type",void 0),p=i([H(vt)],p);const Ft=p;export{Ft as default};
