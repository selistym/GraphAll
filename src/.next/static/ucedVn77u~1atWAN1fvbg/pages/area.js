(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3L/t":function(t,e,a){"use strict";a.r(e);var n,r=a("UrUy"),i=a.n(r),l=a("JYC+"),s=a.n(l),o=a("R3/3"),u=a("z3IF"),c=a("LkAs"),h=a("Moms"),d=a("bMj6"),f=a("hZod"),g=a("tEuJ"),p=a("mXGw"),m=a.n(p),v=a("CXsl"),b=a("t1Qi"),y=a("YKN3"),E=a("azxR"),O=(p.Component,function(t){function e(t){var a;Object(c.default)(this,e);var n=(a=Object(d.default)(this,Object(f.default)(e).call(this,t))).props,r=n.handle,i=n.svgDimen,l=n.margins,s=n.rangeStart,o=n.rangeEnd,u=n.xScale;return a.state={handle:r,svgDimen:i,margins:l,rangeStart:s,rangeEnd:o,xScale:u},a}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.handle,a=t.svgDimen,n=t.margins,r=t.rangeStart,i=t.rangeEnd,l=t.xScale;this.setState({handle:e,svgDimen:a,margins:n,rangeStart:r,rangeEnd:i,xScale:l})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.rangeStart,r=t.rangeEnd,i=t.xScale,l=t.handle,s=m.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:e.height-a.bottom,transform:"translate(-5, 0)",fill:"#df072c"});return"handleLeft"==l?m.a.createElement("g",{className:l,transform:"translate(".concat(i(n),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s):m.a.createElement("g",{className:l,transform:"translate(".concat(i(r),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s)}},{key:"shouldComponentUpdate",value:function(t,e){}},{key:"componentDidUpdate",value:function(){var t,e=this.state,a=e.xScale,n=(e.rangeStart,e.rangeEnd,e.handle),r=this.props.changeHandlerValue,i=this,l=b.i().on("start",function(){t=s(b.o(this)[0])}).on("drag",function(){t=s(b.o(this)[0]),b.v("."+i.state.handle).attr("transform","translate("+a(t)+", 0)"),r(n,t)}).on("end",function(){b.v("."+i.state.handle).attr("transform","translate("+a(t)+",0)"),r(n,t)});function s(t){return Math.round(a.invert(t))}b.v(".graphSliderGroup").call(l)}}]),e}(m.a.Component)),C=function(t){function e(t){var a;Object(c.default)(this,e),a=Object(d.default)(this,Object(f.default)(e).call(this,t)),Object(E.a)(Object(y.default)(Object(y.default)(a)),"changeHandlerValue",function(t,e){var n=a.state,r=n.total,i=n.rangeStart,l=n.rangeEnd,s=n.column,o=[];if(o.columns=s,"handleLeft"==t){for(var u=0;u<r.length;u++)r[u].date>=e&&r[u].date<=l&&o.push(r[u]);a.setState({rangeStart:e,partial:o})}else{for(var c=0;c<r.length;c++)r[c].date>=i&&r[c].date<=e&&o.push(r[c]);a.setState({rangeEnd:e,partial:o})}});var n=a.props,r=n.data,i=n.width,l=n.height;console.log(r,"from index");var s=r.sort(function(t,e){return b.c(t.Date,e.Date)}),o=s.map(function(t){return t.Date});return a.state={total:s,partial:s,width:i,height:l,rangeStart:o[0],rangeEnd:o[o.length-1]},a}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.data,a=t.width,n=t.height,r=e.sort(function(t,e){return b.c(t.Date,e.Date)}),i=r.map(function(t){return t.Date});this.setState({total:r,partial:r,width:a,height:n,rangeStart:i[0],rangeEnd:i[i.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var t=this.state,e=t.width,a=t.height,n=t.total,r=20,i=20,l=20,s=20,o=e-s-i,u=a/6,c=n.columns.slice(2).map(function(t){return{id:t,values:n.map(function(e){return{date:e.date,value:e[t]}})}});console.log(c,"sliderGraph");var h=c[0].values[0].date,d=c[0].values[c[0].values.length-1].date,f=b.m(c[0].values,function(t){return t.value}),g=b.r().range([s,o-i]).domain([h,d]),p=b.r().range([u-l,r]).domain([0,f]),m=b.b().curve(b.g).x(function(t){return g(t.date)}).y0(p(0)).y1(function(t){return p(t.value)}),v=b.v(this.GraphAxisElement);v.selectAll("*").remove(),v.append("g").attr("transform","translate(0,"+(u-l)+")").call(b.d().scale(g).ticks(c[0].values.length).tickFormat(b.j(""))).selectAll("text").style("font-size","10px").style("fill","black"),v.append("g").call(b.e().scale(p).ticks(10).tickSize(0)).select(".domain").style("opacity",0),v.selectAll(".area").data(c).enter().append("path").attr("d",function(t){return m(t.values)}).style("fill","#ddd")}},{key:"render",value:function(){var t=this,e=this.state,a=e.width,n=e.height,r=e.total,i=(e.partial,e.column,e.rangeStart),l=e.rangeEnd,s={top:20,right:20,bottom:20,left:20},o={width:a-s.left-s.right,height:n/6},u={width:a-s.left-s.right,height:n},c=r.map(function(t){return t.Date}),h=c[0],d=c[c.length-1],f=b.r().range([s.left,u.width-s.right]).domain([h,d]).clamp(!0),g=m.a.createElement("rect",{x:f(i),y:"0",width:f(l)-f(i),height:o.height-s.bottom,fill:"rgba(54, 174, 175, 0.65)"});return m.a.createElement("svg",{className:"areaChartSvg",width:u.width,height:u.height},m.a.createElement("g",{className:"graphSliderGroup",transform:"translate(0, ".concat(5*n/6,")")},m.a.createElement("g",{className:"graphSliderAxis",ref:function(e){return t.GraphAxisElement=e}}),g,m.a.createElement(O,{className:"handleLeft",handle:"handleLeft",changeHandlerValue:this.changeHandlerValue,rangeStart:i,rangeEnd:l,svgDimen:o,margins:s,xScale:f}),m.a.createElement(O,{className:"handleRight",handle:"handleRight",changeHandlerValue:this.changeHandlerValue,rangeStart:i,rangeEnd:l,svgDimen:o,margins:s,xScale:f})))}}]),e}(p.Component),j=function(t){function e(t){var a;Object(c.default)(this,e);var n=(a=Object(d.default)(this,Object(f.default)(e).call(this,t))).props,r=n.parentWidth,i=n.parentHeight,l=n.data;return l.columns=a.getColumns(l),a.state={width:Math.max(r,450),height:Math.max(i,400),data:l},a}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.parentWidth,a=t.parentHeight,n=t.data;n.columns=this.getColumns(n),this.setState({width:Math.max(e,450),height:Math.max(a,400),data:n})}},{key:"getColumns",value:function(t){var e=[];for(var a in t[0])e.push(a);return e}},{key:"render",value:function(){return m.a.createElement(p.Fragment,null,this.state.data&&m.a.createElement(C,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),e}(p.Component),w=(n=j,function(t){function e(t){var a;return Object(c.default)(this,e),(a=Object(d.default)(this,Object(f.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(y.default)(Object(y.default)(a))),a}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:a}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return m.a.createElement(n,Object(u.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return m.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(p.Component)),S=function(t){function e(){return Object(c.default)(this,e),Object(d.default)(this,Object(f.default)(e).apply(this,arguments))}return Object(g.default)(e,t),Object(h.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session,a=(t.navMenu,t.data);return m.a.createElement(v.a,Object(u.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),m.a.createElement("div",{className:"content"},m.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),m.a.createElement("p",null,"The Coca-Cola Company is an American ...."),m.a.createElement(w,{data:a[0].historyPrice100})))}}],[{key:"getInitialProps",value:function(){var t=Object(o.default)(i.a.mark(function t(e){var a,n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.req,n=a?a.headers["user-agent"]:navigator.userAgent,t.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:s()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            historyPrice100 {\n              Date\n              Volume\n              Close\n              }\n          }\n        }'})}).then(function(t){return t.json()}).then(function(t){return[t.data.security]});case 4:return r=t.sent,t.abrupt("return",{userAgent:n,data:r});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),e}(p.Component);e.default=S},G9HM:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area",function(){var t=a("3L/t");return{page:t.default||t}}])},azxR:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("hHgk"),r=a.n(n);function i(t,e,a){return e in t?r()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}}},[["G9HM",1,0]]]);