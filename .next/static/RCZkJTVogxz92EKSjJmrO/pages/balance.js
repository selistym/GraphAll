(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{F6nN:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/balance",function(){var e=a("tRqh");return{page:e.default||e}}])},tRqh:function(e,t,a){"use strict";a.r(t);var n=a("kOwS"),l=a("0iUn"),i=a("sLSF"),r=a("MI3g"),s=a("a7VT"),c=a("Tit0"),u=a("q1tI"),o=a.n(u),h=a("CXsl"),d=a("VphZ"),m=a("AT/M"),f=a("vYYK"),g=(a("7Hxx"),function(e){function t(e){var a;return Object(l.default)(this,t),(a=Object(r.default)(this,Object(s.default)(t).call(this,e))).state={data:[],width:0,height:0},a}return Object(c.default)(t,e),Object(i.default)(t,[{key:"componentDidMount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.data!==e.data}},{key:"render",value:function(){var e=this.state,t=e.width,a=e.height,n=e.data,l={width:t-20-20,height:5*a/6-20-20},i=.6*l.width,r=i/514*64,s=.08*l.height,c=.1*l.height,u=[n[0],n[1],n[2]],h=[n[3],{label:"empty",value:0},n[4]];return o.a.createElement("svg",{width:l.width,height:l.height},o.a.createElement("g",{className:"chartBase",transform:"translate(".concat(l.width/2," , 0)")},o.a.createElement("g",{className:"topLegend"},o.a.createElement("text",{x:-i/4,y:s,alignmentBaseline:"ideographic",textAnchor:"middle",style:{fontSize:16,fill:"#bdbbbc",fontWeight:"bold"}},"Assets"),o.a.createElement("text",{x:i/4,y:s,alignmentBaseline:"ideographic",textAnchor:"middle",style:{fontSize:16,fill:"#bdbbbc",fontWeight:"bold"}},"Total Liabilities")),o.a.createElement("g",{className:"leftLegend",transform:"translate(".concat(-l.width/2," , ").concat(s+c,")")},o.a.createElement("circle",{r:"5",cx:"5",cy:"0",fill:"#63ae2d"}),o.a.createElement("text",{x:"20",y:"0",textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Cash"),o.a.createElement("circle",{r:"5",cx:"5",cy:c,fill:"#ef7d00"}),o.a.createElement("text",{x:"20",y:c,textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Fixed"),o.a.createElement("circle",{r:"5",cx:"5",cy:2*c,fill:"#de0730"}),o.a.createElement("text",{x:"20",y:2*c,textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Goodwill")),o.a.createElement("g",{className:"rightLegend",transform:"translate(".concat(.3*l.width," , ").concat(s+c,")")},o.a.createElement("circle",{r:"5",cx:"10",cy:"0",fill:"#63ae2d"}),o.a.createElement("text",{x:"30",y:"0",textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Equity"),o.a.createElement("circle",{r:"5",cx:"10",cy:c,fill:"#de0730"}),o.a.createElement("text",{x:"30",y:c,textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Debt")),o.a.createElement("g",{className:"chartBoard",transform:"translate(0 , ".concat(s,")")},o.a.createElement(v,{transX:-i/4,transY:s,svgDimen:l,data:u}),o.a.createElement(v,{transX:i/4,transY:s,svgDimen:l,data:h})),o.a.createElement("image",{src:"../../styles/balance.png",width:i,height:r,x:-i/2,y:l.height-r-c}),o.a.createElement("g",{className:"bottomLegend",transform:"translate(0 , ".concat(l.height,")")},o.a.createElement("text",{alignmentBaseline:"ideographic",textAnchor:"middle",style:{fontSize:16,fill:"#bdbbbc",fontWeight:"bold"}},"€ 12,2 mld"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a={width:e.width,height:e.height,data:e.data};return t!==a?a:null}}]),t}(u.Component)),v=function(e){function t(e){var a;Object(l.default)(this,t);var n=(a=Object(r.default)(this,Object(s.default)(t).call(this,e))).props,i=n.transX,c=n.transY,u=n.svgDimen,o=n.data;return a.state={transX:i,transY:c,svgDimen:u,data:o},a}return Object(c.default)(t,e),Object(i.default)(t,[{key:"componentDidMount",value:function(){this.drawBar()}},{key:"componentWillReceiveProps",value:function(e){var t=e.transX,a=e.transY,n=e.svgDimen,l=e.data;this.setState({transX:t,transY:a,svgDimen:n,data:l},function(){this.drawBar()})}},{key:"drawBar",value:function(){var e=this.state,t=e.svgDimen,a=e.data,n=.25*t.width,l=.63*t.height/100,i=d.u(this.el),r=["#63ae2d","#ef7d00","#de0730"];i.selectAll("*").remove();for(var s=function(e){i.append("rect").attr("x",-n/2).attr("y",function(){for(var t=0,n=0;n<e;n++)t+=a[n].value*l;return t}).attr("width",n).attr("height",a[e].value*l).style("fill",r[e]),i.append("text").attr("x",0).attr("y",function(){for(var t=0,n=0;n<e;n++)t+=a[n].value*l;return a[e].value*l/2+t}).attr("alignment-baseline","middle").style("fill","white").style("opacity",function(){return 0===a[e].value?0:1}).style("text-anchor","middle").style("font-size",16).text(a[e].value+"%")},c=0;c<a.length;c++)s(c)}},{key:"render",value:function(){var e=this,t=this.state,a=t.transX,n=t.transY;return o.a.createElement("g",{className:"Bar",transform:"translate(".concat(a," , ").concat(n,")"),ref:function(t){return e.el=t}})}}]),t}(u.Component),b=function(e){function t(e){var a;return Object(l.default)(this,t),(a=Object(r.default)(this,Object(s.default)(t).call(this,e))).state={svgDimen:null,years:[],margins:null,onChangeYear:null,initialValue:0,handle:""},a}return Object(c.default)(t,e),Object(i.default)(t,[{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var e=this.state,t=e.margins,a=e.years,n=e.svgDimen,l=e.handle,i=e.initialValue,r=a[0],s=a[a.length-1],c=d.q().domain([r,s]).range([t.left,n.width-t.right]).clamp(!0),u=o.a.createElement("circle",{r:"10px",fill:"#de0730"}),h=o.a.createElement("text",{style:{opacity:1,fontSize:14,fill:"#de0730"}});return o.a.createElement("g",{className:l,transform:"translate(".concat(c(i),",20)"),onMouseOver:this.onMouseOver.bind(this)},h,u)}},{key:"componentDidUpdate",value:function(){var e,t,a=this.state,n=a.margins,l=a.years,i=a.svgDimen,r=a.onChangeYear,s=a.handle,c=l[0],u=l[l.length-1],o=d.q().domain([c,u]).range([n.left,i.width-n.right]).clamp(!0),h=d.i().on("start",function(){e=d.n(this)[0],t=m(e),d.u("."+s).attr("transform","translate("+e+", 20)"),d.u("."+s).select("text").attr("alignment-baseline","middle").attr("dy",-15).style("text-anchor","middle").text(t)}).on("drag",function(){e=d.n(this)[0],t=m(e),e>n.left&&e<i.width-n.right&&(d.u("."+s).attr("transform","translate("+e+", 20)"),d.u("."+s).select("text").attr("alignment-baseline","middle").attr("dy",-15).style("text-anchor","middle").text(t))}).on("end",function(){d.u("."+s).attr("transform","translate("+o(t)+", 20)"),r(t)});function m(e){return Math.round(o.invert(e))}d.u(".rangeSliderGroup").call(h)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.margins,n=e.svgDimen,l=e.years,i=e.handle,r=e.initialValue,s={years:l,margins:a,svgDimen:n,onChangeYear:e.onChangeYear,initialValue:r,handle:i};return t!==s?s:null}}]),t}(u.Component),y=function(e){function t(e){var a;return Object(l.default)(this,t),(a=Object(r.default)(this,Object(s.default)(t).call(this,e))).state={margins:null,svgDimen:null,years:[]},a}return Object(c.default)(t,e),Object(i.default)(t,[{key:"componentDidMount",value:function(){this.renderAxis()}},{key:"componentDidUpdate",value:function(){this.renderAxis()}},{key:"renderAxis",value:function(){var e=this.state,t=e.svgDimen,a=e.margins,n=e.years,l=n[0],i=n[n.length-1],r=d.q().domain([l,i]).range([a.left,t.width-a.right]).clamp(!0);d.u(this.axisElement).call(d.c().scale(r).ticks(n.length).tickFormat(d.j(""))).selectAll("text").style("opacity",function(e){return e===l||e===i?1:0}).style("font-size","14px").style("fill","black"),d.u(this.axisElement).selectAll("line").attr("stroke","white"),d.u(this.axisElement).select("path").style("d","none")}},{key:"render",value:function(){var e=this;return o.a.createElement("g",{className:"sliderAxis",transform:"translate(0,30)",ref:function(t){return e.axisElement=t}})}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.margins,n=e.svgDimen,l={years:e.years,margins:a,svgDimen:n};return t!==l?l:null}}]),t}(o.a.Component),p=function(e){function t(e){var a;return Object(l.default)(this,t),(a=Object(r.default)(this,Object(s.default)(t).call(this,e))).state={width:0,height:0,years:[]},a}return Object(c.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=this.state,t=e.width,a=e.height,n=e.years,l=e.onChangeYear,i={top:20,right:50,bottom:20,left:50},r={width:t-i.left-i.right,height:a/6},s=o.a.createElement("line",{x1:i.left,y1:"20",x2:r.width-i.right,y2:"20",className:"rangeBar"}),c=n[0];return o.a.createElement("svg",{className:"rangeSliderSvg",width:r.width,height:r.height},o.a.createElement("g",{className:"rangeSliderGroup",transform:"translate(0,".concat(r.height-i.bottom-40,")")},s,o.a.createElement(y,{margins:i,svgDimen:r,years:n}),o.a.createElement(b,{onChangeYear:l,handle:"handle",initialValue:c,years:n,margins:i,svgDimen:r})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a={years:e.years,width:e.width,height:e.height,onChangeYear:e.onChangeYear};return t!==a?a:null}}]),t}(u.Component),w=function(e){function t(e){var a;Object(l.default)(this,t),a=Object(r.default)(this,Object(s.default)(t).call(this,e)),Object(f.a)(Object(m.default)(a),"handleChangeYear",function(e){for(var t=a.state.data,n=0;n<t.length;n++)if(t[n].year===e){a.setState({balanceChartData:t[n].values});break}});var n=a.props,i=n.data,c=n.width,u=n.height,o=i.map(function(e){return e.year});return a.state={data:i,sliderData:o,balanceChartData:i[0].values,width:c,height:u},a}return Object(c.default)(t,e),Object(i.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.data,a=e.width,n=e.height,l=t.map(function(e){return e.year});this.setState({sliderData:l,balanceChartData:t[0].values,data:t,width:a,height:n})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"timeslidercharts",style:{width:this.props.width,margin:"0 auto"}},o.a.createElement("div",{className:"rangeSlider"},o.a.createElement(p,{onChangeYear:this.handleChangeYear,width:this.state.width,height:this.state.height,years:this.state.sliderData})),o.a.createElement("div",{className:"balanceChart"},o.a.createElement(g,{width:this.state.width,height:this.state.height,data:this.state.balanceChartData})))}}]),t}(u.Component),x=[{year:2014,values:[{label:"Cash",value:10},{label:"Fixed",value:50},{label:"Goodwill",value:40},{label:"Equity",value:50},{label:"Debt",value:50}]},{year:2015,values:[{label:"Cash",value:20},{label:"Fixed",value:30},{label:"Goodwill",value:50},{label:"Equity",value:40},{label:"Debt",value:60}]},{year:2016,values:[{label:"Cash",value:30},{label:"Fixed",value:40},{label:"Goodwill",value:30},{label:"Equity",value:30},{label:"Debt",value:70}]},{year:2017,values:[{label:"Cash",value:30},{label:"Fixed",value:60},{label:"Goodwill",value:10},{label:"Equity",value:70},{label:"Debt",value:30}]},{year:2018,values:[{label:"Cash",value:60},{label:"Fixed",value:10},{label:"Goodwill",value:30},{label:"Equity",value:60},{label:"Debt",value:40}]},{year:2019,values:[{label:"Cash",value:50},{label:"Fixed",value:20},{label:"Goodwill",value:30},{label:"Equity",value:80},{label:"Debt",value:20}]}],E=function(e){function t(e){var a;return Object(l.default)(this,t),(a=Object(r.default)(this,Object(s.default)(t).call(this,e))).state={data:x,width:600,height:400},a}return Object(c.default)(t,e),Object(i.default)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({data:e.data,width:e.width,height:e.height})}},{key:"render",value:function(){return o.a.createElement(u.Fragment,null,o.a.createElement(w,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),t}(u.Component),O=function(e){function t(){return Object(l.default)(this,t),Object(r.default)(this,Object(s.default)(t).apply(this,arguments))}return Object(c.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.session;e.navMenu;return o.a.createElement(h.a,Object(n.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),o.a.createElement("p",null,"The Coca-Cola Company is an American ...."),o.a.createElement(E,null)))}}]),t}(u.Component);t.default=O},vYYK:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a("hfKm"),l=a.n(n);function i(e,t,a){return t in e?l()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}}},[["F6nN",1,0,8]]]);