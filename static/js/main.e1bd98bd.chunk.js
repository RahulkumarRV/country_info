(this.webpackJsonpmy_app=this.webpackJsonpmy_app||[]).push([[0],{22:function(n,e,t){},24:function(n,e,t){},30:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(4),i=t.n(c),s=(t(22),t(9)),o=t.n(s),u=t(12),l=t(8),p=(t(24),t(45)),j=t(1);var g=function(){var n=Object(r.useState)([]),e=Object(l.a)(n,2),t=e[0],a=e[1],c=Object(r.useState)("Asia Region"),i=Object(l.a)(c,2);i[0],i[1],Object(r.useEffect)((function(){(function(){var n=Object(u.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://restcountries.eu/rest/v2/region/Asia").then((function(n){return n.json()})).then((function(n){var e=n.map((function(n){return{name:n.name,capital:n.capital,flag:n.flag,region:n.region,subregion:n.subregion,population:n.population,borders:n.borders,languages:n.languages}}));a(e)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]);var s=function(){var n=Object(u.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://restcountries.eu/rest/v2/region/Asia").then((function(n){return n.json()})).then((function(n){var e=n.map((function(n){return{name:n.name,capital:n.capital,flag:n.flag,region:n.region,subregion:n.subregion,population:n.population,borders:n.borders,languages:n.languages}}));a(e)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"left_side",children:t.map((function(n){return Object(j.jsxs)("div",{className:"country_info_container",children:[Object(j.jsx)("div",{className:"country_container_img",children:Object(j.jsx)("img",{className:"country_img",alt:n.flag,src:n.flag})}),Object(j.jsxs)("div",{className:"country_container_info",children:[Object(j.jsx)("h3",{className:"name",children:n.name}),Object(j.jsx)("p",{children:"Population: "+n.population}),Object(j.jsx)("p",{children:"Region: "+n.region}),Object(j.jsx)("p",{children:"Subregion: "+n.subregion}),Object(j.jsx)("p",{children:"Capital: "+n.capital}),Object(j.jsx)("p",{children:"Population: "+n.population}),Object(j.jsx)("p",{children:"Languages: "+n.languages.map((function(n){return" "+n.name}))}),Object(j.jsx)("p",{children:"Borders: "+n.borders})]})]})}))}),Object(j.jsx)("div",{className:"right_side",children:Object(j.jsx)(p.a,{variant:"contained",color:"primary",onChange:s,children:"SHOW"})})]})},b=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),c(n),i(n)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),b()}},[[30,1,2]]]);
//# sourceMappingURL=main.e1bd98bd.chunk.js.map