(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3L/t":function(t,e,a){"use strict";a.r(e);var n,r=a("z3IF"),i=a("LkAs"),l=a("Moms"),s=a("bMj6"),o=a("hZod"),c=a("tEuJ"),h=a("mXGw"),u=a.n(h),d=a("CXsl"),m=a("t1Qi"),p=a("YKN3"),f=a("azxR"),g=function(t){function e(t){var a;return Object(i.default)(this,e),(a=Object(s.default)(this,Object(o.default)(e).call(this,t))).state={margins:a.props.margins,svgDimen:a.props.svgDimen,partial:a.props.partial,columns:a.props.columns},a}return Object(c.default)(e,t),Object(l.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({svgDimen:t.svgDimen,partial:t.partial,columns:t.columns})}},{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(){this.drawGraph()}},{key:"drawGraph",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.partial,r=t.columns;void 0===n.columns&&(n.columns=r);var i=n.columns.slice(1,3).map(function(t){return{id:t,values:n.map(function(e){return{year:e.year,value:e[t]}})}}),l=i[0].values[0].year,s=i[0].values[i[0].values.length-1].year,o=m.t().domain(["grey","red"]).range(["rgba(189, 187, 188, 0.7)","rgba(223, 7, 44, 0.7)"]),c=m.s().range([a.left,e.width-a.right]).domain([l,s]),h=m.s().range([e.height-a.bottom,a.top]).domain([0,100]);o.domain(i.map(function(t){return t.id}));var u=m.b().curve(m.h).x(function(t){return c(t.year)}).y0(h(0)).y1(function(t){return h(t.value)}),d=m.w(this.el);d.selectAll("*").remove(),d.append("g").attr("transform","translate(0,"+(e.height-a.bottom)+")").call(m.d().scale(c).ticks(i[0].values.length).tickSize(0).tickFormat(m.k(""))).selectAll("text").style("font-size","10px").style("fill","black"),d.append("g").call(m.e().scale(h).ticks(10).tickSize(0)).select(".domain").style("opacity",0),d.selectAll(".area").data(i).enter().append("path").attr("d",function(t){return u(t.values)}).style("fill",function(t){return o(t.id)})}},{key:"render",value:function(){var t=this,e=this.state.svgDimen;return u.a.createElement("svg",{className:"graphSvg",width:e.width,height:e.height},u.a.createElement("g",{className:"graphPane",ref:function(e){return t.el=e}}))}}]),e}(h.Component),v=function(t){function e(t){var a;return Object(i.default)(this,e),(a=Object(s.default)(this,Object(o.default)(e).call(this,t))).state={handle:a.props.handle,svgDimen:a.props.svgDimen,margins:a.props.margins,years:a.props.years,initValue:a.props.initValue,xScale:a.props.xScale,rangeValues:a.props.rangeValues},a}return Object(c.default)(e,t),Object(l.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({svgDimen:t.svgDimen,years:t.years,handle:t.handle,xScale:t.xScale})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.initValue,r=t.xScale,i=t.handle,l=u.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:e.height-a.bottom,transform:"translate(-5,0)",fill:"#df072c"});return u.a.createElement("g",{className:i,transform:"translate(".concat(r(n),",0)"),onMouseOver:this.onMouseOver.bind(this)},l)}},{key:"componentDidUpdate",value:function(t,e){var a,n,r=this.state,i=r.margins,l=r.svgDimen,s=r.xScale,o=r.years,c=r.handle,h=r.rangeValues,u=this.props.onChangePeriod,d=this,p=(l.width-i.left-i.right)/o.length,f=m.j().on("start",function(){a=m.p(this)[0],n=g(a)}).on("drag",function(){a=m.p(this)[0],n=g(a),"handleLeft"===c?h.h1=a:h.h2=a,h.h2-h.h1>p&&a>i.left&&a<l.width-i.right?(m.w("."+d.state.handle).attr("transform","translate("+a+",0)"),"handleLeft"===c?(h.tempH1=a,h.trueYear1=n):(h.tempH2=a,h.trueYear2=n)):(h.h1=h.tempH1,h.h2=h.tempH2,n="handleLeft"===c?h.trueYear1:h.trueYear2);m.w(".rangeBarFilled").attr("x",h.h1).attr("y",0).attr("width",h.h2-h.h1).attr("height",l.height-i.bottom)}).on("end",function(){h.h1=s(g(h.tempH1)),h.h2=s(g(h.tempH2)),m.w("."+d.state.handle).attr("transform","translate("+s(n)+",0)"),m.w(".rangeBarFilled").attr("x",s(h.trueYear1)).attr("y",0).attr("width",s(h.trueYear2)-s(h.trueYear1)).attr("height",l.height-i.bottom),u(h.trueYear1,h.trueYear2)});function g(t){return Math.round(s.invert(t))}m.w(".graphSliderGroup").call(f)}}]),e}(u.a.Component),y=function(t){function e(t){var a;return Object(i.default)(this,e),(a=Object(s.default)(this,Object(o.default)(e).call(this,t))).state={margins:a.props.margins,svgDimen:a.props.svgDimen,total:a.props.total,columns:a.props.columns},a}return Object(c.default)(e,t),Object(l.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({total:t.total,svgDimen:t.svgDimen})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.total,r=t.columns;void 0===n.columns&&(n.columns=r);var i=n.columns.slice(3).map(function(t){return{id:t,values:n.map(function(e){return{year:e.year,slide:e[t]}})}}),l=i[0].values[0].year,s=i[0].values[i[0].values.length-1].year,o=m.s().range([a.left,e.width-a.right]).domain([l,s]),c=m.s().range([e.height-a.bottom,a.top]).domain([0,100]),h=m.b().curve(m.h).x(function(t){return o(t.year)}).y0(c(0)).y1(function(t){return c(t.slide)}),u=m.w(this.GraphAxisElement);u.selectAll("*").remove(),u.append("g").attr("transform","translate(0,"+(e.height-a.bottom)+")").call(m.d().scale(o).ticks(i[0].values.length).tickFormat(m.k(""))).selectAll("text").style("font-size","10px").style("fill","black"),u.append("g").call(m.e().scale(c).ticks(10).tickSize(0)).select(".domain").style("opacity",0),u.selectAll(".area").data(i).enter().append("path").attr("d",function(t){return h(t.values)}).style("fill","#ddd")}},{key:"render",value:function(){var t=this,e=this.state,a=e.svgDimen,n=e.total,r=e.margins,i=this.props.onChangePeriod,l=n.map(function(t){return t.year}),s=l[0],o=l[l.length-1],c=m.s().range([r.left,a.width-r.right]).domain([s,o]),h={h1:c(s),h2:c(o),tempH1:c(s),tempH2:c(o),trueYear1:s,trueYear2:o};return u.a.createElement("svg",{className:"graphSliderSvg",width:a.width,height:a.height},u.a.createElement("g",{className:"graphSliderGroup"},u.a.createElement("g",{className:"graphSliderAxis",ref:function(e){return t.GraphAxisElement=e}}),u.a.createElement("rect",{x:c(s),y:"0",width:c(o)-c(s),height:a.height-r.bottom,fill:"rgba(54, 174, 175, 0.65)",className:"rangeBarFilled"}),u.a.createElement(v,{className:"handleLeft",onChangePeriod:i,transform:"translate(".concat(c(s),",0)"),svgDimen:a,margins:r,handle:"handleLeft",years:l,rangeValues:h,xScale:c,initValue:s}),u.a.createElement(v,{className:"handleRight",onChangePeriod:i,transform:"translate(".concat(c(o),",0)"),svgDimen:a,margins:r,handle:"handleRight",years:l,rangeValues:h,xScale:c,initValue:o})))}}]),e}(h.Component),b=function(t){function e(t){var a;return Object(i.default)(this,e),a=Object(s.default)(this,Object(o.default)(e).call(this,t)),Object(f.a)(Object(p.default)(Object(p.default)(a)),"changePeriod",function(t,e){for(var n=a.state.total,r=[],i=0;i<n.length;i++)n[i].year>=t&&n[i].year<=e&&r.push(n[i]);r.columns=n.columns,a.setState({partial:r})}),a.state={total:a.props.data,partial:a.props.data,csv_cols:a.props.data.columns,width:a.props.width,height:a.props.height},a}return Object(c.default)(e,t),Object(l.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({total:t.data,partial:t.data,width:t.width,height:t.height})}},{key:"render",value:function(){var t=this.state,e=t.width,a=t.height,n=t.total,r=t.partial,i=t.csv_cols,l={top:20,right:20,bottom:20,left:20},s={width:e-l.left-l.right,height:a/6},o={width:e-l.left-l.right,height:5*a/6};return u.a.createElement("div",{className:"areaChartPane"},u.a.createElement("div",{className:"areaChart"},u.a.createElement(g,{margins:l,svgDimen:o,partial:r,columns:i})),u.a.createElement("div",{className:"graphSlider"},u.a.createElement(y,{onChangePeriod:this.changePeriod,margins:l,svgDimen:s,total:n,columns:i})))}}]),e}(h.Component),w=function(t){function e(t){var a;Object(i.default)(this,e);var n=(a=Object(s.default)(this,Object(o.default)(e).call(this,t))).props,r=n.parentWidth,l=n.parentHeight;return a.state={width:Math.max(r,450),height:Math.max(l,400)},a}return Object(c.default)(e,t),Object(l.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({width:Math.max(t.parentWidth,450),height:Math.max(t.parentHeight,400)})}},{key:"componentDidMount",value:function(){var t=this;m.g("/static/area_data.csv").then(function(e){t.setState({data:e})})}},{key:"render",value:function(){return u.a.createElement(h.Fragment,null,this.state.data&&u.a.createElement(b,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),e}(h.Component),O=(n=w,function(t){function e(t){var a;return Object(i.default)(this,e),(a=Object(s.default)(this,Object(o.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(p.default)(Object(p.default)(a))),a}return Object(c.default)(e,t),Object(l.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:a}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return u.a.createElement(n,Object(r.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return u.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(h.Component)),j=function(t){function e(){return Object(i.default)(this,e),Object(s.default)(this,Object(o.default)(e).apply(this,arguments))}return Object(c.default)(e,t),Object(l.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session;t.navMenu;return u.a.createElement(d.a,Object(r.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),u.a.createElement("div",{className:"content"},u.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),u.a.createElement("p",null,"The Coca-Cola Company is an American ...."),u.a.createElement(O,null)))}}]),e}(h.Component);e.default=j},G9HM:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area",function(){var t=a("3L/t");return{page:t.default||t}}])},azxR:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("hHgk"),r=a.n(n);function i(t,e,a){return e in t?r()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}}},[["G9HM",1,0]]]);