import"./navigation-f6g2J169.js";import{U as Ct,c as Po,N as Pt,S as ya,C as at,F as Ca,V as Be,R as Do,e as rt,w as tt,a as vt,l as nr,b as Pa,M as hn,W as ir,d as Dt,f as lt,L as sn,H as Xt,D as Nt,B as xt,g as Rn,h as ni,p as Lo,i as _n,j as Mn,k as Uo,m as bt,O as Bi,n as it,E as Io,o as Qe,P as Wn,A as No,q as fi,r as Ot,s as ln,t as pn,u as yn,v as Jt,x as jn,y as Oo,z as Fo,G as Cn,I as Et,J as Ci,K as an,Q as rr,T as Bo,X as ko,Y as vn,Z as Go,_ as Ho,$ as Vo,a0 as zo,a1 as Wo,a2 as Xo,a3 as Yo,a4 as Ko,a5 as qo,a6 as Zo,a7 as jo,a8 as $o,a9 as Qo,aa as Jo,ab as es,ac as ts,ad as ns,ae as ui,af as Bn,ag as is,ah as Ft,ai as rs,aj as as,ak as ki,al as os,am as Gi,an as ss,ao as ls,ap as cs,aq as Da,ar as Ke,as as fs,at as us,au as kt,av as Tn,aw as Xn,ax as ds,ay as Bt,az as xn,aA as zt,aB as hs,aC as La,aD as Ua,aE as Ia,aF as $n,aG as Na,aH as Oa,aI as Fa,aJ as Hi,aK as ps,aL as ms,aM as _s,aN as gs,aO as Ba,aP as vs,aQ as Ss,aR as Es,aS as di,aT as hi,aU as pi,aV as mi,aW as ar,aX as or,aY as sr,aZ as lr,a_ as cr,a$ as fr,b0 as ur,b1 as dr,b2 as hr,b3 as pr,b4 as mr,b5 as _r,b6 as gr,b7 as vr,b8 as Sr,b9 as Er,ba as xr,bb as br,bc as Mr,bd as Tr,be as Ar,bf as wr,bg as Rr,bh as yr,bi as Cr,bj as Pr,bk as Dr,bl as Lr,bm as Ur,bn as Ir,bo as Nr,bp as Or,bq as xs,br as bs,bs as Ms,bt as Ts,bu as As,bv as ws,bw as Rs,bx as ys,by as Fr,bz as Cs,bA as Yn,bB as Ps,bC as Br,bD as kr,bE as Gr,bF as ka,bG as Ds,bH as ii,bI as Ls,bJ as Us,bK as Ga,bL as ri,bM as Pi,bN as ai,bO as Ha,bP as Is,bQ as Va,bR as za,bS as Wa,bT as Xa,bU as Ya,bV as Ka,bW as qa,bX as Hr,bY as Za,bZ as _i,b_ as gi,b$ as Ns,c0 as Os,c1 as Vr,c2 as gt,c3 as Fs,c4 as Pn,c5 as mn,c6 as Dn,c7 as Bs,c8 as ks,c9 as Gs,ca as Hs,cb as Vs,cc as zs,cd as Ws,ce as Xs,cf as Ys,cg as Di,ch as ja,ci as Ln,cj as Mt,ck as Ks,cl as fn,cm as cn,cn as Li,co as qs,cp as Zs,cq as js,cr as $s}from"./three-core-BALzDnCY.js";const Qs="modulepreload",Js=function(e){return"/Plushify/"+e},zr={},Vt=function(n,t,i){let l=Promise.resolve();if(t&&t.length>0){let _=function(E){return Promise.all(E.map(b=>Promise.resolve(b).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=a?.nonce||a?.getAttribute("nonce");l=_(t.map(E=>{if(E=Js(E),E in zr)return;zr[E]=!0;const b=E.endsWith(".css"),x=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${E}"]${x}`))return;const h=document.createElement("link");if(h.rel=b?"stylesheet":Qs,b||(h.as="script"),h.crossOrigin="",h.href=E,s&&h.setAttribute("nonce",s),document.head.appendChild(h),b)return new Promise((u,S)=>{h.addEventListener("load",u),h.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${E}`)))})}))}function r(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return l.then(a=>{for(const s of a||[])s.status==="rejected"&&r(s.reason);return n().catch(r)})},el="/Plushify/assets/pack-source-BnQZs1LU.zip",tl=`{
	"format_version": "26.3",
	"credit": "Made with Blockbench",
	"texture_size": [64, 64],
	"textures": {
		"1": "item/skin"
	},
	"elements": [
		{
			"name": "Left Leg",
			"from": [3.89778, 0, 5.77646],
			"to": [5.89778, 2, 9.77646],
			"rotation": {"angle": 15, "axis": "y", "origin": [1, 0, 5]},
			"faces": {
				"north": {"uv": [6, 12, 7, 13], "rotation": 180, "texture": "#1"},
				"east": {"uv": [4, 13, 5, 16], "rotation": 270, "texture": "#1"},
				"south": {"uv": [5, 12, 6, 13], "rotation": 180, "texture": "#1"},
				"west": {"uv": [6, 13, 7, 16], "rotation": 90, "texture": "#1"},
				"up": {"uv": [5, 13, 6, 16], "rotation": 180, "texture": "#1"},
				"down": {"uv": [8, 13, 7, 16], "texture": "#1"}
			}
		},
		{
			"name": "Left Leg 2",
			"from": [3.79778, -0.1, 5.67646],
			"to": [5.99778, 2.1, 9.87646],
			"rotation": {"angle": 15, "axis": "y", "origin": [1, 0, 5]},
			"faces": {
				"north": {"uv": [2, 12, 3, 13], "rotation": 180, "texture": "#1"},
				"east": {"uv": [0, 13, 1, 16], "rotation": 270, "texture": "#1"},
				"south": {"uv": [1, 12, 2, 13], "rotation": 180, "texture": "#1"},
				"west": {"uv": [2, 13, 3, 16], "rotation": 90, "texture": "#1"},
				"up": {"uv": [1, 13, 2, 16], "rotation": 180, "texture": "#1"},
				"down": {"uv": [4, 13, 3, 16], "texture": "#1"}
			}
		},
		{
			"name": "Right Leg",
			"from": [8.72741, 0, 2.92945],
			"to": [10.72741, 2, 6.92945],
			"rotation": {"angle": -15, "axis": "y", "origin": [1, 0, 5]},
			"faces": {
				"north": {"uv": [2, 4, 3, 5], "rotation": 180, "texture": "#1"},
				"east": {"uv": [0, 5, 1, 8], "rotation": 270, "texture": "#1"},
				"south": {"uv": [1, 4, 2, 5], "rotation": 180, "texture": "#1"},
				"west": {"uv": [2, 5, 3, 8], "rotation": 90, "texture": "#1"},
				"up": {"uv": [1, 5, 2, 8], "rotation": 180, "texture": "#1"},
				"down": {"uv": [3, 5, 4, 8], "texture": "#1"}
			}
		},
		{
			"name": "Right Leg 2",
			"from": [8.62741, -0.1, 2.72945],
			"to": [10.82741, 2.1, 7.02945],
			"rotation": {"angle": -15, "axis": "y", "origin": [1, 0, 5]},
			"faces": {
				"north": {"uv": [2, 8, 3, 9], "rotation": 180, "texture": "#1"},
				"east": {"uv": [0, 9, 1, 12], "rotation": 270, "texture": "#1"},
				"south": {"uv": [1, 8, 2, 9], "rotation": 180, "texture": "#1"},
				"west": {"uv": [2, 9, 3, 12], "rotation": 90, "texture": "#1"},
				"up": {"uv": [1, 9, 2, 12], "rotation": 180, "texture": "#1"},
				"down": {"uv": [3, 9, 4, 12], "texture": "#1"}
			}
		},
		{
			"name": "Torso",
			"from": [5.5, 0, 10.7],
			"to": [9.5, 2, 15.7],
			"rotation": {"x": -90, "y": 0, "z": 0, "origin": [1, 0, 10]},
			"faces": {
				"north": {"uv": [7, 4, 9, 5], "texture": "#1"},
				"east": {"uv": [4, 5, 5, 8], "rotation": 270, "texture": "#1"},
				"south": {"uv": [5, 4, 7, 5], "rotation": 180, "texture": "#1"},
				"west": {"uv": [7, 5, 8, 8], "rotation": 90, "texture": "#1"},
				"up": {"uv": [5, 5, 7, 8], "rotation": 180, "texture": "#1"},
				"down": {"uv": [8, 5, 10, 8], "texture": "#1"}
			}
		},
		{
			"name": "Torso 2",
			"from": [5.3, -0.2, 10.6],
			"to": [9.8, 2.1, 15.8],
			"rotation": {"x": -90, "y": 0, "z": 0, "origin": [1, 0, 10]},
			"faces": {
				"north": {"uv": [7, 8, 9, 9], "texture": "#1"},
				"east": {"uv": [4, 9, 5, 12], "rotation": 270, "texture": "#1"},
				"south": {"uv": [5, 8, 7, 9], "rotation": 180, "texture": "#1"},
				"west": {"uv": [7, 9, 8, 12], "rotation": 90, "texture": "#1"},
				"up": {"uv": [5, 9, 7, 12], "rotation": 180, "texture": "#1"},
				"down": {"uv": [8, 9, 10, 12], "texture": "#1"}
			}
		},
		{
			"name": "Head",
			"from": [5.48904, 0.3139, 16.7],
			"to": [9.48904, 4.3139, 20.7],
			"rotation": {"x": -90, "y": -4, "z": 0, "origin": [1, 0, 11]},
			"faces": {
				"north": {"uv": [4, 0, 6, 2], "rotation": 180, "texture": "#1"},
				"east": {"uv": [0, 2, 2, 4], "rotation": 270, "texture": "#1"},
				"south": {"uv": [2, 0, 4, 2], "rotation": 180, "texture": "#1"},
				"west": {"uv": [4, 2, 6, 4], "rotation": 90, "texture": "#1"},
				"up": {"uv": [2, 2, 4, 4], "rotation": 180, "texture": "#1"},
				"down": {"uv": [6, 2, 8, 4], "texture": "#1"}
			}
		},
		{
			"name": "Head 2",
			"from": [5.28904, 0.2139, 16.6],
			"to": [9.68904, 4.5139, 20.9],
			"rotation": {"x": -90, "y": -4, "z": 0, "origin": [1, 0, 11]},
			"faces": {
				"north": {"uv": [12, 0, 14, 2], "rotation": 180, "texture": "#1"},
				"east": {"uv": [8, 2, 10, 4], "rotation": 270, "texture": "#1"},
				"south": {"uv": [10, 0, 12, 2], "rotation": 180, "texture": "#1"},
				"west": {"uv": [12, 2, 14, 4], "rotation": 90, "texture": "#1"},
				"up": {"uv": [10, 2, 12, 4], "rotation": 180, "texture": "#1"},
				"down": {"uv": [14, 2, 16, 4], "texture": "#1"}
			}
		},
		{
			"name": "Right Arm",
			"from": [0.94543, 8.76658, 9.79119],
			"to": [2.94543, 10.76658, 12.79119],
			"rotation": {"x": 0, "y": -87, "z": -87, "origin": [1, 0, 7.75]},
			"faces": {
				"north": {"uv": [12, 4, 13, 5], "rotation": 270, "texture": "#1"},
				"east": {"uv": [13, 5, 14, 8], "rotation": 270, "texture": "#1"},
				"south": {"uv": [11, 4, 12, 5], "texture": "#1"},
				"west": {"uv": [11, 5, 12, 8], "rotation": 90, "texture": "#1"},
				"up": {"uv": [10, 5, 11, 8], "rotation": 180, "texture": "#1"},
				"down": {"uv": [12, 5, 13, 8], "texture": "#1"}
			}
		},
		{
			"name": "Right Arm 2",
			"from": [0.74543, 8.56658, 9.69119],
			"to": [3.04543, 10.96658, 12.99119],
			"rotation": {"x": 0, "y": -87, "z": -87, "origin": [1, 0, 7.75]},
			"faces": {
				"north": {"uv": [12, 8, 13, 9], "rotation": 270, "texture": "#1"},
				"east": {"uv": [11, 9, 12, 12], "rotation": 270, "texture": "#1"},
				"south": {"uv": [11, 8, 12, 9], "texture": "#1"},
				"west": {"uv": [13, 9, 14, 12], "rotation": 90, "texture": "#1"},
				"up": {"uv": [10, 9, 11, 12], "rotation": 180, "texture": "#1"},
				"down": {"uv": [12, 9, 13, 12], "texture": "#1"}
			}
		},
		{
			"name": "Left Arm",
			"from": [1.2156, -4.3321, 11.79546],
			"to": [3.2156, -2.3321, 14.79546],
			"rotation": {"x": 7.32303, "y": 76.96226, "z": 94.43697, "origin": [1, 0, 9.3]},
			"faces": {
				"north": {"uv": [10, 12, 11, 13], "rotation": 90, "texture": "#1"},
				"east": {"uv": [9, 13, 10, 16], "rotation": 270, "texture": "#1"},
				"south": {"uv": [9, 12, 10, 13], "rotation": 270, "texture": "#1"},
				"west": {"uv": [11, 13, 12, 16], "rotation": 90, "texture": "#1"},
				"up": {"uv": [10, 13, 11, 16], "rotation": 180, "texture": "#1"},
				"down": {"uv": [8, 13, 9, 16], "texture": "#1"}
			}
		},
		{
			"name": "Left Arm 2",
			"from": [1.1156, -4.5321, 11.59546],
			"to": [3.4156, -2.1321, 14.89546],
			"rotation": {"x": 7.32303, "y": 76.96226, "z": 94.43697, "origin": [1, 0, 9.3]},
			"faces": {
				"north": {"uv": [14, 12, 15, 13], "rotation": 90, "texture": "#1"},
				"east": {"uv": [13, 13, 14, 16], "rotation": 270, "texture": "#1"},
				"south": {"uv": [13, 12, 14, 13], "rotation": 270, "texture": "#1"},
				"west": {"uv": [15, 13, 16, 16], "rotation": 90, "texture": "#1"},
				"up": {"uv": [14, 13, 15, 16], "rotation": 180, "texture": "#1"},
				"down": {"uv": [12, 13, 13, 16], "texture": "#1"}
			}
		}
	],
	"display": {
		"thirdperson_righthand": {
			"rotation": [0, 160, 0],
			"translation": [0, 4, 0],
			"scale": [0.5, 0.5, 0.5]
		},
		"thirdperson_lefthand": {
			"rotation": [0, 160, 0],
			"translation": [0, 4, 0],
			"scale": [0.5, 0.5, 0.5]
		},
		"firstperson_righthand": {
			"rotation": [-12, 144, 0],
			"translation": [0.5, 3.5, 1.25],
			"scale": [0.4, 0.4, 0.4]
		},
		"firstperson_lefthand": {
			"rotation": [-12, 144, 0],
			"translation": [0.5, 3.5, 1.25],
			"scale": [0.4, 0.4, 0.4]
		},
		"ground": {
			"translation": [0, 5, 0],
			"scale": [0.7, 0.7, 0.7]
		},
		"gui": {
			"rotation": [7, 173, 1],
			"translation": [0, 3.75, 0],
			"scale": [1.2, 1.2, 1.2]
		},
		"head": {
			"translation": [0, 14.25, 0]
		},
		"fixed": {
			"translation": [0, 3.5, -1]
		},
		"on_shelf": {
			"rotation": [0, -180, 0],
			"translation": [0, 0, -2],
			"scale": [1.2, 1.2, 1.2]
		}
	}
}`;function $a(){let e=null,n=!1,t=null,i=null;function l(r,a){t(r,a),i=e.requestAnimationFrame(l)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(l),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function nl(e){const n=new WeakMap;function t(s,_){const E=s.array,b=s.usage,x=E.byteLength,h=e.createBuffer();e.bindBuffer(_,h),e.bufferData(_,E,b),s.onUploadCallback();let u;if(E instanceof Float32Array)u=e.FLOAT;else if(typeof Float16Array<"u"&&E instanceof Float16Array)u=e.HALF_FLOAT;else if(E instanceof Uint16Array)s.isFloat16BufferAttribute?u=e.HALF_FLOAT:u=e.UNSIGNED_SHORT;else if(E instanceof Int16Array)u=e.SHORT;else if(E instanceof Uint32Array)u=e.UNSIGNED_INT;else if(E instanceof Int32Array)u=e.INT;else if(E instanceof Int8Array)u=e.BYTE;else if(E instanceof Uint8Array)u=e.UNSIGNED_BYTE;else if(E instanceof Uint8ClampedArray)u=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+E);return{buffer:h,type:u,bytesPerElement:E.BYTES_PER_ELEMENT,version:s.version,size:x}}function i(s,_,E){const b=_.array,x=_.updateRanges;if(e.bindBuffer(E,s),x.length===0)e.bufferSubData(E,0,b);else{x.sort((u,S)=>u.start-S.start);let h=0;for(let u=1;u<x.length;u++){const S=x[h],g=x[u];g.start<=S.start+S.count+1?S.count=Math.max(S.count,g.start+g.count-S.start):(++h,x[h]=g)}x.length=h+1;for(let u=0,S=x.length;u<S;u++){const g=x[u];e.bufferSubData(E,g.start*b.BYTES_PER_ELEMENT,b,g.start,g.count)}_.clearUpdateRanges()}_.onUploadCallback()}function l(s){return s.isInterleavedBufferAttribute&&(s=s.data),n.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);const _=n.get(s);_&&(e.deleteBuffer(_.buffer),n.delete(s))}function a(s,_){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const b=n.get(s);(!b||b.version<s.version)&&n.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const E=n.get(s);if(E===void 0)n.set(s,t(s,_));else if(E.version<s.version){if(E.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(E.buffer,s,_),E.version=s.version}}return{get:l,remove:r,update:a}}var il=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rl=`#ifdef USE_ALPHAHASH
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
#endif`,al=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ol=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ll=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cl=`#ifdef USE_AOMAP
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
#endif`,fl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ul=`#ifdef USE_BATCHING
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
#endif`,dl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ml=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_l=`#ifdef USE_IRIDESCENCE
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
#endif`,gl=`#ifdef USE_BUMPMAP
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
#endif`,vl=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,El=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ml=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Al=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wl=`#define PI 3.141592653589793
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
} // validated`,Rl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yl=`vec3 transformedNormal = objectNormal;
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
#endif`,Cl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ll=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ul="gl_FragColor = linearToOutputTexel( gl_FragColor );",Il=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nl=`#ifdef USE_ENVMAP
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
#endif`,Ol=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fl=`#ifdef USE_ENVMAP
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
#endif`,Bl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kl=`#ifdef USE_ENVMAP
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
#endif`,Gl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wl=`#ifdef USE_GRADIENTMAP
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
}`,Xl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ql=`uniform bool receiveShadow;
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
#endif`,Zl=`#ifdef USE_ENVMAP
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
#endif`,jl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$l=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ql=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ec=`PhysicalMaterial material;
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
#endif`,tc=`uniform sampler2D dfgLUT;
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
}`,nc=`
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
#endif`,ic=`#if defined( RE_IndirectDiffuse )
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
#endif`,rc=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ac=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dc=`#if defined( USE_POINTS_UV )
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
#endif`,hc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_c=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vc=`#ifdef USE_MORPHTARGETS
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
#endif`,Sc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ec=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ac=`#ifdef USE_NORMALMAP
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
#endif`,wc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ic=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hc=`float getShadowMask() {
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
}`,Vc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zc=`#ifdef USE_SKINNING
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
#endif`,Wc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xc=`#ifdef USE_SKINNING
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
#endif`,Yc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zc=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jc=`#ifdef USE_TRANSMISSION
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
#endif`,$c=`#ifdef USE_TRANSMISSION
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
#endif`,Qc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rf=`uniform sampler2D t2D;
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
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,of=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`#include <common>
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
}`,ff=`#if DEPTH_PACKING == 3200
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
}`,uf=`#define DISTANCE
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
}`,df=`#define DISTANCE
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
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`uniform float scale;
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
}`,_f=`uniform vec3 diffuse;
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
}`,gf=`#include <common>
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
}`,vf=`uniform vec3 diffuse;
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
}`,Sf=`#define LAMBERT
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
}`,Ef=`#define LAMBERT
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
}`,xf=`#define MATCAP
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
}`,bf=`#define MATCAP
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
}`,Mf=`#define NORMAL
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
}`,Tf=`#define NORMAL
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
}`,Af=`#define PHONG
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
}`,wf=`#define PHONG
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
}`,Rf=`#define STANDARD
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
}`,yf=`#define STANDARD
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
}`,Cf=`#define TOON
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
}`,Pf=`#define TOON
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
}`,Df=`uniform float size;
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
}`,Lf=`uniform vec3 diffuse;
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
}`,Uf=`#include <common>
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
}`,If=`uniform vec3 color;
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
}`,Nf=`uniform float rotation;
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
}`,Of=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:il,alphahash_pars_fragment:rl,alphamap_fragment:al,alphamap_pars_fragment:ol,alphatest_fragment:sl,alphatest_pars_fragment:ll,aomap_fragment:cl,aomap_pars_fragment:fl,batching_pars_vertex:ul,batching_vertex:dl,begin_vertex:hl,beginnormal_vertex:pl,bsdfs:ml,iridescence_fragment:_l,bumpmap_pars_fragment:gl,clipping_planes_fragment:vl,clipping_planes_pars_fragment:Sl,clipping_planes_pars_vertex:El,clipping_planes_vertex:xl,color_fragment:bl,color_pars_fragment:Ml,color_pars_vertex:Tl,color_vertex:Al,common:wl,cube_uv_reflection_fragment:Rl,defaultnormal_vertex:yl,displacementmap_pars_vertex:Cl,displacementmap_vertex:Pl,emissivemap_fragment:Dl,emissivemap_pars_fragment:Ll,colorspace_fragment:Ul,colorspace_pars_fragment:Il,envmap_fragment:Nl,envmap_common_pars_fragment:Ol,envmap_pars_fragment:Fl,envmap_pars_vertex:Bl,envmap_physical_pars_fragment:Zl,envmap_vertex:kl,fog_vertex:Gl,fog_pars_vertex:Hl,fog_fragment:Vl,fog_pars_fragment:zl,gradientmap_pars_fragment:Wl,lightmap_pars_fragment:Xl,lights_lambert_fragment:Yl,lights_lambert_pars_fragment:Kl,lights_pars_begin:ql,lights_toon_fragment:jl,lights_toon_pars_fragment:$l,lights_phong_fragment:Ql,lights_phong_pars_fragment:Jl,lights_physical_fragment:ec,lights_physical_pars_fragment:tc,lights_fragment_begin:nc,lights_fragment_maps:ic,lights_fragment_end:rc,logdepthbuf_fragment:ac,logdepthbuf_pars_fragment:oc,logdepthbuf_pars_vertex:sc,logdepthbuf_vertex:lc,map_fragment:cc,map_pars_fragment:fc,map_particle_fragment:uc,map_particle_pars_fragment:dc,metalnessmap_fragment:hc,metalnessmap_pars_fragment:pc,morphinstance_vertex:mc,morphcolor_vertex:_c,morphnormal_vertex:gc,morphtarget_pars_vertex:vc,morphtarget_vertex:Sc,normal_fragment_begin:Ec,normal_fragment_maps:xc,normal_pars_fragment:bc,normal_pars_vertex:Mc,normal_vertex:Tc,normalmap_pars_fragment:Ac,clearcoat_normal_fragment_begin:wc,clearcoat_normal_fragment_maps:Rc,clearcoat_pars_fragment:yc,iridescence_pars_fragment:Cc,opaque_fragment:Pc,packing:Dc,premultiplied_alpha_fragment:Lc,project_vertex:Uc,dithering_fragment:Ic,dithering_pars_fragment:Nc,roughnessmap_fragment:Oc,roughnessmap_pars_fragment:Fc,shadowmap_pars_fragment:Bc,shadowmap_pars_vertex:kc,shadowmap_vertex:Gc,shadowmask_pars_fragment:Hc,skinbase_vertex:Vc,skinning_pars_vertex:zc,skinning_vertex:Wc,skinnormal_vertex:Xc,specularmap_fragment:Yc,specularmap_pars_fragment:Kc,tonemapping_fragment:qc,tonemapping_pars_fragment:Zc,transmission_fragment:jc,transmission_pars_fragment:$c,uv_pars_fragment:Qc,uv_pars_vertex:Jc,uv_vertex:ef,worldpos_vertex:tf,background_vert:nf,background_frag:rf,backgroundCube_vert:af,backgroundCube_frag:of,cube_vert:sf,cube_frag:lf,depth_vert:cf,depth_frag:ff,distance_vert:uf,distance_frag:df,equirect_vert:hf,equirect_frag:pf,linedashed_vert:mf,linedashed_frag:_f,meshbasic_vert:gf,meshbasic_frag:vf,meshlambert_vert:Sf,meshlambert_frag:Ef,meshmatcap_vert:xf,meshmatcap_frag:bf,meshnormal_vert:Mf,meshnormal_frag:Tf,meshphong_vert:Af,meshphong_frag:wf,meshphysical_vert:Rf,meshphysical_frag:yf,meshtoon_vert:Cf,meshtoon_frag:Pf,points_vert:Df,points_frag:Lf,shadow_vert:Uf,shadow_frag:If,sprite_vert:Nf,sprite_frag:Of},Ee={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},yt={basic:{uniforms:gt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:gt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:gt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:gt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:gt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new at(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:gt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:gt([Ee.points,Ee.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:gt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:gt([Ee.common,Ee.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:gt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:gt([Ee.sprite,Ee.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:gt([Ee.common,Ee.displacementmap,{referencePosition:{value:new Be},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:gt([Ee.lights,Ee.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};yt.physical={uniforms:gt([yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const kn={r:0,b:0,g:0},qt=new ai,Ff=new hn;function Bf(e,n,t,i,l,r){const a=new at(0);let s=l===!0?0:1,_,E,b=null,x=0,h=null;function u(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){const R=v.backgroundBlurriness>0;A=n.get(A,R)}return A}function S(v){let A=!1;const R=u(v);R===null?c(a,s):R&&R.isColor&&(c(R,1),A=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(e.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(v,A){const R=u(A);R&&(R.isCubeTexture||R.mapping===ii)?(E===void 0&&(E=new bt(new ri(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:Pi(yt.backgroundCube.uniforms),vertexShader:yt.backgroundCube.vertexShader,fragmentShader:yt.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),E.geometry.deleteAttribute("normal"),E.geometry.deleteAttribute("uv"),E.onBeforeRender=function(P,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(E.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(E)),qt.copy(A.backgroundRotation),qt.x*=-1,qt.y*=-1,qt.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(qt.y*=-1,qt.z*=-1),E.material.uniforms.envMap.value=R,E.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,E.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,E.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,E.material.uniforms.backgroundRotation.value.setFromMatrix4(Ff.makeRotationFromEuler(qt)),E.material.toneMapped=lt.getTransfer(R.colorSpace)!==it,(b!==R||x!==R.version||h!==e.toneMapping)&&(E.material.needsUpdate=!0,b=R,x=R.version,h=e.toneMapping),E.layers.enableAll(),v.unshift(E,E.geometry,E.material,0,0,null)):R&&R.isTexture&&(_===void 0&&(_=new bt(new Hi(2,2),new kt({name:"BackgroundMaterial",uniforms:Pi(yt.background.uniforms),vertexShader:yt.background.vertexShader,fragmentShader:yt.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(_)),_.material.uniforms.t2D.value=R,_.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,_.material.toneMapped=lt.getTransfer(R.colorSpace)!==it,R.matrixAutoUpdate===!0&&R.updateMatrix(),_.material.uniforms.uvTransform.value.copy(R.matrix),(b!==R||x!==R.version||h!==e.toneMapping)&&(_.material.needsUpdate=!0,b=R,x=R.version,h=e.toneMapping),_.layers.enableAll(),v.unshift(_,_.geometry,_.material,0,0,null))}function c(v,A){v.getRGB(kn,Ga(e)),t.buffers.color.setClear(kn.r,kn.g,kn.b,A,r)}function o(){E!==void 0&&(E.geometry.dispose(),E.material.dispose(),E=void 0),_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,A=1){a.set(v),s=A,c(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(v){s=v,c(a,s)},render:S,addToRenderList:g,dispose:o}}function kf(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},l=h(null);let r=l,a=!1;function s(F,C,N,d,B){let X=!1;const O=x(F,d,N,C);r!==O&&(r=O,E(r.object)),X=u(F,d,N,B),X&&S(F,d,N,B),B!==null&&n.update(B,e.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,R(F,C,N,d),B!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(B).buffer))}function _(){return e.createVertexArray()}function E(F){return e.bindVertexArray(F)}function b(F){return e.deleteVertexArray(F)}function x(F,C,N,d){const B=d.wireframe===!0;let X=i[C.id];X===void 0&&(X={},i[C.id]=X);const O=F.isInstancedMesh===!0?F.id:0;let oe=X[O];oe===void 0&&(oe={},X[O]=oe);let j=oe[N.id];j===void 0&&(j={},oe[N.id]=j);let ce=j[B];return ce===void 0&&(ce=h(_()),j[B]=ce),ce}function h(F){const C=[],N=[],d=[];for(let B=0;B<t;B++)C[B]=0,N[B]=0,d[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:d,object:F,attributes:{},index:null}}function u(F,C,N,d){const B=r.attributes,X=C.attributes;let O=0;const oe=N.getAttributes();for(const j in oe)if(oe[j].location>=0){const z=B[j];let H=X[j];if(H===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(H=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(H=F.instanceColor)),z===void 0||z.attribute!==H||H&&z.data!==H.data)return!0;O++}return r.attributesNum!==O||r.index!==d}function S(F,C,N,d){const B={},X=C.attributes;let O=0;const oe=N.getAttributes();for(const j in oe)if(oe[j].location>=0){let z=X[j];z===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(z=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(z=F.instanceColor));const H={};H.attribute=z,z&&z.data&&(H.data=z.data),B[j]=H,O++}r.attributes=B,r.attributesNum=O,r.index=d}function g(){const F=r.newAttributes;for(let C=0,N=F.length;C<N;C++)F[C]=0}function c(F){o(F,0)}function o(F,C){const N=r.newAttributes,d=r.enabledAttributes,B=r.attributeDivisors;N[F]=1,d[F]===0&&(e.enableVertexAttribArray(F),d[F]=1),B[F]!==C&&(e.vertexAttribDivisor(F,C),B[F]=C)}function v(){const F=r.newAttributes,C=r.enabledAttributes;for(let N=0,d=C.length;N<d;N++)C[N]!==F[N]&&(e.disableVertexAttribArray(N),C[N]=0)}function A(F,C,N,d,B,X,O){O===!0?e.vertexAttribIPointer(F,C,N,B,X):e.vertexAttribPointer(F,C,N,d,B,X)}function R(F,C,N,d){g();const B=d.attributes,X=N.getAttributes(),O=C.defaultAttributeValues;for(const oe in X){const j=X[oe];if(j.location>=0){let ce=B[oe];if(ce===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&(ce=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&(ce=F.instanceColor)),ce!==void 0){const z=ce.normalized,H=ce.itemSize,me=n.get(ce);if(me===void 0)continue;const he=me.buffer,ue=me.type,ee=me.bytesPerElement,fe=ue===e.INT||ue===e.UNSIGNED_INT||ce.gpuType===Ba;if(ce.isInterleavedBufferAttribute){const se=ce.data,Se=se.stride,Te=ce.offset;if(se.isInstancedInterleavedBuffer){for(let Ae=0;Ae<j.locationSize;Ae++)o(j.location+Ae,se.meshPerAttribute);F.isInstancedMesh!==!0&&d._maxInstanceCount===void 0&&(d._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ae=0;Ae<j.locationSize;Ae++)c(j.location+Ae);e.bindBuffer(e.ARRAY_BUFFER,he);for(let Ae=0;Ae<j.locationSize;Ae++)A(j.location+Ae,H/j.locationSize,ue,z,Se*ee,(Te+H/j.locationSize*Ae)*ee,fe)}else{if(ce.isInstancedBufferAttribute){for(let se=0;se<j.locationSize;se++)o(j.location+se,ce.meshPerAttribute);F.isInstancedMesh!==!0&&d._maxInstanceCount===void 0&&(d._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let se=0;se<j.locationSize;se++)c(j.location+se);e.bindBuffer(e.ARRAY_BUFFER,he);for(let se=0;se<j.locationSize;se++)A(j.location+se,H/j.locationSize,ue,z,H*ee,H/j.locationSize*se*ee,fe)}}else if(O!==void 0){const z=O[oe];if(z!==void 0)switch(z.length){case 2:e.vertexAttrib2fv(j.location,z);break;case 3:e.vertexAttrib3fv(j.location,z);break;case 4:e.vertexAttrib4fv(j.location,z);break;default:e.vertexAttrib1fv(j.location,z)}}}}v()}function P(){T();for(const F in i){const C=i[F];for(const N in C){const d=C[N];for(const B in d){const X=d[B];for(const O in X)b(X[O].object),delete X[O];delete d[B]}}delete i[F]}}function L(F){if(i[F.id]===void 0)return;const C=i[F.id];for(const N in C){const d=C[N];for(const B in d){const X=d[B];for(const O in X)b(X[O].object),delete X[O];delete d[B]}}delete i[F.id]}function U(F){for(const C in i){const N=i[C];for(const d in N){const B=N[d];if(B[F.id]===void 0)continue;const X=B[F.id];for(const O in X)b(X[O].object),delete X[O];delete B[F.id]}}}function M(F){for(const C in i){const N=i[C],d=F.isInstancedMesh===!0?F.id:0,B=N[d];if(B!==void 0){for(const X in B){const O=B[X];for(const oe in O)b(O[oe].object),delete O[oe];delete B[X]}delete N[d],Object.keys(N).length===0&&delete i[C]}}}function T(){K(),a=!0,r!==l&&(r=l,E(r.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:s,reset:T,resetDefaultState:K,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfObject:M,releaseStatesOfProgram:U,initAttributes:g,enableAttribute:c,disableUnusedAttributes:v}}function Gf(e,n,t){let i;function l(E){i=E}function r(E,b){e.drawArrays(i,E,b),t.update(b,i,1)}function a(E,b,x){x!==0&&(e.drawArraysInstanced(i,E,b,x),t.update(b,i,x))}function s(E,b,x){if(x===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,E,0,b,0,x);let u=0;for(let S=0;S<x;S++)u+=b[S];t.update(u,i,1)}function _(E,b,x,h){if(x===0)return;const u=n.get("WEBGL_multi_draw");if(u===null)for(let S=0;S<E.length;S++)a(E[S],b[S],h[S]);else{u.multiDrawArraysInstancedWEBGL(i,E,0,b,0,h,0,x);let S=0;for(let g=0;g<x;g++)S+=b[g]*h[g];t.update(S,i,1)}}this.setMode=l,this.render=r,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=_}function Hf(e,n,t,i){let l;function r(){if(l!==void 0)return l;if(n.has("EXT_texture_filter_anisotropic")===!0){const U=n.get("EXT_texture_filter_anisotropic");l=e.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function a(U){return!(U!==Ot&&i.convert(U)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(U){const M=U===Xt&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(U!==Ct&&i.convert(U)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==zt&&!M)}function _(U){if(U==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let E=t.precision!==void 0?t.precision:"highp";const b=_(E);b!==E&&(tt("WebGLRenderer:",E,"not supported, using",b,"instead."),E=b);const x=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),u=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),o=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),R=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),P=e.getParameter(e.MAX_SAMPLES),L=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:_,textureFormatReadable:a,textureTypeReadable:s,precision:E,logarithmicDepthBuffer:x,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:S,maxTextureSize:g,maxCubemapSize:c,maxAttributes:o,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:R,maxSamples:P,samples:L}}function Vf(e){const n=this;let t=null,i=0,l=!1,r=!1;const a=new Da,s=new Ke,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(x,h){const u=x.length!==0||h||i!==0||l;return l=h,i=x.length,u},this.beginShadows=function(){r=!0,b(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(x,h){t=b(x,h,0)},this.setState=function(x,h,u){const S=x.clippingPlanes,g=x.clipIntersection,c=x.clipShadows,o=e.get(x);if(!l||S===null||S.length===0||r&&!c)r?b(null):E();else{const v=r?0:i,A=v*4;let R=o.clippingState||null;_.value=R,R=b(S,h,A,u);for(let P=0;P!==A;++P)R[P]=t[P];o.clippingState=R,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function E(){_.value!==t&&(_.value=t,_.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function b(x,h,u,S){const g=x!==null?x.length:0;let c=null;if(g!==0){if(c=_.value,S!==!0||c===null){const o=u+g*4,v=h.matrixWorldInverse;s.getNormalMatrix(v),(c===null||c.length<o)&&(c=new Float32Array(o));for(let A=0,R=u;A!==g;++A,R+=4)a.copy(x[A]).applyMatrix4(v,s),a.normal.toArray(c,R),c[R+3]=a.constant}_.value=c,_.needsUpdate=!0}return n.numPlanes=g,n.numIntersection=0,c}}const Wt=4,Wr=[.125,.215,.35,.446,.526,.582],jt=20,zf=256,Sn=new Bi,Xr=new at;let vi=null,Si=0,Ei=0,xi=!1;const Wf=new Be;class Yr{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,l=100,r={}){const{size:a=256,position:s=Wf}=r;vi=this._renderer.getRenderTarget(),Si=this._renderer.getActiveCubeFace(),Ei=this._renderer.getActiveMipmapLevel(),xi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(n,i,l,_,s),t>0&&this._blur(_,0,0,t),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(vi,Si,Ei),this._renderer.xr.enabled=xi,n.scissorTest=!1,rn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===Pn||n.mapping===mn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),vi=this._renderer.getRenderTarget(),Si=this._renderer.getActiveCubeFace(),Ei=this._renderer.getActiveMipmapLevel(),xi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Xt,format:Ot,colorSpace:ni,depthBuffer:!1},l=Kr(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kr(n,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Xf(r)),this._blurMaterial=Kf(r,n,t),this._ggxMaterial=Yf(r,n,t)}return l}_compileMaterial(n){const t=new bt(new _n,n);this._renderer.compile(t,Sn)}_sceneToCubeUV(n,t,i,l,r){const _=new Wn(90,1,t,i),E=[1,-1,1,1,1,1],b=[1,1,1,-1,-1,-1],x=this._renderer,h=x.autoClear,u=x.toneMapping;x.getClearColor(Xr),x.toneMapping=Pt,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new ri,new Dn({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,c=g.material;let o=!1;const v=n.background;v?v.isColor&&(c.color.copy(v),n.background=null,o=!0):(c.color.copy(Xr),o=!0);for(let A=0;A<6;A++){const R=A%3;R===0?(_.up.set(0,E[A],0),_.position.set(r.x,r.y,r.z),_.lookAt(r.x+b[A],r.y,r.z)):R===1?(_.up.set(0,0,E[A]),_.position.set(r.x,r.y,r.z),_.lookAt(r.x,r.y+b[A],r.z)):(_.up.set(0,E[A],0),_.position.set(r.x,r.y,r.z),_.lookAt(r.x,r.y,r.z+b[A]));const P=this._cubeSize;rn(l,R*P,A>2?P:0,P,P),x.setRenderTarget(l),o&&x.render(g,_),x.render(n,_)}x.toneMapping=u,x.autoClear=h,n.background=v}_textureToCubeUV(n,t){const i=this._renderer,l=n.mapping===Pn||n.mapping===mn;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zr()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qr());const r=l?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const s=r.uniforms;s.envMap.value=n;const _=this._cubeSize;rn(t,0,0,3*_,2*_),i.setRenderTarget(t),i.render(a,Sn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const l=this._lodMeshes.length;for(let r=1;r<l;r++)this._applyGGXFilter(n,r-1,r);t.autoClear=i}_applyGGXFilter(n,t,i){const l=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,s=this._lodMeshes[i];s.material=a;const _=a.uniforms,E=i/(this._lodMeshes.length-1),b=t/(this._lodMeshes.length-1),x=Math.sqrt(E*E-b*b),h=0+E*1.25,u=x*h,{_lodMax:S}=this,g=this._sizeLods[i],c=3*g*(i>S-Wt?i-S+Wt:0),o=4*(this._cubeSize-g);_.envMap.value=n.texture,_.roughness.value=u,_.mipInt.value=S-t,rn(r,c,o,3*g,2*g),l.setRenderTarget(r),l.render(s,Sn),_.envMap.value=r.texture,_.roughness.value=0,_.mipInt.value=S-i,rn(n,c,o,3*g,2*g),l.setRenderTarget(n),l.render(s,Sn)}_blur(n,t,i,l,r){const a=this._pingPongRenderTarget;this._halfBlur(n,a,t,i,l,"latitudinal",r),this._halfBlur(a,n,i,i,l,"longitudinal",r)}_halfBlur(n,t,i,l,r,a,s){const _=this._renderer,E=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&rt("blur direction must be either latitudinal or longitudinal!");const b=3,x=this._lodMeshes[l];x.material=E;const h=E.uniforms,u=this._sizeLods[i]-1,S=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*jt-1),g=r/S,c=isFinite(r)?1+Math.floor(b*g):jt;c>jt&&tt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${jt}`);const o=[];let v=0;for(let U=0;U<jt;++U){const M=U/g,T=Math.exp(-M*M/2);o.push(T),U===0?v+=T:U<c&&(v+=2*T)}for(let U=0;U<o.length;U++)o[U]=o[U]/v;h.envMap.value=n.texture,h.samples.value=c,h.weights.value=o,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:A}=this;h.dTheta.value=S,h.mipInt.value=A-i;const R=this._sizeLods[l],P=3*R*(l>A-Wt?l-A+Wt:0),L=4*(this._cubeSize-R);rn(t,P,L,3*R,2*R),_.setRenderTarget(t),_.render(x,Sn)}}function Xf(e){const n=[],t=[],i=[];let l=e;const r=e-Wt+1+Wr.length;for(let a=0;a<r;a++){const s=Math.pow(2,l);n.push(s);let _=1/s;a>e-Wt?_=Wr[a-e+Wt-1]:a===0&&(_=0),t.push(_);const E=1/(s-2),b=-E,x=1+E,h=[b,b,x,b,x,x,b,b,x,x,b,x],u=6,S=6,g=3,c=2,o=1,v=new Float32Array(g*S*u),A=new Float32Array(c*S*u),R=new Float32Array(o*S*u);for(let L=0;L<u;L++){const U=L%3*2/3-1,M=L>2?0:-1,T=[U,M,0,U+2/3,M,0,U+2/3,M+1,0,U,M,0,U+2/3,M+1,0,U,M+1,0];v.set(T,g*S*L),A.set(h,c*S*L);const K=[L,L,L,L,L,L];R.set(K,o*S*L)}const P=new _n;P.setAttribute("position",new Tn(v,g)),P.setAttribute("uv",new Tn(A,c)),P.setAttribute("faceIndex",new Tn(R,o)),i.push(new bt(P,null)),l>Wt&&l--}return{lodMeshes:i,sizeLods:n,sigmas:t}}function Kr(e,n,t){const i=new Dt(e,n,t);return i.texture.mapping=ii,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rn(e,n,t,i,l){e.viewport.set(n,t,i,l),e.scissor.set(n,t,i,l)}function Yf(e,n,t){return new kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zf,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oi(),fragmentShader:`

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
		`,blending:Bt,depthTest:!1,depthWrite:!1})}function Kf(e,n,t){const i=new Float32Array(jt),l=new Be(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:jt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:oi(),fragmentShader:`

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
		`,blending:Bt,depthTest:!1,depthWrite:!1})}function qr(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oi(),fragmentShader:`

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
		`,blending:Bt,depthTest:!1,depthWrite:!1})}function Zr(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bt,depthTest:!1,depthWrite:!1})}function oi(){return`

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
	`}class Qa extends Dt{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},l=[i,i,i,i,i,i];this.texture=new Ha(l),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ri(5,5,5),r=new kt({name:"CubemapFromEquirect",uniforms:Pi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xt,blending:Bt});r.uniforms.tEquirect.value=t;const a=new bt(l,r),s=t.minFilter;return t.minFilter===sn&&(t.minFilter=Et),new Is(1,10,this).update(n,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(n,t=!0,i=!0,l=!0){const r=n.getRenderTarget();for(let a=0;a<6;a++)n.setRenderTarget(this,a),n.clear(t,i,l);n.setRenderTarget(r)}}function qf(e){let n=new WeakMap,t=new WeakMap,i=null;function l(h,u=!1){return h==null?null:u?a(h):r(h)}function r(h){if(h&&h.isTexture){const u=h.mapping;if(u===_i||u===gi)if(n.has(h)){const S=n.get(h).texture;return s(S,h.mapping)}else{const S=h.image;if(S&&S.height>0){const g=new Qa(S.height);return g.fromEquirectangularTexture(e,h),n.set(h,g),h.addEventListener("dispose",E),s(g.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const u=h.mapping,S=u===_i||u===gi,g=u===Pn||u===mn;if(S||g){let c=t.get(h);const o=c!==void 0?c.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==o)return i===null&&(i=new Yr(e)),c=S?i.fromEquirectangular(h,c):i.fromCubemap(h,c),c.texture.pmremVersion=h.pmremVersion,t.set(h,c),c.texture;if(c!==void 0)return c.texture;{const v=h.image;return S&&v&&v.height>0||g&&v&&_(v)?(i===null&&(i=new Yr(e)),c=S?i.fromEquirectangular(h):i.fromCubemap(h),c.texture.pmremVersion=h.pmremVersion,t.set(h,c),h.addEventListener("dispose",b),c.texture):null}}}return h}function s(h,u){return u===_i?h.mapping=Pn:u===gi&&(h.mapping=mn),h}function _(h){let u=0;const S=6;for(let g=0;g<S;g++)h[g]!==void 0&&u++;return u===S}function E(h){const u=h.target;u.removeEventListener("dispose",E);const S=n.get(u);S!==void 0&&(n.delete(u),S.dispose())}function b(h){const u=h.target;u.removeEventListener("dispose",b);const S=t.get(u);S!==void 0&&(t.delete(u),S.dispose())}function x(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:l,dispose:x}}function Zf(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const l=e.getExtension(i);return n[i]=l,l}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const l=t(i);return l===null&&Pa("WebGLRenderer: "+i+" extension not supported."),l}}}function jf(e,n,t,i){const l={},r=new WeakMap;function a(x){const h=x.target;h.index!==null&&n.remove(h.index);for(const S in h.attributes)n.remove(h.attributes[S]);h.removeEventListener("dispose",a),delete l[h.id];const u=r.get(h);u&&(n.remove(u),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(x,h){return l[h.id]===!0||(h.addEventListener("dispose",a),l[h.id]=!0,t.memory.geometries++),h}function _(x){const h=x.attributes;for(const u in h)n.update(h[u],e.ARRAY_BUFFER)}function E(x){const h=[],u=x.index,S=x.attributes.position;let g=0;if(S===void 0)return;if(u!==null){const v=u.array;g=u.version;for(let A=0,R=v.length;A<R;A+=3){const P=v[A+0],L=v[A+1],U=v[A+2];h.push(P,L,L,U,U,P)}}else{const v=S.array;g=S.version;for(let A=0,R=v.length/3-1;A<R;A+=3){const P=A+0,L=A+1,U=A+2;h.push(P,L,L,U,U,P)}}const c=new(S.count>=65535?Ns:Os)(h,1);c.version=g;const o=r.get(x);o&&n.remove(o),r.set(x,c)}function b(x){const h=r.get(x);if(h){const u=x.index;u!==null&&h.version<u.version&&E(x)}else E(x);return r.get(x)}return{get:s,update:_,getWireframeAttribute:b}}function $f(e,n,t){let i;function l(h){i=h}let r,a;function s(h){r=h.type,a=h.bytesPerElement}function _(h,u){e.drawElements(i,u,r,h*a),t.update(u,i,1)}function E(h,u,S){S!==0&&(e.drawElementsInstanced(i,u,r,h*a,S),t.update(u,i,S))}function b(h,u,S){if(S===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,h,0,S);let c=0;for(let o=0;o<S;o++)c+=u[o];t.update(c,i,1)}function x(h,u,S,g){if(S===0)return;const c=n.get("WEBGL_multi_draw");if(c===null)for(let o=0;o<h.length;o++)E(h[o]/a,u[o],g[o]);else{c.multiDrawElementsInstancedWEBGL(i,u,0,r,h,0,g,0,S);let o=0;for(let v=0;v<S;v++)o+=u[v]*g[v];t.update(o,i,1)}}this.setMode=l,this.setIndex=s,this.render=_,this.renderInstances=E,this.renderMultiDraw=b,this.renderMultiDrawInstances=x}function Qf(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,s){switch(t.calls++,a){case e.TRIANGLES:t.triangles+=s*(r/3);break;case e.LINES:t.lines+=s*(r/2);break;case e.LINE_STRIP:t.lines+=s*(r-1);break;case e.LINE_LOOP:t.lines+=s*r;break;case e.POINTS:t.points+=s*r;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function l(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:l,update:i}}function Jf(e,n,t){const i=new WeakMap,l=new vt;function r(a,s,_){const E=a.morphTargetInfluences,b=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,x=b!==void 0?b.length:0;let h=i.get(s);if(h===void 0||h.count!==x){let T=function(){U.dispose(),i.delete(s),s.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const u=s.morphAttributes.position!==void 0,S=s.morphAttributes.normal!==void 0,g=s.morphAttributes.color!==void 0,c=s.morphAttributes.position||[],o=s.morphAttributes.normal||[],v=s.morphAttributes.color||[];let A=0;u===!0&&(A=1),S===!0&&(A=2),g===!0&&(A=3);let R=s.attributes.position.count*A,P=1;R>n.maxTextureSize&&(P=Math.ceil(R/n.maxTextureSize),R=n.maxTextureSize);const L=new Float32Array(R*P*4*x),U=new ka(L,R,P,x);U.type=zt,U.needsUpdate=!0;const M=A*4;for(let K=0;K<x;K++){const F=c[K],C=o[K],N=v[K],d=R*P*4*K;for(let B=0;B<F.count;B++){const X=B*M;u===!0&&(l.fromBufferAttribute(F,B),L[d+X+0]=l.x,L[d+X+1]=l.y,L[d+X+2]=l.z,L[d+X+3]=0),S===!0&&(l.fromBufferAttribute(C,B),L[d+X+4]=l.x,L[d+X+5]=l.y,L[d+X+6]=l.z,L[d+X+7]=0),g===!0&&(l.fromBufferAttribute(N,B),L[d+X+8]=l.x,L[d+X+9]=l.y,L[d+X+10]=l.z,L[d+X+11]=N.itemSize===4?l.w:1)}}h={count:x,texture:U,size:new Qe(R,P)},i.set(s,h),s.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)_.getUniforms().setValue(e,"morphTexture",a.morphTexture,t);else{let u=0;for(let g=0;g<E.length;g++)u+=E[g];const S=s.morphTargetsRelative?1:1-u;_.getUniforms().setValue(e,"morphTargetBaseInfluence",S),_.getUniforms().setValue(e,"morphTargetInfluences",E)}_.getUniforms().setValue(e,"morphTargetsTexture",h.texture,t),_.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:r}}function eu(e,n,t,i,l){let r=new WeakMap;function a(E){const b=l.render.frame,x=E.geometry,h=n.get(E,x);if(r.get(h)!==b&&(n.update(h),r.set(h,b)),E.isInstancedMesh&&(E.hasEventListener("dispose",_)===!1&&E.addEventListener("dispose",_),r.get(E)!==b&&(t.update(E.instanceMatrix,e.ARRAY_BUFFER),E.instanceColor!==null&&t.update(E.instanceColor,e.ARRAY_BUFFER),r.set(E,b))),E.isSkinnedMesh){const u=E.skeleton;r.get(u)!==b&&(u.update(),r.set(u,b))}return h}function s(){r=new WeakMap}function _(E){const b=E.target;b.removeEventListener("dispose",_),i.releaseStatesOfObject(b),t.remove(b.instanceMatrix),b.instanceColor!==null&&t.remove(b.instanceColor)}return{update:a,dispose:s}}const tu={[qa]:"LINEAR_TONE_MAPPING",[Ka]:"REINHARD_TONE_MAPPING",[Ya]:"CINEON_TONE_MAPPING",[Xa]:"ACES_FILMIC_TONE_MAPPING",[Wa]:"AGX_TONE_MAPPING",[za]:"NEUTRAL_TONE_MAPPING",[Va]:"CUSTOM_TONE_MAPPING"};function nu(e,n,t,i,l){const r=new Dt(n,t,{type:e,depthBuffer:i,stencilBuffer:l}),a=new Dt(n,t,{type:Xt,depthBuffer:!1,stencilBuffer:!1}),s=new _n;s.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute("uv",new Mn([0,2,0,0,2,0],2));const _=new Uo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),E=new bt(s,_),b=new Bi(-1,1,1,-1,0,1);let x=null,h=null,u=!1,S,g=null,c=[],o=!1;this.setSize=function(v,A){r.setSize(v,A),a.setSize(v,A);for(let R=0;R<c.length;R++){const P=c[R];P.setSize&&P.setSize(v,A)}},this.setEffects=function(v){c=v,o=c.length>0&&c[0].isRenderPass===!0;const A=r.width,R=r.height;for(let P=0;P<c.length;P++){const L=c[P];L.setSize&&L.setSize(A,R)}},this.begin=function(v,A){if(u||v.toneMapping===Pt&&c.length===0)return!1;if(g=A,A!==null){const R=A.width,P=A.height;(r.width!==R||r.height!==P)&&this.setSize(R,P)}return o===!1&&v.setRenderTarget(r),S=v.toneMapping,v.toneMapping=Pt,!0},this.hasRenderPass=function(){return o},this.end=function(v,A){v.toneMapping=S,u=!0;let R=r,P=a;for(let L=0;L<c.length;L++){const U=c[L];if(U.enabled!==!1&&(U.render(v,P,R,A),U.needsSwap!==!1)){const M=R;R=P,P=M}}if(x!==v.outputColorSpace||h!==v.toneMapping){x=v.outputColorSpace,h=v.toneMapping,_.defines={},lt.getTransfer(x)===it&&(_.defines.SRGB_TRANSFER="");const L=tu[h];L&&(_.defines[L]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=R.texture,v.setRenderTarget(g),v.render(E,b),g=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){r.dispose(),a.dispose(),s.dispose(),_.dispose()}}const Ja=new zs,Ui=new jn(1,1),eo=new ka,to=new Bs,no=new Ha,jr=[],$r=[],Qr=new Float32Array(16),Jr=new Float32Array(9),ea=new Float32Array(4);function gn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const l=n*t;let r=jr[l];if(r===void 0&&(r=new Float32Array(l),jr[l]=r),n!==0){i.toArray(r,0);for(let a=1,s=0;a!==n;++a)s+=t,e[a].toArray(r,s)}return r}function ft(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ut(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function si(e,n){let t=$r[n];t===void 0&&(t=new Int32Array(n),$r[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function iu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function ru(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2fv(this.addr,n),ut(t,n)}}function au(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(ft(t,n))return;e.uniform3fv(this.addr,n),ut(t,n)}}function ou(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4fv(this.addr,n),ut(t,n)}}function su(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;ea.set(i),e.uniformMatrix2fv(this.addr,!1,ea),ut(t,i)}}function lu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;Jr.set(i),e.uniformMatrix3fv(this.addr,!1,Jr),ut(t,i)}}function cu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;Qr.set(i),e.uniformMatrix4fv(this.addr,!1,Qr),ut(t,i)}}function fu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function uu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2iv(this.addr,n),ut(t,n)}}function du(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ft(t,n))return;e.uniform3iv(this.addr,n),ut(t,n)}}function hu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4iv(this.addr,n),ut(t,n)}}function pu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function mu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2uiv(this.addr,n),ut(t,n)}}function _u(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ft(t,n))return;e.uniform3uiv(this.addr,n),ut(t,n)}}function gu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4uiv(this.addr,n),ut(t,n)}}function vu(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l);let r;this.type===e.SAMPLER_2D_SHADOW?(Ui.compareFunction=t.isReversedDepthBuffer()?ki:Gi,r=Ui):r=Ja,t.setTexture2D(n||r,l)}function Su(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTexture3D(n||to,l)}function Eu(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTextureCube(n||no,l)}function xu(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTexture2DArray(n||eo,l)}function bu(e){switch(e){case 5126:return iu;case 35664:return ru;case 35665:return au;case 35666:return ou;case 35674:return su;case 35675:return lu;case 35676:return cu;case 5124:case 35670:return fu;case 35667:case 35671:return uu;case 35668:case 35672:return du;case 35669:case 35673:return hu;case 5125:return pu;case 36294:return mu;case 36295:return _u;case 36296:return gu;case 35678:case 36198:case 36298:case 36306:case 35682:return vu;case 35679:case 36299:case 36307:return Su;case 35680:case 36300:case 36308:case 36293:return Eu;case 36289:case 36303:case 36311:case 36292:return xu}}function Mu(e,n){e.uniform1fv(this.addr,n)}function Tu(e,n){const t=gn(n,this.size,2);e.uniform2fv(this.addr,t)}function Au(e,n){const t=gn(n,this.size,3);e.uniform3fv(this.addr,t)}function wu(e,n){const t=gn(n,this.size,4);e.uniform4fv(this.addr,t)}function Ru(e,n){const t=gn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function yu(e,n){const t=gn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Cu(e,n){const t=gn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Pu(e,n){e.uniform1iv(this.addr,n)}function Du(e,n){e.uniform2iv(this.addr,n)}function Lu(e,n){e.uniform3iv(this.addr,n)}function Uu(e,n){e.uniform4iv(this.addr,n)}function Iu(e,n){e.uniform1uiv(this.addr,n)}function Nu(e,n){e.uniform2uiv(this.addr,n)}function Ou(e,n){e.uniform3uiv(this.addr,n)}function Fu(e,n){e.uniform4uiv(this.addr,n)}function Bu(e,n,t){const i=this.cache,l=n.length,r=si(t,l);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));let a;this.type===e.SAMPLER_2D_SHADOW?a=Ui:a=Ja;for(let s=0;s!==l;++s)t.setTexture2D(n[s]||a,r[s])}function ku(e,n,t){const i=this.cache,l=n.length,r=si(t,l);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==l;++a)t.setTexture3D(n[a]||to,r[a])}function Gu(e,n,t){const i=this.cache,l=n.length,r=si(t,l);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==l;++a)t.setTextureCube(n[a]||no,r[a])}function Hu(e,n,t){const i=this.cache,l=n.length,r=si(t,l);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==l;++a)t.setTexture2DArray(n[a]||eo,r[a])}function Vu(e){switch(e){case 5126:return Mu;case 35664:return Tu;case 35665:return Au;case 35666:return wu;case 35674:return Ru;case 35675:return yu;case 35676:return Cu;case 5124:case 35670:return Pu;case 35667:case 35671:return Du;case 35668:case 35672:return Lu;case 35669:case 35673:return Uu;case 5125:return Iu;case 36294:return Nu;case 36295:return Ou;case 36296:return Fu;case 35678:case 36198:case 36298:case 36306:case 35682:return Bu;case 35679:case 36299:case 36307:return ku;case 35680:case 36300:case 36308:case 36293:return Gu;case 36289:case 36303:case 36311:case 36292:return Hu}}class zu{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bu(t.type)}}class Wu{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vu(t.type)}}class Xu{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const l=this.seq;for(let r=0,a=l.length;r!==a;++r){const s=l[r];s.setValue(n,t[s.id],i)}}}const bi=/(\w+)(\])?(\[|\.)?/g;function ta(e,n){e.seq.push(n),e.map[n.id]=n}function Yu(e,n,t){const i=e.name,l=i.length;for(bi.lastIndex=0;;){const r=bi.exec(i),a=bi.lastIndex;let s=r[1];const _=r[2]==="]",E=r[3];if(_&&(s=s|0),E===void 0||E==="["&&a+2===l){ta(t,E===void 0?new zu(s,e,n):new Wu(s,e,n));break}else{let x=t.map[s];x===void 0&&(x=new Xu(s),ta(t,x)),t=x}}}class Kn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=n.getActiveUniform(t,a),_=n.getUniformLocation(t,s.name);Yu(s,_,this)}const l=[],r=[];for(const a of this.seq)a.type===n.SAMPLER_2D_SHADOW||a.type===n.SAMPLER_CUBE_SHADOW||a.type===n.SAMPLER_2D_ARRAY_SHADOW?l.push(a):r.push(a);l.length>0&&(this.seq=l.concat(r))}setValue(n,t,i,l){const r=this.map[t];r!==void 0&&r.setValue(n,i,l)}setOptional(n,t,i){const l=t[i];l!==void 0&&this.setValue(n,i,l)}static upload(n,t,i,l){for(let r=0,a=t.length;r!==a;++r){const s=t[r],_=i[s.id];_.needsUpdate!==!1&&s.setValue(n,_.value,l)}}static seqWithValue(n,t){const i=[];for(let l=0,r=n.length;l!==r;++l){const a=n[l];a.id in t&&i.push(a)}return i}}function na(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Ku=37297;let qu=0;function Zu(e,n){const t=e.split(`
`),i=[],l=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let a=l;a<r;a++){const s=a+1;i.push(`${s===n?">":" "} ${s}: ${t[a]}`)}return i.join(`
`)}const ia=new Ke;function ju(e){lt._getMatrix(ia,lt.workingColorSpace,e);const n=`mat3( ${ia.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(e)){case Za:return[n,"LinearTransferOETF"];case it:return[n,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function ra(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Zu(e.getShaderSource(n),s)}else return r}function $u(e,n){const t=ju(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Qu={[qa]:"Linear",[Ka]:"Reinhard",[Ya]:"Cineon",[Xa]:"ACESFilmic",[Wa]:"AgX",[za]:"Neutral",[Va]:"Custom"};function Ju(e,n){const t=Qu[n];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gn=new Be;function ed(){lt.getLuminanceCoefficients(Gn);const e=Gn.x.toFixed(4),n=Gn.y.toFixed(4),t=Gn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function td(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bn).join(`
`)}function nd(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function id(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let l=0;l<i;l++){const r=e.getActiveAttrib(n,l),a=r.name;let s=1;r.type===e.FLOAT_MAT2&&(s=2),r.type===e.FLOAT_MAT3&&(s=3),r.type===e.FLOAT_MAT4&&(s=4),t[a]={type:r.type,location:e.getAttribLocation(n,a),locationSize:s}}return t}function bn(e){return e!==""}function aa(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function oa(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const rd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ii(e){return e.replace(rd,od)}const ad=new Map;function od(e,n){let t=ze[n];if(t===void 0){const i=ad.get(n);if(i!==void 0)t=ze[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return Ii(t)}const sd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sa(e){return e.replace(sd,ld)}function ld(e,n,t,i){let l="";for(let r=parseInt(n);r<parseInt(t);r++)l+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return l}function la(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}const cd={[Xn]:"SHADOWMAP_TYPE_PCF",[xn]:"SHADOWMAP_TYPE_VSM"};function fd(e){return cd[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ud={[Pn]:"ENVMAP_TYPE_CUBE",[mn]:"ENVMAP_TYPE_CUBE",[ii]:"ENVMAP_TYPE_CUBE_UV"};function dd(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":ud[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const hd={[mn]:"ENVMAP_MODE_REFRACTION"};function pd(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":hd[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const md={[Vs]:"ENVMAP_BLENDING_MULTIPLY",[Hs]:"ENVMAP_BLENDING_MIX",[Gs]:"ENVMAP_BLENDING_ADD"};function _d(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":md[e.combine]||"ENVMAP_BLENDING_NONE"}function gd(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function vd(e,n,t,i){const l=e.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const _=fd(t),E=dd(t),b=pd(t),x=_d(t),h=gd(t),u=td(t),S=nd(r),g=l.createProgram();let c,o,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(bn).join(`
`),c.length>0&&(c+=`
`),o=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(bn).join(`
`),o.length>0&&(o+=`
`)):(c=[la(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+b:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+_:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bn).join(`
`),o=[la(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+E:"",t.envMap?"#define "+b:"",t.envMap?"#define "+x:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+_:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pt?"#define TONE_MAPPING":"",t.toneMapping!==Pt?ze.tonemapping_pars_fragment:"",t.toneMapping!==Pt?Ju("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,$u("linearToOutputTexel",t.outputColorSpace),ed(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bn).join(`
`)),a=Ii(a),a=aa(a,t),a=oa(a,t),s=Ii(s),s=aa(s,t),s=oa(s,t),a=sa(a),s=sa(s),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,c=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,o=["#define varying in",t.glslVersion===Vr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const A=v+c+a,R=v+o+s,P=na(l,l.VERTEX_SHADER,A),L=na(l,l.FRAGMENT_SHADER,R);l.attachShader(g,P),l.attachShader(g,L),t.index0AttributeName!==void 0?l.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&l.bindAttribLocation(g,0,"position"),l.linkProgram(g);function U(F){if(e.debug.checkShaderErrors){const C=l.getProgramInfoLog(g)||"",N=l.getShaderInfoLog(P)||"",d=l.getShaderInfoLog(L)||"",B=C.trim(),X=N.trim(),O=d.trim();let oe=!0,j=!0;if(l.getProgramParameter(g,l.LINK_STATUS)===!1)if(oe=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(l,g,P,L);else{const ce=ra(l,P,"vertex"),z=ra(l,L,"fragment");rt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(g,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+B+`
`+ce+`
`+z)}else B!==""?tt("WebGLProgram: Program Info Log:",B):(X===""||O==="")&&(j=!1);j&&(F.diagnostics={runnable:oe,programLog:B,vertexShader:{log:X,prefix:c},fragmentShader:{log:O,prefix:o}})}l.deleteShader(P),l.deleteShader(L),M=new Kn(l,g),T=id(l,g)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let K=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=l.getProgramParameter(g,Ku)),K},this.destroy=function(){i.releaseStatesOfProgram(this),l.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qu++,this.cacheKey=n,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=L,this}let Sd=0;class Ed{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,l=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(n);return a.has(l)===!1&&(a.add(l),l.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new xd(n),t.set(n,i)),i}}class xd{constructor(n){this.id=Sd++,this.code=n,this.usedTimes=0}}function bd(e,n,t,i,l,r){const a=new Fs,s=new Ed,_=new Set,E=[],b=new Map,x=i.logarithmicDepthBuffer;let h=i.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return _.add(M),M===0?"uv":`uv${M}`}function g(M,T,K,F,C){const N=F.fog,d=C.geometry,B=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,X=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,O=n.get(M.envMap||B,X),oe=O&&O.mapping===ii?O.image.height:null,j=u[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&tt("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const ce=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,z=ce!==void 0?ce.length:0;let H=0;d.morphAttributes.position!==void 0&&(H=1),d.morphAttributes.normal!==void 0&&(H=2),d.morphAttributes.color!==void 0&&(H=3);let me,he,ue,ee;if(j){const Ze=yt[j];me=Ze.vertexShader,he=Ze.fragmentShader}else me=M.vertexShader,he=M.fragmentShader,s.update(M),ue=s.getVertexShaderID(M),ee=s.getFragmentShaderID(M);const fe=e.getRenderTarget(),se=e.state.buffers.depth.getReversed(),Se=C.isInstancedMesh===!0,Te=C.isBatchedMesh===!0,Ae=!!M.map,qe=!!M.matcap,ke=!!O,f=!!M.aoMap,Y=!!M.lightMap,V=!!M.bumpMap,D=!!M.normalMap,p=!!M.displacementMap,k=!!M.emissiveMap,te=!!M.metalnessMap,re=!!M.roughnessMap,G=M.anisotropy>0,w=M.clearcoat>0,m=M.dispersion>0,I=M.iridescence>0,Z=M.sheen>0,ie=M.transmission>0,$=G&&!!M.anisotropyMap,xe=w&&!!M.clearcoatMap,ge=w&&!!M.clearcoatNormalMap,Pe=w&&!!M.clearcoatRoughnessMap,Fe=I&&!!M.iridescenceMap,le=I&&!!M.iridescenceThicknessMap,pe=Z&&!!M.sheenColorMap,De=Z&&!!M.sheenRoughnessMap,ye=!!M.specularMap,we=!!M.specularColorMap,Ve=!!M.specularIntensityMap,W=ie&&!!M.transmissionMap,ve=ie&&!!M.thicknessMap,_e=!!M.gradientMap,Re=!!M.alphaMap,de=M.alphaTest>0,ae=!!M.alphaHash,Le=!!M.extensions;let Ge=Pt;M.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ge=e.toneMapping);const nt={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:me,fragmentShader:he,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Te,batchingColor:Te&&C._colorsTexture!==null,instancing:Se,instancingColor:Se&&C.instanceColor!==null,instancingMorph:Se&&C.morphTexture!==null,outputColorSpace:fe===null?e.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ni,alphaToCoverage:!!M.alphaToCoverage,map:Ae,matcap:qe,envMap:ke,envMapMode:ke&&O.mapping,envMapCubeUVHeight:oe,aoMap:f,lightMap:Y,bumpMap:V,normalMap:D,displacementMap:p,emissiveMap:k,normalMapObjectSpace:D&&M.normalMapType===Us,normalMapTangentSpace:D&&M.normalMapType===Ls,metalnessMap:te,roughnessMap:re,anisotropy:G,anisotropyMap:$,clearcoat:w,clearcoatMap:xe,clearcoatNormalMap:ge,clearcoatRoughnessMap:Pe,dispersion:m,iridescence:I,iridescenceMap:Fe,iridescenceThicknessMap:le,sheen:Z,sheenColorMap:pe,sheenRoughnessMap:De,specularMap:ye,specularColorMap:we,specularIntensityMap:Ve,transmission:ie,transmissionMap:W,thicknessMap:ve,gradientMap:_e,opaque:M.transparent===!1&&M.blending===Yn&&M.alphaToCoverage===!1,alphaMap:Re,alphaTest:de,alphaHash:ae,combine:M.combine,mapUv:Ae&&S(M.map.channel),aoMapUv:f&&S(M.aoMap.channel),lightMapUv:Y&&S(M.lightMap.channel),bumpMapUv:V&&S(M.bumpMap.channel),normalMapUv:D&&S(M.normalMap.channel),displacementMapUv:p&&S(M.displacementMap.channel),emissiveMapUv:k&&S(M.emissiveMap.channel),metalnessMapUv:te&&S(M.metalnessMap.channel),roughnessMapUv:re&&S(M.roughnessMap.channel),anisotropyMapUv:$&&S(M.anisotropyMap.channel),clearcoatMapUv:xe&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:ge&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&S(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&S(M.sheenRoughnessMap.channel),specularMapUv:ye&&S(M.specularMap.channel),specularColorMapUv:we&&S(M.specularColorMap.channel),specularIntensityMapUv:Ve&&S(M.specularIntensityMap.channel),transmissionMapUv:W&&S(M.transmissionMap.channel),thicknessMapUv:ve&&S(M.thicknessMap.channel),alphaMapUv:Re&&S(M.alphaMap.channel),vertexTangents:!!d.attributes.tangent&&(D||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!d.attributes.color&&d.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!d.attributes.uv&&(Ae||Re),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||d.attributes.normal===void 0&&D===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:se,skinning:C.isSkinnedMesh===!0,morphTargets:d.morphAttributes.position!==void 0,morphNormals:d.morphAttributes.normal!==void 0,morphColors:d.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:H,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&K.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===it,decodeVideoTextureEmissive:k&&M.emissiveMap.isVideoTexture===!0&&lt.getTransfer(M.emissiveMap.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Nt,flipSided:M.side===xt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Le&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&M.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nt.vertexUv1s=_.has(1),nt.vertexUv2s=_.has(2),nt.vertexUv3s=_.has(3),_.clear(),nt}function c(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const K in M.defines)T.push(K),T.push(M.defines[K]);return M.isRawShaderMaterial===!1&&(o(T,M),v(T,M),T.push(e.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function o(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),M.push(a.mask)}function A(M){const T=u[M.type];let K;if(T){const F=yt[T];K=Ds.clone(F.uniforms)}else K=M.uniforms;return K}function R(M,T){let K=b.get(T);return K!==void 0?++K.usedTimes:(K=new vd(e,T,M,l),E.push(K),b.set(T,K)),K}function P(M){if(--M.usedTimes===0){const T=E.indexOf(M);E[T]=E[E.length-1],E.pop(),b.delete(M.cacheKey),M.destroy()}}function L(M){s.remove(M)}function U(){s.dispose()}return{getParameters:g,getProgramCacheKey:c,getUniforms:A,acquireProgram:R,releaseProgram:P,releaseShaderCache:L,programs:E,dispose:U}}function Md(){let e=new WeakMap;function n(a){return e.has(a)}function t(a){let s=e.get(a);return s===void 0&&(s={},e.set(a,s)),s}function i(a){e.delete(a)}function l(a,s,_){e.get(a)[s]=_}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:l,dispose:r}}function Td(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function ca(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function fa(){const e=[];let n=0;const t=[],i=[],l=[];function r(){n=0,t.length=0,i.length=0,l.length=0}function a(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function s(h,u,S,g,c,o){let v=e[n];return v===void 0?(v={id:h.id,object:h,geometry:u,material:S,materialVariant:a(h),groupOrder:g,renderOrder:h.renderOrder,z:c,group:o},e[n]=v):(v.id=h.id,v.object=h,v.geometry=u,v.material=S,v.materialVariant=a(h),v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=c,v.group=o),n++,v}function _(h,u,S,g,c,o){const v=s(h,u,S,g,c,o);S.transmission>0?i.push(v):S.transparent===!0?l.push(v):t.push(v)}function E(h,u,S,g,c,o){const v=s(h,u,S,g,c,o);S.transmission>0?i.unshift(v):S.transparent===!0?l.unshift(v):t.unshift(v)}function b(h,u){t.length>1&&t.sort(h||Td),i.length>1&&i.sort(u||ca),l.length>1&&l.sort(u||ca)}function x(){for(let h=n,u=e.length;h<u;h++){const S=e[h];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:l,init:r,push:_,unshift:E,finish:x,sort:b}}function Ad(){let e=new WeakMap;function n(i,l){const r=e.get(i);let a;return r===void 0?(a=new fa,e.set(i,[a])):l>=r.length?(a=new fa,r.push(a)):a=r[l],a}function t(){e=new WeakMap}return{get:n,dispose:t}}function wd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Be,color:new at};break;case"SpotLight":t={position:new Be,direction:new Be,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Be,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Be,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new Be,halfWidth:new Be,halfHeight:new Be};break}return e[n.id]=t,t}}}function Rd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let yd=0;function Cd(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function Pd(e){const n=new wd,t=Rd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let E=0;E<9;E++)i.probe.push(new Be);const l=new Be,r=new hn,a=new hn;function s(E){let b=0,x=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let u=0,S=0,g=0,c=0,o=0,v=0,A=0,R=0,P=0,L=0,U=0;E.sort(Cd);for(let T=0,K=E.length;T<K;T++){const F=E[T],C=F.color,N=F.intensity,d=F.distance;let B=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Cn?B=F.shadow.map.texture:B=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)b+=C.r*N,x+=C.g*N,h+=C.b*N;else if(F.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(F.sh.coefficients[X],N);U++}else if(F.isDirectionalLight){const X=n.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const O=F.shadow,oe=t.get(F);oe.shadowIntensity=O.intensity,oe.shadowBias=O.bias,oe.shadowNormalBias=O.normalBias,oe.shadowRadius=O.radius,oe.shadowMapSize=O.mapSize,i.directionalShadow[u]=oe,i.directionalShadowMap[u]=B,i.directionalShadowMatrix[u]=F.shadow.matrix,v++}i.directional[u]=X,u++}else if(F.isSpotLight){const X=n.get(F);X.position.setFromMatrixPosition(F.matrixWorld),X.color.copy(C).multiplyScalar(N),X.distance=d,X.coneCos=Math.cos(F.angle),X.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),X.decay=F.decay,i.spot[g]=X;const O=F.shadow;if(F.map&&(i.spotLightMap[P]=F.map,P++,O.updateMatrices(F),F.castShadow&&L++),i.spotLightMatrix[g]=O.matrix,F.castShadow){const oe=t.get(F);oe.shadowIntensity=O.intensity,oe.shadowBias=O.bias,oe.shadowNormalBias=O.normalBias,oe.shadowRadius=O.radius,oe.shadowMapSize=O.mapSize,i.spotShadow[g]=oe,i.spotShadowMap[g]=B,R++}g++}else if(F.isRectAreaLight){const X=n.get(F);X.color.copy(C).multiplyScalar(N),X.halfWidth.set(F.width*.5,0,0),X.halfHeight.set(0,F.height*.5,0),i.rectArea[c]=X,c++}else if(F.isPointLight){const X=n.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),X.distance=F.distance,X.decay=F.decay,F.castShadow){const O=F.shadow,oe=t.get(F);oe.shadowIntensity=O.intensity,oe.shadowBias=O.bias,oe.shadowNormalBias=O.normalBias,oe.shadowRadius=O.radius,oe.shadowMapSize=O.mapSize,oe.shadowCameraNear=O.camera.near,oe.shadowCameraFar=O.camera.far,i.pointShadow[S]=oe,i.pointShadowMap[S]=B,i.pointShadowMatrix[S]=F.shadow.matrix,A++}i.point[S]=X,S++}else if(F.isHemisphereLight){const X=n.get(F);X.skyColor.copy(F.color).multiplyScalar(N),X.groundColor.copy(F.groundColor).multiplyScalar(N),i.hemi[o]=X,o++}}c>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=b,i.ambient[1]=x,i.ambient[2]=h;const M=i.hash;(M.directionalLength!==u||M.pointLength!==S||M.spotLength!==g||M.rectAreaLength!==c||M.hemiLength!==o||M.numDirectionalShadows!==v||M.numPointShadows!==A||M.numSpotShadows!==R||M.numSpotMaps!==P||M.numLightProbes!==U)&&(i.directional.length=u,i.spot.length=g,i.rectArea.length=c,i.point.length=S,i.hemi.length=o,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=R+P-L,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=U,M.directionalLength=u,M.pointLength=S,M.spotLength=g,M.rectAreaLength=c,M.hemiLength=o,M.numDirectionalShadows=v,M.numPointShadows=A,M.numSpotShadows=R,M.numSpotMaps=P,M.numLightProbes=U,i.version=yd++)}function _(E,b){let x=0,h=0,u=0,S=0,g=0;const c=b.matrixWorldInverse;for(let o=0,v=E.length;o<v;o++){const A=E[o];if(A.isDirectionalLight){const R=i.directional[x];R.direction.setFromMatrixPosition(A.matrixWorld),l.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(c),x++}else if(A.isSpotLight){const R=i.spot[u];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(c),R.direction.setFromMatrixPosition(A.matrixWorld),l.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(c),u++}else if(A.isRectAreaLight){const R=i.rectArea[S];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(c),a.identity(),r.copy(A.matrixWorld),r.premultiply(c),a.extractRotation(r),R.halfWidth.set(A.width*.5,0,0),R.halfHeight.set(0,A.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),S++}else if(A.isPointLight){const R=i.point[h];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(c),h++}else if(A.isHemisphereLight){const R=i.hemi[g];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(c),g++}}}return{setup:s,setupView:_,state:i}}function ua(e){const n=new Pd(e),t=[],i=[];function l(b){E.camera=b,t.length=0,i.length=0}function r(b){t.push(b)}function a(b){i.push(b)}function s(){n.setup(t)}function _(b){n.setupView(t,b)}const E={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:l,state:E,setupLights:s,setupLightsView:_,pushLight:r,pushShadow:a}}function Dd(e){let n=new WeakMap;function t(l,r=0){const a=n.get(l);let s;return a===void 0?(s=new ua(e),n.set(l,[s])):r>=a.length?(s=new ua(e),a.push(s)):s=a[r],s}function i(){n=new WeakMap}return{get:t,dispose:i}}const Ld=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ud=`uniform sampler2D shadow_pass;
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
}`,Id=[new Be(1,0,0),new Be(-1,0,0),new Be(0,1,0),new Be(0,-1,0),new Be(0,0,1),new Be(0,0,-1)],Nd=[new Be(0,-1,0),new Be(0,-1,0),new Be(0,0,1),new Be(0,0,-1),new Be(0,-1,0),new Be(0,-1,0)],da=new hn,En=new Be,Mi=new Be;function Od(e,n,t){let i=new Ca;const l=new Qe,r=new Qe,a=new vt,s=new fs,_=new us,E={},b=t.maxTextureSize,x={[Rn]:xt,[xt]:Rn,[Nt]:Nt},h=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Ld,fragmentShader:Ud}),u=h.clone();u.defines.HORIZONTAL_PASS=1;const S=new _n;S.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new bt(S,h),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xn;let o=this.type;this.render=function(L,U,M){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||L.length===0)return;this.type===ds&&(tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xn);const T=e.getRenderTarget(),K=e.getActiveCubeFace(),F=e.getActiveMipmapLevel(),C=e.state;C.setBlending(Bt),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const N=o!==this.type;N&&U.traverse(function(d){d.material&&(Array.isArray(d.material)?d.material.forEach(B=>B.needsUpdate=!0):d.material.needsUpdate=!0)});for(let d=0,B=L.length;d<B;d++){const X=L[d],O=X.shadow;if(O===void 0){tt("WebGLShadowMap:",X,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;l.copy(O.mapSize);const oe=O.getFrameExtents();l.multiply(oe),r.copy(O.mapSize),(l.x>b||l.y>b)&&(l.x>b&&(r.x=Math.floor(b/oe.x),l.x=r.x*oe.x,O.mapSize.x=r.x),l.y>b&&(r.y=Math.floor(b/oe.y),l.y=r.y*oe.y,O.mapSize.y=r.y));const j=e.state.buffers.depth.getReversed();if(O.camera._reversedDepth=j,O.map===null||N===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===xn){if(X.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Dt(l.x,l.y,{format:Cn,type:Xt,minFilter:Et,magFilter:Et,generateMipmaps:!1}),O.map.texture.name=X.name+".shadowMap",O.map.depthTexture=new jn(l.x,l.y,zt),O.map.depthTexture.name=X.name+".shadowMapDepth",O.map.depthTexture.format=pn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ft,O.map.depthTexture.magFilter=Ft}else X.isPointLight?(O.map=new Qa(l.x),O.map.depthTexture=new hs(l.x,Jt)):(O.map=new Dt(l.x,l.y),O.map.depthTexture=new jn(l.x,l.y,Jt)),O.map.depthTexture.name=X.name+".shadowMap",O.map.depthTexture.format=pn,this.type===Xn?(O.map.depthTexture.compareFunction=j?ki:Gi,O.map.depthTexture.minFilter=Et,O.map.depthTexture.magFilter=Et):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ft,O.map.depthTexture.magFilter=Ft);O.camera.updateProjectionMatrix()}const ce=O.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<ce;z++){if(O.map.isWebGLCubeRenderTarget)e.setRenderTarget(O.map,z),e.clear();else{z===0&&(e.setRenderTarget(O.map),e.clear());const H=O.getViewport(z);a.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),C.viewport(a)}if(X.isPointLight){const H=O.camera,me=O.matrix,he=X.distance||H.far;he!==H.far&&(H.far=he,H.updateProjectionMatrix()),En.setFromMatrixPosition(X.matrixWorld),H.position.copy(En),Mi.copy(H.position),Mi.add(Id[z]),H.up.copy(Nd[z]),H.lookAt(Mi),H.updateMatrixWorld(),me.makeTranslation(-En.x,-En.y,-En.z),da.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),O._frustum.setFromProjectionMatrix(da,H.coordinateSystem,H.reversedDepth)}else O.updateMatrices(X);i=O.getFrustum(),R(U,M,O.camera,X,this.type)}O.isPointLightShadow!==!0&&this.type===xn&&v(O,M),O.needsUpdate=!1}o=this.type,c.needsUpdate=!1,e.setRenderTarget(T,K,F)};function v(L,U){const M=n.update(g);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,u.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Dt(l.x,l.y,{format:Cn,type:Xt})),h.uniforms.shadow_pass.value=L.map.depthTexture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,e.setRenderTarget(L.mapPass),e.clear(),e.renderBufferDirect(U,null,M,h,g,null),u.uniforms.shadow_pass.value=L.mapPass.texture,u.uniforms.resolution.value=L.mapSize,u.uniforms.radius.value=L.radius,e.setRenderTarget(L.map),e.clear(),e.renderBufferDirect(U,null,M,u,g,null)}function A(L,U,M,T){let K=null;const F=M.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)K=F;else if(K=M.isPointLight===!0?_:s,e.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const C=K.uuid,N=U.uuid;let d=E[C];d===void 0&&(d={},E[C]=d);let B=d[N];B===void 0&&(B=K.clone(),d[N]=B,U.addEventListener("dispose",P)),K=B}if(K.visible=U.visible,K.wireframe=U.wireframe,T===xn?K.side=U.shadowSide!==null?U.shadowSide:U.side:K.side=U.shadowSide!==null?U.shadowSide:x[U.side],K.alphaMap=U.alphaMap,K.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,K.map=U.map,K.clipShadows=U.clipShadows,K.clippingPlanes=U.clippingPlanes,K.clipIntersection=U.clipIntersection,K.displacementMap=U.displacementMap,K.displacementScale=U.displacementScale,K.displacementBias=U.displacementBias,K.wireframeLinewidth=U.wireframeLinewidth,K.linewidth=U.linewidth,M.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const C=e.properties.get(K);C.light=M}return K}function R(L,U,M,T,K){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&K===xn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,L.matrixWorld);const N=n.update(L),d=L.material;if(Array.isArray(d)){const B=N.groups;for(let X=0,O=B.length;X<O;X++){const oe=B[X],j=d[oe.materialIndex];if(j&&j.visible){const ce=A(L,j,T,K);L.onBeforeShadow(e,L,U,M,N,ce,oe),e.renderBufferDirect(M,null,N,ce,L,oe),L.onAfterShadow(e,L,U,M,N,ce,oe)}}}else if(d.visible){const B=A(L,d,T,K);L.onBeforeShadow(e,L,U,M,N,B,null),e.renderBufferDirect(M,null,N,B,L,null),L.onAfterShadow(e,L,U,M,N,B,null)}}const C=L.children;for(let N=0,d=C.length;N<d;N++)R(C[N],U,M,T,K)}function P(L){L.target.removeEventListener("dispose",P);for(const M in E){const T=E[M],K=L.target.uuid;K in T&&(T[K].dispose(),delete T[K])}}}function Fd(e,n){function t(){let W=!1;const ve=new vt;let _e=null;const Re=new vt(0,0,0,0);return{setMask:function(de){_e!==de&&!W&&(e.colorMask(de,de,de,de),_e=de)},setLocked:function(de){W=de},setClear:function(de,ae,Le,Ge,nt){nt===!0&&(de*=Ge,ae*=Ge,Le*=Ge),ve.set(de,ae,Le,Ge),Re.equals(ve)===!1&&(e.clearColor(de,ae,Le,Ge),Re.copy(ve))},reset:function(){W=!1,_e=null,Re.set(-1,0,0,0)}}}function i(){let W=!1,ve=!1,_e=null,Re=null,de=null;return{setReversed:function(ae){if(ve!==ae){const Le=n.get("EXT_clip_control");ae?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ve=ae;const Ge=de;de=null,this.setClear(Ge)}},getReversed:function(){return ve},setTest:function(ae){ae?fe(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(ae){_e!==ae&&!W&&(e.depthMask(ae),_e=ae)},setFunc:function(ae){if(ve&&(ae=Ws[ae]),Re!==ae){switch(ae){case Rs:e.depthFunc(e.NEVER);break;case ws:e.depthFunc(e.ALWAYS);break;case As:e.depthFunc(e.LESS);break;case rr:e.depthFunc(e.LEQUAL);break;case Ts:e.depthFunc(e.EQUAL);break;case Ms:e.depthFunc(e.GEQUAL);break;case bs:e.depthFunc(e.GREATER);break;case xs:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Re=ae}},setLocked:function(ae){W=ae},setClear:function(ae){de!==ae&&(de=ae,ve&&(ae=1-ae),e.clearDepth(ae))},reset:function(){W=!1,_e=null,Re=null,de=null,ve=!1}}}function l(){let W=!1,ve=null,_e=null,Re=null,de=null,ae=null,Le=null,Ge=null,nt=null;return{setTest:function(Ze){W||(Ze?fe(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(Ze){ve!==Ze&&!W&&(e.stencilMask(Ze),ve=Ze)},setFunc:function(Ze,Ut,It){(_e!==Ze||Re!==Ut||de!==It)&&(e.stencilFunc(Ze,Ut,It),_e=Ze,Re=Ut,de=It)},setOp:function(Ze,Ut,It){(ae!==Ze||Le!==Ut||Ge!==It)&&(e.stencilOp(Ze,Ut,It),ae=Ze,Le=Ut,Ge=It)},setLocked:function(Ze){W=Ze},setClear:function(Ze){nt!==Ze&&(e.clearStencil(Ze),nt=Ze)},reset:function(){W=!1,ve=null,_e=null,Re=null,de=null,ae=null,Le=null,Ge=null,nt=null}}}const r=new t,a=new i,s=new l,_=new WeakMap,E=new WeakMap;let b={},x={},h=new WeakMap,u=[],S=null,g=!1,c=null,o=null,v=null,A=null,R=null,P=null,L=null,U=new at(0,0,0),M=0,T=!1,K=null,F=null,C=null,N=null,d=null;const B=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,O=0;const oe=e.getParameter(e.VERSION);oe.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(oe)[1]),X=O>=1):oe.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),X=O>=2);let j=null,ce={};const z=e.getParameter(e.SCISSOR_BOX),H=e.getParameter(e.VIEWPORT),me=new vt().fromArray(z),he=new vt().fromArray(H);function ue(W,ve,_e,Re){const de=new Uint8Array(4),ae=e.createTexture();e.bindTexture(W,ae),e.texParameteri(W,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(W,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Le=0;Le<_e;Le++)W===e.TEXTURE_3D||W===e.TEXTURE_2D_ARRAY?e.texImage3D(ve,0,e.RGBA,1,1,Re,0,e.RGBA,e.UNSIGNED_BYTE,de):e.texImage2D(ve+Le,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,de);return ae}const ee={};ee[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),ee[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ee[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),fe(e.DEPTH_TEST),a.setFunc(rr),V(!1),D(Fr),fe(e.CULL_FACE),f(Bt);function fe(W){b[W]!==!0&&(e.enable(W),b[W]=!0)}function se(W){b[W]!==!1&&(e.disable(W),b[W]=!1)}function Se(W,ve){return x[W]!==ve?(e.bindFramebuffer(W,ve),x[W]=ve,W===e.DRAW_FRAMEBUFFER&&(x[e.FRAMEBUFFER]=ve),W===e.FRAMEBUFFER&&(x[e.DRAW_FRAMEBUFFER]=ve),!0):!1}function Te(W,ve){let _e=u,Re=!1;if(W){_e=h.get(ve),_e===void 0&&(_e=[],h.set(ve,_e));const de=W.textures;if(_e.length!==de.length||_e[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,Le=de.length;ae<Le;ae++)_e[ae]=e.COLOR_ATTACHMENT0+ae;_e.length=de.length,Re=!0}}else _e[0]!==e.BACK&&(_e[0]=e.BACK,Re=!0);Re&&e.drawBuffers(_e)}function Ae(W){return S!==W?(e.useProgram(W),S=W,!0):!1}const qe={[vn]:e.FUNC_ADD,[ko]:e.FUNC_SUBTRACT,[Bo]:e.FUNC_REVERSE_SUBTRACT};qe[Xs]=e.MIN,qe[Ys]=e.MAX;const ke={[es]:e.ZERO,[Jo]:e.ONE,[Qo]:e.SRC_COLOR,[$o]:e.SRC_ALPHA,[jo]:e.SRC_ALPHA_SATURATE,[Zo]:e.DST_COLOR,[qo]:e.DST_ALPHA,[Ko]:e.ONE_MINUS_SRC_COLOR,[Yo]:e.ONE_MINUS_SRC_ALPHA,[Xo]:e.ONE_MINUS_DST_COLOR,[Wo]:e.ONE_MINUS_DST_ALPHA,[zo]:e.CONSTANT_COLOR,[Vo]:e.ONE_MINUS_CONSTANT_COLOR,[Ho]:e.CONSTANT_ALPHA,[Go]:e.ONE_MINUS_CONSTANT_ALPHA};function f(W,ve,_e,Re,de,ae,Le,Ge,nt,Ze){if(W===Bt){g===!0&&(se(e.BLEND),g=!1);return}if(g===!1&&(fe(e.BLEND),g=!0),W!==Ps){if(W!==c||Ze!==T){if((o!==vn||R!==vn)&&(e.blendEquation(e.FUNC_ADD),o=vn,R=vn),Ze)switch(W){case Yn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gr:e.blendFunc(e.ONE,e.ONE);break;case kr:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Br:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:rt("WebGLState: Invalid blending: ",W);break}else switch(W){case Yn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case kr:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Br:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",W);break}v=null,A=null,P=null,L=null,U.set(0,0,0),M=0,c=W,T=Ze}return}de=de||ve,ae=ae||_e,Le=Le||Re,(ve!==o||de!==R)&&(e.blendEquationSeparate(qe[ve],qe[de]),o=ve,R=de),(_e!==v||Re!==A||ae!==P||Le!==L)&&(e.blendFuncSeparate(ke[_e],ke[Re],ke[ae],ke[Le]),v=_e,A=Re,P=ae,L=Le),(Ge.equals(U)===!1||nt!==M)&&(e.blendColor(Ge.r,Ge.g,Ge.b,nt),U.copy(Ge),M=nt),c=W,T=!1}function Y(W,ve){W.side===Nt?se(e.CULL_FACE):fe(e.CULL_FACE);let _e=W.side===xt;ve&&(_e=!_e),V(_e),W.blending===Yn&&W.transparent===!1?f(Bt):f(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);const Re=W.stencilWrite;s.setTest(Re),Re&&(s.setMask(W.stencilWriteMask),s.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),s.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),k(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function V(W){K!==W&&(W?e.frontFace(e.CW):e.frontFace(e.CCW),K=W)}function D(W){W!==ys?(fe(e.CULL_FACE),W!==F&&(W===Fr?e.cullFace(e.BACK):W===Cs?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):se(e.CULL_FACE),F=W}function p(W){W!==C&&(X&&e.lineWidth(W),C=W)}function k(W,ve,_e){W?(fe(e.POLYGON_OFFSET_FILL),(N!==ve||d!==_e)&&(N=ve,d=_e,a.getReversed()&&(ve=-ve),e.polygonOffset(ve,_e))):se(e.POLYGON_OFFSET_FILL)}function te(W){W?fe(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function re(W){W===void 0&&(W=e.TEXTURE0+B-1),j!==W&&(e.activeTexture(W),j=W)}function G(W,ve,_e){_e===void 0&&(j===null?_e=e.TEXTURE0+B-1:_e=j);let Re=ce[_e];Re===void 0&&(Re={type:void 0,texture:void 0},ce[_e]=Re),(Re.type!==W||Re.texture!==ve)&&(j!==_e&&(e.activeTexture(_e),j=_e),e.bindTexture(W,ve||ee[W]),Re.type=W,Re.texture=ve)}function w(){const W=ce[j];W!==void 0&&W.type!==void 0&&(e.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function m(){try{e.compressedTexImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function Z(){try{e.texSubImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function ie(){try{e.texSubImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function $(){try{e.compressedTexSubImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function xe(){try{e.compressedTexSubImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function ge(){try{e.texStorage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function Pe(){try{e.texStorage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function Fe(){try{e.texImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function le(){try{e.texImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function pe(W){me.equals(W)===!1&&(e.scissor(W.x,W.y,W.z,W.w),me.copy(W))}function De(W){he.equals(W)===!1&&(e.viewport(W.x,W.y,W.z,W.w),he.copy(W))}function ye(W,ve){let _e=E.get(ve);_e===void 0&&(_e=new WeakMap,E.set(ve,_e));let Re=_e.get(W);Re===void 0&&(Re=e.getUniformBlockIndex(ve,W.name),_e.set(W,Re))}function we(W,ve){const Re=E.get(ve).get(W);_.get(ve)!==Re&&(e.uniformBlockBinding(ve,Re,W.__bindingPointIndex),_.set(ve,Re))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),b={},j=null,ce={},x={},h=new WeakMap,u=[],S=null,g=!1,c=null,o=null,v=null,A=null,R=null,P=null,L=null,U=new at(0,0,0),M=0,T=!1,K=null,F=null,C=null,N=null,d=null,me.set(0,0,e.canvas.width,e.canvas.height),he.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),s.reset()}return{buffers:{color:r,depth:a,stencil:s},enable:fe,disable:se,bindFramebuffer:Se,drawBuffers:Te,useProgram:Ae,setBlending:f,setMaterial:Y,setFlipSided:V,setCullFace:D,setLineWidth:p,setPolygonOffset:k,setScissorTest:te,activeTexture:re,bindTexture:G,unbindTexture:w,compressedTexImage2D:m,compressedTexImage3D:I,texImage2D:Fe,texImage3D:le,updateUBOMapping:ye,uniformBlockBinding:we,texStorage2D:ge,texStorage3D:Pe,texSubImage2D:Z,texSubImage3D:ie,compressedTexSubImage2D:$,compressedTexSubImage3D:xe,scissor:pe,viewport:De,reset:Ve}}function Bd(e,n,t,i,l,r,a){const s=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new Qe,b=new WeakMap;let x;const h=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,m){return u?new OffscreenCanvas(w,m):ks("canvas")}function g(w,m,I){let Z=1;const ie=G(w);if((ie.width>I||ie.height>I)&&(Z=I/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(Z*ie.width),xe=Math.floor(Z*ie.height);x===void 0&&(x=S($,xe));const ge=m?S($,xe):x;return ge.width=$,ge.height=xe,ge.getContext("2d").drawImage(w,0,0,$,xe),tt("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+$+"x"+xe+")."),ge}else return"data"in w&&tt("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),w;return w}function c(w){return w.generateMipmaps}function o(w){e.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(w,m,I,Z,ie=!1){if(w!==null){if(e[w]!==void 0)return e[w];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=m;if(m===e.RED&&(I===e.FLOAT&&($=e.R32F),I===e.HALF_FLOAT&&($=e.R16F),I===e.UNSIGNED_BYTE&&($=e.R8)),m===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&($=e.R8UI),I===e.UNSIGNED_SHORT&&($=e.R16UI),I===e.UNSIGNED_INT&&($=e.R32UI),I===e.BYTE&&($=e.R8I),I===e.SHORT&&($=e.R16I),I===e.INT&&($=e.R32I)),m===e.RG&&(I===e.FLOAT&&($=e.RG32F),I===e.HALF_FLOAT&&($=e.RG16F),I===e.UNSIGNED_BYTE&&($=e.RG8)),m===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&($=e.RG8UI),I===e.UNSIGNED_SHORT&&($=e.RG16UI),I===e.UNSIGNED_INT&&($=e.RG32UI),I===e.BYTE&&($=e.RG8I),I===e.SHORT&&($=e.RG16I),I===e.INT&&($=e.RG32I)),m===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&($=e.RGB8UI),I===e.UNSIGNED_SHORT&&($=e.RGB16UI),I===e.UNSIGNED_INT&&($=e.RGB32UI),I===e.BYTE&&($=e.RGB8I),I===e.SHORT&&($=e.RGB16I),I===e.INT&&($=e.RGB32I)),m===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&($=e.RGBA8UI),I===e.UNSIGNED_SHORT&&($=e.RGBA16UI),I===e.UNSIGNED_INT&&($=e.RGBA32UI),I===e.BYTE&&($=e.RGBA8I),I===e.SHORT&&($=e.RGBA16I),I===e.INT&&($=e.RGBA32I)),m===e.RGB&&(I===e.UNSIGNED_INT_5_9_9_9_REV&&($=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&($=e.R11F_G11F_B10F)),m===e.RGBA){const xe=ie?Za:lt.getTransfer(Z);I===e.FLOAT&&($=e.RGBA32F),I===e.HALF_FLOAT&&($=e.RGBA16F),I===e.UNSIGNED_BYTE&&($=xe===it?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&($=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&($=e.RGB5_A1)}return($===e.R16F||$===e.R32F||$===e.RG16F||$===e.RG32F||$===e.RGBA16F||$===e.RGBA32F)&&n.get("EXT_color_buffer_float"),$}function R(w,m){let I;return w?m===null||m===Jt||m===yn?I=e.DEPTH24_STENCIL8:m===zt?I=e.DEPTH32F_STENCIL8:m===$n&&(I=e.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Jt||m===yn?I=e.DEPTH_COMPONENT24:m===zt?I=e.DEPTH_COMPONENT32F:m===$n&&(I=e.DEPTH_COMPONENT16),I}function P(w,m){return c(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ft&&w.minFilter!==Et?Math.log2(Math.max(m.width,m.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?m.mipmaps.length:1}function L(w){const m=w.target;m.removeEventListener("dispose",L),M(m),m.isVideoTexture&&b.delete(m)}function U(w){const m=w.target;m.removeEventListener("dispose",U),K(m)}function M(w){const m=i.get(w);if(m.__webglInit===void 0)return;const I=w.source,Z=h.get(I);if(Z){const ie=Z[m.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(w),Object.keys(Z).length===0&&h.delete(I)}i.remove(w)}function T(w){const m=i.get(w);e.deleteTexture(m.__webglTexture);const I=w.source,Z=h.get(I);delete Z[m.__cacheKey],a.memory.textures--}function K(w){const m=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(m.__webglFramebuffer[Z]))for(let ie=0;ie<m.__webglFramebuffer[Z].length;ie++)e.deleteFramebuffer(m.__webglFramebuffer[Z][ie]);else e.deleteFramebuffer(m.__webglFramebuffer[Z]);m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer[Z])}else{if(Array.isArray(m.__webglFramebuffer))for(let Z=0;Z<m.__webglFramebuffer.length;Z++)e.deleteFramebuffer(m.__webglFramebuffer[Z]);else e.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&e.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let Z=0;Z<m.__webglColorRenderbuffer.length;Z++)m.__webglColorRenderbuffer[Z]&&e.deleteRenderbuffer(m.__webglColorRenderbuffer[Z]);m.__webglDepthRenderbuffer&&e.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const I=w.textures;for(let Z=0,ie=I.length;Z<ie;Z++){const $=i.get(I[Z]);$.__webglTexture&&(e.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(I[Z])}i.remove(w)}let F=0;function C(){F=0}function N(){const w=F;return w>=l.maxTextures&&tt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),F+=1,w}function d(w){const m=[];return m.push(w.wrapS),m.push(w.wrapT),m.push(w.wrapR||0),m.push(w.magFilter),m.push(w.minFilter),m.push(w.anisotropy),m.push(w.internalFormat),m.push(w.format),m.push(w.type),m.push(w.generateMipmaps),m.push(w.premultiplyAlpha),m.push(w.flipY),m.push(w.unpackAlignment),m.push(w.colorSpace),m.join()}function B(w,m){const I=i.get(w);if(w.isVideoTexture&&te(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&I.__version!==w.version){const Z=w.image;if(Z===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(I,w,m);return}}else w.isExternalTexture&&(I.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+m)}function X(w,m){const I=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){ee(I,w,m);return}else w.isExternalTexture&&(I.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+m)}function O(w,m){const I=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){ee(I,w,m);return}t.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+m)}function oe(w,m){const I=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&I.__version!==w.version){fe(I,w,m);return}t.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+m)}const j={[ns]:e.REPEAT,[Ci]:e.CLAMP_TO_EDGE,[ts]:e.MIRRORED_REPEAT},ce={[Ft]:e.NEAREST,[is]:e.NEAREST_MIPMAP_NEAREST,[Bn]:e.NEAREST_MIPMAP_LINEAR,[Et]:e.LINEAR,[ui]:e.LINEAR_MIPMAP_NEAREST,[sn]:e.LINEAR_MIPMAP_LINEAR},z={[cs]:e.NEVER,[ls]:e.ALWAYS,[ss]:e.LESS,[Gi]:e.LEQUAL,[os]:e.EQUAL,[ki]:e.GEQUAL,[as]:e.GREATER,[rs]:e.NOTEQUAL};function H(w,m){if(m.type===zt&&n.has("OES_texture_float_linear")===!1&&(m.magFilter===Et||m.magFilter===ui||m.magFilter===Bn||m.magFilter===sn||m.minFilter===Et||m.minFilter===ui||m.minFilter===Bn||m.minFilter===sn)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,j[m.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,j[m.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,j[m.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,ce[m.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,ce[m.minFilter]),m.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,z[m.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Ft||m.minFilter!==Bn&&m.minFilter!==sn||m.type===zt&&n.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const I=n.get("EXT_texture_filter_anisotropic");e.texParameterf(w,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,l.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function me(w,m){let I=!1;w.__webglInit===void 0&&(w.__webglInit=!0,m.addEventListener("dispose",L));const Z=m.source;let ie=h.get(Z);ie===void 0&&(ie={},h.set(Z,ie));const $=d(m);if($!==w.__cacheKey){ie[$]===void 0&&(ie[$]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,I=!0),ie[$].usedTimes++;const xe=ie[w.__cacheKey];xe!==void 0&&(ie[w.__cacheKey].usedTimes--,xe.usedTimes===0&&T(m)),w.__cacheKey=$,w.__webglTexture=ie[$].texture}return I}function he(w,m,I){return Math.floor(Math.floor(w/I)/m)}function ue(w,m,I,Z){const $=w.updateRanges;if($.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,m.width,m.height,I,Z,m.data);else{$.sort((le,pe)=>le.start-pe.start);let xe=0;for(let le=1;le<$.length;le++){const pe=$[xe],De=$[le],ye=pe.start+pe.count,we=he(De.start,m.width,4),Ve=he(pe.start,m.width,4);De.start<=ye+1&&we===Ve&&he(De.start+De.count-1,m.width,4)===we?pe.count=Math.max(pe.count,De.start+De.count-pe.start):(++xe,$[xe]=De)}$.length=xe+1;const ge=e.getParameter(e.UNPACK_ROW_LENGTH),Pe=e.getParameter(e.UNPACK_SKIP_PIXELS),Fe=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,m.width);for(let le=0,pe=$.length;le<pe;le++){const De=$[le],ye=Math.floor(De.start/4),we=Math.ceil(De.count/4),Ve=ye%m.width,W=Math.floor(ye/m.width),ve=we,_e=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ve),e.pixelStorei(e.UNPACK_SKIP_ROWS,W),t.texSubImage2D(e.TEXTURE_2D,0,Ve,W,ve,_e,I,Z,m.data)}w.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ge),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Pe),e.pixelStorei(e.UNPACK_SKIP_ROWS,Fe)}}function ee(w,m,I){let Z=e.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(Z=e.TEXTURE_2D_ARRAY),m.isData3DTexture&&(Z=e.TEXTURE_3D);const ie=me(w,m),$=m.source;t.bindTexture(Z,w.__webglTexture,e.TEXTURE0+I);const xe=i.get($);if($.version!==xe.__version||ie===!0){t.activeTexture(e.TEXTURE0+I);const ge=lt.getPrimaries(lt.workingColorSpace),Pe=m.colorSpace===an?null:lt.getPrimaries(m.colorSpace),Fe=m.colorSpace===an||ge===Pe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let le=g(m.image,!1,l.maxTextureSize);le=re(m,le);const pe=r.convert(m.format,m.colorSpace),De=r.convert(m.type);let ye=A(m.internalFormat,pe,De,m.colorSpace,m.isVideoTexture);H(Z,m);let we;const Ve=m.mipmaps,W=m.isVideoTexture!==!0,ve=xe.__version===void 0||ie===!0,_e=$.dataReady,Re=P(m,le);if(m.isDepthTexture)ye=R(m.format===ln,m.type),ve&&(W?t.texStorage2D(e.TEXTURE_2D,1,ye,le.width,le.height):t.texImage2D(e.TEXTURE_2D,0,ye,le.width,le.height,0,pe,De,null));else if(m.isDataTexture)if(Ve.length>0){W&&ve&&t.texStorage2D(e.TEXTURE_2D,Re,ye,Ve[0].width,Ve[0].height);for(let de=0,ae=Ve.length;de<ae;de++)we=Ve[de],W?_e&&t.texSubImage2D(e.TEXTURE_2D,de,0,0,we.width,we.height,pe,De,we.data):t.texImage2D(e.TEXTURE_2D,de,ye,we.width,we.height,0,pe,De,we.data);m.generateMipmaps=!1}else W?(ve&&t.texStorage2D(e.TEXTURE_2D,Re,ye,le.width,le.height),_e&&ue(m,le,pe,De)):t.texImage2D(e.TEXTURE_2D,0,ye,le.width,le.height,0,pe,De,le.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){W&&ve&&t.texStorage3D(e.TEXTURE_2D_ARRAY,Re,ye,Ve[0].width,Ve[0].height,le.depth);for(let de=0,ae=Ve.length;de<ae;de++)if(we=Ve[de],m.format!==Ot)if(pe!==null)if(W){if(_e)if(m.layerUpdates.size>0){const Le=Hr(we.width,we.height,m.format,m.type);for(const Ge of m.layerUpdates){const nt=we.data.subarray(Ge*Le/we.data.BYTES_PER_ELEMENT,(Ge+1)*Le/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,de,0,0,Ge,we.width,we.height,1,pe,nt)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,de,0,0,0,we.width,we.height,le.depth,pe,we.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,de,ye,we.width,we.height,le.depth,0,we.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?_e&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,de,0,0,0,we.width,we.height,le.depth,pe,De,we.data):t.texImage3D(e.TEXTURE_2D_ARRAY,de,ye,we.width,we.height,le.depth,0,pe,De,we.data)}else{W&&ve&&t.texStorage2D(e.TEXTURE_2D,Re,ye,Ve[0].width,Ve[0].height);for(let de=0,ae=Ve.length;de<ae;de++)we=Ve[de],m.format!==Ot?pe!==null?W?_e&&t.compressedTexSubImage2D(e.TEXTURE_2D,de,0,0,we.width,we.height,pe,we.data):t.compressedTexImage2D(e.TEXTURE_2D,de,ye,we.width,we.height,0,we.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?_e&&t.texSubImage2D(e.TEXTURE_2D,de,0,0,we.width,we.height,pe,De,we.data):t.texImage2D(e.TEXTURE_2D,de,ye,we.width,we.height,0,pe,De,we.data)}else if(m.isDataArrayTexture)if(W){if(ve&&t.texStorage3D(e.TEXTURE_2D_ARRAY,Re,ye,le.width,le.height,le.depth),_e)if(m.layerUpdates.size>0){const de=Hr(le.width,le.height,m.format,m.type);for(const ae of m.layerUpdates){const Le=le.data.subarray(ae*de/le.data.BYTES_PER_ELEMENT,(ae+1)*de/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ae,le.width,le.height,1,pe,De,Le)}m.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,pe,De,le.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,ye,le.width,le.height,le.depth,0,pe,De,le.data);else if(m.isData3DTexture)W?(ve&&t.texStorage3D(e.TEXTURE_3D,Re,ye,le.width,le.height,le.depth),_e&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,pe,De,le.data)):t.texImage3D(e.TEXTURE_3D,0,ye,le.width,le.height,le.depth,0,pe,De,le.data);else if(m.isFramebufferTexture){if(ve)if(W)t.texStorage2D(e.TEXTURE_2D,Re,ye,le.width,le.height);else{let de=le.width,ae=le.height;for(let Le=0;Le<Re;Le++)t.texImage2D(e.TEXTURE_2D,Le,ye,de,ae,0,pe,De,null),de>>=1,ae>>=1}}else if(Ve.length>0){if(W&&ve){const de=G(Ve[0]);t.texStorage2D(e.TEXTURE_2D,Re,ye,de.width,de.height)}for(let de=0,ae=Ve.length;de<ae;de++)we=Ve[de],W?_e&&t.texSubImage2D(e.TEXTURE_2D,de,0,0,pe,De,we):t.texImage2D(e.TEXTURE_2D,de,ye,pe,De,we);m.generateMipmaps=!1}else if(W){if(ve){const de=G(le);t.texStorage2D(e.TEXTURE_2D,Re,ye,de.width,de.height)}_e&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,pe,De,le)}else t.texImage2D(e.TEXTURE_2D,0,ye,pe,De,le);c(m)&&o(Z),xe.__version=$.version,m.onUpdate&&m.onUpdate(m)}w.__version=m.version}function fe(w,m,I){if(m.image.length!==6)return;const Z=me(w,m),ie=m.source;t.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+I);const $=i.get(ie);if(ie.version!==$.__version||Z===!0){t.activeTexture(e.TEXTURE0+I);const xe=lt.getPrimaries(lt.workingColorSpace),ge=m.colorSpace===an?null:lt.getPrimaries(m.colorSpace),Pe=m.colorSpace===an||xe===ge?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Fe=m.isCompressedTexture||m.image[0].isCompressedTexture,le=m.image[0]&&m.image[0].isDataTexture,pe=[];for(let ae=0;ae<6;ae++)!Fe&&!le?pe[ae]=g(m.image[ae],!0,l.maxCubemapSize):pe[ae]=le?m.image[ae].image:m.image[ae],pe[ae]=re(m,pe[ae]);const De=pe[0],ye=r.convert(m.format,m.colorSpace),we=r.convert(m.type),Ve=A(m.internalFormat,ye,we,m.colorSpace),W=m.isVideoTexture!==!0,ve=$.__version===void 0||Z===!0,_e=ie.dataReady;let Re=P(m,De);H(e.TEXTURE_CUBE_MAP,m);let de;if(Fe){W&&ve&&t.texStorage2D(e.TEXTURE_CUBE_MAP,Re,Ve,De.width,De.height);for(let ae=0;ae<6;ae++){de=pe[ae].mipmaps;for(let Le=0;Le<de.length;Le++){const Ge=de[Le];m.format!==Ot?ye!==null?W?_e&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,Ge.width,Ge.height,ye,Ge.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,Ve,Ge.width,Ge.height,0,Ge.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?_e&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,Ge.width,Ge.height,ye,we,Ge.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,Ve,Ge.width,Ge.height,0,ye,we,Ge.data)}}}else{if(de=m.mipmaps,W&&ve){de.length>0&&Re++;const ae=G(pe[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,Re,Ve,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(le){W?_e&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,pe[ae].width,pe[ae].height,ye,we,pe[ae].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ve,pe[ae].width,pe[ae].height,0,ye,we,pe[ae].data);for(let Le=0;Le<de.length;Le++){const nt=de[Le].image[ae].image;W?_e&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,nt.width,nt.height,ye,we,nt.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,Ve,nt.width,nt.height,0,ye,we,nt.data)}}else{W?_e&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ye,we,pe[ae]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ve,ye,we,pe[ae]);for(let Le=0;Le<de.length;Le++){const Ge=de[Le];W?_e&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,ye,we,Ge.image[ae]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,Ve,ye,we,Ge.image[ae])}}}c(m)&&o(e.TEXTURE_CUBE_MAP),$.__version=ie.version,m.onUpdate&&m.onUpdate(m)}w.__version=m.version}function se(w,m,I,Z,ie,$){const xe=r.convert(I.format,I.colorSpace),ge=r.convert(I.type),Pe=A(I.internalFormat,xe,ge,I.colorSpace),Fe=i.get(m),le=i.get(I);if(le.__renderTarget=m,!Fe.__hasExternalTextures){const pe=Math.max(1,m.width>>$),De=Math.max(1,m.height>>$);ie===e.TEXTURE_3D||ie===e.TEXTURE_2D_ARRAY?t.texImage3D(ie,$,Pe,pe,De,m.depth,0,xe,ge,null):t.texImage2D(ie,$,Pe,pe,De,0,xe,ge,null)}t.bindFramebuffer(e.FRAMEBUFFER,w),k(m)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,ie,le.__webglTexture,0,p(m)):(ie===e.TEXTURE_2D||ie>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Z,ie,le.__webglTexture,$),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(w,m,I){if(e.bindRenderbuffer(e.RENDERBUFFER,w),m.depthBuffer){const Z=m.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,$=R(m.stencilBuffer,ie),xe=m.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;k(m)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,p(m),$,m.width,m.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,p(m),$,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,$,m.width,m.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,xe,e.RENDERBUFFER,w)}else{const Z=m.textures;for(let ie=0;ie<Z.length;ie++){const $=Z[ie],xe=r.convert($.format,$.colorSpace),ge=r.convert($.type),Pe=A($.internalFormat,xe,ge,$.colorSpace);k(m)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,p(m),Pe,m.width,m.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,p(m),Pe,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,Pe,m.width,m.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(w,m,I){const Z=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,w),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(m.depthTexture);if(ie.__renderTarget=m,(!ie.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),Z){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,m.depthTexture.addEventListener("dispose",L)),ie.__webglTexture===void 0){ie.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,ie.__webglTexture),H(e.TEXTURE_CUBE_MAP,m.depthTexture);const Fe=r.convert(m.depthTexture.format),le=r.convert(m.depthTexture.type);let pe;m.depthTexture.format===pn?pe=e.DEPTH_COMPONENT24:m.depthTexture.format===ln&&(pe=e.DEPTH24_STENCIL8);for(let De=0;De<6;De++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,pe,m.width,m.height,0,Fe,le,null)}}else B(m.depthTexture,0);const $=ie.__webglTexture,xe=p(m),ge=Z?e.TEXTURE_CUBE_MAP_POSITIVE_X+I:e.TEXTURE_2D,Pe=m.depthTexture.format===ln?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(m.depthTexture.format===pn)k(m)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Pe,ge,$,0,xe):e.framebufferTexture2D(e.FRAMEBUFFER,Pe,ge,$,0);else if(m.depthTexture.format===ln)k(m)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Pe,ge,$,0,xe):e.framebufferTexture2D(e.FRAMEBUFFER,Pe,ge,$,0);else throw new Error("Unknown depthTexture format")}function Ae(w){const m=i.get(w),I=w.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),Z){const ie=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),m.__depthDisposeCallback=ie}m.__boundDepthTexture=Z}if(w.depthTexture&&!m.__autoAllocateDepthBuffer)if(I)for(let Z=0;Z<6;Z++)Te(m.__webglFramebuffer[Z],w,Z);else{const Z=w.texture.mipmaps;Z&&Z.length>0?Te(m.__webglFramebuffer[0],w,0):Te(m.__webglFramebuffer,w,0)}else if(I){m.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[Z]),m.__webglDepthbuffer[Z]===void 0)m.__webglDepthbuffer[Z]=e.createRenderbuffer(),Se(m.__webglDepthbuffer[Z],w,!1);else{const ie=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=m.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,$),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,$)}}else{const Z=w.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=e.createRenderbuffer(),Se(m.__webglDepthbuffer,w,!1);else{const ie=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=m.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,$),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,$)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function qe(w,m,I){const Z=i.get(w);m!==void 0&&se(Z.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&Ae(w)}function ke(w){const m=w.texture,I=i.get(w),Z=i.get(m);w.addEventListener("dispose",U);const ie=w.textures,$=w.isWebGLCubeRenderTarget===!0,xe=ie.length>1;if(xe||(Z.__webglTexture===void 0&&(Z.__webglTexture=e.createTexture()),Z.__version=m.version,a.memory.textures++),$){I.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(m.mipmaps&&m.mipmaps.length>0){I.__webglFramebuffer[ge]=[];for(let Pe=0;Pe<m.mipmaps.length;Pe++)I.__webglFramebuffer[ge][Pe]=e.createFramebuffer()}else I.__webglFramebuffer[ge]=e.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){I.__webglFramebuffer=[];for(let ge=0;ge<m.mipmaps.length;ge++)I.__webglFramebuffer[ge]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(xe)for(let ge=0,Pe=ie.length;ge<Pe;ge++){const Fe=i.get(ie[ge]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=e.createTexture(),a.memory.textures++)}if(w.samples>0&&k(w)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ge=0;ge<ie.length;ge++){const Pe=ie[ge];I.__webglColorRenderbuffer[ge]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[ge]);const Fe=r.convert(Pe.format,Pe.colorSpace),le=r.convert(Pe.type),pe=A(Pe.internalFormat,Fe,le,Pe.colorSpace,w.isXRRenderTarget===!0),De=p(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,De,pe,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,I.__webglColorRenderbuffer[ge])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),Se(I.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if($){t.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),H(e.TEXTURE_CUBE_MAP,m);for(let ge=0;ge<6;ge++)if(m.mipmaps&&m.mipmaps.length>0)for(let Pe=0;Pe<m.mipmaps.length;Pe++)se(I.__webglFramebuffer[ge][Pe],w,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe);else se(I.__webglFramebuffer[ge],w,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);c(m)&&o(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ge=0,Pe=ie.length;ge<Pe;ge++){const Fe=ie[ge],le=i.get(Fe);let pe=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pe=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(pe,le.__webglTexture),H(pe,Fe),se(I.__webglFramebuffer,w,Fe,e.COLOR_ATTACHMENT0+ge,pe,0),c(Fe)&&o(pe)}t.unbindTexture()}else{let ge=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ge=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ge,Z.__webglTexture),H(ge,m),m.mipmaps&&m.mipmaps.length>0)for(let Pe=0;Pe<m.mipmaps.length;Pe++)se(I.__webglFramebuffer[Pe],w,m,e.COLOR_ATTACHMENT0,ge,Pe);else se(I.__webglFramebuffer,w,m,e.COLOR_ATTACHMENT0,ge,0);c(m)&&o(ge),t.unbindTexture()}w.depthBuffer&&Ae(w)}function f(w){const m=w.textures;for(let I=0,Z=m.length;I<Z;I++){const ie=m[I];if(c(ie)){const $=v(w),xe=i.get(ie).__webglTexture;t.bindTexture($,xe),o($),t.unbindTexture()}}}const Y=[],V=[];function D(w){if(w.samples>0){if(k(w)===!1){const m=w.textures,I=w.width,Z=w.height;let ie=e.COLOR_BUFFER_BIT;const $=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=i.get(w),ge=m.length>1;if(ge)for(let Fe=0;Fe<m.length;Fe++)t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Fe,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Fe,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Pe=w.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Fe=0;Fe<m.length;Fe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ie|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ie|=e.STENCIL_BUFFER_BIT)),ge){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,xe.__webglColorRenderbuffer[Fe]);const le=i.get(m[Fe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,le,0)}e.blitFramebuffer(0,0,I,Z,0,0,I,Z,ie,e.NEAREST),_===!0&&(Y.length=0,V.length=0,Y.push(e.COLOR_ATTACHMENT0+Fe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Y.push($),V.push($),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,V)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Y))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ge)for(let Fe=0;Fe<m.length;Fe++){t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Fe,e.RENDERBUFFER,xe.__webglColorRenderbuffer[Fe]);const le=i.get(m[Fe]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Fe,e.TEXTURE_2D,le,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&_){const m=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[m])}}}function p(w){return Math.min(l.maxSamples,w.samples)}function k(w){const m=i.get(w);return w.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function te(w){const m=a.render.frame;b.get(w)!==m&&(b.set(w,m),w.update())}function re(w,m){const I=w.colorSpace,Z=w.format,ie=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||I!==ni&&I!==an&&(lt.getTransfer(I)===it?(Z!==Ot||ie!==Ct)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",I)),m}function G(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(E.width=w.naturalWidth||w.width,E.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(E.width=w.displayWidth,E.height=w.displayHeight):(E.width=w.width,E.height=w.height),E}this.allocateTextureUnit=N,this.resetTextureUnits=C,this.setTexture2D=B,this.setTexture2DArray=X,this.setTexture3D=O,this.setTextureCube=oe,this.rebindTextures=qe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=f,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=se,this.useMultisampledRTT=k,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function kd(e,n){function t(i,l=an){let r;const a=lt.getTransfer(l);if(i===Ct)return e.UNSIGNED_BYTE;if(i===Na)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Oa)return e.UNSIGNED_SHORT_5_5_5_1;if(i===ps)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===ms)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===_s)return e.BYTE;if(i===gs)return e.SHORT;if(i===$n)return e.UNSIGNED_SHORT;if(i===Ba)return e.INT;if(i===Jt)return e.UNSIGNED_INT;if(i===zt)return e.FLOAT;if(i===Xt)return e.HALF_FLOAT;if(i===vs)return e.ALPHA;if(i===Ss)return e.RGB;if(i===Ot)return e.RGBA;if(i===pn)return e.DEPTH_COMPONENT;if(i===ln)return e.DEPTH_STENCIL;if(i===Es)return e.RED;if(i===Ia)return e.RED_INTEGER;if(i===Cn)return e.RG;if(i===Ua)return e.RG_INTEGER;if(i===La)return e.RGBA_INTEGER;if(i===di||i===hi||i===pi||i===mi)if(a===it)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===di)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===di)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pi)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mi)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ar||i===or||i===sr||i===lr)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ar)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===or)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cr||i===fr||i===ur||i===dr||i===hr||i===pr||i===mr)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cr||i===fr)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ur)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===dr)return r.COMPRESSED_R11_EAC;if(i===hr)return r.COMPRESSED_SIGNED_R11_EAC;if(i===pr)return r.COMPRESSED_RG11_EAC;if(i===mr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_r||i===gr||i===vr||i===Sr||i===Er||i===xr||i===br||i===Mr||i===Tr||i===Ar||i===wr||i===Rr||i===yr||i===Cr)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_r)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Er)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===br)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ar)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pr||i===Dr||i===Lr)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===Pr)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ur||i===Ir||i===Nr||i===Or)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ur)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ir)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Or)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Gd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hd=`
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

}`;class Vd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Fa(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new kt({vertexShader:Gd,fragmentShader:Hd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Hi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zd extends Io{constructor(n,t){super();const i=this;let l=null,r=1,a=null,s="local-floor",_=1,E=null,b=null,x=null,h=null,u=null,S=null;const g=typeof XRWebGLBinding<"u",c=new Vd,o={},v=t.getContextAttributes();let A=null,R=null;const P=[],L=[],U=new Qe;let M=null;const T=new Wn;T.viewport=new vt;const K=new Wn;K.viewport=new vt;const F=[T,K],C=new No;let N=null,d=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=P[ee];return fe===void 0&&(fe=new fi,P[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=P[ee];return fe===void 0&&(fe=new fi,P[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=P[ee];return fe===void 0&&(fe=new fi,P[ee]=fe),fe.getHandSpace()};function B(ee){const fe=L.indexOf(ee.inputSource);if(fe===-1)return;const se=P[fe];se!==void 0&&(se.update(ee.inputSource,ee.frame,E||a),se.dispatchEvent({type:ee.type,data:ee.inputSource}))}function X(){l.removeEventListener("select",B),l.removeEventListener("selectstart",B),l.removeEventListener("selectend",B),l.removeEventListener("squeeze",B),l.removeEventListener("squeezestart",B),l.removeEventListener("squeezeend",B),l.removeEventListener("end",X),l.removeEventListener("inputsourceschange",O);for(let ee=0;ee<P.length;ee++){const fe=L[ee];fe!==null&&(L[ee]=null,P[ee].disconnect(fe))}N=null,d=null,c.reset();for(const ee in o)delete o[ee];n.setRenderTarget(A),u=null,h=null,x=null,l=null,R=null,ue.stop(),i.isPresenting=!1,n.setPixelRatio(M),n.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){s=ee,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return E||a},this.setReferenceSpace=function(ee){E=ee},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return x===null&&g&&(x=new XRWebGLBinding(l,t)),x},this.getFrame=function(){return S},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(A=n.getRenderTarget(),l.addEventListener("select",B),l.addEventListener("selectstart",B),l.addEventListener("selectend",B),l.addEventListener("squeeze",B),l.addEventListener("squeezestart",B),l.addEventListener("squeezeend",B),l.addEventListener("end",X),l.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=n.getPixelRatio(),n.getSize(U),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Se=null,Te=null;v.depth&&(Te=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=v.stencil?ln:pn,Se=v.stencil?yn:Jt);const Ae={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};x=this.getBinding(),h=x.createProjectionLayer(Ae),l.updateRenderState({layers:[h]}),n.setPixelRatio(1),n.setSize(h.textureWidth,h.textureHeight,!1),R=new Dt(h.textureWidth,h.textureHeight,{format:Ot,type:Ct,depthTexture:new jn(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:v.stencil,colorSpace:n.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(l,t,se),l.updateRenderState({baseLayer:u}),n.setPixelRatio(1),n.setSize(u.framebufferWidth,u.framebufferHeight,!1),R=new Dt(u.framebufferWidth,u.framebufferHeight,{format:Ot,type:Ct,colorSpace:n.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(_),E=null,a=await l.requestReferenceSpace(s),ue.setContext(l),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function O(ee){for(let fe=0;fe<ee.removed.length;fe++){const se=ee.removed[fe],Se=L.indexOf(se);Se>=0&&(L[Se]=null,P[Se].disconnect(se))}for(let fe=0;fe<ee.added.length;fe++){const se=ee.added[fe];let Se=L.indexOf(se);if(Se===-1){for(let Ae=0;Ae<P.length;Ae++)if(Ae>=L.length){L.push(se),Se=Ae;break}else if(L[Ae]===null){L[Ae]=se,Se=Ae;break}if(Se===-1)break}const Te=P[Se];Te&&Te.connect(se)}}const oe=new Be,j=new Be;function ce(ee,fe,se){oe.setFromMatrixPosition(fe.matrixWorld),j.setFromMatrixPosition(se.matrixWorld);const Se=oe.distanceTo(j),Te=fe.projectionMatrix.elements,Ae=se.projectionMatrix.elements,qe=Te[14]/(Te[10]-1),ke=Te[14]/(Te[10]+1),f=(Te[9]+1)/Te[5],Y=(Te[9]-1)/Te[5],V=(Te[8]-1)/Te[0],D=(Ae[8]+1)/Ae[0],p=qe*V,k=qe*D,te=Se/(-V+D),re=te*-V;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(re),ee.translateZ(te),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Te[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const G=qe+te,w=ke+te,m=p-re,I=k+(Se-re),Z=f*ke/w*G,ie=Y*ke/w*G;ee.projectionMatrix.makePerspective(m,I,Z,ie,G,w),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function z(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let fe=ee.near,se=ee.far;c.texture!==null&&(c.depthNear>0&&(fe=c.depthNear),c.depthFar>0&&(se=c.depthFar)),C.near=K.near=T.near=fe,C.far=K.far=T.far=se,(N!==C.near||d!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),N=C.near,d=C.far),C.layers.mask=ee.layers.mask|6,T.layers.mask=C.layers.mask&-5,K.layers.mask=C.layers.mask&-3;const Se=ee.parent,Te=C.cameras;z(C,Se);for(let Ae=0;Ae<Te.length;Ae++)z(Te[Ae],Se);Te.length===2?ce(C,T,K):C.projectionMatrix.copy(T.projectionMatrix),H(ee,C,Se)};function H(ee,fe,se){se===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(se.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Oo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&u===null))return _},this.setFoveation=function(ee){_=ee,h!==null&&(h.fixedFoveation=ee),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ee)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(C)},this.getCameraTexture=function(ee){return o[ee]};let me=null;function he(ee,fe){if(b=fe.getViewerPose(E||a),S=fe,b!==null){const se=b.views;u!==null&&(n.setRenderTargetFramebuffer(R,u.framebuffer),n.setRenderTarget(R));let Se=!1;se.length!==C.cameras.length&&(C.cameras.length=0,Se=!0);for(let ke=0;ke<se.length;ke++){const f=se[ke];let Y=null;if(u!==null)Y=u.getViewport(f);else{const D=x.getViewSubImage(h,f);Y=D.viewport,ke===0&&(n.setRenderTargetTextures(R,D.colorTexture,D.depthStencilTexture),n.setRenderTarget(R))}let V=F[ke];V===void 0&&(V=new Wn,V.layers.enable(ke),V.viewport=new vt,F[ke]=V),V.matrix.fromArray(f.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(f.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Y.x,Y.y,Y.width,Y.height),ke===0&&(C.matrix.copy(V.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Se===!0&&C.cameras.push(V)}const Te=l.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&g){x=i.getBinding();const ke=x.getDepthInformation(se[0]);ke&&ke.isValid&&ke.texture&&c.init(ke,l.renderState)}if(Te&&Te.includes("camera-access")&&g){n.state.unbindTexture(),x=i.getBinding();for(let ke=0;ke<se.length;ke++){const f=se[ke].camera;if(f){let Y=o[f];Y||(Y=new Fa,o[f]=Y);const V=x.getCameraImage(f);Y.sourceTexture=V}}}}for(let se=0;se<P.length;se++){const Se=L[se],Te=P[se];Se!==null&&Te!==void 0&&Te.update(Se,fe,E||a)}me&&me(ee,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),S=null}const ue=new $a;ue.setAnimationLoop(he),this.setAnimationLoop=function(ee){me=ee},this.dispose=function(){}}}const Zt=new ai,Wd=new hn;function Xd(e,n){function t(c,o){c.matrixAutoUpdate===!0&&c.updateMatrix(),o.value.copy(c.matrix)}function i(c,o){o.color.getRGB(c.fogColor.value,Ga(e)),o.isFog?(c.fogNear.value=o.near,c.fogFar.value=o.far):o.isFogExp2&&(c.fogDensity.value=o.density)}function l(c,o,v,A,R){o.isMeshBasicMaterial?r(c,o):o.isMeshLambertMaterial?(r(c,o),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)):o.isMeshToonMaterial?(r(c,o),x(c,o)):o.isMeshPhongMaterial?(r(c,o),b(c,o),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)):o.isMeshStandardMaterial?(r(c,o),h(c,o),o.isMeshPhysicalMaterial&&u(c,o,R)):o.isMeshMatcapMaterial?(r(c,o),S(c,o)):o.isMeshDepthMaterial?r(c,o):o.isMeshDistanceMaterial?(r(c,o),g(c,o)):o.isMeshNormalMaterial?r(c,o):o.isLineBasicMaterial?(a(c,o),o.isLineDashedMaterial&&s(c,o)):o.isPointsMaterial?_(c,o,v,A):o.isSpriteMaterial?E(c,o):o.isShadowMaterial?(c.color.value.copy(o.color),c.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}function r(c,o){c.opacity.value=o.opacity,o.color&&c.diffuse.value.copy(o.color),o.emissive&&c.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(c.map.value=o.map,t(o.map,c.mapTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.bumpMap&&(c.bumpMap.value=o.bumpMap,t(o.bumpMap,c.bumpMapTransform),c.bumpScale.value=o.bumpScale,o.side===xt&&(c.bumpScale.value*=-1)),o.normalMap&&(c.normalMap.value=o.normalMap,t(o.normalMap,c.normalMapTransform),c.normalScale.value.copy(o.normalScale),o.side===xt&&c.normalScale.value.negate()),o.displacementMap&&(c.displacementMap.value=o.displacementMap,t(o.displacementMap,c.displacementMapTransform),c.displacementScale.value=o.displacementScale,c.displacementBias.value=o.displacementBias),o.emissiveMap&&(c.emissiveMap.value=o.emissiveMap,t(o.emissiveMap,c.emissiveMapTransform)),o.specularMap&&(c.specularMap.value=o.specularMap,t(o.specularMap,c.specularMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest);const v=n.get(o),A=v.envMap,R=v.envMapRotation;A&&(c.envMap.value=A,Zt.copy(R),Zt.x*=-1,Zt.y*=-1,Zt.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Zt.y*=-1,Zt.z*=-1),c.envMapRotation.value.setFromMatrix4(Wd.makeRotationFromEuler(Zt)),c.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=o.reflectivity,c.ior.value=o.ior,c.refractionRatio.value=o.refractionRatio),o.lightMap&&(c.lightMap.value=o.lightMap,c.lightMapIntensity.value=o.lightMapIntensity,t(o.lightMap,c.lightMapTransform)),o.aoMap&&(c.aoMap.value=o.aoMap,c.aoMapIntensity.value=o.aoMapIntensity,t(o.aoMap,c.aoMapTransform))}function a(c,o){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,o.map&&(c.map.value=o.map,t(o.map,c.mapTransform))}function s(c,o){c.dashSize.value=o.dashSize,c.totalSize.value=o.dashSize+o.gapSize,c.scale.value=o.scale}function _(c,o,v,A){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,c.size.value=o.size*v,c.scale.value=A*.5,o.map&&(c.map.value=o.map,t(o.map,c.uvTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest)}function E(c,o){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,c.rotation.value=o.rotation,o.map&&(c.map.value=o.map,t(o.map,c.mapTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest)}function b(c,o){c.specular.value.copy(o.specular),c.shininess.value=Math.max(o.shininess,1e-4)}function x(c,o){o.gradientMap&&(c.gradientMap.value=o.gradientMap)}function h(c,o){c.metalness.value=o.metalness,o.metalnessMap&&(c.metalnessMap.value=o.metalnessMap,t(o.metalnessMap,c.metalnessMapTransform)),c.roughness.value=o.roughness,o.roughnessMap&&(c.roughnessMap.value=o.roughnessMap,t(o.roughnessMap,c.roughnessMapTransform)),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)}function u(c,o,v){c.ior.value=o.ior,o.sheen>0&&(c.sheenColor.value.copy(o.sheenColor).multiplyScalar(o.sheen),c.sheenRoughness.value=o.sheenRoughness,o.sheenColorMap&&(c.sheenColorMap.value=o.sheenColorMap,t(o.sheenColorMap,c.sheenColorMapTransform)),o.sheenRoughnessMap&&(c.sheenRoughnessMap.value=o.sheenRoughnessMap,t(o.sheenRoughnessMap,c.sheenRoughnessMapTransform))),o.clearcoat>0&&(c.clearcoat.value=o.clearcoat,c.clearcoatRoughness.value=o.clearcoatRoughness,o.clearcoatMap&&(c.clearcoatMap.value=o.clearcoatMap,t(o.clearcoatMap,c.clearcoatMapTransform)),o.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=o.clearcoatRoughnessMap,t(o.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),o.clearcoatNormalMap&&(c.clearcoatNormalMap.value=o.clearcoatNormalMap,t(o.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(o.clearcoatNormalScale),o.side===xt&&c.clearcoatNormalScale.value.negate())),o.dispersion>0&&(c.dispersion.value=o.dispersion),o.iridescence>0&&(c.iridescence.value=o.iridescence,c.iridescenceIOR.value=o.iridescenceIOR,c.iridescenceThicknessMinimum.value=o.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=o.iridescenceThicknessRange[1],o.iridescenceMap&&(c.iridescenceMap.value=o.iridescenceMap,t(o.iridescenceMap,c.iridescenceMapTransform)),o.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=o.iridescenceThicknessMap,t(o.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),o.transmission>0&&(c.transmission.value=o.transmission,c.transmissionSamplerMap.value=v.texture,c.transmissionSamplerSize.value.set(v.width,v.height),o.transmissionMap&&(c.transmissionMap.value=o.transmissionMap,t(o.transmissionMap,c.transmissionMapTransform)),c.thickness.value=o.thickness,o.thicknessMap&&(c.thicknessMap.value=o.thicknessMap,t(o.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=o.attenuationDistance,c.attenuationColor.value.copy(o.attenuationColor)),o.anisotropy>0&&(c.anisotropyVector.value.set(o.anisotropy*Math.cos(o.anisotropyRotation),o.anisotropy*Math.sin(o.anisotropyRotation)),o.anisotropyMap&&(c.anisotropyMap.value=o.anisotropyMap,t(o.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=o.specularIntensity,c.specularColor.value.copy(o.specularColor),o.specularColorMap&&(c.specularColorMap.value=o.specularColorMap,t(o.specularColorMap,c.specularColorMapTransform)),o.specularIntensityMap&&(c.specularIntensityMap.value=o.specularIntensityMap,t(o.specularIntensityMap,c.specularIntensityMapTransform))}function S(c,o){o.matcap&&(c.matcap.value=o.matcap)}function g(c,o){const v=n.get(o).light;c.referencePosition.value.setFromMatrixPosition(v.matrixWorld),c.nearDistance.value=v.shadow.camera.near,c.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:l}}function Yd(e,n,t,i){let l={},r={},a=[];const s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function _(v,A){const R=A.program;i.uniformBlockBinding(v,R)}function E(v,A){let R=l[v.id];R===void 0&&(S(v),R=b(v),l[v.id]=R,v.addEventListener("dispose",c));const P=A.program;i.updateUBOMapping(v,P);const L=n.render.frame;r[v.id]!==L&&(h(v),r[v.id]=L)}function b(v){const A=x();v.__bindingPointIndex=A;const R=e.createBuffer(),P=v.__size,L=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,R),e.bufferData(e.UNIFORM_BUFFER,P,L),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,R),R}function x(){for(let v=0;v<s;v++)if(a.indexOf(v)===-1)return a.push(v),v;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const A=l[v.id],R=v.uniforms,P=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let L=0,U=R.length;L<U;L++){const M=Array.isArray(R[L])?R[L]:[R[L]];for(let T=0,K=M.length;T<K;T++){const F=M[T];if(u(F,L,T,P)===!0){const C=F.__offset,N=Array.isArray(F.value)?F.value:[F.value];let d=0;for(let B=0;B<N.length;B++){const X=N[B],O=g(X);typeof X=="number"||typeof X=="boolean"?(F.__data[0]=X,e.bufferSubData(e.UNIFORM_BUFFER,C+d,F.__data)):X.isMatrix3?(F.__data[0]=X.elements[0],F.__data[1]=X.elements[1],F.__data[2]=X.elements[2],F.__data[3]=0,F.__data[4]=X.elements[3],F.__data[5]=X.elements[4],F.__data[6]=X.elements[5],F.__data[7]=0,F.__data[8]=X.elements[6],F.__data[9]=X.elements[7],F.__data[10]=X.elements[8],F.__data[11]=0):(X.toArray(F.__data,d),d+=O.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,C,F.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(v,A,R,P){const L=v.value,U=A+"_"+R;if(P[U]===void 0)return typeof L=="number"||typeof L=="boolean"?P[U]=L:P[U]=L.clone(),!0;{const M=P[U];if(typeof L=="number"||typeof L=="boolean"){if(M!==L)return P[U]=L,!0}else if(M.equals(L)===!1)return M.copy(L),!0}return!1}function S(v){const A=v.uniforms;let R=0;const P=16;for(let U=0,M=A.length;U<M;U++){const T=Array.isArray(A[U])?A[U]:[A[U]];for(let K=0,F=T.length;K<F;K++){const C=T[K],N=Array.isArray(C.value)?C.value:[C.value];for(let d=0,B=N.length;d<B;d++){const X=N[d],O=g(X),oe=R%P,j=oe%O.boundary,ce=oe+j;R+=j,ce!==0&&P-ce<O.storage&&(R+=P-ce),C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=R,R+=O.storage}}}const L=R%P;return L>0&&(R+=P-L),v.__size=R,v.__cache={},this}function g(v){const A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):tt("WebGLRenderer: Unsupported uniform value type.",v),A}function c(v){const A=v.target;A.removeEventListener("dispose",c);const R=a.indexOf(A.__bindingPointIndex);a.splice(R,1),e.deleteBuffer(l[A.id]),delete l[A.id],delete r[A.id]}function o(){for(const v in l)e.deleteBuffer(l[v]);a=[],l={},r={}}return{bind:_,update:E,dispose:o}}const Kd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rt=null;function qd(){return Rt===null&&(Rt=new Fo(Kd,16,16,Cn,Xt),Rt.name="DFG_LUT",Rt.minFilter=Et,Rt.magFilter=Et,Rt.wrapS=Ci,Rt.wrapT=Ci,Rt.generateMipmaps=!1,Rt.needsUpdate=!0),Rt}class Zd{constructor(n={}){const{canvas:t=Po(),context:i=null,depth:l=!0,stencil:r=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:E=!1,powerPreference:b="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:h=!1,outputBufferType:u=Ct}=n;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=a;const g=u,c=new Set([La,Ua,Ia]),o=new Set([Ct,Jt,$n,yn,Na,Oa]),v=new Uint32Array(4),A=new Int32Array(4);let R=null,P=null;const L=[],U=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let K=!1;this._outputColorSpace=ya;let F=0,C=0,N=null,d=-1,B=null;const X=new vt,O=new vt;let oe=null;const j=new at(0);let ce=0,z=t.width,H=t.height,me=1,he=null,ue=null;const ee=new vt(0,0,z,H),fe=new vt(0,0,z,H);let se=!1;const Se=new Ca;let Te=!1,Ae=!1;const qe=new hn,ke=new Be,f=new vt,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let V=!1;function D(){return N===null?me:1}let p=i;function k(y,q){return t.getContext(y,q)}try{const y={alpha:!0,depth:l,stencil:r,antialias:s,premultipliedAlpha:_,preserveDrawingBuffer:E,powerPreference:b,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Do}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",nt,!1),p===null){const q="webgl2";if(p=k(q,y),p===null)throw k(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw rt("WebGLRenderer: "+y.message),y}let te,re,G,w,m,I,Z,ie,$,xe,ge,Pe,Fe,le,pe,De,ye,we,Ve,W,ve,_e,Re;function de(){te=new Zf(p),te.init(),ve=new kd(p,te),re=new Hf(p,te,n,ve),G=new Fd(p,te),re.reversedDepthBuffer&&h&&G.buffers.depth.setReversed(!0),w=new Qf(p),m=new Md,I=new Bd(p,te,G,m,re,ve,w),Z=new qf(T),ie=new nl(p),_e=new kf(p,ie),$=new jf(p,ie,w,_e),xe=new eu(p,$,ie,_e,w),we=new Jf(p,re,I),pe=new Vf(m),ge=new bd(T,Z,te,re,_e,pe),Pe=new Xd(T,m),Fe=new Ad,le=new Dd(te),ye=new Bf(T,Z,G,xe,S,_),De=new Od(T,xe,re),Re=new Yd(p,w,re,G),Ve=new Gf(p,te,w),W=new $f(p,te,w),w.programs=ge.programs,T.capabilities=re,T.extensions=te,T.properties=m,T.renderLists=Fe,T.shadowMap=De,T.state=G,T.info=w}de(),g!==Ct&&(M=new nu(g,t.width,t.height,l,r));const ae=new zd(T,p);this.xr=ae,this.getContext=function(){return p},this.getContextAttributes=function(){return p.getContextAttributes()},this.forceContextLoss=function(){const y=te.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=te.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(y){y!==void 0&&(me=y,this.setSize(z,H,!1))},this.getSize=function(y){return y.set(z,H)},this.setSize=function(y,q,ne=!0){if(ae.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}z=y,H=q,t.width=Math.floor(y*me),t.height=Math.floor(q*me),ne===!0&&(t.style.width=y+"px",t.style.height=q+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,y,q)},this.getDrawingBufferSize=function(y){return y.set(z*me,H*me).floor()},this.setDrawingBufferSize=function(y,q,ne){z=y,H=q,me=ne,t.width=Math.floor(y*ne),t.height=Math.floor(q*ne),this.setViewport(0,0,y,q)},this.setEffects=function(y){if(g===Ct){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let q=0;q<y.length;q++)if(y[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(X)},this.getViewport=function(y){return y.copy(ee)},this.setViewport=function(y,q,ne,J){y.isVector4?ee.set(y.x,y.y,y.z,y.w):ee.set(y,q,ne,J),G.viewport(X.copy(ee).multiplyScalar(me).round())},this.getScissor=function(y){return y.copy(fe)},this.setScissor=function(y,q,ne,J){y.isVector4?fe.set(y.x,y.y,y.z,y.w):fe.set(y,q,ne,J),G.scissor(O.copy(fe).multiplyScalar(me).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(y){G.setScissorTest(se=y)},this.setOpaqueSort=function(y){he=y},this.setTransparentSort=function(y){ue=y},this.getClearColor=function(y){return y.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(y=!0,q=!0,ne=!0){let J=0;if(y){let Q=!1;if(N!==null){const be=N.texture.format;Q=c.has(be)}if(Q){const be=N.texture.type,Ce=o.has(be),Me=ye.getClearColor(),Ue=ye.getClearAlpha(),Ne=Me.r,He=Me.g,We=Me.b;Ce?(v[0]=Ne,v[1]=He,v[2]=We,v[3]=Ue,p.clearBufferuiv(p.COLOR,0,v)):(A[0]=Ne,A[1]=He,A[2]=We,A[3]=Ue,p.clearBufferiv(p.COLOR,0,A))}else J|=p.COLOR_BUFFER_BIT}q&&(J|=p.DEPTH_BUFFER_BIT),ne&&(J|=p.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&p.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),ye.dispose(),Fe.dispose(),le.dispose(),m.dispose(),Z.dispose(),xe.dispose(),_e.dispose(),Re.dispose(),ge.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",qi),ae.removeEventListener("sessionend",Zi),Yt.stop()};function Le(y){y.preventDefault(),nr("WebGLRenderer: Context Lost."),K=!0}function Ge(){nr("WebGLRenderer: Context Restored."),K=!1;const y=w.autoReset,q=De.enabled,ne=De.autoUpdate,J=De.needsUpdate,Q=De.type;de(),w.autoReset=y,De.enabled=q,De.autoUpdate=ne,De.needsUpdate=J,De.type=Q}function nt(y){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ze(y){const q=y.target;q.removeEventListener("dispose",Ze),Ut(q)}function Ut(y){It(y),m.remove(y)}function It(y){const q=m.get(y).programs;q!==void 0&&(q.forEach(function(ne){ge.releaseProgram(ne)}),y.isShaderMaterial&&ge.releaseShaderCache(y))}this.renderBufferDirect=function(y,q,ne,J,Q,be){q===null&&(q=Y);const Ce=Q.isMesh&&Q.matrixWorld.determinant()<0,Me=To(y,q,ne,J,Q);G.setMaterial(J,Ce);let Ue=ne.index,Ne=1;if(J.wireframe===!0){if(Ue=$.getWireframeAttribute(ne),Ue===void 0)return;Ne=2}const He=ne.drawRange,We=ne.attributes.position;let Oe=He.start*Ne,je=(He.start+He.count)*Ne;be!==null&&(Oe=Math.max(Oe,be.start*Ne),je=Math.min(je,(be.start+be.count)*Ne)),Ue!==null?(Oe=Math.max(Oe,0),je=Math.min(je,Ue.count)):We!=null&&(Oe=Math.max(Oe,0),je=Math.min(je,We.count));const st=je-Oe;if(st<0||st===1/0)return;_e.setup(Q,J,Me,ne,Ue);let ot,$e=Ve;if(Ue!==null&&(ot=ie.get(Ue),$e=W,$e.setIndex(ot)),Q.isMesh)J.wireframe===!0?(G.setLineWidth(J.wireframeLinewidth*D()),$e.setMode(p.LINES)):$e.setMode(p.TRIANGLES);else if(Q.isLine){let mt=J.linewidth;mt===void 0&&(mt=1),G.setLineWidth(mt*D()),Q.isLineSegments?$e.setMode(p.LINES):Q.isLineLoop?$e.setMode(p.LINE_LOOP):$e.setMode(p.LINE_STRIP)}else Q.isPoints?$e.setMode(p.POINTS):Q.isSprite&&$e.setMode(p.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Pa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))$e.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const mt=Q._multiDrawStarts,Ie=Q._multiDrawCounts,St=Q._multiDrawCount,Ye=Ue?ie.get(Ue).bytesPerElement:1,Tt=m.get(J).currentProgram.getUniforms();for(let wt=0;wt<St;wt++)Tt.setValue(p,"_gl_DrawID",wt),$e.render(mt[wt]/Ye,Ie[wt])}else if(Q.isInstancedMesh)$e.renderInstances(Oe,st,Q.count);else if(ne.isInstancedBufferGeometry){const mt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ie=Math.min(ne.instanceCount,mt);$e.renderInstances(Oe,st,Ie)}else $e.render(Oe,st)};function Ki(y,q,ne){y.transparent===!0&&y.side===Nt&&y.forceSinglePass===!1?(y.side=xt,y.needsUpdate=!0,Fn(y,q,ne),y.side=Rn,y.needsUpdate=!0,Fn(y,q,ne),y.side=Nt):Fn(y,q,ne)}this.compile=function(y,q,ne=null){ne===null&&(ne=y),P=le.get(ne),P.init(q),U.push(P),ne.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),y!==ne&&y.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),P.setupLights();const J=new Set;return y.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const be=Q.material;if(be)if(Array.isArray(be))for(let Ce=0;Ce<be.length;Ce++){const Me=be[Ce];Ki(Me,ne,Q),J.add(Me)}else Ki(be,ne,Q),J.add(be)}),P=U.pop(),J},this.compileAsync=function(y,q,ne=null){const J=this.compile(y,q,ne);return new Promise(Q=>{function be(){if(J.forEach(function(Ce){m.get(Ce).currentProgram.isReady()&&J.delete(Ce)}),J.size===0){Q(y);return}setTimeout(be,10)}te.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let li=null;function Mo(y){li&&li(y)}function qi(){Yt.stop()}function Zi(){Yt.start()}const Yt=new $a;Yt.setAnimationLoop(Mo),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(y){li=y,ae.setAnimationLoop(y),y===null?Yt.stop():Yt.start()},ae.addEventListener("sessionstart",qi),ae.addEventListener("sessionend",Zi),this.render=function(y,q){if(q!==void 0&&q.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;const ne=ae.enabled===!0&&ae.isPresenting===!0,J=M!==null&&(N===null||ne)&&M.begin(T,N);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(q),q=ae.getCamera()),y.isScene===!0&&y.onBeforeRender(T,y,q,N),P=le.get(y,U.length),P.init(q),U.push(P),qe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Se.setFromProjectionMatrix(qe,ir,q.reversedDepth),Ae=this.localClippingEnabled,Te=pe.init(this.clippingPlanes,Ae),R=Fe.get(y,L.length),R.init(),L.push(R),ae.enabled===!0&&ae.isPresenting===!0){const Ce=T.xr.getDepthSensingMesh();Ce!==null&&ci(Ce,q,-1/0,T.sortObjects)}ci(y,q,0,T.sortObjects),R.finish(),T.sortObjects===!0&&R.sort(he,ue),V=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,V&&ye.addToRenderList(R,y),this.info.render.frame++,Te===!0&&pe.beginShadows();const Q=P.state.shadowsArray;if(De.render(Q,y,q),Te===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&M.hasRenderPass())===!1){const Ce=R.opaque,Me=R.transmissive;if(P.setupLights(),q.isArrayCamera){const Ue=q.cameras;if(Me.length>0)for(let Ne=0,He=Ue.length;Ne<He;Ne++){const We=Ue[Ne];$i(Ce,Me,y,We)}V&&ye.render(y);for(let Ne=0,He=Ue.length;Ne<He;Ne++){const We=Ue[Ne];ji(R,y,We,We.viewport)}}else Me.length>0&&$i(Ce,Me,y,q),V&&ye.render(y),ji(R,y,q)}N!==null&&C===0&&(I.updateMultisampleRenderTarget(N),I.updateRenderTargetMipmap(N)),J&&M.end(T),y.isScene===!0&&y.onAfterRender(T,y,q),_e.resetDefaultState(),d=-1,B=null,U.pop(),U.length>0?(P=U[U.length-1],Te===!0&&pe.setGlobalState(T.clippingPlanes,P.state.camera)):P=null,L.pop(),L.length>0?R=L[L.length-1]:R=null};function ci(y,q,ne,J){if(y.visible===!1)return;if(y.layers.test(q.layers)){if(y.isGroup)ne=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(q);else if(y.isLight)P.pushLight(y),y.castShadow&&P.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Se.intersectsSprite(y)){J&&f.setFromMatrixPosition(y.matrixWorld).applyMatrix4(qe);const Ce=xe.update(y),Me=y.material;Me.visible&&R.push(y,Ce,Me,ne,f.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Se.intersectsObject(y))){const Ce=xe.update(y),Me=y.material;if(J&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),f.copy(y.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),f.copy(Ce.boundingSphere.center)),f.applyMatrix4(y.matrixWorld).applyMatrix4(qe)),Array.isArray(Me)){const Ue=Ce.groups;for(let Ne=0,He=Ue.length;Ne<He;Ne++){const We=Ue[Ne],Oe=Me[We.materialIndex];Oe&&Oe.visible&&R.push(y,Ce,Oe,ne,f.z,We)}}else Me.visible&&R.push(y,Ce,Me,ne,f.z,null)}}const be=y.children;for(let Ce=0,Me=be.length;Ce<Me;Ce++)ci(be[Ce],q,ne,J)}function ji(y,q,ne,J){const{opaque:Q,transmissive:be,transparent:Ce}=y;P.setupLightsView(ne),Te===!0&&pe.setGlobalState(T.clippingPlanes,ne),J&&G.viewport(X.copy(J)),Q.length>0&&On(Q,q,ne),be.length>0&&On(be,q,ne),Ce.length>0&&On(Ce,q,ne),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function $i(y,q,ne,J){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[J.id]===void 0){const Oe=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[J.id]=new Dt(1,1,{generateMipmaps:!0,type:Oe?Xt:Ct,minFilter:sn,samples:Math.max(4,re.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const be=P.state.transmissionRenderTarget[J.id],Ce=J.viewport||X;be.setSize(Ce.z*T.transmissionResolutionScale,Ce.w*T.transmissionResolutionScale);const Me=T.getRenderTarget(),Ue=T.getActiveCubeFace(),Ne=T.getActiveMipmapLevel();T.setRenderTarget(be),T.getClearColor(j),ce=T.getClearAlpha(),ce<1&&T.setClearColor(16777215,.5),T.clear(),V&&ye.render(ne);const He=T.toneMapping;T.toneMapping=Pt;const We=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),P.setupLightsView(J),Te===!0&&pe.setGlobalState(T.clippingPlanes,J),On(y,ne,J),I.updateMultisampleRenderTarget(be),I.updateRenderTargetMipmap(be),te.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let je=0,st=q.length;je<st;je++){const ot=q[je],{object:$e,geometry:mt,material:Ie,group:St}=ot;if(Ie.side===Nt&&$e.layers.test(J.layers)){const Ye=Ie.side;Ie.side=xt,Ie.needsUpdate=!0,Qi($e,ne,J,mt,Ie,St),Ie.side=Ye,Ie.needsUpdate=!0,Oe=!0}}Oe===!0&&(I.updateMultisampleRenderTarget(be),I.updateRenderTargetMipmap(be))}T.setRenderTarget(Me,Ue,Ne),T.setClearColor(j,ce),We!==void 0&&(J.viewport=We),T.toneMapping=He}function On(y,q,ne){const J=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,be=y.length;Q<be;Q++){const Ce=y[Q],{object:Me,geometry:Ue,group:Ne}=Ce;let He=Ce.material;He.allowOverride===!0&&J!==null&&(He=J),Me.layers.test(ne.layers)&&Qi(Me,q,ne,Ue,He,Ne)}}function Qi(y,q,ne,J,Q,be){y.onBeforeRender(T,q,ne,J,Q,be),y.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Q.onBeforeRender(T,q,ne,J,y,be),Q.transparent===!0&&Q.side===Nt&&Q.forceSinglePass===!1?(Q.side=xt,Q.needsUpdate=!0,T.renderBufferDirect(ne,q,J,Q,y,be),Q.side=Rn,Q.needsUpdate=!0,T.renderBufferDirect(ne,q,J,Q,y,be),Q.side=Nt):T.renderBufferDirect(ne,q,J,Q,y,be),y.onAfterRender(T,q,ne,J,Q,be)}function Fn(y,q,ne){q.isScene!==!0&&(q=Y);const J=m.get(y),Q=P.state.lights,be=P.state.shadowsArray,Ce=Q.state.version,Me=ge.getParameters(y,Q.state,be,q,ne),Ue=ge.getProgramCacheKey(Me);let Ne=J.programs;J.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?q.environment:null,J.fog=q.fog;const He=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;J.envMap=Z.get(y.envMap||J.environment,He),J.envMapRotation=J.environment!==null&&y.envMap===null?q.environmentRotation:y.envMapRotation,Ne===void 0&&(y.addEventListener("dispose",Ze),Ne=new Map,J.programs=Ne);let We=Ne.get(Ue);if(We!==void 0){if(J.currentProgram===We&&J.lightsStateVersion===Ce)return er(y,Me),We}else Me.uniforms=ge.getUniforms(y),y.onBeforeCompile(Me,T),We=ge.acquireProgram(Me,Ue),Ne.set(Ue,We),J.uniforms=Me.uniforms;const Oe=J.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Oe.clippingPlanes=pe.uniform),er(y,Me),J.needsLights=wo(y),J.lightsStateVersion=Ce,J.needsLights&&(Oe.ambientLightColor.value=Q.state.ambient,Oe.lightProbe.value=Q.state.probe,Oe.directionalLights.value=Q.state.directional,Oe.directionalLightShadows.value=Q.state.directionalShadow,Oe.spotLights.value=Q.state.spot,Oe.spotLightShadows.value=Q.state.spotShadow,Oe.rectAreaLights.value=Q.state.rectArea,Oe.ltc_1.value=Q.state.rectAreaLTC1,Oe.ltc_2.value=Q.state.rectAreaLTC2,Oe.pointLights.value=Q.state.point,Oe.pointLightShadows.value=Q.state.pointShadow,Oe.hemisphereLights.value=Q.state.hemi,Oe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Oe.spotLightMatrix.value=Q.state.spotLightMatrix,Oe.spotLightMap.value=Q.state.spotLightMap,Oe.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.currentProgram=We,J.uniformsList=null,We}function Ji(y){if(y.uniformsList===null){const q=y.currentProgram.getUniforms();y.uniformsList=Kn.seqWithValue(q.seq,y.uniforms)}return y.uniformsList}function er(y,q){const ne=m.get(y);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.batchingColor=q.batchingColor,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.instancingMorph=q.instancingMorph,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function To(y,q,ne,J,Q){q.isScene!==!0&&(q=Y),I.resetTextureUnits();const be=q.fog,Ce=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?q.environment:null,Me=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ni,Ue=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Ne=Z.get(J.envMap||Ce,Ue),He=J.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,We=!!ne.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Oe=!!ne.morphAttributes.position,je=!!ne.morphAttributes.normal,st=!!ne.morphAttributes.color;let ot=Pt;J.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ot=T.toneMapping);const $e=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,mt=$e!==void 0?$e.length:0,Ie=m.get(J),St=P.state.lights;if(Te===!0&&(Ae===!0||y!==B)){const dt=y===B&&J.id===d;pe.setState(J,y,dt)}let Ye=!1;J.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==St.state.version||Ie.outputColorSpace!==Me||Q.isBatchedMesh&&Ie.batching===!1||!Q.isBatchedMesh&&Ie.batching===!0||Q.isBatchedMesh&&Ie.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ie.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ie.instancing===!1||!Q.isInstancedMesh&&Ie.instancing===!0||Q.isSkinnedMesh&&Ie.skinning===!1||!Q.isSkinnedMesh&&Ie.skinning===!0||Q.isInstancedMesh&&Ie.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ie.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ie.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ie.instancingMorph===!1&&Q.morphTexture!==null||Ie.envMap!==Ne||J.fog===!0&&Ie.fog!==be||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==pe.numPlanes||Ie.numIntersection!==pe.numIntersection)||Ie.vertexAlphas!==He||Ie.vertexTangents!==We||Ie.morphTargets!==Oe||Ie.morphNormals!==je||Ie.morphColors!==st||Ie.toneMapping!==ot||Ie.morphTargetsCount!==mt)&&(Ye=!0):(Ye=!0,Ie.__version=J.version);let Tt=Ie.currentProgram;Ye===!0&&(Tt=Fn(J,q,Q));let wt=!1,Kt=!1,tn=!1;const et=Tt.getUniforms(),ht=Ie.uniforms;if(G.useProgram(Tt.program)&&(wt=!0,Kt=!0,tn=!0),J.id!==d&&(d=J.id,Kt=!0),wt||B!==y){G.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),et.setValue(p,"projectionMatrix",y.projectionMatrix),et.setValue(p,"viewMatrix",y.matrixWorldInverse);const Ht=et.map.cameraPosition;Ht!==void 0&&Ht.setValue(p,ke.setFromMatrixPosition(y.matrixWorld)),re.logarithmicDepthBuffer&&et.setValue(p,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&et.setValue(p,"isOrthographic",y.isOrthographicCamera===!0),B!==y&&(B=y,Kt=!0,tn=!0)}if(Ie.needsLights&&(St.state.directionalShadowMap.length>0&&et.setValue(p,"directionalShadowMap",St.state.directionalShadowMap,I),St.state.spotShadowMap.length>0&&et.setValue(p,"spotShadowMap",St.state.spotShadowMap,I),St.state.pointShadowMap.length>0&&et.setValue(p,"pointShadowMap",St.state.pointShadowMap,I)),Q.isSkinnedMesh){et.setOptional(p,Q,"bindMatrix"),et.setOptional(p,Q,"bindMatrixInverse");const dt=Q.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),et.setValue(p,"boneTexture",dt.boneTexture,I))}Q.isBatchedMesh&&(et.setOptional(p,Q,"batchingTexture"),et.setValue(p,"batchingTexture",Q._matricesTexture,I),et.setOptional(p,Q,"batchingIdTexture"),et.setValue(p,"batchingIdTexture",Q._indirectTexture,I),et.setOptional(p,Q,"batchingColorTexture"),Q._colorsTexture!==null&&et.setValue(p,"batchingColorTexture",Q._colorsTexture,I));const Gt=ne.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&we.update(Q,ne,Tt),(Kt||Ie.receiveShadow!==Q.receiveShadow)&&(Ie.receiveShadow=Q.receiveShadow,et.setValue(p,"receiveShadow",Q.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&q.environment!==null&&(ht.envMapIntensity.value=q.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=qd()),Kt&&(et.setValue(p,"toneMappingExposure",T.toneMappingExposure),Ie.needsLights&&Ao(ht,tn),be&&J.fog===!0&&Pe.refreshFogUniforms(ht,be),Pe.refreshMaterialUniforms(ht,J,me,H,P.state.transmissionRenderTarget[y.id]),Kn.upload(p,Ji(Ie),ht,I)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Kn.upload(p,Ji(Ie),ht,I),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&et.setValue(p,"center",Q.center),et.setValue(p,"modelViewMatrix",Q.modelViewMatrix),et.setValue(p,"normalMatrix",Q.normalMatrix),et.setValue(p,"modelMatrix",Q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const dt=J.uniformsGroups;for(let Ht=0,nn=dt.length;Ht<nn;Ht++){const tr=dt[Ht];Re.update(tr,Tt),Re.bind(tr,Tt)}}return Tt}function Ao(y,q){y.ambientLightColor.needsUpdate=q,y.lightProbe.needsUpdate=q,y.directionalLights.needsUpdate=q,y.directionalLightShadows.needsUpdate=q,y.pointLights.needsUpdate=q,y.pointLightShadows.needsUpdate=q,y.spotLights.needsUpdate=q,y.spotLightShadows.needsUpdate=q,y.rectAreaLights.needsUpdate=q,y.hemisphereLights.needsUpdate=q}function wo(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,q,ne){const J=m.get(y);J.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),m.get(y.texture).__webglTexture=q,m.get(y.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ne,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,q){const ne=m.get(y);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0};const Ro=p.createFramebuffer();this.setRenderTarget=function(y,q=0,ne=0){N=y,F=q,C=ne;let J=null,Q=!1,be=!1;if(y){const Me=m.get(y);if(Me.__useDefaultFramebuffer!==void 0){G.bindFramebuffer(p.FRAMEBUFFER,Me.__webglFramebuffer),X.copy(y.viewport),O.copy(y.scissor),oe=y.scissorTest,G.viewport(X),G.scissor(O),G.setScissorTest(oe),d=-1;return}else if(Me.__webglFramebuffer===void 0)I.setupRenderTarget(y);else if(Me.__hasExternalTextures)I.rebindTextures(y,m.get(y.texture).__webglTexture,m.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const He=y.depthTexture;if(Me.__boundDepthTexture!==He){if(He!==null&&m.has(He)&&(y.width!==He.image.width||y.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(y)}}const Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(be=!0);const Ne=m.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ne[q])?J=Ne[q][ne]:J=Ne[q],Q=!0):y.samples>0&&I.useMultisampledRTT(y)===!1?J=m.get(y).__webglMultisampledFramebuffer:Array.isArray(Ne)?J=Ne[ne]:J=Ne,X.copy(y.viewport),O.copy(y.scissor),oe=y.scissorTest}else X.copy(ee).multiplyScalar(me).floor(),O.copy(fe).multiplyScalar(me).floor(),oe=se;if(ne!==0&&(J=Ro),G.bindFramebuffer(p.FRAMEBUFFER,J)&&G.drawBuffers(y,J),G.viewport(X),G.scissor(O),G.setScissorTest(oe),Q){const Me=m.get(y.texture);p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me.__webglTexture,ne)}else if(be){const Me=q;for(let Ue=0;Ue<y.textures.length;Ue++){const Ne=m.get(y.textures[Ue]);p.framebufferTextureLayer(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0+Ue,Ne.__webglTexture,ne,Me)}}else if(y!==null&&ne!==0){const Me=m.get(y.texture);p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,Me.__webglTexture,ne)}d=-1},this.readRenderTargetPixels=function(y,q,ne,J,Q,be,Ce,Me=0){if(!(y&&y.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=m.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue){G.bindFramebuffer(p.FRAMEBUFFER,Ue);try{const Ne=y.textures[Me],He=Ne.format,We=Ne.type;if(y.textures.length>1&&p.readBuffer(p.COLOR_ATTACHMENT0+Me),!re.textureFormatReadable(He)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(We)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=y.width-J&&ne>=0&&ne<=y.height-Q&&p.readPixels(q,ne,J,Q,ve.convert(He),ve.convert(We),be)}finally{const Ne=N!==null?m.get(N).__webglFramebuffer:null;G.bindFramebuffer(p.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(y,q,ne,J,Q,be,Ce,Me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=m.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue)if(q>=0&&q<=y.width-J&&ne>=0&&ne<=y.height-Q){G.bindFramebuffer(p.FRAMEBUFFER,Ue);const Ne=y.textures[Me],He=Ne.format,We=Ne.type;if(y.textures.length>1&&p.readBuffer(p.COLOR_ATTACHMENT0+Me),!re.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=p.createBuffer();p.bindBuffer(p.PIXEL_PACK_BUFFER,Oe),p.bufferData(p.PIXEL_PACK_BUFFER,be.byteLength,p.STREAM_READ),p.readPixels(q,ne,J,Q,ve.convert(He),ve.convert(We),0);const je=N!==null?m.get(N).__webglFramebuffer:null;G.bindFramebuffer(p.FRAMEBUFFER,je);const st=p.fenceSync(p.SYNC_GPU_COMMANDS_COMPLETE,0);return p.flush(),await Lo(p,st,4),p.bindBuffer(p.PIXEL_PACK_BUFFER,Oe),p.getBufferSubData(p.PIXEL_PACK_BUFFER,0,be),p.deleteBuffer(Oe),p.deleteSync(st),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,q=null,ne=0){const J=Math.pow(2,-ne),Q=Math.floor(y.image.width*J),be=Math.floor(y.image.height*J),Ce=q!==null?q.x:0,Me=q!==null?q.y:0;I.setTexture2D(y,0),p.copyTexSubImage2D(p.TEXTURE_2D,ne,0,0,Ce,Me,Q,be),G.unbindTexture()};const yo=p.createFramebuffer(),Co=p.createFramebuffer();this.copyTextureToTexture=function(y,q,ne=null,J=null,Q=0,be=0){let Ce,Me,Ue,Ne,He,We,Oe,je,st;const ot=y.isCompressedTexture?y.mipmaps[be]:y.image;if(ne!==null)Ce=ne.max.x-ne.min.x,Me=ne.max.y-ne.min.y,Ue=ne.isBox3?ne.max.z-ne.min.z:1,Ne=ne.min.x,He=ne.min.y,We=ne.isBox3?ne.min.z:0;else{const ht=Math.pow(2,-Q);Ce=Math.floor(ot.width*ht),Me=Math.floor(ot.height*ht),y.isDataArrayTexture?Ue=ot.depth:y.isData3DTexture?Ue=Math.floor(ot.depth*ht):Ue=1,Ne=0,He=0,We=0}J!==null?(Oe=J.x,je=J.y,st=J.z):(Oe=0,je=0,st=0);const $e=ve.convert(q.format),mt=ve.convert(q.type);let Ie;q.isData3DTexture?(I.setTexture3D(q,0),Ie=p.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(I.setTexture2DArray(q,0),Ie=p.TEXTURE_2D_ARRAY):(I.setTexture2D(q,0),Ie=p.TEXTURE_2D),p.pixelStorei(p.UNPACK_FLIP_Y_WEBGL,q.flipY),p.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),p.pixelStorei(p.UNPACK_ALIGNMENT,q.unpackAlignment);const St=p.getParameter(p.UNPACK_ROW_LENGTH),Ye=p.getParameter(p.UNPACK_IMAGE_HEIGHT),Tt=p.getParameter(p.UNPACK_SKIP_PIXELS),wt=p.getParameter(p.UNPACK_SKIP_ROWS),Kt=p.getParameter(p.UNPACK_SKIP_IMAGES);p.pixelStorei(p.UNPACK_ROW_LENGTH,ot.width),p.pixelStorei(p.UNPACK_IMAGE_HEIGHT,ot.height),p.pixelStorei(p.UNPACK_SKIP_PIXELS,Ne),p.pixelStorei(p.UNPACK_SKIP_ROWS,He),p.pixelStorei(p.UNPACK_SKIP_IMAGES,We);const tn=y.isDataArrayTexture||y.isData3DTexture,et=q.isDataArrayTexture||q.isData3DTexture;if(y.isDepthTexture){const ht=m.get(y),Gt=m.get(q),dt=m.get(ht.__renderTarget),Ht=m.get(Gt.__renderTarget);G.bindFramebuffer(p.READ_FRAMEBUFFER,dt.__webglFramebuffer),G.bindFramebuffer(p.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let nn=0;nn<Ue;nn++)tn&&(p.framebufferTextureLayer(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,m.get(y).__webglTexture,Q,We+nn),p.framebufferTextureLayer(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,m.get(q).__webglTexture,be,st+nn)),p.blitFramebuffer(Ne,He,Ce,Me,Oe,je,Ce,Me,p.DEPTH_BUFFER_BIT,p.NEAREST);G.bindFramebuffer(p.READ_FRAMEBUFFER,null),G.bindFramebuffer(p.DRAW_FRAMEBUFFER,null)}else if(Q!==0||y.isRenderTargetTexture||m.has(y)){const ht=m.get(y),Gt=m.get(q);G.bindFramebuffer(p.READ_FRAMEBUFFER,yo),G.bindFramebuffer(p.DRAW_FRAMEBUFFER,Co);for(let dt=0;dt<Ue;dt++)tn?p.framebufferTextureLayer(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,ht.__webglTexture,Q,We+dt):p.framebufferTexture2D(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,ht.__webglTexture,Q),et?p.framebufferTextureLayer(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,Gt.__webglTexture,be,st+dt):p.framebufferTexture2D(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,Gt.__webglTexture,be),Q!==0?p.blitFramebuffer(Ne,He,Ce,Me,Oe,je,Ce,Me,p.COLOR_BUFFER_BIT,p.NEAREST):et?p.copyTexSubImage3D(Ie,be,Oe,je,st+dt,Ne,He,Ce,Me):p.copyTexSubImage2D(Ie,be,Oe,je,Ne,He,Ce,Me);G.bindFramebuffer(p.READ_FRAMEBUFFER,null),G.bindFramebuffer(p.DRAW_FRAMEBUFFER,null)}else et?y.isDataTexture||y.isData3DTexture?p.texSubImage3D(Ie,be,Oe,je,st,Ce,Me,Ue,$e,mt,ot.data):q.isCompressedArrayTexture?p.compressedTexSubImage3D(Ie,be,Oe,je,st,Ce,Me,Ue,$e,ot.data):p.texSubImage3D(Ie,be,Oe,je,st,Ce,Me,Ue,$e,mt,ot):y.isDataTexture?p.texSubImage2D(p.TEXTURE_2D,be,Oe,je,Ce,Me,$e,mt,ot.data):y.isCompressedTexture?p.compressedTexSubImage2D(p.TEXTURE_2D,be,Oe,je,ot.width,ot.height,$e,ot.data):p.texSubImage2D(p.TEXTURE_2D,be,Oe,je,Ce,Me,$e,mt,ot);p.pixelStorei(p.UNPACK_ROW_LENGTH,St),p.pixelStorei(p.UNPACK_IMAGE_HEIGHT,Ye),p.pixelStorei(p.UNPACK_SKIP_PIXELS,Tt),p.pixelStorei(p.UNPACK_SKIP_ROWS,wt),p.pixelStorei(p.UNPACK_SKIP_IMAGES,Kt),be===0&&q.generateMipmaps&&p.generateMipmap(Ie),G.unbindTexture()},this.initRenderTarget=function(y){m.get(y).__webglFramebuffer===void 0&&I.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?I.setTextureCube(y,0):y.isData3DTexture?I.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?I.setTexture2DArray(y,0):I.setTexture2D(y,0),G.unbindTexture()},this.resetState=function(){F=0,C=0,N=null,G.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(n),t.unpackColorSpace=lt._getUnpackColorSpace()}}function jd(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),l=new Set(Object.keys(e[0].morphAttributes)),r={},a={},s=e[0].morphTargetsRelative,_=new _n;let E=0;for(let b=0;b<e.length;++b){const x=e[b];let h=0;if(t!==(x.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in x.attributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(x.attributes[u]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". Make sure all geometries have the same number of attributes."),null;if(s!==x.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in x.morphAttributes){if(!l.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(x.morphAttributes[u])}if(n){let u;if(t)u=x.index.count;else if(x.attributes.position!==void 0)u=x.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". The geometry must have either an index or a position attribute"),null;_.addGroup(E,u,b),E+=u}}if(t){let b=0;const x=[];for(let h=0;h<e.length;++h){const u=e[h].index;for(let S=0;S<u.count;++S)x.push(u.getX(S)+b);b+=e[h].attributes.position.count}_.setIndex(x)}for(const b in r){const x=ha(r[b]);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+b+" attribute."),null;_.setAttribute(b,x)}for(const b in a){const x=a[b][0].length;if(x===0)break;_.morphAttributes=_.morphAttributes||{},_.morphAttributes[b]=[];for(let h=0;h<x;++h){const u=[];for(let g=0;g<a[b].length;++g)u.push(a[b][g][h]);const S=ha(u);if(!S)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+b+" morphAttribute."),null;_.morphAttributes[b].push(S)}}return _}function ha(e){let n,t,i,l=-1,r=0;for(let E=0;E<e.length;++E){const b=e[E];if(n===void 0&&(n=b.array.constructor),n!==b.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=b.itemSize),t!==b.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=b.normalized),i!==b.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=b.gpuType),l!==b.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=b.count*t}const a=new n(r),s=new Tn(a,t,i);let _=0;for(let E=0;E<e.length;++E){const b=e[E];if(b.isInterleavedBufferAttribute){const x=_/t;for(let h=0,u=b.count;h<u;h++)for(let S=0;S<t;S++){const g=b.getComponent(h,S);s.setComponent(h+x,S,g)}}else a.set(b.array,_);_+=b.count*t}return l!==void 0&&(s.gpuType=l),s}const $d={north:[6,4,0,2],east:[7,5,4,6],south:[3,1,5,7],west:[2,0,1,3],up:[2,3,7,6],down:[1,0,4,5]},Qd=[0,1,2,0,2,3],Jd=new Be(-.52,.7,-.55).normalize(),pa={x:new Be(1,0,0),y:new Be(0,1,0),z:new Be(0,0,1)};function io(e,n){const t=new Set;for(;n?.startsWith("#");){if(t.has(n))throw new Error(`Circular texture reference: ${n}`);t.add(n),n=e[n.slice(1)]}if(!n)throw new Error("Model has an unresolved texture.");return n.replace(/^minecraft:/,"")}function eh(e,n,t){const{from:i,to:l,rotation:r}=e,a=new Be(...r?.origin??[8,8,8]),s=new Ln;if(r?.axis)s.setFromAxisAngle(pa[r.axis],Mt.degToRad(r.angle));else if(r){const P=[r.x??0,r.y??0,r.z??0].map(Mt.degToRad);s.setFromEuler(new ai(...P,"ZYX"))}const _=new Be(1,1,1);if(r?.rescale)for(const[P,L]of Object.entries(pa)){const U=L.clone().applyQuaternion(s);_[P]=1/Math.max(Math.abs(U.x),Math.abs(U.y),Math.abs(U.z))}const E=$d[n].map(P=>new Be((P&4?l:i)[0],(P&2?l:i)[1],(P&1?l:i)[2]).sub(a).multiply(_).applyQuaternion(s).add(a)),[b,x,h,u]=t.uv??th(i,l,n),S=[[b,x],[b,u],[h,u],[h,x]],g=Mt.euclideanModulo((t.rotation??0)/90,4),c=E.flatMap((P,L)=>{const[U,M]=S[(L+g)%4];return[U/16,1-M/16]}),o=E[1].clone().sub(E[0]).cross(E[2].clone().sub(E[0])).normalize(),v=Math.max(0,o.dot(Jd)),A=e.shade===!1?1:.61+.39*v,R=new _n;return R.setAttribute("position",new Mn(E.flatMap(P=>P.toArray()),3)),R.setAttribute("uv",new Mn(c,2)),R.setAttribute("color",new Mn(Array(12).fill(A),3)),R.setIndex(Qd),R}function th([e,n,t],[i,l,r],a){return{north:[16-i,16-l,16-e,16-n],east:[16-r,16-l,16-t,16-n],south:[e,16-l,i,16-n],west:[t,16-l,r,16-n],up:[e,t,i,r],down:[e,16-r,i,16-t]}[a]}function nh({data:e,width:n,height:t},i){const l=i.attributes.uv,r=Array.from({length:4},(x,h)=>l.getX(h)*n),a=Array.from({length:4},(x,h)=>(1-l.getY(h))*t),s=Math.floor(Math.min(...r)),_=Math.ceil(Math.max(...r)),E=Math.floor(Math.min(...a)),b=Math.ceil(Math.max(...a));for(let x=E;x<b;x+=1)for(let h=s;h<_;h+=1){const u=e[(x*n+h)*4+3];if(u>0&&u<255)return!0}return!1}function ih(e,n,t){const i=e.attributes.uv,l=(i.getX(0)+i.getX(2))/2,r=(i.getY(0)+i.getY(2))/2,a=1/(n*32),s=1/(t*32);for(let _=0;_<i.count;_+=1){const E=Mt.lerp(i.getX(_),l,a),b=Mt.lerp(i.getY(_),r,s);i.setXY(_,E,b)}}function rh(e,n){const t=new Di,i=new Map;for(const l of e.elements)for(const[r,a]of Object.entries(l.faces)){const s=io(e.textures,a.texture);i.has(s)||i.set(s,[]),i.get(s).push(eh(l,r,a))}for(const[l,r]of i){const a=n.get(l),s=a.getContext("2d").getImageData(0,0,a.width,a.height),_=new ja(a);_.colorSpace=ya,_.magFilter=Ft,_.minFilter=Ft,_.generateMipmaps=!1,r.forEach(x=>ih(x,a.width,a.height));const E=new Dn({map:_,vertexColors:!0,alphaTest:254.5/255});t.add(new bt(jd(r),E));let b;for(const x of r){if(!nh(s,x)){x.dispose();continue}b||(b=new Dn({map:_,vertexColors:!0,transparent:!0,depthWrite:!1,alphaTest:.5/255}),b.onBeforeCompile=S=>{S.fragmentShader=S.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
if (diffuseColor.a >= 0.9980392) discard;`)}),x.computeBoundingBox();const h=x.boundingBox.getCenter(new Be);x.translate(-h.x,-h.y,-h.z);const u=new bt(x,b);u.position.copy(h),t.add(u)}}return t}function ah(e){const n=new Set,t=new Set;for(const i of e.children)i.geometry.dispose(),n.add(i.material),t.add(i.material.map);n.forEach(i=>i.dispose()),t.forEach(i=>i.dispose())}var Hn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Vn(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ti={exports:{}};var ma;function sh(){return ma||(ma=1,(function(e,n){(function(t){e.exports=t()})(function(){return(function t(i,l,r){function a(E,b){if(!l[E]){if(!i[E]){var x=typeof Vn=="function"&&Vn;if(!b&&x)return x(E,!0);if(s)return s(E,!0);var h=new Error("Cannot find module '"+E+"'");throw h.code="MODULE_NOT_FOUND",h}var u=l[E]={exports:{}};i[E][0].call(u.exports,function(S){var g=i[E][1][S];return a(g||S)},u,u.exports,t,i,l,r)}return l[E].exports}for(var s=typeof Vn=="function"&&Vn,_=0;_<r.length;_++)a(r[_]);return a})({1:[function(t,i,l){var r=t("./utils"),a=t("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";l.encode=function(_){for(var E,b,x,h,u,S,g,c=[],o=0,v=_.length,A=v,R=r.getTypeOf(_)!=="string";o<_.length;)A=v-o,x=R?(E=_[o++],b=o<v?_[o++]:0,o<v?_[o++]:0):(E=_.charCodeAt(o++),b=o<v?_.charCodeAt(o++):0,o<v?_.charCodeAt(o++):0),h=E>>2,u=(3&E)<<4|b>>4,S=1<A?(15&b)<<2|x>>6:64,g=2<A?63&x:64,c.push(s.charAt(h)+s.charAt(u)+s.charAt(S)+s.charAt(g));return c.join("")},l.decode=function(_){var E,b,x,h,u,S,g=0,c=0,o="data:";if(_.substr(0,o.length)===o)throw new Error("Invalid base64 input, it looks like a data url.");var v,A=3*(_=_.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(_.charAt(_.length-1)===s.charAt(64)&&A--,_.charAt(_.length-2)===s.charAt(64)&&A--,A%1!=0)throw new Error("Invalid base64 input, bad content length.");for(v=a.uint8array?new Uint8Array(0|A):new Array(0|A);g<_.length;)E=s.indexOf(_.charAt(g++))<<2|(h=s.indexOf(_.charAt(g++)))>>4,b=(15&h)<<4|(u=s.indexOf(_.charAt(g++)))>>2,x=(3&u)<<6|(S=s.indexOf(_.charAt(g++))),v[c++]=E,u!==64&&(v[c++]=b),S!==64&&(v[c++]=x);return v}},{"./support":30,"./utils":32}],2:[function(t,i,l){var r=t("./external"),a=t("./stream/DataWorker"),s=t("./stream/Crc32Probe"),_=t("./stream/DataLengthProbe");function E(b,x,h,u,S){this.compressedSize=b,this.uncompressedSize=x,this.crc32=h,this.compression=u,this.compressedContent=S}E.prototype={getContentWorker:function(){var b=new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new _("data_length")),x=this;return b.on("end",function(){if(this.streamInfo.data_length!==x.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),b},getCompressedWorker:function(){return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},E.createWorkerFrom=function(b,x,h){return b.pipe(new s).pipe(new _("uncompressedSize")).pipe(x.compressWorker(h)).pipe(new _("compressedSize")).withStreamInfo("compression",x)},i.exports=E},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,i,l){var r=t("./stream/GenericWorker");l.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},l.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,i,l){var r=t("./utils"),a=(function(){for(var s,_=[],E=0;E<256;E++){s=E;for(var b=0;b<8;b++)s=1&s?3988292384^s>>>1:s>>>1;_[E]=s}return _})();i.exports=function(s,_){return s!==void 0&&s.length?r.getTypeOf(s)!=="string"?(function(E,b,x,h){var u=a,S=h+x;E^=-1;for(var g=h;g<S;g++)E=E>>>8^u[255&(E^b[g])];return-1^E})(0|_,s,s.length,0):(function(E,b,x,h){var u=a,S=h+x;E^=-1;for(var g=h;g<S;g++)E=E>>>8^u[255&(E^b.charCodeAt(g))];return-1^E})(0|_,s,s.length,0):0}},{"./utils":32}],5:[function(t,i,l){l.base64=!1,l.binary=!1,l.dir=!1,l.createFolders=!0,l.date=null,l.compression=null,l.compressionOptions=null,l.comment=null,l.unixPermissions=null,l.dosPermissions=null},{}],6:[function(t,i,l){var r=null;r=typeof Promise<"u"?Promise:t("lie"),i.exports={Promise:r}},{lie:37}],7:[function(t,i,l){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=t("pako"),s=t("./utils"),_=t("./stream/GenericWorker"),E=r?"uint8array":"array";function b(x,h){_.call(this,"FlateWorker/"+x),this._pako=null,this._pakoAction=x,this._pakoOptions=h,this.meta={}}l.magic="\b\0",s.inherits(b,_),b.prototype.processChunk=function(x){this.meta=x.meta,this._pako===null&&this._createPako(),this._pako.push(s.transformTo(E,x.data),!1)},b.prototype.flush=function(){_.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},b.prototype.cleanUp=function(){_.prototype.cleanUp.call(this),this._pako=null},b.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var x=this;this._pako.onData=function(h){x.push({data:h,meta:x.meta})}},l.compressWorker=function(x){return new b("Deflate",x)},l.uncompressWorker=function(){return new b("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,i,l){function r(u,S){var g,c="";for(g=0;g<S;g++)c+=String.fromCharCode(255&u),u>>>=8;return c}function a(u,S,g,c,o,v){var A,R,P=u.file,L=u.compression,U=v!==E.utf8encode,M=s.transformTo("string",v(P.name)),T=s.transformTo("string",E.utf8encode(P.name)),K=P.comment,F=s.transformTo("string",v(K)),C=s.transformTo("string",E.utf8encode(K)),N=T.length!==P.name.length,d=C.length!==K.length,B="",X="",O="",oe=P.dir,j=P.date,ce={crc32:0,compressedSize:0,uncompressedSize:0};S&&!g||(ce.crc32=u.crc32,ce.compressedSize=u.compressedSize,ce.uncompressedSize=u.uncompressedSize);var z=0;S&&(z|=8),U||!N&&!d||(z|=2048);var H=0,me=0;oe&&(H|=16),o==="UNIX"?(me=798,H|=(function(ue,ee){var fe=ue;return ue||(fe=ee?16893:33204),(65535&fe)<<16})(P.unixPermissions,oe)):(me=20,H|=(function(ue){return 63&(ue||0)})(P.dosPermissions)),A=j.getUTCHours(),A<<=6,A|=j.getUTCMinutes(),A<<=5,A|=j.getUTCSeconds()/2,R=j.getUTCFullYear()-1980,R<<=4,R|=j.getUTCMonth()+1,R<<=5,R|=j.getUTCDate(),N&&(X=r(1,1)+r(b(M),4)+T,B+="up"+r(X.length,2)+X),d&&(O=r(1,1)+r(b(F),4)+C,B+="uc"+r(O.length,2)+O);var he="";return he+=`
\0`,he+=r(z,2),he+=L.magic,he+=r(A,2),he+=r(R,2),he+=r(ce.crc32,4),he+=r(ce.compressedSize,4),he+=r(ce.uncompressedSize,4),he+=r(M.length,2),he+=r(B.length,2),{fileRecord:x.LOCAL_FILE_HEADER+he+M+B,dirRecord:x.CENTRAL_FILE_HEADER+r(me,2)+he+r(F.length,2)+"\0\0\0\0"+r(H,4)+r(c,4)+M+B+F}}var s=t("../utils"),_=t("../stream/GenericWorker"),E=t("../utf8"),b=t("../crc32"),x=t("../signature");function h(u,S,g,c){_.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=S,this.zipPlatform=g,this.encodeFileName=c,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(h,_),h.prototype.push=function(u){var S=u.meta.percent||0,g=this.entriesCount,c=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,_.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:g?(S+100*(g-c-1))/g:100}}))},h.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var S=this.streamFiles&&!u.file.dir;if(S){var g=a(u,S,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},h.prototype.closedSource=function(u){this.accumulate=!1;var S=this.streamFiles&&!u.file.dir,g=a(u,S,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),S)this.push({data:(function(c){return x.DATA_DESCRIPTOR+r(c.crc32,4)+r(c.compressedSize,4)+r(c.uncompressedSize,4)})(u),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},h.prototype.flush=function(){for(var u=this.bytesWritten,S=0;S<this.dirRecords.length;S++)this.push({data:this.dirRecords[S],meta:{percent:100}});var g=this.bytesWritten-u,c=(function(o,v,A,R,P){var L=s.transformTo("string",P(R));return x.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(o,2)+r(o,2)+r(v,4)+r(A,4)+r(L.length,2)+L})(this.dirRecords.length,g,u,this.zipComment,this.encodeFileName);this.push({data:c,meta:{percent:100}})},h.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},h.prototype.registerPrevious=function(u){this._sources.push(u);var S=this;return u.on("data",function(g){S.processChunk(g)}),u.on("end",function(){S.closedSource(S.previous.streamInfo),S._sources.length?S.prepareNextSource():S.end()}),u.on("error",function(g){S.error(g)}),this},h.prototype.resume=function(){return!!_.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},h.prototype.error=function(u){var S=this._sources;if(!_.prototype.error.call(this,u))return!1;for(var g=0;g<S.length;g++)try{S[g].error(u)}catch{}return!0},h.prototype.lock=function(){_.prototype.lock.call(this);for(var u=this._sources,S=0;S<u.length;S++)u[S].lock()},i.exports=h},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,i,l){var r=t("../compressions"),a=t("./ZipFileWorker");l.generateWorker=function(s,_,E){var b=new a(_.streamFiles,E,_.platform,_.encodeFileName),x=0;try{s.forEach(function(h,u){x++;var S=(function(v,A){var R=v||A,P=r[R];if(!P)throw new Error(R+" is not a valid compression method !");return P})(u.options.compression,_.compression),g=u.options.compressionOptions||_.compressionOptions||{},c=u.dir,o=u.date;u._compressWorker(S,g).withStreamInfo("file",{name:h,dir:c,date:o,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(b)}),b.entriesCount=x}catch(h){b.error(h)}return b}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,i,l){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new r;for(var s in this)typeof this[s]!="function"&&(a[s]=this[s]);return a}}(r.prototype=t("./object")).loadAsync=t("./load"),r.support=t("./support"),r.defaults=t("./defaults"),r.version="3.10.1",r.loadAsync=function(a,s){return new r().loadAsync(a,s)},r.external=t("./external"),i.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,i,l){var r=t("./utils"),a=t("./external"),s=t("./utf8"),_=t("./zipEntries"),E=t("./stream/Crc32Probe"),b=t("./nodejsUtils");function x(h){return new a.Promise(function(u,S){var g=h.decompressed.getContentWorker().pipe(new E);g.on("error",function(c){S(c)}).on("end",function(){g.streamInfo.crc32!==h.decompressed.crc32?S(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}i.exports=function(h,u){var S=this;return u=r.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),b.isNode&&b.isStream(h)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",h,!0,u.optimizedBinaryString,u.base64).then(function(g){var c=new _(u);return c.load(g),c}).then(function(g){var c=[a.Promise.resolve(g)],o=g.files;if(u.checkCRC32)for(var v=0;v<o.length;v++)c.push(x(o[v]));return a.Promise.all(c)}).then(function(g){for(var c=g.shift(),o=c.files,v=0;v<o.length;v++){var A=o[v],R=A.fileNameStr,P=r.resolve(A.fileNameStr);S.file(P,A.decompressed,{binary:!0,optimizedBinaryString:!0,date:A.date,dir:A.dir,comment:A.fileCommentStr.length?A.fileCommentStr:null,unixPermissions:A.unixPermissions,dosPermissions:A.dosPermissions,createFolders:u.createFolders}),A.dir||(S.file(P).unsafeOriginalName=R)}return c.zipComment.length&&(S.comment=c.zipComment),S})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,i,l){var r=t("../utils"),a=t("../stream/GenericWorker");function s(_,E){a.call(this,"Nodejs stream input adapter for "+_),this._upstreamEnded=!1,this._bindStream(E)}r.inherits(s,a),s.prototype._bindStream=function(_){var E=this;(this._stream=_).pause(),_.on("data",function(b){E.push({data:b,meta:{percent:0}})}).on("error",function(b){E.isPaused?this.generatedError=b:E.error(b)}).on("end",function(){E.isPaused?E._upstreamEnded=!0:E.end()})},s.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,i,l){var r=t("readable-stream").Readable;function a(s,_,E){r.call(this,_),this._helper=s;var b=this;s.on("data",function(x,h){b.push(x)||b._helper.pause(),E&&E(h)}).on("error",function(x){b.emit("error",x)}).on("end",function(){b.push(null)})}t("../utils").inherits(a,r),a.prototype._read=function(){this._helper.resume()},i.exports=a},{"../utils":32,"readable-stream":16}],14:[function(t,i,l){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,a);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,a)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var a=new Buffer(r);return a.fill(0),a},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(t,i,l){function r(P,L,U){var M,T=s.getTypeOf(L),K=s.extend(U||{},b);K.date=K.date||new Date,K.compression!==null&&(K.compression=K.compression.toUpperCase()),typeof K.unixPermissions=="string"&&(K.unixPermissions=parseInt(K.unixPermissions,8)),K.unixPermissions&&16384&K.unixPermissions&&(K.dir=!0),K.dosPermissions&&16&K.dosPermissions&&(K.dir=!0),K.dir&&(P=o(P)),K.createFolders&&(M=c(P))&&v.call(this,M,!0);var F=T==="string"&&K.binary===!1&&K.base64===!1;U&&U.binary!==void 0||(K.binary=!F),(L instanceof x&&L.uncompressedSize===0||K.dir||!L||L.length===0)&&(K.base64=!1,K.binary=!0,L="",K.compression="STORE",T="string");var C=null;C=L instanceof x||L instanceof _?L:S.isNode&&S.isStream(L)?new g(P,L):s.prepareContent(P,L,K.binary,K.optimizedBinaryString,K.base64);var N=new h(P,C,K);this.files[P]=N}var a=t("./utf8"),s=t("./utils"),_=t("./stream/GenericWorker"),E=t("./stream/StreamHelper"),b=t("./defaults"),x=t("./compressedObject"),h=t("./zipObject"),u=t("./generate"),S=t("./nodejsUtils"),g=t("./nodejs/NodejsStreamInputAdapter"),c=function(P){P.slice(-1)==="/"&&(P=P.substring(0,P.length-1));var L=P.lastIndexOf("/");return 0<L?P.substring(0,L):""},o=function(P){return P.slice(-1)!=="/"&&(P+="/"),P},v=function(P,L){return L=L!==void 0?L:b.createFolders,P=o(P),this.files[P]||r.call(this,P,null,{dir:!0,createFolders:L}),this.files[P]};function A(P){return Object.prototype.toString.call(P)==="[object RegExp]"}var R={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(P){var L,U,M;for(L in this.files)M=this.files[L],(U=L.slice(this.root.length,L.length))&&L.slice(0,this.root.length)===this.root&&P(U,M)},filter:function(P){var L=[];return this.forEach(function(U,M){P(U,M)&&L.push(M)}),L},file:function(P,L,U){if(arguments.length!==1)return P=this.root+P,r.call(this,P,L,U),this;if(A(P)){var M=P;return this.filter(function(K,F){return!F.dir&&M.test(K)})}var T=this.files[this.root+P];return T&&!T.dir?T:null},folder:function(P){if(!P)return this;if(A(P))return this.filter(function(T,K){return K.dir&&P.test(T)});var L=this.root+P,U=v.call(this,L),M=this.clone();return M.root=U.name,M},remove:function(P){P=this.root+P;var L=this.files[P];if(L||(P.slice(-1)!=="/"&&(P+="/"),L=this.files[P]),L&&!L.dir)delete this.files[P];else for(var U=this.filter(function(T,K){return K.name.slice(0,P.length)===P}),M=0;M<U.length;M++)delete this.files[U[M].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(P){var L,U={};try{if((U=s.extend(P||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=U.type.toLowerCase(),U.compression=U.compression.toUpperCase(),U.type==="binarystring"&&(U.type="string"),!U.type)throw new Error("No output type specified.");s.checkSupport(U.type),U.platform!=="darwin"&&U.platform!=="freebsd"&&U.platform!=="linux"&&U.platform!=="sunos"||(U.platform="UNIX"),U.platform==="win32"&&(U.platform="DOS");var M=U.comment||this.comment||"";L=u.generateWorker(this,U,M)}catch(T){(L=new _("error")).error(T)}return new E(L,U.type||"string",U.mimeType)},generateAsync:function(P,L){return this.generateInternalStream(P).accumulate(L)},generateNodeStream:function(P,L){return(P=P||{}).type||(P.type="nodebuffer"),this.generateInternalStream(P).toNodejsStream(L)}};i.exports=R},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,i,l){i.exports=t("stream")},{stream:void 0}],17:[function(t,i,l){var r=t("./DataReader");function a(s){r.call(this,s);for(var _=0;_<this.data.length;_++)s[_]=255&s[_]}t("../utils").inherits(a,r),a.prototype.byteAt=function(s){return this.data[this.zero+s]},a.prototype.lastIndexOfSignature=function(s){for(var _=s.charCodeAt(0),E=s.charCodeAt(1),b=s.charCodeAt(2),x=s.charCodeAt(3),h=this.length-4;0<=h;--h)if(this.data[h]===_&&this.data[h+1]===E&&this.data[h+2]===b&&this.data[h+3]===x)return h-this.zero;return-1},a.prototype.readAndCheckSignature=function(s){var _=s.charCodeAt(0),E=s.charCodeAt(1),b=s.charCodeAt(2),x=s.charCodeAt(3),h=this.readData(4);return _===h[0]&&E===h[1]&&b===h[2]&&x===h[3]},a.prototype.readData=function(s){if(this.checkOffset(s),s===0)return[];var _=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,_},i.exports=a},{"../utils":32,"./DataReader":18}],18:[function(t,i,l){var r=t("../utils");function a(s){this.data=s,this.length=s.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(s){this.checkIndex(this.index+s)},checkIndex:function(s){if(this.length<this.zero+s||s<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+s+"). Corrupted zip ?")},setIndex:function(s){this.checkIndex(s),this.index=s},skip:function(s){this.setIndex(this.index+s)},byteAt:function(){},readInt:function(s){var _,E=0;for(this.checkOffset(s),_=this.index+s-1;_>=this.index;_--)E=(E<<8)+this.byteAt(_);return this.index+=s,E},readString:function(s){return r.transformTo("string",this.readData(s))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var s=this.readInt(4);return new Date(Date.UTC(1980+(s>>25&127),(s>>21&15)-1,s>>16&31,s>>11&31,s>>5&63,(31&s)<<1))}},i.exports=a},{"../utils":32}],19:[function(t,i,l){var r=t("./Uint8ArrayReader");function a(s){r.call(this,s)}t("../utils").inherits(a,r),a.prototype.readData=function(s){this.checkOffset(s);var _=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,_},i.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,i,l){var r=t("./DataReader");function a(s){r.call(this,s)}t("../utils").inherits(a,r),a.prototype.byteAt=function(s){return this.data.charCodeAt(this.zero+s)},a.prototype.lastIndexOfSignature=function(s){return this.data.lastIndexOf(s)-this.zero},a.prototype.readAndCheckSignature=function(s){return s===this.readData(4)},a.prototype.readData=function(s){this.checkOffset(s);var _=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,_},i.exports=a},{"../utils":32,"./DataReader":18}],21:[function(t,i,l){var r=t("./ArrayReader");function a(s){r.call(this,s)}t("../utils").inherits(a,r),a.prototype.readData=function(s){if(this.checkOffset(s),s===0)return new Uint8Array(0);var _=this.data.subarray(this.zero+this.index,this.zero+this.index+s);return this.index+=s,_},i.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(t,i,l){var r=t("../utils"),a=t("../support"),s=t("./ArrayReader"),_=t("./StringReader"),E=t("./NodeBufferReader"),b=t("./Uint8ArrayReader");i.exports=function(x){var h=r.getTypeOf(x);return r.checkSupport(h),h!=="string"||a.uint8array?h==="nodebuffer"?new E(x):a.uint8array?new b(r.transformTo("uint8array",x)):new s(r.transformTo("array",x)):new _(x)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,i,l){l.LOCAL_FILE_HEADER="PK",l.CENTRAL_FILE_HEADER="PK",l.CENTRAL_DIRECTORY_END="PK",l.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",l.ZIP64_CENTRAL_DIRECTORY_END="PK",l.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,i,l){var r=t("./GenericWorker"),a=t("../utils");function s(_){r.call(this,"ConvertWorker to "+_),this.destType=_}a.inherits(s,r),s.prototype.processChunk=function(_){this.push({data:a.transformTo(this.destType,_.data),meta:_.meta})},i.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(t,i,l){var r=t("./GenericWorker"),a=t("../crc32");function s(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(s,r),s.prototype.processChunk=function(_){this.streamInfo.crc32=a(_.data,this.streamInfo.crc32||0),this.push(_)},i.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,i,l){var r=t("../utils"),a=t("./GenericWorker");function s(_){a.call(this,"DataLengthProbe for "+_),this.propName=_,this.withStreamInfo(_,0)}r.inherits(s,a),s.prototype.processChunk=function(_){if(_){var E=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=E+_.data.length}a.prototype.processChunk.call(this,_)},i.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(t,i,l){var r=t("../utils"),a=t("./GenericWorker");function s(_){a.call(this,"DataWorker");var E=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,_.then(function(b){E.dataIsReady=!0,E.data=b,E.max=b&&b.length||0,E.type=r.getTypeOf(b),E.isPaused||E._tickAndRepeat()},function(b){E.error(b)})}r.inherits(s,a),s.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var _=null,E=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":_=this.data.substring(this.index,E);break;case"uint8array":_=this.data.subarray(this.index,E);break;case"array":case"nodebuffer":_=this.data.slice(this.index,E)}return this.index=E,this.push({data:_,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(t,i,l){function r(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,s){return this._listeners[a].push(s),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,s){if(this._listeners[a])for(var _=0;_<this._listeners[a].length;_++)this._listeners[a][_].call(this,s)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var s=this;return a.on("data",function(_){s.processChunk(_)}),a.on("end",function(){s.end()}),a.on("error",function(_){s.error(_)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,s){return this.extraStreamInfo[a]=s,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},i.exports=r},{}],29:[function(t,i,l){var r=t("../utils"),a=t("./ConvertWorker"),s=t("./GenericWorker"),_=t("../base64"),E=t("../support"),b=t("../external"),x=null;if(E.nodestream)try{x=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function h(S,g){return new b.Promise(function(c,o){var v=[],A=S._internalType,R=S._outputType,P=S._mimeType;S.on("data",function(L,U){v.push(L),g&&g(U)}).on("error",function(L){v=[],o(L)}).on("end",function(){try{var L=(function(U,M,T){switch(U){case"blob":return r.newBlob(r.transformTo("arraybuffer",M),T);case"base64":return _.encode(M);default:return r.transformTo(U,M)}})(R,(function(U,M){var T,K=0,F=null,C=0;for(T=0;T<M.length;T++)C+=M[T].length;switch(U){case"string":return M.join("");case"array":return Array.prototype.concat.apply([],M);case"uint8array":for(F=new Uint8Array(C),T=0;T<M.length;T++)F.set(M[T],K),K+=M[T].length;return F;case"nodebuffer":return Buffer.concat(M);default:throw new Error("concat : unsupported type '"+U+"'")}})(A,v),P);c(L)}catch(U){o(U)}v=[]}).resume()})}function u(S,g,c){var o=g;switch(g){case"blob":case"arraybuffer":o="uint8array";break;case"base64":o="string"}try{this._internalType=o,this._outputType=g,this._mimeType=c,r.checkSupport(o),this._worker=S.pipe(new a(o)),S.lock()}catch(v){this._worker=new s("error"),this._worker.error(v)}}u.prototype={accumulate:function(S){return h(this,S)},on:function(S,g){var c=this;return S==="data"?this._worker.on(S,function(o){g.call(c,o.data,o.meta)}):this._worker.on(S,function(){r.delay(g,arguments,c)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(S){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new x(this,{objectMode:this._outputType!=="nodebuffer"},S)}},i.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,i,l){if(l.base64=!0,l.array=!0,l.string=!0,l.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",l.nodebuffer=typeof Buffer<"u",l.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")l.blob=!1;else{var r=new ArrayBuffer(0);try{l.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(r),l.blob=a.getBlob("application/zip").size===0}catch{l.blob=!1}}}try{l.nodestream=!!t("readable-stream").Readable}catch{l.nodestream=!1}},{"readable-stream":16}],31:[function(t,i,l){for(var r=t("./utils"),a=t("./support"),s=t("./nodejsUtils"),_=t("./stream/GenericWorker"),E=new Array(256),b=0;b<256;b++)E[b]=252<=b?6:248<=b?5:240<=b?4:224<=b?3:192<=b?2:1;E[254]=E[254]=1;function x(){_.call(this,"utf-8 decode"),this.leftOver=null}function h(){_.call(this,"utf-8 encode")}l.utf8encode=function(u){return a.nodebuffer?s.newBufferFrom(u,"utf-8"):(function(S){var g,c,o,v,A,R=S.length,P=0;for(v=0;v<R;v++)(64512&(c=S.charCodeAt(v)))==55296&&v+1<R&&(64512&(o=S.charCodeAt(v+1)))==56320&&(c=65536+(c-55296<<10)+(o-56320),v++),P+=c<128?1:c<2048?2:c<65536?3:4;for(g=a.uint8array?new Uint8Array(P):new Array(P),v=A=0;A<P;v++)(64512&(c=S.charCodeAt(v)))==55296&&v+1<R&&(64512&(o=S.charCodeAt(v+1)))==56320&&(c=65536+(c-55296<<10)+(o-56320),v++),c<128?g[A++]=c:(c<2048?g[A++]=192|c>>>6:(c<65536?g[A++]=224|c>>>12:(g[A++]=240|c>>>18,g[A++]=128|c>>>12&63),g[A++]=128|c>>>6&63),g[A++]=128|63&c);return g})(u)},l.utf8decode=function(u){return a.nodebuffer?r.transformTo("nodebuffer",u).toString("utf-8"):(function(S){var g,c,o,v,A=S.length,R=new Array(2*A);for(g=c=0;g<A;)if((o=S[g++])<128)R[c++]=o;else if(4<(v=E[o]))R[c++]=65533,g+=v-1;else{for(o&=v===2?31:v===3?15:7;1<v&&g<A;)o=o<<6|63&S[g++],v--;1<v?R[c++]=65533:o<65536?R[c++]=o:(o-=65536,R[c++]=55296|o>>10&1023,R[c++]=56320|1023&o)}return R.length!==c&&(R.subarray?R=R.subarray(0,c):R.length=c),r.applyFromCharCode(R)})(u=r.transformTo(a.uint8array?"uint8array":"array",u))},r.inherits(x,_),x.prototype.processChunk=function(u){var S=r.transformTo(a.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var g=S;(S=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),S.set(g,this.leftOver.length)}else S=this.leftOver.concat(S);this.leftOver=null}var c=(function(v,A){var R;for((A=A||v.length)>v.length&&(A=v.length),R=A-1;0<=R&&(192&v[R])==128;)R--;return R<0||R===0?A:R+E[v[R]]>A?R:A})(S),o=S;c!==S.length&&(a.uint8array?(o=S.subarray(0,c),this.leftOver=S.subarray(c,S.length)):(o=S.slice(0,c),this.leftOver=S.slice(c,S.length))),this.push({data:l.utf8decode(o),meta:u.meta})},x.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:l.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},l.Utf8DecodeWorker=x,r.inherits(h,_),h.prototype.processChunk=function(u){this.push({data:l.utf8encode(u.data),meta:u.meta})},l.Utf8EncodeWorker=h},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,i,l){var r=t("./support"),a=t("./base64"),s=t("./nodejsUtils"),_=t("./external");function E(g){return g}function b(g,c){for(var o=0;o<g.length;++o)c[o]=255&g.charCodeAt(o);return c}t("setimmediate"),l.newBlob=function(g,c){l.checkSupport("blob");try{return new Blob([g],{type:c})}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return o.append(g),o.getBlob(c)}catch{throw new Error("Bug : can't construct the Blob.")}}};var x={stringifyByChunk:function(g,c,o){var v=[],A=0,R=g.length;if(R<=o)return String.fromCharCode.apply(null,g);for(;A<R;)c==="array"||c==="nodebuffer"?v.push(String.fromCharCode.apply(null,g.slice(A,Math.min(A+o,R)))):v.push(String.fromCharCode.apply(null,g.subarray(A,Math.min(A+o,R)))),A+=o;return v.join("")},stringifyByChar:function(g){for(var c="",o=0;o<g.length;o++)c+=String.fromCharCode(g[o]);return c},applyCanBeUsed:{uint8array:(function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,s.allocBuffer(1)).length===1}catch{return!1}})()}};function h(g){var c=65536,o=l.getTypeOf(g),v=!0;if(o==="uint8array"?v=x.applyCanBeUsed.uint8array:o==="nodebuffer"&&(v=x.applyCanBeUsed.nodebuffer),v)for(;1<c;)try{return x.stringifyByChunk(g,o,c)}catch{c=Math.floor(c/2)}return x.stringifyByChar(g)}function u(g,c){for(var o=0;o<g.length;o++)c[o]=g[o];return c}l.applyFromCharCode=h;var S={};S.string={string:E,array:function(g){return b(g,new Array(g.length))},arraybuffer:function(g){return S.string.uint8array(g).buffer},uint8array:function(g){return b(g,new Uint8Array(g.length))},nodebuffer:function(g){return b(g,s.allocBuffer(g.length))}},S.array={string:h,array:E,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return s.newBufferFrom(g)}},S.arraybuffer={string:function(g){return h(new Uint8Array(g))},array:function(g){return u(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:E,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return s.newBufferFrom(new Uint8Array(g))}},S.uint8array={string:h,array:function(g){return u(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:E,nodebuffer:function(g){return s.newBufferFrom(g)}},S.nodebuffer={string:h,array:function(g){return u(g,new Array(g.length))},arraybuffer:function(g){return S.nodebuffer.uint8array(g).buffer},uint8array:function(g){return u(g,new Uint8Array(g.length))},nodebuffer:E},l.transformTo=function(g,c){if(c=c||"",!g)return c;l.checkSupport(g);var o=l.getTypeOf(c);return S[o][g](c)},l.resolve=function(g){for(var c=g.split("/"),o=[],v=0;v<c.length;v++){var A=c[v];A==="."||A===""&&v!==0&&v!==c.length-1||(A===".."?o.pop():o.push(A))}return o.join("/")},l.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":r.nodebuffer&&s.isBuffer(g)?"nodebuffer":r.uint8array&&g instanceof Uint8Array?"uint8array":r.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},l.checkSupport=function(g){if(!r[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},l.MAX_VALUE_16BITS=65535,l.MAX_VALUE_32BITS=-1,l.pretty=function(g){var c,o,v="";for(o=0;o<(g||"").length;o++)v+="\\x"+((c=g.charCodeAt(o))<16?"0":"")+c.toString(16).toUpperCase();return v},l.delay=function(g,c,o){setImmediate(function(){g.apply(o||null,c||[])})},l.inherits=function(g,c){function o(){}o.prototype=c.prototype,g.prototype=new o},l.extend=function(){var g,c,o={};for(g=0;g<arguments.length;g++)for(c in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],c)&&o[c]===void 0&&(o[c]=arguments[g][c]);return o},l.prepareContent=function(g,c,o,v,A){return _.Promise.resolve(c).then(function(R){return r.blob&&(R instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(R))!==-1)&&typeof FileReader<"u"?new _.Promise(function(P,L){var U=new FileReader;U.onload=function(M){P(M.target.result)},U.onerror=function(M){L(M.target.error)},U.readAsArrayBuffer(R)}):R}).then(function(R){var P=l.getTypeOf(R);return P?(P==="arraybuffer"?R=l.transformTo("uint8array",R):P==="string"&&(A?R=a.decode(R):o&&v!==!0&&(R=(function(L){return b(L,r.uint8array?new Uint8Array(L.length):new Array(L.length))})(R))),R):_.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,i,l){var r=t("./reader/readerFor"),a=t("./utils"),s=t("./signature"),_=t("./zipEntry"),E=t("./support");function b(x){this.files=[],this.loadOptions=x}b.prototype={checkSignature:function(x){if(!this.reader.readAndCheckSignature(x)){this.reader.index-=4;var h=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(h)+", expected "+a.pretty(x)+")")}},isSignature:function(x,h){var u=this.reader.index;this.reader.setIndex(x);var S=this.reader.readString(4)===h;return this.reader.setIndex(u),S},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var x=this.reader.readData(this.zipCommentLength),h=E.uint8array?"uint8array":"array",u=a.transformTo(h,x);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var x,h,u,S=this.zip64EndOfCentralSize-44;0<S;)x=this.reader.readInt(2),h=this.reader.readInt(4),u=this.reader.readData(h),this.zip64ExtensibleData[x]={id:x,length:h,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var x,h;for(x=0;x<this.files.length;x++)h=this.files[x],this.reader.setIndex(h.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),h.readLocalPart(this.reader),h.handleUTF8(),h.processAttributes()},readCentralDir:function(){var x;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(x=new _({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(x);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var x=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(x<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(x);var h=x;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(x=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(x),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var S=h-u;if(0<S)this.isSignature(h,s.CENTRAL_FILE_HEADER)||(this.reader.zero=S);else if(S<0)throw new Error("Corrupted zip: missing "+Math.abs(S)+" bytes.")},prepareReader:function(x){this.reader=r(x)},load:function(x){this.prepareReader(x),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=b},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,i,l){var r=t("./reader/readerFor"),a=t("./utils"),s=t("./compressedObject"),_=t("./crc32"),E=t("./utf8"),b=t("./compressions"),x=t("./support");function h(u,S){this.options=u,this.loadOptions=S}h.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var S,g;if(u.skip(22),this.fileNameLength=u.readInt(2),g=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((S=(function(c){for(var o in b)if(Object.prototype.hasOwnProperty.call(b,o)&&b[o].magic===c)return b[o];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,S,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var S=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(S),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=r(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var S,g,c,o=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<o;)S=u.readInt(2),g=u.readInt(2),c=u.readData(g),this.extraFields[S]={id:S,length:g,value:c};u.setIndex(o)},handleUTF8:function(){var u=x.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=E.utf8decode(this.fileName),this.fileCommentStr=E.utf8decode(this.fileComment);else{var S=this.findExtraFieldUnicodePath();if(S!==null)this.fileNameStr=S;else{var g=a.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var c=this.findExtraFieldUnicodeComment();if(c!==null)this.fileCommentStr=c;else{var o=a.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(o)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var S=r(u.value);return S.readInt(1)!==1||_(this.fileName)!==S.readInt(4)?null:E.utf8decode(S.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var S=r(u.value);return S.readInt(1)!==1||_(this.fileComment)!==S.readInt(4)?null:E.utf8decode(S.readData(u.length-5))}return null}},i.exports=h},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,i,l){function r(S,g,c){this.name=S,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this.unixPermissions=c.unixPermissions,this.dosPermissions=c.dosPermissions,this._data=g,this._dataBinary=c.binary,this.options={compression:c.compression,compressionOptions:c.compressionOptions}}var a=t("./stream/StreamHelper"),s=t("./stream/DataWorker"),_=t("./utf8"),E=t("./compressedObject"),b=t("./stream/GenericWorker");r.prototype={internalStream:function(S){var g=null,c="string";try{if(!S)throw new Error("No output type specified.");var o=(c=S.toLowerCase())==="string"||c==="text";c!=="binarystring"&&c!=="text"||(c="string"),g=this._decompressWorker();var v=!this._dataBinary;v&&!o&&(g=g.pipe(new _.Utf8EncodeWorker)),!v&&o&&(g=g.pipe(new _.Utf8DecodeWorker))}catch(A){(g=new b("error")).error(A)}return new a(g,c,"")},async:function(S,g){return this.internalStream(S).accumulate(g)},nodeStream:function(S,g){return this.internalStream(S||"nodebuffer").toNodejsStream(g)},_compressWorker:function(S,g){if(this._data instanceof E&&this._data.compression.magic===S.magic)return this._data.getCompressedWorker();var c=this._decompressWorker();return this._dataBinary||(c=c.pipe(new _.Utf8EncodeWorker)),E.createWorkerFrom(c,S,g)},_decompressWorker:function(){return this._data instanceof E?this._data.getContentWorker():this._data instanceof b?this._data:new s(this._data)}};for(var x=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],h=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<x.length;u++)r.prototype[x[u]]=h;i.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,i,l){(function(r){var a,s,_=r.MutationObserver||r.WebKitMutationObserver;if(_){var E=0,b=new _(S),x=r.document.createTextNode("");b.observe(x,{characterData:!0}),a=function(){x.data=E=++E%2}}else if(r.setImmediate||r.MessageChannel===void 0)a="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var g=r.document.createElement("script");g.onreadystatechange=function(){S(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},r.document.documentElement.appendChild(g)}:function(){setTimeout(S,0)};else{var h=new r.MessageChannel;h.port1.onmessage=S,a=function(){h.port2.postMessage(0)}}var u=[];function S(){var g,c;s=!0;for(var o=u.length;o;){for(c=u,u=[],g=-1;++g<o;)c[g]();o=u.length}s=!1}i.exports=function(g){u.push(g)!==1||s||a()}}).call(this,typeof Hn<"u"?Hn:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,i,l){var r=t("immediate");function a(){}var s={},_=["REJECTED"],E=["FULFILLED"],b=["PENDING"];function x(o){if(typeof o!="function")throw new TypeError("resolver must be a function");this.state=b,this.queue=[],this.outcome=void 0,o!==a&&g(this,o)}function h(o,v,A){this.promise=o,typeof v=="function"&&(this.onFulfilled=v,this.callFulfilled=this.otherCallFulfilled),typeof A=="function"&&(this.onRejected=A,this.callRejected=this.otherCallRejected)}function u(o,v,A){r(function(){var R;try{R=v(A)}catch(P){return s.reject(o,P)}R===o?s.reject(o,new TypeError("Cannot resolve promise with itself")):s.resolve(o,R)})}function S(o){var v=o&&o.then;if(o&&(typeof o=="object"||typeof o=="function")&&typeof v=="function")return function(){v.apply(o,arguments)}}function g(o,v){var A=!1;function R(U){A||(A=!0,s.reject(o,U))}function P(U){A||(A=!0,s.resolve(o,U))}var L=c(function(){v(P,R)});L.status==="error"&&R(L.value)}function c(o,v){var A={};try{A.value=o(v),A.status="success"}catch(R){A.status="error",A.value=R}return A}(i.exports=x).prototype.finally=function(o){if(typeof o!="function")return this;var v=this.constructor;return this.then(function(A){return v.resolve(o()).then(function(){return A})},function(A){return v.resolve(o()).then(function(){throw A})})},x.prototype.catch=function(o){return this.then(null,o)},x.prototype.then=function(o,v){if(typeof o!="function"&&this.state===E||typeof v!="function"&&this.state===_)return this;var A=new this.constructor(a);return this.state!==b?u(A,this.state===E?o:v,this.outcome):this.queue.push(new h(A,o,v)),A},h.prototype.callFulfilled=function(o){s.resolve(this.promise,o)},h.prototype.otherCallFulfilled=function(o){u(this.promise,this.onFulfilled,o)},h.prototype.callRejected=function(o){s.reject(this.promise,o)},h.prototype.otherCallRejected=function(o){u(this.promise,this.onRejected,o)},s.resolve=function(o,v){var A=c(S,v);if(A.status==="error")return s.reject(o,A.value);var R=A.value;if(R)g(o,R);else{o.state=E,o.outcome=v;for(var P=-1,L=o.queue.length;++P<L;)o.queue[P].callFulfilled(v)}return o},s.reject=function(o,v){o.state=_,o.outcome=v;for(var A=-1,R=o.queue.length;++A<R;)o.queue[A].callRejected(v);return o},x.resolve=function(o){return o instanceof this?o:s.resolve(new this(a),o)},x.reject=function(o){var v=new this(a);return s.reject(v,o)},x.all=function(o){var v=this;if(Object.prototype.toString.call(o)!=="[object Array]")return this.reject(new TypeError("must be an array"));var A=o.length,R=!1;if(!A)return this.resolve([]);for(var P=new Array(A),L=0,U=-1,M=new this(a);++U<A;)T(o[U],U);return M;function T(K,F){v.resolve(K).then(function(C){P[F]=C,++L!==A||R||(R=!0,s.resolve(M,P))},function(C){R||(R=!0,s.reject(M,C))})}},x.race=function(o){var v=this;if(Object.prototype.toString.call(o)!=="[object Array]")return this.reject(new TypeError("must be an array"));var A=o.length,R=!1;if(!A)return this.resolve([]);for(var P=-1,L=new this(a);++P<A;)U=o[P],v.resolve(U).then(function(M){R||(R=!0,s.resolve(L,M))},function(M){R||(R=!0,s.reject(L,M))});var U;return L}},{immediate:36}],38:[function(t,i,l){var r={};(0,t("./lib/utils/common").assign)(r,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),i.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,i,l){var r=t("./zlib/deflate"),a=t("./utils/common"),s=t("./utils/strings"),_=t("./zlib/messages"),E=t("./zlib/zstream"),b=Object.prototype.toString,x=0,h=-1,u=0,S=8;function g(o){if(!(this instanceof g))return new g(o);this.options=a.assign({level:h,method:S,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},o||{});var v=this.options;v.raw&&0<v.windowBits?v.windowBits=-v.windowBits:v.gzip&&0<v.windowBits&&v.windowBits<16&&(v.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new E,this.strm.avail_out=0;var A=r.deflateInit2(this.strm,v.level,v.method,v.windowBits,v.memLevel,v.strategy);if(A!==x)throw new Error(_[A]);if(v.header&&r.deflateSetHeader(this.strm,v.header),v.dictionary){var R;if(R=typeof v.dictionary=="string"?s.string2buf(v.dictionary):b.call(v.dictionary)==="[object ArrayBuffer]"?new Uint8Array(v.dictionary):v.dictionary,(A=r.deflateSetDictionary(this.strm,R))!==x)throw new Error(_[A]);this._dict_set=!0}}function c(o,v){var A=new g(v);if(A.push(o,!0),A.err)throw A.msg||_[A.err];return A.result}g.prototype.push=function(o,v){var A,R,P=this.strm,L=this.options.chunkSize;if(this.ended)return!1;R=v===~~v?v:v===!0?4:0,typeof o=="string"?P.input=s.string2buf(o):b.call(o)==="[object ArrayBuffer]"?P.input=new Uint8Array(o):P.input=o,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new a.Buf8(L),P.next_out=0,P.avail_out=L),(A=r.deflate(P,R))!==1&&A!==x)return this.onEnd(A),!(this.ended=!0);P.avail_out!==0&&(P.avail_in!==0||R!==4&&R!==2)||(this.options.to==="string"?this.onData(s.buf2binstring(a.shrinkBuf(P.output,P.next_out))):this.onData(a.shrinkBuf(P.output,P.next_out)))}while((0<P.avail_in||P.avail_out===0)&&A!==1);return R===4?(A=r.deflateEnd(this.strm),this.onEnd(A),this.ended=!0,A===x):R!==2||(this.onEnd(x),!(P.avail_out=0))},g.prototype.onData=function(o){this.chunks.push(o)},g.prototype.onEnd=function(o){o===x&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=o,this.msg=this.strm.msg},l.Deflate=g,l.deflate=c,l.deflateRaw=function(o,v){return(v=v||{}).raw=!0,c(o,v)},l.gzip=function(o,v){return(v=v||{}).gzip=!0,c(o,v)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,i,l){var r=t("./zlib/inflate"),a=t("./utils/common"),s=t("./utils/strings"),_=t("./zlib/constants"),E=t("./zlib/messages"),b=t("./zlib/zstream"),x=t("./zlib/gzheader"),h=Object.prototype.toString;function u(g){if(!(this instanceof u))return new u(g);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},g||{});var c=this.options;c.raw&&0<=c.windowBits&&c.windowBits<16&&(c.windowBits=-c.windowBits,c.windowBits===0&&(c.windowBits=-15)),!(0<=c.windowBits&&c.windowBits<16)||g&&g.windowBits||(c.windowBits+=32),15<c.windowBits&&c.windowBits<48&&(15&c.windowBits)==0&&(c.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new b,this.strm.avail_out=0;var o=r.inflateInit2(this.strm,c.windowBits);if(o!==_.Z_OK)throw new Error(E[o]);this.header=new x,r.inflateGetHeader(this.strm,this.header)}function S(g,c){var o=new u(c);if(o.push(g,!0),o.err)throw o.msg||E[o.err];return o.result}u.prototype.push=function(g,c){var o,v,A,R,P,L,U=this.strm,M=this.options.chunkSize,T=this.options.dictionary,K=!1;if(this.ended)return!1;v=c===~~c?c:c===!0?_.Z_FINISH:_.Z_NO_FLUSH,typeof g=="string"?U.input=s.binstring2buf(g):h.call(g)==="[object ArrayBuffer]"?U.input=new Uint8Array(g):U.input=g,U.next_in=0,U.avail_in=U.input.length;do{if(U.avail_out===0&&(U.output=new a.Buf8(M),U.next_out=0,U.avail_out=M),(o=r.inflate(U,_.Z_NO_FLUSH))===_.Z_NEED_DICT&&T&&(L=typeof T=="string"?s.string2buf(T):h.call(T)==="[object ArrayBuffer]"?new Uint8Array(T):T,o=r.inflateSetDictionary(this.strm,L)),o===_.Z_BUF_ERROR&&K===!0&&(o=_.Z_OK,K=!1),o!==_.Z_STREAM_END&&o!==_.Z_OK)return this.onEnd(o),!(this.ended=!0);U.next_out&&(U.avail_out!==0&&o!==_.Z_STREAM_END&&(U.avail_in!==0||v!==_.Z_FINISH&&v!==_.Z_SYNC_FLUSH)||(this.options.to==="string"?(A=s.utf8border(U.output,U.next_out),R=U.next_out-A,P=s.buf2string(U.output,A),U.next_out=R,U.avail_out=M-R,R&&a.arraySet(U.output,U.output,A,R,0),this.onData(P)):this.onData(a.shrinkBuf(U.output,U.next_out)))),U.avail_in===0&&U.avail_out===0&&(K=!0)}while((0<U.avail_in||U.avail_out===0)&&o!==_.Z_STREAM_END);return o===_.Z_STREAM_END&&(v=_.Z_FINISH),v===_.Z_FINISH?(o=r.inflateEnd(this.strm),this.onEnd(o),this.ended=!0,o===_.Z_OK):v!==_.Z_SYNC_FLUSH||(this.onEnd(_.Z_OK),!(U.avail_out=0))},u.prototype.onData=function(g){this.chunks.push(g)},u.prototype.onEnd=function(g){g===_.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},l.Inflate=u,l.inflate=S,l.inflateRaw=function(g,c){return(c=c||{}).raw=!0,S(g,c)},l.ungzip=S},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,i,l){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";l.assign=function(_){for(var E=Array.prototype.slice.call(arguments,1);E.length;){var b=E.shift();if(b){if(typeof b!="object")throw new TypeError(b+"must be non-object");for(var x in b)b.hasOwnProperty(x)&&(_[x]=b[x])}}return _},l.shrinkBuf=function(_,E){return _.length===E?_:_.subarray?_.subarray(0,E):(_.length=E,_)};var a={arraySet:function(_,E,b,x,h){if(E.subarray&&_.subarray)_.set(E.subarray(b,b+x),h);else for(var u=0;u<x;u++)_[h+u]=E[b+u]},flattenChunks:function(_){var E,b,x,h,u,S;for(E=x=0,b=_.length;E<b;E++)x+=_[E].length;for(S=new Uint8Array(x),E=h=0,b=_.length;E<b;E++)u=_[E],S.set(u,h),h+=u.length;return S}},s={arraySet:function(_,E,b,x,h){for(var u=0;u<x;u++)_[h+u]=E[b+u]},flattenChunks:function(_){return[].concat.apply([],_)}};l.setTyped=function(_){_?(l.Buf8=Uint8Array,l.Buf16=Uint16Array,l.Buf32=Int32Array,l.assign(l,a)):(l.Buf8=Array,l.Buf16=Array,l.Buf32=Array,l.assign(l,s))},l.setTyped(r)},{}],42:[function(t,i,l){var r=t("./common"),a=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{s=!1}for(var _=new r.Buf8(256),E=0;E<256;E++)_[E]=252<=E?6:248<=E?5:240<=E?4:224<=E?3:192<=E?2:1;function b(x,h){if(h<65537&&(x.subarray&&s||!x.subarray&&a))return String.fromCharCode.apply(null,r.shrinkBuf(x,h));for(var u="",S=0;S<h;S++)u+=String.fromCharCode(x[S]);return u}_[254]=_[254]=1,l.string2buf=function(x){var h,u,S,g,c,o=x.length,v=0;for(g=0;g<o;g++)(64512&(u=x.charCodeAt(g)))==55296&&g+1<o&&(64512&(S=x.charCodeAt(g+1)))==56320&&(u=65536+(u-55296<<10)+(S-56320),g++),v+=u<128?1:u<2048?2:u<65536?3:4;for(h=new r.Buf8(v),g=c=0;c<v;g++)(64512&(u=x.charCodeAt(g)))==55296&&g+1<o&&(64512&(S=x.charCodeAt(g+1)))==56320&&(u=65536+(u-55296<<10)+(S-56320),g++),u<128?h[c++]=u:(u<2048?h[c++]=192|u>>>6:(u<65536?h[c++]=224|u>>>12:(h[c++]=240|u>>>18,h[c++]=128|u>>>12&63),h[c++]=128|u>>>6&63),h[c++]=128|63&u);return h},l.buf2binstring=function(x){return b(x,x.length)},l.binstring2buf=function(x){for(var h=new r.Buf8(x.length),u=0,S=h.length;u<S;u++)h[u]=x.charCodeAt(u);return h},l.buf2string=function(x,h){var u,S,g,c,o=h||x.length,v=new Array(2*o);for(u=S=0;u<o;)if((g=x[u++])<128)v[S++]=g;else if(4<(c=_[g]))v[S++]=65533,u+=c-1;else{for(g&=c===2?31:c===3?15:7;1<c&&u<o;)g=g<<6|63&x[u++],c--;1<c?v[S++]=65533:g<65536?v[S++]=g:(g-=65536,v[S++]=55296|g>>10&1023,v[S++]=56320|1023&g)}return b(v,S)},l.utf8border=function(x,h){var u;for((h=h||x.length)>x.length&&(h=x.length),u=h-1;0<=u&&(192&x[u])==128;)u--;return u<0||u===0?h:u+_[x[u]]>h?u:h}},{"./common":41}],43:[function(t,i,l){i.exports=function(r,a,s,_){for(var E=65535&r|0,b=r>>>16&65535|0,x=0;s!==0;){for(s-=x=2e3<s?2e3:s;b=b+(E=E+a[_++]|0)|0,--x;);E%=65521,b%=65521}return E|b<<16|0}},{}],44:[function(t,i,l){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,i,l){var r=(function(){for(var a,s=[],_=0;_<256;_++){a=_;for(var E=0;E<8;E++)a=1&a?3988292384^a>>>1:a>>>1;s[_]=a}return s})();i.exports=function(a,s,_,E){var b=r,x=E+_;a^=-1;for(var h=E;h<x;h++)a=a>>>8^b[255&(a^s[h])];return-1^a}},{}],46:[function(t,i,l){var r,a=t("../utils/common"),s=t("./trees"),_=t("./adler32"),E=t("./crc32"),b=t("./messages"),x=0,h=4,u=0,S=-2,g=-1,c=4,o=2,v=8,A=9,R=286,P=30,L=19,U=2*R+1,M=15,T=3,K=258,F=K+T+1,C=42,N=113,d=1,B=2,X=3,O=4;function oe(f,Y){return f.msg=b[Y],Y}function j(f){return(f<<1)-(4<f?9:0)}function ce(f){for(var Y=f.length;0<=--Y;)f[Y]=0}function z(f){var Y=f.state,V=Y.pending;V>f.avail_out&&(V=f.avail_out),V!==0&&(a.arraySet(f.output,Y.pending_buf,Y.pending_out,V,f.next_out),f.next_out+=V,Y.pending_out+=V,f.total_out+=V,f.avail_out-=V,Y.pending-=V,Y.pending===0&&(Y.pending_out=0))}function H(f,Y){s._tr_flush_block(f,0<=f.block_start?f.block_start:-1,f.strstart-f.block_start,Y),f.block_start=f.strstart,z(f.strm)}function me(f,Y){f.pending_buf[f.pending++]=Y}function he(f,Y){f.pending_buf[f.pending++]=Y>>>8&255,f.pending_buf[f.pending++]=255&Y}function ue(f,Y){var V,D,p=f.max_chain_length,k=f.strstart,te=f.prev_length,re=f.nice_match,G=f.strstart>f.w_size-F?f.strstart-(f.w_size-F):0,w=f.window,m=f.w_mask,I=f.prev,Z=f.strstart+K,ie=w[k+te-1],$=w[k+te];f.prev_length>=f.good_match&&(p>>=2),re>f.lookahead&&(re=f.lookahead);do if(w[(V=Y)+te]===$&&w[V+te-1]===ie&&w[V]===w[k]&&w[++V]===w[k+1]){k+=2,V++;do;while(w[++k]===w[++V]&&w[++k]===w[++V]&&w[++k]===w[++V]&&w[++k]===w[++V]&&w[++k]===w[++V]&&w[++k]===w[++V]&&w[++k]===w[++V]&&w[++k]===w[++V]&&k<Z);if(D=K-(Z-k),k=Z-K,te<D){if(f.match_start=Y,re<=(te=D))break;ie=w[k+te-1],$=w[k+te]}}while((Y=I[Y&m])>G&&--p!=0);return te<=f.lookahead?te:f.lookahead}function ee(f){var Y,V,D,p,k,te,re,G,w,m,I=f.w_size;do{if(p=f.window_size-f.lookahead-f.strstart,f.strstart>=I+(I-F)){for(a.arraySet(f.window,f.window,I,I,0),f.match_start-=I,f.strstart-=I,f.block_start-=I,Y=V=f.hash_size;D=f.head[--Y],f.head[Y]=I<=D?D-I:0,--V;);for(Y=V=I;D=f.prev[--Y],f.prev[Y]=I<=D?D-I:0,--V;);p+=I}if(f.strm.avail_in===0)break;if(te=f.strm,re=f.window,G=f.strstart+f.lookahead,w=p,m=void 0,m=te.avail_in,w<m&&(m=w),V=m===0?0:(te.avail_in-=m,a.arraySet(re,te.input,te.next_in,m,G),te.state.wrap===1?te.adler=_(te.adler,re,m,G):te.state.wrap===2&&(te.adler=E(te.adler,re,m,G)),te.next_in+=m,te.total_in+=m,m),f.lookahead+=V,f.lookahead+f.insert>=T)for(k=f.strstart-f.insert,f.ins_h=f.window[k],f.ins_h=(f.ins_h<<f.hash_shift^f.window[k+1])&f.hash_mask;f.insert&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[k+T-1])&f.hash_mask,f.prev[k&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=k,k++,f.insert--,!(f.lookahead+f.insert<T)););}while(f.lookahead<F&&f.strm.avail_in!==0)}function fe(f,Y){for(var V,D;;){if(f.lookahead<F){if(ee(f),f.lookahead<F&&Y===x)return d;if(f.lookahead===0)break}if(V=0,f.lookahead>=T&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+T-1])&f.hash_mask,V=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),V!==0&&f.strstart-V<=f.w_size-F&&(f.match_length=ue(f,V)),f.match_length>=T)if(D=s._tr_tally(f,f.strstart-f.match_start,f.match_length-T),f.lookahead-=f.match_length,f.match_length<=f.max_lazy_match&&f.lookahead>=T){for(f.match_length--;f.strstart++,f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+T-1])&f.hash_mask,V=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart,--f.match_length!=0;);f.strstart++}else f.strstart+=f.match_length,f.match_length=0,f.ins_h=f.window[f.strstart],f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+1])&f.hash_mask;else D=s._tr_tally(f,0,f.window[f.strstart]),f.lookahead--,f.strstart++;if(D&&(H(f,!1),f.strm.avail_out===0))return d}return f.insert=f.strstart<T-1?f.strstart:T-1,Y===h?(H(f,!0),f.strm.avail_out===0?X:O):f.last_lit&&(H(f,!1),f.strm.avail_out===0)?d:B}function se(f,Y){for(var V,D,p;;){if(f.lookahead<F){if(ee(f),f.lookahead<F&&Y===x)return d;if(f.lookahead===0)break}if(V=0,f.lookahead>=T&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+T-1])&f.hash_mask,V=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),f.prev_length=f.match_length,f.prev_match=f.match_start,f.match_length=T-1,V!==0&&f.prev_length<f.max_lazy_match&&f.strstart-V<=f.w_size-F&&(f.match_length=ue(f,V),f.match_length<=5&&(f.strategy===1||f.match_length===T&&4096<f.strstart-f.match_start)&&(f.match_length=T-1)),f.prev_length>=T&&f.match_length<=f.prev_length){for(p=f.strstart+f.lookahead-T,D=s._tr_tally(f,f.strstart-1-f.prev_match,f.prev_length-T),f.lookahead-=f.prev_length-1,f.prev_length-=2;++f.strstart<=p&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+T-1])&f.hash_mask,V=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),--f.prev_length!=0;);if(f.match_available=0,f.match_length=T-1,f.strstart++,D&&(H(f,!1),f.strm.avail_out===0))return d}else if(f.match_available){if((D=s._tr_tally(f,0,f.window[f.strstart-1]))&&H(f,!1),f.strstart++,f.lookahead--,f.strm.avail_out===0)return d}else f.match_available=1,f.strstart++,f.lookahead--}return f.match_available&&(D=s._tr_tally(f,0,f.window[f.strstart-1]),f.match_available=0),f.insert=f.strstart<T-1?f.strstart:T-1,Y===h?(H(f,!0),f.strm.avail_out===0?X:O):f.last_lit&&(H(f,!1),f.strm.avail_out===0)?d:B}function Se(f,Y,V,D,p){this.good_length=f,this.max_lazy=Y,this.nice_length=V,this.max_chain=D,this.func=p}function Te(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*U),this.dyn_dtree=new a.Buf16(2*(2*P+1)),this.bl_tree=new a.Buf16(2*(2*L+1)),ce(this.dyn_ltree),ce(this.dyn_dtree),ce(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(M+1),this.heap=new a.Buf16(2*R+1),ce(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*R+1),ce(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ae(f){var Y;return f&&f.state?(f.total_in=f.total_out=0,f.data_type=o,(Y=f.state).pending=0,Y.pending_out=0,Y.wrap<0&&(Y.wrap=-Y.wrap),Y.status=Y.wrap?C:N,f.adler=Y.wrap===2?0:1,Y.last_flush=x,s._tr_init(Y),u):oe(f,S)}function qe(f){var Y=Ae(f);return Y===u&&(function(V){V.window_size=2*V.w_size,ce(V.head),V.max_lazy_match=r[V.level].max_lazy,V.good_match=r[V.level].good_length,V.nice_match=r[V.level].nice_length,V.max_chain_length=r[V.level].max_chain,V.strstart=0,V.block_start=0,V.lookahead=0,V.insert=0,V.match_length=V.prev_length=T-1,V.match_available=0,V.ins_h=0})(f.state),Y}function ke(f,Y,V,D,p,k){if(!f)return S;var te=1;if(Y===g&&(Y=6),D<0?(te=0,D=-D):15<D&&(te=2,D-=16),p<1||A<p||V!==v||D<8||15<D||Y<0||9<Y||k<0||c<k)return oe(f,S);D===8&&(D=9);var re=new Te;return(f.state=re).strm=f,re.wrap=te,re.gzhead=null,re.w_bits=D,re.w_size=1<<re.w_bits,re.w_mask=re.w_size-1,re.hash_bits=p+7,re.hash_size=1<<re.hash_bits,re.hash_mask=re.hash_size-1,re.hash_shift=~~((re.hash_bits+T-1)/T),re.window=new a.Buf8(2*re.w_size),re.head=new a.Buf16(re.hash_size),re.prev=new a.Buf16(re.w_size),re.lit_bufsize=1<<p+6,re.pending_buf_size=4*re.lit_bufsize,re.pending_buf=new a.Buf8(re.pending_buf_size),re.d_buf=1*re.lit_bufsize,re.l_buf=3*re.lit_bufsize,re.level=Y,re.strategy=k,re.method=V,qe(f)}r=[new Se(0,0,0,0,function(f,Y){var V=65535;for(V>f.pending_buf_size-5&&(V=f.pending_buf_size-5);;){if(f.lookahead<=1){if(ee(f),f.lookahead===0&&Y===x)return d;if(f.lookahead===0)break}f.strstart+=f.lookahead,f.lookahead=0;var D=f.block_start+V;if((f.strstart===0||f.strstart>=D)&&(f.lookahead=f.strstart-D,f.strstart=D,H(f,!1),f.strm.avail_out===0)||f.strstart-f.block_start>=f.w_size-F&&(H(f,!1),f.strm.avail_out===0))return d}return f.insert=0,Y===h?(H(f,!0),f.strm.avail_out===0?X:O):(f.strstart>f.block_start&&(H(f,!1),f.strm.avail_out),d)}),new Se(4,4,8,4,fe),new Se(4,5,16,8,fe),new Se(4,6,32,32,fe),new Se(4,4,16,16,se),new Se(8,16,32,32,se),new Se(8,16,128,128,se),new Se(8,32,128,256,se),new Se(32,128,258,1024,se),new Se(32,258,258,4096,se)],l.deflateInit=function(f,Y){return ke(f,Y,v,15,8,0)},l.deflateInit2=ke,l.deflateReset=qe,l.deflateResetKeep=Ae,l.deflateSetHeader=function(f,Y){return f&&f.state?f.state.wrap!==2?S:(f.state.gzhead=Y,u):S},l.deflate=function(f,Y){var V,D,p,k;if(!f||!f.state||5<Y||Y<0)return f?oe(f,S):S;if(D=f.state,!f.output||!f.input&&f.avail_in!==0||D.status===666&&Y!==h)return oe(f,f.avail_out===0?-5:S);if(D.strm=f,V=D.last_flush,D.last_flush=Y,D.status===C)if(D.wrap===2)f.adler=0,me(D,31),me(D,139),me(D,8),D.gzhead?(me(D,(D.gzhead.text?1:0)+(D.gzhead.hcrc?2:0)+(D.gzhead.extra?4:0)+(D.gzhead.name?8:0)+(D.gzhead.comment?16:0)),me(D,255&D.gzhead.time),me(D,D.gzhead.time>>8&255),me(D,D.gzhead.time>>16&255),me(D,D.gzhead.time>>24&255),me(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),me(D,255&D.gzhead.os),D.gzhead.extra&&D.gzhead.extra.length&&(me(D,255&D.gzhead.extra.length),me(D,D.gzhead.extra.length>>8&255)),D.gzhead.hcrc&&(f.adler=E(f.adler,D.pending_buf,D.pending,0)),D.gzindex=0,D.status=69):(me(D,0),me(D,0),me(D,0),me(D,0),me(D,0),me(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),me(D,3),D.status=N);else{var te=v+(D.w_bits-8<<4)<<8;te|=(2<=D.strategy||D.level<2?0:D.level<6?1:D.level===6?2:3)<<6,D.strstart!==0&&(te|=32),te+=31-te%31,D.status=N,he(D,te),D.strstart!==0&&(he(D,f.adler>>>16),he(D,65535&f.adler)),f.adler=1}if(D.status===69)if(D.gzhead.extra){for(p=D.pending;D.gzindex<(65535&D.gzhead.extra.length)&&(D.pending!==D.pending_buf_size||(D.gzhead.hcrc&&D.pending>p&&(f.adler=E(f.adler,D.pending_buf,D.pending-p,p)),z(f),p=D.pending,D.pending!==D.pending_buf_size));)me(D,255&D.gzhead.extra[D.gzindex]),D.gzindex++;D.gzhead.hcrc&&D.pending>p&&(f.adler=E(f.adler,D.pending_buf,D.pending-p,p)),D.gzindex===D.gzhead.extra.length&&(D.gzindex=0,D.status=73)}else D.status=73;if(D.status===73)if(D.gzhead.name){p=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>p&&(f.adler=E(f.adler,D.pending_buf,D.pending-p,p)),z(f),p=D.pending,D.pending===D.pending_buf_size)){k=1;break}k=D.gzindex<D.gzhead.name.length?255&D.gzhead.name.charCodeAt(D.gzindex++):0,me(D,k)}while(k!==0);D.gzhead.hcrc&&D.pending>p&&(f.adler=E(f.adler,D.pending_buf,D.pending-p,p)),k===0&&(D.gzindex=0,D.status=91)}else D.status=91;if(D.status===91)if(D.gzhead.comment){p=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>p&&(f.adler=E(f.adler,D.pending_buf,D.pending-p,p)),z(f),p=D.pending,D.pending===D.pending_buf_size)){k=1;break}k=D.gzindex<D.gzhead.comment.length?255&D.gzhead.comment.charCodeAt(D.gzindex++):0,me(D,k)}while(k!==0);D.gzhead.hcrc&&D.pending>p&&(f.adler=E(f.adler,D.pending_buf,D.pending-p,p)),k===0&&(D.status=103)}else D.status=103;if(D.status===103&&(D.gzhead.hcrc?(D.pending+2>D.pending_buf_size&&z(f),D.pending+2<=D.pending_buf_size&&(me(D,255&f.adler),me(D,f.adler>>8&255),f.adler=0,D.status=N)):D.status=N),D.pending!==0){if(z(f),f.avail_out===0)return D.last_flush=-1,u}else if(f.avail_in===0&&j(Y)<=j(V)&&Y!==h)return oe(f,-5);if(D.status===666&&f.avail_in!==0)return oe(f,-5);if(f.avail_in!==0||D.lookahead!==0||Y!==x&&D.status!==666){var re=D.strategy===2?(function(G,w){for(var m;;){if(G.lookahead===0&&(ee(G),G.lookahead===0)){if(w===x)return d;break}if(G.match_length=0,m=s._tr_tally(G,0,G.window[G.strstart]),G.lookahead--,G.strstart++,m&&(H(G,!1),G.strm.avail_out===0))return d}return G.insert=0,w===h?(H(G,!0),G.strm.avail_out===0?X:O):G.last_lit&&(H(G,!1),G.strm.avail_out===0)?d:B})(D,Y):D.strategy===3?(function(G,w){for(var m,I,Z,ie,$=G.window;;){if(G.lookahead<=K){if(ee(G),G.lookahead<=K&&w===x)return d;if(G.lookahead===0)break}if(G.match_length=0,G.lookahead>=T&&0<G.strstart&&(I=$[Z=G.strstart-1])===$[++Z]&&I===$[++Z]&&I===$[++Z]){ie=G.strstart+K;do;while(I===$[++Z]&&I===$[++Z]&&I===$[++Z]&&I===$[++Z]&&I===$[++Z]&&I===$[++Z]&&I===$[++Z]&&I===$[++Z]&&Z<ie);G.match_length=K-(ie-Z),G.match_length>G.lookahead&&(G.match_length=G.lookahead)}if(G.match_length>=T?(m=s._tr_tally(G,1,G.match_length-T),G.lookahead-=G.match_length,G.strstart+=G.match_length,G.match_length=0):(m=s._tr_tally(G,0,G.window[G.strstart]),G.lookahead--,G.strstart++),m&&(H(G,!1),G.strm.avail_out===0))return d}return G.insert=0,w===h?(H(G,!0),G.strm.avail_out===0?X:O):G.last_lit&&(H(G,!1),G.strm.avail_out===0)?d:B})(D,Y):r[D.level].func(D,Y);if(re!==X&&re!==O||(D.status=666),re===d||re===X)return f.avail_out===0&&(D.last_flush=-1),u;if(re===B&&(Y===1?s._tr_align(D):Y!==5&&(s._tr_stored_block(D,0,0,!1),Y===3&&(ce(D.head),D.lookahead===0&&(D.strstart=0,D.block_start=0,D.insert=0))),z(f),f.avail_out===0))return D.last_flush=-1,u}return Y!==h?u:D.wrap<=0?1:(D.wrap===2?(me(D,255&f.adler),me(D,f.adler>>8&255),me(D,f.adler>>16&255),me(D,f.adler>>24&255),me(D,255&f.total_in),me(D,f.total_in>>8&255),me(D,f.total_in>>16&255),me(D,f.total_in>>24&255)):(he(D,f.adler>>>16),he(D,65535&f.adler)),z(f),0<D.wrap&&(D.wrap=-D.wrap),D.pending!==0?u:1)},l.deflateEnd=function(f){var Y;return f&&f.state?(Y=f.state.status)!==C&&Y!==69&&Y!==73&&Y!==91&&Y!==103&&Y!==N&&Y!==666?oe(f,S):(f.state=null,Y===N?oe(f,-3):u):S},l.deflateSetDictionary=function(f,Y){var V,D,p,k,te,re,G,w,m=Y.length;if(!f||!f.state||(k=(V=f.state).wrap)===2||k===1&&V.status!==C||V.lookahead)return S;for(k===1&&(f.adler=_(f.adler,Y,m,0)),V.wrap=0,m>=V.w_size&&(k===0&&(ce(V.head),V.strstart=0,V.block_start=0,V.insert=0),w=new a.Buf8(V.w_size),a.arraySet(w,Y,m-V.w_size,V.w_size,0),Y=w,m=V.w_size),te=f.avail_in,re=f.next_in,G=f.input,f.avail_in=m,f.next_in=0,f.input=Y,ee(V);V.lookahead>=T;){for(D=V.strstart,p=V.lookahead-(T-1);V.ins_h=(V.ins_h<<V.hash_shift^V.window[D+T-1])&V.hash_mask,V.prev[D&V.w_mask]=V.head[V.ins_h],V.head[V.ins_h]=D,D++,--p;);V.strstart=D,V.lookahead=T-1,ee(V)}return V.strstart+=V.lookahead,V.block_start=V.strstart,V.insert=V.lookahead,V.lookahead=0,V.match_length=V.prev_length=T-1,V.match_available=0,f.next_in=re,f.input=G,f.avail_in=te,V.wrap=k,u},l.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,i,l){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,i,l){i.exports=function(r,a){var s,_,E,b,x,h,u,S,g,c,o,v,A,R,P,L,U,M,T,K,F,C,N,d,B;s=r.state,_=r.next_in,d=r.input,E=_+(r.avail_in-5),b=r.next_out,B=r.output,x=b-(a-r.avail_out),h=b+(r.avail_out-257),u=s.dmax,S=s.wsize,g=s.whave,c=s.wnext,o=s.window,v=s.hold,A=s.bits,R=s.lencode,P=s.distcode,L=(1<<s.lenbits)-1,U=(1<<s.distbits)-1;e:do{A<15&&(v+=d[_++]<<A,A+=8,v+=d[_++]<<A,A+=8),M=R[v&L];t:for(;;){if(v>>>=T=M>>>24,A-=T,(T=M>>>16&255)===0)B[b++]=65535&M;else{if(!(16&T)){if((64&T)==0){M=R[(65535&M)+(v&(1<<T)-1)];continue t}if(32&T){s.mode=12;break e}r.msg="invalid literal/length code",s.mode=30;break e}K=65535&M,(T&=15)&&(A<T&&(v+=d[_++]<<A,A+=8),K+=v&(1<<T)-1,v>>>=T,A-=T),A<15&&(v+=d[_++]<<A,A+=8,v+=d[_++]<<A,A+=8),M=P[v&U];n:for(;;){if(v>>>=T=M>>>24,A-=T,!(16&(T=M>>>16&255))){if((64&T)==0){M=P[(65535&M)+(v&(1<<T)-1)];continue n}r.msg="invalid distance code",s.mode=30;break e}if(F=65535&M,A<(T&=15)&&(v+=d[_++]<<A,(A+=8)<T&&(v+=d[_++]<<A,A+=8)),u<(F+=v&(1<<T)-1)){r.msg="invalid distance too far back",s.mode=30;break e}if(v>>>=T,A-=T,(T=b-x)<F){if(g<(T=F-T)&&s.sane){r.msg="invalid distance too far back",s.mode=30;break e}if(N=o,(C=0)===c){if(C+=S-T,T<K){for(K-=T;B[b++]=o[C++],--T;);C=b-F,N=B}}else if(c<T){if(C+=S+c-T,(T-=c)<K){for(K-=T;B[b++]=o[C++],--T;);if(C=0,c<K){for(K-=T=c;B[b++]=o[C++],--T;);C=b-F,N=B}}}else if(C+=c-T,T<K){for(K-=T;B[b++]=o[C++],--T;);C=b-F,N=B}for(;2<K;)B[b++]=N[C++],B[b++]=N[C++],B[b++]=N[C++],K-=3;K&&(B[b++]=N[C++],1<K&&(B[b++]=N[C++]))}else{for(C=b-F;B[b++]=B[C++],B[b++]=B[C++],B[b++]=B[C++],2<(K-=3););K&&(B[b++]=B[C++],1<K&&(B[b++]=B[C++]))}break}}break}}while(_<E&&b<h);_-=K=A>>3,v&=(1<<(A-=K<<3))-1,r.next_in=_,r.next_out=b,r.avail_in=_<E?E-_+5:5-(_-E),r.avail_out=b<h?h-b+257:257-(b-h),s.hold=v,s.bits=A}},{}],49:[function(t,i,l){var r=t("../utils/common"),a=t("./adler32"),s=t("./crc32"),_=t("./inffast"),E=t("./inftrees"),b=1,x=2,h=0,u=-2,S=1,g=852,c=592;function o(C){return(C>>>24&255)+(C>>>8&65280)+((65280&C)<<8)+((255&C)<<24)}function v(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function A(C){var N;return C&&C.state?(N=C.state,C.total_in=C.total_out=N.total=0,C.msg="",N.wrap&&(C.adler=1&N.wrap),N.mode=S,N.last=0,N.havedict=0,N.dmax=32768,N.head=null,N.hold=0,N.bits=0,N.lencode=N.lendyn=new r.Buf32(g),N.distcode=N.distdyn=new r.Buf32(c),N.sane=1,N.back=-1,h):u}function R(C){var N;return C&&C.state?((N=C.state).wsize=0,N.whave=0,N.wnext=0,A(C)):u}function P(C,N){var d,B;return C&&C.state?(B=C.state,N<0?(d=0,N=-N):(d=1+(N>>4),N<48&&(N&=15)),N&&(N<8||15<N)?u:(B.window!==null&&B.wbits!==N&&(B.window=null),B.wrap=d,B.wbits=N,R(C))):u}function L(C,N){var d,B;return C?(B=new v,(C.state=B).window=null,(d=P(C,N))!==h&&(C.state=null),d):u}var U,M,T=!0;function K(C){if(T){var N;for(U=new r.Buf32(512),M=new r.Buf32(32),N=0;N<144;)C.lens[N++]=8;for(;N<256;)C.lens[N++]=9;for(;N<280;)C.lens[N++]=7;for(;N<288;)C.lens[N++]=8;for(E(b,C.lens,0,288,U,0,C.work,{bits:9}),N=0;N<32;)C.lens[N++]=5;E(x,C.lens,0,32,M,0,C.work,{bits:5}),T=!1}C.lencode=U,C.lenbits=9,C.distcode=M,C.distbits=5}function F(C,N,d,B){var X,O=C.state;return O.window===null&&(O.wsize=1<<O.wbits,O.wnext=0,O.whave=0,O.window=new r.Buf8(O.wsize)),B>=O.wsize?(r.arraySet(O.window,N,d-O.wsize,O.wsize,0),O.wnext=0,O.whave=O.wsize):(B<(X=O.wsize-O.wnext)&&(X=B),r.arraySet(O.window,N,d-B,X,O.wnext),(B-=X)?(r.arraySet(O.window,N,d-B,B,0),O.wnext=B,O.whave=O.wsize):(O.wnext+=X,O.wnext===O.wsize&&(O.wnext=0),O.whave<O.wsize&&(O.whave+=X))),0}l.inflateReset=R,l.inflateReset2=P,l.inflateResetKeep=A,l.inflateInit=function(C){return L(C,15)},l.inflateInit2=L,l.inflate=function(C,N){var d,B,X,O,oe,j,ce,z,H,me,he,ue,ee,fe,se,Se,Te,Ae,qe,ke,f,Y,V,D,p=0,k=new r.Buf8(4),te=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!C||!C.state||!C.output||!C.input&&C.avail_in!==0)return u;(d=C.state).mode===12&&(d.mode=13),oe=C.next_out,X=C.output,ce=C.avail_out,O=C.next_in,B=C.input,j=C.avail_in,z=d.hold,H=d.bits,me=j,he=ce,Y=h;e:for(;;)switch(d.mode){case S:if(d.wrap===0){d.mode=13;break}for(;H<16;){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}if(2&d.wrap&&z===35615){k[d.check=0]=255&z,k[1]=z>>>8&255,d.check=s(d.check,k,2,0),H=z=0,d.mode=2;break}if(d.flags=0,d.head&&(d.head.done=!1),!(1&d.wrap)||(((255&z)<<8)+(z>>8))%31){C.msg="incorrect header check",d.mode=30;break}if((15&z)!=8){C.msg="unknown compression method",d.mode=30;break}if(H-=4,f=8+(15&(z>>>=4)),d.wbits===0)d.wbits=f;else if(f>d.wbits){C.msg="invalid window size",d.mode=30;break}d.dmax=1<<f,C.adler=d.check=1,d.mode=512&z?10:12,H=z=0;break;case 2:for(;H<16;){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}if(d.flags=z,(255&d.flags)!=8){C.msg="unknown compression method",d.mode=30;break}if(57344&d.flags){C.msg="unknown header flags set",d.mode=30;break}d.head&&(d.head.text=z>>8&1),512&d.flags&&(k[0]=255&z,k[1]=z>>>8&255,d.check=s(d.check,k,2,0)),H=z=0,d.mode=3;case 3:for(;H<32;){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}d.head&&(d.head.time=z),512&d.flags&&(k[0]=255&z,k[1]=z>>>8&255,k[2]=z>>>16&255,k[3]=z>>>24&255,d.check=s(d.check,k,4,0)),H=z=0,d.mode=4;case 4:for(;H<16;){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}d.head&&(d.head.xflags=255&z,d.head.os=z>>8),512&d.flags&&(k[0]=255&z,k[1]=z>>>8&255,d.check=s(d.check,k,2,0)),H=z=0,d.mode=5;case 5:if(1024&d.flags){for(;H<16;){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}d.length=z,d.head&&(d.head.extra_len=z),512&d.flags&&(k[0]=255&z,k[1]=z>>>8&255,d.check=s(d.check,k,2,0)),H=z=0}else d.head&&(d.head.extra=null);d.mode=6;case 6:if(1024&d.flags&&(j<(ue=d.length)&&(ue=j),ue&&(d.head&&(f=d.head.extra_len-d.length,d.head.extra||(d.head.extra=new Array(d.head.extra_len)),r.arraySet(d.head.extra,B,O,ue,f)),512&d.flags&&(d.check=s(d.check,B,ue,O)),j-=ue,O+=ue,d.length-=ue),d.length))break e;d.length=0,d.mode=7;case 7:if(2048&d.flags){if(j===0)break e;for(ue=0;f=B[O+ue++],d.head&&f&&d.length<65536&&(d.head.name+=String.fromCharCode(f)),f&&ue<j;);if(512&d.flags&&(d.check=s(d.check,B,ue,O)),j-=ue,O+=ue,f)break e}else d.head&&(d.head.name=null);d.length=0,d.mode=8;case 8:if(4096&d.flags){if(j===0)break e;for(ue=0;f=B[O+ue++],d.head&&f&&d.length<65536&&(d.head.comment+=String.fromCharCode(f)),f&&ue<j;);if(512&d.flags&&(d.check=s(d.check,B,ue,O)),j-=ue,O+=ue,f)break e}else d.head&&(d.head.comment=null);d.mode=9;case 9:if(512&d.flags){for(;H<16;){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}if(z!==(65535&d.check)){C.msg="header crc mismatch",d.mode=30;break}H=z=0}d.head&&(d.head.hcrc=d.flags>>9&1,d.head.done=!0),C.adler=d.check=0,d.mode=12;break;case 10:for(;H<32;){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}C.adler=d.check=o(z),H=z=0,d.mode=11;case 11:if(d.havedict===0)return C.next_out=oe,C.avail_out=ce,C.next_in=O,C.avail_in=j,d.hold=z,d.bits=H,2;C.adler=d.check=1,d.mode=12;case 12:if(N===5||N===6)break e;case 13:if(d.last){z>>>=7&H,H-=7&H,d.mode=27;break}for(;H<3;){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}switch(d.last=1&z,H-=1,3&(z>>>=1)){case 0:d.mode=14;break;case 1:if(K(d),d.mode=20,N!==6)break;z>>>=2,H-=2;break e;case 2:d.mode=17;break;case 3:C.msg="invalid block type",d.mode=30}z>>>=2,H-=2;break;case 14:for(z>>>=7&H,H-=7&H;H<32;){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}if((65535&z)!=(z>>>16^65535)){C.msg="invalid stored block lengths",d.mode=30;break}if(d.length=65535&z,H=z=0,d.mode=15,N===6)break e;case 15:d.mode=16;case 16:if(ue=d.length){if(j<ue&&(ue=j),ce<ue&&(ue=ce),ue===0)break e;r.arraySet(X,B,O,ue,oe),j-=ue,O+=ue,ce-=ue,oe+=ue,d.length-=ue;break}d.mode=12;break;case 17:for(;H<14;){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}if(d.nlen=257+(31&z),z>>>=5,H-=5,d.ndist=1+(31&z),z>>>=5,H-=5,d.ncode=4+(15&z),z>>>=4,H-=4,286<d.nlen||30<d.ndist){C.msg="too many length or distance symbols",d.mode=30;break}d.have=0,d.mode=18;case 18:for(;d.have<d.ncode;){for(;H<3;){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}d.lens[te[d.have++]]=7&z,z>>>=3,H-=3}for(;d.have<19;)d.lens[te[d.have++]]=0;if(d.lencode=d.lendyn,d.lenbits=7,V={bits:d.lenbits},Y=E(0,d.lens,0,19,d.lencode,0,d.work,V),d.lenbits=V.bits,Y){C.msg="invalid code lengths set",d.mode=30;break}d.have=0,d.mode=19;case 19:for(;d.have<d.nlen+d.ndist;){for(;Se=(p=d.lencode[z&(1<<d.lenbits)-1])>>>16&255,Te=65535&p,!((se=p>>>24)<=H);){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}if(Te<16)z>>>=se,H-=se,d.lens[d.have++]=Te;else{if(Te===16){for(D=se+2;H<D;){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}if(z>>>=se,H-=se,d.have===0){C.msg="invalid bit length repeat",d.mode=30;break}f=d.lens[d.have-1],ue=3+(3&z),z>>>=2,H-=2}else if(Te===17){for(D=se+3;H<D;){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}H-=se,f=0,ue=3+(7&(z>>>=se)),z>>>=3,H-=3}else{for(D=se+7;H<D;){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}H-=se,f=0,ue=11+(127&(z>>>=se)),z>>>=7,H-=7}if(d.have+ue>d.nlen+d.ndist){C.msg="invalid bit length repeat",d.mode=30;break}for(;ue--;)d.lens[d.have++]=f}}if(d.mode===30)break;if(d.lens[256]===0){C.msg="invalid code -- missing end-of-block",d.mode=30;break}if(d.lenbits=9,V={bits:d.lenbits},Y=E(b,d.lens,0,d.nlen,d.lencode,0,d.work,V),d.lenbits=V.bits,Y){C.msg="invalid literal/lengths set",d.mode=30;break}if(d.distbits=6,d.distcode=d.distdyn,V={bits:d.distbits},Y=E(x,d.lens,d.nlen,d.ndist,d.distcode,0,d.work,V),d.distbits=V.bits,Y){C.msg="invalid distances set",d.mode=30;break}if(d.mode=20,N===6)break e;case 20:d.mode=21;case 21:if(6<=j&&258<=ce){C.next_out=oe,C.avail_out=ce,C.next_in=O,C.avail_in=j,d.hold=z,d.bits=H,_(C,he),oe=C.next_out,X=C.output,ce=C.avail_out,O=C.next_in,B=C.input,j=C.avail_in,z=d.hold,H=d.bits,d.mode===12&&(d.back=-1);break}for(d.back=0;Se=(p=d.lencode[z&(1<<d.lenbits)-1])>>>16&255,Te=65535&p,!((se=p>>>24)<=H);){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}if(Se&&(240&Se)==0){for(Ae=se,qe=Se,ke=Te;Se=(p=d.lencode[ke+((z&(1<<Ae+qe)-1)>>Ae)])>>>16&255,Te=65535&p,!(Ae+(se=p>>>24)<=H);){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}z>>>=Ae,H-=Ae,d.back+=Ae}if(z>>>=se,H-=se,d.back+=se,d.length=Te,Se===0){d.mode=26;break}if(32&Se){d.back=-1,d.mode=12;break}if(64&Se){C.msg="invalid literal/length code",d.mode=30;break}d.extra=15&Se,d.mode=22;case 22:if(d.extra){for(D=d.extra;H<D;){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}d.length+=z&(1<<d.extra)-1,z>>>=d.extra,H-=d.extra,d.back+=d.extra}d.was=d.length,d.mode=23;case 23:for(;Se=(p=d.distcode[z&(1<<d.distbits)-1])>>>16&255,Te=65535&p,!((se=p>>>24)<=H);){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}if((240&Se)==0){for(Ae=se,qe=Se,ke=Te;Se=(p=d.distcode[ke+((z&(1<<Ae+qe)-1)>>Ae)])>>>16&255,Te=65535&p,!(Ae+(se=p>>>24)<=H);){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}z>>>=Ae,H-=Ae,d.back+=Ae}if(z>>>=se,H-=se,d.back+=se,64&Se){C.msg="invalid distance code",d.mode=30;break}d.offset=Te,d.extra=15&Se,d.mode=24;case 24:if(d.extra){for(D=d.extra;H<D;){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}d.offset+=z&(1<<d.extra)-1,z>>>=d.extra,H-=d.extra,d.back+=d.extra}if(d.offset>d.dmax){C.msg="invalid distance too far back",d.mode=30;break}d.mode=25;case 25:if(ce===0)break e;if(ue=he-ce,d.offset>ue){if((ue=d.offset-ue)>d.whave&&d.sane){C.msg="invalid distance too far back",d.mode=30;break}ee=ue>d.wnext?(ue-=d.wnext,d.wsize-ue):d.wnext-ue,ue>d.length&&(ue=d.length),fe=d.window}else fe=X,ee=oe-d.offset,ue=d.length;for(ce<ue&&(ue=ce),ce-=ue,d.length-=ue;X[oe++]=fe[ee++],--ue;);d.length===0&&(d.mode=21);break;case 26:if(ce===0)break e;X[oe++]=d.length,ce--,d.mode=21;break;case 27:if(d.wrap){for(;H<32;){if(j===0)break e;j--,z|=B[O++]<<H,H+=8}if(he-=ce,C.total_out+=he,d.total+=he,he&&(C.adler=d.check=d.flags?s(d.check,X,he,oe-he):a(d.check,X,he,oe-he)),he=ce,(d.flags?z:o(z))!==d.check){C.msg="incorrect data check",d.mode=30;break}H=z=0}d.mode=28;case 28:if(d.wrap&&d.flags){for(;H<32;){if(j===0)break e;j--,z+=B[O++]<<H,H+=8}if(z!==(4294967295&d.total)){C.msg="incorrect length check",d.mode=30;break}H=z=0}d.mode=29;case 29:Y=1;break e;case 30:Y=-3;break e;case 31:return-4;default:return u}return C.next_out=oe,C.avail_out=ce,C.next_in=O,C.avail_in=j,d.hold=z,d.bits=H,(d.wsize||he!==C.avail_out&&d.mode<30&&(d.mode<27||N!==4))&&F(C,C.output,C.next_out,he-C.avail_out)?(d.mode=31,-4):(me-=C.avail_in,he-=C.avail_out,C.total_in+=me,C.total_out+=he,d.total+=he,d.wrap&&he&&(C.adler=d.check=d.flags?s(d.check,X,he,C.next_out-he):a(d.check,X,he,C.next_out-he)),C.data_type=d.bits+(d.last?64:0)+(d.mode===12?128:0)+(d.mode===20||d.mode===15?256:0),(me==0&&he===0||N===4)&&Y===h&&(Y=-5),Y)},l.inflateEnd=function(C){if(!C||!C.state)return u;var N=C.state;return N.window&&(N.window=null),C.state=null,h},l.inflateGetHeader=function(C,N){var d;return C&&C.state?(2&(d=C.state).wrap)==0?u:((d.head=N).done=!1,h):u},l.inflateSetDictionary=function(C,N){var d,B=N.length;return C&&C.state?(d=C.state).wrap!==0&&d.mode!==11?u:d.mode===11&&a(1,N,B,0)!==d.check?-3:F(C,N,B,B)?(d.mode=31,-4):(d.havedict=1,h):u},l.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,i,l){var r=t("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],_=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],E=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(b,x,h,u,S,g,c,o){var v,A,R,P,L,U,M,T,K,F=o.bits,C=0,N=0,d=0,B=0,X=0,O=0,oe=0,j=0,ce=0,z=0,H=null,me=0,he=new r.Buf16(16),ue=new r.Buf16(16),ee=null,fe=0;for(C=0;C<=15;C++)he[C]=0;for(N=0;N<u;N++)he[x[h+N]]++;for(X=F,B=15;1<=B&&he[B]===0;B--);if(B<X&&(X=B),B===0)return S[g++]=20971520,S[g++]=20971520,o.bits=1,0;for(d=1;d<B&&he[d]===0;d++);for(X<d&&(X=d),C=j=1;C<=15;C++)if(j<<=1,(j-=he[C])<0)return-1;if(0<j&&(b===0||B!==1))return-1;for(ue[1]=0,C=1;C<15;C++)ue[C+1]=ue[C]+he[C];for(N=0;N<u;N++)x[h+N]!==0&&(c[ue[x[h+N]]++]=N);if(U=b===0?(H=ee=c,19):b===1?(H=a,me-=257,ee=s,fe-=257,256):(H=_,ee=E,-1),C=d,L=g,oe=N=z=0,R=-1,P=(ce=1<<(O=X))-1,b===1&&852<ce||b===2&&592<ce)return 1;for(;;){for(M=C-oe,K=c[N]<U?(T=0,c[N]):c[N]>U?(T=ee[fe+c[N]],H[me+c[N]]):(T=96,0),v=1<<C-oe,d=A=1<<O;S[L+(z>>oe)+(A-=v)]=M<<24|T<<16|K|0,A!==0;);for(v=1<<C-1;z&v;)v>>=1;if(v!==0?(z&=v-1,z+=v):z=0,N++,--he[C]==0){if(C===B)break;C=x[h+c[N]]}if(X<C&&(z&P)!==R){for(oe===0&&(oe=X),L+=d,j=1<<(O=C-oe);O+oe<B&&!((j-=he[O+oe])<=0);)O++,j<<=1;if(ce+=1<<O,b===1&&852<ce||b===2&&592<ce)return 1;S[R=z&P]=X<<24|O<<16|L-g|0}}return z!==0&&(S[L+z]=C-oe<<24|64<<16|0),o.bits=X,0}},{"../utils/common":41}],51:[function(t,i,l){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,i,l){var r=t("../utils/common"),a=0,s=1;function _(p){for(var k=p.length;0<=--k;)p[k]=0}var E=0,b=29,x=256,h=x+1+b,u=30,S=19,g=2*h+1,c=15,o=16,v=7,A=256,R=16,P=17,L=18,U=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],M=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],T=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],K=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],F=new Array(2*(h+2));_(F);var C=new Array(2*u);_(C);var N=new Array(512);_(N);var d=new Array(256);_(d);var B=new Array(b);_(B);var X,O,oe,j=new Array(u);function ce(p,k,te,re,G){this.static_tree=p,this.extra_bits=k,this.extra_base=te,this.elems=re,this.max_length=G,this.has_stree=p&&p.length}function z(p,k){this.dyn_tree=p,this.max_code=0,this.stat_desc=k}function H(p){return p<256?N[p]:N[256+(p>>>7)]}function me(p,k){p.pending_buf[p.pending++]=255&k,p.pending_buf[p.pending++]=k>>>8&255}function he(p,k,te){p.bi_valid>o-te?(p.bi_buf|=k<<p.bi_valid&65535,me(p,p.bi_buf),p.bi_buf=k>>o-p.bi_valid,p.bi_valid+=te-o):(p.bi_buf|=k<<p.bi_valid&65535,p.bi_valid+=te)}function ue(p,k,te){he(p,te[2*k],te[2*k+1])}function ee(p,k){for(var te=0;te|=1&p,p>>>=1,te<<=1,0<--k;);return te>>>1}function fe(p,k,te){var re,G,w=new Array(c+1),m=0;for(re=1;re<=c;re++)w[re]=m=m+te[re-1]<<1;for(G=0;G<=k;G++){var I=p[2*G+1];I!==0&&(p[2*G]=ee(w[I]++,I))}}function se(p){var k;for(k=0;k<h;k++)p.dyn_ltree[2*k]=0;for(k=0;k<u;k++)p.dyn_dtree[2*k]=0;for(k=0;k<S;k++)p.bl_tree[2*k]=0;p.dyn_ltree[2*A]=1,p.opt_len=p.static_len=0,p.last_lit=p.matches=0}function Se(p){8<p.bi_valid?me(p,p.bi_buf):0<p.bi_valid&&(p.pending_buf[p.pending++]=p.bi_buf),p.bi_buf=0,p.bi_valid=0}function Te(p,k,te,re){var G=2*k,w=2*te;return p[G]<p[w]||p[G]===p[w]&&re[k]<=re[te]}function Ae(p,k,te){for(var re=p.heap[te],G=te<<1;G<=p.heap_len&&(G<p.heap_len&&Te(k,p.heap[G+1],p.heap[G],p.depth)&&G++,!Te(k,re,p.heap[G],p.depth));)p.heap[te]=p.heap[G],te=G,G<<=1;p.heap[te]=re}function qe(p,k,te){var re,G,w,m,I=0;if(p.last_lit!==0)for(;re=p.pending_buf[p.d_buf+2*I]<<8|p.pending_buf[p.d_buf+2*I+1],G=p.pending_buf[p.l_buf+I],I++,re===0?ue(p,G,k):(ue(p,(w=d[G])+x+1,k),(m=U[w])!==0&&he(p,G-=B[w],m),ue(p,w=H(--re),te),(m=M[w])!==0&&he(p,re-=j[w],m)),I<p.last_lit;);ue(p,A,k)}function ke(p,k){var te,re,G,w=k.dyn_tree,m=k.stat_desc.static_tree,I=k.stat_desc.has_stree,Z=k.stat_desc.elems,ie=-1;for(p.heap_len=0,p.heap_max=g,te=0;te<Z;te++)w[2*te]!==0?(p.heap[++p.heap_len]=ie=te,p.depth[te]=0):w[2*te+1]=0;for(;p.heap_len<2;)w[2*(G=p.heap[++p.heap_len]=ie<2?++ie:0)]=1,p.depth[G]=0,p.opt_len--,I&&(p.static_len-=m[2*G+1]);for(k.max_code=ie,te=p.heap_len>>1;1<=te;te--)Ae(p,w,te);for(G=Z;te=p.heap[1],p.heap[1]=p.heap[p.heap_len--],Ae(p,w,1),re=p.heap[1],p.heap[--p.heap_max]=te,p.heap[--p.heap_max]=re,w[2*G]=w[2*te]+w[2*re],p.depth[G]=(p.depth[te]>=p.depth[re]?p.depth[te]:p.depth[re])+1,w[2*te+1]=w[2*re+1]=G,p.heap[1]=G++,Ae(p,w,1),2<=p.heap_len;);p.heap[--p.heap_max]=p.heap[1],(function($,xe){var ge,Pe,Fe,le,pe,De,ye=xe.dyn_tree,we=xe.max_code,Ve=xe.stat_desc.static_tree,W=xe.stat_desc.has_stree,ve=xe.stat_desc.extra_bits,_e=xe.stat_desc.extra_base,Re=xe.stat_desc.max_length,de=0;for(le=0;le<=c;le++)$.bl_count[le]=0;for(ye[2*$.heap[$.heap_max]+1]=0,ge=$.heap_max+1;ge<g;ge++)Re<(le=ye[2*ye[2*(Pe=$.heap[ge])+1]+1]+1)&&(le=Re,de++),ye[2*Pe+1]=le,we<Pe||($.bl_count[le]++,pe=0,_e<=Pe&&(pe=ve[Pe-_e]),De=ye[2*Pe],$.opt_len+=De*(le+pe),W&&($.static_len+=De*(Ve[2*Pe+1]+pe)));if(de!==0){do{for(le=Re-1;$.bl_count[le]===0;)le--;$.bl_count[le]--,$.bl_count[le+1]+=2,$.bl_count[Re]--,de-=2}while(0<de);for(le=Re;le!==0;le--)for(Pe=$.bl_count[le];Pe!==0;)we<(Fe=$.heap[--ge])||(ye[2*Fe+1]!==le&&($.opt_len+=(le-ye[2*Fe+1])*ye[2*Fe],ye[2*Fe+1]=le),Pe--)}})(p,k),fe(w,ie,p.bl_count)}function f(p,k,te){var re,G,w=-1,m=k[1],I=0,Z=7,ie=4;for(m===0&&(Z=138,ie=3),k[2*(te+1)+1]=65535,re=0;re<=te;re++)G=m,m=k[2*(re+1)+1],++I<Z&&G===m||(I<ie?p.bl_tree[2*G]+=I:G!==0?(G!==w&&p.bl_tree[2*G]++,p.bl_tree[2*R]++):I<=10?p.bl_tree[2*P]++:p.bl_tree[2*L]++,w=G,ie=(I=0)===m?(Z=138,3):G===m?(Z=6,3):(Z=7,4))}function Y(p,k,te){var re,G,w=-1,m=k[1],I=0,Z=7,ie=4;for(m===0&&(Z=138,ie=3),re=0;re<=te;re++)if(G=m,m=k[2*(re+1)+1],!(++I<Z&&G===m)){if(I<ie)for(;ue(p,G,p.bl_tree),--I!=0;);else G!==0?(G!==w&&(ue(p,G,p.bl_tree),I--),ue(p,R,p.bl_tree),he(p,I-3,2)):I<=10?(ue(p,P,p.bl_tree),he(p,I-3,3)):(ue(p,L,p.bl_tree),he(p,I-11,7));w=G,ie=(I=0)===m?(Z=138,3):G===m?(Z=6,3):(Z=7,4)}}_(j);var V=!1;function D(p,k,te,re){he(p,(E<<1)+(re?1:0),3),(function(G,w,m,I){Se(G),me(G,m),me(G,~m),r.arraySet(G.pending_buf,G.window,w,m,G.pending),G.pending+=m})(p,k,te)}l._tr_init=function(p){V||((function(){var k,te,re,G,w,m=new Array(c+1);for(G=re=0;G<b-1;G++)for(B[G]=re,k=0;k<1<<U[G];k++)d[re++]=G;for(d[re-1]=G,G=w=0;G<16;G++)for(j[G]=w,k=0;k<1<<M[G];k++)N[w++]=G;for(w>>=7;G<u;G++)for(j[G]=w<<7,k=0;k<1<<M[G]-7;k++)N[256+w++]=G;for(te=0;te<=c;te++)m[te]=0;for(k=0;k<=143;)F[2*k+1]=8,k++,m[8]++;for(;k<=255;)F[2*k+1]=9,k++,m[9]++;for(;k<=279;)F[2*k+1]=7,k++,m[7]++;for(;k<=287;)F[2*k+1]=8,k++,m[8]++;for(fe(F,h+1,m),k=0;k<u;k++)C[2*k+1]=5,C[2*k]=ee(k,5);X=new ce(F,U,x+1,h,c),O=new ce(C,M,0,u,c),oe=new ce(new Array(0),T,0,S,v)})(),V=!0),p.l_desc=new z(p.dyn_ltree,X),p.d_desc=new z(p.dyn_dtree,O),p.bl_desc=new z(p.bl_tree,oe),p.bi_buf=0,p.bi_valid=0,se(p)},l._tr_stored_block=D,l._tr_flush_block=function(p,k,te,re){var G,w,m=0;0<p.level?(p.strm.data_type===2&&(p.strm.data_type=(function(I){var Z,ie=4093624447;for(Z=0;Z<=31;Z++,ie>>>=1)if(1&ie&&I.dyn_ltree[2*Z]!==0)return a;if(I.dyn_ltree[18]!==0||I.dyn_ltree[20]!==0||I.dyn_ltree[26]!==0)return s;for(Z=32;Z<x;Z++)if(I.dyn_ltree[2*Z]!==0)return s;return a})(p)),ke(p,p.l_desc),ke(p,p.d_desc),m=(function(I){var Z;for(f(I,I.dyn_ltree,I.l_desc.max_code),f(I,I.dyn_dtree,I.d_desc.max_code),ke(I,I.bl_desc),Z=S-1;3<=Z&&I.bl_tree[2*K[Z]+1]===0;Z--);return I.opt_len+=3*(Z+1)+5+5+4,Z})(p),G=p.opt_len+3+7>>>3,(w=p.static_len+3+7>>>3)<=G&&(G=w)):G=w=te+5,te+4<=G&&k!==-1?D(p,k,te,re):p.strategy===4||w===G?(he(p,2+(re?1:0),3),qe(p,F,C)):(he(p,4+(re?1:0),3),(function(I,Z,ie,$){var xe;for(he(I,Z-257,5),he(I,ie-1,5),he(I,$-4,4),xe=0;xe<$;xe++)he(I,I.bl_tree[2*K[xe]+1],3);Y(I,I.dyn_ltree,Z-1),Y(I,I.dyn_dtree,ie-1)})(p,p.l_desc.max_code+1,p.d_desc.max_code+1,m+1),qe(p,p.dyn_ltree,p.dyn_dtree)),se(p),re&&Se(p)},l._tr_tally=function(p,k,te){return p.pending_buf[p.d_buf+2*p.last_lit]=k>>>8&255,p.pending_buf[p.d_buf+2*p.last_lit+1]=255&k,p.pending_buf[p.l_buf+p.last_lit]=255&te,p.last_lit++,k===0?p.dyn_ltree[2*te]++:(p.matches++,k--,p.dyn_ltree[2*(d[te]+x+1)]++,p.dyn_dtree[2*H(k)]++),p.last_lit===p.lit_bufsize-1},l._tr_align=function(p){he(p,2,3),ue(p,A,F),(function(k){k.bi_valid===16?(me(k,k.bi_buf),k.bi_buf=0,k.bi_valid=0):8<=k.bi_valid&&(k.pending_buf[k.pending++]=255&k.bi_buf,k.bi_buf>>=8,k.bi_valid-=8)})(p)}},{"../utils/common":41}],53:[function(t,i,l){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,i,l){(function(r){(function(a,s){if(!a.setImmediate){var _,E,b,x,h=1,u={},S=!1,g=a.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(a);c=c&&c.setTimeout?c:a,_={}.toString.call(a.process)==="[object process]"?function(R){process.nextTick(function(){v(R)})}:(function(){if(a.postMessage&&!a.importScripts){var R=!0,P=a.onmessage;return a.onmessage=function(){R=!1},a.postMessage("","*"),a.onmessage=P,R}})()?(x="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",A,!1):a.attachEvent("onmessage",A),function(R){a.postMessage(x+R,"*")}):a.MessageChannel?((b=new MessageChannel).port1.onmessage=function(R){v(R.data)},function(R){b.port2.postMessage(R)}):g&&"onreadystatechange"in g.createElement("script")?(E=g.documentElement,function(R){var P=g.createElement("script");P.onreadystatechange=function(){v(R),P.onreadystatechange=null,E.removeChild(P),P=null},E.appendChild(P)}):function(R){setTimeout(v,0,R)},c.setImmediate=function(R){typeof R!="function"&&(R=new Function(""+R));for(var P=new Array(arguments.length-1),L=0;L<P.length;L++)P[L]=arguments[L+1];var U={callback:R,args:P};return u[h]=U,_(h),h++},c.clearImmediate=o}function o(R){delete u[R]}function v(R){if(S)setTimeout(v,0,R);else{var P=u[R];if(P){S=!0;try{(function(L){var U=L.callback,M=L.args;switch(M.length){case 0:U();break;case 1:U(M[0]);break;case 2:U(M[0],M[1]);break;case 3:U(M[0],M[1],M[2]);break;default:U.apply(s,M)}})(P)}finally{o(R),S=!1}}}}function A(R){R.source===a&&typeof R.data=="string"&&R.data.indexOf(x)===0&&v(+R.data.slice(x.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof Hn<"u"?Hn:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Ti)),Ti.exports}var lh=sh();const _a=oh(lh),ch="assets/minecraft/textures/item/skin.png",ga="assets/minecraft/items/totem_of_undying.json",ro="assets/minecraft",qn=e=>`${ro}/models/${ao(e)}.json`,fh=e=>`${ro}/textures/${ao(e)}.png`;function ao(e){if(e.startsWith("minecraft:"))return e.slice(10);if(e.includes(":"))throw new Error(`Unsupported pack namespace: ${e}`);return e}function Ai({model:{fallback:e,cases:n}}){return new Map([["Default",e.model],...n.map(({when:t,model:i})=>[t,i.model])])}const va=e=>qn(e).split("/").at(-1);async function uh(e,n,t){const i=await _a.loadAsync(e),l=Ai(JSON.parse(await wi(i,ga,"string"))),r=()=>t("totem_of_undying_small.json");async function a(s,_="classic"){if(_==="slim"){const x=Ai(JSON.parse(await r()));return JSON.parse(await t(va(x.get(s))))}const E=l.get(s),b=s==="Default"?n:await wi(i,qn(E),"string");return JSON.parse(b)}return{getModel:a,getTexture:s=>wi(i,fh(s),"blob"),async export(s,_="classic"){const E=await _a.loadAsync(e);if(E.file(qn(l.get("Default")),n),_==="slim"){const b=await r();E.file(ga,b),await Promise.all(Array.from(Ai(JSON.parse(b)).values(),async x=>{E.file(qn(x),await t(va(x)))}))}return E.file(ch,await s.arrayBuffer()),E.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}})}}}function wi(e,n,t){const i=e.file(n);if(!i)throw new Error(`Missing pack asset: ${n}`);return i.async(t)}const dh=[137,80,78,71,13,10,26,10];function Ni(e,n,t=4){return{top:[e+4,n,t,4],bottom:[e+4+t,n,t,4],right:[e,n+4,4,12],front:[e+4,n+4,t,12],left:[e+4+t,n+4,4,12],back:[e+8+t,n+4,t,12]}}function hh({data:e,width:n,height:t}){if(t===32)return"classic";const i=([r,a,s,_])=>{for(let E=a;E<a+_;E+=1)for(let b=r;b<r+s;b+=1)if(e[(E*n+b)*4+3]>0)return!0;return!1};return[[40,16],[32,48]].every(([r,a])=>!i([r+10,a,2,4])&&!i([r+14,a+4,2,12])&&i(Ni(r,a,3).front))?"slim":"classic"}function ph(e){const n=new DataView(e.buffer,e.byteOffset,e.byteLength);if(e.length<33||!dh.every((l,r)=>e[r]===l)||n.getUint32(8)!==13||n.getUint32(12)!==1229472850)throw new Error("Choose a valid Minecraft skin PNG.");const t=n.getUint32(16),i=n.getUint32(20);if(t!==64||i!==64&&i!==32)throw new Error(`This PNG is ${t} × ${i}. Use a 64 × 64 or 64 × 32 Minecraft skin.`);return{width:t,height:i}}function oo(e=64,n=64){const t=document.createElement("canvas");t.width=e,t.height=n;const i=t.getContext("2d",{willReadFrequently:!0});return i.imageSmoothingEnabled=!1,i}function so(e){return new Promise((n,t)=>{e.toBlob(i=>i?n(i):t(new Error("Could not create the PNG.")),"image/png")})}async function lo(e){const n=await createImageBitmap(e.slice(0,e.size,"image/png"),{colorSpaceConversion:"none"}),t=oo(n.width,n.height);try{return t.drawImage(n,0,0),t}finally{n.close()}}async function co(e){if(e.size>1024*1024)throw new Error("Choose a Minecraft skin PNG under 1 MB.");const{height:n}=ph(new Uint8Array(await e.slice(0,33).arrayBuffer()));let t;try{t=await lo(e)}catch{throw new Error("This PNG could not be decoded. Try another skin file.")}if(!t.getImageData(8,8,8,8).data.some((r,a)=>a%4===3&&r>0))throw new Error("The base face is empty. Export a Minecraft skin with a visible face.");const l=hh(t.getImageData(0,0,64,n));return{file:e,source:t,height:n,armType:l}}async function fo({file:e,source:n,height:t,armType:i}){if(t===64)return{image:n.canvas,png:e,armType:i};const l=oo();return l.drawImage(n.canvas,0,0),mh(l,n),{image:l.canvas,png:await so(l.canvas),armType:"classic"}}function mh(e,n){n.getImageData(32,0,32,32).data.every((l,r)=>r%4!==3||l>=128)&&e.clearRect(32,0,32,16);for(const[l,r]of[[0,16],[40,32]]){const a=Ni(l,16),s=Ni(r,48);for(const[_,[E,b,x,h]]of Object.entries(s)){const u=_==="left"?"right":_==="right"?"left":_;e.save(),e.translate(E+x,b),e.scale(-1,1),e.drawImage(n.canvas,...a[u],0,0,x,h),e.restore()}}for(const[l,r,a,s]of[[0,0,32,16],[0,16,64,16],[16,48,32,16]]){const _=e.getImageData(l,r,a,s);for(let E=3;E<_.data.length;E+=4)_.data[E]=255;e.putImageData(_,l,r)}}function _h(e,n){const t=e.getContext("2d");t.clearRect(0,0,8,8),t.drawImage(n,8,8,8,8,0,0,8,8),t.drawImage(n,40,8,8,8,0,0,8,8)}const Sa={type:"change"},Vi={type:"start"},uo={type:"end"},zn=new qs,Ea=new Da,gh=Math.cos(70*Mt.DEG2RAD),ct=new Be,_t=2*Math.PI,Je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ri=1e-6;class vh extends Ks{constructor(n,t=null){super(n,t),this.state=Je.NONE,this.target=new Be,this.cursor=new Be,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fn.ROTATE,MIDDLE:fn.DOLLY,RIGHT:fn.PAN},this.touches={ONE:cn.ROTATE,TWO:cn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Be,this._lastQuaternion=new Ln,this._lastTargetPosition=new Be,this._quat=new Ln().setFromUnitVectors(n.up,new Be(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Li,this._sphericalDelta=new Li,this._scale=1,this._panOffset=new Be,this._rotateStart=new Qe,this._rotateEnd=new Qe,this._rotateDelta=new Qe,this._panStart=new Qe,this._panEnd=new Qe,this._panDelta=new Qe,this._dollyStart=new Qe,this._dollyEnd=new Qe,this._dollyDelta=new Qe,this._dollyDirection=new Be,this._mouse=new Qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Eh.bind(this),this._onPointerDown=Sh.bind(this),this._onPointerUp=xh.bind(this),this._onContextMenu=yh.bind(this),this._onMouseWheel=Th.bind(this),this._onKeyDown=Ah.bind(this),this._onTouchStart=wh.bind(this),this._onTouchMove=Rh.bind(this),this._onMouseDown=bh.bind(this),this._onMouseMove=Mh.bind(this),this._interceptControlDown=Ch.bind(this),this._interceptControlUp=Ph.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(n){this._cursorStyle=n,n==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(n){super.connect(n),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(n){n.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=n}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sa),this.update(),this.state=Je.NONE}pan(n,t){this._pan(n,t),this.update()}dollyIn(n){this._dollyIn(n),this.update()}dollyOut(n){this._dollyOut(n),this.update()}rotateLeft(n){this._rotateLeft(n),this.update()}rotateUp(n){this._rotateUp(n),this.update()}update(n=null){const t=this.object.position;ct.copy(t).sub(this.target),ct.applyQuaternion(this._quat),this._spherical.setFromVector3(ct),this.autoRotate&&this.state===Je.NONE&&this._rotateLeft(this._getAutoRotationAngle(n)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(i)&&isFinite(l)&&(i<-Math.PI?i+=_t:i>Math.PI&&(i-=_t),l<-Math.PI?l+=_t:l>Math.PI&&(l-=_t),i<=l?this._spherical.theta=Math.max(i,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+l)/2?Math.max(i,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ct.setFromSpherical(this._spherical),ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const s=ct.length();a=this._clampDistance(s*this._scale);const _=s-a;this.object.position.addScaledVector(this._dollyDirection,_),this.object.updateMatrixWorld(),r=!!_}else if(this.object.isOrthographicCamera){const s=new Be(this._mouse.x,this._mouse.y,0);s.unproject(this.object);const _=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=_!==this.object.zoom;const E=new Be(this._mouse.x,this._mouse.y,0);E.unproject(this.object),this.object.position.sub(E).add(s),this.object.updateMatrixWorld(),a=ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(zn.origin.copy(this.object.position),zn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zn.direction))<gh?this.object.lookAt(this.target):(Ea.setFromNormalAndCoplanarPoint(this.object.up,this.target),zn.intersectPlane(Ea,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ri||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ri||this._lastTargetPosition.distanceToSquared(this.target)>Ri?(this.dispatchEvent(Sa),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(n){return n!==null?_t/60*this.autoRotateSpeed*n:_t/60/60*this.autoRotateSpeed}_getZoomScale(n){const t=Math.abs(n*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(n){this._sphericalDelta.theta-=n}_rotateUp(n){this._sphericalDelta.phi-=n}_panLeft(n,t){ct.setFromMatrixColumn(t,0),ct.multiplyScalar(-n),this._panOffset.add(ct)}_panUp(n,t){this.screenSpacePanning===!0?ct.setFromMatrixColumn(t,1):(ct.setFromMatrixColumn(t,0),ct.crossVectors(this.object.up,ct)),ct.multiplyScalar(n),this._panOffset.add(ct)}_pan(n,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;ct.copy(l).sub(this.target);let r=ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*n*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(n*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(n,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),l=n-i.left,r=t-i.top,a=i.width,s=i.height;this._mouse.x=l/a*2-1,this._mouse.y=-(r/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(n){return Math.max(this.minDistance,Math.min(this.maxDistance,n))}_handleMouseDownRotate(n){this._rotateStart.set(n.clientX,n.clientY)}_handleMouseDownDolly(n){this._updateZoomParameters(n.clientX,n.clientX),this._dollyStart.set(n.clientX,n.clientY)}_handleMouseDownPan(n){this._panStart.set(n.clientX,n.clientY)}_handleMouseMoveRotate(n){this._rotateEnd.set(n.clientX,n.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_t*this._rotateDelta.x/t.clientHeight),this._rotateUp(_t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(n){this._dollyEnd.set(n.clientX,n.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(n){this._panEnd.set(n.clientX,n.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(n){this._updateZoomParameters(n.clientX,n.clientY),n.deltaY<0?this._dollyIn(this._getZoomScale(n.deltaY)):n.deltaY>0&&this._dollyOut(this._getZoomScale(n.deltaY)),this.update()}_handleKeyDown(n){let t=!1;switch(n.code){case this.keys.UP:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(_t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(-_t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(_t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(-_t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(n.preventDefault(),this.update())}_handleTouchStartRotate(n){if(this._pointers.length===1)this._rotateStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),l=.5*(n.pageY+t.y);this._rotateStart.set(i,l)}}_handleTouchStartPan(n){if(this._pointers.length===1)this._panStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),l=.5*(n.pageY+t.y);this._panStart.set(i,l)}}_handleTouchStartDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,l=n.pageY-t.y,r=Math.sqrt(i*i+l*l);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enablePan&&this._handleTouchStartPan(n)}_handleTouchStartDollyRotate(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enableRotate&&this._handleTouchStartRotate(n)}_handleTouchMoveRotate(n){if(this._pointers.length==1)this._rotateEnd.set(n.pageX,n.pageY);else{const i=this._getSecondPointerPosition(n),l=.5*(n.pageX+i.x),r=.5*(n.pageY+i.y);this._rotateEnd.set(l,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_t*this._rotateDelta.x/t.clientHeight),this._rotateUp(_t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(n){if(this._pointers.length===1)this._panEnd.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),l=.5*(n.pageY+t.y);this._panEnd.set(i,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,l=n.pageY-t.y,r=Math.sqrt(i*i+l*l);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(n.pageX+t.x)*.5,s=(n.pageY+t.y)*.5;this._updateZoomParameters(a,s)}_handleTouchMoveDollyPan(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enablePan&&this._handleTouchMovePan(n)}_handleTouchMoveDollyRotate(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enableRotate&&this._handleTouchMoveRotate(n)}_addPointer(n){this._pointers.push(n.pointerId)}_removePointer(n){delete this._pointerPositions[n.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(n){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId)return!0;return!1}_trackPointer(n){let t=this._pointerPositions[n.pointerId];t===void 0&&(t=new Qe,this._pointerPositions[n.pointerId]=t),t.set(n.pageX,n.pageY)}_getSecondPointerPosition(n){const t=n.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(n){const t=n.deltaMode,i={clientX:n.clientX,clientY:n.clientY,deltaY:n.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return n.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Sh(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Eh(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function xh(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(uo),this.state=Je.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const n=this._pointers[0],t=this._pointerPositions[n];this._onTouchStart({pointerId:n,pageX:t.x,pageY:t.y});break}}function bh(e){let n;switch(e.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case fn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Je.DOLLY;break;case fn.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Je.ROTATE}break;case fn.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Je.PAN}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Vi)}function Mh(e){switch(this.state){case Je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Th(e){this.enabled===!1||this.enableZoom===!1||this.state!==Je.NONE||(e.preventDefault(),this.dispatchEvent(Vi),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(uo))}function Ah(e){this.enabled!==!1&&this._handleKeyDown(e)}function wh(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case cn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Je.TOUCH_ROTATE;break;case cn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Je.TOUCH_PAN;break;default:this.state=Je.NONE}break;case 2:switch(this.touches.TWO){case cn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Je.TOUCH_DOLLY_PAN;break;case cn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Je.TOUCH_DOLLY_ROTATE;break;default:this.state=Je.NONE}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Vi)}function Rh(e){switch(this._trackPointer(e),this.state){case Je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Je.NONE}}function yh(e){this.enabled!==!1&&e.preventDefault()}function Ch(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ph(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Dh=Math.PI*2/34;function Lh(e,{onZoom:n,onContext:t}){const i=new Zd({canvas:e,alpha:!0,antialias:!0});i.setClearColor(0,0);const l=new Zs,r=new Bi(-7,7,7,-7,.1,100),a=new vh(r,e);a.enablePan=!1,a.dampingFactor=.16,a.minZoom=.65,a.maxZoom=2.1,a.minPolarAngle=.17,a.maxPolarAngle=Math.PI-.17;const s=window.matchMedia("(prefers-reduced-motion: reduce)"),E={default:new Be(-.54,.28,-1).normalize(),front:new Be(0,0,-1),back:new Be(0,0,1)},b=new Di;l.add(b);const x=Uh();l.add(x);const h=new Di,u=new ri(1,1,1),S=new Dn({color:"#ffb58a",transparent:!0,depthWrite:!1});for(let f=0;f<16;f+=1)h.add(new bt(u,S));h.visible=!1,l.add(h);const g=new Qe,c=new Qe,o=new ai,v=new Ln,A=new Ln,R=new js,P=new Qe,L=e.parentElement;let U,M=13,T=0,K=!0,F=!1,C=0,N=0,d=1/0,B=1/0,X,O=0,oe=r.zoom,j=!1,ce=0;function z(){T||!U||!K||document.hidden||F||(T=requestAnimationFrame(H))}function H(f){T=0;const Y=O>0?Math.min((f-O)/1e3,.05):0;O=f;const V=j?Dh:0;ce=s.matches?V:Mt.damp(ce,V,5,Y),Math.abs(ce-V)<.001&&(ce=V),ce&&r.position.applyAxisAngle(r.up,-ce*Y),a.update(Y),me(Y),ue(Y),i.render(l,r),(!s.matches||ce||j)&&z()}function me(f){if(s.matches){b.position.y=0,b.quaternion.identity(),b.scale.setScalar(1),x.material.opacity=.54;return}C+=f,N+=f,d+=f,c.lerp(g,1-Math.exp(-f*7));const Y=d<.67?Math.sin(Math.PI*d/.67):0,V=d<.18?.1*Math.sin(Math.PI*d/.18):0,D=.94+.06*Mt.smoothstep(N,0,.42),p=Math.sin(C*1.8)*.012;b.position.y=.12*Math.sin(C*1.45)+.83*Y,b.scale.set(D*(1+V/2),D*(1+p-V+.04*Y),D*(1+V/2)),o.set(c.y*.13,-c.x*.14,-c.x*.07+Math.sin(C*1.2)*.018),v.copy(r.quaternion).invert(),b.quaternion.copy(r.quaternion).multiply(A.setFromEuler(o)).multiply(v),x.material.opacity=.54-b.position.y*.28}function he(f,Y){g.set(f,Y),L.style.setProperty("--scene-x",`${f*-12}px`),L.style.setProperty("--scene-y",`${Y*-9}px`),z()}function ue(f){if(B+=f,h.visible=!s.matches&&B<.68,!h.visible)return;const Y=B/.68,V=1-(1-Y)**2;S.opacity=(1-Y)*.88,h.children.forEach((D,p)=>{const k=2*Math.PI*p/h.children.length,te=1.7+V*(2.1+p%3*.42),re=Math.sin(Math.PI*Y)*(.44+p%5*.15);D.position.set(Math.cos(k)*te,x.position.y+.42+re,Math.sin(k)*te),D.rotation.set(k*.5+Y*2,k-Y,Y*3),D.scale.setScalar((.13+p%4*.047)*(1-Y*.65))})}function ee(){!U||s.matches||(d=0,B=0,z())}function fe(){const f=e.clientWidth,Y=e.clientHeight;if(!f||!Y)return;const V=f/Y,D=M/2/Math.min(1,V/.9);r.left=-D*V,r.right=D*V,r.top=D,r.bottom=-D,r.updateProjectionMatrix(),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(f,Y,!1),z()}function se(f,Y=!1){const V=a.enableDamping;a.enableDamping=!1,a.update(0),r.position.copy(E[f]).multiplyScalar(27),Y&&(r.zoom=1),r.updateProjectionMatrix(),a.update(0),a.enableDamping=V,Ae(),z()}function Se(f){r.zoom=Mt.clamp(f,a.minZoom,a.maxZoom),r.updateProjectionMatrix(),a.update(0),Ae(),z()}function Te(f){K=f,O=0,T&&(!K||document.hidden||F)&&(cancelAnimationFrame(T),T=0),z()}function Ae(){oe!==r.zoom&&(oe=r.zoom,n(oe))}return a.addEventListener("change",()=>{Ae(),z()}),e.addEventListener("pointermove",f=>{if(X?.id===f.pointerId&&Math.hypot(f.clientX-X.x,f.clientY-X.y)>6&&(X=null),f.pointerType!=="mouse"||f.buttons||s.matches)return;const{left:Y,top:V,width:D,height:p}=e.getBoundingClientRect(),k=(f.clientX-Y)/D*2-1,te=(f.clientY-V)/p*2-1;he(Mt.clamp(k,-1,1),Mt.clamp(te,-1,1))},{passive:!0}),e.addEventListener("pointerleave",()=>he(0,0)),e.addEventListener("pointerdown",f=>{he(0,0),X=f.isPrimary&&f.button===0?{id:f.pointerId,x:f.clientX,y:f.clientY,time:f.timeStamp}:null}),e.addEventListener("pointercancel",()=>{X=null}),e.addEventListener("pointerup",f=>{const Y=X;if(X=null,!U||s.matches||Y?.id!==f.pointerId||Math.hypot(f.clientX-Y.x,f.clientY-Y.y)>6||f.timeStamp-Y.time>460)return;const{left:V,top:D,width:p,height:k}=e.getBoundingClientRect();P.set((f.clientX-V)/p*2-1,1-(f.clientY-D)/k*2),R.setFromCamera(P,r),R.intersectObject(U,!0).length&&ee()}),e.addEventListener("keydown",f=>{if(f.ctrlKey||f.metaKey||f.altKey)return;const Y=new Li().setFromVector3(r.position),V=.16;switch(f.key){case"Enter":case" ":ee();break;case"ArrowLeft":Y.theta-=V;break;case"ArrowRight":Y.theta+=V;break;case"ArrowUp":Y.phi-=V;break;case"ArrowDown":Y.phi+=V;break;case"+":case"=":Se(r.zoom+.1);break;case"-":Se(r.zoom-.1);break;default:return}f.preventDefault(),f.key.startsWith("Arrow")&&(Y.phi=Mt.clamp(Y.phi,a.minPolarAngle,a.maxPolarAngle),r.position.setFromSpherical(Y),a.update(0))}),e.addEventListener("webglcontextlost",f=>{f.preventDefault(),F=!0,Te(K),t(!1)}),e.addEventListener("webglcontextrestored",()=>{F=!1,t(!0),fe()}),new ResizeObserver(fe).observe(e),new IntersectionObserver(([f])=>Te(f.isIntersecting)).observe(e),document.addEventListener("visibilitychange",()=>Te(K)),s.addEventListener("change",()=>{a.enableDamping=!s.matches,he(0,0),z()}),a.enableDamping=!s.matches,se("default",!0),fe(),{setModel(f,Y,V=!1){const D=rh(f,Y),p=new $s().setFromObject(D),k=p.getSize(new Be);D.position.sub(p.getCenter(new Be)),U&&(b.remove(U),ah(U)),U=D,N=0,B=0,b.add(U),x.position.y=-k.y/2-.26,x.scale.set(k.x*1.65,Math.max(k.z*1.85,7),1),M=Math.max(k.y*1.4,k.x*1.4),V&&se("default",!0),fe()},setZoom:Se,setView:se,setSpinning(f){j=f,T||(O=0),z()},setShadow(f){x.visible=f,z()},async screenshot(){if(!U||F)throw new Error("The 3D preview must be active to save an image.");const f=x.visible;try{return x.visible=!1,h.visible=!1,i.render(l,r),await so(e)}finally{x.visible=f,z()}}}}function Uh(){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),t=n.createRadialGradient(32,32,2,32,32,31);t.addColorStop(0,"#000d"),t.addColorStop(.48,"#0007"),t.addColorStop(1,"#0000"),n.fillStyle=t,n.fillRect(0,0,64,64);const i=new bt(new Hi(1,1),new Dn({map:new ja(e),transparent:!0,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.renderOrder=-1,i}const Ih=Object.assign({"../../plushify_chain_small.json":()=>Vt(()=>import("./plushify_chain_small-Dmh6S5Pj.js"),[]).then(e=>e.default),"../../plushify_copper_small.json":()=>Vt(()=>import("./plushify_copper_small-eGYiHBpr.js"),[]).then(e=>e.default),"../../plushify_diamond_small.json":()=>Vt(()=>import("./plushify_diamond_small-BH8NJCAv.js"),[]).then(e=>e.default),"../../plushify_gold_small.json":()=>Vt(()=>import("./plushify_gold_small-GpbP8cph.js"),[]).then(e=>e.default),"../../plushify_iron_small.json":()=>Vt(()=>import("./plushify_iron_small-B-2O9rqX.js"),[]).then(e=>e.default),"../../plushify_netherite_small.json":()=>Vt(()=>import("./plushify_netherite_small-ComjmCGm.js"),[]).then(e=>e.default),"../../plushy_small.json":()=>Vt(()=>import("./plushy_small-CGCkgLQl.js"),[]).then(e=>e.default),"../../totem_of_undying_small.json":()=>Vt(()=>import("./totem_of_undying_small-jPGIoBiH.js"),[]).then(e=>e.default)});function Nh(e){const n=Ih[`../../${e}`];if(!n)throw new Error(`Missing slim model: ${e}`);return n()}const Xe=e=>document.getElementById(e),zi=Xe("skin-file"),Qt=Xe("drop-zone"),xa=Xe("upload-label"),Oh=Xe("avatar"),ba=Xe("skin-name"),Fh=Xe("skin-description"),Ma=Xe("skin-status"),Bh=Xe("demo-option"),An=Xe("demo-layout"),kh=Xe("arm-option"),Qn=Xe("arm-type"),Gh=Xe("arm-auto"),Un=Xe("upload-error"),ho=Xe("armor-options"),Ta=Xe("armor-hint"),po=Xe("download"),Aa=Xe("download-label"),wn=Xe("export-status"),mo=Xe("stage"),Hh=Xe("stage-message"),Vh=Xe("stage-text"),zh=Xe("variant-caption"),Jn=Xe("model"),Wi=Xe("background"),In=Xe("zoom"),Wh=Xe("zoom-out"),Xh=Xe("zoom-in"),Yh=Xe("reset"),Oi=Xe("flip"),Fi=Xe("spin"),wa=Xe("screenshot"),Kh=Xe("preview-toolbar").querySelectorAll("button, input"),qh=new Map,Zh=new Map;let Nn,At,ei=!1,pt,on="Default",un=!1,Zn=!1,ti=!1,$t=0,yi=0;function Lt(e,n,t=!1){e.textContent=n,e.hidden=!n,e.classList.toggle("error",t)}function dn(e){mo.setAttribute("aria-busy","false"),Hh.hidden=!e,Vh.textContent=e}function en(){po.disabled=!pt||pt.demo||un||Zn,An.disabled=un,Qn.disabled=un,Kh.forEach(e=>{e.disabled=!pt||!ei})}function Xi(e,n,t){pt={...e,demo:t,detectedArmType:n.armType},_h(Oh,pt.image),ba.textContent=t?"askin":n.file.name,ba.title=t?"":n.file.name,Ma.textContent=t?"Demo":"Personal",Ma.toggleAttribute("data-custom",!t);const i=n.height===32?"64 × 32 · converted to 64 × 64":"64 × 64 PNG";Fh.textContent=t?`${i} · ${e.armType==="slim"?"Slim":"Classic"}`:i,Bh.hidden=!t,kh.hidden=t||n.height===32,Gh.textContent=n.armType==="slim"?"Auto · Slim (3 px)":"Auto · Classic (4 px)",en(),Yi()}function Ra(e,n,t){return e.has(n)||e.set(n,t(n).catch(i=>{throw e.delete(n),i})),e.get(n)}async function jh(e){const n=await Nn.getTexture(e);return(await lo(n)).canvas}async function Yi(){if(!At||!pt)return;const e=++yi,n=on,t=pt;try{const i=t.armType,l=await Ra(qh,`${i}/${n}`,()=>Nn.getModel(n,i)),r=new Set(Object.values(l.textures).map(s=>io(l.textures,s))),a=new Map([["item/skin",t.image]]);if(r.delete("item/skin"),await Promise.all([...r].map(async s=>{a.set(s,await Ra(Zh,s,jh))})),e!==yi)return;At.setModel(l,a),zh.textContent=n.toUpperCase(),Jn.setAttribute("aria-label",`Interactive ${t.armType} Plushy model`),ei&&dn("")}catch(i){if(e!==yi)return;console.error(i),dn("This model could not be displayed. Try another armor style.")}}async function _o(e){if(!Nn||zi.disabled||!e)return;const n=++$t;un=!0,Lt(Un,""),Lt(wn,""),xa.textContent="Reading skin…",en();try{const t=await co(e),i=await fo(t);if(n!==$t)return;Qn.value="auto",Xi(i,t,!1)}catch(t){n===$t&&Lt(Un,t.message,!0)}finally{n===$t&&(un=!1,xa.textContent=pt&&!pt.demo?"Change Your Skin":"Upload Your Skin",en())}}zi.addEventListener("change",e=>{_o(e.currentTarget.files[0]),e.currentTarget.value=""});Qt.addEventListener("dragover",e=>{e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.dataTransfer.dropEffect="copy",Qt.setAttribute("data-dragging",""))});Qt.addEventListener("dragleave",e=>{Qt.contains(e.relatedTarget)||Qt.removeAttribute("data-dragging")});Qt.addEventListener("drop",e=>{if(e.preventDefault(),Qt.removeAttribute("data-dragging"),e.dataTransfer.files.length>1){Lt(Un,"Drop one Minecraft skin PNG at a time.",!0);return}_o(e.dataTransfer.files[0])});Qn.addEventListener("change",()=>{const e=Qn.value;pt={...pt,armType:e==="auto"?pt.detectedArmType:e},Lt(wn,""),Yi()});ho.addEventListener("change",e=>{if(on=e.target.value,Xe("armor-name").textContent=on,Xe("armor-icon").src=`/Plushify/art/${on.toLowerCase()}.png`,on==="Default")Ta.textContent="Leave the Totem unnamed for the default look.";else{const n=document.createElement("strong");n.textContent=on,Ta.replaceChildren("At an anvil, name your Totem ",n," for this look.")}Yi()});function go(){const e=Wi.querySelector(":checked").value;mo.dataset.background=e,At?.setShadow(e!=="transparent")}function vo(e){Fi.setAttribute("aria-pressed",String(e)),At?.setSpinning(e)}function So(e){ti=e;const n=ti?"Show front":"Show back";Oi.setAttribute("aria-label",n),Oi.title=n}Wi.addEventListener("change",go);Fi.addEventListener("click",()=>vo(Fi.getAttribute("aria-pressed")!=="true"));Oi.addEventListener("click",()=>{So(!ti),At?.setView(ti?"back":"front")});function Eo(){So(!1),Wi.querySelector('[value="overworld"]').checked=!0,go(),At?.setView("default",!0)}Yh.addEventListener("click",Eo);Jn.addEventListener("keydown",e=>{e.key==="Home"&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&(e.preventDefault(),Eo())});In.addEventListener("input",()=>At?.setZoom(Number(In.value)/100));Xh.addEventListener("click",()=>At?.setZoom((Number(In.value)+12)/100));Wh.addEventListener("click",()=>At?.setZoom((Number(In.value)-12)/100));function xo(e,n){const t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n,document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}wa.addEventListener("click",async()=>{wa.disabled=!0;try{xo(await At.screenshot(),"Plushify-Preview.png")}catch(e){dn(e.message)}finally{en()}});Xe("modrinth-help").addEventListener("click",()=>Xe("modrinth-guide").showModal());po.addEventListener("click",async()=>{if(!pt||pt.demo||Zn||un)return;Zn=!0;const e=pt;en(),Lt(wn,""),Aa.textContent="Building your pack…";try{xo(await Nn.export(e.png,e.armType),"Plushify-Custom-Skin.zip"),e===pt&&Lt(wn,"Your resource pack is ready.")}catch(n){console.error(n),Lt(wn,"Could not build the ZIP. Try downloading again.",!0)}finally{Zn=!1,Aa.textContent="Download My Plushy",en()}});async function bo(e){const t=await fetch(`/Plushify/art/${e==="slim"?"askin-slim.png":"askin.png"}`);if(!t.ok)throw new Error(`Demo request returned ${t.status}`);const i=await co(await t.blob());return{source:i,result:await fo(i)}}An.addEventListener("change",async()=>{const e=++$t;Lt(Un,"");try{const{source:n,result:t}=await bo(An.value);e===$t&&Xi(t,n,!0)}catch{if(e!==$t)return;An.value=pt.armType,Lt(Un,"The demo skin could not be loaded. Try again.",!0)}});async function $h(){try{At=Lh(Jn,{onZoom:e=>{In.value=Math.round(e*100)},onContext(e){ei=e,en(),dn(e?"":"The 3D connection was lost. Skin upload and ZIP export are still available.")}}),ei=!0,vo(!0)}catch{Jn.tabIndex=-1,dn("3D preview requires WebGL 2. You can still upload skins and download the pack.")}try{const[e,n]=await Promise.all([fetch(el),bo("classic")]);if(!e.ok)throw new Error(`Pack request returned ${e.status}`);Nn=await uh(await e.arrayBuffer(),tl,Nh),Xi(n.result,n.source,!0),An.disabled=!1,zi.disabled=!1,ho.disabled=!1}catch(e){console.error(e),dn("The Plushify pack could not be loaded. Reload the page to try again.")}}$h();
