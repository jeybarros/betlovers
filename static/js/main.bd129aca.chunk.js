(this.webpackJsonpbetlovers=this.webpackJsonpbetlovers||[]).push([[0],{49:function(e,t,n){e.exports={item:"TeamRow_item__3vscW",checkbox:"TeamRow_checkbox__3nXbr",textInput:"TeamRow_textInput__2ZJYT"}},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a,c=n(2),r=n.n(c),s=n(23),i=n.n(s),o=n(22),u=n(13),j=n(52),b=n(53),l=n(14),d="SEARCH_TEAM",O="SEARCH_TEAM_SUCCESS",h="SEARCH_TEAM_FAILED",p={filteredTeams:[],error:null,isSearching:!1},x=function(e){return function(e){return e.entities.teams}(e).filteredTeams},m={entities:Object(u.c)({teams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{isSearching:!0});case O:return Object(l.a)(Object(l.a)({},e),{},{filteredTeams:Object(b.a)(t.payload.filteredTeams),isSearching:!1});case h:return Object(l.a)(Object(l.a)({},e),{},{error:t.payload.error,isSearching:!1});default:return e}}})},f=n(15),v=n.n(f),_=n(16),S=n(44),g=n(45),y=n(46),w=n.n(y),E=n(47),T=n.n(E),k=new(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.baseURL,a=void 0===n?"https://api-football-v1.p.rapidapi.com/v2":n,c=t.timeout,r=void 0===c?2e4:c;Object(S.a)(this,e),e.instance||(e.instance=T()(w.a.create({baseURL:a,timeout:r}),{maxRPS:24}),e.instance.interceptors.request.use((function(e){return Object(l.a)(Object(l.a)({},e),{},{headers:{"x-rapidapi-key":"ec42069b83msh138c318739dc607p1aa0e4jsn5d1fd5f96f84"}})})),Object.freeze(e.instance))}return Object(g.a)(e,[{key:"setGateway",value:function(t){e.instance.interceptors.request.use((function(e){return e.baseURL=t,e}))}},{key:"getInstance",value:function(){return e.instance}}]),e}()),N=n(48),R=k.getInstance(),C=(a=R,{searchTeam:function(){var e=Object(N.a)(v.a.mark((function e(t){var n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.get("".concat("teams","/search/").concat(t));case 3:return n=e.sent,c=n.data.api.teams,e.abrupt("return",c);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}),A=function(e){return{type:O,payload:{filteredTeams:e}}},I=v.a.mark(M);function M(e){var t,n;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload.name,a.prev=1,a.next=4,Object(_.b)(C.searchTeam,t);case 4:return n=a.sent,a.next=7,Object(_.c)(A(n));case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(1),a.next=13,Object(_.c)((c=a.t0,{type:h,payload:{error:c}}));case 13:case"end":return a.stop()}var c}),I,null,[[1,9]])}var H=v.a.mark(U);function U(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)([Object(_.d)(d,M)]);case 2:case"end":return e.stop()}}),H)}var D=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0}),n=Object(j.a)(),a=Object(u.e)(Object(u.c)(m),e,t(Object(u.a)(n)));return n.run(U),a},L=n(19),P=n(7),X="SEARCH YOUR TEAM",z="Please write item",B=n(3),J=function(){return Object(B.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(B.jsx)("h1",{style:{fontSize:"3rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#aaaaaa",textTransform:"uppercase",textAlign:"center"},children:X})})},q=n(28),F=n(27),V=function(e){var t=e.onSearch,n=Object(c.useState)(""),a=Object(q.a)(n,2),r=a[0],s=a[1];return Object(B.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.trim()?(t(r),s("")):alert(z)},className:"form-container",children:[Object(B.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:r,name:"team",onChange:function(e){s(e.target.value)}}),Object(B.jsx)("button",{className:"input-submit",children:Object(B.jsx)(F.b,{style:{color:"darkcyan",fontSize:"20px",marginTop:"2px"}})})]})},W=n(49),Y=n.n(W),G=function(e){var t=e.team;return Object(B.jsx)("li",{className:Y.a.item,children:Object(B.jsxs)("div",{children:[Object(B.jsx)("label",{children:t.name}),Object(B.jsx)("button",{children:Object(B.jsx)(F.a,{style:{color:"orangered",fontSize:"16px"}})})]})})};G.defaultProps={team:{}};var Z=G,K=function(e){var t=e.teams;return Object(B.jsx)("ul",{children:t.map((function(e){return Object(B.jsx)(Z,{team:e},e.team_id)}))})};K.defaultProps={teams:[]};var Q=K,$=function(){var e=Object(o.c)(x),t=Object(o.b)();return Object(B.jsx)("div",{className:"container",children:Object(B.jsxs)("div",{className:"inner",children:[Object(B.jsx)(J,{}),Object(B.jsx)(V,{onSearch:function(e){t(function(e){return{type:d,payload:{name:e}}}(e))}}),Object(B.jsx)(Q,{teams:e})]})})},ee=function(){return Object(B.jsx)("div",{children:Object(B.jsx)("h1",{children:"No match for this page"})})},te=n(50),ne=n(51),ae=function(){var e=Object(c.useState)(!1),t=Object(q.a)(e,2),n=t[0],a=t[1];return Object(B.jsxs)("nav",{className:"navBar",children:[Object(B.jsx)("button",{onClick:function(){a(!n)},children:n?Object(B.jsx)(te.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(B.jsx)(ne.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(B.jsx)("ul",{className:"menuNav ".concat(n?" showMenu":""),children:[{id:1,path:"/",text:"Home"}].map((function(e){return Object(B.jsx)("li",{children:Object(B.jsx)(L.b,{to:e.path,activeClassName:"active-link",onClick:function(){a(!1)},exact:!0,children:e.text})},e.id)}))})]})},ce=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(ae,{}),Object(B.jsxs)(P.c,{children:[Object(B.jsx)(P.a,{exact:!0,path:"/",children:Object(B.jsx)($,{})}),Object(B.jsx)(P.a,{path:"*",children:Object(B.jsx)(ee,{})})]})]})},re=(n(83),D({}));i.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(o.a,{store:re,children:Object(B.jsx)(L.a,{basename:"/betlovers",children:Object(B.jsx)(ce,{})})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.bd129aca.chunk.js.map