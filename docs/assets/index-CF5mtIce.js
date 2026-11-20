import{U as yt,c as Ro,N as Ct,S as Aa,C as at,F as wa,V as Be,R as yo,e as it,w as et,a as vt,l as er,b as Ra,M as fn,W as tr,d as Pt,f as lt,L as an,H as Xt,D as Ut,B as xt,g as Mn,h as ti,p as Co,i as hn,j as En,k as Po,m as bt,O as Oi,n as nt,E as Do,o as rt,P as kn,A as Lo,q as si,r as It,s as on,t as un,u as Tn,v as Qt,x as Yn,y as Uo,z as Io,G as An,I as Et,J as wi,K as rn,Q as nr,T as No,X as Oo,Y as mn,Z as Fo,_ as Bo,$ as ko,a0 as Go,a1 as Ho,a2 as Vo,a3 as zo,a4 as Wo,a5 as Xo,a6 as Yo,a7 as Ko,a8 as qo,a9 as Zo,aa as jo,ab as $o,ac as Qo,ad as Jo,ae as li,af as Ln,ag as es,ah as Nt,ai as ts,aj as ns,ak as Fi,al as is,am as Bi,an as rs,ao as as,ap as os,aq as ya,ar as Ye,as as ss,at as ls,au as Bt,av as xn,aw as Gn,ax as cs,ay as Ot,az as vn,aA as Vt,aB as fs,aC as Ca,aD as Pa,aE as Da,aF as Kn,aG as La,aH as Ua,aI as Ia,aJ as ki,aK as us,aL as ds,aM as hs,aN as ps,aO as Na,aP as ms,aQ as _s,aR as gs,aS as ci,aT as fi,aU as ui,aV as di,aW as ir,aX as rr,aY as ar,aZ as or,a_ as sr,a$ as lr,b0 as cr,b1 as fr,b2 as ur,b3 as dr,b4 as hr,b5 as pr,b6 as mr,b7 as _r,b8 as gr,b9 as vr,ba as Sr,bb as Er,bc as xr,bd as br,be as Mr,bf as Tr,bg as Ar,bh as wr,bi as Rr,bj as yr,bk as Cr,bl as Pr,bm as Dr,bn as Lr,bo as Ur,bp as Ir,bq as vs,br as Ss,bs as Es,bt as xs,bu as bs,bv as Ms,bw as Ts,bx as As,by as Nr,bz as ws,bA as Hn,bB as Rs,bC as Or,bD as Fr,bE as Br,bF as Oa,bG as ys,bH as ni,bI as Cs,bJ as Ps,bK as Fa,bL as Gi,bM as Ri,bN as Hi,bO as Ba,bP as Ds,bQ as ka,bR as Ga,bS as Ha,bT as Va,bU as za,bV as Wa,bW as Xa,bX as kr,bY as Ya,bZ as hi,b_ as pi,b$ as Ls,c0 as Us,c1 as Gr,c2 as gt,c3 as Is,c4 as wn,c5 as dn,c6 as qn,c7 as Ns,c8 as Os,c9 as Fs,ca as Bs,cb as ks,cc as Gs,cd as Hs,ce as Vs,cf as zs,cg as Ka,ch as qa,ci as yi,cj as Ft,ck as Ws,cl as ln,cm as sn,cn as Ci,co as Xs,cp as Ys,cq as Ks}from"./three-core-BwcFwJuc.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const qs="modulepreload",Zs=function(e){return"/Plushify/"+e},Hr={},Ht=function(n,t,i){let s=Promise.resolve();if(t&&t.length>0){let g=function(E){return Promise.all(E.map(M=>Promise.resolve(M).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=g(t.map(E=>{if(E=Zs(E),E in Hr)return;Hr[E]=!0;const M=E.endsWith(".css"),x=M?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${E}"]${x}`))return;const d=document.createElement("link");if(d.rel=M?"stylesheet":qs,M||(d.as="script"),d.crossOrigin="",d.href=E,l&&d.setAttribute("nonce",l),document.head.appendChild(d),M)return new Promise((f,S)=>{d.addEventListener("load",f),d.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${E}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return n().catch(r)})},js="/Plushify/assets/pack-source-BnQZs1LU.zip",$s=`{\r
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
}`;function Za(){let e=null,n=!1,t=null,i=null;function s(r,a){t(r,a),i=e.requestAnimationFrame(s)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(s),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function Qs(e){const n=new WeakMap;function t(l,g){const E=l.array,M=l.usage,x=E.byteLength,d=e.createBuffer();e.bindBuffer(g,d),e.bufferData(g,E,M),l.onUploadCallback();let f;if(E instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&E instanceof Float16Array)f=e.HALF_FLOAT;else if(E instanceof Uint16Array)l.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(E instanceof Int16Array)f=e.SHORT;else if(E instanceof Uint32Array)f=e.UNSIGNED_INT;else if(E instanceof Int32Array)f=e.INT;else if(E instanceof Int8Array)f=e.BYTE;else if(E instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(E instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+E);return{buffer:d,type:f,bytesPerElement:E.BYTES_PER_ELEMENT,version:l.version,size:x}}function i(l,g,E){const M=g.array,x=g.updateRanges;if(e.bindBuffer(E,l),x.length===0)e.bufferSubData(E,0,M);else{x.sort((f,S)=>f.start-S.start);let d=0;for(let f=1;f<x.length;f++){const S=x[d],_=x[f];_.start<=S.start+S.count+1?S.count=Math.max(S.count,_.start+_.count-S.start):(++d,x[d]=_)}x.length=d+1;for(let f=0,S=x.length;f<S;f++){const _=x[f];e.bufferSubData(E,_.start*M.BYTES_PER_ELEMENT,M,_.start,_.count)}g.clearUpdateRanges()}g.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const g=n.get(l);g&&(e.deleteBuffer(g.buffer),n.delete(l))}function a(l,g){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const M=n.get(l);(!M||M.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const E=n.get(l);if(E===void 0)n.set(l,t(l,g));else if(E.version<l.version){if(E.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(E.buffer,l,g),E.version=l.version}}return{get:s,remove:r,update:a}}var Js=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,el=`#ifdef USE_ALPHAHASH
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
#endif`,tl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,il=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,al=`#ifdef USE_AOMAP
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
#endif`,ol=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sl=`#ifdef USE_BATCHING
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
#endif`,ll=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ul=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dl=`#ifdef USE_IRIDESCENCE
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
#endif`,hl=`#ifdef USE_BUMPMAP
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
#endif`,pl=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ml=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_l=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,El=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,bl=`#define PI 3.141592653589793
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
} // validated`,Ml=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tl=`vec3 transformedNormal = objectNormal;
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
#endif`,Al=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dl=`#ifdef USE_ENVMAP
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
#endif`,Ll=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ul=`#ifdef USE_ENVMAP
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
#endif`,Il=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nl=`#ifdef USE_ENVMAP
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
#endif`,Ol=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gl=`#ifdef USE_GRADIENTMAP
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
}`,Hl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wl=`uniform bool receiveShadow;
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
#endif`,Xl=`#ifdef USE_ENVMAP
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
#endif`,Yl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ql=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jl=`PhysicalMaterial material;
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
#endif`,$l=`uniform sampler2D dfgLUT;
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
}`,Ql=`
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
#endif`,Jl=`#if defined( RE_IndirectDiffuse )
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
#endif`,ec=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ic=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ac=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lc=`#if defined( USE_POINTS_UV )
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
#endif`,cc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pc=`#ifdef USE_MORPHTARGETS
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
#endif`,mc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_c=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ec=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xc=`#ifdef USE_NORMALMAP
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
#endif`,bc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ac=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ic=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Oc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fc=`float getShadowMask() {
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
}`,Bc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kc=`#ifdef USE_SKINNING
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
#endif`,Gc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hc=`#ifdef USE_SKINNING
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
#endif`,Vc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xc=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yc=`#ifdef USE_TRANSMISSION
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
#endif`,Kc=`#ifdef USE_TRANSMISSION
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
#endif`,qc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$c=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jc=`uniform sampler2D t2D;
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
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`#include <common>
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
}`,of=`#if DEPTH_PACKING == 3200
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
}`,sf=`#define DISTANCE
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
}`,lf=`#define DISTANCE
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
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ff=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`uniform float scale;
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
}`,df=`uniform vec3 diffuse;
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
}`,hf=`#include <common>
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
}`,pf=`uniform vec3 diffuse;
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
}`,mf=`#define LAMBERT
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
}`,_f=`#define LAMBERT
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
}`,gf=`#define MATCAP
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
}`,vf=`#define MATCAP
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
}`,Sf=`#define NORMAL
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
}`,Ef=`#define NORMAL
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
}`,xf=`#define PHONG
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
}`,bf=`#define PHONG
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
}`,Mf=`#define STANDARD
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
}`,Tf=`#define STANDARD
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
}`,Af=`#define TOON
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
}`,wf=`#define TOON
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
}`,Rf=`uniform float size;
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
}`,yf=`uniform vec3 diffuse;
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
}`,Cf=`#include <common>
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
}`,Pf=`uniform vec3 color;
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
}`,Df=`uniform float rotation;
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
}`,Lf=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Js,alphahash_pars_fragment:el,alphamap_fragment:tl,alphamap_pars_fragment:nl,alphatest_fragment:il,alphatest_pars_fragment:rl,aomap_fragment:al,aomap_pars_fragment:ol,batching_pars_vertex:sl,batching_vertex:ll,begin_vertex:cl,beginnormal_vertex:fl,bsdfs:ul,iridescence_fragment:dl,bumpmap_pars_fragment:hl,clipping_planes_fragment:pl,clipping_planes_pars_fragment:ml,clipping_planes_pars_vertex:_l,clipping_planes_vertex:gl,color_fragment:vl,color_pars_fragment:Sl,color_pars_vertex:El,color_vertex:xl,common:bl,cube_uv_reflection_fragment:Ml,defaultnormal_vertex:Tl,displacementmap_pars_vertex:Al,displacementmap_vertex:wl,emissivemap_fragment:Rl,emissivemap_pars_fragment:yl,colorspace_fragment:Cl,colorspace_pars_fragment:Pl,envmap_fragment:Dl,envmap_common_pars_fragment:Ll,envmap_pars_fragment:Ul,envmap_pars_vertex:Il,envmap_physical_pars_fragment:Xl,envmap_vertex:Nl,fog_vertex:Ol,fog_pars_vertex:Fl,fog_fragment:Bl,fog_pars_fragment:kl,gradientmap_pars_fragment:Gl,lightmap_pars_fragment:Hl,lights_lambert_fragment:Vl,lights_lambert_pars_fragment:zl,lights_pars_begin:Wl,lights_toon_fragment:Yl,lights_toon_pars_fragment:Kl,lights_phong_fragment:ql,lights_phong_pars_fragment:Zl,lights_physical_fragment:jl,lights_physical_pars_fragment:$l,lights_fragment_begin:Ql,lights_fragment_maps:Jl,lights_fragment_end:ec,logdepthbuf_fragment:tc,logdepthbuf_pars_fragment:nc,logdepthbuf_pars_vertex:ic,logdepthbuf_vertex:rc,map_fragment:ac,map_pars_fragment:oc,map_particle_fragment:sc,map_particle_pars_fragment:lc,metalnessmap_fragment:cc,metalnessmap_pars_fragment:fc,morphinstance_vertex:uc,morphcolor_vertex:dc,morphnormal_vertex:hc,morphtarget_pars_vertex:pc,morphtarget_vertex:mc,normal_fragment_begin:_c,normal_fragment_maps:gc,normal_pars_fragment:vc,normal_pars_vertex:Sc,normal_vertex:Ec,normalmap_pars_fragment:xc,clearcoat_normal_fragment_begin:bc,clearcoat_normal_fragment_maps:Mc,clearcoat_pars_fragment:Tc,iridescence_pars_fragment:Ac,opaque_fragment:wc,packing:Rc,premultiplied_alpha_fragment:yc,project_vertex:Cc,dithering_fragment:Pc,dithering_pars_fragment:Dc,roughnessmap_fragment:Lc,roughnessmap_pars_fragment:Uc,shadowmap_pars_fragment:Ic,shadowmap_pars_vertex:Nc,shadowmap_vertex:Oc,shadowmask_pars_fragment:Fc,skinbase_vertex:Bc,skinning_pars_vertex:kc,skinning_vertex:Gc,skinnormal_vertex:Hc,specularmap_fragment:Vc,specularmap_pars_fragment:zc,tonemapping_fragment:Wc,tonemapping_pars_fragment:Xc,transmission_fragment:Yc,transmission_pars_fragment:Kc,uv_pars_fragment:qc,uv_pars_vertex:Zc,uv_vertex:jc,worldpos_vertex:$c,background_vert:Qc,background_frag:Jc,backgroundCube_vert:ef,backgroundCube_frag:tf,cube_vert:nf,cube_frag:rf,depth_vert:af,depth_frag:of,distance_vert:sf,distance_frag:lf,equirect_vert:cf,equirect_frag:ff,linedashed_vert:uf,linedashed_frag:df,meshbasic_vert:hf,meshbasic_frag:pf,meshlambert_vert:mf,meshlambert_frag:_f,meshmatcap_vert:gf,meshmatcap_frag:vf,meshnormal_vert:Sf,meshnormal_frag:Ef,meshphong_vert:xf,meshphong_frag:bf,meshphysical_vert:Mf,meshphysical_frag:Tf,meshtoon_vert:Af,meshtoon_frag:wf,points_vert:Rf,points_frag:yf,shadow_vert:Cf,shadow_frag:Pf,sprite_vert:Df,sprite_frag:Lf},Se={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Rt={basic:{uniforms:gt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:gt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:gt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:gt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:gt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new at(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:gt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:gt([Se.points,Se.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:gt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:gt([Se.common,Se.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:gt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:gt([Se.sprite,Se.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:gt([Se.common,Se.displacementmap,{referencePosition:{value:new Be},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:gt([Se.lights,Se.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Rt.physical={uniforms:gt([Rt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Un={r:0,b:0,g:0},qt=new Hi,Uf=new fn;function If(e,n,t,i,s,r){const a=new at(0);let l=s===!0?0:1,g,E,M=null,x=0,d=null;function f(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){const R=v.backgroundBlurriness>0;T=n.get(T,R)}return T}function S(v){let T=!1;const R=f(v);R===null?c(a,l):R&&R.isColor&&(c(R,1),T=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(e.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(v,T){const R=f(T);R&&(R.isCubeTexture||R.mapping===ni)?(E===void 0&&(E=new bt(new Gi(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:Ri(Rt.backgroundCube.uniforms),vertexShader:Rt.backgroundCube.vertexShader,fragmentShader:Rt.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),E.geometry.deleteAttribute("normal"),E.geometry.deleteAttribute("uv"),E.onBeforeRender=function(P,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(E.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(E)),qt.copy(T.backgroundRotation),qt.x*=-1,qt.y*=-1,qt.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(qt.y*=-1,qt.z*=-1),E.material.uniforms.envMap.value=R,E.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,E.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,E.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,E.material.uniforms.backgroundRotation.value.setFromMatrix4(Uf.makeRotationFromEuler(qt)),E.material.toneMapped=lt.getTransfer(R.colorSpace)!==nt,(M!==R||x!==R.version||d!==e.toneMapping)&&(E.material.needsUpdate=!0,M=R,x=R.version,d=e.toneMapping),E.layers.enableAll(),v.unshift(E,E.geometry,E.material,0,0,null)):R&&R.isTexture&&(g===void 0&&(g=new bt(new ki(2,2),new Bt({name:"BackgroundMaterial",uniforms:Ri(Rt.background.uniforms),vertexShader:Rt.background.vertexShader,fragmentShader:Rt.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(g)),g.material.uniforms.t2D.value=R,g.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,g.material.toneMapped=lt.getTransfer(R.colorSpace)!==nt,R.matrixAutoUpdate===!0&&R.updateMatrix(),g.material.uniforms.uvTransform.value.copy(R.matrix),(M!==R||x!==R.version||d!==e.toneMapping)&&(g.material.needsUpdate=!0,M=R,x=R.version,d=e.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null))}function c(v,T){v.getRGB(Un,Fa(e)),t.buffers.color.setClear(Un.r,Un.g,Un.b,T,r)}function o(){E!==void 0&&(E.geometry.dispose(),E.material.dispose(),E=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),l=T,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,c(a,l)},render:S,addToRenderList:_,dispose:o}}function Nf(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function l(F,C,N,u,B){let X=!1;const O=x(F,u,N,C);r!==O&&(r=O,E(r.object)),X=f(F,u,N,B),X&&S(F,u,N,B),B!==null&&n.update(B,e.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,R(F,C,N,u),B!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(B).buffer))}function g(){return e.createVertexArray()}function E(F){return e.bindVertexArray(F)}function M(F){return e.deleteVertexArray(F)}function x(F,C,N,u){const B=u.wireframe===!0;let X=i[C.id];X===void 0&&(X={},i[C.id]=X);const O=F.isInstancedMesh===!0?F.id:0;let Q=X[O];Q===void 0&&(Q={},X[O]=Q);let W=Q[N.id];W===void 0&&(W={},Q[N.id]=W);let ce=W[B];return ce===void 0&&(ce=d(g()),W[B]=ce),ce}function d(F){const C=[],N=[],u=[];for(let B=0;B<t;B++)C[B]=0,N[B]=0,u[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:u,object:F,attributes:{},index:null}}function f(F,C,N,u){const B=r.attributes,X=C.attributes;let O=0;const Q=N.getAttributes();for(const W in Q)if(Q[W].location>=0){const H=B[W];let G=X[W];if(G===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(G=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(G=F.instanceColor)),H===void 0||H.attribute!==G||G&&H.data!==G.data)return!0;O++}return r.attributesNum!==O||r.index!==u}function S(F,C,N,u){const B={},X=C.attributes;let O=0;const Q=N.getAttributes();for(const W in Q)if(Q[W].location>=0){let H=X[W];H===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(H=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(H=F.instanceColor));const G={};G.attribute=H,H&&H.data&&(G.data=H.data),B[W]=G,O++}r.attributes=B,r.attributesNum=O,r.index=u}function _(){const F=r.newAttributes;for(let C=0,N=F.length;C<N;C++)F[C]=0}function c(F){o(F,0)}function o(F,C){const N=r.newAttributes,u=r.enabledAttributes,B=r.attributeDivisors;N[F]=1,u[F]===0&&(e.enableVertexAttribArray(F),u[F]=1),B[F]!==C&&(e.vertexAttribDivisor(F,C),B[F]=C)}function v(){const F=r.newAttributes,C=r.enabledAttributes;for(let N=0,u=C.length;N<u;N++)C[N]!==F[N]&&(e.disableVertexAttribArray(N),C[N]=0)}function T(F,C,N,u,B,X,O){O===!0?e.vertexAttribIPointer(F,C,N,B,X):e.vertexAttribPointer(F,C,N,u,B,X)}function R(F,C,N,u){_();const B=u.attributes,X=N.getAttributes(),O=C.defaultAttributeValues;for(const Q in X){const W=X[Q];if(W.location>=0){let ce=B[Q];if(ce===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(ce=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(ce=F.instanceColor)),ce!==void 0){const H=ce.normalized,G=ce.itemSize,he=n.get(ce);if(he===void 0)continue;const me=he.buffer,fe=he.type,ne=he.bytesPerElement,ue=fe===e.INT||fe===e.UNSIGNED_INT||ce.gpuType===Na;if(ce.isInterleavedBufferAttribute){const se=ce.data,Me=se.stride,Re=ce.offset;if(se.isInstancedInterleavedBuffer){for(let ye=0;ye<W.locationSize;ye++)o(W.location+ye,se.meshPerAttribute);F.isInstancedMesh!==!0&&u._maxInstanceCount===void 0&&(u._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ye=0;ye<W.locationSize;ye++)c(W.location+ye);e.bindBuffer(e.ARRAY_BUFFER,me);for(let ye=0;ye<W.locationSize;ye++)T(W.location+ye,G/W.locationSize,fe,H,Me*ne,(Re+G/W.locationSize*ye)*ne,ue)}else{if(ce.isInstancedBufferAttribute){for(let se=0;se<W.locationSize;se++)o(W.location+se,ce.meshPerAttribute);F.isInstancedMesh!==!0&&u._maxInstanceCount===void 0&&(u._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let se=0;se<W.locationSize;se++)c(W.location+se);e.bindBuffer(e.ARRAY_BUFFER,me);for(let se=0;se<W.locationSize;se++)T(W.location+se,G/W.locationSize,fe,H,G*ne,G/W.locationSize*se*ne,ue)}}else if(O!==void 0){const H=O[Q];if(H!==void 0)switch(H.length){case 2:e.vertexAttrib2fv(W.location,H);break;case 3:e.vertexAttrib3fv(W.location,H);break;case 4:e.vertexAttrib4fv(W.location,H);break;default:e.vertexAttrib1fv(W.location,H)}}}}v()}function P(){A();for(const F in i){const C=i[F];for(const N in C){const u=C[N];for(const B in u){const X=u[B];for(const O in X)M(X[O].object),delete X[O];delete u[B]}}delete i[F]}}function D(F){if(i[F.id]===void 0)return;const C=i[F.id];for(const N in C){const u=C[N];for(const B in u){const X=u[B];for(const O in X)M(X[O].object),delete X[O];delete u[B]}}delete i[F.id]}function L(F){for(const C in i){const N=i[C];for(const u in N){const B=N[u];if(B[F.id]===void 0)continue;const X=B[F.id];for(const O in X)M(X[O].object),delete X[O];delete B[F.id]}}}function b(F){for(const C in i){const N=i[C],u=F.isInstancedMesh===!0?F.id:0,B=N[u];if(B!==void 0){for(const X in B){const O=B[X];for(const Q in O)M(O[Q].object),delete O[Q];delete B[X]}delete N[u],Object.keys(N).length===0&&delete i[C]}}}function A(){Y(),a=!0,r!==s&&(r=s,E(r.object))}function Y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:A,resetDefaultState:Y,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfObject:b,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:c,disableUnusedAttributes:v}}function Of(e,n,t){let i;function s(E){i=E}function r(E,M){e.drawArrays(i,E,M),t.update(M,i,1)}function a(E,M,x){x!==0&&(e.drawArraysInstanced(i,E,M,x),t.update(M,i,x))}function l(E,M,x){if(x===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,E,0,M,0,x);let f=0;for(let S=0;S<x;S++)f+=M[S];t.update(f,i,1)}function g(E,M,x,d){if(x===0)return;const f=n.get("WEBGL_multi_draw");if(f===null)for(let S=0;S<E.length;S++)a(E[S],M[S],d[S]);else{f.multiDrawArraysInstancedWEBGL(i,E,0,M,0,d,0,x);let S=0;for(let _=0;_<x;_++)S+=M[_]*d[_];t.update(S,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=g}function Ff(e,n,t,i){let s;function r(){if(s!==void 0)return s;if(n.has("EXT_texture_filter_anisotropic")===!0){const L=n.get("EXT_texture_filter_anisotropic");s=e.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==It&&i.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(L){const b=L===Xt&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(L!==yt&&i.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Vt&&!b)}function g(L){if(L==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let E=t.precision!==void 0?t.precision:"highp";const M=g(E);M!==E&&(et("WebGLRenderer:",E,"not supported, using",M,"instead."),E=M);const x=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),o=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),R=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),P=e.getParameter(e.MAX_SAMPLES),D=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:g,textureFormatReadable:a,textureTypeReadable:l,precision:E,logarithmicDepthBuffer:x,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:S,maxTextureSize:_,maxCubemapSize:c,maxAttributes:o,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:R,maxSamples:P,samples:D}}function Bf(e){const n=this;let t=null,i=0,s=!1,r=!1;const a=new ya,l=new Ye,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(x,d){const f=x.length!==0||d||i!==0||s;return s=d,i=x.length,f},this.beginShadows=function(){r=!0,M(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(x,d){t=M(x,d,0)},this.setState=function(x,d,f){const S=x.clippingPlanes,_=x.clipIntersection,c=x.clipShadows,o=e.get(x);if(!s||S===null||S.length===0||r&&!c)r?M(null):E();else{const v=r?0:i,T=v*4;let R=o.clippingState||null;g.value=R,R=M(S,d,T,f);for(let P=0;P!==T;++P)R[P]=t[P];o.clippingState=R,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function E(){g.value!==t&&(g.value=t,g.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function M(x,d,f,S){const _=x!==null?x.length:0;let c=null;if(_!==0){if(c=g.value,S!==!0||c===null){const o=f+_*4,v=d.matrixWorldInverse;l.getNormalMatrix(v),(c===null||c.length<o)&&(c=new Float32Array(o));for(let T=0,R=f;T!==_;++T,R+=4)a.copy(x[T]).applyMatrix4(v,l),a.normal.toArray(c,R),c[R+3]=a.constant}g.value=c,g.needsUpdate=!0}return n.numPlanes=_,n.numIntersection=0,c}}const zt=4,Vr=[.125,.215,.35,.446,.526,.582],jt=20,kf=256,_n=new Oi,zr=new at;let mi=null,_i=0,gi=0,vi=!1;const Gf=new Be;class Wr{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,s=100,r={}){const{size:a=256,position:l=Gf}=r;mi=this._renderer.getRenderTarget(),_i=this._renderer.getActiveCubeFace(),gi=this._renderer.getActiveMipmapLevel(),vi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(n,i,s,g,l),t>0&&this._blur(g,0,0,t),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(mi,_i,gi),this._renderer.xr.enabled=vi,n.scissorTest=!1,nn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===wn||n.mapping===dn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),mi=this._renderer.getRenderTarget(),_i=this._renderer.getActiveCubeFace(),gi=this._renderer.getActiveMipmapLevel(),vi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Xt,format:It,colorSpace:ti,depthBuffer:!1},s=Xr(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xr(n,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Hf(r)),this._blurMaterial=zf(r,n,t),this._ggxMaterial=Vf(r,n,t)}return s}_compileMaterial(n){const t=new bt(new hn,n);this._renderer.compile(t,_n)}_sceneToCubeUV(n,t,i,s,r){const g=new kn(90,1,t,i),E=[1,-1,1,1,1,1],M=[1,1,1,-1,-1,-1],x=this._renderer,d=x.autoClear,f=x.toneMapping;x.getClearColor(zr),x.toneMapping=Ct,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new Gi,new qn({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,c=_.material;let o=!1;const v=n.background;v?v.isColor&&(c.color.copy(v),n.background=null,o=!0):(c.color.copy(zr),o=!0);for(let T=0;T<6;T++){const R=T%3;R===0?(g.up.set(0,E[T],0),g.position.set(r.x,r.y,r.z),g.lookAt(r.x+M[T],r.y,r.z)):R===1?(g.up.set(0,0,E[T]),g.position.set(r.x,r.y,r.z),g.lookAt(r.x,r.y+M[T],r.z)):(g.up.set(0,E[T],0),g.position.set(r.x,r.y,r.z),g.lookAt(r.x,r.y,r.z+M[T]));const P=this._cubeSize;nn(s,R*P,T>2?P:0,P,P),x.setRenderTarget(s),o&&x.render(_,g),x.render(n,g)}x.toneMapping=f,x.autoClear=d,n.background=v}_textureToCubeUV(n,t){const i=this._renderer,s=n.mapping===wn||n.mapping===dn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kr()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yr());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const l=r.uniforms;l.envMap.value=n;const g=this._cubeSize;nn(t,0,0,3*g,2*g),i.setRenderTarget(t),i.render(a,_n)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(n,r-1,r);t.autoClear=i}_applyGGXFilter(n,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;const g=a.uniforms,E=i/(this._lodMeshes.length-1),M=t/(this._lodMeshes.length-1),x=Math.sqrt(E*E-M*M),d=0+E*1.25,f=x*d,{_lodMax:S}=this,_=this._sizeLods[i],c=3*_*(i>S-zt?i-S+zt:0),o=4*(this._cubeSize-_);g.envMap.value=n.texture,g.roughness.value=f,g.mipInt.value=S-t,nn(r,c,o,3*_,2*_),s.setRenderTarget(r),s.render(l,_n),g.envMap.value=r.texture,g.roughness.value=0,g.mipInt.value=S-i,nn(n,c,o,3*_,2*_),s.setRenderTarget(n),s.render(l,_n)}_blur(n,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(n,a,t,i,s,"latitudinal",r),this._halfBlur(a,n,i,i,s,"longitudinal",r)}_halfBlur(n,t,i,s,r,a,l){const g=this._renderer,E=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const M=3,x=this._lodMeshes[s];x.material=E;const d=E.uniforms,f=this._sizeLods[i]-1,S=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*jt-1),_=r/S,c=isFinite(r)?1+Math.floor(M*_):jt;c>jt&&et(`sigmaRadians, ${r}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${jt}`);const o=[];let v=0;for(let L=0;L<jt;++L){const b=L/_,A=Math.exp(-b*b/2);o.push(A),L===0?v+=A:L<c&&(v+=2*A)}for(let L=0;L<o.length;L++)o[L]=o[L]/v;d.envMap.value=n.texture,d.samples.value=c,d.weights.value=o,d.latitudinal.value=a==="latitudinal",l&&(d.poleAxis.value=l);const{_lodMax:T}=this;d.dTheta.value=S,d.mipInt.value=T-i;const R=this._sizeLods[s],P=3*R*(s>T-zt?s-T+zt:0),D=4*(this._cubeSize-R);nn(t,P,D,3*R,2*R),g.setRenderTarget(t),g.render(x,_n)}}function Hf(e){const n=[],t=[],i=[];let s=e;const r=e-zt+1+Vr.length;for(let a=0;a<r;a++){const l=Math.pow(2,s);n.push(l);let g=1/l;a>e-zt?g=Vr[a-e+zt-1]:a===0&&(g=0),t.push(g);const E=1/(l-2),M=-E,x=1+E,d=[M,M,x,M,x,x,M,M,x,x,M,x],f=6,S=6,_=3,c=2,o=1,v=new Float32Array(_*S*f),T=new Float32Array(c*S*f),R=new Float32Array(o*S*f);for(let D=0;D<f;D++){const L=D%3*2/3-1,b=D>2?0:-1,A=[L,b,0,L+2/3,b,0,L+2/3,b+1,0,L,b,0,L+2/3,b+1,0,L,b+1,0];v.set(A,_*S*D),T.set(d,c*S*D);const Y=[D,D,D,D,D,D];R.set(Y,o*S*D)}const P=new hn;P.setAttribute("position",new xn(v,_)),P.setAttribute("uv",new xn(T,c)),P.setAttribute("faceIndex",new xn(R,o)),i.push(new bt(P,null)),s>zt&&s--}return{lodMeshes:i,sizeLods:n,sigmas:t}}function Xr(e,n,t){const i=new Pt(e,n,t);return i.texture.mapping=ni,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nn(e,n,t,i,s){e.viewport.set(n,t,i,s),e.scissor.set(n,t,i,s)}function Vf(e,n,t){return new Bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kf,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ii(),fragmentShader:`

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
		`,blending:Ot,depthTest:!1,depthWrite:!1})}function zf(e,n,t){const i=new Float32Array(jt),s=new Be(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:jt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ii(),fragmentShader:`

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
		`,blending:Ot,depthTest:!1,depthWrite:!1})}function Yr(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ii(),fragmentShader:`

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
		`,blending:Ot,depthTest:!1,depthWrite:!1})}function Kr(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ii(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ot,depthTest:!1,depthWrite:!1})}function ii(){return`

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
	`}class ja extends Pt{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},s=[i,i,i,i,i,i];this.texture=new Ba(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gi(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:Ri(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xt,blending:Ot});r.uniforms.tEquirect.value=t;const a=new bt(s,r),l=t.minFilter;return t.minFilter===an&&(t.minFilter=Et),new Ds(1,10,this).update(n,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(n,t=!0,i=!0,s=!0){const r=n.getRenderTarget();for(let a=0;a<6;a++)n.setRenderTarget(this,a),n.clear(t,i,s);n.setRenderTarget(r)}}function Wf(e){let n=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===hi||f===pi)if(n.has(d)){const S=n.get(d).texture;return l(S,d.mapping)}else{const S=d.image;if(S&&S.height>0){const _=new ja(S.height);return _.fromEquirectangularTexture(e,d),n.set(d,_),d.addEventListener("dispose",E),l(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,S=f===hi||f===pi,_=f===wn||f===dn;if(S||_){let c=t.get(d);const o=c!==void 0?c.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==o)return i===null&&(i=new Wr(e)),c=S?i.fromEquirectangular(d,c):i.fromCubemap(d,c),c.texture.pmremVersion=d.pmremVersion,t.set(d,c),c.texture;if(c!==void 0)return c.texture;{const v=d.image;return S&&v&&v.height>0||_&&v&&g(v)?(i===null&&(i=new Wr(e)),c=S?i.fromEquirectangular(d):i.fromCubemap(d),c.texture.pmremVersion=d.pmremVersion,t.set(d,c),d.addEventListener("dispose",M),c.texture):null}}}return d}function l(d,f){return f===hi?d.mapping=wn:f===pi&&(d.mapping=dn),d}function g(d){let f=0;const S=6;for(let _=0;_<S;_++)d[_]!==void 0&&f++;return f===S}function E(d){const f=d.target;f.removeEventListener("dispose",E);const S=n.get(f);S!==void 0&&(n.delete(f),S.dispose())}function M(d){const f=d.target;f.removeEventListener("dispose",M);const S=t.get(f);S!==void 0&&(t.delete(f),S.dispose())}function x(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:x}}function Xf(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const s=e.getExtension(i);return n[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ra("WebGLRenderer: "+i+" extension not supported."),s}}}function Yf(e,n,t,i){const s={},r=new WeakMap;function a(x){const d=x.target;d.index!==null&&n.remove(d.index);for(const S in d.attributes)n.remove(d.attributes[S]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(n.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function l(x,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function g(x){const d=x.attributes;for(const f in d)n.update(d[f],e.ARRAY_BUFFER)}function E(x){const d=[],f=x.index,S=x.attributes.position;let _=0;if(S===void 0)return;if(f!==null){const v=f.array;_=f.version;for(let T=0,R=v.length;T<R;T+=3){const P=v[T+0],D=v[T+1],L=v[T+2];d.push(P,D,D,L,L,P)}}else{const v=S.array;_=S.version;for(let T=0,R=v.length/3-1;T<R;T+=3){const P=T+0,D=T+1,L=T+2;d.push(P,D,D,L,L,P)}}const c=new(S.count>=65535?Ls:Us)(d,1);c.version=_;const o=r.get(x);o&&n.remove(o),r.set(x,c)}function M(x){const d=r.get(x);if(d){const f=x.index;f!==null&&d.version<f.version&&E(x)}else E(x);return r.get(x)}return{get:l,update:g,getWireframeAttribute:M}}function Kf(e,n,t){let i;function s(d){i=d}let r,a;function l(d){r=d.type,a=d.bytesPerElement}function g(d,f){e.drawElements(i,f,r,d*a),t.update(f,i,1)}function E(d,f,S){S!==0&&(e.drawElementsInstanced(i,f,r,d*a,S),t.update(f,i,S))}function M(d,f,S){if(S===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,S);let c=0;for(let o=0;o<S;o++)c+=f[o];t.update(c,i,1)}function x(d,f,S,_){if(S===0)return;const c=n.get("WEBGL_multi_draw");if(c===null)for(let o=0;o<d.length;o++)E(d[o]/a,f[o],_[o]);else{c.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,S);let o=0;for(let v=0;v<S;v++)o+=f[v]*_[v];t.update(o,i,1)}}this.setMode=s,this.setIndex=l,this.render=g,this.renderInstances=E,this.renderMultiDraw=M,this.renderMultiDrawInstances=x}function qf(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(t.calls++,a){case e.TRIANGLES:t.triangles+=l*(r/3);break;case e.LINES:t.lines+=l*(r/2);break;case e.LINE_STRIP:t.lines+=l*(r-1);break;case e.LINE_LOOP:t.lines+=l*r;break;case e.POINTS:t.points+=l*r;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Zf(e,n,t){const i=new WeakMap,s=new vt;function r(a,l,g){const E=a.morphTargetInfluences,M=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,x=M!==void 0?M.length:0;let d=i.get(l);if(d===void 0||d.count!==x){let A=function(){L.dispose(),i.delete(l),l.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const f=l.morphAttributes.position!==void 0,S=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,c=l.morphAttributes.position||[],o=l.morphAttributes.normal||[],v=l.morphAttributes.color||[];let T=0;f===!0&&(T=1),S===!0&&(T=2),_===!0&&(T=3);let R=l.attributes.position.count*T,P=1;R>n.maxTextureSize&&(P=Math.ceil(R/n.maxTextureSize),R=n.maxTextureSize);const D=new Float32Array(R*P*4*x),L=new Oa(D,R,P,x);L.type=Vt,L.needsUpdate=!0;const b=T*4;for(let Y=0;Y<x;Y++){const F=c[Y],C=o[Y],N=v[Y],u=R*P*4*Y;for(let B=0;B<F.count;B++){const X=B*b;f===!0&&(s.fromBufferAttribute(F,B),D[u+X+0]=s.x,D[u+X+1]=s.y,D[u+X+2]=s.z,D[u+X+3]=0),S===!0&&(s.fromBufferAttribute(C,B),D[u+X+4]=s.x,D[u+X+5]=s.y,D[u+X+6]=s.z,D[u+X+7]=0),_===!0&&(s.fromBufferAttribute(N,B),D[u+X+8]=s.x,D[u+X+9]=s.y,D[u+X+10]=s.z,D[u+X+11]=N.itemSize===4?s.w:1)}}d={count:x,texture:L,size:new rt(R,P)},i.set(l,d),l.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)g.getUniforms().setValue(e,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<E.length;_++)f+=E[_];const S=l.morphTargetsRelative?1:1-f;g.getUniforms().setValue(e,"morphTargetBaseInfluence",S),g.getUniforms().setValue(e,"morphTargetInfluences",E)}g.getUniforms().setValue(e,"morphTargetsTexture",d.texture,t),g.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:r}}function jf(e,n,t,i,s){let r=new WeakMap;function a(E){const M=s.render.frame,x=E.geometry,d=n.get(E,x);if(r.get(d)!==M&&(n.update(d),r.set(d,M)),E.isInstancedMesh&&(E.hasEventListener("dispose",g)===!1&&E.addEventListener("dispose",g),r.get(E)!==M&&(t.update(E.instanceMatrix,e.ARRAY_BUFFER),E.instanceColor!==null&&t.update(E.instanceColor,e.ARRAY_BUFFER),r.set(E,M))),E.isSkinnedMesh){const f=E.skeleton;r.get(f)!==M&&(f.update(),r.set(f,M))}return d}function l(){r=new WeakMap}function g(E){const M=E.target;M.removeEventListener("dispose",g),i.releaseStatesOfObject(M),t.remove(M.instanceMatrix),M.instanceColor!==null&&t.remove(M.instanceColor)}return{update:a,dispose:l}}const $f={[Xa]:"LINEAR_TONE_MAPPING",[Wa]:"REINHARD_TONE_MAPPING",[za]:"CINEON_TONE_MAPPING",[Va]:"ACES_FILMIC_TONE_MAPPING",[Ha]:"AGX_TONE_MAPPING",[Ga]:"NEUTRAL_TONE_MAPPING",[ka]:"CUSTOM_TONE_MAPPING"};function Qf(e,n,t,i,s){const r=new Pt(n,t,{type:e,depthBuffer:i,stencilBuffer:s}),a=new Pt(n,t,{type:Xt,depthBuffer:!1,stencilBuffer:!1}),l=new hn;l.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new En([0,2,0,0,2,0],2));const g=new Po({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),E=new bt(l,g),M=new Oi(-1,1,1,-1,0,1);let x=null,d=null,f=!1,S,_=null,c=[],o=!1;this.setSize=function(v,T){r.setSize(v,T),a.setSize(v,T);for(let R=0;R<c.length;R++){const P=c[R];P.setSize&&P.setSize(v,T)}},this.setEffects=function(v){c=v,o=c.length>0&&c[0].isRenderPass===!0;const T=r.width,R=r.height;for(let P=0;P<c.length;P++){const D=c[P];D.setSize&&D.setSize(T,R)}},this.begin=function(v,T){if(f||v.toneMapping===Ct&&c.length===0)return!1;if(_=T,T!==null){const R=T.width,P=T.height;(r.width!==R||r.height!==P)&&this.setSize(R,P)}return o===!1&&v.setRenderTarget(r),S=v.toneMapping,v.toneMapping=Ct,!0},this.hasRenderPass=function(){return o},this.end=function(v,T){v.toneMapping=S,f=!0;let R=r,P=a;for(let D=0;D<c.length;D++){const L=c[D];if(L.enabled!==!1&&(L.render(v,P,R,T),L.needsSwap!==!1)){const b=R;R=P,P=b}}if(x!==v.outputColorSpace||d!==v.toneMapping){x=v.outputColorSpace,d=v.toneMapping,g.defines={},lt.getTransfer(x)===nt&&(g.defines.SRGB_TRANSFER="");const D=$f[d];D&&(g.defines[D]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=R.texture,v.setRenderTarget(_),v.render(E,M),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),l.dispose(),g.dispose()}}const $a=new Gs,Pi=new Yn(1,1),Qa=new Oa,Ja=new Ns,eo=new Ba,qr=[],Zr=[],jr=new Float32Array(16),$r=new Float32Array(9),Qr=new Float32Array(4);function pn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const s=n*t;let r=qr[s];if(r===void 0&&(r=new Float32Array(s),qr[s]=r),n!==0){i.toArray(r,0);for(let a=1,l=0;a!==n;++a)l+=t,e[a].toArray(r,l)}return r}function ft(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ut(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function ri(e,n){let t=Zr[n];t===void 0&&(t=new Int32Array(n),Zr[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Jf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function eu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2fv(this.addr,n),ut(t,n)}}function tu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(ft(t,n))return;e.uniform3fv(this.addr,n),ut(t,n)}}function nu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4fv(this.addr,n),ut(t,n)}}function iu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;Qr.set(i),e.uniformMatrix2fv(this.addr,!1,Qr),ut(t,i)}}function ru(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;$r.set(i),e.uniformMatrix3fv(this.addr,!1,$r),ut(t,i)}}function au(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;jr.set(i),e.uniformMatrix4fv(this.addr,!1,jr),ut(t,i)}}function ou(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function su(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2iv(this.addr,n),ut(t,n)}}function lu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ft(t,n))return;e.uniform3iv(this.addr,n),ut(t,n)}}function cu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4iv(this.addr,n),ut(t,n)}}function fu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function uu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2uiv(this.addr,n),ut(t,n)}}function du(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ft(t,n))return;e.uniform3uiv(this.addr,n),ut(t,n)}}function hu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4uiv(this.addr,n),ut(t,n)}}function pu(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(Pi.compareFunction=t.isReversedDepthBuffer()?Fi:Bi,r=Pi):r=$a,t.setTexture2D(n||r,s)}function mu(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(n||Ja,s)}function _u(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(n||eo,s)}function gu(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(n||Qa,s)}function vu(e){switch(e){case 5126:return Jf;case 35664:return eu;case 35665:return tu;case 35666:return nu;case 35674:return iu;case 35675:return ru;case 35676:return au;case 5124:case 35670:return ou;case 35667:case 35671:return su;case 35668:case 35672:return lu;case 35669:case 35673:return cu;case 5125:return fu;case 36294:return uu;case 36295:return du;case 36296:return hu;case 35678:case 36198:case 36298:case 36306:case 35682:return pu;case 35679:case 36299:case 36307:return mu;case 35680:case 36300:case 36308:case 36293:return _u;case 36289:case 36303:case 36311:case 36292:return gu}}function Su(e,n){e.uniform1fv(this.addr,n)}function Eu(e,n){const t=pn(n,this.size,2);e.uniform2fv(this.addr,t)}function xu(e,n){const t=pn(n,this.size,3);e.uniform3fv(this.addr,t)}function bu(e,n){const t=pn(n,this.size,4);e.uniform4fv(this.addr,t)}function Mu(e,n){const t=pn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Tu(e,n){const t=pn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Au(e,n){const t=pn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function wu(e,n){e.uniform1iv(this.addr,n)}function Ru(e,n){e.uniform2iv(this.addr,n)}function yu(e,n){e.uniform3iv(this.addr,n)}function Cu(e,n){e.uniform4iv(this.addr,n)}function Pu(e,n){e.uniform1uiv(this.addr,n)}function Du(e,n){e.uniform2uiv(this.addr,n)}function Lu(e,n){e.uniform3uiv(this.addr,n)}function Uu(e,n){e.uniform4uiv(this.addr,n)}function Iu(e,n,t){const i=this.cache,s=n.length,r=ri(t,s);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));let a;this.type===e.SAMPLER_2D_SHADOW?a=Pi:a=$a;for(let l=0;l!==s;++l)t.setTexture2D(n[l]||a,r[l])}function Nu(e,n,t){const i=this.cache,s=n.length,r=ri(t,s);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==s;++a)t.setTexture3D(n[a]||Ja,r[a])}function Ou(e,n,t){const i=this.cache,s=n.length,r=ri(t,s);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==s;++a)t.setTextureCube(n[a]||eo,r[a])}function Fu(e,n,t){const i=this.cache,s=n.length,r=ri(t,s);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(n[a]||Qa,r[a])}function Bu(e){switch(e){case 5126:return Su;case 35664:return Eu;case 35665:return xu;case 35666:return bu;case 35674:return Mu;case 35675:return Tu;case 35676:return Au;case 5124:case 35670:return wu;case 35667:case 35671:return Ru;case 35668:case 35672:return yu;case 35669:case 35673:return Cu;case 5125:return Pu;case 36294:return Du;case 36295:return Lu;case 36296:return Uu;case 35678:case 36198:case 36298:case 36306:case 35682:return Iu;case 35679:case 36299:case 36307:return Nu;case 35680:case 36300:case 36308:case 36293:return Ou;case 36289:case 36303:case 36311:case 36292:return Fu}}class ku{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=vu(t.type)}}class Gu{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bu(t.type)}}class Hu{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const l=s[r];l.setValue(n,t[l.id],i)}}}const Si=/(\w+)(\])?(\[|\.)?/g;function Jr(e,n){e.seq.push(n),e.map[n.id]=n}function Vu(e,n,t){const i=e.name,s=i.length;for(Si.lastIndex=0;;){const r=Si.exec(i),a=Si.lastIndex;let l=r[1];const g=r[2]==="]",E=r[3];if(g&&(l=l|0),E===void 0||E==="["&&a+2===s){Jr(t,E===void 0?new ku(l,e,n):new Gu(l,e,n));break}else{let x=t.map[l];x===void 0&&(x=new Hu(l),Jr(t,x)),t=x}}}class Vn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=n.getActiveUniform(t,a),g=n.getUniformLocation(t,l.name);Vu(l,g,this)}const s=[],r=[];for(const a of this.seq)a.type===n.SAMPLER_2D_SHADOW||a.type===n.SAMPLER_CUBE_SHADOW||a.type===n.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(n,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(n,i,s)}setOptional(n,t,i){const s=t[i];s!==void 0&&this.setValue(n,i,s)}static upload(n,t,i,s){for(let r=0,a=t.length;r!==a;++r){const l=t[r],g=i[l.id];g.needsUpdate!==!1&&l.setValue(n,g.value,s)}}static seqWithValue(n,t){const i=[];for(let s=0,r=n.length;s!==r;++s){const a=n[s];a.id in t&&i.push(a)}return i}}function ea(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const zu=37297;let Wu=0;function Xu(e,n){const t=e.split(`
`),i=[],s=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let a=s;a<r;a++){const l=a+1;i.push(`${l===n?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}const ta=new Ye;function Yu(e){lt._getMatrix(ta,lt.workingColorSpace,e);const n=`mat3( ${ta.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(e)){case Ya:return[n,"LinearTransferOETF"];case nt:return[n,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function na(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Xu(e.getShaderSource(n),l)}else return r}function Ku(e,n){const t=Yu(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qu={[Xa]:"Linear",[Wa]:"Reinhard",[za]:"Cineon",[Va]:"ACESFilmic",[Ha]:"AgX",[Ga]:"Neutral",[ka]:"Custom"};function Zu(e,n){const t=qu[n];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const In=new Be;function ju(){lt.getLuminanceCoefficients(In);const e=In.x.toFixed(4),n=In.y.toFixed(4),t=In.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $u(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sn).join(`
`)}function Qu(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Ju(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=e.getActiveAttrib(n,s),a=r.name;let l=1;r.type===e.FLOAT_MAT2&&(l=2),r.type===e.FLOAT_MAT3&&(l=3),r.type===e.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:e.getAttribLocation(n,a),locationSize:l}}return t}function Sn(e){return e!==""}function ia(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function ra(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const ed=/^[ \t]*#include +<([\w\d./]+)>/gm;function Di(e){return e.replace(ed,nd)}const td=new Map;function nd(e,n){let t=ze[n];if(t===void 0){const i=td.get(n);if(i!==void 0)t=ze[i],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return Di(t)}const id=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function aa(e){return e.replace(id,rd)}function rd(e,n,t,i){let s="";for(let r=parseInt(n);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function oa(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}const ad={[Gn]:"SHADOWMAP_TYPE_PCF",[vn]:"SHADOWMAP_TYPE_VSM"};function od(e){return ad[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sd={[wn]:"ENVMAP_TYPE_CUBE",[dn]:"ENVMAP_TYPE_CUBE",[ni]:"ENVMAP_TYPE_CUBE_UV"};function ld(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":sd[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const cd={[dn]:"ENVMAP_MODE_REFRACTION"};function fd(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":cd[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ud={[ks]:"ENVMAP_BLENDING_MULTIPLY",[Bs]:"ENVMAP_BLENDING_MIX",[Fs]:"ENVMAP_BLENDING_ADD"};function dd(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":ud[e.combine]||"ENVMAP_BLENDING_NONE"}function hd(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function pd(e,n,t,i){const s=e.getContext(),r=t.defines;let a=t.vertexShader,l=t.fragmentShader;const g=od(t),E=ld(t),M=fd(t),x=dd(t),d=hd(t),f=$u(t),S=Qu(r),_=s.createProgram();let c,o,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Sn).join(`
`),c.length>0&&(c+=`
`),o=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Sn).join(`
`),o.length>0&&(o+=`
`)):(c=[oa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+M:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sn).join(`
`),o=[oa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+E:"",t.envMap?"#define "+M:"",t.envMap?"#define "+x:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ct?"#define TONE_MAPPING":"",t.toneMapping!==Ct?ze.tonemapping_pars_fragment:"",t.toneMapping!==Ct?Zu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Ku("linearToOutputTexel",t.outputColorSpace),ju(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sn).join(`
`)),a=Di(a),a=ia(a,t),a=ra(a,t),l=Di(l),l=ia(l,t),l=ra(l,t),a=aa(a),l=aa(l),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,c=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,o=["#define varying in",t.glslVersion===Gr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const T=v+c+a,R=v+o+l,P=ea(s,s.VERTEX_SHADER,T),D=ea(s,s.FRAGMENT_SHADER,R);s.attachShader(_,P),s.attachShader(_,D),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(F){if(e.debug.checkShaderErrors){const C=s.getProgramInfoLog(_)||"",N=s.getShaderInfoLog(P)||"",u=s.getShaderInfoLog(D)||"",B=C.trim(),X=N.trim(),O=u.trim();let Q=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,_,P,D);else{const ce=na(s,P,"vertex"),H=na(s,D,"fragment");it("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+B+`
`+ce+`
`+H)}else B!==""?et("WebGLProgram: Program Info Log:",B):(X===""||O==="")&&(W=!1);W&&(F.diagnostics={runnable:Q,programLog:B,vertexShader:{log:X,prefix:c},fragmentShader:{log:O,prefix:o}})}s.deleteShader(P),s.deleteShader(D),b=new Vn(s,_),A=Ju(s,_)}let b;this.getUniforms=function(){return b===void 0&&L(this),b};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=s.getProgramParameter(_,zu)),Y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wu++,this.cacheKey=n,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=D,this}let md=0;class _d{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(n);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new gd(n),t.set(n,i)),i}}class gd{constructor(n){this.id=md++,this.code=n,this.usedTimes=0}}function vd(e,n,t,i,s,r){const a=new Is,l=new _d,g=new Set,E=[],M=new Map,x=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(b){return g.add(b),b===0?"uv":`uv${b}`}function _(b,A,Y,F,C){const N=F.fog,u=C.geometry,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,X=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,O=n.get(b.envMap||B,X),Q=O&&O.mapping===ni?O.image.height:null,W=f[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&et("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ce=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,H=ce!==void 0?ce.length:0;let G=0;u.morphAttributes.position!==void 0&&(G=1),u.morphAttributes.normal!==void 0&&(G=2),u.morphAttributes.color!==void 0&&(G=3);let he,me,fe,ne;if(W){const Ze=Rt[W];he=Ze.vertexShader,me=Ze.fragmentShader}else he=b.vertexShader,me=b.fragmentShader,l.update(b),fe=l.getVertexShaderID(b),ne=l.getFragmentShaderID(b);const ue=e.getRenderTarget(),se=e.state.buffers.depth.getReversed(),Me=C.isInstancedMesh===!0,Re=C.isBatchedMesh===!0,ye=!!b.map,qe=!!b.matcap,ke=!!O,p=!!b.aoMap,ee=!!b.lightMap,q=!!b.bumpMap,I=!!b.normalMap,h=!!b.displacementMap,V=!!b.emissiveMap,ie=!!b.metalnessMap,ae=!!b.roughnessMap,k=b.anisotropy>0,w=b.clearcoat>0,m=b.dispersion>0,U=b.iridescence>0,Z=b.sheen>0,re=b.transmission>0,j=k&&!!b.anisotropyMap,Ee=w&&!!b.clearcoatMap,ge=w&&!!b.clearcoatNormalMap,Pe=w&&!!b.clearcoatRoughnessMap,Fe=U&&!!b.iridescenceMap,le=U&&!!b.iridescenceThicknessMap,pe=Z&&!!b.sheenColorMap,De=Z&&!!b.sheenRoughnessMap,we=!!b.specularMap,Te=!!b.specularColorMap,Ve=!!b.specularIntensityMap,z=re&&!!b.transmissionMap,ve=re&&!!b.thicknessMap,_e=!!b.gradientMap,Ae=!!b.alphaMap,de=b.alphaTest>0,oe=!!b.alphaHash,Le=!!b.extensions;let Ge=Ct;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ge=e.toneMapping);const tt={shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:he,fragmentShader:me,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:ne,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Re,batchingColor:Re&&C._colorsTexture!==null,instancing:Me,instancingColor:Me&&C.instanceColor!==null,instancingMorph:Me&&C.morphTexture!==null,outputColorSpace:ue===null?e.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:ti,alphaToCoverage:!!b.alphaToCoverage,map:ye,matcap:qe,envMap:ke,envMapMode:ke&&O.mapping,envMapCubeUVHeight:Q,aoMap:p,lightMap:ee,bumpMap:q,normalMap:I,displacementMap:h,emissiveMap:V,normalMapObjectSpace:I&&b.normalMapType===Ps,normalMapTangentSpace:I&&b.normalMapType===Cs,metalnessMap:ie,roughnessMap:ae,anisotropy:k,anisotropyMap:j,clearcoat:w,clearcoatMap:Ee,clearcoatNormalMap:ge,clearcoatRoughnessMap:Pe,dispersion:m,iridescence:U,iridescenceMap:Fe,iridescenceThicknessMap:le,sheen:Z,sheenColorMap:pe,sheenRoughnessMap:De,specularMap:we,specularColorMap:Te,specularIntensityMap:Ve,transmission:re,transmissionMap:z,thicknessMap:ve,gradientMap:_e,opaque:b.transparent===!1&&b.blending===Hn&&b.alphaToCoverage===!1,alphaMap:Ae,alphaTest:de,alphaHash:oe,combine:b.combine,mapUv:ye&&S(b.map.channel),aoMapUv:p&&S(b.aoMap.channel),lightMapUv:ee&&S(b.lightMap.channel),bumpMapUv:q&&S(b.bumpMap.channel),normalMapUv:I&&S(b.normalMap.channel),displacementMapUv:h&&S(b.displacementMap.channel),emissiveMapUv:V&&S(b.emissiveMap.channel),metalnessMapUv:ie&&S(b.metalnessMap.channel),roughnessMapUv:ae&&S(b.roughnessMap.channel),anisotropyMapUv:j&&S(b.anisotropyMap.channel),clearcoatMapUv:Ee&&S(b.clearcoatMap.channel),clearcoatNormalMapUv:ge&&S(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&S(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&S(b.iridescenceMap.channel),iridescenceThicknessMapUv:le&&S(b.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&S(b.sheenColorMap.channel),sheenRoughnessMapUv:De&&S(b.sheenRoughnessMap.channel),specularMapUv:we&&S(b.specularMap.channel),specularColorMapUv:Te&&S(b.specularColorMap.channel),specularIntensityMapUv:Ve&&S(b.specularIntensityMap.channel),transmissionMapUv:z&&S(b.transmissionMap.channel),thicknessMapUv:ve&&S(b.thicknessMap.channel),alphaMapUv:Ae&&S(b.alphaMap.channel),vertexTangents:!!u.attributes.tangent&&(I||k),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!u.attributes.uv&&(ye||Ae),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||u.attributes.normal===void 0&&I===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:se,skinning:C.isSkinnedMesh===!0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:G,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:e.shadowMap.enabled&&Y.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ge,decodeVideoTexture:ye&&b.map.isVideoTexture===!0&&lt.getTransfer(b.map.colorSpace)===nt,decodeVideoTextureEmissive:V&&b.emissiveMap.isVideoTexture===!0&&lt.getTransfer(b.emissiveMap.colorSpace)===nt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ut,flipSided:b.side===xt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Le&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&b.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return tt.vertexUv1s=g.has(1),tt.vertexUv2s=g.has(2),tt.vertexUv3s=g.has(3),g.clear(),tt}function c(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Y in b.defines)A.push(Y),A.push(b.defines[Y]);return b.isRawShaderMaterial===!1&&(o(A,b),v(A,b),A.push(e.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function o(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function v(b,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),b.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),b.push(a.mask)}function T(b){const A=f[b.type];let Y;if(A){const F=Rt[A];Y=ys.clone(F.uniforms)}else Y=b.uniforms;return Y}function R(b,A){let Y=M.get(A);return Y!==void 0?++Y.usedTimes:(Y=new pd(e,A,b,s),E.push(Y),M.set(A,Y)),Y}function P(b){if(--b.usedTimes===0){const A=E.indexOf(b);E[A]=E[E.length-1],E.pop(),M.delete(b.cacheKey),b.destroy()}}function D(b){l.remove(b)}function L(){l.dispose()}return{getParameters:_,getProgramCacheKey:c,getUniforms:T,acquireProgram:R,releaseProgram:P,releaseShaderCache:D,programs:E,dispose:L}}function Sd(){let e=new WeakMap;function n(a){return e.has(a)}function t(a){let l=e.get(a);return l===void 0&&(l={},e.set(a,l)),l}function i(a){e.delete(a)}function s(a,l,g){e.get(a)[l]=g}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:s,dispose:r}}function Ed(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function sa(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function la(){const e=[];let n=0;const t=[],i=[],s=[];function r(){n=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function l(d,f,S,_,c,o){let v=e[n];return v===void 0?(v={id:d.id,object:d,geometry:f,material:S,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:c,group:o},e[n]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=S,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=c,v.group=o),n++,v}function g(d,f,S,_,c,o){const v=l(d,f,S,_,c,o);S.transmission>0?i.push(v):S.transparent===!0?s.push(v):t.push(v)}function E(d,f,S,_,c,o){const v=l(d,f,S,_,c,o);S.transmission>0?i.unshift(v):S.transparent===!0?s.unshift(v):t.unshift(v)}function M(d,f){t.length>1&&t.sort(d||Ed),i.length>1&&i.sort(f||sa),s.length>1&&s.sort(f||sa)}function x(){for(let d=n,f=e.length;d<f;d++){const S=e[d];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:g,unshift:E,finish:x,sort:M}}function xd(){let e=new WeakMap;function n(i,s){const r=e.get(i);let a;return r===void 0?(a=new la,e.set(i,[a])):s>=r.length?(a=new la,r.push(a)):a=r[s],a}function t(){e=new WeakMap}return{get:n,dispose:t}}function bd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Be,color:new at};break;case"SpotLight":t={position:new Be,direction:new Be,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Be,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Be,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new Be,halfWidth:new Be,halfHeight:new Be};break}return e[n.id]=t,t}}}function Md(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Td=0;function Ad(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function wd(e){const n=new bd,t=Md(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let E=0;E<9;E++)i.probe.push(new Be);const s=new Be,r=new fn,a=new fn;function l(E){let M=0,x=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,S=0,_=0,c=0,o=0,v=0,T=0,R=0,P=0,D=0,L=0;E.sort(Ad);for(let A=0,Y=E.length;A<Y;A++){const F=E[A],C=F.color,N=F.intensity,u=F.distance;let B=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===An?B=F.shadow.map.texture:B=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)M+=C.r*N,x+=C.g*N,d+=C.b*N;else if(F.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(F.sh.coefficients[X],N);L++}else if(F.isDirectionalLight){const X=n.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const O=F.shadow,Q=t.get(F);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,i.directionalShadow[f]=Q,i.directionalShadowMap[f]=B,i.directionalShadowMatrix[f]=F.shadow.matrix,v++}i.directional[f]=X,f++}else if(F.isSpotLight){const X=n.get(F);X.position.setFromMatrixPosition(F.matrixWorld),X.color.copy(C).multiplyScalar(N),X.distance=u,X.coneCos=Math.cos(F.angle),X.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),X.decay=F.decay,i.spot[_]=X;const O=F.shadow;if(F.map&&(i.spotLightMap[P]=F.map,P++,O.updateMatrices(F),F.castShadow&&D++),i.spotLightMatrix[_]=O.matrix,F.castShadow){const Q=t.get(F);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,i.spotShadow[_]=Q,i.spotShadowMap[_]=B,R++}_++}else if(F.isRectAreaLight){const X=n.get(F);X.color.copy(C).multiplyScalar(N),X.halfWidth.set(F.width*.5,0,0),X.halfHeight.set(0,F.height*.5,0),i.rectArea[c]=X,c++}else if(F.isPointLight){const X=n.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),X.distance=F.distance,X.decay=F.decay,F.castShadow){const O=F.shadow,Q=t.get(F);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,Q.shadowCameraNear=O.camera.near,Q.shadowCameraFar=O.camera.far,i.pointShadow[S]=Q,i.pointShadowMap[S]=B,i.pointShadowMatrix[S]=F.shadow.matrix,T++}i.point[S]=X,S++}else if(F.isHemisphereLight){const X=n.get(F);X.skyColor.copy(F.color).multiplyScalar(N),X.groundColor.copy(F.groundColor).multiplyScalar(N),i.hemi[o]=X,o++}}c>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=M,i.ambient[1]=x,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==f||b.pointLength!==S||b.spotLength!==_||b.rectAreaLength!==c||b.hemiLength!==o||b.numDirectionalShadows!==v||b.numPointShadows!==T||b.numSpotShadows!==R||b.numSpotMaps!==P||b.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=c,i.point.length=S,i.hemi.length=o,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=R+P-D,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,b.directionalLength=f,b.pointLength=S,b.spotLength=_,b.rectAreaLength=c,b.hemiLength=o,b.numDirectionalShadows=v,b.numPointShadows=T,b.numSpotShadows=R,b.numSpotMaps=P,b.numLightProbes=L,i.version=Td++)}function g(E,M){let x=0,d=0,f=0,S=0,_=0;const c=M.matrixWorldInverse;for(let o=0,v=E.length;o<v;o++){const T=E[o];if(T.isDirectionalLight){const R=i.directional[x];R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(c),x++}else if(T.isSpotLight){const R=i.spot[f];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(c),R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(c),f++}else if(T.isRectAreaLight){const R=i.rectArea[S];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(c),a.identity(),r.copy(T.matrixWorld),r.premultiply(c),a.extractRotation(r),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),S++}else if(T.isPointLight){const R=i.point[d];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(c),d++}else if(T.isHemisphereLight){const R=i.hemi[_];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(c),_++}}}return{setup:l,setupView:g,state:i}}function ca(e){const n=new wd(e),t=[],i=[];function s(M){E.camera=M,t.length=0,i.length=0}function r(M){t.push(M)}function a(M){i.push(M)}function l(){n.setup(t)}function g(M){n.setupView(t,M)}const E={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:s,state:E,setupLights:l,setupLightsView:g,pushLight:r,pushShadow:a}}function Rd(e){let n=new WeakMap;function t(s,r=0){const a=n.get(s);let l;return a===void 0?(l=new ca(e),n.set(s,[l])):r>=a.length?(l=new ca(e),a.push(l)):l=a[r],l}function i(){n=new WeakMap}return{get:t,dispose:i}}const yd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cd=`uniform sampler2D shadow_pass;
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
}`,Pd=[new Be(1,0,0),new Be(-1,0,0),new Be(0,1,0),new Be(0,-1,0),new Be(0,0,1),new Be(0,0,-1)],Dd=[new Be(0,-1,0),new Be(0,-1,0),new Be(0,0,1),new Be(0,0,-1),new Be(0,-1,0),new Be(0,-1,0)],fa=new fn,gn=new Be,Ei=new Be;function Ld(e,n,t){let i=new wa;const s=new rt,r=new rt,a=new vt,l=new ss,g=new ls,E={},M=t.maxTextureSize,x={[Mn]:xt,[xt]:Mn,[Ut]:Ut},d=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:yd,fragmentShader:Cd}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const S=new hn;S.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(S,d),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gn;let o=this.type;this.render=function(D,L,b){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||D.length===0)return;this.type===cs&&(et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gn);const A=e.getRenderTarget(),Y=e.getActiveCubeFace(),F=e.getActiveMipmapLevel(),C=e.state;C.setBlending(Ot),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const N=o!==this.type;N&&L.traverse(function(u){u.material&&(Array.isArray(u.material)?u.material.forEach(B=>B.needsUpdate=!0):u.material.needsUpdate=!0)});for(let u=0,B=D.length;u<B;u++){const X=D[u],O=X.shadow;if(O===void 0){et("WebGLShadowMap:",X,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const Q=O.getFrameExtents();s.multiply(Q),r.copy(O.mapSize),(s.x>M||s.y>M)&&(s.x>M&&(r.x=Math.floor(M/Q.x),s.x=r.x*Q.x,O.mapSize.x=r.x),s.y>M&&(r.y=Math.floor(M/Q.y),s.y=r.y*Q.y,O.mapSize.y=r.y));const W=e.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||N===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===vn){if(X.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Pt(s.x,s.y,{format:An,type:Xt,minFilter:Et,magFilter:Et,generateMipmaps:!1}),O.map.texture.name=X.name+".shadowMap",O.map.depthTexture=new Yn(s.x,s.y,Vt),O.map.depthTexture.name=X.name+".shadowMapDepth",O.map.depthTexture.format=un,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Nt,O.map.depthTexture.magFilter=Nt}else X.isPointLight?(O.map=new ja(s.x),O.map.depthTexture=new fs(s.x,Qt)):(O.map=new Pt(s.x,s.y),O.map.depthTexture=new Yn(s.x,s.y,Qt)),O.map.depthTexture.name=X.name+".shadowMap",O.map.depthTexture.format=un,this.type===Gn?(O.map.depthTexture.compareFunction=W?Fi:Bi,O.map.depthTexture.minFilter=Et,O.map.depthTexture.magFilter=Et):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Nt,O.map.depthTexture.magFilter=Nt);O.camera.updateProjectionMatrix()}const ce=O.map.isWebGLCubeRenderTarget?6:1;for(let H=0;H<ce;H++){if(O.map.isWebGLCubeRenderTarget)e.setRenderTarget(O.map,H),e.clear();else{H===0&&(e.setRenderTarget(O.map),e.clear());const G=O.getViewport(H);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),C.viewport(a)}if(X.isPointLight){const G=O.camera,he=O.matrix,me=X.distance||G.far;me!==G.far&&(G.far=me,G.updateProjectionMatrix()),gn.setFromMatrixPosition(X.matrixWorld),G.position.copy(gn),Ei.copy(G.position),Ei.add(Pd[H]),G.up.copy(Dd[H]),G.lookAt(Ei),G.updateMatrixWorld(),he.makeTranslation(-gn.x,-gn.y,-gn.z),fa.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),O._frustum.setFromProjectionMatrix(fa,G.coordinateSystem,G.reversedDepth)}else O.updateMatrices(X);i=O.getFrustum(),R(L,b,O.camera,X,this.type)}O.isPointLightShadow!==!0&&this.type===vn&&v(O,b),O.needsUpdate=!1}o=this.type,c.needsUpdate=!1,e.setRenderTarget(A,Y,F)};function v(D,L){const b=n.update(_);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Pt(s.x,s.y,{format:An,type:Xt})),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,e.setRenderTarget(D.mapPass),e.clear(),e.renderBufferDirect(L,null,b,d,_,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,e.setRenderTarget(D.map),e.clear(),e.renderBufferDirect(L,null,b,f,_,null)}function T(D,L,b,A){let Y=null;const F=b.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(F!==void 0)Y=F;else if(Y=b.isPointLight===!0?g:l,e.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const C=Y.uuid,N=L.uuid;let u=E[C];u===void 0&&(u={},E[C]=u);let B=u[N];B===void 0&&(B=Y.clone(),u[N]=B,L.addEventListener("dispose",P)),Y=B}if(Y.visible=L.visible,Y.wireframe=L.wireframe,A===vn?Y.side=L.shadowSide!==null?L.shadowSide:L.side:Y.side=L.shadowSide!==null?L.shadowSide:x[L.side],Y.alphaMap=L.alphaMap,Y.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,Y.map=L.map,Y.clipShadows=L.clipShadows,Y.clippingPlanes=L.clippingPlanes,Y.clipIntersection=L.clipIntersection,Y.displacementMap=L.displacementMap,Y.displacementScale=L.displacementScale,Y.displacementBias=L.displacementBias,Y.wireframeLinewidth=L.wireframeLinewidth,Y.linewidth=L.linewidth,b.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const C=e.properties.get(Y);C.light=b}return Y}function R(D,L,b,A,Y){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&Y===vn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,D.matrixWorld);const N=n.update(D),u=D.material;if(Array.isArray(u)){const B=N.groups;for(let X=0,O=B.length;X<O;X++){const Q=B[X],W=u[Q.materialIndex];if(W&&W.visible){const ce=T(D,W,A,Y);D.onBeforeShadow(e,D,L,b,N,ce,Q),e.renderBufferDirect(b,null,N,ce,D,Q),D.onAfterShadow(e,D,L,b,N,ce,Q)}}}else if(u.visible){const B=T(D,u,A,Y);D.onBeforeShadow(e,D,L,b,N,B,null),e.renderBufferDirect(b,null,N,B,D,null),D.onAfterShadow(e,D,L,b,N,B,null)}}const C=D.children;for(let N=0,u=C.length;N<u;N++)R(C[N],L,b,A,Y)}function P(D){D.target.removeEventListener("dispose",P);for(const b in E){const A=E[b],Y=D.target.uuid;Y in A&&(A[Y].dispose(),delete A[Y])}}}function Ud(e,n){function t(){let z=!1;const ve=new vt;let _e=null;const Ae=new vt(0,0,0,0);return{setMask:function(de){_e!==de&&!z&&(e.colorMask(de,de,de,de),_e=de)},setLocked:function(de){z=de},setClear:function(de,oe,Le,Ge,tt){tt===!0&&(de*=Ge,oe*=Ge,Le*=Ge),ve.set(de,oe,Le,Ge),Ae.equals(ve)===!1&&(e.clearColor(de,oe,Le,Ge),Ae.copy(ve))},reset:function(){z=!1,_e=null,Ae.set(-1,0,0,0)}}}function i(){let z=!1,ve=!1,_e=null,Ae=null,de=null;return{setReversed:function(oe){if(ve!==oe){const Le=n.get("EXT_clip_control");oe?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ve=oe;const Ge=de;de=null,this.setClear(Ge)}},getReversed:function(){return ve},setTest:function(oe){oe?ue(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(oe){_e!==oe&&!z&&(e.depthMask(oe),_e=oe)},setFunc:function(oe){if(ve&&(oe=Hs[oe]),Ae!==oe){switch(oe){case Ts:e.depthFunc(e.NEVER);break;case Ms:e.depthFunc(e.ALWAYS);break;case bs:e.depthFunc(e.LESS);break;case nr:e.depthFunc(e.LEQUAL);break;case xs:e.depthFunc(e.EQUAL);break;case Es:e.depthFunc(e.GEQUAL);break;case Ss:e.depthFunc(e.GREATER);break;case vs:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Ae=oe}},setLocked:function(oe){z=oe},setClear:function(oe){de!==oe&&(de=oe,ve&&(oe=1-oe),e.clearDepth(oe))},reset:function(){z=!1,_e=null,Ae=null,de=null,ve=!1}}}function s(){let z=!1,ve=null,_e=null,Ae=null,de=null,oe=null,Le=null,Ge=null,tt=null;return{setTest:function(Ze){z||(Ze?ue(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(Ze){ve!==Ze&&!z&&(e.stencilMask(Ze),ve=Ze)},setFunc:function(Ze,Dt,Lt){(_e!==Ze||Ae!==Dt||de!==Lt)&&(e.stencilFunc(Ze,Dt,Lt),_e=Ze,Ae=Dt,de=Lt)},setOp:function(Ze,Dt,Lt){(oe!==Ze||Le!==Dt||Ge!==Lt)&&(e.stencilOp(Ze,Dt,Lt),oe=Ze,Le=Dt,Ge=Lt)},setLocked:function(Ze){z=Ze},setClear:function(Ze){tt!==Ze&&(e.clearStencil(Ze),tt=Ze)},reset:function(){z=!1,ve=null,_e=null,Ae=null,de=null,oe=null,Le=null,Ge=null,tt=null}}}const r=new t,a=new i,l=new s,g=new WeakMap,E=new WeakMap;let M={},x={},d=new WeakMap,f=[],S=null,_=!1,c=null,o=null,v=null,T=null,R=null,P=null,D=null,L=new at(0,0,0),b=0,A=!1,Y=null,F=null,C=null,N=null,u=null;const B=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,O=0;const Q=e.getParameter(e.VERSION);Q.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Q)[1]),X=O>=1):Q.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),X=O>=2);let W=null,ce={};const H=e.getParameter(e.SCISSOR_BOX),G=e.getParameter(e.VIEWPORT),he=new vt().fromArray(H),me=new vt().fromArray(G);function fe(z,ve,_e,Ae){const de=new Uint8Array(4),oe=e.createTexture();e.bindTexture(z,oe),e.texParameteri(z,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(z,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Le=0;Le<_e;Le++)z===e.TEXTURE_3D||z===e.TEXTURE_2D_ARRAY?e.texImage3D(ve,0,e.RGBA,1,1,Ae,0,e.RGBA,e.UNSIGNED_BYTE,de):e.texImage2D(ve+Le,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,de);return oe}const ne={};ne[e.TEXTURE_2D]=fe(e.TEXTURE_2D,e.TEXTURE_2D,1),ne[e.TEXTURE_CUBE_MAP]=fe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[e.TEXTURE_2D_ARRAY]=fe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ne[e.TEXTURE_3D]=fe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ue(e.DEPTH_TEST),a.setFunc(nr),q(!1),I(Nr),ue(e.CULL_FACE),p(Ot);function ue(z){M[z]!==!0&&(e.enable(z),M[z]=!0)}function se(z){M[z]!==!1&&(e.disable(z),M[z]=!1)}function Me(z,ve){return x[z]!==ve?(e.bindFramebuffer(z,ve),x[z]=ve,z===e.DRAW_FRAMEBUFFER&&(x[e.FRAMEBUFFER]=ve),z===e.FRAMEBUFFER&&(x[e.DRAW_FRAMEBUFFER]=ve),!0):!1}function Re(z,ve){let _e=f,Ae=!1;if(z){_e=d.get(ve),_e===void 0&&(_e=[],d.set(ve,_e));const de=z.textures;if(_e.length!==de.length||_e[0]!==e.COLOR_ATTACHMENT0){for(let oe=0,Le=de.length;oe<Le;oe++)_e[oe]=e.COLOR_ATTACHMENT0+oe;_e.length=de.length,Ae=!0}}else _e[0]!==e.BACK&&(_e[0]=e.BACK,Ae=!0);Ae&&e.drawBuffers(_e)}function ye(z){return S!==z?(e.useProgram(z),S=z,!0):!1}const qe={[mn]:e.FUNC_ADD,[Oo]:e.FUNC_SUBTRACT,[No]:e.FUNC_REVERSE_SUBTRACT};qe[Vs]=e.MIN,qe[zs]=e.MAX;const ke={[$o]:e.ZERO,[jo]:e.ONE,[Zo]:e.SRC_COLOR,[qo]:e.SRC_ALPHA,[Ko]:e.SRC_ALPHA_SATURATE,[Yo]:e.DST_COLOR,[Xo]:e.DST_ALPHA,[Wo]:e.ONE_MINUS_SRC_COLOR,[zo]:e.ONE_MINUS_SRC_ALPHA,[Vo]:e.ONE_MINUS_DST_COLOR,[Ho]:e.ONE_MINUS_DST_ALPHA,[Go]:e.CONSTANT_COLOR,[ko]:e.ONE_MINUS_CONSTANT_COLOR,[Bo]:e.CONSTANT_ALPHA,[Fo]:e.ONE_MINUS_CONSTANT_ALPHA};function p(z,ve,_e,Ae,de,oe,Le,Ge,tt,Ze){if(z===Ot){_===!0&&(se(e.BLEND),_=!1);return}if(_===!1&&(ue(e.BLEND),_=!0),z!==Rs){if(z!==c||Ze!==A){if((o!==mn||R!==mn)&&(e.blendEquation(e.FUNC_ADD),o=mn,R=mn),Ze)switch(z){case Hn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Br:e.blendFunc(e.ONE,e.ONE);break;case Fr:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Or:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:it("WebGLState: Invalid blending: ",z);break}else switch(z){case Hn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Br:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Fr:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Or:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",z);break}v=null,T=null,P=null,D=null,L.set(0,0,0),b=0,c=z,A=Ze}return}de=de||ve,oe=oe||_e,Le=Le||Ae,(ve!==o||de!==R)&&(e.blendEquationSeparate(qe[ve],qe[de]),o=ve,R=de),(_e!==v||Ae!==T||oe!==P||Le!==D)&&(e.blendFuncSeparate(ke[_e],ke[Ae],ke[oe],ke[Le]),v=_e,T=Ae,P=oe,D=Le),(Ge.equals(L)===!1||tt!==b)&&(e.blendColor(Ge.r,Ge.g,Ge.b,tt),L.copy(Ge),b=tt),c=z,A=!1}function ee(z,ve){z.side===Ut?se(e.CULL_FACE):ue(e.CULL_FACE);let _e=z.side===xt;ve&&(_e=!_e),q(_e),z.blending===Hn&&z.transparent===!1?p(Ot):p(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const Ae=z.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),V(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function q(z){Y!==z&&(z?e.frontFace(e.CW):e.frontFace(e.CCW),Y=z)}function I(z){z!==As?(ue(e.CULL_FACE),z!==F&&(z===Nr?e.cullFace(e.BACK):z===ws?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):se(e.CULL_FACE),F=z}function h(z){z!==C&&(X&&e.lineWidth(z),C=z)}function V(z,ve,_e){z?(ue(e.POLYGON_OFFSET_FILL),(N!==ve||u!==_e)&&(N=ve,u=_e,a.getReversed()&&(ve=-ve),e.polygonOffset(ve,_e))):se(e.POLYGON_OFFSET_FILL)}function ie(z){z?ue(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function ae(z){z===void 0&&(z=e.TEXTURE0+B-1),W!==z&&(e.activeTexture(z),W=z)}function k(z,ve,_e){_e===void 0&&(W===null?_e=e.TEXTURE0+B-1:_e=W);let Ae=ce[_e];Ae===void 0&&(Ae={type:void 0,texture:void 0},ce[_e]=Ae),(Ae.type!==z||Ae.texture!==ve)&&(W!==_e&&(e.activeTexture(_e),W=_e),e.bindTexture(z,ve||ne[z]),Ae.type=z,Ae.texture=ve)}function w(){const z=ce[W];z!==void 0&&z.type!==void 0&&(e.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function m(){try{e.compressedTexImage2D(...arguments)}catch(z){it("WebGLState:",z)}}function U(){try{e.compressedTexImage3D(...arguments)}catch(z){it("WebGLState:",z)}}function Z(){try{e.texSubImage2D(...arguments)}catch(z){it("WebGLState:",z)}}function re(){try{e.texSubImage3D(...arguments)}catch(z){it("WebGLState:",z)}}function j(){try{e.compressedTexSubImage2D(...arguments)}catch(z){it("WebGLState:",z)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(z){it("WebGLState:",z)}}function ge(){try{e.texStorage2D(...arguments)}catch(z){it("WebGLState:",z)}}function Pe(){try{e.texStorage3D(...arguments)}catch(z){it("WebGLState:",z)}}function Fe(){try{e.texImage2D(...arguments)}catch(z){it("WebGLState:",z)}}function le(){try{e.texImage3D(...arguments)}catch(z){it("WebGLState:",z)}}function pe(z){he.equals(z)===!1&&(e.scissor(z.x,z.y,z.z,z.w),he.copy(z))}function De(z){me.equals(z)===!1&&(e.viewport(z.x,z.y,z.z,z.w),me.copy(z))}function we(z,ve){let _e=E.get(ve);_e===void 0&&(_e=new WeakMap,E.set(ve,_e));let Ae=_e.get(z);Ae===void 0&&(Ae=e.getUniformBlockIndex(ve,z.name),_e.set(z,Ae))}function Te(z,ve){const Ae=E.get(ve).get(z);g.get(ve)!==Ae&&(e.uniformBlockBinding(ve,Ae,z.__bindingPointIndex),g.set(ve,Ae))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),M={},W=null,ce={},x={},d=new WeakMap,f=[],S=null,_=!1,c=null,o=null,v=null,T=null,R=null,P=null,D=null,L=new at(0,0,0),b=0,A=!1,Y=null,F=null,C=null,N=null,u=null,he.set(0,0,e.canvas.width,e.canvas.height),me.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:ue,disable:se,bindFramebuffer:Me,drawBuffers:Re,useProgram:ye,setBlending:p,setMaterial:ee,setFlipSided:q,setCullFace:I,setLineWidth:h,setPolygonOffset:V,setScissorTest:ie,activeTexture:ae,bindTexture:k,unbindTexture:w,compressedTexImage2D:m,compressedTexImage3D:U,texImage2D:Fe,texImage3D:le,updateUBOMapping:we,uniformBlockBinding:Te,texStorage2D:ge,texStorage3D:Pe,texSubImage2D:Z,texSubImage3D:re,compressedTexSubImage2D:j,compressedTexSubImage3D:Ee,scissor:pe,viewport:De,reset:Ve}}function Id(e,n,t,i,s,r,a){const l=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new rt,M=new WeakMap;let x;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,m){return f?new OffscreenCanvas(w,m):Os("canvas")}function _(w,m,U){let Z=1;const re=k(w);if((re.width>U||re.height>U)&&(Z=U/Math.max(re.width,re.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const j=Math.floor(Z*re.width),Ee=Math.floor(Z*re.height);x===void 0&&(x=S(j,Ee));const ge=m?S(j,Ee):x;return ge.width=j,ge.height=Ee,ge.getContext("2d").drawImage(w,0,0,j,Ee),et("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+j+"x"+Ee+")."),ge}else return"data"in w&&et("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),w;return w}function c(w){return w.generateMipmaps}function o(w){e.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function T(w,m,U,Z,re=!1){if(w!==null){if(e[w]!==void 0)return e[w];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=m;if(m===e.RED&&(U===e.FLOAT&&(j=e.R32F),U===e.HALF_FLOAT&&(j=e.R16F),U===e.UNSIGNED_BYTE&&(j=e.R8)),m===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(j=e.R8UI),U===e.UNSIGNED_SHORT&&(j=e.R16UI),U===e.UNSIGNED_INT&&(j=e.R32UI),U===e.BYTE&&(j=e.R8I),U===e.SHORT&&(j=e.R16I),U===e.INT&&(j=e.R32I)),m===e.RG&&(U===e.FLOAT&&(j=e.RG32F),U===e.HALF_FLOAT&&(j=e.RG16F),U===e.UNSIGNED_BYTE&&(j=e.RG8)),m===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(j=e.RG8UI),U===e.UNSIGNED_SHORT&&(j=e.RG16UI),U===e.UNSIGNED_INT&&(j=e.RG32UI),U===e.BYTE&&(j=e.RG8I),U===e.SHORT&&(j=e.RG16I),U===e.INT&&(j=e.RG32I)),m===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(j=e.RGB8UI),U===e.UNSIGNED_SHORT&&(j=e.RGB16UI),U===e.UNSIGNED_INT&&(j=e.RGB32UI),U===e.BYTE&&(j=e.RGB8I),U===e.SHORT&&(j=e.RGB16I),U===e.INT&&(j=e.RGB32I)),m===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(j=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(j=e.RGBA16UI),U===e.UNSIGNED_INT&&(j=e.RGBA32UI),U===e.BYTE&&(j=e.RGBA8I),U===e.SHORT&&(j=e.RGBA16I),U===e.INT&&(j=e.RGBA32I)),m===e.RGB&&(U===e.UNSIGNED_INT_5_9_9_9_REV&&(j=e.RGB9_E5),U===e.UNSIGNED_INT_10F_11F_11F_REV&&(j=e.R11F_G11F_B10F)),m===e.RGBA){const Ee=re?Ya:lt.getTransfer(Z);U===e.FLOAT&&(j=e.RGBA32F),U===e.HALF_FLOAT&&(j=e.RGBA16F),U===e.UNSIGNED_BYTE&&(j=Ee===nt?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT_4_4_4_4&&(j=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(j=e.RGB5_A1)}return(j===e.R16F||j===e.R32F||j===e.RG16F||j===e.RG32F||j===e.RGBA16F||j===e.RGBA32F)&&n.get("EXT_color_buffer_float"),j}function R(w,m){let U;return w?m===null||m===Qt||m===Tn?U=e.DEPTH24_STENCIL8:m===Vt?U=e.DEPTH32F_STENCIL8:m===Kn&&(U=e.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Qt||m===Tn?U=e.DEPTH_COMPONENT24:m===Vt?U=e.DEPTH_COMPONENT32F:m===Kn&&(U=e.DEPTH_COMPONENT16),U}function P(w,m){return c(w)===!0||w.isFramebufferTexture&&w.minFilter!==Nt&&w.minFilter!==Et?Math.log2(Math.max(m.width,m.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?m.mipmaps.length:1}function D(w){const m=w.target;m.removeEventListener("dispose",D),b(m),m.isVideoTexture&&M.delete(m)}function L(w){const m=w.target;m.removeEventListener("dispose",L),Y(m)}function b(w){const m=i.get(w);if(m.__webglInit===void 0)return;const U=w.source,Z=d.get(U);if(Z){const re=Z[m.__cacheKey];re.usedTimes--,re.usedTimes===0&&A(w),Object.keys(Z).length===0&&d.delete(U)}i.remove(w)}function A(w){const m=i.get(w);e.deleteTexture(m.__webglTexture);const U=w.source,Z=d.get(U);delete Z[m.__cacheKey],a.memory.textures--}function Y(w){const m=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(m.__webglFramebuffer[Z]))for(let re=0;re<m.__webglFramebuffer[Z].length;re++)e.deleteFramebuffer(m.__webglFramebuffer[Z][re]);else e.deleteFramebuffer(m.__webglFramebuffer[Z]);m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer[Z])}else{if(Array.isArray(m.__webglFramebuffer))for(let Z=0;Z<m.__webglFramebuffer.length;Z++)e.deleteFramebuffer(m.__webglFramebuffer[Z]);else e.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&e.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let Z=0;Z<m.__webglColorRenderbuffer.length;Z++)m.__webglColorRenderbuffer[Z]&&e.deleteRenderbuffer(m.__webglColorRenderbuffer[Z]);m.__webglDepthRenderbuffer&&e.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const U=w.textures;for(let Z=0,re=U.length;Z<re;Z++){const j=i.get(U[Z]);j.__webglTexture&&(e.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(U[Z])}i.remove(w)}let F=0;function C(){F=0}function N(){const w=F;return w>=s.maxTextures&&et("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function u(w){const m=[];return m.push(w.wrapS),m.push(w.wrapT),m.push(w.wrapR||0),m.push(w.magFilter),m.push(w.minFilter),m.push(w.anisotropy),m.push(w.internalFormat),m.push(w.format),m.push(w.type),m.push(w.generateMipmaps),m.push(w.premultiplyAlpha),m.push(w.flipY),m.push(w.unpackAlignment),m.push(w.colorSpace),m.join()}function B(w,m){const U=i.get(w);if(w.isVideoTexture&&ie(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){const Z=w.image;if(Z===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(U,w,m);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+m)}function X(w,m){const U=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){ne(U,w,m);return}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+m)}function O(w,m){const U=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){ne(U,w,m);return}t.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+m)}function Q(w,m){const U=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&U.__version!==w.version){ue(U,w,m);return}t.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+m)}const W={[Jo]:e.REPEAT,[wi]:e.CLAMP_TO_EDGE,[Qo]:e.MIRRORED_REPEAT},ce={[Nt]:e.NEAREST,[es]:e.NEAREST_MIPMAP_NEAREST,[Ln]:e.NEAREST_MIPMAP_LINEAR,[Et]:e.LINEAR,[li]:e.LINEAR_MIPMAP_NEAREST,[an]:e.LINEAR_MIPMAP_LINEAR},H={[os]:e.NEVER,[as]:e.ALWAYS,[rs]:e.LESS,[Bi]:e.LEQUAL,[is]:e.EQUAL,[Fi]:e.GEQUAL,[ns]:e.GREATER,[ts]:e.NOTEQUAL};function G(w,m){if(m.type===Vt&&n.has("OES_texture_float_linear")===!1&&(m.magFilter===Et||m.magFilter===li||m.magFilter===Ln||m.magFilter===an||m.minFilter===Et||m.minFilter===li||m.minFilter===Ln||m.minFilter===an)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,W[m.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,W[m.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,W[m.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,ce[m.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,ce[m.minFilter]),m.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,H[m.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Nt||m.minFilter!==Ln&&m.minFilter!==an||m.type===Vt&&n.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const U=n.get("EXT_texture_filter_anisotropic");e.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function he(w,m){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,m.addEventListener("dispose",D));const Z=m.source;let re=d.get(Z);re===void 0&&(re={},d.set(Z,re));const j=u(m);if(j!==w.__cacheKey){re[j]===void 0&&(re[j]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,U=!0),re[j].usedTimes++;const Ee=re[w.__cacheKey];Ee!==void 0&&(re[w.__cacheKey].usedTimes--,Ee.usedTimes===0&&A(m)),w.__cacheKey=j,w.__webglTexture=re[j].texture}return U}function me(w,m,U){return Math.floor(Math.floor(w/U)/m)}function fe(w,m,U,Z){const j=w.updateRanges;if(j.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,m.width,m.height,U,Z,m.data);else{j.sort((le,pe)=>le.start-pe.start);let Ee=0;for(let le=1;le<j.length;le++){const pe=j[Ee],De=j[le],we=pe.start+pe.count,Te=me(De.start,m.width,4),Ve=me(pe.start,m.width,4);De.start<=we+1&&Te===Ve&&me(De.start+De.count-1,m.width,4)===Te?pe.count=Math.max(pe.count,De.start+De.count-pe.start):(++Ee,j[Ee]=De)}j.length=Ee+1;const ge=e.getParameter(e.UNPACK_ROW_LENGTH),Pe=e.getParameter(e.UNPACK_SKIP_PIXELS),Fe=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,m.width);for(let le=0,pe=j.length;le<pe;le++){const De=j[le],we=Math.floor(De.start/4),Te=Math.ceil(De.count/4),Ve=we%m.width,z=Math.floor(we/m.width),ve=Te,_e=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ve),e.pixelStorei(e.UNPACK_SKIP_ROWS,z),t.texSubImage2D(e.TEXTURE_2D,0,Ve,z,ve,_e,U,Z,m.data)}w.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ge),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Pe),e.pixelStorei(e.UNPACK_SKIP_ROWS,Fe)}}function ne(w,m,U){let Z=e.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(Z=e.TEXTURE_2D_ARRAY),m.isData3DTexture&&(Z=e.TEXTURE_3D);const re=he(w,m),j=m.source;t.bindTexture(Z,w.__webglTexture,e.TEXTURE0+U);const Ee=i.get(j);if(j.version!==Ee.__version||re===!0){t.activeTexture(e.TEXTURE0+U);const ge=lt.getPrimaries(lt.workingColorSpace),Pe=m.colorSpace===rn?null:lt.getPrimaries(m.colorSpace),Fe=m.colorSpace===rn||ge===Pe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let le=_(m.image,!1,s.maxTextureSize);le=ae(m,le);const pe=r.convert(m.format,m.colorSpace),De=r.convert(m.type);let we=T(m.internalFormat,pe,De,m.colorSpace,m.isVideoTexture);G(Z,m);let Te;const Ve=m.mipmaps,z=m.isVideoTexture!==!0,ve=Ee.__version===void 0||re===!0,_e=j.dataReady,Ae=P(m,le);if(m.isDepthTexture)we=R(m.format===on,m.type),ve&&(z?t.texStorage2D(e.TEXTURE_2D,1,we,le.width,le.height):t.texImage2D(e.TEXTURE_2D,0,we,le.width,le.height,0,pe,De,null));else if(m.isDataTexture)if(Ve.length>0){z&&ve&&t.texStorage2D(e.TEXTURE_2D,Ae,we,Ve[0].width,Ve[0].height);for(let de=0,oe=Ve.length;de<oe;de++)Te=Ve[de],z?_e&&t.texSubImage2D(e.TEXTURE_2D,de,0,0,Te.width,Te.height,pe,De,Te.data):t.texImage2D(e.TEXTURE_2D,de,we,Te.width,Te.height,0,pe,De,Te.data);m.generateMipmaps=!1}else z?(ve&&t.texStorage2D(e.TEXTURE_2D,Ae,we,le.width,le.height),_e&&fe(m,le,pe,De)):t.texImage2D(e.TEXTURE_2D,0,we,le.width,le.height,0,pe,De,le.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){z&&ve&&t.texStorage3D(e.TEXTURE_2D_ARRAY,Ae,we,Ve[0].width,Ve[0].height,le.depth);for(let de=0,oe=Ve.length;de<oe;de++)if(Te=Ve[de],m.format!==It)if(pe!==null)if(z){if(_e)if(m.layerUpdates.size>0){const Le=kr(Te.width,Te.height,m.format,m.type);for(const Ge of m.layerUpdates){const tt=Te.data.subarray(Ge*Le/Te.data.BYTES_PER_ELEMENT,(Ge+1)*Le/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,de,0,0,Ge,Te.width,Te.height,1,pe,tt)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,le.depth,pe,Te.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,de,we,Te.width,Te.height,le.depth,0,Te.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?_e&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,le.depth,pe,De,Te.data):t.texImage3D(e.TEXTURE_2D_ARRAY,de,we,Te.width,Te.height,le.depth,0,pe,De,Te.data)}else{z&&ve&&t.texStorage2D(e.TEXTURE_2D,Ae,we,Ve[0].width,Ve[0].height);for(let de=0,oe=Ve.length;de<oe;de++)Te=Ve[de],m.format!==It?pe!==null?z?_e&&t.compressedTexSubImage2D(e.TEXTURE_2D,de,0,0,Te.width,Te.height,pe,Te.data):t.compressedTexImage2D(e.TEXTURE_2D,de,we,Te.width,Te.height,0,Te.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?_e&&t.texSubImage2D(e.TEXTURE_2D,de,0,0,Te.width,Te.height,pe,De,Te.data):t.texImage2D(e.TEXTURE_2D,de,we,Te.width,Te.height,0,pe,De,Te.data)}else if(m.isDataArrayTexture)if(z){if(ve&&t.texStorage3D(e.TEXTURE_2D_ARRAY,Ae,we,le.width,le.height,le.depth),_e)if(m.layerUpdates.size>0){const de=kr(le.width,le.height,m.format,m.type);for(const oe of m.layerUpdates){const Le=le.data.subarray(oe*de/le.data.BYTES_PER_ELEMENT,(oe+1)*de/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,oe,le.width,le.height,1,pe,De,Le)}m.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,pe,De,le.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,we,le.width,le.height,le.depth,0,pe,De,le.data);else if(m.isData3DTexture)z?(ve&&t.texStorage3D(e.TEXTURE_3D,Ae,we,le.width,le.height,le.depth),_e&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,pe,De,le.data)):t.texImage3D(e.TEXTURE_3D,0,we,le.width,le.height,le.depth,0,pe,De,le.data);else if(m.isFramebufferTexture){if(ve)if(z)t.texStorage2D(e.TEXTURE_2D,Ae,we,le.width,le.height);else{let de=le.width,oe=le.height;for(let Le=0;Le<Ae;Le++)t.texImage2D(e.TEXTURE_2D,Le,we,de,oe,0,pe,De,null),de>>=1,oe>>=1}}else if(Ve.length>0){if(z&&ve){const de=k(Ve[0]);t.texStorage2D(e.TEXTURE_2D,Ae,we,de.width,de.height)}for(let de=0,oe=Ve.length;de<oe;de++)Te=Ve[de],z?_e&&t.texSubImage2D(e.TEXTURE_2D,de,0,0,pe,De,Te):t.texImage2D(e.TEXTURE_2D,de,we,pe,De,Te);m.generateMipmaps=!1}else if(z){if(ve){const de=k(le);t.texStorage2D(e.TEXTURE_2D,Ae,we,de.width,de.height)}_e&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,pe,De,le)}else t.texImage2D(e.TEXTURE_2D,0,we,pe,De,le);c(m)&&o(Z),Ee.__version=j.version,m.onUpdate&&m.onUpdate(m)}w.__version=m.version}function ue(w,m,U){if(m.image.length!==6)return;const Z=he(w,m),re=m.source;t.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+U);const j=i.get(re);if(re.version!==j.__version||Z===!0){t.activeTexture(e.TEXTURE0+U);const Ee=lt.getPrimaries(lt.workingColorSpace),ge=m.colorSpace===rn?null:lt.getPrimaries(m.colorSpace),Pe=m.colorSpace===rn||Ee===ge?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Fe=m.isCompressedTexture||m.image[0].isCompressedTexture,le=m.image[0]&&m.image[0].isDataTexture,pe=[];for(let oe=0;oe<6;oe++)!Fe&&!le?pe[oe]=_(m.image[oe],!0,s.maxCubemapSize):pe[oe]=le?m.image[oe].image:m.image[oe],pe[oe]=ae(m,pe[oe]);const De=pe[0],we=r.convert(m.format,m.colorSpace),Te=r.convert(m.type),Ve=T(m.internalFormat,we,Te,m.colorSpace),z=m.isVideoTexture!==!0,ve=j.__version===void 0||Z===!0,_e=re.dataReady;let Ae=P(m,De);G(e.TEXTURE_CUBE_MAP,m);let de;if(Fe){z&&ve&&t.texStorage2D(e.TEXTURE_CUBE_MAP,Ae,Ve,De.width,De.height);for(let oe=0;oe<6;oe++){de=pe[oe].mipmaps;for(let Le=0;Le<de.length;Le++){const Ge=de[Le];m.format!==It?we!==null?z?_e&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,0,0,Ge.width,Ge.height,we,Ge.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,Ve,Ge.width,Ge.height,0,Ge.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?_e&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,0,0,Ge.width,Ge.height,we,Te,Ge.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,Ve,Ge.width,Ge.height,0,we,Te,Ge.data)}}}else{if(de=m.mipmaps,z&&ve){de.length>0&&Ae++;const oe=k(pe[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,Ae,Ve,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(le){z?_e&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,pe[oe].width,pe[oe].height,we,Te,pe[oe].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,pe[oe].width,pe[oe].height,0,we,Te,pe[oe].data);for(let Le=0;Le<de.length;Le++){const tt=de[Le].image[oe].image;z?_e&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,0,0,tt.width,tt.height,we,Te,tt.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,Ve,tt.width,tt.height,0,we,Te,tt.data)}}else{z?_e&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,we,Te,pe[oe]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,we,Te,pe[oe]);for(let Le=0;Le<de.length;Le++){const Ge=de[Le];z?_e&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,0,0,we,Te,Ge.image[oe]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,Ve,we,Te,Ge.image[oe])}}}c(m)&&o(e.TEXTURE_CUBE_MAP),j.__version=re.version,m.onUpdate&&m.onUpdate(m)}w.__version=m.version}function se(w,m,U,Z,re,j){const Ee=r.convert(U.format,U.colorSpace),ge=r.convert(U.type),Pe=T(U.internalFormat,Ee,ge,U.colorSpace),Fe=i.get(m),le=i.get(U);if(le.__renderTarget=m,!Fe.__hasExternalTextures){const pe=Math.max(1,m.width>>j),De=Math.max(1,m.height>>j);re===e.TEXTURE_3D||re===e.TEXTURE_2D_ARRAY?t.texImage3D(re,j,Pe,pe,De,m.depth,0,Ee,ge,null):t.texImage2D(re,j,Pe,pe,De,0,Ee,ge,null)}t.bindFramebuffer(e.FRAMEBUFFER,w),V(m)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,re,le.__webglTexture,0,h(m)):(re===e.TEXTURE_2D||re>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Z,re,le.__webglTexture,j),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Me(w,m,U){if(e.bindRenderbuffer(e.RENDERBUFFER,w),m.depthBuffer){const Z=m.depthTexture,re=Z&&Z.isDepthTexture?Z.type:null,j=R(m.stencilBuffer,re),Ee=m.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;V(m)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,h(m),j,m.width,m.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,h(m),j,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,j,m.width,m.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Ee,e.RENDERBUFFER,w)}else{const Z=m.textures;for(let re=0;re<Z.length;re++){const j=Z[re],Ee=r.convert(j.format,j.colorSpace),ge=r.convert(j.type),Pe=T(j.internalFormat,Ee,ge,j.colorSpace);V(m)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,h(m),Pe,m.width,m.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,h(m),Pe,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,Pe,m.width,m.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Re(w,m,U){const Z=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,w),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=i.get(m.depthTexture);if(re.__renderTarget=m,(!re.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),Z){if(re.__webglInit===void 0&&(re.__webglInit=!0,m.depthTexture.addEventListener("dispose",D)),re.__webglTexture===void 0){re.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,re.__webglTexture),G(e.TEXTURE_CUBE_MAP,m.depthTexture);const Fe=r.convert(m.depthTexture.format),le=r.convert(m.depthTexture.type);let pe;m.depthTexture.format===un?pe=e.DEPTH_COMPONENT24:m.depthTexture.format===on&&(pe=e.DEPTH24_STENCIL8);for(let De=0;De<6;De++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,pe,m.width,m.height,0,Fe,le,null)}}else B(m.depthTexture,0);const j=re.__webglTexture,Ee=h(m),ge=Z?e.TEXTURE_CUBE_MAP_POSITIVE_X+U:e.TEXTURE_2D,Pe=m.depthTexture.format===on?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(m.depthTexture.format===un)V(m)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Pe,ge,j,0,Ee):e.framebufferTexture2D(e.FRAMEBUFFER,Pe,ge,j,0);else if(m.depthTexture.format===on)V(m)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Pe,ge,j,0,Ee):e.framebufferTexture2D(e.FRAMEBUFFER,Pe,ge,j,0);else throw new Error("Unknown depthTexture format")}function ye(w){const m=i.get(w),U=w.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),Z){const re=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,Z.removeEventListener("dispose",re)};Z.addEventListener("dispose",re),m.__depthDisposeCallback=re}m.__boundDepthTexture=Z}if(w.depthTexture&&!m.__autoAllocateDepthBuffer)if(U)for(let Z=0;Z<6;Z++)Re(m.__webglFramebuffer[Z],w,Z);else{const Z=w.texture.mipmaps;Z&&Z.length>0?Re(m.__webglFramebuffer[0],w,0):Re(m.__webglFramebuffer,w,0)}else if(U){m.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[Z]),m.__webglDepthbuffer[Z]===void 0)m.__webglDepthbuffer[Z]=e.createRenderbuffer(),Me(m.__webglDepthbuffer[Z],w,!1);else{const re=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,j=m.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,j),e.framebufferRenderbuffer(e.FRAMEBUFFER,re,e.RENDERBUFFER,j)}}else{const Z=w.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=e.createRenderbuffer(),Me(m.__webglDepthbuffer,w,!1);else{const re=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,j=m.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,j),e.framebufferRenderbuffer(e.FRAMEBUFFER,re,e.RENDERBUFFER,j)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function qe(w,m,U){const Z=i.get(w);m!==void 0&&se(Z.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&ye(w)}function ke(w){const m=w.texture,U=i.get(w),Z=i.get(m);w.addEventListener("dispose",L);const re=w.textures,j=w.isWebGLCubeRenderTarget===!0,Ee=re.length>1;if(Ee||(Z.__webglTexture===void 0&&(Z.__webglTexture=e.createTexture()),Z.__version=m.version,a.memory.textures++),j){U.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(m.mipmaps&&m.mipmaps.length>0){U.__webglFramebuffer[ge]=[];for(let Pe=0;Pe<m.mipmaps.length;Pe++)U.__webglFramebuffer[ge][Pe]=e.createFramebuffer()}else U.__webglFramebuffer[ge]=e.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){U.__webglFramebuffer=[];for(let ge=0;ge<m.mipmaps.length;ge++)U.__webglFramebuffer[ge]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(Ee)for(let ge=0,Pe=re.length;ge<Pe;ge++){const Fe=i.get(re[ge]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=e.createTexture(),a.memory.textures++)}if(w.samples>0&&V(w)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ge=0;ge<re.length;ge++){const Pe=re[ge];U.__webglColorRenderbuffer[ge]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[ge]);const Fe=r.convert(Pe.format,Pe.colorSpace),le=r.convert(Pe.type),pe=T(Pe.internalFormat,Fe,le,Pe.colorSpace,w.isXRRenderTarget===!0),De=h(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,De,pe,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,U.__webglColorRenderbuffer[ge])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),Me(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(j){t.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),G(e.TEXTURE_CUBE_MAP,m);for(let ge=0;ge<6;ge++)if(m.mipmaps&&m.mipmaps.length>0)for(let Pe=0;Pe<m.mipmaps.length;Pe++)se(U.__webglFramebuffer[ge][Pe],w,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe);else se(U.__webglFramebuffer[ge],w,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);c(m)&&o(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ge=0,Pe=re.length;ge<Pe;ge++){const Fe=re[ge],le=i.get(Fe);let pe=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pe=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(pe,le.__webglTexture),G(pe,Fe),se(U.__webglFramebuffer,w,Fe,e.COLOR_ATTACHMENT0+ge,pe,0),c(Fe)&&o(pe)}t.unbindTexture()}else{let ge=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ge=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ge,Z.__webglTexture),G(ge,m),m.mipmaps&&m.mipmaps.length>0)for(let Pe=0;Pe<m.mipmaps.length;Pe++)se(U.__webglFramebuffer[Pe],w,m,e.COLOR_ATTACHMENT0,ge,Pe);else se(U.__webglFramebuffer,w,m,e.COLOR_ATTACHMENT0,ge,0);c(m)&&o(ge),t.unbindTexture()}w.depthBuffer&&ye(w)}function p(w){const m=w.textures;for(let U=0,Z=m.length;U<Z;U++){const re=m[U];if(c(re)){const j=v(w),Ee=i.get(re).__webglTexture;t.bindTexture(j,Ee),o(j),t.unbindTexture()}}}const ee=[],q=[];function I(w){if(w.samples>0){if(V(w)===!1){const m=w.textures,U=w.width,Z=w.height;let re=e.COLOR_BUFFER_BIT;const j=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ee=i.get(w),ge=m.length>1;if(ge)for(let Fe=0;Fe<m.length;Fe++)t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Fe,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Fe,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Pe=w.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Fe=0;Fe<m.length;Fe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(re|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(re|=e.STENCIL_BUFFER_BIT)),ge){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ee.__webglColorRenderbuffer[Fe]);const le=i.get(m[Fe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,le,0)}e.blitFramebuffer(0,0,U,Z,0,0,U,Z,re,e.NEAREST),g===!0&&(ee.length=0,q.length=0,ee.push(e.COLOR_ATTACHMENT0+Fe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ee.push(j),q.push(j),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,q)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ge)for(let Fe=0;Fe<m.length;Fe++){t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Fe,e.RENDERBUFFER,Ee.__webglColorRenderbuffer[Fe]);const le=i.get(m[Fe]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Fe,e.TEXTURE_2D,le,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&g){const m=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[m])}}}function h(w){return Math.min(s.maxSamples,w.samples)}function V(w){const m=i.get(w);return w.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function ie(w){const m=a.render.frame;M.get(w)!==m&&(M.set(w,m),w.update())}function ae(w,m){const U=w.colorSpace,Z=w.format,re=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==ti&&U!==rn&&(lt.getTransfer(U)===nt?(Z!==It||re!==yt)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",U)),m}function k(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(E.width=w.naturalWidth||w.width,E.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(E.width=w.displayWidth,E.height=w.displayHeight):(E.width=w.width,E.height=w.height),E}this.allocateTextureUnit=N,this.resetTextureUnits=C,this.setTexture2D=B,this.setTexture2DArray=X,this.setTexture3D=O,this.setTextureCube=Q,this.rebindTextures=qe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=p,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=se,this.useMultisampledRTT=V,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Nd(e,n){function t(i,s=rn){let r;const a=lt.getTransfer(s);if(i===yt)return e.UNSIGNED_BYTE;if(i===La)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Ua)return e.UNSIGNED_SHORT_5_5_5_1;if(i===us)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===ds)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===hs)return e.BYTE;if(i===ps)return e.SHORT;if(i===Kn)return e.UNSIGNED_SHORT;if(i===Na)return e.INT;if(i===Qt)return e.UNSIGNED_INT;if(i===Vt)return e.FLOAT;if(i===Xt)return e.HALF_FLOAT;if(i===ms)return e.ALPHA;if(i===_s)return e.RGB;if(i===It)return e.RGBA;if(i===un)return e.DEPTH_COMPONENT;if(i===on)return e.DEPTH_STENCIL;if(i===gs)return e.RED;if(i===Da)return e.RED_INTEGER;if(i===An)return e.RG;if(i===Pa)return e.RG_INTEGER;if(i===Ca)return e.RGBA_INTEGER;if(i===ci||i===fi||i===ui||i===di)if(a===nt)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ci)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ui)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===di)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ci)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ui)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===di)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ir||i===rr||i===ar||i===or)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ir)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ar)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===or)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sr||i===lr||i===cr||i===fr||i===ur||i===dr||i===hr)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===sr||i===lr)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===cr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===fr)return r.COMPRESSED_R11_EAC;if(i===ur)return r.COMPRESSED_SIGNED_R11_EAC;if(i===dr)return r.COMPRESSED_RG11_EAC;if(i===hr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===pr||i===mr||i===_r||i===gr||i===vr||i===Sr||i===Er||i===xr||i===br||i===Mr||i===Tr||i===Ar||i===wr||i===Rr)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===pr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_r)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Er)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===br)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ar)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yr||i===Cr||i===Pr)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===yr)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dr||i===Lr||i===Ur||i===Ir)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===Dr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Lr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ir)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Od=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fd=`
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

}`;class Bd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Ia(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Bt({vertexShader:Od,fragmentShader:Fd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new ki(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kd extends Do{constructor(n,t){super();const i=this;let s=null,r=1,a=null,l="local-floor",g=1,E=null,M=null,x=null,d=null,f=null,S=null;const _=typeof XRWebGLBinding<"u",c=new Bd,o={},v=t.getContextAttributes();let T=null,R=null;const P=[],D=[],L=new rt;let b=null;const A=new kn;A.viewport=new vt;const Y=new kn;Y.viewport=new vt;const F=[A,Y],C=new Lo;let N=null,u=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ue=P[ne];return ue===void 0&&(ue=new si,P[ne]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ne){let ue=P[ne];return ue===void 0&&(ue=new si,P[ne]=ue),ue.getGripSpace()},this.getHand=function(ne){let ue=P[ne];return ue===void 0&&(ue=new si,P[ne]=ue),ue.getHandSpace()};function B(ne){const ue=D.indexOf(ne.inputSource);if(ue===-1)return;const se=P[ue];se!==void 0&&(se.update(ne.inputSource,ne.frame,E||a),se.dispatchEvent({type:ne.type,data:ne.inputSource}))}function X(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",O);for(let ne=0;ne<P.length;ne++){const ue=D[ne];ue!==null&&(D[ne]=null,P[ne].disconnect(ue))}N=null,u=null,c.reset();for(const ne in o)delete o[ne];n.setRenderTarget(T),f=null,d=null,x=null,s=null,R=null,fe.stop(),i.isPresenting=!1,n.setPixelRatio(b),n.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){l=ne,i.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return E||a},this.setReferenceSpace=function(ne){E=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return x===null&&_&&(x=new XRWebGLBinding(s,t)),x},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(T=n.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",X),s.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=n.getPixelRatio(),n.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Me=null,Re=null;v.depth&&(Re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=v.stencil?on:un,Me=v.stencil?Tn:Qt);const ye={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};x=this.getBinding(),d=x.createProjectionLayer(ye),s.updateRenderState({layers:[d]}),n.setPixelRatio(1),n.setSize(d.textureWidth,d.textureHeight,!1),R=new Pt(d.textureWidth,d.textureHeight,{format:It,type:yt,depthTexture:new Yn(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:v.stencil,colorSpace:n.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),n.setPixelRatio(1),n.setSize(f.framebufferWidth,f.framebufferHeight,!1),R=new Pt(f.framebufferWidth,f.framebufferHeight,{format:It,type:yt,colorSpace:n.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(g),E=null,a=await s.requestReferenceSpace(l),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function O(ne){for(let ue=0;ue<ne.removed.length;ue++){const se=ne.removed[ue],Me=D.indexOf(se);Me>=0&&(D[Me]=null,P[Me].disconnect(se))}for(let ue=0;ue<ne.added.length;ue++){const se=ne.added[ue];let Me=D.indexOf(se);if(Me===-1){for(let ye=0;ye<P.length;ye++)if(ye>=D.length){D.push(se),Me=ye;break}else if(D[ye]===null){D[ye]=se,Me=ye;break}if(Me===-1)break}const Re=P[Me];Re&&Re.connect(se)}}const Q=new Be,W=new Be;function ce(ne,ue,se){Q.setFromMatrixPosition(ue.matrixWorld),W.setFromMatrixPosition(se.matrixWorld);const Me=Q.distanceTo(W),Re=ue.projectionMatrix.elements,ye=se.projectionMatrix.elements,qe=Re[14]/(Re[10]-1),ke=Re[14]/(Re[10]+1),p=(Re[9]+1)/Re[5],ee=(Re[9]-1)/Re[5],q=(Re[8]-1)/Re[0],I=(ye[8]+1)/ye[0],h=qe*q,V=qe*I,ie=Me/(-q+I),ae=ie*-q;if(ue.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ae),ne.translateZ(ie),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Re[10]===-1)ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const k=qe+ie,w=ke+ie,m=h-ae,U=V+(Me-ae),Z=p*ke/w*k,re=ee*ke/w*k;ne.projectionMatrix.makePerspective(m,U,Z,re,k,w),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function H(ne,ue){ue===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ue.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ue=ne.near,se=ne.far;c.texture!==null&&(c.depthNear>0&&(ue=c.depthNear),c.depthFar>0&&(se=c.depthFar)),C.near=Y.near=A.near=ue,C.far=Y.far=A.far=se,(N!==C.near||u!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),N=C.near,u=C.far),C.layers.mask=ne.layers.mask|6,A.layers.mask=C.layers.mask&-5,Y.layers.mask=C.layers.mask&-3;const Me=ne.parent,Re=C.cameras;H(C,Me);for(let ye=0;ye<Re.length;ye++)H(Re[ye],Me);Re.length===2?ce(C,A,Y):C.projectionMatrix.copy(A.projectionMatrix),G(ne,C,Me)};function G(ne,ue,se){se===null?ne.matrix.copy(ue.matrixWorld):(ne.matrix.copy(se.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ue.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Uo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&f===null))return g},this.setFoveation=function(ne){g=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(C)},this.getCameraTexture=function(ne){return o[ne]};let he=null;function me(ne,ue){if(M=ue.getViewerPose(E||a),S=ue,M!==null){const se=M.views;f!==null&&(n.setRenderTargetFramebuffer(R,f.framebuffer),n.setRenderTarget(R));let Me=!1;se.length!==C.cameras.length&&(C.cameras.length=0,Me=!0);for(let ke=0;ke<se.length;ke++){const p=se[ke];let ee=null;if(f!==null)ee=f.getViewport(p);else{const I=x.getViewSubImage(d,p);ee=I.viewport,ke===0&&(n.setRenderTargetTextures(R,I.colorTexture,I.depthStencilTexture),n.setRenderTarget(R))}let q=F[ke];q===void 0&&(q=new kn,q.layers.enable(ke),q.viewport=new vt,F[ke]=q),q.matrix.fromArray(p.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(p.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(ee.x,ee.y,ee.width,ee.height),ke===0&&(C.matrix.copy(q.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Me===!0&&C.cameras.push(q)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){x=i.getBinding();const ke=x.getDepthInformation(se[0]);ke&&ke.isValid&&ke.texture&&c.init(ke,s.renderState)}if(Re&&Re.includes("camera-access")&&_){n.state.unbindTexture(),x=i.getBinding();for(let ke=0;ke<se.length;ke++){const p=se[ke].camera;if(p){let ee=o[p];ee||(ee=new Ia,o[p]=ee);const q=x.getCameraImage(p);ee.sourceTexture=q}}}}for(let se=0;se<P.length;se++){const Me=D[se],Re=P[se];Me!==null&&Re!==void 0&&Re.update(Me,ue,E||a)}he&&he(ne,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),S=null}const fe=new Za;fe.setAnimationLoop(me),this.setAnimationLoop=function(ne){he=ne},this.dispose=function(){}}}const Zt=new Hi,Gd=new fn;function Hd(e,n){function t(c,o){c.matrixAutoUpdate===!0&&c.updateMatrix(),o.value.copy(c.matrix)}function i(c,o){o.color.getRGB(c.fogColor.value,Fa(e)),o.isFog?(c.fogNear.value=o.near,c.fogFar.value=o.far):o.isFogExp2&&(c.fogDensity.value=o.density)}function s(c,o,v,T,R){o.isMeshBasicMaterial?r(c,o):o.isMeshLambertMaterial?(r(c,o),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)):o.isMeshToonMaterial?(r(c,o),x(c,o)):o.isMeshPhongMaterial?(r(c,o),M(c,o),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)):o.isMeshStandardMaterial?(r(c,o),d(c,o),o.isMeshPhysicalMaterial&&f(c,o,R)):o.isMeshMatcapMaterial?(r(c,o),S(c,o)):o.isMeshDepthMaterial?r(c,o):o.isMeshDistanceMaterial?(r(c,o),_(c,o)):o.isMeshNormalMaterial?r(c,o):o.isLineBasicMaterial?(a(c,o),o.isLineDashedMaterial&&l(c,o)):o.isPointsMaterial?g(c,o,v,T):o.isSpriteMaterial?E(c,o):o.isShadowMaterial?(c.color.value.copy(o.color),c.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}function r(c,o){c.opacity.value=o.opacity,o.color&&c.diffuse.value.copy(o.color),o.emissive&&c.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(c.map.value=o.map,t(o.map,c.mapTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.bumpMap&&(c.bumpMap.value=o.bumpMap,t(o.bumpMap,c.bumpMapTransform),c.bumpScale.value=o.bumpScale,o.side===xt&&(c.bumpScale.value*=-1)),o.normalMap&&(c.normalMap.value=o.normalMap,t(o.normalMap,c.normalMapTransform),c.normalScale.value.copy(o.normalScale),o.side===xt&&c.normalScale.value.negate()),o.displacementMap&&(c.displacementMap.value=o.displacementMap,t(o.displacementMap,c.displacementMapTransform),c.displacementScale.value=o.displacementScale,c.displacementBias.value=o.displacementBias),o.emissiveMap&&(c.emissiveMap.value=o.emissiveMap,t(o.emissiveMap,c.emissiveMapTransform)),o.specularMap&&(c.specularMap.value=o.specularMap,t(o.specularMap,c.specularMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest);const v=n.get(o),T=v.envMap,R=v.envMapRotation;T&&(c.envMap.value=T,Zt.copy(R),Zt.x*=-1,Zt.y*=-1,Zt.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Zt.y*=-1,Zt.z*=-1),c.envMapRotation.value.setFromMatrix4(Gd.makeRotationFromEuler(Zt)),c.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=o.reflectivity,c.ior.value=o.ior,c.refractionRatio.value=o.refractionRatio),o.lightMap&&(c.lightMap.value=o.lightMap,c.lightMapIntensity.value=o.lightMapIntensity,t(o.lightMap,c.lightMapTransform)),o.aoMap&&(c.aoMap.value=o.aoMap,c.aoMapIntensity.value=o.aoMapIntensity,t(o.aoMap,c.aoMapTransform))}function a(c,o){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,o.map&&(c.map.value=o.map,t(o.map,c.mapTransform))}function l(c,o){c.dashSize.value=o.dashSize,c.totalSize.value=o.dashSize+o.gapSize,c.scale.value=o.scale}function g(c,o,v,T){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,c.size.value=o.size*v,c.scale.value=T*.5,o.map&&(c.map.value=o.map,t(o.map,c.uvTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest)}function E(c,o){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,c.rotation.value=o.rotation,o.map&&(c.map.value=o.map,t(o.map,c.mapTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest)}function M(c,o){c.specular.value.copy(o.specular),c.shininess.value=Math.max(o.shininess,1e-4)}function x(c,o){o.gradientMap&&(c.gradientMap.value=o.gradientMap)}function d(c,o){c.metalness.value=o.metalness,o.metalnessMap&&(c.metalnessMap.value=o.metalnessMap,t(o.metalnessMap,c.metalnessMapTransform)),c.roughness.value=o.roughness,o.roughnessMap&&(c.roughnessMap.value=o.roughnessMap,t(o.roughnessMap,c.roughnessMapTransform)),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)}function f(c,o,v){c.ior.value=o.ior,o.sheen>0&&(c.sheenColor.value.copy(o.sheenColor).multiplyScalar(o.sheen),c.sheenRoughness.value=o.sheenRoughness,o.sheenColorMap&&(c.sheenColorMap.value=o.sheenColorMap,t(o.sheenColorMap,c.sheenColorMapTransform)),o.sheenRoughnessMap&&(c.sheenRoughnessMap.value=o.sheenRoughnessMap,t(o.sheenRoughnessMap,c.sheenRoughnessMapTransform))),o.clearcoat>0&&(c.clearcoat.value=o.clearcoat,c.clearcoatRoughness.value=o.clearcoatRoughness,o.clearcoatMap&&(c.clearcoatMap.value=o.clearcoatMap,t(o.clearcoatMap,c.clearcoatMapTransform)),o.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=o.clearcoatRoughnessMap,t(o.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),o.clearcoatNormalMap&&(c.clearcoatNormalMap.value=o.clearcoatNormalMap,t(o.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(o.clearcoatNormalScale),o.side===xt&&c.clearcoatNormalScale.value.negate())),o.dispersion>0&&(c.dispersion.value=o.dispersion),o.iridescence>0&&(c.iridescence.value=o.iridescence,c.iridescenceIOR.value=o.iridescenceIOR,c.iridescenceThicknessMinimum.value=o.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=o.iridescenceThicknessRange[1],o.iridescenceMap&&(c.iridescenceMap.value=o.iridescenceMap,t(o.iridescenceMap,c.iridescenceMapTransform)),o.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=o.iridescenceThicknessMap,t(o.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),o.transmission>0&&(c.transmission.value=o.transmission,c.transmissionSamplerMap.value=v.texture,c.transmissionSamplerSize.value.set(v.width,v.height),o.transmissionMap&&(c.transmissionMap.value=o.transmissionMap,t(o.transmissionMap,c.transmissionMapTransform)),c.thickness.value=o.thickness,o.thicknessMap&&(c.thicknessMap.value=o.thicknessMap,t(o.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=o.attenuationDistance,c.attenuationColor.value.copy(o.attenuationColor)),o.anisotropy>0&&(c.anisotropyVector.value.set(o.anisotropy*Math.cos(o.anisotropyRotation),o.anisotropy*Math.sin(o.anisotropyRotation)),o.anisotropyMap&&(c.anisotropyMap.value=o.anisotropyMap,t(o.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=o.specularIntensity,c.specularColor.value.copy(o.specularColor),o.specularColorMap&&(c.specularColorMap.value=o.specularColorMap,t(o.specularColorMap,c.specularColorMapTransform)),o.specularIntensityMap&&(c.specularIntensityMap.value=o.specularIntensityMap,t(o.specularIntensityMap,c.specularIntensityMapTransform))}function S(c,o){o.matcap&&(c.matcap.value=o.matcap)}function _(c,o){const v=n.get(o).light;c.referencePosition.value.setFromMatrixPosition(v.matrixWorld),c.nearDistance.value=v.shadow.camera.near,c.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vd(e,n,t,i){let s={},r={},a=[];const l=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function g(v,T){const R=T.program;i.uniformBlockBinding(v,R)}function E(v,T){let R=s[v.id];R===void 0&&(S(v),R=M(v),s[v.id]=R,v.addEventListener("dispose",c));const P=T.program;i.updateUBOMapping(v,P);const D=n.render.frame;r[v.id]!==D&&(d(v),r[v.id]=D)}function M(v){const T=x();v.__bindingPointIndex=T;const R=e.createBuffer(),P=v.__size,D=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,R),e.bufferData(e.UNIFORM_BUFFER,P,D),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,R),R}function x(){for(let v=0;v<l;v++)if(a.indexOf(v)===-1)return a.push(v),v;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const T=s[v.id],R=v.uniforms,P=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let D=0,L=R.length;D<L;D++){const b=Array.isArray(R[D])?R[D]:[R[D]];for(let A=0,Y=b.length;A<Y;A++){const F=b[A];if(f(F,D,A,P)===!0){const C=F.__offset,N=Array.isArray(F.value)?F.value:[F.value];let u=0;for(let B=0;B<N.length;B++){const X=N[B],O=_(X);typeof X=="number"||typeof X=="boolean"?(F.__data[0]=X,e.bufferSubData(e.UNIFORM_BUFFER,C+u,F.__data)):X.isMatrix3?(F.__data[0]=X.elements[0],F.__data[1]=X.elements[1],F.__data[2]=X.elements[2],F.__data[3]=0,F.__data[4]=X.elements[3],F.__data[5]=X.elements[4],F.__data[6]=X.elements[5],F.__data[7]=0,F.__data[8]=X.elements[6],F.__data[9]=X.elements[7],F.__data[10]=X.elements[8],F.__data[11]=0):(X.toArray(F.__data,u),u+=O.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,C,F.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(v,T,R,P){const D=v.value,L=T+"_"+R;if(P[L]===void 0)return typeof D=="number"||typeof D=="boolean"?P[L]=D:P[L]=D.clone(),!0;{const b=P[L];if(typeof D=="number"||typeof D=="boolean"){if(b!==D)return P[L]=D,!0}else if(b.equals(D)===!1)return b.copy(D),!0}return!1}function S(v){const T=v.uniforms;let R=0;const P=16;for(let L=0,b=T.length;L<b;L++){const A=Array.isArray(T[L])?T[L]:[T[L]];for(let Y=0,F=A.length;Y<F;Y++){const C=A[Y],N=Array.isArray(C.value)?C.value:[C.value];for(let u=0,B=N.length;u<B;u++){const X=N[u],O=_(X),Q=R%P,W=Q%O.boundary,ce=Q+W;R+=W,ce!==0&&P-ce<O.storage&&(R+=P-ce),C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=R,R+=O.storage}}}const D=R%P;return D>0&&(R+=P-D),v.__size=R,v.__cache={},this}function _(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):et("WebGLRenderer: Unsupported uniform value type.",v),T}function c(v){const T=v.target;T.removeEventListener("dispose",c);const R=a.indexOf(T.__bindingPointIndex);a.splice(R,1),e.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function o(){for(const v in s)e.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:g,update:E,dispose:o}}const zd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wt=null;function Wd(){return wt===null&&(wt=new Io(zd,16,16,An,Xt),wt.name="DFG_LUT",wt.minFilter=Et,wt.magFilter=Et,wt.wrapS=wi,wt.wrapT=wi,wt.generateMipmaps=!1,wt.needsUpdate=!0),wt}class Xd{constructor(n={}){const{canvas:t=Ro(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:E=!1,powerPreference:M="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:d=!1,outputBufferType:f=yt}=n;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=a;const _=f,c=new Set([Ca,Pa,Da]),o=new Set([yt,Qt,Kn,Tn,La,Ua]),v=new Uint32Array(4),T=new Int32Array(4);let R=null,P=null;const D=[],L=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ct,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let Y=!1;this._outputColorSpace=Aa;let F=0,C=0,N=null,u=-1,B=null;const X=new vt,O=new vt;let Q=null;const W=new at(0);let ce=0,H=t.width,G=t.height,he=1,me=null,fe=null;const ne=new vt(0,0,H,G),ue=new vt(0,0,H,G);let se=!1;const Me=new wa;let Re=!1,ye=!1;const qe=new fn,ke=new Be,p=new vt,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let q=!1;function I(){return N===null?he:1}let h=i;function V(y,K){return t.getContext(y,K)}try{const y={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:g,preserveDrawingBuffer:E,powerPreference:M,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yo}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",tt,!1),h===null){const K="webgl2";if(h=V(K,y),h===null)throw V(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw it("WebGLRenderer: "+y.message),y}let ie,ae,k,w,m,U,Z,re,j,Ee,ge,Pe,Fe,le,pe,De,we,Te,Ve,z,ve,_e,Ae;function de(){ie=new Xf(h),ie.init(),ve=new Nd(h,ie),ae=new Ff(h,ie,n,ve),k=new Ud(h,ie),ae.reversedDepthBuffer&&d&&k.buffers.depth.setReversed(!0),w=new qf(h),m=new Sd,U=new Id(h,ie,k,m,ae,ve,w),Z=new Wf(A),re=new Qs(h),_e=new Nf(h,re),j=new Yf(h,re,w,_e),Ee=new jf(h,j,re,_e,w),Te=new Zf(h,ae,U),pe=new Bf(m),ge=new vd(A,Z,ie,ae,_e,pe),Pe=new Hd(A,m),Fe=new xd,le=new Rd(ie),we=new If(A,Z,k,Ee,S,g),De=new Ld(A,Ee,ae),Ae=new Vd(h,w,ae,k),Ve=new Of(h,ie,w),z=new Kf(h,ie,w),w.programs=ge.programs,A.capabilities=ae,A.extensions=ie,A.properties=m,A.renderLists=Fe,A.shadowMap=De,A.state=k,A.info=w}de(),_!==yt&&(b=new Qf(_,t.width,t.height,s,r));const oe=new kd(A,h);this.xr=oe,this.getContext=function(){return h},this.getContextAttributes=function(){return h.getContextAttributes()},this.forceContextLoss=function(){const y=ie.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ie.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(y){y!==void 0&&(he=y,this.setSize(H,G,!1))},this.getSize=function(y){return y.set(H,G)},this.setSize=function(y,K,te=!0){if(oe.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}H=y,G=K,t.width=Math.floor(y*he),t.height=Math.floor(K*he),te===!0&&(t.style.width=y+"px",t.style.height=K+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,y,K)},this.getDrawingBufferSize=function(y){return y.set(H*he,G*he).floor()},this.setDrawingBufferSize=function(y,K,te){H=y,G=K,he=te,t.width=Math.floor(y*te),t.height=Math.floor(K*te),this.setViewport(0,0,y,K)},this.setEffects=function(y){if(_===yt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let K=0;K<y.length;K++)if(y[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(X)},this.getViewport=function(y){return y.copy(ne)},this.setViewport=function(y,K,te,J){y.isVector4?ne.set(y.x,y.y,y.z,y.w):ne.set(y,K,te,J),k.viewport(X.copy(ne).multiplyScalar(he).round())},this.getScissor=function(y){return y.copy(ue)},this.setScissor=function(y,K,te,J){y.isVector4?ue.set(y.x,y.y,y.z,y.w):ue.set(y,K,te,J),k.scissor(O.copy(ue).multiplyScalar(he).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(y){k.setScissorTest(se=y)},this.setOpaqueSort=function(y){me=y},this.setTransparentSort=function(y){fe=y},this.getClearColor=function(y){return y.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(y=!0,K=!0,te=!0){let J=0;if(y){let $=!1;if(N!==null){const xe=N.texture.format;$=c.has(xe)}if($){const xe=N.texture.type,Ce=o.has(xe),be=we.getClearColor(),Ue=we.getClearAlpha(),Ne=be.r,He=be.g,We=be.b;Ce?(v[0]=Ne,v[1]=He,v[2]=We,v[3]=Ue,h.clearBufferuiv(h.COLOR,0,v)):(T[0]=Ne,T[1]=He,T[2]=We,T[3]=Ue,h.clearBufferiv(h.COLOR,0,T))}else J|=h.COLOR_BUFFER_BIT}K&&(J|=h.DEPTH_BUFFER_BIT),te&&(J|=h.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&h.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),we.dispose(),Fe.dispose(),le.dispose(),m.dispose(),Z.dispose(),Ee.dispose(),_e.dispose(),Ae.dispose(),ge.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Yi),oe.removeEventListener("sessionend",Ki),Yt.stop()};function Le(y){y.preventDefault(),er("WebGLRenderer: Context Lost."),Y=!0}function Ge(){er("WebGLRenderer: Context Restored."),Y=!1;const y=w.autoReset,K=De.enabled,te=De.autoUpdate,J=De.needsUpdate,$=De.type;de(),w.autoReset=y,De.enabled=K,De.autoUpdate=te,De.needsUpdate=J,De.type=$}function tt(y){it("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ze(y){const K=y.target;K.removeEventListener("dispose",Ze),Dt(K)}function Dt(y){Lt(y),m.remove(y)}function Lt(y){const K=m.get(y).programs;K!==void 0&&(K.forEach(function(te){ge.releaseProgram(te)}),y.isShaderMaterial&&ge.releaseShaderCache(y))}this.renderBufferDirect=function(y,K,te,J,$,xe){K===null&&(K=ee);const Ce=$.isMesh&&$.matrixWorld.determinant()<0,be=xo(y,K,te,J,$);k.setMaterial(J,Ce);let Ue=te.index,Ne=1;if(J.wireframe===!0){if(Ue=j.getWireframeAttribute(te),Ue===void 0)return;Ne=2}const He=te.drawRange,We=te.attributes.position;let Oe=He.start*Ne,je=(He.start+He.count)*Ne;xe!==null&&(Oe=Math.max(Oe,xe.start*Ne),je=Math.min(je,(xe.start+xe.count)*Ne)),Ue!==null?(Oe=Math.max(Oe,0),je=Math.min(je,Ue.count)):We!=null&&(Oe=Math.max(Oe,0),je=Math.min(je,We.count));const st=je-Oe;if(st<0||st===1/0)return;_e.setup($,J,be,te,Ue);let ot,$e=Ve;if(Ue!==null&&(ot=re.get(Ue),$e=z,$e.setIndex(ot)),$.isMesh)J.wireframe===!0?(k.setLineWidth(J.wireframeLinewidth*I()),$e.setMode(h.LINES)):$e.setMode(h.TRIANGLES);else if($.isLine){let pt=J.linewidth;pt===void 0&&(pt=1),k.setLineWidth(pt*I()),$.isLineSegments?$e.setMode(h.LINES):$.isLineLoop?$e.setMode(h.LINE_LOOP):$e.setMode(h.LINE_STRIP)}else $.isPoints?$e.setMode(h.POINTS):$.isSprite&&$e.setMode(h.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Ra("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))$e.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const pt=$._multiDrawStarts,Ie=$._multiDrawCounts,St=$._multiDrawCount,Xe=Ue?re.get(Ue).bytesPerElement:1,Mt=m.get(J).currentProgram.getUniforms();for(let At=0;At<St;At++)Mt.setValue(h,"_gl_DrawID",At),$e.render(pt[At]/Xe,Ie[At])}else if($.isInstancedMesh)$e.renderInstances(Oe,st,$.count);else if(te.isInstancedBufferGeometry){const pt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ie=Math.min(te.instanceCount,pt);$e.renderInstances(Oe,st,Ie)}else $e.render(Oe,st)};function Xi(y,K,te){y.transparent===!0&&y.side===Ut&&y.forceSinglePass===!1?(y.side=xt,y.needsUpdate=!0,Dn(y,K,te),y.side=Mn,y.needsUpdate=!0,Dn(y,K,te),y.side=Ut):Dn(y,K,te)}this.compile=function(y,K,te=null){te===null&&(te=y),P=le.get(te),P.init(K),L.push(P),te.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),y!==te&&y.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),P.setupLights();const J=new Set;return y.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const xe=$.material;if(xe)if(Array.isArray(xe))for(let Ce=0;Ce<xe.length;Ce++){const be=xe[Ce];Xi(be,te,$),J.add(be)}else Xi(xe,te,$),J.add(xe)}),P=L.pop(),J},this.compileAsync=function(y,K,te=null){const J=this.compile(y,K,te);return new Promise($=>{function xe(){if(J.forEach(function(Ce){m.get(Ce).currentProgram.isReady()&&J.delete(Ce)}),J.size===0){$(y);return}setTimeout(xe,10)}ie.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ai=null;function Eo(y){ai&&ai(y)}function Yi(){Yt.stop()}function Ki(){Yt.start()}const Yt=new Za;Yt.setAnimationLoop(Eo),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(y){ai=y,oe.setAnimationLoop(y),y===null?Yt.stop():Yt.start()},oe.addEventListener("sessionstart",Yi),oe.addEventListener("sessionend",Ki),this.render=function(y,K){if(K!==void 0&&K.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;const te=oe.enabled===!0&&oe.isPresenting===!0,J=b!==null&&(N===null||te)&&b.begin(A,N);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(K),K=oe.getCamera()),y.isScene===!0&&y.onBeforeRender(A,y,K,N),P=le.get(y,L.length),P.init(K),L.push(P),qe.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Me.setFromProjectionMatrix(qe,tr,K.reversedDepth),ye=this.localClippingEnabled,Re=pe.init(this.clippingPlanes,ye),R=Fe.get(y,D.length),R.init(),D.push(R),oe.enabled===!0&&oe.isPresenting===!0){const Ce=A.xr.getDepthSensingMesh();Ce!==null&&oi(Ce,K,-1/0,A.sortObjects)}oi(y,K,0,A.sortObjects),R.finish(),A.sortObjects===!0&&R.sort(me,fe),q=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,q&&we.addToRenderList(R,y),this.info.render.frame++,Re===!0&&pe.beginShadows();const $=P.state.shadowsArray;if(De.render($,y,K),Re===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&b.hasRenderPass())===!1){const Ce=R.opaque,be=R.transmissive;if(P.setupLights(),K.isArrayCamera){const Ue=K.cameras;if(be.length>0)for(let Ne=0,He=Ue.length;Ne<He;Ne++){const We=Ue[Ne];Zi(Ce,be,y,We)}q&&we.render(y);for(let Ne=0,He=Ue.length;Ne<He;Ne++){const We=Ue[Ne];qi(R,y,We,We.viewport)}}else be.length>0&&Zi(Ce,be,y,K),q&&we.render(y),qi(R,y,K)}N!==null&&C===0&&(U.updateMultisampleRenderTarget(N),U.updateRenderTargetMipmap(N)),J&&b.end(A),y.isScene===!0&&y.onAfterRender(A,y,K),_e.resetDefaultState(),u=-1,B=null,L.pop(),L.length>0?(P=L[L.length-1],Re===!0&&pe.setGlobalState(A.clippingPlanes,P.state.camera)):P=null,D.pop(),D.length>0?R=D[D.length-1]:R=null};function oi(y,K,te,J){if(y.visible===!1)return;if(y.layers.test(K.layers)){if(y.isGroup)te=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(K);else if(y.isLight)P.pushLight(y),y.castShadow&&P.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Me.intersectsSprite(y)){J&&p.setFromMatrixPosition(y.matrixWorld).applyMatrix4(qe);const Ce=Ee.update(y),be=y.material;be.visible&&R.push(y,Ce,be,te,p.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Me.intersectsObject(y))){const Ce=Ee.update(y),be=y.material;if(J&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),p.copy(y.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),p.copy(Ce.boundingSphere.center)),p.applyMatrix4(y.matrixWorld).applyMatrix4(qe)),Array.isArray(be)){const Ue=Ce.groups;for(let Ne=0,He=Ue.length;Ne<He;Ne++){const We=Ue[Ne],Oe=be[We.materialIndex];Oe&&Oe.visible&&R.push(y,Ce,Oe,te,p.z,We)}}else be.visible&&R.push(y,Ce,be,te,p.z,null)}}const xe=y.children;for(let Ce=0,be=xe.length;Ce<be;Ce++)oi(xe[Ce],K,te,J)}function qi(y,K,te,J){const{opaque:$,transmissive:xe,transparent:Ce}=y;P.setupLightsView(te),Re===!0&&pe.setGlobalState(A.clippingPlanes,te),J&&k.viewport(X.copy(J)),$.length>0&&Pn($,K,te),xe.length>0&&Pn(xe,K,te),Ce.length>0&&Pn(Ce,K,te),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Zi(y,K,te,J){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[J.id]===void 0){const Oe=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[J.id]=new Pt(1,1,{generateMipmaps:!0,type:Oe?Xt:yt,minFilter:an,samples:Math.max(4,ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const xe=P.state.transmissionRenderTarget[J.id],Ce=J.viewport||X;xe.setSize(Ce.z*A.transmissionResolutionScale,Ce.w*A.transmissionResolutionScale);const be=A.getRenderTarget(),Ue=A.getActiveCubeFace(),Ne=A.getActiveMipmapLevel();A.setRenderTarget(xe),A.getClearColor(W),ce=A.getClearAlpha(),ce<1&&A.setClearColor(16777215,.5),A.clear(),q&&we.render(te);const He=A.toneMapping;A.toneMapping=Ct;const We=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),P.setupLightsView(J),Re===!0&&pe.setGlobalState(A.clippingPlanes,J),Pn(y,te,J),U.updateMultisampleRenderTarget(xe),U.updateRenderTargetMipmap(xe),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let je=0,st=K.length;je<st;je++){const ot=K[je],{object:$e,geometry:pt,material:Ie,group:St}=ot;if(Ie.side===Ut&&$e.layers.test(J.layers)){const Xe=Ie.side;Ie.side=xt,Ie.needsUpdate=!0,ji($e,te,J,pt,Ie,St),Ie.side=Xe,Ie.needsUpdate=!0,Oe=!0}}Oe===!0&&(U.updateMultisampleRenderTarget(xe),U.updateRenderTargetMipmap(xe))}A.setRenderTarget(be,Ue,Ne),A.setClearColor(W,ce),We!==void 0&&(J.viewport=We),A.toneMapping=He}function Pn(y,K,te){const J=K.isScene===!0?K.overrideMaterial:null;for(let $=0,xe=y.length;$<xe;$++){const Ce=y[$],{object:be,geometry:Ue,group:Ne}=Ce;let He=Ce.material;He.allowOverride===!0&&J!==null&&(He=J),be.layers.test(te.layers)&&ji(be,K,te,Ue,He,Ne)}}function ji(y,K,te,J,$,xe){y.onBeforeRender(A,K,te,J,$,xe),y.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),$.onBeforeRender(A,K,te,J,y,xe),$.transparent===!0&&$.side===Ut&&$.forceSinglePass===!1?($.side=xt,$.needsUpdate=!0,A.renderBufferDirect(te,K,J,$,y,xe),$.side=Mn,$.needsUpdate=!0,A.renderBufferDirect(te,K,J,$,y,xe),$.side=Ut):A.renderBufferDirect(te,K,J,$,y,xe),y.onAfterRender(A,K,te,J,$,xe)}function Dn(y,K,te){K.isScene!==!0&&(K=ee);const J=m.get(y),$=P.state.lights,xe=P.state.shadowsArray,Ce=$.state.version,be=ge.getParameters(y,$.state,xe,K,te),Ue=ge.getProgramCacheKey(be);let Ne=J.programs;J.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?K.environment:null,J.fog=K.fog;const He=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;J.envMap=Z.get(y.envMap||J.environment,He),J.envMapRotation=J.environment!==null&&y.envMap===null?K.environmentRotation:y.envMapRotation,Ne===void 0&&(y.addEventListener("dispose",Ze),Ne=new Map,J.programs=Ne);let We=Ne.get(Ue);if(We!==void 0){if(J.currentProgram===We&&J.lightsStateVersion===Ce)return Qi(y,be),We}else be.uniforms=ge.getUniforms(y),y.onBeforeCompile(be,A),We=ge.acquireProgram(be,Ue),Ne.set(Ue,We),J.uniforms=be.uniforms;const Oe=J.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Oe.clippingPlanes=pe.uniform),Qi(y,be),J.needsLights=Mo(y),J.lightsStateVersion=Ce,J.needsLights&&(Oe.ambientLightColor.value=$.state.ambient,Oe.lightProbe.value=$.state.probe,Oe.directionalLights.value=$.state.directional,Oe.directionalLightShadows.value=$.state.directionalShadow,Oe.spotLights.value=$.state.spot,Oe.spotLightShadows.value=$.state.spotShadow,Oe.rectAreaLights.value=$.state.rectArea,Oe.ltc_1.value=$.state.rectAreaLTC1,Oe.ltc_2.value=$.state.rectAreaLTC2,Oe.pointLights.value=$.state.point,Oe.pointLightShadows.value=$.state.pointShadow,Oe.hemisphereLights.value=$.state.hemi,Oe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Oe.spotLightMatrix.value=$.state.spotLightMatrix,Oe.spotLightMap.value=$.state.spotLightMap,Oe.pointShadowMatrix.value=$.state.pointShadowMatrix),J.currentProgram=We,J.uniformsList=null,We}function $i(y){if(y.uniformsList===null){const K=y.currentProgram.getUniforms();y.uniformsList=Vn.seqWithValue(K.seq,y.uniforms)}return y.uniformsList}function Qi(y,K){const te=m.get(y);te.outputColorSpace=K.outputColorSpace,te.batching=K.batching,te.batchingColor=K.batchingColor,te.instancing=K.instancing,te.instancingColor=K.instancingColor,te.instancingMorph=K.instancingMorph,te.skinning=K.skinning,te.morphTargets=K.morphTargets,te.morphNormals=K.morphNormals,te.morphColors=K.morphColors,te.morphTargetsCount=K.morphTargetsCount,te.numClippingPlanes=K.numClippingPlanes,te.numIntersection=K.numClipIntersection,te.vertexAlphas=K.vertexAlphas,te.vertexTangents=K.vertexTangents,te.toneMapping=K.toneMapping}function xo(y,K,te,J,$){K.isScene!==!0&&(K=ee),U.resetTextureUnits();const xe=K.fog,Ce=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?K.environment:null,be=N===null?A.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ti,Ue=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Ne=Z.get(J.envMap||Ce,Ue),He=J.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,We=!!te.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Oe=!!te.morphAttributes.position,je=!!te.morphAttributes.normal,st=!!te.morphAttributes.color;let ot=Ct;J.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ot=A.toneMapping);const $e=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,pt=$e!==void 0?$e.length:0,Ie=m.get(J),St=P.state.lights;if(Re===!0&&(ye===!0||y!==B)){const dt=y===B&&J.id===u;pe.setState(J,y,dt)}let Xe=!1;J.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==St.state.version||Ie.outputColorSpace!==be||$.isBatchedMesh&&Ie.batching===!1||!$.isBatchedMesh&&Ie.batching===!0||$.isBatchedMesh&&Ie.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ie.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ie.instancing===!1||!$.isInstancedMesh&&Ie.instancing===!0||$.isSkinnedMesh&&Ie.skinning===!1||!$.isSkinnedMesh&&Ie.skinning===!0||$.isInstancedMesh&&Ie.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ie.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ie.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ie.instancingMorph===!1&&$.morphTexture!==null||Ie.envMap!==Ne||J.fog===!0&&Ie.fog!==xe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==pe.numPlanes||Ie.numIntersection!==pe.numIntersection)||Ie.vertexAlphas!==He||Ie.vertexTangents!==We||Ie.morphTargets!==Oe||Ie.morphNormals!==je||Ie.morphColors!==st||Ie.toneMapping!==ot||Ie.morphTargetsCount!==pt)&&(Xe=!0):(Xe=!0,Ie.__version=J.version);let Mt=Ie.currentProgram;Xe===!0&&(Mt=Dn(J,K,$));let At=!1,Kt=!1,en=!1;const Je=Mt.getUniforms(),ht=Ie.uniforms;if(k.useProgram(Mt.program)&&(At=!0,Kt=!0,en=!0),J.id!==u&&(u=J.id,Kt=!0),At||B!==y){k.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Je.setValue(h,"projectionMatrix",y.projectionMatrix),Je.setValue(h,"viewMatrix",y.matrixWorldInverse);const Gt=Je.map.cameraPosition;Gt!==void 0&&Gt.setValue(h,ke.setFromMatrixPosition(y.matrixWorld)),ae.logarithmicDepthBuffer&&Je.setValue(h,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Je.setValue(h,"isOrthographic",y.isOrthographicCamera===!0),B!==y&&(B=y,Kt=!0,en=!0)}if(Ie.needsLights&&(St.state.directionalShadowMap.length>0&&Je.setValue(h,"directionalShadowMap",St.state.directionalShadowMap,U),St.state.spotShadowMap.length>0&&Je.setValue(h,"spotShadowMap",St.state.spotShadowMap,U),St.state.pointShadowMap.length>0&&Je.setValue(h,"pointShadowMap",St.state.pointShadowMap,U)),$.isSkinnedMesh){Je.setOptional(h,$,"bindMatrix"),Je.setOptional(h,$,"bindMatrixInverse");const dt=$.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),Je.setValue(h,"boneTexture",dt.boneTexture,U))}$.isBatchedMesh&&(Je.setOptional(h,$,"batchingTexture"),Je.setValue(h,"batchingTexture",$._matricesTexture,U),Je.setOptional(h,$,"batchingIdTexture"),Je.setValue(h,"batchingIdTexture",$._indirectTexture,U),Je.setOptional(h,$,"batchingColorTexture"),$._colorsTexture!==null&&Je.setValue(h,"batchingColorTexture",$._colorsTexture,U));const kt=te.morphAttributes;if((kt.position!==void 0||kt.normal!==void 0||kt.color!==void 0)&&Te.update($,te,Mt),(Kt||Ie.receiveShadow!==$.receiveShadow)&&(Ie.receiveShadow=$.receiveShadow,Je.setValue(h,"receiveShadow",$.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&K.environment!==null&&(ht.envMapIntensity.value=K.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=Wd()),Kt&&(Je.setValue(h,"toneMappingExposure",A.toneMappingExposure),Ie.needsLights&&bo(ht,en),xe&&J.fog===!0&&Pe.refreshFogUniforms(ht,xe),Pe.refreshMaterialUniforms(ht,J,he,G,P.state.transmissionRenderTarget[y.id]),Vn.upload(h,$i(Ie),ht,U)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Vn.upload(h,$i(Ie),ht,U),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Je.setValue(h,"center",$.center),Je.setValue(h,"modelViewMatrix",$.modelViewMatrix),Je.setValue(h,"normalMatrix",$.normalMatrix),Je.setValue(h,"modelMatrix",$.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const dt=J.uniformsGroups;for(let Gt=0,tn=dt.length;Gt<tn;Gt++){const Ji=dt[Gt];Ae.update(Ji,Mt),Ae.bind(Ji,Mt)}}return Mt}function bo(y,K){y.ambientLightColor.needsUpdate=K,y.lightProbe.needsUpdate=K,y.directionalLights.needsUpdate=K,y.directionalLightShadows.needsUpdate=K,y.pointLights.needsUpdate=K,y.pointLightShadows.needsUpdate=K,y.spotLights.needsUpdate=K,y.spotLightShadows.needsUpdate=K,y.rectAreaLights.needsUpdate=K,y.hemisphereLights.needsUpdate=K}function Mo(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,K,te){const J=m.get(y);J.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),m.get(y.texture).__webglTexture=K,m.get(y.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:te,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,K){const te=m.get(y);te.__webglFramebuffer=K,te.__useDefaultFramebuffer=K===void 0};const To=h.createFramebuffer();this.setRenderTarget=function(y,K=0,te=0){N=y,F=K,C=te;let J=null,$=!1,xe=!1;if(y){const be=m.get(y);if(be.__useDefaultFramebuffer!==void 0){k.bindFramebuffer(h.FRAMEBUFFER,be.__webglFramebuffer),X.copy(y.viewport),O.copy(y.scissor),Q=y.scissorTest,k.viewport(X),k.scissor(O),k.setScissorTest(Q),u=-1;return}else if(be.__webglFramebuffer===void 0)U.setupRenderTarget(y);else if(be.__hasExternalTextures)U.rebindTextures(y,m.get(y.texture).__webglTexture,m.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const He=y.depthTexture;if(be.__boundDepthTexture!==He){if(He!==null&&m.has(He)&&(y.width!==He.image.width||y.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(y)}}const Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(xe=!0);const Ne=m.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ne[K])?J=Ne[K][te]:J=Ne[K],$=!0):y.samples>0&&U.useMultisampledRTT(y)===!1?J=m.get(y).__webglMultisampledFramebuffer:Array.isArray(Ne)?J=Ne[te]:J=Ne,X.copy(y.viewport),O.copy(y.scissor),Q=y.scissorTest}else X.copy(ne).multiplyScalar(he).floor(),O.copy(ue).multiplyScalar(he).floor(),Q=se;if(te!==0&&(J=To),k.bindFramebuffer(h.FRAMEBUFFER,J)&&k.drawBuffers(y,J),k.viewport(X),k.scissor(O),k.setScissorTest(Q),$){const be=m.get(y.texture);h.framebufferTexture2D(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_CUBE_MAP_POSITIVE_X+K,be.__webglTexture,te)}else if(xe){const be=K;for(let Ue=0;Ue<y.textures.length;Ue++){const Ne=m.get(y.textures[Ue]);h.framebufferTextureLayer(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0+Ue,Ne.__webglTexture,te,be)}}else if(y!==null&&te!==0){const be=m.get(y.texture);h.framebufferTexture2D(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,be.__webglTexture,te)}u=-1},this.readRenderTargetPixels=function(y,K,te,J,$,xe,Ce,be=0){if(!(y&&y.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=m.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue){k.bindFramebuffer(h.FRAMEBUFFER,Ue);try{const Ne=y.textures[be],He=Ne.format,We=Ne.type;if(y.textures.length>1&&h.readBuffer(h.COLOR_ATTACHMENT0+be),!ae.textureFormatReadable(He)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(We)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=y.width-J&&te>=0&&te<=y.height-$&&h.readPixels(K,te,J,$,ve.convert(He),ve.convert(We),xe)}finally{const Ne=N!==null?m.get(N).__webglFramebuffer:null;k.bindFramebuffer(h.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(y,K,te,J,$,xe,Ce,be=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=m.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue)if(K>=0&&K<=y.width-J&&te>=0&&te<=y.height-$){k.bindFramebuffer(h.FRAMEBUFFER,Ue);const Ne=y.textures[be],He=Ne.format,We=Ne.type;if(y.textures.length>1&&h.readBuffer(h.COLOR_ATTACHMENT0+be),!ae.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=h.createBuffer();h.bindBuffer(h.PIXEL_PACK_BUFFER,Oe),h.bufferData(h.PIXEL_PACK_BUFFER,xe.byteLength,h.STREAM_READ),h.readPixels(K,te,J,$,ve.convert(He),ve.convert(We),0);const je=N!==null?m.get(N).__webglFramebuffer:null;k.bindFramebuffer(h.FRAMEBUFFER,je);const st=h.fenceSync(h.SYNC_GPU_COMMANDS_COMPLETE,0);return h.flush(),await Co(h,st,4),h.bindBuffer(h.PIXEL_PACK_BUFFER,Oe),h.getBufferSubData(h.PIXEL_PACK_BUFFER,0,xe),h.deleteBuffer(Oe),h.deleteSync(st),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,K=null,te=0){const J=Math.pow(2,-te),$=Math.floor(y.image.width*J),xe=Math.floor(y.image.height*J),Ce=K!==null?K.x:0,be=K!==null?K.y:0;U.setTexture2D(y,0),h.copyTexSubImage2D(h.TEXTURE_2D,te,0,0,Ce,be,$,xe),k.unbindTexture()};const Ao=h.createFramebuffer(),wo=h.createFramebuffer();this.copyTextureToTexture=function(y,K,te=null,J=null,$=0,xe=0){let Ce,be,Ue,Ne,He,We,Oe,je,st;const ot=y.isCompressedTexture?y.mipmaps[xe]:y.image;if(te!==null)Ce=te.max.x-te.min.x,be=te.max.y-te.min.y,Ue=te.isBox3?te.max.z-te.min.z:1,Ne=te.min.x,He=te.min.y,We=te.isBox3?te.min.z:0;else{const ht=Math.pow(2,-$);Ce=Math.floor(ot.width*ht),be=Math.floor(ot.height*ht),y.isDataArrayTexture?Ue=ot.depth:y.isData3DTexture?Ue=Math.floor(ot.depth*ht):Ue=1,Ne=0,He=0,We=0}J!==null?(Oe=J.x,je=J.y,st=J.z):(Oe=0,je=0,st=0);const $e=ve.convert(K.format),pt=ve.convert(K.type);let Ie;K.isData3DTexture?(U.setTexture3D(K,0),Ie=h.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(U.setTexture2DArray(K,0),Ie=h.TEXTURE_2D_ARRAY):(U.setTexture2D(K,0),Ie=h.TEXTURE_2D),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,K.flipY),h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),h.pixelStorei(h.UNPACK_ALIGNMENT,K.unpackAlignment);const St=h.getParameter(h.UNPACK_ROW_LENGTH),Xe=h.getParameter(h.UNPACK_IMAGE_HEIGHT),Mt=h.getParameter(h.UNPACK_SKIP_PIXELS),At=h.getParameter(h.UNPACK_SKIP_ROWS),Kt=h.getParameter(h.UNPACK_SKIP_IMAGES);h.pixelStorei(h.UNPACK_ROW_LENGTH,ot.width),h.pixelStorei(h.UNPACK_IMAGE_HEIGHT,ot.height),h.pixelStorei(h.UNPACK_SKIP_PIXELS,Ne),h.pixelStorei(h.UNPACK_SKIP_ROWS,He),h.pixelStorei(h.UNPACK_SKIP_IMAGES,We);const en=y.isDataArrayTexture||y.isData3DTexture,Je=K.isDataArrayTexture||K.isData3DTexture;if(y.isDepthTexture){const ht=m.get(y),kt=m.get(K),dt=m.get(ht.__renderTarget),Gt=m.get(kt.__renderTarget);k.bindFramebuffer(h.READ_FRAMEBUFFER,dt.__webglFramebuffer),k.bindFramebuffer(h.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let tn=0;tn<Ue;tn++)en&&(h.framebufferTextureLayer(h.READ_FRAMEBUFFER,h.COLOR_ATTACHMENT0,m.get(y).__webglTexture,$,We+tn),h.framebufferTextureLayer(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0,m.get(K).__webglTexture,xe,st+tn)),h.blitFramebuffer(Ne,He,Ce,be,Oe,je,Ce,be,h.DEPTH_BUFFER_BIT,h.NEAREST);k.bindFramebuffer(h.READ_FRAMEBUFFER,null),k.bindFramebuffer(h.DRAW_FRAMEBUFFER,null)}else if($!==0||y.isRenderTargetTexture||m.has(y)){const ht=m.get(y),kt=m.get(K);k.bindFramebuffer(h.READ_FRAMEBUFFER,Ao),k.bindFramebuffer(h.DRAW_FRAMEBUFFER,wo);for(let dt=0;dt<Ue;dt++)en?h.framebufferTextureLayer(h.READ_FRAMEBUFFER,h.COLOR_ATTACHMENT0,ht.__webglTexture,$,We+dt):h.framebufferTexture2D(h.READ_FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,ht.__webglTexture,$),Je?h.framebufferTextureLayer(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0,kt.__webglTexture,xe,st+dt):h.framebufferTexture2D(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,kt.__webglTexture,xe),$!==0?h.blitFramebuffer(Ne,He,Ce,be,Oe,je,Ce,be,h.COLOR_BUFFER_BIT,h.NEAREST):Je?h.copyTexSubImage3D(Ie,xe,Oe,je,st+dt,Ne,He,Ce,be):h.copyTexSubImage2D(Ie,xe,Oe,je,Ne,He,Ce,be);k.bindFramebuffer(h.READ_FRAMEBUFFER,null),k.bindFramebuffer(h.DRAW_FRAMEBUFFER,null)}else Je?y.isDataTexture||y.isData3DTexture?h.texSubImage3D(Ie,xe,Oe,je,st,Ce,be,Ue,$e,pt,ot.data):K.isCompressedArrayTexture?h.compressedTexSubImage3D(Ie,xe,Oe,je,st,Ce,be,Ue,$e,ot.data):h.texSubImage3D(Ie,xe,Oe,je,st,Ce,be,Ue,$e,pt,ot):y.isDataTexture?h.texSubImage2D(h.TEXTURE_2D,xe,Oe,je,Ce,be,$e,pt,ot.data):y.isCompressedTexture?h.compressedTexSubImage2D(h.TEXTURE_2D,xe,Oe,je,ot.width,ot.height,$e,ot.data):h.texSubImage2D(h.TEXTURE_2D,xe,Oe,je,Ce,be,$e,pt,ot);h.pixelStorei(h.UNPACK_ROW_LENGTH,St),h.pixelStorei(h.UNPACK_IMAGE_HEIGHT,Xe),h.pixelStorei(h.UNPACK_SKIP_PIXELS,Mt),h.pixelStorei(h.UNPACK_SKIP_ROWS,At),h.pixelStorei(h.UNPACK_SKIP_IMAGES,Kt),xe===0&&K.generateMipmaps&&h.generateMipmap(Ie),k.unbindTexture()},this.initRenderTarget=function(y){m.get(y).__webglFramebuffer===void 0&&U.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?U.setTextureCube(y,0):y.isData3DTexture?U.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?U.setTexture2DArray(y,0):U.setTexture2D(y,0),k.unbindTexture()},this.resetState=function(){F=0,C=0,N=null,k.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(n),t.unpackColorSpace=lt._getUnpackColorSpace()}}function Yd(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),s=new Set(Object.keys(e[0].morphAttributes)),r={},a={},l=e[0].morphTargetsRelative,g=new hn;let E=0;for(let M=0;M<e.length;++M){const x=e[M];let d=0;if(t!==(x.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+M+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in x.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+M+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(x.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+M+". Make sure all geometries have the same number of attributes."),null;if(l!==x.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+M+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in x.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+M+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(x.morphAttributes[f])}if(n){let f;if(t)f=x.index.count;else if(x.attributes.position!==void 0)f=x.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+M+". The geometry must have either an index or a position attribute"),null;g.addGroup(E,f,M),E+=f}}if(t){let M=0;const x=[];for(let d=0;d<e.length;++d){const f=e[d].index;for(let S=0;S<f.count;++S)x.push(f.getX(S)+M);M+=e[d].attributes.position.count}g.setIndex(x)}for(const M in r){const x=ua(r[M]);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+M+" attribute."),null;g.setAttribute(M,x)}for(const M in a){const x=a[M][0].length;if(x===0)break;g.morphAttributes=g.morphAttributes||{},g.morphAttributes[M]=[];for(let d=0;d<x;++d){const f=[];for(let _=0;_<a[M].length;++_)f.push(a[M][_][d]);const S=ua(f);if(!S)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+M+" morphAttribute."),null;g.morphAttributes[M].push(S)}}return g}function ua(e){let n,t,i,s=-1,r=0;for(let E=0;E<e.length;++E){const M=e[E];if(n===void 0&&(n=M.array.constructor),n!==M.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=M.itemSize),t!==M.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=M.normalized),i!==M.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=M.gpuType),s!==M.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=M.count*t}const a=new n(r),l=new xn(a,t,i);let g=0;for(let E=0;E<e.length;++E){const M=e[E];if(M.isInterleavedBufferAttribute){const x=g/t;for(let d=0,f=M.count;d<f;d++)for(let S=0;S<t;S++){const _=M.getComponent(d,S);l.setComponent(d+x,S,_)}}else a.set(M.array,g);g+=M.count*t}return s!==void 0&&(l.gpuType=s),l}const Kd={north:[6,4,0,2],east:[7,5,4,6],south:[3,1,5,7],west:[2,0,1,3],up:[2,3,7,6],down:[1,0,4,5]},qd=[0,1,2,0,2,3],Zd=new Be(-.52,.7,-.55).normalize(),da={x:new Be(1,0,0),y:new Be(0,1,0),z:new Be(0,0,1)};function to(e,n){const t=new Set;for(;n?.startsWith("#");){if(t.has(n))throw new Error(`Circular texture reference: ${n}`);t.add(n),n=e[n.slice(1)]}if(!n)throw new Error("Model has an unresolved texture.");return n.replace(/^minecraft:/,"")}function jd(e,n,t){const{from:i,to:s,rotation:r}=e,a=new Be(...r?.origin??[8,8,8]),l=new yi;if(r?.axis)l.setFromAxisAngle(da[r.axis],Ft.degToRad(r.angle));else if(r){const P=[r.x??0,r.y??0,r.z??0].map(Ft.degToRad);l.setFromEuler(new Hi(...P,"ZYX"))}const g=new Be(1,1,1);if(r?.rescale)for(const[P,D]of Object.entries(da)){const L=D.clone().applyQuaternion(l);g[P]=1/Math.max(Math.abs(L.x),Math.abs(L.y),Math.abs(L.z))}const E=Kd[n].map(P=>new Be((P&4?s:i)[0],(P&2?s:i)[1],(P&1?s:i)[2]).sub(a).multiply(g).applyQuaternion(l).add(a)),[M,x,d,f]=t.uv??$d(i,s,n),S=[[M,x],[M,f],[d,f],[d,x]],_=Ft.euclideanModulo((t.rotation??0)/90,4),c=E.flatMap((P,D)=>{const[L,b]=S[(D+_)%4];return[L/16,1-b/16]}),o=E[1].clone().sub(E[0]).cross(E[2].clone().sub(E[0])).normalize(),v=Math.max(0,o.dot(Zd)),T=e.shade===!1?1:.61+.39*v,R=new hn;return R.setAttribute("position",new En(E.flatMap(P=>P.toArray()),3)),R.setAttribute("uv",new En(c,2)),R.setAttribute("color",new En(Array(12).fill(T),3)),R.setIndex(qd),R}function $d([e,n,t],[i,s,r],a){return{north:[16-i,16-s,16-e,16-n],east:[16-r,16-s,16-t,16-n],south:[e,16-s,i,16-n],west:[t,16-s,r,16-n],up:[e,t,i,r],down:[e,16-r,i,16-t]}[a]}function Qd({data:e,width:n,height:t},i){const s=i.attributes.uv,r=Array.from({length:4},(x,d)=>s.getX(d)*n),a=Array.from({length:4},(x,d)=>(1-s.getY(d))*t),l=Math.floor(Math.min(...r)),g=Math.ceil(Math.max(...r)),E=Math.floor(Math.min(...a)),M=Math.ceil(Math.max(...a));for(let x=E;x<M;x+=1)for(let d=l;d<g;d+=1){const f=e[(x*n+d)*4+3];if(f>0&&f<255)return!0}return!1}function Jd(e,n,t){const i=e.attributes.uv,s=(i.getX(0)+i.getX(2))/2,r=(i.getY(0)+i.getY(2))/2,a=1/(n*32),l=1/(t*32);for(let g=0;g<i.count;g+=1){const E=Ft.lerp(i.getX(g),s,a),M=Ft.lerp(i.getY(g),r,l);i.setXY(g,E,M)}}function eh(e,n){const t=new Ka,i=new Map;for(const s of e.elements)for(const[r,a]of Object.entries(s.faces)){const l=to(e.textures,a.texture);i.has(l)||i.set(l,[]),i.get(l).push(jd(s,r,a))}for(const[s,r]of i){const a=n.get(s),l=a.getContext("2d").getImageData(0,0,a.width,a.height),g=new qa(a);g.colorSpace=Aa,g.magFilter=Nt,g.minFilter=Nt,g.generateMipmaps=!1,r.forEach(x=>Jd(x,a.width,a.height));const E=new qn({map:g,vertexColors:!0,alphaTest:254.5/255});t.add(new bt(Yd(r),E));let M;for(const x of r){if(!Qd(l,x)){x.dispose();continue}M||(M=new qn({map:g,vertexColors:!0,transparent:!0,depthWrite:!1,alphaTest:.5/255}),M.onBeforeCompile=S=>{S.fragmentShader=S.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
if (diffuseColor.a >= 0.9980392) discard;`)}),x.computeBoundingBox();const d=x.boundingBox.getCenter(new Be);x.translate(-d.x,-d.y,-d.z);const f=new bt(x,M);f.position.copy(d),t.add(f)}}return t}function th(e){const n=new Set,t=new Set;for(const i of e.children)i.geometry.dispose(),n.add(i.material),t.add(i.material.map);n.forEach(i=>i.dispose()),t.forEach(i=>i.dispose())}var Nn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function On(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var xi={exports:{}};var ha;function ih(){return ha||(ha=1,(function(e,n){(function(t){e.exports=t()})(function(){return(function t(i,s,r){function a(E,M){if(!s[E]){if(!i[E]){var x=typeof On=="function"&&On;if(!M&&x)return x(E,!0);if(l)return l(E,!0);var d=new Error("Cannot find module '"+E+"'");throw d.code="MODULE_NOT_FOUND",d}var f=s[E]={exports:{}};i[E][0].call(f.exports,function(S){var _=i[E][1][S];return a(_||S)},f,f.exports,t,i,s,r)}return s[E].exports}for(var l=typeof On=="function"&&On,g=0;g<r.length;g++)a(r[g]);return a})({1:[function(t,i,s){var r=t("./utils"),a=t("./support"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";s.encode=function(g){for(var E,M,x,d,f,S,_,c=[],o=0,v=g.length,T=v,R=r.getTypeOf(g)!=="string";o<g.length;)T=v-o,x=R?(E=g[o++],M=o<v?g[o++]:0,o<v?g[o++]:0):(E=g.charCodeAt(o++),M=o<v?g.charCodeAt(o++):0,o<v?g.charCodeAt(o++):0),d=E>>2,f=(3&E)<<4|M>>4,S=1<T?(15&M)<<2|x>>6:64,_=2<T?63&x:64,c.push(l.charAt(d)+l.charAt(f)+l.charAt(S)+l.charAt(_));return c.join("")},s.decode=function(g){var E,M,x,d,f,S,_=0,c=0,o="data:";if(g.substr(0,o.length)===o)throw new Error("Invalid base64 input, it looks like a data url.");var v,T=3*(g=g.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(g.charAt(g.length-1)===l.charAt(64)&&T--,g.charAt(g.length-2)===l.charAt(64)&&T--,T%1!=0)throw new Error("Invalid base64 input, bad content length.");for(v=a.uint8array?new Uint8Array(0|T):new Array(0|T);_<g.length;)E=l.indexOf(g.charAt(_++))<<2|(d=l.indexOf(g.charAt(_++)))>>4,M=(15&d)<<4|(f=l.indexOf(g.charAt(_++)))>>2,x=(3&f)<<6|(S=l.indexOf(g.charAt(_++))),v[c++]=E,f!==64&&(v[c++]=M),S!==64&&(v[c++]=x);return v}},{"./support":30,"./utils":32}],2:[function(t,i,s){var r=t("./external"),a=t("./stream/DataWorker"),l=t("./stream/Crc32Probe"),g=t("./stream/DataLengthProbe");function E(M,x,d,f,S){this.compressedSize=M,this.uncompressedSize=x,this.crc32=d,this.compression=f,this.compressedContent=S}E.prototype={getContentWorker:function(){var M=new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new g("data_length")),x=this;return M.on("end",function(){if(this.streamInfo.data_length!==x.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),M},getCompressedWorker:function(){return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},E.createWorkerFrom=function(M,x,d){return M.pipe(new l).pipe(new g("uncompressedSize")).pipe(x.compressWorker(d)).pipe(new g("compressedSize")).withStreamInfo("compression",x)},i.exports=E},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,i,s){var r=t("./stream/GenericWorker");s.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},s.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,i,s){var r=t("./utils"),a=(function(){for(var l,g=[],E=0;E<256;E++){l=E;for(var M=0;M<8;M++)l=1&l?3988292384^l>>>1:l>>>1;g[E]=l}return g})();i.exports=function(l,g){return l!==void 0&&l.length?r.getTypeOf(l)!=="string"?(function(E,M,x,d){var f=a,S=d+x;E^=-1;for(var _=d;_<S;_++)E=E>>>8^f[255&(E^M[_])];return-1^E})(0|g,l,l.length,0):(function(E,M,x,d){var f=a,S=d+x;E^=-1;for(var _=d;_<S;_++)E=E>>>8^f[255&(E^M.charCodeAt(_))];return-1^E})(0|g,l,l.length,0):0}},{"./utils":32}],5:[function(t,i,s){s.base64=!1,s.binary=!1,s.dir=!1,s.createFolders=!0,s.date=null,s.compression=null,s.compressionOptions=null,s.comment=null,s.unixPermissions=null,s.dosPermissions=null},{}],6:[function(t,i,s){var r=null;r=typeof Promise<"u"?Promise:t("lie"),i.exports={Promise:r}},{lie:37}],7:[function(t,i,s){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=t("pako"),l=t("./utils"),g=t("./stream/GenericWorker"),E=r?"uint8array":"array";function M(x,d){g.call(this,"FlateWorker/"+x),this._pako=null,this._pakoAction=x,this._pakoOptions=d,this.meta={}}s.magic="\b\0",l.inherits(M,g),M.prototype.processChunk=function(x){this.meta=x.meta,this._pako===null&&this._createPako(),this._pako.push(l.transformTo(E,x.data),!1)},M.prototype.flush=function(){g.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},M.prototype.cleanUp=function(){g.prototype.cleanUp.call(this),this._pako=null},M.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var x=this;this._pako.onData=function(d){x.push({data:d,meta:x.meta})}},s.compressWorker=function(x){return new M("Deflate",x)},s.uncompressWorker=function(){return new M("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,i,s){function r(f,S){var _,c="";for(_=0;_<S;_++)c+=String.fromCharCode(255&f),f>>>=8;return c}function a(f,S,_,c,o,v){var T,R,P=f.file,D=f.compression,L=v!==E.utf8encode,b=l.transformTo("string",v(P.name)),A=l.transformTo("string",E.utf8encode(P.name)),Y=P.comment,F=l.transformTo("string",v(Y)),C=l.transformTo("string",E.utf8encode(Y)),N=A.length!==P.name.length,u=C.length!==Y.length,B="",X="",O="",Q=P.dir,W=P.date,ce={crc32:0,compressedSize:0,uncompressedSize:0};S&&!_||(ce.crc32=f.crc32,ce.compressedSize=f.compressedSize,ce.uncompressedSize=f.uncompressedSize);var H=0;S&&(H|=8),L||!N&&!u||(H|=2048);var G=0,he=0;Q&&(G|=16),o==="UNIX"?(he=798,G|=(function(fe,ne){var ue=fe;return fe||(ue=ne?16893:33204),(65535&ue)<<16})(P.unixPermissions,Q)):(he=20,G|=(function(fe){return 63&(fe||0)})(P.dosPermissions)),T=W.getUTCHours(),T<<=6,T|=W.getUTCMinutes(),T<<=5,T|=W.getUTCSeconds()/2,R=W.getUTCFullYear()-1980,R<<=4,R|=W.getUTCMonth()+1,R<<=5,R|=W.getUTCDate(),N&&(X=r(1,1)+r(M(b),4)+A,B+="up"+r(X.length,2)+X),u&&(O=r(1,1)+r(M(F),4)+C,B+="uc"+r(O.length,2)+O);var me="";return me+=`
\0`,me+=r(H,2),me+=D.magic,me+=r(T,2),me+=r(R,2),me+=r(ce.crc32,4),me+=r(ce.compressedSize,4),me+=r(ce.uncompressedSize,4),me+=r(b.length,2),me+=r(B.length,2),{fileRecord:x.LOCAL_FILE_HEADER+me+b+B,dirRecord:x.CENTRAL_FILE_HEADER+r(he,2)+me+r(F.length,2)+"\0\0\0\0"+r(G,4)+r(c,4)+b+B+F}}var l=t("../utils"),g=t("../stream/GenericWorker"),E=t("../utf8"),M=t("../crc32"),x=t("../signature");function d(f,S,_,c){g.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=S,this.zipPlatform=_,this.encodeFileName=c,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}l.inherits(d,g),d.prototype.push=function(f){var S=f.meta.percent||0,_=this.entriesCount,c=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,g.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:_?(S+100*(_-c-1))/_:100}}))},d.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var S=this.streamFiles&&!f.file.dir;if(S){var _=a(f,S,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:_.fileRecord,meta:{percent:0}})}else this.accumulate=!0},d.prototype.closedSource=function(f){this.accumulate=!1;var S=this.streamFiles&&!f.file.dir,_=a(f,S,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(_.dirRecord),S)this.push({data:(function(c){return x.DATA_DESCRIPTOR+r(c.crc32,4)+r(c.compressedSize,4)+r(c.uncompressedSize,4)})(f),meta:{percent:100}});else for(this.push({data:_.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},d.prototype.flush=function(){for(var f=this.bytesWritten,S=0;S<this.dirRecords.length;S++)this.push({data:this.dirRecords[S],meta:{percent:100}});var _=this.bytesWritten-f,c=(function(o,v,T,R,P){var D=l.transformTo("string",P(R));return x.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(o,2)+r(o,2)+r(v,4)+r(T,4)+r(D.length,2)+D})(this.dirRecords.length,_,f,this.zipComment,this.encodeFileName);this.push({data:c,meta:{percent:100}})},d.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},d.prototype.registerPrevious=function(f){this._sources.push(f);var S=this;return f.on("data",function(_){S.processChunk(_)}),f.on("end",function(){S.closedSource(S.previous.streamInfo),S._sources.length?S.prepareNextSource():S.end()}),f.on("error",function(_){S.error(_)}),this},d.prototype.resume=function(){return!!g.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},d.prototype.error=function(f){var S=this._sources;if(!g.prototype.error.call(this,f))return!1;for(var _=0;_<S.length;_++)try{S[_].error(f)}catch{}return!0},d.prototype.lock=function(){g.prototype.lock.call(this);for(var f=this._sources,S=0;S<f.length;S++)f[S].lock()},i.exports=d},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,i,s){var r=t("../compressions"),a=t("./ZipFileWorker");s.generateWorker=function(l,g,E){var M=new a(g.streamFiles,E,g.platform,g.encodeFileName),x=0;try{l.forEach(function(d,f){x++;var S=(function(v,T){var R=v||T,P=r[R];if(!P)throw new Error(R+" is not a valid compression method !");return P})(f.options.compression,g.compression),_=f.options.compressionOptions||g.compressionOptions||{},c=f.dir,o=f.date;f._compressWorker(S,_).withStreamInfo("file",{name:d,dir:c,date:o,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(M)}),M.entriesCount=x}catch(d){M.error(d)}return M}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,i,s){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new r;for(var l in this)typeof this[l]!="function"&&(a[l]=this[l]);return a}}(r.prototype=t("./object")).loadAsync=t("./load"),r.support=t("./support"),r.defaults=t("./defaults"),r.version="3.10.1",r.loadAsync=function(a,l){return new r().loadAsync(a,l)},r.external=t("./external"),i.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,i,s){var r=t("./utils"),a=t("./external"),l=t("./utf8"),g=t("./zipEntries"),E=t("./stream/Crc32Probe"),M=t("./nodejsUtils");function x(d){return new a.Promise(function(f,S){var _=d.decompressed.getContentWorker().pipe(new E);_.on("error",function(c){S(c)}).on("end",function(){_.streamInfo.crc32!==d.decompressed.crc32?S(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}i.exports=function(d,f){var S=this;return f=r.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:l.utf8decode}),M.isNode&&M.isStream(d)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",d,!0,f.optimizedBinaryString,f.base64).then(function(_){var c=new g(f);return c.load(_),c}).then(function(_){var c=[a.Promise.resolve(_)],o=_.files;if(f.checkCRC32)for(var v=0;v<o.length;v++)c.push(x(o[v]));return a.Promise.all(c)}).then(function(_){for(var c=_.shift(),o=c.files,v=0;v<o.length;v++){var T=o[v],R=T.fileNameStr,P=r.resolve(T.fileNameStr);S.file(P,T.decompressed,{binary:!0,optimizedBinaryString:!0,date:T.date,dir:T.dir,comment:T.fileCommentStr.length?T.fileCommentStr:null,unixPermissions:T.unixPermissions,dosPermissions:T.dosPermissions,createFolders:f.createFolders}),T.dir||(S.file(P).unsafeOriginalName=R)}return c.zipComment.length&&(S.comment=c.zipComment),S})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,i,s){var r=t("../utils"),a=t("../stream/GenericWorker");function l(g,E){a.call(this,"Nodejs stream input adapter for "+g),this._upstreamEnded=!1,this._bindStream(E)}r.inherits(l,a),l.prototype._bindStream=function(g){var E=this;(this._stream=g).pause(),g.on("data",function(M){E.push({data:M,meta:{percent:0}})}).on("error",function(M){E.isPaused?this.generatedError=M:E.error(M)}).on("end",function(){E.isPaused?E._upstreamEnded=!0:E.end()})},l.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},l.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=l},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,i,s){var r=t("readable-stream").Readable;function a(l,g,E){r.call(this,g),this._helper=l;var M=this;l.on("data",function(x,d){M.push(x)||M._helper.pause(),E&&E(d)}).on("error",function(x){M.emit("error",x)}).on("end",function(){M.push(null)})}t("../utils").inherits(a,r),a.prototype._read=function(){this._helper.resume()},i.exports=a},{"../utils":32,"readable-stream":16}],14:[function(t,i,s){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,a);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,a)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var a=new Buffer(r);return a.fill(0),a},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(t,i,s){function r(P,D,L){var b,A=l.getTypeOf(D),Y=l.extend(L||{},M);Y.date=Y.date||new Date,Y.compression!==null&&(Y.compression=Y.compression.toUpperCase()),typeof Y.unixPermissions=="string"&&(Y.unixPermissions=parseInt(Y.unixPermissions,8)),Y.unixPermissions&&16384&Y.unixPermissions&&(Y.dir=!0),Y.dosPermissions&&16&Y.dosPermissions&&(Y.dir=!0),Y.dir&&(P=o(P)),Y.createFolders&&(b=c(P))&&v.call(this,b,!0);var F=A==="string"&&Y.binary===!1&&Y.base64===!1;L&&L.binary!==void 0||(Y.binary=!F),(D instanceof x&&D.uncompressedSize===0||Y.dir||!D||D.length===0)&&(Y.base64=!1,Y.binary=!0,D="",Y.compression="STORE",A="string");var C=null;C=D instanceof x||D instanceof g?D:S.isNode&&S.isStream(D)?new _(P,D):l.prepareContent(P,D,Y.binary,Y.optimizedBinaryString,Y.base64);var N=new d(P,C,Y);this.files[P]=N}var a=t("./utf8"),l=t("./utils"),g=t("./stream/GenericWorker"),E=t("./stream/StreamHelper"),M=t("./defaults"),x=t("./compressedObject"),d=t("./zipObject"),f=t("./generate"),S=t("./nodejsUtils"),_=t("./nodejs/NodejsStreamInputAdapter"),c=function(P){P.slice(-1)==="/"&&(P=P.substring(0,P.length-1));var D=P.lastIndexOf("/");return 0<D?P.substring(0,D):""},o=function(P){return P.slice(-1)!=="/"&&(P+="/"),P},v=function(P,D){return D=D!==void 0?D:M.createFolders,P=o(P),this.files[P]||r.call(this,P,null,{dir:!0,createFolders:D}),this.files[P]};function T(P){return Object.prototype.toString.call(P)==="[object RegExp]"}var R={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(P){var D,L,b;for(D in this.files)b=this.files[D],(L=D.slice(this.root.length,D.length))&&D.slice(0,this.root.length)===this.root&&P(L,b)},filter:function(P){var D=[];return this.forEach(function(L,b){P(L,b)&&D.push(b)}),D},file:function(P,D,L){if(arguments.length!==1)return P=this.root+P,r.call(this,P,D,L),this;if(T(P)){var b=P;return this.filter(function(Y,F){return!F.dir&&b.test(Y)})}var A=this.files[this.root+P];return A&&!A.dir?A:null},folder:function(P){if(!P)return this;if(T(P))return this.filter(function(A,Y){return Y.dir&&P.test(A)});var D=this.root+P,L=v.call(this,D),b=this.clone();return b.root=L.name,b},remove:function(P){P=this.root+P;var D=this.files[P];if(D||(P.slice(-1)!=="/"&&(P+="/"),D=this.files[P]),D&&!D.dir)delete this.files[P];else for(var L=this.filter(function(A,Y){return Y.name.slice(0,P.length)===P}),b=0;b<L.length;b++)delete this.files[L[b].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(P){var D,L={};try{if((L=l.extend(P||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=L.type.toLowerCase(),L.compression=L.compression.toUpperCase(),L.type==="binarystring"&&(L.type="string"),!L.type)throw new Error("No output type specified.");l.checkSupport(L.type),L.platform!=="darwin"&&L.platform!=="freebsd"&&L.platform!=="linux"&&L.platform!=="sunos"||(L.platform="UNIX"),L.platform==="win32"&&(L.platform="DOS");var b=L.comment||this.comment||"";D=f.generateWorker(this,L,b)}catch(A){(D=new g("error")).error(A)}return new E(D,L.type||"string",L.mimeType)},generateAsync:function(P,D){return this.generateInternalStream(P).accumulate(D)},generateNodeStream:function(P,D){return(P=P||{}).type||(P.type="nodebuffer"),this.generateInternalStream(P).toNodejsStream(D)}};i.exports=R},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,i,s){i.exports=t("stream")},{stream:void 0}],17:[function(t,i,s){var r=t("./DataReader");function a(l){r.call(this,l);for(var g=0;g<this.data.length;g++)l[g]=255&l[g]}t("../utils").inherits(a,r),a.prototype.byteAt=function(l){return this.data[this.zero+l]},a.prototype.lastIndexOfSignature=function(l){for(var g=l.charCodeAt(0),E=l.charCodeAt(1),M=l.charCodeAt(2),x=l.charCodeAt(3),d=this.length-4;0<=d;--d)if(this.data[d]===g&&this.data[d+1]===E&&this.data[d+2]===M&&this.data[d+3]===x)return d-this.zero;return-1},a.prototype.readAndCheckSignature=function(l){var g=l.charCodeAt(0),E=l.charCodeAt(1),M=l.charCodeAt(2),x=l.charCodeAt(3),d=this.readData(4);return g===d[0]&&E===d[1]&&M===d[2]&&x===d[3]},a.prototype.readData=function(l){if(this.checkOffset(l),l===0)return[];var g=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,g},i.exports=a},{"../utils":32,"./DataReader":18}],18:[function(t,i,s){var r=t("../utils");function a(l){this.data=l,this.length=l.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(l){this.checkIndex(this.index+l)},checkIndex:function(l){if(this.length<this.zero+l||l<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+l+"). Corrupted zip ?")},setIndex:function(l){this.checkIndex(l),this.index=l},skip:function(l){this.setIndex(this.index+l)},byteAt:function(){},readInt:function(l){var g,E=0;for(this.checkOffset(l),g=this.index+l-1;g>=this.index;g--)E=(E<<8)+this.byteAt(g);return this.index+=l,E},readString:function(l){return r.transformTo("string",this.readData(l))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var l=this.readInt(4);return new Date(Date.UTC(1980+(l>>25&127),(l>>21&15)-1,l>>16&31,l>>11&31,l>>5&63,(31&l)<<1))}},i.exports=a},{"../utils":32}],19:[function(t,i,s){var r=t("./Uint8ArrayReader");function a(l){r.call(this,l)}t("../utils").inherits(a,r),a.prototype.readData=function(l){this.checkOffset(l);var g=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,g},i.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,i,s){var r=t("./DataReader");function a(l){r.call(this,l)}t("../utils").inherits(a,r),a.prototype.byteAt=function(l){return this.data.charCodeAt(this.zero+l)},a.prototype.lastIndexOfSignature=function(l){return this.data.lastIndexOf(l)-this.zero},a.prototype.readAndCheckSignature=function(l){return l===this.readData(4)},a.prototype.readData=function(l){this.checkOffset(l);var g=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,g},i.exports=a},{"../utils":32,"./DataReader":18}],21:[function(t,i,s){var r=t("./ArrayReader");function a(l){r.call(this,l)}t("../utils").inherits(a,r),a.prototype.readData=function(l){if(this.checkOffset(l),l===0)return new Uint8Array(0);var g=this.data.subarray(this.zero+this.index,this.zero+this.index+l);return this.index+=l,g},i.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(t,i,s){var r=t("../utils"),a=t("../support"),l=t("./ArrayReader"),g=t("./StringReader"),E=t("./NodeBufferReader"),M=t("./Uint8ArrayReader");i.exports=function(x){var d=r.getTypeOf(x);return r.checkSupport(d),d!=="string"||a.uint8array?d==="nodebuffer"?new E(x):a.uint8array?new M(r.transformTo("uint8array",x)):new l(r.transformTo("array",x)):new g(x)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,i,s){s.LOCAL_FILE_HEADER="PK",s.CENTRAL_FILE_HEADER="PK",s.CENTRAL_DIRECTORY_END="PK",s.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",s.ZIP64_CENTRAL_DIRECTORY_END="PK",s.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,i,s){var r=t("./GenericWorker"),a=t("../utils");function l(g){r.call(this,"ConvertWorker to "+g),this.destType=g}a.inherits(l,r),l.prototype.processChunk=function(g){this.push({data:a.transformTo(this.destType,g.data),meta:g.meta})},i.exports=l},{"../utils":32,"./GenericWorker":28}],25:[function(t,i,s){var r=t("./GenericWorker"),a=t("../crc32");function l(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(l,r),l.prototype.processChunk=function(g){this.streamInfo.crc32=a(g.data,this.streamInfo.crc32||0),this.push(g)},i.exports=l},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,i,s){var r=t("../utils"),a=t("./GenericWorker");function l(g){a.call(this,"DataLengthProbe for "+g),this.propName=g,this.withStreamInfo(g,0)}r.inherits(l,a),l.prototype.processChunk=function(g){if(g){var E=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=E+g.data.length}a.prototype.processChunk.call(this,g)},i.exports=l},{"../utils":32,"./GenericWorker":28}],27:[function(t,i,s){var r=t("../utils"),a=t("./GenericWorker");function l(g){a.call(this,"DataWorker");var E=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,g.then(function(M){E.dataIsReady=!0,E.data=M,E.max=M&&M.length||0,E.type=r.getTypeOf(M),E.isPaused||E._tickAndRepeat()},function(M){E.error(M)})}r.inherits(l,a),l.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},l.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},l.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},l.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var g=null,E=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":g=this.data.substring(this.index,E);break;case"uint8array":g=this.data.subarray(this.index,E);break;case"array":case"nodebuffer":g=this.data.slice(this.index,E)}return this.index=E,this.push({data:g,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=l},{"../utils":32,"./GenericWorker":28}],28:[function(t,i,s){function r(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,l){return this._listeners[a].push(l),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,l){if(this._listeners[a])for(var g=0;g<this._listeners[a].length;g++)this._listeners[a][g].call(this,l)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var l=this;return a.on("data",function(g){l.processChunk(g)}),a.on("end",function(){l.end()}),a.on("error",function(g){l.error(g)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,l){return this.extraStreamInfo[a]=l,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},i.exports=r},{}],29:[function(t,i,s){var r=t("../utils"),a=t("./ConvertWorker"),l=t("./GenericWorker"),g=t("../base64"),E=t("../support"),M=t("../external"),x=null;if(E.nodestream)try{x=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function d(S,_){return new M.Promise(function(c,o){var v=[],T=S._internalType,R=S._outputType,P=S._mimeType;S.on("data",function(D,L){v.push(D),_&&_(L)}).on("error",function(D){v=[],o(D)}).on("end",function(){try{var D=(function(L,b,A){switch(L){case"blob":return r.newBlob(r.transformTo("arraybuffer",b),A);case"base64":return g.encode(b);default:return r.transformTo(L,b)}})(R,(function(L,b){var A,Y=0,F=null,C=0;for(A=0;A<b.length;A++)C+=b[A].length;switch(L){case"string":return b.join("");case"array":return Array.prototype.concat.apply([],b);case"uint8array":for(F=new Uint8Array(C),A=0;A<b.length;A++)F.set(b[A],Y),Y+=b[A].length;return F;case"nodebuffer":return Buffer.concat(b);default:throw new Error("concat : unsupported type '"+L+"'")}})(T,v),P);c(D)}catch(L){o(L)}v=[]}).resume()})}function f(S,_,c){var o=_;switch(_){case"blob":case"arraybuffer":o="uint8array";break;case"base64":o="string"}try{this._internalType=o,this._outputType=_,this._mimeType=c,r.checkSupport(o),this._worker=S.pipe(new a(o)),S.lock()}catch(v){this._worker=new l("error"),this._worker.error(v)}}f.prototype={accumulate:function(S){return d(this,S)},on:function(S,_){var c=this;return S==="data"?this._worker.on(S,function(o){_.call(c,o.data,o.meta)}):this._worker.on(S,function(){r.delay(_,arguments,c)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(S){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new x(this,{objectMode:this._outputType!=="nodebuffer"},S)}},i.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,i,s){if(s.base64=!0,s.array=!0,s.string=!0,s.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",s.nodebuffer=typeof Buffer<"u",s.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")s.blob=!1;else{var r=new ArrayBuffer(0);try{s.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(r),s.blob=a.getBlob("application/zip").size===0}catch{s.blob=!1}}}try{s.nodestream=!!t("readable-stream").Readable}catch{s.nodestream=!1}},{"readable-stream":16}],31:[function(t,i,s){for(var r=t("./utils"),a=t("./support"),l=t("./nodejsUtils"),g=t("./stream/GenericWorker"),E=new Array(256),M=0;M<256;M++)E[M]=252<=M?6:248<=M?5:240<=M?4:224<=M?3:192<=M?2:1;E[254]=E[254]=1;function x(){g.call(this,"utf-8 decode"),this.leftOver=null}function d(){g.call(this,"utf-8 encode")}s.utf8encode=function(f){return a.nodebuffer?l.newBufferFrom(f,"utf-8"):(function(S){var _,c,o,v,T,R=S.length,P=0;for(v=0;v<R;v++)(64512&(c=S.charCodeAt(v)))==55296&&v+1<R&&(64512&(o=S.charCodeAt(v+1)))==56320&&(c=65536+(c-55296<<10)+(o-56320),v++),P+=c<128?1:c<2048?2:c<65536?3:4;for(_=a.uint8array?new Uint8Array(P):new Array(P),v=T=0;T<P;v++)(64512&(c=S.charCodeAt(v)))==55296&&v+1<R&&(64512&(o=S.charCodeAt(v+1)))==56320&&(c=65536+(c-55296<<10)+(o-56320),v++),c<128?_[T++]=c:(c<2048?_[T++]=192|c>>>6:(c<65536?_[T++]=224|c>>>12:(_[T++]=240|c>>>18,_[T++]=128|c>>>12&63),_[T++]=128|c>>>6&63),_[T++]=128|63&c);return _})(f)},s.utf8decode=function(f){return a.nodebuffer?r.transformTo("nodebuffer",f).toString("utf-8"):(function(S){var _,c,o,v,T=S.length,R=new Array(2*T);for(_=c=0;_<T;)if((o=S[_++])<128)R[c++]=o;else if(4<(v=E[o]))R[c++]=65533,_+=v-1;else{for(o&=v===2?31:v===3?15:7;1<v&&_<T;)o=o<<6|63&S[_++],v--;1<v?R[c++]=65533:o<65536?R[c++]=o:(o-=65536,R[c++]=55296|o>>10&1023,R[c++]=56320|1023&o)}return R.length!==c&&(R.subarray?R=R.subarray(0,c):R.length=c),r.applyFromCharCode(R)})(f=r.transformTo(a.uint8array?"uint8array":"array",f))},r.inherits(x,g),x.prototype.processChunk=function(f){var S=r.transformTo(a.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var _=S;(S=new Uint8Array(_.length+this.leftOver.length)).set(this.leftOver,0),S.set(_,this.leftOver.length)}else S=this.leftOver.concat(S);this.leftOver=null}var c=(function(v,T){var R;for((T=T||v.length)>v.length&&(T=v.length),R=T-1;0<=R&&(192&v[R])==128;)R--;return R<0||R===0?T:R+E[v[R]]>T?R:T})(S),o=S;c!==S.length&&(a.uint8array?(o=S.subarray(0,c),this.leftOver=S.subarray(c,S.length)):(o=S.slice(0,c),this.leftOver=S.slice(c,S.length))),this.push({data:s.utf8decode(o),meta:f.meta})},x.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=x,r.inherits(d,g),d.prototype.processChunk=function(f){this.push({data:s.utf8encode(f.data),meta:f.meta})},s.Utf8EncodeWorker=d},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,i,s){var r=t("./support"),a=t("./base64"),l=t("./nodejsUtils"),g=t("./external");function E(_){return _}function M(_,c){for(var o=0;o<_.length;++o)c[o]=255&_.charCodeAt(o);return c}t("setimmediate"),s.newBlob=function(_,c){s.checkSupport("blob");try{return new Blob([_],{type:c})}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return o.append(_),o.getBlob(c)}catch{throw new Error("Bug : can't construct the Blob.")}}};var x={stringifyByChunk:function(_,c,o){var v=[],T=0,R=_.length;if(R<=o)return String.fromCharCode.apply(null,_);for(;T<R;)c==="array"||c==="nodebuffer"?v.push(String.fromCharCode.apply(null,_.slice(T,Math.min(T+o,R)))):v.push(String.fromCharCode.apply(null,_.subarray(T,Math.min(T+o,R)))),T+=o;return v.join("")},stringifyByChar:function(_){for(var c="",o=0;o<_.length;o++)c+=String.fromCharCode(_[o]);return c},applyCanBeUsed:{uint8array:(function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,l.allocBuffer(1)).length===1}catch{return!1}})()}};function d(_){var c=65536,o=s.getTypeOf(_),v=!0;if(o==="uint8array"?v=x.applyCanBeUsed.uint8array:o==="nodebuffer"&&(v=x.applyCanBeUsed.nodebuffer),v)for(;1<c;)try{return x.stringifyByChunk(_,o,c)}catch{c=Math.floor(c/2)}return x.stringifyByChar(_)}function f(_,c){for(var o=0;o<_.length;o++)c[o]=_[o];return c}s.applyFromCharCode=d;var S={};S.string={string:E,array:function(_){return M(_,new Array(_.length))},arraybuffer:function(_){return S.string.uint8array(_).buffer},uint8array:function(_){return M(_,new Uint8Array(_.length))},nodebuffer:function(_){return M(_,l.allocBuffer(_.length))}},S.array={string:d,array:E,arraybuffer:function(_){return new Uint8Array(_).buffer},uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return l.newBufferFrom(_)}},S.arraybuffer={string:function(_){return d(new Uint8Array(_))},array:function(_){return f(new Uint8Array(_),new Array(_.byteLength))},arraybuffer:E,uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return l.newBufferFrom(new Uint8Array(_))}},S.uint8array={string:d,array:function(_){return f(_,new Array(_.length))},arraybuffer:function(_){return _.buffer},uint8array:E,nodebuffer:function(_){return l.newBufferFrom(_)}},S.nodebuffer={string:d,array:function(_){return f(_,new Array(_.length))},arraybuffer:function(_){return S.nodebuffer.uint8array(_).buffer},uint8array:function(_){return f(_,new Uint8Array(_.length))},nodebuffer:E},s.transformTo=function(_,c){if(c=c||"",!_)return c;s.checkSupport(_);var o=s.getTypeOf(c);return S[o][_](c)},s.resolve=function(_){for(var c=_.split("/"),o=[],v=0;v<c.length;v++){var T=c[v];T==="."||T===""&&v!==0&&v!==c.length-1||(T===".."?o.pop():o.push(T))}return o.join("/")},s.getTypeOf=function(_){return typeof _=="string"?"string":Object.prototype.toString.call(_)==="[object Array]"?"array":r.nodebuffer&&l.isBuffer(_)?"nodebuffer":r.uint8array&&_ instanceof Uint8Array?"uint8array":r.arraybuffer&&_ instanceof ArrayBuffer?"arraybuffer":void 0},s.checkSupport=function(_){if(!r[_.toLowerCase()])throw new Error(_+" is not supported by this platform")},s.MAX_VALUE_16BITS=65535,s.MAX_VALUE_32BITS=-1,s.pretty=function(_){var c,o,v="";for(o=0;o<(_||"").length;o++)v+="\\x"+((c=_.charCodeAt(o))<16?"0":"")+c.toString(16).toUpperCase();return v},s.delay=function(_,c,o){setImmediate(function(){_.apply(o||null,c||[])})},s.inherits=function(_,c){function o(){}o.prototype=c.prototype,_.prototype=new o},s.extend=function(){var _,c,o={};for(_=0;_<arguments.length;_++)for(c in arguments[_])Object.prototype.hasOwnProperty.call(arguments[_],c)&&o[c]===void 0&&(o[c]=arguments[_][c]);return o},s.prepareContent=function(_,c,o,v,T){return g.Promise.resolve(c).then(function(R){return r.blob&&(R instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(R))!==-1)&&typeof FileReader<"u"?new g.Promise(function(P,D){var L=new FileReader;L.onload=function(b){P(b.target.result)},L.onerror=function(b){D(b.target.error)},L.readAsArrayBuffer(R)}):R}).then(function(R){var P=s.getTypeOf(R);return P?(P==="arraybuffer"?R=s.transformTo("uint8array",R):P==="string"&&(T?R=a.decode(R):o&&v!==!0&&(R=(function(D){return M(D,r.uint8array?new Uint8Array(D.length):new Array(D.length))})(R))),R):g.Promise.reject(new Error("Can't read the data of '"+_+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,i,s){var r=t("./reader/readerFor"),a=t("./utils"),l=t("./signature"),g=t("./zipEntry"),E=t("./support");function M(x){this.files=[],this.loadOptions=x}M.prototype={checkSignature:function(x){if(!this.reader.readAndCheckSignature(x)){this.reader.index-=4;var d=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(d)+", expected "+a.pretty(x)+")")}},isSignature:function(x,d){var f=this.reader.index;this.reader.setIndex(x);var S=this.reader.readString(4)===d;return this.reader.setIndex(f),S},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var x=this.reader.readData(this.zipCommentLength),d=E.uint8array?"uint8array":"array",f=a.transformTo(d,x);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var x,d,f,S=this.zip64EndOfCentralSize-44;0<S;)x=this.reader.readInt(2),d=this.reader.readInt(4),f=this.reader.readData(d),this.zip64ExtensibleData[x]={id:x,length:d,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var x,d;for(x=0;x<this.files.length;x++)d=this.files[x],this.reader.setIndex(d.localHeaderOffset),this.checkSignature(l.LOCAL_FILE_HEADER),d.readLocalPart(this.reader),d.handleUTF8(),d.processAttributes()},readCentralDir:function(){var x;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(l.CENTRAL_FILE_HEADER);)(x=new g({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(x);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var x=this.reader.lastIndexOfSignature(l.CENTRAL_DIRECTORY_END);if(x<0)throw this.isSignature(0,l.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(x);var d=x;if(this.checkSignature(l.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(x=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(x),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,l.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var S=d-f;if(0<S)this.isSignature(d,l.CENTRAL_FILE_HEADER)||(this.reader.zero=S);else if(S<0)throw new Error("Corrupted zip: missing "+Math.abs(S)+" bytes.")},prepareReader:function(x){this.reader=r(x)},load:function(x){this.prepareReader(x),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=M},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,i,s){var r=t("./reader/readerFor"),a=t("./utils"),l=t("./compressedObject"),g=t("./crc32"),E=t("./utf8"),M=t("./compressions"),x=t("./support");function d(f,S){this.options=f,this.loadOptions=S}d.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var S,_;if(f.skip(22),this.fileNameLength=f.readInt(2),_=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(_),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((S=(function(c){for(var o in M)if(Object.prototype.hasOwnProperty.call(M,o)&&M[o].magic===c)return M[o];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new l(this.compressedSize,this.uncompressedSize,this.crc32,S,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var S=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(S),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=r(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var S,_,c,o=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<o;)S=f.readInt(2),_=f.readInt(2),c=f.readData(_),this.extraFields[S]={id:S,length:_,value:c};f.setIndex(o)},handleUTF8:function(){var f=x.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=E.utf8decode(this.fileName),this.fileCommentStr=E.utf8decode(this.fileComment);else{var S=this.findExtraFieldUnicodePath();if(S!==null)this.fileNameStr=S;else{var _=a.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(_)}var c=this.findExtraFieldUnicodeComment();if(c!==null)this.fileCommentStr=c;else{var o=a.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(o)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var S=r(f.value);return S.readInt(1)!==1||g(this.fileName)!==S.readInt(4)?null:E.utf8decode(S.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var S=r(f.value);return S.readInt(1)!==1||g(this.fileComment)!==S.readInt(4)?null:E.utf8decode(S.readData(f.length-5))}return null}},i.exports=d},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,i,s){function r(S,_,c){this.name=S,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this.unixPermissions=c.unixPermissions,this.dosPermissions=c.dosPermissions,this._data=_,this._dataBinary=c.binary,this.options={compression:c.compression,compressionOptions:c.compressionOptions}}var a=t("./stream/StreamHelper"),l=t("./stream/DataWorker"),g=t("./utf8"),E=t("./compressedObject"),M=t("./stream/GenericWorker");r.prototype={internalStream:function(S){var _=null,c="string";try{if(!S)throw new Error("No output type specified.");var o=(c=S.toLowerCase())==="string"||c==="text";c!=="binarystring"&&c!=="text"||(c="string"),_=this._decompressWorker();var v=!this._dataBinary;v&&!o&&(_=_.pipe(new g.Utf8EncodeWorker)),!v&&o&&(_=_.pipe(new g.Utf8DecodeWorker))}catch(T){(_=new M("error")).error(T)}return new a(_,c,"")},async:function(S,_){return this.internalStream(S).accumulate(_)},nodeStream:function(S,_){return this.internalStream(S||"nodebuffer").toNodejsStream(_)},_compressWorker:function(S,_){if(this._data instanceof E&&this._data.compression.magic===S.magic)return this._data.getCompressedWorker();var c=this._decompressWorker();return this._dataBinary||(c=c.pipe(new g.Utf8EncodeWorker)),E.createWorkerFrom(c,S,_)},_decompressWorker:function(){return this._data instanceof E?this._data.getContentWorker():this._data instanceof M?this._data:new l(this._data)}};for(var x=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],d=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<x.length;f++)r.prototype[x[f]]=d;i.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,i,s){(function(r){var a,l,g=r.MutationObserver||r.WebKitMutationObserver;if(g){var E=0,M=new g(S),x=r.document.createTextNode("");M.observe(x,{characterData:!0}),a=function(){x.data=E=++E%2}}else if(r.setImmediate||r.MessageChannel===void 0)a="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var _=r.document.createElement("script");_.onreadystatechange=function(){S(),_.onreadystatechange=null,_.parentNode.removeChild(_),_=null},r.document.documentElement.appendChild(_)}:function(){setTimeout(S,0)};else{var d=new r.MessageChannel;d.port1.onmessage=S,a=function(){d.port2.postMessage(0)}}var f=[];function S(){var _,c;l=!0;for(var o=f.length;o;){for(c=f,f=[],_=-1;++_<o;)c[_]();o=f.length}l=!1}i.exports=function(_){f.push(_)!==1||l||a()}}).call(this,typeof Nn<"u"?Nn:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,i,s){var r=t("immediate");function a(){}var l={},g=["REJECTED"],E=["FULFILLED"],M=["PENDING"];function x(o){if(typeof o!="function")throw new TypeError("resolver must be a function");this.state=M,this.queue=[],this.outcome=void 0,o!==a&&_(this,o)}function d(o,v,T){this.promise=o,typeof v=="function"&&(this.onFulfilled=v,this.callFulfilled=this.otherCallFulfilled),typeof T=="function"&&(this.onRejected=T,this.callRejected=this.otherCallRejected)}function f(o,v,T){r(function(){var R;try{R=v(T)}catch(P){return l.reject(o,P)}R===o?l.reject(o,new TypeError("Cannot resolve promise with itself")):l.resolve(o,R)})}function S(o){var v=o&&o.then;if(o&&(typeof o=="object"||typeof o=="function")&&typeof v=="function")return function(){v.apply(o,arguments)}}function _(o,v){var T=!1;function R(L){T||(T=!0,l.reject(o,L))}function P(L){T||(T=!0,l.resolve(o,L))}var D=c(function(){v(P,R)});D.status==="error"&&R(D.value)}function c(o,v){var T={};try{T.value=o(v),T.status="success"}catch(R){T.status="error",T.value=R}return T}(i.exports=x).prototype.finally=function(o){if(typeof o!="function")return this;var v=this.constructor;return this.then(function(T){return v.resolve(o()).then(function(){return T})},function(T){return v.resolve(o()).then(function(){throw T})})},x.prototype.catch=function(o){return this.then(null,o)},x.prototype.then=function(o,v){if(typeof o!="function"&&this.state===E||typeof v!="function"&&this.state===g)return this;var T=new this.constructor(a);return this.state!==M?f(T,this.state===E?o:v,this.outcome):this.queue.push(new d(T,o,v)),T},d.prototype.callFulfilled=function(o){l.resolve(this.promise,o)},d.prototype.otherCallFulfilled=function(o){f(this.promise,this.onFulfilled,o)},d.prototype.callRejected=function(o){l.reject(this.promise,o)},d.prototype.otherCallRejected=function(o){f(this.promise,this.onRejected,o)},l.resolve=function(o,v){var T=c(S,v);if(T.status==="error")return l.reject(o,T.value);var R=T.value;if(R)_(o,R);else{o.state=E,o.outcome=v;for(var P=-1,D=o.queue.length;++P<D;)o.queue[P].callFulfilled(v)}return o},l.reject=function(o,v){o.state=g,o.outcome=v;for(var T=-1,R=o.queue.length;++T<R;)o.queue[T].callRejected(v);return o},x.resolve=function(o){return o instanceof this?o:l.resolve(new this(a),o)},x.reject=function(o){var v=new this(a);return l.reject(v,o)},x.all=function(o){var v=this;if(Object.prototype.toString.call(o)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=o.length,R=!1;if(!T)return this.resolve([]);for(var P=new Array(T),D=0,L=-1,b=new this(a);++L<T;)A(o[L],L);return b;function A(Y,F){v.resolve(Y).then(function(C){P[F]=C,++D!==T||R||(R=!0,l.resolve(b,P))},function(C){R||(R=!0,l.reject(b,C))})}},x.race=function(o){var v=this;if(Object.prototype.toString.call(o)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=o.length,R=!1;if(!T)return this.resolve([]);for(var P=-1,D=new this(a);++P<T;)L=o[P],v.resolve(L).then(function(b){R||(R=!0,l.resolve(D,b))},function(b){R||(R=!0,l.reject(D,b))});var L;return D}},{immediate:36}],38:[function(t,i,s){var r={};(0,t("./lib/utils/common").assign)(r,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),i.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,i,s){var r=t("./zlib/deflate"),a=t("./utils/common"),l=t("./utils/strings"),g=t("./zlib/messages"),E=t("./zlib/zstream"),M=Object.prototype.toString,x=0,d=-1,f=0,S=8;function _(o){if(!(this instanceof _))return new _(o);this.options=a.assign({level:d,method:S,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},o||{});var v=this.options;v.raw&&0<v.windowBits?v.windowBits=-v.windowBits:v.gzip&&0<v.windowBits&&v.windowBits<16&&(v.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new E,this.strm.avail_out=0;var T=r.deflateInit2(this.strm,v.level,v.method,v.windowBits,v.memLevel,v.strategy);if(T!==x)throw new Error(g[T]);if(v.header&&r.deflateSetHeader(this.strm,v.header),v.dictionary){var R;if(R=typeof v.dictionary=="string"?l.string2buf(v.dictionary):M.call(v.dictionary)==="[object ArrayBuffer]"?new Uint8Array(v.dictionary):v.dictionary,(T=r.deflateSetDictionary(this.strm,R))!==x)throw new Error(g[T]);this._dict_set=!0}}function c(o,v){var T=new _(v);if(T.push(o,!0),T.err)throw T.msg||g[T.err];return T.result}_.prototype.push=function(o,v){var T,R,P=this.strm,D=this.options.chunkSize;if(this.ended)return!1;R=v===~~v?v:v===!0?4:0,typeof o=="string"?P.input=l.string2buf(o):M.call(o)==="[object ArrayBuffer]"?P.input=new Uint8Array(o):P.input=o,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new a.Buf8(D),P.next_out=0,P.avail_out=D),(T=r.deflate(P,R))!==1&&T!==x)return this.onEnd(T),!(this.ended=!0);P.avail_out!==0&&(P.avail_in!==0||R!==4&&R!==2)||(this.options.to==="string"?this.onData(l.buf2binstring(a.shrinkBuf(P.output,P.next_out))):this.onData(a.shrinkBuf(P.output,P.next_out)))}while((0<P.avail_in||P.avail_out===0)&&T!==1);return R===4?(T=r.deflateEnd(this.strm),this.onEnd(T),this.ended=!0,T===x):R!==2||(this.onEnd(x),!(P.avail_out=0))},_.prototype.onData=function(o){this.chunks.push(o)},_.prototype.onEnd=function(o){o===x&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=o,this.msg=this.strm.msg},s.Deflate=_,s.deflate=c,s.deflateRaw=function(o,v){return(v=v||{}).raw=!0,c(o,v)},s.gzip=function(o,v){return(v=v||{}).gzip=!0,c(o,v)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,i,s){var r=t("./zlib/inflate"),a=t("./utils/common"),l=t("./utils/strings"),g=t("./zlib/constants"),E=t("./zlib/messages"),M=t("./zlib/zstream"),x=t("./zlib/gzheader"),d=Object.prototype.toString;function f(_){if(!(this instanceof f))return new f(_);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},_||{});var c=this.options;c.raw&&0<=c.windowBits&&c.windowBits<16&&(c.windowBits=-c.windowBits,c.windowBits===0&&(c.windowBits=-15)),!(0<=c.windowBits&&c.windowBits<16)||_&&_.windowBits||(c.windowBits+=32),15<c.windowBits&&c.windowBits<48&&(15&c.windowBits)==0&&(c.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new M,this.strm.avail_out=0;var o=r.inflateInit2(this.strm,c.windowBits);if(o!==g.Z_OK)throw new Error(E[o]);this.header=new x,r.inflateGetHeader(this.strm,this.header)}function S(_,c){var o=new f(c);if(o.push(_,!0),o.err)throw o.msg||E[o.err];return o.result}f.prototype.push=function(_,c){var o,v,T,R,P,D,L=this.strm,b=this.options.chunkSize,A=this.options.dictionary,Y=!1;if(this.ended)return!1;v=c===~~c?c:c===!0?g.Z_FINISH:g.Z_NO_FLUSH,typeof _=="string"?L.input=l.binstring2buf(_):d.call(_)==="[object ArrayBuffer]"?L.input=new Uint8Array(_):L.input=_,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new a.Buf8(b),L.next_out=0,L.avail_out=b),(o=r.inflate(L,g.Z_NO_FLUSH))===g.Z_NEED_DICT&&A&&(D=typeof A=="string"?l.string2buf(A):d.call(A)==="[object ArrayBuffer]"?new Uint8Array(A):A,o=r.inflateSetDictionary(this.strm,D)),o===g.Z_BUF_ERROR&&Y===!0&&(o=g.Z_OK,Y=!1),o!==g.Z_STREAM_END&&o!==g.Z_OK)return this.onEnd(o),!(this.ended=!0);L.next_out&&(L.avail_out!==0&&o!==g.Z_STREAM_END&&(L.avail_in!==0||v!==g.Z_FINISH&&v!==g.Z_SYNC_FLUSH)||(this.options.to==="string"?(T=l.utf8border(L.output,L.next_out),R=L.next_out-T,P=l.buf2string(L.output,T),L.next_out=R,L.avail_out=b-R,R&&a.arraySet(L.output,L.output,T,R,0),this.onData(P)):this.onData(a.shrinkBuf(L.output,L.next_out)))),L.avail_in===0&&L.avail_out===0&&(Y=!0)}while((0<L.avail_in||L.avail_out===0)&&o!==g.Z_STREAM_END);return o===g.Z_STREAM_END&&(v=g.Z_FINISH),v===g.Z_FINISH?(o=r.inflateEnd(this.strm),this.onEnd(o),this.ended=!0,o===g.Z_OK):v!==g.Z_SYNC_FLUSH||(this.onEnd(g.Z_OK),!(L.avail_out=0))},f.prototype.onData=function(_){this.chunks.push(_)},f.prototype.onEnd=function(_){_===g.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},s.Inflate=f,s.inflate=S,s.inflateRaw=function(_,c){return(c=c||{}).raw=!0,S(_,c)},s.ungzip=S},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,i,s){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";s.assign=function(g){for(var E=Array.prototype.slice.call(arguments,1);E.length;){var M=E.shift();if(M){if(typeof M!="object")throw new TypeError(M+"must be non-object");for(var x in M)M.hasOwnProperty(x)&&(g[x]=M[x])}}return g},s.shrinkBuf=function(g,E){return g.length===E?g:g.subarray?g.subarray(0,E):(g.length=E,g)};var a={arraySet:function(g,E,M,x,d){if(E.subarray&&g.subarray)g.set(E.subarray(M,M+x),d);else for(var f=0;f<x;f++)g[d+f]=E[M+f]},flattenChunks:function(g){var E,M,x,d,f,S;for(E=x=0,M=g.length;E<M;E++)x+=g[E].length;for(S=new Uint8Array(x),E=d=0,M=g.length;E<M;E++)f=g[E],S.set(f,d),d+=f.length;return S}},l={arraySet:function(g,E,M,x,d){for(var f=0;f<x;f++)g[d+f]=E[M+f]},flattenChunks:function(g){return[].concat.apply([],g)}};s.setTyped=function(g){g?(s.Buf8=Uint8Array,s.Buf16=Uint16Array,s.Buf32=Int32Array,s.assign(s,a)):(s.Buf8=Array,s.Buf16=Array,s.Buf32=Array,s.assign(s,l))},s.setTyped(r)},{}],42:[function(t,i,s){var r=t("./common"),a=!0,l=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{l=!1}for(var g=new r.Buf8(256),E=0;E<256;E++)g[E]=252<=E?6:248<=E?5:240<=E?4:224<=E?3:192<=E?2:1;function M(x,d){if(d<65537&&(x.subarray&&l||!x.subarray&&a))return String.fromCharCode.apply(null,r.shrinkBuf(x,d));for(var f="",S=0;S<d;S++)f+=String.fromCharCode(x[S]);return f}g[254]=g[254]=1,s.string2buf=function(x){var d,f,S,_,c,o=x.length,v=0;for(_=0;_<o;_++)(64512&(f=x.charCodeAt(_)))==55296&&_+1<o&&(64512&(S=x.charCodeAt(_+1)))==56320&&(f=65536+(f-55296<<10)+(S-56320),_++),v+=f<128?1:f<2048?2:f<65536?3:4;for(d=new r.Buf8(v),_=c=0;c<v;_++)(64512&(f=x.charCodeAt(_)))==55296&&_+1<o&&(64512&(S=x.charCodeAt(_+1)))==56320&&(f=65536+(f-55296<<10)+(S-56320),_++),f<128?d[c++]=f:(f<2048?d[c++]=192|f>>>6:(f<65536?d[c++]=224|f>>>12:(d[c++]=240|f>>>18,d[c++]=128|f>>>12&63),d[c++]=128|f>>>6&63),d[c++]=128|63&f);return d},s.buf2binstring=function(x){return M(x,x.length)},s.binstring2buf=function(x){for(var d=new r.Buf8(x.length),f=0,S=d.length;f<S;f++)d[f]=x.charCodeAt(f);return d},s.buf2string=function(x,d){var f,S,_,c,o=d||x.length,v=new Array(2*o);for(f=S=0;f<o;)if((_=x[f++])<128)v[S++]=_;else if(4<(c=g[_]))v[S++]=65533,f+=c-1;else{for(_&=c===2?31:c===3?15:7;1<c&&f<o;)_=_<<6|63&x[f++],c--;1<c?v[S++]=65533:_<65536?v[S++]=_:(_-=65536,v[S++]=55296|_>>10&1023,v[S++]=56320|1023&_)}return M(v,S)},s.utf8border=function(x,d){var f;for((d=d||x.length)>x.length&&(d=x.length),f=d-1;0<=f&&(192&x[f])==128;)f--;return f<0||f===0?d:f+g[x[f]]>d?f:d}},{"./common":41}],43:[function(t,i,s){i.exports=function(r,a,l,g){for(var E=65535&r|0,M=r>>>16&65535|0,x=0;l!==0;){for(l-=x=2e3<l?2e3:l;M=M+(E=E+a[g++]|0)|0,--x;);E%=65521,M%=65521}return E|M<<16|0}},{}],44:[function(t,i,s){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,i,s){var r=(function(){for(var a,l=[],g=0;g<256;g++){a=g;for(var E=0;E<8;E++)a=1&a?3988292384^a>>>1:a>>>1;l[g]=a}return l})();i.exports=function(a,l,g,E){var M=r,x=E+g;a^=-1;for(var d=E;d<x;d++)a=a>>>8^M[255&(a^l[d])];return-1^a}},{}],46:[function(t,i,s){var r,a=t("../utils/common"),l=t("./trees"),g=t("./adler32"),E=t("./crc32"),M=t("./messages"),x=0,d=4,f=0,S=-2,_=-1,c=4,o=2,v=8,T=9,R=286,P=30,D=19,L=2*R+1,b=15,A=3,Y=258,F=Y+A+1,C=42,N=113,u=1,B=2,X=3,O=4;function Q(p,ee){return p.msg=M[ee],ee}function W(p){return(p<<1)-(4<p?9:0)}function ce(p){for(var ee=p.length;0<=--ee;)p[ee]=0}function H(p){var ee=p.state,q=ee.pending;q>p.avail_out&&(q=p.avail_out),q!==0&&(a.arraySet(p.output,ee.pending_buf,ee.pending_out,q,p.next_out),p.next_out+=q,ee.pending_out+=q,p.total_out+=q,p.avail_out-=q,ee.pending-=q,ee.pending===0&&(ee.pending_out=0))}function G(p,ee){l._tr_flush_block(p,0<=p.block_start?p.block_start:-1,p.strstart-p.block_start,ee),p.block_start=p.strstart,H(p.strm)}function he(p,ee){p.pending_buf[p.pending++]=ee}function me(p,ee){p.pending_buf[p.pending++]=ee>>>8&255,p.pending_buf[p.pending++]=255&ee}function fe(p,ee){var q,I,h=p.max_chain_length,V=p.strstart,ie=p.prev_length,ae=p.nice_match,k=p.strstart>p.w_size-F?p.strstart-(p.w_size-F):0,w=p.window,m=p.w_mask,U=p.prev,Z=p.strstart+Y,re=w[V+ie-1],j=w[V+ie];p.prev_length>=p.good_match&&(h>>=2),ae>p.lookahead&&(ae=p.lookahead);do if(w[(q=ee)+ie]===j&&w[q+ie-1]===re&&w[q]===w[V]&&w[++q]===w[V+1]){V+=2,q++;do;while(w[++V]===w[++q]&&w[++V]===w[++q]&&w[++V]===w[++q]&&w[++V]===w[++q]&&w[++V]===w[++q]&&w[++V]===w[++q]&&w[++V]===w[++q]&&w[++V]===w[++q]&&V<Z);if(I=Y-(Z-V),V=Z-Y,ie<I){if(p.match_start=ee,ae<=(ie=I))break;re=w[V+ie-1],j=w[V+ie]}}while((ee=U[ee&m])>k&&--h!=0);return ie<=p.lookahead?ie:p.lookahead}function ne(p){var ee,q,I,h,V,ie,ae,k,w,m,U=p.w_size;do{if(h=p.window_size-p.lookahead-p.strstart,p.strstart>=U+(U-F)){for(a.arraySet(p.window,p.window,U,U,0),p.match_start-=U,p.strstart-=U,p.block_start-=U,ee=q=p.hash_size;I=p.head[--ee],p.head[ee]=U<=I?I-U:0,--q;);for(ee=q=U;I=p.prev[--ee],p.prev[ee]=U<=I?I-U:0,--q;);h+=U}if(p.strm.avail_in===0)break;if(ie=p.strm,ae=p.window,k=p.strstart+p.lookahead,w=h,m=void 0,m=ie.avail_in,w<m&&(m=w),q=m===0?0:(ie.avail_in-=m,a.arraySet(ae,ie.input,ie.next_in,m,k),ie.state.wrap===1?ie.adler=g(ie.adler,ae,m,k):ie.state.wrap===2&&(ie.adler=E(ie.adler,ae,m,k)),ie.next_in+=m,ie.total_in+=m,m),p.lookahead+=q,p.lookahead+p.insert>=A)for(V=p.strstart-p.insert,p.ins_h=p.window[V],p.ins_h=(p.ins_h<<p.hash_shift^p.window[V+1])&p.hash_mask;p.insert&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[V+A-1])&p.hash_mask,p.prev[V&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=V,V++,p.insert--,!(p.lookahead+p.insert<A)););}while(p.lookahead<F&&p.strm.avail_in!==0)}function ue(p,ee){for(var q,I;;){if(p.lookahead<F){if(ne(p),p.lookahead<F&&ee===x)return u;if(p.lookahead===0)break}if(q=0,p.lookahead>=A&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+A-1])&p.hash_mask,q=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart),q!==0&&p.strstart-q<=p.w_size-F&&(p.match_length=fe(p,q)),p.match_length>=A)if(I=l._tr_tally(p,p.strstart-p.match_start,p.match_length-A),p.lookahead-=p.match_length,p.match_length<=p.max_lazy_match&&p.lookahead>=A){for(p.match_length--;p.strstart++,p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+A-1])&p.hash_mask,q=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart,--p.match_length!=0;);p.strstart++}else p.strstart+=p.match_length,p.match_length=0,p.ins_h=p.window[p.strstart],p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+1])&p.hash_mask;else I=l._tr_tally(p,0,p.window[p.strstart]),p.lookahead--,p.strstart++;if(I&&(G(p,!1),p.strm.avail_out===0))return u}return p.insert=p.strstart<A-1?p.strstart:A-1,ee===d?(G(p,!0),p.strm.avail_out===0?X:O):p.last_lit&&(G(p,!1),p.strm.avail_out===0)?u:B}function se(p,ee){for(var q,I,h;;){if(p.lookahead<F){if(ne(p),p.lookahead<F&&ee===x)return u;if(p.lookahead===0)break}if(q=0,p.lookahead>=A&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+A-1])&p.hash_mask,q=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart),p.prev_length=p.match_length,p.prev_match=p.match_start,p.match_length=A-1,q!==0&&p.prev_length<p.max_lazy_match&&p.strstart-q<=p.w_size-F&&(p.match_length=fe(p,q),p.match_length<=5&&(p.strategy===1||p.match_length===A&&4096<p.strstart-p.match_start)&&(p.match_length=A-1)),p.prev_length>=A&&p.match_length<=p.prev_length){for(h=p.strstart+p.lookahead-A,I=l._tr_tally(p,p.strstart-1-p.prev_match,p.prev_length-A),p.lookahead-=p.prev_length-1,p.prev_length-=2;++p.strstart<=h&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+A-1])&p.hash_mask,q=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart),--p.prev_length!=0;);if(p.match_available=0,p.match_length=A-1,p.strstart++,I&&(G(p,!1),p.strm.avail_out===0))return u}else if(p.match_available){if((I=l._tr_tally(p,0,p.window[p.strstart-1]))&&G(p,!1),p.strstart++,p.lookahead--,p.strm.avail_out===0)return u}else p.match_available=1,p.strstart++,p.lookahead--}return p.match_available&&(I=l._tr_tally(p,0,p.window[p.strstart-1]),p.match_available=0),p.insert=p.strstart<A-1?p.strstart:A-1,ee===d?(G(p,!0),p.strm.avail_out===0?X:O):p.last_lit&&(G(p,!1),p.strm.avail_out===0)?u:B}function Me(p,ee,q,I,h){this.good_length=p,this.max_lazy=ee,this.nice_length=q,this.max_chain=I,this.func=h}function Re(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*L),this.dyn_dtree=new a.Buf16(2*(2*P+1)),this.bl_tree=new a.Buf16(2*(2*D+1)),ce(this.dyn_ltree),ce(this.dyn_dtree),ce(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(b+1),this.heap=new a.Buf16(2*R+1),ce(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*R+1),ce(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ye(p){var ee;return p&&p.state?(p.total_in=p.total_out=0,p.data_type=o,(ee=p.state).pending=0,ee.pending_out=0,ee.wrap<0&&(ee.wrap=-ee.wrap),ee.status=ee.wrap?C:N,p.adler=ee.wrap===2?0:1,ee.last_flush=x,l._tr_init(ee),f):Q(p,S)}function qe(p){var ee=ye(p);return ee===f&&(function(q){q.window_size=2*q.w_size,ce(q.head),q.max_lazy_match=r[q.level].max_lazy,q.good_match=r[q.level].good_length,q.nice_match=r[q.level].nice_length,q.max_chain_length=r[q.level].max_chain,q.strstart=0,q.block_start=0,q.lookahead=0,q.insert=0,q.match_length=q.prev_length=A-1,q.match_available=0,q.ins_h=0})(p.state),ee}function ke(p,ee,q,I,h,V){if(!p)return S;var ie=1;if(ee===_&&(ee=6),I<0?(ie=0,I=-I):15<I&&(ie=2,I-=16),h<1||T<h||q!==v||I<8||15<I||ee<0||9<ee||V<0||c<V)return Q(p,S);I===8&&(I=9);var ae=new Re;return(p.state=ae).strm=p,ae.wrap=ie,ae.gzhead=null,ae.w_bits=I,ae.w_size=1<<ae.w_bits,ae.w_mask=ae.w_size-1,ae.hash_bits=h+7,ae.hash_size=1<<ae.hash_bits,ae.hash_mask=ae.hash_size-1,ae.hash_shift=~~((ae.hash_bits+A-1)/A),ae.window=new a.Buf8(2*ae.w_size),ae.head=new a.Buf16(ae.hash_size),ae.prev=new a.Buf16(ae.w_size),ae.lit_bufsize=1<<h+6,ae.pending_buf_size=4*ae.lit_bufsize,ae.pending_buf=new a.Buf8(ae.pending_buf_size),ae.d_buf=1*ae.lit_bufsize,ae.l_buf=3*ae.lit_bufsize,ae.level=ee,ae.strategy=V,ae.method=q,qe(p)}r=[new Me(0,0,0,0,function(p,ee){var q=65535;for(q>p.pending_buf_size-5&&(q=p.pending_buf_size-5);;){if(p.lookahead<=1){if(ne(p),p.lookahead===0&&ee===x)return u;if(p.lookahead===0)break}p.strstart+=p.lookahead,p.lookahead=0;var I=p.block_start+q;if((p.strstart===0||p.strstart>=I)&&(p.lookahead=p.strstart-I,p.strstart=I,G(p,!1),p.strm.avail_out===0)||p.strstart-p.block_start>=p.w_size-F&&(G(p,!1),p.strm.avail_out===0))return u}return p.insert=0,ee===d?(G(p,!0),p.strm.avail_out===0?X:O):(p.strstart>p.block_start&&(G(p,!1),p.strm.avail_out),u)}),new Me(4,4,8,4,ue),new Me(4,5,16,8,ue),new Me(4,6,32,32,ue),new Me(4,4,16,16,se),new Me(8,16,32,32,se),new Me(8,16,128,128,se),new Me(8,32,128,256,se),new Me(32,128,258,1024,se),new Me(32,258,258,4096,se)],s.deflateInit=function(p,ee){return ke(p,ee,v,15,8,0)},s.deflateInit2=ke,s.deflateReset=qe,s.deflateResetKeep=ye,s.deflateSetHeader=function(p,ee){return p&&p.state?p.state.wrap!==2?S:(p.state.gzhead=ee,f):S},s.deflate=function(p,ee){var q,I,h,V;if(!p||!p.state||5<ee||ee<0)return p?Q(p,S):S;if(I=p.state,!p.output||!p.input&&p.avail_in!==0||I.status===666&&ee!==d)return Q(p,p.avail_out===0?-5:S);if(I.strm=p,q=I.last_flush,I.last_flush=ee,I.status===C)if(I.wrap===2)p.adler=0,he(I,31),he(I,139),he(I,8),I.gzhead?(he(I,(I.gzhead.text?1:0)+(I.gzhead.hcrc?2:0)+(I.gzhead.extra?4:0)+(I.gzhead.name?8:0)+(I.gzhead.comment?16:0)),he(I,255&I.gzhead.time),he(I,I.gzhead.time>>8&255),he(I,I.gzhead.time>>16&255),he(I,I.gzhead.time>>24&255),he(I,I.level===9?2:2<=I.strategy||I.level<2?4:0),he(I,255&I.gzhead.os),I.gzhead.extra&&I.gzhead.extra.length&&(he(I,255&I.gzhead.extra.length),he(I,I.gzhead.extra.length>>8&255)),I.gzhead.hcrc&&(p.adler=E(p.adler,I.pending_buf,I.pending,0)),I.gzindex=0,I.status=69):(he(I,0),he(I,0),he(I,0),he(I,0),he(I,0),he(I,I.level===9?2:2<=I.strategy||I.level<2?4:0),he(I,3),I.status=N);else{var ie=v+(I.w_bits-8<<4)<<8;ie|=(2<=I.strategy||I.level<2?0:I.level<6?1:I.level===6?2:3)<<6,I.strstart!==0&&(ie|=32),ie+=31-ie%31,I.status=N,me(I,ie),I.strstart!==0&&(me(I,p.adler>>>16),me(I,65535&p.adler)),p.adler=1}if(I.status===69)if(I.gzhead.extra){for(h=I.pending;I.gzindex<(65535&I.gzhead.extra.length)&&(I.pending!==I.pending_buf_size||(I.gzhead.hcrc&&I.pending>h&&(p.adler=E(p.adler,I.pending_buf,I.pending-h,h)),H(p),h=I.pending,I.pending!==I.pending_buf_size));)he(I,255&I.gzhead.extra[I.gzindex]),I.gzindex++;I.gzhead.hcrc&&I.pending>h&&(p.adler=E(p.adler,I.pending_buf,I.pending-h,h)),I.gzindex===I.gzhead.extra.length&&(I.gzindex=0,I.status=73)}else I.status=73;if(I.status===73)if(I.gzhead.name){h=I.pending;do{if(I.pending===I.pending_buf_size&&(I.gzhead.hcrc&&I.pending>h&&(p.adler=E(p.adler,I.pending_buf,I.pending-h,h)),H(p),h=I.pending,I.pending===I.pending_buf_size)){V=1;break}V=I.gzindex<I.gzhead.name.length?255&I.gzhead.name.charCodeAt(I.gzindex++):0,he(I,V)}while(V!==0);I.gzhead.hcrc&&I.pending>h&&(p.adler=E(p.adler,I.pending_buf,I.pending-h,h)),V===0&&(I.gzindex=0,I.status=91)}else I.status=91;if(I.status===91)if(I.gzhead.comment){h=I.pending;do{if(I.pending===I.pending_buf_size&&(I.gzhead.hcrc&&I.pending>h&&(p.adler=E(p.adler,I.pending_buf,I.pending-h,h)),H(p),h=I.pending,I.pending===I.pending_buf_size)){V=1;break}V=I.gzindex<I.gzhead.comment.length?255&I.gzhead.comment.charCodeAt(I.gzindex++):0,he(I,V)}while(V!==0);I.gzhead.hcrc&&I.pending>h&&(p.adler=E(p.adler,I.pending_buf,I.pending-h,h)),V===0&&(I.status=103)}else I.status=103;if(I.status===103&&(I.gzhead.hcrc?(I.pending+2>I.pending_buf_size&&H(p),I.pending+2<=I.pending_buf_size&&(he(I,255&p.adler),he(I,p.adler>>8&255),p.adler=0,I.status=N)):I.status=N),I.pending!==0){if(H(p),p.avail_out===0)return I.last_flush=-1,f}else if(p.avail_in===0&&W(ee)<=W(q)&&ee!==d)return Q(p,-5);if(I.status===666&&p.avail_in!==0)return Q(p,-5);if(p.avail_in!==0||I.lookahead!==0||ee!==x&&I.status!==666){var ae=I.strategy===2?(function(k,w){for(var m;;){if(k.lookahead===0&&(ne(k),k.lookahead===0)){if(w===x)return u;break}if(k.match_length=0,m=l._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++,m&&(G(k,!1),k.strm.avail_out===0))return u}return k.insert=0,w===d?(G(k,!0),k.strm.avail_out===0?X:O):k.last_lit&&(G(k,!1),k.strm.avail_out===0)?u:B})(I,ee):I.strategy===3?(function(k,w){for(var m,U,Z,re,j=k.window;;){if(k.lookahead<=Y){if(ne(k),k.lookahead<=Y&&w===x)return u;if(k.lookahead===0)break}if(k.match_length=0,k.lookahead>=A&&0<k.strstart&&(U=j[Z=k.strstart-1])===j[++Z]&&U===j[++Z]&&U===j[++Z]){re=k.strstart+Y;do;while(U===j[++Z]&&U===j[++Z]&&U===j[++Z]&&U===j[++Z]&&U===j[++Z]&&U===j[++Z]&&U===j[++Z]&&U===j[++Z]&&Z<re);k.match_length=Y-(re-Z),k.match_length>k.lookahead&&(k.match_length=k.lookahead)}if(k.match_length>=A?(m=l._tr_tally(k,1,k.match_length-A),k.lookahead-=k.match_length,k.strstart+=k.match_length,k.match_length=0):(m=l._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++),m&&(G(k,!1),k.strm.avail_out===0))return u}return k.insert=0,w===d?(G(k,!0),k.strm.avail_out===0?X:O):k.last_lit&&(G(k,!1),k.strm.avail_out===0)?u:B})(I,ee):r[I.level].func(I,ee);if(ae!==X&&ae!==O||(I.status=666),ae===u||ae===X)return p.avail_out===0&&(I.last_flush=-1),f;if(ae===B&&(ee===1?l._tr_align(I):ee!==5&&(l._tr_stored_block(I,0,0,!1),ee===3&&(ce(I.head),I.lookahead===0&&(I.strstart=0,I.block_start=0,I.insert=0))),H(p),p.avail_out===0))return I.last_flush=-1,f}return ee!==d?f:I.wrap<=0?1:(I.wrap===2?(he(I,255&p.adler),he(I,p.adler>>8&255),he(I,p.adler>>16&255),he(I,p.adler>>24&255),he(I,255&p.total_in),he(I,p.total_in>>8&255),he(I,p.total_in>>16&255),he(I,p.total_in>>24&255)):(me(I,p.adler>>>16),me(I,65535&p.adler)),H(p),0<I.wrap&&(I.wrap=-I.wrap),I.pending!==0?f:1)},s.deflateEnd=function(p){var ee;return p&&p.state?(ee=p.state.status)!==C&&ee!==69&&ee!==73&&ee!==91&&ee!==103&&ee!==N&&ee!==666?Q(p,S):(p.state=null,ee===N?Q(p,-3):f):S},s.deflateSetDictionary=function(p,ee){var q,I,h,V,ie,ae,k,w,m=ee.length;if(!p||!p.state||(V=(q=p.state).wrap)===2||V===1&&q.status!==C||q.lookahead)return S;for(V===1&&(p.adler=g(p.adler,ee,m,0)),q.wrap=0,m>=q.w_size&&(V===0&&(ce(q.head),q.strstart=0,q.block_start=0,q.insert=0),w=new a.Buf8(q.w_size),a.arraySet(w,ee,m-q.w_size,q.w_size,0),ee=w,m=q.w_size),ie=p.avail_in,ae=p.next_in,k=p.input,p.avail_in=m,p.next_in=0,p.input=ee,ne(q);q.lookahead>=A;){for(I=q.strstart,h=q.lookahead-(A-1);q.ins_h=(q.ins_h<<q.hash_shift^q.window[I+A-1])&q.hash_mask,q.prev[I&q.w_mask]=q.head[q.ins_h],q.head[q.ins_h]=I,I++,--h;);q.strstart=I,q.lookahead=A-1,ne(q)}return q.strstart+=q.lookahead,q.block_start=q.strstart,q.insert=q.lookahead,q.lookahead=0,q.match_length=q.prev_length=A-1,q.match_available=0,p.next_in=ae,p.input=k,p.avail_in=ie,q.wrap=V,f},s.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,i,s){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,i,s){i.exports=function(r,a){var l,g,E,M,x,d,f,S,_,c,o,v,T,R,P,D,L,b,A,Y,F,C,N,u,B;l=r.state,g=r.next_in,u=r.input,E=g+(r.avail_in-5),M=r.next_out,B=r.output,x=M-(a-r.avail_out),d=M+(r.avail_out-257),f=l.dmax,S=l.wsize,_=l.whave,c=l.wnext,o=l.window,v=l.hold,T=l.bits,R=l.lencode,P=l.distcode,D=(1<<l.lenbits)-1,L=(1<<l.distbits)-1;e:do{T<15&&(v+=u[g++]<<T,T+=8,v+=u[g++]<<T,T+=8),b=R[v&D];t:for(;;){if(v>>>=A=b>>>24,T-=A,(A=b>>>16&255)===0)B[M++]=65535&b;else{if(!(16&A)){if((64&A)==0){b=R[(65535&b)+(v&(1<<A)-1)];continue t}if(32&A){l.mode=12;break e}r.msg="invalid literal/length code",l.mode=30;break e}Y=65535&b,(A&=15)&&(T<A&&(v+=u[g++]<<T,T+=8),Y+=v&(1<<A)-1,v>>>=A,T-=A),T<15&&(v+=u[g++]<<T,T+=8,v+=u[g++]<<T,T+=8),b=P[v&L];n:for(;;){if(v>>>=A=b>>>24,T-=A,!(16&(A=b>>>16&255))){if((64&A)==0){b=P[(65535&b)+(v&(1<<A)-1)];continue n}r.msg="invalid distance code",l.mode=30;break e}if(F=65535&b,T<(A&=15)&&(v+=u[g++]<<T,(T+=8)<A&&(v+=u[g++]<<T,T+=8)),f<(F+=v&(1<<A)-1)){r.msg="invalid distance too far back",l.mode=30;break e}if(v>>>=A,T-=A,(A=M-x)<F){if(_<(A=F-A)&&l.sane){r.msg="invalid distance too far back",l.mode=30;break e}if(N=o,(C=0)===c){if(C+=S-A,A<Y){for(Y-=A;B[M++]=o[C++],--A;);C=M-F,N=B}}else if(c<A){if(C+=S+c-A,(A-=c)<Y){for(Y-=A;B[M++]=o[C++],--A;);if(C=0,c<Y){for(Y-=A=c;B[M++]=o[C++],--A;);C=M-F,N=B}}}else if(C+=c-A,A<Y){for(Y-=A;B[M++]=o[C++],--A;);C=M-F,N=B}for(;2<Y;)B[M++]=N[C++],B[M++]=N[C++],B[M++]=N[C++],Y-=3;Y&&(B[M++]=N[C++],1<Y&&(B[M++]=N[C++]))}else{for(C=M-F;B[M++]=B[C++],B[M++]=B[C++],B[M++]=B[C++],2<(Y-=3););Y&&(B[M++]=B[C++],1<Y&&(B[M++]=B[C++]))}break}}break}}while(g<E&&M<d);g-=Y=T>>3,v&=(1<<(T-=Y<<3))-1,r.next_in=g,r.next_out=M,r.avail_in=g<E?E-g+5:5-(g-E),r.avail_out=M<d?d-M+257:257-(M-d),l.hold=v,l.bits=T}},{}],49:[function(t,i,s){var r=t("../utils/common"),a=t("./adler32"),l=t("./crc32"),g=t("./inffast"),E=t("./inftrees"),M=1,x=2,d=0,f=-2,S=1,_=852,c=592;function o(C){return(C>>>24&255)+(C>>>8&65280)+((65280&C)<<8)+((255&C)<<24)}function v(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function T(C){var N;return C&&C.state?(N=C.state,C.total_in=C.total_out=N.total=0,C.msg="",N.wrap&&(C.adler=1&N.wrap),N.mode=S,N.last=0,N.havedict=0,N.dmax=32768,N.head=null,N.hold=0,N.bits=0,N.lencode=N.lendyn=new r.Buf32(_),N.distcode=N.distdyn=new r.Buf32(c),N.sane=1,N.back=-1,d):f}function R(C){var N;return C&&C.state?((N=C.state).wsize=0,N.whave=0,N.wnext=0,T(C)):f}function P(C,N){var u,B;return C&&C.state?(B=C.state,N<0?(u=0,N=-N):(u=1+(N>>4),N<48&&(N&=15)),N&&(N<8||15<N)?f:(B.window!==null&&B.wbits!==N&&(B.window=null),B.wrap=u,B.wbits=N,R(C))):f}function D(C,N){var u,B;return C?(B=new v,(C.state=B).window=null,(u=P(C,N))!==d&&(C.state=null),u):f}var L,b,A=!0;function Y(C){if(A){var N;for(L=new r.Buf32(512),b=new r.Buf32(32),N=0;N<144;)C.lens[N++]=8;for(;N<256;)C.lens[N++]=9;for(;N<280;)C.lens[N++]=7;for(;N<288;)C.lens[N++]=8;for(E(M,C.lens,0,288,L,0,C.work,{bits:9}),N=0;N<32;)C.lens[N++]=5;E(x,C.lens,0,32,b,0,C.work,{bits:5}),A=!1}C.lencode=L,C.lenbits=9,C.distcode=b,C.distbits=5}function F(C,N,u,B){var X,O=C.state;return O.window===null&&(O.wsize=1<<O.wbits,O.wnext=0,O.whave=0,O.window=new r.Buf8(O.wsize)),B>=O.wsize?(r.arraySet(O.window,N,u-O.wsize,O.wsize,0),O.wnext=0,O.whave=O.wsize):(B<(X=O.wsize-O.wnext)&&(X=B),r.arraySet(O.window,N,u-B,X,O.wnext),(B-=X)?(r.arraySet(O.window,N,u-B,B,0),O.wnext=B,O.whave=O.wsize):(O.wnext+=X,O.wnext===O.wsize&&(O.wnext=0),O.whave<O.wsize&&(O.whave+=X))),0}s.inflateReset=R,s.inflateReset2=P,s.inflateResetKeep=T,s.inflateInit=function(C){return D(C,15)},s.inflateInit2=D,s.inflate=function(C,N){var u,B,X,O,Q,W,ce,H,G,he,me,fe,ne,ue,se,Me,Re,ye,qe,ke,p,ee,q,I,h=0,V=new r.Buf8(4),ie=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!C||!C.state||!C.output||!C.input&&C.avail_in!==0)return f;(u=C.state).mode===12&&(u.mode=13),Q=C.next_out,X=C.output,ce=C.avail_out,O=C.next_in,B=C.input,W=C.avail_in,H=u.hold,G=u.bits,he=W,me=ce,ee=d;e:for(;;)switch(u.mode){case S:if(u.wrap===0){u.mode=13;break}for(;G<16;){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}if(2&u.wrap&&H===35615){V[u.check=0]=255&H,V[1]=H>>>8&255,u.check=l(u.check,V,2,0),G=H=0,u.mode=2;break}if(u.flags=0,u.head&&(u.head.done=!1),!(1&u.wrap)||(((255&H)<<8)+(H>>8))%31){C.msg="incorrect header check",u.mode=30;break}if((15&H)!=8){C.msg="unknown compression method",u.mode=30;break}if(G-=4,p=8+(15&(H>>>=4)),u.wbits===0)u.wbits=p;else if(p>u.wbits){C.msg="invalid window size",u.mode=30;break}u.dmax=1<<p,C.adler=u.check=1,u.mode=512&H?10:12,G=H=0;break;case 2:for(;G<16;){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}if(u.flags=H,(255&u.flags)!=8){C.msg="unknown compression method",u.mode=30;break}if(57344&u.flags){C.msg="unknown header flags set",u.mode=30;break}u.head&&(u.head.text=H>>8&1),512&u.flags&&(V[0]=255&H,V[1]=H>>>8&255,u.check=l(u.check,V,2,0)),G=H=0,u.mode=3;case 3:for(;G<32;){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}u.head&&(u.head.time=H),512&u.flags&&(V[0]=255&H,V[1]=H>>>8&255,V[2]=H>>>16&255,V[3]=H>>>24&255,u.check=l(u.check,V,4,0)),G=H=0,u.mode=4;case 4:for(;G<16;){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}u.head&&(u.head.xflags=255&H,u.head.os=H>>8),512&u.flags&&(V[0]=255&H,V[1]=H>>>8&255,u.check=l(u.check,V,2,0)),G=H=0,u.mode=5;case 5:if(1024&u.flags){for(;G<16;){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}u.length=H,u.head&&(u.head.extra_len=H),512&u.flags&&(V[0]=255&H,V[1]=H>>>8&255,u.check=l(u.check,V,2,0)),G=H=0}else u.head&&(u.head.extra=null);u.mode=6;case 6:if(1024&u.flags&&(W<(fe=u.length)&&(fe=W),fe&&(u.head&&(p=u.head.extra_len-u.length,u.head.extra||(u.head.extra=new Array(u.head.extra_len)),r.arraySet(u.head.extra,B,O,fe,p)),512&u.flags&&(u.check=l(u.check,B,fe,O)),W-=fe,O+=fe,u.length-=fe),u.length))break e;u.length=0,u.mode=7;case 7:if(2048&u.flags){if(W===0)break e;for(fe=0;p=B[O+fe++],u.head&&p&&u.length<65536&&(u.head.name+=String.fromCharCode(p)),p&&fe<W;);if(512&u.flags&&(u.check=l(u.check,B,fe,O)),W-=fe,O+=fe,p)break e}else u.head&&(u.head.name=null);u.length=0,u.mode=8;case 8:if(4096&u.flags){if(W===0)break e;for(fe=0;p=B[O+fe++],u.head&&p&&u.length<65536&&(u.head.comment+=String.fromCharCode(p)),p&&fe<W;);if(512&u.flags&&(u.check=l(u.check,B,fe,O)),W-=fe,O+=fe,p)break e}else u.head&&(u.head.comment=null);u.mode=9;case 9:if(512&u.flags){for(;G<16;){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}if(H!==(65535&u.check)){C.msg="header crc mismatch",u.mode=30;break}G=H=0}u.head&&(u.head.hcrc=u.flags>>9&1,u.head.done=!0),C.adler=u.check=0,u.mode=12;break;case 10:for(;G<32;){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}C.adler=u.check=o(H),G=H=0,u.mode=11;case 11:if(u.havedict===0)return C.next_out=Q,C.avail_out=ce,C.next_in=O,C.avail_in=W,u.hold=H,u.bits=G,2;C.adler=u.check=1,u.mode=12;case 12:if(N===5||N===6)break e;case 13:if(u.last){H>>>=7&G,G-=7&G,u.mode=27;break}for(;G<3;){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}switch(u.last=1&H,G-=1,3&(H>>>=1)){case 0:u.mode=14;break;case 1:if(Y(u),u.mode=20,N!==6)break;H>>>=2,G-=2;break e;case 2:u.mode=17;break;case 3:C.msg="invalid block type",u.mode=30}H>>>=2,G-=2;break;case 14:for(H>>>=7&G,G-=7&G;G<32;){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}if((65535&H)!=(H>>>16^65535)){C.msg="invalid stored block lengths",u.mode=30;break}if(u.length=65535&H,G=H=0,u.mode=15,N===6)break e;case 15:u.mode=16;case 16:if(fe=u.length){if(W<fe&&(fe=W),ce<fe&&(fe=ce),fe===0)break e;r.arraySet(X,B,O,fe,Q),W-=fe,O+=fe,ce-=fe,Q+=fe,u.length-=fe;break}u.mode=12;break;case 17:for(;G<14;){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}if(u.nlen=257+(31&H),H>>>=5,G-=5,u.ndist=1+(31&H),H>>>=5,G-=5,u.ncode=4+(15&H),H>>>=4,G-=4,286<u.nlen||30<u.ndist){C.msg="too many length or distance symbols",u.mode=30;break}u.have=0,u.mode=18;case 18:for(;u.have<u.ncode;){for(;G<3;){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}u.lens[ie[u.have++]]=7&H,H>>>=3,G-=3}for(;u.have<19;)u.lens[ie[u.have++]]=0;if(u.lencode=u.lendyn,u.lenbits=7,q={bits:u.lenbits},ee=E(0,u.lens,0,19,u.lencode,0,u.work,q),u.lenbits=q.bits,ee){C.msg="invalid code lengths set",u.mode=30;break}u.have=0,u.mode=19;case 19:for(;u.have<u.nlen+u.ndist;){for(;Me=(h=u.lencode[H&(1<<u.lenbits)-1])>>>16&255,Re=65535&h,!((se=h>>>24)<=G);){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}if(Re<16)H>>>=se,G-=se,u.lens[u.have++]=Re;else{if(Re===16){for(I=se+2;G<I;){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}if(H>>>=se,G-=se,u.have===0){C.msg="invalid bit length repeat",u.mode=30;break}p=u.lens[u.have-1],fe=3+(3&H),H>>>=2,G-=2}else if(Re===17){for(I=se+3;G<I;){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}G-=se,p=0,fe=3+(7&(H>>>=se)),H>>>=3,G-=3}else{for(I=se+7;G<I;){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}G-=se,p=0,fe=11+(127&(H>>>=se)),H>>>=7,G-=7}if(u.have+fe>u.nlen+u.ndist){C.msg="invalid bit length repeat",u.mode=30;break}for(;fe--;)u.lens[u.have++]=p}}if(u.mode===30)break;if(u.lens[256]===0){C.msg="invalid code -- missing end-of-block",u.mode=30;break}if(u.lenbits=9,q={bits:u.lenbits},ee=E(M,u.lens,0,u.nlen,u.lencode,0,u.work,q),u.lenbits=q.bits,ee){C.msg="invalid literal/lengths set",u.mode=30;break}if(u.distbits=6,u.distcode=u.distdyn,q={bits:u.distbits},ee=E(x,u.lens,u.nlen,u.ndist,u.distcode,0,u.work,q),u.distbits=q.bits,ee){C.msg="invalid distances set",u.mode=30;break}if(u.mode=20,N===6)break e;case 20:u.mode=21;case 21:if(6<=W&&258<=ce){C.next_out=Q,C.avail_out=ce,C.next_in=O,C.avail_in=W,u.hold=H,u.bits=G,g(C,me),Q=C.next_out,X=C.output,ce=C.avail_out,O=C.next_in,B=C.input,W=C.avail_in,H=u.hold,G=u.bits,u.mode===12&&(u.back=-1);break}for(u.back=0;Me=(h=u.lencode[H&(1<<u.lenbits)-1])>>>16&255,Re=65535&h,!((se=h>>>24)<=G);){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}if(Me&&(240&Me)==0){for(ye=se,qe=Me,ke=Re;Me=(h=u.lencode[ke+((H&(1<<ye+qe)-1)>>ye)])>>>16&255,Re=65535&h,!(ye+(se=h>>>24)<=G);){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}H>>>=ye,G-=ye,u.back+=ye}if(H>>>=se,G-=se,u.back+=se,u.length=Re,Me===0){u.mode=26;break}if(32&Me){u.back=-1,u.mode=12;break}if(64&Me){C.msg="invalid literal/length code",u.mode=30;break}u.extra=15&Me,u.mode=22;case 22:if(u.extra){for(I=u.extra;G<I;){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}u.length+=H&(1<<u.extra)-1,H>>>=u.extra,G-=u.extra,u.back+=u.extra}u.was=u.length,u.mode=23;case 23:for(;Me=(h=u.distcode[H&(1<<u.distbits)-1])>>>16&255,Re=65535&h,!((se=h>>>24)<=G);){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}if((240&Me)==0){for(ye=se,qe=Me,ke=Re;Me=(h=u.distcode[ke+((H&(1<<ye+qe)-1)>>ye)])>>>16&255,Re=65535&h,!(ye+(se=h>>>24)<=G);){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}H>>>=ye,G-=ye,u.back+=ye}if(H>>>=se,G-=se,u.back+=se,64&Me){C.msg="invalid distance code",u.mode=30;break}u.offset=Re,u.extra=15&Me,u.mode=24;case 24:if(u.extra){for(I=u.extra;G<I;){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}u.offset+=H&(1<<u.extra)-1,H>>>=u.extra,G-=u.extra,u.back+=u.extra}if(u.offset>u.dmax){C.msg="invalid distance too far back",u.mode=30;break}u.mode=25;case 25:if(ce===0)break e;if(fe=me-ce,u.offset>fe){if((fe=u.offset-fe)>u.whave&&u.sane){C.msg="invalid distance too far back",u.mode=30;break}ne=fe>u.wnext?(fe-=u.wnext,u.wsize-fe):u.wnext-fe,fe>u.length&&(fe=u.length),ue=u.window}else ue=X,ne=Q-u.offset,fe=u.length;for(ce<fe&&(fe=ce),ce-=fe,u.length-=fe;X[Q++]=ue[ne++],--fe;);u.length===0&&(u.mode=21);break;case 26:if(ce===0)break e;X[Q++]=u.length,ce--,u.mode=21;break;case 27:if(u.wrap){for(;G<32;){if(W===0)break e;W--,H|=B[O++]<<G,G+=8}if(me-=ce,C.total_out+=me,u.total+=me,me&&(C.adler=u.check=u.flags?l(u.check,X,me,Q-me):a(u.check,X,me,Q-me)),me=ce,(u.flags?H:o(H))!==u.check){C.msg="incorrect data check",u.mode=30;break}G=H=0}u.mode=28;case 28:if(u.wrap&&u.flags){for(;G<32;){if(W===0)break e;W--,H+=B[O++]<<G,G+=8}if(H!==(4294967295&u.total)){C.msg="incorrect length check",u.mode=30;break}G=H=0}u.mode=29;case 29:ee=1;break e;case 30:ee=-3;break e;case 31:return-4;default:return f}return C.next_out=Q,C.avail_out=ce,C.next_in=O,C.avail_in=W,u.hold=H,u.bits=G,(u.wsize||me!==C.avail_out&&u.mode<30&&(u.mode<27||N!==4))&&F(C,C.output,C.next_out,me-C.avail_out)?(u.mode=31,-4):(he-=C.avail_in,me-=C.avail_out,C.total_in+=he,C.total_out+=me,u.total+=me,u.wrap&&me&&(C.adler=u.check=u.flags?l(u.check,X,me,C.next_out-me):a(u.check,X,me,C.next_out-me)),C.data_type=u.bits+(u.last?64:0)+(u.mode===12?128:0)+(u.mode===20||u.mode===15?256:0),(he==0&&me===0||N===4)&&ee===d&&(ee=-5),ee)},s.inflateEnd=function(C){if(!C||!C.state)return f;var N=C.state;return N.window&&(N.window=null),C.state=null,d},s.inflateGetHeader=function(C,N){var u;return C&&C.state?(2&(u=C.state).wrap)==0?f:((u.head=N).done=!1,d):f},s.inflateSetDictionary=function(C,N){var u,B=N.length;return C&&C.state?(u=C.state).wrap!==0&&u.mode!==11?f:u.mode===11&&a(1,N,B,0)!==u.check?-3:F(C,N,B,B)?(u.mode=31,-4):(u.havedict=1,d):f},s.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,i,s){var r=t("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],g=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],E=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(M,x,d,f,S,_,c,o){var v,T,R,P,D,L,b,A,Y,F=o.bits,C=0,N=0,u=0,B=0,X=0,O=0,Q=0,W=0,ce=0,H=0,G=null,he=0,me=new r.Buf16(16),fe=new r.Buf16(16),ne=null,ue=0;for(C=0;C<=15;C++)me[C]=0;for(N=0;N<f;N++)me[x[d+N]]++;for(X=F,B=15;1<=B&&me[B]===0;B--);if(B<X&&(X=B),B===0)return S[_++]=20971520,S[_++]=20971520,o.bits=1,0;for(u=1;u<B&&me[u]===0;u++);for(X<u&&(X=u),C=W=1;C<=15;C++)if(W<<=1,(W-=me[C])<0)return-1;if(0<W&&(M===0||B!==1))return-1;for(fe[1]=0,C=1;C<15;C++)fe[C+1]=fe[C]+me[C];for(N=0;N<f;N++)x[d+N]!==0&&(c[fe[x[d+N]]++]=N);if(L=M===0?(G=ne=c,19):M===1?(G=a,he-=257,ne=l,ue-=257,256):(G=g,ne=E,-1),C=u,D=_,Q=N=H=0,R=-1,P=(ce=1<<(O=X))-1,M===1&&852<ce||M===2&&592<ce)return 1;for(;;){for(b=C-Q,Y=c[N]<L?(A=0,c[N]):c[N]>L?(A=ne[ue+c[N]],G[he+c[N]]):(A=96,0),v=1<<C-Q,u=T=1<<O;S[D+(H>>Q)+(T-=v)]=b<<24|A<<16|Y|0,T!==0;);for(v=1<<C-1;H&v;)v>>=1;if(v!==0?(H&=v-1,H+=v):H=0,N++,--me[C]==0){if(C===B)break;C=x[d+c[N]]}if(X<C&&(H&P)!==R){for(Q===0&&(Q=X),D+=u,W=1<<(O=C-Q);O+Q<B&&!((W-=me[O+Q])<=0);)O++,W<<=1;if(ce+=1<<O,M===1&&852<ce||M===2&&592<ce)return 1;S[R=H&P]=X<<24|O<<16|D-_|0}}return H!==0&&(S[D+H]=C-Q<<24|64<<16|0),o.bits=X,0}},{"../utils/common":41}],51:[function(t,i,s){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,i,s){var r=t("../utils/common"),a=0,l=1;function g(h){for(var V=h.length;0<=--V;)h[V]=0}var E=0,M=29,x=256,d=x+1+M,f=30,S=19,_=2*d+1,c=15,o=16,v=7,T=256,R=16,P=17,D=18,L=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],b=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Y=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],F=new Array(2*(d+2));g(F);var C=new Array(2*f);g(C);var N=new Array(512);g(N);var u=new Array(256);g(u);var B=new Array(M);g(B);var X,O,Q,W=new Array(f);function ce(h,V,ie,ae,k){this.static_tree=h,this.extra_bits=V,this.extra_base=ie,this.elems=ae,this.max_length=k,this.has_stree=h&&h.length}function H(h,V){this.dyn_tree=h,this.max_code=0,this.stat_desc=V}function G(h){return h<256?N[h]:N[256+(h>>>7)]}function he(h,V){h.pending_buf[h.pending++]=255&V,h.pending_buf[h.pending++]=V>>>8&255}function me(h,V,ie){h.bi_valid>o-ie?(h.bi_buf|=V<<h.bi_valid&65535,he(h,h.bi_buf),h.bi_buf=V>>o-h.bi_valid,h.bi_valid+=ie-o):(h.bi_buf|=V<<h.bi_valid&65535,h.bi_valid+=ie)}function fe(h,V,ie){me(h,ie[2*V],ie[2*V+1])}function ne(h,V){for(var ie=0;ie|=1&h,h>>>=1,ie<<=1,0<--V;);return ie>>>1}function ue(h,V,ie){var ae,k,w=new Array(c+1),m=0;for(ae=1;ae<=c;ae++)w[ae]=m=m+ie[ae-1]<<1;for(k=0;k<=V;k++){var U=h[2*k+1];U!==0&&(h[2*k]=ne(w[U]++,U))}}function se(h){var V;for(V=0;V<d;V++)h.dyn_ltree[2*V]=0;for(V=0;V<f;V++)h.dyn_dtree[2*V]=0;for(V=0;V<S;V++)h.bl_tree[2*V]=0;h.dyn_ltree[2*T]=1,h.opt_len=h.static_len=0,h.last_lit=h.matches=0}function Me(h){8<h.bi_valid?he(h,h.bi_buf):0<h.bi_valid&&(h.pending_buf[h.pending++]=h.bi_buf),h.bi_buf=0,h.bi_valid=0}function Re(h,V,ie,ae){var k=2*V,w=2*ie;return h[k]<h[w]||h[k]===h[w]&&ae[V]<=ae[ie]}function ye(h,V,ie){for(var ae=h.heap[ie],k=ie<<1;k<=h.heap_len&&(k<h.heap_len&&Re(V,h.heap[k+1],h.heap[k],h.depth)&&k++,!Re(V,ae,h.heap[k],h.depth));)h.heap[ie]=h.heap[k],ie=k,k<<=1;h.heap[ie]=ae}function qe(h,V,ie){var ae,k,w,m,U=0;if(h.last_lit!==0)for(;ae=h.pending_buf[h.d_buf+2*U]<<8|h.pending_buf[h.d_buf+2*U+1],k=h.pending_buf[h.l_buf+U],U++,ae===0?fe(h,k,V):(fe(h,(w=u[k])+x+1,V),(m=L[w])!==0&&me(h,k-=B[w],m),fe(h,w=G(--ae),ie),(m=b[w])!==0&&me(h,ae-=W[w],m)),U<h.last_lit;);fe(h,T,V)}function ke(h,V){var ie,ae,k,w=V.dyn_tree,m=V.stat_desc.static_tree,U=V.stat_desc.has_stree,Z=V.stat_desc.elems,re=-1;for(h.heap_len=0,h.heap_max=_,ie=0;ie<Z;ie++)w[2*ie]!==0?(h.heap[++h.heap_len]=re=ie,h.depth[ie]=0):w[2*ie+1]=0;for(;h.heap_len<2;)w[2*(k=h.heap[++h.heap_len]=re<2?++re:0)]=1,h.depth[k]=0,h.opt_len--,U&&(h.static_len-=m[2*k+1]);for(V.max_code=re,ie=h.heap_len>>1;1<=ie;ie--)ye(h,w,ie);for(k=Z;ie=h.heap[1],h.heap[1]=h.heap[h.heap_len--],ye(h,w,1),ae=h.heap[1],h.heap[--h.heap_max]=ie,h.heap[--h.heap_max]=ae,w[2*k]=w[2*ie]+w[2*ae],h.depth[k]=(h.depth[ie]>=h.depth[ae]?h.depth[ie]:h.depth[ae])+1,w[2*ie+1]=w[2*ae+1]=k,h.heap[1]=k++,ye(h,w,1),2<=h.heap_len;);h.heap[--h.heap_max]=h.heap[1],(function(j,Ee){var ge,Pe,Fe,le,pe,De,we=Ee.dyn_tree,Te=Ee.max_code,Ve=Ee.stat_desc.static_tree,z=Ee.stat_desc.has_stree,ve=Ee.stat_desc.extra_bits,_e=Ee.stat_desc.extra_base,Ae=Ee.stat_desc.max_length,de=0;for(le=0;le<=c;le++)j.bl_count[le]=0;for(we[2*j.heap[j.heap_max]+1]=0,ge=j.heap_max+1;ge<_;ge++)Ae<(le=we[2*we[2*(Pe=j.heap[ge])+1]+1]+1)&&(le=Ae,de++),we[2*Pe+1]=le,Te<Pe||(j.bl_count[le]++,pe=0,_e<=Pe&&(pe=ve[Pe-_e]),De=we[2*Pe],j.opt_len+=De*(le+pe),z&&(j.static_len+=De*(Ve[2*Pe+1]+pe)));if(de!==0){do{for(le=Ae-1;j.bl_count[le]===0;)le--;j.bl_count[le]--,j.bl_count[le+1]+=2,j.bl_count[Ae]--,de-=2}while(0<de);for(le=Ae;le!==0;le--)for(Pe=j.bl_count[le];Pe!==0;)Te<(Fe=j.heap[--ge])||(we[2*Fe+1]!==le&&(j.opt_len+=(le-we[2*Fe+1])*we[2*Fe],we[2*Fe+1]=le),Pe--)}})(h,V),ue(w,re,h.bl_count)}function p(h,V,ie){var ae,k,w=-1,m=V[1],U=0,Z=7,re=4;for(m===0&&(Z=138,re=3),V[2*(ie+1)+1]=65535,ae=0;ae<=ie;ae++)k=m,m=V[2*(ae+1)+1],++U<Z&&k===m||(U<re?h.bl_tree[2*k]+=U:k!==0?(k!==w&&h.bl_tree[2*k]++,h.bl_tree[2*R]++):U<=10?h.bl_tree[2*P]++:h.bl_tree[2*D]++,w=k,re=(U=0)===m?(Z=138,3):k===m?(Z=6,3):(Z=7,4))}function ee(h,V,ie){var ae,k,w=-1,m=V[1],U=0,Z=7,re=4;for(m===0&&(Z=138,re=3),ae=0;ae<=ie;ae++)if(k=m,m=V[2*(ae+1)+1],!(++U<Z&&k===m)){if(U<re)for(;fe(h,k,h.bl_tree),--U!=0;);else k!==0?(k!==w&&(fe(h,k,h.bl_tree),U--),fe(h,R,h.bl_tree),me(h,U-3,2)):U<=10?(fe(h,P,h.bl_tree),me(h,U-3,3)):(fe(h,D,h.bl_tree),me(h,U-11,7));w=k,re=(U=0)===m?(Z=138,3):k===m?(Z=6,3):(Z=7,4)}}g(W);var q=!1;function I(h,V,ie,ae){me(h,(E<<1)+(ae?1:0),3),(function(k,w,m,U){Me(k),he(k,m),he(k,~m),r.arraySet(k.pending_buf,k.window,w,m,k.pending),k.pending+=m})(h,V,ie)}s._tr_init=function(h){q||((function(){var V,ie,ae,k,w,m=new Array(c+1);for(k=ae=0;k<M-1;k++)for(B[k]=ae,V=0;V<1<<L[k];V++)u[ae++]=k;for(u[ae-1]=k,k=w=0;k<16;k++)for(W[k]=w,V=0;V<1<<b[k];V++)N[w++]=k;for(w>>=7;k<f;k++)for(W[k]=w<<7,V=0;V<1<<b[k]-7;V++)N[256+w++]=k;for(ie=0;ie<=c;ie++)m[ie]=0;for(V=0;V<=143;)F[2*V+1]=8,V++,m[8]++;for(;V<=255;)F[2*V+1]=9,V++,m[9]++;for(;V<=279;)F[2*V+1]=7,V++,m[7]++;for(;V<=287;)F[2*V+1]=8,V++,m[8]++;for(ue(F,d+1,m),V=0;V<f;V++)C[2*V+1]=5,C[2*V]=ne(V,5);X=new ce(F,L,x+1,d,c),O=new ce(C,b,0,f,c),Q=new ce(new Array(0),A,0,S,v)})(),q=!0),h.l_desc=new H(h.dyn_ltree,X),h.d_desc=new H(h.dyn_dtree,O),h.bl_desc=new H(h.bl_tree,Q),h.bi_buf=0,h.bi_valid=0,se(h)},s._tr_stored_block=I,s._tr_flush_block=function(h,V,ie,ae){var k,w,m=0;0<h.level?(h.strm.data_type===2&&(h.strm.data_type=(function(U){var Z,re=4093624447;for(Z=0;Z<=31;Z++,re>>>=1)if(1&re&&U.dyn_ltree[2*Z]!==0)return a;if(U.dyn_ltree[18]!==0||U.dyn_ltree[20]!==0||U.dyn_ltree[26]!==0)return l;for(Z=32;Z<x;Z++)if(U.dyn_ltree[2*Z]!==0)return l;return a})(h)),ke(h,h.l_desc),ke(h,h.d_desc),m=(function(U){var Z;for(p(U,U.dyn_ltree,U.l_desc.max_code),p(U,U.dyn_dtree,U.d_desc.max_code),ke(U,U.bl_desc),Z=S-1;3<=Z&&U.bl_tree[2*Y[Z]+1]===0;Z--);return U.opt_len+=3*(Z+1)+5+5+4,Z})(h),k=h.opt_len+3+7>>>3,(w=h.static_len+3+7>>>3)<=k&&(k=w)):k=w=ie+5,ie+4<=k&&V!==-1?I(h,V,ie,ae):h.strategy===4||w===k?(me(h,2+(ae?1:0),3),qe(h,F,C)):(me(h,4+(ae?1:0),3),(function(U,Z,re,j){var Ee;for(me(U,Z-257,5),me(U,re-1,5),me(U,j-4,4),Ee=0;Ee<j;Ee++)me(U,U.bl_tree[2*Y[Ee]+1],3);ee(U,U.dyn_ltree,Z-1),ee(U,U.dyn_dtree,re-1)})(h,h.l_desc.max_code+1,h.d_desc.max_code+1,m+1),qe(h,h.dyn_ltree,h.dyn_dtree)),se(h),ae&&Me(h)},s._tr_tally=function(h,V,ie){return h.pending_buf[h.d_buf+2*h.last_lit]=V>>>8&255,h.pending_buf[h.d_buf+2*h.last_lit+1]=255&V,h.pending_buf[h.l_buf+h.last_lit]=255&ie,h.last_lit++,V===0?h.dyn_ltree[2*ie]++:(h.matches++,V--,h.dyn_ltree[2*(u[ie]+x+1)]++,h.dyn_dtree[2*G(V)]++),h.last_lit===h.lit_bufsize-1},s._tr_align=function(h){me(h,2,3),fe(h,T,F),(function(V){V.bi_valid===16?(he(V,V.bi_buf),V.bi_buf=0,V.bi_valid=0):8<=V.bi_valid&&(V.pending_buf[V.pending++]=255&V.bi_buf,V.bi_buf>>=8,V.bi_valid-=8)})(h)}},{"../utils/common":41}],53:[function(t,i,s){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,i,s){(function(r){(function(a,l){if(!a.setImmediate){var g,E,M,x,d=1,f={},S=!1,_=a.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(a);c=c&&c.setTimeout?c:a,g={}.toString.call(a.process)==="[object process]"?function(R){process.nextTick(function(){v(R)})}:(function(){if(a.postMessage&&!a.importScripts){var R=!0,P=a.onmessage;return a.onmessage=function(){R=!1},a.postMessage("","*"),a.onmessage=P,R}})()?(x="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",T,!1):a.attachEvent("onmessage",T),function(R){a.postMessage(x+R,"*")}):a.MessageChannel?((M=new MessageChannel).port1.onmessage=function(R){v(R.data)},function(R){M.port2.postMessage(R)}):_&&"onreadystatechange"in _.createElement("script")?(E=_.documentElement,function(R){var P=_.createElement("script");P.onreadystatechange=function(){v(R),P.onreadystatechange=null,E.removeChild(P),P=null},E.appendChild(P)}):function(R){setTimeout(v,0,R)},c.setImmediate=function(R){typeof R!="function"&&(R=new Function(""+R));for(var P=new Array(arguments.length-1),D=0;D<P.length;D++)P[D]=arguments[D+1];var L={callback:R,args:P};return f[d]=L,g(d),d++},c.clearImmediate=o}function o(R){delete f[R]}function v(R){if(S)setTimeout(v,0,R);else{var P=f[R];if(P){S=!0;try{(function(D){var L=D.callback,b=D.args;switch(b.length){case 0:L();break;case 1:L(b[0]);break;case 2:L(b[0],b[1]);break;case 3:L(b[0],b[1],b[2]);break;default:L.apply(l,b)}})(P)}finally{o(R),S=!1}}}}function T(R){R.source===a&&typeof R.data=="string"&&R.data.indexOf(x)===0&&v(+R.data.slice(x.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof Nn<"u"?Nn:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(xi)),xi.exports}var rh=ih();const pa=nh(rh),ah="assets/minecraft/textures/item/skin.png",ma="assets/minecraft/items/totem_of_undying.json",no="assets/minecraft",zn=e=>`${no}/models/${io(e)}.json`,oh=e=>`${no}/textures/${io(e)}.png`;function io(e){if(e.startsWith("minecraft:"))return e.slice(10);if(e.includes(":"))throw new Error(`Unsupported pack namespace: ${e}`);return e}function bi({model:{fallback:e,cases:n}}){return new Map([["Default",e.model],...n.map(({when:t,model:i})=>[t,i.model])])}const _a=e=>zn(e).split("/").at(-1);async function sh(e,n,t){const i=await pa.loadAsync(e),s=bi(JSON.parse(await Mi(i,ma,"string"))),r=()=>t("totem_of_undying_small.json");async function a(l,g="classic"){if(g==="slim"){const x=bi(JSON.parse(await r()));return JSON.parse(await t(_a(x.get(l))))}const E=s.get(l),M=l==="Default"?n:await Mi(i,zn(E),"string");return JSON.parse(M)}return{getModel:a,getTexture:l=>Mi(i,oh(l),"blob"),async export(l,g="classic"){const E=await pa.loadAsync(e);if(E.file(zn(s.get("Default")),n),g==="slim"){const M=await r();E.file(ma,M),await Promise.all(Array.from(bi(JSON.parse(M)).values(),async x=>{E.file(zn(x),await t(_a(x)))}))}return E.file(ah,await l.arrayBuffer()),E.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}})}}}function Mi(e,n,t){const i=e.file(n);if(!i)throw new Error(`Missing pack asset: ${n}`);return i.async(t)}const lh=[137,80,78,71,13,10,26,10];function Li(e,n,t=4){return{top:[e+4,n,t,4],bottom:[e+4+t,n,t,4],right:[e,n+4,4,12],front:[e+4,n+4,t,12],left:[e+4+t,n+4,4,12],back:[e+8+t,n+4,t,12]}}function ch({data:e,width:n,height:t}){if(t===32)return"classic";const i=([r,a,l,g])=>{for(let E=a;E<a+g;E+=1)for(let M=r;M<r+l;M+=1)if(e[(E*n+M)*4+3]>0)return!0;return!1};return[[40,16],[32,48]].every(([r,a])=>!i([r+10,a,2,4])&&!i([r+14,a+4,2,12])&&i(Li(r,a,3).front))?"slim":"classic"}function fh(e){const n=new DataView(e.buffer,e.byteOffset,e.byteLength);if(e.length<33||!lh.every((s,r)=>e[r]===s)||n.getUint32(8)!==13||n.getUint32(12)!==1229472850)throw new Error("Choose a valid Minecraft skin PNG.");const t=n.getUint32(16),i=n.getUint32(20);if(t!==64||i!==64&&i!==32)throw new Error(`This PNG is ${t} × ${i}. Use a 64 × 64 or 64 × 32 Minecraft skin.`);return{width:t,height:i}}function ro(e=64,n=64){const t=document.createElement("canvas");t.width=e,t.height=n;const i=t.getContext("2d",{willReadFrequently:!0});return i.imageSmoothingEnabled=!1,i}function ao(e){return new Promise((n,t)=>{e.toBlob(i=>i?n(i):t(new Error("Could not create the PNG.")),"image/png")})}async function oo(e){const n=await createImageBitmap(e.slice(0,e.size,"image/png"),{colorSpaceConversion:"none"}),t=ro(n.width,n.height);try{return t.drawImage(n,0,0),t}finally{n.close()}}async function so(e){if(e.size>1024*1024)throw new Error("Choose a Minecraft skin PNG under 1 MB.");const{height:n}=fh(new Uint8Array(await e.slice(0,33).arrayBuffer()));let t;try{t=await oo(e)}catch{throw new Error("This PNG could not be decoded. Try another skin file.")}if(!t.getImageData(8,8,8,8).data.some((r,a)=>a%4===3&&r>0))throw new Error("The base face is empty. Export a Minecraft skin with a visible face.");const s=ch(t.getImageData(0,0,64,n));return{file:e,source:t,height:n,armType:s}}async function lo({file:e,source:n,height:t,armType:i}){if(t===64)return{image:n.canvas,png:e,armType:i};const s=ro();return s.drawImage(n.canvas,0,0),uh(s,n),{image:s.canvas,png:await ao(s.canvas),armType:"classic"}}function uh(e,n){n.getImageData(32,0,32,32).data.every((s,r)=>r%4!==3||s>=128)&&e.clearRect(32,0,32,16);for(const[s,r]of[[0,16],[40,32]]){const a=Li(s,16),l=Li(r,48);for(const[g,[E,M,x,d]]of Object.entries(l)){const f=g==="left"?"right":g==="right"?"left":g;e.save(),e.translate(E+x,M),e.scale(-1,1),e.drawImage(n.canvas,...a[f],0,0,x,d),e.restore()}}for(const[s,r,a,l]of[[0,0,32,16],[0,16,64,16],[16,48,32,16]]){const g=e.getImageData(s,r,a,l);for(let E=3;E<g.data.length;E+=4)g.data[E]=255;e.putImageData(g,s,r)}}function dh(e,n){const t=e.getContext("2d");t.clearRect(0,0,8,8),t.drawImage(n,8,8,8,8,0,0,8,8),t.drawImage(n,40,8,8,8,0,0,8,8)}const ga={type:"change"},Vi={type:"start"},co={type:"end"},Fn=new Xs,va=new ya,hh=Math.cos(70*Ft.DEG2RAD),ct=new Be,_t=2*Math.PI,Qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ti=1e-6;class ph extends Ws{constructor(n,t=null){super(n,t),this.state=Qe.NONE,this.target=new Be,this.cursor=new Be,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ln.ROTATE,MIDDLE:ln.DOLLY,RIGHT:ln.PAN},this.touches={ONE:sn.ROTATE,TWO:sn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Be,this._lastQuaternion=new yi,this._lastTargetPosition=new Be,this._quat=new yi().setFromUnitVectors(n.up,new Be(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ci,this._sphericalDelta=new Ci,this._scale=1,this._panOffset=new Be,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new Be,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_h.bind(this),this._onPointerDown=mh.bind(this),this._onPointerUp=gh.bind(this),this._onContextMenu=Th.bind(this),this._onMouseWheel=Eh.bind(this),this._onKeyDown=xh.bind(this),this._onTouchStart=bh.bind(this),this._onTouchMove=Mh.bind(this),this._onMouseDown=vh.bind(this),this._onMouseMove=Sh.bind(this),this._interceptControlDown=Ah.bind(this),this._interceptControlUp=wh.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(n){this._cursorStyle=n,n==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(n){super.connect(n),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(n){n.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=n}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ga),this.update(),this.state=Qe.NONE}pan(n,t){this._pan(n,t),this.update()}dollyIn(n){this._dollyIn(n),this.update()}dollyOut(n){this._dollyOut(n),this.update()}rotateLeft(n){this._rotateLeft(n),this.update()}rotateUp(n){this._rotateUp(n),this.update()}update(n=null){const t=this.object.position;ct.copy(t).sub(this.target),ct.applyQuaternion(this._quat),this._spherical.setFromVector3(ct),this.autoRotate&&this.state===Qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(n)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=_t:i>Math.PI&&(i-=_t),s<-Math.PI?s+=_t:s>Math.PI&&(s-=_t),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ct.setFromSpherical(this._spherical),ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const l=ct.length();a=this._clampDistance(l*this._scale);const g=l-a;this.object.position.addScaledVector(this._dollyDirection,g),this.object.updateMatrixWorld(),r=!!g}else if(this.object.isOrthographicCamera){const l=new Be(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const g=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=g!==this.object.zoom;const E=new Be(this._mouse.x,this._mouse.y,0);E.unproject(this.object),this.object.position.sub(E).add(l),this.object.updateMatrixWorld(),a=ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Fn.origin.copy(this.object.position),Fn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fn.direction))<hh?this.object.lookAt(this.target):(va.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fn.intersectPlane(va,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ti||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ti||this._lastTargetPosition.distanceToSquared(this.target)>Ti?(this.dispatchEvent(ga),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(n){return n!==null?_t/60*this.autoRotateSpeed*n:_t/60/60*this.autoRotateSpeed}_getZoomScale(n){const t=Math.abs(n*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(n){this._sphericalDelta.theta-=n}_rotateUp(n){this._sphericalDelta.phi-=n}_panLeft(n,t){ct.setFromMatrixColumn(t,0),ct.multiplyScalar(-n),this._panOffset.add(ct)}_panUp(n,t){this.screenSpacePanning===!0?ct.setFromMatrixColumn(t,1):(ct.setFromMatrixColumn(t,0),ct.crossVectors(this.object.up,ct)),ct.multiplyScalar(n),this._panOffset.add(ct)}_pan(n,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ct.copy(s).sub(this.target);let r=ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*n*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(n*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(n,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=n-i.left,r=t-i.top,a=i.width,l=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(n){return Math.max(this.minDistance,Math.min(this.maxDistance,n))}_handleMouseDownRotate(n){this._rotateStart.set(n.clientX,n.clientY)}_handleMouseDownDolly(n){this._updateZoomParameters(n.clientX,n.clientX),this._dollyStart.set(n.clientX,n.clientY)}_handleMouseDownPan(n){this._panStart.set(n.clientX,n.clientY)}_handleMouseMoveRotate(n){this._rotateEnd.set(n.clientX,n.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_t*this._rotateDelta.x/t.clientHeight),this._rotateUp(_t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(n){this._dollyEnd.set(n.clientX,n.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(n){this._panEnd.set(n.clientX,n.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(n){this._updateZoomParameters(n.clientX,n.clientY),n.deltaY<0?this._dollyIn(this._getZoomScale(n.deltaY)):n.deltaY>0&&this._dollyOut(this._getZoomScale(n.deltaY)),this.update()}_handleKeyDown(n){let t=!1;switch(n.code){case this.keys.UP:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(_t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(-_t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(_t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(-_t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(n.preventDefault(),this.update())}_handleTouchStartRotate(n){if(this._pointers.length===1)this._rotateStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),s=.5*(n.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(n){if(this._pointers.length===1)this._panStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),s=.5*(n.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,s=n.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enablePan&&this._handleTouchStartPan(n)}_handleTouchStartDollyRotate(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enableRotate&&this._handleTouchStartRotate(n)}_handleTouchMoveRotate(n){if(this._pointers.length==1)this._rotateEnd.set(n.pageX,n.pageY);else{const i=this._getSecondPointerPosition(n),s=.5*(n.pageX+i.x),r=.5*(n.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_t*this._rotateDelta.x/t.clientHeight),this._rotateUp(_t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(n){if(this._pointers.length===1)this._panEnd.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),s=.5*(n.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,s=n.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(n.pageX+t.x)*.5,l=(n.pageY+t.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enablePan&&this._handleTouchMovePan(n)}_handleTouchMoveDollyRotate(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enableRotate&&this._handleTouchMoveRotate(n)}_addPointer(n){this._pointers.push(n.pointerId)}_removePointer(n){delete this._pointerPositions[n.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(n){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId)return!0;return!1}_trackPointer(n){let t=this._pointerPositions[n.pointerId];t===void 0&&(t=new rt,this._pointerPositions[n.pointerId]=t),t.set(n.pageX,n.pageY)}_getSecondPointerPosition(n){const t=n.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(n){const t=n.deltaMode,i={clientX:n.clientX,clientY:n.clientY,deltaY:n.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return n.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function mh(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function _h(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function gh(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(co),this.state=Qe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const n=this._pointers[0],t=this._pointerPositions[n];this._onTouchStart({pointerId:n,pageX:t.x,pageY:t.y});break}}function vh(e){let n;switch(e.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case ln.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Qe.DOLLY;break;case ln.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Qe.ROTATE}break;case ln.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Qe.PAN}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(Vi)}function Sh(e){switch(this.state){case Qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Eh(e){this.enabled===!1||this.enableZoom===!1||this.state!==Qe.NONE||(e.preventDefault(),this.dispatchEvent(Vi),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(co))}function xh(e){this.enabled!==!1&&this._handleKeyDown(e)}function bh(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case sn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Qe.TOUCH_ROTATE;break;case sn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Qe.TOUCH_PAN;break;default:this.state=Qe.NONE}break;case 2:switch(this.touches.TWO){case sn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Qe.TOUCH_DOLLY_PAN;break;case sn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Qe.TOUCH_DOLLY_ROTATE;break;default:this.state=Qe.NONE}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(Vi)}function Mh(e){switch(this._trackPointer(e),this.state){case Qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Qe.NONE}}function Th(e){this.enabled!==!1&&e.preventDefault()}function Ah(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wh(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Rh=Math.PI*2/34,yh=750;function Ch(e,{onZoom:n,onContext:t}){const i=new Xd({canvas:e,alpha:!0,antialias:!0});i.setClearColor(0,0);const s=new Ys,r=new Oi(-7,7,7,-7,.1,100),a=new ph(r,e);a.enablePan=!1,a.dampingFactor=.16,a.minZoom=.65,a.maxZoom=2.1,a.minPolarAngle=.17,a.maxPolarAngle=Math.PI-.17;const l=window.matchMedia("(prefers-reduced-motion: reduce)"),E={default:new Be(-.54,.28,-1).normalize(),front:new Be(0,0,-1),back:new Be(0,0,1)},M=new Ka;s.add(M);const x=Ph();s.add(x);let d,f=13,S=0,_=!0,c=!1,o=0,v=0,T=r.zoom,R=!1,P=0,D=!1,L=0;function b(){S||!d||!_||document.hidden||c||(S=requestAnimationFrame(A))}function A(Q){S=0;const W=v>0?Math.min((Q-v)/1e3,.05):0;v=Q,l.matches||(o+=W),M.position.y=l.matches?0:Math.sin(o*1.3)*.1,x.material.opacity=x.visible?.54-M.position.y*.19:0;const H=R&&!D&&Q>=L?Rh:0;P=Ft.damp(P,H,5,W),Math.abs(P-H)<.001&&(P=H),P&&r.position.applyAxisAngle(r.up,-P*W),a.update(W),i.render(s,r),(!l.matches||P||R&&!D)&&b()}function Y(){const Q=e.clientWidth,W=e.clientHeight;if(!Q||!W)return;const ce=Q/W,H=f/2/Math.min(1,ce/.9);r.left=-H*ce,r.right=H*ce,r.top=H,r.bottom=-H,r.updateProjectionMatrix(),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(Q,W,!1),b()}function F(Q,W=!1){P=0;const ce=a.enableDamping;a.enableDamping=!1,a.update(0),r.position.copy(E[Q]).multiplyScalar(27),W&&(r.zoom=1),r.updateProjectionMatrix(),a.update(0),a.enableDamping=ce,u(),b()}function C(Q){B(),r.zoom=Ft.clamp(Q,a.minZoom,a.maxZoom),r.updateProjectionMatrix(),a.update(0),u(),b()}function N(Q){_=Q,v=0,S&&(!_||document.hidden||c)&&(cancelAnimationFrame(S),S=0),b()}function u(){T!==r.zoom&&(T=r.zoom,n(T))}function B(){P=0,L=performance.now()+yh,b()}return a.addEventListener("start",()=>{D=!0,P=0}),a.addEventListener("end",()=>{D=!1,B()}),a.addEventListener("change",()=>{u(),b()}),e.addEventListener("keydown",Q=>{if(Q.ctrlKey||Q.metaKey||Q.altKey)return;const W=new Ci().setFromVector3(r.position),ce=.16;switch(Q.key){case"ArrowLeft":W.theta-=ce;break;case"ArrowRight":W.theta+=ce;break;case"ArrowUp":W.phi-=ce;break;case"ArrowDown":W.phi+=ce;break;case"+":case"=":C(r.zoom+.1);break;case"-":C(r.zoom-.1);break;default:return}Q.preventDefault(),Q.key.startsWith("Arrow")&&(B(),W.phi=Ft.clamp(W.phi,a.minPolarAngle,a.maxPolarAngle),r.position.setFromSpherical(W),a.update(0))}),e.addEventListener("webglcontextlost",Q=>{Q.preventDefault(),c=!0,N(_),t(!1)}),e.addEventListener("webglcontextrestored",()=>{c=!1,t(!0),Y()}),new ResizeObserver(Y).observe(e),new IntersectionObserver(([Q])=>N(Q.isIntersecting)).observe(e),document.addEventListener("visibilitychange",()=>N(_)),l.addEventListener("change",()=>{a.enableDamping=!l.matches,b()}),a.enableDamping=!l.matches,F("default",!0),Y(),{setModel(Q,W,ce=!1){const H=eh(Q,W),G=new Ks().setFromObject(H),he=G.getSize(new Be);H.position.sub(G.getCenter(new Be)),d&&(M.remove(d),th(d)),d=H,M.add(d),x.position.y=-he.y/2-.26,x.scale.set(he.x*1.65,Math.max(he.z*1.85,7),1),f=Math.max(he.y*1.4,he.x*1.4),ce&&F("default",!0),Y()},setZoom:C,setView:F,setSpinning(Q){R=Q,Q&&(L=0),S||(v=0),b()},setShadow(Q){x.visible=Q,b()},async screenshot(){if(!d||c)throw new Error("The 3D preview must be active to save an image.");const Q=x.visible;try{return x.visible=!1,i.render(s,r),await ao(e)}finally{x.visible=Q,b()}}}}function Ph(){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),t=n.createRadialGradient(32,32,2,32,32,31);t.addColorStop(0,"#000d"),t.addColorStop(.48,"#0007"),t.addColorStop(1,"#0000"),n.fillStyle=t,n.fillRect(0,0,64,64);const i=new bt(new ki(1,1),new qn({map:new qa(e),transparent:!0,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.renderOrder=-1,i}const Dh=Object.assign({"../../plushify_chain_small.json":()=>Ht(()=>import("./plushify_chain_small-Dmh6S5Pj.js"),[]).then(e=>e.default),"../../plushify_copper_small.json":()=>Ht(()=>import("./plushify_copper_small-eGYiHBpr.js"),[]).then(e=>e.default),"../../plushify_diamond_small.json":()=>Ht(()=>import("./plushify_diamond_small-BH8NJCAv.js"),[]).then(e=>e.default),"../../plushify_gold_small.json":()=>Ht(()=>import("./plushify_gold_small-GpbP8cph.js"),[]).then(e=>e.default),"../../plushify_iron_small.json":()=>Ht(()=>import("./plushify_iron_small-B-2O9rqX.js"),[]).then(e=>e.default),"../../plushify_netherite_small.json":()=>Ht(()=>import("./plushify_netherite_small-ComjmCGm.js"),[]).then(e=>e.default),"../../plushy_small.json":()=>Ht(()=>import("./plushy_small-BfTd5cDZ.js"),[]).then(e=>e.default),"../../totem_of_undying_small.json":()=>Ht(()=>import("./totem_of_undying_small-jPGIoBiH.js"),[]).then(e=>e.default)});function Lh(e){const n=Dh[`../../${e}`];if(!n)throw new Error(`Missing slim model: ${e}`);return n()}const Ke=e=>document.getElementById(e),Zn=Ke("skin-file"),$t=Ke("drop-zone"),Sa=Ke("upload-label"),Uh=Ke("avatar"),Ea=Ke("skin-name"),Ih=Ke("skin-description"),xa=Ke("skin-status"),Nh=Ke("arm-option"),jn=Ke("arm-type"),Oh=Ke("arm-auto"),Ui=Ke("upload-error"),fo=Ke("armor-options"),Fh=Ke("armor-hint"),uo=Ke("download"),ba=Ke("download-label"),bn=Ke("export-status"),ho=Ke("stage"),Bh=Ke("stage-message"),kh=Ke("stage-text"),Gh=Ke("variant-caption"),$n=Ke("model"),Qn=Ke("background"),Rn=Ke("zoom"),Hh=Ke("zoom-out"),Vh=Ke("zoom-in"),zh=Ke("reset"),Ii=Ke("flip"),Ni=Ke("spin"),Ma=Ke("screenshot"),Wh=Ke("preview-toolbar").querySelectorAll("button, input"),Xh=new Map,Yh=new Map;let Cn,Tt,Jn=!1,mt,Wn="Default",yn=!1,Xn=!1,ei=!1,Bn=0,Ai=0;function Wt(e,n,t=!1){e.textContent=n,e.hidden=!n,e.classList.toggle("error",t)}function cn(e){ho.setAttribute("aria-busy","false"),Bh.hidden=!e,kh.textContent=e}function Jt(){uo.disabled=!mt||mt.demo||yn||Xn,jn.disabled=yn,Wh.forEach(e=>{e.disabled=!mt||!Jn})}function po(e,n,t){mt={...e,demo:t,detectedArmType:n.armType},dh(Uh,mt.image),Ea.textContent=t?"Amethyst":n.file.name,Ea.title=t?"":n.file.name,xa.textContent=t?"DEMO SKIN":"YOUR SKIN",xa.toggleAttribute("data-custom",!t);const i=n.height===32?"64 × 32 · converted to 64 × 64":"64 × 64 PNG";Ih.textContent=t&&e.armType==="slim"?`${i} · Slim`:i,Nh.hidden=t||n.height===32,Oh.textContent=n.armType==="slim"?"Auto · Slim (3 px)":"Auto · Classic (4 px)",Jt(),zi()}function Ta(e,n,t){return e.has(n)||e.set(n,t(n).catch(i=>{throw e.delete(n),i})),e.get(n)}async function Kh(e){const n=await Cn.getTexture(e);return(await oo(n)).canvas}async function zi(){if(!Tt||!mt)return;const e=++Ai,n=Wn,t=mt;try{const i=t.armType,s=await Ta(Xh,`${i}/${n}`,()=>Cn.getModel(n,i)),r=new Set(Object.values(s.textures).map(l=>to(s.textures,l))),a=new Map([["item/skin",t.image]]);if(r.delete("item/skin"),await Promise.all([...r].map(async l=>{a.set(l,await Ta(Yh,l,Kh))})),e!==Ai)return;Tt.setModel(s,a),Gh.textContent=n.toUpperCase(),$n.setAttribute("aria-label",`Interactive ${t.armType} Plushy model`),Jn&&cn("")}catch(i){if(e!==Ai)return;console.error(i),cn("This model could not be displayed. Try another armor style.")}}async function mo(e){if(!Cn||!e)return;const n=++Bn;yn=!0,Wt(Ui,""),Wt(bn,""),Sa.textContent="Reading skin…",Jt();try{const t=await so(e),i=await lo(t);if(n!==Bn)return;jn.value="auto",po(i,t,!1)}catch(t){n===Bn&&Wt(Ui,t.message,!0)}finally{n===Bn&&(yn=!1,Sa.textContent=mt&&!mt.demo?"Change Your Skin":"Upload Your Skin",Jt())}}Zn.addEventListener("change",e=>{mo(e.currentTarget.files[0]),e.currentTarget.value=""});document.querySelector(".mobile-upload").addEventListener("click",e=>{Zn.disabled||(e.preventDefault(),Zn.click())});$t.addEventListener("dragover",e=>{e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.dataTransfer.dropEffect="copy",$t.setAttribute("data-dragging",""))});$t.addEventListener("dragleave",e=>{$t.contains(e.relatedTarget)||$t.removeAttribute("data-dragging")});$t.addEventListener("drop",e=>{if(e.preventDefault(),$t.removeAttribute("data-dragging"),e.dataTransfer.files.length>1){Wt(Ui,"Drop one Minecraft skin PNG at a time.",!0);return}mo(e.dataTransfer.files[0])});jn.addEventListener("change",()=>{const e=jn.value;mt={...mt,armType:e==="auto"?mt.detectedArmType:e},Wt(bn,""),zi()});fo.addEventListener("change",e=>{Wn=e.target.value;const n=Fh;if(Wn==="Default")n.textContent="All six armor styles are included in your pack.";else{const t=document.createElement("strong");t.textContent=Wn,n.replaceChildren("Rename your Totem to ",t," at an anvil.")}zi()});function _o(){ho.dataset.background=Qn.value,Tt?.setShadow(Qn.value!=="transparent")}function Wi(e){Ni.setAttribute("aria-pressed",String(e)),Tt?.setSpinning(e)}function go(e){ei=e;const n=ei?"Show front":"Show back";Ii.setAttribute("aria-label",n),Ii.title=n}Qn.addEventListener("change",_o);Ni.addEventListener("click",()=>Wi(Ni.getAttribute("aria-pressed")!=="true"));Ii.addEventListener("click",()=>{Wi(!1),go(!ei),Tt?.setView(ei?"back":"front")});function vo(){Wi(!1),go(!1),Qn.value="studio",_o(),Tt?.setView("default",!0)}zh.addEventListener("click",vo);$n.addEventListener("keydown",e=>{e.key==="Home"&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&(e.preventDefault(),vo())});Rn.addEventListener("input",()=>Tt?.setZoom(Number(Rn.value)/100));Vh.addEventListener("click",()=>Tt?.setZoom((Number(Rn.value)+12)/100));Hh.addEventListener("click",()=>Tt?.setZoom((Number(Rn.value)-12)/100));function So(e,n){const t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n,document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}Ma.addEventListener("click",async()=>{Ma.disabled=!0;try{So(await Tt.screenshot(),"Plushify-Preview.png")}catch(e){cn(e.message)}finally{Jt()}});uo.addEventListener("click",async()=>{if(!mt||mt.demo||Xn||yn)return;Xn=!0;const e=mt;Jt(),Wt(bn,""),ba.textContent="Building your pack…";try{So(await Cn.export(e.png,e.armType),"Plushify-Custom-Skin.zip"),e===mt&&Wt(bn,"Your resource pack is ready.")}catch(n){console.error(n),Wt(bn,"Could not build the ZIP. Try downloading again.",!0)}finally{Xn=!1,ba.textContent="Download My Plushy",Jt()}});async function qh(){try{Tt=Ch($n,{onZoom:e=>{Rn.value=Math.round(e*100)},onContext(e){Jn=e,Jt(),cn(e?"":"The 3D connection was lost. Skin upload and ZIP export are still available.")}}),Jn=!0}catch{$n.tabIndex=-1,cn("3D preview requires WebGL 2. You can still upload skins and download the pack.")}try{const[e,n]=await Promise.all([fetch(js),fetch("/Plushify/art/amethyst.png")]);if(!e.ok)throw new Error(`Pack request returned ${e.status}`);if(!n.ok)throw new Error(`Sample request returned ${n.status}`);Cn=await sh(await e.arrayBuffer(),$s,Lh);const t=await so(await n.blob());po(await lo(t),t,!0),Zn.disabled=!1,fo.disabled=!1}catch(e){console.error(e),cn("The Plushify pack could not be loaded. Reload the page to try again.")}}qh();
