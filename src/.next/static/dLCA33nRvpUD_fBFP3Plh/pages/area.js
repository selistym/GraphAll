(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3L/t":function(e,t,a){"use strict";a.r(t);var n,r=a("z3IF"),i=a("LkAs"),l=a("Moms"),s=a("bMj6"),o=a("hZod"),c=a("tEuJ"),u=a("mXGw"),h=a.n(u),d=a("CXsl"),m=a("t1Qi"),p=a("YKN3"),g=a("azxR"),f=function(e){function t(e){var a;return Object(i.default)(this,t),(a=Object(s.default)(this,Object(o.default)(t).call(this,e))).state={margins:a.props.margins,svgDimen:a.props.svgDimen,partial:a.props.partial,columns:a.props.columns},a}return Object(c.default)(t,e),Object(l.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({svgDimen:e.svgDimen,partial:e.partial,columns:e.columns})}},{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(){this.drawGraph()}},{key:"drawGraph",value:function(){var e=this.state,t=e.svgDimen,a=e.margins,n=e.partial,r=e.columns;void 0===n.columns&&(n.columns=r);var i=n.columns.slice(1,3).map(function(e){return{id:e,values:n.map(function(t){return{year:t.year,value:t[e]}})}}),l=i[0].values[0].year,s=i[0].values[i[0].values.length-1].year,o=m.t().domain(["grey","red"]).range(["rgba(189, 187, 188, 0.7)","rgba(223, 7, 44, 0.7)"]),c=m.s().range([a.left,t.width-a.right]).domain([l,s]),u=m.s().range([t.height-a.bottom,a.top]).domain([0,100]);o.domain(i.map(function(e){return e.id}));var h=m.b().curve(m.h).x(function(e){return c(e.year)}).y0(u(0)).y1(function(e){return u(e.value)}),d=m.w(this.el);d.selectAll("*").remove(),d.append("g").attr("transform","translate(0,"+(t.height-a.bottom)+")").call(m.d().scale(c).ticks(i[0].values.length).tickSize(0).tickFormat(m.k(""))).selectAll("text").style("font-size","10px").style("fill","black"),d.append("g").call(m.e().scale(u).ticks(10).tickSize(0)).select(".domain").style("opacity",0),d.selectAll(".area").data(i).enter().append("path").attr("d",function(e){return h(e.values)}).style("fill",function(e){return o(e.id)})}},{key:"render",value:function(){var e=this,t=this.state.svgDimen;return h.a.createElement("svg",{className:"graphSvg",width:t.width,height:t.height},h.a.createElement("g",{className:"graphPane",ref:function(t){return e.el=t}}))}}]),t}(u.Component),v=function(e){function t(e){var a;return Object(i.default)(this,t),(a=Object(s.default)(this,Object(o.default)(t).call(this,e))).state={handle:a.props.handle,svgDimen:a.props.svgDimen,margins:a.props.margins,years:a.props.years,initValue:a.props.initValue,xScale:a.props.xScale,rangeValues:a.props.rangeValues},a}return Object(c.default)(t,e),Object(l.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({svgDimen:e.svgDimen,years:e.years,handle:e.handle,initValue:e.initValue,xScale:e.xScale,rangeValues:e.rangeValues})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){console.log("initial!");var e=this.state,t=e.svgDimen,a=e.margins,n=e.initValue,r=e.xScale,i=e.handle,l=h.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:t.height-a.bottom,transform:"translate(-5,0)",fill:"#df072c"});return h.a.createElement("g",{className:i,transform:"translate(".concat(r(n),",0)"),onMouseOver:this.onMouseOver.bind(this)},l)}},{key:"componentDidUpdate",value:function(e,t){var a,n,r=this.state,i=r.margins,l=r.svgDimen,s=r.xScale,o=r.years,c=r.handle,u=r.rangeValues,h=this.props.onChangePeriod,d=this,p=(l.width-i.left-i.right)/o.length,g=m.j().on("start",function(){}).on("drag",function(){a=m.p(this)[0],n=f(a),"handleLeft"===c?u.h1=a:u.h2=a,u.h2-u.h1>p&&a>i.left&&a<l.width-i.right?(m.w("."+d.state.handle).attr("transform","translate("+a+",0)"),"handleLeft"===c?(u.tempH1=a,u.trueYear1=n):(u.tempH2=a,u.trueYear2=n)):(u.h1=u.tempH1,u.h2=u.tempH2,n="handleLeft"===c?u.trueYear1:u.trueYear2);m.w(".rangeBarFilled").attr("x",u.h1).attr("y",0).attr("width",u.h2-u.h1).attr("height",l.height-i.bottom)}).on("end",function(){u.h1=s(f(u.tempH1)),u.h2=s(f(u.tempH2)),console.log(f(u.tempH1)+":"+f(u.tempH2)),console.log("between"),console.log(u.trueYear1+":"+u.trueYear2),m.w("."+d.state.handle).attr("transform","translate("+s(n)+",0)"),m.w(".rangeBarFilled").attr("x",s(u.trueYear1)).attr("y",0).attr("width",s(u.trueYear2)-s(u.trueYear1)).attr("height",l.height-i.bottom),h(u.trueYear1,u.trueYear2)});function f(e){return Math.round(s.invert(e))}m.w(".graphSliderGroup").call(g)}}]),t}(h.a.Component),y=function(e){function t(e){var a;return Object(i.default)(this,t),(a=Object(s.default)(this,Object(o.default)(t).call(this,e))).state={margins:a.props.margins,svgDimen:a.props.svgDimen,total:a.props.total,columns:a.props.columns},a}return Object(c.default)(t,e),Object(l.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({total:e.total,svgDimen:e.svgDimen})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var e=this.state,t=e.svgDimen,a=e.margins,n=e.total,r=e.columns;void 0===n.columns&&(n.columns=r);var i=n.columns.slice(3).map(function(e){return{id:e,values:n.map(function(t){return{year:t.year,slide:t[e]}})}}),l=i[0].values[0].year,s=i[0].values[i[0].values.length-1].year,o=m.s().range([a.left,t.width-a.right]).domain([l,s]),c=m.s().range([t.height-a.bottom,a.top]).domain([0,100]),u=m.b().curve(m.h).x(function(e){return o(e.year)}).y0(c(0)).y1(function(e){return c(e.slide)}),h=m.w(this.GraphAxisElement);h.selectAll("*").remove(),h.append("g").attr("transform","translate(0,"+(t.height-a.bottom)+")").call(m.d().scale(o).ticks(i[0].values.length).tickFormat(m.k(""))).selectAll("text").style("font-size","10px").style("fill","black"),h.append("g").call(m.e().scale(c).ticks(10).tickSize(0)).select(".domain").style("opacity",0),h.selectAll(".area").data(i).enter().append("path").attr("d",function(e){return u(e.values)}).style("fill","#ddd")}},{key:"render",value:function(){var e=this,t=this.state,a=t.svgDimen,n=t.total,r=t.margins,i=this.props.onChangePeriod,l=n.map(function(e){return e.year}),s=l[0],o=l[l.length-1],c=m.s().range([r.left,a.width-r.right]).domain([s,o]),u={h1:c(s),h2:c(o),tempH1:c(s),tempH2:c(o),trueYear1:s,trueYear2:o};return h.a.createElement("svg",{className:"graphSliderSvg",width:a.width,height:a.height},h.a.createElement("g",{className:"graphSliderGroup"},h.a.createElement("g",{className:"graphSliderAxis",ref:function(t){return e.GraphAxisElement=t}}),h.a.createElement("rect",{x:c(s),y:"0",width:c(o)-c(s),height:a.height-r.bottom,fill:"rgba(54, 174, 175, 0.65)",className:"rangeBarFilled"}),h.a.createElement(v,{className:"handleLeft",onChangePeriod:i,transform:"translate(".concat(c(s),",0)"),svgDimen:a,margins:r,handle:"handleLeft",years:l,rangeValues:u,xScale:c,initValue:s}),h.a.createElement(v,{className:"handleRight",onChangePeriod:i,transform:"translate(".concat(c(o),",0)"),svgDimen:a,margins:r,handle:"handleRight",years:l,rangeValues:u,xScale:c,initValue:o})))}}]),t}(u.Component),b=function(e){function t(e){var a;return Object(i.default)(this,t),a=Object(s.default)(this,Object(o.default)(t).call(this,e)),Object(g.a)(Object(p.default)(Object(p.default)(a)),"changePeriod",function(e,t){for(var n=a.state.total,r=[],i=0;i<n.length;i++)n[i].year>=e&&n[i].year<=t&&r.push(n[i]);r.columns=n.columns,a.setState({partial:r})}),a.state={total:a.props.data,partial:a.props.data,csv_cols:a.props.data.columns,width:a.props.width,height:a.props.height},a}return Object(c.default)(t,e),Object(l.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({total:e.data,partial:e.data,width:e.width,height:e.height})}},{key:"render",value:function(){var e=this.state,t=e.width,a=e.height,n=e.total,r=e.partial,i=e.csv_cols,l={top:20,right:20,bottom:20,left:20},s={width:t-l.left-l.right,height:a/6},o={width:t-l.left-l.right,height:5*a/6};return h.a.createElement("div",{className:"areaChartPane"},h.a.createElement("div",{className:"areaChart"},h.a.createElement(f,{margins:l,svgDimen:o,partial:r,columns:i})),h.a.createElement("div",{className:"graphSlider"},h.a.createElement(y,{onChangePeriod:this.changePeriod,margins:l,svgDimen:s,total:n,columns:i})))}}]),t}(u.Component),w=function(e){function t(e){var a;Object(i.default)(this,t);var n=(a=Object(s.default)(this,Object(o.default)(t).call(this,e))).props,r=n.parentWidth,l=n.parentHeight;return a.state={width:Math.max(r,450),height:Math.max(l,400)},a}return Object(c.default)(t,e),Object(l.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({width:Math.max(e.parentWidth,450),height:Math.max(e.parentHeight,400)})}},{key:"componentDidMount",value:function(){var e=this;m.g("/static/area_data.csv").then(function(t){e.setState({data:t})})}},{key:"render",value:function(){return h.a.createElement(u.Fragment,null,this.state.data&&h.a.createElement(b,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),t}(u.Component),O=(n=w,function(e){function t(e){var a;return Object(i.default)(this,t),(a=Object(s.default)(this,Object(o.default)(t).call(this,e))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(p.default)(Object(p.default)(a))),a}return Object(c.default)(t,e),Object(l.default)(t,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var e=this.state.containerWidth,t=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;e!==t&&this.setState(function(){return{containerWidth:t,containerHeight:a}})}},{key:"renderChart",value:function(){var e=this.state.containerWidth,t=this.state.containerHeight;return h.a.createElement(n,Object(r.a)({},this.props,{parentWidth:e,parentHeight:t}))}},{key:"render",value:function(){var e=this,t=null!==this.state.containerWidth;return h.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(t){e.chartContainer=t},className:"Responsive-wrapper"},t&&this.renderChart())}}]),t}(u.Component)),j=function(e){function t(){return Object(i.default)(this,t),Object(s.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(c.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.session;e.navMenu;return h.a.createElement(d.a,Object(r.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),h.a.createElement("div",{className:"content"},h.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),h.a.createElement("p",null,"The Coca-Cola Company is an American ...."),h.a.createElement(O,null)))}}]),t}(u.Component);t.default=j},G9HM:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area",function(){var e=a("3L/t");return{page:e.default||e}}])},azxR:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a("hHgk"),r=a.n(n);function i(e,t,a){return t in e?r()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}}},[["G9HM",1,0]]]);