(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"79+t":function(t,e,a){var n=a("/6KZ"),i=a("bvQF");n(n.G+n.F*(parseInt!=i),{parseInt:i})},"8cf0":function(t,e,a){var n=a("/6KZ"),i=a("Xj5l"),r=a("/Vl9"),l=a("M5cM"),s="["+l+"]",c=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),h=function(t,e,a){var i={},s=r(function(){return!!l[t]()||"​"!="​"[t]()}),c=i[t]=s?e(d):l[t];a&&(i[a]=c),n(n.P+n.F*s,"String",i)},d=h.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(o,"")),t};t.exports=h},FdmI:function(t,e,a){t.exports=a("n7m4")},M5cM:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},RfrO:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/balance",function(){var t=a("tRqh");return{page:t.default||t}}])},azxR:function(t,e,a){"use strict";a.d(e,"a",function(){return r});var n=a("hHgk"),i=a.n(n);function r(t,e,a){return e in t?i()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},bvQF:function(t,e,a){var n=a("41F1").parseInt,i=a("8cf0").trim,r=a("M5cM"),l=/^[-+]?0[xX]/;t.exports=8!==n(r+"08")||22!==n(r+"0x16")?function(t,e){var a=i(String(t),3);return n(a,e>>>0||(l.test(a)?16:10))}:n},n7m4:function(t,e,a){a("79+t"),t.exports=a("TaGV").parseInt},tRqh:function(t,e,a){"use strict";a.r(e);var n,i=a("UrUy"),r=a.n(i),l=a("JYC+"),s=a.n(l),c=a("R3/3"),o=a("z3IF"),h=a("LkAs"),d=a("Moms"),u=a("bMj6"),f=a("hZod"),m=a("tEuJ"),g=a("mXGw"),p=a.n(g),v=a("CXsl"),b=a("YKN3"),y=a("FdmI"),x=a.n(y),w=a("azxR"),E=a("t1Qi"),O=function(t){function e(t){var a;Object(h.default)(this,e);var n=(a=Object(u.default)(this,Object(f.default)(e).call(this,t))).props,i=n.data,r=n.width,l=n.height;return a.state={data:i,width:r,height:l},a}return Object(m.default)(e,t),Object(d.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.width,a=t.height,n=t.data;this.setState({width:e,height:a,data:n})}},{key:"render",value:function(){var t=this.state,e=t.width,a=t.height,n=t.data,i=20,r={width:e-i-20,height:a-20-20},l=.6*r.width,s=l/514*64,c=.03*r.width,o=.03*r.width,h=[n.TotalCash,n.NonCurrentAssetsNoGoodwill,n.CurrentAssetsNoCash,n.Goodwill],d=[n.TotalEquity,0,0,n.TotalLiabilities];return p.a.createElement("svg",{width:r.width,height:r.height,transform:"translate(".concat(i,", 0)")},p.a.createElement("g",{className:"chartBase",transform:"translate(".concat(r.width/2," , 0)")},p.a.createElement("g",{className:"topLegend"},p.a.createElement("text",{x:-l/4,y:0,alignmentBaseline:"hanging",textAnchor:"middle",style:{fontSize:16,fill:"#bdbbbc",fontWeight:"bold"}},"Assets"),p.a.createElement("text",{x:l/4,y:0,alignmentBaseline:"hanging",textAnchor:"middle",style:{fontSize:16,fill:"#bdbbbc",fontWeight:"bold"}},"Total Liabilities")),p.a.createElement("g",{className:"leftLegend",transform:"translate(".concat(-r.width/2," , ").concat(c+o,")")},p.a.createElement("circle",{r:"5",cx:"35",cy:"0",fill:"#63ae2d"}),p.a.createElement("text",{x:"50",y:"0",textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Cash"),p.a.createElement("circle",{r:"5",cx:"35",cy:o,fill:"#a6ae2d"}),p.a.createElement("text",{x:"50",y:o,textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Fixed"),p.a.createElement("circle",{r:"5",cx:"35",cy:2*o,fill:"#ef7d00"}),p.a.createElement("text",{x:"50",y:2*o,textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Current"),p.a.createElement("circle",{r:"5",cx:"35",cy:3*o,fill:"#de0730"}),p.a.createElement("text",{x:"50",y:3*o,textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Goodwill")),p.a.createElement("g",{className:"rightLegend",transform:"translate(".concat(.3*r.width," , ").concat(c+o,")")},p.a.createElement("circle",{r:"5",cx:"10",cy:"0",fill:"#63ae2d"}),p.a.createElement("text",{x:"30",y:"0",textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Equity"),p.a.createElement("circle",{r:"5",cx:"10",cy:o,fill:"#de0730"}),p.a.createElement("text",{x:"30",y:o,textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Debt")),p.a.createElement("g",{className:"chartBoard",transform:"translate(0 , ".concat(r.height-s-o,")")},p.a.createElement(j,{transX:-l/4,svgDimen:r,bar_height:r.height-s-c-o,data:h}),p.a.createElement(j,{transX:l/4,svgDimen:r,bar_height:r.height-s-c-o,data:d})),p.a.createElement("image",{href:"/static/balance.png",width:l,height:s,x:-l/2,y:r.height-s-o}),p.a.createElement("g",{className:"bottomLegend",transform:"translate(0 , ".concat(r.height-o,")")},p.a.createElement("text",{alignmentBaseline:"hanging",textAnchor:"middle",style:{fontSize:16,fill:"#bdbbbc",fontWeight:"bold"}},"€ ",n.TotalLiabilitiesStockholdersEquity/100," mld"))))}}]),e}(g.Component),j=function(t){function e(t){var a;Object(h.default)(this,e);var n=(a=Object(u.default)(this,Object(f.default)(e).call(this,t))).props,i=n.transX,r=n.bar_height,l=n.svgDimen,s=n.data;return a.state={transX:i,bar_height:r,svgDimen:l,data:s},a}return Object(m.default)(e,t),Object(d.default)(e,[{key:"componentDidMount",value:function(){this.drawBar()}},{key:"componentWillReceiveProps",value:function(t){var e=t.transX,a=t.svgDimen,n=t.bar_height,i=t.data;this.setState({transX:e,bar_height:n,svgDimen:a,data:i})}},{key:"componentDidUpdate",value:function(){this.drawBar()}},{key:"drawBar",value:function(){var t=this.state,e=t.svgDimen,a=t.bar_height,n=t.data,i=.25*e.width,r=a/100,l=0,s=E.v(this.el),c=["#63ae2d","#a6ae2d","#ef7d00","#de0730"];s.selectAll("*").remove();for(var o=0,h=0;h<n.length;h++)l+=n[h];l=100/l;for(var d=0;d<n.length;d++)n[d]=n[d]*l,o+=n[d]*r;for(var u=function(t){s.append("rect").attr("x",-i/2).attr("y",function(){for(var e=0,a=0;a<t;a++)e+=n[a]*r;return-(o-e)}).attr("width",i).attr("height",n[t]*r).style("fill",c[t]),s.append("text").attr("x",0).attr("y",function(){for(var e=0,a=0;a<t;a++)e+=n[a]*r;return-(o-e-n[t]*r/2)}).attr("alignment-baseline","central").style("fill","white").style("opacity",function(){return 0==n[t]?0:1}).style("text-anchor","middle").style("font-size",16).text(n[t].toFixed(2)+"%")},f=0;f<n.length;f++)u(f)}},{key:"render",value:function(){var t=this,e=this.state,a=e.transX,n=.017*e.svgDimen.width;return p.a.createElement("g",{className:"Bar",transform:"translate(".concat(a," , ").concat(n,")"),ref:function(e){return t.el=e}})}}]),e}(g.Component),C=function(t){function e(t){var a;Object(h.default)(this,e);var n=(a=Object(u.default)(this,Object(f.default)(e).call(this,t))).props,i=n.margins,r=n.years,l=n.svgDimen,s=n.initialValue,c=n.xScale;return a.state={svgDimen:l,years:r,margins:i,initialValue:s,xScale:c},a}return Object(m.default)(e,t),Object(d.default)(e,[{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"componentWillReceiveProps",value:function(t){var e=t.initialValue,a=t.years,n=t.margins,i=t.svgDimen,r=t.xScale;this.setState({initialValue:e,years:a,margins:n,svgDimen:i,xScale:r})}},{key:"render",value:function(){var t=this.state,e=t.initialValue,a=t.xScale,n=this.props.handle,i=p.a.createElement("circle",{r:"10px",fill:"#de0730"}),r=p.a.createElement("text",{style:{opacity:1,fontSize:14,fill:"#de0730"}});return p.a.createElement("g",{className:n,transform:"translate(".concat(a(e),", 20)"),onMouseOver:this.onMouseOver.bind(this)},r,i)}},{key:"componentDidUpdate",value:function(t){var e,a,n=this.state,i=n.margins,r=n.svgDimen,l=n.xScale,s=n.initialValue,c=this.props,o=c.onChangeYear,h=c.handle;if(t.svgDimen.width!=this.state.svgDimen.width||t.years!=this.state.years)E.v("."+h).attr("transform","translate("+l(s)+", 20)"),E.v("."+h).select("text").attr("alignment-baseline","middle").attr("dy",-15).style("text-anchor","middle").text(s);else{var d=function(t){return Math.round(l.invert(t))},u=E.i().on("start",function(){e=E.o(this)[0],a=d(e),E.v("."+h).attr("transform","translate("+e+", 20)"),E.v("."+h).select("text").attr("alignment-baseline","middle").attr("dy",-15).style("text-anchor","middle").text(a)}).on("drag",function(){e=E.o(this)[0],a=d(e),e>i.left&&e<r.width-i.right&&(E.v("."+h).attr("transform","translate("+e+", 20)"),E.v("."+h).select("text").attr("alignment-baseline","middle").attr("dy",-15).style("text-anchor","middle").text(a))}).on("end",function(){E.v("."+h).attr("transform","translate("+l(a)+", 20)"),o(a)});E.v(".rangeSliderGroup").call(u)}}}]),e}(g.Component),S=function(t){function e(t){var a;Object(h.default)(this,e);var n=(a=Object(u.default)(this,Object(f.default)(e).call(this,t))).props,i=n.years,r=n.xScale;return a.state={years:i,xScale:r},a}return Object(m.default)(e,t),Object(d.default)(e,[{key:"componentDidMount",value:function(){this.renderAxis()}},{key:"componentDidUpdate",value:function(){this.renderAxis()}},{key:"componentWillReceiveProps",value:function(t){var e=t.years,a=t.xScale;this.setState({years:e,xScale:a})}},{key:"renderAxis",value:function(){var t=this.state,e=t.years,a=t.xScale,n=e[0],i=e[e.length-1];E.v(this.axisElement).call(E.d().scale(a).ticks(e.length).tickFormat(E.j(""))).selectAll("text").style("opacity",function(t){return t==n||t==i?1:0}).style("font-size","14px").style("fill","black"),E.v(this.axisElement).selectAll("line").attr("stroke","white"),E.v(this.axisElement).select("path").style("d","none")}},{key:"render",value:function(){var t=this;return p.a.createElement("g",{className:"sliderAxis",transform:"translate(0,30)",ref:function(e){return t.axisElement=e}})}}]),e}(p.a.Component),k=function(t){function e(t){var a;return Object(h.default)(this,e),(a=Object(u.default)(this,Object(f.default)(e).call(this,t))).state={width:a.props.width,height:a.props.height,years:a.props.years},a}return Object(m.default)(e,t),Object(d.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.width,a=t.height,n=t.years;this.setState({width:e,height:a,years:n})}},{key:"render",value:function(){var t=this.state,e=t.width,a=t.height,n=t.years,i=this.props.onChangeYear,r={top:20,right:50,bottom:20,left:50},l={width:e-r.left-r.right,height:a},s=p.a.createElement("rect",{rx:"5",ry:"5",y:"15",width:l.width-r.left-r.right,transform:"translate(".concat(r.left,", 0)"),height:"10",fill:"grey"}),c=n[0],o=n[n.length-1],h=E.r().domain([c,o]).range([r.left,l.width-r.right]).clamp(!0);return p.a.createElement("svg",{className:"rangeSliderSvg",width:l.width,height:l.height,transform:"translate(".concat(r.left,", 0)")},p.a.createElement("g",{className:"rangeSliderGroup",transform:"translate(0, ".concat(l.height-r.bottom-40,")")},s,p.a.createElement(S,{years:n,xScale:h}),p.a.createElement(C,{onChangeYear:i,handle:"handle",initialValue:c,years:n,margins:r,svgDimen:l,xScale:h})))}}]),e}(g.Component),D=function(t){function e(t){var a;Object(h.default)(this,e),a=Object(u.default)(this,Object(f.default)(e).call(this,t)),Object(w.a)(Object(b.default)(Object(b.default)(a)),"handleChangeYear",function(t){for(var e=a.state.data,n=e.map(function(t){return x()(t.Date.split("-")[0])}),i=0;i<e.length;i++)if(n[i]==t){a.setState({balanceChartData:e[i]});break}});var n=a.props,i=n.data,r=n.width,l=n.height,s=i.sort(function(t,e){return E.c(t.Date,e.Date)});return a.state={data:s,sliderData:a.parseYear(s),balanceChartData:s[0],width:r,height:l},a}return Object(m.default)(e,t),Object(d.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.data,a=t.width,n=t.height,i=e.sort(function(t,e){return E.c(t.Date,e.Date)});this.setState({sliderData:this.parseYear(i),balanceChartData:i[0],data:i,width:a,height:n})}},{key:"parseYear",value:function(t){return t.map(function(t){return x()(t.Date.split("-")[0])})}},{key:"render",value:function(){return p.a.createElement("div",{className:"timeslidercharts"},p.a.createElement("div",{className:"rangeSlider"},p.a.createElement(k,{onChangeYear:this.handleChangeYear,width:this.state.width,height:this.state.height/6,years:this.state.sliderData})),p.a.createElement("div",{className:"balanceChart"},p.a.createElement(O,{width:this.state.width,height:5*this.state.height/6,data:this.state.balanceChartData})))}}]),e}(g.Component),A=function(t){function e(t){var a;Object(h.default)(this,e);var n=(a=Object(u.default)(this,Object(f.default)(e).call(this,t))).props,i=n.parentWidth,r=n.parentHeight,l=n.data;return a.state={data:l,width:i>650?650:Math.max(i,480),height:Math.max(r,400)},a}return Object(m.default)(e,t),Object(d.default)(e,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(t){var e=t.parentWidth,a=t.parentHeight,n=t.data;this.setState({data:n,width:e>650?650:Math.max(e,480),height:Math.max(a,400)})}},{key:"render",value:function(){return p.a.createElement(g.Fragment,null,p.a.createElement(D,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),e}(g.Component),N=(n=A,function(t){function e(t){var a;return Object(h.default)(this,e),(a=Object(u.default)(this,Object(f.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(b.default)(Object(b.default)(a))),a}return Object(m.default)(e,t),Object(d.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:a}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return p.a.createElement(n,Object(o.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return p.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(g.Component)),M=function(t){function e(){return Object(h.default)(this,e),Object(u.default)(this,Object(f.default)(e).apply(this,arguments))}return Object(m.default)(e,t),Object(d.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session,a=(t.navMenu,t.data);return p.a.createElement(v.a,Object(o.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),p.a.createElement("div",{className:"content"},p.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),p.a.createElement("p",null,"The Coca-Cola Company is an American ...."),p.a.createElement(N,{data:a[0].last5AnnualTotals})))}}],[{key:"getInitialProps",value:function(){var t=Object(c.default)(r.a.mark(function t(e){var a,n,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.req,n=a?a.headers["user-agent"]:navigator.userAgent,t.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:s()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            last5AnnualTotals {\n              Date\n              TotalLiabilitiesStockholdersEquity\n              TotalEquity\n              TotalLiabilities\n              TotalCash\n              NonCurrentAssetsNoGoodwill\n              CurrentAssetsNoCash\n              Goodwill\n            } \n          }\n        }'})}).then(function(t){return t.json()}).then(function(t){return[t.data.security]});case 4:return i=t.sent,t.abrupt("return",{userAgent:n,data:i});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),e}(g.Component);e.default=M}},[["RfrO",1,0]]]);