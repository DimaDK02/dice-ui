(this["webpackJsonpdice-ui"]=this["webpackJsonpdice-ui"]||[]).push([[0],{198:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(59),i=n.n(a),o=function(e){e&&n.e(3).then(n.bind(null,208)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},s=n(202),u=n(29),l=n(1),f=function e(){Object(l.a)(this,e)};f.isProductionMode=!0;var j=n(10);function d(e){var t=e.children;return f.isProductionMode?Object(j.jsx)(s.a,{fallback:function(e){var t=e.error,n=e.componentStack,c=e.resetError;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0438:"}),Object(j.jsx)("p",{children:t.message}),Object(j.jsx)("p",{children:n}),Object(j.jsx)(u.c,{onClick:c,children:"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"})]})},children:t}):t}var b=n(13),h=n(207),p=n(43),O=n.n(p);var x=n(204),m=n(205),g=n(206),v=n(50),w=n(49);function y(){var e=Object(w.usePlane)((function(){return{rotation:[-Math.PI/2,0,0],position:[0,0,0]}})),t=Object(b.a)(e,1)[0];return Object(j.jsxs)("mesh",{ref:t,children:[Object(j.jsx)("planeBufferGeometry",{args:[20,20]}),Object(j.jsx)("meshStandardMaterial",{color:"white"})]})}var E=n(17),I=n.n(E),S=n(26),k=n.p+"static/media/red-dice.9c47b019.obj",P=n.p+"static/media/red-dice.fa7a425c.mtl",A=n(6),_=n(85),M=n(86),T=.55;function C(){var e=Object(c.useState)(null),t=Object(b.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){function e(){return(e=Object(S.a)(I.a.mark((function e(){var t,n,c,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new M.a,e.next=3,t.loadAsync(P);case 3:return(n=e.sent).preload(),(c=new _.a).setMaterials(n),e.next=9,c.loadAsync(k);case 9:(a=e.sent).scale.set(T,T,T),r(a);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var a=Object(w.useBox)((function(){return{mass:.05,position:[0,2,0],rotation:[0,0,A.MathUtils.degToRad(30)]}})),i=Object(b.a)(a,1)[0];return Object(j.jsxs)("mesh",{ref:i,scale:[T,T,T],children:[Object(j.jsx)("boxBufferGeometry",{}),n&&Object(j.jsx)("mesh",{children:Object(j.jsx)("primitive",{object:n})})]})}function U(e){var t=e.children,n=Object(c.useState)(null),r=Object(b.a)(n,2),a=r[0];r[1];return Object(c.useEffect)((function(){}),[]),a?Object(j.jsx)(a,{scale:1.1,children:t}):Object(j.jsx)(j.Fragment,{children:t})}var R=n(87),V=n.n(R);var F=function(){return Object(j.jsx)("div",{className:V.a.canvasWrapper,children:Object(j.jsx)(v.a,{onCreated:function(e){e.gl.physicallyCorrectLights=!0,e.camera.setRotationFromEuler(new A.Euler(A.MathUtils.degToRad(-60),0,0)),e.camera.translateY(3.5),e.camera.translateZ(4.5)},gl:{antialias:!1,powerPreference:"low-power"},children:Object(j.jsx)(c.Suspense,{fallback:null,children:Object(j.jsx)(w.Physics,{gravity:[0,-9.82,0],defaultContactMaterial:{friction:.9,restitution:.7,contactEquationStiffness:1e7,contactEquationRelaxation:1,frictionEquationStiffness:1e7,frictionEquationRelaxation:2},children:Object(j.jsxs)(U,{children:[Object(j.jsx)("ambientLight",{color:"white",intensity:1}),Object(j.jsx)("directionalLight",{color:"#efdfd5",intensity:3,position:[0,3,1]}),Object(j.jsx)(C,{}),Object(j.jsx)(y,{})]})})})})})},G=[{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",Icon:x.a,storyId:"dice",renderView:function(){return Object(j.jsx)(F,{})}},{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",Icon:m.a,storyId:"settings",renderView:function(){return"settings home"}},{title:"\u041f\u043e\u043c\u043e\u0449\u044c",Icon:g.a,storyId:"help",renderView:function(){return"help home"}}];function L(e){var t=e.loadingUser,n=e.popout,r=Object(c.useState)(!1),a=Object(b.a)(r,2),i=a[0],o=a[1],s=Object(c.useState)("dice"),l=Object(b.a)(s,2),f=l[0],d=l[1];Object(c.useEffect)((function(){var e;return t?e=window.setTimeout((function(){o(!0)}),200):o(!1),function(){clearTimeout(e)}}),[t]);var h=null;return n?h=n:t&&i&&(h=Object(j.jsx)(u.g,{})),Object(j.jsx)(u.d,{activeStory:f,tabbar:Object(j.jsx)(u.h,{children:G.map((function(e){var t=e.Icon,n=e.storyId,c=e.title;return Object(j.jsx)(u.i,{text:c,selected:f===n,onClick:function(){return d(n)},children:Object(j.jsx)(t,{})},n)}))}),children:G.map((function(e){var t=e.storyId,n=e.renderView;return Object(j.jsx)(u.j,{id:t,activePanel:"".concat(t,"-home"),popout:h,children:Object(j.jsx)(u.e,{id:"".concat(t,"-home"),children:n()})},t)}))})}var W=n(9),B=function(e){return Object(W.a)({AUTOMATIC_OPERATIONS:["*"]},e)},N=B({init:function(){return Object(S.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Init tracker");case 1:case"end":return e.stop()}}),e)})))()},identify:function(e){return Object(S.a)(I.a.mark((function t(){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("linked session with vkId ".concat(e));case 1:case"end":return t.stop()}}),t)})))()},reachGoal:function(e,t){return Object(S.a)(I.a.mark((function n(){return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t?console.log("Reach goal ".concat(e," with params"),t):console.log("Reach goal ".concat(e));case 1:case"end":return n.stop()}}),n)})))()}}),q=n(51),H=n.n(q),K=n(2),D=function(){function e(){Object(l.a)(this,e)}return Object(K.a)(e,null,[{key:"getHashParam",value:function(e){return new URLSearchParams(window.location.hash.slice(1)).get(e)||""}}]),e}(),J=B({init:function(){return Object(S.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H.a.init("7563fd36cf4497fd02bdc04ffa6e91b7",{api_host:"https://mp-proxy.akani.tmweb.ru"});case 1:case"end":return e.stop()}}),e)})))()},identify:function(e){return Object(S.a)(I.a.mark((function t(){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={"utm source":D.getHashParam("utm_source")},H.a.identify(String(e)),H.a.people.set_once(n),H.a.register_once(n);case 4:case"end":return t.stop()}}),t)})))()},reachGoal:function(e,t){return Object(S.a)(I.a.mark((function n(){return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:H.a.track(e,t);case 1:case"end":return n.stop()}}),n)})))()}}),X=f.isProductionMode?[J]:[N];function Y(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];X.forEach((function(t){("*"===t.AUTOMATIC_OPERATIONS[0]||t.AUTOMATIC_OPERATIONS.includes(e))&&t[e].apply(void 0,n)}))}var Z,z=function(e){Y("identify",e)},Q=function(){Y("init")},$=function(e,t){Y("reachGoal",e,t)};function ee(e){var t=e.children,n=Object(c.useState)(null),r=Object(b.a)(n,2),a=r[0],i=r[1],o=Object(c.useState)(!1),s=Object(b.a)(o,2),u=s[0],l=s[1];function f(){return(f=Object(S.a)(I.a.mark((function e(){var t,n,c=arguments;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]&&c[0],l(!0),e.prev=2,e.next=5,O.a.send("VKWebAppGetUserInfo");case 5:n=e.sent,i(n),t&&z(n.id);case 8:return e.prev=8,l(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[2,,8,11]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){f.apply(this,arguments)}(!0)}),[]),t({user:a,loadingUser:u})}!function(e){e.bright_light="bright_light",e.space_gray="space_gray"}(Z||(Z={}));n(197);function te(){var e=Object(c.useState)(null),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(Z.bright_light),i=Object(b.a)(a,2),o=i[0],s=i[1];return Object(c.useEffect)((function(){O.a.send("VKWebAppInit"),O.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;"VKWebAppUpdateConfig"===n&&s(c.scheme||Z.bright_light)}))}),[]),Object(c.useEffect)((function(){var e=document.createAttribute("scheme");e.value=o,document.body.attributes.setNamedItem(e)}),[o]),Object(c.useEffect)((function(){f.isProductionMode&&h.a({dsn:"https://7bf1fed99e974079a290032a7ba45775@o158161.ingest.sentry.io/5831430",beforeSend:function(e,t){if(e.exception){var n=t&&t.originalException&&t.originalException instanceof Error&&t.originalException.message?t.originalException.message:"";r(Object(j.jsxs)(u.a,{actions:[{mode:"default",title:"\u041e\u041a",autoclose:!0}],onClose:function(){return r(null)},children:[Object(j.jsx)("h3",{children:"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 =("}),n&&Object(j.jsx)("p",{children:n}),Object(j.jsx)("p",{children:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0435\u0449\u0435 \u0440\u0430\u0437"})]}))}return e}}),Q(),$("open app")}),[]),Object(j.jsx)(u.b,{children:Object(j.jsx)(ee,{children:function(e){var t=e.loadingUser;return Object(j.jsx)(L,{loadingUser:t,popout:n})}})})}i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(d,{children:Object(j.jsx)(te,{})})}),document.getElementById("root")),o()},87:function(e,t,n){e.exports={canvasWrapper:"DiceHome_canvasWrapper__1lXrM"}}},[[198,1,2]]]);
//# sourceMappingURL=main.96d6d4e8.chunk.js.map