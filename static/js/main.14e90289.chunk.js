(this.webpackJsonpsource=this.webpackJsonpsource||[]).push([[0],{171:function(e,t,n){},179:function(e,t,n){},199:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(45),r=n.n(i),o=(n(171),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,298)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))}),s=n(15),d=n(11),l=n(16),u=n(36),j=n(6),b=n(152),h=n(296),x=n(281),p=n(283),f=n(280),O=n(144),g=n.n(O),m=n(143),v=n.n(m),y=n(287),C=n(1);function I(e){var t=e.open,n=e.menuClick;return Object(C.jsx)(y.a,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},onClick:n,children:t?Object(C.jsx)(v.a,{}):Object(C.jsx)(g.a,{})})}var k=n(279);function S(){var e=Object(l.e)();var t=function(t,n){e.push("/".concat(n.value))};return Object(C.jsx)(f.a,{sx:{width:"100%"},children:[{name:"\uc790\uaca9\uc99d",value:"cbt"},{name:"\ud504\ub85c\uadf8\ub798\ubc0d",value:"dev"},{name:"\uc720\uc800",value:"users"},{name:"\ub85c\uadf8\uc778",value:"login"}].map((function(e){return function(e){return Object(C.jsx)(k.a,{variant:"raised",size:"small",color:"link",children:e.name,onClick:function(n){return t(n,e)},style:{backgroundColor:"transparent"}},e.value)}(e)}))})}function w(e){var t=e.open,n=e.openChanged;return Object(C.jsx)(x.a,{position:"relative",elevation:1,sx:{zIndex:1e4},children:Object(C.jsxs)(p.a,{variant:"dense",children:[Object(C.jsx)(I,{menuClick:function(){n(!t)}}),Object(C.jsx)(S,{}),Object(C.jsx)(f.a,{sx:{flexGrow:1}}),Object(C.jsx)(f.a,{sx:{display:{xs:"none",md:"flex"}}})]})})}var L=n(275),z=n(285),T=n(4),N=n(155),A=n(259),H=n(289),M=n(277),R=n(47),q=n(288),B=n(119);function E(e){return Object(C.jsx)(N.a,Object(s.a)(Object(s.a)({fontSize:"inherit",style:{width:14,height:14,color:"#333333"}},e),{},{children:Object(C.jsx)("path",{d:"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"})}))}function U(e){return Object(C.jsx)(N.a,Object(s.a)(Object(s.a)({fontSize:"inherit",style:{width:14,height:14,color:"#333333"}},e),{},{children:Object(C.jsx)("path",{d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"})}))}function V(e){return Object(C.jsx)(N.a,Object(s.a)(Object(s.a)({fontSize:"inherit",style:{width:14,height:14,color:"#34568B"}},e),{},{children:Object(C.jsx)("path",{d:"M20 5L20 19L4 19L4 5H20M20 3H4C2.89 3 2 3.89 2 5V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V5C22 3.89 21.11 3 20 3M18 15H6V17H18V15M10 7H6V13H10V7M12 9H18V7H12V9M18 11H12V13H18V11Z"})}))}function P(e){var t=Object(B.useSpring)({from:{opacity:0,transform:"translate3d(20px,0,0)"},to:{opacity:e.in?1:0,transform:"translate3d(".concat(e.in?0:20,"px,0,0)")}});return Object(C.jsx)(B.animated.div,{style:t,children:Object(C.jsx)(q.a,Object(s.a)({},e))})}var W=Object(j.a)((function(e){return Object(C.jsx)(M.a,Object(s.a)(Object(s.a)({},e),{},{TransitionComponent:P}))}))((function(e){var t,n=e.theme;return t={},Object(T.a)(t,"& .".concat(R.a.iconContainer),{"& .close":{opacity:.3}}),Object(T.a)(t,"& .".concat(R.a.group),{marginLeft:15,paddingLeft:0,borderLeft:"1px dashed ".concat(Object(A.a)(n.palette.text.primary,.2))}),Object(T.a)(t,"& .".concat(R.a.content),{"& .MuiTreeItem-label":{paddingTop:"4px",paddingBottom:"4px",paddingLeft:"0px",fontSize:"12px",marginLeft:0,fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),t}));function F(e){var t=c.useState([]),n=Object(d.a)(t,2),a=n[0],i=n[1];c.useEffect((function(){fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/menus.yaml").then((function(e){return e.blob()})).then((function(e){return e.text()})).then((function(e){i(Object(u.a)(e))}))}),[]);var r=Object(l.e)();return Object(C.jsx)(H.a,{defaultExpanded:["1","2","3","4","5"],defaultCollapseIcon:Object(C.jsx)(E,{}),defaultExpandIcon:Object(C.jsx)(U,{}),defaultEndIcon:Object(C.jsx)(V,{}),sx:{height:264,flexGrow:1,maxWidth:400,margin:"0px",overflowY:"auto"},children:function e(t){return a.filter((function(e){return e.parentId===t})).map((function(t){return Object(C.jsx)(W,{onClick:function(e){return function(e,t){"W"===t.type&&r.push("/cbt/id=".concat(t.pageId))}(0,t)},nodeId:t.nodeId.toString(),label:t.label,children:e(t.nodeId.toString())},t.nodeId.toString())}))}("-1")})}var D=n(290),G=n(291),Z=n(292),J=n(293),Y=n(146),K=n.n(Y),Q=Object(j.a)(D.a)({"& .MuiListItemButton-root":{paddingLeft:10,paddingRight:10,backgroundColor:"#fcfcfc"},"& .MuiListItemIcon-root":{minWidth:0,marginRight:5},"& .MuiSvgIcon-root":{fontSize:0}});function X(e){return Object(C.jsx)(Q,{component:"nav",disablePadding:!0,children:Object(C.jsxs)(G.a,{component:"a",href:"#customized-list",children:[Object(C.jsx)(Z.a,{sx:{fontSize:20},children:Object(C.jsx)(K.a,{})}),Object(C.jsx)(J.a,{sx:{my:0},primary:"\ud544\uae30\uc2dc\ud5d8 \uae30\ucd9c\ubb38\uc81c \ubaa9\ub85d",primaryTypographyProps:{fontSize:14,fontWeight:"medium",letterSpacing:0}})]})})}function $(e){var t=e.open;return Object(C.jsxs)(L.a,{sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box",position:"absolute"}},variant:"persistent",anchor:"left",open:t,children:[Object(C.jsx)(X,{}),Object(C.jsx)(z.a,{}),Object(C.jsx)(F,{})]})}n(179);var _=n(271),ee=n(286),te=n(263),ne=n(282),ce=n(284);function ae(e){var t=e.children,n=void 0===t?"Next":t;return Object(C.jsx)(k.a,Object(s.a)(Object(s.a)({},e),{},{children:n,variant:"contained",sx:{mt:1,mr:1}}))}var ie=n(294),re=n(278),oe=n(295),se=n(270),de=n(273);function le(e){return Object(C.jsx)(k.a,Object(s.a)(Object(s.a)({},e),{},{children:"Back",sx:{mt:1,mr:1}}))}function ue(e){e.cbtId;var t=e.innings;return e.required(t.filter((function(e){return e.isChecked})).length>0),Object(C.jsx)("div",{style:{backgroundColor:"#ffffff",borderTop:"1px solid #dddddd",borderLeft:"1px solid #dddddd",borderRight:"1px solid #dddddd",borderRadius:0,marginTop:20,marginBottom:20,padding:"0px 0px 0px 0px"},children:t.map((function(n,c){return Object(C.jsx)("div",{style:{borderBottom:"1px solid #eeeeee"},children:Object(C.jsx)(ee.a,{label:Object(C.jsx)(ce.a,{children:n.year+"\ub144 - "+n.inning+"\ud68c",variant:"subtitle2"}),control:Object(C.jsx)(_.a,{defaultChecked:n.isChecked,style:{marginLeft:"20px"},onChange:function(c){return function(n,c){console.log("id: ",n.target.checked),t.filter((function(e){return e.id==c}))[0].isChecked=n.target.checked,console.log("checked:",t.filter((function(e){return e.isChecked})).length),e.required(t.filter((function(e){return e.isChecked})).length>0)}(c,n.id)}})})},n.id)}))})}function je(e){var t=e.cbtId,n=e.subjects;return e.required(n.filter((function(e){return e.isChecked})).length>0),Object(C.jsx)("div",{style:{backgroundColor:"#ffffff",borderTop:"1px solid #dddddd",borderLeft:"1px solid #dddddd",borderRight:"1px solid #dddddd",borderRadius:0,marginTop:20,marginBottom:20,padding:"0px 0px 0px 0px"},children:n.filter((function(e){return e.testId==t})).map((function(t,c){return Object(C.jsx)("div",{style:{borderBottom:"1px solid #eeeeee"},children:Object(C.jsx)(ee.a,{label:Object(C.jsx)(ce.a,{children:t.subjectName,variant:"subtitle2"}),control:Object(C.jsx)(_.a,{style:{marginLeft:"20px"},defaultChecked:t.isChecked,onChange:function(c){return function(t,c){n.find((function(e){return e.id==c})).isChecked=t.target.checked,e.required(n.filter((function(e){return e.isChecked})).length>0)}(c,t.id)}})})},t.id)}))})}var be=n(269),he=n(262);function xe(e){e.cbtId;var t=e.testTypes,n=t.find((function(e){return e.isChecked})).count;return Object(C.jsx)("div",{style:{backgroundColor:"#ffffff",borderTop:"1px solid #dddddd",borderLeft:"1px solid #dddddd",borderRight:"1px solid #dddddd",borderRadius:0,marginTop:20,marginBottom:20,padding:"0px 0px 0px 0px"},children:Object(C.jsx)(he.a,{"aria-label":"gender",name:"radio-buttons-group",defaultValue:n,onChange:function(e){return function(e){t.map((function(e){return e.isChecked=!1})),t.find((function(t){return t.id==e.target.id})).isChecked=e.target.checked}(e)},children:t.map((function(e,t){return Object(C.jsx)("div",{style:{borderBottom:"1px solid #eeeeee"},children:Object(C.jsx)(ee.a,{label:Object(C.jsx)(ce.a,{children:"".concat(e.count," \ubb38\uc81c"),variant:"subtitle2"}),control:Object(C.jsx)(be.a,{id:e.id,value:e.count,style:{marginLeft:"20px"}})})},e.id)}))})})}function pe(e){Object(l.f)().search;var t=e.cbtId,n=a.a.useState(0),c=Object(d.a)(n,2),i=c[0],r=c[1],o=a.a.useState(!1),s=Object(d.a)(o,2),u=s[0],j=s[1],b=a.a.useState(!1),h=Object(d.a)(b,2),x=h[0],p=h[1];a.a.useEffect((function(){console.log("cbtstepper useEffect loaded")}),[]);var O=function(){r((function(e){return e+1}))},g=function(){r((function(e){return e-1}))};return Object(C.jsxs)(f.a,{sx:{maxWidth:538},children:[Object(C.jsxs)(de.a,{activeStep:i,orientation:"vertical",children:[Object(C.jsxs)(ie.a,{children:[Object(C.jsx)(se.a,{children:"\ud68c\ucc28 \uc120\ud0dd"}),Object(C.jsxs)(oe.a,{children:[Object(C.jsxs)(f.a,{style:{marginTop:"4px",marginBottom:"14px"},children:[Object(C.jsx)(ce.a,{children:"\ud68c\ucc28\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",variant:"h6"}),Object(C.jsx)(ce.a,{children:"\uc5ec\ub7ec \ud68c\ucc28\ub97c \uc120\ud0dd\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",variant:"caption"})]}),Object(C.jsx)(ue,{cbtId:t,innings:e.innings,required:function(e){j(e),console.log("firstRequired",e)}}),Object(C.jsxs)(f.a,{sx:{mb:2},children:[Object(C.jsx)(ae,{disabled:!u,onClick:function(){O()}}),Object(C.jsx)(le,{disabled:!0,onClick:g})]})]})]},"1"),Object(C.jsxs)(ie.a,{children:[Object(C.jsx)(se.a,{children:"\uacfc\ubaa9 \uc120\ud0dd"}),Object(C.jsxs)(oe.a,{children:[Object(C.jsxs)(f.a,{style:{marginTop:"4px",marginBottom:"14px"},children:[Object(C.jsx)(ce.a,{children:"\uacfc\ubaa9\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",variant:"h6"}),Object(C.jsx)(ce.a,{children:"\uc6d0\ud558\ub294 \uacfc\ubaa9\ub9cc \uc120\ud0dd\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",variant:"caption"})]}),Object(C.jsx)(je,{cbtId:t,subjects:e.subjects,required:function(e){p(e),console.log("secondRequired",e)}}),Object(C.jsxs)(f.a,{sx:{mb:2},children:[Object(C.jsx)(ae,{disabled:!x,onClick:O}),Object(C.jsx)(le,{onClick:g})]})]})]},"2"),Object(C.jsxs)(ie.a,{children:[Object(C.jsx)(se.a,{children:"\ucd9c\uc81c \ubb38\ud56d\uc218"}),Object(C.jsxs)(oe.a,{children:[Object(C.jsx)(f.a,{style:{marginTop:"4px",marginBottom:"14px"},children:Object(C.jsx)(ce.a,{children:"\ubb38\uc81c \uac1c\uc218\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",variant:"h6"})}),Object(C.jsx)(xe,{cbtId:t,testTypes:e.testTypes}),Object(C.jsxs)(f.a,{sx:{mb:2},children:[Object(C.jsx)(ae,{onClick:O,children:"Finish"}),Object(C.jsx)(le,{onClick:g})]})]})]},"3")]}),3===i&&Object(C.jsxs)("div",{style:{backgroundColor:"#ffffff",borderTop:"1px solid #dddddd",borderLeft:"1px solid #dddddd",borderRight:"1px solid #dddddd",borderRadius:0,marginTop:20,marginBottom:20,padding:"20px 20px 20px 20px"},children:[function(){var t=e.innings.find((function(e){return e.isChecked})),n=e.innings.filter((function(e){return e.isChecked})).length;return Object(C.jsxs)(te.a,{direction:"row",spacing:1,children:[Object(C.jsx)(re.a,{size:"small",label:"\ud68c\ucc28",color:"success",variant:"outlined"}),Object(C.jsx)(ce.a,{variant:"body1",style:{padding:"0px 0px 0px 10px"},children:"".concat(t.year,"\ub144 ").concat(t.inning,"\ud68c")}),Object(C.jsx)(ce.a,{variant:"caption",style:{marginTop:"2px"},children:n>1?" \ud3ec\ud568 ".concat(n,"\ud68c\ucc28"):"\ub2e8\uc77c \ud68c\ucc28"})]})}(),function(){var t=e.subjects.find((function(e){return e.isChecked})),n=e.subjects.filter((function(e){return e.isChecked})).length;return Object(C.jsxs)(te.a,{direction:"row",spacing:1,style:{marginTop:"15px"},children:[Object(C.jsx)(re.a,{size:"small",label:"\uacfc\ubaa9",color:"success",variant:"outlined"}),Object(C.jsx)(ce.a,{variant:"body1",style:{padding:"0px 0px 0px 10px"},children:"".concat(t.subjectName)}),Object(C.jsx)(ce.a,{variant:"caption",style:{marginTop:"2px"},children:n>1?" \ud3ec\ud568 ".concat(n,"\uacfc\ubaa9"):"\ub2e8\uc77c \uacfc\ubaa9"})]})}(),function(){var t=e.testTypes.find((function(e){return e.isChecked}));return Object(C.jsxs)(te.a,{direction:"row",spacing:1,style:{marginTop:"15px"},children:[Object(C.jsx)(re.a,{size:"small",label:"\ubb38\ud56d\uc218",color:"success",variant:"outlined"}),Object(C.jsx)(ce.a,{variant:"body1",children:"\ucd1d ".concat(t.count,"\ubb38\uc81c")})]})}(),Object(C.jsx)("br",{}),Object(C.jsx)(k.a,{variant:"contained",size:"small",onClick:e.start,sx:{mt:1,mr:1},children:"\uc2dc\uc791"}),Object(C.jsx)(k.a,{onClick:function(){r(0)},size:"small",sx:{mt:1,mr:1},style:{color:"#ff5233"},children:"\ucd08\uae30\ud654"})]})]})}var fe=n(147),Oe=n.n(fe);function ge(e){var t=Object(C.jsx)(Oe.a,{});return Object(C.jsx)(y.a,Object(s.a)(Object(s.a)({},e),{},{size:"small",children:t}))}Object(j.a)(ne.a)((function(e){var t=e.theme;return Object(s.a)(Object(s.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}));function me(e){var t=Object(l.e)(),n=a.a.useState(null),c=Object(d.a)(n,2),i=(c[0],c[1]),r=a.a.useState(-1),o=Object(d.a)(r,2),s=(o[0],o[1],a.a.useState([])),j=Object(d.a)(s,2),b=j[0],h=j[1],x=a.a.useState([]),p=Object(d.a)(x,2),O=p[0],g=p[1],m=a.a.useState([]),v=Object(d.a)(m,2),y=v[0],I=v[1],k=a.a.useState(!1),S=Object(d.a)(k,2),w=S[0],L=(S[1],e.cbtId);return a.a.useEffect((function(){fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/0/202101.yaml").then((function(e){return e.blob()})).then((function(e){return e.text()})).then((function(e){i(Object(u.a)(e))})),fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/innings.yaml").then((function(e){return e.blob()})).then((function(e){return e.text()})).then((function(e){console.log("inning loaded",L);var t=Object(u.a)(e).filter((function(e){return e.testId==L}));h(t)})),fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/subjects.yaml").then((function(e){return e.blob()})).then((function(e){return e.text()})).then((function(e){var t=Object(u.a)(e).filter((function(e){return e.testId==L}));g(t)})),fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/testTypes.yaml").then((function(e){return e.blob()})).then((function(e){return e.text()})).then((function(e){var t=Object(u.a)(e).filter((function(e){return e.testId==L}));I(t)}))}),[]),Object(C.jsxs)(f.a,{style:{minWidth:"200px",maxWidth:"600px",borderRight:"1px solid #dddddd",backgroundColor:"#f7f7f7"},children:[Object(C.jsx)("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",borderBottom:"1px solid #dddddd",padding:"4px 24px 4px 24px",height:"36px",position:"sticky",top:0,zIndex:9999},children:Object(C.jsx)(te.a,{direction:"row",children:Object(C.jsx)(ce.a,{variant:"h7",children:e.title,style:{marginTop:"8px"}})})}),w?null:Object(C.jsx)(f.a,{margin:3,children:Object(C.jsx)(pe,{cbtId:L,innings:b,subjects:O,testTypes:y,start:function(){var e=y.find((function(e){return e.isChecked})),n=O.filter((function(e){return e.isChecked})).map((function(e){return e.sort}));sessionStorage.setItem("testTypes",e.count),sessionStorage.setItem("subjects",n),t.push("/cbt/test/id=".concat(L))}})})]})}var ve=n(206);Object(j.a)(ne.a)((function(e){var t=e.theme;return Object(s.a)(Object(s.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}));function ye(e){var t=Object(l.e)(),n=a.a.useState(null),c=Object(d.a)(n,2),i=c[0],r=c[1],o=e.cbtId,s="",j=sessionStorage.getItem("testTypes"),b=sessionStorage.getItem("subjects");function h(e){var t=-1;return e.map((function(e,n){"y"===e.isAnswer&&(t=n+1)})),t}return console.log("subjects: ",b),console.log("size: ",j),a.a.useEffect((function(){console.log("cbt useEffect loaded"),fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/0/202101.yaml").then((function(e){return e.blob()})).then((function(e){return e.text()})).then((function(e){r(Object(u.a)(e))}))}),[]),Object(C.jsxs)(f.a,{style:{minWidth:"200px",maxWidth:"600px",borderRight:"1px solid #dddddd",backgroundColor:"#f7f7f7"},children:[Object(C.jsx)("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",borderBottom:"1px solid #dddddd",padding:"4px 24px 4px 24px",height:"36px",position:"sticky",top:0,zIndex:9999},children:Object(C.jsxs)(te.a,{direction:"row",children:[Object(C.jsx)(ce.a,{variant:"h7",children:e.title,style:{marginTop:"8px"}}),Object(C.jsx)(f.a,{sx:{flexGrow:1}}),Object(C.jsx)(ge,{onClick:function(){t.push("/cbt/id=".concat(o))}})]})}),Object(C.jsx)(f.a,{margin:0,children:null==i?null:i.filter((function(e){return b.includes(e.subject)})).slice(0,j).map((function(e,t){return Object(C.jsxs)(f.a,{children:[s!=e.subjectName?Object(C.jsx)(f.a,{style:{margin:"10px 25px 0px 0px",textAlign:"right"},children:Object(C.jsx)(ce.a,{children:"\uacfc\ubaa9: ".concat((c=e.subjectName,s=c,c)),variant:"caption"})}):null,Object(C.jsxs)("div",{className:"paper-question",style:{border:""},children:[Object(C.jsx)(f.a,{className:"papar-question-content",children:Object(C.jsx)(ce.a,{variant:"body1",children:"".concat(t+1,". ").concat(e.question)})}),Object(C.jsx)(f.a,{children:null!=e.infos?e.infos.map((function(e,t){return Object(C.jsx)(f.a,{children:Object(C.jsx)(f.a,{className:"papar-question-content",children:Object(C.jsx)("img",{src:e.src,style:{maxWidth:"400px"}})})},t)})):null}),Object(C.jsx)(ve.a,{children:(n=e.answers,n.map((function(e,t){return Object(C.jsx)(ee.a,{className:"papar-answer-content",style:{margin:"0px 15px 0px 15px"},label:Object(C.jsx)(ce.a,{variant:"body2",style:{margin:"2px 0px 0px 0px"},children:"".concat(t+1,". ").concat(e.example)},t.toString()),control:Object(C.jsx)(_.a,{defaultChecked:e.isChecked,style:{marginLeft:"0px"},onChange:function(t){e.id}})},t)})))}),Object(C.jsx)(f.a,{style:{height:"10px"}}),Object(C.jsx)(f.a,{className:"papar-question-content",style:{display:"none"},children:Object(C.jsxs)(ce.a,{children:["\uc815\ub2f5 ",Object(C.jsx)("span",{style:{color:"#ffffff"},children:h(e.answers)})]})})]})]},e.seq);var n,c}))}),Object(C.jsx)("div",{style:{height:"60px"}})]})}function Ce(e){return Object(C.jsx)("div",{children:"Dashboard"})}n(40),n(63),n(148);function Ie(e){window.location.href="https://ncoreapi.azurewebsites.net/Identity/Account/Login?ReturnUrl=~/cbt";return Object(C.jsx)(C.Fragment,{})}var ke=n(101);function Se(e){var t=Object(l.e)(),n=new ke.a,c=Object(l.f)(),a=new URLSearchParams(c.search).get("id");console.log("ID",a),n.set(".cbt.devncore.org.authentication.session",a);var i=n.get(".cbt.devncore.org.authentication.session");return t.push("/"),console.log(i),Object(C.jsx)(C.Fragment,{children:"Authentication...."})}var we=n(61),Le=n.n(we);function ze(e){var t=a.a.useState({}),n=Object(d.a)(t,2),c=n[0],i=n[1],r=a.a.useState({}),o=Object(d.a)(r,2),s=(o[0],o[1],Object(l.f)()),u=Object(l.e)(),j=new URLSearchParams(s.search).get("id");a.a.useEffect((function(){j=new URLSearchParams(s.search).get("id"),console.log("^^^^^^^^^profileId:",j);var e={id:j,userName:"string",email:"string",blog:"string",gitHubId:"string",school:"string",name:"string",userId:"string"};Le.a.post("https://ncoreapi.azurewebsites.net/api/Account/GetUser",e,{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"*","Access-Control-Allow-Methods":"*"}}).then((function(e){var t=e.data;i({id:t.id,userName:t.userName,userId:t.UserId,email:t.email,phone:t.phone,name:t.name,school:t.school,gitHubId:t.gitHubId,blog:t.blog}),console.log("datas")})).catch((function(e){console.log(e)}))}),[]);return Object(C.jsxs)("div",{children:["\uc0ac\uc6a9\uc790 \uc815\ubcf4",Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{children:"\uc544\uc774\ub514: "+c.id}),Object(C.jsx)("div",{children:"\uc774\ub984: "+c.userName}),Object(C.jsx)("div",{children:"\ud578\ub4dc\ud3f0: "+c.phone}),Object(C.jsx)("div",{children:"\uc774\uba54\uc77c: "+c.email}),Object(C.jsx)("div",{children:"\ud559\uad50: "+c.school}),Object(C.jsx)("div",{children:"\uae43\ud5c8\ube0c: "+c.gitHubId}),Object(C.jsx)("div",{children:"\ube14\ub85c\uadf8: "+c.blog})]}),Object(C.jsx)(k.a,{size:"small",variant:"outlined",onClick:function(e){u.push("/profile/update?id=".concat(j))},children:"\uc815\ubcf4\uc218\uc815"})]})}var Te=n(265);function Ne(e){var t=a.a.useState(null),n=Object(d.a)(t,2),c=n[0],i=n[1],r=Object(l.f)(),o=new URLSearchParams(r.search).get("id");console.log("ID: ",o);var u=Object(l.e)(),j=a.a.useState("james"),b=Object(d.a)(j,2),h=(b[0],b[1],{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"*","Access-Control-Allow-Methods":"*"}});a.a.useEffect((function(){var e={id:o,userName:"string",email:"string",phone:"string",name:"string"};console.log(e),Le.a.post("https://ncoreapi.azurewebsites.net/api/Account/getUser",e,h).then((function(e){var t=e.data;i({id:t.id,userName:t.userName,userId:t.UserId,email:t.email,phone:t.phone,name:t.name,school:t.school,gitHubId:t.gitHubId,blog:t.blog,aboutMe:t.aboutMe}),console.log("Users:",c)})).catch((function(e){console.log(e)}))}),[]);return Object(C.jsx)(te.a,{style:{padding:20,maxWidth:600},spacing:1,children:null!=c?Object(C.jsxs)(C.Fragment,{children:["\ubcc0\uacbd\uc815\ubcf4",Object(C.jsx)("div",{children:"\uc544\uc774\ub514: "+c.id}),Object(C.jsx)("div",{children:"\uc774\uba54\uc77c: "+c.email}),Object(C.jsx)(Te.a,{required:!0,size:"small",id:"outlined-basic",label:"Name",inputProps:{maxLength:12},variant:"outlined",defaultValue:c.userName,onChange:function(e){return i(Object(s.a)(Object(s.a)({},c),{},{userName:e.target.value}))}}),Object(C.jsx)(Te.a,{required:!0,size:"small",id:"outlined-basic",label:"Phone",inputProps:{maxLength:12},variant:"outlined",defaultValue:c.phone,onChange:function(e){return i(Object(s.a)(Object(s.a)({},c),{},{phone:e.target.value}))}}),Object(C.jsx)(Te.a,{required:!0,size:"small",id:"outlined-basic",label:"GithubId",variant:"outlined",defaultValue:c.gitHubId,onChange:function(e){return i(Object(s.a)(Object(s.a)({},c),{},{gitHubId:e.target.value}))}}),Object(C.jsx)(Te.a,{required:!0,size:"small",id:"outlined-basic",label:"Blog",variant:"outlined",defaultValue:c.blog,onChange:function(e){return i(Object(s.a)(Object(s.a)({},c),{},{blog:e.target.value}))}}),Object(C.jsx)(Te.a,{required:!0,size:"small",id:"outlined-basic",label:"School",variant:"outlined",defaultValue:c.school,onChange:function(e){return i(Object(s.a)(Object(s.a)({},c),{},{school:e.target.value}))}}),Object(C.jsx)(Te.a,{required:!0,size:"small",id:"outlined-basic",label:"aboutMe",variant:"outlined",multiline:!0,rows:"4",defaultValue:c.aboutMe,onChange:function(e){return i(Object(s.a)(Object(s.a)({},c),{},{aboutMe:e.target.value}))}}),Object(C.jsx)(k.a,{children:"\uc800\uc7a5",onClick:function(e){Le.a.post("https://ncoreapi.azurewebsites.net/api/Account/updateUser",c,h).then((function(e){e.data;i({userName:c.userName,email:c.email,id:c.id,phone:c.phone,name:c.name}),console.log("Users:",c)})).catch((function(e){console.log(e)})),u.push("/profile?id=".concat(c.id))}})]}):null})}var Ae=n(276),He=n(266),Me=n(274),Re=n(151),qe=n.n(Re),Be=n(150),Ee=n.n(Be);function Ue(e){var t=e.user,n=e.index,c=a.a.useState("none"),i=Object(d.a)(c,2),r=i[0],o=i[1],s=a.a.useState(0),l=Object(d.a)(s,2),u=l[0],j=l[1],b=Object(He.a)({root:{margin:"0px 0px 10px 10px",padding:"10px 10px 10px 10px",borderRadius:8},thumbnail:{width:40,borderRadius:8,marginRight:"10px"},badge:{margin:10},detail:{display:r}})();a.a.useEffect((function(){j(Math.floor(12*Math.random()+3))}),[]);return Object(C.jsx)(Ae.a,{item:!0,lg:3,md:4,sm:6,xs:12,children:Object(C.jsx)(ne.a,{className:b.root,variant:"outlined",onClick:function(e){o("none"==r?"block":"none")},children:Object(C.jsxs)(Ae.a,{container:!0,children:[Object(C.jsx)(Ae.a,{item:!0,children:function(e){return Object(C.jsx)("img",{className:b.thumbnail,src:"./images/people".concat(e,".png")})}(n)}),Object(C.jsx)(Ae.a,{item:!0,xs:!0,children:Object(C.jsxs)(te.a,{children:[Object(C.jsx)(ce.a,{variant:"caption",children:t.userName}),Object(C.jsx)(ce.a,{variant:"body2",children:"".concat(u,"\uac1c\uc758 \uc790\uaca9\uc99d \ubcf4\uc720")}),Object(C.jsxs)(te.a,{className:b.detail,children:[Object(C.jsx)(ce.a,{variant:"caption",children:"\uc774\ub984: "+t.name}),Object(C.jsx)("br",{}),Object(C.jsx)(ce.a,{variant:"caption",children:"\ud578\ub4dc\ud3f0: "+t.phone}),Object(C.jsx)("br",{}),Object(C.jsx)(ce.a,{variant:"caption",children:"\uc774\uba54\uc77c: "+t.email}),Object(C.jsx)("br",{}),Object(C.jsx)(ce.a,{variant:"caption",children:"\ud559\uad50: "+t.school}),Object(C.jsx)("br",{}),Object(C.jsx)(ce.a,{variant:"caption",children:"\uae43\ud5c8\ube0cID: "+t.gitHubId}),Object(C.jsx)("br",{}),Object(C.jsx)(ce.a,{variant:"caption",children:"\ube14\ub85c\uadf8: "+t.blog}),Object(C.jsx)("br",{}),Object(C.jsx)(y.a,{size:"small",children:Object(C.jsx)(Ee.a,{fontSize:"small"}),onClick:function(n){return function(t,n){e.userClick(t,n)}(n,t)}})]})]})}),Object(C.jsx)(Ae.a,{item:!0,children:Object(C.jsx)(Me.a,{className:b.badge,badgeContent:u,color:"primary",fontSize:"small",children:Object(C.jsx)(qe.a,{color:"action",fontSize:"small"})})})]})})},t.id)}function Ve(e){var t,n=(new ke.a).get(".cbt.devncore.org.authentication.session"),c=a.a.useState([]),i=Object(d.a)(c,2),r=i[0],o=i[1],s=Object(l.e)();a.a.useEffect((function(){console.log("users :");var e={method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"*","Access-Control-Allow-Methods":"*",".cbt.devncore.org.authentication.session":n}};Le.a.post("https://ncoreapi.azurewebsites.net/api/Account/getUsers",{id:"string",userName:"string",email:"string",blog:"string",gitHubId:"string",school:"string",name:"string",userId:"string"},e).then((function(e){var t=e.data.map((function(e){return{id:e.id,userName:e.userName,userId:e.UserId,email:e.email,phone:e.phone,name:e.name,school:e.school,gitHubId:e.gitHubId,blog:e.blog}}));o(t),console.log("f :")})).catch((function(e){console.log(e)}))}),[]);var u=function(e,t){s.push("/profile?id=".concat(t.id))};return Object(C.jsx)(Ae.a,(t={container:!0,style:{maxWidth:1200}},Object(T.a)(t,"style",{padding:"10px 10px 10px 0px"}),Object(T.a)(t,"children",r.map((function(e,t){return Object(C.jsx)(Ue,{user:e,index:t,userClick:u},t)}))),t))}var Pe=Object(b.a)({palette:{}});function We(e){var t=c.useState(!1),n=Object(d.a)(t,2),a=n[0],i=n[1],r=c.useState(null),o=Object(d.a)(r,2),b=o[0],x=o[1];c.useEffect((function(){null==b&&fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/titles.yaml").then((function(e){return e.blob()})).then((function(e){return e.text()})).then((function(e){var t=Object(u.a)(e);x(t),console.log("load titles")}))}),[]);function p(e){return null!=b?(console.log("getName: ",e),b.filter((function(t){return t.id.toString()==e.toString()}))[0].title):"..."}var f=Object(j.a)("main",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(s.a)({overflowY:"hidden",flexGrow:1,padding:t.spacing(0),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:"-".concat(240,"px")},n&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0})})),O=function(e){return Object(C.jsx)(me,{cbtId:e,title:p(e)})};return Object(C.jsx)(h.a,{theme:Pe,children:Object(C.jsx)("div",{className:"root",children:Object(C.jsxs)("div",{className:"drawerDiv",children:[Object(C.jsx)(w,{open:a,openChanged:function(e){i(e)},style:{zIndex:9999}}),Object(C.jsxs)("div",{className:"frame",children:[Object(C.jsx)($,{open:a}),Object(C.jsxs)(f,{open:a,children:[Object(C.jsx)(l.a,{path:"/login",component:Ie}),Object(C.jsx)(l.a,{path:"/cbt/id=0",render:function(){return O("0")}}),Object(C.jsx)(l.a,{path:"/cbt/id=1",render:function(){return O("1")}}),Object(C.jsx)(l.a,{path:"/cbt/id=2",render:function(){return O("2")}}),Object(C.jsx)(l.a,{path:"/cbt/id=3",render:function(){return O("3")}}),Object(C.jsx)(l.a,{path:"/cbt/id=4",render:function(){return O("4")}}),Object(C.jsx)(l.a,{path:"/cbt/id=5",render:function(){return O("5")}}),Object(C.jsx)(l.a,{path:"/cbt/id=6",render:function(){return O("6")}}),Object(C.jsx)(l.a,{path:"/cbt/id=7",render:function(){return O("7")}}),Object(C.jsx)(l.a,{path:"/cbt/test/id=0",render:function(){return e="0",console.log("getCbtTest"),Object(C.jsx)(ye,{cbtId:e,title:p(e)});var e}}),Object(C.jsx)(l.a,{path:"/dashboard",component:Ce}),Object(C.jsx)(l.a,{exact:!0,path:"/profile",component:ze}),Object(C.jsx)(l.a,{path:"/profile/update",component:Ne}),Object(C.jsx)(l.a,{path:"/users",component:Ve}),Object(C.jsx)(l.a,{path:"/completed",component:Se})]})]})]})})})}var Fe=n(28);r.a.render(Object(C.jsx)(Fe.a,{basename:"",children:Object(C.jsx)(We,{})}),document.getElementById("root")),o()}},[[199,1,2]]]);
//# sourceMappingURL=main.14e90289.chunk.js.map