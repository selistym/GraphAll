(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3L/t":function(t,e,a){"use strict";a.r(e);var n,r=a("UrUy"),i=a.n(r),l=a("JYC+"),o=a.n(l),s=a("R3/3"),u=a("z3IF"),c=a("LkAs"),h=a("Moms"),d=a("bMj6"),f=a("hZod"),g=a("tEuJ"),m=a("mXGw"),p=a.n(m),v=a("CXsl"),b=a("t1Qi"),y=a("YKN3"),w=a("azxR"),E=(m.Component,function(t){function e(t){var a;Object(c.default)(this,e);var n=(a=Object(d.default)(this,Object(f.default)(e).call(this,t))).props,r=n.handle,i=n.svgDimen,l=n.margins,o=n.rangeStart,s=n.rangeEnd,u=n.xScale;return a.state={handle:r,svgDimen:i,margins:l,rangeStart:o,rangeEnd:s,xScale:u},a}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.handle,a=t.svgDimen,n=t.margins,r=t.rangeStart,i=t.rangeEnd,l=t.xScale;this.setState({handle:e,svgDimen:a,margins:n,rangeStart:r,rangeEnd:i,xScale:l})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.rangeStart,r=t.rangeEnd,i=t.xScale,l=t.handle,o=p.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:e.height-a.bottom,transform:"translate(-5, 0)",fill:"#df072c"});return"handleLeft"==l?p.a.createElement("g",{className:l,transform:"translate(".concat(i(n),", 0)"),onMouseOver:this.onMouseOver.bind(this)},o):p.a.createElement("g",{className:l,transform:"translate(".concat(i(r),", 0)"),onMouseOver:this.onMouseOver.bind(this)},o)}},{key:"componentDidUpdate",value:function(){var t,e=this.state,a=e.xScale,n=(e.rangeStart,e.rangeEnd,e.handle),r=(this.props.changeHandlerValue,b.i().on("start",function(){t=i(b.p(this)[0])}).on("drag",function(){t=i(b.p(this)[0]),console.log(t),b.w("."+n).attr("transform","translate("+a(t)+", 0)")}).on("end",function(){b.w("."+n).attr("transform","translate("+a(t)+",0)")}));function i(t){return Math.round(a(t))}b.w(".graphSliderGroup").call(r)}}]),e}(p.a.Component)),O=function(t){function e(t){var a;Object(c.default)(this,e),a=Object(d.default)(this,Object(f.default)(e).call(this,t)),Object(w.a)(Object(y.default)(Object(y.default)(a)),"changeHandlerValue",function(t,e){var n=a.state,r=n.total,i=n.rangeStart,l=n.rangeEnd,o=b.y("%Y-%m-%d"),s=[];if(s.column=r.column,"handleLeft"==t){for(var u=0;u<r.length;u++)o(r[u].Date)>=e&&o(r[u].Date)<=l&&s.push(r[u]);a.setState({rangeStart:e,partial:s})}else{for(var c=0;c<r.length;c++)o(r[c].Date)<=e&&o(r[c].Date)>=i&&s.push(r[c]);a.setState({rangeEnd:e,partial:s})}});var n=a.props,r=n.data,i=n.width,l=n.height,o=b.y("%Y-%m-%d"),s=r.sort(function(t,e){return b.c(o(t.Date),o(e.Date))}),u=s.map(function(t){return o(t.Date)});return a.state={total:s,partial:s,width:i,height:l,rangeStart:u[0],rangeEnd:u[u.length-1]},a}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.data,a=t.width,n=t.height,r=b.y("%Y-%m-%d"),i=e.sort(function(t,e){return b.c(r(t.Date),r(e.Date))}),l=i.map(function(t){return r(t.Date)});this.setState({total:i,partial:i,width:a,height:n,rangeStart:l[0],rangeEnd:l[l.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var t=this.state,e=t.width,a=t.height,n=t.total,r=20,i=20,l=20,o=20,s=e-o-i,u=a/6,c=n.columns.slice(2).map(function(t){return{id:t,values:n.map(function(e){return{date:e.Date,value:e[t]}})}}),h=b.n(c[0].values,function(t){return t.value}),d=b.y("%Y-%m-%d"),f=c[0].values.map(function(t){return d(t.date)}),g=b.u().range([o,s-i]).domain(b.j(f)),m=b.s().range([u-l,r]).domain([0,h]),p=b.b().curve(b.g).x(function(t){return g(t.date)}).y0(m(0)).y1(function(t){return m(t.value)}),v=b.w(this.GraphAxisElement);v.selectAll("*").remove(),v.append("g").attr("transform","translate(0,"+(u-l)+")").call(b.d(g).tickSize(0).tickFormat(b.x("%Y-%m-%d"))).selectAll("text").style("font-size","10px").style("fill","black").attr("transform","rotate(-65)"),v.append("g").call(b.e().scale(m).ticks(10).tickSize(0)).select(".domain").style("opacity",0),v.selectAll(".area").data(c).enter().append("path").attr("d",function(t){return p(t.values)}).style("fill","#ddd")}},{key:"render",value:function(){var t=this,e=this.state,a=e.width,n=e.height,r=e.total,i=(e.partial,e.rangeStart),l=e.rangeEnd,o={top:20,right:20,bottom:20,left:20},s={width:a-o.left-o.right,height:n/6},u={width:a-o.left-o.right,height:n},c=b.y("%Y-%m-%d"),h=r.map(function(t){return c(t.Date)}),d=b.u().range([o.left,u.width-o.right]).domain(b.j(h));console.log(d(i),"rangestart");var f=p.a.createElement("rect",{x:d(i),y:"0",width:d(l)-d(i),height:s.height-o.bottom,fill:"rgba(54, 174, 175, 0.65)"});return p.a.createElement("svg",{className:"areaChartSvg",width:u.width,height:u.height},p.a.createElement("g",{className:"graphSliderGroup",transform:"translate(0, ".concat(5*n/6,")")},p.a.createElement("g",{className:"graphSliderAxis",ref:function(e){return t.GraphAxisElement=e}}),f,p.a.createElement(E,{className:"handleLeft",handle:"handleLeft",changeHandlerValue:this.changeHandlerValue,rangeStart:i,rangeEnd:l,svgDimen:s,margins:o,xScale:d}),p.a.createElement(E,{className:"handleRight",handle:"handleRight",changeHandlerValue:this.changeHandlerValue,rangeStart:i,rangeEnd:l,svgDimen:s,margins:o,xScale:d})))}}]),e}(m.Component),j=function(t){function e(t){var a;Object(c.default)(this,e);var n=(a=Object(d.default)(this,Object(f.default)(e).call(this,t))).props,r=n.parentWidth,i=n.parentHeight,l=n.data;return l.columns=a.getColumns(l),a.state={width:Math.max(r,450),height:Math.max(i,400),data:l},a}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.parentWidth,a=t.parentHeight,n=t.data;n.columns=this.getColumns(n),this.setState({width:Math.max(e,450),height:Math.max(a,400),data:n})}},{key:"getColumns",value:function(t){var e=[];for(var a in t[0])e.push(a);return e}},{key:"render",value:function(){return p.a.createElement(m.Fragment,null,this.state.data&&p.a.createElement(O,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),e}(m.Component),S=(n=j,function(t){function e(t){var a;return Object(c.default)(this,e),(a=Object(d.default)(this,Object(f.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(y.default)(Object(y.default)(a))),a}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:a}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return p.a.createElement(n,Object(u.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return p.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(m.Component)),C=function(t){function e(){return Object(c.default)(this,e),Object(d.default)(this,Object(f.default)(e).apply(this,arguments))}return Object(g.default)(e,t),Object(h.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session,a=(t.navMenu,t.data);return p.a.createElement(v.a,Object(u.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),p.a.createElement("div",{className:"content"},p.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),p.a.createElement("p",null,"The Coca-Cola Company is an American ...."),p.a.createElement(S,{data:a[0].historyPrice100})))}}],[{key:"getInitialProps",value:function(){var t=Object(s.default)(i.a.mark(function t(e){var a,n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.req,n=a?a.headers["user-agent"]:navigator.userAgent,t.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:o()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            historyPrice100 {\n              Date\n              Volume\n              Close\n              }\n          }\n        }'})}).then(function(t){return t.json()}).then(function(t){return[t.data.security]});case 4:return r=t.sent,t.abrupt("return",{userAgent:n,data:r});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),e}(m.Component);e.default=C},G9HM:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area",function(){var t=a("3L/t");return{page:t.default||t}}])},azxR:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("hHgk"),r=a.n(n);function i(t,e,a){return e in t?r()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}}},[["G9HM",1,0]]]);