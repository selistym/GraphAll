(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3L/t":function(t,e,a){"use strict";a.r(e);var n,r=a("z3IF"),i=a("LkAs"),l=a("Moms"),s=a("bMj6"),o=a("hZod"),c=a("tEuJ"),u=a("mXGw"),h=a.n(u),d=a("CXsl"),g=a("t1Qi"),m=a("YKN3"),f=a("azxR"),p=function(t){function e(t){var a;return Object(i.default)(this,e),(a=Object(s.default)(this,Object(o.default)(e).call(this,t))).state={margins:a.props.margins,svgDimen:a.props.svgDimen,partial:a.props.partial,columns:a.props.columns},a}return Object(c.default)(e,t),Object(l.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({svgDimen:t.svgDimen,partial:t.partial,columns:t.columns})}},{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(){this.drawGraph()}},{key:"drawGraph",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.partial,r=t.columns;void 0===n.columns&&(n.columns=r);var i=n.columns.slice(1,3).map(function(t){return{id:t,values:n.map(function(e){return{year:e.year,value:e[t]}})}}),l=i[0].values[0].year,s=i[0].values[i[0].values.length-1].year,o=g.t().domain(["grey","red"]).range(["rgba(189, 187, 188, 0.7)","rgba(223, 7, 44, 0.7)"]),c=g.s().range([a.left,e.width-a.right]).domain([l,s]),u=g.s().range([e.height-a.bottom,a.top]).domain([0,100]);o.domain(i.map(function(t){return t.id}));var h=g.b().curve(g.h).x(function(t){return c(t.year)}).y0(u(0)).y1(function(t){return u(t.value)}),d=g.w(this.el);d.selectAll("*").remove(),d.append("g").attr("transform","translate(0,"+(e.height-a.bottom)+")").call(g.d().scale(c).ticks(i[0].values.length).tickSize(0).tickFormat(g.k(""))).selectAll("text").style("font-size","10px").style("fill","black"),d.append("g").call(g.e().scale(u).ticks(10).tickSize(0)).select(".domain").style("opacity",0),d.selectAll(".area").data(i).enter().append("path").attr("d",function(t){return h(t.values)}).style("fill",function(t){return o(t.id)})}},{key:"render",value:function(){var t=this,e=this.state.svgDimen;return h.a.createElement("svg",{className:"graphSvg",width:e.width,height:e.height},h.a.createElement("g",{className:"graphPane",ref:function(e){return t.el=e}}))}}]),e}(u.Component),v=function(t){function e(t){var a;Object(i.default)(this,e);var n=(a=Object(s.default)(this,Object(o.default)(e).call(this,t))).props,r=n.handle,l=n.svgDimen,c=n.margins,u=n.years,h=n.rangeStart,d=n.rangeEnd,g=n.xScale;return a.state={handle:r,svgDimen:l,margins:c,years:u,rangeStart:h,rangeEnd:d,xScale:g},a}return Object(c.default)(e,t),Object(l.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.handle,a=t.svgDimen,n=t.margins,r=t.years,i=t.rangeStart,l=t.rangeEnd,s=t.xScale;this.setState({handle:e,svgDimen:a,margins:n,years:r,rangeStart:i,rangeEnd:l,xScale:s})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.rangeStart,r=t.rangeEnd,i=t.xScale,l=t.handle,s=h.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:e.height-a.bottom,transform:"translate(-5, 0)",fill:"#df072c"});return"handleLeft"==l?h.a.createElement("g",{className:l,transform:"translate(".concat(i(n),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s):h.a.createElement("g",{className:l,transform:"translate(".concat(i(r),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s)}},{key:"componentDidUpdate",value:function(t,e){var a,n,r=this.state,i=r.margins,l=r.svgDimen,s=r.xScale,o=r.years,c=r.rangeStart,u=r.rangeEnd,h=r.handle,d=this.props,m=(d.onChangePeriod,d.changeHandlerValue,this),f=(l.width,i.left,i.right,o.length,g.j().on("start",function(){a=g.p(m)[0],n=p(a)}).on("drag",function(){a=g.p(m)[0],n=p(a),g.w("."+m.state.handle).attr("transform","translate("+a+", 0)"),"handleLeft"==h?m.setState({rangeStart:n}):m.setState({rangeEnd:n});g.w(".rangeBarFilled").attr("x",s(c)).attr("y",0).attr("width",s(u)-s(c)).attr("height",l.height-i.bottom)}).on("end",function(){a=g.p(m)[0],n=p(a),"handleLeft"==h?m.setState({rangeStart:n}):m.setState({rangeEnd:n});g.w("."+m.state.handle).attr("transform","translate("+s(n)+",0)"),g.w(".rangeBarFilled").attr("x",s(c)).attr("y",0).attr("width",s(u)-s(c)).attr("height",l.height-i.bottom)}));function p(t){return Math.round(s.invert(t))}g.w(".graphSliderGroup").call(f)}}]),e}(h.a.Component),y=function(t){function e(t){var a;Object(i.default)(this,e);var n=(a=Object(s.default)(this,Object(o.default)(e).call(this,t))).props,r=n.margins,l=n.svgDimen,c=n.total,u=n.columns,h=c.map(function(t){return t.year});return a.state={margins:r,svgDimen:l,total:c,columns:u,rangeStart:h[0],rangeEnd:h[h.length-1]},a}return Object(c.default)(e,t),Object(l.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.margins,a=t.svgDimen,n=t.total,r=t.columns,i=n.map(function(t){return t.year});this.setState({margins:e,svgDimen:a,total:n,columns:r,rangeStart:i[0],rangeEnd:i[i.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.total,r=t.columns;void 0===n.columns&&(n.columns=r);var i=n.columns.slice(3).map(function(t){return{id:t,values:n.map(function(e){return{year:e.year,slide:e[t]}})}}),l=i[0].values[0].year,s=i[0].values[i[0].values.length-1].year,o=g.s().range([a.left,e.width-a.right]).domain([l,s]),c=g.s().range([e.height-a.bottom,a.top]).domain([0,100]),u=g.b().curve(g.h).x(function(t){return o(t.year)}).y0(c(0)).y1(function(t){return c(t.slide)}),h=g.w(this.GraphAxisElement);h.selectAll("*").remove(),h.append("g").attr("transform","translate(0,"+(e.height-a.bottom)+")").call(g.d().scale(o).ticks(i[0].values.length).tickFormat(g.k(""))).selectAll("text").style("font-size","10px").style("fill","black"),h.append("g").call(g.e().scale(c).ticks(10).tickSize(0)).select(".domain").style("opacity",0),h.selectAll(".area").data(i).enter().append("path").attr("d",function(t){return u(t.values)}).style("fill","#ddd")}},{key:"changeHandlerValue",value:function(t,e){"leftHandler"==t?this.setState({rangeStart:e}):this.setState({rangeEnd:e})}},{key:"render",value:function(){var t=this,e=this.state,a=e.svgDimen,n=e.total,r=e.margins,i=e.rangeStart,l=e.rangeEnd,s=this.props,o=s.onChangePeriod,c=s.changeHandlerValue,u=n.map(function(t){return t.year}),d=u[0],m=u[u.length-1],f=g.s().range([r.left,a.width-r.right]).domain([d,m]),p=h.a.createElement("rect",{x:f(d),y:"0",width:f(m)-f(d),height:a.height-r.bottom,fill:"rgba(54, 174, 175, 0.65)",className:"rangeBarFilled"});return h.a.createElement("svg",{className:"graphSliderSvg",width:a.width,height:a.height},h.a.createElement("g",{className:"graphSliderGroup"},h.a.createElement("g",{className:"graphSliderAxis",ref:function(e){return t.GraphAxisElement=e}}),p,h.a.createElement(v,{className:"handleLeft",handle:"handleLeft",onChangePeriod:o,changeHandlerValue:c,svgDimen:a,margins:r,years:u,rangeStart:i,rangeEnd:l,xScale:f}),h.a.createElement(v,{className:"handleRight",handle:"handleRight",onChangePeriod:o,changeHandlerValue:c,svgDimen:a,margins:r,years:u,rangeStart:i,rangeEnd:l,xScale:f})))}}]),e}(u.Component),b=function(t){function e(t){var a;Object(i.default)(this,e),a=Object(s.default)(this,Object(o.default)(e).call(this,t)),Object(f.a)(Object(m.default)(Object(m.default)(a)),"changePeriod",function(t,e){for(var n=a.state.total,r=[],i=0;i<n.length;i++)n[i].year>=t&&n[i].year<=e&&r.push(n[i]);r.columns=n.columns,a.setState({partial:r})});var n=a.props,r=n.data,l=n.width,c=n.height,u=r.sort(function(t,e){return g.c(t.year,e.year)});return a.state={total:u,partial:u,csv_cols:r.columns,width:l,height:c},a}return Object(c.default)(e,t),Object(l.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.data,a=t.width,n=t.height,r=e.sort(function(t,e){return g.c(t.year,e.year)});this.setState({total:r,partial:r,csv_cols:e.columns,width:a,height:n})}},{key:"render",value:function(){var t=this.state,e=t.width,a=t.height,n=t.total,r=t.partial,i=t.csv_cols,l={top:20,right:20,bottom:20,left:20},s={width:e-l.left-l.right,height:a/6},o={width:e-l.left-l.right,height:5*a/6};return h.a.createElement("div",{className:"areaChartPane"},h.a.createElement("div",{className:"areaChart"},h.a.createElement(p,{margins:l,svgDimen:o,partial:r,columns:i})),h.a.createElement("div",{className:"graphSlider"},h.a.createElement(y,{onChangePeriod:this.changePeriod,margins:l,svgDimen:s,total:n,columns:i})))}}]),e}(u.Component),w=function(t){function e(t){var a;Object(i.default)(this,e);var n=(a=Object(s.default)(this,Object(o.default)(e).call(this,t))).props,r=n.parentWidth,l=n.parentHeight;return a.state={width:Math.max(r,450),height:Math.max(l,400)},a}return Object(c.default)(e,t),Object(l.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({width:Math.max(t.parentWidth,450),height:Math.max(t.parentHeight,400)})}},{key:"componentDidMount",value:function(){var t=this;g.g("/static/area_data.csv").then(function(e){t.setState({data:e})})}},{key:"render",value:function(){return h.a.createElement(u.Fragment,null,this.state.data&&h.a.createElement(b,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),e}(u.Component),S=(n=w,function(t){function e(t){var a;return Object(i.default)(this,e),(a=Object(s.default)(this,Object(o.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(m.default)(Object(m.default)(a))),a}return Object(c.default)(e,t),Object(l.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:a}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return h.a.createElement(n,Object(r.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return h.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(u.Component)),E=function(t){function e(){return Object(i.default)(this,e),Object(s.default)(this,Object(o.default)(e).apply(this,arguments))}return Object(c.default)(e,t),Object(l.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session;t.navMenu;return h.a.createElement(d.a,Object(r.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),h.a.createElement("div",{className:"content"},h.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),h.a.createElement("p",null,"The Coca-Cola Company is an American ...."),h.a.createElement(S,null)))}}]),e}(u.Component);e.default=E},G9HM:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area",function(){var t=a("3L/t");return{page:t.default||t}}])},azxR:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("hHgk"),r=a.n(n);function i(t,e,a){return e in t?r()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}}},[["G9HM",1,0]]]);