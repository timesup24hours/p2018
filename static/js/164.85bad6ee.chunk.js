(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{1039:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=(t(837),t(838),function(){return r.a.createElement("div",{className:"AnimationWelcomePage-Logo"},r.a.createElement("span",{className:"piece"}),r.a.createElement("span",{className:"piece"}),r.a.createElement("span",{className:"piece"}),r.a.createElement("span",{className:"piece"}),r.a.createElement("span",{className:"piece"}),r.a.createElement("span",{className:"piece"}),r.a.createElement("span",{className:"piece"}),r.a.createElement("span",{className:"piece"}),r.a.createElement("span",{className:"piece"}),r.a.createElement("span",{className:"piece"}))}),s=t(289),l=(t(839),function(){return r.a.createElement("svg",{className:"SVGLine",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"340px",height:"333px",viewBox:"0 0 340 333",enableBackground:"new 0 0 340 333"},r.a.createElement("path",{className:"path",fill:"#FFFFFF",stroke:"#000000",strokeWidth:"4",strokeMiterlimit:"10",d:"M66.039,133.545c0,0-21-57,18-67s49-4,65,8 s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41 C46.039,146.545,53.039,128.545,66.039,133.545z"}))}),i=t(205),o=Object(i.a)(function(e){var a=e.history;return Object(n.useEffect)(function(){var e=document.querySelector(".Nav_nav"),a=document.querySelector(".nav_line"),t=setTimeout(function(){e.style.display="grid",e.classList.add("AnimationWelcomePage-Nav_nav")},3e3);return function(){e.classList.remove("AnimationWelcomePage-Nav_nav"),e.style.display="grid",a.style.display="var(--nav-line-display)",clearTimeout(t)}}),r.a.createElement("div",{className:"AnimationWelcomePage"},r.a.createElement("div",{className:"waterfall"}),r.a.createElement("div",{className:"name"},r.a.createElement(c,null),r.a.createElement("h3",{className:"text"},"Huanlin Huang ")),r.a.createElement("div",{className:"center-text"},r.a.createElement("div",{className:"center-text-container"},r.a.createElement("div",{className:"text-container"},r.a.createElement("h1",{className:"h1"},"React"),r.a.createElement("span",{className:"line"})),r.a.createElement("div",{className:"text-container"},r.a.createElement("h2",{className:"h2"},"Javascript Developer .")),r.a.createElement("div",{className:"h3-container"},r.a.createElement("h3",{className:"h3"},"Redux redux-thunk redux-saga .")))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-holder"},r.a.createElement(s.a,{info:"huanlinhuang@gmail.com",phone:"415-361-9522"}))),r.a.createElement("div",{className:"svg-line"},r.a.createElement(l,null)),r.a.createElement("div",{className:"strong",onClick:function(){return a.push("/css_effects")}},r.a.createElement("div",{className:"strong-rel"},r.a.createElement("div",{className:"text-conatiner"},r.a.createElement("div",{className:"text"},"Always Learning"),r.a.createElement("div",{className:"click"},"See more demo")))))});a.default=o},125:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n=function(e,a,t,n,r,c){new IntersectionObserver(function(e,s){e.forEach(function(e,l){var i=n<4?a.fromTop:a.fromLeft;if(e.isIntersecting){if(r)return void r();e.target.classList.contains(i)||e.target.classList.add(i),t&&s.disconnect()}else{if(c)return void c();e.target.classList.contains(i)&&e.target.classList.remove(i)}})}).observe(e)}},144:function(e,a,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c=Object.defineProperty,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,o=Object.getPrototypeOf,m=o&&o(Object);e.exports=function e(a,t,u){if("string"!==typeof t){if(m){var p=o(t);p&&p!==m&&e(a,p,u)}var f=s(t);l&&(f=f.concat(l(t)));for(var d=0;d<f.length;++d){var v=f[d];if(!n[v]&&!r[v]&&(!u||!u[v])){var E=i(t,v);try{c(a,v,E)}catch(g){}}}return a}return a}},204:function(e,a,t){e.exports={container:"UserCard_container__1ZYMz",card:"UserCard_card__3FPUT",box:"UserCard_box__38HSO",img:"UserCard_img__1eOZI",name:"UserCard_name__3gbyT"}},205:function(e,a,t){"use strict";var n=t(1),r=t.n(n),c=t(2),s=t.n(c),l=t(144),i=t.n(l),o=t(41),m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};a.a=function(e){var a=function(a){var t=a.wrappedComponentRef,n=function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(a,["wrappedComponentRef"]);return r.a.createElement(o.a,{children:function(a){return r.a.createElement(e,m({},n,a,{ref:t}))}})};return a.displayName="withRouter("+(e.displayName||e.name)+")",a.WrappedComponent=e,a.propTypes={wrappedComponentRef:s.a.func},i()(a,e)}},289:function(e,a,t){"use strict";var n=t(1),r=t.n(n),c=t(204),s=t.n(c),l=t(125);a.a=function(e){var a=e.hasAnimation,t=e.info,c=void 0===t?"I am a self-taught full-stack developer, since 2017":t,i=e.phone;return Object(n.useEffect)(function(){a&&document.querySelectorAll("#user-card").forEach(function(e){return Object(l.a)(e,{fromLeft:"userCardAnimation"})})},[]),r.a.createElement("div",{className:s.a.container},r.a.createElement("div",{className:s.a.card,id:"user-card"},r.a.createElement("div",{className:s.a.box},r.a.createElement("div",{className:s.a.img},r.a.createElement("img",{src:"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/11885312_933409170050854_7994195451447625344_n.jpg?_nc_cat=104&_nc_oc=AQlMKlZHoqUMtYI59PfKcT5J7jf2JCGEntLcuPO-mtMG3VwrGCpI__EvPV4SdcCGI9OfgkP3ZeWYcxunQTIMawfQ&_nc_ht=scontent-sjc3-1.xx&oh=76860530bb5a10e1f9535446764bb8fa&oe=5DBDC123",alt:""})),r.a.createElement("h2",null,r.a.createElement("div",{className:s.a.name},"Huanlin Huang "),r.a.createElement("span",null,"Vim user")),r.a.createElement("p",null,c," ",i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),i)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/huanlin.huang",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-facebook-f"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/huanlin-huang-4b7b9b183",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin-in"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/timesup24hours",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"})))))))}},837:function(e,a,t){},838:function(e,a,t){},839:function(e,a,t){}}]);
//# sourceMappingURL=164.85bad6ee.chunk.js.map