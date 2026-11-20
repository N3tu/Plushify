import{U as yt,c as uo,N as Pt,S as da,C as at,F as ha,V as ke,R as ho,e as it,w as et,a as gt,l as Yi,b as pa,M as un,W as Ki,d as Dt,f as lt,L as on,H as Yt,D as It,B as Et,g as Mn,h as jn,p as po,i as pn,j as xn,k as mo,m as xt,O as Ci,n as nt,E as _o,o as rt,P as Bn,A as go,q as ni,r as Nt,s as sn,t as dn,u as Tn,v as Jt,x as Xn,y as vo,z as So,G as An,I as St,J as xi,K as an,Q as qi,T as Eo,X as xo,Y as _n,Z as bo,_ as Mo,$ as To,a0 as Ao,a1 as wo,a2 as Ro,a3 as Co,a4 as yo,a5 as Po,a6 as Do,a7 as Lo,a8 as Uo,a9 as Io,aa as No,ab as Oo,ac as Fo,ad as Bo,ae as ii,af as Dn,ag as ko,ah as Ot,ai as Go,aj as Ho,ak as yi,al as zo,am as Pi,an as Vo,ao as Wo,ap as Xo,aq as ma,ar as Ke,as as Yo,at as Ko,au as Bt,av as bn,aw as kn,ax as qo,ay as Ft,az as Sn,aA as zt,aB as Zo,aC as _a,aD as ga,aE as va,aF as Yn,aG as Sa,aH as Ea,aI as xa,aJ as Di,aK as jo,aL as $o,aM as Qo,aN as Jo,aO as ba,aP as es,aQ as ts,aR as ns,aS as ri,aT as ai,aU as oi,aV as si,aW as Zi,aX as ji,aY as $i,aZ as Qi,a_ as Ji,a$ as er,b0 as tr,b1 as nr,b2 as ir,b3 as rr,b4 as ar,b5 as or,b6 as sr,b7 as lr,b8 as cr,b9 as fr,ba as ur,bb as dr,bc as hr,bd as pr,be as mr,bf as _r,bg as gr,bh as vr,bi as Sr,bj as Er,bk as xr,bl as br,bm as Mr,bn as Tr,bo as Ar,bp as wr,bq as is,br as rs,bs as as,bt as os,bu as ss,bv as ls,bw as cs,bx as fs,by as Rr,bz as us,bA as Gn,bB as ds,bC as Cr,bD as yr,bE as Pr,bF as Ma,bG as hs,bH as $n,bI as ps,bJ as ms,bK as Ta,bL as Li,bM as bi,bN as Ui,bO as Aa,bP as _s,bQ as wa,bR as Ra,bS as Ca,bT as ya,bU as Pa,bV as Da,bW as La,bX as Dr,bY as Ua,bZ as li,b_ as ci,b$ as gs,c0 as vs,c1 as Lr,c2 as _t,c3 as Ss,c4 as wn,c5 as hn,c6 as Kn,c7 as Es,c8 as xs,c9 as bs,ca as Ms,cb as Ts,cc as As,cd as ws,ce as Rs,cf as Cs,cg as Ia,ch as Na,ci as Mi,cj as Wt,ck as ys,cl as cn,cm as ln,cn as Ti,co as Ps,cp as Ds,cq as Ls}from"./three-core-BwcFwJuc.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Us="modulepreload",Is=function(e){return"/Plushify/"+e},Ur={},Ht=function(n,t,i){let s=Promise.resolve();if(t&&t.length>0){let g=function(E){return Promise.all(E.map(b=>Promise.resolve(b).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=g(t.map(E=>{if(E=Is(E),E in Ur)return;Ur[E]=!0;const b=E.endsWith(".css"),x=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${E}"]${x}`))return;const d=document.createElement("link");if(d.rel=b?"stylesheet":Us,b||(d.as="script"),d.crossOrigin="",d.href=E,l&&d.setAttribute("nonce",l),document.head.appendChild(d),b)return new Promise((f,S)=>{d.addEventListener("load",f),d.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${E}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return n().catch(r)})},Ns="/Plushify/assets/pack-source-BnQZs1LU.zip",Os=`{\r
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
}`;function Oa(){let e=null,n=!1,t=null,i=null;function s(r,a){t(r,a),i=e.requestAnimationFrame(s)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(s),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function Fs(e){const n=new WeakMap;function t(l,g){const E=l.array,b=l.usage,x=E.byteLength,d=e.createBuffer();e.bindBuffer(g,d),e.bufferData(g,E,b),l.onUploadCallback();let f;if(E instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&E instanceof Float16Array)f=e.HALF_FLOAT;else if(E instanceof Uint16Array)l.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(E instanceof Int16Array)f=e.SHORT;else if(E instanceof Uint32Array)f=e.UNSIGNED_INT;else if(E instanceof Int32Array)f=e.INT;else if(E instanceof Int8Array)f=e.BYTE;else if(E instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(E instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+E);return{buffer:d,type:f,bytesPerElement:E.BYTES_PER_ELEMENT,version:l.version,size:x}}function i(l,g,E){const b=g.array,x=g.updateRanges;if(e.bindBuffer(E,l),x.length===0)e.bufferSubData(E,0,b);else{x.sort((f,S)=>f.start-S.start);let d=0;for(let f=1;f<x.length;f++){const S=x[d],_=x[f];_.start<=S.start+S.count+1?S.count=Math.max(S.count,_.start+_.count-S.start):(++d,x[d]=_)}x.length=d+1;for(let f=0,S=x.length;f<S;f++){const _=x[f];e.bufferSubData(E,_.start*b.BYTES_PER_ELEMENT,b,_.start,_.count)}g.clearUpdateRanges()}g.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const g=n.get(l);g&&(e.deleteBuffer(g.buffer),n.delete(l))}function a(l,g){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const b=n.get(l);(!b||b.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const E=n.get(l);if(E===void 0)n.set(l,t(l,g));else if(E.version<l.version){if(E.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(E.buffer,l,g),E.version=l.version}}return{get:s,remove:r,update:a}}var Bs=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ks=`#ifdef USE_ALPHAHASH
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
#endif`,Gs=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hs=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zs=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vs=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ws=`#ifdef USE_AOMAP
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
#endif`,Xs=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ys=`#ifdef USE_BATCHING
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
#endif`,Ks=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qs=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zs=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,js=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$s=`#ifdef USE_IRIDESCENCE
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
#endif`,Qs=`#ifdef USE_BUMPMAP
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
#endif`,Js=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,el=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,il=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,al=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ol=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,sl=`#define PI 3.141592653589793
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
} // validated`,ll=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cl=`vec3 transformedNormal = objectNormal;
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
#endif`,fl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ul=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pl="gl_FragColor = linearToOutputTexel( gl_FragColor );",ml=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_l=`#ifdef USE_ENVMAP
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
#endif`,gl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vl=`#ifdef USE_ENVMAP
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
#endif`,Sl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,El=`#ifdef USE_ENVMAP
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
#endif`,xl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ml=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Al=`#ifdef USE_GRADIENTMAP
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
}`,wl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yl=`uniform bool receiveShadow;
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
#endif`,Pl=`#ifdef USE_ENVMAP
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
#endif`,Dl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ll=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ul=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Il=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nl=`PhysicalMaterial material;
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
#endif`,Ol=`uniform sampler2D dfgLUT;
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
}`,Fl=`
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
#endif`,Bl=`#if defined( RE_IndirectDiffuse )
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
#endif`,kl=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gl=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hl=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zl=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vl=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wl=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xl=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kl=`#if defined( USE_POINTS_UV )
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
#endif`,ql=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jl=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$l=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ql=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jl=`#ifdef USE_MORPHTARGETS
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
#endif`,ec=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ic=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ac=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oc=`#ifdef USE_NORMALMAP
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
#endif`,sc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_c=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ec=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bc=`float getShadowMask() {
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
}`,Mc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tc=`#ifdef USE_SKINNING
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
#endif`,Ac=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wc=`#ifdef USE_SKINNING
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
#endif`,Rc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pc=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dc=`#ifdef USE_TRANSMISSION
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
#endif`,Lc=`#ifdef USE_TRANSMISSION
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
#endif`,Uc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ic=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bc=`uniform sampler2D t2D;
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
}`,kc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gc=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vc=`#include <common>
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
}`,Wc=`#if DEPTH_PACKING == 3200
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
}`,Xc=`#define DISTANCE
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
}`,Yc=`#define DISTANCE
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
}`,Kc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zc=`uniform float scale;
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
}`,jc=`uniform vec3 diffuse;
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
}`,$c=`#include <common>
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
}`,Qc=`uniform vec3 diffuse;
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
}`,Jc=`#define LAMBERT
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
}`,ef=`#define LAMBERT
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
}`,tf=`#define MATCAP
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
}`,nf=`#define MATCAP
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
}`,rf=`#define NORMAL
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
}`,af=`#define NORMAL
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
}`,of=`#define PHONG
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
}`,sf=`#define PHONG
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
}`,lf=`#define STANDARD
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
}`,cf=`#define STANDARD
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
}`,ff=`#define TOON
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
}`,uf=`#define TOON
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
}`,df=`uniform float size;
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
}`,hf=`uniform vec3 diffuse;
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
}`,pf=`#include <common>
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
}`,mf=`uniform vec3 color;
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
}`,_f=`uniform float rotation;
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
}`,gf=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Bs,alphahash_pars_fragment:ks,alphamap_fragment:Gs,alphamap_pars_fragment:Hs,alphatest_fragment:zs,alphatest_pars_fragment:Vs,aomap_fragment:Ws,aomap_pars_fragment:Xs,batching_pars_vertex:Ys,batching_vertex:Ks,begin_vertex:qs,beginnormal_vertex:Zs,bsdfs:js,iridescence_fragment:$s,bumpmap_pars_fragment:Qs,clipping_planes_fragment:Js,clipping_planes_pars_fragment:el,clipping_planes_pars_vertex:tl,clipping_planes_vertex:nl,color_fragment:il,color_pars_fragment:rl,color_pars_vertex:al,color_vertex:ol,common:sl,cube_uv_reflection_fragment:ll,defaultnormal_vertex:cl,displacementmap_pars_vertex:fl,displacementmap_vertex:ul,emissivemap_fragment:dl,emissivemap_pars_fragment:hl,colorspace_fragment:pl,colorspace_pars_fragment:ml,envmap_fragment:_l,envmap_common_pars_fragment:gl,envmap_pars_fragment:vl,envmap_pars_vertex:Sl,envmap_physical_pars_fragment:Pl,envmap_vertex:El,fog_vertex:xl,fog_pars_vertex:bl,fog_fragment:Ml,fog_pars_fragment:Tl,gradientmap_pars_fragment:Al,lightmap_pars_fragment:wl,lights_lambert_fragment:Rl,lights_lambert_pars_fragment:Cl,lights_pars_begin:yl,lights_toon_fragment:Dl,lights_toon_pars_fragment:Ll,lights_phong_fragment:Ul,lights_phong_pars_fragment:Il,lights_physical_fragment:Nl,lights_physical_pars_fragment:Ol,lights_fragment_begin:Fl,lights_fragment_maps:Bl,lights_fragment_end:kl,logdepthbuf_fragment:Gl,logdepthbuf_pars_fragment:Hl,logdepthbuf_pars_vertex:zl,logdepthbuf_vertex:Vl,map_fragment:Wl,map_pars_fragment:Xl,map_particle_fragment:Yl,map_particle_pars_fragment:Kl,metalnessmap_fragment:ql,metalnessmap_pars_fragment:Zl,morphinstance_vertex:jl,morphcolor_vertex:$l,morphnormal_vertex:Ql,morphtarget_pars_vertex:Jl,morphtarget_vertex:ec,normal_fragment_begin:tc,normal_fragment_maps:nc,normal_pars_fragment:ic,normal_pars_vertex:rc,normal_vertex:ac,normalmap_pars_fragment:oc,clearcoat_normal_fragment_begin:sc,clearcoat_normal_fragment_maps:lc,clearcoat_pars_fragment:cc,iridescence_pars_fragment:fc,opaque_fragment:uc,packing:dc,premultiplied_alpha_fragment:hc,project_vertex:pc,dithering_fragment:mc,dithering_pars_fragment:_c,roughnessmap_fragment:gc,roughnessmap_pars_fragment:vc,shadowmap_pars_fragment:Sc,shadowmap_pars_vertex:Ec,shadowmap_vertex:xc,shadowmask_pars_fragment:bc,skinbase_vertex:Mc,skinning_pars_vertex:Tc,skinning_vertex:Ac,skinnormal_vertex:wc,specularmap_fragment:Rc,specularmap_pars_fragment:Cc,tonemapping_fragment:yc,tonemapping_pars_fragment:Pc,transmission_fragment:Dc,transmission_pars_fragment:Lc,uv_pars_fragment:Uc,uv_pars_vertex:Ic,uv_vertex:Nc,worldpos_vertex:Oc,background_vert:Fc,background_frag:Bc,backgroundCube_vert:kc,backgroundCube_frag:Gc,cube_vert:Hc,cube_frag:zc,depth_vert:Vc,depth_frag:Wc,distance_vert:Xc,distance_frag:Yc,equirect_vert:Kc,equirect_frag:qc,linedashed_vert:Zc,linedashed_frag:jc,meshbasic_vert:$c,meshbasic_frag:Qc,meshlambert_vert:Jc,meshlambert_frag:ef,meshmatcap_vert:tf,meshmatcap_frag:nf,meshnormal_vert:rf,meshnormal_frag:af,meshphong_vert:of,meshphong_frag:sf,meshphysical_vert:lf,meshphysical_frag:cf,meshtoon_vert:ff,meshtoon_frag:uf,points_vert:df,points_frag:hf,shadow_vert:pf,shadow_frag:mf,sprite_vert:_f,sprite_frag:gf},Se={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Ct={basic:{uniforms:_t([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:_t([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:_t([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:_t([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:_t([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new at(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:_t([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:_t([Se.points,Se.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:_t([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:_t([Se.common,Se.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:_t([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:_t([Se.sprite,Se.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:_t([Se.common,Se.displacementmap,{referencePosition:{value:new ke},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:_t([Se.lights,Se.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Ct.physical={uniforms:_t([Ct.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Ln={r:0,b:0,g:0},Zt=new Ui,vf=new un;function Sf(e,n,t,i,s,r){const a=new at(0);let l=s===!0?0:1,g,E,b=null,x=0,d=null;function f(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){const w=v.backgroundBlurriness>0;T=n.get(T,w)}return T}function S(v){let T=!1;const w=f(v);w===null?c(a,l):w&&w.isColor&&(c(w,1),T=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(e.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(v,T){const w=f(T);w&&(w.isCubeTexture||w.mapping===$n)?(E===void 0&&(E=new xt(new Li(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:bi(Ct.backgroundCube.uniforms),vertexShader:Ct.backgroundCube.vertexShader,fragmentShader:Ct.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),E.geometry.deleteAttribute("normal"),E.geometry.deleteAttribute("uv"),E.onBeforeRender=function(P,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(E.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(E)),Zt.copy(T.backgroundRotation),Zt.x*=-1,Zt.y*=-1,Zt.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Zt.y*=-1,Zt.z*=-1),E.material.uniforms.envMap.value=w,E.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,E.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,E.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,E.material.uniforms.backgroundRotation.value.setFromMatrix4(vf.makeRotationFromEuler(Zt)),E.material.toneMapped=lt.getTransfer(w.colorSpace)!==nt,(b!==w||x!==w.version||d!==e.toneMapping)&&(E.material.needsUpdate=!0,b=w,x=w.version,d=e.toneMapping),E.layers.enableAll(),v.unshift(E,E.geometry,E.material,0,0,null)):w&&w.isTexture&&(g===void 0&&(g=new xt(new Di(2,2),new Bt({name:"BackgroundMaterial",uniforms:bi(Ct.background.uniforms),vertexShader:Ct.background.vertexShader,fragmentShader:Ct.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(g)),g.material.uniforms.t2D.value=w,g.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,g.material.toneMapped=lt.getTransfer(w.colorSpace)!==nt,w.matrixAutoUpdate===!0&&w.updateMatrix(),g.material.uniforms.uvTransform.value.copy(w.matrix),(b!==w||x!==w.version||d!==e.toneMapping)&&(g.material.needsUpdate=!0,b=w,x=w.version,d=e.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null))}function c(v,T){v.getRGB(Ln,Ta(e)),t.buffers.color.setClear(Ln.r,Ln.g,Ln.b,T,r)}function o(){E!==void 0&&(E.geometry.dispose(),E.material.dispose(),E=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),l=T,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,c(a,l)},render:S,addToRenderList:_,dispose:o}}function Ef(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function l(B,y,U,u,O){let V=!1;const F=x(B,u,U,y);r!==F&&(r=F,E(r.object)),V=f(B,u,U,O),V&&S(B,u,U,O),O!==null&&n.update(O,e.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,w(B,y,U,u),O!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(O).buffer))}function g(){return e.createVertexArray()}function E(B){return e.bindVertexArray(B)}function b(B){return e.deleteVertexArray(B)}function x(B,y,U,u){const O=u.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);const F=B.isInstancedMesh===!0?B.id:0;let oe=V[F];oe===void 0&&(oe={},V[F]=oe);let Z=oe[U.id];Z===void 0&&(Z={},oe[U.id]=Z);let ue=Z[O];return ue===void 0&&(ue=d(g()),Z[O]=ue),ue}function d(B){const y=[],U=[],u=[];for(let O=0;O<t;O++)y[O]=0,U[O]=0,u[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:U,attributeDivisors:u,object:B,attributes:{},index:null}}function f(B,y,U,u){const O=r.attributes,V=y.attributes;let F=0;const oe=U.getAttributes();for(const Z in oe)if(oe[Z].location>=0){const W=O[Z];let G=V[Z];if(G===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(G=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(G=B.instanceColor)),W===void 0||W.attribute!==G||G&&W.data!==G.data)return!0;F++}return r.attributesNum!==F||r.index!==u}function S(B,y,U,u){const O={},V=y.attributes;let F=0;const oe=U.getAttributes();for(const Z in oe)if(oe[Z].location>=0){let W=V[Z];W===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(W=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(W=B.instanceColor));const G={};G.attribute=W,W&&W.data&&(G.data=W.data),O[Z]=G,F++}r.attributes=O,r.attributesNum=F,r.index=u}function _(){const B=r.newAttributes;for(let y=0,U=B.length;y<U;y++)B[y]=0}function c(B){o(B,0)}function o(B,y){const U=r.newAttributes,u=r.enabledAttributes,O=r.attributeDivisors;U[B]=1,u[B]===0&&(e.enableVertexAttribArray(B),u[B]=1),O[B]!==y&&(e.vertexAttribDivisor(B,y),O[B]=y)}function v(){const B=r.newAttributes,y=r.enabledAttributes;for(let U=0,u=y.length;U<u;U++)y[U]!==B[U]&&(e.disableVertexAttribArray(U),y[U]=0)}function T(B,y,U,u,O,V,F){F===!0?e.vertexAttribIPointer(B,y,U,O,V):e.vertexAttribPointer(B,y,U,u,O,V)}function w(B,y,U,u){_();const O=u.attributes,V=U.getAttributes(),F=y.defaultAttributeValues;for(const oe in V){const Z=V[oe];if(Z.location>=0){let ue=O[oe];if(ue===void 0&&(oe==="instanceMatrix"&&B.instanceMatrix&&(ue=B.instanceMatrix),oe==="instanceColor"&&B.instanceColor&&(ue=B.instanceColor)),ue!==void 0){const W=ue.normalized,G=ue.itemSize,ge=n.get(ue);if(ge===void 0)continue;const pe=ge.buffer,ce=ge.type,te=ge.bytesPerElement,fe=ce===e.INT||ce===e.UNSIGNED_INT||ue.gpuType===ba;if(ue.isInterleavedBufferAttribute){const se=ue.data,Me=se.stride,Re=ue.offset;if(se.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Z.locationSize;Ce++)o(Z.location+Ce,se.meshPerAttribute);B.isInstancedMesh!==!0&&u._maxInstanceCount===void 0&&(u._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ce=0;Ce<Z.locationSize;Ce++)c(Z.location+Ce);e.bindBuffer(e.ARRAY_BUFFER,pe);for(let Ce=0;Ce<Z.locationSize;Ce++)T(Z.location+Ce,G/Z.locationSize,ce,W,Me*te,(Re+G/Z.locationSize*Ce)*te,fe)}else{if(ue.isInstancedBufferAttribute){for(let se=0;se<Z.locationSize;se++)o(Z.location+se,ue.meshPerAttribute);B.isInstancedMesh!==!0&&u._maxInstanceCount===void 0&&(u._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let se=0;se<Z.locationSize;se++)c(Z.location+se);e.bindBuffer(e.ARRAY_BUFFER,pe);for(let se=0;se<Z.locationSize;se++)T(Z.location+se,G/Z.locationSize,ce,W,G*te,G/Z.locationSize*se*te,fe)}}else if(F!==void 0){const W=F[oe];if(W!==void 0)switch(W.length){case 2:e.vertexAttrib2fv(Z.location,W);break;case 3:e.vertexAttrib3fv(Z.location,W);break;case 4:e.vertexAttrib4fv(Z.location,W);break;default:e.vertexAttrib1fv(Z.location,W)}}}}v()}function P(){A();for(const B in i){const y=i[B];for(const U in y){const u=y[U];for(const O in u){const V=u[O];for(const F in V)b(V[F].object),delete V[F];delete u[O]}}delete i[B]}}function D(B){if(i[B.id]===void 0)return;const y=i[B.id];for(const U in y){const u=y[U];for(const O in u){const V=u[O];for(const F in V)b(V[F].object),delete V[F];delete u[O]}}delete i[B.id]}function L(B){for(const y in i){const U=i[y];for(const u in U){const O=U[u];if(O[B.id]===void 0)continue;const V=O[B.id];for(const F in V)b(V[F].object),delete V[F];delete O[B.id]}}}function M(B){for(const y in i){const U=i[y],u=B.isInstancedMesh===!0?B.id:0,O=U[u];if(O!==void 0){for(const V in O){const F=O[V];for(const oe in F)b(F[oe].object),delete F[oe];delete O[V]}delete U[u],Object.keys(U).length===0&&delete i[y]}}}function A(){X(),a=!0,r!==s&&(r=s,E(r.object))}function X(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:A,resetDefaultState:X,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfObject:M,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:c,disableUnusedAttributes:v}}function xf(e,n,t){let i;function s(E){i=E}function r(E,b){e.drawArrays(i,E,b),t.update(b,i,1)}function a(E,b,x){x!==0&&(e.drawArraysInstanced(i,E,b,x),t.update(b,i,x))}function l(E,b,x){if(x===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,E,0,b,0,x);let f=0;for(let S=0;S<x;S++)f+=b[S];t.update(f,i,1)}function g(E,b,x,d){if(x===0)return;const f=n.get("WEBGL_multi_draw");if(f===null)for(let S=0;S<E.length;S++)a(E[S],b[S],d[S]);else{f.multiDrawArraysInstancedWEBGL(i,E,0,b,0,d,0,x);let S=0;for(let _=0;_<x;_++)S+=b[_]*d[_];t.update(S,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=g}function bf(e,n,t,i){let s;function r(){if(s!==void 0)return s;if(n.has("EXT_texture_filter_anisotropic")===!0){const L=n.get("EXT_texture_filter_anisotropic");s=e.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==Nt&&i.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(L){const M=L===Yt&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(L!==yt&&i.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==zt&&!M)}function g(L){if(L==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let E=t.precision!==void 0?t.precision:"highp";const b=g(E);b!==E&&(et("WebGLRenderer:",E,"not supported, using",b,"instead."),E=b);const x=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),o=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),w=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),P=e.getParameter(e.MAX_SAMPLES),D=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:g,textureFormatReadable:a,textureTypeReadable:l,precision:E,logarithmicDepthBuffer:x,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:S,maxTextureSize:_,maxCubemapSize:c,maxAttributes:o,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:w,maxSamples:P,samples:D}}function Mf(e){const n=this;let t=null,i=0,s=!1,r=!1;const a=new ma,l=new Ke,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(x,d){const f=x.length!==0||d||i!==0||s;return s=d,i=x.length,f},this.beginShadows=function(){r=!0,b(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(x,d){t=b(x,d,0)},this.setState=function(x,d,f){const S=x.clippingPlanes,_=x.clipIntersection,c=x.clipShadows,o=e.get(x);if(!s||S===null||S.length===0||r&&!c)r?b(null):E();else{const v=r?0:i,T=v*4;let w=o.clippingState||null;g.value=w,w=b(S,d,T,f);for(let P=0;P!==T;++P)w[P]=t[P];o.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function E(){g.value!==t&&(g.value=t,g.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function b(x,d,f,S){const _=x!==null?x.length:0;let c=null;if(_!==0){if(c=g.value,S!==!0||c===null){const o=f+_*4,v=d.matrixWorldInverse;l.getNormalMatrix(v),(c===null||c.length<o)&&(c=new Float32Array(o));for(let T=0,w=f;T!==_;++T,w+=4)a.copy(x[T]).applyMatrix4(v,l),a.normal.toArray(c,w),c[w+3]=a.constant}g.value=c,g.needsUpdate=!0}return n.numPlanes=_,n.numIntersection=0,c}}const Vt=4,Ir=[.125,.215,.35,.446,.526,.582],$t=20,Tf=256,gn=new Ci,Nr=new at;let fi=null,ui=0,di=0,hi=!1;const Af=new ke;class Or{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,s=100,r={}){const{size:a=256,position:l=Af}=r;fi=this._renderer.getRenderTarget(),ui=this._renderer.getActiveCubeFace(),di=this._renderer.getActiveMipmapLevel(),hi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(n,i,s,g,l),t>0&&this._blur(g,0,0,t),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Br(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(fi,ui,di),this._renderer.xr.enabled=hi,n.scissorTest=!1,rn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===wn||n.mapping===hn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),fi=this._renderer.getRenderTarget(),ui=this._renderer.getActiveCubeFace(),di=this._renderer.getActiveMipmapLevel(),hi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:St,minFilter:St,generateMipmaps:!1,type:Yt,format:Nt,colorSpace:jn,depthBuffer:!1},s=Fr(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fr(n,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=wf(r)),this._blurMaterial=Cf(r,n,t),this._ggxMaterial=Rf(r,n,t)}return s}_compileMaterial(n){const t=new xt(new pn,n);this._renderer.compile(t,gn)}_sceneToCubeUV(n,t,i,s,r){const g=new Bn(90,1,t,i),E=[1,-1,1,1,1,1],b=[1,1,1,-1,-1,-1],x=this._renderer,d=x.autoClear,f=x.toneMapping;x.getClearColor(Nr),x.toneMapping=Pt,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xt(new Li,new Kn({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,c=_.material;let o=!1;const v=n.background;v?v.isColor&&(c.color.copy(v),n.background=null,o=!0):(c.color.copy(Nr),o=!0);for(let T=0;T<6;T++){const w=T%3;w===0?(g.up.set(0,E[T],0),g.position.set(r.x,r.y,r.z),g.lookAt(r.x+b[T],r.y,r.z)):w===1?(g.up.set(0,0,E[T]),g.position.set(r.x,r.y,r.z),g.lookAt(r.x,r.y+b[T],r.z)):(g.up.set(0,E[T],0),g.position.set(r.x,r.y,r.z),g.lookAt(r.x,r.y,r.z+b[T]));const P=this._cubeSize;rn(s,w*P,T>2?P:0,P,P),x.setRenderTarget(s),o&&x.render(_,g),x.render(n,g)}x.toneMapping=f,x.autoClear=d,n.background=v}_textureToCubeUV(n,t){const i=this._renderer,s=n.mapping===wn||n.mapping===hn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kr()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Br());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const l=r.uniforms;l.envMap.value=n;const g=this._cubeSize;rn(t,0,0,3*g,2*g),i.setRenderTarget(t),i.render(a,gn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(n,r-1,r);t.autoClear=i}_applyGGXFilter(n,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;const g=a.uniforms,E=i/(this._lodMeshes.length-1),b=t/(this._lodMeshes.length-1),x=Math.sqrt(E*E-b*b),d=0+E*1.25,f=x*d,{_lodMax:S}=this,_=this._sizeLods[i],c=3*_*(i>S-Vt?i-S+Vt:0),o=4*(this._cubeSize-_);g.envMap.value=n.texture,g.roughness.value=f,g.mipInt.value=S-t,rn(r,c,o,3*_,2*_),s.setRenderTarget(r),s.render(l,gn),g.envMap.value=r.texture,g.roughness.value=0,g.mipInt.value=S-i,rn(n,c,o,3*_,2*_),s.setRenderTarget(n),s.render(l,gn)}_blur(n,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(n,a,t,i,s,"latitudinal",r),this._halfBlur(a,n,i,i,s,"longitudinal",r)}_halfBlur(n,t,i,s,r,a,l){const g=this._renderer,E=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const b=3,x=this._lodMeshes[s];x.material=E;const d=E.uniforms,f=this._sizeLods[i]-1,S=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*$t-1),_=r/S,c=isFinite(r)?1+Math.floor(b*_):$t;c>$t&&et(`sigmaRadians, ${r}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${$t}`);const o=[];let v=0;for(let L=0;L<$t;++L){const M=L/_,A=Math.exp(-M*M/2);o.push(A),L===0?v+=A:L<c&&(v+=2*A)}for(let L=0;L<o.length;L++)o[L]=o[L]/v;d.envMap.value=n.texture,d.samples.value=c,d.weights.value=o,d.latitudinal.value=a==="latitudinal",l&&(d.poleAxis.value=l);const{_lodMax:T}=this;d.dTheta.value=S,d.mipInt.value=T-i;const w=this._sizeLods[s],P=3*w*(s>T-Vt?s-T+Vt:0),D=4*(this._cubeSize-w);rn(t,P,D,3*w,2*w),g.setRenderTarget(t),g.render(x,gn)}}function wf(e){const n=[],t=[],i=[];let s=e;const r=e-Vt+1+Ir.length;for(let a=0;a<r;a++){const l=Math.pow(2,s);n.push(l);let g=1/l;a>e-Vt?g=Ir[a-e+Vt-1]:a===0&&(g=0),t.push(g);const E=1/(l-2),b=-E,x=1+E,d=[b,b,x,b,x,x,b,b,x,x,b,x],f=6,S=6,_=3,c=2,o=1,v=new Float32Array(_*S*f),T=new Float32Array(c*S*f),w=new Float32Array(o*S*f);for(let D=0;D<f;D++){const L=D%3*2/3-1,M=D>2?0:-1,A=[L,M,0,L+2/3,M,0,L+2/3,M+1,0,L,M,0,L+2/3,M+1,0,L,M+1,0];v.set(A,_*S*D),T.set(d,c*S*D);const X=[D,D,D,D,D,D];w.set(X,o*S*D)}const P=new pn;P.setAttribute("position",new bn(v,_)),P.setAttribute("uv",new bn(T,c)),P.setAttribute("faceIndex",new bn(w,o)),i.push(new xt(P,null)),s>Vt&&s--}return{lodMeshes:i,sizeLods:n,sigmas:t}}function Fr(e,n,t){const i=new Dt(e,n,t);return i.texture.mapping=$n,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rn(e,n,t,i,s){e.viewport.set(n,t,i,s),e.scissor.set(n,t,i,s)}function Rf(e,n,t){return new Bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tf,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qn(),fragmentShader:`

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
		`,blending:Ft,depthTest:!1,depthWrite:!1})}function Cf(e,n,t){const i=new Float32Array($t),s=new ke(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:$t,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qn(),fragmentShader:`

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
		`,blending:Ft,depthTest:!1,depthWrite:!1})}function Br(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qn(),fragmentShader:`

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
		`,blending:Ft,depthTest:!1,depthWrite:!1})}function kr(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ft,depthTest:!1,depthWrite:!1})}function Qn(){return`

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
	`}class Fa extends Dt{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},s=[i,i,i,i,i,i];this.texture=new Aa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Li(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Et,blending:Ft});r.uniforms.tEquirect.value=t;const a=new xt(s,r),l=t.minFilter;return t.minFilter===on&&(t.minFilter=St),new _s(1,10,this).update(n,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(n,t=!0,i=!0,s=!0){const r=n.getRenderTarget();for(let a=0;a<6;a++)n.setRenderTarget(this,a),n.clear(t,i,s);n.setRenderTarget(r)}}function yf(e){let n=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===li||f===ci)if(n.has(d)){const S=n.get(d).texture;return l(S,d.mapping)}else{const S=d.image;if(S&&S.height>0){const _=new Fa(S.height);return _.fromEquirectangularTexture(e,d),n.set(d,_),d.addEventListener("dispose",E),l(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,S=f===li||f===ci,_=f===wn||f===hn;if(S||_){let c=t.get(d);const o=c!==void 0?c.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==o)return i===null&&(i=new Or(e)),c=S?i.fromEquirectangular(d,c):i.fromCubemap(d,c),c.texture.pmremVersion=d.pmremVersion,t.set(d,c),c.texture;if(c!==void 0)return c.texture;{const v=d.image;return S&&v&&v.height>0||_&&v&&g(v)?(i===null&&(i=new Or(e)),c=S?i.fromEquirectangular(d):i.fromCubemap(d),c.texture.pmremVersion=d.pmremVersion,t.set(d,c),d.addEventListener("dispose",b),c.texture):null}}}return d}function l(d,f){return f===li?d.mapping=wn:f===ci&&(d.mapping=hn),d}function g(d){let f=0;const S=6;for(let _=0;_<S;_++)d[_]!==void 0&&f++;return f===S}function E(d){const f=d.target;f.removeEventListener("dispose",E);const S=n.get(f);S!==void 0&&(n.delete(f),S.dispose())}function b(d){const f=d.target;f.removeEventListener("dispose",b);const S=t.get(f);S!==void 0&&(t.delete(f),S.dispose())}function x(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:x}}function Pf(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const s=e.getExtension(i);return n[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&pa("WebGLRenderer: "+i+" extension not supported."),s}}}function Df(e,n,t,i){const s={},r=new WeakMap;function a(x){const d=x.target;d.index!==null&&n.remove(d.index);for(const S in d.attributes)n.remove(d.attributes[S]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(n.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function l(x,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function g(x){const d=x.attributes;for(const f in d)n.update(d[f],e.ARRAY_BUFFER)}function E(x){const d=[],f=x.index,S=x.attributes.position;let _=0;if(S===void 0)return;if(f!==null){const v=f.array;_=f.version;for(let T=0,w=v.length;T<w;T+=3){const P=v[T+0],D=v[T+1],L=v[T+2];d.push(P,D,D,L,L,P)}}else{const v=S.array;_=S.version;for(let T=0,w=v.length/3-1;T<w;T+=3){const P=T+0,D=T+1,L=T+2;d.push(P,D,D,L,L,P)}}const c=new(S.count>=65535?gs:vs)(d,1);c.version=_;const o=r.get(x);o&&n.remove(o),r.set(x,c)}function b(x){const d=r.get(x);if(d){const f=x.index;f!==null&&d.version<f.version&&E(x)}else E(x);return r.get(x)}return{get:l,update:g,getWireframeAttribute:b}}function Lf(e,n,t){let i;function s(d){i=d}let r,a;function l(d){r=d.type,a=d.bytesPerElement}function g(d,f){e.drawElements(i,f,r,d*a),t.update(f,i,1)}function E(d,f,S){S!==0&&(e.drawElementsInstanced(i,f,r,d*a,S),t.update(f,i,S))}function b(d,f,S){if(S===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,S);let c=0;for(let o=0;o<S;o++)c+=f[o];t.update(c,i,1)}function x(d,f,S,_){if(S===0)return;const c=n.get("WEBGL_multi_draw");if(c===null)for(let o=0;o<d.length;o++)E(d[o]/a,f[o],_[o]);else{c.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,S);let o=0;for(let v=0;v<S;v++)o+=f[v]*_[v];t.update(o,i,1)}}this.setMode=s,this.setIndex=l,this.render=g,this.renderInstances=E,this.renderMultiDraw=b,this.renderMultiDrawInstances=x}function Uf(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(t.calls++,a){case e.TRIANGLES:t.triangles+=l*(r/3);break;case e.LINES:t.lines+=l*(r/2);break;case e.LINE_STRIP:t.lines+=l*(r-1);break;case e.LINE_LOOP:t.lines+=l*r;break;case e.POINTS:t.points+=l*r;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:s,update:i}}function If(e,n,t){const i=new WeakMap,s=new gt;function r(a,l,g){const E=a.morphTargetInfluences,b=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,x=b!==void 0?b.length:0;let d=i.get(l);if(d===void 0||d.count!==x){let A=function(){L.dispose(),i.delete(l),l.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const f=l.morphAttributes.position!==void 0,S=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,c=l.morphAttributes.position||[],o=l.morphAttributes.normal||[],v=l.morphAttributes.color||[];let T=0;f===!0&&(T=1),S===!0&&(T=2),_===!0&&(T=3);let w=l.attributes.position.count*T,P=1;w>n.maxTextureSize&&(P=Math.ceil(w/n.maxTextureSize),w=n.maxTextureSize);const D=new Float32Array(w*P*4*x),L=new Ma(D,w,P,x);L.type=zt,L.needsUpdate=!0;const M=T*4;for(let X=0;X<x;X++){const B=c[X],y=o[X],U=v[X],u=w*P*4*X;for(let O=0;O<B.count;O++){const V=O*M;f===!0&&(s.fromBufferAttribute(B,O),D[u+V+0]=s.x,D[u+V+1]=s.y,D[u+V+2]=s.z,D[u+V+3]=0),S===!0&&(s.fromBufferAttribute(y,O),D[u+V+4]=s.x,D[u+V+5]=s.y,D[u+V+6]=s.z,D[u+V+7]=0),_===!0&&(s.fromBufferAttribute(U,O),D[u+V+8]=s.x,D[u+V+9]=s.y,D[u+V+10]=s.z,D[u+V+11]=U.itemSize===4?s.w:1)}}d={count:x,texture:L,size:new rt(w,P)},i.set(l,d),l.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)g.getUniforms().setValue(e,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<E.length;_++)f+=E[_];const S=l.morphTargetsRelative?1:1-f;g.getUniforms().setValue(e,"morphTargetBaseInfluence",S),g.getUniforms().setValue(e,"morphTargetInfluences",E)}g.getUniforms().setValue(e,"morphTargetsTexture",d.texture,t),g.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:r}}function Nf(e,n,t,i,s){let r=new WeakMap;function a(E){const b=s.render.frame,x=E.geometry,d=n.get(E,x);if(r.get(d)!==b&&(n.update(d),r.set(d,b)),E.isInstancedMesh&&(E.hasEventListener("dispose",g)===!1&&E.addEventListener("dispose",g),r.get(E)!==b&&(t.update(E.instanceMatrix,e.ARRAY_BUFFER),E.instanceColor!==null&&t.update(E.instanceColor,e.ARRAY_BUFFER),r.set(E,b))),E.isSkinnedMesh){const f=E.skeleton;r.get(f)!==b&&(f.update(),r.set(f,b))}return d}function l(){r=new WeakMap}function g(E){const b=E.target;b.removeEventListener("dispose",g),i.releaseStatesOfObject(b),t.remove(b.instanceMatrix),b.instanceColor!==null&&t.remove(b.instanceColor)}return{update:a,dispose:l}}const Of={[La]:"LINEAR_TONE_MAPPING",[Da]:"REINHARD_TONE_MAPPING",[Pa]:"CINEON_TONE_MAPPING",[ya]:"ACES_FILMIC_TONE_MAPPING",[Ca]:"AGX_TONE_MAPPING",[Ra]:"NEUTRAL_TONE_MAPPING",[wa]:"CUSTOM_TONE_MAPPING"};function Ff(e,n,t,i,s){const r=new Dt(n,t,{type:e,depthBuffer:i,stencilBuffer:s}),a=new Dt(n,t,{type:Yt,depthBuffer:!1,stencilBuffer:!1}),l=new pn;l.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new xn([0,2,0,0,2,0],2));const g=new mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),E=new xt(l,g),b=new Ci(-1,1,1,-1,0,1);let x=null,d=null,f=!1,S,_=null,c=[],o=!1;this.setSize=function(v,T){r.setSize(v,T),a.setSize(v,T);for(let w=0;w<c.length;w++){const P=c[w];P.setSize&&P.setSize(v,T)}},this.setEffects=function(v){c=v,o=c.length>0&&c[0].isRenderPass===!0;const T=r.width,w=r.height;for(let P=0;P<c.length;P++){const D=c[P];D.setSize&&D.setSize(T,w)}},this.begin=function(v,T){if(f||v.toneMapping===Pt&&c.length===0)return!1;if(_=T,T!==null){const w=T.width,P=T.height;(r.width!==w||r.height!==P)&&this.setSize(w,P)}return o===!1&&v.setRenderTarget(r),S=v.toneMapping,v.toneMapping=Pt,!0},this.hasRenderPass=function(){return o},this.end=function(v,T){v.toneMapping=S,f=!0;let w=r,P=a;for(let D=0;D<c.length;D++){const L=c[D];if(L.enabled!==!1&&(L.render(v,P,w,T),L.needsSwap!==!1)){const M=w;w=P,P=M}}if(x!==v.outputColorSpace||d!==v.toneMapping){x=v.outputColorSpace,d=v.toneMapping,g.defines={},lt.getTransfer(x)===nt&&(g.defines.SRGB_TRANSFER="");const D=Of[d];D&&(g.defines[D]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(_),v.render(E,b),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),l.dispose(),g.dispose()}}const Ba=new As,Ai=new Xn(1,1),ka=new Ma,Ga=new Es,Ha=new Aa,Gr=[],Hr=[],zr=new Float32Array(16),Vr=new Float32Array(9),Wr=new Float32Array(4);function mn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const s=n*t;let r=Gr[s];if(r===void 0&&(r=new Float32Array(s),Gr[s]=r),n!==0){i.toArray(r,0);for(let a=1,l=0;a!==n;++a)l+=t,e[a].toArray(r,l)}return r}function ft(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ut(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Jn(e,n){let t=Hr[n];t===void 0&&(t=new Int32Array(n),Hr[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Bf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function kf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2fv(this.addr,n),ut(t,n)}}function Gf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(ft(t,n))return;e.uniform3fv(this.addr,n),ut(t,n)}}function Hf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4fv(this.addr,n),ut(t,n)}}function zf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;Wr.set(i),e.uniformMatrix2fv(this.addr,!1,Wr),ut(t,i)}}function Vf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;Vr.set(i),e.uniformMatrix3fv(this.addr,!1,Vr),ut(t,i)}}function Wf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;zr.set(i),e.uniformMatrix4fv(this.addr,!1,zr),ut(t,i)}}function Xf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Yf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2iv(this.addr,n),ut(t,n)}}function Kf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ft(t,n))return;e.uniform3iv(this.addr,n),ut(t,n)}}function qf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4iv(this.addr,n),ut(t,n)}}function Zf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function jf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2uiv(this.addr,n),ut(t,n)}}function $f(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ft(t,n))return;e.uniform3uiv(this.addr,n),ut(t,n)}}function Qf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4uiv(this.addr,n),ut(t,n)}}function Jf(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(Ai.compareFunction=t.isReversedDepthBuffer()?yi:Pi,r=Ai):r=Ba,t.setTexture2D(n||r,s)}function eu(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(n||Ga,s)}function tu(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(n||Ha,s)}function nu(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(n||ka,s)}function iu(e){switch(e){case 5126:return Bf;case 35664:return kf;case 35665:return Gf;case 35666:return Hf;case 35674:return zf;case 35675:return Vf;case 35676:return Wf;case 5124:case 35670:return Xf;case 35667:case 35671:return Yf;case 35668:case 35672:return Kf;case 35669:case 35673:return qf;case 5125:return Zf;case 36294:return jf;case 36295:return $f;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return eu;case 35680:case 36300:case 36308:case 36293:return tu;case 36289:case 36303:case 36311:case 36292:return nu}}function ru(e,n){e.uniform1fv(this.addr,n)}function au(e,n){const t=mn(n,this.size,2);e.uniform2fv(this.addr,t)}function ou(e,n){const t=mn(n,this.size,3);e.uniform3fv(this.addr,t)}function su(e,n){const t=mn(n,this.size,4);e.uniform4fv(this.addr,t)}function lu(e,n){const t=mn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function cu(e,n){const t=mn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function fu(e,n){const t=mn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function uu(e,n){e.uniform1iv(this.addr,n)}function du(e,n){e.uniform2iv(this.addr,n)}function hu(e,n){e.uniform3iv(this.addr,n)}function pu(e,n){e.uniform4iv(this.addr,n)}function mu(e,n){e.uniform1uiv(this.addr,n)}function _u(e,n){e.uniform2uiv(this.addr,n)}function gu(e,n){e.uniform3uiv(this.addr,n)}function vu(e,n){e.uniform4uiv(this.addr,n)}function Su(e,n,t){const i=this.cache,s=n.length,r=Jn(t,s);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));let a;this.type===e.SAMPLER_2D_SHADOW?a=Ai:a=Ba;for(let l=0;l!==s;++l)t.setTexture2D(n[l]||a,r[l])}function Eu(e,n,t){const i=this.cache,s=n.length,r=Jn(t,s);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==s;++a)t.setTexture3D(n[a]||Ga,r[a])}function xu(e,n,t){const i=this.cache,s=n.length,r=Jn(t,s);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==s;++a)t.setTextureCube(n[a]||Ha,r[a])}function bu(e,n,t){const i=this.cache,s=n.length,r=Jn(t,s);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(n[a]||ka,r[a])}function Mu(e){switch(e){case 5126:return ru;case 35664:return au;case 35665:return ou;case 35666:return su;case 35674:return lu;case 35675:return cu;case 35676:return fu;case 5124:case 35670:return uu;case 35667:case 35671:return du;case 35668:case 35672:return hu;case 35669:case 35673:return pu;case 5125:return mu;case 36294:return _u;case 36295:return gu;case 36296:return vu;case 35678:case 36198:case 36298:case 36306:case 35682:return Su;case 35679:case 36299:case 36307:return Eu;case 35680:case 36300:case 36308:case 36293:return xu;case 36289:case 36303:case 36311:case 36292:return bu}}class Tu{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=iu(t.type)}}class Au{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mu(t.type)}}class wu{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const l=s[r];l.setValue(n,t[l.id],i)}}}const pi=/(\w+)(\])?(\[|\.)?/g;function Xr(e,n){e.seq.push(n),e.map[n.id]=n}function Ru(e,n,t){const i=e.name,s=i.length;for(pi.lastIndex=0;;){const r=pi.exec(i),a=pi.lastIndex;let l=r[1];const g=r[2]==="]",E=r[3];if(g&&(l=l|0),E===void 0||E==="["&&a+2===s){Xr(t,E===void 0?new Tu(l,e,n):new Au(l,e,n));break}else{let x=t.map[l];x===void 0&&(x=new wu(l),Xr(t,x)),t=x}}}class Hn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=n.getActiveUniform(t,a),g=n.getUniformLocation(t,l.name);Ru(l,g,this)}const s=[],r=[];for(const a of this.seq)a.type===n.SAMPLER_2D_SHADOW||a.type===n.SAMPLER_CUBE_SHADOW||a.type===n.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(n,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(n,i,s)}setOptional(n,t,i){const s=t[i];s!==void 0&&this.setValue(n,i,s)}static upload(n,t,i,s){for(let r=0,a=t.length;r!==a;++r){const l=t[r],g=i[l.id];g.needsUpdate!==!1&&l.setValue(n,g.value,s)}}static seqWithValue(n,t){const i=[];for(let s=0,r=n.length;s!==r;++s){const a=n[s];a.id in t&&i.push(a)}return i}}function Yr(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Cu=37297;let yu=0;function Pu(e,n){const t=e.split(`
`),i=[],s=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let a=s;a<r;a++){const l=a+1;i.push(`${l===n?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}const Kr=new Ke;function Du(e){lt._getMatrix(Kr,lt.workingColorSpace,e);const n=`mat3( ${Kr.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(e)){case Ua:return[n,"LinearTransferOETF"];case nt:return[n,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function qr(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Pu(e.getShaderSource(n),l)}else return r}function Lu(e,n){const t=Du(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Uu={[La]:"Linear",[Da]:"Reinhard",[Pa]:"Cineon",[ya]:"ACESFilmic",[Ca]:"AgX",[Ra]:"Neutral",[wa]:"Custom"};function Iu(e,n){const t=Uu[n];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Un=new ke;function Nu(){lt.getLuminanceCoefficients(Un);const e=Un.x.toFixed(4),n=Un.y.toFixed(4),t=Un.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ou(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(En).join(`
`)}function Fu(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Bu(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=e.getActiveAttrib(n,s),a=r.name;let l=1;r.type===e.FLOAT_MAT2&&(l=2),r.type===e.FLOAT_MAT3&&(l=3),r.type===e.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:e.getAttribLocation(n,a),locationSize:l}}return t}function En(e){return e!==""}function Zr(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function jr(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const ku=/^[ \t]*#include +<([\w\d./]+)>/gm;function wi(e){return e.replace(ku,Hu)}const Gu=new Map;function Hu(e,n){let t=We[n];if(t===void 0){const i=Gu.get(n);if(i!==void 0)t=We[i],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return wi(t)}const zu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $r(e){return e.replace(zu,Vu)}function Vu(e,n,t,i){let s="";for(let r=parseInt(n);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qr(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}const Wu={[kn]:"SHADOWMAP_TYPE_PCF",[Sn]:"SHADOWMAP_TYPE_VSM"};function Xu(e){return Wu[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Yu={[wn]:"ENVMAP_TYPE_CUBE",[hn]:"ENVMAP_TYPE_CUBE",[$n]:"ENVMAP_TYPE_CUBE_UV"};function Ku(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Yu[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const qu={[hn]:"ENVMAP_MODE_REFRACTION"};function Zu(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":qu[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ju={[Ts]:"ENVMAP_BLENDING_MULTIPLY",[Ms]:"ENVMAP_BLENDING_MIX",[bs]:"ENVMAP_BLENDING_ADD"};function $u(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":ju[e.combine]||"ENVMAP_BLENDING_NONE"}function Qu(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ju(e,n,t,i){const s=e.getContext(),r=t.defines;let a=t.vertexShader,l=t.fragmentShader;const g=Xu(t),E=Ku(t),b=Zu(t),x=$u(t),d=Qu(t),f=Ou(t),S=Fu(r),_=s.createProgram();let c,o,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(En).join(`
`),c.length>0&&(c+=`
`),o=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(En).join(`
`),o.length>0&&(o+=`
`)):(c=[Qr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+b:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(En).join(`
`),o=[Qr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+E:"",t.envMap?"#define "+b:"",t.envMap?"#define "+x:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pt?"#define TONE_MAPPING":"",t.toneMapping!==Pt?We.tonemapping_pars_fragment:"",t.toneMapping!==Pt?Iu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Lu("linearToOutputTexel",t.outputColorSpace),Nu(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(En).join(`
`)),a=wi(a),a=Zr(a,t),a=jr(a,t),l=wi(l),l=Zr(l,t),l=jr(l,t),a=$r(a),l=$r(l),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,c=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,o=["#define varying in",t.glslVersion===Lr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const T=v+c+a,w=v+o+l,P=Yr(s,s.VERTEX_SHADER,T),D=Yr(s,s.FRAGMENT_SHADER,w);s.attachShader(_,P),s.attachShader(_,D),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(B){if(e.debug.checkShaderErrors){const y=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(P)||"",u=s.getShaderInfoLog(D)||"",O=y.trim(),V=U.trim(),F=u.trim();let oe=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(oe=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,_,P,D);else{const ue=qr(s,P,"vertex"),W=qr(s,D,"fragment");it("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+O+`
`+ue+`
`+W)}else O!==""?et("WebGLProgram: Program Info Log:",O):(V===""||F==="")&&(Z=!1);Z&&(B.diagnostics={runnable:oe,programLog:O,vertexShader:{log:V,prefix:c},fragmentShader:{log:F,prefix:o}})}s.deleteShader(P),s.deleteShader(D),M=new Hn(s,_),A=Bu(s,_)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=s.getProgramParameter(_,Cu)),X},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yu++,this.cacheKey=n,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=D,this}let ed=0;class td{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(n);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new nd(n),t.set(n,i)),i}}class nd{constructor(n){this.id=ed++,this.code=n,this.usedTimes=0}}function id(e,n,t,i,s,r){const a=new Ss,l=new td,g=new Set,E=[],b=new Map,x=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return g.add(M),M===0?"uv":`uv${M}`}function _(M,A,X,B,y){const U=B.fog,u=y.geometry,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,V=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,F=n.get(M.envMap||O,V),oe=F&&F.mapping===$n?F.image.height:null,Z=f[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&et("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ue=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,W=ue!==void 0?ue.length:0;let G=0;u.morphAttributes.position!==void 0&&(G=1),u.morphAttributes.normal!==void 0&&(G=2),u.morphAttributes.color!==void 0&&(G=3);let ge,pe,ce,te;if(Z){const Ze=Ct[Z];ge=Ze.vertexShader,pe=Ze.fragmentShader}else ge=M.vertexShader,pe=M.fragmentShader,l.update(M),ce=l.getVertexShaderID(M),te=l.getFragmentShaderID(M);const fe=e.getRenderTarget(),se=e.state.buffers.depth.getReversed(),Me=y.isInstancedMesh===!0,Re=y.isBatchedMesh===!0,Ce=!!M.map,qe=!!M.matcap,Ge=!!F,p=!!M.aoMap,J=!!M.lightMap,K=!!M.bumpMap,N=!!M.normalMap,h=!!M.displacementMap,H=!!M.emissiveMap,ne=!!M.metalnessMap,re=!!M.roughnessMap,k=M.anisotropy>0,R=M.clearcoat>0,m=M.dispersion>0,I=M.iridescence>0,q=M.sheen>0,ie=M.transmission>0,j=k&&!!M.anisotropyMap,Ee=R&&!!M.clearcoatMap,_e=R&&!!M.clearcoatNormalMap,Pe=R&&!!M.clearcoatRoughnessMap,Be=I&&!!M.iridescenceMap,le=I&&!!M.iridescenceThicknessMap,he=q&&!!M.sheenColorMap,De=q&&!!M.sheenRoughnessMap,we=!!M.specularMap,Te=!!M.specularColorMap,Ve=!!M.specularIntensityMap,z=ie&&!!M.transmissionMap,ve=ie&&!!M.thicknessMap,me=!!M.gradientMap,Ae=!!M.alphaMap,de=M.alphaTest>0,ae=!!M.alphaHash,Ue=!!M.extensions;let He=Pt;M.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(He=e.toneMapping);const tt={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:ge,fragmentShader:pe,defines:M.defines,customVertexShaderID:ce,customFragmentShaderID:te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Re,batchingColor:Re&&y._colorsTexture!==null,instancing:Me,instancingColor:Me&&y.instanceColor!==null,instancingMorph:Me&&y.morphTexture!==null,outputColorSpace:fe===null?e.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:jn,alphaToCoverage:!!M.alphaToCoverage,map:Ce,matcap:qe,envMap:Ge,envMapMode:Ge&&F.mapping,envMapCubeUVHeight:oe,aoMap:p,lightMap:J,bumpMap:K,normalMap:N,displacementMap:h,emissiveMap:H,normalMapObjectSpace:N&&M.normalMapType===ms,normalMapTangentSpace:N&&M.normalMapType===ps,metalnessMap:ne,roughnessMap:re,anisotropy:k,anisotropyMap:j,clearcoat:R,clearcoatMap:Ee,clearcoatNormalMap:_e,clearcoatRoughnessMap:Pe,dispersion:m,iridescence:I,iridescenceMap:Be,iridescenceThicknessMap:le,sheen:q,sheenColorMap:he,sheenRoughnessMap:De,specularMap:we,specularColorMap:Te,specularIntensityMap:Ve,transmission:ie,transmissionMap:z,thicknessMap:ve,gradientMap:me,opaque:M.transparent===!1&&M.blending===Gn&&M.alphaToCoverage===!1,alphaMap:Ae,alphaTest:de,alphaHash:ae,combine:M.combine,mapUv:Ce&&S(M.map.channel),aoMapUv:p&&S(M.aoMap.channel),lightMapUv:J&&S(M.lightMap.channel),bumpMapUv:K&&S(M.bumpMap.channel),normalMapUv:N&&S(M.normalMap.channel),displacementMapUv:h&&S(M.displacementMap.channel),emissiveMapUv:H&&S(M.emissiveMap.channel),metalnessMapUv:ne&&S(M.metalnessMap.channel),roughnessMapUv:re&&S(M.roughnessMap.channel),anisotropyMapUv:j&&S(M.anisotropyMap.channel),clearcoatMapUv:Ee&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:_e&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&S(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:he&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&S(M.sheenRoughnessMap.channel),specularMapUv:we&&S(M.specularMap.channel),specularColorMapUv:Te&&S(M.specularColorMap.channel),specularIntensityMapUv:Ve&&S(M.specularIntensityMap.channel),transmissionMapUv:z&&S(M.transmissionMap.channel),thicknessMapUv:ve&&S(M.thicknessMap.channel),alphaMapUv:Ae&&S(M.alphaMap.channel),vertexTangents:!!u.attributes.tangent&&(N||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!u.attributes.uv&&(Ce||Ae),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||u.attributes.normal===void 0&&N===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:se,skinning:y.isSkinnedMesh===!0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:G,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&X.length>0,shadowMapType:e.shadowMap.type,toneMapping:He,decodeVideoTexture:Ce&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===nt,decodeVideoTextureEmissive:H&&M.emissiveMap.isVideoTexture===!0&&lt.getTransfer(M.emissiveMap.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===It,flipSided:M.side===Et,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ue&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&M.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return tt.vertexUv1s=g.has(1),tt.vertexUv2s=g.has(2),tt.vertexUv3s=g.has(3),g.clear(),tt}function c(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const X in M.defines)A.push(X),A.push(M.defines[X]);return M.isRawShaderMaterial===!1&&(o(A,M),v(A,M),A.push(e.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function o(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function v(M,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),M.push(a.mask)}function T(M){const A=f[M.type];let X;if(A){const B=Ct[A];X=hs.clone(B.uniforms)}else X=M.uniforms;return X}function w(M,A){let X=b.get(A);return X!==void 0?++X.usedTimes:(X=new Ju(e,A,M,s),E.push(X),b.set(A,X)),X}function P(M){if(--M.usedTimes===0){const A=E.indexOf(M);E[A]=E[E.length-1],E.pop(),b.delete(M.cacheKey),M.destroy()}}function D(M){l.remove(M)}function L(){l.dispose()}return{getParameters:_,getProgramCacheKey:c,getUniforms:T,acquireProgram:w,releaseProgram:P,releaseShaderCache:D,programs:E,dispose:L}}function rd(){let e=new WeakMap;function n(a){return e.has(a)}function t(a){let l=e.get(a);return l===void 0&&(l={},e.set(a,l)),l}function i(a){e.delete(a)}function s(a,l,g){e.get(a)[l]=g}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:s,dispose:r}}function ad(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function Jr(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function ea(){const e=[];let n=0;const t=[],i=[],s=[];function r(){n=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function l(d,f,S,_,c,o){let v=e[n];return v===void 0?(v={id:d.id,object:d,geometry:f,material:S,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:c,group:o},e[n]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=S,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=c,v.group=o),n++,v}function g(d,f,S,_,c,o){const v=l(d,f,S,_,c,o);S.transmission>0?i.push(v):S.transparent===!0?s.push(v):t.push(v)}function E(d,f,S,_,c,o){const v=l(d,f,S,_,c,o);S.transmission>0?i.unshift(v):S.transparent===!0?s.unshift(v):t.unshift(v)}function b(d,f){t.length>1&&t.sort(d||ad),i.length>1&&i.sort(f||Jr),s.length>1&&s.sort(f||Jr)}function x(){for(let d=n,f=e.length;d<f;d++){const S=e[d];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:g,unshift:E,finish:x,sort:b}}function od(){let e=new WeakMap;function n(i,s){const r=e.get(i);let a;return r===void 0?(a=new ea,e.set(i,[a])):s>=r.length?(a=new ea,r.push(a)):a=r[s],a}function t(){e=new WeakMap}return{get:n,dispose:t}}function sd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new ke,color:new at};break;case"SpotLight":t={position:new ke,direction:new ke,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ke,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ke,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new ke,halfWidth:new ke,halfHeight:new ke};break}return e[n.id]=t,t}}}function ld(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let cd=0;function fd(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function ud(e){const n=new sd,t=ld(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let E=0;E<9;E++)i.probe.push(new ke);const s=new ke,r=new un,a=new un;function l(E){let b=0,x=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,S=0,_=0,c=0,o=0,v=0,T=0,w=0,P=0,D=0,L=0;E.sort(fd);for(let A=0,X=E.length;A<X;A++){const B=E[A],y=B.color,U=B.intensity,u=B.distance;let O=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===An?O=B.shadow.map.texture:O=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)b+=y.r*U,x+=y.g*U,d+=y.b*U;else if(B.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(B.sh.coefficients[V],U);L++}else if(B.isDirectionalLight){const V=n.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const F=B.shadow,oe=t.get(B);oe.shadowIntensity=F.intensity,oe.shadowBias=F.bias,oe.shadowNormalBias=F.normalBias,oe.shadowRadius=F.radius,oe.shadowMapSize=F.mapSize,i.directionalShadow[f]=oe,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=B.shadow.matrix,v++}i.directional[f]=V,f++}else if(B.isSpotLight){const V=n.get(B);V.position.setFromMatrixPosition(B.matrixWorld),V.color.copy(y).multiplyScalar(U),V.distance=u,V.coneCos=Math.cos(B.angle),V.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),V.decay=B.decay,i.spot[_]=V;const F=B.shadow;if(B.map&&(i.spotLightMap[P]=B.map,P++,F.updateMatrices(B),B.castShadow&&D++),i.spotLightMatrix[_]=F.matrix,B.castShadow){const oe=t.get(B);oe.shadowIntensity=F.intensity,oe.shadowBias=F.bias,oe.shadowNormalBias=F.normalBias,oe.shadowRadius=F.radius,oe.shadowMapSize=F.mapSize,i.spotShadow[_]=oe,i.spotShadowMap[_]=O,w++}_++}else if(B.isRectAreaLight){const V=n.get(B);V.color.copy(y).multiplyScalar(U),V.halfWidth.set(B.width*.5,0,0),V.halfHeight.set(0,B.height*.5,0),i.rectArea[c]=V,c++}else if(B.isPointLight){const V=n.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity),V.distance=B.distance,V.decay=B.decay,B.castShadow){const F=B.shadow,oe=t.get(B);oe.shadowIntensity=F.intensity,oe.shadowBias=F.bias,oe.shadowNormalBias=F.normalBias,oe.shadowRadius=F.radius,oe.shadowMapSize=F.mapSize,oe.shadowCameraNear=F.camera.near,oe.shadowCameraFar=F.camera.far,i.pointShadow[S]=oe,i.pointShadowMap[S]=O,i.pointShadowMatrix[S]=B.shadow.matrix,T++}i.point[S]=V,S++}else if(B.isHemisphereLight){const V=n.get(B);V.skyColor.copy(B.color).multiplyScalar(U),V.groundColor.copy(B.groundColor).multiplyScalar(U),i.hemi[o]=V,o++}}c>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=b,i.ambient[1]=x,i.ambient[2]=d;const M=i.hash;(M.directionalLength!==f||M.pointLength!==S||M.spotLength!==_||M.rectAreaLength!==c||M.hemiLength!==o||M.numDirectionalShadows!==v||M.numPointShadows!==T||M.numSpotShadows!==w||M.numSpotMaps!==P||M.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=c,i.point.length=S,i.hemi.length=o,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=w+P-D,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,M.directionalLength=f,M.pointLength=S,M.spotLength=_,M.rectAreaLength=c,M.hemiLength=o,M.numDirectionalShadows=v,M.numPointShadows=T,M.numSpotShadows=w,M.numSpotMaps=P,M.numLightProbes=L,i.version=cd++)}function g(E,b){let x=0,d=0,f=0,S=0,_=0;const c=b.matrixWorldInverse;for(let o=0,v=E.length;o<v;o++){const T=E[o];if(T.isDirectionalLight){const w=i.directional[x];w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(c),x++}else if(T.isSpotLight){const w=i.spot[f];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(c),w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(c),f++}else if(T.isRectAreaLight){const w=i.rectArea[S];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(c),a.identity(),r.copy(T.matrixWorld),r.premultiply(c),a.extractRotation(r),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),S++}else if(T.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(c),d++}else if(T.isHemisphereLight){const w=i.hemi[_];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(c),_++}}}return{setup:l,setupView:g,state:i}}function ta(e){const n=new ud(e),t=[],i=[];function s(b){E.camera=b,t.length=0,i.length=0}function r(b){t.push(b)}function a(b){i.push(b)}function l(){n.setup(t)}function g(b){n.setupView(t,b)}const E={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:s,state:E,setupLights:l,setupLightsView:g,pushLight:r,pushShadow:a}}function dd(e){let n=new WeakMap;function t(s,r=0){const a=n.get(s);let l;return a===void 0?(l=new ta(e),n.set(s,[l])):r>=a.length?(l=new ta(e),a.push(l)):l=a[r],l}function i(){n=new WeakMap}return{get:t,dispose:i}}const hd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pd=`uniform sampler2D shadow_pass;
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
}`,md=[new ke(1,0,0),new ke(-1,0,0),new ke(0,1,0),new ke(0,-1,0),new ke(0,0,1),new ke(0,0,-1)],_d=[new ke(0,-1,0),new ke(0,-1,0),new ke(0,0,1),new ke(0,0,-1),new ke(0,-1,0),new ke(0,-1,0)],na=new un,vn=new ke,mi=new ke;function gd(e,n,t){let i=new ha;const s=new rt,r=new rt,a=new gt,l=new Yo,g=new Ko,E={},b=t.maxTextureSize,x={[Mn]:Et,[Et]:Mn,[It]:It},d=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:hd,fragmentShader:pd}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const S=new pn;S.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xt(S,d),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kn;let o=this.type;this.render=function(D,L,M){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||D.length===0)return;this.type===qo&&(et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=kn);const A=e.getRenderTarget(),X=e.getActiveCubeFace(),B=e.getActiveMipmapLevel(),y=e.state;y.setBlending(Ft),y.buffers.depth.getReversed()===!0?y.buffers.color.setClear(0,0,0,0):y.buffers.color.setClear(1,1,1,1),y.buffers.depth.setTest(!0),y.setScissorTest(!1);const U=o!==this.type;U&&L.traverse(function(u){u.material&&(Array.isArray(u.material)?u.material.forEach(O=>O.needsUpdate=!0):u.material.needsUpdate=!0)});for(let u=0,O=D.length;u<O;u++){const V=D[u],F=V.shadow;if(F===void 0){et("WebGLShadowMap:",V,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const oe=F.getFrameExtents();s.multiply(oe),r.copy(F.mapSize),(s.x>b||s.y>b)&&(s.x>b&&(r.x=Math.floor(b/oe.x),s.x=r.x*oe.x,F.mapSize.x=r.x),s.y>b&&(r.y=Math.floor(b/oe.y),s.y=r.y*oe.y,F.mapSize.y=r.y));const Z=e.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Z,F.map===null||U===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Sn){if(V.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Dt(s.x,s.y,{format:An,type:Yt,minFilter:St,magFilter:St,generateMipmaps:!1}),F.map.texture.name=V.name+".shadowMap",F.map.depthTexture=new Xn(s.x,s.y,zt),F.map.depthTexture.name=V.name+".shadowMapDepth",F.map.depthTexture.format=dn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ot,F.map.depthTexture.magFilter=Ot}else V.isPointLight?(F.map=new Fa(s.x),F.map.depthTexture=new Zo(s.x,Jt)):(F.map=new Dt(s.x,s.y),F.map.depthTexture=new Xn(s.x,s.y,Jt)),F.map.depthTexture.name=V.name+".shadowMap",F.map.depthTexture.format=dn,this.type===kn?(F.map.depthTexture.compareFunction=Z?yi:Pi,F.map.depthTexture.minFilter=St,F.map.depthTexture.magFilter=St):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ot,F.map.depthTexture.magFilter=Ot);F.camera.updateProjectionMatrix()}const ue=F.map.isWebGLCubeRenderTarget?6:1;for(let W=0;W<ue;W++){if(F.map.isWebGLCubeRenderTarget)e.setRenderTarget(F.map,W),e.clear();else{W===0&&(e.setRenderTarget(F.map),e.clear());const G=F.getViewport(W);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),y.viewport(a)}if(V.isPointLight){const G=F.camera,ge=F.matrix,pe=V.distance||G.far;pe!==G.far&&(G.far=pe,G.updateProjectionMatrix()),vn.setFromMatrixPosition(V.matrixWorld),G.position.copy(vn),mi.copy(G.position),mi.add(md[W]),G.up.copy(_d[W]),G.lookAt(mi),G.updateMatrixWorld(),ge.makeTranslation(-vn.x,-vn.y,-vn.z),na.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),F._frustum.setFromProjectionMatrix(na,G.coordinateSystem,G.reversedDepth)}else F.updateMatrices(V);i=F.getFrustum(),w(L,M,F.camera,V,this.type)}F.isPointLightShadow!==!0&&this.type===Sn&&v(F,M),F.needsUpdate=!1}o=this.type,c.needsUpdate=!1,e.setRenderTarget(A,X,B)};function v(D,L){const M=n.update(_);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Dt(s.x,s.y,{format:An,type:Yt})),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,e.setRenderTarget(D.mapPass),e.clear(),e.renderBufferDirect(L,null,M,d,_,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,e.setRenderTarget(D.map),e.clear(),e.renderBufferDirect(L,null,M,f,_,null)}function T(D,L,M,A){let X=null;const B=M.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(B!==void 0)X=B;else if(X=M.isPointLight===!0?g:l,e.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const y=X.uuid,U=L.uuid;let u=E[y];u===void 0&&(u={},E[y]=u);let O=u[U];O===void 0&&(O=X.clone(),u[U]=O,L.addEventListener("dispose",P)),X=O}if(X.visible=L.visible,X.wireframe=L.wireframe,A===Sn?X.side=L.shadowSide!==null?L.shadowSide:L.side:X.side=L.shadowSide!==null?L.shadowSide:x[L.side],X.alphaMap=L.alphaMap,X.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,X.map=L.map,X.clipShadows=L.clipShadows,X.clippingPlanes=L.clippingPlanes,X.clipIntersection=L.clipIntersection,X.displacementMap=L.displacementMap,X.displacementScale=L.displacementScale,X.displacementBias=L.displacementBias,X.wireframeLinewidth=L.wireframeLinewidth,X.linewidth=L.linewidth,M.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const y=e.properties.get(X);y.light=M}return X}function w(D,L,M,A,X){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&X===Sn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,D.matrixWorld);const U=n.update(D),u=D.material;if(Array.isArray(u)){const O=U.groups;for(let V=0,F=O.length;V<F;V++){const oe=O[V],Z=u[oe.materialIndex];if(Z&&Z.visible){const ue=T(D,Z,A,X);D.onBeforeShadow(e,D,L,M,U,ue,oe),e.renderBufferDirect(M,null,U,ue,D,oe),D.onAfterShadow(e,D,L,M,U,ue,oe)}}}else if(u.visible){const O=T(D,u,A,X);D.onBeforeShadow(e,D,L,M,U,O,null),e.renderBufferDirect(M,null,U,O,D,null),D.onAfterShadow(e,D,L,M,U,O,null)}}const y=D.children;for(let U=0,u=y.length;U<u;U++)w(y[U],L,M,A,X)}function P(D){D.target.removeEventListener("dispose",P);for(const M in E){const A=E[M],X=D.target.uuid;X in A&&(A[X].dispose(),delete A[X])}}}function vd(e,n){function t(){let z=!1;const ve=new gt;let me=null;const Ae=new gt(0,0,0,0);return{setMask:function(de){me!==de&&!z&&(e.colorMask(de,de,de,de),me=de)},setLocked:function(de){z=de},setClear:function(de,ae,Ue,He,tt){tt===!0&&(de*=He,ae*=He,Ue*=He),ve.set(de,ae,Ue,He),Ae.equals(ve)===!1&&(e.clearColor(de,ae,Ue,He),Ae.copy(ve))},reset:function(){z=!1,me=null,Ae.set(-1,0,0,0)}}}function i(){let z=!1,ve=!1,me=null,Ae=null,de=null;return{setReversed:function(ae){if(ve!==ae){const Ue=n.get("EXT_clip_control");ae?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ve=ae;const He=de;de=null,this.setClear(He)}},getReversed:function(){return ve},setTest:function(ae){ae?fe(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(ae){me!==ae&&!z&&(e.depthMask(ae),me=ae)},setFunc:function(ae){if(ve&&(ae=ws[ae]),Ae!==ae){switch(ae){case cs:e.depthFunc(e.NEVER);break;case ls:e.depthFunc(e.ALWAYS);break;case ss:e.depthFunc(e.LESS);break;case qi:e.depthFunc(e.LEQUAL);break;case os:e.depthFunc(e.EQUAL);break;case as:e.depthFunc(e.GEQUAL);break;case rs:e.depthFunc(e.GREATER);break;case is:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Ae=ae}},setLocked:function(ae){z=ae},setClear:function(ae){de!==ae&&(de=ae,ve&&(ae=1-ae),e.clearDepth(ae))},reset:function(){z=!1,me=null,Ae=null,de=null,ve=!1}}}function s(){let z=!1,ve=null,me=null,Ae=null,de=null,ae=null,Ue=null,He=null,tt=null;return{setTest:function(Ze){z||(Ze?fe(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(Ze){ve!==Ze&&!z&&(e.stencilMask(Ze),ve=Ze)},setFunc:function(Ze,Lt,Ut){(me!==Ze||Ae!==Lt||de!==Ut)&&(e.stencilFunc(Ze,Lt,Ut),me=Ze,Ae=Lt,de=Ut)},setOp:function(Ze,Lt,Ut){(ae!==Ze||Ue!==Lt||He!==Ut)&&(e.stencilOp(Ze,Lt,Ut),ae=Ze,Ue=Lt,He=Ut)},setLocked:function(Ze){z=Ze},setClear:function(Ze){tt!==Ze&&(e.clearStencil(Ze),tt=Ze)},reset:function(){z=!1,ve=null,me=null,Ae=null,de=null,ae=null,Ue=null,He=null,tt=null}}}const r=new t,a=new i,l=new s,g=new WeakMap,E=new WeakMap;let b={},x={},d=new WeakMap,f=[],S=null,_=!1,c=null,o=null,v=null,T=null,w=null,P=null,D=null,L=new at(0,0,0),M=0,A=!1,X=null,B=null,y=null,U=null,u=null;const O=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,F=0;const oe=e.getParameter(e.VERSION);oe.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(oe)[1]),V=F>=1):oe.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),V=F>=2);let Z=null,ue={};const W=e.getParameter(e.SCISSOR_BOX),G=e.getParameter(e.VIEWPORT),ge=new gt().fromArray(W),pe=new gt().fromArray(G);function ce(z,ve,me,Ae){const de=new Uint8Array(4),ae=e.createTexture();e.bindTexture(z,ae),e.texParameteri(z,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(z,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ue=0;Ue<me;Ue++)z===e.TEXTURE_3D||z===e.TEXTURE_2D_ARRAY?e.texImage3D(ve,0,e.RGBA,1,1,Ae,0,e.RGBA,e.UNSIGNED_BYTE,de):e.texImage2D(ve+Ue,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,de);return ae}const te={};te[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),te[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),te[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),fe(e.DEPTH_TEST),a.setFunc(qi),K(!1),N(Rr),fe(e.CULL_FACE),p(Ft);function fe(z){b[z]!==!0&&(e.enable(z),b[z]=!0)}function se(z){b[z]!==!1&&(e.disable(z),b[z]=!1)}function Me(z,ve){return x[z]!==ve?(e.bindFramebuffer(z,ve),x[z]=ve,z===e.DRAW_FRAMEBUFFER&&(x[e.FRAMEBUFFER]=ve),z===e.FRAMEBUFFER&&(x[e.DRAW_FRAMEBUFFER]=ve),!0):!1}function Re(z,ve){let me=f,Ae=!1;if(z){me=d.get(ve),me===void 0&&(me=[],d.set(ve,me));const de=z.textures;if(me.length!==de.length||me[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,Ue=de.length;ae<Ue;ae++)me[ae]=e.COLOR_ATTACHMENT0+ae;me.length=de.length,Ae=!0}}else me[0]!==e.BACK&&(me[0]=e.BACK,Ae=!0);Ae&&e.drawBuffers(me)}function Ce(z){return S!==z?(e.useProgram(z),S=z,!0):!1}const qe={[_n]:e.FUNC_ADD,[xo]:e.FUNC_SUBTRACT,[Eo]:e.FUNC_REVERSE_SUBTRACT};qe[Rs]=e.MIN,qe[Cs]=e.MAX;const Ge={[Oo]:e.ZERO,[No]:e.ONE,[Io]:e.SRC_COLOR,[Uo]:e.SRC_ALPHA,[Lo]:e.SRC_ALPHA_SATURATE,[Do]:e.DST_COLOR,[Po]:e.DST_ALPHA,[yo]:e.ONE_MINUS_SRC_COLOR,[Co]:e.ONE_MINUS_SRC_ALPHA,[Ro]:e.ONE_MINUS_DST_COLOR,[wo]:e.ONE_MINUS_DST_ALPHA,[Ao]:e.CONSTANT_COLOR,[To]:e.ONE_MINUS_CONSTANT_COLOR,[Mo]:e.CONSTANT_ALPHA,[bo]:e.ONE_MINUS_CONSTANT_ALPHA};function p(z,ve,me,Ae,de,ae,Ue,He,tt,Ze){if(z===Ft){_===!0&&(se(e.BLEND),_=!1);return}if(_===!1&&(fe(e.BLEND),_=!0),z!==ds){if(z!==c||Ze!==A){if((o!==_n||w!==_n)&&(e.blendEquation(e.FUNC_ADD),o=_n,w=_n),Ze)switch(z){case Gn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Pr:e.blendFunc(e.ONE,e.ONE);break;case yr:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Cr:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:it("WebGLState: Invalid blending: ",z);break}else switch(z){case Gn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Pr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case yr:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cr:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",z);break}v=null,T=null,P=null,D=null,L.set(0,0,0),M=0,c=z,A=Ze}return}de=de||ve,ae=ae||me,Ue=Ue||Ae,(ve!==o||de!==w)&&(e.blendEquationSeparate(qe[ve],qe[de]),o=ve,w=de),(me!==v||Ae!==T||ae!==P||Ue!==D)&&(e.blendFuncSeparate(Ge[me],Ge[Ae],Ge[ae],Ge[Ue]),v=me,T=Ae,P=ae,D=Ue),(He.equals(L)===!1||tt!==M)&&(e.blendColor(He.r,He.g,He.b,tt),L.copy(He),M=tt),c=z,A=!1}function J(z,ve){z.side===It?se(e.CULL_FACE):fe(e.CULL_FACE);let me=z.side===Et;ve&&(me=!me),K(me),z.blending===Gn&&z.transparent===!1?p(Ft):p(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const Ae=z.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),H(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function K(z){X!==z&&(z?e.frontFace(e.CW):e.frontFace(e.CCW),X=z)}function N(z){z!==fs?(fe(e.CULL_FACE),z!==B&&(z===Rr?e.cullFace(e.BACK):z===us?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):se(e.CULL_FACE),B=z}function h(z){z!==y&&(V&&e.lineWidth(z),y=z)}function H(z,ve,me){z?(fe(e.POLYGON_OFFSET_FILL),(U!==ve||u!==me)&&(U=ve,u=me,a.getReversed()&&(ve=-ve),e.polygonOffset(ve,me))):se(e.POLYGON_OFFSET_FILL)}function ne(z){z?fe(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function re(z){z===void 0&&(z=e.TEXTURE0+O-1),Z!==z&&(e.activeTexture(z),Z=z)}function k(z,ve,me){me===void 0&&(Z===null?me=e.TEXTURE0+O-1:me=Z);let Ae=ue[me];Ae===void 0&&(Ae={type:void 0,texture:void 0},ue[me]=Ae),(Ae.type!==z||Ae.texture!==ve)&&(Z!==me&&(e.activeTexture(me),Z=me),e.bindTexture(z,ve||te[z]),Ae.type=z,Ae.texture=ve)}function R(){const z=ue[Z];z!==void 0&&z.type!==void 0&&(e.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function m(){try{e.compressedTexImage2D(...arguments)}catch(z){it("WebGLState:",z)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(z){it("WebGLState:",z)}}function q(){try{e.texSubImage2D(...arguments)}catch(z){it("WebGLState:",z)}}function ie(){try{e.texSubImage3D(...arguments)}catch(z){it("WebGLState:",z)}}function j(){try{e.compressedTexSubImage2D(...arguments)}catch(z){it("WebGLState:",z)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(z){it("WebGLState:",z)}}function _e(){try{e.texStorage2D(...arguments)}catch(z){it("WebGLState:",z)}}function Pe(){try{e.texStorage3D(...arguments)}catch(z){it("WebGLState:",z)}}function Be(){try{e.texImage2D(...arguments)}catch(z){it("WebGLState:",z)}}function le(){try{e.texImage3D(...arguments)}catch(z){it("WebGLState:",z)}}function he(z){ge.equals(z)===!1&&(e.scissor(z.x,z.y,z.z,z.w),ge.copy(z))}function De(z){pe.equals(z)===!1&&(e.viewport(z.x,z.y,z.z,z.w),pe.copy(z))}function we(z,ve){let me=E.get(ve);me===void 0&&(me=new WeakMap,E.set(ve,me));let Ae=me.get(z);Ae===void 0&&(Ae=e.getUniformBlockIndex(ve,z.name),me.set(z,Ae))}function Te(z,ve){const Ae=E.get(ve).get(z);g.get(ve)!==Ae&&(e.uniformBlockBinding(ve,Ae,z.__bindingPointIndex),g.set(ve,Ae))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),b={},Z=null,ue={},x={},d=new WeakMap,f=[],S=null,_=!1,c=null,o=null,v=null,T=null,w=null,P=null,D=null,L=new at(0,0,0),M=0,A=!1,X=null,B=null,y=null,U=null,u=null,ge.set(0,0,e.canvas.width,e.canvas.height),pe.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:fe,disable:se,bindFramebuffer:Me,drawBuffers:Re,useProgram:Ce,setBlending:p,setMaterial:J,setFlipSided:K,setCullFace:N,setLineWidth:h,setPolygonOffset:H,setScissorTest:ne,activeTexture:re,bindTexture:k,unbindTexture:R,compressedTexImage2D:m,compressedTexImage3D:I,texImage2D:Be,texImage3D:le,updateUBOMapping:we,uniformBlockBinding:Te,texStorage2D:_e,texStorage3D:Pe,texSubImage2D:q,texSubImage3D:ie,compressedTexSubImage2D:j,compressedTexSubImage3D:Ee,scissor:he,viewport:De,reset:Ve}}function Sd(e,n,t,i,s,r,a){const l=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new rt,b=new WeakMap;let x;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,m){return f?new OffscreenCanvas(R,m):xs("canvas")}function _(R,m,I){let q=1;const ie=k(R);if((ie.width>I||ie.height>I)&&(q=I/Math.max(ie.width,ie.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(q*ie.width),Ee=Math.floor(q*ie.height);x===void 0&&(x=S(j,Ee));const _e=m?S(j,Ee):x;return _e.width=j,_e.height=Ee,_e.getContext("2d").drawImage(R,0,0,j,Ee),et("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+j+"x"+Ee+")."),_e}else return"data"in R&&et("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function c(R){return R.generateMipmaps}function o(R){e.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function T(R,m,I,q,ie=!1){if(R!==null){if(e[R]!==void 0)return e[R];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=m;if(m===e.RED&&(I===e.FLOAT&&(j=e.R32F),I===e.HALF_FLOAT&&(j=e.R16F),I===e.UNSIGNED_BYTE&&(j=e.R8)),m===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(j=e.R8UI),I===e.UNSIGNED_SHORT&&(j=e.R16UI),I===e.UNSIGNED_INT&&(j=e.R32UI),I===e.BYTE&&(j=e.R8I),I===e.SHORT&&(j=e.R16I),I===e.INT&&(j=e.R32I)),m===e.RG&&(I===e.FLOAT&&(j=e.RG32F),I===e.HALF_FLOAT&&(j=e.RG16F),I===e.UNSIGNED_BYTE&&(j=e.RG8)),m===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(j=e.RG8UI),I===e.UNSIGNED_SHORT&&(j=e.RG16UI),I===e.UNSIGNED_INT&&(j=e.RG32UI),I===e.BYTE&&(j=e.RG8I),I===e.SHORT&&(j=e.RG16I),I===e.INT&&(j=e.RG32I)),m===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(j=e.RGB8UI),I===e.UNSIGNED_SHORT&&(j=e.RGB16UI),I===e.UNSIGNED_INT&&(j=e.RGB32UI),I===e.BYTE&&(j=e.RGB8I),I===e.SHORT&&(j=e.RGB16I),I===e.INT&&(j=e.RGB32I)),m===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(j=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(j=e.RGBA16UI),I===e.UNSIGNED_INT&&(j=e.RGBA32UI),I===e.BYTE&&(j=e.RGBA8I),I===e.SHORT&&(j=e.RGBA16I),I===e.INT&&(j=e.RGBA32I)),m===e.RGB&&(I===e.UNSIGNED_INT_5_9_9_9_REV&&(j=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(j=e.R11F_G11F_B10F)),m===e.RGBA){const Ee=ie?Ua:lt.getTransfer(q);I===e.FLOAT&&(j=e.RGBA32F),I===e.HALF_FLOAT&&(j=e.RGBA16F),I===e.UNSIGNED_BYTE&&(j=Ee===nt?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&(j=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(j=e.RGB5_A1)}return(j===e.R16F||j===e.R32F||j===e.RG16F||j===e.RG32F||j===e.RGBA16F||j===e.RGBA32F)&&n.get("EXT_color_buffer_float"),j}function w(R,m){let I;return R?m===null||m===Jt||m===Tn?I=e.DEPTH24_STENCIL8:m===zt?I=e.DEPTH32F_STENCIL8:m===Yn&&(I=e.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Jt||m===Tn?I=e.DEPTH_COMPONENT24:m===zt?I=e.DEPTH_COMPONENT32F:m===Yn&&(I=e.DEPTH_COMPONENT16),I}function P(R,m){return c(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ot&&R.minFilter!==St?Math.log2(Math.max(m.width,m.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?m.mipmaps.length:1}function D(R){const m=R.target;m.removeEventListener("dispose",D),M(m),m.isVideoTexture&&b.delete(m)}function L(R){const m=R.target;m.removeEventListener("dispose",L),X(m)}function M(R){const m=i.get(R);if(m.__webglInit===void 0)return;const I=R.source,q=d.get(I);if(q){const ie=q[m.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&A(R),Object.keys(q).length===0&&d.delete(I)}i.remove(R)}function A(R){const m=i.get(R);e.deleteTexture(m.__webglTexture);const I=R.source,q=d.get(I);delete q[m.__cacheKey],a.memory.textures--}function X(R){const m=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(m.__webglFramebuffer[q]))for(let ie=0;ie<m.__webglFramebuffer[q].length;ie++)e.deleteFramebuffer(m.__webglFramebuffer[q][ie]);else e.deleteFramebuffer(m.__webglFramebuffer[q]);m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer[q])}else{if(Array.isArray(m.__webglFramebuffer))for(let q=0;q<m.__webglFramebuffer.length;q++)e.deleteFramebuffer(m.__webglFramebuffer[q]);else e.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&e.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let q=0;q<m.__webglColorRenderbuffer.length;q++)m.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(m.__webglColorRenderbuffer[q]);m.__webglDepthRenderbuffer&&e.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const I=R.textures;for(let q=0,ie=I.length;q<ie;q++){const j=i.get(I[q]);j.__webglTexture&&(e.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(I[q])}i.remove(R)}let B=0;function y(){B=0}function U(){const R=B;return R>=s.maxTextures&&et("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),B+=1,R}function u(R){const m=[];return m.push(R.wrapS),m.push(R.wrapT),m.push(R.wrapR||0),m.push(R.magFilter),m.push(R.minFilter),m.push(R.anisotropy),m.push(R.internalFormat),m.push(R.format),m.push(R.type),m.push(R.generateMipmaps),m.push(R.premultiplyAlpha),m.push(R.flipY),m.push(R.unpackAlignment),m.push(R.colorSpace),m.join()}function O(R,m){const I=i.get(R);if(R.isVideoTexture&&ne(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&I.__version!==R.version){const q=R.image;if(q===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{te(I,R,m);return}}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+m)}function V(R,m){const I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){te(I,R,m);return}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+m)}function F(R,m){const I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){te(I,R,m);return}t.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+m)}function oe(R,m){const I=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&I.__version!==R.version){fe(I,R,m);return}t.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+m)}const Z={[Bo]:e.REPEAT,[xi]:e.CLAMP_TO_EDGE,[Fo]:e.MIRRORED_REPEAT},ue={[Ot]:e.NEAREST,[ko]:e.NEAREST_MIPMAP_NEAREST,[Dn]:e.NEAREST_MIPMAP_LINEAR,[St]:e.LINEAR,[ii]:e.LINEAR_MIPMAP_NEAREST,[on]:e.LINEAR_MIPMAP_LINEAR},W={[Xo]:e.NEVER,[Wo]:e.ALWAYS,[Vo]:e.LESS,[Pi]:e.LEQUAL,[zo]:e.EQUAL,[yi]:e.GEQUAL,[Ho]:e.GREATER,[Go]:e.NOTEQUAL};function G(R,m){if(m.type===zt&&n.has("OES_texture_float_linear")===!1&&(m.magFilter===St||m.magFilter===ii||m.magFilter===Dn||m.magFilter===on||m.minFilter===St||m.minFilter===ii||m.minFilter===Dn||m.minFilter===on)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,Z[m.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,Z[m.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,Z[m.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,ue[m.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,ue[m.minFilter]),m.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,W[m.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Ot||m.minFilter!==Dn&&m.minFilter!==on||m.type===zt&&n.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const I=n.get("EXT_texture_filter_anisotropic");e.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function ge(R,m){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,m.addEventListener("dispose",D));const q=m.source;let ie=d.get(q);ie===void 0&&(ie={},d.set(q,ie));const j=u(m);if(j!==R.__cacheKey){ie[j]===void 0&&(ie[j]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,I=!0),ie[j].usedTimes++;const Ee=ie[R.__cacheKey];Ee!==void 0&&(ie[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&A(m)),R.__cacheKey=j,R.__webglTexture=ie[j].texture}return I}function pe(R,m,I){return Math.floor(Math.floor(R/I)/m)}function ce(R,m,I,q){const j=R.updateRanges;if(j.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,m.width,m.height,I,q,m.data);else{j.sort((le,he)=>le.start-he.start);let Ee=0;for(let le=1;le<j.length;le++){const he=j[Ee],De=j[le],we=he.start+he.count,Te=pe(De.start,m.width,4),Ve=pe(he.start,m.width,4);De.start<=we+1&&Te===Ve&&pe(De.start+De.count-1,m.width,4)===Te?he.count=Math.max(he.count,De.start+De.count-he.start):(++Ee,j[Ee]=De)}j.length=Ee+1;const _e=e.getParameter(e.UNPACK_ROW_LENGTH),Pe=e.getParameter(e.UNPACK_SKIP_PIXELS),Be=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,m.width);for(let le=0,he=j.length;le<he;le++){const De=j[le],we=Math.floor(De.start/4),Te=Math.ceil(De.count/4),Ve=we%m.width,z=Math.floor(we/m.width),ve=Te,me=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ve),e.pixelStorei(e.UNPACK_SKIP_ROWS,z),t.texSubImage2D(e.TEXTURE_2D,0,Ve,z,ve,me,I,q,m.data)}R.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,_e),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Pe),e.pixelStorei(e.UNPACK_SKIP_ROWS,Be)}}function te(R,m,I){let q=e.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),m.isData3DTexture&&(q=e.TEXTURE_3D);const ie=ge(R,m),j=m.source;t.bindTexture(q,R.__webglTexture,e.TEXTURE0+I);const Ee=i.get(j);if(j.version!==Ee.__version||ie===!0){t.activeTexture(e.TEXTURE0+I);const _e=lt.getPrimaries(lt.workingColorSpace),Pe=m.colorSpace===an?null:lt.getPrimaries(m.colorSpace),Be=m.colorSpace===an||_e===Pe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let le=_(m.image,!1,s.maxTextureSize);le=re(m,le);const he=r.convert(m.format,m.colorSpace),De=r.convert(m.type);let we=T(m.internalFormat,he,De,m.colorSpace,m.isVideoTexture);G(q,m);let Te;const Ve=m.mipmaps,z=m.isVideoTexture!==!0,ve=Ee.__version===void 0||ie===!0,me=j.dataReady,Ae=P(m,le);if(m.isDepthTexture)we=w(m.format===sn,m.type),ve&&(z?t.texStorage2D(e.TEXTURE_2D,1,we,le.width,le.height):t.texImage2D(e.TEXTURE_2D,0,we,le.width,le.height,0,he,De,null));else if(m.isDataTexture)if(Ve.length>0){z&&ve&&t.texStorage2D(e.TEXTURE_2D,Ae,we,Ve[0].width,Ve[0].height);for(let de=0,ae=Ve.length;de<ae;de++)Te=Ve[de],z?me&&t.texSubImage2D(e.TEXTURE_2D,de,0,0,Te.width,Te.height,he,De,Te.data):t.texImage2D(e.TEXTURE_2D,de,we,Te.width,Te.height,0,he,De,Te.data);m.generateMipmaps=!1}else z?(ve&&t.texStorage2D(e.TEXTURE_2D,Ae,we,le.width,le.height),me&&ce(m,le,he,De)):t.texImage2D(e.TEXTURE_2D,0,we,le.width,le.height,0,he,De,le.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){z&&ve&&t.texStorage3D(e.TEXTURE_2D_ARRAY,Ae,we,Ve[0].width,Ve[0].height,le.depth);for(let de=0,ae=Ve.length;de<ae;de++)if(Te=Ve[de],m.format!==Nt)if(he!==null)if(z){if(me)if(m.layerUpdates.size>0){const Ue=Dr(Te.width,Te.height,m.format,m.type);for(const He of m.layerUpdates){const tt=Te.data.subarray(He*Ue/Te.data.BYTES_PER_ELEMENT,(He+1)*Ue/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,de,0,0,He,Te.width,Te.height,1,he,tt)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,le.depth,he,Te.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,de,we,Te.width,Te.height,le.depth,0,Te.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?me&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,le.depth,he,De,Te.data):t.texImage3D(e.TEXTURE_2D_ARRAY,de,we,Te.width,Te.height,le.depth,0,he,De,Te.data)}else{z&&ve&&t.texStorage2D(e.TEXTURE_2D,Ae,we,Ve[0].width,Ve[0].height);for(let de=0,ae=Ve.length;de<ae;de++)Te=Ve[de],m.format!==Nt?he!==null?z?me&&t.compressedTexSubImage2D(e.TEXTURE_2D,de,0,0,Te.width,Te.height,he,Te.data):t.compressedTexImage2D(e.TEXTURE_2D,de,we,Te.width,Te.height,0,Te.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?me&&t.texSubImage2D(e.TEXTURE_2D,de,0,0,Te.width,Te.height,he,De,Te.data):t.texImage2D(e.TEXTURE_2D,de,we,Te.width,Te.height,0,he,De,Te.data)}else if(m.isDataArrayTexture)if(z){if(ve&&t.texStorage3D(e.TEXTURE_2D_ARRAY,Ae,we,le.width,le.height,le.depth),me)if(m.layerUpdates.size>0){const de=Dr(le.width,le.height,m.format,m.type);for(const ae of m.layerUpdates){const Ue=le.data.subarray(ae*de/le.data.BYTES_PER_ELEMENT,(ae+1)*de/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ae,le.width,le.height,1,he,De,Ue)}m.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,he,De,le.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,we,le.width,le.height,le.depth,0,he,De,le.data);else if(m.isData3DTexture)z?(ve&&t.texStorage3D(e.TEXTURE_3D,Ae,we,le.width,le.height,le.depth),me&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,he,De,le.data)):t.texImage3D(e.TEXTURE_3D,0,we,le.width,le.height,le.depth,0,he,De,le.data);else if(m.isFramebufferTexture){if(ve)if(z)t.texStorage2D(e.TEXTURE_2D,Ae,we,le.width,le.height);else{let de=le.width,ae=le.height;for(let Ue=0;Ue<Ae;Ue++)t.texImage2D(e.TEXTURE_2D,Ue,we,de,ae,0,he,De,null),de>>=1,ae>>=1}}else if(Ve.length>0){if(z&&ve){const de=k(Ve[0]);t.texStorage2D(e.TEXTURE_2D,Ae,we,de.width,de.height)}for(let de=0,ae=Ve.length;de<ae;de++)Te=Ve[de],z?me&&t.texSubImage2D(e.TEXTURE_2D,de,0,0,he,De,Te):t.texImage2D(e.TEXTURE_2D,de,we,he,De,Te);m.generateMipmaps=!1}else if(z){if(ve){const de=k(le);t.texStorage2D(e.TEXTURE_2D,Ae,we,de.width,de.height)}me&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,he,De,le)}else t.texImage2D(e.TEXTURE_2D,0,we,he,De,le);c(m)&&o(q),Ee.__version=j.version,m.onUpdate&&m.onUpdate(m)}R.__version=m.version}function fe(R,m,I){if(m.image.length!==6)return;const q=ge(R,m),ie=m.source;t.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+I);const j=i.get(ie);if(ie.version!==j.__version||q===!0){t.activeTexture(e.TEXTURE0+I);const Ee=lt.getPrimaries(lt.workingColorSpace),_e=m.colorSpace===an?null:lt.getPrimaries(m.colorSpace),Pe=m.colorSpace===an||Ee===_e?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Be=m.isCompressedTexture||m.image[0].isCompressedTexture,le=m.image[0]&&m.image[0].isDataTexture,he=[];for(let ae=0;ae<6;ae++)!Be&&!le?he[ae]=_(m.image[ae],!0,s.maxCubemapSize):he[ae]=le?m.image[ae].image:m.image[ae],he[ae]=re(m,he[ae]);const De=he[0],we=r.convert(m.format,m.colorSpace),Te=r.convert(m.type),Ve=T(m.internalFormat,we,Te,m.colorSpace),z=m.isVideoTexture!==!0,ve=j.__version===void 0||q===!0,me=ie.dataReady;let Ae=P(m,De);G(e.TEXTURE_CUBE_MAP,m);let de;if(Be){z&&ve&&t.texStorage2D(e.TEXTURE_CUBE_MAP,Ae,Ve,De.width,De.height);for(let ae=0;ae<6;ae++){de=he[ae].mipmaps;for(let Ue=0;Ue<de.length;Ue++){const He=de[Ue];m.format!==Nt?we!==null?z?me&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,0,0,He.width,He.height,we,He.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,Ve,He.width,He.height,0,He.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?me&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,0,0,He.width,He.height,we,Te,He.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,Ve,He.width,He.height,0,we,Te,He.data)}}}else{if(de=m.mipmaps,z&&ve){de.length>0&&Ae++;const ae=k(he[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,Ae,Ve,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(le){z?me&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,he[ae].width,he[ae].height,we,Te,he[ae].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ve,he[ae].width,he[ae].height,0,we,Te,he[ae].data);for(let Ue=0;Ue<de.length;Ue++){const tt=de[Ue].image[ae].image;z?me&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,0,0,tt.width,tt.height,we,Te,tt.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,Ve,tt.width,tt.height,0,we,Te,tt.data)}}else{z?me&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,we,Te,he[ae]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ve,we,Te,he[ae]);for(let Ue=0;Ue<de.length;Ue++){const He=de[Ue];z?me&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,0,0,we,Te,He.image[ae]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,Ve,we,Te,He.image[ae])}}}c(m)&&o(e.TEXTURE_CUBE_MAP),j.__version=ie.version,m.onUpdate&&m.onUpdate(m)}R.__version=m.version}function se(R,m,I,q,ie,j){const Ee=r.convert(I.format,I.colorSpace),_e=r.convert(I.type),Pe=T(I.internalFormat,Ee,_e,I.colorSpace),Be=i.get(m),le=i.get(I);if(le.__renderTarget=m,!Be.__hasExternalTextures){const he=Math.max(1,m.width>>j),De=Math.max(1,m.height>>j);ie===e.TEXTURE_3D||ie===e.TEXTURE_2D_ARRAY?t.texImage3D(ie,j,Pe,he,De,m.depth,0,Ee,_e,null):t.texImage2D(ie,j,Pe,he,De,0,Ee,_e,null)}t.bindFramebuffer(e.FRAMEBUFFER,R),H(m)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,ie,le.__webglTexture,0,h(m)):(ie===e.TEXTURE_2D||ie>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,ie,le.__webglTexture,j),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Me(R,m,I){if(e.bindRenderbuffer(e.RENDERBUFFER,R),m.depthBuffer){const q=m.depthTexture,ie=q&&q.isDepthTexture?q.type:null,j=w(m.stencilBuffer,ie),Ee=m.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;H(m)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,h(m),j,m.width,m.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,h(m),j,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,j,m.width,m.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Ee,e.RENDERBUFFER,R)}else{const q=m.textures;for(let ie=0;ie<q.length;ie++){const j=q[ie],Ee=r.convert(j.format,j.colorSpace),_e=r.convert(j.type),Pe=T(j.internalFormat,Ee,_e,j.colorSpace);H(m)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,h(m),Pe,m.width,m.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,h(m),Pe,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,Pe,m.width,m.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Re(R,m,I){const q=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,R),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(m.depthTexture);if(ie.__renderTarget=m,(!ie.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),q){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,m.depthTexture.addEventListener("dispose",D)),ie.__webglTexture===void 0){ie.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,ie.__webglTexture),G(e.TEXTURE_CUBE_MAP,m.depthTexture);const Be=r.convert(m.depthTexture.format),le=r.convert(m.depthTexture.type);let he;m.depthTexture.format===dn?he=e.DEPTH_COMPONENT24:m.depthTexture.format===sn&&(he=e.DEPTH24_STENCIL8);for(let De=0;De<6;De++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,he,m.width,m.height,0,Be,le,null)}}else O(m.depthTexture,0);const j=ie.__webglTexture,Ee=h(m),_e=q?e.TEXTURE_CUBE_MAP_POSITIVE_X+I:e.TEXTURE_2D,Pe=m.depthTexture.format===sn?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(m.depthTexture.format===dn)H(m)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Pe,_e,j,0,Ee):e.framebufferTexture2D(e.FRAMEBUFFER,Pe,_e,j,0);else if(m.depthTexture.format===sn)H(m)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Pe,_e,j,0,Ee):e.framebufferTexture2D(e.FRAMEBUFFER,Pe,_e,j,0);else throw new Error("Unknown depthTexture format")}function Ce(R){const m=i.get(R),I=R.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),q){const ie=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,q.removeEventListener("dispose",ie)};q.addEventListener("dispose",ie),m.__depthDisposeCallback=ie}m.__boundDepthTexture=q}if(R.depthTexture&&!m.__autoAllocateDepthBuffer)if(I)for(let q=0;q<6;q++)Re(m.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?Re(m.__webglFramebuffer[0],R,0):Re(m.__webglFramebuffer,R,0)}else if(I){m.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[q]),m.__webglDepthbuffer[q]===void 0)m.__webglDepthbuffer[q]=e.createRenderbuffer(),Me(m.__webglDepthbuffer[q],R,!1);else{const ie=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,j=m.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,j),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,j)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=e.createRenderbuffer(),Me(m.__webglDepthbuffer,R,!1);else{const ie=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,j=m.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,j),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,j)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function qe(R,m,I){const q=i.get(R);m!==void 0&&se(q.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&Ce(R)}function Ge(R){const m=R.texture,I=i.get(R),q=i.get(m);R.addEventListener("dispose",L);const ie=R.textures,j=R.isWebGLCubeRenderTarget===!0,Ee=ie.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=m.version,a.memory.textures++),j){I.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(m.mipmaps&&m.mipmaps.length>0){I.__webglFramebuffer[_e]=[];for(let Pe=0;Pe<m.mipmaps.length;Pe++)I.__webglFramebuffer[_e][Pe]=e.createFramebuffer()}else I.__webglFramebuffer[_e]=e.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){I.__webglFramebuffer=[];for(let _e=0;_e<m.mipmaps.length;_e++)I.__webglFramebuffer[_e]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(Ee)for(let _e=0,Pe=ie.length;_e<Pe;_e++){const Be=i.get(ie[_e]);Be.__webglTexture===void 0&&(Be.__webglTexture=e.createTexture(),a.memory.textures++)}if(R.samples>0&&H(R)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let _e=0;_e<ie.length;_e++){const Pe=ie[_e];I.__webglColorRenderbuffer[_e]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[_e]);const Be=r.convert(Pe.format,Pe.colorSpace),le=r.convert(Pe.type),he=T(Pe.internalFormat,Be,le,Pe.colorSpace,R.isXRRenderTarget===!0),De=h(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,De,he,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,I.__webglColorRenderbuffer[_e])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),Me(I.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(j){t.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),G(e.TEXTURE_CUBE_MAP,m);for(let _e=0;_e<6;_e++)if(m.mipmaps&&m.mipmaps.length>0)for(let Pe=0;Pe<m.mipmaps.length;Pe++)se(I.__webglFramebuffer[_e][Pe],R,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Pe);else se(I.__webglFramebuffer[_e],R,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);c(m)&&o(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let _e=0,Pe=ie.length;_e<Pe;_e++){const Be=ie[_e],le=i.get(Be);let he=e.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(he,le.__webglTexture),G(he,Be),se(I.__webglFramebuffer,R,Be,e.COLOR_ATTACHMENT0+_e,he,0),c(Be)&&o(he)}t.unbindTexture()}else{let _e=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(_e,q.__webglTexture),G(_e,m),m.mipmaps&&m.mipmaps.length>0)for(let Pe=0;Pe<m.mipmaps.length;Pe++)se(I.__webglFramebuffer[Pe],R,m,e.COLOR_ATTACHMENT0,_e,Pe);else se(I.__webglFramebuffer,R,m,e.COLOR_ATTACHMENT0,_e,0);c(m)&&o(_e),t.unbindTexture()}R.depthBuffer&&Ce(R)}function p(R){const m=R.textures;for(let I=0,q=m.length;I<q;I++){const ie=m[I];if(c(ie)){const j=v(R),Ee=i.get(ie).__webglTexture;t.bindTexture(j,Ee),o(j),t.unbindTexture()}}}const J=[],K=[];function N(R){if(R.samples>0){if(H(R)===!1){const m=R.textures,I=R.width,q=R.height;let ie=e.COLOR_BUFFER_BIT;const j=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ee=i.get(R),_e=m.length>1;if(_e)for(let Be=0;Be<m.length;Be++)t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Be,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Be,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Pe=R.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Be=0;Be<m.length;Be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=e.STENCIL_BUFFER_BIT)),_e){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ee.__webglColorRenderbuffer[Be]);const le=i.get(m[Be]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,le,0)}e.blitFramebuffer(0,0,I,q,0,0,I,q,ie,e.NEAREST),g===!0&&(J.length=0,K.length=0,J.push(e.COLOR_ATTACHMENT0+Be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(J.push(j),K.push(j),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,K)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),_e)for(let Be=0;Be<m.length;Be++){t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Be,e.RENDERBUFFER,Ee.__webglColorRenderbuffer[Be]);const le=i.get(m[Be]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Be,e.TEXTURE_2D,le,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&g){const m=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[m])}}}function h(R){return Math.min(s.maxSamples,R.samples)}function H(R){const m=i.get(R);return R.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function ne(R){const m=a.render.frame;b.get(R)!==m&&(b.set(R,m),R.update())}function re(R,m){const I=R.colorSpace,q=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==jn&&I!==an&&(lt.getTransfer(I)===nt?(q!==Nt||ie!==yt)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",I)),m}function k(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(E.width=R.naturalWidth||R.width,E.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(E.width=R.displayWidth,E.height=R.displayHeight):(E.width=R.width,E.height=R.height),E}this.allocateTextureUnit=U,this.resetTextureUnits=y,this.setTexture2D=O,this.setTexture2DArray=V,this.setTexture3D=F,this.setTextureCube=oe,this.rebindTextures=qe,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=p,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=se,this.useMultisampledRTT=H,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ed(e,n){function t(i,s=an){let r;const a=lt.getTransfer(s);if(i===yt)return e.UNSIGNED_BYTE;if(i===Sa)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Ea)return e.UNSIGNED_SHORT_5_5_5_1;if(i===jo)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===$o)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qo)return e.BYTE;if(i===Jo)return e.SHORT;if(i===Yn)return e.UNSIGNED_SHORT;if(i===ba)return e.INT;if(i===Jt)return e.UNSIGNED_INT;if(i===zt)return e.FLOAT;if(i===Yt)return e.HALF_FLOAT;if(i===es)return e.ALPHA;if(i===ts)return e.RGB;if(i===Nt)return e.RGBA;if(i===dn)return e.DEPTH_COMPONENT;if(i===sn)return e.DEPTH_STENCIL;if(i===ns)return e.RED;if(i===va)return e.RED_INTEGER;if(i===An)return e.RG;if(i===ga)return e.RG_INTEGER;if(i===_a)return e.RGBA_INTEGER;if(i===ri||i===ai||i===oi||i===si)if(a===nt)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ri)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ai)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===si)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ri)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ai)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oi)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===si)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zi||i===ji||i===$i||i===Qi)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zi)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ji)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$i)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qi)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ji||i===er||i===tr||i===nr||i===ir||i===rr||i===ar)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ji||i===er)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===tr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===nr)return r.COMPRESSED_R11_EAC;if(i===ir)return r.COMPRESSED_SIGNED_R11_EAC;if(i===rr)return r.COMPRESSED_RG11_EAC;if(i===ar)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===or||i===sr||i===lr||i===cr||i===fr||i===ur||i===dr||i===hr||i===pr||i===mr||i===_r||i===gr||i===vr||i===Sr)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===or)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ur)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_r)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Er||i===xr||i===br)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===Er)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===br)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mr||i===Tr||i===Ar||i===wr)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===Mr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Tr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ar)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const xd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bd=`
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

}`;class Md{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new xa(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Bt({vertexShader:xd,fragmentShader:bd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Di(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Td extends _o{constructor(n,t){super();const i=this;let s=null,r=1,a=null,l="local-floor",g=1,E=null,b=null,x=null,d=null,f=null,S=null;const _=typeof XRWebGLBinding<"u",c=new Md,o={},v=t.getContextAttributes();let T=null,w=null;const P=[],D=[],L=new rt;let M=null;const A=new Bn;A.viewport=new gt;const X=new Bn;X.viewport=new gt;const B=[A,X],y=new go;let U=null,u=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let fe=P[te];return fe===void 0&&(fe=new ni,P[te]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(te){let fe=P[te];return fe===void 0&&(fe=new ni,P[te]=fe),fe.getGripSpace()},this.getHand=function(te){let fe=P[te];return fe===void 0&&(fe=new ni,P[te]=fe),fe.getHandSpace()};function O(te){const fe=D.indexOf(te.inputSource);if(fe===-1)return;const se=P[fe];se!==void 0&&(se.update(te.inputSource,te.frame,E||a),se.dispatchEvent({type:te.type,data:te.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",F);for(let te=0;te<P.length;te++){const fe=D[te];fe!==null&&(D[te]=null,P[te].disconnect(fe))}U=null,u=null,c.reset();for(const te in o)delete o[te];n.setRenderTarget(T),f=null,d=null,x=null,s=null,w=null,ce.stop(),i.isPresenting=!1,n.setPixelRatio(M),n.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){l=te,i.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return E||a},this.setReferenceSpace=function(te){E=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return x===null&&_&&(x=new XRWebGLBinding(s,t)),x},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(T=n.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=n.getPixelRatio(),n.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Me=null,Re=null;v.depth&&(Re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=v.stencil?sn:dn,Me=v.stencil?Tn:Jt);const Ce={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};x=this.getBinding(),d=x.createProjectionLayer(Ce),s.updateRenderState({layers:[d]}),n.setPixelRatio(1),n.setSize(d.textureWidth,d.textureHeight,!1),w=new Dt(d.textureWidth,d.textureHeight,{format:Nt,type:yt,depthTexture:new Xn(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:v.stencil,colorSpace:n.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),n.setPixelRatio(1),n.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Dt(f.framebufferWidth,f.framebufferHeight,{format:Nt,type:yt,colorSpace:n.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(g),E=null,a=await s.requestReferenceSpace(l),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function F(te){for(let fe=0;fe<te.removed.length;fe++){const se=te.removed[fe],Me=D.indexOf(se);Me>=0&&(D[Me]=null,P[Me].disconnect(se))}for(let fe=0;fe<te.added.length;fe++){const se=te.added[fe];let Me=D.indexOf(se);if(Me===-1){for(let Ce=0;Ce<P.length;Ce++)if(Ce>=D.length){D.push(se),Me=Ce;break}else if(D[Ce]===null){D[Ce]=se,Me=Ce;break}if(Me===-1)break}const Re=P[Me];Re&&Re.connect(se)}}const oe=new ke,Z=new ke;function ue(te,fe,se){oe.setFromMatrixPosition(fe.matrixWorld),Z.setFromMatrixPosition(se.matrixWorld);const Me=oe.distanceTo(Z),Re=fe.projectionMatrix.elements,Ce=se.projectionMatrix.elements,qe=Re[14]/(Re[10]-1),Ge=Re[14]/(Re[10]+1),p=(Re[9]+1)/Re[5],J=(Re[9]-1)/Re[5],K=(Re[8]-1)/Re[0],N=(Ce[8]+1)/Ce[0],h=qe*K,H=qe*N,ne=Me/(-K+N),re=ne*-K;if(fe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(re),te.translateZ(ne),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Re[10]===-1)te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const k=qe+ne,R=Ge+ne,m=h-re,I=H+(Me-re),q=p*Ge/R*k,ie=J*Ge/R*k;te.projectionMatrix.makePerspective(m,I,q,ie,k,R),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function W(te,fe){fe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(fe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let fe=te.near,se=te.far;c.texture!==null&&(c.depthNear>0&&(fe=c.depthNear),c.depthFar>0&&(se=c.depthFar)),y.near=X.near=A.near=fe,y.far=X.far=A.far=se,(U!==y.near||u!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),U=y.near,u=y.far),y.layers.mask=te.layers.mask|6,A.layers.mask=y.layers.mask&-5,X.layers.mask=y.layers.mask&-3;const Me=te.parent,Re=y.cameras;W(y,Me);for(let Ce=0;Ce<Re.length;Ce++)W(Re[Ce],Me);Re.length===2?ue(y,A,X):y.projectionMatrix.copy(A.projectionMatrix),G(te,y,Me)};function G(te,fe,se){se===null?te.matrix.copy(fe.matrixWorld):(te.matrix.copy(se.matrixWorld),te.matrix.invert(),te.matrix.multiply(fe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=vo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return g},this.setFoveation=function(te){g=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(y)},this.getCameraTexture=function(te){return o[te]};let ge=null;function pe(te,fe){if(b=fe.getViewerPose(E||a),S=fe,b!==null){const se=b.views;f!==null&&(n.setRenderTargetFramebuffer(w,f.framebuffer),n.setRenderTarget(w));let Me=!1;se.length!==y.cameras.length&&(y.cameras.length=0,Me=!0);for(let Ge=0;Ge<se.length;Ge++){const p=se[Ge];let J=null;if(f!==null)J=f.getViewport(p);else{const N=x.getViewSubImage(d,p);J=N.viewport,Ge===0&&(n.setRenderTargetTextures(w,N.colorTexture,N.depthStencilTexture),n.setRenderTarget(w))}let K=B[Ge];K===void 0&&(K=new Bn,K.layers.enable(Ge),K.viewport=new gt,B[Ge]=K),K.matrix.fromArray(p.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(p.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(J.x,J.y,J.width,J.height),Ge===0&&(y.matrix.copy(K.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Me===!0&&y.cameras.push(K)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){x=i.getBinding();const Ge=x.getDepthInformation(se[0]);Ge&&Ge.isValid&&Ge.texture&&c.init(Ge,s.renderState)}if(Re&&Re.includes("camera-access")&&_){n.state.unbindTexture(),x=i.getBinding();for(let Ge=0;Ge<se.length;Ge++){const p=se[Ge].camera;if(p){let J=o[p];J||(J=new xa,o[p]=J);const K=x.getCameraImage(p);J.sourceTexture=K}}}}for(let se=0;se<P.length;se++){const Me=D[se],Re=P[se];Me!==null&&Re!==void 0&&Re.update(Me,fe,E||a)}ge&&ge(te,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),S=null}const ce=new Oa;ce.setAnimationLoop(pe),this.setAnimationLoop=function(te){ge=te},this.dispose=function(){}}}const jt=new Ui,Ad=new un;function wd(e,n){function t(c,o){c.matrixAutoUpdate===!0&&c.updateMatrix(),o.value.copy(c.matrix)}function i(c,o){o.color.getRGB(c.fogColor.value,Ta(e)),o.isFog?(c.fogNear.value=o.near,c.fogFar.value=o.far):o.isFogExp2&&(c.fogDensity.value=o.density)}function s(c,o,v,T,w){o.isMeshBasicMaterial?r(c,o):o.isMeshLambertMaterial?(r(c,o),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)):o.isMeshToonMaterial?(r(c,o),x(c,o)):o.isMeshPhongMaterial?(r(c,o),b(c,o),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)):o.isMeshStandardMaterial?(r(c,o),d(c,o),o.isMeshPhysicalMaterial&&f(c,o,w)):o.isMeshMatcapMaterial?(r(c,o),S(c,o)):o.isMeshDepthMaterial?r(c,o):o.isMeshDistanceMaterial?(r(c,o),_(c,o)):o.isMeshNormalMaterial?r(c,o):o.isLineBasicMaterial?(a(c,o),o.isLineDashedMaterial&&l(c,o)):o.isPointsMaterial?g(c,o,v,T):o.isSpriteMaterial?E(c,o):o.isShadowMaterial?(c.color.value.copy(o.color),c.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}function r(c,o){c.opacity.value=o.opacity,o.color&&c.diffuse.value.copy(o.color),o.emissive&&c.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(c.map.value=o.map,t(o.map,c.mapTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.bumpMap&&(c.bumpMap.value=o.bumpMap,t(o.bumpMap,c.bumpMapTransform),c.bumpScale.value=o.bumpScale,o.side===Et&&(c.bumpScale.value*=-1)),o.normalMap&&(c.normalMap.value=o.normalMap,t(o.normalMap,c.normalMapTransform),c.normalScale.value.copy(o.normalScale),o.side===Et&&c.normalScale.value.negate()),o.displacementMap&&(c.displacementMap.value=o.displacementMap,t(o.displacementMap,c.displacementMapTransform),c.displacementScale.value=o.displacementScale,c.displacementBias.value=o.displacementBias),o.emissiveMap&&(c.emissiveMap.value=o.emissiveMap,t(o.emissiveMap,c.emissiveMapTransform)),o.specularMap&&(c.specularMap.value=o.specularMap,t(o.specularMap,c.specularMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest);const v=n.get(o),T=v.envMap,w=v.envMapRotation;T&&(c.envMap.value=T,jt.copy(w),jt.x*=-1,jt.y*=-1,jt.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(jt.y*=-1,jt.z*=-1),c.envMapRotation.value.setFromMatrix4(Ad.makeRotationFromEuler(jt)),c.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=o.reflectivity,c.ior.value=o.ior,c.refractionRatio.value=o.refractionRatio),o.lightMap&&(c.lightMap.value=o.lightMap,c.lightMapIntensity.value=o.lightMapIntensity,t(o.lightMap,c.lightMapTransform)),o.aoMap&&(c.aoMap.value=o.aoMap,c.aoMapIntensity.value=o.aoMapIntensity,t(o.aoMap,c.aoMapTransform))}function a(c,o){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,o.map&&(c.map.value=o.map,t(o.map,c.mapTransform))}function l(c,o){c.dashSize.value=o.dashSize,c.totalSize.value=o.dashSize+o.gapSize,c.scale.value=o.scale}function g(c,o,v,T){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,c.size.value=o.size*v,c.scale.value=T*.5,o.map&&(c.map.value=o.map,t(o.map,c.uvTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest)}function E(c,o){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,c.rotation.value=o.rotation,o.map&&(c.map.value=o.map,t(o.map,c.mapTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest)}function b(c,o){c.specular.value.copy(o.specular),c.shininess.value=Math.max(o.shininess,1e-4)}function x(c,o){o.gradientMap&&(c.gradientMap.value=o.gradientMap)}function d(c,o){c.metalness.value=o.metalness,o.metalnessMap&&(c.metalnessMap.value=o.metalnessMap,t(o.metalnessMap,c.metalnessMapTransform)),c.roughness.value=o.roughness,o.roughnessMap&&(c.roughnessMap.value=o.roughnessMap,t(o.roughnessMap,c.roughnessMapTransform)),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)}function f(c,o,v){c.ior.value=o.ior,o.sheen>0&&(c.sheenColor.value.copy(o.sheenColor).multiplyScalar(o.sheen),c.sheenRoughness.value=o.sheenRoughness,o.sheenColorMap&&(c.sheenColorMap.value=o.sheenColorMap,t(o.sheenColorMap,c.sheenColorMapTransform)),o.sheenRoughnessMap&&(c.sheenRoughnessMap.value=o.sheenRoughnessMap,t(o.sheenRoughnessMap,c.sheenRoughnessMapTransform))),o.clearcoat>0&&(c.clearcoat.value=o.clearcoat,c.clearcoatRoughness.value=o.clearcoatRoughness,o.clearcoatMap&&(c.clearcoatMap.value=o.clearcoatMap,t(o.clearcoatMap,c.clearcoatMapTransform)),o.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=o.clearcoatRoughnessMap,t(o.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),o.clearcoatNormalMap&&(c.clearcoatNormalMap.value=o.clearcoatNormalMap,t(o.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(o.clearcoatNormalScale),o.side===Et&&c.clearcoatNormalScale.value.negate())),o.dispersion>0&&(c.dispersion.value=o.dispersion),o.iridescence>0&&(c.iridescence.value=o.iridescence,c.iridescenceIOR.value=o.iridescenceIOR,c.iridescenceThicknessMinimum.value=o.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=o.iridescenceThicknessRange[1],o.iridescenceMap&&(c.iridescenceMap.value=o.iridescenceMap,t(o.iridescenceMap,c.iridescenceMapTransform)),o.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=o.iridescenceThicknessMap,t(o.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),o.transmission>0&&(c.transmission.value=o.transmission,c.transmissionSamplerMap.value=v.texture,c.transmissionSamplerSize.value.set(v.width,v.height),o.transmissionMap&&(c.transmissionMap.value=o.transmissionMap,t(o.transmissionMap,c.transmissionMapTransform)),c.thickness.value=o.thickness,o.thicknessMap&&(c.thicknessMap.value=o.thicknessMap,t(o.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=o.attenuationDistance,c.attenuationColor.value.copy(o.attenuationColor)),o.anisotropy>0&&(c.anisotropyVector.value.set(o.anisotropy*Math.cos(o.anisotropyRotation),o.anisotropy*Math.sin(o.anisotropyRotation)),o.anisotropyMap&&(c.anisotropyMap.value=o.anisotropyMap,t(o.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=o.specularIntensity,c.specularColor.value.copy(o.specularColor),o.specularColorMap&&(c.specularColorMap.value=o.specularColorMap,t(o.specularColorMap,c.specularColorMapTransform)),o.specularIntensityMap&&(c.specularIntensityMap.value=o.specularIntensityMap,t(o.specularIntensityMap,c.specularIntensityMapTransform))}function S(c,o){o.matcap&&(c.matcap.value=o.matcap)}function _(c,o){const v=n.get(o).light;c.referencePosition.value.setFromMatrixPosition(v.matrixWorld),c.nearDistance.value=v.shadow.camera.near,c.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Rd(e,n,t,i){let s={},r={},a=[];const l=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function g(v,T){const w=T.program;i.uniformBlockBinding(v,w)}function E(v,T){let w=s[v.id];w===void 0&&(S(v),w=b(v),s[v.id]=w,v.addEventListener("dispose",c));const P=T.program;i.updateUBOMapping(v,P);const D=n.render.frame;r[v.id]!==D&&(d(v),r[v.id]=D)}function b(v){const T=x();v.__bindingPointIndex=T;const w=e.createBuffer(),P=v.__size,D=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,P,D),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,w),w}function x(){for(let v=0;v<l;v++)if(a.indexOf(v)===-1)return a.push(v),v;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const T=s[v.id],w=v.uniforms,P=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let D=0,L=w.length;D<L;D++){const M=Array.isArray(w[D])?w[D]:[w[D]];for(let A=0,X=M.length;A<X;A++){const B=M[A];if(f(B,D,A,P)===!0){const y=B.__offset,U=Array.isArray(B.value)?B.value:[B.value];let u=0;for(let O=0;O<U.length;O++){const V=U[O],F=_(V);typeof V=="number"||typeof V=="boolean"?(B.__data[0]=V,e.bufferSubData(e.UNIFORM_BUFFER,y+u,B.__data)):V.isMatrix3?(B.__data[0]=V.elements[0],B.__data[1]=V.elements[1],B.__data[2]=V.elements[2],B.__data[3]=0,B.__data[4]=V.elements[3],B.__data[5]=V.elements[4],B.__data[6]=V.elements[5],B.__data[7]=0,B.__data[8]=V.elements[6],B.__data[9]=V.elements[7],B.__data[10]=V.elements[8],B.__data[11]=0):(V.toArray(B.__data,u),u+=F.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,y,B.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(v,T,w,P){const D=v.value,L=T+"_"+w;if(P[L]===void 0)return typeof D=="number"||typeof D=="boolean"?P[L]=D:P[L]=D.clone(),!0;{const M=P[L];if(typeof D=="number"||typeof D=="boolean"){if(M!==D)return P[L]=D,!0}else if(M.equals(D)===!1)return M.copy(D),!0}return!1}function S(v){const T=v.uniforms;let w=0;const P=16;for(let L=0,M=T.length;L<M;L++){const A=Array.isArray(T[L])?T[L]:[T[L]];for(let X=0,B=A.length;X<B;X++){const y=A[X],U=Array.isArray(y.value)?y.value:[y.value];for(let u=0,O=U.length;u<O;u++){const V=U[u],F=_(V),oe=w%P,Z=oe%F.boundary,ue=oe+Z;w+=Z,ue!==0&&P-ue<F.storage&&(w+=P-ue),y.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=w,w+=F.storage}}}const D=w%P;return D>0&&(w+=P-D),v.__size=w,v.__cache={},this}function _(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):et("WebGLRenderer: Unsupported uniform value type.",v),T}function c(v){const T=v.target;T.removeEventListener("dispose",c);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),e.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function o(){for(const v in s)e.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:g,update:E,dispose:o}}const Cd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wt=null;function yd(){return wt===null&&(wt=new So(Cd,16,16,An,Yt),wt.name="DFG_LUT",wt.minFilter=St,wt.magFilter=St,wt.wrapS=xi,wt.wrapT=xi,wt.generateMipmaps=!1,wt.needsUpdate=!0),wt}class Pd{constructor(n={}){const{canvas:t=uo(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:E=!1,powerPreference:b="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:d=!1,outputBufferType:f=yt}=n;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=a;const _=f,c=new Set([_a,ga,va]),o=new Set([yt,Jt,Yn,Tn,Sa,Ea]),v=new Uint32Array(4),T=new Int32Array(4);let w=null,P=null;const D=[],L=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let X=!1;this._outputColorSpace=da;let B=0,y=0,U=null,u=-1,O=null;const V=new gt,F=new gt;let oe=null;const Z=new at(0);let ue=0,W=t.width,G=t.height,ge=1,pe=null,ce=null;const te=new gt(0,0,W,G),fe=new gt(0,0,W,G);let se=!1;const Me=new ha;let Re=!1,Ce=!1;const qe=new un,Ge=new ke,p=new gt,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function N(){return U===null?ge:1}let h=i;function H(C,Y){return t.getContext(C,Y)}try{const C={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:g,preserveDrawingBuffer:E,powerPreference:b,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ho}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",tt,!1),h===null){const Y="webgl2";if(h=H(Y,C),h===null)throw H(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw it("WebGLRenderer: "+C.message),C}let ne,re,k,R,m,I,q,ie,j,Ee,_e,Pe,Be,le,he,De,we,Te,Ve,z,ve,me,Ae;function de(){ne=new Pf(h),ne.init(),ve=new Ed(h,ne),re=new bf(h,ne,n,ve),k=new vd(h,ne),re.reversedDepthBuffer&&d&&k.buffers.depth.setReversed(!0),R=new Uf(h),m=new rd,I=new Sd(h,ne,k,m,re,ve,R),q=new yf(A),ie=new Fs(h),me=new Ef(h,ie),j=new Df(h,ie,R,me),Ee=new Nf(h,j,ie,me,R),Te=new If(h,re,I),he=new Mf(m),_e=new id(A,q,ne,re,me,he),Pe=new wd(A,m),Be=new od,le=new dd(ne),we=new Sf(A,q,k,Ee,S,g),De=new gd(A,Ee,re),Ae=new Rd(h,R,re,k),Ve=new xf(h,ne,R),z=new Lf(h,ne,R),R.programs=_e.programs,A.capabilities=re,A.extensions=ne,A.properties=m,A.renderLists=Be,A.shadowMap=De,A.state=k,A.info=R}de(),_!==yt&&(M=new Ff(_,t.width,t.height,s,r));const ae=new Td(A,h);this.xr=ae,this.getContext=function(){return h},this.getContextAttributes=function(){return h.getContextAttributes()},this.forceContextLoss=function(){const C=ne.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ne.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(C){C!==void 0&&(ge=C,this.setSize(W,G,!1))},this.getSize=function(C){return C.set(W,G)},this.setSize=function(C,Y,ee=!0){if(ae.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}W=C,G=Y,t.width=Math.floor(C*ge),t.height=Math.floor(Y*ge),ee===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(W*ge,G*ge).floor()},this.setDrawingBufferSize=function(C,Y,ee){W=C,G=Y,ge=ee,t.width=Math.floor(C*ee),t.height=Math.floor(Y*ee),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(_===yt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(te)},this.setViewport=function(C,Y,ee,Q){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,Y,ee,Q),k.viewport(V.copy(te).multiplyScalar(ge).round())},this.getScissor=function(C){return C.copy(fe)},this.setScissor=function(C,Y,ee,Q){C.isVector4?fe.set(C.x,C.y,C.z,C.w):fe.set(C,Y,ee,Q),k.scissor(F.copy(fe).multiplyScalar(ge).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(C){k.setScissorTest(se=C)},this.setOpaqueSort=function(C){pe=C},this.setTransparentSort=function(C){ce=C},this.getClearColor=function(C){return C.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,ee=!0){let Q=0;if(C){let $=!1;if(U!==null){const xe=U.texture.format;$=c.has(xe)}if($){const xe=U.texture.type,ye=o.has(xe),be=we.getClearColor(),Ie=we.getClearAlpha(),Oe=be.r,ze=be.g,Xe=be.b;ye?(v[0]=Oe,v[1]=ze,v[2]=Xe,v[3]=Ie,h.clearBufferuiv(h.COLOR,0,v)):(T[0]=Oe,T[1]=ze,T[2]=Xe,T[3]=Ie,h.clearBufferiv(h.COLOR,0,T))}else Q|=h.COLOR_BUFFER_BIT}Y&&(Q|=h.DEPTH_BUFFER_BIT),ee&&(Q|=h.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&h.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),we.dispose(),Be.dispose(),le.dispose(),m.dispose(),q.dispose(),Ee.dispose(),me.dispose(),Ae.dispose(),_e.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Bi),ae.removeEventListener("sessionend",ki),Kt.stop()};function Ue(C){C.preventDefault(),Yi("WebGLRenderer: Context Lost."),X=!0}function He(){Yi("WebGLRenderer: Context Restored."),X=!1;const C=R.autoReset,Y=De.enabled,ee=De.autoUpdate,Q=De.needsUpdate,$=De.type;de(),R.autoReset=C,De.enabled=Y,De.autoUpdate=ee,De.needsUpdate=Q,De.type=$}function tt(C){it("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ze(C){const Y=C.target;Y.removeEventListener("dispose",Ze),Lt(Y)}function Lt(C){Ut(C),m.remove(C)}function Ut(C){const Y=m.get(C).programs;Y!==void 0&&(Y.forEach(function(ee){_e.releaseProgram(ee)}),C.isShaderMaterial&&_e.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ee,Q,$,xe){Y===null&&(Y=J);const ye=$.isMesh&&$.matrixWorld.determinant()<0,be=ao(C,Y,ee,Q,$);k.setMaterial(Q,ye);let Ie=ee.index,Oe=1;if(Q.wireframe===!0){if(Ie=j.getWireframeAttribute(ee),Ie===void 0)return;Oe=2}const ze=ee.drawRange,Xe=ee.attributes.position;let Fe=ze.start*Oe,je=(ze.start+ze.count)*Oe;xe!==null&&(Fe=Math.max(Fe,xe.start*Oe),je=Math.min(je,(xe.start+xe.count)*Oe)),Ie!==null?(Fe=Math.max(Fe,0),je=Math.min(je,Ie.count)):Xe!=null&&(Fe=Math.max(Fe,0),je=Math.min(je,Xe.count));const st=je-Fe;if(st<0||st===1/0)return;me.setup($,Q,be,ee,Ie);let ot,$e=Ve;if(Ie!==null&&(ot=ie.get(Ie),$e=z,$e.setIndex(ot)),$.isMesh)Q.wireframe===!0?(k.setLineWidth(Q.wireframeLinewidth*N()),$e.setMode(h.LINES)):$e.setMode(h.TRIANGLES);else if($.isLine){let pt=Q.linewidth;pt===void 0&&(pt=1),k.setLineWidth(pt*N()),$.isLineSegments?$e.setMode(h.LINES):$.isLineLoop?$e.setMode(h.LINE_LOOP):$e.setMode(h.LINE_STRIP)}else $.isPoints?$e.setMode(h.POINTS):$.isSprite&&$e.setMode(h.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)pa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))$e.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const pt=$._multiDrawStarts,Ne=$._multiDrawCounts,vt=$._multiDrawCount,Ye=Ie?ie.get(Ie).bytesPerElement:1,Mt=m.get(Q).currentProgram.getUniforms();for(let At=0;At<vt;At++)Mt.setValue(h,"_gl_DrawID",At),$e.render(pt[At]/Ye,Ne[At])}else if($.isInstancedMesh)$e.renderInstances(Fe,st,$.count);else if(ee.isInstancedBufferGeometry){const pt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ne=Math.min(ee.instanceCount,pt);$e.renderInstances(Fe,st,Ne)}else $e.render(Fe,st)};function Fi(C,Y,ee){C.transparent===!0&&C.side===It&&C.forceSinglePass===!1?(C.side=Et,C.needsUpdate=!0,Pn(C,Y,ee),C.side=Mn,C.needsUpdate=!0,Pn(C,Y,ee),C.side=It):Pn(C,Y,ee)}this.compile=function(C,Y,ee=null){ee===null&&(ee=C),P=le.get(ee),P.init(Y),L.push(P),ee.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),C!==ee&&C.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),P.setupLights();const Q=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const xe=$.material;if(xe)if(Array.isArray(xe))for(let ye=0;ye<xe.length;ye++){const be=xe[ye];Fi(be,ee,$),Q.add(be)}else Fi(xe,ee,$),Q.add(xe)}),P=L.pop(),Q},this.compileAsync=function(C,Y,ee=null){const Q=this.compile(C,Y,ee);return new Promise($=>{function xe(){if(Q.forEach(function(ye){m.get(ye).currentProgram.isReady()&&Q.delete(ye)}),Q.size===0){$(C);return}setTimeout(xe,10)}ne.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ei=null;function ro(C){ei&&ei(C)}function Bi(){Kt.stop()}function ki(){Kt.start()}const Kt=new Oa;Kt.setAnimationLoop(ro),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(C){ei=C,ae.setAnimationLoop(C),C===null?Kt.stop():Kt.start()},ae.addEventListener("sessionstart",Bi),ae.addEventListener("sessionend",ki),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;const ee=ae.enabled===!0&&ae.isPresenting===!0,Q=M!==null&&(U===null||ee)&&M.begin(A,U);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(Y),Y=ae.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,Y,U),P=le.get(C,L.length),P.init(Y),L.push(P),qe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Me.setFromProjectionMatrix(qe,Ki,Y.reversedDepth),Ce=this.localClippingEnabled,Re=he.init(this.clippingPlanes,Ce),w=Be.get(C,D.length),w.init(),D.push(w),ae.enabled===!0&&ae.isPresenting===!0){const ye=A.xr.getDepthSensingMesh();ye!==null&&ti(ye,Y,-1/0,A.sortObjects)}ti(C,Y,0,A.sortObjects),w.finish(),A.sortObjects===!0&&w.sort(pe,ce),K=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,K&&we.addToRenderList(w,C),this.info.render.frame++,Re===!0&&he.beginShadows();const $=P.state.shadowsArray;if(De.render($,C,Y),Re===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&M.hasRenderPass())===!1){const ye=w.opaque,be=w.transmissive;if(P.setupLights(),Y.isArrayCamera){const Ie=Y.cameras;if(be.length>0)for(let Oe=0,ze=Ie.length;Oe<ze;Oe++){const Xe=Ie[Oe];Hi(ye,be,C,Xe)}K&&we.render(C);for(let Oe=0,ze=Ie.length;Oe<ze;Oe++){const Xe=Ie[Oe];Gi(w,C,Xe,Xe.viewport)}}else be.length>0&&Hi(ye,be,C,Y),K&&we.render(C),Gi(w,C,Y)}U!==null&&y===0&&(I.updateMultisampleRenderTarget(U),I.updateRenderTargetMipmap(U)),Q&&M.end(A),C.isScene===!0&&C.onAfterRender(A,C,Y),me.resetDefaultState(),u=-1,O=null,L.pop(),L.length>0?(P=L[L.length-1],Re===!0&&he.setGlobalState(A.clippingPlanes,P.state.camera)):P=null,D.pop(),D.length>0?w=D[D.length-1]:w=null};function ti(C,Y,ee,Q){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Me.intersectsSprite(C)){Q&&p.setFromMatrixPosition(C.matrixWorld).applyMatrix4(qe);const ye=Ee.update(C),be=C.material;be.visible&&w.push(C,ye,be,ee,p.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Me.intersectsObject(C))){const ye=Ee.update(C),be=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),p.copy(C.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),p.copy(ye.boundingSphere.center)),p.applyMatrix4(C.matrixWorld).applyMatrix4(qe)),Array.isArray(be)){const Ie=ye.groups;for(let Oe=0,ze=Ie.length;Oe<ze;Oe++){const Xe=Ie[Oe],Fe=be[Xe.materialIndex];Fe&&Fe.visible&&w.push(C,ye,Fe,ee,p.z,Xe)}}else be.visible&&w.push(C,ye,be,ee,p.z,null)}}const xe=C.children;for(let ye=0,be=xe.length;ye<be;ye++)ti(xe[ye],Y,ee,Q)}function Gi(C,Y,ee,Q){const{opaque:$,transmissive:xe,transparent:ye}=C;P.setupLightsView(ee),Re===!0&&he.setGlobalState(A.clippingPlanes,ee),Q&&k.viewport(V.copy(Q)),$.length>0&&yn($,Y,ee),xe.length>0&&yn(xe,Y,ee),ye.length>0&&yn(ye,Y,ee),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Hi(C,Y,ee,Q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[Q.id]===void 0){const Fe=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[Q.id]=new Dt(1,1,{generateMipmaps:!0,type:Fe?Yt:yt,minFilter:on,samples:Math.max(4,re.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const xe=P.state.transmissionRenderTarget[Q.id],ye=Q.viewport||V;xe.setSize(ye.z*A.transmissionResolutionScale,ye.w*A.transmissionResolutionScale);const be=A.getRenderTarget(),Ie=A.getActiveCubeFace(),Oe=A.getActiveMipmapLevel();A.setRenderTarget(xe),A.getClearColor(Z),ue=A.getClearAlpha(),ue<1&&A.setClearColor(16777215,.5),A.clear(),K&&we.render(ee);const ze=A.toneMapping;A.toneMapping=Pt;const Xe=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),P.setupLightsView(Q),Re===!0&&he.setGlobalState(A.clippingPlanes,Q),yn(C,ee,Q),I.updateMultisampleRenderTarget(xe),I.updateRenderTargetMipmap(xe),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let je=0,st=Y.length;je<st;je++){const ot=Y[je],{object:$e,geometry:pt,material:Ne,group:vt}=ot;if(Ne.side===It&&$e.layers.test(Q.layers)){const Ye=Ne.side;Ne.side=Et,Ne.needsUpdate=!0,zi($e,ee,Q,pt,Ne,vt),Ne.side=Ye,Ne.needsUpdate=!0,Fe=!0}}Fe===!0&&(I.updateMultisampleRenderTarget(xe),I.updateRenderTargetMipmap(xe))}A.setRenderTarget(be,Ie,Oe),A.setClearColor(Z,ue),Xe!==void 0&&(Q.viewport=Xe),A.toneMapping=ze}function yn(C,Y,ee){const Q=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,xe=C.length;$<xe;$++){const ye=C[$],{object:be,geometry:Ie,group:Oe}=ye;let ze=ye.material;ze.allowOverride===!0&&Q!==null&&(ze=Q),be.layers.test(ee.layers)&&zi(be,Y,ee,Ie,ze,Oe)}}function zi(C,Y,ee,Q,$,xe){C.onBeforeRender(A,Y,ee,Q,$,xe),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(A,Y,ee,Q,C,xe),$.transparent===!0&&$.side===It&&$.forceSinglePass===!1?($.side=Et,$.needsUpdate=!0,A.renderBufferDirect(ee,Y,Q,$,C,xe),$.side=Mn,$.needsUpdate=!0,A.renderBufferDirect(ee,Y,Q,$,C,xe),$.side=It):A.renderBufferDirect(ee,Y,Q,$,C,xe),C.onAfterRender(A,Y,ee,Q,$,xe)}function Pn(C,Y,ee){Y.isScene!==!0&&(Y=J);const Q=m.get(C),$=P.state.lights,xe=P.state.shadowsArray,ye=$.state.version,be=_e.getParameters(C,$.state,xe,Y,ee),Ie=_e.getProgramCacheKey(be);let Oe=Q.programs;Q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,Q.fog=Y.fog;const ze=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Q.envMap=q.get(C.envMap||Q.environment,ze),Q.envMapRotation=Q.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,Oe===void 0&&(C.addEventListener("dispose",Ze),Oe=new Map,Q.programs=Oe);let Xe=Oe.get(Ie);if(Xe!==void 0){if(Q.currentProgram===Xe&&Q.lightsStateVersion===ye)return Wi(C,be),Xe}else be.uniforms=_e.getUniforms(C),C.onBeforeCompile(be,A),Xe=_e.acquireProgram(be,Ie),Oe.set(Ie,Xe),Q.uniforms=be.uniforms;const Fe=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Fe.clippingPlanes=he.uniform),Wi(C,be),Q.needsLights=so(C),Q.lightsStateVersion=ye,Q.needsLights&&(Fe.ambientLightColor.value=$.state.ambient,Fe.lightProbe.value=$.state.probe,Fe.directionalLights.value=$.state.directional,Fe.directionalLightShadows.value=$.state.directionalShadow,Fe.spotLights.value=$.state.spot,Fe.spotLightShadows.value=$.state.spotShadow,Fe.rectAreaLights.value=$.state.rectArea,Fe.ltc_1.value=$.state.rectAreaLTC1,Fe.ltc_2.value=$.state.rectAreaLTC2,Fe.pointLights.value=$.state.point,Fe.pointLightShadows.value=$.state.pointShadow,Fe.hemisphereLights.value=$.state.hemi,Fe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Fe.spotLightMatrix.value=$.state.spotLightMatrix,Fe.spotLightMap.value=$.state.spotLightMap,Fe.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=Xe,Q.uniformsList=null,Xe}function Vi(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Hn.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function Wi(C,Y){const ee=m.get(C);ee.outputColorSpace=Y.outputColorSpace,ee.batching=Y.batching,ee.batchingColor=Y.batchingColor,ee.instancing=Y.instancing,ee.instancingColor=Y.instancingColor,ee.instancingMorph=Y.instancingMorph,ee.skinning=Y.skinning,ee.morphTargets=Y.morphTargets,ee.morphNormals=Y.morphNormals,ee.morphColors=Y.morphColors,ee.morphTargetsCount=Y.morphTargetsCount,ee.numClippingPlanes=Y.numClippingPlanes,ee.numIntersection=Y.numClipIntersection,ee.vertexAlphas=Y.vertexAlphas,ee.vertexTangents=Y.vertexTangents,ee.toneMapping=Y.toneMapping}function ao(C,Y,ee,Q,$){Y.isScene!==!0&&(Y=J),I.resetTextureUnits();const xe=Y.fog,ye=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?Y.environment:null,be=U===null?A.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:jn,Ie=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Oe=q.get(Q.envMap||ye,Ie),ze=Q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Xe=!!ee.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Fe=!!ee.morphAttributes.position,je=!!ee.morphAttributes.normal,st=!!ee.morphAttributes.color;let ot=Pt;Q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ot=A.toneMapping);const $e=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,pt=$e!==void 0?$e.length:0,Ne=m.get(Q),vt=P.state.lights;if(Re===!0&&(Ce===!0||C!==O)){const dt=C===O&&Q.id===u;he.setState(Q,C,dt)}let Ye=!1;Q.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==vt.state.version||Ne.outputColorSpace!==be||$.isBatchedMesh&&Ne.batching===!1||!$.isBatchedMesh&&Ne.batching===!0||$.isBatchedMesh&&Ne.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ne.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ne.instancing===!1||!$.isInstancedMesh&&Ne.instancing===!0||$.isSkinnedMesh&&Ne.skinning===!1||!$.isSkinnedMesh&&Ne.skinning===!0||$.isInstancedMesh&&Ne.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ne.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ne.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ne.instancingMorph===!1&&$.morphTexture!==null||Ne.envMap!==Oe||Q.fog===!0&&Ne.fog!==xe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==he.numPlanes||Ne.numIntersection!==he.numIntersection)||Ne.vertexAlphas!==ze||Ne.vertexTangents!==Xe||Ne.morphTargets!==Fe||Ne.morphNormals!==je||Ne.morphColors!==st||Ne.toneMapping!==ot||Ne.morphTargetsCount!==pt)&&(Ye=!0):(Ye=!0,Ne.__version=Q.version);let Mt=Ne.currentProgram;Ye===!0&&(Mt=Pn(Q,Y,$));let At=!1,qt=!1,tn=!1;const Je=Mt.getUniforms(),ht=Ne.uniforms;if(k.useProgram(Mt.program)&&(At=!0,qt=!0,tn=!0),Q.id!==u&&(u=Q.id,qt=!0),At||O!==C){k.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Je.setValue(h,"projectionMatrix",C.projectionMatrix),Je.setValue(h,"viewMatrix",C.matrixWorldInverse);const Gt=Je.map.cameraPosition;Gt!==void 0&&Gt.setValue(h,Ge.setFromMatrixPosition(C.matrixWorld)),re.logarithmicDepthBuffer&&Je.setValue(h,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Je.setValue(h,"isOrthographic",C.isOrthographicCamera===!0),O!==C&&(O=C,qt=!0,tn=!0)}if(Ne.needsLights&&(vt.state.directionalShadowMap.length>0&&Je.setValue(h,"directionalShadowMap",vt.state.directionalShadowMap,I),vt.state.spotShadowMap.length>0&&Je.setValue(h,"spotShadowMap",vt.state.spotShadowMap,I),vt.state.pointShadowMap.length>0&&Je.setValue(h,"pointShadowMap",vt.state.pointShadowMap,I)),$.isSkinnedMesh){Je.setOptional(h,$,"bindMatrix"),Je.setOptional(h,$,"bindMatrixInverse");const dt=$.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),Je.setValue(h,"boneTexture",dt.boneTexture,I))}$.isBatchedMesh&&(Je.setOptional(h,$,"batchingTexture"),Je.setValue(h,"batchingTexture",$._matricesTexture,I),Je.setOptional(h,$,"batchingIdTexture"),Je.setValue(h,"batchingIdTexture",$._indirectTexture,I),Je.setOptional(h,$,"batchingColorTexture"),$._colorsTexture!==null&&Je.setValue(h,"batchingColorTexture",$._colorsTexture,I));const kt=ee.morphAttributes;if((kt.position!==void 0||kt.normal!==void 0||kt.color!==void 0)&&Te.update($,ee,Mt),(qt||Ne.receiveShadow!==$.receiveShadow)&&(Ne.receiveShadow=$.receiveShadow,Je.setValue(h,"receiveShadow",$.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&Y.environment!==null&&(ht.envMapIntensity.value=Y.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=yd()),qt&&(Je.setValue(h,"toneMappingExposure",A.toneMappingExposure),Ne.needsLights&&oo(ht,tn),xe&&Q.fog===!0&&Pe.refreshFogUniforms(ht,xe),Pe.refreshMaterialUniforms(ht,Q,ge,G,P.state.transmissionRenderTarget[C.id]),Hn.upload(h,Vi(Ne),ht,I)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Hn.upload(h,Vi(Ne),ht,I),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Je.setValue(h,"center",$.center),Je.setValue(h,"modelViewMatrix",$.modelViewMatrix),Je.setValue(h,"normalMatrix",$.normalMatrix),Je.setValue(h,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const dt=Q.uniformsGroups;for(let Gt=0,nn=dt.length;Gt<nn;Gt++){const Xi=dt[Gt];Ae.update(Xi,Mt),Ae.bind(Xi,Mt)}}return Mt}function oo(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function so(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(C,Y,ee){const Q=m.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),m.get(C.texture).__webglTexture=Y,m.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ee,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const ee=m.get(C);ee.__webglFramebuffer=Y,ee.__useDefaultFramebuffer=Y===void 0};const lo=h.createFramebuffer();this.setRenderTarget=function(C,Y=0,ee=0){U=C,B=Y,y=ee;let Q=null,$=!1,xe=!1;if(C){const be=m.get(C);if(be.__useDefaultFramebuffer!==void 0){k.bindFramebuffer(h.FRAMEBUFFER,be.__webglFramebuffer),V.copy(C.viewport),F.copy(C.scissor),oe=C.scissorTest,k.viewport(V),k.scissor(F),k.setScissorTest(oe),u=-1;return}else if(be.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(be.__hasExternalTextures)I.rebindTextures(C,m.get(C.texture).__webglTexture,m.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ze=C.depthTexture;if(be.__boundDepthTexture!==ze){if(ze!==null&&m.has(ze)&&(C.width!==ze.image.width||C.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}const Ie=C.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(xe=!0);const Oe=m.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Oe[Y])?Q=Oe[Y][ee]:Q=Oe[Y],$=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?Q=m.get(C).__webglMultisampledFramebuffer:Array.isArray(Oe)?Q=Oe[ee]:Q=Oe,V.copy(C.viewport),F.copy(C.scissor),oe=C.scissorTest}else V.copy(te).multiplyScalar(ge).floor(),F.copy(fe).multiplyScalar(ge).floor(),oe=se;if(ee!==0&&(Q=lo),k.bindFramebuffer(h.FRAMEBUFFER,Q)&&k.drawBuffers(C,Q),k.viewport(V),k.scissor(F),k.setScissorTest(oe),$){const be=m.get(C.texture);h.framebufferTexture2D(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_CUBE_MAP_POSITIVE_X+Y,be.__webglTexture,ee)}else if(xe){const be=Y;for(let Ie=0;Ie<C.textures.length;Ie++){const Oe=m.get(C.textures[Ie]);h.framebufferTextureLayer(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0+Ie,Oe.__webglTexture,ee,be)}}else if(C!==null&&ee!==0){const be=m.get(C.texture);h.framebufferTexture2D(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,be.__webglTexture,ee)}u=-1},this.readRenderTargetPixels=function(C,Y,ee,Q,$,xe,ye,be=0){if(!(C&&C.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=m.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ye!==void 0&&(Ie=Ie[ye]),Ie){k.bindFramebuffer(h.FRAMEBUFFER,Ie);try{const Oe=C.textures[be],ze=Oe.format,Xe=Oe.type;if(C.textures.length>1&&h.readBuffer(h.COLOR_ATTACHMENT0+be),!re.textureFormatReadable(ze)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Xe)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-Q&&ee>=0&&ee<=C.height-$&&h.readPixels(Y,ee,Q,$,ve.convert(ze),ve.convert(Xe),xe)}finally{const Oe=U!==null?m.get(U).__webglFramebuffer:null;k.bindFramebuffer(h.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(C,Y,ee,Q,$,xe,ye,be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=m.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ye!==void 0&&(Ie=Ie[ye]),Ie)if(Y>=0&&Y<=C.width-Q&&ee>=0&&ee<=C.height-$){k.bindFramebuffer(h.FRAMEBUFFER,Ie);const Oe=C.textures[be],ze=Oe.format,Xe=Oe.type;if(C.textures.length>1&&h.readBuffer(h.COLOR_ATTACHMENT0+be),!re.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=h.createBuffer();h.bindBuffer(h.PIXEL_PACK_BUFFER,Fe),h.bufferData(h.PIXEL_PACK_BUFFER,xe.byteLength,h.STREAM_READ),h.readPixels(Y,ee,Q,$,ve.convert(ze),ve.convert(Xe),0);const je=U!==null?m.get(U).__webglFramebuffer:null;k.bindFramebuffer(h.FRAMEBUFFER,je);const st=h.fenceSync(h.SYNC_GPU_COMMANDS_COMPLETE,0);return h.flush(),await po(h,st,4),h.bindBuffer(h.PIXEL_PACK_BUFFER,Fe),h.getBufferSubData(h.PIXEL_PACK_BUFFER,0,xe),h.deleteBuffer(Fe),h.deleteSync(st),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,ee=0){const Q=Math.pow(2,-ee),$=Math.floor(C.image.width*Q),xe=Math.floor(C.image.height*Q),ye=Y!==null?Y.x:0,be=Y!==null?Y.y:0;I.setTexture2D(C,0),h.copyTexSubImage2D(h.TEXTURE_2D,ee,0,0,ye,be,$,xe),k.unbindTexture()};const co=h.createFramebuffer(),fo=h.createFramebuffer();this.copyTextureToTexture=function(C,Y,ee=null,Q=null,$=0,xe=0){let ye,be,Ie,Oe,ze,Xe,Fe,je,st;const ot=C.isCompressedTexture?C.mipmaps[xe]:C.image;if(ee!==null)ye=ee.max.x-ee.min.x,be=ee.max.y-ee.min.y,Ie=ee.isBox3?ee.max.z-ee.min.z:1,Oe=ee.min.x,ze=ee.min.y,Xe=ee.isBox3?ee.min.z:0;else{const ht=Math.pow(2,-$);ye=Math.floor(ot.width*ht),be=Math.floor(ot.height*ht),C.isDataArrayTexture?Ie=ot.depth:C.isData3DTexture?Ie=Math.floor(ot.depth*ht):Ie=1,Oe=0,ze=0,Xe=0}Q!==null?(Fe=Q.x,je=Q.y,st=Q.z):(Fe=0,je=0,st=0);const $e=ve.convert(Y.format),pt=ve.convert(Y.type);let Ne;Y.isData3DTexture?(I.setTexture3D(Y,0),Ne=h.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(I.setTexture2DArray(Y,0),Ne=h.TEXTURE_2D_ARRAY):(I.setTexture2D(Y,0),Ne=h.TEXTURE_2D),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,Y.flipY),h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),h.pixelStorei(h.UNPACK_ALIGNMENT,Y.unpackAlignment);const vt=h.getParameter(h.UNPACK_ROW_LENGTH),Ye=h.getParameter(h.UNPACK_IMAGE_HEIGHT),Mt=h.getParameter(h.UNPACK_SKIP_PIXELS),At=h.getParameter(h.UNPACK_SKIP_ROWS),qt=h.getParameter(h.UNPACK_SKIP_IMAGES);h.pixelStorei(h.UNPACK_ROW_LENGTH,ot.width),h.pixelStorei(h.UNPACK_IMAGE_HEIGHT,ot.height),h.pixelStorei(h.UNPACK_SKIP_PIXELS,Oe),h.pixelStorei(h.UNPACK_SKIP_ROWS,ze),h.pixelStorei(h.UNPACK_SKIP_IMAGES,Xe);const tn=C.isDataArrayTexture||C.isData3DTexture,Je=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const ht=m.get(C),kt=m.get(Y),dt=m.get(ht.__renderTarget),Gt=m.get(kt.__renderTarget);k.bindFramebuffer(h.READ_FRAMEBUFFER,dt.__webglFramebuffer),k.bindFramebuffer(h.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let nn=0;nn<Ie;nn++)tn&&(h.framebufferTextureLayer(h.READ_FRAMEBUFFER,h.COLOR_ATTACHMENT0,m.get(C).__webglTexture,$,Xe+nn),h.framebufferTextureLayer(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0,m.get(Y).__webglTexture,xe,st+nn)),h.blitFramebuffer(Oe,ze,ye,be,Fe,je,ye,be,h.DEPTH_BUFFER_BIT,h.NEAREST);k.bindFramebuffer(h.READ_FRAMEBUFFER,null),k.bindFramebuffer(h.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||m.has(C)){const ht=m.get(C),kt=m.get(Y);k.bindFramebuffer(h.READ_FRAMEBUFFER,co),k.bindFramebuffer(h.DRAW_FRAMEBUFFER,fo);for(let dt=0;dt<Ie;dt++)tn?h.framebufferTextureLayer(h.READ_FRAMEBUFFER,h.COLOR_ATTACHMENT0,ht.__webglTexture,$,Xe+dt):h.framebufferTexture2D(h.READ_FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,ht.__webglTexture,$),Je?h.framebufferTextureLayer(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0,kt.__webglTexture,xe,st+dt):h.framebufferTexture2D(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,kt.__webglTexture,xe),$!==0?h.blitFramebuffer(Oe,ze,ye,be,Fe,je,ye,be,h.COLOR_BUFFER_BIT,h.NEAREST):Je?h.copyTexSubImage3D(Ne,xe,Fe,je,st+dt,Oe,ze,ye,be):h.copyTexSubImage2D(Ne,xe,Fe,je,Oe,ze,ye,be);k.bindFramebuffer(h.READ_FRAMEBUFFER,null),k.bindFramebuffer(h.DRAW_FRAMEBUFFER,null)}else Je?C.isDataTexture||C.isData3DTexture?h.texSubImage3D(Ne,xe,Fe,je,st,ye,be,Ie,$e,pt,ot.data):Y.isCompressedArrayTexture?h.compressedTexSubImage3D(Ne,xe,Fe,je,st,ye,be,Ie,$e,ot.data):h.texSubImage3D(Ne,xe,Fe,je,st,ye,be,Ie,$e,pt,ot):C.isDataTexture?h.texSubImage2D(h.TEXTURE_2D,xe,Fe,je,ye,be,$e,pt,ot.data):C.isCompressedTexture?h.compressedTexSubImage2D(h.TEXTURE_2D,xe,Fe,je,ot.width,ot.height,$e,ot.data):h.texSubImage2D(h.TEXTURE_2D,xe,Fe,je,ye,be,$e,pt,ot);h.pixelStorei(h.UNPACK_ROW_LENGTH,vt),h.pixelStorei(h.UNPACK_IMAGE_HEIGHT,Ye),h.pixelStorei(h.UNPACK_SKIP_PIXELS,Mt),h.pixelStorei(h.UNPACK_SKIP_ROWS,At),h.pixelStorei(h.UNPACK_SKIP_IMAGES,qt),xe===0&&Y.generateMipmaps&&h.generateMipmap(Ne),k.unbindTexture()},this.initRenderTarget=function(C){m.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),k.unbindTexture()},this.resetState=function(){B=0,y=0,U=null,k.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(n),t.unpackColorSpace=lt._getUnpackColorSpace()}}function Dd(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),s=new Set(Object.keys(e[0].morphAttributes)),r={},a={},l=e[0].morphTargetsRelative,g=new pn;let E=0;for(let b=0;b<e.length;++b){const x=e[b];let d=0;if(t!==(x.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in x.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(x.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". Make sure all geometries have the same number of attributes."),null;if(l!==x.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in x.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(x.morphAttributes[f])}if(n){let f;if(t)f=x.index.count;else if(x.attributes.position!==void 0)f=x.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". The geometry must have either an index or a position attribute"),null;g.addGroup(E,f,b),E+=f}}if(t){let b=0;const x=[];for(let d=0;d<e.length;++d){const f=e[d].index;for(let S=0;S<f.count;++S)x.push(f.getX(S)+b);b+=e[d].attributes.position.count}g.setIndex(x)}for(const b in r){const x=ia(r[b]);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+b+" attribute."),null;g.setAttribute(b,x)}for(const b in a){const x=a[b][0].length;if(x===0)break;g.morphAttributes=g.morphAttributes||{},g.morphAttributes[b]=[];for(let d=0;d<x;++d){const f=[];for(let _=0;_<a[b].length;++_)f.push(a[b][_][d]);const S=ia(f);if(!S)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+b+" morphAttribute."),null;g.morphAttributes[b].push(S)}}return g}function ia(e){let n,t,i,s=-1,r=0;for(let E=0;E<e.length;++E){const b=e[E];if(n===void 0&&(n=b.array.constructor),n!==b.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=b.itemSize),t!==b.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=b.normalized),i!==b.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=b.gpuType),s!==b.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=b.count*t}const a=new n(r),l=new bn(a,t,i);let g=0;for(let E=0;E<e.length;++E){const b=e[E];if(b.isInterleavedBufferAttribute){const x=g/t;for(let d=0,f=b.count;d<f;d++)for(let S=0;S<t;S++){const _=b.getComponent(d,S);l.setComponent(d+x,S,_)}}else a.set(b.array,g);g+=b.count*t}return s!==void 0&&(l.gpuType=s),l}const Ld={north:[6,4,0,2],east:[7,5,4,6],south:[3,1,5,7],west:[2,0,1,3],up:[2,3,7,6],down:[1,0,4,5]},Ud=[0,1,2,0,2,3],Id=new ke(-.52,.7,-.55).normalize(),ra={x:new ke(1,0,0),y:new ke(0,1,0),z:new ke(0,0,1)};function za(e,n){const t=new Set;for(;n?.startsWith("#");){if(t.has(n))throw new Error(`Circular texture reference: ${n}`);t.add(n),n=e[n.slice(1)]}if(!n)throw new Error("Model has an unresolved texture.");return n.replace(/^minecraft:/,"")}function Nd(e,n,t){const{from:i,to:s,rotation:r}=e,a=new ke(...r?.origin??[8,8,8]),l=new Mi;if(r?.axis)l.setFromAxisAngle(ra[r.axis],Wt.degToRad(r.angle));else if(r){const P=[r.x??0,r.y??0,r.z??0].map(Wt.degToRad);l.setFromEuler(new Ui(...P,"ZYX"))}const g=new ke(1,1,1);if(r?.rescale)for(const[P,D]of Object.entries(ra)){const L=D.clone().applyQuaternion(l);g[P]=1/Math.max(Math.abs(L.x),Math.abs(L.y),Math.abs(L.z))}const E=Ld[n].map(P=>new ke((P&4?s:i)[0],(P&2?s:i)[1],(P&1?s:i)[2]).sub(a).multiply(g).applyQuaternion(l).add(a)),[b,x,d,f]=t.uv??Od(i,s,n),S=[[b,x],[b,f],[d,f],[d,x]],_=Wt.euclideanModulo((t.rotation??0)/90,4),c=E.flatMap((P,D)=>{const[L,M]=S[(D+_)%4];return[L/16,1-M/16]}),o=E[1].clone().sub(E[0]).cross(E[2].clone().sub(E[0])).normalize(),v=Math.max(0,o.dot(Id)),T=e.shade===!1?1:.61+.39*v,w=new pn;return w.setAttribute("position",new xn(E.flatMap(P=>P.toArray()),3)),w.setAttribute("uv",new xn(c,2)),w.setAttribute("color",new xn(Array(12).fill(T),3)),w.setIndex(Ud),w}function Od([e,n,t],[i,s,r],a){return{north:[16-i,16-s,16-e,16-n],east:[16-r,16-s,16-t,16-n],south:[e,16-s,i,16-n],west:[t,16-s,r,16-n],up:[e,t,i,r],down:[e,16-r,i,16-t]}[a]}function Fd({data:e,width:n,height:t},i){const s=i.attributes.uv,r=Array.from({length:4},(l,g)=>s.getX(g)*n),a=Array.from({length:4},(l,g)=>(1-s.getY(g))*t);for(let l=Math.floor(Math.min(...a));l<Math.ceil(Math.max(...a));l+=1)for(let g=Math.floor(Math.min(...r));g<Math.ceil(Math.max(...r));g+=1){const E=e[(l*n+g)*4+3];if(E>0&&E<255)return!0}return!1}function Bd(e,n,t){const i=e.attributes.uv,s=(i.getX(0)+i.getX(2))/2,r=(i.getY(0)+i.getY(2))/2;for(let a=0;a<i.count;a+=1)i.setXY(a,Wt.lerp(i.getX(a),s,1/(n*32)),Wt.lerp(i.getY(a),r,1/(t*32)))}function kd(e,n){const t=new Ia,i=new Map;for(const s of e.elements)for(const[r,a]of Object.entries(s.faces)){const l=za(e.textures,a.texture);i.has(l)||i.set(l,[]),i.get(l).push(Nd(s,r,a))}for(const[s,r]of i){const a=n.get(s),l=a.getContext("2d").getImageData(0,0,a.width,a.height),g=new Na(a);g.colorSpace=da,g.magFilter=Ot,g.minFilter=Ot,g.generateMipmaps=!1,r.forEach(x=>Bd(x,a.width,a.height));const E=new Kn({map:g,vertexColors:!0,alphaTest:254.5/255});t.add(new xt(Dd(r),E));let b;for(const x of r){if(!Fd(l,x)){x.dispose();continue}b||(b=new Kn({map:g,vertexColors:!0,transparent:!0,depthWrite:!1,alphaTest:.5/255}),b.onBeforeCompile=S=>{S.fragmentShader=S.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
if (diffuseColor.a >= 0.9980392) discard;`)}),x.computeBoundingBox();const d=x.boundingBox.getCenter(new ke);x.translate(-d.x,-d.y,-d.z);const f=new xt(x,b);f.position.copy(d),t.add(f)}}return t}function Gd(e){const n=new Set,t=new Set;for(const i of e.children)i.geometry.dispose(),n.add(i.material),t.add(i.material.map);n.forEach(i=>i.dispose()),t.forEach(i=>i.dispose())}var In=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Nn(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var _i={exports:{}};var aa;function zd(){return aa||(aa=1,(function(e,n){(function(t){e.exports=t()})(function(){return(function t(i,s,r){function a(E,b){if(!s[E]){if(!i[E]){var x=typeof Nn=="function"&&Nn;if(!b&&x)return x(E,!0);if(l)return l(E,!0);var d=new Error("Cannot find module '"+E+"'");throw d.code="MODULE_NOT_FOUND",d}var f=s[E]={exports:{}};i[E][0].call(f.exports,function(S){var _=i[E][1][S];return a(_||S)},f,f.exports,t,i,s,r)}return s[E].exports}for(var l=typeof Nn=="function"&&Nn,g=0;g<r.length;g++)a(r[g]);return a})({1:[function(t,i,s){var r=t("./utils"),a=t("./support"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";s.encode=function(g){for(var E,b,x,d,f,S,_,c=[],o=0,v=g.length,T=v,w=r.getTypeOf(g)!=="string";o<g.length;)T=v-o,x=w?(E=g[o++],b=o<v?g[o++]:0,o<v?g[o++]:0):(E=g.charCodeAt(o++),b=o<v?g.charCodeAt(o++):0,o<v?g.charCodeAt(o++):0),d=E>>2,f=(3&E)<<4|b>>4,S=1<T?(15&b)<<2|x>>6:64,_=2<T?63&x:64,c.push(l.charAt(d)+l.charAt(f)+l.charAt(S)+l.charAt(_));return c.join("")},s.decode=function(g){var E,b,x,d,f,S,_=0,c=0,o="data:";if(g.substr(0,o.length)===o)throw new Error("Invalid base64 input, it looks like a data url.");var v,T=3*(g=g.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(g.charAt(g.length-1)===l.charAt(64)&&T--,g.charAt(g.length-2)===l.charAt(64)&&T--,T%1!=0)throw new Error("Invalid base64 input, bad content length.");for(v=a.uint8array?new Uint8Array(0|T):new Array(0|T);_<g.length;)E=l.indexOf(g.charAt(_++))<<2|(d=l.indexOf(g.charAt(_++)))>>4,b=(15&d)<<4|(f=l.indexOf(g.charAt(_++)))>>2,x=(3&f)<<6|(S=l.indexOf(g.charAt(_++))),v[c++]=E,f!==64&&(v[c++]=b),S!==64&&(v[c++]=x);return v}},{"./support":30,"./utils":32}],2:[function(t,i,s){var r=t("./external"),a=t("./stream/DataWorker"),l=t("./stream/Crc32Probe"),g=t("./stream/DataLengthProbe");function E(b,x,d,f,S){this.compressedSize=b,this.uncompressedSize=x,this.crc32=d,this.compression=f,this.compressedContent=S}E.prototype={getContentWorker:function(){var b=new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new g("data_length")),x=this;return b.on("end",function(){if(this.streamInfo.data_length!==x.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),b},getCompressedWorker:function(){return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},E.createWorkerFrom=function(b,x,d){return b.pipe(new l).pipe(new g("uncompressedSize")).pipe(x.compressWorker(d)).pipe(new g("compressedSize")).withStreamInfo("compression",x)},i.exports=E},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,i,s){var r=t("./stream/GenericWorker");s.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},s.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,i,s){var r=t("./utils"),a=(function(){for(var l,g=[],E=0;E<256;E++){l=E;for(var b=0;b<8;b++)l=1&l?3988292384^l>>>1:l>>>1;g[E]=l}return g})();i.exports=function(l,g){return l!==void 0&&l.length?r.getTypeOf(l)!=="string"?(function(E,b,x,d){var f=a,S=d+x;E^=-1;for(var _=d;_<S;_++)E=E>>>8^f[255&(E^b[_])];return-1^E})(0|g,l,l.length,0):(function(E,b,x,d){var f=a,S=d+x;E^=-1;for(var _=d;_<S;_++)E=E>>>8^f[255&(E^b.charCodeAt(_))];return-1^E})(0|g,l,l.length,0):0}},{"./utils":32}],5:[function(t,i,s){s.base64=!1,s.binary=!1,s.dir=!1,s.createFolders=!0,s.date=null,s.compression=null,s.compressionOptions=null,s.comment=null,s.unixPermissions=null,s.dosPermissions=null},{}],6:[function(t,i,s){var r=null;r=typeof Promise<"u"?Promise:t("lie"),i.exports={Promise:r}},{lie:37}],7:[function(t,i,s){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=t("pako"),l=t("./utils"),g=t("./stream/GenericWorker"),E=r?"uint8array":"array";function b(x,d){g.call(this,"FlateWorker/"+x),this._pako=null,this._pakoAction=x,this._pakoOptions=d,this.meta={}}s.magic="\b\0",l.inherits(b,g),b.prototype.processChunk=function(x){this.meta=x.meta,this._pako===null&&this._createPako(),this._pako.push(l.transformTo(E,x.data),!1)},b.prototype.flush=function(){g.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},b.prototype.cleanUp=function(){g.prototype.cleanUp.call(this),this._pako=null},b.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var x=this;this._pako.onData=function(d){x.push({data:d,meta:x.meta})}},s.compressWorker=function(x){return new b("Deflate",x)},s.uncompressWorker=function(){return new b("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,i,s){function r(f,S){var _,c="";for(_=0;_<S;_++)c+=String.fromCharCode(255&f),f>>>=8;return c}function a(f,S,_,c,o,v){var T,w,P=f.file,D=f.compression,L=v!==E.utf8encode,M=l.transformTo("string",v(P.name)),A=l.transformTo("string",E.utf8encode(P.name)),X=P.comment,B=l.transformTo("string",v(X)),y=l.transformTo("string",E.utf8encode(X)),U=A.length!==P.name.length,u=y.length!==X.length,O="",V="",F="",oe=P.dir,Z=P.date,ue={crc32:0,compressedSize:0,uncompressedSize:0};S&&!_||(ue.crc32=f.crc32,ue.compressedSize=f.compressedSize,ue.uncompressedSize=f.uncompressedSize);var W=0;S&&(W|=8),L||!U&&!u||(W|=2048);var G=0,ge=0;oe&&(G|=16),o==="UNIX"?(ge=798,G|=(function(ce,te){var fe=ce;return ce||(fe=te?16893:33204),(65535&fe)<<16})(P.unixPermissions,oe)):(ge=20,G|=(function(ce){return 63&(ce||0)})(P.dosPermissions)),T=Z.getUTCHours(),T<<=6,T|=Z.getUTCMinutes(),T<<=5,T|=Z.getUTCSeconds()/2,w=Z.getUTCFullYear()-1980,w<<=4,w|=Z.getUTCMonth()+1,w<<=5,w|=Z.getUTCDate(),U&&(V=r(1,1)+r(b(M),4)+A,O+="up"+r(V.length,2)+V),u&&(F=r(1,1)+r(b(B),4)+y,O+="uc"+r(F.length,2)+F);var pe="";return pe+=`
\0`,pe+=r(W,2),pe+=D.magic,pe+=r(T,2),pe+=r(w,2),pe+=r(ue.crc32,4),pe+=r(ue.compressedSize,4),pe+=r(ue.uncompressedSize,4),pe+=r(M.length,2),pe+=r(O.length,2),{fileRecord:x.LOCAL_FILE_HEADER+pe+M+O,dirRecord:x.CENTRAL_FILE_HEADER+r(ge,2)+pe+r(B.length,2)+"\0\0\0\0"+r(G,4)+r(c,4)+M+O+B}}var l=t("../utils"),g=t("../stream/GenericWorker"),E=t("../utf8"),b=t("../crc32"),x=t("../signature");function d(f,S,_,c){g.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=S,this.zipPlatform=_,this.encodeFileName=c,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}l.inherits(d,g),d.prototype.push=function(f){var S=f.meta.percent||0,_=this.entriesCount,c=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,g.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:_?(S+100*(_-c-1))/_:100}}))},d.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var S=this.streamFiles&&!f.file.dir;if(S){var _=a(f,S,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:_.fileRecord,meta:{percent:0}})}else this.accumulate=!0},d.prototype.closedSource=function(f){this.accumulate=!1;var S=this.streamFiles&&!f.file.dir,_=a(f,S,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(_.dirRecord),S)this.push({data:(function(c){return x.DATA_DESCRIPTOR+r(c.crc32,4)+r(c.compressedSize,4)+r(c.uncompressedSize,4)})(f),meta:{percent:100}});else for(this.push({data:_.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},d.prototype.flush=function(){for(var f=this.bytesWritten,S=0;S<this.dirRecords.length;S++)this.push({data:this.dirRecords[S],meta:{percent:100}});var _=this.bytesWritten-f,c=(function(o,v,T,w,P){var D=l.transformTo("string",P(w));return x.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(o,2)+r(o,2)+r(v,4)+r(T,4)+r(D.length,2)+D})(this.dirRecords.length,_,f,this.zipComment,this.encodeFileName);this.push({data:c,meta:{percent:100}})},d.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},d.prototype.registerPrevious=function(f){this._sources.push(f);var S=this;return f.on("data",function(_){S.processChunk(_)}),f.on("end",function(){S.closedSource(S.previous.streamInfo),S._sources.length?S.prepareNextSource():S.end()}),f.on("error",function(_){S.error(_)}),this},d.prototype.resume=function(){return!!g.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},d.prototype.error=function(f){var S=this._sources;if(!g.prototype.error.call(this,f))return!1;for(var _=0;_<S.length;_++)try{S[_].error(f)}catch{}return!0},d.prototype.lock=function(){g.prototype.lock.call(this);for(var f=this._sources,S=0;S<f.length;S++)f[S].lock()},i.exports=d},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,i,s){var r=t("../compressions"),a=t("./ZipFileWorker");s.generateWorker=function(l,g,E){var b=new a(g.streamFiles,E,g.platform,g.encodeFileName),x=0;try{l.forEach(function(d,f){x++;var S=(function(v,T){var w=v||T,P=r[w];if(!P)throw new Error(w+" is not a valid compression method !");return P})(f.options.compression,g.compression),_=f.options.compressionOptions||g.compressionOptions||{},c=f.dir,o=f.date;f._compressWorker(S,_).withStreamInfo("file",{name:d,dir:c,date:o,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(b)}),b.entriesCount=x}catch(d){b.error(d)}return b}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,i,s){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new r;for(var l in this)typeof this[l]!="function"&&(a[l]=this[l]);return a}}(r.prototype=t("./object")).loadAsync=t("./load"),r.support=t("./support"),r.defaults=t("./defaults"),r.version="3.10.1",r.loadAsync=function(a,l){return new r().loadAsync(a,l)},r.external=t("./external"),i.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,i,s){var r=t("./utils"),a=t("./external"),l=t("./utf8"),g=t("./zipEntries"),E=t("./stream/Crc32Probe"),b=t("./nodejsUtils");function x(d){return new a.Promise(function(f,S){var _=d.decompressed.getContentWorker().pipe(new E);_.on("error",function(c){S(c)}).on("end",function(){_.streamInfo.crc32!==d.decompressed.crc32?S(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}i.exports=function(d,f){var S=this;return f=r.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:l.utf8decode}),b.isNode&&b.isStream(d)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",d,!0,f.optimizedBinaryString,f.base64).then(function(_){var c=new g(f);return c.load(_),c}).then(function(_){var c=[a.Promise.resolve(_)],o=_.files;if(f.checkCRC32)for(var v=0;v<o.length;v++)c.push(x(o[v]));return a.Promise.all(c)}).then(function(_){for(var c=_.shift(),o=c.files,v=0;v<o.length;v++){var T=o[v],w=T.fileNameStr,P=r.resolve(T.fileNameStr);S.file(P,T.decompressed,{binary:!0,optimizedBinaryString:!0,date:T.date,dir:T.dir,comment:T.fileCommentStr.length?T.fileCommentStr:null,unixPermissions:T.unixPermissions,dosPermissions:T.dosPermissions,createFolders:f.createFolders}),T.dir||(S.file(P).unsafeOriginalName=w)}return c.zipComment.length&&(S.comment=c.zipComment),S})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,i,s){var r=t("../utils"),a=t("../stream/GenericWorker");function l(g,E){a.call(this,"Nodejs stream input adapter for "+g),this._upstreamEnded=!1,this._bindStream(E)}r.inherits(l,a),l.prototype._bindStream=function(g){var E=this;(this._stream=g).pause(),g.on("data",function(b){E.push({data:b,meta:{percent:0}})}).on("error",function(b){E.isPaused?this.generatedError=b:E.error(b)}).on("end",function(){E.isPaused?E._upstreamEnded=!0:E.end()})},l.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},l.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=l},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,i,s){var r=t("readable-stream").Readable;function a(l,g,E){r.call(this,g),this._helper=l;var b=this;l.on("data",function(x,d){b.push(x)||b._helper.pause(),E&&E(d)}).on("error",function(x){b.emit("error",x)}).on("end",function(){b.push(null)})}t("../utils").inherits(a,r),a.prototype._read=function(){this._helper.resume()},i.exports=a},{"../utils":32,"readable-stream":16}],14:[function(t,i,s){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,a);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,a)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var a=new Buffer(r);return a.fill(0),a},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(t,i,s){function r(P,D,L){var M,A=l.getTypeOf(D),X=l.extend(L||{},b);X.date=X.date||new Date,X.compression!==null&&(X.compression=X.compression.toUpperCase()),typeof X.unixPermissions=="string"&&(X.unixPermissions=parseInt(X.unixPermissions,8)),X.unixPermissions&&16384&X.unixPermissions&&(X.dir=!0),X.dosPermissions&&16&X.dosPermissions&&(X.dir=!0),X.dir&&(P=o(P)),X.createFolders&&(M=c(P))&&v.call(this,M,!0);var B=A==="string"&&X.binary===!1&&X.base64===!1;L&&L.binary!==void 0||(X.binary=!B),(D instanceof x&&D.uncompressedSize===0||X.dir||!D||D.length===0)&&(X.base64=!1,X.binary=!0,D="",X.compression="STORE",A="string");var y=null;y=D instanceof x||D instanceof g?D:S.isNode&&S.isStream(D)?new _(P,D):l.prepareContent(P,D,X.binary,X.optimizedBinaryString,X.base64);var U=new d(P,y,X);this.files[P]=U}var a=t("./utf8"),l=t("./utils"),g=t("./stream/GenericWorker"),E=t("./stream/StreamHelper"),b=t("./defaults"),x=t("./compressedObject"),d=t("./zipObject"),f=t("./generate"),S=t("./nodejsUtils"),_=t("./nodejs/NodejsStreamInputAdapter"),c=function(P){P.slice(-1)==="/"&&(P=P.substring(0,P.length-1));var D=P.lastIndexOf("/");return 0<D?P.substring(0,D):""},o=function(P){return P.slice(-1)!=="/"&&(P+="/"),P},v=function(P,D){return D=D!==void 0?D:b.createFolders,P=o(P),this.files[P]||r.call(this,P,null,{dir:!0,createFolders:D}),this.files[P]};function T(P){return Object.prototype.toString.call(P)==="[object RegExp]"}var w={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(P){var D,L,M;for(D in this.files)M=this.files[D],(L=D.slice(this.root.length,D.length))&&D.slice(0,this.root.length)===this.root&&P(L,M)},filter:function(P){var D=[];return this.forEach(function(L,M){P(L,M)&&D.push(M)}),D},file:function(P,D,L){if(arguments.length!==1)return P=this.root+P,r.call(this,P,D,L),this;if(T(P)){var M=P;return this.filter(function(X,B){return!B.dir&&M.test(X)})}var A=this.files[this.root+P];return A&&!A.dir?A:null},folder:function(P){if(!P)return this;if(T(P))return this.filter(function(A,X){return X.dir&&P.test(A)});var D=this.root+P,L=v.call(this,D),M=this.clone();return M.root=L.name,M},remove:function(P){P=this.root+P;var D=this.files[P];if(D||(P.slice(-1)!=="/"&&(P+="/"),D=this.files[P]),D&&!D.dir)delete this.files[P];else for(var L=this.filter(function(A,X){return X.name.slice(0,P.length)===P}),M=0;M<L.length;M++)delete this.files[L[M].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(P){var D,L={};try{if((L=l.extend(P||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=L.type.toLowerCase(),L.compression=L.compression.toUpperCase(),L.type==="binarystring"&&(L.type="string"),!L.type)throw new Error("No output type specified.");l.checkSupport(L.type),L.platform!=="darwin"&&L.platform!=="freebsd"&&L.platform!=="linux"&&L.platform!=="sunos"||(L.platform="UNIX"),L.platform==="win32"&&(L.platform="DOS");var M=L.comment||this.comment||"";D=f.generateWorker(this,L,M)}catch(A){(D=new g("error")).error(A)}return new E(D,L.type||"string",L.mimeType)},generateAsync:function(P,D){return this.generateInternalStream(P).accumulate(D)},generateNodeStream:function(P,D){return(P=P||{}).type||(P.type="nodebuffer"),this.generateInternalStream(P).toNodejsStream(D)}};i.exports=w},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,i,s){i.exports=t("stream")},{stream:void 0}],17:[function(t,i,s){var r=t("./DataReader");function a(l){r.call(this,l);for(var g=0;g<this.data.length;g++)l[g]=255&l[g]}t("../utils").inherits(a,r),a.prototype.byteAt=function(l){return this.data[this.zero+l]},a.prototype.lastIndexOfSignature=function(l){for(var g=l.charCodeAt(0),E=l.charCodeAt(1),b=l.charCodeAt(2),x=l.charCodeAt(3),d=this.length-4;0<=d;--d)if(this.data[d]===g&&this.data[d+1]===E&&this.data[d+2]===b&&this.data[d+3]===x)return d-this.zero;return-1},a.prototype.readAndCheckSignature=function(l){var g=l.charCodeAt(0),E=l.charCodeAt(1),b=l.charCodeAt(2),x=l.charCodeAt(3),d=this.readData(4);return g===d[0]&&E===d[1]&&b===d[2]&&x===d[3]},a.prototype.readData=function(l){if(this.checkOffset(l),l===0)return[];var g=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,g},i.exports=a},{"../utils":32,"./DataReader":18}],18:[function(t,i,s){var r=t("../utils");function a(l){this.data=l,this.length=l.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(l){this.checkIndex(this.index+l)},checkIndex:function(l){if(this.length<this.zero+l||l<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+l+"). Corrupted zip ?")},setIndex:function(l){this.checkIndex(l),this.index=l},skip:function(l){this.setIndex(this.index+l)},byteAt:function(){},readInt:function(l){var g,E=0;for(this.checkOffset(l),g=this.index+l-1;g>=this.index;g--)E=(E<<8)+this.byteAt(g);return this.index+=l,E},readString:function(l){return r.transformTo("string",this.readData(l))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var l=this.readInt(4);return new Date(Date.UTC(1980+(l>>25&127),(l>>21&15)-1,l>>16&31,l>>11&31,l>>5&63,(31&l)<<1))}},i.exports=a},{"../utils":32}],19:[function(t,i,s){var r=t("./Uint8ArrayReader");function a(l){r.call(this,l)}t("../utils").inherits(a,r),a.prototype.readData=function(l){this.checkOffset(l);var g=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,g},i.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,i,s){var r=t("./DataReader");function a(l){r.call(this,l)}t("../utils").inherits(a,r),a.prototype.byteAt=function(l){return this.data.charCodeAt(this.zero+l)},a.prototype.lastIndexOfSignature=function(l){return this.data.lastIndexOf(l)-this.zero},a.prototype.readAndCheckSignature=function(l){return l===this.readData(4)},a.prototype.readData=function(l){this.checkOffset(l);var g=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,g},i.exports=a},{"../utils":32,"./DataReader":18}],21:[function(t,i,s){var r=t("./ArrayReader");function a(l){r.call(this,l)}t("../utils").inherits(a,r),a.prototype.readData=function(l){if(this.checkOffset(l),l===0)return new Uint8Array(0);var g=this.data.subarray(this.zero+this.index,this.zero+this.index+l);return this.index+=l,g},i.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(t,i,s){var r=t("../utils"),a=t("../support"),l=t("./ArrayReader"),g=t("./StringReader"),E=t("./NodeBufferReader"),b=t("./Uint8ArrayReader");i.exports=function(x){var d=r.getTypeOf(x);return r.checkSupport(d),d!=="string"||a.uint8array?d==="nodebuffer"?new E(x):a.uint8array?new b(r.transformTo("uint8array",x)):new l(r.transformTo("array",x)):new g(x)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,i,s){s.LOCAL_FILE_HEADER="PK",s.CENTRAL_FILE_HEADER="PK",s.CENTRAL_DIRECTORY_END="PK",s.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",s.ZIP64_CENTRAL_DIRECTORY_END="PK",s.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,i,s){var r=t("./GenericWorker"),a=t("../utils");function l(g){r.call(this,"ConvertWorker to "+g),this.destType=g}a.inherits(l,r),l.prototype.processChunk=function(g){this.push({data:a.transformTo(this.destType,g.data),meta:g.meta})},i.exports=l},{"../utils":32,"./GenericWorker":28}],25:[function(t,i,s){var r=t("./GenericWorker"),a=t("../crc32");function l(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(l,r),l.prototype.processChunk=function(g){this.streamInfo.crc32=a(g.data,this.streamInfo.crc32||0),this.push(g)},i.exports=l},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,i,s){var r=t("../utils"),a=t("./GenericWorker");function l(g){a.call(this,"DataLengthProbe for "+g),this.propName=g,this.withStreamInfo(g,0)}r.inherits(l,a),l.prototype.processChunk=function(g){if(g){var E=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=E+g.data.length}a.prototype.processChunk.call(this,g)},i.exports=l},{"../utils":32,"./GenericWorker":28}],27:[function(t,i,s){var r=t("../utils"),a=t("./GenericWorker");function l(g){a.call(this,"DataWorker");var E=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,g.then(function(b){E.dataIsReady=!0,E.data=b,E.max=b&&b.length||0,E.type=r.getTypeOf(b),E.isPaused||E._tickAndRepeat()},function(b){E.error(b)})}r.inherits(l,a),l.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},l.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},l.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},l.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var g=null,E=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":g=this.data.substring(this.index,E);break;case"uint8array":g=this.data.subarray(this.index,E);break;case"array":case"nodebuffer":g=this.data.slice(this.index,E)}return this.index=E,this.push({data:g,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=l},{"../utils":32,"./GenericWorker":28}],28:[function(t,i,s){function r(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,l){return this._listeners[a].push(l),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,l){if(this._listeners[a])for(var g=0;g<this._listeners[a].length;g++)this._listeners[a][g].call(this,l)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var l=this;return a.on("data",function(g){l.processChunk(g)}),a.on("end",function(){l.end()}),a.on("error",function(g){l.error(g)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,l){return this.extraStreamInfo[a]=l,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},i.exports=r},{}],29:[function(t,i,s){var r=t("../utils"),a=t("./ConvertWorker"),l=t("./GenericWorker"),g=t("../base64"),E=t("../support"),b=t("../external"),x=null;if(E.nodestream)try{x=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function d(S,_){return new b.Promise(function(c,o){var v=[],T=S._internalType,w=S._outputType,P=S._mimeType;S.on("data",function(D,L){v.push(D),_&&_(L)}).on("error",function(D){v=[],o(D)}).on("end",function(){try{var D=(function(L,M,A){switch(L){case"blob":return r.newBlob(r.transformTo("arraybuffer",M),A);case"base64":return g.encode(M);default:return r.transformTo(L,M)}})(w,(function(L,M){var A,X=0,B=null,y=0;for(A=0;A<M.length;A++)y+=M[A].length;switch(L){case"string":return M.join("");case"array":return Array.prototype.concat.apply([],M);case"uint8array":for(B=new Uint8Array(y),A=0;A<M.length;A++)B.set(M[A],X),X+=M[A].length;return B;case"nodebuffer":return Buffer.concat(M);default:throw new Error("concat : unsupported type '"+L+"'")}})(T,v),P);c(D)}catch(L){o(L)}v=[]}).resume()})}function f(S,_,c){var o=_;switch(_){case"blob":case"arraybuffer":o="uint8array";break;case"base64":o="string"}try{this._internalType=o,this._outputType=_,this._mimeType=c,r.checkSupport(o),this._worker=S.pipe(new a(o)),S.lock()}catch(v){this._worker=new l("error"),this._worker.error(v)}}f.prototype={accumulate:function(S){return d(this,S)},on:function(S,_){var c=this;return S==="data"?this._worker.on(S,function(o){_.call(c,o.data,o.meta)}):this._worker.on(S,function(){r.delay(_,arguments,c)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(S){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new x(this,{objectMode:this._outputType!=="nodebuffer"},S)}},i.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,i,s){if(s.base64=!0,s.array=!0,s.string=!0,s.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",s.nodebuffer=typeof Buffer<"u",s.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")s.blob=!1;else{var r=new ArrayBuffer(0);try{s.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(r),s.blob=a.getBlob("application/zip").size===0}catch{s.blob=!1}}}try{s.nodestream=!!t("readable-stream").Readable}catch{s.nodestream=!1}},{"readable-stream":16}],31:[function(t,i,s){for(var r=t("./utils"),a=t("./support"),l=t("./nodejsUtils"),g=t("./stream/GenericWorker"),E=new Array(256),b=0;b<256;b++)E[b]=252<=b?6:248<=b?5:240<=b?4:224<=b?3:192<=b?2:1;E[254]=E[254]=1;function x(){g.call(this,"utf-8 decode"),this.leftOver=null}function d(){g.call(this,"utf-8 encode")}s.utf8encode=function(f){return a.nodebuffer?l.newBufferFrom(f,"utf-8"):(function(S){var _,c,o,v,T,w=S.length,P=0;for(v=0;v<w;v++)(64512&(c=S.charCodeAt(v)))==55296&&v+1<w&&(64512&(o=S.charCodeAt(v+1)))==56320&&(c=65536+(c-55296<<10)+(o-56320),v++),P+=c<128?1:c<2048?2:c<65536?3:4;for(_=a.uint8array?new Uint8Array(P):new Array(P),v=T=0;T<P;v++)(64512&(c=S.charCodeAt(v)))==55296&&v+1<w&&(64512&(o=S.charCodeAt(v+1)))==56320&&(c=65536+(c-55296<<10)+(o-56320),v++),c<128?_[T++]=c:(c<2048?_[T++]=192|c>>>6:(c<65536?_[T++]=224|c>>>12:(_[T++]=240|c>>>18,_[T++]=128|c>>>12&63),_[T++]=128|c>>>6&63),_[T++]=128|63&c);return _})(f)},s.utf8decode=function(f){return a.nodebuffer?r.transformTo("nodebuffer",f).toString("utf-8"):(function(S){var _,c,o,v,T=S.length,w=new Array(2*T);for(_=c=0;_<T;)if((o=S[_++])<128)w[c++]=o;else if(4<(v=E[o]))w[c++]=65533,_+=v-1;else{for(o&=v===2?31:v===3?15:7;1<v&&_<T;)o=o<<6|63&S[_++],v--;1<v?w[c++]=65533:o<65536?w[c++]=o:(o-=65536,w[c++]=55296|o>>10&1023,w[c++]=56320|1023&o)}return w.length!==c&&(w.subarray?w=w.subarray(0,c):w.length=c),r.applyFromCharCode(w)})(f=r.transformTo(a.uint8array?"uint8array":"array",f))},r.inherits(x,g),x.prototype.processChunk=function(f){var S=r.transformTo(a.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var _=S;(S=new Uint8Array(_.length+this.leftOver.length)).set(this.leftOver,0),S.set(_,this.leftOver.length)}else S=this.leftOver.concat(S);this.leftOver=null}var c=(function(v,T){var w;for((T=T||v.length)>v.length&&(T=v.length),w=T-1;0<=w&&(192&v[w])==128;)w--;return w<0||w===0?T:w+E[v[w]]>T?w:T})(S),o=S;c!==S.length&&(a.uint8array?(o=S.subarray(0,c),this.leftOver=S.subarray(c,S.length)):(o=S.slice(0,c),this.leftOver=S.slice(c,S.length))),this.push({data:s.utf8decode(o),meta:f.meta})},x.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=x,r.inherits(d,g),d.prototype.processChunk=function(f){this.push({data:s.utf8encode(f.data),meta:f.meta})},s.Utf8EncodeWorker=d},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,i,s){var r=t("./support"),a=t("./base64"),l=t("./nodejsUtils"),g=t("./external");function E(_){return _}function b(_,c){for(var o=0;o<_.length;++o)c[o]=255&_.charCodeAt(o);return c}t("setimmediate"),s.newBlob=function(_,c){s.checkSupport("blob");try{return new Blob([_],{type:c})}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return o.append(_),o.getBlob(c)}catch{throw new Error("Bug : can't construct the Blob.")}}};var x={stringifyByChunk:function(_,c,o){var v=[],T=0,w=_.length;if(w<=o)return String.fromCharCode.apply(null,_);for(;T<w;)c==="array"||c==="nodebuffer"?v.push(String.fromCharCode.apply(null,_.slice(T,Math.min(T+o,w)))):v.push(String.fromCharCode.apply(null,_.subarray(T,Math.min(T+o,w)))),T+=o;return v.join("")},stringifyByChar:function(_){for(var c="",o=0;o<_.length;o++)c+=String.fromCharCode(_[o]);return c},applyCanBeUsed:{uint8array:(function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,l.allocBuffer(1)).length===1}catch{return!1}})()}};function d(_){var c=65536,o=s.getTypeOf(_),v=!0;if(o==="uint8array"?v=x.applyCanBeUsed.uint8array:o==="nodebuffer"&&(v=x.applyCanBeUsed.nodebuffer),v)for(;1<c;)try{return x.stringifyByChunk(_,o,c)}catch{c=Math.floor(c/2)}return x.stringifyByChar(_)}function f(_,c){for(var o=0;o<_.length;o++)c[o]=_[o];return c}s.applyFromCharCode=d;var S={};S.string={string:E,array:function(_){return b(_,new Array(_.length))},arraybuffer:function(_){return S.string.uint8array(_).buffer},uint8array:function(_){return b(_,new Uint8Array(_.length))},nodebuffer:function(_){return b(_,l.allocBuffer(_.length))}},S.array={string:d,array:E,arraybuffer:function(_){return new Uint8Array(_).buffer},uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return l.newBufferFrom(_)}},S.arraybuffer={string:function(_){return d(new Uint8Array(_))},array:function(_){return f(new Uint8Array(_),new Array(_.byteLength))},arraybuffer:E,uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return l.newBufferFrom(new Uint8Array(_))}},S.uint8array={string:d,array:function(_){return f(_,new Array(_.length))},arraybuffer:function(_){return _.buffer},uint8array:E,nodebuffer:function(_){return l.newBufferFrom(_)}},S.nodebuffer={string:d,array:function(_){return f(_,new Array(_.length))},arraybuffer:function(_){return S.nodebuffer.uint8array(_).buffer},uint8array:function(_){return f(_,new Uint8Array(_.length))},nodebuffer:E},s.transformTo=function(_,c){if(c=c||"",!_)return c;s.checkSupport(_);var o=s.getTypeOf(c);return S[o][_](c)},s.resolve=function(_){for(var c=_.split("/"),o=[],v=0;v<c.length;v++){var T=c[v];T==="."||T===""&&v!==0&&v!==c.length-1||(T===".."?o.pop():o.push(T))}return o.join("/")},s.getTypeOf=function(_){return typeof _=="string"?"string":Object.prototype.toString.call(_)==="[object Array]"?"array":r.nodebuffer&&l.isBuffer(_)?"nodebuffer":r.uint8array&&_ instanceof Uint8Array?"uint8array":r.arraybuffer&&_ instanceof ArrayBuffer?"arraybuffer":void 0},s.checkSupport=function(_){if(!r[_.toLowerCase()])throw new Error(_+" is not supported by this platform")},s.MAX_VALUE_16BITS=65535,s.MAX_VALUE_32BITS=-1,s.pretty=function(_){var c,o,v="";for(o=0;o<(_||"").length;o++)v+="\\x"+((c=_.charCodeAt(o))<16?"0":"")+c.toString(16).toUpperCase();return v},s.delay=function(_,c,o){setImmediate(function(){_.apply(o||null,c||[])})},s.inherits=function(_,c){function o(){}o.prototype=c.prototype,_.prototype=new o},s.extend=function(){var _,c,o={};for(_=0;_<arguments.length;_++)for(c in arguments[_])Object.prototype.hasOwnProperty.call(arguments[_],c)&&o[c]===void 0&&(o[c]=arguments[_][c]);return o},s.prepareContent=function(_,c,o,v,T){return g.Promise.resolve(c).then(function(w){return r.blob&&(w instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(w))!==-1)&&typeof FileReader<"u"?new g.Promise(function(P,D){var L=new FileReader;L.onload=function(M){P(M.target.result)},L.onerror=function(M){D(M.target.error)},L.readAsArrayBuffer(w)}):w}).then(function(w){var P=s.getTypeOf(w);return P?(P==="arraybuffer"?w=s.transformTo("uint8array",w):P==="string"&&(T?w=a.decode(w):o&&v!==!0&&(w=(function(D){return b(D,r.uint8array?new Uint8Array(D.length):new Array(D.length))})(w))),w):g.Promise.reject(new Error("Can't read the data of '"+_+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,i,s){var r=t("./reader/readerFor"),a=t("./utils"),l=t("./signature"),g=t("./zipEntry"),E=t("./support");function b(x){this.files=[],this.loadOptions=x}b.prototype={checkSignature:function(x){if(!this.reader.readAndCheckSignature(x)){this.reader.index-=4;var d=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(d)+", expected "+a.pretty(x)+")")}},isSignature:function(x,d){var f=this.reader.index;this.reader.setIndex(x);var S=this.reader.readString(4)===d;return this.reader.setIndex(f),S},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var x=this.reader.readData(this.zipCommentLength),d=E.uint8array?"uint8array":"array",f=a.transformTo(d,x);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var x,d,f,S=this.zip64EndOfCentralSize-44;0<S;)x=this.reader.readInt(2),d=this.reader.readInt(4),f=this.reader.readData(d),this.zip64ExtensibleData[x]={id:x,length:d,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var x,d;for(x=0;x<this.files.length;x++)d=this.files[x],this.reader.setIndex(d.localHeaderOffset),this.checkSignature(l.LOCAL_FILE_HEADER),d.readLocalPart(this.reader),d.handleUTF8(),d.processAttributes()},readCentralDir:function(){var x;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(l.CENTRAL_FILE_HEADER);)(x=new g({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(x);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var x=this.reader.lastIndexOfSignature(l.CENTRAL_DIRECTORY_END);if(x<0)throw this.isSignature(0,l.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(x);var d=x;if(this.checkSignature(l.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(x=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(x),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,l.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var S=d-f;if(0<S)this.isSignature(d,l.CENTRAL_FILE_HEADER)||(this.reader.zero=S);else if(S<0)throw new Error("Corrupted zip: missing "+Math.abs(S)+" bytes.")},prepareReader:function(x){this.reader=r(x)},load:function(x){this.prepareReader(x),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=b},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,i,s){var r=t("./reader/readerFor"),a=t("./utils"),l=t("./compressedObject"),g=t("./crc32"),E=t("./utf8"),b=t("./compressions"),x=t("./support");function d(f,S){this.options=f,this.loadOptions=S}d.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var S,_;if(f.skip(22),this.fileNameLength=f.readInt(2),_=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(_),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((S=(function(c){for(var o in b)if(Object.prototype.hasOwnProperty.call(b,o)&&b[o].magic===c)return b[o];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new l(this.compressedSize,this.uncompressedSize,this.crc32,S,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var S=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(S),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=r(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var S,_,c,o=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<o;)S=f.readInt(2),_=f.readInt(2),c=f.readData(_),this.extraFields[S]={id:S,length:_,value:c};f.setIndex(o)},handleUTF8:function(){var f=x.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=E.utf8decode(this.fileName),this.fileCommentStr=E.utf8decode(this.fileComment);else{var S=this.findExtraFieldUnicodePath();if(S!==null)this.fileNameStr=S;else{var _=a.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(_)}var c=this.findExtraFieldUnicodeComment();if(c!==null)this.fileCommentStr=c;else{var o=a.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(o)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var S=r(f.value);return S.readInt(1)!==1||g(this.fileName)!==S.readInt(4)?null:E.utf8decode(S.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var S=r(f.value);return S.readInt(1)!==1||g(this.fileComment)!==S.readInt(4)?null:E.utf8decode(S.readData(f.length-5))}return null}},i.exports=d},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,i,s){function r(S,_,c){this.name=S,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this.unixPermissions=c.unixPermissions,this.dosPermissions=c.dosPermissions,this._data=_,this._dataBinary=c.binary,this.options={compression:c.compression,compressionOptions:c.compressionOptions}}var a=t("./stream/StreamHelper"),l=t("./stream/DataWorker"),g=t("./utf8"),E=t("./compressedObject"),b=t("./stream/GenericWorker");r.prototype={internalStream:function(S){var _=null,c="string";try{if(!S)throw new Error("No output type specified.");var o=(c=S.toLowerCase())==="string"||c==="text";c!=="binarystring"&&c!=="text"||(c="string"),_=this._decompressWorker();var v=!this._dataBinary;v&&!o&&(_=_.pipe(new g.Utf8EncodeWorker)),!v&&o&&(_=_.pipe(new g.Utf8DecodeWorker))}catch(T){(_=new b("error")).error(T)}return new a(_,c,"")},async:function(S,_){return this.internalStream(S).accumulate(_)},nodeStream:function(S,_){return this.internalStream(S||"nodebuffer").toNodejsStream(_)},_compressWorker:function(S,_){if(this._data instanceof E&&this._data.compression.magic===S.magic)return this._data.getCompressedWorker();var c=this._decompressWorker();return this._dataBinary||(c=c.pipe(new g.Utf8EncodeWorker)),E.createWorkerFrom(c,S,_)},_decompressWorker:function(){return this._data instanceof E?this._data.getContentWorker():this._data instanceof b?this._data:new l(this._data)}};for(var x=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],d=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<x.length;f++)r.prototype[x[f]]=d;i.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,i,s){(function(r){var a,l,g=r.MutationObserver||r.WebKitMutationObserver;if(g){var E=0,b=new g(S),x=r.document.createTextNode("");b.observe(x,{characterData:!0}),a=function(){x.data=E=++E%2}}else if(r.setImmediate||r.MessageChannel===void 0)a="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var _=r.document.createElement("script");_.onreadystatechange=function(){S(),_.onreadystatechange=null,_.parentNode.removeChild(_),_=null},r.document.documentElement.appendChild(_)}:function(){setTimeout(S,0)};else{var d=new r.MessageChannel;d.port1.onmessage=S,a=function(){d.port2.postMessage(0)}}var f=[];function S(){var _,c;l=!0;for(var o=f.length;o;){for(c=f,f=[],_=-1;++_<o;)c[_]();o=f.length}l=!1}i.exports=function(_){f.push(_)!==1||l||a()}}).call(this,typeof In<"u"?In:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,i,s){var r=t("immediate");function a(){}var l={},g=["REJECTED"],E=["FULFILLED"],b=["PENDING"];function x(o){if(typeof o!="function")throw new TypeError("resolver must be a function");this.state=b,this.queue=[],this.outcome=void 0,o!==a&&_(this,o)}function d(o,v,T){this.promise=o,typeof v=="function"&&(this.onFulfilled=v,this.callFulfilled=this.otherCallFulfilled),typeof T=="function"&&(this.onRejected=T,this.callRejected=this.otherCallRejected)}function f(o,v,T){r(function(){var w;try{w=v(T)}catch(P){return l.reject(o,P)}w===o?l.reject(o,new TypeError("Cannot resolve promise with itself")):l.resolve(o,w)})}function S(o){var v=o&&o.then;if(o&&(typeof o=="object"||typeof o=="function")&&typeof v=="function")return function(){v.apply(o,arguments)}}function _(o,v){var T=!1;function w(L){T||(T=!0,l.reject(o,L))}function P(L){T||(T=!0,l.resolve(o,L))}var D=c(function(){v(P,w)});D.status==="error"&&w(D.value)}function c(o,v){var T={};try{T.value=o(v),T.status="success"}catch(w){T.status="error",T.value=w}return T}(i.exports=x).prototype.finally=function(o){if(typeof o!="function")return this;var v=this.constructor;return this.then(function(T){return v.resolve(o()).then(function(){return T})},function(T){return v.resolve(o()).then(function(){throw T})})},x.prototype.catch=function(o){return this.then(null,o)},x.prototype.then=function(o,v){if(typeof o!="function"&&this.state===E||typeof v!="function"&&this.state===g)return this;var T=new this.constructor(a);return this.state!==b?f(T,this.state===E?o:v,this.outcome):this.queue.push(new d(T,o,v)),T},d.prototype.callFulfilled=function(o){l.resolve(this.promise,o)},d.prototype.otherCallFulfilled=function(o){f(this.promise,this.onFulfilled,o)},d.prototype.callRejected=function(o){l.reject(this.promise,o)},d.prototype.otherCallRejected=function(o){f(this.promise,this.onRejected,o)},l.resolve=function(o,v){var T=c(S,v);if(T.status==="error")return l.reject(o,T.value);var w=T.value;if(w)_(o,w);else{o.state=E,o.outcome=v;for(var P=-1,D=o.queue.length;++P<D;)o.queue[P].callFulfilled(v)}return o},l.reject=function(o,v){o.state=g,o.outcome=v;for(var T=-1,w=o.queue.length;++T<w;)o.queue[T].callRejected(v);return o},x.resolve=function(o){return o instanceof this?o:l.resolve(new this(a),o)},x.reject=function(o){var v=new this(a);return l.reject(v,o)},x.all=function(o){var v=this;if(Object.prototype.toString.call(o)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=o.length,w=!1;if(!T)return this.resolve([]);for(var P=new Array(T),D=0,L=-1,M=new this(a);++L<T;)A(o[L],L);return M;function A(X,B){v.resolve(X).then(function(y){P[B]=y,++D!==T||w||(w=!0,l.resolve(M,P))},function(y){w||(w=!0,l.reject(M,y))})}},x.race=function(o){var v=this;if(Object.prototype.toString.call(o)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=o.length,w=!1;if(!T)return this.resolve([]);for(var P=-1,D=new this(a);++P<T;)L=o[P],v.resolve(L).then(function(M){w||(w=!0,l.resolve(D,M))},function(M){w||(w=!0,l.reject(D,M))});var L;return D}},{immediate:36}],38:[function(t,i,s){var r={};(0,t("./lib/utils/common").assign)(r,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),i.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,i,s){var r=t("./zlib/deflate"),a=t("./utils/common"),l=t("./utils/strings"),g=t("./zlib/messages"),E=t("./zlib/zstream"),b=Object.prototype.toString,x=0,d=-1,f=0,S=8;function _(o){if(!(this instanceof _))return new _(o);this.options=a.assign({level:d,method:S,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},o||{});var v=this.options;v.raw&&0<v.windowBits?v.windowBits=-v.windowBits:v.gzip&&0<v.windowBits&&v.windowBits<16&&(v.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new E,this.strm.avail_out=0;var T=r.deflateInit2(this.strm,v.level,v.method,v.windowBits,v.memLevel,v.strategy);if(T!==x)throw new Error(g[T]);if(v.header&&r.deflateSetHeader(this.strm,v.header),v.dictionary){var w;if(w=typeof v.dictionary=="string"?l.string2buf(v.dictionary):b.call(v.dictionary)==="[object ArrayBuffer]"?new Uint8Array(v.dictionary):v.dictionary,(T=r.deflateSetDictionary(this.strm,w))!==x)throw new Error(g[T]);this._dict_set=!0}}function c(o,v){var T=new _(v);if(T.push(o,!0),T.err)throw T.msg||g[T.err];return T.result}_.prototype.push=function(o,v){var T,w,P=this.strm,D=this.options.chunkSize;if(this.ended)return!1;w=v===~~v?v:v===!0?4:0,typeof o=="string"?P.input=l.string2buf(o):b.call(o)==="[object ArrayBuffer]"?P.input=new Uint8Array(o):P.input=o,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new a.Buf8(D),P.next_out=0,P.avail_out=D),(T=r.deflate(P,w))!==1&&T!==x)return this.onEnd(T),!(this.ended=!0);P.avail_out!==0&&(P.avail_in!==0||w!==4&&w!==2)||(this.options.to==="string"?this.onData(l.buf2binstring(a.shrinkBuf(P.output,P.next_out))):this.onData(a.shrinkBuf(P.output,P.next_out)))}while((0<P.avail_in||P.avail_out===0)&&T!==1);return w===4?(T=r.deflateEnd(this.strm),this.onEnd(T),this.ended=!0,T===x):w!==2||(this.onEnd(x),!(P.avail_out=0))},_.prototype.onData=function(o){this.chunks.push(o)},_.prototype.onEnd=function(o){o===x&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=o,this.msg=this.strm.msg},s.Deflate=_,s.deflate=c,s.deflateRaw=function(o,v){return(v=v||{}).raw=!0,c(o,v)},s.gzip=function(o,v){return(v=v||{}).gzip=!0,c(o,v)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,i,s){var r=t("./zlib/inflate"),a=t("./utils/common"),l=t("./utils/strings"),g=t("./zlib/constants"),E=t("./zlib/messages"),b=t("./zlib/zstream"),x=t("./zlib/gzheader"),d=Object.prototype.toString;function f(_){if(!(this instanceof f))return new f(_);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},_||{});var c=this.options;c.raw&&0<=c.windowBits&&c.windowBits<16&&(c.windowBits=-c.windowBits,c.windowBits===0&&(c.windowBits=-15)),!(0<=c.windowBits&&c.windowBits<16)||_&&_.windowBits||(c.windowBits+=32),15<c.windowBits&&c.windowBits<48&&(15&c.windowBits)==0&&(c.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new b,this.strm.avail_out=0;var o=r.inflateInit2(this.strm,c.windowBits);if(o!==g.Z_OK)throw new Error(E[o]);this.header=new x,r.inflateGetHeader(this.strm,this.header)}function S(_,c){var o=new f(c);if(o.push(_,!0),o.err)throw o.msg||E[o.err];return o.result}f.prototype.push=function(_,c){var o,v,T,w,P,D,L=this.strm,M=this.options.chunkSize,A=this.options.dictionary,X=!1;if(this.ended)return!1;v=c===~~c?c:c===!0?g.Z_FINISH:g.Z_NO_FLUSH,typeof _=="string"?L.input=l.binstring2buf(_):d.call(_)==="[object ArrayBuffer]"?L.input=new Uint8Array(_):L.input=_,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new a.Buf8(M),L.next_out=0,L.avail_out=M),(o=r.inflate(L,g.Z_NO_FLUSH))===g.Z_NEED_DICT&&A&&(D=typeof A=="string"?l.string2buf(A):d.call(A)==="[object ArrayBuffer]"?new Uint8Array(A):A,o=r.inflateSetDictionary(this.strm,D)),o===g.Z_BUF_ERROR&&X===!0&&(o=g.Z_OK,X=!1),o!==g.Z_STREAM_END&&o!==g.Z_OK)return this.onEnd(o),!(this.ended=!0);L.next_out&&(L.avail_out!==0&&o!==g.Z_STREAM_END&&(L.avail_in!==0||v!==g.Z_FINISH&&v!==g.Z_SYNC_FLUSH)||(this.options.to==="string"?(T=l.utf8border(L.output,L.next_out),w=L.next_out-T,P=l.buf2string(L.output,T),L.next_out=w,L.avail_out=M-w,w&&a.arraySet(L.output,L.output,T,w,0),this.onData(P)):this.onData(a.shrinkBuf(L.output,L.next_out)))),L.avail_in===0&&L.avail_out===0&&(X=!0)}while((0<L.avail_in||L.avail_out===0)&&o!==g.Z_STREAM_END);return o===g.Z_STREAM_END&&(v=g.Z_FINISH),v===g.Z_FINISH?(o=r.inflateEnd(this.strm),this.onEnd(o),this.ended=!0,o===g.Z_OK):v!==g.Z_SYNC_FLUSH||(this.onEnd(g.Z_OK),!(L.avail_out=0))},f.prototype.onData=function(_){this.chunks.push(_)},f.prototype.onEnd=function(_){_===g.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},s.Inflate=f,s.inflate=S,s.inflateRaw=function(_,c){return(c=c||{}).raw=!0,S(_,c)},s.ungzip=S},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,i,s){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";s.assign=function(g){for(var E=Array.prototype.slice.call(arguments,1);E.length;){var b=E.shift();if(b){if(typeof b!="object")throw new TypeError(b+"must be non-object");for(var x in b)b.hasOwnProperty(x)&&(g[x]=b[x])}}return g},s.shrinkBuf=function(g,E){return g.length===E?g:g.subarray?g.subarray(0,E):(g.length=E,g)};var a={arraySet:function(g,E,b,x,d){if(E.subarray&&g.subarray)g.set(E.subarray(b,b+x),d);else for(var f=0;f<x;f++)g[d+f]=E[b+f]},flattenChunks:function(g){var E,b,x,d,f,S;for(E=x=0,b=g.length;E<b;E++)x+=g[E].length;for(S=new Uint8Array(x),E=d=0,b=g.length;E<b;E++)f=g[E],S.set(f,d),d+=f.length;return S}},l={arraySet:function(g,E,b,x,d){for(var f=0;f<x;f++)g[d+f]=E[b+f]},flattenChunks:function(g){return[].concat.apply([],g)}};s.setTyped=function(g){g?(s.Buf8=Uint8Array,s.Buf16=Uint16Array,s.Buf32=Int32Array,s.assign(s,a)):(s.Buf8=Array,s.Buf16=Array,s.Buf32=Array,s.assign(s,l))},s.setTyped(r)},{}],42:[function(t,i,s){var r=t("./common"),a=!0,l=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{l=!1}for(var g=new r.Buf8(256),E=0;E<256;E++)g[E]=252<=E?6:248<=E?5:240<=E?4:224<=E?3:192<=E?2:1;function b(x,d){if(d<65537&&(x.subarray&&l||!x.subarray&&a))return String.fromCharCode.apply(null,r.shrinkBuf(x,d));for(var f="",S=0;S<d;S++)f+=String.fromCharCode(x[S]);return f}g[254]=g[254]=1,s.string2buf=function(x){var d,f,S,_,c,o=x.length,v=0;for(_=0;_<o;_++)(64512&(f=x.charCodeAt(_)))==55296&&_+1<o&&(64512&(S=x.charCodeAt(_+1)))==56320&&(f=65536+(f-55296<<10)+(S-56320),_++),v+=f<128?1:f<2048?2:f<65536?3:4;for(d=new r.Buf8(v),_=c=0;c<v;_++)(64512&(f=x.charCodeAt(_)))==55296&&_+1<o&&(64512&(S=x.charCodeAt(_+1)))==56320&&(f=65536+(f-55296<<10)+(S-56320),_++),f<128?d[c++]=f:(f<2048?d[c++]=192|f>>>6:(f<65536?d[c++]=224|f>>>12:(d[c++]=240|f>>>18,d[c++]=128|f>>>12&63),d[c++]=128|f>>>6&63),d[c++]=128|63&f);return d},s.buf2binstring=function(x){return b(x,x.length)},s.binstring2buf=function(x){for(var d=new r.Buf8(x.length),f=0,S=d.length;f<S;f++)d[f]=x.charCodeAt(f);return d},s.buf2string=function(x,d){var f,S,_,c,o=d||x.length,v=new Array(2*o);for(f=S=0;f<o;)if((_=x[f++])<128)v[S++]=_;else if(4<(c=g[_]))v[S++]=65533,f+=c-1;else{for(_&=c===2?31:c===3?15:7;1<c&&f<o;)_=_<<6|63&x[f++],c--;1<c?v[S++]=65533:_<65536?v[S++]=_:(_-=65536,v[S++]=55296|_>>10&1023,v[S++]=56320|1023&_)}return b(v,S)},s.utf8border=function(x,d){var f;for((d=d||x.length)>x.length&&(d=x.length),f=d-1;0<=f&&(192&x[f])==128;)f--;return f<0||f===0?d:f+g[x[f]]>d?f:d}},{"./common":41}],43:[function(t,i,s){i.exports=function(r,a,l,g){for(var E=65535&r|0,b=r>>>16&65535|0,x=0;l!==0;){for(l-=x=2e3<l?2e3:l;b=b+(E=E+a[g++]|0)|0,--x;);E%=65521,b%=65521}return E|b<<16|0}},{}],44:[function(t,i,s){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,i,s){var r=(function(){for(var a,l=[],g=0;g<256;g++){a=g;for(var E=0;E<8;E++)a=1&a?3988292384^a>>>1:a>>>1;l[g]=a}return l})();i.exports=function(a,l,g,E){var b=r,x=E+g;a^=-1;for(var d=E;d<x;d++)a=a>>>8^b[255&(a^l[d])];return-1^a}},{}],46:[function(t,i,s){var r,a=t("../utils/common"),l=t("./trees"),g=t("./adler32"),E=t("./crc32"),b=t("./messages"),x=0,d=4,f=0,S=-2,_=-1,c=4,o=2,v=8,T=9,w=286,P=30,D=19,L=2*w+1,M=15,A=3,X=258,B=X+A+1,y=42,U=113,u=1,O=2,V=3,F=4;function oe(p,J){return p.msg=b[J],J}function Z(p){return(p<<1)-(4<p?9:0)}function ue(p){for(var J=p.length;0<=--J;)p[J]=0}function W(p){var J=p.state,K=J.pending;K>p.avail_out&&(K=p.avail_out),K!==0&&(a.arraySet(p.output,J.pending_buf,J.pending_out,K,p.next_out),p.next_out+=K,J.pending_out+=K,p.total_out+=K,p.avail_out-=K,J.pending-=K,J.pending===0&&(J.pending_out=0))}function G(p,J){l._tr_flush_block(p,0<=p.block_start?p.block_start:-1,p.strstart-p.block_start,J),p.block_start=p.strstart,W(p.strm)}function ge(p,J){p.pending_buf[p.pending++]=J}function pe(p,J){p.pending_buf[p.pending++]=J>>>8&255,p.pending_buf[p.pending++]=255&J}function ce(p,J){var K,N,h=p.max_chain_length,H=p.strstart,ne=p.prev_length,re=p.nice_match,k=p.strstart>p.w_size-B?p.strstart-(p.w_size-B):0,R=p.window,m=p.w_mask,I=p.prev,q=p.strstart+X,ie=R[H+ne-1],j=R[H+ne];p.prev_length>=p.good_match&&(h>>=2),re>p.lookahead&&(re=p.lookahead);do if(R[(K=J)+ne]===j&&R[K+ne-1]===ie&&R[K]===R[H]&&R[++K]===R[H+1]){H+=2,K++;do;while(R[++H]===R[++K]&&R[++H]===R[++K]&&R[++H]===R[++K]&&R[++H]===R[++K]&&R[++H]===R[++K]&&R[++H]===R[++K]&&R[++H]===R[++K]&&R[++H]===R[++K]&&H<q);if(N=X-(q-H),H=q-X,ne<N){if(p.match_start=J,re<=(ne=N))break;ie=R[H+ne-1],j=R[H+ne]}}while((J=I[J&m])>k&&--h!=0);return ne<=p.lookahead?ne:p.lookahead}function te(p){var J,K,N,h,H,ne,re,k,R,m,I=p.w_size;do{if(h=p.window_size-p.lookahead-p.strstart,p.strstart>=I+(I-B)){for(a.arraySet(p.window,p.window,I,I,0),p.match_start-=I,p.strstart-=I,p.block_start-=I,J=K=p.hash_size;N=p.head[--J],p.head[J]=I<=N?N-I:0,--K;);for(J=K=I;N=p.prev[--J],p.prev[J]=I<=N?N-I:0,--K;);h+=I}if(p.strm.avail_in===0)break;if(ne=p.strm,re=p.window,k=p.strstart+p.lookahead,R=h,m=void 0,m=ne.avail_in,R<m&&(m=R),K=m===0?0:(ne.avail_in-=m,a.arraySet(re,ne.input,ne.next_in,m,k),ne.state.wrap===1?ne.adler=g(ne.adler,re,m,k):ne.state.wrap===2&&(ne.adler=E(ne.adler,re,m,k)),ne.next_in+=m,ne.total_in+=m,m),p.lookahead+=K,p.lookahead+p.insert>=A)for(H=p.strstart-p.insert,p.ins_h=p.window[H],p.ins_h=(p.ins_h<<p.hash_shift^p.window[H+1])&p.hash_mask;p.insert&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[H+A-1])&p.hash_mask,p.prev[H&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=H,H++,p.insert--,!(p.lookahead+p.insert<A)););}while(p.lookahead<B&&p.strm.avail_in!==0)}function fe(p,J){for(var K,N;;){if(p.lookahead<B){if(te(p),p.lookahead<B&&J===x)return u;if(p.lookahead===0)break}if(K=0,p.lookahead>=A&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+A-1])&p.hash_mask,K=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart),K!==0&&p.strstart-K<=p.w_size-B&&(p.match_length=ce(p,K)),p.match_length>=A)if(N=l._tr_tally(p,p.strstart-p.match_start,p.match_length-A),p.lookahead-=p.match_length,p.match_length<=p.max_lazy_match&&p.lookahead>=A){for(p.match_length--;p.strstart++,p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+A-1])&p.hash_mask,K=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart,--p.match_length!=0;);p.strstart++}else p.strstart+=p.match_length,p.match_length=0,p.ins_h=p.window[p.strstart],p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+1])&p.hash_mask;else N=l._tr_tally(p,0,p.window[p.strstart]),p.lookahead--,p.strstart++;if(N&&(G(p,!1),p.strm.avail_out===0))return u}return p.insert=p.strstart<A-1?p.strstart:A-1,J===d?(G(p,!0),p.strm.avail_out===0?V:F):p.last_lit&&(G(p,!1),p.strm.avail_out===0)?u:O}function se(p,J){for(var K,N,h;;){if(p.lookahead<B){if(te(p),p.lookahead<B&&J===x)return u;if(p.lookahead===0)break}if(K=0,p.lookahead>=A&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+A-1])&p.hash_mask,K=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart),p.prev_length=p.match_length,p.prev_match=p.match_start,p.match_length=A-1,K!==0&&p.prev_length<p.max_lazy_match&&p.strstart-K<=p.w_size-B&&(p.match_length=ce(p,K),p.match_length<=5&&(p.strategy===1||p.match_length===A&&4096<p.strstart-p.match_start)&&(p.match_length=A-1)),p.prev_length>=A&&p.match_length<=p.prev_length){for(h=p.strstart+p.lookahead-A,N=l._tr_tally(p,p.strstart-1-p.prev_match,p.prev_length-A),p.lookahead-=p.prev_length-1,p.prev_length-=2;++p.strstart<=h&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+A-1])&p.hash_mask,K=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart),--p.prev_length!=0;);if(p.match_available=0,p.match_length=A-1,p.strstart++,N&&(G(p,!1),p.strm.avail_out===0))return u}else if(p.match_available){if((N=l._tr_tally(p,0,p.window[p.strstart-1]))&&G(p,!1),p.strstart++,p.lookahead--,p.strm.avail_out===0)return u}else p.match_available=1,p.strstart++,p.lookahead--}return p.match_available&&(N=l._tr_tally(p,0,p.window[p.strstart-1]),p.match_available=0),p.insert=p.strstart<A-1?p.strstart:A-1,J===d?(G(p,!0),p.strm.avail_out===0?V:F):p.last_lit&&(G(p,!1),p.strm.avail_out===0)?u:O}function Me(p,J,K,N,h){this.good_length=p,this.max_lazy=J,this.nice_length=K,this.max_chain=N,this.func=h}function Re(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*L),this.dyn_dtree=new a.Buf16(2*(2*P+1)),this.bl_tree=new a.Buf16(2*(2*D+1)),ue(this.dyn_ltree),ue(this.dyn_dtree),ue(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(M+1),this.heap=new a.Buf16(2*w+1),ue(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*w+1),ue(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ce(p){var J;return p&&p.state?(p.total_in=p.total_out=0,p.data_type=o,(J=p.state).pending=0,J.pending_out=0,J.wrap<0&&(J.wrap=-J.wrap),J.status=J.wrap?y:U,p.adler=J.wrap===2?0:1,J.last_flush=x,l._tr_init(J),f):oe(p,S)}function qe(p){var J=Ce(p);return J===f&&(function(K){K.window_size=2*K.w_size,ue(K.head),K.max_lazy_match=r[K.level].max_lazy,K.good_match=r[K.level].good_length,K.nice_match=r[K.level].nice_length,K.max_chain_length=r[K.level].max_chain,K.strstart=0,K.block_start=0,K.lookahead=0,K.insert=0,K.match_length=K.prev_length=A-1,K.match_available=0,K.ins_h=0})(p.state),J}function Ge(p,J,K,N,h,H){if(!p)return S;var ne=1;if(J===_&&(J=6),N<0?(ne=0,N=-N):15<N&&(ne=2,N-=16),h<1||T<h||K!==v||N<8||15<N||J<0||9<J||H<0||c<H)return oe(p,S);N===8&&(N=9);var re=new Re;return(p.state=re).strm=p,re.wrap=ne,re.gzhead=null,re.w_bits=N,re.w_size=1<<re.w_bits,re.w_mask=re.w_size-1,re.hash_bits=h+7,re.hash_size=1<<re.hash_bits,re.hash_mask=re.hash_size-1,re.hash_shift=~~((re.hash_bits+A-1)/A),re.window=new a.Buf8(2*re.w_size),re.head=new a.Buf16(re.hash_size),re.prev=new a.Buf16(re.w_size),re.lit_bufsize=1<<h+6,re.pending_buf_size=4*re.lit_bufsize,re.pending_buf=new a.Buf8(re.pending_buf_size),re.d_buf=1*re.lit_bufsize,re.l_buf=3*re.lit_bufsize,re.level=J,re.strategy=H,re.method=K,qe(p)}r=[new Me(0,0,0,0,function(p,J){var K=65535;for(K>p.pending_buf_size-5&&(K=p.pending_buf_size-5);;){if(p.lookahead<=1){if(te(p),p.lookahead===0&&J===x)return u;if(p.lookahead===0)break}p.strstart+=p.lookahead,p.lookahead=0;var N=p.block_start+K;if((p.strstart===0||p.strstart>=N)&&(p.lookahead=p.strstart-N,p.strstart=N,G(p,!1),p.strm.avail_out===0)||p.strstart-p.block_start>=p.w_size-B&&(G(p,!1),p.strm.avail_out===0))return u}return p.insert=0,J===d?(G(p,!0),p.strm.avail_out===0?V:F):(p.strstart>p.block_start&&(G(p,!1),p.strm.avail_out),u)}),new Me(4,4,8,4,fe),new Me(4,5,16,8,fe),new Me(4,6,32,32,fe),new Me(4,4,16,16,se),new Me(8,16,32,32,se),new Me(8,16,128,128,se),new Me(8,32,128,256,se),new Me(32,128,258,1024,se),new Me(32,258,258,4096,se)],s.deflateInit=function(p,J){return Ge(p,J,v,15,8,0)},s.deflateInit2=Ge,s.deflateReset=qe,s.deflateResetKeep=Ce,s.deflateSetHeader=function(p,J){return p&&p.state?p.state.wrap!==2?S:(p.state.gzhead=J,f):S},s.deflate=function(p,J){var K,N,h,H;if(!p||!p.state||5<J||J<0)return p?oe(p,S):S;if(N=p.state,!p.output||!p.input&&p.avail_in!==0||N.status===666&&J!==d)return oe(p,p.avail_out===0?-5:S);if(N.strm=p,K=N.last_flush,N.last_flush=J,N.status===y)if(N.wrap===2)p.adler=0,ge(N,31),ge(N,139),ge(N,8),N.gzhead?(ge(N,(N.gzhead.text?1:0)+(N.gzhead.hcrc?2:0)+(N.gzhead.extra?4:0)+(N.gzhead.name?8:0)+(N.gzhead.comment?16:0)),ge(N,255&N.gzhead.time),ge(N,N.gzhead.time>>8&255),ge(N,N.gzhead.time>>16&255),ge(N,N.gzhead.time>>24&255),ge(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),ge(N,255&N.gzhead.os),N.gzhead.extra&&N.gzhead.extra.length&&(ge(N,255&N.gzhead.extra.length),ge(N,N.gzhead.extra.length>>8&255)),N.gzhead.hcrc&&(p.adler=E(p.adler,N.pending_buf,N.pending,0)),N.gzindex=0,N.status=69):(ge(N,0),ge(N,0),ge(N,0),ge(N,0),ge(N,0),ge(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),ge(N,3),N.status=U);else{var ne=v+(N.w_bits-8<<4)<<8;ne|=(2<=N.strategy||N.level<2?0:N.level<6?1:N.level===6?2:3)<<6,N.strstart!==0&&(ne|=32),ne+=31-ne%31,N.status=U,pe(N,ne),N.strstart!==0&&(pe(N,p.adler>>>16),pe(N,65535&p.adler)),p.adler=1}if(N.status===69)if(N.gzhead.extra){for(h=N.pending;N.gzindex<(65535&N.gzhead.extra.length)&&(N.pending!==N.pending_buf_size||(N.gzhead.hcrc&&N.pending>h&&(p.adler=E(p.adler,N.pending_buf,N.pending-h,h)),W(p),h=N.pending,N.pending!==N.pending_buf_size));)ge(N,255&N.gzhead.extra[N.gzindex]),N.gzindex++;N.gzhead.hcrc&&N.pending>h&&(p.adler=E(p.adler,N.pending_buf,N.pending-h,h)),N.gzindex===N.gzhead.extra.length&&(N.gzindex=0,N.status=73)}else N.status=73;if(N.status===73)if(N.gzhead.name){h=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>h&&(p.adler=E(p.adler,N.pending_buf,N.pending-h,h)),W(p),h=N.pending,N.pending===N.pending_buf_size)){H=1;break}H=N.gzindex<N.gzhead.name.length?255&N.gzhead.name.charCodeAt(N.gzindex++):0,ge(N,H)}while(H!==0);N.gzhead.hcrc&&N.pending>h&&(p.adler=E(p.adler,N.pending_buf,N.pending-h,h)),H===0&&(N.gzindex=0,N.status=91)}else N.status=91;if(N.status===91)if(N.gzhead.comment){h=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>h&&(p.adler=E(p.adler,N.pending_buf,N.pending-h,h)),W(p),h=N.pending,N.pending===N.pending_buf_size)){H=1;break}H=N.gzindex<N.gzhead.comment.length?255&N.gzhead.comment.charCodeAt(N.gzindex++):0,ge(N,H)}while(H!==0);N.gzhead.hcrc&&N.pending>h&&(p.adler=E(p.adler,N.pending_buf,N.pending-h,h)),H===0&&(N.status=103)}else N.status=103;if(N.status===103&&(N.gzhead.hcrc?(N.pending+2>N.pending_buf_size&&W(p),N.pending+2<=N.pending_buf_size&&(ge(N,255&p.adler),ge(N,p.adler>>8&255),p.adler=0,N.status=U)):N.status=U),N.pending!==0){if(W(p),p.avail_out===0)return N.last_flush=-1,f}else if(p.avail_in===0&&Z(J)<=Z(K)&&J!==d)return oe(p,-5);if(N.status===666&&p.avail_in!==0)return oe(p,-5);if(p.avail_in!==0||N.lookahead!==0||J!==x&&N.status!==666){var re=N.strategy===2?(function(k,R){for(var m;;){if(k.lookahead===0&&(te(k),k.lookahead===0)){if(R===x)return u;break}if(k.match_length=0,m=l._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++,m&&(G(k,!1),k.strm.avail_out===0))return u}return k.insert=0,R===d?(G(k,!0),k.strm.avail_out===0?V:F):k.last_lit&&(G(k,!1),k.strm.avail_out===0)?u:O})(N,J):N.strategy===3?(function(k,R){for(var m,I,q,ie,j=k.window;;){if(k.lookahead<=X){if(te(k),k.lookahead<=X&&R===x)return u;if(k.lookahead===0)break}if(k.match_length=0,k.lookahead>=A&&0<k.strstart&&(I=j[q=k.strstart-1])===j[++q]&&I===j[++q]&&I===j[++q]){ie=k.strstart+X;do;while(I===j[++q]&&I===j[++q]&&I===j[++q]&&I===j[++q]&&I===j[++q]&&I===j[++q]&&I===j[++q]&&I===j[++q]&&q<ie);k.match_length=X-(ie-q),k.match_length>k.lookahead&&(k.match_length=k.lookahead)}if(k.match_length>=A?(m=l._tr_tally(k,1,k.match_length-A),k.lookahead-=k.match_length,k.strstart+=k.match_length,k.match_length=0):(m=l._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++),m&&(G(k,!1),k.strm.avail_out===0))return u}return k.insert=0,R===d?(G(k,!0),k.strm.avail_out===0?V:F):k.last_lit&&(G(k,!1),k.strm.avail_out===0)?u:O})(N,J):r[N.level].func(N,J);if(re!==V&&re!==F||(N.status=666),re===u||re===V)return p.avail_out===0&&(N.last_flush=-1),f;if(re===O&&(J===1?l._tr_align(N):J!==5&&(l._tr_stored_block(N,0,0,!1),J===3&&(ue(N.head),N.lookahead===0&&(N.strstart=0,N.block_start=0,N.insert=0))),W(p),p.avail_out===0))return N.last_flush=-1,f}return J!==d?f:N.wrap<=0?1:(N.wrap===2?(ge(N,255&p.adler),ge(N,p.adler>>8&255),ge(N,p.adler>>16&255),ge(N,p.adler>>24&255),ge(N,255&p.total_in),ge(N,p.total_in>>8&255),ge(N,p.total_in>>16&255),ge(N,p.total_in>>24&255)):(pe(N,p.adler>>>16),pe(N,65535&p.adler)),W(p),0<N.wrap&&(N.wrap=-N.wrap),N.pending!==0?f:1)},s.deflateEnd=function(p){var J;return p&&p.state?(J=p.state.status)!==y&&J!==69&&J!==73&&J!==91&&J!==103&&J!==U&&J!==666?oe(p,S):(p.state=null,J===U?oe(p,-3):f):S},s.deflateSetDictionary=function(p,J){var K,N,h,H,ne,re,k,R,m=J.length;if(!p||!p.state||(H=(K=p.state).wrap)===2||H===1&&K.status!==y||K.lookahead)return S;for(H===1&&(p.adler=g(p.adler,J,m,0)),K.wrap=0,m>=K.w_size&&(H===0&&(ue(K.head),K.strstart=0,K.block_start=0,K.insert=0),R=new a.Buf8(K.w_size),a.arraySet(R,J,m-K.w_size,K.w_size,0),J=R,m=K.w_size),ne=p.avail_in,re=p.next_in,k=p.input,p.avail_in=m,p.next_in=0,p.input=J,te(K);K.lookahead>=A;){for(N=K.strstart,h=K.lookahead-(A-1);K.ins_h=(K.ins_h<<K.hash_shift^K.window[N+A-1])&K.hash_mask,K.prev[N&K.w_mask]=K.head[K.ins_h],K.head[K.ins_h]=N,N++,--h;);K.strstart=N,K.lookahead=A-1,te(K)}return K.strstart+=K.lookahead,K.block_start=K.strstart,K.insert=K.lookahead,K.lookahead=0,K.match_length=K.prev_length=A-1,K.match_available=0,p.next_in=re,p.input=k,p.avail_in=ne,K.wrap=H,f},s.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,i,s){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,i,s){i.exports=function(r,a){var l,g,E,b,x,d,f,S,_,c,o,v,T,w,P,D,L,M,A,X,B,y,U,u,O;l=r.state,g=r.next_in,u=r.input,E=g+(r.avail_in-5),b=r.next_out,O=r.output,x=b-(a-r.avail_out),d=b+(r.avail_out-257),f=l.dmax,S=l.wsize,_=l.whave,c=l.wnext,o=l.window,v=l.hold,T=l.bits,w=l.lencode,P=l.distcode,D=(1<<l.lenbits)-1,L=(1<<l.distbits)-1;e:do{T<15&&(v+=u[g++]<<T,T+=8,v+=u[g++]<<T,T+=8),M=w[v&D];t:for(;;){if(v>>>=A=M>>>24,T-=A,(A=M>>>16&255)===0)O[b++]=65535&M;else{if(!(16&A)){if((64&A)==0){M=w[(65535&M)+(v&(1<<A)-1)];continue t}if(32&A){l.mode=12;break e}r.msg="invalid literal/length code",l.mode=30;break e}X=65535&M,(A&=15)&&(T<A&&(v+=u[g++]<<T,T+=8),X+=v&(1<<A)-1,v>>>=A,T-=A),T<15&&(v+=u[g++]<<T,T+=8,v+=u[g++]<<T,T+=8),M=P[v&L];n:for(;;){if(v>>>=A=M>>>24,T-=A,!(16&(A=M>>>16&255))){if((64&A)==0){M=P[(65535&M)+(v&(1<<A)-1)];continue n}r.msg="invalid distance code",l.mode=30;break e}if(B=65535&M,T<(A&=15)&&(v+=u[g++]<<T,(T+=8)<A&&(v+=u[g++]<<T,T+=8)),f<(B+=v&(1<<A)-1)){r.msg="invalid distance too far back",l.mode=30;break e}if(v>>>=A,T-=A,(A=b-x)<B){if(_<(A=B-A)&&l.sane){r.msg="invalid distance too far back",l.mode=30;break e}if(U=o,(y=0)===c){if(y+=S-A,A<X){for(X-=A;O[b++]=o[y++],--A;);y=b-B,U=O}}else if(c<A){if(y+=S+c-A,(A-=c)<X){for(X-=A;O[b++]=o[y++],--A;);if(y=0,c<X){for(X-=A=c;O[b++]=o[y++],--A;);y=b-B,U=O}}}else if(y+=c-A,A<X){for(X-=A;O[b++]=o[y++],--A;);y=b-B,U=O}for(;2<X;)O[b++]=U[y++],O[b++]=U[y++],O[b++]=U[y++],X-=3;X&&(O[b++]=U[y++],1<X&&(O[b++]=U[y++]))}else{for(y=b-B;O[b++]=O[y++],O[b++]=O[y++],O[b++]=O[y++],2<(X-=3););X&&(O[b++]=O[y++],1<X&&(O[b++]=O[y++]))}break}}break}}while(g<E&&b<d);g-=X=T>>3,v&=(1<<(T-=X<<3))-1,r.next_in=g,r.next_out=b,r.avail_in=g<E?E-g+5:5-(g-E),r.avail_out=b<d?d-b+257:257-(b-d),l.hold=v,l.bits=T}},{}],49:[function(t,i,s){var r=t("../utils/common"),a=t("./adler32"),l=t("./crc32"),g=t("./inffast"),E=t("./inftrees"),b=1,x=2,d=0,f=-2,S=1,_=852,c=592;function o(y){return(y>>>24&255)+(y>>>8&65280)+((65280&y)<<8)+((255&y)<<24)}function v(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function T(y){var U;return y&&y.state?(U=y.state,y.total_in=y.total_out=U.total=0,y.msg="",U.wrap&&(y.adler=1&U.wrap),U.mode=S,U.last=0,U.havedict=0,U.dmax=32768,U.head=null,U.hold=0,U.bits=0,U.lencode=U.lendyn=new r.Buf32(_),U.distcode=U.distdyn=new r.Buf32(c),U.sane=1,U.back=-1,d):f}function w(y){var U;return y&&y.state?((U=y.state).wsize=0,U.whave=0,U.wnext=0,T(y)):f}function P(y,U){var u,O;return y&&y.state?(O=y.state,U<0?(u=0,U=-U):(u=1+(U>>4),U<48&&(U&=15)),U&&(U<8||15<U)?f:(O.window!==null&&O.wbits!==U&&(O.window=null),O.wrap=u,O.wbits=U,w(y))):f}function D(y,U){var u,O;return y?(O=new v,(y.state=O).window=null,(u=P(y,U))!==d&&(y.state=null),u):f}var L,M,A=!0;function X(y){if(A){var U;for(L=new r.Buf32(512),M=new r.Buf32(32),U=0;U<144;)y.lens[U++]=8;for(;U<256;)y.lens[U++]=9;for(;U<280;)y.lens[U++]=7;for(;U<288;)y.lens[U++]=8;for(E(b,y.lens,0,288,L,0,y.work,{bits:9}),U=0;U<32;)y.lens[U++]=5;E(x,y.lens,0,32,M,0,y.work,{bits:5}),A=!1}y.lencode=L,y.lenbits=9,y.distcode=M,y.distbits=5}function B(y,U,u,O){var V,F=y.state;return F.window===null&&(F.wsize=1<<F.wbits,F.wnext=0,F.whave=0,F.window=new r.Buf8(F.wsize)),O>=F.wsize?(r.arraySet(F.window,U,u-F.wsize,F.wsize,0),F.wnext=0,F.whave=F.wsize):(O<(V=F.wsize-F.wnext)&&(V=O),r.arraySet(F.window,U,u-O,V,F.wnext),(O-=V)?(r.arraySet(F.window,U,u-O,O,0),F.wnext=O,F.whave=F.wsize):(F.wnext+=V,F.wnext===F.wsize&&(F.wnext=0),F.whave<F.wsize&&(F.whave+=V))),0}s.inflateReset=w,s.inflateReset2=P,s.inflateResetKeep=T,s.inflateInit=function(y){return D(y,15)},s.inflateInit2=D,s.inflate=function(y,U){var u,O,V,F,oe,Z,ue,W,G,ge,pe,ce,te,fe,se,Me,Re,Ce,qe,Ge,p,J,K,N,h=0,H=new r.Buf8(4),ne=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!y||!y.state||!y.output||!y.input&&y.avail_in!==0)return f;(u=y.state).mode===12&&(u.mode=13),oe=y.next_out,V=y.output,ue=y.avail_out,F=y.next_in,O=y.input,Z=y.avail_in,W=u.hold,G=u.bits,ge=Z,pe=ue,J=d;e:for(;;)switch(u.mode){case S:if(u.wrap===0){u.mode=13;break}for(;G<16;){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}if(2&u.wrap&&W===35615){H[u.check=0]=255&W,H[1]=W>>>8&255,u.check=l(u.check,H,2,0),G=W=0,u.mode=2;break}if(u.flags=0,u.head&&(u.head.done=!1),!(1&u.wrap)||(((255&W)<<8)+(W>>8))%31){y.msg="incorrect header check",u.mode=30;break}if((15&W)!=8){y.msg="unknown compression method",u.mode=30;break}if(G-=4,p=8+(15&(W>>>=4)),u.wbits===0)u.wbits=p;else if(p>u.wbits){y.msg="invalid window size",u.mode=30;break}u.dmax=1<<p,y.adler=u.check=1,u.mode=512&W?10:12,G=W=0;break;case 2:for(;G<16;){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}if(u.flags=W,(255&u.flags)!=8){y.msg="unknown compression method",u.mode=30;break}if(57344&u.flags){y.msg="unknown header flags set",u.mode=30;break}u.head&&(u.head.text=W>>8&1),512&u.flags&&(H[0]=255&W,H[1]=W>>>8&255,u.check=l(u.check,H,2,0)),G=W=0,u.mode=3;case 3:for(;G<32;){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}u.head&&(u.head.time=W),512&u.flags&&(H[0]=255&W,H[1]=W>>>8&255,H[2]=W>>>16&255,H[3]=W>>>24&255,u.check=l(u.check,H,4,0)),G=W=0,u.mode=4;case 4:for(;G<16;){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}u.head&&(u.head.xflags=255&W,u.head.os=W>>8),512&u.flags&&(H[0]=255&W,H[1]=W>>>8&255,u.check=l(u.check,H,2,0)),G=W=0,u.mode=5;case 5:if(1024&u.flags){for(;G<16;){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}u.length=W,u.head&&(u.head.extra_len=W),512&u.flags&&(H[0]=255&W,H[1]=W>>>8&255,u.check=l(u.check,H,2,0)),G=W=0}else u.head&&(u.head.extra=null);u.mode=6;case 6:if(1024&u.flags&&(Z<(ce=u.length)&&(ce=Z),ce&&(u.head&&(p=u.head.extra_len-u.length,u.head.extra||(u.head.extra=new Array(u.head.extra_len)),r.arraySet(u.head.extra,O,F,ce,p)),512&u.flags&&(u.check=l(u.check,O,ce,F)),Z-=ce,F+=ce,u.length-=ce),u.length))break e;u.length=0,u.mode=7;case 7:if(2048&u.flags){if(Z===0)break e;for(ce=0;p=O[F+ce++],u.head&&p&&u.length<65536&&(u.head.name+=String.fromCharCode(p)),p&&ce<Z;);if(512&u.flags&&(u.check=l(u.check,O,ce,F)),Z-=ce,F+=ce,p)break e}else u.head&&(u.head.name=null);u.length=0,u.mode=8;case 8:if(4096&u.flags){if(Z===0)break e;for(ce=0;p=O[F+ce++],u.head&&p&&u.length<65536&&(u.head.comment+=String.fromCharCode(p)),p&&ce<Z;);if(512&u.flags&&(u.check=l(u.check,O,ce,F)),Z-=ce,F+=ce,p)break e}else u.head&&(u.head.comment=null);u.mode=9;case 9:if(512&u.flags){for(;G<16;){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}if(W!==(65535&u.check)){y.msg="header crc mismatch",u.mode=30;break}G=W=0}u.head&&(u.head.hcrc=u.flags>>9&1,u.head.done=!0),y.adler=u.check=0,u.mode=12;break;case 10:for(;G<32;){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}y.adler=u.check=o(W),G=W=0,u.mode=11;case 11:if(u.havedict===0)return y.next_out=oe,y.avail_out=ue,y.next_in=F,y.avail_in=Z,u.hold=W,u.bits=G,2;y.adler=u.check=1,u.mode=12;case 12:if(U===5||U===6)break e;case 13:if(u.last){W>>>=7&G,G-=7&G,u.mode=27;break}for(;G<3;){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}switch(u.last=1&W,G-=1,3&(W>>>=1)){case 0:u.mode=14;break;case 1:if(X(u),u.mode=20,U!==6)break;W>>>=2,G-=2;break e;case 2:u.mode=17;break;case 3:y.msg="invalid block type",u.mode=30}W>>>=2,G-=2;break;case 14:for(W>>>=7&G,G-=7&G;G<32;){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}if((65535&W)!=(W>>>16^65535)){y.msg="invalid stored block lengths",u.mode=30;break}if(u.length=65535&W,G=W=0,u.mode=15,U===6)break e;case 15:u.mode=16;case 16:if(ce=u.length){if(Z<ce&&(ce=Z),ue<ce&&(ce=ue),ce===0)break e;r.arraySet(V,O,F,ce,oe),Z-=ce,F+=ce,ue-=ce,oe+=ce,u.length-=ce;break}u.mode=12;break;case 17:for(;G<14;){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}if(u.nlen=257+(31&W),W>>>=5,G-=5,u.ndist=1+(31&W),W>>>=5,G-=5,u.ncode=4+(15&W),W>>>=4,G-=4,286<u.nlen||30<u.ndist){y.msg="too many length or distance symbols",u.mode=30;break}u.have=0,u.mode=18;case 18:for(;u.have<u.ncode;){for(;G<3;){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}u.lens[ne[u.have++]]=7&W,W>>>=3,G-=3}for(;u.have<19;)u.lens[ne[u.have++]]=0;if(u.lencode=u.lendyn,u.lenbits=7,K={bits:u.lenbits},J=E(0,u.lens,0,19,u.lencode,0,u.work,K),u.lenbits=K.bits,J){y.msg="invalid code lengths set",u.mode=30;break}u.have=0,u.mode=19;case 19:for(;u.have<u.nlen+u.ndist;){for(;Me=(h=u.lencode[W&(1<<u.lenbits)-1])>>>16&255,Re=65535&h,!((se=h>>>24)<=G);){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}if(Re<16)W>>>=se,G-=se,u.lens[u.have++]=Re;else{if(Re===16){for(N=se+2;G<N;){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}if(W>>>=se,G-=se,u.have===0){y.msg="invalid bit length repeat",u.mode=30;break}p=u.lens[u.have-1],ce=3+(3&W),W>>>=2,G-=2}else if(Re===17){for(N=se+3;G<N;){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}G-=se,p=0,ce=3+(7&(W>>>=se)),W>>>=3,G-=3}else{for(N=se+7;G<N;){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}G-=se,p=0,ce=11+(127&(W>>>=se)),W>>>=7,G-=7}if(u.have+ce>u.nlen+u.ndist){y.msg="invalid bit length repeat",u.mode=30;break}for(;ce--;)u.lens[u.have++]=p}}if(u.mode===30)break;if(u.lens[256]===0){y.msg="invalid code -- missing end-of-block",u.mode=30;break}if(u.lenbits=9,K={bits:u.lenbits},J=E(b,u.lens,0,u.nlen,u.lencode,0,u.work,K),u.lenbits=K.bits,J){y.msg="invalid literal/lengths set",u.mode=30;break}if(u.distbits=6,u.distcode=u.distdyn,K={bits:u.distbits},J=E(x,u.lens,u.nlen,u.ndist,u.distcode,0,u.work,K),u.distbits=K.bits,J){y.msg="invalid distances set",u.mode=30;break}if(u.mode=20,U===6)break e;case 20:u.mode=21;case 21:if(6<=Z&&258<=ue){y.next_out=oe,y.avail_out=ue,y.next_in=F,y.avail_in=Z,u.hold=W,u.bits=G,g(y,pe),oe=y.next_out,V=y.output,ue=y.avail_out,F=y.next_in,O=y.input,Z=y.avail_in,W=u.hold,G=u.bits,u.mode===12&&(u.back=-1);break}for(u.back=0;Me=(h=u.lencode[W&(1<<u.lenbits)-1])>>>16&255,Re=65535&h,!((se=h>>>24)<=G);){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}if(Me&&(240&Me)==0){for(Ce=se,qe=Me,Ge=Re;Me=(h=u.lencode[Ge+((W&(1<<Ce+qe)-1)>>Ce)])>>>16&255,Re=65535&h,!(Ce+(se=h>>>24)<=G);){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}W>>>=Ce,G-=Ce,u.back+=Ce}if(W>>>=se,G-=se,u.back+=se,u.length=Re,Me===0){u.mode=26;break}if(32&Me){u.back=-1,u.mode=12;break}if(64&Me){y.msg="invalid literal/length code",u.mode=30;break}u.extra=15&Me,u.mode=22;case 22:if(u.extra){for(N=u.extra;G<N;){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}u.length+=W&(1<<u.extra)-1,W>>>=u.extra,G-=u.extra,u.back+=u.extra}u.was=u.length,u.mode=23;case 23:for(;Me=(h=u.distcode[W&(1<<u.distbits)-1])>>>16&255,Re=65535&h,!((se=h>>>24)<=G);){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}if((240&Me)==0){for(Ce=se,qe=Me,Ge=Re;Me=(h=u.distcode[Ge+((W&(1<<Ce+qe)-1)>>Ce)])>>>16&255,Re=65535&h,!(Ce+(se=h>>>24)<=G);){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}W>>>=Ce,G-=Ce,u.back+=Ce}if(W>>>=se,G-=se,u.back+=se,64&Me){y.msg="invalid distance code",u.mode=30;break}u.offset=Re,u.extra=15&Me,u.mode=24;case 24:if(u.extra){for(N=u.extra;G<N;){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}u.offset+=W&(1<<u.extra)-1,W>>>=u.extra,G-=u.extra,u.back+=u.extra}if(u.offset>u.dmax){y.msg="invalid distance too far back",u.mode=30;break}u.mode=25;case 25:if(ue===0)break e;if(ce=pe-ue,u.offset>ce){if((ce=u.offset-ce)>u.whave&&u.sane){y.msg="invalid distance too far back",u.mode=30;break}te=ce>u.wnext?(ce-=u.wnext,u.wsize-ce):u.wnext-ce,ce>u.length&&(ce=u.length),fe=u.window}else fe=V,te=oe-u.offset,ce=u.length;for(ue<ce&&(ce=ue),ue-=ce,u.length-=ce;V[oe++]=fe[te++],--ce;);u.length===0&&(u.mode=21);break;case 26:if(ue===0)break e;V[oe++]=u.length,ue--,u.mode=21;break;case 27:if(u.wrap){for(;G<32;){if(Z===0)break e;Z--,W|=O[F++]<<G,G+=8}if(pe-=ue,y.total_out+=pe,u.total+=pe,pe&&(y.adler=u.check=u.flags?l(u.check,V,pe,oe-pe):a(u.check,V,pe,oe-pe)),pe=ue,(u.flags?W:o(W))!==u.check){y.msg="incorrect data check",u.mode=30;break}G=W=0}u.mode=28;case 28:if(u.wrap&&u.flags){for(;G<32;){if(Z===0)break e;Z--,W+=O[F++]<<G,G+=8}if(W!==(4294967295&u.total)){y.msg="incorrect length check",u.mode=30;break}G=W=0}u.mode=29;case 29:J=1;break e;case 30:J=-3;break e;case 31:return-4;default:return f}return y.next_out=oe,y.avail_out=ue,y.next_in=F,y.avail_in=Z,u.hold=W,u.bits=G,(u.wsize||pe!==y.avail_out&&u.mode<30&&(u.mode<27||U!==4))&&B(y,y.output,y.next_out,pe-y.avail_out)?(u.mode=31,-4):(ge-=y.avail_in,pe-=y.avail_out,y.total_in+=ge,y.total_out+=pe,u.total+=pe,u.wrap&&pe&&(y.adler=u.check=u.flags?l(u.check,V,pe,y.next_out-pe):a(u.check,V,pe,y.next_out-pe)),y.data_type=u.bits+(u.last?64:0)+(u.mode===12?128:0)+(u.mode===20||u.mode===15?256:0),(ge==0&&pe===0||U===4)&&J===d&&(J=-5),J)},s.inflateEnd=function(y){if(!y||!y.state)return f;var U=y.state;return U.window&&(U.window=null),y.state=null,d},s.inflateGetHeader=function(y,U){var u;return y&&y.state?(2&(u=y.state).wrap)==0?f:((u.head=U).done=!1,d):f},s.inflateSetDictionary=function(y,U){var u,O=U.length;return y&&y.state?(u=y.state).wrap!==0&&u.mode!==11?f:u.mode===11&&a(1,U,O,0)!==u.check?-3:B(y,U,O,O)?(u.mode=31,-4):(u.havedict=1,d):f},s.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,i,s){var r=t("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],g=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],E=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(b,x,d,f,S,_,c,o){var v,T,w,P,D,L,M,A,X,B=o.bits,y=0,U=0,u=0,O=0,V=0,F=0,oe=0,Z=0,ue=0,W=0,G=null,ge=0,pe=new r.Buf16(16),ce=new r.Buf16(16),te=null,fe=0;for(y=0;y<=15;y++)pe[y]=0;for(U=0;U<f;U++)pe[x[d+U]]++;for(V=B,O=15;1<=O&&pe[O]===0;O--);if(O<V&&(V=O),O===0)return S[_++]=20971520,S[_++]=20971520,o.bits=1,0;for(u=1;u<O&&pe[u]===0;u++);for(V<u&&(V=u),y=Z=1;y<=15;y++)if(Z<<=1,(Z-=pe[y])<0)return-1;if(0<Z&&(b===0||O!==1))return-1;for(ce[1]=0,y=1;y<15;y++)ce[y+1]=ce[y]+pe[y];for(U=0;U<f;U++)x[d+U]!==0&&(c[ce[x[d+U]]++]=U);if(L=b===0?(G=te=c,19):b===1?(G=a,ge-=257,te=l,fe-=257,256):(G=g,te=E,-1),y=u,D=_,oe=U=W=0,w=-1,P=(ue=1<<(F=V))-1,b===1&&852<ue||b===2&&592<ue)return 1;for(;;){for(M=y-oe,X=c[U]<L?(A=0,c[U]):c[U]>L?(A=te[fe+c[U]],G[ge+c[U]]):(A=96,0),v=1<<y-oe,u=T=1<<F;S[D+(W>>oe)+(T-=v)]=M<<24|A<<16|X|0,T!==0;);for(v=1<<y-1;W&v;)v>>=1;if(v!==0?(W&=v-1,W+=v):W=0,U++,--pe[y]==0){if(y===O)break;y=x[d+c[U]]}if(V<y&&(W&P)!==w){for(oe===0&&(oe=V),D+=u,Z=1<<(F=y-oe);F+oe<O&&!((Z-=pe[F+oe])<=0);)F++,Z<<=1;if(ue+=1<<F,b===1&&852<ue||b===2&&592<ue)return 1;S[w=W&P]=V<<24|F<<16|D-_|0}}return W!==0&&(S[D+W]=y-oe<<24|64<<16|0),o.bits=V,0}},{"../utils/common":41}],51:[function(t,i,s){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,i,s){var r=t("../utils/common"),a=0,l=1;function g(h){for(var H=h.length;0<=--H;)h[H]=0}var E=0,b=29,x=256,d=x+1+b,f=30,S=19,_=2*d+1,c=15,o=16,v=7,T=256,w=16,P=17,D=18,L=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],M=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],X=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],B=new Array(2*(d+2));g(B);var y=new Array(2*f);g(y);var U=new Array(512);g(U);var u=new Array(256);g(u);var O=new Array(b);g(O);var V,F,oe,Z=new Array(f);function ue(h,H,ne,re,k){this.static_tree=h,this.extra_bits=H,this.extra_base=ne,this.elems=re,this.max_length=k,this.has_stree=h&&h.length}function W(h,H){this.dyn_tree=h,this.max_code=0,this.stat_desc=H}function G(h){return h<256?U[h]:U[256+(h>>>7)]}function ge(h,H){h.pending_buf[h.pending++]=255&H,h.pending_buf[h.pending++]=H>>>8&255}function pe(h,H,ne){h.bi_valid>o-ne?(h.bi_buf|=H<<h.bi_valid&65535,ge(h,h.bi_buf),h.bi_buf=H>>o-h.bi_valid,h.bi_valid+=ne-o):(h.bi_buf|=H<<h.bi_valid&65535,h.bi_valid+=ne)}function ce(h,H,ne){pe(h,ne[2*H],ne[2*H+1])}function te(h,H){for(var ne=0;ne|=1&h,h>>>=1,ne<<=1,0<--H;);return ne>>>1}function fe(h,H,ne){var re,k,R=new Array(c+1),m=0;for(re=1;re<=c;re++)R[re]=m=m+ne[re-1]<<1;for(k=0;k<=H;k++){var I=h[2*k+1];I!==0&&(h[2*k]=te(R[I]++,I))}}function se(h){var H;for(H=0;H<d;H++)h.dyn_ltree[2*H]=0;for(H=0;H<f;H++)h.dyn_dtree[2*H]=0;for(H=0;H<S;H++)h.bl_tree[2*H]=0;h.dyn_ltree[2*T]=1,h.opt_len=h.static_len=0,h.last_lit=h.matches=0}function Me(h){8<h.bi_valid?ge(h,h.bi_buf):0<h.bi_valid&&(h.pending_buf[h.pending++]=h.bi_buf),h.bi_buf=0,h.bi_valid=0}function Re(h,H,ne,re){var k=2*H,R=2*ne;return h[k]<h[R]||h[k]===h[R]&&re[H]<=re[ne]}function Ce(h,H,ne){for(var re=h.heap[ne],k=ne<<1;k<=h.heap_len&&(k<h.heap_len&&Re(H,h.heap[k+1],h.heap[k],h.depth)&&k++,!Re(H,re,h.heap[k],h.depth));)h.heap[ne]=h.heap[k],ne=k,k<<=1;h.heap[ne]=re}function qe(h,H,ne){var re,k,R,m,I=0;if(h.last_lit!==0)for(;re=h.pending_buf[h.d_buf+2*I]<<8|h.pending_buf[h.d_buf+2*I+1],k=h.pending_buf[h.l_buf+I],I++,re===0?ce(h,k,H):(ce(h,(R=u[k])+x+1,H),(m=L[R])!==0&&pe(h,k-=O[R],m),ce(h,R=G(--re),ne),(m=M[R])!==0&&pe(h,re-=Z[R],m)),I<h.last_lit;);ce(h,T,H)}function Ge(h,H){var ne,re,k,R=H.dyn_tree,m=H.stat_desc.static_tree,I=H.stat_desc.has_stree,q=H.stat_desc.elems,ie=-1;for(h.heap_len=0,h.heap_max=_,ne=0;ne<q;ne++)R[2*ne]!==0?(h.heap[++h.heap_len]=ie=ne,h.depth[ne]=0):R[2*ne+1]=0;for(;h.heap_len<2;)R[2*(k=h.heap[++h.heap_len]=ie<2?++ie:0)]=1,h.depth[k]=0,h.opt_len--,I&&(h.static_len-=m[2*k+1]);for(H.max_code=ie,ne=h.heap_len>>1;1<=ne;ne--)Ce(h,R,ne);for(k=q;ne=h.heap[1],h.heap[1]=h.heap[h.heap_len--],Ce(h,R,1),re=h.heap[1],h.heap[--h.heap_max]=ne,h.heap[--h.heap_max]=re,R[2*k]=R[2*ne]+R[2*re],h.depth[k]=(h.depth[ne]>=h.depth[re]?h.depth[ne]:h.depth[re])+1,R[2*ne+1]=R[2*re+1]=k,h.heap[1]=k++,Ce(h,R,1),2<=h.heap_len;);h.heap[--h.heap_max]=h.heap[1],(function(j,Ee){var _e,Pe,Be,le,he,De,we=Ee.dyn_tree,Te=Ee.max_code,Ve=Ee.stat_desc.static_tree,z=Ee.stat_desc.has_stree,ve=Ee.stat_desc.extra_bits,me=Ee.stat_desc.extra_base,Ae=Ee.stat_desc.max_length,de=0;for(le=0;le<=c;le++)j.bl_count[le]=0;for(we[2*j.heap[j.heap_max]+1]=0,_e=j.heap_max+1;_e<_;_e++)Ae<(le=we[2*we[2*(Pe=j.heap[_e])+1]+1]+1)&&(le=Ae,de++),we[2*Pe+1]=le,Te<Pe||(j.bl_count[le]++,he=0,me<=Pe&&(he=ve[Pe-me]),De=we[2*Pe],j.opt_len+=De*(le+he),z&&(j.static_len+=De*(Ve[2*Pe+1]+he)));if(de!==0){do{for(le=Ae-1;j.bl_count[le]===0;)le--;j.bl_count[le]--,j.bl_count[le+1]+=2,j.bl_count[Ae]--,de-=2}while(0<de);for(le=Ae;le!==0;le--)for(Pe=j.bl_count[le];Pe!==0;)Te<(Be=j.heap[--_e])||(we[2*Be+1]!==le&&(j.opt_len+=(le-we[2*Be+1])*we[2*Be],we[2*Be+1]=le),Pe--)}})(h,H),fe(R,ie,h.bl_count)}function p(h,H,ne){var re,k,R=-1,m=H[1],I=0,q=7,ie=4;for(m===0&&(q=138,ie=3),H[2*(ne+1)+1]=65535,re=0;re<=ne;re++)k=m,m=H[2*(re+1)+1],++I<q&&k===m||(I<ie?h.bl_tree[2*k]+=I:k!==0?(k!==R&&h.bl_tree[2*k]++,h.bl_tree[2*w]++):I<=10?h.bl_tree[2*P]++:h.bl_tree[2*D]++,R=k,ie=(I=0)===m?(q=138,3):k===m?(q=6,3):(q=7,4))}function J(h,H,ne){var re,k,R=-1,m=H[1],I=0,q=7,ie=4;for(m===0&&(q=138,ie=3),re=0;re<=ne;re++)if(k=m,m=H[2*(re+1)+1],!(++I<q&&k===m)){if(I<ie)for(;ce(h,k,h.bl_tree),--I!=0;);else k!==0?(k!==R&&(ce(h,k,h.bl_tree),I--),ce(h,w,h.bl_tree),pe(h,I-3,2)):I<=10?(ce(h,P,h.bl_tree),pe(h,I-3,3)):(ce(h,D,h.bl_tree),pe(h,I-11,7));R=k,ie=(I=0)===m?(q=138,3):k===m?(q=6,3):(q=7,4)}}g(Z);var K=!1;function N(h,H,ne,re){pe(h,(E<<1)+(re?1:0),3),(function(k,R,m,I){Me(k),ge(k,m),ge(k,~m),r.arraySet(k.pending_buf,k.window,R,m,k.pending),k.pending+=m})(h,H,ne)}s._tr_init=function(h){K||((function(){var H,ne,re,k,R,m=new Array(c+1);for(k=re=0;k<b-1;k++)for(O[k]=re,H=0;H<1<<L[k];H++)u[re++]=k;for(u[re-1]=k,k=R=0;k<16;k++)for(Z[k]=R,H=0;H<1<<M[k];H++)U[R++]=k;for(R>>=7;k<f;k++)for(Z[k]=R<<7,H=0;H<1<<M[k]-7;H++)U[256+R++]=k;for(ne=0;ne<=c;ne++)m[ne]=0;for(H=0;H<=143;)B[2*H+1]=8,H++,m[8]++;for(;H<=255;)B[2*H+1]=9,H++,m[9]++;for(;H<=279;)B[2*H+1]=7,H++,m[7]++;for(;H<=287;)B[2*H+1]=8,H++,m[8]++;for(fe(B,d+1,m),H=0;H<f;H++)y[2*H+1]=5,y[2*H]=te(H,5);V=new ue(B,L,x+1,d,c),F=new ue(y,M,0,f,c),oe=new ue(new Array(0),A,0,S,v)})(),K=!0),h.l_desc=new W(h.dyn_ltree,V),h.d_desc=new W(h.dyn_dtree,F),h.bl_desc=new W(h.bl_tree,oe),h.bi_buf=0,h.bi_valid=0,se(h)},s._tr_stored_block=N,s._tr_flush_block=function(h,H,ne,re){var k,R,m=0;0<h.level?(h.strm.data_type===2&&(h.strm.data_type=(function(I){var q,ie=4093624447;for(q=0;q<=31;q++,ie>>>=1)if(1&ie&&I.dyn_ltree[2*q]!==0)return a;if(I.dyn_ltree[18]!==0||I.dyn_ltree[20]!==0||I.dyn_ltree[26]!==0)return l;for(q=32;q<x;q++)if(I.dyn_ltree[2*q]!==0)return l;return a})(h)),Ge(h,h.l_desc),Ge(h,h.d_desc),m=(function(I){var q;for(p(I,I.dyn_ltree,I.l_desc.max_code),p(I,I.dyn_dtree,I.d_desc.max_code),Ge(I,I.bl_desc),q=S-1;3<=q&&I.bl_tree[2*X[q]+1]===0;q--);return I.opt_len+=3*(q+1)+5+5+4,q})(h),k=h.opt_len+3+7>>>3,(R=h.static_len+3+7>>>3)<=k&&(k=R)):k=R=ne+5,ne+4<=k&&H!==-1?N(h,H,ne,re):h.strategy===4||R===k?(pe(h,2+(re?1:0),3),qe(h,B,y)):(pe(h,4+(re?1:0),3),(function(I,q,ie,j){var Ee;for(pe(I,q-257,5),pe(I,ie-1,5),pe(I,j-4,4),Ee=0;Ee<j;Ee++)pe(I,I.bl_tree[2*X[Ee]+1],3);J(I,I.dyn_ltree,q-1),J(I,I.dyn_dtree,ie-1)})(h,h.l_desc.max_code+1,h.d_desc.max_code+1,m+1),qe(h,h.dyn_ltree,h.dyn_dtree)),se(h),re&&Me(h)},s._tr_tally=function(h,H,ne){return h.pending_buf[h.d_buf+2*h.last_lit]=H>>>8&255,h.pending_buf[h.d_buf+2*h.last_lit+1]=255&H,h.pending_buf[h.l_buf+h.last_lit]=255&ne,h.last_lit++,H===0?h.dyn_ltree[2*ne]++:(h.matches++,H--,h.dyn_ltree[2*(u[ne]+x+1)]++,h.dyn_dtree[2*G(H)]++),h.last_lit===h.lit_bufsize-1},s._tr_align=function(h){pe(h,2,3),ce(h,T,B),(function(H){H.bi_valid===16?(ge(H,H.bi_buf),H.bi_buf=0,H.bi_valid=0):8<=H.bi_valid&&(H.pending_buf[H.pending++]=255&H.bi_buf,H.bi_buf>>=8,H.bi_valid-=8)})(h)}},{"../utils/common":41}],53:[function(t,i,s){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,i,s){(function(r){(function(a,l){if(!a.setImmediate){var g,E,b,x,d=1,f={},S=!1,_=a.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(a);c=c&&c.setTimeout?c:a,g={}.toString.call(a.process)==="[object process]"?function(w){process.nextTick(function(){v(w)})}:(function(){if(a.postMessage&&!a.importScripts){var w=!0,P=a.onmessage;return a.onmessage=function(){w=!1},a.postMessage("","*"),a.onmessage=P,w}})()?(x="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",T,!1):a.attachEvent("onmessage",T),function(w){a.postMessage(x+w,"*")}):a.MessageChannel?((b=new MessageChannel).port1.onmessage=function(w){v(w.data)},function(w){b.port2.postMessage(w)}):_&&"onreadystatechange"in _.createElement("script")?(E=_.documentElement,function(w){var P=_.createElement("script");P.onreadystatechange=function(){v(w),P.onreadystatechange=null,E.removeChild(P),P=null},E.appendChild(P)}):function(w){setTimeout(v,0,w)},c.setImmediate=function(w){typeof w!="function"&&(w=new Function(""+w));for(var P=new Array(arguments.length-1),D=0;D<P.length;D++)P[D]=arguments[D+1];var L={callback:w,args:P};return f[d]=L,g(d),d++},c.clearImmediate=o}function o(w){delete f[w]}function v(w){if(S)setTimeout(v,0,w);else{var P=f[w];if(P){S=!0;try{(function(D){var L=D.callback,M=D.args;switch(M.length){case 0:L();break;case 1:L(M[0]);break;case 2:L(M[0],M[1]);break;case 3:L(M[0],M[1],M[2]);break;default:L.apply(l,M)}})(P)}finally{o(w),S=!1}}}}function T(w){w.source===a&&typeof w.data=="string"&&w.data.indexOf(x)===0&&v(+w.data.slice(x.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof In<"u"?In:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(_i)),_i.exports}var Vd=zd();const oa=Hd(Vd),Wd="assets/minecraft/textures/item/skin.png",sa="assets/minecraft/items/totem_of_undying.json",Va="assets/minecraft",zn=e=>`${Va}/models/${Wa(e)}.json`,Xd=e=>`${Va}/textures/${Wa(e)}.png`;function Wa(e){if(e.startsWith("minecraft:"))return e.slice(10);if(e.includes(":"))throw new Error(`Unsupported pack namespace: ${e}`);return e}function gi({model:{fallback:e,cases:n}}){return new Map([["Default",e.model],...n.map(({when:t,model:i})=>[t,i.model])])}const la=e=>zn(e).split("/").at(-1);async function Yd(e,n,t){const i=await oa.loadAsync(e),s=gi(JSON.parse(await vi(i,sa,"string"))),r=()=>t("totem_of_undying_small.json");async function a(l,g="classic"){if(g==="slim"){const x=gi(JSON.parse(await r()));return JSON.parse(await t(la(x.get(l))))}const E=s.get(l),b=l==="Default"?n:await vi(i,zn(E),"string");return JSON.parse(b)}return{getModel:a,getTexture:l=>vi(i,Xd(l),"blob"),async export(l,g="classic"){const E=await oa.loadAsync(e);if(E.file(zn(s.get("Default")),n),g==="slim"){const b=await r();E.file(sa,b),await Promise.all(Array.from(gi(JSON.parse(b)).values(),async x=>{E.file(zn(x),await t(la(x)))}))}return E.file(Wd,await l.arrayBuffer()),E.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}})}}}function vi(e,n,t){const i=e.file(n);if(!i)throw new Error(`Missing pack asset: ${n}`);return i.async(t)}const Kd=[137,80,78,71,13,10,26,10];function Ri(e,n,t=4){return{top:[e+4,n,t,4],bottom:[e+4+t,n,t,4],right:[e,n+4,4,12],front:[e+4,n+4,t,12],left:[e+4+t,n+4,4,12],back:[e+8+t,n+4,t,12]}}function qd({data:e,width:n,height:t}){if(t===32)return"classic";const i=([r,a,l,g])=>{for(let E=a;E<a+g;E+=1)for(let b=r;b<r+l;b+=1)if(e[(E*n+b)*4+3]>0)return!0;return!1};return[[40,16],[32,48]].every(([r,a])=>!i([r+10,a,2,4])&&!i([r+14,a+4,2,12])&&i(Ri(r,a,3).front))?"slim":"classic"}function Zd(e){const n=new DataView(e.buffer,e.byteOffset,e.byteLength);if(e.length<33||!Kd.every((s,r)=>e[r]===s)||n.getUint32(8)!==13||n.getUint32(12)!==1229472850)throw new Error("Choose a valid Minecraft skin PNG.");const t=n.getUint32(16),i=n.getUint32(20);if(t!==64||i!==64&&i!==32)throw new Error(`This PNG is ${t} × ${i}. Use a 64 × 64 or 64 × 32 Minecraft skin.`);return{width:t,height:i}}function Xa(e=64,n=64){const t=document.createElement("canvas");t.width=e,t.height=n;const i=t.getContext("2d",{willReadFrequently:!0});return i.imageSmoothingEnabled=!1,i}function Ya(e){return new Promise((n,t)=>{e.toBlob(i=>i?n(i):t(new Error("Could not create the PNG.")),"image/png")})}async function Ka(e){const n=await createImageBitmap(e.slice(0,e.size,"image/png"),{colorSpaceConversion:"none"}),t=Xa(n.width,n.height);try{return t.drawImage(n,0,0),t}finally{n.close()}}async function qa(e){if(e.size>1024*1024)throw new Error("Choose a Minecraft skin PNG under 1 MB.");const{height:n}=Zd(new Uint8Array(await e.slice(0,33).arrayBuffer()));let t;try{t=await Ka(e)}catch{throw new Error("This PNG could not be decoded. Try another skin file.")}if(!t.getImageData(8,8,8,8).data.some((r,a)=>a%4===3&&r>0))throw new Error("The base face is empty. Export a Minecraft skin with a visible face.");const s=qd(t.getImageData(0,0,64,n));return{file:e,source:t,height:n,armType:s}}async function Za({file:e,source:n,height:t,armType:i}){if(t===64)return{image:n.canvas,png:e,armType:i};const s=Xa();return s.drawImage(n.canvas,0,0),jd(s,n),{image:s.canvas,png:await Ya(s.canvas),armType:"classic"}}function jd(e,n){n.getImageData(32,0,32,32).data.every((s,r)=>r%4!==3||s>=128)&&e.clearRect(32,0,32,16);for(const[s,r]of[[0,16],[40,32]]){const a=Ri(s,16),l=Ri(r,48);for(const[g,[E,b,x,d]]of Object.entries(l)){const f=g==="left"?"right":g==="right"?"left":g;e.save(),e.translate(E+x,b),e.scale(-1,1),e.drawImage(n.canvas,...a[f],0,0,x,d),e.restore()}}for(const[s,r,a,l]of[[0,0,32,16],[0,16,64,16],[16,48,32,16]]){const g=e.getImageData(s,r,a,l);for(let E=3;E<g.data.length;E+=4)g.data[E]=255;e.putImageData(g,s,r)}}function $d(e,n){const t=e.getContext("2d");t.clearRect(0,0,8,8),t.drawImage(n,8,8,8,8,0,0,8,8),t.drawImage(n,40,8,8,8,0,0,8,8)}const ca={type:"change"},Ii={type:"start"},ja={type:"end"},On=new Ps,fa=new ma,Qd=Math.cos(70*Wt.DEG2RAD),ct=new ke,mt=2*Math.PI,Qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Si=1e-6;class Jd extends ys{constructor(n,t=null){super(n,t),this.state=Qe.NONE,this.target=new ke,this.cursor=new ke,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cn.ROTATE,MIDDLE:cn.DOLLY,RIGHT:cn.PAN},this.touches={ONE:ln.ROTATE,TWO:ln.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ke,this._lastQuaternion=new Mi,this._lastTargetPosition=new ke,this._quat=new Mi().setFromUnitVectors(n.up,new ke(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ti,this._sphericalDelta=new Ti,this._scale=1,this._panOffset=new ke,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new ke,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=th.bind(this),this._onPointerDown=eh.bind(this),this._onPointerUp=nh.bind(this),this._onContextMenu=ch.bind(this),this._onMouseWheel=ah.bind(this),this._onKeyDown=oh.bind(this),this._onTouchStart=sh.bind(this),this._onTouchMove=lh.bind(this),this._onMouseDown=ih.bind(this),this._onMouseMove=rh.bind(this),this._interceptControlDown=fh.bind(this),this._interceptControlUp=uh.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(n){this._cursorStyle=n,n==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(n){super.connect(n),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(n){n.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=n}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ca),this.update(),this.state=Qe.NONE}pan(n,t){this._pan(n,t),this.update()}dollyIn(n){this._dollyIn(n),this.update()}dollyOut(n){this._dollyOut(n),this.update()}rotateLeft(n){this._rotateLeft(n),this.update()}rotateUp(n){this._rotateUp(n),this.update()}update(n=null){const t=this.object.position;ct.copy(t).sub(this.target),ct.applyQuaternion(this._quat),this._spherical.setFromVector3(ct),this.autoRotate&&this.state===Qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(n)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=mt:i>Math.PI&&(i-=mt),s<-Math.PI?s+=mt:s>Math.PI&&(s-=mt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ct.setFromSpherical(this._spherical),ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const l=ct.length();a=this._clampDistance(l*this._scale);const g=l-a;this.object.position.addScaledVector(this._dollyDirection,g),this.object.updateMatrixWorld(),r=!!g}else if(this.object.isOrthographicCamera){const l=new ke(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const g=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=g!==this.object.zoom;const E=new ke(this._mouse.x,this._mouse.y,0);E.unproject(this.object),this.object.position.sub(E).add(l),this.object.updateMatrixWorld(),a=ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(On.origin.copy(this.object.position),On.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(On.direction))<Qd?this.object.lookAt(this.target):(fa.setFromNormalAndCoplanarPoint(this.object.up,this.target),On.intersectPlane(fa,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Si||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Si||this._lastTargetPosition.distanceToSquared(this.target)>Si?(this.dispatchEvent(ca),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(n){return n!==null?mt/60*this.autoRotateSpeed*n:mt/60/60*this.autoRotateSpeed}_getZoomScale(n){const t=Math.abs(n*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(n){this._sphericalDelta.theta-=n}_rotateUp(n){this._sphericalDelta.phi-=n}_panLeft(n,t){ct.setFromMatrixColumn(t,0),ct.multiplyScalar(-n),this._panOffset.add(ct)}_panUp(n,t){this.screenSpacePanning===!0?ct.setFromMatrixColumn(t,1):(ct.setFromMatrixColumn(t,0),ct.crossVectors(this.object.up,ct)),ct.multiplyScalar(n),this._panOffset.add(ct)}_pan(n,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ct.copy(s).sub(this.target);let r=ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*n*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(n*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(n,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=n-i.left,r=t-i.top,a=i.width,l=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(n){return Math.max(this.minDistance,Math.min(this.maxDistance,n))}_handleMouseDownRotate(n){this._rotateStart.set(n.clientX,n.clientY)}_handleMouseDownDolly(n){this._updateZoomParameters(n.clientX,n.clientX),this._dollyStart.set(n.clientX,n.clientY)}_handleMouseDownPan(n){this._panStart.set(n.clientX,n.clientY)}_handleMouseMoveRotate(n){this._rotateEnd.set(n.clientX,n.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(mt*this._rotateDelta.x/t.clientHeight),this._rotateUp(mt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(n){this._dollyEnd.set(n.clientX,n.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(n){this._panEnd.set(n.clientX,n.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(n){this._updateZoomParameters(n.clientX,n.clientY),n.deltaY<0?this._dollyIn(this._getZoomScale(n.deltaY)):n.deltaY>0&&this._dollyOut(this._getZoomScale(n.deltaY)),this.update()}_handleKeyDown(n){let t=!1;switch(n.code){case this.keys.UP:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(mt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(-mt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(mt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(-mt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(n.preventDefault(),this.update())}_handleTouchStartRotate(n){if(this._pointers.length===1)this._rotateStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),s=.5*(n.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(n){if(this._pointers.length===1)this._panStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),s=.5*(n.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,s=n.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enablePan&&this._handleTouchStartPan(n)}_handleTouchStartDollyRotate(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enableRotate&&this._handleTouchStartRotate(n)}_handleTouchMoveRotate(n){if(this._pointers.length==1)this._rotateEnd.set(n.pageX,n.pageY);else{const i=this._getSecondPointerPosition(n),s=.5*(n.pageX+i.x),r=.5*(n.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(mt*this._rotateDelta.x/t.clientHeight),this._rotateUp(mt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(n){if(this._pointers.length===1)this._panEnd.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),s=.5*(n.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,s=n.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(n.pageX+t.x)*.5,l=(n.pageY+t.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enablePan&&this._handleTouchMovePan(n)}_handleTouchMoveDollyRotate(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enableRotate&&this._handleTouchMoveRotate(n)}_addPointer(n){this._pointers.push(n.pointerId)}_removePointer(n){delete this._pointerPositions[n.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(n){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId)return!0;return!1}_trackPointer(n){let t=this._pointerPositions[n.pointerId];t===void 0&&(t=new rt,this._pointerPositions[n.pointerId]=t),t.set(n.pageX,n.pageY)}_getSecondPointerPosition(n){const t=n.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(n){const t=n.deltaMode,i={clientX:n.clientX,clientY:n.clientY,deltaY:n.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return n.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function eh(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function th(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function nh(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ja),this.state=Qe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const n=this._pointers[0],t=this._pointerPositions[n];this._onTouchStart({pointerId:n,pageX:t.x,pageY:t.y});break}}function ih(e){let n;switch(e.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case cn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Qe.DOLLY;break;case cn.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Qe.ROTATE}break;case cn.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Qe.PAN}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(Ii)}function rh(e){switch(this.state){case Qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function ah(e){this.enabled===!1||this.enableZoom===!1||this.state!==Qe.NONE||(e.preventDefault(),this.dispatchEvent(Ii),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(ja))}function oh(e){this.enabled!==!1&&this._handleKeyDown(e)}function sh(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case ln.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Qe.TOUCH_ROTATE;break;case ln.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Qe.TOUCH_PAN;break;default:this.state=Qe.NONE}break;case 2:switch(this.touches.TWO){case ln.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Qe.TOUCH_DOLLY_PAN;break;case ln.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Qe.TOUCH_DOLLY_ROTATE;break;default:this.state=Qe.NONE}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(Ii)}function lh(e){switch(this._trackPointer(e),this.state){case Qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Qe.NONE}}function ch(e){this.enabled!==!1&&e.preventDefault()}function fh(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uh(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dh(e,{onZoom:n,onContext:t}){const i=new Pd({canvas:e,alpha:!0,antialias:!0});i.setClearColor(0,0);const s=new Ds,r=new Ci(-7,7,7,-7,.1,100),a=new Jd(r,e);a.enablePan=!1,a.enableDamping=!0,a.dampingFactor=.16,a.autoRotateSpeed=1.35,a.minZoom=.65,a.maxZoom=2.1,a.minPolarAngle=.17,a.maxPolarAngle=Math.PI-.17;const l=window.matchMedia("(prefers-reduced-motion: reduce)"),E={default:new ke(-.54,.28,-1).normalize(),front:new ke(0,0,-1),back:new ke(0,0,1)},b=new Ia;s.add(b);const x=hh();s.add(x);let d,f=13,S=0,_=!0,c=!1,o=0,v=0,T=r.zoom;function w(){S||!d||!_||document.hidden||c||(S=requestAnimationFrame(P))}function P(U){S=0;const u=v>0?Math.min((U-v)/1e3,.05):0;v=U,l.matches||(o+=u),b.position.y=l.matches?0:Math.sin(o*1.65)*.13,x.material.opacity=x.visible?.54-b.position.y*.19:0,a.update(u),i.render(s,r),(!l.matches||a.autoRotate)&&w()}function D(){const U=e.clientWidth,u=e.clientHeight;if(!U||!u)return;const O=U/u,V=f/2/Math.min(1,O/.9);r.left=-V*O,r.right=V*O,r.top=V,r.bottom=-V,r.updateProjectionMatrix(),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(U,u,!1),w()}function L(U,u=!1){const O=a.enableDamping;a.enableDamping=!1,a.update(0),r.position.copy(E[U]).multiplyScalar(27),u&&(r.zoom=1),r.updateProjectionMatrix(),a.update(0),a.enableDamping=O,X(),w()}function M(U){r.zoom=Wt.clamp(U,a.minZoom,a.maxZoom),r.updateProjectionMatrix(),a.update(0),X(),w()}function A(U){_=U,v=0,S&&(!_||document.hidden||c)&&(cancelAnimationFrame(S),S=0),w()}function X(){T!==r.zoom&&(T=r.zoom,n(T))}return a.addEventListener("change",()=>{X(),w()}),e.addEventListener("keydown",U=>{if(U.ctrlKey||U.metaKey||U.altKey)return;const u=new Ti().setFromVector3(r.position),O=.16;switch(U.key){case"ArrowLeft":u.theta-=O;break;case"ArrowRight":u.theta+=O;break;case"ArrowUp":u.phi-=O;break;case"ArrowDown":u.phi+=O;break;case"+":case"=":M(r.zoom+.1);break;case"-":M(r.zoom-.1);break;default:return}U.preventDefault(),U.key.startsWith("Arrow")&&(u.phi=Wt.clamp(u.phi,a.minPolarAngle,a.maxPolarAngle),r.position.setFromSpherical(u),a.update(0))}),e.addEventListener("webglcontextlost",U=>{U.preventDefault(),c=!0,A(_),t(!1)}),e.addEventListener("webglcontextrestored",()=>{c=!1,t(!0),D()}),new ResizeObserver(D).observe(e),new IntersectionObserver(([U])=>A(U.isIntersecting)).observe(e),document.addEventListener("visibilitychange",()=>A(_)),l.addEventListener("change",()=>{a.enableDamping=!l.matches,w()}),a.enableDamping=!l.matches,L("default",!0),D(),{setModel(U,u,O=!1){const V=kd(U,u),F=new Ls().setFromObject(V),oe=F.getSize(new ke);V.position.sub(F.getCenter(new ke)),d&&(b.remove(d),Gd(d)),d=V,b.add(d),x.position.y=-oe.y/2-.26,x.scale.set(oe.x*1.65,Math.max(oe.z*1.85,7),1),f=Math.max(oe.y*1.4,oe.x*1.4),O&&L("default",!0),D()},setZoom:M,setView:L,setSpinning(U){a.autoRotate=U,w()},setShadow(U){x.visible=U,w()},async screenshot(){if(!d||c)throw new Error("The 3D preview must be active to save an image.");const U=x.visible;try{return x.visible=!1,i.render(s,r),await Ya(e)}finally{x.visible=U,w()}}}}function hh(){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),t=n.createRadialGradient(32,32,2,32,32,31);t.addColorStop(0,"#000d"),t.addColorStop(.48,"#0007"),t.addColorStop(1,"#0000"),n.fillStyle=t,n.fillRect(0,0,64,64);const i=new xt(new Di(1,1),new Kn({map:new Na(e),transparent:!0,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.renderOrder=-1,i}const ph=Object.assign({"../../plushify_chain_small.json":()=>Ht(()=>import("./plushify_chain_small-mV5V2Gy6.js"),[]).then(e=>e.default),"../../plushify_copper_small.json":()=>Ht(()=>import("./plushify_copper_small-D9glyuAS.js"),[]).then(e=>e.default),"../../plushify_diamond_small.json":()=>Ht(()=>import("./plushify_diamond_small-DUcm_u-i.js"),[]).then(e=>e.default),"../../plushify_gold_small.json":()=>Ht(()=>import("./plushify_gold_small-DPE_oTS5.js"),[]).then(e=>e.default),"../../plushify_iron_small.json":()=>Ht(()=>import("./plushify_iron_small-CcmlteLB.js"),[]).then(e=>e.default),"../../plushify_netherite_small.json":()=>Ht(()=>import("./plushify_netherite_small-Dw83MdRj.js"),[]).then(e=>e.default),"../../plushy_small.json":()=>Ht(()=>import("./plushy_small-Dpqf8b7d.js"),[]).then(e=>e.default),"../../totem_of_undying_small.json":()=>Ht(()=>import("./totem_of_undying_small-jPGIoBiH.js"),[]).then(e=>e.default)});function mh(e){const n=ph[`../../${e}`];if(!n)throw new Error(`Missing slim model: ${e}`);return n()}const _h=e=>document.getElementById(e),Le=Object.fromEntries(["skin-file","drop-zone","upload-label","avatar","skin-name","skin-description","skin-status","arm-option","arm-type","arm-auto","upload-error","armor-options","armor-hint","download","download-label","export-status","stage","stage-message","stage-text","variant-caption","model","background","zoom","zoom-out","zoom-in","reset","flip","spin","screenshot","preview-toolbar"].map(e=>[e,_h(e)])),gh=Le["preview-toolbar"].querySelectorAll("button, input"),vh=new Map,Sh=new Map;let Rn,bt,qn=!1,$a,Tt,Vn="Default",Rt=!0,Cn=!1,Wn=!1,Qa=!1,Zn=!1,Fn=0,Ei=0;function Xt(e,n,t=!1){e.textContent=n,e.hidden=!n,e.classList.toggle("error",t)}function fn(e,n=!1){Le.stage.setAttribute("aria-busy",String(n)),Le["stage-message"].hidden=!e,Le["stage-text"].textContent=e}function en(){Le.download.disabled=!Tt||Rt||Cn||Wn,Le["arm-type"].disabled=Cn,gh.forEach(e=>{e.disabled=!Tt||!qn})}function Ja(e,n,t){Tt=e,$a=n,Rt=t,$d(Le.avatar,Tt.image),Le["skin-name"].textContent=Rt?"Mosskeeper":n.file.name,Le["skin-name"].title=Rt?"":n.file.name,Le["skin-status"].textContent=Rt?"DEMO SKIN":"YOUR SKIN",Le["skin-status"].toggleAttribute("data-custom",!Rt),Le["skin-description"].textContent=n.height===32?"64 × 32 · converted to 64 × 64":"64 × 64 PNG",Le["arm-option"].hidden=Rt||n.height===32,Le["arm-auto"].textContent=n.armType==="slim"?"Auto · Slim (3 px)":"Auto · Classic (4 px)",Le["upload-label"].textContent=Rt?"Upload Your Skin":"Change Your Skin",en(),Ni()}function ua(e,n,t){return e.has(n)||e.set(n,t(n).catch(i=>{throw e.delete(n),i})),e.get(n)}async function Ni(){if(!bt||!Tt)return;const e=++Ei,n=Vn,t=Tt;try{const i=await ua(vh,`${t.armType}/${n}`,()=>Rn.getModel(n,t.armType)),s=new Set(Object.values(i.textures).map(a=>za(i.textures,a))),r=new Map(await Promise.all(Array.from(s,async a=>[a,a==="item/skin"?t.image:(await ua(Sh,a,async l=>Ka(await Rn.getTexture(l)))).canvas])));if(e!==Ei)return;bt.setModel(i,r),Le["variant-caption"].textContent=n.toUpperCase(),Le.model.setAttribute("aria-label",`Interactive ${t.armType} Plushy model`),qn&&fn("")}catch(i){if(e!==Ei)return;console.error(i),fn("This model could not be displayed. Try another armor style.")}}async function eo(e){if(!Rn||!e)return;const n=++Fn;Cn=!0,Xt(Le["upload-error"],""),Xt(Le["export-status"],""),Le["upload-label"].textContent="Reading skin…",en();try{const t=await qa(e),i=await Za(t);if(n!==Fn)return;Le["arm-type"].value="auto",Ja(i,t,!1)}catch(t){n===Fn&&Xt(Le["upload-error"],t.message,!0)}finally{n===Fn&&(Cn=!1,Le["upload-label"].textContent=Rt?"Upload Your Skin":"Change Your Skin",en())}}Le["skin-file"].addEventListener("change",e=>{eo(e.currentTarget.files[0]),e.currentTarget.value=""});document.querySelector(".mobile-upload").addEventListener("click",e=>{Le["skin-file"].disabled||(e.preventDefault(),Le["skin-file"].click())});const Qt=Le["drop-zone"];Qt.addEventListener("dragover",e=>{e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.dataTransfer.dropEffect="copy",Qt.setAttribute("data-dragging",""))});Qt.addEventListener("dragleave",e=>{Qt.contains(e.relatedTarget)||Qt.removeAttribute("data-dragging")});Qt.addEventListener("drop",e=>{if(e.preventDefault(),Qt.removeAttribute("data-dragging"),e.dataTransfer.files.length>1){Xt(Le["upload-error"],"Drop one Minecraft skin PNG at a time.",!0);return}eo(e.dataTransfer.files[0])});Le["arm-type"].addEventListener("change",()=>{const e=Le["arm-type"].value;Tt={...Tt,armType:e==="auto"?$a.armType:e},Xt(Le["export-status"],""),Ni()});Le["armor-options"].addEventListener("change",e=>{Vn=e.target.value;const n=Le["armor-hint"];if(Vn==="Default")n.textContent="All six armor styles are included in your pack.";else{const t=document.createElement("strong");t.textContent=Vn,n.replaceChildren("Rename your Totem to ",t," at an anvil.")}Ni()});Le.background.addEventListener("change",()=>{Le.stage.dataset.background=Le.background.value,bt?.setShadow(Le.background.value!=="transparent")});function Oi(e){Qa=e,Le.spin.setAttribute("aria-pressed",String(e)),bt?.setSpinning(e)}function to(e){Zn=e;const n=Zn?"Show front":"Show back";Le.flip.setAttribute("aria-label",n),Le.flip.title=n}Le.spin.addEventListener("click",()=>Oi(!Qa));Le.flip.addEventListener("click",()=>{Oi(!1),to(!Zn),bt?.setView(Zn?"back":"front")});function no(){Oi(!1),to(!1),Le.background.value="studio",Le.stage.dataset.background="studio",bt?.setShadow(!0),bt?.setView("default",!0)}Le.reset.addEventListener("click",no);Le.model.addEventListener("keydown",e=>{e.key==="Home"&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&(e.preventDefault(),no())});Le.zoom.addEventListener("input",()=>bt?.setZoom(Number(Le.zoom.value)/100));Le["zoom-in"].addEventListener("click",()=>bt?.setZoom((Number(Le.zoom.value)+12)/100));Le["zoom-out"].addEventListener("click",()=>bt?.setZoom((Number(Le.zoom.value)-12)/100));function io(e,n){const t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n,document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}Le.screenshot.addEventListener("click",async()=>{Le.screenshot.disabled=!0;try{io(await bt.screenshot(),"Plushify-Preview.png")}catch(e){fn(e.message)}finally{en()}});Le.download.addEventListener("click",async()=>{if(Rt||!Tt||Wn||Cn)return;Wn=!0;const e=Tt;en(),Xt(Le["export-status"],""),Le["download-label"].textContent="Building your pack…";try{io(await Rn.export(e.png,e.armType),"Plushify-Custom-Skin.zip"),e===Tt&&Xt(Le["export-status"],"Your resource pack is ready.")}catch(n){console.error(n),Xt(Le["export-status"],"Could not build the ZIP. Try downloading again.",!0)}finally{Wn=!1,Le["download-label"].textContent="Download My Plushy",en()}});async function Eh(){try{bt=dh(Le.model,{onZoom:e=>{Le.zoom.value=Math.round(e*100)},onContext(e){qn=e,en(),fn(e?"":"The 3D connection was lost. Skin upload and ZIP export are still available.")}}),qn=!0}catch{Le.model.tabIndex=-1,fn("3D preview requires WebGL 2. You can still upload skins and download the pack.")}try{const[e,n]=await Promise.all([fetch(Ns),fetch("/Plushify/art/mosskeeper.png")]);if(!e.ok)throw new Error(`Pack request returned ${e.status}`);if(!n.ok)throw new Error(`Sample request returned ${n.status}`);Rn=await Yd(await e.arrayBuffer(),Os,mh);const t=await qa(await n.blob());Ja(await Za(t),t,!0),Le["skin-file"].disabled=!1,Le["armor-options"].disabled=!1}catch(e){console.error(e),fn("The Plushify pack could not be loaded. Reload the page to try again.")}}Eh();
