(this["webpackJsonptyping-game"]=this["webpackJsonptyping-game"]||[]).push([[0],{12:function(e,s,t){"use strict";t.r(s);var c=t(1),n=t(3),a=t.n(n);var i=t(4),r=t.n(i),l=(t(9),t(10),t(0));function d(){const[e,s]=Object(c.useState)([]),[t,n]=Object(c.useState)(60),[a,i]=Object(c.useState)(""),[d,j]=Object(c.useState)(0),[b,h]=Object(c.useState)(-1),[o,u]=Object(c.useState)(""),[O,x]=Object(c.useState)(0),[m,p]=Object(c.useState)(0),[f,N]=Object(c.useState)("waiting"),v=Object(c.useRef)(null);function g(){return new Array(100).fill(null).map((()=>r()()))}function y(s,t,c){return s===d&&t===b&&o&&"finished"!==f?c===o?"has-background-success":"has-background-danger":s===d&&b>=e[d].length?"has-background-danger":""}return Object(c.useEffect)((()=>{s(g())}),[]),Object(c.useEffect)((()=>{"started"===f&&v.current.focus()}),[f]),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"is-size-1 has-text-centered has-text-primary",children:Object(l.jsx)("h2",{children:t})})}),Object(l.jsx)("div",{className:"control is-expanded section",children:Object(l.jsx)("input",{ref:v,disabled:"started"!==f,type:"text",placeholder:"     \ud83d\udcac   \ud83d\udcac   \ud83d\udcac   \ud83d\udcac  ",className:"input",onKeyDown:function(s){let{keyCode:t,key:c}=s;32===t?(!function(){const s=e[d];s===a.trim()?x(O+1):p(m+1)}(),i(""),j(d+1),h(-1)):8===t?(h(b-1),u("")):(h(b+1),u(c))},value:a,onChange:e=>i(e.target.value)})}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("button",{className:"button is-info is-fullwidth",onClick:function(){if("finished"===f&&(s(g()),j(0),x(0),p(0),h(-1),u("")),"started"!==f){N("started");let e=setInterval((()=>{n((s=>0===s?(clearInterval(e),N("finished"),i(""),60):s-1))}),1e3)}},children:"Start"})}),"started"===f&&Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"card",children:Object(l.jsx)("div",{className:"card-content",children:Object(l.jsx)("div",{className:"content",children:e.map(((e,s)=>Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{children:e.split("").map(((e,t)=>Object(l.jsx)("span",{className:y(s,t,e),children:e},t)))}),Object(l.jsx)("span",{children:" "})]},s)))})})})}),"finished"===f&&Object(l.jsx)("div",{className:"section",children:Object(l.jsxs)("div",{className:"columns",children:[Object(l.jsxs)("div",{className:"column has-text-centered",children:[Object(l.jsx)("p",{className:"is-size-5",children:"Words per minute:"}),Object(l.jsx)("p",{className:"has-text-primary is-size-1",children:O})]}),Object(l.jsxs)("div",{className:"column has-text-centered",children:[Object(l.jsx)("p",{className:"is-size-5",children:"Accuracy:"}),0!==O?Object(l.jsxs)("p",{className:"has-text-info is-size-1",children:[Math.round(O/(O+m)*100),"%"]}):Object(l.jsx)("p",{className:"has-text-info is-size-1",children:"0%"})]})]})})]})})}const j=document.getElementById("root");a.a.render(Object(l.jsx)(c.StrictMode,{children:Object(l.jsx)(d,{})}),j)},9:function(e,s,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.2eade9ae.chunk.js.map