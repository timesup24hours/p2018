(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{174:function(e,a,t){},360:function(e,a,t){},361:function(e,a,t){},362:function(e,a,t){},363:function(e,a,t){},364:function(e,a,t){},365:function(e,a,t){},366:function(e,a,t){},367:function(e,a,t){},368:function(e,a,t){},369:function(e,a,t){},370:function(e,a,t){},371:function(e,a,t){},382:function(e,a,t){},383:function(e,a,t){},400:function(e,a,t){},401:function(e,a,t){},402:function(e,a,t){},403:function(e,a,t){},404:function(e,a,t){},405:function(e,a,t){},406:function(e,a,t){},407:function(e,a,t){},408:function(e,a,t){},580:function(e,a,t){"use strict";t.r(a);var n=t(20),r=t(21),c=t(23),l=t(22),i=t(24),s=t(1),o=t.n(s),m=(t(360),function(){return o.a.createElement("div",{className:"center_container"},o.a.createElement("div",{className:"center_state"},o.a.createElement("span",{className:"center_state_span"},"CA")),o.a.createElement("div",{className:"center_house_status"},"New House"),o.a.createElement("div",{className:"center_house_grid"},o.a.createElement("i",{className:"fas fa-th center_icon"})))}),u=(t(361),function(){return o.a.createElement("div",{className:"profile_container"},o.a.createElement("div",{className:"profile_avatar"},o.a.createElement("i",{className:"far fa-user-circle"})),o.a.createElement("div",{className:"profile_name"},"Huanlin Huang"),o.a.createElement("div",{className:"profile_dropown_menu"}))}),d=(t(362),function(){return o.a.createElement("div",{className:"header_right_container"},o.a.createElement("div",{className:"header_right_notification"},o.a.createElement("i",{className:"far fa-bell"})),o.a.createElement("div",{className:"header_right_profile"},o.a.createElement(u,null)))}),_=(t(363),function(){return o.a.createElement("header",{className:"InternshipProject_header header_container"},o.a.createElement("div",{className:"header_item header_item_left"}),o.a.createElement("div",{className:"header_item header_item_center"},o.a.createElement(m,null)),o.a.createElement("div",{className:"header_item header_item_right"},o.a.createElement(d,null)))}),h=t(63),f=(t(364),function(){return o.a.createElement("menu",{className:"InternshipProject_menu"},o.a.createElement("div",{className:"menu_switch"},o.a.createElement("i",{className:"fas fa-bars"})),o.a.createElement("div",{className:"menu_list"},o.a.createElement(h.a,{exact:!0,to:"/",className:"menu_link",activeClassName:"link_active"},o.a.createElement("i",{className:"fas fa-home"})),o.a.createElement(h.a,{exact:!0,to:"/dashboard_ui",className:"menu_link",activeClassName:"link_active"},o.a.createElement("i",{className:"fas fa-wallet"})),o.a.createElement(h.a,{exact:!0,to:"/css_effects",className:"menu_link",activeClassName:"link_active"},o.a.createElement("i",{className:"far fa-square"})),o.a.createElement(h.a,{exact:!0,to:"/contact_info",className:"menu_link",activeClassName:"link_active"},o.a.createElement("i",{className:"far fa-folder"}))))}),v=(t(365),t(366),t(367),t(368),function(){return o.a.createElement("div",{className:"mainBody_score flex_center"},o.a.createElement("div",{className:"mainBody_score_body flex_center"},o.a.createElement("i",{className:"fas fa-user"}),o.a.createElement("span",{className:"grey_font"},"No user risk score yet")))}),p=(t(174),function(e){var a=e.value,t=e.handleOnClick;return o.a.createElement("div",{className:"mainBody_level_body_items flex_row_center ".concat(a.active?"active":""),id:a.label,onClick:function(e){return t(e)}},o.a.createElement("div",{id:a.label,onClick:function(e){return t(e)}}),o.a.createElement("span",{id:a.label,onClick:function(e){return t(e)},className:"main_body_black_font"},a.label))}),E=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={levels:[{label:"Conservative",id:1,active:!1},{label:"Balanced",id:2,active:!1},{label:"Aggresive",id:3,active:!0},{label:"Extreme",id:4,active:!1}]},t.handleOnClick=function(e){var a=t.state.levels;a.forEach(function(a){a.active=!1,a.label===e.target.id&&(a.active=!0)}),t.setState({levels:a})},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=this.state.levels;return o.a.createElement("div",{className:"mainBody_level flex_center"},o.a.createElement("div",{className:"mainBody_level_body"},a.map(function(a,t){return o.a.createElement(p,{key:"".concat(a.label).concat(t),value:a,handleOnClick:e.handleOnClick})})))}}]),a}(o.a.Component),y=(t(369),t(370),function(e){var a=e.name,t=e.year,n=e.percent;return o.a.createElement("div",{className:"mainBody_chart_performance"},o.a.createElement("div",{className:"mainBody_chart_performance_header"},o.a.createElement("div",null,a),o.a.createElement("div",{className:"mainBody_chart_performance_header_year"},t)),o.a.createElement("div",{className:"mainBody_chart_performance_number"},o.a.createElement("div",{style:{color:Number(n)<0?"red":"var(--main-header-blue-color)"}},n,"%")))}),N=(t(371),function(e){var a=e.percent;return o.a.createElement("div",{className:"chart_performance_rate_container"},o.a.createElement("div",{className:"chart_performance_rate_header"},o.a.createElement("div",{className:"chart_performance_rate_name"},"Rate"),o.a.createElement("div",{className:"chart_performance_rate_percent"},a,"%")),o.a.createElement("div",{className:"chart_performance_rate"},o.a.createElement("div",{style:{width:"".concat(Number(a),"%")}})))}),b=t(372),g=(t(382),{responsive:!0,maintainAspectRatio:!0,barThickness:1,legend:{display:!1},layout:{padding:{left:50,right:50,top:0,bottom:0}},scales:{yAxes:[{barPercentage:.1,categoryPercentage:.1,gridLines:{offsetGridLines:!1,color:"none",drawBorder:!1},ticks:{callback:function(e,a,t){return"$".concat(e,"k        ")},display:!0,stacked:!0,beginAtZero:!1,max:30,steps:10,stepSize:10,major:{fontColor:"#666",fontSize:"100"},minor:{fontColor:"#666"}}}],xAxes:[{barPercentage:.3,categoryPercentage:1.05,gridLines:{offsetGridLines:!1,lineWidth:.01}}]}}),k=function(e){var a=[];return e.forEach(function(e,t){a[t]=e>10?"rgb(93, 134, 255)":"rgb(255, 0, 0)"}),a},x=function(e){var a=[];return e.forEach(function(e){a.push({data:e,backgroundColor:k(e),borderWidth:0})}),a},C=function(){var e={labels:["1993","1998","2003","2008","2013"],datasets:x([[21,21,25,21,25],[-7,25,-5,25,21],[25,21,25,25,25]])};return o.a.createElement("div",{className:"mainBody_chart_manifest"},o.a.createElement(b.a,{data:e,width:100,height:50,options:g}))},O=function(){return o.a.createElement("div",{className:"mainBody_chart"},o.a.createElement("div",{className:"mainBody_chart_container"},o.a.createElement("div",{className:"mainBody_chart_left"},o.a.createElement("div",{className:"mainBody_chart_left_header"},o.a.createElement("div",null,"Projection"),o.a.createElement("div",{className:"chart_left_active"},"Perfomance")),o.a.createElement(C,null),o.a.createElement("div",{className:"mainBody_chart_years"},o.a.createElement("div",{className:"mainBody_chart_year_left"},"10 years"),o.a.createElement("div",{className:"mainBody_chart_year_right year_active"},"20 years"))),o.a.createElement("div",{className:"mainBody_chart_right"},o.a.createElement("div",{className:"mainBody_chart_history"},"HISTORY"),o.a.createElement("div",{className:"mainBody_chart_info"},o.a.createElement(y,{name:"Average performance",year:"20y",percent:"+35.2"}),o.a.createElement(y,{name:"The best performance",year:"2013",percent:"+65.2"}),o.a.createElement(y,{name:"The worst performance",year:"2016",percent:"-20.2"}),o.a.createElement(N,{percent:33})),o.a.createElement("div",{className:"mainBody_chart_moreView"},o.a.createElement("div",null,"View More")))))},B=(t(383),t(384)),w=t.n(B),j=function(e){var a=e.name,t=e.value,n=e.onChange,r=e.min,c=e.max;return o.a.createElement("div",{className:"inputrange_container"},o.a.createElement("div",{className:"inputrange_header"},o.a.createElement("div",{className:"inputrange_name"},a),o.a.createElement("div",{className:"inputrange_number"},"$",Number(t).toLocaleString("en"))),o.a.createElement("div",{className:"inputrange_body"},o.a.createElement(w.a,{maxValue:c,minValue:r,value:t,onChange:n})))},S=(t(400),t(401),function(e){var a=e.year,t=e.handleOnClick;return o.a.createElement("div",{className:"mainBody_calculator_period"},o.a.createElement("span",{className:"mainBody_calculator_font mainBody_calculator_name"},"Period"),o.a.createElement("div",{className:"mainBody_calculator_years"},o.a.createElement("div",{className:"flex_center mainBody_calculator_font_year_function noselect",id:"decrease",onClick:function(e){return t(e)}},"-"),o.a.createElement("div",{className:"flex_center mainBody_calculator_font_year"},Number(a)," years"),o.a.createElement("div",{className:"flex_center mainBody_calculator_font_year_function noselect",id:"increase",onClick:function(e){return t(e)}},"+")))}),V=(t(402),function(e){var a=e.handleCancel,t=e.handleDefault;return o.a.createElement("div",{className:"mainBody_calculator_buttons flex_row_center"},o.a.createElement("div",{onClick:function(){return a},className:"mainBody_calculator_buttons_cancel"},"Cancel"),o.a.createElement("div",{onClick:function(){return t},className:"mainBody_calculator_buttons_default flex_center"},"Default"))}),P=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={targetValue:5e4,initialDepositValue:2e4,monthlyPaymentValue:2e3,yearValue:7},t.targetOnchange=function(e){t.setState({targetValue:e})},t.initialDepositOnchange=function(e){t.setState({initialDepositValue:e})},t.monthlyPaymentOnchange=function(e){t.setState({monthlyPaymentValue:e})},t.handleOnClick=function(e){var a=t.state.yearValue;if("increase"===e.target.id)t.setState({yearValue:a+1});else{if(a<=1)return;t.setState({yearValue:a-1})}},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"mainBody_calculator flex_center"},o.a.createElement("div",{className:"mainBody_calculator_body"},o.a.createElement("div",{className:"mainBody_calculator_target"},o.a.createElement(j,{name:"Target",value:this.state.targetValue,onChange:this.targetOnchange,id:"target",min:5e3,max:1e5})),o.a.createElement("div",{className:"mainBody_calculator_deposit"},o.a.createElement(j,{name:"Initial deposit",value:this.state.initialDepositValue,onChange:this.initialDepositOnchange,id:"initialDeposit",min:1,max:3e4})),o.a.createElement("div",{className:"mainBody_calculator_payment"},o.a.createElement(j,{name:"Monthly payment",value:this.state.monthlyPaymentValue,onChange:this.monthlyPaymentOnchange,id:"monthlyPayment",min:1,max:8e3})),o.a.createElement(S,{year:this.state.yearValue,handleOnClick:this.handleOnClick}),o.a.createElement(V,null)))}}]),a}(o.a.Component),D=function(){return o.a.createElement("div",{className:"mainBody_container"},o.a.createElement(v,null),o.a.createElement(E,null),o.a.createElement(P,null),o.a.createElement(O,null))},A=(t(403),t(404),{container:{display:"flex",justifyContent:"flex-start",alignItems:"center",gridArea:"headerName"}}),I=function(e){var a=e.stepName;return o.a.createElement("div",{className:"main_header_name main_header_font",style:A.container},a||"Simulation")},L=t(12),R={checkmark:{fontFamily:"arial",transform:"scaleX(-1) rotate(-45deg)",color:"white",textAlign:"center",height:"25px",width:"25px",lineHeight:"24px",fontSize:".8em",fontWeight:"900"},checked:{height:"25px",width:"25px",backgroundColor:"var(--main-header-blue-color)",borderRadius:"50%",display:"inlineBlock",boxShadow:"0px 2px 10px 2px rgba(93, 134, 255, 0.4)"}},T=function(){return o.a.createElement("div",{style:R.checked},o.a.createElement("div",{style:R.checkmark},"L"))},H=(t(405),function(e){var a=e.stepNumber,t=e.headerName;return o.a.createElement("div",{className:"Tooltip_container"},o.a.createElement("div",{className:"up-arrow",href:"#"},o.a.createElement("div",{className:"content"},o.a.createElement("span",{className:"stepNumber"},a),o.a.createElement("span",{className:"headerName"},t))))}),W=(t(406),{pointer:{position:"absolute",height:"25px",width:"25px",border:"8.2px solid white",backgroundColor:"var(--main-header-blue-color)",borderRadius:"50%",display:"inlineBlock",boxShadow:"0px 2px 10px 2px rgba(93, 134, 255, 0.3)"}}),q=function(e){var a=e.step,t=e.label;return o.a.createElement("div",{className:"stepper_pointer",style:W.pointer},o.a.createElement(H,{stepNumber:"Step ".concat(a),headerName:t}))},z={container:{display:"flex",alignItems:"center",width:"100%"},circle:{position:"absolute",height:"25px",width:"25px",border:"3px solid var(--main-header-grey-color)",backgroundColor:"var(--main-bg-color)",borderRadius:"50%",display:"inlineBlock"},line:{width:"100%",height:"3px",transition:"background-color 1s"}},M=function(e){var a=e.label,t=e.checked,n=e.current,r=e.last,c=e.step;return o.a.createElement("div",{style:Object(L.a)({},z.container,{width:r?"105px":"100%"})},n?o.a.createElement(q,{label:a,step:c}):t?o.a.createElement(T,null):o.a.createElement("div",{style:z.circle}),r?null:o.a.createElement("div",{style:Object(L.a)({},z.line,{backgroundColor:t?"var(--main-header-blue-color)":"var(--main-header-grey-color)"})}))},G=function(e){var a=e.stepData;e.currentStep;return o.a.createElement("div",{className:"main_header_stepper"},a.map(function(e,a){return o.a.createElement(M,{key:a,label:e.label,checked:e.checked,current:e.current,last:e.last,step:e.step})}))},J=(t(407),function(e){var a=e.handleOnClick;return o.a.createElement("div",{className:"pointer_button",onClick:function(){return a()}},o.a.createElement("div",{className:"pointer_button_font"},"Continue"),o.a.createElement("div",{className:"pointer_button_arrow_container"},o.a.createElement("div",{className:"arrow"})))}),$=(t(408),function(e){var a=e.handleOnClick;return o.a.createElement("div",{className:"main_header_continue main_header_continue_container"},o.a.createElement(J,{handleOnClick:a}))}),F=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={currentStep:3,stepData:[{label:"",checked:!0,current:!1,step:1,last:!1},{label:"",checked:!0,current:!1,step:2,last:!1},{label:"Simulation",checked:!1,current:!0,step:3,last:!1},{label:"",checked:!1,current:!1,step:4,last:!1},{label:"",checked:!1,current:!1,step:5,last:!0}]},t.handleOnClick=function(){var e=t.state,a=e.currentStep,n=e.stepData;a>=5||t.setState({currentStep:a+1},function(){var e=n.map(function(e){return t.state.currentStep-1===e.step&&(e.checked=!0,e.current=!1),t.state.currentStep===e.step&&(e.checked=!1,e.current=!0),e});t.setState({stepData:e})})},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.state,a=e.stepData,t=e.currentStep;return o.a.createElement("div",{className:"main_header"},o.a.createElement(I,null),o.a.createElement(G,{stepData:a,currentStep:t}),o.a.createElement($,{handleOnClick:this.handleOnClick}))}}]),a}(o.a.Component),U=function(){return o.a.createElement("main",{className:"InternshipProject_main"},o.a.createElement(F,null),o.a.createElement(D,null))},X=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){document.querySelector("nav").style.top="-200px"}},{key:"componentWillUnmount",value:function(){document.querySelector("nav").style.top="0px"}},{key:"render",value:function(){return o.a.createElement("div",{className:"InternshipProject_App"},o.a.createElement(_,null),o.a.createElement(f,null),o.a.createElement(U,null))}}]),a}(s.Component);a.default=X}}]);
//# sourceMappingURL=156.7bacac15.chunk.js.map