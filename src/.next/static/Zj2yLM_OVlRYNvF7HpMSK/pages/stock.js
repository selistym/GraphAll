(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{BtDg:function(t,e,a){"use strict";a.r(e);var n,i=a("UrUy"),r=a.n(i),o=a("JYC+"),l=a.n(o),c=a("R3/3"),s=a("z3IF"),d=a("LkAs"),h=a("Moms"),u=a("bMj6"),m=a("hZod"),f=a("tEuJ"),g=a("mXGw"),b=a.n(g),p=a("CXsl"),x=a("YKN3"),y=a("t1Qi"),v=function(t){function e(t){var a;Object(d.default)(this,e);var n=(a=Object(u.default)(this,Object(m.default)(e).call(this,t))).props,i=n.svgDimen,r=n.top_margin,o=n.bottom_margin,l=n.data,c=y.y("%Y"),s=y.o(l.map(function(t){return t.ConsolidatedNetIncome})),h=y.s().range([0,i.width-60]).domain(l.map(function(t){return c(new Date(t.Date))})),f=y.t().domain([0,s]).range([i.height-r-o,0]);return a.state={svgDimen:i,top_margin:r,bottom_margin:o,x:h,y:f,max:s,data:l},a}return Object(f.default)(e,t),Object(h.default)(e,[{key:"componentDidMount",value:function(){this.renderAxis()}},{key:"componentDidUpdate",value:function(){this.renderAxis()}},{key:"componentWillReceiveProps",value:function(t){var e=t.svgDimen,a=t.top_margin,n=t.bottom_margin,i=t.data,r=y.o(i.map(function(t){return t.ConsolidatedNetIncome})),o=y.y("%Y"),l=y.s().range([0,e.width-60]).domain(i.map(function(t){return o(new Date(t.Date))})),c=y.t().domain([0,r]).range([e.height-a-n,0]);this.setState({svgDimen:e,top_margin:a,bottom_margin:n,x:l,y:c,max:r,data:i})}},{key:"renderAxis",value:function(){var t=this.state,e=t.x,a=t.y,n=y.d(e).tickSize(0).tickPadding(15),i=y.e(a).tickSize(10).ticks(10);y.x(this.xAxisElement).selectAll("*").remove(),y.x(this.yAxisElement).selectAll("*").remove(),y.x(this.xAxisElement).attr("class","x axis").call(n).selectAll("text").style("font-size",16),y.x(this.yAxisElement).attr("class","y axis").call(i)}},{key:"render",value:function(){var t=this,e=this.state,a=e.svgDimen,n=e.top_margin,i=e.bottom_margin,r=e.data,o=e.x,l=e.max,c=a.height-n-i;return b.a.createElement("g",{className:"Axis"},b.a.createElement("g",{className:"xAxis",transform:"translate(40,".concat(a.height-i,")"),ref:function(e){return t.xAxisElement=e}}),b.a.createElement("g",{className:"yAxis",transform:"translate(40,".concat(n,")"),ref:function(e){return t.yAxisElement=e}}),r.map(function(t,e){return b.a.createElement("g",{key:e,className:"bar".concat(t.Date),transform:"translate(".concat(40+o.bandwidth()*e+o.bandwidth()/2," ,").concat(a.height-i,")")},b.a.createElement(w,{key:e,data:t,max:l,bar_width:o.bandwidth(),bar_height:c}))}))}}]),e}(b.a.Component),w=function(t){function e(t){var a;Object(d.default)(this,e);var n=(a=Object(u.default)(this,Object(m.default)(e).call(this,t))).props,i=n.data,r=n.bar_width,o=n.bar_height,l=n.max;return a.state={data:i,bar_width:r,bar_height:o,max:l},a}return Object(f.default)(e,t),Object(h.default)(e,[{key:"componentDidMount",value:function(){this.drawBar()}},{key:"componentDidUpdate",value:function(){this.drawBar()}},{key:"componentWillReceiveProps",value:function(t){var e=t.bar_width,a=t.bar_height,n=t.data,i=t.max;this.setState({bar_height:a,bar_width:e,data:n,max:i})}},{key:"drawBar",value:function(){var t=this.state,e=(t.bar_width,t.bar_height),a=t.data,n=e/t.max,i=a.ConsolidatedNetIncome/100*(100-a.DividendPayoutRatio)*n,r=a.ConsolidatedNetIncome/100*a.DividendPayoutRatio*n;y.x(this.el).selectAll("*").remove(),y.x(this.el).append("rect").attr("x",-20).attr("y",-i).attr("width",40).attr("height",i).style("fill","#bdbbbc"),y.x(this.el).append("rect").attr("x",-20).attr("y",5-(i+r)).attr("width",40).attr("height",r-5).style("fill","#df072c"),y.x(this.el).append("rect").attr("rx",5).attr("ry",5).attr("x",-20).attr("y",-(i+r)).attr("width",40).attr("height",r).style("fill","#df072c"),y.x(this.el).append("line").style("stroke-width",3).style("stroke","black").attr("x1",0).attr("y1",-i-10).attr("x2",0).attr("y2",10-i),y.x(this.el).append("line").style("stroke-width",3).style("stroke","black").attr("x1",0).attr("y1",-(i+r)-10).attr("x2",0).attr("y2",10-(i+r)),y.x(this.el).append("text").attr("x",30).attr("y",-i).attr("alignment-baseline","central").attr("text-anchor","start").style("font-size",18).style("fill","#bdbbbc").text(Math.floor(a.ConsolidatedNetIncome/100*(100-a.DividendPayoutRatio)))}},{key:"render",value:function(){var t=this;return b.a.createElement("g",{ref:function(e){return t.el=e}})}}]),e}(g.Component),E=function(t){function e(t){var a;Object(d.default)(this,e);var n=(a=Object(u.default)(this,Object(m.default)(e).call(this,t))).props,i=n.width,r=n.height,o=n.data,l={top:20,right:20,bottom:20,left:60},c={width:i-l.left-l.right,height:r-l.top-l.bottom};return a.state={svgDimen:c,margin:l,data:o},a}return Object(f.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.width,a=t.height,n=t.data,i={top:20,right:20,bottom:20,left:60},r={width:e-i.left-i.right,height:a-i.top-i.bottom};this.setState({svgDimen:r,margin:i,data:n})}},{key:"render",value:function(){var t=this.state,e=t.svgDimen,a=t.data,n=.8*e.width,i=.1*e.height,r=.25*e.height;return b.a.createElement("svg",{width:e.width,height:e.height},b.a.createElement("g",{className:"topLegend",transform:"translate(".concat(e.width/2,", 0)")},b.a.createElement("text",{x:"0",y:"0",alignmentBaseline:"text-before-edge",textAnchor:"middle",style:{fontSize:22,fill:"#bdbbbc",fontWeight:"bold"}},"*Net Income")),b.a.createElement(v,{svgDimen:e,top_margin:i,bottom_margin:r,data:a}),b.a.createElement("g",{className:"bottomLegend",transform:"translate(".concat((e.width-n)/2,", ").concat(e.height-r,")")},b.a.createElement("g",{className:"leftLegend",transform:"translate(0, ".concat(r/2,")")},b.a.createElement("circle",{r:"5",cx:"5",cy:"0",fill:"#de0730"}),b.a.createElement("text",{x:"15",y:"0",alignmentBaseline:"central",textAnchor:"start",style:{fontSize:16,fill:"#bdbbbc"}},"Dividend")),b.a.createElement("g",{className:"centerLegend",transform:"translate(".concat(e.width/3,", ").concat(r/2,")")},b.a.createElement("circle",{r:"5",cx:"5",cy:"0",fill:"#bdbbbc"}),b.a.createElement("text",{x:"15",y:"0",alignmentBaseline:"central",textAnchor:"start",style:{fontSize:16,fill:"#bdbbbc"}},"Retained"),b.a.createElement("text",{x:"15",dy:"15",alignmentBaseline:"central",textAnchor:"start",style:{fontSize:16,fill:"#bdbbbc"}},"Earnings")),b.a.createElement("g",{className:"rightLegend",transform:"translate(".concat(2*e.width/3,", ").concat(r/2,")")},b.a.createElement("text",{x:"15",y:"0",alignmentBaseline:"central",textAnchor:"start",style:{fontSize:16,fill:"#bdbbbc"}},"%  Pay-out"),b.a.createElement("text",{x:"40",dy:"15",alignmentBaseline:"central",textAnchor:"start",style:{fontSize:16,fill:"#bdbbbc"}},"ratio"))))}}]),e}(g.Component),C=function(t){function e(t){var a;Object(d.default)(this,e);var n=(a=Object(u.default)(this,Object(m.default)(e).call(this,t))).props,i=n.parentWidth,r=n.parentHeight,o=n.data;return console.log(o,"from index"),a.state={data:o,width:i>600?600:Math.max(i,400),height:Math.max(r,400)},a}return Object(f.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.parentWidth,a=t.parentHeight,n=t.data;this.setState({data:n,width:e>600?600:Math.max(e,400),height:Math.max(a,400)})}},{key:"render",value:function(){return b.a.createElement(g.Fragment,null,b.a.createElement(E,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),e}(g.Component),j=(n=C,function(t){function e(t){var a;return Object(d.default)(this,e),(a=Object(u.default)(this,Object(m.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(x.default)(Object(x.default)(a))),a}return Object(f.default)(e,t),Object(h.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:a}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return b.a.createElement(n,Object(s.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return b.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(g.Component)),k=function(t){function e(){return Object(d.default)(this,e),Object(u.default)(this,Object(m.default)(e).apply(this,arguments))}return Object(f.default)(e,t),Object(h.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session,a=(t.navMenu,t.data);return b.a.createElement(p.a,Object(s.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),b.a.createElement("div",{className:"content"},b.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),b.a.createElement("p",null,"The Coca-Cola Company is an American ...."),b.a.createElement(j,{data:a[0].last3YearsDividend})))}}],[{key:"getInitialProps",value:function(){var t=Object(c.default)(r.a.mark(function t(e){var a,n,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.req,n=a?a.headers["user-agent"]:navigator.userAgent,t.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:l()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            ticker\n \n            last3YearsDividend {\n            Date\n            ConsolidatedNetIncome\n            ConsolidatedNetIncomeEUR\n            DividendPayoutRatio\n            RetainedEarningsEUR\n            Currency\n            RateEUR\n            }\n          }\n        }'})}).then(function(t){return t.json()}).then(function(t){return[t.data.security]});case 4:return i=t.sent,t.abrupt("return",{userAgent:n,data:i});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),e}(g.Component);e.default=k},NWT5:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stock",function(){var t=a("BtDg");return{page:t.default||t}}])}},[["NWT5",1,0]]]);