(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1012:function(e,a,t){"use strict";t.r(a);var n=t(19),r=t(20),c=t(22),l=t(21),i=t(23),o=t(1),s=t.n(o),m=(t(622),function(){return s.a.createElement("div",{className:"center_container"},s.a.createElement("div",{className:"center_state"},s.a.createElement("span",{className:"center_state_span"},"CA")),s.a.createElement("div",{className:"center_house_status"},"New House"),s.a.createElement("div",{className:"center_house_grid"},s.a.createElement("i",{className:"fas fa-th center_icon"})))}),u=(t(623),function(){return s.a.createElement("div",{className:"profile_container"},s.a.createElement("div",{className:"profile_avatar"},s.a.createElement("i",{className:"far fa-user-circle"})),s.a.createElement("div",{className:"profile_name"},"Huanlin Huang"),s.a.createElement("div",{className:"profile_dropown_menu"}))}),d=(t(624),function(){return s.a.createElement("div",{className:"header_right_container"},s.a.createElement("div",{className:"header_right_notification"},s.a.createElement("i",{className:"far fa-bell"})),s.a.createElement("div",{className:"header_right_profile"},s.a.createElement(u,null)))}),h=(t(625),function(){return s.a.createElement("header",{className:"InternshipProject_header header_container"},s.a.createElement("div",{className:"header_item header_item_left"}),s.a.createElement("div",{className:"header_item header_item_center"},s.a.createElement(m,null)),s.a.createElement("div",{className:"header_item header_item_right"},s.a.createElement(d,null)))}),y=t(66),f=t(1023),p=(t(626),function(){return s.a.createElement("menu",{className:"InternshipProject_menu"},s.a.createElement("div",{className:"menu_switch"},s.a.createElement(y.a,{exact:!0,to:"/",className:"menu_link"},s.a.createElement("i",{className:"fas fa-bars"}))),s.a.createElement("div",{className:"menu_list"},s.a.createElement(y.a,{exact:!0,to:"/",className:"menu_link",activeClassName:"link_active"},s.a.createElement(f.a,{title:"Home",placement:"left"},s.a.createElement("i",{className:"fas fa-home"}))),s.a.createElement(y.a,{exact:!0,to:"/dashboard_ui",className:"menu_link",activeClassName:"link_active"},s.a.createElement(f.a,{title:"Current page UI only",placement:"left"},s.a.createElement("i",{className:"fas fa-wallet"}))),s.a.createElement(y.a,{exact:!0,to:"/css_effects",className:"menu_link",activeClassName:"link_active"},s.a.createElement(f.a,{title:"Back",placement:"left"},s.a.createElement("i",{className:"far fa-square"}))),s.a.createElement(y.a,{exact:!0,to:"/contact_info",className:"menu_link",activeClassName:"link_active"},s.a.createElement(f.a,{title:"Contact",placement:"left"},s.a.createElement("i",{className:"fas fa-phone"})))))}),_=(t(632),t(633),t(39)),v=(t(634),t(635),function(e){var a=e.monthlyPayment;return s.a.createElement("div",{className:"mainBody_score flex_center"},s.a.createElement("div",{className:"mainBody_score_body flex_center"},s.a.createElement("i",{className:"fas fa-user"}),s.a.createElement("span",{className:"grey_font"},"Monthly payment: $".concat(a.toFixed(2)))))}),E=(t(336),function(e){var a=e.value,t=e.handleOnClick;return s.a.createElement("div",{className:"mainBody_level_body_items flex_row_center ".concat(a.active?"active":""),id:a.label,onClick:function(e){return t(e,a)}},s.a.createElement("div",{id:a.label,onClick:function(e){return t(e,a)}}),s.a.createElement("span",{id:a.label,onClick:function(e){return t(e,a)},className:"main_body_black_font"},a.label))}),b=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={levels:[{label:"Conservative",id:1,active:!1},{label:"Balanced",id:2,active:!1},{label:"Mortgage",id:3,active:!0},{label:"Extreme",id:4,active:!1}]},t.handleOnClick=function(e,a){if(3===a.id){var n=t.state.levels;n.forEach(function(a){a.active=!1,a.label===e.target.id&&(a.active=!0)}),t.setState({levels:n})}},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=this.state.levels;return s.a.createElement("div",{className:"mainBody_level flex_center"},s.a.createElement("div",{className:"mainBody_level_body"},a.map(function(a,t){return s.a.createElement(E,{key:"".concat(a.label).concat(t),value:a,handleOnClick:e.handleOnClick})})))}}]),a}(s.a.Component),g=t(27),N=t(1014),k=t(1016),x=(t(636),t(637),function(e){var a=e.name,t=e.year,n=e.percent,r=e.color;return s.a.createElement("div",{className:"mainBody_chart_performance"},s.a.createElement("div",{className:"mainBody_chart_performance_header"},s.a.createElement("div",null,a),s.a.createElement("div",{className:"mainBody_chart_performance_header_year"},t)),s.a.createElement("div",{className:"mainBody_chart_performance_number"},s.a.createElement("div",{style:{color:r||"var(--main-header-blue-color)"}},n)))}),P=(t(638),function(e){var a=e.percent;return s.a.createElement("div",{className:"chart_performance_rate_container"},s.a.createElement("div",{className:"chart_performance_rate_header"},s.a.createElement("div",{className:"chart_performance_rate_name"},"Rate"),s.a.createElement("div",{className:"chart_performance_rate_percent"},a,"%")),s.a.createElement("div",{className:"chart_performance_rate"},s.a.createElement("div",{style:{width:"".concat(Number(a),"%")}})))}),C=t(329),w=(t(639),{responsive:!0,maintainAspectRatio:!0,barThickness:1,legend:{display:!1},layout:{padding:{left:50,right:50,top:0,bottom:0}},scales:{yAxes:[{barPercentage:.1,categoryPercentage:.1,gridLines:{offsetGridLines:!1,color:"none",drawBorder:!1},ticks:{callback:function(e,a,t){return"$".concat(e,"k        ")},display:!0,stacked:!0,beginAtZero:!1,max:30,steps:10,stepSize:10,major:{fontColor:"#666",fontSize:"100"},minor:{fontColor:"#666"}}}],xAxes:[{barPercentage:.3,categoryPercentage:1.05,gridLines:{offsetGridLines:!1,lineWidth:.01}}]}}),O=function(e,a,t){var n=[];return e.forEach(function(e,r){t?0===a?n[r]="rgb(93, 134, 255)":1===a&&(n[r]="rgb(255, 0, 0)"):n[r]=e>10?"rgb(93, 134, 255)":"rgb(255, 0, 0)"}),n};var B=function(e,a){var t=[];return a?e.forEach(function(e,n){t.push({label:e.label,data:e.data,backgroundColor:O(e.data,n,a),borderWidth:0})}):e.forEach(function(e,a){t.push({label:a,data:e,backgroundColor:O(e,a),borderWidth:0})}),t},j=function(e){e.selectedIndex;var a=e.paymentDataArray,t=e.barData,n=(e.data,e.setData,{labels:["1993","1998","2003","2008","2013"],datasets:B([[21,21,25,21,25],[-7,25,-5,25,21],[25,21,25,25,25]])});return s.a.createElement("div",{className:"mainBody_chart_manifest"},s.a.createElement(C.a,{data:a.length?t:n,width:100,height:50,options:w}))},S=function(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t="".concat(Number(~~e)).split("");return t=1===t.length?["0.","0","".concat(t[0])]:2===t.length?["0.","".concat(t[0]),"".concat(t[1])]:["".concat(t[0],"."),"".concat(t[1]),"".concat(t[2])],a?function(e){return"number"===typeof e&&(e=e.toString()),e+"%"}(t.join("")):t.join("")},D=function(e){return"number"===typeof e&&(e=e.toString()),~~e.replace(/[^0-9]/g,"")},A=function(e){var a=e.rate,t=e.loanPrincipal,n=e.numberOfPayments,r=void 0===n?12:n,c=.01*parseFloat(S(a,!1));return parseFloat(c.toFixed(4))/r*t},M=function(e,a){var t="".concat(Number(~~e).toLocaleString("en"));return a?t+="%":t="$"+t,t},R=function(e,a,t){return t?e>=12*a&&e<12*a+6:e>=12*a+6&&e<12*a+12},F=function(e){var a=e.data,t=e.setData,n=s.a.useState(null),r=Object(_.a)(n,2),c=r[0],l=r[1],i=s.a.useState(0),o=Object(_.a)(i,2),m=o[0],u=o[1],d=s.a.useState(!0),h=Object(_.a)(d,2),y=h[0],f=h[1],p=Array.from({length:a.year?a.year:15},function(){return 0});var v=function(e){var a=e.currentTarget;if(a.classList.contains("mainBody_chart_year_left")){if(!a.classList.contains("year_active"))return;var t=document.querySelector(".mainBody_chart_year_right");a.classList.toggle("year_active"),t.classList.toggle("year_active"),f(!0)}else{var n=document.querySelector(".mainBody_chart_year_left");if(!a.classList.contains("year_active"))return;a.classList.toggle("year_active"),n.classList.toggle("year_active"),f(!1)}};var E,b=[],C=[],O=[],S=[];if(a.year)for(var D=0;D<12*a.year;D++){var F=A({rate:a.interestRate,loanPrincipal:0===b.length?a.mortage-a.downPayment:b[D-1].loanBalance}),I=(E={loanPrincipal:0===b.length?a.mortage-a.downPayment:b[D-1].loanBalance,repayment:a.monthlyPayment,interest:F}).loanPrincipal-(E.repayment-E.interest);C.push(Number(F.toFixed(2))),O.push(Number((a.monthlyPayment-F).toFixed(2))),S.push(Number(I.toFixed(2))<0?0:Number(I.toFixed(2)));var V={loanBalance:Number(I.toFixed(2))<0?0:Number(I.toFixed(2)),principlePaid:Number((a.monthlyPayment-F).toFixed(2)),interestPaid:Number(F.toFixed(2)),month:D+1};b.push(V)}var L=C.filter(function(e,a){return R(a,m,y)}),T=O.filter(function(e,a){return R(a,m,y)}),q=(S.filter(function(e,a){return R(a,m,y)}),[{label:"Principle($)",data:T},{label:"Interest($)",data:L}]),$=Math.max.apply(Math,Object(g.a)(L)),z=Math.max.apply(Math,Object(g.a)(T));if(b.length){var H=Math.max($,z);H=Math.ceil(H),w.scales.yAxes[0].ticks.max=H,w.scales.yAxes[0].ticks.stepSize=500,w.scales.yAxes[0].ticks.callback=function(e,a,t){return"$".concat(e,"        ")}}var J={labels:y?["Jan","Feb","Mar","Apr","May","Jun"]:["Jul","Aug","Sep","Oct","Nov","Dec"],datasets:B(q,!0)},W=(function(e){e.paymentDataArray.reduce(function(e,a){return{totalInterestPaid:e.totalInterestPaid+a.interestPaid,totalPrinciplePaid:e.totalInterestPaid+a.principlePaid}},{totalInterestPaid:0,totalPrinciplePaid:0})}({paymentDataArray:b}),C.reduce(function(e,a){return e+a},0)),Y=O.reduce(function(e,a){return e+a},0);return s.a.createElement("div",{className:"mainBody_chart"},s.a.createElement("div",{className:"mainBody_chart_container"},s.a.createElement("div",{className:"mainBody_chart_left"},s.a.createElement("div",{className:"mainBody_chart_left_header"},s.a.createElement("div",null,"Year"),s.a.createElement("div",{className:"chart_left_active","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)}},m?m+1:1),s.a.createElement(N.a,{id:"simple-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:function(){l(null)}},p.map(function(e,a){return s.a.createElement(k.a,{key:a,selected:a===m,onClick:function(e){return function(e,a){u(a),l(null)}(0,a)}},a+1)}))),s.a.createElement(j,{selectedIndex:m,data:a,paymentDataArray:b,barData:J,setData:t}),s.a.createElement("div",{className:"mainBody_chart_years "},s.a.createElement("div",{className:"mainBody_chart_year_left year_active",onClick:v},"1 ~ 6 months"),s.a.createElement("div",{className:"mainBody_chart_year_right ",onClick:v},"7 ~ 12 months"))),s.a.createElement("div",{className:"mainBody_chart_right"},s.a.createElement("div",{className:"mainBody_chart_history"},"SUMMARY"),s.a.createElement("div",{className:"mainBody_chart_info"},s.a.createElement(x,{name:"Total interest paid",year:"".concat(a.year||15,"y"),percent:W?"".concat(M(W)):"+35.2%",color:"red"}),s.a.createElement(x,{name:"Total principal paid",year:"".concat(a.year||15,"y"),percent:Y?"".concat(M(a.mortage-a.downPayment)):"+65.2%"}),s.a.createElement(x,{name:"Interest + Principal",year:a.year?"Paid off by ".concat(a.year+(new Date).getFullYear()):(new Date).getFullYear(),percent:Y?"".concat(M(a.mortage-a.downPayment+W)):"-20.2",color:"black"}),s.a.createElement(P,{percent:33})),s.a.createElement("div",{className:"mainBody_chart_moreView"},s.a.createElement("div",null,"View More")))))},I=(t(643),t(644)),V=t.n(I),L=function(e){var a=e.id,t=e.name,n=e.value,r=e.displayValue,c=e.onChange,l=e.min,i=e.max,m=e.percent,u=(e.edit,e.mortage),d=(e.downPayment,Object(o.useState)(r||n)),h=Object(_.a)(d,2),y=h[0],f=h[1],p=Object(o.useState)(i),v=Object(_.a)(p,2),E=v[0],b=v[1],g=Object(o.useState)(l),N=Object(_.a)(g,2),k=N[0],x=N[1];return Object(o.useEffect)(function(){f(n),b(i)},[n,r,i]),s.a.createElement("div",{className:"inputrange_container"},s.a.createElement("div",{className:"inputrange_header",style:{position:"relative"}},s.a.createElement("label",{htmlFor:a,className:"inputrange_name"},t),s.a.createElement("div",{className:"inputrange_number",style:{position:"absolute",right:"3px"}},m?S(y):M(y,m)),s.a.createElement("input",{id:a,type:m?"number":"text",className:"inputrange_number",value:y,"aria-label":t,"aria-required":"true",style:{border:"none",textAlign:"right",outline:"none",width:"100px",marginRight:"2px",color:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",zIndex:"99"},onClick:function(){"Down Payment"!==t&&"Mortgage"!==t||(c(0),f(0))},onChange:function(e){var a=e.target.value;if(m){if(a>i)return;if(a<0)return;f(a),c(a)}else{var n=D(a);if(n>=Number.MAX_SAFE_INTEGER||-1===Math.sign(n))return;if("Down Payment"===t&&n>u)return;"Mortgage"===t?c(n):"Down Payment"===t&&c(n),f(n),n>E&&b(n),0!==n&&n<k&&x(n)}}})),s.a.createElement("div",{className:"inputrange_body"},s.a.createElement(V.a,{maxValue:m?i:E,minValue:m?l:k,value:n,onChange:c})))},T=(t(660),t(661),function(e){var a=e.year,t=e.handleOnClick;return s.a.createElement("div",{className:"Period mainBody_calculator_period"},s.a.createElement("span",{className:"mainBody_calculator_font mainBody_calculator_name"},"Period"),s.a.createElement("div",{className:"mainBody_calculator_years"},s.a.createElement("button",{className:"flex_center mainBody_calculator_font_year_function noselect",id:"decrease",onClick:function(e){return t(e)}},"-"),s.a.createElement("div",{className:"flex_center mainBody_calculator_font_year"},Number(a)," years"),s.a.createElement("button",{className:"flex_center mainBody_calculator_font_year_function noselect",id:"increase",onClick:function(e){return t(e)}},"+")))}),q=(t(662),function(e){e.handleCancel;var a=e.handleDefault;return s.a.createElement("div",{className:"mainBody_calculator_buttons flex_row_center",style:{justifyContent:"flex-end"}},s.a.createElement("button",{onClick:a,className:"mainBody_calculator_buttons_default flex_center"},"Calculate"))}),$={mortage:2e5,downPayment:0,displayValue:0,interestRate:30,yearValue:15,monthlyPayment:0},z=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state=$,t.targetOnchange=function(e){t.setState({mortage:e})},t.initialDepositOnchange=function(e){t.setState({downPayment:e,displayValue:e})},t.monthlyPaymentOnchange=function(e){t.setState({interestRate:e})},t.monthlyPayment=function(e){var a=e.mortage,n=e.downPayment,r=e.interestRate,c=e.year;0!==n&&void 0===n&&(n=t.state.downPayment);var l=D(r,!1)/1e4/12,i=12*c,o=l*Math.pow(l+1,i)/(Math.pow(l+1,i)-1)*(a-n);t.setState({monthlyPayment:o}),t.props.renderProp&&t.props.renderProp({monthlyPayment:o,mortage:a,downPayment:n,interestRate:r,year:c})},t.handleOnClick=function(e){var a=t.state.yearValue;if("increase"===e.target.id){if((a+=15)>30)return;t.setState({yearValue:a})}else{if((a-=15)<5)return;t.setState({yearValue:a})}t.monthlyPayment({mortage:t.state.mortage,interestRate:t.state.interestRate,year:a})},t.handleCancel=function(){},t.handleDefault=function(){t.monthlyPayment({mortage:t.state.mortage,interestRate:t.state.interestRate,year:t.state.yearValue})},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"mainBody_calculator flex_center"},s.a.createElement("div",{className:"mainBody_calculator_body"},s.a.createElement("div",{className:"mainBody_calculator_target"},s.a.createElement(L,{name:"Mortgage",value:this.state.mortage||0,onChange:this.targetOnchange,id:"target",min:0,max:1e6,edit:!0,mortage:this.state.mortage,downPayment:this.state.downPayment})),s.a.createElement("div",{className:"mainBody_calculator_deposit"},s.a.createElement(L,{name:"Down Payment",displayValue:this.state.displayValue,value:this.state.downPayment||0,onChange:this.initialDepositOnchange,id:"initialDeposit",min:0,max:this.state.mortage<this.state.downPayment?this.state.downPayment:this.state.mortage,edit:!0,mortage:this.state.mortage,downPayment:this.state.downPayment})),s.a.createElement("div",{className:"mainBody_calculator_payment"},s.a.createElement(L,{name:"Interest Rate",value:this.state.interestRate,onChange:this.monthlyPaymentOnchange,id:"monthlyPayment",min:1,max:999,percent:!0,edit:!1})),s.a.createElement(T,{year:this.state.yearValue,handleOnClick:this.handleOnClick}),s.a.createElement(q,{handleCancel:this.handleCancel,handleDefault:this.handleDefault})))}}]),a}(s.a.Component),H={monthlyPayment:0,mortage:0,downPayment:0,interestRate:0,year:0},J=function(){var e=Object(o.useState)(H),a=Object(_.a)(e,2),t=a[0],n=a[1];return s.a.createElement("div",{className:"mainBody_container"},s.a.createElement(v,{monthlyPayment:t.monthlyPayment}),s.a.createElement(b,null),s.a.createElement(z,{renderProp:function(e){var a=e.monthlyPayment,t=e.mortage,r=e.downPayment,c=e.interestRate,l=e.year;return n({monthlyPayment:a,mortage:t,downPayment:r,interestRate:c,year:l})}}),s.a.createElement(F,{data:t,setData:n}))},W=(t(663),t(664),{container:{display:"flex",justifyContent:"flex-start",alignItems:"center",gridArea:"headerName"}}),Y=function(e){var a=e.stepName;return s.a.createElement("div",{className:"main_header_name main_header_font",style:W.container},a||"Mortage Calculator")},G=t(11),U={checkmark:{fontFamily:"arial",transform:"scaleX(-1) rotate(-45deg)",color:"white",textAlign:"center",height:"25px",width:"25px",lineHeight:"24px",fontSize:".8em",fontWeight:"900"},checked:{height:"25px",width:"25px",backgroundColor:"var(--main-header-blue-color)",borderRadius:"50%",display:"inlineBlock",boxShadow:"0px 2px 10px 2px rgba(93, 134, 255, 0.4)"}},X=function(){return s.a.createElement("div",{style:U.checked},s.a.createElement("div",{style:U.checkmark},"L"))},Z=(t(665),function(e){var a=e.stepNumber,t=e.headerName;return s.a.createElement("div",{className:"Tooltip_container"},s.a.createElement("div",{className:"up-arrow",href:"#"},s.a.createElement("div",{className:"content"},s.a.createElement("span",{className:"stepNumber"},a),s.a.createElement("span",{className:"headerName"},t))))}),K=(t(666),{pointer:{position:"absolute",height:"25px",width:"25px",border:"8.2px solid white",backgroundColor:"var(--main-header-blue-color)",borderRadius:"50%",display:"inlineBlock",boxShadow:"0px 2px 10px 2px rgba(93, 134, 255, 0.3)"}}),Q=function(e){var a=e.step,t=e.label;return s.a.createElement("div",{className:"stepper_pointer",style:K.pointer},s.a.createElement(Z,{stepNumber:"Step ".concat(a),headerName:t}))},ee={container:{display:"flex",alignItems:"center",width:"100%"},circle:{position:"absolute",height:"25px",width:"25px",border:"3px solid var(--main-header-grey-color)",backgroundColor:"var(--main-bg-color)",borderRadius:"50%",display:"inlineBlock"},line:{width:"100%",height:"3px",transition:"background-color 1s"}},ae=function(e){var a=e.label,t=e.checked,n=e.current,r=e.last,c=e.step;return s.a.createElement("div",{style:Object(G.a)({},ee.container,{width:r?"105px":"100%"})},n?s.a.createElement(Q,{label:a,step:c}):t?s.a.createElement(X,null):s.a.createElement("div",{style:ee.circle}),r?null:s.a.createElement("div",{style:Object(G.a)({},ee.line,{backgroundColor:t?"var(--main-header-blue-color)":"var(--main-header-grey-color)"})}))},te=function(e){var a=e.stepData;e.currentStep;return s.a.createElement("div",{className:"main_header_stepper"},a.map(function(e,a){return s.a.createElement(ae,{key:a,label:e.label,checked:e.checked,current:e.current,last:e.last,step:e.step})}))},ne=(t(667),function(e){var a=e.handleOnClick;return s.a.createElement("div",{className:"pointer_button",onClick:function(){return a()}},s.a.createElement("div",{className:"pointer_button_font"},"Continue"),s.a.createElement("div",{className:"pointer_button_arrow_container"},s.a.createElement("div",{className:"arrow"})))}),re=(t(668),function(e){var a=e.handleOnClick;return s.a.createElement("div",{className:"main_header_continue main_header_continue_container"},s.a.createElement(ne,{handleOnClick:a}))}),ce=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={currentStep:3,stepData:[{label:"",checked:!0,current:!1,step:1,last:!1},{label:"",checked:!0,current:!1,step:2,last:!1},{label:"Calculator",checked:!1,current:!0,step:3,last:!1},{label:"",checked:!1,current:!1,step:4,last:!1},{label:"",checked:!1,current:!1,step:5,last:!0}]},t.handleOnClick=function(){var e=t.state,a=e.currentStep,n=e.stepData;a>=5||t.setState({currentStep:a+1},function(){var e=n.map(function(e){return t.state.currentStep-1===e.step&&(e.checked=!0,e.current=!1),t.state.currentStep===e.step&&(e.checked=!1,e.current=!0),e});t.setState({stepData:e})})},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.state,a=e.stepData,t=e.currentStep;return s.a.createElement("div",{className:"main_header"},s.a.createElement(Y,null),s.a.createElement(te,{stepData:a,currentStep:t}),s.a.createElement(re,{handleOnClick:this.handleOnClick}))}}]),a}(s.a.Component),le=function(){return s.a.createElement("main",{className:"InternshipProject_main"},s.a.createElement(ce,null),s.a.createElement(J,null))},ie=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){document.querySelector("nav").style.top="-200px",document.documentElement.style.setProperty("--nav-line-display","none")}},{key:"componentWillUnmount",value:function(){document.querySelector("nav").style.top="0px",document.documentElement.style.setProperty("--nav-line-display","inline-block")}},{key:"render",value:function(){return s.a.createElement("div",{className:"InternshipProject_App"},s.a.createElement(h,null),s.a.createElement(p,null),s.a.createElement(le,null))}}]),a}(o.Component);a.default=ie},336:function(e,a,t){},622:function(e,a,t){},623:function(e,a,t){},624:function(e,a,t){},625:function(e,a,t){},626:function(e,a,t){},632:function(e,a,t){},633:function(e,a,t){},634:function(e,a,t){},635:function(e,a,t){},636:function(e,a,t){},637:function(e,a,t){},638:function(e,a,t){},639:function(e,a,t){},643:function(e,a,t){},660:function(e,a,t){},661:function(e,a,t){},662:function(e,a,t){},663:function(e,a,t){},664:function(e,a,t){},665:function(e,a,t){},666:function(e,a,t){},667:function(e,a,t){},668:function(e,a,t){}}]);
//# sourceMappingURL=159.a264b563.chunk.js.map