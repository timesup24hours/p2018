(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{1048:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(206).a,o=a(462),i=a.n(o),l=a(38),s=a(463),u=a.n(s),m=a(464),d=a.n(m),f=function(e){var t=e.onClick;return r.a.createElement("div",{className:d.a.container},r.a.createElement("div",{className:d.a.toggle,onClick:function(e){if(t)return e.target.classList.toggle("".concat(d.a.active)),void t(e);e.target.classList.toggle("".concat(d.a.active)),e.target.parentNode.parentNode.classList.toggle("".concat(d.a.night)),e.target.parentNode.parentNode.parentNode.classList.toggle("".concat(d.a.font))}}))},p=a(35),g=a(465),_=a.n(g),v=a(126),E=[{title:"ReactJS",desc:"Render props, HOC, lifecycles, React Hooks, Code Split, Lazy, Suspense, React Router"},{title:"Redux",desc:"Redux for global state management, Immutable, Redux-thunk or Redux-saga / Apollo GraphQL"},{title:"Javascript",desc:"Javascript ES5 prototypal inheritance and ES6 syntax, Closure / Event Loop / Currying / IIFE / Intersection Observer API / Dom API / Pure Function"},{title:"NodeJS",desc:"Building Restful CRUD API using NodeJS/ExpressJS/Swagger/Auth0/JWT"},{title:"MongoDB",desc:"Building schema using MongoDB/Mongoose, Validator Joi"},{title:"HTML",desc:"Semantic HTML HTML5/Accessibility/Screen Reader/Keyboard user friendly"},{title:"CSS",desc:"CSS SASS/SCSS /CSS3 Animation/Mobile/Multi screen sizes friendly"},{title:"CS",desc:"Computer science fundamentals and Data structures, MVC, OOP"},{title:"Agile",desc:"Trello, Jira, Subject to change, communication tool Slack/Zoom, Write Documentation/Commentting code"},{title:"Deployment",desc:"Linux CMD, SSH, Create Instance in cloud provider, Setting nginx/SSL/Let's Encrypt/load balancing in Docker container infront of multi app instances"},{title:"Test",desc:"e2e with puppeteer. Jest, enzyme, react-testing-library for unit testing, Circle CI"},{title:"Tools",desc:"@flow, Typescript, ESLint, Prettier, Vim, VSCode, CRA"}],b=function(){return Object(n.useEffect)(function(){document.querySelectorAll("#block_info").forEach(function(e,t){return Object(v.a)(e,{fromLeft:"blockContentAnimation",fromTop:"blockContentAnimationFromTop"},!0,t)})},[]),r.a.createElement("div",{className:_.a.container},r.a.createElement("div",{className:_.a.title},"My Tech Stack and",r.a.createElement(p.a,{to:"/my_notes/Resume#00feae1f-b6e4-4e23-ae95-61c486da151e",style:{marginLeft:"12px"}},"Resume")),r.a.createElement("div",{className:_.a.blockWrapper},E.map(function(e,t){return r.a.createElement(h,{key:t,data:e})})))},h=function(e){var t=e.data;return r.a.createElement("div",{id:"block_info",className:_.a.block},r.a.createElement("div",{className:_.a.blockTitle},t.title),r.a.createElement("div",{className:_.a.blockContent},t.desc))},y=b,k=a(290),C=a(19),S=a(20),N=a(22),w=a(21),O=a(23),T=a(466),x=a.n(T),j=function(e){function t(){return Object(C.a)(this,t),Object(N.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:x.a.container},r.a.createElement("div",{className:x.a.title},"Libraries I have used in production:"),r.a.createElement("div",{className:x.a.content},r.a.createElement("ul",null,r.a.createElement("li",null,"GIT"),r.a.createElement("li",null,"D3.js/Recharts for data visualization"),r.a.createElement("li",null,"End-to-end testing with Puppeteer and Jest"),r.a.createElement("li",null,"Unit test using react-testing-library, enzyme, Jest"),r.a.createElement("li",null,"Rich Text Editor, DraftJS"),r.a.createElement("li",null,"Video and Screen Recording, WebRTC"),r.a.createElement("li",null,"react-s3-uploader"),r.a.createElement("li",null,"Material Ui/Ant Design"),r.a.createElement("li",null,"React Transition Group"),r.a.createElement("li",null,"... more"))))}}]),t}(r.a.PureComponent),P=function(e){var t=e.toggle,a=e.children;return r.a.createElement("div",{className:"".concat(u.a.starts_container," ").concat(t?u.a.backgroundColorNight:u.a.backgroundColorPurple)},r.a.createElement("div",{className:u.a.stars}),r.a.createElement("div",{className:u.a.stars2}),r.a.createElement("div",{className:u.a.stars3}),a)},D=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(l.a)(a,2),o=c[0],i=c[1];return r.a.createElement("div",{className:u.a.container},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(P,{toggle:o},t),r.a.createElement(f,{onClick:function(){return i(function(e){return!e})}})),r.a.createElement(y,null),r.a.createElement("section",{className:u.a.wave1},r.a.createElement(k.a,{hasAnimation:!0}),r.a.createElement(j,null)))},I=a(467),L=a.n(I),M=function(){return r.a.createElement("footer",{className:L.a.container},r.a.createElement("div",{className:L.a.copyright},"\xa9 2019:"," ",r.a.createElement("a",{href:"https://timesup24hours.github.io/p2018"},"https://timesup24hours.github.io/p2018")))},B=c(function(e){var t=e.history;return r.a.createElement("div",{className:i.a.container},r.a.createElement(D,null,r.a.createElement("div",{className:i.a.content,onClick:function(){var e=document.querySelector(".Nav_nav"),a=document.querySelector(".nav_line");e.style.display="none",a.style.display="none",t.push("/call")}},r.a.createElement("div",null,"Huanlin Huang"),r.a.createElement("div",null,"Javascript Developer"))),r.a.createElement(M,null))});t.default=B},126:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e,t,a,n,r,c){new IntersectionObserver(function(e,o){e.forEach(function(e,i){var l=n<4?t.fromTop:t.fromLeft;if(e.isIntersecting){if(r)return void r();e.target.classList.contains(l)||e.target.classList.add(l),a&&o.disconnect()}else{if(c)return void c();e.target.classList.contains(l)&&e.target.classList.remove(l)}})}).observe(e)}},145:function(e,t,a){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c=Object.defineProperty,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,u=s&&s(Object);e.exports=function e(t,a,m){if("string"!==typeof a){if(u){var d=s(a);d&&d!==u&&e(t,d,m)}var f=o(a);i&&(f=f.concat(i(a)));for(var p=0;p<f.length;++p){var g=f[p];if(!n[g]&&!r[g]&&(!m||!m[g])){var _=l(a,g);try{c(t,g,_)}catch(v){}}}return t}return t}},205:function(e,t,a){e.exports={container:"UserCard_container__1ZYMz",card:"UserCard_card__3FPUT",box:"UserCard_box__38HSO",img:"UserCard_img__1eOZI",name:"UserCard_name__3gbyT"}},206:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(2),o=a.n(c),i=a(145),l=a.n(i),s=a(41),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.a=function(e){var t=function(t){var a=t.wrappedComponentRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["wrappedComponentRef"]);return r.a.createElement(s.a,{children:function(t){return r.a.createElement(e,u({},n,t,{ref:a}))}})};return t.displayName="withRouter("+(e.displayName||e.name)+")",t.WrappedComponent=e,t.propTypes={wrappedComponentRef:o.a.func},l()(t,e)}},290:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(205),o=a.n(c),i=a(126);t.a=function(e){var t=e.hasAnimation,a=e.info,c=void 0===a?"I am a self-taught full-stack developer, since 2017":a,l=e.phone;return Object(n.useEffect)(function(){t&&document.querySelectorAll("#user-card").forEach(function(e){return Object(i.a)(e,{fromLeft:"userCardAnimation"})})},[]),r.a.createElement("div",{className:o.a.container},r.a.createElement("div",{className:o.a.card,id:"user-card"},r.a.createElement("div",{className:o.a.box},r.a.createElement("div",{className:o.a.img},r.a.createElement("img",{src:"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/11885312_933409170050854_7994195451447625344_n.jpg?_nc_cat=104&_nc_oc=AQlMKlZHoqUMtYI59PfKcT5J7jf2JCGEntLcuPO-mtMG3VwrGCpI__EvPV4SdcCGI9OfgkP3ZeWYcxunQTIMawfQ&_nc_ht=scontent-sjc3-1.xx&oh=76860530bb5a10e1f9535446764bb8fa&oe=5DBDC123",alt:""})),r.a.createElement("h2",null,r.a.createElement("div",{className:o.a.name},"Huanlin Huang "),r.a.createElement("span",null,"Vim user")),r.a.createElement("p",null,c," ",l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),l)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/huanlin.huang",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-facebook-f"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/huanlin-huang-4b7b9b183",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin-in"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/timesup24hours",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"})))))))}},462:function(e,t,a){e.exports={container:"HomePage_container__2QSkr",content:"HomePage_content__q1gdB"}},463:function(e,t,a){e.exports={container:"WavyBackground_container__3VjTZ",wave:"WavyBackground_wave__3m5i_",wave1:"WavyBackground_wave1__3mLcX",starts_container:"WavyBackground_starts_container__FrFjI",backgroundColorPurple:"WavyBackground_backgroundColorPurple__Q7Gdt",backgroundColorNight:"WavyBackground_backgroundColorNight__2Vn1t",stars:"WavyBackground_stars__TGntq",animStar:"WavyBackground_animStar__3AhB7",stars2:"WavyBackground_stars2__EqEKD",stars3:"WavyBackground_stars3__YhMzb",title:"WavyBackground_title__2Gr_E"}},464:function(e,t,a){e.exports={container:"DayNightModeSwitchToggle_container__1zLES",toggle:"DayNightModeSwitchToggle_toggle__2D9af",active:"DayNightModeSwitchToggle_active__nsMhF",night:"DayNightModeSwitchToggle_night__1xwDj",font:"DayNightModeSwitchToggle_font__3awkw"}},465:function(e,t,a){e.exports={container:"BriefInfo_container__1T0t3",title:"BriefInfo_title__2ytmm",blockWrapper:"BriefInfo_blockWrapper__3MzN-",block:"BriefInfo_block__28t5c",blockTitle:"BriefInfo_blockTitle__7CX-2",blockContent:"BriefInfo_blockContent__2-N_t"}},466:function(e,t,a){e.exports={container:"Wavy2Content_container__3jA0s",title:"Wavy2Content_title__zbp7u",content:"Wavy2Content_content__2snnt"}},467:function(e,t,a){e.exports={container:"Footer_container__3wtn6",copyright:"Footer_copyright__2zFMg"}}}]);
//# sourceMappingURL=163.9a963369.chunk.js.map