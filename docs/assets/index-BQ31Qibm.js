import{m as Rt,a as Do}from"./navigation-DlnSmGBx.js";import{U as Pt,c as Lo,N as Dt,S as Ca,C as at,F as Pa,V as ke,R as Uo,e as rt,w as tt,a as vt,l as ir,b as Da,M as pn,W as rr,d as Lt,f as lt,L as ln,H as Yt,D as Ot,B as xt,g as yn,h as ii,p as Io,i as gn,j as Tn,k as No,m as bt,O as ki,n as it,E as Oo,o as Qe,P as Xn,A as Fo,q as ui,r as Ft,s as cn,t as mn,u as Cn,v as en,x as $n,y as Bo,z as ko,G as Pn,I as Et,J as Pi,K as on,Q as ar,T as Go,X as Ho,Y as Sn,Z as Vo,_ as zo,$ as Wo,a0 as Xo,a1 as Yo,a2 as Ko,a3 as qo,a4 as Zo,a5 as jo,a6 as $o,a7 as Qo,a8 as Jo,a9 as es,aa as ts,ab as ns,ac as is,ad as rs,ae as di,af as kn,ag as as,ah as Bt,ai as os,aj as ss,ak as Gi,al as ls,am as Hi,an as cs,ao as fs,ap as us,aq as La,ar as Ke,as as ds,at as hs,au as Gt,av as An,aw as Yn,ax as ps,ay as kt,az as bn,aA as Wt,aB as ms,aC as Ua,aD as Ia,aE as Na,aF as Qn,aG as Oa,aH as Fa,aI as Ba,aJ as Vi,aK as _s,aL as gs,aM as vs,aN as Ss,aO as ka,aP as Es,aQ as xs,aR as bs,aS as hi,aT as pi,aU as mi,aV as _i,aW as or,aX as sr,aY as lr,aZ as cr,a_ as fr,a$ as ur,b0 as dr,b1 as hr,b2 as pr,b3 as mr,b4 as _r,b5 as gr,b6 as vr,b7 as Sr,b8 as Er,b9 as xr,ba as br,bb as Mr,bc as Tr,bd as Ar,be as wr,bf as Rr,bg as yr,bh as Cr,bi as Pr,bj as Dr,bk as Lr,bl as Ur,bm as Ir,bn as Nr,bo as Or,bp as Fr,bq as Ms,br as Ts,bs as As,bt as ws,bu as Rs,bv as ys,bw as Cs,bx as Ps,by as Br,bz as Ds,bA as Kn,bB as Ls,bC as kr,bD as Gr,bE as Hr,bF as Ga,bG as Us,bH as ri,bI as Is,bJ as Ns,bK as Ha,bL as ai,bM as Di,bN as oi,bO as Va,bP as Os,bQ as za,bR as Wa,bS as Xa,bT as Ya,bU as Ka,bV as qa,bW as Za,bX as Vr,bY as ja,bZ as gi,b_ as vi,b$ as Fs,c0 as Bs,c1 as zr,c2 as gt,c3 as ks,c4 as Dn,c5 as _n,c6 as Ln,c7 as Gs,c8 as Hs,c9 as Vs,ca as zs,cb as Ws,cc as Xs,cd as Ys,ce as Ks,cf as qs,cg as Li,ch as $a,ci as Un,cj as Mt,ck as Zs,cl as un,cm as fn,cn as Ui,co as js,cp as $s,cq as Qs,cr as Js}from"./three-core-BALzDnCY.js";const el="modulepreload",tl=function(e){return"/Plushify/"+e},Wr={},zt=function(n,t,i){let s=Promise.resolve();if(t&&t.length>0){let _=function(v){return Promise.all(v.map(b=>Promise.resolve(b).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=_(t.map(v=>{if(v=tl(v),v in Wr)return;Wr[v]=!0;const b=v.endsWith(".css"),x=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${x}`))return;const p=document.createElement("link");if(p.rel=b?"stylesheet":el,b||(p.as="script"),p.crossOrigin="",p.href=v,l&&p.setAttribute("nonce",l),document.head.appendChild(p),b)return new Promise((f,E)=>{p.addEventListener("load",f),p.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${v}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return n().catch(r)})},nl="/Plushify/assets/pack-source-BnQZs1LU.zip",il=`{
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
}`;function Qa(){let e=null,n=!1,t=null,i=null;function s(r,a){t(r,a),i=e.requestAnimationFrame(s)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(s),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function rl(e){const n=new WeakMap;function t(l,_){const v=l.array,b=l.usage,x=v.byteLength,p=e.createBuffer();e.bindBuffer(_,p),e.bufferData(_,v,b),l.onUploadCallback();let f;if(v instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&v instanceof Float16Array)f=e.HALF_FLOAT;else if(v instanceof Uint16Array)l.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(v instanceof Int16Array)f=e.SHORT;else if(v instanceof Uint32Array)f=e.UNSIGNED_INT;else if(v instanceof Int32Array)f=e.INT;else if(v instanceof Int8Array)f=e.BYTE;else if(v instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:p,type:f,bytesPerElement:v.BYTES_PER_ELEMENT,version:l.version,size:x}}function i(l,_,v){const b=_.array,x=_.updateRanges;if(e.bindBuffer(v,l),x.length===0)e.bufferSubData(v,0,b);else{x.sort((f,E)=>f.start-E.start);let p=0;for(let f=1;f<x.length;f++){const E=x[p],g=x[f];g.start<=E.start+E.count+1?E.count=Math.max(E.count,g.start+g.count-E.start):(++p,x[p]=g)}x.length=p+1;for(let f=0,E=x.length;f<E;f++){const g=x[f];e.bufferSubData(v,g.start*b.BYTES_PER_ELEMENT,b,g.start,g.count)}_.clearUpdateRanges()}_.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const _=n.get(l);_&&(e.deleteBuffer(_.buffer),n.delete(l))}function a(l,_){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const b=n.get(l);(!b||b.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const v=n.get(l);if(v===void 0)n.set(l,t(l,_));else if(v.version<l.version){if(v.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(v.buffer,l,_),v.version=l.version}}return{get:s,remove:r,update:a}}var al=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ol=`#ifdef USE_ALPHAHASH
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
#endif`,sl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ll=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ul=`#ifdef USE_AOMAP
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
#endif`,dl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hl=`#ifdef USE_BATCHING
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
#endif`,pl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ml=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_l=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vl=`#ifdef USE_IRIDESCENCE
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
#endif`,Sl=`#ifdef USE_BUMPMAP
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
#endif`,El=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ml=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Al=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yl=`#define PI 3.141592653589793
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
} // validated`,Cl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pl=`vec3 transformedNormal = objectNormal;
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
#endif`,Dl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ll=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ul=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Il=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ol=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fl=`#ifdef USE_ENVMAP
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
#endif`,Bl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kl=`#ifdef USE_ENVMAP
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
#endif`,Gl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hl=`#ifdef USE_ENVMAP
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
#endif`,Vl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yl=`#ifdef USE_GRADIENTMAP
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
}`,Kl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ql=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jl=`uniform bool receiveShadow;
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
#endif`,$l=`#ifdef USE_ENVMAP
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
#endif`,Ql=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ec=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nc=`PhysicalMaterial material;
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
#endif`,ic=`uniform sampler2D dfgLUT;
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
}`,rc=`
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
#endif`,ac=`#if defined( RE_IndirectDiffuse )
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
#endif`,oc=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pc=`#if defined( USE_POINTS_UV )
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
#endif`,mc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_c=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ec=`#ifdef USE_MORPHTARGETS
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
#endif`,xc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ac=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rc=`#ifdef USE_NORMALMAP
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
#endif`,yc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ic=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zc=`float getShadowMask() {
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
}`,Wc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xc=`#ifdef USE_SKINNING
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
#endif`,Yc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kc=`#ifdef USE_SKINNING
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
#endif`,qc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$c=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qc=`#ifdef USE_TRANSMISSION
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
#endif`,Jc=`#ifdef USE_TRANSMISSION
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
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const af=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,of=`uniform sampler2D t2D;
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
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`#include <common>
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
}`,df=`#if DEPTH_PACKING == 3200
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
}`,hf=`#define DISTANCE
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
}`,pf=`#define DISTANCE
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
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_f=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`uniform float scale;
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
}`,vf=`uniform vec3 diffuse;
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
}`,Sf=`#include <common>
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
}`,Ef=`uniform vec3 diffuse;
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
}`,xf=`#define LAMBERT
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
}`,bf=`#define LAMBERT
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
}`,Mf=`#define MATCAP
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
}`,Tf=`#define MATCAP
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
}`,Af=`#define NORMAL
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
}`,wf=`#define NORMAL
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
}`,Rf=`#define PHONG
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
}`,yf=`#define PHONG
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
}`,Cf=`#define STANDARD
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
}`,Pf=`#define STANDARD
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
}`,Df=`#define TOON
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
}`,Lf=`#define TOON
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
}`,Uf=`uniform float size;
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
}`,If=`uniform vec3 diffuse;
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
}`,Nf=`#include <common>
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
}`,Of=`uniform vec3 color;
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
}`,Ff=`uniform float rotation;
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
}`,Bf=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:al,alphahash_pars_fragment:ol,alphamap_fragment:sl,alphamap_pars_fragment:ll,alphatest_fragment:cl,alphatest_pars_fragment:fl,aomap_fragment:ul,aomap_pars_fragment:dl,batching_pars_vertex:hl,batching_vertex:pl,begin_vertex:ml,beginnormal_vertex:_l,bsdfs:gl,iridescence_fragment:vl,bumpmap_pars_fragment:Sl,clipping_planes_fragment:El,clipping_planes_pars_fragment:xl,clipping_planes_pars_vertex:bl,clipping_planes_vertex:Ml,color_fragment:Tl,color_pars_fragment:Al,color_pars_vertex:wl,color_vertex:Rl,common:yl,cube_uv_reflection_fragment:Cl,defaultnormal_vertex:Pl,displacementmap_pars_vertex:Dl,displacementmap_vertex:Ll,emissivemap_fragment:Ul,emissivemap_pars_fragment:Il,colorspace_fragment:Nl,colorspace_pars_fragment:Ol,envmap_fragment:Fl,envmap_common_pars_fragment:Bl,envmap_pars_fragment:kl,envmap_pars_vertex:Gl,envmap_physical_pars_fragment:$l,envmap_vertex:Hl,fog_vertex:Vl,fog_pars_vertex:zl,fog_fragment:Wl,fog_pars_fragment:Xl,gradientmap_pars_fragment:Yl,lightmap_pars_fragment:Kl,lights_lambert_fragment:ql,lights_lambert_pars_fragment:Zl,lights_pars_begin:jl,lights_toon_fragment:Ql,lights_toon_pars_fragment:Jl,lights_phong_fragment:ec,lights_phong_pars_fragment:tc,lights_physical_fragment:nc,lights_physical_pars_fragment:ic,lights_fragment_begin:rc,lights_fragment_maps:ac,lights_fragment_end:oc,logdepthbuf_fragment:sc,logdepthbuf_pars_fragment:lc,logdepthbuf_pars_vertex:cc,logdepthbuf_vertex:fc,map_fragment:uc,map_pars_fragment:dc,map_particle_fragment:hc,map_particle_pars_fragment:pc,metalnessmap_fragment:mc,metalnessmap_pars_fragment:_c,morphinstance_vertex:gc,morphcolor_vertex:vc,morphnormal_vertex:Sc,morphtarget_pars_vertex:Ec,morphtarget_vertex:xc,normal_fragment_begin:bc,normal_fragment_maps:Mc,normal_pars_fragment:Tc,normal_pars_vertex:Ac,normal_vertex:wc,normalmap_pars_fragment:Rc,clearcoat_normal_fragment_begin:yc,clearcoat_normal_fragment_maps:Cc,clearcoat_pars_fragment:Pc,iridescence_pars_fragment:Dc,opaque_fragment:Lc,packing:Uc,premultiplied_alpha_fragment:Ic,project_vertex:Nc,dithering_fragment:Oc,dithering_pars_fragment:Fc,roughnessmap_fragment:Bc,roughnessmap_pars_fragment:kc,shadowmap_pars_fragment:Gc,shadowmap_pars_vertex:Hc,shadowmap_vertex:Vc,shadowmask_pars_fragment:zc,skinbase_vertex:Wc,skinning_pars_vertex:Xc,skinning_vertex:Yc,skinnormal_vertex:Kc,specularmap_fragment:qc,specularmap_pars_fragment:Zc,tonemapping_fragment:jc,tonemapping_pars_fragment:$c,transmission_fragment:Qc,transmission_pars_fragment:Jc,uv_pars_fragment:ef,uv_pars_vertex:tf,uv_vertex:nf,worldpos_vertex:rf,background_vert:af,background_frag:of,backgroundCube_vert:sf,backgroundCube_frag:lf,cube_vert:cf,cube_frag:ff,depth_vert:uf,depth_frag:df,distance_vert:hf,distance_frag:pf,equirect_vert:mf,equirect_frag:_f,linedashed_vert:gf,linedashed_frag:vf,meshbasic_vert:Sf,meshbasic_frag:Ef,meshlambert_vert:xf,meshlambert_frag:bf,meshmatcap_vert:Mf,meshmatcap_frag:Tf,meshnormal_vert:Af,meshnormal_frag:wf,meshphong_vert:Rf,meshphong_frag:yf,meshphysical_vert:Cf,meshphysical_frag:Pf,meshtoon_vert:Df,meshtoon_frag:Lf,points_vert:Uf,points_frag:If,shadow_vert:Nf,shadow_frag:Of,sprite_vert:Ff,sprite_frag:Bf},xe={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Ct={basic:{uniforms:gt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:gt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:gt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:gt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:gt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new at(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:gt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:gt([xe.points,xe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:gt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:gt([xe.common,xe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:gt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:gt([xe.sprite,xe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:gt([xe.common,xe.displacementmap,{referencePosition:{value:new ke},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:gt([xe.lights,xe.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Ct.physical={uniforms:gt([Ct.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Gn={r:0,b:0,g:0},Zt=new oi,kf=new pn;function Gf(e,n,t,i,s,r){const a=new at(0);let l=s===!0?0:1,_,v,b=null,x=0,p=null;function f(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const R=S.backgroundBlurriness>0;T=n.get(T,R)}return T}function E(S){let T=!1;const R=f(S);R===null?c(a,l):R&&R.isColor&&(c(R,1),T=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(e.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(S,T){const R=f(T);R&&(R.isCubeTexture||R.mapping===ri)?(v===void 0&&(v=new bt(new ai(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:Di(Ct.backgroundCube.uniforms),vertexShader:Ct.backgroundCube.vertexShader,fragmentShader:Ct.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(P,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(v)),Zt.copy(T.backgroundRotation),Zt.x*=-1,Zt.y*=-1,Zt.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Zt.y*=-1,Zt.z*=-1),v.material.uniforms.envMap.value=R,v.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(kf.makeRotationFromEuler(Zt)),v.material.toneMapped=lt.getTransfer(R.colorSpace)!==it,(b!==R||x!==R.version||p!==e.toneMapping)&&(v.material.needsUpdate=!0,b=R,x=R.version,p=e.toneMapping),v.layers.enableAll(),S.unshift(v,v.geometry,v.material,0,0,null)):R&&R.isTexture&&(_===void 0&&(_=new bt(new Vi(2,2),new Gt({name:"BackgroundMaterial",uniforms:Di(Ct.background.uniforms),vertexShader:Ct.background.vertexShader,fragmentShader:Ct.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(_)),_.material.uniforms.t2D.value=R,_.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,_.material.toneMapped=lt.getTransfer(R.colorSpace)!==it,R.matrixAutoUpdate===!0&&R.updateMatrix(),_.material.uniforms.uvTransform.value.copy(R.matrix),(b!==R||x!==R.version||p!==e.toneMapping)&&(_.material.needsUpdate=!0,b=R,x=R.version,p=e.toneMapping),_.layers.enableAll(),S.unshift(_,_.geometry,_.material,0,0,null))}function c(S,T){S.getRGB(Gn,Ha(e)),t.buffers.color.setClear(Gn.r,Gn.g,Gn.b,T,r)}function o(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),l=T,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,c(a,l)},render:E,addToRenderList:g,dispose:o}}function Hf(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,a=!1;function l(B,C,N,d,F){let W=!1;const O=x(B,d,N,C);r!==O&&(r=O,v(r.object)),W=f(B,d,N,F),W&&E(B,d,N,F),F!==null&&n.update(F,e.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,R(B,C,N,d),F!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(F).buffer))}function _(){return e.createVertexArray()}function v(B){return e.bindVertexArray(B)}function b(B){return e.deleteVertexArray(B)}function x(B,C,N,d){const F=d.wireframe===!0;let W=i[C.id];W===void 0&&(W={},i[C.id]=W);const O=B.isInstancedMesh===!0?B.id:0;let oe=W[O];oe===void 0&&(oe={},W[O]=oe);let q=oe[N.id];q===void 0&&(q={},oe[N.id]=q);let fe=q[F];return fe===void 0&&(fe=p(_()),q[F]=fe),fe}function p(B){const C=[],N=[],d=[];for(let F=0;F<t;F++)C[F]=0,N[F]=0,d[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:d,object:B,attributes:{},index:null}}function f(B,C,N,d){const F=r.attributes,W=C.attributes;let O=0;const oe=N.getAttributes();for(const q in oe)if(oe[q].location>=0){const X=F[q];let G=W[q];if(G===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(G=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(G=B.instanceColor)),X===void 0||X.attribute!==G||G&&X.data!==G.data)return!0;O++}return r.attributesNum!==O||r.index!==d}function E(B,C,N,d){const F={},W=C.attributes;let O=0;const oe=N.getAttributes();for(const q in oe)if(oe[q].location>=0){let X=W[q];X===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(X=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(X=B.instanceColor));const G={};G.attribute=X,X&&X.data&&(G.data=X.data),F[q]=G,O++}r.attributes=F,r.attributesNum=O,r.index=d}function g(){const B=r.newAttributes;for(let C=0,N=B.length;C<N;C++)B[C]=0}function c(B){o(B,0)}function o(B,C){const N=r.newAttributes,d=r.enabledAttributes,F=r.attributeDivisors;N[B]=1,d[B]===0&&(e.enableVertexAttribArray(B),d[B]=1),F[B]!==C&&(e.vertexAttribDivisor(B,C),F[B]=C)}function S(){const B=r.newAttributes,C=r.enabledAttributes;for(let N=0,d=C.length;N<d;N++)C[N]!==B[N]&&(e.disableVertexAttribArray(N),C[N]=0)}function T(B,C,N,d,F,W,O){O===!0?e.vertexAttribIPointer(B,C,N,F,W):e.vertexAttribPointer(B,C,N,d,F,W)}function R(B,C,N,d){g();const F=d.attributes,W=N.getAttributes(),O=C.defaultAttributeValues;for(const oe in W){const q=W[oe];if(q.location>=0){let fe=F[oe];if(fe===void 0&&(oe==="instanceMatrix"&&B.instanceMatrix&&(fe=B.instanceMatrix),oe==="instanceColor"&&B.instanceColor&&(fe=B.instanceColor)),fe!==void 0){const X=fe.normalized,G=fe.itemSize,pe=n.get(fe);if(pe===void 0)continue;const me=pe.buffer,ue=pe.type,ee=pe.bytesPerElement,de=ue===e.INT||ue===e.UNSIGNED_INT||fe.gpuType===ka;if(fe.isInterleavedBufferAttribute){const se=fe.data,Ee=se.stride,Ae=fe.offset;if(se.isInstancedInterleavedBuffer){for(let Ce=0;Ce<q.locationSize;Ce++)o(q.location+Ce,se.meshPerAttribute);B.isInstancedMesh!==!0&&d._maxInstanceCount===void 0&&(d._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ce=0;Ce<q.locationSize;Ce++)c(q.location+Ce);e.bindBuffer(e.ARRAY_BUFFER,me);for(let Ce=0;Ce<q.locationSize;Ce++)T(q.location+Ce,G/q.locationSize,ue,X,Ee*ee,(Ae+G/q.locationSize*Ce)*ee,de)}else{if(fe.isInstancedBufferAttribute){for(let se=0;se<q.locationSize;se++)o(q.location+se,fe.meshPerAttribute);B.isInstancedMesh!==!0&&d._maxInstanceCount===void 0&&(d._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let se=0;se<q.locationSize;se++)c(q.location+se);e.bindBuffer(e.ARRAY_BUFFER,me);for(let se=0;se<q.locationSize;se++)T(q.location+se,G/q.locationSize,ue,X,G*ee,G/q.locationSize*se*ee,de)}}else if(O!==void 0){const X=O[oe];if(X!==void 0)switch(X.length){case 2:e.vertexAttrib2fv(q.location,X);break;case 3:e.vertexAttrib3fv(q.location,X);break;case 4:e.vertexAttrib4fv(q.location,X);break;default:e.vertexAttrib1fv(q.location,X)}}}}S()}function P(){A();for(const B in i){const C=i[B];for(const N in C){const d=C[N];for(const F in d){const W=d[F];for(const O in W)b(W[O].object),delete W[O];delete d[F]}}delete i[B]}}function D(B){if(i[B.id]===void 0)return;const C=i[B.id];for(const N in C){const d=C[N];for(const F in d){const W=d[F];for(const O in W)b(W[O].object),delete W[O];delete d[F]}}delete i[B.id]}function U(B){for(const C in i){const N=i[C];for(const d in N){const F=N[d];if(F[B.id]===void 0)continue;const W=F[B.id];for(const O in W)b(W[O].object),delete W[O];delete F[B.id]}}}function M(B){for(const C in i){const N=i[C],d=B.isInstancedMesh===!0?B.id:0,F=N[d];if(F!==void 0){for(const W in F){const O=F[W];for(const oe in O)b(O[oe].object),delete O[oe];delete F[W]}delete N[d],Object.keys(N).length===0&&delete i[C]}}}function A(){Y(),a=!0,r!==s&&(r=s,v(r.object))}function Y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:A,resetDefaultState:Y,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfObject:M,releaseStatesOfProgram:U,initAttributes:g,enableAttribute:c,disableUnusedAttributes:S}}function Vf(e,n,t){let i;function s(v){i=v}function r(v,b){e.drawArrays(i,v,b),t.update(b,i,1)}function a(v,b,x){x!==0&&(e.drawArraysInstanced(i,v,b,x),t.update(b,i,x))}function l(v,b,x){if(x===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,v,0,b,0,x);let f=0;for(let E=0;E<x;E++)f+=b[E];t.update(f,i,1)}function _(v,b,x,p){if(x===0)return;const f=n.get("WEBGL_multi_draw");if(f===null)for(let E=0;E<v.length;E++)a(v[E],b[E],p[E]);else{f.multiDrawArraysInstancedWEBGL(i,v,0,b,0,p,0,x);let E=0;for(let g=0;g<x;g++)E+=b[g]*p[g];t.update(E,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=_}function zf(e,n,t,i){let s;function r(){if(s!==void 0)return s;if(n.has("EXT_texture_filter_anisotropic")===!0){const U=n.get("EXT_texture_filter_anisotropic");s=e.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(U){return!(U!==Ft&&i.convert(U)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(U){const M=U===Yt&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(U!==Pt&&i.convert(U)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Wt&&!M)}function _(U){if(U==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let v=t.precision!==void 0?t.precision:"highp";const b=_(v);b!==v&&(tt("WebGLRenderer:",v,"not supported, using",b,"instead."),v=b);const x=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),o=e.getParameter(e.MAX_VERTEX_ATTRIBS),S=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),R=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),P=e.getParameter(e.MAX_SAMPLES),D=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:_,textureFormatReadable:a,textureTypeReadable:l,precision:v,logarithmicDepthBuffer:x,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:E,maxTextureSize:g,maxCubemapSize:c,maxAttributes:o,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:R,maxSamples:P,samples:D}}function Wf(e){const n=this;let t=null,i=0,s=!1,r=!1;const a=new La,l=new Ke,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(x,p){const f=x.length!==0||p||i!==0||s;return s=p,i=x.length,f},this.beginShadows=function(){r=!0,b(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(x,p){t=b(x,p,0)},this.setState=function(x,p,f){const E=x.clippingPlanes,g=x.clipIntersection,c=x.clipShadows,o=e.get(x);if(!s||E===null||E.length===0||r&&!c)r?b(null):v();else{const S=r?0:i,T=S*4;let R=o.clippingState||null;_.value=R,R=b(E,p,T,f);for(let P=0;P!==T;++P)R[P]=t[P];o.clippingState=R,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function v(){_.value!==t&&(_.value=t,_.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function b(x,p,f,E){const g=x!==null?x.length:0;let c=null;if(g!==0){if(c=_.value,E!==!0||c===null){const o=f+g*4,S=p.matrixWorldInverse;l.getNormalMatrix(S),(c===null||c.length<o)&&(c=new Float32Array(o));for(let T=0,R=f;T!==g;++T,R+=4)a.copy(x[T]).applyMatrix4(S,l),a.normal.toArray(c,R),c[R+3]=a.constant}_.value=c,_.needsUpdate=!0}return n.numPlanes=g,n.numIntersection=0,c}}const Xt=4,Xr=[.125,.215,.35,.446,.526,.582],$t=20,Xf=256,En=new ki,Yr=new at;let Si=null,Ei=0,xi=0,bi=!1;const Yf=new ke;class Kr{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,s=100,r={}){const{size:a=256,position:l=Yf}=r;Si=this._renderer.getRenderTarget(),Ei=this._renderer.getActiveCubeFace(),xi=this._renderer.getActiveMipmapLevel(),bi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(n,i,s,_,l),t>0&&this._blur(_,0,0,t),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(Si,Ei,xi),this._renderer.xr.enabled=bi,n.scissorTest=!1,an(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===Dn||n.mapping===_n?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Si=this._renderer.getRenderTarget(),Ei=this._renderer.getActiveCubeFace(),xi=this._renderer.getActiveMipmapLevel(),bi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Yt,format:Ft,colorSpace:ii,depthBuffer:!1},s=qr(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qr(n,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Kf(r)),this._blurMaterial=Zf(r,n,t),this._ggxMaterial=qf(r,n,t)}return s}_compileMaterial(n){const t=new bt(new gn,n);this._renderer.compile(t,En)}_sceneToCubeUV(n,t,i,s,r){const _=new Xn(90,1,t,i),v=[1,-1,1,1,1,1],b=[1,1,1,-1,-1,-1],x=this._renderer,p=x.autoClear,f=x.toneMapping;x.getClearColor(Yr),x.toneMapping=Dt,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new ai,new Ln({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,c=g.material;let o=!1;const S=n.background;S?S.isColor&&(c.color.copy(S),n.background=null,o=!0):(c.color.copy(Yr),o=!0);for(let T=0;T<6;T++){const R=T%3;R===0?(_.up.set(0,v[T],0),_.position.set(r.x,r.y,r.z),_.lookAt(r.x+b[T],r.y,r.z)):R===1?(_.up.set(0,0,v[T]),_.position.set(r.x,r.y,r.z),_.lookAt(r.x,r.y+b[T],r.z)):(_.up.set(0,v[T],0),_.position.set(r.x,r.y,r.z),_.lookAt(r.x,r.y,r.z+b[T]));const P=this._cubeSize;an(s,R*P,T>2?P:0,P,P),x.setRenderTarget(s),o&&x.render(g,_),x.render(n,_)}x.toneMapping=f,x.autoClear=p,n.background=S}_textureToCubeUV(n,t){const i=this._renderer,s=n.mapping===Dn||n.mapping===_n;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jr()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zr());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const l=r.uniforms;l.envMap.value=n;const _=this._cubeSize;an(t,0,0,3*_,2*_),i.setRenderTarget(t),i.render(a,En)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(n,r-1,r);t.autoClear=i}_applyGGXFilter(n,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;const _=a.uniforms,v=i/(this._lodMeshes.length-1),b=t/(this._lodMeshes.length-1),x=Math.sqrt(v*v-b*b),p=0+v*1.25,f=x*p,{_lodMax:E}=this,g=this._sizeLods[i],c=3*g*(i>E-Xt?i-E+Xt:0),o=4*(this._cubeSize-g);_.envMap.value=n.texture,_.roughness.value=f,_.mipInt.value=E-t,an(r,c,o,3*g,2*g),s.setRenderTarget(r),s.render(l,En),_.envMap.value=r.texture,_.roughness.value=0,_.mipInt.value=E-i,an(n,c,o,3*g,2*g),s.setRenderTarget(n),s.render(l,En)}_blur(n,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(n,a,t,i,s,"latitudinal",r),this._halfBlur(a,n,i,i,s,"longitudinal",r)}_halfBlur(n,t,i,s,r,a,l){const _=this._renderer,v=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&rt("blur direction must be either latitudinal or longitudinal!");const b=3,x=this._lodMeshes[s];x.material=v;const p=v.uniforms,f=this._sizeLods[i]-1,E=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*$t-1),g=r/E,c=isFinite(r)?1+Math.floor(b*g):$t;c>$t&&tt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${$t}`);const o=[];let S=0;for(let U=0;U<$t;++U){const M=U/g,A=Math.exp(-M*M/2);o.push(A),U===0?S+=A:U<c&&(S+=2*A)}for(let U=0;U<o.length;U++)o[U]=o[U]/S;p.envMap.value=n.texture,p.samples.value=c,p.weights.value=o,p.latitudinal.value=a==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:T}=this;p.dTheta.value=E,p.mipInt.value=T-i;const R=this._sizeLods[s],P=3*R*(s>T-Xt?s-T+Xt:0),D=4*(this._cubeSize-R);an(t,P,D,3*R,2*R),_.setRenderTarget(t),_.render(x,En)}}function Kf(e){const n=[],t=[],i=[];let s=e;const r=e-Xt+1+Xr.length;for(let a=0;a<r;a++){const l=Math.pow(2,s);n.push(l);let _=1/l;a>e-Xt?_=Xr[a-e+Xt-1]:a===0&&(_=0),t.push(_);const v=1/(l-2),b=-v,x=1+v,p=[b,b,x,b,x,x,b,b,x,x,b,x],f=6,E=6,g=3,c=2,o=1,S=new Float32Array(g*E*f),T=new Float32Array(c*E*f),R=new Float32Array(o*E*f);for(let D=0;D<f;D++){const U=D%3*2/3-1,M=D>2?0:-1,A=[U,M,0,U+2/3,M,0,U+2/3,M+1,0,U,M,0,U+2/3,M+1,0,U,M+1,0];S.set(A,g*E*D),T.set(p,c*E*D);const Y=[D,D,D,D,D,D];R.set(Y,o*E*D)}const P=new gn;P.setAttribute("position",new An(S,g)),P.setAttribute("uv",new An(T,c)),P.setAttribute("faceIndex",new An(R,o)),i.push(new bt(P,null)),s>Xt&&s--}return{lodMeshes:i,sizeLods:n,sigmas:t}}function qr(e,n,t){const i=new Lt(e,n,t);return i.texture.mapping=ri,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function an(e,n,t,i,s){e.viewport.set(n,t,i,s),e.scissor.set(n,t,i,s)}function qf(e,n,t){return new Gt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xf,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:si(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Zf(e,n,t){const i=new Float32Array($t),s=new ke(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:$t,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:si(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Zr(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:si(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function jr(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:si(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function si(){return`

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
	`}class Ja extends Lt{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},s=[i,i,i,i,i,i];this.texture=new Va(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ai(5,5,5),r=new Gt({name:"CubemapFromEquirect",uniforms:Di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xt,blending:kt});r.uniforms.tEquirect.value=t;const a=new bt(s,r),l=t.minFilter;return t.minFilter===ln&&(t.minFilter=Et),new Os(1,10,this).update(n,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(n,t=!0,i=!0,s=!0){const r=n.getRenderTarget();for(let a=0;a<6;a++)n.setRenderTarget(this,a),n.clear(t,i,s);n.setRenderTarget(r)}}function jf(e){let n=new WeakMap,t=new WeakMap,i=null;function s(p,f=!1){return p==null?null:f?a(p):r(p)}function r(p){if(p&&p.isTexture){const f=p.mapping;if(f===gi||f===vi)if(n.has(p)){const E=n.get(p).texture;return l(E,p.mapping)}else{const E=p.image;if(E&&E.height>0){const g=new Ja(E.height);return g.fromEquirectangularTexture(e,p),n.set(p,g),p.addEventListener("dispose",v),l(g.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture){const f=p.mapping,E=f===gi||f===vi,g=f===Dn||f===_n;if(E||g){let c=t.get(p);const o=c!==void 0?c.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==o)return i===null&&(i=new Kr(e)),c=E?i.fromEquirectangular(p,c):i.fromCubemap(p,c),c.texture.pmremVersion=p.pmremVersion,t.set(p,c),c.texture;if(c!==void 0)return c.texture;{const S=p.image;return E&&S&&S.height>0||g&&S&&_(S)?(i===null&&(i=new Kr(e)),c=E?i.fromEquirectangular(p):i.fromCubemap(p),c.texture.pmremVersion=p.pmremVersion,t.set(p,c),p.addEventListener("dispose",b),c.texture):null}}}return p}function l(p,f){return f===gi?p.mapping=Dn:f===vi&&(p.mapping=_n),p}function _(p){let f=0;const E=6;for(let g=0;g<E;g++)p[g]!==void 0&&f++;return f===E}function v(p){const f=p.target;f.removeEventListener("dispose",v);const E=n.get(f);E!==void 0&&(n.delete(f),E.dispose())}function b(p){const f=p.target;f.removeEventListener("dispose",b);const E=t.get(f);E!==void 0&&(t.delete(f),E.dispose())}function x(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:x}}function $f(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const s=e.getExtension(i);return n[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Da("WebGLRenderer: "+i+" extension not supported."),s}}}function Qf(e,n,t,i){const s={},r=new WeakMap;function a(x){const p=x.target;p.index!==null&&n.remove(p.index);for(const E in p.attributes)n.remove(p.attributes[E]);p.removeEventListener("dispose",a),delete s[p.id];const f=r.get(p);f&&(n.remove(f),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(x,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function _(x){const p=x.attributes;for(const f in p)n.update(p[f],e.ARRAY_BUFFER)}function v(x){const p=[],f=x.index,E=x.attributes.position;let g=0;if(E===void 0)return;if(f!==null){const S=f.array;g=f.version;for(let T=0,R=S.length;T<R;T+=3){const P=S[T+0],D=S[T+1],U=S[T+2];p.push(P,D,D,U,U,P)}}else{const S=E.array;g=E.version;for(let T=0,R=S.length/3-1;T<R;T+=3){const P=T+0,D=T+1,U=T+2;p.push(P,D,D,U,U,P)}}const c=new(E.count>=65535?Fs:Bs)(p,1);c.version=g;const o=r.get(x);o&&n.remove(o),r.set(x,c)}function b(x){const p=r.get(x);if(p){const f=x.index;f!==null&&p.version<f.version&&v(x)}else v(x);return r.get(x)}return{get:l,update:_,getWireframeAttribute:b}}function Jf(e,n,t){let i;function s(p){i=p}let r,a;function l(p){r=p.type,a=p.bytesPerElement}function _(p,f){e.drawElements(i,f,r,p*a),t.update(f,i,1)}function v(p,f,E){E!==0&&(e.drawElementsInstanced(i,f,r,p*a,E),t.update(f,i,E))}function b(p,f,E){if(E===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,p,0,E);let c=0;for(let o=0;o<E;o++)c+=f[o];t.update(c,i,1)}function x(p,f,E,g){if(E===0)return;const c=n.get("WEBGL_multi_draw");if(c===null)for(let o=0;o<p.length;o++)v(p[o]/a,f[o],g[o]);else{c.multiDrawElementsInstancedWEBGL(i,f,0,r,p,0,g,0,E);let o=0;for(let S=0;S<E;S++)o+=f[S]*g[S];t.update(o,i,1)}}this.setMode=s,this.setIndex=l,this.render=_,this.renderInstances=v,this.renderMultiDraw=b,this.renderMultiDrawInstances=x}function eu(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(t.calls++,a){case e.TRIANGLES:t.triangles+=l*(r/3);break;case e.LINES:t.lines+=l*(r/2);break;case e.LINE_STRIP:t.lines+=l*(r-1);break;case e.LINE_LOOP:t.lines+=l*r;break;case e.POINTS:t.points+=l*r;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:s,update:i}}function tu(e,n,t){const i=new WeakMap,s=new vt;function r(a,l,_){const v=a.morphTargetInfluences,b=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,x=b!==void 0?b.length:0;let p=i.get(l);if(p===void 0||p.count!==x){let A=function(){U.dispose(),i.delete(l),l.removeEventListener("dispose",A)};p!==void 0&&p.texture.dispose();const f=l.morphAttributes.position!==void 0,E=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,c=l.morphAttributes.position||[],o=l.morphAttributes.normal||[],S=l.morphAttributes.color||[];let T=0;f===!0&&(T=1),E===!0&&(T=2),g===!0&&(T=3);let R=l.attributes.position.count*T,P=1;R>n.maxTextureSize&&(P=Math.ceil(R/n.maxTextureSize),R=n.maxTextureSize);const D=new Float32Array(R*P*4*x),U=new Ga(D,R,P,x);U.type=Wt,U.needsUpdate=!0;const M=T*4;for(let Y=0;Y<x;Y++){const B=c[Y],C=o[Y],N=S[Y],d=R*P*4*Y;for(let F=0;F<B.count;F++){const W=F*M;f===!0&&(s.fromBufferAttribute(B,F),D[d+W+0]=s.x,D[d+W+1]=s.y,D[d+W+2]=s.z,D[d+W+3]=0),E===!0&&(s.fromBufferAttribute(C,F),D[d+W+4]=s.x,D[d+W+5]=s.y,D[d+W+6]=s.z,D[d+W+7]=0),g===!0&&(s.fromBufferAttribute(N,F),D[d+W+8]=s.x,D[d+W+9]=s.y,D[d+W+10]=s.z,D[d+W+11]=N.itemSize===4?s.w:1)}}p={count:x,texture:U,size:new Qe(R,P)},i.set(l,p),l.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)_.getUniforms().setValue(e,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<v.length;g++)f+=v[g];const E=l.morphTargetsRelative?1:1-f;_.getUniforms().setValue(e,"morphTargetBaseInfluence",E),_.getUniforms().setValue(e,"morphTargetInfluences",v)}_.getUniforms().setValue(e,"morphTargetsTexture",p.texture,t),_.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}return{update:r}}function nu(e,n,t,i,s){let r=new WeakMap;function a(v){const b=s.render.frame,x=v.geometry,p=n.get(v,x);if(r.get(p)!==b&&(n.update(p),r.set(p,b)),v.isInstancedMesh&&(v.hasEventListener("dispose",_)===!1&&v.addEventListener("dispose",_),r.get(v)!==b&&(t.update(v.instanceMatrix,e.ARRAY_BUFFER),v.instanceColor!==null&&t.update(v.instanceColor,e.ARRAY_BUFFER),r.set(v,b))),v.isSkinnedMesh){const f=v.skeleton;r.get(f)!==b&&(f.update(),r.set(f,b))}return p}function l(){r=new WeakMap}function _(v){const b=v.target;b.removeEventListener("dispose",_),i.releaseStatesOfObject(b),t.remove(b.instanceMatrix),b.instanceColor!==null&&t.remove(b.instanceColor)}return{update:a,dispose:l}}const iu={[Za]:"LINEAR_TONE_MAPPING",[qa]:"REINHARD_TONE_MAPPING",[Ka]:"CINEON_TONE_MAPPING",[Ya]:"ACES_FILMIC_TONE_MAPPING",[Xa]:"AGX_TONE_MAPPING",[Wa]:"NEUTRAL_TONE_MAPPING",[za]:"CUSTOM_TONE_MAPPING"};function ru(e,n,t,i,s){const r=new Lt(n,t,{type:e,depthBuffer:i,stencilBuffer:s}),a=new Lt(n,t,{type:Yt,depthBuffer:!1,stencilBuffer:!1}),l=new gn;l.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Tn([0,2,0,0,2,0],2));const _=new No({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new bt(l,_),b=new ki(-1,1,1,-1,0,1);let x=null,p=null,f=!1,E,g=null,c=[],o=!1;this.setSize=function(S,T){r.setSize(S,T),a.setSize(S,T);for(let R=0;R<c.length;R++){const P=c[R];P.setSize&&P.setSize(S,T)}},this.setEffects=function(S){c=S,o=c.length>0&&c[0].isRenderPass===!0;const T=r.width,R=r.height;for(let P=0;P<c.length;P++){const D=c[P];D.setSize&&D.setSize(T,R)}},this.begin=function(S,T){if(f||S.toneMapping===Dt&&c.length===0)return!1;if(g=T,T!==null){const R=T.width,P=T.height;(r.width!==R||r.height!==P)&&this.setSize(R,P)}return o===!1&&S.setRenderTarget(r),E=S.toneMapping,S.toneMapping=Dt,!0},this.hasRenderPass=function(){return o},this.end=function(S,T){S.toneMapping=E,f=!0;let R=r,P=a;for(let D=0;D<c.length;D++){const U=c[D];if(U.enabled!==!1&&(U.render(S,P,R,T),U.needsSwap!==!1)){const M=R;R=P,P=M}}if(x!==S.outputColorSpace||p!==S.toneMapping){x=S.outputColorSpace,p=S.toneMapping,_.defines={},lt.getTransfer(x)===it&&(_.defines.SRGB_TRANSFER="");const D=iu[p];D&&(_.defines[D]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=R.texture,S.setRenderTarget(g),S.render(v,b),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),l.dispose(),_.dispose()}}const eo=new Xs,Ii=new $n(1,1),to=new Ga,no=new Gs,io=new Va,$r=[],Qr=[],Jr=new Float32Array(16),ea=new Float32Array(9),ta=new Float32Array(4);function vn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const s=n*t;let r=$r[s];if(r===void 0&&(r=new Float32Array(s),$r[s]=r),n!==0){i.toArray(r,0);for(let a=1,l=0;a!==n;++a)l+=t,e[a].toArray(r,l)}return r}function ft(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ut(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function li(e,n){let t=Qr[n];t===void 0&&(t=new Int32Array(n),Qr[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function au(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function ou(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2fv(this.addr,n),ut(t,n)}}function su(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(ft(t,n))return;e.uniform3fv(this.addr,n),ut(t,n)}}function lu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4fv(this.addr,n),ut(t,n)}}function cu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;ta.set(i),e.uniformMatrix2fv(this.addr,!1,ta),ut(t,i)}}function fu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;ea.set(i),e.uniformMatrix3fv(this.addr,!1,ea),ut(t,i)}}function uu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ut(t,n)}else{if(ft(t,i))return;Jr.set(i),e.uniformMatrix4fv(this.addr,!1,Jr),ut(t,i)}}function du(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function hu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2iv(this.addr,n),ut(t,n)}}function pu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ft(t,n))return;e.uniform3iv(this.addr,n),ut(t,n)}}function mu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4iv(this.addr,n),ut(t,n)}}function _u(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function gu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2uiv(this.addr,n),ut(t,n)}}function vu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ft(t,n))return;e.uniform3uiv(this.addr,n),ut(t,n)}}function Su(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4uiv(this.addr,n),ut(t,n)}}function Eu(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(Ii.compareFunction=t.isReversedDepthBuffer()?Gi:Hi,r=Ii):r=eo,t.setTexture2D(n||r,s)}function xu(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(n||no,s)}function bu(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(n||io,s)}function Mu(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(n||to,s)}function Tu(e){switch(e){case 5126:return au;case 35664:return ou;case 35665:return su;case 35666:return lu;case 35674:return cu;case 35675:return fu;case 35676:return uu;case 5124:case 35670:return du;case 35667:case 35671:return hu;case 35668:case 35672:return pu;case 35669:case 35673:return mu;case 5125:return _u;case 36294:return gu;case 36295:return vu;case 36296:return Su;case 35678:case 36198:case 36298:case 36306:case 35682:return Eu;case 35679:case 36299:case 36307:return xu;case 35680:case 36300:case 36308:case 36293:return bu;case 36289:case 36303:case 36311:case 36292:return Mu}}function Au(e,n){e.uniform1fv(this.addr,n)}function wu(e,n){const t=vn(n,this.size,2);e.uniform2fv(this.addr,t)}function Ru(e,n){const t=vn(n,this.size,3);e.uniform3fv(this.addr,t)}function yu(e,n){const t=vn(n,this.size,4);e.uniform4fv(this.addr,t)}function Cu(e,n){const t=vn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Pu(e,n){const t=vn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Du(e,n){const t=vn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Lu(e,n){e.uniform1iv(this.addr,n)}function Uu(e,n){e.uniform2iv(this.addr,n)}function Iu(e,n){e.uniform3iv(this.addr,n)}function Nu(e,n){e.uniform4iv(this.addr,n)}function Ou(e,n){e.uniform1uiv(this.addr,n)}function Fu(e,n){e.uniform2uiv(this.addr,n)}function Bu(e,n){e.uniform3uiv(this.addr,n)}function ku(e,n){e.uniform4uiv(this.addr,n)}function Gu(e,n,t){const i=this.cache,s=n.length,r=li(t,s);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));let a;this.type===e.SAMPLER_2D_SHADOW?a=Ii:a=eo;for(let l=0;l!==s;++l)t.setTexture2D(n[l]||a,r[l])}function Hu(e,n,t){const i=this.cache,s=n.length,r=li(t,s);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==s;++a)t.setTexture3D(n[a]||no,r[a])}function Vu(e,n,t){const i=this.cache,s=n.length,r=li(t,s);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==s;++a)t.setTextureCube(n[a]||io,r[a])}function zu(e,n,t){const i=this.cache,s=n.length,r=li(t,s);ft(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(n[a]||to,r[a])}function Wu(e){switch(e){case 5126:return Au;case 35664:return wu;case 35665:return Ru;case 35666:return yu;case 35674:return Cu;case 35675:return Pu;case 35676:return Du;case 5124:case 35670:return Lu;case 35667:case 35671:return Uu;case 35668:case 35672:return Iu;case 35669:case 35673:return Nu;case 5125:return Ou;case 36294:return Fu;case 36295:return Bu;case 36296:return ku;case 35678:case 36198:case 36298:case 36306:case 35682:return Gu;case 35679:case 36299:case 36307:return Hu;case 35680:case 36300:case 36308:case 36293:return Vu;case 36289:case 36303:case 36311:case 36292:return zu}}class Xu{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Tu(t.type)}}class Yu{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wu(t.type)}}class Ku{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const l=s[r];l.setValue(n,t[l.id],i)}}}const Mi=/(\w+)(\])?(\[|\.)?/g;function na(e,n){e.seq.push(n),e.map[n.id]=n}function qu(e,n,t){const i=e.name,s=i.length;for(Mi.lastIndex=0;;){const r=Mi.exec(i),a=Mi.lastIndex;let l=r[1];const _=r[2]==="]",v=r[3];if(_&&(l=l|0),v===void 0||v==="["&&a+2===s){na(t,v===void 0?new Xu(l,e,n):new Yu(l,e,n));break}else{let x=t.map[l];x===void 0&&(x=new Ku(l),na(t,x)),t=x}}}class qn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=n.getActiveUniform(t,a),_=n.getUniformLocation(t,l.name);qu(l,_,this)}const s=[],r=[];for(const a of this.seq)a.type===n.SAMPLER_2D_SHADOW||a.type===n.SAMPLER_CUBE_SHADOW||a.type===n.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(n,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(n,i,s)}setOptional(n,t,i){const s=t[i];s!==void 0&&this.setValue(n,i,s)}static upload(n,t,i,s){for(let r=0,a=t.length;r!==a;++r){const l=t[r],_=i[l.id];_.needsUpdate!==!1&&l.setValue(n,_.value,s)}}static seqWithValue(n,t){const i=[];for(let s=0,r=n.length;s!==r;++s){const a=n[s];a.id in t&&i.push(a)}return i}}function ia(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Zu=37297;let ju=0;function $u(e,n){const t=e.split(`
`),i=[],s=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let a=s;a<r;a++){const l=a+1;i.push(`${l===n?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}const ra=new Ke;function Qu(e){lt._getMatrix(ra,lt.workingColorSpace,e);const n=`mat3( ${ra.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(e)){case ja:return[n,"LinearTransferOETF"];case it:return[n,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function aa(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+$u(e.getShaderSource(n),l)}else return r}function Ju(e,n){const t=Qu(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ed={[Za]:"Linear",[qa]:"Reinhard",[Ka]:"Cineon",[Ya]:"ACESFilmic",[Xa]:"AgX",[Wa]:"Neutral",[za]:"Custom"};function td(e,n){const t=ed[n];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hn=new ke;function nd(){lt.getLuminanceCoefficients(Hn);const e=Hn.x.toFixed(4),n=Hn.y.toFixed(4),t=Hn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function id(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mn).join(`
`)}function rd(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function ad(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=e.getActiveAttrib(n,s),a=r.name;let l=1;r.type===e.FLOAT_MAT2&&(l=2),r.type===e.FLOAT_MAT3&&(l=3),r.type===e.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:e.getAttribLocation(n,a),locationSize:l}}return t}function Mn(e){return e!==""}function oa(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function sa(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const od=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ni(e){return e.replace(od,ld)}const sd=new Map;function ld(e,n){let t=ze[n];if(t===void 0){const i=sd.get(n);if(i!==void 0)t=ze[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return Ni(t)}const cd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function la(e){return e.replace(cd,fd)}function fd(e,n,t,i){let s="";for(let r=parseInt(n);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ca(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}const ud={[Yn]:"SHADOWMAP_TYPE_PCF",[bn]:"SHADOWMAP_TYPE_VSM"};function dd(e){return ud[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hd={[Dn]:"ENVMAP_TYPE_CUBE",[_n]:"ENVMAP_TYPE_CUBE",[ri]:"ENVMAP_TYPE_CUBE_UV"};function pd(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":hd[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const md={[_n]:"ENVMAP_MODE_REFRACTION"};function _d(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":md[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gd={[Ws]:"ENVMAP_BLENDING_MULTIPLY",[zs]:"ENVMAP_BLENDING_MIX",[Vs]:"ENVMAP_BLENDING_ADD"};function vd(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":gd[e.combine]||"ENVMAP_BLENDING_NONE"}function Sd(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ed(e,n,t,i){const s=e.getContext(),r=t.defines;let a=t.vertexShader,l=t.fragmentShader;const _=dd(t),v=pd(t),b=_d(t),x=vd(t),p=Sd(t),f=id(t),E=rd(r),g=s.createProgram();let c,o,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Mn).join(`
`),c.length>0&&(c+=`
`),o=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Mn).join(`
`),o.length>0&&(o+=`
`)):(c=[ca(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+b:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+_:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mn).join(`
`),o=[ca(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.envMap?"#define "+b:"",t.envMap?"#define "+x:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+_:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dt?"#define TONE_MAPPING":"",t.toneMapping!==Dt?ze.tonemapping_pars_fragment:"",t.toneMapping!==Dt?td("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Ju("linearToOutputTexel",t.outputColorSpace),nd(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mn).join(`
`)),a=Ni(a),a=oa(a,t),a=sa(a,t),l=Ni(l),l=oa(l,t),l=sa(l,t),a=la(a),l=la(l),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,c=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,o=["#define varying in",t.glslVersion===zr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const T=S+c+a,R=S+o+l,P=ia(s,s.VERTEX_SHADER,T),D=ia(s,s.FRAGMENT_SHADER,R);s.attachShader(g,P),s.attachShader(g,D),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function U(B){if(e.debug.checkShaderErrors){const C=s.getProgramInfoLog(g)||"",N=s.getShaderInfoLog(P)||"",d=s.getShaderInfoLog(D)||"",F=C.trim(),W=N.trim(),O=d.trim();let oe=!0,q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(oe=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,g,P,D);else{const fe=aa(s,P,"vertex"),X=aa(s,D,"fragment");rt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+F+`
`+fe+`
`+X)}else F!==""?tt("WebGLProgram: Program Info Log:",F):(W===""||O==="")&&(q=!1);q&&(B.diagnostics={runnable:oe,programLog:F,vertexShader:{log:W,prefix:c},fragmentShader:{log:O,prefix:o}})}s.deleteShader(P),s.deleteShader(D),M=new qn(s,g),A=ad(s,g)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let A;this.getAttributes=function(){return A===void 0&&U(this),A};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=s.getProgramParameter(g,Zu)),Y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ju++,this.cacheKey=n,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=D,this}let xd=0;class bd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(n);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Md(n),t.set(n,i)),i}}class Md{constructor(n){this.id=xd++,this.code=n,this.usedTimes=0}}function Td(e,n,t,i,s,r){const a=new ks,l=new bd,_=new Set,v=[],b=new Map,x=i.logarithmicDepthBuffer;let p=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(M){return _.add(M),M===0?"uv":`uv${M}`}function g(M,A,Y,B,C){const N=B.fog,d=C.geometry,F=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,W=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,O=n.get(M.envMap||F,W),oe=O&&O.mapping===ri?O.image.height:null,q=f[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&tt("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const fe=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,X=fe!==void 0?fe.length:0;let G=0;d.morphAttributes.position!==void 0&&(G=1),d.morphAttributes.normal!==void 0&&(G=2),d.morphAttributes.color!==void 0&&(G=3);let pe,me,ue,ee;if(q){const Ze=Ct[q];pe=Ze.vertexShader,me=Ze.fragmentShader}else pe=M.vertexShader,me=M.fragmentShader,l.update(M),ue=l.getVertexShaderID(M),ee=l.getFragmentShaderID(M);const de=e.getRenderTarget(),se=e.state.buffers.depth.getReversed(),Ee=C.isInstancedMesh===!0,Ae=C.isBatchedMesh===!0,Ce=!!M.map,qe=!!M.matcap,ce=!!O,u=!!M.aoMap,j=!!M.lightMap,V=!!M.bumpMap,L=!!M.normalMap,h=!!M.displacementMap,H=!!M.emissiveMap,ne=!!M.metalnessMap,re=!!M.roughnessMap,k=M.anisotropy>0,w=M.clearcoat>0,m=M.dispersion>0,I=M.iridescence>0,Z=M.sheen>0,ie=M.transmission>0,$=k&&!!M.anisotropyMap,be=w&&!!M.clearcoatMap,ve=w&&!!M.clearcoatNormalMap,De=w&&!!M.clearcoatRoughnessMap,Be=I&&!!M.iridescenceMap,le=I&&!!M.iridescenceThicknessMap,_e=Z&&!!M.sheenColorMap,Le=Z&&!!M.sheenRoughnessMap,ye=!!M.specularMap,we=!!M.specularColorMap,Ve=!!M.specularIntensityMap,z=ie&&!!M.transmissionMap,Se=ie&&!!M.thicknessMap,ge=!!M.gradientMap,Re=!!M.alphaMap,he=M.alphaTest>0,ae=!!M.alphaHash,Ue=!!M.extensions;let Ge=Dt;M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ge=e.toneMapping);const nt={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:pe,fragmentShader:me,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ae,batchingColor:Ae&&C._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&C.instanceColor!==null,instancingMorph:Ee&&C.morphTexture!==null,outputColorSpace:de===null?e.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ii,alphaToCoverage:!!M.alphaToCoverage,map:Ce,matcap:qe,envMap:ce,envMapMode:ce&&O.mapping,envMapCubeUVHeight:oe,aoMap:u,lightMap:j,bumpMap:V,normalMap:L,displacementMap:h,emissiveMap:H,normalMapObjectSpace:L&&M.normalMapType===Ns,normalMapTangentSpace:L&&M.normalMapType===Is,metalnessMap:ne,roughnessMap:re,anisotropy:k,anisotropyMap:$,clearcoat:w,clearcoatMap:be,clearcoatNormalMap:ve,clearcoatRoughnessMap:De,dispersion:m,iridescence:I,iridescenceMap:Be,iridescenceThicknessMap:le,sheen:Z,sheenColorMap:_e,sheenRoughnessMap:Le,specularMap:ye,specularColorMap:we,specularIntensityMap:Ve,transmission:ie,transmissionMap:z,thicknessMap:Se,gradientMap:ge,opaque:M.transparent===!1&&M.blending===Kn&&M.alphaToCoverage===!1,alphaMap:Re,alphaTest:he,alphaHash:ae,combine:M.combine,mapUv:Ce&&E(M.map.channel),aoMapUv:u&&E(M.aoMap.channel),lightMapUv:j&&E(M.lightMap.channel),bumpMapUv:V&&E(M.bumpMap.channel),normalMapUv:L&&E(M.normalMap.channel),displacementMapUv:h&&E(M.displacementMap.channel),emissiveMapUv:H&&E(M.emissiveMap.channel),metalnessMapUv:ne&&E(M.metalnessMap.channel),roughnessMapUv:re&&E(M.roughnessMap.channel),anisotropyMapUv:$&&E(M.anisotropyMap.channel),clearcoatMapUv:be&&E(M.clearcoatMap.channel),clearcoatNormalMapUv:ve&&E(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&E(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&E(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&E(M.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&E(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&E(M.sheenRoughnessMap.channel),specularMapUv:ye&&E(M.specularMap.channel),specularColorMapUv:we&&E(M.specularColorMap.channel),specularIntensityMapUv:Ve&&E(M.specularIntensityMap.channel),transmissionMapUv:z&&E(M.transmissionMap.channel),thicknessMapUv:Se&&E(M.thicknessMap.channel),alphaMapUv:Re&&E(M.alphaMap.channel),vertexTangents:!!d.attributes.tangent&&(L||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!d.attributes.color&&d.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!d.attributes.uv&&(Ce||Re),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||d.attributes.normal===void 0&&L===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:se,skinning:C.isSkinnedMesh===!0,morphTargets:d.morphAttributes.position!==void 0,morphNormals:d.morphAttributes.normal!==void 0,morphColors:d.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:G,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&Y.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ce&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===it,decodeVideoTextureEmissive:H&&M.emissiveMap.isVideoTexture===!0&&lt.getTransfer(M.emissiveMap.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ot,flipSided:M.side===xt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ue&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&M.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nt.vertexUv1s=_.has(1),nt.vertexUv2s=_.has(2),nt.vertexUv3s=_.has(3),_.clear(),nt}function c(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Y in M.defines)A.push(Y),A.push(M.defines[Y]);return M.isRawShaderMaterial===!1&&(o(A,M),S(A,M),A.push(e.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function o(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function S(M,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),M.push(a.mask)}function T(M){const A=f[M.type];let Y;if(A){const B=Ct[A];Y=Us.clone(B.uniforms)}else Y=M.uniforms;return Y}function R(M,A){let Y=b.get(A);return Y!==void 0?++Y.usedTimes:(Y=new Ed(e,A,M,s),v.push(Y),b.set(A,Y)),Y}function P(M){if(--M.usedTimes===0){const A=v.indexOf(M);v[A]=v[v.length-1],v.pop(),b.delete(M.cacheKey),M.destroy()}}function D(M){l.remove(M)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:c,getUniforms:T,acquireProgram:R,releaseProgram:P,releaseShaderCache:D,programs:v,dispose:U}}function Ad(){let e=new WeakMap;function n(a){return e.has(a)}function t(a){let l=e.get(a);return l===void 0&&(l={},e.set(a,l)),l}function i(a){e.delete(a)}function s(a,l,_){e.get(a)[l]=_}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:s,dispose:r}}function wd(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function fa(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function ua(){const e=[];let n=0;const t=[],i=[],s=[];function r(){n=0,t.length=0,i.length=0,s.length=0}function a(p){let f=0;return p.isInstancedMesh&&(f+=2),p.isSkinnedMesh&&(f+=1),f}function l(p,f,E,g,c,o){let S=e[n];return S===void 0?(S={id:p.id,object:p,geometry:f,material:E,materialVariant:a(p),groupOrder:g,renderOrder:p.renderOrder,z:c,group:o},e[n]=S):(S.id=p.id,S.object=p,S.geometry=f,S.material=E,S.materialVariant=a(p),S.groupOrder=g,S.renderOrder=p.renderOrder,S.z=c,S.group=o),n++,S}function _(p,f,E,g,c,o){const S=l(p,f,E,g,c,o);E.transmission>0?i.push(S):E.transparent===!0?s.push(S):t.push(S)}function v(p,f,E,g,c,o){const S=l(p,f,E,g,c,o);E.transmission>0?i.unshift(S):E.transparent===!0?s.unshift(S):t.unshift(S)}function b(p,f){t.length>1&&t.sort(p||wd),i.length>1&&i.sort(f||fa),s.length>1&&s.sort(f||fa)}function x(){for(let p=n,f=e.length;p<f;p++){const E=e[p];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:_,unshift:v,finish:x,sort:b}}function Rd(){let e=new WeakMap;function n(i,s){const r=e.get(i);let a;return r===void 0?(a=new ua,e.set(i,[a])):s>=r.length?(a=new ua,r.push(a)):a=r[s],a}function t(){e=new WeakMap}return{get:n,dispose:t}}function yd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new ke,color:new at};break;case"SpotLight":t={position:new ke,direction:new ke,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ke,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ke,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new ke,halfWidth:new ke,halfHeight:new ke};break}return e[n.id]=t,t}}}function Cd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Pd=0;function Dd(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function Ld(e){const n=new yd,t=Cd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)i.probe.push(new ke);const s=new ke,r=new pn,a=new pn;function l(v){let b=0,x=0,p=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,E=0,g=0,c=0,o=0,S=0,T=0,R=0,P=0,D=0,U=0;v.sort(Dd);for(let A=0,Y=v.length;A<Y;A++){const B=v[A],C=B.color,N=B.intensity,d=B.distance;let F=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Pn?F=B.shadow.map.texture:F=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)b+=C.r*N,x+=C.g*N,p+=C.b*N;else if(B.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(B.sh.coefficients[W],N);U++}else if(B.isDirectionalLight){const W=n.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const O=B.shadow,oe=t.get(B);oe.shadowIntensity=O.intensity,oe.shadowBias=O.bias,oe.shadowNormalBias=O.normalBias,oe.shadowRadius=O.radius,oe.shadowMapSize=O.mapSize,i.directionalShadow[f]=oe,i.directionalShadowMap[f]=F,i.directionalShadowMatrix[f]=B.shadow.matrix,S++}i.directional[f]=W,f++}else if(B.isSpotLight){const W=n.get(B);W.position.setFromMatrixPosition(B.matrixWorld),W.color.copy(C).multiplyScalar(N),W.distance=d,W.coneCos=Math.cos(B.angle),W.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),W.decay=B.decay,i.spot[g]=W;const O=B.shadow;if(B.map&&(i.spotLightMap[P]=B.map,P++,O.updateMatrices(B),B.castShadow&&D++),i.spotLightMatrix[g]=O.matrix,B.castShadow){const oe=t.get(B);oe.shadowIntensity=O.intensity,oe.shadowBias=O.bias,oe.shadowNormalBias=O.normalBias,oe.shadowRadius=O.radius,oe.shadowMapSize=O.mapSize,i.spotShadow[g]=oe,i.spotShadowMap[g]=F,R++}g++}else if(B.isRectAreaLight){const W=n.get(B);W.color.copy(C).multiplyScalar(N),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),i.rectArea[c]=W,c++}else if(B.isPointLight){const W=n.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),W.distance=B.distance,W.decay=B.decay,B.castShadow){const O=B.shadow,oe=t.get(B);oe.shadowIntensity=O.intensity,oe.shadowBias=O.bias,oe.shadowNormalBias=O.normalBias,oe.shadowRadius=O.radius,oe.shadowMapSize=O.mapSize,oe.shadowCameraNear=O.camera.near,oe.shadowCameraFar=O.camera.far,i.pointShadow[E]=oe,i.pointShadowMap[E]=F,i.pointShadowMatrix[E]=B.shadow.matrix,T++}i.point[E]=W,E++}else if(B.isHemisphereLight){const W=n.get(B);W.skyColor.copy(B.color).multiplyScalar(N),W.groundColor.copy(B.groundColor).multiplyScalar(N),i.hemi[o]=W,o++}}c>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=b,i.ambient[1]=x,i.ambient[2]=p;const M=i.hash;(M.directionalLength!==f||M.pointLength!==E||M.spotLength!==g||M.rectAreaLength!==c||M.hemiLength!==o||M.numDirectionalShadows!==S||M.numPointShadows!==T||M.numSpotShadows!==R||M.numSpotMaps!==P||M.numLightProbes!==U)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=c,i.point.length=E,i.hemi.length=o,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=R+P-D,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=U,M.directionalLength=f,M.pointLength=E,M.spotLength=g,M.rectAreaLength=c,M.hemiLength=o,M.numDirectionalShadows=S,M.numPointShadows=T,M.numSpotShadows=R,M.numSpotMaps=P,M.numLightProbes=U,i.version=Pd++)}function _(v,b){let x=0,p=0,f=0,E=0,g=0;const c=b.matrixWorldInverse;for(let o=0,S=v.length;o<S;o++){const T=v[o];if(T.isDirectionalLight){const R=i.directional[x];R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(c),x++}else if(T.isSpotLight){const R=i.spot[f];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(c),R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(c),f++}else if(T.isRectAreaLight){const R=i.rectArea[E];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(c),a.identity(),r.copy(T.matrixWorld),r.premultiply(c),a.extractRotation(r),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),E++}else if(T.isPointLight){const R=i.point[p];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(c),p++}else if(T.isHemisphereLight){const R=i.hemi[g];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(c),g++}}}return{setup:l,setupView:_,state:i}}function da(e){const n=new Ld(e),t=[],i=[];function s(b){v.camera=b,t.length=0,i.length=0}function r(b){t.push(b)}function a(b){i.push(b)}function l(){n.setup(t)}function _(b){n.setupView(t,b)}const v={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:s,state:v,setupLights:l,setupLightsView:_,pushLight:r,pushShadow:a}}function Ud(e){let n=new WeakMap;function t(s,r=0){const a=n.get(s);let l;return a===void 0?(l=new da(e),n.set(s,[l])):r>=a.length?(l=new da(e),a.push(l)):l=a[r],l}function i(){n=new WeakMap}return{get:t,dispose:i}}const Id=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nd=`uniform sampler2D shadow_pass;
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
}`,Od=[new ke(1,0,0),new ke(-1,0,0),new ke(0,1,0),new ke(0,-1,0),new ke(0,0,1),new ke(0,0,-1)],Fd=[new ke(0,-1,0),new ke(0,-1,0),new ke(0,0,1),new ke(0,0,-1),new ke(0,-1,0),new ke(0,-1,0)],ha=new pn,xn=new ke,Ti=new ke;function Bd(e,n,t){let i=new Pa;const s=new Qe,r=new Qe,a=new vt,l=new ds,_=new hs,v={},b=t.maxTextureSize,x={[yn]:xt,[xt]:yn,[Ot]:Ot},p=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Id,fragmentShader:Nd}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const E=new gn;E.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new bt(E,p),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yn;let o=this.type;this.render=function(D,U,M){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||D.length===0)return;this.type===ps&&(tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yn);const A=e.getRenderTarget(),Y=e.getActiveCubeFace(),B=e.getActiveMipmapLevel(),C=e.state;C.setBlending(kt),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const N=o!==this.type;N&&U.traverse(function(d){d.material&&(Array.isArray(d.material)?d.material.forEach(F=>F.needsUpdate=!0):d.material.needsUpdate=!0)});for(let d=0,F=D.length;d<F;d++){const W=D[d],O=W.shadow;if(O===void 0){tt("WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const oe=O.getFrameExtents();s.multiply(oe),r.copy(O.mapSize),(s.x>b||s.y>b)&&(s.x>b&&(r.x=Math.floor(b/oe.x),s.x=r.x*oe.x,O.mapSize.x=r.x),s.y>b&&(r.y=Math.floor(b/oe.y),s.y=r.y*oe.y,O.mapSize.y=r.y));const q=e.state.buffers.depth.getReversed();if(O.camera._reversedDepth=q,O.map===null||N===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===bn){if(W.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Lt(s.x,s.y,{format:Pn,type:Yt,minFilter:Et,magFilter:Et,generateMipmaps:!1}),O.map.texture.name=W.name+".shadowMap",O.map.depthTexture=new $n(s.x,s.y,Wt),O.map.depthTexture.name=W.name+".shadowMapDepth",O.map.depthTexture.format=mn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Bt,O.map.depthTexture.magFilter=Bt}else W.isPointLight?(O.map=new Ja(s.x),O.map.depthTexture=new ms(s.x,en)):(O.map=new Lt(s.x,s.y),O.map.depthTexture=new $n(s.x,s.y,en)),O.map.depthTexture.name=W.name+".shadowMap",O.map.depthTexture.format=mn,this.type===Yn?(O.map.depthTexture.compareFunction=q?Gi:Hi,O.map.depthTexture.minFilter=Et,O.map.depthTexture.magFilter=Et):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Bt,O.map.depthTexture.magFilter=Bt);O.camera.updateProjectionMatrix()}const fe=O.map.isWebGLCubeRenderTarget?6:1;for(let X=0;X<fe;X++){if(O.map.isWebGLCubeRenderTarget)e.setRenderTarget(O.map,X),e.clear();else{X===0&&(e.setRenderTarget(O.map),e.clear());const G=O.getViewport(X);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),C.viewport(a)}if(W.isPointLight){const G=O.camera,pe=O.matrix,me=W.distance||G.far;me!==G.far&&(G.far=me,G.updateProjectionMatrix()),xn.setFromMatrixPosition(W.matrixWorld),G.position.copy(xn),Ti.copy(G.position),Ti.add(Od[X]),G.up.copy(Fd[X]),G.lookAt(Ti),G.updateMatrixWorld(),pe.makeTranslation(-xn.x,-xn.y,-xn.z),ha.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),O._frustum.setFromProjectionMatrix(ha,G.coordinateSystem,G.reversedDepth)}else O.updateMatrices(W);i=O.getFrustum(),R(U,M,O.camera,W,this.type)}O.isPointLightShadow!==!0&&this.type===bn&&S(O,M),O.needsUpdate=!1}o=this.type,c.needsUpdate=!1,e.setRenderTarget(A,Y,B)};function S(D,U){const M=n.update(g);p.defines.VSM_SAMPLES!==D.blurSamples&&(p.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Lt(s.x,s.y,{format:Pn,type:Yt})),p.uniforms.shadow_pass.value=D.map.depthTexture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,e.setRenderTarget(D.mapPass),e.clear(),e.renderBufferDirect(U,null,M,p,g,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,e.setRenderTarget(D.map),e.clear(),e.renderBufferDirect(U,null,M,f,g,null)}function T(D,U,M,A){let Y=null;const B=M.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(B!==void 0)Y=B;else if(Y=M.isPointLight===!0?_:l,e.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const C=Y.uuid,N=U.uuid;let d=v[C];d===void 0&&(d={},v[C]=d);let F=d[N];F===void 0&&(F=Y.clone(),d[N]=F,U.addEventListener("dispose",P)),Y=F}if(Y.visible=U.visible,Y.wireframe=U.wireframe,A===bn?Y.side=U.shadowSide!==null?U.shadowSide:U.side:Y.side=U.shadowSide!==null?U.shadowSide:x[U.side],Y.alphaMap=U.alphaMap,Y.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,Y.map=U.map,Y.clipShadows=U.clipShadows,Y.clippingPlanes=U.clippingPlanes,Y.clipIntersection=U.clipIntersection,Y.displacementMap=U.displacementMap,Y.displacementScale=U.displacementScale,Y.displacementBias=U.displacementBias,Y.wireframeLinewidth=U.wireframeLinewidth,Y.linewidth=U.linewidth,M.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const C=e.properties.get(Y);C.light=M}return Y}function R(D,U,M,A,Y){if(D.visible===!1)return;if(D.layers.test(U.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&Y===bn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,D.matrixWorld);const N=n.update(D),d=D.material;if(Array.isArray(d)){const F=N.groups;for(let W=0,O=F.length;W<O;W++){const oe=F[W],q=d[oe.materialIndex];if(q&&q.visible){const fe=T(D,q,A,Y);D.onBeforeShadow(e,D,U,M,N,fe,oe),e.renderBufferDirect(M,null,N,fe,D,oe),D.onAfterShadow(e,D,U,M,N,fe,oe)}}}else if(d.visible){const F=T(D,d,A,Y);D.onBeforeShadow(e,D,U,M,N,F,null),e.renderBufferDirect(M,null,N,F,D,null),D.onAfterShadow(e,D,U,M,N,F,null)}}const C=D.children;for(let N=0,d=C.length;N<d;N++)R(C[N],U,M,A,Y)}function P(D){D.target.removeEventListener("dispose",P);for(const M in v){const A=v[M],Y=D.target.uuid;Y in A&&(A[Y].dispose(),delete A[Y])}}}function kd(e,n){function t(){let z=!1;const Se=new vt;let ge=null;const Re=new vt(0,0,0,0);return{setMask:function(he){ge!==he&&!z&&(e.colorMask(he,he,he,he),ge=he)},setLocked:function(he){z=he},setClear:function(he,ae,Ue,Ge,nt){nt===!0&&(he*=Ge,ae*=Ge,Ue*=Ge),Se.set(he,ae,Ue,Ge),Re.equals(Se)===!1&&(e.clearColor(he,ae,Ue,Ge),Re.copy(Se))},reset:function(){z=!1,ge=null,Re.set(-1,0,0,0)}}}function i(){let z=!1,Se=!1,ge=null,Re=null,he=null;return{setReversed:function(ae){if(Se!==ae){const Ue=n.get("EXT_clip_control");ae?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Se=ae;const Ge=he;he=null,this.setClear(Ge)}},getReversed:function(){return Se},setTest:function(ae){ae?de(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(ae){ge!==ae&&!z&&(e.depthMask(ae),ge=ae)},setFunc:function(ae){if(Se&&(ae=Ys[ae]),Re!==ae){switch(ae){case Cs:e.depthFunc(e.NEVER);break;case ys:e.depthFunc(e.ALWAYS);break;case Rs:e.depthFunc(e.LESS);break;case ar:e.depthFunc(e.LEQUAL);break;case ws:e.depthFunc(e.EQUAL);break;case As:e.depthFunc(e.GEQUAL);break;case Ts:e.depthFunc(e.GREATER);break;case Ms:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Re=ae}},setLocked:function(ae){z=ae},setClear:function(ae){he!==ae&&(he=ae,Se&&(ae=1-ae),e.clearDepth(ae))},reset:function(){z=!1,ge=null,Re=null,he=null,Se=!1}}}function s(){let z=!1,Se=null,ge=null,Re=null,he=null,ae=null,Ue=null,Ge=null,nt=null;return{setTest:function(Ze){z||(Ze?de(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(Ze){Se!==Ze&&!z&&(e.stencilMask(Ze),Se=Ze)},setFunc:function(Ze,It,Nt){(ge!==Ze||Re!==It||he!==Nt)&&(e.stencilFunc(Ze,It,Nt),ge=Ze,Re=It,he=Nt)},setOp:function(Ze,It,Nt){(ae!==Ze||Ue!==It||Ge!==Nt)&&(e.stencilOp(Ze,It,Nt),ae=Ze,Ue=It,Ge=Nt)},setLocked:function(Ze){z=Ze},setClear:function(Ze){nt!==Ze&&(e.clearStencil(Ze),nt=Ze)},reset:function(){z=!1,Se=null,ge=null,Re=null,he=null,ae=null,Ue=null,Ge=null,nt=null}}}const r=new t,a=new i,l=new s,_=new WeakMap,v=new WeakMap;let b={},x={},p=new WeakMap,f=[],E=null,g=!1,c=null,o=null,S=null,T=null,R=null,P=null,D=null,U=new at(0,0,0),M=0,A=!1,Y=null,B=null,C=null,N=null,d=null;const F=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,O=0;const oe=e.getParameter(e.VERSION);oe.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(oe)[1]),W=O>=1):oe.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),W=O>=2);let q=null,fe={};const X=e.getParameter(e.SCISSOR_BOX),G=e.getParameter(e.VIEWPORT),pe=new vt().fromArray(X),me=new vt().fromArray(G);function ue(z,Se,ge,Re){const he=new Uint8Array(4),ae=e.createTexture();e.bindTexture(z,ae),e.texParameteri(z,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(z,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ue=0;Ue<ge;Ue++)z===e.TEXTURE_3D||z===e.TEXTURE_2D_ARRAY?e.texImage3D(Se,0,e.RGBA,1,1,Re,0,e.RGBA,e.UNSIGNED_BYTE,he):e.texImage2D(Se+Ue,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,he);return ae}const ee={};ee[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),ee[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ee[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),de(e.DEPTH_TEST),a.setFunc(ar),V(!1),L(Br),de(e.CULL_FACE),u(kt);function de(z){b[z]!==!0&&(e.enable(z),b[z]=!0)}function se(z){b[z]!==!1&&(e.disable(z),b[z]=!1)}function Ee(z,Se){return x[z]!==Se?(e.bindFramebuffer(z,Se),x[z]=Se,z===e.DRAW_FRAMEBUFFER&&(x[e.FRAMEBUFFER]=Se),z===e.FRAMEBUFFER&&(x[e.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ae(z,Se){let ge=f,Re=!1;if(z){ge=p.get(Se),ge===void 0&&(ge=[],p.set(Se,ge));const he=z.textures;if(ge.length!==he.length||ge[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,Ue=he.length;ae<Ue;ae++)ge[ae]=e.COLOR_ATTACHMENT0+ae;ge.length=he.length,Re=!0}}else ge[0]!==e.BACK&&(ge[0]=e.BACK,Re=!0);Re&&e.drawBuffers(ge)}function Ce(z){return E!==z?(e.useProgram(z),E=z,!0):!1}const qe={[Sn]:e.FUNC_ADD,[Ho]:e.FUNC_SUBTRACT,[Go]:e.FUNC_REVERSE_SUBTRACT};qe[Ks]=e.MIN,qe[qs]=e.MAX;const ce={[ns]:e.ZERO,[ts]:e.ONE,[es]:e.SRC_COLOR,[Jo]:e.SRC_ALPHA,[Qo]:e.SRC_ALPHA_SATURATE,[$o]:e.DST_COLOR,[jo]:e.DST_ALPHA,[Zo]:e.ONE_MINUS_SRC_COLOR,[qo]:e.ONE_MINUS_SRC_ALPHA,[Ko]:e.ONE_MINUS_DST_COLOR,[Yo]:e.ONE_MINUS_DST_ALPHA,[Xo]:e.CONSTANT_COLOR,[Wo]:e.ONE_MINUS_CONSTANT_COLOR,[zo]:e.CONSTANT_ALPHA,[Vo]:e.ONE_MINUS_CONSTANT_ALPHA};function u(z,Se,ge,Re,he,ae,Ue,Ge,nt,Ze){if(z===kt){g===!0&&(se(e.BLEND),g=!1);return}if(g===!1&&(de(e.BLEND),g=!0),z!==Ls){if(z!==c||Ze!==A){if((o!==Sn||R!==Sn)&&(e.blendEquation(e.FUNC_ADD),o=Sn,R=Sn),Ze)switch(z){case Kn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Hr:e.blendFunc(e.ONE,e.ONE);break;case Gr:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case kr:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:rt("WebGLState: Invalid blending: ",z);break}else switch(z){case Kn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Hr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Gr:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kr:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",z);break}S=null,T=null,P=null,D=null,U.set(0,0,0),M=0,c=z,A=Ze}return}he=he||Se,ae=ae||ge,Ue=Ue||Re,(Se!==o||he!==R)&&(e.blendEquationSeparate(qe[Se],qe[he]),o=Se,R=he),(ge!==S||Re!==T||ae!==P||Ue!==D)&&(e.blendFuncSeparate(ce[ge],ce[Re],ce[ae],ce[Ue]),S=ge,T=Re,P=ae,D=Ue),(Ge.equals(U)===!1||nt!==M)&&(e.blendColor(Ge.r,Ge.g,Ge.b,nt),U.copy(Ge),M=nt),c=z,A=!1}function j(z,Se){z.side===Ot?se(e.CULL_FACE):de(e.CULL_FACE);let ge=z.side===xt;Se&&(ge=!ge),V(ge),z.blending===Kn&&z.transparent===!1?u(kt):u(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const Re=z.stencilWrite;l.setTest(Re),Re&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),H(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function V(z){Y!==z&&(z?e.frontFace(e.CW):e.frontFace(e.CCW),Y=z)}function L(z){z!==Ps?(de(e.CULL_FACE),z!==B&&(z===Br?e.cullFace(e.BACK):z===Ds?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):se(e.CULL_FACE),B=z}function h(z){z!==C&&(W&&e.lineWidth(z),C=z)}function H(z,Se,ge){z?(de(e.POLYGON_OFFSET_FILL),(N!==Se||d!==ge)&&(N=Se,d=ge,a.getReversed()&&(Se=-Se),e.polygonOffset(Se,ge))):se(e.POLYGON_OFFSET_FILL)}function ne(z){z?de(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function re(z){z===void 0&&(z=e.TEXTURE0+F-1),q!==z&&(e.activeTexture(z),q=z)}function k(z,Se,ge){ge===void 0&&(q===null?ge=e.TEXTURE0+F-1:ge=q);let Re=fe[ge];Re===void 0&&(Re={type:void 0,texture:void 0},fe[ge]=Re),(Re.type!==z||Re.texture!==Se)&&(q!==ge&&(e.activeTexture(ge),q=ge),e.bindTexture(z,Se||ee[z]),Re.type=z,Re.texture=Se)}function w(){const z=fe[q];z!==void 0&&z.type!==void 0&&(e.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function m(){try{e.compressedTexImage2D(...arguments)}catch(z){rt("WebGLState:",z)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(z){rt("WebGLState:",z)}}function Z(){try{e.texSubImage2D(...arguments)}catch(z){rt("WebGLState:",z)}}function ie(){try{e.texSubImage3D(...arguments)}catch(z){rt("WebGLState:",z)}}function $(){try{e.compressedTexSubImage2D(...arguments)}catch(z){rt("WebGLState:",z)}}function be(){try{e.compressedTexSubImage3D(...arguments)}catch(z){rt("WebGLState:",z)}}function ve(){try{e.texStorage2D(...arguments)}catch(z){rt("WebGLState:",z)}}function De(){try{e.texStorage3D(...arguments)}catch(z){rt("WebGLState:",z)}}function Be(){try{e.texImage2D(...arguments)}catch(z){rt("WebGLState:",z)}}function le(){try{e.texImage3D(...arguments)}catch(z){rt("WebGLState:",z)}}function _e(z){pe.equals(z)===!1&&(e.scissor(z.x,z.y,z.z,z.w),pe.copy(z))}function Le(z){me.equals(z)===!1&&(e.viewport(z.x,z.y,z.z,z.w),me.copy(z))}function ye(z,Se){let ge=v.get(Se);ge===void 0&&(ge=new WeakMap,v.set(Se,ge));let Re=ge.get(z);Re===void 0&&(Re=e.getUniformBlockIndex(Se,z.name),ge.set(z,Re))}function we(z,Se){const Re=v.get(Se).get(z);_.get(Se)!==Re&&(e.uniformBlockBinding(Se,Re,z.__bindingPointIndex),_.set(Se,Re))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),b={},q=null,fe={},x={},p=new WeakMap,f=[],E=null,g=!1,c=null,o=null,S=null,T=null,R=null,P=null,D=null,U=new at(0,0,0),M=0,A=!1,Y=null,B=null,C=null,N=null,d=null,pe.set(0,0,e.canvas.width,e.canvas.height),me.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:de,disable:se,bindFramebuffer:Ee,drawBuffers:Ae,useProgram:Ce,setBlending:u,setMaterial:j,setFlipSided:V,setCullFace:L,setLineWidth:h,setPolygonOffset:H,setScissorTest:ne,activeTexture:re,bindTexture:k,unbindTexture:w,compressedTexImage2D:m,compressedTexImage3D:I,texImage2D:Be,texImage3D:le,updateUBOMapping:ye,uniformBlockBinding:we,texStorage2D:ve,texStorage3D:De,texSubImage2D:Z,texSubImage3D:ie,compressedTexSubImage2D:$,compressedTexSubImage3D:be,scissor:_e,viewport:Le,reset:Ve}}function Gd(e,n,t,i,s,r,a){const l=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new Qe,b=new WeakMap;let x;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,m){return f?new OffscreenCanvas(w,m):Hs("canvas")}function g(w,m,I){let Z=1;const ie=k(w);if((ie.width>I||ie.height>I)&&(Z=I/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(Z*ie.width),be=Math.floor(Z*ie.height);x===void 0&&(x=E($,be));const ve=m?E($,be):x;return ve.width=$,ve.height=be,ve.getContext("2d").drawImage(w,0,0,$,be),tt("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+$+"x"+be+")."),ve}else return"data"in w&&tt("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),w;return w}function c(w){return w.generateMipmaps}function o(w){e.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function T(w,m,I,Z,ie=!1){if(w!==null){if(e[w]!==void 0)return e[w];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=m;if(m===e.RED&&(I===e.FLOAT&&($=e.R32F),I===e.HALF_FLOAT&&($=e.R16F),I===e.UNSIGNED_BYTE&&($=e.R8)),m===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&($=e.R8UI),I===e.UNSIGNED_SHORT&&($=e.R16UI),I===e.UNSIGNED_INT&&($=e.R32UI),I===e.BYTE&&($=e.R8I),I===e.SHORT&&($=e.R16I),I===e.INT&&($=e.R32I)),m===e.RG&&(I===e.FLOAT&&($=e.RG32F),I===e.HALF_FLOAT&&($=e.RG16F),I===e.UNSIGNED_BYTE&&($=e.RG8)),m===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&($=e.RG8UI),I===e.UNSIGNED_SHORT&&($=e.RG16UI),I===e.UNSIGNED_INT&&($=e.RG32UI),I===e.BYTE&&($=e.RG8I),I===e.SHORT&&($=e.RG16I),I===e.INT&&($=e.RG32I)),m===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&($=e.RGB8UI),I===e.UNSIGNED_SHORT&&($=e.RGB16UI),I===e.UNSIGNED_INT&&($=e.RGB32UI),I===e.BYTE&&($=e.RGB8I),I===e.SHORT&&($=e.RGB16I),I===e.INT&&($=e.RGB32I)),m===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&($=e.RGBA8UI),I===e.UNSIGNED_SHORT&&($=e.RGBA16UI),I===e.UNSIGNED_INT&&($=e.RGBA32UI),I===e.BYTE&&($=e.RGBA8I),I===e.SHORT&&($=e.RGBA16I),I===e.INT&&($=e.RGBA32I)),m===e.RGB&&(I===e.UNSIGNED_INT_5_9_9_9_REV&&($=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&($=e.R11F_G11F_B10F)),m===e.RGBA){const be=ie?ja:lt.getTransfer(Z);I===e.FLOAT&&($=e.RGBA32F),I===e.HALF_FLOAT&&($=e.RGBA16F),I===e.UNSIGNED_BYTE&&($=be===it?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&($=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&($=e.RGB5_A1)}return($===e.R16F||$===e.R32F||$===e.RG16F||$===e.RG32F||$===e.RGBA16F||$===e.RGBA32F)&&n.get("EXT_color_buffer_float"),$}function R(w,m){let I;return w?m===null||m===en||m===Cn?I=e.DEPTH24_STENCIL8:m===Wt?I=e.DEPTH32F_STENCIL8:m===Qn&&(I=e.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===en||m===Cn?I=e.DEPTH_COMPONENT24:m===Wt?I=e.DEPTH_COMPONENT32F:m===Qn&&(I=e.DEPTH_COMPONENT16),I}function P(w,m){return c(w)===!0||w.isFramebufferTexture&&w.minFilter!==Bt&&w.minFilter!==Et?Math.log2(Math.max(m.width,m.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?m.mipmaps.length:1}function D(w){const m=w.target;m.removeEventListener("dispose",D),M(m),m.isVideoTexture&&b.delete(m)}function U(w){const m=w.target;m.removeEventListener("dispose",U),Y(m)}function M(w){const m=i.get(w);if(m.__webglInit===void 0)return;const I=w.source,Z=p.get(I);if(Z){const ie=Z[m.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&A(w),Object.keys(Z).length===0&&p.delete(I)}i.remove(w)}function A(w){const m=i.get(w);e.deleteTexture(m.__webglTexture);const I=w.source,Z=p.get(I);delete Z[m.__cacheKey],a.memory.textures--}function Y(w){const m=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(m.__webglFramebuffer[Z]))for(let ie=0;ie<m.__webglFramebuffer[Z].length;ie++)e.deleteFramebuffer(m.__webglFramebuffer[Z][ie]);else e.deleteFramebuffer(m.__webglFramebuffer[Z]);m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer[Z])}else{if(Array.isArray(m.__webglFramebuffer))for(let Z=0;Z<m.__webglFramebuffer.length;Z++)e.deleteFramebuffer(m.__webglFramebuffer[Z]);else e.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&e.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let Z=0;Z<m.__webglColorRenderbuffer.length;Z++)m.__webglColorRenderbuffer[Z]&&e.deleteRenderbuffer(m.__webglColorRenderbuffer[Z]);m.__webglDepthRenderbuffer&&e.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const I=w.textures;for(let Z=0,ie=I.length;Z<ie;Z++){const $=i.get(I[Z]);$.__webglTexture&&(e.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(I[Z])}i.remove(w)}let B=0;function C(){B=0}function N(){const w=B;return w>=s.maxTextures&&tt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),B+=1,w}function d(w){const m=[];return m.push(w.wrapS),m.push(w.wrapT),m.push(w.wrapR||0),m.push(w.magFilter),m.push(w.minFilter),m.push(w.anisotropy),m.push(w.internalFormat),m.push(w.format),m.push(w.type),m.push(w.generateMipmaps),m.push(w.premultiplyAlpha),m.push(w.flipY),m.push(w.unpackAlignment),m.push(w.colorSpace),m.join()}function F(w,m){const I=i.get(w);if(w.isVideoTexture&&ne(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&I.__version!==w.version){const Z=w.image;if(Z===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(I,w,m);return}}else w.isExternalTexture&&(I.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+m)}function W(w,m){const I=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){ee(I,w,m);return}else w.isExternalTexture&&(I.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+m)}function O(w,m){const I=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){ee(I,w,m);return}t.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+m)}function oe(w,m){const I=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&I.__version!==w.version){de(I,w,m);return}t.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+m)}const q={[rs]:e.REPEAT,[Pi]:e.CLAMP_TO_EDGE,[is]:e.MIRRORED_REPEAT},fe={[Bt]:e.NEAREST,[as]:e.NEAREST_MIPMAP_NEAREST,[kn]:e.NEAREST_MIPMAP_LINEAR,[Et]:e.LINEAR,[di]:e.LINEAR_MIPMAP_NEAREST,[ln]:e.LINEAR_MIPMAP_LINEAR},X={[us]:e.NEVER,[fs]:e.ALWAYS,[cs]:e.LESS,[Hi]:e.LEQUAL,[ls]:e.EQUAL,[Gi]:e.GEQUAL,[ss]:e.GREATER,[os]:e.NOTEQUAL};function G(w,m){if(m.type===Wt&&n.has("OES_texture_float_linear")===!1&&(m.magFilter===Et||m.magFilter===di||m.magFilter===kn||m.magFilter===ln||m.minFilter===Et||m.minFilter===di||m.minFilter===kn||m.minFilter===ln)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,q[m.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,q[m.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,q[m.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,fe[m.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,fe[m.minFilter]),m.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,X[m.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Bt||m.minFilter!==kn&&m.minFilter!==ln||m.type===Wt&&n.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const I=n.get("EXT_texture_filter_anisotropic");e.texParameterf(w,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function pe(w,m){let I=!1;w.__webglInit===void 0&&(w.__webglInit=!0,m.addEventListener("dispose",D));const Z=m.source;let ie=p.get(Z);ie===void 0&&(ie={},p.set(Z,ie));const $=d(m);if($!==w.__cacheKey){ie[$]===void 0&&(ie[$]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,I=!0),ie[$].usedTimes++;const be=ie[w.__cacheKey];be!==void 0&&(ie[w.__cacheKey].usedTimes--,be.usedTimes===0&&A(m)),w.__cacheKey=$,w.__webglTexture=ie[$].texture}return I}function me(w,m,I){return Math.floor(Math.floor(w/I)/m)}function ue(w,m,I,Z){const $=w.updateRanges;if($.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,m.width,m.height,I,Z,m.data);else{$.sort((le,_e)=>le.start-_e.start);let be=0;for(let le=1;le<$.length;le++){const _e=$[be],Le=$[le],ye=_e.start+_e.count,we=me(Le.start,m.width,4),Ve=me(_e.start,m.width,4);Le.start<=ye+1&&we===Ve&&me(Le.start+Le.count-1,m.width,4)===we?_e.count=Math.max(_e.count,Le.start+Le.count-_e.start):(++be,$[be]=Le)}$.length=be+1;const ve=e.getParameter(e.UNPACK_ROW_LENGTH),De=e.getParameter(e.UNPACK_SKIP_PIXELS),Be=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,m.width);for(let le=0,_e=$.length;le<_e;le++){const Le=$[le],ye=Math.floor(Le.start/4),we=Math.ceil(Le.count/4),Ve=ye%m.width,z=Math.floor(ye/m.width),Se=we,ge=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ve),e.pixelStorei(e.UNPACK_SKIP_ROWS,z),t.texSubImage2D(e.TEXTURE_2D,0,Ve,z,Se,ge,I,Z,m.data)}w.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ve),e.pixelStorei(e.UNPACK_SKIP_PIXELS,De),e.pixelStorei(e.UNPACK_SKIP_ROWS,Be)}}function ee(w,m,I){let Z=e.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(Z=e.TEXTURE_2D_ARRAY),m.isData3DTexture&&(Z=e.TEXTURE_3D);const ie=pe(w,m),$=m.source;t.bindTexture(Z,w.__webglTexture,e.TEXTURE0+I);const be=i.get($);if($.version!==be.__version||ie===!0){t.activeTexture(e.TEXTURE0+I);const ve=lt.getPrimaries(lt.workingColorSpace),De=m.colorSpace===on?null:lt.getPrimaries(m.colorSpace),Be=m.colorSpace===on||ve===De?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let le=g(m.image,!1,s.maxTextureSize);le=re(m,le);const _e=r.convert(m.format,m.colorSpace),Le=r.convert(m.type);let ye=T(m.internalFormat,_e,Le,m.colorSpace,m.isVideoTexture);G(Z,m);let we;const Ve=m.mipmaps,z=m.isVideoTexture!==!0,Se=be.__version===void 0||ie===!0,ge=$.dataReady,Re=P(m,le);if(m.isDepthTexture)ye=R(m.format===cn,m.type),Se&&(z?t.texStorage2D(e.TEXTURE_2D,1,ye,le.width,le.height):t.texImage2D(e.TEXTURE_2D,0,ye,le.width,le.height,0,_e,Le,null));else if(m.isDataTexture)if(Ve.length>0){z&&Se&&t.texStorage2D(e.TEXTURE_2D,Re,ye,Ve[0].width,Ve[0].height);for(let he=0,ae=Ve.length;he<ae;he++)we=Ve[he],z?ge&&t.texSubImage2D(e.TEXTURE_2D,he,0,0,we.width,we.height,_e,Le,we.data):t.texImage2D(e.TEXTURE_2D,he,ye,we.width,we.height,0,_e,Le,we.data);m.generateMipmaps=!1}else z?(Se&&t.texStorage2D(e.TEXTURE_2D,Re,ye,le.width,le.height),ge&&ue(m,le,_e,Le)):t.texImage2D(e.TEXTURE_2D,0,ye,le.width,le.height,0,_e,Le,le.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){z&&Se&&t.texStorage3D(e.TEXTURE_2D_ARRAY,Re,ye,Ve[0].width,Ve[0].height,le.depth);for(let he=0,ae=Ve.length;he<ae;he++)if(we=Ve[he],m.format!==Ft)if(_e!==null)if(z){if(ge)if(m.layerUpdates.size>0){const Ue=Vr(we.width,we.height,m.format,m.type);for(const Ge of m.layerUpdates){const nt=we.data.subarray(Ge*Ue/we.data.BYTES_PER_ELEMENT,(Ge+1)*Ue/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,he,0,0,Ge,we.width,we.height,1,_e,nt)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,le.depth,_e,we.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,he,ye,we.width,we.height,le.depth,0,we.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ge&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,le.depth,_e,Le,we.data):t.texImage3D(e.TEXTURE_2D_ARRAY,he,ye,we.width,we.height,le.depth,0,_e,Le,we.data)}else{z&&Se&&t.texStorage2D(e.TEXTURE_2D,Re,ye,Ve[0].width,Ve[0].height);for(let he=0,ae=Ve.length;he<ae;he++)we=Ve[he],m.format!==Ft?_e!==null?z?ge&&t.compressedTexSubImage2D(e.TEXTURE_2D,he,0,0,we.width,we.height,_e,we.data):t.compressedTexImage2D(e.TEXTURE_2D,he,ye,we.width,we.height,0,we.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ge&&t.texSubImage2D(e.TEXTURE_2D,he,0,0,we.width,we.height,_e,Le,we.data):t.texImage2D(e.TEXTURE_2D,he,ye,we.width,we.height,0,_e,Le,we.data)}else if(m.isDataArrayTexture)if(z){if(Se&&t.texStorage3D(e.TEXTURE_2D_ARRAY,Re,ye,le.width,le.height,le.depth),ge)if(m.layerUpdates.size>0){const he=Vr(le.width,le.height,m.format,m.type);for(const ae of m.layerUpdates){const Ue=le.data.subarray(ae*he/le.data.BYTES_PER_ELEMENT,(ae+1)*he/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ae,le.width,le.height,1,_e,Le,Ue)}m.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,_e,Le,le.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,ye,le.width,le.height,le.depth,0,_e,Le,le.data);else if(m.isData3DTexture)z?(Se&&t.texStorage3D(e.TEXTURE_3D,Re,ye,le.width,le.height,le.depth),ge&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,_e,Le,le.data)):t.texImage3D(e.TEXTURE_3D,0,ye,le.width,le.height,le.depth,0,_e,Le,le.data);else if(m.isFramebufferTexture){if(Se)if(z)t.texStorage2D(e.TEXTURE_2D,Re,ye,le.width,le.height);else{let he=le.width,ae=le.height;for(let Ue=0;Ue<Re;Ue++)t.texImage2D(e.TEXTURE_2D,Ue,ye,he,ae,0,_e,Le,null),he>>=1,ae>>=1}}else if(Ve.length>0){if(z&&Se){const he=k(Ve[0]);t.texStorage2D(e.TEXTURE_2D,Re,ye,he.width,he.height)}for(let he=0,ae=Ve.length;he<ae;he++)we=Ve[he],z?ge&&t.texSubImage2D(e.TEXTURE_2D,he,0,0,_e,Le,we):t.texImage2D(e.TEXTURE_2D,he,ye,_e,Le,we);m.generateMipmaps=!1}else if(z){if(Se){const he=k(le);t.texStorage2D(e.TEXTURE_2D,Re,ye,he.width,he.height)}ge&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,_e,Le,le)}else t.texImage2D(e.TEXTURE_2D,0,ye,_e,Le,le);c(m)&&o(Z),be.__version=$.version,m.onUpdate&&m.onUpdate(m)}w.__version=m.version}function de(w,m,I){if(m.image.length!==6)return;const Z=pe(w,m),ie=m.source;t.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+I);const $=i.get(ie);if(ie.version!==$.__version||Z===!0){t.activeTexture(e.TEXTURE0+I);const be=lt.getPrimaries(lt.workingColorSpace),ve=m.colorSpace===on?null:lt.getPrimaries(m.colorSpace),De=m.colorSpace===on||be===ve?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Be=m.isCompressedTexture||m.image[0].isCompressedTexture,le=m.image[0]&&m.image[0].isDataTexture,_e=[];for(let ae=0;ae<6;ae++)!Be&&!le?_e[ae]=g(m.image[ae],!0,s.maxCubemapSize):_e[ae]=le?m.image[ae].image:m.image[ae],_e[ae]=re(m,_e[ae]);const Le=_e[0],ye=r.convert(m.format,m.colorSpace),we=r.convert(m.type),Ve=T(m.internalFormat,ye,we,m.colorSpace),z=m.isVideoTexture!==!0,Se=$.__version===void 0||Z===!0,ge=ie.dataReady;let Re=P(m,Le);G(e.TEXTURE_CUBE_MAP,m);let he;if(Be){z&&Se&&t.texStorage2D(e.TEXTURE_CUBE_MAP,Re,Ve,Le.width,Le.height);for(let ae=0;ae<6;ae++){he=_e[ae].mipmaps;for(let Ue=0;Ue<he.length;Ue++){const Ge=he[Ue];m.format!==Ft?ye!==null?z?ge&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,0,0,Ge.width,Ge.height,ye,Ge.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,Ve,Ge.width,Ge.height,0,Ge.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ge&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,0,0,Ge.width,Ge.height,ye,we,Ge.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,Ve,Ge.width,Ge.height,0,ye,we,Ge.data)}}}else{if(he=m.mipmaps,z&&Se){he.length>0&&Re++;const ae=k(_e[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,Re,Ve,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(le){z?ge&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,_e[ae].width,_e[ae].height,ye,we,_e[ae].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ve,_e[ae].width,_e[ae].height,0,ye,we,_e[ae].data);for(let Ue=0;Ue<he.length;Ue++){const nt=he[Ue].image[ae].image;z?ge&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,0,0,nt.width,nt.height,ye,we,nt.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,Ve,nt.width,nt.height,0,ye,we,nt.data)}}else{z?ge&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ye,we,_e[ae]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ve,ye,we,_e[ae]);for(let Ue=0;Ue<he.length;Ue++){const Ge=he[Ue];z?ge&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,0,0,ye,we,Ge.image[ae]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,Ve,ye,we,Ge.image[ae])}}}c(m)&&o(e.TEXTURE_CUBE_MAP),$.__version=ie.version,m.onUpdate&&m.onUpdate(m)}w.__version=m.version}function se(w,m,I,Z,ie,$){const be=r.convert(I.format,I.colorSpace),ve=r.convert(I.type),De=T(I.internalFormat,be,ve,I.colorSpace),Be=i.get(m),le=i.get(I);if(le.__renderTarget=m,!Be.__hasExternalTextures){const _e=Math.max(1,m.width>>$),Le=Math.max(1,m.height>>$);ie===e.TEXTURE_3D||ie===e.TEXTURE_2D_ARRAY?t.texImage3D(ie,$,De,_e,Le,m.depth,0,be,ve,null):t.texImage2D(ie,$,De,_e,Le,0,be,ve,null)}t.bindFramebuffer(e.FRAMEBUFFER,w),H(m)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,ie,le.__webglTexture,0,h(m)):(ie===e.TEXTURE_2D||ie>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Z,ie,le.__webglTexture,$),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(w,m,I){if(e.bindRenderbuffer(e.RENDERBUFFER,w),m.depthBuffer){const Z=m.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,$=R(m.stencilBuffer,ie),be=m.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;H(m)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,h(m),$,m.width,m.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,h(m),$,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,$,m.width,m.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,be,e.RENDERBUFFER,w)}else{const Z=m.textures;for(let ie=0;ie<Z.length;ie++){const $=Z[ie],be=r.convert($.format,$.colorSpace),ve=r.convert($.type),De=T($.internalFormat,be,ve,$.colorSpace);H(m)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,h(m),De,m.width,m.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,h(m),De,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,De,m.width,m.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ae(w,m,I){const Z=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,w),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(m.depthTexture);if(ie.__renderTarget=m,(!ie.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),Z){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,m.depthTexture.addEventListener("dispose",D)),ie.__webglTexture===void 0){ie.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,ie.__webglTexture),G(e.TEXTURE_CUBE_MAP,m.depthTexture);const Be=r.convert(m.depthTexture.format),le=r.convert(m.depthTexture.type);let _e;m.depthTexture.format===mn?_e=e.DEPTH_COMPONENT24:m.depthTexture.format===cn&&(_e=e.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,_e,m.width,m.height,0,Be,le,null)}}else F(m.depthTexture,0);const $=ie.__webglTexture,be=h(m),ve=Z?e.TEXTURE_CUBE_MAP_POSITIVE_X+I:e.TEXTURE_2D,De=m.depthTexture.format===cn?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(m.depthTexture.format===mn)H(m)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,De,ve,$,0,be):e.framebufferTexture2D(e.FRAMEBUFFER,De,ve,$,0);else if(m.depthTexture.format===cn)H(m)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,De,ve,$,0,be):e.framebufferTexture2D(e.FRAMEBUFFER,De,ve,$,0);else throw new Error("Unknown depthTexture format")}function Ce(w){const m=i.get(w),I=w.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),Z){const ie=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),m.__depthDisposeCallback=ie}m.__boundDepthTexture=Z}if(w.depthTexture&&!m.__autoAllocateDepthBuffer)if(I)for(let Z=0;Z<6;Z++)Ae(m.__webglFramebuffer[Z],w,Z);else{const Z=w.texture.mipmaps;Z&&Z.length>0?Ae(m.__webglFramebuffer[0],w,0):Ae(m.__webglFramebuffer,w,0)}else if(I){m.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[Z]),m.__webglDepthbuffer[Z]===void 0)m.__webglDepthbuffer[Z]=e.createRenderbuffer(),Ee(m.__webglDepthbuffer[Z],w,!1);else{const ie=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=m.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,$),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,$)}}else{const Z=w.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=e.createRenderbuffer(),Ee(m.__webglDepthbuffer,w,!1);else{const ie=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=m.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,$),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,$)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function qe(w,m,I){const Z=i.get(w);m!==void 0&&se(Z.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&Ce(w)}function ce(w){const m=w.texture,I=i.get(w),Z=i.get(m);w.addEventListener("dispose",U);const ie=w.textures,$=w.isWebGLCubeRenderTarget===!0,be=ie.length>1;if(be||(Z.__webglTexture===void 0&&(Z.__webglTexture=e.createTexture()),Z.__version=m.version,a.memory.textures++),$){I.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(m.mipmaps&&m.mipmaps.length>0){I.__webglFramebuffer[ve]=[];for(let De=0;De<m.mipmaps.length;De++)I.__webglFramebuffer[ve][De]=e.createFramebuffer()}else I.__webglFramebuffer[ve]=e.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){I.__webglFramebuffer=[];for(let ve=0;ve<m.mipmaps.length;ve++)I.__webglFramebuffer[ve]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(be)for(let ve=0,De=ie.length;ve<De;ve++){const Be=i.get(ie[ve]);Be.__webglTexture===void 0&&(Be.__webglTexture=e.createTexture(),a.memory.textures++)}if(w.samples>0&&H(w)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ve=0;ve<ie.length;ve++){const De=ie[ve];I.__webglColorRenderbuffer[ve]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[ve]);const Be=r.convert(De.format,De.colorSpace),le=r.convert(De.type),_e=T(De.internalFormat,Be,le,De.colorSpace,w.isXRRenderTarget===!0),Le=h(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,Le,_e,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,I.__webglColorRenderbuffer[ve])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),Ee(I.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if($){t.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),G(e.TEXTURE_CUBE_MAP,m);for(let ve=0;ve<6;ve++)if(m.mipmaps&&m.mipmaps.length>0)for(let De=0;De<m.mipmaps.length;De++)se(I.__webglFramebuffer[ve][De],w,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De);else se(I.__webglFramebuffer[ve],w,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);c(m)&&o(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ve=0,De=ie.length;ve<De;ve++){const Be=ie[ve],le=i.get(Be);let _e=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(_e=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(_e,le.__webglTexture),G(_e,Be),se(I.__webglFramebuffer,w,Be,e.COLOR_ATTACHMENT0+ve,_e,0),c(Be)&&o(_e)}t.unbindTexture()}else{let ve=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ve=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ve,Z.__webglTexture),G(ve,m),m.mipmaps&&m.mipmaps.length>0)for(let De=0;De<m.mipmaps.length;De++)se(I.__webglFramebuffer[De],w,m,e.COLOR_ATTACHMENT0,ve,De);else se(I.__webglFramebuffer,w,m,e.COLOR_ATTACHMENT0,ve,0);c(m)&&o(ve),t.unbindTexture()}w.depthBuffer&&Ce(w)}function u(w){const m=w.textures;for(let I=0,Z=m.length;I<Z;I++){const ie=m[I];if(c(ie)){const $=S(w),be=i.get(ie).__webglTexture;t.bindTexture($,be),o($),t.unbindTexture()}}}const j=[],V=[];function L(w){if(w.samples>0){if(H(w)===!1){const m=w.textures,I=w.width,Z=w.height;let ie=e.COLOR_BUFFER_BIT;const $=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,be=i.get(w),ve=m.length>1;if(ve)for(let Be=0;Be<m.length;Be++)t.bindFramebuffer(e.FRAMEBUFFER,be.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Be,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,be.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Be,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const De=w.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Be=0;Be<m.length;Be++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ie|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ie|=e.STENCIL_BUFFER_BIT)),ve){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,be.__webglColorRenderbuffer[Be]);const le=i.get(m[Be]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,le,0)}e.blitFramebuffer(0,0,I,Z,0,0,I,Z,ie,e.NEAREST),_===!0&&(j.length=0,V.length=0,j.push(e.COLOR_ATTACHMENT0+Be),w.depthBuffer&&w.resolveDepthBuffer===!1&&(j.push($),V.push($),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,V)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ve)for(let Be=0;Be<m.length;Be++){t.bindFramebuffer(e.FRAMEBUFFER,be.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Be,e.RENDERBUFFER,be.__webglColorRenderbuffer[Be]);const le=i.get(m[Be]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,be.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Be,e.TEXTURE_2D,le,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&_){const m=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[m])}}}function h(w){return Math.min(s.maxSamples,w.samples)}function H(w){const m=i.get(w);return w.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function ne(w){const m=a.render.frame;b.get(w)!==m&&(b.set(w,m),w.update())}function re(w,m){const I=w.colorSpace,Z=w.format,ie=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||I!==ii&&I!==on&&(lt.getTransfer(I)===it?(Z!==Ft||ie!==Pt)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",I)),m}function k(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(v.width=w.naturalWidth||w.width,v.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(v.width=w.displayWidth,v.height=w.displayHeight):(v.width=w.width,v.height=w.height),v}this.allocateTextureUnit=N,this.resetTextureUnits=C,this.setTexture2D=F,this.setTexture2DArray=W,this.setTexture3D=O,this.setTextureCube=oe,this.rebindTextures=qe,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=u,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=se,this.useMultisampledRTT=H,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Hd(e,n){function t(i,s=on){let r;const a=lt.getTransfer(s);if(i===Pt)return e.UNSIGNED_BYTE;if(i===Oa)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Fa)return e.UNSIGNED_SHORT_5_5_5_1;if(i===_s)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===gs)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===vs)return e.BYTE;if(i===Ss)return e.SHORT;if(i===Qn)return e.UNSIGNED_SHORT;if(i===ka)return e.INT;if(i===en)return e.UNSIGNED_INT;if(i===Wt)return e.FLOAT;if(i===Yt)return e.HALF_FLOAT;if(i===Es)return e.ALPHA;if(i===xs)return e.RGB;if(i===Ft)return e.RGBA;if(i===mn)return e.DEPTH_COMPONENT;if(i===cn)return e.DEPTH_STENCIL;if(i===bs)return e.RED;if(i===Na)return e.RED_INTEGER;if(i===Pn)return e.RG;if(i===Ia)return e.RG_INTEGER;if(i===Ua)return e.RGBA_INTEGER;if(i===hi||i===pi||i===mi||i===_i)if(a===it)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===hi)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_i)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===hi)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mi)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_i)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===or||i===sr||i===lr||i===cr)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===or)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fr||i===ur||i===dr||i===hr||i===pr||i===mr||i===_r)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fr||i===ur)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===dr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===hr)return r.COMPRESSED_R11_EAC;if(i===pr)return r.COMPRESSED_SIGNED_R11_EAC;if(i===mr)return r.COMPRESSED_RG11_EAC;if(i===_r)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===gr||i===vr||i===Sr||i===Er||i===xr||i===br||i===Mr||i===Tr||i===Ar||i===wr||i===Rr||i===yr||i===Cr||i===Pr)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===gr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Er)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===br)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ar)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dr||i===Lr||i===Ur)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===Dr)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ur)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ir||i===Nr||i===Or||i===Fr)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ir)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Vd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zd=`
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

}`;class Wd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Ba(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Gt({vertexShader:Vd,fragmentShader:zd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Vi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xd extends Oo{constructor(n,t){super();const i=this;let s=null,r=1,a=null,l="local-floor",_=1,v=null,b=null,x=null,p=null,f=null,E=null;const g=typeof XRWebGLBinding<"u",c=new Wd,o={},S=t.getContextAttributes();let T=null,R=null;const P=[],D=[],U=new Qe;let M=null;const A=new Xn;A.viewport=new vt;const Y=new Xn;Y.viewport=new vt;const B=[A,Y],C=new Fo;let N=null,d=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=P[ee];return de===void 0&&(de=new ui,P[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=P[ee];return de===void 0&&(de=new ui,P[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=P[ee];return de===void 0&&(de=new ui,P[ee]=de),de.getHandSpace()};function F(ee){const de=D.indexOf(ee.inputSource);if(de===-1)return;const se=P[de];se!==void 0&&(se.update(ee.inputSource,ee.frame,v||a),se.dispatchEvent({type:ee.type,data:ee.inputSource}))}function W(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",O);for(let ee=0;ee<P.length;ee++){const de=D[ee];de!==null&&(D[ee]=null,P[ee].disconnect(de))}N=null,d=null,c.reset();for(const ee in o)delete o[ee];n.setRenderTarget(T),f=null,p=null,x=null,s=null,R=null,ue.stop(),i.isPresenting=!1,n.setPixelRatio(M),n.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){l=ee,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||a},this.setReferenceSpace=function(ee){v=ee},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return x===null&&g&&(x=new XRWebGLBinding(s,t)),x},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(T=n.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",W),s.addEventListener("inputsourceschange",O),S.xrCompatible!==!0&&await t.makeXRCompatible(),M=n.getPixelRatio(),n.getSize(U),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ee=null,Ae=null;S.depth&&(Ae=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=S.stencil?cn:mn,Ee=S.stencil?Cn:en);const Ce={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};x=this.getBinding(),p=x.createProjectionLayer(Ce),s.updateRenderState({layers:[p]}),n.setPixelRatio(1),n.setSize(p.textureWidth,p.textureHeight,!1),R=new Lt(p.textureWidth,p.textureHeight,{format:Ft,type:Pt,depthTexture:new $n(p.textureWidth,p.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:S.stencil,colorSpace:n.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),n.setPixelRatio(1),n.setSize(f.framebufferWidth,f.framebufferHeight,!1),R=new Lt(f.framebufferWidth,f.framebufferHeight,{format:Ft,type:Pt,colorSpace:n.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(_),v=null,a=await s.requestReferenceSpace(l),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function O(ee){for(let de=0;de<ee.removed.length;de++){const se=ee.removed[de],Ee=D.indexOf(se);Ee>=0&&(D[Ee]=null,P[Ee].disconnect(se))}for(let de=0;de<ee.added.length;de++){const se=ee.added[de];let Ee=D.indexOf(se);if(Ee===-1){for(let Ce=0;Ce<P.length;Ce++)if(Ce>=D.length){D.push(se),Ee=Ce;break}else if(D[Ce]===null){D[Ce]=se,Ee=Ce;break}if(Ee===-1)break}const Ae=P[Ee];Ae&&Ae.connect(se)}}const oe=new ke,q=new ke;function fe(ee,de,se){oe.setFromMatrixPosition(de.matrixWorld),q.setFromMatrixPosition(se.matrixWorld);const Ee=oe.distanceTo(q),Ae=de.projectionMatrix.elements,Ce=se.projectionMatrix.elements,qe=Ae[14]/(Ae[10]-1),ce=Ae[14]/(Ae[10]+1),u=(Ae[9]+1)/Ae[5],j=(Ae[9]-1)/Ae[5],V=(Ae[8]-1)/Ae[0],L=(Ce[8]+1)/Ce[0],h=qe*V,H=qe*L,ne=Ee/(-V+L),re=ne*-V;if(de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(re),ee.translateZ(ne),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ae[10]===-1)ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const k=qe+ne,w=ce+ne,m=h-re,I=H+(Ee-re),Z=u*ce/w*k,ie=j*ce/w*k;ee.projectionMatrix.makePerspective(m,I,Z,ie,k,w),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function X(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let de=ee.near,se=ee.far;c.texture!==null&&(c.depthNear>0&&(de=c.depthNear),c.depthFar>0&&(se=c.depthFar)),C.near=Y.near=A.near=de,C.far=Y.far=A.far=se,(N!==C.near||d!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),N=C.near,d=C.far),C.layers.mask=ee.layers.mask|6,A.layers.mask=C.layers.mask&-5,Y.layers.mask=C.layers.mask&-3;const Ee=ee.parent,Ae=C.cameras;X(C,Ee);for(let Ce=0;Ce<Ae.length;Ce++)X(Ae[Ce],Ee);Ae.length===2?fe(C,A,Y):C.projectionMatrix.copy(A.projectionMatrix),G(ee,C,Ee)};function G(ee,de,se){se===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(se.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Bo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(p===null&&f===null))return _},this.setFoveation=function(ee){_=ee,p!==null&&(p.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(C)},this.getCameraTexture=function(ee){return o[ee]};let pe=null;function me(ee,de){if(b=de.getViewerPose(v||a),E=de,b!==null){const se=b.views;f!==null&&(n.setRenderTargetFramebuffer(R,f.framebuffer),n.setRenderTarget(R));let Ee=!1;se.length!==C.cameras.length&&(C.cameras.length=0,Ee=!0);for(let ce=0;ce<se.length;ce++){const u=se[ce];let j=null;if(f!==null)j=f.getViewport(u);else{const L=x.getViewSubImage(p,u);j=L.viewport,ce===0&&(n.setRenderTargetTextures(R,L.colorTexture,L.depthStencilTexture),n.setRenderTarget(R))}let V=B[ce];V===void 0&&(V=new Xn,V.layers.enable(ce),V.viewport=new vt,B[ce]=V),V.matrix.fromArray(u.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(u.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(j.x,j.y,j.width,j.height),ce===0&&(C.matrix.copy(V.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ee===!0&&C.cameras.push(V)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){x=i.getBinding();const ce=x.getDepthInformation(se[0]);ce&&ce.isValid&&ce.texture&&c.init(ce,s.renderState)}if(Ae&&Ae.includes("camera-access")&&g){n.state.unbindTexture(),x=i.getBinding();for(let ce=0;ce<se.length;ce++){const u=se[ce].camera;if(u){let j=o[u];j||(j=new Ba,o[u]=j);const V=x.getCameraImage(u);j.sourceTexture=V}}}}for(let se=0;se<P.length;se++){const Ee=D[se],Ae=P[se];Ee!==null&&Ae!==void 0&&Ae.update(Ee,de,v||a)}pe&&pe(ee,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),E=null}const ue=new Qa;ue.setAnimationLoop(me),this.setAnimationLoop=function(ee){pe=ee},this.dispose=function(){}}}const jt=new oi,Yd=new pn;function Kd(e,n){function t(c,o){c.matrixAutoUpdate===!0&&c.updateMatrix(),o.value.copy(c.matrix)}function i(c,o){o.color.getRGB(c.fogColor.value,Ha(e)),o.isFog?(c.fogNear.value=o.near,c.fogFar.value=o.far):o.isFogExp2&&(c.fogDensity.value=o.density)}function s(c,o,S,T,R){o.isMeshBasicMaterial?r(c,o):o.isMeshLambertMaterial?(r(c,o),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)):o.isMeshToonMaterial?(r(c,o),x(c,o)):o.isMeshPhongMaterial?(r(c,o),b(c,o),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)):o.isMeshStandardMaterial?(r(c,o),p(c,o),o.isMeshPhysicalMaterial&&f(c,o,R)):o.isMeshMatcapMaterial?(r(c,o),E(c,o)):o.isMeshDepthMaterial?r(c,o):o.isMeshDistanceMaterial?(r(c,o),g(c,o)):o.isMeshNormalMaterial?r(c,o):o.isLineBasicMaterial?(a(c,o),o.isLineDashedMaterial&&l(c,o)):o.isPointsMaterial?_(c,o,S,T):o.isSpriteMaterial?v(c,o):o.isShadowMaterial?(c.color.value.copy(o.color),c.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}function r(c,o){c.opacity.value=o.opacity,o.color&&c.diffuse.value.copy(o.color),o.emissive&&c.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(c.map.value=o.map,t(o.map,c.mapTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.bumpMap&&(c.bumpMap.value=o.bumpMap,t(o.bumpMap,c.bumpMapTransform),c.bumpScale.value=o.bumpScale,o.side===xt&&(c.bumpScale.value*=-1)),o.normalMap&&(c.normalMap.value=o.normalMap,t(o.normalMap,c.normalMapTransform),c.normalScale.value.copy(o.normalScale),o.side===xt&&c.normalScale.value.negate()),o.displacementMap&&(c.displacementMap.value=o.displacementMap,t(o.displacementMap,c.displacementMapTransform),c.displacementScale.value=o.displacementScale,c.displacementBias.value=o.displacementBias),o.emissiveMap&&(c.emissiveMap.value=o.emissiveMap,t(o.emissiveMap,c.emissiveMapTransform)),o.specularMap&&(c.specularMap.value=o.specularMap,t(o.specularMap,c.specularMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest);const S=n.get(o),T=S.envMap,R=S.envMapRotation;T&&(c.envMap.value=T,jt.copy(R),jt.x*=-1,jt.y*=-1,jt.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(jt.y*=-1,jt.z*=-1),c.envMapRotation.value.setFromMatrix4(Yd.makeRotationFromEuler(jt)),c.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=o.reflectivity,c.ior.value=o.ior,c.refractionRatio.value=o.refractionRatio),o.lightMap&&(c.lightMap.value=o.lightMap,c.lightMapIntensity.value=o.lightMapIntensity,t(o.lightMap,c.lightMapTransform)),o.aoMap&&(c.aoMap.value=o.aoMap,c.aoMapIntensity.value=o.aoMapIntensity,t(o.aoMap,c.aoMapTransform))}function a(c,o){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,o.map&&(c.map.value=o.map,t(o.map,c.mapTransform))}function l(c,o){c.dashSize.value=o.dashSize,c.totalSize.value=o.dashSize+o.gapSize,c.scale.value=o.scale}function _(c,o,S,T){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,c.size.value=o.size*S,c.scale.value=T*.5,o.map&&(c.map.value=o.map,t(o.map,c.uvTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest)}function v(c,o){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,c.rotation.value=o.rotation,o.map&&(c.map.value=o.map,t(o.map,c.mapTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest)}function b(c,o){c.specular.value.copy(o.specular),c.shininess.value=Math.max(o.shininess,1e-4)}function x(c,o){o.gradientMap&&(c.gradientMap.value=o.gradientMap)}function p(c,o){c.metalness.value=o.metalness,o.metalnessMap&&(c.metalnessMap.value=o.metalnessMap,t(o.metalnessMap,c.metalnessMapTransform)),c.roughness.value=o.roughness,o.roughnessMap&&(c.roughnessMap.value=o.roughnessMap,t(o.roughnessMap,c.roughnessMapTransform)),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)}function f(c,o,S){c.ior.value=o.ior,o.sheen>0&&(c.sheenColor.value.copy(o.sheenColor).multiplyScalar(o.sheen),c.sheenRoughness.value=o.sheenRoughness,o.sheenColorMap&&(c.sheenColorMap.value=o.sheenColorMap,t(o.sheenColorMap,c.sheenColorMapTransform)),o.sheenRoughnessMap&&(c.sheenRoughnessMap.value=o.sheenRoughnessMap,t(o.sheenRoughnessMap,c.sheenRoughnessMapTransform))),o.clearcoat>0&&(c.clearcoat.value=o.clearcoat,c.clearcoatRoughness.value=o.clearcoatRoughness,o.clearcoatMap&&(c.clearcoatMap.value=o.clearcoatMap,t(o.clearcoatMap,c.clearcoatMapTransform)),o.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=o.clearcoatRoughnessMap,t(o.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),o.clearcoatNormalMap&&(c.clearcoatNormalMap.value=o.clearcoatNormalMap,t(o.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(o.clearcoatNormalScale),o.side===xt&&c.clearcoatNormalScale.value.negate())),o.dispersion>0&&(c.dispersion.value=o.dispersion),o.iridescence>0&&(c.iridescence.value=o.iridescence,c.iridescenceIOR.value=o.iridescenceIOR,c.iridescenceThicknessMinimum.value=o.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=o.iridescenceThicknessRange[1],o.iridescenceMap&&(c.iridescenceMap.value=o.iridescenceMap,t(o.iridescenceMap,c.iridescenceMapTransform)),o.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=o.iridescenceThicknessMap,t(o.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),o.transmission>0&&(c.transmission.value=o.transmission,c.transmissionSamplerMap.value=S.texture,c.transmissionSamplerSize.value.set(S.width,S.height),o.transmissionMap&&(c.transmissionMap.value=o.transmissionMap,t(o.transmissionMap,c.transmissionMapTransform)),c.thickness.value=o.thickness,o.thicknessMap&&(c.thicknessMap.value=o.thicknessMap,t(o.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=o.attenuationDistance,c.attenuationColor.value.copy(o.attenuationColor)),o.anisotropy>0&&(c.anisotropyVector.value.set(o.anisotropy*Math.cos(o.anisotropyRotation),o.anisotropy*Math.sin(o.anisotropyRotation)),o.anisotropyMap&&(c.anisotropyMap.value=o.anisotropyMap,t(o.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=o.specularIntensity,c.specularColor.value.copy(o.specularColor),o.specularColorMap&&(c.specularColorMap.value=o.specularColorMap,t(o.specularColorMap,c.specularColorMapTransform)),o.specularIntensityMap&&(c.specularIntensityMap.value=o.specularIntensityMap,t(o.specularIntensityMap,c.specularIntensityMapTransform))}function E(c,o){o.matcap&&(c.matcap.value=o.matcap)}function g(c,o){const S=n.get(o).light;c.referencePosition.value.setFromMatrixPosition(S.matrixWorld),c.nearDistance.value=S.shadow.camera.near,c.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qd(e,n,t,i){let s={},r={},a=[];const l=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function _(S,T){const R=T.program;i.uniformBlockBinding(S,R)}function v(S,T){let R=s[S.id];R===void 0&&(E(S),R=b(S),s[S.id]=R,S.addEventListener("dispose",c));const P=T.program;i.updateUBOMapping(S,P);const D=n.render.frame;r[S.id]!==D&&(p(S),r[S.id]=D)}function b(S){const T=x();S.__bindingPointIndex=T;const R=e.createBuffer(),P=S.__size,D=S.usage;return e.bindBuffer(e.UNIFORM_BUFFER,R),e.bufferData(e.UNIFORM_BUFFER,P,D),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,R),R}function x(){for(let S=0;S<l;S++)if(a.indexOf(S)===-1)return a.push(S),S;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const T=s[S.id],R=S.uniforms,P=S.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let D=0,U=R.length;D<U;D++){const M=Array.isArray(R[D])?R[D]:[R[D]];for(let A=0,Y=M.length;A<Y;A++){const B=M[A];if(f(B,D,A,P)===!0){const C=B.__offset,N=Array.isArray(B.value)?B.value:[B.value];let d=0;for(let F=0;F<N.length;F++){const W=N[F],O=g(W);typeof W=="number"||typeof W=="boolean"?(B.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,C+d,B.__data)):W.isMatrix3?(B.__data[0]=W.elements[0],B.__data[1]=W.elements[1],B.__data[2]=W.elements[2],B.__data[3]=0,B.__data[4]=W.elements[3],B.__data[5]=W.elements[4],B.__data[6]=W.elements[5],B.__data[7]=0,B.__data[8]=W.elements[6],B.__data[9]=W.elements[7],B.__data[10]=W.elements[8],B.__data[11]=0):(W.toArray(B.__data,d),d+=O.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,C,B.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(S,T,R,P){const D=S.value,U=T+"_"+R;if(P[U]===void 0)return typeof D=="number"||typeof D=="boolean"?P[U]=D:P[U]=D.clone(),!0;{const M=P[U];if(typeof D=="number"||typeof D=="boolean"){if(M!==D)return P[U]=D,!0}else if(M.equals(D)===!1)return M.copy(D),!0}return!1}function E(S){const T=S.uniforms;let R=0;const P=16;for(let U=0,M=T.length;U<M;U++){const A=Array.isArray(T[U])?T[U]:[T[U]];for(let Y=0,B=A.length;Y<B;Y++){const C=A[Y],N=Array.isArray(C.value)?C.value:[C.value];for(let d=0,F=N.length;d<F;d++){const W=N[d],O=g(W),oe=R%P,q=oe%O.boundary,fe=oe+q;R+=q,fe!==0&&P-fe<O.storage&&(R+=P-fe),C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=R,R+=O.storage}}}const D=R%P;return D>0&&(R+=P-D),S.__size=R,S.__cache={},this}function g(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):tt("WebGLRenderer: Unsupported uniform value type.",S),T}function c(S){const T=S.target;T.removeEventListener("dispose",c);const R=a.indexOf(T.__bindingPointIndex);a.splice(R,1),e.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function o(){for(const S in s)e.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:_,update:v,dispose:o}}const Zd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yt=null;function jd(){return yt===null&&(yt=new ko(Zd,16,16,Pn,Yt),yt.name="DFG_LUT",yt.minFilter=Et,yt.magFilter=Et,yt.wrapS=Pi,yt.wrapT=Pi,yt.generateMipmaps=!1,yt.needsUpdate=!0),yt}class $d{constructor(n={}){const{canvas:t=Lo(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:v=!1,powerPreference:b="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:p=!1,outputBufferType:f=Pt}=n;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=a;const g=f,c=new Set([Ua,Ia,Na]),o=new Set([Pt,en,Qn,Cn,Oa,Fa]),S=new Uint32Array(4),T=new Int32Array(4);let R=null,P=null;const D=[],U=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let Y=!1;this._outputColorSpace=Ca;let B=0,C=0,N=null,d=-1,F=null;const W=new vt,O=new vt;let oe=null;const q=new at(0);let fe=0,X=t.width,G=t.height,pe=1,me=null,ue=null;const ee=new vt(0,0,X,G),de=new vt(0,0,X,G);let se=!1;const Ee=new Pa;let Ae=!1,Ce=!1;const qe=new pn,ce=new ke,u=new vt,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let V=!1;function L(){return N===null?pe:1}let h=i;function H(y,K){return t.getContext(y,K)}try{const y={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:_,preserveDrawingBuffer:v,powerPreference:b,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uo}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",nt,!1),h===null){const K="webgl2";if(h=H(K,y),h===null)throw H(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw rt("WebGLRenderer: "+y.message),y}let ne,re,k,w,m,I,Z,ie,$,be,ve,De,Be,le,_e,Le,ye,we,Ve,z,Se,ge,Re;function he(){ne=new $f(h),ne.init(),Se=new Hd(h,ne),re=new zf(h,ne,n,Se),k=new kd(h,ne),re.reversedDepthBuffer&&p&&k.buffers.depth.setReversed(!0),w=new eu(h),m=new Ad,I=new Gd(h,ne,k,m,re,Se,w),Z=new jf(A),ie=new rl(h),ge=new Hf(h,ie),$=new Qf(h,ie,w,ge),be=new nu(h,$,ie,ge,w),we=new tu(h,re,I),_e=new Wf(m),ve=new Td(A,Z,ne,re,ge,_e),De=new Kd(A,m),Be=new Rd,le=new Ud(ne),ye=new Gf(A,Z,k,be,E,_),Le=new Bd(A,be,re),Re=new qd(h,w,re,k),Ve=new Vf(h,ne,w),z=new Jf(h,ne,w),w.programs=ve.programs,A.capabilities=re,A.extensions=ne,A.properties=m,A.renderLists=Be,A.shadowMap=Le,A.state=k,A.info=w}he(),g!==Pt&&(M=new ru(g,t.width,t.height,s,r));const ae=new Xd(A,h);this.xr=ae,this.getContext=function(){return h},this.getContextAttributes=function(){return h.getContextAttributes()},this.forceContextLoss=function(){const y=ne.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ne.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(y){y!==void 0&&(pe=y,this.setSize(X,G,!1))},this.getSize=function(y){return y.set(X,G)},this.setSize=function(y,K,te=!0){if(ae.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,G=K,t.width=Math.floor(y*pe),t.height=Math.floor(K*pe),te===!0&&(t.style.width=y+"px",t.style.height=K+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,y,K)},this.getDrawingBufferSize=function(y){return y.set(X*pe,G*pe).floor()},this.setDrawingBufferSize=function(y,K,te){X=y,G=K,pe=te,t.width=Math.floor(y*te),t.height=Math.floor(K*te),this.setViewport(0,0,y,K)},this.setEffects=function(y){if(g===Pt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let K=0;K<y.length;K++)if(y[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(W)},this.getViewport=function(y){return y.copy(ee)},this.setViewport=function(y,K,te,J){y.isVector4?ee.set(y.x,y.y,y.z,y.w):ee.set(y,K,te,J),k.viewport(W.copy(ee).multiplyScalar(pe).round())},this.getScissor=function(y){return y.copy(de)},this.setScissor=function(y,K,te,J){y.isVector4?de.set(y.x,y.y,y.z,y.w):de.set(y,K,te,J),k.scissor(O.copy(de).multiplyScalar(pe).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(y){k.setScissorTest(se=y)},this.setOpaqueSort=function(y){me=y},this.setTransparentSort=function(y){ue=y},this.getClearColor=function(y){return y.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(y=!0,K=!0,te=!0){let J=0;if(y){let Q=!1;if(N!==null){const Me=N.texture.format;Q=c.has(Me)}if(Q){const Me=N.texture.type,Pe=o.has(Me),Te=ye.getClearColor(),Ie=ye.getClearAlpha(),Oe=Te.r,He=Te.g,We=Te.b;Pe?(S[0]=Oe,S[1]=He,S[2]=We,S[3]=Ie,h.clearBufferuiv(h.COLOR,0,S)):(T[0]=Oe,T[1]=He,T[2]=We,T[3]=Ie,h.clearBufferiv(h.COLOR,0,T))}else J|=h.COLOR_BUFFER_BIT}K&&(J|=h.DEPTH_BUFFER_BIT),te&&(J|=h.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&h.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),ye.dispose(),Be.dispose(),le.dispose(),m.dispose(),Z.dispose(),be.dispose(),ge.dispose(),Re.dispose(),ve.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Zi),ae.removeEventListener("sessionend",ji),Kt.stop()};function Ue(y){y.preventDefault(),ir("WebGLRenderer: Context Lost."),Y=!0}function Ge(){ir("WebGLRenderer: Context Restored."),Y=!1;const y=w.autoReset,K=Le.enabled,te=Le.autoUpdate,J=Le.needsUpdate,Q=Le.type;he(),w.autoReset=y,Le.enabled=K,Le.autoUpdate=te,Le.needsUpdate=J,Le.type=Q}function nt(y){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ze(y){const K=y.target;K.removeEventListener("dispose",Ze),It(K)}function It(y){Nt(y),m.remove(y)}function Nt(y){const K=m.get(y).programs;K!==void 0&&(K.forEach(function(te){ve.releaseProgram(te)}),y.isShaderMaterial&&ve.releaseShaderCache(y))}this.renderBufferDirect=function(y,K,te,J,Q,Me){K===null&&(K=j);const Pe=Q.isMesh&&Q.matrixWorld.determinant()<0,Te=Ao(y,K,te,J,Q);k.setMaterial(J,Pe);let Ie=te.index,Oe=1;if(J.wireframe===!0){if(Ie=$.getWireframeAttribute(te),Ie===void 0)return;Oe=2}const He=te.drawRange,We=te.attributes.position;let Fe=He.start*Oe,je=(He.start+He.count)*Oe;Me!==null&&(Fe=Math.max(Fe,Me.start*Oe),je=Math.min(je,(Me.start+Me.count)*Oe)),Ie!==null?(Fe=Math.max(Fe,0),je=Math.min(je,Ie.count)):We!=null&&(Fe=Math.max(Fe,0),je=Math.min(je,We.count));const st=je-Fe;if(st<0||st===1/0)return;ge.setup(Q,J,Te,te,Ie);let ot,$e=Ve;if(Ie!==null&&(ot=ie.get(Ie),$e=z,$e.setIndex(ot)),Q.isMesh)J.wireframe===!0?(k.setLineWidth(J.wireframeLinewidth*L()),$e.setMode(h.LINES)):$e.setMode(h.TRIANGLES);else if(Q.isLine){let mt=J.linewidth;mt===void 0&&(mt=1),k.setLineWidth(mt*L()),Q.isLineSegments?$e.setMode(h.LINES):Q.isLineLoop?$e.setMode(h.LINE_LOOP):$e.setMode(h.LINE_STRIP)}else Q.isPoints?$e.setMode(h.POINTS):Q.isSprite&&$e.setMode(h.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Da("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))$e.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const mt=Q._multiDrawStarts,Ne=Q._multiDrawCounts,St=Q._multiDrawCount,Ye=Ie?ie.get(Ie).bytesPerElement:1,Tt=m.get(J).currentProgram.getUniforms();for(let wt=0;wt<St;wt++)Tt.setValue(h,"_gl_DrawID",wt),$e.render(mt[wt]/Ye,Ne[wt])}else if(Q.isInstancedMesh)$e.renderInstances(Fe,st,Q.count);else if(te.isInstancedBufferGeometry){const mt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ne=Math.min(te.instanceCount,mt);$e.renderInstances(Fe,st,Ne)}else $e.render(Fe,st)};function qi(y,K,te){y.transparent===!0&&y.side===Ot&&y.forceSinglePass===!1?(y.side=xt,y.needsUpdate=!0,Bn(y,K,te),y.side=yn,y.needsUpdate=!0,Bn(y,K,te),y.side=Ot):Bn(y,K,te)}this.compile=function(y,K,te=null){te===null&&(te=y),P=le.get(te),P.init(K),U.push(P),te.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),y!==te&&y.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),P.setupLights();const J=new Set;return y.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Me=Q.material;if(Me)if(Array.isArray(Me))for(let Pe=0;Pe<Me.length;Pe++){const Te=Me[Pe];qi(Te,te,Q),J.add(Te)}else qi(Me,te,Q),J.add(Me)}),P=U.pop(),J},this.compileAsync=function(y,K,te=null){const J=this.compile(y,K,te);return new Promise(Q=>{function Me(){if(J.forEach(function(Pe){m.get(Pe).currentProgram.isReady()&&J.delete(Pe)}),J.size===0){Q(y);return}setTimeout(Me,10)}ne.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let ci=null;function To(y){ci&&ci(y)}function Zi(){Kt.stop()}function ji(){Kt.start()}const Kt=new Qa;Kt.setAnimationLoop(To),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(y){ci=y,ae.setAnimationLoop(y),y===null?Kt.stop():Kt.start()},ae.addEventListener("sessionstart",Zi),ae.addEventListener("sessionend",ji),this.render=function(y,K){if(K!==void 0&&K.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;const te=ae.enabled===!0&&ae.isPresenting===!0,J=M!==null&&(N===null||te)&&M.begin(A,N);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(K),K=ae.getCamera()),y.isScene===!0&&y.onBeforeRender(A,y,K,N),P=le.get(y,U.length),P.init(K),U.push(P),qe.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ee.setFromProjectionMatrix(qe,rr,K.reversedDepth),Ce=this.localClippingEnabled,Ae=_e.init(this.clippingPlanes,Ce),R=Be.get(y,D.length),R.init(),D.push(R),ae.enabled===!0&&ae.isPresenting===!0){const Pe=A.xr.getDepthSensingMesh();Pe!==null&&fi(Pe,K,-1/0,A.sortObjects)}fi(y,K,0,A.sortObjects),R.finish(),A.sortObjects===!0&&R.sort(me,ue),V=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,V&&ye.addToRenderList(R,y),this.info.render.frame++,Ae===!0&&_e.beginShadows();const Q=P.state.shadowsArray;if(Le.render(Q,y,K),Ae===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&M.hasRenderPass())===!1){const Pe=R.opaque,Te=R.transmissive;if(P.setupLights(),K.isArrayCamera){const Ie=K.cameras;if(Te.length>0)for(let Oe=0,He=Ie.length;Oe<He;Oe++){const We=Ie[Oe];Qi(Pe,Te,y,We)}V&&ye.render(y);for(let Oe=0,He=Ie.length;Oe<He;Oe++){const We=Ie[Oe];$i(R,y,We,We.viewport)}}else Te.length>0&&Qi(Pe,Te,y,K),V&&ye.render(y),$i(R,y,K)}N!==null&&C===0&&(I.updateMultisampleRenderTarget(N),I.updateRenderTargetMipmap(N)),J&&M.end(A),y.isScene===!0&&y.onAfterRender(A,y,K),ge.resetDefaultState(),d=-1,F=null,U.pop(),U.length>0?(P=U[U.length-1],Ae===!0&&_e.setGlobalState(A.clippingPlanes,P.state.camera)):P=null,D.pop(),D.length>0?R=D[D.length-1]:R=null};function fi(y,K,te,J){if(y.visible===!1)return;if(y.layers.test(K.layers)){if(y.isGroup)te=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(K);else if(y.isLight)P.pushLight(y),y.castShadow&&P.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ee.intersectsSprite(y)){J&&u.setFromMatrixPosition(y.matrixWorld).applyMatrix4(qe);const Pe=be.update(y),Te=y.material;Te.visible&&R.push(y,Pe,Te,te,u.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ee.intersectsObject(y))){const Pe=be.update(y),Te=y.material;if(J&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),u.copy(y.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),u.copy(Pe.boundingSphere.center)),u.applyMatrix4(y.matrixWorld).applyMatrix4(qe)),Array.isArray(Te)){const Ie=Pe.groups;for(let Oe=0,He=Ie.length;Oe<He;Oe++){const We=Ie[Oe],Fe=Te[We.materialIndex];Fe&&Fe.visible&&R.push(y,Pe,Fe,te,u.z,We)}}else Te.visible&&R.push(y,Pe,Te,te,u.z,null)}}const Me=y.children;for(let Pe=0,Te=Me.length;Pe<Te;Pe++)fi(Me[Pe],K,te,J)}function $i(y,K,te,J){const{opaque:Q,transmissive:Me,transparent:Pe}=y;P.setupLightsView(te),Ae===!0&&_e.setGlobalState(A.clippingPlanes,te),J&&k.viewport(W.copy(J)),Q.length>0&&Fn(Q,K,te),Me.length>0&&Fn(Me,K,te),Pe.length>0&&Fn(Pe,K,te),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Qi(y,K,te,J){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[J.id]===void 0){const Fe=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[J.id]=new Lt(1,1,{generateMipmaps:!0,type:Fe?Yt:Pt,minFilter:ln,samples:Math.max(4,re.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const Me=P.state.transmissionRenderTarget[J.id],Pe=J.viewport||W;Me.setSize(Pe.z*A.transmissionResolutionScale,Pe.w*A.transmissionResolutionScale);const Te=A.getRenderTarget(),Ie=A.getActiveCubeFace(),Oe=A.getActiveMipmapLevel();A.setRenderTarget(Me),A.getClearColor(q),fe=A.getClearAlpha(),fe<1&&A.setClearColor(16777215,.5),A.clear(),V&&ye.render(te);const He=A.toneMapping;A.toneMapping=Dt;const We=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),P.setupLightsView(J),Ae===!0&&_e.setGlobalState(A.clippingPlanes,J),Fn(y,te,J),I.updateMultisampleRenderTarget(Me),I.updateRenderTargetMipmap(Me),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let je=0,st=K.length;je<st;je++){const ot=K[je],{object:$e,geometry:mt,material:Ne,group:St}=ot;if(Ne.side===Ot&&$e.layers.test(J.layers)){const Ye=Ne.side;Ne.side=xt,Ne.needsUpdate=!0,Ji($e,te,J,mt,Ne,St),Ne.side=Ye,Ne.needsUpdate=!0,Fe=!0}}Fe===!0&&(I.updateMultisampleRenderTarget(Me),I.updateRenderTargetMipmap(Me))}A.setRenderTarget(Te,Ie,Oe),A.setClearColor(q,fe),We!==void 0&&(J.viewport=We),A.toneMapping=He}function Fn(y,K,te){const J=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Me=y.length;Q<Me;Q++){const Pe=y[Q],{object:Te,geometry:Ie,group:Oe}=Pe;let He=Pe.material;He.allowOverride===!0&&J!==null&&(He=J),Te.layers.test(te.layers)&&Ji(Te,K,te,Ie,He,Oe)}}function Ji(y,K,te,J,Q,Me){y.onBeforeRender(A,K,te,J,Q,Me),y.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Q.onBeforeRender(A,K,te,J,y,Me),Q.transparent===!0&&Q.side===Ot&&Q.forceSinglePass===!1?(Q.side=xt,Q.needsUpdate=!0,A.renderBufferDirect(te,K,J,Q,y,Me),Q.side=yn,Q.needsUpdate=!0,A.renderBufferDirect(te,K,J,Q,y,Me),Q.side=Ot):A.renderBufferDirect(te,K,J,Q,y,Me),y.onAfterRender(A,K,te,J,Q,Me)}function Bn(y,K,te){K.isScene!==!0&&(K=j);const J=m.get(y),Q=P.state.lights,Me=P.state.shadowsArray,Pe=Q.state.version,Te=ve.getParameters(y,Q.state,Me,K,te),Ie=ve.getProgramCacheKey(Te);let Oe=J.programs;J.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?K.environment:null,J.fog=K.fog;const He=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;J.envMap=Z.get(y.envMap||J.environment,He),J.envMapRotation=J.environment!==null&&y.envMap===null?K.environmentRotation:y.envMapRotation,Oe===void 0&&(y.addEventListener("dispose",Ze),Oe=new Map,J.programs=Oe);let We=Oe.get(Ie);if(We!==void 0){if(J.currentProgram===We&&J.lightsStateVersion===Pe)return tr(y,Te),We}else Te.uniforms=ve.getUniforms(y),y.onBeforeCompile(Te,A),We=ve.acquireProgram(Te,Ie),Oe.set(Ie,We),J.uniforms=Te.uniforms;const Fe=J.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Fe.clippingPlanes=_e.uniform),tr(y,Te),J.needsLights=Ro(y),J.lightsStateVersion=Pe,J.needsLights&&(Fe.ambientLightColor.value=Q.state.ambient,Fe.lightProbe.value=Q.state.probe,Fe.directionalLights.value=Q.state.directional,Fe.directionalLightShadows.value=Q.state.directionalShadow,Fe.spotLights.value=Q.state.spot,Fe.spotLightShadows.value=Q.state.spotShadow,Fe.rectAreaLights.value=Q.state.rectArea,Fe.ltc_1.value=Q.state.rectAreaLTC1,Fe.ltc_2.value=Q.state.rectAreaLTC2,Fe.pointLights.value=Q.state.point,Fe.pointLightShadows.value=Q.state.pointShadow,Fe.hemisphereLights.value=Q.state.hemi,Fe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Fe.spotLightMatrix.value=Q.state.spotLightMatrix,Fe.spotLightMap.value=Q.state.spotLightMap,Fe.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.currentProgram=We,J.uniformsList=null,We}function er(y){if(y.uniformsList===null){const K=y.currentProgram.getUniforms();y.uniformsList=qn.seqWithValue(K.seq,y.uniforms)}return y.uniformsList}function tr(y,K){const te=m.get(y);te.outputColorSpace=K.outputColorSpace,te.batching=K.batching,te.batchingColor=K.batchingColor,te.instancing=K.instancing,te.instancingColor=K.instancingColor,te.instancingMorph=K.instancingMorph,te.skinning=K.skinning,te.morphTargets=K.morphTargets,te.morphNormals=K.morphNormals,te.morphColors=K.morphColors,te.morphTargetsCount=K.morphTargetsCount,te.numClippingPlanes=K.numClippingPlanes,te.numIntersection=K.numClipIntersection,te.vertexAlphas=K.vertexAlphas,te.vertexTangents=K.vertexTangents,te.toneMapping=K.toneMapping}function Ao(y,K,te,J,Q){K.isScene!==!0&&(K=j),I.resetTextureUnits();const Me=K.fog,Pe=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?K.environment:null,Te=N===null?A.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ii,Ie=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Oe=Z.get(J.envMap||Pe,Ie),He=J.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,We=!!te.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Fe=!!te.morphAttributes.position,je=!!te.morphAttributes.normal,st=!!te.morphAttributes.color;let ot=Dt;J.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ot=A.toneMapping);const $e=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,mt=$e!==void 0?$e.length:0,Ne=m.get(J),St=P.state.lights;if(Ae===!0&&(Ce===!0||y!==F)){const dt=y===F&&J.id===d;_e.setState(J,y,dt)}let Ye=!1;J.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==St.state.version||Ne.outputColorSpace!==Te||Q.isBatchedMesh&&Ne.batching===!1||!Q.isBatchedMesh&&Ne.batching===!0||Q.isBatchedMesh&&Ne.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ne.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ne.instancing===!1||!Q.isInstancedMesh&&Ne.instancing===!0||Q.isSkinnedMesh&&Ne.skinning===!1||!Q.isSkinnedMesh&&Ne.skinning===!0||Q.isInstancedMesh&&Ne.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ne.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ne.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ne.instancingMorph===!1&&Q.morphTexture!==null||Ne.envMap!==Oe||J.fog===!0&&Ne.fog!==Me||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==_e.numPlanes||Ne.numIntersection!==_e.numIntersection)||Ne.vertexAlphas!==He||Ne.vertexTangents!==We||Ne.morphTargets!==Fe||Ne.morphNormals!==je||Ne.morphColors!==st||Ne.toneMapping!==ot||Ne.morphTargetsCount!==mt)&&(Ye=!0):(Ye=!0,Ne.__version=J.version);let Tt=Ne.currentProgram;Ye===!0&&(Tt=Bn(J,K,Q));let wt=!1,qt=!1,nn=!1;const et=Tt.getUniforms(),ht=Ne.uniforms;if(k.useProgram(Tt.program)&&(wt=!0,qt=!0,nn=!0),J.id!==d&&(d=J.id,qt=!0),wt||F!==y){k.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),et.setValue(h,"projectionMatrix",y.projectionMatrix),et.setValue(h,"viewMatrix",y.matrixWorldInverse);const Vt=et.map.cameraPosition;Vt!==void 0&&Vt.setValue(h,ce.setFromMatrixPosition(y.matrixWorld)),re.logarithmicDepthBuffer&&et.setValue(h,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&et.setValue(h,"isOrthographic",y.isOrthographicCamera===!0),F!==y&&(F=y,qt=!0,nn=!0)}if(Ne.needsLights&&(St.state.directionalShadowMap.length>0&&et.setValue(h,"directionalShadowMap",St.state.directionalShadowMap,I),St.state.spotShadowMap.length>0&&et.setValue(h,"spotShadowMap",St.state.spotShadowMap,I),St.state.pointShadowMap.length>0&&et.setValue(h,"pointShadowMap",St.state.pointShadowMap,I)),Q.isSkinnedMesh){et.setOptional(h,Q,"bindMatrix"),et.setOptional(h,Q,"bindMatrixInverse");const dt=Q.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),et.setValue(h,"boneTexture",dt.boneTexture,I))}Q.isBatchedMesh&&(et.setOptional(h,Q,"batchingTexture"),et.setValue(h,"batchingTexture",Q._matricesTexture,I),et.setOptional(h,Q,"batchingIdTexture"),et.setValue(h,"batchingIdTexture",Q._indirectTexture,I),et.setOptional(h,Q,"batchingColorTexture"),Q._colorsTexture!==null&&et.setValue(h,"batchingColorTexture",Q._colorsTexture,I));const Ht=te.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&we.update(Q,te,Tt),(qt||Ne.receiveShadow!==Q.receiveShadow)&&(Ne.receiveShadow=Q.receiveShadow,et.setValue(h,"receiveShadow",Q.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&K.environment!==null&&(ht.envMapIntensity.value=K.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=jd()),qt&&(et.setValue(h,"toneMappingExposure",A.toneMappingExposure),Ne.needsLights&&wo(ht,nn),Me&&J.fog===!0&&De.refreshFogUniforms(ht,Me),De.refreshMaterialUniforms(ht,J,pe,G,P.state.transmissionRenderTarget[y.id]),qn.upload(h,er(Ne),ht,I)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(qn.upload(h,er(Ne),ht,I),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&et.setValue(h,"center",Q.center),et.setValue(h,"modelViewMatrix",Q.modelViewMatrix),et.setValue(h,"normalMatrix",Q.normalMatrix),et.setValue(h,"modelMatrix",Q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const dt=J.uniformsGroups;for(let Vt=0,rn=dt.length;Vt<rn;Vt++){const nr=dt[Vt];Re.update(nr,Tt),Re.bind(nr,Tt)}}return Tt}function wo(y,K){y.ambientLightColor.needsUpdate=K,y.lightProbe.needsUpdate=K,y.directionalLights.needsUpdate=K,y.directionalLightShadows.needsUpdate=K,y.pointLights.needsUpdate=K,y.pointLightShadows.needsUpdate=K,y.spotLights.needsUpdate=K,y.spotLightShadows.needsUpdate=K,y.rectAreaLights.needsUpdate=K,y.hemisphereLights.needsUpdate=K}function Ro(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,K,te){const J=m.get(y);J.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),m.get(y.texture).__webglTexture=K,m.get(y.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:te,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,K){const te=m.get(y);te.__webglFramebuffer=K,te.__useDefaultFramebuffer=K===void 0};const yo=h.createFramebuffer();this.setRenderTarget=function(y,K=0,te=0){N=y,B=K,C=te;let J=null,Q=!1,Me=!1;if(y){const Te=m.get(y);if(Te.__useDefaultFramebuffer!==void 0){k.bindFramebuffer(h.FRAMEBUFFER,Te.__webglFramebuffer),W.copy(y.viewport),O.copy(y.scissor),oe=y.scissorTest,k.viewport(W),k.scissor(O),k.setScissorTest(oe),d=-1;return}else if(Te.__webglFramebuffer===void 0)I.setupRenderTarget(y);else if(Te.__hasExternalTextures)I.rebindTextures(y,m.get(y.texture).__webglTexture,m.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const He=y.depthTexture;if(Te.__boundDepthTexture!==He){if(He!==null&&m.has(He)&&(y.width!==He.image.width||y.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(y)}}const Ie=y.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Me=!0);const Oe=m.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Oe[K])?J=Oe[K][te]:J=Oe[K],Q=!0):y.samples>0&&I.useMultisampledRTT(y)===!1?J=m.get(y).__webglMultisampledFramebuffer:Array.isArray(Oe)?J=Oe[te]:J=Oe,W.copy(y.viewport),O.copy(y.scissor),oe=y.scissorTest}else W.copy(ee).multiplyScalar(pe).floor(),O.copy(de).multiplyScalar(pe).floor(),oe=se;if(te!==0&&(J=yo),k.bindFramebuffer(h.FRAMEBUFFER,J)&&k.drawBuffers(y,J),k.viewport(W),k.scissor(O),k.setScissorTest(oe),Q){const Te=m.get(y.texture);h.framebufferTexture2D(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te.__webglTexture,te)}else if(Me){const Te=K;for(let Ie=0;Ie<y.textures.length;Ie++){const Oe=m.get(y.textures[Ie]);h.framebufferTextureLayer(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0+Ie,Oe.__webglTexture,te,Te)}}else if(y!==null&&te!==0){const Te=m.get(y.texture);h.framebufferTexture2D(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,Te.__webglTexture,te)}d=-1},this.readRenderTargetPixels=function(y,K,te,J,Q,Me,Pe,Te=0){if(!(y&&y.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=m.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){k.bindFramebuffer(h.FRAMEBUFFER,Ie);try{const Oe=y.textures[Te],He=Oe.format,We=Oe.type;if(y.textures.length>1&&h.readBuffer(h.COLOR_ATTACHMENT0+Te),!re.textureFormatReadable(He)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(We)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=y.width-J&&te>=0&&te<=y.height-Q&&h.readPixels(K,te,J,Q,Se.convert(He),Se.convert(We),Me)}finally{const Oe=N!==null?m.get(N).__webglFramebuffer:null;k.bindFramebuffer(h.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(y,K,te,J,Q,Me,Pe,Te=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=m.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie)if(K>=0&&K<=y.width-J&&te>=0&&te<=y.height-Q){k.bindFramebuffer(h.FRAMEBUFFER,Ie);const Oe=y.textures[Te],He=Oe.format,We=Oe.type;if(y.textures.length>1&&h.readBuffer(h.COLOR_ATTACHMENT0+Te),!re.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=h.createBuffer();h.bindBuffer(h.PIXEL_PACK_BUFFER,Fe),h.bufferData(h.PIXEL_PACK_BUFFER,Me.byteLength,h.STREAM_READ),h.readPixels(K,te,J,Q,Se.convert(He),Se.convert(We),0);const je=N!==null?m.get(N).__webglFramebuffer:null;k.bindFramebuffer(h.FRAMEBUFFER,je);const st=h.fenceSync(h.SYNC_GPU_COMMANDS_COMPLETE,0);return h.flush(),await Io(h,st,4),h.bindBuffer(h.PIXEL_PACK_BUFFER,Fe),h.getBufferSubData(h.PIXEL_PACK_BUFFER,0,Me),h.deleteBuffer(Fe),h.deleteSync(st),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,K=null,te=0){const J=Math.pow(2,-te),Q=Math.floor(y.image.width*J),Me=Math.floor(y.image.height*J),Pe=K!==null?K.x:0,Te=K!==null?K.y:0;I.setTexture2D(y,0),h.copyTexSubImage2D(h.TEXTURE_2D,te,0,0,Pe,Te,Q,Me),k.unbindTexture()};const Co=h.createFramebuffer(),Po=h.createFramebuffer();this.copyTextureToTexture=function(y,K,te=null,J=null,Q=0,Me=0){let Pe,Te,Ie,Oe,He,We,Fe,je,st;const ot=y.isCompressedTexture?y.mipmaps[Me]:y.image;if(te!==null)Pe=te.max.x-te.min.x,Te=te.max.y-te.min.y,Ie=te.isBox3?te.max.z-te.min.z:1,Oe=te.min.x,He=te.min.y,We=te.isBox3?te.min.z:0;else{const ht=Math.pow(2,-Q);Pe=Math.floor(ot.width*ht),Te=Math.floor(ot.height*ht),y.isDataArrayTexture?Ie=ot.depth:y.isData3DTexture?Ie=Math.floor(ot.depth*ht):Ie=1,Oe=0,He=0,We=0}J!==null?(Fe=J.x,je=J.y,st=J.z):(Fe=0,je=0,st=0);const $e=Se.convert(K.format),mt=Se.convert(K.type);let Ne;K.isData3DTexture?(I.setTexture3D(K,0),Ne=h.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(I.setTexture2DArray(K,0),Ne=h.TEXTURE_2D_ARRAY):(I.setTexture2D(K,0),Ne=h.TEXTURE_2D),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,K.flipY),h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),h.pixelStorei(h.UNPACK_ALIGNMENT,K.unpackAlignment);const St=h.getParameter(h.UNPACK_ROW_LENGTH),Ye=h.getParameter(h.UNPACK_IMAGE_HEIGHT),Tt=h.getParameter(h.UNPACK_SKIP_PIXELS),wt=h.getParameter(h.UNPACK_SKIP_ROWS),qt=h.getParameter(h.UNPACK_SKIP_IMAGES);h.pixelStorei(h.UNPACK_ROW_LENGTH,ot.width),h.pixelStorei(h.UNPACK_IMAGE_HEIGHT,ot.height),h.pixelStorei(h.UNPACK_SKIP_PIXELS,Oe),h.pixelStorei(h.UNPACK_SKIP_ROWS,He),h.pixelStorei(h.UNPACK_SKIP_IMAGES,We);const nn=y.isDataArrayTexture||y.isData3DTexture,et=K.isDataArrayTexture||K.isData3DTexture;if(y.isDepthTexture){const ht=m.get(y),Ht=m.get(K),dt=m.get(ht.__renderTarget),Vt=m.get(Ht.__renderTarget);k.bindFramebuffer(h.READ_FRAMEBUFFER,dt.__webglFramebuffer),k.bindFramebuffer(h.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let rn=0;rn<Ie;rn++)nn&&(h.framebufferTextureLayer(h.READ_FRAMEBUFFER,h.COLOR_ATTACHMENT0,m.get(y).__webglTexture,Q,We+rn),h.framebufferTextureLayer(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0,m.get(K).__webglTexture,Me,st+rn)),h.blitFramebuffer(Oe,He,Pe,Te,Fe,je,Pe,Te,h.DEPTH_BUFFER_BIT,h.NEAREST);k.bindFramebuffer(h.READ_FRAMEBUFFER,null),k.bindFramebuffer(h.DRAW_FRAMEBUFFER,null)}else if(Q!==0||y.isRenderTargetTexture||m.has(y)){const ht=m.get(y),Ht=m.get(K);k.bindFramebuffer(h.READ_FRAMEBUFFER,Co),k.bindFramebuffer(h.DRAW_FRAMEBUFFER,Po);for(let dt=0;dt<Ie;dt++)nn?h.framebufferTextureLayer(h.READ_FRAMEBUFFER,h.COLOR_ATTACHMENT0,ht.__webglTexture,Q,We+dt):h.framebufferTexture2D(h.READ_FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,ht.__webglTexture,Q),et?h.framebufferTextureLayer(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0,Ht.__webglTexture,Me,st+dt):h.framebufferTexture2D(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,Ht.__webglTexture,Me),Q!==0?h.blitFramebuffer(Oe,He,Pe,Te,Fe,je,Pe,Te,h.COLOR_BUFFER_BIT,h.NEAREST):et?h.copyTexSubImage3D(Ne,Me,Fe,je,st+dt,Oe,He,Pe,Te):h.copyTexSubImage2D(Ne,Me,Fe,je,Oe,He,Pe,Te);k.bindFramebuffer(h.READ_FRAMEBUFFER,null),k.bindFramebuffer(h.DRAW_FRAMEBUFFER,null)}else et?y.isDataTexture||y.isData3DTexture?h.texSubImage3D(Ne,Me,Fe,je,st,Pe,Te,Ie,$e,mt,ot.data):K.isCompressedArrayTexture?h.compressedTexSubImage3D(Ne,Me,Fe,je,st,Pe,Te,Ie,$e,ot.data):h.texSubImage3D(Ne,Me,Fe,je,st,Pe,Te,Ie,$e,mt,ot):y.isDataTexture?h.texSubImage2D(h.TEXTURE_2D,Me,Fe,je,Pe,Te,$e,mt,ot.data):y.isCompressedTexture?h.compressedTexSubImage2D(h.TEXTURE_2D,Me,Fe,je,ot.width,ot.height,$e,ot.data):h.texSubImage2D(h.TEXTURE_2D,Me,Fe,je,Pe,Te,$e,mt,ot);h.pixelStorei(h.UNPACK_ROW_LENGTH,St),h.pixelStorei(h.UNPACK_IMAGE_HEIGHT,Ye),h.pixelStorei(h.UNPACK_SKIP_PIXELS,Tt),h.pixelStorei(h.UNPACK_SKIP_ROWS,wt),h.pixelStorei(h.UNPACK_SKIP_IMAGES,qt),Me===0&&K.generateMipmaps&&h.generateMipmap(Ne),k.unbindTexture()},this.initRenderTarget=function(y){m.get(y).__webglFramebuffer===void 0&&I.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?I.setTextureCube(y,0):y.isData3DTexture?I.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?I.setTexture2DArray(y,0):I.setTexture2D(y,0),k.unbindTexture()},this.resetState=function(){B=0,C=0,N=null,k.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(n),t.unpackColorSpace=lt._getUnpackColorSpace()}}function Qd(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),s=new Set(Object.keys(e[0].morphAttributes)),r={},a={},l=e[0].morphTargetsRelative,_=new gn;let v=0;for(let b=0;b<e.length;++b){const x=e[b];let p=0;if(t!==(x.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in x.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(x.attributes[f]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". Make sure all geometries have the same number of attributes."),null;if(l!==x.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in x.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(x.morphAttributes[f])}if(n){let f;if(t)f=x.index.count;else if(x.attributes.position!==void 0)f=x.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". The geometry must have either an index or a position attribute"),null;_.addGroup(v,f,b),v+=f}}if(t){let b=0;const x=[];for(let p=0;p<e.length;++p){const f=e[p].index;for(let E=0;E<f.count;++E)x.push(f.getX(E)+b);b+=e[p].attributes.position.count}_.setIndex(x)}for(const b in r){const x=pa(r[b]);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+b+" attribute."),null;_.setAttribute(b,x)}for(const b in a){const x=a[b][0].length;if(x===0)break;_.morphAttributes=_.morphAttributes||{},_.morphAttributes[b]=[];for(let p=0;p<x;++p){const f=[];for(let g=0;g<a[b].length;++g)f.push(a[b][g][p]);const E=pa(f);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+b+" morphAttribute."),null;_.morphAttributes[b].push(E)}}return _}function pa(e){let n,t,i,s=-1,r=0;for(let v=0;v<e.length;++v){const b=e[v];if(n===void 0&&(n=b.array.constructor),n!==b.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=b.itemSize),t!==b.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=b.normalized),i!==b.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=b.gpuType),s!==b.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=b.count*t}const a=new n(r),l=new An(a,t,i);let _=0;for(let v=0;v<e.length;++v){const b=e[v];if(b.isInterleavedBufferAttribute){const x=_/t;for(let p=0,f=b.count;p<f;p++)for(let E=0;E<t;E++){const g=b.getComponent(p,E);l.setComponent(p+x,E,g)}}else a.set(b.array,_);_+=b.count*t}return s!==void 0&&(l.gpuType=s),l}const Jd={north:[6,4,0,2],east:[7,5,4,6],south:[3,1,5,7],west:[2,0,1,3],up:[2,3,7,6],down:[1,0,4,5]},eh=[0,1,2,0,2,3],th=new ke(-.52,.7,-.55).normalize(),ma={x:new ke(1,0,0),y:new ke(0,1,0),z:new ke(0,0,1)};function ro(e,n){const t=new Set;for(;n?.startsWith("#");){if(t.has(n))throw new Error(`Circular texture reference: ${n}`);t.add(n),n=e[n.slice(1)]}if(!n)throw new Error("Model has an unresolved texture.");return n.replace(/^minecraft:/,"")}function nh(e,n,t){const{from:i,to:s,rotation:r}=e,a=new ke(...r?.origin??[8,8,8]),l=new Un;if(r?.axis)l.setFromAxisAngle(ma[r.axis],Mt.degToRad(r.angle));else if(r){const P=[r.x??0,r.y??0,r.z??0].map(Mt.degToRad);l.setFromEuler(new oi(...P,"ZYX"))}const _=new ke(1,1,1);if(r?.rescale)for(const[P,D]of Object.entries(ma)){const U=D.clone().applyQuaternion(l);_[P]=1/Math.max(Math.abs(U.x),Math.abs(U.y),Math.abs(U.z))}const v=Jd[n].map(P=>new ke((P&4?s:i)[0],(P&2?s:i)[1],(P&1?s:i)[2]).sub(a).multiply(_).applyQuaternion(l).add(a)),[b,x,p,f]=t.uv??ih(i,s,n),E=[[b,x],[b,f],[p,f],[p,x]],g=Mt.euclideanModulo((t.rotation??0)/90,4),c=v.flatMap((P,D)=>{const[U,M]=E[(D+g)%4];return[U/16,1-M/16]}),o=v[1].clone().sub(v[0]).cross(v[2].clone().sub(v[0])).normalize(),S=Math.max(0,o.dot(th)),T=e.shade===!1?1:.61+.39*S,R=new gn;return R.setAttribute("position",new Tn(v.flatMap(P=>P.toArray()),3)),R.setAttribute("uv",new Tn(c,2)),R.setAttribute("color",new Tn(Array(12).fill(T),3)),R.setIndex(eh),R}function ih([e,n,t],[i,s,r],a){return{north:[16-i,16-s,16-e,16-n],east:[16-r,16-s,16-t,16-n],south:[e,16-s,i,16-n],west:[t,16-s,r,16-n],up:[e,t,i,r],down:[e,16-r,i,16-t]}[a]}function rh({data:e,width:n,height:t},i){const s=i.attributes.uv,r=Array.from({length:4},(x,p)=>s.getX(p)*n),a=Array.from({length:4},(x,p)=>(1-s.getY(p))*t),l=Math.floor(Math.min(...r)),_=Math.ceil(Math.max(...r)),v=Math.floor(Math.min(...a)),b=Math.ceil(Math.max(...a));for(let x=v;x<b;x+=1)for(let p=l;p<_;p+=1){const f=e[(x*n+p)*4+3];if(f>0&&f<255)return!0}return!1}function ah(e,n,t){const i=e.attributes.uv,s=(i.getX(0)+i.getX(2))/2,r=(i.getY(0)+i.getY(2))/2,a=1/(n*32),l=1/(t*32);for(let _=0;_<i.count;_+=1){const v=Mt.lerp(i.getX(_),s,a),b=Mt.lerp(i.getY(_),r,l);i.setXY(_,v,b)}}function oh(e,n){const t=new Li,i=new Map;for(const s of e.elements)for(const[r,a]of Object.entries(s.faces)){const l=ro(e.textures,a.texture);i.has(l)||i.set(l,[]),i.get(l).push(nh(s,r,a))}for(const[s,r]of i){const a=n.get(s),l=a.getContext("2d").getImageData(0,0,a.width,a.height),_=new $a(a);_.colorSpace=Ca,_.magFilter=Bt,_.minFilter=Bt,_.generateMipmaps=!1,r.forEach(x=>ah(x,a.width,a.height));const v=new Ln({map:_,vertexColors:!0,alphaTest:254.5/255});t.add(new bt(Qd(r),v));let b;for(const x of r){if(!rh(l,x)){x.dispose();continue}b||(b=new Ln({map:_,vertexColors:!0,transparent:!0,depthWrite:!1,alphaTest:.5/255}),b.onBeforeCompile=E=>{E.fragmentShader=E.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
if (diffuseColor.a >= 0.9980392) discard;`)}),x.computeBoundingBox();const p=x.boundingBox.getCenter(new ke);x.translate(-p.x,-p.y,-p.z);const f=new bt(x,b);f.position.copy(p),t.add(f)}}return t}function sh(e){const n=new Set,t=new Set;for(const i of e.children)i.geometry.dispose(),n.add(i.material),t.add(i.material.map);n.forEach(i=>i.dispose()),t.forEach(i=>i.dispose())}var Vn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function zn(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ai={exports:{}};var _a;function ch(){return _a||(_a=1,(function(e,n){(function(t){e.exports=t()})(function(){return(function t(i,s,r){function a(v,b){if(!s[v]){if(!i[v]){var x=typeof zn=="function"&&zn;if(!b&&x)return x(v,!0);if(l)return l(v,!0);var p=new Error("Cannot find module '"+v+"'");throw p.code="MODULE_NOT_FOUND",p}var f=s[v]={exports:{}};i[v][0].call(f.exports,function(E){var g=i[v][1][E];return a(g||E)},f,f.exports,t,i,s,r)}return s[v].exports}for(var l=typeof zn=="function"&&zn,_=0;_<r.length;_++)a(r[_]);return a})({1:[function(t,i,s){var r=t("./utils"),a=t("./support"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";s.encode=function(_){for(var v,b,x,p,f,E,g,c=[],o=0,S=_.length,T=S,R=r.getTypeOf(_)!=="string";o<_.length;)T=S-o,x=R?(v=_[o++],b=o<S?_[o++]:0,o<S?_[o++]:0):(v=_.charCodeAt(o++),b=o<S?_.charCodeAt(o++):0,o<S?_.charCodeAt(o++):0),p=v>>2,f=(3&v)<<4|b>>4,E=1<T?(15&b)<<2|x>>6:64,g=2<T?63&x:64,c.push(l.charAt(p)+l.charAt(f)+l.charAt(E)+l.charAt(g));return c.join("")},s.decode=function(_){var v,b,x,p,f,E,g=0,c=0,o="data:";if(_.substr(0,o.length)===o)throw new Error("Invalid base64 input, it looks like a data url.");var S,T=3*(_=_.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(_.charAt(_.length-1)===l.charAt(64)&&T--,_.charAt(_.length-2)===l.charAt(64)&&T--,T%1!=0)throw new Error("Invalid base64 input, bad content length.");for(S=a.uint8array?new Uint8Array(0|T):new Array(0|T);g<_.length;)v=l.indexOf(_.charAt(g++))<<2|(p=l.indexOf(_.charAt(g++)))>>4,b=(15&p)<<4|(f=l.indexOf(_.charAt(g++)))>>2,x=(3&f)<<6|(E=l.indexOf(_.charAt(g++))),S[c++]=v,f!==64&&(S[c++]=b),E!==64&&(S[c++]=x);return S}},{"./support":30,"./utils":32}],2:[function(t,i,s){var r=t("./external"),a=t("./stream/DataWorker"),l=t("./stream/Crc32Probe"),_=t("./stream/DataLengthProbe");function v(b,x,p,f,E){this.compressedSize=b,this.uncompressedSize=x,this.crc32=p,this.compression=f,this.compressedContent=E}v.prototype={getContentWorker:function(){var b=new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new _("data_length")),x=this;return b.on("end",function(){if(this.streamInfo.data_length!==x.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),b},getCompressedWorker:function(){return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},v.createWorkerFrom=function(b,x,p){return b.pipe(new l).pipe(new _("uncompressedSize")).pipe(x.compressWorker(p)).pipe(new _("compressedSize")).withStreamInfo("compression",x)},i.exports=v},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,i,s){var r=t("./stream/GenericWorker");s.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},s.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,i,s){var r=t("./utils"),a=(function(){for(var l,_=[],v=0;v<256;v++){l=v;for(var b=0;b<8;b++)l=1&l?3988292384^l>>>1:l>>>1;_[v]=l}return _})();i.exports=function(l,_){return l!==void 0&&l.length?r.getTypeOf(l)!=="string"?(function(v,b,x,p){var f=a,E=p+x;v^=-1;for(var g=p;g<E;g++)v=v>>>8^f[255&(v^b[g])];return-1^v})(0|_,l,l.length,0):(function(v,b,x,p){var f=a,E=p+x;v^=-1;for(var g=p;g<E;g++)v=v>>>8^f[255&(v^b.charCodeAt(g))];return-1^v})(0|_,l,l.length,0):0}},{"./utils":32}],5:[function(t,i,s){s.base64=!1,s.binary=!1,s.dir=!1,s.createFolders=!0,s.date=null,s.compression=null,s.compressionOptions=null,s.comment=null,s.unixPermissions=null,s.dosPermissions=null},{}],6:[function(t,i,s){var r=null;r=typeof Promise<"u"?Promise:t("lie"),i.exports={Promise:r}},{lie:37}],7:[function(t,i,s){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=t("pako"),l=t("./utils"),_=t("./stream/GenericWorker"),v=r?"uint8array":"array";function b(x,p){_.call(this,"FlateWorker/"+x),this._pako=null,this._pakoAction=x,this._pakoOptions=p,this.meta={}}s.magic="\b\0",l.inherits(b,_),b.prototype.processChunk=function(x){this.meta=x.meta,this._pako===null&&this._createPako(),this._pako.push(l.transformTo(v,x.data),!1)},b.prototype.flush=function(){_.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},b.prototype.cleanUp=function(){_.prototype.cleanUp.call(this),this._pako=null},b.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var x=this;this._pako.onData=function(p){x.push({data:p,meta:x.meta})}},s.compressWorker=function(x){return new b("Deflate",x)},s.uncompressWorker=function(){return new b("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,i,s){function r(f,E){var g,c="";for(g=0;g<E;g++)c+=String.fromCharCode(255&f),f>>>=8;return c}function a(f,E,g,c,o,S){var T,R,P=f.file,D=f.compression,U=S!==v.utf8encode,M=l.transformTo("string",S(P.name)),A=l.transformTo("string",v.utf8encode(P.name)),Y=P.comment,B=l.transformTo("string",S(Y)),C=l.transformTo("string",v.utf8encode(Y)),N=A.length!==P.name.length,d=C.length!==Y.length,F="",W="",O="",oe=P.dir,q=P.date,fe={crc32:0,compressedSize:0,uncompressedSize:0};E&&!g||(fe.crc32=f.crc32,fe.compressedSize=f.compressedSize,fe.uncompressedSize=f.uncompressedSize);var X=0;E&&(X|=8),U||!N&&!d||(X|=2048);var G=0,pe=0;oe&&(G|=16),o==="UNIX"?(pe=798,G|=(function(ue,ee){var de=ue;return ue||(de=ee?16893:33204),(65535&de)<<16})(P.unixPermissions,oe)):(pe=20,G|=(function(ue){return 63&(ue||0)})(P.dosPermissions)),T=q.getUTCHours(),T<<=6,T|=q.getUTCMinutes(),T<<=5,T|=q.getUTCSeconds()/2,R=q.getUTCFullYear()-1980,R<<=4,R|=q.getUTCMonth()+1,R<<=5,R|=q.getUTCDate(),N&&(W=r(1,1)+r(b(M),4)+A,F+="up"+r(W.length,2)+W),d&&(O=r(1,1)+r(b(B),4)+C,F+="uc"+r(O.length,2)+O);var me="";return me+=`
\0`,me+=r(X,2),me+=D.magic,me+=r(T,2),me+=r(R,2),me+=r(fe.crc32,4),me+=r(fe.compressedSize,4),me+=r(fe.uncompressedSize,4),me+=r(M.length,2),me+=r(F.length,2),{fileRecord:x.LOCAL_FILE_HEADER+me+M+F,dirRecord:x.CENTRAL_FILE_HEADER+r(pe,2)+me+r(B.length,2)+"\0\0\0\0"+r(G,4)+r(c,4)+M+F+B}}var l=t("../utils"),_=t("../stream/GenericWorker"),v=t("../utf8"),b=t("../crc32"),x=t("../signature");function p(f,E,g,c){_.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=E,this.zipPlatform=g,this.encodeFileName=c,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}l.inherits(p,_),p.prototype.push=function(f){var E=f.meta.percent||0,g=this.entriesCount,c=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,_.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:g?(E+100*(g-c-1))/g:100}}))},p.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var E=this.streamFiles&&!f.file.dir;if(E){var g=a(f,E,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(f){this.accumulate=!1;var E=this.streamFiles&&!f.file.dir,g=a(f,E,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),E)this.push({data:(function(c){return x.DATA_DESCRIPTOR+r(c.crc32,4)+r(c.compressedSize,4)+r(c.uncompressedSize,4)})(f),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var f=this.bytesWritten,E=0;E<this.dirRecords.length;E++)this.push({data:this.dirRecords[E],meta:{percent:100}});var g=this.bytesWritten-f,c=(function(o,S,T,R,P){var D=l.transformTo("string",P(R));return x.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(o,2)+r(o,2)+r(S,4)+r(T,4)+r(D.length,2)+D})(this.dirRecords.length,g,f,this.zipComment,this.encodeFileName);this.push({data:c,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(f){this._sources.push(f);var E=this;return f.on("data",function(g){E.processChunk(g)}),f.on("end",function(){E.closedSource(E.previous.streamInfo),E._sources.length?E.prepareNextSource():E.end()}),f.on("error",function(g){E.error(g)}),this},p.prototype.resume=function(){return!!_.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(f){var E=this._sources;if(!_.prototype.error.call(this,f))return!1;for(var g=0;g<E.length;g++)try{E[g].error(f)}catch{}return!0},p.prototype.lock=function(){_.prototype.lock.call(this);for(var f=this._sources,E=0;E<f.length;E++)f[E].lock()},i.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,i,s){var r=t("../compressions"),a=t("./ZipFileWorker");s.generateWorker=function(l,_,v){var b=new a(_.streamFiles,v,_.platform,_.encodeFileName),x=0;try{l.forEach(function(p,f){x++;var E=(function(S,T){var R=S||T,P=r[R];if(!P)throw new Error(R+" is not a valid compression method !");return P})(f.options.compression,_.compression),g=f.options.compressionOptions||_.compressionOptions||{},c=f.dir,o=f.date;f._compressWorker(E,g).withStreamInfo("file",{name:p,dir:c,date:o,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(b)}),b.entriesCount=x}catch(p){b.error(p)}return b}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,i,s){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new r;for(var l in this)typeof this[l]!="function"&&(a[l]=this[l]);return a}}(r.prototype=t("./object")).loadAsync=t("./load"),r.support=t("./support"),r.defaults=t("./defaults"),r.version="3.10.1",r.loadAsync=function(a,l){return new r().loadAsync(a,l)},r.external=t("./external"),i.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,i,s){var r=t("./utils"),a=t("./external"),l=t("./utf8"),_=t("./zipEntries"),v=t("./stream/Crc32Probe"),b=t("./nodejsUtils");function x(p){return new a.Promise(function(f,E){var g=p.decompressed.getContentWorker().pipe(new v);g.on("error",function(c){E(c)}).on("end",function(){g.streamInfo.crc32!==p.decompressed.crc32?E(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}i.exports=function(p,f){var E=this;return f=r.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:l.utf8decode}),b.isNode&&b.isStream(p)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",p,!0,f.optimizedBinaryString,f.base64).then(function(g){var c=new _(f);return c.load(g),c}).then(function(g){var c=[a.Promise.resolve(g)],o=g.files;if(f.checkCRC32)for(var S=0;S<o.length;S++)c.push(x(o[S]));return a.Promise.all(c)}).then(function(g){for(var c=g.shift(),o=c.files,S=0;S<o.length;S++){var T=o[S],R=T.fileNameStr,P=r.resolve(T.fileNameStr);E.file(P,T.decompressed,{binary:!0,optimizedBinaryString:!0,date:T.date,dir:T.dir,comment:T.fileCommentStr.length?T.fileCommentStr:null,unixPermissions:T.unixPermissions,dosPermissions:T.dosPermissions,createFolders:f.createFolders}),T.dir||(E.file(P).unsafeOriginalName=R)}return c.zipComment.length&&(E.comment=c.zipComment),E})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,i,s){var r=t("../utils"),a=t("../stream/GenericWorker");function l(_,v){a.call(this,"Nodejs stream input adapter for "+_),this._upstreamEnded=!1,this._bindStream(v)}r.inherits(l,a),l.prototype._bindStream=function(_){var v=this;(this._stream=_).pause(),_.on("data",function(b){v.push({data:b,meta:{percent:0}})}).on("error",function(b){v.isPaused?this.generatedError=b:v.error(b)}).on("end",function(){v.isPaused?v._upstreamEnded=!0:v.end()})},l.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},l.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=l},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,i,s){var r=t("readable-stream").Readable;function a(l,_,v){r.call(this,_),this._helper=l;var b=this;l.on("data",function(x,p){b.push(x)||b._helper.pause(),v&&v(p)}).on("error",function(x){b.emit("error",x)}).on("end",function(){b.push(null)})}t("../utils").inherits(a,r),a.prototype._read=function(){this._helper.resume()},i.exports=a},{"../utils":32,"readable-stream":16}],14:[function(t,i,s){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,a);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,a)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var a=new Buffer(r);return a.fill(0),a},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(t,i,s){function r(P,D,U){var M,A=l.getTypeOf(D),Y=l.extend(U||{},b);Y.date=Y.date||new Date,Y.compression!==null&&(Y.compression=Y.compression.toUpperCase()),typeof Y.unixPermissions=="string"&&(Y.unixPermissions=parseInt(Y.unixPermissions,8)),Y.unixPermissions&&16384&Y.unixPermissions&&(Y.dir=!0),Y.dosPermissions&&16&Y.dosPermissions&&(Y.dir=!0),Y.dir&&(P=o(P)),Y.createFolders&&(M=c(P))&&S.call(this,M,!0);var B=A==="string"&&Y.binary===!1&&Y.base64===!1;U&&U.binary!==void 0||(Y.binary=!B),(D instanceof x&&D.uncompressedSize===0||Y.dir||!D||D.length===0)&&(Y.base64=!1,Y.binary=!0,D="",Y.compression="STORE",A="string");var C=null;C=D instanceof x||D instanceof _?D:E.isNode&&E.isStream(D)?new g(P,D):l.prepareContent(P,D,Y.binary,Y.optimizedBinaryString,Y.base64);var N=new p(P,C,Y);this.files[P]=N}var a=t("./utf8"),l=t("./utils"),_=t("./stream/GenericWorker"),v=t("./stream/StreamHelper"),b=t("./defaults"),x=t("./compressedObject"),p=t("./zipObject"),f=t("./generate"),E=t("./nodejsUtils"),g=t("./nodejs/NodejsStreamInputAdapter"),c=function(P){P.slice(-1)==="/"&&(P=P.substring(0,P.length-1));var D=P.lastIndexOf("/");return 0<D?P.substring(0,D):""},o=function(P){return P.slice(-1)!=="/"&&(P+="/"),P},S=function(P,D){return D=D!==void 0?D:b.createFolders,P=o(P),this.files[P]||r.call(this,P,null,{dir:!0,createFolders:D}),this.files[P]};function T(P){return Object.prototype.toString.call(P)==="[object RegExp]"}var R={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(P){var D,U,M;for(D in this.files)M=this.files[D],(U=D.slice(this.root.length,D.length))&&D.slice(0,this.root.length)===this.root&&P(U,M)},filter:function(P){var D=[];return this.forEach(function(U,M){P(U,M)&&D.push(M)}),D},file:function(P,D,U){if(arguments.length!==1)return P=this.root+P,r.call(this,P,D,U),this;if(T(P)){var M=P;return this.filter(function(Y,B){return!B.dir&&M.test(Y)})}var A=this.files[this.root+P];return A&&!A.dir?A:null},folder:function(P){if(!P)return this;if(T(P))return this.filter(function(A,Y){return Y.dir&&P.test(A)});var D=this.root+P,U=S.call(this,D),M=this.clone();return M.root=U.name,M},remove:function(P){P=this.root+P;var D=this.files[P];if(D||(P.slice(-1)!=="/"&&(P+="/"),D=this.files[P]),D&&!D.dir)delete this.files[P];else for(var U=this.filter(function(A,Y){return Y.name.slice(0,P.length)===P}),M=0;M<U.length;M++)delete this.files[U[M].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(P){var D,U={};try{if((U=l.extend(P||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=U.type.toLowerCase(),U.compression=U.compression.toUpperCase(),U.type==="binarystring"&&(U.type="string"),!U.type)throw new Error("No output type specified.");l.checkSupport(U.type),U.platform!=="darwin"&&U.platform!=="freebsd"&&U.platform!=="linux"&&U.platform!=="sunos"||(U.platform="UNIX"),U.platform==="win32"&&(U.platform="DOS");var M=U.comment||this.comment||"";D=f.generateWorker(this,U,M)}catch(A){(D=new _("error")).error(A)}return new v(D,U.type||"string",U.mimeType)},generateAsync:function(P,D){return this.generateInternalStream(P).accumulate(D)},generateNodeStream:function(P,D){return(P=P||{}).type||(P.type="nodebuffer"),this.generateInternalStream(P).toNodejsStream(D)}};i.exports=R},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,i,s){i.exports=t("stream")},{stream:void 0}],17:[function(t,i,s){var r=t("./DataReader");function a(l){r.call(this,l);for(var _=0;_<this.data.length;_++)l[_]=255&l[_]}t("../utils").inherits(a,r),a.prototype.byteAt=function(l){return this.data[this.zero+l]},a.prototype.lastIndexOfSignature=function(l){for(var _=l.charCodeAt(0),v=l.charCodeAt(1),b=l.charCodeAt(2),x=l.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===_&&this.data[p+1]===v&&this.data[p+2]===b&&this.data[p+3]===x)return p-this.zero;return-1},a.prototype.readAndCheckSignature=function(l){var _=l.charCodeAt(0),v=l.charCodeAt(1),b=l.charCodeAt(2),x=l.charCodeAt(3),p=this.readData(4);return _===p[0]&&v===p[1]&&b===p[2]&&x===p[3]},a.prototype.readData=function(l){if(this.checkOffset(l),l===0)return[];var _=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,_},i.exports=a},{"../utils":32,"./DataReader":18}],18:[function(t,i,s){var r=t("../utils");function a(l){this.data=l,this.length=l.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(l){this.checkIndex(this.index+l)},checkIndex:function(l){if(this.length<this.zero+l||l<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+l+"). Corrupted zip ?")},setIndex:function(l){this.checkIndex(l),this.index=l},skip:function(l){this.setIndex(this.index+l)},byteAt:function(){},readInt:function(l){var _,v=0;for(this.checkOffset(l),_=this.index+l-1;_>=this.index;_--)v=(v<<8)+this.byteAt(_);return this.index+=l,v},readString:function(l){return r.transformTo("string",this.readData(l))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var l=this.readInt(4);return new Date(Date.UTC(1980+(l>>25&127),(l>>21&15)-1,l>>16&31,l>>11&31,l>>5&63,(31&l)<<1))}},i.exports=a},{"../utils":32}],19:[function(t,i,s){var r=t("./Uint8ArrayReader");function a(l){r.call(this,l)}t("../utils").inherits(a,r),a.prototype.readData=function(l){this.checkOffset(l);var _=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,_},i.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,i,s){var r=t("./DataReader");function a(l){r.call(this,l)}t("../utils").inherits(a,r),a.prototype.byteAt=function(l){return this.data.charCodeAt(this.zero+l)},a.prototype.lastIndexOfSignature=function(l){return this.data.lastIndexOf(l)-this.zero},a.prototype.readAndCheckSignature=function(l){return l===this.readData(4)},a.prototype.readData=function(l){this.checkOffset(l);var _=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,_},i.exports=a},{"../utils":32,"./DataReader":18}],21:[function(t,i,s){var r=t("./ArrayReader");function a(l){r.call(this,l)}t("../utils").inherits(a,r),a.prototype.readData=function(l){if(this.checkOffset(l),l===0)return new Uint8Array(0);var _=this.data.subarray(this.zero+this.index,this.zero+this.index+l);return this.index+=l,_},i.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(t,i,s){var r=t("../utils"),a=t("../support"),l=t("./ArrayReader"),_=t("./StringReader"),v=t("./NodeBufferReader"),b=t("./Uint8ArrayReader");i.exports=function(x){var p=r.getTypeOf(x);return r.checkSupport(p),p!=="string"||a.uint8array?p==="nodebuffer"?new v(x):a.uint8array?new b(r.transformTo("uint8array",x)):new l(r.transformTo("array",x)):new _(x)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,i,s){s.LOCAL_FILE_HEADER="PK",s.CENTRAL_FILE_HEADER="PK",s.CENTRAL_DIRECTORY_END="PK",s.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",s.ZIP64_CENTRAL_DIRECTORY_END="PK",s.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,i,s){var r=t("./GenericWorker"),a=t("../utils");function l(_){r.call(this,"ConvertWorker to "+_),this.destType=_}a.inherits(l,r),l.prototype.processChunk=function(_){this.push({data:a.transformTo(this.destType,_.data),meta:_.meta})},i.exports=l},{"../utils":32,"./GenericWorker":28}],25:[function(t,i,s){var r=t("./GenericWorker"),a=t("../crc32");function l(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(l,r),l.prototype.processChunk=function(_){this.streamInfo.crc32=a(_.data,this.streamInfo.crc32||0),this.push(_)},i.exports=l},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,i,s){var r=t("../utils"),a=t("./GenericWorker");function l(_){a.call(this,"DataLengthProbe for "+_),this.propName=_,this.withStreamInfo(_,0)}r.inherits(l,a),l.prototype.processChunk=function(_){if(_){var v=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=v+_.data.length}a.prototype.processChunk.call(this,_)},i.exports=l},{"../utils":32,"./GenericWorker":28}],27:[function(t,i,s){var r=t("../utils"),a=t("./GenericWorker");function l(_){a.call(this,"DataWorker");var v=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,_.then(function(b){v.dataIsReady=!0,v.data=b,v.max=b&&b.length||0,v.type=r.getTypeOf(b),v.isPaused||v._tickAndRepeat()},function(b){v.error(b)})}r.inherits(l,a),l.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},l.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},l.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},l.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var _=null,v=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":_=this.data.substring(this.index,v);break;case"uint8array":_=this.data.subarray(this.index,v);break;case"array":case"nodebuffer":_=this.data.slice(this.index,v)}return this.index=v,this.push({data:_,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=l},{"../utils":32,"./GenericWorker":28}],28:[function(t,i,s){function r(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,l){return this._listeners[a].push(l),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,l){if(this._listeners[a])for(var _=0;_<this._listeners[a].length;_++)this._listeners[a][_].call(this,l)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var l=this;return a.on("data",function(_){l.processChunk(_)}),a.on("end",function(){l.end()}),a.on("error",function(_){l.error(_)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,l){return this.extraStreamInfo[a]=l,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},i.exports=r},{}],29:[function(t,i,s){var r=t("../utils"),a=t("./ConvertWorker"),l=t("./GenericWorker"),_=t("../base64"),v=t("../support"),b=t("../external"),x=null;if(v.nodestream)try{x=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(E,g){return new b.Promise(function(c,o){var S=[],T=E._internalType,R=E._outputType,P=E._mimeType;E.on("data",function(D,U){S.push(D),g&&g(U)}).on("error",function(D){S=[],o(D)}).on("end",function(){try{var D=(function(U,M,A){switch(U){case"blob":return r.newBlob(r.transformTo("arraybuffer",M),A);case"base64":return _.encode(M);default:return r.transformTo(U,M)}})(R,(function(U,M){var A,Y=0,B=null,C=0;for(A=0;A<M.length;A++)C+=M[A].length;switch(U){case"string":return M.join("");case"array":return Array.prototype.concat.apply([],M);case"uint8array":for(B=new Uint8Array(C),A=0;A<M.length;A++)B.set(M[A],Y),Y+=M[A].length;return B;case"nodebuffer":return Buffer.concat(M);default:throw new Error("concat : unsupported type '"+U+"'")}})(T,S),P);c(D)}catch(U){o(U)}S=[]}).resume()})}function f(E,g,c){var o=g;switch(g){case"blob":case"arraybuffer":o="uint8array";break;case"base64":o="string"}try{this._internalType=o,this._outputType=g,this._mimeType=c,r.checkSupport(o),this._worker=E.pipe(new a(o)),E.lock()}catch(S){this._worker=new l("error"),this._worker.error(S)}}f.prototype={accumulate:function(E){return p(this,E)},on:function(E,g){var c=this;return E==="data"?this._worker.on(E,function(o){g.call(c,o.data,o.meta)}):this._worker.on(E,function(){r.delay(g,arguments,c)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(E){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new x(this,{objectMode:this._outputType!=="nodebuffer"},E)}},i.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,i,s){if(s.base64=!0,s.array=!0,s.string=!0,s.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",s.nodebuffer=typeof Buffer<"u",s.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")s.blob=!1;else{var r=new ArrayBuffer(0);try{s.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(r),s.blob=a.getBlob("application/zip").size===0}catch{s.blob=!1}}}try{s.nodestream=!!t("readable-stream").Readable}catch{s.nodestream=!1}},{"readable-stream":16}],31:[function(t,i,s){for(var r=t("./utils"),a=t("./support"),l=t("./nodejsUtils"),_=t("./stream/GenericWorker"),v=new Array(256),b=0;b<256;b++)v[b]=252<=b?6:248<=b?5:240<=b?4:224<=b?3:192<=b?2:1;v[254]=v[254]=1;function x(){_.call(this,"utf-8 decode"),this.leftOver=null}function p(){_.call(this,"utf-8 encode")}s.utf8encode=function(f){return a.nodebuffer?l.newBufferFrom(f,"utf-8"):(function(E){var g,c,o,S,T,R=E.length,P=0;for(S=0;S<R;S++)(64512&(c=E.charCodeAt(S)))==55296&&S+1<R&&(64512&(o=E.charCodeAt(S+1)))==56320&&(c=65536+(c-55296<<10)+(o-56320),S++),P+=c<128?1:c<2048?2:c<65536?3:4;for(g=a.uint8array?new Uint8Array(P):new Array(P),S=T=0;T<P;S++)(64512&(c=E.charCodeAt(S)))==55296&&S+1<R&&(64512&(o=E.charCodeAt(S+1)))==56320&&(c=65536+(c-55296<<10)+(o-56320),S++),c<128?g[T++]=c:(c<2048?g[T++]=192|c>>>6:(c<65536?g[T++]=224|c>>>12:(g[T++]=240|c>>>18,g[T++]=128|c>>>12&63),g[T++]=128|c>>>6&63),g[T++]=128|63&c);return g})(f)},s.utf8decode=function(f){return a.nodebuffer?r.transformTo("nodebuffer",f).toString("utf-8"):(function(E){var g,c,o,S,T=E.length,R=new Array(2*T);for(g=c=0;g<T;)if((o=E[g++])<128)R[c++]=o;else if(4<(S=v[o]))R[c++]=65533,g+=S-1;else{for(o&=S===2?31:S===3?15:7;1<S&&g<T;)o=o<<6|63&E[g++],S--;1<S?R[c++]=65533:o<65536?R[c++]=o:(o-=65536,R[c++]=55296|o>>10&1023,R[c++]=56320|1023&o)}return R.length!==c&&(R.subarray?R=R.subarray(0,c):R.length=c),r.applyFromCharCode(R)})(f=r.transformTo(a.uint8array?"uint8array":"array",f))},r.inherits(x,_),x.prototype.processChunk=function(f){var E=r.transformTo(a.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var g=E;(E=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),E.set(g,this.leftOver.length)}else E=this.leftOver.concat(E);this.leftOver=null}var c=(function(S,T){var R;for((T=T||S.length)>S.length&&(T=S.length),R=T-1;0<=R&&(192&S[R])==128;)R--;return R<0||R===0?T:R+v[S[R]]>T?R:T})(E),o=E;c!==E.length&&(a.uint8array?(o=E.subarray(0,c),this.leftOver=E.subarray(c,E.length)):(o=E.slice(0,c),this.leftOver=E.slice(c,E.length))),this.push({data:s.utf8decode(o),meta:f.meta})},x.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=x,r.inherits(p,_),p.prototype.processChunk=function(f){this.push({data:s.utf8encode(f.data),meta:f.meta})},s.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,i,s){var r=t("./support"),a=t("./base64"),l=t("./nodejsUtils"),_=t("./external");function v(g){return g}function b(g,c){for(var o=0;o<g.length;++o)c[o]=255&g.charCodeAt(o);return c}t("setimmediate"),s.newBlob=function(g,c){s.checkSupport("blob");try{return new Blob([g],{type:c})}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return o.append(g),o.getBlob(c)}catch{throw new Error("Bug : can't construct the Blob.")}}};var x={stringifyByChunk:function(g,c,o){var S=[],T=0,R=g.length;if(R<=o)return String.fromCharCode.apply(null,g);for(;T<R;)c==="array"||c==="nodebuffer"?S.push(String.fromCharCode.apply(null,g.slice(T,Math.min(T+o,R)))):S.push(String.fromCharCode.apply(null,g.subarray(T,Math.min(T+o,R)))),T+=o;return S.join("")},stringifyByChar:function(g){for(var c="",o=0;o<g.length;o++)c+=String.fromCharCode(g[o]);return c},applyCanBeUsed:{uint8array:(function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,l.allocBuffer(1)).length===1}catch{return!1}})()}};function p(g){var c=65536,o=s.getTypeOf(g),S=!0;if(o==="uint8array"?S=x.applyCanBeUsed.uint8array:o==="nodebuffer"&&(S=x.applyCanBeUsed.nodebuffer),S)for(;1<c;)try{return x.stringifyByChunk(g,o,c)}catch{c=Math.floor(c/2)}return x.stringifyByChar(g)}function f(g,c){for(var o=0;o<g.length;o++)c[o]=g[o];return c}s.applyFromCharCode=p;var E={};E.string={string:v,array:function(g){return b(g,new Array(g.length))},arraybuffer:function(g){return E.string.uint8array(g).buffer},uint8array:function(g){return b(g,new Uint8Array(g.length))},nodebuffer:function(g){return b(g,l.allocBuffer(g.length))}},E.array={string:p,array:v,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return l.newBufferFrom(g)}},E.arraybuffer={string:function(g){return p(new Uint8Array(g))},array:function(g){return f(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:v,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return l.newBufferFrom(new Uint8Array(g))}},E.uint8array={string:p,array:function(g){return f(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:v,nodebuffer:function(g){return l.newBufferFrom(g)}},E.nodebuffer={string:p,array:function(g){return f(g,new Array(g.length))},arraybuffer:function(g){return E.nodebuffer.uint8array(g).buffer},uint8array:function(g){return f(g,new Uint8Array(g.length))},nodebuffer:v},s.transformTo=function(g,c){if(c=c||"",!g)return c;s.checkSupport(g);var o=s.getTypeOf(c);return E[o][g](c)},s.resolve=function(g){for(var c=g.split("/"),o=[],S=0;S<c.length;S++){var T=c[S];T==="."||T===""&&S!==0&&S!==c.length-1||(T===".."?o.pop():o.push(T))}return o.join("/")},s.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":r.nodebuffer&&l.isBuffer(g)?"nodebuffer":r.uint8array&&g instanceof Uint8Array?"uint8array":r.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},s.checkSupport=function(g){if(!r[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},s.MAX_VALUE_16BITS=65535,s.MAX_VALUE_32BITS=-1,s.pretty=function(g){var c,o,S="";for(o=0;o<(g||"").length;o++)S+="\\x"+((c=g.charCodeAt(o))<16?"0":"")+c.toString(16).toUpperCase();return S},s.delay=function(g,c,o){setImmediate(function(){g.apply(o||null,c||[])})},s.inherits=function(g,c){function o(){}o.prototype=c.prototype,g.prototype=new o},s.extend=function(){var g,c,o={};for(g=0;g<arguments.length;g++)for(c in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],c)&&o[c]===void 0&&(o[c]=arguments[g][c]);return o},s.prepareContent=function(g,c,o,S,T){return _.Promise.resolve(c).then(function(R){return r.blob&&(R instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(R))!==-1)&&typeof FileReader<"u"?new _.Promise(function(P,D){var U=new FileReader;U.onload=function(M){P(M.target.result)},U.onerror=function(M){D(M.target.error)},U.readAsArrayBuffer(R)}):R}).then(function(R){var P=s.getTypeOf(R);return P?(P==="arraybuffer"?R=s.transformTo("uint8array",R):P==="string"&&(T?R=a.decode(R):o&&S!==!0&&(R=(function(D){return b(D,r.uint8array?new Uint8Array(D.length):new Array(D.length))})(R))),R):_.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,i,s){var r=t("./reader/readerFor"),a=t("./utils"),l=t("./signature"),_=t("./zipEntry"),v=t("./support");function b(x){this.files=[],this.loadOptions=x}b.prototype={checkSignature:function(x){if(!this.reader.readAndCheckSignature(x)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(p)+", expected "+a.pretty(x)+")")}},isSignature:function(x,p){var f=this.reader.index;this.reader.setIndex(x);var E=this.reader.readString(4)===p;return this.reader.setIndex(f),E},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var x=this.reader.readData(this.zipCommentLength),p=v.uint8array?"uint8array":"array",f=a.transformTo(p,x);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var x,p,f,E=this.zip64EndOfCentralSize-44;0<E;)x=this.reader.readInt(2),p=this.reader.readInt(4),f=this.reader.readData(p),this.zip64ExtensibleData[x]={id:x,length:p,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var x,p;for(x=0;x<this.files.length;x++)p=this.files[x],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(l.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var x;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(l.CENTRAL_FILE_HEADER);)(x=new _({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(x);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var x=this.reader.lastIndexOfSignature(l.CENTRAL_DIRECTORY_END);if(x<0)throw this.isSignature(0,l.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(x);var p=x;if(this.checkSignature(l.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(x=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(x),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,l.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var E=p-f;if(0<E)this.isSignature(p,l.CENTRAL_FILE_HEADER)||(this.reader.zero=E);else if(E<0)throw new Error("Corrupted zip: missing "+Math.abs(E)+" bytes.")},prepareReader:function(x){this.reader=r(x)},load:function(x){this.prepareReader(x),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=b},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,i,s){var r=t("./reader/readerFor"),a=t("./utils"),l=t("./compressedObject"),_=t("./crc32"),v=t("./utf8"),b=t("./compressions"),x=t("./support");function p(f,E){this.options=f,this.loadOptions=E}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var E,g;if(f.skip(22),this.fileNameLength=f.readInt(2),g=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((E=(function(c){for(var o in b)if(Object.prototype.hasOwnProperty.call(b,o)&&b[o].magic===c)return b[o];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new l(this.compressedSize,this.uncompressedSize,this.crc32,E,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var E=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(E),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=r(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var E,g,c,o=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<o;)E=f.readInt(2),g=f.readInt(2),c=f.readData(g),this.extraFields[E]={id:E,length:g,value:c};f.setIndex(o)},handleUTF8:function(){var f=x.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=v.utf8decode(this.fileName),this.fileCommentStr=v.utf8decode(this.fileComment);else{var E=this.findExtraFieldUnicodePath();if(E!==null)this.fileNameStr=E;else{var g=a.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var c=this.findExtraFieldUnicodeComment();if(c!==null)this.fileCommentStr=c;else{var o=a.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(o)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var E=r(f.value);return E.readInt(1)!==1||_(this.fileName)!==E.readInt(4)?null:v.utf8decode(E.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var E=r(f.value);return E.readInt(1)!==1||_(this.fileComment)!==E.readInt(4)?null:v.utf8decode(E.readData(f.length-5))}return null}},i.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,i,s){function r(E,g,c){this.name=E,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this.unixPermissions=c.unixPermissions,this.dosPermissions=c.dosPermissions,this._data=g,this._dataBinary=c.binary,this.options={compression:c.compression,compressionOptions:c.compressionOptions}}var a=t("./stream/StreamHelper"),l=t("./stream/DataWorker"),_=t("./utf8"),v=t("./compressedObject"),b=t("./stream/GenericWorker");r.prototype={internalStream:function(E){var g=null,c="string";try{if(!E)throw new Error("No output type specified.");var o=(c=E.toLowerCase())==="string"||c==="text";c!=="binarystring"&&c!=="text"||(c="string"),g=this._decompressWorker();var S=!this._dataBinary;S&&!o&&(g=g.pipe(new _.Utf8EncodeWorker)),!S&&o&&(g=g.pipe(new _.Utf8DecodeWorker))}catch(T){(g=new b("error")).error(T)}return new a(g,c,"")},async:function(E,g){return this.internalStream(E).accumulate(g)},nodeStream:function(E,g){return this.internalStream(E||"nodebuffer").toNodejsStream(g)},_compressWorker:function(E,g){if(this._data instanceof v&&this._data.compression.magic===E.magic)return this._data.getCompressedWorker();var c=this._decompressWorker();return this._dataBinary||(c=c.pipe(new _.Utf8EncodeWorker)),v.createWorkerFrom(c,E,g)},_decompressWorker:function(){return this._data instanceof v?this._data.getContentWorker():this._data instanceof b?this._data:new l(this._data)}};for(var x=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<x.length;f++)r.prototype[x[f]]=p;i.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,i,s){(function(r){var a,l,_=r.MutationObserver||r.WebKitMutationObserver;if(_){var v=0,b=new _(E),x=r.document.createTextNode("");b.observe(x,{characterData:!0}),a=function(){x.data=v=++v%2}}else if(r.setImmediate||r.MessageChannel===void 0)a="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var g=r.document.createElement("script");g.onreadystatechange=function(){E(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},r.document.documentElement.appendChild(g)}:function(){setTimeout(E,0)};else{var p=new r.MessageChannel;p.port1.onmessage=E,a=function(){p.port2.postMessage(0)}}var f=[];function E(){var g,c;l=!0;for(var o=f.length;o;){for(c=f,f=[],g=-1;++g<o;)c[g]();o=f.length}l=!1}i.exports=function(g){f.push(g)!==1||l||a()}}).call(this,typeof Vn<"u"?Vn:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,i,s){var r=t("immediate");function a(){}var l={},_=["REJECTED"],v=["FULFILLED"],b=["PENDING"];function x(o){if(typeof o!="function")throw new TypeError("resolver must be a function");this.state=b,this.queue=[],this.outcome=void 0,o!==a&&g(this,o)}function p(o,S,T){this.promise=o,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof T=="function"&&(this.onRejected=T,this.callRejected=this.otherCallRejected)}function f(o,S,T){r(function(){var R;try{R=S(T)}catch(P){return l.reject(o,P)}R===o?l.reject(o,new TypeError("Cannot resolve promise with itself")):l.resolve(o,R)})}function E(o){var S=o&&o.then;if(o&&(typeof o=="object"||typeof o=="function")&&typeof S=="function")return function(){S.apply(o,arguments)}}function g(o,S){var T=!1;function R(U){T||(T=!0,l.reject(o,U))}function P(U){T||(T=!0,l.resolve(o,U))}var D=c(function(){S(P,R)});D.status==="error"&&R(D.value)}function c(o,S){var T={};try{T.value=o(S),T.status="success"}catch(R){T.status="error",T.value=R}return T}(i.exports=x).prototype.finally=function(o){if(typeof o!="function")return this;var S=this.constructor;return this.then(function(T){return S.resolve(o()).then(function(){return T})},function(T){return S.resolve(o()).then(function(){throw T})})},x.prototype.catch=function(o){return this.then(null,o)},x.prototype.then=function(o,S){if(typeof o!="function"&&this.state===v||typeof S!="function"&&this.state===_)return this;var T=new this.constructor(a);return this.state!==b?f(T,this.state===v?o:S,this.outcome):this.queue.push(new p(T,o,S)),T},p.prototype.callFulfilled=function(o){l.resolve(this.promise,o)},p.prototype.otherCallFulfilled=function(o){f(this.promise,this.onFulfilled,o)},p.prototype.callRejected=function(o){l.reject(this.promise,o)},p.prototype.otherCallRejected=function(o){f(this.promise,this.onRejected,o)},l.resolve=function(o,S){var T=c(E,S);if(T.status==="error")return l.reject(o,T.value);var R=T.value;if(R)g(o,R);else{o.state=v,o.outcome=S;for(var P=-1,D=o.queue.length;++P<D;)o.queue[P].callFulfilled(S)}return o},l.reject=function(o,S){o.state=_,o.outcome=S;for(var T=-1,R=o.queue.length;++T<R;)o.queue[T].callRejected(S);return o},x.resolve=function(o){return o instanceof this?o:l.resolve(new this(a),o)},x.reject=function(o){var S=new this(a);return l.reject(S,o)},x.all=function(o){var S=this;if(Object.prototype.toString.call(o)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=o.length,R=!1;if(!T)return this.resolve([]);for(var P=new Array(T),D=0,U=-1,M=new this(a);++U<T;)A(o[U],U);return M;function A(Y,B){S.resolve(Y).then(function(C){P[B]=C,++D!==T||R||(R=!0,l.resolve(M,P))},function(C){R||(R=!0,l.reject(M,C))})}},x.race=function(o){var S=this;if(Object.prototype.toString.call(o)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=o.length,R=!1;if(!T)return this.resolve([]);for(var P=-1,D=new this(a);++P<T;)U=o[P],S.resolve(U).then(function(M){R||(R=!0,l.resolve(D,M))},function(M){R||(R=!0,l.reject(D,M))});var U;return D}},{immediate:36}],38:[function(t,i,s){var r={};(0,t("./lib/utils/common").assign)(r,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),i.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,i,s){var r=t("./zlib/deflate"),a=t("./utils/common"),l=t("./utils/strings"),_=t("./zlib/messages"),v=t("./zlib/zstream"),b=Object.prototype.toString,x=0,p=-1,f=0,E=8;function g(o){if(!(this instanceof g))return new g(o);this.options=a.assign({level:p,method:E,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},o||{});var S=this.options;S.raw&&0<S.windowBits?S.windowBits=-S.windowBits:S.gzip&&0<S.windowBits&&S.windowBits<16&&(S.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new v,this.strm.avail_out=0;var T=r.deflateInit2(this.strm,S.level,S.method,S.windowBits,S.memLevel,S.strategy);if(T!==x)throw new Error(_[T]);if(S.header&&r.deflateSetHeader(this.strm,S.header),S.dictionary){var R;if(R=typeof S.dictionary=="string"?l.string2buf(S.dictionary):b.call(S.dictionary)==="[object ArrayBuffer]"?new Uint8Array(S.dictionary):S.dictionary,(T=r.deflateSetDictionary(this.strm,R))!==x)throw new Error(_[T]);this._dict_set=!0}}function c(o,S){var T=new g(S);if(T.push(o,!0),T.err)throw T.msg||_[T.err];return T.result}g.prototype.push=function(o,S){var T,R,P=this.strm,D=this.options.chunkSize;if(this.ended)return!1;R=S===~~S?S:S===!0?4:0,typeof o=="string"?P.input=l.string2buf(o):b.call(o)==="[object ArrayBuffer]"?P.input=new Uint8Array(o):P.input=o,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new a.Buf8(D),P.next_out=0,P.avail_out=D),(T=r.deflate(P,R))!==1&&T!==x)return this.onEnd(T),!(this.ended=!0);P.avail_out!==0&&(P.avail_in!==0||R!==4&&R!==2)||(this.options.to==="string"?this.onData(l.buf2binstring(a.shrinkBuf(P.output,P.next_out))):this.onData(a.shrinkBuf(P.output,P.next_out)))}while((0<P.avail_in||P.avail_out===0)&&T!==1);return R===4?(T=r.deflateEnd(this.strm),this.onEnd(T),this.ended=!0,T===x):R!==2||(this.onEnd(x),!(P.avail_out=0))},g.prototype.onData=function(o){this.chunks.push(o)},g.prototype.onEnd=function(o){o===x&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=o,this.msg=this.strm.msg},s.Deflate=g,s.deflate=c,s.deflateRaw=function(o,S){return(S=S||{}).raw=!0,c(o,S)},s.gzip=function(o,S){return(S=S||{}).gzip=!0,c(o,S)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,i,s){var r=t("./zlib/inflate"),a=t("./utils/common"),l=t("./utils/strings"),_=t("./zlib/constants"),v=t("./zlib/messages"),b=t("./zlib/zstream"),x=t("./zlib/gzheader"),p=Object.prototype.toString;function f(g){if(!(this instanceof f))return new f(g);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},g||{});var c=this.options;c.raw&&0<=c.windowBits&&c.windowBits<16&&(c.windowBits=-c.windowBits,c.windowBits===0&&(c.windowBits=-15)),!(0<=c.windowBits&&c.windowBits<16)||g&&g.windowBits||(c.windowBits+=32),15<c.windowBits&&c.windowBits<48&&(15&c.windowBits)==0&&(c.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new b,this.strm.avail_out=0;var o=r.inflateInit2(this.strm,c.windowBits);if(o!==_.Z_OK)throw new Error(v[o]);this.header=new x,r.inflateGetHeader(this.strm,this.header)}function E(g,c){var o=new f(c);if(o.push(g,!0),o.err)throw o.msg||v[o.err];return o.result}f.prototype.push=function(g,c){var o,S,T,R,P,D,U=this.strm,M=this.options.chunkSize,A=this.options.dictionary,Y=!1;if(this.ended)return!1;S=c===~~c?c:c===!0?_.Z_FINISH:_.Z_NO_FLUSH,typeof g=="string"?U.input=l.binstring2buf(g):p.call(g)==="[object ArrayBuffer]"?U.input=new Uint8Array(g):U.input=g,U.next_in=0,U.avail_in=U.input.length;do{if(U.avail_out===0&&(U.output=new a.Buf8(M),U.next_out=0,U.avail_out=M),(o=r.inflate(U,_.Z_NO_FLUSH))===_.Z_NEED_DICT&&A&&(D=typeof A=="string"?l.string2buf(A):p.call(A)==="[object ArrayBuffer]"?new Uint8Array(A):A,o=r.inflateSetDictionary(this.strm,D)),o===_.Z_BUF_ERROR&&Y===!0&&(o=_.Z_OK,Y=!1),o!==_.Z_STREAM_END&&o!==_.Z_OK)return this.onEnd(o),!(this.ended=!0);U.next_out&&(U.avail_out!==0&&o!==_.Z_STREAM_END&&(U.avail_in!==0||S!==_.Z_FINISH&&S!==_.Z_SYNC_FLUSH)||(this.options.to==="string"?(T=l.utf8border(U.output,U.next_out),R=U.next_out-T,P=l.buf2string(U.output,T),U.next_out=R,U.avail_out=M-R,R&&a.arraySet(U.output,U.output,T,R,0),this.onData(P)):this.onData(a.shrinkBuf(U.output,U.next_out)))),U.avail_in===0&&U.avail_out===0&&(Y=!0)}while((0<U.avail_in||U.avail_out===0)&&o!==_.Z_STREAM_END);return o===_.Z_STREAM_END&&(S=_.Z_FINISH),S===_.Z_FINISH?(o=r.inflateEnd(this.strm),this.onEnd(o),this.ended=!0,o===_.Z_OK):S!==_.Z_SYNC_FLUSH||(this.onEnd(_.Z_OK),!(U.avail_out=0))},f.prototype.onData=function(g){this.chunks.push(g)},f.prototype.onEnd=function(g){g===_.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},s.Inflate=f,s.inflate=E,s.inflateRaw=function(g,c){return(c=c||{}).raw=!0,E(g,c)},s.ungzip=E},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,i,s){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";s.assign=function(_){for(var v=Array.prototype.slice.call(arguments,1);v.length;){var b=v.shift();if(b){if(typeof b!="object")throw new TypeError(b+"must be non-object");for(var x in b)b.hasOwnProperty(x)&&(_[x]=b[x])}}return _},s.shrinkBuf=function(_,v){return _.length===v?_:_.subarray?_.subarray(0,v):(_.length=v,_)};var a={arraySet:function(_,v,b,x,p){if(v.subarray&&_.subarray)_.set(v.subarray(b,b+x),p);else for(var f=0;f<x;f++)_[p+f]=v[b+f]},flattenChunks:function(_){var v,b,x,p,f,E;for(v=x=0,b=_.length;v<b;v++)x+=_[v].length;for(E=new Uint8Array(x),v=p=0,b=_.length;v<b;v++)f=_[v],E.set(f,p),p+=f.length;return E}},l={arraySet:function(_,v,b,x,p){for(var f=0;f<x;f++)_[p+f]=v[b+f]},flattenChunks:function(_){return[].concat.apply([],_)}};s.setTyped=function(_){_?(s.Buf8=Uint8Array,s.Buf16=Uint16Array,s.Buf32=Int32Array,s.assign(s,a)):(s.Buf8=Array,s.Buf16=Array,s.Buf32=Array,s.assign(s,l))},s.setTyped(r)},{}],42:[function(t,i,s){var r=t("./common"),a=!0,l=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{l=!1}for(var _=new r.Buf8(256),v=0;v<256;v++)_[v]=252<=v?6:248<=v?5:240<=v?4:224<=v?3:192<=v?2:1;function b(x,p){if(p<65537&&(x.subarray&&l||!x.subarray&&a))return String.fromCharCode.apply(null,r.shrinkBuf(x,p));for(var f="",E=0;E<p;E++)f+=String.fromCharCode(x[E]);return f}_[254]=_[254]=1,s.string2buf=function(x){var p,f,E,g,c,o=x.length,S=0;for(g=0;g<o;g++)(64512&(f=x.charCodeAt(g)))==55296&&g+1<o&&(64512&(E=x.charCodeAt(g+1)))==56320&&(f=65536+(f-55296<<10)+(E-56320),g++),S+=f<128?1:f<2048?2:f<65536?3:4;for(p=new r.Buf8(S),g=c=0;c<S;g++)(64512&(f=x.charCodeAt(g)))==55296&&g+1<o&&(64512&(E=x.charCodeAt(g+1)))==56320&&(f=65536+(f-55296<<10)+(E-56320),g++),f<128?p[c++]=f:(f<2048?p[c++]=192|f>>>6:(f<65536?p[c++]=224|f>>>12:(p[c++]=240|f>>>18,p[c++]=128|f>>>12&63),p[c++]=128|f>>>6&63),p[c++]=128|63&f);return p},s.buf2binstring=function(x){return b(x,x.length)},s.binstring2buf=function(x){for(var p=new r.Buf8(x.length),f=0,E=p.length;f<E;f++)p[f]=x.charCodeAt(f);return p},s.buf2string=function(x,p){var f,E,g,c,o=p||x.length,S=new Array(2*o);for(f=E=0;f<o;)if((g=x[f++])<128)S[E++]=g;else if(4<(c=_[g]))S[E++]=65533,f+=c-1;else{for(g&=c===2?31:c===3?15:7;1<c&&f<o;)g=g<<6|63&x[f++],c--;1<c?S[E++]=65533:g<65536?S[E++]=g:(g-=65536,S[E++]=55296|g>>10&1023,S[E++]=56320|1023&g)}return b(S,E)},s.utf8border=function(x,p){var f;for((p=p||x.length)>x.length&&(p=x.length),f=p-1;0<=f&&(192&x[f])==128;)f--;return f<0||f===0?p:f+_[x[f]]>p?f:p}},{"./common":41}],43:[function(t,i,s){i.exports=function(r,a,l,_){for(var v=65535&r|0,b=r>>>16&65535|0,x=0;l!==0;){for(l-=x=2e3<l?2e3:l;b=b+(v=v+a[_++]|0)|0,--x;);v%=65521,b%=65521}return v|b<<16|0}},{}],44:[function(t,i,s){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,i,s){var r=(function(){for(var a,l=[],_=0;_<256;_++){a=_;for(var v=0;v<8;v++)a=1&a?3988292384^a>>>1:a>>>1;l[_]=a}return l})();i.exports=function(a,l,_,v){var b=r,x=v+_;a^=-1;for(var p=v;p<x;p++)a=a>>>8^b[255&(a^l[p])];return-1^a}},{}],46:[function(t,i,s){var r,a=t("../utils/common"),l=t("./trees"),_=t("./adler32"),v=t("./crc32"),b=t("./messages"),x=0,p=4,f=0,E=-2,g=-1,c=4,o=2,S=8,T=9,R=286,P=30,D=19,U=2*R+1,M=15,A=3,Y=258,B=Y+A+1,C=42,N=113,d=1,F=2,W=3,O=4;function oe(u,j){return u.msg=b[j],j}function q(u){return(u<<1)-(4<u?9:0)}function fe(u){for(var j=u.length;0<=--j;)u[j]=0}function X(u){var j=u.state,V=j.pending;V>u.avail_out&&(V=u.avail_out),V!==0&&(a.arraySet(u.output,j.pending_buf,j.pending_out,V,u.next_out),u.next_out+=V,j.pending_out+=V,u.total_out+=V,u.avail_out-=V,j.pending-=V,j.pending===0&&(j.pending_out=0))}function G(u,j){l._tr_flush_block(u,0<=u.block_start?u.block_start:-1,u.strstart-u.block_start,j),u.block_start=u.strstart,X(u.strm)}function pe(u,j){u.pending_buf[u.pending++]=j}function me(u,j){u.pending_buf[u.pending++]=j>>>8&255,u.pending_buf[u.pending++]=255&j}function ue(u,j){var V,L,h=u.max_chain_length,H=u.strstart,ne=u.prev_length,re=u.nice_match,k=u.strstart>u.w_size-B?u.strstart-(u.w_size-B):0,w=u.window,m=u.w_mask,I=u.prev,Z=u.strstart+Y,ie=w[H+ne-1],$=w[H+ne];u.prev_length>=u.good_match&&(h>>=2),re>u.lookahead&&(re=u.lookahead);do if(w[(V=j)+ne]===$&&w[V+ne-1]===ie&&w[V]===w[H]&&w[++V]===w[H+1]){H+=2,V++;do;while(w[++H]===w[++V]&&w[++H]===w[++V]&&w[++H]===w[++V]&&w[++H]===w[++V]&&w[++H]===w[++V]&&w[++H]===w[++V]&&w[++H]===w[++V]&&w[++H]===w[++V]&&H<Z);if(L=Y-(Z-H),H=Z-Y,ne<L){if(u.match_start=j,re<=(ne=L))break;ie=w[H+ne-1],$=w[H+ne]}}while((j=I[j&m])>k&&--h!=0);return ne<=u.lookahead?ne:u.lookahead}function ee(u){var j,V,L,h,H,ne,re,k,w,m,I=u.w_size;do{if(h=u.window_size-u.lookahead-u.strstart,u.strstart>=I+(I-B)){for(a.arraySet(u.window,u.window,I,I,0),u.match_start-=I,u.strstart-=I,u.block_start-=I,j=V=u.hash_size;L=u.head[--j],u.head[j]=I<=L?L-I:0,--V;);for(j=V=I;L=u.prev[--j],u.prev[j]=I<=L?L-I:0,--V;);h+=I}if(u.strm.avail_in===0)break;if(ne=u.strm,re=u.window,k=u.strstart+u.lookahead,w=h,m=void 0,m=ne.avail_in,w<m&&(m=w),V=m===0?0:(ne.avail_in-=m,a.arraySet(re,ne.input,ne.next_in,m,k),ne.state.wrap===1?ne.adler=_(ne.adler,re,m,k):ne.state.wrap===2&&(ne.adler=v(ne.adler,re,m,k)),ne.next_in+=m,ne.total_in+=m,m),u.lookahead+=V,u.lookahead+u.insert>=A)for(H=u.strstart-u.insert,u.ins_h=u.window[H],u.ins_h=(u.ins_h<<u.hash_shift^u.window[H+1])&u.hash_mask;u.insert&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[H+A-1])&u.hash_mask,u.prev[H&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=H,H++,u.insert--,!(u.lookahead+u.insert<A)););}while(u.lookahead<B&&u.strm.avail_in!==0)}function de(u,j){for(var V,L;;){if(u.lookahead<B){if(ee(u),u.lookahead<B&&j===x)return d;if(u.lookahead===0)break}if(V=0,u.lookahead>=A&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+A-1])&u.hash_mask,V=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),V!==0&&u.strstart-V<=u.w_size-B&&(u.match_length=ue(u,V)),u.match_length>=A)if(L=l._tr_tally(u,u.strstart-u.match_start,u.match_length-A),u.lookahead-=u.match_length,u.match_length<=u.max_lazy_match&&u.lookahead>=A){for(u.match_length--;u.strstart++,u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+A-1])&u.hash_mask,V=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart,--u.match_length!=0;);u.strstart++}else u.strstart+=u.match_length,u.match_length=0,u.ins_h=u.window[u.strstart],u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+1])&u.hash_mask;else L=l._tr_tally(u,0,u.window[u.strstart]),u.lookahead--,u.strstart++;if(L&&(G(u,!1),u.strm.avail_out===0))return d}return u.insert=u.strstart<A-1?u.strstart:A-1,j===p?(G(u,!0),u.strm.avail_out===0?W:O):u.last_lit&&(G(u,!1),u.strm.avail_out===0)?d:F}function se(u,j){for(var V,L,h;;){if(u.lookahead<B){if(ee(u),u.lookahead<B&&j===x)return d;if(u.lookahead===0)break}if(V=0,u.lookahead>=A&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+A-1])&u.hash_mask,V=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),u.prev_length=u.match_length,u.prev_match=u.match_start,u.match_length=A-1,V!==0&&u.prev_length<u.max_lazy_match&&u.strstart-V<=u.w_size-B&&(u.match_length=ue(u,V),u.match_length<=5&&(u.strategy===1||u.match_length===A&&4096<u.strstart-u.match_start)&&(u.match_length=A-1)),u.prev_length>=A&&u.match_length<=u.prev_length){for(h=u.strstart+u.lookahead-A,L=l._tr_tally(u,u.strstart-1-u.prev_match,u.prev_length-A),u.lookahead-=u.prev_length-1,u.prev_length-=2;++u.strstart<=h&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+A-1])&u.hash_mask,V=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),--u.prev_length!=0;);if(u.match_available=0,u.match_length=A-1,u.strstart++,L&&(G(u,!1),u.strm.avail_out===0))return d}else if(u.match_available){if((L=l._tr_tally(u,0,u.window[u.strstart-1]))&&G(u,!1),u.strstart++,u.lookahead--,u.strm.avail_out===0)return d}else u.match_available=1,u.strstart++,u.lookahead--}return u.match_available&&(L=l._tr_tally(u,0,u.window[u.strstart-1]),u.match_available=0),u.insert=u.strstart<A-1?u.strstart:A-1,j===p?(G(u,!0),u.strm.avail_out===0?W:O):u.last_lit&&(G(u,!1),u.strm.avail_out===0)?d:F}function Ee(u,j,V,L,h){this.good_length=u,this.max_lazy=j,this.nice_length=V,this.max_chain=L,this.func=h}function Ae(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=S,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*U),this.dyn_dtree=new a.Buf16(2*(2*P+1)),this.bl_tree=new a.Buf16(2*(2*D+1)),fe(this.dyn_ltree),fe(this.dyn_dtree),fe(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(M+1),this.heap=new a.Buf16(2*R+1),fe(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*R+1),fe(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ce(u){var j;return u&&u.state?(u.total_in=u.total_out=0,u.data_type=o,(j=u.state).pending=0,j.pending_out=0,j.wrap<0&&(j.wrap=-j.wrap),j.status=j.wrap?C:N,u.adler=j.wrap===2?0:1,j.last_flush=x,l._tr_init(j),f):oe(u,E)}function qe(u){var j=Ce(u);return j===f&&(function(V){V.window_size=2*V.w_size,fe(V.head),V.max_lazy_match=r[V.level].max_lazy,V.good_match=r[V.level].good_length,V.nice_match=r[V.level].nice_length,V.max_chain_length=r[V.level].max_chain,V.strstart=0,V.block_start=0,V.lookahead=0,V.insert=0,V.match_length=V.prev_length=A-1,V.match_available=0,V.ins_h=0})(u.state),j}function ce(u,j,V,L,h,H){if(!u)return E;var ne=1;if(j===g&&(j=6),L<0?(ne=0,L=-L):15<L&&(ne=2,L-=16),h<1||T<h||V!==S||L<8||15<L||j<0||9<j||H<0||c<H)return oe(u,E);L===8&&(L=9);var re=new Ae;return(u.state=re).strm=u,re.wrap=ne,re.gzhead=null,re.w_bits=L,re.w_size=1<<re.w_bits,re.w_mask=re.w_size-1,re.hash_bits=h+7,re.hash_size=1<<re.hash_bits,re.hash_mask=re.hash_size-1,re.hash_shift=~~((re.hash_bits+A-1)/A),re.window=new a.Buf8(2*re.w_size),re.head=new a.Buf16(re.hash_size),re.prev=new a.Buf16(re.w_size),re.lit_bufsize=1<<h+6,re.pending_buf_size=4*re.lit_bufsize,re.pending_buf=new a.Buf8(re.pending_buf_size),re.d_buf=1*re.lit_bufsize,re.l_buf=3*re.lit_bufsize,re.level=j,re.strategy=H,re.method=V,qe(u)}r=[new Ee(0,0,0,0,function(u,j){var V=65535;for(V>u.pending_buf_size-5&&(V=u.pending_buf_size-5);;){if(u.lookahead<=1){if(ee(u),u.lookahead===0&&j===x)return d;if(u.lookahead===0)break}u.strstart+=u.lookahead,u.lookahead=0;var L=u.block_start+V;if((u.strstart===0||u.strstart>=L)&&(u.lookahead=u.strstart-L,u.strstart=L,G(u,!1),u.strm.avail_out===0)||u.strstart-u.block_start>=u.w_size-B&&(G(u,!1),u.strm.avail_out===0))return d}return u.insert=0,j===p?(G(u,!0),u.strm.avail_out===0?W:O):(u.strstart>u.block_start&&(G(u,!1),u.strm.avail_out),d)}),new Ee(4,4,8,4,de),new Ee(4,5,16,8,de),new Ee(4,6,32,32,de),new Ee(4,4,16,16,se),new Ee(8,16,32,32,se),new Ee(8,16,128,128,se),new Ee(8,32,128,256,se),new Ee(32,128,258,1024,se),new Ee(32,258,258,4096,se)],s.deflateInit=function(u,j){return ce(u,j,S,15,8,0)},s.deflateInit2=ce,s.deflateReset=qe,s.deflateResetKeep=Ce,s.deflateSetHeader=function(u,j){return u&&u.state?u.state.wrap!==2?E:(u.state.gzhead=j,f):E},s.deflate=function(u,j){var V,L,h,H;if(!u||!u.state||5<j||j<0)return u?oe(u,E):E;if(L=u.state,!u.output||!u.input&&u.avail_in!==0||L.status===666&&j!==p)return oe(u,u.avail_out===0?-5:E);if(L.strm=u,V=L.last_flush,L.last_flush=j,L.status===C)if(L.wrap===2)u.adler=0,pe(L,31),pe(L,139),pe(L,8),L.gzhead?(pe(L,(L.gzhead.text?1:0)+(L.gzhead.hcrc?2:0)+(L.gzhead.extra?4:0)+(L.gzhead.name?8:0)+(L.gzhead.comment?16:0)),pe(L,255&L.gzhead.time),pe(L,L.gzhead.time>>8&255),pe(L,L.gzhead.time>>16&255),pe(L,L.gzhead.time>>24&255),pe(L,L.level===9?2:2<=L.strategy||L.level<2?4:0),pe(L,255&L.gzhead.os),L.gzhead.extra&&L.gzhead.extra.length&&(pe(L,255&L.gzhead.extra.length),pe(L,L.gzhead.extra.length>>8&255)),L.gzhead.hcrc&&(u.adler=v(u.adler,L.pending_buf,L.pending,0)),L.gzindex=0,L.status=69):(pe(L,0),pe(L,0),pe(L,0),pe(L,0),pe(L,0),pe(L,L.level===9?2:2<=L.strategy||L.level<2?4:0),pe(L,3),L.status=N);else{var ne=S+(L.w_bits-8<<4)<<8;ne|=(2<=L.strategy||L.level<2?0:L.level<6?1:L.level===6?2:3)<<6,L.strstart!==0&&(ne|=32),ne+=31-ne%31,L.status=N,me(L,ne),L.strstart!==0&&(me(L,u.adler>>>16),me(L,65535&u.adler)),u.adler=1}if(L.status===69)if(L.gzhead.extra){for(h=L.pending;L.gzindex<(65535&L.gzhead.extra.length)&&(L.pending!==L.pending_buf_size||(L.gzhead.hcrc&&L.pending>h&&(u.adler=v(u.adler,L.pending_buf,L.pending-h,h)),X(u),h=L.pending,L.pending!==L.pending_buf_size));)pe(L,255&L.gzhead.extra[L.gzindex]),L.gzindex++;L.gzhead.hcrc&&L.pending>h&&(u.adler=v(u.adler,L.pending_buf,L.pending-h,h)),L.gzindex===L.gzhead.extra.length&&(L.gzindex=0,L.status=73)}else L.status=73;if(L.status===73)if(L.gzhead.name){h=L.pending;do{if(L.pending===L.pending_buf_size&&(L.gzhead.hcrc&&L.pending>h&&(u.adler=v(u.adler,L.pending_buf,L.pending-h,h)),X(u),h=L.pending,L.pending===L.pending_buf_size)){H=1;break}H=L.gzindex<L.gzhead.name.length?255&L.gzhead.name.charCodeAt(L.gzindex++):0,pe(L,H)}while(H!==0);L.gzhead.hcrc&&L.pending>h&&(u.adler=v(u.adler,L.pending_buf,L.pending-h,h)),H===0&&(L.gzindex=0,L.status=91)}else L.status=91;if(L.status===91)if(L.gzhead.comment){h=L.pending;do{if(L.pending===L.pending_buf_size&&(L.gzhead.hcrc&&L.pending>h&&(u.adler=v(u.adler,L.pending_buf,L.pending-h,h)),X(u),h=L.pending,L.pending===L.pending_buf_size)){H=1;break}H=L.gzindex<L.gzhead.comment.length?255&L.gzhead.comment.charCodeAt(L.gzindex++):0,pe(L,H)}while(H!==0);L.gzhead.hcrc&&L.pending>h&&(u.adler=v(u.adler,L.pending_buf,L.pending-h,h)),H===0&&(L.status=103)}else L.status=103;if(L.status===103&&(L.gzhead.hcrc?(L.pending+2>L.pending_buf_size&&X(u),L.pending+2<=L.pending_buf_size&&(pe(L,255&u.adler),pe(L,u.adler>>8&255),u.adler=0,L.status=N)):L.status=N),L.pending!==0){if(X(u),u.avail_out===0)return L.last_flush=-1,f}else if(u.avail_in===0&&q(j)<=q(V)&&j!==p)return oe(u,-5);if(L.status===666&&u.avail_in!==0)return oe(u,-5);if(u.avail_in!==0||L.lookahead!==0||j!==x&&L.status!==666){var re=L.strategy===2?(function(k,w){for(var m;;){if(k.lookahead===0&&(ee(k),k.lookahead===0)){if(w===x)return d;break}if(k.match_length=0,m=l._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++,m&&(G(k,!1),k.strm.avail_out===0))return d}return k.insert=0,w===p?(G(k,!0),k.strm.avail_out===0?W:O):k.last_lit&&(G(k,!1),k.strm.avail_out===0)?d:F})(L,j):L.strategy===3?(function(k,w){for(var m,I,Z,ie,$=k.window;;){if(k.lookahead<=Y){if(ee(k),k.lookahead<=Y&&w===x)return d;if(k.lookahead===0)break}if(k.match_length=0,k.lookahead>=A&&0<k.strstart&&(I=$[Z=k.strstart-1])===$[++Z]&&I===$[++Z]&&I===$[++Z]){ie=k.strstart+Y;do;while(I===$[++Z]&&I===$[++Z]&&I===$[++Z]&&I===$[++Z]&&I===$[++Z]&&I===$[++Z]&&I===$[++Z]&&I===$[++Z]&&Z<ie);k.match_length=Y-(ie-Z),k.match_length>k.lookahead&&(k.match_length=k.lookahead)}if(k.match_length>=A?(m=l._tr_tally(k,1,k.match_length-A),k.lookahead-=k.match_length,k.strstart+=k.match_length,k.match_length=0):(m=l._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++),m&&(G(k,!1),k.strm.avail_out===0))return d}return k.insert=0,w===p?(G(k,!0),k.strm.avail_out===0?W:O):k.last_lit&&(G(k,!1),k.strm.avail_out===0)?d:F})(L,j):r[L.level].func(L,j);if(re!==W&&re!==O||(L.status=666),re===d||re===W)return u.avail_out===0&&(L.last_flush=-1),f;if(re===F&&(j===1?l._tr_align(L):j!==5&&(l._tr_stored_block(L,0,0,!1),j===3&&(fe(L.head),L.lookahead===0&&(L.strstart=0,L.block_start=0,L.insert=0))),X(u),u.avail_out===0))return L.last_flush=-1,f}return j!==p?f:L.wrap<=0?1:(L.wrap===2?(pe(L,255&u.adler),pe(L,u.adler>>8&255),pe(L,u.adler>>16&255),pe(L,u.adler>>24&255),pe(L,255&u.total_in),pe(L,u.total_in>>8&255),pe(L,u.total_in>>16&255),pe(L,u.total_in>>24&255)):(me(L,u.adler>>>16),me(L,65535&u.adler)),X(u),0<L.wrap&&(L.wrap=-L.wrap),L.pending!==0?f:1)},s.deflateEnd=function(u){var j;return u&&u.state?(j=u.state.status)!==C&&j!==69&&j!==73&&j!==91&&j!==103&&j!==N&&j!==666?oe(u,E):(u.state=null,j===N?oe(u,-3):f):E},s.deflateSetDictionary=function(u,j){var V,L,h,H,ne,re,k,w,m=j.length;if(!u||!u.state||(H=(V=u.state).wrap)===2||H===1&&V.status!==C||V.lookahead)return E;for(H===1&&(u.adler=_(u.adler,j,m,0)),V.wrap=0,m>=V.w_size&&(H===0&&(fe(V.head),V.strstart=0,V.block_start=0,V.insert=0),w=new a.Buf8(V.w_size),a.arraySet(w,j,m-V.w_size,V.w_size,0),j=w,m=V.w_size),ne=u.avail_in,re=u.next_in,k=u.input,u.avail_in=m,u.next_in=0,u.input=j,ee(V);V.lookahead>=A;){for(L=V.strstart,h=V.lookahead-(A-1);V.ins_h=(V.ins_h<<V.hash_shift^V.window[L+A-1])&V.hash_mask,V.prev[L&V.w_mask]=V.head[V.ins_h],V.head[V.ins_h]=L,L++,--h;);V.strstart=L,V.lookahead=A-1,ee(V)}return V.strstart+=V.lookahead,V.block_start=V.strstart,V.insert=V.lookahead,V.lookahead=0,V.match_length=V.prev_length=A-1,V.match_available=0,u.next_in=re,u.input=k,u.avail_in=ne,V.wrap=H,f},s.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,i,s){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,i,s){i.exports=function(r,a){var l,_,v,b,x,p,f,E,g,c,o,S,T,R,P,D,U,M,A,Y,B,C,N,d,F;l=r.state,_=r.next_in,d=r.input,v=_+(r.avail_in-5),b=r.next_out,F=r.output,x=b-(a-r.avail_out),p=b+(r.avail_out-257),f=l.dmax,E=l.wsize,g=l.whave,c=l.wnext,o=l.window,S=l.hold,T=l.bits,R=l.lencode,P=l.distcode,D=(1<<l.lenbits)-1,U=(1<<l.distbits)-1;e:do{T<15&&(S+=d[_++]<<T,T+=8,S+=d[_++]<<T,T+=8),M=R[S&D];t:for(;;){if(S>>>=A=M>>>24,T-=A,(A=M>>>16&255)===0)F[b++]=65535&M;else{if(!(16&A)){if((64&A)==0){M=R[(65535&M)+(S&(1<<A)-1)];continue t}if(32&A){l.mode=12;break e}r.msg="invalid literal/length code",l.mode=30;break e}Y=65535&M,(A&=15)&&(T<A&&(S+=d[_++]<<T,T+=8),Y+=S&(1<<A)-1,S>>>=A,T-=A),T<15&&(S+=d[_++]<<T,T+=8,S+=d[_++]<<T,T+=8),M=P[S&U];n:for(;;){if(S>>>=A=M>>>24,T-=A,!(16&(A=M>>>16&255))){if((64&A)==0){M=P[(65535&M)+(S&(1<<A)-1)];continue n}r.msg="invalid distance code",l.mode=30;break e}if(B=65535&M,T<(A&=15)&&(S+=d[_++]<<T,(T+=8)<A&&(S+=d[_++]<<T,T+=8)),f<(B+=S&(1<<A)-1)){r.msg="invalid distance too far back",l.mode=30;break e}if(S>>>=A,T-=A,(A=b-x)<B){if(g<(A=B-A)&&l.sane){r.msg="invalid distance too far back",l.mode=30;break e}if(N=o,(C=0)===c){if(C+=E-A,A<Y){for(Y-=A;F[b++]=o[C++],--A;);C=b-B,N=F}}else if(c<A){if(C+=E+c-A,(A-=c)<Y){for(Y-=A;F[b++]=o[C++],--A;);if(C=0,c<Y){for(Y-=A=c;F[b++]=o[C++],--A;);C=b-B,N=F}}}else if(C+=c-A,A<Y){for(Y-=A;F[b++]=o[C++],--A;);C=b-B,N=F}for(;2<Y;)F[b++]=N[C++],F[b++]=N[C++],F[b++]=N[C++],Y-=3;Y&&(F[b++]=N[C++],1<Y&&(F[b++]=N[C++]))}else{for(C=b-B;F[b++]=F[C++],F[b++]=F[C++],F[b++]=F[C++],2<(Y-=3););Y&&(F[b++]=F[C++],1<Y&&(F[b++]=F[C++]))}break}}break}}while(_<v&&b<p);_-=Y=T>>3,S&=(1<<(T-=Y<<3))-1,r.next_in=_,r.next_out=b,r.avail_in=_<v?v-_+5:5-(_-v),r.avail_out=b<p?p-b+257:257-(b-p),l.hold=S,l.bits=T}},{}],49:[function(t,i,s){var r=t("../utils/common"),a=t("./adler32"),l=t("./crc32"),_=t("./inffast"),v=t("./inftrees"),b=1,x=2,p=0,f=-2,E=1,g=852,c=592;function o(C){return(C>>>24&255)+(C>>>8&65280)+((65280&C)<<8)+((255&C)<<24)}function S(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function T(C){var N;return C&&C.state?(N=C.state,C.total_in=C.total_out=N.total=0,C.msg="",N.wrap&&(C.adler=1&N.wrap),N.mode=E,N.last=0,N.havedict=0,N.dmax=32768,N.head=null,N.hold=0,N.bits=0,N.lencode=N.lendyn=new r.Buf32(g),N.distcode=N.distdyn=new r.Buf32(c),N.sane=1,N.back=-1,p):f}function R(C){var N;return C&&C.state?((N=C.state).wsize=0,N.whave=0,N.wnext=0,T(C)):f}function P(C,N){var d,F;return C&&C.state?(F=C.state,N<0?(d=0,N=-N):(d=1+(N>>4),N<48&&(N&=15)),N&&(N<8||15<N)?f:(F.window!==null&&F.wbits!==N&&(F.window=null),F.wrap=d,F.wbits=N,R(C))):f}function D(C,N){var d,F;return C?(F=new S,(C.state=F).window=null,(d=P(C,N))!==p&&(C.state=null),d):f}var U,M,A=!0;function Y(C){if(A){var N;for(U=new r.Buf32(512),M=new r.Buf32(32),N=0;N<144;)C.lens[N++]=8;for(;N<256;)C.lens[N++]=9;for(;N<280;)C.lens[N++]=7;for(;N<288;)C.lens[N++]=8;for(v(b,C.lens,0,288,U,0,C.work,{bits:9}),N=0;N<32;)C.lens[N++]=5;v(x,C.lens,0,32,M,0,C.work,{bits:5}),A=!1}C.lencode=U,C.lenbits=9,C.distcode=M,C.distbits=5}function B(C,N,d,F){var W,O=C.state;return O.window===null&&(O.wsize=1<<O.wbits,O.wnext=0,O.whave=0,O.window=new r.Buf8(O.wsize)),F>=O.wsize?(r.arraySet(O.window,N,d-O.wsize,O.wsize,0),O.wnext=0,O.whave=O.wsize):(F<(W=O.wsize-O.wnext)&&(W=F),r.arraySet(O.window,N,d-F,W,O.wnext),(F-=W)?(r.arraySet(O.window,N,d-F,F,0),O.wnext=F,O.whave=O.wsize):(O.wnext+=W,O.wnext===O.wsize&&(O.wnext=0),O.whave<O.wsize&&(O.whave+=W))),0}s.inflateReset=R,s.inflateReset2=P,s.inflateResetKeep=T,s.inflateInit=function(C){return D(C,15)},s.inflateInit2=D,s.inflate=function(C,N){var d,F,W,O,oe,q,fe,X,G,pe,me,ue,ee,de,se,Ee,Ae,Ce,qe,ce,u,j,V,L,h=0,H=new r.Buf8(4),ne=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!C||!C.state||!C.output||!C.input&&C.avail_in!==0)return f;(d=C.state).mode===12&&(d.mode=13),oe=C.next_out,W=C.output,fe=C.avail_out,O=C.next_in,F=C.input,q=C.avail_in,X=d.hold,G=d.bits,pe=q,me=fe,j=p;e:for(;;)switch(d.mode){case E:if(d.wrap===0){d.mode=13;break}for(;G<16;){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}if(2&d.wrap&&X===35615){H[d.check=0]=255&X,H[1]=X>>>8&255,d.check=l(d.check,H,2,0),G=X=0,d.mode=2;break}if(d.flags=0,d.head&&(d.head.done=!1),!(1&d.wrap)||(((255&X)<<8)+(X>>8))%31){C.msg="incorrect header check",d.mode=30;break}if((15&X)!=8){C.msg="unknown compression method",d.mode=30;break}if(G-=4,u=8+(15&(X>>>=4)),d.wbits===0)d.wbits=u;else if(u>d.wbits){C.msg="invalid window size",d.mode=30;break}d.dmax=1<<u,C.adler=d.check=1,d.mode=512&X?10:12,G=X=0;break;case 2:for(;G<16;){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}if(d.flags=X,(255&d.flags)!=8){C.msg="unknown compression method",d.mode=30;break}if(57344&d.flags){C.msg="unknown header flags set",d.mode=30;break}d.head&&(d.head.text=X>>8&1),512&d.flags&&(H[0]=255&X,H[1]=X>>>8&255,d.check=l(d.check,H,2,0)),G=X=0,d.mode=3;case 3:for(;G<32;){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}d.head&&(d.head.time=X),512&d.flags&&(H[0]=255&X,H[1]=X>>>8&255,H[2]=X>>>16&255,H[3]=X>>>24&255,d.check=l(d.check,H,4,0)),G=X=0,d.mode=4;case 4:for(;G<16;){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}d.head&&(d.head.xflags=255&X,d.head.os=X>>8),512&d.flags&&(H[0]=255&X,H[1]=X>>>8&255,d.check=l(d.check,H,2,0)),G=X=0,d.mode=5;case 5:if(1024&d.flags){for(;G<16;){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}d.length=X,d.head&&(d.head.extra_len=X),512&d.flags&&(H[0]=255&X,H[1]=X>>>8&255,d.check=l(d.check,H,2,0)),G=X=0}else d.head&&(d.head.extra=null);d.mode=6;case 6:if(1024&d.flags&&(q<(ue=d.length)&&(ue=q),ue&&(d.head&&(u=d.head.extra_len-d.length,d.head.extra||(d.head.extra=new Array(d.head.extra_len)),r.arraySet(d.head.extra,F,O,ue,u)),512&d.flags&&(d.check=l(d.check,F,ue,O)),q-=ue,O+=ue,d.length-=ue),d.length))break e;d.length=0,d.mode=7;case 7:if(2048&d.flags){if(q===0)break e;for(ue=0;u=F[O+ue++],d.head&&u&&d.length<65536&&(d.head.name+=String.fromCharCode(u)),u&&ue<q;);if(512&d.flags&&(d.check=l(d.check,F,ue,O)),q-=ue,O+=ue,u)break e}else d.head&&(d.head.name=null);d.length=0,d.mode=8;case 8:if(4096&d.flags){if(q===0)break e;for(ue=0;u=F[O+ue++],d.head&&u&&d.length<65536&&(d.head.comment+=String.fromCharCode(u)),u&&ue<q;);if(512&d.flags&&(d.check=l(d.check,F,ue,O)),q-=ue,O+=ue,u)break e}else d.head&&(d.head.comment=null);d.mode=9;case 9:if(512&d.flags){for(;G<16;){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}if(X!==(65535&d.check)){C.msg="header crc mismatch",d.mode=30;break}G=X=0}d.head&&(d.head.hcrc=d.flags>>9&1,d.head.done=!0),C.adler=d.check=0,d.mode=12;break;case 10:for(;G<32;){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}C.adler=d.check=o(X),G=X=0,d.mode=11;case 11:if(d.havedict===0)return C.next_out=oe,C.avail_out=fe,C.next_in=O,C.avail_in=q,d.hold=X,d.bits=G,2;C.adler=d.check=1,d.mode=12;case 12:if(N===5||N===6)break e;case 13:if(d.last){X>>>=7&G,G-=7&G,d.mode=27;break}for(;G<3;){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}switch(d.last=1&X,G-=1,3&(X>>>=1)){case 0:d.mode=14;break;case 1:if(Y(d),d.mode=20,N!==6)break;X>>>=2,G-=2;break e;case 2:d.mode=17;break;case 3:C.msg="invalid block type",d.mode=30}X>>>=2,G-=2;break;case 14:for(X>>>=7&G,G-=7&G;G<32;){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}if((65535&X)!=(X>>>16^65535)){C.msg="invalid stored block lengths",d.mode=30;break}if(d.length=65535&X,G=X=0,d.mode=15,N===6)break e;case 15:d.mode=16;case 16:if(ue=d.length){if(q<ue&&(ue=q),fe<ue&&(ue=fe),ue===0)break e;r.arraySet(W,F,O,ue,oe),q-=ue,O+=ue,fe-=ue,oe+=ue,d.length-=ue;break}d.mode=12;break;case 17:for(;G<14;){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}if(d.nlen=257+(31&X),X>>>=5,G-=5,d.ndist=1+(31&X),X>>>=5,G-=5,d.ncode=4+(15&X),X>>>=4,G-=4,286<d.nlen||30<d.ndist){C.msg="too many length or distance symbols",d.mode=30;break}d.have=0,d.mode=18;case 18:for(;d.have<d.ncode;){for(;G<3;){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}d.lens[ne[d.have++]]=7&X,X>>>=3,G-=3}for(;d.have<19;)d.lens[ne[d.have++]]=0;if(d.lencode=d.lendyn,d.lenbits=7,V={bits:d.lenbits},j=v(0,d.lens,0,19,d.lencode,0,d.work,V),d.lenbits=V.bits,j){C.msg="invalid code lengths set",d.mode=30;break}d.have=0,d.mode=19;case 19:for(;d.have<d.nlen+d.ndist;){for(;Ee=(h=d.lencode[X&(1<<d.lenbits)-1])>>>16&255,Ae=65535&h,!((se=h>>>24)<=G);){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}if(Ae<16)X>>>=se,G-=se,d.lens[d.have++]=Ae;else{if(Ae===16){for(L=se+2;G<L;){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}if(X>>>=se,G-=se,d.have===0){C.msg="invalid bit length repeat",d.mode=30;break}u=d.lens[d.have-1],ue=3+(3&X),X>>>=2,G-=2}else if(Ae===17){for(L=se+3;G<L;){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}G-=se,u=0,ue=3+(7&(X>>>=se)),X>>>=3,G-=3}else{for(L=se+7;G<L;){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}G-=se,u=0,ue=11+(127&(X>>>=se)),X>>>=7,G-=7}if(d.have+ue>d.nlen+d.ndist){C.msg="invalid bit length repeat",d.mode=30;break}for(;ue--;)d.lens[d.have++]=u}}if(d.mode===30)break;if(d.lens[256]===0){C.msg="invalid code -- missing end-of-block",d.mode=30;break}if(d.lenbits=9,V={bits:d.lenbits},j=v(b,d.lens,0,d.nlen,d.lencode,0,d.work,V),d.lenbits=V.bits,j){C.msg="invalid literal/lengths set",d.mode=30;break}if(d.distbits=6,d.distcode=d.distdyn,V={bits:d.distbits},j=v(x,d.lens,d.nlen,d.ndist,d.distcode,0,d.work,V),d.distbits=V.bits,j){C.msg="invalid distances set",d.mode=30;break}if(d.mode=20,N===6)break e;case 20:d.mode=21;case 21:if(6<=q&&258<=fe){C.next_out=oe,C.avail_out=fe,C.next_in=O,C.avail_in=q,d.hold=X,d.bits=G,_(C,me),oe=C.next_out,W=C.output,fe=C.avail_out,O=C.next_in,F=C.input,q=C.avail_in,X=d.hold,G=d.bits,d.mode===12&&(d.back=-1);break}for(d.back=0;Ee=(h=d.lencode[X&(1<<d.lenbits)-1])>>>16&255,Ae=65535&h,!((se=h>>>24)<=G);){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}if(Ee&&(240&Ee)==0){for(Ce=se,qe=Ee,ce=Ae;Ee=(h=d.lencode[ce+((X&(1<<Ce+qe)-1)>>Ce)])>>>16&255,Ae=65535&h,!(Ce+(se=h>>>24)<=G);){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}X>>>=Ce,G-=Ce,d.back+=Ce}if(X>>>=se,G-=se,d.back+=se,d.length=Ae,Ee===0){d.mode=26;break}if(32&Ee){d.back=-1,d.mode=12;break}if(64&Ee){C.msg="invalid literal/length code",d.mode=30;break}d.extra=15&Ee,d.mode=22;case 22:if(d.extra){for(L=d.extra;G<L;){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}d.length+=X&(1<<d.extra)-1,X>>>=d.extra,G-=d.extra,d.back+=d.extra}d.was=d.length,d.mode=23;case 23:for(;Ee=(h=d.distcode[X&(1<<d.distbits)-1])>>>16&255,Ae=65535&h,!((se=h>>>24)<=G);){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}if((240&Ee)==0){for(Ce=se,qe=Ee,ce=Ae;Ee=(h=d.distcode[ce+((X&(1<<Ce+qe)-1)>>Ce)])>>>16&255,Ae=65535&h,!(Ce+(se=h>>>24)<=G);){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}X>>>=Ce,G-=Ce,d.back+=Ce}if(X>>>=se,G-=se,d.back+=se,64&Ee){C.msg="invalid distance code",d.mode=30;break}d.offset=Ae,d.extra=15&Ee,d.mode=24;case 24:if(d.extra){for(L=d.extra;G<L;){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}d.offset+=X&(1<<d.extra)-1,X>>>=d.extra,G-=d.extra,d.back+=d.extra}if(d.offset>d.dmax){C.msg="invalid distance too far back",d.mode=30;break}d.mode=25;case 25:if(fe===0)break e;if(ue=me-fe,d.offset>ue){if((ue=d.offset-ue)>d.whave&&d.sane){C.msg="invalid distance too far back",d.mode=30;break}ee=ue>d.wnext?(ue-=d.wnext,d.wsize-ue):d.wnext-ue,ue>d.length&&(ue=d.length),de=d.window}else de=W,ee=oe-d.offset,ue=d.length;for(fe<ue&&(ue=fe),fe-=ue,d.length-=ue;W[oe++]=de[ee++],--ue;);d.length===0&&(d.mode=21);break;case 26:if(fe===0)break e;W[oe++]=d.length,fe--,d.mode=21;break;case 27:if(d.wrap){for(;G<32;){if(q===0)break e;q--,X|=F[O++]<<G,G+=8}if(me-=fe,C.total_out+=me,d.total+=me,me&&(C.adler=d.check=d.flags?l(d.check,W,me,oe-me):a(d.check,W,me,oe-me)),me=fe,(d.flags?X:o(X))!==d.check){C.msg="incorrect data check",d.mode=30;break}G=X=0}d.mode=28;case 28:if(d.wrap&&d.flags){for(;G<32;){if(q===0)break e;q--,X+=F[O++]<<G,G+=8}if(X!==(4294967295&d.total)){C.msg="incorrect length check",d.mode=30;break}G=X=0}d.mode=29;case 29:j=1;break e;case 30:j=-3;break e;case 31:return-4;default:return f}return C.next_out=oe,C.avail_out=fe,C.next_in=O,C.avail_in=q,d.hold=X,d.bits=G,(d.wsize||me!==C.avail_out&&d.mode<30&&(d.mode<27||N!==4))&&B(C,C.output,C.next_out,me-C.avail_out)?(d.mode=31,-4):(pe-=C.avail_in,me-=C.avail_out,C.total_in+=pe,C.total_out+=me,d.total+=me,d.wrap&&me&&(C.adler=d.check=d.flags?l(d.check,W,me,C.next_out-me):a(d.check,W,me,C.next_out-me)),C.data_type=d.bits+(d.last?64:0)+(d.mode===12?128:0)+(d.mode===20||d.mode===15?256:0),(pe==0&&me===0||N===4)&&j===p&&(j=-5),j)},s.inflateEnd=function(C){if(!C||!C.state)return f;var N=C.state;return N.window&&(N.window=null),C.state=null,p},s.inflateGetHeader=function(C,N){var d;return C&&C.state?(2&(d=C.state).wrap)==0?f:((d.head=N).done=!1,p):f},s.inflateSetDictionary=function(C,N){var d,F=N.length;return C&&C.state?(d=C.state).wrap!==0&&d.mode!==11?f:d.mode===11&&a(1,N,F,0)!==d.check?-3:B(C,N,F,F)?(d.mode=31,-4):(d.havedict=1,p):f},s.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,i,s){var r=t("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],_=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],v=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(b,x,p,f,E,g,c,o){var S,T,R,P,D,U,M,A,Y,B=o.bits,C=0,N=0,d=0,F=0,W=0,O=0,oe=0,q=0,fe=0,X=0,G=null,pe=0,me=new r.Buf16(16),ue=new r.Buf16(16),ee=null,de=0;for(C=0;C<=15;C++)me[C]=0;for(N=0;N<f;N++)me[x[p+N]]++;for(W=B,F=15;1<=F&&me[F]===0;F--);if(F<W&&(W=F),F===0)return E[g++]=20971520,E[g++]=20971520,o.bits=1,0;for(d=1;d<F&&me[d]===0;d++);for(W<d&&(W=d),C=q=1;C<=15;C++)if(q<<=1,(q-=me[C])<0)return-1;if(0<q&&(b===0||F!==1))return-1;for(ue[1]=0,C=1;C<15;C++)ue[C+1]=ue[C]+me[C];for(N=0;N<f;N++)x[p+N]!==0&&(c[ue[x[p+N]]++]=N);if(U=b===0?(G=ee=c,19):b===1?(G=a,pe-=257,ee=l,de-=257,256):(G=_,ee=v,-1),C=d,D=g,oe=N=X=0,R=-1,P=(fe=1<<(O=W))-1,b===1&&852<fe||b===2&&592<fe)return 1;for(;;){for(M=C-oe,Y=c[N]<U?(A=0,c[N]):c[N]>U?(A=ee[de+c[N]],G[pe+c[N]]):(A=96,0),S=1<<C-oe,d=T=1<<O;E[D+(X>>oe)+(T-=S)]=M<<24|A<<16|Y|0,T!==0;);for(S=1<<C-1;X&S;)S>>=1;if(S!==0?(X&=S-1,X+=S):X=0,N++,--me[C]==0){if(C===F)break;C=x[p+c[N]]}if(W<C&&(X&P)!==R){for(oe===0&&(oe=W),D+=d,q=1<<(O=C-oe);O+oe<F&&!((q-=me[O+oe])<=0);)O++,q<<=1;if(fe+=1<<O,b===1&&852<fe||b===2&&592<fe)return 1;E[R=X&P]=W<<24|O<<16|D-g|0}}return X!==0&&(E[D+X]=C-oe<<24|64<<16|0),o.bits=W,0}},{"../utils/common":41}],51:[function(t,i,s){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,i,s){var r=t("../utils/common"),a=0,l=1;function _(h){for(var H=h.length;0<=--H;)h[H]=0}var v=0,b=29,x=256,p=x+1+b,f=30,E=19,g=2*p+1,c=15,o=16,S=7,T=256,R=16,P=17,D=18,U=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],M=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Y=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],B=new Array(2*(p+2));_(B);var C=new Array(2*f);_(C);var N=new Array(512);_(N);var d=new Array(256);_(d);var F=new Array(b);_(F);var W,O,oe,q=new Array(f);function fe(h,H,ne,re,k){this.static_tree=h,this.extra_bits=H,this.extra_base=ne,this.elems=re,this.max_length=k,this.has_stree=h&&h.length}function X(h,H){this.dyn_tree=h,this.max_code=0,this.stat_desc=H}function G(h){return h<256?N[h]:N[256+(h>>>7)]}function pe(h,H){h.pending_buf[h.pending++]=255&H,h.pending_buf[h.pending++]=H>>>8&255}function me(h,H,ne){h.bi_valid>o-ne?(h.bi_buf|=H<<h.bi_valid&65535,pe(h,h.bi_buf),h.bi_buf=H>>o-h.bi_valid,h.bi_valid+=ne-o):(h.bi_buf|=H<<h.bi_valid&65535,h.bi_valid+=ne)}function ue(h,H,ne){me(h,ne[2*H],ne[2*H+1])}function ee(h,H){for(var ne=0;ne|=1&h,h>>>=1,ne<<=1,0<--H;);return ne>>>1}function de(h,H,ne){var re,k,w=new Array(c+1),m=0;for(re=1;re<=c;re++)w[re]=m=m+ne[re-1]<<1;for(k=0;k<=H;k++){var I=h[2*k+1];I!==0&&(h[2*k]=ee(w[I]++,I))}}function se(h){var H;for(H=0;H<p;H++)h.dyn_ltree[2*H]=0;for(H=0;H<f;H++)h.dyn_dtree[2*H]=0;for(H=0;H<E;H++)h.bl_tree[2*H]=0;h.dyn_ltree[2*T]=1,h.opt_len=h.static_len=0,h.last_lit=h.matches=0}function Ee(h){8<h.bi_valid?pe(h,h.bi_buf):0<h.bi_valid&&(h.pending_buf[h.pending++]=h.bi_buf),h.bi_buf=0,h.bi_valid=0}function Ae(h,H,ne,re){var k=2*H,w=2*ne;return h[k]<h[w]||h[k]===h[w]&&re[H]<=re[ne]}function Ce(h,H,ne){for(var re=h.heap[ne],k=ne<<1;k<=h.heap_len&&(k<h.heap_len&&Ae(H,h.heap[k+1],h.heap[k],h.depth)&&k++,!Ae(H,re,h.heap[k],h.depth));)h.heap[ne]=h.heap[k],ne=k,k<<=1;h.heap[ne]=re}function qe(h,H,ne){var re,k,w,m,I=0;if(h.last_lit!==0)for(;re=h.pending_buf[h.d_buf+2*I]<<8|h.pending_buf[h.d_buf+2*I+1],k=h.pending_buf[h.l_buf+I],I++,re===0?ue(h,k,H):(ue(h,(w=d[k])+x+1,H),(m=U[w])!==0&&me(h,k-=F[w],m),ue(h,w=G(--re),ne),(m=M[w])!==0&&me(h,re-=q[w],m)),I<h.last_lit;);ue(h,T,H)}function ce(h,H){var ne,re,k,w=H.dyn_tree,m=H.stat_desc.static_tree,I=H.stat_desc.has_stree,Z=H.stat_desc.elems,ie=-1;for(h.heap_len=0,h.heap_max=g,ne=0;ne<Z;ne++)w[2*ne]!==0?(h.heap[++h.heap_len]=ie=ne,h.depth[ne]=0):w[2*ne+1]=0;for(;h.heap_len<2;)w[2*(k=h.heap[++h.heap_len]=ie<2?++ie:0)]=1,h.depth[k]=0,h.opt_len--,I&&(h.static_len-=m[2*k+1]);for(H.max_code=ie,ne=h.heap_len>>1;1<=ne;ne--)Ce(h,w,ne);for(k=Z;ne=h.heap[1],h.heap[1]=h.heap[h.heap_len--],Ce(h,w,1),re=h.heap[1],h.heap[--h.heap_max]=ne,h.heap[--h.heap_max]=re,w[2*k]=w[2*ne]+w[2*re],h.depth[k]=(h.depth[ne]>=h.depth[re]?h.depth[ne]:h.depth[re])+1,w[2*ne+1]=w[2*re+1]=k,h.heap[1]=k++,Ce(h,w,1),2<=h.heap_len;);h.heap[--h.heap_max]=h.heap[1],(function($,be){var ve,De,Be,le,_e,Le,ye=be.dyn_tree,we=be.max_code,Ve=be.stat_desc.static_tree,z=be.stat_desc.has_stree,Se=be.stat_desc.extra_bits,ge=be.stat_desc.extra_base,Re=be.stat_desc.max_length,he=0;for(le=0;le<=c;le++)$.bl_count[le]=0;for(ye[2*$.heap[$.heap_max]+1]=0,ve=$.heap_max+1;ve<g;ve++)Re<(le=ye[2*ye[2*(De=$.heap[ve])+1]+1]+1)&&(le=Re,he++),ye[2*De+1]=le,we<De||($.bl_count[le]++,_e=0,ge<=De&&(_e=Se[De-ge]),Le=ye[2*De],$.opt_len+=Le*(le+_e),z&&($.static_len+=Le*(Ve[2*De+1]+_e)));if(he!==0){do{for(le=Re-1;$.bl_count[le]===0;)le--;$.bl_count[le]--,$.bl_count[le+1]+=2,$.bl_count[Re]--,he-=2}while(0<he);for(le=Re;le!==0;le--)for(De=$.bl_count[le];De!==0;)we<(Be=$.heap[--ve])||(ye[2*Be+1]!==le&&($.opt_len+=(le-ye[2*Be+1])*ye[2*Be],ye[2*Be+1]=le),De--)}})(h,H),de(w,ie,h.bl_count)}function u(h,H,ne){var re,k,w=-1,m=H[1],I=0,Z=7,ie=4;for(m===0&&(Z=138,ie=3),H[2*(ne+1)+1]=65535,re=0;re<=ne;re++)k=m,m=H[2*(re+1)+1],++I<Z&&k===m||(I<ie?h.bl_tree[2*k]+=I:k!==0?(k!==w&&h.bl_tree[2*k]++,h.bl_tree[2*R]++):I<=10?h.bl_tree[2*P]++:h.bl_tree[2*D]++,w=k,ie=(I=0)===m?(Z=138,3):k===m?(Z=6,3):(Z=7,4))}function j(h,H,ne){var re,k,w=-1,m=H[1],I=0,Z=7,ie=4;for(m===0&&(Z=138,ie=3),re=0;re<=ne;re++)if(k=m,m=H[2*(re+1)+1],!(++I<Z&&k===m)){if(I<ie)for(;ue(h,k,h.bl_tree),--I!=0;);else k!==0?(k!==w&&(ue(h,k,h.bl_tree),I--),ue(h,R,h.bl_tree),me(h,I-3,2)):I<=10?(ue(h,P,h.bl_tree),me(h,I-3,3)):(ue(h,D,h.bl_tree),me(h,I-11,7));w=k,ie=(I=0)===m?(Z=138,3):k===m?(Z=6,3):(Z=7,4)}}_(q);var V=!1;function L(h,H,ne,re){me(h,(v<<1)+(re?1:0),3),(function(k,w,m,I){Ee(k),pe(k,m),pe(k,~m),r.arraySet(k.pending_buf,k.window,w,m,k.pending),k.pending+=m})(h,H,ne)}s._tr_init=function(h){V||((function(){var H,ne,re,k,w,m=new Array(c+1);for(k=re=0;k<b-1;k++)for(F[k]=re,H=0;H<1<<U[k];H++)d[re++]=k;for(d[re-1]=k,k=w=0;k<16;k++)for(q[k]=w,H=0;H<1<<M[k];H++)N[w++]=k;for(w>>=7;k<f;k++)for(q[k]=w<<7,H=0;H<1<<M[k]-7;H++)N[256+w++]=k;for(ne=0;ne<=c;ne++)m[ne]=0;for(H=0;H<=143;)B[2*H+1]=8,H++,m[8]++;for(;H<=255;)B[2*H+1]=9,H++,m[9]++;for(;H<=279;)B[2*H+1]=7,H++,m[7]++;for(;H<=287;)B[2*H+1]=8,H++,m[8]++;for(de(B,p+1,m),H=0;H<f;H++)C[2*H+1]=5,C[2*H]=ee(H,5);W=new fe(B,U,x+1,p,c),O=new fe(C,M,0,f,c),oe=new fe(new Array(0),A,0,E,S)})(),V=!0),h.l_desc=new X(h.dyn_ltree,W),h.d_desc=new X(h.dyn_dtree,O),h.bl_desc=new X(h.bl_tree,oe),h.bi_buf=0,h.bi_valid=0,se(h)},s._tr_stored_block=L,s._tr_flush_block=function(h,H,ne,re){var k,w,m=0;0<h.level?(h.strm.data_type===2&&(h.strm.data_type=(function(I){var Z,ie=4093624447;for(Z=0;Z<=31;Z++,ie>>>=1)if(1&ie&&I.dyn_ltree[2*Z]!==0)return a;if(I.dyn_ltree[18]!==0||I.dyn_ltree[20]!==0||I.dyn_ltree[26]!==0)return l;for(Z=32;Z<x;Z++)if(I.dyn_ltree[2*Z]!==0)return l;return a})(h)),ce(h,h.l_desc),ce(h,h.d_desc),m=(function(I){var Z;for(u(I,I.dyn_ltree,I.l_desc.max_code),u(I,I.dyn_dtree,I.d_desc.max_code),ce(I,I.bl_desc),Z=E-1;3<=Z&&I.bl_tree[2*Y[Z]+1]===0;Z--);return I.opt_len+=3*(Z+1)+5+5+4,Z})(h),k=h.opt_len+3+7>>>3,(w=h.static_len+3+7>>>3)<=k&&(k=w)):k=w=ne+5,ne+4<=k&&H!==-1?L(h,H,ne,re):h.strategy===4||w===k?(me(h,2+(re?1:0),3),qe(h,B,C)):(me(h,4+(re?1:0),3),(function(I,Z,ie,$){var be;for(me(I,Z-257,5),me(I,ie-1,5),me(I,$-4,4),be=0;be<$;be++)me(I,I.bl_tree[2*Y[be]+1],3);j(I,I.dyn_ltree,Z-1),j(I,I.dyn_dtree,ie-1)})(h,h.l_desc.max_code+1,h.d_desc.max_code+1,m+1),qe(h,h.dyn_ltree,h.dyn_dtree)),se(h),re&&Ee(h)},s._tr_tally=function(h,H,ne){return h.pending_buf[h.d_buf+2*h.last_lit]=H>>>8&255,h.pending_buf[h.d_buf+2*h.last_lit+1]=255&H,h.pending_buf[h.l_buf+h.last_lit]=255&ne,h.last_lit++,H===0?h.dyn_ltree[2*ne]++:(h.matches++,H--,h.dyn_ltree[2*(d[ne]+x+1)]++,h.dyn_dtree[2*G(H)]++),h.last_lit===h.lit_bufsize-1},s._tr_align=function(h){me(h,2,3),ue(h,T,B),(function(H){H.bi_valid===16?(pe(H,H.bi_buf),H.bi_buf=0,H.bi_valid=0):8<=H.bi_valid&&(H.pending_buf[H.pending++]=255&H.bi_buf,H.bi_buf>>=8,H.bi_valid-=8)})(h)}},{"../utils/common":41}],53:[function(t,i,s){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,i,s){(function(r){(function(a,l){if(!a.setImmediate){var _,v,b,x,p=1,f={},E=!1,g=a.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(a);c=c&&c.setTimeout?c:a,_={}.toString.call(a.process)==="[object process]"?function(R){process.nextTick(function(){S(R)})}:(function(){if(a.postMessage&&!a.importScripts){var R=!0,P=a.onmessage;return a.onmessage=function(){R=!1},a.postMessage("","*"),a.onmessage=P,R}})()?(x="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",T,!1):a.attachEvent("onmessage",T),function(R){a.postMessage(x+R,"*")}):a.MessageChannel?((b=new MessageChannel).port1.onmessage=function(R){S(R.data)},function(R){b.port2.postMessage(R)}):g&&"onreadystatechange"in g.createElement("script")?(v=g.documentElement,function(R){var P=g.createElement("script");P.onreadystatechange=function(){S(R),P.onreadystatechange=null,v.removeChild(P),P=null},v.appendChild(P)}):function(R){setTimeout(S,0,R)},c.setImmediate=function(R){typeof R!="function"&&(R=new Function(""+R));for(var P=new Array(arguments.length-1),D=0;D<P.length;D++)P[D]=arguments[D+1];var U={callback:R,args:P};return f[p]=U,_(p),p++},c.clearImmediate=o}function o(R){delete f[R]}function S(R){if(E)setTimeout(S,0,R);else{var P=f[R];if(P){E=!0;try{(function(D){var U=D.callback,M=D.args;switch(M.length){case 0:U();break;case 1:U(M[0]);break;case 2:U(M[0],M[1]);break;case 3:U(M[0],M[1],M[2]);break;default:U.apply(l,M)}})(P)}finally{o(R),E=!1}}}}function T(R){R.source===a&&typeof R.data=="string"&&R.data.indexOf(x)===0&&S(+R.data.slice(x.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof Vn<"u"?Vn:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Ai)),Ai.exports}var fh=ch();const ga=lh(fh),uh="assets/minecraft/textures/item/skin.png",va="assets/minecraft/items/totem_of_undying.json",ao="assets/minecraft",Zn=e=>`${ao}/models/${oo(e)}.json`,dh=e=>`${ao}/textures/${oo(e)}.png`;function oo(e){if(e.startsWith("minecraft:"))return e.slice(10);if(e.includes(":"))throw new Error(`Unsupported pack namespace: ${e}`);return e}function wi({model:{fallback:e,cases:n}}){return new Map([["Default",e.model],...n.map(({when:t,model:i})=>[t,i.model])])}const Sa=e=>Zn(e).split("/").at(-1);async function hh(e,n,t){const i=await ga.loadAsync(e),s=wi(JSON.parse(await Ri(i,va,"string"))),r=()=>t("totem_of_undying_small.json");async function a(l,_="classic"){if(_==="slim"){const x=wi(JSON.parse(await r()));return JSON.parse(await t(Sa(x.get(l))))}const v=s.get(l),b=l==="Default"?n:await Ri(i,Zn(v),"string");return JSON.parse(b)}return{getModel:a,getTexture:l=>Ri(i,dh(l),"blob"),async export(l,_="classic"){const v=await ga.loadAsync(e);if(v.file(Zn(s.get("Default")),n),_==="slim"){const b=await r();v.file(va,b),await Promise.all(Array.from(wi(JSON.parse(b)).values(),async x=>{v.file(Zn(x),await t(Sa(x)))}))}return v.file(uh,await l.arrayBuffer()),v.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}})}}}function Ri(e,n,t){const i=e.file(n);if(!i)throw new Error(`Missing pack asset: ${n}`);return i.async(t)}const ph=[137,80,78,71,13,10,26,10];function Oi(e,n,t=4){return{top:[e+4,n,t,4],bottom:[e+4+t,n,t,4],right:[e,n+4,4,12],front:[e+4,n+4,t,12],left:[e+4+t,n+4,4,12],back:[e+8+t,n+4,t,12]}}function mh({data:e,width:n,height:t}){if(t===32)return"classic";const i=([r,a,l,_])=>{for(let v=a;v<a+_;v+=1)for(let b=r;b<r+l;b+=1)if(e[(v*n+b)*4+3]>0)return!0;return!1};return[[40,16],[32,48]].every(([r,a])=>!i([r+10,a,2,4])&&!i([r+14,a+4,2,12])&&i(Oi(r,a,3).front))?"slim":"classic"}function _h(e){const n=new DataView(e.buffer,e.byteOffset,e.byteLength);if(e.length<33||!ph.every((s,r)=>e[r]===s)||n.getUint32(8)!==13||n.getUint32(12)!==1229472850)throw new Error("Choose a valid Minecraft skin PNG.");const t=n.getUint32(16),i=n.getUint32(20);if(t!==64||i!==64&&i!==32)throw new Error(`This PNG is ${t} × ${i}. Use a 64 × 64 or 64 × 32 Minecraft skin.`);return{width:t,height:i}}function so(e=64,n=64){const t=document.createElement("canvas");t.width=e,t.height=n;const i=t.getContext("2d",{willReadFrequently:!0});return i.imageSmoothingEnabled=!1,i}function lo(e){return new Promise((n,t)=>{e.toBlob(i=>i?n(i):t(new Error("Could not create the PNG.")),"image/png")})}async function co(e){const n=await createImageBitmap(e.slice(0,e.size,"image/png"),{colorSpaceConversion:"none"}),t=so(n.width,n.height);try{return t.drawImage(n,0,0),t}finally{n.close()}}async function fo(e){if(e.size>1024*1024)throw new Error("Choose a Minecraft skin PNG under 1 MB.");const{height:n}=_h(new Uint8Array(await e.slice(0,33).arrayBuffer()));let t;try{t=await co(e)}catch{throw new Error("This PNG could not be decoded. Try another skin file.")}if(!t.getImageData(8,8,8,8).data.some((r,a)=>a%4===3&&r>0))throw new Error("The base face is empty. Export a Minecraft skin with a visible face.");const s=mh(t.getImageData(0,0,64,n));return{file:e,source:t,height:n,armType:s}}async function uo({file:e,source:n,height:t,armType:i}){if(t===64)return{image:n.canvas,png:e,armType:i};const s=so();return s.drawImage(n.canvas,0,0),gh(s,n),{image:s.canvas,png:await lo(s.canvas),armType:"classic"}}function gh(e,n){n.getImageData(32,0,32,32).data.every((s,r)=>r%4!==3||s>=128)&&e.clearRect(32,0,32,16);for(const[s,r]of[[0,16],[40,32]]){const a=Oi(s,16),l=Oi(r,48);for(const[_,[v,b,x,p]]of Object.entries(l)){const f=_==="left"?"right":_==="right"?"left":_;e.save(),e.translate(v+x,b),e.scale(-1,1),e.drawImage(n.canvas,...a[f],0,0,x,p),e.restore()}}for(const[s,r,a,l]of[[0,0,32,16],[0,16,64,16],[16,48,32,16]]){const _=e.getImageData(s,r,a,l);for(let v=3;v<_.data.length;v+=4)_.data[v]=255;e.putImageData(_,s,r)}}function vh(e,n){const t=e.getContext("2d");t.clearRect(0,0,8,8),t.drawImage(n,8,8,8,8,0,0,8,8),t.drawImage(n,40,8,8,8,0,0,8,8)}const Ea={type:"change"},zi={type:"start"},ho={type:"end"},Wn=new js,xa=new La,Sh=Math.cos(70*Mt.DEG2RAD),ct=new ke,_t=2*Math.PI,Je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yi=1e-6;class Eh extends Zs{constructor(n,t=null){super(n,t),this.state=Je.NONE,this.target=new ke,this.cursor=new ke,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:un.ROTATE,MIDDLE:un.DOLLY,RIGHT:un.PAN},this.touches={ONE:fn.ROTATE,TWO:fn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ke,this._lastQuaternion=new Un,this._lastTargetPosition=new ke,this._quat=new Un().setFromUnitVectors(n.up,new ke(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ui,this._sphericalDelta=new Ui,this._scale=1,this._panOffset=new ke,this._rotateStart=new Qe,this._rotateEnd=new Qe,this._rotateDelta=new Qe,this._panStart=new Qe,this._panEnd=new Qe,this._panDelta=new Qe,this._dollyStart=new Qe,this._dollyEnd=new Qe,this._dollyDelta=new Qe,this._dollyDirection=new ke,this._mouse=new Qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bh.bind(this),this._onPointerDown=xh.bind(this),this._onPointerUp=Mh.bind(this),this._onContextMenu=Ph.bind(this),this._onMouseWheel=wh.bind(this),this._onKeyDown=Rh.bind(this),this._onTouchStart=yh.bind(this),this._onTouchMove=Ch.bind(this),this._onMouseDown=Th.bind(this),this._onMouseMove=Ah.bind(this),this._interceptControlDown=Dh.bind(this),this._interceptControlUp=Lh.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(n){this._cursorStyle=n,n==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(n){super.connect(n),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(n){n.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=n}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ea),this.update(),this.state=Je.NONE}pan(n,t){this._pan(n,t),this.update()}dollyIn(n){this._dollyIn(n),this.update()}dollyOut(n){this._dollyOut(n),this.update()}rotateLeft(n){this._rotateLeft(n),this.update()}rotateUp(n){this._rotateUp(n),this.update()}update(n=null){const t=this.object.position;ct.copy(t).sub(this.target),ct.applyQuaternion(this._quat),this._spherical.setFromVector3(ct),this.autoRotate&&this.state===Je.NONE&&this._rotateLeft(this._getAutoRotationAngle(n)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=_t:i>Math.PI&&(i-=_t),s<-Math.PI?s+=_t:s>Math.PI&&(s-=_t),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ct.setFromSpherical(this._spherical),ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const l=ct.length();a=this._clampDistance(l*this._scale);const _=l-a;this.object.position.addScaledVector(this._dollyDirection,_),this.object.updateMatrixWorld(),r=!!_}else if(this.object.isOrthographicCamera){const l=new ke(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const _=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=_!==this.object.zoom;const v=new ke(this._mouse.x,this._mouse.y,0);v.unproject(this.object),this.object.position.sub(v).add(l),this.object.updateMatrixWorld(),a=ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Wn.origin.copy(this.object.position),Wn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wn.direction))<Sh?this.object.lookAt(this.target):(xa.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wn.intersectPlane(xa,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>yi||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yi||this._lastTargetPosition.distanceToSquared(this.target)>yi?(this.dispatchEvent(Ea),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(n){return n!==null?_t/60*this.autoRotateSpeed*n:_t/60/60*this.autoRotateSpeed}_getZoomScale(n){const t=Math.abs(n*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(n){this._sphericalDelta.theta-=n}_rotateUp(n){this._sphericalDelta.phi-=n}_panLeft(n,t){ct.setFromMatrixColumn(t,0),ct.multiplyScalar(-n),this._panOffset.add(ct)}_panUp(n,t){this.screenSpacePanning===!0?ct.setFromMatrixColumn(t,1):(ct.setFromMatrixColumn(t,0),ct.crossVectors(this.object.up,ct)),ct.multiplyScalar(n),this._panOffset.add(ct)}_pan(n,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ct.copy(s).sub(this.target);let r=ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*n*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(n*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(n,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=n-i.left,r=t-i.top,a=i.width,l=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(n){return Math.max(this.minDistance,Math.min(this.maxDistance,n))}_handleMouseDownRotate(n){this._rotateStart.set(n.clientX,n.clientY)}_handleMouseDownDolly(n){this._updateZoomParameters(n.clientX,n.clientX),this._dollyStart.set(n.clientX,n.clientY)}_handleMouseDownPan(n){this._panStart.set(n.clientX,n.clientY)}_handleMouseMoveRotate(n){this._rotateEnd.set(n.clientX,n.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_t*this._rotateDelta.x/t.clientHeight),this._rotateUp(_t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(n){this._dollyEnd.set(n.clientX,n.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(n){this._panEnd.set(n.clientX,n.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(n){this._updateZoomParameters(n.clientX,n.clientY),n.deltaY<0?this._dollyIn(this._getZoomScale(n.deltaY)):n.deltaY>0&&this._dollyOut(this._getZoomScale(n.deltaY)),this.update()}_handleKeyDown(n){let t=!1;switch(n.code){case this.keys.UP:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(_t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(-_t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(_t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(-_t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(n.preventDefault(),this.update())}_handleTouchStartRotate(n){if(this._pointers.length===1)this._rotateStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),s=.5*(n.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(n){if(this._pointers.length===1)this._panStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),s=.5*(n.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,s=n.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enablePan&&this._handleTouchStartPan(n)}_handleTouchStartDollyRotate(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enableRotate&&this._handleTouchStartRotate(n)}_handleTouchMoveRotate(n){if(this._pointers.length==1)this._rotateEnd.set(n.pageX,n.pageY);else{const i=this._getSecondPointerPosition(n),s=.5*(n.pageX+i.x),r=.5*(n.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_t*this._rotateDelta.x/t.clientHeight),this._rotateUp(_t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(n){if(this._pointers.length===1)this._panEnd.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),s=.5*(n.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,s=n.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(n.pageX+t.x)*.5,l=(n.pageY+t.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enablePan&&this._handleTouchMovePan(n)}_handleTouchMoveDollyRotate(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enableRotate&&this._handleTouchMoveRotate(n)}_addPointer(n){this._pointers.push(n.pointerId)}_removePointer(n){delete this._pointerPositions[n.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(n){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId)return!0;return!1}_trackPointer(n){let t=this._pointerPositions[n.pointerId];t===void 0&&(t=new Qe,this._pointerPositions[n.pointerId]=t),t.set(n.pageX,n.pageY)}_getSecondPointerPosition(n){const t=n.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(n){const t=n.deltaMode,i={clientX:n.clientX,clientY:n.clientY,deltaY:n.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return n.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xh(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function bh(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Mh(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ho),this.state=Je.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const n=this._pointers[0],t=this._pointerPositions[n];this._onTouchStart({pointerId:n,pageX:t.x,pageY:t.y});break}}function Th(e){let n;switch(e.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case un.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Je.DOLLY;break;case un.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Je.ROTATE}break;case un.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Je.PAN}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(zi)}function Ah(e){switch(this.state){case Je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function wh(e){this.enabled===!1||this.enableZoom===!1||this.state!==Je.NONE||(e.preventDefault(),this.dispatchEvent(zi),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(ho))}function Rh(e){this.enabled!==!1&&this._handleKeyDown(e)}function yh(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case fn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Je.TOUCH_ROTATE;break;case fn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Je.TOUCH_PAN;break;default:this.state=Je.NONE}break;case 2:switch(this.touches.TWO){case fn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Je.TOUCH_DOLLY_PAN;break;case fn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Je.TOUCH_DOLLY_ROTATE;break;default:this.state=Je.NONE}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(zi)}function Ch(e){switch(this._trackPointer(e),this.state){case Je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Je.NONE}}function Ph(e){this.enabled!==!1&&e.preventDefault()}function Dh(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Lh(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Uh=Math.PI*2/34;function Ih(e,{onZoom:n,onContext:t}){const i=new $d({canvas:e,alpha:!0,antialias:!0});i.setClearColor(0,0);const s=new $s,r=new ki(-7,7,7,-7,.1,100),a=new Eh(r,e);a.enablePan=!1,a.dampingFactor=.16,a.minZoom=.65,a.maxZoom=2.1,a.minPolarAngle=.17,a.maxPolarAngle=Math.PI-.17;const _={default:new ke(-.54,.28,-1).normalize(),front:new ke(0,0,-1),back:new ke(0,0,1)},v=new Li;s.add(v);const b=Nh();s.add(b);const x=new Li,p=new ai(1,1,1),f=new Ln({color:"#ffb58a",transparent:!0,depthWrite:!1});for(let ce=0;ce<16;ce+=1)x.add(new bt(p,f));x.visible=!1,s.add(x);const E=new Qe,g=new Qe,c=new oi,o=new Un,S=new Un,T=new Qs,R=new Qe,P=e.parentElement;let D,U=13,M=0,A=!0,Y=!1,B=0,C=0,N=1/0,d=1/0,F,W=0,O=r.zoom,oe=!1,q=0;function fe(){M||!D||!A||document.hidden||Y||(M=requestAnimationFrame(X))}function X(ce){M=0;const u=W>0?Math.min((ce-W)/1e3,.05):0;W=ce;const j=oe?Uh:0;q=Rt()?Mt.damp(q,j,5,u):j,Math.abs(q-j)<.001&&(q=j),q&&r.position.applyAxisAngle(r.up,-q*u),a.update(u),G(u),me(u),i.render(s,r),(Rt()||q||oe)&&fe()}function G(ce){if(!Rt()){v.position.y=0,v.quaternion.identity(),v.scale.setScalar(1),b.material.opacity=.54;return}B+=ce,C+=ce,N+=ce,g.lerp(E,1-Math.exp(-ce*7));const u=N<.67?Math.sin(Math.PI*N/.67):0,j=N<.18?.1*Math.sin(Math.PI*N/.18):0,V=.94+.06*Mt.smoothstep(C,0,.42),L=Math.sin(B*1.8)*.012;v.position.y=.12*Math.sin(B*1.45)+.83*u,v.scale.set(V*(1+j/2),V*(1+L-j+.04*u),V*(1+j/2)),c.set(g.y*.13,-g.x*.14,-g.x*.07+Math.sin(B*1.2)*.018),o.copy(r.quaternion).invert(),v.quaternion.copy(r.quaternion).multiply(S.setFromEuler(c)).multiply(o),b.material.opacity=.54-v.position.y*.28}function pe(ce,u){E.set(ce,u),P.style.setProperty("--scene-x",`${ce*-12}px`),P.style.setProperty("--scene-y",`${u*-9}px`),fe()}function me(ce){if(d+=ce,x.visible=Rt()&&d<.68,!x.visible)return;const u=d/.68,j=1-(1-u)**2;f.opacity=(1-u)*.88,x.children.forEach((V,L)=>{const h=2*Math.PI*L/x.children.length,H=1.7+j*(2.1+L%3*.42),ne=Math.sin(Math.PI*u)*(.44+L%5*.15);V.position.set(Math.cos(h)*H,b.position.y+.42+ne,Math.sin(h)*H),V.rotation.set(h*.5+u*2,h-u,u*3),V.scale.setScalar((.13+L%4*.047)*(1-u*.65))})}function ue(){!D||!Rt()||(N=0,d=0,fe())}function ee(){const ce=e.clientWidth,u=e.clientHeight;if(!ce||!u)return;const j=ce/u,V=U/2/Math.min(1,j/.9);r.left=-V*j,r.right=V*j,r.top=V,r.bottom=-V,r.updateProjectionMatrix(),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(ce,u,!1),fe()}function de(ce,u=!1){const j=a.enableDamping;a.enableDamping=!1,a.update(0),r.position.copy(_[ce]).multiplyScalar(27),u&&(r.zoom=1),r.updateProjectionMatrix(),a.update(0),a.enableDamping=j,Ae(),fe()}function se(ce){r.zoom=Mt.clamp(ce,a.minZoom,a.maxZoom),r.updateProjectionMatrix(),a.update(0),Ae(),fe()}function Ee(ce){A=ce,W=0,M&&(!A||document.hidden||Y)&&(cancelAnimationFrame(M),M=0),fe()}function Ae(){O!==r.zoom&&(O=r.zoom,n(O))}return a.addEventListener("change",()=>{Ae(),fe()}),e.addEventListener("pointermove",ce=>{if(F?.id===ce.pointerId&&Math.hypot(ce.clientX-F.x,ce.clientY-F.y)>6&&(F=null),ce.pointerType!=="mouse"||ce.buttons||!Rt())return;const{left:u,top:j,width:V,height:L}=e.getBoundingClientRect(),h=(ce.clientX-u)/V*2-1,H=(ce.clientY-j)/L*2-1;pe(Mt.clamp(h,-1,1),Mt.clamp(H,-1,1))},{passive:!0}),e.addEventListener("pointerleave",()=>pe(0,0)),e.addEventListener("pointerdown",ce=>{pe(0,0),F=ce.isPrimary&&ce.button===0?{id:ce.pointerId,x:ce.clientX,y:ce.clientY,time:ce.timeStamp}:null}),e.addEventListener("pointercancel",()=>{F=null}),e.addEventListener("pointerup",ce=>{const u=F;if(F=null,!D||!Rt()||u?.id!==ce.pointerId||Math.hypot(ce.clientX-u.x,ce.clientY-u.y)>6||ce.timeStamp-u.time>460)return;const{left:j,top:V,width:L,height:h}=e.getBoundingClientRect();R.set((ce.clientX-j)/L*2-1,1-(ce.clientY-V)/h*2),T.setFromCamera(R,r),T.intersectObject(D,!0).length&&ue()}),e.addEventListener("keydown",ce=>{if(ce.ctrlKey||ce.metaKey||ce.altKey)return;const u=new Ui().setFromVector3(r.position),j=.16;switch(ce.key){case"Enter":case" ":ue();break;case"ArrowLeft":u.theta-=j;break;case"ArrowRight":u.theta+=j;break;case"ArrowUp":u.phi-=j;break;case"ArrowDown":u.phi+=j;break;case"+":case"=":se(r.zoom+.1);break;case"-":se(r.zoom-.1);break;default:return}ce.preventDefault(),ce.key.startsWith("Arrow")&&(u.phi=Mt.clamp(u.phi,a.minPolarAngle,a.maxPolarAngle),r.position.setFromSpherical(u),a.update(0))}),e.addEventListener("webglcontextlost",ce=>{ce.preventDefault(),Y=!0,Ee(A),t(!1)}),e.addEventListener("webglcontextrestored",()=>{Y=!1,t(!0),ee()}),new ResizeObserver(ee).observe(e),new IntersectionObserver(([ce])=>Ee(ce.isIntersecting)).observe(e),document.addEventListener("visibilitychange",()=>Ee(A)),Do.addEventListener("change",()=>{a.enableDamping=Rt(),N=1/0,d=Rt()?0:1/0,pe(0,0),fe()}),a.enableDamping=Rt(),de("default",!0),ee(),{setModel(ce,u,j=!1){const V=oh(ce,u),L=new Js().setFromObject(V),h=L.getSize(new ke);V.position.sub(L.getCenter(new ke)),D&&(v.remove(D),sh(D)),D=V,C=0,d=0,v.add(D),b.position.y=-h.y/2-.26,b.scale.set(h.x*1.65,Math.max(h.z*1.85,7),1),U=Math.max(h.y*1.4,h.x*1.4),j&&de("default",!0),ee()},setZoom:se,setView:de,setSpinning(ce){oe=ce,M||(W=0),fe()},setShadow(ce){b.visible=ce,fe()},async screenshot(){if(!D||Y)throw new Error("The 3D preview must be active to save an image.");const ce=b.visible;try{return b.visible=!1,x.visible=!1,i.render(s,r),await lo(e)}finally{b.visible=ce,fe()}}}}function Nh(){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),t=n.createRadialGradient(32,32,2,32,32,31);t.addColorStop(0,"#000d"),t.addColorStop(.48,"#0007"),t.addColorStop(1,"#0000"),n.fillStyle=t,n.fillRect(0,0,64,64);const i=new bt(new Vi(1,1),new Ln({map:new $a(e),transparent:!0,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.renderOrder=-1,i}const Oh=Object.assign({"../../plushify_chain_small.json":()=>zt(()=>import("./plushify_chain_small-Dmh6S5Pj.js"),[]).then(e=>e.default),"../../plushify_copper_small.json":()=>zt(()=>import("./plushify_copper_small-eGYiHBpr.js"),[]).then(e=>e.default),"../../plushify_diamond_small.json":()=>zt(()=>import("./plushify_diamond_small-BH8NJCAv.js"),[]).then(e=>e.default),"../../plushify_gold_small.json":()=>zt(()=>import("./plushify_gold_small-GpbP8cph.js"),[]).then(e=>e.default),"../../plushify_iron_small.json":()=>zt(()=>import("./plushify_iron_small-B-2O9rqX.js"),[]).then(e=>e.default),"../../plushify_netherite_small.json":()=>zt(()=>import("./plushify_netherite_small-ComjmCGm.js"),[]).then(e=>e.default),"../../plushy_small.json":()=>zt(()=>import("./plushy_small-CGCkgLQl.js"),[]).then(e=>e.default),"../../totem_of_undying_small.json":()=>zt(()=>import("./totem_of_undying_small-jPGIoBiH.js"),[]).then(e=>e.default)});function Fh(e){const n=Oh[`../../${e}`];if(!n)throw new Error(`Missing slim model: ${e}`);return n()}const Xe=e=>document.getElementById(e),Wi=Xe("skin-file"),Jt=Xe("drop-zone"),ba=Xe("upload-label"),Bh=Xe("avatar"),Ma=Xe("skin-name"),kh=Xe("skin-description"),Ta=Xe("skin-status"),Gh=Xe("demo-option"),wn=Xe("demo-layout"),Hh=Xe("arm-option"),Jn=Xe("arm-type"),Vh=Xe("arm-auto"),In=Xe("upload-error"),po=Xe("armor-options"),Aa=Xe("armor-hint"),mo=Xe("download"),wa=Xe("download-label"),Rn=Xe("export-status"),_o=Xe("stage"),zh=Xe("stage-message"),Wh=Xe("stage-text"),Xh=Xe("variant-caption"),ei=Xe("model"),Xi=Xe("background"),Nn=Xe("zoom"),Yh=Xe("zoom-out"),Kh=Xe("zoom-in"),qh=Xe("reset"),Fi=Xe("flip"),Bi=Xe("spin"),Ra=Xe("screenshot"),Zh=Xe("preview-toolbar").querySelectorAll("button, input"),jh=new Map,$h=new Map;let On,At,ti=!1,pt,sn="Default",dn=!1,jn=!1,ni=!1,Qt=0,Ci=0;function Ut(e,n,t=!1){e.textContent=n,e.hidden=!n,e.classList.toggle("error",t)}function hn(e){_o.setAttribute("aria-busy","false"),zh.hidden=!e,Wh.textContent=e}function tn(){mo.disabled=!pt||pt.demo||dn||jn,wn.disabled=dn,Jn.disabled=dn,Zh.forEach(e=>{e.disabled=!pt||!ti})}function Yi(e,n,t){pt={...e,demo:t,detectedArmType:n.armType},vh(Bh,pt.image),Ma.textContent=t?"askin":n.file.name,Ma.title=t?"":n.file.name,Ta.textContent=t?"Demo":"Personal",Ta.toggleAttribute("data-custom",!t);const i=n.height===32?"64 × 32 · converted to 64 × 64":"64 × 64 PNG";kh.textContent=t?`${i} · ${e.armType==="slim"?"Slim":"Classic"}`:i,Gh.hidden=!t,Hh.hidden=t||n.height===32,Vh.textContent=n.armType==="slim"?"Auto · Slim (3 px)":"Auto · Classic (4 px)",tn(),Ki()}function ya(e,n,t){return e.has(n)||e.set(n,t(n).catch(i=>{throw e.delete(n),i})),e.get(n)}async function Qh(e){const n=await On.getTexture(e);return(await co(n)).canvas}async function Ki(){if(!At||!pt)return;const e=++Ci,n=sn,t=pt;try{const i=t.armType,s=await ya(jh,`${i}/${n}`,()=>On.getModel(n,i)),r=new Set(Object.values(s.textures).map(l=>ro(s.textures,l))),a=new Map([["item/skin",t.image]]);if(r.delete("item/skin"),await Promise.all([...r].map(async l=>{a.set(l,await ya($h,l,Qh))})),e!==Ci)return;At.setModel(s,a),Xh.textContent=n.toUpperCase(),ei.setAttribute("aria-label",`Interactive ${t.armType} Plushy model`),ti&&hn("")}catch(i){if(e!==Ci)return;console.error(i),hn("This model could not be displayed. Try another armor style.")}}async function go(e){if(!On||Wi.disabled||!e)return;const n=++Qt;dn=!0,Ut(In,""),Ut(Rn,""),ba.textContent="Reading skin…",tn();try{const t=await fo(e),i=await uo(t);if(n!==Qt)return;Jn.value="auto",Yi(i,t,!1)}catch(t){n===Qt&&Ut(In,t.message,!0)}finally{n===Qt&&(dn=!1,ba.textContent=pt&&!pt.demo?"Change Your Skin":"Upload Your Skin",tn())}}Wi.addEventListener("change",e=>{go(e.currentTarget.files[0]),e.currentTarget.value=""});Jt.addEventListener("dragover",e=>{e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.dataTransfer.dropEffect="copy",Jt.setAttribute("data-dragging",""))});Jt.addEventListener("dragleave",e=>{Jt.contains(e.relatedTarget)||Jt.removeAttribute("data-dragging")});Jt.addEventListener("drop",e=>{if(e.preventDefault(),Jt.removeAttribute("data-dragging"),e.dataTransfer.files.length>1){Ut(In,"Drop one Minecraft skin PNG at a time.",!0);return}go(e.dataTransfer.files[0])});Jn.addEventListener("change",()=>{const e=Jn.value;pt={...pt,armType:e==="auto"?pt.detectedArmType:e},Ut(Rn,""),Ki()});po.addEventListener("change",e=>{if(sn=e.target.value,Xe("armor-name").textContent=sn,Xe("armor-icon").src=`/Plushify/art/${sn.toLowerCase()}.png`,sn==="Default")Aa.textContent="Leave the Totem unnamed for the default look.";else{const n=document.createElement("strong");n.textContent=sn,Aa.replaceChildren("At an anvil, name your Totem ",n," for this look.")}Ki()});function vo(){const e=Xi.querySelector(":checked").value;_o.dataset.background=e,At?.setShadow(e!=="transparent")}function So(e){Bi.setAttribute("aria-pressed",String(e)),At?.setSpinning(e)}function Eo(e){ni=e;const n=ni?"Show front":"Show back";Fi.setAttribute("aria-label",n),Fi.title=n}Xi.addEventListener("change",vo);Bi.addEventListener("click",()=>So(Bi.getAttribute("aria-pressed")!=="true"));Fi.addEventListener("click",()=>{Eo(!ni),At?.setView(ni?"back":"front")});function xo(){Eo(!1),Xi.querySelector('[value="overworld"]').checked=!0,vo(),At?.setView("default",!0)}qh.addEventListener("click",xo);ei.addEventListener("keydown",e=>{e.key==="Home"&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&(e.preventDefault(),xo())});Nn.addEventListener("input",()=>At?.setZoom(Number(Nn.value)/100));Kh.addEventListener("click",()=>At?.setZoom((Number(Nn.value)+12)/100));Yh.addEventListener("click",()=>At?.setZoom((Number(Nn.value)-12)/100));function bo(e,n){const t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n,document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}Ra.addEventListener("click",async()=>{Ra.disabled=!0;try{bo(await At.screenshot(),"Plushify-Preview.png")}catch(e){hn(e.message)}finally{tn()}});Xe("modrinth-help").addEventListener("click",()=>Xe("modrinth-guide").showModal());mo.addEventListener("click",async()=>{if(!pt||pt.demo||jn||dn)return;jn=!0;const e=pt;tn(),Ut(Rn,""),wa.textContent="Building your pack…";try{bo(await On.export(e.png,e.armType),"Plushify-Custom-Skin.zip"),e===pt&&Ut(Rn,"Your resource pack is ready.")}catch(n){console.error(n),Ut(Rn,"Could not build the ZIP. Try downloading again.",!0)}finally{jn=!1,wa.textContent="Download My Plushy",tn()}});async function Mo(e){const t=await fetch(`/Plushify/art/${e==="slim"?"askin-slim.png":"askin.png"}`);if(!t.ok)throw new Error(`Demo request returned ${t.status}`);const i=await fo(await t.blob());return{source:i,result:await uo(i)}}wn.addEventListener("change",async()=>{const e=++Qt;Ut(In,"");try{const{source:n,result:t}=await Mo(wn.value);e===Qt&&Yi(t,n,!0)}catch{if(e!==Qt)return;wn.value=pt.armType,Ut(In,"The demo skin could not be loaded. Try again.",!0)}});async function Jh(){try{At=Ih(ei,{onZoom:e=>{Nn.value=Math.round(e*100)},onContext(e){ti=e,tn(),hn(e?"":"The 3D connection was lost. Skin upload and ZIP export are still available.")}}),ti=!0,So(!0)}catch{ei.tabIndex=-1,hn("3D preview requires WebGL 2. You can still upload skins and download the pack.")}try{const[e,n]=await Promise.all([fetch(nl),Mo("classic")]);if(!e.ok)throw new Error(`Pack request returned ${e.status}`);On=await hh(await e.arrayBuffer(),il,Fh),Yi(n.result,n.source,!0),wn.disabled=!1,Wi.disabled=!1,po.disabled=!1}catch(e){console.error(e),hn("The Plushify pack could not be loaded. Reload the page to try again.")}}Jh();
