(this["webpackJsonptaller-react-2"]=this["webpackJsonptaller-react-2"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(7),a=n.n(r),i=n(2),u=n(9),s=n(0),o=function(t){var e=t.setCat,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>1&&e((function(t){return[a].concat(Object(u.a)(t))})),o("")},children:Object(s.jsx)("input",{type:"text",value:a,onChange:function(t){o(t.target.value)},placeholder:"Busca tu gif favorito..."})})},j=n(10),l=n(6),d=n.n(l),f=n(8),b=function(){var t=Object(f.a)(d.a.mark((function t(e){var n,c,r,a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 5,"FfF1yANFCo0iZPnN22Lf4YEqRpbFyLE9",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=").concat(5,"&api_key=").concat("FfF1yANFCo0iZPnN22Lf4YEqRpbFyLE9"),t.next=5,fetch(n);case 5:return c=t.sent,t.next=8,c.json();case 8:return r=t.sent,a=r.data,console.log(a),i=a.map((function(t){return{id:t.id,titulo:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){var e=t.titulo,n=t.url;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("img",{src:n,alt:e}),Object(s.jsx)("p",{children:e})]})},O=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){b(t).then((function(t){a({data:t,loading:!1})}))}),[t]),r}(e).data;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:e}),Object(s.jsx)("div",{className:"card-grid",children:n.map((function(t){return Object(s.jsx)(p,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Gif React Coecys"}),Object(s.jsx)(o,{setCat:r}),Object(s.jsx)("hr",{}),n.map((function(t){return Object(s.jsx)(O,{category:t},t)}))]})};n(17);a.a.render(Object(s.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.022dff4d.chunk.js.map