import{s as T,c8 as q,c9 as ee,U as x,bN as ne,bM as J,bQ as te,aP as $,ca as U,bL as ie,I as E,W as ae,aF as re}from"./index-GOO0DjDp.js";import{l as se,r as oe,o as le}from"./featureConversionUtils-DVuAsAiD.js";import{E as ce,I as ue,N as de}from"./geojson-B-BlEEPQ.js";import{u as fe}from"./clientSideDefaults-BmMJD_BW.js";import{p as me}from"./sourceUtils-BoRLX606.js";const G=()=>ae.getLogger("esri.layers.ogc.ogcFeatureUtils"),_="startindex",pe=new Set([_,"offset"]),z="http://www.opengis.net/def/crs/",Ne=`${z}OGC/1.3/CRS84`;var l;async function Se(e,n,t={},i=5){const{links:a}=e,o=p(a,"items",l.geojson)||p(a,"http://www.opengis.net/def/rel/ogc/1.0/items",l.geojson);if(o==null)throw new T("ogc-feature-layer:missing-items-page","Missing items url");const{apiKey:d,customParameters:c,signal:g}=t,f=q(o.href,e.landingPage.url),y={limit:i,...c,token:d},k=ee(f,y),W={accept:l.geojson},{data:N}=await x(k,{signal:g,headers:W}),S=Ie(k,i,N.links)??_;ce(N);const m=ue(N,{geometryType:n.geometryType}),F=n.fields||m.fields||[],M=n.hasZ!=null?n.hasZ:m.hasZ,w=m.geometryType,b=n.objectIdField||m.objectIdFieldName||"OBJECTID";let s=n.timeInfo;const v=F.find(({name:r})=>r===b);if(v)v.editable=!1,v.nullable=!1;else{if(!m.objectIdFieldType)throw new T("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");F.unshift({name:b,alias:b,type:m.objectIdFieldType==="number"?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(b!==m.objectIdFieldName){const r=F.find(({name:u})=>u===m.objectIdFieldName);r&&(r.type="esriFieldTypeInteger")}F===m.fields&&m.unknownFields.length>0&&G().warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:m.unknownFields}});for(const r of F){if(r.name==null&&(r.name=r.alias),r.alias==null&&(r.alias=r.name),r.type!=="esriFieldTypeOID"&&r.type!=="esriFieldTypeGlobalID"&&(r.editable=r.editable==null||!!r.editable,r.nullable=r.nullable==null||!!r.nullable),!r.name)throw new T("ogc-feature-layer:invalid-field-name","field name is missing",{field:r});if(!ne.jsonValues.includes(r.type))throw new T("ogc-feature-layer:invalid-field-type",`invalid type for field "${r.name}"`,{field:r})}if(s){const r=new J(F);if(s.startTimeField){const u=r.get(s.startTimeField);u?(s.startTimeField=u.name,u.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const u=r.get(s.endTimeField);u?(s.endTimeField=u.name,u.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const u=r.get(s.trackIdField);u?s.trackIdField=u.name:(s.trackIdField=null,G().warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.timeReference||(s.timeReference={timeZoneIANA:te}),s.startTimeField||s.endTimeField||(G().warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:s}}),s=void 0)}return{drawingInfo:w?fe(w):null,extent:Fe(e),geometryType:w,fields:F,hasZ:!!M,objectIdField:b,paginationParameter:S,timeInfo:s}}async function ve(e,n={}){const{links:t,url:i}=e,a=p(t,"data",l.json)||p(t,"http://www.opengis.net/def/rel/ogc/1.0/data",l.json);if(a==null)throw new T("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:o,customParameters:d,signal:c}=n,g=q(a.href,i),{data:f}=await x(g,{signal:c,headers:{accept:l.json},query:{...d,token:o}});for(const y of f.collections)y.landingPage=e;return f}async function Pe(e,n={}){const{links:t,url:i}=e,a=p(t,"conformance",l.json)||p(t,"http://www.opengis.net/def/rel/ogc/1.0/conformance",l.json);if(a==null)throw new T("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:o,customParameters:d,signal:c}=n,g=q(a.href,i),{data:f}=await x(g,{signal:c,headers:{accept:l.json},query:{...d,token:o}});return f}async function Oe(e,n={}){const{apiKey:t,customParameters:i,signal:a}=n,{data:o}=await x(e,{signal:a,headers:{accept:l.json},query:{...i,token:t}});return o.url=e,o}async function qe(e,n={}){const{links:t,url:i}=e,a=p(t,"service-desc",l.openapi);if(a==null)return G().warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:o,customParameters:d,signal:c}=n,g=q(a.href,i),{data:f}=await x(g,{signal:c,headers:{accept:l.openapi},query:{...d,token:o}});return f}function Ce(e){const n=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),t=n==null?void 0:n.groups;if(!t)return null;const{authority:i,code:a}=t;switch(i.toLowerCase()){case"ogc":switch(a.toLowerCase()){case"crs27":return $.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return $.WGS84.wkid;default:return null}case"esri":case"epsg":{const o=Number.parseInt(a,10);return Number.isNaN(o)?null:o}default:return null}}async function Ge(e,n,t){const i=await ge(e,n,t);return se(i)}async function ge(e,n,t){const{collection:{links:i,landingPage:{url:a}},layerDefinition:o,maxRecordCount:d,queryParameters:{apiKey:c,customParameters:g},spatialReference:f,supportedCrs:y}=e,k=p(i,"items",l.geojson)||p(i,"http://www.opengis.net/def/rel/ogc/1.0/items",l.geojson);if(k==null)throw new T("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:W,num:N,start:S,timeExtent:m,where:F}=n;if(n.objectIds)throw new T("ogc-feature-layer:query-by-objectids-not-supported","Queries with object ids are not supported");const M=$.fromJSON(f),w=n.outSpatialReference??M,b=w.isWGS84?null:Q(w,y),s=he(W,y),v=we(m),r=be(F),u=N??(S==null?d:10),B=S===0?void 0:S,{fields:K,geometryType:C,hasZ:D,objectIdField:P,paginationParameter:V}=o,H=q(k.href,a),{data:A}=await x(H,{...t,query:{...g,...s,crs:b,datetime:v,query:r,limit:u,[V]:B,token:c},headers:{accept:l.geojson}}),O=de(A,{geometryType:C,hasZ:D,objectIdField:P}),X=O.length===u&&!!p(A.links??[],"next",l.geojson),L=new J(K);for(const h of O){const j={};me(L,j,h.attributes,!0);for(const R of L.fields)R.nullable&&!(R.name in j)&&(j[R.name]=null);j[P]=h.attributes[P],h.attributes=j}if(!b&&w.isWebMercator){for(const h of O)if(h.geometry!=null&&C!=null){const j=oe(h.geometry,C,D,!1);j.spatialReference=$.WGS84,h.geometry=le(U(j,w))}}for(const h of O)h.objectId=h.attributes[P];const Y=b||!b&&w.isWebMercator?w.toJSON():ie,I=new re;return I.exceededTransferLimit=X,I.features=O,I.fields=K,I.geometryType=C,I.hasZ=D,I.objectIdFieldName=P,I.spatialReference=Y,I}function ye(e){return e!=null&&e.type==="extent"}function Q(e,n){const{isWebMercator:t,wkid:i}=e;if(!i)return null;const a=t?n[3857]??n[102100]??n[102113]??n[900913]:n[e.wkid];return a?`${z}${a}`:null}function Z(e){if(e==null)return"";const{xmin:n,ymin:t,xmax:i,ymax:a}=e;return`${n},${t},${i},${a}`}function we(e){if(e==null)return null;const{start:n,end:t}=e;return`${n!=null?n.toISOString():".."}/${t!=null?t.toISOString():".."}`}function be(e){return e!=null&&e&&e!=="1=1"?e:null}function he(e,n){if(!ye(e))return null;const{spatialReference:t}=e;if(!t||t.isWGS84)return{bbox:Z(e)};const i=Q(t,n);return i!=null?{bbox:Z(e),"bbox-crs":i}:t.isWebMercator?{bbox:Z(U(e,$.WGS84))}:null}function Fe(e){var c;const n=(c=e.extent)==null?void 0:c.spatial;if(!n)return null;const t=n.bbox[0],i=t.length===4,[a,o]=t,d=i?void 0:t[2];return{xmin:a,ymin:o,xmax:i?t[2]:t[3],ymax:i?t[3]:t[4],zmin:d,zmax:i?void 0:t[5],spatialReference:$.WGS84.toJSON()}}function p(e,n,t){return e.find(({rel:i,type:a})=>i===n&&a===t)??e.find(({rel:i,type:a})=>i===n&&!a)}function Ie(e,n,t){var f;if(!t)return;const i=p(t,"next",l.geojson),a=(f=E(i==null?void 0:i.href))==null?void 0:f.query;if(!a)return;const o=E(e).query,d=Object.keys(o??{}),c=Object.entries(a).filter(([y])=>!d.includes(y)).find(([y,k])=>pe.has(y.toLowerCase())&&Number.parseInt(k,10)===n);return c==null?void 0:c[0]}(function(e){e.json="application/json",e.geojson="application/geo+json",e.openapi="application/vnd.oai.openapi+json;version=3.0"})(l||(l={}));export{ge as $,Ce as C,ve as N,Pe as O,Oe as P,Ge as R,z as k,qe as q,Se as v,Ne as x};