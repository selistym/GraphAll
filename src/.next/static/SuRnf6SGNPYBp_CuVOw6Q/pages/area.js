(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3L/t":function(t,e,a){"use strict";a.r(e);var n,r=a("UrUy"),i=a.n(r),l=a("JYC+"),s=a.n(l),c=a("R3/3"),o=a("z3IF"),h=a("LkAs"),u=a("Moms"),d=a("bMj6"),m=a("hZod"),g=a("tEuJ"),f=a("mXGw"),p=a.n(f),v=a("CXsl"),b=a("t1Qi"),y=a("YKN3"),x=a("azxR"),w=function(t){function e(t){var a;return Object(h.default)(this,e),(a=Object(d.default)(this,Object(m.default)(e).call(this,t))).state={margins:a.props.margins,svgDimen:a.props.svgDimen,partial:a.props.partial},a}return Object(g.default)(e,t),Object(u.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({svgDimen:t.svgDimen,margins:t.margins,partial:t.partial})}},{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(){this.drawGraph()}},{key:"drawGraph",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.partial,r=n.columns.slice(2).map(function(t){return{id:t,values:n.map(function(e){return{date:e.Date,value:e[t]}})}}),i=b.x("%Y-%m-%d"),l=r[0].values.map(function(t){return i(t.date)}),s=b.m(r[0].values,function(t){return t.value}),c=b.t().range([a.left,e.width-a.right]).domain([l[0],l[l.length-1]]).clamp(!0),o=b.r().range([e.height-a.bottom,a.top]).domain([0,s]),h=b.b().curve(b.g).x(function(t){return c(i(t.date))}).y0(o(0)).y1(function(t){return o(t.value)}),u=b.v(this.el);u.selectAll("*").remove();var d=u.append("g");u.on("touchmove mousemove",function(){console.log("touchmove")}),u.on("touchend mouseleave",function(){return d.call(callout,null)}),u.append("g").attr("transform","translate(0,"+(e.height-a.bottom)+")").call(b.d(c).ticks(10).tickSize(3).tickFormat(b.w("%Y-%m-%d"))).selectAll("text").style("font-size","10px").style("fill","black"),u.append("g").call(b.e(o).tickSize(0)).select(".domain").style("opacity",0),u.selectAll(".area").data(r).enter().append("path").attr("d",function(t){return h(t.values)}).style("fill","#df072c")}},{key:"render",value:function(){var t=this,e=this.state.svgDimen;return p.a.createElement("svg",{className:"graphSvg",width:e.width,height:e.height},p.a.createElement("g",{className:"graphPane",ref:function(e){return t.el=e}}))}}]),e}(f.Component),E=function(t){function e(t){var a;Object(h.default)(this,e);var n=(a=Object(d.default)(this,Object(m.default)(e).call(this,t))).props,r=n.handle,i=n.svgDimen,l=n.margins,s=n.rangeStart,c=n.rangeEnd,o=n.xScale;return a.state={handle:r,svgDimen:i,margins:l,rangeStart:s,rangeEnd:c,xScale:o},a}return Object(g.default)(e,t),Object(u.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.handle,a=t.svgDimen,n=t.margins,r=t.rangeStart,i=t.rangeEnd,l=t.xScale;this.setState({handle:e,svgDimen:a,margins:n,rangeStart:r,rangeEnd:i,xScale:l})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.rangeStart,r=t.rangeEnd,i=t.xScale,l=t.handle,s=p.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:e.height-a.bottom,transform:"translate(-5, 0)",fill:"#777"});return"handleLeft"==l?p.a.createElement("g",{className:l,transform:"translate(".concat(i(n),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s):p.a.createElement("g",{className:l,transform:"translate(".concat(i(r),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s)}},{key:"componentDidUpdate",value:function(){var t,e=this.state,a=e.xScale,n=e.handle,r=this.props.changeHandlerValue,i=this,l=b.i().on("start",function(){t=s(b.o(this)[0])}).on("drag",function(){i.state.rangeEnd-i.state.rangeStart>432e6&&(t=s(b.o(this)[0]),b.v("."+n).attr("transform","translate("+a(t)+", 0)"),r(n,t))}).on("end",function(){i.state.rangeEnd-i.state.rangeStart>432e6?(b.v("."+n).attr("transform","translate("+a(t)+", 0)"),r(n,t)):"handleLeft"==n?r("handleLeft",i.state.rangeStart-1e8):r("handleRight",i.state.rangeEnd+1e8)});function s(t){return Math.round(a.invert(t))}b.v(".graphSliderGroup").call(l)}}]),e}(p.a.Component),k=function(t){function e(t){var a;Object(h.default)(this,e),a=Object(d.default)(this,Object(m.default)(e).call(this,t)),Object(x.a)(Object(y.default)(Object(y.default)(a)),"changeHandlerValue",function(t,e){var n=a.state,r=n.total,i=n.rangeStart,l=n.rangeEnd,s=b.x("%Y-%m-%d"),c=[];if("handleLeft"==t){for(var o=0;o<r.length;o++)s(r[o].Date)>=e&&s(r[o].Date)<=l&&c.push(r[o]);c.columns=r.columns,a.setState({rangeStart:e,partial:c})}else{for(var h=0;h<r.length;h++)s(r[h].Date)<=e&&s(r[h].Date)>=i&&c.push(r[h]);c.columns=r.columns,a.setState({rangeEnd:e,partial:c})}});var n=a.props,r=n.data,i=n.width,l=n.height,s=b.x("%Y-%m-%d"),c=r.sort(function(t,e){return b.c(s(t.Date),s(e.Date))}),o=c.map(function(t){return s(t.Date)});return a.state={total:c,partial:c,width:i,height:l,rangeStart:o[0],rangeEnd:o[o.length-1]},a}return Object(g.default)(e,t),Object(u.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.data,a=t.width,n=t.height,r=b.x("%Y-%m-%d"),i=e.sort(function(t,e){return b.c(r(t.Date),r(e.Date))}),l=i.map(function(t){return r(t.Date)});this.setState({total:i,partial:i,width:a,height:n,rangeStart:l[0],rangeEnd:l[l.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var t=this.state,e=t.width,a=t.height,n=t.total,r=20,i=20,l=20,s=20,c=e-s-i,o=a/6,h=b.x("%Y-%m-%d"),u=n.columns.slice(2).map(function(t){return{id:t,values:n.map(function(e){return{date:h(e.Date),value:e[t]}})}}),d=b.m(u[0].values,function(t){return t.value}),m=u[0].values.map(function(t){return t.date}),g=b.t().range([s,c-i]).domain([m[0],m[m.length-1]]),f=b.r().range([o-l,r]).domain([0,d]),p=b.b().curve(b.g).x(function(t){return g(t.date)}).y0(f(0)).y1(function(t){return f(t.value)}),v=b.v(this.GraphAxisElement);v.selectAll("*").remove(),v.append("g").attr("transform","translate(0,"+(o-l)+")").call(b.d(g).ticks(4).tickSize(3).tickFormat(b.w("%Y-%m-%d"))).selectAll("text").style("font-size","10px").style("fill","black").select(".domain").style("opacity",0),v.append("g").call(b.e(f).tickSize(3)).select(".domain").style("opacity",0),v.selectAll(".area").data(u).enter().append("path").attr("d",function(t){return p(t.values)}).style("fill","#ddd")}},{key:"getTextWidth",value:function(t,e,a){var n=document.createElement("canvas").getContext("2d");return n.font=e+"px "+a,n.measureText(t).width}},{key:"render",value:function(){var t=this,e=this.state,a=e.width,n=e.height,r=e.total,i=e.partial,l=e.rangeStart,s=e.rangeEnd,c={top:20,right:20,bottom:20,left:20},o={width:a-c.left-c.right,height:n/6},h={width:a-c.left-c.right,height:4*n/6},u={width:a-c.left-c.right,height:n},d=b.x("%Y-%m-%d"),m=r.map(function(t){return d(t.Date)}),g=b.t().range([c.left,u.width-c.right]).domain([m[0],m[m.length-1]]).clamp(!0),f=this.getTextWidth("Coca-Cola Company",16,"Arial"),v=this.getTextWidth("Industry",16,"Arial"),y=p.a.createElement("rect",{x:g(l),y:"0",width:g(s)-g(l),height:o.height-c.bottom,fill:"rgba(150, 150, 150, 0.65)"});return p.a.createElement("svg",{className:"areaChartSvg",width:u.width,height:u.height},p.a.createElement("g",{className:"TopPane",transform:"translate(".concat(c.left,", ").concat(n/12,")")},p.a.createElement("rect",{x:"10",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),p.a.createElement("rect",{x:"50",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),p.a.createElement("rect",{x:"90",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),p.a.createElement("rect",{x:"130",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),p.a.createElement("rect",{x:"170",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(222,7,48)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),p.a.createElement("circle",{r:"5",cx:u.width-c.left-v-f-60,cy:"0",fill:"#de0730"}),p.a.createElement("text",{x:u.width-c.left-v-40,y:"0",alignmentBaseline:"central",textAnchor:"end",style:{fontSize:16,fill:"#bdbbbc"}},"Coca-Cola Company"),p.a.createElement("circle",{r:"5",cx:u.width-c.left-v-20,cy:"0",fill:"#bdbbbc"}),p.a.createElement("text",{x:u.width-c.left,y:"0",alignmentBaseline:"central",textAnchor:"end",style:{fontSize:16,fill:"#bdbbbc"}},"Industry")),p.a.createElement("g",{className:"Chart",transform:"translate(0, ".concat(n/6,")")},p.a.createElement(w,{margins:c,svgDimen:h,partial:i})),p.a.createElement("g",{className:"graphSliderGroup",transform:"translate(0, ".concat(5*n/6,")")},p.a.createElement("g",{className:"graphSliderAxis",ref:function(e){return t.GraphAxisElement=e}}),y,p.a.createElement(E,{className:"handleLeft",handle:"handleLeft",changeHandlerValue:this.changeHandlerValue,rangeStart:l,rangeEnd:s,svgDimen:o,margins:c,xScale:g}),p.a.createElement(E,{className:"handleRight",handle:"handleRight",changeHandlerValue:this.changeHandlerValue,rangeStart:l,rangeEnd:s,svgDimen:o,margins:c,xScale:g})))}}]),e}(f.Component),S=function(t){function e(t){var a;Object(h.default)(this,e);var n=(a=Object(d.default)(this,Object(m.default)(e).call(this,t))).props,r=n.parentWidth,i=n.parentHeight,l=n.data;return l.columns=a.getColumns(l),a.state={width:Math.max(r,450),height:Math.max(i,400),data:l},a}return Object(g.default)(e,t),Object(u.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.parentWidth,a=t.parentHeight,n=t.data;n.columns=this.getColumns(n),this.setState({width:Math.max(e,450),height:Math.max(a,400),data:n})}},{key:"getColumns",value:function(t){var e=[];for(var a in t[0])e.push(a);return e}},{key:"render",value:function(){return p.a.createElement(f.Fragment,null,this.state.data&&p.a.createElement(k,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),e}(f.Component),C=(n=S,function(t){function e(t){var a;return Object(h.default)(this,e),(a=Object(d.default)(this,Object(m.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(y.default)(Object(y.default)(a))),a}return Object(g.default)(e,t),Object(u.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:a}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return p.a.createElement(n,Object(o.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return p.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(f.Component)),O=function(t){function e(){return Object(h.default)(this,e),Object(d.default)(this,Object(m.default)(e).apply(this,arguments))}return Object(g.default)(e,t),Object(u.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session,a=(t.navMenu,t.data);return p.a.createElement(v.a,Object(o.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),p.a.createElement("div",{className:"content"},p.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),p.a.createElement("p",null,"The Coca-Cola Company is an American ...."),p.a.createElement(C,{data:a[0].historyPrice100})))}}],[{key:"getInitialProps",value:function(){var t=Object(c.default)(i.a.mark(function t(e){var a,n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.req,n=a?a.headers["user-agent"]:navigator.userAgent,t.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:s()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            historyPrice100 {\n              Date\n              Volume\n              Close\n              }\n          }\n        }'})}).then(function(t){return t.json()}).then(function(t){return[t.data.security]});case 4:return r=t.sent,t.abrupt("return",{userAgent:n,data:r});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),e}(f.Component);e.default=O},G9HM:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area",function(){var t=a("3L/t");return{page:t.default||t}}])},azxR:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("hHgk"),r=a.n(n);function i(t,e,a){return e in t?r()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}}},[["G9HM",1,0]]]);