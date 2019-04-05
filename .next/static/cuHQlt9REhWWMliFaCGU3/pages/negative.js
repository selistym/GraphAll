(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"8jUH":function(e,t,a){"use strict";a.r(t);var l=a("kOwS"),n=a("0iUn"),i=a("sLSF"),r=a("MI3g"),u=a("a7VT"),s=a("Tit0"),c=a("q1tI"),o=a.n(c),d=a("CXsl"),h=a("VphZ"),v=function(e){function t(e){var a;Object(n.default)(this,t);var l=(a=Object(r.default)(this,Object(u.default)(t).call(this,e))).props,i=l.data,s=l.band,c=l.xScale,o=l.yScale;return a.state={data:i,band:s,xScale:c,yScale:o},a}return Object(s.default)(t,e),Object(i.default)(t,[{key:"componentDidMount",value:function(){this.drawBars()}},{key:"componentDidUpdate",value:function(){this.drawBars()}},{key:"componentWillReceiveProps",value:function(e){var t=e.data,a=e.xScale,l=e.yScale;this.setState({data:t,xScale:a,yScale:l})}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.data!==e.data}},{key:"drawBars",value:function(){var e=this.state,t=e.data,a=e.xScale,l=e.yScale,n=t.values.map(function(e){return e.label=e.label,e.value=+e.value,e}),i=h.r().range(["#bdbbbc","#63ae2d","#929292","#000700"]);h.u(this.el).selectAll("*").remove(),h.u(this.el).selectAll("rect").data(n).enter().append("rect").attr("rx",5).attr("ry",5).attr("x",function(e){return e.value>0?a(0):a(e.value)}).attr("width",function(e){return e.value>0?a(e.value-100):a(0)-a(e.value)}).attr("height",l.bandwidth()).attr("y",function(e){return l(e.label)}).style("fill",function(e){return i(e.label)}).style("opacity",function(e){return"EBITDA"===e.label?0:1}),h.u(this.el).selectAll("text").data(n).enter().append("text").attr("x",function(e){return e.value,a(e.value)}).attr("y",function(e){return"EBITDA"!==e.label?l(e.label)+l.bandwidth()/2:0}).text(function(e){return"EBITDA"===e.label?"":e.value+"%"}).attr("text-anchor",function(e){return e.value>0?"end":"start"}).attr("alignment-baseline","central").style("font-size",12).style("fill","white"),h.u(this.el).selectAll("path").data(n).enter().append("path").attr("d",function(e){return"M"+a(e.value)+" -1 L"+a(e.value)+" "+(l.bandwidth()+2)+" Z"}).style("stroke","#de0730").style("stroke-width",3).style("opacity",function(e){return"EBITDA"===e.label?1:0})}},{key:"render",value:function(){var e=this;return o.a.createElement("g",{ref:function(t){return e.el=t}})}}]),t}(o.a.Component),m=function(e){function t(e){var a;Object(n.default)(this,t);var l=(a=Object(r.default)(this,Object(u.default)(t).call(this,e))).props,i=l.svgDimen,s=l.margins,c=l.data,o=h.q().range([0,i.width-s.left-s.right]).domain([-100,100]),d=h.p().rangeRound([i.height-s.bottom,0]).padding(.01).domain(c.map(function(e){return e.year})),v=h.p().domain(c[0].values.slice(0,4).map(function(e){return e.label})).rangeRound([0,d.bandwidth()]);return a.state={svgDimen:i,margins:s,xScale:o,y0Scale:d,y1Scale:v,data:c},a}return Object(s.default)(t,e),Object(i.default)(t,[{key:"componentDidMount",value:function(){this.renderAxis()}},{key:"componentWillReceiveProps",value:function(e){var t=e.svgDimen,a=e.margins,l=e.data,n=h.q().range([0,t.width-a.left-a.right]).domain([-100,100]),i=h.p().rangeRound([t.height-a.bottom,0]).padding(.01).domain(l.map(function(e){return e.year})),r=h.p().domain(l[0].values.slice(0,4).map(function(e){return e.label})).rangeRound([0,i.bandwidth()]);this.setState({svgDimen:t,margins:a,xScale:n,y0Scale:i,y1Scale:r,data:l})}},{key:"componentDidUpdate",value:function(){this.renderAxis()}},{key:"renderAxis",value:function(){var e=this.state,t=e.xScale,a=e.y0Scale,l=e.svgDimen,n=e.margins,i=h.c(t).tickSize(l.height-n.bottom).ticks(10),r=h.d(a).tickSize(0);h.u(this.xAxisElement).selectAll("*").remove(),h.u(this.yAxisElement).selectAll("*").remove(),h.u(this.xAxisElement).attr("class","x axis").call(i).select(".domain").remove(),h.u(this.xAxisElement).selectAll(".tick line").attr("stroke","#777").attr("stroke-dasharray","2,2"),h.u(this.yAxisElement).attr("class","y axis").call(r).select(".domain").remove(),h.u(this.yAxisElement).append("text").attr("x",0).attr("y",0).style("text-anchor","middle").style("fill","black")}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,l=t.xScale,n=t.y0Scale,i=t.y1Scale;return o.a.createElement("g",{className:"Axis"},o.a.createElement("g",{className:"xAxis",transform:"translate(50,0)",ref:function(t){return e.xAxisElement=t}}),o.a.createElement("g",{className:"yAxis",transform:"translate(40,0)",ref:function(t){return e.yAxisElement=t}}),a.map(function(e,t){return o.a.createElement("g",{key:t,className:"bar-group".concat(e.year),transform:"translate(50, ".concat(n(e.year),")")},o.a.createElement(v,{key:t,data:e,yScale:i,xScale:l}))}))}}]),t}(o.a.Component),f=function(e){function t(e){var a;Object(n.default)(this,t);var l=(a=Object(r.default)(this,Object(u.default)(t).call(this,e))).props,i=l.width,s=l.height,c=l.data,o={top:20,right:20,bottom:20,left:60},d={width:i-o.left-o.right,height:s-o.top-o.bottom};return a.state={margins:o,svgDimen:d,data:c},a}return Object(s.default)(t,e),Object(i.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.width,a=e.height,l=(e.data,{top:20,right:20,bottom:20,left:60}),n={width:t-l.left-l.right,height:a-l.top-l.bottom};this.setState({data:e.data,margins:l,svgDimen:n})}},{key:"render",value:function(){var e=this.state,t=e.svgDimen,a=e.margins,l=e.data;return o.a.createElement("svg",{className:"graphSvg",width:t.width,height:t.height},o.a.createElement(m,{svgDimen:t,margins:a,data:l}))}}]),t}(c.Component),b=[{year:"2015",values:[{label:"OA",value:42},{label:"IA",value:23},{label:"FA",value:-42},{label:"CC",value:-33},{label:"EBITDA",value:37}]},{year:"2016",values:[{label:"OA",value:100},{label:"IA",value:23},{label:"FA",value:-100},{label:"CC",value:-23},{label:"EBITDA",value:37}]},{year:"2017",values:[{label:"OA",value:42},{label:"IA",value:23},{label:"FA",value:-42},{label:"CC",value:-43},{label:"EBITDA",value:37}]},{year:"2018",values:[{label:"OA",value:42},{label:"IA",value:23},{label:"FA",value:-42},{label:"CC",value:-53},{label:"EBITDA",value:37}]},{year:"2019",values:[{label:"OA",value:42},{label:"IA",value:23},{label:"FA",value:-42},{label:"CC",value:-13},{label:"EBITDA",value:37}]}],p=function(e){function t(e){var a;return Object(n.default)(this,t),(a=Object(r.default)(this,Object(u.default)(t).call(this,e))).state={data:b,width:600,height:400},a}return Object(s.default)(t,e),Object(i.default)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({data:e.data,width:e.width,height:e.height})}},{key:"render",value:function(){return o.a.createElement(c.Fragment,null,o.a.createElement(f,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),t}(c.Component),y=function(e){function t(){return Object(n.default)(this,t),Object(r.default)(this,Object(u.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.session;e.navMenu;return o.a.createElement(d.a,Object(l.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),o.a.createElement("p",null,"The Coca-Cola Company is an American ...."),o.a.createElement(p,null)))}}]),t}(c.Component);t.default=y},Scg1:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/negative",function(){var e=a("8jUH");return{page:e.default||e}}])}},[["Scg1",1,0]]]);