(()=>{"use strict";var t,n,e,r,i,l={646:(t,n,e)=>{e.a(t,(async t=>{var n=e(418),r=t([n]);n=(r.then?await r:r)[0],globalThis.secp256k1=n}))},418:(t,n,e)=>{e.a(t,(async t=>{e.r(n),e.d(n,{__initializeContext:()=>T,isPoint:()=>I,isPointCompressed:()=>B,isXOnlyPoint:()=>C,isPrivate:()=>U,pointAdd:()=>O,pointAddScalar:()=>N,pointCompress:()=>k,pointFromScalar:()=>Y,xOnlyPointFromScalar:()=>j,xOnlyPointFromPoint:()=>V,pointMultiply:()=>X,privateAdd:()=>F,privateSub:()=>M,privateNegate:()=>$,xOnlyPointAddTweak:()=>L,xOnlyPointAddTweakCheck:()=>K,sign:()=>Q,signRecoverable:()=>R,signSchnorr:()=>D,verify:()=>H,recover:()=>J,verifySchnorr:()=>G});var r=e(56),i=e(242),l=e(186),o=t([l]);l=(o.then?await o:o)[0];const a=new Uint8Array(l.Z.memory.buffer),f=l.Z.PRIVATE_INPUT.value,u=l.Z.PUBLIC_KEY_INPUT.value,c=l.Z.PUBLIC_KEY_INPUT2.value,s=l.Z.X_ONLY_PUBLIC_KEY_INPUT.value,y=l.Z.X_ONLY_PUBLIC_KEY_INPUT2.value,p=l.Z.TWEAK_INPUT.value,d=l.Z.HASH_INPUT.value,b=l.Z.EXTRA_DATA_INPUT.value,g=l.Z.SIGNATURE_INPUT.value,h=a.subarray(f,f+i.Yl),v=a.subarray(u,u+i.Bl),m=a.subarray(c,c+i.Bl),_=a.subarray(s,s+i.Vt),P=a.subarray(y,y+i.Vt),x=a.subarray(p,p+i.jx),S=a.subarray(d,d+i.ZM),w=a.subarray(b,b+i.P0),A=a.subarray(g,g+i.fJ);function Z(t,n){return void 0===t?void 0!==n?n.length:i.XM:t?i.XM:i.Bl}function E(t){try{return v.set(t),1===l.Z.isPoint(t.length)}finally{v.fill(0)}}function T(){l.Z.initializeContext()}function I(t){return i.DV(t)&&E(t)}function B(t){return i.rH(t)&&E(t)}function C(t){return i.vC(t)&&E(t)}function U(t){return i.hv(t)}function O(t,n,e){i.yE(t),i.yE(n);const r=Z(e,t);try{return v.set(t),m.set(n),1===l.Z.pointAdd(t.length,n.length,r)?v.slice(0,r):null}finally{v.fill(0),m.fill(0)}}function N(t,n,e){i.yE(t),i.Cm(n);const r=Z(e,t);try{return v.set(t),x.set(n),1===l.Z.pointAddScalar(t.length,r)?v.slice(0,r):null}finally{v.fill(0),x.fill(0)}}function k(t,n){i.yE(t);const e=Z(n,t);try{return v.set(t),l.Z.pointCompress(t.length,e),v.slice(0,e)}finally{v.fill(0)}}function Y(t,n){i.bl(t);const e=Z(n);try{return h.set(t),1===l.Z.pointFromScalar(e)?v.slice(0,e):null}finally{h.fill(0),v.fill(0)}}function j(t){i.bl(t);try{return h.set(t),l.Z.xOnlyPointFromScalar(),_.slice(0,i.Vt)}finally{h.fill(0),_.fill(0)}}function V(t){i.yE(t);try{return v.set(t),l.Z.xOnlyPointFromPoint(t.length),_.slice(0,i.Vt)}finally{v.fill(0),_.fill(0)}}function X(t,n,e){i.yE(t),i.Cm(n);const r=Z(e,t);try{return v.set(t),x.set(n),1===l.Z.pointMultiply(t.length,r)?v.slice(0,r):null}finally{v.fill(0),x.fill(0)}}function F(t,n){i.bl(t),i.Cm(n);try{return h.set(t),x.set(n),1===l.Z.privateAdd()?h.slice(0,i.Yl):null}finally{h.fill(0),x.fill(0)}}function M(t,n){if(i.bl(t),i.Cm(n),i.Fr(n))return new Uint8Array(t);try{return h.set(t),x.set(n),1===l.Z.privateSub()?h.slice(0,i.Yl):null}finally{h.fill(0),x.fill(0)}}function $(t){i.bl(t);try{return h.set(t),l.Z.privateNegate(),h.slice(0,i.Yl)}finally{h.fill(0)}}function L(t,n){i.$Q(t),i.Cm(n);try{_.set(t),x.set(n);const e=l.Z.xOnlyPointAddTweak();return-1!==e?{parity:e,xOnlyPubkey:_.slice(0,i.Vt)}:null}finally{_.fill(0),x.fill(0)}}function K(t,n,e,o){i.$Q(t),i.$Q(e),i.Cm(n);const a=void 0!==o;a&&i.Y6(o);try{if(_.set(t),P.set(e),x.set(n),a)return 1===l.Z.xOnlyPointAddTweakCheck(o);{l.Z.xOnlyPointAddTweak();const t=_.slice(0,i.Vt);return 0===(0,r.qu)(t,e)}}finally{_.fill(0),P.fill(0),x.fill(0)}}function Q(t,n,e){i.ax(t),i.bl(n),i.IB(e);try{return S.set(t),h.set(n),void 0!==e&&w.set(e),l.Z.sign(void 0===e?0:1),A.slice(0,i.fJ)}finally{S.fill(0),h.fill(0),void 0!==e&&w.fill(0),A.fill(0)}}function R(t,n,e){i.ax(t),i.bl(n),i.IB(e);try{S.set(t),h.set(n),void 0!==e&&w.set(e);const r=l.Z.signRecoverable(void 0===e?0:1);return{signature:A.slice(0,i.fJ),recoveryId:r}}finally{S.fill(0),h.fill(0),void 0!==e&&w.fill(0),A.fill(0)}}function D(t,n,e){i.ax(t),i.bl(n),i.IB(e);try{return S.set(t),h.set(n),void 0!==e&&w.set(e),l.Z.signSchnorr(void 0===e?0:1),A.slice(0,i.fJ)}finally{S.fill(0),h.fill(0),void 0!==e&&w.fill(0),A.fill(0)}}function H(t,n,e,r=!1){i.ax(t),i.yE(n),i.pB(e);try{return S.set(t),v.set(n),A.set(e),1===l.Z.verify(n.length,!0===r?1:0)}finally{S.fill(0),v.fill(0),A.fill(0)}}function J(t,n,e,r=!1){i.ax(t),i.pB(n),i.XS(n),2&e&&i.K7(n),i.yT((()=>C(n.subarray(0,32))));const o=Z(r);try{return S.set(t),A.set(n),1===l.Z.recover(o,e)?v.slice(0,o):null}finally{S.fill(0),A.fill(0),v.fill(0)}}function G(t,n,e){i.ax(t),i.$Q(n),i.pB(e);try{return S.set(t),_.set(n),A.set(e),1===l.Z.verifySchnorr()}finally{S.fill(0),_.fill(0),A.fill(0)}}}))},249:(t,n,e)=>{function r(){const t=function(){const t=new Uint8Array(4);return window.crypto.getRandomValues(t),t}();return(t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3]}e.d(n,{L:()=>r})},242:(t,n,e)=>{e.d(n,{Yl:()=>i,XM:()=>l,Bl:()=>o,Vt:()=>a,jx:()=>f,ZM:()=>u,P0:()=>c,fJ:()=>s,Fr:()=>h,hv:()=>v,vC:()=>m,DV:()=>_,rH:()=>P,Y6:()=>x,bl:()=>S,yE:()=>w,$Q:()=>A,Cm:()=>Z,ax:()=>E,IB:()=>T,pB:()=>I,yT:()=>B,XS:()=>C,K7:()=>U});var r=e(735);const i=32,l=33,o=65,a=32,f=32,u=32,c=32,s=64,y=new Uint8Array(32),p=new Uint8Array([255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65]),d=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,69,81,35,25,80,183,95,196,64,45,161,114,47,201,186,238]);function b(t){return t instanceof Uint8Array}function g(t,n){for(let e=0;e<32;++e)if(t[e]!==n[e])return t[e]<n[e]?-1:1;return 0}function h(t){return 0===g(t,y)}function v(t){return b(t)&&t.length===i&&g(t,y)>0&&g(t,p)<0}function m(t){return b(t)&&t.length===a}function _(t){return b(t)&&(t.length===l||t.length===o)}function P(t){return b(t)&&t.length===l}function x(t){0!==t&&1!==t&&(0,r._y)(r.al)}function S(t){v(t)||(0,r._y)(r.Y2)}function w(t){(function(t){return b(t)&&(t.length===l||t.length===o||t.length===a)})(t)||(0,r._y)(r.Gy)}function A(t){m(t)||(0,r._y)(r.Gy)}function Z(t){(function(t){return b(t)&&t.length===f&&g(t,p)<0})(t)||(0,r._y)(r.NQ)}function E(t){(function(t){return b(t)&&t.length===u})(t)||(0,r._y)(r.AI)}function T(t){(function(t){return void 0===t||b(t)&&t.length===c})(t)||(0,r._y)(r.B6)}function I(t){(function(t){return b(t)&&64===t.length&&g(t.subarray(0,32),p)<0&&g(t.subarray(32,64),p)<0})(t)||(0,r._y)(r.bf)}function B(t){t()||(0,r._y)(r.bf)}function C(t){h(t.subarray(0,32))&&(0,r._y)(r.bf),h(t.subarray(32,64))&&(0,r._y)(r.bf)}function U(t){(function(t){return b(t)&&64===t.length&&g(t.subarray(0,32),d)<0})(t)||(0,r._y)(r.X2)}},735:(t,n,e)=>{e.d(n,{Y2:()=>r,Gy:()=>i,NQ:()=>l,AI:()=>o,bf:()=>a,B6:()=>f,al:()=>u,X2:()=>c,_y:()=>y});const r=0,i=1,l=2,o=3,a=4,f=5,u=6,c=7,s={[r.toString()]:"Expected Private",[i.toString()]:"Expected Point",[l.toString()]:"Expected Tweak",[o.toString()]:"Expected Hash",[a.toString()]:"Expected Signature",[f.toString()]:"Expected Extra Data (32 bytes)",[u.toString()]:"Expected Parity (1 | 0)",[c.toString()]:"Bad Recovery Id"};function y(t){const n=s[t.toString()]||`Unknow error code: ${t}`;throw new TypeError(n)}},186:(t,n,e)=>{e.a(t,(async t=>{e.d(n,{Z:()=>l});var r=e(387),i=t([r]);const l=r=(i.then?await i:i)[0]}))},56:(t,n,e)=>{e.d(n,{qu:()=>i});const r="0123456789abcdefABCDEF";function i(t,n){const e=Math.min(t.length,n.length);for(let r=0;r<e;++r)if(t[r]!==n[r])return t[r]<n[r]?-1:1;return t.length===n.length?0:t.length>n.length?1:-1}r.split("").map((t=>t.codePointAt(0))),Array(256).fill(!0).map(((t,n)=>{const e=String.fromCodePoint(n),i=r.indexOf(e);return i<0?void 0:i<16?i:i-6})),new TextEncoder,new TextDecoder("ascii")},387:(t,n,e)=>{var r=e(249),i=e(735);t.exports=e.v(n,t.id,"secp256k1",{"./rand.js":{generateInt32:r.L},"./validate_error.js":{throwError:i._y}})}},o={};function a(t){var n=o[t];if(void 0!==n)return n.exports;var e=o[t]={id:t,exports:{}};return l[t](e,e.exports,a),e.exports}t="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",n="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",e=t=>{t&&(t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},r=t=>!--t.r&&t(),i=(t,n)=>t?t.push(n):r(n),a.a=(l,o,a)=>{var f,u,c,s=a&&[],y=l.exports,p=!0,d=!1,b=(n,e,r)=>{d||(d=!0,e.r+=n.length,n.map(((n,i)=>n[t](e,r))),d=!1)},g=new Promise(((t,n)=>{c=n,u=()=>(t(y),e(s),s=0)}));g[n]=y,g[t]=(t,n)=>{if(p)return r(t);f&&b(f,t,n),i(s,t),g.catch(n)},l.exports=g,o((l=>{if(!l)return u();var o,a;f=(l=>l.map((l=>{if(null!==l&&"object"==typeof l){if(l[t])return l;if(l.then){var o=[];l.then((t=>{a[n]=t,e(o),o=0}));var a={};return a[t]=(t,n)=>(i(o,t),l.catch(n)),a}}var f={};return f[t]=t=>r(t),f[n]=l,f})))(l);var c=new Promise(((t,e)=>{(o=()=>t(a=f.map((t=>t[n])))).r=0,b(f,o,e)}));return o.r?c:a})).then(u,c),p=!1},a.d=(t,n)=>{for(var e in n)a.o(n,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.v=(t,n,e,r)=>{var i=fetch(a.p+""+e+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(i,r).then((n=>Object.assign(t,n.instance.exports))):i.then((t=>t.arrayBuffer())).then((t=>WebAssembly.instantiate(t,r))).then((n=>Object.assign(t,n.instance.exports)))},(()=>{var t;a.g.importScripts&&(t=a.g.location+"");var n=a.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var e=n.getElementsByTagName("script");e.length&&(t=e[e.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t})(),a(646)})();
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bitcoin = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  module.exports = require('bitcoinjs-lib');
  
  },{"bitcoinjs-lib":48}],2:[function(require,module,exports){
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.output = exports.exists = exports.hash = exports.bytes = exports.bool = exports.number = void 0;
  function number(n) {
      if (!Number.isSafeInteger(n) || n < 0)
          throw new Error(`Wrong positive integer: ${n}`);
  }
  exports.number = number;
  function bool(b) {
      if (typeof b !== 'boolean')
          throw new Error(`Expected boolean, not ${b}`);
  }
  exports.bool = bool;
  function bytes(b, ...lengths) {
      if (!(b instanceof Uint8Array))
          throw new Error('Expected Uint8Array');
      if (lengths.length > 0 && !lengths.includes(b.length))
          throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
  }
  exports.bytes = bytes;
  function hash(hash) {
      if (typeof hash !== 'function' || typeof hash.create !== 'function')
          throw new Error('Hash should be wrapped by utils.wrapConstructor');
      number(hash.outputLen);
      number(hash.blockLen);
  }
  exports.hash = hash;
  function exists(instance, checkFinished = true) {
      if (instance.destroyed)
          throw new Error('Hash instance has been destroyed');
      if (checkFinished && instance.finished)
          throw new Error('Hash#digest() has already been called');
  }
  exports.exists = exists;
  function output(out, instance) {
      bytes(out);
      const min = instance.outputLen;
      if (out.length < min) {
          throw new Error(`digestInto() expects output buffer of length at least ${min}`);
      }
  }
  exports.output = output;
  const assert = { number, bool, bytes, hash, exists, output };
  exports.default = assert;
  
  },{}],3:[function(require,module,exports){
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SHA2 = void 0;
  const _assert_js_1 = require("./_assert.js");
  const utils_js_1 = require("./utils.js");
  // Polyfill for Safari 14
  function setBigUint64(view, byteOffset, value, isLE) {
      if (typeof view.setBigUint64 === 'function')
          return view.setBigUint64(byteOffset, value, isLE);
      const _32n = BigInt(32);
      const _u32_max = BigInt(0xffffffff);
      const wh = Number((value >> _32n) & _u32_max);
      const wl = Number(value & _u32_max);
      const h = isLE ? 4 : 0;
      const l = isLE ? 0 : 4;
      view.setUint32(byteOffset + h, wh, isLE);
      view.setUint32(byteOffset + l, wl, isLE);
  }
  // Base SHA2 class (RFC 6234)
  class SHA2 extends utils_js_1.Hash {
      constructor(blockLen, outputLen, padOffset, isLE) {
          super();
          this.blockLen = blockLen;
          this.outputLen = outputLen;
          this.padOffset = padOffset;
          this.isLE = isLE;
          this.finished = false;
          this.length = 0;
          this.pos = 0;
          this.destroyed = false;
          this.buffer = new Uint8Array(blockLen);
          this.view = (0, utils_js_1.createView)(this.buffer);
      }
      update(data) {
          (0, _assert_js_1.exists)(this);
          const { view, buffer, blockLen } = this;
          data = (0, utils_js_1.toBytes)(data);
          const len = data.length;
          for (let pos = 0; pos < len;) {
              const take = Math.min(blockLen - this.pos, len - pos);
              // Fast path: we have at least one block in input, cast it to view and process
              if (take === blockLen) {
                  const dataView = (0, utils_js_1.createView)(data);
                  for (; blockLen <= len - pos; pos += blockLen)
                      this.process(dataView, pos);
                  continue;
              }
              buffer.set(data.subarray(pos, pos + take), this.pos);
              this.pos += take;
              pos += take;
              if (this.pos === blockLen) {
                  this.process(view, 0);
                  this.pos = 0;
              }
          }
          this.length += data.length;
          this.roundClean();
          return this;
      }
      digestInto(out) {
          (0, _assert_js_1.exists)(this);
          (0, _assert_js_1.output)(out, this);
          this.finished = true;
          // Padding
          // We can avoid allocation of buffer for padding completely if it
          // was previously not allocated here. But it won't change performance.
          const { buffer, view, blockLen, isLE } = this;
          let { pos } = this;
          // append the bit '1' to the message
          buffer[pos++] = 0b10000000;
          this.buffer.subarray(pos).fill(0);
          // we have less than padOffset left in buffer, so we cannot put length in current block, need process it and pad again
          if (this.padOffset > blockLen - pos) {
              this.process(view, 0);
              pos = 0;
          }
          // Pad until full block byte with zeros
          for (let i = pos; i < blockLen; i++)
              buffer[i] = 0;
          // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
          // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
          // So we just write lowest 64 bits of that value.
          setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
          this.process(view, 0);
          const oview = (0, utils_js_1.createView)(out);
          const len = this.outputLen;
          // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
          if (len % 4)
              throw new Error('_sha2: outputLen should be aligned to 32bit');
          const outLen = len / 4;
          const state = this.get();
          if (outLen > state.length)
              throw new Error('_sha2: outputLen bigger than state');
          for (let i = 0; i < outLen; i++)
              oview.setUint32(4 * i, state[i], isLE);
      }
      digest() {
          const { buffer, outputLen } = this;
          this.digestInto(buffer);
          const res = buffer.slice(0, outputLen);
          this.destroy();
          return res;
      }
      _cloneInto(to) {
          to || (to = new this.constructor());
          to.set(...this.get());
          const { blockLen, buffer, length, finished, destroyed, pos } = this;
          to.length = length;
          to.pos = pos;
          to.finished = finished;
          to.destroyed = destroyed;
          if (length % blockLen)
              to.buffer.set(buffer);
          return to;
      }
  }
  exports.SHA2 = SHA2;
  
  },{"./_assert.js":2,"./utils.js":8}],4:[function(require,module,exports){
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.crypto = void 0;
  exports.crypto = typeof globalThis === 'object' && 'crypto' in globalThis ? globalThis.crypto : undefined;
  
  },{}],5:[function(require,module,exports){
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ripemd160 = exports.RIPEMD160 = void 0;
  const _sha2_js_1 = require("./_sha2.js");
  const utils_js_1 = require("./utils.js");
  // https://homes.esat.kuleuven.be/~bosselae/ripemd160.html
  // https://homes.esat.kuleuven.be/~bosselae/ripemd160/pdf/AB-9601/AB-9601.pdf
  const Rho = /* @__PURE__ */ new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]);
  const Id = /* @__PURE__ */ Uint8Array.from({ length: 16 }, (_, i) => i);
  const Pi = /* @__PURE__ */ Id.map((i) => (9 * i + 5) % 16);
  let idxL = [Id];
  let idxR = [Pi];
  for (let i = 0; i < 4; i++)
      for (let j of [idxL, idxR])
          j.push(j[i].map((k) => Rho[k]));
  const shifts = /* @__PURE__ */ [
      [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
      [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
      [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
      [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
      [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
  ].map((i) => new Uint8Array(i));
  const shiftsL = /* @__PURE__ */ idxL.map((idx, i) => idx.map((j) => shifts[i][j]));
  const shiftsR = /* @__PURE__ */ idxR.map((idx, i) => idx.map((j) => shifts[i][j]));
  const Kl = /* @__PURE__ */ new Uint32Array([
      0x00000000, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e,
  ]);
  const Kr = /* @__PURE__ */ new Uint32Array([
      0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0x00000000,
  ]);
  // The rotate left (circular left shift) operation for uint32
  const rotl = (word, shift) => (word << shift) | (word >>> (32 - shift));
  // It's called f() in spec.
  function f(group, x, y, z) {
      if (group === 0)
          return x ^ y ^ z;
      else if (group === 1)
          return (x & y) | (~x & z);
      else if (group === 2)
          return (x | ~y) ^ z;
      else if (group === 3)
          return (x & z) | (y & ~z);
      else
          return x ^ (y | ~z);
  }
  // Temporary buffer, not used to store anything between runs
  const BUF = /* @__PURE__ */ new Uint32Array(16);
  class RIPEMD160 extends _sha2_js_1.SHA2 {
      constructor() {
          super(64, 20, 8, true);
          this.h0 = 0x67452301 | 0;
          this.h1 = 0xefcdab89 | 0;
          this.h2 = 0x98badcfe | 0;
          this.h3 = 0x10325476 | 0;
          this.h4 = 0xc3d2e1f0 | 0;
      }
      get() {
          const { h0, h1, h2, h3, h4 } = this;
          return [h0, h1, h2, h3, h4];
      }
      set(h0, h1, h2, h3, h4) {
          this.h0 = h0 | 0;
          this.h1 = h1 | 0;
          this.h2 = h2 | 0;
          this.h3 = h3 | 0;
          this.h4 = h4 | 0;
      }
      process(view, offset) {
          for (let i = 0; i < 16; i++, offset += 4)
              BUF[i] = view.getUint32(offset, true);
          // prettier-ignore
          let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
          // Instead of iterating 0 to 80, we split it into 5 groups
          // And use the groups in constants, functions, etc. Much simpler
          for (let group = 0; group < 5; group++) {
              const rGroup = 4 - group;
              const hbl = Kl[group], hbr = Kr[group]; // prettier-ignore
              const rl = idxL[group], rr = idxR[group]; // prettier-ignore
              const sl = shiftsL[group], sr = shiftsR[group]; // prettier-ignore
              for (let i = 0; i < 16; i++) {
                  const tl = (rotl(al + f(group, bl, cl, dl) + BUF[rl[i]] + hbl, sl[i]) + el) | 0;
                  al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl; // prettier-ignore
              }
              // 2 loops are 10% faster
              for (let i = 0; i < 16; i++) {
                  const tr = (rotl(ar + f(rGroup, br, cr, dr) + BUF[rr[i]] + hbr, sr[i]) + er) | 0;
                  ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr; // prettier-ignore
              }
          }
          // Add the compressed chunk to the current hash value
          this.set((this.h1 + cl + dr) | 0, (this.h2 + dl + er) | 0, (this.h3 + el + ar) | 0, (this.h4 + al + br) | 0, (this.h0 + bl + cr) | 0);
      }
      roundClean() {
          BUF.fill(0);
      }
      destroy() {
          this.destroyed = true;
          this.buffer.fill(0);
          this.set(0, 0, 0, 0, 0);
      }
  }
  exports.RIPEMD160 = RIPEMD160;
  /**
   * RIPEMD-160 - a hash function from 1990s.
   * @param message - msg that would be hashed
   */
  exports.ripemd160 = (0, utils_js_1.wrapConstructor)(() => new RIPEMD160());
  
  },{"./_sha2.js":3,"./utils.js":8}],6:[function(require,module,exports){
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sha1 = void 0;
  const _sha2_js_1 = require("./_sha2.js");
  const utils_js_1 = require("./utils.js");
  // SHA1 was cryptographically broken.
  // It is still widely used in legacy apps. Don't use it for a new protocol.
  // RFC 3174
  const rotl = (word, shift) => (word << shift) | ((word >>> (32 - shift)) >>> 0);
  // Choice: a ? b : c
  const Chi = (a, b, c) => (a & b) ^ (~a & c);
  // Majority function, true if any two inpust is true
  const Maj = (a, b, c) => (a & b) ^ (a & c) ^ (b & c);
  // Initial state
  const IV = /* @__PURE__ */ new Uint32Array([
      0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0,
  ]);
  // Temporary buffer, not used to store anything between runs
  // Named this way because it matches specification.
  const SHA1_W = /* @__PURE__ */ new Uint32Array(80);
  class SHA1 extends _sha2_js_1.SHA2 {
      constructor() {
          super(64, 20, 8, false);
          this.A = IV[0] | 0;
          this.B = IV[1] | 0;
          this.C = IV[2] | 0;
          this.D = IV[3] | 0;
          this.E = IV[4] | 0;
      }
      get() {
          const { A, B, C, D, E } = this;
          return [A, B, C, D, E];
      }
      set(A, B, C, D, E) {
          this.A = A | 0;
          this.B = B | 0;
          this.C = C | 0;
          this.D = D | 0;
          this.E = E | 0;
      }
      process(view, offset) {
          for (let i = 0; i < 16; i++, offset += 4)
              SHA1_W[i] = view.getUint32(offset, false);
          for (let i = 16; i < 80; i++)
              SHA1_W[i] = rotl(SHA1_W[i - 3] ^ SHA1_W[i - 8] ^ SHA1_W[i - 14] ^ SHA1_W[i - 16], 1);
          // Compression function main loop, 80 rounds
          let { A, B, C, D, E } = this;
          for (let i = 0; i < 80; i++) {
              let F, K;
              if (i < 20) {
                  F = Chi(B, C, D);
                  K = 0x5a827999;
              }
              else if (i < 40) {
                  F = B ^ C ^ D;
                  K = 0x6ed9eba1;
              }
              else if (i < 60) {
                  F = Maj(B, C, D);
                  K = 0x8f1bbcdc;
              }
              else {
                  F = B ^ C ^ D;
                  K = 0xca62c1d6;
              }
              const T = (rotl(A, 5) + F + E + K + SHA1_W[i]) | 0;
              E = D;
              D = C;
              C = rotl(B, 30);
              B = A;
              A = T;
          }
          // Add the compressed chunk to the current hash value
          A = (A + this.A) | 0;
          B = (B + this.B) | 0;
          C = (C + this.C) | 0;
          D = (D + this.D) | 0;
          E = (E + this.E) | 0;
          this.set(A, B, C, D, E);
      }
      roundClean() {
          SHA1_W.fill(0);
      }
      destroy() {
          this.set(0, 0, 0, 0, 0);
          this.buffer.fill(0);
      }
  }
  exports.sha1 = (0, utils_js_1.wrapConstructor)(() => new SHA1());
  
  },{"./_sha2.js":3,"./utils.js":8}],7:[function(require,module,exports){
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sha224 = exports.sha256 = void 0;
  const _sha2_js_1 = require("./_sha2.js");
  const utils_js_1 = require("./utils.js");
  // SHA2-256 need to try 2^128 hashes to execute birthday attack.
  // BTC network is doing 2^67 hashes/sec as per early 2023.
  // Choice: a ? b : c
  const Chi = (a, b, c) => (a & b) ^ (~a & c);
  // Majority function, true if any two inpust is true
  const Maj = (a, b, c) => (a & b) ^ (a & c) ^ (b & c);
  // Round constants:
  // first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
  // prettier-ignore
  const SHA256_K = /* @__PURE__ */ new Uint32Array([
      0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
      0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
      0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
      0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
      0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
      0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
      0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
      0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ]);
  // Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
  // prettier-ignore
  const IV = /* @__PURE__ */ new Uint32Array([
      0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
  ]);
  // Temporary buffer, not used to store anything between runs
  // Named this way because it matches specification.
  const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
  class SHA256 extends _sha2_js_1.SHA2 {
      constructor() {
          super(64, 32, 8, false);
          // We cannot use array here since array allows indexing by variable
          // which means optimizer/compiler cannot use registers.
          this.A = IV[0] | 0;
          this.B = IV[1] | 0;
          this.C = IV[2] | 0;
          this.D = IV[3] | 0;
          this.E = IV[4] | 0;
          this.F = IV[5] | 0;
          this.G = IV[6] | 0;
          this.H = IV[7] | 0;
      }
      get() {
          const { A, B, C, D, E, F, G, H } = this;
          return [A, B, C, D, E, F, G, H];
      }
      // prettier-ignore
      set(A, B, C, D, E, F, G, H) {
          this.A = A | 0;
          this.B = B | 0;
          this.C = C | 0;
          this.D = D | 0;
          this.E = E | 0;
          this.F = F | 0;
          this.G = G | 0;
          this.H = H | 0;
      }
      process(view, offset) {
          // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
          for (let i = 0; i < 16; i++, offset += 4)
              SHA256_W[i] = view.getUint32(offset, false);
          for (let i = 16; i < 64; i++) {
              const W15 = SHA256_W[i - 15];
              const W2 = SHA256_W[i - 2];
              const s0 = (0, utils_js_1.rotr)(W15, 7) ^ (0, utils_js_1.rotr)(W15, 18) ^ (W15 >>> 3);
              const s1 = (0, utils_js_1.rotr)(W2, 17) ^ (0, utils_js_1.rotr)(W2, 19) ^ (W2 >>> 10);
              SHA256_W[i] = (s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16]) | 0;
          }
          // Compression function main loop, 64 rounds
          let { A, B, C, D, E, F, G, H } = this;
          for (let i = 0; i < 64; i++) {
              const sigma1 = (0, utils_js_1.rotr)(E, 6) ^ (0, utils_js_1.rotr)(E, 11) ^ (0, utils_js_1.rotr)(E, 25);
              const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
              const sigma0 = (0, utils_js_1.rotr)(A, 2) ^ (0, utils_js_1.rotr)(A, 13) ^ (0, utils_js_1.rotr)(A, 22);
              const T2 = (sigma0 + Maj(A, B, C)) | 0;
              H = G;
              G = F;
              F = E;
              E = (D + T1) | 0;
              D = C;
              C = B;
              B = A;
              A = (T1 + T2) | 0;
          }
          // Add the compressed chunk to the current hash value
          A = (A + this.A) | 0;
          B = (B + this.B) | 0;
          C = (C + this.C) | 0;
          D = (D + this.D) | 0;
          E = (E + this.E) | 0;
          F = (F + this.F) | 0;
          G = (G + this.G) | 0;
          H = (H + this.H) | 0;
          this.set(A, B, C, D, E, F, G, H);
      }
      roundClean() {
          SHA256_W.fill(0);
      }
      destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0);
          this.buffer.fill(0);
      }
  }
  // Constants from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
  class SHA224 extends SHA256 {
      constructor() {
          super();
          this.A = 0xc1059ed8 | 0;
          this.B = 0x367cd507 | 0;
          this.C = 0x3070dd17 | 0;
          this.D = 0xf70e5939 | 0;
          this.E = 0xffc00b31 | 0;
          this.F = 0x68581511 | 0;
          this.G = 0x64f98fa7 | 0;
          this.H = 0xbefa4fa4 | 0;
          this.outputLen = 28;
      }
  }
  /**
   * SHA2-256 hash function
   * @param message - data that would be hashed
   */
  exports.sha256 = (0, utils_js_1.wrapConstructor)(() => new SHA256());
  exports.sha224 = (0, utils_js_1.wrapConstructor)(() => new SHA224());
  
  },{"./_sha2.js":3,"./utils.js":8}],8:[function(require,module,exports){
  "use strict";
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.randomBytes = exports.wrapXOFConstructorWithOpts = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
  // We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
  // node.js versions earlier than v19 don't declare it in global scope.
  // For node.js, package.json#exports field mapping rewrites import
  // from `crypto` to `cryptoNode`, which imports native module.
  // Makes the utils un-importable in browsers without a bundler.
  // Once node.js 18 is deprecated, we can just drop the import.
  const crypto_1 = require("@noble/hashes/crypto");
  const u8a = (a) => a instanceof Uint8Array;
  // Cast array to different type
  const u8 = (arr) => new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
  exports.u8 = u8;
  const u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
  exports.u32 = u32;
  // Cast array to view
  const createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  exports.createView = createView;
  // The rotate right (circular right shift) operation for uint32
  const rotr = (word, shift) => (word << (32 - shift)) | (word >>> shift);
  exports.rotr = rotr;
  // big-endian hardware is rare. Just in case someone still decides to run hashes:
  // early-throw an error because we don't support BE yet.
  exports.isLE = new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44;
  if (!exports.isLE)
      throw new Error('Non little-endian hardware is not supported');
  const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
  /**
   * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
   */
  function bytesToHex(bytes) {
      if (!u8a(bytes))
          throw new Error('Uint8Array expected');
      // pre-caching improves the speed 6x
      let hex = '';
      for (let i = 0; i < bytes.length; i++) {
          hex += hexes[bytes[i]];
      }
      return hex;
  }
  exports.bytesToHex = bytesToHex;
  /**
   * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
   */
  function hexToBytes(hex) {
      if (typeof hex !== 'string')
          throw new Error('hex string expected, got ' + typeof hex);
      const len = hex.length;
      if (len % 2)
          throw new Error('padded hex string expected, got unpadded hex of length ' + len);
      const array = new Uint8Array(len / 2);
      for (let i = 0; i < array.length; i++) {
          const j = i * 2;
          const hexByte = hex.slice(j, j + 2);
          const byte = Number.parseInt(hexByte, 16);
          if (Number.isNaN(byte) || byte < 0)
              throw new Error('Invalid byte sequence');
          array[i] = byte;
      }
      return array;
  }
  exports.hexToBytes = hexToBytes;
  // There is no setImmediate in browser and setTimeout is slow.
  // call of async fn will return Promise, which will be fullfiled only on
  // next scheduler queue processing step and this is exactly what we need.
  const nextTick = async () => { };
  exports.nextTick = nextTick;
  // Returns control to thread each 'tick' ms to avoid blocking
  async function asyncLoop(iters, tick, cb) {
      let ts = Date.now();
      for (let i = 0; i < iters; i++) {
          cb(i);
          // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
          const diff = Date.now() - ts;
          if (diff >= 0 && diff < tick)
              continue;
          await (0, exports.nextTick)();
          ts += diff;
      }
  }
  exports.asyncLoop = asyncLoop;
  /**
   * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
   */
  function utf8ToBytes(str) {
      if (typeof str !== 'string')
          throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
      return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
  }
  exports.utf8ToBytes = utf8ToBytes;
  /**
   * Normalizes (non-hex) string or Uint8Array to Uint8Array.
   * Warning: when Uint8Array is passed, it would NOT get copied.
   * Keep in mind for future mutable operations.
   */
  function toBytes(data) {
      if (typeof data === 'string')
          data = utf8ToBytes(data);
      if (!u8a(data))
          throw new Error(`expected Uint8Array, got ${typeof data}`);
      return data;
  }
  exports.toBytes = toBytes;
  /**
   * Copies several Uint8Arrays into one.
   */
  function concatBytes(...arrays) {
      const r = new Uint8Array(arrays.reduce((sum, a) => sum + a.length, 0));
      let pad = 0; // walk through each item, ensure they have proper type
      arrays.forEach((a) => {
          if (!u8a(a))
              throw new Error('Uint8Array expected');
          r.set(a, pad);
          pad += a.length;
      });
      return r;
  }
  exports.concatBytes = concatBytes;
  // For runtime check if class implements interface
  class Hash {
      // Safe version that clones internal state
      clone() {
          return this._cloneInto();
      }
  }
  exports.Hash = Hash;
  const toStr = {}.toString;
  function checkOpts(defaults, opts) {
      if (opts !== undefined && toStr.call(opts) !== '[object Object]')
          throw new Error('Options should be object or undefined');
      const merged = Object.assign(defaults, opts);
      return merged;
  }
  exports.checkOpts = checkOpts;
  function wrapConstructor(hashCons) {
      const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
      const tmp = hashCons();
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = () => hashCons();
      return hashC;
  }
  exports.wrapConstructor = wrapConstructor;
  function wrapConstructorWithOpts(hashCons) {
      const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
      const tmp = hashCons({});
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = (opts) => hashCons(opts);
      return hashC;
  }
  exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
  function wrapXOFConstructorWithOpts(hashCons) {
      const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
      const tmp = hashCons({});
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = (opts) => hashCons(opts);
      return hashC;
  }
  exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
  /**
   * Secure PRNG. Uses `crypto.getRandomValues`, which defers to OS.
   */
  function randomBytes(bytesLength = 32) {
      if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === 'function') {
          return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
      }
      throw new Error('crypto.getRandomValues must be defined');
  }
  exports.randomBytes = randomBytes;
  
  },{"@noble/hashes/crypto":4}],9:[function(require,module,exports){
  'use strict'
  // base-x encoding / decoding
  // Copyright (c) 2018 base-x contributors
  // Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
  // Distributed under the MIT software license, see the accompanying
  // file LICENSE or http://www.opensource.org/licenses/mit-license.php.
  function base (ALPHABET) {
    if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }
    var BASE_MAP = new Uint8Array(256)
    for (var j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255
    }
    for (var i = 0; i < ALPHABET.length; i++) {
      var x = ALPHABET.charAt(i)
      var xc = x.charCodeAt(0)
      if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }
      BASE_MAP[xc] = i
    }
    var BASE = ALPHABET.length
    var LEADER = ALPHABET.charAt(0)
    var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    function encode (source) {
      if (source instanceof Uint8Array) {
      } else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength)
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source)
      }
      if (!(source instanceof Uint8Array)) { throw new TypeError('Expected Uint8Array') }
      if (source.length === 0) { return '' }
          // Skip & count leading zeroes.
      var zeroes = 0
      var length = 0
      var pbegin = 0
      var pend = source.length
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++
        zeroes++
      }
          // Allocate enough space in big-endian base58 representation.
      var size = ((pend - pbegin) * iFACTOR + 1) >>> 0
      var b58 = new Uint8Array(size)
          // Process the bytes.
      while (pbegin !== pend) {
        var carry = source[pbegin]
              // Apply "b58 = b58 * 256 + ch".
        var i = 0
        for (var it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {
          carry += (256 * b58[it1]) >>> 0
          b58[it1] = (carry % BASE) >>> 0
          carry = (carry / BASE) >>> 0
        }
        if (carry !== 0) { throw new Error('Non-zero carry') }
        length = i
        pbegin++
      }
          // Skip leading zeroes in base58 result.
      var it2 = size - length
      while (it2 !== size && b58[it2] === 0) {
        it2++
      }
          // Translate the result into a string.
      var str = LEADER.repeat(zeroes)
      for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]) }
      return str
    }
    function decodeUnsafe (source) {
      if (typeof source !== 'string') { throw new TypeError('Expected String') }
      if (source.length === 0) { return new Uint8Array() }
      var psz = 0
          // Skip and count leading '1's.
      var zeroes = 0
      var length = 0
      while (source[psz] === LEADER) {
        zeroes++
        psz++
      }
          // Allocate enough space in big-endian base256 representation.
      var size = (((source.length - psz) * FACTOR) + 1) >>> 0 // log(58) / log(256), rounded up.
      var b256 = new Uint8Array(size)
          // Process the characters.
      while (source[psz]) {
              // Decode character
        var carry = BASE_MAP[source.charCodeAt(psz)]
              // Invalid character
        if (carry === 255) { return }
        var i = 0
        for (var it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {
          carry += (BASE * b256[it3]) >>> 0
          b256[it3] = (carry % 256) >>> 0
          carry = (carry / 256) >>> 0
        }
        if (carry !== 0) { throw new Error('Non-zero carry') }
        length = i
        psz++
      }
          // Skip leading zeroes in b256.
      var it4 = size - length
      while (it4 !== size && b256[it4] === 0) {
        it4++
      }
      var vch = new Uint8Array(zeroes + (size - it4))
      var j = zeroes
      while (it4 !== size) {
        vch[j++] = b256[it4++]
      }
      return vch
    }
    function decode (string) {
      var buffer = decodeUnsafe(string)
      if (buffer) { return buffer }
      throw new Error('Non-base' + BASE + ' character')
    }
    return {
      encode: encode,
      decodeUnsafe: decodeUnsafe,
      decode: decode
    }
  }
  module.exports = base
  
  },{}],10:[function(require,module,exports){
  'use strict'
  
  exports.byteLength = byteLength
  exports.toByteArray = toByteArray
  exports.fromByteArray = fromByteArray
  
  var lookup = []
  var revLookup = []
  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
  
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i]
    revLookup[code.charCodeAt(i)] = i
  }
  
  // Support decoding URL-safe base64 strings, as Node.js does.
  // See: https://en.wikipedia.org/wiki/Base64#URL_applications
  revLookup['-'.charCodeAt(0)] = 62
  revLookup['_'.charCodeAt(0)] = 63
  
  function getLens (b64) {
    var len = b64.length
  
    if (len % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4')
    }
  
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=')
    if (validLen === -1) validLen = len
  
    var placeHoldersLen = validLen === len
      ? 0
      : 4 - (validLen % 4)
  
    return [validLen, placeHoldersLen]
  }
  
  // base64 is 4/3 + up to two characters of the original data
  function byteLength (b64) {
    var lens = getLens(b64)
    var validLen = lens[0]
    var placeHoldersLen = lens[1]
    return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
  }
  
  function _byteLength (b64, validLen, placeHoldersLen) {
    return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
  }
  
  function toByteArray (b64) {
    var tmp
    var lens = getLens(b64)
    var validLen = lens[0]
    var placeHoldersLen = lens[1]
  
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))
  
    var curByte = 0
  
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0
      ? validLen - 4
      : validLen
  
    var i
    for (i = 0; i < len; i += 4) {
      tmp =
        (revLookup[b64.charCodeAt(i)] << 18) |
        (revLookup[b64.charCodeAt(i + 1)] << 12) |
        (revLookup[b64.charCodeAt(i + 2)] << 6) |
        revLookup[b64.charCodeAt(i + 3)]
      arr[curByte++] = (tmp >> 16) & 0xFF
      arr[curByte++] = (tmp >> 8) & 0xFF
      arr[curByte++] = tmp & 0xFF
    }
  
    if (placeHoldersLen === 2) {
      tmp =
        (revLookup[b64.charCodeAt(i)] << 2) |
        (revLookup[b64.charCodeAt(i + 1)] >> 4)
      arr[curByte++] = tmp & 0xFF
    }
  
    if (placeHoldersLen === 1) {
      tmp =
        (revLookup[b64.charCodeAt(i)] << 10) |
        (revLookup[b64.charCodeAt(i + 1)] << 4) |
        (revLookup[b64.charCodeAt(i + 2)] >> 2)
      arr[curByte++] = (tmp >> 8) & 0xFF
      arr[curByte++] = tmp & 0xFF
    }
  
    return arr
  }
  
  function tripletToBase64 (num) {
    return lookup[num >> 18 & 0x3F] +
      lookup[num >> 12 & 0x3F] +
      lookup[num >> 6 & 0x3F] +
      lookup[num & 0x3F]
  }
  
  function encodeChunk (uint8, start, end) {
    var tmp
    var output = []
    for (var i = start; i < end; i += 3) {
      tmp =
        ((uint8[i] << 16) & 0xFF0000) +
        ((uint8[i + 1] << 8) & 0xFF00) +
        (uint8[i + 2] & 0xFF)
      output.push(tripletToBase64(tmp))
    }
    return output.join('')
  }
  
  function fromByteArray (uint8) {
    var tmp
    var len = uint8.length
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    var parts = []
    var maxChunkLength = 16383 // must be multiple of 3
  
    // go through the array every three bytes, we'll deal with trailing stuff later
    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
    }
  
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
      tmp = uint8[len - 1]
      parts.push(
        lookup[tmp >> 2] +
        lookup[(tmp << 4) & 0x3F] +
        '=='
      )
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + uint8[len - 1]
      parts.push(
        lookup[tmp >> 10] +
        lookup[(tmp >> 4) & 0x3F] +
        lookup[(tmp << 2) & 0x3F] +
        '='
      )
    }
  
    return parts.join('')
  }
  
  },{}],11:[function(require,module,exports){
  'use strict';
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.bech32m = exports.bech32 = void 0;
  const ALPHABET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
  const ALPHABET_MAP = {};
  for (let z = 0; z < ALPHABET.length; z++) {
      const x = ALPHABET.charAt(z);
      ALPHABET_MAP[x] = z;
  }
  function polymodStep(pre) {
      const b = pre >> 25;
      return (((pre & 0x1ffffff) << 5) ^
          (-((b >> 0) & 1) & 0x3b6a57b2) ^
          (-((b >> 1) & 1) & 0x26508e6d) ^
          (-((b >> 2) & 1) & 0x1ea119fa) ^
          (-((b >> 3) & 1) & 0x3d4233dd) ^
          (-((b >> 4) & 1) & 0x2a1462b3));
  }
  function prefixChk(prefix) {
      let chk = 1;
      for (let i = 0; i < prefix.length; ++i) {
          const c = prefix.charCodeAt(i);
          if (c < 33 || c > 126)
              return 'Invalid prefix (' + prefix + ')';
          chk = polymodStep(chk) ^ (c >> 5);
      }
      chk = polymodStep(chk);
      for (let i = 0; i < prefix.length; ++i) {
          const v = prefix.charCodeAt(i);
          chk = polymodStep(chk) ^ (v & 0x1f);
      }
      return chk;
  }
  function convert(data, inBits, outBits, pad) {
      let value = 0;
      let bits = 0;
      const maxV = (1 << outBits) - 1;
      const result = [];
      for (let i = 0; i < data.length; ++i) {
          value = (value << inBits) | data[i];
          bits += inBits;
          while (bits >= outBits) {
              bits -= outBits;
              result.push((value >> bits) & maxV);
          }
      }
      if (pad) {
          if (bits > 0) {
              result.push((value << (outBits - bits)) & maxV);
          }
      }
      else {
          if (bits >= inBits)
              return 'Excess padding';
          if ((value << (outBits - bits)) & maxV)
              return 'Non-zero padding';
      }
      return result;
  }
  function toWords(bytes) {
      return convert(bytes, 8, 5, true);
  }
  function fromWordsUnsafe(words) {
      const res = convert(words, 5, 8, false);
      if (Array.isArray(res))
          return res;
  }
  function fromWords(words) {
      const res = convert(words, 5, 8, false);
      if (Array.isArray(res))
          return res;
      throw new Error(res);
  }
  function getLibraryFromEncoding(encoding) {
      let ENCODING_CONST;
      if (encoding === 'bech32') {
          ENCODING_CONST = 1;
      }
      else {
          ENCODING_CONST = 0x2bc830a3;
      }
      function encode(prefix, words, LIMIT) {
          LIMIT = LIMIT || 90;
          if (prefix.length + 7 + words.length > LIMIT)
              throw new TypeError('Exceeds length limit');
          prefix = prefix.toLowerCase();
          // determine chk mod
          let chk = prefixChk(prefix);
          if (typeof chk === 'string')
              throw new Error(chk);
          let result = prefix + '1';
          for (let i = 0; i < words.length; ++i) {
              const x = words[i];
              if (x >> 5 !== 0)
                  throw new Error('Non 5-bit word');
              chk = polymodStep(chk) ^ x;
              result += ALPHABET.charAt(x);
          }
          for (let i = 0; i < 6; ++i) {
              chk = polymodStep(chk);
          }
          chk ^= ENCODING_CONST;
          for (let i = 0; i < 6; ++i) {
              const v = (chk >> ((5 - i) * 5)) & 0x1f;
              result += ALPHABET.charAt(v);
          }
          return result;
      }
      function __decode(str, LIMIT) {
          LIMIT = LIMIT || 90;
          if (str.length < 8)
              return str + ' too short';
          if (str.length > LIMIT)
              return 'Exceeds length limit';
          // don't allow mixed case
          const lowered = str.toLowerCase();
          const uppered = str.toUpperCase();
          if (str !== lowered && str !== uppered)
              return 'Mixed-case string ' + str;
          str = lowered;
          const split = str.lastIndexOf('1');
          if (split === -1)
              return 'No separator character for ' + str;
          if (split === 0)
              return 'Missing prefix for ' + str;
          const prefix = str.slice(0, split);
          const wordChars = str.slice(split + 1);
          if (wordChars.length < 6)
              return 'Data too short';
          let chk = prefixChk(prefix);
          if (typeof chk === 'string')
              return chk;
          const words = [];
          for (let i = 0; i < wordChars.length; ++i) {
              const c = wordChars.charAt(i);
              const v = ALPHABET_MAP[c];
              if (v === undefined)
                  return 'Unknown character ' + c;
              chk = polymodStep(chk) ^ v;
              // not in the checksum?
              if (i + 6 >= wordChars.length)
                  continue;
              words.push(v);
          }
          if (chk !== ENCODING_CONST)
              return 'Invalid checksum for ' + str;
          return { prefix, words };
      }
      function decodeUnsafe(str, LIMIT) {
          const res = __decode(str, LIMIT);
          if (typeof res === 'object')
              return res;
      }
      function decode(str, LIMIT) {
          const res = __decode(str, LIMIT);
          if (typeof res === 'object')
              return res;
          throw new Error(res);
      }
      return {
          decodeUnsafe,
          decode,
          encode,
          toWords,
          fromWordsUnsafe,
          fromWords,
      };
  }
  exports.bech32 = getLibraryFromEncoding('bech32');
  exports.bech32m = getLibraryFromEncoding('bech32m');
  
  },{}],12:[function(require,module,exports){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const parser_1 = require('../parser');
  function combine(psbts) {
    const self = psbts[0];
    const selfKeyVals = parser_1.psbtToKeyVals(self);
    const others = psbts.slice(1);
    if (others.length === 0) throw new Error('Combine: Nothing to combine');
    const selfTx = getTx(self);
    if (selfTx === undefined) {
      throw new Error('Combine: Self missing transaction');
    }
    const selfGlobalSet = getKeySet(selfKeyVals.globalKeyVals);
    const selfInputSets = selfKeyVals.inputKeyVals.map(getKeySet);
    const selfOutputSets = selfKeyVals.outputKeyVals.map(getKeySet);
    for (const other of others) {
      const otherTx = getTx(other);
      if (
        otherTx === undefined ||
        !otherTx.toBuffer().equals(selfTx.toBuffer())
      ) {
        throw new Error(
          'Combine: One of the Psbts does not have the same transaction.',
        );
      }
      const otherKeyVals = parser_1.psbtToKeyVals(other);
      const otherGlobalSet = getKeySet(otherKeyVals.globalKeyVals);
      otherGlobalSet.forEach(
        keyPusher(
          selfGlobalSet,
          selfKeyVals.globalKeyVals,
          otherKeyVals.globalKeyVals,
        ),
      );
      const otherInputSets = otherKeyVals.inputKeyVals.map(getKeySet);
      otherInputSets.forEach((inputSet, idx) =>
        inputSet.forEach(
          keyPusher(
            selfInputSets[idx],
            selfKeyVals.inputKeyVals[idx],
            otherKeyVals.inputKeyVals[idx],
          ),
        ),
      );
      const otherOutputSets = otherKeyVals.outputKeyVals.map(getKeySet);
      otherOutputSets.forEach((outputSet, idx) =>
        outputSet.forEach(
          keyPusher(
            selfOutputSets[idx],
            selfKeyVals.outputKeyVals[idx],
            otherKeyVals.outputKeyVals[idx],
          ),
        ),
      );
    }
    return parser_1.psbtFromKeyVals(selfTx, {
      globalMapKeyVals: selfKeyVals.globalKeyVals,
      inputKeyVals: selfKeyVals.inputKeyVals,
      outputKeyVals: selfKeyVals.outputKeyVals,
    });
  }
  exports.combine = combine;
  function keyPusher(selfSet, selfKeyVals, otherKeyVals) {
    return key => {
      if (selfSet.has(key)) return;
      const newKv = otherKeyVals.filter(kv => kv.key.toString('hex') === key)[0];
      selfKeyVals.push(newKv);
      selfSet.add(key);
    };
  }
  function getTx(psbt) {
    return psbt.globalMap.unsignedTx;
  }
  function getKeySet(keyVals) {
    const set = new Set();
    keyVals.forEach(keyVal => {
      const hex = keyVal.key.toString('hex');
      if (set.has(hex))
        throw new Error('Combine: KeyValue Map keys should be unique');
      set.add(hex);
    });
    return set;
  }
  
  },{"../parser":37}],13:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const typeFields_1 = require('../../typeFields');
  const range = n => [...Array(n).keys()];
  function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.GlobalTypes.GLOBAL_XPUB) {
      throw new Error(
        'Decode Error: could not decode globalXpub with key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    if (keyVal.key.length !== 79 || ![2, 3].includes(keyVal.key[46])) {
      throw new Error(
        'Decode Error: globalXpub has invalid extended pubkey in key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    if ((keyVal.value.length / 4) % 1 !== 0) {
      throw new Error(
        'Decode Error: Global GLOBAL_XPUB value length should be multiple of 4',
      );
    }
    const extendedPubkey = keyVal.key.slice(1);
    const data = {
      masterFingerprint: keyVal.value.slice(0, 4),
      extendedPubkey,
      path: 'm',
    };
    for (const i of range(keyVal.value.length / 4 - 1)) {
      const val = keyVal.value.readUInt32LE(i * 4 + 4);
      const isHard = !!(val & 0x80000000);
      const idx = val & 0x7fffffff;
      data.path += '/' + idx.toString(10) + (isHard ? "'" : '');
    }
    return data;
  }
  exports.decode = decode;
  function encode(data) {
    const head = Buffer.from([typeFields_1.GlobalTypes.GLOBAL_XPUB]);
    const key = Buffer.concat([head, data.extendedPubkey]);
    const splitPath = data.path.split('/');
    const value = Buffer.allocUnsafe(splitPath.length * 4);
    data.masterFingerprint.copy(value, 0);
    let offset = 4;
    splitPath.slice(1).forEach(level => {
      const isHard = level.slice(-1) === "'";
      let num = 0x7fffffff & parseInt(isHard ? level.slice(0, -1) : level, 10);
      if (isHard) num += 0x80000000;
      value.writeUInt32LE(num, offset);
      offset += 4;
    });
    return {
      key,
      value,
    };
  }
  exports.encode = encode;
  exports.expected =
    '{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }';
  function check(data) {
    const epk = data.extendedPubkey;
    const mfp = data.masterFingerprint;
    const p = data.path;
    return (
      Buffer.isBuffer(epk) &&
      epk.length === 78 &&
      [2, 3].indexOf(epk[45]) > -1 &&
      Buffer.isBuffer(mfp) &&
      mfp.length === 4 &&
      typeof p === 'string' &&
      !!p.match(/^m(\/\d+'?)*$/)
    );
  }
  exports.check = check;
  function canAddToArray(array, item, dupeSet) {
    const dupeString = item.extendedPubkey.toString('hex');
    if (dupeSet.has(dupeString)) return false;
    dupeSet.add(dupeString);
    return (
      array.filter(v => v.extendedPubkey.equals(item.extendedPubkey)).length === 0
    );
  }
  exports.canAddToArray = canAddToArray;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../../typeFields":40,"buffer":75}],14:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const typeFields_1 = require('../../typeFields');
  function encode(data) {
    return {
      key: Buffer.from([typeFields_1.GlobalTypes.UNSIGNED_TX]),
      value: data.toBuffer(),
    };
  }
  exports.encode = encode;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../../typeFields":40,"buffer":75}],15:[function(require,module,exports){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const typeFields_1 = require('../typeFields');
  const globalXpub = require('./global/globalXpub');
  const unsignedTx = require('./global/unsignedTx');
  const finalScriptSig = require('./input/finalScriptSig');
  const finalScriptWitness = require('./input/finalScriptWitness');
  const nonWitnessUtxo = require('./input/nonWitnessUtxo');
  const partialSig = require('./input/partialSig');
  const porCommitment = require('./input/porCommitment');
  const sighashType = require('./input/sighashType');
  const tapKeySig = require('./input/tapKeySig');
  const tapLeafScript = require('./input/tapLeafScript');
  const tapMerkleRoot = require('./input/tapMerkleRoot');
  const tapScriptSig = require('./input/tapScriptSig');
  const witnessUtxo = require('./input/witnessUtxo');
  const tapTree = require('./output/tapTree');
  const bip32Derivation = require('./shared/bip32Derivation');
  const checkPubkey = require('./shared/checkPubkey');
  const redeemScript = require('./shared/redeemScript');
  const tapBip32Derivation = require('./shared/tapBip32Derivation');
  const tapInternalKey = require('./shared/tapInternalKey');
  const witnessScript = require('./shared/witnessScript');
  const globals = {
    unsignedTx,
    globalXpub,
    // pass an Array of key bytes that require pubkey beside the key
    checkPubkey: checkPubkey.makeChecker([]),
  };
  exports.globals = globals;
  const inputs = {
    nonWitnessUtxo,
    partialSig,
    sighashType,
    finalScriptSig,
    finalScriptWitness,
    porCommitment,
    witnessUtxo,
    bip32Derivation: bip32Derivation.makeConverter(
      typeFields_1.InputTypes.BIP32_DERIVATION,
    ),
    redeemScript: redeemScript.makeConverter(
      typeFields_1.InputTypes.REDEEM_SCRIPT,
    ),
    witnessScript: witnessScript.makeConverter(
      typeFields_1.InputTypes.WITNESS_SCRIPT,
    ),
    checkPubkey: checkPubkey.makeChecker([
      typeFields_1.InputTypes.PARTIAL_SIG,
      typeFields_1.InputTypes.BIP32_DERIVATION,
    ]),
    tapKeySig,
    tapScriptSig,
    tapLeafScript,
    tapBip32Derivation: tapBip32Derivation.makeConverter(
      typeFields_1.InputTypes.TAP_BIP32_DERIVATION,
    ),
    tapInternalKey: tapInternalKey.makeConverter(
      typeFields_1.InputTypes.TAP_INTERNAL_KEY,
    ),
    tapMerkleRoot,
  };
  exports.inputs = inputs;
  const outputs = {
    bip32Derivation: bip32Derivation.makeConverter(
      typeFields_1.OutputTypes.BIP32_DERIVATION,
    ),
    redeemScript: redeemScript.makeConverter(
      typeFields_1.OutputTypes.REDEEM_SCRIPT,
    ),
    witnessScript: witnessScript.makeConverter(
      typeFields_1.OutputTypes.WITNESS_SCRIPT,
    ),
    checkPubkey: checkPubkey.makeChecker([
      typeFields_1.OutputTypes.BIP32_DERIVATION,
    ]),
    tapBip32Derivation: tapBip32Derivation.makeConverter(
      typeFields_1.OutputTypes.TAP_BIP32_DERIVATION,
    ),
    tapTree,
    tapInternalKey: tapInternalKey.makeConverter(
      typeFields_1.OutputTypes.TAP_INTERNAL_KEY,
    ),
  };
  exports.outputs = outputs;
  
  },{"../typeFields":40,"./global/globalXpub":13,"./global/unsignedTx":14,"./input/finalScriptSig":16,"./input/finalScriptWitness":17,"./input/nonWitnessUtxo":18,"./input/partialSig":19,"./input/porCommitment":20,"./input/sighashType":21,"./input/tapKeySig":22,"./input/tapLeafScript":23,"./input/tapMerkleRoot":24,"./input/tapScriptSig":25,"./input/witnessUtxo":26,"./output/tapTree":27,"./shared/bip32Derivation":28,"./shared/checkPubkey":29,"./shared/redeemScript":30,"./shared/tapBip32Derivation":31,"./shared/tapInternalKey":32,"./shared/witnessScript":33}],16:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const typeFields_1 = require('../../typeFields');
  function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.FINAL_SCRIPTSIG) {
      throw new Error(
        'Decode Error: could not decode finalScriptSig with key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    return keyVal.value;
  }
  exports.decode = decode;
  function encode(data) {
    const key = Buffer.from([typeFields_1.InputTypes.FINAL_SCRIPTSIG]);
    return {
      key,
      value: data,
    };
  }
  exports.encode = encode;
  exports.expected = 'Buffer';
  function check(data) {
    return Buffer.isBuffer(data);
  }
  exports.check = check;
  function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.finalScriptSig === undefined;
  }
  exports.canAdd = canAdd;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../../typeFields":40,"buffer":75}],17:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const typeFields_1 = require('../../typeFields');
  function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.FINAL_SCRIPTWITNESS) {
      throw new Error(
        'Decode Error: could not decode finalScriptWitness with key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    return keyVal.value;
  }
  exports.decode = decode;
  function encode(data) {
    const key = Buffer.from([typeFields_1.InputTypes.FINAL_SCRIPTWITNESS]);
    return {
      key,
      value: data,
    };
  }
  exports.encode = encode;
  exports.expected = 'Buffer';
  function check(data) {
    return Buffer.isBuffer(data);
  }
  exports.check = check;
  function canAdd(currentData, newData) {
    return (
      !!currentData && !!newData && currentData.finalScriptWitness === undefined
    );
  }
  exports.canAdd = canAdd;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../../typeFields":40,"buffer":75}],18:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const typeFields_1 = require('../../typeFields');
  function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.NON_WITNESS_UTXO) {
      throw new Error(
        'Decode Error: could not decode nonWitnessUtxo with key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    return keyVal.value;
  }
  exports.decode = decode;
  function encode(data) {
    return {
      key: Buffer.from([typeFields_1.InputTypes.NON_WITNESS_UTXO]),
      value: data,
    };
  }
  exports.encode = encode;
  exports.expected = 'Buffer';
  function check(data) {
    return Buffer.isBuffer(data);
  }
  exports.check = check;
  function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.nonWitnessUtxo === undefined;
  }
  exports.canAdd = canAdd;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../../typeFields":40,"buffer":75}],19:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const typeFields_1 = require('../../typeFields');
  function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.PARTIAL_SIG) {
      throw new Error(
        'Decode Error: could not decode partialSig with key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    if (
      !(keyVal.key.length === 34 || keyVal.key.length === 66) ||
      ![2, 3, 4].includes(keyVal.key[1])
    ) {
      throw new Error(
        'Decode Error: partialSig has invalid pubkey in key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    const pubkey = keyVal.key.slice(1);
    return {
      pubkey,
      signature: keyVal.value,
    };
  }
  exports.decode = decode;
  function encode(pSig) {
    const head = Buffer.from([typeFields_1.InputTypes.PARTIAL_SIG]);
    return {
      key: Buffer.concat([head, pSig.pubkey]),
      value: pSig.signature,
    };
  }
  exports.encode = encode;
  exports.expected = '{ pubkey: Buffer; signature: Buffer; }';
  function check(data) {
    return (
      Buffer.isBuffer(data.pubkey) &&
      Buffer.isBuffer(data.signature) &&
      [33, 65].includes(data.pubkey.length) &&
      [2, 3, 4].includes(data.pubkey[0]) &&
      isDerSigWithSighash(data.signature)
    );
  }
  exports.check = check;
  function isDerSigWithSighash(buf) {
    if (!Buffer.isBuffer(buf) || buf.length < 9) return false;
    if (buf[0] !== 0x30) return false;
    if (buf.length !== buf[1] + 3) return false;
    if (buf[2] !== 0x02) return false;
    const rLen = buf[3];
    if (rLen > 33 || rLen < 1) return false;
    if (buf[3 + rLen + 1] !== 0x02) return false;
    const sLen = buf[3 + rLen + 2];
    if (sLen > 33 || sLen < 1) return false;
    if (buf.length !== 3 + rLen + 2 + sLen + 2) return false;
    return true;
  }
  function canAddToArray(array, item, dupeSet) {
    const dupeString = item.pubkey.toString('hex');
    if (dupeSet.has(dupeString)) return false;
    dupeSet.add(dupeString);
    return array.filter(v => v.pubkey.equals(item.pubkey)).length === 0;
  }
  exports.canAddToArray = canAddToArray;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../../typeFields":40,"buffer":75}],20:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const typeFields_1 = require('../../typeFields');
  function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.POR_COMMITMENT) {
      throw new Error(
        'Decode Error: could not decode porCommitment with key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    return keyVal.value.toString('utf8');
  }
  exports.decode = decode;
  function encode(data) {
    const key = Buffer.from([typeFields_1.InputTypes.POR_COMMITMENT]);
    return {
      key,
      value: Buffer.from(data, 'utf8'),
    };
  }
  exports.encode = encode;
  exports.expected = 'string';
  function check(data) {
    return typeof data === 'string';
  }
  exports.check = check;
  function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.porCommitment === undefined;
  }
  exports.canAdd = canAdd;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../../typeFields":40,"buffer":75}],21:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const typeFields_1 = require('../../typeFields');
  function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.SIGHASH_TYPE) {
      throw new Error(
        'Decode Error: could not decode sighashType with key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    return keyVal.value.readUInt32LE(0);
  }
  exports.decode = decode;
  function encode(data) {
    const key = Buffer.from([typeFields_1.InputTypes.SIGHASH_TYPE]);
    const value = Buffer.allocUnsafe(4);
    value.writeUInt32LE(data, 0);
    return {
      key,
      value,
    };
  }
  exports.encode = encode;
  exports.expected = 'number';
  function check(data) {
    return typeof data === 'number';
  }
  exports.check = check;
  function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.sighashType === undefined;
  }
  exports.canAdd = canAdd;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../../typeFields":40,"buffer":75}],22:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const typeFields_1 = require('../../typeFields');
  function decode(keyVal) {
    if (
      keyVal.key[0] !== typeFields_1.InputTypes.TAP_KEY_SIG ||
      keyVal.key.length !== 1
    ) {
      throw new Error(
        'Decode Error: could not decode tapKeySig with key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    if (!check(keyVal.value)) {
      throw new Error(
        'Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature',
      );
    }
    return keyVal.value;
  }
  exports.decode = decode;
  function encode(value) {
    const key = Buffer.from([typeFields_1.InputTypes.TAP_KEY_SIG]);
    return { key, value };
  }
  exports.encode = encode;
  exports.expected = 'Buffer';
  function check(data) {
    return Buffer.isBuffer(data) && (data.length === 64 || data.length === 65);
  }
  exports.check = check;
  function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.tapKeySig === undefined;
  }
  exports.canAdd = canAdd;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../../typeFields":40,"buffer":75}],23:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const typeFields_1 = require('../../typeFields');
  function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.TAP_LEAF_SCRIPT) {
      throw new Error(
        'Decode Error: could not decode tapLeafScript with key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    if ((keyVal.key.length - 2) % 32 !== 0) {
      throw new Error(
        'Decode Error: tapLeafScript has invalid control block in key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    const leafVersion = keyVal.value[keyVal.value.length - 1];
    if ((keyVal.key[1] & 0xfe) !== leafVersion) {
      throw new Error(
        'Decode Error: tapLeafScript bad leaf version in key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    const script = keyVal.value.slice(0, -1);
    const controlBlock = keyVal.key.slice(1);
    return { controlBlock, script, leafVersion };
  }
  exports.decode = decode;
  function encode(tScript) {
    const head = Buffer.from([typeFields_1.InputTypes.TAP_LEAF_SCRIPT]);
    const verBuf = Buffer.from([tScript.leafVersion]);
    return {
      key: Buffer.concat([head, tScript.controlBlock]),
      value: Buffer.concat([tScript.script, verBuf]),
    };
  }
  exports.encode = encode;
  exports.expected =
    '{ controlBlock: Buffer; leafVersion: number, script: Buffer; }';
  function check(data) {
    return (
      Buffer.isBuffer(data.controlBlock) &&
      (data.controlBlock.length - 1) % 32 === 0 &&
      (data.controlBlock[0] & 0xfe) === data.leafVersion &&
      Buffer.isBuffer(data.script)
    );
  }
  exports.check = check;
  function canAddToArray(array, item, dupeSet) {
    const dupeString = item.controlBlock.toString('hex');
    if (dupeSet.has(dupeString)) return false;
    dupeSet.add(dupeString);
    return (
      array.filter(v => v.controlBlock.equals(item.controlBlock)).length === 0
    );
  }
  exports.canAddToArray = canAddToArray;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../../typeFields":40,"buffer":75}],24:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const typeFields_1 = require('../../typeFields');
  function decode(keyVal) {
    if (
      keyVal.key[0] !== typeFields_1.InputTypes.TAP_MERKLE_ROOT ||
      keyVal.key.length !== 1
    ) {
      throw new Error(
        'Decode Error: could not decode tapMerkleRoot with key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    if (!check(keyVal.value)) {
      throw new Error('Decode Error: tapMerkleRoot not a 32-byte hash');
    }
    return keyVal.value;
  }
  exports.decode = decode;
  function encode(value) {
    const key = Buffer.from([typeFields_1.InputTypes.TAP_MERKLE_ROOT]);
    return { key, value };
  }
  exports.encode = encode;
  exports.expected = 'Buffer';
  function check(data) {
    return Buffer.isBuffer(data) && data.length === 32;
  }
  exports.check = check;
  function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.tapMerkleRoot === undefined;
  }
  exports.canAdd = canAdd;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../../typeFields":40,"buffer":75}],25:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const typeFields_1 = require('../../typeFields');
  function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.TAP_SCRIPT_SIG) {
      throw new Error(
        'Decode Error: could not decode tapScriptSig with key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    if (keyVal.key.length !== 65) {
      throw new Error(
        'Decode Error: tapScriptSig has invalid key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    if (keyVal.value.length !== 64 && keyVal.value.length !== 65) {
      throw new Error(
        'Decode Error: tapScriptSig has invalid signature in key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    const pubkey = keyVal.key.slice(1, 33);
    const leafHash = keyVal.key.slice(33);
    return {
      pubkey,
      leafHash,
      signature: keyVal.value,
    };
  }
  exports.decode = decode;
  function encode(tSig) {
    const head = Buffer.from([typeFields_1.InputTypes.TAP_SCRIPT_SIG]);
    return {
      key: Buffer.concat([head, tSig.pubkey, tSig.leafHash]),
      value: tSig.signature,
    };
  }
  exports.encode = encode;
  exports.expected = '{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }';
  function check(data) {
    return (
      Buffer.isBuffer(data.pubkey) &&
      Buffer.isBuffer(data.leafHash) &&
      Buffer.isBuffer(data.signature) &&
      data.pubkey.length === 32 &&
      data.leafHash.length === 32 &&
      (data.signature.length === 64 || data.signature.length === 65)
    );
  }
  exports.check = check;
  function canAddToArray(array, item, dupeSet) {
    const dupeString =
      item.pubkey.toString('hex') + item.leafHash.toString('hex');
    if (dupeSet.has(dupeString)) return false;
    dupeSet.add(dupeString);
    return (
      array.filter(
        v => v.pubkey.equals(item.pubkey) && v.leafHash.equals(item.leafHash),
      ).length === 0
    );
  }
  exports.canAddToArray = canAddToArray;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../../typeFields":40,"buffer":75}],26:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const typeFields_1 = require('../../typeFields');
  const tools_1 = require('../tools');
  const varuint = require('../varint');
  function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.WITNESS_UTXO) {
      throw new Error(
        'Decode Error: could not decode witnessUtxo with key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    const value = tools_1.readUInt64LE(keyVal.value, 0);
    let _offset = 8;
    const scriptLen = varuint.decode(keyVal.value, _offset);
    _offset += varuint.encodingLength(scriptLen);
    const script = keyVal.value.slice(_offset);
    if (script.length !== scriptLen) {
      throw new Error('Decode Error: WITNESS_UTXO script is not proper length');
    }
    return {
      script,
      value,
    };
  }
  exports.decode = decode;
  function encode(data) {
    const { script, value } = data;
    const varintLen = varuint.encodingLength(script.length);
    const result = Buffer.allocUnsafe(8 + varintLen + script.length);
    tools_1.writeUInt64LE(result, value, 0);
    varuint.encode(script.length, result, 8);
    script.copy(result, 8 + varintLen);
    return {
      key: Buffer.from([typeFields_1.InputTypes.WITNESS_UTXO]),
      value: result,
    };
  }
  exports.encode = encode;
  exports.expected = '{ script: Buffer; value: number; }';
  function check(data) {
    return Buffer.isBuffer(data.script) && typeof data.value === 'number';
  }
  exports.check = check;
  function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.witnessUtxo === undefined;
  }
  exports.canAdd = canAdd;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../../typeFields":40,"../tools":34,"../varint":35,"buffer":75}],27:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const typeFields_1 = require('../../typeFields');
  const varuint = require('../varint');
  function decode(keyVal) {
    if (
      keyVal.key[0] !== typeFields_1.OutputTypes.TAP_TREE ||
      keyVal.key.length !== 1
    ) {
      throw new Error(
        'Decode Error: could not decode tapTree with key 0x' +
          keyVal.key.toString('hex'),
      );
    }
    let _offset = 0;
    const data = [];
    while (_offset < keyVal.value.length) {
      const depth = keyVal.value[_offset++];
      const leafVersion = keyVal.value[_offset++];
      const scriptLen = varuint.decode(keyVal.value, _offset);
      _offset += varuint.encodingLength(scriptLen);
      data.push({
        depth,
        leafVersion,
        script: keyVal.value.slice(_offset, _offset + scriptLen),
      });
      _offset += scriptLen;
    }
    return { leaves: data };
  }
  exports.decode = decode;
  function encode(tree) {
    const key = Buffer.from([typeFields_1.OutputTypes.TAP_TREE]);
    const bufs = [].concat(
      ...tree.leaves.map(tapLeaf => [
        Buffer.of(tapLeaf.depth, tapLeaf.leafVersion),
        varuint.encode(tapLeaf.script.length),
        tapLeaf.script,
      ]),
    );
    return {
      key,
      value: Buffer.concat(bufs),
    };
  }
  exports.encode = encode;
  exports.expected =
    '{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }';
  function check(data) {
    return (
      Array.isArray(data.leaves) &&
      data.leaves.every(
        tapLeaf =>
          tapLeaf.depth >= 0 &&
          tapLeaf.depth <= 128 &&
          (tapLeaf.leafVersion & 0xfe) === tapLeaf.leafVersion &&
          Buffer.isBuffer(tapLeaf.script),
      )
    );
  }
  exports.check = check;
  function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.tapTree === undefined;
  }
  exports.canAdd = canAdd;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../../typeFields":40,"../varint":35,"buffer":75}],28:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const range = n => [...Array(n).keys()];
  const isValidDERKey = pubkey =>
    (pubkey.length === 33 && [2, 3].includes(pubkey[0])) ||
    (pubkey.length === 65 && 4 === pubkey[0]);
  function makeConverter(TYPE_BYTE, isValidPubkey = isValidDERKey) {
    function decode(keyVal) {
      if (keyVal.key[0] !== TYPE_BYTE) {
        throw new Error(
          'Decode Error: could not decode bip32Derivation with key 0x' +
            keyVal.key.toString('hex'),
        );
      }
      const pubkey = keyVal.key.slice(1);
      if (!isValidPubkey(pubkey)) {
        throw new Error(
          'Decode Error: bip32Derivation has invalid pubkey in key 0x' +
            keyVal.key.toString('hex'),
        );
      }
      if ((keyVal.value.length / 4) % 1 !== 0) {
        throw new Error(
          'Decode Error: Input BIP32_DERIVATION value length should be multiple of 4',
        );
      }
      const data = {
        masterFingerprint: keyVal.value.slice(0, 4),
        pubkey,
        path: 'm',
      };
      for (const i of range(keyVal.value.length / 4 - 1)) {
        const val = keyVal.value.readUInt32LE(i * 4 + 4);
        const isHard = !!(val & 0x80000000);
        const idx = val & 0x7fffffff;
        data.path += '/' + idx.toString(10) + (isHard ? "'" : '');
      }
      return data;
    }
    function encode(data) {
      const head = Buffer.from([TYPE_BYTE]);
      const key = Buffer.concat([head, data.pubkey]);
      const splitPath = data.path.split('/');
      const value = Buffer.allocUnsafe(splitPath.length * 4);
      data.masterFingerprint.copy(value, 0);
      let offset = 4;
      splitPath.slice(1).forEach(level => {
        const isHard = level.slice(-1) === "'";
        let num = 0x7fffffff & parseInt(isHard ? level.slice(0, -1) : level, 10);
        if (isHard) num += 0x80000000;
        value.writeUInt32LE(num, offset);
        offset += 4;
      });
      return {
        key,
        value,
      };
    }
    const expected =
      '{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }';
    function check(data) {
      return (
        Buffer.isBuffer(data.pubkey) &&
        Buffer.isBuffer(data.masterFingerprint) &&
        typeof data.path === 'string' &&
        isValidPubkey(data.pubkey) &&
        data.masterFingerprint.length === 4
      );
    }
    function canAddToArray(array, item, dupeSet) {
      const dupeString = item.pubkey.toString('hex');
      if (dupeSet.has(dupeString)) return false;
      dupeSet.add(dupeString);
      return array.filter(v => v.pubkey.equals(item.pubkey)).length === 0;
    }
    return {
      decode,
      encode,
      check,
      expected,
      canAddToArray,
    };
  }
  exports.makeConverter = makeConverter;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"buffer":75}],29:[function(require,module,exports){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  function makeChecker(pubkeyTypes) {
    return checkPubkey;
    function checkPubkey(keyVal) {
      let pubkey;
      if (pubkeyTypes.includes(keyVal.key[0])) {
        pubkey = keyVal.key.slice(1);
        if (
          !(pubkey.length === 33 || pubkey.length === 65) ||
          ![2, 3, 4].includes(pubkey[0])
        ) {
          throw new Error(
            'Format Error: invalid pubkey in key 0x' + keyVal.key.toString('hex'),
          );
        }
      }
      return pubkey;
    }
  }
  exports.makeChecker = makeChecker;
  
  },{}],30:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  function makeConverter(TYPE_BYTE) {
    function decode(keyVal) {
      if (keyVal.key[0] !== TYPE_BYTE) {
        throw new Error(
          'Decode Error: could not decode redeemScript with key 0x' +
            keyVal.key.toString('hex'),
        );
      }
      return keyVal.value;
    }
    function encode(data) {
      const key = Buffer.from([TYPE_BYTE]);
      return {
        key,
        value: data,
      };
    }
    const expected = 'Buffer';
    function check(data) {
      return Buffer.isBuffer(data);
    }
    function canAdd(currentData, newData) {
      return !!currentData && !!newData && currentData.redeemScript === undefined;
    }
    return {
      decode,
      encode,
      check,
      expected,
      canAdd,
    };
  }
  exports.makeConverter = makeConverter;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"buffer":75}],31:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const varuint = require('../varint');
  const bip32Derivation = require('./bip32Derivation');
  const isValidBIP340Key = pubkey => pubkey.length === 32;
  function makeConverter(TYPE_BYTE) {
    const parent = bip32Derivation.makeConverter(TYPE_BYTE, isValidBIP340Key);
    function decode(keyVal) {
      const nHashes = varuint.decode(keyVal.value);
      const nHashesLen = varuint.encodingLength(nHashes);
      const base = parent.decode({
        key: keyVal.key,
        value: keyVal.value.slice(nHashesLen + nHashes * 32),
      });
      const leafHashes = new Array(nHashes);
      for (let i = 0, _offset = nHashesLen; i < nHashes; i++, _offset += 32) {
        leafHashes[i] = keyVal.value.slice(_offset, _offset + 32);
      }
      return Object.assign({}, base, { leafHashes });
    }
    function encode(data) {
      const base = parent.encode(data);
      const nHashesLen = varuint.encodingLength(data.leafHashes.length);
      const nHashesBuf = Buffer.allocUnsafe(nHashesLen);
      varuint.encode(data.leafHashes.length, nHashesBuf);
      const value = Buffer.concat([nHashesBuf, ...data.leafHashes, base.value]);
      return Object.assign({}, base, { value });
    }
    const expected =
      '{ ' +
      'masterFingerprint: Buffer; ' +
      'pubkey: Buffer; ' +
      'path: string; ' +
      'leafHashes: Buffer[]; ' +
      '}';
    function check(data) {
      return (
        Array.isArray(data.leafHashes) &&
        data.leafHashes.every(
          leafHash => Buffer.isBuffer(leafHash) && leafHash.length === 32,
        ) &&
        parent.check(data)
      );
    }
    return {
      decode,
      encode,
      check,
      expected,
      canAddToArray: parent.canAddToArray,
    };
  }
  exports.makeConverter = makeConverter;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../varint":35,"./bip32Derivation":28,"buffer":75}],32:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  function makeConverter(TYPE_BYTE) {
    function decode(keyVal) {
      if (keyVal.key[0] !== TYPE_BYTE || keyVal.key.length !== 1) {
        throw new Error(
          'Decode Error: could not decode tapInternalKey with key 0x' +
            keyVal.key.toString('hex'),
        );
      }
      if (keyVal.value.length !== 32) {
        throw new Error(
          'Decode Error: tapInternalKey not a 32-byte x-only pubkey',
        );
      }
      return keyVal.value;
    }
    function encode(value) {
      const key = Buffer.from([TYPE_BYTE]);
      return { key, value };
    }
    const expected = 'Buffer';
    function check(data) {
      return Buffer.isBuffer(data) && data.length === 32;
    }
    function canAdd(currentData, newData) {
      return (
        !!currentData && !!newData && currentData.tapInternalKey === undefined
      );
    }
    return {
      decode,
      encode,
      check,
      expected,
      canAdd,
    };
  }
  exports.makeConverter = makeConverter;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"buffer":75}],33:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  function makeConverter(TYPE_BYTE) {
    function decode(keyVal) {
      if (keyVal.key[0] !== TYPE_BYTE) {
        throw new Error(
          'Decode Error: could not decode witnessScript with key 0x' +
            keyVal.key.toString('hex'),
        );
      }
      return keyVal.value;
    }
    function encode(data) {
      const key = Buffer.from([TYPE_BYTE]);
      return {
        key,
        value: data,
      };
    }
    const expected = 'Buffer';
    function check(data) {
      return Buffer.isBuffer(data);
    }
    function canAdd(currentData, newData) {
      return (
        !!currentData && !!newData && currentData.witnessScript === undefined
      );
    }
    return {
      decode,
      encode,
      check,
      expected,
      canAdd,
    };
  }
  exports.makeConverter = makeConverter;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"buffer":75}],34:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const varuint = require('./varint');
  exports.range = n => [...Array(n).keys()];
  function reverseBuffer(buffer) {
    if (buffer.length < 1) return buffer;
    let j = buffer.length - 1;
    let tmp = 0;
    for (let i = 0; i < buffer.length / 2; i++) {
      tmp = buffer[i];
      buffer[i] = buffer[j];
      buffer[j] = tmp;
      j--;
    }
    return buffer;
  }
  exports.reverseBuffer = reverseBuffer;
  function keyValsToBuffer(keyVals) {
    const buffers = keyVals.map(keyValToBuffer);
    buffers.push(Buffer.from([0]));
    return Buffer.concat(buffers);
  }
  exports.keyValsToBuffer = keyValsToBuffer;
  function keyValToBuffer(keyVal) {
    const keyLen = keyVal.key.length;
    const valLen = keyVal.value.length;
    const keyVarIntLen = varuint.encodingLength(keyLen);
    const valVarIntLen = varuint.encodingLength(valLen);
    const buffer = Buffer.allocUnsafe(
      keyVarIntLen + keyLen + valVarIntLen + valLen,
    );
    varuint.encode(keyLen, buffer, 0);
    keyVal.key.copy(buffer, keyVarIntLen);
    varuint.encode(valLen, buffer, keyVarIntLen + keyLen);
    keyVal.value.copy(buffer, keyVarIntLen + keyLen + valVarIntLen);
    return buffer;
  }
  exports.keyValToBuffer = keyValToBuffer;
  // https://github.com/feross/buffer/blob/master/index.js#L1127
  function verifuint(value, max) {
    if (typeof value !== 'number')
      throw new Error('cannot write a non-number as a number');
    if (value < 0)
      throw new Error('specified a negative value for writing an unsigned value');
    if (value > max) throw new Error('RangeError: value out of range');
    if (Math.floor(value) !== value)
      throw new Error('value has a fractional component');
  }
  function readUInt64LE(buffer, offset) {
    const a = buffer.readUInt32LE(offset);
    let b = buffer.readUInt32LE(offset + 4);
    b *= 0x100000000;
    verifuint(b + a, 0x001fffffffffffff);
    return b + a;
  }
  exports.readUInt64LE = readUInt64LE;
  function writeUInt64LE(buffer, value, offset) {
    verifuint(value, 0x001fffffffffffff);
    buffer.writeInt32LE(value & -1, offset);
    buffer.writeUInt32LE(Math.floor(value / 0x100000000), offset + 4);
    return offset + 8;
  }
  exports.writeUInt64LE = writeUInt64LE;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"./varint":35,"buffer":75}],35:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  // Number.MAX_SAFE_INTEGER
  const MAX_SAFE_INTEGER = 9007199254740991;
  function checkUInt53(n) {
    if (n < 0 || n > MAX_SAFE_INTEGER || n % 1 !== 0)
      throw new RangeError('value out of range');
  }
  function encode(_number, buffer, offset) {
    checkUInt53(_number);
    if (!buffer) buffer = Buffer.allocUnsafe(encodingLength(_number));
    if (!Buffer.isBuffer(buffer))
      throw new TypeError('buffer must be a Buffer instance');
    if (!offset) offset = 0;
    // 8 bit
    if (_number < 0xfd) {
      buffer.writeUInt8(_number, offset);
      Object.assign(encode, { bytes: 1 });
      // 16 bit
    } else if (_number <= 0xffff) {
      buffer.writeUInt8(0xfd, offset);
      buffer.writeUInt16LE(_number, offset + 1);
      Object.assign(encode, { bytes: 3 });
      // 32 bit
    } else if (_number <= 0xffffffff) {
      buffer.writeUInt8(0xfe, offset);
      buffer.writeUInt32LE(_number, offset + 1);
      Object.assign(encode, { bytes: 5 });
      // 64 bit
    } else {
      buffer.writeUInt8(0xff, offset);
      buffer.writeUInt32LE(_number >>> 0, offset + 1);
      buffer.writeUInt32LE((_number / 0x100000000) | 0, offset + 5);
      Object.assign(encode, { bytes: 9 });
    }
    return buffer;
  }
  exports.encode = encode;
  function decode(buffer, offset) {
    if (!Buffer.isBuffer(buffer))
      throw new TypeError('buffer must be a Buffer instance');
    if (!offset) offset = 0;
    const first = buffer.readUInt8(offset);
    // 8 bit
    if (first < 0xfd) {
      Object.assign(decode, { bytes: 1 });
      return first;
      // 16 bit
    } else if (first === 0xfd) {
      Object.assign(decode, { bytes: 3 });
      return buffer.readUInt16LE(offset + 1);
      // 32 bit
    } else if (first === 0xfe) {
      Object.assign(decode, { bytes: 5 });
      return buffer.readUInt32LE(offset + 1);
      // 64 bit
    } else {
      Object.assign(decode, { bytes: 9 });
      const lo = buffer.readUInt32LE(offset + 1);
      const hi = buffer.readUInt32LE(offset + 5);
      const _number = hi * 0x0100000000 + lo;
      checkUInt53(_number);
      return _number;
    }
  }
  exports.decode = decode;
  function encodingLength(_number) {
    checkUInt53(_number);
    return _number < 0xfd
      ? 1
      : _number <= 0xffff
      ? 3
      : _number <= 0xffffffff
      ? 5
      : 9;
  }
  exports.encodingLength = encodingLength;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"buffer":75}],36:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const convert = require('../converter');
  const tools_1 = require('../converter/tools');
  const varuint = require('../converter/varint');
  const typeFields_1 = require('../typeFields');
  function psbtFromBuffer(buffer, txGetter) {
    let offset = 0;
    function varSlice() {
      const keyLen = varuint.decode(buffer, offset);
      offset += varuint.encodingLength(keyLen);
      const key = buffer.slice(offset, offset + keyLen);
      offset += keyLen;
      return key;
    }
    function readUInt32BE() {
      const num = buffer.readUInt32BE(offset);
      offset += 4;
      return num;
    }
    function readUInt8() {
      const num = buffer.readUInt8(offset);
      offset += 1;
      return num;
    }
    function getKeyValue() {
      const key = varSlice();
      const value = varSlice();
      return {
        key,
        value,
      };
    }
    function checkEndOfKeyValPairs() {
      if (offset >= buffer.length) {
        throw new Error('Format Error: Unexpected End of PSBT');
      }
      const isEnd = buffer.readUInt8(offset) === 0;
      if (isEnd) {
        offset++;
      }
      return isEnd;
    }
    if (readUInt32BE() !== 0x70736274) {
      throw new Error('Format Error: Invalid Magic Number');
    }
    if (readUInt8() !== 0xff) {
      throw new Error(
        'Format Error: Magic Number must be followed by 0xff separator',
      );
    }
    const globalMapKeyVals = [];
    const globalKeyIndex = {};
    while (!checkEndOfKeyValPairs()) {
      const keyVal = getKeyValue();
      const hexKey = keyVal.key.toString('hex');
      if (globalKeyIndex[hexKey]) {
        throw new Error(
          'Format Error: Keys must be unique for global keymap: key ' + hexKey,
        );
      }
      globalKeyIndex[hexKey] = 1;
      globalMapKeyVals.push(keyVal);
    }
    const unsignedTxMaps = globalMapKeyVals.filter(
      keyVal => keyVal.key[0] === typeFields_1.GlobalTypes.UNSIGNED_TX,
    );
    if (unsignedTxMaps.length !== 1) {
      throw new Error('Format Error: Only one UNSIGNED_TX allowed');
    }
    const unsignedTx = txGetter(unsignedTxMaps[0].value);
    // Get input and output counts to loop the respective fields
    const { inputCount, outputCount } = unsignedTx.getInputOutputCounts();
    const inputKeyVals = [];
    const outputKeyVals = [];
    // Get input fields
    for (const index of tools_1.range(inputCount)) {
      const inputKeyIndex = {};
      const input = [];
      while (!checkEndOfKeyValPairs()) {
        const keyVal = getKeyValue();
        const hexKey = keyVal.key.toString('hex');
        if (inputKeyIndex[hexKey]) {
          throw new Error(
            'Format Error: Keys must be unique for each input: ' +
              'input index ' +
              index +
              ' key ' +
              hexKey,
          );
        }
        inputKeyIndex[hexKey] = 1;
        input.push(keyVal);
      }
      inputKeyVals.push(input);
    }
    for (const index of tools_1.range(outputCount)) {
      const outputKeyIndex = {};
      const output = [];
      while (!checkEndOfKeyValPairs()) {
        const keyVal = getKeyValue();
        const hexKey = keyVal.key.toString('hex');
        if (outputKeyIndex[hexKey]) {
          throw new Error(
            'Format Error: Keys must be unique for each output: ' +
              'output index ' +
              index +
              ' key ' +
              hexKey,
          );
        }
        outputKeyIndex[hexKey] = 1;
        output.push(keyVal);
      }
      outputKeyVals.push(output);
    }
    return psbtFromKeyVals(unsignedTx, {
      globalMapKeyVals,
      inputKeyVals,
      outputKeyVals,
    });
  }
  exports.psbtFromBuffer = psbtFromBuffer;
  function checkKeyBuffer(type, keyBuf, keyNum) {
    if (!keyBuf.equals(Buffer.from([keyNum]))) {
      throw new Error(
        `Format Error: Invalid ${type} key: ${keyBuf.toString('hex')}`,
      );
    }
  }
  exports.checkKeyBuffer = checkKeyBuffer;
  function psbtFromKeyVals(
    unsignedTx,
    { globalMapKeyVals, inputKeyVals, outputKeyVals },
  ) {
    // That was easy :-)
    const globalMap = {
      unsignedTx,
    };
    let txCount = 0;
    for (const keyVal of globalMapKeyVals) {
      // If a globalMap item needs pubkey, uncomment
      // const pubkey = convert.globals.checkPubkey(keyVal);
      switch (keyVal.key[0]) {
        case typeFields_1.GlobalTypes.UNSIGNED_TX:
          checkKeyBuffer(
            'global',
            keyVal.key,
            typeFields_1.GlobalTypes.UNSIGNED_TX,
          );
          if (txCount > 0) {
            throw new Error('Format Error: GlobalMap has multiple UNSIGNED_TX');
          }
          txCount++;
          break;
        case typeFields_1.GlobalTypes.GLOBAL_XPUB:
          if (globalMap.globalXpub === undefined) {
            globalMap.globalXpub = [];
          }
          globalMap.globalXpub.push(convert.globals.globalXpub.decode(keyVal));
          break;
        default:
          // This will allow inclusion during serialization.
          if (!globalMap.unknownKeyVals) globalMap.unknownKeyVals = [];
          globalMap.unknownKeyVals.push(keyVal);
      }
    }
    // Get input and output counts to loop the respective fields
    const inputCount = inputKeyVals.length;
    const outputCount = outputKeyVals.length;
    const inputs = [];
    const outputs = [];
    // Get input fields
    for (const index of tools_1.range(inputCount)) {
      const input = {};
      for (const keyVal of inputKeyVals[index]) {
        convert.inputs.checkPubkey(keyVal);
        switch (keyVal.key[0]) {
          case typeFields_1.InputTypes.NON_WITNESS_UTXO:
            checkKeyBuffer(
              'input',
              keyVal.key,
              typeFields_1.InputTypes.NON_WITNESS_UTXO,
            );
            if (input.nonWitnessUtxo !== undefined) {
              throw new Error(
                'Format Error: Input has multiple NON_WITNESS_UTXO',
              );
            }
            input.nonWitnessUtxo = convert.inputs.nonWitnessUtxo.decode(keyVal);
            break;
          case typeFields_1.InputTypes.WITNESS_UTXO:
            checkKeyBuffer(
              'input',
              keyVal.key,
              typeFields_1.InputTypes.WITNESS_UTXO,
            );
            if (input.witnessUtxo !== undefined) {
              throw new Error('Format Error: Input has multiple WITNESS_UTXO');
            }
            input.witnessUtxo = convert.inputs.witnessUtxo.decode(keyVal);
            break;
          case typeFields_1.InputTypes.PARTIAL_SIG:
            if (input.partialSig === undefined) {
              input.partialSig = [];
            }
            input.partialSig.push(convert.inputs.partialSig.decode(keyVal));
            break;
          case typeFields_1.InputTypes.SIGHASH_TYPE:
            checkKeyBuffer(
              'input',
              keyVal.key,
              typeFields_1.InputTypes.SIGHASH_TYPE,
            );
            if (input.sighashType !== undefined) {
              throw new Error('Format Error: Input has multiple SIGHASH_TYPE');
            }
            input.sighashType = convert.inputs.sighashType.decode(keyVal);
            break;
          case typeFields_1.InputTypes.REDEEM_SCRIPT:
            checkKeyBuffer(
              'input',
              keyVal.key,
              typeFields_1.InputTypes.REDEEM_SCRIPT,
            );
            if (input.redeemScript !== undefined) {
              throw new Error('Format Error: Input has multiple REDEEM_SCRIPT');
            }
            input.redeemScript = convert.inputs.redeemScript.decode(keyVal);
            break;
          case typeFields_1.InputTypes.WITNESS_SCRIPT:
            checkKeyBuffer(
              'input',
              keyVal.key,
              typeFields_1.InputTypes.WITNESS_SCRIPT,
            );
            if (input.witnessScript !== undefined) {
              throw new Error('Format Error: Input has multiple WITNESS_SCRIPT');
            }
            input.witnessScript = convert.inputs.witnessScript.decode(keyVal);
            break;
          case typeFields_1.InputTypes.BIP32_DERIVATION:
            if (input.bip32Derivation === undefined) {
              input.bip32Derivation = [];
            }
            input.bip32Derivation.push(
              convert.inputs.bip32Derivation.decode(keyVal),
            );
            break;
          case typeFields_1.InputTypes.FINAL_SCRIPTSIG:
            checkKeyBuffer(
              'input',
              keyVal.key,
              typeFields_1.InputTypes.FINAL_SCRIPTSIG,
            );
            input.finalScriptSig = convert.inputs.finalScriptSig.decode(keyVal);
            break;
          case typeFields_1.InputTypes.FINAL_SCRIPTWITNESS:
            checkKeyBuffer(
              'input',
              keyVal.key,
              typeFields_1.InputTypes.FINAL_SCRIPTWITNESS,
            );
            input.finalScriptWitness = convert.inputs.finalScriptWitness.decode(
              keyVal,
            );
            break;
          case typeFields_1.InputTypes.POR_COMMITMENT:
            checkKeyBuffer(
              'input',
              keyVal.key,
              typeFields_1.InputTypes.POR_COMMITMENT,
            );
            input.porCommitment = convert.inputs.porCommitment.decode(keyVal);
            break;
          case typeFields_1.InputTypes.TAP_KEY_SIG:
            checkKeyBuffer(
              'input',
              keyVal.key,
              typeFields_1.InputTypes.TAP_KEY_SIG,
            );
            input.tapKeySig = convert.inputs.tapKeySig.decode(keyVal);
            break;
          case typeFields_1.InputTypes.TAP_SCRIPT_SIG:
            if (input.tapScriptSig === undefined) {
              input.tapScriptSig = [];
            }
            input.tapScriptSig.push(convert.inputs.tapScriptSig.decode(keyVal));
            break;
          case typeFields_1.InputTypes.TAP_LEAF_SCRIPT:
            if (input.tapLeafScript === undefined) {
              input.tapLeafScript = [];
            }
            input.tapLeafScript.push(convert.inputs.tapLeafScript.decode(keyVal));
            break;
          case typeFields_1.InputTypes.TAP_BIP32_DERIVATION:
            if (input.tapBip32Derivation === undefined) {
              input.tapBip32Derivation = [];
            }
            input.tapBip32Derivation.push(
              convert.inputs.tapBip32Derivation.decode(keyVal),
            );
            break;
          case typeFields_1.InputTypes.TAP_INTERNAL_KEY:
            checkKeyBuffer(
              'input',
              keyVal.key,
              typeFields_1.InputTypes.TAP_INTERNAL_KEY,
            );
            input.tapInternalKey = convert.inputs.tapInternalKey.decode(keyVal);
            break;
          case typeFields_1.InputTypes.TAP_MERKLE_ROOT:
            checkKeyBuffer(
              'input',
              keyVal.key,
              typeFields_1.InputTypes.TAP_MERKLE_ROOT,
            );
            input.tapMerkleRoot = convert.inputs.tapMerkleRoot.decode(keyVal);
            break;
          default:
            // This will allow inclusion during serialization.
            if (!input.unknownKeyVals) input.unknownKeyVals = [];
            input.unknownKeyVals.push(keyVal);
        }
      }
      inputs.push(input);
    }
    for (const index of tools_1.range(outputCount)) {
      const output = {};
      for (const keyVal of outputKeyVals[index]) {
        convert.outputs.checkPubkey(keyVal);
        switch (keyVal.key[0]) {
          case typeFields_1.OutputTypes.REDEEM_SCRIPT:
            checkKeyBuffer(
              'output',
              keyVal.key,
              typeFields_1.OutputTypes.REDEEM_SCRIPT,
            );
            if (output.redeemScript !== undefined) {
              throw new Error('Format Error: Output has multiple REDEEM_SCRIPT');
            }
            output.redeemScript = convert.outputs.redeemScript.decode(keyVal);
            break;
          case typeFields_1.OutputTypes.WITNESS_SCRIPT:
            checkKeyBuffer(
              'output',
              keyVal.key,
              typeFields_1.OutputTypes.WITNESS_SCRIPT,
            );
            if (output.witnessScript !== undefined) {
              throw new Error('Format Error: Output has multiple WITNESS_SCRIPT');
            }
            output.witnessScript = convert.outputs.witnessScript.decode(keyVal);
            break;
          case typeFields_1.OutputTypes.BIP32_DERIVATION:
            if (output.bip32Derivation === undefined) {
              output.bip32Derivation = [];
            }
            output.bip32Derivation.push(
              convert.outputs.bip32Derivation.decode(keyVal),
            );
            break;
          case typeFields_1.OutputTypes.TAP_INTERNAL_KEY:
            checkKeyBuffer(
              'output',
              keyVal.key,
              typeFields_1.OutputTypes.TAP_INTERNAL_KEY,
            );
            output.tapInternalKey = convert.outputs.tapInternalKey.decode(keyVal);
            break;
          case typeFields_1.OutputTypes.TAP_TREE:
            checkKeyBuffer(
              'output',
              keyVal.key,
              typeFields_1.OutputTypes.TAP_TREE,
            );
            output.tapTree = convert.outputs.tapTree.decode(keyVal);
            break;
          case typeFields_1.OutputTypes.TAP_BIP32_DERIVATION:
            if (output.tapBip32Derivation === undefined) {
              output.tapBip32Derivation = [];
            }
            output.tapBip32Derivation.push(
              convert.outputs.tapBip32Derivation.decode(keyVal),
            );
            break;
          default:
            if (!output.unknownKeyVals) output.unknownKeyVals = [];
            output.unknownKeyVals.push(keyVal);
        }
      }
      outputs.push(output);
    }
    return { globalMap, inputs, outputs };
  }
  exports.psbtFromKeyVals = psbtFromKeyVals;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../converter":15,"../converter/tools":34,"../converter/varint":35,"../typeFields":40,"buffer":75}],37:[function(require,module,exports){
  'use strict';
  function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
  Object.defineProperty(exports, '__esModule', { value: true });
  __export(require('./fromBuffer'));
  __export(require('./toBuffer'));
  
  },{"./fromBuffer":36,"./toBuffer":38}],38:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const convert = require('../converter');
  const tools_1 = require('../converter/tools');
  function psbtToBuffer({ globalMap, inputs, outputs }) {
    const { globalKeyVals, inputKeyVals, outputKeyVals } = psbtToKeyVals({
      globalMap,
      inputs,
      outputs,
    });
    const globalBuffer = tools_1.keyValsToBuffer(globalKeyVals);
    const keyValsOrEmptyToBuffer = keyVals =>
      keyVals.length === 0
        ? [Buffer.from([0])]
        : keyVals.map(tools_1.keyValsToBuffer);
    const inputBuffers = keyValsOrEmptyToBuffer(inputKeyVals);
    const outputBuffers = keyValsOrEmptyToBuffer(outputKeyVals);
    const header = Buffer.allocUnsafe(5);
    header.writeUIntBE(0x70736274ff, 0, 5);
    return Buffer.concat(
      [header, globalBuffer].concat(inputBuffers, outputBuffers),
    );
  }
  exports.psbtToBuffer = psbtToBuffer;
  const sortKeyVals = (a, b) => {
    return a.key.compare(b.key);
  };
  function keyValsFromMap(keyValMap, converterFactory) {
    const keyHexSet = new Set();
    const keyVals = Object.entries(keyValMap).reduce((result, [key, value]) => {
      if (key === 'unknownKeyVals') return result;
      // We are checking for undefined anyways. So ignore TS error
      // @ts-ignore
      const converter = converterFactory[key];
      if (converter === undefined) return result;
      const encodedKeyVals = (Array.isArray(value) ? value : [value]).map(
        converter.encode,
      );
      const keyHexes = encodedKeyVals.map(kv => kv.key.toString('hex'));
      keyHexes.forEach(hex => {
        if (keyHexSet.has(hex))
          throw new Error('Serialize Error: Duplicate key: ' + hex);
        keyHexSet.add(hex);
      });
      return result.concat(encodedKeyVals);
    }, []);
    // Get other keyVals that have not yet been gotten
    const otherKeyVals = keyValMap.unknownKeyVals
      ? keyValMap.unknownKeyVals.filter(keyVal => {
          return !keyHexSet.has(keyVal.key.toString('hex'));
        })
      : [];
    return keyVals.concat(otherKeyVals).sort(sortKeyVals);
  }
  function psbtToKeyVals({ globalMap, inputs, outputs }) {
    // First parse the global keyVals
    // Get any extra keyvals to pass along
    return {
      globalKeyVals: keyValsFromMap(globalMap, convert.globals),
      inputKeyVals: inputs.map(i => keyValsFromMap(i, convert.inputs)),
      outputKeyVals: outputs.map(o => keyValsFromMap(o, convert.outputs)),
    };
  }
  exports.psbtToKeyVals = psbtToKeyVals;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../converter":15,"../converter/tools":34,"buffer":75}],39:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const combiner_1 = require('./combiner');
  const parser_1 = require('./parser');
  const typeFields_1 = require('./typeFields');
  const utils_1 = require('./utils');
  class Psbt {
    constructor(tx) {
      this.inputs = [];
      this.outputs = [];
      this.globalMap = {
        unsignedTx: tx,
      };
    }
    static fromBase64(data, txFromBuffer) {
      const buffer = Buffer.from(data, 'base64');
      return this.fromBuffer(buffer, txFromBuffer);
    }
    static fromHex(data, txFromBuffer) {
      const buffer = Buffer.from(data, 'hex');
      return this.fromBuffer(buffer, txFromBuffer);
    }
    static fromBuffer(buffer, txFromBuffer) {
      const results = parser_1.psbtFromBuffer(buffer, txFromBuffer);
      const psbt = new this(results.globalMap.unsignedTx);
      Object.assign(psbt, results);
      return psbt;
    }
    toBase64() {
      const buffer = this.toBuffer();
      return buffer.toString('base64');
    }
    toHex() {
      const buffer = this.toBuffer();
      return buffer.toString('hex');
    }
    toBuffer() {
      return parser_1.psbtToBuffer(this);
    }
    updateGlobal(updateData) {
      utils_1.updateGlobal(updateData, this.globalMap);
      return this;
    }
    updateInput(inputIndex, updateData) {
      const input = utils_1.checkForInput(this.inputs, inputIndex);
      utils_1.updateInput(updateData, input);
      return this;
    }
    updateOutput(outputIndex, updateData) {
      const output = utils_1.checkForOutput(this.outputs, outputIndex);
      utils_1.updateOutput(updateData, output);
      return this;
    }
    addUnknownKeyValToGlobal(keyVal) {
      utils_1.checkHasKey(
        keyVal,
        this.globalMap.unknownKeyVals,
        utils_1.getEnumLength(typeFields_1.GlobalTypes),
      );
      if (!this.globalMap.unknownKeyVals) this.globalMap.unknownKeyVals = [];
      this.globalMap.unknownKeyVals.push(keyVal);
      return this;
    }
    addUnknownKeyValToInput(inputIndex, keyVal) {
      const input = utils_1.checkForInput(this.inputs, inputIndex);
      utils_1.checkHasKey(
        keyVal,
        input.unknownKeyVals,
        utils_1.getEnumLength(typeFields_1.InputTypes),
      );
      if (!input.unknownKeyVals) input.unknownKeyVals = [];
      input.unknownKeyVals.push(keyVal);
      return this;
    }
    addUnknownKeyValToOutput(outputIndex, keyVal) {
      const output = utils_1.checkForOutput(this.outputs, outputIndex);
      utils_1.checkHasKey(
        keyVal,
        output.unknownKeyVals,
        utils_1.getEnumLength(typeFields_1.OutputTypes),
      );
      if (!output.unknownKeyVals) output.unknownKeyVals = [];
      output.unknownKeyVals.push(keyVal);
      return this;
    }
    addInput(inputData) {
      this.globalMap.unsignedTx.addInput(inputData);
      this.inputs.push({
        unknownKeyVals: [],
      });
      const addKeyVals = inputData.unknownKeyVals || [];
      const inputIndex = this.inputs.length - 1;
      if (!Array.isArray(addKeyVals)) {
        throw new Error('unknownKeyVals must be an Array');
      }
      addKeyVals.forEach(keyVal =>
        this.addUnknownKeyValToInput(inputIndex, keyVal),
      );
      utils_1.addInputAttributes(this.inputs, inputData);
      return this;
    }
    addOutput(outputData) {
      this.globalMap.unsignedTx.addOutput(outputData);
      this.outputs.push({
        unknownKeyVals: [],
      });
      const addKeyVals = outputData.unknownKeyVals || [];
      const outputIndex = this.outputs.length - 1;
      if (!Array.isArray(addKeyVals)) {
        throw new Error('unknownKeyVals must be an Array');
      }
      addKeyVals.forEach(keyVal =>
        this.addUnknownKeyValToOutput(outputIndex, keyVal),
      );
      utils_1.addOutputAttributes(this.outputs, outputData);
      return this;
    }
    clearFinalizedInput(inputIndex) {
      const input = utils_1.checkForInput(this.inputs, inputIndex);
      utils_1.inputCheckUncleanFinalized(inputIndex, input);
      for (const key of Object.keys(input)) {
        if (
          ![
            'witnessUtxo',
            'nonWitnessUtxo',
            'finalScriptSig',
            'finalScriptWitness',
            'unknownKeyVals',
          ].includes(key)
        ) {
          // @ts-ignore
          delete input[key];
        }
      }
      return this;
    }
    combine(...those) {
      // Combine this with those.
      // Return self for chaining.
      const result = combiner_1.combine([this].concat(those));
      Object.assign(this, result);
      return this;
    }
    getTransaction() {
      return this.globalMap.unsignedTx.toBuffer();
    }
  }
  exports.Psbt = Psbt;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"./combiner":12,"./parser":37,"./typeFields":40,"./utils":41,"buffer":75}],40:[function(require,module,exports){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  var GlobalTypes;
  (function(GlobalTypes) {
    GlobalTypes[(GlobalTypes['UNSIGNED_TX'] = 0)] = 'UNSIGNED_TX';
    GlobalTypes[(GlobalTypes['GLOBAL_XPUB'] = 1)] = 'GLOBAL_XPUB';
  })((GlobalTypes = exports.GlobalTypes || (exports.GlobalTypes = {})));
  exports.GLOBAL_TYPE_NAMES = ['unsignedTx', 'globalXpub'];
  var InputTypes;
  (function(InputTypes) {
    InputTypes[(InputTypes['NON_WITNESS_UTXO'] = 0)] = 'NON_WITNESS_UTXO';
    InputTypes[(InputTypes['WITNESS_UTXO'] = 1)] = 'WITNESS_UTXO';
    InputTypes[(InputTypes['PARTIAL_SIG'] = 2)] = 'PARTIAL_SIG';
    InputTypes[(InputTypes['SIGHASH_TYPE'] = 3)] = 'SIGHASH_TYPE';
    InputTypes[(InputTypes['REDEEM_SCRIPT'] = 4)] = 'REDEEM_SCRIPT';
    InputTypes[(InputTypes['WITNESS_SCRIPT'] = 5)] = 'WITNESS_SCRIPT';
    InputTypes[(InputTypes['BIP32_DERIVATION'] = 6)] = 'BIP32_DERIVATION';
    InputTypes[(InputTypes['FINAL_SCRIPTSIG'] = 7)] = 'FINAL_SCRIPTSIG';
    InputTypes[(InputTypes['FINAL_SCRIPTWITNESS'] = 8)] = 'FINAL_SCRIPTWITNESS';
    InputTypes[(InputTypes['POR_COMMITMENT'] = 9)] = 'POR_COMMITMENT';
    InputTypes[(InputTypes['TAP_KEY_SIG'] = 19)] = 'TAP_KEY_SIG';
    InputTypes[(InputTypes['TAP_SCRIPT_SIG'] = 20)] = 'TAP_SCRIPT_SIG';
    InputTypes[(InputTypes['TAP_LEAF_SCRIPT'] = 21)] = 'TAP_LEAF_SCRIPT';
    InputTypes[(InputTypes['TAP_BIP32_DERIVATION'] = 22)] =
      'TAP_BIP32_DERIVATION';
    InputTypes[(InputTypes['TAP_INTERNAL_KEY'] = 23)] = 'TAP_INTERNAL_KEY';
    InputTypes[(InputTypes['TAP_MERKLE_ROOT'] = 24)] = 'TAP_MERKLE_ROOT';
  })((InputTypes = exports.InputTypes || (exports.InputTypes = {})));
  exports.INPUT_TYPE_NAMES = [
    'nonWitnessUtxo',
    'witnessUtxo',
    'partialSig',
    'sighashType',
    'redeemScript',
    'witnessScript',
    'bip32Derivation',
    'finalScriptSig',
    'finalScriptWitness',
    'porCommitment',
    'tapKeySig',
    'tapScriptSig',
    'tapLeafScript',
    'tapBip32Derivation',
    'tapInternalKey',
    'tapMerkleRoot',
  ];
  var OutputTypes;
  (function(OutputTypes) {
    OutputTypes[(OutputTypes['REDEEM_SCRIPT'] = 0)] = 'REDEEM_SCRIPT';
    OutputTypes[(OutputTypes['WITNESS_SCRIPT'] = 1)] = 'WITNESS_SCRIPT';
    OutputTypes[(OutputTypes['BIP32_DERIVATION'] = 2)] = 'BIP32_DERIVATION';
    OutputTypes[(OutputTypes['TAP_INTERNAL_KEY'] = 5)] = 'TAP_INTERNAL_KEY';
    OutputTypes[(OutputTypes['TAP_TREE'] = 6)] = 'TAP_TREE';
    OutputTypes[(OutputTypes['TAP_BIP32_DERIVATION'] = 7)] =
      'TAP_BIP32_DERIVATION';
  })((OutputTypes = exports.OutputTypes || (exports.OutputTypes = {})));
  exports.OUTPUT_TYPE_NAMES = [
    'redeemScript',
    'witnessScript',
    'bip32Derivation',
    'tapInternalKey',
    'tapTree',
    'tapBip32Derivation',
  ];
  
  },{}],41:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const converter = require('./converter');
  function checkForInput(inputs, inputIndex) {
    const input = inputs[inputIndex];
    if (input === undefined) throw new Error(`No input #${inputIndex}`);
    return input;
  }
  exports.checkForInput = checkForInput;
  function checkForOutput(outputs, outputIndex) {
    const output = outputs[outputIndex];
    if (output === undefined) throw new Error(`No output #${outputIndex}`);
    return output;
  }
  exports.checkForOutput = checkForOutput;
  function checkHasKey(checkKeyVal, keyVals, enumLength) {
    if (checkKeyVal.key[0] < enumLength) {
      throw new Error(
        `Use the method for your specific key instead of addUnknownKeyVal*`,
      );
    }
    if (
      keyVals &&
      keyVals.filter(kv => kv.key.equals(checkKeyVal.key)).length !== 0
    ) {
      throw new Error(`Duplicate Key: ${checkKeyVal.key.toString('hex')}`);
    }
  }
  exports.checkHasKey = checkHasKey;
  function getEnumLength(myenum) {
    let count = 0;
    Object.keys(myenum).forEach(val => {
      if (Number(isNaN(Number(val)))) {
        count++;
      }
    });
    return count;
  }
  exports.getEnumLength = getEnumLength;
  function inputCheckUncleanFinalized(inputIndex, input) {
    let result = false;
    if (input.nonWitnessUtxo || input.witnessUtxo) {
      const needScriptSig = !!input.redeemScript;
      const needWitnessScript = !!input.witnessScript;
      const scriptSigOK = !needScriptSig || !!input.finalScriptSig;
      const witnessScriptOK = !needWitnessScript || !!input.finalScriptWitness;
      const hasOneFinal = !!input.finalScriptSig || !!input.finalScriptWitness;
      result = scriptSigOK && witnessScriptOK && hasOneFinal;
    }
    if (result === false) {
      throw new Error(
        `Input #${inputIndex} has too much or too little data to clean`,
      );
    }
  }
  exports.inputCheckUncleanFinalized = inputCheckUncleanFinalized;
  function throwForUpdateMaker(typeName, name, expected, data) {
    throw new Error(
      `Data for ${typeName} key ${name} is incorrect: Expected ` +
        `${expected} and got ${JSON.stringify(data)}`,
    );
  }
  function updateMaker(typeName) {
    return (updateData, mainData) => {
      for (const name of Object.keys(updateData)) {
        // @ts-ignore
        const data = updateData[name];
        // @ts-ignore
        const { canAdd, canAddToArray, check, expected } =
          // @ts-ignore
          converter[typeName + 's'][name] || {};
        const isArray = !!canAddToArray;
        // If unknown data. ignore and do not add
        if (check) {
          if (isArray) {
            if (
              !Array.isArray(data) ||
              // @ts-ignore
              (mainData[name] && !Array.isArray(mainData[name]))
            ) {
              throw new Error(`Key type ${name} must be an array`);
            }
            if (!data.every(check)) {
              throwForUpdateMaker(typeName, name, expected, data);
            }
            // @ts-ignore
            const arr = mainData[name] || [];
            const dupeCheckSet = new Set();
            if (!data.every(v => canAddToArray(arr, v, dupeCheckSet))) {
              throw new Error('Can not add duplicate data to array');
            }
            // @ts-ignore
            mainData[name] = arr.concat(data);
          } else {
            if (!check(data)) {
              throwForUpdateMaker(typeName, name, expected, data);
            }
            if (!canAdd(mainData, data)) {
              throw new Error(`Can not add duplicate data to ${typeName}`);
            }
            // @ts-ignore
            mainData[name] = data;
          }
        }
      }
    };
  }
  exports.updateGlobal = updateMaker('global');
  exports.updateInput = updateMaker('input');
  exports.updateOutput = updateMaker('output');
  function addInputAttributes(inputs, data) {
    const index = inputs.length - 1;
    const input = checkForInput(inputs, index);
    exports.updateInput(data, input);
  }
  exports.addInputAttributes = addInputAttributes;
  function addOutputAttributes(outputs, data) {
    const index = outputs.length - 1;
    const output = checkForOutput(outputs, index);
    exports.updateOutput(data, output);
  }
  exports.addOutputAttributes = addOutputAttributes;
  function defaultVersionSetter(version, txBuf) {
    if (!Buffer.isBuffer(txBuf) || txBuf.length < 4) {
      throw new Error('Set Version: Invalid Transaction');
    }
    txBuf.writeUInt32LE(version, 0);
    return txBuf;
  }
  exports.defaultVersionSetter = defaultVersionSetter;
  function defaultLocktimeSetter(locktime, txBuf) {
    if (!Buffer.isBuffer(txBuf) || txBuf.length < 4) {
      throw new Error('Set Locktime: Invalid Transaction');
    }
    txBuf.writeUInt32LE(locktime, txBuf.length - 4);
    return txBuf;
  }
  exports.defaultLocktimeSetter = defaultLocktimeSetter;
  
  }).call(this)}).call(this,{"isBuffer":require("../../../is-buffer/index.js")})
  },{"../../../is-buffer/index.js":77,"./converter":15}],42:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.toOutputScript =
    exports.fromOutputScript =
    exports.toBech32 =
    exports.toBase58Check =
    exports.fromBech32 =
    exports.fromBase58Check =
      void 0;
  const networks = require('./networks');
  const payments = require('./payments');
  const bscript = require('./script');
  const types_1 = require('./types');
  const bech32_1 = require('bech32');
  const bs58check = require('bs58check');
  const FUTURE_SEGWIT_MAX_SIZE = 40;
  const FUTURE_SEGWIT_MIN_SIZE = 2;
  const FUTURE_SEGWIT_MAX_VERSION = 16;
  const FUTURE_SEGWIT_MIN_VERSION = 2;
  const FUTURE_SEGWIT_VERSION_DIFF = 0x50;
  const FUTURE_SEGWIT_VERSION_WARNING =
    'WARNING: Sending to a future segwit version address can lead to loss of funds. ' +
    'End users MUST be warned carefully in the GUI and asked if they wish to proceed ' +
    'with caution. Wallets should verify the segwit version from the output of fromBech32, ' +
    'then decide when it is safe to use which version of segwit.';
  function _toFutureSegwitAddress(output, network) {
    const data = output.slice(2);
    if (
      data.length < FUTURE_SEGWIT_MIN_SIZE ||
      data.length > FUTURE_SEGWIT_MAX_SIZE
    )
      throw new TypeError('Invalid program length for segwit address');
    const version = output[0] - FUTURE_SEGWIT_VERSION_DIFF;
    if (
      version < FUTURE_SEGWIT_MIN_VERSION ||
      version > FUTURE_SEGWIT_MAX_VERSION
    )
      throw new TypeError('Invalid version for segwit address');
    if (output[1] !== data.length)
      throw new TypeError('Invalid script for segwit address');
    console.warn(FUTURE_SEGWIT_VERSION_WARNING);
    return toBech32(data, version, network.bech32);
  }
  function fromBase58Check(address) {
    const payload = Buffer.from(bs58check.decode(address));
    // TODO: 4.0.0, move to "toOutputScript"
    if (payload.length < 21) throw new TypeError(address + ' is too short');
    if (payload.length > 21) throw new TypeError(address + ' is too long');
    const version = payload.readUint8(0);
    const hash = payload.slice(1);
    return { version, hash };
  }
  exports.fromBase58Check = fromBase58Check;
  function fromBech32(address) {
    let result;
    let version;
    try {
      result = bech32_1.bech32.decode(address);
    } catch (e) {}
    if (result) {
      version = result.words[0];
      if (version !== 0) throw new TypeError(address + ' uses wrong encoding');
    } else {
      result = bech32_1.bech32m.decode(address);
      version = result.words[0];
      if (version === 0) throw new TypeError(address + ' uses wrong encoding');
    }
    const data = bech32_1.bech32.fromWords(result.words.slice(1));
    return {
      version,
      prefix: result.prefix,
      data: Buffer.from(data),
    };
  }
  exports.fromBech32 = fromBech32;
  function toBase58Check(hash, version) {
    (0, types_1.typeforce)(
      (0, types_1.tuple)(types_1.Hash160bit, types_1.UInt8),
      arguments,
    );
    const payload = Buffer.allocUnsafe(21);
    payload.writeUInt8(version, 0);
    hash.copy(payload, 1);
    return bs58check.encode(payload);
  }
  exports.toBase58Check = toBase58Check;
  function toBech32(data, version, prefix) {
    const words = bech32_1.bech32.toWords(data);
    words.unshift(version);
    return version === 0
      ? bech32_1.bech32.encode(prefix, words)
      : bech32_1.bech32m.encode(prefix, words);
  }
  exports.toBech32 = toBech32;
  function fromOutputScript(output, network) {
    // TODO: Network
    network = network || networks.bitcoin;
    try {
      return payments.p2pkh({ output, network }).address;
    } catch (e) {}
    try {
      return payments.p2sh({ output, network }).address;
    } catch (e) {}
    try {
      return payments.p2wpkh({ output, network }).address;
    } catch (e) {}
    try {
      return payments.p2wsh({ output, network }).address;
    } catch (e) {}
    try {
      return payments.p2tr({ output, network }).address;
    } catch (e) {}
    try {
      return _toFutureSegwitAddress(output, network);
    } catch (e) {}
    throw new Error(bscript.toASM(output) + ' has no matching Address');
  }
  exports.fromOutputScript = fromOutputScript;
  function toOutputScript(address, network) {
    network = network || networks.bitcoin;
    let decodeBase58;
    let decodeBech32;
    try {
      decodeBase58 = fromBase58Check(address);
    } catch (e) {}
    if (decodeBase58) {
      if (decodeBase58.version === network.pubKeyHash)
        return payments.p2pkh({ hash: decodeBase58.hash }).output;
      if (decodeBase58.version === network.scriptHash)
        return payments.p2sh({ hash: decodeBase58.hash }).output;
    } else {
      try {
        decodeBech32 = fromBech32(address);
      } catch (e) {}
      if (decodeBech32) {
        if (decodeBech32.prefix !== network.bech32)
          throw new Error(address + ' has an invalid prefix');
        if (decodeBech32.version === 0) {
          if (decodeBech32.data.length === 20)
            return payments.p2wpkh({ hash: decodeBech32.data }).output;
          if (decodeBech32.data.length === 32)
            return payments.p2wsh({ hash: decodeBech32.data }).output;
        } else if (decodeBech32.version === 1) {
          if (decodeBech32.data.length === 32)
            return payments.p2tr({ pubkey: decodeBech32.data }).output;
        } else if (
          decodeBech32.version >= FUTURE_SEGWIT_MIN_VERSION &&
          decodeBech32.version <= FUTURE_SEGWIT_MAX_VERSION &&
          decodeBech32.data.length >= FUTURE_SEGWIT_MIN_SIZE &&
          decodeBech32.data.length <= FUTURE_SEGWIT_MAX_SIZE
        ) {
          console.warn(FUTURE_SEGWIT_VERSION_WARNING);
          return bscript.compile([
            decodeBech32.version + FUTURE_SEGWIT_VERSION_DIFF,
            decodeBech32.data,
          ]);
        }
      }
    }
    throw new Error(address + ' has no matching Script');
  }
  exports.toOutputScript = toOutputScript;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"./networks":50,"./payments":54,"./script":67,"./types":71,"bech32":11,"bs58check":74,"buffer":75}],43:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  // Reference https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki
  // Format: 0x30 [total-length] 0x02 [R-length] [R] 0x02 [S-length] [S]
  // NOTE: SIGHASH byte ignored AND restricted, truncate before use
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.encode = exports.decode = exports.check = void 0;
  function check(buffer) {
    if (buffer.length < 8) return false;
    if (buffer.length > 72) return false;
    if (buffer[0] !== 0x30) return false;
    if (buffer[1] !== buffer.length - 2) return false;
    if (buffer[2] !== 0x02) return false;
    const lenR = buffer[3];
    if (lenR === 0) return false;
    if (5 + lenR >= buffer.length) return false;
    if (buffer[4 + lenR] !== 0x02) return false;
    const lenS = buffer[5 + lenR];
    if (lenS === 0) return false;
    if (6 + lenR + lenS !== buffer.length) return false;
    if (buffer[4] & 0x80) return false;
    if (lenR > 1 && buffer[4] === 0x00 && !(buffer[5] & 0x80)) return false;
    if (buffer[lenR + 6] & 0x80) return false;
    if (lenS > 1 && buffer[lenR + 6] === 0x00 && !(buffer[lenR + 7] & 0x80))
      return false;
    return true;
  }
  exports.check = check;
  function decode(buffer) {
    if (buffer.length < 8) throw new Error('DER sequence length is too short');
    if (buffer.length > 72) throw new Error('DER sequence length is too long');
    if (buffer[0] !== 0x30) throw new Error('Expected DER sequence');
    if (buffer[1] !== buffer.length - 2)
      throw new Error('DER sequence length is invalid');
    if (buffer[2] !== 0x02) throw new Error('Expected DER integer');
    const lenR = buffer[3];
    if (lenR === 0) throw new Error('R length is zero');
    if (5 + lenR >= buffer.length) throw new Error('R length is too long');
    if (buffer[4 + lenR] !== 0x02) throw new Error('Expected DER integer (2)');
    const lenS = buffer[5 + lenR];
    if (lenS === 0) throw new Error('S length is zero');
    if (6 + lenR + lenS !== buffer.length) throw new Error('S length is invalid');
    if (buffer[4] & 0x80) throw new Error('R value is negative');
    if (lenR > 1 && buffer[4] === 0x00 && !(buffer[5] & 0x80))
      throw new Error('R value excessively padded');
    if (buffer[lenR + 6] & 0x80) throw new Error('S value is negative');
    if (lenS > 1 && buffer[lenR + 6] === 0x00 && !(buffer[lenR + 7] & 0x80))
      throw new Error('S value excessively padded');
    // non-BIP66 - extract R, S values
    return {
      r: buffer.slice(4, 4 + lenR),
      s: buffer.slice(6 + lenR),
    };
  }
  exports.decode = decode;
  /*
   * Expects r and s to be positive DER integers.
   *
   * The DER format uses the most significant bit as a sign bit (& 0x80).
   * If the significant bit is set AND the integer is positive, a 0x00 is prepended.
   *
   * Examples:
   *
   *      0 =>     0x00
   *      1 =>     0x01
   *     -1 =>     0xff
   *    127 =>     0x7f
   *   -127 =>     0x81
   *    128 =>   0x0080
   *   -128 =>     0x80
   *    255 =>   0x00ff
   *   -255 =>   0xff01
   *  16300 =>   0x3fac
   * -16300 =>   0xc054
   *  62300 => 0x00f35c
   * -62300 => 0xff0ca4
   */
  function encode(r, s) {
    const lenR = r.length;
    const lenS = s.length;
    if (lenR === 0) throw new Error('R length is zero');
    if (lenS === 0) throw new Error('S length is zero');
    if (lenR > 33) throw new Error('R length is too long');
    if (lenS > 33) throw new Error('S length is too long');
    if (r[0] & 0x80) throw new Error('R value is negative');
    if (s[0] & 0x80) throw new Error('S value is negative');
    if (lenR > 1 && r[0] === 0x00 && !(r[1] & 0x80))
      throw new Error('R value excessively padded');
    if (lenS > 1 && s[0] === 0x00 && !(s[1] & 0x80))
      throw new Error('S value excessively padded');
    const signature = Buffer.allocUnsafe(6 + lenR + lenS);
    // 0x30 [total-length] 0x02 [R-length] [R] 0x02 [S-length] [S]
    signature[0] = 0x30;
    signature[1] = signature.length - 2;
    signature[2] = 0x02;
    signature[3] = r.length;
    r.copy(signature, 4);
    signature[4 + lenR] = 0x02;
    signature[5 + lenR] = s.length;
    s.copy(signature, 6 + lenR);
    return signature;
  }
  exports.encode = encode;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"buffer":75}],44:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.Block = void 0;
  const bufferutils_1 = require('./bufferutils');
  const bcrypto = require('./crypto');
  const merkle_1 = require('./merkle');
  const transaction_1 = require('./transaction');
  const types = require('./types');
  const { typeforce } = types;
  const errorMerkleNoTxes = new TypeError(
    'Cannot compute merkle root for zero transactions',
  );
  const errorWitnessNotSegwit = new TypeError(
    'Cannot compute witness commit for non-segwit block',
  );
  class Block {
    constructor() {
      this.version = 1;
      this.prevHash = undefined;
      this.merkleRoot = undefined;
      this.timestamp = 0;
      this.witnessCommit = undefined;
      this.bits = 0;
      this.nonce = 0;
      this.transactions = undefined;
    }
    static fromBuffer(buffer) {
      if (buffer.length < 80) throw new Error('Buffer too small (< 80 bytes)');
      const bufferReader = new bufferutils_1.BufferReader(buffer);
      const block = new Block();
      block.version = bufferReader.readInt32();
      block.prevHash = bufferReader.readSlice(32);
      block.merkleRoot = bufferReader.readSlice(32);
      block.timestamp = bufferReader.readUInt32();
      block.bits = bufferReader.readUInt32();
      block.nonce = bufferReader.readUInt32();
      if (buffer.length === 80) return block;
      const readTransaction = () => {
        const tx = transaction_1.Transaction.fromBuffer(
          bufferReader.buffer.slice(bufferReader.offset),
          true,
        );
        bufferReader.offset += tx.byteLength();
        return tx;
      };
      const nTransactions = bufferReader.readVarInt();
      block.transactions = [];
      for (let i = 0; i < nTransactions; ++i) {
        const tx = readTransaction();
        block.transactions.push(tx);
      }
      const witnessCommit = block.getWitnessCommit();
      // This Block contains a witness commit
      if (witnessCommit) block.witnessCommit = witnessCommit;
      return block;
    }
    static fromHex(hex) {
      return Block.fromBuffer(Buffer.from(hex, 'hex'));
    }
    static calculateTarget(bits) {
      const exponent = ((bits & 0xff000000) >> 24) - 3;
      const mantissa = bits & 0x007fffff;
      const target = Buffer.alloc(32, 0);
      target.writeUIntBE(mantissa, 29 - exponent, 3);
      return target;
    }
    static calculateMerkleRoot(transactions, forWitness) {
      typeforce([{ getHash: types.Function }], transactions);
      if (transactions.length === 0) throw errorMerkleNoTxes;
      if (forWitness && !txesHaveWitnessCommit(transactions))
        throw errorWitnessNotSegwit;
      const hashes = transactions.map(transaction =>
        transaction.getHash(forWitness),
      );
      const rootHash = (0, merkle_1.fastMerkleRoot)(hashes, bcrypto.hash256);
      return forWitness
        ? bcrypto.hash256(
            Buffer.concat([rootHash, transactions[0].ins[0].witness[0]]),
          )
        : rootHash;
    }
    getWitnessCommit() {
      if (!txesHaveWitnessCommit(this.transactions)) return null;
      // The merkle root for the witness data is in an OP_RETURN output.
      // There is no rule for the index of the output, so use filter to find it.
      // The root is prepended with 0xaa21a9ed so check for 0x6a24aa21a9ed
      // If multiple commits are found, the output with highest index is assumed.
      const witnessCommits = this.transactions[0].outs
        .filter(out =>
          out.script.slice(0, 6).equals(Buffer.from('6a24aa21a9ed', 'hex')),
        )
        .map(out => out.script.slice(6, 38));
      if (witnessCommits.length === 0) return null;
      // Use the commit with the highest output (should only be one though)
      const result = witnessCommits[witnessCommits.length - 1];
      if (!(result instanceof Buffer && result.length === 32)) return null;
      return result;
    }
    hasWitnessCommit() {
      if (
        this.witnessCommit instanceof Buffer &&
        this.witnessCommit.length === 32
      )
        return true;
      if (this.getWitnessCommit() !== null) return true;
      return false;
    }
    hasWitness() {
      return anyTxHasWitness(this.transactions);
    }
    weight() {
      const base = this.byteLength(false, false);
      const total = this.byteLength(false, true);
      return base * 3 + total;
    }
    byteLength(headersOnly, allowWitness = true) {
      if (headersOnly || !this.transactions) return 80;
      return (
        80 +
        bufferutils_1.varuint.encodingLength(this.transactions.length) +
        this.transactions.reduce((a, x) => a + x.byteLength(allowWitness), 0)
      );
    }
    getHash() {
      return bcrypto.hash256(this.toBuffer(true));
    }
    getId() {
      return (0, bufferutils_1.reverseBuffer)(this.getHash()).toString('hex');
    }
    getUTCDate() {
      const date = new Date(0); // epoch
      date.setUTCSeconds(this.timestamp);
      return date;
    }
    // TODO: buffer, offset compatibility
    toBuffer(headersOnly) {
      const buffer = Buffer.allocUnsafe(this.byteLength(headersOnly));
      const bufferWriter = new bufferutils_1.BufferWriter(buffer);
      bufferWriter.writeInt32(this.version);
      bufferWriter.writeSlice(this.prevHash);
      bufferWriter.writeSlice(this.merkleRoot);
      bufferWriter.writeUInt32(this.timestamp);
      bufferWriter.writeUInt32(this.bits);
      bufferWriter.writeUInt32(this.nonce);
      if (headersOnly || !this.transactions) return buffer;
      bufferutils_1.varuint.encode(
        this.transactions.length,
        buffer,
        bufferWriter.offset,
      );
      bufferWriter.offset += bufferutils_1.varuint.encode.bytes;
      this.transactions.forEach(tx => {
        const txSize = tx.byteLength(); // TODO: extract from toBuffer?
        tx.toBuffer(buffer, bufferWriter.offset);
        bufferWriter.offset += txSize;
      });
      return buffer;
    }
    toHex(headersOnly) {
      return this.toBuffer(headersOnly).toString('hex');
    }
    checkTxRoots() {
      // If the Block has segwit transactions but no witness commit,
      // there's no way it can be valid, so fail the check.
      const hasWitnessCommit = this.hasWitnessCommit();
      if (!hasWitnessCommit && this.hasWitness()) return false;
      return (
        this.__checkMerkleRoot() &&
        (hasWitnessCommit ? this.__checkWitnessCommit() : true)
      );
    }
    checkProofOfWork() {
      const hash = (0, bufferutils_1.reverseBuffer)(this.getHash());
      const target = Block.calculateTarget(this.bits);
      return hash.compare(target) <= 0;
    }
    __checkMerkleRoot() {
      if (!this.transactions) throw errorMerkleNoTxes;
      const actualMerkleRoot = Block.calculateMerkleRoot(this.transactions);
      return this.merkleRoot.compare(actualMerkleRoot) === 0;
    }
    __checkWitnessCommit() {
      if (!this.transactions) throw errorMerkleNoTxes;
      if (!this.hasWitnessCommit()) throw errorWitnessNotSegwit;
      const actualWitnessCommit = Block.calculateMerkleRoot(
        this.transactions,
        true,
      );
      return this.witnessCommit.compare(actualWitnessCommit) === 0;
    }
  }
  exports.Block = Block;
  function txesHaveWitnessCommit(transactions) {
    return (
      transactions instanceof Array &&
      transactions[0] &&
      transactions[0].ins &&
      transactions[0].ins instanceof Array &&
      transactions[0].ins[0] &&
      transactions[0].ins[0].witness &&
      transactions[0].ins[0].witness instanceof Array &&
      transactions[0].ins[0].witness.length > 0
    );
  }
  function anyTxHasWitness(transactions) {
    return (
      transactions instanceof Array &&
      transactions.some(
        tx =>
          typeof tx === 'object' &&
          tx.ins instanceof Array &&
          tx.ins.some(
            input =>
              typeof input === 'object' &&
              input.witness instanceof Array &&
              input.witness.length > 0,
          ),
      )
    );
  }
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"./bufferutils":45,"./crypto":46,"./merkle":49,"./transaction":70,"./types":71,"buffer":75}],45:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.BufferReader =
    exports.BufferWriter =
    exports.cloneBuffer =
    exports.reverseBuffer =
    exports.writeUInt64LE =
    exports.readUInt64LE =
    exports.varuint =
      void 0;
  const types = require('./types');
  const { typeforce } = types;
  const varuint = require('varuint-bitcoin');
  exports.varuint = varuint;
  // https://github.com/feross/buffer/blob/master/index.js#L1127
  function verifuint(value, max) {
    if (typeof value !== 'number')
      throw new Error('cannot write a non-number as a number');
    if (value < 0)
      throw new Error('specified a negative value for writing an unsigned value');
    if (value > max) throw new Error('RangeError: value out of range');
    if (Math.floor(value) !== value)
      throw new Error('value has a fractional component');
  }
  function readUInt64LE(buffer, offset) {
    const a = buffer.readUInt32LE(offset);
    let b = buffer.readUInt32LE(offset + 4);
    b *= 0x100000000;
    verifuint(b + a, 0x001fffffffffffff);
    return b + a;
  }
  exports.readUInt64LE = readUInt64LE;
  function writeUInt64LE(buffer, value, offset) {
    verifuint(value, 0x001fffffffffffff);
    buffer.writeInt32LE(value & -1, offset);
    buffer.writeUInt32LE(Math.floor(value / 0x100000000), offset + 4);
    return offset + 8;
  }
  exports.writeUInt64LE = writeUInt64LE;
  function reverseBuffer(buffer) {
    if (buffer.length < 1) return buffer;
    let j = buffer.length - 1;
    let tmp = 0;
    for (let i = 0; i < buffer.length / 2; i++) {
      tmp = buffer[i];
      buffer[i] = buffer[j];
      buffer[j] = tmp;
      j--;
    }
    return buffer;
  }
  exports.reverseBuffer = reverseBuffer;
  function cloneBuffer(buffer) {
    const clone = Buffer.allocUnsafe(buffer.length);
    buffer.copy(clone);
    return clone;
  }
  exports.cloneBuffer = cloneBuffer;
  /**
   * Helper class for serialization of bitcoin data types into a pre-allocated buffer.
   */
  class BufferWriter {
    static withCapacity(size) {
      return new BufferWriter(Buffer.alloc(size));
    }
    constructor(buffer, offset = 0) {
      this.buffer = buffer;
      this.offset = offset;
      typeforce(types.tuple(types.Buffer, types.UInt32), [buffer, offset]);
    }
    writeUInt8(i) {
      this.offset = this.buffer.writeUInt8(i, this.offset);
    }
    writeInt32(i) {
      this.offset = this.buffer.writeInt32LE(i, this.offset);
    }
    writeUInt32(i) {
      this.offset = this.buffer.writeUInt32LE(i, this.offset);
    }
    writeUInt64(i) {
      this.offset = writeUInt64LE(this.buffer, i, this.offset);
    }
    writeVarInt(i) {
      varuint.encode(i, this.buffer, this.offset);
      this.offset += varuint.encode.bytes;
    }
    writeSlice(slice) {
      if (this.buffer.length < this.offset + slice.length) {
        throw new Error('Cannot write slice out of bounds');
      }
      this.offset += slice.copy(this.buffer, this.offset);
    }
    writeVarSlice(slice) {
      this.writeVarInt(slice.length);
      this.writeSlice(slice);
    }
    writeVector(vector) {
      this.writeVarInt(vector.length);
      vector.forEach(buf => this.writeVarSlice(buf));
    }
    end() {
      if (this.buffer.length === this.offset) {
        return this.buffer;
      }
      throw new Error(`buffer size ${this.buffer.length}, offset ${this.offset}`);
    }
  }
  exports.BufferWriter = BufferWriter;
  /**
   * Helper class for reading of bitcoin data types from a buffer.
   */
  class BufferReader {
    constructor(buffer, offset = 0) {
      this.buffer = buffer;
      this.offset = offset;
      typeforce(types.tuple(types.Buffer, types.UInt32), [buffer, offset]);
    }
    readUInt8() {
      const result = this.buffer.readUInt8(this.offset);
      this.offset++;
      return result;
    }
    readInt32() {
      const result = this.buffer.readInt32LE(this.offset);
      this.offset += 4;
      return result;
    }
    readUInt32() {
      const result = this.buffer.readUInt32LE(this.offset);
      this.offset += 4;
      return result;
    }
    readUInt64() {
      const result = readUInt64LE(this.buffer, this.offset);
      this.offset += 8;
      return result;
    }
    readVarInt() {
      const vi = varuint.decode(this.buffer, this.offset);
      this.offset += varuint.decode.bytes;
      return vi;
    }
    readSlice(n) {
      if (this.buffer.length < this.offset + n) {
        throw new Error('Cannot read slice out of bounds');
      }
      const result = this.buffer.slice(this.offset, this.offset + n);
      this.offset += n;
      return result;
    }
    readVarSlice() {
      return this.readSlice(this.readVarInt());
    }
    readVector() {
      const count = this.readVarInt();
      const vector = [];
      for (let i = 0; i < count; i++) vector.push(this.readVarSlice());
      return vector;
    }
  }
  exports.BufferReader = BufferReader;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"./types":71,"buffer":75,"varuint-bitcoin":83}],46:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.taggedHash =
    exports.TAGGED_HASH_PREFIXES =
    exports.TAGS =
    exports.hash256 =
    exports.hash160 =
    exports.sha256 =
    exports.sha1 =
    exports.ripemd160 =
      void 0;
  const ripemd160_1 = require('@noble/hashes/ripemd160');
  const sha1_1 = require('@noble/hashes/sha1');
  const sha256_1 = require('@noble/hashes/sha256');
  function ripemd160(buffer) {
    return Buffer.from((0, ripemd160_1.ripemd160)(Uint8Array.from(buffer)));
  }
  exports.ripemd160 = ripemd160;
  function sha1(buffer) {
    return Buffer.from((0, sha1_1.sha1)(Uint8Array.from(buffer)));
  }
  exports.sha1 = sha1;
  function sha256(buffer) {
    return Buffer.from((0, sha256_1.sha256)(Uint8Array.from(buffer)));
  }
  exports.sha256 = sha256;
  function hash160(buffer) {
    return Buffer.from(
      (0, ripemd160_1.ripemd160)((0, sha256_1.sha256)(Uint8Array.from(buffer))),
    );
  }
  exports.hash160 = hash160;
  function hash256(buffer) {
    return Buffer.from(
      (0, sha256_1.sha256)((0, sha256_1.sha256)(Uint8Array.from(buffer))),
    );
  }
  exports.hash256 = hash256;
  exports.TAGS = [
    'BIP0340/challenge',
    'BIP0340/aux',
    'BIP0340/nonce',
    'TapLeaf',
    'TapBranch',
    'TapSighash',
    'TapTweak',
    'KeyAgg list',
    'KeyAgg coefficient',
  ];
  /** An object mapping tags to their tagged hash prefix of [SHA256(tag) | SHA256(tag)] */
  exports.TAGGED_HASH_PREFIXES = {
    'BIP0340/challenge': Buffer.from([
      123, 181, 45, 122, 159, 239, 88, 50, 62, 177, 191, 122, 64, 125, 179, 130,
      210, 243, 242, 216, 27, 177, 34, 79, 73, 254, 81, 143, 109, 72, 211, 124,
      123, 181, 45, 122, 159, 239, 88, 50, 62, 177, 191, 122, 64, 125, 179, 130,
      210, 243, 242, 216, 27, 177, 34, 79, 73, 254, 81, 143, 109, 72, 211, 124,
    ]),
    'BIP0340/aux': Buffer.from([
      241, 239, 78, 94, 192, 99, 202, 218, 109, 148, 202, 250, 157, 152, 126, 160,
      105, 38, 88, 57, 236, 193, 31, 151, 45, 119, 165, 46, 216, 193, 204, 144,
      241, 239, 78, 94, 192, 99, 202, 218, 109, 148, 202, 250, 157, 152, 126, 160,
      105, 38, 88, 57, 236, 193, 31, 151, 45, 119, 165, 46, 216, 193, 204, 144,
    ]),
    'BIP0340/nonce': Buffer.from([
      7, 73, 119, 52, 167, 155, 203, 53, 91, 155, 140, 125, 3, 79, 18, 28, 244,
      52, 215, 62, 247, 45, 218, 25, 135, 0, 97, 251, 82, 191, 235, 47, 7, 73,
      119, 52, 167, 155, 203, 53, 91, 155, 140, 125, 3, 79, 18, 28, 244, 52, 215,
      62, 247, 45, 218, 25, 135, 0, 97, 251, 82, 191, 235, 47,
    ]),
    TapLeaf: Buffer.from([
      174, 234, 143, 220, 66, 8, 152, 49, 5, 115, 75, 88, 8, 29, 30, 38, 56, 211,
      95, 28, 181, 64, 8, 212, 211, 87, 202, 3, 190, 120, 233, 238, 174, 234, 143,
      220, 66, 8, 152, 49, 5, 115, 75, 88, 8, 29, 30, 38, 56, 211, 95, 28, 181,
      64, 8, 212, 211, 87, 202, 3, 190, 120, 233, 238,
    ]),
    TapBranch: Buffer.from([
      25, 65, 161, 242, 229, 110, 185, 95, 162, 169, 241, 148, 190, 92, 1, 247,
      33, 111, 51, 237, 130, 176, 145, 70, 52, 144, 208, 91, 245, 22, 160, 21, 25,
      65, 161, 242, 229, 110, 185, 95, 162, 169, 241, 148, 190, 92, 1, 247, 33,
      111, 51, 237, 130, 176, 145, 70, 52, 144, 208, 91, 245, 22, 160, 21,
    ]),
    TapSighash: Buffer.from([
      244, 10, 72, 223, 75, 42, 112, 200, 180, 146, 75, 242, 101, 70, 97, 237, 61,
      149, 253, 102, 163, 19, 235, 135, 35, 117, 151, 198, 40, 228, 160, 49, 244,
      10, 72, 223, 75, 42, 112, 200, 180, 146, 75, 242, 101, 70, 97, 237, 61, 149,
      253, 102, 163, 19, 235, 135, 35, 117, 151, 198, 40, 228, 160, 49,
    ]),
    TapTweak: Buffer.from([
      232, 15, 225, 99, 156, 156, 160, 80, 227, 175, 27, 57, 193, 67, 198, 62, 66,
      156, 188, 235, 21, 217, 64, 251, 181, 197, 161, 244, 175, 87, 197, 233, 232,
      15, 225, 99, 156, 156, 160, 80, 227, 175, 27, 57, 193, 67, 198, 62, 66, 156,
      188, 235, 21, 217, 64, 251, 181, 197, 161, 244, 175, 87, 197, 233,
    ]),
    'KeyAgg list': Buffer.from([
      72, 28, 151, 28, 60, 11, 70, 215, 240, 178, 117, 174, 89, 141, 78, 44, 126,
      215, 49, 156, 89, 74, 92, 110, 199, 158, 160, 212, 153, 2, 148, 240, 72, 28,
      151, 28, 60, 11, 70, 215, 240, 178, 117, 174, 89, 141, 78, 44, 126, 215, 49,
      156, 89, 74, 92, 110, 199, 158, 160, 212, 153, 2, 148, 240,
    ]),
    'KeyAgg coefficient': Buffer.from([
      191, 201, 4, 3, 77, 28, 136, 232, 200, 14, 34, 229, 61, 36, 86, 109, 100,
      130, 78, 214, 66, 114, 129, 192, 145, 0, 249, 77, 205, 82, 201, 129, 191,
      201, 4, 3, 77, 28, 136, 232, 200, 14, 34, 229, 61, 36, 86, 109, 100, 130,
      78, 214, 66, 114, 129, 192, 145, 0, 249, 77, 205, 82, 201, 129,
    ]),
  };
  function taggedHash(prefix, data) {
    return sha256(Buffer.concat([exports.TAGGED_HASH_PREFIXES[prefix], data]));
  }
  exports.taggedHash = taggedHash;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"@noble/hashes/ripemd160":5,"@noble/hashes/sha1":6,"@noble/hashes/sha256":7,"buffer":75}],47:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.getEccLib = exports.initEccLib = void 0;
  const _ECCLIB_CACHE = {};
  function initEccLib(eccLib) {
    if (!eccLib) {
      // allow clearing the library
      _ECCLIB_CACHE.eccLib = eccLib;
    } else if (eccLib !== _ECCLIB_CACHE.eccLib) {
      // new instance, verify it
      verifyEcc(eccLib);
      _ECCLIB_CACHE.eccLib = eccLib;
    }
  }
  exports.initEccLib = initEccLib;
  function getEccLib() {
    if (!_ECCLIB_CACHE.eccLib)
      throw new Error(
        'No ECC Library provided. You must call initEccLib() with a valid TinySecp256k1Interface instance',
      );
    return _ECCLIB_CACHE.eccLib;
  }
  exports.getEccLib = getEccLib;
  const h = hex => Buffer.from(hex, 'hex');
  function verifyEcc(ecc) {
    assert(typeof ecc.isXOnlyPoint === 'function');
    assert(
      ecc.isXOnlyPoint(
        h('79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798'),
      ),
    );
    assert(
      ecc.isXOnlyPoint(
        h('fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffc2e'),
      ),
    );
    assert(
      ecc.isXOnlyPoint(
        h('f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9'),
      ),
    );
    assert(
      ecc.isXOnlyPoint(
        h('0000000000000000000000000000000000000000000000000000000000000001'),
      ),
    );
    assert(
      !ecc.isXOnlyPoint(
        h('0000000000000000000000000000000000000000000000000000000000000000'),
      ),
    );
    assert(
      !ecc.isXOnlyPoint(
        h('fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f'),
      ),
    );
    assert(typeof ecc.xOnlyPointAddTweak === 'function');
    tweakAddVectors.forEach(t => {
      const r = ecc.xOnlyPointAddTweak(h(t.pubkey), h(t.tweak));
      if (t.result === null) {
        assert(r === null);
      } else {
        assert(r !== null);
        assert(r.parity === t.parity);
        assert(Buffer.from(r.xOnlyPubkey).equals(h(t.result)));
      }
    });
  }
  function assert(bool) {
    if (!bool) throw new Error('ecc library invalid');
  }
  const tweakAddVectors = [
    {
      pubkey: '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
      tweak: 'fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140',
      parity: -1,
      result: null,
    },
    {
      pubkey: '1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b',
      tweak: 'a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac',
      parity: 1,
      result: 'e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf',
    },
    {
      pubkey: '2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991',
      tweak: '823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47',
      parity: 0,
      result: '9534f8dc8c6deda2dc007655981c78b49c5d96c778fbf363462a11ec9dfd948c',
    },
  ];
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"buffer":75}],48:[function(require,module,exports){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.initEccLib =
    exports.Transaction =
    exports.opcodes =
    exports.Psbt =
    exports.Block =
    exports.script =
    exports.payments =
    exports.networks =
    exports.crypto =
    exports.address =
      void 0;
  const address = require('./address');
  exports.address = address;
  const crypto = require('./crypto');
  exports.crypto = crypto;
  const networks = require('./networks');
  exports.networks = networks;
  const payments = require('./payments');
  exports.payments = payments;
  const script = require('./script');
  exports.script = script;
  var block_1 = require('./block');
  Object.defineProperty(exports, 'Block', {
    enumerable: true,
    get: function () {
      return block_1.Block;
    },
  });
  var psbt_1 = require('./psbt');
  Object.defineProperty(exports, 'Psbt', {
    enumerable: true,
    get: function () {
      return psbt_1.Psbt;
    },
  });
  var ops_1 = require('./ops');
  Object.defineProperty(exports, 'opcodes', {
    enumerable: true,
    get: function () {
      return ops_1.OPS;
    },
  });
  var transaction_1 = require('./transaction');
  Object.defineProperty(exports, 'Transaction', {
    enumerable: true,
    get: function () {
      return transaction_1.Transaction;
    },
  });
  var ecc_lib_1 = require('./ecc_lib');
  Object.defineProperty(exports, 'initEccLib', {
    enumerable: true,
    get: function () {
      return ecc_lib_1.initEccLib;
    },
  });
  
  },{"./address":42,"./block":44,"./crypto":46,"./ecc_lib":47,"./networks":50,"./ops":51,"./payments":54,"./psbt":63,"./script":67,"./transaction":70}],49:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.fastMerkleRoot = void 0;
  function fastMerkleRoot(values, digestFn) {
    if (!Array.isArray(values)) throw TypeError('Expected values Array');
    if (typeof digestFn !== 'function')
      throw TypeError('Expected digest Function');
    let length = values.length;
    const results = values.concat();
    while (length > 1) {
      let j = 0;
      for (let i = 0; i < length; i += 2, ++j) {
        const left = results[i];
        const right = i + 1 === length ? left : results[i + 1];
        const data = Buffer.concat([left, right]);
        results[j] = digestFn(data);
      }
      length = j;
    }
    return results[0];
  }
  exports.fastMerkleRoot = fastMerkleRoot;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"buffer":75}],50:[function(require,module,exports){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.testnet = exports.regtest = exports.bitcoin = void 0;
  exports.bitcoin = {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
  };
  exports.regtest = {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bcrt',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
  };
  exports.testnet = {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
  };
  
  },{}],51:[function(require,module,exports){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.REVERSE_OPS = exports.OPS = void 0;
  const OPS = {
    OP_FALSE: 0,
    OP_0: 0,
    OP_PUSHDATA1: 76,
    OP_PUSHDATA2: 77,
    OP_PUSHDATA4: 78,
    OP_1NEGATE: 79,
    OP_RESERVED: 80,
    OP_TRUE: 81,
    OP_1: 81,
    OP_2: 82,
    OP_3: 83,
    OP_4: 84,
    OP_5: 85,
    OP_6: 86,
    OP_7: 87,
    OP_8: 88,
    OP_9: 89,
    OP_10: 90,
    OP_11: 91,
    OP_12: 92,
    OP_13: 93,
    OP_14: 94,
    OP_15: 95,
    OP_16: 96,
    OP_NOP: 97,
    OP_VER: 98,
    OP_IF: 99,
    OP_NOTIF: 100,
    OP_VERIF: 101,
    OP_VERNOTIF: 102,
    OP_ELSE: 103,
    OP_ENDIF: 104,
    OP_VERIFY: 105,
    OP_RETURN: 106,
    OP_TOALTSTACK: 107,
    OP_FROMALTSTACK: 108,
    OP_2DROP: 109,
    OP_2DUP: 110,
    OP_3DUP: 111,
    OP_2OVER: 112,
    OP_2ROT: 113,
    OP_2SWAP: 114,
    OP_IFDUP: 115,
    OP_DEPTH: 116,
    OP_DROP: 117,
    OP_DUP: 118,
    OP_NIP: 119,
    OP_OVER: 120,
    OP_PICK: 121,
    OP_ROLL: 122,
    OP_ROT: 123,
    OP_SWAP: 124,
    OP_TUCK: 125,
    OP_CAT: 126,
    OP_SUBSTR: 127,
    OP_LEFT: 128,
    OP_RIGHT: 129,
    OP_SIZE: 130,
    OP_INVERT: 131,
    OP_AND: 132,
    OP_OR: 133,
    OP_XOR: 134,
    OP_EQUAL: 135,
    OP_EQUALVERIFY: 136,
    OP_RESERVED1: 137,
    OP_RESERVED2: 138,
    OP_1ADD: 139,
    OP_1SUB: 140,
    OP_2MUL: 141,
    OP_2DIV: 142,
    OP_NEGATE: 143,
    OP_ABS: 144,
    OP_NOT: 145,
    OP_0NOTEQUAL: 146,
    OP_ADD: 147,
    OP_SUB: 148,
    OP_MUL: 149,
    OP_DIV: 150,
    OP_MOD: 151,
    OP_LSHIFT: 152,
    OP_RSHIFT: 153,
    OP_BOOLAND: 154,
    OP_BOOLOR: 155,
    OP_NUMEQUAL: 156,
    OP_NUMEQUALVERIFY: 157,
    OP_NUMNOTEQUAL: 158,
    OP_LESSTHAN: 159,
    OP_GREATERTHAN: 160,
    OP_LESSTHANOREQUAL: 161,
    OP_GREATERTHANOREQUAL: 162,
    OP_MIN: 163,
    OP_MAX: 164,
    OP_WITHIN: 165,
    OP_RIPEMD160: 166,
    OP_SHA1: 167,
    OP_SHA256: 168,
    OP_HASH160: 169,
    OP_HASH256: 170,
    OP_CODESEPARATOR: 171,
    OP_CHECKSIG: 172,
    OP_CHECKSIGVERIFY: 173,
    OP_CHECKMULTISIG: 174,
    OP_CHECKMULTISIGVERIFY: 175,
    OP_NOP1: 176,
    OP_NOP2: 177,
    OP_CHECKLOCKTIMEVERIFY: 177,
    OP_NOP3: 178,
    OP_CHECKSEQUENCEVERIFY: 178,
    OP_NOP4: 179,
    OP_NOP5: 180,
    OP_NOP6: 181,
    OP_NOP7: 182,
    OP_NOP8: 183,
    OP_NOP9: 184,
    OP_NOP10: 185,
    OP_CHECKSIGADD: 186,
    OP_PUBKEYHASH: 253,
    OP_PUBKEY: 254,
    OP_INVALIDOPCODE: 255,
  };
  exports.OPS = OPS;
  const REVERSE_OPS = {};
  exports.REVERSE_OPS = REVERSE_OPS;
  for (const op of Object.keys(OPS)) {
    const code = OPS[op];
    REVERSE_OPS[code] = op;
  }
  
  },{}],52:[function(require,module,exports){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.tweakKey =
    exports.tapTweakHash =
    exports.tapleafHash =
    exports.findScriptPath =
    exports.toHashTree =
    exports.rootHashFromPath =
    exports.MAX_TAPTREE_DEPTH =
    exports.LEAF_VERSION_TAPSCRIPT =
      void 0;
  const buffer_1 = require('buffer');
  const ecc_lib_1 = require('../ecc_lib');
  const bcrypto = require('../crypto');
  const bufferutils_1 = require('../bufferutils');
  const types_1 = require('../types');
  exports.LEAF_VERSION_TAPSCRIPT = 0xc0;
  exports.MAX_TAPTREE_DEPTH = 128;
  const isHashBranch = ht => 'left' in ht && 'right' in ht;
  function rootHashFromPath(controlBlock, leafHash) {
    if (controlBlock.length < 33)
      throw new TypeError(
        `The control-block length is too small. Got ${controlBlock.length}, expected min 33.`,
      );
    const m = (controlBlock.length - 33) / 32;
    let kj = leafHash;
    for (let j = 0; j < m; j++) {
      const ej = controlBlock.slice(33 + 32 * j, 65 + 32 * j);
      if (kj.compare(ej) < 0) {
        kj = tapBranchHash(kj, ej);
      } else {
        kj = tapBranchHash(ej, kj);
      }
    }
    return kj;
  }
  exports.rootHashFromPath = rootHashFromPath;
  /**
   * Build a hash tree of merkle nodes from the scripts binary tree.
   * @param scriptTree - the tree of scripts to pairwise hash.
   */
  function toHashTree(scriptTree) {
    if ((0, types_1.isTapleaf)(scriptTree))
      return { hash: tapleafHash(scriptTree) };
    const hashes = [toHashTree(scriptTree[0]), toHashTree(scriptTree[1])];
    hashes.sort((a, b) => a.hash.compare(b.hash));
    const [left, right] = hashes;
    return {
      hash: tapBranchHash(left.hash, right.hash),
      left,
      right,
    };
  }
  exports.toHashTree = toHashTree;
  /**
   * Given a HashTree, finds the path from a particular hash to the root.
   * @param node - the root of the tree
   * @param hash - the hash to search for
   * @returns - array of sibling hashes, from leaf (inclusive) to root
   * (exclusive) needed to prove inclusion of the specified hash. undefined if no
   * path is found
   */
  function findScriptPath(node, hash) {
    if (isHashBranch(node)) {
      const leftPath = findScriptPath(node.left, hash);
      if (leftPath !== undefined) return [...leftPath, node.right.hash];
      const rightPath = findScriptPath(node.right, hash);
      if (rightPath !== undefined) return [...rightPath, node.left.hash];
    } else if (node.hash.equals(hash)) {
      return [];
    }
    return undefined;
  }
  exports.findScriptPath = findScriptPath;
  function tapleafHash(leaf) {
    const version = leaf.version || exports.LEAF_VERSION_TAPSCRIPT;
    return bcrypto.taggedHash(
      'TapLeaf',
      buffer_1.Buffer.concat([
        buffer_1.Buffer.from([version]),
        serializeScript(leaf.output),
      ]),
    );
  }
  exports.tapleafHash = tapleafHash;
  function tapTweakHash(pubKey, h) {
    return bcrypto.taggedHash(
      'TapTweak',
      buffer_1.Buffer.concat(h ? [pubKey, h] : [pubKey]),
    );
  }
  exports.tapTweakHash = tapTweakHash;
  function tweakKey(pubKey, h) {
    if (!buffer_1.Buffer.isBuffer(pubKey)) return null;
    if (pubKey.length !== 32) return null;
    if (h && h.length !== 32) return null;
    const tweakHash = tapTweakHash(pubKey, h);
    const res = (0, ecc_lib_1.getEccLib)().xOnlyPointAddTweak(pubKey, tweakHash);
    if (!res || res.xOnlyPubkey === null) return null;
    return {
      parity: res.parity,
      x: buffer_1.Buffer.from(res.xOnlyPubkey),
    };
  }
  exports.tweakKey = tweakKey;
  function tapBranchHash(a, b) {
    return bcrypto.taggedHash('TapBranch', buffer_1.Buffer.concat([a, b]));
  }
  function serializeScript(s) {
    const varintLen = bufferutils_1.varuint.encodingLength(s.length);
    const buffer = buffer_1.Buffer.allocUnsafe(varintLen); // better
    bufferutils_1.varuint.encode(s.length, buffer);
    return buffer_1.Buffer.concat([buffer, s]);
  }
  
  },{"../bufferutils":45,"../crypto":46,"../ecc_lib":47,"../types":71,"buffer":75}],53:[function(require,module,exports){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.p2data = void 0;
  const networks_1 = require('../networks');
  const bscript = require('../script');
  const types_1 = require('../types');
  const lazy = require('./lazy');
  const OPS = bscript.OPS;
  function stacksEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.every((x, i) => {
      return x.equals(b[i]);
    });
  }
  // output: OP_RETURN ...
  function p2data(a, opts) {
    if (!a.data && !a.output) throw new TypeError('Not enough data');
    opts = Object.assign({ validate: true }, opts || {});
    (0, types_1.typeforce)(
      {
        network: types_1.typeforce.maybe(types_1.typeforce.Object),
        output: types_1.typeforce.maybe(types_1.typeforce.Buffer),
        data: types_1.typeforce.maybe(
          types_1.typeforce.arrayOf(types_1.typeforce.Buffer),
        ),
      },
      a,
    );
    const network = a.network || networks_1.bitcoin;
    const o = { name: 'embed', network };
    lazy.prop(o, 'output', () => {
      if (!a.data) return;
      return bscript.compile([OPS.OP_RETURN].concat(a.data));
    });
    lazy.prop(o, 'data', () => {
      if (!a.output) return;
      return bscript.decompile(a.output).slice(1);
    });
    // extended validation
    if (opts.validate) {
      if (a.output) {
        const chunks = bscript.decompile(a.output);
        if (chunks[0] !== OPS.OP_RETURN) throw new TypeError('Output is invalid');
        if (!chunks.slice(1).every(types_1.typeforce.Buffer))
          throw new TypeError('Output is invalid');
        if (a.data && !stacksEqual(a.data, o.data))
          throw new TypeError('Data mismatch');
      }
    }
    return Object.assign(o, a);
  }
  exports.p2data = p2data;
  
  },{"../networks":50,"../script":67,"../types":71,"./lazy":55}],54:[function(require,module,exports){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.p2tr =
    exports.p2wsh =
    exports.p2wpkh =
    exports.p2sh =
    exports.p2pkh =
    exports.p2pk =
    exports.p2ms =
    exports.embed =
      void 0;
  const embed_1 = require('./embed');
  Object.defineProperty(exports, 'embed', {
    enumerable: true,
    get: function () {
      return embed_1.p2data;
    },
  });
  const p2ms_1 = require('./p2ms');
  Object.defineProperty(exports, 'p2ms', {
    enumerable: true,
    get: function () {
      return p2ms_1.p2ms;
    },
  });
  const p2pk_1 = require('./p2pk');
  Object.defineProperty(exports, 'p2pk', {
    enumerable: true,
    get: function () {
      return p2pk_1.p2pk;
    },
  });
  const p2pkh_1 = require('./p2pkh');
  Object.defineProperty(exports, 'p2pkh', {
    enumerable: true,
    get: function () {
      return p2pkh_1.p2pkh;
    },
  });
  const p2sh_1 = require('./p2sh');
  Object.defineProperty(exports, 'p2sh', {
    enumerable: true,
    get: function () {
      return p2sh_1.p2sh;
    },
  });
  const p2wpkh_1 = require('./p2wpkh');
  Object.defineProperty(exports, 'p2wpkh', {
    enumerable: true,
    get: function () {
      return p2wpkh_1.p2wpkh;
    },
  });
  const p2wsh_1 = require('./p2wsh');
  Object.defineProperty(exports, 'p2wsh', {
    enumerable: true,
    get: function () {
      return p2wsh_1.p2wsh;
    },
  });
  const p2tr_1 = require('./p2tr');
  Object.defineProperty(exports, 'p2tr', {
    enumerable: true,
    get: function () {
      return p2tr_1.p2tr;
    },
  });
  // TODO
  // witness commitment
  
  },{"./embed":53,"./p2ms":56,"./p2pk":57,"./p2pkh":58,"./p2sh":59,"./p2tr":60,"./p2wpkh":61,"./p2wsh":62}],55:[function(require,module,exports){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.value = exports.prop = void 0;
  function prop(object, name, f) {
    Object.defineProperty(object, name, {
      configurable: true,
      enumerable: true,
      get() {
        const _value = f.call(this);
        this[name] = _value;
        return _value;
      },
      set(_value) {
        Object.defineProperty(this, name, {
          configurable: true,
          enumerable: true,
          value: _value,
          writable: true,
        });
      },
    });
  }
  exports.prop = prop;
  function value(f) {
    let _value;
    return () => {
      if (_value !== undefined) return _value;
      _value = f();
      return _value;
    };
  }
  exports.value = value;
  
  },{}],56:[function(require,module,exports){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.p2ms = void 0;
  const networks_1 = require('../networks');
  const bscript = require('../script');
  const types_1 = require('../types');
  const lazy = require('./lazy');
  const OPS = bscript.OPS;
  const OP_INT_BASE = OPS.OP_RESERVED; // OP_1 - 1
  function stacksEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.every((x, i) => {
      return x.equals(b[i]);
    });
  }
  // input: OP_0 [signatures ...]
  // output: m [pubKeys ...] n OP_CHECKMULTISIG
  function p2ms(a, opts) {
    if (
      !a.input &&
      !a.output &&
      !(a.pubkeys && a.m !== undefined) &&
      !a.signatures
    )
      throw new TypeError('Not enough data');
    opts = Object.assign({ validate: true }, opts || {});
    function isAcceptableSignature(x) {
      return (
        bscript.isCanonicalScriptSignature(x) ||
        (opts.allowIncomplete && x === OPS.OP_0) !== undefined
      );
    }
    (0, types_1.typeforce)(
      {
        network: types_1.typeforce.maybe(types_1.typeforce.Object),
        m: types_1.typeforce.maybe(types_1.typeforce.Number),
        n: types_1.typeforce.maybe(types_1.typeforce.Number),
        output: types_1.typeforce.maybe(types_1.typeforce.Buffer),
        pubkeys: types_1.typeforce.maybe(
          types_1.typeforce.arrayOf(types_1.isPoint),
        ),
        signatures: types_1.typeforce.maybe(
          types_1.typeforce.arrayOf(isAcceptableSignature),
        ),
        input: types_1.typeforce.maybe(types_1.typeforce.Buffer),
      },
      a,
    );
    const network = a.network || networks_1.bitcoin;
    const o = { network };
    let chunks = [];
    let decoded = false;
    function decode(output) {
      if (decoded) return;
      decoded = true;
      chunks = bscript.decompile(output);
      o.m = chunks[0] - OP_INT_BASE;
      o.n = chunks[chunks.length - 2] - OP_INT_BASE;
      o.pubkeys = chunks.slice(1, -2);
    }
    lazy.prop(o, 'output', () => {
      if (!a.m) return;
      if (!o.n) return;
      if (!a.pubkeys) return;
      return bscript.compile(
        [].concat(
          OP_INT_BASE + a.m,
          a.pubkeys,
          OP_INT_BASE + o.n,
          OPS.OP_CHECKMULTISIG,
        ),
      );
    });
    lazy.prop(o, 'm', () => {
      if (!o.output) return;
      decode(o.output);
      return o.m;
    });
    lazy.prop(o, 'n', () => {
      if (!o.pubkeys) return;
      return o.pubkeys.length;
    });
    lazy.prop(o, 'pubkeys', () => {
      if (!a.output) return;
      decode(a.output);
      return o.pubkeys;
    });
    lazy.prop(o, 'signatures', () => {
      if (!a.input) return;
      return bscript.decompile(a.input).slice(1);
    });
    lazy.prop(o, 'input', () => {
      if (!a.signatures) return;
      return bscript.compile([OPS.OP_0].concat(a.signatures));
    });
    lazy.prop(o, 'witness', () => {
      if (!o.input) return;
      return [];
    });
    lazy.prop(o, 'name', () => {
      if (!o.m || !o.n) return;
      return `p2ms(${o.m} of ${o.n})`;
    });
    // extended validation
    if (opts.validate) {
      if (a.output) {
        decode(a.output);
        if (!types_1.typeforce.Number(chunks[0]))
          throw new TypeError('Output is invalid');
        if (!types_1.typeforce.Number(chunks[chunks.length - 2]))
          throw new TypeError('Output is invalid');
        if (chunks[chunks.length - 1] !== OPS.OP_CHECKMULTISIG)
          throw new TypeError('Output is invalid');
        if (o.m <= 0 || o.n > 16 || o.m > o.n || o.n !== chunks.length - 3)
          throw new TypeError('Output is invalid');
        if (!o.pubkeys.every(x => (0, types_1.isPoint)(x)))
          throw new TypeError('Output is invalid');
        if (a.m !== undefined && a.m !== o.m) throw new TypeError('m mismatch');
        if (a.n !== undefined && a.n !== o.n) throw new TypeError('n mismatch');
        if (a.pubkeys && !stacksEqual(a.pubkeys, o.pubkeys))
          throw new TypeError('Pubkeys mismatch');
      }
      if (a.pubkeys) {
        if (a.n !== undefined && a.n !== a.pubkeys.length)
          throw new TypeError('Pubkey count mismatch');
        o.n = a.pubkeys.length;
        if (o.n < o.m) throw new TypeError('Pubkey count cannot be less than m');
      }
      if (a.signatures) {
        if (a.signatures.length < o.m)
          throw new TypeError('Not enough signatures provided');
        if (a.signatures.length > o.m)
          throw new TypeError('Too many signatures provided');
      }
      if (a.input) {
        if (a.input[0] !== OPS.OP_0) throw new TypeError('Input is invalid');
        if (
          o.signatures.length === 0 ||
          !o.signatures.every(isAcceptableSignature)
        )
          throw new TypeError('Input has invalid signature(s)');
        if (a.signatures && !stacksEqual(a.signatures, o.signatures))
          throw new TypeError('Signature mismatch');
        if (a.m !== undefined && a.m !== a.signatures.length)
          throw new TypeError('Signature count mismatch');
      }
    }
    return Object.assign(o, a);
  }
  exports.p2ms = p2ms;
  
  },{"../networks":50,"../script":67,"../types":71,"./lazy":55}],57:[function(require,module,exports){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.p2pk = void 0;
  const networks_1 = require('../networks');
  const bscript = require('../script');
  const types_1 = require('../types');
  const lazy = require('./lazy');
  const OPS = bscript.OPS;
  // input: {signature}
  // output: {pubKey} OP_CHECKSIG
  function p2pk(a, opts) {
    if (!a.input && !a.output && !a.pubkey && !a.input && !a.signature)
      throw new TypeError('Not enough data');
    opts = Object.assign({ validate: true }, opts || {});
    (0, types_1.typeforce)(
      {
        network: types_1.typeforce.maybe(types_1.typeforce.Object),
        output: types_1.typeforce.maybe(types_1.typeforce.Buffer),
        pubkey: types_1.typeforce.maybe(types_1.isPoint),
        signature: types_1.typeforce.maybe(bscript.isCanonicalScriptSignature),
        input: types_1.typeforce.maybe(types_1.typeforce.Buffer),
      },
      a,
    );
    const _chunks = lazy.value(() => {
      return bscript.decompile(a.input);
    });
    const network = a.network || networks_1.bitcoin;
    const o = { name: 'p2pk', network };
    lazy.prop(o, 'output', () => {
      if (!a.pubkey) return;
      return bscript.compile([a.pubkey, OPS.OP_CHECKSIG]);
    });
    lazy.prop(o, 'pubkey', () => {
      if (!a.output) return;
      return a.output.slice(1, -1);
    });
    lazy.prop(o, 'signature', () => {
      if (!a.input) return;
      return _chunks()[0];
    });
    lazy.prop(o, 'input', () => {
      if (!a.signature) return;
      return bscript.compile([a.signature]);
    });
    lazy.prop(o, 'witness', () => {
      if (!o.input) return;
      return [];
    });
    // extended validation
    if (opts.validate) {
      if (a.output) {
        if (a.output[a.output.length - 1] !== OPS.OP_CHECKSIG)
          throw new TypeError('Output is invalid');
        if (!(0, types_1.isPoint)(o.pubkey))
          throw new TypeError('Output pubkey is invalid');
        if (a.pubkey && !a.pubkey.equals(o.pubkey))
          throw new TypeError('Pubkey mismatch');
      }
      if (a.signature) {
        if (a.input && !a.input.equals(o.input))
          throw new TypeError('Signature mismatch');
      }
      if (a.input) {
        if (_chunks().length !== 1) throw new TypeError('Input is invalid');
        if (!bscript.isCanonicalScriptSignature(o.signature))
          throw new TypeError('Input has invalid signature');
      }
    }
    return Object.assign(o, a);
  }
  exports.p2pk = p2pk;
  
  },{"../networks":50,"../script":67,"../types":71,"./lazy":55}],58:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.p2pkh = void 0;
  const bcrypto = require('../crypto');
  const networks_1 = require('../networks');
  const bscript = require('../script');
  const types_1 = require('../types');
  const lazy = require('./lazy');
  const bs58check = require('bs58check');
  const OPS = bscript.OPS;
  // input: {signature} {pubkey}
  // output: OP_DUP OP_HASH160 {hash160(pubkey)} OP_EQUALVERIFY OP_CHECKSIG
  function p2pkh(a, opts) {
    if (!a.address && !a.hash && !a.output && !a.pubkey && !a.input)
      throw new TypeError('Not enough data');
    opts = Object.assign({ validate: true }, opts || {});
    (0, types_1.typeforce)(
      {
        network: types_1.typeforce.maybe(types_1.typeforce.Object),
        address: types_1.typeforce.maybe(types_1.typeforce.String),
        hash: types_1.typeforce.maybe(types_1.typeforce.BufferN(20)),
        output: types_1.typeforce.maybe(types_1.typeforce.BufferN(25)),
        pubkey: types_1.typeforce.maybe(types_1.isPoint),
        signature: types_1.typeforce.maybe(bscript.isCanonicalScriptSignature),
        input: types_1.typeforce.maybe(types_1.typeforce.Buffer),
      },
      a,
    );
    const _address = lazy.value(() => {
      const payload = Buffer.from(bs58check.decode(a.address));
      const version = payload.readUInt8(0);
      const hash = payload.slice(1);
      return { version, hash };
    });
    const _chunks = lazy.value(() => {
      return bscript.decompile(a.input);
    });
    const network = a.network || networks_1.bitcoin;
    const o = { name: 'p2pkh', network };
    lazy.prop(o, 'address', () => {
      if (!o.hash) return;
      const payload = Buffer.allocUnsafe(21);
      payload.writeUInt8(network.pubKeyHash, 0);
      o.hash.copy(payload, 1);
      return bs58check.encode(payload);
    });
    lazy.prop(o, 'hash', () => {
      if (a.output) return a.output.slice(3, 23);
      if (a.address) return _address().hash;
      if (a.pubkey || o.pubkey) return bcrypto.hash160(a.pubkey || o.pubkey);
    });
    lazy.prop(o, 'output', () => {
      if (!o.hash) return;
      return bscript.compile([
        OPS.OP_DUP,
        OPS.OP_HASH160,
        o.hash,
        OPS.OP_EQUALVERIFY,
        OPS.OP_CHECKSIG,
      ]);
    });
    lazy.prop(o, 'pubkey', () => {
      if (!a.input) return;
      return _chunks()[1];
    });
    lazy.prop(o, 'signature', () => {
      if (!a.input) return;
      return _chunks()[0];
    });
    lazy.prop(o, 'input', () => {
      if (!a.pubkey) return;
      if (!a.signature) return;
      return bscript.compile([a.signature, a.pubkey]);
    });
    lazy.prop(o, 'witness', () => {
      if (!o.input) return;
      return [];
    });
    // extended validation
    if (opts.validate) {
      let hash = Buffer.from([]);
      if (a.address) {
        if (_address().version !== network.pubKeyHash)
          throw new TypeError('Invalid version or Network mismatch');
        if (_address().hash.length !== 20) throw new TypeError('Invalid address');
        hash = _address().hash;
      }
      if (a.hash) {
        if (hash.length > 0 && !hash.equals(a.hash))
          throw new TypeError('Hash mismatch');
        else hash = a.hash;
      }
      if (a.output) {
        if (
          a.output.length !== 25 ||
          a.output[0] !== OPS.OP_DUP ||
          a.output[1] !== OPS.OP_HASH160 ||
          a.output[2] !== 0x14 ||
          a.output[23] !== OPS.OP_EQUALVERIFY ||
          a.output[24] !== OPS.OP_CHECKSIG
        )
          throw new TypeError('Output is invalid');
        const hash2 = a.output.slice(3, 23);
        if (hash.length > 0 && !hash.equals(hash2))
          throw new TypeError('Hash mismatch');
        else hash = hash2;
      }
      if (a.pubkey) {
        const pkh = bcrypto.hash160(a.pubkey);
        if (hash.length > 0 && !hash.equals(pkh))
          throw new TypeError('Hash mismatch');
        else hash = pkh;
      }
      if (a.input) {
        const chunks = _chunks();
        if (chunks.length !== 2) throw new TypeError('Input is invalid');
        if (!bscript.isCanonicalScriptSignature(chunks[0]))
          throw new TypeError('Input has invalid signature');
        if (!(0, types_1.isPoint)(chunks[1]))
          throw new TypeError('Input has invalid pubkey');
        if (a.signature && !a.signature.equals(chunks[0]))
          throw new TypeError('Signature mismatch');
        if (a.pubkey && !a.pubkey.equals(chunks[1]))
          throw new TypeError('Pubkey mismatch');
        const pkh = bcrypto.hash160(chunks[1]);
        if (hash.length > 0 && !hash.equals(pkh))
          throw new TypeError('Hash mismatch');
      }
    }
    return Object.assign(o, a);
  }
  exports.p2pkh = p2pkh;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../crypto":46,"../networks":50,"../script":67,"../types":71,"./lazy":55,"bs58check":74,"buffer":75}],59:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.p2sh = void 0;
  const bcrypto = require('../crypto');
  const networks_1 = require('../networks');
  const bscript = require('../script');
  const types_1 = require('../types');
  const lazy = require('./lazy');
  const bs58check = require('bs58check');
  const OPS = bscript.OPS;
  function stacksEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.every((x, i) => {
      return x.equals(b[i]);
    });
  }
  // input: [redeemScriptSig ...] {redeemScript}
  // witness: <?>
  // output: OP_HASH160 {hash160(redeemScript)} OP_EQUAL
  function p2sh(a, opts) {
    if (!a.address && !a.hash && !a.output && !a.redeem && !a.input)
      throw new TypeError('Not enough data');
    opts = Object.assign({ validate: true }, opts || {});
    (0, types_1.typeforce)(
      {
        network: types_1.typeforce.maybe(types_1.typeforce.Object),
        address: types_1.typeforce.maybe(types_1.typeforce.String),
        hash: types_1.typeforce.maybe(types_1.typeforce.BufferN(20)),
        output: types_1.typeforce.maybe(types_1.typeforce.BufferN(23)),
        redeem: types_1.typeforce.maybe({
          network: types_1.typeforce.maybe(types_1.typeforce.Object),
          output: types_1.typeforce.maybe(types_1.typeforce.Buffer),
          input: types_1.typeforce.maybe(types_1.typeforce.Buffer),
          witness: types_1.typeforce.maybe(
            types_1.typeforce.arrayOf(types_1.typeforce.Buffer),
          ),
        }),
        input: types_1.typeforce.maybe(types_1.typeforce.Buffer),
        witness: types_1.typeforce.maybe(
          types_1.typeforce.arrayOf(types_1.typeforce.Buffer),
        ),
      },
      a,
    );
    let network = a.network;
    if (!network) {
      network = (a.redeem && a.redeem.network) || networks_1.bitcoin;
    }
    const o = { network };
    const _address = lazy.value(() => {
      const payload = Buffer.from(bs58check.decode(a.address));
      const version = payload.readUInt8(0);
      const hash = payload.slice(1);
      return { version, hash };
    });
    const _chunks = lazy.value(() => {
      return bscript.decompile(a.input);
    });
    const _redeem = lazy.value(() => {
      const chunks = _chunks();
      const lastChunk = chunks[chunks.length - 1];
      return {
        network,
        output: lastChunk === OPS.OP_FALSE ? Buffer.from([]) : lastChunk,
        input: bscript.compile(chunks.slice(0, -1)),
        witness: a.witness || [],
      };
    });
    // output dependents
    lazy.prop(o, 'address', () => {
      if (!o.hash) return;
      const payload = Buffer.allocUnsafe(21);
      payload.writeUInt8(o.network.scriptHash, 0);
      o.hash.copy(payload, 1);
      return bs58check.encode(payload);
    });
    lazy.prop(o, 'hash', () => {
      // in order of least effort
      if (a.output) return a.output.slice(2, 22);
      if (a.address) return _address().hash;
      if (o.redeem && o.redeem.output) return bcrypto.hash160(o.redeem.output);
    });
    lazy.prop(o, 'output', () => {
      if (!o.hash) return;
      return bscript.compile([OPS.OP_HASH160, o.hash, OPS.OP_EQUAL]);
    });
    // input dependents
    lazy.prop(o, 'redeem', () => {
      if (!a.input) return;
      return _redeem();
    });
    lazy.prop(o, 'input', () => {
      if (!a.redeem || !a.redeem.input || !a.redeem.output) return;
      return bscript.compile(
        [].concat(bscript.decompile(a.redeem.input), a.redeem.output),
      );
    });
    lazy.prop(o, 'witness', () => {
      if (o.redeem && o.redeem.witness) return o.redeem.witness;
      if (o.input) return [];
    });
    lazy.prop(o, 'name', () => {
      const nameParts = ['p2sh'];
      if (o.redeem !== undefined && o.redeem.name !== undefined)
        nameParts.push(o.redeem.name);
      return nameParts.join('-');
    });
    if (opts.validate) {
      let hash = Buffer.from([]);
      if (a.address) {
        if (_address().version !== network.scriptHash)
          throw new TypeError('Invalid version or Network mismatch');
        if (_address().hash.length !== 20) throw new TypeError('Invalid address');
        hash = _address().hash;
      }
      if (a.hash) {
        if (hash.length > 0 && !hash.equals(a.hash))
          throw new TypeError('Hash mismatch');
        else hash = a.hash;
      }
      if (a.output) {
        if (
          a.output.length !== 23 ||
          a.output[0] !== OPS.OP_HASH160 ||
          a.output[1] !== 0x14 ||
          a.output[22] !== OPS.OP_EQUAL
        )
          throw new TypeError('Output is invalid');
        const hash2 = a.output.slice(2, 22);
        if (hash.length > 0 && !hash.equals(hash2))
          throw new TypeError('Hash mismatch');
        else hash = hash2;
      }
      // inlined to prevent 'no-inner-declarations' failing
      const checkRedeem = redeem => {
        // is the redeem output empty/invalid?
        if (redeem.output) {
          const decompile = bscript.decompile(redeem.output);
          if (!decompile || decompile.length < 1)
            throw new TypeError('Redeem.output too short');
          if (redeem.output.byteLength > 520)
            throw new TypeError(
              'Redeem.output unspendable if larger than 520 bytes',
            );
          if (bscript.countNonPushOnlyOPs(decompile) > 201)
            throw new TypeError(
              'Redeem.output unspendable with more than 201 non-push ops',
            );
          // match hash against other sources
          const hash2 = bcrypto.hash160(redeem.output);
          if (hash.length > 0 && !hash.equals(hash2))
            throw new TypeError('Hash mismatch');
          else hash = hash2;
        }
        if (redeem.input) {
          const hasInput = redeem.input.length > 0;
          const hasWitness = redeem.witness && redeem.witness.length > 0;
          if (!hasInput && !hasWitness) throw new TypeError('Empty input');
          if (hasInput && hasWitness)
            throw new TypeError('Input and witness provided');
          if (hasInput) {
            const richunks = bscript.decompile(redeem.input);
            if (!bscript.isPushOnly(richunks))
              throw new TypeError('Non push-only scriptSig');
          }
        }
      };
      if (a.input) {
        const chunks = _chunks();
        if (!chunks || chunks.length < 1) throw new TypeError('Input too short');
        if (!Buffer.isBuffer(_redeem().output))
          throw new TypeError('Input is invalid');
        checkRedeem(_redeem());
      }
      if (a.redeem) {
        if (a.redeem.network && a.redeem.network !== network)
          throw new TypeError('Network mismatch');
        if (a.input) {
          const redeem = _redeem();
          if (a.redeem.output && !a.redeem.output.equals(redeem.output))
            throw new TypeError('Redeem.output mismatch');
          if (a.redeem.input && !a.redeem.input.equals(redeem.input))
            throw new TypeError('Redeem.input mismatch');
        }
        checkRedeem(a.redeem);
      }
      if (a.witness) {
        if (
          a.redeem &&
          a.redeem.witness &&
          !stacksEqual(a.redeem.witness, a.witness)
        )
          throw new TypeError('Witness and redeem.witness mismatch');
      }
    }
    return Object.assign(o, a);
  }
  exports.p2sh = p2sh;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../crypto":46,"../networks":50,"../script":67,"../types":71,"./lazy":55,"bs58check":74,"buffer":75}],60:[function(require,module,exports){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.p2tr = void 0;
  const buffer_1 = require('buffer');
  const networks_1 = require('../networks');
  const bscript = require('../script');
  const types_1 = require('../types');
  const ecc_lib_1 = require('../ecc_lib');
  const bip341_1 = require('./bip341');
  const lazy = require('./lazy');
  const bech32_1 = require('bech32');
  const OPS = bscript.OPS;
  const TAPROOT_WITNESS_VERSION = 0x01;
  const ANNEX_PREFIX = 0x50;
  function p2tr(a, opts) {
    if (
      !a.address &&
      !a.output &&
      !a.pubkey &&
      !a.internalPubkey &&
      !(a.witness && a.witness.length > 1)
    )
      throw new TypeError('Not enough data');
    opts = Object.assign({ validate: true }, opts || {});
    (0, types_1.typeforce)(
      {
        address: types_1.typeforce.maybe(types_1.typeforce.String),
        input: types_1.typeforce.maybe(types_1.typeforce.BufferN(0)),
        network: types_1.typeforce.maybe(types_1.typeforce.Object),
        output: types_1.typeforce.maybe(types_1.typeforce.BufferN(34)),
        internalPubkey: types_1.typeforce.maybe(types_1.typeforce.BufferN(32)),
        hash: types_1.typeforce.maybe(types_1.typeforce.BufferN(32)),
        pubkey: types_1.typeforce.maybe(types_1.typeforce.BufferN(32)),
        signature: types_1.typeforce.maybe(
          types_1.typeforce.anyOf(
            types_1.typeforce.BufferN(64),
            types_1.typeforce.BufferN(65),
          ),
        ),
        witness: types_1.typeforce.maybe(
          types_1.typeforce.arrayOf(types_1.typeforce.Buffer),
        ),
        scriptTree: types_1.typeforce.maybe(types_1.isTaptree),
        redeem: types_1.typeforce.maybe({
          output: types_1.typeforce.maybe(types_1.typeforce.Buffer),
          redeemVersion: types_1.typeforce.maybe(types_1.typeforce.Number),
          witness: types_1.typeforce.maybe(
            types_1.typeforce.arrayOf(types_1.typeforce.Buffer),
          ),
        }),
        redeemVersion: types_1.typeforce.maybe(types_1.typeforce.Number),
      },
      a,
    );
    const _address = lazy.value(() => {
      const result = bech32_1.bech32m.decode(a.address);
      const version = result.words.shift();
      const data = bech32_1.bech32m.fromWords(result.words);
      return {
        version,
        prefix: result.prefix,
        data: buffer_1.Buffer.from(data),
      };
    });
    // remove annex if present, ignored by taproot
    const _witness = lazy.value(() => {
      if (!a.witness || !a.witness.length) return;
      if (
        a.witness.length >= 2 &&
        a.witness[a.witness.length - 1][0] === ANNEX_PREFIX
      ) {
        return a.witness.slice(0, -1);
      }
      return a.witness.slice();
    });
    const _hashTree = lazy.value(() => {
      if (a.scriptTree) return (0, bip341_1.toHashTree)(a.scriptTree);
      if (a.hash) return { hash: a.hash };
      return;
    });
    const network = a.network || networks_1.bitcoin;
    const o = { name: 'p2tr', network };
    lazy.prop(o, 'address', () => {
      if (!o.pubkey) return;
      const words = bech32_1.bech32m.toWords(o.pubkey);
      words.unshift(TAPROOT_WITNESS_VERSION);
      return bech32_1.bech32m.encode(network.bech32, words);
    });
    lazy.prop(o, 'hash', () => {
      const hashTree = _hashTree();
      if (hashTree) return hashTree.hash;
      const w = _witness();
      if (w && w.length > 1) {
        const controlBlock = w[w.length - 1];
        const leafVersion = controlBlock[0] & types_1.TAPLEAF_VERSION_MASK;
        const script = w[w.length - 2];
        const leafHash = (0, bip341_1.tapleafHash)({
          output: script,
          version: leafVersion,
        });
        return (0, bip341_1.rootHashFromPath)(controlBlock, leafHash);
      }
      return null;
    });
    lazy.prop(o, 'output', () => {
      if (!o.pubkey) return;
      return bscript.compile([OPS.OP_1, o.pubkey]);
    });
    lazy.prop(o, 'redeemVersion', () => {
      if (a.redeemVersion) return a.redeemVersion;
      if (
        a.redeem &&
        a.redeem.redeemVersion !== undefined &&
        a.redeem.redeemVersion !== null
      ) {
        return a.redeem.redeemVersion;
      }
      return bip341_1.LEAF_VERSION_TAPSCRIPT;
    });
    lazy.prop(o, 'redeem', () => {
      const witness = _witness(); // witness without annex
      if (!witness || witness.length < 2) return;
      return {
        output: witness[witness.length - 2],
        witness: witness.slice(0, -2),
        redeemVersion:
          witness[witness.length - 1][0] & types_1.TAPLEAF_VERSION_MASK,
      };
    });
    lazy.prop(o, 'pubkey', () => {
      if (a.pubkey) return a.pubkey;
      if (a.output) return a.output.slice(2);
      if (a.address) return _address().data;
      if (o.internalPubkey) {
        const tweakedKey = (0, bip341_1.tweakKey)(o.internalPubkey, o.hash);
        if (tweakedKey) return tweakedKey.x;
      }
    });
    lazy.prop(o, 'internalPubkey', () => {
      if (a.internalPubkey) return a.internalPubkey;
      const witness = _witness();
      if (witness && witness.length > 1)
        return witness[witness.length - 1].slice(1, 33);
    });
    lazy.prop(o, 'signature', () => {
      if (a.signature) return a.signature;
      const witness = _witness(); // witness without annex
      if (!witness || witness.length !== 1) return;
      return witness[0];
    });
    lazy.prop(o, 'witness', () => {
      if (a.witness) return a.witness;
      const hashTree = _hashTree();
      if (hashTree && a.redeem && a.redeem.output && a.internalPubkey) {
        const leafHash = (0, bip341_1.tapleafHash)({
          output: a.redeem.output,
          version: o.redeemVersion,
        });
        const path = (0, bip341_1.findScriptPath)(hashTree, leafHash);
        if (!path) return;
        const outputKey = (0, bip341_1.tweakKey)(a.internalPubkey, hashTree.hash);
        if (!outputKey) return;
        const controlBock = buffer_1.Buffer.concat(
          [
            buffer_1.Buffer.from([o.redeemVersion | outputKey.parity]),
            a.internalPubkey,
          ].concat(path),
        );
        return [a.redeem.output, controlBock];
      }
      if (a.signature) return [a.signature];
    });
    // extended validation
    if (opts.validate) {
      let pubkey = buffer_1.Buffer.from([]);
      if (a.address) {
        if (network && network.bech32 !== _address().prefix)
          throw new TypeError('Invalid prefix or Network mismatch');
        if (_address().version !== TAPROOT_WITNESS_VERSION)
          throw new TypeError('Invalid address version');
        if (_address().data.length !== 32)
          throw new TypeError('Invalid address data');
        pubkey = _address().data;
      }
      if (a.pubkey) {
        if (pubkey.length > 0 && !pubkey.equals(a.pubkey))
          throw new TypeError('Pubkey mismatch');
        else pubkey = a.pubkey;
      }
      if (a.output) {
        if (
          a.output.length !== 34 ||
          a.output[0] !== OPS.OP_1 ||
          a.output[1] !== 0x20
        )
          throw new TypeError('Output is invalid');
        if (pubkey.length > 0 && !pubkey.equals(a.output.slice(2)))
          throw new TypeError('Pubkey mismatch');
        else pubkey = a.output.slice(2);
      }
      if (a.internalPubkey) {
        const tweakedKey = (0, bip341_1.tweakKey)(a.internalPubkey, o.hash);
        if (pubkey.length > 0 && !pubkey.equals(tweakedKey.x))
          throw new TypeError('Pubkey mismatch');
        else pubkey = tweakedKey.x;
      }
      if (pubkey && pubkey.length) {
        if (!(0, ecc_lib_1.getEccLib)().isXOnlyPoint(pubkey))
          throw new TypeError('Invalid pubkey for p2tr');
      }
      const hashTree = _hashTree();
      if (a.hash && hashTree) {
        if (!a.hash.equals(hashTree.hash)) throw new TypeError('Hash mismatch');
      }
      if (a.redeem && a.redeem.output && hashTree) {
        const leafHash = (0, bip341_1.tapleafHash)({
          output: a.redeem.output,
          version: o.redeemVersion,
        });
        if (!(0, bip341_1.findScriptPath)(hashTree, leafHash))
          throw new TypeError('Redeem script not in tree');
      }
      const witness = _witness();
      // compare the provided redeem data with the one computed from witness
      if (a.redeem && o.redeem) {
        if (a.redeem.redeemVersion) {
          if (a.redeem.redeemVersion !== o.redeem.redeemVersion)
            throw new TypeError('Redeem.redeemVersion and witness mismatch');
        }
        if (a.redeem.output) {
          if (bscript.decompile(a.redeem.output).length === 0)
            throw new TypeError('Redeem.output is invalid');
          // output redeem is constructed from the witness
          if (o.redeem.output && !a.redeem.output.equals(o.redeem.output))
            throw new TypeError('Redeem.output and witness mismatch');
        }
        if (a.redeem.witness) {
          if (
            o.redeem.witness &&
            !stacksEqual(a.redeem.witness, o.redeem.witness)
          )
            throw new TypeError('Redeem.witness and witness mismatch');
        }
      }
      if (witness && witness.length) {
        if (witness.length === 1) {
          // key spending
          if (a.signature && !a.signature.equals(witness[0]))
            throw new TypeError('Signature mismatch');
        } else {
          // script path spending
          const controlBlock = witness[witness.length - 1];
          if (controlBlock.length < 33)
            throw new TypeError(
              `The control-block length is too small. Got ${controlBlock.length}, expected min 33.`,
            );
          if ((controlBlock.length - 33) % 32 !== 0)
            throw new TypeError(
              `The control-block length of ${controlBlock.length} is incorrect!`,
            );
          const m = (controlBlock.length - 33) / 32;
          if (m > 128)
            throw new TypeError(
              `The script path is too long. Got ${m}, expected max 128.`,
            );
          const internalPubkey = controlBlock.slice(1, 33);
          if (a.internalPubkey && !a.internalPubkey.equals(internalPubkey))
            throw new TypeError('Internal pubkey mismatch');
          if (!(0, ecc_lib_1.getEccLib)().isXOnlyPoint(internalPubkey))
            throw new TypeError('Invalid internalPubkey for p2tr witness');
          const leafVersion = controlBlock[0] & types_1.TAPLEAF_VERSION_MASK;
          const script = witness[witness.length - 2];
          const leafHash = (0, bip341_1.tapleafHash)({
            output: script,
            version: leafVersion,
          });
          const hash = (0, bip341_1.rootHashFromPath)(controlBlock, leafHash);
          const outputKey = (0, bip341_1.tweakKey)(internalPubkey, hash);
          if (!outputKey)
            // todo: needs test data
            throw new TypeError('Invalid outputKey for p2tr witness');
          if (pubkey.length && !pubkey.equals(outputKey.x))
            throw new TypeError('Pubkey mismatch for p2tr witness');
          if (outputKey.parity !== (controlBlock[0] & 1))
            throw new Error('Incorrect parity');
        }
      }
    }
    return Object.assign(o, a);
  }
  exports.p2tr = p2tr;
  function stacksEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.every((x, i) => {
      return x.equals(b[i]);
    });
  }
  
  },{"../ecc_lib":47,"../networks":50,"../script":67,"../types":71,"./bip341":52,"./lazy":55,"bech32":11,"buffer":75}],61:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.p2wpkh = void 0;
  const bcrypto = require('../crypto');
  const networks_1 = require('../networks');
  const bscript = require('../script');
  const types_1 = require('../types');
  const lazy = require('./lazy');
  const bech32_1 = require('bech32');
  const OPS = bscript.OPS;
  const EMPTY_BUFFER = Buffer.alloc(0);
  // witness: {signature} {pubKey}
  // input: <>
  // output: OP_0 {pubKeyHash}
  function p2wpkh(a, opts) {
    if (!a.address && !a.hash && !a.output && !a.pubkey && !a.witness)
      throw new TypeError('Not enough data');
    opts = Object.assign({ validate: true }, opts || {});
    (0, types_1.typeforce)(
      {
        address: types_1.typeforce.maybe(types_1.typeforce.String),
        hash: types_1.typeforce.maybe(types_1.typeforce.BufferN(20)),
        input: types_1.typeforce.maybe(types_1.typeforce.BufferN(0)),
        network: types_1.typeforce.maybe(types_1.typeforce.Object),
        output: types_1.typeforce.maybe(types_1.typeforce.BufferN(22)),
        pubkey: types_1.typeforce.maybe(types_1.isPoint),
        signature: types_1.typeforce.maybe(bscript.isCanonicalScriptSignature),
        witness: types_1.typeforce.maybe(
          types_1.typeforce.arrayOf(types_1.typeforce.Buffer),
        ),
      },
      a,
    );
    const _address = lazy.value(() => {
      const result = bech32_1.bech32.decode(a.address);
      const version = result.words.shift();
      const data = bech32_1.bech32.fromWords(result.words);
      return {
        version,
        prefix: result.prefix,
        data: Buffer.from(data),
      };
    });
    const network = a.network || networks_1.bitcoin;
    const o = { name: 'p2wpkh', network };
    lazy.prop(o, 'address', () => {
      if (!o.hash) return;
      const words = bech32_1.bech32.toWords(o.hash);
      words.unshift(0x00);
      return bech32_1.bech32.encode(network.bech32, words);
    });
    lazy.prop(o, 'hash', () => {
      if (a.output) return a.output.slice(2, 22);
      if (a.address) return _address().data;
      if (a.pubkey || o.pubkey) return bcrypto.hash160(a.pubkey || o.pubkey);
    });
    lazy.prop(o, 'output', () => {
      if (!o.hash) return;
      return bscript.compile([OPS.OP_0, o.hash]);
    });
    lazy.prop(o, 'pubkey', () => {
      if (a.pubkey) return a.pubkey;
      if (!a.witness) return;
      return a.witness[1];
    });
    lazy.prop(o, 'signature', () => {
      if (!a.witness) return;
      return a.witness[0];
    });
    lazy.prop(o, 'input', () => {
      if (!o.witness) return;
      return EMPTY_BUFFER;
    });
    lazy.prop(o, 'witness', () => {
      if (!a.pubkey) return;
      if (!a.signature) return;
      return [a.signature, a.pubkey];
    });
    // extended validation
    if (opts.validate) {
      let hash = Buffer.from([]);
      if (a.address) {
        if (network && network.bech32 !== _address().prefix)
          throw new TypeError('Invalid prefix or Network mismatch');
        if (_address().version !== 0x00)
          throw new TypeError('Invalid address version');
        if (_address().data.length !== 20)
          throw new TypeError('Invalid address data');
        hash = _address().data;
      }
      if (a.hash) {
        if (hash.length > 0 && !hash.equals(a.hash))
          throw new TypeError('Hash mismatch');
        else hash = a.hash;
      }
      if (a.output) {
        if (
          a.output.length !== 22 ||
          a.output[0] !== OPS.OP_0 ||
          a.output[1] !== 0x14
        )
          throw new TypeError('Output is invalid');
        if (hash.length > 0 && !hash.equals(a.output.slice(2)))
          throw new TypeError('Hash mismatch');
        else hash = a.output.slice(2);
      }
      if (a.pubkey) {
        const pkh = bcrypto.hash160(a.pubkey);
        if (hash.length > 0 && !hash.equals(pkh))
          throw new TypeError('Hash mismatch');
        else hash = pkh;
        if (!(0, types_1.isPoint)(a.pubkey) || a.pubkey.length !== 33)
          throw new TypeError('Invalid pubkey for p2wpkh');
      }
      if (a.witness) {
        if (a.witness.length !== 2) throw new TypeError('Witness is invalid');
        if (!bscript.isCanonicalScriptSignature(a.witness[0]))
          throw new TypeError('Witness has invalid signature');
        if (!(0, types_1.isPoint)(a.witness[1]) || a.witness[1].length !== 33)
          throw new TypeError('Witness has invalid pubkey');
        if (a.signature && !a.signature.equals(a.witness[0]))
          throw new TypeError('Signature mismatch');
        if (a.pubkey && !a.pubkey.equals(a.witness[1]))
          throw new TypeError('Pubkey mismatch');
        const pkh = bcrypto.hash160(a.witness[1]);
        if (hash.length > 0 && !hash.equals(pkh))
          throw new TypeError('Hash mismatch');
      }
    }
    return Object.assign(o, a);
  }
  exports.p2wpkh = p2wpkh;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../crypto":46,"../networks":50,"../script":67,"../types":71,"./lazy":55,"bech32":11,"buffer":75}],62:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.p2wsh = void 0;
  const bcrypto = require('../crypto');
  const networks_1 = require('../networks');
  const bscript = require('../script');
  const types_1 = require('../types');
  const lazy = require('./lazy');
  const bech32_1 = require('bech32');
  const OPS = bscript.OPS;
  const EMPTY_BUFFER = Buffer.alloc(0);
  function stacksEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.every((x, i) => {
      return x.equals(b[i]);
    });
  }
  function chunkHasUncompressedPubkey(chunk) {
    if (
      Buffer.isBuffer(chunk) &&
      chunk.length === 65 &&
      chunk[0] === 0x04 &&
      (0, types_1.isPoint)(chunk)
    ) {
      return true;
    } else {
      return false;
    }
  }
  // input: <>
  // witness: [redeemScriptSig ...] {redeemScript}
  // output: OP_0 {sha256(redeemScript)}
  function p2wsh(a, opts) {
    if (!a.address && !a.hash && !a.output && !a.redeem && !a.witness)
      throw new TypeError('Not enough data');
    opts = Object.assign({ validate: true }, opts || {});
    (0, types_1.typeforce)(
      {
        network: types_1.typeforce.maybe(types_1.typeforce.Object),
        address: types_1.typeforce.maybe(types_1.typeforce.String),
        hash: types_1.typeforce.maybe(types_1.typeforce.BufferN(32)),
        output: types_1.typeforce.maybe(types_1.typeforce.BufferN(34)),
        redeem: types_1.typeforce.maybe({
          input: types_1.typeforce.maybe(types_1.typeforce.Buffer),
          network: types_1.typeforce.maybe(types_1.typeforce.Object),
          output: types_1.typeforce.maybe(types_1.typeforce.Buffer),
          witness: types_1.typeforce.maybe(
            types_1.typeforce.arrayOf(types_1.typeforce.Buffer),
          ),
        }),
        input: types_1.typeforce.maybe(types_1.typeforce.BufferN(0)),
        witness: types_1.typeforce.maybe(
          types_1.typeforce.arrayOf(types_1.typeforce.Buffer),
        ),
      },
      a,
    );
    const _address = lazy.value(() => {
      const result = bech32_1.bech32.decode(a.address);
      const version = result.words.shift();
      const data = bech32_1.bech32.fromWords(result.words);
      return {
        version,
        prefix: result.prefix,
        data: Buffer.from(data),
      };
    });
    const _rchunks = lazy.value(() => {
      return bscript.decompile(a.redeem.input);
    });
    let network = a.network;
    if (!network) {
      network = (a.redeem && a.redeem.network) || networks_1.bitcoin;
    }
    const o = { network };
    lazy.prop(o, 'address', () => {
      if (!o.hash) return;
      const words = bech32_1.bech32.toWords(o.hash);
      words.unshift(0x00);
      return bech32_1.bech32.encode(network.bech32, words);
    });
    lazy.prop(o, 'hash', () => {
      if (a.output) return a.output.slice(2);
      if (a.address) return _address().data;
      if (o.redeem && o.redeem.output) return bcrypto.sha256(o.redeem.output);
    });
    lazy.prop(o, 'output', () => {
      if (!o.hash) return;
      return bscript.compile([OPS.OP_0, o.hash]);
    });
    lazy.prop(o, 'redeem', () => {
      if (!a.witness) return;
      return {
        output: a.witness[a.witness.length - 1],
        input: EMPTY_BUFFER,
        witness: a.witness.slice(0, -1),
      };
    });
    lazy.prop(o, 'input', () => {
      if (!o.witness) return;
      return EMPTY_BUFFER;
    });
    lazy.prop(o, 'witness', () => {
      // transform redeem input to witness stack?
      if (
        a.redeem &&
        a.redeem.input &&
        a.redeem.input.length > 0 &&
        a.redeem.output &&
        a.redeem.output.length > 0
      ) {
        const stack = bscript.toStack(_rchunks());
        // assign, and blank the existing input
        o.redeem = Object.assign({ witness: stack }, a.redeem);
        o.redeem.input = EMPTY_BUFFER;
        return [].concat(stack, a.redeem.output);
      }
      if (!a.redeem) return;
      if (!a.redeem.output) return;
      if (!a.redeem.witness) return;
      return [].concat(a.redeem.witness, a.redeem.output);
    });
    lazy.prop(o, 'name', () => {
      const nameParts = ['p2wsh'];
      if (o.redeem !== undefined && o.redeem.name !== undefined)
        nameParts.push(o.redeem.name);
      return nameParts.join('-');
    });
    // extended validation
    if (opts.validate) {
      let hash = Buffer.from([]);
      if (a.address) {
        if (_address().prefix !== network.bech32)
          throw new TypeError('Invalid prefix or Network mismatch');
        if (_address().version !== 0x00)
          throw new TypeError('Invalid address version');
        if (_address().data.length !== 32)
          throw new TypeError('Invalid address data');
        hash = _address().data;
      }
      if (a.hash) {
        if (hash.length > 0 && !hash.equals(a.hash))
          throw new TypeError('Hash mismatch');
        else hash = a.hash;
      }
      if (a.output) {
        if (
          a.output.length !== 34 ||
          a.output[0] !== OPS.OP_0 ||
          a.output[1] !== 0x20
        )
          throw new TypeError('Output is invalid');
        const hash2 = a.output.slice(2);
        if (hash.length > 0 && !hash.equals(hash2))
          throw new TypeError('Hash mismatch');
        else hash = hash2;
      }
      if (a.redeem) {
        if (a.redeem.network && a.redeem.network !== network)
          throw new TypeError('Network mismatch');
        // is there two redeem sources?
        if (
          a.redeem.input &&
          a.redeem.input.length > 0 &&
          a.redeem.witness &&
          a.redeem.witness.length > 0
        )
          throw new TypeError('Ambiguous witness source');
        // is the redeem output non-empty/valid?
        if (a.redeem.output) {
          const decompile = bscript.decompile(a.redeem.output);
          if (!decompile || decompile.length < 1)
            throw new TypeError('Redeem.output is invalid');
          if (a.redeem.output.byteLength > 3600)
            throw new TypeError(
              'Redeem.output unspendable if larger than 3600 bytes',
            );
          if (bscript.countNonPushOnlyOPs(decompile) > 201)
            throw new TypeError(
              'Redeem.output unspendable with more than 201 non-push ops',
            );
          // match hash against other sources
          const hash2 = bcrypto.sha256(a.redeem.output);
          if (hash.length > 0 && !hash.equals(hash2))
            throw new TypeError('Hash mismatch');
          else hash = hash2;
        }
        if (a.redeem.input && !bscript.isPushOnly(_rchunks()))
          throw new TypeError('Non push-only scriptSig');
        if (
          a.witness &&
          a.redeem.witness &&
          !stacksEqual(a.witness, a.redeem.witness)
        )
          throw new TypeError('Witness and redeem.witness mismatch');
        if (
          (a.redeem.input && _rchunks().some(chunkHasUncompressedPubkey)) ||
          (a.redeem.output &&
            (bscript.decompile(a.redeem.output) || []).some(
              chunkHasUncompressedPubkey,
            ))
        ) {
          throw new TypeError(
            'redeem.input or redeem.output contains uncompressed pubkey',
          );
        }
      }
      if (a.witness && a.witness.length > 0) {
        const wScript = a.witness[a.witness.length - 1];
        if (a.redeem && a.redeem.output && !a.redeem.output.equals(wScript))
          throw new TypeError('Witness and redeem.output mismatch');
        if (
          a.witness.some(chunkHasUncompressedPubkey) ||
          (bscript.decompile(wScript) || []).some(chunkHasUncompressedPubkey)
        )
          throw new TypeError('Witness contains uncompressed pubkey');
      }
    }
    return Object.assign(o, a);
  }
  exports.p2wsh = p2wsh;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../crypto":46,"../networks":50,"../script":67,"../types":71,"./lazy":55,"bech32":11,"buffer":75}],63:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.Psbt = void 0;
  const bip174_1 = require('bip174');
  const varuint = require('bip174/src/lib/converter/varint');
  const utils_1 = require('bip174/src/lib/utils');
  const address_1 = require('./address');
  const bufferutils_1 = require('./bufferutils');
  const networks_1 = require('./networks');
  const payments = require('./payments');
  const bip341_1 = require('./payments/bip341');
  const bscript = require('./script');
  const transaction_1 = require('./transaction');
  const bip371_1 = require('./psbt/bip371');
  const psbtutils_1 = require('./psbt/psbtutils');
  /**
   * These are the default arguments for a Psbt instance.
   */
  const DEFAULT_OPTS = {
    /**
     * A bitcoinjs Network object. This is only used if you pass an `address`
     * parameter to addOutput. Otherwise it is not needed and can be left default.
     */
    network: networks_1.bitcoin,
    /**
     * When extractTransaction is called, the fee rate is checked.
     * THIS IS NOT TO BE RELIED ON.
     * It is only here as a last ditch effort to prevent sending a 500 BTC fee etc.
     */
    maximumFeeRate: 5000, // satoshi per byte
  };
  /**
   * Psbt class can parse and generate a PSBT binary based off of the BIP174.
   * There are 6 roles that this class fulfills. (Explained in BIP174)
   *
   * Creator: This can be done with `new Psbt()`
   * Updater: This can be done with `psbt.addInput(input)`, `psbt.addInputs(inputs)`,
   *   `psbt.addOutput(output)`, `psbt.addOutputs(outputs)` when you are looking to
   *   add new inputs and outputs to the PSBT, and `psbt.updateGlobal(itemObject)`,
   *   `psbt.updateInput(itemObject)`, `psbt.updateOutput(itemObject)`
   *   addInput requires hash: Buffer | string; and index: number; as attributes
   *   and can also include any attributes that are used in updateInput method.
   *   addOutput requires script: Buffer; and value: number; and likewise can include
   *   data for updateOutput.
   *   For a list of what attributes should be what types. Check the bip174 library.
   *   Also, check the integration tests for some examples of usage.
   * Signer: There are a few methods. signAllInputs and signAllInputsAsync, which will search all input
   *   information for your pubkey or pubkeyhash, and only sign inputs where it finds
   *   your info. Or you can explicitly sign a specific input with signInput and
   *   signInputAsync. For the async methods you can create a SignerAsync object
   *   and use something like a hardware wallet to sign with. (You must implement this)
   * Combiner: psbts can be combined easily with `psbt.combine(psbt2, psbt3, psbt4 ...)`
   *   the psbt calling combine will always have precedence when a conflict occurs.
   *   Combine checks if the internal bitcoin transaction is the same, so be sure that
   *   all sequences, version, locktime, etc. are the same before combining.
   * Input Finalizer: This role is fairly important. Not only does it need to construct
   *   the input scriptSigs and witnesses, but it SHOULD verify the signatures etc.
   *   Before running `psbt.finalizeAllInputs()` please run `psbt.validateSignaturesOfAllInputs()`
   *   Running any finalize method will delete any data in the input(s) that are no longer
   *   needed due to the finalized scripts containing the information.
   * Transaction Extractor: This role will perform some checks before returning a
   *   Transaction object. Such as fee rate not being larger than maximumFeeRate etc.
   */
  class Psbt {
    static fromBase64(data, opts = {}) {
      const buffer = Buffer.from(data, 'base64');
      return this.fromBuffer(buffer, opts);
    }
    static fromHex(data, opts = {}) {
      const buffer = Buffer.from(data, 'hex');
      return this.fromBuffer(buffer, opts);
    }
    static fromBuffer(buffer, opts = {}) {
      const psbtBase = bip174_1.Psbt.fromBuffer(buffer, transactionFromBuffer);
      const psbt = new Psbt(opts, psbtBase);
      checkTxForDupeIns(psbt.__CACHE.__TX, psbt.__CACHE);
      return psbt;
    }
    constructor(opts = {}, data = new bip174_1.Psbt(new PsbtTransaction())) {
      this.data = data;
      // set defaults
      this.opts = Object.assign({}, DEFAULT_OPTS, opts);
      this.__CACHE = {
        __NON_WITNESS_UTXO_TX_CACHE: [],
        __NON_WITNESS_UTXO_BUF_CACHE: [],
        __TX_IN_CACHE: {},
        __TX: this.data.globalMap.unsignedTx.tx,
        // Psbt's predecesor (TransactionBuilder - now removed) behavior
        // was to not confirm input values  before signing.
        // Even though we highly encourage people to get
        // the full parent transaction to verify values, the ability to
        // sign non-segwit inputs without the full transaction was often
        // requested. So the only way to activate is to use @ts-ignore.
        // We will disable exporting the Psbt when unsafe sign is active.
        // because it is not BIP174 compliant.
        __UNSAFE_SIGN_NONSEGWIT: false,
      };
      if (this.data.inputs.length === 0) this.setVersion(2);
      // Make data hidden when enumerating
      const dpew = (obj, attr, enumerable, writable) =>
        Object.defineProperty(obj, attr, {
          enumerable,
          writable,
        });
      dpew(this, '__CACHE', false, true);
      dpew(this, 'opts', false, true);
    }
    get inputCount() {
      return this.data.inputs.length;
    }
    get version() {
      return this.__CACHE.__TX.version;
    }
    set version(version) {
      this.setVersion(version);
    }
    get locktime() {
      return this.__CACHE.__TX.locktime;
    }
    set locktime(locktime) {
      this.setLocktime(locktime);
    }
    get txInputs() {
      return this.__CACHE.__TX.ins.map(input => ({
        hash: (0, bufferutils_1.cloneBuffer)(input.hash),
        index: input.index,
        sequence: input.sequence,
      }));
    }
    get txOutputs() {
      return this.__CACHE.__TX.outs.map(output => {
        let address;
        try {
          address = (0, address_1.fromOutputScript)(
            output.script,
            this.opts.network,
          );
        } catch (_) {}
        return {
          script: (0, bufferutils_1.cloneBuffer)(output.script),
          value: output.value,
          address,
        };
      });
    }
    combine(...those) {
      this.data.combine(...those.map(o => o.data));
      return this;
    }
    clone() {
      // TODO: more efficient cloning
      const res = Psbt.fromBuffer(this.data.toBuffer());
      res.opts = JSON.parse(JSON.stringify(this.opts));
      return res;
    }
    setMaximumFeeRate(satoshiPerByte) {
      check32Bit(satoshiPerByte); // 42.9 BTC per byte IS excessive... so throw
      this.opts.maximumFeeRate = satoshiPerByte;
    }
    setVersion(version) {
      check32Bit(version);
      checkInputsForPartialSig(this.data.inputs, 'setVersion');
      const c = this.__CACHE;
      c.__TX.version = version;
      c.__EXTRACTED_TX = undefined;
      return this;
    }
    setLocktime(locktime) {
      check32Bit(locktime);
      checkInputsForPartialSig(this.data.inputs, 'setLocktime');
      const c = this.__CACHE;
      c.__TX.locktime = locktime;
      c.__EXTRACTED_TX = undefined;
      return this;
    }
    setInputSequence(inputIndex, sequence) {
      check32Bit(sequence);
      checkInputsForPartialSig(this.data.inputs, 'setInputSequence');
      const c = this.__CACHE;
      if (c.__TX.ins.length <= inputIndex) {
        throw new Error('Input index too high');
      }
      c.__TX.ins[inputIndex].sequence = sequence;
      c.__EXTRACTED_TX = undefined;
      return this;
    }
    addInputs(inputDatas) {
      inputDatas.forEach(inputData => this.addInput(inputData));
      return this;
    }
    addInput(inputData) {
      if (
        arguments.length > 1 ||
        !inputData ||
        inputData.hash === undefined ||
        inputData.index === undefined
      ) {
        throw new Error(
          `Invalid arguments for Psbt.addInput. ` +
            `Requires single object with at least [hash] and [index]`,
        );
      }
      (0, bip371_1.checkTaprootInputFields)(inputData, inputData, 'addInput');
      checkInputsForPartialSig(this.data.inputs, 'addInput');
      if (inputData.witnessScript) checkInvalidP2WSH(inputData.witnessScript);
      const c = this.__CACHE;
      this.data.addInput(inputData);
      const txIn = c.__TX.ins[c.__TX.ins.length - 1];
      checkTxInputCache(c, txIn);
      const inputIndex = this.data.inputs.length - 1;
      const input = this.data.inputs[inputIndex];
      if (input.nonWitnessUtxo) {
        addNonWitnessTxCache(this.__CACHE, input, inputIndex);
      }
      c.__FEE = undefined;
      c.__FEE_RATE = undefined;
      c.__EXTRACTED_TX = undefined;
      return this;
    }
    addOutputs(outputDatas) {
      outputDatas.forEach(outputData => this.addOutput(outputData));
      return this;
    }
    addOutput(outputData) {
      if (
        arguments.length > 1 ||
        !outputData ||
        outputData.value === undefined ||
        (outputData.address === undefined && outputData.script === undefined)
      ) {
        throw new Error(
          `Invalid arguments for Psbt.addOutput. ` +
            `Requires single object with at least [script or address] and [value]`,
        );
      }
      checkInputsForPartialSig(this.data.inputs, 'addOutput');
      const { address } = outputData;
      if (typeof address === 'string') {
        const { network } = this.opts;
        const script = (0, address_1.toOutputScript)(address, network);
        outputData = Object.assign(outputData, { script });
      }
      (0, bip371_1.checkTaprootOutputFields)(outputData, outputData, 'addOutput');
      const c = this.__CACHE;
      this.data.addOutput(outputData);
      c.__FEE = undefined;
      c.__FEE_RATE = undefined;
      c.__EXTRACTED_TX = undefined;
      return this;
    }
    extractTransaction(disableFeeCheck) {
      if (!this.data.inputs.every(isFinalized)) throw new Error('Not finalized');
      const c = this.__CACHE;
      if (!disableFeeCheck) {
        checkFees(this, c, this.opts);
      }
      if (c.__EXTRACTED_TX) return c.__EXTRACTED_TX;
      const tx = c.__TX.clone();
      inputFinalizeGetAmts(this.data.inputs, tx, c, true);
      return tx;
    }
    getFeeRate() {
      return getTxCacheValue(
        '__FEE_RATE',
        'fee rate',
        this.data.inputs,
        this.__CACHE,
      );
    }
    getFee() {
      return getTxCacheValue('__FEE', 'fee', this.data.inputs, this.__CACHE);
    }
    finalizeAllInputs() {
      (0, utils_1.checkForInput)(this.data.inputs, 0); // making sure we have at least one
      range(this.data.inputs.length).forEach(idx => this.finalizeInput(idx));
      return this;
    }
    finalizeInput(inputIndex, finalScriptsFunc) {
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      if ((0, bip371_1.isTaprootInput)(input))
        return this._finalizeTaprootInput(
          inputIndex,
          input,
          undefined,
          finalScriptsFunc,
        );
      return this._finalizeInput(inputIndex, input, finalScriptsFunc);
    }
    finalizeTaprootInput(
      inputIndex,
      tapLeafHashToFinalize,
      finalScriptsFunc = bip371_1.tapScriptFinalizer,
    ) {
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      if ((0, bip371_1.isTaprootInput)(input))
        return this._finalizeTaprootInput(
          inputIndex,
          input,
          tapLeafHashToFinalize,
          finalScriptsFunc,
        );
      throw new Error(`Cannot finalize input #${inputIndex}. Not Taproot.`);
    }
    _finalizeInput(inputIndex, input, finalScriptsFunc = getFinalScripts) {
      const { script, isP2SH, isP2WSH, isSegwit } = getScriptFromInput(
        inputIndex,
        input,
        this.__CACHE,
      );
      if (!script) throw new Error(`No script found for input #${inputIndex}`);
      checkPartialSigSighashes(input);
      const { finalScriptSig, finalScriptWitness } = finalScriptsFunc(
        inputIndex,
        input,
        script,
        isSegwit,
        isP2SH,
        isP2WSH,
      );
      if (finalScriptSig) this.data.updateInput(inputIndex, { finalScriptSig });
      if (finalScriptWitness)
        this.data.updateInput(inputIndex, { finalScriptWitness });
      if (!finalScriptSig && !finalScriptWitness)
        throw new Error(`Unknown error finalizing input #${inputIndex}`);
      this.data.clearFinalizedInput(inputIndex);
      return this;
    }
    _finalizeTaprootInput(
      inputIndex,
      input,
      tapLeafHashToFinalize,
      finalScriptsFunc = bip371_1.tapScriptFinalizer,
    ) {
      if (!input.witnessUtxo)
        throw new Error(
          `Cannot finalize input #${inputIndex}. Missing withness utxo.`,
        );
      // Check key spend first. Increased privacy and reduced block space.
      if (input.tapKeySig) {
        const payment = payments.p2tr({
          output: input.witnessUtxo.script,
          signature: input.tapKeySig,
        });
        const finalScriptWitness = (0, psbtutils_1.witnessStackToScriptWitness)(
          payment.witness,
        );
        this.data.updateInput(inputIndex, { finalScriptWitness });
      } else {
        const { finalScriptWitness } = finalScriptsFunc(
          inputIndex,
          input,
          tapLeafHashToFinalize,
        );
        this.data.updateInput(inputIndex, { finalScriptWitness });
      }
      this.data.clearFinalizedInput(inputIndex);
      return this;
    }
    getInputType(inputIndex) {
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      const script = getScriptFromUtxo(inputIndex, input, this.__CACHE);
      const result = getMeaningfulScript(
        script,
        inputIndex,
        'input',
        input.redeemScript || redeemFromFinalScriptSig(input.finalScriptSig),
        input.witnessScript ||
          redeemFromFinalWitnessScript(input.finalScriptWitness),
      );
      const type = result.type === 'raw' ? '' : result.type + '-';
      const mainType = classifyScript(result.meaningfulScript);
      return type + mainType;
    }
    inputHasPubkey(inputIndex, pubkey) {
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      return pubkeyInInput(pubkey, input, inputIndex, this.__CACHE);
    }
    inputHasHDKey(inputIndex, root) {
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      const derivationIsMine = bip32DerivationIsMine(root);
      return (
        !!input.bip32Derivation && input.bip32Derivation.some(derivationIsMine)
      );
    }
    outputHasPubkey(outputIndex, pubkey) {
      const output = (0, utils_1.checkForOutput)(this.data.outputs, outputIndex);
      return pubkeyInOutput(pubkey, output, outputIndex, this.__CACHE);
    }
    outputHasHDKey(outputIndex, root) {
      const output = (0, utils_1.checkForOutput)(this.data.outputs, outputIndex);
      const derivationIsMine = bip32DerivationIsMine(root);
      return (
        !!output.bip32Derivation && output.bip32Derivation.some(derivationIsMine)
      );
    }
    validateSignaturesOfAllInputs(validator) {
      (0, utils_1.checkForInput)(this.data.inputs, 0); // making sure we have at least one
      const results = range(this.data.inputs.length).map(idx =>
        this.validateSignaturesOfInput(idx, validator),
      );
      return results.reduce((final, res) => res === true && final, true);
    }
    validateSignaturesOfInput(inputIndex, validator, pubkey) {
      const input = this.data.inputs[inputIndex];
      if ((0, bip371_1.isTaprootInput)(input))
        return this.validateSignaturesOfTaprootInput(
          inputIndex,
          validator,
          pubkey,
        );
      return this._validateSignaturesOfInput(inputIndex, validator, pubkey);
    }
    _validateSignaturesOfInput(inputIndex, validator, pubkey) {
      const input = this.data.inputs[inputIndex];
      const partialSig = (input || {}).partialSig;
      if (!input || !partialSig || partialSig.length < 1)
        throw new Error('No signatures to validate');
      if (typeof validator !== 'function')
        throw new Error('Need validator function to validate signatures');
      const mySigs = pubkey
        ? partialSig.filter(sig => sig.pubkey.equals(pubkey))
        : partialSig;
      if (mySigs.length < 1) throw new Error('No signatures for this pubkey');
      const results = [];
      let hashCache;
      let scriptCache;
      let sighashCache;
      for (const pSig of mySigs) {
        const sig = bscript.signature.decode(pSig.signature);
        const { hash, script } =
          sighashCache !== sig.hashType
            ? getHashForSig(
                inputIndex,
                Object.assign({}, input, { sighashType: sig.hashType }),
                this.__CACHE,
                true,
              )
            : { hash: hashCache, script: scriptCache };
        sighashCache = sig.hashType;
        hashCache = hash;
        scriptCache = script;
        checkScriptForPubkey(pSig.pubkey, script, 'verify');
        results.push(validator(pSig.pubkey, hash, sig.signature));
      }
      return results.every(res => res === true);
    }
    validateSignaturesOfTaprootInput(inputIndex, validator, pubkey) {
      const input = this.data.inputs[inputIndex];
      const tapKeySig = (input || {}).tapKeySig;
      const tapScriptSig = (input || {}).tapScriptSig;
      if (!input && !tapKeySig && !(tapScriptSig && !tapScriptSig.length))
        throw new Error('No signatures to validate');
      if (typeof validator !== 'function')
        throw new Error('Need validator function to validate signatures');
      pubkey = pubkey && (0, bip371_1.toXOnly)(pubkey);
      const allHashses = pubkey
        ? getTaprootHashesForSig(
            inputIndex,
            input,
            this.data.inputs,
            pubkey,
            this.__CACHE,
          )
        : getAllTaprootHashesForSig(
            inputIndex,
            input,
            this.data.inputs,
            this.__CACHE,
          );
      if (!allHashses.length) throw new Error('No signatures for this pubkey');
      const tapKeyHash = allHashses.find(h => !h.leafHash);
      let validationResultCount = 0;
      if (tapKeySig && tapKeyHash) {
        const isValidTapkeySig = validator(
          tapKeyHash.pubkey,
          tapKeyHash.hash,
          trimTaprootSig(tapKeySig),
        );
        if (!isValidTapkeySig) return false;
        validationResultCount++;
      }
      if (tapScriptSig) {
        for (const tapSig of tapScriptSig) {
          const tapSigHash = allHashses.find(h => tapSig.pubkey.equals(h.pubkey));
          if (tapSigHash) {
            const isValidTapScriptSig = validator(
              tapSig.pubkey,
              tapSigHash.hash,
              trimTaprootSig(tapSig.signature),
            );
            if (!isValidTapScriptSig) return false;
            validationResultCount++;
          }
        }
      }
      return validationResultCount > 0;
    }
    signAllInputsHD(
      hdKeyPair,
      sighashTypes = [transaction_1.Transaction.SIGHASH_ALL],
    ) {
      if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) {
        throw new Error('Need HDSigner to sign input');
      }
      const results = [];
      for (const i of range(this.data.inputs.length)) {
        try {
          this.signInputHD(i, hdKeyPair, sighashTypes);
          results.push(true);
        } catch (err) {
          results.push(false);
        }
      }
      if (results.every(v => v === false)) {
        throw new Error('No inputs were signed');
      }
      return this;
    }
    signAllInputsHDAsync(
      hdKeyPair,
      sighashTypes = [transaction_1.Transaction.SIGHASH_ALL],
    ) {
      return new Promise((resolve, reject) => {
        if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) {
          return reject(new Error('Need HDSigner to sign input'));
        }
        const results = [];
        const promises = [];
        for (const i of range(this.data.inputs.length)) {
          promises.push(
            this.signInputHDAsync(i, hdKeyPair, sighashTypes).then(
              () => {
                results.push(true);
              },
              () => {
                results.push(false);
              },
            ),
          );
        }
        return Promise.all(promises).then(() => {
          if (results.every(v => v === false)) {
            return reject(new Error('No inputs were signed'));
          }
          resolve();
        });
      });
    }
    signInputHD(
      inputIndex,
      hdKeyPair,
      sighashTypes = [transaction_1.Transaction.SIGHASH_ALL],
    ) {
      if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) {
        throw new Error('Need HDSigner to sign input');
      }
      const signers = getSignersFromHD(inputIndex, this.data.inputs, hdKeyPair);
      signers.forEach(signer => this.signInput(inputIndex, signer, sighashTypes));
      return this;
    }
    signInputHDAsync(
      inputIndex,
      hdKeyPair,
      sighashTypes = [transaction_1.Transaction.SIGHASH_ALL],
    ) {
      return new Promise((resolve, reject) => {
        if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) {
          return reject(new Error('Need HDSigner to sign input'));
        }
        const signers = getSignersFromHD(inputIndex, this.data.inputs, hdKeyPair);
        const promises = signers.map(signer =>
          this.signInputAsync(inputIndex, signer, sighashTypes),
        );
        return Promise.all(promises)
          .then(() => {
            resolve();
          })
          .catch(reject);
      });
    }
    signAllInputs(keyPair, sighashTypes) {
      if (!keyPair || !keyPair.publicKey)
        throw new Error('Need Signer to sign input');
      // TODO: Add a pubkey/pubkeyhash cache to each input
      // as input information is added, then eventually
      // optimize this method.
      const results = [];
      for (const i of range(this.data.inputs.length)) {
        try {
          this.signInput(i, keyPair, sighashTypes);
          results.push(true);
        } catch (err) {
          results.push(false);
        }
      }
      if (results.every(v => v === false)) {
        throw new Error('No inputs were signed');
      }
      return this;
    }
    signAllInputsAsync(keyPair, sighashTypes) {
      return new Promise((resolve, reject) => {
        if (!keyPair || !keyPair.publicKey)
          return reject(new Error('Need Signer to sign input'));
        // TODO: Add a pubkey/pubkeyhash cache to each input
        // as input information is added, then eventually
        // optimize this method.
        const results = [];
        const promises = [];
        for (const [i] of this.data.inputs.entries()) {
          promises.push(
            this.signInputAsync(i, keyPair, sighashTypes).then(
              () => {
                results.push(true);
              },
              () => {
                results.push(false);
              },
            ),
          );
        }
        return Promise.all(promises).then(() => {
          if (results.every(v => v === false)) {
            return reject(new Error('No inputs were signed'));
          }
          resolve();
        });
      });
    }
    signInput(inputIndex, keyPair, sighashTypes) {
      if (!keyPair || !keyPair.publicKey)
        throw new Error('Need Signer to sign input');
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      if ((0, bip371_1.isTaprootInput)(input)) {
        return this._signTaprootInput(
          inputIndex,
          input,
          keyPair,
          undefined,
          sighashTypes,
        );
      }
      return this._signInput(inputIndex, keyPair, sighashTypes);
    }
    signTaprootInput(inputIndex, keyPair, tapLeafHashToSign, sighashTypes) {
      if (!keyPair || !keyPair.publicKey)
        throw new Error('Need Signer to sign input');
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      if ((0, bip371_1.isTaprootInput)(input))
        return this._signTaprootInput(
          inputIndex,
          input,
          keyPair,
          tapLeafHashToSign,
          sighashTypes,
        );
      throw new Error(`Input #${inputIndex} is not of type Taproot.`);
    }
    _signInput(
      inputIndex,
      keyPair,
      sighashTypes = [transaction_1.Transaction.SIGHASH_ALL],
    ) {
      const { hash, sighashType } = getHashAndSighashType(
        this.data.inputs,
        inputIndex,
        keyPair.publicKey,
        this.__CACHE,
        sighashTypes,
      );
      const partialSig = [
        {
          pubkey: keyPair.publicKey,
          signature: bscript.signature.encode(keyPair.sign(hash), sighashType),
        },
      ];
      this.data.updateInput(inputIndex, { partialSig });
      return this;
    }
    _signTaprootInput(
      inputIndex,
      input,
      keyPair,
      tapLeafHashToSign,
      allowedSighashTypes = [transaction_1.Transaction.SIGHASH_DEFAULT],
    ) {
      const hashesForSig = this.checkTaprootHashesForSig(
        inputIndex,
        input,
        keyPair,
        tapLeafHashToSign,
        allowedSighashTypes,
      );
      const tapKeySig = hashesForSig
        .filter(h => !h.leafHash)
        .map(h =>
          (0, bip371_1.serializeTaprootSignature)(
            keyPair.signSchnorr(h.hash),
            input.sighashType,
          ),
        )[0];
      const tapScriptSig = hashesForSig
        .filter(h => !!h.leafHash)
        .map(h => ({
          pubkey: (0, bip371_1.toXOnly)(keyPair.publicKey),
          signature: (0, bip371_1.serializeTaprootSignature)(
            keyPair.signSchnorr(h.hash),
            input.sighashType,
          ),
          leafHash: h.leafHash,
        }));
      if (tapKeySig) {
        this.data.updateInput(inputIndex, { tapKeySig });
      }
      if (tapScriptSig.length) {
        this.data.updateInput(inputIndex, { tapScriptSig });
      }
      return this;
    }
    signInputAsync(inputIndex, keyPair, sighashTypes) {
      return Promise.resolve().then(() => {
        if (!keyPair || !keyPair.publicKey)
          throw new Error('Need Signer to sign input');
        const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
        if ((0, bip371_1.isTaprootInput)(input))
          return this._signTaprootInputAsync(
            inputIndex,
            input,
            keyPair,
            undefined,
            sighashTypes,
          );
        return this._signInputAsync(inputIndex, keyPair, sighashTypes);
      });
    }
    signTaprootInputAsync(inputIndex, keyPair, tapLeafHash, sighashTypes) {
      return Promise.resolve().then(() => {
        if (!keyPair || !keyPair.publicKey)
          throw new Error('Need Signer to sign input');
        const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
        if ((0, bip371_1.isTaprootInput)(input))
          return this._signTaprootInputAsync(
            inputIndex,
            input,
            keyPair,
            tapLeafHash,
            sighashTypes,
          );
        throw new Error(`Input #${inputIndex} is not of type Taproot.`);
      });
    }
    _signInputAsync(
      inputIndex,
      keyPair,
      sighashTypes = [transaction_1.Transaction.SIGHASH_ALL],
    ) {
      const { hash, sighashType } = getHashAndSighashType(
        this.data.inputs,
        inputIndex,
        keyPair.publicKey,
        this.__CACHE,
        sighashTypes,
      );
      return Promise.resolve(keyPair.sign(hash)).then(signature => {
        const partialSig = [
          {
            pubkey: keyPair.publicKey,
            signature: bscript.signature.encode(signature, sighashType),
          },
        ];
        this.data.updateInput(inputIndex, { partialSig });
      });
    }
    async _signTaprootInputAsync(
      inputIndex,
      input,
      keyPair,
      tapLeafHash,
      sighashTypes = [transaction_1.Transaction.SIGHASH_DEFAULT],
    ) {
      const hashesForSig = this.checkTaprootHashesForSig(
        inputIndex,
        input,
        keyPair,
        tapLeafHash,
        sighashTypes,
      );
      const signaturePromises = [];
      const tapKeyHash = hashesForSig.filter(h => !h.leafHash)[0];
      if (tapKeyHash) {
        const tapKeySigPromise = Promise.resolve(
          keyPair.signSchnorr(tapKeyHash.hash),
        ).then(sig => {
          return {
            tapKeySig: (0, bip371_1.serializeTaprootSignature)(
              sig,
              input.sighashType,
            ),
          };
        });
        signaturePromises.push(tapKeySigPromise);
      }
      const tapScriptHashes = hashesForSig.filter(h => !!h.leafHash);
      if (tapScriptHashes.length) {
        const tapScriptSigPromises = tapScriptHashes.map(tsh => {
          return Promise.resolve(keyPair.signSchnorr(tsh.hash)).then(
            signature => {
              const tapScriptSig = [
                {
                  pubkey: (0, bip371_1.toXOnly)(keyPair.publicKey),
                  signature: (0, bip371_1.serializeTaprootSignature)(
                    signature,
                    input.sighashType,
                  ),
                  leafHash: tsh.leafHash,
                },
              ];
              return { tapScriptSig };
            },
          );
        });
        signaturePromises.push(...tapScriptSigPromises);
      }
      return Promise.all(signaturePromises).then(results => {
        results.forEach(v => this.data.updateInput(inputIndex, v));
      });
    }
    checkTaprootHashesForSig(
      inputIndex,
      input,
      keyPair,
      tapLeafHashToSign,
      allowedSighashTypes,
    ) {
      if (typeof keyPair.signSchnorr !== 'function')
        throw new Error(
          `Need Schnorr Signer to sign taproot input #${inputIndex}.`,
        );
      const hashesForSig = getTaprootHashesForSig(
        inputIndex,
        input,
        this.data.inputs,
        keyPair.publicKey,
        this.__CACHE,
        tapLeafHashToSign,
        allowedSighashTypes,
      );
      if (!hashesForSig || !hashesForSig.length)
        throw new Error(
          `Can not sign for input #${inputIndex} with the key ${keyPair.publicKey.toString(
            'hex',
          )}`,
        );
      return hashesForSig;
    }
    toBuffer() {
      checkCache(this.__CACHE);
      return this.data.toBuffer();
    }
    toHex() {
      checkCache(this.__CACHE);
      return this.data.toHex();
    }
    toBase64() {
      checkCache(this.__CACHE);
      return this.data.toBase64();
    }
    updateGlobal(updateData) {
      this.data.updateGlobal(updateData);
      return this;
    }
    updateInput(inputIndex, updateData) {
      if (updateData.witnessScript) checkInvalidP2WSH(updateData.witnessScript);
      (0, bip371_1.checkTaprootInputFields)(
        this.data.inputs[inputIndex],
        updateData,
        'updateInput',
      );
      this.data.updateInput(inputIndex, updateData);
      if (updateData.nonWitnessUtxo) {
        addNonWitnessTxCache(
          this.__CACHE,
          this.data.inputs[inputIndex],
          inputIndex,
        );
      }
      return this;
    }
    updateOutput(outputIndex, updateData) {
      const outputData = this.data.outputs[outputIndex];
      (0, bip371_1.checkTaprootOutputFields)(
        outputData,
        updateData,
        'updateOutput',
      );
      this.data.updateOutput(outputIndex, updateData);
      return this;
    }
    addUnknownKeyValToGlobal(keyVal) {
      this.data.addUnknownKeyValToGlobal(keyVal);
      return this;
    }
    addUnknownKeyValToInput(inputIndex, keyVal) {
      this.data.addUnknownKeyValToInput(inputIndex, keyVal);
      return this;
    }
    addUnknownKeyValToOutput(outputIndex, keyVal) {
      this.data.addUnknownKeyValToOutput(outputIndex, keyVal);
      return this;
    }
    clearFinalizedInput(inputIndex) {
      this.data.clearFinalizedInput(inputIndex);
      return this;
    }
  }
  exports.Psbt = Psbt;
  /**
   * This function is needed to pass to the bip174 base class's fromBuffer.
   * It takes the "transaction buffer" portion of the psbt buffer and returns a
   * Transaction (From the bip174 library) interface.
   */
  const transactionFromBuffer = buffer => new PsbtTransaction(buffer);
  /**
   * This class implements the Transaction interface from bip174 library.
   * It contains a bitcoinjs-lib Transaction object.
   */
  class PsbtTransaction {
    constructor(buffer = Buffer.from([2, 0, 0, 0, 0, 0, 0, 0, 0, 0])) {
      this.tx = transaction_1.Transaction.fromBuffer(buffer);
      checkTxEmpty(this.tx);
      Object.defineProperty(this, 'tx', {
        enumerable: false,
        writable: true,
      });
    }
    getInputOutputCounts() {
      return {
        inputCount: this.tx.ins.length,
        outputCount: this.tx.outs.length,
      };
    }
    addInput(input) {
      if (
        input.hash === undefined ||
        input.index === undefined ||
        (!Buffer.isBuffer(input.hash) && typeof input.hash !== 'string') ||
        typeof input.index !== 'number'
      ) {
        throw new Error('Error adding input.');
      }
      const hash =
        typeof input.hash === 'string'
          ? (0, bufferutils_1.reverseBuffer)(Buffer.from(input.hash, 'hex'))
          : input.hash;
      this.tx.addInput(hash, input.index, input.sequence);
    }
    addOutput(output) {
      if (
        output.script === undefined ||
        output.value === undefined ||
        !Buffer.isBuffer(output.script) ||
        typeof output.value !== 'number'
      ) {
        throw new Error('Error adding output.');
      }
      this.tx.addOutput(output.script, output.value);
    }
    toBuffer() {
      return this.tx.toBuffer();
    }
  }
  function canFinalize(input, script, scriptType) {
    switch (scriptType) {
      case 'pubkey':
      case 'pubkeyhash':
      case 'witnesspubkeyhash':
        return hasSigs(1, input.partialSig);
      case 'multisig':
        const p2ms = payments.p2ms({ output: script });
        return hasSigs(p2ms.m, input.partialSig, p2ms.pubkeys);
      default:
        return false;
    }
  }
  function checkCache(cache) {
    if (cache.__UNSAFE_SIGN_NONSEGWIT !== false) {
      throw new Error('Not BIP174 compliant, can not export');
    }
  }
  function hasSigs(neededSigs, partialSig, pubkeys) {
    if (!partialSig) return false;
    let sigs;
    if (pubkeys) {
      sigs = pubkeys
        .map(pkey => {
          const pubkey = compressPubkey(pkey);
          return partialSig.find(pSig => pSig.pubkey.equals(pubkey));
        })
        .filter(v => !!v);
    } else {
      sigs = partialSig;
    }
    if (sigs.length > neededSigs) throw new Error('Too many signatures');
    return sigs.length === neededSigs;
  }
  function isFinalized(input) {
    return !!input.finalScriptSig || !!input.finalScriptWitness;
  }
  function bip32DerivationIsMine(root) {
    return d => {
      if (!d.masterFingerprint.equals(root.fingerprint)) return false;
      if (!root.derivePath(d.path).publicKey.equals(d.pubkey)) return false;
      return true;
    };
  }
  function check32Bit(num) {
    if (
      typeof num !== 'number' ||
      num !== Math.floor(num) ||
      num > 0xffffffff ||
      num < 0
    ) {
      throw new Error('Invalid 32 bit integer');
    }
  }
  function checkFees(psbt, cache, opts) {
    const feeRate = cache.__FEE_RATE || psbt.getFeeRate();
    const vsize = cache.__EXTRACTED_TX.virtualSize();
    const satoshis = feeRate * vsize;
    if (feeRate >= opts.maximumFeeRate) {
      throw new Error(
        `Warning: You are paying around ${(satoshis / 1e8).toFixed(8)} in ` +
          `fees, which is ${feeRate} satoshi per byte for a transaction ` +
          `with a VSize of ${vsize} bytes (segwit counted as 0.25 byte per ` +
          `byte). Use setMaximumFeeRate method to raise your threshold, or ` +
          `pass true to the first arg of extractTransaction.`,
      );
    }
  }
  function checkInputsForPartialSig(inputs, action) {
    inputs.forEach(input => {
      const throws = (0, bip371_1.isTaprootInput)(input)
        ? (0, bip371_1.checkTaprootInputForSigs)(input, action)
        : (0, psbtutils_1.checkInputForSig)(input, action);
      if (throws)
        throw new Error('Can not modify transaction, signatures exist.');
    });
  }
  function checkPartialSigSighashes(input) {
    if (!input.sighashType || !input.partialSig) return;
    const { partialSig, sighashType } = input;
    partialSig.forEach(pSig => {
      const { hashType } = bscript.signature.decode(pSig.signature);
      if (sighashType !== hashType) {
        throw new Error('Signature sighash does not match input sighash type');
      }
    });
  }
  function checkScriptForPubkey(pubkey, script, action) {
    if (!(0, psbtutils_1.pubkeyInScript)(pubkey, script)) {
      throw new Error(
        `Can not ${action} for this input with the key ${pubkey.toString('hex')}`,
      );
    }
  }
  function checkTxEmpty(tx) {
    const isEmpty = tx.ins.every(
      input =>
        input.script &&
        input.script.length === 0 &&
        input.witness &&
        input.witness.length === 0,
    );
    if (!isEmpty) {
      throw new Error('Format Error: Transaction ScriptSigs are not empty');
    }
  }
  function checkTxForDupeIns(tx, cache) {
    tx.ins.forEach(input => {
      checkTxInputCache(cache, input);
    });
  }
  function checkTxInputCache(cache, input) {
    const key =
      (0, bufferutils_1.reverseBuffer)(Buffer.from(input.hash)).toString('hex') +
      ':' +
      input.index;
    if (cache.__TX_IN_CACHE[key]) throw new Error('Duplicate input detected.');
    cache.__TX_IN_CACHE[key] = 1;
  }
  function scriptCheckerFactory(payment, paymentScriptName) {
    return (inputIndex, scriptPubKey, redeemScript, ioType) => {
      const redeemScriptOutput = payment({
        redeem: { output: redeemScript },
      }).output;
      if (!scriptPubKey.equals(redeemScriptOutput)) {
        throw new Error(
          `${paymentScriptName} for ${ioType} #${inputIndex} doesn't match the scriptPubKey in the prevout`,
        );
      }
    };
  }
  const checkRedeemScript = scriptCheckerFactory(payments.p2sh, 'Redeem script');
  const checkWitnessScript = scriptCheckerFactory(
    payments.p2wsh,
    'Witness script',
  );
  function getTxCacheValue(key, name, inputs, c) {
    if (!inputs.every(isFinalized))
      throw new Error(`PSBT must be finalized to calculate ${name}`);
    if (key === '__FEE_RATE' && c.__FEE_RATE) return c.__FEE_RATE;
    if (key === '__FEE' && c.__FEE) return c.__FEE;
    let tx;
    let mustFinalize = true;
    if (c.__EXTRACTED_TX) {
      tx = c.__EXTRACTED_TX;
      mustFinalize = false;
    } else {
      tx = c.__TX.clone();
    }
    inputFinalizeGetAmts(inputs, tx, c, mustFinalize);
    if (key === '__FEE_RATE') return c.__FEE_RATE;
    else if (key === '__FEE') return c.__FEE;
  }
  function getFinalScripts(inputIndex, input, script, isSegwit, isP2SH, isP2WSH) {
    const scriptType = classifyScript(script);
    if (!canFinalize(input, script, scriptType))
      throw new Error(`Can not finalize input #${inputIndex}`);
    return prepareFinalScripts(
      script,
      scriptType,
      input.partialSig,
      isSegwit,
      isP2SH,
      isP2WSH,
    );
  }
  function prepareFinalScripts(
    script,
    scriptType,
    partialSig,
    isSegwit,
    isP2SH,
    isP2WSH,
  ) {
    let finalScriptSig;
    let finalScriptWitness;
    // Wow, the payments API is very handy
    const payment = getPayment(script, scriptType, partialSig);
    const p2wsh = !isP2WSH ? null : payments.p2wsh({ redeem: payment });
    const p2sh = !isP2SH ? null : payments.p2sh({ redeem: p2wsh || payment });
    if (isSegwit) {
      if (p2wsh) {
        finalScriptWitness = (0, psbtutils_1.witnessStackToScriptWitness)(
          p2wsh.witness,
        );
      } else {
        finalScriptWitness = (0, psbtutils_1.witnessStackToScriptWitness)(
          payment.witness,
        );
      }
      if (p2sh) {
        finalScriptSig = p2sh.input;
      }
    } else {
      if (p2sh) {
        finalScriptSig = p2sh.input;
      } else {
        finalScriptSig = payment.input;
      }
    }
    return {
      finalScriptSig,
      finalScriptWitness,
    };
  }
  function getHashAndSighashType(
    inputs,
    inputIndex,
    pubkey,
    cache,
    sighashTypes,
  ) {
    const input = (0, utils_1.checkForInput)(inputs, inputIndex);
    const { hash, sighashType, script } = getHashForSig(
      inputIndex,
      input,
      cache,
      false,
      sighashTypes,
    );
    checkScriptForPubkey(pubkey, script, 'sign');
    return {
      hash,
      sighashType,
    };
  }
  function getHashForSig(inputIndex, input, cache, forValidate, sighashTypes) {
    const unsignedTx = cache.__TX;
    const sighashType =
      input.sighashType || transaction_1.Transaction.SIGHASH_ALL;
    checkSighashTypeAllowed(sighashType, sighashTypes);
    let hash;
    let prevout;
    if (input.nonWitnessUtxo) {
      const nonWitnessUtxoTx = nonWitnessUtxoTxFromCache(
        cache,
        input,
        inputIndex,
      );
      const prevoutHash = unsignedTx.ins[inputIndex].hash;
      const utxoHash = nonWitnessUtxoTx.getHash();
      // If a non-witness UTXO is provided, its hash must match the hash specified in the prevout
      if (!prevoutHash.equals(utxoHash)) {
        throw new Error(
          `Non-witness UTXO hash for input #${inputIndex} doesn't match the hash specified in the prevout`,
        );
      }
      const prevoutIndex = unsignedTx.ins[inputIndex].index;
      prevout = nonWitnessUtxoTx.outs[prevoutIndex];
    } else if (input.witnessUtxo) {
      prevout = input.witnessUtxo;
    } else {
      throw new Error('Need a Utxo input item for signing');
    }
    const { meaningfulScript, type } = getMeaningfulScript(
      prevout.script,
      inputIndex,
      'input',
      input.redeemScript,
      input.witnessScript,
    );
    if (['p2sh-p2wsh', 'p2wsh'].indexOf(type) >= 0) {
      hash = unsignedTx.hashForWitnessV0(
        inputIndex,
        meaningfulScript,
        prevout.value,
        sighashType,
      );
    } else if ((0, psbtutils_1.isP2WPKH)(meaningfulScript)) {
      // P2WPKH uses the P2PKH template for prevoutScript when signing
      const signingScript = payments.p2pkh({
        hash: meaningfulScript.slice(2),
      }).output;
      hash = unsignedTx.hashForWitnessV0(
        inputIndex,
        signingScript,
        prevout.value,
        sighashType,
      );
    } else {
      // non-segwit
      if (
        input.nonWitnessUtxo === undefined &&
        cache.__UNSAFE_SIGN_NONSEGWIT === false
      )
        throw new Error(
          `Input #${inputIndex} has witnessUtxo but non-segwit script: ` +
            `${meaningfulScript.toString('hex')}`,
        );
      if (!forValidate && cache.__UNSAFE_SIGN_NONSEGWIT !== false)
        console.warn(
          'Warning: Signing non-segwit inputs without the full parent transaction ' +
            'means there is a chance that a miner could feed you incorrect information ' +
            "to trick you into paying large fees. This behavior is the same as Psbt's predecesor " +
            '(TransactionBuilder - now removed) when signing non-segwit scripts. You are not ' +
            'able to export this Psbt with toBuffer|toBase64|toHex since it is not ' +
            'BIP174 compliant.\n*********************\nPROCEED WITH CAUTION!\n' +
            '*********************',
        );
      hash = unsignedTx.hashForSignature(
        inputIndex,
        meaningfulScript,
        sighashType,
      );
    }
    return {
      script: meaningfulScript,
      sighashType,
      hash,
    };
  }
  function getAllTaprootHashesForSig(inputIndex, input, inputs, cache) {
    const allPublicKeys = [];
    if (input.tapInternalKey) {
      const key = getPrevoutTaprootKey(inputIndex, input, cache);
      if (key) {
        allPublicKeys.push(key);
      }
    }
    if (input.tapScriptSig) {
      const tapScriptPubkeys = input.tapScriptSig.map(tss => tss.pubkey);
      allPublicKeys.push(...tapScriptPubkeys);
    }
    const allHashes = allPublicKeys.map(pubicKey =>
      getTaprootHashesForSig(inputIndex, input, inputs, pubicKey, cache),
    );
    return allHashes.flat();
  }
  function getPrevoutTaprootKey(inputIndex, input, cache) {
    const { script } = getScriptAndAmountFromUtxo(inputIndex, input, cache);
    return (0, psbtutils_1.isP2TR)(script) ? script.subarray(2, 34) : null;
  }
  function trimTaprootSig(signature) {
    return signature.length === 64 ? signature : signature.subarray(0, 64);
  }
  function getTaprootHashesForSig(
    inputIndex,
    input,
    inputs,
    pubkey,
    cache,
    tapLeafHashToSign,
    allowedSighashTypes,
  ) {
    const unsignedTx = cache.__TX;
    const sighashType =
      input.sighashType || transaction_1.Transaction.SIGHASH_DEFAULT;
    checkSighashTypeAllowed(sighashType, allowedSighashTypes);
    const prevOuts = inputs.map((i, index) =>
      getScriptAndAmountFromUtxo(index, i, cache),
    );
    const signingScripts = prevOuts.map(o => o.script);
    const values = prevOuts.map(o => o.value);
    const hashes = [];
    if (input.tapInternalKey && !tapLeafHashToSign) {
      const outputKey =
        getPrevoutTaprootKey(inputIndex, input, cache) || Buffer.from([]);
      if ((0, bip371_1.toXOnly)(pubkey).equals(outputKey)) {
        const tapKeyHash = unsignedTx.hashForWitnessV1(
          inputIndex,
          signingScripts,
          values,
          sighashType,
        );
        hashes.push({ pubkey, hash: tapKeyHash });
      }
    }
    const tapLeafHashes = (input.tapLeafScript || [])
      .filter(tapLeaf => (0, psbtutils_1.pubkeyInScript)(pubkey, tapLeaf.script))
      .map(tapLeaf => {
        const hash = (0, bip341_1.tapleafHash)({
          output: tapLeaf.script,
          version: tapLeaf.leafVersion,
        });
        return Object.assign({ hash }, tapLeaf);
      })
      .filter(
        tapLeaf => !tapLeafHashToSign || tapLeafHashToSign.equals(tapLeaf.hash),
      )
      .map(tapLeaf => {
        const tapScriptHash = unsignedTx.hashForWitnessV1(
          inputIndex,
          signingScripts,
          values,
          transaction_1.Transaction.SIGHASH_DEFAULT,
          tapLeaf.hash,
        );
        return {
          pubkey,
          hash: tapScriptHash,
          leafHash: tapLeaf.hash,
        };
      });
    return hashes.concat(tapLeafHashes);
  }
  function checkSighashTypeAllowed(sighashType, sighashTypes) {
    if (sighashTypes && sighashTypes.indexOf(sighashType) < 0) {
      const str = sighashTypeToString(sighashType);
      throw new Error(
        `Sighash type is not allowed. Retry the sign method passing the ` +
          `sighashTypes array of whitelisted types. Sighash type: ${str}`,
      );
    }
  }
  function getPayment(script, scriptType, partialSig) {
    let payment;
    switch (scriptType) {
      case 'multisig':
        const sigs = getSortedSigs(script, partialSig);
        payment = payments.p2ms({
          output: script,
          signatures: sigs,
        });
        break;
      case 'pubkey':
        payment = payments.p2pk({
          output: script,
          signature: partialSig[0].signature,
        });
        break;
      case 'pubkeyhash':
        payment = payments.p2pkh({
          output: script,
          pubkey: partialSig[0].pubkey,
          signature: partialSig[0].signature,
        });
        break;
      case 'witnesspubkeyhash':
        payment = payments.p2wpkh({
          output: script,
          pubkey: partialSig[0].pubkey,
          signature: partialSig[0].signature,
        });
        break;
    }
    return payment;
  }
  function getScriptFromInput(inputIndex, input, cache) {
    const unsignedTx = cache.__TX;
    const res = {
      script: null,
      isSegwit: false,
      isP2SH: false,
      isP2WSH: false,
    };
    res.isP2SH = !!input.redeemScript;
    res.isP2WSH = !!input.witnessScript;
    if (input.witnessScript) {
      res.script = input.witnessScript;
    } else if (input.redeemScript) {
      res.script = input.redeemScript;
    } else {
      if (input.nonWitnessUtxo) {
        const nonWitnessUtxoTx = nonWitnessUtxoTxFromCache(
          cache,
          input,
          inputIndex,
        );
        const prevoutIndex = unsignedTx.ins[inputIndex].index;
        res.script = nonWitnessUtxoTx.outs[prevoutIndex].script;
      } else if (input.witnessUtxo) {
        res.script = input.witnessUtxo.script;
      }
    }
    if (input.witnessScript || (0, psbtutils_1.isP2WPKH)(res.script)) {
      res.isSegwit = true;
    }
    return res;
  }
  function getSignersFromHD(inputIndex, inputs, hdKeyPair) {
    const input = (0, utils_1.checkForInput)(inputs, inputIndex);
    if (!input.bip32Derivation || input.bip32Derivation.length === 0) {
      throw new Error('Need bip32Derivation to sign with HD');
    }
    const myDerivations = input.bip32Derivation
      .map(bipDv => {
        if (bipDv.masterFingerprint.equals(hdKeyPair.fingerprint)) {
          return bipDv;
        } else {
          return;
        }
      })
      .filter(v => !!v);
    if (myDerivations.length === 0) {
      throw new Error(
        'Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint',
      );
    }
    const signers = myDerivations.map(bipDv => {
      const node = hdKeyPair.derivePath(bipDv.path);
      if (!bipDv.pubkey.equals(node.publicKey)) {
        throw new Error('pubkey did not match bip32Derivation');
      }
      return node;
    });
    return signers;
  }
  function getSortedSigs(script, partialSig) {
    const p2ms = payments.p2ms({ output: script });
    // for each pubkey in order of p2ms script
    return p2ms.pubkeys
      .map(pk => {
        // filter partialSig array by pubkey being equal
        return (
          partialSig.filter(ps => {
            return ps.pubkey.equals(pk);
          })[0] || {}
        ).signature;
        // Any pubkey without a match will return undefined
        // this last filter removes all the undefined items in the array.
      })
      .filter(v => !!v);
  }
  function scriptWitnessToWitnessStack(buffer) {
    let offset = 0;
    function readSlice(n) {
      offset += n;
      return buffer.slice(offset - n, offset);
    }
    function readVarInt() {
      const vi = varuint.decode(buffer, offset);
      offset += varuint.decode.bytes;
      return vi;
    }
    function readVarSlice() {
      return readSlice(readVarInt());
    }
    function readVector() {
      const count = readVarInt();
      const vector = [];
      for (let i = 0; i < count; i++) vector.push(readVarSlice());
      return vector;
    }
    return readVector();
  }
  function sighashTypeToString(sighashType) {
    let text =
      sighashType & transaction_1.Transaction.SIGHASH_ANYONECANPAY
        ? 'SIGHASH_ANYONECANPAY | '
        : '';
    const sigMod = sighashType & 0x1f;
    switch (sigMod) {
      case transaction_1.Transaction.SIGHASH_ALL:
        text += 'SIGHASH_ALL';
        break;
      case transaction_1.Transaction.SIGHASH_SINGLE:
        text += 'SIGHASH_SINGLE';
        break;
      case transaction_1.Transaction.SIGHASH_NONE:
        text += 'SIGHASH_NONE';
        break;
    }
    return text;
  }
  function addNonWitnessTxCache(cache, input, inputIndex) {
    cache.__NON_WITNESS_UTXO_BUF_CACHE[inputIndex] = input.nonWitnessUtxo;
    const tx = transaction_1.Transaction.fromBuffer(input.nonWitnessUtxo);
    cache.__NON_WITNESS_UTXO_TX_CACHE[inputIndex] = tx;
    const self = cache;
    const selfIndex = inputIndex;
    delete input.nonWitnessUtxo;
    Object.defineProperty(input, 'nonWitnessUtxo', {
      enumerable: true,
      get() {
        const buf = self.__NON_WITNESS_UTXO_BUF_CACHE[selfIndex];
        const txCache = self.__NON_WITNESS_UTXO_TX_CACHE[selfIndex];
        if (buf !== undefined) {
          return buf;
        } else {
          const newBuf = txCache.toBuffer();
          self.__NON_WITNESS_UTXO_BUF_CACHE[selfIndex] = newBuf;
          return newBuf;
        }
      },
      set(data) {
        self.__NON_WITNESS_UTXO_BUF_CACHE[selfIndex] = data;
      },
    });
  }
  function inputFinalizeGetAmts(inputs, tx, cache, mustFinalize) {
    let inputAmount = 0;
    inputs.forEach((input, idx) => {
      if (mustFinalize && input.finalScriptSig)
        tx.ins[idx].script = input.finalScriptSig;
      if (mustFinalize && input.finalScriptWitness) {
        tx.ins[idx].witness = scriptWitnessToWitnessStack(
          input.finalScriptWitness,
        );
      }
      if (input.witnessUtxo) {
        inputAmount += input.witnessUtxo.value;
      } else if (input.nonWitnessUtxo) {
        const nwTx = nonWitnessUtxoTxFromCache(cache, input, idx);
        const vout = tx.ins[idx].index;
        const out = nwTx.outs[vout];
        inputAmount += out.value;
      }
    });
    const outputAmount = tx.outs.reduce((total, o) => total + o.value, 0);
    const fee = inputAmount - outputAmount;
    if (fee < 0) {
      throw new Error('Outputs are spending more than Inputs');
    }
    const bytes = tx.virtualSize();
    cache.__FEE = fee;
    cache.__EXTRACTED_TX = tx;
    cache.__FEE_RATE = Math.floor(fee / bytes);
  }
  function nonWitnessUtxoTxFromCache(cache, input, inputIndex) {
    const c = cache.__NON_WITNESS_UTXO_TX_CACHE;
    if (!c[inputIndex]) {
      addNonWitnessTxCache(cache, input, inputIndex);
    }
    return c[inputIndex];
  }
  function getScriptFromUtxo(inputIndex, input, cache) {
    const { script } = getScriptAndAmountFromUtxo(inputIndex, input, cache);
    return script;
  }
  function getScriptAndAmountFromUtxo(inputIndex, input, cache) {
    if (input.witnessUtxo !== undefined) {
      return {
        script: input.witnessUtxo.script,
        value: input.witnessUtxo.value,
      };
    } else if (input.nonWitnessUtxo !== undefined) {
      const nonWitnessUtxoTx = nonWitnessUtxoTxFromCache(
        cache,
        input,
        inputIndex,
      );
      const o = nonWitnessUtxoTx.outs[cache.__TX.ins[inputIndex].index];
      return { script: o.script, value: o.value };
    } else {
      throw new Error("Can't find pubkey in input without Utxo data");
    }
  }
  function pubkeyInInput(pubkey, input, inputIndex, cache) {
    const script = getScriptFromUtxo(inputIndex, input, cache);
    const { meaningfulScript } = getMeaningfulScript(
      script,
      inputIndex,
      'input',
      input.redeemScript,
      input.witnessScript,
    );
    return (0, psbtutils_1.pubkeyInScript)(pubkey, meaningfulScript);
  }
  function pubkeyInOutput(pubkey, output, outputIndex, cache) {
    const script = cache.__TX.outs[outputIndex].script;
    const { meaningfulScript } = getMeaningfulScript(
      script,
      outputIndex,
      'output',
      output.redeemScript,
      output.witnessScript,
    );
    return (0, psbtutils_1.pubkeyInScript)(pubkey, meaningfulScript);
  }
  function redeemFromFinalScriptSig(finalScript) {
    if (!finalScript) return;
    const decomp = bscript.decompile(finalScript);
    if (!decomp) return;
    const lastItem = decomp[decomp.length - 1];
    if (
      !Buffer.isBuffer(lastItem) ||
      isPubkeyLike(lastItem) ||
      isSigLike(lastItem)
    )
      return;
    const sDecomp = bscript.decompile(lastItem);
    if (!sDecomp) return;
    return lastItem;
  }
  function redeemFromFinalWitnessScript(finalScript) {
    if (!finalScript) return;
    const decomp = scriptWitnessToWitnessStack(finalScript);
    const lastItem = decomp[decomp.length - 1];
    if (isPubkeyLike(lastItem)) return;
    const sDecomp = bscript.decompile(lastItem);
    if (!sDecomp) return;
    return lastItem;
  }
  function compressPubkey(pubkey) {
    if (pubkey.length === 65) {
      const parity = pubkey[64] & 1;
      const newKey = pubkey.slice(0, 33);
      newKey[0] = 2 | parity;
      return newKey;
    }
    return pubkey.slice();
  }
  function isPubkeyLike(buf) {
    return buf.length === 33 && bscript.isCanonicalPubKey(buf);
  }
  function isSigLike(buf) {
    return bscript.isCanonicalScriptSignature(buf);
  }
  function getMeaningfulScript(
    script,
    index,
    ioType,
    redeemScript,
    witnessScript,
  ) {
    const isP2SH = (0, psbtutils_1.isP2SHScript)(script);
    const isP2SHP2WSH =
      isP2SH && redeemScript && (0, psbtutils_1.isP2WSHScript)(redeemScript);
    const isP2WSH = (0, psbtutils_1.isP2WSHScript)(script);
    if (isP2SH && redeemScript === undefined)
      throw new Error('scriptPubkey is P2SH but redeemScript missing');
    if ((isP2WSH || isP2SHP2WSH) && witnessScript === undefined)
      throw new Error(
        'scriptPubkey or redeemScript is P2WSH but witnessScript missing',
      );
    let meaningfulScript;
    if (isP2SHP2WSH) {
      meaningfulScript = witnessScript;
      checkRedeemScript(index, script, redeemScript, ioType);
      checkWitnessScript(index, redeemScript, witnessScript, ioType);
      checkInvalidP2WSH(meaningfulScript);
    } else if (isP2WSH) {
      meaningfulScript = witnessScript;
      checkWitnessScript(index, script, witnessScript, ioType);
      checkInvalidP2WSH(meaningfulScript);
    } else if (isP2SH) {
      meaningfulScript = redeemScript;
      checkRedeemScript(index, script, redeemScript, ioType);
    } else {
      meaningfulScript = script;
    }
    return {
      meaningfulScript,
      type: isP2SHP2WSH
        ? 'p2sh-p2wsh'
        : isP2SH
        ? 'p2sh'
        : isP2WSH
        ? 'p2wsh'
        : 'raw',
    };
  }
  function checkInvalidP2WSH(script) {
    if (
      (0, psbtutils_1.isP2WPKH)(script) ||
      (0, psbtutils_1.isP2SHScript)(script)
    ) {
      throw new Error('P2WPKH or P2SH can not be contained within P2WSH');
    }
  }
  function classifyScript(script) {
    if ((0, psbtutils_1.isP2WPKH)(script)) return 'witnesspubkeyhash';
    if ((0, psbtutils_1.isP2PKH)(script)) return 'pubkeyhash';
    if ((0, psbtutils_1.isP2MS)(script)) return 'multisig';
    if ((0, psbtutils_1.isP2PK)(script)) return 'pubkey';
    return 'nonstandard';
  }
  function range(n) {
    return [...Array(n).keys()];
  }
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"./address":42,"./bufferutils":45,"./networks":50,"./payments":54,"./payments/bip341":52,"./psbt/bip371":64,"./psbt/psbtutils":65,"./script":67,"./transaction":70,"bip174":39,"bip174/src/lib/converter/varint":35,"bip174/src/lib/utils":41,"buffer":75}],64:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.checkTaprootInputForSigs =
    exports.tapTreeFromList =
    exports.tapTreeToList =
    exports.tweakInternalPubKey =
    exports.checkTaprootOutputFields =
    exports.checkTaprootInputFields =
    exports.isTaprootOutput =
    exports.isTaprootInput =
    exports.serializeTaprootSignature =
    exports.tapScriptFinalizer =
    exports.toXOnly =
      void 0;
  const types_1 = require('../types');
  const transaction_1 = require('../transaction');
  const psbtutils_1 = require('./psbtutils');
  const bip341_1 = require('../payments/bip341');
  const payments_1 = require('../payments');
  const psbtutils_2 = require('./psbtutils');
  const toXOnly = pubKey => (pubKey.length === 32 ? pubKey : pubKey.slice(1, 33));
  exports.toXOnly = toXOnly;
  /**
   * Default tapscript finalizer. It searches for the `tapLeafHashToFinalize` if provided.
   * Otherwise it will search for the tapleaf that has at least one signature and has the shortest path.
   * @param inputIndex the position of the PSBT input.
   * @param input the PSBT input.
   * @param tapLeafHashToFinalize optional, if provided the finalizer will search for a tapleaf that has this hash
   *                              and will try to build the finalScriptWitness.
   * @returns the finalScriptWitness or throws an exception if no tapleaf found.
   */
  function tapScriptFinalizer(inputIndex, input, tapLeafHashToFinalize) {
    const tapLeaf = findTapLeafToFinalize(
      input,
      inputIndex,
      tapLeafHashToFinalize,
    );
    try {
      const sigs = sortSignatures(input, tapLeaf);
      const witness = sigs.concat(tapLeaf.script).concat(tapLeaf.controlBlock);
      return {
        finalScriptWitness: (0, psbtutils_1.witnessStackToScriptWitness)(witness),
      };
    } catch (err) {
      throw new Error(`Can not finalize taproot input #${inputIndex}: ${err}`);
    }
  }
  exports.tapScriptFinalizer = tapScriptFinalizer;
  function serializeTaprootSignature(sig, sighashType) {
    const sighashTypeByte = sighashType
      ? Buffer.from([sighashType])
      : Buffer.from([]);
    return Buffer.concat([sig, sighashTypeByte]);
  }
  exports.serializeTaprootSignature = serializeTaprootSignature;
  function isTaprootInput(input) {
    return (
      input &&
      !!(
        input.tapInternalKey ||
        input.tapMerkleRoot ||
        (input.tapLeafScript && input.tapLeafScript.length) ||
        (input.tapBip32Derivation && input.tapBip32Derivation.length) ||
        (input.witnessUtxo && (0, psbtutils_1.isP2TR)(input.witnessUtxo.script))
      )
    );
  }
  exports.isTaprootInput = isTaprootInput;
  function isTaprootOutput(output, script) {
    return (
      output &&
      !!(
        output.tapInternalKey ||
        output.tapTree ||
        (output.tapBip32Derivation && output.tapBip32Derivation.length) ||
        (script && (0, psbtutils_1.isP2TR)(script))
      )
    );
  }
  exports.isTaprootOutput = isTaprootOutput;
  function checkTaprootInputFields(inputData, newInputData, action) {
    checkMixedTaprootAndNonTaprootInputFields(inputData, newInputData, action);
    checkIfTapLeafInTree(inputData, newInputData, action);
  }
  exports.checkTaprootInputFields = checkTaprootInputFields;
  function checkTaprootOutputFields(outputData, newOutputData, action) {
    checkMixedTaprootAndNonTaprootOutputFields(outputData, newOutputData, action);
    checkTaprootScriptPubkey(outputData, newOutputData);
  }
  exports.checkTaprootOutputFields = checkTaprootOutputFields;
  function checkTaprootScriptPubkey(outputData, newOutputData) {
    if (!newOutputData.tapTree && !newOutputData.tapInternalKey) return;
    const tapInternalKey =
      newOutputData.tapInternalKey || outputData.tapInternalKey;
    const tapTree = newOutputData.tapTree || outputData.tapTree;
    if (tapInternalKey) {
      const { script: scriptPubkey } = outputData;
      const script = getTaprootScripPubkey(tapInternalKey, tapTree);
      if (scriptPubkey && !scriptPubkey.equals(script))
        throw new Error('Error adding output. Script or address missmatch.');
    }
  }
  function getTaprootScripPubkey(tapInternalKey, tapTree) {
    const scriptTree = tapTree && tapTreeFromList(tapTree.leaves);
    const { output } = (0, payments_1.p2tr)({
      internalPubkey: tapInternalKey,
      scriptTree,
    });
    return output;
  }
  function tweakInternalPubKey(inputIndex, input) {
    const tapInternalKey = input.tapInternalKey;
    const outputKey =
      tapInternalKey &&
      (0, bip341_1.tweakKey)(tapInternalKey, input.tapMerkleRoot);
    if (!outputKey)
      throw new Error(
        `Cannot tweak tap internal key for input #${inputIndex}. Public key: ${
          tapInternalKey && tapInternalKey.toString('hex')
        }`,
      );
    return outputKey.x;
  }
  exports.tweakInternalPubKey = tweakInternalPubKey;
  /**
   * Convert a binary tree to a BIP371 type list. Each element of the list is (according to BIP371):
   * One or more tuples representing the depth, leaf version, and script for a leaf in the Taproot tree,
   * allowing the entire tree to be reconstructed. The tuples must be in depth first search order so that
   * the tree is correctly reconstructed.
   * @param tree the binary tap tree
   * @returns a list of BIP 371 tapleaves
   */
  function tapTreeToList(tree) {
    if (!(0, types_1.isTaptree)(tree))
      throw new Error(
        'Cannot convert taptree to tapleaf list. Expecting a tapree structure.',
      );
    return _tapTreeToList(tree);
  }
  exports.tapTreeToList = tapTreeToList;
  /**
   * Convert a BIP371 TapLeaf list to a TapTree (binary).
   * @param leaves a list of tapleaves where each element of the list is (according to BIP371):
   * One or more tuples representing the depth, leaf version, and script for a leaf in the Taproot tree,
   * allowing the entire tree to be reconstructed. The tuples must be in depth first search order so that
   * the tree is correctly reconstructed.
   * @returns the corresponding taptree, or throws an exception if the tree cannot be reconstructed
   */
  function tapTreeFromList(leaves = []) {
    if (leaves.length === 1 && leaves[0].depth === 0)
      return {
        output: leaves[0].script,
        version: leaves[0].leafVersion,
      };
    return instertLeavesInTree(leaves);
  }
  exports.tapTreeFromList = tapTreeFromList;
  function checkTaprootInputForSigs(input, action) {
    const sigs = extractTaprootSigs(input);
    return sigs.some(sig =>
      (0, psbtutils_2.signatureBlocksAction)(sig, decodeSchnorrSignature, action),
    );
  }
  exports.checkTaprootInputForSigs = checkTaprootInputForSigs;
  function decodeSchnorrSignature(signature) {
    return {
      signature: signature.slice(0, 64),
      hashType:
        signature.slice(64)[0] || transaction_1.Transaction.SIGHASH_DEFAULT,
    };
  }
  function extractTaprootSigs(input) {
    const sigs = [];
    if (input.tapKeySig) sigs.push(input.tapKeySig);
    if (input.tapScriptSig)
      sigs.push(...input.tapScriptSig.map(s => s.signature));
    if (!sigs.length) {
      const finalTapKeySig = getTapKeySigFromWithness(input.finalScriptWitness);
      if (finalTapKeySig) sigs.push(finalTapKeySig);
    }
    return sigs;
  }
  function getTapKeySigFromWithness(finalScriptWitness) {
    if (!finalScriptWitness) return;
    const witness = finalScriptWitness.slice(2);
    // todo: add schnorr signature validation
    if (witness.length === 64 || witness.length === 65) return witness;
  }
  function _tapTreeToList(tree, leaves = [], depth = 0) {
    if (depth > bip341_1.MAX_TAPTREE_DEPTH)
      throw new Error('Max taptree depth exceeded.');
    if (!tree) return [];
    if ((0, types_1.isTapleaf)(tree)) {
      leaves.push({
        depth,
        leafVersion: tree.version || bip341_1.LEAF_VERSION_TAPSCRIPT,
        script: tree.output,
      });
      return leaves;
    }
    if (tree[0]) _tapTreeToList(tree[0], leaves, depth + 1);
    if (tree[1]) _tapTreeToList(tree[1], leaves, depth + 1);
    return leaves;
  }
  function instertLeavesInTree(leaves) {
    let tree;
    for (const leaf of leaves) {
      tree = instertLeafInTree(leaf, tree);
      if (!tree) throw new Error(`No room left to insert tapleaf in tree`);
    }
    return tree;
  }
  function instertLeafInTree(leaf, tree, depth = 0) {
    if (depth > bip341_1.MAX_TAPTREE_DEPTH)
      throw new Error('Max taptree depth exceeded.');
    if (leaf.depth === depth) {
      if (!tree)
        return {
          output: leaf.script,
          version: leaf.leafVersion,
        };
      return;
    }
    if ((0, types_1.isTapleaf)(tree)) return;
    const leftSide = instertLeafInTree(leaf, tree && tree[0], depth + 1);
    if (leftSide) return [leftSide, tree && tree[1]];
    const rightSide = instertLeafInTree(leaf, tree && tree[1], depth + 1);
    if (rightSide) return [tree && tree[0], rightSide];
  }
  function checkMixedTaprootAndNonTaprootInputFields(
    inputData,
    newInputData,
    action,
  ) {
    const isBadTaprootUpdate =
      isTaprootInput(inputData) && hasNonTaprootFields(newInputData);
    const isBadNonTaprootUpdate =
      hasNonTaprootFields(inputData) && isTaprootInput(newInputData);
    const hasMixedFields =
      inputData === newInputData &&
      isTaprootInput(newInputData) &&
      hasNonTaprootFields(newInputData); // todo: bad? use !===
    if (isBadTaprootUpdate || isBadNonTaprootUpdate || hasMixedFields)
      throw new Error(
        `Invalid arguments for Psbt.${action}. ` +
          `Cannot use both taproot and non-taproot fields.`,
      );
  }
  function checkMixedTaprootAndNonTaprootOutputFields(
    inputData,
    newInputData,
    action,
  ) {
    const isBadTaprootUpdate =
      isTaprootOutput(inputData) && hasNonTaprootFields(newInputData);
    const isBadNonTaprootUpdate =
      hasNonTaprootFields(inputData) && isTaprootOutput(newInputData);
    const hasMixedFields =
      inputData === newInputData &&
      isTaprootOutput(newInputData) &&
      hasNonTaprootFields(newInputData);
    if (isBadTaprootUpdate || isBadNonTaprootUpdate || hasMixedFields)
      throw new Error(
        `Invalid arguments for Psbt.${action}. ` +
          `Cannot use both taproot and non-taproot fields.`,
      );
  }
  function checkIfTapLeafInTree(inputData, newInputData, action) {
    if (newInputData.tapMerkleRoot) {
      const newLeafsInTree = (newInputData.tapLeafScript || []).every(l =>
        isTapLeafInTree(l, newInputData.tapMerkleRoot),
      );
      const oldLeafsInTree = (inputData.tapLeafScript || []).every(l =>
        isTapLeafInTree(l, newInputData.tapMerkleRoot),
      );
      if (!newLeafsInTree || !oldLeafsInTree)
        throw new Error(
          `Invalid arguments for Psbt.${action}. Tapleaf not part of taptree.`,
        );
    } else if (inputData.tapMerkleRoot) {
      const newLeafsInTree = (newInputData.tapLeafScript || []).every(l =>
        isTapLeafInTree(l, inputData.tapMerkleRoot),
      );
      if (!newLeafsInTree)
        throw new Error(
          `Invalid arguments for Psbt.${action}. Tapleaf not part of taptree.`,
        );
    }
  }
  function isTapLeafInTree(tapLeaf, merkleRoot) {
    if (!merkleRoot) return true;
    const leafHash = (0, bip341_1.tapleafHash)({
      output: tapLeaf.script,
      version: tapLeaf.leafVersion,
    });
    const rootHash = (0, bip341_1.rootHashFromPath)(
      tapLeaf.controlBlock,
      leafHash,
    );
    return rootHash.equals(merkleRoot);
  }
  function sortSignatures(input, tapLeaf) {
    const leafHash = (0, bip341_1.tapleafHash)({
      output: tapLeaf.script,
      version: tapLeaf.leafVersion,
    });
    return (input.tapScriptSig || [])
      .filter(tss => tss.leafHash.equals(leafHash))
      .map(tss => addPubkeyPositionInScript(tapLeaf.script, tss))
      .sort((t1, t2) => t2.positionInScript - t1.positionInScript)
      .map(t => t.signature);
  }
  function addPubkeyPositionInScript(script, tss) {
    return Object.assign(
      {
        positionInScript: (0, psbtutils_1.pubkeyPositionInScript)(
          tss.pubkey,
          script,
        ),
      },
      tss,
    );
  }
  /**
   * Find tapleaf by hash, or get the signed tapleaf with the shortest path.
   */
  function findTapLeafToFinalize(input, inputIndex, leafHashToFinalize) {
    if (!input.tapScriptSig || !input.tapScriptSig.length)
      throw new Error(
        `Can not finalize taproot input #${inputIndex}. No tapleaf script signature provided.`,
      );
    const tapLeaf = (input.tapLeafScript || [])
      .sort((a, b) => a.controlBlock.length - b.controlBlock.length)
      .find(leaf =>
        canFinalizeLeaf(leaf, input.tapScriptSig, leafHashToFinalize),
      );
    if (!tapLeaf)
      throw new Error(
        `Can not finalize taproot input #${inputIndex}. Signature for tapleaf script not found.`,
      );
    return tapLeaf;
  }
  function canFinalizeLeaf(leaf, tapScriptSig, hash) {
    const leafHash = (0, bip341_1.tapleafHash)({
      output: leaf.script,
      version: leaf.leafVersion,
    });
    const whiteListedHash = !hash || hash.equals(leafHash);
    return (
      whiteListedHash &&
      tapScriptSig.find(tss => tss.leafHash.equals(leafHash)) !== undefined
    );
  }
  function hasNonTaprootFields(io) {
    return (
      io &&
      !!(
        io.redeemScript ||
        io.witnessScript ||
        (io.bip32Derivation && io.bip32Derivation.length)
      )
    );
  }
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../payments":54,"../payments/bip341":52,"../transaction":70,"../types":71,"./psbtutils":65,"buffer":75}],65:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.signatureBlocksAction =
    exports.checkInputForSig =
    exports.pubkeyInScript =
    exports.pubkeyPositionInScript =
    exports.witnessStackToScriptWitness =
    exports.isP2TR =
    exports.isP2SHScript =
    exports.isP2WSHScript =
    exports.isP2WPKH =
    exports.isP2PKH =
    exports.isP2PK =
    exports.isP2MS =
      void 0;
  const varuint = require('bip174/src/lib/converter/varint');
  const bscript = require('../script');
  const transaction_1 = require('../transaction');
  const crypto_1 = require('../crypto');
  const payments = require('../payments');
  function isPaymentFactory(payment) {
    return script => {
      try {
        payment({ output: script });
        return true;
      } catch (err) {
        return false;
      }
    };
  }
  exports.isP2MS = isPaymentFactory(payments.p2ms);
  exports.isP2PK = isPaymentFactory(payments.p2pk);
  exports.isP2PKH = isPaymentFactory(payments.p2pkh);
  exports.isP2WPKH = isPaymentFactory(payments.p2wpkh);
  exports.isP2WSHScript = isPaymentFactory(payments.p2wsh);
  exports.isP2SHScript = isPaymentFactory(payments.p2sh);
  exports.isP2TR = isPaymentFactory(payments.p2tr);
  function witnessStackToScriptWitness(witness) {
    let buffer = Buffer.allocUnsafe(0);
    function writeSlice(slice) {
      buffer = Buffer.concat([buffer, Buffer.from(slice)]);
    }
    function writeVarInt(i) {
      const currentLen = buffer.length;
      const varintLen = varuint.encodingLength(i);
      buffer = Buffer.concat([buffer, Buffer.allocUnsafe(varintLen)]);
      varuint.encode(i, buffer, currentLen);
    }
    function writeVarSlice(slice) {
      writeVarInt(slice.length);
      writeSlice(slice);
    }
    function writeVector(vector) {
      writeVarInt(vector.length);
      vector.forEach(writeVarSlice);
    }
    writeVector(witness);
    return buffer;
  }
  exports.witnessStackToScriptWitness = witnessStackToScriptWitness;
  function pubkeyPositionInScript(pubkey, script) {
    const pubkeyHash = (0, crypto_1.hash160)(pubkey);
    const pubkeyXOnly = pubkey.slice(1, 33); // slice before calling?
    const decompiled = bscript.decompile(script);
    if (decompiled === null) throw new Error('Unknown script error');
    return decompiled.findIndex(element => {
      if (typeof element === 'number') return false;
      return (
        element.equals(pubkey) ||
        element.equals(pubkeyHash) ||
        element.equals(pubkeyXOnly)
      );
    });
  }
  exports.pubkeyPositionInScript = pubkeyPositionInScript;
  function pubkeyInScript(pubkey, script) {
    return pubkeyPositionInScript(pubkey, script) !== -1;
  }
  exports.pubkeyInScript = pubkeyInScript;
  function checkInputForSig(input, action) {
    const pSigs = extractPartialSigs(input);
    return pSigs.some(pSig =>
      signatureBlocksAction(pSig, bscript.signature.decode, action),
    );
  }
  exports.checkInputForSig = checkInputForSig;
  function signatureBlocksAction(signature, signatureDecodeFn, action) {
    const { hashType } = signatureDecodeFn(signature);
    const whitelist = [];
    const isAnyoneCanPay =
      hashType & transaction_1.Transaction.SIGHASH_ANYONECANPAY;
    if (isAnyoneCanPay) whitelist.push('addInput');
    const hashMod = hashType & 0x1f;
    switch (hashMod) {
      case transaction_1.Transaction.SIGHASH_ALL:
        break;
      case transaction_1.Transaction.SIGHASH_SINGLE:
      case transaction_1.Transaction.SIGHASH_NONE:
        whitelist.push('addOutput');
        whitelist.push('setInputSequence');
        break;
    }
    if (whitelist.indexOf(action) === -1) {
      return true;
    }
    return false;
  }
  exports.signatureBlocksAction = signatureBlocksAction;
  function extractPartialSigs(input) {
    let pSigs = [];
    if ((input.partialSig || []).length === 0) {
      if (!input.finalScriptSig && !input.finalScriptWitness) return [];
      pSigs = getPsigsFromInputFinalScripts(input);
    } else {
      pSigs = input.partialSig;
    }
    return pSigs.map(p => p.signature);
  }
  function getPsigsFromInputFinalScripts(input) {
    const scriptItems = !input.finalScriptSig
      ? []
      : bscript.decompile(input.finalScriptSig) || [];
    const witnessItems = !input.finalScriptWitness
      ? []
      : bscript.decompile(input.finalScriptWitness) || [];
    return scriptItems
      .concat(witnessItems)
      .filter(item => {
        return Buffer.isBuffer(item) && bscript.isCanonicalScriptSignature(item);
      })
      .map(sig => ({ signature: sig }));
  }
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"../crypto":46,"../payments":54,"../script":67,"../transaction":70,"bip174/src/lib/converter/varint":35,"buffer":75}],66:[function(require,module,exports){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.decode = exports.encode = exports.encodingLength = void 0;
  const ops_1 = require('./ops');
  function encodingLength(i) {
    return i < ops_1.OPS.OP_PUSHDATA1 ? 1 : i <= 0xff ? 2 : i <= 0xffff ? 3 : 5;
  }
  exports.encodingLength = encodingLength;
  function encode(buffer, num, offset) {
    const size = encodingLength(num);
    // ~6 bit
    if (size === 1) {
      buffer.writeUInt8(num, offset);
      // 8 bit
    } else if (size === 2) {
      buffer.writeUInt8(ops_1.OPS.OP_PUSHDATA1, offset);
      buffer.writeUInt8(num, offset + 1);
      // 16 bit
    } else if (size === 3) {
      buffer.writeUInt8(ops_1.OPS.OP_PUSHDATA2, offset);
      buffer.writeUInt16LE(num, offset + 1);
      // 32 bit
    } else {
      buffer.writeUInt8(ops_1.OPS.OP_PUSHDATA4, offset);
      buffer.writeUInt32LE(num, offset + 1);
    }
    return size;
  }
  exports.encode = encode;
  function decode(buffer, offset) {
    const opcode = buffer.readUInt8(offset);
    let num;
    let size;
    // ~6 bit
    if (opcode < ops_1.OPS.OP_PUSHDATA1) {
      num = opcode;
      size = 1;
      // 8 bit
    } else if (opcode === ops_1.OPS.OP_PUSHDATA1) {
      if (offset + 2 > buffer.length) return null;
      num = buffer.readUInt8(offset + 1);
      size = 2;
      // 16 bit
    } else if (opcode === ops_1.OPS.OP_PUSHDATA2) {
      if (offset + 3 > buffer.length) return null;
      num = buffer.readUInt16LE(offset + 1);
      size = 3;
      // 32 bit
    } else {
      if (offset + 5 > buffer.length) return null;
      if (opcode !== ops_1.OPS.OP_PUSHDATA4) throw new Error('Unexpected opcode');
      num = buffer.readUInt32LE(offset + 1);
      size = 5;
    }
    return {
      opcode,
      number: num,
      size,
    };
  }
  exports.decode = decode;
  
  },{"./ops":51}],67:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.signature =
    exports.number =
    exports.isCanonicalScriptSignature =
    exports.isDefinedHashType =
    exports.isCanonicalPubKey =
    exports.toStack =
    exports.fromASM =
    exports.toASM =
    exports.decompile =
    exports.compile =
    exports.countNonPushOnlyOPs =
    exports.isPushOnly =
    exports.OPS =
      void 0;
  const bip66 = require('./bip66');
  const ops_1 = require('./ops');
  Object.defineProperty(exports, 'OPS', {
    enumerable: true,
    get: function () {
      return ops_1.OPS;
    },
  });
  const pushdata = require('./push_data');
  const scriptNumber = require('./script_number');
  const scriptSignature = require('./script_signature');
  const types = require('./types');
  const { typeforce } = types;
  const OP_INT_BASE = ops_1.OPS.OP_RESERVED; // OP_1 - 1
  function isOPInt(value) {
    return (
      types.Number(value) &&
      (value === ops_1.OPS.OP_0 ||
        (value >= ops_1.OPS.OP_1 && value <= ops_1.OPS.OP_16) ||
        value === ops_1.OPS.OP_1NEGATE)
    );
  }
  function isPushOnlyChunk(value) {
    return types.Buffer(value) || isOPInt(value);
  }
  function isPushOnly(value) {
    return types.Array(value) && value.every(isPushOnlyChunk);
  }
  exports.isPushOnly = isPushOnly;
  function countNonPushOnlyOPs(value) {
    return value.length - value.filter(isPushOnlyChunk).length;
  }
  exports.countNonPushOnlyOPs = countNonPushOnlyOPs;
  function asMinimalOP(buffer) {
    if (buffer.length === 0) return ops_1.OPS.OP_0;
    if (buffer.length !== 1) return;
    if (buffer[0] >= 1 && buffer[0] <= 16) return OP_INT_BASE + buffer[0];
    if (buffer[0] === 0x81) return ops_1.OPS.OP_1NEGATE;
  }
  function chunksIsBuffer(buf) {
    return Buffer.isBuffer(buf);
  }
  function chunksIsArray(buf) {
    return types.Array(buf);
  }
  function singleChunkIsBuffer(buf) {
    return Buffer.isBuffer(buf);
  }
  function compile(chunks) {
    // TODO: remove me
    if (chunksIsBuffer(chunks)) return chunks;
    typeforce(types.Array, chunks);
    const bufferSize = chunks.reduce((accum, chunk) => {
      // data chunk
      if (singleChunkIsBuffer(chunk)) {
        // adhere to BIP62.3, minimal push policy
        if (chunk.length === 1 && asMinimalOP(chunk) !== undefined) {
          return accum + 1;
        }
        return accum + pushdata.encodingLength(chunk.length) + chunk.length;
      }
      // opcode
      return accum + 1;
    }, 0.0);
    const buffer = Buffer.allocUnsafe(bufferSize);
    let offset = 0;
    chunks.forEach(chunk => {
      // data chunk
      if (singleChunkIsBuffer(chunk)) {
        // adhere to BIP62.3, minimal push policy
        const opcode = asMinimalOP(chunk);
        if (opcode !== undefined) {
          buffer.writeUInt8(opcode, offset);
          offset += 1;
          return;
        }
        offset += pushdata.encode(buffer, chunk.length, offset);
        chunk.copy(buffer, offset);
        offset += chunk.length;
        // opcode
      } else {
        buffer.writeUInt8(chunk, offset);
        offset += 1;
      }
    });
    if (offset !== buffer.length) throw new Error('Could not decode chunks');
    return buffer;
  }
  exports.compile = compile;
  function decompile(buffer) {
    // TODO: remove me
    if (chunksIsArray(buffer)) return buffer;
    typeforce(types.Buffer, buffer);
    const chunks = [];
    let i = 0;
    while (i < buffer.length) {
      const opcode = buffer[i];
      // data chunk
      if (opcode > ops_1.OPS.OP_0 && opcode <= ops_1.OPS.OP_PUSHDATA4) {
        const d = pushdata.decode(buffer, i);
        // did reading a pushDataInt fail?
        if (d === null) return null;
        i += d.size;
        // attempt to read too much data?
        if (i + d.number > buffer.length) return null;
        const data = buffer.slice(i, i + d.number);
        i += d.number;
        // decompile minimally
        const op = asMinimalOP(data);
        if (op !== undefined) {
          chunks.push(op);
        } else {
          chunks.push(data);
        }
        // opcode
      } else {
        chunks.push(opcode);
        i += 1;
      }
    }
    return chunks;
  }
  exports.decompile = decompile;
  function toASM(chunks) {
    if (chunksIsBuffer(chunks)) {
      chunks = decompile(chunks);
    }
    return chunks
      .map(chunk => {
        // data?
        if (singleChunkIsBuffer(chunk)) {
          const op = asMinimalOP(chunk);
          if (op === undefined) return chunk.toString('hex');
          chunk = op;
        }
        // opcode!
        return ops_1.REVERSE_OPS[chunk];
      })
      .join(' ');
  }
  exports.toASM = toASM;
  function fromASM(asm) {
    typeforce(types.String, asm);
    return compile(
      asm.split(' ').map(chunkStr => {
        // opcode?
        if (ops_1.OPS[chunkStr] !== undefined) return ops_1.OPS[chunkStr];
        typeforce(types.Hex, chunkStr);
        // data!
        return Buffer.from(chunkStr, 'hex');
      }),
    );
  }
  exports.fromASM = fromASM;
  function toStack(chunks) {
    chunks = decompile(chunks);
    typeforce(isPushOnly, chunks);
    return chunks.map(op => {
      if (singleChunkIsBuffer(op)) return op;
      if (op === ops_1.OPS.OP_0) return Buffer.allocUnsafe(0);
      return scriptNumber.encode(op - OP_INT_BASE);
    });
  }
  exports.toStack = toStack;
  function isCanonicalPubKey(buffer) {
    return types.isPoint(buffer);
  }
  exports.isCanonicalPubKey = isCanonicalPubKey;
  function isDefinedHashType(hashType) {
    const hashTypeMod = hashType & ~0x80;
    // return hashTypeMod > SIGHASH_ALL && hashTypeMod < SIGHASH_SINGLE
    return hashTypeMod > 0x00 && hashTypeMod < 0x04;
  }
  exports.isDefinedHashType = isDefinedHashType;
  function isCanonicalScriptSignature(buffer) {
    if (!Buffer.isBuffer(buffer)) return false;
    if (!isDefinedHashType(buffer[buffer.length - 1])) return false;
    return bip66.check(buffer.slice(0, -1));
  }
  exports.isCanonicalScriptSignature = isCanonicalScriptSignature;
  exports.number = scriptNumber;
  exports.signature = scriptSignature;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"./bip66":43,"./ops":51,"./push_data":66,"./script_number":68,"./script_signature":69,"./types":71,"buffer":75}],68:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.encode = exports.decode = void 0;
  function decode(buffer, maxLength, minimal) {
    maxLength = maxLength || 4;
    minimal = minimal === undefined ? true : minimal;
    const length = buffer.length;
    if (length === 0) return 0;
    if (length > maxLength) throw new TypeError('Script number overflow');
    if (minimal) {
      if ((buffer[length - 1] & 0x7f) === 0) {
        if (length <= 1 || (buffer[length - 2] & 0x80) === 0)
          throw new Error('Non-minimally encoded script number');
      }
    }
    // 40-bit
    if (length === 5) {
      const a = buffer.readUInt32LE(0);
      const b = buffer.readUInt8(4);
      if (b & 0x80) return -((b & ~0x80) * 0x100000000 + a);
      return b * 0x100000000 + a;
    }
    // 32-bit / 24-bit / 16-bit / 8-bit
    let result = 0;
    for (let i = 0; i < length; ++i) {
      result |= buffer[i] << (8 * i);
    }
    if (buffer[length - 1] & 0x80)
      return -(result & ~(0x80 << (8 * (length - 1))));
    return result;
  }
  exports.decode = decode;
  function scriptNumSize(i) {
    return i > 0x7fffffff
      ? 5
      : i > 0x7fffff
      ? 4
      : i > 0x7fff
      ? 3
      : i > 0x7f
      ? 2
      : i > 0x00
      ? 1
      : 0;
  }
  function encode(_number) {
    let value = Math.abs(_number);
    const size = scriptNumSize(value);
    const buffer = Buffer.allocUnsafe(size);
    const negative = _number < 0;
    for (let i = 0; i < size; ++i) {
      buffer.writeUInt8(value & 0xff, i);
      value >>= 8;
    }
    if (buffer[size - 1] & 0x80) {
      buffer.writeUInt8(negative ? 0x80 : 0x00, size - 1);
    } else if (negative) {
      buffer[size - 1] |= 0x80;
    }
    return buffer;
  }
  exports.encode = encode;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"buffer":75}],69:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.encode = exports.decode = void 0;
  const bip66 = require('./bip66');
  const types = require('./types');
  const { typeforce } = types;
  const ZERO = Buffer.alloc(1, 0);
  function toDER(x) {
    let i = 0;
    while (x[i] === 0) ++i;
    if (i === x.length) return ZERO;
    x = x.slice(i);
    if (x[0] & 0x80) return Buffer.concat([ZERO, x], 1 + x.length);
    return x;
  }
  function fromDER(x) {
    if (x[0] === 0x00) x = x.slice(1);
    const buffer = Buffer.alloc(32, 0);
    const bstart = Math.max(0, 32 - x.length);
    x.copy(buffer, bstart);
    return buffer;
  }
  // BIP62: 1 byte hashType flag (only 0x01, 0x02, 0x03, 0x81, 0x82 and 0x83 are allowed)
  function decode(buffer) {
    const hashType = buffer.readUInt8(buffer.length - 1);
    const hashTypeMod = hashType & ~0x80;
    if (hashTypeMod <= 0 || hashTypeMod >= 4)
      throw new Error('Invalid hashType ' + hashType);
    const decoded = bip66.decode(buffer.slice(0, -1));
    const r = fromDER(decoded.r);
    const s = fromDER(decoded.s);
    const signature = Buffer.concat([r, s], 64);
    return { signature, hashType };
  }
  exports.decode = decode;
  function encode(signature, hashType) {
    typeforce(
      {
        signature: types.BufferN(64),
        hashType: types.UInt8,
      },
      { signature, hashType },
    );
    const hashTypeMod = hashType & ~0x80;
    if (hashTypeMod <= 0 || hashTypeMod >= 4)
      throw new Error('Invalid hashType ' + hashType);
    const hashTypeBuffer = Buffer.allocUnsafe(1);
    hashTypeBuffer.writeUInt8(hashType, 0);
    const r = toDER(signature.slice(0, 32));
    const s = toDER(signature.slice(32, 64));
    return Buffer.concat([bip66.encode(r, s), hashTypeBuffer]);
  }
  exports.encode = encode;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"./bip66":43,"./types":71,"buffer":75}],70:[function(require,module,exports){
  (function (Buffer){(function (){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.Transaction = void 0;
  const bufferutils_1 = require('./bufferutils');
  const bcrypto = require('./crypto');
  const bscript = require('./script');
  const script_1 = require('./script');
  const types = require('./types');
  const { typeforce } = types;
  function varSliceSize(someScript) {
    const length = someScript.length;
    return bufferutils_1.varuint.encodingLength(length) + length;
  }
  function vectorSize(someVector) {
    const length = someVector.length;
    return (
      bufferutils_1.varuint.encodingLength(length) +
      someVector.reduce((sum, witness) => {
        return sum + varSliceSize(witness);
      }, 0)
    );
  }
  const EMPTY_BUFFER = Buffer.allocUnsafe(0);
  const EMPTY_WITNESS = [];
  const ZERO = Buffer.from(
    '0000000000000000000000000000000000000000000000000000000000000000',
    'hex',
  );
  const ONE = Buffer.from(
    '0000000000000000000000000000000000000000000000000000000000000001',
    'hex',
  );
  const VALUE_UINT64_MAX = Buffer.from('ffffffffffffffff', 'hex');
  const BLANK_OUTPUT = {
    script: EMPTY_BUFFER,
    valueBuffer: VALUE_UINT64_MAX,
  };
  function isOutput(out) {
    return out.value !== undefined;
  }
  class Transaction {
    constructor() {
      this.version = 1;
      this.locktime = 0;
      this.ins = [];
      this.outs = [];
    }
    static fromBuffer(buffer, _NO_STRICT) {
      const bufferReader = new bufferutils_1.BufferReader(buffer);
      const tx = new Transaction();
      tx.version = bufferReader.readInt32();
      const marker = bufferReader.readUInt8();
      const flag = bufferReader.readUInt8();
      let hasWitnesses = false;
      if (
        marker === Transaction.ADVANCED_TRANSACTION_MARKER &&
        flag === Transaction.ADVANCED_TRANSACTION_FLAG
      ) {
        hasWitnesses = true;
      } else {
        bufferReader.offset -= 2;
      }
      const vinLen = bufferReader.readVarInt();
      for (let i = 0; i < vinLen; ++i) {
        tx.ins.push({
          hash: bufferReader.readSlice(32),
          index: bufferReader.readUInt32(),
          script: bufferReader.readVarSlice(),
          sequence: bufferReader.readUInt32(),
          witness: EMPTY_WITNESS,
        });
      }
      const voutLen = bufferReader.readVarInt();
      for (let i = 0; i < voutLen; ++i) {
        tx.outs.push({
          value: bufferReader.readUInt64(),
          script: bufferReader.readVarSlice(),
        });
      }
      if (hasWitnesses) {
        for (let i = 0; i < vinLen; ++i) {
          tx.ins[i].witness = bufferReader.readVector();
        }
        // was this pointless?
        if (!tx.hasWitnesses())
          throw new Error('Transaction has superfluous witness data');
      }
      tx.locktime = bufferReader.readUInt32();
      if (_NO_STRICT) return tx;
      if (bufferReader.offset !== buffer.length)
        throw new Error('Transaction has unexpected data');
      return tx;
    }
    static fromHex(hex) {
      return Transaction.fromBuffer(Buffer.from(hex, 'hex'), false);
    }
    static isCoinbaseHash(buffer) {
      typeforce(types.Hash256bit, buffer);
      for (let i = 0; i < 32; ++i) {
        if (buffer[i] !== 0) return false;
      }
      return true;
    }
    isCoinbase() {
      return (
        this.ins.length === 1 && Transaction.isCoinbaseHash(this.ins[0].hash)
      );
    }
    addInput(hash, index, sequence, scriptSig) {
      typeforce(
        types.tuple(
          types.Hash256bit,
          types.UInt32,
          types.maybe(types.UInt32),
          types.maybe(types.Buffer),
        ),
        arguments,
      );
      if (types.Null(sequence)) {
        sequence = Transaction.DEFAULT_SEQUENCE;
      }
      // Add the input and return the input's index
      return (
        this.ins.push({
          hash,
          index,
          script: scriptSig || EMPTY_BUFFER,
          sequence: sequence,
          witness: EMPTY_WITNESS,
        }) - 1
      );
    }
    addOutput(scriptPubKey, value) {
      typeforce(types.tuple(types.Buffer, types.Satoshi), arguments);
      // Add the output and return the output's index
      return (
        this.outs.push({
          script: scriptPubKey,
          value,
        }) - 1
      );
    }
    hasWitnesses() {
      return this.ins.some(x => {
        return x.witness.length !== 0;
      });
    }
    weight() {
      const base = this.byteLength(false);
      const total = this.byteLength(true);
      return base * 3 + total;
    }
    virtualSize() {
      return Math.ceil(this.weight() / 4);
    }
    byteLength(_ALLOW_WITNESS = true) {
      const hasWitnesses = _ALLOW_WITNESS && this.hasWitnesses();
      return (
        (hasWitnesses ? 10 : 8) +
        bufferutils_1.varuint.encodingLength(this.ins.length) +
        bufferutils_1.varuint.encodingLength(this.outs.length) +
        this.ins.reduce((sum, input) => {
          return sum + 40 + varSliceSize(input.script);
        }, 0) +
        this.outs.reduce((sum, output) => {
          return sum + 8 + varSliceSize(output.script);
        }, 0) +
        (hasWitnesses
          ? this.ins.reduce((sum, input) => {
              return sum + vectorSize(input.witness);
            }, 0)
          : 0)
      );
    }
    clone() {
      const newTx = new Transaction();
      newTx.version = this.version;
      newTx.locktime = this.locktime;
      newTx.ins = this.ins.map(txIn => {
        return {
          hash: txIn.hash,
          index: txIn.index,
          script: txIn.script,
          sequence: txIn.sequence,
          witness: txIn.witness,
        };
      });
      newTx.outs = this.outs.map(txOut => {
        return {
          script: txOut.script,
          value: txOut.value,
        };
      });
      return newTx;
    }
    /**
     * Hash transaction for signing a specific input.
     *
     * Bitcoin uses a different hash for each signed transaction input.
     * This method copies the transaction, makes the necessary changes based on the
     * hashType, and then hashes the result.
     * This hash can then be used to sign the provided transaction input.
     */
    hashForSignature(inIndex, prevOutScript, hashType) {
      typeforce(
        types.tuple(types.UInt32, types.Buffer, /* types.UInt8 */ types.Number),
        arguments,
      );
      // https://github.com/bitcoin/bitcoin/blob/master/src/test/sighash_tests.cpp#L29
      if (inIndex >= this.ins.length) return ONE;
      // ignore OP_CODESEPARATOR
      const ourScript = bscript.compile(
        bscript.decompile(prevOutScript).filter(x => {
          return x !== script_1.OPS.OP_CODESEPARATOR;
        }),
      );
      const txTmp = this.clone();
      // SIGHASH_NONE: ignore all outputs? (wildcard payee)
      if ((hashType & 0x1f) === Transaction.SIGHASH_NONE) {
        txTmp.outs = [];
        // ignore sequence numbers (except at inIndex)
        txTmp.ins.forEach((input, i) => {
          if (i === inIndex) return;
          input.sequence = 0;
        });
        // SIGHASH_SINGLE: ignore all outputs, except at the same index?
      } else if ((hashType & 0x1f) === Transaction.SIGHASH_SINGLE) {
        // https://github.com/bitcoin/bitcoin/blob/master/src/test/sighash_tests.cpp#L60
        if (inIndex >= this.outs.length) return ONE;
        // truncate outputs after
        txTmp.outs.length = inIndex + 1;
        // "blank" outputs before
        for (let i = 0; i < inIndex; i++) {
          txTmp.outs[i] = BLANK_OUTPUT;
        }
        // ignore sequence numbers (except at inIndex)
        txTmp.ins.forEach((input, y) => {
          if (y === inIndex) return;
          input.sequence = 0;
        });
      }
      // SIGHASH_ANYONECANPAY: ignore inputs entirely?
      if (hashType & Transaction.SIGHASH_ANYONECANPAY) {
        txTmp.ins = [txTmp.ins[inIndex]];
        txTmp.ins[0].script = ourScript;
        // SIGHASH_ALL: only ignore input scripts
      } else {
        // "blank" others input scripts
        txTmp.ins.forEach(input => {
          input.script = EMPTY_BUFFER;
        });
        txTmp.ins[inIndex].script = ourScript;
      }
      // serialize and hash
      const buffer = Buffer.allocUnsafe(txTmp.byteLength(false) + 4);
      buffer.writeInt32LE(hashType, buffer.length - 4);
      txTmp.__toBuffer(buffer, 0, false);
      return bcrypto.hash256(buffer);
    }
    hashForWitnessV1(inIndex, prevOutScripts, values, hashType, leafHash, annex) {
      // https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#common-signature-message
      typeforce(
        types.tuple(
          types.UInt32,
          typeforce.arrayOf(types.Buffer),
          typeforce.arrayOf(types.Satoshi),
          types.UInt32,
        ),
        arguments,
      );
      if (
        values.length !== this.ins.length ||
        prevOutScripts.length !== this.ins.length
      ) {
        throw new Error('Must supply prevout script and value for all inputs');
      }
      const outputType =
        hashType === Transaction.SIGHASH_DEFAULT
          ? Transaction.SIGHASH_ALL
          : hashType & Transaction.SIGHASH_OUTPUT_MASK;
      const inputType = hashType & Transaction.SIGHASH_INPUT_MASK;
      const isAnyoneCanPay = inputType === Transaction.SIGHASH_ANYONECANPAY;
      const isNone = outputType === Transaction.SIGHASH_NONE;
      const isSingle = outputType === Transaction.SIGHASH_SINGLE;
      let hashPrevouts = EMPTY_BUFFER;
      let hashAmounts = EMPTY_BUFFER;
      let hashScriptPubKeys = EMPTY_BUFFER;
      let hashSequences = EMPTY_BUFFER;
      let hashOutputs = EMPTY_BUFFER;
      if (!isAnyoneCanPay) {
        let bufferWriter = bufferutils_1.BufferWriter.withCapacity(
          36 * this.ins.length,
        );
        this.ins.forEach(txIn => {
          bufferWriter.writeSlice(txIn.hash);
          bufferWriter.writeUInt32(txIn.index);
        });
        hashPrevouts = bcrypto.sha256(bufferWriter.end());
        bufferWriter = bufferutils_1.BufferWriter.withCapacity(
          8 * this.ins.length,
        );
        values.forEach(value => bufferWriter.writeUInt64(value));
        hashAmounts = bcrypto.sha256(bufferWriter.end());
        bufferWriter = bufferutils_1.BufferWriter.withCapacity(
          prevOutScripts.map(varSliceSize).reduce((a, b) => a + b),
        );
        prevOutScripts.forEach(prevOutScript =>
          bufferWriter.writeVarSlice(prevOutScript),
        );
        hashScriptPubKeys = bcrypto.sha256(bufferWriter.end());
        bufferWriter = bufferutils_1.BufferWriter.withCapacity(
          4 * this.ins.length,
        );
        this.ins.forEach(txIn => bufferWriter.writeUInt32(txIn.sequence));
        hashSequences = bcrypto.sha256(bufferWriter.end());
      }
      if (!(isNone || isSingle)) {
        const txOutsSize = this.outs
          .map(output => 8 + varSliceSize(output.script))
          .reduce((a, b) => a + b);
        const bufferWriter = bufferutils_1.BufferWriter.withCapacity(txOutsSize);
        this.outs.forEach(out => {
          bufferWriter.writeUInt64(out.value);
          bufferWriter.writeVarSlice(out.script);
        });
        hashOutputs = bcrypto.sha256(bufferWriter.end());
      } else if (isSingle && inIndex < this.outs.length) {
        const output = this.outs[inIndex];
        const bufferWriter = bufferutils_1.BufferWriter.withCapacity(
          8 + varSliceSize(output.script),
        );
        bufferWriter.writeUInt64(output.value);
        bufferWriter.writeVarSlice(output.script);
        hashOutputs = bcrypto.sha256(bufferWriter.end());
      }
      const spendType = (leafHash ? 2 : 0) + (annex ? 1 : 0);
      // Length calculation from:
      // https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#cite_note-14
      // With extension from:
      // https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki#signature-validation
      const sigMsgSize =
        174 -
        (isAnyoneCanPay ? 49 : 0) -
        (isNone ? 32 : 0) +
        (annex ? 32 : 0) +
        (leafHash ? 37 : 0);
      const sigMsgWriter = bufferutils_1.BufferWriter.withCapacity(sigMsgSize);
      sigMsgWriter.writeUInt8(hashType);
      // Transaction
      sigMsgWriter.writeInt32(this.version);
      sigMsgWriter.writeUInt32(this.locktime);
      sigMsgWriter.writeSlice(hashPrevouts);
      sigMsgWriter.writeSlice(hashAmounts);
      sigMsgWriter.writeSlice(hashScriptPubKeys);
      sigMsgWriter.writeSlice(hashSequences);
      if (!(isNone || isSingle)) {
        sigMsgWriter.writeSlice(hashOutputs);
      }
      // Input
      sigMsgWriter.writeUInt8(spendType);
      if (isAnyoneCanPay) {
        const input = this.ins[inIndex];
        sigMsgWriter.writeSlice(input.hash);
        sigMsgWriter.writeUInt32(input.index);
        sigMsgWriter.writeUInt64(values[inIndex]);
        sigMsgWriter.writeVarSlice(prevOutScripts[inIndex]);
        sigMsgWriter.writeUInt32(input.sequence);
      } else {
        sigMsgWriter.writeUInt32(inIndex);
      }
      if (annex) {
        const bufferWriter = bufferutils_1.BufferWriter.withCapacity(
          varSliceSize(annex),
        );
        bufferWriter.writeVarSlice(annex);
        sigMsgWriter.writeSlice(bcrypto.sha256(bufferWriter.end()));
      }
      // Output
      if (isSingle) {
        sigMsgWriter.writeSlice(hashOutputs);
      }
      // BIP342 extension
      if (leafHash) {
        sigMsgWriter.writeSlice(leafHash);
        sigMsgWriter.writeUInt8(0);
        sigMsgWriter.writeUInt32(0xffffffff);
      }
      // Extra zero byte because:
      // https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#cite_note-19
      return bcrypto.taggedHash(
        'TapSighash',
        Buffer.concat([Buffer.from([0x00]), sigMsgWriter.end()]),
      );
    }
    hashForWitnessV0(inIndex, prevOutScript, value, hashType) {
      typeforce(
        types.tuple(types.UInt32, types.Buffer, types.Satoshi, types.UInt32),
        arguments,
      );
      let tbuffer = Buffer.from([]);
      let bufferWriter;
      let hashOutputs = ZERO;
      let hashPrevouts = ZERO;
      let hashSequence = ZERO;
      if (!(hashType & Transaction.SIGHASH_ANYONECANPAY)) {
        tbuffer = Buffer.allocUnsafe(36 * this.ins.length);
        bufferWriter = new bufferutils_1.BufferWriter(tbuffer, 0);
        this.ins.forEach(txIn => {
          bufferWriter.writeSlice(txIn.hash);
          bufferWriter.writeUInt32(txIn.index);
        });
        hashPrevouts = bcrypto.hash256(tbuffer);
      }
      if (
        !(hashType & Transaction.SIGHASH_ANYONECANPAY) &&
        (hashType & 0x1f) !== Transaction.SIGHASH_SINGLE &&
        (hashType & 0x1f) !== Transaction.SIGHASH_NONE
      ) {
        tbuffer = Buffer.allocUnsafe(4 * this.ins.length);
        bufferWriter = new bufferutils_1.BufferWriter(tbuffer, 0);
        this.ins.forEach(txIn => {
          bufferWriter.writeUInt32(txIn.sequence);
        });
        hashSequence = bcrypto.hash256(tbuffer);
      }
      if (
        (hashType & 0x1f) !== Transaction.SIGHASH_SINGLE &&
        (hashType & 0x1f) !== Transaction.SIGHASH_NONE
      ) {
        const txOutsSize = this.outs.reduce((sum, output) => {
          return sum + 8 + varSliceSize(output.script);
        }, 0);
        tbuffer = Buffer.allocUnsafe(txOutsSize);
        bufferWriter = new bufferutils_1.BufferWriter(tbuffer, 0);
        this.outs.forEach(out => {
          bufferWriter.writeUInt64(out.value);
          bufferWriter.writeVarSlice(out.script);
        });
        hashOutputs = bcrypto.hash256(tbuffer);
      } else if (
        (hashType & 0x1f) === Transaction.SIGHASH_SINGLE &&
        inIndex < this.outs.length
      ) {
        const output = this.outs[inIndex];
        tbuffer = Buffer.allocUnsafe(8 + varSliceSize(output.script));
        bufferWriter = new bufferutils_1.BufferWriter(tbuffer, 0);
        bufferWriter.writeUInt64(output.value);
        bufferWriter.writeVarSlice(output.script);
        hashOutputs = bcrypto.hash256(tbuffer);
      }
      tbuffer = Buffer.allocUnsafe(156 + varSliceSize(prevOutScript));
      bufferWriter = new bufferutils_1.BufferWriter(tbuffer, 0);
      const input = this.ins[inIndex];
      bufferWriter.writeInt32(this.version);
      bufferWriter.writeSlice(hashPrevouts);
      bufferWriter.writeSlice(hashSequence);
      bufferWriter.writeSlice(input.hash);
      bufferWriter.writeUInt32(input.index);
      bufferWriter.writeVarSlice(prevOutScript);
      bufferWriter.writeUInt64(value);
      bufferWriter.writeUInt32(input.sequence);
      bufferWriter.writeSlice(hashOutputs);
      bufferWriter.writeUInt32(this.locktime);
      bufferWriter.writeUInt32(hashType);
      return bcrypto.hash256(tbuffer);
    }
    getHash(forWitness) {
      // wtxid for coinbase is always 32 bytes of 0x00
      if (forWitness && this.isCoinbase()) return Buffer.alloc(32, 0);
      return bcrypto.hash256(this.__toBuffer(undefined, undefined, forWitness));
    }
    getId() {
      // transaction hash's are displayed in reverse order
      return (0, bufferutils_1.reverseBuffer)(this.getHash(false)).toString(
        'hex',
      );
    }
    toBuffer(buffer, initialOffset) {
      return this.__toBuffer(buffer, initialOffset, true);
    }
    toHex() {
      return this.toBuffer(undefined, undefined).toString('hex');
    }
    setInputScript(index, scriptSig) {
      typeforce(types.tuple(types.Number, types.Buffer), arguments);
      this.ins[index].script = scriptSig;
    }
    setWitness(index, witness) {
      typeforce(types.tuple(types.Number, [types.Buffer]), arguments);
      this.ins[index].witness = witness;
    }
    __toBuffer(buffer, initialOffset, _ALLOW_WITNESS = false) {
      if (!buffer) buffer = Buffer.allocUnsafe(this.byteLength(_ALLOW_WITNESS));
      const bufferWriter = new bufferutils_1.BufferWriter(
        buffer,
        initialOffset || 0,
      );
      bufferWriter.writeInt32(this.version);
      const hasWitnesses = _ALLOW_WITNESS && this.hasWitnesses();
      if (hasWitnesses) {
        bufferWriter.writeUInt8(Transaction.ADVANCED_TRANSACTION_MARKER);
        bufferWriter.writeUInt8(Transaction.ADVANCED_TRANSACTION_FLAG);
      }
      bufferWriter.writeVarInt(this.ins.length);
      this.ins.forEach(txIn => {
        bufferWriter.writeSlice(txIn.hash);
        bufferWriter.writeUInt32(txIn.index);
        bufferWriter.writeVarSlice(txIn.script);
        bufferWriter.writeUInt32(txIn.sequence);
      });
      bufferWriter.writeVarInt(this.outs.length);
      this.outs.forEach(txOut => {
        if (isOutput(txOut)) {
          bufferWriter.writeUInt64(txOut.value);
        } else {
          bufferWriter.writeSlice(txOut.valueBuffer);
        }
        bufferWriter.writeVarSlice(txOut.script);
      });
      if (hasWitnesses) {
        this.ins.forEach(input => {
          bufferWriter.writeVector(input.witness);
        });
      }
      bufferWriter.writeUInt32(this.locktime);
      // avoid slicing unless necessary
      if (initialOffset !== undefined)
        return buffer.slice(initialOffset, bufferWriter.offset);
      return buffer;
    }
  }
  exports.Transaction = Transaction;
  Transaction.DEFAULT_SEQUENCE = 0xffffffff;
  Transaction.SIGHASH_DEFAULT = 0x00;
  Transaction.SIGHASH_ALL = 0x01;
  Transaction.SIGHASH_NONE = 0x02;
  Transaction.SIGHASH_SINGLE = 0x03;
  Transaction.SIGHASH_ANYONECANPAY = 0x80;
  Transaction.SIGHASH_OUTPUT_MASK = 0x03;
  Transaction.SIGHASH_INPUT_MASK = 0x80;
  Transaction.ADVANCED_TRANSACTION_MARKER = 0x00;
  Transaction.ADVANCED_TRANSACTION_FLAG = 0x01;
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"./bufferutils":45,"./crypto":46,"./script":67,"./types":71,"buffer":75}],71:[function(require,module,exports){
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.oneOf =
    exports.Null =
    exports.BufferN =
    exports.Function =
    exports.UInt32 =
    exports.UInt8 =
    exports.tuple =
    exports.maybe =
    exports.Hex =
    exports.Buffer =
    exports.String =
    exports.Boolean =
    exports.Array =
    exports.Number =
    exports.Hash256bit =
    exports.Hash160bit =
    exports.Buffer256bit =
    exports.isTaptree =
    exports.isTapleaf =
    exports.TAPLEAF_VERSION_MASK =
    exports.Network =
    exports.ECPoint =
    exports.Satoshi =
    exports.Signer =
    exports.BIP32Path =
    exports.UInt31 =
    exports.isPoint =
    exports.typeforce =
      void 0;
  const buffer_1 = require('buffer');
  exports.typeforce = require('typeforce');
  const ZERO32 = buffer_1.Buffer.alloc(32, 0);
  const EC_P = buffer_1.Buffer.from(
    'fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f',
    'hex',
  );
  function isPoint(p) {
    if (!buffer_1.Buffer.isBuffer(p)) return false;
    if (p.length < 33) return false;
    const t = p[0];
    const x = p.slice(1, 33);
    if (x.compare(ZERO32) === 0) return false;
    if (x.compare(EC_P) >= 0) return false;
    if ((t === 0x02 || t === 0x03) && p.length === 33) {
      return true;
    }
    const y = p.slice(33);
    if (y.compare(ZERO32) === 0) return false;
    if (y.compare(EC_P) >= 0) return false;
    if (t === 0x04 && p.length === 65) return true;
    return false;
  }
  exports.isPoint = isPoint;
  const UINT31_MAX = Math.pow(2, 31) - 1;
  function UInt31(value) {
    return exports.typeforce.UInt32(value) && value <= UINT31_MAX;
  }
  exports.UInt31 = UInt31;
  function BIP32Path(value) {
    return (
      exports.typeforce.String(value) && !!value.match(/^(m\/)?(\d+'?\/)*\d+'?$/)
    );
  }
  exports.BIP32Path = BIP32Path;
  BIP32Path.toJSON = () => {
    return 'BIP32 derivation path';
  };
  function Signer(obj) {
    return (
      (exports.typeforce.Buffer(obj.publicKey) ||
        typeof obj.getPublicKey === 'function') &&
      typeof obj.sign === 'function'
    );
  }
  exports.Signer = Signer;
  const SATOSHI_MAX = 21 * 1e14;
  function Satoshi(value) {
    return exports.typeforce.UInt53(value) && value <= SATOSHI_MAX;
  }
  exports.Satoshi = Satoshi;
  // external dependent types
  exports.ECPoint = exports.typeforce.quacksLike('Point');
  // exposed, external API
  exports.Network = exports.typeforce.compile({
    messagePrefix: exports.typeforce.oneOf(
      exports.typeforce.Buffer,
      exports.typeforce.String,
    ),
    bip32: {
      public: exports.typeforce.UInt32,
      private: exports.typeforce.UInt32,
    },
    pubKeyHash: exports.typeforce.UInt8,
    scriptHash: exports.typeforce.UInt8,
    wif: exports.typeforce.UInt8,
  });
  exports.TAPLEAF_VERSION_MASK = 0xfe;
  function isTapleaf(o) {
    if (!o || !('output' in o)) return false;
    if (!buffer_1.Buffer.isBuffer(o.output)) return false;
    if (o.version !== undefined)
      return (o.version & exports.TAPLEAF_VERSION_MASK) === o.version;
    return true;
  }
  exports.isTapleaf = isTapleaf;
  function isTaptree(scriptTree) {
    if (!(0, exports.Array)(scriptTree)) return isTapleaf(scriptTree);
    if (scriptTree.length !== 2) return false;
    return scriptTree.every(t => isTaptree(t));
  }
  exports.isTaptree = isTaptree;
  exports.Buffer256bit = exports.typeforce.BufferN(32);
  exports.Hash160bit = exports.typeforce.BufferN(20);
  exports.Hash256bit = exports.typeforce.BufferN(32);
  exports.Number = exports.typeforce.Number;
  exports.Array = exports.typeforce.Array;
  exports.Boolean = exports.typeforce.Boolean;
  exports.String = exports.typeforce.String;
  exports.Buffer = exports.typeforce.Buffer;
  exports.Hex = exports.typeforce.Hex;
  exports.maybe = exports.typeforce.maybe;
  exports.tuple = exports.typeforce.tuple;
  exports.UInt8 = exports.typeforce.UInt8;
  exports.UInt32 = exports.typeforce.UInt32;
  exports.Function = exports.typeforce.Function;
  exports.BufferN = exports.typeforce.BufferN;
  exports.Null = exports.typeforce.Null;
  exports.oneOf = exports.typeforce.oneOf;
  
  },{"buffer":75,"typeforce":81}],72:[function(require,module,exports){
  const basex = require('base-x')
  const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
  
  module.exports = basex(ALPHABET)
  
  },{"base-x":9}],73:[function(require,module,exports){
  'use strict'
  
  var base58 = require('bs58')
  
  module.exports = function (checksumFn) {
    // Encode a buffer as a base58-check encoded string
    function encode (payload) {
      var payloadU8 = Uint8Array.from(payload)
      var checksum = checksumFn(payloadU8)
      var length = payloadU8.length + 4
      var both = new Uint8Array(length)
      both.set(payloadU8, 0)
      both.set(checksum.subarray(0, 4), payloadU8.length)
      return base58.encode(both, length)
    }
  
    function decodeRaw (buffer) {
      var payload = buffer.slice(0, -4)
      var checksum = buffer.slice(-4)
      var newChecksum = checksumFn(payload)
  
      if (checksum[0] ^ newChecksum[0] |
          checksum[1] ^ newChecksum[1] |
          checksum[2] ^ newChecksum[2] |
          checksum[3] ^ newChecksum[3]) return
  
      return payload
    }
  
    // Decode a base58-check encoded string to a buffer, no result if checksum is wrong
    function decodeUnsafe (string) {
      var buffer = base58.decodeUnsafe(string)
      if (!buffer) return
  
      return decodeRaw(buffer)
    }
  
    function decode (string) {
      var buffer = base58.decode(string)
      var payload = decodeRaw(buffer, checksumFn)
      if (!payload) throw new Error('Invalid checksum')
      return payload
    }
  
    return {
      encode: encode,
      decode: decode,
      decodeUnsafe: decodeUnsafe
    }
  }
  
  },{"bs58":72}],74:[function(require,module,exports){
  'use strict'
  
  var { sha256 } = require('@noble/hashes/sha256')
  var bs58checkBase = require('./base')
  
  // SHA256(SHA256(buffer))
  function sha256x2 (buffer) {
    return sha256(sha256(buffer))
  }
  
  module.exports = bs58checkBase(sha256x2)
  
  },{"./base":73,"@noble/hashes/sha256":7}],75:[function(require,module,exports){
  (function (Buffer){(function (){
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  /* eslint-disable no-proto */
  
  'use strict'
  
  var base64 = require('base64-js')
  var ieee754 = require('ieee754')
  
  window.__Buffer = Buffer
  exports.Buffer = Buffer
  exports.SlowBuffer = SlowBuffer
  exports.INSPECT_MAX_BYTES = 50
  
  var K_MAX_LENGTH = 0x7fffffff
  exports.kMaxLength = K_MAX_LENGTH
  
  /**
   * If `Buffer.TYPED_ARRAY_SUPPORT`:
   *   === true    Use Uint8Array implementation (fastest)
   *   === false   Print warning and recommend using `buffer` v4.x which has an Object
   *               implementation (most compatible, even IE6)
   *
   * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
   * Opera 11.6+, iOS 4.2+.
   *
   * We report that the browser does not support typed arrays if the are not subclassable
   * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
   * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
   * for __proto__ and has a buggy typed array implementation.
   */
  Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()
  
  if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
      typeof console.error === 'function') {
    console.error(
      'This browser lacks typed array (Uint8Array) support which is required by ' +
      '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
    )
  }
  
  function typedArraySupport () {
    // Can typed array instances can be augmented?
    try {
      var arr = new Uint8Array(1)
      arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
      return arr.foo() === 42
    } catch (e) {
      return false
    }
  }
  
  Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function () {
      if (!Buffer.isBuffer(this)) return undefined
      return this.buffer
    }
  })
  
  Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function () {
      if (!Buffer.isBuffer(this)) return undefined
      return this.byteOffset
    }
  })
  
  function createBuffer (length) {
    if (length > K_MAX_LENGTH) {
      throw new RangeError('The value "' + length + '" is invalid for option "size"')
    }
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length)
    buf.__proto__ = Buffer.prototype
    return buf
  }
  
  /**
   * The Buffer constructor returns instances of `Uint8Array` that have their
   * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
   * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
   * and the `Uint8Array` methods. Square bracket notation works as expected -- it
   * returns a single octet.
   *
   * The `Uint8Array` prototype remains unmodified.
   */
  
  function Buffer (arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
      if (typeof encodingOrOffset === 'string') {
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        )
      }
      return allocUnsafe(arg)
    }
    return from(arg, encodingOrOffset, length)
  }
  
  // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
  if (typeof Symbol !== 'undefined' && Symbol.species != null &&
      Buffer[Symbol.species] === Buffer) {
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true,
      enumerable: false,
      writable: false
    })
  }
  
  Buffer.poolSize = 8192 // not used by this implementation
  
  function from (value, encodingOrOffset, length) {
    if (typeof value === 'string') {
      return fromString(value, encodingOrOffset)
    }
  
    if (ArrayBuffer.isView(value)) {
      return fromArrayLike(value)
    }
  
    if (value == null) {
      throw TypeError(
        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
        'or Array-like Object. Received type ' + (typeof value)
      )
    }
  
    if (isInstance(value, ArrayBuffer) ||
        (value && isInstance(value.buffer, ArrayBuffer))) {
      return fromArrayBuffer(value, encodingOrOffset, length)
    }
  
    if (typeof value === 'number') {
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      )
    }
  
    var valueOf = value.valueOf && value.valueOf()
    if (valueOf != null && valueOf !== value) {
      return Buffer.from(valueOf, encodingOrOffset, length)
    }
  
    var b = fromObject(value)
    if (b) return b
  
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
        typeof value[Symbol.toPrimitive] === 'function') {
      return Buffer.from(
        value[Symbol.toPrimitive]('string'), encodingOrOffset, length
      )
    }
  
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }
  
  /**
   * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
   * if value is a number.
   * Buffer.from(str[, encoding])
   * Buffer.from(array)
   * Buffer.from(buffer)
   * Buffer.from(arrayBuffer[, byteOffset[, length]])
   **/
  Buffer.from = function (value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length)
  }
  
  // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
  // https://github.com/feross/buffer/pull/148
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  
  function assertSize (size) {
    if (typeof size !== 'number') {
      throw new TypeError('"size" argument must be of type number')
    } else if (size < 0) {
      throw new RangeError('The value "' + size + '" is invalid for option "size"')
    }
  }
  
  function alloc (size, fill, encoding) {
    assertSize(size)
    if (size <= 0) {
      return createBuffer(size)
    }
    if (fill !== undefined) {
      // Only pay attention to encoding if it's a string. This
      // prevents accidentally sending in a number that would
      // be interpretted as a start offset.
      return typeof encoding === 'string'
        ? createBuffer(size).fill(fill, encoding)
        : createBuffer(size).fill(fill)
    }
    return createBuffer(size)
  }
  
  /**
   * Creates a new filled Buffer instance.
   * alloc(size[, fill[, encoding]])
   **/
  Buffer.alloc = function (size, fill, encoding) {
    return alloc(size, fill, encoding)
  }
  
  function allocUnsafe (size) {
    assertSize(size)
    return createBuffer(size < 0 ? 0 : checked(size) | 0)
  }
  
  /**
   * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
   * */
  Buffer.allocUnsafe = function (size) {
    return allocUnsafe(size)
  }
  /**
   * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
   */
  Buffer.allocUnsafeSlow = function (size) {
    return allocUnsafe(size)
  }
  
  function fromString (string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
      encoding = 'utf8'
    }
  
    if (!Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  
    var length = byteLength(string, encoding) | 0
    var buf = createBuffer(length)
  
    var actual = buf.write(string, encoding)
  
    if (actual !== length) {
      // Writing a hex string, for example, that contains invalid characters will
      // cause everything after the first invalid character to be ignored. (e.g.
      // 'abxxcd' will be treated as 'ab')
      buf = buf.slice(0, actual)
    }
  
    return buf
  }
  
  function fromArrayLike (array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0
    var buf = createBuffer(length)
    for (var i = 0; i < length; i += 1) {
      buf[i] = array[i] & 255
    }
    return buf
  }
  
  function fromArrayBuffer (array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('"offset" is outside of buffer bounds')
    }
  
    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('"length" is outside of buffer bounds')
    }
  
    var buf
    if (byteOffset === undefined && length === undefined) {
      buf = new Uint8Array(array)
    } else if (length === undefined) {
      buf = new Uint8Array(array, byteOffset)
    } else {
      buf = new Uint8Array(array, byteOffset, length)
    }
  
    // Return an augmented `Uint8Array` instance
    buf.__proto__ = Buffer.prototype
    return buf
  }
  
  function fromObject (obj) {
    if (Buffer.isBuffer(obj)) {
      var len = checked(obj.length) | 0
      var buf = createBuffer(len)
  
      if (buf.length === 0) {
        return buf
      }
  
      obj.copy(buf, 0, 0, len)
      return buf
    }
  
    if (obj.length !== undefined) {
      if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
        return createBuffer(0)
      }
      return fromArrayLike(obj)
    }
  
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(obj.data)
    }
  }
  
  function checked (length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                           'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
    }
    return length | 0
  }
  
  function SlowBuffer (length) {
    if (+length != length) { // eslint-disable-line eqeqeq
      length = 0
    }
    return Buffer.alloc(+length)
  }
  
  Buffer.isBuffer = function isBuffer (b) {
    return b != null && b._isBuffer === true &&
      b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
  }
  
  Buffer.compare = function compare (a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      )
    }
  
    if (a === b) return 0
  
    var x = a.length
    var y = b.length
  
    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i]
        y = b[i]
        break
      }
    }
  
    if (x < y) return -1
    if (y < x) return 1
    return 0
  }
  
  Buffer.isEncoding = function isEncoding (encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true
      default:
        return false
    }
  }
  
  Buffer.concat = function concat (list, length) {
    if (!Array.isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
  
    if (list.length === 0) {
      return Buffer.alloc(0)
    }
  
    var i
    if (length === undefined) {
      length = 0
      for (i = 0; i < list.length; ++i) {
        length += list[i].length
      }
    }
  
    var buffer = Buffer.allocUnsafe(length)
    var pos = 0
    for (i = 0; i < list.length; ++i) {
      var buf = list[i]
      if (isInstance(buf, Uint8Array)) {
        buf = Buffer.from(buf)
      }
      if (!Buffer.isBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }
      buf.copy(buffer, pos)
      pos += buf.length
    }
    return buffer
  }
  
  function byteLength (string, encoding) {
    if (Buffer.isBuffer(string)) {
      return string.length
    }
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
      return string.byteLength
    }
    if (typeof string !== 'string') {
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
        'Received type ' + typeof string
      )
    }
  
    var len = string.length
    var mustMatch = (arguments.length > 2 && arguments[2] === true)
    if (!mustMatch && len === 0) return 0
  
    // Use a for loop to avoid recursion
    var loweredCase = false
    for (;;) {
      switch (encoding) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return len
        case 'utf8':
        case 'utf-8':
          return utf8ToBytes(string).length
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2
        case 'hex':
          return len >>> 1
        case 'base64':
          return base64ToBytes(string).length
        default:
          if (loweredCase) {
            return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
          }
          encoding = ('' + encoding).toLowerCase()
          loweredCase = true
      }
    }
  }
  Buffer.byteLength = byteLength
  
  function slowToString (encoding, start, end) {
    var loweredCase = false
  
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
  
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) {
      start = 0
    }
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) {
      return ''
    }
  
    if (end === undefined || end > this.length) {
      end = this.length
    }
  
    if (end <= 0) {
      return ''
    }
  
    // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0
    start >>>= 0
  
    if (end <= start) {
      return ''
    }
  
    if (!encoding) encoding = 'utf8'
  
    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end)
  
        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end)
  
        case 'ascii':
          return asciiSlice(this, start, end)
  
        case 'latin1':
        case 'binary':
          return latin1Slice(this, start, end)
  
        case 'base64':
          return base64Slice(this, start, end)
  
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end)
  
        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
          encoding = (encoding + '').toLowerCase()
          loweredCase = true
      }
    }
  }
  
  // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
  // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
  // reliably in a browserify context because there could be multiple different
  // copies of the 'buffer' package in use. This method works even for Buffer
  // instances that were created from another copy of the `buffer` package.
  // See: https://github.com/feross/buffer/issues/154
  Buffer.prototype._isBuffer = true
  
  function swap (b, n, m) {
    var i = b[n]
    b[n] = b[m]
    b[m] = i
  }
  
  Buffer.prototype.swap16 = function swap16 () {
    var len = this.length
    if (len % 2 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 16-bits')
    }
    for (var i = 0; i < len; i += 2) {
      swap(this, i, i + 1)
    }
    return this
  }
  
  Buffer.prototype.swap32 = function swap32 () {
    var len = this.length
    if (len % 4 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 32-bits')
    }
    for (var i = 0; i < len; i += 4) {
      swap(this, i, i + 3)
      swap(this, i + 1, i + 2)
    }
    return this
  }
  
  Buffer.prototype.swap64 = function swap64 () {
    var len = this.length
    if (len % 8 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 64-bits')
    }
    for (var i = 0; i < len; i += 8) {
      swap(this, i, i + 7)
      swap(this, i + 1, i + 6)
      swap(this, i + 2, i + 5)
      swap(this, i + 3, i + 4)
    }
    return this
  }
  
  Buffer.prototype.toString = function toString () {
    var length = this.length
    if (length === 0) return ''
    if (arguments.length === 0) return utf8Slice(this, 0, length)
    return slowToString.apply(this, arguments)
  }
  
  Buffer.prototype.toLocaleString = Buffer.prototype.toString
  
  Buffer.prototype.equals = function equals (b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
    if (this === b) return true
    return Buffer.compare(this, b) === 0
  }
  
  Buffer.prototype.inspect = function inspect () {
    var str = ''
    var max = exports.INSPECT_MAX_BYTES
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
    if (this.length > max) str += ' ... '
    return '<Buffer ' + str + '>'
  }
  
  Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) {
      target = Buffer.from(target, target.offset, target.byteLength)
    }
    if (!Buffer.isBuffer(target)) {
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. ' +
        'Received type ' + (typeof target)
      )
    }
  
    if (start === undefined) {
      start = 0
    }
    if (end === undefined) {
      end = target ? target.length : 0
    }
    if (thisStart === undefined) {
      thisStart = 0
    }
    if (thisEnd === undefined) {
      thisEnd = this.length
    }
  
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError('out of range index')
    }
  
    if (thisStart >= thisEnd && start >= end) {
      return 0
    }
    if (thisStart >= thisEnd) {
      return -1
    }
    if (start >= end) {
      return 1
    }
  
    start >>>= 0
    end >>>= 0
    thisStart >>>= 0
    thisEnd >>>= 0
  
    if (this === target) return 0
  
    var x = thisEnd - thisStart
    var y = end - start
    var len = Math.min(x, y)
  
    var thisCopy = this.slice(thisStart, thisEnd)
    var targetCopy = target.slice(start, end)
  
    for (var i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i]
        y = targetCopy[i]
        break
      }
    }
  
    if (x < y) return -1
    if (y < x) return 1
    return 0
  }
  
  // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
  // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
  //
  // Arguments:
  // - buffer - a Buffer to search
  // - val - a string, Buffer, or number
  // - byteOffset - an index into `buffer`; will be clamped to an int32
  // - encoding - an optional encoding, relevant is val is a string
  // - dir - true for indexOf, false for lastIndexOf
  function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1
  
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
      encoding = byteOffset
      byteOffset = 0
    } else if (byteOffset > 0x7fffffff) {
      byteOffset = 0x7fffffff
    } else if (byteOffset < -0x80000000) {
      byteOffset = -0x80000000
    }
    byteOffset = +byteOffset // Coerce to Number.
    if (numberIsNaN(byteOffset)) {
      // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
      byteOffset = dir ? 0 : (buffer.length - 1)
    }
  
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset
    if (byteOffset >= buffer.length) {
      if (dir) return -1
      else byteOffset = buffer.length - 1
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0
      else return -1
    }
  
    // Normalize val
    if (typeof val === 'string') {
      val = Buffer.from(val, encoding)
    }
  
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
      // Special case: looking for empty string/buffer always fails
      if (val.length === 0) {
        return -1
      }
      return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
    } else if (typeof val === 'number') {
      val = val & 0xFF // Search for a byte value [0-255]
      if (typeof Uint8Array.prototype.indexOf === 'function') {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
        }
      }
      return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
    }
  
    throw new TypeError('val must be string, number or Buffer')
  }
  
  function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
    var indexSize = 1
    var arrLength = arr.length
    var valLength = val.length
  
    if (encoding !== undefined) {
      encoding = String(encoding).toLowerCase()
      if (encoding === 'ucs2' || encoding === 'ucs-2' ||
          encoding === 'utf16le' || encoding === 'utf-16le') {
        if (arr.length < 2 || val.length < 2) {
          return -1
        }
        indexSize = 2
        arrLength /= 2
        valLength /= 2
        byteOffset /= 2
      }
    }
  
    function read (buf, i) {
      if (indexSize === 1) {
        return buf[i]
      } else {
        return buf.readUInt16BE(i * indexSize)
      }
    }
  
    var i
    if (dir) {
      var foundIndex = -1
      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i
          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
        } else {
          if (foundIndex !== -1) i -= i - foundIndex
          foundIndex = -1
        }
      }
    } else {
      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
      for (i = byteOffset; i >= 0; i--) {
        var found = true
        for (var j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false
            break
          }
        }
        if (found) return i
      }
    }
  
    return -1
  }
  
  Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1
  }
  
  Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
  }
  
  Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
  }
  
  function hexWrite (buf, string, offset, length) {
    offset = Number(offset) || 0
    var remaining = buf.length - offset
    if (!length) {
      length = remaining
    } else {
      length = Number(length)
      if (length > remaining) {
        length = remaining
      }
    }
  
    var strLen = string.length
  
    if (length > strLen / 2) {
      length = strLen / 2
    }
    for (var i = 0; i < length; ++i) {
      var parsed = parseInt(string.substr(i * 2, 2), 16)
      if (numberIsNaN(parsed)) return i
      buf[offset + i] = parsed
    }
    return i
  }
  
  function utf8Write (buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
  }
  
  function asciiWrite (buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length)
  }
  
  function latin1Write (buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length)
  }
  
  function base64Write (buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length)
  }
  
  function ucs2Write (buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
  }
  
  Buffer.prototype.write = function write (string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
      encoding = 'utf8'
      length = this.length
      offset = 0
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset
      length = this.length
      offset = 0
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
      offset = offset >>> 0
      if (isFinite(length)) {
        length = length >>> 0
        if (encoding === undefined) encoding = 'utf8'
      } else {
        encoding = length
        length = undefined
      }
    } else {
      throw new Error(
        'Buffer.write(string, encoding, offset[, length]) is no longer supported'
      )
    }
  
    var remaining = this.length - offset
    if (length === undefined || length > remaining) length = remaining
  
    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
      throw new RangeError('Attempt to write outside buffer bounds')
    }
  
    if (!encoding) encoding = 'utf8'
  
    var loweredCase = false
    for (;;) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length)
  
        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length)
  
        case 'ascii':
          return asciiWrite(this, string, offset, length)
  
        case 'latin1':
        case 'binary':
          return latin1Write(this, string, offset, length)
  
        case 'base64':
          // Warning: maxLength not taken into account in base64Write
          return base64Write(this, string, offset, length)
  
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length)
  
        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
          encoding = ('' + encoding).toLowerCase()
          loweredCase = true
      }
    }
  }
  
  Buffer.prototype.toJSON = function toJSON () {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    }
  }
  
  function base64Slice (buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf)
    } else {
      return base64.fromByteArray(buf.slice(start, end))
    }
  }
  
  function utf8Slice (buf, start, end) {
    end = Math.min(buf.length, end)
    var res = []
  
    var i = start
    while (i < end) {
      var firstByte = buf[i]
      var codePoint = null
      var bytesPerSequence = (firstByte > 0xEF) ? 4
        : (firstByte > 0xDF) ? 3
          : (firstByte > 0xBF) ? 2
            : 1
  
      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint
  
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte
            }
            break
          case 2:
            secondByte = buf[i + 1]
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint
              }
            }
            break
          case 3:
            secondByte = buf[i + 1]
            thirdByte = buf[i + 2]
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint
              }
            }
            break
          case 4:
            secondByte = buf[i + 1]
            thirdByte = buf[i + 2]
            fourthByte = buf[i + 3]
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint
              }
            }
        }
      }
  
      if (codePoint === null) {
        // we did not generate a valid codePoint so insert a
        // replacement char (U+FFFD) and advance only 1 byte
        codePoint = 0xFFFD
        bytesPerSequence = 1
      } else if (codePoint > 0xFFFF) {
        // encode to utf16 (surrogate pair dance)
        codePoint -= 0x10000
        res.push(codePoint >>> 10 & 0x3FF | 0xD800)
        codePoint = 0xDC00 | codePoint & 0x3FF
      }
  
      res.push(codePoint)
      i += bytesPerSequence
    }
  
    return decodeCodePointsArray(res)
  }
  
  // Based on http://stackoverflow.com/a/22747272/680742, the browser with
  // the lowest limit is Chrome, with 0x10000 args.
  // We go 1 magnitude less, for safety
  var MAX_ARGUMENTS_LENGTH = 0x1000
  
  function decodeCodePointsArray (codePoints) {
    var len = codePoints.length
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    }
  
    // Decode in chunks to avoid "call stack size exceeded".
    var res = ''
    var i = 0
    while (i < len) {
      res += String.fromCharCode.apply(
        String,
        codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
      )
    }
    return res
  }
  
  function asciiSlice (buf, start, end) {
    var ret = ''
    end = Math.min(buf.length, end)
  
    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 0x7F)
    }
    return ret
  }
  
  function latin1Slice (buf, start, end) {
    var ret = ''
    end = Math.min(buf.length, end)
  
    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i])
    }
    return ret
  }
  
  function hexSlice (buf, start, end) {
    var len = buf.length
  
    if (!start || start < 0) start = 0
    if (!end || end < 0 || end > len) end = len
  
    var out = ''
    for (var i = start; i < end; ++i) {
      out += toHex(buf[i])
    }
    return out
  }
  
  function utf16leSlice (buf, start, end) {
    var bytes = buf.slice(start, end)
    var res = ''
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
    }
    return res
  }
  
  Buffer.prototype.slice = function slice (start, end) {
    var len = this.length
    start = ~~start
    end = end === undefined ? len : ~~end
  
    if (start < 0) {
      start += len
      if (start < 0) start = 0
    } else if (start > len) {
      start = len
    }
  
    if (end < 0) {
      end += len
      if (end < 0) end = 0
    } else if (end > len) {
      end = len
    }
  
    if (end < start) end = start
  
    var newBuf = this.subarray(start, end)
    // Return an augmented `Uint8Array` instance
    newBuf.__proto__ = Buffer.prototype
    return newBuf
  }
  
  /*
   * Need to make sure that buffer isn't trying to write out of bounds.
   */
  function checkOffset (offset, ext, length) {
    if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
  }
  
  Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
    offset = offset >>> 0
    byteLength = byteLength >>> 0
    if (!noAssert) checkOffset(offset, byteLength, this.length)
  
    var val = this[offset]
    var mul = 1
    var i = 0
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul
    }
  
    return val
  }
  
  Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
    offset = offset >>> 0
    byteLength = byteLength >>> 0
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length)
    }
  
    var val = this[offset + --byteLength]
    var mul = 1
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul
    }
  
    return val
  }
  
  Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 1, this.length)
    return this[offset]
  }
  
  Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 2, this.length)
    return this[offset] | (this[offset + 1] << 8)
  }
  
  Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 2, this.length)
    return (this[offset] << 8) | this[offset + 1]
  }
  
  Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 4, this.length)
  
    return ((this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16)) +
        (this[offset + 3] * 0x1000000)
  }
  
  Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 4, this.length)
  
    return (this[offset] * 0x1000000) +
      ((this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      this[offset + 3])
  }
  
  Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
    offset = offset >>> 0
    byteLength = byteLength >>> 0
    if (!noAssert) checkOffset(offset, byteLength, this.length)
  
    var val = this[offset]
    var mul = 1
    var i = 0
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul
    }
    mul *= 0x80
  
    if (val >= mul) val -= Math.pow(2, 8 * byteLength)
  
    return val
  }
  
  Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
    offset = offset >>> 0
    byteLength = byteLength >>> 0
    if (!noAssert) checkOffset(offset, byteLength, this.length)
  
    var i = byteLength
    var mul = 1
    var val = this[offset + --i]
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul
    }
    mul *= 0x80
  
    if (val >= mul) val -= Math.pow(2, 8 * byteLength)
  
    return val
  }
  
  Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 1, this.length)
    if (!(this[offset] & 0x80)) return (this[offset])
    return ((0xff - this[offset] + 1) * -1)
  }
  
  Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 2, this.length)
    var val = this[offset] | (this[offset + 1] << 8)
    return (val & 0x8000) ? val | 0xFFFF0000 : val
  }
  
  Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 2, this.length)
    var val = this[offset + 1] | (this[offset] << 8)
    return (val & 0x8000) ? val | 0xFFFF0000 : val
  }
  
  Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 4, this.length)
  
    return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16) |
      (this[offset + 3] << 24)
  }
  
  Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 4, this.length)
  
    return (this[offset] << 24) |
      (this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      (this[offset + 3])
  }
  
  Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 4, this.length)
    return ieee754.read(this, offset, true, 23, 4)
  }
  
  Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 4, this.length)
    return ieee754.read(this, offset, false, 23, 4)
  }
  
  Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 8, this.length)
    return ieee754.read(this, offset, true, 52, 8)
  }
  
  Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 8, this.length)
    return ieee754.read(this, offset, false, 52, 8)
  }
  
  function checkInt (buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
  }
  
  Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
    value = +value
    offset = offset >>> 0
    byteLength = byteLength >>> 0
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1
      checkInt(this, value, offset, byteLength, maxBytes, 0)
    }
  
    var mul = 1
    var i = 0
    this[offset] = value & 0xFF
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF
    }
  
    return offset + byteLength
  }
  
  Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
    value = +value
    offset = offset >>> 0
    byteLength = byteLength >>> 0
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1
      checkInt(this, value, offset, byteLength, maxBytes, 0)
    }
  
    var i = byteLength - 1
    var mul = 1
    this[offset + i] = value & 0xFF
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF
    }
  
    return offset + byteLength
  }
  
  Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
    this[offset] = (value & 0xff)
    return offset + 1
  }
  
  Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    return offset + 2
  }
  
  Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
    return offset + 2
  }
  
  Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
    return offset + 4
  }
  
  Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
    return offset + 4
  }
  
  Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) {
      var limit = Math.pow(2, (8 * byteLength) - 1)
  
      checkInt(this, value, offset, byteLength, limit - 1, -limit)
    }
  
    var i = 0
    var mul = 1
    var sub = 0
    this[offset] = value & 0xFF
    while (++i < byteLength && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
    }
  
    return offset + byteLength
  }
  
  Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) {
      var limit = Math.pow(2, (8 * byteLength) - 1)
  
      checkInt(this, value, offset, byteLength, limit - 1, -limit)
    }
  
    var i = byteLength - 1
    var mul = 1
    var sub = 0
    this[offset + i] = value & 0xFF
    while (--i >= 0 && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
    }
  
    return offset + byteLength
  }
  
  Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
    if (value < 0) value = 0xff + value + 1
    this[offset] = (value & 0xff)
    return offset + 1
  }
  
  Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    return offset + 2
  }
  
  Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
    return offset + 2
  }
  
  Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
    return offset + 4
  }
  
  Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
    if (value < 0) value = 0xffffffff + value + 1
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
    return offset + 4
  }
  
  function checkIEEE754 (buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
    if (offset < 0) throw new RangeError('Index out of range')
  }
  
  function writeFloat (buf, value, offset, littleEndian, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4)
    return offset + 4
  }
  
  Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert)
  }
  
  Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert)
  }
  
  function writeDouble (buf, value, offset, littleEndian, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8)
    return offset + 8
  }
  
  Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert)
  }
  
  Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert)
  }
  
  // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
  Buffer.prototype.copy = function copy (target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
    if (!start) start = 0
    if (!end && end !== 0) end = this.length
    if (targetStart >= target.length) targetStart = target.length
    if (!targetStart) targetStart = 0
    if (end > 0 && end < start) end = start
  
    // Copy 0 bytes; we're done
    if (end === start) return 0
    if (target.length === 0 || this.length === 0) return 0
  
    // Fatal error conditions
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds')
    }
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
    if (end < 0) throw new RangeError('sourceEnd out of bounds')
  
    // Are we oob?
    if (end > this.length) end = this.length
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start
    }
  
    var len = end - start
  
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
      // Use built-in when available, missing from IE11
      this.copyWithin(targetStart, start, end)
    } else if (this === target && start < targetStart && targetStart < end) {
      // descending copy from end
      for (var i = len - 1; i >= 0; --i) {
        target[i + targetStart] = this[i + start]
      }
    } else {
      Uint8Array.prototype.set.call(
        target,
        this.subarray(start, end),
        targetStart
      )
    }
  
    return len
  }
  
  // Usage:
  //    buffer.fill(number[, offset[, end]])
  //    buffer.fill(buffer[, offset[, end]])
  //    buffer.fill(string[, offset[, end]][, encoding])
  Buffer.prototype.fill = function fill (val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
      if (typeof start === 'string') {
        encoding = start
        start = 0
        end = this.length
      } else if (typeof end === 'string') {
        encoding = end
        end = this.length
      }
      if (encoding !== undefined && typeof encoding !== 'string') {
        throw new TypeError('encoding must be a string')
      }
      if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding)
      }
      if (val.length === 1) {
        var code = val.charCodeAt(0)
        if ((encoding === 'utf8' && code < 128) ||
            encoding === 'latin1') {
          // Fast path: If `val` fits into a single byte, use that numeric value.
          val = code
        }
      }
    } else if (typeof val === 'number') {
      val = val & 255
    }
  
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError('Out of range index')
    }
  
    if (end <= start) {
      return this
    }
  
    start = start >>> 0
    end = end === undefined ? this.length : end >>> 0
  
    if (!val) val = 0
  
    var i
    if (typeof val === 'number') {
      for (i = start; i < end; ++i) {
        this[i] = val
      }
    } else {
      var bytes = Buffer.isBuffer(val)
        ? val
        : Buffer.from(val, encoding)
      var len = bytes.length
      if (len === 0) {
        throw new TypeError('The value "' + val +
          '" is invalid for argument "value"')
      }
      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len]
      }
    }
  
    return this
  }
  
  // HELPER FUNCTIONS
  // ================
  
  var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g
  
  function base64clean (str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0]
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '')
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return ''
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while (str.length % 4 !== 0) {
      str = str + '='
    }
    return str
  }
  
  function toHex (n) {
    if (n < 16) return '0' + n.toString(16)
    return n.toString(16)
  }
  
  function utf8ToBytes (string, units) {
    units = units || Infinity
    var codePoint
    var length = string.length
    var leadSurrogate = null
    var bytes = []
  
    for (var i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i)
  
      // is surrogate component
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        // last char was a lead
        if (!leadSurrogate) {
          // no lead yet
          if (codePoint > 0xDBFF) {
            // unexpected trail
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            continue
          } else if (i + 1 === length) {
            // unpaired lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            continue
          }
  
          // valid lead
          leadSurrogate = codePoint
  
          continue
        }
  
        // 2 leads in a row
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          leadSurrogate = codePoint
          continue
        }
  
        // valid surrogate pair
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
      } else if (leadSurrogate) {
        // valid bmp char, but last char was a lead
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
      }
  
      leadSurrogate = null
  
      // encode utf8
      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break
        bytes.push(codePoint)
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break
        bytes.push(
          codePoint >> 0x6 | 0xC0,
          codePoint & 0x3F | 0x80
        )
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break
        bytes.push(
          codePoint >> 0xC | 0xE0,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        )
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0) break
        bytes.push(
          codePoint >> 0x12 | 0xF0,
          codePoint >> 0xC & 0x3F | 0x80,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        )
      } else {
        throw new Error('Invalid code point')
      }
    }
  
    return bytes
  }
  
  function asciiToBytes (str) {
    var byteArray = []
    for (var i = 0; i < str.length; ++i) {
      // Node's code seems to be doing this and not & 0x7F..
      byteArray.push(str.charCodeAt(i) & 0xFF)
    }
    return byteArray
  }
  
  function utf16leToBytes (str, units) {
    var c, hi, lo
    var byteArray = []
    for (var i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0) break
  
      c = str.charCodeAt(i)
      hi = c >> 8
      lo = c % 256
      byteArray.push(lo)
      byteArray.push(hi)
    }
  
    return byteArray
  }
  
  function base64ToBytes (str) {
    return base64.toByteArray(base64clean(str))
  }
  
  function blitBuffer (src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
      if ((i + offset >= dst.length) || (i >= src.length)) break
      dst[i + offset] = src[i]
    }
    return i
  }
  
  // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
  // the `instanceof` check but they should be treated as of that type.
  // See: https://github.com/feross/buffer/issues/166
  function isInstance (obj, type) {
    return obj instanceof type ||
      (obj != null && obj.constructor != null && obj.constructor.name != null &&
        obj.constructor.name === type.name)
  }
  function numberIsNaN (obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
  }
  
  }).call(this)}).call(this,require("buffer").Buffer)
  },{"base64-js":10,"buffer":75,"ieee754":76}],76:[function(require,module,exports){
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  exports.read = function (buffer, offset, isLE, mLen, nBytes) {
    var e, m
    var eLen = (nBytes * 8) - mLen - 1
    var eMax = (1 << eLen) - 1
    var eBias = eMax >> 1
    var nBits = -7
    var i = isLE ? (nBytes - 1) : 0
    var d = isLE ? -1 : 1
    var s = buffer[offset + i]
  
    i += d
  
    e = s & ((1 << (-nBits)) - 1)
    s >>= (-nBits)
    nBits += eLen
    for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}
  
    m = e & ((1 << (-nBits)) - 1)
    e >>= (-nBits)
    nBits += mLen
    for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}
  
    if (e === 0) {
      e = 1 - eBias
    } else if (e === eMax) {
      return m ? NaN : ((s ? -1 : 1) * Infinity)
    } else {
      m = m + Math.pow(2, mLen)
      e = e - eBias
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
  }
  
  exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c
    var eLen = (nBytes * 8) - mLen - 1
    var eMax = (1 << eLen) - 1
    var eBias = eMax >> 1
    var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
    var i = isLE ? 0 : (nBytes - 1)
    var d = isLE ? 1 : -1
    var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
  
    value = Math.abs(value)
  
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0
      e = eMax
    } else {
      e = Math.floor(Math.log(value) / Math.LN2)
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--
        c *= 2
      }
      if (e + eBias >= 1) {
        value += rt / c
      } else {
        value += rt * Math.pow(2, 1 - eBias)
      }
      if (value * c >= 2) {
        e++
        c /= 2
      }
  
      if (e + eBias >= eMax) {
        m = 0
        e = eMax
      } else if (e + eBias >= 1) {
        m = ((value * c) - 1) * Math.pow(2, mLen)
        e = e + eBias
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
        e = 0
      }
    }
  
    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
  
    e = (e << mLen) | m
    eLen += mLen
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
  
    buffer[offset + i - d] |= s * 128
  }
  
  },{}],77:[function(require,module,exports){
  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  
  // The _isBuffer check is for Safari 5-7 support, because it's missing
  // Object.prototype.constructor. Remove this eventually
  module.exports = function (obj) {
    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
  }
  
  function isBuffer (obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
  }
  
  // For Node v0.10 support. Remove this eventually.
  function isSlowBuffer (obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
  }
  
  },{}],78:[function(require,module,exports){
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
  /* eslint-disable node/no-deprecated-api */
  var buffer = require('buffer')
  var Buffer = buffer.Buffer
  
  // alternative to using Object.keys for old browsers
  function copyProps (src, dst) {
    for (var key in src) {
      dst[key] = src[key]
    }
  }
  if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
    module.exports = buffer
  } else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports)
    exports.Buffer = SafeBuffer
  }
  
  function SafeBuffer (arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length)
  }
  
  SafeBuffer.prototype = Object.create(Buffer.prototype)
  
  // Copy static methods from Buffer
  copyProps(Buffer, SafeBuffer)
  
  SafeBuffer.from = function (arg, encodingOrOffset, length) {
    if (typeof arg === 'number') {
      throw new TypeError('Argument must not be a number')
    }
    return Buffer(arg, encodingOrOffset, length)
  }
  
  SafeBuffer.alloc = function (size, fill, encoding) {
    if (typeof size !== 'number') {
      throw new TypeError('Argument must be a number')
    }
    var buf = Buffer(size)
    if (fill !== undefined) {
      if (typeof encoding === 'string') {
        buf.fill(fill, encoding)
      } else {
        buf.fill(fill)
      }
    } else {
      buf.fill(0)
    }
    return buf
  }
  
  SafeBuffer.allocUnsafe = function (size) {
    if (typeof size !== 'number') {
      throw new TypeError('Argument must be a number')
    }
    return Buffer(size)
  }
  
  SafeBuffer.allocUnsafeSlow = function (size) {
    if (typeof size !== 'number') {
      throw new TypeError('Argument must be a number')
    }
    return buffer.SlowBuffer(size)
  }
  
  },{"buffer":75}],79:[function(require,module,exports){
  var native = require('./native')
  
  function getTypeName (fn) {
    return fn.name || fn.toString().match(/function (.*?)\s*\(/)[1]
  }
  
  function getValueTypeName (value) {
    return native.Nil(value) ? '' : getTypeName(value.constructor)
  }
  
  function getValue (value) {
    if (native.Function(value)) return ''
    if (native.String(value)) return JSON.stringify(value)
    if (value && native.Object(value)) return ''
    return value
  }
  
  function captureStackTrace (e, t) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(e, t)
    }
  }
  
  function tfJSON (type) {
    if (native.Function(type)) return type.toJSON ? type.toJSON() : getTypeName(type)
    if (native.Array(type)) return 'Array'
    if (type && native.Object(type)) return 'Object'
  
    return type !== undefined ? type : ''
  }
  
  function tfErrorString (type, value, valueTypeName) {
    var valueJson = getValue(value)
  
    return 'Expected ' + tfJSON(type) + ', got' +
      (valueTypeName !== '' ? ' ' + valueTypeName : '') +
      (valueJson !== '' ? ' ' + valueJson : '')
  }
  
  function TfTypeError (type, value, valueTypeName) {
    valueTypeName = valueTypeName || getValueTypeName(value)
    this.message = tfErrorString(type, value, valueTypeName)
  
    captureStackTrace(this, TfTypeError)
    this.__type = type
    this.__value = value
    this.__valueTypeName = valueTypeName
  }
  
  TfTypeError.prototype = Object.create(Error.prototype)
  TfTypeError.prototype.constructor = TfTypeError
  
  function tfPropertyErrorString (type, label, name, value, valueTypeName) {
    var description = '" of type '
    if (label === 'key') description = '" with key type '
  
    return tfErrorString('property "' + tfJSON(name) + description + tfJSON(type), value, valueTypeName)
  }
  
  function TfPropertyTypeError (type, property, label, value, valueTypeName) {
    if (type) {
      valueTypeName = valueTypeName || getValueTypeName(value)
      this.message = tfPropertyErrorString(type, label, property, value, valueTypeName)
    } else {
      this.message = 'Unexpected property "' + property + '"'
    }
  
    captureStackTrace(this, TfTypeError)
    this.__label = label
    this.__property = property
    this.__type = type
    this.__value = value
    this.__valueTypeName = valueTypeName
  }
  
  TfPropertyTypeError.prototype = Object.create(Error.prototype)
  TfPropertyTypeError.prototype.constructor = TfTypeError
  
  function tfCustomError (expected, actual) {
    return new TfTypeError(expected, {}, actual)
  }
  
  function tfSubError (e, property, label) {
    // sub child?
    if (e instanceof TfPropertyTypeError) {
      property = property + '.' + e.__property
  
      e = new TfPropertyTypeError(
        e.__type, property, e.__label, e.__value, e.__valueTypeName
      )
  
    // child?
    } else if (e instanceof TfTypeError) {
      e = new TfPropertyTypeError(
        e.__type, property, label, e.__value, e.__valueTypeName
      )
    }
  
    captureStackTrace(e)
    return e
  }
  
  module.exports = {
    TfTypeError: TfTypeError,
    TfPropertyTypeError: TfPropertyTypeError,
    tfCustomError: tfCustomError,
    tfSubError: tfSubError,
    tfJSON: tfJSON,
    getValueTypeName: getValueTypeName
  }
  
  },{"./native":82}],80:[function(require,module,exports){
  (function (Buffer){(function (){
  var NATIVE = require('./native')
  var ERRORS = require('./errors')
  
  function _Buffer (value) {
    return Buffer.isBuffer(value)
  }
  
  function Hex (value) {
    return typeof value === 'string' && /^([0-9a-f]{2})+$/i.test(value)
  }
  
  function _LengthN (type, length) {
    var name = type.toJSON()
  
    function Length (value) {
      if (!type(value)) return false
      if (value.length === length) return true
  
      throw ERRORS.tfCustomError(name + '(Length: ' + length + ')', name + '(Length: ' + value.length + ')')
    }
    Length.toJSON = function () { return name }
  
    return Length
  }
  
  var _ArrayN = _LengthN.bind(null, NATIVE.Array)
  var _BufferN = _LengthN.bind(null, _Buffer)
  var _HexN = _LengthN.bind(null, Hex)
  var _StringN = _LengthN.bind(null, NATIVE.String)
  
  function Range (a, b, f) {
    f = f || NATIVE.Number
    function _range (value, strict) {
      return f(value, strict) && (value > a) && (value < b)
    }
    _range.toJSON = function () {
      return `${f.toJSON()} between [${a}, ${b}]`
    }
    return _range
  }
  
  var INT53_MAX = Math.pow(2, 53) - 1
  
  function Finite (value) {
    return typeof value === 'number' && isFinite(value)
  }
  function Int8 (value) { return ((value << 24) >> 24) === value }
  function Int16 (value) { return ((value << 16) >> 16) === value }
  function Int32 (value) { return (value | 0) === value }
  function Int53 (value) {
    return typeof value === 'number' &&
      value >= -INT53_MAX &&
      value <= INT53_MAX &&
      Math.floor(value) === value
  }
  function UInt8 (value) { return (value & 0xff) === value }
  function UInt16 (value) { return (value & 0xffff) === value }
  function UInt32 (value) { return (value >>> 0) === value }
  function UInt53 (value) {
    return typeof value === 'number' &&
      value >= 0 &&
      value <= INT53_MAX &&
      Math.floor(value) === value
  }
  
  var types = {
    ArrayN: _ArrayN,
    Buffer: _Buffer,
    BufferN: _BufferN,
    Finite: Finite,
    Hex: Hex,
    HexN: _HexN,
    Int8: Int8,
    Int16: Int16,
    Int32: Int32,
    Int53: Int53,
    Range: Range,
    StringN: _StringN,
    UInt8: UInt8,
    UInt16: UInt16,
    UInt32: UInt32,
    UInt53: UInt53
  }
  
  for (var typeName in types) {
    types[typeName].toJSON = function (t) {
      return t
    }.bind(null, typeName)
  }
  
  module.exports = types
  
  }).call(this)}).call(this,{"isBuffer":require("../is-buffer/index.js")})
  },{"../is-buffer/index.js":77,"./errors":79,"./native":82}],81:[function(require,module,exports){
  var ERRORS = require('./errors')
  var NATIVE = require('./native')
  
  // short-hand
  var tfJSON = ERRORS.tfJSON
  var TfTypeError = ERRORS.TfTypeError
  var TfPropertyTypeError = ERRORS.TfPropertyTypeError
  var tfSubError = ERRORS.tfSubError
  var getValueTypeName = ERRORS.getValueTypeName
  
  var TYPES = {
    arrayOf: function arrayOf (type, options) {
      type = compile(type)
      options = options || {}
  
      function _arrayOf (array, strict) {
        if (!NATIVE.Array(array)) return false
        if (NATIVE.Nil(array)) return false
        if (options.minLength !== undefined && array.length < options.minLength) return false
        if (options.maxLength !== undefined && array.length > options.maxLength) return false
        if (options.length !== undefined && array.length !== options.length) return false
  
        return array.every(function (value, i) {
          try {
            return typeforce(type, value, strict)
          } catch (e) {
            throw tfSubError(e, i)
          }
        })
      }
      _arrayOf.toJSON = function () {
        var str = '[' + tfJSON(type) + ']'
        if (options.length !== undefined) {
          str += '{' + options.length + '}'
        } else if (options.minLength !== undefined || options.maxLength !== undefined) {
          str += '{' +
            (options.minLength === undefined ? 0 : options.minLength) + ',' +
            (options.maxLength === undefined ? Infinity : options.maxLength) + '}'
        }
        return str
      }
  
      return _arrayOf
    },
  
    maybe: function maybe (type) {
      type = compile(type)
  
      function _maybe (value, strict) {
        return NATIVE.Nil(value) || type(value, strict, maybe)
      }
      _maybe.toJSON = function () { return '?' + tfJSON(type) }
  
      return _maybe
    },
  
    map: function map (propertyType, propertyKeyType) {
      propertyType = compile(propertyType)
      if (propertyKeyType) propertyKeyType = compile(propertyKeyType)
  
      function _map (value, strict) {
        if (!NATIVE.Object(value)) return false
        if (NATIVE.Nil(value)) return false
  
        for (var propertyName in value) {
          try {
            if (propertyKeyType) {
              typeforce(propertyKeyType, propertyName, strict)
            }
          } catch (e) {
            throw tfSubError(e, propertyName, 'key')
          }
  
          try {
            var propertyValue = value[propertyName]
            typeforce(propertyType, propertyValue, strict)
          } catch (e) {
            throw tfSubError(e, propertyName)
          }
        }
  
        return true
      }
  
      if (propertyKeyType) {
        _map.toJSON = function () {
          return '{' + tfJSON(propertyKeyType) + ': ' + tfJSON(propertyType) + '}'
        }
      } else {
        _map.toJSON = function () { return '{' + tfJSON(propertyType) + '}' }
      }
  
      return _map
    },
  
    object: function object (uncompiled) {
      var type = {}
  
      for (var typePropertyName in uncompiled) {
        type[typePropertyName] = compile(uncompiled[typePropertyName])
      }
  
      function _object (value, strict) {
        if (!NATIVE.Object(value)) return false
        if (NATIVE.Nil(value)) return false
  
        var propertyName
  
        try {
          for (propertyName in type) {
            var propertyType = type[propertyName]
            var propertyValue = value[propertyName]
  
            typeforce(propertyType, propertyValue, strict)
          }
        } catch (e) {
          throw tfSubError(e, propertyName)
        }
  
        if (strict) {
          for (propertyName in value) {
            if (type[propertyName]) continue
  
            throw new TfPropertyTypeError(undefined, propertyName)
          }
        }
  
        return true
      }
      _object.toJSON = function () { return tfJSON(type) }
  
      return _object
    },
  
    anyOf: function anyOf () {
      var types = [].slice.call(arguments).map(compile)
  
      function _anyOf (value, strict) {
        return types.some(function (type) {
          try {
            return typeforce(type, value, strict)
          } catch (e) {
            return false
          }
        })
      }
      _anyOf.toJSON = function () { return types.map(tfJSON).join('|') }
  
      return _anyOf
    },
  
    allOf: function allOf () {
      var types = [].slice.call(arguments).map(compile)
  
      function _allOf (value, strict) {
        return types.every(function (type) {
          try {
            return typeforce(type, value, strict)
          } catch (e) {
            return false
          }
        })
      }
      _allOf.toJSON = function () { return types.map(tfJSON).join(' & ') }
  
      return _allOf
    },
  
    quacksLike: function quacksLike (type) {
      function _quacksLike (value) {
        return type === getValueTypeName(value)
      }
      _quacksLike.toJSON = function () { return type }
  
      return _quacksLike
    },
  
    tuple: function tuple () {
      var types = [].slice.call(arguments).map(compile)
  
      function _tuple (values, strict) {
        if (NATIVE.Nil(values)) return false
        if (NATIVE.Nil(values.length)) return false
        if (strict && (values.length !== types.length)) return false
  
        return types.every(function (type, i) {
          try {
            return typeforce(type, values[i], strict)
          } catch (e) {
            throw tfSubError(e, i)
          }
        })
      }
      _tuple.toJSON = function () { return '(' + types.map(tfJSON).join(', ') + ')' }
  
      return _tuple
    },
  
    value: function value (expected) {
      function _value (actual) {
        return actual === expected
      }
      _value.toJSON = function () { return expected }
  
      return _value
    }
  }
  
  // TODO: deprecate
  TYPES.oneOf = TYPES.anyOf
  
  function compile (type) {
    if (NATIVE.String(type)) {
      if (type[0] === '?') return TYPES.maybe(type.slice(1))
  
      return NATIVE[type] || TYPES.quacksLike(type)
    } else if (type && NATIVE.Object(type)) {
      if (NATIVE.Array(type)) {
        if (type.length !== 1) throw new TypeError('Expected compile() parameter of type Array of length 1')
        return TYPES.arrayOf(type[0])
      }
  
      return TYPES.object(type)
    } else if (NATIVE.Function(type)) {
      return type
    }
  
    return TYPES.value(type)
  }
  
  function typeforce (type, value, strict, surrogate) {
    if (NATIVE.Function(type)) {
      if (type(value, strict)) return true
  
      throw new TfTypeError(surrogate || type, value)
    }
  
    // JIT
    return typeforce(compile(type), value, strict)
  }
  
  // assign types to typeforce function
  for (var typeName in NATIVE) {
    typeforce[typeName] = NATIVE[typeName]
  }
  
  for (typeName in TYPES) {
    typeforce[typeName] = TYPES[typeName]
  }
  
  var EXTRA = require('./extra')
  for (typeName in EXTRA) {
    typeforce[typeName] = EXTRA[typeName]
  }
  
  typeforce.compile = compile
  typeforce.TfTypeError = TfTypeError
  typeforce.TfPropertyTypeError = TfPropertyTypeError
  
  module.exports = typeforce
  
  },{"./errors":79,"./extra":80,"./native":82}],82:[function(require,module,exports){
  var types = {
    Array: function (value) { return value !== null && value !== undefined && value.constructor === Array },
    Boolean: function (value) { return typeof value === 'boolean' },
    Function: function (value) { return typeof value === 'function' },
    Nil: function (value) { return value === undefined || value === null },
    Number: function (value) { return typeof value === 'number' },
    Object: function (value) { return typeof value === 'object' },
    String: function (value) { return typeof value === 'string' },
    '': function () { return true }
  }
  
  // TODO: deprecate
  types.Null = types.Nil
  
  for (var typeName in types) {
    types[typeName].toJSON = function (t) {
      return t
    }.bind(null, typeName)
  }
  
  module.exports = types
  
  },{}],83:[function(require,module,exports){
  'use strict'
  var Buffer = require('safe-buffer').Buffer
  
  // Number.MAX_SAFE_INTEGER
  var MAX_SAFE_INTEGER = 9007199254740991
  
  function checkUInt53 (n) {
    if (n < 0 || n > MAX_SAFE_INTEGER || n % 1 !== 0) throw new RangeError('value out of range')
  }
  
  function encode (number, buffer, offset) {
    checkUInt53(number)
  
    if (!buffer) buffer = Buffer.allocUnsafe(encodingLength(number))
    if (!Buffer.isBuffer(buffer)) throw new TypeError('buffer must be a Buffer instance')
    if (!offset) offset = 0
  
    // 8 bit
    if (number < 0xfd) {
      buffer.writeUInt8(number, offset)
      encode.bytes = 1
  
    // 16 bit
    } else if (number <= 0xffff) {
      buffer.writeUInt8(0xfd, offset)
      buffer.writeUInt16LE(number, offset + 1)
      encode.bytes = 3
  
    // 32 bit
    } else if (number <= 0xffffffff) {
      buffer.writeUInt8(0xfe, offset)
      buffer.writeUInt32LE(number, offset + 1)
      encode.bytes = 5
  
    // 64 bit
    } else {
      buffer.writeUInt8(0xff, offset)
      buffer.writeUInt32LE(number >>> 0, offset + 1)
      buffer.writeUInt32LE((number / 0x100000000) | 0, offset + 5)
      encode.bytes = 9
    }
  
    return buffer
  }
  
  function decode (buffer, offset) {
    if (!Buffer.isBuffer(buffer)) throw new TypeError('buffer must be a Buffer instance')
    if (!offset) offset = 0
  
    var first = buffer.readUInt8(offset)
  
    // 8 bit
    if (first < 0xfd) {
      decode.bytes = 1
      return first
  
    // 16 bit
    } else if (first === 0xfd) {
      decode.bytes = 3
      return buffer.readUInt16LE(offset + 1)
  
    // 32 bit
    } else if (first === 0xfe) {
      decode.bytes = 5
      return buffer.readUInt32LE(offset + 1)
  
    // 64 bit
    } else {
      decode.bytes = 9
      var lo = buffer.readUInt32LE(offset + 1)
      var hi = buffer.readUInt32LE(offset + 5)
      var number = hi * 0x0100000000 + lo
      checkUInt53(number)
  
      return number
    }
  }
  
  function encodingLength (number) {
    checkUInt53(number)
  
    return (
      number < 0xfd ? 1
        : number <= 0xffff ? 3
          : number <= 0xffffffff ? 5
            : 9
    )
  }
  
  module.exports = { encode: encode, decode: decode, encodingLength: encodingLength }
  
  },{"safe-buffer":78}]},{},[1])(1)
  });
  
var buff_utils=function(t){"use strict";function r(t,r=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(r&&t.finished)throw new Error("Hash#digest() has already been called")}function e(t,r){!function(t,...r){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(r.length>0&&!r.includes(t.length))throw new Error(`Expected Uint8Array of length ${r}, not of length=${t.length}`)}(t);const e=r.outputLen;if(t.length<e)throw new Error(`digestInto() expects output buffer of length at least ${e}`)}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const n=t=>t instanceof Uint8Array,o=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),i=(t,r)=>t<<32-r|t>>>r;if(!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");function s(t){if("string"==typeof t&&(t=function(t){if("string"!=typeof t)throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array((new TextEncoder).encode(t))}(t)),!n(t))throw new Error("expected Uint8Array, got "+typeof t);return t}class f{clone(){return this._cloneInto()}}function c(t){const r=r=>t().update(s(r)).digest(),e=t();return r.outputLen=e.outputLen,r.blockLen=e.blockLen,r.create=()=>t(),r}class a extends f{constructor(t,r,e,n){super(),this.blockLen=t,this.outputLen=r,this.padOffset=e,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=o(this.buffer)}update(t){r(this);const{view:e,buffer:n,blockLen:i}=this,f=(t=s(t)).length;for(let r=0;r<f;){const s=Math.min(i-this.pos,f-r);if(s!==i)n.set(t.subarray(r,r+s),this.pos),this.pos+=s,r+=s,this.pos===i&&(this.process(e,0),this.pos=0);else{const e=o(t);for(;i<=f-r;r+=i)this.process(e,r)}}return this.length+=t.length,this.roundClean(),this}digestInto(t){r(this),e(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:s,isLE:f}=this;let{pos:c}=this;n[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>s-c&&(this.process(i,0),c=0);for(let t=c;t<s;t++)n[t]=0;!function(t,r,e,n){if("function"==typeof t.setBigUint64)return t.setBigUint64(r,e,n);const o=BigInt(32),i=BigInt(4294967295),s=Number(e>>o&i),f=Number(e&i),c=n?4:0,a=n?0:4;t.setUint32(r+c,s,n),t.setUint32(r+a,f,n)}(i,s-8,BigInt(8*this.length),f),this.process(i,0);const a=o(t),h=this.outputLen;if(h%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const u=h/4,d=this.get();if(u>d.length)throw new Error("_sha2: outputLen bigger than state");for(let t=0;t<u;t++)a.setUint32(4*t,d[t],f)}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const e=t.slice(0,r);return this.destroy(),e}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:r,buffer:e,length:n,finished:o,destroyed:i,pos:s}=this;return t.length=n,t.pos=s,t.finished=o,t.destroyed=i,n%r&&t.buffer.set(e),t}}const h=(t,r,e)=>t&r^t&e^r&e,u=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),d=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),w=new Uint32Array(64);class l extends a{constructor(){super(64,32,8,!1),this.A=0|d[0],this.B=0|d[1],this.C=0|d[2],this.D=0|d[3],this.E=0|d[4],this.F=0|d[5],this.G=0|d[6],this.H=0|d[7]}get(){const{A:t,B:r,C:e,D:n,E:o,F:i,G:s,H:f}=this;return[t,r,e,n,o,i,s,f]}set(t,r,e,n,o,i,s,f){this.A=0|t,this.B=0|r,this.C=0|e,this.D=0|n,this.E=0|o,this.F=0|i,this.G=0|s,this.H=0|f}process(t,r){for(let e=0;e<16;e++,r+=4)w[e]=t.getUint32(r,!1);for(let t=16;t<64;t++){const r=w[t-15],e=w[t-2],n=i(r,7)^i(r,18)^r>>>3,o=i(e,17)^i(e,19)^e>>>10;w[t]=o+w[t-7]+n+w[t-16]|0}let{A:e,B:n,C:o,D:s,E:f,F:c,G:a,H:d}=this;for(let t=0;t<64;t++){const r=d+(i(f,6)^i(f,11)^i(f,25))+((l=f)&c^~l&a)+u[t]+w[t]|0,g=(i(e,2)^i(e,13)^i(e,22))+h(e,n,o)|0;d=a,a=c,c=f,f=s+r|0,s=o,o=n,n=e,e=r+g|0}var l;e=e+this.A|0,n=n+this.B|0,o=o+this.C|0,s=s+this.D|0,f=f+this.E|0,c=c+this.F|0,a=a+this.G|0,d=d+this.H|0,this.set(e,n,o,s,f,c,a,d)}roundClean(){w.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const g=c((()=>new l));
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function y(...t){const r=(t,r)=>e=>t(r(e));return{encode:Array.from(t).reverse().reduce(((t,e)=>t?r(t,e.encode):e.encode),void 0),decode:t.reduce(((t,e)=>t?r(t,e.decode):e.decode),void 0)}}function p(t){return{encode:r=>{if(!Array.isArray(r)||r.length&&"number"!=typeof r[0])throw new Error("alphabet.encode input should be an array of numbers");return r.map((r=>{if(r<0||r>=t.length)throw new Error(`Digit index outside alphabet: ${r} (alphabet: ${t.length})`);return t[r]}))},decode:r=>{if(!Array.isArray(r)||r.length&&"string"!=typeof r[0])throw new Error("alphabet.decode input should be array of strings");return r.map((r=>{if("string"!=typeof r)throw new Error(`alphabet.decode: not string element=${r}`);const e=t.indexOf(r);if(-1===e)throw new Error(`Unknown letter: "${r}". Allowed: ${t}`);return e}))}}}function b(t=""){if("string"!=typeof t)throw new Error("join separator should be string");return{encode:r=>{if(!Array.isArray(r)||r.length&&"string"!=typeof r[0])throw new Error("join.encode input should be array of strings");for(let t of r)if("string"!=typeof t)throw new Error(`join.encode: non-string input=${t}`);return r.join(t)},decode:r=>{if("string"!=typeof r)throw new Error("join.decode input should be string");return r.split(t)}}}function E(t,r="="){if("string"!=typeof r)throw new Error("padding chr should be string");return{encode(e){if(!Array.isArray(e)||e.length&&"string"!=typeof e[0])throw new Error("padding.encode input should be array of strings");for(let t of e)if("string"!=typeof t)throw new Error(`padding.encode: non-string input=${t}`);for(;e.length*t%8;)e.push(r);return e},decode(e){if(!Array.isArray(e)||e.length&&"string"!=typeof e[0])throw new Error("padding.encode input should be array of strings");for(let t of e)if("string"!=typeof t)throw new Error(`padding.decode: non-string input=${t}`);let n=e.length;if(n*t%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;n>0&&e[n-1]===r;n--)if(!((n-1)*t%8))throw new Error("Invalid padding: string has too much padding");return e.slice(0,n)}}}function m(t,r,e){if(r<2)throw new Error(`convertRadix: wrong from=${r}, base cannot be less than 2`);if(e<2)throw new Error(`convertRadix: wrong to=${e}, base cannot be less than 2`);if(!Array.isArray(t))throw new Error("convertRadix: data should be array");if(!t.length)return[];let n=0;const o=[],i=Array.from(t);for(i.forEach((t=>{if(t<0||t>=r)throw new Error(`Wrong integer: ${t}`)}));;){let t=0,s=!0;for(let o=n;o<i.length;o++){const f=i[o],c=r*t+f;if(!Number.isSafeInteger(c)||r*t/r!==t||c-f!=r*t)throw new Error("convertRadix: carry overflow");t=c%e;const a=Math.floor(c/e);if(i[o]=a,!Number.isSafeInteger(a)||a*e+t!==c)throw new Error("convertRadix: carry overflow");s&&(a?s=!1:n=o)}if(o.push(t),s)break}for(let r=0;r<t.length-1&&0===t[r];r++)o.push(0);return o.reverse()}const A=(t,r)=>r?A(r,t%r):t,x=(t,r)=>t+(r-A(t,r));function _(t,r,e,n){if(!Array.isArray(t))throw new Error("convertRadix2: data should be array");if(r<=0||r>32)throw new Error(`convertRadix2: wrong from=${r}`);if(e<=0||e>32)throw new Error(`convertRadix2: wrong to=${e}`);if(x(r,e)>32)throw new Error(`convertRadix2: carry overflow from=${r} to=${e} carryBits=${x(r,e)}`);let o=0,i=0;const s=2**e-1,f=[];for(const n of t){if(n>=2**r)throw new Error(`convertRadix2: invalid data word=${n} from=${r}`);if(o=o<<r|n,i+r>32)throw new Error(`convertRadix2: carry overflow pos=${i} from=${r}`);for(i+=r;i>=e;i-=e)f.push((o>>i-e&s)>>>0);o&=2**i-1}if(o=o<<e-i&s,!n&&i>=r)throw new Error("Excess padding");if(!n&&o)throw new Error(`Non-zero padding: ${o}`);return n&&i>0&&f.push(o>>>0),f}function v(t,r=!1){if(t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(x(8,t)>32||x(t,8)>32)throw new Error("radix2: carry overflow");return{encode:e=>{if(!(e instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return _(Array.from(e),8,t,!r)},decode:e=>{if(!Array.isArray(e)||e.length&&"number"!=typeof e[0])throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(_(e,t,8,r))}}}function U(t){if("function"!=typeof t)throw new Error("unsafeWrapper fn should be function");return function(...r){try{return t.apply(null,r)}catch(t){}}}const $=y(v(6),p("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),E(6),b("")),I=y(v(6),p("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),E(6),b("")),B=t=>{return y((r=58,{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return m(Array.from(t),256,r)},decode:t=>{if(!Array.isArray(t)||t.length&&"number"!=typeof t[0])throw new Error("radix.decode input should be array of strings");return Uint8Array.from(m(t,r,256))}}),p(t),b(""));var r},k=B("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),L=t=>y(function(t,r){if("function"!=typeof r)throw new Error("checksum fn should be function");return{encode(e){if(!(e instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const n=r(e).slice(0,t),o=new Uint8Array(e.length+t);return o.set(e),o.set(n,e.length),o},decode(e){if(!(e instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const n=e.slice(0,-t),o=r(n).slice(0,t),i=e.slice(-t);for(let r=0;r<t;r++)if(o[r]!==i[r])throw new Error("Invalid checksum");return n}}}(4,(r=>t(t(r)))),k),T=y(p("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),b("")),j=[996825010,642813549,513874426,1027748829,705979059];function N(t){const r=t>>25;let e=(33554431&t)<<5;for(let t=0;t<j.length;t++)1==(r>>t&1)&&(e^=j[t]);return e}function R(t,r,e=1){const n=t.length;let o=1;for(let r=0;r<n;r++){const e=t.charCodeAt(r);if(e<33||e>126)throw new Error(`Invalid prefix (${t})`);o=N(o)^e>>5}o=N(o);for(let r=0;r<n;r++)o=N(o)^31&t.charCodeAt(r);for(let t of r)o=N(o)^t;for(let t=0;t<6;t++)o=N(o);return o^=e,T.encode(_([o%2**30],30,5,!1))}function z(t){const r="bech32"===t?1:734539939,e=v(5),n=e.decode,o=e.encode,i=U(n);function s(t,e=90){if("string"!=typeof t)throw new Error("bech32.decode input should be string, not "+typeof t);if(t.length<8||!1!==e&&t.length>e)throw new TypeError(`Wrong string length: ${t.length} (${t}). Expected (8..${e})`);const n=t.toLowerCase();if(t!==n&&t!==t.toUpperCase())throw new Error("String must be lowercase or uppercase");const o=(t=n).lastIndexOf("1");if(0===o||-1===o)throw new Error('Letter "1" must be present between prefix and data only');const i=t.slice(0,o),s=t.slice(o+1);if(s.length<6)throw new Error("Data must be at least 6 characters long");const f=T.decode(s).slice(0,-6),c=R(i,f,r);if(!s.endsWith(c))throw new Error(`Invalid checksum in ${t}: expected "${c}"`);return{prefix:i,words:f}}return{encode:function(t,e,n=90){if("string"!=typeof t)throw new Error("bech32.encode prefix should be string, not "+typeof t);if(!Array.isArray(e)||e.length&&"number"!=typeof e[0])throw new Error("bech32.encode words should be array of numbers, not "+typeof e);const o=t.length+7+e.length;if(!1!==n&&o>n)throw new TypeError(`Length ${o} exceeds limit ${n}`);const i=t.toLowerCase(),s=R(i,e,r);return`${i}1${T.encode(e)}${s}`},decode:s,decodeToBytes:function(t){const{prefix:r,words:e}=s(t,!1);return{prefix:r,words:e,bytes:n(e)}},decodeUnsafe:U(s),fromWords:n,fromWordsUnsafe:i,toWords:o}}const D=z("bech32"),C=z("bech32m"),S={b58chk:{encode:t=>L(g).encode(t),decode:t=>L(g).decode(t)},base64:{encode:t=>$.encode(t),decode:t=>$.decode(t)},b64url:{encode:t=>I.encode(t),decode:t=>I.decode(t)},bech32:{to_words:D.toWords,to_bytes:D.fromWords,encode:(t,r,e=!1)=>D.encode(t,r,e),decode:(t,r=!1)=>{const{prefix:e,words:n}=D.decode(t,r);return{prefix:e,words:n}}},bech32m:{to_words:C.toWords,to_bytes:C.fromWords,encode:(t,r,e=!1)=>C.encode(t,r,e),decode:(t,r=!1)=>{const{prefix:e,words:n}=C.decode(t,r);return{prefix:e,words:n}}}};function W(t,r){if(t.length>r)throw new TypeError(`Data is larger than array size: ${t.length} > ${r}`)}function O(t){if(null!==t.match(/[^a-fA-f0-9]/))throw new TypeError("Invalid characters in hex string: "+t);if(t.length%2!=0)throw new Error(`Length of hex string is invalid: ${t.length}`)}function H(t){if(t>Number.MAX_SAFE_INTEGER)throw new TypeError("Number exceeds safe bounds!")}function V(t,r){if(t!==r)throw new TypeError(`Bech32 prefix does not match: ${t} !== ${r}`)}var F=Object.freeze({__proto__:null,is_hex:O,is_json:function(t){try{JSON.parse(t)}catch{throw new TypeError("JSON string is invalid!")}},is_prefix:V,is_safe_num:H,within_size:W});const G=BigInt(0),M=BigInt(255),J=BigInt(256);function q(t,r,e="be"){void 0===r&&(r=function(t){if(t<=0xffn)return 1;if(t<=0xffffn)return 2;if(t<=0xffffffffn)return 4;if(t<=0xffffffffffffffffn)return 8;if(t<=0xffffffffffffffffffffffffffffffffn)return 16;if(t<=0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn)return 32;throw new TypeError("Must specify a fixed buffer size for bigints greater than 32 bytes.")}(t));const n="le"===e,o=new ArrayBuffer(r),i=new DataView(o);let s=n?0:r-1;for(;t>G;){const r=t&M,e=Number(r);n?i.setUint8(s++,e):i.setUint8(s--,e),t=(t-r)/J}return new Uint8Array(o)}function X(t,r,e="be"){void 0===r&&(r=function(t){if(t<=255)return 1;if(t<=65535)return 2;if(t<=4294967295)return 4;throw new TypeError("Numbers larger than 4 bytes must specify a fixed size!")}(t));const n="le"===e,o=new ArrayBuffer(r),i=new DataView(o);let s=n?0:r-1;for(;t>0;){const r=255&t;n?i.setUint8(s++,t):i.setUint8(s--,t),t=(t-r)/256}return new Uint8Array(o)}const K=new TextEncoder,P=new TextDecoder;function Q(t){return K.encode(t)}function Y(t){return P.decode(t)}function Z(t,r,e="le"){r=function(t,r){O(t);const e=t.length/2;if(void 0===r&&(r=e),e>r)throw new TypeError(`Hex string is larger than array size: ${e} > ${r}`);return r}(t,r);const n="le"===e,o=new ArrayBuffer(r),i=new DataView(o);let s=n?0:r-1;for(let r=0;r<t.length;r+=2){const e=t.substring(r,r+2),o=parseInt(e,16);n?i.setUint8(s++,o):i.setUint8(s--,o)}return new Uint8Array(o)}function tt(t){let r="";for(let e=0;e<t.length;e++)r+=t[e].toString(16).padStart(2,"0");return r}const rt={encode:tt,decode:Z},et={encode:Q,decode:Y},{getRandomValues:nt}=crypto??globalThis.crypto??window.crypto;function ot(t=32){if("function"==typeof nt)return crypto.getRandomValues(new Uint8Array(t));throw new Error("Crypto module missing getRandomValues!")}function it(t){return null===t.match(/[^a-fA-f0-9]/)&&t.length%2==0}function st(t){return!("string"!=typeof t||!it(t))||("number"==typeof t||"bigint"==typeof t||t instanceof Uint8Array||!(!Array.isArray(t)||!t.every((t=>"number"==typeof t))))}function ft(t,r,e="be"){void 0===r&&(r=t.length),W(t,r);const n=new Uint8Array(r).fill(0),o="be"===e?0:r-t.length;return n.set(t,o),n}function ct(t){let r,e=0;const n=t.reduce(((t,r)=>t+r.length),0),o=new Uint8Array(n);for(r=0;r<t.length;r++){const n=t[r];o.set(n,e),e+=n.length}return o}function at(t,r){return"bigint"==typeof r?`${r}n`:r}function ht(t,r){return"string"==typeof r&&/n$/.test(r)?BigInt(r.slice(0,-1)):r}function ut(t,r,e){const n=t.length,o=e/r;if(e%r!=0)throw new TypeError(`Invalid parameters: ${e} % ${r} !== 0`);if(n!==e)throw new TypeError(`Invalid data stream: ${n} !== ${e}`);if(n%r!=0)throw new TypeError(`Invalid data stream: ${n} % ${r} !== 0`);const i=new Array(o);for(let e=0;e<o;e++){const n=e*r;i[e]=t.subarray(n,n+r)}return i}var dt=Object.freeze({__proto__:null,bigint_replacer:at,bigint_reviver:ht,is_bytes:st,is_hex:it,join_array:ct,parse_data:ut,random:ot,set_buffer:ft});function wt(t,r,e){if(t instanceof ArrayBuffer)return new Uint8Array(t);if(t instanceof Uint8Array)return ft(t,r,e);if(Array.isArray(t)){return ct(t.map((t=>wt(t,r,e))))}if("string"==typeof t)return Z(t,r,e);if("bigint"==typeof t)return q(t,r,e);if("number"==typeof t)return X(t,r,e);if("boolean"==typeof t)return Uint8Array.of(t?1:0);throw new TypeError("Unsupported format:"+String(typeof t))}class lt extends Uint8Array{static{this.num=gt}static{this.big=pt}static{this.bin=yt}static{this.raw=bt}static{this.str=Et}static{this.hex=mt}static{this.bytes=kt}static{this.json=At}static{this.base64=xt}static{this.b64url=_t}static{this.bech32=vt}static{this.bech32m=Ut}static{this.b58chk=$t}static{this.encode=Q}static{this.decode=Y}static{this.parse=It}static{this.is_bytes=st}static{this.is_hex=it}static random(t=32){const r=ot(t);return new lt(r,t)}static now(t=4){const r=Math.floor(Date.now()/1e3);return new lt(r,t)}constructor(t,r,e){if(t instanceof lt&&void 0===r)return t;super(wt(t,r,e))}get arr(){return[...this]}get num(){return this.to_num()}get big(){return this.to_big()}get str(){return this.to_str()}get hex(){return this.to_hex()}get raw(){return new Uint8Array(this)}get bin(){return this.to_bin()}get b58chk(){return this.to_b58chk()}get base64(){return this.to_base64()}get b64url(){return this.to_b64url()}get digest(){return this.to_hash()}get id(){return this.to_hash().hex}get stream(){return new Bt(this)}to_num(t="be"){return function(t){let r=0;for(let e=t.length-1;e>=0;e--)r=256*r+t[e],H(r);return r}("be"===t?this.reverse():this)}to_big(t="be"){return function(t){let r=BigInt(0);for(let e=t.length-1;e>=0;e--)r=r*J+BigInt(t[e]);return BigInt(r)}("be"===t?this.reverse():this)}to_bin(){return function(t){const r=new Array(8*t.length);let e=0;for(const n of t){if(n>255)throw new Error(`Invalid byte value: ${n}. Byte values must be between 0 and 255.`);for(let t=7;t>=0;t--,e++)r[e]=n>>t&1}return r.join("")}(this)}to_hash(){const t=g(this);return new lt(t)}to_json(t){void 0===t&&(t=ht);const r=Y(this);return JSON.parse(r,t)}to_bech32(t,r){const{encode:e,to_words:n}=S.bech32;return e(t,n(this),r)}to_bech32m(t,r){const{encode:e,to_words:n}=S.bech32m;return e(t,n(this),r)}to_str(){return Y(this)}to_hex(){return tt(this)}to_bytes(){return new Uint8Array(this)}to_b58chk(){return S.b58chk.encode(this)}to_base64(){return S.base64.encode(this)}to_b64url(){return S.b64url.encode(this)}append(t){return lt.join([this,lt.bytes(t)])}prepend(t){return lt.join([lt.bytes(t),this])}reverse(){const t=new Uint8Array(this).reverse();return new lt(t)}slice(t,r){const e=new Uint8Array(this).slice(t,r);return new lt(e)}set(t,r){this.set(t,r)}subarray(t,r){const e=new Uint8Array(this).subarray(t,r);return new lt(e)}write(t,r){const e=lt.bytes(t);this.set(e,r)}add_varint(t){const r=lt.calc_varint(this.length,t);return lt.join([r,this])}static from(t){return new lt(Uint8Array.from(t))}static of(...t){return new lt(Uint8Array.of(...t))}static join(t){const r=ct(t.map((t=>lt.bytes(t))));return new lt(r)}static sort(t,r){const e=t.map((t=>kt(t,r).hex));return e.sort(),e.map((t=>lt.hex(t,r)))}static calc_varint(t,r){if(t<253)return lt.num(t,1);if(t<65536)return lt.of(253,...lt.num(t,2,r));if(t<4294967296)return lt.of(254,...lt.num(t,4,r));if(BigInt(t)<0x10000000000000000n)return lt.of(255,...lt.num(t,8,r));throw new Error(`Value is too large: ${t}`)}}function gt(t,r,e){return new lt(t,r,e)}function yt(t,r,e){return new lt(function(t){const r=t.split("").map(Number);if(r.length%8!=0)throw new Error(`Binary array is invalid length: ${t.length}`);const e=new Uint8Array(r.length/8);for(let t=0,n=0;t<r.length;t+=8,n++){let o=0;for(let e=0;e<8;e++)o|=r[t+e]<<7-e;e[n]=o}return e}(t),r,e)}function pt(t,r,e){return new lt(t,r,e)}function bt(t,r,e){return new lt(t,r,e)}function Et(t,r,e){return new lt(Q(t),r,e)}function mt(t,r,e){return new lt(t,r,e)}function At(t,r){void 0===r&&(r=at);const e=JSON.stringify(t,r);return new lt(Q(e))}function xt(t){return new lt(S.base64.decode(t))}function _t(t){return new lt(S.b64url.decode(t))}function vt(t,r,e){const{decode:n,to_bytes:o}=S.bech32,{prefix:i,words:s}=n(t,r),f=o(s);return"string"==typeof e&&V(i,e),new lt(f)}function Ut(t,r,e){const{decode:n,to_bytes:o}=S.bech32m,{prefix:i,words:s}=n(t,r),f=o(s);return"string"==typeof e&&V(i,e),new lt(f)}function $t(t){return new lt(S.b58chk.decode(t))}function It(t,r,e){return ut(wt(t),r,e).map((t=>lt.bytes(t)))}class Bt{constructor(t){this.data=lt.bytes(t),this.size=this.data.length}peek(t){if(t>this.size)throw new Error(`Size greater than stream: ${t} > ${this.size}`);return new lt(this.data.slice(0,t))}read(t){const r=this.peek(t);return this.data=this.data.slice(t),this.size=this.data.length,r}read_varint(t){const r=this.read(1).num;switch(!0){case r>=0&&r<253:return r;case 253===r:return this.read(2).to_num(t);case 254===r:return this.read(4).to_num(t);case 255===r:return this.read(8).to_num(t);default:throw new Error(`Varint is out of range: ${r}`)}}}function kt(t,r,e){return new lt(t,r,e)}return t.Buff=lt,t.Encoder=S,t.Hex=rt,t.Stream=Bt,t.Txt=et,t.assert=F,t.buffer=kt,t.util=dt,t}({});
//# sourceMappingURL=browser.js.map

var crypto_utils=function(t){"use strict";function e(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function r(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function n(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}const i="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0,o=t=>t instanceof Uint8Array,s=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),f=(t,e)=>t<<32-e|t>>>e;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */if(!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");function a(t){if("string"==typeof t&&(t=function(t){if("string"!=typeof t)throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array((new TextEncoder).encode(t))}(t)),!o(t))throw new Error("expected Uint8Array, got "+typeof t);return t}let c=class{clone(){return this._cloneInto()}};function u(t){const e=e=>t().update(a(e)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e}function h(t=32){if(i&&"function"==typeof i.getRandomValues)return i.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}let d=class extends c{constructor(t,e,r,n){super(),this.blockLen=t,this.outputLen=e,this.padOffset=r,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=s(this.buffer)}update(t){n(this);const{view:e,buffer:r,blockLen:i}=this,o=(t=a(t)).length;for(let n=0;n<o;){const f=Math.min(i-this.pos,o-n);if(f!==i)r.set(t.subarray(n,n+f),this.pos),this.pos+=f,n+=f,this.pos===i&&(this.process(e,0),this.pos=0);else{const e=s(t);for(;i<=o-n;n+=i)this.process(e,n)}}return this.length+=t.length,this.roundClean(),this}digestInto(t){n(this),function(t,e){r(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}(t,this),this.finished=!0;const{buffer:e,view:i,blockLen:o,isLE:f}=this;let{pos:a}=this;e[a++]=128,this.buffer.subarray(a).fill(0),this.padOffset>o-a&&(this.process(i,0),a=0);for(let t=a;t<o;t++)e[t]=0;!function(t,e,r,n){if("function"==typeof t.setBigUint64)return t.setBigUint64(e,r,n);const i=BigInt(32),o=BigInt(4294967295),s=Number(r>>i&o),f=Number(r&o),a=n?4:0,c=n?0:4;t.setUint32(e+a,s,n),t.setUint32(e+c,f,n)}(i,o-8,BigInt(8*this.length),f),this.process(i,0);const c=s(t),u=this.outputLen;if(u%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=u/4,d=this.get();if(h>d.length)throw new Error("_sha2: outputLen bigger than state");for(let t=0;t<h;t++)c.setUint32(4*t,d[t],f)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const r=t.slice(0,e);return this.destroy(),r}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:r,length:n,finished:i,destroyed:o,pos:s}=this;return t.length=n,t.pos=s,t.finished=i,t.destroyed=o,n%e&&t.buffer.set(r),t}};const l=(t,e,r)=>t&e^t&r^e&r,g=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),w=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),p=new Uint32Array(64);let y=class extends d{constructor(){super(64,32,8,!1),this.A=0|w[0],this.B=0|w[1],this.C=0|w[2],this.D=0|w[3],this.E=0|w[4],this.F=0|w[5],this.G=0|w[6],this.H=0|w[7]}get(){const{A:t,B:e,C:r,D:n,E:i,F:o,G:s,H:f}=this;return[t,e,r,n,i,o,s,f]}set(t,e,r,n,i,o,s,f){this.A=0|t,this.B=0|e,this.C=0|r,this.D=0|n,this.E=0|i,this.F=0|o,this.G=0|s,this.H=0|f}process(t,e){for(let r=0;r<16;r++,e+=4)p[r]=t.getUint32(e,!1);for(let t=16;t<64;t++){const e=p[t-15],r=p[t-2],n=f(e,7)^f(e,18)^e>>>3,i=f(r,17)^f(r,19)^r>>>10;p[t]=i+p[t-7]+n+p[t-16]|0}let{A:r,B:n,C:i,D:o,E:s,F:a,G:c,H:u}=this;for(let t=0;t<64;t++){const e=u+(f(s,6)^f(s,11)^f(s,25))+((h=s)&a^~h&c)+g[t]+p[t]|0,d=(f(r,2)^f(r,13)^f(r,22))+l(r,n,i)|0;u=c,c=a,a=s,s=o+e|0,o=i,i=n,n=r,r=e+d|0}var h;r=r+this.A|0,n=n+this.B|0,i=i+this.C|0,o=o+this.D|0,s=s+this.E|0,a=a+this.F|0,c=c+this.G|0,u=u+this.H|0,this.set(r,n,i,o,s,a,c,u)}roundClean(){p.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}};const b=u((()=>new y)),m=BigInt(0),x=BigInt(1),E=BigInt(2),v=t=>t instanceof Uint8Array,B=Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function A(t){if(!v(t))throw new Error("Uint8Array expected");let e="";for(let r=0;r<t.length;r++)e+=B[t[r]];return e}function _(t){const e=t.toString(16);return 1&e.length?`0${e}`:e}function I(t){if("string"!=typeof t)throw new Error("hex string expected, got "+typeof t);return BigInt(""===t?"0":`0x${t}`)}function U(t){if("string"!=typeof t)throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const r=new Uint8Array(e/2);for(let e=0;e<r.length;e++){const n=2*e,i=t.slice(n,n+2),o=Number.parseInt(i,16);if(Number.isNaN(o)||o<0)throw new Error("Invalid byte sequence");r[e]=o}return r}function S(t){return I(A(t))}function L(t){if(!v(t))throw new Error("Uint8Array expected");return I(A(Uint8Array.from(t).reverse()))}function $(t,e){return U(t.toString(16).padStart(2*e,"0"))}function k(t,e){return $(t,e).reverse()}function H(t,e,r){let n;if("string"==typeof e)try{n=U(e)}catch(r){throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${r}`)}else{if(!v(e))throw new Error(`${t} must be hex string or Uint8Array`);n=Uint8Array.from(e)}const i=n.length;if("number"==typeof r&&i!==r)throw new Error(`${t} expected ${r} bytes, got ${i}`);return n}function O(...t){const e=new Uint8Array(t.reduce(((t,e)=>t+e.length),0));let r=0;return t.forEach((t=>{if(!v(t))throw new Error("Uint8Array expected");e.set(t,r),r+=t.length})),e}const N=t=>(E<<BigInt(t-1))-x,R=t=>new Uint8Array(t),T=t=>Uint8Array.from(t);function j(t,e,r){if("number"!=typeof t||t<2)throw new Error("hashLen must be a number");if("number"!=typeof e||e<2)throw new Error("qByteLen must be a number");if("function"!=typeof r)throw new Error("hmacFn must be a function");let n=R(t),i=R(t),o=0;const s=()=>{n.fill(1),i.fill(0),o=0},f=(...t)=>r(i,n,...t),a=(t=R())=>{i=f(T([0]),t),n=f(),0!==t.length&&(i=f(T([1]),t),n=f())},c=()=>{if(o++>=1e3)throw new Error("drbg: tried 1000 values");let t=0;const r=[];for(;t<e;){n=f();const e=n.slice();r.push(e),t+=n.length}return O(...r)};return(t,e)=>{let r;for(s(),a(t);!(r=e(c()));)a();return s(),r}}const C={bigint:t=>"bigint"==typeof t,function:t=>"function"==typeof t,boolean:t=>"boolean"==typeof t,string:t=>"string"==typeof t,stringOrUint8Array:t=>"string"==typeof t||t instanceof Uint8Array,isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>"function"==typeof t&&Number.isSafeInteger(t.outputLen)};function z(t,e,r={}){const n=(e,r,n)=>{const i=C[r];if("function"!=typeof i)throw new Error(`Invalid validator "${r}", expected function`);const o=t[e];if(!(n&&void 0===o||i(o,t)))throw new Error(`Invalid param ${String(e)}=${o} (${typeof o}), expected ${r}`)};for(const[t,r]of Object.entries(e))n(t,r,!1);for(const[t,e]of Object.entries(r))n(t,e,!0);return t}var P=Object.freeze({__proto__:null,bitGet:function(t,e){return t>>BigInt(e)&x},bitLen:function(t){let e;for(e=0;t>m;t>>=x,e+=1);return e},bitMask:N,bitSet:(t,e,r)=>t|(r?x:m)<<BigInt(e),bytesToHex:A,bytesToNumberBE:S,bytesToNumberLE:L,concatBytes:O,createHmacDrbg:j,ensureBytes:H,equalBytes:function(t,e){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0},hexToBytes:U,hexToNumber:I,numberToBytesBE:$,numberToBytesLE:k,numberToHexUnpadded:_,numberToVarBytesBE:function(t){return U(_(t))},utf8ToBytes:function(t){if("string"!=typeof t)throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array((new TextEncoder).encode(t))},validateObject:z});
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const q=BigInt(0),F=BigInt(1),V=BigInt(2),D=BigInt(3),G=BigInt(4),Z=BigInt(5),Y=BigInt(8);function W(t,e){const r=t%e;return r>=q?r:e+r}function K(t,e,r){if(r<=q||e<q)throw new Error("Expected power/modulo > 0");if(r===F)return q;let n=F;for(;e>q;)e&F&&(n=n*t%r),t=t*t%r,e>>=F;return n}function M(t,e,r){let n=t;for(;e-- >q;)n*=n,n%=r;return n}function J(t,e){if(t===q||e<=q)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let r=W(t,e),n=e,i=q,o=F;for(;r!==q;){const t=n%r,e=i-o*(n/r);n=r,r=t,i=o,o=e}if(n!==F)throw new Error("invert: does not exist");return W(i,e)}function X(t){if(t%G===D){const e=(t+F)/G;return function(t,r){const n=t.pow(r,e);if(!t.eql(t.sqr(n),r))throw new Error("Cannot find square root");return n}}if(t%Y===Z){const e=(t-Z)/Y;return function(t,r){const n=t.mul(r,V),i=t.pow(n,e),o=t.mul(r,i),s=t.mul(t.mul(o,V),i),f=t.mul(o,t.sub(s,t.ONE));if(!t.eql(t.sqr(f),r))throw new Error("Cannot find square root");return f}}return function(t){const e=(t-F)/V;let r,n,i;for(r=t-F,n=0;r%V===q;r/=V,n++);for(i=V;i<t&&K(i,e,t)!==t-F;i++);if(1===n){const e=(t+F)/G;return function(t,r){const n=t.pow(r,e);if(!t.eql(t.sqr(n),r))throw new Error("Cannot find square root");return n}}const o=(r+F)/V;return function(t,s){if(t.pow(s,e)===t.neg(t.ONE))throw new Error("Cannot find square root");let f=n,a=t.pow(t.mul(t.ONE,i),r),c=t.pow(s,o),u=t.pow(s,r);for(;!t.eql(u,t.ONE);){if(t.eql(u,t.ZERO))return t.ZERO;let e=1;for(let r=t.sqr(u);e<f&&!t.eql(r,t.ONE);e++)r=t.sqr(r);const r=t.pow(a,F<<BigInt(f-e-1));a=t.sqr(r),c=t.mul(c,r),u=t.mul(u,a),f=e}return c}}(t)}BigInt(9),BigInt(16);const Q=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function tt(t,e){const r=void 0!==e?e:t.toString(2).length;return{nBitLength:r,nByteLength:Math.ceil(r/8)}}function et(t,e,r=!1,n={}){if(t<=q)throw new Error(`Expected Field ORDER > 0, got ${t}`);const{nBitLength:i,nByteLength:o}=tt(t,e);if(o>2048)throw new Error("Field lengths over 2048 bytes are not supported");const s=X(t),f=Object.freeze({ORDER:t,BITS:i,BYTES:o,MASK:N(i),ZERO:q,ONE:F,create:e=>W(e,t),isValid:e=>{if("bigint"!=typeof e)throw new Error("Invalid field element: expected bigint, got "+typeof e);return q<=e&&e<t},is0:t=>t===q,isOdd:t=>(t&F)===F,neg:e=>W(-e,t),eql:(t,e)=>t===e,sqr:e=>W(e*e,t),add:(e,r)=>W(e+r,t),sub:(e,r)=>W(e-r,t),mul:(e,r)=>W(e*r,t),pow:(t,e)=>function(t,e,r){if(r<q)throw new Error("Expected power > 0");if(r===q)return t.ONE;if(r===F)return e;let n=t.ONE,i=e;for(;r>q;)r&F&&(n=t.mul(n,i)),i=t.sqr(i),r>>=F;return n}(f,t,e),div:(e,r)=>W(e*J(r,t),t),sqrN:t=>t*t,addN:(t,e)=>t+e,subN:(t,e)=>t-e,mulN:(t,e)=>t*e,inv:e=>J(e,t),sqrt:n.sqrt||(t=>s(f,t)),invertBatch:t=>function(t,e){const r=new Array(e.length),n=e.reduce(((e,n,i)=>t.is0(n)?e:(r[i]=e,t.mul(e,n))),t.ONE),i=t.inv(n);return e.reduceRight(((e,n,i)=>t.is0(n)?e:(r[i]=t.mul(e,r[i]),t.mul(e,n))),i),r}(f,t),cmov:(t,e,r)=>r?e:t,toBytes:t=>r?k(t,o):$(t,o),fromBytes:t=>{if(t.length!==o)throw new Error(`Fp.fromBytes: expected ${o}, got ${t.length}`);return r?L(t):S(t)}});return Object.freeze(f)}function rt(t){if("bigint"!=typeof t)throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function nt(t){const e=rt(t);return e+Math.ceil(e/2)}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const it=BigInt(0),ot=BigInt(1);function st(t){return z(t.Fp,Q.reduce(((t,e)=>(t[e]="function",t)),{ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"})),z(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...tt(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const{bytesToNumberBE:ft,hexToBytes:at}=P,ct={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(t){const{Err:e}=ct;if(t.length<2||2!==t[0])throw new e("Invalid signature integer tag");const r=t[1],n=t.subarray(2,r+2);if(!r||n.length!==r)throw new e("Invalid signature integer: wrong length");if(128&n[0])throw new e("Invalid signature integer: negative");if(0===n[0]&&!(128&n[1]))throw new e("Invalid signature integer: unnecessary leading zero");return{d:ft(n),l:t.subarray(r+2)}},toSig(t){const{Err:e}=ct,r="string"==typeof t?at(t):t;if(!(r instanceof Uint8Array))throw new Error("ui8a expected");let n=r.length;if(n<2||48!=r[0])throw new e("Invalid signature tag");if(r[1]!==n-2)throw new e("Invalid signature: incorrect length");const{d:i,l:o}=ct._parseInt(r.subarray(2)),{d:s,l:f}=ct._parseInt(o);if(f.length)throw new e("Invalid signature: left bytes after parsing");return{r:i,s:s}},hexFromSig(t){const e=t=>8&Number.parseInt(t[0],16)?"00"+t:t,r=t=>{const e=t.toString(16);return 1&e.length?`0${e}`:e},n=e(r(t.s)),i=e(r(t.r)),o=n.length/2,s=i.length/2,f=r(o),a=r(s);return`30${r(s+o+4)}02${a}${i}02${f}${n}`}},ut=BigInt(0),ht=BigInt(1);BigInt(2);const dt=BigInt(3);function lt(t){const e=function(t){const e=st(t);z(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:r,Fp:n,a:i}=e;if(r){if(!n.eql(i,n.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if("object"!=typeof r||"bigint"!=typeof r.beta||"function"!=typeof r.splitScalar)throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}(t),{Fp:r}=e,n=e.toBytes||((t,e,n)=>{const i=e.toAffine();return O(Uint8Array.from([4]),r.toBytes(i.x),r.toBytes(i.y))}),i=e.fromBytes||(t=>{const e=t.subarray(1);return{x:r.fromBytes(e.subarray(0,r.BYTES)),y:r.fromBytes(e.subarray(r.BYTES,2*r.BYTES))}});function o(t){const{a:n,b:i}=e,o=r.sqr(t),s=r.mul(o,t);return r.add(r.add(s,r.mul(t,n)),i)}if(!r.eql(r.sqr(e.Gy),o(e.Gx)))throw new Error("bad generator point: equation left != right");function s(t){return"bigint"==typeof t&&ut<t&&t<e.n}function f(t){if(!s(t))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function a(t){const{allowedPrivateKeyLengths:r,nByteLength:n,wrapPrivateKey:i,n:o}=e;if(r&&"bigint"!=typeof t){if(t instanceof Uint8Array&&(t=A(t)),"string"!=typeof t||!r.includes(t.length))throw new Error("Invalid key");t=t.padStart(2*n,"0")}let s;try{s="bigint"==typeof t?t:S(H("private key",t,n))}catch(e){throw new Error(`private key must be ${n} bytes, hex or bigint, not ${typeof t}`)}return i&&(s=W(s,o)),f(s),s}const c=new Map;function u(t){if(!(t instanceof h))throw new Error("ProjectivePoint expected")}class h{constructor(t,e,n){if(this.px=t,this.py=e,this.pz=n,null==t||!r.isValid(t))throw new Error("x required");if(null==e||!r.isValid(e))throw new Error("y required");if(null==n||!r.isValid(n))throw new Error("z required")}static fromAffine(t){const{x:e,y:n}=t||{};if(!t||!r.isValid(e)||!r.isValid(n))throw new Error("invalid affine point");if(t instanceof h)throw new Error("projective point not allowed");const i=t=>r.eql(t,r.ZERO);return i(e)&&i(n)?h.ZERO:new h(e,n,r.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(t){const e=r.invertBatch(t.map((t=>t.pz)));return t.map(((t,r)=>t.toAffine(e[r]))).map(h.fromAffine)}static fromHex(t){const e=h.fromAffine(i(H("pointHex",t)));return e.assertValidity(),e}static fromPrivateKey(t){return h.BASE.multiply(a(t))}_setWindowSize(t){this._WINDOW_SIZE=t,c.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint&&!r.is0(this.py))return;throw new Error("bad point: ZERO")}const{x:t,y:n}=this.toAffine();if(!r.isValid(t)||!r.isValid(n))throw new Error("bad point: x or y not FE");const i=r.sqr(n),s=o(t);if(!r.eql(i,s))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:t}=this.toAffine();if(r.isOdd)return!r.isOdd(t);throw new Error("Field doesn't support isOdd")}equals(t){u(t);const{px:e,py:n,pz:i}=this,{px:o,py:s,pz:f}=t,a=r.eql(r.mul(e,f),r.mul(o,i)),c=r.eql(r.mul(n,f),r.mul(s,i));return a&&c}negate(){return new h(this.px,r.neg(this.py),this.pz)}double(){const{a:t,b:n}=e,i=r.mul(n,dt),{px:o,py:s,pz:f}=this;let a=r.ZERO,c=r.ZERO,u=r.ZERO,d=r.mul(o,o),l=r.mul(s,s),g=r.mul(f,f),w=r.mul(o,s);return w=r.add(w,w),u=r.mul(o,f),u=r.add(u,u),a=r.mul(t,u),c=r.mul(i,g),c=r.add(a,c),a=r.sub(l,c),c=r.add(l,c),c=r.mul(a,c),a=r.mul(w,a),u=r.mul(i,u),g=r.mul(t,g),w=r.sub(d,g),w=r.mul(t,w),w=r.add(w,u),u=r.add(d,d),d=r.add(u,d),d=r.add(d,g),d=r.mul(d,w),c=r.add(c,d),g=r.mul(s,f),g=r.add(g,g),d=r.mul(g,w),a=r.sub(a,d),u=r.mul(g,l),u=r.add(u,u),u=r.add(u,u),new h(a,c,u)}add(t){u(t);const{px:n,py:i,pz:o}=this,{px:s,py:f,pz:a}=t;let c=r.ZERO,d=r.ZERO,l=r.ZERO;const g=e.a,w=r.mul(e.b,dt);let p=r.mul(n,s),y=r.mul(i,f),b=r.mul(o,a),m=r.add(n,i),x=r.add(s,f);m=r.mul(m,x),x=r.add(p,y),m=r.sub(m,x),x=r.add(n,o);let E=r.add(s,a);return x=r.mul(x,E),E=r.add(p,b),x=r.sub(x,E),E=r.add(i,o),c=r.add(f,a),E=r.mul(E,c),c=r.add(y,b),E=r.sub(E,c),l=r.mul(g,x),c=r.mul(w,b),l=r.add(c,l),c=r.sub(y,l),l=r.add(y,l),d=r.mul(c,l),y=r.add(p,p),y=r.add(y,p),b=r.mul(g,b),x=r.mul(w,x),y=r.add(y,b),b=r.sub(p,b),b=r.mul(g,b),x=r.add(x,b),p=r.mul(y,x),d=r.add(d,p),p=r.mul(E,x),c=r.mul(m,c),c=r.sub(c,p),p=r.mul(m,y),l=r.mul(E,l),l=r.add(l,p),new h(c,d,l)}subtract(t){return this.add(t.negate())}is0(){return this.equals(h.ZERO)}wNAF(t){return l.wNAFCached(this,c,t,(t=>{const e=r.invertBatch(t.map((t=>t.pz)));return t.map(((t,r)=>t.toAffine(e[r]))).map(h.fromAffine)}))}multiplyUnsafe(t){const n=h.ZERO;if(t===ut)return n;if(f(t),t===ht)return this;const{endo:i}=e;if(!i)return l.unsafeLadder(this,t);let{k1neg:o,k1:s,k2neg:a,k2:c}=i.splitScalar(t),u=n,d=n,g=this;for(;s>ut||c>ut;)s&ht&&(u=u.add(g)),c&ht&&(d=d.add(g)),g=g.double(),s>>=ht,c>>=ht;return o&&(u=u.negate()),a&&(d=d.negate()),d=new h(r.mul(d.px,i.beta),d.py,d.pz),u.add(d)}multiply(t){f(t);let n,i,o=t;const{endo:s}=e;if(s){const{k1neg:t,k1:e,k2neg:f,k2:a}=s.splitScalar(o);let{p:c,f:u}=this.wNAF(e),{p:d,f:g}=this.wNAF(a);c=l.constTimeNegate(t,c),d=l.constTimeNegate(f,d),d=new h(r.mul(d.px,s.beta),d.py,d.pz),n=c.add(d),i=u.add(g)}else{const{p:t,f:e}=this.wNAF(o);n=t,i=e}return h.normalizeZ([n,i])[0]}multiplyAndAddUnsafe(t,e,r){const n=h.BASE,i=(t,e)=>e!==ut&&e!==ht&&t.equals(n)?t.multiply(e):t.multiplyUnsafe(e),o=i(this,e).add(i(t,r));return o.is0()?void 0:o}toAffine(t){const{px:e,py:n,pz:i}=this,o=this.is0();null==t&&(t=o?r.ONE:r.inv(i));const s=r.mul(e,t),f=r.mul(n,t),a=r.mul(i,t);if(o)return{x:r.ZERO,y:r.ZERO};if(!r.eql(a,r.ONE))throw new Error("invZ was invalid");return{x:s,y:f}}isTorsionFree(){const{h:t,isTorsionFree:r}=e;if(t===ht)return!0;if(r)return r(h,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:t,clearCofactor:r}=e;return t===ht?this:r?r(h,this):this.multiplyUnsafe(e.h)}toRawBytes(t=!0){return this.assertValidity(),n(h,this,t)}toHex(t=!0){return A(this.toRawBytes(t))}}h.BASE=new h(e.Gx,e.Gy,r.ONE),h.ZERO=new h(r.ZERO,r.ONE,r.ZERO);const d=e.nBitLength,l=function(t,e){const r=(t,e)=>{const r=e.negate();return t?r:e},n=t=>({windows:Math.ceil(e/t)+1,windowSize:2**(t-1)});return{constTimeNegate:r,unsafeLadder(e,r){let n=t.ZERO,i=e;for(;r>it;)r&ot&&(n=n.add(i)),i=i.double(),r>>=ot;return n},precomputeWindow(t,e){const{windows:r,windowSize:i}=n(e),o=[];let s=t,f=s;for(let t=0;t<r;t++){f=s,o.push(f);for(let t=1;t<i;t++)f=f.add(s),o.push(f);s=f.double()}return o},wNAF(e,i,o){const{windows:s,windowSize:f}=n(e);let a=t.ZERO,c=t.BASE;const u=BigInt(2**e-1),h=2**e,d=BigInt(e);for(let t=0;t<s;t++){const e=t*f;let n=Number(o&u);o>>=d,n>f&&(n-=h,o+=ot);const s=e,l=e+Math.abs(n)-1,g=t%2!=0,w=n<0;0===n?c=c.add(r(g,i[s])):a=a.add(r(w,i[l]))}return{p:a,f:c}},wNAFCached(t,e,r,n){const i=t._WINDOW_SIZE||1;let o=e.get(t);return o||(o=this.precomputeWindow(t,i),1!==i&&e.set(t,n(o))),this.wNAF(i,o,r)}}}(h,e.endo?Math.ceil(d/2):d);return{CURVE:e,ProjectivePoint:h,normPrivateKeyToScalar:a,weierstrassEquation:o,isWithinCurveOrder:s}}function gt(t){const e=function(t){const e=st(t);return z(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}(t),{Fp:r,n:n}=e,i=r.BYTES+1,o=2*r.BYTES+1;function s(t){return W(t,n)}function f(t){return J(t,n)}const{ProjectivePoint:a,normPrivateKeyToScalar:c,weierstrassEquation:u,isWithinCurveOrder:h}=lt({...e,toBytes(t,e,n){const i=e.toAffine(),o=r.toBytes(i.x),s=O;return n?s(Uint8Array.from([e.hasEvenY()?2:3]),o):s(Uint8Array.from([4]),o,r.toBytes(i.y))},fromBytes(t){const e=t.length,n=t[0],s=t.subarray(1);if(e!==i||2!==n&&3!==n){if(e===o&&4===n){return{x:r.fromBytes(s.subarray(0,r.BYTES)),y:r.fromBytes(s.subarray(r.BYTES,2*r.BYTES))}}throw new Error(`Point of length ${e} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`)}{const t=S(s);if(!(ut<(f=t)&&f<r.ORDER))throw new Error("Point is not on curve");const e=u(t);let i=r.sqrt(e);return 1==(1&n)!==((i&ht)===ht)&&(i=r.neg(i)),{x:t,y:i}}var f}}),d=t=>A($(t,e.nByteLength));function l(t){return t>n>>ht}const g=(t,e,r)=>S(t.slice(e,r));class w{constructor(t,e,r){this.r=t,this.s=e,this.recovery=r,this.assertValidity()}static fromCompact(t){const r=e.nByteLength;return t=H("compactSignature",t,2*r),new w(g(t,0,r),g(t,r,2*r))}static fromDER(t){const{r:e,s:r}=ct.toSig(H("DER",t));return new w(e,r)}assertValidity(){if(!h(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!h(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(t){return new w(this.r,this.s,t)}recoverPublicKey(t){const{r:n,s:i,recovery:o}=this,c=m(H("msgHash",t));if(null==o||![0,1,2,3].includes(o))throw new Error("recovery id invalid");const u=2===o||3===o?n+e.n:n;if(u>=r.ORDER)throw new Error("recovery id 2 or 3 invalid");const h=0==(1&o)?"02":"03",l=a.fromHex(h+d(u)),g=f(u),w=s(-c*g),p=s(i*g),y=a.BASE.multiplyAndAddUnsafe(l,w,p);if(!y)throw new Error("point at infinify");return y.assertValidity(),y}hasHighS(){return l(this.s)}normalizeS(){return this.hasHighS()?new w(this.r,s(-this.s),this.recovery):this}toDERRawBytes(){return U(this.toDERHex())}toDERHex(){return ct.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return U(this.toCompactHex())}toCompactHex(){return d(this.r)+d(this.s)}}const p={isValidPrivateKey(t){try{return c(t),!0}catch(t){return!1}},normPrivateKeyToScalar:c,randomPrivateKey:()=>{const t=nt(e.n);return function(t,e,r=!1){const n=t.length,i=rt(e),o=nt(e);if(n<16||n<o||n>1024)throw new Error(`expected ${o}-1024 bytes of input, got ${n}`);const s=W(r?S(t):L(t),e-F)+F;return r?k(s,i):$(s,i)}(e.randomBytes(t),e.n)},precompute:(t=8,e=a.BASE)=>(e._setWindowSize(t),e.multiply(BigInt(3)),e)};function y(t){const e=t instanceof Uint8Array,r="string"==typeof t,n=(e||r)&&t.length;return e?n===i||n===o:r?n===2*i||n===2*o:t instanceof a}const b=e.bits2int||function(t){const r=S(t),n=8*t.length-e.nBitLength;return n>0?r>>BigInt(n):r},m=e.bits2int_modN||function(t){return s(b(t))},x=N(e.nBitLength);function E(t){if("bigint"!=typeof t)throw new Error("bigint expected");if(!(ut<=t&&t<x))throw new Error(`bigint expected < 2^${e.nBitLength}`);return $(t,e.nByteLength)}function v(t,n,i=B){if(["recovered","canonical"].some((t=>t in i)))throw new Error("sign() legacy options not supported");const{hash:o,randomBytes:u}=e;let{lowS:d,prehash:g,extraEntropy:p}=i;null==d&&(d=!0),t=H("msgHash",t),g&&(t=H("prehashed msgHash",o(t)));const y=m(t),x=c(n),v=[E(x),E(y)];if(null!=p){const t=!0===p?u(r.BYTES):p;v.push(H("extraEntropy",t))}const A=O(...v),_=y;return{seed:A,k2sig:function(t){const e=b(t);if(!h(e))return;const r=f(e),n=a.BASE.multiply(e).toAffine(),i=s(n.x);if(i===ut)return;const o=s(r*s(_+i*x));if(o===ut)return;let c=(n.x===i?0:2)|Number(n.y&ht),u=o;return d&&l(o)&&(u=function(t){return l(t)?s(-t):t}(o),c^=1),new w(i,u,c)}}}const B={lowS:e.lowS,prehash:!1},_={lowS:e.lowS,prehash:!1};return a.BASE._setWindowSize(8),{CURVE:e,getPublicKey:function(t,e=!0){return a.fromPrivateKey(t).toRawBytes(e)},getSharedSecret:function(t,e,r=!0){if(y(t))throw new Error("first arg must be private key");if(!y(e))throw new Error("second arg must be public key");return a.fromHex(e).multiply(c(t)).toRawBytes(r)},sign:function(t,r,n=B){const{seed:i,k2sig:o}=v(t,r,n),s=e;return j(s.hash.outputLen,s.nByteLength,s.hmac)(i,o)},verify:function(t,r,n,i=_){const o=t;if(r=H("msgHash",r),n=H("publicKey",n),"strict"in i)throw new Error("options.strict was renamed to lowS");const{lowS:c,prehash:u}=i;let h,d;try{if("string"==typeof o||o instanceof Uint8Array)try{h=w.fromDER(o)}catch(t){if(!(t instanceof ct.Err))throw t;h=w.fromCompact(o)}else{if("object"!=typeof o||"bigint"!=typeof o.r||"bigint"!=typeof o.s)throw new Error("PARSE");{const{r:t,s:e}=o;h=new w(t,e)}}d=a.fromHex(n)}catch(t){if("PARSE"===t.message)throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(c&&h.hasHighS())return!1;u&&(r=e.hash(r));const{r:l,s:g}=h,p=m(r),y=f(g),b=s(p*y),x=s(l*y),E=a.BASE.multiplyAndAddUnsafe(d,b,x)?.toAffine();return!!E&&s(E.x)===l},ProjectivePoint:a,Signature:w,utils:p}}BigInt(4);class wt extends c{constructor(t,r){super(),this.finished=!1,this.destroyed=!1,function(t){if("function"!=typeof t||"function"!=typeof t.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");e(t.outputLen),e(t.blockLen)}(t);const n=a(r);if(this.iHash=t.create(),"function"!=typeof this.iHash.update)throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const i=this.blockLen,o=new Uint8Array(i);o.set(n.length>i?t.create().update(n).digest():n);for(let t=0;t<o.length;t++)o[t]^=54;this.iHash.update(o),this.oHash=t.create();for(let t=0;t<o.length;t++)o[t]^=106;this.oHash.update(o),o.fill(0)}update(t){return n(this),this.iHash.update(t),this}digestInto(t){n(this),r(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:e,iHash:r,finished:n,destroyed:i,blockLen:o,outputLen:s}=this;return t.finished=n,t.destroyed=i,t.blockLen=o,t.outputLen=s,t.oHash=e._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const pt=(t,e,r)=>new wt(t,e).update(r).digest();
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function yt(t){return{hash:t,hmac:(e,...r)=>pt(t,e,function(...t){const e=new Uint8Array(t.reduce(((t,e)=>t+e.length),0));let r=0;return t.forEach((t=>{if(!o(t))throw new Error("Uint8Array expected");e.set(t,r),r+=t.length})),e}(...r)),randomBytes:h}}pt.create=(t,e)=>new wt(t,e);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const bt=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),mt=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),xt=BigInt(1),Et=BigInt(2),vt=(t,e)=>(t+e/Et)/e;function Bt(t){const e=bt,r=BigInt(3),n=BigInt(6),i=BigInt(11),o=BigInt(22),s=BigInt(23),f=BigInt(44),a=BigInt(88),c=t*t*t%e,u=c*c*t%e,h=M(u,r,e)*u%e,d=M(h,r,e)*u%e,l=M(d,Et,e)*c%e,g=M(l,i,e)*l%e,w=M(g,o,e)*g%e,p=M(w,f,e)*w%e,y=M(p,a,e)*p%e,b=M(y,f,e)*w%e,m=M(b,r,e)*u%e,x=M(m,s,e)*g%e,E=M(x,n,e)*c%e,v=M(E,Et,e);if(!At.eql(At.sqr(v),t))throw new Error("Cannot find square root");return v}const At=et(bt,void 0,void 0,{sqrt:Bt}),_t=function(t,e){const r=e=>gt({...t,...yt(e)});return Object.freeze({...r(e),create:r})}({a:BigInt(0),b:BigInt(7),Fp:At,n:mt,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=mt,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),n=-xt*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),i=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),o=r,s=BigInt("0x100000000000000000000000000000000"),f=vt(o*t,e),a=vt(-n*t,e);let c=W(t-f*r-a*i,e),u=W(-f*n-a*o,e);const h=c>s,d=u>s;if(h&&(c=e-c),d&&(u=e-u),c>s||u>s)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:h,k1:c,k2neg:d,k2:u}}}},b),It=BigInt(0),Ut=t=>"bigint"==typeof t&&It<t&&t<bt,St=t=>"bigint"==typeof t&&It<t&&t<mt,Lt={};function $t(t,...e){let r=Lt[t];if(void 0===r){const e=b(Uint8Array.from(t,(t=>t.charCodeAt(0))));r=O(e,e),Lt[t]=r}return b(O(r,...e))}const kt=t=>t.toRawBytes(!0).slice(1),Ht=t=>$(t,32),Ot=t=>W(t,bt),Nt=t=>W(t,mt),Rt=_t.ProjectivePoint,Tt=(t,e,r)=>Rt.BASE.multiplyAndAddUnsafe(t,e,r);function jt(t){let e=_t.utils.normPrivateKeyToScalar(t),r=Rt.fromPrivateKey(e);return{scalar:r.hasEvenY()?e:Nt(-e),bytes:kt(r)}}function Ct(t){if(!Ut(t))throw new Error("bad x: need 0 < x < p");const e=Ot(t*t);let r=Bt(Ot(e*t+BigInt(7)));r%Et!==It&&(r=Ot(-r));const n=new Rt(t,r,xt);return n.assertValidity(),n}function zt(...t){return Nt(S($t("BIP0340/challenge",...t)))}function Pt(t){return jt(t).bytes}function qt(t,e,r=h(32)){const n=H("message",t),{bytes:i,scalar:o}=jt(e),s=H("auxRand",r,32),f=Ht(o^S($t("BIP0340/aux",s))),a=$t("BIP0340/nonce",f,i,n),c=Nt(S(a));if(c===It)throw new Error("sign failed: k is zero");const{bytes:u,scalar:d}=jt(c),l=zt(u,i,n),g=new Uint8Array(64);if(g.set(u,0),g.set(Ht(Nt(d+l*o)),32),!Ft(g,n,i))throw new Error("sign: Invalid signature produced");return g}function Ft(t,e,r){const n=H("signature",t,64),i=H("message",e),o=H("publicKey",r,32);try{const t=Ct(S(o)),e=S(n.subarray(0,32));if(!Ut(e))return!1;const r=S(n.subarray(32,64));if(!St(r))return!1;const s=zt(Ht(e),kt(t),i),f=Tt(t,r,Nt(-s));return!(!f||!f.hasEvenY()||f.toAffine().x!==e)}catch(t){return!1}}const Vt=(()=>({getPublicKey:Pt,sign:qt,verify:Ft,utils:{randomPrivateKey:_t.utils.randomPrivateKey,lift_x:Ct,pointToBytes:kt,numberToBytesBE:$,bytesToNumberBE:S,taggedHash:$t,mod:W}}))(),Dt={throws:!1,xonly:!0};function Gt(t={}){return{...Dt,...t}}function Zt(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function Yt(t,e){!function(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}(t);const r=e.outputLen;if(t.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Wt=t=>t instanceof Uint8Array,Kt=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Mt=(t,e)=>t<<32-e|t>>>e;if(!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");function Jt(t){if("string"==typeof t&&(t=function(t){if("string"!=typeof t)throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array((new TextEncoder).encode(t))}(t)),!Wt(t))throw new Error("expected Uint8Array, got "+typeof t);return t}class Xt{clone(){return this._cloneInto()}}function Qt(t){const e=e=>t().update(Jt(e)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e}class te extends Xt{constructor(t,e,r,n){super(),this.blockLen=t,this.outputLen=e,this.padOffset=r,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=Kt(this.buffer)}update(t){Zt(this);const{view:e,buffer:r,blockLen:n}=this,i=(t=Jt(t)).length;for(let o=0;o<i;){const s=Math.min(n-this.pos,i-o);if(s!==n)r.set(t.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===n&&(this.process(e,0),this.pos=0);else{const e=Kt(t);for(;n<=i-o;o+=n)this.process(e,o)}}return this.length+=t.length,this.roundClean(),this}digestInto(t){Zt(this),Yt(t,this),this.finished=!0;const{buffer:e,view:r,blockLen:n,isLE:i}=this;let{pos:o}=this;e[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>n-o&&(this.process(r,0),o=0);for(let t=o;t<n;t++)e[t]=0;!function(t,e,r,n){if("function"==typeof t.setBigUint64)return t.setBigUint64(e,r,n);const i=BigInt(32),o=BigInt(4294967295),s=Number(r>>i&o),f=Number(r&o),a=n?4:0,c=n?0:4;t.setUint32(e+a,s,n),t.setUint32(e+c,f,n)}(r,n-8,BigInt(8*this.length),i),this.process(r,0);const s=Kt(t),f=this.outputLen;if(f%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const a=f/4,c=this.get();if(a>c.length)throw new Error("_sha2: outputLen bigger than state");for(let t=0;t<a;t++)s.setUint32(4*t,c[t],i)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const r=t.slice(0,e);return this.destroy(),r}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:r,length:n,finished:i,destroyed:o,pos:s}=this;return t.length=n,t.pos=s,t.finished=i,t.destroyed=o,n%e&&t.buffer.set(r),t}}const ee=(t,e,r)=>t&e^t&r^e&r,re=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ne=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),ie=new Uint32Array(64);class oe extends te{constructor(){super(64,32,8,!1),this.A=0|ne[0],this.B=0|ne[1],this.C=0|ne[2],this.D=0|ne[3],this.E=0|ne[4],this.F=0|ne[5],this.G=0|ne[6],this.H=0|ne[7]}get(){const{A:t,B:e,C:r,D:n,E:i,F:o,G:s,H:f}=this;return[t,e,r,n,i,o,s,f]}set(t,e,r,n,i,o,s,f){this.A=0|t,this.B=0|e,this.C=0|r,this.D=0|n,this.E=0|i,this.F=0|o,this.G=0|s,this.H=0|f}process(t,e){for(let r=0;r<16;r++,e+=4)ie[r]=t.getUint32(e,!1);for(let t=16;t<64;t++){const e=ie[t-15],r=ie[t-2],n=Mt(e,7)^Mt(e,18)^e>>>3,i=Mt(r,17)^Mt(r,19)^r>>>10;ie[t]=i+ie[t-7]+n+ie[t-16]|0}let{A:r,B:n,C:i,D:o,E:s,F:f,G:a,H:c}=this;for(let t=0;t<64;t++){const e=c+(Mt(s,6)^Mt(s,11)^Mt(s,25))+((u=s)&f^~u&a)+re[t]+ie[t]|0,h=(Mt(r,2)^Mt(r,13)^Mt(r,22))+ee(r,n,i)|0;c=a,a=f,f=s,s=o+e|0,o=i,i=n,n=r,r=e+h|0}var u;r=r+this.A|0,n=n+this.B|0,i=i+this.C|0,o=o+this.D|0,s=s+this.E|0,f=f+this.F|0,a=a+this.G|0,c=c+this.H|0,this.set(r,n,i,o,s,f,a,c)}roundClean(){ie.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const se=Qt((()=>new oe));
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function fe(...t){const e=(t,e)=>r=>t(e(r));return{encode:Array.from(t).reverse().reduce(((t,r)=>t?e(t,r.encode):r.encode),void 0),decode:t.reduce(((t,r)=>t?e(t,r.decode):r.decode),void 0)}}function ae(t){return{encode:e=>{if(!Array.isArray(e)||e.length&&"number"!=typeof e[0])throw new Error("alphabet.encode input should be an array of numbers");return e.map((e=>{if(e<0||e>=t.length)throw new Error(`Digit index outside alphabet: ${e} (alphabet: ${t.length})`);return t[e]}))},decode:e=>{if(!Array.isArray(e)||e.length&&"string"!=typeof e[0])throw new Error("alphabet.decode input should be array of strings");return e.map((e=>{if("string"!=typeof e)throw new Error(`alphabet.decode: not string element=${e}`);const r=t.indexOf(e);if(-1===r)throw new Error(`Unknown letter: "${e}". Allowed: ${t}`);return r}))}}}function ce(t=""){if("string"!=typeof t)throw new Error("join separator should be string");return{encode:e=>{if(!Array.isArray(e)||e.length&&"string"!=typeof e[0])throw new Error("join.encode input should be array of strings");for(let t of e)if("string"!=typeof t)throw new Error(`join.encode: non-string input=${t}`);return e.join(t)},decode:e=>{if("string"!=typeof e)throw new Error("join.decode input should be string");return e.split(t)}}}function ue(t,e="="){if("string"!=typeof e)throw new Error("padding chr should be string");return{encode(r){if(!Array.isArray(r)||r.length&&"string"!=typeof r[0])throw new Error("padding.encode input should be array of strings");for(let t of r)if("string"!=typeof t)throw new Error(`padding.encode: non-string input=${t}`);for(;r.length*t%8;)r.push(e);return r},decode(r){if(!Array.isArray(r)||r.length&&"string"!=typeof r[0])throw new Error("padding.encode input should be array of strings");for(let t of r)if("string"!=typeof t)throw new Error(`padding.decode: non-string input=${t}`);let n=r.length;if(n*t%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;n>0&&r[n-1]===e;n--)if(!((n-1)*t%8))throw new Error("Invalid padding: string has too much padding");return r.slice(0,n)}}}function he(t,e,r){if(e<2)throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);if(r<2)throw new Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);if(!Array.isArray(t))throw new Error("convertRadix: data should be array");if(!t.length)return[];let n=0;const i=[],o=Array.from(t);for(o.forEach((t=>{if(t<0||t>=e)throw new Error(`Wrong integer: ${t}`)}));;){let t=0,s=!0;for(let i=n;i<o.length;i++){const f=o[i],a=e*t+f;if(!Number.isSafeInteger(a)||e*t/e!==t||a-f!=e*t)throw new Error("convertRadix: carry overflow");t=a%r;const c=Math.floor(a/r);if(o[i]=c,!Number.isSafeInteger(c)||c*r+t!==a)throw new Error("convertRadix: carry overflow");s&&(c?s=!1:n=i)}if(i.push(t),s)break}for(let e=0;e<t.length-1&&0===t[e];e++)i.push(0);return i.reverse()}const de=(t,e)=>e?de(e,t%e):t,le=(t,e)=>t+(e-de(t,e));function ge(t,e,r,n){if(!Array.isArray(t))throw new Error("convertRadix2: data should be array");if(e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(r<=0||r>32)throw new Error(`convertRadix2: wrong to=${r}`);if(le(e,r)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${r} carryBits=${le(e,r)}`);let i=0,o=0;const s=2**r-1,f=[];for(const n of t){if(n>=2**e)throw new Error(`convertRadix2: invalid data word=${n} from=${e}`);if(i=i<<e|n,o+e>32)throw new Error(`convertRadix2: carry overflow pos=${o} from=${e}`);for(o+=e;o>=r;o-=r)f.push((i>>o-r&s)>>>0);i&=2**o-1}if(i=i<<r-o&s,!n&&o>=e)throw new Error("Excess padding");if(!n&&i)throw new Error(`Non-zero padding: ${i}`);return n&&o>0&&f.push(i>>>0),f}function we(t,e=!1){if(t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(le(8,t)>32||le(t,8)>32)throw new Error("radix2: carry overflow");return{encode:r=>{if(!(r instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return ge(Array.from(r),8,t,!e)},decode:r=>{if(!Array.isArray(r)||r.length&&"number"!=typeof r[0])throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(ge(r,t,8,e))}}}function pe(t){if("function"!=typeof t)throw new Error("unsafeWrapper fn should be function");return function(...e){try{return t.apply(null,e)}catch(t){}}}const ye=fe(we(6),ae("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),ue(6),ce("")),be=fe(we(6),ae("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),ue(6),ce("")),me=t=>{return fe((e=58,{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return he(Array.from(t),256,e)},decode:t=>{if(!Array.isArray(t)||t.length&&"number"!=typeof t[0])throw new Error("radix.decode input should be array of strings");return Uint8Array.from(he(t,e,256))}}),ae(t),ce(""));var e},xe=me("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),Ee=t=>fe(function(t,e){if("function"!=typeof e)throw new Error("checksum fn should be function");return{encode(r){if(!(r instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const n=e(r).slice(0,t),i=new Uint8Array(r.length+t);return i.set(r),i.set(n,r.length),i},decode(r){if(!(r instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const n=r.slice(0,-t),i=e(n).slice(0,t),o=r.slice(-t);for(let e=0;e<t;e++)if(i[e]!==o[e])throw new Error("Invalid checksum");return n}}}(4,(e=>t(t(e)))),xe),ve=fe(ae("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),ce("")),Be=[996825010,642813549,513874426,1027748829,705979059];function Ae(t){const e=t>>25;let r=(33554431&t)<<5;for(let t=0;t<Be.length;t++)1==(e>>t&1)&&(r^=Be[t]);return r}function _e(t,e,r=1){const n=t.length;let i=1;for(let e=0;e<n;e++){const r=t.charCodeAt(e);if(r<33||r>126)throw new Error(`Invalid prefix (${t})`);i=Ae(i)^r>>5}i=Ae(i);for(let e=0;e<n;e++)i=Ae(i)^31&t.charCodeAt(e);for(let t of e)i=Ae(i)^t;for(let t=0;t<6;t++)i=Ae(i);return i^=r,ve.encode(ge([i%2**30],30,5,!1))}function Ie(t){const e="bech32"===t?1:734539939,r=we(5),n=r.decode,i=r.encode,o=pe(n);function s(t,r=90){if("string"!=typeof t)throw new Error("bech32.decode input should be string, not "+typeof t);if(t.length<8||!1!==r&&t.length>r)throw new TypeError(`Wrong string length: ${t.length} (${t}). Expected (8..${r})`);const n=t.toLowerCase();if(t!==n&&t!==t.toUpperCase())throw new Error("String must be lowercase or uppercase");const i=(t=n).lastIndexOf("1");if(0===i||-1===i)throw new Error('Letter "1" must be present between prefix and data only');const o=t.slice(0,i),s=t.slice(i+1);if(s.length<6)throw new Error("Data must be at least 6 characters long");const f=ve.decode(s).slice(0,-6),a=_e(o,f,e);if(!s.endsWith(a))throw new Error(`Invalid checksum in ${t}: expected "${a}"`);return{prefix:o,words:f}}return{encode:function(t,r,n=90){if("string"!=typeof t)throw new Error("bech32.encode prefix should be string, not "+typeof t);if(!Array.isArray(r)||r.length&&"number"!=typeof r[0])throw new Error("bech32.encode words should be array of numbers, not "+typeof r);const i=t.length+7+r.length;if(!1!==n&&i>n)throw new TypeError(`Length ${i} exceeds limit ${n}`);const o=t.toLowerCase(),s=_e(o,r,e);return`${o}1${ve.encode(r)}${s}`},decode:s,decodeToBytes:function(t){const{prefix:e,words:r}=s(t,!1);return{prefix:e,words:r,bytes:n(r)}},decodeUnsafe:pe(s),fromWords:n,fromWordsUnsafe:o,toWords:i}}const Ue=Ie("bech32"),Se=Ie("bech32m"),Le={b58chk:{encode:t=>Ee(se).encode(t),decode:t=>Ee(se).decode(t)},base64:{encode:t=>ye.encode(t),decode:t=>ye.decode(t)},b64url:{encode:t=>be.encode(t),decode:t=>be.decode(t)},bech32:{to_words:Ue.toWords,to_bytes:Ue.fromWords,encode:(t,e,r=!1)=>Ue.encode(t,e,r),decode:(t,e=!1)=>{const{prefix:r,words:n}=Ue.decode(t,e);return{prefix:r,words:n}}},bech32m:{to_words:Se.toWords,to_bytes:Se.fromWords,encode:(t,e,r=!1)=>Se.encode(t,e,r),decode:(t,e=!1)=>{const{prefix:r,words:n}=Se.decode(t,e);return{prefix:r,words:n}}}};function $e(t){if(t>Number.MAX_SAFE_INTEGER)throw new TypeError("Number exceeds safe bounds!")}function ke(t,e){if(t!==e)throw new TypeError(`Bech32 prefix does not match: ${t} !== ${e}`)}const He=BigInt(0),Oe=BigInt(255),Ne=BigInt(256);function Re(t,e,r="be"){void 0===e&&(e=function(t){if(t<=0xffn)return 1;if(t<=0xffffn)return 2;if(t<=0xffffffffn)return 4;if(t<=0xffffffffffffffffn)return 8;if(t<=0xffffffffffffffffffffffffffffffffn)return 16;if(t<=0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn)return 32;throw new TypeError("Must specify a fixed buffer size for bigints greater than 32 bytes.")}(t));const n="le"===r,i=new ArrayBuffer(e),o=new DataView(i);let s=n?0:e-1;for(;t>He;){const e=t&Oe,r=Number(e);n?o.setUint8(s++,r):o.setUint8(s--,r),t=(t-e)/Ne}return new Uint8Array(i)}function Te(t,e,r="be"){void 0===e&&(e=function(t){if(t<=255)return 1;if(t<=65535)return 2;if(t<=4294967295)return 4;throw new TypeError("Numbers larger than 4 bytes must specify a fixed size!")}(t));const n="le"===r,i=new ArrayBuffer(e),o=new DataView(i);let s=n?0:e-1;for(;t>0;){const e=255&t;n?o.setUint8(s++,t):o.setUint8(s--,t),t=(t-e)/256}return new Uint8Array(i)}const je=new TextEncoder,Ce=new TextDecoder;function ze(t){return je.encode(t)}function Pe(t){return Ce.decode(t)}function qe(t,e){!function(t){if(null!==t.match(/[^a-fA-f0-9]/))throw new TypeError("Invalid characters in hex string: "+t);if(t.length%2!=0)throw new Error(`Length of hex string is invalid: ${t.length}`)}(t);const r=t.length/2;if(void 0===e&&(e=r),r>e)throw new TypeError(`Hex string is larger than array size: ${r} > ${e}`);return e}const{getRandomValues:Fe}=crypto??globalThis.crypto??window.crypto;function Ve(t){return null===t.match(/[^a-fA-f0-9]/)&&t.length%2==0}function De(t){return!("string"!=typeof t||!Ve(t))||("number"==typeof t||"bigint"==typeof t||t instanceof Uint8Array||!(!Array.isArray(t)||!t.every((t=>"number"==typeof t))))}function Ge(t,e,r="be"){void 0===e&&(e=t.length),function(t,e){if(t.length>e)throw new TypeError(`Data is larger than array size: ${t.length} > ${e}`)}(t,e);const n=new Uint8Array(e).fill(0),i="be"===r?0:e-t.length;return n.set(t,i),n}function Ze(t){let e,r=0;const n=t.reduce(((t,e)=>t+e.length),0),i=new Uint8Array(n);for(e=0;e<t.length;e++){const n=t[e];i.set(n,r),r+=n.length}return i}function Ye(t,e){return"bigint"==typeof e?`${e}n`:e}function We(t,e){return"string"==typeof e&&/n$/.test(e)?BigInt(e.slice(0,-1)):e}function Ke(t,e,r){if(t instanceof ArrayBuffer)return new Uint8Array(t);if(t instanceof Uint8Array)return Ge(t,e,r);if(Array.isArray(t)){return Ze(t.map((t=>Ke(t,e,r))))}if("string"==typeof t)return function(t,e,r="le"){e=qe(t,e);const n="le"===r,i=new ArrayBuffer(e),o=new DataView(i);let s=n?0:e-1;for(let e=0;e<t.length;e+=2){const r=t.substring(e,e+2),i=parseInt(r,16);n?o.setUint8(s++,i):o.setUint8(s--,i)}return new Uint8Array(i)}(t,e,r);if("bigint"==typeof t)return Re(t,e,r);if("number"==typeof t)return Te(t,e,r);if("boolean"==typeof t)return Uint8Array.of(t?1:0);throw new TypeError("Unsupported format:"+String(typeof t))}class Me extends Uint8Array{static{this.num=Je}static{this.big=Qe}static{this.bin=Xe}static{this.raw=tr}static{this.str=er}static{this.hex=rr}static{this.bytes=hr}static{this.json=nr}static{this.base64=ir}static{this.b64url=or}static{this.bech32=sr}static{this.bech32m=fr}static{this.b58chk=ar}static{this.encode=ze}static{this.decode=Pe}static{this.parse=cr}static{this.is_bytes=De}static{this.is_hex=Ve}static random(t=32){const e=function(t=32){if("function"==typeof Fe)return crypto.getRandomValues(new Uint8Array(t));throw new Error("Crypto module missing getRandomValues!")}(t);return new Me(e,t)}static now(t=4){const e=Math.floor(Date.now()/1e3);return new Me(e,t)}constructor(t,e,r){if(t instanceof Me&&void 0===e)return t;super(Ke(t,e,r))}get arr(){return[...this]}get num(){return this.to_num()}get big(){return this.to_big()}get str(){return this.to_str()}get hex(){return this.to_hex()}get raw(){return new Uint8Array(this)}get bin(){return this.to_bin()}get b58chk(){return this.to_b58chk()}get base64(){return this.to_base64()}get b64url(){return this.to_b64url()}get digest(){return this.to_hash()}get id(){return this.to_hash().hex}get stream(){return new ur(this)}to_num(t="be"){return function(t){let e=0;for(let r=t.length-1;r>=0;r--)e=256*e+t[r],$e(e);return e}("be"===t?this.reverse():this)}to_big(t="be"){return function(t){let e=BigInt(0);for(let r=t.length-1;r>=0;r--)e=e*Ne+BigInt(t[r]);return BigInt(e)}("be"===t?this.reverse():this)}to_bin(){return function(t){const e=new Array(8*t.length);let r=0;for(const n of t){if(n>255)throw new Error(`Invalid byte value: ${n}. Byte values must be between 0 and 255.`);for(let t=7;t>=0;t--,r++)e[r]=n>>t&1}return e.join("")}(this)}to_hash(){const t=se(this);return new Me(t)}to_json(t){void 0===t&&(t=We);const e=Pe(this);return JSON.parse(e,t)}to_bech32(t,e){const{encode:r,to_words:n}=Le.bech32;return r(t,n(this),e)}to_bech32m(t,e){const{encode:r,to_words:n}=Le.bech32m;return r(t,n(this),e)}to_str(){return Pe(this)}to_hex(){return function(t){let e="";for(let r=0;r<t.length;r++)e+=t[r].toString(16).padStart(2,"0");return e}(this)}to_bytes(){return new Uint8Array(this)}to_b58chk(){return Le.b58chk.encode(this)}to_base64(){return Le.base64.encode(this)}to_b64url(){return Le.b64url.encode(this)}append(t){return Me.join([this,Me.bytes(t)])}prepend(t){return Me.join([Me.bytes(t),this])}reverse(){const t=new Uint8Array(this).reverse();return new Me(t)}slice(t,e){const r=new Uint8Array(this).slice(t,e);return new Me(r)}set(t,e){this.set(t,e)}subarray(t,e){const r=new Uint8Array(this).subarray(t,e);return new Me(r)}write(t,e){const r=Me.bytes(t);this.set(r,e)}add_varint(t){const e=Me.calc_varint(this.length,t);return Me.join([e,this])}static from(t){return new Me(Uint8Array.from(t))}static of(...t){return new Me(Uint8Array.of(...t))}static join(t){const e=Ze(t.map((t=>Me.bytes(t))));return new Me(e)}static sort(t,e){const r=t.map((t=>hr(t,e).hex));return r.sort(),r.map((t=>Me.hex(t,e)))}static calc_varint(t,e){if(t<253)return Me.num(t,1);if(t<65536)return Me.of(253,...Me.num(t,2,e));if(t<4294967296)return Me.of(254,...Me.num(t,4,e));if(BigInt(t)<0x10000000000000000n)return Me.of(255,...Me.num(t,8,e));throw new Error(`Value is too large: ${t}`)}}function Je(t,e,r){return new Me(t,e,r)}function Xe(t,e,r){return new Me(function(t){const e=t.split("").map(Number);if(e.length%8!=0)throw new Error(`Binary array is invalid length: ${t.length}`);const r=new Uint8Array(e.length/8);for(let t=0,n=0;t<e.length;t+=8,n++){let i=0;for(let r=0;r<8;r++)i|=e[t+r]<<7-r;r[n]=i}return r}(t),e,r)}function Qe(t,e,r){return new Me(t,e,r)}function tr(t,e,r){return new Me(t,e,r)}function er(t,e,r){return new Me(ze(t),e,r)}function rr(t,e,r){return new Me(t,e,r)}function nr(t,e){void 0===e&&(e=Ye);const r=JSON.stringify(t,e);return new Me(ze(r))}function ir(t){return new Me(Le.base64.decode(t))}function or(t){return new Me(Le.b64url.decode(t))}function sr(t,e,r){const{decode:n,to_bytes:i}=Le.bech32,{prefix:o,words:s}=n(t,e),f=i(s);return"string"==typeof r&&ke(o,r),new Me(f)}function fr(t,e,r){const{decode:n,to_bytes:i}=Le.bech32m,{prefix:o,words:s}=n(t,e),f=i(s);return"string"==typeof r&&ke(o,r),new Me(f)}function ar(t){return new Me(Le.b58chk.decode(t))}function cr(t,e,r){const n=function(t,e,r){const n=t.length,i=r/e;if(r%e!=0)throw new TypeError(`Invalid parameters: ${r} % ${e} !== 0`);if(n!==r)throw new TypeError(`Invalid data stream: ${n} !== ${r}`);if(n%e!=0)throw new TypeError(`Invalid data stream: ${n} % ${e} !== 0`);const o=new Array(i);for(let r=0;r<i;r++){const n=r*e;o[r]=t.subarray(n,n+e)}return o}(Ke(t),e,r);return n.map((t=>Me.bytes(t)))}class ur{constructor(t){this.data=Me.bytes(t),this.size=this.data.length}peek(t){if(t>this.size)throw new Error(`Size greater than stream: ${t} > ${this.size}`);return new Me(this.data.slice(0,t))}read(t){const e=this.peek(t);return this.data=this.data.slice(t),this.size=this.data.length,e}read_varint(t){const e=this.read(1).num;switch(!0){case e>=0&&e<253:return e;case 253===e:return this.read(2).to_num(t);case 254===e:return this.read(4).to_num(t);case 255===e:return this.read(8).to_num(t);default:throw new Error(`Varint is out of range: ${e}`)}}}function hr(t,e,r){return new Me(t,e,r)}const dr=_t.CURVE,lr=dr.n,gr=dr.p,wr={x:dr.Gx,y:dr.Gy},pr=BigInt(0),yr=BigInt(1),br=BigInt(2),mr=BigInt(3),xr=BigInt(4);var Er=Object.freeze({__proto__:null,_0n:pr,_1n:yr,_2n:br,_3n:mr,_4n:xr,_G:wr,_N:lr,_P:gr});const vr=t=>W(t,lr);var Br=Object.freeze({__proto__:null,in_field:t=>"bigint"==typeof t&&pr<t&&t<lr,invert:J,mod:W,modN:vr,modP:t=>W(t,gr),mod_bytes:function(t){const e=Me.bytes(t).big;return Me.big(vr(e),32)},on_curve:t=>"bigint"==typeof t&&pr<t&&t<gr,pow:K,pow2:M,powN:(t,e)=>K(t,e,lr)});function Ar(t,e){if(!1===t)throw new Error(e??"Assertion failed!")}function _r(t,e=!1){if(!e)return!1;throw new Error(t)}function Ir(t,e,r){const n=Me.bytes(t);return n.length===e||_r(`Invalid byte size: ${n.hex} !== ${e}`,r)}function Ur(t,e){return"bigint"==typeof t&&pr<t&&t<gr||_r("x value is not on the curve!",e),!0}function Sr(t,e){return"bigint"==typeof t&&pr<t&&t<lr||_r("x value is not in the field!",e),!0}function Lr(t,e){if(void 0===e){if(!t.startsWith("m"))throw new Error("You need to specify a chain-code for a non-root path.")}else if(32!==Me.bytes(e).length)throw new Error("Chain code must be 32 bytes!")}function $r(t){if(""!==t&&null===t.match(/^(m)?(\/)?(\w+'?\/)*\w+'?$/))throw new Error("Provided path string is invalid: "+t)}function kr(t){if(t>2147483648)throw new TypeError("Index value must not exceed 31 bits.")}var Hr=Object.freeze({__proto__:null,exists:function(t){if(void 0===t)throw new TypeError("Input is undefined!");if(null===t)throw new TypeError("Input is null!")},fail:_r,in_field:Sr,ok:Ar,on_curve:Ur,size:Ir,valid_chain:Lr,valid_derive_state:function(t,e){if(t&&!e)throw new Error("Cannot derive hardedened paths when is_private is false!")},valid_hash:function(t){if(null===t.match(/^[0-9a-fA-F]{64}$/))throw new Error("Provided hash string is invalid: "+t)},valid_index:kr,valid_path:$r,valid_pubkey:function(t){if(33!==Me.bytes(t).length)throw new TypeError("Index value must not exceed 31 bits.")}});const Or=et(lr,32,!0),Nr=_t.ProjectivePoint,Rr=Or;class Tr extends Uint8Array{static{this.N=lr}static add(t){return t.map((t=>Tr.mod(t))).reduce(((t,e)=>t.add(e)))}static mod(t){return new Tr(t)}static mul(t){return t.map((t=>Tr.mod(t))).reduce(((t,e)=>t.mul(e)))}static is_valid(t,e){return Sr(Me.bytes(t,32).big,e)}constructor(t){const e=vr(function(t){if(t instanceof Tr)return t.big;if(t instanceof jr)return t.x.big;if(t instanceof Uint8Array)return Me.raw(t).big;if("string"==typeof t)return Me.hex(t).big;if("number"==typeof t)return Me.num(t).big;if("bigint"==typeof t)return BigInt(t);throw TypeError("Invalid input type:"+typeof t)}(t));Tr.is_valid(e,!0),super(Me.big(e,32),32)}get buff(){return new Me(this)}get raw(){return this.buff.raw}get big(){return this.buff.big}get hex(){return this.buff.hex}get point(){return this.generate()}get hasOddY(){return this.point.hasOddY}get negated(){return this.hasOddY?this.negate():this}gt(t){return new Tr(t).big>this.big}lt(t){return new Tr(t).big<this.big}eq(t){return new Tr(t).big===this.big}ne(t){return new Tr(t).big!==this.big}add(t){const e=Tr.mod(t),r=Rr.add(this.big,e.big);return new Tr(r)}sub(t){const e=Tr.mod(t),r=Rr.sub(this.big,e.big);return new Tr(r)}mul(t){const e=Tr.mod(t),r=Rr.mul(this.big,e.big);return new Tr(r)}pow(t){const e=Tr.mod(t),r=Rr.pow(this.big,e.big);return new Tr(r)}div(t){const e=Tr.mod(t),r=Rr.div(this.big,e.big);return new Tr(r)}negate(){return new Tr(Tr.N-this.big)}generate(){const t=_t.ProjectivePoint.BASE.multiply(this.big);return jr.import(t)}}class jr{static{this.P=gr}static{this.G=new jr(wr.x,wr.y)}static{this.curve=_t.CURVE}static{this.base=_t.ProjectivePoint.BASE}static from_x(t,e=!1){let r=function(t){if(t instanceof Tr)return t.point.buff;if(t instanceof jr)return t.buff;if(t instanceof Uint8Array||"string"==typeof t)return Me.bytes(t);if("number"==typeof t||"bigint"==typeof t)return Me.bytes(t,32);throw new TypeError("Unknown type: "+typeof t)}(t);32===r.length?r=r.prepend(2):e&&(r[0]=2),Ir(r,33);const n=Nr.fromHex(r.hex);return n.assertValidity(),new jr(n.x,n.y)}static generate(t){const e=Tr.mod(t),r=jr.base.multiply(e.big);return jr.import(r)}static{this.mul=jr.generate}static import(t){const e=t instanceof jr?{x:t.x.big,y:t.y.big}:{x:t.x,y:t.y};return new jr(e.x,e.y)}constructor(t,e){this._p=new Nr(t,e,1n),this.p.assertValidity()}get p(){return this._p}get x(){return Me.big(this.p.x,32)}get y(){return Me.big(this.p.y,32)}get buff(){return Me.raw(this.p.toRawBytes(!0))}get raw(){return this.buff.raw}get hex(){return this.buff.hex}get hasEvenY(){return this.p.hasEvenY()}get hasOddY(){return!this.p.hasEvenY()}get negated(){return this.hasOddY?this.negate():this}eq(t){const e=t instanceof jr?t:jr.from_x(t);return this.x.big===e.x.big&&this.y.big===e.y.big}add(t){return t instanceof jr?jr.import(this.p.add(t.p)):jr.import(this.p.add(jr.generate(t).p))}sub(t){return t instanceof jr?jr.import(this.p.subtract(t.p)):jr.import(this.p.subtract(jr.generate(t).p))}mul(t){return t instanceof jr?jr.import(this.p.multiply(t.x.big)):jr.import(this.p.multiply(Tr.mod(t).big))}negate(){return jr.import(this.p.negate())}}const Cr=BigInt(2**32-1),zr=BigInt(32);function Pr(t,e=!1){return e?{h:Number(t&Cr),l:Number(t>>zr&Cr)}:{h:0|Number(t>>zr&Cr),l:0|Number(t&Cr)}}var qr={fromBig:Pr,split:function(t,e=!1){let r=new Uint32Array(t.length),n=new Uint32Array(t.length);for(let i=0;i<t.length;i++){const{h:o,l:s}=Pr(t[i],e);[r[i],n[i]]=[o,s]}return[r,n]},toBig:(t,e)=>BigInt(t>>>0)<<zr|BigInt(e>>>0),shrSH:(t,e,r)=>t>>>r,shrSL:(t,e,r)=>t<<32-r|e>>>r,rotrSH:(t,e,r)=>t>>>r|e<<32-r,rotrSL:(t,e,r)=>t<<32-r|e>>>r,rotrBH:(t,e,r)=>t<<64-r|e>>>r-32,rotrBL:(t,e,r)=>t>>>r-32|e<<64-r,rotr32H:(t,e)=>e,rotr32L:(t,e)=>t,rotlSH:(t,e,r)=>t<<r|e>>>32-r,rotlSL:(t,e,r)=>e<<r|t>>>32-r,rotlBH:(t,e,r)=>e<<r-32|t>>>64-r,rotlBL:(t,e,r)=>t<<r-32|e>>>64-r,add:function(t,e,r,n){const i=(e>>>0)+(n>>>0);return{h:t+r+(i/2**32|0)|0,l:0|i}},add3L:(t,e,r)=>(t>>>0)+(e>>>0)+(r>>>0),add3H:(t,e,r,n)=>e+r+n+(t/2**32|0)|0,add4L:(t,e,r,n)=>(t>>>0)+(e>>>0)+(r>>>0)+(n>>>0),add4H:(t,e,r,n,i)=>e+r+n+i+(t/2**32|0)|0,add5H:(t,e,r,n,i,o)=>e+r+n+i+o+(t/2**32|0)|0,add5L:(t,e,r,n,i)=>(t>>>0)+(e>>>0)+(r>>>0)+(n>>>0)+(i>>>0)};const[Fr,Vr]=(()=>qr.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map((t=>BigInt(t)))))(),Dr=new Uint32Array(80),Gr=new Uint32Array(80);class Zr extends d{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:e,Bh:r,Bl:n,Ch:i,Cl:o,Dh:s,Dl:f,Eh:a,El:c,Fh:u,Fl:h,Gh:d,Gl:l,Hh:g,Hl:w}=this;return[t,e,r,n,i,o,s,f,a,c,u,h,d,l,g,w]}set(t,e,r,n,i,o,s,f,a,c,u,h,d,l,g,w){this.Ah=0|t,this.Al=0|e,this.Bh=0|r,this.Bl=0|n,this.Ch=0|i,this.Cl=0|o,this.Dh=0|s,this.Dl=0|f,this.Eh=0|a,this.El=0|c,this.Fh=0|u,this.Fl=0|h,this.Gh=0|d,this.Gl=0|l,this.Hh=0|g,this.Hl=0|w}process(t,e){for(let r=0;r<16;r++,e+=4)Dr[r]=t.getUint32(e),Gr[r]=t.getUint32(e+=4);for(let t=16;t<80;t++){const e=0|Dr[t-15],r=0|Gr[t-15],n=qr.rotrSH(e,r,1)^qr.rotrSH(e,r,8)^qr.shrSH(e,r,7),i=qr.rotrSL(e,r,1)^qr.rotrSL(e,r,8)^qr.shrSL(e,r,7),o=0|Dr[t-2],s=0|Gr[t-2],f=qr.rotrSH(o,s,19)^qr.rotrBH(o,s,61)^qr.shrSH(o,s,6),a=qr.rotrSL(o,s,19)^qr.rotrBL(o,s,61)^qr.shrSL(o,s,6),c=qr.add4L(i,a,Gr[t-7],Gr[t-16]),u=qr.add4H(c,n,f,Dr[t-7],Dr[t-16]);Dr[t]=0|u,Gr[t]=0|c}let{Ah:r,Al:n,Bh:i,Bl:o,Ch:s,Cl:f,Dh:a,Dl:c,Eh:u,El:h,Fh:d,Fl:l,Gh:g,Gl:w,Hh:p,Hl:y}=this;for(let t=0;t<80;t++){const e=qr.rotrSH(u,h,14)^qr.rotrSH(u,h,18)^qr.rotrBH(u,h,41),b=qr.rotrSL(u,h,14)^qr.rotrSL(u,h,18)^qr.rotrBL(u,h,41),m=u&d^~u&g,x=h&l^~h&w,E=qr.add5L(y,b,x,Vr[t],Gr[t]),v=qr.add5H(E,p,e,m,Fr[t],Dr[t]),B=0|E,A=qr.rotrSH(r,n,28)^qr.rotrBH(r,n,34)^qr.rotrBH(r,n,39),_=qr.rotrSL(r,n,28)^qr.rotrBL(r,n,34)^qr.rotrBL(r,n,39),I=r&i^r&s^i&s,U=n&o^n&f^o&f;p=0|g,y=0|w,g=0|d,w=0|l,d=0|u,l=0|h,({h:u,l:h}=qr.add(0|a,0|c,0|v,0|B)),a=0|s,c=0|f,s=0|i,f=0|o,i=0|r,o=0|n;const S=qr.add3L(B,_,U);r=qr.add3H(S,v,A,I),n=0|S}({h:r,l:n}=qr.add(0|this.Ah,0|this.Al,0|r,0|n)),({h:i,l:o}=qr.add(0|this.Bh,0|this.Bl,0|i,0|o)),({h:s,l:f}=qr.add(0|this.Ch,0|this.Cl,0|s,0|f)),({h:a,l:c}=qr.add(0|this.Dh,0|this.Dl,0|a,0|c)),({h:u,l:h}=qr.add(0|this.Eh,0|this.El,0|u,0|h)),({h:d,l:l}=qr.add(0|this.Fh,0|this.Fl,0|d,0|l)),({h:g,l:w}=qr.add(0|this.Gh,0|this.Gl,0|g,0|w)),({h:p,l:y}=qr.add(0|this.Hh,0|this.Hl,0|p,0|y)),this.set(r,n,i,o,s,f,a,c,u,h,d,l,g,w,p,y)}roundClean(){Dr.fill(0),Gr.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const Yr=u((()=>new Zr)),Wr=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),Kr=Uint8Array.from({length:16},((t,e)=>e));let Mr=[Kr],Jr=[Kr.map((t=>(9*t+5)%16))];for(let t=0;t<4;t++)for(let e of[Mr,Jr])e.push(e[t].map((t=>Wr[t])));const Xr=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map((t=>new Uint8Array(t))),Qr=Mr.map(((t,e)=>t.map((t=>Xr[e][t])))),tn=Jr.map(((t,e)=>t.map((t=>Xr[e][t])))),en=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),rn=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),nn=(t,e)=>t<<e|t>>>32-e;function on(t,e,r,n){return 0===t?e^r^n:1===t?e&r|~e&n:2===t?(e|~r)^n:3===t?e&n|r&~n:e^(r|~n)}const sn=new Uint32Array(16);class fn extends d{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:e,h2:r,h3:n,h4:i}=this;return[t,e,r,n,i]}set(t,e,r,n,i){this.h0=0|t,this.h1=0|e,this.h2=0|r,this.h3=0|n,this.h4=0|i}process(t,e){for(let r=0;r<16;r++,e+=4)sn[r]=t.getUint32(e,!0);let r=0|this.h0,n=r,i=0|this.h1,o=i,s=0|this.h2,f=s,a=0|this.h3,c=a,u=0|this.h4,h=u;for(let t=0;t<5;t++){const e=4-t,d=en[t],l=rn[t],g=Mr[t],w=Jr[t],p=Qr[t],y=tn[t];for(let e=0;e<16;e++){const n=nn(r+on(t,i,s,a)+sn[g[e]]+d,p[e])+u|0;r=u,u=a,a=0|nn(s,10),s=i,i=n}for(let t=0;t<16;t++){const r=nn(n+on(e,o,f,c)+sn[w[t]]+l,y[t])+h|0;n=h,h=c,c=0|nn(f,10),f=o,o=r}}this.set(this.h1+s+c|0,this.h2+a+h|0,this.h3+u+n|0,this.h4+r+o|0,this.h0+i+f|0)}roundClean(){sn.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const an=u((()=>new fn));function cn(t){const e=Me.bytes(t);return Me.raw(an(b(e)))}function un(t,e){const r=Me.bytes(t),n=Me.bytes(e);return Me.raw(pt(Yr,r,n))}function hn(t){const e=Me.str(t).digest;return Me.join([e,e])}function dn(t,...e){const r=hn(t);return Me.join([r,...e]).digest}var ln=Object.freeze({__proto__:null,digest:dn,hash160:cn,hash256:function(t){const e=Me.bytes(t);return Me.raw(b(b(e)))},hmac256:function(t,e){const r=Me.bytes(t),n=Me.bytes(e);return Me.raw(pt(b,r,n))},hmac512:un,ripe160:function(t){const e=Me.bytes(t);return Me.raw(Yr(e))},sha256:function(t){const e=Me.bytes(t);return Me.raw(b(e))},sha512:function(t){const e=Me.bytes(t);return Me.raw(Yr(e))},taghash:hn});function gn(t){return Me.random(t)}function wn(t){switch(typeof t){case"object":return JSON.stringify(t);case"string":return t;case"bigint":case"number":return t.toString();case"boolean":return String(t);default:throw new TypeError("Content type not supported: "+typeof t)}}var pn=Object.freeze({__proto__:null,increment_buffer:function(t){let e=t.length-1;for(;e>=0;e--)if(t[e]<255)return t.set([t[e]+1],e),t;throw TypeError("Unable to increment buffer: "+t.toString())},random:gn,stringify:wn});function yn(t,e=!1){const r=Tr.mod(t);return e?r.negated.buff:r.buff}function bn(t,e=!1){const r=Tr.mod(t).point;return e?r.x:r.buff}function mn(t,e,r){const n=yn(t,r);return[n,bn(n,e)]}function xn(t){const e=Me.bytes(t);if(32===e.length)return e;if(33===e.length)return e.slice(1,33);throw new TypeError(`Invalid key length: ${e.length}`)}function En(t,e=!1){const r=Me.bytes(t);if(32===r.length)return r.prepend(2);if(33===r.length)return e&&(r[0]=2),r;throw new TypeError(`Invalid key size: ${r.length}`)}var vn=Object.freeze({__proto__:null,convert_32:xn,convert_33:En,gen_keypair:function(t,e){return mn(gn(32),t,e)},gen_seckey:function(t){return yn(gn(32),t)},get_keypair:mn,get_pubkey:bn,get_seckey:yn,is_even_pub:function(t){const e=Me.bytes(t);switch(!0){case 32===e.length:case 33===e.length&&2===e[0]:return!0;case 33===e.length&&3===e[0]:return!1;default:throw new TypeError(`Invalid public key: ${e.hex}`)}},negate_seckey:function(t,e){const r=Tr.mod(t);return e?r.negate().buff:r.buff},tweak_pubkey:function(t,e=[],r=!1){let n=jr.from_x(t,r);for(const t of e)n=n.add(t),r&&(n=n.negated);return r?n.x:n.buff},tweak_seckey:function(t,e=[],r=!1){let n=Tr.mod(t);for(const t of e)n=n.add(t),r&&(n=n.negated);return n.buff}});function Bn(t,e){const r=jr.from_x(e),n=Tr.mod(t);return r.mul(n).buff}var An=Object.freeze({__proto__:null,get_shared_code:function(t,e,r,n="ecdh/hmac512"){const i=yn(t),o=bn(i),s=Me.bytes(e),f=hn(n),a=Bn(i,e),c=[o.hex,s.hex].sort();return un(a,Me.join([...f,...c,r]))},get_shared_key:Bn});const _n=/^[0-9]{0,10}$/,In=/^[0-9a-zA-Z_&?=]{64}$/;function Un(t,e,r,n=!1){Lr(t,r);const i=Me.bytes(e);let o,s=void 0!==r?Me.bytes(r):Me.str("Bitcoin seed"),f=null,a=null;if(t.startsWith("m")){const t=Ln(s,i);s=t[1],a=t[0],o=bn(a,!1)}else n?(Ir(e,32),a=i,o=bn(a,!1)):(Ir(i,33),o=i);const c=Sn(t);for(const[t,e]of c){const r=e&&null!==a?Me.join([0,a,t]):Me.join([o,t]),[n,i]=Ln(s,r);s=Me.raw(i),f=o,null!==a?(a=Tr.mod(a).add(n).buff,o=bn(a,!1),Sr(a.big,!0)):(o=jr.from_x(o).add(n).buff,Ur(o.slice(1).big,!0))}return{seckey:a,pubkey:o,code:s,path:t,prev:f}}function Sn(t){$r(t);const e=[];let r=t.split("/");"m"!==r[0]&&""!==r[0]||(r=r.slice(1));for(let t of r){let r=!1;if("'"===t.slice(-1)&&(r=!0,t=t.slice(0,-1)),null!==t.match(_n)){let n=parseInt(t,10);kr(n),r&&(n+=2147483648),e.push([Me.num(n,4),r])}else{if(null===t.match(In))throw new Error("Invalid path segment:"+t);{let n=Me.str(t);r&&(n=n.prepend(128)),e.push([n.digest,r])}}}return e}function Ln(t,e){const r=un(t,e);return[r.slice(0,32),r.slice(32)]}function $n(t){const e=Me.b58chk(t).stream,r=e.read(4).num,n=e.read(1).num,i=e.read(4).num,o=e.read(4).num,s=e.read(32).hex,f=e.read(1).num,a=e.read(32).hex,c=0===f?a:void 0,u=0===f?bn(a).hex:Me.join([f,a]).hex;if(e.size>0)throw new TypeError("Unparsed data remaining in buffer!");return{prefix:r,depth:n,fprint:i,index:o,code:s,type:f,key:a,seckey:c,pubkey:u}}var kn=Object.freeze({__proto__:null,decode_extkey:$n,derive:Un,encode_extkey:function(t,e){const{seckey:r,pubkey:n,code:i,prev:o,path:s}=t,f="number"==typeof e?Me.num(e,4):null!==r?76066276:76067358,a=Sn(s),c=a.at(-1),u=Me.num(a.length,1),h=null!==o?cn(o).slice(0,4):Me.num(0,4),d=void 0!==c?c[0].slice(-4,4):Me.num(0,4),l=null!==r?r.prepend(0):n;return Me.join([f,u,h,d,i,l]).to_b58chk()},generate_code:Ln,parse_extkey:function(t,e=""){const{code:r,type:n,key:i}=$n(t),o=0===n;return Un(e,o?i:Me.join([n,i]),r,o)},parse_tweaks:Sn});function Hn(t,e,r){const n=Gt(r),{adaptor:i,tweak:o,xonly:s}=n,f=Me.bytes(t);let a=Tr.mod(e);void 0!==o&&(s&&(a=a.negated),a=a.add(o));const c=a.point,u=s?a.negated:a,h=Nn(f,u,n);let d=Tr.mod(h);void 0!==i&&(s&&(d=d.negated),d=d.add(i));const l=d.point,g=s?d.negated.big:d.big,w=dn("BIP0340/challenge",l.x.raw,c.x.raw,f),p=Tr.mod(w),y=Tr.mod(g+p.big*u.big),b=s?l.x.raw:l.raw;return Me.join([b,y.raw])}function On(t,e,r,n){const{throws:i}=Gt(n),o=Me.bytes(e),s=Me.bytes(t);if(s.length<64)return _r("Signature length is too small: "+String(s.length),i);Ir(r,32);const f=jr.from_x(r),a=s.subarray(0,32),c=jr.from_x(a),u=s.subarray(32,64),h=Tr.mod(u).point,d=dn("BIP0340/challenge",c.x,f.x,o),l=Tr.mod(d),g=f.mul(l.big),w=h.sub(g);return c.hasOddY?_r("Signature R value has odd Y coordinate!",i):c.x.big===pr?_r("Signature R value is infinite!",i):c.x.big!==w.x.big?_r(`Signature is invalid! R: ${c.x.hex} r:${w.x.hex}`,i):c.x.big===w.x.big}function Nn(t,e,r){const{aux:n,nonce:i,nonce_tweaks:o=[],recovery:s,xonly:f}=Gt(r);let a;if(void 0!==i)a=Me.bytes(i);else if(void 0!==s)a=Bn(e,s);else{const t=dn("BIP0340/aux",(null===n?Me.num(0,32):n)??Me.random(32)),r=Me.bytes(e).big^t.big;a=Me.join([r,bn(e,f)])}let c=Tr.mod(dn("BIP0340/nonce",a,Me.bytes(t)));return o.forEach((t=>{c=c.add(t).negated})),c.buff}var Rn=Object.freeze({__proto__:null,gen_nonce:Nn,recover:function(t,e,r,n){const i=Me.bytes(t),o=Me.bytes(e),s=Me.bytes(r),f=dn("BIP0340/nonce",Bn(n,r),e),a=dn("BIP0340/challenge",i.slice(0,32),xn(s),o),c=new Tr(a),u=new Tr(f).negated;return new Tr(i.slice(32,64)).sub(u).div(c).buff},sign:Hn,verify:On});const Tn={kind:2e4,stamp:0,tags:[]};function jn(t){const[e,r]=t.split("?"),n=Me.hex(e).stream;return Ar(160===n.size),{ref:n.read(32).hex,pub:n.read(32).hex,pid:n.read(32).hex,sig:n.read(64).hex,params:zn(r)}}function Cn(t=[]){const e=t.map((t=>[String(t[0]),String(t[1])]));return 0!==t.length?"?"+new URLSearchParams(e).toString():""}function zn(t){return"string"==typeof t?[...new URLSearchParams(t)]:[]}function Pn(t=[]){const{kind:e,stamp:r,...n}=Object.fromEntries(t);return{tags:Object.entries(n).map((([t,e])=>[t,String(e)])),kind:void 0!==e?Number(e):Tn.kind,stamp:void 0!==r?Number(r):Tn.stamp}}var qn=Object.freeze({__proto__:null,create_event:function(t,e){const r=wn(e),{pub:n,pid:i,sig:o,params:s}=jn(t),{kind:f,stamp:a,tags:c}=Pn(s);return{kind:f,content:r,tags:c,pubkey:n,id:i,sig:o,created_at:a}},create_proof:function(t,e,r,n){const{kind:i,stamp:o,tags:s}=Pn(r??[]),f=wn(e),a=bn(t,!0).hex,c=Me.str(f).digest,u=[0,a,o,i,s,f],h=Me.json(u).digest,d=Hn(h,t,n);return Me.join([c,a,h,d]).hex+Cn(r)},decode_params:zn,encode_params:Cn,parse_config:Pn,parse_proof:jn,parse_proofs:function(t){return t.map((t=>jn(t)))},validate_proof:function(t){return/^[0-9a-fA-F]{320}(?:\?[A-Za-z0-9_]+=[A-Za-z0-9_]+(?:&[A-Za-z0-9_]+=[A-Za-z0-9_]+)*)?$/.test(t)},verify_proof:function(t,e,r){const{throws:n=!1}=r??{},{ref:i,pub:o,pid:s,sig:f,params:a}=jn(t),{kind:c,stamp:u,tags:h}=Pn(a),d=wn(e);if(Me.str(d).digest.hex!==i)return _r("Content hash does not match reference hash!",n);const l=[0,o,u,c,h,d];return Me.json(l).digest.hex!==s?_r("Proof hash does not equal proof id!",n):!!On(f,s,o)||_r("Proof signature is invalid!",n)}});const Fn=_t.ProjectivePoint,Vn=Fn;function Dn(t){return new Fn(t.x,t.y,yr).hasEvenY()}function Gn(t){const e=t;return"object"==typeof e&&null!==e&&"bigint"==typeof e.x&&"bigint"==typeof e.y}function Zn(t){if(!Gn(t))return!1;const e=new Fn(t.x,t.y,yr);try{return e.assertValidity(),!0}catch{return!1}}var Yn=Object.freeze({__proto__:null,Noble:Vn,add:function(t,e){if(null===t)return e;if(null===e)return t;const r=new Fn(t.x,t.y,yr),n=new Fn(e.x,e.y,yr);try{const t=r.add(n);return t.assertValidity(),{x:t.x,y:t.y}}catch{return null}},assert_valid:function(t){if(!Zn(t))throw new Error("ECC point is invalid: "+String(t))},eq:function(t,e){return null===t&&null===e||null!==t&&null!==e&&(t.x===e.x&&t.y===e.y)},gen:function(t){const e=Me.bytes(t),r=Fn.BASE.multiply(e.big);return r.assertValidity(),{x:r.x,y:r.y}},is_even:Dn,is_point:Gn,is_valid:Zn,lift_x:function(t,e=!1){const r=En(t,e),n=Fn.fromHex(r.hex);return n.assertValidity(),{x:n.x,y:n.y}},mul:function(t,e){if(null===t)return null;try{const r=Me.bytes(e),n=new Fn(t.x,t.y,yr).multiply(r.big);return n.assertValidity(),{x:n.x,y:n.y}}catch{return null}},negate:function(t){const e=new Fn(t.x,t.y,yr);try{const t=e.negate();return t.assertValidity(),{x:t.x,y:t.y}}catch{return null}},sub:function(t,e){if(null===t)return e;if(null===e)return t;const r=new Fn(t.x,t.y,yr),n=new Fn(e.x,e.y,yr);try{const t=r.subtract(n);return t.assertValidity(),{x:t.x,y:t.y}}catch{return null}},to_bytes:function(t){const e=Me.big(t.x,32),r=Dn(t)?2:3;return Me.join([r,e])}});const Wn={secp:_t,schnorr:Vt};return t.CONST=Er,t.Field=Tr,t.Point=jr,t.assert=Hr,t.ecdh=An,t.fd=Rr,t.hash=ln,t.hd=kn,t.keys=vn,t.math=Br,t.noble=Wn,t.proof=qn,t.pt=Yn,t.sign_config=Gt,t.signer=Rn,t.util=pn,t}({});
//# sourceMappingURL=browser.js.map

var tapscript=function(t){"use strict";function e(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function n(t,...e){if(!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}const r={number:e,bool:function(t){if("boolean"!=typeof t)throw new Error(`Expected boolean, not ${t}`)},bytes:n,hash:function(t){if("function"!=typeof t||"function"!=typeof t.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");e(t.outputLen),e(t.blockLen)},exists:function(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")},output:function(t,e){n(t);const r=e.outputLen;if(t.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}};var s=r;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const i=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),o=(t,e)=>t<<32-e|t>>>e;if(!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");function a(t){if("string"==typeof t&&(t=function(t){if("string"!=typeof t)throw new TypeError("utf8ToBytes expected string, got "+typeof t);return(new TextEncoder).encode(t)}(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));let u=class{clone(){return this._cloneInto()}};function c(t){const e=e=>t().update(a(e)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}let f=class extends u{constructor(t,e,n,r){super(),this.blockLen=t,this.outputLen=e,this.padOffset=n,this.isLE=r,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=i(this.buffer)}update(t){s.exists(this);const{view:e,buffer:n,blockLen:r}=this,o=(t=a(t)).length;for(let s=0;s<o;){const a=Math.min(r-this.pos,o-s);if(a!==r)n.set(t.subarray(s,s+a),this.pos),this.pos+=a,s+=a,this.pos===r&&(this.process(e,0),this.pos=0);else{const e=i(t);for(;r<=o-s;s+=r)this.process(e,s)}}return this.length+=t.length,this.roundClean(),this}digestInto(t){s.exists(this),s.output(t,this),this.finished=!0;const{buffer:e,view:n,blockLen:r,isLE:o}=this;let{pos:a}=this;e[a++]=128,this.buffer.subarray(a).fill(0),this.padOffset>r-a&&(this.process(n,0),a=0);for(let t=a;t<r;t++)e[t]=0;!function(t,e,n,r){if("function"==typeof t.setBigUint64)return t.setBigUint64(e,n,r);const s=BigInt(32),i=BigInt(4294967295),o=Number(n>>s&i),a=Number(n&i),u=r?4:0,c=r?0:4;t.setUint32(e+u,o,r),t.setUint32(e+c,a,r)}(n,r-8,BigInt(8*this.length),o),this.process(n,0);const u=i(t),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=c/4,h=this.get();if(f>h.length)throw new Error("_sha2: outputLen bigger than state");for(let t=0;t<f;t++)u.setUint32(4*t,h[t],o)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const n=t.slice(0,e);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:n,length:r,finished:s,destroyed:i,pos:o}=this;return t.length=r,t.pos=o,t.finished=s,t.destroyed=i,r%e&&t.buffer.set(n),t}};const h=(t,e,n)=>t&e^t&n^e&n,d=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),l=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),p=new Uint32Array(64);let g=class extends f{constructor(){super(64,32,8,!1),this.A=0|l[0],this.B=0|l[1],this.C=0|l[2],this.D=0|l[3],this.E=0|l[4],this.F=0|l[5],this.G=0|l[6],this.H=0|l[7]}get(){const{A:t,B:e,C:n,D:r,E:s,F:i,G:o,H:a}=this;return[t,e,n,r,s,i,o,a]}set(t,e,n,r,s,i,o,a){this.A=0|t,this.B=0|e,this.C=0|n,this.D=0|r,this.E=0|s,this.F=0|i,this.G=0|o,this.H=0|a}process(t,e){for(let n=0;n<16;n++,e+=4)p[n]=t.getUint32(e,!1);for(let t=16;t<64;t++){const e=p[t-15],n=p[t-2],r=o(e,7)^o(e,18)^e>>>3,s=o(n,17)^o(n,19)^n>>>10;p[t]=s+p[t-7]+r+p[t-16]|0}let{A:n,B:r,C:s,D:i,E:a,F:u,G:c,H:f}=this;for(let t=0;t<64;t++){const e=f+(o(a,6)^o(a,11)^o(a,25))+((l=a)&u^~l&c)+d[t]+p[t]|0,g=(o(n,2)^o(n,13)^o(n,22))+h(n,r,s)|0;f=c,c=u,u=a,a=i+e|0,i=s,s=r,r=n,n=e+g|0}var l;n=n+this.A|0,r=r+this.B|0,s=s+this.C|0,i=i+this.D|0,a=a+this.E|0,u=u+this.F|0,c=c+this.G|0,f=f+this.H|0,this.set(n,r,s,i,a,u,c,f)}roundClean(){p.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},y=class extends g{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}};const m=c((()=>new g));function w(t){if(t>Number.MAX_SAFE_INTEGER)throw new TypeError("Number exceeds safe bounds!")}c((()=>new y));const{getRandomValues:b}=crypto??globalThis.crypto??window.crypto;function v(t,e,n="be"){void 0===e&&(e=t.length),function(t,e){if(t.length>e)throw new TypeError(`Data is larger than array size: ${t.length} > ${e}`)}(t,e);const r=new Uint8Array(e).fill(0),s="be"===n?0:e-t.length;return r.set(t,s),r}function _(t){let e,n=0;const r=t.reduce(((t,e)=>t+e.length),0),s=new Uint8Array(r);for(e=0;e<t.length;e++){const r=t[e];s.set(r,n),n+=r.length}return s}const x=new TextEncoder,E=[{name:"base58",charset:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}];function S(t){for(const e of E)if(e.name===t)return e.charset;throw TypeError("Charset does not exist: "+t)}function k(t){return m(m(t))}const A={encode:function(t,e,n=!1){"string"==typeof t&&(t=x.encode(t));const r=S(e),s=r.length,i=[];let o,a,u,c="",f=0;for(o=0;o<t.length;o++)for(f=0,a=t[o],c+=a>0||(c.length^o)>0?"":"1";f in i||a>0;)u=i[f],u=u>0?256*u+a:a,a=u/s|0,i[f]=u%s,f++;for(;f-- >0;)c+=r[i[f]];return n&&c.length%4>0?c+"=".repeat(4-c.length%4):c},decode:function(t,e){const n=S(e),r=n.length,s=[],i=[];t=t.replace("=","");let o,a,u,c=0;for(o=0;o<t.length;o++){if(c=0,a=n.indexOf(t[o]),a<0)throw new Error(`Character range out of bounds: ${a}`);for(a>0||(i.length^o)>0||i.push(0);c in s||a>0;)u=s[c],u=u>0?u*r+a:a,a=u>>8,s[c]=u%256,c++}for(;c-- >0;)i.push(s[c]);return new Uint8Array(i)}},O={encode:t=>{const e=function(t){return _([t,k(t).slice(0,4)])}(t);return A.encode(e,"base58")},decode:t=>function(t){const e=t.slice(0,-4),n=t.slice(-4);if(k(e).slice(0,4).toString()!==n.toString())throw new Error("Invalid checksum!");return e}(A.decode(t,"base58"))},I="qpzry9x8gf2tvdw0s3jn54khce6mua7l",P=[996825010,642813549,513874426,1027748829,705979059],B=[{version:0,name:"bech32",const:1},{version:1,name:"bech32m",const:734539939}];function T(t){let e=1;for(let n=0;n<t.length;++n){const r=e>>25;e=(33554431&e)<<5^t[n];for(let t=0;t<5;++t)0!=(r>>t&1)&&(e^=P[t])}return e}function U(t){const e=[];let n;for(n=0;n<t.length;++n)e.push(t.charCodeAt(n)>>5);for(e.push(0),n=0;n<t.length;++n)e.push(31&t.charCodeAt(n));return e}function C(t,e,n,r=!0){const s=[];let i=0,o=0;const a=(1<<n)-1,u=(1<<e+n-1)-1;for(const r of t){if(r<0||r>>e>0)throw new Error("Failed to perform base conversion. Invalid value: "+String(r));for(i=(i<<e|r)&u,o+=e;o>=n;)o-=n,s.push(i>>o&a)}if(r)o>0&&s.push(i<<n-o&a);else if(o>=e||(i<<n-o&a)>0)throw new Error("Failed to perform base conversion. Invalid Size!");return s}function N(t,e,n){const r=e.concat(function(t,e,n){const r=T(U(t).concat(e).concat([0,0,0,0,0,0]))^n.const,s=[];for(let t=0;t<6;++t)s.push(r>>5*(5-t)&31);return s}(t,e,n));let s=t+"1";for(let t=0;t<r.length;++t)s+=I.charAt(r[t]);return s}function L(t){if(!function(t){let e,n,r=!1,s=!1;for(e=0;e<t.length;++e){if(n=t.charCodeAt(e),n<33||n>126)return!1;n>=97&&n<=122&&(r=!0),n>=65&&n<=90&&(s=!0)}return!r||!s}(t))throw new Error("Encoded string goes out of bounds!");if(!function(t){const e=t.lastIndexOf("1");return!(e<1||e+7>t.length||t.length>90)}(t=t.toLowerCase()))throw new Error("Encoded string has invalid separator!");const e=[],n=t.lastIndexOf("1"),r=t.substring(0,n);for(let r=n+1;r<t.length;++r){const n=I.indexOf(t.charAt(r));if(-1===n)throw new Error("Character idx out of bounds: "+String(r));e.push(n)}const s=B.find((t=>t.version===e[0]))??B[0];if(!function(t,e,n){return T(U(t).concat(e))===n.const}(r,e,s))throw new Error("Checksum verification failed!");return[r,e.slice(0,e.length-6)]}function Z(t){const e=(t=t.toLowerCase()).split("1",1)[0],[n,r]=L(t),s=C(r.slice(1),5,8,!1),i=s.length;switch(!0){case e!==n:throw new Error("Returned hrp string is invalid.");case null===s||i<2||i>40:throw new Error("Decoded string is invalid or out of spec.");case r[0]>16:throw new Error("Returned version bit is out of range.");default:return Uint8Array.from(s)}}const R={encode:function(t,e="bc",n=0){const r=N(e,[n,...C([...t],8,5)],B.find((t=>t.version===n))??B[0]);return Z(r),r},decode:Z,version:function(t){t=t.toLowerCase();const[e,n]=L(t);return n[0]}},H="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",D=new TextEncoder;function $(t,e=!1,n=!0){"string"==typeof t&&(t=D.encode(t));const r=e?j:H;let s="",i=0,o=0;for(let e=0;e<t.length;e++)for(o=o<<8|t[e],i+=8;i>=6;)i-=6,s+=r[o>>i&63];if(i>0)for(o<<=6-i,s+=r[63&o];i<6;)s+=n?"=":"",i+=2;return s}function z(t,e=!1){const n=e||t.includes("-")||t.includes("_")?j.split(""):H.split(""),r=(t=t.replace(/=+$/,"")).split("");let s=0,i=0;const o=[];for(let t=0;t<r.length;t++){const e=r[t],a=n.indexOf(e);if(-1===a)throw new Error("Invalid character: "+e);s+=6,i<<=6,i|=a,s>=8&&(s-=8,o.push(i>>>s&255))}return new Uint8Array(o)}const K={encode:$,decode:z},F={encode:t=>$(t,!0,!1),decode:t=>z(t,!0)},q=BigInt(0),V=BigInt(255),M=BigInt(256);function G(t,e,n="be"){void 0===e&&(e=function(t){if(t<=0xffn)return 1;if(t<=0xffffn)return 2;if(t<=0xffffffffn)return 4;if(t<=0xffffffffffffffffn)return 8;if(t<=0xffffffffffffffffffffffffffffffffn)return 16;if(t<=0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn)return 32;throw new TypeError("Must specify a fixed buffer size for bigints greater than 32 bytes.")}(t));const r="le"===n,s=new ArrayBuffer(e),i=new DataView(s);let o=r?0:e-1;for(;t>q;){const e=t&V,n=Number(e);r?i.setUint8(o++,n):i.setUint8(o--,n),t=(t-e)/M}return new Uint8Array(s)}function W(t,e,n="be"){void 0===e&&(e=function(t){if(t<=255)return 1;if(t<=65535)return 2;if(t<=4294967295)return 4;throw new TypeError("Numbers larger than 4 bytes must specify a fixed size!")}(t));const r="le"===n,s=new ArrayBuffer(e),i=new DataView(s);let o=r?0:e-1;for(;t>0;){const e=255&t;r?i.setUint8(o++,t):i.setUint8(o--,t),t=(t-e)/256}return new Uint8Array(s)}const Y=new TextEncoder,J=new TextDecoder;function Q(t){return Y.encode(t)}function X(t){return J.decode(t)}function tt(t,e){!function(t){if(null!==t.match(/[^a-fA-f0-9]/))throw new TypeError("Invalid characters in hex string: "+t);if(t.length%2!=0)throw new Error(`Length of hex string is invalid: ${t.length}`)}(t);const n=t.length/2;if(void 0===e&&(e=n),n>e)throw new TypeError(`Hex string is larger than array size: ${n} > ${e}`);return e}function et(t,e,n){if(t instanceof ArrayBuffer)return new Uint8Array(t);if(t instanceof Uint8Array)return v(t,e,n);if("string"==typeof t)return function(t,e,n="le"){e=tt(t,e);const r="le"===n,s=new ArrayBuffer(e),i=new DataView(s);let o=r?0:e-1;for(let e=0;e<t.length;e+=2){const n=t.substring(e,e+2),s=parseInt(n,16);r?i.setUint8(o++,s):i.setUint8(o--,s)}return new Uint8Array(s)}(t,e,n);if("bigint"==typeof t)return G(t,e,n);if("number"==typeof t)return W(t,e,n);if("boolean"==typeof t)return Uint8Array.of(t?1:0);throw TypeError("Unsupported format:"+String(typeof t))}let nt=class t extends Uint8Array{static{this.num=rt}static{this.big=it}static{this.bin=st}static{this.raw=ot}static{this.str=at}static{this.hex=ut}static{this.bytes=ct}static{this.json=ft}static{this.base64=ht}static{this.b64url=dt}static{this.bech32=lt}static{this.b58chk=pt}static{this.encode=Q}static{this.decode=X}static random(e=32){const n=function(t=32){if("function"==typeof b)return crypto.getRandomValues(new Uint8Array(t));throw new Error("Crypto module missing getRandomValues!")}(e);return new t(n,e)}constructor(t,e,n){super(et(t,e,n))}get arr(){return[...this]}get num(){return this.toNum()}get big(){return this.toBig()}get str(){return this.toStr()}get hex(){return this.toHex()}get raw(){return new Uint8Array(this)}get bin(){return this.toBin()}get b58chk(){return this.tob58chk()}get base64(){return this.toBase64()}get b64url(){return this.toB64url()}get digest(){return this.toHash()}get id(){return this.toHash().hex}get stream(){return new gt(this)}toNum(t="be"){return function(t){let e=0;for(let n=t.length-1;n>=0;n--)e=256*e+t[n],w(e);return e}("be"===t?this.reverse():this)}toBin(){return function(t){const e=new Array(8*t.length);let n=0;for(const r of t){if(r>255)throw new Error(`Invalid byte value: ${r}. Byte values must be between 0 and 255.`);for(let t=7;t>=0;t--,n++)e[n]=r>>t&1}return e.join("")}(this)}toBig(t="be"){return function(t){let e=BigInt(0);for(let n=t.length-1;n>=0;n--)e=e*M+BigInt(t[n]);return BigInt(e)}("be"===t?this.reverse():this)}toHash(){const e=m(this);return new t(e)}toJson(){const t=X(this);return JSON.parse(t)}toBech32(t,e=0){return R.encode(this,t,e)}toStr(){return X(this)}toHex(){return function(t){let e="";for(let n=0;n<t.length;n++)e+=t[n].toString(16).padStart(2,"0");return e}(this)}toBytes(){return new Uint8Array(this)}tob58chk(){return O.encode(this)}toBase64(){return K.encode(this)}toB64url(){return F.encode(this)}prepend(e){return t.join([t.bytes(e),this])}append(e){return t.join([this,t.bytes(e)])}slice(e,n){const r=new Uint8Array(this).slice(e,n);return new t(r)}subarray(e,n){const r=new Uint8Array(this).subarray(e,n);return new t(r)}reverse(){const e=new Uint8Array(this).reverse();return new t(e)}write(e,n){const r=t.bytes(e);this.set(r,n)}prefixSize(e){const n=t.varInt(this.length,e);return t.join([n,this])}static from(e){return new t(Uint8Array.from(e))}static of(...e){return new t(Uint8Array.of(...e))}static join(e){const n=_(e.map((e=>t.bytes(e))));return new t(n)}static varInt(e,n){if(e<253)return t.num(e,1);if(e<65536)return t.of(253,...t.num(e,2,n));if(e<4294967296)return t.of(254,...t.num(e,4,n));if(BigInt(e)<0x10000000000000000n)return t.of(255,...t.num(e,8,n));throw new Error(`Value is too large: ${e}`)}};function rt(t,e,n){return new nt(t,e,n)}function st(t,e,n){return new nt(function(t){const e=t.split("").map(Number);if(e.length%8!=0)throw new Error(`Binary array is invalid length: ${t.length}`);const n=new Uint8Array(e.length/8);for(let t=0,r=0;t<e.length;t+=8,r++){let s=0;for(let n=0;n<8;n++)s|=e[t+n]<<7-n;n[r]=s}return n}(t),e,n)}function it(t,e,n){return new nt(t,e,n)}function ot(t,e,n){return new nt(t,e,n)}function at(t,e,n){return new nt(Q(t),e,n)}function ut(t,e,n){return new nt(t,e,n)}function ct(t,e,n){return new nt(t,e,n)}function ft(t){return new nt((e=t,Q(JSON.stringify(e,((t,e)=>"bigint"==typeof e?`${e}n`:e)))));var e}function ht(t){return new nt(K.decode(t))}function dt(t){return new nt(F.decode(t))}function lt(t){return new nt(R.decode(t))}function pt(t){return new nt(O.decode(t))}let gt=class{constructor(t){this.data=nt.bytes(t),this.size=this.data.length}peek(t){if(t>this.size)throw new Error(`Size greater than stream: ${t} > ${this.size}`);return new nt(this.data.slice(0,t))}read(t){t=t??this.readSize();const e=this.peek(t);return this.data=this.data.slice(t),this.size=this.data.length,e}readSize(t){const e=this.read(1).num;switch(!0){case e>=0&&e<253:return e;case 253===e:return this.read(2).toNum(t);case 254===e:return this.read(4).toNum(t);case 255===e:return this.read(8).toNum(t);default:throw new Error(`Varint is out of range: ${e}`)}}};function yt(t,e){const n=nt.bytes(t);if(n.length!==e)throw new Error(`Invalid input size: ${n.hex} !== ${e}`)}function mt(t,e){if(e)throw new Error(t);return!1}function wt(t,...e){const n=nt.str(t).digest.raw,r=e.map((t=>nt.bytes(t)));return nt.join([n,n,nt.join(r)]).digest}const bt={OP_0:0,OP_PUSHDATA1:76,OP_PUSHDATA2:77,OP_PUSHDATA4:78,OP_1NEGATE:79,OP_SUCCESS80:80,OP_1:81,OP_2:82,OP_3:83,OP_4:84,OP_5:85,OP_6:86,OP_7:87,OP_8:88,OP_9:89,OP_10:90,OP_11:91,OP_12:92,OP_13:93,OP_14:94,OP_15:95,OP_16:96,OP_NOP:97,OP_SUCCESS98:98,OP_IF:99,OP_NOTIF:100,OP_ELSE:103,OP_ENDIF:104,OP_VERIFY:105,OP_RETURN:106,OP_TOALTSTACK:107,OP_FROMALTSTACK:108,OP_2DROP:109,OP_2DUP:110,OP_3DUP:111,OP_2OVER:112,OP_2ROT:113,OP_2SWAP:114,OP_IFDUP:115,OP_DEPTH:116,OP_DROP:117,OP_DUP:118,OP_NIP:119,OP_OVER:120,OP_PICK:121,OP_ROLL:122,OP_ROT:123,OP_SWAP:124,OP_TUCK:125,OP_SUCCESS126:126,OP_SUCCESS127:127,OP_SUCCESS128:128,OP_SUCCESS129:129,OP_SIZE:130,OP_SUCCESS131:131,OP_SUCCESS132:132,OP_SUCCESS133:133,OP_SUCCESS134:134,OP_EQUAL:135,OP_EQUALVERIFY:136,OP_SUCCESS137:137,OP_SUCCESS138:138,OP_1ADD:139,OP_1SUB:140,OP_SUCCESS141:141,OP_SUCCESS142:142,OP_NEGATE:143,OP_ABS:144,OP_NOT:145,OP_0NOTEQUAL:146,OP_ADD:147,OP_SUB:148,OP_SUCCESS149:149,OP_SUCCESS150:150,OP_SUCCESS151:151,OP_SUCCESS152:152,OP_SUCCESS153:153,OP_BOOLAND:154,OP_BOOLOR:155,OP_NUMEQUAL:156,OP_NUMEQUALVERIFY:157,OP_NUMNOTEQUAL:158,OP_LESSTHAN:159,OP_GREATERTHAN:160,OP_LESSTHANOREQUAL:161,OP_GREATERTHANOREQUAL:162,OP_MIN:163,OP_MAX:164,OP_WITHIN:165,OP_RIPEMD160:166,OP_SHA1:167,OP_SHA256:168,OP_HASH160:169,OP_HASH256:170,OP_CODESEPARATOR:171,OP_CHECKSIG:172,OP_CHECKSIGVERIFY:173,OP_CHECKMULTISIG:174,OP_CHECKMULTISIGVERIFY:175,OP_NOP1:176,OP_CHECKLOCKTIMEVERIFY:177,OP_CHECKSEQUENCEVERIFY:178,OP_NOP4:179,OP_NOP5:180,OP_NOP6:181,OP_NOP7:182,OP_NOP8:183,OP_NOP9:184,OP_NOP10:185,OP_CHECKSIGADD:186};function vt(t){if(t>186&&t<255)return"OP_SUCCESS"+String(t);for(const[e,n]of Object.entries(bt))if(n===t)return e;throw new Error("OPCODE not found:"+String(t))}function _t(t){switch(!0){case 0===t:return"opcode";case t>=1&&t<=75:return"varint";case 76===t:return"pushdata1";case 77===t:return"pushdata2";case 78===t:return"pushdata4";case t<=254:return"opcode";default:throw new Error(`Invalid word range: ${t}`)}}function xt(t){switch(!0){case"number"!=typeof t:return!1;case 0===t:return!0;case[].includes(t):return!1;case 75<t&&t<254:return!0;default:return!1}}function Et(t){return"string"==typeof t&&t.length%2==0&&/[0-9a-fA-F]/.test(t)}function St(t){return Et(t)||t instanceof Uint8Array}const kt=520;function At(t=[],e=!0){let n=nt.num(0);return Array.isArray(t)&&(n=nt.raw(Ot(t))),Et(t)&&(n=nt.hex(t)),t instanceof Uint8Array&&(n=nt.raw(t)),e&&(n=n.prefixSize("le")),n}function Ot(t){const e=[];for(const n of t)e.push(It(n));return e.length>0?nt.join(e):new Uint8Array}function It(t){let e=new Uint8Array;if("string"==typeof t){if(t.startsWith("OP_"))return nt.num(function(t){for(const[e,n]of Object.entries(bt))if(e===t)return Number(n);throw new Error("OPCODE not found:"+t)}(t),1);e=Et(t)?nt.hex(t):nt.str(t)}else if(e=nt.bytes(t),1===e.length&&e[0]<=16)return 0!==e[0]&&(e[0]+=80),e;if(e.length>kt){const t=function(t){const e=[],n=new gt(t);for(;n.size>kt;)e.push(n.read(kt));return e.push(n.read(n.size)),e}(e);return Ot(t)}return nt.join([Pt(e.length),e])}function Pt(t){const e=nt.num(76,1),n=nt.num(77,1);switch(!0){case t<=75:return nt.num(t);case t>75&&t<256:return nt.join([e,nt.num(t,1)]);case t>=256&&t<=kt:return nt.join([n,nt.num(t,2,"le")]);default:throw new Error("Invalid word size:"+t.toString())}}function Bt(t,e=!1){let n=nt.bytes(t);if(e){const t=n.stream.readSize("le");if(n.length!==t)throw new Error(`Varint does not match stream size: ${t} !== ${n.length}`);n=n.slice(1)}return function(t){const e=new gt(t),n=[],r=e.size;let s,i,o,a=0;for(;a<r;)switch(s=e.read(1).num,i=_t(s),a++,i){case"varint":n.push(e.read(s).hex),a+=s;break;case"pushdata1":o=e.read(1).reverse().num,n.push(e.read(o).hex),a+=o+1;break;case"pushdata2":o=e.read(2).reverse().num,n.push(e.read(o).hex),a+=o+2;break;case"pushdata4":o=e.read(4).reverse().num,n.push(e.read(o).hex),a+=o+4;break;case"opcode":if(!xt(s))throw new Error(`Invalid OPCODE: ${s}`);n.push(vt(s));break;default:throw new Error(`Word type undefined: ${s}`)}return n}(n)}const Tt={toAsm:function(t,e){if(Array.isArray(t)&&(t=At(t,e)),t instanceof Uint8Array||Et(t))return Bt(t,e);throw new Error("Invalid format: "+String(typeof t))},toBytes:function(t,e){if((t instanceof Uint8Array||Et(t))&&(t=Bt(t,e)),Array.isArray(t))return At(t,e);throw new Error("Invalid format: "+String(typeof t))},toParam:function(t){if(!Array.isArray(t))return nt.bytes(t);throw new Error("Invalid format: "+String(typeof t))}},Ut={encode:At,decode:Bt,fmt:Tt};function Ct(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function Nt(t,...e){if(!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}const Lt={number:Ct,bool:function(t){if("boolean"!=typeof t)throw new Error(`Expected boolean, not ${t}`)},bytes:Nt,hash:function(t){if("function"!=typeof t||"function"!=typeof t.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");Ct(t.outputLen),Ct(t.blockLen)},exists:function(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")},output:function(t,e){Nt(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}};var Zt=Lt;const Rt="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0,Ht=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),jt=(t,e)=>t<<32-e|t>>>e;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */if(!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");function Dt(t){if("string"==typeof t&&(t=function(t){if("string"!=typeof t)throw new TypeError("utf8ToBytes expected string, got "+typeof t);return(new TextEncoder).encode(t)}(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));let $t=class{clone(){return this._cloneInto()}};function zt(t){const e=e=>t().update(Dt(e)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function Kt(t=32){if(Rt&&"function"==typeof Rt.getRandomValues)return Rt.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}let Ft=class extends $t{constructor(t,e,n,r){super(),this.blockLen=t,this.outputLen=e,this.padOffset=n,this.isLE=r,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=Ht(this.buffer)}update(t){Zt.exists(this);const{view:e,buffer:n,blockLen:r}=this,s=(t=Dt(t)).length;for(let i=0;i<s;){const o=Math.min(r-this.pos,s-i);if(o!==r)n.set(t.subarray(i,i+o),this.pos),this.pos+=o,i+=o,this.pos===r&&(this.process(e,0),this.pos=0);else{const e=Ht(t);for(;r<=s-i;i+=r)this.process(e,i)}}return this.length+=t.length,this.roundClean(),this}digestInto(t){Zt.exists(this),Zt.output(t,this),this.finished=!0;const{buffer:e,view:n,blockLen:r,isLE:s}=this;let{pos:i}=this;e[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>r-i&&(this.process(n,0),i=0);for(let t=i;t<r;t++)e[t]=0;!function(t,e,n,r){if("function"==typeof t.setBigUint64)return t.setBigUint64(e,n,r);const s=BigInt(32),i=BigInt(4294967295),o=Number(n>>s&i),a=Number(n&i),u=r?4:0,c=r?0:4;t.setUint32(e+u,o,r),t.setUint32(e+c,a,r)}(n,r-8,BigInt(8*this.length),s),this.process(n,0);const o=Ht(t),a=this.outputLen;if(a%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const u=a/4,c=this.get();if(u>c.length)throw new Error("_sha2: outputLen bigger than state");for(let t=0;t<u;t++)o.setUint32(4*t,c[t],s)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const n=t.slice(0,e);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:n,length:r,finished:s,destroyed:i,pos:o}=this;return t.length=r,t.pos=o,t.finished=s,t.destroyed=i,r%e&&t.buffer.set(n),t}};const qt=(t,e,n)=>t&e^t&n^e&n,Vt=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Mt=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Gt=new Uint32Array(64);let Wt=class extends Ft{constructor(){super(64,32,8,!1),this.A=0|Mt[0],this.B=0|Mt[1],this.C=0|Mt[2],this.D=0|Mt[3],this.E=0|Mt[4],this.F=0|Mt[5],this.G=0|Mt[6],this.H=0|Mt[7]}get(){const{A:t,B:e,C:n,D:r,E:s,F:i,G:o,H:a}=this;return[t,e,n,r,s,i,o,a]}set(t,e,n,r,s,i,o,a){this.A=0|t,this.B=0|e,this.C=0|n,this.D=0|r,this.E=0|s,this.F=0|i,this.G=0|o,this.H=0|a}process(t,e){for(let n=0;n<16;n++,e+=4)Gt[n]=t.getUint32(e,!1);for(let t=16;t<64;t++){const e=Gt[t-15],n=Gt[t-2],r=jt(e,7)^jt(e,18)^e>>>3,s=jt(n,17)^jt(n,19)^n>>>10;Gt[t]=s+Gt[t-7]+r+Gt[t-16]|0}let{A:n,B:r,C:s,D:i,E:o,F:a,G:u,H:c}=this;for(let t=0;t<64;t++){const e=c+(jt(o,6)^jt(o,11)^jt(o,25))+((f=o)&a^~f&u)+Vt[t]+Gt[t]|0,h=(jt(n,2)^jt(n,13)^jt(n,22))+qt(n,r,s)|0;c=u,u=a,a=o,o=i+e|0,i=s,s=r,r=n,n=e+h|0}var f;n=n+this.A|0,r=r+this.B|0,s=s+this.C|0,i=i+this.D|0,o=o+this.E|0,a=a+this.F|0,u=u+this.G|0,c=c+this.H|0,this.set(n,r,s,i,o,a,u,c)}roundClean(){Gt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},Yt=class extends Wt{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}};const Jt=zt((()=>new Wt));zt((()=>new Yt));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Qt=BigInt(0),Xt=BigInt(1),te=BigInt(2),ee=t=>t instanceof Uint8Array,ne=Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));function re(t){if(!ee(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=ne[t[n]];return e}function se(t){const e=t.toString(16);return 1&e.length?`0${e}`:e}function ie(t){if("string"!=typeof t)throw new Error("hex string expected, got "+typeof t);return BigInt(""===t?"0":`0x${t}`)}function oe(t){if("string"!=typeof t)throw new Error("hex string expected, got "+typeof t);if(t.length%2)throw new Error("hex string is invalid: unpadded "+t.length);const e=new Uint8Array(t.length/2);for(let n=0;n<e.length;n++){const r=2*n,s=t.slice(r,r+2),i=Number.parseInt(s,16);if(Number.isNaN(i)||i<0)throw new Error("invalid byte sequence");e[n]=i}return e}function ae(t){return ie(re(t))}function ue(t){if(!ee(t))throw new Error("Uint8Array expected");return ie(re(Uint8Array.from(t).reverse()))}const ce=(t,e)=>oe(t.toString(16).padStart(2*e,"0")),fe=(t,e)=>ce(t,e).reverse();function he(t,e,n){let r;if("string"==typeof e)try{r=oe(e)}catch(n){throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${n}`)}else{if(!ee(e))throw new Error(`${t} must be hex string or Uint8Array`);r=Uint8Array.from(e)}const s=r.length;if("number"==typeof n&&s!==n)throw new Error(`${t} expected ${n} bytes, got ${s}`);return r}function de(...t){const e=new Uint8Array(t.reduce(((t,e)=>t+e.length),0));let n=0;return t.forEach((t=>{if(!ee(t))throw new Error("Uint8Array expected");e.set(t,n),n+=t.length})),e}function le(t){if("string"!=typeof t)throw new Error("utf8ToBytes expected string, got "+typeof t);return(new TextEncoder).encode(t)}const pe=t=>(te<<BigInt(t-1))-Xt,ge=t=>new Uint8Array(t),ye=t=>Uint8Array.from(t);function me(t,e,n){if("number"!=typeof t||t<2)throw new Error("hashLen must be a number");if("number"!=typeof e||e<2)throw new Error("qByteLen must be a number");if("function"!=typeof n)throw new Error("hmacFn must be a function");let r=ge(t),s=ge(t),i=0;const o=()=>{r.fill(1),s.fill(0),i=0},a=(...t)=>n(s,r,...t),u=(t=ge())=>{s=a(ye([0]),t),r=a(),0!==t.length&&(s=a(ye([1]),t),r=a())},c=()=>{if(i++>=1e3)throw new Error("drbg: tried 1000 values");let t=0;const n=[];for(;t<e;){r=a();const e=r.slice();n.push(e),t+=r.length}return de(...n)};return(t,e)=>{let n;for(o(),u(t);!(n=e(c()));)u();return o(),n}}const we={bigint:t=>"bigint"==typeof t,function:t=>"function"==typeof t,boolean:t=>"boolean"==typeof t,string:t=>"string"==typeof t,isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>"function"==typeof t&&Number.isSafeInteger(t.outputLen)};function be(t,e,n={}){const r=(e,n,r)=>{const s=we[n];if("function"!=typeof s)throw new Error(`Invalid validator "${n}", expected function`);const i=t[e];if(!(r&&void 0===i||s(i,t)))throw new Error(`Invalid param ${String(e)}=${i} (${typeof i}), expected ${n}`)};for(const[t,n]of Object.entries(e))r(t,n,!1);for(const[t,e]of Object.entries(n))r(t,e,!0);return t}var ve=Object.freeze({__proto__:null,bitGet:(t,e)=>t>>BigInt(e)&1n,bitLen:function(t){let e;for(e=0;t>0n;t>>=Xt,e+=1);return e},bitMask:pe,bitSet:(t,e,n)=>t|(n?Xt:Qt)<<BigInt(e),bytesToHex:re,bytesToNumberBE:ae,bytesToNumberLE:ue,concatBytes:de,createHmacDrbg:me,ensureBytes:he,equalBytes:function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0},hexToBytes:oe,hexToNumber:ie,numberToBytesBE:ce,numberToBytesLE:fe,numberToHexUnpadded:se,numberToVarBytesBE:t=>oe(se(t)),utf8ToBytes:le,validateObject:be});
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const _e=BigInt(0),xe=BigInt(1),Ee=BigInt(2),Se=BigInt(3),ke=BigInt(4),Ae=BigInt(5),Oe=BigInt(8);function Ie(t,e){const n=t%e;return n>=_e?n:e+n}function Pe(t,e,n){if(n<=_e||e<_e)throw new Error("Expected power/modulo > 0");if(n===xe)return _e;let r=xe;for(;e>_e;)e&xe&&(r=r*t%n),t=t*t%n,e>>=xe;return r}function Be(t,e,n){let r=t;for(;e-- >_e;)r*=r,r%=n;return r}function Te(t,e){if(t===_e||e<=_e)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=Ie(t,e),r=e,s=_e,i=xe;for(;n!==_e;){const t=r%n,e=s-i*(r/n);r=n,n=t,s=i,i=e}if(r!==xe)throw new Error("invert: does not exist");return Ie(s,e)}function Ue(t){if(t%ke===Se){const e=(t+xe)/ke;return function(t,n){const r=t.pow(n,e);if(!t.eql(t.sqr(r),n))throw new Error("Cannot find square root");return r}}if(t%Oe===Ae){const e=(t-Ae)/Oe;return function(t,n){const r=t.mul(n,Ee),s=t.pow(r,e),i=t.mul(n,s),o=t.mul(t.mul(i,Ee),s),a=t.mul(i,t.sub(o,t.ONE));if(!t.eql(t.sqr(a),n))throw new Error("Cannot find square root");return a}}return function(t){const e=(t-xe)/Ee;let n,r,s;for(n=t-xe,r=0;n%Ee===_e;n/=Ee,r++);for(s=Ee;s<t&&Pe(s,e,t)!==t-xe;s++);if(1===r){const e=(t+xe)/ke;return function(t,n){const r=t.pow(n,e);if(!t.eql(t.sqr(r),n))throw new Error("Cannot find square root");return r}}const i=(n+xe)/Ee;return function(t,o){if(t.pow(o,e)===t.neg(t.ONE))throw new Error("Cannot find square root");let a=r,u=t.pow(t.mul(t.ONE,s),n),c=t.pow(o,i),f=t.pow(o,n);for(;!t.eql(f,t.ONE);){if(t.eql(f,t.ZERO))return t.ZERO;let e=1;for(let n=t.sqr(f);e<a&&!t.eql(n,t.ONE);e++)n=t.sqr(n);const n=t.pow(u,xe<<BigInt(a-e-1));u=t.sqr(n),c=t.mul(c,n),f=t.mul(f,u),a=e}return c}}(t)}BigInt(9),BigInt(16);const Ce=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Ne(t){return be(t,Ce.reduce(((t,e)=>(t[e]="function",t)),{ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"}))}function Le(t,e){const n=void 0!==e?e:t.toString(2).length;return{nBitLength:n,nByteLength:Math.ceil(n/8)}}function Ze(t,e,n=!1,r={}){if(t<=_e)throw new Error(`Expected Fp ORDER > 0, got ${t}`);const{nBitLength:s,nByteLength:i}=Le(t,e);if(i>2048)throw new Error("Field lengths over 2048 bytes are not supported");const o=Ue(t),a=Object.freeze({ORDER:t,BITS:s,BYTES:i,MASK:pe(s),ZERO:_e,ONE:xe,create:e=>Ie(e,t),isValid:e=>{if("bigint"!=typeof e)throw new Error("Invalid field element: expected bigint, got "+typeof e);return _e<=e&&e<t},is0:t=>t===_e,isOdd:t=>(t&xe)===xe,neg:e=>Ie(-e,t),eql:(t,e)=>t===e,sqr:e=>Ie(e*e,t),add:(e,n)=>Ie(e+n,t),sub:(e,n)=>Ie(e-n,t),mul:(e,n)=>Ie(e*n,t),pow:(t,e)=>function(t,e,n){if(n<_e)throw new Error("Expected power > 0");if(n===_e)return t.ONE;if(n===xe)return e;let r=t.ONE,s=e;for(;n>_e;)n&xe&&(r=t.mul(r,s)),s=t.sqr(s),n>>=xe;return r}(a,t,e),div:(e,n)=>Ie(e*Te(n,t),t),sqrN:t=>t*t,addN:(t,e)=>t+e,subN:(t,e)=>t-e,mulN:(t,e)=>t*e,inv:e=>Te(e,t),sqrt:r.sqrt||(t=>o(a,t)),invertBatch:t=>function(t,e){const n=new Array(e.length),r=e.reduce(((e,r,s)=>t.is0(r)?e:(n[s]=e,t.mul(e,r))),t.ONE),s=t.inv(r);return e.reduceRight(((e,r,s)=>t.is0(r)?e:(n[s]=t.mul(e,n[s]),t.mul(e,r))),s),n}(a,t),cmov:(t,e,n)=>n?e:t,toBytes:t=>n?fe(t,i):ce(t,i),fromBytes:t=>{if(t.length!==i)throw new Error(`Fp.fromBytes: expected ${i}, got ${t.length}`);return n?ue(t):ae(t)}});return Object.freeze(a)}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Re=BigInt(0),He=BigInt(1);function je(t){return Ne(t.Fp),be(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...Le(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const{bytesToNumberBE:De,hexToBytes:$e}=ve,ze={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(t){const{Err:e}=ze;if(t.length<2||2!==t[0])throw new e("Invalid signature integer tag");const n=t[1],r=t.subarray(2,n+2);if(!n||r.length!==n)throw new e("Invalid signature integer: wrong length");if(0===r[0]&&r[1]<=127)throw new e("Invalid signature integer: trailing length");return{d:De(r),l:t.subarray(n+2)}},toSig(t){const{Err:e}=ze,n="string"==typeof t?$e(t):t;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let r=n.length;if(r<2||48!=n[0])throw new e("Invalid signature tag");if(n[1]!==r-2)throw new e("Invalid signature: incorrect length");const{d:s,l:i}=ze._parseInt(n.subarray(2)),{d:o,l:a}=ze._parseInt(i);if(a.length)throw new e("Invalid signature: left bytes after parsing");return{r:s,s:o}},hexFromSig(t){const e=t=>Number.parseInt(t[0],16)>=8?"00"+t:t,n=t=>{const e=t.toString(16);return 1&e.length?`0${e}`:e},r=e(n(t.s)),s=e(n(t.r)),i=r.length/2,o=s.length/2,a=n(i),u=n(o);return`30${n(o+i+4)}02${u}${s}02${a}${r}`}},Ke=BigInt(0),Fe=BigInt(1),qe=BigInt(2),Ve=BigInt(3),Me=BigInt(4);function Ge(t){const e=function(t){const e=je(t);be(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:r,a:s}=e;if(n){if(!r.eql(s,r.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if("object"!=typeof n||"bigint"!=typeof n.beta||"function"!=typeof n.splitScalar)throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}(t),{Fp:n}=e,r=e.toBytes||((t,e,r)=>{const s=e.toAffine();return de(Uint8Array.from([4]),n.toBytes(s.x),n.toBytes(s.y))}),s=e.fromBytes||(t=>{const e=t.subarray(1);return{x:n.fromBytes(e.subarray(0,n.BYTES)),y:n.fromBytes(e.subarray(n.BYTES,2*n.BYTES))}});function i(t){const{a:r,b:s}=e,i=n.sqr(t),o=n.mul(i,t);return n.add(n.add(o,n.mul(t,r)),s)}function o(t){return"bigint"==typeof t&&Ke<t&&t<e.n}function a(t){if(!o(t))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function u(t){const{allowedPrivateKeyLengths:n,nByteLength:r,wrapPrivateKey:s,n:i}=e;if(n&&"bigint"!=typeof t){if(t instanceof Uint8Array&&(t=re(t)),"string"!=typeof t||!n.includes(t.length))throw new Error("Invalid key");t=t.padStart(2*r,"0")}let o;try{o="bigint"==typeof t?t:ae(he("private key",t,r))}catch(e){throw new Error(`private key must be ${r} bytes, hex or bigint, not ${typeof t}`)}return s&&(o=Ie(o,i)),a(o),o}const c=new Map;function f(t){if(!(t instanceof h))throw new Error("ProjectivePoint expected")}class h{constructor(t,e,r){if(this.px=t,this.py=e,this.pz=r,null==t||!n.isValid(t))throw new Error("x required");if(null==e||!n.isValid(e))throw new Error("y required");if(null==r||!n.isValid(r))throw new Error("z required")}static fromAffine(t){const{x:e,y:r}=t||{};if(!t||!n.isValid(e)||!n.isValid(r))throw new Error("invalid affine point");if(t instanceof h)throw new Error("projective point not allowed");const s=t=>n.eql(t,n.ZERO);return s(e)&&s(r)?h.ZERO:new h(e,r,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(t){const e=n.invertBatch(t.map((t=>t.pz)));return t.map(((t,n)=>t.toAffine(e[n]))).map(h.fromAffine)}static fromHex(t){const e=h.fromAffine(s(he("pointHex",t)));return e.assertValidity(),e}static fromPrivateKey(t){return h.BASE.multiply(u(t))}_setWindowSize(t){this._WINDOW_SIZE=t,c.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x:t,y:r}=this.toAffine();if(!n.isValid(t)||!n.isValid(r))throw new Error("bad point: x or y not FE");const s=n.sqr(r),o=i(t);if(!n.eql(s,o))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:t}=this.toAffine();if(n.isOdd)return!n.isOdd(t);throw new Error("Field doesn't support isOdd")}equals(t){f(t);const{px:e,py:r,pz:s}=this,{px:i,py:o,pz:a}=t,u=n.eql(n.mul(e,a),n.mul(i,s)),c=n.eql(n.mul(r,a),n.mul(o,s));return u&&c}negate(){return new h(this.px,n.neg(this.py),this.pz)}double(){const{a:t,b:r}=e,s=n.mul(r,Ve),{px:i,py:o,pz:a}=this;let u=n.ZERO,c=n.ZERO,f=n.ZERO,d=n.mul(i,i),l=n.mul(o,o),p=n.mul(a,a),g=n.mul(i,o);return g=n.add(g,g),f=n.mul(i,a),f=n.add(f,f),u=n.mul(t,f),c=n.mul(s,p),c=n.add(u,c),u=n.sub(l,c),c=n.add(l,c),c=n.mul(u,c),u=n.mul(g,u),f=n.mul(s,f),p=n.mul(t,p),g=n.sub(d,p),g=n.mul(t,g),g=n.add(g,f),f=n.add(d,d),d=n.add(f,d),d=n.add(d,p),d=n.mul(d,g),c=n.add(c,d),p=n.mul(o,a),p=n.add(p,p),d=n.mul(p,g),u=n.sub(u,d),f=n.mul(p,l),f=n.add(f,f),f=n.add(f,f),new h(u,c,f)}add(t){f(t);const{px:r,py:s,pz:i}=this,{px:o,py:a,pz:u}=t;let c=n.ZERO,d=n.ZERO,l=n.ZERO;const p=e.a,g=n.mul(e.b,Ve);let y=n.mul(r,o),m=n.mul(s,a),w=n.mul(i,u),b=n.add(r,s),v=n.add(o,a);b=n.mul(b,v),v=n.add(y,m),b=n.sub(b,v),v=n.add(r,i);let _=n.add(o,u);return v=n.mul(v,_),_=n.add(y,w),v=n.sub(v,_),_=n.add(s,i),c=n.add(a,u),_=n.mul(_,c),c=n.add(m,w),_=n.sub(_,c),l=n.mul(p,v),c=n.mul(g,w),l=n.add(c,l),c=n.sub(m,l),l=n.add(m,l),d=n.mul(c,l),m=n.add(y,y),m=n.add(m,y),w=n.mul(p,w),v=n.mul(g,v),m=n.add(m,w),w=n.sub(y,w),w=n.mul(p,w),v=n.add(v,w),y=n.mul(m,v),d=n.add(d,y),y=n.mul(_,v),c=n.mul(b,c),c=n.sub(c,y),y=n.mul(b,m),l=n.mul(_,l),l=n.add(l,y),new h(c,d,l)}subtract(t){return this.add(t.negate())}is0(){return this.equals(h.ZERO)}wNAF(t){return l.wNAFCached(this,c,t,(t=>{const e=n.invertBatch(t.map((t=>t.pz)));return t.map(((t,n)=>t.toAffine(e[n]))).map(h.fromAffine)}))}multiplyUnsafe(t){const r=h.ZERO;if(t===Ke)return r;if(a(t),t===Fe)return this;const{endo:s}=e;if(!s)return l.unsafeLadder(this,t);let{k1neg:i,k1:o,k2neg:u,k2:c}=s.splitScalar(t),f=r,d=r,p=this;for(;o>Ke||c>Ke;)o&Fe&&(f=f.add(p)),c&Fe&&(d=d.add(p)),p=p.double(),o>>=Fe,c>>=Fe;return i&&(f=f.negate()),u&&(d=d.negate()),d=new h(n.mul(d.px,s.beta),d.py,d.pz),f.add(d)}multiply(t){a(t);let r,s,i=t;const{endo:o}=e;if(o){const{k1neg:t,k1:e,k2neg:a,k2:u}=o.splitScalar(i);let{p:c,f:f}=this.wNAF(e),{p:d,f:p}=this.wNAF(u);c=l.constTimeNegate(t,c),d=l.constTimeNegate(a,d),d=new h(n.mul(d.px,o.beta),d.py,d.pz),r=c.add(d),s=f.add(p)}else{const{p:t,f:e}=this.wNAF(i);r=t,s=e}return h.normalizeZ([r,s])[0]}multiplyAndAddUnsafe(t,e,n){const r=h.BASE,s=(t,e)=>e!==Ke&&e!==Fe&&t.equals(r)?t.multiply(e):t.multiplyUnsafe(e),i=s(this,e).add(s(t,n));return i.is0()?void 0:i}toAffine(t){const{px:e,py:r,pz:s}=this,i=this.is0();null==t&&(t=i?n.ONE:n.inv(s));const o=n.mul(e,t),a=n.mul(r,t),u=n.mul(s,t);if(i)return{x:n.ZERO,y:n.ZERO};if(!n.eql(u,n.ONE))throw new Error("invZ was invalid");return{x:o,y:a}}isTorsionFree(){const{h:t,isTorsionFree:n}=e;if(t===Fe)return!0;if(n)return n(h,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:t,clearCofactor:n}=e;return t===Fe?this:n?n(h,this):this.multiplyUnsafe(e.h)}toRawBytes(t=!0){return this.assertValidity(),r(h,this,t)}toHex(t=!0){return re(this.toRawBytes(t))}}h.BASE=new h(e.Gx,e.Gy,n.ONE),h.ZERO=new h(n.ZERO,n.ONE,n.ZERO);const d=e.nBitLength,l=function(t,e){const n=(t,e)=>{const n=e.negate();return t?n:e},r=t=>({windows:Math.ceil(e/t)+1,windowSize:2**(t-1)});return{constTimeNegate:n,unsafeLadder(e,n){let r=t.ZERO,s=e;for(;n>Re;)n&He&&(r=r.add(s)),s=s.double(),n>>=He;return r},precomputeWindow(t,e){const{windows:n,windowSize:s}=r(e),i=[];let o=t,a=o;for(let t=0;t<n;t++){a=o,i.push(a);for(let t=1;t<s;t++)a=a.add(o),i.push(a);o=a.double()}return i},wNAF(e,s,i){const{windows:o,windowSize:a}=r(e);let u=t.ZERO,c=t.BASE;const f=BigInt(2**e-1),h=2**e,d=BigInt(e);for(let t=0;t<o;t++){const e=t*a;let r=Number(i&f);i>>=d,r>a&&(r-=h,i+=He);const o=e,l=e+Math.abs(r)-1,p=t%2!=0,g=r<0;0===r?c=c.add(n(p,s[o])):u=u.add(n(g,s[l]))}return{p:u,f:c}},wNAFCached(t,e,n,r){const s=t._WINDOW_SIZE||1;let i=e.get(t);return i||(i=this.precomputeWindow(t,s),1!==s&&e.set(t,r(i))),this.wNAF(s,i,n)}}}(h,e.endo?Math.ceil(d/2):d);return{CURVE:e,ProjectivePoint:h,normPrivateKeyToScalar:u,weierstrassEquation:i,isWithinCurveOrder:o}}function We(t){const e=function(t){const e=je(t);return be(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}(t),{Fp:n,n:r}=e,s=n.BYTES+1,i=2*n.BYTES+1;function o(t){return Ie(t,r)}function a(t){return Te(t,r)}const{ProjectivePoint:u,normPrivateKeyToScalar:c,weierstrassEquation:f,isWithinCurveOrder:h}=Ge({...e,toBytes(t,e,r){const s=e.toAffine(),i=n.toBytes(s.x),o=de;return r?o(Uint8Array.from([e.hasEvenY()?2:3]),i):o(Uint8Array.from([4]),i,n.toBytes(s.y))},fromBytes(t){const e=t.length,r=t[0],o=t.subarray(1);if(e!==s||2!==r&&3!==r){if(e===i&&4===r){return{x:n.fromBytes(o.subarray(0,n.BYTES)),y:n.fromBytes(o.subarray(n.BYTES,2*n.BYTES))}}throw new Error(`Point of length ${e} was invalid. Expected ${s} compressed bytes or ${i} uncompressed bytes`)}{const t=ae(o);if(!(Ke<(a=t)&&a<n.ORDER))throw new Error("Point is not on curve");const e=f(t);let s=n.sqrt(e);return 1==(1&r)!==((s&Fe)===Fe)&&(s=n.neg(s)),{x:t,y:s}}var a}}),d=t=>re(ce(t,e.nByteLength));function l(t){return t>r>>Fe}const p=(t,e,n)=>ae(t.slice(e,n));class g{constructor(t,e,n){this.r=t,this.s=e,this.recovery=n,this.assertValidity()}static fromCompact(t){const n=e.nByteLength;return t=he("compactSignature",t,2*n),new g(p(t,0,n),p(t,n,2*n))}static fromDER(t){const{r:e,s:n}=ze.toSig(he("DER",t));return new g(e,n)}assertValidity(){if(!h(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!h(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(t){return new g(this.r,this.s,t)}recoverPublicKey(t){const{r:r,s:s,recovery:i}=this,c=b(he("msgHash",t));if(null==i||![0,1,2,3].includes(i))throw new Error("recovery id invalid");const f=2===i||3===i?r+e.n:r;if(f>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const h=0==(1&i)?"02":"03",l=u.fromHex(h+d(f)),p=a(f),g=o(-c*p),y=o(s*p),m=u.BASE.multiplyAndAddUnsafe(l,g,y);if(!m)throw new Error("point at infinify");return m.assertValidity(),m}hasHighS(){return l(this.s)}normalizeS(){return this.hasHighS()?new g(this.r,o(-this.s),this.recovery):this}toDERRawBytes(){return oe(this.toDERHex())}toDERHex(){return ze.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return oe(this.toCompactHex())}toCompactHex(){return d(this.r)+d(this.s)}}const y={isValidPrivateKey(t){try{return c(t),!0}catch(t){return!1}},normPrivateKeyToScalar:c,randomPrivateKey:()=>{const t=function(t,e,n=!1){const r=(t=he("privateHash",t)).length,s=Le(e).nByteLength+8;if(s<24||r<s||r>1024)throw new Error(`hashToPrivateScalar: expected ${s}-1024 bytes of input, got ${r}`);return Ie(n?ue(t):ae(t),e-xe)+xe}(e.randomBytes(n.BYTES+8),r);return ce(t,e.nByteLength)},precompute:(t=8,e=u.BASE)=>(e._setWindowSize(t),e.multiply(BigInt(3)),e)};function m(t){const e=t instanceof Uint8Array,n="string"==typeof t,r=(e||n)&&t.length;return e?r===s||r===i:n?r===2*s||r===2*i:t instanceof u}const w=e.bits2int||function(t){const n=ae(t),r=8*t.length-e.nBitLength;return r>0?n>>BigInt(r):n},b=e.bits2int_modN||function(t){return o(w(t))},v=pe(e.nBitLength);function _(t){if("bigint"!=typeof t)throw new Error("bigint expected");if(!(Ke<=t&&t<v))throw new Error(`bigint expected < 2^${e.nBitLength}`);return ce(t,e.nByteLength)}function x(t,r,s=E){if(["recovered","canonical"].some((t=>t in s)))throw new Error("sign() legacy options not supported");const{hash:i,randomBytes:f}=e;let{lowS:d,prehash:p,extraEntropy:y}=s;null==d&&(d=!0),t=he("msgHash",t),p&&(t=he("prehashed msgHash",i(t)));const m=b(t),v=c(r),x=[_(v),_(m)];if(null!=y){const t=!0===y?f(n.BYTES):y;x.push(he("extraEntropy",t,n.BYTES))}const S=de(...x),k=m;return{seed:S,k2sig:function(t){const e=w(t);if(!h(e))return;const n=a(e),r=u.BASE.multiply(e).toAffine(),s=o(r.x);if(s===Ke)return;const i=o(n*o(k+s*v));if(i===Ke)return;let c=(r.x===s?0:2)|Number(r.y&Fe),f=i;return d&&l(i)&&(f=function(t){return l(t)?o(-t):t}(i),c^=1),new g(s,f,c)}}}const E={lowS:e.lowS,prehash:!1},S={lowS:e.lowS,prehash:!1};return u.BASE._setWindowSize(8),{CURVE:e,getPublicKey:function(t,e=!0){return u.fromPrivateKey(t).toRawBytes(e)},getSharedSecret:function(t,e,n=!0){if(m(t))throw new Error("first arg must be private key");if(!m(e))throw new Error("second arg must be public key");return u.fromHex(e).multiply(c(t)).toRawBytes(n)},sign:function(t,n,r=E){const{seed:s,k2sig:i}=x(t,n,r);return me(e.hash.outputLen,e.nByteLength,e.hmac)(s,i)},verify:function(t,n,r,s=S){const i=t;if(n=he("msgHash",n),r=he("publicKey",r),"strict"in s)throw new Error("options.strict was renamed to lowS");const{lowS:c,prehash:f}=s;let h,d;try{if("string"==typeof i||i instanceof Uint8Array)try{h=g.fromDER(i)}catch(t){if(!(t instanceof ze.Err))throw t;h=g.fromCompact(i)}else{if("object"!=typeof i||"bigint"!=typeof i.r||"bigint"!=typeof i.s)throw new Error("PARSE");{const{r:t,s:e}=i;h=new g(t,e)}}d=u.fromHex(r)}catch(t){if("PARSE"===t.message)throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(c&&h.hasHighS())return!1;f&&(n=e.hash(n));const{r:l,s:p}=h,y=b(n),m=a(p),w=o(y*m),v=o(l*m),_=u.BASE.multiplyAndAddUnsafe(d,w,v)?.toAffine();return!!_&&o(_.x)===l},ProjectivePoint:u,Signature:g,utils:y}}let Ye=class extends $t{constructor(t,e){super(),this.finished=!1,this.destroyed=!1,Zt.hash(t);const n=Dt(e);if(this.iHash=t.create(),"function"!=typeof this.iHash.update)throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const r=this.blockLen,s=new Uint8Array(r);s.set(n.length>r?t.create().update(n).digest():n);for(let t=0;t<s.length;t++)s[t]^=54;this.iHash.update(s),this.oHash=t.create();for(let t=0;t<s.length;t++)s[t]^=106;this.oHash.update(s),s.fill(0)}update(t){return Zt.exists(this),this.iHash.update(t),this}digestInto(t){Zt.exists(this),Zt.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:e,iHash:n,finished:r,destroyed:s,blockLen:i,outputLen:o}=this;return t.finished=r,t.destroyed=s,t.blockLen=i,t.outputLen=o,t.oHash=e._cloneInto(t.oHash),t.iHash=n._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}};const Je=(t,e,n)=>new Ye(t,e).update(n).digest();
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Qe(t){return{hash:t,hmac:(e,...n)=>Je(t,e,function(...t){if(!t.every((t=>t instanceof Uint8Array)))throw new Error("Uint8Array list expected");if(1===t.length)return t[0];const e=t.reduce(((t,e)=>t+e.length),0),n=new Uint8Array(e);for(let e=0,r=0;e<t.length;e++){const s=t[e];n.set(s,r),r+=s.length}return n}(...n)),randomBytes:Kt}}Je.create=(t,e)=>new Ye(t,e);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Xe=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),tn=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),en=BigInt(1),nn=BigInt(2),rn=(t,e)=>(t+e/nn)/e;function sn(t){const e=Xe,n=BigInt(3),r=BigInt(6),s=BigInt(11),i=BigInt(22),o=BigInt(23),a=BigInt(44),u=BigInt(88),c=t*t*t%e,f=c*c*t%e,h=Be(f,n,e)*f%e,d=Be(h,n,e)*f%e,l=Be(d,nn,e)*c%e,p=Be(l,s,e)*l%e,g=Be(p,i,e)*p%e,y=Be(g,a,e)*g%e,m=Be(y,u,e)*y%e,w=Be(m,a,e)*g%e,b=Be(w,n,e)*f%e,v=Be(b,o,e)*p%e,_=Be(v,r,e)*c%e,x=Be(_,nn,e);if(!on.eql(on.sqr(x),t))throw new Error("Cannot find square root");return x}const on=Ze(Xe,void 0,void 0,{sqrt:sn}),an=function(t,e){const n=e=>We({...t,...Qe(e)});return Object.freeze({...n(e),create:n})}({a:BigInt(0),b:BigInt(7),Fp:on,n:tn,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=tn,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-en*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),s=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=n,o=BigInt("0x100000000000000000000000000000000"),a=rn(i*t,e),u=rn(-r*t,e);let c=Ie(t-a*n-u*s,e),f=Ie(-a*r-u*i,e);const h=c>o,d=f>o;if(h&&(c=e-c),d&&(f=e-f),c>o||f>o)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:h,k1:c,k2neg:d,k2:f}}}},Jt),un=BigInt(0),cn=t=>"bigint"==typeof t&&un<t&&t<Xe,fn=t=>"bigint"==typeof t&&un<t&&t<tn,hn={};function dn(t,...e){let n=hn[t];if(void 0===n){const e=Jt(Uint8Array.from(t,(t=>t.charCodeAt(0))));n=de(e,e),hn[t]=n}return Jt(de(n,...e))}const ln=t=>t.toRawBytes(!0).slice(1),pn=t=>ce(t,32),gn=t=>Ie(t,Xe),yn=t=>Ie(t,tn),mn=an.ProjectivePoint,wn=(t,e,n)=>mn.BASE.multiplyAndAddUnsafe(t,e,n);function bn(t){let e=an.utils.normPrivateKeyToScalar(t),n=mn.fromPrivateKey(e);return{scalar:n.hasEvenY()?e:yn(-e),bytes:ln(n)}}function vn(t){if(!cn(t))throw new Error("bad x: need 0 < x < p");const e=gn(t*t);let n=sn(gn(e*t+BigInt(7)));n%nn!==un&&(n=gn(-n));const r=new mn(t,n,en);return r.assertValidity(),r}function _n(...t){return yn(ae(dn("BIP0340/challenge",...t)))}function xn(t,e,n){const r=he("signature",t,64),s=he("message",e),i=he("publicKey",n,32);try{const t=vn(ae(i)),e=ae(r.subarray(0,32));if(!cn(e))return!1;const n=ae(r.subarray(32,64));if(!fn(n))return!1;const o=_n(pn(e),ln(t),s),a=wn(t,n,yn(-o));return!(!a||!a.hasEvenY()||a.toAffine().x!==e)}catch(t){return!1}}const En={getPublicKey:function(t){return bn(t).bytes},sign:function(t,e,n=Kt(32)){const r=he("message",t),{bytes:s,scalar:i}=bn(e),o=he("auxRand",n,32),a=pn(i^ae(dn("BIP0340/aux",o))),u=dn("BIP0340/nonce",a,s,r),c=yn(ae(u));if(c===un)throw new Error("sign failed: k is zero");const{bytes:f,scalar:h}=bn(c),d=_n(f,s,r),l=new Uint8Array(64);if(l.set(f,0),l.set(pn(yn(h+d*i)),32),!xn(l,r,s))throw new Error("sign: Invalid signature produced");return l},verify:xn,utils:{randomPrivateKey:an.utils.randomPrivateKey,lift_x:vn,pointToBytes:ln,numberToBytesBE:ce,bytesToNumberBE:ae,taggedHash:dn,mod:Ie}},Sn=function(t,e){const n=e.map((t=>Array.from(t).reverse()));return(e,r)=>{const[s,i,o,a]=n.map((n=>n.reduce(((n,r)=>t.add(t.mul(n,e),r)))));return e=t.div(s,i),r=t.mul(r,t.div(o,a)),{x:e,y:r}}}(on,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map((t=>t.map((t=>BigInt(t)))))),kn=function(t,e){if(Ne(t),!t.isValid(e.A)||!t.isValid(e.B)||!t.isValid(e.Z))throw new Error("mapToCurveSimpleSWU: invalid opts");const n=function(t,e){const n=t.ORDER;let r=Ke;for(let t=n-Fe;t%qe===Ke;t/=qe)r+=Fe;const s=r,i=(n-Fe)/qe**s,o=(i-Fe)/qe,a=qe**s-Fe,u=qe**(s-Fe),c=t.pow(e,i),f=t.pow(e,(i+Fe)/qe);let h=(e,n)=>{let r=c,i=t.pow(n,a),h=t.sqr(i);h=t.mul(h,n);let d=t.mul(e,h);d=t.pow(d,o),d=t.mul(d,i),i=t.mul(d,n),h=t.mul(d,e);let l=t.mul(h,i);d=t.pow(l,u);let p=t.eql(d,t.ONE);i=t.mul(h,f),d=t.mul(l,r),h=t.cmov(i,h,p),l=t.cmov(d,l,p);for(let e=s;e>1;e--){let n=qe**(e-qe),s=t.pow(l,n);const o=t.eql(s,t.ONE);i=t.mul(h,r),r=t.mul(r,r),s=t.mul(l,r),h=t.cmov(i,h,o),l=t.cmov(s,l,o)}return{isValid:p,value:h}};if(t.ORDER%Me===Ve){const n=(t.ORDER-Ve)/Me,r=t.sqrt(t.neg(e));h=(e,s)=>{let i=t.sqr(s);const o=t.mul(e,s);i=t.mul(i,o);let a=t.pow(i,n);a=t.mul(a,o);const u=t.mul(a,r),c=t.mul(t.sqr(a),s),f=t.eql(c,e);return{isValid:f,value:t.cmov(u,a,f)}}}return h}(t,e.Z);if(!t.isOdd)throw new Error("Fp.isOdd is not implemented!");return r=>{let s,i,o,a,u,c,f,h;s=t.sqr(r),s=t.mul(s,e.Z),i=t.sqr(s),i=t.add(i,s),o=t.add(i,t.ONE),o=t.mul(o,e.B),a=t.cmov(e.Z,t.neg(i),!t.eql(i,t.ZERO)),a=t.mul(a,e.A),i=t.sqr(o),c=t.sqr(a),u=t.mul(c,e.A),i=t.add(i,u),i=t.mul(i,o),c=t.mul(c,a),u=t.mul(c,e.B),i=t.add(i,u),f=t.mul(s,o);const{isValid:d,value:l}=n(i,c);h=t.mul(s,r),h=t.mul(h,l),f=t.cmov(f,o,d),h=t.cmov(h,l,d);const p=t.isOdd(r)===t.isOdd(h);return h=t.cmov(t.neg(h),h,p),f=t.div(f,a),{x:f,y:h}}}(on,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:on.create(BigInt("-11"))});function An(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function On(t,...e){if(!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}!function(t,e,n){if("function"!=typeof e)throw new Error("mapToCurve() must be defined")}(an.ProjectivePoint,(t=>{const{x:e,y:n}=kn(on.create(t[0]));return Sn(e,n)}),{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:on.ORDER,m:1,k:128,expand:"xmd",hash:Jt});const In={number:An,bool:function(t){if("boolean"!=typeof t)throw new Error(`Expected boolean, not ${t}`)},bytes:On,hash:function(t){if("function"!=typeof t||"function"!=typeof t.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");An(t.outputLen),An(t.blockLen)},exists:function(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")},output:function(t,e){On(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}};var Pn=In;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Bn=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Tn=(t,e)=>t<<32-e|t>>>e;if(!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");function Un(t){if("string"==typeof t&&(t=function(t){if("string"!=typeof t)throw new TypeError("utf8ToBytes expected string, got "+typeof t);return(new TextEncoder).encode(t)}(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));let Cn=class{clone(){return this._cloneInto()}};function Nn(t){const e=e=>t().update(Un(e)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}let Ln=class extends Cn{constructor(t,e,n,r){super(),this.blockLen=t,this.outputLen=e,this.padOffset=n,this.isLE=r,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=Bn(this.buffer)}update(t){Pn.exists(this);const{view:e,buffer:n,blockLen:r}=this,s=(t=Un(t)).length;for(let i=0;i<s;){const o=Math.min(r-this.pos,s-i);if(o!==r)n.set(t.subarray(i,i+o),this.pos),this.pos+=o,i+=o,this.pos===r&&(this.process(e,0),this.pos=0);else{const e=Bn(t);for(;r<=s-i;i+=r)this.process(e,i)}}return this.length+=t.length,this.roundClean(),this}digestInto(t){Pn.exists(this),Pn.output(t,this),this.finished=!0;const{buffer:e,view:n,blockLen:r,isLE:s}=this;let{pos:i}=this;e[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>r-i&&(this.process(n,0),i=0);for(let t=i;t<r;t++)e[t]=0;!function(t,e,n,r){if("function"==typeof t.setBigUint64)return t.setBigUint64(e,n,r);const s=BigInt(32),i=BigInt(4294967295),o=Number(n>>s&i),a=Number(n&i),u=r?4:0,c=r?0:4;t.setUint32(e+u,o,r),t.setUint32(e+c,a,r)}(n,r-8,BigInt(8*this.length),s),this.process(n,0);const o=Bn(t),a=this.outputLen;if(a%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const u=a/4,c=this.get();if(u>c.length)throw new Error("_sha2: outputLen bigger than state");for(let t=0;t<u;t++)o.setUint32(4*t,c[t],s)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const n=t.slice(0,e);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:n,length:r,finished:s,destroyed:i,pos:o}=this;return t.length=r,t.pos=o,t.finished=s,t.destroyed=i,r%e&&t.buffer.set(n),t}};const Zn=(t,e,n)=>t&e^t&n^e&n,Rn=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Hn=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),jn=new Uint32Array(64);let Dn=class extends Ln{constructor(){super(64,32,8,!1),this.A=0|Hn[0],this.B=0|Hn[1],this.C=0|Hn[2],this.D=0|Hn[3],this.E=0|Hn[4],this.F=0|Hn[5],this.G=0|Hn[6],this.H=0|Hn[7]}get(){const{A:t,B:e,C:n,D:r,E:s,F:i,G:o,H:a}=this;return[t,e,n,r,s,i,o,a]}set(t,e,n,r,s,i,o,a){this.A=0|t,this.B=0|e,this.C=0|n,this.D=0|r,this.E=0|s,this.F=0|i,this.G=0|o,this.H=0|a}process(t,e){for(let n=0;n<16;n++,e+=4)jn[n]=t.getUint32(e,!1);for(let t=16;t<64;t++){const e=jn[t-15],n=jn[t-2],r=Tn(e,7)^Tn(e,18)^e>>>3,s=Tn(n,17)^Tn(n,19)^n>>>10;jn[t]=s+jn[t-7]+r+jn[t-16]|0}let{A:n,B:r,C:s,D:i,E:o,F:a,G:u,H:c}=this;for(let t=0;t<64;t++){const e=c+(Tn(o,6)^Tn(o,11)^Tn(o,25))+((f=o)&a^~f&u)+Rn[t]+jn[t]|0,h=(Tn(n,2)^Tn(n,13)^Tn(n,22))+Zn(n,r,s)|0;c=u,u=a,a=o,o=i+e|0,i=s,s=r,r=n,n=e+h|0}var f;n=n+this.A|0,r=r+this.B|0,s=s+this.C|0,i=i+this.D|0,o=o+this.E|0,a=a+this.F|0,u=u+this.G|0,c=c+this.H|0,this.set(n,r,s,i,o,a,u,c)}roundClean(){jn.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},$n=class extends Dn{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}};const zn=Nn((()=>new Dn));function Kn(t){if(t>Number.MAX_SAFE_INTEGER)throw new TypeError("Number exceeds safe bounds!")}Nn((()=>new $n));const{getRandomValues:Fn}=crypto??globalThis.crypto??window.crypto;function qn(t,e,n="be"){void 0===e&&(e=t.length),function(t,e){if(t.length>e)throw new TypeError(`Data is larger than array size: ${t.length} > ${e}`)}(t,e);const r=new Uint8Array(e).fill(0),s="be"===n?0:e-t.length;return r.set(t,s),r}function Vn(t){let e,n=0;const r=t.reduce(((t,e)=>t+e.length),0),s=new Uint8Array(r);for(e=0;e<t.length;e++){const r=t[e];s.set(r,n),n+=r.length}return s}const Mn=new TextEncoder,Gn=[{name:"base58",charset:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}];function Wn(t){for(const e of Gn)if(e.name===t)return e.charset;throw TypeError("Charset does not exist: "+t)}function Yn(t){return zn(zn(t))}const Jn={encode:function(t,e,n=!1){"string"==typeof t&&(t=Mn.encode(t));const r=Wn(e),s=r.length,i=[];let o,a,u,c="",f=0;for(o=0;o<t.length;o++)for(f=0,a=t[o],c+=a>0||(c.length^o)>0?"":"1";f in i||a>0;)u=i[f],u=u>0?256*u+a:a,a=u/s|0,i[f]=u%s,f++;for(;f-- >0;)c+=r[i[f]];return n&&c.length%4>0?c+"=".repeat(4-c.length%4):c},decode:function(t,e){const n=Wn(e),r=n.length,s=[],i=[];t=t.replace("=","");let o,a,u,c=0;for(o=0;o<t.length;o++){if(c=0,a=n.indexOf(t[o]),a<0)throw new Error(`Character range out of bounds: ${a}`);for(a>0||(i.length^o)>0||i.push(0);c in s||a>0;)u=s[c],u=u>0?u*r+a:a,a=u>>8,s[c]=u%256,c++}for(;c-- >0;)i.push(s[c]);return new Uint8Array(i)}},Qn={encode:t=>{const e=function(t){return Vn([t,Yn(t).slice(0,4)])}(t);return Jn.encode(e,"base58")},decode:t=>function(t){const e=t.slice(0,-4),n=t.slice(-4);if(Yn(e).slice(0,4).toString()!==n.toString())throw new Error("Invalid checksum!");return e}(Jn.decode(t,"base58"))},Xn="qpzry9x8gf2tvdw0s3jn54khce6mua7l",tr=[996825010,642813549,513874426,1027748829,705979059],er=[{version:0,name:"bech32",const:1},{version:1,name:"bech32m",const:734539939}];function nr(t){let e=1;for(let n=0;n<t.length;++n){const r=e>>25;e=(33554431&e)<<5^t[n];for(let t=0;t<5;++t)0!=(r>>t&1)&&(e^=tr[t])}return e}function rr(t){const e=[];let n;for(n=0;n<t.length;++n)e.push(t.charCodeAt(n)>>5);for(e.push(0),n=0;n<t.length;++n)e.push(31&t.charCodeAt(n));return e}function sr(t,e,n,r=!0){const s=[];let i=0,o=0;const a=(1<<n)-1,u=(1<<e+n-1)-1;for(const r of t){if(r<0||r>>e>0)throw new Error("Failed to perform base conversion. Invalid value: "+String(r));for(i=(i<<e|r)&u,o+=e;o>=n;)o-=n,s.push(i>>o&a)}if(r)o>0&&s.push(i<<n-o&a);else if(o>=e||(i<<n-o&a)>0)throw new Error("Failed to perform base conversion. Invalid Size!");return s}function ir(t,e,n){const r=e.concat(function(t,e,n){const r=nr(rr(t).concat(e).concat([0,0,0,0,0,0]))^n.const,s=[];for(let t=0;t<6;++t)s.push(r>>5*(5-t)&31);return s}(t,e,n));let s=t+"1";for(let t=0;t<r.length;++t)s+=Xn.charAt(r[t]);return s}function or(t){if(!function(t){let e,n,r=!1,s=!1;for(e=0;e<t.length;++e){if(n=t.charCodeAt(e),n<33||n>126)return!1;n>=97&&n<=122&&(r=!0),n>=65&&n<=90&&(s=!0)}return!r||!s}(t))throw new Error("Encoded string goes out of bounds!");if(!function(t){const e=t.lastIndexOf("1");return!(e<1||e+7>t.length||t.length>90)}(t=t.toLowerCase()))throw new Error("Encoded string has invalid separator!");const e=[],n=t.lastIndexOf("1"),r=t.substring(0,n);for(let r=n+1;r<t.length;++r){const n=Xn.indexOf(t.charAt(r));if(-1===n)throw new Error("Character idx out of bounds: "+String(r));e.push(n)}const s=er.find((t=>t.version===e[0]))??er[0];if(!function(t,e,n){return nr(rr(t).concat(e))===n.const}(r,e,s))throw new Error("Checksum verification failed!");return[r,e.slice(0,e.length-6)]}function ar(t){const e=(t=t.toLowerCase()).split("1",1)[0],[n,r]=or(t),s=sr(r.slice(1),5,8,!1),i=s.length;switch(!0){case e!==n:throw new Error("Returned hrp string is invalid.");case null===s||i<2||i>40:throw new Error("Decoded string is invalid or out of spec.");case r[0]>16:throw new Error("Returned version bit is out of range.");default:return Uint8Array.from(s)}}const ur={encode:function(t,e="bc",n=0){const r=ir(e,[n,...sr([...t],8,5)],er.find((t=>t.version===n))??er[0]);return ar(r),r},decode:ar,version:function(t){t=t.toLowerCase();const[e,n]=or(t);return n[0]}},cr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",hr=new TextEncoder;function dr(t,e=!1,n=!0){"string"==typeof t&&(t=hr.encode(t));const r=e?fr:cr;let s="",i=0,o=0;for(let e=0;e<t.length;e++)for(o=o<<8|t[e],i+=8;i>=6;)i-=6,s+=r[o>>i&63];if(i>0)for(o<<=6-i,s+=r[63&o];i<6;)s+=n?"=":"",i+=2;return s}function lr(t,e=!1){const n=e||t.includes("-")||t.includes("_")?fr.split(""):cr.split(""),r=(t=t.replace(/=+$/,"")).split("");let s=0,i=0;const o=[];for(let t=0;t<r.length;t++){const e=r[t],a=n.indexOf(e);if(-1===a)throw new Error("Invalid character: "+e);s+=6,i<<=6,i|=a,s>=8&&(s-=8,o.push(i>>>s&255))}return new Uint8Array(o)}const pr={encode:dr,decode:lr},gr={encode:t=>dr(t,!0,!1),decode:t=>lr(t,!0)},yr=BigInt(0),mr=BigInt(255),wr=BigInt(256);function br(t,e,n="be"){void 0===e&&(e=function(t){if(t<=0xffn)return 1;if(t<=0xffffn)return 2;if(t<=0xffffffffn)return 4;if(t<=0xffffffffffffffffn)return 8;if(t<=0xffffffffffffffffffffffffffffffffn)return 16;if(t<=0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn)return 32;throw new TypeError("Must specify a fixed buffer size for bigints greater than 32 bytes.")}(t));const r="le"===n,s=new ArrayBuffer(e),i=new DataView(s);let o=r?0:e-1;for(;t>yr;){const e=t&mr,n=Number(e);r?i.setUint8(o++,n):i.setUint8(o--,n),t=(t-e)/wr}return new Uint8Array(s)}function vr(t,e,n="be"){void 0===e&&(e=function(t){if(t<=255)return 1;if(t<=65535)return 2;if(t<=4294967295)return 4;throw new TypeError("Numbers larger than 4 bytes must specify a fixed size!")}(t));const r="le"===n,s=new ArrayBuffer(e),i=new DataView(s);let o=r?0:e-1;for(;t>0;){const e=255&t;r?i.setUint8(o++,t):i.setUint8(o--,t),t=(t-e)/256}return new Uint8Array(s)}const _r=new TextEncoder,xr=new TextDecoder;function Er(t){return _r.encode(t)}function Sr(t){return xr.decode(t)}function kr(t,e){!function(t){if(null!==t.match(/[^a-fA-f0-9]/))throw new TypeError("Invalid characters in hex string: "+t);if(t.length%2!=0)throw new Error(`Length of hex string is invalid: ${t.length}`)}(t);const n=t.length/2;if(void 0===e&&(e=n),n>e)throw new TypeError(`Hex string is larger than array size: ${n} > ${e}`);return e}function Ar(t,e,n){if(t instanceof ArrayBuffer)return new Uint8Array(t);if(t instanceof Uint8Array)return qn(t,e,n);if("string"==typeof t)return function(t,e,n="le"){e=kr(t,e);const r="le"===n,s=new ArrayBuffer(e),i=new DataView(s);let o=r?0:e-1;for(let e=0;e<t.length;e+=2){const n=t.substring(e,e+2),s=parseInt(n,16);r?i.setUint8(o++,s):i.setUint8(o--,s)}return new Uint8Array(s)}(t,e,n);if("bigint"==typeof t)return br(t,e,n);if("number"==typeof t)return vr(t,e,n);if("boolean"==typeof t)return Uint8Array.of(t?1:0);throw TypeError("Unsupported format:"+String(typeof t))}class Or extends Uint8Array{static{this.num=Ir}static{this.big=Br}static{this.bin=Pr}static{this.raw=Tr}static{this.str=Ur}static{this.hex=Cr}static{this.bytes=Nr}static{this.json=Lr}static{this.base64=Zr}static{this.b64url=Rr}static{this.bech32=Hr}static{this.b58chk=jr}static{this.encode=Er}static{this.decode=Sr}static random(t=32){const e=function(t=32){if("function"==typeof Fn)return crypto.getRandomValues(new Uint8Array(t));throw new Error("Crypto module missing getRandomValues!")}(t);return new Or(e,t)}constructor(t,e,n){super(Ar(t,e,n))}get arr(){return[...this]}get num(){return this.toNum()}get big(){return this.toBig()}get str(){return this.toStr()}get hex(){return this.toHex()}get raw(){return new Uint8Array(this)}get bin(){return this.toBin()}get b58chk(){return this.tob58chk()}get base64(){return this.toBase64()}get b64url(){return this.toB64url()}get digest(){return this.toHash()}get id(){return this.toHash().hex}get stream(){return new Dr(this)}toNum(t="be"){return function(t){let e=0;for(let n=t.length-1;n>=0;n--)e=256*e+t[n],Kn(e);return e}("be"===t?this.reverse():this)}toBin(){return function(t){const e=new Array(8*t.length);let n=0;for(const r of t){if(r>255)throw new Error(`Invalid byte value: ${r}. Byte values must be between 0 and 255.`);for(let t=7;t>=0;t--,n++)e[n]=r>>t&1}return e.join("")}(this)}toBig(t="be"){return function(t){let e=BigInt(0);for(let n=t.length-1;n>=0;n--)e=e*wr+BigInt(t[n]);return BigInt(e)}("be"===t?this.reverse():this)}toHash(){const t=zn(this);return new Or(t)}toJson(){const t=Sr(this);return JSON.parse(t)}toBech32(t,e=0){return ur.encode(this,t,e)}toStr(){return Sr(this)}toHex(){return function(t){let e="";for(let n=0;n<t.length;n++)e+=t[n].toString(16).padStart(2,"0");return e}(this)}toBytes(){return new Uint8Array(this)}tob58chk(){return Qn.encode(this)}toBase64(){return pr.encode(this)}toB64url(){return gr.encode(this)}prepend(t){return Or.join([Or.bytes(t),this])}append(t){return Or.join([this,Or.bytes(t)])}slice(t,e){const n=new Uint8Array(this).slice(t,e);return new Or(n)}subarray(t,e){const n=new Uint8Array(this).subarray(t,e);return new Or(n)}reverse(){const t=new Uint8Array(this).reverse();return new Or(t)}write(t,e){const n=Or.bytes(t);this.set(n,e)}prefixSize(t){const e=Or.varInt(this.length,t);return Or.join([e,this])}static from(t){return new Or(Uint8Array.from(t))}static of(...t){return new Or(Uint8Array.of(...t))}static join(t){const e=Vn(t.map((t=>Or.bytes(t))));return new Or(e)}static varInt(t,e){if(t<253)return Or.num(t,1);if(t<65536)return Or.of(253,...Or.num(t,2,e));if(t<4294967296)return Or.of(254,...Or.num(t,4,e));if(BigInt(t)<0x10000000000000000n)return Or.of(255,...Or.num(t,8,e));throw new Error(`Value is too large: ${t}`)}}function Ir(t,e,n){return new Or(t,e,n)}function Pr(t,e,n){return new Or(function(t){const e=t.split("").map(Number);if(e.length%8!=0)throw new Error(`Binary array is invalid length: ${t.length}`);const n=new Uint8Array(e.length/8);for(let t=0,r=0;t<e.length;t+=8,r++){let s=0;for(let n=0;n<8;n++)s|=e[t+n]<<7-n;n[r]=s}return n}(t),e,n)}function Br(t,e,n){return new Or(t,e,n)}function Tr(t,e,n){return new Or(t,e,n)}function Ur(t,e,n){return new Or(Er(t),e,n)}function Cr(t,e,n){return new Or(t,e,n)}function Nr(t,e,n){return new Or(t,e,n)}function Lr(t){return new Or((e=t,Er(JSON.stringify(e,((t,e)=>"bigint"==typeof e?`${e}n`:e)))));var e}function Zr(t){return new Or(pr.decode(t))}function Rr(t){return new Or(gr.decode(t))}function Hr(t){return new Or(ur.decode(t))}function jr(t){return new Or(Qn.decode(t))}class Dr{constructor(t){this.data=Or.bytes(t),this.size=this.data.length}peek(t){if(t>this.size)throw new Error(`Size greater than stream: ${t} > ${this.size}`);return new Or(this.data.slice(0,t))}read(t){t=t??this.readSize();const e=this.peek(t);return this.data=this.data.slice(t),this.size=this.data.length,e}readSize(t){const e=this.read(1).num;switch(!0){case e>=0&&e<253:return e;case 253===e:return this.read(2).toNum(t);case 254===e:return this.read(4).toNum(t);case 255===e:return this.read(8).toNum(t);default:throw new Error(`Varint is out of range: ${e}`)}}}const $r=an.CURVE,zr=$r.n,Kr=$r.p,Fr={x:$r.Gx,y:$r.Gy},qr=BigInt(0),Vr=BigInt(1),Mr=BigInt(2),Gr=BigInt(3),Wr=BigInt(4),Yr={N:zr,P:Kr,G:Fr,_0n:qr,_1n:Vr,_2n:Mr,_3n:Gr,_4n:Wr},Jr=Ze(zr,32,!0),Qr=t=>Ie(t,zr);function Xr(t,e=!1){if(e)throw new Error(t);return!1}function ts(t){return Or.random(t)}var es=Object.freeze({__proto__:null,fail:Xr,mod_bytes:function(t){const e=Or.bytes(t).big;return Or.big(Qr(e),32)},random:ts});const{N:ns,P:rs,_0n:ss}=Yr;const is=an.ProjectivePoint;class os extends Uint8Array{static{this.N=an.CURVE.n}static mod(t){return new os(t)}static is_valid(t,e){return function(t,e){return"bigint"==typeof t&&ss<t&&t<ns||Xr("x value is not in the field!",e),!0}(Or.bytes(t,32).big,e)}constructor(t){let e=function(t){if(t instanceof os)return t.big;if(t instanceof as)return t.x.big;if(t instanceof Uint8Array)return Or.raw(t).big;if("string"==typeof t)return Or.hex(t).big;if("number"==typeof t)return Or.num(t).big;if("bigint"==typeof t)return BigInt(t);throw TypeError("Invalid input type:"+typeof t)}(t);e=Qr(e),os.is_valid(e,!0),super(Or.big(e,32),32)}get buff(){return new Or(this)}get raw(){return this.buff.raw}get big(){return this.buff.big}get hex(){return this.buff.hex}get point(){return this.generate()}get hasOddY(){return this.point.hasOddY}get negated(){return this.hasOddY?this.negate():this}gt(t){return new os(t).big>this.big}lt(t){return new os(t).big<this.big}eq(t){return new os(t).big===this.big}ne(t){return new os(t).big!==this.big}add(t){const e=os.mod(t),n=Jr.add(this.big,e.big);return new os(n)}sub(t){const e=os.mod(t),n=Jr.sub(this.big,e.big);return new os(n)}mul(t){const e=os.mod(t),n=Jr.mul(this.big,e.big);return new os(n)}pow(t){const e=os.mod(t),n=Jr.pow(this.big,e.big);return new os(n)}div(t){const e=os.mod(t),n=Jr.div(this.big,e.big);return new os(n)}negate(){return new os(os.N-this.big)}generate(){const t=an.ProjectivePoint.BASE.multiply(this.big);return as.import(t)}}class as{static{this.P=Yr.P}static{this.G=Yr.G}static{this.base=an.ProjectivePoint.BASE}static from_x(t){let e=function(t){if(t instanceof os)return t.point.buff;if(t instanceof as)return t.buff;if(t instanceof Uint8Array||"string"==typeof t)return Or.bytes(t);if("number"==typeof t||"bigint"==typeof t)return Or.bytes(t,32);throw new TypeError("Unknown type: "+typeof t)}(t);32===e.length&&(e=e.prepend(2)),function(t,e,n){const r=Or.bytes(t);r.length===e||Xr(`Invalid byte size: ${r.hex} !== ${e}`,n)}(e,33);const n=is.fromHex(e.hex);return n.assertValidity(),new as(n.x,n.y)}static generate(t){const e=os.mod(t),n=as.base.multiply(e.big);return as.import(n)}static import(t){const e=t instanceof as?{x:t.x.big,y:t.y.big}:{x:t.x,y:t.y};return new as(e.x,e.y)}constructor(t,e){this._p=new is(t,e,1n),this.p.assertValidity()}get p(){return this._p}get x(){return Or.big(this.p.x,32)}get y(){return Or.big(this.p.y,32)}get buff(){return Or.raw(this.p.toRawBytes(!0))}get raw(){return this.buff.raw}get hex(){return this.buff.hex}get hasEvenY(){return this.p.hasEvenY()}get hasOddY(){return!this.p.hasEvenY()}eq(t){const e=t instanceof as?t:as.from_x(t);return this.x.big===e.x.big&&this.y.big===e.y.big}add(t){return t instanceof as?as.import(this.p.add(t.p)):as.import(this.p.add(as.generate(t).p))}sub(t){return t instanceof as?as.import(this.p.subtract(t.p)):as.import(this.p.subtract(as.generate(t).p))}mul(t){return t instanceof as?as.import(this.p.multiply(t.x.big)):as.import(this.p.multiply(os.mod(t).big))}negate(){return as.import(this.p.negate())}}function us(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function cs(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}const fs={number:us,bool:function(t){if("boolean"!=typeof t)throw new Error(`Expected boolean, not ${t}`)},bytes:cs,hash:function(t){if("function"!=typeof t||"function"!=typeof t.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");us(t.outputLen),us(t.blockLen)},exists:function(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")},output:function(t,e){cs(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}};var hs=fs;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const ds=t=>t instanceof Uint8Array,ls=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),ps=(t,e)=>t<<32-e|t>>>e;if(!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");function gs(t){if("string"==typeof t&&(t=function(t){if("string"!=typeof t)throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array((new TextEncoder).encode(t))}(t)),!ds(t))throw new Error("expected Uint8Array, got "+typeof t);return t}Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));class ys{clone(){return this._cloneInto()}}function ms(t){const e=e=>t().update(gs(e)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}class ws extends ys{constructor(t,e,n,r){super(),this.blockLen=t,this.outputLen=e,this.padOffset=n,this.isLE=r,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=ls(this.buffer)}update(t){hs.exists(this);const{view:e,buffer:n,blockLen:r}=this,s=(t=gs(t)).length;for(let i=0;i<s;){const o=Math.min(r-this.pos,s-i);if(o!==r)n.set(t.subarray(i,i+o),this.pos),this.pos+=o,i+=o,this.pos===r&&(this.process(e,0),this.pos=0);else{const e=ls(t);for(;r<=s-i;i+=r)this.process(e,i)}}return this.length+=t.length,this.roundClean(),this}digestInto(t){hs.exists(this),hs.output(t,this),this.finished=!0;const{buffer:e,view:n,blockLen:r,isLE:s}=this;let{pos:i}=this;e[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>r-i&&(this.process(n,0),i=0);for(let t=i;t<r;t++)e[t]=0;!function(t,e,n,r){if("function"==typeof t.setBigUint64)return t.setBigUint64(e,n,r);const s=BigInt(32),i=BigInt(4294967295),o=Number(n>>s&i),a=Number(n&i),u=r?4:0,c=r?0:4;t.setUint32(e+u,o,r),t.setUint32(e+c,a,r)}(n,r-8,BigInt(8*this.length),s),this.process(n,0);const o=ls(t),a=this.outputLen;if(a%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const u=a/4,c=this.get();if(u>c.length)throw new Error("_sha2: outputLen bigger than state");for(let t=0;t<u;t++)o.setUint32(4*t,c[t],s)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const n=t.slice(0,e);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:n,length:r,finished:s,destroyed:i,pos:o}=this;return t.length=r,t.pos=o,t.finished=s,t.destroyed=i,r%e&&t.buffer.set(n),t}}const bs=(t,e,n)=>t&e^t&n^e&n,vs=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),_s=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),xs=new Uint32Array(64);class Es extends ws{constructor(){super(64,32,8,!1),this.A=0|_s[0],this.B=0|_s[1],this.C=0|_s[2],this.D=0|_s[3],this.E=0|_s[4],this.F=0|_s[5],this.G=0|_s[6],this.H=0|_s[7]}get(){const{A:t,B:e,C:n,D:r,E:s,F:i,G:o,H:a}=this;return[t,e,n,r,s,i,o,a]}set(t,e,n,r,s,i,o,a){this.A=0|t,this.B=0|e,this.C=0|n,this.D=0|r,this.E=0|s,this.F=0|i,this.G=0|o,this.H=0|a}process(t,e){for(let n=0;n<16;n++,e+=4)xs[n]=t.getUint32(e,!1);for(let t=16;t<64;t++){const e=xs[t-15],n=xs[t-2],r=ps(e,7)^ps(e,18)^e>>>3,s=ps(n,17)^ps(n,19)^n>>>10;xs[t]=s+xs[t-7]+r+xs[t-16]|0}let{A:n,B:r,C:s,D:i,E:o,F:a,G:u,H:c}=this;for(let t=0;t<64;t++){const e=c+(ps(o,6)^ps(o,11)^ps(o,25))+((f=o)&a^~f&u)+vs[t]+xs[t]|0,h=(ps(n,2)^ps(n,13)^ps(n,22))+bs(n,r,s)|0;c=u,u=a,a=o,o=i+e|0,i=s,s=r,r=n,n=e+h|0}var f;n=n+this.A|0,r=r+this.B|0,s=s+this.C|0,i=i+this.D|0,o=o+this.E|0,a=a+this.F|0,u=u+this.G|0,c=c+this.H|0,this.set(n,r,s,i,o,a,u,c)}roundClean(){xs.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class Ss extends Es{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const ks=ms((()=>new Es));ms((()=>new Ss));const As=BigInt(2**32-1),Os=BigInt(32);function Is(t,e=!1){return e?{h:Number(t&As),l:Number(t>>Os&As)}:{h:0|Number(t>>Os&As),l:0|Number(t&As)}}var Ps={fromBig:Is,split:function(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let s=0;s<t.length;s++){const{h:i,l:o}=Is(t[s],e);[n[s],r[s]]=[i,o]}return[n,r]},toBig:(t,e)=>BigInt(t>>>0)<<Os|BigInt(e>>>0),shrSH:(t,e,n)=>t>>>n,shrSL:(t,e,n)=>t<<32-n|e>>>n,rotrSH:(t,e,n)=>t>>>n|e<<32-n,rotrSL:(t,e,n)=>t<<32-n|e>>>n,rotrBH:(t,e,n)=>t<<64-n|e>>>n-32,rotrBL:(t,e,n)=>t>>>n-32|e<<64-n,rotr32H:(t,e)=>e,rotr32L:(t,e)=>t,rotlSH:(t,e,n)=>t<<n|e>>>32-n,rotlSL:(t,e,n)=>e<<n|t>>>32-n,rotlBH:(t,e,n)=>e<<n-32|t>>>64-n,rotlBL:(t,e,n)=>t<<n-32|e>>>64-n,add:function(t,e,n,r){const s=(e>>>0)+(r>>>0);return{h:t+n+(s/2**32|0)|0,l:0|s}},add3L:(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),add3H:(t,e,n,r)=>e+n+r+(t/2**32|0)|0,add4L:(t,e,n,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),add4H:(t,e,n,r,s)=>e+n+r+s+(t/2**32|0)|0,add5H:(t,e,n,r,s,i)=>e+n+r+s+i+(t/2**32|0)|0,add5L:(t,e,n,r,s)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0)+(s>>>0)};const[Bs,Ts]=Ps.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map((t=>BigInt(t)))),Us=new Uint32Array(80),Cs=new Uint32Array(80);class Ns extends ws{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:e,Bh:n,Bl:r,Ch:s,Cl:i,Dh:o,Dl:a,Eh:u,El:c,Fh:f,Fl:h,Gh:d,Gl:l,Hh:p,Hl:g}=this;return[t,e,n,r,s,i,o,a,u,c,f,h,d,l,p,g]}set(t,e,n,r,s,i,o,a,u,c,f,h,d,l,p,g){this.Ah=0|t,this.Al=0|e,this.Bh=0|n,this.Bl=0|r,this.Ch=0|s,this.Cl=0|i,this.Dh=0|o,this.Dl=0|a,this.Eh=0|u,this.El=0|c,this.Fh=0|f,this.Fl=0|h,this.Gh=0|d,this.Gl=0|l,this.Hh=0|p,this.Hl=0|g}process(t,e){for(let n=0;n<16;n++,e+=4)Us[n]=t.getUint32(e),Cs[n]=t.getUint32(e+=4);for(let t=16;t<80;t++){const e=0|Us[t-15],n=0|Cs[t-15],r=Ps.rotrSH(e,n,1)^Ps.rotrSH(e,n,8)^Ps.shrSH(e,n,7),s=Ps.rotrSL(e,n,1)^Ps.rotrSL(e,n,8)^Ps.shrSL(e,n,7),i=0|Us[t-2],o=0|Cs[t-2],a=Ps.rotrSH(i,o,19)^Ps.rotrBH(i,o,61)^Ps.shrSH(i,o,6),u=Ps.rotrSL(i,o,19)^Ps.rotrBL(i,o,61)^Ps.shrSL(i,o,6),c=Ps.add4L(s,u,Cs[t-7],Cs[t-16]),f=Ps.add4H(c,r,a,Us[t-7],Us[t-16]);Us[t]=0|f,Cs[t]=0|c}let{Ah:n,Al:r,Bh:s,Bl:i,Ch:o,Cl:a,Dh:u,Dl:c,Eh:f,El:h,Fh:d,Fl:l,Gh:p,Gl:g,Hh:y,Hl:m}=this;for(let t=0;t<80;t++){const e=Ps.rotrSH(f,h,14)^Ps.rotrSH(f,h,18)^Ps.rotrBH(f,h,41),w=Ps.rotrSL(f,h,14)^Ps.rotrSL(f,h,18)^Ps.rotrBL(f,h,41),b=f&d^~f&p,v=h&l^~h&g,_=Ps.add5L(m,w,v,Ts[t],Cs[t]),x=Ps.add5H(_,y,e,b,Bs[t],Us[t]),E=0|_,S=Ps.rotrSH(n,r,28)^Ps.rotrBH(n,r,34)^Ps.rotrBH(n,r,39),k=Ps.rotrSL(n,r,28)^Ps.rotrBL(n,r,34)^Ps.rotrBL(n,r,39),A=n&s^n&o^s&o,O=r&i^r&a^i&a;y=0|p,m=0|g,p=0|d,g=0|l,d=0|f,l=0|h,({h:f,l:h}=Ps.add(0|u,0|c,0|x,0|E)),u=0|o,c=0|a,o=0|s,a=0|i,s=0|n,i=0|r;const I=Ps.add3L(E,k,O);n=Ps.add3H(I,x,S,A),r=0|I}({h:n,l:r}=Ps.add(0|this.Ah,0|this.Al,0|n,0|r)),({h:s,l:i}=Ps.add(0|this.Bh,0|this.Bl,0|s,0|i)),({h:o,l:a}=Ps.add(0|this.Ch,0|this.Cl,0|o,0|a)),({h:u,l:c}=Ps.add(0|this.Dh,0|this.Dl,0|u,0|c)),({h:f,l:h}=Ps.add(0|this.Eh,0|this.El,0|f,0|h)),({h:d,l:l}=Ps.add(0|this.Fh,0|this.Fl,0|d,0|l)),({h:p,l:g}=Ps.add(0|this.Gh,0|this.Gl,0|p,0|g)),({h:y,l:m}=Ps.add(0|this.Hh,0|this.Hl,0|y,0|m)),this.set(n,r,s,i,o,a,u,c,f,h,d,l,p,g,y,m)}roundClean(){Us.fill(0),Cs.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class Ls extends Ns{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class Zs extends Ns{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class Rs extends Ns{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}const Hs=ms((()=>new Ns));ms((()=>new Ls)),ms((()=>new Zs)),ms((()=>new Rs));const js=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),Ds=Uint8Array.from({length:16},((t,e)=>e)),$s=Ds.map((t=>(9*t+5)%16));let zs=[Ds],Ks=[$s];for(let t=0;t<4;t++)for(let e of[zs,Ks])e.push(e[t].map((t=>js[t])));const Fs=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map((t=>new Uint8Array(t))),qs=zs.map(((t,e)=>t.map((t=>Fs[e][t])))),Vs=Ks.map(((t,e)=>t.map((t=>Fs[e][t])))),Ms=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),Gs=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),Ws=(t,e)=>t<<e|t>>>32-e;function Ys(t,e,n,r){return 0===t?e^n^r:1===t?e&n|~e&r:2===t?(e|~n)^r:3===t?e&r|n&~r:e^(n|~r)}const Js=new Uint32Array(16);class Qs extends ws{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:e,h2:n,h3:r,h4:s}=this;return[t,e,n,r,s]}set(t,e,n,r,s){this.h0=0|t,this.h1=0|e,this.h2=0|n,this.h3=0|r,this.h4=0|s}process(t,e){for(let n=0;n<16;n++,e+=4)Js[n]=t.getUint32(e,!0);let n=0|this.h0,r=n,s=0|this.h1,i=s,o=0|this.h2,a=o,u=0|this.h3,c=u,f=0|this.h4,h=f;for(let t=0;t<5;t++){const e=4-t,d=Ms[t],l=Gs[t],p=zs[t],g=Ks[t],y=qs[t],m=Vs[t];for(let e=0;e<16;e++){const r=Ws(n+Ys(t,s,o,u)+Js[p[e]]+d,y[e])+f|0;n=f,f=u,u=0|Ws(o,10),o=s,s=r}for(let t=0;t<16;t++){const n=Ws(r+Ys(e,i,a,c)+Js[g[t]]+l,m[t])+h|0;r=h,h=c,c=0|Ws(a,10),a=i,i=n}}this.set(this.h1+o+c|0,this.h2+u+h|0,this.h3+f+r|0,this.h4+n+i|0,this.h0+s+a|0)}roundClean(){Js.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const Xs=ms((()=>new Qs));class ti extends ys{constructor(t,e){super(),this.finished=!1,this.destroyed=!1,hs.hash(t);const n=gs(e);if(this.iHash=t.create(),"function"!=typeof this.iHash.update)throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const r=this.blockLen,s=new Uint8Array(r);s.set(n.length>r?t.create().update(n).digest():n);for(let t=0;t<s.length;t++)s[t]^=54;this.iHash.update(s),this.oHash=t.create();for(let t=0;t<s.length;t++)s[t]^=106;this.oHash.update(s),s.fill(0)}update(t){return hs.exists(this),this.iHash.update(t),this}digestInto(t){hs.exists(this),hs.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:e,iHash:n,finished:r,destroyed:s,blockLen:i,outputLen:o}=this;return t.finished=r,t.destroyed=s,t.blockLen=i,t.outputLen=o,t.oHash=e._cloneInto(t.oHash),t.iHash=n._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const ei=(t,e,n)=>new ti(t,e).update(n).digest();function ni(t){const e=Or.bytes(t);return Or.raw(ks(ks(e)))}function ri(t){const e=Or.bytes(t);return Or.raw(Xs(ks(e)))}function si(t){return os.mod(t).buff}function ii(t,e=!1){const n=os.mod(t).point;return e?n.x:n.buff}function oi(t,e){const n=as.from_x(e),r=os.mod(t);return n.mul(r).buff}ei.create=(t,e)=>new ti(t,e);var ai=Object.freeze({__proto__:null,genSecretKey:function(t=32){return si(ts(t))},getPublicKey:ii,getSecretKey:si,getSharedCode:function(t,e,n="ecdh/code"){const r=function(t){const e=Or.str(t).digest;return Or.join([e,e])}(n),s=si(t),i=ii(s),o=Or.bytes(e),a=oi(s,o),u=[i.hex,o.hex];return u.sort(),function(t,e){const n=Or.bytes(t),r=Or.bytes(e);return Or.raw(ei(Hs,n,r))}(a,Or.join([r,...u]))},getSharedKey:oi,is_even_pub:function(t){const e=Or.bytes(t);switch(!0){case 32===e.length:case 33===e.length&&2===e[0]:return!0;case 33===e.length&&3===e[0]:return!1;default:throw new TypeError(`Invalid public key: ${e.hex}`)}},xonly_pub:function(t){const e=Or.bytes(t);switch(e.length){case 32:return e;case 33:return e.slice(1,33);default:throw new Error(`Invalid key length: ${e.length}`)}}});Or.random(32);const ui={secp:an,schnorr:En},ci={...ai,...es};function fi(t){const e=nt.bytes(t);return yt(e,33),ri(e)}function hi(t){return ri(Ut.fmt.toBytes(t,!1))}function di(t){return function(t){const e=Or.bytes(t);return Or.raw(ks(e))}(Ut.fmt.toBytes(t,!1))}function li(t,e="main"){const n="main"===e?["1"]:["m","n"];for(const e of n)if(t.startsWith(e))return!0;return!1}function pi(t,e="main"){const n=nt.bytes(t),r="main"===e?nt.num(0):nt.num(111);return yt(t,20),n.prepend(r).tob58chk()}const gi={check:li,encode:pi,decode:function(t,e="main"){if(!li(t,e))throw new TypeError("Invalid p2pkh address!");return nt.b58chk(t).slice(1)},hash:fi,scriptPubKey:function(t){const e=nt.bytes(t);return yt(e,20),["OP_DUP","OP_HASH160",e.hex,"OP_EQUALVERIFY","OP_CHECKSIG"]},fromPubKey:function(t,e){return pi(fi(t),e)}};function yi(t,e="main"){const n="main"===e?["3"]:["2"];for(const e of n)if(t.startsWith(e))return!0;return!1}function mi(t,e="main"){const n="main"===e?nt.num(5):nt.num(196),r=nt.bytes(t);return yt(r,20),r.prepend(n).tob58chk()}const wi={check:yi,encode:mi,decode:function(t,e="main"){if(!yi(t,e))throw new TypeError(`Invalid p2sh address for network ${e}:`+t);return nt.b58chk(t).slice(1)},hash:hi,scriptPubKey:function(t){return["OP_HASH160",nt.bytes(t).hex,"OP_EQUAL"]},fromScript:function(t,e){return mi(hi(t),e)}},bi={main:"bc",testnet:"tb",signet:"tb",regtest:"bcrt"},vi=["bc1q","tb1q","bcrt1q"];function _i(t){for(const e of vi)if(t.startsWith(e))return!0;return!1}function xi(t,e="main"){const n=bi[e],r=nt.bytes(t);return yt(r,20),r.toBech32(n,0)}const Ei={check:_i,encode:xi,decode:function(t){if(!_i(t))throw new TypeError("Invalid segwit address!");return nt.bech32(t)},hash:fi,scriptPubKey:function(t){const e=nt.bytes(t);return yt(e,20),["OP_0",e.hex]},fromPubKey:function(t,e){return xi(fi(t),e)}},Si=["bc1q","tb1q","bcrt1q"];function ki(t){for(const e of Si)if(t.startsWith(e))return!0;return!1}function Ai(t,e="main"){const n=bi[e],r=nt.bytes(t);return yt(r,32),r.toBech32(n,0)}const Oi={check:ki,encode:Ai,decode:function(t){if(!ki(t))throw new TypeError("Invalid segwit address!");return nt.bech32(t)},hash:di,scriptPubKey:function(t){const e=nt.bytes(t);return yt(e,32),["OP_0",e.hex]},fromScript:function(t,e){return Ai(di(t),e)}};function Ii(t){const e=nt.bytes(t);return e.length>32?e.slice(1,33):e}const Pi=["bc1p","tb1p","bcrt1p"];function Bi(t){for(const e of Pi)if(t.startsWith(e))return!0;return!1}function Ti(t,e="main"){const n=bi[e],r=nt.bytes(t);return yt(r,32),r.toBech32(n,1)}const Ui={check:Bi,encode:Ti,decode:function(t){if(!Bi(t))throw new TypeError("Invalid taproot address!");return nt.bech32(t)},scriptPubKey:function(t){const e=nt.bytes(t);return yt(e,32),["OP_1",e.hex]},fromPubKey:function(t,e){return Ti(Ii(t),e)}},Ci={version:2,vin:[],vout:[],locktime:0},Ni={scriptSig:[],sequence:4294967293,witness:[]},Li={value:0n,scriptPubKey:[]};function Zi(t){const e={...Ci,...t};return e.vin=e.vin.map((t=>({...Ni,...t}))),e.vout=e.vout.map((t=>({...Li,...t}))),e}function Ri(t,e){const{version:n,vin:r,vout:s,locktime:i}=Zi(t),o=!0!==e&&function(t){for(const e of t){const{witness:t}=e;if("string"==typeof t||t instanceof Uint8Array||Array.isArray(t)&&t.length>0)return!0}return!1}(r),a=[Hi(n)];o&&a.push(nt.hex("0001")),a.push(function(t){const e=[nt.varInt(t.length)];for(const n of t){const{txid:t,vout:r,scriptSig:s,sequence:i}=n;e.push(ji(t)),e.push(Di(r)),e.push(At(s,!0)),e.push($i(i))}return nt.join(e)}(r)),a.push(function(t){const e=[nt.varInt(t.length)];for(const n of t)e.push(Ki(n));return nt.join(e)}(s));for(const t of r)o&&a.push(Fi(t.witness));return a.push(Vi(i)),nt.join(a)}function Hi(t){return nt.num(t,4).reverse()}function ji(t){return nt.hex(t,32).reverse()}function Di(t){return nt.num(t,4).reverse()}function $i(t){if("string"==typeof t)return nt.hex(t,4).reverse();if("number"==typeof t)return nt.num(t,4).reverse();throw new Error("Unrecognized format: "+String(t))}function zi(t){if("number"==typeof t){if(t%1!=0)throw new Error("Value must be an integer:"+String(t));return nt.num(t,8).reverse()}return nt.big(t,8).reverse()}function Ki(t){const{value:e,scriptPubKey:n}=t,r=[];return r.push(zi(e)),r.push(At(n,!0)),nt.join(r)}function Fi(t=[]){const e=[];if(Array.isArray(t)){const n=nt.varInt(t.length);e.push(n);for(const n of t)e.push(qi(n));return nt.join(e)}return nt.bytes(t)}function qi(t){return function(t){if(Array.isArray(t))return 0===t.length;if("string"==typeof t&&""===t)return!0;const e=nt.bytes(t);return 1===e.length&&0===e[0]}(t)?new nt(0):At(t,!0)}function Vi(t){if("string"==typeof t)return nt.hex(t,4);if("number"==typeof t)return nt.num(t,4).reverse();throw new Error("Unrecognized format: "+String(t))}function Mi(t){"string"==typeof t&&(t=nt.hex(t).raw);const e=new gt(t),n=function(t){return t.read(4).reverse().toNum()}(e),r=function(t){const[e,n]=[...t.peek(2)];if(0===e){if(t.read(2),1===n)return!0;throw new Error(`Invalid witness flag: ${n}`)}return!1}(e),s=function(t){const e=[],n=t.readSize();for(let r=0;r<n;r++)e.push(Gi(t));return e}(e),i=function(t){const e=[],n=t.readSize();for(let r=0;r<n;r++)e.push(Wi(t));return e}(e);if(r)for(const t of s)t.witness=Yi(e);const o=function(t){return t.read(4).reverse().toNum()}(e);return{version:n,vin:s,vout:i,locktime:o}}function Gi(t){return{txid:t.read(32).reverse().toHex(),vout:t.read(4).reverse().toNum(),scriptSig:Qi(t,!0),sequence:t.read(4).reverse().toHex(),witness:[]}}function Wi(t){return{value:t.read(8).reverse().big,scriptPubKey:Qi(t,!0)}}function Yi(t){const e=[],n=t.readSize();for(let r=0;r<n;r++){const n=Ji(t,!0);e.push(n??"")}return e}function Ji(t,e){const n=!0===e?t.readSize("le"):t.size;return n>0?t.read(n).hex:null}function Qi(t,e){const n=Ji(t,e);return null!==n?n:[]}const Xi={toBytes:function(t){if(St(t))return Mi(t),nt.bytes(t);if("object"==typeof t)return Ri(t);throw new Error("Invalid format: "+String(typeof t))},toJson:function(t){if(St(t))return Mi(t);if("object"==typeof t&&!(t instanceof Uint8Array))return Ri(t),Zi(t);throw new Error("Invalid format: "+String(typeof t))}},to=[["p2pkh",/^76a914(?<hash>\w{40})88ac$/],["p2sh",/^a914(?<hash>\w{40})87$/],["p2w-pkh",/^0014(?<hash>\w{40})$/],["p2w-sh",/^0020(?<hash>\w{64})$/],["p2tr",/^5120(?<hash>\w{64})$/]],eo=[192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,102,126,128,132,150,152,186,188,190];function no(t=[]){const e=[...t],n=function(t){let e=t.at(-1);return Et(e)&&(e=nt.hex(e)),t.length>1&&e instanceof Uint8Array&&80===e[0]?(t.pop(),nt.raw(e)):null}(e),r=function(t){let e=t.at(-1);return Et(e)&&(e=nt.hex(e)),t.length>1&&e instanceof Uint8Array&&e.length>32&&eo.includes(254&e[0])?(t.pop(),nt.raw(e)):null}(e),s=function(t){if(t.length>1){const e=t.at(-1);try{const n=Ut.fmt.toBytes(e);return t.pop(),n}catch(t){return null}}return null}(e),i=function(t){const e=[];for(const n of t)(Et(n)||n instanceof Uint8Array)&&e.push(n);return e}(e);return{annex:n,cblock:r,script:s,params:i}}function ro(t){const e=Ut.fmt.toBytes(t,!1).hex;for(const[t,n]of to){const r=t,{groups:s}=n.exec(e)??{},{hash:i}=s??{};if(Et(i))return{type:r,data:nt.hex(i)}}return{type:"raw",data:nt.hex(e)}}const so={create:Zi,encode:Ri,decode:Mi,fmt:Xi,util:{getTxSize:function(t){const e=Xi.toJson(t),n=Ri(e,!0).length,r=Ri(e,!1).length,s=3*n+r,i=s%4>0?1:0;return{size:r,bsize:n,vsize:Math.floor(s/4)+i,weight:s}},getTxid:function(t){return ni(Ri(Xi.toJson(t),!0)).reverse().hex},readScriptPubKey:ro,readWitness:no}},io=[["1","p2pkh","main",20,"base58"],["3","p2sh","main",20,"base58"],["m","p2pkh","testnet",20,"base58"],["n","p2pkh","testnet",20,"base58"],["2","p2sh","testnet",20,"base58"],["bc1q","p2w-pkh","main",20,"bech32"],["tb1q","p2w-pkh","testnet",20,"bech32"],["bcrt1q","p2w-pkh","regtest",20,"bech32"],["bc1q","p2w-sh","main",32,"bech32"],["tb1q","p2w-sh","testnet",32,"bech32"],["bcrt1q","p2w-sh","regtest",32,"bech32"],["bc1p","p2tr","main",32,"bech32m"],["tb1p","p2tr","testnet",32,"bech32m"],["bcrt1p","p2tr","regtest",32,"bech32m"]];function oo(t,e){switch(e){case"base58":return nt.b58chk(t).slice(1);case"bech32":case"bech32m":return nt.bech32(t);default:throw new Error("Invalid address format: "+e)}}function ao(t){switch(t){case"p2pkh":return gi;case"p2sh":return wi;case"p2w-pkh":return Ei;case"p2w-sh":return Oi;case"p2tr":return Ui;default:throw new Error("Invalid address type: "+t)}}function uo(t){const[e,n,r]=function(t){for(const e of io){const[n,r,s,i,o]=e;if(t.startsWith(n)&&oo(t,o).length===i)return e}throw new Error("Invalid address: "+t)}(t),s=ao(n),i=s.decode(t,r);return{prefix:e,type:n,network:r,data:i,script:s.scriptPubKey(i)}}const co={p2pkh:gi,p2sh:wi,p2wpkh:Ei,p2wsh:Oi,p2tr:Ui,decode:uo,fromScriptPubKey:function(t,e){const{type:n,data:r}=so.util.readScriptPubKey(t);return ao(n).encode(r,e)},toScriptPubKey:function(t){const{script:e}=uo(t);return Ut.fmt.toAsm(e,!1)}},fo=[1,2,3];function ho(t,e,n={}){const{sigflag:r=1}=n,s=128==(128&r),i=r%128;if(!fo.includes(i))throw new Error("Invalid hash type: "+String(r));const o=so.fmt.toJson(t),{version:a,vin:u,vout:c,locktime:f}=o,{txid:h,vout:d,prevout:l,sequence:p}=u[e],{value:g}=l??{};if(void 0===g)throw new Error("Prevout value is empty!");let y=n.script;if(void 0===y&&void 0!==n.pubkey){y=`76a914${ri(n.pubkey).hex}88ac`}if(void 0===y)throw new Error("No pubkey / script has been set!");if(Ut.fmt.toAsm(y).includes("OP_CODESEPARATOR"))throw new Error("This library does not currently support the use of OP_CODESEPARATOR in segwit scripts.");const m=[Hi(a),lo(u,s),po(u,i,s),ji(h),Di(d),Ut.encode(y,!0),zi(g),$i(p),go(c,e,i),Vi(f),nt.num(r,4).reverse()];return ni(nt.join(m))}function lo(t,e){if(!0===e)return nt.num(0,32);const n=[];for(const{txid:e,vout:r}of t)n.push(ji(e)),n.push(Di(r));return ni(nt.join(n))}function po(t,e,n){if(n||1!==e)return nt.num(0,32);const r=[];for(const{sequence:e}of t)r.push($i(e));return ni(nt.join(r))}function go(t,e,n){const r=[];if(1===n){for(const{value:e,scriptPubKey:n}of t)r.push(zi(e)),r.push(Ut.encode(n,!0));return ni(nt.join(r))}if(3===n&&e<t.length){const{value:n,scriptPubKey:s}=t[e];return r.push(zi(n)),r.push(Ut.encode(s,!0)),ni(nt.join(r))}return nt.num(0,32)}const yo={hash:ho,sign:function(t,e,n,r={}){const{sigflag:s=1}=r,i=ho(e,n,r),o=ui.secp.sign(i,t).toDERRawBytes(!0);return nt.join([o,s])},verify:function(t,e,n={}){const r=so.fmt.toJson(t),{throws:s=!1}=n,{witness:i=[]}=r.vin[e],o=so.util.readWitness(i),{script:a,params:u}=o;let c=null;if(u.length<1)return mt("Invalid witness data: "+String(i),s);if(void 0===n.script&&null!==a&&(n.script=a),void 0!==n.pubkey)c=nt.bytes(n.pubkey);else{if(!(u.length>1&&33===u[1].length))return mt("No pubkey provided!",s);c=nt.bytes(u[1])}const f=Ut.fmt.toParam(u[0]),h=f.slice(0,-1),d=f.slice(-1)[0],l=ho(r,e,{...n,sigflag:d});return!!ui.secp.verify(h,l,c)||mt("Invalid signature!",s)}},mo=[0,1,2,3,129,130,131];function wo(t,e,n={}){const{extension:r,sigflag:s=0,extflag:i=0,key_version:o=0,separator_pos:a=4294967295}=n,u=so.fmt.toJson(t),{version:c,vin:f,vout:h,locktime:d}=u;if(e>=f.length)throw new Error("Index out of bounds: "+String(e));if(!mo.includes(s))throw new Error("Invalid hash type: "+String(s));if(i<0||i>127)throw new Error("Extention flag out of range: "+String(i));const{txid:l,vout:p,sequence:g,witness:y=[]}=f[e],m=128==(128&s),w=function(t){if(void 0===t)return;if(t.length<2)return;let e=t.at(-1);"string"==typeof e&&(e=nt.hex(e));if(e instanceof Uint8Array&&80===e[0])return nt.raw(e).prefixSize("be").digest;return}(y),b=2*(i+(void 0!==r?1:0))+(void 0!==w?1:0),v=nt.str("TapSighash").digest,_=[v,v,nt.num(0,1),nt.num(s,1),Hi(c),Vi(d)];if(!m){const t=f.map((t=>bo(t)));_.push(function(t){const e=[];for(const{txid:n,vout:r}of t)e.push(ji(n)),e.push(Di(r));return nt.join(e).digest}(f),function(t){const e=[];for(const{value:n}of t)e.push(zi(n));return nt.join(e).digest}(t),function(t){const e=[];for(const{scriptPubKey:n}of t)e.push(At(n,!0));return nt.join(e).digest}(t),function(t){const e=[];for(const{sequence:n}of t)e.push($i(n));return nt.join(e).digest}(f))}if(((3&s)<2||(3&s)>3)&&_.push(function(t){const e=[];for(const{value:n,scriptPubKey:r}of t)e.push(zi(n)),e.push(Ut.encode(r,!0));return nt.join(e).digest}(h)),_.push(nt.num(b,1)),m){const{value:t,scriptPubKey:n}=bo(f[e]);_.push(ji(l),Di(p),zi(t),Ut.encode(n,!0),$i(g))}else _.push(nt.num(e,4).reverse());return void 0!==w&&_.push(w),3==(3&s)&&_.push(function(t){return nt.join([zi(t.value),Ut.encode(t.scriptPubKey,!0)]).digest}(h[e])),void 0!==r&&_.push(nt.bytes(r),nt.num(o),nt.num(a,4)),nt.join(_).digest}function bo(t){if(void 0===t.prevout)throw new Error("Prevout data missing for input: "+String(t.txid));return t.prevout}const vo=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,_o=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n;const xo=192;function Eo(t){const e=nt.str(t).digest;return nt.join([e,e])}function So(t,e=xo){return nt.join([Eo("TapLeaf"),Oo(e),nt.bytes(t)]).digest.hex}function ko(t,e){return e<t&&([t,e]=[e,t]),nt.join([Eo("TapBranch"),nt.hex(t).raw,nt.hex(e).raw]).digest.hex}function Ao(t,e,n=[]){const r=[],s=[];if(t.length<1)throw new Error("Tree is empty!");for(let s=0;s<t.length;s++){const i=t[s];if(Array.isArray(i)){const[t,s,o]=Ao(i,e);e=s,r.push(t);for(const t of o)n.push(t)}else r.push(i)}if(1===r.length)return[r[0],e,n];r.sort(),r.length%2!=0&&r.push(r[r.length-1]);for(let t=0;t<r.length-1;t+=2){const i=ko(r[t],r[t+1]);s.push(i),"string"==typeof e&&(e===r[t]?(n.push(r[t+1]),e=i):e===r[t+1]&&(n.push(r[t]),e=i))}return Ao(s,e,n)}function Oo(t=192){return 254&t}function Io(t,e=new Uint8Array,n=!1){const r=n?new os(t).point.x.raw:Ii(t);return nt.join([Eo("TapTweak"),r,nt.bytes(e)]).digest}function Po(t,e,n=!1){void 0===e&&(e=new Uint8Array);const r=nt.bytes(t),s=Io(t,e,n);return n?Bo(r,s):To(r,s)}function Bo(t,e){let n=new os(t);return n.point.hasOddY&&(n=n.negate()),nt.raw(n.add(e).raw)}function To(t,e){t=Ii(t);const n=as.from_x(t).add(e);return nt.raw(n.raw)}const Uo=function(){const t=nt.hex("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8");return as.from_x(t.digest).x}(),Co=192;function No(t,e={}){const{isPrivate:n=!1,tree:r=[],version:s=Co}=e,i=n?ci.getPublicKey(t,!0):Ii(t);let{target:o}=e;void 0!==o&&(o=nt.bytes(o).hex);let a,u=[];if(r.length>0){const[e,s,i]=Ao(r,o);u=i,a=Po(t,e,n)}else a=Po(t,void 0!==o?o:void 0,n);const c=n?ci.getPublicKey(a)[0]:a[0],f=[nt.num(s+Ro(c)),i];u.length>0&&u.forEach((t=>f.push(nt.hex(t))));const h=nt.join(f);if(void 0!==o&&!Lo(a,o,h,e))throw new Error("Path checking failed! Unable to generate path.");return[Ii(a).hex,h.hex]}function Lo(t,e,n,r={}){const{isPrivate:s=!1,throws:i=!1}=r,{parity:o,paths:a,intkey:u}=Zo(n),c=s?ci.getPublicKey(t,!0):Ii(t),f=nt.join([o,c]);if(33!==f.length)return mt("Invalid tapkey: "+f.hex,i);let h=nt.bytes(e).hex;for(const t of a)h=ko(h,t);const d=Po(u,h);return nt.raw(d).hex===nt.raw(f).hex}function Zo(t){const e=new gt(nt.bytes(t)),n=e.read(1).num,r=e.read(32),[s,i]=n%2==0?[n,2]:[n-1,3],o=[];for(;e.size>=32;)o.push(e.read(32).hex);if(0!==e.size)throw new Error("Non-empty buffer on control block: "+String(e));return{intkey:r,paths:o,parity:i,version:s}}function Ro(t=2){if(0===t||1===t)return t;if(2===t||"02"===t)return 0;if(3===t||"03"===t)return 1;throw new Error("Invalid parity bit: "+String(t))}const Ho={hash:wo,sign:function(t,e,n,r={}){const{sigflag:s=0}=r,i=function(t,e,n=nt.random(32)){const r=nt.bytes(e),s=new os(t),i=s.point,o=i.hasEvenY?s.big:s.negated.big,a=wt("BIP0340/aux",nt.bytes(n)),u=wt("BIP0340/nonce",o^a.big,i.x.raw,r),c=new os(u),f=c.point,h=f.hasEvenY?c.big:c.negated.big,d=new os(wt("BIP0340/challenge",f.x.raw,i.x.raw,r)),l=new os(h+d.big*o);return nt.join([f.x.raw,l.raw])}(t,wo(e,n,r));return 0===s?nt.raw(i):nt.join([i,s])},verify:function(t,e,n={}){const r=so.fmt.toJson(t),{throws:s=!1}=n,{prevout:i,witness:o=[]}=r.vin[e],a=so.util.readWitness(o),{cblock:u,script:c,params:f}=a;let h;if(f.length<1)return mt("Invalid witness data: "+String(o),s);const{scriptPubKey:d}=i??{};if(void 0===d)return mt("Prevout scriptPubKey is empty!",s);const{type:l,data:p}=so.util.readScriptPubKey(d);if("p2tr"!==l)return mt("Prevout script is not a valid taproot output:"+p.hex,s);if(32!==p.length)return mt("Invalid tapkey length: "+String(p.length),s);if(null!==u&&null!==c){const t=So(c,254&u[0]);if(n.extension=t,!Lo(p,t,u,{throws:s}))return mt("cblock verification failed!",s)}h=void 0!==n.pubkey?nt.bytes(n.pubkey):f.length>1&&32===f[1].length?nt.bytes(f[1]):nt.bytes(p);const g=Ut.fmt.toParam(f[0]),y=new gt(g),m=y.read(64).raw;return 1===y.size&&(n.sigflag=y.read(1).num,0===n.sigflag)?mt("0x00 is not a valid appended sigflag!",s):!!function(t,e,n,r=!1){const s=as.from_x(Ii(n)),i=nt.bytes(e),o=nt.bytes(t).stream;o.size<64&&mt("Signature length is too small: "+String(o.size),r);const a=o.read(32);a.big>vo&&mt("Signature r value greater than field size!",r);const u=o.read(32);u.big>_o&&mt("Signature s value greater than curve order!",r);const c=new os(wt("BIP0340/challenge",a.raw,s.x.raw,i)),f=new os(u).point,h=s.mul(c.big),d=f.sub(h);return d.hasOddY&&mt("Signature R value has odd Y coordinate!",r),0n===d.x.big&&mt("Signature R value is infinite!",r),d.x.big===a.big}(m,wo(r,e,n),h,s)||mt("Invalid signature!",s)}},jo={segwit:yo,taproot:Ho},Do={getTag:Eo,getLeaf:So,getBranch:ko,getRoot:function(t){return nt.hex(Ao(t)[0])}},$o={getPubKey:function(t,e={}){return No(t,{...e,isPrivate:!1})},getSecKey:function(t,e={}){return No(t,{...e,isPrivate:!0})},encodeScript:function(t,e){return So(Ut.fmt.toBytes(t),e)},checkPath:Lo,tree:Do,tweak:{getPubKey:function(t,e){return Po(t,e)},getSecKey:function(t,e){return Po(t,e,!0)},getTweak:Io,tweakSecKey:Bo,tweakPubKey:To},util:{readCtrlBlock:Zo,readParityBit:Ro},SCRIPT_PUBKEY:Uo};class zo{constructor(t){this._buff=nt.raw(At(t))}get raw(){return this._buff.raw}get hex(){return this._buff.hex}get asm(){return Bt(this._buff)}getHash(t,e){switch(t){case"p2w":return ni(this._buff).hex;case"p2sh":return ri(this._buff).hex;case"p2tr":return Do.getLeaf(this._buff,e);default:throw new Error("Unrecognized format: "+t)}}toJSON(){return this.asm??[]}}const Ko=4294967295,Fo=512;class qo{constructor(t){this.value="string"==typeof t?parseInt(t,16):t}get isReplaceable(){return this.value<Ko}get isLocked(){return!(this.value!==Ko||0!=(-2147483648&this.value))}get isTimelock(){return 0!=(4194304&this.value)}get timestamp(){return this.isLocked?this.isTimelock?this.value*Fo:this.value*Fo*600:0}set timestamp(t){this.value=Math.ceil(t/Fo)}get blockheight(){return this.isLocked?this.isTimelock?Math.ceil(this.value*Fo/600):this.value:0}set blockheight(t){this.value=t}get estDate(){return this.isTimelock?new Date(Date.now()+this.value*Fo*1e3):new Date(Date.now()+600*this.value*1e3)}set estDate(t){const e=t.getTime()-Date.now();this.value=e>512e3?Math.ceil(e/1e3/Fo):1}toJSON(){return this.value}}let Vo=class{constructor(t){this.value=BigInt(t.value),this.scriptPubKey=new zo(t.scriptPubKey)}get type(){const{type:t}=ro(this.scriptPubKey.raw);return t}};class Mo{constructor(t,e){this._data=t,this._meta=no(t),this.format=e}get length(){return this._data.length}get annex(){const t=this._meta.annex;return null!==t?nt.raw(t).hex:void 0}get cblock(){const t=this._meta.cblock;return null!==t?nt.raw(t).hex:void 0}get script(){const t=this._meta.script;return null!==t?Ut.decode(t):void 0}get params(){return this._meta.params}toJSON(){return this._data}}let Go=class{constructor(t,e){this._tx=t,this.idx=e}get data(){return this._tx.vin[this.idx]}get txid(){return this.data.txid}get vout(){return this.data.vout}get prevout(){return void 0!==this.data.prevout?new Vo(this.data.prevout):void 0}get scriptSig(){return new zo(this.data.scriptSig)}get sequence(){return new qo(this.data.sequence)}get witness(){return new Mo(this.data.witness)}get type(){if(void 0!==this.prevout){const t=this.prevout.scriptPubKey.raw,{type:e}=ro(t);if("p2sh"===e){const t=this.scriptSig.asm;if("OP_0"===t[0]){if(20===t[1].length)return"p2w-p2pkh";if(32===t[1].length)return"p2w-p2sh"}return"p2sh"}return e}return"raw"}sign(t,e){if(this.type.startsWith("p2w"))return jo.segwit.sign(t,this._tx,this.idx,e);if(this.type.startsWith("p2tr"))return jo.taproot.sign(t,this._tx,this.idx,e);if(this.type.startsWith("p2pkh")||this.type.startsWith("p2sh"))throw new Error("This library does not support signing legacy transactions.");throw new Error("Unable to sign this input type:"+String(this.type))}};class Wo{constructor(t=0){this.value=nt.bytes(t).num}get isTimelock(){return this.value>5e8}get timestamp(){return this.isTimelock?this.value:600*this.value}set timestamp(t){this.value=t}get blockheight(){return this.isTimelock?Math.floor(this.value/600):this.value}set blockheight(t){this.value=t}get estDate(){return this.isTimelock?new Date(Date.now()+1e3*this.value):new Date(Date.now()+600*this.value*1e3)}set estDate(t){this.value=Math.floor((t.getTime()-Date.now())/1e3)}toJSON(){return this.value}}var Yo,Jo;!function(t){t.assertEqual=t=>t,t.assertIs=function(t){},t.assertNever=function(t){throw new Error},t.arrayToEnum=t=>{const e={};for(const n of t)e[n]=n;return e},t.getValidEnumValues=e=>{const n=t.objectKeys(e).filter((t=>"number"!=typeof e[e[t]])),r={};for(const t of n)r[t]=e[t];return t.objectValues(r)},t.objectValues=e=>t.objectKeys(e).map((function(t){return e[t]})),t.objectKeys="function"==typeof Object.keys?t=>Object.keys(t):t=>{const e=[];for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e},t.find=(t,e)=>{for(const n of t)if(e(n))return n},t.isInteger="function"==typeof Number.isInteger?t=>Number.isInteger(t):t=>"number"==typeof t&&isFinite(t)&&Math.floor(t)===t,t.joinValues=function(t,e=" | "){return t.map((t=>"string"==typeof t?`'${t}'`:t)).join(e)},t.jsonStringifyReplacer=(t,e)=>"bigint"==typeof e?e.toString():e}(Yo||(Yo={})),function(t){t.mergeShapes=(t,e)=>({...t,...e})}(Jo||(Jo={}));const Qo=Yo.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Xo=t=>{switch(typeof t){case"undefined":return Qo.undefined;case"string":return Qo.string;case"number":return isNaN(t)?Qo.nan:Qo.number;case"boolean":return Qo.boolean;case"function":return Qo.function;case"bigint":return Qo.bigint;case"symbol":return Qo.symbol;case"object":return Array.isArray(t)?Qo.array:null===t?Qo.null:t.then&&"function"==typeof t.then&&t.catch&&"function"==typeof t.catch?Qo.promise:"undefined"!=typeof Map&&t instanceof Map?Qo.map:"undefined"!=typeof Set&&t instanceof Set?Qo.set:"undefined"!=typeof Date&&t instanceof Date?Qo.date:Qo.object;default:return Qo.unknown}},ta=Yo.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class ea extends Error{constructor(t){super(),this.issues=[],this.addIssue=t=>{this.issues=[...this.issues,t]},this.addIssues=(t=[])=>{this.issues=[...this.issues,...t]};const e=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,e):this.__proto__=e,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const e=t||function(t){return t.message},n={_errors:[]},r=t=>{for(const s of t.issues)if("invalid_union"===s.code)s.unionErrors.map(r);else if("invalid_return_type"===s.code)r(s.returnTypeError);else if("invalid_arguments"===s.code)r(s.argumentsError);else if(0===s.path.length)n._errors.push(e(s));else{let t=n,r=0;for(;r<s.path.length;){const n=s.path[r];r===s.path.length-1?(t[n]=t[n]||{_errors:[]},t[n]._errors.push(e(s))):t[n]=t[n]||{_errors:[]},t=t[n],r++}}};return r(this),n}toString(){return this.message}get message(){return JSON.stringify(this.issues,Yo.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(t=(t=>t.message)){const e={},n=[];for(const r of this.issues)r.path.length>0?(e[r.path[0]]=e[r.path[0]]||[],e[r.path[0]].push(t(r))):n.push(t(r));return{formErrors:n,fieldErrors:e}}get formErrors(){return this.flatten()}}ea.create=t=>new ea(t);const na=(t,e)=>{let n;switch(t.code){case ta.invalid_type:n=t.received===Qo.undefined?"Required":`Expected ${t.expected}, received ${t.received}`;break;case ta.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Yo.jsonStringifyReplacer)}`;break;case ta.unrecognized_keys:n=`Unrecognized key(s) in object: ${Yo.joinValues(t.keys,", ")}`;break;case ta.invalid_union:n="Invalid input";break;case ta.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Yo.joinValues(t.options)}`;break;case ta.invalid_enum_value:n=`Invalid enum value. Expected ${Yo.joinValues(t.options)}, received '${t.received}'`;break;case ta.invalid_arguments:n="Invalid function arguments";break;case ta.invalid_return_type:n="Invalid function return type";break;case ta.invalid_date:n="Invalid date";break;case ta.invalid_string:"object"==typeof t.validation?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,"number"==typeof t.validation.position&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Yo.assertNever(t.validation):n="regex"!==t.validation?`Invalid ${t.validation}`:"Invalid";break;case ta.too_small:n="array"===t.type?`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:"string"===t.type?`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:"number"===t.type?`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:"date"===t.type?`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:"Invalid input";break;case ta.too_big:n="array"===t.type?`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:"string"===t.type?`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:"number"===t.type?`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:"bigint"===t.type?`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:"date"===t.type?`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:"Invalid input";break;case ta.custom:n="Invalid input";break;case ta.invalid_intersection_types:n="Intersection results could not be merged";break;case ta.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case ta.not_finite:n="Number must be finite";break;default:n=e.defaultError,Yo.assertNever(t)}return{message:n}};let ra=na;function sa(){return ra}const ia=t=>{const{data:e,path:n,errorMaps:r,issueData:s}=t,i=[...n,...s.path||[]],o={...s,path:i};let a="";const u=r.filter((t=>!!t)).slice().reverse();for(const t of u)a=t(o,{data:e,defaultError:a}).message;return{...s,path:i,message:s.message||a}};function oa(t,e){const n=ia({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,sa(),na].filter((t=>!!t))});t.common.issues.push(n)}class aa{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(t,e){const n=[];for(const r of e){if("aborted"===r.status)return ua;"dirty"===r.status&&t.dirty(),n.push(r.value)}return{status:t.value,value:n}}static async mergeObjectAsync(t,e){const n=[];for(const t of e)n.push({key:await t.key,value:await t.value});return aa.mergeObjectSync(t,n)}static mergeObjectSync(t,e){const n={};for(const r of e){const{key:e,value:s}=r;if("aborted"===e.status)return ua;if("aborted"===s.status)return ua;"dirty"===e.status&&t.dirty(),"dirty"===s.status&&t.dirty(),(void 0!==s.value||r.alwaysSet)&&(n[e.value]=s.value)}return{status:t.value,value:n}}}const ua=Object.freeze({status:"aborted"}),ca=t=>({status:"dirty",value:t}),fa=t=>({status:"valid",value:t}),ha=t=>"aborted"===t.status,da=t=>"dirty"===t.status,la=t=>"valid"===t.status,pa=t=>"undefined"!=typeof Promise&&t instanceof Promise;var ga;!function(t){t.errToObj=t=>"string"==typeof t?{message:t}:t||{},t.toString=t=>"string"==typeof t?t:null==t?void 0:t.message}(ga||(ga={}));class ya{constructor(t,e,n,r){this._cachedPath=[],this.parent=t,this.data=e,this._path=n,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const ma=(t,e)=>{if(la(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const e=new ea(t.common.issues);return this._error=e,this._error}}};function wa(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:r,description:s}=t;if(e&&(n||r))throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');if(e)return{errorMap:e,description:s};return{errorMap:(t,e)=>"invalid_type"!==t.code?{message:e.defaultError}:void 0===e.data?{message:null!=r?r:e.defaultError}:{message:null!=n?n:e.defaultError},description:s}}class ba{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return Xo(t.data)}_getOrReturnCtx(t,e){return e||{common:t.parent.common,data:t.data,parsedType:Xo(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new aa,ctx:{common:t.parent.common,data:t.data,parsedType:Xo(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const e=this._parse(t);if(pa(e))throw new Error("Synchronous parse encountered promise.");return e}_parseAsync(t){const e=this._parse(t);return Promise.resolve(e)}parse(t,e){const n=this.safeParse(t,e);if(n.success)return n.data;throw n.error}safeParse(t,e){var n;const r={common:{issues:[],async:null!==(n=null==e?void 0:e.async)&&void 0!==n&&n,contextualErrorMap:null==e?void 0:e.errorMap},path:(null==e?void 0:e.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Xo(t)},s=this._parseSync({data:t,path:r.path,parent:r});return ma(r,s)}async parseAsync(t,e){const n=await this.safeParseAsync(t,e);if(n.success)return n.data;throw n.error}async safeParseAsync(t,e){const n={common:{issues:[],contextualErrorMap:null==e?void 0:e.errorMap,async:!0},path:(null==e?void 0:e.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Xo(t)},r=this._parse({data:t,path:n.path,parent:n}),s=await(pa(r)?r:Promise.resolve(r));return ma(n,s)}refine(t,e){const n=t=>"string"==typeof e||void 0===e?{message:e}:"function"==typeof e?e(t):e;return this._refinement(((e,r)=>{const s=t(e),i=()=>r.addIssue({code:ta.custom,...n(e)});return"undefined"!=typeof Promise&&s instanceof Promise?s.then((t=>!!t||(i(),!1))):!!s||(i(),!1)}))}refinement(t,e){return this._refinement(((n,r)=>!!t(n)||(r.addIssue("function"==typeof e?e(n,r):e),!1)))}_refinement(t){return new ou({schema:this,typeName:mu.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return au.create(this,this._def)}nullable(){return uu.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return $a.create(this,this._def)}promise(){return iu.create(this,this._def)}or(t){return Fa.create([this,t],this._def)}and(t){return Ga.create(this,t,this._def)}transform(t){return new ou({...wa(this._def),schema:this,typeName:mu.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const e="function"==typeof t?t:()=>t;return new cu({...wa(this._def),innerType:this,defaultValue:e,typeName:mu.ZodDefault})}brand(){return new lu({typeName:mu.ZodBranded,type:this,...wa(this._def)})}catch(t){const e="function"==typeof t?t:()=>t;return new fu({...wa(this._def),innerType:this,catchValue:e,typeName:mu.ZodCatch})}describe(t){return new(0,this.constructor)({...this._def,description:t})}pipe(t){return pu.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const va=/^c[^\s-]{8,}$/i,_a=/^[a-z][a-z0-9]*$/,xa=/[0-9A-HJKMNP-TV-Z]{26}/,Ea=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,Sa=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,ka=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,Aa=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,Oa=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;class Ia extends ba{constructor(){super(...arguments),this._regex=(t,e,n)=>this.refinement((e=>t.test(e)),{validation:e,code:ta.invalid_string,...ga.errToObj(n)}),this.nonempty=t=>this.min(1,ga.errToObj(t)),this.trim=()=>new Ia({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Ia({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Ia({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){this._def.coerce&&(t.data=String(t.data));if(this._getType(t)!==Qo.string){const e=this._getOrReturnCtx(t);return oa(e,{code:ta.invalid_type,expected:Qo.string,received:e.parsedType}),ua}const e=new aa;let n;for(const o of this._def.checks)if("min"===o.kind)t.data.length<o.value&&(n=this._getOrReturnCtx(t,n),oa(n,{code:ta.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),e.dirty());else if("max"===o.kind)t.data.length>o.value&&(n=this._getOrReturnCtx(t,n),oa(n,{code:ta.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),e.dirty());else if("length"===o.kind){const r=t.data.length>o.value,s=t.data.length<o.value;(r||s)&&(n=this._getOrReturnCtx(t,n),r?oa(n,{code:ta.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}):s&&oa(n,{code:ta.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}),e.dirty())}else if("email"===o.kind)Sa.test(t.data)||(n=this._getOrReturnCtx(t,n),oa(n,{validation:"email",code:ta.invalid_string,message:o.message}),e.dirty());else if("emoji"===o.kind)ka.test(t.data)||(n=this._getOrReturnCtx(t,n),oa(n,{validation:"emoji",code:ta.invalid_string,message:o.message}),e.dirty());else if("uuid"===o.kind)Ea.test(t.data)||(n=this._getOrReturnCtx(t,n),oa(n,{validation:"uuid",code:ta.invalid_string,message:o.message}),e.dirty());else if("cuid"===o.kind)va.test(t.data)||(n=this._getOrReturnCtx(t,n),oa(n,{validation:"cuid",code:ta.invalid_string,message:o.message}),e.dirty());else if("cuid2"===o.kind)_a.test(t.data)||(n=this._getOrReturnCtx(t,n),oa(n,{validation:"cuid2",code:ta.invalid_string,message:o.message}),e.dirty());else if("ulid"===o.kind)xa.test(t.data)||(n=this._getOrReturnCtx(t,n),oa(n,{validation:"ulid",code:ta.invalid_string,message:o.message}),e.dirty());else if("url"===o.kind)try{new URL(t.data)}catch(r){n=this._getOrReturnCtx(t,n),oa(n,{validation:"url",code:ta.invalid_string,message:o.message}),e.dirty()}else if("regex"===o.kind){o.regex.lastIndex=0;o.regex.test(t.data)||(n=this._getOrReturnCtx(t,n),oa(n,{validation:"regex",code:ta.invalid_string,message:o.message}),e.dirty())}else if("trim"===o.kind)t.data=t.data.trim();else if("includes"===o.kind)t.data.includes(o.value,o.position)||(n=this._getOrReturnCtx(t,n),oa(n,{code:ta.invalid_string,validation:{includes:o.value,position:o.position},message:o.message}),e.dirty());else if("toLowerCase"===o.kind)t.data=t.data.toLowerCase();else if("toUpperCase"===o.kind)t.data=t.data.toUpperCase();else if("startsWith"===o.kind)t.data.startsWith(o.value)||(n=this._getOrReturnCtx(t,n),oa(n,{code:ta.invalid_string,validation:{startsWith:o.value},message:o.message}),e.dirty());else if("endsWith"===o.kind)t.data.endsWith(o.value)||(n=this._getOrReturnCtx(t,n),oa(n,{code:ta.invalid_string,validation:{endsWith:o.value},message:o.message}),e.dirty());else if("datetime"===o.kind){((i=o).precision?i.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i.precision}}Z$`):0===i.precision?i.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):i.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(t.data)||(n=this._getOrReturnCtx(t,n),oa(n,{code:ta.invalid_string,validation:"datetime",message:o.message}),e.dirty())}else"ip"===o.kind?(r=t.data,("v4"!==(s=o.version)&&s||!Aa.test(r))&&("v6"!==s&&s||!Oa.test(r))&&(n=this._getOrReturnCtx(t,n),oa(n,{validation:"ip",code:ta.invalid_string,message:o.message}),e.dirty())):Yo.assertNever(o);var r,s,i;return{status:e.value,value:t.data}}_addCheck(t){return new Ia({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...ga.errToObj(t)})}url(t){return this._addCheck({kind:"url",...ga.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...ga.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...ga.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...ga.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...ga.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...ga.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...ga.errToObj(t)})}datetime(t){var e;return"string"==typeof t?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:void 0===(null==t?void 0:t.precision)?null:null==t?void 0:t.precision,offset:null!==(e=null==t?void 0:t.offset)&&void 0!==e&&e,...ga.errToObj(null==t?void 0:t.message)})}regex(t,e){return this._addCheck({kind:"regex",regex:t,...ga.errToObj(e)})}includes(t,e){return this._addCheck({kind:"includes",value:t,position:null==e?void 0:e.position,...ga.errToObj(null==e?void 0:e.message)})}startsWith(t,e){return this._addCheck({kind:"startsWith",value:t,...ga.errToObj(e)})}endsWith(t,e){return this._addCheck({kind:"endsWith",value:t,...ga.errToObj(e)})}min(t,e){return this._addCheck({kind:"min",value:t,...ga.errToObj(e)})}max(t,e){return this._addCheck({kind:"max",value:t,...ga.errToObj(e)})}length(t,e){return this._addCheck({kind:"length",value:t,...ga.errToObj(e)})}get isDatetime(){return!!this._def.checks.find((t=>"datetime"===t.kind))}get isEmail(){return!!this._def.checks.find((t=>"email"===t.kind))}get isURL(){return!!this._def.checks.find((t=>"url"===t.kind))}get isEmoji(){return!!this._def.checks.find((t=>"emoji"===t.kind))}get isUUID(){return!!this._def.checks.find((t=>"uuid"===t.kind))}get isCUID(){return!!this._def.checks.find((t=>"cuid"===t.kind))}get isCUID2(){return!!this._def.checks.find((t=>"cuid2"===t.kind))}get isULID(){return!!this._def.checks.find((t=>"ulid"===t.kind))}get isIP(){return!!this._def.checks.find((t=>"ip"===t.kind))}get minLength(){let t=null;for(const e of this._def.checks)"min"===e.kind&&(null===t||e.value>t)&&(t=e.value);return t}get maxLength(){let t=null;for(const e of this._def.checks)"max"===e.kind&&(null===t||e.value<t)&&(t=e.value);return t}}function Pa(t,e){const n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,s=n>r?n:r;return parseInt(t.toFixed(s).replace(".",""))%parseInt(e.toFixed(s).replace(".",""))/Math.pow(10,s)}Ia.create=t=>{var e;return new Ia({checks:[],typeName:mu.ZodString,coerce:null!==(e=null==t?void 0:t.coerce)&&void 0!==e&&e,...wa(t)})};class Ba extends ba{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){this._def.coerce&&(t.data=Number(t.data));if(this._getType(t)!==Qo.number){const e=this._getOrReturnCtx(t);return oa(e,{code:ta.invalid_type,expected:Qo.number,received:e.parsedType}),ua}let e;const n=new aa;for(const r of this._def.checks)if("int"===r.kind)Yo.isInteger(t.data)||(e=this._getOrReturnCtx(t,e),oa(e,{code:ta.invalid_type,expected:"integer",received:"float",message:r.message}),n.dirty());else if("min"===r.kind){(r.inclusive?t.data<r.value:t.data<=r.value)&&(e=this._getOrReturnCtx(t,e),oa(e,{code:ta.too_small,minimum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty())}else if("max"===r.kind){(r.inclusive?t.data>r.value:t.data>=r.value)&&(e=this._getOrReturnCtx(t,e),oa(e,{code:ta.too_big,maximum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty())}else"multipleOf"===r.kind?0!==Pa(t.data,r.value)&&(e=this._getOrReturnCtx(t,e),oa(e,{code:ta.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):"finite"===r.kind?Number.isFinite(t.data)||(e=this._getOrReturnCtx(t,e),oa(e,{code:ta.not_finite,message:r.message}),n.dirty()):Yo.assertNever(r);return{status:n.value,value:t.data}}gte(t,e){return this.setLimit("min",t,!0,ga.toString(e))}gt(t,e){return this.setLimit("min",t,!1,ga.toString(e))}lte(t,e){return this.setLimit("max",t,!0,ga.toString(e))}lt(t,e){return this.setLimit("max",t,!1,ga.toString(e))}setLimit(t,e,n,r){return new Ba({...this._def,checks:[...this._def.checks,{kind:t,value:e,inclusive:n,message:ga.toString(r)}]})}_addCheck(t){return new Ba({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:ga.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ga.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ga.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ga.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ga.toString(t)})}multipleOf(t,e){return this._addCheck({kind:"multipleOf",value:t,message:ga.toString(e)})}finite(t){return this._addCheck({kind:"finite",message:ga.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:ga.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:ga.toString(t)})}get minValue(){let t=null;for(const e of this._def.checks)"min"===e.kind&&(null===t||e.value>t)&&(t=e.value);return t}get maxValue(){let t=null;for(const e of this._def.checks)"max"===e.kind&&(null===t||e.value<t)&&(t=e.value);return t}get isInt(){return!!this._def.checks.find((t=>"int"===t.kind||"multipleOf"===t.kind&&Yo.isInteger(t.value)))}get isFinite(){let t=null,e=null;for(const n of this._def.checks){if("finite"===n.kind||"int"===n.kind||"multipleOf"===n.kind)return!0;"min"===n.kind?(null===e||n.value>e)&&(e=n.value):"max"===n.kind&&(null===t||n.value<t)&&(t=n.value)}return Number.isFinite(e)&&Number.isFinite(t)}}Ba.create=t=>new Ba({checks:[],typeName:mu.ZodNumber,coerce:(null==t?void 0:t.coerce)||!1,...wa(t)});class Ta extends ba{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){this._def.coerce&&(t.data=BigInt(t.data));if(this._getType(t)!==Qo.bigint){const e=this._getOrReturnCtx(t);return oa(e,{code:ta.invalid_type,expected:Qo.bigint,received:e.parsedType}),ua}let e;const n=new aa;for(const r of this._def.checks)if("min"===r.kind){(r.inclusive?t.data<r.value:t.data<=r.value)&&(e=this._getOrReturnCtx(t,e),oa(e,{code:ta.too_small,type:"bigint",minimum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty())}else if("max"===r.kind){(r.inclusive?t.data>r.value:t.data>=r.value)&&(e=this._getOrReturnCtx(t,e),oa(e,{code:ta.too_big,type:"bigint",maximum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty())}else"multipleOf"===r.kind?t.data%r.value!==BigInt(0)&&(e=this._getOrReturnCtx(t,e),oa(e,{code:ta.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):Yo.assertNever(r);return{status:n.value,value:t.data}}gte(t,e){return this.setLimit("min",t,!0,ga.toString(e))}gt(t,e){return this.setLimit("min",t,!1,ga.toString(e))}lte(t,e){return this.setLimit("max",t,!0,ga.toString(e))}lt(t,e){return this.setLimit("max",t,!1,ga.toString(e))}setLimit(t,e,n,r){return new Ta({...this._def,checks:[...this._def.checks,{kind:t,value:e,inclusive:n,message:ga.toString(r)}]})}_addCheck(t){return new Ta({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:ga.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:ga.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:ga.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:ga.toString(t)})}multipleOf(t,e){return this._addCheck({kind:"multipleOf",value:t,message:ga.toString(e)})}get minValue(){let t=null;for(const e of this._def.checks)"min"===e.kind&&(null===t||e.value>t)&&(t=e.value);return t}get maxValue(){let t=null;for(const e of this._def.checks)"max"===e.kind&&(null===t||e.value<t)&&(t=e.value);return t}}Ta.create=t=>{var e;return new Ta({checks:[],typeName:mu.ZodBigInt,coerce:null!==(e=null==t?void 0:t.coerce)&&void 0!==e&&e,...wa(t)})};class Ua extends ba{_parse(t){this._def.coerce&&(t.data=Boolean(t.data));if(this._getType(t)!==Qo.boolean){const e=this._getOrReturnCtx(t);return oa(e,{code:ta.invalid_type,expected:Qo.boolean,received:e.parsedType}),ua}return fa(t.data)}}Ua.create=t=>new Ua({typeName:mu.ZodBoolean,coerce:(null==t?void 0:t.coerce)||!1,...wa(t)});class Ca extends ba{_parse(t){this._def.coerce&&(t.data=new Date(t.data));if(this._getType(t)!==Qo.date){const e=this._getOrReturnCtx(t);return oa(e,{code:ta.invalid_type,expected:Qo.date,received:e.parsedType}),ua}if(isNaN(t.data.getTime())){return oa(this._getOrReturnCtx(t),{code:ta.invalid_date}),ua}const e=new aa;let n;for(const r of this._def.checks)"min"===r.kind?t.data.getTime()<r.value&&(n=this._getOrReturnCtx(t,n),oa(n,{code:ta.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:"date"}),e.dirty()):"max"===r.kind?t.data.getTime()>r.value&&(n=this._getOrReturnCtx(t,n),oa(n,{code:ta.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:"date"}),e.dirty()):Yo.assertNever(r);return{status:e.value,value:new Date(t.data.getTime())}}_addCheck(t){return new Ca({...this._def,checks:[...this._def.checks,t]})}min(t,e){return this._addCheck({kind:"min",value:t.getTime(),message:ga.toString(e)})}max(t,e){return this._addCheck({kind:"max",value:t.getTime(),message:ga.toString(e)})}get minDate(){let t=null;for(const e of this._def.checks)"min"===e.kind&&(null===t||e.value>t)&&(t=e.value);return null!=t?new Date(t):null}get maxDate(){let t=null;for(const e of this._def.checks)"max"===e.kind&&(null===t||e.value<t)&&(t=e.value);return null!=t?new Date(t):null}}Ca.create=t=>new Ca({checks:[],coerce:(null==t?void 0:t.coerce)||!1,typeName:mu.ZodDate,...wa(t)});class Na extends ba{_parse(t){if(this._getType(t)!==Qo.symbol){const e=this._getOrReturnCtx(t);return oa(e,{code:ta.invalid_type,expected:Qo.symbol,received:e.parsedType}),ua}return fa(t.data)}}Na.create=t=>new Na({typeName:mu.ZodSymbol,...wa(t)});class La extends ba{_parse(t){if(this._getType(t)!==Qo.undefined){const e=this._getOrReturnCtx(t);return oa(e,{code:ta.invalid_type,expected:Qo.undefined,received:e.parsedType}),ua}return fa(t.data)}}La.create=t=>new La({typeName:mu.ZodUndefined,...wa(t)});class Za extends ba{_parse(t){if(this._getType(t)!==Qo.null){const e=this._getOrReturnCtx(t);return oa(e,{code:ta.invalid_type,expected:Qo.null,received:e.parsedType}),ua}return fa(t.data)}}Za.create=t=>new Za({typeName:mu.ZodNull,...wa(t)});class Ra extends ba{constructor(){super(...arguments),this._any=!0}_parse(t){return fa(t.data)}}Ra.create=t=>new Ra({typeName:mu.ZodAny,...wa(t)});class Ha extends ba{constructor(){super(...arguments),this._unknown=!0}_parse(t){return fa(t.data)}}Ha.create=t=>new Ha({typeName:mu.ZodUnknown,...wa(t)});class ja extends ba{_parse(t){const e=this._getOrReturnCtx(t);return oa(e,{code:ta.invalid_type,expected:Qo.never,received:e.parsedType}),ua}}ja.create=t=>new ja({typeName:mu.ZodNever,...wa(t)});class Da extends ba{_parse(t){if(this._getType(t)!==Qo.undefined){const e=this._getOrReturnCtx(t);return oa(e,{code:ta.invalid_type,expected:Qo.void,received:e.parsedType}),ua}return fa(t.data)}}Da.create=t=>new Da({typeName:mu.ZodVoid,...wa(t)});class $a extends ba{_parse(t){const{ctx:e,status:n}=this._processInputParams(t),r=this._def;if(e.parsedType!==Qo.array)return oa(e,{code:ta.invalid_type,expected:Qo.array,received:e.parsedType}),ua;if(null!==r.exactLength){const t=e.data.length>r.exactLength.value,s=e.data.length<r.exactLength.value;(t||s)&&(oa(e,{code:t?ta.too_big:ta.too_small,minimum:s?r.exactLength.value:void 0,maximum:t?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),n.dirty())}if(null!==r.minLength&&e.data.length<r.minLength.value&&(oa(e,{code:ta.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),n.dirty()),null!==r.maxLength&&e.data.length>r.maxLength.value&&(oa(e,{code:ta.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),n.dirty()),e.common.async)return Promise.all([...e.data].map(((t,n)=>r.type._parseAsync(new ya(e,t,e.path,n))))).then((t=>aa.mergeArray(n,t)));const s=[...e.data].map(((t,n)=>r.type._parseSync(new ya(e,t,e.path,n))));return aa.mergeArray(n,s)}get element(){return this._def.type}min(t,e){return new $a({...this._def,minLength:{value:t,message:ga.toString(e)}})}max(t,e){return new $a({...this._def,maxLength:{value:t,message:ga.toString(e)}})}length(t,e){return new $a({...this._def,exactLength:{value:t,message:ga.toString(e)}})}nonempty(t){return this.min(1,t)}}function za(t){if(t instanceof Ka){const e={};for(const n in t.shape){const r=t.shape[n];e[n]=au.create(za(r))}return new Ka({...t._def,shape:()=>e})}return t instanceof $a?new $a({...t._def,type:za(t.element)}):t instanceof au?au.create(za(t.unwrap())):t instanceof uu?uu.create(za(t.unwrap())):t instanceof Wa?Wa.create(t.items.map((t=>za(t)))):t}$a.create=(t,e)=>new $a({type:t,minLength:null,maxLength:null,exactLength:null,typeName:mu.ZodArray,...wa(e)});class Ka extends ba{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;const t=this._def.shape(),e=Yo.objectKeys(t);return this._cached={shape:t,keys:e}}_parse(t){if(this._getType(t)!==Qo.object){const e=this._getOrReturnCtx(t);return oa(e,{code:ta.invalid_type,expected:Qo.object,received:e.parsedType}),ua}const{status:e,ctx:n}=this._processInputParams(t),{shape:r,keys:s}=this._getCached(),i=[];if(!(this._def.catchall instanceof ja&&"strip"===this._def.unknownKeys))for(const t in n.data)s.includes(t)||i.push(t);const o=[];for(const t of s){const e=r[t],s=n.data[t];o.push({key:{status:"valid",value:t},value:e._parse(new ya(n,s,n.path,t)),alwaysSet:t in n.data})}if(this._def.catchall instanceof ja){const t=this._def.unknownKeys;if("passthrough"===t)for(const t of i)o.push({key:{status:"valid",value:t},value:{status:"valid",value:n.data[t]}});else if("strict"===t)i.length>0&&(oa(n,{code:ta.unrecognized_keys,keys:i}),e.dirty());else if("strip"!==t)throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const t=this._def.catchall;for(const e of i){const r=n.data[e];o.push({key:{status:"valid",value:e},value:t._parse(new ya(n,r,n.path,e)),alwaysSet:e in n.data})}}return n.common.async?Promise.resolve().then((async()=>{const t=[];for(const e of o){const n=await e.key;t.push({key:n,value:await e.value,alwaysSet:e.alwaysSet})}return t})).then((t=>aa.mergeObjectSync(e,t))):aa.mergeObjectSync(e,o)}get shape(){return this._def.shape()}strict(t){return new Ka({...this._def,unknownKeys:"strict",...void 0!==t?{errorMap:(e,n)=>{var r,s,i,o;const a=null!==(i=null===(s=(r=this._def).errorMap)||void 0===s?void 0:s.call(r,e,n).message)&&void 0!==i?i:n.defaultError;return"unrecognized_keys"===e.code?{message:null!==(o=ga.errToObj(t).message)&&void 0!==o?o:a}:{message:a}}}:{}})}strip(){return new Ka({...this._def,unknownKeys:"strip"})}passthrough(){return new Ka({...this._def,unknownKeys:"passthrough"})}extend(t){return new Ka({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new Ka({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:mu.ZodObject})}setKey(t,e){return this.augment({[t]:e})}catchall(t){return new Ka({...this._def,catchall:t})}pick(t){const e={};return Yo.objectKeys(t).forEach((n=>{t[n]&&this.shape[n]&&(e[n]=this.shape[n])})),new Ka({...this._def,shape:()=>e})}omit(t){const e={};return Yo.objectKeys(this.shape).forEach((n=>{t[n]||(e[n]=this.shape[n])})),new Ka({...this._def,shape:()=>e})}deepPartial(){return za(this)}partial(t){const e={};return Yo.objectKeys(this.shape).forEach((n=>{const r=this.shape[n];t&&!t[n]?e[n]=r:e[n]=r.optional()})),new Ka({...this._def,shape:()=>e})}required(t){const e={};return Yo.objectKeys(this.shape).forEach((n=>{if(t&&!t[n])e[n]=this.shape[n];else{let t=this.shape[n];for(;t instanceof au;)t=t._def.innerType;e[n]=t}})),new Ka({...this._def,shape:()=>e})}keyof(){return nu(Yo.objectKeys(this.shape))}}Ka.create=(t,e)=>new Ka({shape:()=>t,unknownKeys:"strip",catchall:ja.create(),typeName:mu.ZodObject,...wa(e)}),Ka.strictCreate=(t,e)=>new Ka({shape:()=>t,unknownKeys:"strict",catchall:ja.create(),typeName:mu.ZodObject,...wa(e)}),Ka.lazycreate=(t,e)=>new Ka({shape:t,unknownKeys:"strip",catchall:ja.create(),typeName:mu.ZodObject,...wa(e)});class Fa extends ba{_parse(t){const{ctx:e}=this._processInputParams(t),n=this._def.options;if(e.common.async)return Promise.all(n.map((async t=>{const n={...e,common:{...e.common,issues:[]},parent:null};return{result:await t._parseAsync({data:e.data,path:e.path,parent:n}),ctx:n}}))).then((function(t){for(const e of t)if("valid"===e.result.status)return e.result;for(const n of t)if("dirty"===n.result.status)return e.common.issues.push(...n.ctx.common.issues),n.result;const n=t.map((t=>new ea(t.ctx.common.issues)));return oa(e,{code:ta.invalid_union,unionErrors:n}),ua}));{let t;const r=[];for(const s of n){const n={...e,common:{...e.common,issues:[]},parent:null},i=s._parseSync({data:e.data,path:e.path,parent:n});if("valid"===i.status)return i;"dirty"!==i.status||t||(t={result:i,ctx:n}),n.common.issues.length&&r.push(n.common.issues)}if(t)return e.common.issues.push(...t.ctx.common.issues),t.result;const s=r.map((t=>new ea(t)));return oa(e,{code:ta.invalid_union,unionErrors:s}),ua}}get options(){return this._def.options}}Fa.create=(t,e)=>new Fa({options:t,typeName:mu.ZodUnion,...wa(e)});const qa=t=>t instanceof tu?qa(t.schema):t instanceof ou?qa(t.innerType()):t instanceof eu?[t.value]:t instanceof ru?t.options:t instanceof su?Object.keys(t.enum):t instanceof cu?qa(t._def.innerType):t instanceof La?[void 0]:t instanceof Za?[null]:null;class Va extends ba{_parse(t){const{ctx:e}=this._processInputParams(t);if(e.parsedType!==Qo.object)return oa(e,{code:ta.invalid_type,expected:Qo.object,received:e.parsedType}),ua;const n=this.discriminator,r=e.data[n],s=this.optionsMap.get(r);return s?e.common.async?s._parseAsync({data:e.data,path:e.path,parent:e}):s._parseSync({data:e.data,path:e.path,parent:e}):(oa(e,{code:ta.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),ua)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,e,n){const r=new Map;for(const n of e){const e=qa(n.shape[t]);if(!e)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const s of e){if(r.has(s))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(s)}`);r.set(s,n)}}return new Va({typeName:mu.ZodDiscriminatedUnion,discriminator:t,options:e,optionsMap:r,...wa(n)})}}function Ma(t,e){const n=Xo(t),r=Xo(e);if(t===e)return{valid:!0,data:t};if(n===Qo.object&&r===Qo.object){const n=Yo.objectKeys(e),r=Yo.objectKeys(t).filter((t=>-1!==n.indexOf(t))),s={...t,...e};for(const n of r){const r=Ma(t[n],e[n]);if(!r.valid)return{valid:!1};s[n]=r.data}return{valid:!0,data:s}}if(n===Qo.array&&r===Qo.array){if(t.length!==e.length)return{valid:!1};const n=[];for(let r=0;r<t.length;r++){const s=Ma(t[r],e[r]);if(!s.valid)return{valid:!1};n.push(s.data)}return{valid:!0,data:n}}return n===Qo.date&&r===Qo.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Ga extends ba{_parse(t){const{status:e,ctx:n}=this._processInputParams(t),r=(t,r)=>{if(ha(t)||ha(r))return ua;const s=Ma(t.value,r.value);return s.valid?((da(t)||da(r))&&e.dirty(),{status:e.value,value:s.data}):(oa(n,{code:ta.invalid_intersection_types}),ua)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then((([t,e])=>r(t,e))):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}Ga.create=(t,e,n)=>new Ga({left:t,right:e,typeName:mu.ZodIntersection,...wa(n)});class Wa extends ba{_parse(t){const{status:e,ctx:n}=this._processInputParams(t);if(n.parsedType!==Qo.array)return oa(n,{code:ta.invalid_type,expected:Qo.array,received:n.parsedType}),ua;if(n.data.length<this._def.items.length)return oa(n,{code:ta.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ua;!this._def.rest&&n.data.length>this._def.items.length&&(oa(n,{code:ta.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),e.dirty());const r=[...n.data].map(((t,e)=>{const r=this._def.items[e]||this._def.rest;return r?r._parse(new ya(n,t,n.path,e)):null})).filter((t=>!!t));return n.common.async?Promise.all(r).then((t=>aa.mergeArray(e,t))):aa.mergeArray(e,r)}get items(){return this._def.items}rest(t){return new Wa({...this._def,rest:t})}}Wa.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Wa({items:t,typeName:mu.ZodTuple,rest:null,...wa(e)})};class Ya extends ba{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:e,ctx:n}=this._processInputParams(t);if(n.parsedType!==Qo.object)return oa(n,{code:ta.invalid_type,expected:Qo.object,received:n.parsedType}),ua;const r=[],s=this._def.keyType,i=this._def.valueType;for(const t in n.data)r.push({key:s._parse(new ya(n,t,n.path,t)),value:i._parse(new ya(n,n.data[t],n.path,t))});return n.common.async?aa.mergeObjectAsync(e,r):aa.mergeObjectSync(e,r)}get element(){return this._def.valueType}static create(t,e,n){return new Ya(e instanceof ba?{keyType:t,valueType:e,typeName:mu.ZodRecord,...wa(n)}:{keyType:Ia.create(),valueType:t,typeName:mu.ZodRecord,...wa(e)})}}class Ja extends ba{_parse(t){const{status:e,ctx:n}=this._processInputParams(t);if(n.parsedType!==Qo.map)return oa(n,{code:ta.invalid_type,expected:Qo.map,received:n.parsedType}),ua;const r=this._def.keyType,s=this._def.valueType,i=[...n.data.entries()].map((([t,e],i)=>({key:r._parse(new ya(n,t,n.path,[i,"key"])),value:s._parse(new ya(n,e,n.path,[i,"value"]))})));if(n.common.async){const t=new Map;return Promise.resolve().then((async()=>{for(const n of i){const r=await n.key,s=await n.value;if("aborted"===r.status||"aborted"===s.status)return ua;"dirty"!==r.status&&"dirty"!==s.status||e.dirty(),t.set(r.value,s.value)}return{status:e.value,value:t}}))}{const t=new Map;for(const n of i){const r=n.key,s=n.value;if("aborted"===r.status||"aborted"===s.status)return ua;"dirty"!==r.status&&"dirty"!==s.status||e.dirty(),t.set(r.value,s.value)}return{status:e.value,value:t}}}}Ja.create=(t,e,n)=>new Ja({valueType:e,keyType:t,typeName:mu.ZodMap,...wa(n)});class Qa extends ba{_parse(t){const{status:e,ctx:n}=this._processInputParams(t);if(n.parsedType!==Qo.set)return oa(n,{code:ta.invalid_type,expected:Qo.set,received:n.parsedType}),ua;const r=this._def;null!==r.minSize&&n.data.size<r.minSize.value&&(oa(n,{code:ta.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),e.dirty()),null!==r.maxSize&&n.data.size>r.maxSize.value&&(oa(n,{code:ta.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),e.dirty());const s=this._def.valueType;function i(t){const n=new Set;for(const r of t){if("aborted"===r.status)return ua;"dirty"===r.status&&e.dirty(),n.add(r.value)}return{status:e.value,value:n}}const o=[...n.data.values()].map(((t,e)=>s._parse(new ya(n,t,n.path,e))));return n.common.async?Promise.all(o).then((t=>i(t))):i(o)}min(t,e){return new Qa({...this._def,minSize:{value:t,message:ga.toString(e)}})}max(t,e){return new Qa({...this._def,maxSize:{value:t,message:ga.toString(e)}})}size(t,e){return this.min(t,e).max(t,e)}nonempty(t){return this.min(1,t)}}Qa.create=(t,e)=>new Qa({valueType:t,minSize:null,maxSize:null,typeName:mu.ZodSet,...wa(e)});class Xa extends ba{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:e}=this._processInputParams(t);if(e.parsedType!==Qo.function)return oa(e,{code:ta.invalid_type,expected:Qo.function,received:e.parsedType}),ua;function n(t,n){return ia({data:t,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,sa(),na].filter((t=>!!t)),issueData:{code:ta.invalid_arguments,argumentsError:n}})}function r(t,n){return ia({data:t,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,sa(),na].filter((t=>!!t)),issueData:{code:ta.invalid_return_type,returnTypeError:n}})}const s={errorMap:e.common.contextualErrorMap},i=e.data;return this._def.returns instanceof iu?fa((async(...t)=>{const e=new ea([]),o=await this._def.args.parseAsync(t,s).catch((r=>{throw e.addIssue(n(t,r)),e})),a=await i(...o);return await this._def.returns._def.type.parseAsync(a,s).catch((t=>{throw e.addIssue(r(a,t)),e}))})):fa(((...t)=>{const e=this._def.args.safeParse(t,s);if(!e.success)throw new ea([n(t,e.error)]);const o=i(...e.data),a=this._def.returns.safeParse(o,s);if(!a.success)throw new ea([r(o,a.error)]);return a.data}))}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Xa({...this._def,args:Wa.create(t).rest(Ha.create())})}returns(t){return new Xa({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,e,n){return new Xa({args:t||Wa.create([]).rest(Ha.create()),returns:e||Ha.create(),typeName:mu.ZodFunction,...wa(n)})}}class tu extends ba{get schema(){return this._def.getter()}_parse(t){const{ctx:e}=this._processInputParams(t);return this._def.getter()._parse({data:e.data,path:e.path,parent:e})}}tu.create=(t,e)=>new tu({getter:t,typeName:mu.ZodLazy,...wa(e)});class eu extends ba{_parse(t){if(t.data!==this._def.value){const e=this._getOrReturnCtx(t);return oa(e,{received:e.data,code:ta.invalid_literal,expected:this._def.value}),ua}return{status:"valid",value:t.data}}get value(){return this._def.value}}function nu(t,e){return new ru({values:t,typeName:mu.ZodEnum,...wa(e)})}eu.create=(t,e)=>new eu({value:t,typeName:mu.ZodLiteral,...wa(e)});class ru extends ba{_parse(t){if("string"!=typeof t.data){const e=this._getOrReturnCtx(t),n=this._def.values;return oa(e,{expected:Yo.joinValues(n),received:e.parsedType,code:ta.invalid_type}),ua}if(-1===this._def.values.indexOf(t.data)){const e=this._getOrReturnCtx(t),n=this._def.values;return oa(e,{received:e.data,code:ta.invalid_enum_value,options:n}),ua}return fa(t.data)}get options(){return this._def.values}get enum(){const t={};for(const e of this._def.values)t[e]=e;return t}get Values(){const t={};for(const e of this._def.values)t[e]=e;return t}get Enum(){const t={};for(const e of this._def.values)t[e]=e;return t}extract(t){return ru.create(t)}exclude(t){return ru.create(this.options.filter((e=>!t.includes(e))))}}ru.create=nu;class su extends ba{_parse(t){const e=Yo.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(t);if(n.parsedType!==Qo.string&&n.parsedType!==Qo.number){const t=Yo.objectValues(e);return oa(n,{expected:Yo.joinValues(t),received:n.parsedType,code:ta.invalid_type}),ua}if(-1===e.indexOf(t.data)){const t=Yo.objectValues(e);return oa(n,{received:n.data,code:ta.invalid_enum_value,options:t}),ua}return fa(t.data)}get enum(){return this._def.values}}su.create=(t,e)=>new su({values:t,typeName:mu.ZodNativeEnum,...wa(e)});class iu extends ba{unwrap(){return this._def.type}_parse(t){const{ctx:e}=this._processInputParams(t);if(e.parsedType!==Qo.promise&&!1===e.common.async)return oa(e,{code:ta.invalid_type,expected:Qo.promise,received:e.parsedType}),ua;const n=e.parsedType===Qo.promise?e.data:Promise.resolve(e.data);return fa(n.then((t=>this._def.type.parseAsync(t,{path:e.path,errorMap:e.common.contextualErrorMap}))))}}iu.create=(t,e)=>new iu({type:t,typeName:mu.ZodPromise,...wa(e)});class ou extends ba{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===mu.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:e,ctx:n}=this._processInputParams(t),r=this._def.effect||null;if("preprocess"===r.type){const t=r.transform(n.data);return n.common.async?Promise.resolve(t).then((t=>this._def.schema._parseAsync({data:t,path:n.path,parent:n}))):this._def.schema._parseSync({data:t,path:n.path,parent:n})}const s={addIssue:t=>{oa(n,t),t.fatal?e.abort():e.dirty()},get path(){return n.path}};if(s.addIssue=s.addIssue.bind(s),"refinement"===r.type){const t=t=>{const e=r.refinement(t,s);if(n.common.async)return Promise.resolve(e);if(e instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return t};if(!1===n.common.async){const r=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return"aborted"===r.status?ua:("dirty"===r.status&&e.dirty(),t(r.value),{status:e.value,value:r.value})}return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then((n=>"aborted"===n.status?ua:("dirty"===n.status&&e.dirty(),t(n.value).then((()=>({status:e.value,value:n.value}))))))}if("transform"===r.type){if(!1===n.common.async){const t=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!la(t))return t;const i=r.transform(t.value,s);if(i instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:e.value,value:i}}return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then((t=>la(t)?Promise.resolve(r.transform(t.value,s)).then((t=>({status:e.value,value:t}))):t))}Yo.assertNever(r)}}ou.create=(t,e,n)=>new ou({schema:t,typeName:mu.ZodEffects,effect:e,...wa(n)}),ou.createWithPreprocess=(t,e,n)=>new ou({schema:e,effect:{type:"preprocess",transform:t},typeName:mu.ZodEffects,...wa(n)});class au extends ba{_parse(t){return this._getType(t)===Qo.undefined?fa(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}au.create=(t,e)=>new au({innerType:t,typeName:mu.ZodOptional,...wa(e)});class uu extends ba{_parse(t){return this._getType(t)===Qo.null?fa(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}uu.create=(t,e)=>new uu({innerType:t,typeName:mu.ZodNullable,...wa(e)});class cu extends ba{_parse(t){const{ctx:e}=this._processInputParams(t);let n=e.data;return e.parsedType===Qo.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:e.path,parent:e})}removeDefault(){return this._def.innerType}}cu.create=(t,e)=>new cu({innerType:t,typeName:mu.ZodDefault,defaultValue:"function"==typeof e.default?e.default:()=>e.default,...wa(e)});class fu extends ba{_parse(t){const{ctx:e}=this._processInputParams(t),n={...e,common:{...e.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return pa(r)?r.then((t=>({status:"valid",value:"valid"===t.status?t.value:this._def.catchValue({get error(){return new ea(n.common.issues)},input:n.data})}))):{status:"valid",value:"valid"===r.status?r.value:this._def.catchValue({get error(){return new ea(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}fu.create=(t,e)=>new fu({innerType:t,typeName:mu.ZodCatch,catchValue:"function"==typeof e.catch?e.catch:()=>e.catch,...wa(e)});class hu extends ba{_parse(t){if(this._getType(t)!==Qo.nan){const e=this._getOrReturnCtx(t);return oa(e,{code:ta.invalid_type,expected:Qo.nan,received:e.parsedType}),ua}return{status:"valid",value:t.data}}}hu.create=t=>new hu({typeName:mu.ZodNaN,...wa(t)});const du=Symbol("zod_brand");class lu extends ba{_parse(t){const{ctx:e}=this._processInputParams(t),n=e.data;return this._def.type._parse({data:n,path:e.path,parent:e})}unwrap(){return this._def.type}}class pu extends ba{_parse(t){const{status:e,ctx:n}=this._processInputParams(t);if(n.common.async){return(async()=>{const t=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return"aborted"===t.status?ua:"dirty"===t.status?(e.dirty(),ca(t.value)):this._def.out._parseAsync({data:t.value,path:n.path,parent:n})})()}{const t=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return"aborted"===t.status?ua:"dirty"===t.status?(e.dirty(),{status:"dirty",value:t.value}):this._def.out._parseSync({data:t.value,path:n.path,parent:n})}}static create(t,e){return new pu({in:t,out:e,typeName:mu.ZodPipeline})}}const gu=(t,e={},n)=>t?Ra.create().superRefine(((r,s)=>{var i,o;if(!t(r)){const t="function"==typeof e?e(r):"string"==typeof e?{message:e}:e,a=null===(o=null!==(i=t.fatal)&&void 0!==i?i:n)||void 0===o||o,u="string"==typeof t?{message:t}:t;s.addIssue({code:"custom",...u,fatal:a})}})):Ra.create(),yu={object:Ka.lazycreate};var mu;!function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline"}(mu||(mu={}));const wu=Ia.create,bu=Ba.create,vu=hu.create,_u=Ta.create,xu=Ua.create,Eu=Ca.create,Su=Na.create,ku=La.create,Au=Za.create,Ou=Ra.create,Iu=Ha.create,Pu=ja.create,Bu=Da.create,Tu=$a.create,Uu=Ka.create,Cu=Ka.strictCreate,Nu=Fa.create,Lu=Va.create,Zu=Ga.create,Ru=Wa.create,Hu=Ya.create,ju=Ja.create,Du=Qa.create,$u=Xa.create,zu=tu.create,Ku=eu.create,Fu=ru.create,qu=su.create,Vu=iu.create,Mu=ou.create,Gu=au.create,Wu=uu.create,Yu=ou.createWithPreprocess,Ju=pu.create,Qu={string:t=>Ia.create({...t,coerce:!0}),number:t=>Ba.create({...t,coerce:!0}),boolean:t=>Ua.create({...t,coerce:!0}),bigint:t=>Ta.create({...t,coerce:!0}),date:t=>Ca.create({...t,coerce:!0})},Xu=ua;var tc=Object.freeze({__proto__:null,defaultErrorMap:na,setErrorMap:function(t){ra=t},getErrorMap:sa,makeIssue:ia,EMPTY_PATH:[],addIssueToContext:oa,ParseStatus:aa,INVALID:ua,DIRTY:ca,OK:fa,isAborted:ha,isDirty:da,isValid:la,isAsync:pa,get util(){return Yo},get objectUtil(){return Jo},ZodParsedType:Qo,getParsedType:Xo,ZodType:ba,ZodString:Ia,ZodNumber:Ba,ZodBigInt:Ta,ZodBoolean:Ua,ZodDate:Ca,ZodSymbol:Na,ZodUndefined:La,ZodNull:Za,ZodAny:Ra,ZodUnknown:Ha,ZodNever:ja,ZodVoid:Da,ZodArray:$a,ZodObject:Ka,ZodUnion:Fa,ZodDiscriminatedUnion:Va,ZodIntersection:Ga,ZodTuple:Wa,ZodRecord:Ya,ZodMap:Ja,ZodSet:Qa,ZodFunction:Xa,ZodLazy:tu,ZodLiteral:eu,ZodEnum:ru,ZodNativeEnum:su,ZodPromise:iu,ZodEffects:ou,ZodTransformer:ou,ZodOptional:au,ZodNullable:uu,ZodDefault:cu,ZodCatch:fu,ZodNaN:hu,BRAND:du,ZodBranded:lu,ZodPipeline:pu,custom:gu,Schema:ba,ZodSchema:ba,late:yu,get ZodFirstPartyTypeKind(){return mu},coerce:Qu,any:Ou,array:Tu,bigint:_u,boolean:xu,date:Eu,discriminatedUnion:Lu,effect:Mu,enum:Fu,function:$u,instanceof:(t,e={message:`Input not instance of ${t.name}`})=>gu((e=>e instanceof t),e),intersection:Zu,lazy:zu,literal:Ku,map:ju,nan:vu,nativeEnum:qu,never:Pu,null:Au,nullable:Wu,number:bu,object:Uu,oboolean:()=>xu().optional(),onumber:()=>bu().optional(),optional:Gu,ostring:()=>wu().optional(),pipeline:Ju,preprocess:Yu,promise:Vu,record:Hu,set:Du,strictObject:Cu,string:wu,symbol:Su,transformer:Mu,tuple:Ru,undefined:ku,union:Nu,unknown:Iu,void:Bu,NEVER:Xu,ZodIssueCode:ta,quotelessJson:t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:ea});const ec=tc.string().regex(/^[a-fA-F0-9]$/),nc=tc.string().regex(/^[a-fA-F0-9]{64}$/),rc=tc.number().min(0).max(4294967295),sc=tc.bigint(),ic=tc.instanceof(Uint8Array),oc=tc.union([ec,rc,tc.string(),ic]).array(),ac=tc.union([oc,ec,ic]),uc=tc.array(ac),cc=tc.object({value:tc.union([rc,sc]),scriptPubKey:ac}),fc=tc.object({txid:nc,vout:rc,scriptSig:ac,sequence:rc,prevout:cc.optional(),witness:uc}),hc={TxData:tc.object({version:rc,vin:tc.array(fc),vout:tc.array(cc),locktime:rc}),TxInput:fc,TxOutput:cc,witness:uc,script:ac,hexstr:ec,hash:nc,uint32:rc,uint64:sc};return t.Address=co,t.Input=Go,t.Output=Vo,t.Script=Ut,t.Sequence=qo,t.Signer=jo,t.Tap=$o,t.Transaction=class{constructor(t){"string"==typeof t&&(t=nt.hex(t)),t instanceof Uint8Array&&(t=so.decode(t));const e=hc.TxData;this._data=e.parse(so.create(t))}get data(){return this._data}get version(){return this.data.version}get vin(){return this.data.vin.map(((t,e)=>new Go(this.data,e)))}get vout(){return this.data.vout.map((t=>new Vo(t)))}get locktime(){return new Wo(this.data.locktime)}get base(){return so.encode(this.data,!0)}get buff(){return so.encode(this.data)}get raw(){return this.buff.raw}get hex(){return this.buff.hex}get size(){return this.raw.length}get bsize(){return this.base.length}get weight(){return 3*this.bsize+this.size}get vsize(){const t=this.weight%4>0?1:0;return Math.floor(this.weight/4)+t}get hash(){return ni(this.buff).reverse().hex}get txid(){return ni(this.base).reverse().hex}async export(){const{size:t,weight:e,vsize:n,hex:r}=this;return{txid:this.txid,hash:this.hash,...this.data,size:t,weight:e,vsize:n,hex:r}}},t.Tx=so,t.Witness=Mo,t}({});
//# sourceMappingURL=bundle.min.js.map