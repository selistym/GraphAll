(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3L/t":function(t,e,a){"use strict";a.r(e);var n,r=a("UrUy"),i=a.n(r),l=a("JYC+"),s=a.n(l),c=a("R3/3"),o=a("z3IF"),u=a("LkAs"),h=a("Moms"),d=a("bMj6"),f=a("hZod"),g=a("tEuJ"),m=a("mXGw"),p=a.n(m),v=a("CXsl"),y=a("t1Qi"),b=a("YKN3"),w=a("azxR"),x=function(t){function e(t){var a;return Object(u.default)(this,e),(a=Object(d.default)(this,Object(f.default)(e).call(this,t))).state={margins:a.props.margins,svgDimen:a.props.svgDimen,partial:a.props.partial},a}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({svgDimen:t.svgDimen,margins:t.margins,partial:t.partial})}},{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(){this.drawGraph()}},{key:"drawGraph",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.partial,r=y.z("%Y-%m-%d"),i=n.columns.slice(2).map(function(t){return{id:t,values:n.map(function(e){return{date:e.Date,value:e[t]}})}}),l=i[0].values.map(function(t){return t.date=r(t.date),t.value=+t.value,t}),s=y.o(l,function(t){return t.value}),c=y.v().range([a.left,e.width-a.right]).domain(y.k(l,function(t){return t.date})).clamp(!0),o=y.t().range([e.height-a.bottom,a.top]).domain([0,s]),u=y.b().curve(y.h).x(function(t){return c(t.date)}).y0(o(0)).y1(function(t){return o(t.value)}),h=y.x(this.el);h.selectAll("*").remove(),h.append("g").attr("transform","translate(0,"+(e.height-a.bottom)+")").call(y.d(c).ticks(10).tickSize(3).tickFormat(y.y("%Y-%m-%d"))).selectAll("text").style("font-size","10px").style("fill","black"),h.append("g").call(y.e(o).tickSize(0)).select(".domain").style("opacity",0),h.selectAll(".area").data(i).enter().append("path").attr("d",function(t){return u(t.values)}).style("fill","#df072c");var d=h.append("g"),f=y.g(function(t){return t.date}).left;function g(t,e){if(!e)return t.style("display","none");t.style("display",null).style("pointer-events","none").style("font","10px sans-serif"),t.selectAll("circle").data([null]).join("circle").attr("r",7).style("fill","grey").style("stroke","white").style("stroke-width",3);var a=t.selectAll("path").data([null]).join("path").attr("fill","grey"),n=t.selectAll("text").data([null]).join("text").call(function(t){return t.selectAll("tspan").data((e+"").split(/\n/)).join("tspan").attr("x",0).style("font-weight","bold").style("font-size",14).style("fill","white").text(function(t){return"€ "+t})}),r=n.node().getBBox(),i=(r.x,r.y),l=r.width,s=r.height;n.attr("transform","translate(".concat(-l/2,",").concat(15-i,")")),a.attr("d","M".concat(-l/2-10,",5H-5l5,-5l5,5H").concat(l/2+10,"v").concat(s+10,"h-").concat(l+20,"z")).attr("transform","translate(0,5)")}h.append("rect").attr("transform","translate("+a.left+","+a.top+")").attr("class","overlay").attr("width",e.width-a.right).attr("height",e.height-a.bottom).style("opacity",0).on("mousemove",function(){var t=c.invert(y.q(this)[0]),e=f(l,t,1),a=l[e-1],n=l[e],r=t-a.date>n.date-t?n:a;d.attr("transform","translate(".concat(c(r.date),",").concat(o(r.value),")")).call(g,r.value)}),h.on("mouseleave",function(){return d.call(g,null)})}},{key:"render",value:function(){var t=this,e=this.state.svgDimen;return p.a.createElement("svg",{className:"graphSvg",width:e.width,height:e.height,ref:function(e){return t.el=e}})}}]),e}(m.Component),k=function(t){function e(t){var a;Object(u.default)(this,e);var n=(a=Object(d.default)(this,Object(f.default)(e).call(this,t))).props,r=n.svgDimen,i=n.margins,l=n.rangeStart,s=n.rangeEnd,c=n.xScale,o=n.handle;return a.state={svgDimen:r,margins:i,rangeStart:l,rangeEnd:s,xScale:c,handle:o},a}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.svgDimen,a=t.handle,n=t.margins,r=t.rangeStart,i=t.rangeEnd,l=t.xScale;this.setState({svgDimen:e,margins:n,rangeStart:r,rangeEnd:i,xScale:l,handle:a})}},{key:"onMouseOver",value:function(t){console.log(t.target.parentNode.className),this.setState({handle:t.target.parentNode.className.baseVal})}},{key:"render",value:function(){var t=this,e=this.state,a=e.svgDimen,n=e.margins,r=e.rangeStart,i=e.rangeEnd,l=e.xScale,s=p.a.createElement("rect",{x:l(r),y:"0",width:l(i)-l(r),height:a.height-n.bottom,fill:"rgba(150, 150, 150, 0.65)"}),c=p.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:a.height-n.bottom,transform:"translate(-5, 0)",fill:"#777"});return p.a.createElement("g",{className:"sliderBar",onMouseOver:this.onMouseOver.bind(this)},s,p.a.createElement("g",{className:"handleLeft",ref:function(e){return t.handleLeft=e},transform:"translate(".concat(l(r),", 0)")},c),p.a.createElement("g",{className:"handleRight",ref:function(e){return t.handleRight=e},transform:"translate(".concat(l(i),", 0)")},c))}},{key:"componentDidUpdate",value:function(){var t=this.state,e=(t.xScale,t.handle,this.props.changeHandlerValue,y.j().on("start",function(){console.log("dragstart")}).on("drag",function(){console.log("draggin")}).on("end",function(){console.log("dragend")}));y.x(".sliderBar").call(e)}}]),e}(p.a.Component),E=function(t){function e(t){var a;Object(u.default)(this,e),a=Object(d.default)(this,Object(f.default)(e).call(this,t)),Object(w.a)(Object(b.default)(Object(b.default)(a)),"changeHandlerValue",function(t,e){var n=a.state,r=n.total,i=n.rangeStart,l=n.rangeEnd,s=y.z("%Y-%m-%d"),c=[];if("handleLeft"==t){for(var o=0;o<r.length;o++)s(r[o].Date)>=e&&s(r[o].Date)<=l&&c.push(r[o]);c.columns=r.columns,a.setState({rangeStart:e,partial:c})}else{for(var u=0;u<r.length;u++)s(r[u].Date)<=e&&s(r[u].Date)>=i&&c.push(r[u]);c.columns=r.columns,a.setState({rangeEnd:e,partial:c})}});var n=a.props,r=n.data,i=n.width,l=n.height,s=y.z("%Y-%m-%d"),c=r.sort(function(t,e){return y.c(s(t.Date),s(e.Date))}),o=c.map(function(t){return s(t.Date)});return a.state={total:c,partial:c,width:i,height:l,rangeStart:o[0],rangeEnd:o[o.length-1]},a}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.data,a=t.width,n=t.height,r=y.z("%Y-%m-%d"),i=e.sort(function(t,e){return y.c(r(t.Date),r(e.Date))}),l=i.map(function(t){return r(t.Date)});this.setState({total:i,partial:i,width:a,height:n,rangeStart:l[0],rangeEnd:l[l.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var t=this.state,e=t.width,a=t.height,n=t.total,r=20,i=20,l=20,s=20,c=e-s-i,o=a/6,u=y.z("%Y-%m-%d"),h=n.columns.slice(2).map(function(t){return{id:t,values:n.map(function(e){return{date:u(e.Date),value:e[t]}})}}),d=y.o(h[0].values,function(t){return t.value}),f=h[0].values.map(function(t){return t.date}),g=y.v().range([s,c-i]).domain([f[0],f[f.length-1]]),m=y.t().range([o-l,r]).domain([0,d]),p=y.b().curve(y.h).x(function(t){return g(t.date)}).y0(m(0)).y1(function(t){return m(t.value)}),v=y.x(this.GraphAxisElement);v.selectAll("*").remove(),v.append("g").attr("transform","translate(0,"+(o-l)+")").call(y.d(g).ticks(4).tickSize(3).tickFormat(y.y("%Y-%m-%d"))).selectAll("text").style("font-size","10px").style("fill","black").select(".domain").style("opacity",0),v.append("g").call(y.e(m).tickSize(3)).select(".domain").style("opacity",0),v.selectAll(".area").data(h).enter().append("path").attr("d",function(t){return p(t.values)}).style("fill","#ddd")}},{key:"getTextWidth",value:function(t,e,a){var n=document.createElement("canvas").getContext("2d");return n.font=e+"px "+a,n.measureText(t).width}},{key:"render",value:function(){var t=this,e=this.state,a=e.width,n=e.height,r=e.total,i=e.partial,l=e.rangeStart,s=e.rangeEnd,c={top:20,right:20,bottom:20,left:20},o={width:a-c.left-c.right,height:n/6},u={width:a-c.left-c.right,height:4*n/6},h={width:a-c.left-c.right,height:n},d=y.z("%Y-%m-%d"),f=r.map(function(t){return d(t.Date)}),g=y.v().range([c.left,h.width-c.right]).domain([f[0],f[f.length-1]]).clamp(!0),m=this.getTextWidth("Coca-Cola Company",16,"Arial"),v=this.getTextWidth("Industry",16,"Arial");return p.a.createElement("svg",{className:"areaChartSvg",width:h.width,height:h.height},p.a.createElement("g",{className:"TopPane",transform:"translate(".concat(c.left,", ").concat(n/12,")")},p.a.createElement("rect",{x:"10",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),p.a.createElement("rect",{x:"50",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),p.a.createElement("rect",{x:"90",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),p.a.createElement("rect",{x:"130",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),p.a.createElement("rect",{x:"170",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(222,7,48)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),p.a.createElement("circle",{r:"5",cx:h.width-c.left-v-m-60,cy:"0",fill:"#de0730"}),p.a.createElement("text",{x:h.width-c.left-v-40,y:"0",alignmentBaseline:"central",textAnchor:"end",style:{fontSize:16,fill:"#bdbbbc"}},"Coca-Cola Company"),p.a.createElement("circle",{r:"5",cx:h.width-c.left-v-20,cy:"0",fill:"#bdbbbc"}),p.a.createElement("text",{x:h.width-c.left,y:"0",alignmentBaseline:"central",textAnchor:"end",style:{fontSize:16,fill:"#bdbbbc"}},"Industry")),p.a.createElement("g",{className:"Chart",transform:"translate(0, ".concat(n/6,")")},p.a.createElement(x,{margins:c,svgDimen:u,partial:i})),p.a.createElement("g",{className:"graphSliderGroup",transform:"translate(0, ".concat(5*n/6,")")},p.a.createElement("g",{className:"graphSliderAxis",ref:function(e){return t.GraphAxisElement=e}}),p.a.createElement(k,{className:"handleRange",handle:"handle",changeHandlerValue:this.changeHandlerValue,rangeStart:l,rangeEnd:s,svgDimen:o,margins:c,xScale:g})))}}]),e}(m.Component),j=function(t){function e(t){var a;Object(u.default)(this,e);var n=(a=Object(d.default)(this,Object(f.default)(e).call(this,t))).props,r=n.parentWidth,i=n.parentHeight,l=n.data;return l.columns=a.getColumns(l),a.state={width:Math.max(r,450),height:Math.max(i,400),data:l},a}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.parentWidth,a=t.parentHeight,n=t.data;n.columns=this.getColumns(n),this.setState({width:Math.max(e,450),height:Math.max(a,400),data:n})}},{key:"getColumns",value:function(t){var e=[];for(var a in t[0])e.push(a);return e}},{key:"render",value:function(){return p.a.createElement(m.Fragment,null,this.state.data&&p.a.createElement(E,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),e}(m.Component),C=(n=j,function(t){function e(t){var a;return Object(u.default)(this,e),(a=Object(d.default)(this,Object(f.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(b.default)(Object(b.default)(a))),a}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:a}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return p.a.createElement(n,Object(o.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return p.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(m.Component)),O=function(t){function e(){return Object(u.default)(this,e),Object(d.default)(this,Object(f.default)(e).apply(this,arguments))}return Object(g.default)(e,t),Object(h.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session,a=(t.navMenu,t.data);return p.a.createElement(v.a,Object(o.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),p.a.createElement("div",{className:"content"},p.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),p.a.createElement("p",null,"The Coca-Cola Company is an American ...."),p.a.createElement(C,{data:a[0].historyPrice100})))}}],[{key:"getInitialProps",value:function(){var t=Object(c.default)(i.a.mark(function t(e){var a,n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.req,n=a?a.headers["user-agent"]:navigator.userAgent,t.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:s()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            historyPrice100 {\n              Date\n              Volume\n              Close\n              }\n          }\n        }'})}).then(function(t){return t.json()}).then(function(t){return[t.data.security]});case 4:return r=t.sent,t.abrupt("return",{userAgent:n,data:r});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),e}(m.Component);e.default=O},G9HM:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area",function(){var t=a("3L/t");return{page:t.default||t}}])},azxR:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("hHgk"),r=a.n(n);function i(t,e,a){return e in t?r()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}}},[["G9HM",1,0]]]);