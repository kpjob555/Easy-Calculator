(window["webpackJsonpeasy-calculator"]=window["webpackJsonpeasy-calculator"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),u=a.n(l),i=(a(13),a(3)),c=a(4),s=a(6),p=a(5),o=a(7),m=function(e){return r.a.createElement("div",{className:"Display"},e.children)},d=(a(14),function(e){return r.a.createElement("div",{className:"input",onClick:e.addValue},e.children)}),v=(a(15),function(e){return r.a.createElement("div",{className:"Button"},r.a.createElement("ul",{className:"Teburu"},r.a.createElement("li",null,r.a.createElement(d,{addValue:e.reset},"C")),r.a.createElement("li",null,r.a.createElement(d,{addValue:e.mul},r.a.createElement("i",{class:"fas fa-times"}))),r.a.createElement("li",null,r.a.createElement(d,{addValue:e.div},r.a.createElement("i",{class:"fas fa-divide"}))),r.a.createElement("li",null,r.a.createElement(d,{addValue:e.minus},r.a.createElement("i",{class:"fas fa-minus"})))),r.a.createElement("ul",{className:"Teburu"},r.a.createElement("li",null,r.a.createElement(d,{addValue:function(){return e.value(7)}},"7")),r.a.createElement("li",null,r.a.createElement(d,{addValue:function(){return e.value(8)}},"8")),r.a.createElement("li",null,r.a.createElement(d,{addValue:function(){return e.value(9)}},"9")),r.a.createElement("li",null,r.a.createElement(d,{addValue:e.plus},r.a.createElement("i",{class:"fas fa-plus"})))),r.a.createElement("ul",{className:"Teburu"},r.a.createElement("li",null,r.a.createElement(d,{addValue:function(){return e.value(4)}},"4")),r.a.createElement("li",null,r.a.createElement(d,{addValue:function(){return e.value(5)}},"5")),r.a.createElement("li",null,r.a.createElement(d,{addValue:function(){return e.value(6)}},"6")),r.a.createElement("li",null,r.a.createElement(d,{addValue:e.ans},"="))),r.a.createElement("ul",{className:"Teburu"},r.a.createElement("li",null,r.a.createElement(d,{addValue:function(){return e.value(1)}},"1")),r.a.createElement("li",null,r.a.createElement(d,{addValue:function(){return e.value(2)}},"2")),r.a.createElement("li",null,r.a.createElement(d,{addValue:function(){return e.value(3)}},"3")),r.a.createElement("li",null,r.a.createElement(d,{addValue:function(){return e.value(0)}},"0"))))}),f=(a(16),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={displayAction:"",prevInput:0,operatorSign:"",prevOperatorSign:""},a.showValue=function(e){a.setState({displayAction:a.state.displayAction.concat(e)})},a.checkOperator=function(e){if(a.state.prevOperatorSign&&a.state.prevOperatorSign.length>0){if("div"===a.state.prevOperatorSign){var t=Number(a.state.prevInput,10)/Number(a.state.displayAction);a.setState({operatorSign:e,prevInput:t})}if("mul"===a.state.prevOperatorSign){var n=Number(a.state.prevInput,10)*Number(a.state.displayAction);a.setState({operatorSign:e,prevInput:n})}if("plus"===a.state.prevOperatorSign){var r=Number(a.state.prevInput,10)+Number(a.state.displayAction);a.setState({operatorSign:e,prevInput:r})}if("minus"===a.state.prevOperatorSign){var l=Number(a.state.prevInput,10)-Number(a.state.displayAction);a.setState({operatorSign:e,prevInput:l})}}else a.setState({prevOperatorSign:e})},a.checkPrev=function(e){if(a.state.prevInput&&a.state.prevInput.length>0)return a.state.prevInput;a.setState({prevInput:a.state.displayAction})},a.multiplyNum=function(){a.checkPrev("mul"),a.checkOperator("mul",a.state.currentInput),a.setState({displayAction:""})},a.devideNum=function(){a.checkPrev("div"),a.checkOperator("div",a.state.currentInput),a.setState({displayAction:""})},a.plusNum=function(){a.checkPrev("plus"),a.checkOperator("plus",a.state.currentInput),a.setState({displayAction:""})},a.minusNum=function(){a.checkPrev("minus"),a.checkOperator("minus",a.state.currentInput),a.setState({displayAction:""})},a.answer=function(){if(a.checkPrev(),"div"===a.state.operatorSign||"div"===a.state.prevOperatorSign){var e=Number(a.state.prevInput,10)/Number(a.state.displayAction);a.setState({operatorSign:"",prevInput:e,displayAction:e,prevOperatorSign:""})}if("mul"===a.state.operatorSign||"mul"===a.state.prevOperatorSign){var t=Number(a.state.prevInput,10)*Number(a.state.displayAction);console.log("Final Answer = "+t),a.setState({operatorSign:"",prevInput:t,displayAction:t,prevOperatorSign:""})}if("plus"===a.state.operatorSign||"plus"===a.state.prevOperatorSign){var n=Number(a.state.prevInput,10)+Number(a.state.displayAction);a.setState({operatorSign:"",prevInput:n,displayAction:n,prevOperatorSign:""})}if("minus"===a.state.operatorSign||"minus"===a.state.prevOperatorSign){var r=Number(a.state.prevInput,10)-Number(a.state.displayAction);a.setState({operatorSign:"",prevInput:r,displayAction:r,prevOperatorSign:""})}},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(m,{className:"Display"},r.a.createElement("p",null,this.state.prevOperatorSign,"  ",this.state.displayAction)),r.a.createElement(v,{id:new Date,plus:this.plusNum,minus:this.minusNum,mul:this.multiplyNum,div:this.devideNum,ans:this.answer,reset:function(){return e.setState({displayAction:"",operatorSign:"",prevOperatorSign:"",prevInput:""})},value:function(t){return e.showValue(t)}}),r.a.createElement("p",{className:"Credit",onClick:function(){return alert("Made by MJDC")}},"Easy Calculator V1.1"))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.66d3f460.chunk.js.map