(this["webpackJsonphp-front"]=this["webpackJsonphp-front"]||[]).push([[0],{140:function(e,c,t){},210:function(e,c,t){"use strict";t.r(c);var n=t(2),a=t(0),r=t(26),s=t.n(r),i=(t(140),t(59)),j=t(9),o=t(215),l=t(217),u=t(218),b=o.a.Option,d=function(){var e=Object(j.f)();return Object(n.jsx)(l.a,{justify:"space-around",align:"middle",style:{height:"100vh"},children:Object(n.jsxs)(u.a,{children:[Object(n.jsx)(l.a,{children:Object(n.jsx)(u.a,{children:Object(n.jsx)("h1",{children:"Quien Eres?"})})}),Object(n.jsx)(l.a,{children:Object(n.jsx)(u.a,{children:Object(n.jsxs)(o.a,{onChange:function(c){return function(c){e.push("/planning/".concat(c))}(c)},style:{width:120},children:[Object(n.jsx)(b,{value:"Carlos",children:"Carlos"}),Object(n.jsx)(b,{value:"Diana",children:"Diana"}),Object(n.jsx)(b,{value:"Diego",children:"Diego"}),Object(n.jsx)(b,{value:"Gio",children:"Gio"}),Object(n.jsx)(b,{value:"Jesus",children:"Jesus"}),Object(n.jsx)(b,{value:"Joana",children:"Joana"}),Object(n.jsx)(b,{value:"Leidy",children:"Leidy"}),Object(n.jsx)(b,{value:"Lucho",children:"Lucho"}),Object(n.jsx)(b,{value:"Freddy",children:"Freddy"})]})})})]})})},x=t(43),O=t(128),f=t.n(O),h=Object(a.createContext)(),p=function(e){var c=e.children,t=function(e){var c=Object(a.useMemo)((function(){return f.a.connect(e)}),[e]),t=Object(a.useState)(!1),n=Object(x.a)(t,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){s(c.connected)}),[c]),Object(a.useEffect)((function(){c.on("connect",(function(){s(!0)}))}),[c]),Object(a.useEffect)((function(){c.on("disconnect",(function(){s(!1)}))}),[c]),{socket:c,online:r}}("http://Happyproject-env.eba-iuw73tyu.us-east-2.elasticbeanstalk.com"),r=t.socket,s=t.online;return Object(n.jsx)(h.Provider,{value:{socket:r,online:s},children:c})},v=function(e){var c=e.cardValue,t=e.active;return Object(n.jsx)("div",{className:t?"poker-card poker-card-active":"poker-card",children:c})},m=function(e){var c=e.userName,t=Object(a.useContext)(h).socket,r=Object(a.useState)(),s=Object(x.a)(r,2),i=s[0],j=s[1],o=function(e){j(e),t.emit("set-effort",{userName:c,effort:e})};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(u.a,{xs:{span:6},lg:{span:3},className:"poker-card-box",onClick:function(){return o("1")},children:Object(n.jsx)(v,{cardValue:"1",active:"1"===i})}),Object(n.jsx)(u.a,{xs:{span:6},lg:{span:3},className:"poker-card-box",onClick:function(){return o("2")},children:Object(n.jsx)(v,{cardValue:"2",active:"2"===i})}),Object(n.jsx)(u.a,{xs:{span:6},lg:{span:3},className:"poker-card-box",onClick:function(){return o("3")},children:Object(n.jsx)(v,{cardValue:"3",active:"3"===i})}),Object(n.jsx)(u.a,{xs:{span:6},lg:{span:3},className:"poker-card-box",onClick:function(){return o("5")},children:Object(n.jsx)(v,{cardValue:"5",active:"5"===i})}),Object(n.jsx)(u.a,{xs:{span:6},lg:{span:3},className:"poker-card-box",onClick:function(){return o("8")},children:Object(n.jsx)(v,{cardValue:"8",active:"8"===i})}),Object(n.jsx)(u.a,{xs:{span:6},lg:{span:3},className:"poker-card-box",onClick:function(){return o("13")},children:Object(n.jsx)(v,{cardValue:"13",active:"13"===i})}),Object(n.jsx)(u.a,{xs:{span:6},lg:{span:3},className:"poker-card-box",onClick:function(){return o("20")},children:Object(n.jsx)(v,{cardValue:"20",active:"20"===i})}),Object(n.jsx)(u.a,{xs:{span:6},lg:{span:3},className:"poker-card-box",onClick:function(){return o("Coffe")},children:Object(n.jsx)(v,{cardValue:"coffe",active:"Coffe"===i})})]})})},k=t(214),C=function(e){var c=e.user,t=e.showEffort;return Object(n.jsxs)("div",{className:"avatar-box",children:[Object(n.jsx)(k.a,{size:64,className:c.effort?"avatar-check":null,children:c.name}),Object(n.jsx)("div",{className:"avatar-effort",children:t&&c.effort})]})},N=function(e){var c=Object(a.useContext)(h).socket,t=Object(j.g)().userName,r=Object(a.useState)([]),s=Object(x.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(!1),u=Object(x.a)(l,2),b=u[0],d=u[1];return Object(a.useEffect)((function(){c.emit("select-user",{userName:t})}),[c,t]),Object(a.useEffect)((function(){return c.on("current-users",(function(e){o(e)})),c.on("reveal-cards",(function(e){d(e.reveal)})),function(){return c.off("current-users")}}),[c]),Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m,{userName:t}),Object(n.jsx)("div",{className:"avatar-list-box",children:i.map((function(e){return Object(n.jsx)(C,{user:e,showEffort:b},e.id)}))})]})},g=t(216),y=function(){var e=Object(a.useContext)(h).socket;return Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(){e.emit("clean-effort")},children:"Limpiar votacion"}),Object(n.jsx)("button",{onClick:function(){e.emit("reveal-cards")},children:"Mostrar cartas"})]})},E=g.a.Content;var V=function(){return Object(n.jsx)(p,{children:Object(n.jsx)(i.a,{children:Object(n.jsx)(g.a,{style:{height:"100vh"},children:Object(n.jsx)(E,{className:"site-layout-container",children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{path:"/planning/:userName",children:Object(n.jsx)(N,{})}),Object(n.jsx)(j.a,{path:"/admin",children:Object(n.jsx)(y,{})}),Object(n.jsx)(j.a,{path:"/",children:Object(n.jsx)(d,{})})]})})})})})};s.a.render(Object(n.jsx)(V,{}),document.getElementById("root"))}},[[210,1,2]]]);
//# sourceMappingURL=main.c1061ccd.chunk.js.map