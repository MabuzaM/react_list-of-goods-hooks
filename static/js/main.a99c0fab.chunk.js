(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),i=n(1),r=n.n(i),a=(n(12),n(13),n(2)),o=n(6),l=n(0),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(t){return t.map((function(t){return Object(l.jsx)("li",{children:t},t)}))},j=function(){var t=Object(i.useState)(!1),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(i.useState)(Object(a.a)(u)),r=Object(o.a)(s,2),j=r[0],d=r[1],h=n?null:Object(l.jsx)("button",{className:"button is-primary",type:"button",onClick:function(){c(!0)},children:"Start"});return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title is-1",children:"Goods"}),h,Object(l.jsx)("article",{className:"content is-medium",children:Object(l.jsx)("ul",{children:n&&b(j)})}),Object(l.jsx)("hr",{}),Object(l.jsxs)("article",{className:"buttons",children:[Object(l.jsx)("button",{disabled:!n,className:"button is-dark",type:"button",onClick:function(){var t;t=j,d(Object(a.a)(t).reverse()),b(j)},children:"Reverse"}),Object(l.jsx)("button",{disabled:!n,className:"button is-dark",type:"button",onClick:function(){var t;t=j,d(Object(a.a)(t).sort((function(t,e){return t.localeCompare(e)}))),b(j)},children:"Sort alphabetically"}),Object(l.jsx)("button",{disabled:!n,className:"button is-dark",type:"button",onClick:function(){d(Object(a.a)(u)),b(j)},children:"Reset"}),Object(l.jsx)("button",{disabled:!n,className:"button is-dark",type:"button",onClick:function(){!function(t){var e=Object(a.a)(t).sort((function(t,e){return t.length-e.length}));d(e),b(e)}(j)},children:"Sort by length"}),Object(l.jsx)("div",{className:"select is-rounded is-primary",children:Object(l.jsx)("select",{disabled:!n,name:"filterOptions",id:"filterOptions",onChange:function(t){var e;d((e=+t.target.value,u.filter((function(t){return t.length>=e}))))},children:[1,2,3,4,5,6,7,8,9,10].map((function(t){return Object(l.jsx)("option",{value:t,children:t},t)}))})})]})]})},d=r.a.memo(j),h=function(){return Object(l.jsx)("div",{className:"App container is-fluid",children:Object(l.jsx)(d,{})})};s.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a99c0fab.chunk.js.map