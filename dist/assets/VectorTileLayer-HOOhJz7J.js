import{W as ee,s as I,er as te,ix as re,I as w,dr as ie,U as x,cd as Q,hR as se,aR as le,c9 as A,db as oe,fk as C,c4 as ae,a0 as g,d2 as W,aS as E,aY as R,eW as G,iy as z,eX as J,R as ne,iz as K,gs as j,bL as L,iA as B,T as ue,cD as pe,cH as ce,cE as he,cT as ye,cF as de,cG as fe,cU as me,cV as ge,cI as Se,aI as T,iB as Ae,iC as xe,bR as we,M as h,N as y,aP as _e,dc as ve,aO as D,O as be,cS as Ie}from"./index-GOO0DjDp.js";import{p as Re}from"./ArcGISCachedService-DF2rzVsC.js";import{z as U,p as Ue}from"./TileInfo-CboVzhc1.js";import{T as X}from"./TilemapCache-C7-3SBZU.js";import{e as H}from"./TileKey--BXjV7L0.js";import{e as Te}from"./jsonContext-CbvIEB6E.js";import{l as $e}from"./StyleRepository-Bbt_CBxl.js";import"./TileInfoTilemapCache-BYu06Dhk.js";import"./GeometryUtils-D9Z2K2oT.js";import"./enums-V7VQdXj3.js";import"./VertexElementDescriptor-BOD-G50G.js";let v=null;function Ee(e){if(v)return v;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return v=new Promise(r=>{const i=new Image;i.onload=()=>{i.onload=i.onerror=null,r(i.width>0&&i.height>0)},i.onerror=()=>{i.onload=i.onerror=null,r(!1)},i.src="data:image/webp;base64,"+t[e]}),v}const M=1.15;class N{constructor(t,r){this._spriteSource=t,this._maxTextureSize=r,this.devicePixelRatio=1,this._spriteImageFormat="png",this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded",t.type==="url"&&t.spriteFormat&&(this._spriteImageFormat=t.spriteFormat),t.pixelRatio&&(this.devicePixelRatio=t.pixelRatio),this.baseURL=t.spriteUrl}get spriteNames(){const t=[];for(const r in this._spritesData)t.push(r);return t.sort(),t}getSpriteInfo(t){return this._spritesData?this._spritesData[t]:null}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}async _loadSprites(t){this._isRetina=this.devicePixelRatio>M;const{width:r,height:i,data:s,json:o}=await this._getSpriteData(this._spriteSource,t),l=Object.keys(o);if(!l||l.length===0||!s)return this._spritesData=this.image=null,void(this.width=this.height=0);this._spritesData=o,this.width=r,this.height=i;const n=Math.max(this._maxTextureSize,4096);if(r>n||i>n){const u=`Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${n} pixels}`;throw ee.getLogger("esri.layers.support.SpriteSource").error(u),new I("SpriteSource",u)}let a;for(let u=0;u<s.length;u+=4)a=s[u+3]/255,s[u]=s[u]*a,s[u+1]=s[u+1]*a,s[u+2]=s[u+2]*a;this.image=s}async _getSpriteData(t,r){if(t.type==="image"){let p,d;if(this.devicePixelRatio<M){if(!t.spriteSource1x)throw new I("SpriteSource","no image data provided for low resolution sprites!");p=t.spriteSource1x.image,d=t.spriteSource1x.json}else{if(!t.spriteSource2x)throw new I("SpriteSource","no image data provided for high resolution sprites!");p=t.spriteSource2x.image,d=t.spriteSource2x.json}return"width"in p&&"height"in p&&"data"in p&&(te(p.data)||re(p.data))?{width:p.width,height:p.height,data:new Uint8Array(p.data),json:d}:{...F(p),json:d}}const i=w(this.baseURL),s=i.query?"?"+ie(i.query):"",o=this._isRetina?"@2x":"",l=`${i.path}${o}.${this._spriteImageFormat}${s}`,n=`${i.path}${o}.json${s}`,[a,u]=await Promise.all([x(n,r),x(l,{responseType:"image",...r})]);return{...F(u.data),json:a.data}}}function F(e){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=e.width,t.height=e.height,r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height);return{width:e.width,height:e.height,data:new Uint8Array(i.data)}}let Pe=class{constructor(t){this.url=t}destroy(){this._tileIndexPromise=null}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=x(this.url).then(t=>t.data.index)),this._tileIndexPromise}async dataKey(t,r){const i=await this.fetchTileIndex();return Q(r),this._getIndexedDataKey(i,t)}_getIndexedDataKey(t,r){const i=[r];if(r.level<0||r.row<0||r.col<0||r.row>>r.level>0||r.col>>r.level>0)return null;let s=r;for(;s.level!==0;)s=new H(s.level-1,s.row>>1,s.col>>1,s.world),i.push(s);let o,l,n=t,a=i.pop();if(n===1)return a;for(;i.length;)if(o=i.pop(),l=(1&o.col)+((1&o.row)<<1),n){if(n[l]===0){a=null;break}if(n[l]===1){a=o;break}a=o,n=n[l]}return a}},Oe=class{constructor(t,r){this._tilemap=t,this._tileIndexUrl=r}destroy(){this._tilemap=se(this._tilemap),this._tileIndexPromise=null}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=x(this._tileIndexUrl,{query:{...t==null?void 0:t.query}}).then(r=>r.data.index)),this._tileIndexPromise}dataKey(t,r){const{level:i,row:s,col:o}=t,l=new H(t);return this._tilemap.fetchAvailabilityUpsample(i,s,o,l,r).then(()=>(l.world=t.world,l)).catch(n=>{if(le(n))throw n;return null})}},Ce=class{constructor(t){this._tileUrl=t,this._promise=null,this._abortController=null,this._abortOptions=[]}getData(t){var i;(this._promise==null||C((i=this._abortController)==null?void 0:i.signal))&&(this._promise=this._makeRequest(this._tileUrl));const r=this._abortOptions;return r.push(t),ae(t,()=>{r.every(s=>C(s))&&this._abortController.abort()}),this._promise.then(s=>g(s))}async _makeRequest(t){this._abortController=new AbortController;const{data:r}=await x(t,{responseType:"array-buffer",signal:this._abortController.signal});return r}};const k=new Map;function je(e,t,r,i,s){const o=w(e),l=o.query;if(l)for(const[a,u]of Object.entries(l))switch(u){case"{x}":l[a]=i.toString();break;case"{y}":l[a]=r.toString();break;case"{z}":l[a]=t.toString()}const n=o.path;return Le(A(n.replaceAll(/\{z\}/gi,t.toString()).replaceAll(/\{y\}/gi,r.toString()).replaceAll(/\{x\}/gi,i.toString()),{...o.query}),s)}function Le(e,t){return oe(k,e,()=>new Ce(e)).getData(t).finally(()=>k.delete(e))}class Be{constructor(t,r,i){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.initialExtent=null,this.name=t,this.sourceUrl=r;const s=w(this.sourceUrl),o=g(i),l=o.tiles;if(s)for(let f=0;f<l.length;f++){const m=w(l[f]);m&&(W(m.path)||(m.path=E(s.path,m.path)),l[f]=A(m.path,{...s.query,...m.query}))}this.tileServers=l;const n=i.capabilities&&i.capabilities.split(",").map(f=>f.toLowerCase().trim()),a=(i==null?void 0:i.exportTilesAllowed)===!0,u=(n==null?void 0:n.includes("tilemap"))===!0,p=a&&i.hasOwnProperty("maxExportTilesCount")?i.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:a,supportsTileMap:u},exportTiles:a?{maxExportTilesCount:+p}:null},this.tileInfo=U.fromJSON(o.tileInfo);const d=i.tileMap?A(E(s.path,i.tileMap),s.query??{}):null;u?(this.type="vector-tile",this.tilemap=new Oe(new X({layer:{parsedUrl:s,tileInfo:this.tileInfo},minLOD:o.minLOD??this.tileInfo.lods[0].level,maxLOD:o.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}),d)):d&&(this.tilemap=new Pe(d)),this.fullExtent=R.fromJSON(i.fullExtent),this.initialExtent=R.fromJSON(i.initialExtent)}destroy(){var t;(t=this.tilemap)==null||t.destroy()}async getRefKey(t,r){return this.tilemap?this.tilemap.dataKey(t,r):t}requestTile(t,r,i,s){const o=this.tileServers[r%this.tileServers.length];return je(o,t,r,i,s)}isCompatibleWith(t){const r=this.tileInfo,i=t.tileInfo;if(!r.spatialReference.equals(i.spatialReference)||!r.origin.equals(i.origin)||Math.round(r.dpi)!==Math.round(i.dpi))return!1;const s=r.lods,o=i.lods,l=Math.min(s.length,o.length);for(let n=0;n<l;n++){const a=s[n],u=o[n];if(a.level!==u.level||Math.round(a.scale)!==Math.round(u.scale))return!1}return!0}}async function De(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[i,s]=typeof e=="string"?[e,null]:[null,e.jsonUrl];return await S(r,"esri",e,s,t),{layerDefinition:r.validatedSource,url:i,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&_(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&_(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName}}function _(...e){let t;for(const r of e)r!=null&&(G(r)?t&&(t=t.split("://")[0]+":"+r.trim()):t=W(r)?r:E(t,r));return t?z(t):void 0}async function S(e,t,r,i,s){let o,l,n;if(Q(s),typeof r=="string"){const u=J(r);n=await x(u,{...s,responseType:"json",query:{f:"json",...s==null?void 0:s.query}}),n.ssl&&(o&&(o=o.replace(/^http:/i,"https:")),l&&(l=l.replace(/^http:/i,"https:"))),o=u,l=u}else r!=null&&(n={data:r},o=r.jsonUrl||null,l=i);const a=n==null?void 0:n.data;if(Z(a))return e.styleUrl=o||null,Ne(e,a,l,s);if(Me(a))return e.sourceUrl?V(e,a,l,!1,t,s):(e.sourceUrl=o||null,V(e,a,l,!0,t,s));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function Y(e){return typeof e=="object"&&!!e&&"tilejson"in e&&e.tilejson!=null}function Z(e){return!!e&&"sources"in e&&!!e.sources}function Me(e){return!Z(e)}async function Ne(e,t,r,i){const s=r?ne(r):K();e.styleBase=s,e.style=t,t["sprite-format"]&&t["sprite-format"].toLowerCase()==="webp"&&(e.spriteFormat="webp");const o=[];if(t.sources&&t.sources.esri){const l=t.sources.esri;l.url?await S(e,"esri",_(s,l.url),void 0,i):o.push(S(e,"esri",l,s,i))}for(const l of Object.keys(t.sources))l!=="esri"&&t.sources[l].type==="vector"&&(t.sources[l].url?o.push(S(e,l,_(s,t.sources[l].url),void 0,i)):t.sources[l].tiles&&o.push(S(e,l,t.sources[l],s,i)));await Promise.all(o)}async function V(e,t,r,i,s,o){const l=r?z(r)+"/":K(),n=Fe(t),a=new Be(s,A(l,(o==null?void 0:o.query)??{}),n);if(!i&&e.primarySourceName in e.sourceNameToSource){const u=e.sourceNameToSource[e.primarySourceName];if(!u.isCompatibleWith(a))return;a.fullExtent!=null&&(u.fullExtent!=null?u.fullExtent.union(a.fullExtent):u.fullExtent=a.fullExtent.clone()),u.tileInfo&&a.tileInfo&&u.tileInfo.lods.length<a.tileInfo.lods.length&&(u.tileInfo=a.tileInfo)}if(i&&(e.sourceBase=l,e.source=t,e.validatedSource=n,e.primarySourceName=s),e.sourceNameToSource[s]=a,!Y(e)&&"defaultStyles"in t&&!e.style){if(t.defaultStyles==null)throw new Error;return typeof t.defaultStyles=="string"?S(e,"",_(l,t.defaultStyles,"root.json"),void 0,o):S(e,"",t.defaultStyles,_(l,"root.json"),o)}}function Fe(e){if(ke(e)){const p=e==null?void 0:e.tileInfo;return p!=null&&(p.rows==null&&(p.rows=512),p.cols==null&&(p.cols=512)),e}const r={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100,latestWkid:3857}};let i=null;if(Y(e)){const{bounds:p}=e;if(p){const d=j({x:p[0],y:p[1],spatialReference:g(L)}),f=j({x:p[2],y:p[3],spatialReference:g(L)});i={xmin:d.x,ymin:d.y,xmax:f.x,ymax:f.y,spatialReference:g(B)}}}i===null&&(i=r);let s=78271.51696400007,o=2958287637957775e-7;const l=[],n=e.hasOwnProperty("maxzoom")&&e.maxzoom!=null?+e.maxzoom:22,a=0,u=0;for(let p=0;p<=n;p++)l.push({level:p,scale:o,resolution:s}),s/=2,o/=2;return{capabilities:"TilesOnly",initialExtent:i,fullExtent:r,minScale:a,maxScale:u,tiles:e.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:l,spatialReference:g(B)}}}function ke(e){return e.hasOwnProperty("tileInfo")}const b=1e-6;function Ve(e,t){if(e===t)return!0;if(e==null&&t!=null||e!=null&&t==null||e==null||t==null||!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,i=t.origin;if(Math.abs(r.x-i.x)>=b||Math.abs(r.y-i.y)>=b)return!1;let s,o;e.lods[0].scale>t.lods[0].scale?(s=e,o=t):(o=e,s=t);for(let l=s.lods[0].scale;l>=o.lods[o.lods.length-1].scale-b;l/=2)if(Math.abs(l-o.lods[0].scale)<b)return!0;return!1}function qe(e,t){if(e===t)return e;if(e==null&&t!=null)return t;if(e!=null&&t==null)return e;if(e==null||t==null)return null;const r=e.size[0],i=e.format,s=e.dpi,o=new ue({x:e.origin.x,y:e.origin.y}),l=e.spatialReference,n=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],a=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],u=n.scale,p=n.resolution,d=a.scale,f=[];let m=u,P=p,O=0;for(;m>d;)f.push(new Ue({level:O,resolution:P,scale:m})),O++,m/=2,P/=2;return new U({size:[r,r],dpi:s,format:i||"pbf",origin:o,lods:f,spatialReference:l})}let $;function q(){return $||($=Ge()),$}class Qe{constructor(){this.available=!1,this.majorPerformanceCaveat=!1,this.maxTextureSize=0,this.supportsVertexShaderSamplers=!1,this.supportsHighPrecisionFragment=!1,this.supportsColorBufferFloat=!1,this.supportsColorBufferFloatBlend=!1,this.supportsColorBufferHalfFloat=!1}}function We(e){if(typeof WebGL2RenderingContext>"u")return null;const t=document.createElement("canvas");if(!t)return null;let r=t.getContext("webgl2",{failIfMajorPerformanceCaveat:!0});if(r==null&&(r=t.getContext("webgl2"),r!=null&&(e.majorPerformanceCaveat=!0)),r==null)return r;e.available=!0,e.maxTextureSize=r.getParameter(r.MAX_TEXTURE_SIZE),e.supportsVertexShaderSamplers=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0;const i=r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT);return i&&(e.supportsHighPrecisionFragment=i.precision>0),r}function Ge(){const e=new Qe,t=We(e);return t==null||(e.supportsColorBufferFloat=t.getExtension("EXT_color_buffer_float")!==null,e.supportsColorBufferFloatBlend=t.getExtension("EXT_float_blend")!==null,e.supportsColorBufferHalfFloat=e.supportsColorBufferFloat||t.getExtension("EXT_color_buffer_half_float")!==null),e}let c=class extends pe(ce(he(Re(ye(de(fe(me(ge(Se(Ie)))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.path=null,this.refreshInterval=0,this.style=null,this.tilemapCache=null,this.type="vector-tile",this.url=null}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){var e;if(this.sourceNameToSource)for(const t of Object.values(this.sourceNameToSource))t==null||t.destroy();(e=this.primarySource)==null||e.destroy(),this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(T).then(async()=>{var i;if(!((i=this.portalItem)!=null&&i.id))return;const r=`${this.portalItem.itemCdnUrl}/resources/styles/root.json`;(await x(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},Te(this.portalItem,"portal-item"))}).catch(T).then(()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=(e==null?void 0:e.serviceUrl)&&w(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?A(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var e;return((e=this.primarySource)==null?void 0:e.fullExtent)||null}get initialExtent(){var e;return((e=this.primarySource)==null?void 0:e.initialExtent)||null}get parsedUrl(){return this.serviceUrl?w(this.serviceUrl):null}get serviceUrl(){var e;return((e=this.currentStyleInfo)==null?void 0:e.serviceUrl)||null}get spatialReference(){var e;return((e=this.tileInfo)==null?void 0:e.spatialReference)??null}get styleUrl(){var e;return((e=this.currentStyleInfo)==null?void 0:e.styleUrl)||null}writeStyleUrl(e,t){e&&G(e)&&(e=`https:${e}`);const r=Ae(e);t.styleUrl=xe(e,r)}get tileInfo(){var r;const e=[];for(const i in this.sourceNameToSource)e.push(this.sourceNameToSource[i]);let t=((r=this.primarySource)==null?void 0:r.tileInfo)||new U;if(e.length>1)for(let i=0;i<e.length;i++)Ve(t,e[i].tileInfo)&&(t=qe(t,e[i].tileInfo));return t}readTilemapCache(e,t){var i;return((i=t.capabilities)==null?void 0:i.includes("Tilemap"))?new X({layer:this}):null}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){var r,i;if(!this._spriteSourceMap.has(e)){const s=q().maxTextureSize,o=(r=this.currentStyleInfo)!=null&&r.spriteUrl?A(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,l=new N({type:"url",spriteUrl:o,pixelRatio:e,spriteFormat:(i=this.currentStyleInfo)==null?void 0:i.spriteFormat},s);await l.load(t),this._spriteSourceMap.set(e,l)}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t){if(!e)return null;const r=q().maxTextureSize,i=e.spriteUrl,s=i?A(i,{...this.customParameters,token:this.apiKey}):null;if(!s&&e.type==="url")return null;const o=new N(e,r);try{await o.load(t);const l=e.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(l,o),s&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=s),this.emit("spriteSource-change",{spriteSource:o}),o}catch(l){T(l)}return null}async loadStyle(e,t){var i;const r=e||this.style||this.url;return this._loadingTask&&typeof r=="string"&&this.url===r||((i=this._loadingTask)==null||i.abort(),this._loadingTask=we(s=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:s})),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){var t;return g((t=this.styleRepository)==null?void 0:t.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const i=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||i})}getStyleLayer(e){return g(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return g(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t!=null&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new I("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await De(e,{...t,query:{...this.customParameters,token:this.apiKey}});r.spriteFormat==="webp"&&(await Ee("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),typeof e=="string"?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new $e(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^/]+)?\/arcgis\/rest\/services\/([^/]+(\/[^/]+)*)\/vectortileserver/i),r=["OpenBasemap_v2","OpenBasemap_GCS_v2","OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2","World_Hillshade_v2"];if(!t)return;const i=t[2]&&t[2].toLowerCase();if(!i)return;const s=t[1]||"";for(const o of r)if(o.toLowerCase().includes(i))return J(`//static.arcgis.com/attribution/Vector${s}/${o}`)}async _loadStyle(e){var t;return((t=this._loadingTask)==null?void 0:t.promise)??this.loadStyle(null,e)}};h([y({readOnly:!0})],c.prototype,"attributionDataUrl",null),h([y({type:["show","hide"]})],c.prototype,"listMode",void 0),h([y({json:{read:!0,write:!0}})],c.prototype,"blendMode",void 0),h([y({readOnly:!0,json:{read:!1}})],c.prototype,"capabilities",null),h([y({readOnly:!0})],c.prototype,"currentStyleInfo",void 0),h([y({json:{read:!1},readOnly:!0,type:R})],c.prototype,"fullExtent",null),h([y({json:{read:!1},readOnly:!0,type:R})],c.prototype,"initialExtent",null),h([y({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],c.prototype,"isReference",void 0),h([y({type:["VectorTileLayer"]})],c.prototype,"operationalLayerType",void 0),h([y({readOnly:!0})],c.prototype,"parsedUrl",null),h([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],c.prototype,"path",void 0),h([y({type:Number,json:{write:!1,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],c.prototype,"refreshInterval",void 0),h([y()],c.prototype,"style",void 0),h([y({readOnly:!0})],c.prototype,"serviceUrl",null),h([y({type:_e,readOnly:!0})],c.prototype,"spatialReference",null),h([y({readOnly:!0})],c.prototype,"styleRepository",void 0),h([y({readOnly:!0})],c.prototype,"sourceNameToSource",void 0),h([y({readOnly:!0})],c.prototype,"primarySource",void 0),h([y({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],c.prototype,"styleUrl",null),h([ve(["portal-item","web-document"],"styleUrl")],c.prototype,"writeStyleUrl",null),h([y({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:U})],c.prototype,"tileInfo",null),h([y()],c.prototype,"tilemapCache",void 0),h([D("service","tilemapCache",["capabilities","tileInfo"])],c.prototype,"readTilemapCache",null),h([y({json:{read:!1},readOnly:!0,value:"vector-tile"})],c.prototype,"type",void 0),h([y({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],c.prototype,"url",void 0),h([y({readOnly:!0})],c.prototype,"version",void 0),h([D("version",["version","currentVersion"])],c.prototype,"readVersion",null),c=h([be("esri.layers.VectorTileLayer")],c);const at=c;export{at as default};
