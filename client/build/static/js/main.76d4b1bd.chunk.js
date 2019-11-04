(this["webpackJsonpquick-utils"]=this["webpackJsonpquick-utils"]||[]).push([[0],{100:function(e,t,a){e.exports=a(190)},105:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=(a(105),a(8)),i=a(23),s=a.n(i),u=(a(34),"localhost:4000"),d=a(191),p=Object(n.createContext)(),f=function(){return Object(n.useContext)(p)},m=function(){var e=f(),t=Object(o.a)(e,2),a=t[0].displayMsg,c=t[1],l=Object(n.useState)(!1),i=Object(o.a)(l,2),s=i[0],u=i[1],p=Object(o.a)(a,2),m=p[0],g=p[1];return Object(n.useEffect)((function(){m&&g&&(c({type:"displayMsg",value:[!1,g]}),u(!0),setTimeout((function(){u(!1)}),4e3))}),[m,g]),r.a.createElement(d.a,{in:s,tag:"h5",className:"mt-3",style:{justifyContent:"center",zIndex:2}},g)},g=a(31),b=a.n(g),h=a(29),v=a(44);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a(132).config();var E=function(){var e=f(),t=Object(o.a)(e,2),a=t[0].userInfo,c=t[1],l=function(){var e=Object(v.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"production",e.next=5;break;case 5:return e.next=7,s.a.get("/user/name");case 7:n=e.sent,t=n.name;case 9:c({type:"changeUserInfo",userInfo:y({},a,{name:t})});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),r.a.createElement("header",{className:"App-header"},"Welcome to QuickUtils\u2122, ",a.name,"!")},j=a(17),k=a(24),w=a(91),P=u,C=function(e){var t=function(){var t=Object(v.a)(b.a.mark((function t(a){var n,r,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.coords.latitude,r=a.coords.longitude,c="https://api.openweathermap.org/data/2.5/forecast?lat=".concat(n,"&lon=").concat(r,"&appid=").concat("d15c1e96091187473b96203daebc8c2f"),t.next=5,s.a.get(c).then((function(t){var a=t.data;e({type:"updateWeather",weather:a}),console.log(a)})).catch((function(t){e({type:"displayMsg",value:[!0,"Failed to fetch weather data."]})}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();navigator.geolocation.getCurrentPosition(t,(function(){console.log("Cannot get geolocation. Check https protocol")}))},D=function(e){s.a.get("http://".concat(P,"/users/").concat("John","/events")).then((function(t){e({type:"updateEvents",events:t.data.events})})).catch((function(t){e({type:"displayMsg",value:[!0,"Failed to fetch calendar data."]})}))},x=function(){var e=f(),t=Object(o.a)(e,2);t[0].weather,t[1];return r.a.createElement("div",null,"placeholder")},S=function(){var e=f(),t=Object(o.a)(e,2),a=(t[0].weather,t[1]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{onClick:C.bind(null,a)},"Refresh"),r.a.createElement(x,null))},T=a(92),N=a.n(T),I=(a(79),a(80),function(e){var t=e.date,a=e.events,n=e.handleClick,c=a||[],l={sport:"blue",social:"pink",outdoors:"green"};return r.a.createElement("div",{className:"Calendar-date-column"},r.a.createElement("div",{className:"Calendar-details"},"The date and time is: "),r.a.createElement("div",{className:"Calendar-details"},r.a.createElement("h3",null,t.toDateString())),r.a.createElement("div",{className:"Calendar-details"},"Your events",r.a.createElement(w.a,{onClick:n,className:"refresh-button"},"Refresh")),c.map((function(e){var t=l[e.eventType.toLowerCase()];return r.a.createElement("div",{className:"Calendar-events",key:e.id,style:{backgroundColor:t}},e.eventName)})))}),M=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1],l=f(),i=Object(o.a)(l,2),s=i[0],u=s.datePicked,d=s.events,p=i[1],m=function(e,t){e&&c(e.filter((function(e){var a=e.day,n=e.month;return a===t.getDate()&&n===t.getMonth()})))};Object(n.useEffect)((function(){D(p)}),[]),Object(n.useEffect)((function(){m(d,u)}),[d]);return r.a.createElement("div",{className:"Calendar"},r.a.createElement(N.a,{value:u,onChange:function(e){p({type:"changeDate",newDate:e}),m(d,e)},minDate:new Date(2001,0,1),maxDate:new Date(2050,11,31),className:["Calendar-component"]}),r.a.createElement(I,{date:u,events:a,handleClick:D.bind(null,p)}))},F=a(99),R=a(47),J=a(192);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var G=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),borderRadius:"5px",background:e?"lightgreen":"grey"},t)},U=function(){var e=f(),t=Object(o.a)(e,2),a=t[0].tasks,c=t[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),s=i[0],u=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{style:{display:"flex"}},r.a.createElement(J.a,{placeholder:"New task...",style:{margin:"20px 10px 20px 0"},onChange:function(e){u(e.target.value)},value:s}),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),c({type:"updateTasks",tasks:[{id:(new Date).getTime(),content:s}].concat(Object(F.a)(a))}),u("")},style:{margin:"20px 0"}},"Submit")),r.a.createElement(R.a,{onDragEnd:function(e){if(e.destination){var t=function(e,t,a){var n=Array.from(e),r=n.splice(t,1),c=Object(o.a)(r,1)[0];return n.splice(a,0,c),n}(a,e.source.index,e.destination.index);c({type:"updateTasks",tasks:t})}}},r.a.createElement(R.c,{droppableId:"droppable"},(function(e,t){return r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,style:(n=t.isDraggingOver,{background:n?"lightblue":"lightgrey",padding:8,borderRadius:"5px"})}),a.map((function(e,t){return r.a.createElement(R.b,{key:e.id,draggableId:e.id,index:t},(function(t,a){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:G(a.isDragging,t.draggableProps.style)}),e.content)}))})),e.placeholder);var n}))))},W=function(){var e=f(),t=Object(o.a)(e,2),a=t[0].theme,c=t[1];Object(n.useEffect)((function(){var e=document.querySelector("body"),t=window.getComputedStyle(e).backgroundColor;c("rgb(40, 44, 52)"===t?{type:"changeTheme",newTheme:"dark"}:{type:"changeTheme",newTheme:"light"})}),[]);return r.a.createElement(w.a,{onClick:function(){var e="dark"===a?"rgb(194, 214, 255)":"rgb(40, 44, 52)",t="dark"===a?"light":"dark";document.body.style.backgroundColor=e,c({type:"changeTheme",newTheme:t})},className:"theme-toggle"},"dark"===a?"Switch to light theme":"Switch to dark theme")},A=function(){return Object(n.useEffect)((function(){}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null))},H=["weather","calendar","tasklist","preferences"],L=(a(187),function(){var e=Object(k.d)(),t=Object(k.e)(),a=H.indexOf(t.pathname.slice(1));return r.a.createElement(j.d,{onSelect:function(t){e.push("/".concat(H[t]))},selectedIndex:a},r.a.createElement(j.b,null,r.a.createElement(j.a,null,"Weather"),r.a.createElement(j.a,null,"Calendar"),r.a.createElement(j.a,null,"Task List"),r.a.createElement(j.a,null,"Preferences")),r.a.createElement(j.c,null,r.a.createElement(S,null)),r.a.createElement(j.c,null,r.a.createElement(M,null)),r.a.createElement(j.c,null,r.a.createElement(U,null)),r.a.createElement(j.c,null,r.a.createElement(A,null)))}),Q=a(193),z=a(194),B=a(195),V=a(196),Y=a(197),_=a(198),K=a(199),X=a(203),Z=a(200),$=a(201),ee=a(202),te=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(k.d)();return r.a.createElement(Q.a,{color:"light",light:!0,expand:"md"},r.a.createElement(z.a,{onClick:function(e){e.preventDefault(),l.push("/")},href:"/"},"QuickUtils"),r.a.createElement(B.a,{onClick:function(){return c(!a)}}),r.a.createElement(V.a,{isOpen:a,navbar:!0},r.a.createElement(Y.a,{className:"ml-auto",navbar:!0},r.a.createElement(_.a,null,r.a.createElement(K.a,{target:"_blank",href:"https://github.com/reactstrap/reactstrap"},"reactstrap GitHub")),r.a.createElement(X.a,{nav:!0,inNavbar:!0},r.a.createElement(Z.a,{nav:!0,caret:!0},"Sign in"),r.a.createElement($.a,{right:!0},r.a.createElement(ee.a,{href:"/auth/google"},"Google"),r.a.createElement(ee.a,{href:"/auth/github"},"Github"),r.a.createElement(ee.a,{divider:!0}),r.a.createElement(ee.a,{href:"/"},"Home"))))))},ae=a(43),ne=u,re=function(){var e=f(),t=Object(o.a)(e,2),a=t[0],c=a.loggedIn,l=a.events,i=a.tasks,u=a.theme,d=t[1],p={loggedIn:c,events:l,tasks:i,theme:u};return Object(n.useEffect)((function(){C(d),D(d),function(e){s.a.get("http://".concat(P,"/users/").concat("John","/tasks")).then((function(t){e({type:"updateTasks",events:t.data.tasks})})).catch((function(t){e({type:"displayMsg",value:[!0,"Failed to fetch tasks."]})}))}(d)}),[]),Object(n.useEffect)((function(){!function(e){s.a.post("http://".concat(ne,"/app-data"),{data:e}).catch((function(e){return console.log("Error in post request")}))}(p)}),[JSON.stringify(p)]),r.a.createElement(ae.a,null,r.a.createElement(te,null),r.a.createElement(m,null),r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(L,null)))};function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var le={changeUserInfo:["userInfo","userInfo"],switchTab:["selectedTab","selectedTab"],displayMsg:["displayMsg","value"],updateWeather:["weather","weather"],updateEvents:["events","events"],changeDate:["datePicked","newDate"],updateTasks:["tasks","tasks"],changeTheme:["theme","newTheme"]},oe={displayMsg:[!1,"No messages to display."],msg:"No messages.",userInfo:{name:"Guest"},selectedTab:H[0],weather:null,datePicked:new Date,loggedIn:!1,events:[],tasks:[{id:1,content:"Vacuum bedroom"},{id:2,content:"Finish weather util"}],theme:"dark"};l.a.render(r.a.createElement((function(e){var t=e.reducer,a=e.initialState,c=e.children;return r.a.createElement(p.Provider,{value:Object(n.useReducer)(t,a)},c)}),{initialState:oe,reducer:function(e,t){if(t.type in le){var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e),n=Object(o.a)(le[t.type],2),r=n[0],c=n[1];if(r in a&&c in t)return a[r]=t[c],a}return e}},r.a.createElement(re,null)),document.getElementById("root"))},34:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.76d4b1bd.chunk.js.map