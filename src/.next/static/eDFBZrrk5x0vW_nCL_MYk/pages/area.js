(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3L/t":function(e,t,a){"use strict";a.r(t);var n,r=a("z3IF"),i=a("LkAs"),l=a("Moms"),s=a("bMj6"),c=a("hZod"),o=a("tEuJ"),h=a("mXGw"),u=a.n(h),d=a("CXsl"),g=a("t1Qi"),f=a("YKN3"),m=a("azxR"),p=function(e){function t(e){var a;return Object(i.default)(this,t),(a=Object(s.default)(this,Object(c.default)(t).call(this,e))).state={margins:a.props.margins,svgDimen:a.props.svgDimen,partial:a.props.partial,columns:a.props.columns},a}return Object(o.default)(t,e),Object(l.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({svgDimen:e.svgDimen,partial:e.partial,columns:e.columns})}},{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(){this.drawGraph()}},{key:"drawGraph",value:function(){var e=this.state,t=e.svgDimen,a=e.margins,n=e.partial,r=e.columns;void 0===n.columns&&(n.columns=r);var i=n.columns.slice(1,3).map(function(e){return{id:e,values:n.map(function(t){return{year:t.year,value:t[e]}})}}),l=i[0].values[0].year,s=i[0].values[i[0].values.length-1].year,c=g.t().domain(["grey","red"]).range(["rgba(189, 187, 188, 0.7)","rgba(223, 7, 44, 0.7)"]),o=g.s().range([a.left,t.width-a.right]).domain([l,s]),h=g.s().range([t.height-a.bottom,a.top]).domain([0,100]);c.domain(i.map(function(e){return e.id}));var u=g.b().curve(g.h).x(function(e){return o(e.year)}).y0(h(0)).y1(function(e){return h(e.value)}),d=g.w(this.el);d.selectAll("*").remove(),d.append("g").attr("transform","translate(0,"+(t.height-a.bottom)+")").call(g.d().scale(o).ticks(i[0].values.length).tickSize(0).tickFormat(g.k(""))).selectAll("text").style("font-size","10px").style("fill","black"),d.append("g").call(g.e().scale(h).ticks(10).tickSize(0)).select(".domain").style("opacity",0),d.selectAll(".area").data(i).enter().append("path").attr("d",function(e){return u(e.values)}).style("fill",function(e){return c(e.id)})}},{key:"render",value:function(){var e=this,t=this.state.svgDimen;return u.a.createElement("svg",{className:"graphSvg",width:t.width,height:t.height},u.a.createElement("g",{className:"graphPane",ref:function(t){return e.el=t}}))}}]),t}(h.Component),v=function(e){function t(e){var a;Object(i.default)(this,t);var n=(a=Object(s.default)(this,Object(c.default)(t).call(this,e))).props,r=n.handle,l=n.svgDimen,o=n.margins,h=n.years,u=n.rangeStart,d=n.rangeEnd,g=n.xScale;return a.state={handle:r,svgDimen:l,margins:o,years:h,rangeStart:u,rangeEnd:d,xScale:g},a}return Object(o.default)(t,e),Object(l.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.handle,a=e.svgDimen,n=e.margins,r=e.years,i=e.rangeStart,l=e.rangeEnd,s=e.xScale;this.setState({handle:t,svgDimen:a,margins:n,years:r,rangeStart:i,rangeEnd:l,xScale:s})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var e=this.state,t=e.svgDimen,a=e.margins,n=e.rangeStart,r=e.rangeEnd,i=e.xScale,l=e.handle,s=u.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:t.height-a.bottom,transform:"translate(-5, 0)",fill:"#df072c"});return"handleLeft"==l?u.a.createElement("g",{className:l,transform:"translate(".concat(i(n),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s):u.a.createElement("g",{className:l,transform:"translate(".concat(i(r),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s)}},{key:"componentDidUpdate",value:function(e,t){var a,n,r=this.state,i=r.margins,l=r.svgDimen,s=r.xScale,c=r.years,o=r.handle,h=this.props.changeHandlerValue,u=this,d=(l.width,i.left,i.right,c.length,g.j().on("start",function(){a=g.p(this)[0],n=f(a)}).on("drag",function(){a=g.p(this)[0],n=f(a),g.w("."+u.state.handle).attr("transform","translate("+a+", 0)"),h("handleLeft"==o?"handleLeft":"handleRight",s(a))}).on("end",function(){h("handleLeft"==o?"handleLeft":"handleRight",n);g.w("."+u.state.handle).attr("transform","translate("+s(n)+",0)")}));function f(e){return Math.round(s.invert(e))}g.w(".graphSliderGroup").call(d)}}]),t}(u.a.Component),y=function(e){function t(e){var a;Object(i.default)(this,t),a=Object(s.default)(this,Object(c.default)(t).call(this,e)),Object(m.a)(Object(f.default)(Object(f.default)(a)),"changeHandlerValue",function(e,t){var n=a.state,r=n.total,i=n.rangeStart,l=n.rangeEnd,s=n.csv_cols;"handleLeft"===e?a.setState({rangeStart:t}):a.setState({rangeEnd:t});for(var c=[],o=0;o<r.length;o++)r[o].year>=i&&r[o].year<=l&&c.push(r[o]);c.columns=s,a.setState({partial:c})});var n=a.props,r=n.data,l=n.width,o=n.height,h=r.sort(function(e,t){return g.c(e.year,t.year)}),u=h.map(function(e){return e.year});return a.state={total:h,partial:h,csv_cols:r.columns,width:l,height:o,rangeStart:u[0],rangeEnd:u[u.length-1]},a}return Object(o.default)(t,e),Object(l.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.data,a=e.width,n=e.height,r=t.sort(function(e,t){return g.c(e.year,t.year)}),i=r.map(function(e){return e.year});this.setState({total:r,partial:r,csv_cols:t.columns,width:a,height:n,rangeStart:i[0],rangeEnd:i[i.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var e=this.state,t=e.width,a=e.height,n=e.total,r=e.csv_cols,i=20,l=20,s=20,c=20,o=t-c-l,h=a/6;void 0===n.columns&&(n.columns=r);var u=n.columns.slice(3).map(function(e){return{id:e,values:n.map(function(t){return{year:t.year,slide:t[e]}})}}),d=u[0].values[0].year,f=u[0].values[u[0].values.length-1].year,m=g.s().range([c,o-l]).domain([d,f]),p=g.s().range([h-s,i]).domain([0,100]),v=g.b().curve(g.h).x(function(e){return m(e.year)}).y0(p(0)).y1(function(e){return p(e.slide)}),y=g.w(this.GraphAxisElement);y.selectAll("*").remove(),y.append("g").attr("transform","translate(0,"+(h-s)+")").call(g.d().scale(m).ticks(u[0].values.length).tickFormat(g.k(""))).selectAll("text").style("font-size","10px").style("fill","black"),y.append("g").call(g.e().scale(p).ticks(10).tickSize(0)).select(".domain").style("opacity",0),y.selectAll(".area").data(u).enter().append("path").attr("d",function(e){return v(e.values)}).style("fill","#ddd")}},{key:"render",value:function(){var e=this,t=this.state,a=t.width,n=t.height,r=t.total,i=t.partial,l=t.csv_cols,s=t.rangeStart,c=t.rangeEnd,o={top:20,right:20,bottom:20,left:20},h={width:a-o.left-o.right,height:n/6},d={width:a-o.left-o.right,height:5*n/6},f={width:a-o.left-o.right,height:n},m=r.map(function(e){return e.year}),y=m[0],b=m[m.length-1],w=g.s().range([o.left,f.width-o.right]).domain([y,b]).clamp(!0),E=u.a.createElement("rect",{x:w(s),y:"0",width:w(c)-w(s),height:h.height-o.bottom,fill:"rgba(54, 174, 175, 0.65)"});return u.a.createElement("svg",{className:"areaChartSvg",width:f.width,height:f.height},u.a.createElement("g",{className:"Chart"},u.a.createElement(p,{margins:o,svgDimen:d,partial:i,columns:l})),u.a.createElement("g",{className:"graphSliderGroup",transform:"translate(0, ".concat(5*n/6,")")},u.a.createElement("g",{className:"graphSliderAxis",ref:function(t){return e.GraphAxisElement=t}}),E,u.a.createElement(v,{className:"handleLeft",handle:"handleLeft",changeHandlerValue:this.changeHandlerValue,rangeStart:s,rangeEnd:c,svgDimen:h,margins:o,years:m,xScale:w}),u.a.createElement(v,{className:"handleRight",handle:"handleRight",changeHandlerValue:this.changeHandlerValue,rangeStart:s,rangeEnd:c,svgDimen:h,margins:o,years:m,xScale:w})))}}]),t}(h.Component),b=function(e){function t(e){var a;Object(i.default)(this,t);var n=(a=Object(s.default)(this,Object(c.default)(t).call(this,e))).props,r=n.parentWidth,l=n.parentHeight;return a.state={width:Math.max(r,450),height:Math.max(l,400)},a}return Object(o.default)(t,e),Object(l.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({width:Math.max(e.parentWidth,450),height:Math.max(e.parentHeight,400)})}},{key:"componentDidMount",value:function(){var e=this;g.g("/static/area_data.csv").then(function(t){e.setState({data:t})})}},{key:"render",value:function(){return u.a.createElement(h.Fragment,null,this.state.data&&u.a.createElement(y,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),t}(h.Component),w=(n=b,function(e){function t(e){var a;return Object(i.default)(this,t),(a=Object(s.default)(this,Object(c.default)(t).call(this,e))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(f.default)(Object(f.default)(a))),a}return Object(o.default)(t,e),Object(l.default)(t,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var e=this.state.containerWidth,t=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;e!==t&&this.setState(function(){return{containerWidth:t,containerHeight:a}})}},{key:"renderChart",value:function(){var e=this.state.containerWidth,t=this.state.containerHeight;return u.a.createElement(n,Object(r.a)({},this.props,{parentWidth:e,parentHeight:t}))}},{key:"render",value:function(){var e=this,t=null!==this.state.containerWidth;return u.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(t){e.chartContainer=t},className:"Responsive-wrapper"},t&&this.renderChart())}}]),t}(h.Component)),E=function(e){function t(){return Object(i.default)(this,t),Object(s.default)(this,Object(c.default)(t).apply(this,arguments))}return Object(o.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.session;e.navMenu;return u.a.createElement(d.a,Object(r.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),u.a.createElement("div",{className:"content"},u.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),u.a.createElement("p",null,"The Coca-Cola Company is an American ...."),u.a.createElement(w,null)))}}]),t}(h.Component);t.default=E},G9HM:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area",function(){var e=a("3L/t");return{page:e.default||e}}])},azxR:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a("hHgk"),r=a.n(n);function i(e,t,a){return t in e?r()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}}},[["G9HM",1,0]]]);