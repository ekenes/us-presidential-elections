import{aP as a,cc as f}from"./index-GOO0DjDp.js";import{c}from"./projectPointToVector-DcIbqPS4.js";function i(n,o,e,t){return{x:n,y:o,z:e,hasZ:e!=null,hasM:!1,spatialReference:t,type:"point"}}function x(n,o,e,t,r){return!(o==null||t==null||n.length<2)&&(l.x=n[0],l.y=n[1],l.z=n[2],l.spatialReference=o,c(l,e,t,r))}const l=i(0,0,0,a.WGS84);function M(n,o,e=0){const t=f(n,0,h);for(let r=0;r<4;r++)o[e+r]=Math.floor(256*m(t*s[r]))}function u(n,o=0){let e=0;for(let t=0;t<4;t++)e+=n[o+t]*p[t];return e}const s=[1,256,65536,16777216],p=[1/256,1/65536,1/16777216,1/4294967296],h=u(new Uint8ClampedArray([255,255,255,255]));function m(n){return n-Math.floor(n)}export{x as n,M as o};
