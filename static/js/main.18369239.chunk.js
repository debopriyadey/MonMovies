(this["webpackJsonpmon-movies"]=this["webpackJsonpmon-movies"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(9),r=a.n(n),o=a(17),i=a(42),l=a(82),s=a(69),d=a(26),j="WATCHLATER",h="WATCHED",b="DELETEWATCHLATER",O="DELETEWATCHED",m={watchlater:null===JSON.parse(localStorage.getItem("Watchlater"))?[]:JSON.parse(localStorage.getItem("Watchlater")),watched:null===JSON.parse(localStorage.getItem("Watched"))?[]:JSON.parse(localStorage.getItem("Watched"))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(d.a)(Object(d.a)({},e),{},{watchlater:[t.payload].concat(Object(s.a)(e.watchlater))});case h:return Object(d.a)(Object(d.a)({},e),{},{watched:[t.payload].concat(Object(s.a)(e.watched))});case b:return Object(d.a)(Object(d.a)({},e),{},{watchlater:e.watchlater.filter((function(e){return e.id!==t.payload}))});case O:return Object(d.a)(Object(d.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload}))});default:return e}},g=a(35),u=a(13),x=a(48),f=a(11),v=a(132),S=a(146),w=a(135),y=a(137),N=a(138),k=a(139),W=a(140),I=a(58),J=a.n(I),T=a(2),C=Object(v.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",textDecoration:"none",flexGrow:"1"},appbar:Object(f.a)({backgroundColor:"#232423",opacity:"0.9"},e.breakpoints.down("xs"),{height:"5%"}),appbarWrapper:{width:"80%",margin:"0 auto",justifyContent:"space-between"},appbarTitle:Object(f.a)({flexGrow:"1"},e.breakpoints.down("xs"),{marginTop:"0",fontSize:"15px"}),icon:{color:"#fff",fontSize:"1.5rem"},iconSize:Object(f.a)({},e.breakpoints.down("xs"),{marginTop:"0",fontSize:"8px"}),button:{margin:e.spacing(1)},colorText:{color:"yellow"},container:{textAlign:"center"}}}));function M(){var e=C(),t=Object(o.c)((function(e){return e.watchlater})),a=Object(o.c)((function(e){return e.watched})),c=t.length,n=a.length;return Object(T.jsx)("div",{className:e.root,id:"header",children:Object(T.jsx)(w.a,{className:e.appbar,elevation:0,children:Object(T.jsxs)(y.a,{className:e.appbarWrapper,children:[Object(T.jsx)(g.b,{to:"/MonMovies",style:{textDecoration:"none",color:"inherit"},children:Object(T.jsxs)("h1",{className:e.appbarTitle,children:["Mon",Object(T.jsx)("span",{className:e.colorText,children:"Movies"})]})}),Object(T.jsxs)(N.a,{children:[Object(T.jsx)(g.b,{to:"/MonMovies/watchlater",className:e.icon,style:{textDecoration:"none"},children:Object(T.jsx)(k.a,{varient:"contained",color:"secondary",size:"small",children:Object(T.jsx)("h3",{className:e.iconSize,children:Object(T.jsx)(W.a,{badgeContent:c,color:"primary",children:"Watchlater"})})})}),",",Object(T.jsx)(g.b,{to:"/MonMovies/watched",className:e.icon,style:{textDecoration:"none"},children:Object(T.jsx)(k.a,{varient:"contained",color:"secondary",size:"small",children:Object(T.jsx)("h3",{className:e.iconSize,children:Object(T.jsx)(W.a,{badgeContent:n,color:"primary",children:"Watched"})})})}),Object(T.jsx)(g.b,{to:"/MonMovies/search",className:e.icon,style:{textDecoration:"none"},children:Object(T.jsx)(k.a,{varient:"contained",color:"secondary",size:"small",children:Object(T.jsx)("h3",{className:e.iconSize,children:Object(T.jsx)(J.a,{})})})})]})]})})})}var z=a(22),A=a(141),D=a(142),E=a(145),B=a(144),_=a(143),R=a(106),H=a(59),L=a.n(H),q=a(60),F=a.n(q);var G=function(e){return function(e){var t=JSON.parse(localStorage.getItem("Watchlater"));null==t&&(t=[]),t.push(e),localStorage.setItem("Watchlater",JSON.stringify(t))}(e),{type:j,payload:e}},U=function(e){return function(e){var t=JSON.parse(localStorage.getItem("Watched"));null==t&&(t=[]),t.push(e),localStorage.setItem("Watched",JSON.stringify(t))}(e),{type:h,payload:e}},Y=function(e){return function(e){var t,a=0,c=null===JSON.parse(localStorage.getItem("Watchlater"))?[]:JSON.parse(localStorage.getItem("Watchlater")),n=Object(z.a)(c);try{for(n.s();!(t=n.n()).done;){if(t.value.id===e.id){var r=JSON.parse(localStorage.getItem("Watchlater"));r.splice(a,1),localStorage.setItem("Watchlater",JSON.stringify(r)),console.log("removed");break}a+=1}}catch(o){n.e(o)}finally{n.f()}}(e),{type:b,payload:e.id}},P=function(e){return function(e){var t,a=0,c=null===JSON.parse(localStorage.getItem("Watched"))?[]:JSON.parse(localStorage.getItem("Watched")),n=Object(z.a)(c);try{for(n.s();!(t=n.n()).done;){if(t.value.id===e.id){var r=JSON.parse(localStorage.getItem("Watched"));r.splice(a,1),localStorage.setItem("Watched",JSON.stringify(r)),console.log("removed");break}a+=1}}catch(o){n.e(o)}finally{n.f()}}(e),{type:O,payload:e.id}},K=Object(v.a)({root:{maxWidth:345},media:{height:140}});function Q(e){var t=e.movie,a=K(),c=Object(o.b)();return Object(T.jsxs)(A.a,{className:a.root,children:[Object(T.jsxs)(D.a,{children:[Object(T.jsx)(_.a,{className:a.media,image:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),title:t.title}),Object(T.jsxs)(B.a,{children:[Object(T.jsx)(R.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(T.jsx)("small",{children:t.release_date}),Object(T.jsx)(R.a,{variant:"body2",color:"textSecondary",component:"p",children:t.overview})]})]}),Object(T.jsxs)(E.a,{disableSpacing:!0,children:[Object(T.jsx)(k.a,{title:"add to watchlater",onClick:function(e){var a,n=null===JSON.parse(localStorage.getItem("Watchlater"))?[]:JSON.parse(localStorage.getItem("Watchlater")),r=!0,o=Object(z.a)(n);try{for(o.s();!(a=o.n()).done;){if(a.value.id===t.id){console.log("present"),r=!1;break}}}catch(i){o.e(i)}finally{o.f()}r?(e.preventDefault(),c(G(t))):alert("movie already added into watchlater")},children:Object(T.jsx)(N.a,{"aria-label":"add to favorites",children:Object(T.jsx)(L.a,{})})}),Object(T.jsx)(k.a,{title:"add to watched",onClick:function(e){var a,n=null===JSON.parse(localStorage.getItem("Watched"))?[]:JSON.parse(localStorage.getItem("Watched")),r=!0,o=Object(z.a)(n);try{for(o.s();!(a=o.n()).done;){if(a.value.id===t.id){console.log("present"),r=!1;break}}}catch(i){o.e(i)}finally{o.f()}r?(e.preventDefault(),c(U(t))):alert("movie already added into watched")},children:Object(T.jsx)(N.a,{"aria-label":"share",children:Object(T.jsx)(F.a,{})})})]})]})}var V=a.p+"static/media/heroimage.8b253059.jpg",X=Object(v.a)((function(e){var t,a;return{root:{overflow:"hidden",margin:0},container:{justifyContent:"center",marginTop:"5%"},image:(t={width:"100vw",height:"60vh",display:"flex",backgroundImage:"url(".concat(V,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",borderBottom:"solid 10px white"},Object(f.a)(t,e.breakpoints.down("md"),{height:"40vh"}),Object(f.a)(t,e.breakpoints.down("sm"),{height:"30vh"}),Object(f.a)(t,e.breakpoints.down("xs"),{height:"20vh"}),t),introText:(a={alignSelf:"center",textAlign:"center",margin:"0 auto",fontSize:"4em",fontWeight:"700",lineHeight:"1",color:"white"},Object(f.a)(a,e.breakpoints.down("md"),{fontSize:"3em"}),Object(f.a)(a,e.breakpoints.down("xs"),{fontSize:"2em",fontWeight:"500"}),a),colorText:{color:"yellow"},card:{margin:"2%"}}}));function Z(){var e=X(),t=Object(c.useState)([]),a=Object(x.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=620bcff5c65556bbc5abc99f82b7164a&language=en-US&page=1&include_adult=false").then((function(e){return e.json()})).then((function(e){r(e.results)}))}),[]),Object(T.jsxs)("div",{className:e.root,children:[Object(T.jsx)(M,{}),Object(T.jsx)("div",{className:e.image,children:Object(T.jsxs)("h1",{className:e.introText,children:[" Welcome, to Mon",Object(T.jsx)("span",{className:e.colorText,children:"Movies"})," "]})}),Object(T.jsx)("div",{children:Object(T.jsx)(S.a,{container:!0,spacing:3,className:e.container,children:n.length>0&&n.map((function(t){return Object(T.jsx)(S.a,{className:e.card,children:Object(T.jsx)(Q,{movie:t})},t.id)}))})})]})}var $=a(147),ee=a(149),te=a(148),ae=a.p+"static/media/searchbg.33249e5c.jpg",ce=Object(v.a)((function(e){var t,a,c,n;return{root:{overflow:"hidden",color:"white"},container:{justifyContent:"center",marginTop:"5%"},card:{margin:"2%"},search:(t={width:"100vw",height:"60vh",display:"grid",backgroundImage:"url(".concat(ae,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",borderBottom:"solid 10px white",marginLeft:0},Object(f.a)(t,e.breakpoints.down("md"),{height:"40vh"}),Object(f.a)(t,e.breakpoints.down("sm"),{height:"30vh"}),Object(f.a)(t,e.breakpoints.down("xs"),{height:"20vh"}),t),searchContent:(a={alignSelf:"center",textAlign:"center",color:"currentcolor"},Object(f.a)(a,e.breakpoints.down("md"),{fontSize:"0.6em"}),Object(f.a)(a,e.breakpoints.down("xs"),{fontSize:"0.4em"}),a),inputRoot:(c={color:"white",border:"2px solid white",borderRadius:"30px"},Object(f.a)(c,e.breakpoints.down("xs"),{height:"40px"}),Object(f.a)(c,e.breakpoints.down("sm"),{height:"35px"}),Object(f.a)(c,e.breakpoints.down("xs"),{height:"30px"}),c),inputInput:(n={alignSelf:"center",textAlign:"center",margin:"0 auto",fontSize:"4em",fontWeight:"700",lineHeight:"1",width:"80%"},Object(f.a)(n,e.breakpoints.down("md"),{fontSize:"3em"}),Object(f.a)(n,e.breakpoints.down("xs"),{fontSize:"2em",fontWeight:"500"}),n),margin:{margin:e.spacing(1)}}}));function ne(){var e=ce(),t=Object(c.useState)({movie:""}),a=Object(x.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)([]),i=Object(x.a)(o,2),l=i[0],s=i[1];return Object(T.jsxs)("div",{className:e.root,children:[Object(T.jsx)(M,{}),Object(T.jsx)("div",{children:Object(T.jsx)(S.a,{container:!0,children:Object(T.jsx)("div",{className:e.search,children:Object(T.jsxs)("div",{className:e.searchContent,children:[Object(T.jsx)("h1",{children:" Search a movie "}),Object(T.jsx)($.a,{className:e.inputInput,children:Object(T.jsx)(ee.a,{name:"query",variant:"outlined",autoComplete:"query",id:"query",value:n.movie,onChange:function(e){e.preventDefault(),r(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=620bcff5c65556bbc5abc99f82b7164a&language=en-US&page=1&include_adult=false&query=".concat(e.target.value)).then((function(e){return e.json()})).then((function(e){console.log(e),e.errors?s([]):s(e.results)}))},InputProps:{endAdornment:Object(T.jsxs)(te.a,{position:"end",children:[" ",Object(T.jsxs)("h1",{style:{color:"white"},children:[Object(T.jsx)(J.a,{})," "]})]}),className:e.inputRoot},color:"secondary"})})]})})})}),Object(T.jsx)("div",{children:Object(T.jsx)(S.a,{container:!0,spacing:3,className:e.container,children:l.length>0&&l.map((function(t){return Object(T.jsx)(S.a,{className:e.card,children:Object(T.jsx)(Q,{movie:t})},t.id)}))})})]})}var re=a(61),oe=a.n(re),ie=a(62),le=a.n(ie),se=Object(v.a)({root:{maxWidth:345},media:{height:140}});function de(e){var t=e.movie,a=se(),c=Object(o.b)();return Object(T.jsxs)(A.a,{className:a.root,children:[Object(T.jsxs)(D.a,{children:[Object(T.jsx)(_.a,{className:a.media,image:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),title:t.title}),Object(T.jsxs)(B.a,{children:[Object(T.jsx)(R.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(T.jsx)("small",{children:t.release_date}),Object(T.jsx)(R.a,{variant:"body2",color:"textSecondary",component:"p",children:t.overview})]})]}),Object(T.jsxs)(E.a,{disableSpacing:!0,children:[Object(T.jsx)(k.a,{title:"add to watchlater",onClick:function(e){var a,n=null===JSON.parse(localStorage.getItem("Watchlater"))?[]:JSON.parse(localStorage.getItem("Watchlater")),r=!0,o=Object(z.a)(n);try{for(o.s();!(a=o.n()).done;){if(a.value.id===t.id){console.log("present"),r=!1;break}}}catch(i){o.e(i)}finally{o.f()}r?(e.preventDefault(),c(G(t))):alert("movie already added into watchlater")},children:Object(T.jsx)(N.a,{"aria-label":"add to favorites",children:Object(T.jsx)(L.a,{})})}),Object(T.jsx)(k.a,{title:"delete from watched",onClick:function(e){e.preventDefault(),c(P(t))},children:Object(T.jsx)(N.a,{children:Object(T.jsx)(le.a,{})})})]})]})}var je=Object(v.a)((function(e){return{root:{overflow:"hidden",margin:0,marginTop:"5%"},container:{justifyContent:"center",marginTop:"5%"},card:{margin:"2%"},text:{color:"white",height:"70vh",display:"grid",alignItems:"center",textAlign:"center",fontFamily:"Bodoni MT Black"}}}));function he(){var e=je(),t=Object(o.c)((function(e){return e.watched}));return Object(T.jsxs)("div",{className:e.root,children:[Object(T.jsx)(M,{}),Object(T.jsx)("div",{children:0===t.length?Object(T.jsx)(oe.a,{children:Object(T.jsx)("h1",{className:e.text,children:" You have no movies saved in your Watched . "})}):Object(T.jsx)(S.a,{container:!0,spacing:3,className:e.container,children:t.length>0&&t.map((function(t){return Object(T.jsx)(S.a,{className:e.card,children:Object(T.jsx)(de,{movie:t})},t.id)}))})})]})}var be=Object(v.a)({root:{maxWidth:345},media:{height:140}});function Oe(e){var t=e.movie,a=be(),c=Object(o.b)();return Object(T.jsxs)(A.a,{className:a.root,children:[Object(T.jsxs)(D.a,{children:[Object(T.jsx)(_.a,{className:a.media,image:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),title:t.title}),Object(T.jsxs)(B.a,{children:[Object(T.jsx)(R.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(T.jsx)("small",{children:t.release_date}),Object(T.jsx)(R.a,{variant:"body2",color:"textSecondary",component:"p",children:t.overview})]})]}),Object(T.jsxs)(E.a,{disableSpacing:!0,children:[Object(T.jsx)(k.a,{title:"delete from watchlater",onClick:function(e){e.preventDefault(),c(Y(t))},children:Object(T.jsx)(N.a,{children:Object(T.jsx)(le.a,{})})}),Object(T.jsx)(k.a,{title:"add to watched",onClick:function(e){var a,n=null===JSON.parse(localStorage.getItem("Watched"))?[]:JSON.parse(localStorage.getItem("Watched")),r=!0,o=Object(z.a)(n);try{for(o.s();!(a=o.n()).done;){if(a.value.id===t.id){console.log("present"),r=!1;break}}}catch(i){o.e(i)}finally{o.f()}r?(e.preventDefault(),c(U(t))):alert("movie already added into watched")},children:Object(T.jsx)(N.a,{"aria-label":"add to favorites",children:Object(T.jsx)(F.a,{})})})]})]})}var me=Object(v.a)((function(e){return{root:{overflow:"hidden",margin:0,marginTop:"5%"},container:{justifyContent:"center",marginTop:"5%"},card:{margin:"2%"},text:{color:"white",height:"70vh",display:"grid",alignItems:"center",textAlign:"center",fontFamily:"Bodoni MT Black"}}}));function pe(){var e=me(),t=Object(o.c)((function(e){return e.watchlater}));return console.log(t.length),Object(T.jsxs)("div",{className:e.root,children:[Object(T.jsx)(M,{}),Object(T.jsx)("div",{children:0===t.length?Object(T.jsx)(oe.a,{children:Object(T.jsx)("h1",{className:e.text,children:" You have no movies saved in your Watchlater . "})}):Object(T.jsx)(S.a,{container:!0,spacing:3,className:e.container,children:t.length>0&&t.map((function(t){return Object(T.jsx)(S.a,{className:e.card,children:Object(T.jsx)(Oe,{movie:t})},t.id)}))})})]})}function ge(){return Object(T.jsx)("div",{children:Object(T.jsx)(Z,{})})}var ue=function(){return Object(T.jsx)(g.a,{children:Object(T.jsx)("div",{className:"App",children:Object(T.jsxs)(u.c,{children:[Object(T.jsx)(u.a,{path:"/MonMovies",exact:!0,component:ge}),Object(T.jsx)(u.a,{path:"/MonMovies/search",component:ne}),Object(T.jsx)(u.a,{path:"/MonMovies/watched",component:he}),Object(T.jsx)(u.a,{path:"/MonMovies/watchlater",component:pe})]})})})},xe=Object(i.d)(p,Object(i.c)(Object(i.a)(l.a)));r.a.render(Object(T.jsx)(o.a,{store:xe,children:Object(T.jsx)(ue,{})}),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.18369239.chunk.js.map