(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3L/t":function(e,t,a){"use strict";a.r(t);var n,r=a("z3IF"),i=a("LkAs"),l=a("Moms"),s=a("bMj6"),o=a("hZod"),c=a("tEuJ"),h=a("mXGw"),u=a.n(h),d=a("CXsl"),g=a("t1Qi"),m=a("YKN3"),f=a("azxR"),p=function(e){function t(e){var a;return Object(i.default)(this,t),(a=Object(s.default)(this,Object(o.default)(t).call(this,e))).state={margins:a.props.margins,svgDimen:a.props.svgDimen,partial:a.props.partial,columns:a.props.columns},a}return Object(c.default)(t,e),Object(l.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({svgDimen:e.svgDimen,partial:e.partial,columns:e.columns})}},{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(){this.drawGraph()}},{key:"drawGraph",value:function(){var e=this.state,t=e.svgDimen,a=e.margins,n=e.partial,r=e.columns;void 0===n.columns&&(n.columns=r);var i=n.columns.slice(1,3).map(function(e){return{id:e,values:n.map(function(t){return{year:t.year,value:t[e]}})}}),l=i[0].values[0].year,s=i[0].values[i[0].values.length-1].year,o=g.t().domain(["grey","red"]).range(["rgba(189, 187, 188, 0.7)","rgba(223, 7, 44, 0.7)"]),c=g.s().range([a.left,t.width-a.right]).domain([l,s]),h=g.s().range([t.height-a.bottom,a.top]).domain([0,100]);o.domain(i.map(function(e){return e.id}));var u=g.b().curve(g.h).x(function(e){return c(e.year)}).y0(h(0)).y1(function(e){return h(e.value)}),d=g.w(this.el);d.selectAll("*").remove(),d.append("g").attr("transform","translate(0,"+(t.height-a.bottom)+")").call(g.d().scale(c).ticks(i[0].values.length).tickSize(0).tickFormat(g.k(""))).selectAll("text").style("font-size","10px").style("fill","black"),d.append("g").call(g.e().scale(h).ticks(10).tickSize(0)).select(".domain").style("opacity",0),d.selectAll(".area").data(i).enter().append("path").attr("d",function(e){return u(e.values)}).style("fill",function(e){return o(e.id)})}},{key:"render",value:function(){var e=this,t=this.state.svgDimen;return u.a.createElement("svg",{className:"graphSvg",width:t.width,height:t.height},u.a.createElement("g",{className:"graphPane",ref:function(t){return e.el=t}}))}}]),t}(h.Component),v=function(e){function t(e){var a;Object(i.default)(this,t);var n=(a=Object(s.default)(this,Object(o.default)(t).call(this,e))).props,r=n.handle,l=n.svgDimen,c=n.margins,h=n.years,u=n.rangeStart,d=n.rangeEnd,g=n.xScale;return a.state={handle:r,svgDimen:l,margins:c,years:h,rangeStart:u,rangeEnd:d,xScale:g},a}return Object(c.default)(t,e),Object(l.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.handle,a=e.svgDimen,n=e.margins,r=e.years,i=e.rangeStart,l=e.rangeEnd,s=e.xScale;this.setState({handle:t,svgDimen:a,margins:n,years:r,rangeStart:i,rangeEnd:l,xScale:s})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var e=this.state,t=e.svgDimen,a=e.margins,n=e.rangeStart,r=e.rangeEnd,i=e.xScale,l=e.handle,s=u.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:t.height-a.bottom,transform:"translate(-5, 0)",fill:"#df072c"});return"handleLeft"==l?u.a.createElement("g",{className:l,transform:"translate(".concat(i(n),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s):u.a.createElement("g",{className:l,transform:"translate(".concat(i(r),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s)}},{key:"componentDidUpdate",value:function(e,t){var a,n,r=this.state,i=r.margins,l=r.svgDimen,s=r.xScale,o=r.years,c=(r.rangeStart,r.rangeEnd,r.handle),h=this.props,u=(h.onChangePeriod,h.changeHandlerValue),d=this,m=(l.width,i.left,i.right,o.length,g.j().on("start",function(){a=g.p(this)[0],n=f(a)}).on("drag",function(){a=g.p(this)[0],n=f(a),g.w("."+d.state.handle).attr("transform","translate("+a+", 0)"),u("handleLeft"==c?"handleLeft":"handleRight",n)}).on("end",function(){u("handleLeft"==c?"handleLeft":"handleRight",n);g.w("."+d.state.handle).attr("transform","translate("+s(n)+",0)")}));function f(e){return Math.round(s.invert(e))}g.w(".graphSliderGroup").call(m)}}]),t}(u.a.Component),y=function(e){function t(e){var a;Object(i.default)(this,t);var n=(a=Object(s.default)(this,Object(o.default)(t).call(this,e))).props,r=n.margins,l=n.svgDimen,c=n.total,h=n.columns,u=c.map(function(e){return e.year});return a.state={margins:r,svgDimen:l,total:c,columns:h,rangeStart:u[0],rangeEnd:u[u.length-1]},a}return Object(c.default)(t,e),Object(l.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.margins,a=e.svgDimen,n=e.total,r=e.columns,i=n.map(function(e){return e.year});this.setState({margins:t,svgDimen:a,total:n,columns:r,rangeStart:i[0],rangeEnd:i[i.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var e=this.state,t=e.svgDimen,a=e.margins,n=e.total,r=e.columns;void 0===n.columns&&(n.columns=r);var i=n.columns.slice(3).map(function(e){return{id:e,values:n.map(function(t){return{year:t.year,slide:t[e]}})}}),l=i[0].values[0].year,s=i[0].values[i[0].values.length-1].year,o=g.s().range([a.left,t.width-a.right]).domain([l,s]),c=g.s().range([t.height-a.bottom,a.top]).domain([0,100]),h=g.b().curve(g.h).x(function(e){return o(e.year)}).y0(c(0)).y1(function(e){return c(e.slide)}),u=g.w(this.GraphAxisElement);u.selectAll("*").remove(),u.append("g").attr("transform","translate(0,"+(t.height-a.bottom)+")").call(g.d().scale(o).ticks(i[0].values.length).tickFormat(g.k(""))).selectAll("text").style("font-size","10px").style("fill","black"),u.append("g").call(g.e().scale(c).ticks(10).tickSize(0)).select(".domain").style("opacity",0),u.selectAll(".area").data(i).enter().append("path").attr("d",function(e){return h(e.values)}).style("fill","#ddd")}},{key:"changeHandlerValue",value:function(e,t){console.log(e,"changeHandlerValue"),console.log(t,"year changeHandlerValue"),"handleLeft"==e?this.setState({rangeStart:t}):this.setState({rangeEnd:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.svgDimen,n=t.total,r=t.margins,i=t.rangeStart,l=t.rangeEnd,s=this.props.onChangePeriod,o=n.map(function(e){return e.year}),c=o[0],h=o[o.length-1],d=g.s().range([r.left,a.width-r.right]).domain([c,h]),m=u.a.createElement("rect",{x:d(c),y:"0",width:d(h)-d(c),height:a.height-r.bottom,fill:"rgba(54, 174, 175, 0.65)",className:"rangeBarFilled"});return u.a.createElement("svg",{className:"graphSliderSvg",width:a.width,height:a.height},u.a.createElement("g",{className:"graphSliderGroup"},u.a.createElement("g",{className:"graphSliderAxis",ref:function(t){return e.GraphAxisElement=t}}),m,u.a.createElement(v,{className:"handleLeft",handle:"handleLeft",onChangePeriod:s,changeHandlerValue:this.changeHandlerValue,svgDimen:a,margins:r,years:o,rangeStart:i,rangeEnd:l,xScale:d}),u.a.createElement(v,{className:"handleRight",handle:"handleRight",onChangePeriod:s,changeHandlerValue:this.changeHandlerValue,svgDimen:a,margins:r,years:o,rangeStart:i,rangeEnd:l,xScale:d})))}}]),t}(h.Component),b=function(e){function t(e){var a;Object(i.default)(this,t),a=Object(s.default)(this,Object(o.default)(t).call(this,e)),Object(f.a)(Object(m.default)(Object(m.default)(a)),"changePeriod",function(e,t){for(var n=a.state.total,r=[],i=0;i<n.length;i++)n[i].year>=e&&n[i].year<=t&&r.push(n[i]);r.columns=n.columns,a.setState({partial:r})});var n=a.props,r=n.data,l=n.width,c=n.height,h=r.sort(function(e,t){return g.c(e.year,t.year)});return a.state={total:h,partial:h,csv_cols:r.columns,width:l,height:c},a}return Object(c.default)(t,e),Object(l.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.data,a=e.width,n=e.height,r=t.sort(function(e,t){return g.c(e.year,t.year)});this.setState({total:r,partial:r,csv_cols:t.columns,width:a,height:n})}},{key:"render",value:function(){var e=this.state,t=e.width,a=e.height,n=e.total,r=e.partial,i=e.csv_cols,l={top:20,right:20,bottom:20,left:20},s={width:t-l.left-l.right,height:a/6},o={width:t-l.left-l.right,height:5*a/6};return u.a.createElement("div",{className:"areaChartPane"},u.a.createElement("div",{className:"areaChart"},u.a.createElement(p,{margins:l,svgDimen:o,partial:r,columns:i})),u.a.createElement("div",{className:"graphSlider"},u.a.createElement(y,{onChangePeriod:this.changePeriod,margins:l,svgDimen:s,total:n,columns:i})))}}]),t}(h.Component),w=function(e){function t(e){var a;Object(i.default)(this,t);var n=(a=Object(s.default)(this,Object(o.default)(t).call(this,e))).props,r=n.parentWidth,l=n.parentHeight;return a.state={width:Math.max(r,450),height:Math.max(l,400)},a}return Object(c.default)(t,e),Object(l.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({width:Math.max(e.parentWidth,450),height:Math.max(e.parentHeight,400)})}},{key:"componentDidMount",value:function(){var e=this;g.g("/static/area_data.csv").then(function(t){e.setState({data:t})})}},{key:"render",value:function(){return u.a.createElement(h.Fragment,null,this.state.data&&u.a.createElement(b,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),t}(h.Component),O=(n=w,function(e){function t(e){var a;return Object(i.default)(this,t),(a=Object(s.default)(this,Object(o.default)(t).call(this,e))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(m.default)(Object(m.default)(a))),a}return Object(c.default)(t,e),Object(l.default)(t,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var e=this.state.containerWidth,t=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;e!==t&&this.setState(function(){return{containerWidth:t,containerHeight:a}})}},{key:"renderChart",value:function(){var e=this.state.containerWidth,t=this.state.containerHeight;return u.a.createElement(n,Object(r.a)({},this.props,{parentWidth:e,parentHeight:t}))}},{key:"render",value:function(){var e=this,t=null!==this.state.containerWidth;return u.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(t){e.chartContainer=t},className:"Responsive-wrapper"},t&&this.renderChart())}}]),t}(h.Component)),E=function(e){function t(){return Object(i.default)(this,t),Object(s.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(c.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.session;e.navMenu;return u.a.createElement(d.a,Object(r.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),u.a.createElement("div",{className:"content"},u.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),u.a.createElement("p",null,"The Coca-Cola Company is an American ...."),u.a.createElement(O,null)))}}]),t}(h.Component);t.default=E},G9HM:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area",function(){var e=a("3L/t");return{page:e.default||e}}])},azxR:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a("hHgk"),r=a.n(n);function i(e,t,a){return t in e?r()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}}},[["G9HM",1,0]]]);