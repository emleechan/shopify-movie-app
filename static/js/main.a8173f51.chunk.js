(this["webpackJsonpombd-movie-app"]=this["webpackJsonpombd-movie-app"]||[]).push([[0],{102:function(e,t,n){},122:function(e,t,n){e.exports=n(244)},127:function(e,t,n){},131:function(e,t,n){},242:function(e,t,n){},243:function(e,t,n){},244:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),i=(n(127),n(128),n(11)),l=n(5),u=n.n(l),m=n(9),s=n(112),f=n(256),d=n(245),v=(n(131),Object(a.createContext)([{},function(){}])),b=function(e){var t=Object(a.useState)({loading:!1,movies:[],nominations:JSON.parse(localStorage.getItem("localStorage"))||[],errorMessage:""}),n=Object(i.a)(t,2),o=n[0],c=n[1];return r.a.createElement(v.Provider,{value:[o,c]},e.children)},E=function(e){var t=e.movie,n=Object(a.useContext)(v),o=Object(i.a)(n,2),c=o[0],l=o[1],u=c.nominations;return r.a.createElement(f.a,{className:"movie"},r.a.createElement("div",null,r.a.createElement("img",{width:"100",src:t.Poster})),r.a.createElement("div",{className:"movie-body"},r.a.createElement("h2",null,t.Title),r.a.createElement("p",null,"(",t.Year,")"),!u.find((function(e){return e.imdbID===t.imdbID}))&&u.length<5?r.a.createElement(d.a,{onClick:function(e){e.preventDefault(),function(e){var t=[].concat(Object(s.a)(u),[e]);l((function(e){return Object(m.a)(Object(m.a)({},e),{},{nominations:t})})),localStorage.setItem("localStorage",JSON.stringify(t))}(t)}},"Nominate"):r.a.createElement(d.a,{disabled:!0},"Nominate")))},p=n(73),h=n.n(p),j=n(111),O=n(252),g=function(e){return fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=6e6fccd5")).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e}))},N=(n(242),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useContext)(v),l=Object(i.a)(c,2),u=l[0],s=l[1],f=(u.movies,u.loading),d=(u.nominations,u.errorMessage,function(){var e=Object(j.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s((function(e){return Object(m.a)(Object(m.a)({},e),{},{loading:!0})})),e.next=3,g(t);case 3:n=e.sent,s((function(e){return Object(m.a)(Object(m.a)({},e),{},{loading:!1})})),n instanceof Error?s((function(e){return Object(m.a)(Object(m.a)({},e),{},{errorMessage:n.toString()})})):"True"===n.Response?(s((function(e){return Object(m.a)(Object(m.a)({},e),{},{movies:n.Search})})),s((function(e){return Object(m.a)(Object(m.a)({},e),{},{errorMessage:""})}))):s((function(e){return Object(m.a)(Object(m.a)({},e),{},{errorMessage:n.Error})}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=function(){o("")};return r.a.createElement(O.a,{className:"search",value:n,onChange:function(e){o(e.target.value)},size:"huge",type:"text",loading:f,placeholder:"Search Movies to Nominate...",onKeyDown:function(e){13===e.keyCode&&(o(e.target.value),function(e){e.preventDefault(),d(n),b()}(e))},icon:"search"})}),y=n(20),S=(n(102),function(e){var t=e.movie,n=Object(a.useContext)(v),o=Object(i.a)(n,2),c=o[0],l=o[1],u=c.nominations;return r.a.createElement("div",{className:"nomination"},r.a.createElement("div",null,r.a.createElement("h4",{id:"fonts",className:"nomination-header"},t.Title),r.a.createElement("div",{id:"fonts",className:"nomination-year"},"(",t.Year,")")),r.a.createElement(y.a,{link:!0,name:"close",onClick:function(e){e.preventDefault(),function(e){var t=u.filter((function(t){return t.imdbID!==e}));l((function(e){return Object(m.a)(Object(m.a)({},e),{},{nominations:t})})),localStorage.setItem("localStorage",JSON.stringify(t))}(t.imdbID)},color:"grey"}))}),w=n(255),k=n(254),C=(n(243),function(){var e=Object(a.useContext)(v),t=Object(i.a)(e,2),n=t[0],o=(t[1],n.movies),c=n.nominations,l=n.errorMessage;return r.a.createElement("div",{className:"App"},r.a.createElement(w.a,{centered:!0,columns:2,stackable:!0},r.a.createElement(w.a.Row,null,r.a.createElement(w.a.Column,{className:"nomination-container",id:"fonts",width:4,height:10},c.length<=0?r.a.createElement("div",{className:"nomination-title"},"No Movies Are Nominated"):r.a.createElement("div",null,r.a.createElement("div",{className:"nomination-title"},r.a.createElement("h4",{id:"fonts"},"Nominees")),c.map((function(e,t){return r.a.createElement(S,{key:"".concat(t,"-").concat(e.Title),movie:e})})))),r.a.createElement(w.a.Column,{width:12},r.a.createElement(N,null),c.length>=5&&r.a.createElement(k.a,{info:!0,header:"Max nominations have been made",content:"Roll out the red carpet!"}),r.a.createElement("div",null,l?r.a.createElement("div",{className:"errorMessage"},r.a.createElement("h1",{id:"fonts"},l)):o.map((function(e,t){return r.a.createElement(E,{key:"".concat(t,"-").concat(e.Title),movie:e})})))))))});S.propTypes={movie:u.a.object},E.propTypes={movie:u.a.object};var x=function(){return r.a.createElement("div",null,r.a.createElement(b,null,r.a.createElement(C,null)))};c.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.a8173f51.chunk.js.map