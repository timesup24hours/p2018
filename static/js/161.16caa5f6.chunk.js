(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{204:function(e,t,a){e.exports={container:"HomePage_container__2QSkr",content:"HomePage_content__q1gdB"}},205:function(e,t,a){e.exports={container:"WavyBackground_container__3VjTZ",wave:"WavyBackground_wave__3m5i_",wave1:"WavyBackground_wave1__3mLcX",starts_container:"WavyBackground_starts_container__FrFjI",backgroundColorPurple:"WavyBackground_backgroundColorPurple__Q7Gdt",backgroundColorNight:"WavyBackground_backgroundColorNight__2Vn1t",stars:"WavyBackground_stars__TGntq",animStar:"WavyBackground_animStar__3AhB7",stars2:"WavyBackground_stars2__EqEKD",stars3:"WavyBackground_stars3__YhMzb",title:"WavyBackground_title__2Gr_E"}},206:function(e,t,a){e.exports={container:"DayNightModeSwitchToggle_container__1zLES",toggle:"DayNightModeSwitchToggle_toggle__2D9af",active:"DayNightModeSwitchToggle_active__nsMhF",night:"DayNightModeSwitchToggle_night__1xwDj",font:"DayNightModeSwitchToggle_font__3awkw"}},207:function(e,t,a){e.exports={container:"BriefInfo_container__1T0t3",title:"BriefInfo_title__2ytmm",blockWrapper:"BriefInfo_blockWrapper__3MzN-",block:"BriefInfo_block__28t5c",blockTitle:"BriefInfo_blockTitle__7CX-2",blockContent:"BriefInfo_blockContent__2-N_t"}},208:function(e,t,a){e.exports={container:"UserCard_container__1ZYMz",card:"UserCard_card__3FPUT",box:"UserCard_box__38HSO",img:"UserCard_img__1eOZI",name:"UserCard_name__3gbyT"}},209:function(e,t,a){e.exports={container:"Wavy2Content_container__3jA0s",title:"Wavy2Content_title__zbp7u",content:"Wavy2Content_content__2snnt"}},210:function(e,t,a){e.exports={container:"Footer_container__3wtn6",copyright:"Footer_copyright__2zFMg"}},608:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(204),l=a.n(c),i=a(46),o=a(205),s=a.n(o),u=a(206),m=a.n(u),d=function(e){var t=e.onClick;return r.a.createElement("div",{className:m.a.container},r.a.createElement("div",{className:m.a.toggle,onClick:function(e){if(t)return e.target.classList.toggle("".concat(m.a.active)),void t(e);e.target.classList.toggle("".concat(m.a.active)),e.target.parentNode.parentNode.classList.toggle("".concat(m.a.night)),e.target.parentNode.parentNode.parentNode.classList.toggle("".concat(m.a.font))}}))},_=a(34),g=a(207),f=a.n(g),p=function(e,t,a){new IntersectionObserver(function(e,n){e.forEach(function(e,r){e.isIntersecting?(e.target.classList.contains(t)||e.target.classList.add(t),a&&n.disconnect()):e.target.classList.contains(t)&&e.target.classList.remove(t)})}).observe(e)},E=[{title:"ReactJS",desc:"Render props, HOC, lifecycles, React Hooks, Code Split, Lazy, Suspense, React Router"},{title:"Redux",desc:"Redux for global state management, Immutable, Redux-thunk or Redux-saga / Apollo GraphQL"},{title:"Javascript",desc:"Javascript ES5 prototypal inheritance and ES6 syntax, Closure / Event Loop / Currying / IIFE / Intersection Observer API / Dom API / Pure Function"},{title:"NodeJS",desc:"Building Restful CRUD API using NodeJS/ExpressJS/Swagger/Auth0/JWT"},{title:"MongoDB",desc:"Building schema using MongoDB/Mongoose, Validator Joi"},{title:"HTML",desc:"Semantic HTML HTML5/Accessibility/Screen Reader/Keyboard user friendly"},{title:"CSS",desc:"CSS SASS/SCSS /CSS3 Animation/Mobile/Multi screen sizes friendly"},{title:"CS",desc:"Computer science fundamentals and Data structures, MVC, OOP"},{title:"Agile",desc:"Trello, Jira, Subject to change"},{title:"Deployment",desc:"Linux CMD, SSH, Create Instance in cloud provider, Setting nginx/SSL/Let's Encrypt/load balancing in Docker container infront of multi app instances"},{title:"Test",desc:"e2e with puppeteer. Jest, enzyme, react-testing-library for unit testing, Circle CI"},{title:"Tools",desc:"@flow, Typescript, ESLint, Prettier, Vim, VSCode, CRA"}],b=function(e){var t=e.data;return r.a.createElement("div",{id:"block_info",className:f.a.block},r.a.createElement("div",{className:f.a.blockTitle},t.title),r.a.createElement("div",{className:f.a.blockContent},t.desc))},v=function(){return Object(n.useEffect)(function(){document.querySelectorAll("#block_info").forEach(function(e){return p(e,"blockContentAnimation",!0)})},[]),r.a.createElement("div",{className:f.a.container},r.a.createElement("div",{className:f.a.title},"My Tech Stack and",r.a.createElement(_.a,{to:"/my_notes/Resume#00feae1f-b6e4-4e23-ae95-61c486da151e",style:{marginLeft:"12px"}},"Resume")),r.a.createElement("div",{className:f.a.blockWrapper},E.map(function(e,t){return r.a.createElement(b,{key:t,data:e})})))},h=a(208),k=a.n(h),y=function(){return Object(n.useEffect)(function(){document.querySelectorAll("#user-card").forEach(function(e){return p(e,"userCardAnimation")})},[]),r.a.createElement("div",{className:k.a.container},r.a.createElement("div",{className:k.a.card,id:"user-card"},r.a.createElement("div",{className:k.a.box},r.a.createElement("div",{className:k.a.img},r.a.createElement("img",{src:"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/11885312_933409170050854_7994195451447625344_n.jpg?_nc_cat=104&_nc_oc=AQlMKlZHoqUMtYI59PfKcT5J7jf2JCGEntLcuPO-mtMG3VwrGCpI__EvPV4SdcCGI9OfgkP3ZeWYcxunQTIMawfQ&_nc_ht=scontent-sjc3-1.xx&oh=76860530bb5a10e1f9535446764bb8fa&oe=5DBDC123",alt:""})),r.a.createElement("h2",null,r.a.createElement("div",{className:k.a.name},"Huanlin Huang "),r.a.createElement("span",null,"Vim user")),r.a.createElement("p",null,"I am a self-taught full-stack developer, since 2017"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/huanlin.huang",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-facebook-f"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/huanlin-huang-4b7b9b183",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin-in"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/timesup24hours",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"})))))))},S=a(19),C=a(20),N=a(22),w=a(21),T=a(23),x=a(209),I=a.n(x),M=function(e){function t(){return Object(S.a)(this,t),Object(N.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:I.a.container},r.a.createElement("div",{className:I.a.title},"Libraries I have used in production:"),r.a.createElement("div",{className:I.a.content},r.a.createElement("ul",null,r.a.createElement("li",null,"GIT"),r.a.createElement("li",null,"D3.js/Recharts for data visualization"),r.a.createElement("li",null,"End-to-end testing with Puppeteer and Jest"),r.a.createElement("li",null,"Unit test using react-testing-library, enzyme, Jest"),r.a.createElement("li",null,"Rich Text Editor, DraftJS"),r.a.createElement("li",null,"Video and Screen Recording, WebRTC"),r.a.createElement("li",null,"react-s3-uploader"),r.a.createElement("li",null,"Material Ui/Ant Design"),r.a.createElement("li",null,"React Transition Group"),r.a.createElement("li",null,"... more"))))}}]),t}(r.a.PureComponent),B=function(e){var t=e.toggle,a=e.children;return r.a.createElement("div",{className:"".concat(s.a.starts_container," ").concat(t?s.a.backgroundColorNight:s.a.backgroundColorPurple)},r.a.createElement("div",{className:s.a.stars}),r.a.createElement("div",{className:s.a.stars2}),r.a.createElement("div",{className:s.a.stars3}),a)},L=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(i.a)(a,2),l=c[0],o=c[1];return r.a.createElement("div",{className:s.a.container},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(B,{toggle:l},t),r.a.createElement(d,{onClick:function(){return o(function(e){return!e})}})),r.a.createElement(v,null),r.a.createElement("section",{className:s.a.wave1},r.a.createElement(y,null),r.a.createElement(M,null)))},D=a(210),R=a.n(D),W=function(){return r.a.createElement("footer",{className:R.a.container},r.a.createElement("div",{className:R.a.copyright},"\xa9 2019:"," ",r.a.createElement("a",{href:"https://timesup24hours.github.io/p2018"},"https://timesup24hours.github.io/p2018")))};t.default=function(){return r.a.createElement("div",{className:l.a.container},r.a.createElement(L,null,r.a.createElement("div",{className:l.a.content},r.a.createElement("div",null,"Huanlin Huang"),r.a.createElement("div",null,"Javascript Developer"))),r.a.createElement(W,null))}}}]);
//# sourceMappingURL=161.16caa5f6.chunk.js.map