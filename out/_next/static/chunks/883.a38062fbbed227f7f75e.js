"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[883],{88883:function(t,e,n){n.r(e),n.d(e,{amplify_s3_text_picker:function(){return h}});var r=n(92508),i=n(69719),a=n(23139),c=n(9277),o=n(38063),l=(n(22742),n(32095)),u=function(t,e,n,r){return new(n||(n=Promise))((function(i,a){function c(t){try{l(r.next(t))}catch(e){a(e)}}function o(t){try{l(r.throw(t))}catch(e){a(e)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,o)}l((r=r.apply(t,e||[])).next())}))},s=function(t,e){var n,r,i,a,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){c.label=a[1];break}if(6===a[0]&&c.label<i[1]){c.label=i[1],i=a;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(a);break}i[2]&&c.ops.pop(),c.trys.pop();continue}a=e.call(t,c)}catch(o){a=[6,o],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},f=new i.k("S3TextPicker"),h=function(){function t(t){(0,r.r)(this,t),this.contentType="text/*",this.level=c.A.Public,this.fallbackText=o.T.PICKER_TEXT}return t.prototype.handleInput=function(t){return u(this,void 0,void 0,(function(){var e,n,r,i,a,c,o,u,h;return s(this,(function(s){switch(s.label){case 0:if(e=t.target.files[0],r=(n=this).path,i=void 0===r?"":r,a=n.level,c=n.fileToKey,o=n.track,u=i+(0,l.c)(e,c),!e)throw new Error("No file was selected");s.label=1;case 1:return s.trys.push([1,3,,4]),[4,(0,l.p)(u,e,a,o,e.type,f)];case 2:return s.sent(),this.src=u,[3,4];case 3:throw h=s.sent(),f.debug(h),new Error(h);case 4:return[2]}}))}))},t.prototype.render=function(){var t=this;return(0,r.h)(r.H,null,(0,r.h)("amplify-s3-text",{textKey:this.src,path:this.path,level:this.level,track:this.track,identityId:this.identityId,contentType:this.contentType,fallbackText:a.o.get(this.fallbackText)}),(0,r.h)("amplify-picker",{inputHandler:function(e){return t.handleInput(e)},acceptValue:"text/*"}))},t}()}}]);