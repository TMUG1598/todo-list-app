(this["webpackJsonptodo-list-app"]=this["webpackJsonptodo-list-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a(30)},21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),s=(a(21),a(7)),l=a(9),o=(a(22),a(2)),m=function(e){return r.a.createElement("div",{className:"todo"},r.a.createElement("h3",null,e.title),r.a.createElement("div",null,r.a.createElement("button",{className:"timerBtn",value:e.value,onClick:e.timer},r.a.createElement(o.a,{icon:"clock"})),r.a.createElement("button",{className:"deleteBtn",value:e.value,onClick:e.delete},r.a.createElement(o.a,{icon:"trash-alt"}))))},u=a(12),d=a(13),v=a(15),h=a(14),E=(a(28),function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={timerOn:!1,minutes:25,seconds:0},e.startTimer=function(){e.setState({timerOn:!0}),e.myInterval=setInterval((function(){var t=e.state,a=t.seconds,n=t.minutes;a>0&&e.setState((function(e){return{seconds:e.seconds-1}})),0===a&&(0===n?clearInterval(e.myInterval):e.setState((function(e){return{minutes:e.minutes-1,seconds:59}})))}),1e3)},e.stopTimer=function(){e.setState({timerOn:!1}),clearInterval(e.myInterval)},e.resetTimer=function(){e.setState({timerOn:!1,minutes:25,seconds:0})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.minutes,a=e.seconds;return r.a.createElement("div",{className:"timer"},r.a.createElement("div",null,0===t&&0===a?r.a.createElement("h1",null,"Take a break!"):r.a.createElement("h3",null,"Time Remaining: ",r.a.createElement("span",null,t,":",a<10?"0".concat(a):a))),r.a.createElement("div",null,!1===this.state.timerOn&&25===this.state.minutes&&r.a.createElement("button",{onClick:this.startTimer},r.a.createElement(o.a,{icon:"play"})),!0===this.state.timerOn&&(0!=this.state.minutes||0!=this.state.seconds)&&r.a.createElement("button",{onClick:this.stopTimer},r.a.createElement(o.a,{icon:"pause"})),!1===this.state.timerOn&&this.state.minutes>=0&&25!=this.state.minutes&&r.a.createElement("button",{onClick:this.startTimer},r.a.createElement(o.a,{icon:"play"})),!1===this.state.timerOn&&25!=this.state.minutes&&r.a.createElement("button",{onClick:this.resetTimer},r.a.createElement(o.a,{icon:"redo-alt"})),!0===this.state.timerOn&&0===this.state.minutes&&0===this.state.seconds&&r.a.createElement("button",{onClick:this.resetTimer},r.a.createElement(o.a,{icon:"redo-alt"}))))}}]),a}(n.Component)),f=(a(29),a(5)),p=a(3);f.b.add(p.a,p.e,p.g,p.b,p.d,p.c,p.f);var b=function(){var e=function(e){e.preventDefault();var t=e.target.value;c===h[t]?i("Working on a task?"):i(c),h.splice(t,1),f(Object(l.a)(h))},t=Object(n.useState)("Working on a task?"),a=Object(s.a)(t,2),c=a[0],i=a[1],u=function(e){e.preventDefault();var t=e.target.value;i(h[t])},d=Object(n.useState)([]),v=Object(s.a)(d,2),h=v[0],f=v[1],b=Object(n.useState)(""),k=Object(s.a)(b,2),O=k[0],g=k[1],y=function(e){e.preventDefault(),f([].concat(Object(l.a)(h),[O])),g("")};return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"leftSide"},r.a.createElement("h1",{className:"title"},r.a.createElement(o.a,{icon:p.a}),r.a.createElement("span",null,"TO-DO LIST")),r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"What's your next task?",value:O,onChange:function(e){return g(e.target.value)}}),r.a.createElement("button",{className:"addBtn",disabled:!O,onClick:y},r.a.createElement(o.a,{icon:p.e,onClick:y}))),r.a.createElement("div",{className:"list"},h.map((function(t,a){return r.a.createElement(m,{key:a,value:a,title:t,delete:e,timer:u})})))),r.a.createElement("div",{className:"rightSide"},r.a.createElement("div",{className:"taskNow"},c),r.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.de6948cb.chunk.js.map