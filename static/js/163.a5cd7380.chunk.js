(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{1065:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(206).a,c=n(466),i=n.n(c),l=n(38),s=n(467),u=n.n(s),m=n(468),d=n.n(m),f=function(e){var t=e.onClick;return r.a.createElement("div",{className:d.a.container},r.a.createElement("div",{className:d.a.toggle,"data-heap-track-id":"homepage-toggle-night-switch",onClick:function(e){if(t)return e.target.classList.toggle("".concat(d.a.active)),void t(e);e.target.classList.toggle("".concat(d.a.active)),e.target.parentNode.parentNode.classList.toggle("".concat(d.a.night)),e.target.parentNode.parentNode.parentNode.classList.toggle("".concat(d.a.font))}}))},p=n(35),g=n(469),v=n.n(g),h=n(115),_=[{title:"ReactJS",desc:"Render props, HOC, lifecycles, React Hooks, Code Split, Lazy, Suspense, React Router"},{title:"Redux",desc:"Redux for global state management, Immutable, Redux-thunk or Redux-saga / Apollo GraphQL"},{title:"Javascript",desc:"Javascript ES5 prototypal inheritance and ES6 syntax, Closure / Event Loop / Currying / IIFE / Intersection Observer API / Dom API / Pure Function"},{title:"NodeJS",desc:"Building Restful CRUD API using NodeJS/ExpressJS/Swagger/Auth0/JWT"},{title:"MongoDB",desc:"Building schema using MongoDB/Mongoose, Validator Joi"},{title:"HTML",desc:"Semantic HTML HTML5/Accessibility/Screen Reader/Keyboard user friendly"},{title:"CSS",desc:"CSS SASS/SCSS /CSS3 Animation/Mobile/Multi screen sizes friendly"},{title:"CS",desc:"Computer science fundamentals and Data structures, MVC, OOP"},{title:"Agile",desc:"Trello, Jira, Subject to change, communication tool Slack/Zoom, Write Documentation/Commentting code"},{title:"Deployment",desc:"Linux CMD, SSH, Create Instance in cloud provider, Setting nginx/SSL/Let's Encrypt/load balancing in Docker container infront of multi app instances"},{title:"Test",desc:"e2e with puppeteer. Jest, enzyme, react-testing-library for unit testing, Circle CI"},{title:"Tools",desc:"@flow, Typescript, ESLint, Prettier, Vim, VSCode, CRA"}],y=function(){return Object(a.useEffect)(function(){document.querySelectorAll("#block_info").forEach(function(e,t){return Object(h.a)(e,{fromLeft:"blockContentAnimation",fromTop:"blockContentAnimationFromTop"},!0,t)})},[]),r.a.createElement("div",{className:v.a.container},r.a.createElement("div",{className:v.a.title},"My Tech Stack and",r.a.createElement(p.a,{"data-heap-track-id":"homepage-resume-link",to:"/my_notes/Resume#00feae1f-b6e4-4e23-ae95-61c486da151e",style:{marginLeft:"12px"}},"Resume")),r.a.createElement("div",{className:v.a.blockWrapper},_.map(function(e,t){return r.a.createElement(b,{key:t,data:e})})))},b=function(e){var t=e.data;return r.a.createElement("div",{id:"block_info",className:v.a.block},r.a.createElement("div",{className:v.a.blockTitle},t.title),r.a.createElement("div",{className:v.a.blockContent},t.desc))},E=y,k=n(290),w=(n(470),n(471),n(472)),N=n.n(w),C=n(473),S=n.n(C),T=(n(474),function(){return Object(a.useEffect)(function(){var e=document.querySelector("#target");Object(h.a)(e,void 0,!0,0,function(){return N()({target:e,by:"chars"})},void 0)}),r.a.createElement("div",{className:"Wavy2Content ".concat(S.a.container)},r.a.createElement("div",{className:S.a.title},"Libraries I have used in production:"),r.a.createElement("div",{className:S.a.content},r.a.createElement("ul",{id:"target"},r.a.createElement("li",null,"GIT"),r.a.createElement("li",null,"D3.js/Recharts for data visualization"),r.a.createElement("li",null,"End-to-end testing with Puppeteer and Jest"),r.a.createElement("li",null,"Unit test using react-testing-library, enzyme, Jest"),r.a.createElement("li",null,"Rich Text Editor, DraftJS"),r.a.createElement("li",null,"Video and Screen Recording, WebRTC"),r.a.createElement("li",null,"react-s3-uploader"),r.a.createElement("li",null,"Material Ui/Ant Design"),r.a.createElement("li",null,"React Transition Group"),r.a.createElement("li",null,"... more"))))}),x=function(e){var t=e.toggle,n=e.children;return r.a.createElement("div",{className:"".concat(u.a.starts_container," ").concat(t?u.a.backgroundColorNight:u.a.backgroundColorPurple)},r.a.createElement("div",{className:u.a.stars}),r.a.createElement("div",{className:u.a.stars2}),r.a.createElement("div",{className:u.a.stars3}),n)},O=function(e){var t=e.children,n=Object(a.useState)(!1),o=Object(l.a)(n,2),c=o[0],i=o[1];return r.a.createElement("div",{className:u.a.container},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(x,{toggle:c},t),r.a.createElement(f,{onClick:function(){return i(function(e){return!e})}})),r.a.createElement(E,null),r.a.createElement("section",{className:u.a.wave1},r.a.createElement(k.a,{hasAnimation:!0}),r.a.createElement(T,null)))},L=n(475),M=n.n(L),j=function(){return r.a.createElement("footer",{className:M.a.container},r.a.createElement("div",{className:M.a.copyright},"\xa9 2019:"," ",r.a.createElement("a",{href:"https://timesup24hours.github.io/p2018"},"https://timesup24hours.github.io/p2018")))},P=o(function(e){var t=e.history;return r.a.createElement("div",{className:i.a.container},r.a.createElement(O,null,r.a.createElement("div",{className:i.a.content,onClick:function(){var e=document.querySelector(".Nav_nav"),n=document.querySelector(".nav_line");e.style.display="none",n.style.display="none",t.push("/call")}},r.a.createElement("div",null,"Huanlin Huang"),r.a.createElement("div",null,"Javascript Developer"))),r.a.createElement(j,null))});t.default=P},115:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e,t,n,a,r,o){new IntersectionObserver(function(e,c){e.forEach(function(e,i){var l=void 0;if(t&&(l=a<4?t.fromTop:t.fromLeft),e.isIntersecting){if(r)return void r();l&&!e.target.classList.contains(l)&&e.target.classList.add(l),n&&c.disconnect()}else{if(o)return void o();l&&e.target.classList.contains(l)&&e.target.classList.remove(l)}})}).observe(e)}},145:function(e,t,n){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,c=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,u=s&&s(Object);e.exports=function e(t,n,m){if("string"!==typeof n){if(u){var d=s(n);d&&d!==u&&e(t,d,m)}var f=c(n);i&&(f=f.concat(i(n)));for(var p=0;p<f.length;++p){var g=f[p];if(!a[g]&&!r[g]&&(!m||!m[g])){var v=l(n,g);try{o(t,g,v)}catch(h){}}}return t}return t}},205:function(e,t,n){e.exports={container:"UserCard_container__1ZYMz",card:"UserCard_card__3FPUT",box:"UserCard_box__38HSO",img:"UserCard_img__1eOZI",name:"UserCard_name__3gbyT"}},206:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(2),c=n.n(o),i=n(145),l=n.n(i),s=n(41),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.a=function(e){var t=function(t){var n=t.wrappedComponentRef,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["wrappedComponentRef"]);return r.a.createElement(s.a,{children:function(t){return r.a.createElement(e,u({},a,t,{ref:n}))}})};return t.displayName="withRouter("+(e.displayName||e.name)+")",t.WrappedComponent=e,t.propTypes={wrappedComponentRef:c.a.func},l()(t,e)}},290:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(205),c=n.n(o),i=n(115);t.a=function(e){var t=e.hasAnimation,n=e.info,o=void 0===n?"I am a self-taught full-stack developer, since 2017":n,l=e.phone;return Object(a.useEffect)(function(){t&&document.querySelectorAll("#user-card").forEach(function(e){return Object(i.a)(e,{fromLeft:"userCardAnimation"})})},[]),r.a.createElement("div",{className:c.a.container},r.a.createElement("div",{className:c.a.card,id:"user-card"},r.a.createElement("div",{className:c.a.box},r.a.createElement("div",{className:c.a.img},r.a.createElement("img",{src:"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/11885312_933409170050854_7994195451447625344_n.jpg?_nc_cat=104&_nc_oc=AQlMKlZHoqUMtYI59PfKcT5J7jf2JCGEntLcuPO-mtMG3VwrGCpI__EvPV4SdcCGI9OfgkP3ZeWYcxunQTIMawfQ&_nc_ht=scontent-sjc3-1.xx&oh=76860530bb5a10e1f9535446764bb8fa&oe=5DBDC123",alt:""})),r.a.createElement("h2",null,r.a.createElement("div",{className:c.a.name},"Huanlin Huang "),r.a.createElement("span",null,"Vim user")),r.a.createElement("p",null,o," ",l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),l)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/huanlin.huang",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-facebook-f"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/huanlin-huang-4b7b9b183",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin-in"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/timesup24hours",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"})))))))}},466:function(e,t,n){e.exports={container:"HomePage_container__2QSkr",content:"HomePage_content__q1gdB"}},467:function(e,t,n){e.exports={container:"WavyBackground_container__3VjTZ",wave:"WavyBackground_wave__3m5i_",wave1:"WavyBackground_wave1__3mLcX",starts_container:"WavyBackground_starts_container__FrFjI",backgroundColorPurple:"WavyBackground_backgroundColorPurple__Q7Gdt",backgroundColorNight:"WavyBackground_backgroundColorNight__2Vn1t",stars:"WavyBackground_stars__TGntq",animStar:"WavyBackground_animStar__3AhB7",stars2:"WavyBackground_stars2__EqEKD",stars3:"WavyBackground_stars3__YhMzb",title:"WavyBackground_title__2Gr_E"}},468:function(e,t,n){e.exports={container:"DayNightModeSwitchToggle_container__1zLES",toggle:"DayNightModeSwitchToggle_toggle__2D9af",active:"DayNightModeSwitchToggle_active__nsMhF",night:"DayNightModeSwitchToggle_night__1xwDj",font:"DayNightModeSwitchToggle_font__3awkw"}},469:function(e,t,n){e.exports={container:"BriefInfo_container__1T0t3",title:"BriefInfo_title__2ytmm",blockWrapper:"BriefInfo_blockWrapper__3MzN-",block:"BriefInfo_block__28t5c",blockTitle:"BriefInfo_blockTitle__7CX-2",blockContent:"BriefInfo_blockContent__2-N_t"}},470:function(e,t,n){},471:function(e,t,n){},472:function(e,t,n){e.exports=function(){"use strict";var e=document,t=e.createTextNode.bind(e);function n(e,t,n){e.style.setProperty(t,n)}function a(e,t){return e.appendChild(t)}function r(t,n,r,o){var c=e.createElement("span");return n&&(c.className=n),r&&(!o&&c.setAttribute("data-"+n,r),c.textContent=r),t&&a(t,c)||c}function o(e,t){return e.getAttribute("data-"+t)}function c(t,n){return t&&0!=t.length?t.nodeName?[t]:[].slice.call(t[0].nodeName?t:(n||e).querySelectorAll(t)):[]}function i(e){for(var t=[];e--;)t[e]=[];return t}function l(e,t){e&&e.some(t)}function s(e){return function(t){return e[t]}}var u={};function m(e,t,n,a){return{by:e,depends:t,key:n,split:a}}function d(e){return function e(t,n,a){var r=a.indexOf(t);if(-1==r)a.unshift(t),l(u[t].depends,function(n){e(n,t,a)});else{var o=a.indexOf(n);a.splice(r,1),a.splice(o,0,t)}return a}(e,0,[]).map(s(u))}function f(e){u[e.by]=e}function p(e,n,o,i,s){e.normalize();var u=[],m=document.createDocumentFragment();i&&u.push(e.previousSibling);var d=[];return c(e.childNodes).some(function(e){if(!e.tagName||e.hasChildNodes()){if(e.childNodes&&e.childNodes.length)return d.push(e),void u.push.apply(u,p(e,n,o,i,s));var a=e.wholeText||"",c=a.trim();c.length&&(" "===a[0]&&d.push(t(" ")),l(c.split(o),function(e,t){t&&s&&d.push(r(m,"whitespace"," ",s));var a=r(m,n,e);u.push(a),d.push(a)})," "===a[a.length-1]&&d.push(t(" ")))}else d.push(e)}),l(d,function(e){a(m,e)}),e.innerHTML="",a(e,m),u}var g=m("words",0,"word",function(e){return p(e,"word",/\s+/,0,1)}),v="chars",h=m(v,["words"],"char",function(e,t,n){var a=[];return l(n.words,function(e,n){a.push.apply(a,p(e,"char","",t.whitespace&&n))}),a});function _(e){var t=(e=e||{}).key;return c(e.target||"[data-splitting]").map(function(a){var r=a["\ud83c\udf4c"];if(!e.force&&r)return r;r=a["\ud83c\udf4c"]={el:a};var c=d(e.by||o(a,"splitting")||v),i=function(e,t){for(var n in t)e[n]=t[n];return e}({},e);return l(c,function(e){if(e.split){var o=e.by,c=(t?"-"+t:"")+e.key,s=e.split(a,i,r);c&&function(e,t,a){var r="--"+t,o=r+"-index";l(a,function(e,t){Array.isArray(e)?l(e,function(e){n(e,o,t)}):n(e,o,t)}),n(e,r+"-total",a.length)}(a,c,s),r[o]=s,a.classList.add(o)}}),a.classList.add("splitting"),r})}function y(e,t,n){var a=c(t.matching||e.children,e),r={};return l(a,function(e){var t=Math.round(e[n]);(r[t]||(r[t]=[])).push(e)}),Object.keys(r).map(Number).sort(b).map(s(r))}function b(e,t){return e-t}_.html=function(e){var t=(e=e||{}).target=r();return t.innerHTML=e.content,_(e),t.outerHTML},_.add=f;var E=m("lines",["words"],"line",function(e,t,n){return y(e,{matching:n.words},"offsetTop")}),k=m("items",0,"item",function(e,t){return c(t.matching||e.children,e)}),w=m("rows",0,"row",function(e,t){return y(e,t,"offsetTop")}),N=m("cols",0,"col",function(e,t){return y(e,t,"offsetLeft")}),C=m("grid",["rows","cols"]),S=m("layout",0,0,function(e,t){var i=t.rows=+(t.rows||o(e,"rows")||1),l=t.columns=+(t.columns||o(e,"columns")||1);if(t.image=t.image||o(e,"image")||e.currentSrc||e.src,t.image){var s=c("img",e)[0];t.image=s&&(s.currentSrc||s.src)}t.image&&n(e,"background-image","url("+t.image+")");for(var u=i*l,m=[],d=r(0,"cell-grid");u--;){var f=r(d,"cell");r(f,"cell-inner"),m.push(f)}return a(e,d),m}),T=m("cellRows",["layout"],"row",function(e,t,n){var a=t.rows,r=i(a);return l(n.layout,function(e,t,n){r[Math.floor(t/(n.length/a))].push(e)}),r}),x=m("cellColumns",["layout"],"col",function(e,t,n){var a=t.columns,r=i(a);return l(n.layout,function(e,t){r[t%a].push(e)}),r}),O=m("cells",["cellRows","cellColumns"],"cell",function(e,t,n){return n.layout});return f(g),f(h),f(E),f(k),f(w),f(N),f(C),f(S),f(T),f(x),f(O),_}()},473:function(e,t,n){e.exports={container:"Wavy2Content_container__3jA0s",title:"Wavy2Content_title__zbp7u",content:"Wavy2Content_content__2snnt"}},474:function(e,t,n){},475:function(e,t,n){e.exports={container:"Footer_container__3wtn6",copyright:"Footer_copyright__2zFMg"}}}]);
//# sourceMappingURL=163.a5cd7380.chunk.js.map