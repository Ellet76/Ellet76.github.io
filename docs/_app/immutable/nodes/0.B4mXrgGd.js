import{q as be,s as ce,u as D,v as O,w,x as z,y as ve,z as X,A as Y,B as pe,n as Se}from"../chunks/scheduler.C9xG8wYf.js";import{S as de,i as _e,e as L,s as V,c as F,f as A,j,d as p,a as n,q as Z,b as R,k as M,z as He,p as d,r as N,n as S,o as Q,t as he,h as ge,v as Pe,w as Ee,x as Le,y as Fe,g as Re}from"../chunks/index.5DIR6ws4.js";import{w as ke,r as Ie}from"../chunks/index.U-Bm33l8.js";const Ae=!0,$e=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ae},Symbol.toStringTag,{value:"Module"})),U={};function y(l){return l==="local"?localStorage:sessionStorage}function K(l,e,o){const s=(o==null?void 0:o.serializer)??JSON,r=(o==null?void 0:o.storage)??"local";function t(a,i){y(r).setItem(a,s.stringify(i))}if(!U[l]){const a=ke(e,P=>{const E=y(r).getItem(l);E&&P(s.parse(E));{const C=I=>{I.key===l&&P(I.newValue?s.parse(I.newValue):null)};return window.addEventListener("storage",C),()=>window.removeEventListener("storage",C)}}),{subscribe:i,set:u}=a;U[l]={set(P){t(l,P),u(P)},update(P){const E=P(be(a));t(l,E),u(E)},subscribe:i}}return U[l]}K("modeOsPrefers",!1);K("modeUserPrefers",void 0);K("modeCurrent",!1);const me="(prefers-reduced-motion: reduce)";function Ce(){return window.matchMedia(me).matches}Ie(Ce(),l=>{{const e=s=>{l(s.matches)},o=window.matchMedia(me);return o.addEventListener("change",e),()=>{o.removeEventListener("change",e)}}});const Me=l=>({}),x=l=>({}),De=l=>({}),$=l=>({}),Oe=l=>({}),ee=l=>({}),we=l=>({}),te=l=>({}),ze=l=>({}),le=l=>({}),Te=l=>({}),se=l=>({});function oe(l){let e,o,s;const r=l[19].header,t=D(r,l,l[18],se);return{c(){e=L("header"),t&&t.c(),this.h()},l(a){e=F(a,"HEADER",{id:!0,class:!0});var i=A(e);t&&t.l(i),i.forEach(p),this.h()},h(){n(e,"id","shell-header"),n(e,"class",o="flex-none "+l[8])},m(a,i){R(a,e,i),t&&t.m(e,null),s=!0},p(a,i){t&&t.p&&(!s||i&262144)&&O(t,r,a,a[18],s?z(r,a[18],i,Te):w(a[18]),se),(!s||i&256&&o!==(o="flex-none "+a[8]))&&n(e,"class",o)},i(a){s||(d(t,a),s=!0)},o(a){S(t,a),s=!1},d(a){a&&p(e),t&&t.d(a)}}}function ae(l){let e,o;const s=l[19].sidebarLeft,r=D(s,l,l[18],le);return{c(){e=L("aside"),r&&r.c(),this.h()},l(t){e=F(t,"ASIDE",{id:!0,class:!0});var a=A(e);r&&r.l(a),a.forEach(p),this.h()},h(){n(e,"id","sidebar-left"),n(e,"class",l[7])},m(t,a){R(t,e,a),r&&r.m(e,null),o=!0},p(t,a){r&&r.p&&(!o||a&262144)&&O(r,s,t,t[18],o?z(s,t[18],a,ze):w(t[18]),le),(!o||a&128)&&n(e,"class",t[7])},i(t){o||(d(r,t),o=!0)},o(t){S(r,t),o=!1},d(t){t&&p(e),r&&r.d(t)}}}function re(l){let e,o,s;const r=l[19].pageHeader,t=D(r,l,l[18],te),a=t||Ve();return{c(){e=L("header"),a&&a.c(),this.h()},l(i){e=F(i,"HEADER",{id:!0,class:!0});var u=A(e);a&&a.l(u),u.forEach(p),this.h()},h(){n(e,"id","page-header"),n(e,"class",o="flex-none "+l[5])},m(i,u){R(i,e,u),a&&a.m(e,null),s=!0},p(i,u){t&&t.p&&(!s||u&262144)&&O(t,r,i,i[18],s?z(r,i[18],u,we):w(i[18]),te),(!s||u&32&&o!==(o="flex-none "+i[5]))&&n(e,"class",o)},i(i){s||(d(a,i),s=!0)},o(i){S(a,i),s=!1},d(i){i&&p(e),a&&a.d(i)}}}function Ve(l){let e;return{c(){e=he("(slot:header)")},l(o){e=ge(o,"(slot:header)")},m(o,s){R(o,e,s)},d(o){o&&p(e)}}}function ie(l){let e,o,s;const r=l[19].pageFooter,t=D(r,l,l[18],ee),a=t||je();return{c(){e=L("footer"),a&&a.c(),this.h()},l(i){e=F(i,"FOOTER",{id:!0,class:!0});var u=A(e);a&&a.l(u),u.forEach(p),this.h()},h(){n(e,"id","page-footer"),n(e,"class",o="flex-none "+l[3])},m(i,u){R(i,e,u),a&&a.m(e,null),s=!0},p(i,u){t&&t.p&&(!s||u&262144)&&O(t,r,i,i[18],s?z(r,i[18],u,Oe):w(i[18]),ee),(!s||u&8&&o!==(o="flex-none "+i[3]))&&n(e,"class",o)},i(i){s||(d(a,i),s=!0)},o(i){S(a,i),s=!1},d(i){i&&p(e),a&&a.d(i)}}}function je(l){let e;return{c(){e=he("(slot:footer)")},l(o){e=ge(o,"(slot:footer)")},m(o,s){R(o,e,s)},d(o){o&&p(e)}}}function fe(l){let e,o;const s=l[19].sidebarRight,r=D(s,l,l[18],$);return{c(){e=L("aside"),r&&r.c(),this.h()},l(t){e=F(t,"ASIDE",{id:!0,class:!0});var a=A(e);r&&r.l(a),a.forEach(p),this.h()},h(){n(e,"id","sidebar-right"),n(e,"class",l[6])},m(t,a){R(t,e,a),r&&r.m(e,null),o=!0},p(t,a){r&&r.p&&(!o||a&262144)&&O(r,s,t,t[18],o?z(s,t[18],a,De):w(t[18]),$),(!o||a&64)&&n(e,"class",t[6])},i(t){o||(d(r,t),o=!0)},o(t){S(r,t),o=!1},d(t){t&&p(e),r&&r.d(t)}}}function ne(l){let e,o,s;const r=l[19].footer,t=D(r,l,l[18],x);return{c(){e=L("footer"),t&&t.c(),this.h()},l(a){e=F(a,"FOOTER",{id:!0,class:!0});var i=A(e);t&&t.l(i),i.forEach(p),this.h()},h(){n(e,"id","shell-footer"),n(e,"class",o="flex-none "+l[2])},m(a,i){R(a,e,i),t&&t.m(e,null),s=!0},p(a,i){t&&t.p&&(!s||i&262144)&&O(t,r,a,a[18],s?z(r,a[18],i,Me):w(a[18]),x),(!s||i&4&&o!==(o="flex-none "+a[2]))&&n(e,"class",o)},i(a){s||(d(t,a),s=!0)},o(a){S(t,a),s=!1},d(a){a&&p(e),t&&t.d(a)}}}function Be(l){let e,o,s,r,t,a,i,u,P,E,C,I,k,B,J,_=l[10].header&&oe(l),h=l[10].sidebarLeft&&ae(l),g=l[10].pageHeader&&re(l);const T=l[19].default,H=D(T,l,l[18],null);let m=l[10].pageFooter&&ie(l),b=l[10].sidebarRight&&fe(l),v=l[10].footer&&ne(l);return{c(){e=L("div"),_&&_.c(),o=V(),s=L("div"),h&&h.c(),r=V(),t=L("div"),g&&g.c(),a=V(),i=L("main"),H&&H.c(),P=V(),m&&m.c(),C=V(),b&&b.c(),I=V(),v&&v.c(),this.h()},l(f){e=F(f,"DIV",{id:!0,class:!0,"data-testid":!0});var c=A(e);_&&_.l(c),o=j(c),s=F(c,"DIV",{class:!0});var G=A(s);h&&h.l(G),r=j(G),t=F(G,"DIV",{id:!0,class:!0});var q=A(t);g&&g.l(q),a=j(q),i=F(q,"MAIN",{id:!0,class:!0});var W=A(i);H&&H.l(W),W.forEach(p),P=j(q),m&&m.l(q),q.forEach(p),C=j(G),b&&b.l(G),G.forEach(p),I=j(c),v&&v.l(c),c.forEach(p),this.h()},h(){n(i,"id","page-content"),n(i,"class",u="flex-auto "+l[4]),n(t,"id","page"),n(t,"class",E=l[1]+" "+ue),Z(t,"scrollbar-gutter",l[0]),n(s,"class","flex-auto "+qe),n(e,"id","appShell"),n(e,"class",l[9]),n(e,"data-testid","app-shell")},m(f,c){R(f,e,c),_&&_.m(e,null),M(e,o),M(e,s),h&&h.m(s,null),M(s,r),M(s,t),g&&g.m(t,null),M(t,a),M(t,i),H&&H.m(i,null),M(t,P),m&&m.m(t,null),M(s,C),b&&b.m(s,null),M(e,I),v&&v.m(e,null),k=!0,B||(J=He(t,"scroll",l[20]),B=!0)},p(f,[c]){f[10].header?_?(_.p(f,c),c&1024&&d(_,1)):(_=oe(f),_.c(),d(_,1),_.m(e,o)):_&&(N(),S(_,1,1,()=>{_=null}),Q()),f[10].sidebarLeft?h?(h.p(f,c),c&1024&&d(h,1)):(h=ae(f),h.c(),d(h,1),h.m(s,r)):h&&(N(),S(h,1,1,()=>{h=null}),Q()),f[10].pageHeader?g?(g.p(f,c),c&1024&&d(g,1)):(g=re(f),g.c(),d(g,1),g.m(t,a)):g&&(N(),S(g,1,1,()=>{g=null}),Q()),H&&H.p&&(!k||c&262144)&&O(H,T,f,f[18],k?z(T,f[18],c,null):w(f[18]),null),(!k||c&16&&u!==(u="flex-auto "+f[4]))&&n(i,"class",u),f[10].pageFooter?m?(m.p(f,c),c&1024&&d(m,1)):(m=ie(f),m.c(),d(m,1),m.m(t,null)):m&&(N(),S(m,1,1,()=>{m=null}),Q()),(!k||c&2&&E!==(E=f[1]+" "+ue))&&n(t,"class",E),c&1&&Z(t,"scrollbar-gutter",f[0]),f[10].sidebarRight?b?(b.p(f,c),c&1024&&d(b,1)):(b=fe(f),b.c(),d(b,1),b.m(s,null)):b&&(N(),S(b,1,1,()=>{b=null}),Q()),f[10].footer?v?(v.p(f,c),c&1024&&d(v,1)):(v=ne(f),v.c(),d(v,1),v.m(e,null)):v&&(N(),S(v,1,1,()=>{v=null}),Q()),(!k||c&512)&&n(e,"class",f[9])},i(f){k||(d(_),d(h),d(g),d(H,f),d(m),d(b),d(v),k=!0)},o(f){S(_),S(h),S(g),S(H,f),S(m),S(b),S(v),k=!1},d(f){f&&p(e),_&&_.d(),h&&h.d(),g&&g.d(),H&&H.d(f),m&&m.d(),b&&b.d(),v&&v.d(),B=!1,J()}}}const Ge="w-full h-full flex flex-col overflow-hidden",qe="w-full h-full flex overflow-hidden",ue="flex-1 overflow-x-hidden flex flex-col",Ne="flex-none overflow-x-hidden overflow-y-auto",Qe="flex-none overflow-x-hidden overflow-y-auto";function Je(l,e,o){let s,r,t,a,i,u,P,E,{$$slots:C={},$$scope:I}=e;const k=ve(C);let{scrollbarGutter:B="auto"}=e,{regionPage:J=""}=e,{slotHeader:_="z-10"}=e,{slotSidebarLeft:h="w-auto"}=e,{slotSidebarRight:g="w-auto"}=e,{slotPageHeader:T=""}=e,{slotPageContent:H=""}=e,{slotPageFooter:m=""}=e,{slotFooter:b=""}=e;function v(f){pe.call(this,l,f)}return l.$$set=f=>{o(21,e=X(X({},e),Y(f))),"scrollbarGutter"in f&&o(0,B=f.scrollbarGutter),"regionPage"in f&&o(1,J=f.regionPage),"slotHeader"in f&&o(11,_=f.slotHeader),"slotSidebarLeft"in f&&o(12,h=f.slotSidebarLeft),"slotSidebarRight"in f&&o(13,g=f.slotSidebarRight),"slotPageHeader"in f&&o(14,T=f.slotPageHeader),"slotPageContent"in f&&o(15,H=f.slotPageContent),"slotPageFooter"in f&&o(16,m=f.slotPageFooter),"slotFooter"in f&&o(17,b=f.slotFooter),"$$scope"in f&&o(18,I=f.$$scope)},l.$$.update=()=>{o(9,s=`${Ge} ${e.class??""}`),l.$$.dirty&2048&&o(8,r=`${_}`),l.$$.dirty&4096&&o(7,t=`${Ne} ${h}`),l.$$.dirty&8192&&o(6,a=`${Qe} ${g}`),l.$$.dirty&16384&&o(5,i=`${T}`),l.$$.dirty&32768&&o(4,u=`${H}`),l.$$.dirty&65536&&o(3,P=`${m}`),l.$$.dirty&131072&&o(2,E=`${b}`)},e=Y(e),[B,J,E,P,u,i,a,t,r,s,k,_,h,g,T,H,m,b,I,C,v]}class Ue extends de{constructor(e){super(),_e(this,e,Je,Be,ce,{scrollbarGutter:0,regionPage:1,slotHeader:11,slotSidebarLeft:12,slotSidebarRight:13,slotPageHeader:14,slotPageContent:15,slotPageFooter:16,slotFooter:17})}}function Ke(l){let e;const o=l[0].default,s=D(o,l,l[1],null);return{c(){s&&s.c()},l(r){s&&s.l(r)},m(r,t){s&&s.m(r,t),e=!0},p(r,t){s&&s.p&&(!e||t&2)&&O(s,o,r,r[1],e?z(o,r[1],t,null):w(r[1]),null)},i(r){e||(d(s,r),e=!0)},o(r){S(s,r),e=!1},d(r){s&&s.d(r)}}}function We(l){let e,o='<nav class="navbar svelte-808ff"><div class="logo"><a class="header svelte-808ff" href="/">Linus Scott</a></div> <div class="menuItems svelte-808ff"><div><a class="barItem" href="/test">test</a></div></div></nav>',s,r;return{c(){e=L("div"),e.innerHTML=o,s=V(),r=L("hr"),this.h()},l(t){e=F(t,"DIV",{class:!0,"data-svelte-h":!0}),Re(e)!=="svelte-yn8j5o"&&(e.innerHTML=o),s=j(t),r=F(t,"HR",{}),this.h()},h(){n(e,"class","topBar")},m(t,a){R(t,e,a),R(t,s,a),R(t,r,a)},p:Se,d(t){t&&(p(e),p(s),p(r))}}}function Xe(l){let e,o;return e=new Ue({props:{$$slots:{header:[We],default:[Ke]},$$scope:{ctx:l}}}),{c(){Pe(e.$$.fragment)},l(s){Ee(e.$$.fragment,s)},m(s,r){Le(e,s,r),o=!0},p(s,[r]){const t={};r&2&&(t.$$scope={dirty:r,ctx:s}),e.$set(t)},i(s){o||(d(e.$$.fragment,s),o=!0)},o(s){S(e.$$.fragment,s),o=!1},d(s){Fe(e,s)}}}function Ye(l,e,o){let{$$slots:s={},$$scope:r}=e;return l.$$set=t=>{"$$scope"in t&&o(1,r=t.$$scope)},[s,r]}class et extends de{constructor(e){super(),_e(this,e,Ye,Xe,ce,{})}}export{et as component,$e as universal};