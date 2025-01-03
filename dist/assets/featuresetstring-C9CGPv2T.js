import{i as o,U as m,a2 as b,l as y,K as c,a3 as l,b as d,r as u,a4 as T,N as v,Q as f,a5 as A,a6 as g,a7 as x,a8 as F,Y as V,a9 as j,aa as D}from"./arcadeUtils-e4Pa2B2w.js";import{dE as w}from"./index-GOO0DjDp.js";import"./ImmutableArray-BPVd6ESQ.js";import"./number-CfyHDTOl.js";import"./featureConversionUtils-DVuAsAiD.js";function p(t,e){return t&&t.domain?t.domain.type==="coded-value"||t.domain.type==="codedValue"?v.convertObjectToArcadeDictionary({type:"codedValue",name:t.domain.name,dataType:w[t.field.type],codedValues:t.domain.codedValues.map(a=>({name:a.name,code:a.code}))},f(e)):v.convertObjectToArcadeDictionary({type:"range",name:t.domain.name,dataType:w[t.field.type],min:t.domain.minValue,max:t.domain.maxValue},f(e)):null}function C(t){t.mode==="async"&&(t.functions.domain=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,2,3,e,a),m(n[0]))return p(b(n[0],y(n[1]),n[2]===void 0?void 0:n[2]),e);if(c(n[0]))return await n[0]._ensureLoaded(),p(l(y(n[1]),n[0],null,n[2]===void 0?void 0:n[2]),e);throw new d(e,u.InvalidParameter,a)})},t.functions.subtypes=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,1,1,e,a),m(n[0])){const r=T(n[0]);return r?v.convertObjectToArcadeDictionary(r,f(e)):null}if(c(n[0])){await n[0]._ensureLoaded();const r=n[0].subtypeMetaData();return r?v.convertObjectToArcadeDictionary(r,f(e)):null}throw new d(e,u.InvalidParameter,a)})},t.functions.domainname=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,2,4,e,a),m(n[0]))return A(n[0],y(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(c(n[0])){await n[0]._ensureLoaded();const r=l(y(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return g(r,n[2])}throw new d(e,u.InvalidParameter,a)})},t.signatures.push({name:"domainname",min:2,max:4}),t.functions.domaincode=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,2,4,e,a),m(n[0]))return x(n[0],y(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(c(n[0])){await n[0]._ensureLoaded();const r=l(y(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return F(r,n[2])}throw new d(e,u.InvalidParameter,a)})},t.signatures.push({name:"domaincode",min:2,max:4}),t.functions.text=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,1,2,e,a),c(n[0])){const r=V(n[1],"");if(r==="")return n[0].castToText();if(r.toLowerCase()==="schema")return n[0].convertToText("schema",i.abortSignal);if(r.toLowerCase()==="featureset")return n[0].convertToText("featureset",i.abortSignal);throw new d(e,u.InvalidParameter,a)}return j(n[0],n[1])})},t.functions.gdbversion=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,1,1,e,a),m(n[0]))return n[0].gdbVersion();if(c(n[0]))return(await n[0].load()).gdbVersion;throw new d(e,u.InvalidParameter,a)})},t.functions.schema=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,1,1,e,a),c(n[0]))return await n[0].load(),v.convertObjectToArcadeDictionary(n[0].schema(),f(e));if(m(n[0])){const r=D(n[0]);return r?v.convertObjectToArcadeDictionary(r,f(e)):null}throw new d(e,u.InvalidParameter,a)})})}export{C as registerFunctions};
