(this["webpackJsonpcra-rdx"]=this["webpackJsonpcra-rdx"]||[]).push([[0],{21:function(n,e,t){n.exports=t(34)},26:function(n,e,t){},33:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(8),c=t.n(o),i=(t(26),t(1)),l=t(2);function u(){var n=Object(i.a)(["\n  background: white;\n  z-index: 10;\n  line-height: 30px;\n  padding-left: 16px;\n  padding-right: 16px;\n  color: ",";\n  background: ",";\n  &:hover{\n    cursor: pointer;\n  };\n"]);return u=function(){return n},n}function d(){var n=Object(i.a)(["\n  list-style: none;\n  display: flex;\n  vertical-align: center;\n  height: 30px;\n  margin: 0;\n"]);return d=function(){return n},n}function p(){var n=Object(i.a)(["\n  margin: 0;\n  margin-bottom: 1em;\n  background-color: white;\n  color: black;\n  text-align: left;\n  width: 100vw;\n  border-bottom: 2px solid black;\n  line-height: 30px;\n  height: 32px;\n  font-family: Chicago;\n"]);return p=function(){return n},n}var s=l.a.nav(p()),m=l.a.ul(d()),b=l.a.li(u(),(function(n){return n.open?"white":"black"}),(function(n){return n.open?"black":"white"})),f=t(5),g=t(7),h=0,v=Object(g.b)({name:"window",initialState:[{id:h++,name:"Messages",subheader:"John Appleseed"}],reducers:{addWindow:function(n,e){console.log(n,e),e.payload&&n.push({id:h++,name:"Messages",subheader:"John Appleseed"})}}}),x=(v.actions.addWindow,function(n){return n.window}),k=v.reducer,E=Object(g.b)({name:"toolbar",initialState:[{id:0,name:"File",open:!1,children:[{name:"New Conversation",type:"ADD_WINDOW"},{name:"Open...",type:"OPEN"}]},{id:1,name:"Edit",open:!1,children:[{name:"Cut",type:"ADD_WINDOW"},{name:"Copy",type:"ADD_WINDOW"},{name:"Paste",type:"ADD_WINDOW"}]},{id:2,name:"View",open:!1,children:[{name:"Make text bigger",type:"ADD_WINDOW"},{name:"Make text smaller",type:"ADD_WINDOW"}]}],reducers:{toggleItem:function(n,e){n.map((function(n){return n.id===e.payload?n.open=!n.open:n.open=!1}))}}}),w=E.actions.toggleItem,O=function(n){return n.toolbar},j=E.reducer;function y(){var n=Object(i.a)(["\n  font-family: Chicago;\n  -webkit-appearance: none;\n  padding: 8px;\n  &:hover{\n    cursor: pointer;\n    color: white;\n    background: black;\n  }\n"]);return y=function(){return n},n}function D(){var n=Object(i.a)(["\n  background: white;\n  border: 0;\n  display: block;\n  font-size: 32px;\n  font: inherit;\n  list-style: none;\n  position: fixed;\n  padding: 0;\n  margin-left: -16px;\n  border: 2px solid black;\n  color: black;\n"]);return D=function(){return n},n}var W=l.a.ul(D()),N=l.a.li(y());function I(n){return n.open&&a.a.createElement(W,null,n.children.map((function(n,e){return a.a.createElement(N,{key:e,href:"#"},n.name)})))}function A(n){var e=Object(f.b)(),t=Object(f.c)(O);return a.a.createElement(s,null,a.a.createElement(m,null,a.a.createElement("div",{className:"apple-logo"}),t.map((function(n,t){return a.a.createElement(b,{key:t,onClick:function(){e(w(t))},open:n.open},n.name,a.a.createElement(I,{children:n.children,open:n.open}))}))))}var C=t(20),M=Object(g.b)({name:"message",initialState:[],reducers:{postMessage:{reducer:function(n,e){n.push({text:e.payload})}}}}),S=M.actions,_=S.postMessage,J=(S.addConversation,function(n){return n.message}),z=M.reducer;function P(){var n=Object(i.a)(["\n  padding: 5px;\n  margin: 0.25em;\n  background-color: white;\n  color: black;\n  text-align: left;\n  overflow:hidden\n"]);return P=function(){return n},n}var V=l.a.li(P());function B(n){var e=Object(r.useRef)(null);return Object(r.useEffect)((function(){e.current.scrollIntoView()})),a.a.createElement(V,{ref:e},a.a.createElement("span",null,n.msg.text))}function F(){var n=Object(i.a)(["\n  padding: 5px;\n  --border-bottom: 1px solid black;\n  border-top: 2px solid black;\n  margin:0;\n  margin-top: 2px;\n  color: black;\n  height: 200px;\n  list-style: none;\n  overflow-y: scroll;\n"]);return F=function(){return n},n}var R=l.a.ul(F());function q(){var n=Object(i.a)([""]);return q=function(){return n},n}function G(n){var e=Object(f.c)(J);return a.a.createElement(R,{className:Object(C.a)(q())},e.map((function(n,t){return a.a.createElement(B,{key:t,msg:n,last:t===e.length-1})})))}var H=t(19);function K(){var n=Object(i.a)(["\n  font: 32px Chicago;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);return K=function(){return n},n}function L(){var n=Object(i.a)(["\n  font: inherit;\n  border: 0px;\n  border-top: 2px solid black;\n  border-color: black\n"]);return L=function(){return n},n}function Q(){var n=Object(i.a)(["\n  font: inherit;\n  border: 0px;\n  border-top: 2px solid black;\n  border-right: 2px solid black;\n  width: 100%;\n  --caret-color: transparent;\n  padding-left: 6px;\n  border-image: none;\n  border-color: black;\n  focus: none;\n"]);return Q=function(){return n},n}var T=l.a.input(Q()),U=l.a.button(L()),X=l.a.form(K());function Y(n){var e=Object(f.b)(),t=Object(r.useState)(" "),o=Object(H.a)(t,2),c=o[0],i=o[1];return a.a.createElement(X,{onSubmit:function(n){return function(n){n.preventDefault(),e(_(c)||""),i("")}(n)}},a.a.createElement(T,{"aria-label":"Enter text",value:c,onChange:function(n){return i(""+n.target.value)}}),a.a.createElement(U,null,"Send"))}function Z(){var n=Object(i.a)(["\n  margin: auto;\n"]);return Z=function(){return n},n}var $=l.a.div(Z());function nn(n){return a.a.createElement($,{className:"message-container"},a.a.createElement(G,null),a.a.createElement(Y,null))}function en(){var n=Object(i.a)(["\n  margin: auto;\n  border: 2px solid black;\n  width: 320px;\n  max-height: 320px;\n  background: white;\n  left: 10%;\n"]);return en=function(){return n},n}var tn=l.a.div(en());function rn(n){var e=n.window,t=e.name,r=e.subheader;return a.a.createElement(tn,null,a.a.createElement("header",null,a.a.createElement("div",{className:"background"},a.a.createElement("span",null,t))),a.a.createElement("section",null,r),a.a.createElement("main",null,a.a.createElement(nn,null)))}function an(n){return Object(f.c)(x).map((function(n,e){return a.a.createElement(rn,{key:e,window:n})}))}t(33);var on=function(){return a.a.createElement("div",{className:"App",style:{overflow:"hidden"}},a.a.createElement(A,null),a.a.createElement(an,null))},cn=Object(g.a)({reducer:{message:z,toolbar:j,window:k}});c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f.a,{store:cn},a.a.createElement(on,null))),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.0a142e39.chunk.js.map