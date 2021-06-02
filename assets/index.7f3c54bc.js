import{d as t,w as e,S as s,i as n,s as a,e as l,c,a as o,b as r,f as i,g as u,l as f,n as h,h as d,j as p,k as m,m as v,r as g,o as $,p as y,t as x,q as w,u as E,v as b,x as U,y as I,z as T,A as k,B as N,C as L,D as O,E as D,F as j,G as A,H as S,I as B,J as R,K as P,L as M,M as V,N as C,O as q,P as _,Q as z,R as G,T as X,U as F,V as J}from"./vendor.0ca2dde3.js";const K=["Arugula","Kale","Basil"],H=[{key:"group",message:"A plant group is required."}],Q=["group","annotations","notes","datetime"],Y=e(void 0),W=e([]),Z=e(""),tt=t([W,Z],(([t,e])=>{const s=e.toLowerCase();return""===s?t:t.filter((t=>{for(const e of Q)if(JSON.stringify(t[e]).toLowerCase().includes(s))return!0;return!1}))}));function et(t){let e,s,n;return{c(){e=l("button"),this.h()},l(t){e=c(t,"BUTTON",{title:!0,class:!0}),o(e).forEach(r),this.h()},h(){i(e,"title","clear search"),i(e,"class","icon-cross svelte-1wd78n3")},m(a,l){u(a,e,l),s||(n=f(e,"click",t[3]),s=!0)},p:h,d(t){t&&r(e),s=!1,n()}}}function st(t){let e,s,n,a,$,y,x,w,E=t[0].length>0&&et(t);return{c(){e=l("nav"),s=l("button"),n=d(),a=l("div"),$=l("input"),y=d(),E&&E.c(),this.h()},l(t){e=c(t,"NAV",{class:!0});var l=o(e);s=c(l,"BUTTON",{title:!0,class:!0}),o(s).forEach(r),n=p(l),a=c(l,"DIV",{class:!0});var i=o(a);$=c(i,"INPUT",{id:!0,type:!0,placeholder:!0,class:!0}),y=p(i),E&&E.l(i),i.forEach(r),l.forEach(r),this.h()},h(){i(s,"title","search"),i(s,"class","icon-search svelte-1wd78n3"),i($,"id","search-input"),i($,"type","search"),i($,"placeholder","search"),i($,"class","svelte-1wd78n3"),i(a,"class","search svelte-1wd78n3"),i(e,"class","svelte-1wd78n3")},m(l,c){u(l,e,c),m(e,s),m(e,n),m(e,a),m(a,$),v($,t[0]),m(a,y),E&&E.m(a,null),x||(w=[f(s,"click",t[1]),f($,"input",t[4]),f($,"keypress",t[2])],x=!0)},p(t,[e]){1&e&&v($,t[0]),t[0].length>0?E?E.p(t,e):(E=et(t),E.c(),E.m(a,null)):E&&(E.d(1),E=null)},i:h,o:h,d(t){t&&r(e),E&&E.d(),x=!1,g(w)}}}function nt(t,e,s){let n;$(t,Z,(t=>s(5,n=t)));let a="";const l=()=>{y(Z,n=a.trim(),n)};return[a,l,t=>{if("Enter"===t.key){const e=t.target;l(),e.blur()}},()=>{y(Z,n="",n),s(0,a="")},function(){a=this.value,s(0,a)}]}class at extends s{constructor(t){super(),n(this,t,nt,st,a,{})}}function lt(t,e,s){const n=t.slice();return n[3]=e[s],n}function ct(t){let e,s,n=t[3].group+"";return{c(){e=l("p"),s=x(n),this.h()},l(t){e=c(t,"P",{class:!0});var a=o(e);s=w(a,n),a.forEach(r),this.h()},h(){i(e,"class","svelte-tcfkj5")},m(t,n){u(t,e,n),m(e,s)},p(t,e){1&e&&n!==(n=t[3].group+"")&&E(s,n)},d(t){t&&r(e)}}}function ot(t,e){let s,n,a,h,v,g,$,y=e[3].group&&ct(e);function x(){return e[2](e[3])}return{key:t,first:null,c(){s=l("div"),n=l("img"),h=d(),y&&y.c(),v=d(),this.h()},l(t){s=c(t,"DIV",{class:!0});var e=o(s);n=c(e,"IMG",{loading:!0,alt:!0,src:!0,class:!0}),h=p(e),y&&y.l(e),v=p(e),e.forEach(r),this.h()},h(){i(n,"loading","lazy"),i(n,"alt","Plant"),n.src!==(a=e[3].objectURL)&&i(n,"src",a),i(n,"class","svelte-tcfkj5"),i(s,"class","svelte-tcfkj5"),this.first=s},m(t,e){u(t,s,e),m(s,n),m(s,h),y&&y.m(s,null),m(s,v),g||($=f(s,"click",x),g=!0)},p(t,l){e=t,1&l&&n.src!==(a=e[3].objectURL)&&i(n,"src",a),e[3].group?y?y.p(e,l):(y=ct(e),y.c(),y.m(s,v)):y&&(y.d(1),y=null)},d(t){t&&r(s),y&&y.d(),g=!1,$()}}}function rt(t){let e,s=[],n=new Map,a=t[0];const f=t=>t[3].id;for(let l=0;l<a.length;l+=1){let e=lt(t,a,l),c=f(e);n.set(c,s[l]=ot(c,e))}return{c(){e=l("section");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=c(t,"SECTION",{class:!0});var n=o(e);for(let e=0;e<s.length;e+=1)s[e].l(n);n.forEach(r),this.h()},h(){i(e,"class","svelte-tcfkj5")},m(t,n){u(t,e,n);for(let a=0;a<s.length;a+=1)s[a].m(e,null)},p(t,[l]){3&l&&(a=t[0],s=b(s,l,f,1,t,a,n,e,U,ot,null,lt))},i:h,o:h,d(t){t&&r(e);for(let e=0;e<s.length;e+=1)s[e].d()}}}function it(t,e,s){let n,a;$(t,tt,(t=>s(0,n=t))),$(t,Y,(t=>s(1,a=t)));return[n,a,t=>{y(Y,a=t,a)}]}class ut extends s{constructor(t){super(),n(this,t,it,rt,a,{})}}const ft=new Intl.DateTimeFormat("en-US",{dateStyle:"full",timeStyle:"medium"}),ht=async t=>{const e=await t.arrayBuffer();return new Blob([new Uint8Array(e)],{type:t.type})},dt=()=>ft.format(new Date);function pt(t){let e,s,n,a,v,g;return{c(){e=l("label"),s=l("button"),n=d(),a=l("input"),this.h()},l(t){e=c(t,"LABEL",{for:!0,class:!0});var l=o(e);s=c(l,"BUTTON",{title:!0,class:!0}),o(s).forEach(r),l.forEach(r),n=p(t),a=c(t,"INPUT",{id:!0,type:!0,accept:!0,capture:!0,class:!0}),this.h()},h(){i(s,"title","upload image"),i(s,"class","icon-camera svelte-5oq8da"),i(e,"for","image-upload"),i(e,"class","svelte-5oq8da"),i(a,"id","image-upload"),i(a,"type","file"),i(a,"accept","image/*"),i(a,"capture",""),i(a,"class","svelte-5oq8da")},m(l,c){u(l,e,c),m(e,s),u(l,n,c),u(l,a,c),v||(g=f(a,"change",t[0]),v=!0)},p:h,i:h,o:h,d(t){t&&r(e),t&&r(n),t&&r(a),v=!1,g()}}}function mt(t,e,s){let n;$(t,Y,(t=>s(1,n=t)));var a=this&&this.__awaiter||function(t,e,s,n){return new(s||(s=Promise))((function(a,l){function c(t){try{r(n.next(t))}catch(e){l(e)}}function o(t){try{r(n.throw(t))}catch(e){l(e)}}function r(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(c,o)}r((n=n.apply(t,e||[])).next())}))};return[t=>a(void 0,void 0,void 0,(function*(){const e=t.target,s=e.files[0];if(void 0===s)return;const a=yield ht(s);y(Y,n={blob:a,id:I(),datetime:dt(),objectURL:URL.createObjectURL(a),group:"",notes:"",annotations:[],temp:!0},n),e.value=""}))]}class vt extends s{constructor(t){super(),n(this,t,mt,pt,a,{})}}function gt(t){let e,s,n,a,$,y;return{c(){e=l("div"),s=l("div"),n=d(),a=l("input"),this.h()},l(t){e=c(t,"DIV",{class:!0,style:!0});var l=o(e);s=c(l,"DIV",{class:!0}),o(s).forEach(r),n=p(l),a=c(l,"INPUT",{class:!0}),l.forEach(r),this.h()},h(){i(s,"class","arm svelte-1o8eoiu"),i(a,"class","svelte-1o8eoiu"),i(e,"class","dot svelte-1o8eoiu"),T(e,"transform","translate("+t[1]+"px, "+t[2]+"px)")},m(l,c){u(l,e,c),m(e,s),m(e,n),m(e,a),v(a,t[0]),$||(y=[f(a,"input",t[4]),f(e,"click",t[3])],$=!0)},p(t,[s]){1&s&&a.value!==t[0]&&v(a,t[0]),6&s&&T(e,"transform","translate("+t[1]+"px, "+t[2]+"px)")},i:h,o:h,d(t){t&&r(e),$=!1,g(y)}}}function $t(t,e,s){let{x:n}=e,{y:a}=e,{text:l}=e;return t.$$set=t=>{"x"in t&&s(1,n=t.x),"y"in t&&s(2,a=t.y),"text"in t&&s(0,l=t.text)},[l,n,a,t=>{t.stopPropagation()},function(){l=this.value,s(0,l)}]}class yt extends s{constructor(t){super(),n(this,t,$t,gt,a,{x:1,y:2,text:0})}}function xt(t,e,s){const n=t.slice();return n[5]=e[s],n[6]=e,n[7]=s,n}function wt(t){let e,s,n,a,h,v,g,$=[],y=new Map,x=t[1].annotations;const w=t=>t[5].id;for(let l=0;l<x.length;l+=1){let e=xt(t,x,l),s=w(e);y.set(s,$[l]=Et(s,e))}return{c(){e=l("section"),s=l("img"),a=d();for(let t=0;t<$.length;t+=1)$[t].c();this.h()},l(t){e=c(t,"SECTION",{class:!0});var n=o(e);s=c(n,"IMG",{alt:!0,loading:!0,src:!0,class:!0}),a=p(n);for(let e=0;e<$.length;e+=1)$[e].l(n);n.forEach(r),this.h()},h(){i(s,"alt",""),i(s,"loading","lazy"),s.src!==(n=t[1].objectURL)&&i(s,"src",n),i(s,"class","svelte-j0poxe"),i(e,"class","svelte-j0poxe")},m(n,l){u(n,e,l),m(e,s),t[3](s),m(e,a);for(let t=0;t<$.length;t+=1)$[t].m(e,null);h=!0,v||(g=f(s,"click",t[2]),v=!0)},p(t,a){(!h||2&a&&s.src!==(n=t[1].objectURL))&&i(s,"src",n),2&a&&(x=t[1].annotations,k(),$=b($,a,w,1,t,x,y,e,N,Et,null,xt),L())},i(t){if(!h){for(let t=0;t<x.length;t+=1)O($[t]);h=!0}},o(t){for(let e=0;e<$.length;e+=1)D($[e]);h=!1},d(s){s&&r(e),t[3](null);for(let t=0;t<$.length;t+=1)$[t].d();v=!1,g()}}}function Et(t,e){let s,n,a,l;function c(t){e[4](t,e[5])}let o={x:e[5].x,y:e[5].y};return void 0!==e[5].text&&(o.text=e[5].text),n=new yt({props:o}),M.push((()=>V(n,"text",c))),{key:t,first:null,c(){s=j(),A(n.$$.fragment),this.h()},l(t){s=j(),S(n.$$.fragment,t),this.h()},h(){this.first=s},m(t,e){u(t,s,e),B(n,t,e),l=!0},p(t,s){e=t;const l={};2&s&&(l.x=e[5].x),2&s&&(l.y=e[5].y),!a&&2&s&&(a=!0,l.text=e[5].text,R((()=>a=!1))),n.$set(l)},i(t){l||(O(n.$$.fragment,t),l=!0)},o(t){D(n.$$.fragment,t),l=!1},d(t){t&&r(s),P(n,t)}}}function bt(t){let e,s,n=void 0!==t[1]&&wt(t);return{c(){n&&n.c(),e=j()},l(t){n&&n.l(t),e=j()},m(t,a){n&&n.m(t,a),u(t,e,a),s=!0},p(t,[s]){void 0!==t[1]?n?(n.p(t,s),2&s&&O(n,1)):(n=wt(t),n.c(),O(n,1),n.m(e.parentNode,e)):n&&(k(),D(n,1,1,(()=>{n=null})),L())},i(t){s||(O(n),s=!0)},o(t){D(n),s=!1},d(t){n&&n.d(t),t&&r(e)}}}function Ut(t,e,s){let n,a;$(t,Y,(t=>s(1,n=t)));return[a,n,t=>{const e=a.getBoundingClientRect(),s=t.clientX-e.left,l=t.clientY-e.top;y(Y,n.annotations=[...n.annotations,{id:I(),x:s,y:l,text:""}],n)},function(t){M[t?"unshift":"push"]((()=>{a=t,s(0,a)}))},function(e,s){t.$$.not_equal(s.text,e)&&(s.text=e,Y.set(n))}]}class It extends s{constructor(t){super(),n(this,t,Ut,bt,a,{})}}function Tt(t,e,s){const n=t.slice();return n[4]=e[s],n}function kt(t,e){let s,n,a,h,v,g,$=e[4]+"";return{key:t,first:null,c(){s=l("button"),n=x($),a=d(),this.h()},l(t){s=c(t,"BUTTON",{id:!0,class:!0});var e=o(s);n=w(e,$),a=p(e),e.forEach(r),this.h()},h(){i(s,"id",h=e[4]),i(s,"class","svelte-1ykrcnt"),C(s,"selected",e[0]===e[4]),this.first=s},m(t,l){u(t,s,l),m(s,n),m(s,a),v||(g=f(s,"click",e[2]),v=!0)},p(t,a){e=t,2&a&&$!==($=e[4]+"")&&E(n,$),2&a&&h!==(h=e[4])&&i(s,"id",h),3&a&&C(s,"selected",e[0]===e[4])},d(t){t&&r(s),v=!1,g()}}}function Nt(t){let e,s=[],n=new Map,a=t[1];const f=t=>t[4];for(let l=0;l<a.length;l+=1){let e=Tt(t,a,l),c=f(e);n.set(c,s[l]=kt(c,e))}return{c(){e=l("section");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=c(t,"SECTION",{class:!0});var n=o(e);for(let e=0;e<s.length;e+=1)s[e].l(n);n.forEach(r),this.h()},h(){i(e,"class","svelte-1ykrcnt")},m(t,n){u(t,e,n);for(let a=0;a<s.length;a+=1)s[a].m(e,null)},p(t,[l]){7&l&&(a=t[1],s=b(s,l,f,1,t,a,n,e,U,kt,null,Tt))},i:h,o:h,d(t){t&&r(e);for(let e=0;e<s.length;e+=1)s[e].d()}}}function Lt(t,e,s){let{options:n=[]}=e,{selectedOption:a=""}=e;const l=q();return t.$$set=t=>{"options"in t&&s(1,n=t.options),"selectedOption"in t&&s(0,a=t.selectedOption)},[a,n,t=>{const e=t.target;s(0,a=e.textContent.trim()),l("select",a)}]}class Ot extends s{constructor(t){super(),n(this,t,Lt,Nt,a,{options:1,selectedOption:0})}}function Dt(t){let e,s,n,a,h,$,y,b,U,I,T,k,N,L,j,R,M,V,C,q,F,J,H,Q,Y,W,Z,tt,et,st,nt,at,lt,ct=t[0].datetime+"",ot=t[0].temp?"Upload":"Update";return n=new It({}),R=new Ot({props:{selectedOption:t[0].group,options:K}}),R.$on("select",t[2]),{c(){e=l("div"),s=l("section"),A(n.$$.fragment),a=d(),h=l("div"),$=l("div"),y=l("small"),b=d(),U=l("small"),I=x("Tap image to add annotations"),T=d(),k=l("small"),N=x(ct),L=d(),j=l("div"),A(R.$$.fragment),M=d(),V=l("textarea"),C=d(),q=l("div"),F=l("button"),J=l("span"),H=d(),Q=x(ot),Y=d(),W=l("button"),Z=l("span"),tt=x("\n            Delete"),this.h()},l(t){e=c(t,"DIV",{class:!0});var l=o(e);s=c(l,"SECTION",{class:!0});var i=o(s);S(n.$$.fragment,i),a=p(i),h=c(i,"DIV",{class:!0});var u=o(h);$=c(u,"DIV",{class:!0});var f=o($);y=c(f,"SMALL",{class:!0}),o(y).forEach(r),b=p(f),U=c(f,"SMALL",{});var d=o(U);I=w(d,"Tap image to add annotations"),d.forEach(r),f.forEach(r),T=p(u),k=c(u,"SMALL",{});var m=o(k);N=w(m,ct),m.forEach(r),u.forEach(r),L=p(i),j=c(i,"DIV",{class:!0});var v=o(j);S(R.$$.fragment,v),M=p(v),V=c(v,"TEXTAREA",{placeholder:!0,class:!0}),o(V).forEach(r),C=p(v),q=c(v,"DIV",{class:!0});var g=o(q);F=c(g,"BUTTON",{class:!0});var x=o(F);J=c(x,"SPAN",{class:!0}),o(J).forEach(r),H=p(x),Q=w(x,ot),x.forEach(r),Y=p(g),W=c(g,"BUTTON",{class:!0});var E=o(W);Z=c(E,"SPAN",{class:!0}),o(Z).forEach(r),tt=w(E,"\n            Delete"),E.forEach(r),g.forEach(r),v.forEach(r),i.forEach(r),l.forEach(r),this.h()},h(){i(y,"class","icon-write"),i($,"class","svelte-1lbnpyw"),i(h,"class","metadata svelte-1lbnpyw"),i(V,"placeholder","Notes"),i(V,"class","svelte-1lbnpyw"),i(J,"class","icon-up svelte-1lbnpyw"),i(F,"class","submit svelte-1lbnpyw"),i(Z,"class","icon-cross svelte-1lbnpyw"),i(W,"class","cancel svelte-1lbnpyw"),i(q,"class","actions svelte-1lbnpyw"),i(j,"class","inputs svelte-1lbnpyw"),i(s,"class","modal"),i(e,"class","background svelte-1lbnpyw")},m(l,c){u(l,e,c),m(e,s),B(n,s,null),m(s,a),m(s,h),m(h,$),m($,y),m($,b),m($,U),m(U,I),m(h,T),m(h,k),m(k,N),m(s,L),m(s,j),B(R,j,null),m(j,M),m(j,V),v(V,t[0].notes),m(j,C),m(j,q),m(q,F),m(F,J),m(F,H),m(F,Q),m(q,Y),m(q,W),m(W,Z),m(W,tt),nt=!0,at||(lt=[f(V,"input",t[4]),f(F,"click",t[1]),f(W,"click",t[3])],at=!0)},p(t,e){(!nt||1&e)&&ct!==(ct=t[0].datetime+"")&&E(N,ct);const s={};1&e&&(s.selectedOption=t[0].group),R.$set(s),1&e&&v(V,t[0].notes),(!nt||1&e)&&ot!==(ot=t[0].temp?"Upload":"Update")&&E(Q,ot)},i(t){nt||(O(n.$$.fragment,t),O(R.$$.fragment,t),_((()=>{et||(et=z(s,G,{y:20,duration:300},!0)),et.run(1)})),_((()=>{st||(st=z(e,X,{duration:300},!0)),st.run(1)})),nt=!0)},o(t){D(n.$$.fragment,t),D(R.$$.fragment,t),et||(et=z(s,G,{y:20,duration:300},!1)),et.run(0),st||(st=z(e,X,{duration:300},!1)),st.run(0),nt=!1},d(t){t&&r(e),P(n),P(R),t&&et&&et.end(),t&&st&&st.end(),at=!1,g(lt)}}}function jt(t){let e,s,n=void 0!==t[0]&&Dt(t);return{c(){n&&n.c(),e=j()},l(t){n&&n.l(t),e=j()},m(t,a){n&&n.m(t,a),u(t,e,a),s=!0},p(t,[s]){void 0!==t[0]?n?(n.p(t,s),1&s&&O(n,1)):(n=Dt(t),n.c(),O(n,1),n.m(e.parentNode,e)):n&&(k(),D(n,1,1,(()=>{n=null})),L())},i(t){s||(O(n),s=!0)},o(t){D(n),s=!1},d(t){n&&n.d(t),t&&r(e)}}}function At(t,e,s){let n,a;$(t,Y,(t=>s(0,n=t))),$(t,W,(t=>s(5,a=t)));return[n,t=>{for(const{key:e,message:s}of H){const t=n[e];if(""===t||null==t)return alert(s)}!0===n.temp?(delete n.temp,y(W,a=[n,...a],a)):W.set(a),y(Y,n=void 0,n)},t=>{y(Y,n.group=t.detail,n)},t=>{if(!0!==n.temp){const{id:t}=n,e=a.findIndex((e=>e.id===t));a.splice(e,1),W.set(a)}y(Y,n=void 0,n)},function(){n.notes=this.value,Y.set(n)}]}class St extends s{constructor(t){super(),n(this,t,At,jt,a,{})}}function Bt(t){let e,s,n,a,i,f,v,g,$;return s=new at({}),a=new ut({}),f=new vt({}),g=new St({}),{c(){e=l("main"),A(s.$$.fragment),n=d(),A(a.$$.fragment),i=d(),A(f.$$.fragment),v=d(),A(g.$$.fragment)},l(t){e=c(t,"MAIN",{});var l=o(e);S(s.$$.fragment,l),n=p(l),S(a.$$.fragment,l),i=p(l),S(f.$$.fragment,l),v=p(l),S(g.$$.fragment,l),l.forEach(r)},m(t,l){u(t,e,l),B(s,e,null),m(e,n),B(a,e,null),m(e,i),B(f,e,null),m(e,v),B(g,e,null),$=!0},p:h,i(t){$||(O(s.$$.fragment,t),O(a.$$.fragment,t),O(f.$$.fragment,t),O(g.$$.fragment,t),$=!0)},o(t){D(s.$$.fragment,t),D(a.$$.fragment,t),D(f.$$.fragment,t),D(g.$$.fragment,t),$=!1},d(t){t&&r(e),P(s),P(a),P(f),P(g)}}}function Rt(t,e,s){let n;$(t,W,(t=>s(0,n=t)));var a=this&&this.__awaiter||function(t,e,s,n){return new(s||(s=Promise))((function(a,l){function c(t){try{r(n.next(t))}catch(e){l(e)}}function o(t){try{r(n.throw(t))}catch(e){l(e)}}function r(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(c,o)}r((n=n.apply(t,e||[])).next())}))};return F((()=>a(void 0,void 0,void 0,(function*(){J.config({name:"Plant Micro Observer",driver:J.INDEXEDDB});const t=(yield J.getItem("images"))||[];for(const e of t)e.objectURL=URL.createObjectURL(e.blob);y(W,n=t,n),W.subscribe((t=>a(void 0,void 0,void 0,(function*(){yield J.setItem("images",t)}))))})))),[]}new class extends s{constructor(t){super(),n(this,t,Rt,Bt,a,{})}}({target:document.body});
