(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{RfrO:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/balance",function(){var e=a("tRqh");return{page:e.default||e}}])},azxR:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a("hHgk"),l=a.n(n);function i(e,t,a){return t in e?l()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},tRqh:function(e,t,a){"use strict";a.r(t);var n,l=a("z3IF"),i=a("LkAs"),r=a("Moms"),s=a("bMj6"),c=a("hZod"),h=a("tEuJ"),o=a("mXGw"),u=a.n(o),d=a("CXsl"),f=a("YKN3"),m=a("azxR"),v=a("t1Qi"),b=function(e){function t(e){var a;Object(i.default)(this,t);var n=(a=Object(s.default)(this,Object(c.default)(t).call(this,e))).props,l=n.data,r=n.width,h=n.height;return a.state={data:l,width:r,height:h},a}return Object(h.default)(t,e),Object(r.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.width,a=e.height,n=e.data;this.setState({width:t,height:a,data:n})}},{key:"render",value:function(){var e=this.state,t=e.width,a=e.height,n=e.data,l=20,i={width:t-l-20,height:a-20-20},r=.6*i.width,s=r/514*64,c=.03*i.width,h=.03*i.width,o=[n[0],n[1],n[2]],d=[n[3],{label:"empty",value:0},n[4]];return u.a.createElement("svg",{width:i.width,height:i.height,transform:"translate(".concat(l,", 0)")},u.a.createElement("g",{className:"chartBase",transform:"translate(".concat(i.width/2," , 0)")},u.a.createElement("g",{className:"topLegend"},u.a.createElement("text",{x:-r/4,y:0,alignmentBaseline:"hanging",textAnchor:"middle",style:{fontSize:16,fill:"#bdbbbc",fontWeight:"bold"}},"Assets"),u.a.createElement("text",{x:r/4,y:0,alignmentBaseline:"hanging",textAnchor:"middle",style:{fontSize:16,fill:"#bdbbbc",fontWeight:"bold"}},"Total Liabilities")),u.a.createElement("g",{className:"leftLegend",transform:"translate(".concat(-i.width/2," , ").concat(c+h,")")},u.a.createElement("circle",{r:"5",cx:"35",cy:"0",fill:"#63ae2d"}),u.a.createElement("text",{x:"50",y:"0",textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Cash"),u.a.createElement("circle",{r:"5",cx:"35",cy:h,fill:"#ef7d00"}),u.a.createElement("text",{x:"50",y:h,textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Fixed"),u.a.createElement("circle",{r:"5",cx:"35",cy:2*h,fill:"#de0730"}),u.a.createElement("text",{x:"50",y:2*h,textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Goodwill")),u.a.createElement("g",{className:"rightLegend",transform:"translate(".concat(.3*i.width," , ").concat(c+h,")")},u.a.createElement("circle",{r:"5",cx:"10",cy:"0",fill:"#63ae2d"}),u.a.createElement("text",{x:"30",y:"0",textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Equity"),u.a.createElement("circle",{r:"5",cx:"10",cy:h,fill:"#de0730"}),u.a.createElement("text",{x:"30",y:h,textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Debt")),u.a.createElement("g",{className:"chartBoard",transform:"translate(0 , ".concat(i.height-s-h,")")},u.a.createElement(g,{transX:-r/4,svgDimen:i,bar_height:i.height-s-c-h,data:o}),u.a.createElement(g,{transX:r/4,svgDimen:i,bar_height:i.height-s-c-h,data:d})),u.a.createElement("image",{href:"/static/balance.png",width:r,height:s,x:-r/2,y:i.height-s-h}),u.a.createElement("g",{className:"bottomLegend",transform:"translate(0 , ".concat(i.height-h,")")},u.a.createElement("text",{alignmentBaseline:"hanging",textAnchor:"middle",style:{fontSize:16,fill:"#bdbbbc",fontWeight:"bold"}},"€ 12,2 mld"))))}}]),t}(o.Component),g=function(e){function t(e){var a;Object(i.default)(this,t);var n=(a=Object(s.default)(this,Object(c.default)(t).call(this,e))).props,l=n.transX,r=n.bar_height,h=n.svgDimen,o=n.data;return a.state={transX:l,bar_height:r,svgDimen:h,data:o},a}return Object(h.default)(t,e),Object(r.default)(t,[{key:"componentDidMount",value:function(){this.drawBar()}},{key:"componentWillReceiveProps",value:function(e){var t=e.transX,a=e.svgDimen,n=e.bar_height,l=e.data;this.setState({transX:t,bar_height:n,svgDimen:a,data:l})}},{key:"componentDidUpdate",value:function(){this.drawBar()}},{key:"drawBar",value:function(){var e=this.state,t=e.svgDimen,a=e.bar_height,n=e.data,l=.25*t.width,i=a/100,r=100/(n[3]+n[4]);console.log(n);var s=v.v(this.el),c=["#63ae2d","#ef7d00","#de0730"];s.selectAll("*").remove();for(var h=0,o=0;o<n.length;o++)h+=n[o].value*i;for(var u=function(e){s.append("rect").attr("x",-l/2).attr("y",function(){for(var t=0,a=0;a<e;a++)t+=n[a].value*i;return-(h-t)}).attr("width",l).attr("height",n[e].value*i*r).style("fill",c[e]),s.append("text").attr("x",0).attr("y",function(){for(var t=0,a=0;a<e;a++)t+=n[a].value*i;return-(h-t-n[e].value*i/2)}).attr("alignment-baseline","central").style("fill","white").style("opacity",function(){return 0===n[e].value?0:1}).style("text-anchor","middle").style("font-size",16).text(n[e].value+"%")},d=0;d<n.length;d++)u(d)}},{key:"render",value:function(){var e=this,t=this.state,a=t.transX,n=.017*t.svgDimen.width;return u.a.createElement("g",{className:"Bar",transform:"translate(".concat(a," , ").concat(n,")"),ref:function(t){return e.el=t}})}}]),t}(o.Component),y=function(e){function t(e){var a;Object(i.default)(this,t);var n=(a=Object(s.default)(this,Object(c.default)(t).call(this,e))).props,l=n.margins,r=n.years,h=n.svgDimen,o=n.initialValue,u=n.xScale;return a.state={svgDimen:h,years:r,margins:l,initialValue:o,xScale:u},a}return Object(h.default)(t,e),Object(r.default)(t,[{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"componentWillReceiveProps",value:function(e){var t=e.initialValue,a=e.years,n=e.margins,l=e.svgDimen,i=e.xScale;console.log(this.state,"receive"),this.setState({initialValue:t,years:a,margins:n,svgDimen:l,xScale:i})}},{key:"render",value:function(){var e=this.state,t=e.initialValue,a=e.xScale,n=this.props.handle,l=u.a.createElement("circle",{r:"10px",fill:"#de0730"}),i=u.a.createElement("text",{style:{opacity:1,fontSize:14,fill:"#de0730"}});return u.a.createElement("g",{className:n,transform:"translate(".concat(a(t),", 20)"),onMouseOver:this.onMouseOver.bind(this)},i,l)}},{key:"componentDidUpdate",value:function(e){var t,a,n=this.state,l=n.margins,i=n.svgDimen,r=n.xScale,s=n.initialValue,c=this.props,h=c.onChangeYear,o=c.handle;if(e.svgDimen.width!=this.state.svgDimen.width||e.years!=this.state.years)v.v("."+o).attr("transform","translate("+r(s)+", 20)"),v.v("."+o).select("text").attr("alignment-baseline","middle").attr("dy",-15).style("text-anchor","middle").text(s);else{var u=function(e){return Math.round(r.invert(e))},d=v.i().on("start",function(){t=v.o(this)[0],a=u(t),v.v("."+o).attr("transform","translate("+t+", 20)"),v.v("."+o).select("text").attr("alignment-baseline","middle").attr("dy",-15).style("text-anchor","middle").text(a)}).on("drag",function(){t=v.o(this)[0],a=u(t),t>l.left&&t<i.width-l.right&&(v.v("."+o).attr("transform","translate("+t+", 20)"),v.v("."+o).select("text").attr("alignment-baseline","middle").attr("dy",-15).style("text-anchor","middle").text(a))}).on("end",function(){v.v("."+o).attr("transform","translate("+r(a)+", 20)"),h(a)});v.v(".rangeSliderGroup").call(d)}}}]),t}(o.Component),p=function(e){function t(e){var a;Object(i.default)(this,t);var n=(a=Object(s.default)(this,Object(c.default)(t).call(this,e))).props,l=n.years,r=n.xScale;return a.state={years:l,xScale:r},a}return Object(h.default)(t,e),Object(r.default)(t,[{key:"componentDidMount",value:function(){this.renderAxis()}},{key:"componentDidUpdate",value:function(){this.renderAxis()}},{key:"componentWillReceiveProps",value:function(e){var t=e.years,a=e.xScale;this.setState({years:t,xScale:a})}},{key:"renderAxis",value:function(){var e=this.state,t=e.years,a=e.xScale,n=t[0],l=t[t.length-1];v.v(this.axisElement).call(v.c().scale(a).ticks(t.length).tickFormat(v.j(""))).selectAll("text").style("opacity",function(e){return e===n||e===l?1:0}).style("font-size","14px").style("fill","black"),v.v(this.axisElement).selectAll("line").attr("stroke","white"),v.v(this.axisElement).select("path").style("d","none")}},{key:"render",value:function(){var e=this;return u.a.createElement("g",{className:"sliderAxis",transform:"translate(0,30)",ref:function(t){return e.axisElement=t}})}}]),t}(u.a.Component),x=function(e){function t(e){var a;return Object(i.default)(this,t),(a=Object(s.default)(this,Object(c.default)(t).call(this,e))).state={width:a.props.width,height:a.props.height,years:a.props.years},a}return Object(h.default)(t,e),Object(r.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.width,a=e.height,n=e.years;this.setState({width:t,height:a,years:n})}},{key:"render",value:function(){var e=this.state,t=e.width,a=e.height,n=e.years,l=this.props.onChangeYear,i={top:20,right:50,bottom:20,left:50},r={width:t-i.left-i.right,height:a},s=u.a.createElement("rect",{rx:"5",ry:"5",y:"15",width:r.width-i.left-i.right,transform:"translate(".concat(i.left,", 0)"),height:"10",fill:"grey"}),c=n[0],h=n[n.length-1],o=v.r().domain([c,h]).range([i.left,r.width-i.right]).clamp(!0);return console.log("parent calls?"),u.a.createElement("svg",{className:"rangeSliderSvg",width:r.width,height:r.height,transform:"translate(".concat(i.left,", 0)")},u.a.createElement("g",{className:"rangeSliderGroup",transform:"translate(0, ".concat(r.height-i.bottom-40,")")},s,u.a.createElement(p,{years:n,xScale:o}),u.a.createElement(y,{onChangeYear:l,handle:"handle",initialValue:c,years:n,margins:i,svgDimen:r,xScale:o})))}}]),t}(o.Component),w=function(e){function t(e){var a;Object(i.default)(this,t),a=Object(s.default)(this,Object(c.default)(t).call(this,e)),Object(m.a)(Object(f.default)(Object(f.default)(a)),"handleChangeYear",function(e){for(var t=a.state.data,n=0;n<t.length;n++)if(t[n].year===e){a.setState({balanceChartData:t[n].values});break}});var n=a.props,l=n.data,r=n.width,h=n.height,o=l.map(function(e){return e.year});return a.state={data:l,sliderData:o,balanceChartData:l[0].values,width:r,height:h},a}return Object(h.default)(t,e),Object(r.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.data,a=e.width,n=e.height,l=t.map(function(e){return e.year});this.setState({sliderData:l,balanceChartData:t[0].values,data:t,width:a,height:n})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return u.a.createElement("div",{className:"timeslidercharts"},u.a.createElement("div",{className:"rangeSlider"},u.a.createElement(x,{onChangeYear:this.handleChangeYear,width:this.state.width,height:this.state.height/6,years:this.state.sliderData})),u.a.createElement("div",{className:"balanceChart"},u.a.createElement(b,{width:this.state.width,height:5*this.state.height/6,data:this.state.balanceChartData})))}}]),t}(o.Component),E=[{year:2014,values:[{label:"Cash",value:20.757},{label:"Fixed",value:552.859},{label:"Goodwill",value:120.837},{label:"Equity",value:454.65},{label:"Debt",value:667.775},{label:"Total",value:1122.425}]},{year:2015,values:[{label:"Cash",value:21.551},{label:"Fixed",value:586.8},{label:"Goodwill",value:240.78},{label:"Equity",value:510.658},{label:"Debt",value:701.706},{label:"Total",value:1212.364}]},{year:2016,values:[{label:"Cash",value:33.922},{label:"Fixed",value:687.503},{label:"Goodwill",value:240.78},{label:"Equity",value:579.92},{label:"Debt",value:955.927},{label:"Total",value:1535.847}]},{year:2017,values:[{label:"Cash",value:39.756},{label:"Fixed",value:690.058},{label:"Goodwill",value:147.593},{label:"Equity",value:511.78},{label:"Debt",value:966.604},{label:"Total",value:1478.384}]},{year:2018,values:[{label:"Cash",value:34.684},{label:"Fixed",value:704.786},{label:"Goodwill",value:145.044},{label:"Equity",value:555.726},{label:"Debt",value:972.358},{label:"Total",value:1528.084}]}],O=function(e){function t(e){var a;Object(i.default)(this,t);var n=(a=Object(s.default)(this,Object(c.default)(t).call(this,e))).props,l=n.parentWidth,r=n.parentHeight;return a.state={data:E,width:l>650?650:Math.max(l,480),height:Math.max(r,400)},a}return Object(h.default)(t,e),Object(r.default)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.parentWidth;e.parentHeight;this.setState({data:E,width:t>650?650:Math.max(t,480),height:Math.max(e.parentHeight,400)})}},{key:"render",value:function(){return u.a.createElement(o.Fragment,null,u.a.createElement(w,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),t}(o.Component),j=(n=O,function(e){function t(e){var a;return Object(i.default)(this,t),(a=Object(s.default)(this,Object(c.default)(t).call(this,e))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(f.default)(Object(f.default)(a))),a}return Object(h.default)(t,e),Object(r.default)(t,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var e=this.state.containerWidth,t=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;e!==t&&this.setState(function(){return{containerWidth:t,containerHeight:a}})}},{key:"renderChart",value:function(){var e=this.state.containerWidth,t=this.state.containerHeight;return u.a.createElement(n,Object(l.a)({},this.props,{parentWidth:e,parentHeight:t}))}},{key:"render",value:function(){var e=this,t=null!==this.state.containerWidth;return u.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(t){e.chartContainer=t},className:"Responsive-wrapper"},t&&this.renderChart())}}]),t}(o.Component)),C=function(e){function t(){return Object(i.default)(this,t),Object(s.default)(this,Object(c.default)(t).apply(this,arguments))}return Object(h.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.session;e.navMenu;return u.a.createElement(d.a,Object(l.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),u.a.createElement("div",{className:"content"},u.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),u.a.createElement("p",null,"The Coca-Cola Company is an American ...."),u.a.createElement(j,null)))}}]),t}(o.Component);t.default=C}},[["RfrO",1,0]]]);