webpackJsonp([2],{1191:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(1223);e.default=t.a},1223:function(n,e,o){"use strict";function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function r(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var a=o(0),l=o.n(a),s=o(50),A=o(23),c=o(1224),d=o.n(c),p=o(49),x=o(1226),u=o(1230),h=function(){function n(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(e,o,t){return o&&n(e.prototype,o),t&&n(e,t),e}}(),g=function(n){function e(){var n,o,r,a;t(this,e);for(var l=arguments.length,s=Array(l),A=0;A<l;A++)s[A]=arguments[A];return o=r=i(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(s))),r.state={scrolled:0,scrollHeight:0},r.getNotes=function(n){r.props.notesFetchRequested(n)},r.loadingBottomArea=function(n,e){return e.scrollTop+e.clientHeight>=e.scrollHeight-n},r.setScrolled=function(n){r.setState({scrolled:r.scrollerDiv.scrollTop/(r.scrollerDiv.scrollHeight-window.innerHeight)*100}),r.setState({scrollHeight:r.scrollerDiv.scrollHeight})},r.handleScroll=function(n){r.setScrolled(),r.scrollerDiv&&r.loadingBottomArea(100,r.scrollerDiv)&&r.props.hasMoreNotesToLoad&&(r.props.fetchLoading||r.getNotes({start:r.props.cursor,loadAmount:r.props.loadAmount}))},a=o,i(r,a)}return r(e,n),h(e,[{key:"componentDidMount",value:function(){this.mounted=!0,this.props.notes&&0===this.props.notes.length&&this.mounted&&this.getNotes({start:0,loadAmount:20})}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.getNotes=null,this.props.notesFetchCancelled()}},{key:"componentDidUpdate",value:function(n,e){this.scrollerDiv&&this.scrollerDiv.scrollHeight!==e.scrollHeight&&this.setScrolled()}},{key:"render",value:function(){var n=this,e=this.props,o=e.notes,t=e.hasMoreNotesToLoad,i=e.loading,r=e.fetchLoading,a=this.state.scrolled;return i?l.a.createElement("div",{className:"center"},l.a.createElement(p.a,null)):l.a.createElement("div",{className:d.a.container,onScroll:this.handleScroll,ref:function(e){n.scrollerDiv=e}},a?l.a.createElement(x.a,{scrolled:a}):null,o.map(function(n,e){return l.a.createElement(u.a,{key:e,note:n})}),r?l.a.createElement("div",{className:d.a.loading},l.a.createElement(p.a,null)):null,t?null:l.a.createElement("div",{className:d.a.lastNote},"Last Note"))}}]),e}(a.Component),f=function(n){return{notes:n.notes.notes,cursor:n.notes.cursor,loading:n.notes.loading,hasMoreNotesToLoad:n.notes.hasMoreNotesToLoad,fetchLoading:n.notes.fetchLoading,message:n.notes.message,loadAmount:n.notes.loadAmount}},m=function(n){return{notesFetchRequested:function(e){return n(A.a.notesFetchRequested(e))},notesFetchCancelled:function(){return n(A.a.notesFetchCancelled())}}};e.a=Object(s.b)(f,m)(g)},1224:function(n,e,o){var t=o(1225);"string"===typeof t&&(t=[[n.i,t,""]]);var i={hmr:!1};i.transform=void 0;o(1189)(t,i);t.locals&&(n.exports=t.locals)},1225:function(n,e,o){e=n.exports=o(1188)(!0),e.push([n.i,".index__container___czY5P{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;overflow-y:scroll;-webkit-overflow-scrolling:touch;position:relative;top:var(--nav-height);height:calc(100vh - var(--nav-height));padding-top:20px;background:hsla(0,0%,66%,.1)}.index__container___czY5P::-webkit-scrollbar{display:none}.index__loading___232yx{position:relative;display:-ms-flexbox;display:flex;width:80%;padding-bottom:80px;margin-bottom:20px}.index__lastNote___1vW-t{margin:0 auto;position:relative;width:80%;line-height:80px;text-align:center}@media screen and (max-width:660px){.index__container___czY5P{height:100vh;top:0;width:100%;overflow-y:auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-bottom:10px}.index__loading___232yx{padding-bottom:40px;margin-bottom:10px;top:20px}}","",{version:3,sources:["/Users/kk/Desktop/2018_Projects/mern_shopping_list/client/src/components/MyNotesPage/index.css"],names:[],mappings:"AAAA,0BACE,WAAY,AACZ,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,sBAAuB,AACnB,mBAAoB,AACxB,kBAAmB,AACnB,iCAAkC,AAClC,kBAAmB,AACnB,sBAAuB,AACvB,uCAAwC,AACxC,iBAAkB,AAGlB,4BAAqC,CACtC,AACD,6CACE,YAAc,CACf,AAED,wBACE,kBAAmB,AACnB,oBAAqB,AACrB,aAAc,AAEd,UAAW,AACX,oBAAqB,AACrB,kBAAoB,CAErB,AAED,yBACE,cAAe,AAEf,kBAAmB,AACnB,UAAW,AACX,iBAAkB,AAClB,iBAAmB,CAMpB,AAED,oCACE,0BACE,aAAc,AACd,MAAO,AACP,WAAY,AAEZ,gBAAiB,AACjB,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAE3B,mBAAqB,CACtB,AACD,wBACE,oBAAqB,AACrB,mBAAoB,AACpB,QAAU,CAEX,CAIF",file:"index.css",sourcesContent:[".container {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  position: relative;\n  top: var(--nav-height);\n  height: calc(100vh - var(--nav-height));\n  padding-top: 20px;\n  /* padding-bottom: 50px; */\n\n  background: rgba(169, 169, 169, 0.1);\n}\n.container::-webkit-scrollbar {\n  display: none;\n}\n\n.loading {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  /* top: 44px; */\n  width: 80%;\n  padding-bottom: 80px;\n  margin-bottom: 20px;\n  /* background: white; */\n}\n\n.lastNote {\n  margin: 0 auto;\n  /* background: white; */\n  position: relative;\n  width: 80%;\n  line-height: 80px;\n  text-align: center;\n  /* border: 1px solid red; */\n  /* position: absolute; */\n  /* bottom: 10%;\n  left: 50%;\n  transform: translateX(-50%); */\n}\n\n@media screen and (max-width: 660px) {\n  .container {\n    height: 100vh;\n    top: 0;\n    width: 100%;\n    /* margin: var(--nav-height-660px) auto 0px; */\n    overflow-y: auto;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    /* border: 1px solid red; */\n    padding-bottom: 10px;\n  }\n  .loading {\n    padding-bottom: 40px;\n    margin-bottom: 10px;\n    top: 20px;\n    /* border: 1px solid red; */\n  }\n  .lastNote {\n    /* border: 1px solid red; */\n  }\n}\n"],sourceRoot:""}]),e.locals={container:"index__container___czY5P",loading:"index__loading___232yx",lastNote:"index__lastNote___1vW-t"}},1226:function(n,e,o){"use strict";var t=o(1227);e.a=t.a},1227:function(n,e,o){"use strict";var t=o(0),i=o.n(t),r=o(1228),a=o.n(r);e.a=function(n){var e=n.scrolled;return i.a.createElement("div",{className:a.a.scollLine,style:{width:e+"%"}})}},1228:function(n,e,o){var t=o(1229);"string"===typeof t&&(t=[[n.i,t,""]]);var i={hmr:!1};i.transform=void 0;o(1189)(t,i);t.locals&&(n.exports=t.locals)},1229:function(n,e,o){e=n.exports=o(1188)(!0),e.push([n.i,".index__scollLine___3EQ3M{height:6px;margin-bottom:-2px;background:rgba(138,43,226,.9);width:0;position:fixed;top:var(--nav-height);left:0;z-index:2000}@media screen and (max-width:660px){.index__scollLine___3EQ3M{top:0}}","",{version:3,sources:["/Users/kk/Desktop/2018_Projects/mern_shopping_list/client/src/components/ScrollIndicator/index.css"],names:[],mappings:"AAAA,0BACE,WAAY,AACZ,mBAAoB,AAEpB,+BAAoC,AACpC,QAAU,AAEV,eAAgB,AAChB,sBAAuB,AACvB,OAAQ,AAER,YAAc,CACf,AAeD,oCACE,0BACE,KAAO,CACR,CACF",file:"index.css",sourcesContent:[".scollLine {\n  height: 6px;\n  margin-bottom: -2px;\n  /* background: lightskyblue; */\n  background: rgba(138, 43, 226, 0.9);\n  width: 0%;\n  /* border: 1px solid red */\n  position: fixed;\n  top: var(--nav-height);\n  left: 0;\n  /* box-shadow: 0 2px 10px rgba(132, 204, 249, 0.8); */\n  z-index: 2000;\n}\n/* .scollLine:after {\n  content: '';\n  position: absolute;\n  right: -1px;\n  top: -40%;\n  height: 12px;\n  display: block;\n  width: 12px;\n  border-radius: 50%;\n  background: rgb(132, 204, 249);\n  -webkit-box-shadow: 0 2px 30px rgba(132, 204, 249, 0.8);\n  box-shadow: 2px 2px 30px 2px rgba(132, 204, 249, 0.8);\n} */\n\n@media screen and (max-width: 660px) {\n  .scollLine {\n    top: 0;\n  }\n}\n"],sourceRoot:""}]),e.locals={scollLine:"index__scollLine___3EQ3M"}},1230:function(n,e,o){"use strict";var t=o(1231);e.a=t.a},1231:function(n,e,o){"use strict";var t=o(0),i=o.n(t),r=o(1232),a=o.n(r);e.a=function(n){var e=n.note;return i.a.createElement("div",{className:a.a.container},i.a.createElement("div",{className:a.a.wrapper},i.a.createElement("h1",null,e.title),i.a.createElement("div",null,e.content)))}},1232:function(n,e,o){var t=o(1233);"string"===typeof t&&(t=[[n.i,t,""]]);var i={hmr:!1};i.transform=void 0;o(1189)(t,i);t.locals&&(n.exports=t.locals)},1233:function(n,e,o){e=n.exports=o(1188)(!0),e.push([n.i,".index__container___AQB-q{width:80%;padding-left:30px;border-left:14px solid #fff;-webkit-transition:.2s;-o-transition:.2s;transition:.2s;padding-bottom:20px;background:#fff;margin-bottom:8px}.index__wrapper___2ARSP{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.index__wrapper___2ARSP h1{line-height:60px}.index__wrapper___2ARSP div{height:20px}.index__container___AQB-q:hover{-webkit-box-shadow:0 4px 20px 1px rgba(0,0,0,.3);box-shadow:0 4px 20px 1px rgba(0,0,0,.3);cursor:pointer;color:#000;border-left:14px solid rgba(138,43,226,.8)}@media screen and (max-width:660px){.index__container___AQB-q{width:100%;padding-left:8px;padding-right:6px;border-left:6px solid #fff}.index__container___AQB-q:hover{color:#000;border-left:6px solid rgba(138,43,226,.8)}}","",{version:3,sources:["/Users/kk/Desktop/2018_Projects/mern_shopping_list/client/src/components/Note/index.css"],names:[],mappings:"AAAA,0BACE,UAAW,AACX,kBAAmB,AAEnB,4BAA8B,AAC9B,uBAAyB,AACzB,kBAAoB,AACpB,eAAiB,AACjB,oBAAqB,AACrB,gBAAkB,AAClB,iBAAmB,CACpB,AAED,wBACE,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,qBAAuB,CAE5B,AACD,2BAGE,gBAAkB,CACnB,AACD,4BACE,WAAa,CAGd,AAED,gCACE,iDAAsD,AAC9C,yCAA8C,AACtD,eAAgB,AAQhB,WAAa,AAEb,0CAAgD,CAIjD,AAED,oCACE,0BACE,WAAY,AACZ,iBAAkB,AAClB,kBAAmB,AACnB,0BAA6B,CAE9B,AACD,gCAIE,WAAa,AAEb,yCAA+C,CAChD,CACF",file:"index.css",sourcesContent:[".container {\n  width: 80%;\n  padding-left: 30px;\n\n  border-left: 14px solid white;\n  -webkit-transition: 0.2s;\n  -o-transition: 0.2s;\n  transition: 0.2s;\n  padding-bottom: 20px;\n  background: white;\n  margin-bottom: 8px;\n}\n\n.wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  /* border: 1px solid red; */\n}\n.wrapper h1 {\n  /* border: 1px solid red; */\n  /* line-height: 40px; */\n  line-height: 60px;\n}\n.wrapper div {\n  height: 20px;\n  /* border: 1px solid red; */\n  /* line-height: 40px; */\n}\n\n.container:hover {\n  -webkit-box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n  /* color: rgba(0, 0, 0, 0.3); */\n  /* color: white;\n  background: rgba(138, 43, 226, 0.6);\n  border-left: 14px solid black; */\n  /* color: black;\n  background: rgba(226, 224, 228, 0.6);\n  border-left: 14px solid rgba(138, 43, 226, 0.8); */\n  color: black;\n  /* background: rgba(138, 43, 226, 0.1); */\n  border-left: 14px solid rgba(138, 43, 226, 0.8);\n  /* color: white;\n  background: rgba(138, 43, 226, 0.8);\n  border-left: 14px solid rgba(138, 43, 226, 0.9); */\n}\n\n@media screen and (max-width: 660px) {\n  .container {\n    width: 100%;\n    padding-left: 8px;\n    padding-right: 6px;\n    border-left: 6px solid white;\n    /* transition: 0.2s; */\n  }\n  .container:hover {\n    /* color: white;\n    background: rgba(138, 43, 226, 0.6);\n    border-left: 6px solid black; */\n    color: black;\n    /* background: rgba(226, 224, 228, 0.6); */\n    border-left: 6px solid rgba(138, 43, 226, 0.8);\n  }\n}\n"],sourceRoot:""}]),e.locals={container:"index__container___AQB-q",wrapper:"index__wrapper___2ARSP"}}});
//# sourceMappingURL=2.edb4f1ec.chunk.js.map