"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{22890:function(t,e,r){r.r(e),r.d(e,{amplify_s3_album:function(){return T}});var n,i=r(92508),o=r(69719),a=r(59222),s=r(23139),l=r(9277),u=r(38063),c=r(74636),f=r(22742),p=r(32095),h=function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function a(t){try{l(n.next(t))}catch(e){o(e)}}function s(t){try{l(n.throw(t))}catch(e){o(e)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}l((n=n.apply(t,e||[])).next())}))},m=function(t,e){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(s){o=[6,s],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},y=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<r;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)n[i]=o[a];return n},d=new Uint8Array(16);function b(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(d)}var g=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function v(t){return"string"===typeof t&&g.test(t)}for(var k=[],w=0;w<256;++w)k.push((w+256).toString(16).substr(1));function x(t,e,r){var n=(t=t||{}).random||(t.rng||b)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(var i=0;i<16;++i)e[r+i]=n[i];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(k[t[e+0]]+k[t[e+1]]+k[t[e+2]]+k[t[e+3]]+"-"+k[t[e+4]]+k[t[e+5]]+"-"+k[t[e+6]]+k[t[e+7]]+"-"+k[t[e+8]]+k[t[e+9]]+"-"+k[t[e+10]]+k[t[e+11]]+k[t[e+12]]+k[t[e+13]]+k[t[e+14]]+k[t[e+15]]).toLowerCase();if(!v(r))throw TypeError("Stringified UUID is invalid");return r}(n)}var I=new o.k("S3Album"),T=function(){function t(t){var e=this;(0,i.r)(this,t),this.contentType="binary/octet-stream",this.level=l.A.Public,this.picker=!0,this.pickerText=u.T.PICKER_TEXT,this.albumItems=[],this.imgArr={},this.list=function(){return h(e,void 0,void 0,(function(){var t,e,r,n,i,o,a,s;return m(this,(function(l){switch(l.label){case 0:if(e=(t=this).path,r=void 0===e?"":e,n=t.level,i=t.track,o=t.identityId,I.debug("Album path: "+r),!f.Ke||"function"!==typeof f.Ke.list)throw new Error(c.d);l.label=1;case 1:return l.trys.push([1,3,,4]),[4,f.Ke.list(r,{level:n,track:i,identityId:o})];case 2:return a=l.sent(),this.marshal(a),[3,4];case 3:return s=l.sent(),I.warn(s),[3,4];case 4:return[2]}}))}))},this.marshal=function(t){t.forEach((function(t){var r=t.key.toLowerCase().split(".")[1];p.i.has(r)&&(!t.contentType||t.contentType&&"binary/octet-stream"===t.contentType)&&(t.contentType=e.getContentType(t))}));var r=t.filter((function(t){return t.contentType&&t.contentType.startsWith("image/")})),n=e.filter?e.filter(r):r;n=e.sort?e.sort(n):n,e.albumItems=n,I.debug("album items",e.albumItems),e.constructImgArray(e.albumItems)},this.constructImgArray=function(t){t.map((function(t){e.imgArr[""+t.key]=t.key}))},this.handlePick=function(t){return h(e,void 0,void 0,(function(){var e,r,n,i,o,a,s,l,u,c;return m(this,(function(f){switch(f.label){case 0:e=t.target.files[0],n=(r=this).path,i=void 0===n?"":n,o=r.level,a=r.track,s=r.fileToKey,l=i+(0,p.c)(e,s),f.label=1;case 1:return f.trys.push([1,3,,4]),[4,(0,p.p)(l,e,o,a,e.type,I)];case 2:return f.sent(),[3,4];case 3:throw u=f.sent(),I.error(u),new Error(u);case 4:return Object.keys(this.imgArr).includes(l)?(this.albumItems=y(this.albumItems),this.imgArr[l]=l+"-"+x()):(c=y(this.albumItems,this.filter?this.filter([{key:l}]):[{key:l}]),this.albumItems=this.sort?this.sort(c):c),[2]}}))}))}}return t.prototype.getContentType=function(t){return(0,a.rI)(t.key,"image/*")},t.prototype.componentWillLoad=function(){this.list()},t.prototype.render=function(){var t=this;return(0,i.h)("div",null,(0,i.h)("div",{class:"album-container"},(0,i.h)("div",{class:"grid-row"},this.albumItems.map((function(e){return(0,i.h)("div",{class:"grid-item",key:"key-"+e.key},(0,i.h)("amplify-s3-image",{key:t.imgArr[e.key],imgKey:e.key,level:t.level,path:t.path,identityId:t.identityId,track:t.track,handleOnError:t.handleOnError,handleOnLoad:t.handleOnLoad}),(0,i.h)("span",{class:"img-overlay"}))})))),this.picker&&(0,i.h)("amplify-picker",{pickerText:s.o.get(this.pickerText),inputHandler:function(e){return t.handlePick(e)},acceptValue:"image/*"}))},t}();T.style=":host{--overlay-bg-color:rgba(0, 0, 0, 0.15)}.album-container{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;margin:0 auto;padding:0 2rem}.grid-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-1rem -1rem;padding-bottom:3rem}.grid-item{position:relative;-ms-flex:1 0 22rem;flex:1 0 22rem;-ms-flex-positive:1;flex-grow:1;margin:1rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}amplify-s3-image{--width:22rem;--height:20rem;border-radius:5px;-o-object-fit:cover;object-fit:cover}.img-overlay{display:none;width:100%;height:21rem;position:absolute;top:0;left:0;background-color:var(--overlay-bg-color)}.grid-item:hover .img-overlay{display:block}"}}]);