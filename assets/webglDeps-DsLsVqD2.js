import{o as l}from"./VertexArrayObject-CVr0UiVf.js";import{p as x,h as y,r as g,c as F}from"./VertexArrayObject-CVr0UiVf.js";import{t as j}from"./ProgramCache-BwmJnmcP.js";import{fF as O}from"./index-DvjtuTaf.js";import"./VertexAttributeLocations-C0N_iaLp.js";function p(o){let{options:e,value:t}=o;return typeof e[t]=="number"}function m(o){let e="";for(let t in o){let r=o[t];if(typeof r=="boolean")r&&(e+=`#define ${t}
`);else if(typeof r=="number")e+=`#define ${t} ${r.toFixed()}
`;else if(typeof r=="object")if(p(r)){let{value:n,options:f,namespace:a}=r,i=a?`${a}_`:"";for(let s in f)e+=`#define ${i}${s} ${f[s].toFixed()}
`;e+=`#define ${t} ${i}${n}
`}else{let n=r.options,f=0;for(let a in n)e+=`#define ${n[a]} ${(f++).toFixed()}
`;e+=`#define ${t} ${n[r.value]}
`}}return e}function d(o,e,t,r=""){return new l(o,r+e.vertexShader,r+e.fragmentShader,t)}export{x as BufferObject,l as DisposableProgram,y as FramebufferObject,j as ProgramCache,g as Renderbuffer,O as Texture,F as VertexArrayObject,d as createProgram,m as glslifyDefineMap};
//# sourceMappingURL=webglDeps-DsLsVqD2.js.map
