(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3L/t":function(t,e,a){"use strict";a.r(e);var n,r=a("z3IF"),i=a("LkAs"),l=a("Moms"),s=a("bMj6"),c=a("hZod"),o=a("tEuJ"),u=a("mXGw"),h=a.n(u),d=a("CXsl"),g=a("t1Qi"),m=a("YKN3"),f=a("azxR"),p=function(t){function e(t){var a;return Object(i.default)(this,e),(a=Object(s.default)(this,Object(c.default)(e).call(this,t))).state={margins:a.props.margins,svgDimen:a.props.svgDimen,partial:a.props.partial,columns:a.props.columns},a}return Object(o.default)(e,t),Object(l.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({svgDimen:t.svgDimen,partial:t.partial,columns:t.columns})}},{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(){this.drawGraph()}},{key:"drawGraph",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.partial,r=t.columns;void 0===n.columns&&(n.columns=r);var i=n.columns.slice(1,3).map(function(t){return{id:t,values:n.map(function(e){return{year:e.year,value:e[t]}})}}),l=i[0].values[0].year,s=i[0].values[i[0].values.length-1].year,c=g.t().domain(["grey","red"]).range(["rgba(189, 187, 188, 0.7)","rgba(223, 7, 44, 0.7)"]),o=g.s().range([a.left,e.width-a.right]).domain([l,s]),u=g.s().range([e.height-a.bottom,a.top]).domain([0,100]);c.domain(i.map(function(t){return t.id}));var h=g.b().curve(g.h).x(function(t){return o(t.year)}).y0(u(0)).y1(function(t){return u(t.value)}),d=g.w(this.el);d.selectAll("*").remove(),d.append("g").attr("transform","translate(0,"+(e.height-a.bottom)+")").call(g.d().scale(o).ticks(i[0].values.length).tickSize(0).tickFormat(g.k(""))).selectAll("text").style("font-size","10px").style("fill","black"),d.append("g").call(g.e().scale(u).ticks(10).tickSize(0)).select(".domain").style("opacity",0),d.selectAll(".area").data(i).enter().append("path").attr("d",function(t){return h(t.values)}).style("fill",function(t){return c(t.id)})}},{key:"render",value:function(){var t=this,e=this.state.svgDimen;return h.a.createElement("svg",{className:"graphSvg",width:e.width,height:e.height},h.a.createElement("g",{className:"graphPane",ref:function(e){return t.el=e}}))}}]),e}(u.Component),v=function(t){function e(t){var a;Object(i.default)(this,e);var n=(a=Object(s.default)(this,Object(c.default)(e).call(this,t))).props,r=n.handle,l=n.svgDimen,o=n.margins,u=n.years,h=n.rangeStart,d=n.rangeEnd,g=n.xScale;return a.state={handle:r,svgDimen:l,margins:o,years:u,rangeStart:h,rangeEnd:d,xScale:g},a}return Object(o.default)(e,t),Object(l.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.handle,a=t.svgDimen,n=t.margins,r=t.years,i=t.rangeStart,l=t.rangeEnd,s=t.xScale;this.setState({handle:e,svgDimen:a,margins:n,years:r,rangeStart:i,rangeEnd:l,xScale:s})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.rangeStart,r=t.rangeEnd,i=t.xScale,l=t.handle,s=h.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:e.height-a.bottom,transform:"translate(-5, 0)",fill:"#df072c"});return"handleLeft"==l?h.a.createElement("g",{className:l,transform:"translate(".concat(i(n),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s):h.a.createElement("g",{className:l,transform:"translate(".concat(i(r),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s)}},{key:"componentDidUpdate",value:function(){var t,e=this.state,a=e.margins,n=e.svgDimen,r=e.xScale,i=e.rangeStart,l=e.rangeEnd,s=e.years,c=e.handle,o=this.props.changeHandlerValue,u=this,h=(n.width-a.left-a.right)/s.length,d=g.j().on("start",function(){t=m(g.p(this)[0])}).on("drag",function(){r(l)-r(i)>=h&&(t=m(g.p(this)[0]),g.w("."+u.state.handle).attr("transform","translate("+r(t)+", 0)"),o(c,t))}).on("end",function(){o(c,t),g.w("."+u.state.handle).attr("transform","translate("+r(t)+",0)")});function m(t){return Math.round(r.invert(t))}g.w(".graphSliderGroup").call(d)}}]),e}(h.a.Component),y=function(t){function e(t){var a;Object(i.default)(this,e),a=Object(s.default)(this,Object(c.default)(e).call(this,t)),Object(f.a)(Object(m.default)(Object(m.default)(a)),"changeHandlerValue",function(t,e){var n=a.state,r=n.total,i=n.rangeStart,l=n.rangeEnd,s=n.csv_cols;"handleLeft"===t?a.setState({rangeStart:e}):a.setState({rangeEnd:e});for(var c=[],o=0;o<r.length;o++)r[o].year>=i&&r[o].year<=l&&c.push(r[o]);c.columns=s,a.setState({partial:c})});var n=a.props,r=n.data,l=n.width,o=n.height,u=r.sort(function(t,e){return g.c(t.year,e.year)}),h=u.map(function(t){return t.year});return a.state={total:u,partial:u,csv_cols:r.columns,width:l,height:o,rangeStart:h[0],rangeEnd:h[h.length-1]},a}return Object(o.default)(e,t),Object(l.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.data,a=t.width,n=t.height,r=e.sort(function(t,e){return g.c(t.year,e.year)}),i=r.map(function(t){return t.year});this.setState({total:r,partial:r,csv_cols:e.columns,width:a,height:n,rangeStart:i[0],rangeEnd:i[i.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var t=this.state,e=t.width,a=t.height,n=t.total,r=t.csv_cols,i=20,l=20,s=20,c=20,o=e-c-l,u=a/6;void 0===n.columns&&(n.columns=r);var h=n.columns.slice(3).map(function(t){return{id:t,values:n.map(function(e){return{year:e.year,slide:e[t]}})}}),d=h[0].values[0].year,m=h[0].values[h[0].values.length-1].year,f=g.s().range([c,o-l]).domain([d,m]),p=g.s().range([u-s,i]).domain([0,100]),v=g.b().curve(g.h).x(function(t){return f(t.year)}).y0(p(0)).y1(function(t){return p(t.slide)}),y=g.w(this.GraphAxisElement);y.selectAll("*").remove(),y.append("g").attr("transform","translate(0,"+(u-s)+")").call(g.d().scale(f).ticks(h[0].values.length).tickFormat(g.k(""))).selectAll("text").style("font-size","10px").style("fill","black"),y.append("g").call(g.e().scale(p).ticks(10).tickSize(0)).select(".domain").style("opacity",0),y.selectAll(".area").data(h).enter().append("path").attr("d",function(t){return v(t.values)}).style("fill","#ddd")}},{key:"render",value:function(){var t=this,e=this.state,a=e.width,n=e.height,r=e.total,i=e.partial,l=e.csv_cols,s=e.rangeStart,c=e.rangeEnd,o={top:20,right:20,bottom:20,left:20},u={width:a-o.left-o.right,height:n/6},d={width:a-o.left-o.right,height:5*n/6},m={width:a-o.left-o.right,height:n},f=r.map(function(t){return t.year}),y=f[0],b=f[f.length-1],w=g.s().range([o.left,m.width-o.right]).domain([y,b]).clamp(!0),E=h.a.createElement("rect",{x:w(s),y:"0",width:w(c)-w(s),height:u.height-o.bottom,fill:"rgba(54, 174, 175, 0.65)"});return h.a.createElement("svg",{className:"areaChartSvg",width:m.width,height:m.height},h.a.createElement("g",{className:"Chart"},h.a.createElement(p,{margins:o,svgDimen:d,partial:i,columns:l})),h.a.createElement("g",{className:"graphSliderGroup",transform:"translate(0, ".concat(5*n/6,")")},h.a.createElement("g",{className:"graphSliderAxis",ref:function(e){return t.GraphAxisElement=e}}),E,h.a.createElement(v,{className:"handleLeft",handle:"handleLeft",changeHandlerValue:this.changeHandlerValue,rangeStart:s,rangeEnd:c,svgDimen:u,margins:o,years:f,xScale:w}),h.a.createElement(v,{className:"handleRight",handle:"handleRight",changeHandlerValue:this.changeHandlerValue,rangeStart:s,rangeEnd:c,svgDimen:u,margins:o,years:f,xScale:w})))}}]),e}(u.Component),b=function(t){function e(t){var a;Object(i.default)(this,e);var n=(a=Object(s.default)(this,Object(c.default)(e).call(this,t))).props,r=n.parentWidth,l=n.parentHeight;return a.state={width:Math.max(r,450),height:Math.max(l,400)},a}return Object(o.default)(e,t),Object(l.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({width:Math.max(t.parentWidth,450),height:Math.max(t.parentHeight,400)})}},{key:"componentDidMount",value:function(){var t=this;g.g("/static/area_data.csv").then(function(e){t.setState({data:e})})}},{key:"render",value:function(){return h.a.createElement(u.Fragment,null,this.state.data&&h.a.createElement(y,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),e}(u.Component),w=(n=b,function(t){function e(t){var a;return Object(i.default)(this,e),(a=Object(s.default)(this,Object(c.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(m.default)(Object(m.default)(a))),a}return Object(o.default)(e,t),Object(l.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:a}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return h.a.createElement(n,Object(r.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return h.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(u.Component)),E=function(t){function e(){return Object(i.default)(this,e),Object(s.default)(this,Object(c.default)(e).apply(this,arguments))}return Object(o.default)(e,t),Object(l.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session;t.navMenu;return h.a.createElement(d.a,Object(r.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),h.a.createElement("div",{className:"content"},h.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),h.a.createElement("p",null,"The Coca-Cola Company is an American ...."),h.a.createElement(w,null)))}}]),e}(u.Component);e.default=E},G9HM:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area",function(){var t=a("3L/t");return{page:t.default||t}}])},azxR:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("hHgk"),r=a.n(n);function i(t,e,a){return e in t?r()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}}},[["G9HM",1,0]]]);