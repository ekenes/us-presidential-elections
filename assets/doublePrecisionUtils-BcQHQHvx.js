import{r as m,an as v}from"./index-DvjtuTaf.js";const g=()=>v.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let b=class{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){this._includedModules.get(e);return}this._includedModules.set(e,r),e(this.builder,r)}},M=class extends b{constructor(){super(...arguments),this.vertex=new f,this.fragment=new f,this.attributes=new E,this.varyings=new D,this.outputs=new d}get attributeNames(){return this.attributes.names}get builder(){return this}generate(e,r=!1){let t=this.attributes.generateSource(e),i=this.varyings.generateSource(e),s=e==="vertex"?this.vertex:this.fragment,a=s.uniforms.generateSource(),u=s.code.generateSource(),l=s.main.generateSource(r),p=this.debugName?`// ${this.debugName}
`:"",$=e==="vertex"?I:A,S=s.constants.generateSource(),_=this.outputs.generateSource(e);return`#version 300 es
${p}
${$}
${S.join(`
`)}
${a.join(`
`)}
${t.join(`
`)}
${i.join(`
`)}
${_.join(`
`)}
${u.join(`
`)}
${l.join(`
`)}`}generateBind(e){let r=new Map;this.vertex.uniforms.entries.forEach(s=>{let a=s.bind[0];a&&r.set(s.name,a)}),this.fragment.uniforms.entries.forEach(s=>{let a=s.bind[0];a&&r.set(s.name,a)});let t=Array.from(r.values()),i=t.length;return s=>{for(let a=0;a<i;++a)t[a](e,s)}}generateBindPass(e){let r=new Map;this.vertex.uniforms.entries.forEach(s=>{let a=s.bind[1];a&&r.set(s.name,a)}),this.fragment.uniforms.entries.forEach(s=>{let a=s.bind[1];a&&r.set(s.name,a)});let t=Array.from(r.values()),i=t.length;return(s,a)=>{for(let u=0;u<i;++u)t[u](e,a,s)}}generateBindDraw(e){let r=new Map;this.vertex.uniforms.entries.forEach(s=>{let a=s.bind[2];a&&r.set(s.name,a)}),this.fragment.uniforms.entries.forEach(s=>{let a=s.bind[2];a&&r.set(s.name,a)});let t=Array.from(r.values()),i=t.length;return(s,a,u)=>{for(let l=0;l<i;++l)t[l](e,u,s,a)}}};class T{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(let r of e)this._add(r);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e==null){g().error(`Trying to add null Uniform from ${Error().stack}.`);return}if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new m("shaderbuilder:duplicate-uniform",`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}generateSource(){return Array.from(this._entries.values()).map(({name:e,arraySize:r,type:t})=>r==null?`uniform ${t} ${e};`:`uniform ${t} ${e}[${r}];`)}get entries(){return Array.from(this._entries.values())}}class w{constructor(){this._entries=new Map}add(e,r){if(this._entries.has(e))throw new m("shaderbuilder:duplicate-input",`Duplicate input for ${e}`);this._entries.set(e,r)}get(e){let r=this._entries.get(e);if(r==null)throw new m("shaderbuilder:input-resolver-error",`No resolver for input ${e} found.`);return r()}}class y{constructor(e){this._stage=e,this._bodies=[]}add(e){return this._bodies.push(e),this._stage}generateSource(e){if(this._bodies.length>0){let r=[];for(let t of this._bodies)typeof t=="string"?r.push(t):r.push(...t());return[`void main() {
 ${r.join(`
`)||""} 
}`]}if(e)throw new m("shaderbuilder:missing-main","Shader does not contain main function body.");return[]}}class F{constructor(e){this._stage=e,this._entries=[]}add(e){return this._entries.push(e),this._stage}generateSource(){let e=[];for(let r of this._entries)typeof r=="string"?e.push(r):e.push(...r());return e}}class f extends b{constructor(){super(...arguments),this.uniforms=new T(this),this.main=new y(this),this.code=new F(this),this.constants=new n(this),this.inputs=new w}get builder(){return this}}class E{constructor(){this._entries=[]}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}get names(){return this._entries.map(([e])=>e)}}class D{constructor(){this._entries=new Map}add(e,r,t){if(this._entries.has(e)){g().warn(`Ignoring duplicate varying ${r} ${e}`);return}this._entries.set(e,{type:r,flat:(t==null?void 0:t.flat)??!1,invariant:(t==null?void 0:t.invariant)??!1})}generateSource(e){let r=[];return this._entries.forEach((t,i)=>r.push((t.invariant&&e==="vertex"?"invariant ":"")+(t.flat?"flat ":"")+(e==="vertex"?"out":"in")+` ${t.type} ${i};`)),r}}const c=class c{constructor(){this._entries=new Map}add(e,r,t=0){let i=this._entries.get(t);if((i==null?void 0:i.name)===e&&(i==null?void 0:i.type)===r){g().warn(`Fragment shader output location ${t} occupied`);return}this._entries.set(t,{name:e,type:r})}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:c.DEFAULT_NAME,type:c.DEFAULT_TYPE});let r=[];return this._entries.forEach((t,i)=>r.push(`layout(location = ${i}) out ${t.type} ${t.name};`)),r}};c.DEFAULT_TYPE="vec4",c.DEFAULT_NAME="fragColor";let d=c;class n{constructor(e){this._stage=e,this._entries=new Set}add(e,r,t){let i="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":i=n._numberToFloatStr(t);break;case"int":i=n._numberToIntStr(t);break;case"uint":i=n._numberToUintStr(t);break;case"bool":i=t.toString();break;case"vec2":i=`vec2(${n._numberToFloatStr(t[0])},                            ${n._numberToFloatStr(t[1])})`;break;case"vec3":i=`vec3(${n._numberToFloatStr(t[0])},                            ${n._numberToFloatStr(t[1])},                            ${n._numberToFloatStr(t[2])})`;break;case"vec4":i=`vec4(${n._numberToFloatStr(t[0])},                            ${n._numberToFloatStr(t[1])},                            ${n._numberToFloatStr(t[2])},                            ${n._numberToFloatStr(t[3])})`;break;case"ivec2":i=`ivec2(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])})`;break;case"ivec3":i=`ivec3(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])},                             ${n._numberToIntStr(t[2])})`;break;case"ivec4":i=`ivec4(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])},                             ${n._numberToIntStr(t[2])},                             ${n._numberToIntStr(t[3])})`;break;case"uvec2":i=`uvec2(${n._numberToUintStr(t[0])},                             ${n._numberToUintStr(t[1])})`;break;case"uvec3":i=`uvec3(${n._numberToUintStr(t[0])},                             ${n._numberToUintStr(t[1])},                             ${n._numberToUintStr(t[2])})`;break;case"uvec4":i=`uvec4(${n._numberToUintStr(t[0])},                             ${n._numberToUintStr(t[1])},                             ${n._numberToUintStr(t[2])},                             ${n._numberToUintStr(t[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${r}(${Array.prototype.map.call(t,s=>n._numberToFloatStr(s)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${i};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToUintStr(e){return`${e.toFixed(0)}u`}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const A=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp int;
  precision highp sampler2D;
  precision highp usampler2D;
  precision highp sampler2DArray;
  precision highp sampler2DShadow;
#else
  precision mediump float;
  precision mediump int;
  precision mediump sampler2D;
  precision mediump usampler2D;
  precision mediump sampler2DArray;
  precision mediump sampler2DShadow;
#endif`,I=`precision highp float;
 precision highp int;
 precision highp sampler2D;
 precision highp usampler2D;
 precision highp sampler2DArray;
 precision highp sampler2DShadow;


 invariant gl_Position;
 `;function N(o,e,r){for(let t=0;t<r;++t)e[t*2]=o[t],e[t*2+1]=o[t]-e[t*2]}function j(o,e){let r=o.length;for(let t=0;t<r;++t)h[0]=o[t],e[t]=h[0];return e}function R(o,e){let r=o.length;for(let t=0;t<r;++t)h[0]=o[t],h[1]=o[t]-h[0],e[t]=h[1];return e}const h=new Float32Array(2);export{F as c,N as e,M as i,j as n,R as r};
//# sourceMappingURL=doublePrecisionUtils-BcQHQHvx.js.map
