(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8jUH":function(e,t,a){"use strict";a.r(t);var n,i=a("UrUy"),l=a.n(i),r=a("JYC+"),s=a.n(r),o=a("R3/3"),u=a("z3IF"),c=a("LkAs"),h=a("Moms"),d=a("bMj6"),v=a("hZod"),g=a("tEuJ"),f=a("mXGw"),p=a.n(f),b=a("CXsl"),m=a("YKN3"),w=a("t1Qi"),C=function(e){function t(e){var a;Object(c.default)(this,t);var n=(a=Object(d.default)(this,Object(v.default)(t).call(this,e))).props,i=n.data,l=n.bandwidth,r=n.xScale,s=n.step_data;return a.state={data:i,bandwidth:l,xScale:r,step_data:s},a}return Object(g.default)(t,e),Object(h.default)(t,[{key:"componentDidMount",value:function(){this.drawBars()}},{key:"componentDidUpdate",value:function(){this.drawBars()}},{key:"componentWillReceiveProps",value:function(e){var t=e.data,a=e.xScale,n=e.bandwidth,i=e.step_data;this.setState({data:t,bandwidth:n,xScale:a,step_data:i})}},{key:"drawBars",value:function(){var e=this.state,t=e.data,a=e.xScale,n=e.bandwidth,i=e.step_data,l=w.q().domain(t.values.slice(0,4).map(function(e){return e.label})).rangeRound([0,n]),r=100/i.range,s=t.values.slice(0,4).map(function(e){return e.label=e.label,e.value=+e.value,e}),o=t.values.slice(4,5).map(function(e){return e.label=e.label,e.value=+e.value,e}),u=w.s().range(["#bdbbbc","#63ae2d","#929292","#000700"]);w.v(this.el).selectAll("*").remove(),w.v(this.el).selectAll("rect").data(s).enter().append("rect").attr("rx",5).attr("ry",5).attr("x",function(e){return e.value>0?a(0):a(e.value*r)}).attr("width",function(e){return e.value>0?a(e.value*r-100):a(0)-a(e.value*r)}).attr("height",l.bandwidth()).attr("y",function(e){return l(e.label)}).style("fill",function(e){return u(e.label)}).style("opacity",function(e){return e.label.includes("Ebitda")?0:1}),w.v(this.el).selectAll("path").data(o).enter().append("path").attr("d",function(e){return"M"+a(e.value*r)+" -1 L"+a(e.value*r)+" "+(l.bandwidth()+2)+" Z"}).style("stroke","#de0730").style("stroke-width",3),w.v(this.el).selectAll("text").data(s).enter().append("text").attr("x",function(e){return e.value,a(e.value*r)}).attr("y",function(e){return 0==e.label.includes("Ebitda")?l(e.label)+l.bandwidth()/2:0}).attr("dx",function(e){return e.value>0?5:-5}).text(function(e){return 0==e.value?"":e.value+""}).attr("text-anchor",function(e){return e.value>0?"start":"end"}).attr("alignment-baseline","central").style("font-size",12).style("fill","grey")}},{key:"render",value:function(){var e=this;return p.a.createElement("g",{ref:function(t){return e.el=t}})}}]),t}(p.a.Component),Y=function(e){function t(e){var a;Object(c.default)(this,t);var n=(a=Object(d.default)(this,Object(v.default)(t).call(this,e))).props,i=n.svgDimen,l=n.margins,r=n.data,s=w.r().range([0,i.width-l.left-l.right]).domain([-100,100]),o=w.q().rangeRound([i.height-l.bottom,0]).padding(.01).domain(r.map(function(e){return e.year}));return a.state={svgDimen:i,margins:l,xScale:s,y0Scale:o,data:r,bandwidth:o.bandwidth(),step_data:a.getRange(r)},a}return Object(g.default)(t,e),Object(h.default)(t,[{key:"componentDidMount",value:function(){this.renderAxis()}},{key:"componentWillReceiveProps",value:function(e){var t=e.svgDimen,a=e.margins,n=e.data,i=w.r().range([0,t.width-a.left-a.right]).domain([-100,100]),l=w.q().rangeRound([t.height-a.bottom,0]).padding(.01).domain(n.map(function(e){return e.year}));this.setState({svgDimen:t,margins:a,xScale:i,y0Scale:l,data:n,bandwidth:l.bandwidth(),step_data:this.getRange(n)})}},{key:"componentDidUpdate",value:function(){this.renderAxis()}},{key:"renderAxis",value:function(){var e=this.state,t=e.xScale,a=e.y0Scale,n=e.svgDimen,i=e.margins,l=w.c(t).tickSize(n.height-i.bottom).ticks(10),r=w.d(a).tickSize(0);w.v(this.xAxisElement).selectAll("*").remove(),w.v(this.yAxisElement).selectAll("*").remove(),w.v(this.xAxisElement).attr("class","x axis").call(l).select(".domain").remove(),w.v(this.xAxisElement).selectAll(".tick line").attr("stroke","#777").attr("stroke-dasharray","2,2"),w.v(this.yAxisElement).attr("class","y axis").call(r).select(".domain").remove(),w.v(this.yAxisElement).append("text").attr("x",0).attr("y",0).style("text-anchor","middle").style("fill","black")}},{key:"getRange",value:function(e){for(var t=[],a=e.map(function(e){return e.year=e.year,e.values=e.values,e}),n=0;n<a.length;n++)for(var i=0;i<a[n].values.length;i++)a[n].values[i].value||(a[n].values[i].value=0),t.push(a[n].values[i].value);var l=w.n(w.w(t)),r=w.m(w.w(t));return{min:l,max:r,range:Math.abs(r-l)}}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.xScale,i=t.y0Scale,l=t.step_data,r=t.bandwidth;return p.a.createElement("g",{className:"Axis"},p.a.createElement("g",{className:"xAxis",transform:"translate(50,0)",ref:function(t){return e.xAxisElement=t}}),p.a.createElement("g",{className:"yAxis",transform:"translate(40,0)",ref:function(t){return e.yAxisElement=t}}),a.map(function(e,t){return p.a.createElement("g",{key:t,className:"bar-group".concat(e.year),transform:"translate(50, ".concat(i(e.year),")")},p.a.createElement(C,{key:t,data:e,xScale:n,bandwidth:r,step_data:l}))}))}}]),t}(p.a.Component),L=function(e){function t(e){var a;Object(c.default)(this,t);var n=(a=Object(d.default)(this,Object(v.default)(t).call(this,e))).props,i=n.width,l=n.height,r=n.data,s={top:20,right:20,bottom:20,left:60},o={width:i-s.left-s.right,height:l-s.top-s.bottom};return a.state={margins:s,svgDimen:o,data:r},a}return Object(g.default)(t,e),Object(h.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.width,a=e.height,n=e.data,i={top:20,right:20,bottom:20,left:60},l={width:t-i.left-i.right,height:a-i.top-i.bottom};this.setState({margins:i,svgDimen:l,data:n})}},{key:"render",value:function(){var e=this.state,t=e.svgDimen,a=e.margins,n=e.data;return p.a.createElement("svg",{className:"graphSvg",width:t.width,height:t.height},p.a.createElement(Y,{svgDimen:t,margins:a,data:n}))}}]),t}(f.Component),M=function(e){function t(e){var a;Object(c.default)(this,t);var n=(a=Object(d.default)(this,Object(v.default)(t).call(this,e))).props,i=n.parentWidth,l=n.parentHeight,r=n.data;return a.state={data:r,width:i>850?850:Math.max(i,450),height:Math.max(l,500)},a}return Object(g.default)(t,e),Object(h.default)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.parentWidth,a=e.parentHeight,n=e.data;this.setState({data:n,width:t>850?850:Math.max(t,450),height:Math.max(a,500)})}},{key:"render",value:function(){var e=this.state.data,t=[{year:"2019",values:[{label:"NetoperatingCashFlowLY",value:e.NetoperatingCashFlowLY},{label:"NetInvestingCashFlowLY",value:e.NetInvestingCashFlowLYMin},{label:"NetchangeInCashLY",value:e.NetchangeInCashLY},{label:"NetFinancingCashFlowLY",value:e.NetFinancingCashFlowLY},{label:"EbitdaLY",value:e.EbitdaLY}]},{year:"2018",values:[{label:"NetoperatingCashFlowLYMin1",value:e.NetoperatingCashFlowLYMin1},{label:"NetInvestingCashFlowLYMin1",value:e.NetInvestingCashFlowLYMin1},{label:"NetchangeInCashLYMin1",value:e.NetchangeInCashLYMin1},{label:"NetFinancingCashFlowLYMin1",value:e.NetFinancingCashFlowLYMin1},{label:"EbitdaLYMin1",value:e.EbitdaLYMin1}]},{year:"2017",values:[{label:"NetoperatingCashFlowLYMin2",value:e.NetoperatingCashFlowLYMin2},{label:"NetInvestingCashFlowLYMin2",value:e.NetInvestingCashFlowLYMin2},{label:"NetchangeInCashLYMin2",value:e.NetchangeInCashLYMin2},{label:"NetFinancingCashFlowLYMin2",value:e.NetFinancingCashFlowLYMin2},{label:"EbitdaLYMin2",value:e.EbitdaLYMin2}]},{year:"2016",values:[{label:"NetoperatingCashFlowLYMin3",value:e.NetoperatingCashFlowLYMin3},{label:"NetInvestingCashFlowLYMin3",value:e.NetInvestingCashFlowLYMin3},{label:"NetchangeInCashLYMin3",value:e.NetchangeInCashLYMin3},{label:"NetFinancingCashFlowLYMin3",value:e.NetFinancingCashFlowLYMin3},{label:"EbitdaLYMin3",value:e.EbitdaLYMin3}]},{year:"2015",values:[{label:"NetoperatingCashFlowLYMin4",value:e.NetoperatingCashFlowLYMin4},{label:"NetInvestingCashFlowLYMin4",value:e.NetInvestingCashFlowLYMin4},{label:"NetchangeInCashLYMin4",value:e.NetchangeInCashLYMin4},{label:"NetFinancingCashFlowLYMin4",value:e.NetFinancingCashFlowLYMin4},{label:"EbitdaLYMin4",value:e.EbitdaLYMin4}]}];return p.a.createElement(f.Fragment,null,p.a.createElement(L,{data:t,width:this.state.width,height:this.state.height}))}}]),t}(f.Component),y=(n=M,function(e){function t(e){var a;return Object(c.default)(this,t),(a=Object(d.default)(this,Object(v.default)(t).call(this,e))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(m.default)(Object(m.default)(a))),a}return Object(g.default)(t,e),Object(h.default)(t,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var e=this.state.containerWidth,t=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;e!==t&&this.setState(function(){return{containerWidth:t,containerHeight:a}})}},{key:"renderChart",value:function(){var e=this.state.containerWidth,t=this.state.containerHeight;return p.a.createElement(n,Object(u.a)({},this.props,{parentWidth:e,parentHeight:t}))}},{key:"render",value:function(){var e=this,t=null!==this.state.containerWidth;return p.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(t){e.chartContainer=t},className:"Responsive-wrapper"},t&&this.renderChart())}}]),t}(f.Component)),N=function(e){function t(){return Object(c.default)(this,t),Object(d.default)(this,Object(v.default)(t).apply(this,arguments))}return Object(g.default)(t,e),Object(h.default)(t,[{key:"render",value:function(){var e=this.props,t=e.session,a=(e.navMenu,e.data);return p.a.createElement(b.a,Object(u.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),p.a.createElement("div",{className:"content"},p.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),p.a.createElement("p",null,"The Coca-Cola Company is an American ...."),p.a.createElement(y,{data:a[0].calculated5Y})))}}],[{key:"getInitialProps",value:function(){var e=Object(o.default)(l.a.mark(function e(t){var a,n,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.req,n=a?a.headers["user-agent"]:navigator.userAgent,e.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:s()({operationName:null,variables:{},query:'\n        {\n          security(id: "xgfr4") {\n            id\n            name\n            calculated5Y {\n              LY\n              SalesOrRevenueLY\n              SalesOrRevenueLYMin1\n              SalesOrRevenueLYMin2\n              DividendPayOutLY\n              DividendPayOutLYMin1\n              DividendPayOutLYMin2\n              NetoperatingCashFlowLY\n              NetoperatingCashFlowLYMin1\n              NetoperatingCashFlowLYMin2\n              NetoperatingCashFlowLYMin3\n              NetoperatingCashFlowLYMin4\n              NetFinancingCashFlowLY\n              NetFinancingCashFlowLYMin1\n              NetFinancingCashFlowLYMin2\n              NetFinancingCashFlowLYMin3\n              NetFinancingCashFlowLYMin4\n              NetchangeInCashLY\n              NetchangeInCashLYMin1\n              NetchangeInCashLYMin2\n              NetchangeInCashLYMin3\n              NetchangeInCashLYMin4\n              NetInvestingCashFlowLY\n              NetInvestingCashFlowLYMin1\n              NetInvestingCashFlowLYMin2\n              NetInvestingCashFlowLYMin3\n              NetInvestingCashFlowLYMin4\n              EbitdaLY\n              EbitdaLYMin1\n              EbitdaLYMin2\n              EbitdaLYMin3\n              EbitdaLYMin4\n              }\n          }\n        }'})}).then(function(e){return e.json()}).then(function(e){return console.log(e.data.security),[e.data.security]});case 4:return i=e.sent,e.abrupt("return",{userAgent:n,data:i});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(f.Component);t.default=N},GZ1U:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/negative",function(){var e=a("8jUH");return{page:e.default||e}}])}},[["GZ1U",1,0]]]);