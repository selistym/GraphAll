(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3L/t":function(e,t,a){"use strict";a.r(t);var n,r=a("UrUy"),i=a.n(r),l=a("JYC+"),s=a.n(l),c=a("R3/3"),o=a("z3IF"),u=a("LkAs"),h=a("Moms"),d=a("bMj6"),f=a("hZod"),g=a("tEuJ"),m=a("mXGw"),p=a.n(m),v=a("CXsl"),y=a("t1Qi"),b=a("YKN3"),w=a("azxR"),O=function(e){function t(e){var a;return Object(u.default)(this,t),(a=Object(d.default)(this,Object(f.default)(t).call(this,e))).state={margins:a.props.margins,svgDimen:a.props.svgDimen,partial:a.props.partial,columns:a.props.columns},a}return Object(g.default)(t,e),Object(h.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({svgDimen:e.svgDimen,partial:e.partial,columns:e.columns})}},{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(){this.drawGraph()}},{key:"drawGraph",value:function(){var e=this.state,t=e.svgDimen,a=e.margins,n=e.partial,r=e.columns;void 0===n.columns&&(n.columns=r);var i=n.columns.slice(1,3).map(function(e){return{id:e,values:n.map(function(t){return{year:t.year,value:t[e]}})}}),l=i[0].values[0].year,s=i[0].values[i[0].values.length-1].year,c=y.t().domain(["grey","red"]).range(["rgba(189, 187, 188, 0.7)","rgba(223, 7, 44, 0.7)"]),o=y.s().range([a.left,t.width-a.right]).domain([l,s]),u=y.s().range([t.height-a.bottom,a.top]).domain([0,100]);c.domain(i.map(function(e){return e.id}));var h=y.b().curve(y.h).x(function(e){return o(e.year)}).y0(u(0)).y1(function(e){return u(e.value)}),d=y.w(this.el);d.selectAll("*").remove(),d.append("g").attr("transform","translate(0,"+(t.height-a.bottom)+")").call(y.d().scale(o).ticks(i[0].values.length).tickSize(0).tickFormat(y.k(""))).selectAll("text").style("font-size","10px").style("fill","black"),d.append("g").call(y.e().scale(u).ticks(10).tickSize(0)).select(".domain").style("opacity",0),d.selectAll(".area").data(i).enter().append("path").attr("d",function(e){return h(e.values)}).style("fill",function(e){return c(e.id)})}},{key:"render",value:function(){var e=this,t=this.state.svgDimen;return p.a.createElement("svg",{className:"graphSvg",width:t.width,height:t.height},p.a.createElement("g",{className:"graphPane",ref:function(t){return e.el=t}}))}}]),t}(m.Component),E=function(e){function t(e){var a;Object(u.default)(this,t);var n=(a=Object(d.default)(this,Object(f.default)(t).call(this,e))).props,r=n.handle,i=n.svgDimen,l=n.margins,s=n.rangeStart,c=n.rangeEnd,o=n.xScale;return a.state={handle:r,svgDimen:i,margins:l,rangeStart:s,rangeEnd:c,xScale:o},a}return Object(g.default)(t,e),Object(h.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.handle,a=e.svgDimen,n=e.margins,r=e.rangeStart,i=e.rangeEnd,l=e.xScale;this.setState({handle:t,svgDimen:a,margins:n,rangeStart:r,rangeEnd:i,xScale:l})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var e=this.state,t=e.svgDimen,a=e.margins,n=e.rangeStart,r=e.rangeEnd,i=e.xScale,l=e.handle,s=p.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:t.height-a.bottom,transform:"translate(-5, 0)",fill:"#df072c"});return"handleLeft"==l?p.a.createElement("g",{className:l,transform:"translate(".concat(i(n),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s):p.a.createElement("g",{className:l,transform:"translate(".concat(i(r),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s)}},{key:"shouldComponentUpdate",value:function(e,t){}},{key:"componentDidUpdate",value:function(){var e,t=this.state,a=t.xScale,n=(t.rangeStart,t.rangeEnd,t.handle),r=this.props.changeHandlerValue,i=this,l=y.j().on("start",function(){e=s(y.p(this)[0])}).on("drag",function(){e=s(y.p(this)[0]),y.w("."+i.state.handle).attr("transform","translate("+a(e)+", 0)"),r(n,e)}).on("end",function(){y.w("."+i.state.handle).attr("transform","translate("+a(e)+",0)"),r(n,e)});function s(e){return Math.round(a.invert(e))}y.w(".graphSliderGroup").call(l)}}]),t}(p.a.Component),j=function(e){function t(e){var a;Object(u.default)(this,t),a=Object(d.default)(this,Object(f.default)(t).call(this,e)),Object(w.a)(Object(b.default)(Object(b.default)(a)),"changeHandlerValue",function(e,t){var n=a.state,r=n.total,i=n.rangeStart,l=n.rangeEnd,s=n.csv_cols,c=[];if(c.columns=s,"handleLeft"==e){for(var o=0;o<r.length;o++)r[o].year>=t&&r[o].year<=l&&c.push(r[o]);a.setState({rangeStart:t,partial:c})}else{for(var u=0;u<r.length;u++)r[u].year>=i&&r[u].year<=t&&c.push(r[u]);a.setState({rangeEnd:t,partial:c})}});var n=a.props,r=n.data,i=n.width,l=n.height;console.log(r,"from index");var s=r.sort(function(e,t){return y.c(e.year,t.year)}),c=s.map(function(e){return e.year});return a.state={total:s,partial:s,csv_cols:r.columns,width:i,height:l,rangeStart:c[0],rangeEnd:c[c.length-1]},a}return Object(g.default)(t,e),Object(h.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.data,a=e.width,n=e.height,r=t.sort(function(e,t){return y.c(e.year,t.year)}),i=r.map(function(e){return e.year});this.setState({total:r,partial:r,csv_cols:t.columns,width:a,height:n,rangeStart:i[0],rangeEnd:i[i.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var e=this.state,t=e.width,a=e.height,n=e.total,r=e.csv_cols,i=20,l=20,s=20,c=20,o=t-c-l,u=a/6;void 0===n.columns&&(n.columns=r);var h=n.columns.slice(3).map(function(e){return{id:e,values:n.map(function(t){return{year:t.year,slide:t[e]}})}}),d=h[0].values[0].year,f=h[0].values[h[0].values.length-1].year,g=y.s().range([c,o-l]).domain([d,f]),m=y.s().range([u-s,i]).domain([0,100]),p=y.b().curve(y.h).x(function(e){return g(e.year)}).y0(m(0)).y1(function(e){return m(e.slide)}),v=y.w(this.GraphAxisElement);v.selectAll("*").remove(),v.append("g").attr("transform","translate(0,"+(u-s)+")").call(y.d().scale(g).ticks(h[0].values.length).tickFormat(y.k(""))).selectAll("text").style("font-size","10px").style("fill","black"),v.append("g").call(y.e().scale(m).ticks(10).tickSize(0)).select(".domain").style("opacity",0),v.selectAll(".area").data(h).enter().append("path").attr("d",function(e){return p(e.values)}).style("fill","#ddd")}},{key:"render",value:function(){var e=this,t=this.state,a=t.width,n=t.height,r=t.total,i=t.partial,l=t.csv_cols,s=t.rangeStart,c=t.rangeEnd,o={top:20,right:20,bottom:20,left:20},u={width:a-o.left-o.right,height:n/6},h={width:a-o.left-o.right,height:5*n/6},d={width:a-o.left-o.right,height:n},f=r.map(function(e){return e.year}),g=f[0],m=f[f.length-1],v=y.s().range([o.left,d.width-o.right]).domain([g,m]).clamp(!0),b=p.a.createElement("rect",{x:v(s),y:"0",width:v(c)-v(s),height:u.height-o.bottom,fill:"rgba(54, 174, 175, 0.65)"});return p.a.createElement("svg",{className:"areaChartSvg",width:d.width,height:d.height},p.a.createElement("g",{className:"Chart"},p.a.createElement(O,{margins:o,svgDimen:h,partial:i,columns:l})),p.a.createElement("g",{className:"graphSliderGroup",transform:"translate(0, ".concat(5*n/6,")")},p.a.createElement("g",{className:"graphSliderAxis",ref:function(t){return e.GraphAxisElement=t}}),b,p.a.createElement(E,{className:"handleLeft",handle:"handleLeft",changeHandlerValue:this.changeHandlerValue,rangeStart:s,rangeEnd:c,svgDimen:u,margins:o,xScale:v}),p.a.createElement(E,{className:"handleRight",handle:"handleRight",changeHandlerValue:this.changeHandlerValue,rangeStart:s,rangeEnd:c,svgDimen:u,margins:o,xScale:v})))}}]),t}(m.Component),k=function(e){function t(e){var a;Object(u.default)(this,t);var n=(a=Object(d.default)(this,Object(f.default)(t).call(this,e))).props,r=n.parentWidth,i=n.parentHeight;return a.state={width:Math.max(r,450),height:Math.max(i,400)},a}return Object(g.default)(t,e),Object(h.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({width:Math.max(e.parentWidth,450),height:Math.max(e.parentHeight,400)})}},{key:"componentDidMount",value:function(){var e=this;y.g("/static/area_data.csv").then(function(t){e.setState({data:t})})}},{key:"render",value:function(){return p.a.createElement(m.Fragment,null,this.state.data&&p.a.createElement(j,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),t}(m.Component),S=(n=k,function(e){function t(e){var a;return Object(u.default)(this,t),(a=Object(d.default)(this,Object(f.default)(t).call(this,e))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(b.default)(Object(b.default)(a))),a}return Object(g.default)(t,e),Object(h.default)(t,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var e=this.state.containerWidth,t=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;e!==t&&this.setState(function(){return{containerWidth:t,containerHeight:a}})}},{key:"renderChart",value:function(){var e=this.state.containerWidth,t=this.state.containerHeight;return p.a.createElement(n,Object(o.a)({},this.props,{parentWidth:e,parentHeight:t}))}},{key:"render",value:function(){var e=this,t=null!==this.state.containerWidth;return p.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(t){e.chartContainer=t},className:"Responsive-wrapper"},t&&this.renderChart())}}]),t}(m.Component)),C=function(e){function t(){return Object(u.default)(this,t),Object(d.default)(this,Object(f.default)(t).apply(this,arguments))}return Object(g.default)(t,e),Object(h.default)(t,[{key:"render",value:function(){var e=this.props,t=e.session,a=(e.navMenu,e.data);return p.a.createElement(v.a,Object(o.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),p.a.createElement("div",{className:"content"},p.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),p.a.createElement("p",null,"The Coca-Cola Company is an American ...."),p.a.createElement(S,{data:a[0].historyPrice100})))}}],[{key:"getInitialProps",value:function(){var e=Object(c.default)(i.a.mark(function e(t){var a,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.req,n=a?a.headers["user-agent"]:navigator.userAgent,e.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:s()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            historyPrice100 {\n              Date\n              Volume\n              Close\n              }\n          }\n        }'})}).then(function(e){return e.json()}).then(function(e){return[e.data.security]});case 4:return r=e.sent,e.abrupt("return",{userAgent:n,data:r});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(m.Component);t.default=C},G9HM:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area",function(){var e=a("3L/t");return{page:e.default||e}}])},azxR:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a("hHgk"),r=a.n(n);function i(e,t,a){return t in e?r()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}}},[["G9HM",1,0]]]);