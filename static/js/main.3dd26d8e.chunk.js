(this.webpackJsonpsource=this.webpackJsonpsource||[]).push([[0],{184:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(47),r=n.n(i),o=(n(184),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,307)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))}),s=n(15),l=n(9),d=n(16),j=n(37),u=n(6),b=n(161),x=n(305),h=n(43),p=n.n(h),O=n(294),f=n(292),g=n(60),m=n(295),v=n(150),y=n.n(v),C=n(149),I=n.n(C),k=n(297),S=n(0);function w(e){var t=e.open,n=e.menuClick;return Object(S.jsx)(k.a,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},onClick:n,children:t?Object(S.jsx)(I.a,{}):Object(S.jsx)(y.a,{})})}var N=n(291);function z(){var e=Object(d.e)();var t=function(t,n){e.push("/".concat(n.value))};return Object(S.jsx)(f.a,{sx:{width:"100%"},children:[{name:"\uc790\uaca9\uc99d",value:"cbt"},{name:"\ud504\ub85c\uadf8\ub798\ubc0d",value:"programing"},{name:"\uc720\uc800",value:"users"}].map((function(e){return function(e){return Object(S.jsx)(N.a,{variant:"raised",size:"small",color:"link",children:e.name,onClick:function(n){return t(n,e)},style:{backgroundColor:"transparent"}},e.value)}(e)}))})}var A=n(272),L=n(108),T=n(152),M=n.n(T),H=n(271),B=n(299),U=n(162);function E(e){var t=e.userInfo,n=a.a.useState(null),c=Object(l.a)(n,2),i=c[0],r=c[1],o=Object(d.e)(),s=new g.a;Boolean(i);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(k.a,{onClick:function(e){r(e.currentTarget)},children:Object(S.jsx)(M.a,{})}),Object(S.jsx)(U.a,{id:"menu-appbar",style:{zIndex:99999},anchorEl:i,anchorOrigin:{vertical:"bottom",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(i),onClose:function(){r(null)},children:null==t?Object(S.jsx)(B.a,{onClick:function(e){o.push("/login")},children:"Sign In"}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(H.a,{margin:2,children:[Object(S.jsx)(L.a,{variant:"body2",children:Object(S.jsx)("strong",{children:t.userName})}),Object(S.jsx)(L.a,{variant:"caption",children:t.email})]}),Object(S.jsx)(A.a,{}),Object(S.jsx)(B.a,{onClick:function(e){r(null),o.push("/settings?id=".concat(t.id)),console.log(t.id)},children:"Settings"}),Object(S.jsx)(B.a,{style:{textAlign:"right"},onClick:function(e){r(null),s.remove(".cbt.devncore.org.authentication.session",{path:"/"});var t=s.get(".cbt.devncore.org.authentication.session");console.log("remove token:",t),window.location.href="/"},children:"Sign Out"})]})})]})}function P(e){var t=a.a.useState(null),n=Object(l.a)(t,2),c=n[0],i=n[1],r=e.open,o=e.openChanged,s=(new g.a).get(".cbt.devncore.org.authentication.session");return console.log("toplayer tkoen:",s),a.a.useEffect((function(){if(null!=s){console.log("exists login token: ",s);var e={id:s};p.a.post("https://ncoreapi.azurewebsites.net/api/Account/getLoginUser",e,{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"*","Access-Control-Allow-Methods":"*"}}).then((function(e){var t=e.data;i({id:t.id,userName:t.userName,userId:t.UserId,email:t.email,phone:t.phone,name:t.name,school:t.school,gitHubId:t.gitHubId,blog:t.blog,aboutMe:t.aboutMe}),console.log("loginUserInfo: ",c)})).catch((function(e){console.log(e)}))}}),[s]),Object(S.jsx)(O.a,{position:"relative",elevation:1,sx:{zIndex:1e4},children:Object(S.jsxs)(m.a,{variant:"dense",children:[Object(S.jsx)(w,{menuClick:function(){o(!r)}}),Object(S.jsx)(f.a,{sx:{display:{xs:"none",md:"flex"}}}),Object(S.jsx)(z,{}),Object(S.jsx)(f.a,{sx:{flexGrow:1}}),Object(S.jsx)(f.a,{sx:{display:{xs:"flex",md:"none"}}}),Object(S.jsx)(E,{userInfo:c})]})})}var R=n(287),q=n(4),V=n(164),F=n(213),W=n(301),D=n(289),G=n(49),K=n(300),Z=n(124);function J(e){return Object(S.jsx)(V.a,Object(s.a)(Object(s.a)({fontSize:"inherit",style:{width:14,height:14,color:"#333333"}},e),{},{children:Object(S.jsx)("path",{d:"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"})}))}function Y(e){return Object(S.jsx)(V.a,Object(s.a)(Object(s.a)({fontSize:"inherit",style:{width:14,height:14,color:"#333333"}},e),{},{children:Object(S.jsx)("path",{d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"})}))}function _(e){return Object(S.jsx)(V.a,Object(s.a)(Object(s.a)({fontSize:"inherit",style:{width:14,height:14,color:"#34568B"}},e),{},{children:Object(S.jsx)("path",{d:"M20 5L20 19L4 19L4 5H20M20 3H4C2.89 3 2 3.89 2 5V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V5C22 3.89 21.11 3 20 3M18 15H6V17H18V15M10 7H6V13H10V7M12 9H18V7H12V9M18 11H12V13H18V11Z"})}))}function Q(e){var t=Object(Z.useSpring)({from:{opacity:0,transform:"translate3d(20px,0,0)"},to:{opacity:e.in?1:0,transform:"translate3d(".concat(e.in?0:20,"px,0,0)")}});return Object(S.jsx)(Z.animated.div,{style:t,children:Object(S.jsx)(K.a,Object(s.a)({},e))})}var X=Object(u.a)((function(e){return Object(S.jsx)(D.a,Object(s.a)(Object(s.a)({},e),{},{TransitionComponent:Q}))}))((function(e){var t,n=e.theme;return t={},Object(q.a)(t,"& .".concat(G.a.iconContainer),{"& .close":{opacity:.3}}),Object(q.a)(t,"& .".concat(G.a.group),{marginLeft:15,paddingLeft:0,borderLeft:"1px dashed ".concat(Object(F.a)(n.palette.text.primary,.2))}),Object(q.a)(t,"& .".concat(G.a.content),{"& .MuiTreeItem-label":{paddingTop:"4px",paddingBottom:"4px",paddingLeft:"0px",fontSize:"12px",marginLeft:0,fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),t}));function $(e){var t=c.useState([]),n=Object(l.a)(t,2),a=n[0],i=n[1];c.useEffect((function(){fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/menus.yaml").then((function(e){return e.blob()})).then((function(e){return e.text()})).then((function(e){i(Object(j.a)(e))}))}),[]);var r=Object(d.e)();return Object(S.jsx)(W.a,{defaultExpanded:["1","2","3","4","5"],defaultCollapseIcon:Object(S.jsx)(J,{}),defaultExpandIcon:Object(S.jsx)(Y,{}),defaultEndIcon:Object(S.jsx)(_,{}),sx:{height:264,flexGrow:1,maxWidth:400,margin:"0px",overflowY:"auto"},children:function e(t){return a.filter((function(e){return e.parentId===t})).map((function(t){return Object(S.jsx)(X,{onClick:function(e){return function(e,t){"W"===t.type&&r.push("/cbt/id=".concat(t.pageId))}(0,t)},nodeId:t.nodeId.toString(),label:t.label,children:e(t.nodeId.toString())},t.nodeId.toString())}))}("-1")})}var ee=n(298),te=n(302),ne=n(273),ce=n(274),ae=n(155),ie=n.n(ae),re=Object(u.a)(ee.a)({"& .MuiListItemButton-root":{paddingLeft:10,paddingRight:10,backgroundColor:"#fcfcfc"},"& .MuiListItemIcon-root":{minWidth:0,marginRight:5},"& .MuiSvgIcon-root":{fontSize:0}});function oe(e){return Object(S.jsx)(re,{component:"nav",disablePadding:!0,children:Object(S.jsxs)(te.a,{component:"a",href:"#customized-list",children:[Object(S.jsx)(ne.a,{sx:{fontSize:20},children:Object(S.jsx)(ie.a,{})}),Object(S.jsx)(ce.a,{sx:{my:0},primary:"\ud544\uae30\uc2dc\ud5d8 \uae30\ucd9c\ubb38\uc81c \ubaa9\ub85d",primaryTypographyProps:{fontSize:14,fontWeight:"medium",letterSpacing:0}})]})})}function se(e){var t=e.open;return Object(S.jsxs)(R.a,{sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box",position:"absolute"}},variant:"persistent",anchor:"left",open:t,children:[Object(S.jsx)(oe,{}),Object(S.jsx)(A.a,{}),Object(S.jsx)($,{})]})}n(211);var le=n(283),de=n(296),je=n(293);function ue(e){var t=e.children,n=void 0===t?"Next":t;return Object(S.jsx)(N.a,Object(s.a)(Object(s.a)({},e),{},{children:n,variant:"contained",sx:{mt:1,mr:1}}))}var be=n(303),xe=n(290),he=n(304),pe=n(282),Oe=n(285);function fe(e){return Object(S.jsx)(N.a,Object(s.a)(Object(s.a)({},e),{},{children:"Back",sx:{mt:1,mr:1}}))}function ge(e){e.cbtId;var t=e.innings;return e.required(t.filter((function(e){return e.isChecked})).length>0),Object(S.jsx)("div",{style:{backgroundColor:"#ffffff",borderTop:"1px solid #dddddd",borderLeft:"1px solid #dddddd",borderRight:"1px solid #dddddd",borderRadius:0,marginTop:20,marginBottom:20,padding:"0px 0px 0px 0px"},children:t.map((function(n,c){return Object(S.jsx)("div",{style:{borderBottom:"1px solid #eeeeee"},children:Object(S.jsx)(de.a,{label:Object(S.jsx)(L.a,{children:n.year+"\ub144 - "+n.inning+"\ud68c",variant:"subtitle2"}),control:Object(S.jsx)(le.a,{defaultChecked:n.isChecked,style:{marginLeft:"20px"},onChange:function(c){return function(n,c){console.log("id: ",n.target.checked),t.filter((function(e){return e.id==c}))[0].isChecked=n.target.checked,console.log("checked:",t.filter((function(e){return e.isChecked})).length),e.required(t.filter((function(e){return e.isChecked})).length>0)}(c,n.id)}})})},n.id)}))})}function me(e){var t=e.cbtId,n=e.subjects;return e.required(n.filter((function(e){return e.isChecked})).length>0),Object(S.jsx)("div",{style:{backgroundColor:"#ffffff",borderTop:"1px solid #dddddd",borderLeft:"1px solid #dddddd",borderRight:"1px solid #dddddd",borderRadius:0,marginTop:20,marginBottom:20,padding:"0px 0px 0px 0px"},children:n.filter((function(e){return e.testId==t})).map((function(t,c){return Object(S.jsx)("div",{style:{borderBottom:"1px solid #eeeeee"},children:Object(S.jsx)(de.a,{label:Object(S.jsx)(L.a,{children:t.subjectName,variant:"subtitle2"}),control:Object(S.jsx)(le.a,{style:{marginLeft:"20px"},defaultChecked:t.isChecked,onChange:function(c){return function(t,c){n.find((function(e){return e.id==c})).isChecked=t.target.checked,e.required(n.filter((function(e){return e.isChecked})).length>0)}(c,t.id)}})})},t.id)}))})}var ve=n(281),ye=n(275);function Ce(e){e.cbtId;var t=e.testTypes,n=t.find((function(e){return e.isChecked})).count;return Object(S.jsx)("div",{style:{backgroundColor:"#ffffff",borderTop:"1px solid #dddddd",borderLeft:"1px solid #dddddd",borderRight:"1px solid #dddddd",borderRadius:0,marginTop:20,marginBottom:20,padding:"0px 0px 0px 0px"},children:Object(S.jsx)(ye.a,{"aria-label":"gender",name:"radio-buttons-group",defaultValue:n,onChange:function(e){return function(e){t.map((function(e){return e.isChecked=!1})),t.find((function(t){return t.id==e.target.id})).isChecked=e.target.checked}(e)},children:t.map((function(e,t){return Object(S.jsx)("div",{style:{borderBottom:"1px solid #eeeeee"},children:Object(S.jsx)(de.a,{label:Object(S.jsx)(L.a,{children:"".concat(e.count," \ubb38\uc81c"),variant:"subtitle2"}),control:Object(S.jsx)(ve.a,{id:e.id,value:e.count,style:{marginLeft:"20px"}})})},e.id)}))})})}function Ie(e){Object(d.f)().search;var t=e.cbtId,n=a.a.useState(0),c=Object(l.a)(n,2),i=c[0],r=c[1],o=a.a.useState(!1),s=Object(l.a)(o,2),j=s[0],u=s[1],b=a.a.useState(!1),x=Object(l.a)(b,2),h=x[0],p=x[1];a.a.useEffect((function(){console.log("cbtstepper useEffect loaded")}),[]);var O=function(){r((function(e){return e+1}))},g=function(){r((function(e){return e-1}))};return Object(S.jsxs)(f.a,{sx:{maxWidth:538},children:[Object(S.jsxs)(Oe.a,{activeStep:i,orientation:"vertical",children:[Object(S.jsxs)(be.a,{children:[Object(S.jsx)(pe.a,{children:"\ud68c\ucc28 \uc120\ud0dd"}),Object(S.jsxs)(he.a,{children:[Object(S.jsxs)(f.a,{style:{marginTop:"4px",marginBottom:"14px"},children:[Object(S.jsx)(L.a,{children:"\ud68c\ucc28\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",variant:"h6"}),Object(S.jsx)(L.a,{children:"\uc5ec\ub7ec \ud68c\ucc28\ub97c \uc120\ud0dd\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",variant:"caption"})]}),Object(S.jsx)(ge,{cbtId:t,innings:e.innings,required:function(e){u(e),console.log("firstRequired",e)}}),Object(S.jsxs)(f.a,{sx:{mb:2},children:[Object(S.jsx)(ue,{disabled:!j,onClick:function(){O()}}),Object(S.jsx)(fe,{disabled:!0,onClick:g})]})]})]},"1"),Object(S.jsxs)(be.a,{children:[Object(S.jsx)(pe.a,{children:"\uacfc\ubaa9 \uc120\ud0dd"}),Object(S.jsxs)(he.a,{children:[Object(S.jsxs)(f.a,{style:{marginTop:"4px",marginBottom:"14px"},children:[Object(S.jsx)(L.a,{children:"\uacfc\ubaa9\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",variant:"h6"}),Object(S.jsx)(L.a,{children:"\uc6d0\ud558\ub294 \uacfc\ubaa9\ub9cc \uc120\ud0dd\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",variant:"caption"})]}),Object(S.jsx)(me,{cbtId:t,subjects:e.subjects,required:function(e){p(e),console.log("secondRequired",e)}}),Object(S.jsxs)(f.a,{sx:{mb:2},children:[Object(S.jsx)(ue,{disabled:!h,onClick:O}),Object(S.jsx)(fe,{onClick:g})]})]})]},"2"),Object(S.jsxs)(be.a,{children:[Object(S.jsx)(pe.a,{children:"\ucd9c\uc81c \ubb38\ud56d\uc218"}),Object(S.jsxs)(he.a,{children:[Object(S.jsx)(f.a,{style:{marginTop:"4px",marginBottom:"14px"},children:Object(S.jsx)(L.a,{children:"\ubb38\uc81c \uac1c\uc218\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",variant:"h6"})}),Object(S.jsx)(Ce,{cbtId:t,testTypes:e.testTypes}),Object(S.jsxs)(f.a,{sx:{mb:2},children:[Object(S.jsx)(ue,{onClick:O,children:"Finish"}),Object(S.jsx)(fe,{onClick:g})]})]})]},"3")]}),3===i&&Object(S.jsxs)("div",{style:{backgroundColor:"#ffffff",borderTop:"1px solid #dddddd",borderLeft:"1px solid #dddddd",borderRight:"1px solid #dddddd",borderRadius:0,marginTop:20,marginBottom:20,padding:"20px 20px 20px 20px"},children:[function(){var t=e.innings.find((function(e){return e.isChecked})),n=e.innings.filter((function(e){return e.isChecked})).length;return Object(S.jsxs)(H.a,{direction:"row",spacing:1,children:[Object(S.jsx)(xe.a,{size:"small",label:"\ud68c\ucc28",color:"success",variant:"outlined"}),Object(S.jsx)(L.a,{variant:"body1",style:{padding:"0px 0px 0px 10px"},children:"".concat(t.year,"\ub144 ").concat(t.inning,"\ud68c")}),Object(S.jsx)(L.a,{variant:"caption",style:{marginTop:"2px"},children:n>1?" \ud3ec\ud568 ".concat(n,"\ud68c\ucc28"):"\ub2e8\uc77c \ud68c\ucc28"})]})}(),function(){var t=e.subjects.find((function(e){return e.isChecked})),n=e.subjects.filter((function(e){return e.isChecked})).length;return Object(S.jsxs)(H.a,{direction:"row",spacing:1,style:{marginTop:"15px"},children:[Object(S.jsx)(xe.a,{size:"small",label:"\uacfc\ubaa9",color:"success",variant:"outlined"}),Object(S.jsx)(L.a,{variant:"body1",style:{padding:"0px 0px 0px 10px"},children:"".concat(t.subjectName)}),Object(S.jsx)(L.a,{variant:"caption",style:{marginTop:"2px"},children:n>1?" \ud3ec\ud568 ".concat(n,"\uacfc\ubaa9"):"\ub2e8\uc77c \uacfc\ubaa9"})]})}(),function(){var t=e.testTypes.find((function(e){return e.isChecked}));return Object(S.jsxs)(H.a,{direction:"row",spacing:1,style:{marginTop:"15px"},children:[Object(S.jsx)(xe.a,{size:"small",label:"\ubb38\ud56d\uc218",color:"success",variant:"outlined"}),Object(S.jsx)(L.a,{variant:"body1",children:"\ucd1d ".concat(t.count,"\ubb38\uc81c")})]})}(),Object(S.jsx)("br",{}),Object(S.jsx)(N.a,{variant:"contained",size:"small",onClick:e.start,sx:{mt:1,mr:1},children:"\uc2dc\uc791"}),Object(S.jsx)(N.a,{onClick:function(){r(0)},size:"small",sx:{mt:1,mr:1},style:{color:"#ff5233"},children:"\ucd08\uae30\ud654"})]})]})}var ke=n(156),Se=n.n(ke);function we(e){var t=Object(S.jsx)(Se.a,{});return Object(S.jsx)(k.a,Object(s.a)(Object(s.a)({},e),{},{size:"small",children:t}))}Object(u.a)(je.a)((function(e){var t=e.theme;return Object(s.a)(Object(s.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}));function Ne(e){var t=Object(d.e)(),n=a.a.useState(null),c=Object(l.a)(n,2),i=(c[0],c[1]),r=a.a.useState(-1),o=Object(l.a)(r,2),s=(o[0],o[1],a.a.useState([])),u=Object(l.a)(s,2),b=u[0],x=u[1],h=a.a.useState([]),p=Object(l.a)(h,2),O=p[0],g=p[1],m=a.a.useState([]),v=Object(l.a)(m,2),y=v[0],C=v[1],I=a.a.useState(!1),k=Object(l.a)(I,2),w=k[0],N=(k[1],e.cbtId);return a.a.useEffect((function(){fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/0/202101.yaml").then((function(e){return e.blob()})).then((function(e){return e.text()})).then((function(e){i(Object(j.a)(e))})),fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/innings.yaml").then((function(e){return e.blob()})).then((function(e){return e.text()})).then((function(e){console.log("inning loaded",N);var t=Object(j.a)(e).filter((function(e){return e.testId==N}));x(t)})),fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/subjects.yaml").then((function(e){return e.blob()})).then((function(e){return e.text()})).then((function(e){var t=Object(j.a)(e).filter((function(e){return e.testId==N}));g(t)})),fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/testTypes.yaml").then((function(e){return e.blob()})).then((function(e){return e.text()})).then((function(e){var t=Object(j.a)(e).filter((function(e){return e.testId==N}));C(t)}))}),[]),Object(S.jsx)("div",{className:"frame-content",children:Object(S.jsxs)(f.a,{style:{minWidth:"200px",maxWidth:"600px",borderRight:"1px solid #dddddd",backgroundColor:"#f7f7f7"},children:[Object(S.jsx)("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",borderBottom:"1px solid #dddddd",padding:"4px 24px 4px 24px",height:"36px",position:"sticky",top:0,zIndex:9999},children:Object(S.jsx)(H.a,{direction:"row",children:Object(S.jsx)(L.a,{variant:"h7",children:e.title,style:{marginTop:"8px"}})})}),w?null:Object(S.jsx)(f.a,{margin:3,children:Object(S.jsx)(Ie,{cbtId:N,innings:b,subjects:O,testTypes:y,start:function(){var e=y.find((function(e){return e.isChecked})),n=O.filter((function(e){return e.isChecked})).map((function(e){return e.sort}));sessionStorage.setItem("testTypes",e.count),sessionStorage.setItem("subjects",n),t.push("/cbt/test/id=".concat(N))}})})]})})}var ze=n(219);Object(u.a)(je.a)((function(e){var t=e.theme;return Object(s.a)(Object(s.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}));function Ae(e){var t=Object(d.e)(),n=a.a.useState(null),c=Object(l.a)(n,2),i=c[0],r=c[1],o=e.cbtId,s="",u=sessionStorage.getItem("testTypes"),b=sessionStorage.getItem("subjects");function x(e){var t=-1;return e.map((function(e,n){"y"===e.isAnswer&&(t=n+1)})),t}return console.log("subjects: ",b),console.log("size: ",u),a.a.useEffect((function(){console.log("cbt useEffect loaded"),fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/0/202101.yaml").then((function(e){return e.blob()})).then((function(e){return e.text()})).then((function(e){r(Object(j.a)(e))}))}),[]),Object(S.jsx)("div",{className:"frame-content",children:Object(S.jsxs)(f.a,{style:{minWidth:"200px",maxWidth:"600px",borderRight:"1px solid #dddddd",backgroundColor:"#f7f7f7"},children:[Object(S.jsx)("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",borderBottom:"1px solid #dddddd",padding:"4px 24px 4px 24px",height:"36px",position:"sticky",top:0,zIndex:9999},children:Object(S.jsxs)(H.a,{direction:"row",children:[Object(S.jsx)(L.a,{variant:"h7",children:e.title,style:{marginTop:"8px"}}),Object(S.jsx)(f.a,{sx:{flexGrow:1}}),Object(S.jsx)(we,{onClick:function(){t.push("/cbt/id=".concat(o))}})]})}),Object(S.jsx)(f.a,{margin:0,children:null==i?null:i.filter((function(e){return b.includes(e.subject)})).slice(0,u).map((function(e,t){return Object(S.jsxs)(f.a,{children:[s!=e.subjectName?Object(S.jsx)(f.a,{style:{margin:"10px 25px 0px 0px",textAlign:"right"},children:Object(S.jsx)(L.a,{children:"\uacfc\ubaa9: ".concat((c=e.subjectName,s=c,c)),variant:"caption"})}):null,Object(S.jsxs)("div",{className:"paper-question",style:{border:""},children:[Object(S.jsx)(f.a,{className:"papar-question-content",children:Object(S.jsx)(L.a,{variant:"body1",children:"".concat(t+1,". ").concat(e.question)})}),Object(S.jsx)(f.a,{children:null!=e.infos?e.infos.map((function(e,t){return Object(S.jsx)(f.a,{children:Object(S.jsx)(f.a,{className:"papar-question-content",children:Object(S.jsx)("img",{src:e.src,style:{maxWidth:"400px"}})})},t)})):null}),Object(S.jsx)(ze.a,{children:(n=e.answers,n.map((function(e,t){return Object(S.jsx)(de.a,{className:"papar-answer-content",style:{margin:"0px 15px 0px 15px"},label:Object(S.jsx)(L.a,{variant:"body2",style:{margin:"2px 0px 0px 0px"},children:"".concat(t+1,". ").concat(e.example)},t.toString()),control:Object(S.jsx)(le.a,{defaultChecked:e.isChecked,style:{marginLeft:"0px"},onChange:function(t){e.id}})},t)})))}),Object(S.jsx)(f.a,{style:{height:"10px"}}),Object(S.jsx)(f.a,{className:"papar-question-content",style:{display:"none"},children:Object(S.jsxs)(L.a,{children:["\uc815\ub2f5 ",Object(S.jsx)("span",{style:{color:"#ffffff"},children:x(e.answers)})]})})]})]},e.seq);var n,c}))}),Object(S.jsx)("div",{style:{height:"60px"}})]})})}function Le(e){return Object(S.jsx)("div",{children:"Dashboard"})}n(42),n(67),n(157);function Te(e){window.location.href="https://ncoreapi.azurewebsites.net/Identity/Account/Login?ReturnUrl=~/cbt";return Object(S.jsx)(S.Fragment,{})}function Me(e){var t=Object(d.e)(),n=new g.a,c=Object(d.f)(),a=new URLSearchParams(c.search).get("id");console.log("ID",a),n.set(".cbt.devncore.org.authentication.session",a);var i=n.get(".cbt.devncore.org.authentication.session");return t.push("/"),console.log(i),Object(S.jsx)(S.Fragment,{children:"Authentication...."})}function He(e){var t=a.a.useState({}),n=Object(l.a)(t,2),c=n[0],i=n[1],r=a.a.useState({}),o=Object(l.a)(r,2),s=(o[0],o[1],Object(d.f)()),j=(Object(d.e)(),new URLSearchParams(s.search).get("id"));return a.a.useEffect((function(){j=new URLSearchParams(s.search).get("id"),console.log("profileId:",j);var e={id:j};p.a.post("https://ncoreapi.azurewebsites.net/api/Account/GetUser",e,{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"*","Access-Control-Allow-Methods":"*"}}).then((function(e){var t=e.data;i({id:t.id,userName:t.userName,userId:t.UserId,email:t.email,phone:t.phone,name:t.name,school:t.school,gitHubId:t.gitHubId,blog:t.blog,aboutMe:t.aboutMe}),console.log("datas")})).catch((function(e){console.log(e)}))}),[]),Object(S.jsx)("div",{className:"hstyle",children:Object(S.jsx)("div",{children:Object(S.jsxs)(H.a,{spacing:1,children:[Object(S.jsx)("div",{className:"stylestxt1",children:"User Profile"}),Object(S.jsx)("div",{className:"stylestxt2",children:"\uc544\uc774\ub514"}),Object(S.jsx)("div",{className:"stylestxt3",children:c.id}),Object(S.jsx)(L.a,{variant:"caption",children:"ID \uc815\ubcf4\uc785\ub2c8\ub2e4."}),Object(S.jsx)(A.a,{}),Object(S.jsx)("div",{className:"stylestxt2",children:"\uc774\ub984"}),Object(S.jsx)("div",{className:"stylestxt3",children:c.userName}),Object(S.jsx)(L.a,{variant:"caption",children:"\ub2f9\uc2e0\uc758 \uc774\ub984 \uc785\ub2c8\ub2e4."}),Object(S.jsx)(A.a,{}),Object(S.jsx)("div",{className:"stylestxt2",children:"\ud578\ub4dc\ud3f0"}),Object(S.jsx)("div",{className:"stylestxt3",children:c.phone}),Object(S.jsx)(L.a,{variant:"caption",children:"\ud578\ub4dc\ud3f0 \ubc88\ud638\uc785\ub2c8\ub2e4."}),Object(S.jsx)(A.a,{}),Object(S.jsx)("div",{className:"stylestxt2",children:"\uc774\uba54\uc77c"}),Object(S.jsx)("div",{className:"stylestxt3",children:c.email}),Object(S.jsx)(L.a,{variant:"caption",children:"\uc774\uba54\uc77c \uc8fc\uc18c\uc785\ub2c8\ub2e4."}),Object(S.jsx)(A.a,{}),Object(S.jsx)("div",{className:"stylestxt2",children:"\ud559\uad50"}),Object(S.jsx)("div",{className:"stylestxt3",children:c.school}),Object(S.jsx)(L.a,{variant:"caption",children:"\ud559\uad50\ub294 \uc911\ubcf5\uc73c\ub85c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),Object(S.jsx)(A.a,{}),Object(S.jsx)("div",{className:"stylestxt2",children:"\uae43\ud5c8\ube0c"}),Object(S.jsx)("div",{className:"stylestxt3",children:c.gitHubId}),Object(S.jsx)(L.a,{variant:"caption",children:"Github \uc544\uc774\ub514 \uc815\ubcf4 \uc785\ub2c8\ub2e4."}),Object(S.jsx)(A.a,{}),Object(S.jsx)("div",{className:"stylestxt2",children:"\ube14\ub85c\uadf8"}),Object(S.jsx)("div",{className:"stylestxt3",children:c.blog}),Object(S.jsx)(L.a,{variant:"caption",children:"\ube14\ub85c\uadf8 \uc8fc\uc18c\uc785\ub2c8\ub2e4."}),Object(S.jsx)(A.a,{}),Object(S.jsx)("div",{className:"stylestxt2",children:"AboutMe"}),Object(S.jsx)("div",{className:"stylestxt3",children:c.aboutMe}),Object(S.jsx)(L.a,{variant:"caption",children:"\uc790\uae30\uc18c\uac1c \uc815\ubcf4\uc785\ub2c8\ub2e4."}),Object(S.jsx)(A.a,{})]})})})}var Be=n(288),Ue=n(278),Ee=n(286),Pe=n(160),Re=n.n(Pe),qe=n(159),Ve=n.n(qe);function Fe(e){var t=e.user,n=e.index,c=a.a.useState("none"),i=Object(l.a)(c,2),r=i[0],o=i[1],s=a.a.useState(0),d=Object(l.a)(s,2),j=d[0],u=d[1],b=Object(Ue.a)({root:{margin:"0px 0px 10px 10px",padding:"10px 10px 10px 10px",borderRadius:8},thumbnail:{width:40,borderRadius:8,marginRight:"10px"},badge:{margin:10},detail:{display:r}})();a.a.useEffect((function(){u(Math.floor(12*Math.random()+3))}),[]);return Object(S.jsx)(Be.a,{item:!0,lg:3,md:4,sm:6,xs:12,children:Object(S.jsx)(je.a,{className:b.root,variant:"outlined",onClick:function(e){o("none"==r?"block":"none")},children:Object(S.jsxs)(Be.a,{container:!0,children:[Object(S.jsx)(Be.a,{item:!0,children:function(e){return Object(S.jsx)("img",{className:b.thumbnail,src:"./images/people".concat(e,".png")})}(n)}),Object(S.jsx)(Be.a,{item:!0,xs:!0,children:Object(S.jsxs)(H.a,{children:[Object(S.jsx)(L.a,{variant:"caption",children:t.userName}),Object(S.jsx)(L.a,{variant:"body2",children:"".concat(j,"\uac1c\uc758 \uc790\uaca9\uc99d \ubcf4\uc720")}),Object(S.jsxs)(H.a,{className:b.detail,children:[Object(S.jsx)(L.a,{variant:"caption",children:"\uc774\ub984: "+t.name}),Object(S.jsx)("br",{}),Object(S.jsx)(L.a,{variant:"caption",children:"\ud578\ub4dc\ud3f0: "+t.phone}),Object(S.jsx)("br",{}),Object(S.jsx)(L.a,{variant:"caption",children:"\uc774\uba54\uc77c: "+t.email}),Object(S.jsx)("br",{}),Object(S.jsx)(L.a,{variant:"caption",children:"\ud559\uad50: "+t.school}),Object(S.jsx)("br",{}),Object(S.jsx)(L.a,{variant:"caption",children:"\uae43\ud5c8\ube0cID: "+t.gitHubId}),Object(S.jsx)("br",{}),Object(S.jsx)(L.a,{variant:"caption",children:"\ube14\ub85c\uadf8: "+t.blog}),Object(S.jsx)("br",{}),Object(S.jsx)(L.a,{variant:"caption",children:"AboutMe: "+t.aboutMe}),Object(S.jsx)("br",{}),Object(S.jsx)(k.a,{size:"small",children:Object(S.jsx)(Ve.a,{fontSize:"small"}),onClick:function(n){return function(t,n){e.userClick(t,n)}(n,t)}})]})]})}),Object(S.jsx)(Be.a,{item:!0,children:Object(S.jsx)(Ee.a,{className:b.badge,badgeContent:j,color:"primary",fontSize:"small",children:Object(S.jsx)(Re.a,{color:"action",fontSize:"small"})})})]})})},t.id)}function We(e){var t,n=(new g.a).get(".cbt.devncore.org.authentication.session"),c=a.a.useState([]),i=Object(l.a)(c,2),r=i[0],o=i[1],s=Object(d.e)();a.a.useEffect((function(){console.log("users :");var e={id:n},t={method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"*","Access-Control-Allow-Methods":"*",".cbt.devncore.org.authentication.session":n}};p.a.post("https://ncoreapi.azurewebsites.net/api/Account/getUsers",e,t).then((function(e){var t=e.data.map((function(e){return{id:e.id,userName:e.userName,userId:e.UserId,email:e.email,phone:e.phone,name:e.name,school:e.school,gitHubId:e.gitHubId,blog:e.blog,aboutMe:e.aboutMe}}));o(t),console.log("f :")})).catch((function(e){console.log(e)}))}),[]);var j=function(e,t){s.push("/profile?id=".concat(t.id))};return Object(S.jsx)(Be.a,(t={container:!0,style:{maxWidth:1200}},Object(q.a)(t,"style",{padding:"10px 10px 10px 0px"}),Object(q.a)(t,"children",r.map((function(e,t){return Object(S.jsx)(Fe,{user:e,index:t,userClick:j},t)}))),t))}var De=n(277);function Ge(e){var t=a.a.useState(null),n=Object(l.a)(t,2),c=n[0],i=n[1],r=a.a.useState([]),o=Object(l.a)(r,2),j=o[0],u=o[1],b=Object(d.f)(),x=new URLSearchParams(b.search).get("id");console.log("ID: ",x);var h=Object(d.e)(),O=a.a.useState("james"),f=Object(l.a)(O,2),g=(f[0],f[1],{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"*","Access-Control-Allow-Methods":"*"}});a.a.useEffect((function(){var e={id:x};console.log(e),p.a.post("https://ncoreapi.azurewebsites.net/api/Account/getUserExternals",e,g).then((function(e){var t=e.data;i({id:t.id,userName:t.userName,email:t.email,phone:t.phone,userId:t.UserId,aboutMe:t.aboutMe,blog:t.blog,gitHubId:t.gitHubId,school:t.school,certificate:t.certificate});var n=t.externals.map((function(e){return{loginProvider:e.loginProvider,providerKey:e.providerKey}}));u(n),console.log("Users:",c)})).catch((function(e){console.log(e)}))}),[]);return Object(S.jsx)(H.a,{style:{padding:50,maxWidth:480,background:"white"},spacing:1,children:null!=c?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",fontSize:25,marginBottom:0,fontWeight:"bold"},children:["\uc0ac\uc6a9\uc790 \uc815\ubcf4\ubcc0\uacbd",Object(S.jsx)(N.a,{style:{marginLeft:"auto"},variant:"contained",size:"small",color:"success",onClick:function(e){p.a.post("https://ncoreapi.azurewebsites.net/api/Account/updateUser",c,g).then((function(e){e.data;i({id:c.id,userName:c.userName,phone:c.phone,aboutMe:c.aboutMe,blog:c.blog,gitHubId:c.gitHubId,school:c.school,certificate:c.certificate}),console.log("Users:",c),h.push("/profile?id=".concat(c.id))})).catch((function(e){console.log(e)}))},children:"Update"})]}),Object(S.jsxs)("div",{style:{fontSize:12},children:["ID: "+c.id," "]}),Object(S.jsx)("div",{style:{fontSize:12,marginBottom:10},children:"Email: "+c.email}),Object(S.jsx)(De.a,{required:!0,size:"small",id:"outlined-size-small",label:"Name",inputProps:{maxLength:12},variant:"outlined",defaultValue:c.userName,onChange:function(e){return i(Object(s.a)(Object(s.a)({},c),{},{userName:e.target.value}))}}),Object(S.jsx)("br",{}),Object(S.jsx)(De.a,{required:!0,size:"small",id:"outlined-size-small",label:"Phone",inputProps:{maxLength:11},variant:"outlined",defaultValue:c.phone,onChange:function(e){return i(Object(s.a)(Object(s.a)({},c),{},{phone:e.target.value}))}}),Object(S.jsx)("br",{}),Object(S.jsx)(De.a,{required:!0,size:"small",id:"outlined-size-small",label:"GithubId",variant:"outlined",defaultValue:c.gitHubId,onChange:function(e){return i(Object(s.a)(Object(s.a)({},c),{},{gitHubId:e.target.value}))}}),Object(S.jsx)(De.a,{required:!0,size:"small",id:"outlined-size-small",label:"Blog",variant:"outlined",defaultValue:c.blog,onChange:function(e){return i(Object(s.a)(Object(s.a)({},c),{},{blog:e.target.value}))}}),Object(S.jsx)("br",{}),Object(S.jsx)(De.a,{required:!0,size:"small",id:"outlined-size-small",label:"Education",variant:"outlined",defaultValue:c.school,onChange:function(e){return i(Object(s.a)(Object(s.a)({},c),{},{school:e.target.value}))}}),Object(S.jsx)("br",{}),Object(S.jsx)(De.a,{required:!0,size:"small",id:"outlined-size-small",label:"Certificate",variant:"outlined",defaultValue:c.certificate,onChange:function(e){return i(Object(s.a)(Object(s.a)({},c),{},{certificate:e.target.value}))}}),Object(S.jsx)("br",{}),Object(S.jsx)(De.a,{required:!0,size:"small",id:"outlined-size-small",label:"aboutMe",variant:"outlined",multiline:!0,rows:"4",defaultValue:c.aboutMe,onChange:function(e){return i(Object(s.a)(Object(s.a)({},c),{},{aboutMe:e.target.value}))}}),Object(S.jsx)("div",{children:j.map((function(e){return Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{children:e.loginProvider}),Object(S.jsx)("div",{children:e.providerKey})]})}))}),Object(S.jsx)(H.a,{direction:"row",spacing:1})]}):null})}function Ke(e){var t=Object(d.f)(),n=Object(d.e)(),c=a.a.useState({}),i=Object(l.a)(c,2),r=i[0],o=i[1],s=a.a.useState([]),j=Object(l.a)(s,2),u=(j[0],j[1]),b=a.a.useState(!1),x=Object(l.a)(b,2),h=x[0],O=(x[1],new URLSearchParams(t.search).get("id"));Object(Ue.a)({google:{backgroundImage:"/public/images/login_google.png"}})();return a.a.useEffect((function(){p.a.post("https://ncoreapi.azurewebsites.net/api/Account/GetTempUser",O,{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"*","Access-Control-Allow-Methods":"*"}}).then((function(e){var t=e.data;o({id:t.id,userName:t.userName,userId:t.UserId,email:t.email,phone:t.phone,name:t.name,school:t.school,gitHubId:t.gitHubId,blog:t.blog,aboutMe:t.aboutMe});var n=t.externals.map((function(e){return{loginProvider:e.loginProvider,providerKey:e.providerKey}}));u(n),console.log("\uc5ec\uae30",t)})).catch((function(e){console.log(e)}))}),[]),Object(S.jsx)("div",{style:{margin:"10px"},children:h?null:Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("span",{style:{color:"#BF412E"},children:r.email})," \ud574\ub2f9 \uc774\uba54\uc77c\ub85c \uc774\ubbf8 \uac00\uc785\uc774 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."]}),Object(S.jsx)(N.a,{sx:{mt:1,mr:1},variant:"contained",onClick:function(){n.push("/login")},children:"\ub85c\uadf8\uc778 \ud558\uae30"})]})})}var Ze=Object(b.a)({palette:{}});function Je(e){var t=c.useState(!1),n=Object(l.a)(t,2),a=n[0],i=n[1],r=c.useState(null),o=Object(l.a)(r,2),b=o[0],h=o[1];c.useEffect((function(){null==b&&fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/titles.yaml").then((function(e){return e.blob()})).then((function(e){return e.text()})).then((function(e){var t=Object(j.a)(e);h(t),console.log("load titles")}))}),[]);function p(e){return null!=b?(console.log("getName: ",e),b.filter((function(t){return t.id.toString()==e.toString()}))[0].title):"..."}var O=Object(u.a)("main",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(s.a)({overflowY:"hidden",flexGrow:1,padding:t.spacing(0),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:"-".concat(240,"px")},n&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0})})),f=function(e){return Object(S.jsx)(Ne,{cbtId:e,title:p(e)})};return Object(S.jsx)(x.a,{theme:Ze,children:Object(S.jsx)("div",{className:"root",children:Object(S.jsxs)("div",{className:"drawerDiv",children:[Object(S.jsx)(P,{open:a,openChanged:function(e){i(e)},style:{zIndex:9999}}),Object(S.jsxs)("div",{className:"frame",children:[Object(S.jsx)(se,{open:a}),Object(S.jsxs)(O,{open:a,children:[Object(S.jsx)(d.a,{path:"/login",component:Te}),Object(S.jsx)(d.a,{path:"/cbt/id=0",render:function(){return f("0")}}),Object(S.jsx)(d.a,{path:"/cbt/id=1",render:function(){return f("1")}}),Object(S.jsx)(d.a,{path:"/cbt/id=2",render:function(){return f("2")}}),Object(S.jsx)(d.a,{path:"/cbt/id=3",render:function(){return f("3")}}),Object(S.jsx)(d.a,{path:"/cbt/id=4",render:function(){return f("4")}}),Object(S.jsx)(d.a,{path:"/cbt/id=5",render:function(){return f("5")}}),Object(S.jsx)(d.a,{path:"/cbt/id=6",render:function(){return f("6")}}),Object(S.jsx)(d.a,{path:"/cbt/id=7",render:function(){return f("7")}}),Object(S.jsx)(d.a,{path:"/cbt/test/id=0",render:function(){return e="0",console.log("getCbtTest"),Object(S.jsx)(Ae,{cbtId:e,title:p(e)});var e}}),Object(S.jsx)(d.a,{path:"/dashboard",component:Le}),Object(S.jsx)(d.a,{exact:!0,path:"/profile",component:He}),Object(S.jsx)(d.a,{path:"/users",component:We}),Object(S.jsx)(d.a,{path:"/duplicate",component:Ke}),Object(S.jsx)(d.a,{path:"/completed",component:Me}),Object(S.jsx)(d.a,{path:"/settings",component:Ge})]})]})]})})})}var Ye=n(25);r.a.render(Object(S.jsx)(Ye.a,{basename:"",children:Object(S.jsx)(Je,{})}),document.getElementById("root")),o()}},[[212,1,2]]]);
//# sourceMappingURL=main.3dd26d8e.chunk.js.map