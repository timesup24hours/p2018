(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{214:function(e,t,a){e.exports={container:"NoteDetailPage_container__8frlM",title:"NoteDetailPage_title__1xMpM",subTitle:"NoteDetailPage_subTitle__33w4r",content:"NoteDetailPage_content__26JwK",text:"NoteDetailPage_text__1wDJc",code:"NoteDetailPage_code__7s1UC"}},611:function(e,t,a){"use strict";a.r(t);var n=a(19),c=a(20),r=a(22),i=a(21),s=a(23),o=a(1),l=a.n(o),u=a(41),d=a(214),m=a.n(d),p=a(42),h=a(40),y=a(610),b=a(465),f=function(e){var t=e.data;return l.a.createElement(y.a,{customStyle:{width:"100%"},language:"javascript",style:b.a,showLineNumbers:!1,wrapLines:!0},t)},N=function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={title:"",id:""},a.getComponentOnType=function(e){var t=e.key,a=e.data,n=e.index;switch(t){case"title":return l.a.createElement("div",{key:n,className:m.a.title},a.title);case"subTitle":return l.a.createElement("div",{key:n,className:m.a.subTitle},a.subTitle);case"content":return l.a.createElement("div",{key:n,className:m.a.content},a.content);case"text":return l.a.createElement("div",{key:n,className:m.a.text},a.text);case"html":return function(e){e.index;return a.html};case"code":return l.a.createElement("div",{key:n,className:m.a.code},l.a.createElement(f,{data:a.code}));default:return null}},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({title:this.props.match.params.title.replace(/-/g," ")});var e=this.props.location.hash.slice(1);(this.setState({id:e}),this.props.notes.length)?this.props.notes.some(function(t){return t.id===e})?this.props.noteGetOne(e):this.props.noteFetchRequested(e):this.props.noteFetchRequested(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.currentNote;return t.fetchLoading?l.a.createElement("div",{className:"center"},l.a.createElement(p.a,null)):l.a.createElement("div",{className:m.a.container},a&&a.hasOwnProperty("article")&&a.article&&Array.isArray(a.article)?a.article.map(function(t,a){return e.getComponentOnType({key:Object.keys(t)[0],data:t,index:a})}):null,a&&!a.hasOwnProperty("article")&&[l.a.createElement("div",{key:"title",className:m.a.title},a.title),l.a.createElement("div",{key:"sub-title",className:m.a.subTitle},a.subTitle),l.a.createElement("article",{key:"content",className:m.a.content},a.content),l.a.createElement("div",{key:"code",className:m.a.code},a&&a.code&&l.a.createElement(f,{data:a.code}))])}}]),t}(l.a.Component),v=Object(u.b)(function(e){return{notes:e.notes.notes,currentNote:e.notes.currentNote,fetchLoading:e.notes.fetchLoading}},function(e){return{noteGetOne:function(t){return e(Object(h.c)(t))},noteFetchRequested:function(t){return e(Object(h.b)(t))}}})(N);t.default=v}}]);
//# sourceMappingURL=164.bd29b9a7.chunk.js.map