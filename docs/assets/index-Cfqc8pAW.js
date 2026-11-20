import"./navigation-eIeo_ieG.js";import{U as Dt,c as ko,N as Lt,S as Ia,C as at,F as Na,V as ke,R as Go,e as rt,w as tt,a as St,l as or,b as Oa,M as gn,W as sr,d as Ut,f as lt,L as un,H as qt,D as Ft,B as bt,g as Dn,h as si,p as Ho,i as En,j as Rn,k as zo,m as Tt,O as Hi,n as it,E as Vo,o as Qe,P as Kn,A as Wo,q as pi,r as Bt,s as dn,t as vn,u as Ln,v as nn,x as ei,y as Xo,z as Yo,G as Un,I as xt,J as Ui,K as ln,Q as lr,T as Ko,X as qo,Y as bn,Z as Zo,_ as jo,$ as $o,a0 as Qo,a1 as Jo,a2 as es,a3 as ts,a4 as ns,a5 as is,a6 as rs,a7 as as,a8 as os,a9 as ss,aa as ls,ab as cs,ac as fs,ad as us,ae as mi,af as Hn,ag as ds,ah as kt,ai as hs,aj as ps,ak as zi,al as ms,am as Vi,an as _s,ao as gs,ap as vs,aq as Fa,ar as qe,as as Ss,at as Es,au as Ht,av as yn,aw as qn,ax as xs,ay as Gt,az as An,aA as Yt,aB as bs,aC as Ba,aD as ka,aE as Ga,aF as ti,aG as Ha,aH as za,aI as Va,aJ as Wi,aK as Ms,aL as Ts,aM as As,aN as ws,aO as Wa,aP as Rs,aQ as ys,aR as Cs,aS as _i,aT as gi,aU as vi,aV as Si,aW as cr,aX as fr,aY as ur,aZ as dr,a_ as hr,a$ as pr,b0 as mr,b1 as _r,b2 as gr,b3 as vr,b4 as Sr,b5 as Er,b6 as xr,b7 as br,b8 as Mr,b9 as Tr,ba as Ar,bb as wr,bc as Rr,bd as yr,be as Cr,bf as Pr,bg as Dr,bh as Lr,bi as Ur,bj as Ir,bk as Nr,bl as Or,bm as Fr,bn as Br,bo as kr,bp as Gr,bq as Ps,br as Ds,bs as Ls,bt as Us,bu as Is,bv as Ns,bw as Os,bx as Fs,by as Hr,bz as Bs,bA as Zn,bB as ks,bC as zr,bD as Vr,bE as Wr,bF as Xa,bG as Gs,bH as li,bI as Hs,bJ as zs,bK as Ya,bL as Xi,bM as Ii,bN as ci,bO as Ka,bP as Vs,bQ as qa,bR as Za,bS as ja,bT as $a,bU as Qa,bV as Ja,bW as eo,bX as Xr,bY as to,bZ as Ei,b_ as xi,b$ as Ws,c0 as Xs,c1 as Yr,c2 as vt,c3 as Ys,c4 as In,c5 as Sn,c6 as ni,c7 as Ks,c8 as qs,c9 as Zs,ca as js,cb as $s,cc as Qs,cd as Js,ce as el,cf as tl,cg as no,ch as io,ci as Nn,cj as Mt,ck as nl,cl as pn,cm as hn,cn as Ni,co as il,cp as rl,cq as al,cr as ol}from"./three-core-BALzDnCY.js";const sl="modulepreload",ll=function(e){return"/Plushify/"+e},Kr={},Wt=function(n,t,i){let l=Promise.resolve();if(t&&t.length>0){let m=function(v){return Promise.all(v.map(b=>Promise.resolve(b).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=a?.nonce||a?.getAttribute("nonce");l=m(t.map(v=>{if(v=ll(v),v in Kr)return;Kr[v]=!0;const b=v.endsWith(".css"),E=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${E}`))return;const d=document.createElement("link");if(d.rel=b?"stylesheet":sl,b||(d.as="script"),d.crossOrigin="",d.href=v,s&&d.setAttribute("nonce",s),document.head.appendChild(d),b)return new Promise((f,x)=>{d.addEventListener("load",f),d.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${v}`)))})}))}function r(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return l.then(a=>{for(const s of a||[])s.status==="rejected"&&r(s.reason);return n().catch(r)})},Xt=document.getElementById("ambient"),_t=Xt.getContext("2d"),ro=matchMedia("(prefers-reduced-motion: reduce)"),cl=[[.45,.104,16],[.55,.162,33],[.659,.071,28],[.79,.113,12],[.95,.256,25],[.031,.31,17],[.962,.608,32],[.039,.735,21],[.82,.808,16]],fl=[[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1],[-1,1,-1],[1,1,-1],[1,1,1],[-1,1,1]],ul=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]],qr=Array.from({length:57},()=>({x:Math.random(),y:Math.random(),phase:Math.random()*Math.PI*2,size:1+(Math.random()>.6?1:0),speed:5+Math.random()*11}));let cn=0,Zr=-1/0,ao=!1,Ct;function dl(e,n,t,i,l){const r=Math.sin(i),a=Math.cos(i),s=fl.map(([m,v,b])=>[e+(m*a-b*r)*t,n+(v*.77+(m*r+b*a)*.44)*t]);_t.beginPath(),_t.moveTo(...s[0]);for(const m of[1,2,3])_t.lineTo(...s[m]);_t.closePath(),_t.fillStyle=`rgba(216, 119, 87, ${l*.28})`,_t.fill(),_t.beginPath();for(const[m,v]of ul)_t.moveTo(...s[m]),_t.lineTo(...s[v]);_t.strokeStyle=`rgba(239, 157, 129, ${l})`,_t.stroke()}function hl(e){const{width:n,height:t}=Xt,i=e/1e3,l=n<650;_t.clearRect(0,0,n,t),cl.forEach(([a,s,m],v)=>{const b=a*n,E=s*t+Math.sin(i*.48+v)*11,d=Ct?Math.max(0,1-Math.hypot(b-Ct.x,E-Ct.y)/190):0;dl(b,E,m*(l?.64:1),i*.14+v*.7,.16+d*.27)});const r=l?32:qr.length;for(let a=0;a<r;a+=1){const s=qr[a];let m=s.x*n+Math.sin(i*.48+s.phase)*12,v=t-(s.y*t+i*s.speed)%t;const b=Ct?Math.hypot(m-Ct.x,v-Ct.y):1/0,E=Math.max(0,1-b/145);E&&b>0&&(m+=(m-Ct.x)/b*E*24,v+=(v-Ct.y)/b*E*24);const d=.17+.18*(1+Math.sin(i*2+s.phase))+E*.37;_t.fillStyle=`rgba(255, 184, 137, ${d})`,_t.fillRect(Math.round(m),Math.round(v),s.size,s.size)}}function pl(e){cn=0,e-Zr>=31&&(hl(e),Zr=e),jn()}function jn(){const e=ao&&!document.hidden&&!ro.matches;e&&!cn&&(cn=requestAnimationFrame(pl)),!e&&cn&&(cancelAnimationFrame(cn),cn=0)}_t&&(new ResizeObserver(()=>{Xt.width=Xt.clientWidth,Xt.height=Xt.clientHeight}).observe(Xt),new IntersectionObserver(([e])=>{ao=e.isIntersecting,jn()}).observe(Xt),document.addEventListener("visibilitychange",jn),ro.addEventListener("change",jn),document.addEventListener("pointermove",e=>{e.pointerType==="mouse"&&(Ct={x:e.pageX,y:e.pageY})},{passive:!0}),document.documentElement.addEventListener("pointerleave",()=>{Ct=void 0}));const ml="/Plushify/assets/pack-source-BnQZs1LU.zip",_l=`{\r
	"format_version": "26.3",\r
	"credit": "Made with Blockbench",\r
	"texture_size": [64, 64],\r
	"textures": {\r
		"1": "item/skin"\r
	},\r
	"elements": [\r
		{\r
			"name": "Left Leg",\r
			"from": [3.89778, 0, 5.77646],\r
			"to": [5.89778, 2, 9.77646],\r
			"rotation": {"angle": 15, "axis": "y", "origin": [1, 0, 5]},\r
			"faces": {\r
				"north": {"uv": [6, 12, 7, 13], "rotation": 180, "texture": "#1"},\r
				"east": {"uv": [4, 13, 5, 16], "rotation": 270, "texture": "#1"},\r
				"south": {"uv": [5, 12, 6, 13], "rotation": 180, "texture": "#1"},\r
				"west": {"uv": [6, 13, 7, 16], "rotation": 90, "texture": "#1"},\r
				"up": {"uv": [5, 13, 6, 16], "rotation": 180, "texture": "#1"},\r
				"down": {"uv": [8, 13, 7, 16], "texture": "#1"}\r
			}\r
		},\r
		{\r
			"name": "Left Leg 2",\r
			"from": [3.79778, -0.1, 5.67646],\r
			"to": [5.99778, 2.1, 9.87646],\r
			"rotation": {"angle": 15, "axis": "y", "origin": [1, 0, 5]},\r
			"faces": {\r
				"north": {"uv": [2, 12, 3, 13], "rotation": 180, "texture": "#1"},\r
				"east": {"uv": [0, 13, 1, 16], "rotation": 270, "texture": "#1"},\r
				"south": {"uv": [1, 12, 2, 13], "rotation": 180, "texture": "#1"},\r
				"west": {"uv": [2, 13, 3, 16], "rotation": 90, "texture": "#1"},\r
				"up": {"uv": [1, 13, 2, 16], "rotation": 180, "texture": "#1"},\r
				"down": {"uv": [4, 13, 3, 16], "texture": "#1"}\r
			}\r
		},\r
		{\r
			"name": "Right Leg",\r
			"from": [8.72741, 0, 2.92945],\r
			"to": [10.72741, 2, 6.92945],\r
			"rotation": {"angle": -15, "axis": "y", "origin": [1, 0, 5]},\r
			"faces": {\r
				"north": {"uv": [2, 4, 3, 5], "rotation": 180, "texture": "#1"},\r
				"east": {"uv": [0, 5, 1, 8], "rotation": 270, "texture": "#1"},\r
				"south": {"uv": [1, 4, 2, 5], "rotation": 180, "texture": "#1"},\r
				"west": {"uv": [2, 5, 3, 8], "rotation": 90, "texture": "#1"},\r
				"up": {"uv": [1, 5, 2, 8], "rotation": 180, "texture": "#1"},\r
				"down": {"uv": [3, 5, 4, 8], "texture": "#1"}\r
			}\r
		},\r
		{\r
			"name": "Right Leg 2",\r
			"from": [8.62741, -0.1, 2.72945],\r
			"to": [10.82741, 2.1, 7.02945],\r
			"rotation": {"angle": -15, "axis": "y", "origin": [1, 0, 5]},\r
			"faces": {\r
				"north": {"uv": [2, 8, 3, 9], "rotation": 180, "texture": "#1"},\r
				"east": {"uv": [0, 9, 1, 12], "rotation": 270, "texture": "#1"},\r
				"south": {"uv": [1, 8, 2, 9], "rotation": 180, "texture": "#1"},\r
				"west": {"uv": [2, 9, 3, 12], "rotation": 90, "texture": "#1"},\r
				"up": {"uv": [1, 9, 2, 12], "rotation": 180, "texture": "#1"},\r
				"down": {"uv": [3, 9, 4, 12], "texture": "#1"}\r
			}\r
		},\r
		{\r
			"name": "Torso",\r
			"from": [5.5, 0, 10.7],\r
			"to": [9.5, 2, 15.7],\r
			"rotation": {"x": -90, "y": 0, "z": 0, "origin": [1, 0, 10]},\r
			"faces": {\r
				"north": {"uv": [7, 4, 9, 5], "texture": "#1"},\r
				"east": {"uv": [4, 5, 5, 8], "rotation": 270, "texture": "#1"},\r
				"south": {"uv": [5, 4, 7, 5], "rotation": 180, "texture": "#1"},\r
				"west": {"uv": [7, 5, 8, 8], "rotation": 90, "texture": "#1"},\r
				"up": {"uv": [5, 5, 7, 8], "rotation": 180, "texture": "#1"},\r
				"down": {"uv": [8, 5, 10, 8], "texture": "#1"}\r
			}\r
		},\r
		{\r
			"name": "Torso 2",\r
			"from": [5.3, -0.2, 10.6],\r
			"to": [9.8, 2.1, 15.8],\r
			"rotation": {"x": -90, "y": 0, "z": 0, "origin": [1, 0, 10]},\r
			"faces": {\r
				"north": {"uv": [7, 8, 9, 9], "texture": "#1"},\r
				"east": {"uv": [4, 9, 5, 12], "rotation": 270, "texture": "#1"},\r
				"south": {"uv": [5, 8, 7, 9], "rotation": 180, "texture": "#1"},\r
				"west": {"uv": [7, 9, 8, 12], "rotation": 90, "texture": "#1"},\r
				"up": {"uv": [5, 9, 7, 12], "rotation": 180, "texture": "#1"},\r
				"down": {"uv": [8, 9, 10, 12], "texture": "#1"}\r
			}\r
		},\r
		{\r
			"name": "Head",\r
			"from": [5.48904, 0.3139, 16.7],\r
			"to": [9.48904, 4.3139, 20.7],\r
			"rotation": {"x": -90, "y": -4, "z": 0, "origin": [1, 0, 11]},\r
			"faces": {\r
				"north": {"uv": [4, 0, 6, 2], "rotation": 180, "texture": "#1"},\r
				"east": {"uv": [0, 2, 2, 4], "rotation": 270, "texture": "#1"},\r
				"south": {"uv": [2, 0, 4, 2], "rotation": 180, "texture": "#1"},\r
				"west": {"uv": [4, 2, 6, 4], "rotation": 90, "texture": "#1"},\r
				"up": {"uv": [2, 2, 4, 4], "rotation": 180, "texture": "#1"},\r
				"down": {"uv": [6, 2, 8, 4], "texture": "#1"}\r
			}\r
		},\r
		{\r
			"name": "Head 2",\r
			"from": [5.28904, 0.3139, 16.6],\r
			"to": [9.68904, 4.5139, 20.9],\r
			"rotation": {"x": -90, "y": -4, "z": 0, "origin": [1, 0, 11]},\r
			"faces": {\r
				"north": {"uv": [12, 0, 14, 2], "rotation": 180, "texture": "#1"},\r
				"east": {"uv": [8, 2, 10, 4], "rotation": 270, "texture": "#1"},\r
				"south": {"uv": [10, 0, 12, 2], "rotation": 180, "texture": "#1"},\r
				"west": {"uv": [12, 2, 14, 4], "rotation": 90, "texture": "#1"},\r
				"up": {"uv": [10, 2, 12, 4], "rotation": 180, "texture": "#1"},\r
				"down": {"uv": [14, 2, 16, 4], "texture": "#1"}\r
			}\r
		},\r
		{\r
			"name": "Right Arm",\r
			"from": [0.94543, 8.76658, 9.79119],\r
			"to": [2.94543, 10.76658, 12.79119],\r
			"rotation": {"x": 0, "y": -87, "z": -87, "origin": [1, 0, 7.75]},\r
			"faces": {\r
				"north": {"uv": [12, 4, 13, 5], "rotation": 270, "texture": "#1"},\r
				"east": {"uv": [11, 5, 12, 8], "rotation": 270, "texture": "#1"},\r
				"south": {"uv": [11, 4, 12, 5], "texture": "#1"},\r
				"west": {"uv": [13, 5, 14, 8], "rotation": 90, "texture": "#1"},\r
				"up": {"uv": [10, 5, 11, 8], "rotation": 180, "texture": "#1"},\r
				"down": {"uv": [12, 5, 13, 8], "texture": "#1"}\r
			}\r
		},\r
		{\r
			"name": "Right Arm 2",\r
			"from": [0.74543, 8.56658, 9.69119],\r
			"to": [3.04543, 10.96658, 12.99119],\r
			"rotation": {"x": 0, "y": -87, "z": -87, "origin": [1, 0, 7.75]},\r
			"faces": {\r
				"north": {"uv": [12, 8, 13, 9], "rotation": 270, "texture": "#1"},\r
				"east": {"uv": [11, 9, 12, 12], "rotation": 270, "texture": "#1"},\r
				"south": {"uv": [11, 8, 12, 9], "texture": "#1"},\r
				"west": {"uv": [13, 9, 14, 12], "rotation": 90, "texture": "#1"},\r
				"up": {"uv": [10, 9, 11, 12], "rotation": 180, "texture": "#1"},\r
				"down": {"uv": [12, 9, 13, 12], "texture": "#1"}\r
			}\r
		},\r
		{\r
			"name": "Left Arm",\r
			"from": [1.2156, -4.3321, 11.79546],\r
			"to": [3.2156, -2.3321, 14.79546],\r
			"rotation": {"x": 7.32303, "y": 76.96226, "z": 94.43697, "origin": [1, 0, 9.3]},\r
			"faces": {\r
				"north": {"uv": [10, 12, 11, 13], "rotation": 90, "texture": "#1"},\r
				"east": {"uv": [9, 13, 10, 16], "rotation": 270, "texture": "#1"},\r
				"south": {"uv": [9, 12, 10, 13], "rotation": 270, "texture": "#1"},\r
				"west": {"uv": [11, 13, 12, 16], "rotation": 90, "texture": "#1"},\r
				"up": {"uv": [10, 13, 11, 16], "rotation": 180, "texture": "#1"},\r
				"down": {"uv": [8, 13, 9, 16], "texture": "#1"}\r
			}\r
		},\r
		{\r
			"name": "Left Arm 2",\r
			"from": [1.1156, -4.5321, 11.59546],\r
			"to": [3.4156, -2.1321, 14.89546],\r
			"rotation": {"x": 7.32303, "y": 76.96226, "z": 94.43697, "origin": [1, 0, 9.3]},\r
			"faces": {\r
				"north": {"uv": [14, 12, 15, 13], "rotation": 90, "texture": "#1"},\r
				"east": {"uv": [13, 13, 14, 16], "rotation": 270, "texture": "#1"},\r
				"south": {"uv": [13, 12, 14, 13], "rotation": 270, "texture": "#1"},\r
				"west": {"uv": [15, 13, 16, 16], "rotation": 90, "texture": "#1"},\r
				"up": {"uv": [14, 13, 15, 16], "rotation": 180, "texture": "#1"},\r
				"down": {"uv": [12, 13, 13, 16], "texture": "#1"}\r
			}\r
		}\r
	],\r
	"display": {\r
		"thirdperson_righthand": {\r
			"rotation": [0, 160, 0],\r
			"translation": [0, 4, 0],\r
			"scale": [0.5, 0.5, 0.5]\r
		},\r
		"thirdperson_lefthand": {\r
			"rotation": [0, 160, 0],\r
			"translation": [0, 4, 0],\r
			"scale": [0.5, 0.5, 0.5]\r
		},\r
		"firstperson_righthand": {\r
			"rotation": [-12, 144, 0],\r
			"translation": [0.5, 3.5, 1.25],\r
			"scale": [0.4, 0.4, 0.4]\r
		},\r
		"firstperson_lefthand": {\r
			"rotation": [-12, 144, 0],\r
			"translation": [0.5, 3.5, 1.25],\r
			"scale": [0.4, 0.4, 0.4]\r
		},\r
		"ground": {\r
			"translation": [0, 5, 0],\r
			"scale": [0.7, 0.7, 0.7]\r
		},\r
		"gui": {\r
			"rotation": [7, -180, 4],\r
			"translation": [0, 3.5, 0],\r
			"scale": [1.2, 1.2, 1.2]\r
		},\r
		"head": {\r
			"translation": [0, 14.25, 0]\r
		},\r
		"fixed": {\r
			"translation": [0, 3.5, -1]\r
		},\r
		"on_shelf": {\r
			"rotation": [0, -180, 0],\r
			"translation": [0, 0, -2],\r
			"scale": [1.2, 1.2, 1.2]\r
		}\r
	}\r
}`;function oo(){let e=null,n=!1,t=null,i=null;function l(r,a){t(r,a),i=e.requestAnimationFrame(l)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(l),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function gl(e){const n=new WeakMap;function t(s,m){const v=s.array,b=s.usage,E=v.byteLength,d=e.createBuffer();e.bindBuffer(m,d),e.bufferData(m,v,b),s.onUploadCallback();let f;if(v instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&v instanceof Float16Array)f=e.HALF_FLOAT;else if(v instanceof Uint16Array)s.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(v instanceof Int16Array)f=e.SHORT;else if(v instanceof Uint32Array)f=e.UNSIGNED_INT;else if(v instanceof Int32Array)f=e.INT;else if(v instanceof Int8Array)f=e.BYTE;else if(v instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:d,type:f,bytesPerElement:v.BYTES_PER_ELEMENT,version:s.version,size:E}}function i(s,m,v){const b=m.array,E=m.updateRanges;if(e.bindBuffer(v,s),E.length===0)e.bufferSubData(v,0,b);else{E.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<E.length;f++){const x=E[d],g=E[f];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++d,E[d]=g)}E.length=d+1;for(let f=0,x=E.length;f<x;f++){const g=E[f];e.bufferSubData(v,g.start*b.BYTES_PER_ELEMENT,b,g.start,g.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(s){return s.isInterleavedBufferAttribute&&(s=s.data),n.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);const m=n.get(s);m&&(e.deleteBuffer(m.buffer),n.delete(s))}function a(s,m){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const b=n.get(s);(!b||b.version<s.version)&&n.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const v=n.get(s);if(v===void 0)n.set(s,t(s,m));else if(v.version<s.version){if(v.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(v.buffer,s,m),v.version=s.version}}return{get:l,remove:r,update:a}}var vl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,El=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ml=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Al=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wl=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ll=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ul=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Il=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ol=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Hl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vl=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ql="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$l=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ql=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ec=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ic=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ac=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_c=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gc=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sc=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ec=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ac=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uc=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ic=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Oc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Kc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$c=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,af=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,df=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Af=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Df=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ff=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:vl,alphahash_pars_fragment:Sl,alphamap_fragment:El,alphamap_pars_fragment:xl,alphatest_fragment:bl,alphatest_pars_fragment:Ml,aomap_fragment:Tl,aomap_pars_fragment:Al,batching_pars_vertex:wl,batching_vertex:Rl,begin_vertex:yl,beginnormal_vertex:Cl,bsdfs:Pl,iridescence_fragment:Dl,bumpmap_pars_fragment:Ll,clipping_planes_fragment:Ul,clipping_planes_pars_fragment:Il,clipping_planes_pars_vertex:Nl,clipping_planes_vertex:Ol,color_fragment:Fl,color_pars_fragment:Bl,color_pars_vertex:kl,color_vertex:Gl,common:Hl,cube_uv_reflection_fragment:zl,defaultnormal_vertex:Vl,displacementmap_pars_vertex:Wl,displacementmap_vertex:Xl,emissivemap_fragment:Yl,emissivemap_pars_fragment:Kl,colorspace_fragment:ql,colorspace_pars_fragment:Zl,envmap_fragment:jl,envmap_common_pars_fragment:$l,envmap_pars_fragment:Ql,envmap_pars_vertex:Jl,envmap_physical_pars_fragment:fc,envmap_vertex:ec,fog_vertex:tc,fog_pars_vertex:nc,fog_fragment:ic,fog_pars_fragment:rc,gradientmap_pars_fragment:ac,lightmap_pars_fragment:oc,lights_lambert_fragment:sc,lights_lambert_pars_fragment:lc,lights_pars_begin:cc,lights_toon_fragment:uc,lights_toon_pars_fragment:dc,lights_phong_fragment:hc,lights_phong_pars_fragment:pc,lights_physical_fragment:mc,lights_physical_pars_fragment:_c,lights_fragment_begin:gc,lights_fragment_maps:vc,lights_fragment_end:Sc,logdepthbuf_fragment:Ec,logdepthbuf_pars_fragment:xc,logdepthbuf_pars_vertex:bc,logdepthbuf_vertex:Mc,map_fragment:Tc,map_pars_fragment:Ac,map_particle_fragment:wc,map_particle_pars_fragment:Rc,metalnessmap_fragment:yc,metalnessmap_pars_fragment:Cc,morphinstance_vertex:Pc,morphcolor_vertex:Dc,morphnormal_vertex:Lc,morphtarget_pars_vertex:Uc,morphtarget_vertex:Ic,normal_fragment_begin:Nc,normal_fragment_maps:Oc,normal_pars_fragment:Fc,normal_pars_vertex:Bc,normal_vertex:kc,normalmap_pars_fragment:Gc,clearcoat_normal_fragment_begin:Hc,clearcoat_normal_fragment_maps:zc,clearcoat_pars_fragment:Vc,iridescence_pars_fragment:Wc,opaque_fragment:Xc,packing:Yc,premultiplied_alpha_fragment:Kc,project_vertex:qc,dithering_fragment:Zc,dithering_pars_fragment:jc,roughnessmap_fragment:$c,roughnessmap_pars_fragment:Qc,shadowmap_pars_fragment:Jc,shadowmap_pars_vertex:ef,shadowmap_vertex:tf,shadowmask_pars_fragment:nf,skinbase_vertex:rf,skinning_pars_vertex:af,skinning_vertex:of,skinnormal_vertex:sf,specularmap_fragment:lf,specularmap_pars_fragment:cf,tonemapping_fragment:ff,tonemapping_pars_fragment:uf,transmission_fragment:df,transmission_pars_fragment:hf,uv_pars_fragment:pf,uv_pars_vertex:mf,uv_vertex:_f,worldpos_vertex:gf,background_vert:vf,background_frag:Sf,backgroundCube_vert:Ef,backgroundCube_frag:xf,cube_vert:bf,cube_frag:Mf,depth_vert:Tf,depth_frag:Af,distance_vert:wf,distance_frag:Rf,equirect_vert:yf,equirect_frag:Cf,linedashed_vert:Pf,linedashed_frag:Df,meshbasic_vert:Lf,meshbasic_frag:Uf,meshlambert_vert:If,meshlambert_frag:Nf,meshmatcap_vert:Of,meshmatcap_frag:Ff,meshnormal_vert:Bf,meshnormal_frag:kf,meshphong_vert:Gf,meshphong_frag:Hf,meshphysical_vert:zf,meshphysical_frag:Vf,meshtoon_vert:Wf,meshtoon_frag:Xf,points_vert:Yf,points_frag:Kf,shadow_vert:qf,shadow_frag:Zf,sprite_vert:jf,sprite_frag:$f},be={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Pt={basic:{uniforms:vt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:vt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:vt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:vt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:vt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new at(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:vt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:vt([be.points,be.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:vt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:vt([be.common,be.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:vt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:vt([be.sprite,be.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:vt([be.common,be.displacementmap,{referencePosition:{value:new ke},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:vt([be.lights,be.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Pt.physical={uniforms:vt([Pt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const zn={r:0,b:0,g:0},$t=new ci,Qf=new gn;function Jf(e,n,t,i,l,r){const a=new at(0);let s=l===!0?0:1,m,v,b=null,E=0,d=null;function f(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const w=S.backgroundBlurriness>0;T=n.get(T,w)}return T}function x(S){let T=!1;const w=f(S);w===null?c(a,s):w&&w.isColor&&(c(w,1),T=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(e.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(S,T){const w=f(T);w&&(w.isCubeTexture||w.mapping===li)?(v===void 0&&(v=new Tt(new Xi(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Ii(Pt.backgroundCube.uniforms),vertexShader:Pt.backgroundCube.vertexShader,fragmentShader:Pt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(P,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(v)),$t.copy(T.backgroundRotation),$t.x*=-1,$t.y*=-1,$t.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&($t.y*=-1,$t.z*=-1),v.material.uniforms.envMap.value=w,v.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Qf.makeRotationFromEuler($t)),v.material.toneMapped=lt.getTransfer(w.colorSpace)!==it,(b!==w||E!==w.version||d!==e.toneMapping)&&(v.material.needsUpdate=!0,b=w,E=w.version,d=e.toneMapping),v.layers.enableAll(),S.unshift(v,v.geometry,v.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new Tt(new Wi(2,2),new Ht({name:"BackgroundMaterial",uniforms:Ii(Pt.background.uniforms),vertexShader:Pt.background.vertexShader,fragmentShader:Pt.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,m.material.toneMapped=lt.getTransfer(w.colorSpace)!==it,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(b!==w||E!==w.version||d!==e.toneMapping)&&(m.material.needsUpdate=!0,b=w,E=w.version,d=e.toneMapping),m.layers.enableAll(),S.unshift(m,m.geometry,m.material,0,0,null))}function c(S,T){S.getRGB(zn,Ya(e)),t.buffers.color.setClear(zn.r,zn.g,zn.b,T,r)}function o(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),s=T,c(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(S){s=S,c(a,s)},render:x,addToRenderList:g,dispose:o}}function eu(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},l=d(null);let r=l,a=!1;function s(F,y,O,u,B){let V=!1;const N=E(F,u,O,y);r!==N&&(r=N,v(r.object)),V=f(F,u,O,B),V&&x(F,u,O,B),B!==null&&n.update(B,e.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,w(F,y,O,u),B!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(B).buffer))}function m(){return e.createVertexArray()}function v(F){return e.bindVertexArray(F)}function b(F){return e.deleteVertexArray(F)}function E(F,y,O,u){const B=u.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);const N=F.isInstancedMesh===!0?F.id:0;let se=V[N];se===void 0&&(se={},V[N]=se);let Z=se[O.id];Z===void 0&&(Z={},se[O.id]=Z);let ue=Z[B];return ue===void 0&&(ue=d(m()),Z[B]=ue),ue}function d(F){const y=[],O=[],u=[];for(let B=0;B<t;B++)y[B]=0,O[B]=0,u[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:O,attributeDivisors:u,object:F,attributes:{},index:null}}function f(F,y,O,u){const B=r.attributes,V=y.attributes;let N=0;const se=O.getAttributes();for(const Z in se)if(se[Z].location>=0){const W=B[Z];let G=V[Z];if(G===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(G=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(G=F.instanceColor)),W===void 0||W.attribute!==G||G&&W.data!==G.data)return!0;N++}return r.attributesNum!==N||r.index!==u}function x(F,y,O,u){const B={},V=y.attributes;let N=0;const se=O.getAttributes();for(const Z in se)if(se[Z].location>=0){let W=V[Z];W===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(W=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(W=F.instanceColor));const G={};G.attribute=W,W&&W.data&&(G.data=W.data),B[Z]=G,N++}r.attributes=B,r.attributesNum=N,r.index=u}function g(){const F=r.newAttributes;for(let y=0,O=F.length;y<O;y++)F[y]=0}function c(F){o(F,0)}function o(F,y){const O=r.newAttributes,u=r.enabledAttributes,B=r.attributeDivisors;O[F]=1,u[F]===0&&(e.enableVertexAttribArray(F),u[F]=1),B[F]!==y&&(e.vertexAttribDivisor(F,y),B[F]=y)}function S(){const F=r.newAttributes,y=r.enabledAttributes;for(let O=0,u=y.length;O<u;O++)y[O]!==F[O]&&(e.disableVertexAttribArray(O),y[O]=0)}function T(F,y,O,u,B,V,N){N===!0?e.vertexAttribIPointer(F,y,O,B,V):e.vertexAttribPointer(F,y,O,u,B,V)}function w(F,y,O,u){g();const B=u.attributes,V=O.getAttributes(),N=y.defaultAttributeValues;for(const se in V){const Z=V[se];if(Z.location>=0){let ue=B[se];if(ue===void 0&&(se==="instanceMatrix"&&F.instanceMatrix&&(ue=F.instanceMatrix),se==="instanceColor"&&F.instanceColor&&(ue=F.instanceColor)),ue!==void 0){const W=ue.normalized,G=ue.itemSize,ge=n.get(ue);if(ge===void 0)continue;const me=ge.buffer,fe=ge.type,ee=ge.bytesPerElement,he=fe===e.INT||fe===e.UNSIGNED_INT||ue.gpuType===Wa;if(ue.isInterleavedBufferAttribute){const le=ue.data,ie=le.stride,de=ue.offset;if(le.isInstancedInterleavedBuffer){for(let _e=0;_e<Z.locationSize;_e++)o(Z.location+_e,le.meshPerAttribute);F.isInstancedMesh!==!0&&u._maxInstanceCount===void 0&&(u._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<Z.locationSize;_e++)c(Z.location+_e);e.bindBuffer(e.ARRAY_BUFFER,me);for(let _e=0;_e<Z.locationSize;_e++)T(Z.location+_e,G/Z.locationSize,fe,W,ie*ee,(de+G/Z.locationSize*_e)*ee,he)}else{if(ue.isInstancedBufferAttribute){for(let le=0;le<Z.locationSize;le++)o(Z.location+le,ue.meshPerAttribute);F.isInstancedMesh!==!0&&u._maxInstanceCount===void 0&&(u._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let le=0;le<Z.locationSize;le++)c(Z.location+le);e.bindBuffer(e.ARRAY_BUFFER,me);for(let le=0;le<Z.locationSize;le++)T(Z.location+le,G/Z.locationSize,fe,W,G*ee,G/Z.locationSize*le*ee,he)}}else if(N!==void 0){const W=N[se];if(W!==void 0)switch(W.length){case 2:e.vertexAttrib2fv(Z.location,W);break;case 3:e.vertexAttrib3fv(Z.location,W);break;case 4:e.vertexAttrib4fv(Z.location,W);break;default:e.vertexAttrib1fv(Z.location,W)}}}}S()}function P(){A();for(const F in i){const y=i[F];for(const O in y){const u=y[O];for(const B in u){const V=u[B];for(const N in V)b(V[N].object),delete V[N];delete u[B]}}delete i[F]}}function D(F){if(i[F.id]===void 0)return;const y=i[F.id];for(const O in y){const u=y[O];for(const B in u){const V=u[B];for(const N in V)b(V[N].object),delete V[N];delete u[B]}}delete i[F.id]}function L(F){for(const y in i){const O=i[y];for(const u in O){const B=O[u];if(B[F.id]===void 0)continue;const V=B[F.id];for(const N in V)b(V[N].object),delete V[N];delete B[F.id]}}}function M(F){for(const y in i){const O=i[y],u=F.isInstancedMesh===!0?F.id:0,B=O[u];if(B!==void 0){for(const V in B){const N=B[V];for(const se in N)b(N[se].object),delete N[se];delete B[V]}delete O[u],Object.keys(O).length===0&&delete i[y]}}}function A(){X(),a=!0,r!==l&&(r=l,v(r.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:s,reset:A,resetDefaultState:X,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfObject:M,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:c,disableUnusedAttributes:S}}function tu(e,n,t){let i;function l(v){i=v}function r(v,b){e.drawArrays(i,v,b),t.update(b,i,1)}function a(v,b,E){E!==0&&(e.drawArraysInstanced(i,v,b,E),t.update(b,i,E))}function s(v,b,E){if(E===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,v,0,b,0,E);let f=0;for(let x=0;x<E;x++)f+=b[x];t.update(f,i,1)}function m(v,b,E,d){if(E===0)return;const f=n.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<v.length;x++)a(v[x],b[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(i,v,0,b,0,d,0,E);let x=0;for(let g=0;g<E;g++)x+=b[g]*d[g];t.update(x,i,1)}}this.setMode=l,this.render=r,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=m}function nu(e,n,t,i){let l;function r(){if(l!==void 0)return l;if(n.has("EXT_texture_filter_anisotropic")===!0){const L=n.get("EXT_texture_filter_anisotropic");l=e.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function a(L){return!(L!==Bt&&i.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(L){const M=L===qt&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(L!==Dt&&i.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Yt&&!M)}function m(L){if(L==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let v=t.precision!==void 0?t.precision:"highp";const b=m(v);b!==v&&(tt("WebGLRenderer:",v,"not supported, using",b,"instead."),v=b);const E=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),o=e.getParameter(e.MAX_VERTEX_ATTRIBS),S=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),w=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),P=e.getParameter(e.MAX_SAMPLES),D=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:m,textureFormatReadable:a,textureTypeReadable:s,precision:v,logarithmicDepthBuffer:E,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:c,maxAttributes:o,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:w,maxSamples:P,samples:D}}function iu(e){const n=this;let t=null,i=0,l=!1,r=!1;const a=new Fa,s=new qe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(E,d){const f=E.length!==0||d||i!==0||l;return l=d,i=E.length,f},this.beginShadows=function(){r=!0,b(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(E,d){t=b(E,d,0)},this.setState=function(E,d,f){const x=E.clippingPlanes,g=E.clipIntersection,c=E.clipShadows,o=e.get(E);if(!l||x===null||x.length===0||r&&!c)r?b(null):v();else{const S=r?0:i,T=S*4;let w=o.clippingState||null;m.value=w,w=b(x,d,T,f);for(let P=0;P!==T;++P)w[P]=t[P];o.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function v(){m.value!==t&&(m.value=t,m.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function b(E,d,f,x){const g=E!==null?E.length:0;let c=null;if(g!==0){if(c=m.value,x!==!0||c===null){const o=f+g*4,S=d.matrixWorldInverse;s.getNormalMatrix(S),(c===null||c.length<o)&&(c=new Float32Array(o));for(let T=0,w=f;T!==g;++T,w+=4)a.copy(E[T]).applyMatrix4(S,s),a.normal.toArray(c,w),c[w+3]=a.constant}m.value=c,m.needsUpdate=!0}return n.numPlanes=g,n.numIntersection=0,c}}const Kt=4,jr=[.125,.215,.35,.446,.526,.582],Jt=20,ru=256,Mn=new Hi,$r=new at;let bi=null,Mi=0,Ti=0,Ai=!1;const au=new ke;class Qr{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,l=100,r={}){const{size:a=256,position:s=au}=r;bi=this._renderer.getRenderTarget(),Mi=this._renderer.getActiveCubeFace(),Ti=this._renderer.getActiveMipmapLevel(),Ai=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(n,i,l,m,s),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ta(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ea(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(bi,Mi,Ti),this._renderer.xr.enabled=Ai,n.scissorTest=!1,sn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===In||n.mapping===Sn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),bi=this._renderer.getRenderTarget(),Mi=this._renderer.getActiveCubeFace(),Ti=this._renderer.getActiveMipmapLevel(),Ai=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:qt,format:Bt,colorSpace:si,depthBuffer:!1},l=Jr(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jr(n,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ou(r)),this._blurMaterial=lu(r,n,t),this._ggxMaterial=su(r,n,t)}return l}_compileMaterial(n){const t=new Tt(new En,n);this._renderer.compile(t,Mn)}_sceneToCubeUV(n,t,i,l,r){const m=new Kn(90,1,t,i),v=[1,-1,1,1,1,1],b=[1,1,1,-1,-1,-1],E=this._renderer,d=E.autoClear,f=E.toneMapping;E.getClearColor($r),E.toneMapping=Lt,E.autoClear=!1,E.state.buffers.depth.getReversed()&&(E.setRenderTarget(l),E.clearDepth(),E.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tt(new Xi,new ni({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,c=g.material;let o=!1;const S=n.background;S?S.isColor&&(c.color.copy(S),n.background=null,o=!0):(c.color.copy($r),o=!0);for(let T=0;T<6;T++){const w=T%3;w===0?(m.up.set(0,v[T],0),m.position.set(r.x,r.y,r.z),m.lookAt(r.x+b[T],r.y,r.z)):w===1?(m.up.set(0,0,v[T]),m.position.set(r.x,r.y,r.z),m.lookAt(r.x,r.y+b[T],r.z)):(m.up.set(0,v[T],0),m.position.set(r.x,r.y,r.z),m.lookAt(r.x,r.y,r.z+b[T]));const P=this._cubeSize;sn(l,w*P,T>2?P:0,P,P),E.setRenderTarget(l),o&&E.render(g,m),E.render(n,m)}E.toneMapping=f,E.autoClear=d,n.background=S}_textureToCubeUV(n,t){const i=this._renderer,l=n.mapping===In||n.mapping===Sn;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ta()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ea());const r=l?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const s=r.uniforms;s.envMap.value=n;const m=this._cubeSize;sn(t,0,0,3*m,2*m),i.setRenderTarget(t),i.render(a,Mn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const l=this._lodMeshes.length;for(let r=1;r<l;r++)this._applyGGXFilter(n,r-1,r);t.autoClear=i}_applyGGXFilter(n,t,i){const l=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,s=this._lodMeshes[i];s.material=a;const m=a.uniforms,v=i/(this._lodMeshes.length-1),b=t/(this._lodMeshes.length-1),E=Math.sqrt(v*v-b*b),d=0+v*1.25,f=E*d,{_lodMax:x}=this,g=this._sizeLods[i],c=3*g*(i>x-Kt?i-x+Kt:0),o=4*(this._cubeSize-g);m.envMap.value=n.texture,m.roughness.value=f,m.mipInt.value=x-t,sn(r,c,o,3*g,2*g),l.setRenderTarget(r),l.render(s,Mn),m.envMap.value=r.texture,m.roughness.value=0,m.mipInt.value=x-i,sn(n,c,o,3*g,2*g),l.setRenderTarget(n),l.render(s,Mn)}_blur(n,t,i,l,r){const a=this._pingPongRenderTarget;this._halfBlur(n,a,t,i,l,"latitudinal",r),this._halfBlur(a,n,i,i,l,"longitudinal",r)}_halfBlur(n,t,i,l,r,a,s){const m=this._renderer,v=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&rt("blur direction must be either latitudinal or longitudinal!");const b=3,E=this._lodMeshes[l];E.material=v;const d=v.uniforms,f=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Jt-1),g=r/x,c=isFinite(r)?1+Math.floor(b*g):Jt;c>Jt&&tt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${Jt}`);const o=[];let S=0;for(let L=0;L<Jt;++L){const M=L/g,A=Math.exp(-M*M/2);o.push(A),L===0?S+=A:L<c&&(S+=2*A)}for(let L=0;L<o.length;L++)o[L]=o[L]/S;d.envMap.value=n.texture,d.samples.value=c,d.weights.value=o,d.latitudinal.value=a==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:T}=this;d.dTheta.value=x,d.mipInt.value=T-i;const w=this._sizeLods[l],P=3*w*(l>T-Kt?l-T+Kt:0),D=4*(this._cubeSize-w);sn(t,P,D,3*w,2*w),m.setRenderTarget(t),m.render(E,Mn)}}function ou(e){const n=[],t=[],i=[];let l=e;const r=e-Kt+1+jr.length;for(let a=0;a<r;a++){const s=Math.pow(2,l);n.push(s);let m=1/s;a>e-Kt?m=jr[a-e+Kt-1]:a===0&&(m=0),t.push(m);const v=1/(s-2),b=-v,E=1+v,d=[b,b,E,b,E,E,b,b,E,E,b,E],f=6,x=6,g=3,c=2,o=1,S=new Float32Array(g*x*f),T=new Float32Array(c*x*f),w=new Float32Array(o*x*f);for(let D=0;D<f;D++){const L=D%3*2/3-1,M=D>2?0:-1,A=[L,M,0,L+2/3,M,0,L+2/3,M+1,0,L,M,0,L+2/3,M+1,0,L,M+1,0];S.set(A,g*x*D),T.set(d,c*x*D);const X=[D,D,D,D,D,D];w.set(X,o*x*D)}const P=new En;P.setAttribute("position",new yn(S,g)),P.setAttribute("uv",new yn(T,c)),P.setAttribute("faceIndex",new yn(w,o)),i.push(new Tt(P,null)),l>Kt&&l--}return{lodMeshes:i,sizeLods:n,sigmas:t}}function Jr(e,n,t){const i=new Ut(e,n,t);return i.texture.mapping=li,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sn(e,n,t,i,l){e.viewport.set(n,t,i,l),e.scissor.set(n,t,i,l)}function su(e,n,t){return new Ht({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ru,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fi(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function lu(e,n,t){const i=new Float32Array(Jt),l=new ke(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:Jt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:fi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function ea(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function ta(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function fi(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class so extends Ut{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},l=[i,i,i,i,i,i];this.texture=new Ka(l),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Xi(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:Ii(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bt,blending:Gt});r.uniforms.tEquirect.value=t;const a=new Tt(l,r),s=t.minFilter;return t.minFilter===un&&(t.minFilter=xt),new Vs(1,10,this).update(n,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(n,t=!0,i=!0,l=!0){const r=n.getRenderTarget();for(let a=0;a<6;a++)n.setRenderTarget(this,a),n.clear(t,i,l);n.setRenderTarget(r)}}function cu(e){let n=new WeakMap,t=new WeakMap,i=null;function l(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Ei||f===xi)if(n.has(d)){const x=n.get(d).texture;return s(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const g=new so(x.height);return g.fromEquirectangularTexture(e,d),n.set(d,g),d.addEventListener("dispose",v),s(g.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,x=f===Ei||f===xi,g=f===In||f===Sn;if(x||g){let c=t.get(d);const o=c!==void 0?c.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==o)return i===null&&(i=new Qr(e)),c=x?i.fromEquirectangular(d,c):i.fromCubemap(d,c),c.texture.pmremVersion=d.pmremVersion,t.set(d,c),c.texture;if(c!==void 0)return c.texture;{const S=d.image;return x&&S&&S.height>0||g&&S&&m(S)?(i===null&&(i=new Qr(e)),c=x?i.fromEquirectangular(d):i.fromCubemap(d),c.texture.pmremVersion=d.pmremVersion,t.set(d,c),d.addEventListener("dispose",b),c.texture):null}}}return d}function s(d,f){return f===Ei?d.mapping=In:f===xi&&(d.mapping=Sn),d}function m(d){let f=0;const x=6;for(let g=0;g<x;g++)d[g]!==void 0&&f++;return f===x}function v(d){const f=d.target;f.removeEventListener("dispose",v);const x=n.get(f);x!==void 0&&(n.delete(f),x.dispose())}function b(d){const f=d.target;f.removeEventListener("dispose",b);const x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function E(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:l,dispose:E}}function fu(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const l=e.getExtension(i);return n[i]=l,l}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const l=t(i);return l===null&&Oa("WebGLRenderer: "+i+" extension not supported."),l}}}function uu(e,n,t,i){const l={},r=new WeakMap;function a(E){const d=E.target;d.index!==null&&n.remove(d.index);for(const x in d.attributes)n.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete l[d.id];const f=r.get(d);f&&(n.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(E,d){return l[d.id]===!0||(d.addEventListener("dispose",a),l[d.id]=!0,t.memory.geometries++),d}function m(E){const d=E.attributes;for(const f in d)n.update(d[f],e.ARRAY_BUFFER)}function v(E){const d=[],f=E.index,x=E.attributes.position;let g=0;if(x===void 0)return;if(f!==null){const S=f.array;g=f.version;for(let T=0,w=S.length;T<w;T+=3){const P=S[T+0],D=S[T+1],L=S[T+2];d.push(P,D,D,L,L,P)}}else{const S=x.array;g=x.version;for(let T=0,w=S.length/3-1;T<w;T+=3){const P=T+0,D=T+1,L=T+2;d.push(P,D,D,L,L,P)}}const c=new(x.count>=65535?Ws:Xs)(d,1);c.version=g;const o=r.get(E);o&&n.remove(o),r.set(E,c)}function b(E){const d=r.get(E);if(d){const f=E.index;f!==null&&d.version<f.version&&v(E)}else v(E);return r.get(E)}return{get:s,update:m,getWireframeAttribute:b}}function du(e,n,t){let i;function l(d){i=d}let r,a;function s(d){r=d.type,a=d.bytesPerElement}function m(d,f){e.drawElements(i,f,r,d*a),t.update(f,i,1)}function v(d,f,x){x!==0&&(e.drawElementsInstanced(i,f,r,d*a,x),t.update(f,i,x))}function b(d,f,x){if(x===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,x);let c=0;for(let o=0;o<x;o++)c+=f[o];t.update(c,i,1)}function E(d,f,x,g){if(x===0)return;const c=n.get("WEBGL_multi_draw");if(c===null)for(let o=0;o<d.length;o++)v(d[o]/a,f[o],g[o]);else{c.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,g,0,x);let o=0;for(let S=0;S<x;S++)o+=f[S]*g[S];t.update(o,i,1)}}this.setMode=l,this.setIndex=s,this.render=m,this.renderInstances=v,this.renderMultiDraw=b,this.renderMultiDrawInstances=E}function hu(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,s){switch(t.calls++,a){case e.TRIANGLES:t.triangles+=s*(r/3);break;case e.LINES:t.lines+=s*(r/2);break;case e.LINE_STRIP:t.lines+=s*(r-1);break;case e.LINE_LOOP:t.lines+=s*r;break;case e.POINTS:t.points+=s*r;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function l(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:l,update:i}}function pu(e,n,t){const i=new WeakMap,l=new St;function r(a,s,m){const v=a.morphTargetInfluences,b=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,E=b!==void 0?b.length:0;let d=i.get(s);if(d===void 0||d.count!==E){let A=function(){L.dispose(),i.delete(s),s.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const f=s.morphAttributes.position!==void 0,x=s.morphAttributes.normal!==void 0,g=s.morphAttributes.color!==void 0,c=s.morphAttributes.position||[],o=s.morphAttributes.normal||[],S=s.morphAttributes.color||[];let T=0;f===!0&&(T=1),x===!0&&(T=2),g===!0&&(T=3);let w=s.attributes.position.count*T,P=1;w>n.maxTextureSize&&(P=Math.ceil(w/n.maxTextureSize),w=n.maxTextureSize);const D=new Float32Array(w*P*4*E),L=new Xa(D,w,P,E);L.type=Yt,L.needsUpdate=!0;const M=T*4;for(let X=0;X<E;X++){const F=c[X],y=o[X],O=S[X],u=w*P*4*X;for(let B=0;B<F.count;B++){const V=B*M;f===!0&&(l.fromBufferAttribute(F,B),D[u+V+0]=l.x,D[u+V+1]=l.y,D[u+V+2]=l.z,D[u+V+3]=0),x===!0&&(l.fromBufferAttribute(y,B),D[u+V+4]=l.x,D[u+V+5]=l.y,D[u+V+6]=l.z,D[u+V+7]=0),g===!0&&(l.fromBufferAttribute(O,B),D[u+V+8]=l.x,D[u+V+9]=l.y,D[u+V+10]=l.z,D[u+V+11]=O.itemSize===4?l.w:1)}}d={count:E,texture:L,size:new Qe(w,P)},i.set(s,d),s.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)m.getUniforms().setValue(e,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<v.length;g++)f+=v[g];const x=s.morphTargetsRelative?1:1-f;m.getUniforms().setValue(e,"morphTargetBaseInfluence",x),m.getUniforms().setValue(e,"morphTargetInfluences",v)}m.getUniforms().setValue(e,"morphTargetsTexture",d.texture,t),m.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:r}}function mu(e,n,t,i,l){let r=new WeakMap;function a(v){const b=l.render.frame,E=v.geometry,d=n.get(v,E);if(r.get(d)!==b&&(n.update(d),r.set(d,b)),v.isInstancedMesh&&(v.hasEventListener("dispose",m)===!1&&v.addEventListener("dispose",m),r.get(v)!==b&&(t.update(v.instanceMatrix,e.ARRAY_BUFFER),v.instanceColor!==null&&t.update(v.instanceColor,e.ARRAY_BUFFER),r.set(v,b))),v.isSkinnedMesh){const f=v.skeleton;r.get(f)!==b&&(f.update(),r.set(f,b))}return d}function s(){r=new WeakMap}function m(v){const b=v.target;b.removeEventListener("dispose",m),i.releaseStatesOfObject(b),t.remove(b.instanceMatrix),b.instanceColor!==null&&t.remove(b.instanceColor)}return{update:a,dispose:s}}const _u={[eo]:"LINEAR_TONE_MAPPING",[Ja]:"REINHARD_TONE_MAPPING",[Qa]:"CINEON_TONE_MAPPING",[$a]:"ACES_FILMIC_TONE_MAPPING",[ja]:"AGX_TONE_MAPPING",[Za]:"NEUTRAL_TONE_MAPPING",[qa]:"CUSTOM_TONE_MAPPING"};function gu(e,n,t,i,l){const r=new Ut(n,t,{type:e,depthBuffer:i,stencilBuffer:l}),a=new Ut(n,t,{type:qt,depthBuffer:!1,stencilBuffer:!1}),s=new En;s.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute("uv",new Rn([0,2,0,0,2,0],2));const m=new zo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Tt(s,m),b=new Hi(-1,1,1,-1,0,1);let E=null,d=null,f=!1,x,g=null,c=[],o=!1;this.setSize=function(S,T){r.setSize(S,T),a.setSize(S,T);for(let w=0;w<c.length;w++){const P=c[w];P.setSize&&P.setSize(S,T)}},this.setEffects=function(S){c=S,o=c.length>0&&c[0].isRenderPass===!0;const T=r.width,w=r.height;for(let P=0;P<c.length;P++){const D=c[P];D.setSize&&D.setSize(T,w)}},this.begin=function(S,T){if(f||S.toneMapping===Lt&&c.length===0)return!1;if(g=T,T!==null){const w=T.width,P=T.height;(r.width!==w||r.height!==P)&&this.setSize(w,P)}return o===!1&&S.setRenderTarget(r),x=S.toneMapping,S.toneMapping=Lt,!0},this.hasRenderPass=function(){return o},this.end=function(S,T){S.toneMapping=x,f=!0;let w=r,P=a;for(let D=0;D<c.length;D++){const L=c[D];if(L.enabled!==!1&&(L.render(S,P,w,T),L.needsSwap!==!1)){const M=w;w=P,P=M}}if(E!==S.outputColorSpace||d!==S.toneMapping){E=S.outputColorSpace,d=S.toneMapping,m.defines={},lt.getTransfer(E)===it&&(m.defines.SRGB_TRANSFER="");const D=_u[d];D&&(m.defines[D]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(g),S.render(v,b),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),s.dispose(),m.dispose()}}const lo=new Qs,Oi=new ei(1,1),co=new Xa,fo=new Ks,uo=new Ka,na=[],ia=[],ra=new Float32Array(16),aa=new Float32Array(9),oa=new Float32Array(4);function xn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const l=n*t;let r=na[l];if(r===void 0&&(r=new Float32Array(l),na[l]=r),n!==0){i.toArray(r,0);for(let a=1,s=0;a!==n;++a)s+=t,e[a].toArray(r,s)}return r}function ft(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ut(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function ui(e,n){let t=ia[n];t===void 0&&(t=new Int32Array(n),ia[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function vu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Su(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2fv(this.addr,n),ut(t,n)}}function Eu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(ft(t,n))return;e.uniform3fv(this.addr,n),ut(t,n)}}function xu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4fv(this.addr,n),ut(t,n)}}function bu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;oa.set(i),e.uniformMatrix2fv(this.addr,!1,oa),ut(t,i)}}function Mu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;aa.set(i),e.uniformMatrix3fv(this.addr,!1,aa),ut(t,i)}}function Tu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;ra.set(i),e.uniformMatrix4fv(this.addr,!1,ra),ut(t,i)}}function Au(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function wu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2iv(this.addr,n),ut(t,n)}}function Ru(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ft(t,n))return;e.uniform3iv(this.addr,n),ut(t,n)}}function yu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4iv(this.addr,n),ut(t,n)}}function Cu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Pu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2uiv(this.addr,n),ut(t,n)}}function Du(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ft(t,n))return;e.uniform3uiv(this.addr,n),ut(t,n)}}function Lu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4uiv(this.addr,n),ut(t,n)}}function Uu(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l);let r;this.type===e.SAMPLER_2D_SHADOW?(Oi.compareFunction=t.isReversedDepthBuffer()?zi:Vi,r=Oi):r=lo,t.setTexture2D(n||r,l)}function Iu(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTexture3D(n||fo,l)}function Nu(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTextureCube(n||uo,l)}function Ou(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTexture2DArray(n||co,l)}function Fu(e){switch(e){case 5126:return vu;case 35664:return Su;case 35665:return Eu;case 35666:return xu;case 35674:return bu;case 35675:return Mu;case 35676:return Tu;case 5124:case 35670:return Au;case 35667:case 35671:return wu;case 35668:case 35672:return Ru;case 35669:case 35673:return yu;case 5125:return Cu;case 36294:return Pu;case 36295:return Du;case 36296:return Lu;case 35678:case 36198:case 36298:case 36306:case 35682:return Uu;case 35679:case 36299:case 36307:return Iu;case 35680:case 36300:case 36308:case 36293:return Nu;case 36289:case 36303:case 36311:case 36292:return Ou}}function Bu(e,n){e.uniform1fv(this.addr,n)}function ku(e,n){const t=xn(n,this.size,2);e.uniform2fv(this.addr,t)}function Gu(e,n){const t=xn(n,this.size,3);e.uniform3fv(this.addr,t)}function Hu(e,n){const t=xn(n,this.size,4);e.uniform4fv(this.addr,t)}function zu(e,n){const t=xn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Vu(e,n){const t=xn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Wu(e,n){const t=xn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Xu(e,n){e.uniform1iv(this.addr,n)}function Yu(e,n){e.uniform2iv(this.addr,n)}function Ku(e,n){e.uniform3iv(this.addr,n)}function qu(e,n){e.uniform4iv(this.addr,n)}function Zu(e,n){e.uniform1uiv(this.addr,n)}function ju(e,n){e.uniform2uiv(this.addr,n)}function $u(e,n){e.uniform3uiv(this.addr,n)}function Qu(e,n){e.uniform4uiv(this.addr,n)}function Ju(e,n,t){const i=this.cache,l=n.length,r=ui(t,l);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));let a;this.type===e.SAMPLER_2D_SHADOW?a=Oi:a=lo;for(let s=0;s!==l;++s)t.setTexture2D(n[s]||a,r[s])}function ed(e,n,t){const i=this.cache,l=n.length,r=ui(t,l);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==l;++a)t.setTexture3D(n[a]||fo,r[a])}function td(e,n,t){const i=this.cache,l=n.length,r=ui(t,l);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==l;++a)t.setTextureCube(n[a]||uo,r[a])}function nd(e,n,t){const i=this.cache,l=n.length,r=ui(t,l);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==l;++a)t.setTexture2DArray(n[a]||co,r[a])}function id(e){switch(e){case 5126:return Bu;case 35664:return ku;case 35665:return Gu;case 35666:return Hu;case 35674:return zu;case 35675:return Vu;case 35676:return Wu;case 5124:case 35670:return Xu;case 35667:case 35671:return Yu;case 35668:case 35672:return Ku;case 35669:case 35673:return qu;case 5125:return Zu;case 36294:return ju;case 36295:return $u;case 36296:return Qu;case 35678:case 36198:case 36298:case 36306:case 35682:return Ju;case 35679:case 36299:case 36307:return ed;case 35680:case 36300:case 36308:case 36293:return td;case 36289:case 36303:case 36311:case 36292:return nd}}class rd{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fu(t.type)}}class ad{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=id(t.type)}}class od{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const l=this.seq;for(let r=0,a=l.length;r!==a;++r){const s=l[r];s.setValue(n,t[s.id],i)}}}const wi=/(\w+)(\])?(\[|\.)?/g;function sa(e,n){e.seq.push(n),e.map[n.id]=n}function sd(e,n,t){const i=e.name,l=i.length;for(wi.lastIndex=0;;){const r=wi.exec(i),a=wi.lastIndex;let s=r[1];const m=r[2]==="]",v=r[3];if(m&&(s=s|0),v===void 0||v==="["&&a+2===l){sa(t,v===void 0?new rd(s,e,n):new ad(s,e,n));break}else{let E=t.map[s];E===void 0&&(E=new od(s),sa(t,E)),t=E}}}class $n{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=n.getActiveUniform(t,a),m=n.getUniformLocation(t,s.name);sd(s,m,this)}const l=[],r=[];for(const a of this.seq)a.type===n.SAMPLER_2D_SHADOW||a.type===n.SAMPLER_CUBE_SHADOW||a.type===n.SAMPLER_2D_ARRAY_SHADOW?l.push(a):r.push(a);l.length>0&&(this.seq=l.concat(r))}setValue(n,t,i,l){const r=this.map[t];r!==void 0&&r.setValue(n,i,l)}setOptional(n,t,i){const l=t[i];l!==void 0&&this.setValue(n,i,l)}static upload(n,t,i,l){for(let r=0,a=t.length;r!==a;++r){const s=t[r],m=i[s.id];m.needsUpdate!==!1&&s.setValue(n,m.value,l)}}static seqWithValue(n,t){const i=[];for(let l=0,r=n.length;l!==r;++l){const a=n[l];a.id in t&&i.push(a)}return i}}function la(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const ld=37297;let cd=0;function fd(e,n){const t=e.split(`
`),i=[],l=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let a=l;a<r;a++){const s=a+1;i.push(`${s===n?">":" "} ${s}: ${t[a]}`)}return i.join(`
`)}const ca=new qe;function ud(e){lt._getMatrix(ca,lt.workingColorSpace,e);const n=`mat3( ${ca.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(e)){case to:return[n,"LinearTransferOETF"];case it:return[n,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function fa(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+fd(e.getShaderSource(n),s)}else return r}function dd(e,n){const t=ud(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const hd={[eo]:"Linear",[Ja]:"Reinhard",[Qa]:"Cineon",[$a]:"ACESFilmic",[ja]:"AgX",[Za]:"Neutral",[qa]:"Custom"};function pd(e,n){const t=hd[n];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vn=new ke;function md(){lt.getLuminanceCoefficients(Vn);const e=Vn.x.toFixed(4),n=Vn.y.toFixed(4),t=Vn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _d(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wn).join(`
`)}function gd(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function vd(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let l=0;l<i;l++){const r=e.getActiveAttrib(n,l),a=r.name;let s=1;r.type===e.FLOAT_MAT2&&(s=2),r.type===e.FLOAT_MAT3&&(s=3),r.type===e.FLOAT_MAT4&&(s=4),t[a]={type:r.type,location:e.getAttribLocation(n,a),locationSize:s}}return t}function wn(e){return e!==""}function ua(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function da(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Sd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fi(e){return e.replace(Sd,xd)}const Ed=new Map;function xd(e,n){let t=We[n];if(t===void 0){const i=Ed.get(n);if(i!==void 0)t=We[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return Fi(t)}const bd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ha(e){return e.replace(bd,Md)}function Md(e,n,t,i){let l="";for(let r=parseInt(n);r<parseInt(t);r++)l+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return l}function pa(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}const Td={[qn]:"SHADOWMAP_TYPE_PCF",[An]:"SHADOWMAP_TYPE_VSM"};function Ad(e){return Td[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wd={[In]:"ENVMAP_TYPE_CUBE",[Sn]:"ENVMAP_TYPE_CUBE",[li]:"ENVMAP_TYPE_CUBE_UV"};function Rd(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":wd[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const yd={[Sn]:"ENVMAP_MODE_REFRACTION"};function Cd(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":yd[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Pd={[$s]:"ENVMAP_BLENDING_MULTIPLY",[js]:"ENVMAP_BLENDING_MIX",[Zs]:"ENVMAP_BLENDING_ADD"};function Dd(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Pd[e.combine]||"ENVMAP_BLENDING_NONE"}function Ld(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ud(e,n,t,i){const l=e.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const m=Ad(t),v=Rd(t),b=Cd(t),E=Dd(t),d=Ld(t),f=_d(t),x=gd(r),g=l.createProgram();let c,o,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(wn).join(`
`),c.length>0&&(c+=`
`),o=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(wn).join(`
`),o.length>0&&(o+=`
`)):(c=[pa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+b:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wn).join(`
`),o=[pa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.envMap?"#define "+b:"",t.envMap?"#define "+E:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lt?"#define TONE_MAPPING":"",t.toneMapping!==Lt?We.tonemapping_pars_fragment:"",t.toneMapping!==Lt?pd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,dd("linearToOutputTexel",t.outputColorSpace),md(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wn).join(`
`)),a=Fi(a),a=ua(a,t),a=da(a,t),s=Fi(s),s=ua(s,t),s=da(s,t),a=ha(a),s=ha(s),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,c=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,o=["#define varying in",t.glslVersion===Yr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const T=S+c+a,w=S+o+s,P=la(l,l.VERTEX_SHADER,T),D=la(l,l.FRAGMENT_SHADER,w);l.attachShader(g,P),l.attachShader(g,D),t.index0AttributeName!==void 0?l.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&l.bindAttribLocation(g,0,"position"),l.linkProgram(g);function L(F){if(e.debug.checkShaderErrors){const y=l.getProgramInfoLog(g)||"",O=l.getShaderInfoLog(P)||"",u=l.getShaderInfoLog(D)||"",B=y.trim(),V=O.trim(),N=u.trim();let se=!0,Z=!0;if(l.getProgramParameter(g,l.LINK_STATUS)===!1)if(se=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(l,g,P,D);else{const ue=fa(l,P,"vertex"),W=fa(l,D,"fragment");rt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(g,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+B+`
`+ue+`
`+W)}else B!==""?tt("WebGLProgram: Program Info Log:",B):(V===""||N==="")&&(Z=!1);Z&&(F.diagnostics={runnable:se,programLog:B,vertexShader:{log:V,prefix:c},fragmentShader:{log:N,prefix:o}})}l.deleteShader(P),l.deleteShader(D),M=new $n(l,g),A=vd(l,g)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=l.getProgramParameter(g,ld)),X},this.destroy=function(){i.releaseStatesOfProgram(this),l.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cd++,this.cacheKey=n,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=D,this}let Id=0;class Nd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,l=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(n);return a.has(l)===!1&&(a.add(l),l.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Od(n),t.set(n,i)),i}}class Od{constructor(n){this.id=Id++,this.code=n,this.usedTimes=0}}function Fd(e,n,t,i,l,r){const a=new Ys,s=new Nd,m=new Set,v=[],b=new Map,E=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return m.add(M),M===0?"uv":`uv${M}`}function g(M,A,X,F,y){const O=F.fog,u=y.geometry,B=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,V=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,N=n.get(M.envMap||B,V),se=N&&N.mapping===li?N.image.height:null,Z=f[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&tt("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ue=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,W=ue!==void 0?ue.length:0;let G=0;u.morphAttributes.position!==void 0&&(G=1),u.morphAttributes.normal!==void 0&&(G=2),u.morphAttributes.color!==void 0&&(G=3);let ge,me,fe,ee;if(Z){const Ze=Pt[Z];ge=Ze.vertexShader,me=Ze.fragmentShader}else ge=M.vertexShader,me=M.fragmentShader,s.update(M),fe=s.getVertexShaderID(M),ee=s.getFragmentShaderID(M);const he=e.getRenderTarget(),le=e.state.buffers.depth.getReversed(),ie=y.isInstancedMesh===!0,de=y.isBatchedMesh===!0,_e=!!M.map,Ge=!!M.matcap,Fe=!!N,h=!!M.aoMap,J=!!M.lightMap,K=!!M.bumpMap,I=!!M.normalMap,p=!!M.displacementMap,H=!!M.emissiveMap,ne=!!M.metalnessMap,ae=!!M.roughnessMap,k=M.anisotropy>0,R=M.clearcoat>0,_=M.dispersion>0,U=M.iridescence>0,q=M.sheen>0,re=M.transmission>0,j=k&&!!M.anisotropyMap,Me=R&&!!M.clearcoatMap,Ee=R&&!!M.clearcoatNormalMap,Pe=R&&!!M.clearcoatRoughnessMap,Be=U&&!!M.iridescenceMap,ce=U&&!!M.iridescenceThicknessMap,ve=q&&!!M.sheenColorMap,De=q&&!!M.sheenRoughnessMap,ye=!!M.specularMap,we=!!M.specularColorMap,Ve=!!M.specularIntensityMap,z=re&&!!M.transmissionMap,xe=re&&!!M.thicknessMap,Se=!!M.gradientMap,Re=!!M.alphaMap,pe=M.alphaTest>0,oe=!!M.alphaHash,Le=!!M.extensions;let He=Lt;M.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(He=e.toneMapping);const nt={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:ge,fragmentShader:me,defines:M.defines,customVertexShaderID:fe,customFragmentShaderID:ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:de,batchingColor:de&&y._colorsTexture!==null,instancing:ie,instancingColor:ie&&y.instanceColor!==null,instancingMorph:ie&&y.morphTexture!==null,outputColorSpace:he===null?e.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:si,alphaToCoverage:!!M.alphaToCoverage,map:_e,matcap:Ge,envMap:Fe,envMapMode:Fe&&N.mapping,envMapCubeUVHeight:se,aoMap:h,lightMap:J,bumpMap:K,normalMap:I,displacementMap:p,emissiveMap:H,normalMapObjectSpace:I&&M.normalMapType===zs,normalMapTangentSpace:I&&M.normalMapType===Hs,metalnessMap:ne,roughnessMap:ae,anisotropy:k,anisotropyMap:j,clearcoat:R,clearcoatMap:Me,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Pe,dispersion:_,iridescence:U,iridescenceMap:Be,iridescenceThicknessMap:ce,sheen:q,sheenColorMap:ve,sheenRoughnessMap:De,specularMap:ye,specularColorMap:we,specularIntensityMap:Ve,transmission:re,transmissionMap:z,thicknessMap:xe,gradientMap:Se,opaque:M.transparent===!1&&M.blending===Zn&&M.alphaToCoverage===!1,alphaMap:Re,alphaTest:pe,alphaHash:oe,combine:M.combine,mapUv:_e&&x(M.map.channel),aoMapUv:h&&x(M.aoMap.channel),lightMapUv:J&&x(M.lightMap.channel),bumpMapUv:K&&x(M.bumpMap.channel),normalMapUv:I&&x(M.normalMap.channel),displacementMapUv:p&&x(M.displacementMap.channel),emissiveMapUv:H&&x(M.emissiveMap.channel),metalnessMapUv:ne&&x(M.metalnessMap.channel),roughnessMapUv:ae&&x(M.roughnessMap.channel),anisotropyMapUv:j&&x(M.anisotropyMap.channel),clearcoatMapUv:Me&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(M.sheenRoughnessMap.channel),specularMapUv:ye&&x(M.specularMap.channel),specularColorMapUv:we&&x(M.specularColorMap.channel),specularIntensityMapUv:Ve&&x(M.specularIntensityMap.channel),transmissionMapUv:z&&x(M.transmissionMap.channel),thicknessMapUv:xe&&x(M.thicknessMap.channel),alphaMapUv:Re&&x(M.alphaMap.channel),vertexTangents:!!u.attributes.tangent&&(I||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!u.attributes.uv&&(_e||Re),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||u.attributes.normal===void 0&&I===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:le,skinning:y.isSkinnedMesh===!0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:G,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&X.length>0,shadowMapType:e.shadowMap.type,toneMapping:He,decodeVideoTexture:_e&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===it,decodeVideoTextureEmissive:H&&M.emissiveMap.isVideoTexture===!0&&lt.getTransfer(M.emissiveMap.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ft,flipSided:M.side===bt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Le&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&M.extensions.multiDraw===!0||de)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nt.vertexUv1s=m.has(1),nt.vertexUv2s=m.has(2),nt.vertexUv3s=m.has(3),m.clear(),nt}function c(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const X in M.defines)A.push(X),A.push(M.defines[X]);return M.isRawShaderMaterial===!1&&(o(A,M),S(A,M),A.push(e.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function o(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function S(M,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),M.push(a.mask)}function T(M){const A=f[M.type];let X;if(A){const F=Pt[A];X=Gs.clone(F.uniforms)}else X=M.uniforms;return X}function w(M,A){let X=b.get(A);return X!==void 0?++X.usedTimes:(X=new Ud(e,A,M,l),v.push(X),b.set(A,X)),X}function P(M){if(--M.usedTimes===0){const A=v.indexOf(M);v[A]=v[v.length-1],v.pop(),b.delete(M.cacheKey),M.destroy()}}function D(M){s.remove(M)}function L(){s.dispose()}return{getParameters:g,getProgramCacheKey:c,getUniforms:T,acquireProgram:w,releaseProgram:P,releaseShaderCache:D,programs:v,dispose:L}}function Bd(){let e=new WeakMap;function n(a){return e.has(a)}function t(a){let s=e.get(a);return s===void 0&&(s={},e.set(a,s)),s}function i(a){e.delete(a)}function l(a,s,m){e.get(a)[s]=m}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:l,dispose:r}}function kd(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function ma(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function _a(){const e=[];let n=0;const t=[],i=[],l=[];function r(){n=0,t.length=0,i.length=0,l.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function s(d,f,x,g,c,o){let S=e[n];return S===void 0?(S={id:d.id,object:d,geometry:f,material:x,materialVariant:a(d),groupOrder:g,renderOrder:d.renderOrder,z:c,group:o},e[n]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=x,S.materialVariant=a(d),S.groupOrder=g,S.renderOrder=d.renderOrder,S.z=c,S.group=o),n++,S}function m(d,f,x,g,c,o){const S=s(d,f,x,g,c,o);x.transmission>0?i.push(S):x.transparent===!0?l.push(S):t.push(S)}function v(d,f,x,g,c,o){const S=s(d,f,x,g,c,o);x.transmission>0?i.unshift(S):x.transparent===!0?l.unshift(S):t.unshift(S)}function b(d,f){t.length>1&&t.sort(d||kd),i.length>1&&i.sort(f||ma),l.length>1&&l.sort(f||ma)}function E(){for(let d=n,f=e.length;d<f;d++){const x=e[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:l,init:r,push:m,unshift:v,finish:E,sort:b}}function Gd(){let e=new WeakMap;function n(i,l){const r=e.get(i);let a;return r===void 0?(a=new _a,e.set(i,[a])):l>=r.length?(a=new _a,r.push(a)):a=r[l],a}function t(){e=new WeakMap}return{get:n,dispose:t}}function Hd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new ke,color:new at};break;case"SpotLight":t={position:new ke,direction:new ke,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ke,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ke,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new ke,halfWidth:new ke,halfHeight:new ke};break}return e[n.id]=t,t}}}function zd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Vd=0;function Wd(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function Xd(e){const n=new Hd,t=zd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)i.probe.push(new ke);const l=new ke,r=new gn,a=new gn;function s(v){let b=0,E=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,x=0,g=0,c=0,o=0,S=0,T=0,w=0,P=0,D=0,L=0;v.sort(Wd);for(let A=0,X=v.length;A<X;A++){const F=v[A],y=F.color,O=F.intensity,u=F.distance;let B=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Un?B=F.shadow.map.texture:B=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)b+=y.r*O,E+=y.g*O,d+=y.b*O;else if(F.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(F.sh.coefficients[V],O);L++}else if(F.isDirectionalLight){const V=n.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const N=F.shadow,se=t.get(F);se.shadowIntensity=N.intensity,se.shadowBias=N.bias,se.shadowNormalBias=N.normalBias,se.shadowRadius=N.radius,se.shadowMapSize=N.mapSize,i.directionalShadow[f]=se,i.directionalShadowMap[f]=B,i.directionalShadowMatrix[f]=F.shadow.matrix,S++}i.directional[f]=V,f++}else if(F.isSpotLight){const V=n.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(y).multiplyScalar(O),V.distance=u,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,i.spot[g]=V;const N=F.shadow;if(F.map&&(i.spotLightMap[P]=F.map,P++,N.updateMatrices(F),F.castShadow&&D++),i.spotLightMatrix[g]=N.matrix,F.castShadow){const se=t.get(F);se.shadowIntensity=N.intensity,se.shadowBias=N.bias,se.shadowNormalBias=N.normalBias,se.shadowRadius=N.radius,se.shadowMapSize=N.mapSize,i.spotShadow[g]=se,i.spotShadowMap[g]=B,w++}g++}else if(F.isRectAreaLight){const V=n.get(F);V.color.copy(y).multiplyScalar(O),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),i.rectArea[c]=V,c++}else if(F.isPointLight){const V=n.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),V.distance=F.distance,V.decay=F.decay,F.castShadow){const N=F.shadow,se=t.get(F);se.shadowIntensity=N.intensity,se.shadowBias=N.bias,se.shadowNormalBias=N.normalBias,se.shadowRadius=N.radius,se.shadowMapSize=N.mapSize,se.shadowCameraNear=N.camera.near,se.shadowCameraFar=N.camera.far,i.pointShadow[x]=se,i.pointShadowMap[x]=B,i.pointShadowMatrix[x]=F.shadow.matrix,T++}i.point[x]=V,x++}else if(F.isHemisphereLight){const V=n.get(F);V.skyColor.copy(F.color).multiplyScalar(O),V.groundColor.copy(F.groundColor).multiplyScalar(O),i.hemi[o]=V,o++}}c>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=b,i.ambient[1]=E,i.ambient[2]=d;const M=i.hash;(M.directionalLength!==f||M.pointLength!==x||M.spotLength!==g||M.rectAreaLength!==c||M.hemiLength!==o||M.numDirectionalShadows!==S||M.numPointShadows!==T||M.numSpotShadows!==w||M.numSpotMaps!==P||M.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=c,i.point.length=x,i.hemi.length=o,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=w+P-D,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,M.directionalLength=f,M.pointLength=x,M.spotLength=g,M.rectAreaLength=c,M.hemiLength=o,M.numDirectionalShadows=S,M.numPointShadows=T,M.numSpotShadows=w,M.numSpotMaps=P,M.numLightProbes=L,i.version=Vd++)}function m(v,b){let E=0,d=0,f=0,x=0,g=0;const c=b.matrixWorldInverse;for(let o=0,S=v.length;o<S;o++){const T=v[o];if(T.isDirectionalLight){const w=i.directional[E];w.direction.setFromMatrixPosition(T.matrixWorld),l.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(c),E++}else if(T.isSpotLight){const w=i.spot[f];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(c),w.direction.setFromMatrixPosition(T.matrixWorld),l.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(c),f++}else if(T.isRectAreaLight){const w=i.rectArea[x];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(c),a.identity(),r.copy(T.matrixWorld),r.premultiply(c),a.extractRotation(r),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(c),d++}else if(T.isHemisphereLight){const w=i.hemi[g];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(c),g++}}}return{setup:s,setupView:m,state:i}}function ga(e){const n=new Xd(e),t=[],i=[];function l(b){v.camera=b,t.length=0,i.length=0}function r(b){t.push(b)}function a(b){i.push(b)}function s(){n.setup(t)}function m(b){n.setupView(t,b)}const v={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:l,state:v,setupLights:s,setupLightsView:m,pushLight:r,pushShadow:a}}function Yd(e){let n=new WeakMap;function t(l,r=0){const a=n.get(l);let s;return a===void 0?(s=new ga(e),n.set(l,[s])):r>=a.length?(s=new ga(e),a.push(s)):s=a[r],s}function i(){n=new WeakMap}return{get:t,dispose:i}}const Kd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Zd=[new ke(1,0,0),new ke(-1,0,0),new ke(0,1,0),new ke(0,-1,0),new ke(0,0,1),new ke(0,0,-1)],jd=[new ke(0,-1,0),new ke(0,-1,0),new ke(0,0,1),new ke(0,0,-1),new ke(0,-1,0),new ke(0,-1,0)],va=new gn,Tn=new ke,Ri=new ke;function $d(e,n,t){let i=new Na;const l=new Qe,r=new Qe,a=new St,s=new Ss,m=new Es,v={},b=t.maxTextureSize,E={[Dn]:bt,[bt]:Dn,[Ft]:Ft},d=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Kd,fragmentShader:qd}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const x=new En;x.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Tt(x,d),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qn;let o=this.type;this.render=function(D,L,M){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||D.length===0)return;this.type===xs&&(tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qn);const A=e.getRenderTarget(),X=e.getActiveCubeFace(),F=e.getActiveMipmapLevel(),y=e.state;y.setBlending(Gt),y.buffers.depth.getReversed()===!0?y.buffers.color.setClear(0,0,0,0):y.buffers.color.setClear(1,1,1,1),y.buffers.depth.setTest(!0),y.setScissorTest(!1);const O=o!==this.type;O&&L.traverse(function(u){u.material&&(Array.isArray(u.material)?u.material.forEach(B=>B.needsUpdate=!0):u.material.needsUpdate=!0)});for(let u=0,B=D.length;u<B;u++){const V=D[u],N=V.shadow;if(N===void 0){tt("WebGLShadowMap:",V,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;l.copy(N.mapSize);const se=N.getFrameExtents();l.multiply(se),r.copy(N.mapSize),(l.x>b||l.y>b)&&(l.x>b&&(r.x=Math.floor(b/se.x),l.x=r.x*se.x,N.mapSize.x=r.x),l.y>b&&(r.y=Math.floor(b/se.y),l.y=r.y*se.y,N.mapSize.y=r.y));const Z=e.state.buffers.depth.getReversed();if(N.camera._reversedDepth=Z,N.map===null||O===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===An){if(V.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Ut(l.x,l.y,{format:Un,type:qt,minFilter:xt,magFilter:xt,generateMipmaps:!1}),N.map.texture.name=V.name+".shadowMap",N.map.depthTexture=new ei(l.x,l.y,Yt),N.map.depthTexture.name=V.name+".shadowMapDepth",N.map.depthTexture.format=vn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=kt,N.map.depthTexture.magFilter=kt}else V.isPointLight?(N.map=new so(l.x),N.map.depthTexture=new bs(l.x,nn)):(N.map=new Ut(l.x,l.y),N.map.depthTexture=new ei(l.x,l.y,nn)),N.map.depthTexture.name=V.name+".shadowMap",N.map.depthTexture.format=vn,this.type===qn?(N.map.depthTexture.compareFunction=Z?zi:Vi,N.map.depthTexture.minFilter=xt,N.map.depthTexture.magFilter=xt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=kt,N.map.depthTexture.magFilter=kt);N.camera.updateProjectionMatrix()}const ue=N.map.isWebGLCubeRenderTarget?6:1;for(let W=0;W<ue;W++){if(N.map.isWebGLCubeRenderTarget)e.setRenderTarget(N.map,W),e.clear();else{W===0&&(e.setRenderTarget(N.map),e.clear());const G=N.getViewport(W);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),y.viewport(a)}if(V.isPointLight){const G=N.camera,ge=N.matrix,me=V.distance||G.far;me!==G.far&&(G.far=me,G.updateProjectionMatrix()),Tn.setFromMatrixPosition(V.matrixWorld),G.position.copy(Tn),Ri.copy(G.position),Ri.add(Zd[W]),G.up.copy(jd[W]),G.lookAt(Ri),G.updateMatrixWorld(),ge.makeTranslation(-Tn.x,-Tn.y,-Tn.z),va.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),N._frustum.setFromProjectionMatrix(va,G.coordinateSystem,G.reversedDepth)}else N.updateMatrices(V);i=N.getFrustum(),w(L,M,N.camera,V,this.type)}N.isPointLightShadow!==!0&&this.type===An&&S(N,M),N.needsUpdate=!1}o=this.type,c.needsUpdate=!1,e.setRenderTarget(A,X,F)};function S(D,L){const M=n.update(g);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ut(l.x,l.y,{format:Un,type:qt})),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,e.setRenderTarget(D.mapPass),e.clear(),e.renderBufferDirect(L,null,M,d,g,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,e.setRenderTarget(D.map),e.clear(),e.renderBufferDirect(L,null,M,f,g,null)}function T(D,L,M,A){let X=null;const F=M.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(F!==void 0)X=F;else if(X=M.isPointLight===!0?m:s,e.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const y=X.uuid,O=L.uuid;let u=v[y];u===void 0&&(u={},v[y]=u);let B=u[O];B===void 0&&(B=X.clone(),u[O]=B,L.addEventListener("dispose",P)),X=B}if(X.visible=L.visible,X.wireframe=L.wireframe,A===An?X.side=L.shadowSide!==null?L.shadowSide:L.side:X.side=L.shadowSide!==null?L.shadowSide:E[L.side],X.alphaMap=L.alphaMap,X.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,X.map=L.map,X.clipShadows=L.clipShadows,X.clippingPlanes=L.clippingPlanes,X.clipIntersection=L.clipIntersection,X.displacementMap=L.displacementMap,X.displacementScale=L.displacementScale,X.displacementBias=L.displacementBias,X.wireframeLinewidth=L.wireframeLinewidth,X.linewidth=L.linewidth,M.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const y=e.properties.get(X);y.light=M}return X}function w(D,L,M,A,X){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&X===An)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,D.matrixWorld);const O=n.update(D),u=D.material;if(Array.isArray(u)){const B=O.groups;for(let V=0,N=B.length;V<N;V++){const se=B[V],Z=u[se.materialIndex];if(Z&&Z.visible){const ue=T(D,Z,A,X);D.onBeforeShadow(e,D,L,M,O,ue,se),e.renderBufferDirect(M,null,O,ue,D,se),D.onAfterShadow(e,D,L,M,O,ue,se)}}}else if(u.visible){const B=T(D,u,A,X);D.onBeforeShadow(e,D,L,M,O,B,null),e.renderBufferDirect(M,null,O,B,D,null),D.onAfterShadow(e,D,L,M,O,B,null)}}const y=D.children;for(let O=0,u=y.length;O<u;O++)w(y[O],L,M,A,X)}function P(D){D.target.removeEventListener("dispose",P);for(const M in v){const A=v[M],X=D.target.uuid;X in A&&(A[X].dispose(),delete A[X])}}}function Qd(e,n){function t(){let z=!1;const xe=new St;let Se=null;const Re=new St(0,0,0,0);return{setMask:function(pe){Se!==pe&&!z&&(e.colorMask(pe,pe,pe,pe),Se=pe)},setLocked:function(pe){z=pe},setClear:function(pe,oe,Le,He,nt){nt===!0&&(pe*=He,oe*=He,Le*=He),xe.set(pe,oe,Le,He),Re.equals(xe)===!1&&(e.clearColor(pe,oe,Le,He),Re.copy(xe))},reset:function(){z=!1,Se=null,Re.set(-1,0,0,0)}}}function i(){let z=!1,xe=!1,Se=null,Re=null,pe=null;return{setReversed:function(oe){if(xe!==oe){const Le=n.get("EXT_clip_control");oe?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),xe=oe;const He=pe;pe=null,this.setClear(He)}},getReversed:function(){return xe},setTest:function(oe){oe?he(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(oe){Se!==oe&&!z&&(e.depthMask(oe),Se=oe)},setFunc:function(oe){if(xe&&(oe=Js[oe]),Re!==oe){switch(oe){case Os:e.depthFunc(e.NEVER);break;case Ns:e.depthFunc(e.ALWAYS);break;case Is:e.depthFunc(e.LESS);break;case lr:e.depthFunc(e.LEQUAL);break;case Us:e.depthFunc(e.EQUAL);break;case Ls:e.depthFunc(e.GEQUAL);break;case Ds:e.depthFunc(e.GREATER);break;case Ps:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Re=oe}},setLocked:function(oe){z=oe},setClear:function(oe){pe!==oe&&(pe=oe,xe&&(oe=1-oe),e.clearDepth(oe))},reset:function(){z=!1,Se=null,Re=null,pe=null,xe=!1}}}function l(){let z=!1,xe=null,Se=null,Re=null,pe=null,oe=null,Le=null,He=null,nt=null;return{setTest:function(Ze){z||(Ze?he(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(Ze){xe!==Ze&&!z&&(e.stencilMask(Ze),xe=Ze)},setFunc:function(Ze,Nt,Ot){(Se!==Ze||Re!==Nt||pe!==Ot)&&(e.stencilFunc(Ze,Nt,Ot),Se=Ze,Re=Nt,pe=Ot)},setOp:function(Ze,Nt,Ot){(oe!==Ze||Le!==Nt||He!==Ot)&&(e.stencilOp(Ze,Nt,Ot),oe=Ze,Le=Nt,He=Ot)},setLocked:function(Ze){z=Ze},setClear:function(Ze){nt!==Ze&&(e.clearStencil(Ze),nt=Ze)},reset:function(){z=!1,xe=null,Se=null,Re=null,pe=null,oe=null,Le=null,He=null,nt=null}}}const r=new t,a=new i,s=new l,m=new WeakMap,v=new WeakMap;let b={},E={},d=new WeakMap,f=[],x=null,g=!1,c=null,o=null,S=null,T=null,w=null,P=null,D=null,L=new at(0,0,0),M=0,A=!1,X=null,F=null,y=null,O=null,u=null;const B=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,N=0;const se=e.getParameter(e.VERSION);se.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(se)[1]),V=N>=1):se.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),V=N>=2);let Z=null,ue={};const W=e.getParameter(e.SCISSOR_BOX),G=e.getParameter(e.VIEWPORT),ge=new St().fromArray(W),me=new St().fromArray(G);function fe(z,xe,Se,Re){const pe=new Uint8Array(4),oe=e.createTexture();e.bindTexture(z,oe),e.texParameteri(z,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(z,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Le=0;Le<Se;Le++)z===e.TEXTURE_3D||z===e.TEXTURE_2D_ARRAY?e.texImage3D(xe,0,e.RGBA,1,1,Re,0,e.RGBA,e.UNSIGNED_BYTE,pe):e.texImage2D(xe+Le,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,pe);return oe}const ee={};ee[e.TEXTURE_2D]=fe(e.TEXTURE_2D,e.TEXTURE_2D,1),ee[e.TEXTURE_CUBE_MAP]=fe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[e.TEXTURE_2D_ARRAY]=fe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ee[e.TEXTURE_3D]=fe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),he(e.DEPTH_TEST),a.setFunc(lr),K(!1),I(Hr),he(e.CULL_FACE),h(Gt);function he(z){b[z]!==!0&&(e.enable(z),b[z]=!0)}function le(z){b[z]!==!1&&(e.disable(z),b[z]=!1)}function ie(z,xe){return E[z]!==xe?(e.bindFramebuffer(z,xe),E[z]=xe,z===e.DRAW_FRAMEBUFFER&&(E[e.FRAMEBUFFER]=xe),z===e.FRAMEBUFFER&&(E[e.DRAW_FRAMEBUFFER]=xe),!0):!1}function de(z,xe){let Se=f,Re=!1;if(z){Se=d.get(xe),Se===void 0&&(Se=[],d.set(xe,Se));const pe=z.textures;if(Se.length!==pe.length||Se[0]!==e.COLOR_ATTACHMENT0){for(let oe=0,Le=pe.length;oe<Le;oe++)Se[oe]=e.COLOR_ATTACHMENT0+oe;Se.length=pe.length,Re=!0}}else Se[0]!==e.BACK&&(Se[0]=e.BACK,Re=!0);Re&&e.drawBuffers(Se)}function _e(z){return x!==z?(e.useProgram(z),x=z,!0):!1}const Ge={[bn]:e.FUNC_ADD,[qo]:e.FUNC_SUBTRACT,[Ko]:e.FUNC_REVERSE_SUBTRACT};Ge[el]=e.MIN,Ge[tl]=e.MAX;const Fe={[cs]:e.ZERO,[ls]:e.ONE,[ss]:e.SRC_COLOR,[os]:e.SRC_ALPHA,[as]:e.SRC_ALPHA_SATURATE,[rs]:e.DST_COLOR,[is]:e.DST_ALPHA,[ns]:e.ONE_MINUS_SRC_COLOR,[ts]:e.ONE_MINUS_SRC_ALPHA,[es]:e.ONE_MINUS_DST_COLOR,[Jo]:e.ONE_MINUS_DST_ALPHA,[Qo]:e.CONSTANT_COLOR,[$o]:e.ONE_MINUS_CONSTANT_COLOR,[jo]:e.CONSTANT_ALPHA,[Zo]:e.ONE_MINUS_CONSTANT_ALPHA};function h(z,xe,Se,Re,pe,oe,Le,He,nt,Ze){if(z===Gt){g===!0&&(le(e.BLEND),g=!1);return}if(g===!1&&(he(e.BLEND),g=!0),z!==ks){if(z!==c||Ze!==A){if((o!==bn||w!==bn)&&(e.blendEquation(e.FUNC_ADD),o=bn,w=bn),Ze)switch(z){case Zn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Wr:e.blendFunc(e.ONE,e.ONE);break;case Vr:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case zr:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:rt("WebGLState: Invalid blending: ",z);break}else switch(z){case Zn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Wr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Vr:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zr:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",z);break}S=null,T=null,P=null,D=null,L.set(0,0,0),M=0,c=z,A=Ze}return}pe=pe||xe,oe=oe||Se,Le=Le||Re,(xe!==o||pe!==w)&&(e.blendEquationSeparate(Ge[xe],Ge[pe]),o=xe,w=pe),(Se!==S||Re!==T||oe!==P||Le!==D)&&(e.blendFuncSeparate(Fe[Se],Fe[Re],Fe[oe],Fe[Le]),S=Se,T=Re,P=oe,D=Le),(He.equals(L)===!1||nt!==M)&&(e.blendColor(He.r,He.g,He.b,nt),L.copy(He),M=nt),c=z,A=!1}function J(z,xe){z.side===Ft?le(e.CULL_FACE):he(e.CULL_FACE);let Se=z.side===bt;xe&&(Se=!Se),K(Se),z.blending===Zn&&z.transparent===!1?h(Gt):h(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const Re=z.stencilWrite;s.setTest(Re),Re&&(s.setMask(z.stencilWriteMask),s.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),s.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),H(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?he(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function K(z){X!==z&&(z?e.frontFace(e.CW):e.frontFace(e.CCW),X=z)}function I(z){z!==Fs?(he(e.CULL_FACE),z!==F&&(z===Hr?e.cullFace(e.BACK):z===Bs?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):le(e.CULL_FACE),F=z}function p(z){z!==y&&(V&&e.lineWidth(z),y=z)}function H(z,xe,Se){z?(he(e.POLYGON_OFFSET_FILL),(O!==xe||u!==Se)&&(O=xe,u=Se,a.getReversed()&&(xe=-xe),e.polygonOffset(xe,Se))):le(e.POLYGON_OFFSET_FILL)}function ne(z){z?he(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function ae(z){z===void 0&&(z=e.TEXTURE0+B-1),Z!==z&&(e.activeTexture(z),Z=z)}function k(z,xe,Se){Se===void 0&&(Z===null?Se=e.TEXTURE0+B-1:Se=Z);let Re=ue[Se];Re===void 0&&(Re={type:void 0,texture:void 0},ue[Se]=Re),(Re.type!==z||Re.texture!==xe)&&(Z!==Se&&(e.activeTexture(Se),Z=Se),e.bindTexture(z,xe||ee[z]),Re.type=z,Re.texture=xe)}function R(){const z=ue[Z];z!==void 0&&z.type!==void 0&&(e.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function _(){try{e.compressedTexImage2D(...arguments)}catch(z){rt("WebGLState:",z)}}function U(){try{e.compressedTexImage3D(...arguments)}catch(z){rt("WebGLState:",z)}}function q(){try{e.texSubImage2D(...arguments)}catch(z){rt("WebGLState:",z)}}function re(){try{e.texSubImage3D(...arguments)}catch(z){rt("WebGLState:",z)}}function j(){try{e.compressedTexSubImage2D(...arguments)}catch(z){rt("WebGLState:",z)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(z){rt("WebGLState:",z)}}function Ee(){try{e.texStorage2D(...arguments)}catch(z){rt("WebGLState:",z)}}function Pe(){try{e.texStorage3D(...arguments)}catch(z){rt("WebGLState:",z)}}function Be(){try{e.texImage2D(...arguments)}catch(z){rt("WebGLState:",z)}}function ce(){try{e.texImage3D(...arguments)}catch(z){rt("WebGLState:",z)}}function ve(z){ge.equals(z)===!1&&(e.scissor(z.x,z.y,z.z,z.w),ge.copy(z))}function De(z){me.equals(z)===!1&&(e.viewport(z.x,z.y,z.z,z.w),me.copy(z))}function ye(z,xe){let Se=v.get(xe);Se===void 0&&(Se=new WeakMap,v.set(xe,Se));let Re=Se.get(z);Re===void 0&&(Re=e.getUniformBlockIndex(xe,z.name),Se.set(z,Re))}function we(z,xe){const Re=v.get(xe).get(z);m.get(xe)!==Re&&(e.uniformBlockBinding(xe,Re,z.__bindingPointIndex),m.set(xe,Re))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),b={},Z=null,ue={},E={},d=new WeakMap,f=[],x=null,g=!1,c=null,o=null,S=null,T=null,w=null,P=null,D=null,L=new at(0,0,0),M=0,A=!1,X=null,F=null,y=null,O=null,u=null,ge.set(0,0,e.canvas.width,e.canvas.height),me.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),s.reset()}return{buffers:{color:r,depth:a,stencil:s},enable:he,disable:le,bindFramebuffer:ie,drawBuffers:de,useProgram:_e,setBlending:h,setMaterial:J,setFlipSided:K,setCullFace:I,setLineWidth:p,setPolygonOffset:H,setScissorTest:ne,activeTexture:ae,bindTexture:k,unbindTexture:R,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:Be,texImage3D:ce,updateUBOMapping:ye,uniformBlockBinding:we,texStorage2D:Ee,texStorage3D:Pe,texSubImage2D:q,texSubImage3D:re,compressedTexSubImage2D:j,compressedTexSubImage3D:Me,scissor:ve,viewport:De,reset:Ve}}function Jd(e,n,t,i,l,r,a){const s=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new Qe,b=new WeakMap;let E;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,_){return f?new OffscreenCanvas(R,_):qs("canvas")}function g(R,_,U){let q=1;const re=k(R);if((re.width>U||re.height>U)&&(q=U/Math.max(re.width,re.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(q*re.width),Me=Math.floor(q*re.height);E===void 0&&(E=x(j,Me));const Ee=_?x(j,Me):E;return Ee.width=j,Ee.height=Me,Ee.getContext("2d").drawImage(R,0,0,j,Me),tt("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+j+"x"+Me+")."),Ee}else return"data"in R&&tt("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function c(R){return R.generateMipmaps}function o(R){e.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function T(R,_,U,q,re=!1){if(R!==null){if(e[R]!==void 0)return e[R];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=_;if(_===e.RED&&(U===e.FLOAT&&(j=e.R32F),U===e.HALF_FLOAT&&(j=e.R16F),U===e.UNSIGNED_BYTE&&(j=e.R8)),_===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(j=e.R8UI),U===e.UNSIGNED_SHORT&&(j=e.R16UI),U===e.UNSIGNED_INT&&(j=e.R32UI),U===e.BYTE&&(j=e.R8I),U===e.SHORT&&(j=e.R16I),U===e.INT&&(j=e.R32I)),_===e.RG&&(U===e.FLOAT&&(j=e.RG32F),U===e.HALF_FLOAT&&(j=e.RG16F),U===e.UNSIGNED_BYTE&&(j=e.RG8)),_===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(j=e.RG8UI),U===e.UNSIGNED_SHORT&&(j=e.RG16UI),U===e.UNSIGNED_INT&&(j=e.RG32UI),U===e.BYTE&&(j=e.RG8I),U===e.SHORT&&(j=e.RG16I),U===e.INT&&(j=e.RG32I)),_===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(j=e.RGB8UI),U===e.UNSIGNED_SHORT&&(j=e.RGB16UI),U===e.UNSIGNED_INT&&(j=e.RGB32UI),U===e.BYTE&&(j=e.RGB8I),U===e.SHORT&&(j=e.RGB16I),U===e.INT&&(j=e.RGB32I)),_===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(j=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(j=e.RGBA16UI),U===e.UNSIGNED_INT&&(j=e.RGBA32UI),U===e.BYTE&&(j=e.RGBA8I),U===e.SHORT&&(j=e.RGBA16I),U===e.INT&&(j=e.RGBA32I)),_===e.RGB&&(U===e.UNSIGNED_INT_5_9_9_9_REV&&(j=e.RGB9_E5),U===e.UNSIGNED_INT_10F_11F_11F_REV&&(j=e.R11F_G11F_B10F)),_===e.RGBA){const Me=re?to:lt.getTransfer(q);U===e.FLOAT&&(j=e.RGBA32F),U===e.HALF_FLOAT&&(j=e.RGBA16F),U===e.UNSIGNED_BYTE&&(j=Me===it?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT_4_4_4_4&&(j=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(j=e.RGB5_A1)}return(j===e.R16F||j===e.R32F||j===e.RG16F||j===e.RG32F||j===e.RGBA16F||j===e.RGBA32F)&&n.get("EXT_color_buffer_float"),j}function w(R,_){let U;return R?_===null||_===nn||_===Ln?U=e.DEPTH24_STENCIL8:_===Yt?U=e.DEPTH32F_STENCIL8:_===ti&&(U=e.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===nn||_===Ln?U=e.DEPTH_COMPONENT24:_===Yt?U=e.DEPTH_COMPONENT32F:_===ti&&(U=e.DEPTH_COMPONENT16),U}function P(R,_){return c(R)===!0||R.isFramebufferTexture&&R.minFilter!==kt&&R.minFilter!==xt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function D(R){const _=R.target;_.removeEventListener("dispose",D),M(_),_.isVideoTexture&&b.delete(_)}function L(R){const _=R.target;_.removeEventListener("dispose",L),X(_)}function M(R){const _=i.get(R);if(_.__webglInit===void 0)return;const U=R.source,q=d.get(U);if(q){const re=q[_.__cacheKey];re.usedTimes--,re.usedTimes===0&&A(R),Object.keys(q).length===0&&d.delete(U)}i.remove(R)}function A(R){const _=i.get(R);e.deleteTexture(_.__webglTexture);const U=R.source,q=d.get(U);delete q[_.__cacheKey],a.memory.textures--}function X(R){const _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let re=0;re<_.__webglFramebuffer[q].length;re++)e.deleteFramebuffer(_.__webglFramebuffer[q][re]);else e.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)e.deleteFramebuffer(_.__webglFramebuffer[q]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=R.textures;for(let q=0,re=U.length;q<re;q++){const j=i.get(U[q]);j.__webglTexture&&(e.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(U[q])}i.remove(R)}let F=0;function y(){F=0}function O(){const R=F;return R>=l.maxTextures&&tt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l.maxTextures),F+=1,R}function u(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function B(R,_){const U=i.get(R);if(R.isVideoTexture&&ne(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const q=R.image;if(q===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(U,R,_);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+_)}function V(R,_){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){ee(U,R,_);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+_)}function N(R,_){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){ee(U,R,_);return}t.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+_)}function se(R,_){const U=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){he(U,R,_);return}t.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+_)}const Z={[us]:e.REPEAT,[Ui]:e.CLAMP_TO_EDGE,[fs]:e.MIRRORED_REPEAT},ue={[kt]:e.NEAREST,[ds]:e.NEAREST_MIPMAP_NEAREST,[Hn]:e.NEAREST_MIPMAP_LINEAR,[xt]:e.LINEAR,[mi]:e.LINEAR_MIPMAP_NEAREST,[un]:e.LINEAR_MIPMAP_LINEAR},W={[vs]:e.NEVER,[gs]:e.ALWAYS,[_s]:e.LESS,[Vi]:e.LEQUAL,[ms]:e.EQUAL,[zi]:e.GEQUAL,[ps]:e.GREATER,[hs]:e.NOTEQUAL};function G(R,_){if(_.type===Yt&&n.has("OES_texture_float_linear")===!1&&(_.magFilter===xt||_.magFilter===mi||_.magFilter===Hn||_.magFilter===un||_.minFilter===xt||_.minFilter===mi||_.minFilter===Hn||_.minFilter===un)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,Z[_.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,Z[_.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,Z[_.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,ue[_.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,ue[_.minFilter]),_.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,W[_.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===kt||_.minFilter!==Hn&&_.minFilter!==un||_.type===Yt&&n.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const U=n.get("EXT_texture_filter_anisotropic");e.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,l.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ge(R,_){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",D));const q=_.source;let re=d.get(q);re===void 0&&(re={},d.set(q,re));const j=u(_);if(j!==R.__cacheKey){re[j]===void 0&&(re[j]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,U=!0),re[j].usedTimes++;const Me=re[R.__cacheKey];Me!==void 0&&(re[R.__cacheKey].usedTimes--,Me.usedTimes===0&&A(_)),R.__cacheKey=j,R.__webglTexture=re[j].texture}return U}function me(R,_,U){return Math.floor(Math.floor(R/U)/_)}function fe(R,_,U,q){const j=R.updateRanges;if(j.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,U,q,_.data);else{j.sort((ce,ve)=>ce.start-ve.start);let Me=0;for(let ce=1;ce<j.length;ce++){const ve=j[Me],De=j[ce],ye=ve.start+ve.count,we=me(De.start,_.width,4),Ve=me(ve.start,_.width,4);De.start<=ye+1&&we===Ve&&me(De.start+De.count-1,_.width,4)===we?ve.count=Math.max(ve.count,De.start+De.count-ve.start):(++Me,j[Me]=De)}j.length=Me+1;const Ee=e.getParameter(e.UNPACK_ROW_LENGTH),Pe=e.getParameter(e.UNPACK_SKIP_PIXELS),Be=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let ce=0,ve=j.length;ce<ve;ce++){const De=j[ce],ye=Math.floor(De.start/4),we=Math.ceil(De.count/4),Ve=ye%_.width,z=Math.floor(ye/_.width),xe=we,Se=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ve),e.pixelStorei(e.UNPACK_SKIP_ROWS,z),t.texSubImage2D(e.TEXTURE_2D,0,Ve,z,xe,Se,U,q,_.data)}R.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,Ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Pe),e.pixelStorei(e.UNPACK_SKIP_ROWS,Be)}}function ee(R,_,U){let q=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=e.TEXTURE_3D);const re=ge(R,_),j=_.source;t.bindTexture(q,R.__webglTexture,e.TEXTURE0+U);const Me=i.get(j);if(j.version!==Me.__version||re===!0){t.activeTexture(e.TEXTURE0+U);const Ee=lt.getPrimaries(lt.workingColorSpace),Pe=_.colorSpace===ln?null:lt.getPrimaries(_.colorSpace),Be=_.colorSpace===ln||Ee===Pe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ce=g(_.image,!1,l.maxTextureSize);ce=ae(_,ce);const ve=r.convert(_.format,_.colorSpace),De=r.convert(_.type);let ye=T(_.internalFormat,ve,De,_.colorSpace,_.isVideoTexture);G(q,_);let we;const Ve=_.mipmaps,z=_.isVideoTexture!==!0,xe=Me.__version===void 0||re===!0,Se=j.dataReady,Re=P(_,ce);if(_.isDepthTexture)ye=w(_.format===dn,_.type),xe&&(z?t.texStorage2D(e.TEXTURE_2D,1,ye,ce.width,ce.height):t.texImage2D(e.TEXTURE_2D,0,ye,ce.width,ce.height,0,ve,De,null));else if(_.isDataTexture)if(Ve.length>0){z&&xe&&t.texStorage2D(e.TEXTURE_2D,Re,ye,Ve[0].width,Ve[0].height);for(let pe=0,oe=Ve.length;pe<oe;pe++)we=Ve[pe],z?Se&&t.texSubImage2D(e.TEXTURE_2D,pe,0,0,we.width,we.height,ve,De,we.data):t.texImage2D(e.TEXTURE_2D,pe,ye,we.width,we.height,0,ve,De,we.data);_.generateMipmaps=!1}else z?(xe&&t.texStorage2D(e.TEXTURE_2D,Re,ye,ce.width,ce.height),Se&&fe(_,ce,ve,De)):t.texImage2D(e.TEXTURE_2D,0,ye,ce.width,ce.height,0,ve,De,ce.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){z&&xe&&t.texStorage3D(e.TEXTURE_2D_ARRAY,Re,ye,Ve[0].width,Ve[0].height,ce.depth);for(let pe=0,oe=Ve.length;pe<oe;pe++)if(we=Ve[pe],_.format!==Bt)if(ve!==null)if(z){if(Se)if(_.layerUpdates.size>0){const Le=Xr(we.width,we.height,_.format,_.type);for(const He of _.layerUpdates){const nt=we.data.subarray(He*Le/we.data.BYTES_PER_ELEMENT,(He+1)*Le/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,pe,0,0,He,we.width,we.height,1,ve,nt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,pe,0,0,0,we.width,we.height,ce.depth,ve,we.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,pe,ye,we.width,we.height,ce.depth,0,we.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Se&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,pe,0,0,0,we.width,we.height,ce.depth,ve,De,we.data):t.texImage3D(e.TEXTURE_2D_ARRAY,pe,ye,we.width,we.height,ce.depth,0,ve,De,we.data)}else{z&&xe&&t.texStorage2D(e.TEXTURE_2D,Re,ye,Ve[0].width,Ve[0].height);for(let pe=0,oe=Ve.length;pe<oe;pe++)we=Ve[pe],_.format!==Bt?ve!==null?z?Se&&t.compressedTexSubImage2D(e.TEXTURE_2D,pe,0,0,we.width,we.height,ve,we.data):t.compressedTexImage2D(e.TEXTURE_2D,pe,ye,we.width,we.height,0,we.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Se&&t.texSubImage2D(e.TEXTURE_2D,pe,0,0,we.width,we.height,ve,De,we.data):t.texImage2D(e.TEXTURE_2D,pe,ye,we.width,we.height,0,ve,De,we.data)}else if(_.isDataArrayTexture)if(z){if(xe&&t.texStorage3D(e.TEXTURE_2D_ARRAY,Re,ye,ce.width,ce.height,ce.depth),Se)if(_.layerUpdates.size>0){const pe=Xr(ce.width,ce.height,_.format,_.type);for(const oe of _.layerUpdates){const Le=ce.data.subarray(oe*pe/ce.data.BYTES_PER_ELEMENT,(oe+1)*pe/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,oe,ce.width,ce.height,1,ve,De,Le)}_.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ve,De,ce.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,ye,ce.width,ce.height,ce.depth,0,ve,De,ce.data);else if(_.isData3DTexture)z?(xe&&t.texStorage3D(e.TEXTURE_3D,Re,ye,ce.width,ce.height,ce.depth),Se&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ve,De,ce.data)):t.texImage3D(e.TEXTURE_3D,0,ye,ce.width,ce.height,ce.depth,0,ve,De,ce.data);else if(_.isFramebufferTexture){if(xe)if(z)t.texStorage2D(e.TEXTURE_2D,Re,ye,ce.width,ce.height);else{let pe=ce.width,oe=ce.height;for(let Le=0;Le<Re;Le++)t.texImage2D(e.TEXTURE_2D,Le,ye,pe,oe,0,ve,De,null),pe>>=1,oe>>=1}}else if(Ve.length>0){if(z&&xe){const pe=k(Ve[0]);t.texStorage2D(e.TEXTURE_2D,Re,ye,pe.width,pe.height)}for(let pe=0,oe=Ve.length;pe<oe;pe++)we=Ve[pe],z?Se&&t.texSubImage2D(e.TEXTURE_2D,pe,0,0,ve,De,we):t.texImage2D(e.TEXTURE_2D,pe,ye,ve,De,we);_.generateMipmaps=!1}else if(z){if(xe){const pe=k(ce);t.texStorage2D(e.TEXTURE_2D,Re,ye,pe.width,pe.height)}Se&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ve,De,ce)}else t.texImage2D(e.TEXTURE_2D,0,ye,ve,De,ce);c(_)&&o(q),Me.__version=j.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function he(R,_,U){if(_.image.length!==6)return;const q=ge(R,_),re=_.source;t.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+U);const j=i.get(re);if(re.version!==j.__version||q===!0){t.activeTexture(e.TEXTURE0+U);const Me=lt.getPrimaries(lt.workingColorSpace),Ee=_.colorSpace===ln?null:lt.getPrimaries(_.colorSpace),Pe=_.colorSpace===ln||Me===Ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Be=_.isCompressedTexture||_.image[0].isCompressedTexture,ce=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let oe=0;oe<6;oe++)!Be&&!ce?ve[oe]=g(_.image[oe],!0,l.maxCubemapSize):ve[oe]=ce?_.image[oe].image:_.image[oe],ve[oe]=ae(_,ve[oe]);const De=ve[0],ye=r.convert(_.format,_.colorSpace),we=r.convert(_.type),Ve=T(_.internalFormat,ye,we,_.colorSpace),z=_.isVideoTexture!==!0,xe=j.__version===void 0||q===!0,Se=re.dataReady;let Re=P(_,De);G(e.TEXTURE_CUBE_MAP,_);let pe;if(Be){z&&xe&&t.texStorage2D(e.TEXTURE_CUBE_MAP,Re,Ve,De.width,De.height);for(let oe=0;oe<6;oe++){pe=ve[oe].mipmaps;for(let Le=0;Le<pe.length;Le++){const He=pe[Le];_.format!==Bt?ye!==null?z?Se&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,0,0,He.width,He.height,ye,He.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,Ve,He.width,He.height,0,He.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Se&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,0,0,He.width,He.height,ye,we,He.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,Ve,He.width,He.height,0,ye,we,He.data)}}}else{if(pe=_.mipmaps,z&&xe){pe.length>0&&Re++;const oe=k(ve[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,Re,Ve,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ce){z?Se&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ve[oe].width,ve[oe].height,ye,we,ve[oe].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,ve[oe].width,ve[oe].height,0,ye,we,ve[oe].data);for(let Le=0;Le<pe.length;Le++){const nt=pe[Le].image[oe].image;z?Se&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,0,0,nt.width,nt.height,ye,we,nt.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,Ve,nt.width,nt.height,0,ye,we,nt.data)}}else{z?Se&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ye,we,ve[oe]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,ye,we,ve[oe]);for(let Le=0;Le<pe.length;Le++){const He=pe[Le];z?Se&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,0,0,ye,we,He.image[oe]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,Ve,ye,we,He.image[oe])}}}c(_)&&o(e.TEXTURE_CUBE_MAP),j.__version=re.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function le(R,_,U,q,re,j){const Me=r.convert(U.format,U.colorSpace),Ee=r.convert(U.type),Pe=T(U.internalFormat,Me,Ee,U.colorSpace),Be=i.get(_),ce=i.get(U);if(ce.__renderTarget=_,!Be.__hasExternalTextures){const ve=Math.max(1,_.width>>j),De=Math.max(1,_.height>>j);re===e.TEXTURE_3D||re===e.TEXTURE_2D_ARRAY?t.texImage3D(re,j,Pe,ve,De,_.depth,0,Me,Ee,null):t.texImage2D(re,j,Pe,ve,De,0,Me,Ee,null)}t.bindFramebuffer(e.FRAMEBUFFER,R),H(_)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,re,ce.__webglTexture,0,p(_)):(re===e.TEXTURE_2D||re>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,re,ce.__webglTexture,j),t.bindFramebuffer(e.FRAMEBUFFER,null)}function ie(R,_,U){if(e.bindRenderbuffer(e.RENDERBUFFER,R),_.depthBuffer){const q=_.depthTexture,re=q&&q.isDepthTexture?q.type:null,j=w(_.stencilBuffer,re),Me=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;H(_)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,p(_),j,_.width,_.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,p(_),j,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,j,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Me,e.RENDERBUFFER,R)}else{const q=_.textures;for(let re=0;re<q.length;re++){const j=q[re],Me=r.convert(j.format,j.colorSpace),Ee=r.convert(j.type),Pe=T(j.internalFormat,Me,Ee,j.colorSpace);H(_)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,p(_),Pe,_.width,_.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,p(_),Pe,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,Pe,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function de(R,_,U){const q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=i.get(_.depthTexture);if(re.__renderTarget=_,(!re.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(re.__webglInit===void 0&&(re.__webglInit=!0,_.depthTexture.addEventListener("dispose",D)),re.__webglTexture===void 0){re.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,re.__webglTexture),G(e.TEXTURE_CUBE_MAP,_.depthTexture);const Be=r.convert(_.depthTexture.format),ce=r.convert(_.depthTexture.type);let ve;_.depthTexture.format===vn?ve=e.DEPTH_COMPONENT24:_.depthTexture.format===dn&&(ve=e.DEPTH24_STENCIL8);for(let De=0;De<6;De++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,ve,_.width,_.height,0,Be,ce,null)}}else B(_.depthTexture,0);const j=re.__webglTexture,Me=p(_),Ee=q?e.TEXTURE_CUBE_MAP_POSITIVE_X+U:e.TEXTURE_2D,Pe=_.depthTexture.format===dn?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===vn)H(_)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Pe,Ee,j,0,Me):e.framebufferTexture2D(e.FRAMEBUFFER,Pe,Ee,j,0);else if(_.depthTexture.format===dn)H(_)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Pe,Ee,j,0,Me):e.framebufferTexture2D(e.FRAMEBUFFER,Pe,Ee,j,0);else throw new Error("Unknown depthTexture format")}function _e(R){const _=i.get(R),U=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const re=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",re)};q.addEventListener("dispose",re),_.__depthDisposeCallback=re}_.__boundDepthTexture=q}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let q=0;q<6;q++)de(_.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?de(_.__webglFramebuffer[0],R,0):de(_.__webglFramebuffer,R,0)}else if(U){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=e.createRenderbuffer(),ie(_.__webglDepthbuffer[q],R,!1);else{const re=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,j),e.framebufferRenderbuffer(e.FRAMEBUFFER,re,e.RENDERBUFFER,j)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),ie(_.__webglDepthbuffer,R,!1);else{const re=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,j),e.framebufferRenderbuffer(e.FRAMEBUFFER,re,e.RENDERBUFFER,j)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ge(R,_,U){const q=i.get(R);_!==void 0&&le(q.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&_e(R)}function Fe(R){const _=R.texture,U=i.get(R),q=i.get(_);R.addEventListener("dispose",L);const re=R.textures,j=R.isWebGLCubeRenderTarget===!0,Me=re.length>1;if(Me||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=_.version,a.memory.textures++),j){U.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[Ee]=[];for(let Pe=0;Pe<_.mipmaps.length;Pe++)U.__webglFramebuffer[Ee][Pe]=e.createFramebuffer()}else U.__webglFramebuffer[Ee]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let Ee=0;Ee<_.mipmaps.length;Ee++)U.__webglFramebuffer[Ee]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(Me)for(let Ee=0,Pe=re.length;Ee<Pe;Ee++){const Be=i.get(re[Ee]);Be.__webglTexture===void 0&&(Be.__webglTexture=e.createTexture(),a.memory.textures++)}if(R.samples>0&&H(R)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Ee=0;Ee<re.length;Ee++){const Pe=re[Ee];U.__webglColorRenderbuffer[Ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[Ee]);const Be=r.convert(Pe.format,Pe.colorSpace),ce=r.convert(Pe.type),ve=T(Pe.internalFormat,Be,ce,Pe.colorSpace,R.isXRRenderTarget===!0),De=p(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,De,ve,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.RENDERBUFFER,U.__webglColorRenderbuffer[Ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),ie(U.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(j){t.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),G(e.TEXTURE_CUBE_MAP,_);for(let Ee=0;Ee<6;Ee++)if(_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)le(U.__webglFramebuffer[Ee][Pe],R,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe);else le(U.__webglFramebuffer[Ee],R,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);c(_)&&o(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let Ee=0,Pe=re.length;Ee<Pe;Ee++){const Be=re[Ee],ce=i.get(Be);let ve=e.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ve,ce.__webglTexture),G(ve,Be),le(U.__webglFramebuffer,R,Be,e.COLOR_ATTACHMENT0+Ee,ve,0),c(Be)&&o(ve)}t.unbindTexture()}else{let Ee=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ee=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(Ee,q.__webglTexture),G(Ee,_),_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)le(U.__webglFramebuffer[Pe],R,_,e.COLOR_ATTACHMENT0,Ee,Pe);else le(U.__webglFramebuffer,R,_,e.COLOR_ATTACHMENT0,Ee,0);c(_)&&o(Ee),t.unbindTexture()}R.depthBuffer&&_e(R)}function h(R){const _=R.textures;for(let U=0,q=_.length;U<q;U++){const re=_[U];if(c(re)){const j=S(R),Me=i.get(re).__webglTexture;t.bindTexture(j,Me),o(j),t.unbindTexture()}}}const J=[],K=[];function I(R){if(R.samples>0){if(H(R)===!1){const _=R.textures,U=R.width,q=R.height;let re=e.COLOR_BUFFER_BIT;const j=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Me=i.get(R),Ee=_.length>1;if(Ee)for(let Be=0;Be<_.length;Be++)t.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Be,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Be,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Pe=R.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Be=0;Be<_.length;Be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=e.STENCIL_BUFFER_BIT)),Ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Me.__webglColorRenderbuffer[Be]);const ce=i.get(_[Be]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ce,0)}e.blitFramebuffer(0,0,U,q,0,0,U,q,re,e.NEAREST),m===!0&&(J.length=0,K.length=0,J.push(e.COLOR_ATTACHMENT0+Be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(J.push(j),K.push(j),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,K)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Ee)for(let Be=0;Be<_.length;Be++){t.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Be,e.RENDERBUFFER,Me.__webglColorRenderbuffer[Be]);const ce=i.get(_[Be]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Be,e.TEXTURE_2D,ce,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&m){const _=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function p(R){return Math.min(l.maxSamples,R.samples)}function H(R){const _=i.get(R);return R.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ne(R){const _=a.render.frame;b.get(R)!==_&&(b.set(R,_),R.update())}function ae(R,_){const U=R.colorSpace,q=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==si&&U!==ln&&(lt.getTransfer(U)===it?(q!==Bt||re!==Dt)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",U)),_}function k(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(v.width=R.naturalWidth||R.width,v.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(v.width=R.displayWidth,v.height=R.displayHeight):(v.width=R.width,v.height=R.height),v}this.allocateTextureUnit=O,this.resetTextureUnits=y,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=N,this.setTextureCube=se,this.rebindTextures=Ge,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=h,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=le,this.useMultisampledRTT=H,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function eh(e,n){function t(i,l=ln){let r;const a=lt.getTransfer(l);if(i===Dt)return e.UNSIGNED_BYTE;if(i===Ha)return e.UNSIGNED_SHORT_4_4_4_4;if(i===za)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Ms)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Ts)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===As)return e.BYTE;if(i===ws)return e.SHORT;if(i===ti)return e.UNSIGNED_SHORT;if(i===Wa)return e.INT;if(i===nn)return e.UNSIGNED_INT;if(i===Yt)return e.FLOAT;if(i===qt)return e.HALF_FLOAT;if(i===Rs)return e.ALPHA;if(i===ys)return e.RGB;if(i===Bt)return e.RGBA;if(i===vn)return e.DEPTH_COMPONENT;if(i===dn)return e.DEPTH_STENCIL;if(i===Cs)return e.RED;if(i===Ga)return e.RED_INTEGER;if(i===Un)return e.RG;if(i===ka)return e.RG_INTEGER;if(i===Ba)return e.RGBA_INTEGER;if(i===_i||i===gi||i===vi||i===Si)if(a===it)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_i)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Si)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_i)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vi)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Si)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cr||i===fr||i===ur||i===dr)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===cr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ur)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hr||i===pr||i===mr||i===_r||i===gr||i===vr||i===Sr)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hr||i===pr)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===mr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===_r)return r.COMPRESSED_R11_EAC;if(i===gr)return r.COMPRESSED_SIGNED_R11_EAC;if(i===vr)return r.COMPRESSED_RG11_EAC;if(i===Sr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Er||i===xr||i===br||i===Mr||i===Tr||i===Ar||i===wr||i===Rr||i===yr||i===Cr||i===Pr||i===Dr||i===Lr||i===Ur)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Er)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===br)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ar)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ur)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ir||i===Nr||i===Or)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===Ir)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Or)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fr||i===Br||i===kr||i===Gr)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Br)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ln?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const th=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nh=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ih{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Va(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Ht({vertexShader:th,fragmentShader:nh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Wi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rh extends Vo{constructor(n,t){super();const i=this;let l=null,r=1,a=null,s="local-floor",m=1,v=null,b=null,E=null,d=null,f=null,x=null;const g=typeof XRWebGLBinding<"u",c=new ih,o={},S=t.getContextAttributes();let T=null,w=null;const P=[],D=[],L=new Qe;let M=null;const A=new Kn;A.viewport=new St;const X=new Kn;X.viewport=new St;const F=[A,X],y=new Wo;let O=null,u=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let he=P[ee];return he===void 0&&(he=new pi,P[ee]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ee){let he=P[ee];return he===void 0&&(he=new pi,P[ee]=he),he.getGripSpace()},this.getHand=function(ee){let he=P[ee];return he===void 0&&(he=new pi,P[ee]=he),he.getHandSpace()};function B(ee){const he=D.indexOf(ee.inputSource);if(he===-1)return;const le=P[he];le!==void 0&&(le.update(ee.inputSource,ee.frame,v||a),le.dispatchEvent({type:ee.type,data:ee.inputSource}))}function V(){l.removeEventListener("select",B),l.removeEventListener("selectstart",B),l.removeEventListener("selectend",B),l.removeEventListener("squeeze",B),l.removeEventListener("squeezestart",B),l.removeEventListener("squeezeend",B),l.removeEventListener("end",V),l.removeEventListener("inputsourceschange",N);for(let ee=0;ee<P.length;ee++){const he=D[ee];he!==null&&(D[ee]=null,P[ee].disconnect(he))}O=null,u=null,c.reset();for(const ee in o)delete o[ee];n.setRenderTarget(T),f=null,d=null,E=null,l=null,w=null,fe.stop(),i.isPresenting=!1,n.setPixelRatio(M),n.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){s=ee,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||a},this.setReferenceSpace=function(ee){v=ee},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return E===null&&g&&(E=new XRWebGLBinding(l,t)),E},this.getFrame=function(){return x},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(T=n.getRenderTarget(),l.addEventListener("select",B),l.addEventListener("selectstart",B),l.addEventListener("selectend",B),l.addEventListener("squeeze",B),l.addEventListener("squeezestart",B),l.addEventListener("squeezeend",B),l.addEventListener("end",V),l.addEventListener("inputsourceschange",N),S.xrCompatible!==!0&&await t.makeXRCompatible(),M=n.getPixelRatio(),n.getSize(L),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,ie=null,de=null;S.depth&&(de=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=S.stencil?dn:vn,ie=S.stencil?Ln:nn);const _e={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};E=this.getBinding(),d=E.createProjectionLayer(_e),l.updateRenderState({layers:[d]}),n.setPixelRatio(1),n.setSize(d.textureWidth,d.textureHeight,!1),w=new Ut(d.textureWidth,d.textureHeight,{format:Bt,type:Dt,depthTexture:new ei(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:S.stencil,colorSpace:n.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(l,t,le),l.updateRenderState({baseLayer:f}),n.setPixelRatio(1),n.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Ut(f.framebufferWidth,f.framebufferHeight,{format:Bt,type:Dt,colorSpace:n.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),v=null,a=await l.requestReferenceSpace(s),fe.setContext(l),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function N(ee){for(let he=0;he<ee.removed.length;he++){const le=ee.removed[he],ie=D.indexOf(le);ie>=0&&(D[ie]=null,P[ie].disconnect(le))}for(let he=0;he<ee.added.length;he++){const le=ee.added[he];let ie=D.indexOf(le);if(ie===-1){for(let _e=0;_e<P.length;_e++)if(_e>=D.length){D.push(le),ie=_e;break}else if(D[_e]===null){D[_e]=le,ie=_e;break}if(ie===-1)break}const de=P[ie];de&&de.connect(le)}}const se=new ke,Z=new ke;function ue(ee,he,le){se.setFromMatrixPosition(he.matrixWorld),Z.setFromMatrixPosition(le.matrixWorld);const ie=se.distanceTo(Z),de=he.projectionMatrix.elements,_e=le.projectionMatrix.elements,Ge=de[14]/(de[10]-1),Fe=de[14]/(de[10]+1),h=(de[9]+1)/de[5],J=(de[9]-1)/de[5],K=(de[8]-1)/de[0],I=(_e[8]+1)/_e[0],p=Ge*K,H=Ge*I,ne=ie/(-K+I),ae=ne*-K;if(he.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ae),ee.translateZ(ne),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),de[10]===-1)ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const k=Ge+ne,R=Fe+ne,_=p-ae,U=H+(ie-ae),q=h*Fe/R*k,re=J*Fe/R*k;ee.projectionMatrix.makePerspective(_,U,q,re,k,R),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function W(ee,he){he===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(he.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let he=ee.near,le=ee.far;c.texture!==null&&(c.depthNear>0&&(he=c.depthNear),c.depthFar>0&&(le=c.depthFar)),y.near=X.near=A.near=he,y.far=X.far=A.far=le,(O!==y.near||u!==y.far)&&(l.updateRenderState({depthNear:y.near,depthFar:y.far}),O=y.near,u=y.far),y.layers.mask=ee.layers.mask|6,A.layers.mask=y.layers.mask&-5,X.layers.mask=y.layers.mask&-3;const ie=ee.parent,de=y.cameras;W(y,ie);for(let _e=0;_e<de.length;_e++)W(de[_e],ie);de.length===2?ue(y,A,X):y.projectionMatrix.copy(A.projectionMatrix),G(ee,y,ie)};function G(ee,he,le){le===null?ee.matrix.copy(he.matrixWorld):(ee.matrix.copy(le.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(he.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Xo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return m},this.setFoveation=function(ee){m=ee,d!==null&&(d.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(y)},this.getCameraTexture=function(ee){return o[ee]};let ge=null;function me(ee,he){if(b=he.getViewerPose(v||a),x=he,b!==null){const le=b.views;f!==null&&(n.setRenderTargetFramebuffer(w,f.framebuffer),n.setRenderTarget(w));let ie=!1;le.length!==y.cameras.length&&(y.cameras.length=0,ie=!0);for(let Fe=0;Fe<le.length;Fe++){const h=le[Fe];let J=null;if(f!==null)J=f.getViewport(h);else{const I=E.getViewSubImage(d,h);J=I.viewport,Fe===0&&(n.setRenderTargetTextures(w,I.colorTexture,I.depthStencilTexture),n.setRenderTarget(w))}let K=F[Fe];K===void 0&&(K=new Kn,K.layers.enable(Fe),K.viewport=new St,F[Fe]=K),K.matrix.fromArray(h.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(h.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(J.x,J.y,J.width,J.height),Fe===0&&(y.matrix.copy(K.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ie===!0&&y.cameras.push(K)}const de=l.enabledFeatures;if(de&&de.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&g){E=i.getBinding();const Fe=E.getDepthInformation(le[0]);Fe&&Fe.isValid&&Fe.texture&&c.init(Fe,l.renderState)}if(de&&de.includes("camera-access")&&g){n.state.unbindTexture(),E=i.getBinding();for(let Fe=0;Fe<le.length;Fe++){const h=le[Fe].camera;if(h){let J=o[h];J||(J=new Va,o[h]=J);const K=E.getCameraImage(h);J.sourceTexture=K}}}}for(let le=0;le<P.length;le++){const ie=D[le],de=P[le];ie!==null&&de!==void 0&&de.update(ie,he,v||a)}ge&&ge(ee,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),x=null}const fe=new oo;fe.setAnimationLoop(me),this.setAnimationLoop=function(ee){ge=ee},this.dispose=function(){}}}const Qt=new ci,ah=new gn;function oh(e,n){function t(c,o){c.matrixAutoUpdate===!0&&c.updateMatrix(),o.value.copy(c.matrix)}function i(c,o){o.color.getRGB(c.fogColor.value,Ya(e)),o.isFog?(c.fogNear.value=o.near,c.fogFar.value=o.far):o.isFogExp2&&(c.fogDensity.value=o.density)}function l(c,o,S,T,w){o.isMeshBasicMaterial?r(c,o):o.isMeshLambertMaterial?(r(c,o),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)):o.isMeshToonMaterial?(r(c,o),E(c,o)):o.isMeshPhongMaterial?(r(c,o),b(c,o),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)):o.isMeshStandardMaterial?(r(c,o),d(c,o),o.isMeshPhysicalMaterial&&f(c,o,w)):o.isMeshMatcapMaterial?(r(c,o),x(c,o)):o.isMeshDepthMaterial?r(c,o):o.isMeshDistanceMaterial?(r(c,o),g(c,o)):o.isMeshNormalMaterial?r(c,o):o.isLineBasicMaterial?(a(c,o),o.isLineDashedMaterial&&s(c,o)):o.isPointsMaterial?m(c,o,S,T):o.isSpriteMaterial?v(c,o):o.isShadowMaterial?(c.color.value.copy(o.color),c.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}function r(c,o){c.opacity.value=o.opacity,o.color&&c.diffuse.value.copy(o.color),o.emissive&&c.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(c.map.value=o.map,t(o.map,c.mapTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.bumpMap&&(c.bumpMap.value=o.bumpMap,t(o.bumpMap,c.bumpMapTransform),c.bumpScale.value=o.bumpScale,o.side===bt&&(c.bumpScale.value*=-1)),o.normalMap&&(c.normalMap.value=o.normalMap,t(o.normalMap,c.normalMapTransform),c.normalScale.value.copy(o.normalScale),o.side===bt&&c.normalScale.value.negate()),o.displacementMap&&(c.displacementMap.value=o.displacementMap,t(o.displacementMap,c.displacementMapTransform),c.displacementScale.value=o.displacementScale,c.displacementBias.value=o.displacementBias),o.emissiveMap&&(c.emissiveMap.value=o.emissiveMap,t(o.emissiveMap,c.emissiveMapTransform)),o.specularMap&&(c.specularMap.value=o.specularMap,t(o.specularMap,c.specularMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest);const S=n.get(o),T=S.envMap,w=S.envMapRotation;T&&(c.envMap.value=T,Qt.copy(w),Qt.x*=-1,Qt.y*=-1,Qt.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Qt.y*=-1,Qt.z*=-1),c.envMapRotation.value.setFromMatrix4(ah.makeRotationFromEuler(Qt)),c.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=o.reflectivity,c.ior.value=o.ior,c.refractionRatio.value=o.refractionRatio),o.lightMap&&(c.lightMap.value=o.lightMap,c.lightMapIntensity.value=o.lightMapIntensity,t(o.lightMap,c.lightMapTransform)),o.aoMap&&(c.aoMap.value=o.aoMap,c.aoMapIntensity.value=o.aoMapIntensity,t(o.aoMap,c.aoMapTransform))}function a(c,o){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,o.map&&(c.map.value=o.map,t(o.map,c.mapTransform))}function s(c,o){c.dashSize.value=o.dashSize,c.totalSize.value=o.dashSize+o.gapSize,c.scale.value=o.scale}function m(c,o,S,T){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,c.size.value=o.size*S,c.scale.value=T*.5,o.map&&(c.map.value=o.map,t(o.map,c.uvTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest)}function v(c,o){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,c.rotation.value=o.rotation,o.map&&(c.map.value=o.map,t(o.map,c.mapTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest)}function b(c,o){c.specular.value.copy(o.specular),c.shininess.value=Math.max(o.shininess,1e-4)}function E(c,o){o.gradientMap&&(c.gradientMap.value=o.gradientMap)}function d(c,o){c.metalness.value=o.metalness,o.metalnessMap&&(c.metalnessMap.value=o.metalnessMap,t(o.metalnessMap,c.metalnessMapTransform)),c.roughness.value=o.roughness,o.roughnessMap&&(c.roughnessMap.value=o.roughnessMap,t(o.roughnessMap,c.roughnessMapTransform)),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)}function f(c,o,S){c.ior.value=o.ior,o.sheen>0&&(c.sheenColor.value.copy(o.sheenColor).multiplyScalar(o.sheen),c.sheenRoughness.value=o.sheenRoughness,o.sheenColorMap&&(c.sheenColorMap.value=o.sheenColorMap,t(o.sheenColorMap,c.sheenColorMapTransform)),o.sheenRoughnessMap&&(c.sheenRoughnessMap.value=o.sheenRoughnessMap,t(o.sheenRoughnessMap,c.sheenRoughnessMapTransform))),o.clearcoat>0&&(c.clearcoat.value=o.clearcoat,c.clearcoatRoughness.value=o.clearcoatRoughness,o.clearcoatMap&&(c.clearcoatMap.value=o.clearcoatMap,t(o.clearcoatMap,c.clearcoatMapTransform)),o.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=o.clearcoatRoughnessMap,t(o.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),o.clearcoatNormalMap&&(c.clearcoatNormalMap.value=o.clearcoatNormalMap,t(o.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(o.clearcoatNormalScale),o.side===bt&&c.clearcoatNormalScale.value.negate())),o.dispersion>0&&(c.dispersion.value=o.dispersion),o.iridescence>0&&(c.iridescence.value=o.iridescence,c.iridescenceIOR.value=o.iridescenceIOR,c.iridescenceThicknessMinimum.value=o.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=o.iridescenceThicknessRange[1],o.iridescenceMap&&(c.iridescenceMap.value=o.iridescenceMap,t(o.iridescenceMap,c.iridescenceMapTransform)),o.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=o.iridescenceThicknessMap,t(o.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),o.transmission>0&&(c.transmission.value=o.transmission,c.transmissionSamplerMap.value=S.texture,c.transmissionSamplerSize.value.set(S.width,S.height),o.transmissionMap&&(c.transmissionMap.value=o.transmissionMap,t(o.transmissionMap,c.transmissionMapTransform)),c.thickness.value=o.thickness,o.thicknessMap&&(c.thicknessMap.value=o.thicknessMap,t(o.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=o.attenuationDistance,c.attenuationColor.value.copy(o.attenuationColor)),o.anisotropy>0&&(c.anisotropyVector.value.set(o.anisotropy*Math.cos(o.anisotropyRotation),o.anisotropy*Math.sin(o.anisotropyRotation)),o.anisotropyMap&&(c.anisotropyMap.value=o.anisotropyMap,t(o.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=o.specularIntensity,c.specularColor.value.copy(o.specularColor),o.specularColorMap&&(c.specularColorMap.value=o.specularColorMap,t(o.specularColorMap,c.specularColorMapTransform)),o.specularIntensityMap&&(c.specularIntensityMap.value=o.specularIntensityMap,t(o.specularIntensityMap,c.specularIntensityMapTransform))}function x(c,o){o.matcap&&(c.matcap.value=o.matcap)}function g(c,o){const S=n.get(o).light;c.referencePosition.value.setFromMatrixPosition(S.matrixWorld),c.nearDistance.value=S.shadow.camera.near,c.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:l}}function sh(e,n,t,i){let l={},r={},a=[];const s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function m(S,T){const w=T.program;i.uniformBlockBinding(S,w)}function v(S,T){let w=l[S.id];w===void 0&&(x(S),w=b(S),l[S.id]=w,S.addEventListener("dispose",c));const P=T.program;i.updateUBOMapping(S,P);const D=n.render.frame;r[S.id]!==D&&(d(S),r[S.id]=D)}function b(S){const T=E();S.__bindingPointIndex=T;const w=e.createBuffer(),P=S.__size,D=S.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,P,D),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,w),w}function E(){for(let S=0;S<s;S++)if(a.indexOf(S)===-1)return a.push(S),S;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const T=l[S.id],w=S.uniforms,P=S.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let D=0,L=w.length;D<L;D++){const M=Array.isArray(w[D])?w[D]:[w[D]];for(let A=0,X=M.length;A<X;A++){const F=M[A];if(f(F,D,A,P)===!0){const y=F.__offset,O=Array.isArray(F.value)?F.value:[F.value];let u=0;for(let B=0;B<O.length;B++){const V=O[B],N=g(V);typeof V=="number"||typeof V=="boolean"?(F.__data[0]=V,e.bufferSubData(e.UNIFORM_BUFFER,y+u,F.__data)):V.isMatrix3?(F.__data[0]=V.elements[0],F.__data[1]=V.elements[1],F.__data[2]=V.elements[2],F.__data[3]=0,F.__data[4]=V.elements[3],F.__data[5]=V.elements[4],F.__data[6]=V.elements[5],F.__data[7]=0,F.__data[8]=V.elements[6],F.__data[9]=V.elements[7],F.__data[10]=V.elements[8],F.__data[11]=0):(V.toArray(F.__data,u),u+=N.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,y,F.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(S,T,w,P){const D=S.value,L=T+"_"+w;if(P[L]===void 0)return typeof D=="number"||typeof D=="boolean"?P[L]=D:P[L]=D.clone(),!0;{const M=P[L];if(typeof D=="number"||typeof D=="boolean"){if(M!==D)return P[L]=D,!0}else if(M.equals(D)===!1)return M.copy(D),!0}return!1}function x(S){const T=S.uniforms;let w=0;const P=16;for(let L=0,M=T.length;L<M;L++){const A=Array.isArray(T[L])?T[L]:[T[L]];for(let X=0,F=A.length;X<F;X++){const y=A[X],O=Array.isArray(y.value)?y.value:[y.value];for(let u=0,B=O.length;u<B;u++){const V=O[u],N=g(V),se=w%P,Z=se%N.boundary,ue=se+Z;w+=Z,ue!==0&&P-ue<N.storage&&(w+=P-ue),y.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=w,w+=N.storage}}}const D=w%P;return D>0&&(w+=P-D),S.__size=w,S.__cache={},this}function g(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):tt("WebGLRenderer: Unsupported uniform value type.",S),T}function c(S){const T=S.target;T.removeEventListener("dispose",c);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),e.deleteBuffer(l[T.id]),delete l[T.id],delete r[T.id]}function o(){for(const S in l)e.deleteBuffer(l[S]);a=[],l={},r={}}return{bind:m,update:v,dispose:o}}const lh=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yt=null;function ch(){return yt===null&&(yt=new Yo(lh,16,16,Un,qt),yt.name="DFG_LUT",yt.minFilter=xt,yt.magFilter=xt,yt.wrapS=Ui,yt.wrapT=Ui,yt.generateMipmaps=!1,yt.needsUpdate=!0),yt}class fh{constructor(n={}){const{canvas:t=ko(),context:i=null,depth:l=!0,stencil:r=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:v=!1,powerPreference:b="default",failIfMajorPerformanceCaveat:E=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Dt}=n;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const g=f,c=new Set([Ba,ka,Ga]),o=new Set([Dt,nn,ti,Ln,Ha,za]),S=new Uint32Array(4),T=new Int32Array(4);let w=null,P=null;const D=[],L=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Lt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let X=!1;this._outputColorSpace=Ia;let F=0,y=0,O=null,u=-1,B=null;const V=new St,N=new St;let se=null;const Z=new at(0);let ue=0,W=t.width,G=t.height,ge=1,me=null,fe=null;const ee=new St(0,0,W,G),he=new St(0,0,W,G);let le=!1;const ie=new Na;let de=!1,_e=!1;const Ge=new gn,Fe=new ke,h=new St,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function I(){return O===null?ge:1}let p=i;function H(C,Y){return t.getContext(C,Y)}try{const C={alpha:!0,depth:l,stencil:r,antialias:s,premultipliedAlpha:m,preserveDrawingBuffer:v,powerPreference:b,failIfMajorPerformanceCaveat:E};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",nt,!1),p===null){const Y="webgl2";if(p=H(Y,C),p===null)throw H(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw rt("WebGLRenderer: "+C.message),C}let ne,ae,k,R,_,U,q,re,j,Me,Ee,Pe,Be,ce,ve,De,ye,we,Ve,z,xe,Se,Re;function pe(){ne=new fu(p),ne.init(),xe=new eh(p,ne),ae=new nu(p,ne,n,xe),k=new Qd(p,ne),ae.reversedDepthBuffer&&d&&k.buffers.depth.setReversed(!0),R=new hu(p),_=new Bd,U=new Jd(p,ne,k,_,ae,xe,R),q=new cu(A),re=new gl(p),Se=new eu(p,re),j=new uu(p,re,R,Se),Me=new mu(p,j,re,Se,R),we=new pu(p,ae,U),ve=new iu(_),Ee=new Fd(A,q,ne,ae,Se,ve),Pe=new oh(A,_),Be=new Gd,ce=new Yd(ne),ye=new Jf(A,q,k,Me,x,m),De=new $d(A,Me,ae),Re=new sh(p,R,ae,k),Ve=new tu(p,ne,R),z=new du(p,ne,R),R.programs=Ee.programs,A.capabilities=ae,A.extensions=ne,A.properties=_,A.renderLists=Be,A.shadowMap=De,A.state=k,A.info=R}pe(),g!==Dt&&(M=new gu(g,t.width,t.height,l,r));const oe=new rh(A,p);this.xr=oe,this.getContext=function(){return p},this.getContextAttributes=function(){return p.getContextAttributes()},this.forceContextLoss=function(){const C=ne.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ne.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(C){C!==void 0&&(ge=C,this.setSize(W,G,!1))},this.getSize=function(C){return C.set(W,G)},this.setSize=function(C,Y,te=!0){if(oe.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}W=C,G=Y,t.width=Math.floor(C*ge),t.height=Math.floor(Y*ge),te===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(W*ge,G*ge).floor()},this.setDrawingBufferSize=function(C,Y,te){W=C,G=Y,ge=te,t.width=Math.floor(C*te),t.height=Math.floor(Y*te),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(g===Dt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(ee)},this.setViewport=function(C,Y,te,Q){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,Y,te,Q),k.viewport(V.copy(ee).multiplyScalar(ge).round())},this.getScissor=function(C){return C.copy(he)},this.setScissor=function(C,Y,te,Q){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,Y,te,Q),k.scissor(N.copy(he).multiplyScalar(ge).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(C){k.setScissorTest(le=C)},this.setOpaqueSort=function(C){me=C},this.setTransparentSort=function(C){fe=C},this.getClearColor=function(C){return C.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,te=!0){let Q=0;if(C){let $=!1;if(O!==null){const Te=O.texture.format;$=c.has(Te)}if($){const Te=O.texture.type,Ce=o.has(Te),Ae=ye.getClearColor(),Ue=ye.getClearAlpha(),Ne=Ae.r,ze=Ae.g,Xe=Ae.b;Ce?(S[0]=Ne,S[1]=ze,S[2]=Xe,S[3]=Ue,p.clearBufferuiv(p.COLOR,0,S)):(T[0]=Ne,T[1]=ze,T[2]=Xe,T[3]=Ue,p.clearBufferiv(p.COLOR,0,T))}else Q|=p.COLOR_BUFFER_BIT}Y&&(Q|=p.DEPTH_BUFFER_BIT),te&&(Q|=p.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&p.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),ye.dispose(),Be.dispose(),ce.dispose(),_.dispose(),q.dispose(),Me.dispose(),Se.dispose(),Re.dispose(),Ee.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Qi),oe.removeEventListener("sessionend",Ji),Zt.stop()};function Le(C){C.preventDefault(),or("WebGLRenderer: Context Lost."),X=!0}function He(){or("WebGLRenderer: Context Restored."),X=!1;const C=R.autoReset,Y=De.enabled,te=De.autoUpdate,Q=De.needsUpdate,$=De.type;pe(),R.autoReset=C,De.enabled=Y,De.autoUpdate=te,De.needsUpdate=Q,De.type=$}function nt(C){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ze(C){const Y=C.target;Y.removeEventListener("dispose",Ze),Nt(Y)}function Nt(C){Ot(C),_.remove(C)}function Ot(C){const Y=_.get(C).programs;Y!==void 0&&(Y.forEach(function(te){Ee.releaseProgram(te)}),C.isShaderMaterial&&Ee.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,te,Q,$,Te){Y===null&&(Y=J);const Ce=$.isMesh&&$.matrixWorld.determinant()<0,Ae=Uo(C,Y,te,Q,$);k.setMaterial(Q,Ce);let Ue=te.index,Ne=1;if(Q.wireframe===!0){if(Ue=j.getWireframeAttribute(te),Ue===void 0)return;Ne=2}const ze=te.drawRange,Xe=te.attributes.position;let Oe=ze.start*Ne,je=(ze.start+ze.count)*Ne;Te!==null&&(Oe=Math.max(Oe,Te.start*Ne),je=Math.min(je,(Te.start+Te.count)*Ne)),Ue!==null?(Oe=Math.max(Oe,0),je=Math.min(je,Ue.count)):Xe!=null&&(Oe=Math.max(Oe,0),je=Math.min(je,Xe.count));const st=je-Oe;if(st<0||st===1/0)return;Se.setup($,Q,Ae,te,Ue);let ot,$e=Ve;if(Ue!==null&&(ot=re.get(Ue),$e=z,$e.setIndex(ot)),$.isMesh)Q.wireframe===!0?(k.setLineWidth(Q.wireframeLinewidth*I()),$e.setMode(p.LINES)):$e.setMode(p.TRIANGLES);else if($.isLine){let mt=Q.linewidth;mt===void 0&&(mt=1),k.setLineWidth(mt*I()),$.isLineSegments?$e.setMode(p.LINES):$.isLineLoop?$e.setMode(p.LINE_LOOP):$e.setMode(p.LINE_STRIP)}else $.isPoints?$e.setMode(p.POINTS):$.isSprite&&$e.setMode(p.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Oa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))$e.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const mt=$._multiDrawStarts,Ie=$._multiDrawCounts,Et=$._multiDrawCount,Ke=Ue?re.get(Ue).bytesPerElement:1,At=_.get(Q).currentProgram.getUniforms();for(let Rt=0;Rt<Et;Rt++)At.setValue(p,"_gl_DrawID",Rt),$e.render(mt[Rt]/Ke,Ie[Rt])}else if($.isInstancedMesh)$e.renderInstances(Oe,st,$.count);else if(te.isInstancedBufferGeometry){const mt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ie=Math.min(te.instanceCount,mt);$e.renderInstances(Oe,st,Ie)}else $e.render(Oe,st)};function $i(C,Y,te){C.transparent===!0&&C.side===Ft&&C.forceSinglePass===!1?(C.side=bt,C.needsUpdate=!0,Gn(C,Y,te),C.side=Dn,C.needsUpdate=!0,Gn(C,Y,te),C.side=Ft):Gn(C,Y,te)}this.compile=function(C,Y,te=null){te===null&&(te=C),P=ce.get(te),P.init(Y),L.push(P),te.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),C!==te&&C.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),P.setupLights();const Q=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Te=$.material;if(Te)if(Array.isArray(Te))for(let Ce=0;Ce<Te.length;Ce++){const Ae=Te[Ce];$i(Ae,te,$),Q.add(Ae)}else $i(Te,te,$),Q.add(Te)}),P=L.pop(),Q},this.compileAsync=function(C,Y,te=null){const Q=this.compile(C,Y,te);return new Promise($=>{function Te(){if(Q.forEach(function(Ce){_.get(Ce).currentProgram.isReady()&&Q.delete(Ce)}),Q.size===0){$(C);return}setTimeout(Te,10)}ne.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let di=null;function Lo(C){di&&di(C)}function Qi(){Zt.stop()}function Ji(){Zt.start()}const Zt=new oo;Zt.setAnimationLoop(Lo),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(C){di=C,oe.setAnimationLoop(C),C===null?Zt.stop():Zt.start()},oe.addEventListener("sessionstart",Qi),oe.addEventListener("sessionend",Ji),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;const te=oe.enabled===!0&&oe.isPresenting===!0,Q=M!==null&&(O===null||te)&&M.begin(A,O);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(Y),Y=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,Y,O),P=ce.get(C,L.length),P.init(Y),L.push(P),Ge.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ie.setFromProjectionMatrix(Ge,sr,Y.reversedDepth),_e=this.localClippingEnabled,de=ve.init(this.clippingPlanes,_e),w=Be.get(C,D.length),w.init(),D.push(w),oe.enabled===!0&&oe.isPresenting===!0){const Ce=A.xr.getDepthSensingMesh();Ce!==null&&hi(Ce,Y,-1/0,A.sortObjects)}hi(C,Y,0,A.sortObjects),w.finish(),A.sortObjects===!0&&w.sort(me,fe),K=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,K&&ye.addToRenderList(w,C),this.info.render.frame++,de===!0&&ve.beginShadows();const $=P.state.shadowsArray;if(De.render($,C,Y),de===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&M.hasRenderPass())===!1){const Ce=w.opaque,Ae=w.transmissive;if(P.setupLights(),Y.isArrayCamera){const Ue=Y.cameras;if(Ae.length>0)for(let Ne=0,ze=Ue.length;Ne<ze;Ne++){const Xe=Ue[Ne];tr(Ce,Ae,C,Xe)}K&&ye.render(C);for(let Ne=0,ze=Ue.length;Ne<ze;Ne++){const Xe=Ue[Ne];er(w,C,Xe,Xe.viewport)}}else Ae.length>0&&tr(Ce,Ae,C,Y),K&&ye.render(C),er(w,C,Y)}O!==null&&y===0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),Q&&M.end(A),C.isScene===!0&&C.onAfterRender(A,C,Y),Se.resetDefaultState(),u=-1,B=null,L.pop(),L.length>0?(P=L[L.length-1],de===!0&&ve.setGlobalState(A.clippingPlanes,P.state.camera)):P=null,D.pop(),D.length>0?w=D[D.length-1]:w=null};function hi(C,Y,te,Q){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ie.intersectsSprite(C)){Q&&h.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ge);const Ce=Me.update(C),Ae=C.material;Ae.visible&&w.push(C,Ce,Ae,te,h.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ie.intersectsObject(C))){const Ce=Me.update(C),Ae=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),h.copy(C.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),h.copy(Ce.boundingSphere.center)),h.applyMatrix4(C.matrixWorld).applyMatrix4(Ge)),Array.isArray(Ae)){const Ue=Ce.groups;for(let Ne=0,ze=Ue.length;Ne<ze;Ne++){const Xe=Ue[Ne],Oe=Ae[Xe.materialIndex];Oe&&Oe.visible&&w.push(C,Ce,Oe,te,h.z,Xe)}}else Ae.visible&&w.push(C,Ce,Ae,te,h.z,null)}}const Te=C.children;for(let Ce=0,Ae=Te.length;Ce<Ae;Ce++)hi(Te[Ce],Y,te,Q)}function er(C,Y,te,Q){const{opaque:$,transmissive:Te,transparent:Ce}=C;P.setupLightsView(te),de===!0&&ve.setGlobalState(A.clippingPlanes,te),Q&&k.viewport(V.copy(Q)),$.length>0&&kn($,Y,te),Te.length>0&&kn(Te,Y,te),Ce.length>0&&kn(Ce,Y,te),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function tr(C,Y,te,Q){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[Q.id]===void 0){const Oe=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[Q.id]=new Ut(1,1,{generateMipmaps:!0,type:Oe?qt:Dt,minFilter:un,samples:Math.max(4,ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const Te=P.state.transmissionRenderTarget[Q.id],Ce=Q.viewport||V;Te.setSize(Ce.z*A.transmissionResolutionScale,Ce.w*A.transmissionResolutionScale);const Ae=A.getRenderTarget(),Ue=A.getActiveCubeFace(),Ne=A.getActiveMipmapLevel();A.setRenderTarget(Te),A.getClearColor(Z),ue=A.getClearAlpha(),ue<1&&A.setClearColor(16777215,.5),A.clear(),K&&ye.render(te);const ze=A.toneMapping;A.toneMapping=Lt;const Xe=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),P.setupLightsView(Q),de===!0&&ve.setGlobalState(A.clippingPlanes,Q),kn(C,te,Q),U.updateMultisampleRenderTarget(Te),U.updateRenderTargetMipmap(Te),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let je=0,st=Y.length;je<st;je++){const ot=Y[je],{object:$e,geometry:mt,material:Ie,group:Et}=ot;if(Ie.side===Ft&&$e.layers.test(Q.layers)){const Ke=Ie.side;Ie.side=bt,Ie.needsUpdate=!0,nr($e,te,Q,mt,Ie,Et),Ie.side=Ke,Ie.needsUpdate=!0,Oe=!0}}Oe===!0&&(U.updateMultisampleRenderTarget(Te),U.updateRenderTargetMipmap(Te))}A.setRenderTarget(Ae,Ue,Ne),A.setClearColor(Z,ue),Xe!==void 0&&(Q.viewport=Xe),A.toneMapping=ze}function kn(C,Y,te){const Q=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Te=C.length;$<Te;$++){const Ce=C[$],{object:Ae,geometry:Ue,group:Ne}=Ce;let ze=Ce.material;ze.allowOverride===!0&&Q!==null&&(ze=Q),Ae.layers.test(te.layers)&&nr(Ae,Y,te,Ue,ze,Ne)}}function nr(C,Y,te,Q,$,Te){C.onBeforeRender(A,Y,te,Q,$,Te),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(A,Y,te,Q,C,Te),$.transparent===!0&&$.side===Ft&&$.forceSinglePass===!1?($.side=bt,$.needsUpdate=!0,A.renderBufferDirect(te,Y,Q,$,C,Te),$.side=Dn,$.needsUpdate=!0,A.renderBufferDirect(te,Y,Q,$,C,Te),$.side=Ft):A.renderBufferDirect(te,Y,Q,$,C,Te),C.onAfterRender(A,Y,te,Q,$,Te)}function Gn(C,Y,te){Y.isScene!==!0&&(Y=J);const Q=_.get(C),$=P.state.lights,Te=P.state.shadowsArray,Ce=$.state.version,Ae=Ee.getParameters(C,$.state,Te,Y,te),Ue=Ee.getProgramCacheKey(Ae);let Ne=Q.programs;Q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,Q.fog=Y.fog;const ze=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Q.envMap=q.get(C.envMap||Q.environment,ze),Q.envMapRotation=Q.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,Ne===void 0&&(C.addEventListener("dispose",Ze),Ne=new Map,Q.programs=Ne);let Xe=Ne.get(Ue);if(Xe!==void 0){if(Q.currentProgram===Xe&&Q.lightsStateVersion===Ce)return rr(C,Ae),Xe}else Ae.uniforms=Ee.getUniforms(C),C.onBeforeCompile(Ae,A),Xe=Ee.acquireProgram(Ae,Ue),Ne.set(Ue,Xe),Q.uniforms=Ae.uniforms;const Oe=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Oe.clippingPlanes=ve.uniform),rr(C,Ae),Q.needsLights=No(C),Q.lightsStateVersion=Ce,Q.needsLights&&(Oe.ambientLightColor.value=$.state.ambient,Oe.lightProbe.value=$.state.probe,Oe.directionalLights.value=$.state.directional,Oe.directionalLightShadows.value=$.state.directionalShadow,Oe.spotLights.value=$.state.spot,Oe.spotLightShadows.value=$.state.spotShadow,Oe.rectAreaLights.value=$.state.rectArea,Oe.ltc_1.value=$.state.rectAreaLTC1,Oe.ltc_2.value=$.state.rectAreaLTC2,Oe.pointLights.value=$.state.point,Oe.pointLightShadows.value=$.state.pointShadow,Oe.hemisphereLights.value=$.state.hemi,Oe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Oe.spotLightMatrix.value=$.state.spotLightMatrix,Oe.spotLightMap.value=$.state.spotLightMap,Oe.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=Xe,Q.uniformsList=null,Xe}function ir(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=$n.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function rr(C,Y){const te=_.get(C);te.outputColorSpace=Y.outputColorSpace,te.batching=Y.batching,te.batchingColor=Y.batchingColor,te.instancing=Y.instancing,te.instancingColor=Y.instancingColor,te.instancingMorph=Y.instancingMorph,te.skinning=Y.skinning,te.morphTargets=Y.morphTargets,te.morphNormals=Y.morphNormals,te.morphColors=Y.morphColors,te.morphTargetsCount=Y.morphTargetsCount,te.numClippingPlanes=Y.numClippingPlanes,te.numIntersection=Y.numClipIntersection,te.vertexAlphas=Y.vertexAlphas,te.vertexTangents=Y.vertexTangents,te.toneMapping=Y.toneMapping}function Uo(C,Y,te,Q,$){Y.isScene!==!0&&(Y=J),U.resetTextureUnits();const Te=Y.fog,Ce=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?Y.environment:null,Ae=O===null?A.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:si,Ue=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ne=q.get(Q.envMap||Ce,Ue),ze=Q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Xe=!!te.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Oe=!!te.morphAttributes.position,je=!!te.morphAttributes.normal,st=!!te.morphAttributes.color;let ot=Lt;Q.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ot=A.toneMapping);const $e=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,mt=$e!==void 0?$e.length:0,Ie=_.get(Q),Et=P.state.lights;if(de===!0&&(_e===!0||C!==B)){const dt=C===B&&Q.id===u;ve.setState(Q,C,dt)}let Ke=!1;Q.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Et.state.version||Ie.outputColorSpace!==Ae||$.isBatchedMesh&&Ie.batching===!1||!$.isBatchedMesh&&Ie.batching===!0||$.isBatchedMesh&&Ie.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ie.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ie.instancing===!1||!$.isInstancedMesh&&Ie.instancing===!0||$.isSkinnedMesh&&Ie.skinning===!1||!$.isSkinnedMesh&&Ie.skinning===!0||$.isInstancedMesh&&Ie.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ie.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ie.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ie.instancingMorph===!1&&$.morphTexture!==null||Ie.envMap!==Ne||Q.fog===!0&&Ie.fog!==Te||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ve.numPlanes||Ie.numIntersection!==ve.numIntersection)||Ie.vertexAlphas!==ze||Ie.vertexTangents!==Xe||Ie.morphTargets!==Oe||Ie.morphNormals!==je||Ie.morphColors!==st||Ie.toneMapping!==ot||Ie.morphTargetsCount!==mt)&&(Ke=!0):(Ke=!0,Ie.__version=Q.version);let At=Ie.currentProgram;Ke===!0&&(At=Gn(Q,Y,$));let Rt=!1,jt=!1,an=!1;const et=At.getUniforms(),ht=Ie.uniforms;if(k.useProgram(At.program)&&(Rt=!0,jt=!0,an=!0),Q.id!==u&&(u=Q.id,jt=!0),Rt||B!==C){k.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),et.setValue(p,"projectionMatrix",C.projectionMatrix),et.setValue(p,"viewMatrix",C.matrixWorldInverse);const Vt=et.map.cameraPosition;Vt!==void 0&&Vt.setValue(p,Fe.setFromMatrixPosition(C.matrixWorld)),ae.logarithmicDepthBuffer&&et.setValue(p,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&et.setValue(p,"isOrthographic",C.isOrthographicCamera===!0),B!==C&&(B=C,jt=!0,an=!0)}if(Ie.needsLights&&(Et.state.directionalShadowMap.length>0&&et.setValue(p,"directionalShadowMap",Et.state.directionalShadowMap,U),Et.state.spotShadowMap.length>0&&et.setValue(p,"spotShadowMap",Et.state.spotShadowMap,U),Et.state.pointShadowMap.length>0&&et.setValue(p,"pointShadowMap",Et.state.pointShadowMap,U)),$.isSkinnedMesh){et.setOptional(p,$,"bindMatrix"),et.setOptional(p,$,"bindMatrixInverse");const dt=$.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),et.setValue(p,"boneTexture",dt.boneTexture,U))}$.isBatchedMesh&&(et.setOptional(p,$,"batchingTexture"),et.setValue(p,"batchingTexture",$._matricesTexture,U),et.setOptional(p,$,"batchingIdTexture"),et.setValue(p,"batchingIdTexture",$._indirectTexture,U),et.setOptional(p,$,"batchingColorTexture"),$._colorsTexture!==null&&et.setValue(p,"batchingColorTexture",$._colorsTexture,U));const zt=te.morphAttributes;if((zt.position!==void 0||zt.normal!==void 0||zt.color!==void 0)&&we.update($,te,At),(jt||Ie.receiveShadow!==$.receiveShadow)&&(Ie.receiveShadow=$.receiveShadow,et.setValue(p,"receiveShadow",$.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&Y.environment!==null&&(ht.envMapIntensity.value=Y.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=ch()),jt&&(et.setValue(p,"toneMappingExposure",A.toneMappingExposure),Ie.needsLights&&Io(ht,an),Te&&Q.fog===!0&&Pe.refreshFogUniforms(ht,Te),Pe.refreshMaterialUniforms(ht,Q,ge,G,P.state.transmissionRenderTarget[C.id]),$n.upload(p,ir(Ie),ht,U)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&($n.upload(p,ir(Ie),ht,U),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&et.setValue(p,"center",$.center),et.setValue(p,"modelViewMatrix",$.modelViewMatrix),et.setValue(p,"normalMatrix",$.normalMatrix),et.setValue(p,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const dt=Q.uniformsGroups;for(let Vt=0,on=dt.length;Vt<on;Vt++){const ar=dt[Vt];Re.update(ar,At),Re.bind(ar,At)}}return At}function Io(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function No(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(C,Y,te){const Q=_.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),_.get(C.texture).__webglTexture=Y,_.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:te,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const te=_.get(C);te.__webglFramebuffer=Y,te.__useDefaultFramebuffer=Y===void 0};const Oo=p.createFramebuffer();this.setRenderTarget=function(C,Y=0,te=0){O=C,F=Y,y=te;let Q=null,$=!1,Te=!1;if(C){const Ae=_.get(C);if(Ae.__useDefaultFramebuffer!==void 0){k.bindFramebuffer(p.FRAMEBUFFER,Ae.__webglFramebuffer),V.copy(C.viewport),N.copy(C.scissor),se=C.scissorTest,k.viewport(V),k.scissor(N),k.setScissorTest(se),u=-1;return}else if(Ae.__webglFramebuffer===void 0)U.setupRenderTarget(C);else if(Ae.__hasExternalTextures)U.rebindTextures(C,_.get(C.texture).__webglTexture,_.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ze=C.depthTexture;if(Ae.__boundDepthTexture!==ze){if(ze!==null&&_.has(ze)&&(C.width!==ze.image.width||C.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(C)}}const Ue=C.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Te=!0);const Ne=_.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ne[Y])?Q=Ne[Y][te]:Q=Ne[Y],$=!0):C.samples>0&&U.useMultisampledRTT(C)===!1?Q=_.get(C).__webglMultisampledFramebuffer:Array.isArray(Ne)?Q=Ne[te]:Q=Ne,V.copy(C.viewport),N.copy(C.scissor),se=C.scissorTest}else V.copy(ee).multiplyScalar(ge).floor(),N.copy(he).multiplyScalar(ge).floor(),se=le;if(te!==0&&(Q=Oo),k.bindFramebuffer(p.FRAMEBUFFER,Q)&&k.drawBuffers(C,Q),k.viewport(V),k.scissor(N),k.setScissorTest(se),$){const Ae=_.get(C.texture);p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae.__webglTexture,te)}else if(Te){const Ae=Y;for(let Ue=0;Ue<C.textures.length;Ue++){const Ne=_.get(C.textures[Ue]);p.framebufferTextureLayer(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0+Ue,Ne.__webglTexture,te,Ae)}}else if(C!==null&&te!==0){const Ae=_.get(C.texture);p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,Ae.__webglTexture,te)}u=-1},this.readRenderTargetPixels=function(C,Y,te,Q,$,Te,Ce,Ae=0){if(!(C&&C.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=_.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue){k.bindFramebuffer(p.FRAMEBUFFER,Ue);try{const Ne=C.textures[Ae],ze=Ne.format,Xe=Ne.type;if(C.textures.length>1&&p.readBuffer(p.COLOR_ATTACHMENT0+Ae),!ae.textureFormatReadable(ze)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Xe)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-Q&&te>=0&&te<=C.height-$&&p.readPixels(Y,te,Q,$,xe.convert(ze),xe.convert(Xe),Te)}finally{const Ne=O!==null?_.get(O).__webglFramebuffer:null;k.bindFramebuffer(p.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(C,Y,te,Q,$,Te,Ce,Ae=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=_.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue)if(Y>=0&&Y<=C.width-Q&&te>=0&&te<=C.height-$){k.bindFramebuffer(p.FRAMEBUFFER,Ue);const Ne=C.textures[Ae],ze=Ne.format,Xe=Ne.type;if(C.textures.length>1&&p.readBuffer(p.COLOR_ATTACHMENT0+Ae),!ae.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=p.createBuffer();p.bindBuffer(p.PIXEL_PACK_BUFFER,Oe),p.bufferData(p.PIXEL_PACK_BUFFER,Te.byteLength,p.STREAM_READ),p.readPixels(Y,te,Q,$,xe.convert(ze),xe.convert(Xe),0);const je=O!==null?_.get(O).__webglFramebuffer:null;k.bindFramebuffer(p.FRAMEBUFFER,je);const st=p.fenceSync(p.SYNC_GPU_COMMANDS_COMPLETE,0);return p.flush(),await Ho(p,st,4),p.bindBuffer(p.PIXEL_PACK_BUFFER,Oe),p.getBufferSubData(p.PIXEL_PACK_BUFFER,0,Te),p.deleteBuffer(Oe),p.deleteSync(st),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,te=0){const Q=Math.pow(2,-te),$=Math.floor(C.image.width*Q),Te=Math.floor(C.image.height*Q),Ce=Y!==null?Y.x:0,Ae=Y!==null?Y.y:0;U.setTexture2D(C,0),p.copyTexSubImage2D(p.TEXTURE_2D,te,0,0,Ce,Ae,$,Te),k.unbindTexture()};const Fo=p.createFramebuffer(),Bo=p.createFramebuffer();this.copyTextureToTexture=function(C,Y,te=null,Q=null,$=0,Te=0){let Ce,Ae,Ue,Ne,ze,Xe,Oe,je,st;const ot=C.isCompressedTexture?C.mipmaps[Te]:C.image;if(te!==null)Ce=te.max.x-te.min.x,Ae=te.max.y-te.min.y,Ue=te.isBox3?te.max.z-te.min.z:1,Ne=te.min.x,ze=te.min.y,Xe=te.isBox3?te.min.z:0;else{const ht=Math.pow(2,-$);Ce=Math.floor(ot.width*ht),Ae=Math.floor(ot.height*ht),C.isDataArrayTexture?Ue=ot.depth:C.isData3DTexture?Ue=Math.floor(ot.depth*ht):Ue=1,Ne=0,ze=0,Xe=0}Q!==null?(Oe=Q.x,je=Q.y,st=Q.z):(Oe=0,je=0,st=0);const $e=xe.convert(Y.format),mt=xe.convert(Y.type);let Ie;Y.isData3DTexture?(U.setTexture3D(Y,0),Ie=p.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(U.setTexture2DArray(Y,0),Ie=p.TEXTURE_2D_ARRAY):(U.setTexture2D(Y,0),Ie=p.TEXTURE_2D),p.pixelStorei(p.UNPACK_FLIP_Y_WEBGL,Y.flipY),p.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),p.pixelStorei(p.UNPACK_ALIGNMENT,Y.unpackAlignment);const Et=p.getParameter(p.UNPACK_ROW_LENGTH),Ke=p.getParameter(p.UNPACK_IMAGE_HEIGHT),At=p.getParameter(p.UNPACK_SKIP_PIXELS),Rt=p.getParameter(p.UNPACK_SKIP_ROWS),jt=p.getParameter(p.UNPACK_SKIP_IMAGES);p.pixelStorei(p.UNPACK_ROW_LENGTH,ot.width),p.pixelStorei(p.UNPACK_IMAGE_HEIGHT,ot.height),p.pixelStorei(p.UNPACK_SKIP_PIXELS,Ne),p.pixelStorei(p.UNPACK_SKIP_ROWS,ze),p.pixelStorei(p.UNPACK_SKIP_IMAGES,Xe);const an=C.isDataArrayTexture||C.isData3DTexture,et=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const ht=_.get(C),zt=_.get(Y),dt=_.get(ht.__renderTarget),Vt=_.get(zt.__renderTarget);k.bindFramebuffer(p.READ_FRAMEBUFFER,dt.__webglFramebuffer),k.bindFramebuffer(p.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let on=0;on<Ue;on++)an&&(p.framebufferTextureLayer(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,_.get(C).__webglTexture,$,Xe+on),p.framebufferTextureLayer(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,_.get(Y).__webglTexture,Te,st+on)),p.blitFramebuffer(Ne,ze,Ce,Ae,Oe,je,Ce,Ae,p.DEPTH_BUFFER_BIT,p.NEAREST);k.bindFramebuffer(p.READ_FRAMEBUFFER,null),k.bindFramebuffer(p.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||_.has(C)){const ht=_.get(C),zt=_.get(Y);k.bindFramebuffer(p.READ_FRAMEBUFFER,Fo),k.bindFramebuffer(p.DRAW_FRAMEBUFFER,Bo);for(let dt=0;dt<Ue;dt++)an?p.framebufferTextureLayer(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,ht.__webglTexture,$,Xe+dt):p.framebufferTexture2D(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,ht.__webglTexture,$),et?p.framebufferTextureLayer(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,zt.__webglTexture,Te,st+dt):p.framebufferTexture2D(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,zt.__webglTexture,Te),$!==0?p.blitFramebuffer(Ne,ze,Ce,Ae,Oe,je,Ce,Ae,p.COLOR_BUFFER_BIT,p.NEAREST):et?p.copyTexSubImage3D(Ie,Te,Oe,je,st+dt,Ne,ze,Ce,Ae):p.copyTexSubImage2D(Ie,Te,Oe,je,Ne,ze,Ce,Ae);k.bindFramebuffer(p.READ_FRAMEBUFFER,null),k.bindFramebuffer(p.DRAW_FRAMEBUFFER,null)}else et?C.isDataTexture||C.isData3DTexture?p.texSubImage3D(Ie,Te,Oe,je,st,Ce,Ae,Ue,$e,mt,ot.data):Y.isCompressedArrayTexture?p.compressedTexSubImage3D(Ie,Te,Oe,je,st,Ce,Ae,Ue,$e,ot.data):p.texSubImage3D(Ie,Te,Oe,je,st,Ce,Ae,Ue,$e,mt,ot):C.isDataTexture?p.texSubImage2D(p.TEXTURE_2D,Te,Oe,je,Ce,Ae,$e,mt,ot.data):C.isCompressedTexture?p.compressedTexSubImage2D(p.TEXTURE_2D,Te,Oe,je,ot.width,ot.height,$e,ot.data):p.texSubImage2D(p.TEXTURE_2D,Te,Oe,je,Ce,Ae,$e,mt,ot);p.pixelStorei(p.UNPACK_ROW_LENGTH,Et),p.pixelStorei(p.UNPACK_IMAGE_HEIGHT,Ke),p.pixelStorei(p.UNPACK_SKIP_PIXELS,At),p.pixelStorei(p.UNPACK_SKIP_ROWS,Rt),p.pixelStorei(p.UNPACK_SKIP_IMAGES,jt),Te===0&&Y.generateMipmaps&&p.generateMipmap(Ie),k.unbindTexture()},this.initRenderTarget=function(C){_.get(C).__webglFramebuffer===void 0&&U.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?U.setTextureCube(C,0):C.isData3DTexture?U.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?U.setTexture2DArray(C,0):U.setTexture2D(C,0),k.unbindTexture()},this.resetState=function(){F=0,y=0,O=null,k.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(n),t.unpackColorSpace=lt._getUnpackColorSpace()}}function uh(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),l=new Set(Object.keys(e[0].morphAttributes)),r={},a={},s=e[0].morphTargetsRelative,m=new En;let v=0;for(let b=0;b<e.length;++b){const E=e[b];let d=0;if(t!==(E.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in E.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(E.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". Make sure all geometries have the same number of attributes."),null;if(s!==E.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in E.morphAttributes){if(!l.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(E.morphAttributes[f])}if(n){let f;if(t)f=E.index.count;else if(E.attributes.position!==void 0)f=E.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". The geometry must have either an index or a position attribute"),null;m.addGroup(v,f,b),v+=f}}if(t){let b=0;const E=[];for(let d=0;d<e.length;++d){const f=e[d].index;for(let x=0;x<f.count;++x)E.push(f.getX(x)+b);b+=e[d].attributes.position.count}m.setIndex(E)}for(const b in r){const E=Sa(r[b]);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+b+" attribute."),null;m.setAttribute(b,E)}for(const b in a){const E=a[b][0].length;if(E===0)break;m.morphAttributes=m.morphAttributes||{},m.morphAttributes[b]=[];for(let d=0;d<E;++d){const f=[];for(let g=0;g<a[b].length;++g)f.push(a[b][g][d]);const x=Sa(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+b+" morphAttribute."),null;m.morphAttributes[b].push(x)}}return m}function Sa(e){let n,t,i,l=-1,r=0;for(let v=0;v<e.length;++v){const b=e[v];if(n===void 0&&(n=b.array.constructor),n!==b.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=b.itemSize),t!==b.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=b.normalized),i!==b.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=b.gpuType),l!==b.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=b.count*t}const a=new n(r),s=new yn(a,t,i);let m=0;for(let v=0;v<e.length;++v){const b=e[v];if(b.isInterleavedBufferAttribute){const E=m/t;for(let d=0,f=b.count;d<f;d++)for(let x=0;x<t;x++){const g=b.getComponent(d,x);s.setComponent(d+E,x,g)}}else a.set(b.array,m);m+=b.count*t}return l!==void 0&&(s.gpuType=l),s}const dh={north:[6,4,0,2],east:[7,5,4,6],south:[3,1,5,7],west:[2,0,1,3],up:[2,3,7,6],down:[1,0,4,5]},hh=[0,1,2,0,2,3],ph=new ke(-.52,.7,-.55).normalize(),Ea={x:new ke(1,0,0),y:new ke(0,1,0),z:new ke(0,0,1)};function ho(e,n){const t=new Set;for(;n?.startsWith("#");){if(t.has(n))throw new Error(`Circular texture reference: ${n}`);t.add(n),n=e[n.slice(1)]}if(!n)throw new Error("Model has an unresolved texture.");return n.replace(/^minecraft:/,"")}function mh(e,n,t){const{from:i,to:l,rotation:r}=e,a=new ke(...r?.origin??[8,8,8]),s=new Nn;if(r?.axis)s.setFromAxisAngle(Ea[r.axis],Mt.degToRad(r.angle));else if(r){const P=[r.x??0,r.y??0,r.z??0].map(Mt.degToRad);s.setFromEuler(new ci(...P,"ZYX"))}const m=new ke(1,1,1);if(r?.rescale)for(const[P,D]of Object.entries(Ea)){const L=D.clone().applyQuaternion(s);m[P]=1/Math.max(Math.abs(L.x),Math.abs(L.y),Math.abs(L.z))}const v=dh[n].map(P=>new ke((P&4?l:i)[0],(P&2?l:i)[1],(P&1?l:i)[2]).sub(a).multiply(m).applyQuaternion(s).add(a)),[b,E,d,f]=t.uv??_h(i,l,n),x=[[b,E],[b,f],[d,f],[d,E]],g=Mt.euclideanModulo((t.rotation??0)/90,4),c=v.flatMap((P,D)=>{const[L,M]=x[(D+g)%4];return[L/16,1-M/16]}),o=v[1].clone().sub(v[0]).cross(v[2].clone().sub(v[0])).normalize(),S=Math.max(0,o.dot(ph)),T=e.shade===!1?1:.61+.39*S,w=new En;return w.setAttribute("position",new Rn(v.flatMap(P=>P.toArray()),3)),w.setAttribute("uv",new Rn(c,2)),w.setAttribute("color",new Rn(Array(12).fill(T),3)),w.setIndex(hh),w}function _h([e,n,t],[i,l,r],a){return{north:[16-i,16-l,16-e,16-n],east:[16-r,16-l,16-t,16-n],south:[e,16-l,i,16-n],west:[t,16-l,r,16-n],up:[e,t,i,r],down:[e,16-r,i,16-t]}[a]}function gh({data:e,width:n,height:t},i){const l=i.attributes.uv,r=Array.from({length:4},(E,d)=>l.getX(d)*n),a=Array.from({length:4},(E,d)=>(1-l.getY(d))*t),s=Math.floor(Math.min(...r)),m=Math.ceil(Math.max(...r)),v=Math.floor(Math.min(...a)),b=Math.ceil(Math.max(...a));for(let E=v;E<b;E+=1)for(let d=s;d<m;d+=1){const f=e[(E*n+d)*4+3];if(f>0&&f<255)return!0}return!1}function vh(e,n,t){const i=e.attributes.uv,l=(i.getX(0)+i.getX(2))/2,r=(i.getY(0)+i.getY(2))/2,a=1/(n*32),s=1/(t*32);for(let m=0;m<i.count;m+=1){const v=Mt.lerp(i.getX(m),l,a),b=Mt.lerp(i.getY(m),r,s);i.setXY(m,v,b)}}function Sh(e,n){const t=new no,i=new Map;for(const l of e.elements)for(const[r,a]of Object.entries(l.faces)){const s=ho(e.textures,a.texture);i.has(s)||i.set(s,[]),i.get(s).push(mh(l,r,a))}for(const[l,r]of i){const a=n.get(l),s=a.getContext("2d").getImageData(0,0,a.width,a.height),m=new io(a);m.colorSpace=Ia,m.magFilter=kt,m.minFilter=kt,m.generateMipmaps=!1,r.forEach(E=>vh(E,a.width,a.height));const v=new ni({map:m,vertexColors:!0,alphaTest:254.5/255});t.add(new Tt(uh(r),v));let b;for(const E of r){if(!gh(s,E)){E.dispose();continue}b||(b=new ni({map:m,vertexColors:!0,transparent:!0,depthWrite:!1,alphaTest:.5/255}),b.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
if (diffuseColor.a >= 0.9980392) discard;`)}),E.computeBoundingBox();const d=E.boundingBox.getCenter(new ke);E.translate(-d.x,-d.y,-d.z);const f=new Tt(E,b);f.position.copy(d),t.add(f)}}return t}function Eh(e){const n=new Set,t=new Set;for(const i of e.children)i.geometry.dispose(),n.add(i.material),t.add(i.material.map);n.forEach(i=>i.dispose()),t.forEach(i=>i.dispose())}var Wn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Xn(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var yi={exports:{}};var xa;function bh(){return xa||(xa=1,(function(e,n){(function(t){e.exports=t()})(function(){return(function t(i,l,r){function a(v,b){if(!l[v]){if(!i[v]){var E=typeof Xn=="function"&&Xn;if(!b&&E)return E(v,!0);if(s)return s(v,!0);var d=new Error("Cannot find module '"+v+"'");throw d.code="MODULE_NOT_FOUND",d}var f=l[v]={exports:{}};i[v][0].call(f.exports,function(x){var g=i[v][1][x];return a(g||x)},f,f.exports,t,i,l,r)}return l[v].exports}for(var s=typeof Xn=="function"&&Xn,m=0;m<r.length;m++)a(r[m]);return a})({1:[function(t,i,l){var r=t("./utils"),a=t("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";l.encode=function(m){for(var v,b,E,d,f,x,g,c=[],o=0,S=m.length,T=S,w=r.getTypeOf(m)!=="string";o<m.length;)T=S-o,E=w?(v=m[o++],b=o<S?m[o++]:0,o<S?m[o++]:0):(v=m.charCodeAt(o++),b=o<S?m.charCodeAt(o++):0,o<S?m.charCodeAt(o++):0),d=v>>2,f=(3&v)<<4|b>>4,x=1<T?(15&b)<<2|E>>6:64,g=2<T?63&E:64,c.push(s.charAt(d)+s.charAt(f)+s.charAt(x)+s.charAt(g));return c.join("")},l.decode=function(m){var v,b,E,d,f,x,g=0,c=0,o="data:";if(m.substr(0,o.length)===o)throw new Error("Invalid base64 input, it looks like a data url.");var S,T=3*(m=m.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(m.charAt(m.length-1)===s.charAt(64)&&T--,m.charAt(m.length-2)===s.charAt(64)&&T--,T%1!=0)throw new Error("Invalid base64 input, bad content length.");for(S=a.uint8array?new Uint8Array(0|T):new Array(0|T);g<m.length;)v=s.indexOf(m.charAt(g++))<<2|(d=s.indexOf(m.charAt(g++)))>>4,b=(15&d)<<4|(f=s.indexOf(m.charAt(g++)))>>2,E=(3&f)<<6|(x=s.indexOf(m.charAt(g++))),S[c++]=v,f!==64&&(S[c++]=b),x!==64&&(S[c++]=E);return S}},{"./support":30,"./utils":32}],2:[function(t,i,l){var r=t("./external"),a=t("./stream/DataWorker"),s=t("./stream/Crc32Probe"),m=t("./stream/DataLengthProbe");function v(b,E,d,f,x){this.compressedSize=b,this.uncompressedSize=E,this.crc32=d,this.compression=f,this.compressedContent=x}v.prototype={getContentWorker:function(){var b=new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new m("data_length")),E=this;return b.on("end",function(){if(this.streamInfo.data_length!==E.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),b},getCompressedWorker:function(){return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},v.createWorkerFrom=function(b,E,d){return b.pipe(new s).pipe(new m("uncompressedSize")).pipe(E.compressWorker(d)).pipe(new m("compressedSize")).withStreamInfo("compression",E)},i.exports=v},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,i,l){var r=t("./stream/GenericWorker");l.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},l.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,i,l){var r=t("./utils"),a=(function(){for(var s,m=[],v=0;v<256;v++){s=v;for(var b=0;b<8;b++)s=1&s?3988292384^s>>>1:s>>>1;m[v]=s}return m})();i.exports=function(s,m){return s!==void 0&&s.length?r.getTypeOf(s)!=="string"?(function(v,b,E,d){var f=a,x=d+E;v^=-1;for(var g=d;g<x;g++)v=v>>>8^f[255&(v^b[g])];return-1^v})(0|m,s,s.length,0):(function(v,b,E,d){var f=a,x=d+E;v^=-1;for(var g=d;g<x;g++)v=v>>>8^f[255&(v^b.charCodeAt(g))];return-1^v})(0|m,s,s.length,0):0}},{"./utils":32}],5:[function(t,i,l){l.base64=!1,l.binary=!1,l.dir=!1,l.createFolders=!0,l.date=null,l.compression=null,l.compressionOptions=null,l.comment=null,l.unixPermissions=null,l.dosPermissions=null},{}],6:[function(t,i,l){var r=null;r=typeof Promise<"u"?Promise:t("lie"),i.exports={Promise:r}},{lie:37}],7:[function(t,i,l){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=t("pako"),s=t("./utils"),m=t("./stream/GenericWorker"),v=r?"uint8array":"array";function b(E,d){m.call(this,"FlateWorker/"+E),this._pako=null,this._pakoAction=E,this._pakoOptions=d,this.meta={}}l.magic="\b\0",s.inherits(b,m),b.prototype.processChunk=function(E){this.meta=E.meta,this._pako===null&&this._createPako(),this._pako.push(s.transformTo(v,E.data),!1)},b.prototype.flush=function(){m.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},b.prototype.cleanUp=function(){m.prototype.cleanUp.call(this),this._pako=null},b.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var E=this;this._pako.onData=function(d){E.push({data:d,meta:E.meta})}},l.compressWorker=function(E){return new b("Deflate",E)},l.uncompressWorker=function(){return new b("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,i,l){function r(f,x){var g,c="";for(g=0;g<x;g++)c+=String.fromCharCode(255&f),f>>>=8;return c}function a(f,x,g,c,o,S){var T,w,P=f.file,D=f.compression,L=S!==v.utf8encode,M=s.transformTo("string",S(P.name)),A=s.transformTo("string",v.utf8encode(P.name)),X=P.comment,F=s.transformTo("string",S(X)),y=s.transformTo("string",v.utf8encode(X)),O=A.length!==P.name.length,u=y.length!==X.length,B="",V="",N="",se=P.dir,Z=P.date,ue={crc32:0,compressedSize:0,uncompressedSize:0};x&&!g||(ue.crc32=f.crc32,ue.compressedSize=f.compressedSize,ue.uncompressedSize=f.uncompressedSize);var W=0;x&&(W|=8),L||!O&&!u||(W|=2048);var G=0,ge=0;se&&(G|=16),o==="UNIX"?(ge=798,G|=(function(fe,ee){var he=fe;return fe||(he=ee?16893:33204),(65535&he)<<16})(P.unixPermissions,se)):(ge=20,G|=(function(fe){return 63&(fe||0)})(P.dosPermissions)),T=Z.getUTCHours(),T<<=6,T|=Z.getUTCMinutes(),T<<=5,T|=Z.getUTCSeconds()/2,w=Z.getUTCFullYear()-1980,w<<=4,w|=Z.getUTCMonth()+1,w<<=5,w|=Z.getUTCDate(),O&&(V=r(1,1)+r(b(M),4)+A,B+="up"+r(V.length,2)+V),u&&(N=r(1,1)+r(b(F),4)+y,B+="uc"+r(N.length,2)+N);var me="";return me+=`
\0`,me+=r(W,2),me+=D.magic,me+=r(T,2),me+=r(w,2),me+=r(ue.crc32,4),me+=r(ue.compressedSize,4),me+=r(ue.uncompressedSize,4),me+=r(M.length,2),me+=r(B.length,2),{fileRecord:E.LOCAL_FILE_HEADER+me+M+B,dirRecord:E.CENTRAL_FILE_HEADER+r(ge,2)+me+r(F.length,2)+"\0\0\0\0"+r(G,4)+r(c,4)+M+B+F}}var s=t("../utils"),m=t("../stream/GenericWorker"),v=t("../utf8"),b=t("../crc32"),E=t("../signature");function d(f,x,g,c){m.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=x,this.zipPlatform=g,this.encodeFileName=c,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(d,m),d.prototype.push=function(f){var x=f.meta.percent||0,g=this.entriesCount,c=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,m.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:g?(x+100*(g-c-1))/g:100}}))},d.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var x=this.streamFiles&&!f.file.dir;if(x){var g=a(f,x,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},d.prototype.closedSource=function(f){this.accumulate=!1;var x=this.streamFiles&&!f.file.dir,g=a(f,x,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),x)this.push({data:(function(c){return E.DATA_DESCRIPTOR+r(c.crc32,4)+r(c.compressedSize,4)+r(c.uncompressedSize,4)})(f),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},d.prototype.flush=function(){for(var f=this.bytesWritten,x=0;x<this.dirRecords.length;x++)this.push({data:this.dirRecords[x],meta:{percent:100}});var g=this.bytesWritten-f,c=(function(o,S,T,w,P){var D=s.transformTo("string",P(w));return E.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(o,2)+r(o,2)+r(S,4)+r(T,4)+r(D.length,2)+D})(this.dirRecords.length,g,f,this.zipComment,this.encodeFileName);this.push({data:c,meta:{percent:100}})},d.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},d.prototype.registerPrevious=function(f){this._sources.push(f);var x=this;return f.on("data",function(g){x.processChunk(g)}),f.on("end",function(){x.closedSource(x.previous.streamInfo),x._sources.length?x.prepareNextSource():x.end()}),f.on("error",function(g){x.error(g)}),this},d.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},d.prototype.error=function(f){var x=this._sources;if(!m.prototype.error.call(this,f))return!1;for(var g=0;g<x.length;g++)try{x[g].error(f)}catch{}return!0},d.prototype.lock=function(){m.prototype.lock.call(this);for(var f=this._sources,x=0;x<f.length;x++)f[x].lock()},i.exports=d},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,i,l){var r=t("../compressions"),a=t("./ZipFileWorker");l.generateWorker=function(s,m,v){var b=new a(m.streamFiles,v,m.platform,m.encodeFileName),E=0;try{s.forEach(function(d,f){E++;var x=(function(S,T){var w=S||T,P=r[w];if(!P)throw new Error(w+" is not a valid compression method !");return P})(f.options.compression,m.compression),g=f.options.compressionOptions||m.compressionOptions||{},c=f.dir,o=f.date;f._compressWorker(x,g).withStreamInfo("file",{name:d,dir:c,date:o,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(b)}),b.entriesCount=E}catch(d){b.error(d)}return b}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,i,l){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new r;for(var s in this)typeof this[s]!="function"&&(a[s]=this[s]);return a}}(r.prototype=t("./object")).loadAsync=t("./load"),r.support=t("./support"),r.defaults=t("./defaults"),r.version="3.10.1",r.loadAsync=function(a,s){return new r().loadAsync(a,s)},r.external=t("./external"),i.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,i,l){var r=t("./utils"),a=t("./external"),s=t("./utf8"),m=t("./zipEntries"),v=t("./stream/Crc32Probe"),b=t("./nodejsUtils");function E(d){return new a.Promise(function(f,x){var g=d.decompressed.getContentWorker().pipe(new v);g.on("error",function(c){x(c)}).on("end",function(){g.streamInfo.crc32!==d.decompressed.crc32?x(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}i.exports=function(d,f){var x=this;return f=r.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),b.isNode&&b.isStream(d)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",d,!0,f.optimizedBinaryString,f.base64).then(function(g){var c=new m(f);return c.load(g),c}).then(function(g){var c=[a.Promise.resolve(g)],o=g.files;if(f.checkCRC32)for(var S=0;S<o.length;S++)c.push(E(o[S]));return a.Promise.all(c)}).then(function(g){for(var c=g.shift(),o=c.files,S=0;S<o.length;S++){var T=o[S],w=T.fileNameStr,P=r.resolve(T.fileNameStr);x.file(P,T.decompressed,{binary:!0,optimizedBinaryString:!0,date:T.date,dir:T.dir,comment:T.fileCommentStr.length?T.fileCommentStr:null,unixPermissions:T.unixPermissions,dosPermissions:T.dosPermissions,createFolders:f.createFolders}),T.dir||(x.file(P).unsafeOriginalName=w)}return c.zipComment.length&&(x.comment=c.zipComment),x})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,i,l){var r=t("../utils"),a=t("../stream/GenericWorker");function s(m,v){a.call(this,"Nodejs stream input adapter for "+m),this._upstreamEnded=!1,this._bindStream(v)}r.inherits(s,a),s.prototype._bindStream=function(m){var v=this;(this._stream=m).pause(),m.on("data",function(b){v.push({data:b,meta:{percent:0}})}).on("error",function(b){v.isPaused?this.generatedError=b:v.error(b)}).on("end",function(){v.isPaused?v._upstreamEnded=!0:v.end()})},s.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,i,l){var r=t("readable-stream").Readable;function a(s,m,v){r.call(this,m),this._helper=s;var b=this;s.on("data",function(E,d){b.push(E)||b._helper.pause(),v&&v(d)}).on("error",function(E){b.emit("error",E)}).on("end",function(){b.push(null)})}t("../utils").inherits(a,r),a.prototype._read=function(){this._helper.resume()},i.exports=a},{"../utils":32,"readable-stream":16}],14:[function(t,i,l){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,a);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,a)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var a=new Buffer(r);return a.fill(0),a},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(t,i,l){function r(P,D,L){var M,A=s.getTypeOf(D),X=s.extend(L||{},b);X.date=X.date||new Date,X.compression!==null&&(X.compression=X.compression.toUpperCase()),typeof X.unixPermissions=="string"&&(X.unixPermissions=parseInt(X.unixPermissions,8)),X.unixPermissions&&16384&X.unixPermissions&&(X.dir=!0),X.dosPermissions&&16&X.dosPermissions&&(X.dir=!0),X.dir&&(P=o(P)),X.createFolders&&(M=c(P))&&S.call(this,M,!0);var F=A==="string"&&X.binary===!1&&X.base64===!1;L&&L.binary!==void 0||(X.binary=!F),(D instanceof E&&D.uncompressedSize===0||X.dir||!D||D.length===0)&&(X.base64=!1,X.binary=!0,D="",X.compression="STORE",A="string");var y=null;y=D instanceof E||D instanceof m?D:x.isNode&&x.isStream(D)?new g(P,D):s.prepareContent(P,D,X.binary,X.optimizedBinaryString,X.base64);var O=new d(P,y,X);this.files[P]=O}var a=t("./utf8"),s=t("./utils"),m=t("./stream/GenericWorker"),v=t("./stream/StreamHelper"),b=t("./defaults"),E=t("./compressedObject"),d=t("./zipObject"),f=t("./generate"),x=t("./nodejsUtils"),g=t("./nodejs/NodejsStreamInputAdapter"),c=function(P){P.slice(-1)==="/"&&(P=P.substring(0,P.length-1));var D=P.lastIndexOf("/");return 0<D?P.substring(0,D):""},o=function(P){return P.slice(-1)!=="/"&&(P+="/"),P},S=function(P,D){return D=D!==void 0?D:b.createFolders,P=o(P),this.files[P]||r.call(this,P,null,{dir:!0,createFolders:D}),this.files[P]};function T(P){return Object.prototype.toString.call(P)==="[object RegExp]"}var w={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(P){var D,L,M;for(D in this.files)M=this.files[D],(L=D.slice(this.root.length,D.length))&&D.slice(0,this.root.length)===this.root&&P(L,M)},filter:function(P){var D=[];return this.forEach(function(L,M){P(L,M)&&D.push(M)}),D},file:function(P,D,L){if(arguments.length!==1)return P=this.root+P,r.call(this,P,D,L),this;if(T(P)){var M=P;return this.filter(function(X,F){return!F.dir&&M.test(X)})}var A=this.files[this.root+P];return A&&!A.dir?A:null},folder:function(P){if(!P)return this;if(T(P))return this.filter(function(A,X){return X.dir&&P.test(A)});var D=this.root+P,L=S.call(this,D),M=this.clone();return M.root=L.name,M},remove:function(P){P=this.root+P;var D=this.files[P];if(D||(P.slice(-1)!=="/"&&(P+="/"),D=this.files[P]),D&&!D.dir)delete this.files[P];else for(var L=this.filter(function(A,X){return X.name.slice(0,P.length)===P}),M=0;M<L.length;M++)delete this.files[L[M].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(P){var D,L={};try{if((L=s.extend(P||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=L.type.toLowerCase(),L.compression=L.compression.toUpperCase(),L.type==="binarystring"&&(L.type="string"),!L.type)throw new Error("No output type specified.");s.checkSupport(L.type),L.platform!=="darwin"&&L.platform!=="freebsd"&&L.platform!=="linux"&&L.platform!=="sunos"||(L.platform="UNIX"),L.platform==="win32"&&(L.platform="DOS");var M=L.comment||this.comment||"";D=f.generateWorker(this,L,M)}catch(A){(D=new m("error")).error(A)}return new v(D,L.type||"string",L.mimeType)},generateAsync:function(P,D){return this.generateInternalStream(P).accumulate(D)},generateNodeStream:function(P,D){return(P=P||{}).type||(P.type="nodebuffer"),this.generateInternalStream(P).toNodejsStream(D)}};i.exports=w},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,i,l){i.exports=t("stream")},{stream:void 0}],17:[function(t,i,l){var r=t("./DataReader");function a(s){r.call(this,s);for(var m=0;m<this.data.length;m++)s[m]=255&s[m]}t("../utils").inherits(a,r),a.prototype.byteAt=function(s){return this.data[this.zero+s]},a.prototype.lastIndexOfSignature=function(s){for(var m=s.charCodeAt(0),v=s.charCodeAt(1),b=s.charCodeAt(2),E=s.charCodeAt(3),d=this.length-4;0<=d;--d)if(this.data[d]===m&&this.data[d+1]===v&&this.data[d+2]===b&&this.data[d+3]===E)return d-this.zero;return-1},a.prototype.readAndCheckSignature=function(s){var m=s.charCodeAt(0),v=s.charCodeAt(1),b=s.charCodeAt(2),E=s.charCodeAt(3),d=this.readData(4);return m===d[0]&&v===d[1]&&b===d[2]&&E===d[3]},a.prototype.readData=function(s){if(this.checkOffset(s),s===0)return[];var m=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,m},i.exports=a},{"../utils":32,"./DataReader":18}],18:[function(t,i,l){var r=t("../utils");function a(s){this.data=s,this.length=s.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(s){this.checkIndex(this.index+s)},checkIndex:function(s){if(this.length<this.zero+s||s<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+s+"). Corrupted zip ?")},setIndex:function(s){this.checkIndex(s),this.index=s},skip:function(s){this.setIndex(this.index+s)},byteAt:function(){},readInt:function(s){var m,v=0;for(this.checkOffset(s),m=this.index+s-1;m>=this.index;m--)v=(v<<8)+this.byteAt(m);return this.index+=s,v},readString:function(s){return r.transformTo("string",this.readData(s))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var s=this.readInt(4);return new Date(Date.UTC(1980+(s>>25&127),(s>>21&15)-1,s>>16&31,s>>11&31,s>>5&63,(31&s)<<1))}},i.exports=a},{"../utils":32}],19:[function(t,i,l){var r=t("./Uint8ArrayReader");function a(s){r.call(this,s)}t("../utils").inherits(a,r),a.prototype.readData=function(s){this.checkOffset(s);var m=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,m},i.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,i,l){var r=t("./DataReader");function a(s){r.call(this,s)}t("../utils").inherits(a,r),a.prototype.byteAt=function(s){return this.data.charCodeAt(this.zero+s)},a.prototype.lastIndexOfSignature=function(s){return this.data.lastIndexOf(s)-this.zero},a.prototype.readAndCheckSignature=function(s){return s===this.readData(4)},a.prototype.readData=function(s){this.checkOffset(s);var m=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,m},i.exports=a},{"../utils":32,"./DataReader":18}],21:[function(t,i,l){var r=t("./ArrayReader");function a(s){r.call(this,s)}t("../utils").inherits(a,r),a.prototype.readData=function(s){if(this.checkOffset(s),s===0)return new Uint8Array(0);var m=this.data.subarray(this.zero+this.index,this.zero+this.index+s);return this.index+=s,m},i.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(t,i,l){var r=t("../utils"),a=t("../support"),s=t("./ArrayReader"),m=t("./StringReader"),v=t("./NodeBufferReader"),b=t("./Uint8ArrayReader");i.exports=function(E){var d=r.getTypeOf(E);return r.checkSupport(d),d!=="string"||a.uint8array?d==="nodebuffer"?new v(E):a.uint8array?new b(r.transformTo("uint8array",E)):new s(r.transformTo("array",E)):new m(E)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,i,l){l.LOCAL_FILE_HEADER="PK",l.CENTRAL_FILE_HEADER="PK",l.CENTRAL_DIRECTORY_END="PK",l.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",l.ZIP64_CENTRAL_DIRECTORY_END="PK",l.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,i,l){var r=t("./GenericWorker"),a=t("../utils");function s(m){r.call(this,"ConvertWorker to "+m),this.destType=m}a.inherits(s,r),s.prototype.processChunk=function(m){this.push({data:a.transformTo(this.destType,m.data),meta:m.meta})},i.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(t,i,l){var r=t("./GenericWorker"),a=t("../crc32");function s(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(s,r),s.prototype.processChunk=function(m){this.streamInfo.crc32=a(m.data,this.streamInfo.crc32||0),this.push(m)},i.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,i,l){var r=t("../utils"),a=t("./GenericWorker");function s(m){a.call(this,"DataLengthProbe for "+m),this.propName=m,this.withStreamInfo(m,0)}r.inherits(s,a),s.prototype.processChunk=function(m){if(m){var v=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=v+m.data.length}a.prototype.processChunk.call(this,m)},i.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(t,i,l){var r=t("../utils"),a=t("./GenericWorker");function s(m){a.call(this,"DataWorker");var v=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,m.then(function(b){v.dataIsReady=!0,v.data=b,v.max=b&&b.length||0,v.type=r.getTypeOf(b),v.isPaused||v._tickAndRepeat()},function(b){v.error(b)})}r.inherits(s,a),s.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var m=null,v=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":m=this.data.substring(this.index,v);break;case"uint8array":m=this.data.subarray(this.index,v);break;case"array":case"nodebuffer":m=this.data.slice(this.index,v)}return this.index=v,this.push({data:m,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(t,i,l){function r(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,s){return this._listeners[a].push(s),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,s){if(this._listeners[a])for(var m=0;m<this._listeners[a].length;m++)this._listeners[a][m].call(this,s)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var s=this;return a.on("data",function(m){s.processChunk(m)}),a.on("end",function(){s.end()}),a.on("error",function(m){s.error(m)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,s){return this.extraStreamInfo[a]=s,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},i.exports=r},{}],29:[function(t,i,l){var r=t("../utils"),a=t("./ConvertWorker"),s=t("./GenericWorker"),m=t("../base64"),v=t("../support"),b=t("../external"),E=null;if(v.nodestream)try{E=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function d(x,g){return new b.Promise(function(c,o){var S=[],T=x._internalType,w=x._outputType,P=x._mimeType;x.on("data",function(D,L){S.push(D),g&&g(L)}).on("error",function(D){S=[],o(D)}).on("end",function(){try{var D=(function(L,M,A){switch(L){case"blob":return r.newBlob(r.transformTo("arraybuffer",M),A);case"base64":return m.encode(M);default:return r.transformTo(L,M)}})(w,(function(L,M){var A,X=0,F=null,y=0;for(A=0;A<M.length;A++)y+=M[A].length;switch(L){case"string":return M.join("");case"array":return Array.prototype.concat.apply([],M);case"uint8array":for(F=new Uint8Array(y),A=0;A<M.length;A++)F.set(M[A],X),X+=M[A].length;return F;case"nodebuffer":return Buffer.concat(M);default:throw new Error("concat : unsupported type '"+L+"'")}})(T,S),P);c(D)}catch(L){o(L)}S=[]}).resume()})}function f(x,g,c){var o=g;switch(g){case"blob":case"arraybuffer":o="uint8array";break;case"base64":o="string"}try{this._internalType=o,this._outputType=g,this._mimeType=c,r.checkSupport(o),this._worker=x.pipe(new a(o)),x.lock()}catch(S){this._worker=new s("error"),this._worker.error(S)}}f.prototype={accumulate:function(x){return d(this,x)},on:function(x,g){var c=this;return x==="data"?this._worker.on(x,function(o){g.call(c,o.data,o.meta)}):this._worker.on(x,function(){r.delay(g,arguments,c)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(x){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new E(this,{objectMode:this._outputType!=="nodebuffer"},x)}},i.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,i,l){if(l.base64=!0,l.array=!0,l.string=!0,l.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",l.nodebuffer=typeof Buffer<"u",l.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")l.blob=!1;else{var r=new ArrayBuffer(0);try{l.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(r),l.blob=a.getBlob("application/zip").size===0}catch{l.blob=!1}}}try{l.nodestream=!!t("readable-stream").Readable}catch{l.nodestream=!1}},{"readable-stream":16}],31:[function(t,i,l){for(var r=t("./utils"),a=t("./support"),s=t("./nodejsUtils"),m=t("./stream/GenericWorker"),v=new Array(256),b=0;b<256;b++)v[b]=252<=b?6:248<=b?5:240<=b?4:224<=b?3:192<=b?2:1;v[254]=v[254]=1;function E(){m.call(this,"utf-8 decode"),this.leftOver=null}function d(){m.call(this,"utf-8 encode")}l.utf8encode=function(f){return a.nodebuffer?s.newBufferFrom(f,"utf-8"):(function(x){var g,c,o,S,T,w=x.length,P=0;for(S=0;S<w;S++)(64512&(c=x.charCodeAt(S)))==55296&&S+1<w&&(64512&(o=x.charCodeAt(S+1)))==56320&&(c=65536+(c-55296<<10)+(o-56320),S++),P+=c<128?1:c<2048?2:c<65536?3:4;for(g=a.uint8array?new Uint8Array(P):new Array(P),S=T=0;T<P;S++)(64512&(c=x.charCodeAt(S)))==55296&&S+1<w&&(64512&(o=x.charCodeAt(S+1)))==56320&&(c=65536+(c-55296<<10)+(o-56320),S++),c<128?g[T++]=c:(c<2048?g[T++]=192|c>>>6:(c<65536?g[T++]=224|c>>>12:(g[T++]=240|c>>>18,g[T++]=128|c>>>12&63),g[T++]=128|c>>>6&63),g[T++]=128|63&c);return g})(f)},l.utf8decode=function(f){return a.nodebuffer?r.transformTo("nodebuffer",f).toString("utf-8"):(function(x){var g,c,o,S,T=x.length,w=new Array(2*T);for(g=c=0;g<T;)if((o=x[g++])<128)w[c++]=o;else if(4<(S=v[o]))w[c++]=65533,g+=S-1;else{for(o&=S===2?31:S===3?15:7;1<S&&g<T;)o=o<<6|63&x[g++],S--;1<S?w[c++]=65533:o<65536?w[c++]=o:(o-=65536,w[c++]=55296|o>>10&1023,w[c++]=56320|1023&o)}return w.length!==c&&(w.subarray?w=w.subarray(0,c):w.length=c),r.applyFromCharCode(w)})(f=r.transformTo(a.uint8array?"uint8array":"array",f))},r.inherits(E,m),E.prototype.processChunk=function(f){var x=r.transformTo(a.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var g=x;(x=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),x.set(g,this.leftOver.length)}else x=this.leftOver.concat(x);this.leftOver=null}var c=(function(S,T){var w;for((T=T||S.length)>S.length&&(T=S.length),w=T-1;0<=w&&(192&S[w])==128;)w--;return w<0||w===0?T:w+v[S[w]]>T?w:T})(x),o=x;c!==x.length&&(a.uint8array?(o=x.subarray(0,c),this.leftOver=x.subarray(c,x.length)):(o=x.slice(0,c),this.leftOver=x.slice(c,x.length))),this.push({data:l.utf8decode(o),meta:f.meta})},E.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:l.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},l.Utf8DecodeWorker=E,r.inherits(d,m),d.prototype.processChunk=function(f){this.push({data:l.utf8encode(f.data),meta:f.meta})},l.Utf8EncodeWorker=d},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,i,l){var r=t("./support"),a=t("./base64"),s=t("./nodejsUtils"),m=t("./external");function v(g){return g}function b(g,c){for(var o=0;o<g.length;++o)c[o]=255&g.charCodeAt(o);return c}t("setimmediate"),l.newBlob=function(g,c){l.checkSupport("blob");try{return new Blob([g],{type:c})}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return o.append(g),o.getBlob(c)}catch{throw new Error("Bug : can't construct the Blob.")}}};var E={stringifyByChunk:function(g,c,o){var S=[],T=0,w=g.length;if(w<=o)return String.fromCharCode.apply(null,g);for(;T<w;)c==="array"||c==="nodebuffer"?S.push(String.fromCharCode.apply(null,g.slice(T,Math.min(T+o,w)))):S.push(String.fromCharCode.apply(null,g.subarray(T,Math.min(T+o,w)))),T+=o;return S.join("")},stringifyByChar:function(g){for(var c="",o=0;o<g.length;o++)c+=String.fromCharCode(g[o]);return c},applyCanBeUsed:{uint8array:(function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,s.allocBuffer(1)).length===1}catch{return!1}})()}};function d(g){var c=65536,o=l.getTypeOf(g),S=!0;if(o==="uint8array"?S=E.applyCanBeUsed.uint8array:o==="nodebuffer"&&(S=E.applyCanBeUsed.nodebuffer),S)for(;1<c;)try{return E.stringifyByChunk(g,o,c)}catch{c=Math.floor(c/2)}return E.stringifyByChar(g)}function f(g,c){for(var o=0;o<g.length;o++)c[o]=g[o];return c}l.applyFromCharCode=d;var x={};x.string={string:v,array:function(g){return b(g,new Array(g.length))},arraybuffer:function(g){return x.string.uint8array(g).buffer},uint8array:function(g){return b(g,new Uint8Array(g.length))},nodebuffer:function(g){return b(g,s.allocBuffer(g.length))}},x.array={string:d,array:v,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return s.newBufferFrom(g)}},x.arraybuffer={string:function(g){return d(new Uint8Array(g))},array:function(g){return f(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:v,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return s.newBufferFrom(new Uint8Array(g))}},x.uint8array={string:d,array:function(g){return f(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:v,nodebuffer:function(g){return s.newBufferFrom(g)}},x.nodebuffer={string:d,array:function(g){return f(g,new Array(g.length))},arraybuffer:function(g){return x.nodebuffer.uint8array(g).buffer},uint8array:function(g){return f(g,new Uint8Array(g.length))},nodebuffer:v},l.transformTo=function(g,c){if(c=c||"",!g)return c;l.checkSupport(g);var o=l.getTypeOf(c);return x[o][g](c)},l.resolve=function(g){for(var c=g.split("/"),o=[],S=0;S<c.length;S++){var T=c[S];T==="."||T===""&&S!==0&&S!==c.length-1||(T===".."?o.pop():o.push(T))}return o.join("/")},l.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":r.nodebuffer&&s.isBuffer(g)?"nodebuffer":r.uint8array&&g instanceof Uint8Array?"uint8array":r.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},l.checkSupport=function(g){if(!r[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},l.MAX_VALUE_16BITS=65535,l.MAX_VALUE_32BITS=-1,l.pretty=function(g){var c,o,S="";for(o=0;o<(g||"").length;o++)S+="\\x"+((c=g.charCodeAt(o))<16?"0":"")+c.toString(16).toUpperCase();return S},l.delay=function(g,c,o){setImmediate(function(){g.apply(o||null,c||[])})},l.inherits=function(g,c){function o(){}o.prototype=c.prototype,g.prototype=new o},l.extend=function(){var g,c,o={};for(g=0;g<arguments.length;g++)for(c in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],c)&&o[c]===void 0&&(o[c]=arguments[g][c]);return o},l.prepareContent=function(g,c,o,S,T){return m.Promise.resolve(c).then(function(w){return r.blob&&(w instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(w))!==-1)&&typeof FileReader<"u"?new m.Promise(function(P,D){var L=new FileReader;L.onload=function(M){P(M.target.result)},L.onerror=function(M){D(M.target.error)},L.readAsArrayBuffer(w)}):w}).then(function(w){var P=l.getTypeOf(w);return P?(P==="arraybuffer"?w=l.transformTo("uint8array",w):P==="string"&&(T?w=a.decode(w):o&&S!==!0&&(w=(function(D){return b(D,r.uint8array?new Uint8Array(D.length):new Array(D.length))})(w))),w):m.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,i,l){var r=t("./reader/readerFor"),a=t("./utils"),s=t("./signature"),m=t("./zipEntry"),v=t("./support");function b(E){this.files=[],this.loadOptions=E}b.prototype={checkSignature:function(E){if(!this.reader.readAndCheckSignature(E)){this.reader.index-=4;var d=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(d)+", expected "+a.pretty(E)+")")}},isSignature:function(E,d){var f=this.reader.index;this.reader.setIndex(E);var x=this.reader.readString(4)===d;return this.reader.setIndex(f),x},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var E=this.reader.readData(this.zipCommentLength),d=v.uint8array?"uint8array":"array",f=a.transformTo(d,E);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var E,d,f,x=this.zip64EndOfCentralSize-44;0<x;)E=this.reader.readInt(2),d=this.reader.readInt(4),f=this.reader.readData(d),this.zip64ExtensibleData[E]={id:E,length:d,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var E,d;for(E=0;E<this.files.length;E++)d=this.files[E],this.reader.setIndex(d.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),d.readLocalPart(this.reader),d.handleUTF8(),d.processAttributes()},readCentralDir:function(){var E;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(E=new m({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(E);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var E=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(E<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(E);var d=E;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(E=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(E),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var x=d-f;if(0<x)this.isSignature(d,s.CENTRAL_FILE_HEADER)||(this.reader.zero=x);else if(x<0)throw new Error("Corrupted zip: missing "+Math.abs(x)+" bytes.")},prepareReader:function(E){this.reader=r(E)},load:function(E){this.prepareReader(E),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=b},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,i,l){var r=t("./reader/readerFor"),a=t("./utils"),s=t("./compressedObject"),m=t("./crc32"),v=t("./utf8"),b=t("./compressions"),E=t("./support");function d(f,x){this.options=f,this.loadOptions=x}d.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var x,g;if(f.skip(22),this.fileNameLength=f.readInt(2),g=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((x=(function(c){for(var o in b)if(Object.prototype.hasOwnProperty.call(b,o)&&b[o].magic===c)return b[o];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,x,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var x=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(x),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=r(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var x,g,c,o=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<o;)x=f.readInt(2),g=f.readInt(2),c=f.readData(g),this.extraFields[x]={id:x,length:g,value:c};f.setIndex(o)},handleUTF8:function(){var f=E.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=v.utf8decode(this.fileName),this.fileCommentStr=v.utf8decode(this.fileComment);else{var x=this.findExtraFieldUnicodePath();if(x!==null)this.fileNameStr=x;else{var g=a.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var c=this.findExtraFieldUnicodeComment();if(c!==null)this.fileCommentStr=c;else{var o=a.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(o)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var x=r(f.value);return x.readInt(1)!==1||m(this.fileName)!==x.readInt(4)?null:v.utf8decode(x.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var x=r(f.value);return x.readInt(1)!==1||m(this.fileComment)!==x.readInt(4)?null:v.utf8decode(x.readData(f.length-5))}return null}},i.exports=d},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,i,l){function r(x,g,c){this.name=x,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this.unixPermissions=c.unixPermissions,this.dosPermissions=c.dosPermissions,this._data=g,this._dataBinary=c.binary,this.options={compression:c.compression,compressionOptions:c.compressionOptions}}var a=t("./stream/StreamHelper"),s=t("./stream/DataWorker"),m=t("./utf8"),v=t("./compressedObject"),b=t("./stream/GenericWorker");r.prototype={internalStream:function(x){var g=null,c="string";try{if(!x)throw new Error("No output type specified.");var o=(c=x.toLowerCase())==="string"||c==="text";c!=="binarystring"&&c!=="text"||(c="string"),g=this._decompressWorker();var S=!this._dataBinary;S&&!o&&(g=g.pipe(new m.Utf8EncodeWorker)),!S&&o&&(g=g.pipe(new m.Utf8DecodeWorker))}catch(T){(g=new b("error")).error(T)}return new a(g,c,"")},async:function(x,g){return this.internalStream(x).accumulate(g)},nodeStream:function(x,g){return this.internalStream(x||"nodebuffer").toNodejsStream(g)},_compressWorker:function(x,g){if(this._data instanceof v&&this._data.compression.magic===x.magic)return this._data.getCompressedWorker();var c=this._decompressWorker();return this._dataBinary||(c=c.pipe(new m.Utf8EncodeWorker)),v.createWorkerFrom(c,x,g)},_decompressWorker:function(){return this._data instanceof v?this._data.getContentWorker():this._data instanceof b?this._data:new s(this._data)}};for(var E=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],d=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<E.length;f++)r.prototype[E[f]]=d;i.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,i,l){(function(r){var a,s,m=r.MutationObserver||r.WebKitMutationObserver;if(m){var v=0,b=new m(x),E=r.document.createTextNode("");b.observe(E,{characterData:!0}),a=function(){E.data=v=++v%2}}else if(r.setImmediate||r.MessageChannel===void 0)a="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var g=r.document.createElement("script");g.onreadystatechange=function(){x(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},r.document.documentElement.appendChild(g)}:function(){setTimeout(x,0)};else{var d=new r.MessageChannel;d.port1.onmessage=x,a=function(){d.port2.postMessage(0)}}var f=[];function x(){var g,c;s=!0;for(var o=f.length;o;){for(c=f,f=[],g=-1;++g<o;)c[g]();o=f.length}s=!1}i.exports=function(g){f.push(g)!==1||s||a()}}).call(this,typeof Wn<"u"?Wn:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,i,l){var r=t("immediate");function a(){}var s={},m=["REJECTED"],v=["FULFILLED"],b=["PENDING"];function E(o){if(typeof o!="function")throw new TypeError("resolver must be a function");this.state=b,this.queue=[],this.outcome=void 0,o!==a&&g(this,o)}function d(o,S,T){this.promise=o,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof T=="function"&&(this.onRejected=T,this.callRejected=this.otherCallRejected)}function f(o,S,T){r(function(){var w;try{w=S(T)}catch(P){return s.reject(o,P)}w===o?s.reject(o,new TypeError("Cannot resolve promise with itself")):s.resolve(o,w)})}function x(o){var S=o&&o.then;if(o&&(typeof o=="object"||typeof o=="function")&&typeof S=="function")return function(){S.apply(o,arguments)}}function g(o,S){var T=!1;function w(L){T||(T=!0,s.reject(o,L))}function P(L){T||(T=!0,s.resolve(o,L))}var D=c(function(){S(P,w)});D.status==="error"&&w(D.value)}function c(o,S){var T={};try{T.value=o(S),T.status="success"}catch(w){T.status="error",T.value=w}return T}(i.exports=E).prototype.finally=function(o){if(typeof o!="function")return this;var S=this.constructor;return this.then(function(T){return S.resolve(o()).then(function(){return T})},function(T){return S.resolve(o()).then(function(){throw T})})},E.prototype.catch=function(o){return this.then(null,o)},E.prototype.then=function(o,S){if(typeof o!="function"&&this.state===v||typeof S!="function"&&this.state===m)return this;var T=new this.constructor(a);return this.state!==b?f(T,this.state===v?o:S,this.outcome):this.queue.push(new d(T,o,S)),T},d.prototype.callFulfilled=function(o){s.resolve(this.promise,o)},d.prototype.otherCallFulfilled=function(o){f(this.promise,this.onFulfilled,o)},d.prototype.callRejected=function(o){s.reject(this.promise,o)},d.prototype.otherCallRejected=function(o){f(this.promise,this.onRejected,o)},s.resolve=function(o,S){var T=c(x,S);if(T.status==="error")return s.reject(o,T.value);var w=T.value;if(w)g(o,w);else{o.state=v,o.outcome=S;for(var P=-1,D=o.queue.length;++P<D;)o.queue[P].callFulfilled(S)}return o},s.reject=function(o,S){o.state=m,o.outcome=S;for(var T=-1,w=o.queue.length;++T<w;)o.queue[T].callRejected(S);return o},E.resolve=function(o){return o instanceof this?o:s.resolve(new this(a),o)},E.reject=function(o){var S=new this(a);return s.reject(S,o)},E.all=function(o){var S=this;if(Object.prototype.toString.call(o)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=o.length,w=!1;if(!T)return this.resolve([]);for(var P=new Array(T),D=0,L=-1,M=new this(a);++L<T;)A(o[L],L);return M;function A(X,F){S.resolve(X).then(function(y){P[F]=y,++D!==T||w||(w=!0,s.resolve(M,P))},function(y){w||(w=!0,s.reject(M,y))})}},E.race=function(o){var S=this;if(Object.prototype.toString.call(o)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=o.length,w=!1;if(!T)return this.resolve([]);for(var P=-1,D=new this(a);++P<T;)L=o[P],S.resolve(L).then(function(M){w||(w=!0,s.resolve(D,M))},function(M){w||(w=!0,s.reject(D,M))});var L;return D}},{immediate:36}],38:[function(t,i,l){var r={};(0,t("./lib/utils/common").assign)(r,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),i.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,i,l){var r=t("./zlib/deflate"),a=t("./utils/common"),s=t("./utils/strings"),m=t("./zlib/messages"),v=t("./zlib/zstream"),b=Object.prototype.toString,E=0,d=-1,f=0,x=8;function g(o){if(!(this instanceof g))return new g(o);this.options=a.assign({level:d,method:x,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},o||{});var S=this.options;S.raw&&0<S.windowBits?S.windowBits=-S.windowBits:S.gzip&&0<S.windowBits&&S.windowBits<16&&(S.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new v,this.strm.avail_out=0;var T=r.deflateInit2(this.strm,S.level,S.method,S.windowBits,S.memLevel,S.strategy);if(T!==E)throw new Error(m[T]);if(S.header&&r.deflateSetHeader(this.strm,S.header),S.dictionary){var w;if(w=typeof S.dictionary=="string"?s.string2buf(S.dictionary):b.call(S.dictionary)==="[object ArrayBuffer]"?new Uint8Array(S.dictionary):S.dictionary,(T=r.deflateSetDictionary(this.strm,w))!==E)throw new Error(m[T]);this._dict_set=!0}}function c(o,S){var T=new g(S);if(T.push(o,!0),T.err)throw T.msg||m[T.err];return T.result}g.prototype.push=function(o,S){var T,w,P=this.strm,D=this.options.chunkSize;if(this.ended)return!1;w=S===~~S?S:S===!0?4:0,typeof o=="string"?P.input=s.string2buf(o):b.call(o)==="[object ArrayBuffer]"?P.input=new Uint8Array(o):P.input=o,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new a.Buf8(D),P.next_out=0,P.avail_out=D),(T=r.deflate(P,w))!==1&&T!==E)return this.onEnd(T),!(this.ended=!0);P.avail_out!==0&&(P.avail_in!==0||w!==4&&w!==2)||(this.options.to==="string"?this.onData(s.buf2binstring(a.shrinkBuf(P.output,P.next_out))):this.onData(a.shrinkBuf(P.output,P.next_out)))}while((0<P.avail_in||P.avail_out===0)&&T!==1);return w===4?(T=r.deflateEnd(this.strm),this.onEnd(T),this.ended=!0,T===E):w!==2||(this.onEnd(E),!(P.avail_out=0))},g.prototype.onData=function(o){this.chunks.push(o)},g.prototype.onEnd=function(o){o===E&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=o,this.msg=this.strm.msg},l.Deflate=g,l.deflate=c,l.deflateRaw=function(o,S){return(S=S||{}).raw=!0,c(o,S)},l.gzip=function(o,S){return(S=S||{}).gzip=!0,c(o,S)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,i,l){var r=t("./zlib/inflate"),a=t("./utils/common"),s=t("./utils/strings"),m=t("./zlib/constants"),v=t("./zlib/messages"),b=t("./zlib/zstream"),E=t("./zlib/gzheader"),d=Object.prototype.toString;function f(g){if(!(this instanceof f))return new f(g);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},g||{});var c=this.options;c.raw&&0<=c.windowBits&&c.windowBits<16&&(c.windowBits=-c.windowBits,c.windowBits===0&&(c.windowBits=-15)),!(0<=c.windowBits&&c.windowBits<16)||g&&g.windowBits||(c.windowBits+=32),15<c.windowBits&&c.windowBits<48&&(15&c.windowBits)==0&&(c.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new b,this.strm.avail_out=0;var o=r.inflateInit2(this.strm,c.windowBits);if(o!==m.Z_OK)throw new Error(v[o]);this.header=new E,r.inflateGetHeader(this.strm,this.header)}function x(g,c){var o=new f(c);if(o.push(g,!0),o.err)throw o.msg||v[o.err];return o.result}f.prototype.push=function(g,c){var o,S,T,w,P,D,L=this.strm,M=this.options.chunkSize,A=this.options.dictionary,X=!1;if(this.ended)return!1;S=c===~~c?c:c===!0?m.Z_FINISH:m.Z_NO_FLUSH,typeof g=="string"?L.input=s.binstring2buf(g):d.call(g)==="[object ArrayBuffer]"?L.input=new Uint8Array(g):L.input=g,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new a.Buf8(M),L.next_out=0,L.avail_out=M),(o=r.inflate(L,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&A&&(D=typeof A=="string"?s.string2buf(A):d.call(A)==="[object ArrayBuffer]"?new Uint8Array(A):A,o=r.inflateSetDictionary(this.strm,D)),o===m.Z_BUF_ERROR&&X===!0&&(o=m.Z_OK,X=!1),o!==m.Z_STREAM_END&&o!==m.Z_OK)return this.onEnd(o),!(this.ended=!0);L.next_out&&(L.avail_out!==0&&o!==m.Z_STREAM_END&&(L.avail_in!==0||S!==m.Z_FINISH&&S!==m.Z_SYNC_FLUSH)||(this.options.to==="string"?(T=s.utf8border(L.output,L.next_out),w=L.next_out-T,P=s.buf2string(L.output,T),L.next_out=w,L.avail_out=M-w,w&&a.arraySet(L.output,L.output,T,w,0),this.onData(P)):this.onData(a.shrinkBuf(L.output,L.next_out)))),L.avail_in===0&&L.avail_out===0&&(X=!0)}while((0<L.avail_in||L.avail_out===0)&&o!==m.Z_STREAM_END);return o===m.Z_STREAM_END&&(S=m.Z_FINISH),S===m.Z_FINISH?(o=r.inflateEnd(this.strm),this.onEnd(o),this.ended=!0,o===m.Z_OK):S!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(L.avail_out=0))},f.prototype.onData=function(g){this.chunks.push(g)},f.prototype.onEnd=function(g){g===m.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},l.Inflate=f,l.inflate=x,l.inflateRaw=function(g,c){return(c=c||{}).raw=!0,x(g,c)},l.ungzip=x},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,i,l){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";l.assign=function(m){for(var v=Array.prototype.slice.call(arguments,1);v.length;){var b=v.shift();if(b){if(typeof b!="object")throw new TypeError(b+"must be non-object");for(var E in b)b.hasOwnProperty(E)&&(m[E]=b[E])}}return m},l.shrinkBuf=function(m,v){return m.length===v?m:m.subarray?m.subarray(0,v):(m.length=v,m)};var a={arraySet:function(m,v,b,E,d){if(v.subarray&&m.subarray)m.set(v.subarray(b,b+E),d);else for(var f=0;f<E;f++)m[d+f]=v[b+f]},flattenChunks:function(m){var v,b,E,d,f,x;for(v=E=0,b=m.length;v<b;v++)E+=m[v].length;for(x=new Uint8Array(E),v=d=0,b=m.length;v<b;v++)f=m[v],x.set(f,d),d+=f.length;return x}},s={arraySet:function(m,v,b,E,d){for(var f=0;f<E;f++)m[d+f]=v[b+f]},flattenChunks:function(m){return[].concat.apply([],m)}};l.setTyped=function(m){m?(l.Buf8=Uint8Array,l.Buf16=Uint16Array,l.Buf32=Int32Array,l.assign(l,a)):(l.Buf8=Array,l.Buf16=Array,l.Buf32=Array,l.assign(l,s))},l.setTyped(r)},{}],42:[function(t,i,l){var r=t("./common"),a=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{s=!1}for(var m=new r.Buf8(256),v=0;v<256;v++)m[v]=252<=v?6:248<=v?5:240<=v?4:224<=v?3:192<=v?2:1;function b(E,d){if(d<65537&&(E.subarray&&s||!E.subarray&&a))return String.fromCharCode.apply(null,r.shrinkBuf(E,d));for(var f="",x=0;x<d;x++)f+=String.fromCharCode(E[x]);return f}m[254]=m[254]=1,l.string2buf=function(E){var d,f,x,g,c,o=E.length,S=0;for(g=0;g<o;g++)(64512&(f=E.charCodeAt(g)))==55296&&g+1<o&&(64512&(x=E.charCodeAt(g+1)))==56320&&(f=65536+(f-55296<<10)+(x-56320),g++),S+=f<128?1:f<2048?2:f<65536?3:4;for(d=new r.Buf8(S),g=c=0;c<S;g++)(64512&(f=E.charCodeAt(g)))==55296&&g+1<o&&(64512&(x=E.charCodeAt(g+1)))==56320&&(f=65536+(f-55296<<10)+(x-56320),g++),f<128?d[c++]=f:(f<2048?d[c++]=192|f>>>6:(f<65536?d[c++]=224|f>>>12:(d[c++]=240|f>>>18,d[c++]=128|f>>>12&63),d[c++]=128|f>>>6&63),d[c++]=128|63&f);return d},l.buf2binstring=function(E){return b(E,E.length)},l.binstring2buf=function(E){for(var d=new r.Buf8(E.length),f=0,x=d.length;f<x;f++)d[f]=E.charCodeAt(f);return d},l.buf2string=function(E,d){var f,x,g,c,o=d||E.length,S=new Array(2*o);for(f=x=0;f<o;)if((g=E[f++])<128)S[x++]=g;else if(4<(c=m[g]))S[x++]=65533,f+=c-1;else{for(g&=c===2?31:c===3?15:7;1<c&&f<o;)g=g<<6|63&E[f++],c--;1<c?S[x++]=65533:g<65536?S[x++]=g:(g-=65536,S[x++]=55296|g>>10&1023,S[x++]=56320|1023&g)}return b(S,x)},l.utf8border=function(E,d){var f;for((d=d||E.length)>E.length&&(d=E.length),f=d-1;0<=f&&(192&E[f])==128;)f--;return f<0||f===0?d:f+m[E[f]]>d?f:d}},{"./common":41}],43:[function(t,i,l){i.exports=function(r,a,s,m){for(var v=65535&r|0,b=r>>>16&65535|0,E=0;s!==0;){for(s-=E=2e3<s?2e3:s;b=b+(v=v+a[m++]|0)|0,--E;);v%=65521,b%=65521}return v|b<<16|0}},{}],44:[function(t,i,l){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,i,l){var r=(function(){for(var a,s=[],m=0;m<256;m++){a=m;for(var v=0;v<8;v++)a=1&a?3988292384^a>>>1:a>>>1;s[m]=a}return s})();i.exports=function(a,s,m,v){var b=r,E=v+m;a^=-1;for(var d=v;d<E;d++)a=a>>>8^b[255&(a^s[d])];return-1^a}},{}],46:[function(t,i,l){var r,a=t("../utils/common"),s=t("./trees"),m=t("./adler32"),v=t("./crc32"),b=t("./messages"),E=0,d=4,f=0,x=-2,g=-1,c=4,o=2,S=8,T=9,w=286,P=30,D=19,L=2*w+1,M=15,A=3,X=258,F=X+A+1,y=42,O=113,u=1,B=2,V=3,N=4;function se(h,J){return h.msg=b[J],J}function Z(h){return(h<<1)-(4<h?9:0)}function ue(h){for(var J=h.length;0<=--J;)h[J]=0}function W(h){var J=h.state,K=J.pending;K>h.avail_out&&(K=h.avail_out),K!==0&&(a.arraySet(h.output,J.pending_buf,J.pending_out,K,h.next_out),h.next_out+=K,J.pending_out+=K,h.total_out+=K,h.avail_out-=K,J.pending-=K,J.pending===0&&(J.pending_out=0))}function G(h,J){s._tr_flush_block(h,0<=h.block_start?h.block_start:-1,h.strstart-h.block_start,J),h.block_start=h.strstart,W(h.strm)}function ge(h,J){h.pending_buf[h.pending++]=J}function me(h,J){h.pending_buf[h.pending++]=J>>>8&255,h.pending_buf[h.pending++]=255&J}function fe(h,J){var K,I,p=h.max_chain_length,H=h.strstart,ne=h.prev_length,ae=h.nice_match,k=h.strstart>h.w_size-F?h.strstart-(h.w_size-F):0,R=h.window,_=h.w_mask,U=h.prev,q=h.strstart+X,re=R[H+ne-1],j=R[H+ne];h.prev_length>=h.good_match&&(p>>=2),ae>h.lookahead&&(ae=h.lookahead);do if(R[(K=J)+ne]===j&&R[K+ne-1]===re&&R[K]===R[H]&&R[++K]===R[H+1]){H+=2,K++;do;while(R[++H]===R[++K]&&R[++H]===R[++K]&&R[++H]===R[++K]&&R[++H]===R[++K]&&R[++H]===R[++K]&&R[++H]===R[++K]&&R[++H]===R[++K]&&R[++H]===R[++K]&&H<q);if(I=X-(q-H),H=q-X,ne<I){if(h.match_start=J,ae<=(ne=I))break;re=R[H+ne-1],j=R[H+ne]}}while((J=U[J&_])>k&&--p!=0);return ne<=h.lookahead?ne:h.lookahead}function ee(h){var J,K,I,p,H,ne,ae,k,R,_,U=h.w_size;do{if(p=h.window_size-h.lookahead-h.strstart,h.strstart>=U+(U-F)){for(a.arraySet(h.window,h.window,U,U,0),h.match_start-=U,h.strstart-=U,h.block_start-=U,J=K=h.hash_size;I=h.head[--J],h.head[J]=U<=I?I-U:0,--K;);for(J=K=U;I=h.prev[--J],h.prev[J]=U<=I?I-U:0,--K;);p+=U}if(h.strm.avail_in===0)break;if(ne=h.strm,ae=h.window,k=h.strstart+h.lookahead,R=p,_=void 0,_=ne.avail_in,R<_&&(_=R),K=_===0?0:(ne.avail_in-=_,a.arraySet(ae,ne.input,ne.next_in,_,k),ne.state.wrap===1?ne.adler=m(ne.adler,ae,_,k):ne.state.wrap===2&&(ne.adler=v(ne.adler,ae,_,k)),ne.next_in+=_,ne.total_in+=_,_),h.lookahead+=K,h.lookahead+h.insert>=A)for(H=h.strstart-h.insert,h.ins_h=h.window[H],h.ins_h=(h.ins_h<<h.hash_shift^h.window[H+1])&h.hash_mask;h.insert&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[H+A-1])&h.hash_mask,h.prev[H&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=H,H++,h.insert--,!(h.lookahead+h.insert<A)););}while(h.lookahead<F&&h.strm.avail_in!==0)}function he(h,J){for(var K,I;;){if(h.lookahead<F){if(ee(h),h.lookahead<F&&J===E)return u;if(h.lookahead===0)break}if(K=0,h.lookahead>=A&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+A-1])&h.hash_mask,K=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),K!==0&&h.strstart-K<=h.w_size-F&&(h.match_length=fe(h,K)),h.match_length>=A)if(I=s._tr_tally(h,h.strstart-h.match_start,h.match_length-A),h.lookahead-=h.match_length,h.match_length<=h.max_lazy_match&&h.lookahead>=A){for(h.match_length--;h.strstart++,h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+A-1])&h.hash_mask,K=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart,--h.match_length!=0;);h.strstart++}else h.strstart+=h.match_length,h.match_length=0,h.ins_h=h.window[h.strstart],h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+1])&h.hash_mask;else I=s._tr_tally(h,0,h.window[h.strstart]),h.lookahead--,h.strstart++;if(I&&(G(h,!1),h.strm.avail_out===0))return u}return h.insert=h.strstart<A-1?h.strstart:A-1,J===d?(G(h,!0),h.strm.avail_out===0?V:N):h.last_lit&&(G(h,!1),h.strm.avail_out===0)?u:B}function le(h,J){for(var K,I,p;;){if(h.lookahead<F){if(ee(h),h.lookahead<F&&J===E)return u;if(h.lookahead===0)break}if(K=0,h.lookahead>=A&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+A-1])&h.hash_mask,K=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),h.prev_length=h.match_length,h.prev_match=h.match_start,h.match_length=A-1,K!==0&&h.prev_length<h.max_lazy_match&&h.strstart-K<=h.w_size-F&&(h.match_length=fe(h,K),h.match_length<=5&&(h.strategy===1||h.match_length===A&&4096<h.strstart-h.match_start)&&(h.match_length=A-1)),h.prev_length>=A&&h.match_length<=h.prev_length){for(p=h.strstart+h.lookahead-A,I=s._tr_tally(h,h.strstart-1-h.prev_match,h.prev_length-A),h.lookahead-=h.prev_length-1,h.prev_length-=2;++h.strstart<=p&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+A-1])&h.hash_mask,K=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),--h.prev_length!=0;);if(h.match_available=0,h.match_length=A-1,h.strstart++,I&&(G(h,!1),h.strm.avail_out===0))return u}else if(h.match_available){if((I=s._tr_tally(h,0,h.window[h.strstart-1]))&&G(h,!1),h.strstart++,h.lookahead--,h.strm.avail_out===0)return u}else h.match_available=1,h.strstart++,h.lookahead--}return h.match_available&&(I=s._tr_tally(h,0,h.window[h.strstart-1]),h.match_available=0),h.insert=h.strstart<A-1?h.strstart:A-1,J===d?(G(h,!0),h.strm.avail_out===0?V:N):h.last_lit&&(G(h,!1),h.strm.avail_out===0)?u:B}function ie(h,J,K,I,p){this.good_length=h,this.max_lazy=J,this.nice_length=K,this.max_chain=I,this.func=p}function de(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=S,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*L),this.dyn_dtree=new a.Buf16(2*(2*P+1)),this.bl_tree=new a.Buf16(2*(2*D+1)),ue(this.dyn_ltree),ue(this.dyn_dtree),ue(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(M+1),this.heap=new a.Buf16(2*w+1),ue(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*w+1),ue(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function _e(h){var J;return h&&h.state?(h.total_in=h.total_out=0,h.data_type=o,(J=h.state).pending=0,J.pending_out=0,J.wrap<0&&(J.wrap=-J.wrap),J.status=J.wrap?y:O,h.adler=J.wrap===2?0:1,J.last_flush=E,s._tr_init(J),f):se(h,x)}function Ge(h){var J=_e(h);return J===f&&(function(K){K.window_size=2*K.w_size,ue(K.head),K.max_lazy_match=r[K.level].max_lazy,K.good_match=r[K.level].good_length,K.nice_match=r[K.level].nice_length,K.max_chain_length=r[K.level].max_chain,K.strstart=0,K.block_start=0,K.lookahead=0,K.insert=0,K.match_length=K.prev_length=A-1,K.match_available=0,K.ins_h=0})(h.state),J}function Fe(h,J,K,I,p,H){if(!h)return x;var ne=1;if(J===g&&(J=6),I<0?(ne=0,I=-I):15<I&&(ne=2,I-=16),p<1||T<p||K!==S||I<8||15<I||J<0||9<J||H<0||c<H)return se(h,x);I===8&&(I=9);var ae=new de;return(h.state=ae).strm=h,ae.wrap=ne,ae.gzhead=null,ae.w_bits=I,ae.w_size=1<<ae.w_bits,ae.w_mask=ae.w_size-1,ae.hash_bits=p+7,ae.hash_size=1<<ae.hash_bits,ae.hash_mask=ae.hash_size-1,ae.hash_shift=~~((ae.hash_bits+A-1)/A),ae.window=new a.Buf8(2*ae.w_size),ae.head=new a.Buf16(ae.hash_size),ae.prev=new a.Buf16(ae.w_size),ae.lit_bufsize=1<<p+6,ae.pending_buf_size=4*ae.lit_bufsize,ae.pending_buf=new a.Buf8(ae.pending_buf_size),ae.d_buf=1*ae.lit_bufsize,ae.l_buf=3*ae.lit_bufsize,ae.level=J,ae.strategy=H,ae.method=K,Ge(h)}r=[new ie(0,0,0,0,function(h,J){var K=65535;for(K>h.pending_buf_size-5&&(K=h.pending_buf_size-5);;){if(h.lookahead<=1){if(ee(h),h.lookahead===0&&J===E)return u;if(h.lookahead===0)break}h.strstart+=h.lookahead,h.lookahead=0;var I=h.block_start+K;if((h.strstart===0||h.strstart>=I)&&(h.lookahead=h.strstart-I,h.strstart=I,G(h,!1),h.strm.avail_out===0)||h.strstart-h.block_start>=h.w_size-F&&(G(h,!1),h.strm.avail_out===0))return u}return h.insert=0,J===d?(G(h,!0),h.strm.avail_out===0?V:N):(h.strstart>h.block_start&&(G(h,!1),h.strm.avail_out),u)}),new ie(4,4,8,4,he),new ie(4,5,16,8,he),new ie(4,6,32,32,he),new ie(4,4,16,16,le),new ie(8,16,32,32,le),new ie(8,16,128,128,le),new ie(8,32,128,256,le),new ie(32,128,258,1024,le),new ie(32,258,258,4096,le)],l.deflateInit=function(h,J){return Fe(h,J,S,15,8,0)},l.deflateInit2=Fe,l.deflateReset=Ge,l.deflateResetKeep=_e,l.deflateSetHeader=function(h,J){return h&&h.state?h.state.wrap!==2?x:(h.state.gzhead=J,f):x},l.deflate=function(h,J){var K,I,p,H;if(!h||!h.state||5<J||J<0)return h?se(h,x):x;if(I=h.state,!h.output||!h.input&&h.avail_in!==0||I.status===666&&J!==d)return se(h,h.avail_out===0?-5:x);if(I.strm=h,K=I.last_flush,I.last_flush=J,I.status===y)if(I.wrap===2)h.adler=0,ge(I,31),ge(I,139),ge(I,8),I.gzhead?(ge(I,(I.gzhead.text?1:0)+(I.gzhead.hcrc?2:0)+(I.gzhead.extra?4:0)+(I.gzhead.name?8:0)+(I.gzhead.comment?16:0)),ge(I,255&I.gzhead.time),ge(I,I.gzhead.time>>8&255),ge(I,I.gzhead.time>>16&255),ge(I,I.gzhead.time>>24&255),ge(I,I.level===9?2:2<=I.strategy||I.level<2?4:0),ge(I,255&I.gzhead.os),I.gzhead.extra&&I.gzhead.extra.length&&(ge(I,255&I.gzhead.extra.length),ge(I,I.gzhead.extra.length>>8&255)),I.gzhead.hcrc&&(h.adler=v(h.adler,I.pending_buf,I.pending,0)),I.gzindex=0,I.status=69):(ge(I,0),ge(I,0),ge(I,0),ge(I,0),ge(I,0),ge(I,I.level===9?2:2<=I.strategy||I.level<2?4:0),ge(I,3),I.status=O);else{var ne=S+(I.w_bits-8<<4)<<8;ne|=(2<=I.strategy||I.level<2?0:I.level<6?1:I.level===6?2:3)<<6,I.strstart!==0&&(ne|=32),ne+=31-ne%31,I.status=O,me(I,ne),I.strstart!==0&&(me(I,h.adler>>>16),me(I,65535&h.adler)),h.adler=1}if(I.status===69)if(I.gzhead.extra){for(p=I.pending;I.gzindex<(65535&I.gzhead.extra.length)&&(I.pending!==I.pending_buf_size||(I.gzhead.hcrc&&I.pending>p&&(h.adler=v(h.adler,I.pending_buf,I.pending-p,p)),W(h),p=I.pending,I.pending!==I.pending_buf_size));)ge(I,255&I.gzhead.extra[I.gzindex]),I.gzindex++;I.gzhead.hcrc&&I.pending>p&&(h.adler=v(h.adler,I.pending_buf,I.pending-p,p)),I.gzindex===I.gzhead.extra.length&&(I.gzindex=0,I.status=73)}else I.status=73;if(I.status===73)if(I.gzhead.name){p=I.pending;do{if(I.pending===I.pending_buf_size&&(I.gzhead.hcrc&&I.pending>p&&(h.adler=v(h.adler,I.pending_buf,I.pending-p,p)),W(h),p=I.pending,I.pending===I.pending_buf_size)){H=1;break}H=I.gzindex<I.gzhead.name.length?255&I.gzhead.name.charCodeAt(I.gzindex++):0,ge(I,H)}while(H!==0);I.gzhead.hcrc&&I.pending>p&&(h.adler=v(h.adler,I.pending_buf,I.pending-p,p)),H===0&&(I.gzindex=0,I.status=91)}else I.status=91;if(I.status===91)if(I.gzhead.comment){p=I.pending;do{if(I.pending===I.pending_buf_size&&(I.gzhead.hcrc&&I.pending>p&&(h.adler=v(h.adler,I.pending_buf,I.pending-p,p)),W(h),p=I.pending,I.pending===I.pending_buf_size)){H=1;break}H=I.gzindex<I.gzhead.comment.length?255&I.gzhead.comment.charCodeAt(I.gzindex++):0,ge(I,H)}while(H!==0);I.gzhead.hcrc&&I.pending>p&&(h.adler=v(h.adler,I.pending_buf,I.pending-p,p)),H===0&&(I.status=103)}else I.status=103;if(I.status===103&&(I.gzhead.hcrc?(I.pending+2>I.pending_buf_size&&W(h),I.pending+2<=I.pending_buf_size&&(ge(I,255&h.adler),ge(I,h.adler>>8&255),h.adler=0,I.status=O)):I.status=O),I.pending!==0){if(W(h),h.avail_out===0)return I.last_flush=-1,f}else if(h.avail_in===0&&Z(J)<=Z(K)&&J!==d)return se(h,-5);if(I.status===666&&h.avail_in!==0)return se(h,-5);if(h.avail_in!==0||I.lookahead!==0||J!==E&&I.status!==666){var ae=I.strategy===2?(function(k,R){for(var _;;){if(k.lookahead===0&&(ee(k),k.lookahead===0)){if(R===E)return u;break}if(k.match_length=0,_=s._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++,_&&(G(k,!1),k.strm.avail_out===0))return u}return k.insert=0,R===d?(G(k,!0),k.strm.avail_out===0?V:N):k.last_lit&&(G(k,!1),k.strm.avail_out===0)?u:B})(I,J):I.strategy===3?(function(k,R){for(var _,U,q,re,j=k.window;;){if(k.lookahead<=X){if(ee(k),k.lookahead<=X&&R===E)return u;if(k.lookahead===0)break}if(k.match_length=0,k.lookahead>=A&&0<k.strstart&&(U=j[q=k.strstart-1])===j[++q]&&U===j[++q]&&U===j[++q]){re=k.strstart+X;do;while(U===j[++q]&&U===j[++q]&&U===j[++q]&&U===j[++q]&&U===j[++q]&&U===j[++q]&&U===j[++q]&&U===j[++q]&&q<re);k.match_length=X-(re-q),k.match_length>k.lookahead&&(k.match_length=k.lookahead)}if(k.match_length>=A?(_=s._tr_tally(k,1,k.match_length-A),k.lookahead-=k.match_length,k.strstart+=k.match_length,k.match_length=0):(_=s._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++),_&&(G(k,!1),k.strm.avail_out===0))return u}return k.insert=0,R===d?(G(k,!0),k.strm.avail_out===0?V:N):k.last_lit&&(G(k,!1),k.strm.avail_out===0)?u:B})(I,J):r[I.level].func(I,J);if(ae!==V&&ae!==N||(I.status=666),ae===u||ae===V)return h.avail_out===0&&(I.last_flush=-1),f;if(ae===B&&(J===1?s._tr_align(I):J!==5&&(s._tr_stored_block(I,0,0,!1),J===3&&(ue(I.head),I.lookahead===0&&(I.strstart=0,I.block_start=0,I.insert=0))),W(h),h.avail_out===0))return I.last_flush=-1,f}return J!==d?f:I.wrap<=0?1:(I.wrap===2?(ge(I,255&h.adler),ge(I,h.adler>>8&255),ge(I,h.adler>>16&255),ge(I,h.adler>>24&255),ge(I,255&h.total_in),ge(I,h.total_in>>8&255),ge(I,h.total_in>>16&255),ge(I,h.total_in>>24&255)):(me(I,h.adler>>>16),me(I,65535&h.adler)),W(h),0<I.wrap&&(I.wrap=-I.wrap),I.pending!==0?f:1)},l.deflateEnd=function(h){var J;return h&&h.state?(J=h.state.status)!==y&&J!==69&&J!==73&&J!==91&&J!==103&&J!==O&&J!==666?se(h,x):(h.state=null,J===O?se(h,-3):f):x},l.deflateSetDictionary=function(h,J){var K,I,p,H,ne,ae,k,R,_=J.length;if(!h||!h.state||(H=(K=h.state).wrap)===2||H===1&&K.status!==y||K.lookahead)return x;for(H===1&&(h.adler=m(h.adler,J,_,0)),K.wrap=0,_>=K.w_size&&(H===0&&(ue(K.head),K.strstart=0,K.block_start=0,K.insert=0),R=new a.Buf8(K.w_size),a.arraySet(R,J,_-K.w_size,K.w_size,0),J=R,_=K.w_size),ne=h.avail_in,ae=h.next_in,k=h.input,h.avail_in=_,h.next_in=0,h.input=J,ee(K);K.lookahead>=A;){for(I=K.strstart,p=K.lookahead-(A-1);K.ins_h=(K.ins_h<<K.hash_shift^K.window[I+A-1])&K.hash_mask,K.prev[I&K.w_mask]=K.head[K.ins_h],K.head[K.ins_h]=I,I++,--p;);K.strstart=I,K.lookahead=A-1,ee(K)}return K.strstart+=K.lookahead,K.block_start=K.strstart,K.insert=K.lookahead,K.lookahead=0,K.match_length=K.prev_length=A-1,K.match_available=0,h.next_in=ae,h.input=k,h.avail_in=ne,K.wrap=H,f},l.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,i,l){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,i,l){i.exports=function(r,a){var s,m,v,b,E,d,f,x,g,c,o,S,T,w,P,D,L,M,A,X,F,y,O,u,B;s=r.state,m=r.next_in,u=r.input,v=m+(r.avail_in-5),b=r.next_out,B=r.output,E=b-(a-r.avail_out),d=b+(r.avail_out-257),f=s.dmax,x=s.wsize,g=s.whave,c=s.wnext,o=s.window,S=s.hold,T=s.bits,w=s.lencode,P=s.distcode,D=(1<<s.lenbits)-1,L=(1<<s.distbits)-1;e:do{T<15&&(S+=u[m++]<<T,T+=8,S+=u[m++]<<T,T+=8),M=w[S&D];t:for(;;){if(S>>>=A=M>>>24,T-=A,(A=M>>>16&255)===0)B[b++]=65535&M;else{if(!(16&A)){if((64&A)==0){M=w[(65535&M)+(S&(1<<A)-1)];continue t}if(32&A){s.mode=12;break e}r.msg="invalid literal/length code",s.mode=30;break e}X=65535&M,(A&=15)&&(T<A&&(S+=u[m++]<<T,T+=8),X+=S&(1<<A)-1,S>>>=A,T-=A),T<15&&(S+=u[m++]<<T,T+=8,S+=u[m++]<<T,T+=8),M=P[S&L];n:for(;;){if(S>>>=A=M>>>24,T-=A,!(16&(A=M>>>16&255))){if((64&A)==0){M=P[(65535&M)+(S&(1<<A)-1)];continue n}r.msg="invalid distance code",s.mode=30;break e}if(F=65535&M,T<(A&=15)&&(S+=u[m++]<<T,(T+=8)<A&&(S+=u[m++]<<T,T+=8)),f<(F+=S&(1<<A)-1)){r.msg="invalid distance too far back",s.mode=30;break e}if(S>>>=A,T-=A,(A=b-E)<F){if(g<(A=F-A)&&s.sane){r.msg="invalid distance too far back",s.mode=30;break e}if(O=o,(y=0)===c){if(y+=x-A,A<X){for(X-=A;B[b++]=o[y++],--A;);y=b-F,O=B}}else if(c<A){if(y+=x+c-A,(A-=c)<X){for(X-=A;B[b++]=o[y++],--A;);if(y=0,c<X){for(X-=A=c;B[b++]=o[y++],--A;);y=b-F,O=B}}}else if(y+=c-A,A<X){for(X-=A;B[b++]=o[y++],--A;);y=b-F,O=B}for(;2<X;)B[b++]=O[y++],B[b++]=O[y++],B[b++]=O[y++],X-=3;X&&(B[b++]=O[y++],1<X&&(B[b++]=O[y++]))}else{for(y=b-F;B[b++]=B[y++],B[b++]=B[y++],B[b++]=B[y++],2<(X-=3););X&&(B[b++]=B[y++],1<X&&(B[b++]=B[y++]))}break}}break}}while(m<v&&b<d);m-=X=T>>3,S&=(1<<(T-=X<<3))-1,r.next_in=m,r.next_out=b,r.avail_in=m<v?v-m+5:5-(m-v),r.avail_out=b<d?d-b+257:257-(b-d),s.hold=S,s.bits=T}},{}],49:[function(t,i,l){var r=t("../utils/common"),a=t("./adler32"),s=t("./crc32"),m=t("./inffast"),v=t("./inftrees"),b=1,E=2,d=0,f=-2,x=1,g=852,c=592;function o(y){return(y>>>24&255)+(y>>>8&65280)+((65280&y)<<8)+((255&y)<<24)}function S(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function T(y){var O;return y&&y.state?(O=y.state,y.total_in=y.total_out=O.total=0,y.msg="",O.wrap&&(y.adler=1&O.wrap),O.mode=x,O.last=0,O.havedict=0,O.dmax=32768,O.head=null,O.hold=0,O.bits=0,O.lencode=O.lendyn=new r.Buf32(g),O.distcode=O.distdyn=new r.Buf32(c),O.sane=1,O.back=-1,d):f}function w(y){var O;return y&&y.state?((O=y.state).wsize=0,O.whave=0,O.wnext=0,T(y)):f}function P(y,O){var u,B;return y&&y.state?(B=y.state,O<0?(u=0,O=-O):(u=1+(O>>4),O<48&&(O&=15)),O&&(O<8||15<O)?f:(B.window!==null&&B.wbits!==O&&(B.window=null),B.wrap=u,B.wbits=O,w(y))):f}function D(y,O){var u,B;return y?(B=new S,(y.state=B).window=null,(u=P(y,O))!==d&&(y.state=null),u):f}var L,M,A=!0;function X(y){if(A){var O;for(L=new r.Buf32(512),M=new r.Buf32(32),O=0;O<144;)y.lens[O++]=8;for(;O<256;)y.lens[O++]=9;for(;O<280;)y.lens[O++]=7;for(;O<288;)y.lens[O++]=8;for(v(b,y.lens,0,288,L,0,y.work,{bits:9}),O=0;O<32;)y.lens[O++]=5;v(E,y.lens,0,32,M,0,y.work,{bits:5}),A=!1}y.lencode=L,y.lenbits=9,y.distcode=M,y.distbits=5}function F(y,O,u,B){var V,N=y.state;return N.window===null&&(N.wsize=1<<N.wbits,N.wnext=0,N.whave=0,N.window=new r.Buf8(N.wsize)),B>=N.wsize?(r.arraySet(N.window,O,u-N.wsize,N.wsize,0),N.wnext=0,N.whave=N.wsize):(B<(V=N.wsize-N.wnext)&&(V=B),r.arraySet(N.window,O,u-B,V,N.wnext),(B-=V)?(r.arraySet(N.window,O,u-B,B,0),N.wnext=B,N.whave=N.wsize):(N.wnext+=V,N.wnext===N.wsize&&(N.wnext=0),N.whave<N.wsize&&(N.whave+=V))),0}l.inflateReset=w,l.inflateReset2=P,l.inflateResetKeep=T,l.inflateInit=function(y){return D(y,15)},l.inflateInit2=D,l.inflate=function(y,O){var u,B,V,N,se,Z,ue,W,G,ge,me,fe,ee,he,le,ie,de,_e,Ge,Fe,h,J,K,I,p=0,H=new r.Buf8(4),ne=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!y||!y.state||!y.output||!y.input&&y.avail_in!==0)return f;(u=y.state).mode===12&&(u.mode=13),se=y.next_out,V=y.output,ue=y.avail_out,N=y.next_in,B=y.input,Z=y.avail_in,W=u.hold,G=u.bits,ge=Z,me=ue,J=d;e:for(;;)switch(u.mode){case x:if(u.wrap===0){u.mode=13;break}for(;G<16;){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}if(2&u.wrap&&W===35615){H[u.check=0]=255&W,H[1]=W>>>8&255,u.check=s(u.check,H,2,0),G=W=0,u.mode=2;break}if(u.flags=0,u.head&&(u.head.done=!1),!(1&u.wrap)||(((255&W)<<8)+(W>>8))%31){y.msg="incorrect header check",u.mode=30;break}if((15&W)!=8){y.msg="unknown compression method",u.mode=30;break}if(G-=4,h=8+(15&(W>>>=4)),u.wbits===0)u.wbits=h;else if(h>u.wbits){y.msg="invalid window size",u.mode=30;break}u.dmax=1<<h,y.adler=u.check=1,u.mode=512&W?10:12,G=W=0;break;case 2:for(;G<16;){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}if(u.flags=W,(255&u.flags)!=8){y.msg="unknown compression method",u.mode=30;break}if(57344&u.flags){y.msg="unknown header flags set",u.mode=30;break}u.head&&(u.head.text=W>>8&1),512&u.flags&&(H[0]=255&W,H[1]=W>>>8&255,u.check=s(u.check,H,2,0)),G=W=0,u.mode=3;case 3:for(;G<32;){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}u.head&&(u.head.time=W),512&u.flags&&(H[0]=255&W,H[1]=W>>>8&255,H[2]=W>>>16&255,H[3]=W>>>24&255,u.check=s(u.check,H,4,0)),G=W=0,u.mode=4;case 4:for(;G<16;){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}u.head&&(u.head.xflags=255&W,u.head.os=W>>8),512&u.flags&&(H[0]=255&W,H[1]=W>>>8&255,u.check=s(u.check,H,2,0)),G=W=0,u.mode=5;case 5:if(1024&u.flags){for(;G<16;){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}u.length=W,u.head&&(u.head.extra_len=W),512&u.flags&&(H[0]=255&W,H[1]=W>>>8&255,u.check=s(u.check,H,2,0)),G=W=0}else u.head&&(u.head.extra=null);u.mode=6;case 6:if(1024&u.flags&&(Z<(fe=u.length)&&(fe=Z),fe&&(u.head&&(h=u.head.extra_len-u.length,u.head.extra||(u.head.extra=new Array(u.head.extra_len)),r.arraySet(u.head.extra,B,N,fe,h)),512&u.flags&&(u.check=s(u.check,B,fe,N)),Z-=fe,N+=fe,u.length-=fe),u.length))break e;u.length=0,u.mode=7;case 7:if(2048&u.flags){if(Z===0)break e;for(fe=0;h=B[N+fe++],u.head&&h&&u.length<65536&&(u.head.name+=String.fromCharCode(h)),h&&fe<Z;);if(512&u.flags&&(u.check=s(u.check,B,fe,N)),Z-=fe,N+=fe,h)break e}else u.head&&(u.head.name=null);u.length=0,u.mode=8;case 8:if(4096&u.flags){if(Z===0)break e;for(fe=0;h=B[N+fe++],u.head&&h&&u.length<65536&&(u.head.comment+=String.fromCharCode(h)),h&&fe<Z;);if(512&u.flags&&(u.check=s(u.check,B,fe,N)),Z-=fe,N+=fe,h)break e}else u.head&&(u.head.comment=null);u.mode=9;case 9:if(512&u.flags){for(;G<16;){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}if(W!==(65535&u.check)){y.msg="header crc mismatch",u.mode=30;break}G=W=0}u.head&&(u.head.hcrc=u.flags>>9&1,u.head.done=!0),y.adler=u.check=0,u.mode=12;break;case 10:for(;G<32;){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}y.adler=u.check=o(W),G=W=0,u.mode=11;case 11:if(u.havedict===0)return y.next_out=se,y.avail_out=ue,y.next_in=N,y.avail_in=Z,u.hold=W,u.bits=G,2;y.adler=u.check=1,u.mode=12;case 12:if(O===5||O===6)break e;case 13:if(u.last){W>>>=7&G,G-=7&G,u.mode=27;break}for(;G<3;){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}switch(u.last=1&W,G-=1,3&(W>>>=1)){case 0:u.mode=14;break;case 1:if(X(u),u.mode=20,O!==6)break;W>>>=2,G-=2;break e;case 2:u.mode=17;break;case 3:y.msg="invalid block type",u.mode=30}W>>>=2,G-=2;break;case 14:for(W>>>=7&G,G-=7&G;G<32;){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}if((65535&W)!=(W>>>16^65535)){y.msg="invalid stored block lengths",u.mode=30;break}if(u.length=65535&W,G=W=0,u.mode=15,O===6)break e;case 15:u.mode=16;case 16:if(fe=u.length){if(Z<fe&&(fe=Z),ue<fe&&(fe=ue),fe===0)break e;r.arraySet(V,B,N,fe,se),Z-=fe,N+=fe,ue-=fe,se+=fe,u.length-=fe;break}u.mode=12;break;case 17:for(;G<14;){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}if(u.nlen=257+(31&W),W>>>=5,G-=5,u.ndist=1+(31&W),W>>>=5,G-=5,u.ncode=4+(15&W),W>>>=4,G-=4,286<u.nlen||30<u.ndist){y.msg="too many length or distance symbols",u.mode=30;break}u.have=0,u.mode=18;case 18:for(;u.have<u.ncode;){for(;G<3;){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}u.lens[ne[u.have++]]=7&W,W>>>=3,G-=3}for(;u.have<19;)u.lens[ne[u.have++]]=0;if(u.lencode=u.lendyn,u.lenbits=7,K={bits:u.lenbits},J=v(0,u.lens,0,19,u.lencode,0,u.work,K),u.lenbits=K.bits,J){y.msg="invalid code lengths set",u.mode=30;break}u.have=0,u.mode=19;case 19:for(;u.have<u.nlen+u.ndist;){for(;ie=(p=u.lencode[W&(1<<u.lenbits)-1])>>>16&255,de=65535&p,!((le=p>>>24)<=G);){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}if(de<16)W>>>=le,G-=le,u.lens[u.have++]=de;else{if(de===16){for(I=le+2;G<I;){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}if(W>>>=le,G-=le,u.have===0){y.msg="invalid bit length repeat",u.mode=30;break}h=u.lens[u.have-1],fe=3+(3&W),W>>>=2,G-=2}else if(de===17){for(I=le+3;G<I;){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}G-=le,h=0,fe=3+(7&(W>>>=le)),W>>>=3,G-=3}else{for(I=le+7;G<I;){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}G-=le,h=0,fe=11+(127&(W>>>=le)),W>>>=7,G-=7}if(u.have+fe>u.nlen+u.ndist){y.msg="invalid bit length repeat",u.mode=30;break}for(;fe--;)u.lens[u.have++]=h}}if(u.mode===30)break;if(u.lens[256]===0){y.msg="invalid code -- missing end-of-block",u.mode=30;break}if(u.lenbits=9,K={bits:u.lenbits},J=v(b,u.lens,0,u.nlen,u.lencode,0,u.work,K),u.lenbits=K.bits,J){y.msg="invalid literal/lengths set",u.mode=30;break}if(u.distbits=6,u.distcode=u.distdyn,K={bits:u.distbits},J=v(E,u.lens,u.nlen,u.ndist,u.distcode,0,u.work,K),u.distbits=K.bits,J){y.msg="invalid distances set",u.mode=30;break}if(u.mode=20,O===6)break e;case 20:u.mode=21;case 21:if(6<=Z&&258<=ue){y.next_out=se,y.avail_out=ue,y.next_in=N,y.avail_in=Z,u.hold=W,u.bits=G,m(y,me),se=y.next_out,V=y.output,ue=y.avail_out,N=y.next_in,B=y.input,Z=y.avail_in,W=u.hold,G=u.bits,u.mode===12&&(u.back=-1);break}for(u.back=0;ie=(p=u.lencode[W&(1<<u.lenbits)-1])>>>16&255,de=65535&p,!((le=p>>>24)<=G);){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}if(ie&&(240&ie)==0){for(_e=le,Ge=ie,Fe=de;ie=(p=u.lencode[Fe+((W&(1<<_e+Ge)-1)>>_e)])>>>16&255,de=65535&p,!(_e+(le=p>>>24)<=G);){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}W>>>=_e,G-=_e,u.back+=_e}if(W>>>=le,G-=le,u.back+=le,u.length=de,ie===0){u.mode=26;break}if(32&ie){u.back=-1,u.mode=12;break}if(64&ie){y.msg="invalid literal/length code",u.mode=30;break}u.extra=15&ie,u.mode=22;case 22:if(u.extra){for(I=u.extra;G<I;){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}u.length+=W&(1<<u.extra)-1,W>>>=u.extra,G-=u.extra,u.back+=u.extra}u.was=u.length,u.mode=23;case 23:for(;ie=(p=u.distcode[W&(1<<u.distbits)-1])>>>16&255,de=65535&p,!((le=p>>>24)<=G);){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}if((240&ie)==0){for(_e=le,Ge=ie,Fe=de;ie=(p=u.distcode[Fe+((W&(1<<_e+Ge)-1)>>_e)])>>>16&255,de=65535&p,!(_e+(le=p>>>24)<=G);){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}W>>>=_e,G-=_e,u.back+=_e}if(W>>>=le,G-=le,u.back+=le,64&ie){y.msg="invalid distance code",u.mode=30;break}u.offset=de,u.extra=15&ie,u.mode=24;case 24:if(u.extra){for(I=u.extra;G<I;){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}u.offset+=W&(1<<u.extra)-1,W>>>=u.extra,G-=u.extra,u.back+=u.extra}if(u.offset>u.dmax){y.msg="invalid distance too far back",u.mode=30;break}u.mode=25;case 25:if(ue===0)break e;if(fe=me-ue,u.offset>fe){if((fe=u.offset-fe)>u.whave&&u.sane){y.msg="invalid distance too far back",u.mode=30;break}ee=fe>u.wnext?(fe-=u.wnext,u.wsize-fe):u.wnext-fe,fe>u.length&&(fe=u.length),he=u.window}else he=V,ee=se-u.offset,fe=u.length;for(ue<fe&&(fe=ue),ue-=fe,u.length-=fe;V[se++]=he[ee++],--fe;);u.length===0&&(u.mode=21);break;case 26:if(ue===0)break e;V[se++]=u.length,ue--,u.mode=21;break;case 27:if(u.wrap){for(;G<32;){if(Z===0)break e;Z--,W|=B[N++]<<G,G+=8}if(me-=ue,y.total_out+=me,u.total+=me,me&&(y.adler=u.check=u.flags?s(u.check,V,me,se-me):a(u.check,V,me,se-me)),me=ue,(u.flags?W:o(W))!==u.check){y.msg="incorrect data check",u.mode=30;break}G=W=0}u.mode=28;case 28:if(u.wrap&&u.flags){for(;G<32;){if(Z===0)break e;Z--,W+=B[N++]<<G,G+=8}if(W!==(4294967295&u.total)){y.msg="incorrect length check",u.mode=30;break}G=W=0}u.mode=29;case 29:J=1;break e;case 30:J=-3;break e;case 31:return-4;default:return f}return y.next_out=se,y.avail_out=ue,y.next_in=N,y.avail_in=Z,u.hold=W,u.bits=G,(u.wsize||me!==y.avail_out&&u.mode<30&&(u.mode<27||O!==4))&&F(y,y.output,y.next_out,me-y.avail_out)?(u.mode=31,-4):(ge-=y.avail_in,me-=y.avail_out,y.total_in+=ge,y.total_out+=me,u.total+=me,u.wrap&&me&&(y.adler=u.check=u.flags?s(u.check,V,me,y.next_out-me):a(u.check,V,me,y.next_out-me)),y.data_type=u.bits+(u.last?64:0)+(u.mode===12?128:0)+(u.mode===20||u.mode===15?256:0),(ge==0&&me===0||O===4)&&J===d&&(J=-5),J)},l.inflateEnd=function(y){if(!y||!y.state)return f;var O=y.state;return O.window&&(O.window=null),y.state=null,d},l.inflateGetHeader=function(y,O){var u;return y&&y.state?(2&(u=y.state).wrap)==0?f:((u.head=O).done=!1,d):f},l.inflateSetDictionary=function(y,O){var u,B=O.length;return y&&y.state?(u=y.state).wrap!==0&&u.mode!==11?f:u.mode===11&&a(1,O,B,0)!==u.check?-3:F(y,O,B,B)?(u.mode=31,-4):(u.havedict=1,d):f},l.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,i,l){var r=t("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],m=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],v=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(b,E,d,f,x,g,c,o){var S,T,w,P,D,L,M,A,X,F=o.bits,y=0,O=0,u=0,B=0,V=0,N=0,se=0,Z=0,ue=0,W=0,G=null,ge=0,me=new r.Buf16(16),fe=new r.Buf16(16),ee=null,he=0;for(y=0;y<=15;y++)me[y]=0;for(O=0;O<f;O++)me[E[d+O]]++;for(V=F,B=15;1<=B&&me[B]===0;B--);if(B<V&&(V=B),B===0)return x[g++]=20971520,x[g++]=20971520,o.bits=1,0;for(u=1;u<B&&me[u]===0;u++);for(V<u&&(V=u),y=Z=1;y<=15;y++)if(Z<<=1,(Z-=me[y])<0)return-1;if(0<Z&&(b===0||B!==1))return-1;for(fe[1]=0,y=1;y<15;y++)fe[y+1]=fe[y]+me[y];for(O=0;O<f;O++)E[d+O]!==0&&(c[fe[E[d+O]]++]=O);if(L=b===0?(G=ee=c,19):b===1?(G=a,ge-=257,ee=s,he-=257,256):(G=m,ee=v,-1),y=u,D=g,se=O=W=0,w=-1,P=(ue=1<<(N=V))-1,b===1&&852<ue||b===2&&592<ue)return 1;for(;;){for(M=y-se,X=c[O]<L?(A=0,c[O]):c[O]>L?(A=ee[he+c[O]],G[ge+c[O]]):(A=96,0),S=1<<y-se,u=T=1<<N;x[D+(W>>se)+(T-=S)]=M<<24|A<<16|X|0,T!==0;);for(S=1<<y-1;W&S;)S>>=1;if(S!==0?(W&=S-1,W+=S):W=0,O++,--me[y]==0){if(y===B)break;y=E[d+c[O]]}if(V<y&&(W&P)!==w){for(se===0&&(se=V),D+=u,Z=1<<(N=y-se);N+se<B&&!((Z-=me[N+se])<=0);)N++,Z<<=1;if(ue+=1<<N,b===1&&852<ue||b===2&&592<ue)return 1;x[w=W&P]=V<<24|N<<16|D-g|0}}return W!==0&&(x[D+W]=y-se<<24|64<<16|0),o.bits=V,0}},{"../utils/common":41}],51:[function(t,i,l){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,i,l){var r=t("../utils/common"),a=0,s=1;function m(p){for(var H=p.length;0<=--H;)p[H]=0}var v=0,b=29,E=256,d=E+1+b,f=30,x=19,g=2*d+1,c=15,o=16,S=7,T=256,w=16,P=17,D=18,L=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],M=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],X=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],F=new Array(2*(d+2));m(F);var y=new Array(2*f);m(y);var O=new Array(512);m(O);var u=new Array(256);m(u);var B=new Array(b);m(B);var V,N,se,Z=new Array(f);function ue(p,H,ne,ae,k){this.static_tree=p,this.extra_bits=H,this.extra_base=ne,this.elems=ae,this.max_length=k,this.has_stree=p&&p.length}function W(p,H){this.dyn_tree=p,this.max_code=0,this.stat_desc=H}function G(p){return p<256?O[p]:O[256+(p>>>7)]}function ge(p,H){p.pending_buf[p.pending++]=255&H,p.pending_buf[p.pending++]=H>>>8&255}function me(p,H,ne){p.bi_valid>o-ne?(p.bi_buf|=H<<p.bi_valid&65535,ge(p,p.bi_buf),p.bi_buf=H>>o-p.bi_valid,p.bi_valid+=ne-o):(p.bi_buf|=H<<p.bi_valid&65535,p.bi_valid+=ne)}function fe(p,H,ne){me(p,ne[2*H],ne[2*H+1])}function ee(p,H){for(var ne=0;ne|=1&p,p>>>=1,ne<<=1,0<--H;);return ne>>>1}function he(p,H,ne){var ae,k,R=new Array(c+1),_=0;for(ae=1;ae<=c;ae++)R[ae]=_=_+ne[ae-1]<<1;for(k=0;k<=H;k++){var U=p[2*k+1];U!==0&&(p[2*k]=ee(R[U]++,U))}}function le(p){var H;for(H=0;H<d;H++)p.dyn_ltree[2*H]=0;for(H=0;H<f;H++)p.dyn_dtree[2*H]=0;for(H=0;H<x;H++)p.bl_tree[2*H]=0;p.dyn_ltree[2*T]=1,p.opt_len=p.static_len=0,p.last_lit=p.matches=0}function ie(p){8<p.bi_valid?ge(p,p.bi_buf):0<p.bi_valid&&(p.pending_buf[p.pending++]=p.bi_buf),p.bi_buf=0,p.bi_valid=0}function de(p,H,ne,ae){var k=2*H,R=2*ne;return p[k]<p[R]||p[k]===p[R]&&ae[H]<=ae[ne]}function _e(p,H,ne){for(var ae=p.heap[ne],k=ne<<1;k<=p.heap_len&&(k<p.heap_len&&de(H,p.heap[k+1],p.heap[k],p.depth)&&k++,!de(H,ae,p.heap[k],p.depth));)p.heap[ne]=p.heap[k],ne=k,k<<=1;p.heap[ne]=ae}function Ge(p,H,ne){var ae,k,R,_,U=0;if(p.last_lit!==0)for(;ae=p.pending_buf[p.d_buf+2*U]<<8|p.pending_buf[p.d_buf+2*U+1],k=p.pending_buf[p.l_buf+U],U++,ae===0?fe(p,k,H):(fe(p,(R=u[k])+E+1,H),(_=L[R])!==0&&me(p,k-=B[R],_),fe(p,R=G(--ae),ne),(_=M[R])!==0&&me(p,ae-=Z[R],_)),U<p.last_lit;);fe(p,T,H)}function Fe(p,H){var ne,ae,k,R=H.dyn_tree,_=H.stat_desc.static_tree,U=H.stat_desc.has_stree,q=H.stat_desc.elems,re=-1;for(p.heap_len=0,p.heap_max=g,ne=0;ne<q;ne++)R[2*ne]!==0?(p.heap[++p.heap_len]=re=ne,p.depth[ne]=0):R[2*ne+1]=0;for(;p.heap_len<2;)R[2*(k=p.heap[++p.heap_len]=re<2?++re:0)]=1,p.depth[k]=0,p.opt_len--,U&&(p.static_len-=_[2*k+1]);for(H.max_code=re,ne=p.heap_len>>1;1<=ne;ne--)_e(p,R,ne);for(k=q;ne=p.heap[1],p.heap[1]=p.heap[p.heap_len--],_e(p,R,1),ae=p.heap[1],p.heap[--p.heap_max]=ne,p.heap[--p.heap_max]=ae,R[2*k]=R[2*ne]+R[2*ae],p.depth[k]=(p.depth[ne]>=p.depth[ae]?p.depth[ne]:p.depth[ae])+1,R[2*ne+1]=R[2*ae+1]=k,p.heap[1]=k++,_e(p,R,1),2<=p.heap_len;);p.heap[--p.heap_max]=p.heap[1],(function(j,Me){var Ee,Pe,Be,ce,ve,De,ye=Me.dyn_tree,we=Me.max_code,Ve=Me.stat_desc.static_tree,z=Me.stat_desc.has_stree,xe=Me.stat_desc.extra_bits,Se=Me.stat_desc.extra_base,Re=Me.stat_desc.max_length,pe=0;for(ce=0;ce<=c;ce++)j.bl_count[ce]=0;for(ye[2*j.heap[j.heap_max]+1]=0,Ee=j.heap_max+1;Ee<g;Ee++)Re<(ce=ye[2*ye[2*(Pe=j.heap[Ee])+1]+1]+1)&&(ce=Re,pe++),ye[2*Pe+1]=ce,we<Pe||(j.bl_count[ce]++,ve=0,Se<=Pe&&(ve=xe[Pe-Se]),De=ye[2*Pe],j.opt_len+=De*(ce+ve),z&&(j.static_len+=De*(Ve[2*Pe+1]+ve)));if(pe!==0){do{for(ce=Re-1;j.bl_count[ce]===0;)ce--;j.bl_count[ce]--,j.bl_count[ce+1]+=2,j.bl_count[Re]--,pe-=2}while(0<pe);for(ce=Re;ce!==0;ce--)for(Pe=j.bl_count[ce];Pe!==0;)we<(Be=j.heap[--Ee])||(ye[2*Be+1]!==ce&&(j.opt_len+=(ce-ye[2*Be+1])*ye[2*Be],ye[2*Be+1]=ce),Pe--)}})(p,H),he(R,re,p.bl_count)}function h(p,H,ne){var ae,k,R=-1,_=H[1],U=0,q=7,re=4;for(_===0&&(q=138,re=3),H[2*(ne+1)+1]=65535,ae=0;ae<=ne;ae++)k=_,_=H[2*(ae+1)+1],++U<q&&k===_||(U<re?p.bl_tree[2*k]+=U:k!==0?(k!==R&&p.bl_tree[2*k]++,p.bl_tree[2*w]++):U<=10?p.bl_tree[2*P]++:p.bl_tree[2*D]++,R=k,re=(U=0)===_?(q=138,3):k===_?(q=6,3):(q=7,4))}function J(p,H,ne){var ae,k,R=-1,_=H[1],U=0,q=7,re=4;for(_===0&&(q=138,re=3),ae=0;ae<=ne;ae++)if(k=_,_=H[2*(ae+1)+1],!(++U<q&&k===_)){if(U<re)for(;fe(p,k,p.bl_tree),--U!=0;);else k!==0?(k!==R&&(fe(p,k,p.bl_tree),U--),fe(p,w,p.bl_tree),me(p,U-3,2)):U<=10?(fe(p,P,p.bl_tree),me(p,U-3,3)):(fe(p,D,p.bl_tree),me(p,U-11,7));R=k,re=(U=0)===_?(q=138,3):k===_?(q=6,3):(q=7,4)}}m(Z);var K=!1;function I(p,H,ne,ae){me(p,(v<<1)+(ae?1:0),3),(function(k,R,_,U){ie(k),ge(k,_),ge(k,~_),r.arraySet(k.pending_buf,k.window,R,_,k.pending),k.pending+=_})(p,H,ne)}l._tr_init=function(p){K||((function(){var H,ne,ae,k,R,_=new Array(c+1);for(k=ae=0;k<b-1;k++)for(B[k]=ae,H=0;H<1<<L[k];H++)u[ae++]=k;for(u[ae-1]=k,k=R=0;k<16;k++)for(Z[k]=R,H=0;H<1<<M[k];H++)O[R++]=k;for(R>>=7;k<f;k++)for(Z[k]=R<<7,H=0;H<1<<M[k]-7;H++)O[256+R++]=k;for(ne=0;ne<=c;ne++)_[ne]=0;for(H=0;H<=143;)F[2*H+1]=8,H++,_[8]++;for(;H<=255;)F[2*H+1]=9,H++,_[9]++;for(;H<=279;)F[2*H+1]=7,H++,_[7]++;for(;H<=287;)F[2*H+1]=8,H++,_[8]++;for(he(F,d+1,_),H=0;H<f;H++)y[2*H+1]=5,y[2*H]=ee(H,5);V=new ue(F,L,E+1,d,c),N=new ue(y,M,0,f,c),se=new ue(new Array(0),A,0,x,S)})(),K=!0),p.l_desc=new W(p.dyn_ltree,V),p.d_desc=new W(p.dyn_dtree,N),p.bl_desc=new W(p.bl_tree,se),p.bi_buf=0,p.bi_valid=0,le(p)},l._tr_stored_block=I,l._tr_flush_block=function(p,H,ne,ae){var k,R,_=0;0<p.level?(p.strm.data_type===2&&(p.strm.data_type=(function(U){var q,re=4093624447;for(q=0;q<=31;q++,re>>>=1)if(1&re&&U.dyn_ltree[2*q]!==0)return a;if(U.dyn_ltree[18]!==0||U.dyn_ltree[20]!==0||U.dyn_ltree[26]!==0)return s;for(q=32;q<E;q++)if(U.dyn_ltree[2*q]!==0)return s;return a})(p)),Fe(p,p.l_desc),Fe(p,p.d_desc),_=(function(U){var q;for(h(U,U.dyn_ltree,U.l_desc.max_code),h(U,U.dyn_dtree,U.d_desc.max_code),Fe(U,U.bl_desc),q=x-1;3<=q&&U.bl_tree[2*X[q]+1]===0;q--);return U.opt_len+=3*(q+1)+5+5+4,q})(p),k=p.opt_len+3+7>>>3,(R=p.static_len+3+7>>>3)<=k&&(k=R)):k=R=ne+5,ne+4<=k&&H!==-1?I(p,H,ne,ae):p.strategy===4||R===k?(me(p,2+(ae?1:0),3),Ge(p,F,y)):(me(p,4+(ae?1:0),3),(function(U,q,re,j){var Me;for(me(U,q-257,5),me(U,re-1,5),me(U,j-4,4),Me=0;Me<j;Me++)me(U,U.bl_tree[2*X[Me]+1],3);J(U,U.dyn_ltree,q-1),J(U,U.dyn_dtree,re-1)})(p,p.l_desc.max_code+1,p.d_desc.max_code+1,_+1),Ge(p,p.dyn_ltree,p.dyn_dtree)),le(p),ae&&ie(p)},l._tr_tally=function(p,H,ne){return p.pending_buf[p.d_buf+2*p.last_lit]=H>>>8&255,p.pending_buf[p.d_buf+2*p.last_lit+1]=255&H,p.pending_buf[p.l_buf+p.last_lit]=255&ne,p.last_lit++,H===0?p.dyn_ltree[2*ne]++:(p.matches++,H--,p.dyn_ltree[2*(u[ne]+E+1)]++,p.dyn_dtree[2*G(H)]++),p.last_lit===p.lit_bufsize-1},l._tr_align=function(p){me(p,2,3),fe(p,T,F),(function(H){H.bi_valid===16?(ge(H,H.bi_buf),H.bi_buf=0,H.bi_valid=0):8<=H.bi_valid&&(H.pending_buf[H.pending++]=255&H.bi_buf,H.bi_buf>>=8,H.bi_valid-=8)})(p)}},{"../utils/common":41}],53:[function(t,i,l){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,i,l){(function(r){(function(a,s){if(!a.setImmediate){var m,v,b,E,d=1,f={},x=!1,g=a.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(a);c=c&&c.setTimeout?c:a,m={}.toString.call(a.process)==="[object process]"?function(w){process.nextTick(function(){S(w)})}:(function(){if(a.postMessage&&!a.importScripts){var w=!0,P=a.onmessage;return a.onmessage=function(){w=!1},a.postMessage("","*"),a.onmessage=P,w}})()?(E="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",T,!1):a.attachEvent("onmessage",T),function(w){a.postMessage(E+w,"*")}):a.MessageChannel?((b=new MessageChannel).port1.onmessage=function(w){S(w.data)},function(w){b.port2.postMessage(w)}):g&&"onreadystatechange"in g.createElement("script")?(v=g.documentElement,function(w){var P=g.createElement("script");P.onreadystatechange=function(){S(w),P.onreadystatechange=null,v.removeChild(P),P=null},v.appendChild(P)}):function(w){setTimeout(S,0,w)},c.setImmediate=function(w){typeof w!="function"&&(w=new Function(""+w));for(var P=new Array(arguments.length-1),D=0;D<P.length;D++)P[D]=arguments[D+1];var L={callback:w,args:P};return f[d]=L,m(d),d++},c.clearImmediate=o}function o(w){delete f[w]}function S(w){if(x)setTimeout(S,0,w);else{var P=f[w];if(P){x=!0;try{(function(D){var L=D.callback,M=D.args;switch(M.length){case 0:L();break;case 1:L(M[0]);break;case 2:L(M[0],M[1]);break;case 3:L(M[0],M[1],M[2]);break;default:L.apply(s,M)}})(P)}finally{o(w),x=!1}}}}function T(w){w.source===a&&typeof w.data=="string"&&w.data.indexOf(E)===0&&S(+w.data.slice(E.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof Wn<"u"?Wn:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(yi)),yi.exports}var Mh=bh();const ba=xh(Mh),Th="assets/minecraft/textures/item/skin.png",Ma="assets/minecraft/items/totem_of_undying.json",po="assets/minecraft",Qn=e=>`${po}/models/${mo(e)}.json`,Ah=e=>`${po}/textures/${mo(e)}.png`;function mo(e){if(e.startsWith("minecraft:"))return e.slice(10);if(e.includes(":"))throw new Error(`Unsupported pack namespace: ${e}`);return e}function Ci({model:{fallback:e,cases:n}}){return new Map([["Default",e.model],...n.map(({when:t,model:i})=>[t,i.model])])}const Ta=e=>Qn(e).split("/").at(-1);async function wh(e,n,t){const i=await ba.loadAsync(e),l=Ci(JSON.parse(await Pi(i,Ma,"string"))),r=()=>t("totem_of_undying_small.json");async function a(s,m="classic"){if(m==="slim"){const E=Ci(JSON.parse(await r()));return JSON.parse(await t(Ta(E.get(s))))}const v=l.get(s),b=s==="Default"?n:await Pi(i,Qn(v),"string");return JSON.parse(b)}return{getModel:a,getTexture:s=>Pi(i,Ah(s),"blob"),async export(s,m="classic"){const v=await ba.loadAsync(e);if(v.file(Qn(l.get("Default")),n),m==="slim"){const b=await r();v.file(Ma,b),await Promise.all(Array.from(Ci(JSON.parse(b)).values(),async E=>{v.file(Qn(E),await t(Ta(E)))}))}return v.file(Th,await s.arrayBuffer()),v.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}})}}}function Pi(e,n,t){const i=e.file(n);if(!i)throw new Error(`Missing pack asset: ${n}`);return i.async(t)}const Rh=[137,80,78,71,13,10,26,10];function Bi(e,n,t=4){return{top:[e+4,n,t,4],bottom:[e+4+t,n,t,4],right:[e,n+4,4,12],front:[e+4,n+4,t,12],left:[e+4+t,n+4,4,12],back:[e+8+t,n+4,t,12]}}function yh({data:e,width:n,height:t}){if(t===32)return"classic";const i=([r,a,s,m])=>{for(let v=a;v<a+m;v+=1)for(let b=r;b<r+s;b+=1)if(e[(v*n+b)*4+3]>0)return!0;return!1};return[[40,16],[32,48]].every(([r,a])=>!i([r+10,a,2,4])&&!i([r+14,a+4,2,12])&&i(Bi(r,a,3).front))?"slim":"classic"}function Ch(e){const n=new DataView(e.buffer,e.byteOffset,e.byteLength);if(e.length<33||!Rh.every((l,r)=>e[r]===l)||n.getUint32(8)!==13||n.getUint32(12)!==1229472850)throw new Error("Choose a valid Minecraft skin PNG.");const t=n.getUint32(16),i=n.getUint32(20);if(t!==64||i!==64&&i!==32)throw new Error(`This PNG is ${t} × ${i}. Use a 64 × 64 or 64 × 32 Minecraft skin.`);return{width:t,height:i}}function _o(e=64,n=64){const t=document.createElement("canvas");t.width=e,t.height=n;const i=t.getContext("2d",{willReadFrequently:!0});return i.imageSmoothingEnabled=!1,i}function go(e){return new Promise((n,t)=>{e.toBlob(i=>i?n(i):t(new Error("Could not create the PNG.")),"image/png")})}async function vo(e){const n=await createImageBitmap(e.slice(0,e.size,"image/png"),{colorSpaceConversion:"none"}),t=_o(n.width,n.height);try{return t.drawImage(n,0,0),t}finally{n.close()}}async function So(e){if(e.size>1024*1024)throw new Error("Choose a Minecraft skin PNG under 1 MB.");const{height:n}=Ch(new Uint8Array(await e.slice(0,33).arrayBuffer()));let t;try{t=await vo(e)}catch{throw new Error("This PNG could not be decoded. Try another skin file.")}if(!t.getImageData(8,8,8,8).data.some((r,a)=>a%4===3&&r>0))throw new Error("The base face is empty. Export a Minecraft skin with a visible face.");const l=yh(t.getImageData(0,0,64,n));return{file:e,source:t,height:n,armType:l}}async function Eo({file:e,source:n,height:t,armType:i}){if(t===64)return{image:n.canvas,png:e,armType:i};const l=_o();return l.drawImage(n.canvas,0,0),Ph(l,n),{image:l.canvas,png:await go(l.canvas),armType:"classic"}}function Ph(e,n){n.getImageData(32,0,32,32).data.every((l,r)=>r%4!==3||l>=128)&&e.clearRect(32,0,32,16);for(const[l,r]of[[0,16],[40,32]]){const a=Bi(l,16),s=Bi(r,48);for(const[m,[v,b,E,d]]of Object.entries(s)){const f=m==="left"?"right":m==="right"?"left":m;e.save(),e.translate(v+E,b),e.scale(-1,1),e.drawImage(n.canvas,...a[f],0,0,E,d),e.restore()}}for(const[l,r,a,s]of[[0,0,32,16],[0,16,64,16],[16,48,32,16]]){const m=e.getImageData(l,r,a,s);for(let v=3;v<m.data.length;v+=4)m.data[v]=255;e.putImageData(m,l,r)}}function Dh(e,n){const t=e.getContext("2d");t.clearRect(0,0,8,8),t.drawImage(n,8,8,8,8,0,0,8,8),t.drawImage(n,40,8,8,8,0,0,8,8)}const Aa={type:"change"},Yi={type:"start"},xo={type:"end"},Yn=new il,wa=new Fa,Lh=Math.cos(70*Mt.DEG2RAD),ct=new ke,gt=2*Math.PI,Je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Di=1e-6;class Uh extends nl{constructor(n,t=null){super(n,t),this.state=Je.NONE,this.target=new ke,this.cursor=new ke,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pn.ROTATE,MIDDLE:pn.DOLLY,RIGHT:pn.PAN},this.touches={ONE:hn.ROTATE,TWO:hn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ke,this._lastQuaternion=new Nn,this._lastTargetPosition=new ke,this._quat=new Nn().setFromUnitVectors(n.up,new ke(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ni,this._sphericalDelta=new Ni,this._scale=1,this._panOffset=new ke,this._rotateStart=new Qe,this._rotateEnd=new Qe,this._rotateDelta=new Qe,this._panStart=new Qe,this._panEnd=new Qe,this._panDelta=new Qe,this._dollyStart=new Qe,this._dollyEnd=new Qe,this._dollyDelta=new Qe,this._dollyDirection=new ke,this._mouse=new Qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Nh.bind(this),this._onPointerDown=Ih.bind(this),this._onPointerUp=Oh.bind(this),this._onContextMenu=Vh.bind(this),this._onMouseWheel=kh.bind(this),this._onKeyDown=Gh.bind(this),this._onTouchStart=Hh.bind(this),this._onTouchMove=zh.bind(this),this._onMouseDown=Fh.bind(this),this._onMouseMove=Bh.bind(this),this._interceptControlDown=Wh.bind(this),this._interceptControlUp=Xh.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(n){this._cursorStyle=n,n==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(n){super.connect(n),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(n){n.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=n}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Aa),this.update(),this.state=Je.NONE}pan(n,t){this._pan(n,t),this.update()}dollyIn(n){this._dollyIn(n),this.update()}dollyOut(n){this._dollyOut(n),this.update()}rotateLeft(n){this._rotateLeft(n),this.update()}rotateUp(n){this._rotateUp(n),this.update()}update(n=null){const t=this.object.position;ct.copy(t).sub(this.target),ct.applyQuaternion(this._quat),this._spherical.setFromVector3(ct),this.autoRotate&&this.state===Je.NONE&&this._rotateLeft(this._getAutoRotationAngle(n)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(i)&&isFinite(l)&&(i<-Math.PI?i+=gt:i>Math.PI&&(i-=gt),l<-Math.PI?l+=gt:l>Math.PI&&(l-=gt),i<=l?this._spherical.theta=Math.max(i,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+l)/2?Math.max(i,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ct.setFromSpherical(this._spherical),ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const s=ct.length();a=this._clampDistance(s*this._scale);const m=s-a;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),r=!!m}else if(this.object.isOrthographicCamera){const s=new ke(this._mouse.x,this._mouse.y,0);s.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=m!==this.object.zoom;const v=new ke(this._mouse.x,this._mouse.y,0);v.unproject(this.object),this.object.position.sub(v).add(s),this.object.updateMatrixWorld(),a=ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Yn.origin.copy(this.object.position),Yn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yn.direction))<Lh?this.object.lookAt(this.target):(wa.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yn.intersectPlane(wa,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Di||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Di||this._lastTargetPosition.distanceToSquared(this.target)>Di?(this.dispatchEvent(Aa),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(n){return n!==null?gt/60*this.autoRotateSpeed*n:gt/60/60*this.autoRotateSpeed}_getZoomScale(n){const t=Math.abs(n*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(n){this._sphericalDelta.theta-=n}_rotateUp(n){this._sphericalDelta.phi-=n}_panLeft(n,t){ct.setFromMatrixColumn(t,0),ct.multiplyScalar(-n),this._panOffset.add(ct)}_panUp(n,t){this.screenSpacePanning===!0?ct.setFromMatrixColumn(t,1):(ct.setFromMatrixColumn(t,0),ct.crossVectors(this.object.up,ct)),ct.multiplyScalar(n),this._panOffset.add(ct)}_pan(n,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;ct.copy(l).sub(this.target);let r=ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*n*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(n*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(n,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),l=n-i.left,r=t-i.top,a=i.width,s=i.height;this._mouse.x=l/a*2-1,this._mouse.y=-(r/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(n){return Math.max(this.minDistance,Math.min(this.maxDistance,n))}_handleMouseDownRotate(n){this._rotateStart.set(n.clientX,n.clientY)}_handleMouseDownDolly(n){this._updateZoomParameters(n.clientX,n.clientX),this._dollyStart.set(n.clientX,n.clientY)}_handleMouseDownPan(n){this._panStart.set(n.clientX,n.clientY)}_handleMouseMoveRotate(n){this._rotateEnd.set(n.clientX,n.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(n){this._dollyEnd.set(n.clientX,n.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(n){this._panEnd.set(n.clientX,n.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(n){this._updateZoomParameters(n.clientX,n.clientY),n.deltaY<0?this._dollyIn(this._getZoomScale(n.deltaY)):n.deltaY>0&&this._dollyOut(this._getZoomScale(n.deltaY)),this.update()}_handleKeyDown(n){let t=!1;switch(n.code){case this.keys.UP:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(-gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(-gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(n.preventDefault(),this.update())}_handleTouchStartRotate(n){if(this._pointers.length===1)this._rotateStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),l=.5*(n.pageY+t.y);this._rotateStart.set(i,l)}}_handleTouchStartPan(n){if(this._pointers.length===1)this._panStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),l=.5*(n.pageY+t.y);this._panStart.set(i,l)}}_handleTouchStartDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,l=n.pageY-t.y,r=Math.sqrt(i*i+l*l);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enablePan&&this._handleTouchStartPan(n)}_handleTouchStartDollyRotate(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enableRotate&&this._handleTouchStartRotate(n)}_handleTouchMoveRotate(n){if(this._pointers.length==1)this._rotateEnd.set(n.pageX,n.pageY);else{const i=this._getSecondPointerPosition(n),l=.5*(n.pageX+i.x),r=.5*(n.pageY+i.y);this._rotateEnd.set(l,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(n){if(this._pointers.length===1)this._panEnd.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),l=.5*(n.pageY+t.y);this._panEnd.set(i,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,l=n.pageY-t.y,r=Math.sqrt(i*i+l*l);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(n.pageX+t.x)*.5,s=(n.pageY+t.y)*.5;this._updateZoomParameters(a,s)}_handleTouchMoveDollyPan(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enablePan&&this._handleTouchMovePan(n)}_handleTouchMoveDollyRotate(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enableRotate&&this._handleTouchMoveRotate(n)}_addPointer(n){this._pointers.push(n.pointerId)}_removePointer(n){delete this._pointerPositions[n.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(n){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId)return!0;return!1}_trackPointer(n){let t=this._pointerPositions[n.pointerId];t===void 0&&(t=new Qe,this._pointerPositions[n.pointerId]=t),t.set(n.pageX,n.pageY)}_getSecondPointerPosition(n){const t=n.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(n){const t=n.deltaMode,i={clientX:n.clientX,clientY:n.clientY,deltaY:n.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return n.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ih(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Nh(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Oh(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xo),this.state=Je.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const n=this._pointers[0],t=this._pointerPositions[n];this._onTouchStart({pointerId:n,pageX:t.x,pageY:t.y});break}}function Fh(e){let n;switch(e.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case pn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Je.DOLLY;break;case pn.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Je.ROTATE}break;case pn.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Je.PAN}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Yi)}function Bh(e){switch(this.state){case Je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function kh(e){this.enabled===!1||this.enableZoom===!1||this.state!==Je.NONE||(e.preventDefault(),this.dispatchEvent(Yi),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(xo))}function Gh(e){this.enabled!==!1&&this._handleKeyDown(e)}function Hh(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case hn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Je.TOUCH_ROTATE;break;case hn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Je.TOUCH_PAN;break;default:this.state=Je.NONE}break;case 2:switch(this.touches.TWO){case hn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Je.TOUCH_DOLLY_PAN;break;case hn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Je.TOUCH_DOLLY_ROTATE;break;default:this.state=Je.NONE}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Yi)}function zh(e){switch(this._trackPointer(e),this.state){case Je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Je.NONE}}function Vh(e){this.enabled!==!1&&e.preventDefault()}function Wh(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xh(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Yh=Math.PI*2/34;function Kh(e,{onZoom:n,onContext:t}){const i=new fh({canvas:e,alpha:!0,antialias:!0});i.setClearColor(0,0);const l=new rl,r=new Hi(-7,7,7,-7,.1,100),a=new Uh(r,e);a.enablePan=!1,a.dampingFactor=.16,a.minZoom=.65,a.maxZoom=2.1,a.minPolarAngle=.17,a.maxPolarAngle=Math.PI-.17;const s=window.matchMedia("(prefers-reduced-motion: reduce)"),v={default:new ke(-.54,.28,-1).normalize(),front:new ke(0,0,-1),back:new ke(0,0,1)},b=new no;l.add(b);const E=qh();l.add(E);const d=new Qe,f=new Qe,x=new ci,g=new Nn,c=new Nn,o=new al,S=new Qe,T=e.parentElement;let w,P=13,D=0,L=!0,M=!1,A=0,X=0,F=1/0,y,O=0,u=r.zoom,B=!1,V=0;function N(){D||!w||!L||document.hidden||M||(D=requestAnimationFrame(se))}function se(ie){D=0;const de=O>0?Math.min((ie-O)/1e3,.05):0;O=ie;const _e=B?Yh:0;V=s.matches?_e:Mt.damp(V,_e,5,de),Math.abs(V-_e)<.001&&(V=_e),V&&r.position.applyAxisAngle(r.up,-V*de),a.update(de),Z(de),i.render(l,r),(!s.matches||V||B)&&N()}function Z(ie){if(s.matches){b.position.y=0,b.quaternion.identity(),b.scale.setScalar(1),E.material.opacity=.54;return}A+=ie,X+=ie,F+=ie,f.lerp(d,1-Math.exp(-ie*7));const de=F<.67?Math.sin(Math.PI*F/.67):0,_e=F<.18?.1*Math.sin(Math.PI*F/.18):0,Ge=.94+.06*Mt.smoothstep(X,0,.42),Fe=Math.sin(A*1.8)*.012;b.position.y=.12*Math.sin(A*1.45)+.83*de,b.scale.set(Ge*(1+_e/2),Ge*(1+Fe-_e+.04*de),Ge*(1+_e/2)),x.set(f.y*.13,-f.x*.14,-f.x*.07+Math.sin(A*1.2)*.018),g.copy(r.quaternion).invert(),b.quaternion.copy(r.quaternion).multiply(c.setFromEuler(x)).multiply(g),E.material.opacity=.54-b.position.y*.28}function ue(ie,de){d.set(ie,de),T.style.setProperty("--scene-x",`${ie*-12}px`),T.style.setProperty("--scene-y",`${de*-9}px`),N()}function W(){!w||s.matches||(F=0,N())}function G(){const ie=e.clientWidth,de=e.clientHeight;if(!ie||!de)return;const _e=ie/de,Ge=P/2/Math.min(1,_e/.9);r.left=-Ge*_e,r.right=Ge*_e,r.top=Ge,r.bottom=-Ge,r.updateProjectionMatrix(),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(ie,de,!1),N()}function ge(ie,de=!1){const _e=a.enableDamping;a.enableDamping=!1,a.update(0),r.position.copy(v[ie]).multiplyScalar(27),de&&(r.zoom=1),r.updateProjectionMatrix(),a.update(0),a.enableDamping=_e,ee(),N()}function me(ie){r.zoom=Mt.clamp(ie,a.minZoom,a.maxZoom),r.updateProjectionMatrix(),a.update(0),ee(),N()}function fe(ie){L=ie,O=0,D&&(!L||document.hidden||M)&&(cancelAnimationFrame(D),D=0),N()}function ee(){u!==r.zoom&&(u=r.zoom,n(u))}return a.addEventListener("change",()=>{ee(),N()}),e.addEventListener("pointermove",ie=>{if(y?.id===ie.pointerId&&Math.hypot(ie.clientX-y.x,ie.clientY-y.y)>6&&(y=null),ie.pointerType!=="mouse"||ie.buttons||s.matches)return;const{left:de,top:_e,width:Ge,height:Fe}=e.getBoundingClientRect(),h=(ie.clientX-de)/Ge*2-1,J=(ie.clientY-_e)/Fe*2-1;ue(Mt.clamp(h,-1,1),Mt.clamp(J,-1,1))},{passive:!0}),e.addEventListener("pointerleave",()=>ue(0,0)),e.addEventListener("pointerdown",ie=>{ue(0,0),y=ie.isPrimary&&ie.button===0?{id:ie.pointerId,x:ie.clientX,y:ie.clientY,time:ie.timeStamp}:null}),e.addEventListener("pointercancel",()=>{y=null}),e.addEventListener("pointerup",ie=>{const de=y;if(y=null,!w||s.matches||de?.id!==ie.pointerId||Math.hypot(ie.clientX-de.x,ie.clientY-de.y)>6||ie.timeStamp-de.time>460)return;const{left:_e,top:Ge,width:Fe,height:h}=e.getBoundingClientRect();S.set((ie.clientX-_e)/Fe*2-1,1-(ie.clientY-Ge)/h*2),o.setFromCamera(S,r),o.intersectObject(w,!0).length&&W()}),e.addEventListener("keydown",ie=>{if(ie.ctrlKey||ie.metaKey||ie.altKey)return;const de=new Ni().setFromVector3(r.position),_e=.16;switch(ie.key){case"Enter":case" ":W();break;case"ArrowLeft":de.theta-=_e;break;case"ArrowRight":de.theta+=_e;break;case"ArrowUp":de.phi-=_e;break;case"ArrowDown":de.phi+=_e;break;case"+":case"=":me(r.zoom+.1);break;case"-":me(r.zoom-.1);break;default:return}ie.preventDefault(),ie.key.startsWith("Arrow")&&(de.phi=Mt.clamp(de.phi,a.minPolarAngle,a.maxPolarAngle),r.position.setFromSpherical(de),a.update(0))}),e.addEventListener("webglcontextlost",ie=>{ie.preventDefault(),M=!0,fe(L),t(!1)}),e.addEventListener("webglcontextrestored",()=>{M=!1,t(!0),G()}),new ResizeObserver(G).observe(e),new IntersectionObserver(([ie])=>fe(ie.isIntersecting)).observe(e),document.addEventListener("visibilitychange",()=>fe(L)),s.addEventListener("change",()=>{a.enableDamping=!s.matches,ue(0,0),N()}),a.enableDamping=!s.matches,ge("default",!0),G(),{setModel(ie,de,_e=!1){const Ge=Sh(ie,de),Fe=new ol().setFromObject(Ge),h=Fe.getSize(new ke);Ge.position.sub(Fe.getCenter(new ke)),w&&(b.remove(w),Eh(w)),w=Ge,X=0,b.add(w),E.position.y=-h.y/2-.26,E.scale.set(h.x*1.65,Math.max(h.z*1.85,7),1),P=Math.max(h.y*1.4,h.x*1.4),_e&&ge("default",!0),G()},setZoom:me,setView:ge,setSpinning(ie){B=ie,D||(O=0),N()},setShadow(ie){E.visible=ie,N()},async screenshot(){if(!w||M)throw new Error("The 3D preview must be active to save an image.");const ie=E.visible;try{return E.visible=!1,i.render(l,r),await go(e)}finally{E.visible=ie,N()}}}}function qh(){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),t=n.createRadialGradient(32,32,2,32,32,31);t.addColorStop(0,"#000d"),t.addColorStop(.48,"#0007"),t.addColorStop(1,"#0000"),n.fillStyle=t,n.fillRect(0,0,64,64);const i=new Tt(new Wi(1,1),new ni({map:new io(e),transparent:!0,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.renderOrder=-1,i}const Zh=Object.assign({"../../plushify_chain_small.json":()=>Wt(()=>import("./plushify_chain_small-Dmh6S5Pj.js"),[]).then(e=>e.default),"../../plushify_copper_small.json":()=>Wt(()=>import("./plushify_copper_small-eGYiHBpr.js"),[]).then(e=>e.default),"../../plushify_diamond_small.json":()=>Wt(()=>import("./plushify_diamond_small-BH8NJCAv.js"),[]).then(e=>e.default),"../../plushify_gold_small.json":()=>Wt(()=>import("./plushify_gold_small-GpbP8cph.js"),[]).then(e=>e.default),"../../plushify_iron_small.json":()=>Wt(()=>import("./plushify_iron_small-B-2O9rqX.js"),[]).then(e=>e.default),"../../plushify_netherite_small.json":()=>Wt(()=>import("./plushify_netherite_small-ComjmCGm.js"),[]).then(e=>e.default),"../../plushy_small.json":()=>Wt(()=>import("./plushy_small-BfTd5cDZ.js"),[]).then(e=>e.default),"../../totem_of_undying_small.json":()=>Wt(()=>import("./totem_of_undying_small-jPGIoBiH.js"),[]).then(e=>e.default)});function jh(e){const n=Zh[`../../${e}`];if(!n)throw new Error(`Missing slim model: ${e}`);return n()}const Ye=e=>document.getElementById(e),Ki=Ye("skin-file"),tn=Ye("drop-zone"),Ra=Ye("upload-label"),$h=Ye("avatar"),ya=Ye("skin-name"),Qh=Ye("skin-description"),Ca=Ye("skin-status"),Jh=Ye("demo-option"),Cn=Ye("demo-layout"),ep=Ye("arm-option"),ii=Ye("arm-type"),tp=Ye("arm-auto"),On=Ye("upload-error"),bo=Ye("armor-options"),Pa=Ye("armor-hint"),Mo=Ye("download"),Da=Ye("download-label"),Pn=Ye("export-status"),To=Ye("stage"),np=Ye("stage-message"),ip=Ye("stage-text"),rp=Ye("variant-caption"),ri=Ye("model"),qi=Ye("background"),Fn=Ye("zoom"),ap=Ye("zoom-out"),op=Ye("zoom-in"),sp=Ye("reset"),ki=Ye("flip"),Gi=Ye("spin"),La=Ye("screenshot"),lp=Ye("preview-toolbar").querySelectorAll("button, input"),cp=new Map,fp=new Map;let Bn,wt,ai=!1,pt,fn="Default",mn=!1,Jn=!1,oi=!1,en=0,Li=0;function It(e,n,t=!1){e.textContent=n,e.hidden=!n,e.classList.toggle("error",t)}function _n(e){To.setAttribute("aria-busy","false"),np.hidden=!e,ip.textContent=e}function rn(){Mo.disabled=!pt||pt.demo||mn||Jn,Cn.disabled=mn,ii.disabled=mn,lp.forEach(e=>{e.disabled=!pt||!ai})}function Zi(e,n,t){pt={...e,demo:t,detectedArmType:n.armType},Dh($h,pt.image),ya.textContent=t?"askin":n.file.name,ya.title=t?"":n.file.name,Ca.textContent=t?"Demo":"Personal",Ca.toggleAttribute("data-custom",!t);const i=n.height===32?"64 × 32 · converted to 64 × 64":"64 × 64 PNG";Qh.textContent=t?`${i} · ${e.armType==="slim"?"Slim":"Classic"}`:i,Jh.hidden=!t,ep.hidden=t||n.height===32,tp.textContent=n.armType==="slim"?"Auto · Slim (3 px)":"Auto · Classic (4 px)",rn(),ji()}function Ua(e,n,t){return e.has(n)||e.set(n,t(n).catch(i=>{throw e.delete(n),i})),e.get(n)}async function up(e){const n=await Bn.getTexture(e);return(await vo(n)).canvas}async function ji(){if(!wt||!pt)return;const e=++Li,n=fn,t=pt;try{const i=t.armType,l=await Ua(cp,`${i}/${n}`,()=>Bn.getModel(n,i)),r=new Set(Object.values(l.textures).map(s=>ho(l.textures,s))),a=new Map([["item/skin",t.image]]);if(r.delete("item/skin"),await Promise.all([...r].map(async s=>{a.set(s,await Ua(fp,s,up))})),e!==Li)return;wt.setModel(l,a),rp.textContent=n.toUpperCase(),ri.setAttribute("aria-label",`Interactive ${t.armType} Plushy model`),ai&&_n("")}catch(i){if(e!==Li)return;console.error(i),_n("This model could not be displayed. Try another armor style.")}}async function Ao(e){if(!Bn||Ki.disabled||!e)return;const n=++en;mn=!0,It(On,""),It(Pn,""),Ra.textContent="Reading skin…",rn();try{const t=await So(e),i=await Eo(t);if(n!==en)return;ii.value="auto",Zi(i,t,!1)}catch(t){n===en&&It(On,t.message,!0)}finally{n===en&&(mn=!1,Ra.textContent=pt&&!pt.demo?"Change Your Skin":"Upload Your Skin",rn())}}Ki.addEventListener("change",e=>{Ao(e.currentTarget.files[0]),e.currentTarget.value=""});tn.addEventListener("dragover",e=>{e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.dataTransfer.dropEffect="copy",tn.setAttribute("data-dragging",""))});tn.addEventListener("dragleave",e=>{tn.contains(e.relatedTarget)||tn.removeAttribute("data-dragging")});tn.addEventListener("drop",e=>{if(e.preventDefault(),tn.removeAttribute("data-dragging"),e.dataTransfer.files.length>1){It(On,"Drop one Minecraft skin PNG at a time.",!0);return}Ao(e.dataTransfer.files[0])});ii.addEventListener("change",()=>{const e=ii.value;pt={...pt,armType:e==="auto"?pt.detectedArmType:e},It(Pn,""),ji()});bo.addEventListener("change",e=>{if(fn=e.target.value,Ye("armor-name").textContent=fn,Ye("armor-icon").src=`/Plushify/art/${fn.toLowerCase()}.png`,fn==="Default")Pa.textContent="Leave the Totem unnamed for the default look.";else{const n=document.createElement("strong");n.textContent=fn,Pa.replaceChildren("At an anvil, name your Totem ",n," for this look.")}ji()});function wo(){const e=qi.querySelector(":checked").value;To.dataset.background=e,wt?.setShadow(e!=="transparent")}function Ro(e){Gi.setAttribute("aria-pressed",String(e)),wt?.setSpinning(e)}function yo(e){oi=e;const n=oi?"Show front":"Show back";ki.setAttribute("aria-label",n),ki.title=n}qi.addEventListener("change",wo);Gi.addEventListener("click",()=>Ro(Gi.getAttribute("aria-pressed")!=="true"));ki.addEventListener("click",()=>{yo(!oi),wt?.setView(oi?"back":"front")});function Co(){yo(!1),qi.querySelector('[value="overworld"]').checked=!0,wo(),wt?.setView("default",!0)}sp.addEventListener("click",Co);ri.addEventListener("keydown",e=>{e.key==="Home"&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&(e.preventDefault(),Co())});Fn.addEventListener("input",()=>wt?.setZoom(Number(Fn.value)/100));op.addEventListener("click",()=>wt?.setZoom((Number(Fn.value)+12)/100));ap.addEventListener("click",()=>wt?.setZoom((Number(Fn.value)-12)/100));function Po(e,n){const t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n,document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}La.addEventListener("click",async()=>{La.disabled=!0;try{Po(await wt.screenshot(),"Plushify-Preview.png")}catch(e){_n(e.message)}finally{rn()}});Ye("modrinth-help").addEventListener("click",()=>Ye("modrinth-guide").showModal());Mo.addEventListener("click",async()=>{if(!pt||pt.demo||Jn||mn)return;Jn=!0;const e=pt;rn(),It(Pn,""),Da.textContent="Building your pack…";try{Po(await Bn.export(e.png,e.armType),"Plushify-Custom-Skin.zip"),e===pt&&It(Pn,"Your resource pack is ready.")}catch(n){console.error(n),It(Pn,"Could not build the ZIP. Try downloading again.",!0)}finally{Jn=!1,Da.textContent="Download My Plushy",rn()}});async function Do(e){const t=await fetch(`/Plushify/art/${e==="slim"?"askin-slim.png":"askin.png"}`);if(!t.ok)throw new Error(`Demo request returned ${t.status}`);const i=await So(await t.blob());return{source:i,result:await Eo(i)}}Cn.addEventListener("change",async()=>{const e=++en;It(On,"");try{const{source:n,result:t}=await Do(Cn.value);e===en&&Zi(t,n,!0)}catch{if(e!==en)return;Cn.value=pt.armType,It(On,"The demo skin could not be loaded. Try again.",!0)}});async function dp(){try{wt=Kh(ri,{onZoom:e=>{Fn.value=Math.round(e*100)},onContext(e){ai=e,rn(),_n(e?"":"The 3D connection was lost. Skin upload and ZIP export are still available.")}}),ai=!0,Ro(!0)}catch{ri.tabIndex=-1,_n("3D preview requires WebGL 2. You can still upload skins and download the pack.")}try{const[e,n]=await Promise.all([fetch(ml),Do("classic")]);if(!e.ok)throw new Error(`Pack request returned ${e.status}`);Bn=await wh(await e.arrayBuffer(),_l,jh),Zi(n.result,n.source,!0),Cn.disabled=!1,Ki.disabled=!1,bo.disabled=!1}catch(e){console.error(e),_n("The Plushify pack could not be loaded. Reload the page to try again.")}}dp();
