import{q as be,s as ce,u as w,v as z,w as T,x as V,y as ve,z as X,A as Y,B as pe,n as Se}from"../chunks/scheduler.C9xG8wYf.js";import{S as de,i as _e,e as R,s as D,c as F,f as A,j as O,d as v,a as u,q as Z,b as E,k as M,z as He,p as d,r as N,n as S,o as Q,t as he,h as ge,v as Pe,w as Ee,x as Le,y as Re,g as Fe}from"../chunks/index.5DIR6ws4.js";import{w as ke,r as Ie}from"../chunks/index.U-Bm33l8.js";const Ae=!0,$e=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ae},Symbol.toStringTag,{value:"Module"})),U={};function y(l){return l==="local"?localStorage:sessionStorage}function K(l,e,o){const s=(o==null?void 0:o.serializer)??JSON,r=(o==null?void 0:o.storage)??"local";function t(a,i){y(r).setItem(a,s.stringify(i))}if(!U[l]){const a=ke(e,P=>{const L=y(r).getItem(l);L&&P(s.parse(L));{const C=I=>{I.key===l&&P(I.newValue?s.parse(I.newValue):null)};return window.addEventListener("storage",C),()=>window.removeEventListener("storage",C)}}),{subscribe:i,set:n}=a;U[l]={set(P){t(l,P),n(P)},update(P){const L=P(be(a));t(l,L),n(L)},subscribe:i}}return U[l]}K("modeOsPrefers",!1);K("modeUserPrefers",void 0);K("modeCurrent",!1);const me="(prefers-reduced-motion: reduce)";function Ce(){return window.matchMedia(me).matches}Ie(Ce(),l=>{{const e=s=>{l(s.matches)},o=window.matchMedia(me);return o.addEventListener("change",e),()=>{o.removeEventListener("change",e)}}});const Me=l=>({}),x=l=>({}),De=l=>({}),$=l=>({}),Oe=l=>({}),ee=l=>({}),we=l=>({}),te=l=>({}),ze=l=>({}),le=l=>({}),Te=l=>({}),se=l=>({});function oe(l){let e,o,s;const r=l[19].header,t=w(r,l,l[18],se);return{c(){e=R("header"),t&&t.c(),this.h()},l(a){e=F(a,"HEADER",{id:!0,class:!0});var i=A(e);t&&t.l(i),i.forEach(v),this.h()},h(){u(e,"id","shell-header"),u(e,"class",o="flex-none "+l[8])},m(a,i){E(a,e,i),t&&t.m(e,null),s=!0},p(a,i){t&&t.p&&(!s||i&262144)&&z(t,r,a,a[18],s?V(r,a[18],i,Te):T(a[18]),se),(!s||i&256&&o!==(o="flex-none "+a[8]))&&u(e,"class",o)},i(a){s||(d(t,a),s=!0)},o(a){S(t,a),s=!1},d(a){a&&v(e),t&&t.d(a)}}}function ae(l){let e,o;const s=l[19].sidebarLeft,r=w(s,l,l[18],le);return{c(){e=R("aside"),r&&r.c(),this.h()},l(t){e=F(t,"ASIDE",{id:!0,class:!0});var a=A(e);r&&r.l(a),a.forEach(v),this.h()},h(){u(e,"id","sidebar-left"),u(e,"class",l[7])},m(t,a){E(t,e,a),r&&r.m(e,null),o=!0},p(t,a){r&&r.p&&(!o||a&262144)&&z(r,s,t,t[18],o?V(s,t[18],a,ze):T(t[18]),le),(!o||a&128)&&u(e,"class",t[7])},i(t){o||(d(r,t),o=!0)},o(t){S(r,t),o=!1},d(t){t&&v(e),r&&r.d(t)}}}function re(l){let e,o,s;const r=l[19].pageHeader,t=w(r,l,l[18],te),a=t||Ve();return{c(){e=R("header"),a&&a.c(),this.h()},l(i){e=F(i,"HEADER",{id:!0,class:!0});var n=A(e);a&&a.l(n),n.forEach(v),this.h()},h(){u(e,"id","page-header"),u(e,"class",o="flex-none "+l[5])},m(i,n){E(i,e,n),a&&a.m(e,null),s=!0},p(i,n){t&&t.p&&(!s||n&262144)&&z(t,r,i,i[18],s?V(r,i[18],n,we):T(i[18]),te),(!s||n&32&&o!==(o="flex-none "+i[5]))&&u(e,"class",o)},i(i){s||(d(a,i),s=!0)},o(i){S(a,i),s=!1},d(i){i&&v(e),a&&a.d(i)}}}function Ve(l){let e;return{c(){e=he("(slot:header)")},l(o){e=ge(o,"(slot:header)")},m(o,s){E(o,e,s)},d(o){o&&v(e)}}}function ie(l){let e,o,s;const r=l[19].pageFooter,t=w(r,l,l[18],ee),a=t||je();return{c(){e=R("footer"),a&&a.c(),this.h()},l(i){e=F(i,"FOOTER",{id:!0,class:!0});var n=A(e);a&&a.l(n),n.forEach(v),this.h()},h(){u(e,"id","page-footer"),u(e,"class",o="flex-none "+l[3])},m(i,n){E(i,e,n),a&&a.m(e,null),s=!0},p(i,n){t&&t.p&&(!s||n&262144)&&z(t,r,i,i[18],s?V(r,i[18],n,Oe):T(i[18]),ee),(!s||n&8&&o!==(o="flex-none "+i[3]))&&u(e,"class",o)},i(i){s||(d(a,i),s=!0)},o(i){S(a,i),s=!1},d(i){i&&v(e),a&&a.d(i)}}}function je(l){let e;return{c(){e=he("(slot:footer)")},l(o){e=ge(o,"(slot:footer)")},m(o,s){E(o,e,s)},d(o){o&&v(e)}}}function fe(l){let e,o;const s=l[19].sidebarRight,r=w(s,l,l[18],$);return{c(){e=R("aside"),r&&r.c(),this.h()},l(t){e=F(t,"ASIDE",{id:!0,class:!0});var a=A(e);r&&r.l(a),a.forEach(v),this.h()},h(){u(e,"id","sidebar-right"),u(e,"class",l[6])},m(t,a){E(t,e,a),r&&r.m(e,null),o=!0},p(t,a){r&&r.p&&(!o||a&262144)&&z(r,s,t,t[18],o?V(s,t[18],a,De):T(t[18]),$),(!o||a&64)&&u(e,"class",t[6])},i(t){o||(d(r,t),o=!0)},o(t){S(r,t),o=!1},d(t){t&&v(e),r&&r.d(t)}}}function ne(l){let e,o,s;const r=l[19].footer,t=w(r,l,l[18],x);return{c(){e=R("footer"),t&&t.c(),this.h()},l(a){e=F(a,"FOOTER",{id:!0,class:!0});var i=A(e);t&&t.l(i),i.forEach(v),this.h()},h(){u(e,"id","shell-footer"),u(e,"class",o="flex-none "+l[2])},m(a,i){E(a,e,i),t&&t.m(e,null),s=!0},p(a,i){t&&t.p&&(!s||i&262144)&&z(t,r,a,a[18],s?V(r,a[18],i,Me):T(a[18]),x),(!s||i&4&&o!==(o="flex-none "+a[2]))&&u(e,"class",o)},i(a){s||(d(t,a),s=!0)},o(a){S(t,a),s=!1},d(a){a&&v(e),t&&t.d(a)}}}function Be(l){let e,o,s,r,t,a,i,n,P,L,C,I,k,B,J,_=l[10].header&&oe(l),h=l[10].sidebarLeft&&ae(l),g=l[10].pageHeader&&re(l);const j=l[19].default,H=w(j,l,l[18],null);let m=l[10].pageFooter&&ie(l),b=l[10].sidebarRight&&fe(l),p=l[10].footer&&ne(l);return{c(){e=R("div"),_&&_.c(),o=D(),s=R("div"),h&&h.c(),r=D(),t=R("div"),g&&g.c(),a=D(),i=R("main"),H&&H.c(),P=D(),m&&m.c(),C=D(),b&&b.c(),I=D(),p&&p.c(),this.h()},l(f){e=F(f,"DIV",{id:!0,class:!0,"data-testid":!0});var c=A(e);_&&_.l(c),o=O(c),s=F(c,"DIV",{class:!0});var G=A(s);h&&h.l(G),r=O(G),t=F(G,"DIV",{id:!0,class:!0});var q=A(t);g&&g.l(q),a=O(q),i=F(q,"MAIN",{id:!0,class:!0});var W=A(i);H&&H.l(W),W.forEach(v),P=O(q),m&&m.l(q),q.forEach(v),C=O(G),b&&b.l(G),G.forEach(v),I=O(c),p&&p.l(c),c.forEach(v),this.h()},h(){u(i,"id","page-content"),u(i,"class",n="flex-auto "+l[4]),u(t,"id","page"),u(t,"class",L=l[1]+" "+ue),Z(t,"scrollbar-gutter",l[0]),u(s,"class","flex-auto "+qe),u(e,"id","appShell"),u(e,"class",l[9]),u(e,"data-testid","app-shell")},m(f,c){E(f,e,c),_&&_.m(e,null),M(e,o),M(e,s),h&&h.m(s,null),M(s,r),M(s,t),g&&g.m(t,null),M(t,a),M(t,i),H&&H.m(i,null),M(t,P),m&&m.m(t,null),M(s,C),b&&b.m(s,null),M(e,I),p&&p.m(e,null),k=!0,B||(J=He(t,"scroll",l[20]),B=!0)},p(f,[c]){f[10].header?_?(_.p(f,c),c&1024&&d(_,1)):(_=oe(f),_.c(),d(_,1),_.m(e,o)):_&&(N(),S(_,1,1,()=>{_=null}),Q()),f[10].sidebarLeft?h?(h.p(f,c),c&1024&&d(h,1)):(h=ae(f),h.c(),d(h,1),h.m(s,r)):h&&(N(),S(h,1,1,()=>{h=null}),Q()),f[10].pageHeader?g?(g.p(f,c),c&1024&&d(g,1)):(g=re(f),g.c(),d(g,1),g.m(t,a)):g&&(N(),S(g,1,1,()=>{g=null}),Q()),H&&H.p&&(!k||c&262144)&&z(H,j,f,f[18],k?V(j,f[18],c,null):T(f[18]),null),(!k||c&16&&n!==(n="flex-auto "+f[4]))&&u(i,"class",n),f[10].pageFooter?m?(m.p(f,c),c&1024&&d(m,1)):(m=ie(f),m.c(),d(m,1),m.m(t,null)):m&&(N(),S(m,1,1,()=>{m=null}),Q()),(!k||c&2&&L!==(L=f[1]+" "+ue))&&u(t,"class",L),c&1&&Z(t,"scrollbar-gutter",f[0]),f[10].sidebarRight?b?(b.p(f,c),c&1024&&d(b,1)):(b=fe(f),b.c(),d(b,1),b.m(s,null)):b&&(N(),S(b,1,1,()=>{b=null}),Q()),f[10].footer?p?(p.p(f,c),c&1024&&d(p,1)):(p=ne(f),p.c(),d(p,1),p.m(e,null)):p&&(N(),S(p,1,1,()=>{p=null}),Q()),(!k||c&512)&&u(e,"class",f[9])},i(f){k||(d(_),d(h),d(g),d(H,f),d(m),d(b),d(p),k=!0)},o(f){S(_),S(h),S(g),S(H,f),S(m),S(b),S(p),k=!1},d(f){f&&v(e),_&&_.d(),h&&h.d(),g&&g.d(),H&&H.d(f),m&&m.d(),b&&b.d(),p&&p.d(),B=!1,J()}}}const Ge="w-full h-full flex flex-col overflow-hidden",qe="w-full h-full flex overflow-hidden",ue="flex-1 overflow-x-hidden flex flex-col",Ne="flex-none overflow-x-hidden overflow-y-auto",Qe="flex-none overflow-x-hidden overflow-y-auto";function Je(l,e,o){let s,r,t,a,i,n,P,L,{$$slots:C={},$$scope:I}=e;const k=ve(C);let{scrollbarGutter:B="auto"}=e,{regionPage:J=""}=e,{slotHeader:_="z-10"}=e,{slotSidebarLeft:h="w-auto"}=e,{slotSidebarRight:g="w-auto"}=e,{slotPageHeader:j=""}=e,{slotPageContent:H=""}=e,{slotPageFooter:m=""}=e,{slotFooter:b=""}=e;function p(f){pe.call(this,l,f)}return l.$$set=f=>{o(21,e=X(X({},e),Y(f))),"scrollbarGutter"in f&&o(0,B=f.scrollbarGutter),"regionPage"in f&&o(1,J=f.regionPage),"slotHeader"in f&&o(11,_=f.slotHeader),"slotSidebarLeft"in f&&o(12,h=f.slotSidebarLeft),"slotSidebarRight"in f&&o(13,g=f.slotSidebarRight),"slotPageHeader"in f&&o(14,j=f.slotPageHeader),"slotPageContent"in f&&o(15,H=f.slotPageContent),"slotPageFooter"in f&&o(16,m=f.slotPageFooter),"slotFooter"in f&&o(17,b=f.slotFooter),"$$scope"in f&&o(18,I=f.$$scope)},l.$$.update=()=>{o(9,s=`${Ge} ${e.class??""}`),l.$$.dirty&2048&&o(8,r=`${_}`),l.$$.dirty&4096&&o(7,t=`${Ne} ${h}`),l.$$.dirty&8192&&o(6,a=`${Qe} ${g}`),l.$$.dirty&16384&&o(5,i=`${j}`),l.$$.dirty&32768&&o(4,n=`${H}`),l.$$.dirty&65536&&o(3,P=`${m}`),l.$$.dirty&131072&&o(2,L=`${b}`)},e=Y(e),[B,J,L,P,n,i,a,t,r,s,k,_,h,g,j,H,m,b,I,C,p]}class Ue extends de{constructor(e){super(),_e(this,e,Je,Be,ce,{scrollbarGutter:0,regionPage:1,slotHeader:11,slotSidebarLeft:12,slotSidebarRight:13,slotPageHeader:14,slotPageContent:15,slotPageFooter:16,slotFooter:17})}}function Ke(l){let e;const o=l[0].default,s=w(o,l,l[1],null);return{c(){s&&s.c()},l(r){s&&s.l(r)},m(r,t){s&&s.m(r,t),e=!0},p(r,t){s&&s.p&&(!e||t&2)&&z(s,o,r,r[1],e?V(o,r[1],t,null):T(r[1]),null)},i(r){e||(d(s,r),e=!0)},o(r){S(s,r),e=!1},d(r){s&&s.d(r)}}}function We(l){let e,o='<nav class="navbar svelte-808ff"><div class="logo"><a class="header svelte-808ff" href="/">Linus Scott</a></div> <div class="menuItems svelte-808ff"><div><a class="barItem" href="/test">test</a></div></div></nav>',s,r,t,a;return{c(){e=R("div"),e.innerHTML=o,s=D(),r=R("hr"),t=D(),a=R("hr"),this.h()},l(i){e=F(i,"DIV",{class:!0,"data-svelte-h":!0}),Fe(e)!=="svelte-yn8j5o"&&(e.innerHTML=o),s=O(i),r=F(i,"HR",{}),t=O(i),a=F(i,"HR",{}),this.h()},h(){u(e,"class","topBar")},m(i,n){E(i,e,n),E(i,s,n),E(i,r,n),E(i,t,n),E(i,a,n)},p:Se,d(i){i&&(v(e),v(s),v(r),v(t),v(a))}}}function Xe(l){let e,o;return e=new Ue({props:{$$slots:{header:[We],default:[Ke]},$$scope:{ctx:l}}}),{c(){Pe(e.$$.fragment)},l(s){Ee(e.$$.fragment,s)},m(s,r){Le(e,s,r),o=!0},p(s,[r]){const t={};r&2&&(t.$$scope={dirty:r,ctx:s}),e.$set(t)},i(s){o||(d(e.$$.fragment,s),o=!0)},o(s){S(e.$$.fragment,s),o=!1},d(s){Re(e,s)}}}function Ye(l,e,o){let{$$slots:s={},$$scope:r}=e;return l.$$set=t=>{"$$scope"in t&&o(1,r=t.$$scope)},[s,r]}class et extends de{constructor(e){super(),_e(this,e,Ye,Xe,ce,{})}}export{et as component,$e as universal};