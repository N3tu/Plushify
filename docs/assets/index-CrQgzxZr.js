import"./navigation-DThHB9XZ.js";import{U as Ct,c as Vo,N as Pt,S as Ba,C as at,F as ka,V as Be,R as zo,e as it,w as et,a as vt,l as cr,b as Ga,M as pn,W as fr,d as Dt,f as lt,L as sn,H as Yt,D as Nt,B as bt,g as Pn,h as ci,p as Wo,i as gn,j as wn,k as Xo,m as Mt,O as Wi,n as nt,E as Yo,o as rt,P as Kn,A as Ko,q as mi,r as Ot,s as ln,t as mn,u as Dn,v as Jt,x as ei,y as qo,z as Zo,G as Ln,I as xt,J as Ii,K as an,Q as ur,T as jo,X as $o,Y as Sn,Z as Qo,_ as Jo,$ as es,a0 as ts,a1 as ns,a2 as is,a3 as rs,a4 as as,a5 as os,a6 as ss,a7 as ls,a8 as cs,a9 as fs,aa as us,ab as ds,ac as hs,ad as ps,ae as _i,af as Gn,ag as ms,ah as Ft,ai as _s,aj as gs,ak as Xi,al as vs,am as Yi,an as Ss,ao as Es,ap as xs,aq as Ha,ar as Ke,as as bs,at as Ms,au as Ht,av as Rn,aw as qn,ax as Ts,ay as kt,az as Mn,aA as Wt,aB as As,aC as Va,aD as za,aE as Wa,aF as ti,aG as Xa,aH as Ya,aI as Ka,aJ as Ki,aK as ws,aL as Rs,aM as ys,aN as Cs,aO as qa,aP as Ps,aQ as Ds,aR as Ls,aS as gi,aT as vi,aU as Si,aV as Ei,aW as dr,aX as hr,aY as pr,aZ as mr,a_ as _r,a$ as gr,b0 as vr,b1 as Sr,b2 as Er,b3 as xr,b4 as br,b5 as Mr,b6 as Tr,b7 as Ar,b8 as wr,b9 as Rr,ba as yr,bb as Cr,bc as Pr,bd as Dr,be as Lr,bf as Ur,bg as Ir,bh as Nr,bi as Or,bj as Fr,bk as Br,bl as kr,bm as Gr,bn as Hr,bo as Vr,bp as zr,bq as Us,br as Is,bs as Ns,bt as Os,bu as Fs,bv as Bs,bw as ks,bx as Gs,by as Wr,bz as Hs,bA as Zn,bB as Vs,bC as Xr,bD as Yr,bE as Kr,bF as Za,bG as zs,bH as fi,bI as Ws,bJ as Xs,bK as ja,bL as qi,bM as Ni,bN as Zi,bO as $a,bP as Ys,bQ as Qa,bR as Ja,bS as eo,bT as to,bU as no,bV as io,bW as ro,bX as qr,bY as ao,bZ as xi,b_ as bi,b$ as Ks,c0 as qs,c1 as Zr,c2 as gt,c3 as Zs,c4 as Un,c5 as _n,c6 as ni,c7 as js,c8 as $s,c9 as Qs,ca as Js,cb as el,cc as tl,cd as nl,ce as il,cf as rl,cg as oo,ch as so,ci as Oi,cj as Gt,ck as al,cl as un,cm as cn,cn as Fi,co as ol,cp as sl,cq as ll}from"./three-core-BwcFwJuc.js";import{g as cl,a as fl}from"./gallery-api-xB-P5Z12.js";const ul="modulepreload",dl=function(e){return"/Plushify/"+e},jr={},It=function(n,t,i){let l=Promise.resolve();if(t&&t.length>0){let _=function(E){return Promise.all(E.map(b=>Promise.resolve(b).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=a?.nonce||a?.getAttribute("nonce");l=_(t.map(E=>{if(E=dl(E),E in jr)return;jr[E]=!0;const b=E.endsWith(".css"),x=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${E}"]${x}`))return;const u=document.createElement("link");if(u.rel=b?"stylesheet":ul,b||(u.as="script"),u.crossOrigin="",u.href=E,s&&u.setAttribute("nonce",s),document.head.appendChild(u),b)return new Promise((f,S)=>{u.addEventListener("load",f),u.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${E}`)))})}))}function r(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return l.then(a=>{for(const s of a||[])s.status==="rejected"&&r(s.reason);return n().catch(r)})},hl="/Plushify/assets/pack-source-BnQZs1LU.zip",pl=`{\r
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
}`;function lo(){let e=null,n=!1,t=null,i=null;function l(r,a){t(r,a),i=e.requestAnimationFrame(l)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(l),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function ml(e){const n=new WeakMap;function t(s,_){const E=s.array,b=s.usage,x=E.byteLength,u=e.createBuffer();e.bindBuffer(_,u),e.bufferData(_,E,b),s.onUploadCallback();let f;if(E instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&E instanceof Float16Array)f=e.HALF_FLOAT;else if(E instanceof Uint16Array)s.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(E instanceof Int16Array)f=e.SHORT;else if(E instanceof Uint32Array)f=e.UNSIGNED_INT;else if(E instanceof Int32Array)f=e.INT;else if(E instanceof Int8Array)f=e.BYTE;else if(E instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(E instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+E);return{buffer:u,type:f,bytesPerElement:E.BYTES_PER_ELEMENT,version:s.version,size:x}}function i(s,_,E){const b=_.array,x=_.updateRanges;if(e.bindBuffer(E,s),x.length===0)e.bufferSubData(E,0,b);else{x.sort((f,S)=>f.start-S.start);let u=0;for(let f=1;f<x.length;f++){const S=x[u],g=x[f];g.start<=S.start+S.count+1?S.count=Math.max(S.count,g.start+g.count-S.start):(++u,x[u]=g)}x.length=u+1;for(let f=0,S=x.length;f<S;f++){const g=x[f];e.bufferSubData(E,g.start*b.BYTES_PER_ELEMENT,b,g.start,g.count)}_.clearUpdateRanges()}_.onUploadCallback()}function l(s){return s.isInterleavedBufferAttribute&&(s=s.data),n.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);const _=n.get(s);_&&(e.deleteBuffer(_.buffer),n.delete(s))}function a(s,_){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const b=n.get(s);(!b||b.version<s.version)&&n.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const E=n.get(s);if(E===void 0)n.set(s,t(s,_));else if(E.version<s.version){if(E.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(E.buffer,s,_),E.version=s.version}}return{get:l,remove:r,update:a}}var _l=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gl=`#ifdef USE_ALPHAHASH
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
#endif`,vl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,El=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bl=`#ifdef USE_AOMAP
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
#endif`,Ml=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tl=`#ifdef USE_BATCHING
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
#endif`,Al=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cl=`#ifdef USE_IRIDESCENCE
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
#endif`,Pl=`#ifdef USE_BUMPMAP
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
#endif`,Dl=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ll=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ul=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Il=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ol=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kl=`#define PI 3.141592653589793
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
} // validated`,Gl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hl=`vec3 transformedNormal = objectNormal;
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
#endif`,Vl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ql=`#ifdef USE_ENVMAP
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
#endif`,Zl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jl=`#ifdef USE_ENVMAP
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
#endif`,$l=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ql=`#ifdef USE_ENVMAP
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
#endif`,Jl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ec=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ic=`#ifdef USE_GRADIENTMAP
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
}`,rc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ac=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sc=`uniform bool receiveShadow;
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
#endif`,lc=`#ifdef USE_ENVMAP
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
#endif`,cc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hc=`PhysicalMaterial material;
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
#endif`,pc=`uniform sampler2D dfgLUT;
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
}`,mc=`
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
#endif`,_c=`#if defined( RE_IndirectDiffuse )
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
#endif`,gc=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ec=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ac=`#if defined( USE_POINTS_UV )
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
#endif`,wc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dc=`#ifdef USE_MORPHTARGETS
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
#endif`,Lc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ic=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bc=`#ifdef USE_NORMALMAP
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
#endif`,kc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$c=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ef=`float getShadowMask() {
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
}`,tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nf=`#ifdef USE_SKINNING
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
#endif`,rf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,af=`#ifdef USE_SKINNING
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
#endif`,of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ff=`#ifdef USE_TRANSMISSION
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
#endif`,uf=`#ifdef USE_TRANSMISSION
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gf=`uniform sampler2D t2D;
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
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`#include <common>
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
}`,Mf=`#if DEPTH_PACKING == 3200
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
}`,Tf=`#define DISTANCE
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
}`,Af=`#define DISTANCE
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
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`uniform float scale;
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
}`,Cf=`uniform vec3 diffuse;
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
}`,Pf=`#include <common>
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
}`,Df=`uniform vec3 diffuse;
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
}`,Lf=`#define LAMBERT
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
}`,Uf=`#define LAMBERT
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
}`,If=`#define MATCAP
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
}`,Nf=`#define MATCAP
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
}`,Of=`#define NORMAL
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
}`,Ff=`#define NORMAL
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
}`,Bf=`#define PHONG
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
}`,kf=`#define PHONG
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
}`,Gf=`#define STANDARD
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
}`,Hf=`#define STANDARD
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
}`,Vf=`#define TOON
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
}`,zf=`#define TOON
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
}`,Wf=`uniform float size;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,Yf=`#include <common>
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
}`,Kf=`uniform vec3 color;
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
}`,qf=`uniform float rotation;
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
}`,Zf=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:_l,alphahash_pars_fragment:gl,alphamap_fragment:vl,alphamap_pars_fragment:Sl,alphatest_fragment:El,alphatest_pars_fragment:xl,aomap_fragment:bl,aomap_pars_fragment:Ml,batching_pars_vertex:Tl,batching_vertex:Al,begin_vertex:wl,beginnormal_vertex:Rl,bsdfs:yl,iridescence_fragment:Cl,bumpmap_pars_fragment:Pl,clipping_planes_fragment:Dl,clipping_planes_pars_fragment:Ll,clipping_planes_pars_vertex:Ul,clipping_planes_vertex:Il,color_fragment:Nl,color_pars_fragment:Ol,color_pars_vertex:Fl,color_vertex:Bl,common:kl,cube_uv_reflection_fragment:Gl,defaultnormal_vertex:Hl,displacementmap_pars_vertex:Vl,displacementmap_vertex:zl,emissivemap_fragment:Wl,emissivemap_pars_fragment:Xl,colorspace_fragment:Yl,colorspace_pars_fragment:Kl,envmap_fragment:ql,envmap_common_pars_fragment:Zl,envmap_pars_fragment:jl,envmap_pars_vertex:$l,envmap_physical_pars_fragment:lc,envmap_vertex:Ql,fog_vertex:Jl,fog_pars_vertex:ec,fog_fragment:tc,fog_pars_fragment:nc,gradientmap_pars_fragment:ic,lightmap_pars_fragment:rc,lights_lambert_fragment:ac,lights_lambert_pars_fragment:oc,lights_pars_begin:sc,lights_toon_fragment:cc,lights_toon_pars_fragment:fc,lights_phong_fragment:uc,lights_phong_pars_fragment:dc,lights_physical_fragment:hc,lights_physical_pars_fragment:pc,lights_fragment_begin:mc,lights_fragment_maps:_c,lights_fragment_end:gc,logdepthbuf_fragment:vc,logdepthbuf_pars_fragment:Sc,logdepthbuf_pars_vertex:Ec,logdepthbuf_vertex:xc,map_fragment:bc,map_pars_fragment:Mc,map_particle_fragment:Tc,map_particle_pars_fragment:Ac,metalnessmap_fragment:wc,metalnessmap_pars_fragment:Rc,morphinstance_vertex:yc,morphcolor_vertex:Cc,morphnormal_vertex:Pc,morphtarget_pars_vertex:Dc,morphtarget_vertex:Lc,normal_fragment_begin:Uc,normal_fragment_maps:Ic,normal_pars_fragment:Nc,normal_pars_vertex:Oc,normal_vertex:Fc,normalmap_pars_fragment:Bc,clearcoat_normal_fragment_begin:kc,clearcoat_normal_fragment_maps:Gc,clearcoat_pars_fragment:Hc,iridescence_pars_fragment:Vc,opaque_fragment:zc,packing:Wc,premultiplied_alpha_fragment:Xc,project_vertex:Yc,dithering_fragment:Kc,dithering_pars_fragment:qc,roughnessmap_fragment:Zc,roughnessmap_pars_fragment:jc,shadowmap_pars_fragment:$c,shadowmap_pars_vertex:Qc,shadowmap_vertex:Jc,shadowmask_pars_fragment:ef,skinbase_vertex:tf,skinning_pars_vertex:nf,skinning_vertex:rf,skinnormal_vertex:af,specularmap_fragment:of,specularmap_pars_fragment:sf,tonemapping_fragment:lf,tonemapping_pars_fragment:cf,transmission_fragment:ff,transmission_pars_fragment:uf,uv_pars_fragment:df,uv_pars_vertex:hf,uv_vertex:pf,worldpos_vertex:mf,background_vert:_f,background_frag:gf,backgroundCube_vert:vf,backgroundCube_frag:Sf,cube_vert:Ef,cube_frag:xf,depth_vert:bf,depth_frag:Mf,distance_vert:Tf,distance_frag:Af,equirect_vert:wf,equirect_frag:Rf,linedashed_vert:yf,linedashed_frag:Cf,meshbasic_vert:Pf,meshbasic_frag:Df,meshlambert_vert:Lf,meshlambert_frag:Uf,meshmatcap_vert:If,meshmatcap_frag:Nf,meshnormal_vert:Of,meshnormal_frag:Ff,meshphong_vert:Bf,meshphong_frag:kf,meshphysical_vert:Gf,meshphysical_frag:Hf,meshtoon_vert:Vf,meshtoon_frag:zf,points_vert:Wf,points_frag:Xf,shadow_vert:Yf,shadow_frag:Kf,sprite_vert:qf,sprite_frag:Zf},Se={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},yt={basic:{uniforms:gt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:gt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:gt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:gt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:gt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new at(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:gt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:gt([Se.points,Se.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:gt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:gt([Se.common,Se.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:gt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:gt([Se.sprite,Se.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:gt([Se.common,Se.displacementmap,{referencePosition:{value:new Be},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:gt([Se.lights,Se.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};yt.physical={uniforms:gt([yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Hn={r:0,b:0,g:0},Zt=new Zi,jf=new pn;function $f(e,n,t,i,l,r){const a=new at(0);let s=l===!0?0:1,_,E,b=null,x=0,u=null;function f(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){const R=v.backgroundBlurriness>0;T=n.get(T,R)}return T}function S(v){let T=!1;const R=f(v);R===null?c(a,s):R&&R.isColor&&(c(R,1),T=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(e.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(v,T){const R=f(T);R&&(R.isCubeTexture||R.mapping===fi)?(E===void 0&&(E=new Mt(new qi(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Ni(yt.backgroundCube.uniforms),vertexShader:yt.backgroundCube.vertexShader,fragmentShader:yt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),E.geometry.deleteAttribute("normal"),E.geometry.deleteAttribute("uv"),E.onBeforeRender=function(P,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(E.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(E)),Zt.copy(T.backgroundRotation),Zt.x*=-1,Zt.y*=-1,Zt.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Zt.y*=-1,Zt.z*=-1),E.material.uniforms.envMap.value=R,E.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,E.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,E.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,E.material.uniforms.backgroundRotation.value.setFromMatrix4(jf.makeRotationFromEuler(Zt)),E.material.toneMapped=lt.getTransfer(R.colorSpace)!==nt,(b!==R||x!==R.version||u!==e.toneMapping)&&(E.material.needsUpdate=!0,b=R,x=R.version,u=e.toneMapping),E.layers.enableAll(),v.unshift(E,E.geometry,E.material,0,0,null)):R&&R.isTexture&&(_===void 0&&(_=new Mt(new Ki(2,2),new Ht({name:"BackgroundMaterial",uniforms:Ni(yt.background.uniforms),vertexShader:yt.background.vertexShader,fragmentShader:yt.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(_)),_.material.uniforms.t2D.value=R,_.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,_.material.toneMapped=lt.getTransfer(R.colorSpace)!==nt,R.matrixAutoUpdate===!0&&R.updateMatrix(),_.material.uniforms.uvTransform.value.copy(R.matrix),(b!==R||x!==R.version||u!==e.toneMapping)&&(_.material.needsUpdate=!0,b=R,x=R.version,u=e.toneMapping),_.layers.enableAll(),v.unshift(_,_.geometry,_.material,0,0,null))}function c(v,T){v.getRGB(Hn,ja(e)),t.buffers.color.setClear(Hn.r,Hn.g,Hn.b,T,r)}function o(){E!==void 0&&(E.geometry.dispose(),E.material.dispose(),E=void 0),_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),s=T,c(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(v){s=v,c(a,s)},render:S,addToRenderList:g,dispose:o}}function Qf(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},l=u(null);let r=l,a=!1;function s(B,C,F,d,N){let H=!1;const O=x(B,d,F,C);r!==O&&(r=O,E(r.object)),H=f(B,d,F,N),H&&S(B,d,F,N),N!==null&&n.update(N,e.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,R(B,C,F,d),N!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function _(){return e.createVertexArray()}function E(B){return e.bindVertexArray(B)}function b(B){return e.deleteVertexArray(B)}function x(B,C,F,d){const N=d.wireframe===!0;let H=i[C.id];H===void 0&&(H={},i[C.id]=H);const O=B.isInstancedMesh===!0?B.id:0;let re=H[O];re===void 0&&(re={},H[O]=re);let Z=re[F.id];Z===void 0&&(Z={},re[F.id]=Z);let ce=Z[N];return ce===void 0&&(ce=u(_()),Z[N]=ce),ce}function u(B){const C=[],F=[],d=[];for(let N=0;N<t;N++)C[N]=0,F[N]=0,d[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:d,object:B,attributes:{},index:null}}function f(B,C,F,d){const N=r.attributes,H=C.attributes;let O=0;const re=F.getAttributes();for(const Z in re)if(re[Z].location>=0){const W=N[Z];let G=H[Z];if(G===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(G=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(G=B.instanceColor)),W===void 0||W.attribute!==G||G&&W.data!==G.data)return!0;O++}return r.attributesNum!==O||r.index!==d}function S(B,C,F,d){const N={},H=C.attributes;let O=0;const re=F.getAttributes();for(const Z in re)if(re[Z].location>=0){let W=H[Z];W===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(W=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(W=B.instanceColor));const G={};G.attribute=W,W&&W.data&&(G.data=W.data),N[Z]=G,O++}r.attributes=N,r.attributesNum=O,r.index=d}function g(){const B=r.newAttributes;for(let C=0,F=B.length;C<F;C++)B[C]=0}function c(B){o(B,0)}function o(B,C){const F=r.newAttributes,d=r.enabledAttributes,N=r.attributeDivisors;F[B]=1,d[B]===0&&(e.enableVertexAttribArray(B),d[B]=1),N[B]!==C&&(e.vertexAttribDivisor(B,C),N[B]=C)}function v(){const B=r.newAttributes,C=r.enabledAttributes;for(let F=0,d=C.length;F<d;F++)C[F]!==B[F]&&(e.disableVertexAttribArray(F),C[F]=0)}function T(B,C,F,d,N,H,O){O===!0?e.vertexAttribIPointer(B,C,F,N,H):e.vertexAttribPointer(B,C,F,d,N,H)}function R(B,C,F,d){g();const N=d.attributes,H=F.getAttributes(),O=C.defaultAttributeValues;for(const re in H){const Z=H[re];if(Z.location>=0){let ce=N[re];if(ce===void 0&&(re==="instanceMatrix"&&B.instanceMatrix&&(ce=B.instanceMatrix),re==="instanceColor"&&B.instanceColor&&(ce=B.instanceColor)),ce!==void 0){const W=ce.normalized,G=ce.itemSize,ge=n.get(ce);if(ge===void 0)continue;const pe=ge.buffer,fe=ge.type,te=ge.bytesPerElement,ue=fe===e.INT||fe===e.UNSIGNED_INT||ce.gpuType===qa;if(ce.isInterleavedBufferAttribute){const se=ce.data,Me=se.stride,Re=ce.offset;if(se.isInstancedInterleavedBuffer){for(let ye=0;ye<Z.locationSize;ye++)o(Z.location+ye,se.meshPerAttribute);B.isInstancedMesh!==!0&&d._maxInstanceCount===void 0&&(d._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ye=0;ye<Z.locationSize;ye++)c(Z.location+ye);e.bindBuffer(e.ARRAY_BUFFER,pe);for(let ye=0;ye<Z.locationSize;ye++)T(Z.location+ye,G/Z.locationSize,fe,W,Me*te,(Re+G/Z.locationSize*ye)*te,ue)}else{if(ce.isInstancedBufferAttribute){for(let se=0;se<Z.locationSize;se++)o(Z.location+se,ce.meshPerAttribute);B.isInstancedMesh!==!0&&d._maxInstanceCount===void 0&&(d._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let se=0;se<Z.locationSize;se++)c(Z.location+se);e.bindBuffer(e.ARRAY_BUFFER,pe);for(let se=0;se<Z.locationSize;se++)T(Z.location+se,G/Z.locationSize,fe,W,G*te,G/Z.locationSize*se*te,ue)}}else if(O!==void 0){const W=O[re];if(W!==void 0)switch(W.length){case 2:e.vertexAttrib2fv(Z.location,W);break;case 3:e.vertexAttrib3fv(Z.location,W);break;case 4:e.vertexAttrib4fv(Z.location,W);break;default:e.vertexAttrib1fv(Z.location,W)}}}}v()}function P(){A();for(const B in i){const C=i[B];for(const F in C){const d=C[F];for(const N in d){const H=d[N];for(const O in H)b(H[O].object),delete H[O];delete d[N]}}delete i[B]}}function D(B){if(i[B.id]===void 0)return;const C=i[B.id];for(const F in C){const d=C[F];for(const N in d){const H=d[N];for(const O in H)b(H[O].object),delete H[O];delete d[N]}}delete i[B.id]}function L(B){for(const C in i){const F=i[C];for(const d in F){const N=F[d];if(N[B.id]===void 0)continue;const H=N[B.id];for(const O in H)b(H[O].object),delete H[O];delete N[B.id]}}}function M(B){for(const C in i){const F=i[C],d=B.isInstancedMesh===!0?B.id:0,N=F[d];if(N!==void 0){for(const H in N){const O=N[H];for(const re in O)b(O[re].object),delete O[re];delete N[H]}delete F[d],Object.keys(F).length===0&&delete i[C]}}}function A(){X(),a=!0,r!==l&&(r=l,E(r.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:s,reset:A,resetDefaultState:X,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfObject:M,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:c,disableUnusedAttributes:v}}function Jf(e,n,t){let i;function l(E){i=E}function r(E,b){e.drawArrays(i,E,b),t.update(b,i,1)}function a(E,b,x){x!==0&&(e.drawArraysInstanced(i,E,b,x),t.update(b,i,x))}function s(E,b,x){if(x===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,E,0,b,0,x);let f=0;for(let S=0;S<x;S++)f+=b[S];t.update(f,i,1)}function _(E,b,x,u){if(x===0)return;const f=n.get("WEBGL_multi_draw");if(f===null)for(let S=0;S<E.length;S++)a(E[S],b[S],u[S]);else{f.multiDrawArraysInstancedWEBGL(i,E,0,b,0,u,0,x);let S=0;for(let g=0;g<x;g++)S+=b[g]*u[g];t.update(S,i,1)}}this.setMode=l,this.render=r,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=_}function eu(e,n,t,i){let l;function r(){if(l!==void 0)return l;if(n.has("EXT_texture_filter_anisotropic")===!0){const L=n.get("EXT_texture_filter_anisotropic");l=e.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function a(L){return!(L!==Ot&&i.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(L){const M=L===Yt&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(L!==Ct&&i.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Wt&&!M)}function _(L){if(L==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let E=t.precision!==void 0?t.precision:"highp";const b=_(E);b!==E&&(et("WebGLRenderer:",E,"not supported, using",b,"instead."),E=b);const x=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),o=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),R=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),P=e.getParameter(e.MAX_SAMPLES),D=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:_,textureFormatReadable:a,textureTypeReadable:s,precision:E,logarithmicDepthBuffer:x,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:S,maxTextureSize:g,maxCubemapSize:c,maxAttributes:o,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:R,maxSamples:P,samples:D}}function tu(e){const n=this;let t=null,i=0,l=!1,r=!1;const a=new Ha,s=new Ke,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(x,u){const f=x.length!==0||u||i!==0||l;return l=u,i=x.length,f},this.beginShadows=function(){r=!0,b(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(x,u){t=b(x,u,0)},this.setState=function(x,u,f){const S=x.clippingPlanes,g=x.clipIntersection,c=x.clipShadows,o=e.get(x);if(!l||S===null||S.length===0||r&&!c)r?b(null):E();else{const v=r?0:i,T=v*4;let R=o.clippingState||null;_.value=R,R=b(S,u,T,f);for(let P=0;P!==T;++P)R[P]=t[P];o.clippingState=R,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function E(){_.value!==t&&(_.value=t,_.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function b(x,u,f,S){const g=x!==null?x.length:0;let c=null;if(g!==0){if(c=_.value,S!==!0||c===null){const o=f+g*4,v=u.matrixWorldInverse;s.getNormalMatrix(v),(c===null||c.length<o)&&(c=new Float32Array(o));for(let T=0,R=f;T!==g;++T,R+=4)a.copy(x[T]).applyMatrix4(v,s),a.normal.toArray(c,R),c[R+3]=a.constant}_.value=c,_.needsUpdate=!0}return n.numPlanes=g,n.numIntersection=0,c}}const Xt=4,$r=[.125,.215,.35,.446,.526,.582],$t=20,nu=256,En=new Wi,Qr=new at;let Mi=null,Ti=0,Ai=0,wi=!1;const iu=new Be;class Jr{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,l=100,r={}){const{size:a=256,position:s=iu}=r;Mi=this._renderer.getRenderTarget(),Ti=this._renderer.getActiveCubeFace(),Ai=this._renderer.getActiveMipmapLevel(),wi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(n,i,l,_,s),t>0&&this._blur(_,0,0,t),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=na(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ta(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(Mi,Ti,Ai),this._renderer.xr.enabled=wi,n.scissorTest=!1,rn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===Un||n.mapping===_n?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Mi=this._renderer.getRenderTarget(),Ti=this._renderer.getActiveCubeFace(),Ai=this._renderer.getActiveMipmapLevel(),wi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:Yt,format:Ot,colorSpace:ci,depthBuffer:!1},l=ea(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ea(n,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ru(r)),this._blurMaterial=ou(r,n,t),this._ggxMaterial=au(r,n,t)}return l}_compileMaterial(n){const t=new Mt(new gn,n);this._renderer.compile(t,En)}_sceneToCubeUV(n,t,i,l,r){const _=new Kn(90,1,t,i),E=[1,-1,1,1,1,1],b=[1,1,1,-1,-1,-1],x=this._renderer,u=x.autoClear,f=x.toneMapping;x.getClearColor(Qr),x.toneMapping=Pt,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mt(new qi,new ni({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,c=g.material;let o=!1;const v=n.background;v?v.isColor&&(c.color.copy(v),n.background=null,o=!0):(c.color.copy(Qr),o=!0);for(let T=0;T<6;T++){const R=T%3;R===0?(_.up.set(0,E[T],0),_.position.set(r.x,r.y,r.z),_.lookAt(r.x+b[T],r.y,r.z)):R===1?(_.up.set(0,0,E[T]),_.position.set(r.x,r.y,r.z),_.lookAt(r.x,r.y+b[T],r.z)):(_.up.set(0,E[T],0),_.position.set(r.x,r.y,r.z),_.lookAt(r.x,r.y,r.z+b[T]));const P=this._cubeSize;rn(l,R*P,T>2?P:0,P,P),x.setRenderTarget(l),o&&x.render(g,_),x.render(n,_)}x.toneMapping=f,x.autoClear=u,n.background=v}_textureToCubeUV(n,t){const i=this._renderer,l=n.mapping===Un||n.mapping===_n;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=na()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ta());const r=l?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const s=r.uniforms;s.envMap.value=n;const _=this._cubeSize;rn(t,0,0,3*_,2*_),i.setRenderTarget(t),i.render(a,En)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const l=this._lodMeshes.length;for(let r=1;r<l;r++)this._applyGGXFilter(n,r-1,r);t.autoClear=i}_applyGGXFilter(n,t,i){const l=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,s=this._lodMeshes[i];s.material=a;const _=a.uniforms,E=i/(this._lodMeshes.length-1),b=t/(this._lodMeshes.length-1),x=Math.sqrt(E*E-b*b),u=0+E*1.25,f=x*u,{_lodMax:S}=this,g=this._sizeLods[i],c=3*g*(i>S-Xt?i-S+Xt:0),o=4*(this._cubeSize-g);_.envMap.value=n.texture,_.roughness.value=f,_.mipInt.value=S-t,rn(r,c,o,3*g,2*g),l.setRenderTarget(r),l.render(s,En),_.envMap.value=r.texture,_.roughness.value=0,_.mipInt.value=S-i,rn(n,c,o,3*g,2*g),l.setRenderTarget(n),l.render(s,En)}_blur(n,t,i,l,r){const a=this._pingPongRenderTarget;this._halfBlur(n,a,t,i,l,"latitudinal",r),this._halfBlur(a,n,i,i,l,"longitudinal",r)}_halfBlur(n,t,i,l,r,a,s){const _=this._renderer,E=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const b=3,x=this._lodMeshes[l];x.material=E;const u=E.uniforms,f=this._sizeLods[i]-1,S=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*$t-1),g=r/S,c=isFinite(r)?1+Math.floor(b*g):$t;c>$t&&et(`sigmaRadians, ${r}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${$t}`);const o=[];let v=0;for(let L=0;L<$t;++L){const M=L/g,A=Math.exp(-M*M/2);o.push(A),L===0?v+=A:L<c&&(v+=2*A)}for(let L=0;L<o.length;L++)o[L]=o[L]/v;u.envMap.value=n.texture,u.samples.value=c,u.weights.value=o,u.latitudinal.value=a==="latitudinal",s&&(u.poleAxis.value=s);const{_lodMax:T}=this;u.dTheta.value=S,u.mipInt.value=T-i;const R=this._sizeLods[l],P=3*R*(l>T-Xt?l-T+Xt:0),D=4*(this._cubeSize-R);rn(t,P,D,3*R,2*R),_.setRenderTarget(t),_.render(x,En)}}function ru(e){const n=[],t=[],i=[];let l=e;const r=e-Xt+1+$r.length;for(let a=0;a<r;a++){const s=Math.pow(2,l);n.push(s);let _=1/s;a>e-Xt?_=$r[a-e+Xt-1]:a===0&&(_=0),t.push(_);const E=1/(s-2),b=-E,x=1+E,u=[b,b,x,b,x,x,b,b,x,x,b,x],f=6,S=6,g=3,c=2,o=1,v=new Float32Array(g*S*f),T=new Float32Array(c*S*f),R=new Float32Array(o*S*f);for(let D=0;D<f;D++){const L=D%3*2/3-1,M=D>2?0:-1,A=[L,M,0,L+2/3,M,0,L+2/3,M+1,0,L,M,0,L+2/3,M+1,0,L,M+1,0];v.set(A,g*S*D),T.set(u,c*S*D);const X=[D,D,D,D,D,D];R.set(X,o*S*D)}const P=new gn;P.setAttribute("position",new Rn(v,g)),P.setAttribute("uv",new Rn(T,c)),P.setAttribute("faceIndex",new Rn(R,o)),i.push(new Mt(P,null)),l>Xt&&l--}return{lodMeshes:i,sizeLods:n,sigmas:t}}function ea(e,n,t){const i=new Dt(e,n,t);return i.texture.mapping=fi,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rn(e,n,t,i,l){e.viewport.set(n,t,i,l),e.scissor.set(n,t,i,l)}function au(e,n,t){return new Ht({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nu,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ui(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function ou(e,n,t){const i=new Float32Array($t),l=new Be(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:$t,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ui(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function ta(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ui(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function na(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ui(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function ui(){return`

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
	`}class co extends Dt{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},l=[i,i,i,i,i,i];this.texture=new $a(l),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new qi(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:Ni(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bt,blending:kt});r.uniforms.tEquirect.value=t;const a=new Mt(l,r),s=t.minFilter;return t.minFilter===sn&&(t.minFilter=xt),new Ys(1,10,this).update(n,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(n,t=!0,i=!0,l=!0){const r=n.getRenderTarget();for(let a=0;a<6;a++)n.setRenderTarget(this,a),n.clear(t,i,l);n.setRenderTarget(r)}}function su(e){let n=new WeakMap,t=new WeakMap,i=null;function l(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===xi||f===bi)if(n.has(u)){const S=n.get(u).texture;return s(S,u.mapping)}else{const S=u.image;if(S&&S.height>0){const g=new co(S.height);return g.fromEquirectangularTexture(e,u),n.set(u,g),u.addEventListener("dispose",E),s(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,S=f===xi||f===bi,g=f===Un||f===_n;if(S||g){let c=t.get(u);const o=c!==void 0?c.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==o)return i===null&&(i=new Jr(e)),c=S?i.fromEquirectangular(u,c):i.fromCubemap(u,c),c.texture.pmremVersion=u.pmremVersion,t.set(u,c),c.texture;if(c!==void 0)return c.texture;{const v=u.image;return S&&v&&v.height>0||g&&v&&_(v)?(i===null&&(i=new Jr(e)),c=S?i.fromEquirectangular(u):i.fromCubemap(u),c.texture.pmremVersion=u.pmremVersion,t.set(u,c),u.addEventListener("dispose",b),c.texture):null}}}return u}function s(u,f){return f===xi?u.mapping=Un:f===bi&&(u.mapping=_n),u}function _(u){let f=0;const S=6;for(let g=0;g<S;g++)u[g]!==void 0&&f++;return f===S}function E(u){const f=u.target;f.removeEventListener("dispose",E);const S=n.get(f);S!==void 0&&(n.delete(f),S.dispose())}function b(u){const f=u.target;f.removeEventListener("dispose",b);const S=t.get(f);S!==void 0&&(t.delete(f),S.dispose())}function x(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:l,dispose:x}}function lu(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const l=e.getExtension(i);return n[i]=l,l}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const l=t(i);return l===null&&Ga("WebGLRenderer: "+i+" extension not supported."),l}}}function cu(e,n,t,i){const l={},r=new WeakMap;function a(x){const u=x.target;u.index!==null&&n.remove(u.index);for(const S in u.attributes)n.remove(u.attributes[S]);u.removeEventListener("dispose",a),delete l[u.id];const f=r.get(u);f&&(n.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function s(x,u){return l[u.id]===!0||(u.addEventListener("dispose",a),l[u.id]=!0,t.memory.geometries++),u}function _(x){const u=x.attributes;for(const f in u)n.update(u[f],e.ARRAY_BUFFER)}function E(x){const u=[],f=x.index,S=x.attributes.position;let g=0;if(S===void 0)return;if(f!==null){const v=f.array;g=f.version;for(let T=0,R=v.length;T<R;T+=3){const P=v[T+0],D=v[T+1],L=v[T+2];u.push(P,D,D,L,L,P)}}else{const v=S.array;g=S.version;for(let T=0,R=v.length/3-1;T<R;T+=3){const P=T+0,D=T+1,L=T+2;u.push(P,D,D,L,L,P)}}const c=new(S.count>=65535?Ks:qs)(u,1);c.version=g;const o=r.get(x);o&&n.remove(o),r.set(x,c)}function b(x){const u=r.get(x);if(u){const f=x.index;f!==null&&u.version<f.version&&E(x)}else E(x);return r.get(x)}return{get:s,update:_,getWireframeAttribute:b}}function fu(e,n,t){let i;function l(u){i=u}let r,a;function s(u){r=u.type,a=u.bytesPerElement}function _(u,f){e.drawElements(i,f,r,u*a),t.update(f,i,1)}function E(u,f,S){S!==0&&(e.drawElementsInstanced(i,f,r,u*a,S),t.update(f,i,S))}function b(u,f,S){if(S===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,S);let c=0;for(let o=0;o<S;o++)c+=f[o];t.update(c,i,1)}function x(u,f,S,g){if(S===0)return;const c=n.get("WEBGL_multi_draw");if(c===null)for(let o=0;o<u.length;o++)E(u[o]/a,f[o],g[o]);else{c.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,g,0,S);let o=0;for(let v=0;v<S;v++)o+=f[v]*g[v];t.update(o,i,1)}}this.setMode=l,this.setIndex=s,this.render=_,this.renderInstances=E,this.renderMultiDraw=b,this.renderMultiDrawInstances=x}function uu(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,s){switch(t.calls++,a){case e.TRIANGLES:t.triangles+=s*(r/3);break;case e.LINES:t.lines+=s*(r/2);break;case e.LINE_STRIP:t.lines+=s*(r-1);break;case e.LINE_LOOP:t.lines+=s*r;break;case e.POINTS:t.points+=s*r;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function l(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:l,update:i}}function du(e,n,t){const i=new WeakMap,l=new vt;function r(a,s,_){const E=a.morphTargetInfluences,b=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,x=b!==void 0?b.length:0;let u=i.get(s);if(u===void 0||u.count!==x){let A=function(){L.dispose(),i.delete(s),s.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const f=s.morphAttributes.position!==void 0,S=s.morphAttributes.normal!==void 0,g=s.morphAttributes.color!==void 0,c=s.morphAttributes.position||[],o=s.morphAttributes.normal||[],v=s.morphAttributes.color||[];let T=0;f===!0&&(T=1),S===!0&&(T=2),g===!0&&(T=3);let R=s.attributes.position.count*T,P=1;R>n.maxTextureSize&&(P=Math.ceil(R/n.maxTextureSize),R=n.maxTextureSize);const D=new Float32Array(R*P*4*x),L=new Za(D,R,P,x);L.type=Wt,L.needsUpdate=!0;const M=T*4;for(let X=0;X<x;X++){const B=c[X],C=o[X],F=v[X],d=R*P*4*X;for(let N=0;N<B.count;N++){const H=N*M;f===!0&&(l.fromBufferAttribute(B,N),D[d+H+0]=l.x,D[d+H+1]=l.y,D[d+H+2]=l.z,D[d+H+3]=0),S===!0&&(l.fromBufferAttribute(C,N),D[d+H+4]=l.x,D[d+H+5]=l.y,D[d+H+6]=l.z,D[d+H+7]=0),g===!0&&(l.fromBufferAttribute(F,N),D[d+H+8]=l.x,D[d+H+9]=l.y,D[d+H+10]=l.z,D[d+H+11]=F.itemSize===4?l.w:1)}}u={count:x,texture:L,size:new rt(R,P)},i.set(s,u),s.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)_.getUniforms().setValue(e,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<E.length;g++)f+=E[g];const S=s.morphTargetsRelative?1:1-f;_.getUniforms().setValue(e,"morphTargetBaseInfluence",S),_.getUniforms().setValue(e,"morphTargetInfluences",E)}_.getUniforms().setValue(e,"morphTargetsTexture",u.texture,t),_.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:r}}function hu(e,n,t,i,l){let r=new WeakMap;function a(E){const b=l.render.frame,x=E.geometry,u=n.get(E,x);if(r.get(u)!==b&&(n.update(u),r.set(u,b)),E.isInstancedMesh&&(E.hasEventListener("dispose",_)===!1&&E.addEventListener("dispose",_),r.get(E)!==b&&(t.update(E.instanceMatrix,e.ARRAY_BUFFER),E.instanceColor!==null&&t.update(E.instanceColor,e.ARRAY_BUFFER),r.set(E,b))),E.isSkinnedMesh){const f=E.skeleton;r.get(f)!==b&&(f.update(),r.set(f,b))}return u}function s(){r=new WeakMap}function _(E){const b=E.target;b.removeEventListener("dispose",_),i.releaseStatesOfObject(b),t.remove(b.instanceMatrix),b.instanceColor!==null&&t.remove(b.instanceColor)}return{update:a,dispose:s}}const pu={[ro]:"LINEAR_TONE_MAPPING",[io]:"REINHARD_TONE_MAPPING",[no]:"CINEON_TONE_MAPPING",[to]:"ACES_FILMIC_TONE_MAPPING",[eo]:"AGX_TONE_MAPPING",[Ja]:"NEUTRAL_TONE_MAPPING",[Qa]:"CUSTOM_TONE_MAPPING"};function mu(e,n,t,i,l){const r=new Dt(n,t,{type:e,depthBuffer:i,stencilBuffer:l}),a=new Dt(n,t,{type:Yt,depthBuffer:!1,stencilBuffer:!1}),s=new gn;s.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute("uv",new wn([0,2,0,0,2,0],2));const _=new Xo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),E=new Mt(s,_),b=new Wi(-1,1,1,-1,0,1);let x=null,u=null,f=!1,S,g=null,c=[],o=!1;this.setSize=function(v,T){r.setSize(v,T),a.setSize(v,T);for(let R=0;R<c.length;R++){const P=c[R];P.setSize&&P.setSize(v,T)}},this.setEffects=function(v){c=v,o=c.length>0&&c[0].isRenderPass===!0;const T=r.width,R=r.height;for(let P=0;P<c.length;P++){const D=c[P];D.setSize&&D.setSize(T,R)}},this.begin=function(v,T){if(f||v.toneMapping===Pt&&c.length===0)return!1;if(g=T,T!==null){const R=T.width,P=T.height;(r.width!==R||r.height!==P)&&this.setSize(R,P)}return o===!1&&v.setRenderTarget(r),S=v.toneMapping,v.toneMapping=Pt,!0},this.hasRenderPass=function(){return o},this.end=function(v,T){v.toneMapping=S,f=!0;let R=r,P=a;for(let D=0;D<c.length;D++){const L=c[D];if(L.enabled!==!1&&(L.render(v,P,R,T),L.needsSwap!==!1)){const M=R;R=P,P=M}}if(x!==v.outputColorSpace||u!==v.toneMapping){x=v.outputColorSpace,u=v.toneMapping,_.defines={},lt.getTransfer(x)===nt&&(_.defines.SRGB_TRANSFER="");const D=pu[u];D&&(_.defines[D]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=R.texture,v.setRenderTarget(g),v.render(E,b),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),s.dispose(),_.dispose()}}const fo=new tl,Bi=new ei(1,1),uo=new Za,ho=new js,po=new $a,ia=[],ra=[],aa=new Float32Array(16),oa=new Float32Array(9),sa=new Float32Array(4);function vn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const l=n*t;let r=ia[l];if(r===void 0&&(r=new Float32Array(l),ia[l]=r),n!==0){i.toArray(r,0);for(let a=1,s=0;a!==n;++a)s+=t,e[a].toArray(r,s)}return r}function ft(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ut(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function di(e,n){let t=ra[n];t===void 0&&(t=new Int32Array(n),ra[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function _u(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function gu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2fv(this.addr,n),ut(t,n)}}function vu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(ft(t,n))return;e.uniform3fv(this.addr,n),ut(t,n)}}function Su(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4fv(this.addr,n),ut(t,n)}}function Eu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;sa.set(i),e.uniformMatrix2fv(this.addr,!1,sa),ut(t,i)}}function xu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;oa.set(i),e.uniformMatrix3fv(this.addr,!1,oa),ut(t,i)}}function bu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;aa.set(i),e.uniformMatrix4fv(this.addr,!1,aa),ut(t,i)}}function Mu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Tu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2iv(this.addr,n),ut(t,n)}}function Au(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ft(t,n))return;e.uniform3iv(this.addr,n),ut(t,n)}}function wu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4iv(this.addr,n),ut(t,n)}}function Ru(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function yu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2uiv(this.addr,n),ut(t,n)}}function Cu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ft(t,n))return;e.uniform3uiv(this.addr,n),ut(t,n)}}function Pu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4uiv(this.addr,n),ut(t,n)}}function Du(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l);let r;this.type===e.SAMPLER_2D_SHADOW?(Bi.compareFunction=t.isReversedDepthBuffer()?Xi:Yi,r=Bi):r=fo,t.setTexture2D(n||r,l)}function Lu(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTexture3D(n||ho,l)}function Uu(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTextureCube(n||po,l)}function Iu(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTexture2DArray(n||uo,l)}function Nu(e){switch(e){case 5126:return _u;case 35664:return gu;case 35665:return vu;case 35666:return Su;case 35674:return Eu;case 35675:return xu;case 35676:return bu;case 5124:case 35670:return Mu;case 35667:case 35671:return Tu;case 35668:case 35672:return Au;case 35669:case 35673:return wu;case 5125:return Ru;case 36294:return yu;case 36295:return Cu;case 36296:return Pu;case 35678:case 36198:case 36298:case 36306:case 35682:return Du;case 35679:case 36299:case 36307:return Lu;case 35680:case 36300:case 36308:case 36293:return Uu;case 36289:case 36303:case 36311:case 36292:return Iu}}function Ou(e,n){e.uniform1fv(this.addr,n)}function Fu(e,n){const t=vn(n,this.size,2);e.uniform2fv(this.addr,t)}function Bu(e,n){const t=vn(n,this.size,3);e.uniform3fv(this.addr,t)}function ku(e,n){const t=vn(n,this.size,4);e.uniform4fv(this.addr,t)}function Gu(e,n){const t=vn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Hu(e,n){const t=vn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Vu(e,n){const t=vn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function zu(e,n){e.uniform1iv(this.addr,n)}function Wu(e,n){e.uniform2iv(this.addr,n)}function Xu(e,n){e.uniform3iv(this.addr,n)}function Yu(e,n){e.uniform4iv(this.addr,n)}function Ku(e,n){e.uniform1uiv(this.addr,n)}function qu(e,n){e.uniform2uiv(this.addr,n)}function Zu(e,n){e.uniform3uiv(this.addr,n)}function ju(e,n){e.uniform4uiv(this.addr,n)}function $u(e,n,t){const i=this.cache,l=n.length,r=di(t,l);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));let a;this.type===e.SAMPLER_2D_SHADOW?a=Bi:a=fo;for(let s=0;s!==l;++s)t.setTexture2D(n[s]||a,r[s])}function Qu(e,n,t){const i=this.cache,l=n.length,r=di(t,l);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==l;++a)t.setTexture3D(n[a]||ho,r[a])}function Ju(e,n,t){const i=this.cache,l=n.length,r=di(t,l);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==l;++a)t.setTextureCube(n[a]||po,r[a])}function ed(e,n,t){const i=this.cache,l=n.length,r=di(t,l);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==l;++a)t.setTexture2DArray(n[a]||uo,r[a])}function td(e){switch(e){case 5126:return Ou;case 35664:return Fu;case 35665:return Bu;case 35666:return ku;case 35674:return Gu;case 35675:return Hu;case 35676:return Vu;case 5124:case 35670:return zu;case 35667:case 35671:return Wu;case 35668:case 35672:return Xu;case 35669:case 35673:return Yu;case 5125:return Ku;case 36294:return qu;case 36295:return Zu;case 36296:return ju;case 35678:case 36198:case 36298:case 36306:case 35682:return $u;case 35679:case 36299:case 36307:return Qu;case 35680:case 36300:case 36308:case 36293:return Ju;case 36289:case 36303:case 36311:case 36292:return ed}}class nd{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Nu(t.type)}}class id{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=td(t.type)}}class rd{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const l=this.seq;for(let r=0,a=l.length;r!==a;++r){const s=l[r];s.setValue(n,t[s.id],i)}}}const Ri=/(\w+)(\])?(\[|\.)?/g;function la(e,n){e.seq.push(n),e.map[n.id]=n}function ad(e,n,t){const i=e.name,l=i.length;for(Ri.lastIndex=0;;){const r=Ri.exec(i),a=Ri.lastIndex;let s=r[1];const _=r[2]==="]",E=r[3];if(_&&(s=s|0),E===void 0||E==="["&&a+2===l){la(t,E===void 0?new nd(s,e,n):new id(s,e,n));break}else{let x=t.map[s];x===void 0&&(x=new rd(s),la(t,x)),t=x}}}class jn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=n.getActiveUniform(t,a),_=n.getUniformLocation(t,s.name);ad(s,_,this)}const l=[],r=[];for(const a of this.seq)a.type===n.SAMPLER_2D_SHADOW||a.type===n.SAMPLER_CUBE_SHADOW||a.type===n.SAMPLER_2D_ARRAY_SHADOW?l.push(a):r.push(a);l.length>0&&(this.seq=l.concat(r))}setValue(n,t,i,l){const r=this.map[t];r!==void 0&&r.setValue(n,i,l)}setOptional(n,t,i){const l=t[i];l!==void 0&&this.setValue(n,i,l)}static upload(n,t,i,l){for(let r=0,a=t.length;r!==a;++r){const s=t[r],_=i[s.id];_.needsUpdate!==!1&&s.setValue(n,_.value,l)}}static seqWithValue(n,t){const i=[];for(let l=0,r=n.length;l!==r;++l){const a=n[l];a.id in t&&i.push(a)}return i}}function ca(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const od=37297;let sd=0;function ld(e,n){const t=e.split(`
`),i=[],l=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let a=l;a<r;a++){const s=a+1;i.push(`${s===n?">":" "} ${s}: ${t[a]}`)}return i.join(`
`)}const fa=new Ke;function cd(e){lt._getMatrix(fa,lt.workingColorSpace,e);const n=`mat3( ${fa.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(e)){case ao:return[n,"LinearTransferOETF"];case nt:return[n,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function ua(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ld(e.getShaderSource(n),s)}else return r}function fd(e,n){const t=cd(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ud={[ro]:"Linear",[io]:"Reinhard",[no]:"Cineon",[to]:"ACESFilmic",[eo]:"AgX",[Ja]:"Neutral",[Qa]:"Custom"};function dd(e,n){const t=ud[n];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vn=new Be;function hd(){lt.getLuminanceCoefficients(Vn);const e=Vn.x.toFixed(4),n=Vn.y.toFixed(4),t=Vn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pd(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tn).join(`
`)}function md(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function _d(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let l=0;l<i;l++){const r=e.getActiveAttrib(n,l),a=r.name;let s=1;r.type===e.FLOAT_MAT2&&(s=2),r.type===e.FLOAT_MAT3&&(s=3),r.type===e.FLOAT_MAT4&&(s=4),t[a]={type:r.type,location:e.getAttribLocation(n,a),locationSize:s}}return t}function Tn(e){return e!==""}function da(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function ha(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const gd=/^[ \t]*#include +<([\w\d./]+)>/gm;function ki(e){return e.replace(gd,Sd)}const vd=new Map;function Sd(e,n){let t=ze[n];if(t===void 0){const i=vd.get(n);if(i!==void 0)t=ze[i],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return ki(t)}const Ed=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pa(e){return e.replace(Ed,xd)}function xd(e,n,t,i){let l="";for(let r=parseInt(n);r<parseInt(t);r++)l+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return l}function ma(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}const bd={[qn]:"SHADOWMAP_TYPE_PCF",[Mn]:"SHADOWMAP_TYPE_VSM"};function Md(e){return bd[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Td={[Un]:"ENVMAP_TYPE_CUBE",[_n]:"ENVMAP_TYPE_CUBE",[fi]:"ENVMAP_TYPE_CUBE_UV"};function Ad(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Td[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const wd={[_n]:"ENVMAP_MODE_REFRACTION"};function Rd(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":wd[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yd={[el]:"ENVMAP_BLENDING_MULTIPLY",[Js]:"ENVMAP_BLENDING_MIX",[Qs]:"ENVMAP_BLENDING_ADD"};function Cd(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":yd[e.combine]||"ENVMAP_BLENDING_NONE"}function Pd(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Dd(e,n,t,i){const l=e.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const _=Md(t),E=Ad(t),b=Rd(t),x=Cd(t),u=Pd(t),f=pd(t),S=md(r),g=l.createProgram();let c,o,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Tn).join(`
`),c.length>0&&(c+=`
`),o=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Tn).join(`
`),o.length>0&&(o+=`
`)):(c=[ma(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+b:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+_:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tn).join(`
`),o=[ma(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+E:"",t.envMap?"#define "+b:"",t.envMap?"#define "+x:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+_:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pt?"#define TONE_MAPPING":"",t.toneMapping!==Pt?ze.tonemapping_pars_fragment:"",t.toneMapping!==Pt?dd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,fd("linearToOutputTexel",t.outputColorSpace),hd(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tn).join(`
`)),a=ki(a),a=da(a,t),a=ha(a,t),s=ki(s),s=da(s,t),s=ha(s,t),a=pa(a),s=pa(s),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,c=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,o=["#define varying in",t.glslVersion===Zr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const T=v+c+a,R=v+o+s,P=ca(l,l.VERTEX_SHADER,T),D=ca(l,l.FRAGMENT_SHADER,R);l.attachShader(g,P),l.attachShader(g,D),t.index0AttributeName!==void 0?l.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&l.bindAttribLocation(g,0,"position"),l.linkProgram(g);function L(B){if(e.debug.checkShaderErrors){const C=l.getProgramInfoLog(g)||"",F=l.getShaderInfoLog(P)||"",d=l.getShaderInfoLog(D)||"",N=C.trim(),H=F.trim(),O=d.trim();let re=!0,Z=!0;if(l.getProgramParameter(g,l.LINK_STATUS)===!1)if(re=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(l,g,P,D);else{const ce=ua(l,P,"vertex"),W=ua(l,D,"fragment");it("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(g,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+N+`
`+ce+`
`+W)}else N!==""?et("WebGLProgram: Program Info Log:",N):(H===""||O==="")&&(Z=!1);Z&&(B.diagnostics={runnable:re,programLog:N,vertexShader:{log:H,prefix:c},fragmentShader:{log:O,prefix:o}})}l.deleteShader(P),l.deleteShader(D),M=new jn(l,g),A=_d(l,g)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=l.getProgramParameter(g,od)),X},this.destroy=function(){i.releaseStatesOfProgram(this),l.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sd++,this.cacheKey=n,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=D,this}let Ld=0;class Ud{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,l=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(n);return a.has(l)===!1&&(a.add(l),l.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Id(n),t.set(n,i)),i}}class Id{constructor(n){this.id=Ld++,this.code=n,this.usedTimes=0}}function Nd(e,n,t,i,l,r){const a=new Zs,s=new Ud,_=new Set,E=[],b=new Map,x=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return _.add(M),M===0?"uv":`uv${M}`}function g(M,A,X,B,C){const F=B.fog,d=C.geometry,N=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,H=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,O=n.get(M.envMap||N,H),re=O&&O.mapping===fi?O.image.height:null,Z=f[M.type];M.precision!==null&&(u=i.getMaxPrecision(M.precision),u!==M.precision&&et("WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));const ce=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,W=ce!==void 0?ce.length:0;let G=0;d.morphAttributes.position!==void 0&&(G=1),d.morphAttributes.normal!==void 0&&(G=2),d.morphAttributes.color!==void 0&&(G=3);let ge,pe,fe,te;if(Z){const Ze=yt[Z];ge=Ze.vertexShader,pe=Ze.fragmentShader}else ge=M.vertexShader,pe=M.fragmentShader,s.update(M),fe=s.getVertexShaderID(M),te=s.getFragmentShaderID(M);const ue=e.getRenderTarget(),se=e.state.buffers.depth.getReversed(),Me=C.isInstancedMesh===!0,Re=C.isBatchedMesh===!0,ye=!!M.map,qe=!!M.matcap,ke=!!O,p=!!M.aoMap,J=!!M.lightMap,K=!!M.bumpMap,I=!!M.normalMap,h=!!M.displacementMap,V=!!M.emissiveMap,ne=!!M.metalnessMap,ae=!!M.roughnessMap,k=M.anisotropy>0,w=M.clearcoat>0,m=M.dispersion>0,U=M.iridescence>0,q=M.sheen>0,ie=M.transmission>0,j=k&&!!M.anisotropyMap,Ee=w&&!!M.clearcoatMap,_e=w&&!!M.clearcoatNormalMap,Pe=w&&!!M.clearcoatRoughnessMap,Fe=U&&!!M.iridescenceMap,le=U&&!!M.iridescenceThicknessMap,he=q&&!!M.sheenColorMap,De=q&&!!M.sheenRoughnessMap,we=!!M.specularMap,Te=!!M.specularColorMap,Ve=!!M.specularIntensityMap,z=ie&&!!M.transmissionMap,ve=ie&&!!M.thicknessMap,me=!!M.gradientMap,Ae=!!M.alphaMap,de=M.alphaTest>0,oe=!!M.alphaHash,Le=!!M.extensions;let Ge=Pt;M.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ge=e.toneMapping);const tt={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:ge,fragmentShader:pe,defines:M.defines,customVertexShaderID:fe,customFragmentShaderID:te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:Re,batchingColor:Re&&C._colorsTexture!==null,instancing:Me,instancingColor:Me&&C.instanceColor!==null,instancingMorph:Me&&C.morphTexture!==null,outputColorSpace:ue===null?e.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:ci,alphaToCoverage:!!M.alphaToCoverage,map:ye,matcap:qe,envMap:ke,envMapMode:ke&&O.mapping,envMapCubeUVHeight:re,aoMap:p,lightMap:J,bumpMap:K,normalMap:I,displacementMap:h,emissiveMap:V,normalMapObjectSpace:I&&M.normalMapType===Xs,normalMapTangentSpace:I&&M.normalMapType===Ws,metalnessMap:ne,roughnessMap:ae,anisotropy:k,anisotropyMap:j,clearcoat:w,clearcoatMap:Ee,clearcoatNormalMap:_e,clearcoatRoughnessMap:Pe,dispersion:m,iridescence:U,iridescenceMap:Fe,iridescenceThicknessMap:le,sheen:q,sheenColorMap:he,sheenRoughnessMap:De,specularMap:we,specularColorMap:Te,specularIntensityMap:Ve,transmission:ie,transmissionMap:z,thicknessMap:ve,gradientMap:me,opaque:M.transparent===!1&&M.blending===Zn&&M.alphaToCoverage===!1,alphaMap:Ae,alphaTest:de,alphaHash:oe,combine:M.combine,mapUv:ye&&S(M.map.channel),aoMapUv:p&&S(M.aoMap.channel),lightMapUv:J&&S(M.lightMap.channel),bumpMapUv:K&&S(M.bumpMap.channel),normalMapUv:I&&S(M.normalMap.channel),displacementMapUv:h&&S(M.displacementMap.channel),emissiveMapUv:V&&S(M.emissiveMap.channel),metalnessMapUv:ne&&S(M.metalnessMap.channel),roughnessMapUv:ae&&S(M.roughnessMap.channel),anisotropyMapUv:j&&S(M.anisotropyMap.channel),clearcoatMapUv:Ee&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:_e&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&S(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:he&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&S(M.sheenRoughnessMap.channel),specularMapUv:we&&S(M.specularMap.channel),specularColorMapUv:Te&&S(M.specularColorMap.channel),specularIntensityMapUv:Ve&&S(M.specularIntensityMap.channel),transmissionMapUv:z&&S(M.transmissionMap.channel),thicknessMapUv:ve&&S(M.thicknessMap.channel),alphaMapUv:Ae&&S(M.alphaMap.channel),vertexTangents:!!d.attributes.tangent&&(I||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!d.attributes.color&&d.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!d.attributes.uv&&(ye||Ae),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||d.attributes.normal===void 0&&I===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:se,skinning:C.isSkinnedMesh===!0,morphTargets:d.morphAttributes.position!==void 0,morphNormals:d.morphAttributes.normal!==void 0,morphColors:d.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:G,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&X.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ge,decodeVideoTexture:ye&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===nt,decodeVideoTextureEmissive:V&&M.emissiveMap.isVideoTexture===!0&&lt.getTransfer(M.emissiveMap.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Nt,flipSided:M.side===bt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Le&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&M.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return tt.vertexUv1s=_.has(1),tt.vertexUv2s=_.has(2),tt.vertexUv3s=_.has(3),_.clear(),tt}function c(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const X in M.defines)A.push(X),A.push(M.defines[X]);return M.isRawShaderMaterial===!1&&(o(A,M),v(A,M),A.push(e.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function o(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function v(M,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),M.push(a.mask)}function T(M){const A=f[M.type];let X;if(A){const B=yt[A];X=zs.clone(B.uniforms)}else X=M.uniforms;return X}function R(M,A){let X=b.get(A);return X!==void 0?++X.usedTimes:(X=new Dd(e,A,M,l),E.push(X),b.set(A,X)),X}function P(M){if(--M.usedTimes===0){const A=E.indexOf(M);E[A]=E[E.length-1],E.pop(),b.delete(M.cacheKey),M.destroy()}}function D(M){s.remove(M)}function L(){s.dispose()}return{getParameters:g,getProgramCacheKey:c,getUniforms:T,acquireProgram:R,releaseProgram:P,releaseShaderCache:D,programs:E,dispose:L}}function Od(){let e=new WeakMap;function n(a){return e.has(a)}function t(a){let s=e.get(a);return s===void 0&&(s={},e.set(a,s)),s}function i(a){e.delete(a)}function l(a,s,_){e.get(a)[s]=_}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:l,dispose:r}}function Fd(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function _a(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function ga(){const e=[];let n=0;const t=[],i=[],l=[];function r(){n=0,t.length=0,i.length=0,l.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function s(u,f,S,g,c,o){let v=e[n];return v===void 0?(v={id:u.id,object:u,geometry:f,material:S,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:c,group:o},e[n]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=S,v.materialVariant=a(u),v.groupOrder=g,v.renderOrder=u.renderOrder,v.z=c,v.group=o),n++,v}function _(u,f,S,g,c,o){const v=s(u,f,S,g,c,o);S.transmission>0?i.push(v):S.transparent===!0?l.push(v):t.push(v)}function E(u,f,S,g,c,o){const v=s(u,f,S,g,c,o);S.transmission>0?i.unshift(v):S.transparent===!0?l.unshift(v):t.unshift(v)}function b(u,f){t.length>1&&t.sort(u||Fd),i.length>1&&i.sort(f||_a),l.length>1&&l.sort(f||_a)}function x(){for(let u=n,f=e.length;u<f;u++){const S=e[u];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:l,init:r,push:_,unshift:E,finish:x,sort:b}}function Bd(){let e=new WeakMap;function n(i,l){const r=e.get(i);let a;return r===void 0?(a=new ga,e.set(i,[a])):l>=r.length?(a=new ga,r.push(a)):a=r[l],a}function t(){e=new WeakMap}return{get:n,dispose:t}}function kd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Be,color:new at};break;case"SpotLight":t={position:new Be,direction:new Be,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Be,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Be,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new Be,halfWidth:new Be,halfHeight:new Be};break}return e[n.id]=t,t}}}function Gd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Hd=0;function Vd(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function zd(e){const n=new kd,t=Gd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let E=0;E<9;E++)i.probe.push(new Be);const l=new Be,r=new pn,a=new pn;function s(E){let b=0,x=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,S=0,g=0,c=0,o=0,v=0,T=0,R=0,P=0,D=0,L=0;E.sort(Vd);for(let A=0,X=E.length;A<X;A++){const B=E[A],C=B.color,F=B.intensity,d=B.distance;let N=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Ln?N=B.shadow.map.texture:N=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)b+=C.r*F,x+=C.g*F,u+=C.b*F;else if(B.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(B.sh.coefficients[H],F);L++}else if(B.isDirectionalLight){const H=n.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const O=B.shadow,re=t.get(B);re.shadowIntensity=O.intensity,re.shadowBias=O.bias,re.shadowNormalBias=O.normalBias,re.shadowRadius=O.radius,re.shadowMapSize=O.mapSize,i.directionalShadow[f]=re,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=B.shadow.matrix,v++}i.directional[f]=H,f++}else if(B.isSpotLight){const H=n.get(B);H.position.setFromMatrixPosition(B.matrixWorld),H.color.copy(C).multiplyScalar(F),H.distance=d,H.coneCos=Math.cos(B.angle),H.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),H.decay=B.decay,i.spot[g]=H;const O=B.shadow;if(B.map&&(i.spotLightMap[P]=B.map,P++,O.updateMatrices(B),B.castShadow&&D++),i.spotLightMatrix[g]=O.matrix,B.castShadow){const re=t.get(B);re.shadowIntensity=O.intensity,re.shadowBias=O.bias,re.shadowNormalBias=O.normalBias,re.shadowRadius=O.radius,re.shadowMapSize=O.mapSize,i.spotShadow[g]=re,i.spotShadowMap[g]=N,R++}g++}else if(B.isRectAreaLight){const H=n.get(B);H.color.copy(C).multiplyScalar(F),H.halfWidth.set(B.width*.5,0,0),H.halfHeight.set(0,B.height*.5,0),i.rectArea[c]=H,c++}else if(B.isPointLight){const H=n.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),H.distance=B.distance,H.decay=B.decay,B.castShadow){const O=B.shadow,re=t.get(B);re.shadowIntensity=O.intensity,re.shadowBias=O.bias,re.shadowNormalBias=O.normalBias,re.shadowRadius=O.radius,re.shadowMapSize=O.mapSize,re.shadowCameraNear=O.camera.near,re.shadowCameraFar=O.camera.far,i.pointShadow[S]=re,i.pointShadowMap[S]=N,i.pointShadowMatrix[S]=B.shadow.matrix,T++}i.point[S]=H,S++}else if(B.isHemisphereLight){const H=n.get(B);H.skyColor.copy(B.color).multiplyScalar(F),H.groundColor.copy(B.groundColor).multiplyScalar(F),i.hemi[o]=H,o++}}c>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=b,i.ambient[1]=x,i.ambient[2]=u;const M=i.hash;(M.directionalLength!==f||M.pointLength!==S||M.spotLength!==g||M.rectAreaLength!==c||M.hemiLength!==o||M.numDirectionalShadows!==v||M.numPointShadows!==T||M.numSpotShadows!==R||M.numSpotMaps!==P||M.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=c,i.point.length=S,i.hemi.length=o,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=R+P-D,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,M.directionalLength=f,M.pointLength=S,M.spotLength=g,M.rectAreaLength=c,M.hemiLength=o,M.numDirectionalShadows=v,M.numPointShadows=T,M.numSpotShadows=R,M.numSpotMaps=P,M.numLightProbes=L,i.version=Hd++)}function _(E,b){let x=0,u=0,f=0,S=0,g=0;const c=b.matrixWorldInverse;for(let o=0,v=E.length;o<v;o++){const T=E[o];if(T.isDirectionalLight){const R=i.directional[x];R.direction.setFromMatrixPosition(T.matrixWorld),l.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(c),x++}else if(T.isSpotLight){const R=i.spot[f];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(c),R.direction.setFromMatrixPosition(T.matrixWorld),l.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(c),f++}else if(T.isRectAreaLight){const R=i.rectArea[S];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(c),a.identity(),r.copy(T.matrixWorld),r.premultiply(c),a.extractRotation(r),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),S++}else if(T.isPointLight){const R=i.point[u];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(c),u++}else if(T.isHemisphereLight){const R=i.hemi[g];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(c),g++}}}return{setup:s,setupView:_,state:i}}function va(e){const n=new zd(e),t=[],i=[];function l(b){E.camera=b,t.length=0,i.length=0}function r(b){t.push(b)}function a(b){i.push(b)}function s(){n.setup(t)}function _(b){n.setupView(t,b)}const E={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:l,state:E,setupLights:s,setupLightsView:_,pushLight:r,pushShadow:a}}function Wd(e){let n=new WeakMap;function t(l,r=0){const a=n.get(l);let s;return a===void 0?(s=new va(e),n.set(l,[s])):r>=a.length?(s=new va(e),a.push(s)):s=a[r],s}function i(){n=new WeakMap}return{get:t,dispose:i}}const Xd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yd=`uniform sampler2D shadow_pass;
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
}`,Kd=[new Be(1,0,0),new Be(-1,0,0),new Be(0,1,0),new Be(0,-1,0),new Be(0,0,1),new Be(0,0,-1)],qd=[new Be(0,-1,0),new Be(0,-1,0),new Be(0,0,1),new Be(0,0,-1),new Be(0,-1,0),new Be(0,-1,0)],Sa=new pn,xn=new Be,yi=new Be;function Zd(e,n,t){let i=new ka;const l=new rt,r=new rt,a=new vt,s=new bs,_=new Ms,E={},b=t.maxTextureSize,x={[Pn]:bt,[bt]:Pn,[Nt]:Nt},u=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Xd,fragmentShader:Yd}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const S=new gn;S.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Mt(S,u),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qn;let o=this.type;this.render=function(D,L,M){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||D.length===0)return;this.type===Ts&&(et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qn);const A=e.getRenderTarget(),X=e.getActiveCubeFace(),B=e.getActiveMipmapLevel(),C=e.state;C.setBlending(kt),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const F=o!==this.type;F&&L.traverse(function(d){d.material&&(Array.isArray(d.material)?d.material.forEach(N=>N.needsUpdate=!0):d.material.needsUpdate=!0)});for(let d=0,N=D.length;d<N;d++){const H=D[d],O=H.shadow;if(O===void 0){et("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;l.copy(O.mapSize);const re=O.getFrameExtents();l.multiply(re),r.copy(O.mapSize),(l.x>b||l.y>b)&&(l.x>b&&(r.x=Math.floor(b/re.x),l.x=r.x*re.x,O.mapSize.x=r.x),l.y>b&&(r.y=Math.floor(b/re.y),l.y=r.y*re.y,O.mapSize.y=r.y));const Z=e.state.buffers.depth.getReversed();if(O.camera._reversedDepth=Z,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Mn){if(H.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Dt(l.x,l.y,{format:Ln,type:Yt,minFilter:xt,magFilter:xt,generateMipmaps:!1}),O.map.texture.name=H.name+".shadowMap",O.map.depthTexture=new ei(l.x,l.y,Wt),O.map.depthTexture.name=H.name+".shadowMapDepth",O.map.depthTexture.format=mn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ft,O.map.depthTexture.magFilter=Ft}else H.isPointLight?(O.map=new co(l.x),O.map.depthTexture=new As(l.x,Jt)):(O.map=new Dt(l.x,l.y),O.map.depthTexture=new ei(l.x,l.y,Jt)),O.map.depthTexture.name=H.name+".shadowMap",O.map.depthTexture.format=mn,this.type===qn?(O.map.depthTexture.compareFunction=Z?Xi:Yi,O.map.depthTexture.minFilter=xt,O.map.depthTexture.magFilter=xt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ft,O.map.depthTexture.magFilter=Ft);O.camera.updateProjectionMatrix()}const ce=O.map.isWebGLCubeRenderTarget?6:1;for(let W=0;W<ce;W++){if(O.map.isWebGLCubeRenderTarget)e.setRenderTarget(O.map,W),e.clear();else{W===0&&(e.setRenderTarget(O.map),e.clear());const G=O.getViewport(W);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),C.viewport(a)}if(H.isPointLight){const G=O.camera,ge=O.matrix,pe=H.distance||G.far;pe!==G.far&&(G.far=pe,G.updateProjectionMatrix()),xn.setFromMatrixPosition(H.matrixWorld),G.position.copy(xn),yi.copy(G.position),yi.add(Kd[W]),G.up.copy(qd[W]),G.lookAt(yi),G.updateMatrixWorld(),ge.makeTranslation(-xn.x,-xn.y,-xn.z),Sa.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Sa,G.coordinateSystem,G.reversedDepth)}else O.updateMatrices(H);i=O.getFrustum(),R(L,M,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===Mn&&v(O,M),O.needsUpdate=!1}o=this.type,c.needsUpdate=!1,e.setRenderTarget(A,X,B)};function v(D,L){const M=n.update(g);u.defines.VSM_SAMPLES!==D.blurSamples&&(u.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Dt(l.x,l.y,{format:Ln,type:Yt})),u.uniforms.shadow_pass.value=D.map.depthTexture,u.uniforms.resolution.value=D.mapSize,u.uniforms.radius.value=D.radius,e.setRenderTarget(D.mapPass),e.clear(),e.renderBufferDirect(L,null,M,u,g,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,e.setRenderTarget(D.map),e.clear(),e.renderBufferDirect(L,null,M,f,g,null)}function T(D,L,M,A){let X=null;const B=M.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(B!==void 0)X=B;else if(X=M.isPointLight===!0?_:s,e.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const C=X.uuid,F=L.uuid;let d=E[C];d===void 0&&(d={},E[C]=d);let N=d[F];N===void 0&&(N=X.clone(),d[F]=N,L.addEventListener("dispose",P)),X=N}if(X.visible=L.visible,X.wireframe=L.wireframe,A===Mn?X.side=L.shadowSide!==null?L.shadowSide:L.side:X.side=L.shadowSide!==null?L.shadowSide:x[L.side],X.alphaMap=L.alphaMap,X.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,X.map=L.map,X.clipShadows=L.clipShadows,X.clippingPlanes=L.clippingPlanes,X.clipIntersection=L.clipIntersection,X.displacementMap=L.displacementMap,X.displacementScale=L.displacementScale,X.displacementBias=L.displacementBias,X.wireframeLinewidth=L.wireframeLinewidth,X.linewidth=L.linewidth,M.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const C=e.properties.get(X);C.light=M}return X}function R(D,L,M,A,X){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&X===Mn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,D.matrixWorld);const F=n.update(D),d=D.material;if(Array.isArray(d)){const N=F.groups;for(let H=0,O=N.length;H<O;H++){const re=N[H],Z=d[re.materialIndex];if(Z&&Z.visible){const ce=T(D,Z,A,X);D.onBeforeShadow(e,D,L,M,F,ce,re),e.renderBufferDirect(M,null,F,ce,D,re),D.onAfterShadow(e,D,L,M,F,ce,re)}}}else if(d.visible){const N=T(D,d,A,X);D.onBeforeShadow(e,D,L,M,F,N,null),e.renderBufferDirect(M,null,F,N,D,null),D.onAfterShadow(e,D,L,M,F,N,null)}}const C=D.children;for(let F=0,d=C.length;F<d;F++)R(C[F],L,M,A,X)}function P(D){D.target.removeEventListener("dispose",P);for(const M in E){const A=E[M],X=D.target.uuid;X in A&&(A[X].dispose(),delete A[X])}}}function jd(e,n){function t(){let z=!1;const ve=new vt;let me=null;const Ae=new vt(0,0,0,0);return{setMask:function(de){me!==de&&!z&&(e.colorMask(de,de,de,de),me=de)},setLocked:function(de){z=de},setClear:function(de,oe,Le,Ge,tt){tt===!0&&(de*=Ge,oe*=Ge,Le*=Ge),ve.set(de,oe,Le,Ge),Ae.equals(ve)===!1&&(e.clearColor(de,oe,Le,Ge),Ae.copy(ve))},reset:function(){z=!1,me=null,Ae.set(-1,0,0,0)}}}function i(){let z=!1,ve=!1,me=null,Ae=null,de=null;return{setReversed:function(oe){if(ve!==oe){const Le=n.get("EXT_clip_control");oe?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ve=oe;const Ge=de;de=null,this.setClear(Ge)}},getReversed:function(){return ve},setTest:function(oe){oe?ue(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(oe){me!==oe&&!z&&(e.depthMask(oe),me=oe)},setFunc:function(oe){if(ve&&(oe=nl[oe]),Ae!==oe){switch(oe){case ks:e.depthFunc(e.NEVER);break;case Bs:e.depthFunc(e.ALWAYS);break;case Fs:e.depthFunc(e.LESS);break;case ur:e.depthFunc(e.LEQUAL);break;case Os:e.depthFunc(e.EQUAL);break;case Ns:e.depthFunc(e.GEQUAL);break;case Is:e.depthFunc(e.GREATER);break;case Us:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Ae=oe}},setLocked:function(oe){z=oe},setClear:function(oe){de!==oe&&(de=oe,ve&&(oe=1-oe),e.clearDepth(oe))},reset:function(){z=!1,me=null,Ae=null,de=null,ve=!1}}}function l(){let z=!1,ve=null,me=null,Ae=null,de=null,oe=null,Le=null,Ge=null,tt=null;return{setTest:function(Ze){z||(Ze?ue(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(Ze){ve!==Ze&&!z&&(e.stencilMask(Ze),ve=Ze)},setFunc:function(Ze,Lt,Ut){(me!==Ze||Ae!==Lt||de!==Ut)&&(e.stencilFunc(Ze,Lt,Ut),me=Ze,Ae=Lt,de=Ut)},setOp:function(Ze,Lt,Ut){(oe!==Ze||Le!==Lt||Ge!==Ut)&&(e.stencilOp(Ze,Lt,Ut),oe=Ze,Le=Lt,Ge=Ut)},setLocked:function(Ze){z=Ze},setClear:function(Ze){tt!==Ze&&(e.clearStencil(Ze),tt=Ze)},reset:function(){z=!1,ve=null,me=null,Ae=null,de=null,oe=null,Le=null,Ge=null,tt=null}}}const r=new t,a=new i,s=new l,_=new WeakMap,E=new WeakMap;let b={},x={},u=new WeakMap,f=[],S=null,g=!1,c=null,o=null,v=null,T=null,R=null,P=null,D=null,L=new at(0,0,0),M=0,A=!1,X=null,B=null,C=null,F=null,d=null;const N=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,O=0;const re=e.getParameter(e.VERSION);re.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(re)[1]),H=O>=1):re.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),H=O>=2);let Z=null,ce={};const W=e.getParameter(e.SCISSOR_BOX),G=e.getParameter(e.VIEWPORT),ge=new vt().fromArray(W),pe=new vt().fromArray(G);function fe(z,ve,me,Ae){const de=new Uint8Array(4),oe=e.createTexture();e.bindTexture(z,oe),e.texParameteri(z,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(z,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Le=0;Le<me;Le++)z===e.TEXTURE_3D||z===e.TEXTURE_2D_ARRAY?e.texImage3D(ve,0,e.RGBA,1,1,Ae,0,e.RGBA,e.UNSIGNED_BYTE,de):e.texImage2D(ve+Le,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,de);return oe}const te={};te[e.TEXTURE_2D]=fe(e.TEXTURE_2D,e.TEXTURE_2D,1),te[e.TEXTURE_CUBE_MAP]=fe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[e.TEXTURE_2D_ARRAY]=fe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),te[e.TEXTURE_3D]=fe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),a.setFunc(ur),K(!1),I(Wr),ue(e.CULL_FACE),p(kt);function ue(z){b[z]!==!0&&(e.enable(z),b[z]=!0)}function se(z){b[z]!==!1&&(e.disable(z),b[z]=!1)}function Me(z,ve){return x[z]!==ve?(e.bindFramebuffer(z,ve),x[z]=ve,z===e.DRAW_FRAMEBUFFER&&(x[e.FRAMEBUFFER]=ve),z===e.FRAMEBUFFER&&(x[e.DRAW_FRAMEBUFFER]=ve),!0):!1}function Re(z,ve){let me=f,Ae=!1;if(z){me=u.get(ve),me===void 0&&(me=[],u.set(ve,me));const de=z.textures;if(me.length!==de.length||me[0]!==e.COLOR_ATTACHMENT0){for(let oe=0,Le=de.length;oe<Le;oe++)me[oe]=e.COLOR_ATTACHMENT0+oe;me.length=de.length,Ae=!0}}else me[0]!==e.BACK&&(me[0]=e.BACK,Ae=!0);Ae&&e.drawBuffers(me)}function ye(z){return S!==z?(e.useProgram(z),S=z,!0):!1}const qe={[Sn]:e.FUNC_ADD,[$o]:e.FUNC_SUBTRACT,[jo]:e.FUNC_REVERSE_SUBTRACT};qe[il]=e.MIN,qe[rl]=e.MAX;const ke={[ds]:e.ZERO,[us]:e.ONE,[fs]:e.SRC_COLOR,[cs]:e.SRC_ALPHA,[ls]:e.SRC_ALPHA_SATURATE,[ss]:e.DST_COLOR,[os]:e.DST_ALPHA,[as]:e.ONE_MINUS_SRC_COLOR,[rs]:e.ONE_MINUS_SRC_ALPHA,[is]:e.ONE_MINUS_DST_COLOR,[ns]:e.ONE_MINUS_DST_ALPHA,[ts]:e.CONSTANT_COLOR,[es]:e.ONE_MINUS_CONSTANT_COLOR,[Jo]:e.CONSTANT_ALPHA,[Qo]:e.ONE_MINUS_CONSTANT_ALPHA};function p(z,ve,me,Ae,de,oe,Le,Ge,tt,Ze){if(z===kt){g===!0&&(se(e.BLEND),g=!1);return}if(g===!1&&(ue(e.BLEND),g=!0),z!==Vs){if(z!==c||Ze!==A){if((o!==Sn||R!==Sn)&&(e.blendEquation(e.FUNC_ADD),o=Sn,R=Sn),Ze)switch(z){case Zn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Kr:e.blendFunc(e.ONE,e.ONE);break;case Yr:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Xr:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:it("WebGLState: Invalid blending: ",z);break}else switch(z){case Zn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Kr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Yr:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xr:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",z);break}v=null,T=null,P=null,D=null,L.set(0,0,0),M=0,c=z,A=Ze}return}de=de||ve,oe=oe||me,Le=Le||Ae,(ve!==o||de!==R)&&(e.blendEquationSeparate(qe[ve],qe[de]),o=ve,R=de),(me!==v||Ae!==T||oe!==P||Le!==D)&&(e.blendFuncSeparate(ke[me],ke[Ae],ke[oe],ke[Le]),v=me,T=Ae,P=oe,D=Le),(Ge.equals(L)===!1||tt!==M)&&(e.blendColor(Ge.r,Ge.g,Ge.b,tt),L.copy(Ge),M=tt),c=z,A=!1}function J(z,ve){z.side===Nt?se(e.CULL_FACE):ue(e.CULL_FACE);let me=z.side===bt;ve&&(me=!me),K(me),z.blending===Zn&&z.transparent===!1?p(kt):p(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const Ae=z.stencilWrite;s.setTest(Ae),Ae&&(s.setMask(z.stencilWriteMask),s.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),s.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),V(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function K(z){X!==z&&(z?e.frontFace(e.CW):e.frontFace(e.CCW),X=z)}function I(z){z!==Gs?(ue(e.CULL_FACE),z!==B&&(z===Wr?e.cullFace(e.BACK):z===Hs?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):se(e.CULL_FACE),B=z}function h(z){z!==C&&(H&&e.lineWidth(z),C=z)}function V(z,ve,me){z?(ue(e.POLYGON_OFFSET_FILL),(F!==ve||d!==me)&&(F=ve,d=me,a.getReversed()&&(ve=-ve),e.polygonOffset(ve,me))):se(e.POLYGON_OFFSET_FILL)}function ne(z){z?ue(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function ae(z){z===void 0&&(z=e.TEXTURE0+N-1),Z!==z&&(e.activeTexture(z),Z=z)}function k(z,ve,me){me===void 0&&(Z===null?me=e.TEXTURE0+N-1:me=Z);let Ae=ce[me];Ae===void 0&&(Ae={type:void 0,texture:void 0},ce[me]=Ae),(Ae.type!==z||Ae.texture!==ve)&&(Z!==me&&(e.activeTexture(me),Z=me),e.bindTexture(z,ve||te[z]),Ae.type=z,Ae.texture=ve)}function w(){const z=ce[Z];z!==void 0&&z.type!==void 0&&(e.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function m(){try{e.compressedTexImage2D(...arguments)}catch(z){it("WebGLState:",z)}}function U(){try{e.compressedTexImage3D(...arguments)}catch(z){it("WebGLState:",z)}}function q(){try{e.texSubImage2D(...arguments)}catch(z){it("WebGLState:",z)}}function ie(){try{e.texSubImage3D(...arguments)}catch(z){it("WebGLState:",z)}}function j(){try{e.compressedTexSubImage2D(...arguments)}catch(z){it("WebGLState:",z)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(z){it("WebGLState:",z)}}function _e(){try{e.texStorage2D(...arguments)}catch(z){it("WebGLState:",z)}}function Pe(){try{e.texStorage3D(...arguments)}catch(z){it("WebGLState:",z)}}function Fe(){try{e.texImage2D(...arguments)}catch(z){it("WebGLState:",z)}}function le(){try{e.texImage3D(...arguments)}catch(z){it("WebGLState:",z)}}function he(z){ge.equals(z)===!1&&(e.scissor(z.x,z.y,z.z,z.w),ge.copy(z))}function De(z){pe.equals(z)===!1&&(e.viewport(z.x,z.y,z.z,z.w),pe.copy(z))}function we(z,ve){let me=E.get(ve);me===void 0&&(me=new WeakMap,E.set(ve,me));let Ae=me.get(z);Ae===void 0&&(Ae=e.getUniformBlockIndex(ve,z.name),me.set(z,Ae))}function Te(z,ve){const Ae=E.get(ve).get(z);_.get(ve)!==Ae&&(e.uniformBlockBinding(ve,Ae,z.__bindingPointIndex),_.set(ve,Ae))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),b={},Z=null,ce={},x={},u=new WeakMap,f=[],S=null,g=!1,c=null,o=null,v=null,T=null,R=null,P=null,D=null,L=new at(0,0,0),M=0,A=!1,X=null,B=null,C=null,F=null,d=null,ge.set(0,0,e.canvas.width,e.canvas.height),pe.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),s.reset()}return{buffers:{color:r,depth:a,stencil:s},enable:ue,disable:se,bindFramebuffer:Me,drawBuffers:Re,useProgram:ye,setBlending:p,setMaterial:J,setFlipSided:K,setCullFace:I,setLineWidth:h,setPolygonOffset:V,setScissorTest:ne,activeTexture:ae,bindTexture:k,unbindTexture:w,compressedTexImage2D:m,compressedTexImage3D:U,texImage2D:Fe,texImage3D:le,updateUBOMapping:we,uniformBlockBinding:Te,texStorage2D:_e,texStorage3D:Pe,texSubImage2D:q,texSubImage3D:ie,compressedTexSubImage2D:j,compressedTexSubImage3D:Ee,scissor:he,viewport:De,reset:Ve}}function $d(e,n,t,i,l,r,a){const s=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new rt,b=new WeakMap;let x;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,m){return f?new OffscreenCanvas(w,m):$s("canvas")}function g(w,m,U){let q=1;const ie=k(w);if((ie.width>U||ie.height>U)&&(q=U/Math.max(ie.width,ie.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const j=Math.floor(q*ie.width),Ee=Math.floor(q*ie.height);x===void 0&&(x=S(j,Ee));const _e=m?S(j,Ee):x;return _e.width=j,_e.height=Ee,_e.getContext("2d").drawImage(w,0,0,j,Ee),et("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+j+"x"+Ee+")."),_e}else return"data"in w&&et("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),w;return w}function c(w){return w.generateMipmaps}function o(w){e.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function T(w,m,U,q,ie=!1){if(w!==null){if(e[w]!==void 0)return e[w];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=m;if(m===e.RED&&(U===e.FLOAT&&(j=e.R32F),U===e.HALF_FLOAT&&(j=e.R16F),U===e.UNSIGNED_BYTE&&(j=e.R8)),m===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(j=e.R8UI),U===e.UNSIGNED_SHORT&&(j=e.R16UI),U===e.UNSIGNED_INT&&(j=e.R32UI),U===e.BYTE&&(j=e.R8I),U===e.SHORT&&(j=e.R16I),U===e.INT&&(j=e.R32I)),m===e.RG&&(U===e.FLOAT&&(j=e.RG32F),U===e.HALF_FLOAT&&(j=e.RG16F),U===e.UNSIGNED_BYTE&&(j=e.RG8)),m===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(j=e.RG8UI),U===e.UNSIGNED_SHORT&&(j=e.RG16UI),U===e.UNSIGNED_INT&&(j=e.RG32UI),U===e.BYTE&&(j=e.RG8I),U===e.SHORT&&(j=e.RG16I),U===e.INT&&(j=e.RG32I)),m===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(j=e.RGB8UI),U===e.UNSIGNED_SHORT&&(j=e.RGB16UI),U===e.UNSIGNED_INT&&(j=e.RGB32UI),U===e.BYTE&&(j=e.RGB8I),U===e.SHORT&&(j=e.RGB16I),U===e.INT&&(j=e.RGB32I)),m===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(j=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(j=e.RGBA16UI),U===e.UNSIGNED_INT&&(j=e.RGBA32UI),U===e.BYTE&&(j=e.RGBA8I),U===e.SHORT&&(j=e.RGBA16I),U===e.INT&&(j=e.RGBA32I)),m===e.RGB&&(U===e.UNSIGNED_INT_5_9_9_9_REV&&(j=e.RGB9_E5),U===e.UNSIGNED_INT_10F_11F_11F_REV&&(j=e.R11F_G11F_B10F)),m===e.RGBA){const Ee=ie?ao:lt.getTransfer(q);U===e.FLOAT&&(j=e.RGBA32F),U===e.HALF_FLOAT&&(j=e.RGBA16F),U===e.UNSIGNED_BYTE&&(j=Ee===nt?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT_4_4_4_4&&(j=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(j=e.RGB5_A1)}return(j===e.R16F||j===e.R32F||j===e.RG16F||j===e.RG32F||j===e.RGBA16F||j===e.RGBA32F)&&n.get("EXT_color_buffer_float"),j}function R(w,m){let U;return w?m===null||m===Jt||m===Dn?U=e.DEPTH24_STENCIL8:m===Wt?U=e.DEPTH32F_STENCIL8:m===ti&&(U=e.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Jt||m===Dn?U=e.DEPTH_COMPONENT24:m===Wt?U=e.DEPTH_COMPONENT32F:m===ti&&(U=e.DEPTH_COMPONENT16),U}function P(w,m){return c(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ft&&w.minFilter!==xt?Math.log2(Math.max(m.width,m.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?m.mipmaps.length:1}function D(w){const m=w.target;m.removeEventListener("dispose",D),M(m),m.isVideoTexture&&b.delete(m)}function L(w){const m=w.target;m.removeEventListener("dispose",L),X(m)}function M(w){const m=i.get(w);if(m.__webglInit===void 0)return;const U=w.source,q=u.get(U);if(q){const ie=q[m.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&A(w),Object.keys(q).length===0&&u.delete(U)}i.remove(w)}function A(w){const m=i.get(w);e.deleteTexture(m.__webglTexture);const U=w.source,q=u.get(U);delete q[m.__cacheKey],a.memory.textures--}function X(w){const m=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(m.__webglFramebuffer[q]))for(let ie=0;ie<m.__webglFramebuffer[q].length;ie++)e.deleteFramebuffer(m.__webglFramebuffer[q][ie]);else e.deleteFramebuffer(m.__webglFramebuffer[q]);m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer[q])}else{if(Array.isArray(m.__webglFramebuffer))for(let q=0;q<m.__webglFramebuffer.length;q++)e.deleteFramebuffer(m.__webglFramebuffer[q]);else e.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&e.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let q=0;q<m.__webglColorRenderbuffer.length;q++)m.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(m.__webglColorRenderbuffer[q]);m.__webglDepthRenderbuffer&&e.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const U=w.textures;for(let q=0,ie=U.length;q<ie;q++){const j=i.get(U[q]);j.__webglTexture&&(e.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(U[q])}i.remove(w)}let B=0;function C(){B=0}function F(){const w=B;return w>=l.maxTextures&&et("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),B+=1,w}function d(w){const m=[];return m.push(w.wrapS),m.push(w.wrapT),m.push(w.wrapR||0),m.push(w.magFilter),m.push(w.minFilter),m.push(w.anisotropy),m.push(w.internalFormat),m.push(w.format),m.push(w.type),m.push(w.generateMipmaps),m.push(w.premultiplyAlpha),m.push(w.flipY),m.push(w.unpackAlignment),m.push(w.colorSpace),m.join()}function N(w,m){const U=i.get(w);if(w.isVideoTexture&&ne(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){const q=w.image;if(q===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{te(U,w,m);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+m)}function H(w,m){const U=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){te(U,w,m);return}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+m)}function O(w,m){const U=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){te(U,w,m);return}t.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+m)}function re(w,m){const U=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&U.__version!==w.version){ue(U,w,m);return}t.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+m)}const Z={[ps]:e.REPEAT,[Ii]:e.CLAMP_TO_EDGE,[hs]:e.MIRRORED_REPEAT},ce={[Ft]:e.NEAREST,[ms]:e.NEAREST_MIPMAP_NEAREST,[Gn]:e.NEAREST_MIPMAP_LINEAR,[xt]:e.LINEAR,[_i]:e.LINEAR_MIPMAP_NEAREST,[sn]:e.LINEAR_MIPMAP_LINEAR},W={[xs]:e.NEVER,[Es]:e.ALWAYS,[Ss]:e.LESS,[Yi]:e.LEQUAL,[vs]:e.EQUAL,[Xi]:e.GEQUAL,[gs]:e.GREATER,[_s]:e.NOTEQUAL};function G(w,m){if(m.type===Wt&&n.has("OES_texture_float_linear")===!1&&(m.magFilter===xt||m.magFilter===_i||m.magFilter===Gn||m.magFilter===sn||m.minFilter===xt||m.minFilter===_i||m.minFilter===Gn||m.minFilter===sn)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,Z[m.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,Z[m.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,Z[m.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,ce[m.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,ce[m.minFilter]),m.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,W[m.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Ft||m.minFilter!==Gn&&m.minFilter!==sn||m.type===Wt&&n.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const U=n.get("EXT_texture_filter_anisotropic");e.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,l.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function ge(w,m){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,m.addEventListener("dispose",D));const q=m.source;let ie=u.get(q);ie===void 0&&(ie={},u.set(q,ie));const j=d(m);if(j!==w.__cacheKey){ie[j]===void 0&&(ie[j]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,U=!0),ie[j].usedTimes++;const Ee=ie[w.__cacheKey];Ee!==void 0&&(ie[w.__cacheKey].usedTimes--,Ee.usedTimes===0&&A(m)),w.__cacheKey=j,w.__webglTexture=ie[j].texture}return U}function pe(w,m,U){return Math.floor(Math.floor(w/U)/m)}function fe(w,m,U,q){const j=w.updateRanges;if(j.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,m.width,m.height,U,q,m.data);else{j.sort((le,he)=>le.start-he.start);let Ee=0;for(let le=1;le<j.length;le++){const he=j[Ee],De=j[le],we=he.start+he.count,Te=pe(De.start,m.width,4),Ve=pe(he.start,m.width,4);De.start<=we+1&&Te===Ve&&pe(De.start+De.count-1,m.width,4)===Te?he.count=Math.max(he.count,De.start+De.count-he.start):(++Ee,j[Ee]=De)}j.length=Ee+1;const _e=e.getParameter(e.UNPACK_ROW_LENGTH),Pe=e.getParameter(e.UNPACK_SKIP_PIXELS),Fe=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,m.width);for(let le=0,he=j.length;le<he;le++){const De=j[le],we=Math.floor(De.start/4),Te=Math.ceil(De.count/4),Ve=we%m.width,z=Math.floor(we/m.width),ve=Te,me=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ve),e.pixelStorei(e.UNPACK_SKIP_ROWS,z),t.texSubImage2D(e.TEXTURE_2D,0,Ve,z,ve,me,U,q,m.data)}w.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,_e),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Pe),e.pixelStorei(e.UNPACK_SKIP_ROWS,Fe)}}function te(w,m,U){let q=e.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),m.isData3DTexture&&(q=e.TEXTURE_3D);const ie=ge(w,m),j=m.source;t.bindTexture(q,w.__webglTexture,e.TEXTURE0+U);const Ee=i.get(j);if(j.version!==Ee.__version||ie===!0){t.activeTexture(e.TEXTURE0+U);const _e=lt.getPrimaries(lt.workingColorSpace),Pe=m.colorSpace===an?null:lt.getPrimaries(m.colorSpace),Fe=m.colorSpace===an||_e===Pe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let le=g(m.image,!1,l.maxTextureSize);le=ae(m,le);const he=r.convert(m.format,m.colorSpace),De=r.convert(m.type);let we=T(m.internalFormat,he,De,m.colorSpace,m.isVideoTexture);G(q,m);let Te;const Ve=m.mipmaps,z=m.isVideoTexture!==!0,ve=Ee.__version===void 0||ie===!0,me=j.dataReady,Ae=P(m,le);if(m.isDepthTexture)we=R(m.format===ln,m.type),ve&&(z?t.texStorage2D(e.TEXTURE_2D,1,we,le.width,le.height):t.texImage2D(e.TEXTURE_2D,0,we,le.width,le.height,0,he,De,null));else if(m.isDataTexture)if(Ve.length>0){z&&ve&&t.texStorage2D(e.TEXTURE_2D,Ae,we,Ve[0].width,Ve[0].height);for(let de=0,oe=Ve.length;de<oe;de++)Te=Ve[de],z?me&&t.texSubImage2D(e.TEXTURE_2D,de,0,0,Te.width,Te.height,he,De,Te.data):t.texImage2D(e.TEXTURE_2D,de,we,Te.width,Te.height,0,he,De,Te.data);m.generateMipmaps=!1}else z?(ve&&t.texStorage2D(e.TEXTURE_2D,Ae,we,le.width,le.height),me&&fe(m,le,he,De)):t.texImage2D(e.TEXTURE_2D,0,we,le.width,le.height,0,he,De,le.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){z&&ve&&t.texStorage3D(e.TEXTURE_2D_ARRAY,Ae,we,Ve[0].width,Ve[0].height,le.depth);for(let de=0,oe=Ve.length;de<oe;de++)if(Te=Ve[de],m.format!==Ot)if(he!==null)if(z){if(me)if(m.layerUpdates.size>0){const Le=qr(Te.width,Te.height,m.format,m.type);for(const Ge of m.layerUpdates){const tt=Te.data.subarray(Ge*Le/Te.data.BYTES_PER_ELEMENT,(Ge+1)*Le/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,de,0,0,Ge,Te.width,Te.height,1,he,tt)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,le.depth,he,Te.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,de,we,Te.width,Te.height,le.depth,0,Te.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?me&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,le.depth,he,De,Te.data):t.texImage3D(e.TEXTURE_2D_ARRAY,de,we,Te.width,Te.height,le.depth,0,he,De,Te.data)}else{z&&ve&&t.texStorage2D(e.TEXTURE_2D,Ae,we,Ve[0].width,Ve[0].height);for(let de=0,oe=Ve.length;de<oe;de++)Te=Ve[de],m.format!==Ot?he!==null?z?me&&t.compressedTexSubImage2D(e.TEXTURE_2D,de,0,0,Te.width,Te.height,he,Te.data):t.compressedTexImage2D(e.TEXTURE_2D,de,we,Te.width,Te.height,0,Te.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?me&&t.texSubImage2D(e.TEXTURE_2D,de,0,0,Te.width,Te.height,he,De,Te.data):t.texImage2D(e.TEXTURE_2D,de,we,Te.width,Te.height,0,he,De,Te.data)}else if(m.isDataArrayTexture)if(z){if(ve&&t.texStorage3D(e.TEXTURE_2D_ARRAY,Ae,we,le.width,le.height,le.depth),me)if(m.layerUpdates.size>0){const de=qr(le.width,le.height,m.format,m.type);for(const oe of m.layerUpdates){const Le=le.data.subarray(oe*de/le.data.BYTES_PER_ELEMENT,(oe+1)*de/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,oe,le.width,le.height,1,he,De,Le)}m.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,he,De,le.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,we,le.width,le.height,le.depth,0,he,De,le.data);else if(m.isData3DTexture)z?(ve&&t.texStorage3D(e.TEXTURE_3D,Ae,we,le.width,le.height,le.depth),me&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,he,De,le.data)):t.texImage3D(e.TEXTURE_3D,0,we,le.width,le.height,le.depth,0,he,De,le.data);else if(m.isFramebufferTexture){if(ve)if(z)t.texStorage2D(e.TEXTURE_2D,Ae,we,le.width,le.height);else{let de=le.width,oe=le.height;for(let Le=0;Le<Ae;Le++)t.texImage2D(e.TEXTURE_2D,Le,we,de,oe,0,he,De,null),de>>=1,oe>>=1}}else if(Ve.length>0){if(z&&ve){const de=k(Ve[0]);t.texStorage2D(e.TEXTURE_2D,Ae,we,de.width,de.height)}for(let de=0,oe=Ve.length;de<oe;de++)Te=Ve[de],z?me&&t.texSubImage2D(e.TEXTURE_2D,de,0,0,he,De,Te):t.texImage2D(e.TEXTURE_2D,de,we,he,De,Te);m.generateMipmaps=!1}else if(z){if(ve){const de=k(le);t.texStorage2D(e.TEXTURE_2D,Ae,we,de.width,de.height)}me&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,he,De,le)}else t.texImage2D(e.TEXTURE_2D,0,we,he,De,le);c(m)&&o(q),Ee.__version=j.version,m.onUpdate&&m.onUpdate(m)}w.__version=m.version}function ue(w,m,U){if(m.image.length!==6)return;const q=ge(w,m),ie=m.source;t.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+U);const j=i.get(ie);if(ie.version!==j.__version||q===!0){t.activeTexture(e.TEXTURE0+U);const Ee=lt.getPrimaries(lt.workingColorSpace),_e=m.colorSpace===an?null:lt.getPrimaries(m.colorSpace),Pe=m.colorSpace===an||Ee===_e?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Fe=m.isCompressedTexture||m.image[0].isCompressedTexture,le=m.image[0]&&m.image[0].isDataTexture,he=[];for(let oe=0;oe<6;oe++)!Fe&&!le?he[oe]=g(m.image[oe],!0,l.maxCubemapSize):he[oe]=le?m.image[oe].image:m.image[oe],he[oe]=ae(m,he[oe]);const De=he[0],we=r.convert(m.format,m.colorSpace),Te=r.convert(m.type),Ve=T(m.internalFormat,we,Te,m.colorSpace),z=m.isVideoTexture!==!0,ve=j.__version===void 0||q===!0,me=ie.dataReady;let Ae=P(m,De);G(e.TEXTURE_CUBE_MAP,m);let de;if(Fe){z&&ve&&t.texStorage2D(e.TEXTURE_CUBE_MAP,Ae,Ve,De.width,De.height);for(let oe=0;oe<6;oe++){de=he[oe].mipmaps;for(let Le=0;Le<de.length;Le++){const Ge=de[Le];m.format!==Ot?we!==null?z?me&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,0,0,Ge.width,Ge.height,we,Ge.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,Ve,Ge.width,Ge.height,0,Ge.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?me&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,0,0,Ge.width,Ge.height,we,Te,Ge.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,Ve,Ge.width,Ge.height,0,we,Te,Ge.data)}}}else{if(de=m.mipmaps,z&&ve){de.length>0&&Ae++;const oe=k(he[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,Ae,Ve,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(le){z?me&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,he[oe].width,he[oe].height,we,Te,he[oe].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,he[oe].width,he[oe].height,0,we,Te,he[oe].data);for(let Le=0;Le<de.length;Le++){const tt=de[Le].image[oe].image;z?me&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,0,0,tt.width,tt.height,we,Te,tt.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,Ve,tt.width,tt.height,0,we,Te,tt.data)}}else{z?me&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,we,Te,he[oe]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,we,Te,he[oe]);for(let Le=0;Le<de.length;Le++){const Ge=de[Le];z?me&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,0,0,we,Te,Ge.image[oe]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,Ve,we,Te,Ge.image[oe])}}}c(m)&&o(e.TEXTURE_CUBE_MAP),j.__version=ie.version,m.onUpdate&&m.onUpdate(m)}w.__version=m.version}function se(w,m,U,q,ie,j){const Ee=r.convert(U.format,U.colorSpace),_e=r.convert(U.type),Pe=T(U.internalFormat,Ee,_e,U.colorSpace),Fe=i.get(m),le=i.get(U);if(le.__renderTarget=m,!Fe.__hasExternalTextures){const he=Math.max(1,m.width>>j),De=Math.max(1,m.height>>j);ie===e.TEXTURE_3D||ie===e.TEXTURE_2D_ARRAY?t.texImage3D(ie,j,Pe,he,De,m.depth,0,Ee,_e,null):t.texImage2D(ie,j,Pe,he,De,0,Ee,_e,null)}t.bindFramebuffer(e.FRAMEBUFFER,w),V(m)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,ie,le.__webglTexture,0,h(m)):(ie===e.TEXTURE_2D||ie>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,ie,le.__webglTexture,j),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Me(w,m,U){if(e.bindRenderbuffer(e.RENDERBUFFER,w),m.depthBuffer){const q=m.depthTexture,ie=q&&q.isDepthTexture?q.type:null,j=R(m.stencilBuffer,ie),Ee=m.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;V(m)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,h(m),j,m.width,m.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,h(m),j,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,j,m.width,m.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Ee,e.RENDERBUFFER,w)}else{const q=m.textures;for(let ie=0;ie<q.length;ie++){const j=q[ie],Ee=r.convert(j.format,j.colorSpace),_e=r.convert(j.type),Pe=T(j.internalFormat,Ee,_e,j.colorSpace);V(m)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,h(m),Pe,m.width,m.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,h(m),Pe,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,Pe,m.width,m.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Re(w,m,U){const q=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,w),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(m.depthTexture);if(ie.__renderTarget=m,(!ie.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),q){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,m.depthTexture.addEventListener("dispose",D)),ie.__webglTexture===void 0){ie.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,ie.__webglTexture),G(e.TEXTURE_CUBE_MAP,m.depthTexture);const Fe=r.convert(m.depthTexture.format),le=r.convert(m.depthTexture.type);let he;m.depthTexture.format===mn?he=e.DEPTH_COMPONENT24:m.depthTexture.format===ln&&(he=e.DEPTH24_STENCIL8);for(let De=0;De<6;De++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,he,m.width,m.height,0,Fe,le,null)}}else N(m.depthTexture,0);const j=ie.__webglTexture,Ee=h(m),_e=q?e.TEXTURE_CUBE_MAP_POSITIVE_X+U:e.TEXTURE_2D,Pe=m.depthTexture.format===ln?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(m.depthTexture.format===mn)V(m)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Pe,_e,j,0,Ee):e.framebufferTexture2D(e.FRAMEBUFFER,Pe,_e,j,0);else if(m.depthTexture.format===ln)V(m)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Pe,_e,j,0,Ee):e.framebufferTexture2D(e.FRAMEBUFFER,Pe,_e,j,0);else throw new Error("Unknown depthTexture format")}function ye(w){const m=i.get(w),U=w.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),q){const ie=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,q.removeEventListener("dispose",ie)};q.addEventListener("dispose",ie),m.__depthDisposeCallback=ie}m.__boundDepthTexture=q}if(w.depthTexture&&!m.__autoAllocateDepthBuffer)if(U)for(let q=0;q<6;q++)Re(m.__webglFramebuffer[q],w,q);else{const q=w.texture.mipmaps;q&&q.length>0?Re(m.__webglFramebuffer[0],w,0):Re(m.__webglFramebuffer,w,0)}else if(U){m.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[q]),m.__webglDepthbuffer[q]===void 0)m.__webglDepthbuffer[q]=e.createRenderbuffer(),Me(m.__webglDepthbuffer[q],w,!1);else{const ie=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,j=m.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,j),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,j)}}else{const q=w.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=e.createRenderbuffer(),Me(m.__webglDepthbuffer,w,!1);else{const ie=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,j=m.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,j),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,j)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function qe(w,m,U){const q=i.get(w);m!==void 0&&se(q.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&ye(w)}function ke(w){const m=w.texture,U=i.get(w),q=i.get(m);w.addEventListener("dispose",L);const ie=w.textures,j=w.isWebGLCubeRenderTarget===!0,Ee=ie.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=m.version,a.memory.textures++),j){U.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(m.mipmaps&&m.mipmaps.length>0){U.__webglFramebuffer[_e]=[];for(let Pe=0;Pe<m.mipmaps.length;Pe++)U.__webglFramebuffer[_e][Pe]=e.createFramebuffer()}else U.__webglFramebuffer[_e]=e.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){U.__webglFramebuffer=[];for(let _e=0;_e<m.mipmaps.length;_e++)U.__webglFramebuffer[_e]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(Ee)for(let _e=0,Pe=ie.length;_e<Pe;_e++){const Fe=i.get(ie[_e]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=e.createTexture(),a.memory.textures++)}if(w.samples>0&&V(w)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let _e=0;_e<ie.length;_e++){const Pe=ie[_e];U.__webglColorRenderbuffer[_e]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[_e]);const Fe=r.convert(Pe.format,Pe.colorSpace),le=r.convert(Pe.type),he=T(Pe.internalFormat,Fe,le,Pe.colorSpace,w.isXRRenderTarget===!0),De=h(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,De,he,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,U.__webglColorRenderbuffer[_e])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),Me(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(j){t.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),G(e.TEXTURE_CUBE_MAP,m);for(let _e=0;_e<6;_e++)if(m.mipmaps&&m.mipmaps.length>0)for(let Pe=0;Pe<m.mipmaps.length;Pe++)se(U.__webglFramebuffer[_e][Pe],w,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Pe);else se(U.__webglFramebuffer[_e],w,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);c(m)&&o(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let _e=0,Pe=ie.length;_e<Pe;_e++){const Fe=ie[_e],le=i.get(Fe);let he=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(he,le.__webglTexture),G(he,Fe),se(U.__webglFramebuffer,w,Fe,e.COLOR_ATTACHMENT0+_e,he,0),c(Fe)&&o(he)}t.unbindTexture()}else{let _e=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(_e=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(_e,q.__webglTexture),G(_e,m),m.mipmaps&&m.mipmaps.length>0)for(let Pe=0;Pe<m.mipmaps.length;Pe++)se(U.__webglFramebuffer[Pe],w,m,e.COLOR_ATTACHMENT0,_e,Pe);else se(U.__webglFramebuffer,w,m,e.COLOR_ATTACHMENT0,_e,0);c(m)&&o(_e),t.unbindTexture()}w.depthBuffer&&ye(w)}function p(w){const m=w.textures;for(let U=0,q=m.length;U<q;U++){const ie=m[U];if(c(ie)){const j=v(w),Ee=i.get(ie).__webglTexture;t.bindTexture(j,Ee),o(j),t.unbindTexture()}}}const J=[],K=[];function I(w){if(w.samples>0){if(V(w)===!1){const m=w.textures,U=w.width,q=w.height;let ie=e.COLOR_BUFFER_BIT;const j=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ee=i.get(w),_e=m.length>1;if(_e)for(let Fe=0;Fe<m.length;Fe++)t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Fe,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Fe,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Pe=w.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Fe=0;Fe<m.length;Fe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ie|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ie|=e.STENCIL_BUFFER_BIT)),_e){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ee.__webglColorRenderbuffer[Fe]);const le=i.get(m[Fe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,le,0)}e.blitFramebuffer(0,0,U,q,0,0,U,q,ie,e.NEAREST),_===!0&&(J.length=0,K.length=0,J.push(e.COLOR_ATTACHMENT0+Fe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(J.push(j),K.push(j),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,K)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),_e)for(let Fe=0;Fe<m.length;Fe++){t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Fe,e.RENDERBUFFER,Ee.__webglColorRenderbuffer[Fe]);const le=i.get(m[Fe]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Fe,e.TEXTURE_2D,le,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&_){const m=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[m])}}}function h(w){return Math.min(l.maxSamples,w.samples)}function V(w){const m=i.get(w);return w.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function ne(w){const m=a.render.frame;b.get(w)!==m&&(b.set(w,m),w.update())}function ae(w,m){const U=w.colorSpace,q=w.format,ie=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==ci&&U!==an&&(lt.getTransfer(U)===nt?(q!==Ot||ie!==Ct)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",U)),m}function k(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(E.width=w.naturalWidth||w.width,E.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(E.width=w.displayWidth,E.height=w.displayHeight):(E.width=w.width,E.height=w.height),E}this.allocateTextureUnit=F,this.resetTextureUnits=C,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=O,this.setTextureCube=re,this.rebindTextures=qe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=p,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=se,this.useMultisampledRTT=V,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Qd(e,n){function t(i,l=an){let r;const a=lt.getTransfer(l);if(i===Ct)return e.UNSIGNED_BYTE;if(i===Xa)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Ya)return e.UNSIGNED_SHORT_5_5_5_1;if(i===ws)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Rs)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===ys)return e.BYTE;if(i===Cs)return e.SHORT;if(i===ti)return e.UNSIGNED_SHORT;if(i===qa)return e.INT;if(i===Jt)return e.UNSIGNED_INT;if(i===Wt)return e.FLOAT;if(i===Yt)return e.HALF_FLOAT;if(i===Ps)return e.ALPHA;if(i===Ds)return e.RGB;if(i===Ot)return e.RGBA;if(i===mn)return e.DEPTH_COMPONENT;if(i===ln)return e.DEPTH_STENCIL;if(i===Ls)return e.RED;if(i===Wa)return e.RED_INTEGER;if(i===Ln)return e.RG;if(i===za)return e.RG_INTEGER;if(i===Va)return e.RGBA_INTEGER;if(i===gi||i===vi||i===Si||i===Ei)if(a===nt)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===gi)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Si)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ei)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===gi)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Si)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ei)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dr||i===hr||i===pr||i===mr)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===dr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_r||i===gr||i===vr||i===Sr||i===Er||i===xr||i===br)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_r||i===gr)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sr)return r.COMPRESSED_R11_EAC;if(i===Er)return r.COMPRESSED_SIGNED_R11_EAC;if(i===xr)return r.COMPRESSED_RG11_EAC;if(i===br)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Mr||i===Tr||i===Ar||i===wr||i===Rr||i===yr||i===Cr||i===Pr||i===Dr||i===Lr||i===Ur||i===Ir||i===Nr||i===Or)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Mr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ar)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ur)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ir)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Or)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fr||i===Br||i===kr)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===Fr)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Br)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gr||i===Hr||i===Vr||i===zr)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===Gr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Dn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Jd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eh=`
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

}`;class th{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Ka(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Ht({vertexShader:Jd,fragmentShader:eh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Ki(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nh extends Yo{constructor(n,t){super();const i=this;let l=null,r=1,a=null,s="local-floor",_=1,E=null,b=null,x=null,u=null,f=null,S=null;const g=typeof XRWebGLBinding<"u",c=new th,o={},v=t.getContextAttributes();let T=null,R=null;const P=[],D=[],L=new rt;let M=null;const A=new Kn;A.viewport=new vt;const X=new Kn;X.viewport=new vt;const B=[A,X],C=new Ko;let F=null,d=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=P[te];return ue===void 0&&(ue=new mi,P[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=P[te];return ue===void 0&&(ue=new mi,P[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=P[te];return ue===void 0&&(ue=new mi,P[te]=ue),ue.getHandSpace()};function N(te){const ue=D.indexOf(te.inputSource);if(ue===-1)return;const se=P[ue];se!==void 0&&(se.update(te.inputSource,te.frame,E||a),se.dispatchEvent({type:te.type,data:te.inputSource}))}function H(){l.removeEventListener("select",N),l.removeEventListener("selectstart",N),l.removeEventListener("selectend",N),l.removeEventListener("squeeze",N),l.removeEventListener("squeezestart",N),l.removeEventListener("squeezeend",N),l.removeEventListener("end",H),l.removeEventListener("inputsourceschange",O);for(let te=0;te<P.length;te++){const ue=D[te];ue!==null&&(D[te]=null,P[te].disconnect(ue))}F=null,d=null,c.reset();for(const te in o)delete o[te];n.setRenderTarget(T),f=null,u=null,x=null,l=null,R=null,fe.stop(),i.isPresenting=!1,n.setPixelRatio(M),n.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){s=te,i.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return E||a},this.setReferenceSpace=function(te){E=te},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return x===null&&g&&(x=new XRWebGLBinding(l,t)),x},this.getFrame=function(){return S},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(T=n.getRenderTarget(),l.addEventListener("select",N),l.addEventListener("selectstart",N),l.addEventListener("selectend",N),l.addEventListener("squeeze",N),l.addEventListener("squeezestart",N),l.addEventListener("squeezeend",N),l.addEventListener("end",H),l.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=n.getPixelRatio(),n.getSize(L),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Me=null,Re=null;v.depth&&(Re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=v.stencil?ln:mn,Me=v.stencil?Dn:Jt);const ye={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};x=this.getBinding(),u=x.createProjectionLayer(ye),l.updateRenderState({layers:[u]}),n.setPixelRatio(1),n.setSize(u.textureWidth,u.textureHeight,!1),R=new Dt(u.textureWidth,u.textureHeight,{format:Ot,type:Ct,depthTexture:new ei(u.textureWidth,u.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:v.stencil,colorSpace:n.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(l,t,se),l.updateRenderState({baseLayer:f}),n.setPixelRatio(1),n.setSize(f.framebufferWidth,f.framebufferHeight,!1),R=new Dt(f.framebufferWidth,f.framebufferHeight,{format:Ot,type:Ct,colorSpace:n.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(_),E=null,a=await l.requestReferenceSpace(s),fe.setContext(l),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function O(te){for(let ue=0;ue<te.removed.length;ue++){const se=te.removed[ue],Me=D.indexOf(se);Me>=0&&(D[Me]=null,P[Me].disconnect(se))}for(let ue=0;ue<te.added.length;ue++){const se=te.added[ue];let Me=D.indexOf(se);if(Me===-1){for(let ye=0;ye<P.length;ye++)if(ye>=D.length){D.push(se),Me=ye;break}else if(D[ye]===null){D[ye]=se,Me=ye;break}if(Me===-1)break}const Re=P[Me];Re&&Re.connect(se)}}const re=new Be,Z=new Be;function ce(te,ue,se){re.setFromMatrixPosition(ue.matrixWorld),Z.setFromMatrixPosition(se.matrixWorld);const Me=re.distanceTo(Z),Re=ue.projectionMatrix.elements,ye=se.projectionMatrix.elements,qe=Re[14]/(Re[10]-1),ke=Re[14]/(Re[10]+1),p=(Re[9]+1)/Re[5],J=(Re[9]-1)/Re[5],K=(Re[8]-1)/Re[0],I=(ye[8]+1)/ye[0],h=qe*K,V=qe*I,ne=Me/(-K+I),ae=ne*-K;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ae),te.translateZ(ne),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Re[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const k=qe+ne,w=ke+ne,m=h-ae,U=V+(Me-ae),q=p*ke/w*k,ie=J*ke/w*k;te.projectionMatrix.makePerspective(m,U,q,ie,k,w),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function W(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let ue=te.near,se=te.far;c.texture!==null&&(c.depthNear>0&&(ue=c.depthNear),c.depthFar>0&&(se=c.depthFar)),C.near=X.near=A.near=ue,C.far=X.far=A.far=se,(F!==C.near||d!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,d=C.far),C.layers.mask=te.layers.mask|6,A.layers.mask=C.layers.mask&-5,X.layers.mask=C.layers.mask&-3;const Me=te.parent,Re=C.cameras;W(C,Me);for(let ye=0;ye<Re.length;ye++)W(Re[ye],Me);Re.length===2?ce(C,A,X):C.projectionMatrix.copy(A.projectionMatrix),G(te,C,Me)};function G(te,ue,se){se===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(se.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=qo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(u===null&&f===null))return _},this.setFoveation=function(te){_=te,u!==null&&(u.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(C)},this.getCameraTexture=function(te){return o[te]};let ge=null;function pe(te,ue){if(b=ue.getViewerPose(E||a),S=ue,b!==null){const se=b.views;f!==null&&(n.setRenderTargetFramebuffer(R,f.framebuffer),n.setRenderTarget(R));let Me=!1;se.length!==C.cameras.length&&(C.cameras.length=0,Me=!0);for(let ke=0;ke<se.length;ke++){const p=se[ke];let J=null;if(f!==null)J=f.getViewport(p);else{const I=x.getViewSubImage(u,p);J=I.viewport,ke===0&&(n.setRenderTargetTextures(R,I.colorTexture,I.depthStencilTexture),n.setRenderTarget(R))}let K=B[ke];K===void 0&&(K=new Kn,K.layers.enable(ke),K.viewport=new vt,B[ke]=K),K.matrix.fromArray(p.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(p.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(J.x,J.y,J.width,J.height),ke===0&&(C.matrix.copy(K.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Me===!0&&C.cameras.push(K)}const Re=l.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&g){x=i.getBinding();const ke=x.getDepthInformation(se[0]);ke&&ke.isValid&&ke.texture&&c.init(ke,l.renderState)}if(Re&&Re.includes("camera-access")&&g){n.state.unbindTexture(),x=i.getBinding();for(let ke=0;ke<se.length;ke++){const p=se[ke].camera;if(p){let J=o[p];J||(J=new Ka,o[p]=J);const K=x.getCameraImage(p);J.sourceTexture=K}}}}for(let se=0;se<P.length;se++){const Me=D[se],Re=P[se];Me!==null&&Re!==void 0&&Re.update(Me,ue,E||a)}ge&&ge(te,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),S=null}const fe=new lo;fe.setAnimationLoop(pe),this.setAnimationLoop=function(te){ge=te},this.dispose=function(){}}}const jt=new Zi,ih=new pn;function rh(e,n){function t(c,o){c.matrixAutoUpdate===!0&&c.updateMatrix(),o.value.copy(c.matrix)}function i(c,o){o.color.getRGB(c.fogColor.value,ja(e)),o.isFog?(c.fogNear.value=o.near,c.fogFar.value=o.far):o.isFogExp2&&(c.fogDensity.value=o.density)}function l(c,o,v,T,R){o.isMeshBasicMaterial?r(c,o):o.isMeshLambertMaterial?(r(c,o),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)):o.isMeshToonMaterial?(r(c,o),x(c,o)):o.isMeshPhongMaterial?(r(c,o),b(c,o),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)):o.isMeshStandardMaterial?(r(c,o),u(c,o),o.isMeshPhysicalMaterial&&f(c,o,R)):o.isMeshMatcapMaterial?(r(c,o),S(c,o)):o.isMeshDepthMaterial?r(c,o):o.isMeshDistanceMaterial?(r(c,o),g(c,o)):o.isMeshNormalMaterial?r(c,o):o.isLineBasicMaterial?(a(c,o),o.isLineDashedMaterial&&s(c,o)):o.isPointsMaterial?_(c,o,v,T):o.isSpriteMaterial?E(c,o):o.isShadowMaterial?(c.color.value.copy(o.color),c.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}function r(c,o){c.opacity.value=o.opacity,o.color&&c.diffuse.value.copy(o.color),o.emissive&&c.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(c.map.value=o.map,t(o.map,c.mapTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.bumpMap&&(c.bumpMap.value=o.bumpMap,t(o.bumpMap,c.bumpMapTransform),c.bumpScale.value=o.bumpScale,o.side===bt&&(c.bumpScale.value*=-1)),o.normalMap&&(c.normalMap.value=o.normalMap,t(o.normalMap,c.normalMapTransform),c.normalScale.value.copy(o.normalScale),o.side===bt&&c.normalScale.value.negate()),o.displacementMap&&(c.displacementMap.value=o.displacementMap,t(o.displacementMap,c.displacementMapTransform),c.displacementScale.value=o.displacementScale,c.displacementBias.value=o.displacementBias),o.emissiveMap&&(c.emissiveMap.value=o.emissiveMap,t(o.emissiveMap,c.emissiveMapTransform)),o.specularMap&&(c.specularMap.value=o.specularMap,t(o.specularMap,c.specularMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest);const v=n.get(o),T=v.envMap,R=v.envMapRotation;T&&(c.envMap.value=T,jt.copy(R),jt.x*=-1,jt.y*=-1,jt.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(jt.y*=-1,jt.z*=-1),c.envMapRotation.value.setFromMatrix4(ih.makeRotationFromEuler(jt)),c.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=o.reflectivity,c.ior.value=o.ior,c.refractionRatio.value=o.refractionRatio),o.lightMap&&(c.lightMap.value=o.lightMap,c.lightMapIntensity.value=o.lightMapIntensity,t(o.lightMap,c.lightMapTransform)),o.aoMap&&(c.aoMap.value=o.aoMap,c.aoMapIntensity.value=o.aoMapIntensity,t(o.aoMap,c.aoMapTransform))}function a(c,o){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,o.map&&(c.map.value=o.map,t(o.map,c.mapTransform))}function s(c,o){c.dashSize.value=o.dashSize,c.totalSize.value=o.dashSize+o.gapSize,c.scale.value=o.scale}function _(c,o,v,T){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,c.size.value=o.size*v,c.scale.value=T*.5,o.map&&(c.map.value=o.map,t(o.map,c.uvTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest)}function E(c,o){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,c.rotation.value=o.rotation,o.map&&(c.map.value=o.map,t(o.map,c.mapTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest)}function b(c,o){c.specular.value.copy(o.specular),c.shininess.value=Math.max(o.shininess,1e-4)}function x(c,o){o.gradientMap&&(c.gradientMap.value=o.gradientMap)}function u(c,o){c.metalness.value=o.metalness,o.metalnessMap&&(c.metalnessMap.value=o.metalnessMap,t(o.metalnessMap,c.metalnessMapTransform)),c.roughness.value=o.roughness,o.roughnessMap&&(c.roughnessMap.value=o.roughnessMap,t(o.roughnessMap,c.roughnessMapTransform)),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)}function f(c,o,v){c.ior.value=o.ior,o.sheen>0&&(c.sheenColor.value.copy(o.sheenColor).multiplyScalar(o.sheen),c.sheenRoughness.value=o.sheenRoughness,o.sheenColorMap&&(c.sheenColorMap.value=o.sheenColorMap,t(o.sheenColorMap,c.sheenColorMapTransform)),o.sheenRoughnessMap&&(c.sheenRoughnessMap.value=o.sheenRoughnessMap,t(o.sheenRoughnessMap,c.sheenRoughnessMapTransform))),o.clearcoat>0&&(c.clearcoat.value=o.clearcoat,c.clearcoatRoughness.value=o.clearcoatRoughness,o.clearcoatMap&&(c.clearcoatMap.value=o.clearcoatMap,t(o.clearcoatMap,c.clearcoatMapTransform)),o.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=o.clearcoatRoughnessMap,t(o.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),o.clearcoatNormalMap&&(c.clearcoatNormalMap.value=o.clearcoatNormalMap,t(o.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(o.clearcoatNormalScale),o.side===bt&&c.clearcoatNormalScale.value.negate())),o.dispersion>0&&(c.dispersion.value=o.dispersion),o.iridescence>0&&(c.iridescence.value=o.iridescence,c.iridescenceIOR.value=o.iridescenceIOR,c.iridescenceThicknessMinimum.value=o.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=o.iridescenceThicknessRange[1],o.iridescenceMap&&(c.iridescenceMap.value=o.iridescenceMap,t(o.iridescenceMap,c.iridescenceMapTransform)),o.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=o.iridescenceThicknessMap,t(o.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),o.transmission>0&&(c.transmission.value=o.transmission,c.transmissionSamplerMap.value=v.texture,c.transmissionSamplerSize.value.set(v.width,v.height),o.transmissionMap&&(c.transmissionMap.value=o.transmissionMap,t(o.transmissionMap,c.transmissionMapTransform)),c.thickness.value=o.thickness,o.thicknessMap&&(c.thicknessMap.value=o.thicknessMap,t(o.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=o.attenuationDistance,c.attenuationColor.value.copy(o.attenuationColor)),o.anisotropy>0&&(c.anisotropyVector.value.set(o.anisotropy*Math.cos(o.anisotropyRotation),o.anisotropy*Math.sin(o.anisotropyRotation)),o.anisotropyMap&&(c.anisotropyMap.value=o.anisotropyMap,t(o.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=o.specularIntensity,c.specularColor.value.copy(o.specularColor),o.specularColorMap&&(c.specularColorMap.value=o.specularColorMap,t(o.specularColorMap,c.specularColorMapTransform)),o.specularIntensityMap&&(c.specularIntensityMap.value=o.specularIntensityMap,t(o.specularIntensityMap,c.specularIntensityMapTransform))}function S(c,o){o.matcap&&(c.matcap.value=o.matcap)}function g(c,o){const v=n.get(o).light;c.referencePosition.value.setFromMatrixPosition(v.matrixWorld),c.nearDistance.value=v.shadow.camera.near,c.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:l}}function ah(e,n,t,i){let l={},r={},a=[];const s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function _(v,T){const R=T.program;i.uniformBlockBinding(v,R)}function E(v,T){let R=l[v.id];R===void 0&&(S(v),R=b(v),l[v.id]=R,v.addEventListener("dispose",c));const P=T.program;i.updateUBOMapping(v,P);const D=n.render.frame;r[v.id]!==D&&(u(v),r[v.id]=D)}function b(v){const T=x();v.__bindingPointIndex=T;const R=e.createBuffer(),P=v.__size,D=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,R),e.bufferData(e.UNIFORM_BUFFER,P,D),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,R),R}function x(){for(let v=0;v<s;v++)if(a.indexOf(v)===-1)return a.push(v),v;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const T=l[v.id],R=v.uniforms,P=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let D=0,L=R.length;D<L;D++){const M=Array.isArray(R[D])?R[D]:[R[D]];for(let A=0,X=M.length;A<X;A++){const B=M[A];if(f(B,D,A,P)===!0){const C=B.__offset,F=Array.isArray(B.value)?B.value:[B.value];let d=0;for(let N=0;N<F.length;N++){const H=F[N],O=g(H);typeof H=="number"||typeof H=="boolean"?(B.__data[0]=H,e.bufferSubData(e.UNIFORM_BUFFER,C+d,B.__data)):H.isMatrix3?(B.__data[0]=H.elements[0],B.__data[1]=H.elements[1],B.__data[2]=H.elements[2],B.__data[3]=0,B.__data[4]=H.elements[3],B.__data[5]=H.elements[4],B.__data[6]=H.elements[5],B.__data[7]=0,B.__data[8]=H.elements[6],B.__data[9]=H.elements[7],B.__data[10]=H.elements[8],B.__data[11]=0):(H.toArray(B.__data,d),d+=O.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,C,B.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(v,T,R,P){const D=v.value,L=T+"_"+R;if(P[L]===void 0)return typeof D=="number"||typeof D=="boolean"?P[L]=D:P[L]=D.clone(),!0;{const M=P[L];if(typeof D=="number"||typeof D=="boolean"){if(M!==D)return P[L]=D,!0}else if(M.equals(D)===!1)return M.copy(D),!0}return!1}function S(v){const T=v.uniforms;let R=0;const P=16;for(let L=0,M=T.length;L<M;L++){const A=Array.isArray(T[L])?T[L]:[T[L]];for(let X=0,B=A.length;X<B;X++){const C=A[X],F=Array.isArray(C.value)?C.value:[C.value];for(let d=0,N=F.length;d<N;d++){const H=F[d],O=g(H),re=R%P,Z=re%O.boundary,ce=re+Z;R+=Z,ce!==0&&P-ce<O.storage&&(R+=P-ce),C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=R,R+=O.storage}}}const D=R%P;return D>0&&(R+=P-D),v.__size=R,v.__cache={},this}function g(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):et("WebGLRenderer: Unsupported uniform value type.",v),T}function c(v){const T=v.target;T.removeEventListener("dispose",c);const R=a.indexOf(T.__bindingPointIndex);a.splice(R,1),e.deleteBuffer(l[T.id]),delete l[T.id],delete r[T.id]}function o(){for(const v in l)e.deleteBuffer(l[v]);a=[],l={},r={}}return{bind:_,update:E,dispose:o}}const oh=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rt=null;function sh(){return Rt===null&&(Rt=new Zo(oh,16,16,Ln,Yt),Rt.name="DFG_LUT",Rt.minFilter=xt,Rt.magFilter=xt,Rt.wrapS=Ii,Rt.wrapT=Ii,Rt.generateMipmaps=!1,Rt.needsUpdate=!0),Rt}class lh{constructor(n={}){const{canvas:t=Vo(),context:i=null,depth:l=!0,stencil:r=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:E=!1,powerPreference:b="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Ct}=n;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=a;const g=f,c=new Set([Va,za,Wa]),o=new Set([Ct,Jt,ti,Dn,Xa,Ya]),v=new Uint32Array(4),T=new Int32Array(4);let R=null,P=null;const D=[],L=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let X=!1;this._outputColorSpace=Ba;let B=0,C=0,F=null,d=-1,N=null;const H=new vt,O=new vt;let re=null;const Z=new at(0);let ce=0,W=t.width,G=t.height,ge=1,pe=null,fe=null;const te=new vt(0,0,W,G),ue=new vt(0,0,W,G);let se=!1;const Me=new ka;let Re=!1,ye=!1;const qe=new pn,ke=new Be,p=new vt,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function I(){return F===null?ge:1}let h=i;function V(y,Y){return t.getContext(y,Y)}try{const y={alpha:!0,depth:l,stencil:r,antialias:s,premultipliedAlpha:_,preserveDrawingBuffer:E,powerPreference:b,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zo}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",tt,!1),h===null){const Y="webgl2";if(h=V(Y,y),h===null)throw V(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw it("WebGLRenderer: "+y.message),y}let ne,ae,k,w,m,U,q,ie,j,Ee,_e,Pe,Fe,le,he,De,we,Te,Ve,z,ve,me,Ae;function de(){ne=new lu(h),ne.init(),ve=new Qd(h,ne),ae=new eu(h,ne,n,ve),k=new jd(h,ne),ae.reversedDepthBuffer&&u&&k.buffers.depth.setReversed(!0),w=new uu(h),m=new Od,U=new $d(h,ne,k,m,ae,ve,w),q=new su(A),ie=new ml(h),me=new Qf(h,ie),j=new cu(h,ie,w,me),Ee=new hu(h,j,ie,me,w),Te=new du(h,ae,U),he=new tu(m),_e=new Nd(A,q,ne,ae,me,he),Pe=new rh(A,m),Fe=new Bd,le=new Wd(ne),we=new $f(A,q,k,Ee,S,_),De=new Zd(A,Ee,ae),Ae=new ah(h,w,ae,k),Ve=new Jf(h,ne,w),z=new fu(h,ne,w),w.programs=_e.programs,A.capabilities=ae,A.extensions=ne,A.properties=m,A.renderLists=Fe,A.shadowMap=De,A.state=k,A.info=w}de(),g!==Ct&&(M=new mu(g,t.width,t.height,l,r));const oe=new nh(A,h);this.xr=oe,this.getContext=function(){return h},this.getContextAttributes=function(){return h.getContextAttributes()},this.forceContextLoss=function(){const y=ne.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ne.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(y){y!==void 0&&(ge=y,this.setSize(W,G,!1))},this.getSize=function(y){return y.set(W,G)},this.setSize=function(y,Y,ee=!0){if(oe.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,G=Y,t.width=Math.floor(y*ge),t.height=Math.floor(Y*ge),ee===!0&&(t.style.width=y+"px",t.style.height=Y+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,y,Y)},this.getDrawingBufferSize=function(y){return y.set(W*ge,G*ge).floor()},this.setDrawingBufferSize=function(y,Y,ee){W=y,G=Y,ge=ee,t.width=Math.floor(y*ee),t.height=Math.floor(Y*ee),this.setViewport(0,0,y,Y)},this.setEffects=function(y){if(g===Ct){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let Y=0;Y<y.length;Y++)if(y[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(H)},this.getViewport=function(y){return y.copy(te)},this.setViewport=function(y,Y,ee,Q){y.isVector4?te.set(y.x,y.y,y.z,y.w):te.set(y,Y,ee,Q),k.viewport(H.copy(te).multiplyScalar(ge).round())},this.getScissor=function(y){return y.copy(ue)},this.setScissor=function(y,Y,ee,Q){y.isVector4?ue.set(y.x,y.y,y.z,y.w):ue.set(y,Y,ee,Q),k.scissor(O.copy(ue).multiplyScalar(ge).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(y){k.setScissorTest(se=y)},this.setOpaqueSort=function(y){pe=y},this.setTransparentSort=function(y){fe=y},this.getClearColor=function(y){return y.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(y=!0,Y=!0,ee=!0){let Q=0;if(y){let $=!1;if(F!==null){const xe=F.texture.format;$=c.has(xe)}if($){const xe=F.texture.type,Ce=o.has(xe),be=we.getClearColor(),Ue=we.getClearAlpha(),Ne=be.r,He=be.g,We=be.b;Ce?(v[0]=Ne,v[1]=He,v[2]=We,v[3]=Ue,h.clearBufferuiv(h.COLOR,0,v)):(T[0]=Ne,T[1]=He,T[2]=We,T[3]=Ue,h.clearBufferiv(h.COLOR,0,T))}else Q|=h.COLOR_BUFFER_BIT}Y&&(Q|=h.DEPTH_BUFFER_BIT),ee&&(Q|=h.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&h.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),we.dispose(),Fe.dispose(),le.dispose(),m.dispose(),q.dispose(),Ee.dispose(),me.dispose(),Ae.dispose(),_e.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",tr),oe.removeEventListener("sessionend",nr),Kt.stop()};function Le(y){y.preventDefault(),cr("WebGLRenderer: Context Lost."),X=!0}function Ge(){cr("WebGLRenderer: Context Restored."),X=!1;const y=w.autoReset,Y=De.enabled,ee=De.autoUpdate,Q=De.needsUpdate,$=De.type;de(),w.autoReset=y,De.enabled=Y,De.autoUpdate=ee,De.needsUpdate=Q,De.type=$}function tt(y){it("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ze(y){const Y=y.target;Y.removeEventListener("dispose",Ze),Lt(Y)}function Lt(y){Ut(y),m.remove(y)}function Ut(y){const Y=m.get(y).programs;Y!==void 0&&(Y.forEach(function(ee){_e.releaseProgram(ee)}),y.isShaderMaterial&&_e.releaseShaderCache(y))}this.renderBufferDirect=function(y,Y,ee,Q,$,xe){Y===null&&(Y=J);const Ce=$.isMesh&&$.matrixWorld.determinant()<0,be=Oo(y,Y,ee,Q,$);k.setMaterial(Q,Ce);let Ue=ee.index,Ne=1;if(Q.wireframe===!0){if(Ue=j.getWireframeAttribute(ee),Ue===void 0)return;Ne=2}const He=ee.drawRange,We=ee.attributes.position;let Oe=He.start*Ne,je=(He.start+He.count)*Ne;xe!==null&&(Oe=Math.max(Oe,xe.start*Ne),je=Math.min(je,(xe.start+xe.count)*Ne)),Ue!==null?(Oe=Math.max(Oe,0),je=Math.min(je,Ue.count)):We!=null&&(Oe=Math.max(Oe,0),je=Math.min(je,We.count));const st=je-Oe;if(st<0||st===1/0)return;me.setup($,Q,be,ee,Ue);let ot,$e=Ve;if(Ue!==null&&(ot=ie.get(Ue),$e=z,$e.setIndex(ot)),$.isMesh)Q.wireframe===!0?(k.setLineWidth(Q.wireframeLinewidth*I()),$e.setMode(h.LINES)):$e.setMode(h.TRIANGLES);else if($.isLine){let mt=Q.linewidth;mt===void 0&&(mt=1),k.setLineWidth(mt*I()),$.isLineSegments?$e.setMode(h.LINES):$.isLineLoop?$e.setMode(h.LINE_LOOP):$e.setMode(h.LINE_STRIP)}else $.isPoints?$e.setMode(h.POINTS):$.isSprite&&$e.setMode(h.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Ga("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))$e.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const mt=$._multiDrawStarts,Ie=$._multiDrawCounts,Et=$._multiDrawCount,Ye=Ue?ie.get(Ue).bytesPerElement:1,Tt=m.get(Q).currentProgram.getUniforms();for(let wt=0;wt<Et;wt++)Tt.setValue(h,"_gl_DrawID",wt),$e.render(mt[wt]/Ye,Ie[wt])}else if($.isInstancedMesh)$e.renderInstances(Oe,st,$.count);else if(ee.isInstancedBufferGeometry){const mt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ie=Math.min(ee.instanceCount,mt);$e.renderInstances(Oe,st,Ie)}else $e.render(Oe,st)};function er(y,Y,ee){y.transparent===!0&&y.side===Nt&&y.forceSinglePass===!1?(y.side=bt,y.needsUpdate=!0,kn(y,Y,ee),y.side=Pn,y.needsUpdate=!0,kn(y,Y,ee),y.side=Nt):kn(y,Y,ee)}this.compile=function(y,Y,ee=null){ee===null&&(ee=y),P=le.get(ee),P.init(Y),L.push(P),ee.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),y!==ee&&y.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),P.setupLights();const Q=new Set;return y.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const xe=$.material;if(xe)if(Array.isArray(xe))for(let Ce=0;Ce<xe.length;Ce++){const be=xe[Ce];er(be,ee,$),Q.add(be)}else er(xe,ee,$),Q.add(xe)}),P=L.pop(),Q},this.compileAsync=function(y,Y,ee=null){const Q=this.compile(y,Y,ee);return new Promise($=>{function xe(){if(Q.forEach(function(Ce){m.get(Ce).currentProgram.isReady()&&Q.delete(Ce)}),Q.size===0){$(y);return}setTimeout(xe,10)}ne.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let hi=null;function No(y){hi&&hi(y)}function tr(){Kt.stop()}function nr(){Kt.start()}const Kt=new lo;Kt.setAnimationLoop(No),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(y){hi=y,oe.setAnimationLoop(y),y===null?Kt.stop():Kt.start()},oe.addEventListener("sessionstart",tr),oe.addEventListener("sessionend",nr),this.render=function(y,Y){if(Y!==void 0&&Y.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;const ee=oe.enabled===!0&&oe.isPresenting===!0,Q=M!==null&&(F===null||ee)&&M.begin(A,F);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(Y),Y=oe.getCamera()),y.isScene===!0&&y.onBeforeRender(A,y,Y,F),P=le.get(y,L.length),P.init(Y),L.push(P),qe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Me.setFromProjectionMatrix(qe,fr,Y.reversedDepth),ye=this.localClippingEnabled,Re=he.init(this.clippingPlanes,ye),R=Fe.get(y,D.length),R.init(),D.push(R),oe.enabled===!0&&oe.isPresenting===!0){const Ce=A.xr.getDepthSensingMesh();Ce!==null&&pi(Ce,Y,-1/0,A.sortObjects)}pi(y,Y,0,A.sortObjects),R.finish(),A.sortObjects===!0&&R.sort(pe,fe),K=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,K&&we.addToRenderList(R,y),this.info.render.frame++,Re===!0&&he.beginShadows();const $=P.state.shadowsArray;if(De.render($,y,Y),Re===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&M.hasRenderPass())===!1){const Ce=R.opaque,be=R.transmissive;if(P.setupLights(),Y.isArrayCamera){const Ue=Y.cameras;if(be.length>0)for(let Ne=0,He=Ue.length;Ne<He;Ne++){const We=Ue[Ne];rr(Ce,be,y,We)}K&&we.render(y);for(let Ne=0,He=Ue.length;Ne<He;Ne++){const We=Ue[Ne];ir(R,y,We,We.viewport)}}else be.length>0&&rr(Ce,be,y,Y),K&&we.render(y),ir(R,y,Y)}F!==null&&C===0&&(U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F)),Q&&M.end(A),y.isScene===!0&&y.onAfterRender(A,y,Y),me.resetDefaultState(),d=-1,N=null,L.pop(),L.length>0?(P=L[L.length-1],Re===!0&&he.setGlobalState(A.clippingPlanes,P.state.camera)):P=null,D.pop(),D.length>0?R=D[D.length-1]:R=null};function pi(y,Y,ee,Q){if(y.visible===!1)return;if(y.layers.test(Y.layers)){if(y.isGroup)ee=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(Y);else if(y.isLight)P.pushLight(y),y.castShadow&&P.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Me.intersectsSprite(y)){Q&&p.setFromMatrixPosition(y.matrixWorld).applyMatrix4(qe);const Ce=Ee.update(y),be=y.material;be.visible&&R.push(y,Ce,be,ee,p.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Me.intersectsObject(y))){const Ce=Ee.update(y),be=y.material;if(Q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),p.copy(y.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),p.copy(Ce.boundingSphere.center)),p.applyMatrix4(y.matrixWorld).applyMatrix4(qe)),Array.isArray(be)){const Ue=Ce.groups;for(let Ne=0,He=Ue.length;Ne<He;Ne++){const We=Ue[Ne],Oe=be[We.materialIndex];Oe&&Oe.visible&&R.push(y,Ce,Oe,ee,p.z,We)}}else be.visible&&R.push(y,Ce,be,ee,p.z,null)}}const xe=y.children;for(let Ce=0,be=xe.length;Ce<be;Ce++)pi(xe[Ce],Y,ee,Q)}function ir(y,Y,ee,Q){const{opaque:$,transmissive:xe,transparent:Ce}=y;P.setupLightsView(ee),Re===!0&&he.setGlobalState(A.clippingPlanes,ee),Q&&k.viewport(H.copy(Q)),$.length>0&&Bn($,Y,ee),xe.length>0&&Bn(xe,Y,ee),Ce.length>0&&Bn(Ce,Y,ee),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function rr(y,Y,ee,Q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[Q.id]===void 0){const Oe=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[Q.id]=new Dt(1,1,{generateMipmaps:!0,type:Oe?Yt:Ct,minFilter:sn,samples:Math.max(4,ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const xe=P.state.transmissionRenderTarget[Q.id],Ce=Q.viewport||H;xe.setSize(Ce.z*A.transmissionResolutionScale,Ce.w*A.transmissionResolutionScale);const be=A.getRenderTarget(),Ue=A.getActiveCubeFace(),Ne=A.getActiveMipmapLevel();A.setRenderTarget(xe),A.getClearColor(Z),ce=A.getClearAlpha(),ce<1&&A.setClearColor(16777215,.5),A.clear(),K&&we.render(ee);const He=A.toneMapping;A.toneMapping=Pt;const We=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),P.setupLightsView(Q),Re===!0&&he.setGlobalState(A.clippingPlanes,Q),Bn(y,ee,Q),U.updateMultisampleRenderTarget(xe),U.updateRenderTargetMipmap(xe),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let je=0,st=Y.length;je<st;je++){const ot=Y[je],{object:$e,geometry:mt,material:Ie,group:Et}=ot;if(Ie.side===Nt&&$e.layers.test(Q.layers)){const Ye=Ie.side;Ie.side=bt,Ie.needsUpdate=!0,ar($e,ee,Q,mt,Ie,Et),Ie.side=Ye,Ie.needsUpdate=!0,Oe=!0}}Oe===!0&&(U.updateMultisampleRenderTarget(xe),U.updateRenderTargetMipmap(xe))}A.setRenderTarget(be,Ue,Ne),A.setClearColor(Z,ce),We!==void 0&&(Q.viewport=We),A.toneMapping=He}function Bn(y,Y,ee){const Q=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,xe=y.length;$<xe;$++){const Ce=y[$],{object:be,geometry:Ue,group:Ne}=Ce;let He=Ce.material;He.allowOverride===!0&&Q!==null&&(He=Q),be.layers.test(ee.layers)&&ar(be,Y,ee,Ue,He,Ne)}}function ar(y,Y,ee,Q,$,xe){y.onBeforeRender(A,Y,ee,Q,$,xe),y.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),$.onBeforeRender(A,Y,ee,Q,y,xe),$.transparent===!0&&$.side===Nt&&$.forceSinglePass===!1?($.side=bt,$.needsUpdate=!0,A.renderBufferDirect(ee,Y,Q,$,y,xe),$.side=Pn,$.needsUpdate=!0,A.renderBufferDirect(ee,Y,Q,$,y,xe),$.side=Nt):A.renderBufferDirect(ee,Y,Q,$,y,xe),y.onAfterRender(A,Y,ee,Q,$,xe)}function kn(y,Y,ee){Y.isScene!==!0&&(Y=J);const Q=m.get(y),$=P.state.lights,xe=P.state.shadowsArray,Ce=$.state.version,be=_e.getParameters(y,$.state,xe,Y,ee),Ue=_e.getProgramCacheKey(be);let Ne=Q.programs;Q.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?Y.environment:null,Q.fog=Y.fog;const He=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;Q.envMap=q.get(y.envMap||Q.environment,He),Q.envMapRotation=Q.environment!==null&&y.envMap===null?Y.environmentRotation:y.envMapRotation,Ne===void 0&&(y.addEventListener("dispose",Ze),Ne=new Map,Q.programs=Ne);let We=Ne.get(Ue);if(We!==void 0){if(Q.currentProgram===We&&Q.lightsStateVersion===Ce)return sr(y,be),We}else be.uniforms=_e.getUniforms(y),y.onBeforeCompile(be,A),We=_e.acquireProgram(be,Ue),Ne.set(Ue,We),Q.uniforms=be.uniforms;const Oe=Q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Oe.clippingPlanes=he.uniform),sr(y,be),Q.needsLights=Bo(y),Q.lightsStateVersion=Ce,Q.needsLights&&(Oe.ambientLightColor.value=$.state.ambient,Oe.lightProbe.value=$.state.probe,Oe.directionalLights.value=$.state.directional,Oe.directionalLightShadows.value=$.state.directionalShadow,Oe.spotLights.value=$.state.spot,Oe.spotLightShadows.value=$.state.spotShadow,Oe.rectAreaLights.value=$.state.rectArea,Oe.ltc_1.value=$.state.rectAreaLTC1,Oe.ltc_2.value=$.state.rectAreaLTC2,Oe.pointLights.value=$.state.point,Oe.pointLightShadows.value=$.state.pointShadow,Oe.hemisphereLights.value=$.state.hemi,Oe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Oe.spotLightMatrix.value=$.state.spotLightMatrix,Oe.spotLightMap.value=$.state.spotLightMap,Oe.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=We,Q.uniformsList=null,We}function or(y){if(y.uniformsList===null){const Y=y.currentProgram.getUniforms();y.uniformsList=jn.seqWithValue(Y.seq,y.uniforms)}return y.uniformsList}function sr(y,Y){const ee=m.get(y);ee.outputColorSpace=Y.outputColorSpace,ee.batching=Y.batching,ee.batchingColor=Y.batchingColor,ee.instancing=Y.instancing,ee.instancingColor=Y.instancingColor,ee.instancingMorph=Y.instancingMorph,ee.skinning=Y.skinning,ee.morphTargets=Y.morphTargets,ee.morphNormals=Y.morphNormals,ee.morphColors=Y.morphColors,ee.morphTargetsCount=Y.morphTargetsCount,ee.numClippingPlanes=Y.numClippingPlanes,ee.numIntersection=Y.numClipIntersection,ee.vertexAlphas=Y.vertexAlphas,ee.vertexTangents=Y.vertexTangents,ee.toneMapping=Y.toneMapping}function Oo(y,Y,ee,Q,$){Y.isScene!==!0&&(Y=J),U.resetTextureUnits();const xe=Y.fog,Ce=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?Y.environment:null,be=F===null?A.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ci,Ue=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ne=q.get(Q.envMap||Ce,Ue),He=Q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,We=!!ee.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Oe=!!ee.morphAttributes.position,je=!!ee.morphAttributes.normal,st=!!ee.morphAttributes.color;let ot=Pt;Q.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ot=A.toneMapping);const $e=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,mt=$e!==void 0?$e.length:0,Ie=m.get(Q),Et=P.state.lights;if(Re===!0&&(ye===!0||y!==N)){const dt=y===N&&Q.id===d;he.setState(Q,y,dt)}let Ye=!1;Q.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Et.state.version||Ie.outputColorSpace!==be||$.isBatchedMesh&&Ie.batching===!1||!$.isBatchedMesh&&Ie.batching===!0||$.isBatchedMesh&&Ie.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ie.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ie.instancing===!1||!$.isInstancedMesh&&Ie.instancing===!0||$.isSkinnedMesh&&Ie.skinning===!1||!$.isSkinnedMesh&&Ie.skinning===!0||$.isInstancedMesh&&Ie.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ie.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ie.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ie.instancingMorph===!1&&$.morphTexture!==null||Ie.envMap!==Ne||Q.fog===!0&&Ie.fog!==xe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==he.numPlanes||Ie.numIntersection!==he.numIntersection)||Ie.vertexAlphas!==He||Ie.vertexTangents!==We||Ie.morphTargets!==Oe||Ie.morphNormals!==je||Ie.morphColors!==st||Ie.toneMapping!==ot||Ie.morphTargetsCount!==mt)&&(Ye=!0):(Ye=!0,Ie.__version=Q.version);let Tt=Ie.currentProgram;Ye===!0&&(Tt=kn(Q,Y,$));let wt=!1,qt=!1,tn=!1;const Je=Tt.getUniforms(),ht=Ie.uniforms;if(k.useProgram(Tt.program)&&(wt=!0,qt=!0,tn=!0),Q.id!==d&&(d=Q.id,qt=!0),wt||N!==y){k.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Je.setValue(h,"projectionMatrix",y.projectionMatrix),Je.setValue(h,"viewMatrix",y.matrixWorldInverse);const zt=Je.map.cameraPosition;zt!==void 0&&zt.setValue(h,ke.setFromMatrixPosition(y.matrixWorld)),ae.logarithmicDepthBuffer&&Je.setValue(h,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Je.setValue(h,"isOrthographic",y.isOrthographicCamera===!0),N!==y&&(N=y,qt=!0,tn=!0)}if(Ie.needsLights&&(Et.state.directionalShadowMap.length>0&&Je.setValue(h,"directionalShadowMap",Et.state.directionalShadowMap,U),Et.state.spotShadowMap.length>0&&Je.setValue(h,"spotShadowMap",Et.state.spotShadowMap,U),Et.state.pointShadowMap.length>0&&Je.setValue(h,"pointShadowMap",Et.state.pointShadowMap,U)),$.isSkinnedMesh){Je.setOptional(h,$,"bindMatrix"),Je.setOptional(h,$,"bindMatrixInverse");const dt=$.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),Je.setValue(h,"boneTexture",dt.boneTexture,U))}$.isBatchedMesh&&(Je.setOptional(h,$,"batchingTexture"),Je.setValue(h,"batchingTexture",$._matricesTexture,U),Je.setOptional(h,$,"batchingIdTexture"),Je.setValue(h,"batchingIdTexture",$._indirectTexture,U),Je.setOptional(h,$,"batchingColorTexture"),$._colorsTexture!==null&&Je.setValue(h,"batchingColorTexture",$._colorsTexture,U));const Vt=ee.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0)&&Te.update($,ee,Tt),(qt||Ie.receiveShadow!==$.receiveShadow)&&(Ie.receiveShadow=$.receiveShadow,Je.setValue(h,"receiveShadow",$.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&Y.environment!==null&&(ht.envMapIntensity.value=Y.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=sh()),qt&&(Je.setValue(h,"toneMappingExposure",A.toneMappingExposure),Ie.needsLights&&Fo(ht,tn),xe&&Q.fog===!0&&Pe.refreshFogUniforms(ht,xe),Pe.refreshMaterialUniforms(ht,Q,ge,G,P.state.transmissionRenderTarget[y.id]),jn.upload(h,or(Ie),ht,U)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(jn.upload(h,or(Ie),ht,U),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Je.setValue(h,"center",$.center),Je.setValue(h,"modelViewMatrix",$.modelViewMatrix),Je.setValue(h,"normalMatrix",$.normalMatrix),Je.setValue(h,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const dt=Q.uniformsGroups;for(let zt=0,nn=dt.length;zt<nn;zt++){const lr=dt[zt];Ae.update(lr,Tt),Ae.bind(lr,Tt)}}return Tt}function Fo(y,Y){y.ambientLightColor.needsUpdate=Y,y.lightProbe.needsUpdate=Y,y.directionalLights.needsUpdate=Y,y.directionalLightShadows.needsUpdate=Y,y.pointLights.needsUpdate=Y,y.pointLightShadows.needsUpdate=Y,y.spotLights.needsUpdate=Y,y.spotLightShadows.needsUpdate=Y,y.rectAreaLights.needsUpdate=Y,y.hemisphereLights.needsUpdate=Y}function Bo(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(y,Y,ee){const Q=m.get(y);Q.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),m.get(y.texture).__webglTexture=Y,m.get(y.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ee,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,Y){const ee=m.get(y);ee.__webglFramebuffer=Y,ee.__useDefaultFramebuffer=Y===void 0};const ko=h.createFramebuffer();this.setRenderTarget=function(y,Y=0,ee=0){F=y,B=Y,C=ee;let Q=null,$=!1,xe=!1;if(y){const be=m.get(y);if(be.__useDefaultFramebuffer!==void 0){k.bindFramebuffer(h.FRAMEBUFFER,be.__webglFramebuffer),H.copy(y.viewport),O.copy(y.scissor),re=y.scissorTest,k.viewport(H),k.scissor(O),k.setScissorTest(re),d=-1;return}else if(be.__webglFramebuffer===void 0)U.setupRenderTarget(y);else if(be.__hasExternalTextures)U.rebindTextures(y,m.get(y.texture).__webglTexture,m.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const He=y.depthTexture;if(be.__boundDepthTexture!==He){if(He!==null&&m.has(He)&&(y.width!==He.image.width||y.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(y)}}const Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(xe=!0);const Ne=m.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ne[Y])?Q=Ne[Y][ee]:Q=Ne[Y],$=!0):y.samples>0&&U.useMultisampledRTT(y)===!1?Q=m.get(y).__webglMultisampledFramebuffer:Array.isArray(Ne)?Q=Ne[ee]:Q=Ne,H.copy(y.viewport),O.copy(y.scissor),re=y.scissorTest}else H.copy(te).multiplyScalar(ge).floor(),O.copy(ue).multiplyScalar(ge).floor(),re=se;if(ee!==0&&(Q=ko),k.bindFramebuffer(h.FRAMEBUFFER,Q)&&k.drawBuffers(y,Q),k.viewport(H),k.scissor(O),k.setScissorTest(re),$){const be=m.get(y.texture);h.framebufferTexture2D(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_CUBE_MAP_POSITIVE_X+Y,be.__webglTexture,ee)}else if(xe){const be=Y;for(let Ue=0;Ue<y.textures.length;Ue++){const Ne=m.get(y.textures[Ue]);h.framebufferTextureLayer(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0+Ue,Ne.__webglTexture,ee,be)}}else if(y!==null&&ee!==0){const be=m.get(y.texture);h.framebufferTexture2D(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,be.__webglTexture,ee)}d=-1},this.readRenderTargetPixels=function(y,Y,ee,Q,$,xe,Ce,be=0){if(!(y&&y.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=m.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue){k.bindFramebuffer(h.FRAMEBUFFER,Ue);try{const Ne=y.textures[be],He=Ne.format,We=Ne.type;if(y.textures.length>1&&h.readBuffer(h.COLOR_ATTACHMENT0+be),!ae.textureFormatReadable(He)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(We)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=y.width-Q&&ee>=0&&ee<=y.height-$&&h.readPixels(Y,ee,Q,$,ve.convert(He),ve.convert(We),xe)}finally{const Ne=F!==null?m.get(F).__webglFramebuffer:null;k.bindFramebuffer(h.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(y,Y,ee,Q,$,xe,Ce,be=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=m.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue)if(Y>=0&&Y<=y.width-Q&&ee>=0&&ee<=y.height-$){k.bindFramebuffer(h.FRAMEBUFFER,Ue);const Ne=y.textures[be],He=Ne.format,We=Ne.type;if(y.textures.length>1&&h.readBuffer(h.COLOR_ATTACHMENT0+be),!ae.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=h.createBuffer();h.bindBuffer(h.PIXEL_PACK_BUFFER,Oe),h.bufferData(h.PIXEL_PACK_BUFFER,xe.byteLength,h.STREAM_READ),h.readPixels(Y,ee,Q,$,ve.convert(He),ve.convert(We),0);const je=F!==null?m.get(F).__webglFramebuffer:null;k.bindFramebuffer(h.FRAMEBUFFER,je);const st=h.fenceSync(h.SYNC_GPU_COMMANDS_COMPLETE,0);return h.flush(),await Wo(h,st,4),h.bindBuffer(h.PIXEL_PACK_BUFFER,Oe),h.getBufferSubData(h.PIXEL_PACK_BUFFER,0,xe),h.deleteBuffer(Oe),h.deleteSync(st),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,Y=null,ee=0){const Q=Math.pow(2,-ee),$=Math.floor(y.image.width*Q),xe=Math.floor(y.image.height*Q),Ce=Y!==null?Y.x:0,be=Y!==null?Y.y:0;U.setTexture2D(y,0),h.copyTexSubImage2D(h.TEXTURE_2D,ee,0,0,Ce,be,$,xe),k.unbindTexture()};const Go=h.createFramebuffer(),Ho=h.createFramebuffer();this.copyTextureToTexture=function(y,Y,ee=null,Q=null,$=0,xe=0){let Ce,be,Ue,Ne,He,We,Oe,je,st;const ot=y.isCompressedTexture?y.mipmaps[xe]:y.image;if(ee!==null)Ce=ee.max.x-ee.min.x,be=ee.max.y-ee.min.y,Ue=ee.isBox3?ee.max.z-ee.min.z:1,Ne=ee.min.x,He=ee.min.y,We=ee.isBox3?ee.min.z:0;else{const ht=Math.pow(2,-$);Ce=Math.floor(ot.width*ht),be=Math.floor(ot.height*ht),y.isDataArrayTexture?Ue=ot.depth:y.isData3DTexture?Ue=Math.floor(ot.depth*ht):Ue=1,Ne=0,He=0,We=0}Q!==null?(Oe=Q.x,je=Q.y,st=Q.z):(Oe=0,je=0,st=0);const $e=ve.convert(Y.format),mt=ve.convert(Y.type);let Ie;Y.isData3DTexture?(U.setTexture3D(Y,0),Ie=h.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(U.setTexture2DArray(Y,0),Ie=h.TEXTURE_2D_ARRAY):(U.setTexture2D(Y,0),Ie=h.TEXTURE_2D),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,Y.flipY),h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),h.pixelStorei(h.UNPACK_ALIGNMENT,Y.unpackAlignment);const Et=h.getParameter(h.UNPACK_ROW_LENGTH),Ye=h.getParameter(h.UNPACK_IMAGE_HEIGHT),Tt=h.getParameter(h.UNPACK_SKIP_PIXELS),wt=h.getParameter(h.UNPACK_SKIP_ROWS),qt=h.getParameter(h.UNPACK_SKIP_IMAGES);h.pixelStorei(h.UNPACK_ROW_LENGTH,ot.width),h.pixelStorei(h.UNPACK_IMAGE_HEIGHT,ot.height),h.pixelStorei(h.UNPACK_SKIP_PIXELS,Ne),h.pixelStorei(h.UNPACK_SKIP_ROWS,He),h.pixelStorei(h.UNPACK_SKIP_IMAGES,We);const tn=y.isDataArrayTexture||y.isData3DTexture,Je=Y.isDataArrayTexture||Y.isData3DTexture;if(y.isDepthTexture){const ht=m.get(y),Vt=m.get(Y),dt=m.get(ht.__renderTarget),zt=m.get(Vt.__renderTarget);k.bindFramebuffer(h.READ_FRAMEBUFFER,dt.__webglFramebuffer),k.bindFramebuffer(h.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let nn=0;nn<Ue;nn++)tn&&(h.framebufferTextureLayer(h.READ_FRAMEBUFFER,h.COLOR_ATTACHMENT0,m.get(y).__webglTexture,$,We+nn),h.framebufferTextureLayer(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0,m.get(Y).__webglTexture,xe,st+nn)),h.blitFramebuffer(Ne,He,Ce,be,Oe,je,Ce,be,h.DEPTH_BUFFER_BIT,h.NEAREST);k.bindFramebuffer(h.READ_FRAMEBUFFER,null),k.bindFramebuffer(h.DRAW_FRAMEBUFFER,null)}else if($!==0||y.isRenderTargetTexture||m.has(y)){const ht=m.get(y),Vt=m.get(Y);k.bindFramebuffer(h.READ_FRAMEBUFFER,Go),k.bindFramebuffer(h.DRAW_FRAMEBUFFER,Ho);for(let dt=0;dt<Ue;dt++)tn?h.framebufferTextureLayer(h.READ_FRAMEBUFFER,h.COLOR_ATTACHMENT0,ht.__webglTexture,$,We+dt):h.framebufferTexture2D(h.READ_FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,ht.__webglTexture,$),Je?h.framebufferTextureLayer(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0,Vt.__webglTexture,xe,st+dt):h.framebufferTexture2D(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,Vt.__webglTexture,xe),$!==0?h.blitFramebuffer(Ne,He,Ce,be,Oe,je,Ce,be,h.COLOR_BUFFER_BIT,h.NEAREST):Je?h.copyTexSubImage3D(Ie,xe,Oe,je,st+dt,Ne,He,Ce,be):h.copyTexSubImage2D(Ie,xe,Oe,je,Ne,He,Ce,be);k.bindFramebuffer(h.READ_FRAMEBUFFER,null),k.bindFramebuffer(h.DRAW_FRAMEBUFFER,null)}else Je?y.isDataTexture||y.isData3DTexture?h.texSubImage3D(Ie,xe,Oe,je,st,Ce,be,Ue,$e,mt,ot.data):Y.isCompressedArrayTexture?h.compressedTexSubImage3D(Ie,xe,Oe,je,st,Ce,be,Ue,$e,ot.data):h.texSubImage3D(Ie,xe,Oe,je,st,Ce,be,Ue,$e,mt,ot):y.isDataTexture?h.texSubImage2D(h.TEXTURE_2D,xe,Oe,je,Ce,be,$e,mt,ot.data):y.isCompressedTexture?h.compressedTexSubImage2D(h.TEXTURE_2D,xe,Oe,je,ot.width,ot.height,$e,ot.data):h.texSubImage2D(h.TEXTURE_2D,xe,Oe,je,Ce,be,$e,mt,ot);h.pixelStorei(h.UNPACK_ROW_LENGTH,Et),h.pixelStorei(h.UNPACK_IMAGE_HEIGHT,Ye),h.pixelStorei(h.UNPACK_SKIP_PIXELS,Tt),h.pixelStorei(h.UNPACK_SKIP_ROWS,wt),h.pixelStorei(h.UNPACK_SKIP_IMAGES,qt),xe===0&&Y.generateMipmaps&&h.generateMipmap(Ie),k.unbindTexture()},this.initRenderTarget=function(y){m.get(y).__webglFramebuffer===void 0&&U.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?U.setTextureCube(y,0):y.isData3DTexture?U.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?U.setTexture2DArray(y,0):U.setTexture2D(y,0),k.unbindTexture()},this.resetState=function(){B=0,C=0,F=null,k.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(n),t.unpackColorSpace=lt._getUnpackColorSpace()}}function ch(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),l=new Set(Object.keys(e[0].morphAttributes)),r={},a={},s=e[0].morphTargetsRelative,_=new gn;let E=0;for(let b=0;b<e.length;++b){const x=e[b];let u=0;if(t!==(x.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in x.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(x.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". Make sure all geometries have the same number of attributes."),null;if(s!==x.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in x.morphAttributes){if(!l.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(x.morphAttributes[f])}if(n){let f;if(t)f=x.index.count;else if(x.attributes.position!==void 0)f=x.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". The geometry must have either an index or a position attribute"),null;_.addGroup(E,f,b),E+=f}}if(t){let b=0;const x=[];for(let u=0;u<e.length;++u){const f=e[u].index;for(let S=0;S<f.count;++S)x.push(f.getX(S)+b);b+=e[u].attributes.position.count}_.setIndex(x)}for(const b in r){const x=Ea(r[b]);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+b+" attribute."),null;_.setAttribute(b,x)}for(const b in a){const x=a[b][0].length;if(x===0)break;_.morphAttributes=_.morphAttributes||{},_.morphAttributes[b]=[];for(let u=0;u<x;++u){const f=[];for(let g=0;g<a[b].length;++g)f.push(a[b][g][u]);const S=Ea(f);if(!S)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+b+" morphAttribute."),null;_.morphAttributes[b].push(S)}}return _}function Ea(e){let n,t,i,l=-1,r=0;for(let E=0;E<e.length;++E){const b=e[E];if(n===void 0&&(n=b.array.constructor),n!==b.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=b.itemSize),t!==b.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=b.normalized),i!==b.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=b.gpuType),l!==b.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=b.count*t}const a=new n(r),s=new Rn(a,t,i);let _=0;for(let E=0;E<e.length;++E){const b=e[E];if(b.isInterleavedBufferAttribute){const x=_/t;for(let u=0,f=b.count;u<f;u++)for(let S=0;S<t;S++){const g=b.getComponent(u,S);s.setComponent(u+x,S,g)}}else a.set(b.array,_);_+=b.count*t}return l!==void 0&&(s.gpuType=l),s}const fh={north:[6,4,0,2],east:[7,5,4,6],south:[3,1,5,7],west:[2,0,1,3],up:[2,3,7,6],down:[1,0,4,5]},uh=[0,1,2,0,2,3],dh=new Be(-.52,.7,-.55).normalize(),xa={x:new Be(1,0,0),y:new Be(0,1,0),z:new Be(0,0,1)};function mo(e,n){const t=new Set;for(;n?.startsWith("#");){if(t.has(n))throw new Error(`Circular texture reference: ${n}`);t.add(n),n=e[n.slice(1)]}if(!n)throw new Error("Model has an unresolved texture.");return n.replace(/^minecraft:/,"")}function hh(e,n,t){const{from:i,to:l,rotation:r}=e,a=new Be(...r?.origin??[8,8,8]),s=new Oi;if(r?.axis)s.setFromAxisAngle(xa[r.axis],Gt.degToRad(r.angle));else if(r){const P=[r.x??0,r.y??0,r.z??0].map(Gt.degToRad);s.setFromEuler(new Zi(...P,"ZYX"))}const _=new Be(1,1,1);if(r?.rescale)for(const[P,D]of Object.entries(xa)){const L=D.clone().applyQuaternion(s);_[P]=1/Math.max(Math.abs(L.x),Math.abs(L.y),Math.abs(L.z))}const E=fh[n].map(P=>new Be((P&4?l:i)[0],(P&2?l:i)[1],(P&1?l:i)[2]).sub(a).multiply(_).applyQuaternion(s).add(a)),[b,x,u,f]=t.uv??ph(i,l,n),S=[[b,x],[b,f],[u,f],[u,x]],g=Gt.euclideanModulo((t.rotation??0)/90,4),c=E.flatMap((P,D)=>{const[L,M]=S[(D+g)%4];return[L/16,1-M/16]}),o=E[1].clone().sub(E[0]).cross(E[2].clone().sub(E[0])).normalize(),v=Math.max(0,o.dot(dh)),T=e.shade===!1?1:.61+.39*v,R=new gn;return R.setAttribute("position",new wn(E.flatMap(P=>P.toArray()),3)),R.setAttribute("uv",new wn(c,2)),R.setAttribute("color",new wn(Array(12).fill(T),3)),R.setIndex(uh),R}function ph([e,n,t],[i,l,r],a){return{north:[16-i,16-l,16-e,16-n],east:[16-r,16-l,16-t,16-n],south:[e,16-l,i,16-n],west:[t,16-l,r,16-n],up:[e,t,i,r],down:[e,16-r,i,16-t]}[a]}function mh({data:e,width:n,height:t},i){const l=i.attributes.uv,r=Array.from({length:4},(x,u)=>l.getX(u)*n),a=Array.from({length:4},(x,u)=>(1-l.getY(u))*t),s=Math.floor(Math.min(...r)),_=Math.ceil(Math.max(...r)),E=Math.floor(Math.min(...a)),b=Math.ceil(Math.max(...a));for(let x=E;x<b;x+=1)for(let u=s;u<_;u+=1){const f=e[(x*n+u)*4+3];if(f>0&&f<255)return!0}return!1}function _h(e,n,t){const i=e.attributes.uv,l=(i.getX(0)+i.getX(2))/2,r=(i.getY(0)+i.getY(2))/2,a=1/(n*32),s=1/(t*32);for(let _=0;_<i.count;_+=1){const E=Gt.lerp(i.getX(_),l,a),b=Gt.lerp(i.getY(_),r,s);i.setXY(_,E,b)}}function gh(e,n){const t=new oo,i=new Map;for(const l of e.elements)for(const[r,a]of Object.entries(l.faces)){const s=mo(e.textures,a.texture);i.has(s)||i.set(s,[]),i.get(s).push(hh(l,r,a))}for(const[l,r]of i){const a=n.get(l),s=a.getContext("2d").getImageData(0,0,a.width,a.height),_=new so(a);_.colorSpace=Ba,_.magFilter=Ft,_.minFilter=Ft,_.generateMipmaps=!1,r.forEach(x=>_h(x,a.width,a.height));const E=new ni({map:_,vertexColors:!0,alphaTest:254.5/255});t.add(new Mt(ch(r),E));let b;for(const x of r){if(!mh(s,x)){x.dispose();continue}b||(b=new ni({map:_,vertexColors:!0,transparent:!0,depthWrite:!1,alphaTest:.5/255}),b.onBeforeCompile=S=>{S.fragmentShader=S.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
if (diffuseColor.a >= 0.9980392) discard;`)}),x.computeBoundingBox();const u=x.boundingBox.getCenter(new Be);x.translate(-u.x,-u.y,-u.z);const f=new Mt(x,b);f.position.copy(u),t.add(f)}}return t}function vh(e){const n=new Set,t=new Set;for(const i of e.children)i.geometry.dispose(),n.add(i.material),t.add(i.material.map);n.forEach(i=>i.dispose()),t.forEach(i=>i.dispose())}var zn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Wn(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ci={exports:{}};var ba;function Eh(){return ba||(ba=1,(function(e,n){(function(t){e.exports=t()})(function(){return(function t(i,l,r){function a(E,b){if(!l[E]){if(!i[E]){var x=typeof Wn=="function"&&Wn;if(!b&&x)return x(E,!0);if(s)return s(E,!0);var u=new Error("Cannot find module '"+E+"'");throw u.code="MODULE_NOT_FOUND",u}var f=l[E]={exports:{}};i[E][0].call(f.exports,function(S){var g=i[E][1][S];return a(g||S)},f,f.exports,t,i,l,r)}return l[E].exports}for(var s=typeof Wn=="function"&&Wn,_=0;_<r.length;_++)a(r[_]);return a})({1:[function(t,i,l){var r=t("./utils"),a=t("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";l.encode=function(_){for(var E,b,x,u,f,S,g,c=[],o=0,v=_.length,T=v,R=r.getTypeOf(_)!=="string";o<_.length;)T=v-o,x=R?(E=_[o++],b=o<v?_[o++]:0,o<v?_[o++]:0):(E=_.charCodeAt(o++),b=o<v?_.charCodeAt(o++):0,o<v?_.charCodeAt(o++):0),u=E>>2,f=(3&E)<<4|b>>4,S=1<T?(15&b)<<2|x>>6:64,g=2<T?63&x:64,c.push(s.charAt(u)+s.charAt(f)+s.charAt(S)+s.charAt(g));return c.join("")},l.decode=function(_){var E,b,x,u,f,S,g=0,c=0,o="data:";if(_.substr(0,o.length)===o)throw new Error("Invalid base64 input, it looks like a data url.");var v,T=3*(_=_.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(_.charAt(_.length-1)===s.charAt(64)&&T--,_.charAt(_.length-2)===s.charAt(64)&&T--,T%1!=0)throw new Error("Invalid base64 input, bad content length.");for(v=a.uint8array?new Uint8Array(0|T):new Array(0|T);g<_.length;)E=s.indexOf(_.charAt(g++))<<2|(u=s.indexOf(_.charAt(g++)))>>4,b=(15&u)<<4|(f=s.indexOf(_.charAt(g++)))>>2,x=(3&f)<<6|(S=s.indexOf(_.charAt(g++))),v[c++]=E,f!==64&&(v[c++]=b),S!==64&&(v[c++]=x);return v}},{"./support":30,"./utils":32}],2:[function(t,i,l){var r=t("./external"),a=t("./stream/DataWorker"),s=t("./stream/Crc32Probe"),_=t("./stream/DataLengthProbe");function E(b,x,u,f,S){this.compressedSize=b,this.uncompressedSize=x,this.crc32=u,this.compression=f,this.compressedContent=S}E.prototype={getContentWorker:function(){var b=new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new _("data_length")),x=this;return b.on("end",function(){if(this.streamInfo.data_length!==x.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),b},getCompressedWorker:function(){return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},E.createWorkerFrom=function(b,x,u){return b.pipe(new s).pipe(new _("uncompressedSize")).pipe(x.compressWorker(u)).pipe(new _("compressedSize")).withStreamInfo("compression",x)},i.exports=E},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,i,l){var r=t("./stream/GenericWorker");l.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},l.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,i,l){var r=t("./utils"),a=(function(){for(var s,_=[],E=0;E<256;E++){s=E;for(var b=0;b<8;b++)s=1&s?3988292384^s>>>1:s>>>1;_[E]=s}return _})();i.exports=function(s,_){return s!==void 0&&s.length?r.getTypeOf(s)!=="string"?(function(E,b,x,u){var f=a,S=u+x;E^=-1;for(var g=u;g<S;g++)E=E>>>8^f[255&(E^b[g])];return-1^E})(0|_,s,s.length,0):(function(E,b,x,u){var f=a,S=u+x;E^=-1;for(var g=u;g<S;g++)E=E>>>8^f[255&(E^b.charCodeAt(g))];return-1^E})(0|_,s,s.length,0):0}},{"./utils":32}],5:[function(t,i,l){l.base64=!1,l.binary=!1,l.dir=!1,l.createFolders=!0,l.date=null,l.compression=null,l.compressionOptions=null,l.comment=null,l.unixPermissions=null,l.dosPermissions=null},{}],6:[function(t,i,l){var r=null;r=typeof Promise<"u"?Promise:t("lie"),i.exports={Promise:r}},{lie:37}],7:[function(t,i,l){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=t("pako"),s=t("./utils"),_=t("./stream/GenericWorker"),E=r?"uint8array":"array";function b(x,u){_.call(this,"FlateWorker/"+x),this._pako=null,this._pakoAction=x,this._pakoOptions=u,this.meta={}}l.magic="\b\0",s.inherits(b,_),b.prototype.processChunk=function(x){this.meta=x.meta,this._pako===null&&this._createPako(),this._pako.push(s.transformTo(E,x.data),!1)},b.prototype.flush=function(){_.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},b.prototype.cleanUp=function(){_.prototype.cleanUp.call(this),this._pako=null},b.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var x=this;this._pako.onData=function(u){x.push({data:u,meta:x.meta})}},l.compressWorker=function(x){return new b("Deflate",x)},l.uncompressWorker=function(){return new b("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,i,l){function r(f,S){var g,c="";for(g=0;g<S;g++)c+=String.fromCharCode(255&f),f>>>=8;return c}function a(f,S,g,c,o,v){var T,R,P=f.file,D=f.compression,L=v!==E.utf8encode,M=s.transformTo("string",v(P.name)),A=s.transformTo("string",E.utf8encode(P.name)),X=P.comment,B=s.transformTo("string",v(X)),C=s.transformTo("string",E.utf8encode(X)),F=A.length!==P.name.length,d=C.length!==X.length,N="",H="",O="",re=P.dir,Z=P.date,ce={crc32:0,compressedSize:0,uncompressedSize:0};S&&!g||(ce.crc32=f.crc32,ce.compressedSize=f.compressedSize,ce.uncompressedSize=f.uncompressedSize);var W=0;S&&(W|=8),L||!F&&!d||(W|=2048);var G=0,ge=0;re&&(G|=16),o==="UNIX"?(ge=798,G|=(function(fe,te){var ue=fe;return fe||(ue=te?16893:33204),(65535&ue)<<16})(P.unixPermissions,re)):(ge=20,G|=(function(fe){return 63&(fe||0)})(P.dosPermissions)),T=Z.getUTCHours(),T<<=6,T|=Z.getUTCMinutes(),T<<=5,T|=Z.getUTCSeconds()/2,R=Z.getUTCFullYear()-1980,R<<=4,R|=Z.getUTCMonth()+1,R<<=5,R|=Z.getUTCDate(),F&&(H=r(1,1)+r(b(M),4)+A,N+="up"+r(H.length,2)+H),d&&(O=r(1,1)+r(b(B),4)+C,N+="uc"+r(O.length,2)+O);var pe="";return pe+=`
\0`,pe+=r(W,2),pe+=D.magic,pe+=r(T,2),pe+=r(R,2),pe+=r(ce.crc32,4),pe+=r(ce.compressedSize,4),pe+=r(ce.uncompressedSize,4),pe+=r(M.length,2),pe+=r(N.length,2),{fileRecord:x.LOCAL_FILE_HEADER+pe+M+N,dirRecord:x.CENTRAL_FILE_HEADER+r(ge,2)+pe+r(B.length,2)+"\0\0\0\0"+r(G,4)+r(c,4)+M+N+B}}var s=t("../utils"),_=t("../stream/GenericWorker"),E=t("../utf8"),b=t("../crc32"),x=t("../signature");function u(f,S,g,c){_.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=S,this.zipPlatform=g,this.encodeFileName=c,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(u,_),u.prototype.push=function(f){var S=f.meta.percent||0,g=this.entriesCount,c=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,_.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:g?(S+100*(g-c-1))/g:100}}))},u.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var S=this.streamFiles&&!f.file.dir;if(S){var g=a(f,S,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(f){this.accumulate=!1;var S=this.streamFiles&&!f.file.dir,g=a(f,S,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),S)this.push({data:(function(c){return x.DATA_DESCRIPTOR+r(c.crc32,4)+r(c.compressedSize,4)+r(c.uncompressedSize,4)})(f),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var f=this.bytesWritten,S=0;S<this.dirRecords.length;S++)this.push({data:this.dirRecords[S],meta:{percent:100}});var g=this.bytesWritten-f,c=(function(o,v,T,R,P){var D=s.transformTo("string",P(R));return x.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(o,2)+r(o,2)+r(v,4)+r(T,4)+r(D.length,2)+D})(this.dirRecords.length,g,f,this.zipComment,this.encodeFileName);this.push({data:c,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(f){this._sources.push(f);var S=this;return f.on("data",function(g){S.processChunk(g)}),f.on("end",function(){S.closedSource(S.previous.streamInfo),S._sources.length?S.prepareNextSource():S.end()}),f.on("error",function(g){S.error(g)}),this},u.prototype.resume=function(){return!!_.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},u.prototype.error=function(f){var S=this._sources;if(!_.prototype.error.call(this,f))return!1;for(var g=0;g<S.length;g++)try{S[g].error(f)}catch{}return!0},u.prototype.lock=function(){_.prototype.lock.call(this);for(var f=this._sources,S=0;S<f.length;S++)f[S].lock()},i.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,i,l){var r=t("../compressions"),a=t("./ZipFileWorker");l.generateWorker=function(s,_,E){var b=new a(_.streamFiles,E,_.platform,_.encodeFileName),x=0;try{s.forEach(function(u,f){x++;var S=(function(v,T){var R=v||T,P=r[R];if(!P)throw new Error(R+" is not a valid compression method !");return P})(f.options.compression,_.compression),g=f.options.compressionOptions||_.compressionOptions||{},c=f.dir,o=f.date;f._compressWorker(S,g).withStreamInfo("file",{name:u,dir:c,date:o,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(b)}),b.entriesCount=x}catch(u){b.error(u)}return b}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,i,l){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new r;for(var s in this)typeof this[s]!="function"&&(a[s]=this[s]);return a}}(r.prototype=t("./object")).loadAsync=t("./load"),r.support=t("./support"),r.defaults=t("./defaults"),r.version="3.10.1",r.loadAsync=function(a,s){return new r().loadAsync(a,s)},r.external=t("./external"),i.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,i,l){var r=t("./utils"),a=t("./external"),s=t("./utf8"),_=t("./zipEntries"),E=t("./stream/Crc32Probe"),b=t("./nodejsUtils");function x(u){return new a.Promise(function(f,S){var g=u.decompressed.getContentWorker().pipe(new E);g.on("error",function(c){S(c)}).on("end",function(){g.streamInfo.crc32!==u.decompressed.crc32?S(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}i.exports=function(u,f){var S=this;return f=r.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),b.isNode&&b.isStream(u)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",u,!0,f.optimizedBinaryString,f.base64).then(function(g){var c=new _(f);return c.load(g),c}).then(function(g){var c=[a.Promise.resolve(g)],o=g.files;if(f.checkCRC32)for(var v=0;v<o.length;v++)c.push(x(o[v]));return a.Promise.all(c)}).then(function(g){for(var c=g.shift(),o=c.files,v=0;v<o.length;v++){var T=o[v],R=T.fileNameStr,P=r.resolve(T.fileNameStr);S.file(P,T.decompressed,{binary:!0,optimizedBinaryString:!0,date:T.date,dir:T.dir,comment:T.fileCommentStr.length?T.fileCommentStr:null,unixPermissions:T.unixPermissions,dosPermissions:T.dosPermissions,createFolders:f.createFolders}),T.dir||(S.file(P).unsafeOriginalName=R)}return c.zipComment.length&&(S.comment=c.zipComment),S})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,i,l){var r=t("../utils"),a=t("../stream/GenericWorker");function s(_,E){a.call(this,"Nodejs stream input adapter for "+_),this._upstreamEnded=!1,this._bindStream(E)}r.inherits(s,a),s.prototype._bindStream=function(_){var E=this;(this._stream=_).pause(),_.on("data",function(b){E.push({data:b,meta:{percent:0}})}).on("error",function(b){E.isPaused?this.generatedError=b:E.error(b)}).on("end",function(){E.isPaused?E._upstreamEnded=!0:E.end()})},s.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,i,l){var r=t("readable-stream").Readable;function a(s,_,E){r.call(this,_),this._helper=s;var b=this;s.on("data",function(x,u){b.push(x)||b._helper.pause(),E&&E(u)}).on("error",function(x){b.emit("error",x)}).on("end",function(){b.push(null)})}t("../utils").inherits(a,r),a.prototype._read=function(){this._helper.resume()},i.exports=a},{"../utils":32,"readable-stream":16}],14:[function(t,i,l){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,a);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,a)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var a=new Buffer(r);return a.fill(0),a},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(t,i,l){function r(P,D,L){var M,A=s.getTypeOf(D),X=s.extend(L||{},b);X.date=X.date||new Date,X.compression!==null&&(X.compression=X.compression.toUpperCase()),typeof X.unixPermissions=="string"&&(X.unixPermissions=parseInt(X.unixPermissions,8)),X.unixPermissions&&16384&X.unixPermissions&&(X.dir=!0),X.dosPermissions&&16&X.dosPermissions&&(X.dir=!0),X.dir&&(P=o(P)),X.createFolders&&(M=c(P))&&v.call(this,M,!0);var B=A==="string"&&X.binary===!1&&X.base64===!1;L&&L.binary!==void 0||(X.binary=!B),(D instanceof x&&D.uncompressedSize===0||X.dir||!D||D.length===0)&&(X.base64=!1,X.binary=!0,D="",X.compression="STORE",A="string");var C=null;C=D instanceof x||D instanceof _?D:S.isNode&&S.isStream(D)?new g(P,D):s.prepareContent(P,D,X.binary,X.optimizedBinaryString,X.base64);var F=new u(P,C,X);this.files[P]=F}var a=t("./utf8"),s=t("./utils"),_=t("./stream/GenericWorker"),E=t("./stream/StreamHelper"),b=t("./defaults"),x=t("./compressedObject"),u=t("./zipObject"),f=t("./generate"),S=t("./nodejsUtils"),g=t("./nodejs/NodejsStreamInputAdapter"),c=function(P){P.slice(-1)==="/"&&(P=P.substring(0,P.length-1));var D=P.lastIndexOf("/");return 0<D?P.substring(0,D):""},o=function(P){return P.slice(-1)!=="/"&&(P+="/"),P},v=function(P,D){return D=D!==void 0?D:b.createFolders,P=o(P),this.files[P]||r.call(this,P,null,{dir:!0,createFolders:D}),this.files[P]};function T(P){return Object.prototype.toString.call(P)==="[object RegExp]"}var R={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(P){var D,L,M;for(D in this.files)M=this.files[D],(L=D.slice(this.root.length,D.length))&&D.slice(0,this.root.length)===this.root&&P(L,M)},filter:function(P){var D=[];return this.forEach(function(L,M){P(L,M)&&D.push(M)}),D},file:function(P,D,L){if(arguments.length!==1)return P=this.root+P,r.call(this,P,D,L),this;if(T(P)){var M=P;return this.filter(function(X,B){return!B.dir&&M.test(X)})}var A=this.files[this.root+P];return A&&!A.dir?A:null},folder:function(P){if(!P)return this;if(T(P))return this.filter(function(A,X){return X.dir&&P.test(A)});var D=this.root+P,L=v.call(this,D),M=this.clone();return M.root=L.name,M},remove:function(P){P=this.root+P;var D=this.files[P];if(D||(P.slice(-1)!=="/"&&(P+="/"),D=this.files[P]),D&&!D.dir)delete this.files[P];else for(var L=this.filter(function(A,X){return X.name.slice(0,P.length)===P}),M=0;M<L.length;M++)delete this.files[L[M].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(P){var D,L={};try{if((L=s.extend(P||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=L.type.toLowerCase(),L.compression=L.compression.toUpperCase(),L.type==="binarystring"&&(L.type="string"),!L.type)throw new Error("No output type specified.");s.checkSupport(L.type),L.platform!=="darwin"&&L.platform!=="freebsd"&&L.platform!=="linux"&&L.platform!=="sunos"||(L.platform="UNIX"),L.platform==="win32"&&(L.platform="DOS");var M=L.comment||this.comment||"";D=f.generateWorker(this,L,M)}catch(A){(D=new _("error")).error(A)}return new E(D,L.type||"string",L.mimeType)},generateAsync:function(P,D){return this.generateInternalStream(P).accumulate(D)},generateNodeStream:function(P,D){return(P=P||{}).type||(P.type="nodebuffer"),this.generateInternalStream(P).toNodejsStream(D)}};i.exports=R},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,i,l){i.exports=t("stream")},{stream:void 0}],17:[function(t,i,l){var r=t("./DataReader");function a(s){r.call(this,s);for(var _=0;_<this.data.length;_++)s[_]=255&s[_]}t("../utils").inherits(a,r),a.prototype.byteAt=function(s){return this.data[this.zero+s]},a.prototype.lastIndexOfSignature=function(s){for(var _=s.charCodeAt(0),E=s.charCodeAt(1),b=s.charCodeAt(2),x=s.charCodeAt(3),u=this.length-4;0<=u;--u)if(this.data[u]===_&&this.data[u+1]===E&&this.data[u+2]===b&&this.data[u+3]===x)return u-this.zero;return-1},a.prototype.readAndCheckSignature=function(s){var _=s.charCodeAt(0),E=s.charCodeAt(1),b=s.charCodeAt(2),x=s.charCodeAt(3),u=this.readData(4);return _===u[0]&&E===u[1]&&b===u[2]&&x===u[3]},a.prototype.readData=function(s){if(this.checkOffset(s),s===0)return[];var _=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,_},i.exports=a},{"../utils":32,"./DataReader":18}],18:[function(t,i,l){var r=t("../utils");function a(s){this.data=s,this.length=s.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(s){this.checkIndex(this.index+s)},checkIndex:function(s){if(this.length<this.zero+s||s<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+s+"). Corrupted zip ?")},setIndex:function(s){this.checkIndex(s),this.index=s},skip:function(s){this.setIndex(this.index+s)},byteAt:function(){},readInt:function(s){var _,E=0;for(this.checkOffset(s),_=this.index+s-1;_>=this.index;_--)E=(E<<8)+this.byteAt(_);return this.index+=s,E},readString:function(s){return r.transformTo("string",this.readData(s))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var s=this.readInt(4);return new Date(Date.UTC(1980+(s>>25&127),(s>>21&15)-1,s>>16&31,s>>11&31,s>>5&63,(31&s)<<1))}},i.exports=a},{"../utils":32}],19:[function(t,i,l){var r=t("./Uint8ArrayReader");function a(s){r.call(this,s)}t("../utils").inherits(a,r),a.prototype.readData=function(s){this.checkOffset(s);var _=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,_},i.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,i,l){var r=t("./DataReader");function a(s){r.call(this,s)}t("../utils").inherits(a,r),a.prototype.byteAt=function(s){return this.data.charCodeAt(this.zero+s)},a.prototype.lastIndexOfSignature=function(s){return this.data.lastIndexOf(s)-this.zero},a.prototype.readAndCheckSignature=function(s){return s===this.readData(4)},a.prototype.readData=function(s){this.checkOffset(s);var _=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,_},i.exports=a},{"../utils":32,"./DataReader":18}],21:[function(t,i,l){var r=t("./ArrayReader");function a(s){r.call(this,s)}t("../utils").inherits(a,r),a.prototype.readData=function(s){if(this.checkOffset(s),s===0)return new Uint8Array(0);var _=this.data.subarray(this.zero+this.index,this.zero+this.index+s);return this.index+=s,_},i.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(t,i,l){var r=t("../utils"),a=t("../support"),s=t("./ArrayReader"),_=t("./StringReader"),E=t("./NodeBufferReader"),b=t("./Uint8ArrayReader");i.exports=function(x){var u=r.getTypeOf(x);return r.checkSupport(u),u!=="string"||a.uint8array?u==="nodebuffer"?new E(x):a.uint8array?new b(r.transformTo("uint8array",x)):new s(r.transformTo("array",x)):new _(x)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,i,l){l.LOCAL_FILE_HEADER="PK",l.CENTRAL_FILE_HEADER="PK",l.CENTRAL_DIRECTORY_END="PK",l.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",l.ZIP64_CENTRAL_DIRECTORY_END="PK",l.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,i,l){var r=t("./GenericWorker"),a=t("../utils");function s(_){r.call(this,"ConvertWorker to "+_),this.destType=_}a.inherits(s,r),s.prototype.processChunk=function(_){this.push({data:a.transformTo(this.destType,_.data),meta:_.meta})},i.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(t,i,l){var r=t("./GenericWorker"),a=t("../crc32");function s(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(s,r),s.prototype.processChunk=function(_){this.streamInfo.crc32=a(_.data,this.streamInfo.crc32||0),this.push(_)},i.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,i,l){var r=t("../utils"),a=t("./GenericWorker");function s(_){a.call(this,"DataLengthProbe for "+_),this.propName=_,this.withStreamInfo(_,0)}r.inherits(s,a),s.prototype.processChunk=function(_){if(_){var E=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=E+_.data.length}a.prototype.processChunk.call(this,_)},i.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(t,i,l){var r=t("../utils"),a=t("./GenericWorker");function s(_){a.call(this,"DataWorker");var E=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,_.then(function(b){E.dataIsReady=!0,E.data=b,E.max=b&&b.length||0,E.type=r.getTypeOf(b),E.isPaused||E._tickAndRepeat()},function(b){E.error(b)})}r.inherits(s,a),s.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var _=null,E=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":_=this.data.substring(this.index,E);break;case"uint8array":_=this.data.subarray(this.index,E);break;case"array":case"nodebuffer":_=this.data.slice(this.index,E)}return this.index=E,this.push({data:_,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(t,i,l){function r(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,s){return this._listeners[a].push(s),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,s){if(this._listeners[a])for(var _=0;_<this._listeners[a].length;_++)this._listeners[a][_].call(this,s)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var s=this;return a.on("data",function(_){s.processChunk(_)}),a.on("end",function(){s.end()}),a.on("error",function(_){s.error(_)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,s){return this.extraStreamInfo[a]=s,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},i.exports=r},{}],29:[function(t,i,l){var r=t("../utils"),a=t("./ConvertWorker"),s=t("./GenericWorker"),_=t("../base64"),E=t("../support"),b=t("../external"),x=null;if(E.nodestream)try{x=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function u(S,g){return new b.Promise(function(c,o){var v=[],T=S._internalType,R=S._outputType,P=S._mimeType;S.on("data",function(D,L){v.push(D),g&&g(L)}).on("error",function(D){v=[],o(D)}).on("end",function(){try{var D=(function(L,M,A){switch(L){case"blob":return r.newBlob(r.transformTo("arraybuffer",M),A);case"base64":return _.encode(M);default:return r.transformTo(L,M)}})(R,(function(L,M){var A,X=0,B=null,C=0;for(A=0;A<M.length;A++)C+=M[A].length;switch(L){case"string":return M.join("");case"array":return Array.prototype.concat.apply([],M);case"uint8array":for(B=new Uint8Array(C),A=0;A<M.length;A++)B.set(M[A],X),X+=M[A].length;return B;case"nodebuffer":return Buffer.concat(M);default:throw new Error("concat : unsupported type '"+L+"'")}})(T,v),P);c(D)}catch(L){o(L)}v=[]}).resume()})}function f(S,g,c){var o=g;switch(g){case"blob":case"arraybuffer":o="uint8array";break;case"base64":o="string"}try{this._internalType=o,this._outputType=g,this._mimeType=c,r.checkSupport(o),this._worker=S.pipe(new a(o)),S.lock()}catch(v){this._worker=new s("error"),this._worker.error(v)}}f.prototype={accumulate:function(S){return u(this,S)},on:function(S,g){var c=this;return S==="data"?this._worker.on(S,function(o){g.call(c,o.data,o.meta)}):this._worker.on(S,function(){r.delay(g,arguments,c)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(S){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new x(this,{objectMode:this._outputType!=="nodebuffer"},S)}},i.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,i,l){if(l.base64=!0,l.array=!0,l.string=!0,l.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",l.nodebuffer=typeof Buffer<"u",l.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")l.blob=!1;else{var r=new ArrayBuffer(0);try{l.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(r),l.blob=a.getBlob("application/zip").size===0}catch{l.blob=!1}}}try{l.nodestream=!!t("readable-stream").Readable}catch{l.nodestream=!1}},{"readable-stream":16}],31:[function(t,i,l){for(var r=t("./utils"),a=t("./support"),s=t("./nodejsUtils"),_=t("./stream/GenericWorker"),E=new Array(256),b=0;b<256;b++)E[b]=252<=b?6:248<=b?5:240<=b?4:224<=b?3:192<=b?2:1;E[254]=E[254]=1;function x(){_.call(this,"utf-8 decode"),this.leftOver=null}function u(){_.call(this,"utf-8 encode")}l.utf8encode=function(f){return a.nodebuffer?s.newBufferFrom(f,"utf-8"):(function(S){var g,c,o,v,T,R=S.length,P=0;for(v=0;v<R;v++)(64512&(c=S.charCodeAt(v)))==55296&&v+1<R&&(64512&(o=S.charCodeAt(v+1)))==56320&&(c=65536+(c-55296<<10)+(o-56320),v++),P+=c<128?1:c<2048?2:c<65536?3:4;for(g=a.uint8array?new Uint8Array(P):new Array(P),v=T=0;T<P;v++)(64512&(c=S.charCodeAt(v)))==55296&&v+1<R&&(64512&(o=S.charCodeAt(v+1)))==56320&&(c=65536+(c-55296<<10)+(o-56320),v++),c<128?g[T++]=c:(c<2048?g[T++]=192|c>>>6:(c<65536?g[T++]=224|c>>>12:(g[T++]=240|c>>>18,g[T++]=128|c>>>12&63),g[T++]=128|c>>>6&63),g[T++]=128|63&c);return g})(f)},l.utf8decode=function(f){return a.nodebuffer?r.transformTo("nodebuffer",f).toString("utf-8"):(function(S){var g,c,o,v,T=S.length,R=new Array(2*T);for(g=c=0;g<T;)if((o=S[g++])<128)R[c++]=o;else if(4<(v=E[o]))R[c++]=65533,g+=v-1;else{for(o&=v===2?31:v===3?15:7;1<v&&g<T;)o=o<<6|63&S[g++],v--;1<v?R[c++]=65533:o<65536?R[c++]=o:(o-=65536,R[c++]=55296|o>>10&1023,R[c++]=56320|1023&o)}return R.length!==c&&(R.subarray?R=R.subarray(0,c):R.length=c),r.applyFromCharCode(R)})(f=r.transformTo(a.uint8array?"uint8array":"array",f))},r.inherits(x,_),x.prototype.processChunk=function(f){var S=r.transformTo(a.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var g=S;(S=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),S.set(g,this.leftOver.length)}else S=this.leftOver.concat(S);this.leftOver=null}var c=(function(v,T){var R;for((T=T||v.length)>v.length&&(T=v.length),R=T-1;0<=R&&(192&v[R])==128;)R--;return R<0||R===0?T:R+E[v[R]]>T?R:T})(S),o=S;c!==S.length&&(a.uint8array?(o=S.subarray(0,c),this.leftOver=S.subarray(c,S.length)):(o=S.slice(0,c),this.leftOver=S.slice(c,S.length))),this.push({data:l.utf8decode(o),meta:f.meta})},x.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:l.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},l.Utf8DecodeWorker=x,r.inherits(u,_),u.prototype.processChunk=function(f){this.push({data:l.utf8encode(f.data),meta:f.meta})},l.Utf8EncodeWorker=u},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,i,l){var r=t("./support"),a=t("./base64"),s=t("./nodejsUtils"),_=t("./external");function E(g){return g}function b(g,c){for(var o=0;o<g.length;++o)c[o]=255&g.charCodeAt(o);return c}t("setimmediate"),l.newBlob=function(g,c){l.checkSupport("blob");try{return new Blob([g],{type:c})}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return o.append(g),o.getBlob(c)}catch{throw new Error("Bug : can't construct the Blob.")}}};var x={stringifyByChunk:function(g,c,o){var v=[],T=0,R=g.length;if(R<=o)return String.fromCharCode.apply(null,g);for(;T<R;)c==="array"||c==="nodebuffer"?v.push(String.fromCharCode.apply(null,g.slice(T,Math.min(T+o,R)))):v.push(String.fromCharCode.apply(null,g.subarray(T,Math.min(T+o,R)))),T+=o;return v.join("")},stringifyByChar:function(g){for(var c="",o=0;o<g.length;o++)c+=String.fromCharCode(g[o]);return c},applyCanBeUsed:{uint8array:(function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,s.allocBuffer(1)).length===1}catch{return!1}})()}};function u(g){var c=65536,o=l.getTypeOf(g),v=!0;if(o==="uint8array"?v=x.applyCanBeUsed.uint8array:o==="nodebuffer"&&(v=x.applyCanBeUsed.nodebuffer),v)for(;1<c;)try{return x.stringifyByChunk(g,o,c)}catch{c=Math.floor(c/2)}return x.stringifyByChar(g)}function f(g,c){for(var o=0;o<g.length;o++)c[o]=g[o];return c}l.applyFromCharCode=u;var S={};S.string={string:E,array:function(g){return b(g,new Array(g.length))},arraybuffer:function(g){return S.string.uint8array(g).buffer},uint8array:function(g){return b(g,new Uint8Array(g.length))},nodebuffer:function(g){return b(g,s.allocBuffer(g.length))}},S.array={string:u,array:E,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return s.newBufferFrom(g)}},S.arraybuffer={string:function(g){return u(new Uint8Array(g))},array:function(g){return f(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:E,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return s.newBufferFrom(new Uint8Array(g))}},S.uint8array={string:u,array:function(g){return f(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:E,nodebuffer:function(g){return s.newBufferFrom(g)}},S.nodebuffer={string:u,array:function(g){return f(g,new Array(g.length))},arraybuffer:function(g){return S.nodebuffer.uint8array(g).buffer},uint8array:function(g){return f(g,new Uint8Array(g.length))},nodebuffer:E},l.transformTo=function(g,c){if(c=c||"",!g)return c;l.checkSupport(g);var o=l.getTypeOf(c);return S[o][g](c)},l.resolve=function(g){for(var c=g.split("/"),o=[],v=0;v<c.length;v++){var T=c[v];T==="."||T===""&&v!==0&&v!==c.length-1||(T===".."?o.pop():o.push(T))}return o.join("/")},l.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":r.nodebuffer&&s.isBuffer(g)?"nodebuffer":r.uint8array&&g instanceof Uint8Array?"uint8array":r.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},l.checkSupport=function(g){if(!r[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},l.MAX_VALUE_16BITS=65535,l.MAX_VALUE_32BITS=-1,l.pretty=function(g){var c,o,v="";for(o=0;o<(g||"").length;o++)v+="\\x"+((c=g.charCodeAt(o))<16?"0":"")+c.toString(16).toUpperCase();return v},l.delay=function(g,c,o){setImmediate(function(){g.apply(o||null,c||[])})},l.inherits=function(g,c){function o(){}o.prototype=c.prototype,g.prototype=new o},l.extend=function(){var g,c,o={};for(g=0;g<arguments.length;g++)for(c in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],c)&&o[c]===void 0&&(o[c]=arguments[g][c]);return o},l.prepareContent=function(g,c,o,v,T){return _.Promise.resolve(c).then(function(R){return r.blob&&(R instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(R))!==-1)&&typeof FileReader<"u"?new _.Promise(function(P,D){var L=new FileReader;L.onload=function(M){P(M.target.result)},L.onerror=function(M){D(M.target.error)},L.readAsArrayBuffer(R)}):R}).then(function(R){var P=l.getTypeOf(R);return P?(P==="arraybuffer"?R=l.transformTo("uint8array",R):P==="string"&&(T?R=a.decode(R):o&&v!==!0&&(R=(function(D){return b(D,r.uint8array?new Uint8Array(D.length):new Array(D.length))})(R))),R):_.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,i,l){var r=t("./reader/readerFor"),a=t("./utils"),s=t("./signature"),_=t("./zipEntry"),E=t("./support");function b(x){this.files=[],this.loadOptions=x}b.prototype={checkSignature:function(x){if(!this.reader.readAndCheckSignature(x)){this.reader.index-=4;var u=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(u)+", expected "+a.pretty(x)+")")}},isSignature:function(x,u){var f=this.reader.index;this.reader.setIndex(x);var S=this.reader.readString(4)===u;return this.reader.setIndex(f),S},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var x=this.reader.readData(this.zipCommentLength),u=E.uint8array?"uint8array":"array",f=a.transformTo(u,x);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var x,u,f,S=this.zip64EndOfCentralSize-44;0<S;)x=this.reader.readInt(2),u=this.reader.readInt(4),f=this.reader.readData(u),this.zip64ExtensibleData[x]={id:x,length:u,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var x,u;for(x=0;x<this.files.length;x++)u=this.files[x],this.reader.setIndex(u.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),u.readLocalPart(this.reader),u.handleUTF8(),u.processAttributes()},readCentralDir:function(){var x;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(x=new _({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(x);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var x=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(x<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(x);var u=x;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(x=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(x),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var S=u-f;if(0<S)this.isSignature(u,s.CENTRAL_FILE_HEADER)||(this.reader.zero=S);else if(S<0)throw new Error("Corrupted zip: missing "+Math.abs(S)+" bytes.")},prepareReader:function(x){this.reader=r(x)},load:function(x){this.prepareReader(x),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=b},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,i,l){var r=t("./reader/readerFor"),a=t("./utils"),s=t("./compressedObject"),_=t("./crc32"),E=t("./utf8"),b=t("./compressions"),x=t("./support");function u(f,S){this.options=f,this.loadOptions=S}u.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var S,g;if(f.skip(22),this.fileNameLength=f.readInt(2),g=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((S=(function(c){for(var o in b)if(Object.prototype.hasOwnProperty.call(b,o)&&b[o].magic===c)return b[o];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,S,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var S=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(S),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=r(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var S,g,c,o=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<o;)S=f.readInt(2),g=f.readInt(2),c=f.readData(g),this.extraFields[S]={id:S,length:g,value:c};f.setIndex(o)},handleUTF8:function(){var f=x.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=E.utf8decode(this.fileName),this.fileCommentStr=E.utf8decode(this.fileComment);else{var S=this.findExtraFieldUnicodePath();if(S!==null)this.fileNameStr=S;else{var g=a.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var c=this.findExtraFieldUnicodeComment();if(c!==null)this.fileCommentStr=c;else{var o=a.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(o)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var S=r(f.value);return S.readInt(1)!==1||_(this.fileName)!==S.readInt(4)?null:E.utf8decode(S.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var S=r(f.value);return S.readInt(1)!==1||_(this.fileComment)!==S.readInt(4)?null:E.utf8decode(S.readData(f.length-5))}return null}},i.exports=u},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,i,l){function r(S,g,c){this.name=S,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this.unixPermissions=c.unixPermissions,this.dosPermissions=c.dosPermissions,this._data=g,this._dataBinary=c.binary,this.options={compression:c.compression,compressionOptions:c.compressionOptions}}var a=t("./stream/StreamHelper"),s=t("./stream/DataWorker"),_=t("./utf8"),E=t("./compressedObject"),b=t("./stream/GenericWorker");r.prototype={internalStream:function(S){var g=null,c="string";try{if(!S)throw new Error("No output type specified.");var o=(c=S.toLowerCase())==="string"||c==="text";c!=="binarystring"&&c!=="text"||(c="string"),g=this._decompressWorker();var v=!this._dataBinary;v&&!o&&(g=g.pipe(new _.Utf8EncodeWorker)),!v&&o&&(g=g.pipe(new _.Utf8DecodeWorker))}catch(T){(g=new b("error")).error(T)}return new a(g,c,"")},async:function(S,g){return this.internalStream(S).accumulate(g)},nodeStream:function(S,g){return this.internalStream(S||"nodebuffer").toNodejsStream(g)},_compressWorker:function(S,g){if(this._data instanceof E&&this._data.compression.magic===S.magic)return this._data.getCompressedWorker();var c=this._decompressWorker();return this._dataBinary||(c=c.pipe(new _.Utf8EncodeWorker)),E.createWorkerFrom(c,S,g)},_decompressWorker:function(){return this._data instanceof E?this._data.getContentWorker():this._data instanceof b?this._data:new s(this._data)}};for(var x=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],u=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<x.length;f++)r.prototype[x[f]]=u;i.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,i,l){(function(r){var a,s,_=r.MutationObserver||r.WebKitMutationObserver;if(_){var E=0,b=new _(S),x=r.document.createTextNode("");b.observe(x,{characterData:!0}),a=function(){x.data=E=++E%2}}else if(r.setImmediate||r.MessageChannel===void 0)a="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var g=r.document.createElement("script");g.onreadystatechange=function(){S(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},r.document.documentElement.appendChild(g)}:function(){setTimeout(S,0)};else{var u=new r.MessageChannel;u.port1.onmessage=S,a=function(){u.port2.postMessage(0)}}var f=[];function S(){var g,c;s=!0;for(var o=f.length;o;){for(c=f,f=[],g=-1;++g<o;)c[g]();o=f.length}s=!1}i.exports=function(g){f.push(g)!==1||s||a()}}).call(this,typeof zn<"u"?zn:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,i,l){var r=t("immediate");function a(){}var s={},_=["REJECTED"],E=["FULFILLED"],b=["PENDING"];function x(o){if(typeof o!="function")throw new TypeError("resolver must be a function");this.state=b,this.queue=[],this.outcome=void 0,o!==a&&g(this,o)}function u(o,v,T){this.promise=o,typeof v=="function"&&(this.onFulfilled=v,this.callFulfilled=this.otherCallFulfilled),typeof T=="function"&&(this.onRejected=T,this.callRejected=this.otherCallRejected)}function f(o,v,T){r(function(){var R;try{R=v(T)}catch(P){return s.reject(o,P)}R===o?s.reject(o,new TypeError("Cannot resolve promise with itself")):s.resolve(o,R)})}function S(o){var v=o&&o.then;if(o&&(typeof o=="object"||typeof o=="function")&&typeof v=="function")return function(){v.apply(o,arguments)}}function g(o,v){var T=!1;function R(L){T||(T=!0,s.reject(o,L))}function P(L){T||(T=!0,s.resolve(o,L))}var D=c(function(){v(P,R)});D.status==="error"&&R(D.value)}function c(o,v){var T={};try{T.value=o(v),T.status="success"}catch(R){T.status="error",T.value=R}return T}(i.exports=x).prototype.finally=function(o){if(typeof o!="function")return this;var v=this.constructor;return this.then(function(T){return v.resolve(o()).then(function(){return T})},function(T){return v.resolve(o()).then(function(){throw T})})},x.prototype.catch=function(o){return this.then(null,o)},x.prototype.then=function(o,v){if(typeof o!="function"&&this.state===E||typeof v!="function"&&this.state===_)return this;var T=new this.constructor(a);return this.state!==b?f(T,this.state===E?o:v,this.outcome):this.queue.push(new u(T,o,v)),T},u.prototype.callFulfilled=function(o){s.resolve(this.promise,o)},u.prototype.otherCallFulfilled=function(o){f(this.promise,this.onFulfilled,o)},u.prototype.callRejected=function(o){s.reject(this.promise,o)},u.prototype.otherCallRejected=function(o){f(this.promise,this.onRejected,o)},s.resolve=function(o,v){var T=c(S,v);if(T.status==="error")return s.reject(o,T.value);var R=T.value;if(R)g(o,R);else{o.state=E,o.outcome=v;for(var P=-1,D=o.queue.length;++P<D;)o.queue[P].callFulfilled(v)}return o},s.reject=function(o,v){o.state=_,o.outcome=v;for(var T=-1,R=o.queue.length;++T<R;)o.queue[T].callRejected(v);return o},x.resolve=function(o){return o instanceof this?o:s.resolve(new this(a),o)},x.reject=function(o){var v=new this(a);return s.reject(v,o)},x.all=function(o){var v=this;if(Object.prototype.toString.call(o)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=o.length,R=!1;if(!T)return this.resolve([]);for(var P=new Array(T),D=0,L=-1,M=new this(a);++L<T;)A(o[L],L);return M;function A(X,B){v.resolve(X).then(function(C){P[B]=C,++D!==T||R||(R=!0,s.resolve(M,P))},function(C){R||(R=!0,s.reject(M,C))})}},x.race=function(o){var v=this;if(Object.prototype.toString.call(o)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=o.length,R=!1;if(!T)return this.resolve([]);for(var P=-1,D=new this(a);++P<T;)L=o[P],v.resolve(L).then(function(M){R||(R=!0,s.resolve(D,M))},function(M){R||(R=!0,s.reject(D,M))});var L;return D}},{immediate:36}],38:[function(t,i,l){var r={};(0,t("./lib/utils/common").assign)(r,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),i.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,i,l){var r=t("./zlib/deflate"),a=t("./utils/common"),s=t("./utils/strings"),_=t("./zlib/messages"),E=t("./zlib/zstream"),b=Object.prototype.toString,x=0,u=-1,f=0,S=8;function g(o){if(!(this instanceof g))return new g(o);this.options=a.assign({level:u,method:S,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},o||{});var v=this.options;v.raw&&0<v.windowBits?v.windowBits=-v.windowBits:v.gzip&&0<v.windowBits&&v.windowBits<16&&(v.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new E,this.strm.avail_out=0;var T=r.deflateInit2(this.strm,v.level,v.method,v.windowBits,v.memLevel,v.strategy);if(T!==x)throw new Error(_[T]);if(v.header&&r.deflateSetHeader(this.strm,v.header),v.dictionary){var R;if(R=typeof v.dictionary=="string"?s.string2buf(v.dictionary):b.call(v.dictionary)==="[object ArrayBuffer]"?new Uint8Array(v.dictionary):v.dictionary,(T=r.deflateSetDictionary(this.strm,R))!==x)throw new Error(_[T]);this._dict_set=!0}}function c(o,v){var T=new g(v);if(T.push(o,!0),T.err)throw T.msg||_[T.err];return T.result}g.prototype.push=function(o,v){var T,R,P=this.strm,D=this.options.chunkSize;if(this.ended)return!1;R=v===~~v?v:v===!0?4:0,typeof o=="string"?P.input=s.string2buf(o):b.call(o)==="[object ArrayBuffer]"?P.input=new Uint8Array(o):P.input=o,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new a.Buf8(D),P.next_out=0,P.avail_out=D),(T=r.deflate(P,R))!==1&&T!==x)return this.onEnd(T),!(this.ended=!0);P.avail_out!==0&&(P.avail_in!==0||R!==4&&R!==2)||(this.options.to==="string"?this.onData(s.buf2binstring(a.shrinkBuf(P.output,P.next_out))):this.onData(a.shrinkBuf(P.output,P.next_out)))}while((0<P.avail_in||P.avail_out===0)&&T!==1);return R===4?(T=r.deflateEnd(this.strm),this.onEnd(T),this.ended=!0,T===x):R!==2||(this.onEnd(x),!(P.avail_out=0))},g.prototype.onData=function(o){this.chunks.push(o)},g.prototype.onEnd=function(o){o===x&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=o,this.msg=this.strm.msg},l.Deflate=g,l.deflate=c,l.deflateRaw=function(o,v){return(v=v||{}).raw=!0,c(o,v)},l.gzip=function(o,v){return(v=v||{}).gzip=!0,c(o,v)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,i,l){var r=t("./zlib/inflate"),a=t("./utils/common"),s=t("./utils/strings"),_=t("./zlib/constants"),E=t("./zlib/messages"),b=t("./zlib/zstream"),x=t("./zlib/gzheader"),u=Object.prototype.toString;function f(g){if(!(this instanceof f))return new f(g);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},g||{});var c=this.options;c.raw&&0<=c.windowBits&&c.windowBits<16&&(c.windowBits=-c.windowBits,c.windowBits===0&&(c.windowBits=-15)),!(0<=c.windowBits&&c.windowBits<16)||g&&g.windowBits||(c.windowBits+=32),15<c.windowBits&&c.windowBits<48&&(15&c.windowBits)==0&&(c.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new b,this.strm.avail_out=0;var o=r.inflateInit2(this.strm,c.windowBits);if(o!==_.Z_OK)throw new Error(E[o]);this.header=new x,r.inflateGetHeader(this.strm,this.header)}function S(g,c){var o=new f(c);if(o.push(g,!0),o.err)throw o.msg||E[o.err];return o.result}f.prototype.push=function(g,c){var o,v,T,R,P,D,L=this.strm,M=this.options.chunkSize,A=this.options.dictionary,X=!1;if(this.ended)return!1;v=c===~~c?c:c===!0?_.Z_FINISH:_.Z_NO_FLUSH,typeof g=="string"?L.input=s.binstring2buf(g):u.call(g)==="[object ArrayBuffer]"?L.input=new Uint8Array(g):L.input=g,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new a.Buf8(M),L.next_out=0,L.avail_out=M),(o=r.inflate(L,_.Z_NO_FLUSH))===_.Z_NEED_DICT&&A&&(D=typeof A=="string"?s.string2buf(A):u.call(A)==="[object ArrayBuffer]"?new Uint8Array(A):A,o=r.inflateSetDictionary(this.strm,D)),o===_.Z_BUF_ERROR&&X===!0&&(o=_.Z_OK,X=!1),o!==_.Z_STREAM_END&&o!==_.Z_OK)return this.onEnd(o),!(this.ended=!0);L.next_out&&(L.avail_out!==0&&o!==_.Z_STREAM_END&&(L.avail_in!==0||v!==_.Z_FINISH&&v!==_.Z_SYNC_FLUSH)||(this.options.to==="string"?(T=s.utf8border(L.output,L.next_out),R=L.next_out-T,P=s.buf2string(L.output,T),L.next_out=R,L.avail_out=M-R,R&&a.arraySet(L.output,L.output,T,R,0),this.onData(P)):this.onData(a.shrinkBuf(L.output,L.next_out)))),L.avail_in===0&&L.avail_out===0&&(X=!0)}while((0<L.avail_in||L.avail_out===0)&&o!==_.Z_STREAM_END);return o===_.Z_STREAM_END&&(v=_.Z_FINISH),v===_.Z_FINISH?(o=r.inflateEnd(this.strm),this.onEnd(o),this.ended=!0,o===_.Z_OK):v!==_.Z_SYNC_FLUSH||(this.onEnd(_.Z_OK),!(L.avail_out=0))},f.prototype.onData=function(g){this.chunks.push(g)},f.prototype.onEnd=function(g){g===_.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},l.Inflate=f,l.inflate=S,l.inflateRaw=function(g,c){return(c=c||{}).raw=!0,S(g,c)},l.ungzip=S},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,i,l){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";l.assign=function(_){for(var E=Array.prototype.slice.call(arguments,1);E.length;){var b=E.shift();if(b){if(typeof b!="object")throw new TypeError(b+"must be non-object");for(var x in b)b.hasOwnProperty(x)&&(_[x]=b[x])}}return _},l.shrinkBuf=function(_,E){return _.length===E?_:_.subarray?_.subarray(0,E):(_.length=E,_)};var a={arraySet:function(_,E,b,x,u){if(E.subarray&&_.subarray)_.set(E.subarray(b,b+x),u);else for(var f=0;f<x;f++)_[u+f]=E[b+f]},flattenChunks:function(_){var E,b,x,u,f,S;for(E=x=0,b=_.length;E<b;E++)x+=_[E].length;for(S=new Uint8Array(x),E=u=0,b=_.length;E<b;E++)f=_[E],S.set(f,u),u+=f.length;return S}},s={arraySet:function(_,E,b,x,u){for(var f=0;f<x;f++)_[u+f]=E[b+f]},flattenChunks:function(_){return[].concat.apply([],_)}};l.setTyped=function(_){_?(l.Buf8=Uint8Array,l.Buf16=Uint16Array,l.Buf32=Int32Array,l.assign(l,a)):(l.Buf8=Array,l.Buf16=Array,l.Buf32=Array,l.assign(l,s))},l.setTyped(r)},{}],42:[function(t,i,l){var r=t("./common"),a=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{s=!1}for(var _=new r.Buf8(256),E=0;E<256;E++)_[E]=252<=E?6:248<=E?5:240<=E?4:224<=E?3:192<=E?2:1;function b(x,u){if(u<65537&&(x.subarray&&s||!x.subarray&&a))return String.fromCharCode.apply(null,r.shrinkBuf(x,u));for(var f="",S=0;S<u;S++)f+=String.fromCharCode(x[S]);return f}_[254]=_[254]=1,l.string2buf=function(x){var u,f,S,g,c,o=x.length,v=0;for(g=0;g<o;g++)(64512&(f=x.charCodeAt(g)))==55296&&g+1<o&&(64512&(S=x.charCodeAt(g+1)))==56320&&(f=65536+(f-55296<<10)+(S-56320),g++),v+=f<128?1:f<2048?2:f<65536?3:4;for(u=new r.Buf8(v),g=c=0;c<v;g++)(64512&(f=x.charCodeAt(g)))==55296&&g+1<o&&(64512&(S=x.charCodeAt(g+1)))==56320&&(f=65536+(f-55296<<10)+(S-56320),g++),f<128?u[c++]=f:(f<2048?u[c++]=192|f>>>6:(f<65536?u[c++]=224|f>>>12:(u[c++]=240|f>>>18,u[c++]=128|f>>>12&63),u[c++]=128|f>>>6&63),u[c++]=128|63&f);return u},l.buf2binstring=function(x){return b(x,x.length)},l.binstring2buf=function(x){for(var u=new r.Buf8(x.length),f=0,S=u.length;f<S;f++)u[f]=x.charCodeAt(f);return u},l.buf2string=function(x,u){var f,S,g,c,o=u||x.length,v=new Array(2*o);for(f=S=0;f<o;)if((g=x[f++])<128)v[S++]=g;else if(4<(c=_[g]))v[S++]=65533,f+=c-1;else{for(g&=c===2?31:c===3?15:7;1<c&&f<o;)g=g<<6|63&x[f++],c--;1<c?v[S++]=65533:g<65536?v[S++]=g:(g-=65536,v[S++]=55296|g>>10&1023,v[S++]=56320|1023&g)}return b(v,S)},l.utf8border=function(x,u){var f;for((u=u||x.length)>x.length&&(u=x.length),f=u-1;0<=f&&(192&x[f])==128;)f--;return f<0||f===0?u:f+_[x[f]]>u?f:u}},{"./common":41}],43:[function(t,i,l){i.exports=function(r,a,s,_){for(var E=65535&r|0,b=r>>>16&65535|0,x=0;s!==0;){for(s-=x=2e3<s?2e3:s;b=b+(E=E+a[_++]|0)|0,--x;);E%=65521,b%=65521}return E|b<<16|0}},{}],44:[function(t,i,l){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,i,l){var r=(function(){for(var a,s=[],_=0;_<256;_++){a=_;for(var E=0;E<8;E++)a=1&a?3988292384^a>>>1:a>>>1;s[_]=a}return s})();i.exports=function(a,s,_,E){var b=r,x=E+_;a^=-1;for(var u=E;u<x;u++)a=a>>>8^b[255&(a^s[u])];return-1^a}},{}],46:[function(t,i,l){var r,a=t("../utils/common"),s=t("./trees"),_=t("./adler32"),E=t("./crc32"),b=t("./messages"),x=0,u=4,f=0,S=-2,g=-1,c=4,o=2,v=8,T=9,R=286,P=30,D=19,L=2*R+1,M=15,A=3,X=258,B=X+A+1,C=42,F=113,d=1,N=2,H=3,O=4;function re(p,J){return p.msg=b[J],J}function Z(p){return(p<<1)-(4<p?9:0)}function ce(p){for(var J=p.length;0<=--J;)p[J]=0}function W(p){var J=p.state,K=J.pending;K>p.avail_out&&(K=p.avail_out),K!==0&&(a.arraySet(p.output,J.pending_buf,J.pending_out,K,p.next_out),p.next_out+=K,J.pending_out+=K,p.total_out+=K,p.avail_out-=K,J.pending-=K,J.pending===0&&(J.pending_out=0))}function G(p,J){s._tr_flush_block(p,0<=p.block_start?p.block_start:-1,p.strstart-p.block_start,J),p.block_start=p.strstart,W(p.strm)}function ge(p,J){p.pending_buf[p.pending++]=J}function pe(p,J){p.pending_buf[p.pending++]=J>>>8&255,p.pending_buf[p.pending++]=255&J}function fe(p,J){var K,I,h=p.max_chain_length,V=p.strstart,ne=p.prev_length,ae=p.nice_match,k=p.strstart>p.w_size-B?p.strstart-(p.w_size-B):0,w=p.window,m=p.w_mask,U=p.prev,q=p.strstart+X,ie=w[V+ne-1],j=w[V+ne];p.prev_length>=p.good_match&&(h>>=2),ae>p.lookahead&&(ae=p.lookahead);do if(w[(K=J)+ne]===j&&w[K+ne-1]===ie&&w[K]===w[V]&&w[++K]===w[V+1]){V+=2,K++;do;while(w[++V]===w[++K]&&w[++V]===w[++K]&&w[++V]===w[++K]&&w[++V]===w[++K]&&w[++V]===w[++K]&&w[++V]===w[++K]&&w[++V]===w[++K]&&w[++V]===w[++K]&&V<q);if(I=X-(q-V),V=q-X,ne<I){if(p.match_start=J,ae<=(ne=I))break;ie=w[V+ne-1],j=w[V+ne]}}while((J=U[J&m])>k&&--h!=0);return ne<=p.lookahead?ne:p.lookahead}function te(p){var J,K,I,h,V,ne,ae,k,w,m,U=p.w_size;do{if(h=p.window_size-p.lookahead-p.strstart,p.strstart>=U+(U-B)){for(a.arraySet(p.window,p.window,U,U,0),p.match_start-=U,p.strstart-=U,p.block_start-=U,J=K=p.hash_size;I=p.head[--J],p.head[J]=U<=I?I-U:0,--K;);for(J=K=U;I=p.prev[--J],p.prev[J]=U<=I?I-U:0,--K;);h+=U}if(p.strm.avail_in===0)break;if(ne=p.strm,ae=p.window,k=p.strstart+p.lookahead,w=h,m=void 0,m=ne.avail_in,w<m&&(m=w),K=m===0?0:(ne.avail_in-=m,a.arraySet(ae,ne.input,ne.next_in,m,k),ne.state.wrap===1?ne.adler=_(ne.adler,ae,m,k):ne.state.wrap===2&&(ne.adler=E(ne.adler,ae,m,k)),ne.next_in+=m,ne.total_in+=m,m),p.lookahead+=K,p.lookahead+p.insert>=A)for(V=p.strstart-p.insert,p.ins_h=p.window[V],p.ins_h=(p.ins_h<<p.hash_shift^p.window[V+1])&p.hash_mask;p.insert&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[V+A-1])&p.hash_mask,p.prev[V&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=V,V++,p.insert--,!(p.lookahead+p.insert<A)););}while(p.lookahead<B&&p.strm.avail_in!==0)}function ue(p,J){for(var K,I;;){if(p.lookahead<B){if(te(p),p.lookahead<B&&J===x)return d;if(p.lookahead===0)break}if(K=0,p.lookahead>=A&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+A-1])&p.hash_mask,K=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart),K!==0&&p.strstart-K<=p.w_size-B&&(p.match_length=fe(p,K)),p.match_length>=A)if(I=s._tr_tally(p,p.strstart-p.match_start,p.match_length-A),p.lookahead-=p.match_length,p.match_length<=p.max_lazy_match&&p.lookahead>=A){for(p.match_length--;p.strstart++,p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+A-1])&p.hash_mask,K=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart,--p.match_length!=0;);p.strstart++}else p.strstart+=p.match_length,p.match_length=0,p.ins_h=p.window[p.strstart],p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+1])&p.hash_mask;else I=s._tr_tally(p,0,p.window[p.strstart]),p.lookahead--,p.strstart++;if(I&&(G(p,!1),p.strm.avail_out===0))return d}return p.insert=p.strstart<A-1?p.strstart:A-1,J===u?(G(p,!0),p.strm.avail_out===0?H:O):p.last_lit&&(G(p,!1),p.strm.avail_out===0)?d:N}function se(p,J){for(var K,I,h;;){if(p.lookahead<B){if(te(p),p.lookahead<B&&J===x)return d;if(p.lookahead===0)break}if(K=0,p.lookahead>=A&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+A-1])&p.hash_mask,K=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart),p.prev_length=p.match_length,p.prev_match=p.match_start,p.match_length=A-1,K!==0&&p.prev_length<p.max_lazy_match&&p.strstart-K<=p.w_size-B&&(p.match_length=fe(p,K),p.match_length<=5&&(p.strategy===1||p.match_length===A&&4096<p.strstart-p.match_start)&&(p.match_length=A-1)),p.prev_length>=A&&p.match_length<=p.prev_length){for(h=p.strstart+p.lookahead-A,I=s._tr_tally(p,p.strstart-1-p.prev_match,p.prev_length-A),p.lookahead-=p.prev_length-1,p.prev_length-=2;++p.strstart<=h&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+A-1])&p.hash_mask,K=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart),--p.prev_length!=0;);if(p.match_available=0,p.match_length=A-1,p.strstart++,I&&(G(p,!1),p.strm.avail_out===0))return d}else if(p.match_available){if((I=s._tr_tally(p,0,p.window[p.strstart-1]))&&G(p,!1),p.strstart++,p.lookahead--,p.strm.avail_out===0)return d}else p.match_available=1,p.strstart++,p.lookahead--}return p.match_available&&(I=s._tr_tally(p,0,p.window[p.strstart-1]),p.match_available=0),p.insert=p.strstart<A-1?p.strstart:A-1,J===u?(G(p,!0),p.strm.avail_out===0?H:O):p.last_lit&&(G(p,!1),p.strm.avail_out===0)?d:N}function Me(p,J,K,I,h){this.good_length=p,this.max_lazy=J,this.nice_length=K,this.max_chain=I,this.func=h}function Re(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*L),this.dyn_dtree=new a.Buf16(2*(2*P+1)),this.bl_tree=new a.Buf16(2*(2*D+1)),ce(this.dyn_ltree),ce(this.dyn_dtree),ce(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(M+1),this.heap=new a.Buf16(2*R+1),ce(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*R+1),ce(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ye(p){var J;return p&&p.state?(p.total_in=p.total_out=0,p.data_type=o,(J=p.state).pending=0,J.pending_out=0,J.wrap<0&&(J.wrap=-J.wrap),J.status=J.wrap?C:F,p.adler=J.wrap===2?0:1,J.last_flush=x,s._tr_init(J),f):re(p,S)}function qe(p){var J=ye(p);return J===f&&(function(K){K.window_size=2*K.w_size,ce(K.head),K.max_lazy_match=r[K.level].max_lazy,K.good_match=r[K.level].good_length,K.nice_match=r[K.level].nice_length,K.max_chain_length=r[K.level].max_chain,K.strstart=0,K.block_start=0,K.lookahead=0,K.insert=0,K.match_length=K.prev_length=A-1,K.match_available=0,K.ins_h=0})(p.state),J}function ke(p,J,K,I,h,V){if(!p)return S;var ne=1;if(J===g&&(J=6),I<0?(ne=0,I=-I):15<I&&(ne=2,I-=16),h<1||T<h||K!==v||I<8||15<I||J<0||9<J||V<0||c<V)return re(p,S);I===8&&(I=9);var ae=new Re;return(p.state=ae).strm=p,ae.wrap=ne,ae.gzhead=null,ae.w_bits=I,ae.w_size=1<<ae.w_bits,ae.w_mask=ae.w_size-1,ae.hash_bits=h+7,ae.hash_size=1<<ae.hash_bits,ae.hash_mask=ae.hash_size-1,ae.hash_shift=~~((ae.hash_bits+A-1)/A),ae.window=new a.Buf8(2*ae.w_size),ae.head=new a.Buf16(ae.hash_size),ae.prev=new a.Buf16(ae.w_size),ae.lit_bufsize=1<<h+6,ae.pending_buf_size=4*ae.lit_bufsize,ae.pending_buf=new a.Buf8(ae.pending_buf_size),ae.d_buf=1*ae.lit_bufsize,ae.l_buf=3*ae.lit_bufsize,ae.level=J,ae.strategy=V,ae.method=K,qe(p)}r=[new Me(0,0,0,0,function(p,J){var K=65535;for(K>p.pending_buf_size-5&&(K=p.pending_buf_size-5);;){if(p.lookahead<=1){if(te(p),p.lookahead===0&&J===x)return d;if(p.lookahead===0)break}p.strstart+=p.lookahead,p.lookahead=0;var I=p.block_start+K;if((p.strstart===0||p.strstart>=I)&&(p.lookahead=p.strstart-I,p.strstart=I,G(p,!1),p.strm.avail_out===0)||p.strstart-p.block_start>=p.w_size-B&&(G(p,!1),p.strm.avail_out===0))return d}return p.insert=0,J===u?(G(p,!0),p.strm.avail_out===0?H:O):(p.strstart>p.block_start&&(G(p,!1),p.strm.avail_out),d)}),new Me(4,4,8,4,ue),new Me(4,5,16,8,ue),new Me(4,6,32,32,ue),new Me(4,4,16,16,se),new Me(8,16,32,32,se),new Me(8,16,128,128,se),new Me(8,32,128,256,se),new Me(32,128,258,1024,se),new Me(32,258,258,4096,se)],l.deflateInit=function(p,J){return ke(p,J,v,15,8,0)},l.deflateInit2=ke,l.deflateReset=qe,l.deflateResetKeep=ye,l.deflateSetHeader=function(p,J){return p&&p.state?p.state.wrap!==2?S:(p.state.gzhead=J,f):S},l.deflate=function(p,J){var K,I,h,V;if(!p||!p.state||5<J||J<0)return p?re(p,S):S;if(I=p.state,!p.output||!p.input&&p.avail_in!==0||I.status===666&&J!==u)return re(p,p.avail_out===0?-5:S);if(I.strm=p,K=I.last_flush,I.last_flush=J,I.status===C)if(I.wrap===2)p.adler=0,ge(I,31),ge(I,139),ge(I,8),I.gzhead?(ge(I,(I.gzhead.text?1:0)+(I.gzhead.hcrc?2:0)+(I.gzhead.extra?4:0)+(I.gzhead.name?8:0)+(I.gzhead.comment?16:0)),ge(I,255&I.gzhead.time),ge(I,I.gzhead.time>>8&255),ge(I,I.gzhead.time>>16&255),ge(I,I.gzhead.time>>24&255),ge(I,I.level===9?2:2<=I.strategy||I.level<2?4:0),ge(I,255&I.gzhead.os),I.gzhead.extra&&I.gzhead.extra.length&&(ge(I,255&I.gzhead.extra.length),ge(I,I.gzhead.extra.length>>8&255)),I.gzhead.hcrc&&(p.adler=E(p.adler,I.pending_buf,I.pending,0)),I.gzindex=0,I.status=69):(ge(I,0),ge(I,0),ge(I,0),ge(I,0),ge(I,0),ge(I,I.level===9?2:2<=I.strategy||I.level<2?4:0),ge(I,3),I.status=F);else{var ne=v+(I.w_bits-8<<4)<<8;ne|=(2<=I.strategy||I.level<2?0:I.level<6?1:I.level===6?2:3)<<6,I.strstart!==0&&(ne|=32),ne+=31-ne%31,I.status=F,pe(I,ne),I.strstart!==0&&(pe(I,p.adler>>>16),pe(I,65535&p.adler)),p.adler=1}if(I.status===69)if(I.gzhead.extra){for(h=I.pending;I.gzindex<(65535&I.gzhead.extra.length)&&(I.pending!==I.pending_buf_size||(I.gzhead.hcrc&&I.pending>h&&(p.adler=E(p.adler,I.pending_buf,I.pending-h,h)),W(p),h=I.pending,I.pending!==I.pending_buf_size));)ge(I,255&I.gzhead.extra[I.gzindex]),I.gzindex++;I.gzhead.hcrc&&I.pending>h&&(p.adler=E(p.adler,I.pending_buf,I.pending-h,h)),I.gzindex===I.gzhead.extra.length&&(I.gzindex=0,I.status=73)}else I.status=73;if(I.status===73)if(I.gzhead.name){h=I.pending;do{if(I.pending===I.pending_buf_size&&(I.gzhead.hcrc&&I.pending>h&&(p.adler=E(p.adler,I.pending_buf,I.pending-h,h)),W(p),h=I.pending,I.pending===I.pending_buf_size)){V=1;break}V=I.gzindex<I.gzhead.name.length?255&I.gzhead.name.charCodeAt(I.gzindex++):0,ge(I,V)}while(V!==0);I.gzhead.hcrc&&I.pending>h&&(p.adler=E(p.adler,I.pending_buf,I.pending-h,h)),V===0&&(I.gzindex=0,I.status=91)}else I.status=91;if(I.status===91)if(I.gzhead.comment){h=I.pending;do{if(I.pending===I.pending_buf_size&&(I.gzhead.hcrc&&I.pending>h&&(p.adler=E(p.adler,I.pending_buf,I.pending-h,h)),W(p),h=I.pending,I.pending===I.pending_buf_size)){V=1;break}V=I.gzindex<I.gzhead.comment.length?255&I.gzhead.comment.charCodeAt(I.gzindex++):0,ge(I,V)}while(V!==0);I.gzhead.hcrc&&I.pending>h&&(p.adler=E(p.adler,I.pending_buf,I.pending-h,h)),V===0&&(I.status=103)}else I.status=103;if(I.status===103&&(I.gzhead.hcrc?(I.pending+2>I.pending_buf_size&&W(p),I.pending+2<=I.pending_buf_size&&(ge(I,255&p.adler),ge(I,p.adler>>8&255),p.adler=0,I.status=F)):I.status=F),I.pending!==0){if(W(p),p.avail_out===0)return I.last_flush=-1,f}else if(p.avail_in===0&&Z(J)<=Z(K)&&J!==u)return re(p,-5);if(I.status===666&&p.avail_in!==0)return re(p,-5);if(p.avail_in!==0||I.lookahead!==0||J!==x&&I.status!==666){var ae=I.strategy===2?(function(k,w){for(var m;;){if(k.lookahead===0&&(te(k),k.lookahead===0)){if(w===x)return d;break}if(k.match_length=0,m=s._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++,m&&(G(k,!1),k.strm.avail_out===0))return d}return k.insert=0,w===u?(G(k,!0),k.strm.avail_out===0?H:O):k.last_lit&&(G(k,!1),k.strm.avail_out===0)?d:N})(I,J):I.strategy===3?(function(k,w){for(var m,U,q,ie,j=k.window;;){if(k.lookahead<=X){if(te(k),k.lookahead<=X&&w===x)return d;if(k.lookahead===0)break}if(k.match_length=0,k.lookahead>=A&&0<k.strstart&&(U=j[q=k.strstart-1])===j[++q]&&U===j[++q]&&U===j[++q]){ie=k.strstart+X;do;while(U===j[++q]&&U===j[++q]&&U===j[++q]&&U===j[++q]&&U===j[++q]&&U===j[++q]&&U===j[++q]&&U===j[++q]&&q<ie);k.match_length=X-(ie-q),k.match_length>k.lookahead&&(k.match_length=k.lookahead)}if(k.match_length>=A?(m=s._tr_tally(k,1,k.match_length-A),k.lookahead-=k.match_length,k.strstart+=k.match_length,k.match_length=0):(m=s._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++),m&&(G(k,!1),k.strm.avail_out===0))return d}return k.insert=0,w===u?(G(k,!0),k.strm.avail_out===0?H:O):k.last_lit&&(G(k,!1),k.strm.avail_out===0)?d:N})(I,J):r[I.level].func(I,J);if(ae!==H&&ae!==O||(I.status=666),ae===d||ae===H)return p.avail_out===0&&(I.last_flush=-1),f;if(ae===N&&(J===1?s._tr_align(I):J!==5&&(s._tr_stored_block(I,0,0,!1),J===3&&(ce(I.head),I.lookahead===0&&(I.strstart=0,I.block_start=0,I.insert=0))),W(p),p.avail_out===0))return I.last_flush=-1,f}return J!==u?f:I.wrap<=0?1:(I.wrap===2?(ge(I,255&p.adler),ge(I,p.adler>>8&255),ge(I,p.adler>>16&255),ge(I,p.adler>>24&255),ge(I,255&p.total_in),ge(I,p.total_in>>8&255),ge(I,p.total_in>>16&255),ge(I,p.total_in>>24&255)):(pe(I,p.adler>>>16),pe(I,65535&p.adler)),W(p),0<I.wrap&&(I.wrap=-I.wrap),I.pending!==0?f:1)},l.deflateEnd=function(p){var J;return p&&p.state?(J=p.state.status)!==C&&J!==69&&J!==73&&J!==91&&J!==103&&J!==F&&J!==666?re(p,S):(p.state=null,J===F?re(p,-3):f):S},l.deflateSetDictionary=function(p,J){var K,I,h,V,ne,ae,k,w,m=J.length;if(!p||!p.state||(V=(K=p.state).wrap)===2||V===1&&K.status!==C||K.lookahead)return S;for(V===1&&(p.adler=_(p.adler,J,m,0)),K.wrap=0,m>=K.w_size&&(V===0&&(ce(K.head),K.strstart=0,K.block_start=0,K.insert=0),w=new a.Buf8(K.w_size),a.arraySet(w,J,m-K.w_size,K.w_size,0),J=w,m=K.w_size),ne=p.avail_in,ae=p.next_in,k=p.input,p.avail_in=m,p.next_in=0,p.input=J,te(K);K.lookahead>=A;){for(I=K.strstart,h=K.lookahead-(A-1);K.ins_h=(K.ins_h<<K.hash_shift^K.window[I+A-1])&K.hash_mask,K.prev[I&K.w_mask]=K.head[K.ins_h],K.head[K.ins_h]=I,I++,--h;);K.strstart=I,K.lookahead=A-1,te(K)}return K.strstart+=K.lookahead,K.block_start=K.strstart,K.insert=K.lookahead,K.lookahead=0,K.match_length=K.prev_length=A-1,K.match_available=0,p.next_in=ae,p.input=k,p.avail_in=ne,K.wrap=V,f},l.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,i,l){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,i,l){i.exports=function(r,a){var s,_,E,b,x,u,f,S,g,c,o,v,T,R,P,D,L,M,A,X,B,C,F,d,N;s=r.state,_=r.next_in,d=r.input,E=_+(r.avail_in-5),b=r.next_out,N=r.output,x=b-(a-r.avail_out),u=b+(r.avail_out-257),f=s.dmax,S=s.wsize,g=s.whave,c=s.wnext,o=s.window,v=s.hold,T=s.bits,R=s.lencode,P=s.distcode,D=(1<<s.lenbits)-1,L=(1<<s.distbits)-1;e:do{T<15&&(v+=d[_++]<<T,T+=8,v+=d[_++]<<T,T+=8),M=R[v&D];t:for(;;){if(v>>>=A=M>>>24,T-=A,(A=M>>>16&255)===0)N[b++]=65535&M;else{if(!(16&A)){if((64&A)==0){M=R[(65535&M)+(v&(1<<A)-1)];continue t}if(32&A){s.mode=12;break e}r.msg="invalid literal/length code",s.mode=30;break e}X=65535&M,(A&=15)&&(T<A&&(v+=d[_++]<<T,T+=8),X+=v&(1<<A)-1,v>>>=A,T-=A),T<15&&(v+=d[_++]<<T,T+=8,v+=d[_++]<<T,T+=8),M=P[v&L];n:for(;;){if(v>>>=A=M>>>24,T-=A,!(16&(A=M>>>16&255))){if((64&A)==0){M=P[(65535&M)+(v&(1<<A)-1)];continue n}r.msg="invalid distance code",s.mode=30;break e}if(B=65535&M,T<(A&=15)&&(v+=d[_++]<<T,(T+=8)<A&&(v+=d[_++]<<T,T+=8)),f<(B+=v&(1<<A)-1)){r.msg="invalid distance too far back",s.mode=30;break e}if(v>>>=A,T-=A,(A=b-x)<B){if(g<(A=B-A)&&s.sane){r.msg="invalid distance too far back",s.mode=30;break e}if(F=o,(C=0)===c){if(C+=S-A,A<X){for(X-=A;N[b++]=o[C++],--A;);C=b-B,F=N}}else if(c<A){if(C+=S+c-A,(A-=c)<X){for(X-=A;N[b++]=o[C++],--A;);if(C=0,c<X){for(X-=A=c;N[b++]=o[C++],--A;);C=b-B,F=N}}}else if(C+=c-A,A<X){for(X-=A;N[b++]=o[C++],--A;);C=b-B,F=N}for(;2<X;)N[b++]=F[C++],N[b++]=F[C++],N[b++]=F[C++],X-=3;X&&(N[b++]=F[C++],1<X&&(N[b++]=F[C++]))}else{for(C=b-B;N[b++]=N[C++],N[b++]=N[C++],N[b++]=N[C++],2<(X-=3););X&&(N[b++]=N[C++],1<X&&(N[b++]=N[C++]))}break}}break}}while(_<E&&b<u);_-=X=T>>3,v&=(1<<(T-=X<<3))-1,r.next_in=_,r.next_out=b,r.avail_in=_<E?E-_+5:5-(_-E),r.avail_out=b<u?u-b+257:257-(b-u),s.hold=v,s.bits=T}},{}],49:[function(t,i,l){var r=t("../utils/common"),a=t("./adler32"),s=t("./crc32"),_=t("./inffast"),E=t("./inftrees"),b=1,x=2,u=0,f=-2,S=1,g=852,c=592;function o(C){return(C>>>24&255)+(C>>>8&65280)+((65280&C)<<8)+((255&C)<<24)}function v(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function T(C){var F;return C&&C.state?(F=C.state,C.total_in=C.total_out=F.total=0,C.msg="",F.wrap&&(C.adler=1&F.wrap),F.mode=S,F.last=0,F.havedict=0,F.dmax=32768,F.head=null,F.hold=0,F.bits=0,F.lencode=F.lendyn=new r.Buf32(g),F.distcode=F.distdyn=new r.Buf32(c),F.sane=1,F.back=-1,u):f}function R(C){var F;return C&&C.state?((F=C.state).wsize=0,F.whave=0,F.wnext=0,T(C)):f}function P(C,F){var d,N;return C&&C.state?(N=C.state,F<0?(d=0,F=-F):(d=1+(F>>4),F<48&&(F&=15)),F&&(F<8||15<F)?f:(N.window!==null&&N.wbits!==F&&(N.window=null),N.wrap=d,N.wbits=F,R(C))):f}function D(C,F){var d,N;return C?(N=new v,(C.state=N).window=null,(d=P(C,F))!==u&&(C.state=null),d):f}var L,M,A=!0;function X(C){if(A){var F;for(L=new r.Buf32(512),M=new r.Buf32(32),F=0;F<144;)C.lens[F++]=8;for(;F<256;)C.lens[F++]=9;for(;F<280;)C.lens[F++]=7;for(;F<288;)C.lens[F++]=8;for(E(b,C.lens,0,288,L,0,C.work,{bits:9}),F=0;F<32;)C.lens[F++]=5;E(x,C.lens,0,32,M,0,C.work,{bits:5}),A=!1}C.lencode=L,C.lenbits=9,C.distcode=M,C.distbits=5}function B(C,F,d,N){var H,O=C.state;return O.window===null&&(O.wsize=1<<O.wbits,O.wnext=0,O.whave=0,O.window=new r.Buf8(O.wsize)),N>=O.wsize?(r.arraySet(O.window,F,d-O.wsize,O.wsize,0),O.wnext=0,O.whave=O.wsize):(N<(H=O.wsize-O.wnext)&&(H=N),r.arraySet(O.window,F,d-N,H,O.wnext),(N-=H)?(r.arraySet(O.window,F,d-N,N,0),O.wnext=N,O.whave=O.wsize):(O.wnext+=H,O.wnext===O.wsize&&(O.wnext=0),O.whave<O.wsize&&(O.whave+=H))),0}l.inflateReset=R,l.inflateReset2=P,l.inflateResetKeep=T,l.inflateInit=function(C){return D(C,15)},l.inflateInit2=D,l.inflate=function(C,F){var d,N,H,O,re,Z,ce,W,G,ge,pe,fe,te,ue,se,Me,Re,ye,qe,ke,p,J,K,I,h=0,V=new r.Buf8(4),ne=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!C||!C.state||!C.output||!C.input&&C.avail_in!==0)return f;(d=C.state).mode===12&&(d.mode=13),re=C.next_out,H=C.output,ce=C.avail_out,O=C.next_in,N=C.input,Z=C.avail_in,W=d.hold,G=d.bits,ge=Z,pe=ce,J=u;e:for(;;)switch(d.mode){case S:if(d.wrap===0){d.mode=13;break}for(;G<16;){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}if(2&d.wrap&&W===35615){V[d.check=0]=255&W,V[1]=W>>>8&255,d.check=s(d.check,V,2,0),G=W=0,d.mode=2;break}if(d.flags=0,d.head&&(d.head.done=!1),!(1&d.wrap)||(((255&W)<<8)+(W>>8))%31){C.msg="incorrect header check",d.mode=30;break}if((15&W)!=8){C.msg="unknown compression method",d.mode=30;break}if(G-=4,p=8+(15&(W>>>=4)),d.wbits===0)d.wbits=p;else if(p>d.wbits){C.msg="invalid window size",d.mode=30;break}d.dmax=1<<p,C.adler=d.check=1,d.mode=512&W?10:12,G=W=0;break;case 2:for(;G<16;){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}if(d.flags=W,(255&d.flags)!=8){C.msg="unknown compression method",d.mode=30;break}if(57344&d.flags){C.msg="unknown header flags set",d.mode=30;break}d.head&&(d.head.text=W>>8&1),512&d.flags&&(V[0]=255&W,V[1]=W>>>8&255,d.check=s(d.check,V,2,0)),G=W=0,d.mode=3;case 3:for(;G<32;){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}d.head&&(d.head.time=W),512&d.flags&&(V[0]=255&W,V[1]=W>>>8&255,V[2]=W>>>16&255,V[3]=W>>>24&255,d.check=s(d.check,V,4,0)),G=W=0,d.mode=4;case 4:for(;G<16;){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}d.head&&(d.head.xflags=255&W,d.head.os=W>>8),512&d.flags&&(V[0]=255&W,V[1]=W>>>8&255,d.check=s(d.check,V,2,0)),G=W=0,d.mode=5;case 5:if(1024&d.flags){for(;G<16;){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}d.length=W,d.head&&(d.head.extra_len=W),512&d.flags&&(V[0]=255&W,V[1]=W>>>8&255,d.check=s(d.check,V,2,0)),G=W=0}else d.head&&(d.head.extra=null);d.mode=6;case 6:if(1024&d.flags&&(Z<(fe=d.length)&&(fe=Z),fe&&(d.head&&(p=d.head.extra_len-d.length,d.head.extra||(d.head.extra=new Array(d.head.extra_len)),r.arraySet(d.head.extra,N,O,fe,p)),512&d.flags&&(d.check=s(d.check,N,fe,O)),Z-=fe,O+=fe,d.length-=fe),d.length))break e;d.length=0,d.mode=7;case 7:if(2048&d.flags){if(Z===0)break e;for(fe=0;p=N[O+fe++],d.head&&p&&d.length<65536&&(d.head.name+=String.fromCharCode(p)),p&&fe<Z;);if(512&d.flags&&(d.check=s(d.check,N,fe,O)),Z-=fe,O+=fe,p)break e}else d.head&&(d.head.name=null);d.length=0,d.mode=8;case 8:if(4096&d.flags){if(Z===0)break e;for(fe=0;p=N[O+fe++],d.head&&p&&d.length<65536&&(d.head.comment+=String.fromCharCode(p)),p&&fe<Z;);if(512&d.flags&&(d.check=s(d.check,N,fe,O)),Z-=fe,O+=fe,p)break e}else d.head&&(d.head.comment=null);d.mode=9;case 9:if(512&d.flags){for(;G<16;){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}if(W!==(65535&d.check)){C.msg="header crc mismatch",d.mode=30;break}G=W=0}d.head&&(d.head.hcrc=d.flags>>9&1,d.head.done=!0),C.adler=d.check=0,d.mode=12;break;case 10:for(;G<32;){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}C.adler=d.check=o(W),G=W=0,d.mode=11;case 11:if(d.havedict===0)return C.next_out=re,C.avail_out=ce,C.next_in=O,C.avail_in=Z,d.hold=W,d.bits=G,2;C.adler=d.check=1,d.mode=12;case 12:if(F===5||F===6)break e;case 13:if(d.last){W>>>=7&G,G-=7&G,d.mode=27;break}for(;G<3;){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}switch(d.last=1&W,G-=1,3&(W>>>=1)){case 0:d.mode=14;break;case 1:if(X(d),d.mode=20,F!==6)break;W>>>=2,G-=2;break e;case 2:d.mode=17;break;case 3:C.msg="invalid block type",d.mode=30}W>>>=2,G-=2;break;case 14:for(W>>>=7&G,G-=7&G;G<32;){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}if((65535&W)!=(W>>>16^65535)){C.msg="invalid stored block lengths",d.mode=30;break}if(d.length=65535&W,G=W=0,d.mode=15,F===6)break e;case 15:d.mode=16;case 16:if(fe=d.length){if(Z<fe&&(fe=Z),ce<fe&&(fe=ce),fe===0)break e;r.arraySet(H,N,O,fe,re),Z-=fe,O+=fe,ce-=fe,re+=fe,d.length-=fe;break}d.mode=12;break;case 17:for(;G<14;){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}if(d.nlen=257+(31&W),W>>>=5,G-=5,d.ndist=1+(31&W),W>>>=5,G-=5,d.ncode=4+(15&W),W>>>=4,G-=4,286<d.nlen||30<d.ndist){C.msg="too many length or distance symbols",d.mode=30;break}d.have=0,d.mode=18;case 18:for(;d.have<d.ncode;){for(;G<3;){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}d.lens[ne[d.have++]]=7&W,W>>>=3,G-=3}for(;d.have<19;)d.lens[ne[d.have++]]=0;if(d.lencode=d.lendyn,d.lenbits=7,K={bits:d.lenbits},J=E(0,d.lens,0,19,d.lencode,0,d.work,K),d.lenbits=K.bits,J){C.msg="invalid code lengths set",d.mode=30;break}d.have=0,d.mode=19;case 19:for(;d.have<d.nlen+d.ndist;){for(;Me=(h=d.lencode[W&(1<<d.lenbits)-1])>>>16&255,Re=65535&h,!((se=h>>>24)<=G);){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}if(Re<16)W>>>=se,G-=se,d.lens[d.have++]=Re;else{if(Re===16){for(I=se+2;G<I;){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}if(W>>>=se,G-=se,d.have===0){C.msg="invalid bit length repeat",d.mode=30;break}p=d.lens[d.have-1],fe=3+(3&W),W>>>=2,G-=2}else if(Re===17){for(I=se+3;G<I;){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}G-=se,p=0,fe=3+(7&(W>>>=se)),W>>>=3,G-=3}else{for(I=se+7;G<I;){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}G-=se,p=0,fe=11+(127&(W>>>=se)),W>>>=7,G-=7}if(d.have+fe>d.nlen+d.ndist){C.msg="invalid bit length repeat",d.mode=30;break}for(;fe--;)d.lens[d.have++]=p}}if(d.mode===30)break;if(d.lens[256]===0){C.msg="invalid code -- missing end-of-block",d.mode=30;break}if(d.lenbits=9,K={bits:d.lenbits},J=E(b,d.lens,0,d.nlen,d.lencode,0,d.work,K),d.lenbits=K.bits,J){C.msg="invalid literal/lengths set",d.mode=30;break}if(d.distbits=6,d.distcode=d.distdyn,K={bits:d.distbits},J=E(x,d.lens,d.nlen,d.ndist,d.distcode,0,d.work,K),d.distbits=K.bits,J){C.msg="invalid distances set",d.mode=30;break}if(d.mode=20,F===6)break e;case 20:d.mode=21;case 21:if(6<=Z&&258<=ce){C.next_out=re,C.avail_out=ce,C.next_in=O,C.avail_in=Z,d.hold=W,d.bits=G,_(C,pe),re=C.next_out,H=C.output,ce=C.avail_out,O=C.next_in,N=C.input,Z=C.avail_in,W=d.hold,G=d.bits,d.mode===12&&(d.back=-1);break}for(d.back=0;Me=(h=d.lencode[W&(1<<d.lenbits)-1])>>>16&255,Re=65535&h,!((se=h>>>24)<=G);){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}if(Me&&(240&Me)==0){for(ye=se,qe=Me,ke=Re;Me=(h=d.lencode[ke+((W&(1<<ye+qe)-1)>>ye)])>>>16&255,Re=65535&h,!(ye+(se=h>>>24)<=G);){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}W>>>=ye,G-=ye,d.back+=ye}if(W>>>=se,G-=se,d.back+=se,d.length=Re,Me===0){d.mode=26;break}if(32&Me){d.back=-1,d.mode=12;break}if(64&Me){C.msg="invalid literal/length code",d.mode=30;break}d.extra=15&Me,d.mode=22;case 22:if(d.extra){for(I=d.extra;G<I;){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}d.length+=W&(1<<d.extra)-1,W>>>=d.extra,G-=d.extra,d.back+=d.extra}d.was=d.length,d.mode=23;case 23:for(;Me=(h=d.distcode[W&(1<<d.distbits)-1])>>>16&255,Re=65535&h,!((se=h>>>24)<=G);){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}if((240&Me)==0){for(ye=se,qe=Me,ke=Re;Me=(h=d.distcode[ke+((W&(1<<ye+qe)-1)>>ye)])>>>16&255,Re=65535&h,!(ye+(se=h>>>24)<=G);){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}W>>>=ye,G-=ye,d.back+=ye}if(W>>>=se,G-=se,d.back+=se,64&Me){C.msg="invalid distance code",d.mode=30;break}d.offset=Re,d.extra=15&Me,d.mode=24;case 24:if(d.extra){for(I=d.extra;G<I;){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}d.offset+=W&(1<<d.extra)-1,W>>>=d.extra,G-=d.extra,d.back+=d.extra}if(d.offset>d.dmax){C.msg="invalid distance too far back",d.mode=30;break}d.mode=25;case 25:if(ce===0)break e;if(fe=pe-ce,d.offset>fe){if((fe=d.offset-fe)>d.whave&&d.sane){C.msg="invalid distance too far back",d.mode=30;break}te=fe>d.wnext?(fe-=d.wnext,d.wsize-fe):d.wnext-fe,fe>d.length&&(fe=d.length),ue=d.window}else ue=H,te=re-d.offset,fe=d.length;for(ce<fe&&(fe=ce),ce-=fe,d.length-=fe;H[re++]=ue[te++],--fe;);d.length===0&&(d.mode=21);break;case 26:if(ce===0)break e;H[re++]=d.length,ce--,d.mode=21;break;case 27:if(d.wrap){for(;G<32;){if(Z===0)break e;Z--,W|=N[O++]<<G,G+=8}if(pe-=ce,C.total_out+=pe,d.total+=pe,pe&&(C.adler=d.check=d.flags?s(d.check,H,pe,re-pe):a(d.check,H,pe,re-pe)),pe=ce,(d.flags?W:o(W))!==d.check){C.msg="incorrect data check",d.mode=30;break}G=W=0}d.mode=28;case 28:if(d.wrap&&d.flags){for(;G<32;){if(Z===0)break e;Z--,W+=N[O++]<<G,G+=8}if(W!==(4294967295&d.total)){C.msg="incorrect length check",d.mode=30;break}G=W=0}d.mode=29;case 29:J=1;break e;case 30:J=-3;break e;case 31:return-4;default:return f}return C.next_out=re,C.avail_out=ce,C.next_in=O,C.avail_in=Z,d.hold=W,d.bits=G,(d.wsize||pe!==C.avail_out&&d.mode<30&&(d.mode<27||F!==4))&&B(C,C.output,C.next_out,pe-C.avail_out)?(d.mode=31,-4):(ge-=C.avail_in,pe-=C.avail_out,C.total_in+=ge,C.total_out+=pe,d.total+=pe,d.wrap&&pe&&(C.adler=d.check=d.flags?s(d.check,H,pe,C.next_out-pe):a(d.check,H,pe,C.next_out-pe)),C.data_type=d.bits+(d.last?64:0)+(d.mode===12?128:0)+(d.mode===20||d.mode===15?256:0),(ge==0&&pe===0||F===4)&&J===u&&(J=-5),J)},l.inflateEnd=function(C){if(!C||!C.state)return f;var F=C.state;return F.window&&(F.window=null),C.state=null,u},l.inflateGetHeader=function(C,F){var d;return C&&C.state?(2&(d=C.state).wrap)==0?f:((d.head=F).done=!1,u):f},l.inflateSetDictionary=function(C,F){var d,N=F.length;return C&&C.state?(d=C.state).wrap!==0&&d.mode!==11?f:d.mode===11&&a(1,F,N,0)!==d.check?-3:B(C,F,N,N)?(d.mode=31,-4):(d.havedict=1,u):f},l.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,i,l){var r=t("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],_=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],E=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(b,x,u,f,S,g,c,o){var v,T,R,P,D,L,M,A,X,B=o.bits,C=0,F=0,d=0,N=0,H=0,O=0,re=0,Z=0,ce=0,W=0,G=null,ge=0,pe=new r.Buf16(16),fe=new r.Buf16(16),te=null,ue=0;for(C=0;C<=15;C++)pe[C]=0;for(F=0;F<f;F++)pe[x[u+F]]++;for(H=B,N=15;1<=N&&pe[N]===0;N--);if(N<H&&(H=N),N===0)return S[g++]=20971520,S[g++]=20971520,o.bits=1,0;for(d=1;d<N&&pe[d]===0;d++);for(H<d&&(H=d),C=Z=1;C<=15;C++)if(Z<<=1,(Z-=pe[C])<0)return-1;if(0<Z&&(b===0||N!==1))return-1;for(fe[1]=0,C=1;C<15;C++)fe[C+1]=fe[C]+pe[C];for(F=0;F<f;F++)x[u+F]!==0&&(c[fe[x[u+F]]++]=F);if(L=b===0?(G=te=c,19):b===1?(G=a,ge-=257,te=s,ue-=257,256):(G=_,te=E,-1),C=d,D=g,re=F=W=0,R=-1,P=(ce=1<<(O=H))-1,b===1&&852<ce||b===2&&592<ce)return 1;for(;;){for(M=C-re,X=c[F]<L?(A=0,c[F]):c[F]>L?(A=te[ue+c[F]],G[ge+c[F]]):(A=96,0),v=1<<C-re,d=T=1<<O;S[D+(W>>re)+(T-=v)]=M<<24|A<<16|X|0,T!==0;);for(v=1<<C-1;W&v;)v>>=1;if(v!==0?(W&=v-1,W+=v):W=0,F++,--pe[C]==0){if(C===N)break;C=x[u+c[F]]}if(H<C&&(W&P)!==R){for(re===0&&(re=H),D+=d,Z=1<<(O=C-re);O+re<N&&!((Z-=pe[O+re])<=0);)O++,Z<<=1;if(ce+=1<<O,b===1&&852<ce||b===2&&592<ce)return 1;S[R=W&P]=H<<24|O<<16|D-g|0}}return W!==0&&(S[D+W]=C-re<<24|64<<16|0),o.bits=H,0}},{"../utils/common":41}],51:[function(t,i,l){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,i,l){var r=t("../utils/common"),a=0,s=1;function _(h){for(var V=h.length;0<=--V;)h[V]=0}var E=0,b=29,x=256,u=x+1+b,f=30,S=19,g=2*u+1,c=15,o=16,v=7,T=256,R=16,P=17,D=18,L=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],M=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],X=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],B=new Array(2*(u+2));_(B);var C=new Array(2*f);_(C);var F=new Array(512);_(F);var d=new Array(256);_(d);var N=new Array(b);_(N);var H,O,re,Z=new Array(f);function ce(h,V,ne,ae,k){this.static_tree=h,this.extra_bits=V,this.extra_base=ne,this.elems=ae,this.max_length=k,this.has_stree=h&&h.length}function W(h,V){this.dyn_tree=h,this.max_code=0,this.stat_desc=V}function G(h){return h<256?F[h]:F[256+(h>>>7)]}function ge(h,V){h.pending_buf[h.pending++]=255&V,h.pending_buf[h.pending++]=V>>>8&255}function pe(h,V,ne){h.bi_valid>o-ne?(h.bi_buf|=V<<h.bi_valid&65535,ge(h,h.bi_buf),h.bi_buf=V>>o-h.bi_valid,h.bi_valid+=ne-o):(h.bi_buf|=V<<h.bi_valid&65535,h.bi_valid+=ne)}function fe(h,V,ne){pe(h,ne[2*V],ne[2*V+1])}function te(h,V){for(var ne=0;ne|=1&h,h>>>=1,ne<<=1,0<--V;);return ne>>>1}function ue(h,V,ne){var ae,k,w=new Array(c+1),m=0;for(ae=1;ae<=c;ae++)w[ae]=m=m+ne[ae-1]<<1;for(k=0;k<=V;k++){var U=h[2*k+1];U!==0&&(h[2*k]=te(w[U]++,U))}}function se(h){var V;for(V=0;V<u;V++)h.dyn_ltree[2*V]=0;for(V=0;V<f;V++)h.dyn_dtree[2*V]=0;for(V=0;V<S;V++)h.bl_tree[2*V]=0;h.dyn_ltree[2*T]=1,h.opt_len=h.static_len=0,h.last_lit=h.matches=0}function Me(h){8<h.bi_valid?ge(h,h.bi_buf):0<h.bi_valid&&(h.pending_buf[h.pending++]=h.bi_buf),h.bi_buf=0,h.bi_valid=0}function Re(h,V,ne,ae){var k=2*V,w=2*ne;return h[k]<h[w]||h[k]===h[w]&&ae[V]<=ae[ne]}function ye(h,V,ne){for(var ae=h.heap[ne],k=ne<<1;k<=h.heap_len&&(k<h.heap_len&&Re(V,h.heap[k+1],h.heap[k],h.depth)&&k++,!Re(V,ae,h.heap[k],h.depth));)h.heap[ne]=h.heap[k],ne=k,k<<=1;h.heap[ne]=ae}function qe(h,V,ne){var ae,k,w,m,U=0;if(h.last_lit!==0)for(;ae=h.pending_buf[h.d_buf+2*U]<<8|h.pending_buf[h.d_buf+2*U+1],k=h.pending_buf[h.l_buf+U],U++,ae===0?fe(h,k,V):(fe(h,(w=d[k])+x+1,V),(m=L[w])!==0&&pe(h,k-=N[w],m),fe(h,w=G(--ae),ne),(m=M[w])!==0&&pe(h,ae-=Z[w],m)),U<h.last_lit;);fe(h,T,V)}function ke(h,V){var ne,ae,k,w=V.dyn_tree,m=V.stat_desc.static_tree,U=V.stat_desc.has_stree,q=V.stat_desc.elems,ie=-1;for(h.heap_len=0,h.heap_max=g,ne=0;ne<q;ne++)w[2*ne]!==0?(h.heap[++h.heap_len]=ie=ne,h.depth[ne]=0):w[2*ne+1]=0;for(;h.heap_len<2;)w[2*(k=h.heap[++h.heap_len]=ie<2?++ie:0)]=1,h.depth[k]=0,h.opt_len--,U&&(h.static_len-=m[2*k+1]);for(V.max_code=ie,ne=h.heap_len>>1;1<=ne;ne--)ye(h,w,ne);for(k=q;ne=h.heap[1],h.heap[1]=h.heap[h.heap_len--],ye(h,w,1),ae=h.heap[1],h.heap[--h.heap_max]=ne,h.heap[--h.heap_max]=ae,w[2*k]=w[2*ne]+w[2*ae],h.depth[k]=(h.depth[ne]>=h.depth[ae]?h.depth[ne]:h.depth[ae])+1,w[2*ne+1]=w[2*ae+1]=k,h.heap[1]=k++,ye(h,w,1),2<=h.heap_len;);h.heap[--h.heap_max]=h.heap[1],(function(j,Ee){var _e,Pe,Fe,le,he,De,we=Ee.dyn_tree,Te=Ee.max_code,Ve=Ee.stat_desc.static_tree,z=Ee.stat_desc.has_stree,ve=Ee.stat_desc.extra_bits,me=Ee.stat_desc.extra_base,Ae=Ee.stat_desc.max_length,de=0;for(le=0;le<=c;le++)j.bl_count[le]=0;for(we[2*j.heap[j.heap_max]+1]=0,_e=j.heap_max+1;_e<g;_e++)Ae<(le=we[2*we[2*(Pe=j.heap[_e])+1]+1]+1)&&(le=Ae,de++),we[2*Pe+1]=le,Te<Pe||(j.bl_count[le]++,he=0,me<=Pe&&(he=ve[Pe-me]),De=we[2*Pe],j.opt_len+=De*(le+he),z&&(j.static_len+=De*(Ve[2*Pe+1]+he)));if(de!==0){do{for(le=Ae-1;j.bl_count[le]===0;)le--;j.bl_count[le]--,j.bl_count[le+1]+=2,j.bl_count[Ae]--,de-=2}while(0<de);for(le=Ae;le!==0;le--)for(Pe=j.bl_count[le];Pe!==0;)Te<(Fe=j.heap[--_e])||(we[2*Fe+1]!==le&&(j.opt_len+=(le-we[2*Fe+1])*we[2*Fe],we[2*Fe+1]=le),Pe--)}})(h,V),ue(w,ie,h.bl_count)}function p(h,V,ne){var ae,k,w=-1,m=V[1],U=0,q=7,ie=4;for(m===0&&(q=138,ie=3),V[2*(ne+1)+1]=65535,ae=0;ae<=ne;ae++)k=m,m=V[2*(ae+1)+1],++U<q&&k===m||(U<ie?h.bl_tree[2*k]+=U:k!==0?(k!==w&&h.bl_tree[2*k]++,h.bl_tree[2*R]++):U<=10?h.bl_tree[2*P]++:h.bl_tree[2*D]++,w=k,ie=(U=0)===m?(q=138,3):k===m?(q=6,3):(q=7,4))}function J(h,V,ne){var ae,k,w=-1,m=V[1],U=0,q=7,ie=4;for(m===0&&(q=138,ie=3),ae=0;ae<=ne;ae++)if(k=m,m=V[2*(ae+1)+1],!(++U<q&&k===m)){if(U<ie)for(;fe(h,k,h.bl_tree),--U!=0;);else k!==0?(k!==w&&(fe(h,k,h.bl_tree),U--),fe(h,R,h.bl_tree),pe(h,U-3,2)):U<=10?(fe(h,P,h.bl_tree),pe(h,U-3,3)):(fe(h,D,h.bl_tree),pe(h,U-11,7));w=k,ie=(U=0)===m?(q=138,3):k===m?(q=6,3):(q=7,4)}}_(Z);var K=!1;function I(h,V,ne,ae){pe(h,(E<<1)+(ae?1:0),3),(function(k,w,m,U){Me(k),ge(k,m),ge(k,~m),r.arraySet(k.pending_buf,k.window,w,m,k.pending),k.pending+=m})(h,V,ne)}l._tr_init=function(h){K||((function(){var V,ne,ae,k,w,m=new Array(c+1);for(k=ae=0;k<b-1;k++)for(N[k]=ae,V=0;V<1<<L[k];V++)d[ae++]=k;for(d[ae-1]=k,k=w=0;k<16;k++)for(Z[k]=w,V=0;V<1<<M[k];V++)F[w++]=k;for(w>>=7;k<f;k++)for(Z[k]=w<<7,V=0;V<1<<M[k]-7;V++)F[256+w++]=k;for(ne=0;ne<=c;ne++)m[ne]=0;for(V=0;V<=143;)B[2*V+1]=8,V++,m[8]++;for(;V<=255;)B[2*V+1]=9,V++,m[9]++;for(;V<=279;)B[2*V+1]=7,V++,m[7]++;for(;V<=287;)B[2*V+1]=8,V++,m[8]++;for(ue(B,u+1,m),V=0;V<f;V++)C[2*V+1]=5,C[2*V]=te(V,5);H=new ce(B,L,x+1,u,c),O=new ce(C,M,0,f,c),re=new ce(new Array(0),A,0,S,v)})(),K=!0),h.l_desc=new W(h.dyn_ltree,H),h.d_desc=new W(h.dyn_dtree,O),h.bl_desc=new W(h.bl_tree,re),h.bi_buf=0,h.bi_valid=0,se(h)},l._tr_stored_block=I,l._tr_flush_block=function(h,V,ne,ae){var k,w,m=0;0<h.level?(h.strm.data_type===2&&(h.strm.data_type=(function(U){var q,ie=4093624447;for(q=0;q<=31;q++,ie>>>=1)if(1&ie&&U.dyn_ltree[2*q]!==0)return a;if(U.dyn_ltree[18]!==0||U.dyn_ltree[20]!==0||U.dyn_ltree[26]!==0)return s;for(q=32;q<x;q++)if(U.dyn_ltree[2*q]!==0)return s;return a})(h)),ke(h,h.l_desc),ke(h,h.d_desc),m=(function(U){var q;for(p(U,U.dyn_ltree,U.l_desc.max_code),p(U,U.dyn_dtree,U.d_desc.max_code),ke(U,U.bl_desc),q=S-1;3<=q&&U.bl_tree[2*X[q]+1]===0;q--);return U.opt_len+=3*(q+1)+5+5+4,q})(h),k=h.opt_len+3+7>>>3,(w=h.static_len+3+7>>>3)<=k&&(k=w)):k=w=ne+5,ne+4<=k&&V!==-1?I(h,V,ne,ae):h.strategy===4||w===k?(pe(h,2+(ae?1:0),3),qe(h,B,C)):(pe(h,4+(ae?1:0),3),(function(U,q,ie,j){var Ee;for(pe(U,q-257,5),pe(U,ie-1,5),pe(U,j-4,4),Ee=0;Ee<j;Ee++)pe(U,U.bl_tree[2*X[Ee]+1],3);J(U,U.dyn_ltree,q-1),J(U,U.dyn_dtree,ie-1)})(h,h.l_desc.max_code+1,h.d_desc.max_code+1,m+1),qe(h,h.dyn_ltree,h.dyn_dtree)),se(h),ae&&Me(h)},l._tr_tally=function(h,V,ne){return h.pending_buf[h.d_buf+2*h.last_lit]=V>>>8&255,h.pending_buf[h.d_buf+2*h.last_lit+1]=255&V,h.pending_buf[h.l_buf+h.last_lit]=255&ne,h.last_lit++,V===0?h.dyn_ltree[2*ne]++:(h.matches++,V--,h.dyn_ltree[2*(d[ne]+x+1)]++,h.dyn_dtree[2*G(V)]++),h.last_lit===h.lit_bufsize-1},l._tr_align=function(h){pe(h,2,3),fe(h,T,B),(function(V){V.bi_valid===16?(ge(V,V.bi_buf),V.bi_buf=0,V.bi_valid=0):8<=V.bi_valid&&(V.pending_buf[V.pending++]=255&V.bi_buf,V.bi_buf>>=8,V.bi_valid-=8)})(h)}},{"../utils/common":41}],53:[function(t,i,l){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,i,l){(function(r){(function(a,s){if(!a.setImmediate){var _,E,b,x,u=1,f={},S=!1,g=a.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(a);c=c&&c.setTimeout?c:a,_={}.toString.call(a.process)==="[object process]"?function(R){process.nextTick(function(){v(R)})}:(function(){if(a.postMessage&&!a.importScripts){var R=!0,P=a.onmessage;return a.onmessage=function(){R=!1},a.postMessage("","*"),a.onmessage=P,R}})()?(x="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",T,!1):a.attachEvent("onmessage",T),function(R){a.postMessage(x+R,"*")}):a.MessageChannel?((b=new MessageChannel).port1.onmessage=function(R){v(R.data)},function(R){b.port2.postMessage(R)}):g&&"onreadystatechange"in g.createElement("script")?(E=g.documentElement,function(R){var P=g.createElement("script");P.onreadystatechange=function(){v(R),P.onreadystatechange=null,E.removeChild(P),P=null},E.appendChild(P)}):function(R){setTimeout(v,0,R)},c.setImmediate=function(R){typeof R!="function"&&(R=new Function(""+R));for(var P=new Array(arguments.length-1),D=0;D<P.length;D++)P[D]=arguments[D+1];var L={callback:R,args:P};return f[u]=L,_(u),u++},c.clearImmediate=o}function o(R){delete f[R]}function v(R){if(S)setTimeout(v,0,R);else{var P=f[R];if(P){S=!0;try{(function(D){var L=D.callback,M=D.args;switch(M.length){case 0:L();break;case 1:L(M[0]);break;case 2:L(M[0],M[1]);break;case 3:L(M[0],M[1],M[2]);break;default:L.apply(s,M)}})(P)}finally{o(R),S=!1}}}}function T(R){R.source===a&&typeof R.data=="string"&&R.data.indexOf(x)===0&&v(+R.data.slice(x.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof zn<"u"?zn:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Ci)),Ci.exports}var xh=Eh();const Ma=Sh(xh),bh="assets/minecraft/textures/item/skin.png",Ta="assets/minecraft/items/totem_of_undying.json",_o="assets/minecraft",$n=e=>`${_o}/models/${go(e)}.json`,Mh=e=>`${_o}/textures/${go(e)}.png`;function go(e){if(e.startsWith("minecraft:"))return e.slice(10);if(e.includes(":"))throw new Error(`Unsupported pack namespace: ${e}`);return e}function Pi({model:{fallback:e,cases:n}}){return new Map([["Default",e.model],...n.map(({when:t,model:i})=>[t,i.model])])}const Aa=e=>$n(e).split("/").at(-1);async function Th(e,n,t){const i=await Ma.loadAsync(e),l=Pi(JSON.parse(await Di(i,Ta,"string"))),r=()=>t("totem_of_undying_small.json");async function a(s,_="classic"){if(_==="slim"){const x=Pi(JSON.parse(await r()));return JSON.parse(await t(Aa(x.get(s))))}const E=l.get(s),b=s==="Default"?n:await Di(i,$n(E),"string");return JSON.parse(b)}return{getModel:a,getTexture:s=>Di(i,Mh(s),"blob"),async export(s,_="classic"){const E=await Ma.loadAsync(e);if(E.file($n(l.get("Default")),n),_==="slim"){const b=await r();E.file(Ta,b),await Promise.all(Array.from(Pi(JSON.parse(b)).values(),async x=>{E.file($n(x),await t(Aa(x)))}))}return E.file(bh,await s.arrayBuffer()),E.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}})}}}function Di(e,n,t){const i=e.file(n);if(!i)throw new Error(`Missing pack asset: ${n}`);return i.async(t)}const Ah=[137,80,78,71,13,10,26,10];function Gi(e,n,t=4){return{top:[e+4,n,t,4],bottom:[e+4+t,n,t,4],right:[e,n+4,4,12],front:[e+4,n+4,t,12],left:[e+4+t,n+4,4,12],back:[e+8+t,n+4,t,12]}}function wh({data:e,width:n,height:t}){if(t===32)return"classic";const i=([r,a,s,_])=>{for(let E=a;E<a+_;E+=1)for(let b=r;b<r+s;b+=1)if(e[(E*n+b)*4+3]>0)return!0;return!1};return[[40,16],[32,48]].every(([r,a])=>!i([r+10,a,2,4])&&!i([r+14,a+4,2,12])&&i(Gi(r,a,3).front))?"slim":"classic"}function Rh(e){const n=new DataView(e.buffer,e.byteOffset,e.byteLength);if(e.length<33||!Ah.every((l,r)=>e[r]===l)||n.getUint32(8)!==13||n.getUint32(12)!==1229472850)throw new Error("Choose a valid Minecraft skin PNG.");const t=n.getUint32(16),i=n.getUint32(20);if(t!==64||i!==64&&i!==32)throw new Error(`This PNG is ${t} × ${i}. Use a 64 × 64 or 64 × 32 Minecraft skin.`);return{width:t,height:i}}function vo(e=64,n=64){const t=document.createElement("canvas");t.width=e,t.height=n;const i=t.getContext("2d",{willReadFrequently:!0});return i.imageSmoothingEnabled=!1,i}function So(e){return new Promise((n,t)=>{e.toBlob(i=>i?n(i):t(new Error("Could not create the PNG.")),"image/png")})}async function Eo(e){const n=await createImageBitmap(e.slice(0,e.size,"image/png"),{colorSpaceConversion:"none"}),t=vo(n.width,n.height);try{return t.drawImage(n,0,0),t}finally{n.close()}}async function xo(e){if(e.size>1024*1024)throw new Error("Choose a Minecraft skin PNG under 1 MB.");const{height:n}=Rh(new Uint8Array(await e.slice(0,33).arrayBuffer()));let t;try{t=await Eo(e)}catch{throw new Error("This PNG could not be decoded. Try another skin file.")}if(!t.getImageData(8,8,8,8).data.some((r,a)=>a%4===3&&r>0))throw new Error("The base face is empty. Export a Minecraft skin with a visible face.");const l=wh(t.getImageData(0,0,64,n));return{file:e,source:t,height:n,armType:l}}async function bo({file:e,source:n,height:t,armType:i}){if(t===64)return{image:n.canvas,png:e,armType:i};const l=vo();return l.drawImage(n.canvas,0,0),yh(l,n),{image:l.canvas,png:await So(l.canvas),armType:"classic"}}function yh(e,n){n.getImageData(32,0,32,32).data.every((l,r)=>r%4!==3||l>=128)&&e.clearRect(32,0,32,16);for(const[l,r]of[[0,16],[40,32]]){const a=Gi(l,16),s=Gi(r,48);for(const[_,[E,b,x,u]]of Object.entries(s)){const f=_==="left"?"right":_==="right"?"left":_;e.save(),e.translate(E+x,b),e.scale(-1,1),e.drawImage(n.canvas,...a[f],0,0,x,u),e.restore()}}for(const[l,r,a,s]of[[0,0,32,16],[0,16,64,16],[16,48,32,16]]){const _=e.getImageData(l,r,a,s);for(let E=3;E<_.data.length;E+=4)_.data[E]=255;e.putImageData(_,l,r)}}function Ch(e,n){const t=e.getContext("2d");t.clearRect(0,0,8,8),t.drawImage(n,8,8,8,8,0,0,8,8),t.drawImage(n,40,8,8,8,0,0,8,8)}const wa={type:"change"},ji={type:"start"},Mo={type:"end"},Xn=new ol,Ra=new Ha,Ph=Math.cos(70*Gt.DEG2RAD),ct=new Be,_t=2*Math.PI,Qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Li=1e-6;class Dh extends al{constructor(n,t=null){super(n,t),this.state=Qe.NONE,this.target=new Be,this.cursor=new Be,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:un.ROTATE,MIDDLE:un.DOLLY,RIGHT:un.PAN},this.touches={ONE:cn.ROTATE,TWO:cn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Be,this._lastQuaternion=new Oi,this._lastTargetPosition=new Be,this._quat=new Oi().setFromUnitVectors(n.up,new Be(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fi,this._sphericalDelta=new Fi,this._scale=1,this._panOffset=new Be,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new Be,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Uh.bind(this),this._onPointerDown=Lh.bind(this),this._onPointerUp=Ih.bind(this),this._onContextMenu=Hh.bind(this),this._onMouseWheel=Fh.bind(this),this._onKeyDown=Bh.bind(this),this._onTouchStart=kh.bind(this),this._onTouchMove=Gh.bind(this),this._onMouseDown=Nh.bind(this),this._onMouseMove=Oh.bind(this),this._interceptControlDown=Vh.bind(this),this._interceptControlUp=zh.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(n){this._cursorStyle=n,n==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(n){super.connect(n),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(n){n.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=n}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wa),this.update(),this.state=Qe.NONE}pan(n,t){this._pan(n,t),this.update()}dollyIn(n){this._dollyIn(n),this.update()}dollyOut(n){this._dollyOut(n),this.update()}rotateLeft(n){this._rotateLeft(n),this.update()}rotateUp(n){this._rotateUp(n),this.update()}update(n=null){const t=this.object.position;ct.copy(t).sub(this.target),ct.applyQuaternion(this._quat),this._spherical.setFromVector3(ct),this.autoRotate&&this.state===Qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(n)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(i)&&isFinite(l)&&(i<-Math.PI?i+=_t:i>Math.PI&&(i-=_t),l<-Math.PI?l+=_t:l>Math.PI&&(l-=_t),i<=l?this._spherical.theta=Math.max(i,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+l)/2?Math.max(i,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ct.setFromSpherical(this._spherical),ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const s=ct.length();a=this._clampDistance(s*this._scale);const _=s-a;this.object.position.addScaledVector(this._dollyDirection,_),this.object.updateMatrixWorld(),r=!!_}else if(this.object.isOrthographicCamera){const s=new Be(this._mouse.x,this._mouse.y,0);s.unproject(this.object);const _=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=_!==this.object.zoom;const E=new Be(this._mouse.x,this._mouse.y,0);E.unproject(this.object),this.object.position.sub(E).add(s),this.object.updateMatrixWorld(),a=ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Xn.origin.copy(this.object.position),Xn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xn.direction))<Ph?this.object.lookAt(this.target):(Ra.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xn.intersectPlane(Ra,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Li||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Li||this._lastTargetPosition.distanceToSquared(this.target)>Li?(this.dispatchEvent(wa),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(n){return n!==null?_t/60*this.autoRotateSpeed*n:_t/60/60*this.autoRotateSpeed}_getZoomScale(n){const t=Math.abs(n*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(n){this._sphericalDelta.theta-=n}_rotateUp(n){this._sphericalDelta.phi-=n}_panLeft(n,t){ct.setFromMatrixColumn(t,0),ct.multiplyScalar(-n),this._panOffset.add(ct)}_panUp(n,t){this.screenSpacePanning===!0?ct.setFromMatrixColumn(t,1):(ct.setFromMatrixColumn(t,0),ct.crossVectors(this.object.up,ct)),ct.multiplyScalar(n),this._panOffset.add(ct)}_pan(n,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;ct.copy(l).sub(this.target);let r=ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*n*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(n*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(n,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),l=n-i.left,r=t-i.top,a=i.width,s=i.height;this._mouse.x=l/a*2-1,this._mouse.y=-(r/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(n){return Math.max(this.minDistance,Math.min(this.maxDistance,n))}_handleMouseDownRotate(n){this._rotateStart.set(n.clientX,n.clientY)}_handleMouseDownDolly(n){this._updateZoomParameters(n.clientX,n.clientX),this._dollyStart.set(n.clientX,n.clientY)}_handleMouseDownPan(n){this._panStart.set(n.clientX,n.clientY)}_handleMouseMoveRotate(n){this._rotateEnd.set(n.clientX,n.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_t*this._rotateDelta.x/t.clientHeight),this._rotateUp(_t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(n){this._dollyEnd.set(n.clientX,n.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(n){this._panEnd.set(n.clientX,n.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(n){this._updateZoomParameters(n.clientX,n.clientY),n.deltaY<0?this._dollyIn(this._getZoomScale(n.deltaY)):n.deltaY>0&&this._dollyOut(this._getZoomScale(n.deltaY)),this.update()}_handleKeyDown(n){let t=!1;switch(n.code){case this.keys.UP:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(_t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(-_t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(_t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(-_t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(n.preventDefault(),this.update())}_handleTouchStartRotate(n){if(this._pointers.length===1)this._rotateStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),l=.5*(n.pageY+t.y);this._rotateStart.set(i,l)}}_handleTouchStartPan(n){if(this._pointers.length===1)this._panStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),l=.5*(n.pageY+t.y);this._panStart.set(i,l)}}_handleTouchStartDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,l=n.pageY-t.y,r=Math.sqrt(i*i+l*l);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enablePan&&this._handleTouchStartPan(n)}_handleTouchStartDollyRotate(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enableRotate&&this._handleTouchStartRotate(n)}_handleTouchMoveRotate(n){if(this._pointers.length==1)this._rotateEnd.set(n.pageX,n.pageY);else{const i=this._getSecondPointerPosition(n),l=.5*(n.pageX+i.x),r=.5*(n.pageY+i.y);this._rotateEnd.set(l,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_t*this._rotateDelta.x/t.clientHeight),this._rotateUp(_t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(n){if(this._pointers.length===1)this._panEnd.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),l=.5*(n.pageY+t.y);this._panEnd.set(i,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,l=n.pageY-t.y,r=Math.sqrt(i*i+l*l);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(n.pageX+t.x)*.5,s=(n.pageY+t.y)*.5;this._updateZoomParameters(a,s)}_handleTouchMoveDollyPan(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enablePan&&this._handleTouchMovePan(n)}_handleTouchMoveDollyRotate(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enableRotate&&this._handleTouchMoveRotate(n)}_addPointer(n){this._pointers.push(n.pointerId)}_removePointer(n){delete this._pointerPositions[n.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(n){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId)return!0;return!1}_trackPointer(n){let t=this._pointerPositions[n.pointerId];t===void 0&&(t=new rt,this._pointerPositions[n.pointerId]=t),t.set(n.pageX,n.pageY)}_getSecondPointerPosition(n){const t=n.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(n){const t=n.deltaMode,i={clientX:n.clientX,clientY:n.clientY,deltaY:n.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return n.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Lh(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Uh(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Ih(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mo),this.state=Qe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const n=this._pointers[0],t=this._pointerPositions[n];this._onTouchStart({pointerId:n,pageX:t.x,pageY:t.y});break}}function Nh(e){let n;switch(e.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case un.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Qe.DOLLY;break;case un.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Qe.ROTATE}break;case un.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Qe.PAN}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(ji)}function Oh(e){switch(this.state){case Qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Fh(e){this.enabled===!1||this.enableZoom===!1||this.state!==Qe.NONE||(e.preventDefault(),this.dispatchEvent(ji),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Mo))}function Bh(e){this.enabled!==!1&&this._handleKeyDown(e)}function kh(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case cn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Qe.TOUCH_ROTATE;break;case cn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Qe.TOUCH_PAN;break;default:this.state=Qe.NONE}break;case 2:switch(this.touches.TWO){case cn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Qe.TOUCH_DOLLY_PAN;break;case cn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Qe.TOUCH_DOLLY_ROTATE;break;default:this.state=Qe.NONE}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(ji)}function Gh(e){switch(this._trackPointer(e),this.state){case Qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Qe.NONE}}function Hh(e){this.enabled!==!1&&e.preventDefault()}function Vh(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zh(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Wh=Math.PI*2/34;function Xh(e,{onZoom:n,onContext:t}){const i=new lh({canvas:e,alpha:!0,antialias:!0});i.setClearColor(0,0);const l=new sl,r=new Wi(-7,7,7,-7,.1,100),a=new Dh(r,e);a.enablePan=!1,a.dampingFactor=.16,a.minZoom=.65,a.maxZoom=2.1,a.minPolarAngle=.17,a.maxPolarAngle=Math.PI-.17;const s=window.matchMedia("(prefers-reduced-motion: reduce)"),E={default:new Be(-.54,.28,-1).normalize(),front:new Be(0,0,-1),back:new Be(0,0,1)},b=new oo;l.add(b);const x=Yh();l.add(x);let u,f=13,S=0,g=!0,c=!1,o=0,v=0,T=r.zoom,R=!1,P=0;function D(){S||!u||!g||document.hidden||c||(S=requestAnimationFrame(L))}function L(N){S=0;const H=v>0?Math.min((N-v)/1e3,.05):0;v=N,s.matches||(o+=H),b.position.y=s.matches?0:Math.sin(o*1.3)*.1,x.material.opacity=x.visible?.54-b.position.y*.19:0;const O=R?Wh:0;P=Gt.damp(P,O,5,H),Math.abs(P-O)<.001&&(P=O),P&&r.position.applyAxisAngle(r.up,-P*H),a.update(H),i.render(l,r),(!s.matches||P||R)&&D()}function M(){const N=e.clientWidth,H=e.clientHeight;if(!N||!H)return;const O=N/H,re=f/2/Math.min(1,O/.9);r.left=-re*O,r.right=re*O,r.top=re,r.bottom=-re,r.updateProjectionMatrix(),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(N,H,!1),D()}function A(N,H=!1){const O=a.enableDamping;a.enableDamping=!1,a.update(0),r.position.copy(E[N]).multiplyScalar(27),H&&(r.zoom=1),r.updateProjectionMatrix(),a.update(0),a.enableDamping=O,C(),D()}function X(N){r.zoom=Gt.clamp(N,a.minZoom,a.maxZoom),r.updateProjectionMatrix(),a.update(0),C(),D()}function B(N){g=N,v=0,S&&(!g||document.hidden||c)&&(cancelAnimationFrame(S),S=0),D()}function C(){T!==r.zoom&&(T=r.zoom,n(T))}return a.addEventListener("change",()=>{C(),D()}),e.addEventListener("keydown",N=>{if(N.ctrlKey||N.metaKey||N.altKey)return;const H=new Fi().setFromVector3(r.position),O=.16;switch(N.key){case"ArrowLeft":H.theta-=O;break;case"ArrowRight":H.theta+=O;break;case"ArrowUp":H.phi-=O;break;case"ArrowDown":H.phi+=O;break;case"+":case"=":X(r.zoom+.1);break;case"-":X(r.zoom-.1);break;default:return}N.preventDefault(),N.key.startsWith("Arrow")&&(H.phi=Gt.clamp(H.phi,a.minPolarAngle,a.maxPolarAngle),r.position.setFromSpherical(H),a.update(0))}),e.addEventListener("webglcontextlost",N=>{N.preventDefault(),c=!0,B(g),t(!1)}),e.addEventListener("webglcontextrestored",()=>{c=!1,t(!0),M()}),new ResizeObserver(M).observe(e),new IntersectionObserver(([N])=>B(N.isIntersecting)).observe(e),document.addEventListener("visibilitychange",()=>B(g)),s.addEventListener("change",()=>{a.enableDamping=!s.matches,D()}),a.enableDamping=!s.matches,A("default",!0),M(),{setModel(N,H,O=!1){const re=gh(N,H),Z=new ll().setFromObject(re),ce=Z.getSize(new Be);re.position.sub(Z.getCenter(new Be)),u&&(b.remove(u),vh(u)),u=re,b.add(u),x.position.y=-ce.y/2-.26,x.scale.set(ce.x*1.65,Math.max(ce.z*1.85,7),1),f=Math.max(ce.y*1.4,ce.x*1.4),O&&A("default",!0),M()},setZoom:X,setView:A,setSpinning(N){R=N,S||(v=0),D()},setShadow(N){x.visible=N,D()},async screenshot(){if(!u||c)throw new Error("The 3D preview must be active to save an image.");const N=x.visible;try{return x.visible=!1,i.render(l,r),await So(e)}finally{x.visible=N,D()}}}}function Yh(){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),t=n.createRadialGradient(32,32,2,32,32,31);t.addColorStop(0,"#000d"),t.addColorStop(.48,"#0007"),t.addColorStop(1,"#0000"),n.fillStyle=t,n.fillRect(0,0,64,64);const i=new Mt(new Ki(1,1),new ni({map:new so(e),transparent:!0,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.renderOrder=-1,i}let bn;function Kh(){if(bn)return bn;const e=document.createElement("script");return e.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",e.async=!0,e.referrerPolicy="no-referrer",bn=new Promise((n,t)=>{const i=()=>{clearTimeout(l),t(new Error("Could not load the gallery’s bot check. Try again."))},l=setTimeout(i,12e3);e.addEventListener("error",i,{once:!0}),e.addEventListener("load",()=>{const r=window.turnstile;if(!r)return i();r.ready(()=>{clearTimeout(l),n(r)})},{once:!0}),document.head.append(e)}).catch(n=>{throw e.remove(),bn=null,n}),bn}async function qh(e,n){const t=await Kh(),i=document.createElement("div");document.getElementById("gallery-verification").append(i);let l,r;try{return await new Promise((a,s)=>{const _=()=>s(new Error("The gallery’s bot check did not complete. Select the skin again to retry."));r=setTimeout(_,45e3),l=t.render(i,{sitekey:e,action:"publish_skin",cData:n,appearance:"interaction-only",size:"flexible",retry:"never","response-field":!1,callback:a,"error-callback":_,"expired-callback":_,"timeout-callback":_,"unsupported-callback":_})})}finally{clearTimeout(r),l&&t.remove(l),i.remove()}}const Yn=document.getElementById("sharing-dialog"),ya=document.getElementById("sharing-settings"),Ca=document.getElementById("sharing-state");let ii,To,An,fn=null;function Hi(){const e=In();Ca.textContent=e?"New uploads are public":"New uploads are private",Ca.toggleAttribute("data-public",e)}function Pa(e){fn=e;try{localStorage.setItem(An,e)}catch{}Hi()}function In(){return!!(ii&&fn==="public")}async function Zh(e){const{default:{PNG:n}}=await It(()=>import("./browser-DgxAcU3-.js").then(s=>s.b),[]),t=new Uint8Array(await e.arrayBuffer()),i=await new Promise((s,_)=>{new n().parse(t,(E,b)=>{E?_(E):s(b.data)})});for(let s=0;s<i.length;s+=4)i[s+3]||i.fill(0,s,s+3);const l=new Uint8Array(await crypto.subtle.digest("SHA-256",i)),r=Array.from(l,s=>s.toString(16).padStart(2,"0")).join("");if(!In())return!1;const a=await qh(To,r);return In()?(await fl(`${ii}/skins`,{method:"POST",headers:{"Content-Type":"application/octet-stream","X-Plushify-Verification":a},body:i}),!0):!1}const jh=cl.then(e=>{if(e?.siteKey){({api:ii,siteKey:To}=e),An=`plushify.public-skins.v2:${ii}`;try{const n=localStorage.getItem(An);(n==="public"||n==="private")&&(fn=n)}catch{}Hi(),ya.hidden=!1,ya.addEventListener("click",()=>Yn.showModal()),Yn.querySelector("form").addEventListener("submit",n=>Pa(n.submitter.value)),Yn.addEventListener("close",()=>{fn||Pa("private")}),window.addEventListener("storage",n=>{n.key!==null&&n.key!==An||(fn=n.key===An&&n.newValue==="public"?"public":"private",Hi())}),(!fn||location.hash==="#sharing")&&Yn.showModal()}}),$h=Object.assign({"../../plushify_chain_small.json":()=>It(()=>import("./plushify_chain_small-Dmh6S5Pj.js"),[]).then(e=>e.default),"../../plushify_copper_small.json":()=>It(()=>import("./plushify_copper_small-eGYiHBpr.js"),[]).then(e=>e.default),"../../plushify_diamond_small.json":()=>It(()=>import("./plushify_diamond_small-BH8NJCAv.js"),[]).then(e=>e.default),"../../plushify_gold_small.json":()=>It(()=>import("./plushify_gold_small-GpbP8cph.js"),[]).then(e=>e.default),"../../plushify_iron_small.json":()=>It(()=>import("./plushify_iron_small-B-2O9rqX.js"),[]).then(e=>e.default),"../../plushify_netherite_small.json":()=>It(()=>import("./plushify_netherite_small-ComjmCGm.js"),[]).then(e=>e.default),"../../plushy_small.json":()=>It(()=>import("./plushy_small-BfTd5cDZ.js"),[]).then(e=>e.default),"../../totem_of_undying_small.json":()=>It(()=>import("./totem_of_undying_small-jPGIoBiH.js"),[]).then(e=>e.default)});function Qh(e){const n=$h[`../../${e}`];if(!n)throw new Error(`Missing slim model: ${e}`);return n()}const Xe=e=>document.getElementById(e),$i=Xe("skin-file"),Qt=Xe("drop-zone"),Da=Xe("upload-label"),Jh=Xe("avatar"),La=Xe("skin-name"),ep=Xe("skin-description"),Ua=Xe("skin-status"),tp=Xe("demo-option"),yn=Xe("demo-layout"),np=Xe("arm-option"),ri=Xe("arm-type"),ip=Xe("arm-auto"),Nn=Xe("upload-error"),Ao=Xe("armor-options"),Ia=Xe("armor-hint"),wo=Xe("download"),Na=Xe("download-label"),Cn=Xe("export-status"),Qn=Xe("gallery-status"),Ro=Xe("stage"),rp=Xe("stage-message"),ap=Xe("stage-text"),op=Xe("variant-caption"),ai=Xe("model"),oi=Xe("background"),On=Xe("zoom"),sp=Xe("zoom-out"),lp=Xe("zoom-in"),cp=Xe("reset"),Vi=Xe("flip"),zi=Xe("spin"),Oa=Xe("screenshot"),fp=Xe("preview-toolbar").querySelectorAll("button, input"),up=new Map,dp=new Map;let Fn,At,si=!1,pt,on="Default",dn=!1,Jn=!1,li=!1,Bt=0,Ui=0;function St(e,n,t=!1){e.textContent=n,e.hidden=!n,e.classList.toggle("error",t)}function hn(e){Ro.setAttribute("aria-busy","false"),rp.hidden=!e,ap.textContent=e}function en(){wo.disabled=!pt||pt.demo||dn||Jn,yn.disabled=dn,ri.disabled=dn,fp.forEach(e=>{e.disabled=!pt||!si})}function Qi(e,n,t){pt={...e,demo:t,detectedArmType:n.armType},Ch(Jh,pt.image),La.textContent=t?"askin":n.file.name,La.title=t?"":n.file.name,Ua.textContent=t?"Demo":"Personal",Ua.toggleAttribute("data-custom",!t);const i=n.height===32?"64 × 32 · converted to 64 × 64":"64 × 64 PNG";ep.textContent=t?`${i} · ${e.armType==="slim"?"Slim":"Classic"}`:i,tp.hidden=!t,np.hidden=t||n.height===32,ip.textContent=n.armType==="slim"?"Auto · Slim (3 px)":"Auto · Classic (4 px)",en(),Ji()}function Fa(e,n,t){return e.has(n)||e.set(n,t(n).catch(i=>{throw e.delete(n),i})),e.get(n)}async function hp(e){const n=await Fn.getTexture(e);return(await Eo(n)).canvas}async function Ji(){if(!At||!pt)return;const e=++Ui,n=on,t=pt;try{const i=t.armType,l=await Fa(up,`${i}/${n}`,()=>Fn.getModel(n,i)),r=new Set(Object.values(l.textures).map(s=>mo(l.textures,s))),a=new Map([["item/skin",t.image]]);if(r.delete("item/skin"),await Promise.all([...r].map(async s=>{a.set(s,await Fa(dp,s,hp))})),e!==Ui)return;At.setModel(l,a),op.textContent=n.toUpperCase(),ai.setAttribute("aria-label",`Interactive ${t.armType} Plushy model`),si&&hn("")}catch(i){if(e!==Ui)return;console.error(i),hn("This model could not be displayed. Try another armor style.")}}async function yo(e){if(!Fn||$i.disabled||!e)return;const n=In(),t=++Bt;dn=!0,St(Nn,""),St(Cn,""),St(Qn,""),Da.textContent="Reading skin…",en();try{const i=await xo(e),l=await bo(i);if(t!==Bt)return;ri.value="auto",Qi(l,i,!1),n&&In()&&pp(l.png,t)}catch(i){t===Bt&&St(Nn,i.message,!0)}finally{t===Bt&&(dn=!1,Da.textContent=pt&&!pt.demo?"Change Your Skin":"Upload Your Skin",en())}}async function pp(e,n){St(Qn,"Publishing to the public gallery…");try{const t=await Zh(e);n===Bt&&St(Qn,t?"Published. Anyone can download your skin from the gallery.":"")}catch(t){n===Bt&&St(Qn,`${t.message} Your skin is still available in the creator.`,!0)}}$i.addEventListener("change",e=>{yo(e.currentTarget.files[0]),e.currentTarget.value=""});Qt.addEventListener("dragover",e=>{e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.dataTransfer.dropEffect="copy",Qt.setAttribute("data-dragging",""))});Qt.addEventListener("dragleave",e=>{Qt.contains(e.relatedTarget)||Qt.removeAttribute("data-dragging")});Qt.addEventListener("drop",e=>{if(e.preventDefault(),Qt.removeAttribute("data-dragging"),e.dataTransfer.files.length>1){St(Nn,"Drop one Minecraft skin PNG at a time.",!0);return}yo(e.dataTransfer.files[0])});ri.addEventListener("change",()=>{const e=ri.value;pt={...pt,armType:e==="auto"?pt.detectedArmType:e},St(Cn,""),Ji()});Ao.addEventListener("change",e=>{if(on=e.target.value,Xe("armor-name").textContent=on,Xe("armor-icon").src=`/Plushify/art/${on.toLowerCase()}.png`,on==="Default")Ia.textContent="Leave the Totem unnamed for the default look.";else{const n=document.createElement("strong");n.textContent=on,Ia.replaceChildren("At an anvil, name your Totem ",n," for this look.")}Ji()});function Co(){Ro.dataset.background=oi.value,At?.setShadow(oi.value!=="transparent")}function Po(e){zi.setAttribute("aria-pressed",String(e)),At?.setSpinning(e)}function Do(e){li=e;const n=li?"Show front":"Show back";Vi.setAttribute("aria-label",n),Vi.title=n}oi.addEventListener("change",Co);zi.addEventListener("click",()=>Po(zi.getAttribute("aria-pressed")!=="true"));Vi.addEventListener("click",()=>{Do(!li),At?.setView(li?"back":"front")});function Lo(){Do(!1),oi.value="overworld",Co(),At?.setView("default",!0)}cp.addEventListener("click",Lo);ai.addEventListener("keydown",e=>{e.key==="Home"&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&(e.preventDefault(),Lo())});On.addEventListener("input",()=>At?.setZoom(Number(On.value)/100));lp.addEventListener("click",()=>At?.setZoom((Number(On.value)+12)/100));sp.addEventListener("click",()=>At?.setZoom((Number(On.value)-12)/100));function Uo(e,n){const t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n,document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}Oa.addEventListener("click",async()=>{Oa.disabled=!0;try{Uo(await At.screenshot(),"Plushify-Preview.png")}catch(e){hn(e.message)}finally{en()}});Xe("modrinth-help").addEventListener("click",()=>Xe("modrinth-guide").showModal());wo.addEventListener("click",async()=>{if(!pt||pt.demo||Jn||dn)return;Jn=!0;const e=pt;en(),St(Cn,""),Na.textContent="Building your pack…";try{Uo(await Fn.export(e.png,e.armType),"Plushify-Custom-Skin.zip"),e===pt&&St(Cn,"Your resource pack is ready.")}catch(n){console.error(n),St(Cn,"Could not build the ZIP. Try downloading again.",!0)}finally{Jn=!1,Na.textContent="Download My Plushy",en()}});async function Io(e){const t=await fetch(`/Plushify/art/${e==="slim"?"askin-slim.png":"askin.png"}`);if(!t.ok)throw new Error(`Demo request returned ${t.status}`);const i=await xo(await t.blob());return{source:i,result:await bo(i)}}yn.addEventListener("change",async()=>{const e=++Bt;St(Nn,"");try{const{source:n,result:t}=await Io(yn.value);e===Bt&&Qi(t,n,!0)}catch{if(e!==Bt)return;yn.value=pt.armType,St(Nn,"The demo skin could not be loaded. Try again.",!0)}});async function mp(){try{At=Xh(ai,{onZoom:e=>{On.value=Math.round(e*100)},onContext(e){si=e,en(),hn(e?"":"The 3D connection was lost. Skin upload and ZIP export are still available.")}}),si=!0,Po(!0)}catch{ai.tabIndex=-1,hn("3D preview requires WebGL 2. You can still upload skins and download the pack.")}try{const[e,n]=await Promise.all([fetch(hl),Io("classic")]);if(!e.ok)throw new Error(`Pack request returned ${e.status}`);Fn=await Th(await e.arrayBuffer(),pl,Qh),Qi(n.result,n.source,!0),yn.disabled=!1,await jh,$i.disabled=!1,Ao.disabled=!1}catch(e){console.error(e),hn("The Plushify pack could not be loaded. Reload the page to try again.")}}mp();export{zn as a,Wn as c,Sh as g};
