const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/libtess-asm-Ms1jkM9V.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/libtess-BtUK8J5T.js"])))=>i.map(i=>d[i]);
import{$ as bt,_ as vt,fq as Mt,fr as $,fs as D}from"./index-GOO0DjDp.js";import{R as Rt}from"./GeometryUtils-D9Z2K2oT.js";class At{constructor(e=0,x=0,_=0,m=0){this.x=e,this.y=x,this.width=_,this.height=m}get isEmpty(){return this.width<=0||this.height<=0}union(e){this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.width=Math.max(this.width,e.width),this.height=Math.max(this.height,e.height)}}const pt=128e3;let ut=null,mt=null;async function Ot(){return ut||(ut=Ut()),ut}async function Ut(){mt=await(bt("esri-csp-restrictions")?await vt(()=>import("./libtess-asm-Ms1jkM9V.js"),__vite__mapDeps([0,1])).then(e=>e.l):await vt(()=>import("./libtess-BtUK8J5T.js"),__vite__mapDeps([2,1])).then(e=>e.l)).default({locateFile:e=>Mt(`esri/core/libs/libtess/${e}`)})}function Pt(s,e){const x=Math.max(s.length,pt);return mt.triangulate(s,e,x)}function Vt(s,e){return s.x===e.x&&s.y===e.y}function kt(s){if(!s)return;const e=s.length;if(e<=1)return;let x=0;for(let _=1;_<e;_++)Vt(s[_],s[x])||++x===_||(s[x]=s[_]);s.length=x+1}function k(s,e){return s.x=e.y,s.y=-e.x,s}function M(s,e){return s.x=-e.y,s.y=e.x,s}function Tt(s,e){return s.x=e.x,s.y=e.y,s}function wt(s,e){return s.x=-e.x,s.y=-e.y,s}function ft(s){return Math.sqrt(s.x*s.x+s.y*s.y)}function Bt(s,e){return s.x*e.y-s.y*e.x}function gt(s,e){return s.x*e.x+s.y*e.y}function it(s,e,x,_){return s.x=e.x*x+e.y*_,s.y=e.x*_-e.y*x,s}class St{constructor(e,x,_){this._writeVertex=e,this._writeTriangle=x,this._canUseThinTessellation=_,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(e,x,_=this._canUseThinTessellation){kt(e),_&&x.halfWidth<Rt&&!x.offset?this._tessellateThin(e,x):this._tessellate(e,x)}_tessellateThin(e,x){if(e.length<2)return;const _=x.wrapDistance||65535;let m=x.initialDistance||0,I=!1,C=e[0].x,F=e[0].y;const B=e.length;for(let j=1;j<B;++j){I&&(I=!1,m=0);let W=e[j].x,X=e[j].y,b=W-C,f=X-F,T=Math.sqrt(b*b+f*f);if(b/=T,f/=T,m+T>_){I=!0;const t=(_-m)/T;T=_-m,W=(1-t)*C+t*W,X=(1-t)*F+t*X,--j}const h=this._writeVertex(C,F,0,0,b,f,f,-b,0,-1,m),y=this._writeVertex(C,F,0,0,b,f,-f,b,0,1,m);m+=T;const G=this._writeVertex(W,X,0,0,b,f,f,-b,0,-1,m),i=this._writeVertex(W,X,0,0,b,f,-f,b,0,1,m);this._writeTriangle(h,y,G),this._writeTriangle(y,G,i),C=W,F=X}}_tessellate(e,x){const _=e[0],m=e[e.length-1],I=Vt(_,m),C=I?3:2;if(e.length<C)return;const F=x.pixelCoordRatio,B=x.capType!=null?x.capType:$.BUTT,j=x.joinType!=null?x.joinType:D.MITER,W=x.miterLimit!=null?Math.min(x.miterLimit,4):2,X=x.roundLimit!=null?Math.min(x.roundLimit,1.05):1.05,b=x.halfWidth!=null?x.halfWidth:2,f=!!x.textured;let T,h,y,G=null;const i=this._prevNormal,t=this._nextNormal;let K=-1,q=-1;const n=this._joinNormal;let c,d;const xt=this._textureNormalLeft,rt=this._textureNormalRight,v=this._textureNormal;let u=-1,o=-1;const _t=x.wrapDistance||65535;let l=x.initialDistance||0;const Et=this._writeVertex,Nt=this._writeTriangle,w=(R,nt,H,V,L,A)=>{const O=Et(h,y,c,d,H,V,R,nt,L,A,l);return u>=0&&o>=0&&O>=0&&Nt(u,o,O),u=o,o=O,O};I&&(T=e[e.length-2],t.x=m.x-T.x,t.y=m.y-T.y,q=ft(t),t.x/=q,t.y/=q);let Y=!1;for(let R=0;R<e.length;++R){if(Y&&(Y=!1,l=0),T&&(i.x=-t.x,i.y=-t.y,K=q,l+K>_t&&(Y=!0)),Y){const r=(_t-l)/K;K=_t-l,T={x:(1-r)*T.x+r*e[R].x,y:(1-r)*T.y+r*e[R].y},--R}else T=e[R];h=T.x,y=T.y;const nt=R<=0&&!Y,H=R===e.length-1;if(nt||(l+=K),G=H?I?e[1]:null:e[R+1],G?(t.x=G.x-h,t.y=G.y-y,q=ft(t),t.x/=q,t.y/=q):(t.x=void 0,t.y=void 0),!I){if(nt){M(n,t),c=n.x,d=n.y,B===$.SQUARE&&(w(-t.y-t.x,t.x-t.y,t.x,t.y,0,-1),w(t.y-t.x,-t.x-t.y,t.x,t.y,0,1)),B===$.ROUND&&(w(-t.y-t.x,t.x-t.y,t.x,t.y,-1,-1),w(t.y-t.x,-t.x-t.y,t.x,t.y,-1,1)),B!==$.ROUND&&B!==$.BUTT||(w(-t.y,t.x,t.x,t.y,0,-1),w(t.y,-t.x,t.x,t.y,0,1));continue}if(H){k(n,i),c=n.x,d=n.y,B!==$.ROUND&&B!==$.BUTT||(w(i.y,-i.x,-i.x,-i.y,0,-1),w(-i.y,i.x,-i.x,-i.y,0,1)),B===$.SQUARE&&(w(i.y-i.x,-i.x-i.y,-i.x,-i.y,0,-1),w(-i.y-i.x,i.x-i.y,-i.x,-i.y,0,1)),B===$.ROUND&&(w(i.y-i.x,-i.x-i.y,-i.x,-i.y,1,-1),w(-i.y-i.x,i.x-i.y,-i.x,-i.y,1,1));continue}}let V,L,A=-Bt(i,t);if(Math.abs(A)<.01)gt(i,t)>0?(n.x=i.x,n.y=i.y,A=1,V=Number.MAX_VALUE,L=!0):(M(n,t),A=1,V=1,L=!1);else{n.x=(i.x+t.x)/A,n.y=(i.y+t.y)/A,V=ft(n);const r=(V-1)*b*F;L=V>4||r>K&&r>q}c=n.x,d=n.y;let O=j;switch(j){case D.BEVEL:V<1.05&&(O=D.MITER);break;case D.ROUND:V<X&&(O=D.MITER);break;case D.MITER:V>W&&(O=D.BEVEL)}switch(O){case D.MITER:if(w(n.x,n.y,-i.x,-i.y,0,-1),w(-n.x,-n.y,-i.x,-i.y,0,1),H)break;if(f){const r=Y?0:l;u=this._writeVertex(h,y,c,d,t.x,t.y,n.x,n.y,0,-1,r),o=this._writeVertex(h,y,c,d,t.x,t.y,-n.x,-n.y,0,1,r)}break;case D.BEVEL:{const r=A<0;let g,E,Q,p;if(r){const a=u;u=o,o=a,g=xt,E=rt}else g=rt,E=xt;if(L)Q=r?M(this._innerPrev,i):k(this._innerPrev,i),p=r?k(this._innerNext,t):M(this._innerNext,t);else{const a=r?wt(this._inner,n):Tt(this._inner,n);Q=a,p=a}const U=r?k(this._bevelStart,i):M(this._bevelStart,i);w(Q.x,Q.y,-i.x,-i.y,g.x,g.y);const yt=w(U.x,U.y,-i.x,-i.y,E.x,E.y);if(H)break;const P=r?M(this._bevelEnd,t):k(this._bevelEnd,t);if(L){const a=this._writeVertex(h,y,c,d,-i.x,-i.y,0,0,0,0,l);u=this._writeVertex(h,y,c,d,t.x,t.y,p.x,p.y,g.x,g.y,l),o=this._writeVertex(h,y,c,d,t.x,t.y,P.x,P.y,E.x,E.y,l),this._writeTriangle(yt,a,o)}else{if(f){const a=this._bevelMiddle;a.x=(U.x+P.x)/2,a.y=(U.y+P.y)/2,it(v,a,-i.x,-i.y),w(a.x,a.y,-i.x,-i.y,v.x,v.y),it(v,a,t.x,t.y),u=this._writeVertex(h,y,c,d,t.x,t.y,a.x,a.y,v.x,v.y,l),o=this._writeVertex(h,y,c,d,t.x,t.y,p.x,p.y,g.x,g.y,l)}else{const a=u;u=o,o=a}w(P.x,P.y,t.x,t.y,E.x,E.y)}if(r){const a=u;u=o,o=a}break}case D.ROUND:{const r=A<0;let g,E;if(r){const N=u;u=o,o=N,g=xt,E=rt}else g=rt,E=xt;const Q=r?wt(this._inner,n):Tt(this._inner,n);let p,U;L?(p=r?M(this._innerPrev,i):k(this._innerPrev,i),U=r?k(this._innerNext,t):M(this._innerNext,t)):(p=Q,U=Q);const yt=r?k(this._roundStart,i):M(this._roundStart,i),P=r?M(this._roundEnd,t):k(this._roundEnd,t),a=w(p.x,p.y,-i.x,-i.y,g.x,g.y),ht=w(yt.x,yt.y,-i.x,-i.y,E.x,E.y);if(H)break;const z=this._writeVertex(h,y,c,d,-i.x,-i.y,0,0,0,0,l);L||this._writeTriangle(u,o,z);const S=wt(this._outer,Q),J=this._writeVertex(h,y,c,d,t.x,t.y,P.x,P.y,E.x,E.y,l);let Z,tt;const ot=V>2;if(ot){let N;V!==Number.MAX_VALUE?(S.x/=V,S.y/=V,N=gt(i,S),N=(V*(N*N-1)+1)/N):N=-1,Z=r?k(this._startBreak,i):M(this._startBreak,i),Z.x+=i.x*N,Z.y+=i.y*N,tt=r?M(this._endBreak,t):k(this._endBreak,t),tt.x+=t.x*N,tt.y+=t.y*N}it(v,S,-i.x,-i.y);const lt=this._writeVertex(h,y,c,d,-i.x,-i.y,S.x,S.y,v.x,v.y,l);it(v,S,t.x,t.y);const ct=f?this._writeVertex(h,y,c,d,t.x,t.y,S.x,S.y,v.x,v.y,l):lt,dt=z,at=f?this._writeVertex(h,y,c,d,t.x,t.y,0,0,0,0,l):z;let et=-1,st=-1;if(ot&&(it(v,Z,-i.x,-i.y),et=this._writeVertex(h,y,c,d,-i.x,-i.y,Z.x,Z.y,v.x,v.y,l),it(v,tt,t.x,t.y),st=this._writeVertex(h,y,c,d,t.x,t.y,tt.x,tt.y,v.x,v.y,l)),f?ot?(this._writeTriangle(dt,ht,et),this._writeTriangle(dt,et,lt),this._writeTriangle(at,ct,st),this._writeTriangle(at,st,J)):(this._writeTriangle(dt,ht,lt),this._writeTriangle(at,ct,J)):ot?(this._writeTriangle(z,ht,et),this._writeTriangle(z,et,st),this._writeTriangle(z,st,J)):(this._writeTriangle(z,ht,lt),this._writeTriangle(z,ct,J)),L?(u=this._writeVertex(h,y,c,d,t.x,t.y,U.x,U.y,g.x,g.y,l),o=J):(u=f?this._writeVertex(h,y,c,d,t.x,t.y,U.x,U.y,g.x,g.y,l):a,this._writeTriangle(u,at,J),o=J),r){const N=u;u=o,o=N}break}}}}}export{Pt as a,St as c,Ot as i,At as t};