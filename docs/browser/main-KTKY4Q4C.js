import{G as f,H as u,I as h,K as C,N as a,O as c,Q as M,R as b,f as r,h as d,i,o as m,p as s,q as p,u as l}from"./chunk-C7B6MZSE.js";var N=[{path:"about",component:c},{path:"contact",component:c},{path:"countries",loadChildren:()=>import("./chunk-SAC5URJO.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries"}],y=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[a.forRoot(N),a]});let o=t;return o})();var v=(()=>{let t=class t{constructor(){this.title="04-countryApp"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-root"]],decls:6,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(e,x){e&1&&(m(0,"div",0)(1,"div",1),p(2,"shared-sidebard"),s(),m(3,"div",2),p(4,"router-outlet"),l(5," router "),s()())},dependencies:[C,M]});let o=t;return o})();var w=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[v]}),t.\u0275inj=r({imports:[h,y,b,f]});let o=t;return o})();u().bootstrapModule(w).catch(o=>console.error(o));
