(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{134:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n(0),r=n.n(a),c=n(190),o=n(189),i=n(188),l=n(6),m=n.n(l),u=n(77),s=n(3),f=n(48),E=n(30),g=n(4).a.create({member:{flexDirection:"row",alignItems:"center",marginBottom:20},image:{width:32,height:32,borderRadius:18,marginRight:16}}),h=function(){var e=Object(a.useState)([]),t=m()(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("https://api.github.com/orgs/rocketseat/members").then((function(e){e.json().then((function(e){c(e)}))}))}),[]),r.a.createElement(u.a,{contentContainerStyle:{padding:24},data:n,keyExtractor:function(e){return e.login},renderItem:function(e){var t=e.item;return r.a.createElement(s.a,{style:g.member},r.a.createElement(f.a,{style:g.image,source:{uri:t.avatar_url}}),r.a.createElement(E.a,null,t.login))}})},p=n(191),b=function(){return r.a.createElement(s.a,{style:{flex:1}},r.a.createElement(p.a,{style:{flex:1}}))},d=Object(o.a)();function v(){return r.a.createElement(i.a,null,r.a.createElement(d.Navigator,null,r.a.createElement(d.Screen,{options:{tabBarIcon:function(e){var t=e.color;return r.a.createElement(c.a,{name:"home",sizw:20,color:t})}},name:"Main",component:h}),r.a.createElement(d.Screen,{options:{tabBarIcon:function(e){var t=e.color;return r.a.createElement(c.a,{name:"camera",sizw:20,color:t})}},name:"Camera",component:b})))}function w(){return r.a.createElement(v,null)}},138:function(e,t,n){e.exports=n(179)}},[[138,1,2]]]);
//# sourceMappingURL=app.6dea99fb.chunk.js.map